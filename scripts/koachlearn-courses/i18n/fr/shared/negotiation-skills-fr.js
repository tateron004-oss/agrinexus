"use strict";

// Koach Learn course (French translation of shared/negotiation-skills.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "negotiation-skills-fr",
  lang: "fr",
  translationOf: "negotiation-skills",
  category: "Athletes",
  name: "Compétences en négociation",
  skills: "Préparer un plan de négociation, Demander avec assurance, Échanger au lieu de céder, Rester calme sous la pression, Mettre l'accord par écrit, Négocier un salaire et un prix",
  outcome: "préparer et mener une négociation équitable sur un salaire ou un prix : connaître votre objectif, votre seuil de rupture et les besoins de l'autre partie, demander avec une raison, échanger au lieu de céder, rester calme sous la pression et confirmer l'accord par écrit.",
  about: [
    "Vous négociez plus souvent que vous ne le pensez : une offre d'emploi, une augmentation, un prix avec un fournisseur, un devis pour un client, un bail, un parrainage ou un contrat NIL (paiements aux athlètes étudiants pour l'usage de leur nom et de leur image), et même qui fait quelles tâches à la maison. Les bons négociateurs ne forcent pas. Ils se préparent, demandent clairement, écoutent et cherchent un accord que les deux parties peuvent respecter.",
    "Ce cours s'adresse aux athlètes, aux chefs d'entreprise, aux travailleurs, aux personnes qui cherchent un emploi et aux responsables d'équipe. Les exemples viennent d'offres d'emploi, de petits commerces, d'artisans, de parrainages et du travail.",
    "Vous allez rédiger un plan de négociation d'une page, vous entraîner à demander, apprendre à échanger au lieu de céder, gérer la pression, mettre l'accord par écrit et utiliser tout cela pour un salaire ou un prix. Chaque leçon dure environ cinq minutes. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Pour les gros contrats, comme les contrats NIL, les baux ou les prêts, faites vérifier les documents finaux par un avocat, un agent de confiance ou le service de conformité de votre école."
  ],
  finalTask: "Rédigez un plan d'une page pour une vraie négociation de salaire ou de prix (votre objectif, votre seuil de rupture, votre plan B, les besoins de l'autre partie, votre première demande avec une raison, et deux choses que vous pourriez échanger). Jouez la scène avec un ami qui résiste, puis écrivez le court e-mail de suivi qui confirme ce qui a été convenu.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des athlètes et d'autres adultes qui doivent se mettre d'accord sur un salaire ou un prix : personnes qui cherchent un emploi et salariés, étudiants-athlètes qui reçoivent des offres NIL ou de parrainage, et propriétaires de petites entreprises qui achètent à des fournisseurs ou vendent à des clients.",
    startingPoint: "Ils ont accepté des offres d'emploi, des prix ou des accords tels quels, ou ont négocié sans plan. Beaucoup sont nerveux à l'idée de demander plus et cèdent quand on insiste.",
    gap: "Les personnes qui ne demandent jamais, ou qui baissent leur chiffre sous la pression, laissent de l'argent et du bénéfice sur la table et signent des accords qu'elles regrettent. Un plan écrit, une demande claire avec une raison, des échanges au lieu de concessions, des réponses calmes à la pression et un accord par écrit protègent leurs revenus et leur réputation.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes",
      "Appareils : un téléphone ou un ordinateur pour les recherches et les e-mails ; le papier suffit pour le plan",
      "Temps : environ 5 minutes par leçon, plus un jeu de rôle avec un ami",
      "Les lois sur les salaires changent selon l'État et le pays ; les apprenants vérifient auprès de leur propre administration du travail",
      "Les gros contrats, comme les accords NIL ou de parrainage, demandent un avocat, un agent ou un service de conformité ; aucune pièce d'identité ni aucun numéro bancaire dans des outils d'IA"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Face à une vraie négociation de salaire ou de prix", action: "rédiger un plan d'une page avec votre objectif, votre seuil de rupture, votre plan B et les besoins de l'autre partie", standard: "avec chaque partie remplie avant de parler" },
    { id: "O2", condition: "Quand vous ouvrez une négociation", action: "faire une demande claire, un peu au-dessus de votre objectif, avec une raison, puis vous taire", standard: "en une ou deux phrases" },
    { id: "O3", condition: "Quand l'autre partie conteste votre chiffre", action: "proposer un échange \"Si vous pouvez..., alors je peux...\" au lieu de céder", standard: "en nommant au moins deux choses autres que l'argent que vous pourriez échanger" },
    { id: "O4", condition: "Quand quelqu'un utilise une tactique de pression", action: "répondre calmement en demandant du temps, ou refuser poliment une offre sous votre seuil de rupture", standard: "sans accepter sur-le-champ" },
    { id: "O5", condition: "À la fin de tout accord", action: "confirmer chaque point convenu par écrit et le lire avant de signer", standard: "avec le prix, les dates et les conditions listés le jour même" },
    { id: "O6", condition: "Avant une discussion sur un salaire ou un prix", action: "rechercher un chiffre juste à l'aide de données sur les salaires, d'offres d'emploi ou de trois devis, et de vos propres coûts", standard: "en utilisant au moins une source fiable" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Se préparer et demander",
      lessons: [
        {
          objectives: ["O1"],
          title: "Se préparer : votre objectif, votre seuil de rupture et leurs besoins",
          minutes: 5,
          goal: "Rédiger un plan de négociation d'une page avant de parler.",
          text: [
            "L'essentiel d'une négociation se gagne avant qu'elle commence. Se préparer, c'est répondre à trois questions par écrit.",
            "Votre objectif : quel serait un très bon résultat, mais réaliste ? Soyez précis : \"19 $ de l'heure et le samedi libre\" ou \"4,50 $ le carton, livré chaque semaine\". Votre seuil de rupture : le pire accord que vous accepteriez encore. En dessous, vous dites non. Connaissez votre plan B, la meilleure chose que vous pouvez faire s'il n'y a pas d'accord, comme une autre offre d'emploi, un autre fournisseur ou garder votre emploi actuel. Un plan B solide vous donne de l'assurance.",
            "Les besoins de l'autre partie : que veulent-ils, et qu'est-ce qui les inquiète ? Un employeur peut avoir besoin de quelqu'un de fiable qui commence vite. Un sponsor peut vouloir que vos publications touchent ses clients. Un fournisseur peut vouloir une commande mensuelle régulière. Quand vous connaissez leurs besoins, vous pouvez offrir des choses qui vous coûtent peu mais qui comptent pour eux."
          ],
          steps: ["Écrivez votre objectif, avec des chiffres.", "Écrivez votre seuil de rupture.", "Écrivez votre plan B s'il n'y a pas d'accord.", "Listez les besoins et les inquiétudes de l'autre partie.", "Listez ce que vous pourriez offrir et qui compte pour eux."],
          words: [["Seuil de rupture", "le pire accord que vous accepteriez encore ; en dessous, vous dites non."], ["Plan B", "ce que vous ferez s'il n'y a pas d'accord. Les livres de négociation l'appellent BATNA (Best Alternative To a Negotiated Agreement : la meilleure solution de rechange à un accord négocié)."], ["Négociation", "discuter avec quelqu'un pour arriver à un accord que vous acceptez tous les deux."]],
          slides: [
            { title: "Préparez-vous par écrit", bullets: ["L'essentiel d'une négociation se gagne avant qu'elle commence", "Répondez à trois questions"] },
            { title: "1. Votre objectif", bullets: ["Très bon, mais réaliste", "Précis : \"19 $ de l'heure et le samedi libre\""] },
            { title: "2. Votre seuil de rupture et votre plan B", bullets: ["Le pire accord que vous accepteriez", "Plan B : ce que vous faites sans accord", "Un plan B solide donne de l'assurance"] },
            { title: "3. Leurs besoins", bullets: ["Employeur : quelqu'un de fiable qui commence vite", "Sponsor : toucher ses clients", "Fournisseur : une commande mensuelle régulière"] }
          ],
          tryIt: "Choisissez une vraie négociation à venir : une discussion sur le salaire, un prix avec un fournisseur ou un client, un loyer ou un parrainage. Écrivez votre objectif, votre seuil de rupture, votre plan B et les deux besoins principaux de l'autre partie.",
          youCanNow: "préparer une négociation en écrivant votre objectif, votre seuil de rupture, votre plan B et les besoins de l'autre partie.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce que votre plan B ?", options: ["Votre demande de départ", "La meilleure chose que vous pouvez faire s'il n'y a pas d'accord", "Le seuil de rupture de l'autre partie", "Une deuxième copie de votre plan"], answer: 1, why: "Votre plan B est votre meilleure option s'il n'y a pas d'accord, comme une autre offre ou garder votre emploi actuel." },
            { objective: "O1", q: "Vous vous préparez à demander un meilleur prix à un fournisseur. Que notez-vous à son sujet ?", options: ["Rien ; seul votre objectif compte", "Son adresse personnelle", "Une liste de ses erreurs", "Ce qu'il veut et ce qui l'inquiète, comme une commande mensuelle régulière"], answer: 3, why: "Connaître les besoins de l'autre partie vous aide à proposer des choses qui vous coûtent peu mais qui comptent pour elle." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Demander avec assurance",
          minutes: 5,
          goal: "Faire une première demande claire avec une raison, puis vous taire.",
          text: [
            "Beaucoup de gens n'obtiennent jamais plus parce qu'ils ne demandent jamais. Le premier chiffre dit à voix haute oriente souvent toute la discussion, alors il est utile de faire vous-même une demande claire et raisonnable. Visez un peu au-dessus de votre objectif pour avoir de la marge, mais restez sur un chiffre que vous pouvez expliquer.",
            "Donnez une raison : \"Vu le salaire de ce poste dans notre région et mes deux ans à la tête d'une ligne de cuisine, je demande 21 $ de l'heure.\" Ou pour une entreprise : \"Pour une commande sur 12 mois payée à temps, nous demandons 4,20 $ le carton.\" Ensuite, taisez-vous. Le silence peut sembler gênant, mais il leur laisse le temps de réfléchir. Ne plaidez pas contre vous-même.",
            "Posez aussi des questions, et écoutez les réponses : \"Qu'est-ce qui compte le plus pour vous dans cet accord ?\" \"Quelle souplesse avez-vous sur la date de début ?\" Les réponses vous montrent ce que vous pouvez échanger."
          ],
          steps: ["Choisissez une première demande un peu au-dessus de votre objectif.", "Écrivez une raison que vous pouvez expliquer.", "Dites la demande et la raison calmement.", "Taisez-vous et attendez.", "Posez des questions ouvertes et écoutez ce dont ils ont besoin."],
          words: [["Première demande", "la première chose que vous demandez dans une négociation."], ["Ancrage", "le premier chiffre annoncé ; il oriente souvent la suite de la discussion."]],
          slides: [
            { title: "Qui ne demande rien n'a rien", bullets: ["Le premier chiffre oriente la discussion", "Visez un peu au-dessus de votre objectif", "Restez sur un chiffre que vous pouvez expliquer"] },
            { title: "Demandez avec une raison", bullets: ["\"Vu les salaires locaux et mes 2 ans sur une ligne de cuisine,", "je demande 21 $ de l'heure.\""] },
            { title: "Puis taisez-vous", bullets: ["Le silence leur laisse le temps de réfléchir", "Ne plaidez pas contre vous-même"] },
            { title: "Questionnez et écoutez", bullets: ["\"Qu'est-ce qui compte le plus pour vous dans cet accord ?\"", "\"Quelle souplesse avez-vous sur la date de début ?\""] }
          ],
          tryIt: "Écrivez votre première demande et une raison pour votre vraie négociation. Dites-la à voix haute trois fois d'une voix calme, et arrêtez-vous cinq bonnes secondes après chaque fois.",
          youCanNow: "faire une première demande claire avec une raison, garder le silence et poser des questions qui révèlent les besoins de l'autre partie.",
          quickCheck: [
            { objective: "O2", q: "Pourquoi est-il utile de donner vous-même le premier chiffre raisonnable ?", options: ["Le premier chiffre dit à voix haute oriente souvent toute la discussion", "Cela termine la négociation plus vite", "L'autre partie doit l'accepter", "Cela montre que vous ne vous en souciez pas"], answer: 0, why: "La leçon dit que le premier chiffre oriente souvent la discussion, donc une demande claire avec une raison vous aide." },
            { objective: "O2", q: "Vous venez de faire votre demande avec une raison, et tout le monde se tait. Que faites-vous ?", options: ["Baisser votre chiffre tout de suite", "Expliquer encore pourquoi vous ne le méritez peut-être pas", "Rester silencieux et les laisser réfléchir", "Quitter la pièce"], answer: 2, why: "Le silence leur donne le temps de réfléchir ; parler peut vous amener à argumenter contre vous-même." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Échanger au lieu de céder",
          minutes: 5,
          goal: "Utiliser des échanges \"si... alors...\" pour ne jamais donner quelque chose pour rien.",
          text: [
            "Quand l'autre partie résiste, ne baissez pas simplement votre chiffre. Échangez. Chaque fois que vous donnez quelque chose, demandez quelque chose en retour. L'outil simple est : \"Si vous pouvez..., alors je peux...\".",
            "Cherchez des choses qui coûtent peu à une partie et qui ont de la valeur pour l'autre. Un travailleur : \"Si le taux horaire ne peut pas bouger, pourrait-on le revoir après 90 jours, ou ajouter un jour de congé payé ?\" Une petite entreprise : \"Si vous payez d'avance, alors je peux faire 5 pour cent de remise.\" Un athlète avec un sponsor : \"Si vous voulez deux publications de plus, alors il me faudrait un cachet plus élevé ou des produits gratuits pour l'équipe.\"",
            "Le salaire n'est pas la seule chose sur la table. Pensez à la date de début, aux horaires, à la formation, au matériel, à la livraison, aux conditions de paiement, à la durée du contrat et à l'intitulé du poste. Plus il y a de choses à échanger, plus il y a de chemins vers un accord qui plaît aux deux parties."
          ],
          steps: ["Ne donnez jamais quelque chose pour rien.", "Utilisez \"Si vous pouvez..., alors je peux...\".", "Listez ce qui vous coûte peu mais a de la valeur pour eux.", "Regardez au-delà de l'argent : horaires, date de début, formation, livraison, conditions.", "Vérifiez chaque échange par rapport à votre seuil de rupture."],
          words: [["Échange", "donner quelque chose seulement quand vous recevez quelque chose en retour."], ["Concession", "quelque chose que vous cédez pendant une négociation."], ["Conditions", "les détails d'un accord, comme quand et comment le paiement se fait."]],
          slides: [
            { title: "Échangez ; ne cédez pas", bullets: ["Chaque fois que vous donnez, demandez quelque chose en retour", "\"Si vous pouvez..., alors je peux...\""] },
            { title: "Exemples", bullets: ["\"Si le taux ne peut pas bouger, pourrait-on le revoir après 90 jours ?\"", "\"Si vous payez d'avance, je peux faire 5 pour cent de remise.\"", "\"Deux publications de plus, c'est un cachet plus élevé.\""] },
            { title: "Plus que l'argent", bullets: ["Horaires et date de début", "Formation et matériel", "Livraison, conditions de paiement, durée du contrat"] },
            { title: "Restez prudent", bullets: ["Vérifiez chaque échange par rapport à votre seuil de rupture"] }
          ],
          tryIt: "Pour votre vraie négociation, listez trois choses que vous pourriez offrir et trois choses que vous pourriez demander en dehors de l'argent. Écrivez deux phrases \"Si vous pouvez..., alors je peux...\".",
          youCanNow: "échanger des concessions avec \"si... alors...\" au lieu de donner les choses pour rien.",
          quickCheck: [
            { objective: "O3", q: "Que veut dire échanger dans une négociation ?", options: ["Céder pour terminer la discussion", "Demander quelque chose en retour chaque fois que vous donnez quelque chose", "Échanger son emploi avec quelqu'un", "Répéter votre premier chiffre"], answer: 1, why: "Échanger veut dire que chaque fois que vous donnez quelque chose, vous demandez quelque chose en retour." },
            { objective: "O3", q: "Un employeur ne peut pas augmenter le taux horaire. Quel est un bon échange à demander ?", options: ["Rien ; accepter tel quel", "Lui demander de promettre une augmentation un jour", "Menacer de démissionner", "Un point sur le salaire après 90 jours ou un jour de congé payé en plus"], answer: 3, why: "Des choses autres que l'argent, comme un point à 90 jours ou un jour de congé, peuvent rendre l'accord bon pour les deux parties." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Se préparer et demander",
        questions: [
          { objective: "O1", q: "Votre seuil de rupture est :", options: ["Le meilleur accord que vous pouvez imaginer", "Le pire accord que vous accepteriez encore", "La première offre de l'autre partie", "Votre chiffre préféré"], answer: 1, why: "En dessous de votre seuil de rupture, vous dites non." },
          { objective: "O1", q: "Pourquoi un plan B solide aide-t-il ?", options: ["Il vous permet d'insulter l'autre partie", "Il veut dire que vous n'avez jamais besoin de vous préparer", "Il vous donne l'assurance de dire non à un mauvais accord", "Il vous garantit la victoire"], answer: 2, why: "Une bonne option sans accord vous rend moins susceptible d'en accepter un mauvais." },
          { objective: "O2", q: "Quelle première demande est la plus forte ?", options: ["\"Ce que vous trouvez juste.\"", "\"Désolé, est-ce que je pourrais peut-être avoir un peu plus ?\"", "\"Je prends n'importe quoi.\"", "\"Vu les salaires locaux et mon expérience, je demande 21 $ de l'heure.\""], answer: 3, why: "Un chiffre clair avec une raison est facile à prendre au sérieux." },
          { objective: "O2", q: "Après avoir fait votre demande, vous devez :", options: ["Vous taire et les laisser réfléchir", "La baisser tout de suite", "Continuer à expliquer pourquoi vous ne la méritez peut-être pas", "Quitter la pièce"], answer: 0, why: "Le silence leur laisse le temps de répondre ; ne plaidez pas contre vous-même." },
          { objective: "O3", q: "Le fournisseur refuse votre prix. Quelle réponse est un échange ?", options: ["\"D'accord, je paie le prix fort.\"", "\"Si je commande sur 12 mois, pourriez-vous faire 4,20 $ le carton ?\"", "\"Vous m'arnaquez.\"", "\"Bon, laissez tomber.\""], answer: 1, why: "Elle offre quelque chose qu'ils apprécient en échange de ce que vous voulez." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Conclure l'accord",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rester calme sous la pression",
          minutes: 5,
          goal: "Reconnaître les tactiques de pression et répondre calmement.",
          text: [
            "Certaines personnes utilisent la pression pour vous presser : \"Cette offre expire aujourd'hui\", \"C'est à prendre ou à laisser\", une première offre très basse, de longs silences, ou une personne qui joue les durs pendant qu'une autre joue les gentils. Ces tactiques marchent en vous faisant sentir que vous devez décider tout de suite.",
            "Votre meilleur outil, c'est le temps. Il est presque toujours acceptable de dire : \"Merci. J'aimerais prendre jusqu'à demain pour y réfléchir.\" Respirez plus lentement, gardez une voix posée et regardez votre plan écrit. Si l'offre est en dessous de votre seuil de rupture, vous pouvez dire non poliment : \"Je vous remercie, mais cela ne me convient pas.\"",
            "Restez respectueux même s'ils ne le sont pas. Parlez du problème, pas de la personne. Rester calme et poli laisse la porte ouverte à une meilleure offre plus tard. Si quelqu'un vous menace ou vous demande de faire quelque chose de malhonnête ou de dangereux, partez."
          ],
          steps: ["Repérez la pression : délais, à prendre ou à laisser, offres très basses.", "Respirez et ralentissez.", "Regardez votre plan et votre seuil de rupture.", "Demandez du temps : \"J'aimerais prendre jusqu'à demain pour y réfléchir.\"", "Dites non poliment si c'est en dessous de votre seuil de rupture."],
          words: [["Tactique de pression", "une astuce pour vous pousser à décider avant que vous soyez prêt."], ["Offre au rabais", "une offre bien en dessous de ce qui est juste."]],
          slides: [
            { title: "Tactiques de pression courantes", bullets: ["\"Cette offre expire aujourd'hui\"", "\"C'est à prendre ou à laisser\"", "Une première offre très basse"] },
            { title: "Votre meilleur outil, c'est le temps", bullets: ["\"J'aimerais prendre jusqu'à demain pour y réfléchir.\"", "Respirez et relisez votre plan écrit"] },
            { title: "Dites non poliment", bullets: ["\"Je vous remercie, mais cela ne me convient pas.\"", "En dessous de votre seuil de rupture, c'est non"] },
            { title: "Restez respectueux", bullets: ["Le problème, pas la personne", "Menaces ou malhonnêteté : partez"] }
          ],
          tryIt: "Écrivez votre réponse calme à trois phrases de pression : \"Cette offre expire aujourd'hui\", \"C'est à prendre ou à laisser\" et une offre au rabais. Dites chaque réponse à voix haute d'une voix posée.",
          youCanNow: "repérer les tactiques de pression et répondre calmement en demandant du temps ou en disant non poliment.",
          quickCheck: [
            { objective: "O4", q: "Laquelle de ces phrases est une tactique de pression ?", options: ["\"Cette offre se termine aujourd'hui.\"", "\"Qu'est-ce qui compte le plus pour vous ?\"", "\"Je vous envoie les détails par e-mail.\"", "\"Merci de me recevoir.\""], answer: 0, why: "Les délais comme \"se termine aujourd'hui\" essaient de vous pousser à décider tout de suite." },
            { objective: "O4", q: "L'autre partie devient impolie pendant la discussion. Que devez-vous faire ?", options: ["Être impoli à votre tour", "Accepter n'importe quoi pour en finir", "Rester respectueux et parler du problème, pas de la personne", "Parler d'elle en ligne"], answer: 2, why: "Rester calme et poli laisse la porte ouverte à une meilleure offre plus tard." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Le mettre par écrit",
          minutes: 5,
          goal: "Confirmer un accord par écrit et le lire avant de signer.",
          text: [
            "Un accord seulement dit à voix haute est facile à oublier ou à retenir autrement. À la fin de toute négociation, résumez-le à voix haute : \"Donc nous avons convenu de 20 $ de l'heure, à partir du 3 novembre, avec une révision du salaire après 90 jours.\" Ensuite, mettez-le par écrit.",
            "Pour un emploi, demandez une lettre d'offre écrite. Pour un accord commercial, envoyez le jour même un court e-mail qui reprend chaque point convenu : prix, quantités, dates, conditions de paiement et qui fait quoi. Demandez-leur de répondre pour confirmer.",
            "Lisez chaque page avant de signer, et vérifiez que cela correspond à ce qui a été convenu. Ne signez rien de vide ni rien que vous ne comprenez pas. Pour les contrats importants ou longs, comme les contrats NIL ou de parrainage, les baux, les prêts ou les associations d'entreprise, faites-les d'abord relire par un avocat, un agent de confiance, une clinique d'aide juridique ou le service de conformité de votre école. Un assistant d'IA peut expliquer les mots difficiles d'un contrat, mais ce n'est pas un avocat, et n'y collez pas d'informations privées comme des numéros de pièce d'identité ou de compte bancaire."
          ],
          steps: ["Résumez l'accord à voix haute.", "Demandez une offre écrite ou envoyez un e-mail de résumé le jour même.", "Indiquez le prix, les quantités, les dates, les conditions et qui fait quoi.", "Demandez-leur de répondre pour confirmer.", "Lisez chaque page avant de signer ; faites relire les gros contrats."],
          words: [["Lettre d'offre", "une offre d'emploi écrite qui indique le salaire, la date de début et d'autres conditions."], ["Contrat", "un accord écrit que la loi peut faire respecter."]],
          slides: [
            { title: "Répétez-le", bullets: ["\"Donc nous avons convenu de 20 $ de l'heure, à partir du 3 novembre,", "avec une révision du salaire après 90 jours.\""] },
            { title: "Mettez-le par écrit", bullets: ["Emploi : demandez une lettre d'offre", "Entreprise : envoyez un e-mail de résumé le jour même", "Demandez-leur de répondre pour confirmer"] },
            { title: "Avant de signer", bullets: ["Lisez chaque page", "Vérifiez que cela correspond à ce qui a été convenu", "Ne signez jamais de papiers vides ou flous"] },
            { title: "Gros contrats", bullets: ["NIL, parrainages, baux, prêts, associations", "Faites relire par un avocat, un agent ou le service de conformité"] }
          ],
          tryIt: "Écrivez un court e-mail de résumé pour un accord (réel ou d'entraînement) qui indique le prix ou le salaire, les dates, les conditions et qui fait quoi, et qui se termine par : \"Merci de répondre pour confirmer que cela correspond à ce que vous avez compris.\"",
          youCanNow: "résumer un accord, le confirmer par écrit et savoir quand faire relire un contrat.",
          quickCheck: [
            { objective: "O5", q: "Quelle est la meilleure preuve écrite d'un nouvel accord d'emploi ?", options: ["Un SMS d'un ami", "Une lettre d'offre", "Vos propres notes de mémoire", "Une poignée de main"], answer: 1, why: "Pour un emploi, la leçon dit de demander une lettre d'offre écrite." },
            { objective: "O5", q: "On vous tend un contrat avec une partie vide à \"remplir plus tard\". Que faites-vous ?", options: ["Signer vite pour ne pas perdre l'accord", "Signer et croiser les doigts", "Demander à une IA de signer pour vous", "Ne pas signer tant qu'il n'est pas complet et que vous ne le comprenez pas"], answer: 3, why: "Ne signez jamais un document vide ou que vous ne comprenez pas." }
          ]
        },
        {
          objectives: ["O6","O3"],
          title: "Négocier un salaire et un prix",
          minutes: 6,
          goal: "Rechercher un chiffre juste et négocier une offre d'emploi ou un prix.",
          text: [
            "Salaire : renseignez-vous avant de parler. L'Occupational Outlook Handbook du Bureau des statistiques du travail des États-Unis (BLS), sur bls.gov/ooh, donne le salaire habituel de centaines de métiers. Les offres d'emploi montrent aussi des fourchettes. En Californie, les employeurs de 15 salariés ou plus doivent indiquer la grille salariale dans leurs offres d'emploi, et un candidat peut demander la grille salariale du poste auquel il a postulé. En général, les employeurs californiens n'ont pas non plus le droit de vous demander votre salaire passé, mais ils peuvent demander quel salaire vous attendez. Les règles varient selon les États, alors renseignez-vous auprès du service du travail de votre État.",
            "Quand vous recevez une offre : remerciez, montrez votre enthousiasme et demandez du temps si vous en avez besoin. Ensuite, faites une contre-offre avec une raison : \"Ce poste m'enthousiasme. Vu la fourchette annoncée et mon certificat de cariste, pourriez-vous aller jusqu'à 22 $ ?\" Si le salaire ne peut pas bouger, échangez : date de début, horaires, formation ou une révision après 90 jours.",
            "Prix : quand vous achetez, demandez au moins trois devis pour connaître le prix du marché. Quand vous vendez, connaissez vos coûts pour ne jamais accepter moins que ce qui fait vivre votre entreprise. Proposez des options plutôt que des remises : une formule plus petite pour moins cher, ou un prix plus bas pour une plus grosse commande ou un paiement plus rapide."
          ],
          steps: ["Renseignez-vous sur le prix du marché : bls.gov/ooh, offres d'emploi ou trois devis.", "Fixez votre objectif et votre seuil de rupture d'après ces recherches.", "Remerciez et montrez votre intérêt.", "Faites une contre-offre avec un chiffre et une raison.", "Si l'argent ne peut pas bouger, échangez d'autres conditions.", "Confirmez l'accord final par écrit."],
          words: [["Grille salariale", "la fourchette de salaire annuel ou horaire qu'un employeur prévoit de payer pour un poste."], ["Contre-offre", "votre réponse à une offre, qui demande d'autres conditions."], ["Devis", "le prix qu'une personne propose pour un travail ou un produit."]],
          sources: [
            { name: "Commissaire du travail de Californie : FAQ sur la loi sur l'égalité salariale (grilles salariales, historique de salaire)", url: "https://www.dir.ca.gov/dlse/California_Equal_Pay_Act.htm" },
            { name: "Bureau des statistiques du travail des États-Unis : Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" }
          ],
          slides: [
            { title: "D'abord, renseignez-vous sur le salaire", bullets: ["bls.gov/ooh donne le salaire habituel de nombreux métiers", "Les offres d'emploi montrent des fourchettes", "Les règles varient selon l'État : vérifiez les vôtres"] },
            { title: "Règles en Californie", bullets: ["15 salariés ou plus : grille salariale dans les offres d'emploi", "Les candidats peuvent demander la grille salariale du poste", "En général, pas de questions sur votre salaire passé"] },
            { title: "Faire une contre-offre", bullets: ["Remerciez et montrez votre intérêt", "\"Vu la fourchette et mon certificat, pourriez-vous aller jusqu'à 22 $ ?\"", "Rien ne bouge ? Échangez horaires, formation ou révision à 90 jours"] },
            { title: "Prix", bullets: ["Achat : demandez trois devis", "Vente : connaissez vos coûts", "Proposez des options, pas seulement des remises"] }
          ],
          tryIt: "Tâche finale : rédigez votre plan d'une page pour une vraie négociation de salaire ou de prix à partir de vraies recherches. Jouez la scène avec un ami qui utilise une tactique de pression, puis écrivez l'e-mail de suivi qui confirme l'accord.",
          youCanNow: "rechercher un chiffre juste, répondre à une offre d'emploi ou à un prix par une contre-offre avec une raison, et conclure l'accord par écrit.",
          quickCheck: [
            { objective: "O6", q: "Où les travailleurs aux États-Unis peuvent-ils trouver le salaire habituel de nombreux métiers ?", options: ["Un sondage sur les réseaux sociaux", "L'Occupational Outlook Handbook du BLS sur bls.gov/ooh", "N'importe quel forum en ligne", "Les concurrents de l'employeur"], answer: 1, why: "L'Occupational Outlook Handbook du BLS indique le salaire habituel de centaines de métiers." },
            { objective: "O6", q: "Un client vous demande une réduction. Quelle est une bonne option à proposer ?", options: ["Un prix plus bas pour une plus grosse commande ou un paiement plus rapide", "La moitié du prix sans rien en retour", "Un prix inférieur à vos coûts", "Refuser de parler du prix"], answer: 0, why: "Proposer des options plutôt que de simples réductions protège vos coûts tout en aidant le client." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Conclure l'accord",
        questions: [
          { objective: "O4", q: "Quelqu'un dit : \"Cette offre expire aujourd'hui.\" Quelle est une réponse calme ?", options: ["Signer tout de suite", "Crier que c'est injuste", "\"Merci. J'aimerais prendre jusqu'à demain pour y réfléchir.\"", "Baisser votre demande de moitié"], answer: 2, why: "Demander du temps enlève la pression." },
          { objective: "O4", q: "L'offre est en dessous de votre seuil de rupture. Vous devez :", options: ["Dire non poliment", "L'accepter quand même", "Les insulter", "Les ignorer"], answer: 0, why: "En dessous de votre seuil de rupture, c'est non, dit avec respect." },
          { objective: "O5", q: "Que devez-vous faire juste après avoir conclu un accord par téléphone avec un fournisseur ?", options: ["Rien ; vous vous en souviendrez", "Le publier sur les réseaux sociaux", "Attendre un mois", "Envoyer le jour même un e-mail qui reprend chaque point convenu"], answer: 3, why: "Un résumé écrit évite des souvenirs différents plus tard." },
          { objective: "O5", q: "On vous propose un contrat NIL long. Que faut-il faire ?", options: ["Le signer aujourd'hui avant qu'il disparaisse", "Le faire d'abord relire par un avocat, un agent de confiance ou le service de conformité", "Laisser un assistant d'IA signer pour vous", "Signer sans lire parce qu'il est long"], answer: 1, why: "Les gros contrats doivent être relus avant de signer." },
          { objective: "O6", q: "En Californie, que doivent indiquer dans leurs offres d'emploi les employeurs de 15 salariés ou plus ?", options: ["La grille salariale", "Le numéro de téléphone du patron", "Votre salaire passé", "Rien sur le salaire"], answer: 0, why: "La Californie exige la grille salariale dans les offres des employeurs de 15 salariés ou plus." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Compétences en négociation",
    questions: [
      { objective: "O1", q: "L'essentiel d'une négociation se gagne :", options: ["En parlant le plus fort", "Avant qu'elle commence, en se préparant", "À la toute dernière seconde", "Par chance"], answer: 1, why: "La préparation fixe votre objectif, vos limites et vos options." },
      { objective: "O1", q: "Quel objectif est le meilleur pour un plan de négociation ?", options: ["\"Plus d'argent\"", "\"Un bon accord\"", "\"Ce qu'ils me proposent\"", "\"19 $ de l'heure et le samedi libre\""], answer: 3, why: "Des objectifs précis avec des chiffres guident la discussion." },
      { objective: "O1", q: "Votre plan B, c'est :", options: ["Ce que vous ferez s'il n'y a pas d'accord", "Votre première offre", "Le seuil de rupture de l'autre partie", "Un deuxième contrat"], answer: 0, why: "Le plan B est votre meilleure option sans accord." },
      { objective: "O1", q: "Pourquoi penser aux besoins de l'autre partie ?", options: ["Pour la piéger", "Pour céder plus vite", "Pour trouver des choses à offrir qui comptent pour elle", "Cela n'a pas d'importance"], answer: 2, why: "Connaître leurs besoins montre quoi échanger." },
      { objective: "O1", q: "Un sponsor a très probablement besoin :", options: ["Du mot de passe de votre banque", "Que vos publications touchent ses clients", "Que vous travailliez gratuitement", "De votre adresse personnelle"], answer: 1, why: "Les sponsors paient pour toucher des gens qui pourraient acheter." },
      { objective: "O2", q: "Pourquoi faire vous-même la première demande raisonnable ?", options: ["Le premier chiffre oriente souvent toute la discussion", "C'est impoli d'attendre", "Cela termine la discussion plus vite", "La loi l'exige"], answer: 0, why: "Le premier chiffre annoncé sert d'ancrage." },
      { objective: "O2", q: "Votre première demande doit être :", options: ["Bien en dessous de votre objectif", "Un secret", "Exactement votre seuil de rupture", "Un peu au-dessus de votre objectif, avec une raison"], answer: 3, why: "Elle laisse de la marge et elle est facile à expliquer." },
      { objective: "O3", q: "Quelle question vous aide à savoir quoi échanger ?", options: ["\"Pourquoi êtes-vous si radin ?\"", "\"Je peux l'avoir comme ça ?\"", "\"Qu'est-ce qui compte le plus pour vous dans cet accord ?\"", "\"C'est votre dernier mot ?\""], answer: 2, why: "Les questions ouvertes révèlent les besoins de l'autre partie." },
      { objective: "O3", q: "L'outil \"Si vous pouvez..., alors je peux...\" vous aide à :", options: ["Donner des choses gratuitement", "Échanger au lieu de céder", "Terminer la discussion", "Éviter d'écouter"], answer: 1, why: "Il lie chaque concession à quelque chose en retour." },
      { objective: "O3", q: "En dehors de l'argent, que pourriez-vous négocier pour un emploi ?", options: ["Le salaire de vos collègues", "La déclaration d'impôts de l'entreprise", "La date de début ou une révision du salaire après 90 jours", "Rien d'autre n'est permis"], answer: 2, why: "Les horaires, la date de début, la formation et les révisions sont négociables." },
      { objective: "O3", q: "Un client veut un prix plus bas. Une bonne réponse avec une option est :", options: ["\"Si vous payez d'avance, je peux faire 5 pour cent de remise.\"", "\"Bien sûr, moitié prix.\"", "\"Jamais de remise, au revoir.\"", "\"Je vais perdre de l'argent, mais d'accord.\""], answer: 0, why: "Elle échange la remise contre quelque chose qui a de la valeur pour vous." },
      { objective: "O4", q: "\"C'est à prendre ou à laisser\" est un exemple de :", options: ["Plan B", "Tactique de pression", "Offre écrite", "Contre-offre"], answer: 1, why: "Elle cherche à vous faire décider trop vite." },
      { objective: "O4", q: "Votre meilleur outil contre la pression est :", options: ["Crier", "Signer vite", "Mentir", "Le temps : demander à y réfléchir"], answer: 3, why: "Le temps vous permet de vérifier votre plan et de vous calmer." },
      { objective: "O4", q: "Pendant une discussion tendue, le mieux est de :", options: ["Attaquer la personne", "Parler du problème, pas de la personne", "Partir sans un mot", "Hausser le ton"], answer: 1, why: "Le respect laisse la porte ouverte à un meilleur accord." },
      { objective: "O5", q: "Quelqu'un vous demande de signer un formulaire vide et de \"le remplir plus tard\". Vous devez :", options: ["Le signer", "Signer seulement la première page", "Refuser ; ne signez jamais de papiers vides ou flous", "Demander à une IA de signer"], answer: 2, why: "Un papier vide peut être rempli avec n'importe quoi." },
      { objective: "O5", q: "Pour un nouvel emploi, la meilleure preuve écrite de l'accord est :", options: ["Une lettre d'offre", "Un SMS d'un ami", "Votre mémoire", "Une publication sur les réseaux sociaux"], answer: 0, why: "Une lettre d'offre indique le salaire, la date de début et les conditions." },
      { objective: "O6", q: "Où les travailleurs américains peuvent-ils trouver le salaire habituel de nombreux métiers ?", options: ["Un forum au hasard", "Une publicité en fenêtre surgissante", "Seulement auprès de l'employeur", "L'Occupational Outlook Handbook du BLS sur bls.gov/ooh"], answer: 3, why: "Le guide du BLS donne le salaire habituel de centaines de métiers." },
      { objective: "O6", q: "En Californie, un employeur peut-il en général vous demander votre salaire passé ?", options: ["Oui, toujours", "En général non, mais il peut demander quel salaire vous attendez", "Seulement par e-mail", "Seulement si vous avez moins de 25 ans"], answer: 1, why: "La Californie interdit en général de demander l'historique de salaire ; on peut demander vos attentes." },
      { objective: "O6", q: "Avant d'acheter des fournitures pour votre entreprise, une étape intelligente est de :", options: ["Prendre le premier prix", "Demander au fournisseur de choisir pour vous", "Demander au moins trois devis", "Ne jamais comparer"], answer: 2, why: "Plusieurs devis montrent le prix du marché." },
      { objective: "O6", q: "Quand vous vendez, pourquoi devez-vous connaître vos coûts ?", options: ["Pour ne jamais accepter un prix qui vous fait perdre de l'argent", "Pour montrer vos factures aux clients", "Ce n'est pas important", "Pour augmenter les prix pour vos amis"], answer: 0, why: "Connaître vos coûts fixe votre prix de rupture." }
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
      11,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est à « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Plan sur papier",
        objective: "O1",
        notYet: "Il manque au plan l'objectif, le seuil de rupture, le plan B ou les besoins de l'autre partie.",
        meets: "Les quatre parties sont écrites, précises et réalistes.",
        exceeds: "Les besoins de l'autre partie sont reliés à des choses que vous pourriez lui offrir."
      },
      {
        name: "Chiffre juste recherché",
        objective: "O6",
        notYet: "L'objectif est une supposition sans source.",
        meets: "L'objectif repose sur au moins une source fiable, comme des données sur les salaires, des offres d'emploi ou trois devis.",
        exceeds: "La source est nommée et, pour une vente, le prix couvre vos coûts."
      },
      {
        name: "Demande claire",
        objective: "O2",
        notYet: "Pas de chiffre, ou un chiffre sans raison.",
        meets: "Une demande de départ claire, un peu au-dessus de l'objectif, avec une raison, puis le silence.",
        exceeds: "La demande comprend aussi une question pour savoir ce qui compte pour l'autre partie."
      },
      {
        name: "Des échanges, pas des concessions",
        objective: "O3",
        notYet: "Le chiffre a baissé sous la pression, sans rien en retour.",
        meets: "Au moins un échange \"Si vous pouvez..., alors je peux...\" utilisé dans le jeu de rôle.",
        exceeds: "Deux échanges ou plus, autres que l'argent, qui coûtent peu mais comptent pour l'autre partie."
      },
      {
        name: "Calme sous la pression",
        objective: "O4",
        notYet: "A accepté sur-le-champ ou s'est énervé quand on a insisté.",
        meets: "A demandé du temps ou a refusé poliment, et est resté respectueux.",
        exceeds: "A nommé ensuite la tactique de pression et la façon dont il y a répondu."
      },
      {
        name: "Accord par écrit",
        objective: "O5",
        notYet: "Pas d'e-mail de suivi, ou il oublie des points convenus.",
        meets: "L'e-mail liste chaque point convenu (prix ou salaire, dates, conditions) et demande de confirmer.",
        exceeds: "L'e-mail est court, poli et prêt à être envoyé le jour même."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui disent avoir demandé un meilleur salaire, un meilleur prix ou de meilleures conditions dans les 30 jours (questionnaire de suivi)",
      "Apprenants qui disent avoir obtenu une augmentation, une meilleure offre ou un meilleur prix d'un fournisseur après avoir négocié",
      "Apprenants qui confirment un accord par écrit ou font relire un gros contrat avant de le signer"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Du papier et un stylo, ou un téléphone ou un ordinateur, pour le plan d'une page",
      "Un accès à Internet pour rechercher des salaires ou des prix, par exemple bls.gov/ooh ou des offres d'emploi",
      "Un ami ou un partenaire pour le jeu de rôle",
      "Environ 60 minutes au total, en courtes séances : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Mettez les apprenants par deux pour le jeu de rôle et donnez à celui qui résiste une carte avec une tactique de pression à utiliser.",
      "Utilisez des exemples adaptés au groupe : salaire horaire pour ceux qui cherchent un emploi, accords NIL et de parrainage pour les athlètes, prix des fournisseurs pour les chefs d'entreprise.",
      "Rappelez aux étudiants-athlètes de faire vérifier les accords NIL par le service de conformité de leur école, et à toute personne qui a un gros contrat de le faire relire.",
      "Les lois sur les salaires changent selon l'État et le pays ; orientez les apprenants vers leur propre administration du travail au lieu de donner des conseils juridiques.",
      "Notez la tâche finale avec la grille d'évaluation, et faites un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
