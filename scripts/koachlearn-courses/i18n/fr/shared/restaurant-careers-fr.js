"use strict";

// Koach Learn course (French translation of shared/restaurant-careers.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "restaurant-careers-fr",
  lang: "fr",
  translationOf: "restaurant-careers",
  category: "Workforce Development",
  name: "Métiers de la restauration : serveur, cuisinier et bases de la cuisine",
  skills: "Métiers et parcours en restauration, Prendre une commande et la répéter, Salaire avec pourboires et règles des pourboires, Sécurité en cuisine, Préparer son poste et les bons de commande, Un plan pour être embauché",
  outcome: "choisir un premier emploi en restauration qui vous convient, bien faire ses tâches de base (prendre une commande, préparer un poste, travailler en sécurité), vérifier que votre salaire avec pourboires est correct et suivre un plan de 30 jours pour être embauché.",
  about: [
    "Les restaurants embauchent toute l'année, et beaucoup embauchent des personnes sans expérience : des jeunes qui cherchent un premier emploi, des adultes qui changent de métier et des personnes qui sortent de prison. Beaucoup de cuisiniers, de gérants et de propriétaires ont commencé comme plongeurs, aides-serveurs ou hôtes d'accueil.",
    "Dans ce cours, vous découvrirez les métiers de la salle (hôte d'accueil, aide-serveur, serveur, barman) et de la cuisine (plongeur, commis de préparation, cuisinier de ligne), comment prendre une commande sans erreur, comment fonctionne le salaire avec pourboires selon la loi fédérale des États-Unis, comment rester en sécurité avec les couteaux, la chaleur et les sols mouillés, et comment préparer un poste avant le coup de feu.",
    "Ce cours vous prépare ; il ne vous donne ni licence ni certificat. Il vous oriente vers de vrais titres : une carte de manipulateur d'aliments (de votre État ou comté, ou par une formation comme ServSafe Food Handler de la National Restaurant Association, l'association nationale des restaurants), la formation au service d'alcool là où votre État l'exige, ProStart pour les lycéens et, plus tard, la certification de l'American Culinary Federation (ACF) pour les cuisiniers.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche \"Essayez maintenant\" que vous pouvez faire chez vous avec une feuille et un stylo. Il y a une vérification rapide après chaque leçon, un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Faites votre Plan d'emploi en restauration sur une page : le poste que vous voulez et deux vrais établissements où postuler, le titre que vous obtiendrez en premier et sa page officielle, vos disponibilités de la semaine, une liste de tâches du service pour ce poste (mise en place, pendant le service, fermeture) et une présentation de 30 secondes \"pourquoi m'embaucher\", avec une date pour chaque étape dans les 30 prochains jours.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Groupe mixte : adolescents et jeunes adultes qui cherchent un premier emploi, adultes qui changent de métier, personnes qui sortent de prison, immigrés et personnes dont l'anglais n'est pas la langue maternelle. La plupart ont déjà mangé au restaurant mais n'y ont jamais travaillé. Certains travailleront dans la restauration rapide, d'autres dans des restaurants avec service à table, d'autres dans des cantines ou des hôtels.",
    startingPoint: "Ils savent suivre des consignes orales, faire des calculs simples avec l'argent et lire un menu court. La plupart ne connaissent pas les mots du restaurant (salle, bon de commande, 86, \"derrière\"), le fonctionnement du salaire avec pourboires, les tâches de cuisine dangereuses ou interdites aux mineurs, ni la préparation d'un poste.",
    gap: "Les restaurants embauchent vite, mais les nouveaux qui ne connaissent pas les bases se trompent dans les commandes, se blessent avec les couteaux, les brûlures et les chutes, ou partent dans les premières semaines. Connaître les métiers, les gestes de sécurité et les règles de salaire aide à être embauché, à garder son emploi et à progresser, et protège contre un salaire trop bas.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (environ 11 à 12 ans)",
      "Appareils : un téléphone ou un ordinateur de bibliothèque ; chaque exercice peut se faire sur papier",
      "Temps : leçons de 4 à 6 minutes, entre l'école, le travail ou les rendez-vous",
      "Les gestes pratiques avec les couteaux, la friteuse et les équipements s'apprennent au travail ou en cours avec un formateur qualifié, pas dans ce cours",
      "Les règles de salaire et de travail des mineurs changent selon l'État ; chaque apprenant vérifie auprès du bureau du travail de son État",
      "Certains apprenants ont un casier judiciaire ; le cours indique des employeurs qui donnent une seconde chance et ne promet aucun emploi"
    ],
    prerequisites: "Aucun. Les apprenants qui manipuleront des aliments doivent aussi suivre \"Manipulateur d'aliments et préparation à l'examen ServSafe\"."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "À partir d'une liste de métiers de la restauration", action: "associer chaque premier emploi à ses tâches principales et au premier titre ou à la première formation qui aide à l'obtenir", standard: "avec au moins 4 bonnes réponses sur 5" },
    { id: "O2", condition: "Face à une table de clients dans un jeu de rôle", action: "prendre une commande dans le bon ordre du service, demander les allergies et répéter la commande", standard: "sans oublier aucun plat ni aucune modification" },
    { id: "O3", condition: "À partir d'un exemple de semaine avec des heures et des pourboires", action: "vérifier que le salaire avec pourboires atteint le minimum fédéral et qu'aucun gérant n'a pris une part des pourboires", standard: "en utilisant les règles fédérales et en indiquant où vérifier la règle de votre État" },
    { id: "O4", condition: "Face à une scène de cuisine avec un danger", action: "nommer le danger et le geste sûr pour les couteaux, les surfaces chaudes, les sols mouillés, les charges lourdes ou les machines interdites aux mineurs", standard: "pour chaque danger de la scène" },
    { id: "O5", condition: "À partir d'une liste de préparation et d'une série de bons de commande", action: "préparer un poste avec la mise en place et annoncer clairement les bons et les déplacements en cuisine", standard: "avec tout prêt avant le service et aucune annonce manquée" },
    { id: "O6", condition: "En partant de vos objectifs et de votre emploi du temps", action: "écrire un plan de 30 jours pour trouver un emploi en restauration, avec un poste visé, un titre, vos disponibilités et une présentation", standard: "avec une date et un lien officiel pour chaque étape" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : La salle",
      lessons: [
        {
          title: "Les métiers de la restauration et comment progresser",
          objectives: ["O1"],
          minutes: 5,
          goal: "Associer les premiers emplois en restauration à leurs tâches et aux titres qui aident à les obtenir.",
          text: [
            "Un restaurant a deux côtés. La salle (en anglais \"front of the house\", FOH) est l'endroit où sont les clients : l'hôte d'accueil les reçoit et les installe, l'aide-serveur débarrasse et redresse les tables, le serveur prend les commandes et apporte les plats, le coureur porte les assiettes et le barman prépare les boissons. L'arrière (\"back of the house\", BOH) est la cuisine : le plongeur garde la vaisselle et les ustensiles propres, le commis de préparation coupe et portionne les aliments avant le service, et le cuisinier de ligne cuit les commandes pendant le service.",
            "Beaucoup de gens commencent comme plongeur, aide-serveur ou hôte d'accueil, puis progressent : de plongeur à commis de préparation, à cuisinier de ligne, puis à sous-chef ; d'aide-serveur ou d'hôte à serveur, à chef d'équipe, puis à gérant. Arriver à l'heure et apprendre chaque poste, c'est comme cela qu'on progresse.",
            "Les titres aident. Beaucoup d'États ou de comtés exigent une carte de manipulateur d'aliments ; une formation comme ServSafe Food Handler de la National Restaurant Association est un moyen courant de s'y préparer. Les serveurs qui servent de l'alcool peuvent avoir besoin de la formation de leur État au service d'alcool, comme ServSafe Alcohol. Les lycéens peuvent rejoindre ProStart, un programme de deux ans en cuisine et en gestion de restaurant. Plus tard, les cuisiniers peuvent obtenir des certifications de l'American Culinary Federation (ACF), comme Certified Fundamentals Cook. Le programme Restaurant Ready, mené avec des associations locales, forme des personnes qui ne sont ni à l'école ni au travail.",
            "Ce cours vous prépare ; il ne vous donne aucune carte ni aucun certificat. Vérifiez toujours ce qu'exigent votre État, votre comté et votre employeur."
          ],
          words: [["Salle (FOH)", "la partie du restaurant où sont les clients : accueil, salle à manger, bar."], ["Arrière (BOH)", "la cuisine, la plonge et la réserve."], ["Carte de manipulateur d'aliments", "une carte qui montre que vous avez suivi une formation approuvée en sécurité des aliments ; obligatoire dans certains États et comtés."], ["ProStart", "un programme de deux ans au lycée en cuisine et en gestion de restaurant."], ["ACF", "l'American Culinary Federation, qui certifie les cuisiniers et les chefs aux États-Unis."]],
          slides: [
            { title: "La salle", bullets: ["Hôte d'accueil : reçoit et installe les clients", "Aide-serveur : débarrasse et redresse les tables", "Serveur et coureur : commandes et assiettes", "Barman : boissons"] },
            { title: "L'arrière", bullets: ["Plongeur : vaisselle et ustensiles propres", "Commis de préparation : coupe et portionne avant le service", "Cuisinier de ligne : cuit les commandes pendant le service"] },
            { title: "Comment progresser", bullets: ["Plongeur, puis commis de préparation, cuisinier de ligne, sous-chef", "Aide-serveur ou hôte, puis serveur, chef d'équipe, gérant"] },
            { title: "Les titres qui aident", bullets: ["Carte de manipulateur d'aliments (règle de l'État ou du comté)", "Formation au service d'alcool là où elle est exigée", "ProStart (lycée), puis ACF pour les cuisiniers"] }
          ],
          sources: [
            { name: "National Restaurant Association : ServSafe Alcohol et ServSafe Food Handler", url: "https://www.servsafe.com/ServSafe-Alcohol" },
            { name: "National Restaurant Association Educational Foundation : ProStart", url: "https://chooserestaurants.org/prostart" },
            { name: "National Restaurant Association Educational Foundation : Restaurant Ready", url: "https://chooserestaurants.org/programs/restaurant-ready" },
            { name: "American Culinary Federation : certification", url: "https://www.acfchefs.org/ACF/Certify/ACF/Certify/" }
          ],
          tryIt: "Pliez une feuille en deux. Écrivez FOH d'un côté et BOH de l'autre. Notez chaque métier de cette leçon du bon côté, avec une tâche pour chacun. Entourez le métier par lequel vous aimeriez commencer et écrivez le titre qui vous aiderait à l'obtenir.",
          youCanNow: "nommer les métiers de la salle et de la cuisine, dire ce que fait chacun et citer un titre qui aide à être embauché.",
          quickCheck: [
            { objective: "O1", q: "Quel métier se trouve à l'arrière du restaurant ?", options: ["Hôte d'accueil", "Serveur", "Commis de préparation", "Barman"], answer: 2, why: "Le commis de préparation travaille en cuisine ; les autres travaillent là où sont les clients." },
            { objective: "O1", q: "Vous voulez servir des boissons alcoolisées. Quelle formation votre État peut-il exiger ?", options: ["Une formation au service d'alcool comme ServSafe Alcohol", "Un permis de conduire professionnel", "Un permis de cariste", "Aucune formation n'est jamais exigée"], answer: 0, why: "Beaucoup d'États ont des règles de formation au service d'alcool ; consultez la page de votre État." }
          ]
        },
        {
          title: "Bien prendre une commande",
          objectives: ["O2"],
          minutes: 6,
          goal: "Prendre la commande d'une table, demander les allergies et répéter la commande.",
          text: [
            "La plupart des erreurs se produisent au moment de la commande. Un serveur qui suit toujours les mêmes étapes fait moins d'erreurs et reçoit de meilleurs pourboires.",
            "Saluez la table dans la minute ou les deux minutes, dites votre prénom et proposez des boissons. Quand les clients sont prêts, demandez : \"Quelqu'un a-t-il une allergie alimentaire que je dois connaître ?\" Notez la commande par numéro de place, pour que le coureur sache qui reçoit quelle assiette. Notez chaque modification, comme sans oignons ou la sauce à part.",
            "Répétez la commande à la table avant de partir. Puis saisissez-la dans la caisse enregistreuse (le système de point de vente, ou POS) ou écrivez le bon clairement. Si un client a une allergie, notez-la sur le bon et prévenez aussi la cuisine ou le gérant de vive voix. Ne devinez jamais si un plat est sans danger ; demandez à la cuisine. Si un client a du mal à respirer ou une forte réaction, appelez le 911 (ou le numéro d'urgence de votre pays) et allez chercher le gérant.",
            "Repassez quelques minutes après l'arrivée des plats, débarrassez quand tout le monde a fini et apportez l'addition quand la table la demande ou a clairement terminé."
          ],
          steps: ["Saluez la table, dites votre prénom et proposez des boissons.", "Demandez s'il y a des allergies alimentaires.", "Notez la commande par numéro de place, avec chaque modification.", "Répétez la commande.", "Saisissez-la dans le POS ou écrivez un bon clair ; notez toute allergie et prévenez la cuisine de vive voix.", "Repassez après l'arrivée des plats ; débarrassez et apportez l'addition."],
          words: [["Étapes du service", "l'ordre des tâches qu'un serveur suit pour chaque table."], ["Numéro de place", "un numéro pour chaque chaise, pour que chaque assiette arrive au bon client."], ["POS", "système de point de vente : l'écran où l'on saisit et encaisse les commandes."], ["Bon de commande", "la commande imprimée ou à l'écran à partir de laquelle la cuisine prépare les plats."], ["Modification", "un changement dans un plat, comme sans oignons ou plus de sauce."]],
          slides: [
            { title: "Saluer et demander", bullets: ["Saluez dans la minute ou les deux minutes ; dites votre prénom", "Proposez des boissons", "Demandez : \"Quelqu'un a-t-il une allergie alimentaire ?\""] },
            { title: "Bien noter", bullets: ["Notez par numéro de place", "Notez chaque modification", "Répétez la commande à la table"] },
            { title: "Allergies", bullets: ["Notez-la sur le bon", "Prévenez la cuisine ou le gérant de vive voix", "Ne devinez jamais ; une forte réaction, c'est le 911"] },
            { title: "Terminer la table", bullets: ["Repassez après l'arrivée des plats", "Débarrassez quand tout le monde a fini", "Apportez l'addition"] }
          ],
          tryIt: "Faites un jeu de rôle avec un ami ou un proche (ou jouez les deux rôles à voix haute). Prenez une commande pour trois personnes à partir de n'importe quel menu, par numéro de place, avec au moins une modification et une allergie. Répétez-la. Puis vérifiez votre feuille : chaque plat et chaque modification y sont-ils ?",
          youCanNow: "prendre une commande étape par étape, demander les allergies, la noter par numéro de place et la répéter.",
          quickCheck: [
            { objective: "O2", q: "Pourquoi noter une commande par numéro de place ?", options: ["Pour que l'addition soit plus élevée", "Pour que chaque assiette arrive au bon client", "Parce que le POS demande un numéro de téléphone", "Pour ne pas avoir à la répéter"], answer: 1, why: "Avec les numéros de place, n'importe qui peut poser chaque assiette devant la bonne personne." },
            { objective: "O2", q: "Une cliente dit qu'elle est allergique aux arachides. Que faites-vous ?", options: ["Vous lui dites que le plat est sûrement sans danger", "Vous le notez en espérant que le cuisinier le verra", "Vous choisissez un plat à sa place", "Vous le notez sur le bon et prévenez la cuisine de vive voix"], answer: 3, why: "Une allergie est notée et dite à voix haute à la cuisine ; on ne devine jamais si un plat est sans danger." }
          ]
        },
        {
          title: "Votre salaire : taux horaire, pourboires et crédit de pourboires",
          objectives: ["O3"],
          minutes: 6,
          goal: "Vérifier qu'une semaine de salaire avec pourboires atteint le minimum fédéral et que les pourboires ont été gérés selon la loi.",
          text: [
            "Selon la loi fédérale (la Fair Labor Standards Act, la loi sur les normes de travail), un employeur peut payer un salarié qui reçoit des pourboires avec un salaire direct de seulement 2,13 $ de l'heure et compter les pourboires pour le reste du salaire minimum fédéral de 7,25 $. C'est ce qu'on appelle le crédit de pourboires. Un salarié à pourboires est une personne qui reçoit régulièrement plus de 30 $ de pourboires par mois.",
            "La règle : votre salaire direct plus vos pourboires doivent atteindre au moins 7,25 $ pour chaque heure travaillée dans la semaine. Sinon, votre employeur doit payer la différence. Beaucoup d'États fixent un salaire minimum plus élevé, et certains, comme la Californie, le Minnesota et l'État de Washington, exigent le salaire minimum complet de l'État avant les pourboires. Vérifiez votre État sur la page des salaires avec pourboires du ministère du Travail des États-Unis.",
            "Vos pourboires sont à vous. Un employeur ne peut en garder aucune partie. Une caisse commune, où les pourboires sont partagés entre les employés, est permise, mais les gérants et les superviseurs ne peuvent pas y prendre de pourboires.",
            "L'IRS (l'administration fiscale fédérale) demande de tenir un relevé quotidien de vos pourboires et de déclarer à votre employeur les pourboires en espèces de 20 $ ou plus par mois, au plus tard le 10 du mois suivant. Les pourboires sont des revenus imposables, donc les déclarer vous protège."
          ],
          steps: ["Additionnez les heures travaillées cette semaine.", "Multipliez les heures par 7,25 $ (ou par le minimum de votre État, s'il est plus élevé).", "Additionnez votre salaire direct et vos pourboires de la semaine.", "Si le total est inférieur au minimum, l'employeur doit la différence.", "Vérifiez la règle de votre État sur la page des salaires avec pourboires du ministère du Travail des États-Unis."],
          words: [["Crédit de pourboires", "la part du salaire minimum qu'un employeur peut couvrir avec les pourboires (au niveau fédéral : jusqu'à 5,12 $ de l'heure)."], ["Salaire direct", "le salaire horaire que votre employeur vous verse lui-même, avant les pourboires."], ["Caisse commune", "un système où les pourboires sont mis ensemble et partagés entre les employés."], ["FLSA", "la Fair Labor Standards Act, la loi fédérale sur le salaire minimum, les heures supplémentaires et le travail des mineurs."]],
          slides: [
            { title: "Le crédit de pourboires fédéral", bullets: ["Le salaire direct peut descendre à 2,13 $ de l'heure", "Les pourboires peuvent compter pour le minimum de 7,25 $", "Votre État peut exiger plus"] },
            { title: "Faites le calcul", bullets: ["Heures x 7,25 $ = le minimum que vous devez recevoir", "Salaire direct + pourboires doivent l'atteindre", "Sinon, l'employeur paie la différence"] },
            { title: "Vos pourboires sont à vous", bullets: ["L'employeur ne peut en garder aucune partie", "Les caisses communes sont permises", "Les gérants ne peuvent pas y prendre"] },
            { title: "Tenez un relevé", bullets: ["Notez vos pourboires chaque jour", "Déclarez 20 $ ou plus par mois à votre employeur", "Au plus tard le 10 du mois suivant (IRS)"] }
          ],
          sources: [
            { name: "Ministère du Travail des États-Unis : fiche 15, salariés à pourboires selon la FLSA", url: "https://www.dol.gov/agencies/whd/fact-sheets/15-tipped-employees-flsa" },
            { name: "Ministère du Travail des États-Unis : salaires minimums des salariés à pourboires par État", url: "https://www.dol.gov/agencies/whd/state/minimum-wage/tipped" },
            { name: "IRS : tenue et déclaration des pourboires", url: "https://www.irs.gov/businesses/small-businesses-self-employed/tip-recordkeeping-and-reporting" }
          ],
          tryIt: "Exercice seulement, avec des chiffres inventés. Sam a travaillé 20 heures, payé 2,13 $ de salaire direct, et a reçu 70 $ de pourboires. Calculez : 20 x 7,25 $ = 145 $. Salaire direct 20 x 2,13 $ = 42,60 $. 42,60 $ + 70 $ = 112,60 $. Est-ce suffisant ? Combien l'employeur doit-il ? (Réponse : 32,40 $.) Puis cherchez votre État sur la page des salaires avec pourboires du ministère du Travail et notez sa règle.",
          youCanNow: "vérifier qu'une semaine de salaire avec pourboires atteint le salaire minimum, repérer une pratique illégale avec les pourboires et tenir un relevé de vos pourboires.",
          quickCheck: [
            { objective: "O3", q: "Selon la loi fédérale, que doivent atteindre le salaire direct plus les pourboires pour chaque heure ?", options: ["Au moins 7,25 $", "Au moins 2,13 $", "Au moins 30 $", "Ce que décide le gérant"], answer: 0, why: "Le salaire direct plus les pourboires doivent atteindre le minimum fédéral de 7,25 $, sinon l'employeur paie la différence." },
            { objective: "O3", q: "Votre gérant prend une part de la caisse commune chaque soir. Qu'est-ce qui est vrai ?", options: ["C'est normal et légal", "C'est légal seulement le week-end", "Les gérants et les superviseurs ne peuvent pas prendre de pourboires dans une caisse commune", "C'est légal si le gérant débarrasse aussi les tables"], answer: 2, why: "La FLSA interdit aux gérants et aux superviseurs de recevoir des pourboires d'une caisse commune." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : La salle",
        questions: [
          { objective: "O1", q: "Quel métier cuit généralement les commandes des clients pendant le service ?", options: ["Hôte d'accueil", "Cuisinier de ligne", "Aide-serveur", "Coureur"], answer: 1, why: "Les cuisiniers de ligne cuisent les commandes sur la ligne pendant le service." },
          { objective: "O1", q: "Une lycéenne veut se former à la restauration avec des mentors et des concours. Quel programme lui convient ?", options: ["Une formation CDL (permis poids lourd)", "Le GED", "Une formation de cariste", "ProStart"], answer: 3, why: "ProStart est un programme de deux ans au lycée en cuisine et en gestion de restaurant." },
          { objective: "O2", q: "Que faites-vous juste après avoir noté la commande d'une table ?", options: ["Répéter la commande à la table", "Apporter l'addition", "Débarrasser les assiettes", "Installer les clients suivants"], answer: 0, why: "La répéter permet de repérer les erreurs avant que la cuisine commence." },
          { objective: "O2", q: "Un client a du mal à respirer après avoir mangé. Que faites-vous d'abord ?", options: ["Apporter de l'eau et attendre", "Demander au cuisinier ce qu'il y avait dans le plat", "Appeler le 911 (ou le numéro d'urgence de votre pays) et aller chercher le gérant", "Offrir un dessert"], answer: 2, why: "Une forte réaction allergique est une urgence ; appelez les secours tout de suite." },
          { objective: "O3", q: "Vous avez travaillé 10 heures avec un salaire direct de 2,13 $ et reçu 20 $ de pourboires. Selon les règles fédérales, l'employeur doit-il payer plus ?", options: ["Non, 20 $ de pourboires suffisent", "Oui ; 21,30 $ + 20 $ = 41,30 $, c'est moins que 72,50 $", "Non, les pourboires ne comptent jamais", "Oui, mais seulement si vous le demandez par écrit"], answer: 1, why: "10 heures x 7,25 $ = 72,50 $, donc l'employeur doit compléter la différence de 31,20 $." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Les bases de la cuisine et l'embauche",
      lessons: [
        {
          title: "Sécurité en cuisine : couteaux, chaleur, sols et règles pour les mineurs",
          objectives: ["O4"],
          minutes: 6,
          goal: "Nommer les dangers courants en cuisine et le geste sûr pour chacun.",
          text: [
            "Le guide de l'OSHA (l'agence fédérale de la sécurité au travail) pour les jeunes en restauration cite les principaux dangers en cuisine : coupures avec les couteaux et les machines, brûlures avec les friteuses, les plaques et les liquides chauds, glissades et chutes sur les sols mouillés, blessures en portant des charges lourdes et dangers électriques. Votre employeur doit vous offrir un lieu de travail sûr et vous former.",
            "Couteaux : utilisez un couteau bien aiguisé sur une planche posée sur un torchon humide pour qu'elle ne glisse pas. Repliez les doigts de la main qui guide. N'essayez jamais de rattraper un couteau qui tombe. Portez-le pointe vers le bas, le long du corps, et dites \"couteau\" en marchant. Ne laissez jamais un couteau dans un évier rempli d'eau. Brûlures : dites \"chaud\" ou \"chaud derrière\" quand vous portez quelque chose de chaud, utilisez des torchons secs ou des maniques (un torchon mouillé laisse passer la chaleur) et tournez les manches des poêles vers l'intérieur. Sols : portez des chaussures fermées et antidérapantes, et nettoyez tout de suite ce qui est renversé ou posez un panneau \"sol glissant\". Charges : pliez les genoux, gardez la charge près du corps et demandez de l'aide pour les cartons lourds.",
            "Mineurs : les règles fédérales sur le travail des mineurs limitent le travail en cuisine. À 14 et 15 ans, vous ne pouvez pas faire de pâtisserie ni de boulangerie, cuisiner sur une flamme nue, utiliser la plupart des friteuses (seulement celles qui montent et descendent les paniers toutes seules), ni utiliser des trancheuses, hachoirs, robots ou batteurs électriques. À 16 et 17 ans, vous ne pouvez toujours pas utiliser, nettoyer ni monter des trancheuses à viande, des hachoirs à viande ou des batteurs professionnels. À 14 et 15 ans, les horaires sont aussi limités. Votre État peut avoir des règles plus strictes.",
            "Les techniques de couteau, l'utilisation de la friteuse et des équipements s'apprennent en personne avec un cuisinier ou un formateur qualifié. Si vous êtes blessé ou voyez un danger, prévenez tout de suite votre gérant."
          ],
          steps: ["Cherchez le danger : lame, chaleur, eau au sol, charge lourde, machine.", "Appliquez le bon geste : main qui guide, torchon sec, annonce à voix haute, nettoyage, porter avec les jambes.", "Si vous avez moins de 18 ans, vérifiez si la tâche ou la machine est permise à votre âge.", "Signalez tout danger ou toute blessure à un gérant."],
          words: [["OSHA", "l'Occupational Safety and Health Administration, l'agence fédérale de la sécurité et de la santé au travail."], ["Main qui guide", "la main qui tient l'aliment pendant que l'autre coupe ; le bout des doigts replié vers l'intérieur."], ["Chaussures antidérapantes", "des chaussures de travail fermées avec des semelles qui accrochent sur les sols mouillés ou gras."], ["Règles sur le travail des mineurs", "les lois qui fixent les tâches et les horaires permis aux travailleurs de moins de 18 ans."]],
          slides: [
            { title: "Principaux dangers en cuisine (OSHA)", bullets: ["Coupures avec les couteaux et les machines", "Brûlures avec les friteuses, les plaques, les liquides chauds", "Glissades, chutes et blessures en portant"] },
            { title: "Gestes avec les couteaux et la chaleur", bullets: ["Repliez la main qui guide ; ne rattrapez jamais un couteau", "Dites \"couteau\", \"chaud\", \"derrière\" en vous déplaçant", "Torchons secs ou maniques ; manches vers l'intérieur"] },
            { title: "Sols et charges", bullets: ["Chaussures fermées et antidérapantes", "Nettoyez tout de suite ou posez un panneau", "Pliez les genoux ; demandez de l'aide pour le lourd"] },
            { title: "Règles pour les mineurs (fédérales)", bullets: ["14-15 ans : pas de pâtisserie, flamme nue, la plupart des friteuses, trancheuses ou batteurs électriques", "16-17 ans : pas de trancheuses ou hachoirs à viande ni de batteurs professionnels", "Votre État peut être plus strict"] }
          ],
          sources: [
            { name: "OSHA : outil en ligne sur la sécurité des jeunes travailleurs en restauration", url: "https://www.osha.gov/etools/young-workers-restaurant-safety" },
            { name: "Ministère du Travail des États-Unis : fiche 2A, règles sur le travail des mineurs en restauration", url: "https://www.dol.gov/agencies/whd/fact-sheets/2a-child-labor-restaurants" },
            { name: "Ministère du Travail des États-Unis : YouthRules", url: "https://www.dol.gov/agencies/whd/youthrules" }
          ],
          tryIt: "Dessinez une cuisine simple sur papier : une cuisinière, une friteuse, une planche à découper, un évier et une chambre froide. Marquez trois dangers d'une croix (par exemple, une flaque près de la friteuse, un couteau dans l'évier, un manche de poêle qui dépasse). À côté de chaque croix, écrivez le geste sûr. Puis écrivez les tâches de votre dessin qu'un jeune de 15 ans ne pourrait pas faire.",
          youCanNow: "repérer les dangers en cuisine, appliquer le bon geste pour chacun et dire quelles tâches de cuisine sont interdites aux mineurs.",
          quickCheck: [
            { objective: "O4", q: "Un couteau glisse du plan de travail. Que faites-vous ?", options: ["Vous le rattrapez par le manche", "Vous l'écartez d'un coup de pied", "Vous l'attrapez avec un torchon", "Vous reculez et le laissez tomber"], answer: 3, why: "N'essayez jamais de rattraper un couteau qui tombe ; reculez et ramassez-le une fois au sol." },
            { objective: "O4", q: "On demande à un jeune de 15 ans de trancher de la viande avec une trancheuse électrique. Qu'est-ce qui est vrai ?", options: ["C'est permis avec des gants", "Les règles fédérales l'interdisent à 15 ans", "C'est permis le week-end", "C'est permis si un ami surveille"], answer: 1, why: "Les règles fédérales sur le travail des mineurs interdisent aux 14 et 15 ans (et aux 16 et 17 ans) d'utiliser des trancheuses à viande électriques." }
          ]
        },
        {
          title: "Préparer son poste, les bons et les annonces en cuisine",
          objectives: ["O5"],
          minutes: 5,
          goal: "Préparer un poste à partir d'une liste de préparation et annoncer clairement les bons et les déplacements.",
          text: [
            "La mise en place veut dire \"chaque chose à sa place\". Avant le service, le cuisinier lit la liste de préparation, prépare chaque ingrédient, ustensile et récipient, et les range au même endroit chaque jour, pour que rien ne manque quand le coup de feu commence.",
            "Pendant le service, les commandes arrivent sous forme de bons, imprimés ou sur un écran en cuisine. L'aboyeur (en anglais \"expo\") ou le chef annonce chaque bon. Vous répondez \"entendu\" ou \"oui, chef\" pour montrer que vous l'avez reçu. Cuisez d'abord les bons les plus anciens et prévenez tout de suite le chef si un produit va manquer ; quand un produit est fini, il est \"86\".",
            "Les cuisines sont étroites et animées, alors chacun annonce ses déplacements : \"derrière\" quand vous passez derrière quelqu'un, \"angle\" quand vous tournez à un coin sans visibilité, \"chaud\" ou \"couteau\" quand vous portez quelque chose de dangereux. Nettoyez au fur et à mesure : essuyez votre planche, rangez les ustensiles et gardez votre poste propre."
          ],
          steps: ["Lisez la liste de préparation de votre poste.", "Rassemblez chaque ingrédient, ustensile et récipient de la liste.", "Rangez-les au même endroit à chaque fois ; étiquetez et datez les récipients.", "Relisez la liste avant le service : rien ne doit manquer.", "Pendant le service : répondez \"entendu\" à chaque annonce, cuisez d'abord les bons les plus anciens, annoncez vos déplacements et nettoyez au fur et à mesure."],
          words: [["Mise en place", "chaque chose à sa place : tous les ingrédients et ustensiles prêts avant de cuisiner."], ["Liste de préparation", "la liste de ce qu'il faut couper, portionner ou préparer avant le service."], ["Aboyeur (expo)", "la personne qui annonce les bons et vérifie chaque assiette avant qu'elle sorte."], ["Entendu", "ce que dit un cuisinier pour montrer qu'il a entendu une annonce."], ["86", "mot de cuisine pour un produit qui est épuisé."]],
          slides: [
            { title: "La mise en place", bullets: ["Chaque chose à sa place, avant le service", "Lisez la liste de préparation ; rassemblez tout", "Même endroit chaque jour ; étiquetez et datez"] },
            { title: "Les bons", bullets: ["L'aboyeur annonce le bon", "Répondez \"entendu\"", "Les plus anciens d'abord", "Un produit va manquer ? Prévenez le chef : il sera peut-être 86"] },
            { title: "Annoncez vos déplacements", bullets: ["\"Derrière\" quand vous passez derrière quelqu'un", "\"Angle\" à un coin sans visibilité", "\"Chaud\" et \"couteau\" quand vous portez un danger"] },
            { title: "Nettoyez au fur et à mesure", bullets: ["Essuyez votre planche", "Rangez les ustensiles", "Un poste propre est un poste rapide"] }
          ],
          tryIt: "Choisissez un plat simple que vous pouvez faire chez vous, comme un sandwich ou une salade. Écrivez une liste de préparation pour le faire pour 10 personnes. Puis faites votre mise en place sur une table : chaque ingrédient et ustensile nécessaire, à sa place avant de commencer. Écrivez une chose que vous auriez oubliée sans la liste.",
          youCanNow: "préparer un poste avec la mise en place, répondre aux bons et les traiter dans l'ordre, et annoncer vos déplacements dans une cuisine animée.",
          quickCheck: [
            { objective: "O5", q: "Que veut dire mise en place ?", options: ["Cuire d'abord le bon le plus récent", "Nettoyer seulement à la fermeture", "Chaque chose à sa place, prête avant le service", "Une sorte de sauce française"], answer: 2, why: "La mise en place veut dire que chaque ingrédient et ustensile est prêt avant de commencer à cuisiner." },
            { objective: "O5", q: "Vous passez derrière un cuisinier avec une poêle chaude. Que dites-vous ?", options: ["\"Chaud derrière\"", "\"Entendu\"", "\"86\"", "Rien, pour rester discret"], answer: 0, why: "Dire \"chaud derrière\" prévient le cuisinier pour qu'il ne recule pas sur vous." }
          ]
        },
        {
          title: "Être embauché : votre plan d'emploi en restauration",
          objectives: ["O6", "O1"],
          minutes: 6,
          goal: "Écrire un plan de 30 jours pour obtenir votre premier emploi en restauration.",
          text: [
            "Les restaurants embauchent souvent vite, parfois dans la semaine. Beaucoup vous demandent de postuler en ligne ou sur place et peuvent vous inviter à un court entretien ou à un essai (un \"stage\" en anglais de cuisine), où vous travaillez une partie du service pour qu'ils vous voient faire. Demandez si l'essai est payé ; selon la loi fédérale, le temps passé à faire un travail productif pour l'entreprise est en général du temps de travail qui doit être payé.",
            "Les gérants regardent surtout trois choses : quand vous pouvez travailler, si vous arrivez à l'heure, et si vous êtes aimable et prêt à apprendre. Le week-end, le soir et les jours fériés sont les moments les plus chargés, donc être disponible à ces moments aide. Allez postuler sur place entre les services (par exemple en milieu d'après-midi), pas pendant le déjeuner ou le dîner.",
            "Si vous avez un casier judiciaire, beaucoup de restaurants embauchent des personnes avec un casier. Soyez honnête quand on vous pose la question, restez bref et parlez de ce que vous avez fait depuis, comme des formations, du travail et votre carte de manipulateur d'aliments. Des programmes comme Restaurant Ready et les centres locaux de réinsertion et d'emploi peuvent vous mettre en contact avec des employeurs.",
            "Votre plan rassemble tout : le poste que vous voulez, le titre que vous obtiendrez en premier, vos disponibilités, une liste des tâches du service et une présentation de 30 secondes."
          ],
          steps: ["Choisissez un premier poste et deux vrais établissements où postuler.", "Choisissez un titre à obtenir en premier (par exemple une carte de manipulateur d'aliments) et trouvez sa page officielle.", "Écrivez vos disponibilités de la semaine.", "Écrivez une liste de tâches du service pour ce poste : mise en place, pendant le service, fermeture.", "Écrivez une présentation de 30 secondes : qui vous êtes, quand vous pouvez travailler, pourquoi vous serez fiable.", "Mettez une date sur chaque étape dans les 30 prochains jours."],
          words: [["Essai (stage)", "un court service à l'essai pour que le restaurant vous voie travailler."], ["Disponibilités", "les jours et les heures où vous pouvez travailler chaque semaine."], ["Présentation", "une courte présentation orale qui dit pourquoi on devrait vous embaucher."], ["Employeur de la seconde chance", "un employeur prêt à embaucher des personnes ayant un casier judiciaire."]],
          slides: [
            { title: "Comment les restaurants embauchent", bullets: ["Postulez en ligne ou sur place", "Court entretien ou essai (stage)", "Demandez si l'essai est payé"] },
            { title: "Ce que veulent les gérants", bullets: ["Vos disponibilités, surtout le soir et le week-end", "À l'heure, à chaque fois", "Aimable et prêt à apprendre"] },
            { title: "Si vous avez un casier", bullets: ["Beaucoup de restaurants embauchent des personnes avec un casier", "Soyez honnête et bref", "Parlez de vos formations et de votre travail depuis"] },
            { title: "Votre plan de 30 jours", bullets: ["Poste et deux établissements où postuler", "Premier titre et sa page officielle", "Disponibilités, liste du service, présentation, dates"] }
          ],
          sources: [
            { name: "National Restaurant Association Educational Foundation : Restaurant Ready", url: "https://chooserestaurants.org/programs/restaurant-ready" },
            { name: "Ministère du Travail des États-Unis : YouthRules (permis de travail et horaires des mineurs)", url: "https://www.dol.gov/agencies/whd/youthrules" },
            { name: "Ministère du Travail des États-Unis : fiche 15, salariés à pourboires selon la FLSA", url: "https://www.dol.gov/agencies/whd/fact-sheets/15-tipped-employees-flsa" }
          ],
          tryIt: "Tâche finale : faites votre Plan d'emploi en restauration sur une page. Écrivez le poste que vous voulez et deux vrais établissements où postuler, le titre que vous obtiendrez en premier et sa page officielle, vos disponibilités de la semaine, une liste de tâches du service (mise en place, pendant, fermeture) et une présentation de 30 secondes. Mettez une date sur chaque étape dans les 30 prochains jours. Lisez la présentation à voix haute deux fois.",
          youCanNow: "écrire un plan de 30 jours pour obtenir un emploi en restauration et faire une courte présentation à un responsable du recrutement.",
          quickCheck: [
            { objective: "O6", q: "Quel est un bon moment pour aller postuler sur place dans un restaurant ?", options: ["En plein coup de feu du déjeuner", "Entre les services, par exemple en milieu d'après-midi", "Juste à l'heure de la fermeture", "Pendant le dîner du vendredi"], answer: 1, why: "Les gérants ont le temps de parler entre les services, pas quand des clients attendent." },
            { objective: "O6", q: "Quelle présentation est la plus forte ?", options: ["\"J'ai besoin de n'importe quel travail.\"", "\"Je n'aime pas trop le matin.\"", "\"Je peux travailler quand vous voulez, je crois.\"", "\"Je m'appelle Jordan. Je peux travailler le soir et le week-end, j'ai ma carte de manipulateur d'aliments et je suis toujours à l'heure.\""], answer: 3, why: "Elle dit qui vous êtes, vos disponibilités, un titre et pourquoi vous serez fiable." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Les bases de la cuisine et l'embauche",
        questions: [
          { objective: "O4", q: "Avec quoi faut-il saisir le manche d'une poêle chaude ?", options: ["Un torchon mouillé", "Une serviette en papier", "Un torchon sec ou une manique", "Votre tablier"], answer: 2, why: "Un torchon mouillé laisse passer la chaleur et peut vous brûler ; un torchon sec ou une manique vous protège." },
          { objective: "O4", q: "Vous voyez une flaque d'huile près de la friteuse. Que faites-vous ?", options: ["Vous la nettoyez tout de suite ou posez un panneau \"sol glissant\" et prévenez quelqu'un", "Vous l'enjambez", "Vous attendez la fermeture", "Vous la couvrez d'un torchon et la laissez"], answer: 0, why: "Ce qui est renversé fait glisser et tomber ; nettoyez tout de suite ou prévenez les autres." },
          { objective: "O5", q: "L'aboyeur annonce un bon pour votre poste. Que répondez-vous ?", options: ["\"Derrière\"", "\"86\"", "\"Angle\"", "\"Entendu\""], answer: 3, why: "\"Entendu\" dit à l'aboyeur que vous avez reçu la commande." },
          { objective: "O5", q: "Il ne vous reste presque plus de poulet en plein service. Que faites-vous ?", options: ["Vous ne dites rien en espérant qu'il en reste assez", "Vous prévenez tout de suite le chef pour qu'il soit mis en 86 ou qu'on en prépare", "Vous utilisez une autre viande sans demander", "Vous quittez votre poste pour en cuire plus"], answer: 1, why: "Le chef doit le savoir tôt pour que les serveurs arrêtent de le vendre ou qu'on en prépare d'autre." },
          { objective: "O6", q: "Un restaurant vous demande de travailler trois heures comme essai. Quelle question est utile ?", options: ["Si ce temps est payé", "Si vous pouvez éviter l'entretien", "Si vous pouvez commencer comme gérant", "Aucune ; ne posez jamais de questions"], answer: 0, why: "Selon la loi fédérale, le travail productif pour l'entreprise est en général du temps de travail payé, donc il est normal de demander." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Métiers de la restauration : serveur, cuisinier et bases de la cuisine",
    questions: [
      { objective: "O1", q: "Quel métier débarrasse et redresse les tables ?", options: ["Cuisinier de ligne", "Aide-serveur", "Commis de préparation", "Plongeur"], answer: 1, why: "L'aide-serveur débarrasse et redresse les tables en salle." },
      { objective: "O1", q: "Quel est un parcours courant pour progresser en cuisine ?", options: ["Hôte d'accueil, puis barman, puis chef", "Cuisinier de ligne, puis plongeur, puis aide-serveur", "Plongeur, puis commis de préparation, puis cuisinier de ligne", "Serveur, puis plongeur, puis hôte d'accueil"], answer: 2, why: "Beaucoup de cuisiniers commencent à la plonge, puis passent à la préparation et à la ligne." },
      { objective: "O1", q: "Quelle organisation certifie les cuisiniers et les chefs, avec des niveaux comme Certified Fundamentals Cook ?", options: ["L'American Culinary Federation", "L'OSHA", "L'IRS", "Le DMV"], answer: 0, why: "L'American Culinary Federation (ACF) délivre des certifications aux cuisiniers et aux chefs." },
      { objective: "O1", q: "Terminer ce cours vous donne-t-il une carte de manipulateur d'aliments ?", options: ["Oui, automatiquement", "Oui, si vous réussissez le quiz", "Seulement en Californie", "Non ; il vous prépare, et la carte vient d'une formation approuvée ou de votre État ou comté"], answer: 3, why: "Le cours vous prépare ; la carte vient d'une formation approuvée acceptée par votre État ou votre comté." },
      { objective: "O2", q: "Que doit demander un serveur à chaque table avant de prendre la commande des plats ?", options: ["Combien ils comptent laisser de pourboire", "Si quelqu'un a une allergie alimentaire", "Où ils travaillent", "S'ils veulent l'addition tout de suite"], answer: 1, why: "Demander tôt les allergies protège les clients." },
      { objective: "O2", q: "Un client commande un burger sans oignons. Où va \"sans oignons\" ?", options: ["Sur le bon comme modification, à côté de ce numéro de place", "Nulle part ; vous vous en souviendrez", "Seulement sur l'addition", "Sur un post-it pour l'hôte d'accueil"], answer: 0, why: "Chaque modification est notée à côté de la place et saisie sur le bon pour que la cuisine la voie." },
      { objective: "O2", q: "Pourquoi répéter la commande à la table ?", options: ["Pour faire attendre la table plus longtemps", "C'est une loi", "Pour repérer les erreurs avant que la cuisine prépare", "Pour avoir un plus gros pourboire"], answer: 2, why: "Répéter permet de repérer tôt les plats oubliés et les mauvaises modifications." },
      { objective: "O3", q: "Quel est le salaire direct minimum fédéral pour un salarié à pourboires ?", options: ["7,25 $", "5,12 $", "30,00 $", "2,13 $"], answer: 3, why: "La loi fédérale permet un salaire direct de seulement 2,13 $ de l'heure si les pourboires portent la paie à 7,25 $." },
      { objective: "O3", q: "Qui n'a PAS le droit de prendre des pourboires dans une caisse commune ?", options: ["Les serveurs", "Les aides-serveurs", "Les gérants et les superviseurs", "Les coureurs"], answer: 2, why: "La FLSA interdit aux gérants et aux superviseurs de prendre l'argent de la caisse commune." },
      { objective: "O3", q: "Où pouvez-vous vérifier la règle de votre État sur le salaire avec pourboires ?", options: ["Sur la page des salaires avec pourboires du ministère du Travail des États-Unis ou auprès du bureau du travail de votre État", "Dans une publication sur les réseaux sociaux", "Sur le menu du restaurant", "Auprès d'un client de votre table"], answer: 0, why: "Le ministère du Travail publie la règle de chaque État, et le bureau du travail de l'État donne les détails." },
      { objective: "O3", q: "Selon l'IRS, quel relevé de pourboires devez-vous tenir ?", options: ["Une estimation annuelle", "Un relevé quotidien des pourboires", "Aucun relevé", "Seulement un relevé des pourboires par carte"], answer: 1, why: "L'IRS demande de tenir un relevé quotidien et de déclarer à l'employeur 20 $ ou plus par mois." },
      { objective: "O4", q: "Comment porter un couteau dans la cuisine ?", options: ["Pointe vers le haut, au-dessus de la tête", "Dans la poche du tablier", "Derrière le dos, sans rien dire", "Pointe vers le bas le long du corps, en disant \"couteau\""], answer: 3, why: "La pointe vers le bas le long du corps et l'annonce à voix haute vous protègent, vous et les autres." },
      { objective: "O4", q: "Quelles chaussures sont les plus sûres en cuisine ?", options: ["Des sandales", "Des chaussures fermées et antidérapantes", "N'importe quelles chaussures", "Seulement des chaussettes"], answer: 1, why: "Les chaussures fermées et antidérapantes protègent les pieds et accrochent sur les sols mouillés ou gras." },
      { objective: "O4", q: "Quelle tâche un jeune de 14 ou 15 ans n'a-t-il PAS le droit de faire selon les règles fédérales ?", options: ["Faire tourner le lave-vaisselle", "Débarrasser les tables", "Faire de la pâtisserie ou de la boulangerie", "Utiliser un grille-pain"], answer: 2, why: "Les règles fédérales interdisent aux 14 et 15 ans de faire de la pâtisserie ou de la boulangerie." },
      { objective: "O4", q: "Vous vous blessez la main sur une trancheuse. Que faites-vous ?", options: ["Vous prévenez tout de suite votre gérant", "Vous le cachez pour ne pas être renvoyé chez vous", "Vous continuez sans rien dire", "Vous attendez la semaine prochaine"], answer: 0, why: "Le signaler tout de suite vous permet d'être soigné et aide à protéger les autres." },
      { objective: "O5", q: "Quand la mise en place doit-elle être terminée ?", options: ["Après le coup de feu", "À la fermeture", "Au milieu du service", "Avant le début du service"], answer: 3, why: "Tout est prêt avant le service pour que rien ne manque pendant le coup de feu." },
      { objective: "O5", q: "En cuisine, que veut dire \"86\" ?", options: ["La table a 86 clients", "Le produit est épuisé", "Régler le four à 86 degrés", "Le cuisinier est en pause"], answer: 1, why: "86 veut dire qu'un produit est fini et ne peut plus être vendu." },
      { objective: "O5", q: "Quels bons devez-vous cuire en premier ?", options: ["Les plus anciens", "Les plus récents", "Les plus faciles", "Les plus gros"], answer: 0, why: "Travailler dans l'ordre garde des temps d'attente justes pour chaque table." },
      { objective: "O6", q: "Quel élément a sa place dans votre plan de 30 jours pour un emploi en restauration ?", options: ["Le mot de passe de votre banque", "Une liste des restaurants que vous n'aimez pas", "Vos disponibilités de la semaine", "Votre numéro de sécurité sociale"], answer: 2, why: "Les disponibilités sont l'une des premières questions d'un gérant ; les numéros privés ne vont jamais dans un plan." },
      { objective: "O6", q: "Un gérant vous pose une question sur votre casier. Quelle est une bonne façon de répondre ?", options: ["Inventer une histoire", "Vous fâcher et partir", "Parler dix minutes de l'affaire", "Être honnête et bref, puis parler de vos formations et de votre travail depuis"], answer: 3, why: "Une réponse courte et honnête qui passe à ce que vous avez fait depuis montre que vous êtes prêt à travailler." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 4, 7, 8, 11, 13, 16, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur chaque ligne. Si une ligne est Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Poste et établissements où postuler", objective: "O1", notYet: "Pas de poste clair, ou aucun vrai établissement nommé.", meets: "Nomme un premier poste avec ses tâches principales et deux vrais établissements où postuler.", exceeds: "Nomme aussi le poste suivant et ce qu'il faut pour y arriver." },
      { name: "Titre avec page officielle", objective: "O1", notYet: "Pas de titre, ou un lien qui n'est pas officiel.", meets: "Nomme un titre (par exemple une carte de manipulateur d'aliments) et sa page officielle de l'État, du comté ou du programme.", exceeds: "Indique aussi si le poste exige une formation au service d'alcool ou, pour un mineur, un permis de travail de l'État." },
      { name: "Liste des tâches du service", objective: "O5", notYet: "Il manque des tâches de mise en place, pendant le service ou de fermeture.", meets: "Liste les tâches de mise en place, pendant le service et de fermeture pour le poste, y compris la mise en place en cuisine ou le dressage des tables.", exceeds: "Ajoute les annonces à voix haute et les étapes pour les allergies utilisées dans le poste." },
      { name: "Sécurité et salaire", objective: "O4", notYet: "Aucun geste de sécurité ni vérification du salaire dans le plan.", meets: "Liste deux gestes de sécurité pour le poste et comment comparer le salaire avec pourboires ou le salaire horaire au minimum.", exceeds: "Pour un mineur, nomme les tâches interdites à son âge ; pour un poste à pourboires, nomme la règle de l'État." },
      { name: "Présentation et dates", objective: "O6", notYet: "Pas de présentation, ou pas de dates sur les étapes.", meets: "Une présentation de 30 secondes avec les disponibilités et la fiabilité, et une date sur chaque étape dans les 30 prochains jours.", exceeds: "La présentation a été répétée à voix haute devant une autre personne et améliorée." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui obtiennent une carte de manipulateur d'aliments ou la formation au service d'alcool dans les 30 jours (enquête de suivi)",
      "Apprenants qui postulent dans au moins deux restaurants dans les 30 jours, et ceux qui sont embauchés",
      "Apprenants toujours employés dans la restauration après 90 jours, et retours des partenaires sur moins de blessures et d'erreurs de commande le premier mois"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Une feuille et un stylo ; un menu imprimé ou en ligne de n'importe quel restaurant local pour le jeu de rôle de la commande",
      "Un téléphone ou un ordinateur de bibliothèque pour consulter les pages officielles",
      "Pour la leçon 5 : quelques objets de cuisine ou des images pour faire une mise en place",
      "Environ 60 à 75 minutes au total, en séances courtes"
    ],
    facilitatorNotes: [
      "Faites la leçon 2 sous forme de jeu de rôle en direct par deux, un client et un serveur, puis inversez ; notez-le avec la liste des étapes de la commande.",
      "Ne donnez pas de vrais couteaux aux apprenants et ne faites pas fonctionner d'équipements dans ce cours ; les gestes avec les couteaux et la friteuse s'apprennent en personne avec un cuisinier ou un formateur qualifié.",
      "Avec des groupes de jeunes, revoyez avant la leçon 4 les règles fédérales sur le travail des mineurs, les règles plus strictes de votre État et la démarche pour le permis de travail.",
      "Avec des groupes en réinsertion, invitez à la leçon 6 un employeur local de la seconde chance ou le partenaire Restaurant Ready de l'association des restaurants de votre État.",
      "Les calculs de pourboires de la leçon 3 utilisent seulement des chiffres inventés ; vérifiez les montants fédéraux et de l'État en vigueur sur les pages du ministère du Travail avant d'enseigner."
    ]
  }
};
