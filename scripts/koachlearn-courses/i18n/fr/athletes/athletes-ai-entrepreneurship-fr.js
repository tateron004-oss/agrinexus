"use strict";

// Koach Learn course (French translation of athletes/athletes-ai-entrepreneurship.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-ai-entrepreneurship-fr",
  lang: "fr",
  translationOf: "athletes-ai-entrepreneurship",
  category: "Athletes",
  name: "Entrepreneuriat et IA pour les athlètes",
  skills: "Trouver une idée d'entreprise dans votre sport, Tester une idée avec de vraies personnes, Écrire un plan d'affaires d'une page avec l'IA, Construire un budget de démarrage simple, Connaître les règles : NIL, marques déposées, justificatifs et impôts",
  outcome: "transformer une idée venue de votre sport en idée d'entreprise testée : parler à cinq clients potentiels, écrire un plan d'affaires d'une page et un budget de démarrage avec l'IA, et lister les règles à vérifier avant le lancement.",
  about: [
    "Ce cours s'adresse aux athlètes et aux entraîneurs qui ont une idée d'entreprise, ou qui en veulent une : une activité d'entraînement, une idée d'application, un produit qui résout un problème que vous avez vu dans le sport, ou un service pour les équipes locales.",
    "Les entrepreneurs résolvent des problèmes pour lesquels les gens sont prêts à payer. Vous trouverez un vrai problème, vérifierez si les gens veulent votre solution avant de dépenser de l'argent, et utiliserez l'IA pour écrire un plan et un budget d'une page.",
    "Chaque leçon dure environ cinq minutes et comprend une tâche « Essayez maintenant ». Une vérification des connaissances termine chaque chapitre, et un quiz de 20 questions termine le cours. C'est une formation générale ; pour les questions juridiques, fiscales et NIL (nom, image et ressemblance), consultez les sources officielles et parlez à votre service de conformité, à un parent ou un tuteur, et à un professionnel."
  ],
  finalTask: "Écrivez un plan d'affaires d'une page pour une idée venue de votre sport : le problème, votre solution, votre client, ce que cinq vraies personnes vous ont dit, comment vous atteindrez vos clients, un budget de démarrage construit dans un tableur, et une liste de règles à vérifier (NIL, recherche de marque, justificatifs et impôts) avec les personnes que vous avez consultées.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des athlètes et des entraîneurs de lycée, d'université et en début de carrière qui ont une idée d'entreprise, ou qui en veulent une : une activité d'entraînement, une idée d'application, un produit pour un problème vu dans le sport, ou un service pour les équipes locales.",
    startingPoint: "Ils connaissent bien leur sport et voient ses problèmes de près, et utilisent un téléphone et parfois un tableur. Peu ont interrogé des clients, testé une idée à petit prix, écrit un plan d'affaires ou un budget, ou vérifié les règles NIL, de marques déposées, de licences et d'impôts.",
    gap: "Les athlètes construisent ou achètent souvent avant de vérifier que quelqu'un veut leur idée, ou se lancent sans vérifier les règles, et perdent de l'argent ou leur admissibilité. Tester avec de vrais clients, un plan d'une page, un vrai budget et une liste de règles leur donne un départ sûr et peu coûteux.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Un téléphone ou un ordinateur avec un assistant IA gratuit et Google Sheets",
      "Environ 60 minutes de leçons, plus le temps de parler à cinq personnes",
      "Les règles NIL, de marques déposées, de licence commerciale et d'impôts ; vérifiez auprès du service de conformité, de l'association de l'État ou des autorités locales",
      "Pas un conseil financier ni fiscal ; les athlètes de moins de 18 ans ont besoin d'un parent ou d'un tuteur pour les comptes, les contrats et tout emprunt"
    ],
    prerequisites: "Aucun. « Plateformes de commerce en ligne et IA pour les athlètes » est une bonne étape suivante pour vendre en ligne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir des problèmes que vous avez vus dans votre sport", action: "lister et noter les problèmes selon le nombre de personnes touchées, à quel point ils gênent et si les gens paient déjà, puis en choisir un", standard: "avec un problème choisi que vous avez vu dans la vraie vie" },
    { id: "O2", condition: "À partir de cinq personnes qui ont le problème", action: "les interroger sur ce qu'elles ont fait par le passé et noter ce qu'elles disent", standard: "sans aucune question du type « Achèteriez-vous ? » et avec les tendances communes aux cinq notées" },
    { id: "O3", condition: "Avec ce que les clients vous ont dit", action: "écrire une solution en une phrase et choisir le test le plus simple que vous pouvez mener en deux semaines", standard: "avec un chiffre qui montrera si le test a marché" },
    { id: "O4", condition: "Avec vos notes et un assistant IA", action: "écrire un plan d'affaires d'une page avec le problème, la solution, le client, ce que les clients ont dit, comment les atteindre, l'argent et les prochaines étapes", standard: "avec les chiffres inventés retirés ou marqués comme des estimations, et l'avis d'un mentor" },
    { id: "O5", condition: "Avec Google Sheets", action: "construire un budget de démarrage avec les coûts, les revenus prévus, les totaux et le bénéfice", standard: "avec de vrais prix de fournisseurs, des formules vérifiées et une relecture avec un adulte de confiance avant toute dépense" },
    { id: "O6", condition: "Avant le lancement", action: "écrire une liste de règles à vérifier sur le NIL, les noms et logos, la licence commerciale, les justificatifs et les impôts", standard: "avec une recherche USPTO faite et le nom de la personne consultée pour chaque règle" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Trouver et tester une idée",
      lessons: [
        {
          objectives: ["O1"],
          title: "Trouver un problème qui vaut la peine d'être résolu",
          minutes: 5,
          goal: "Lister les problèmes que vous avez vus dans le sport et en choisir un qui vaut la peine d'être résolu.",
          text: [
            "Les bonnes idées d'entreprise partent d'un problème, pas d'un produit. Les athlètes voient beaucoup de problèmes de près : des parents qui ne trouvent pas de bon encadrement pour débutants, des équipes qui perdent leur matériel, des joueurs qui n'ont pas les moyens d'un entraînement de qualité, des entraîneurs débordés par les plannings.",
            "Notez les problèmes dont vous, vos coéquipiers, des parents ou des entraîneurs se plaignent. Pour chacun, demandez-vous : combien de personnes ont ce problème ? À quel point est-il pénible ? Paient-ils déjà pour une mauvaise solution ?",
            "Utilisez un assistant IA pour trouver des idées : « Je joue au volley au lycée. Liste 15 problèmes qu'ont les joueurs, les parents et les entraîneurs et qu'une petite entreprise pourrait résoudre. » Entourez ensuite ceux que vous avez vraiment vus."
          ],
          steps: ["Notez les problèmes que vous avez vus dans votre sport.", "Demandez à l'IA d'en trouver d'autres.", "Entourez ceux que vous avez vus dans la vraie vie.", "Notez chacun : combien de personnes, à quel point c'est pénible, déjà payant ?", "Choisissez-en un."],
          words: [["Entrepreneur", "une personne qui crée une entreprise pour résoudre un problème."], ["Point de douleur", "un problème qui gêne assez les gens pour qu'ils veuillent le voir réglé."]],
          slides: [
            { title: "Partez d'un problème", bullets: ["Pas d'un produit", "Les athlètes voient les problèmes de près"] },
            { title: "Évaluez chaque problème", bullets: ["Combien de personnes l'ont ?", "À quel point est-il pénible ?", "Paient-ils déjà pour une mauvaise solution ?"] },
            { title: "L'IA propose, vous choisissez", bullets: ["Demandez 15 problèmes", "Entourez ceux que vous avez vus"] }
          ],
          tryIt: "Listez cinq problèmes de votre sport, ajoutez-en avec l'IA, évaluez-les et choisissez celui sur lequel vous allez travailler.",
          youCanNow: "trouver et choisir un vrai problème qui vaut la peine d'être résolu.",
          quickCheck: [
            { objective: "O1", q: "Lequel est le signe d'un problème qui vaut la peine d'être résolu ?", options: ["Vous êtes le seul à l'avoir", "Les gens paient déjà pour une mauvaise solution", "C'est amusant d'en parler", "Personne ne s'en plaint"], answer: 1, why: "Si les gens paient déjà pour une mauvaise solution, le problème compte pour eux." },
            { objective: "O1", q: "L'IA liste 15 problèmes pour votre sport. Que faites-vous ?", options: ["Choisir le plus excitant", "Les traiter tous les 15", "Entourer ceux que vous avez vraiment vus", "Demander à l'IA de choisir pour vous"], answer: 2, why: "Gardez les problèmes que vous avez vus dans la vraie vie." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Parler à de vrais clients",
          minutes: 6,
          goal: "Interroger cinq clients potentiels sur le problème avant de construire quoi que ce soit.",
          text: [
            "Avant de dépenser de l'argent, parlez aux personnes qui ont le problème. Votre but est d'apprendre, pas de vendre. Interrogez-les sur ce qu'elles ont fait, pas sur ce qu'elles pourraient faire un jour.",
            "Bonnes questions : « Racontez-moi la dernière fois que c'est arrivé. » « Qu'avez-vous fait ? » « Combien cela vous a-t-il coûté ? » « Qu'est-ce qui vous agace dans les options que vous avez ? » Évitez « Achèteriez-vous mon idée ? », car les gens disent oui pour être gentils.",
            "Parlez à cinq personnes. Notez ce qu'elles disent avec leurs mots. Si la plupart ne s'en soucient pas, c'est une excellente nouvelle : vous avez économisé du temps et de l'argent. Choisissez un autre problème ou ajustez."
          ],
          steps: ["Listez cinq personnes qui ont le problème.", "Interrogez-les sur la dernière fois que c'est arrivé.", "Demandez ce qu'elles ont fait et ce que cela a coûté.", "Notez leurs mots.", "Cherchez des points communs entre les cinq."],
          words: [["Entretien client", "une courte conversation pour comprendre le problème de quelqu'un."], ["Valider", "vérifier qu'un problème et une solution sont réels avant de construire."]],
          slides: [
            { title: "Apprendre, pas vendre", bullets: ["Parlez aux personnes qui ont le problème", "Avant de dépenser de l'argent"] },
            { title: "Bonnes questions", bullets: ["« Racontez-moi la dernière fois... »", "« Qu'avez-vous fait ? Combien cela a coûté ? »", "Pas : « Achèteriez-vous mon idée ? »"] },
            { title: "Après cinq échanges", bullets: ["Notez leurs mots", "Cherchez des points communs", "Pas d'intérêt ? Vous avez économisé"] }
          ],
          tryIt: "Demandez à un assistant IA de vous aider à écrire cinq questions d'entretien sur ce que les gens ont fait. Interrogez au moins deux personnes cette semaine et notez ce qu'elles ont dit.",
          youCanNow: "interroger des clients potentiels pour vérifier si un problème est réel.",
          quickCheck: [
            { objective: "O2", q: "Quel est votre but dans un entretien client ?", options: ["Apprendre", "Vendre", "Obtenir une promesse d'achat", "Montrer votre idée"], answer: 0, why: "Parlez pour en apprendre plus sur le problème, pas pour vendre." },
            { objective: "O2", q: "Un parent dit : « J'achèterais ça un jour, c'est sûr. » Que demandez-vous ensuite ?", options: ["« Super, je vous inscris ? »", "« Combien paieriez-vous ? »", "« Vos amis l'achèteraient aussi ? »", "« Racontez-moi la dernière fois que ce problème est arrivé. »"], answer: 3, why: "Interrogez sur ce qui s'est passé, car les gens disent oui pour être gentils." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Définir votre solution et votre offre",
          minutes: 5,
          goal: "Écrire une solution en une phrase et la version la plus simple que vous pourriez tester.",
          text: [
            "Décrivez maintenant votre solution en une phrase : « Des séances de basket pour débutants le samedi pour les 6-9 ans, animées par des joueurs de l'équipe première du lycée, à un prix abordable pour les parents. »",
            "Commencez par le test le plus simple possible, qu'on appelle parfois produit minimum viable : une séance au lieu d'une académie complète, un formulaire d'inscription au lieu d'une application, dix T-shirts au lieu de 500.",
            "L'IA peut vous aider à réfléchir à la version la plus simple : « Voici mon idée et ce que cinq clients m'ont dit. Quelle est la façon la plus petite et la moins chère de la tester en deux semaines ? » Choisissez ensuite ce que vous pouvez vraiment faire."
          ],
          steps: ["Écrivez votre solution en une phrase.", "Demandez à l'IA le plus petit test possible.", "Choisissez un test faisable en deux semaines.", "Décidez comment vous saurez que cela a marché (par exemple 8 inscriptions)."],
          words: [["Produit minimum viable (MVP)", "la version la plus simple de votre idée qui permet de la tester avec de vrais clients."], ["Offre", "exactement ce que les clients reçoivent et ce que cela coûte."]],
          slides: [
            { title: "Une solution en une phrase", bullets: ["Pour qui", "Ce qu'ils reçoivent", "Pourquoi c'est mieux"] },
            { title: "Testez petit d'abord", bullets: ["Une séance, pas une académie", "Un formulaire, pas une application", "10 T-shirts, pas 500"] },
            { title: "Définissez la réussite", bullets: ["Le plus petit test de deux semaines", "Un chiffre qui veut dire que ça a marché"] }
          ],
          tryIt: "Écrivez votre solution en une phrase. Utilisez l'IA pour trouver le plus petit test de deux semaines, et notez le chiffre qui voudrait dire que cela a marché.",
          youCanNow: "décrire votre solution et concevoir un petit test peu coûteux.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'un produit minimum viable (MVP) ?", options: ["Votre version la plus chère", "Une application complète", "La version la plus simple qui permet de tester avec de vrais clients", "Un long plan d'affaires"], answer: 2, why: "Un MVP est le plus petit test que vous pouvez mener avec de vrais clients." },
            { objective: "O3", q: "Vous voulez créer une académie d'entraînement. Quel est le meilleur premier test ?", options: ["Louer un bâtiment pour un an", "Organiser une séance avec un formulaire d'inscription", "Créer une application sur mesure", "Imprimer 500 t-shirts"], answer: 1, why: "Commencez par le test le plus simple que vous pouvez faire en deux semaines." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Trouver et tester une idée",
        questions: [
          { objective: "O1", q: "Les bonnes idées d'entreprise partent :", options: ["D'un joli logo", "D'un gros prêt", "D'un problème que les gens ont", "D'une application coûteuse"], answer: 2, why: "Résoudre de vrais problèmes, c'est ce pour quoi les gens paient." },
          { objective: "O2", q: "Quelle question d'entretien est la meilleure ?", options: ["« Racontez-moi la dernière fois que c'est arrivé. »", "« Achèteriez-vous mon idée ? »", "« Mon idée n'est-elle pas géniale ? »", "« Combien paieriez-vous un jour ? »"], answer: 0, why: "Ce que les gens ont fait est plus honnête que des prédictions." },
          { objective: "O2", q: "La plupart des personnes interrogées ne se soucient pas du problème. Cela veut dire :", options: ["Vous avez échoué", "Construisez quand même", "Interrogez-les jusqu'à ce qu'elles soient d'accord", "Vous avez économisé du temps et de l'argent ; ajustez ou choisissez un autre problème"], answer: 3, why: "Apprendre tôt est une victoire." },
          { objective: "O3", q: "Un MVP, c'est :", options: ["Le meilleur joueur du match", "La version la plus simple qui permet de tester avec de vrais clients", "Un grand lancement", "Une marque déposée"], answer: 1, why: "En affaires, MVP veut dire produit minimum viable." },
          { objective: "O3", q: "Quel est le meilleur premier test pour une idée de stage ?", options: ["Louer un stade pendant un mois", "Une séance un samedi avec un formulaire d'inscription", "Créer une application", "Imprimer 500 T-shirts"], answer: 1, why: "Les petits tests sont rapides et peu coûteux." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Plan, budget et règles",
      lessons: [
        {
          objectives: ["O4"],
          title: "Un plan d'affaires d'une page avec l'IA",
          minutes: 5,
          goal: "Écrire un plan d'affaires d'une page avec l'aide de l'IA.",
          text: [
            "Un plan d'une page vous garde concentré. Rubriques : Problème, Solution, Client, Ce que les clients m'ont dit, Comment je vais les atteindre, Argent (coûts et prix), Prochaines étapes.",
            "Donnez à un assistant IA vos notes et les résultats de vos entretiens et demandez : « Transforme ces notes en plan d'affaires d'une page avec ces rubriques. Utilise des mots simples. Signale tout ce qui est une supposition. »",
            "Lisez-le attentivement. L'IA peut faire paraître votre idée plus grande qu'elle ne l'est ou inventer des chiffres. Ne gardez que ce qui est vrai ou clairement signalé comme supposition, et montrez-le à un mentor, un entraîneur ou un enseignant pour avoir son avis."
          ],
          steps: ["Rassemblez votre problème, votre solution et vos notes d'entretien.", "Demandez à l'IA un plan d'une page avec des rubriques fixes.", "Retirez les chiffres inventés ou signalez-les comme suppositions.", "Montrez-le à un mentor pour avoir son avis."],
          words: [["Plan d'affaires", "un résumé écrit de la façon dont une entreprise fonctionnera et gagnera de l'argent."], ["Mentor", "une personne expérimentée qui vous donne des conseils."]],
          slides: [
            { title: "Rubriques du plan d'une page", bullets: ["Problème, Solution, Client", "Ce que les clients m'ont dit", "Comment les atteindre, Argent, Prochaines étapes"] },
            { title: "L'IA le rédige", bullets: ["À partir de vos notes et entretiens", "« Signale tout ce qui est une supposition »"] },
            { title: "Vous le vérifiez", bullets: ["Pas de chiffres inventés", "Montrez-le à un mentor"] }
          ],
          tryIt: "Utilisez l'IA pour transformer vos notes en plan d'une page. Signalez chaque supposition, puis demandez un avis à un mentor, un entraîneur ou un enseignant.",
          youCanNow: "écrire un plan d'affaires d'une page avec l'IA et vérifier son exactitude.",
          quickCheck: [
            { objective: "O4", q: "Quelle rubrique a sa place dans votre plan d'une page ?", options: ["Ce que les clients m'ont dit", "Vos athlètes préférés", "Toute l'histoire de votre vie", "Votre programme d'entraînement"], answer: 0, why: "Le plan comprend ce que vos cinq entretiens ont montré." },
            { objective: "O4", q: "Le plan de l'IA annonce 500 clients le premier mois, mais vous n'avez aucune preuve. Que faites-vous ?", options: ["Le garder pour impressionner", "Le doubler", "Le mettre tout en haut", "Le retirer ou le marquer comme une estimation"], answer: 3, why: "Ne gardez que ce qui est vrai ou clairement marqué comme une estimation." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Construire un budget de démarrage",
          minutes: 5,
          goal: "Construire un budget de démarrage simple dans un tableur.",
          text: [
            "Un budget de démarrage liste ce que vous devez dépenser avant et pendant votre premier test, et ce que vous pensez gagner. Restez modeste au début.",
            "Dans Google Sheets, listez les coûts (matériel, lieu, frais de site web ou de plateforme, impression, assurance si nécessaire, marketing) et les revenus prévus (prix multiplié par le nombre de clients prévus). Prenez de vrais prix auprès des fournisseurs, pas des suppositions.",
            "Demandez à l'IA de créer les formules pour les totaux et le bénéfice, et vérifiez-les vous-même. N'empruntez jamais d'argent et n'utilisez jamais une carte de crédit pour un test d'entreprise sans en parler à un parent, un tuteur ou un conseiller de confiance. Ce n'est pas un conseil financier."
          ],
          steps: ["Listez chaque coût de démarrage.", "Cherchez les vrais prix.", "Estimez les revenus : prix multiplié par le nombre de clients.", "Ajoutez les totaux et le bénéfice avec des formules.", "Relisez avec un adulte de confiance avant de dépenser."],
          words: [["Budget de démarrage", "un plan de l'argent nécessaire pour démarrer et de ce que vous pensez gagner."], ["Dépense", "l'argent que vous dépensez pour faire fonctionner l'entreprise."]],
          slides: [
            { title: "Coûts", bullets: ["Matériel et lieu", "Frais de plateforme ou de site web", "Impression, assurance, marketing"] },
            { title: "Revenus", bullets: ["Prix x clients prévus", "Utilisez de vrais prix, pas des suppositions"] },
            { title: "Soyez prudent", bullets: ["L'IA crée les formules ; vous vérifiez", "Pas d'emprunt sans un adulte de confiance"] }
          ],
          tryIt: "Construisez dans Google Sheets un budget de démarrage pour votre test de deux semaines avec de vrais prix. Demandez à l'IA d'écrire les formules du total et du bénéfice et vérifiez-les.",
          youCanNow: "construire un budget de démarrage simple avec de vrais chiffres.",
          quickCheck: [
            { objective: "O5", q: "Comment estimer les revenus prévus ?", options: ["Le prix multiplié par le nombre de clients prévus", "Les coûts moins le prix", "Les abonnés multipliés par les j'aime", "Deviner un chiffre rond"], answer: 0, why: "Les revenus prévus, c'est le prix multiplié par le nombre de clients prévus." },
            { objective: "O5", q: "Votre budget montre que vous devez acheter du matériel. Que faites-vous avant de dépenser ?", options: ["Payer avec une carte de crédit", "Emprunter à un ami", "Revoir le budget avec un parent, un tuteur ou un conseiller de confiance", "Acheter tout de suite l'option la moins chère en ligne"], answer: 2, why: "Parlez à un adulte de confiance avant d'emprunter ou de dépenser pour un test." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Les règles que tout athlète-fondateur vérifie",
          minutes: 6,
          goal: "Écrire une liste de règles à vérifier pour votre entreprise.",
          text: [
            "NIL : si votre entreprise utilise votre nom, votre image ou votre ressemblance, cela peut compter comme une activité NIL. Les athlètes universitaires devront peut-être la déclarer ; au moment de la rédaction, les athlètes de Division I déclarent les contrats avec des tiers concernés via NIL Go. Au lycée, les règles varient selon l'État. Demandez à votre service de conformité ou à l'association sportive de votre État.",
            "Noms et logos : n'utilisez pas les logos d'école, d'équipe ou de ligue sans permission. Avant de choisir un nom d'entreprise, cherchez dans les registres de marques de l'USPTO (l'office américain des brevets et des marques) et dans le registre des noms d'entreprise de votre État. Votre ville ou votre État peut exiger une licence commerciale ; consultez le site web de votre administration locale.",
            "Justificatifs et impôts : gardez chaque reçu et chaque paiement dans un tableur. L'IRS (l'administration fiscale américaine) dit que vous devez faire une déclaration de revenus si vos revenus nets de travailleur indépendant atteignent 400 $ ou plus. Parlez à un professionnel de la fiscalité. Si vous avez moins de 18 ans, un parent ou un tuteur devra vous aider pour les comptes et les contrats."
          ],
          steps: ["Demandez au service de conformité ou à l'association de votre État les règles NIL.", "Assurez-vous de n'utiliser que votre propre logo et votre propre nom.", "Cherchez dans les registres de l'USPTO et des noms d'entreprise de l'État.", "Vérifiez les règles locales de licence commerciale.", "Créez une feuille des reçus et des paiements.", "Parlez à un professionnel de la fiscalité."],
          words: [["Licence commerciale", "une autorisation d'une ville, d'un comté ou d'un État pour y exercer une activité."], ["Travail indépendant", "gagner de l'argent avec votre propre entreprise plutôt que pour un patron."]],
          slides: [
            { title: "NIL", bullets: ["Une entreprise à votre nom peut être du NIL", "Université : déclaration parfois obligatoire", "Lycée : vérifiez auprès de votre État"] },
            { title: "Noms, logos, licences", bullets: ["Pas de logos d'école ou de ligue sans permission", "Cherchez dans l'USPTO et le registre de l'État", "Vérifiez les règles locales de licence"] },
            { title: "Justificatifs et impôts", bullets: ["Gardez chaque reçu", "IRS : déclarez si revenus nets d'indépendant de 400 $ et plus", "Parlez à un professionnel de la fiscalité"] }
          ],
          sources: [
            { name: "NCAA : Nom, image et ressemblance (en anglais)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "USPTO : les bases des marques déposées (en anglais)", url: "https://www.uspto.gov/trademarks/basics" },
            { name: "IRS : centre fiscal des travailleurs indépendants (en anglais)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }
          ],
          tryIt: "Tâche finale : terminez votre plan d'une page avec le budget, puis écrivez votre liste de règles avec la personne consultée sur le NIL, le résultat de votre recherche de marque, votre vérification de licence locale et votre feuille de justificatifs.",
          youCanNow: "vérifier les règles clés avant de lancer une entreprise en tant qu'athlète.",
          quickCheck: [
            { objective: "O6", q: "Où vérifier si votre ville exige une licence commerciale ?", options: ["Sur les réseaux sociaux", "Sur le site web de vos autorités locales", "Auprès d'un chatbot d'IA", "Dans le groupe de discussion de votre entraîneur"], answer: 1, why: "Votre ville ou votre État peut exiger une licence ; vérifiez sur le site web de vos autorités locales." },
            { objective: "O6", q: "Vous avez choisi un nom d'entreprise. Que vérifiez-vous avant de l'utiliser ?", options: ["S'il rime", "Si vos amis l'aiment", "S'il a une mascotte", "Les registres de marques de l'USPTO et les registres des noms d'entreprise de votre État"], answer: 3, why: "Cherchez dans les registres de marques et de noms d'entreprise de l'État avant de choisir un nom." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Plan, budget et règles",
        questions: [
          { objective: "O4", q: "L'IA ajoute « 1 million $ la première année » à votre plan sans aucune base. Vous :", options: ["Le gardez", "En faites 2 millions $", "Le montrez à des investisseurs", "Le retirez ou le signalez comme supposition"], answer: 3, why: "Ne gardez que des chiffres vrais ou des suppositions clairement signalées." },
          { objective: "O5", q: "Les revenus prévus sont égaux à :", options: ["Prix multiplié par le nombre de clients prévus", "Coûts multipliés par deux", "Abonnés multipliés par les mentions J'aime", "Une supposition"], answer: 0, why: "C'est l'estimation de base des revenus." },
          { objective: "O5", q: "Avant d'emprunter de l'argent pour un test d'entreprise, vous devez :", options: ["Utiliser vite une carte de crédit", "Demander à un inconnu en ligne", "Parler à un parent, un tuteur ou un conseiller de confiance", "Sauter le budget"], answer: 2, why: "La dette est risquée ; demandez conseil d'abord." },
          { objective: "O6", q: "Pourquoi chercher dans les registres de l'USPTO ?", options: ["Pour trouver des clients", "Pour trouver un entraîneur", "Pour payer des impôts", "Pour éviter d'utiliser un nom qui appartient à quelqu'un d'autre"], answer: 3, why: "Les recherches de marque évitent les conflits." },
          { objective: "O6", q: "Le seuil de l'IRS pour la déclaration des revenus nets d'indépendant est de :", options: ["40 000 $", "400 $", "4 $", "Il n'y en a pas"], answer: 1, why: "C'est indiqué sur la page du centre fiscal des travailleurs indépendants de l'IRS." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Entrepreneuriat et IA pour les athlètes",
    questions: [
      { objective: "O1", q: "Un entrepreneur :", options: ["Fait seulement du sport", "Investit seulement de l'argent", "Crée une entreprise pour résoudre un problème", "Travaille pour une équipe"], answer: 2, why: "Résoudre des problèmes est l'essentiel." },
      { objective: "O1", q: "Un point de douleur, c'est :", options: ["Un problème qui gêne assez les gens pour qu'ils veuillent le voir réglé", "Une blessure", "Un tableau d'affichage", "Une pénalité"], answer: 0, why: "Les points de douleur sont des occasions d'affaires." },
      { objective: "O1", q: "Pour évaluer un problème, demandez-vous :", options: ["Combien de personnes l'ont et à quel point il est pénible", "De quelle couleur il est", "Qui est célèbre", "Combien de mentions J'aime il obtient"], answer: 0, why: "La taille et la douleur montrent s'il vaut la peine d'être résolu." },
      { objective: "O1", q: "L'IA propose 15 problèmes. Vous :", options: ["Prenez le premier", "Utilisez les 15", "Entourez ceux que vous avez vus dans la vraie vie", "Les ignorez"], answer: 2, why: "L'expérience réelle vaut mieux que des suppositions." },
      { objective: "O2", q: "Les entretiens clients servent à :", options: ["Vendre avec insistance", "Apprendre", "Se disputer", "Gagner des abonnés"], answer: 1, why: "Apprenez avant de construire." },
      { objective: "O2", q: "Pourquoi éviter « Achèteriez-vous mon idée ? »", options: ["C'est impoli", "C'est illégal", "C'est trop court", "Les gens disent oui pour être gentils"], answer: 3, why: "Ce que les gens ont fait est plus honnête." },
      { objective: "O2", q: "Combien de personnes interroger au minimum ?", options: ["Une", "Aucune", "Cinq", "500"], answer: 2, why: "Cinq montrent les premières tendances." },
      { objective: "O2", q: "Valider veut dire :", options: ["Faire tamponner un ticket de parking", "Gagner un match", "Signer un contrat", "Vérifier qu'un problème et une solution sont réels"], answer: 3, why: "La validation fait gagner du temps et de l'argent." },
      { objective: "O3", q: "Quel est un MVP pour une idée de produits dérivés ?", options: ["10 T-shirts vendus à des personnes qui les ont demandés", "500 T-shirts en stock", "Une collection complète de vêtements", "Le bail d'un magasin"], answer: 0, why: "Commencez petit et testez." },
      { objective: "O3", q: "Un test a besoin :", options: ["D'aucun objectif", "D'un chiffre qui veut dire que cela a marché", "D'un énorme budget", "D'une célébrité"], answer: 1, why: "Un objectif clair vous dit si cela a marché." },
      { objective: "O4", q: "Un plan d'une page contient :", options: ["Seulement un logo", "Vos statistiques", "Problème, solution, client, argent, prochaines étapes", "Votre mot de passe"], answer: 2, why: "Ces rubriques expliquent comment cela fonctionne." },
      { objective: "O4", q: "Demandez à l'IA de signaler :", options: ["Tout ce qui est une supposition", "Rien", "Seulement les bonnes nouvelles", "Vos rivaux"], answer: 0, why: "Signaler les suppositions vous garde honnête." },
      { objective: "O4", q: "Un mentor, c'est :", options: ["Un concurrent", "Un client", "Un arbitre", "Une personne expérimentée qui donne des conseils"], answer: 3, why: "Les mentors vous aident à éviter les erreurs." },
      { objective: "O5", q: "Les prix de votre budget doivent venir :", options: ["De suppositions", "De vrais prix de fournisseurs", "De vieux souvenirs", "Seulement de l'IA"], answer: 1, why: "De vrais prix font de vrais budgets." },
      { objective: "O5", q: "Une dépense, c'est :", options: ["L'argent que vous gagnez", "L'argent que vous dépensez pour faire fonctionner l'entreprise", "Un trophée", "Un abonné"], answer: 1, why: "Les dépenses sont des coûts." },
      { objective: "O6", q: "Une entreprise qui utilise votre nom peut compter comme :", options: ["Du pay-for-play", "Une bourse", "Rien", "Une activité NIL"], answer: 3, why: "Elle utilise votre nom, votre image ou votre ressemblance." },
      { objective: "O6", q: "Pouvez-vous utiliser librement le logo de votre école sur vos produits ?", options: ["Non, il faut une permission", "Oui, toujours", "Seulement le week-end", "Seulement en ligne"], answer: 0, why: "Les écoles protègent leurs logos." },
      { objective: "O6", q: "Où vérifier si vous avez besoin d'une licence commerciale ?", options: ["Sur un blog de sport", "Auprès d'un rival", "Sur le site web de votre administration locale", "Nulle part"], answer: 2, why: "Les licences dépendent de règles locales." },
      { objective: "O6", q: "Pourquoi garder chaque reçu ?", options: ["Pour décorer", "Pour le jeter plus tard", "Ce n'est pas nécessaire", "Pour les justificatifs et les impôts"], answer: 3, why: "Les justificatifs aident pour les impôts et les décisions." },
      { objective: "O6", q: "Si vous avez moins de 18 ans et créez une entreprise :", options: ["Vous pouvez tout signer seul", "Un parent ou un tuteur vous aide pour les comptes et les contrats", "Cachez-le", "Utilisez un faux âge"], answer: 1, why: "Les mineurs ont généralement besoin de l'aide d'un adulte." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      5,
      8,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Problème et client",
        objective: "O1",
        notYet: "Le problème est vague, ou l'apprenant ne l'a pas vu lui-même.",
        meets: "Un vrai problème, noté selon son ampleur et la gêne qu'il cause, avec un client clair.",
        exceeds: "Montre ce que les clients paient déjà pour une mauvaise solution."
      },
      {
        name: "Entretiens clients",
        objective: "O2",
        notYet: "Moins de cinq personnes, ou les notes portent sur leur intention d'acheter.",
        meets: "Cinq entretiens sur ce que les gens ont fait, notés avec leurs mots, et les tendances relevées.",
        exceeds: "Le plan a changé grâce à ce que les clients ont dit."
      },
      {
        name: "Plan d'une page",
        objective: "O4",
        notYet: "Des rubriques manquent, ou des chiffres inventés ne sont pas marqués.",
        meets: "Les sept rubriques sur une page, les estimations marquées, et l'avis d'un mentor reçu.",
        exceeds: "Comprend le test de deux semaines et le chiffre qui montrera s'il a marché."
      },
      {
        name: "Budget de démarrage",
        objective: "O5",
        notYet: "Des prix devinés, ou des formules non vérifiées.",
        meets: "Chaque coût avec un vrai prix, les revenus prévus, les totaux et le bénéfice, vérifiés et relus avec un adulte de confiance.",
        exceeds: "Montre combien de clients il faut pour couvrir les coûts de démarrage."
      },
      {
        name: "Liste des règles",
        objective: "O6",
        notYet: "Il manque le NIL, les noms, la licence ou les impôts, ou personne n'est nommé.",
        meets: "Le NIL, les noms et logos, la licence, les justificatifs et les impôts sont chacun listés avec la personne consultée par l'apprenant.",
        exceeds: "Le résultat d'une recherche USPTO et un tableau des reçus et des paiements sont joints."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le plan d'affaires avec « Atteint » ou « Dépasse » sur chaque ligne de la grille",
      "Les apprenants qui mènent leur test de deux semaines dans les 30 jours et disent s'il a atteint son chiffre (questionnaire de suivi)",
      "Les apprenants qui créent une entreprise, ou décident de ne pas le faire après les entretiens clients et économisent ainsi de l'argent",
      "Les apprenants qui disent avoir vérifié les règles NIL, de marques déposées, de licence et d'impôts avant le lancement"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Internet",
      "Un assistant IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Un compte Google gratuit pour Google Sheets",
      "Un carnet ou des notes sur le téléphone pour les entretiens clients",
      "Environ 60 minutes de leçons, plus le temps de cinq courts entretiens"
    ],
    facilitatorNotes: [
      "Faites d'abord pratiquer les entretiens clients en binômes, pour que les apprenants interrogent sur ce que les gens ont fait et ne demandent pas « Achèteriez-vous ? ».",
      "Trouvez des mentors, comme des commerçants locaux ou un centre d'aide aux petites entreprises, pour donner leur avis sur les plans.",
      "Ne laissez pas les apprenants emprunter de l'argent ni signer de contrat dans le cadre du cours ; impliquez les parents ou tuteurs pour les moins de 18 ans.",
      "Faites venir le service de conformité pour les questions NIL et orientez les questions d'impôts vers un professionnel des impôts.",
      "Félicitez les idées rejetées par les clients : le découvrir tôt est un bon résultat."
    ]
  }
};
