"use strict";

// Koach Learn course (French translation of entrepreneurs/entrepreneurs-ai-monetization.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "entrepreneurs-ai-monetization-fr",
  lang: "fr",
  translationOf: "entrepreneurs-ai-monetization",
  category: "Entrepreneurs",
  name: "Stratégies pour gagner de l'argent avec l'IA",
  skills: "Comparer les façons de gagner avec l'IA, Choisir un modèle adapté à vos forces, Fixer un prix selon la valeur, Créer un produit numérique avec l'IA, Construire des revenus récurrents, Repérer les arnaques à l'argent facile avec l'IA",
  outcome: "comparer les principales façons dont les entreprises gagnent de l'argent avec l'IA, choisir celle qui correspond à vos compétences et à vos clients, fixer le prix d'une offre selon sa valeur, créer un premier produit numérique ou une offre récurrente, et la tester avec un petit lancement, tout en évitant les promesses d'argent facile avec l'IA.",
  about: [
    "\"Comment gagner de l'argent avec l'IA ?\" est l'une des questions les plus recherchées en ligne, et beaucoup de réponses sont des arnaques. Ce cours vous donne une carte honnête et pratique : les vraies façons dont les petites entreprises gagnent avec l'IA, comment en choisir une, comment fixer son prix et comment la tester avant de dépenser beaucoup.",
    "Vous comparerez six modèles de revenus (services assistés par l'IA, services en formule, produits numériques, abonnements, contenus avec sponsors ou liens d'affiliation, et économies dans une entreprise existante), choisirez celui qui vous convient, fixerez son prix selon la valeur, créerez avec l'IA un premier produit ou une offre récurrente, et ferez un petit test. Vous apprendrez aussi les signes qui trahissent les arnaques à l'argent facile avec l'IA, grâce aux conseils de la FTC (l'autorité américaine de protection des consommateurs).",
    "Chaque leçon dure environ cinq minutes, avec une tâche pratique. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Aucun revenu n'est garanti ; ce cours apprend à tester des idées honnêtement. Il ne donne pas de conseils en investissement."
  ],
  finalTask: "Créez un plan pour gagner de l'argent et un premier test : le modèle de revenus choisi et pourquoi, votre offre avec un prix fondé sur la valeur, une première version du produit ou de l'offre récurrente faite avec l'aide de l'IA et vérifiée par vous, un plan de petit lancement avec un objectif (par exemple 5 ventes ou 3 abonnés en 30 jours), et une liste de signaux d'alerte que vous utiliserez avant de payer un programme pour gagner de l'argent avec l'IA.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des particuliers et des propriétaires de petites entreprises aux États-Unis qui veulent gagner de l'argent avec l'IA, des personnes avec une activité complémentaire aux entrepreneurs qui ajoutent une nouvelle source de revenus.",
    startingPoint: "Ils utilisent des assistants IA et ont des compétences, une entreprise ou un public sur lesquels s'appuyer. Beaucoup ont vu en ligne des promesses de revenus faciles avec l'IA et ne savent pas quelles façons de gagner de l'argent sont réelles.",
    gap: "Les combines pour s'enrichir vite avec l'IA font perdre de l'argent, et ceux qui essaient de vrais modèles se dispersent souvent sur trop de choses, fixent des prix trop bas ou lancent sans tester. Les apprenants doivent choisir un modèle honnête, fixer le prix selon la valeur, créer une première offre et la tester à petite échelle, tout en repérant les arnaques avant de payer.",
    constraints: [
      "Des mots simples ; aucun revenu n'est garanti et le cours ne donne aucun conseil en investissement",
      "Appareils : un téléphone ou un ordinateur avec un assistant IA gratuit et un tableur",
      "Temps : environ cinq minutes par leçon, plus la création d'une première offre et un test de 30 jours",
      "Les promesses de revenus doivent être prouvables, le contenu sponsorisé signalé (FTC, l'agence américaine de protection des consommateurs), et ce qui est fait uniquement par l'IA peut ne pas être protégé par le droit d'auteur",
      "Les questions d'impôts vont aux sources officielles ou à un comptable"
    ],
    prerequisites: "« Introduction à l'IA pour les entrepreneurs », ou l'utilisation régulière d'un assistant IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir des six modèles de revenus avec l'IA", action: "décrire chaque modèle et donner un exemple adapté à vos compétences ou à votre entreprise", standard: "pour les six modèles" },
    { id: "O2", condition: "À partir de vos compétences, de vos heures, de votre réseau et de votre public", action: "choisir un modèle de revenus sur lequel vous concentrer pendant 90 jours", standard: "avec une raison écrite qui montre qu'il convient à ce que vous avez déjà" },
    { id: "O3", condition: "Pour le modèle choisi", action: "fixer un prix entre votre prix plancher et la valeur pour le client", standard: "en comparant deux prix de concurrents et avec les calculs vérifiés dans un tableur" },
    { id: "O4", condition: "Avec l'aide de l'IA et votre propre expertise", action: "créer une première version d'un produit numérique ou d'une formule de service pour un problème et un acheteur", standard: "avec chaque fait vérifié et aucune affirmation impossible à prouver" },
    { id: "O5", condition: "À partir de votre premier produit ou service", action: "concevoir une offre récurrente ou groupée et un test de lancement de 30 jours", standard: "avec un objectif clair, un moyen de le suivre et tout sponsoring signalé" },
    { id: "O6", condition: "Avant de payer un programme de revenus ou un coaching sur l'IA", action: "vérifier le programme avec une liste écrite de signaux d'alerte", standard: "en demandant le document d'information et en sachant où signaler une arnaque" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Choisir comment vous allez gagner",
      lessons: [
        {
          objectives: ["O1"],
          title: "Six façons dont les entreprises gagnent avec l'IA",
          minutes: 5,
          goal: "Décrire six vrais modèles de revenus avec l'IA et un exemple de chacun.",
          text: [
            "1) Services assistés par l'IA : vous faites plus vite le travail de vos clients grâce à l'IA, par exemple des publications pour les réseaux sociaux, des CV, la remise en ordre d'une comptabilité. 2) Services en formule : un ensemble fixe à un prix fixe, comme \"10 descriptions de produits pour X €\". 3) Produits numériques : modèles, guides, agendas ou cours que vous faites une fois et vendez plusieurs fois.",
            "4) Abonnements : un produit ou un service mensuel, comme un pack de contenus chaque semaine ou un petit logiciel d'IA. 5) Contenus avec sponsors ou affiliation : vous enseignez ou divertissez avec l'aide de l'IA et gagnez de l'argent grâce à des sponsors ou des liens d'affiliation, en le signalant clairement. 6) Économies : dans une entreprise existante, une IA qui fait gagner des heures ou réduit les coûts, c'est aussi de l'argent.",
            "Aucun de ces modèles ne donne un revenu automatique. Chacun demande de vrais clients, une vraie valeur et un vrai travail. L'IA réduit surtout le temps nécessaire pour fabriquer et livrer."
          ],
          words: [["Monétiser", "trouver un moyen de gagner de l'argent avec quelque chose."], ["Service en formule", "un service vendu comme un ensemble fixe à un prix fixe."], ["Lien d'affiliation", "un lien qui vous verse une commission quand quelqu'un achète en passant par lui."]],
          slides: [
            { title: "Les services", bullets: ["Services assistés par l'IA pour des clients", "En formule : ensemble fixe, prix fixe"] },
            { title: "Les produits", bullets: ["Produits numériques : faits une fois, vendus plusieurs fois", "Abonnements : produit ou service mensuel"] },
            { title: "Contenus et économies", bullets: ["Contenus avec sponsors ou affiliation, signalés", "Économies dans une entreprise existante"] },
            { title: "Pas de revenu automatique", bullets: ["Vrais clients, vraie valeur, vrai travail", "L'IA réduit le temps pour fabriquer et livrer"] }
          ],
          tryIt: "Écrivez les six modèles avec un exemple de chacun qui pourrait convenir à vos compétences ou à votre entreprise.",
          youCanNow: "nommer six vraies façons de gagner de l'argent avec l'IA et donner un exemple de chacune.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'un produit numérique ?", options: ["Quelque chose de créé une fois et vendu de nombreuses fois en ligne", "Un service que vous faites à la main pour chaque client", "Un prêt bancaire", "Le bail d'une boutique"], answer: 0, why: "Les produits numériques sont créés une fois et peuvent être vendus encore et encore." },
            { objective: "O1", q: "Vous tenez une boulangerie et utilisez l'IA pour gagner deux heures de paperasse par semaine. De quel modèle s'agit-il ?", options: ["Un abonnement", "Des économies dans une entreprise existante", "Un lien d'affiliation", "Un sponsoring"], answer: 1, why: "L'argent économisé dans une entreprise compte comme de l'argent gagné." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Choisir un modèle adapté à vos forces",
          minutes: 5,
          goal: "Choisir le modèle de revenus qui convient à vos compétences, à votre public et à votre temps.",
          text: [
            "Le meilleur modèle dépend de ce que vous avez déjà. Des compétences et du temps mais pas de public : les services ou les services en formule rapportent en général le plus vite. Un public (abonnés, liste d'e-mails, communauté) : les produits numériques, les abonnements ou les contenus sponsorisés peuvent convenir. Une entreprise existante : commencez par les économies et un service complémentaire pour les clients actuels.",
            "Demandez à l'IA de vous aider à réfléchir : \"Voici mes compétences, mon temps chaque semaine, les gens que je connais et le public que j'ai. Compare pour moi les six modèles de revenus avec l'IA : rapidité de la première vente, coût de démarrage, risque et effort.\" Puis décidez vous-même.",
            "Choisissez UN modèle pour les 90 prochains jours. Essayer les six à la fois est la raison la plus fréquente pour laquelle les gens ne gagnent rien."
          ],
          steps: ["Écrivez vos compétences, vos heures par semaine, votre réseau et votre public.", "Demandez à l'IA de comparer les six modèles pour vous.", "Notez chacun : rapidité, coût, risque, effort.", "Choisissez un modèle pour 90 jours."],
          words: [["Public", "les personnes qui vous suivent, vous lisent ou vous écoutent déjà."], ["Coût de démarrage", "l'argent nécessaire avant de pouvoir faire la première vente."]],
          slides: [
            { title: "Compétences et temps, pas de public", bullets: ["Services ou services en formule", "Souvent la première vente la plus rapide"] },
            { title: "Vous avez un public", bullets: ["Produits numériques", "Abonnements ou contenus sponsorisés"] },
            { title: "Vous avez une entreprise", bullets: ["D'abord les économies", "Un service complémentaire pour les clients actuels"] },
            { title: "UN seul modèle pour 90 jours", bullets: ["Faire les six à la fois ne rapporte rien"] }
          ],
          tryIt: "Listez vos compétences, vos heures, votre réseau et votre public, demandez à l'IA de comparer les six modèles pour vous, et choisissez un modèle pour les 90 prochains jours.",
          youCanNow: "choisir un modèle de revenus avec l'IA adapté à ce que vous avez déjà.",
          quickCheck: [
            { objective: "O2", q: "Sur combien de modèles de revenus devez-vous vous concentrer pendant 90 jours ?", options: ["Les six", "Trois", "Un seul", "Aucun"], answer: 2, why: "Tout essayer en même temps est une raison courante de ne rien gagner." },
            { objective: "O2", q: "Vous écrivez très bien et avez du temps, mais pas de public. Que choisissez-vous ?", options: ["Le sponsoring", "Un gros produit par abonnement", "Du contenu d'affiliation", "Un service ou un service présenté comme un produit"], answer: 3, why: "Les services rapportent en général le plus vite quand vous avez des compétences mais pas encore de public." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fixer un prix selon la valeur",
          minutes: 5,
          goal: "Fixer un prix fondé sur la valeur pour le client, vérifié par rapport à vos coûts.",
          text: [
            "L'IA rend le travail plus rapide, ce qui pousse les gens à demander moins cher. Les clients paient pour le résultat, pas pour vos minutes. Demandez-vous : qu'est-ce que cela fait économiser ou gagner au client ? Si votre pack d'annonces aide une boutique à vendre plus, ou si votre modèle fait gagner deux heures par semaine à une responsable, le prix peut refléter cette valeur.",
            "Puis vérifiez votre prix plancher : vos coûts (outils, frais, temps y compris la vérification) plus le bénéfice. Regardez ce que demandent des offres semblables. Votre prix doit se situer entre votre plancher et la valeur pour le client.",
            "Demandez à l'IA des structures de prix (trois niveaux, offres groupées, prix de lancement), mais fixez et vérifiez vous-même les chiffres. Gardez vos justificatifs pour les impôts ; aux États-Unis, les travailleurs indépendants paient en général l'impôt sur le travail indépendant ; consultez irs.gov ou demandez à un comptable."
          ],
          steps: ["Estimez la valeur pour le client.", "Calculez votre plancher : coûts plus bénéfice.", "Regardez ce que demandent des offres semblables.", "Fixez un prix entre le plancher et la valeur.", "Demandez des structures à l'IA, puis vérifiez les chiffres."],
          words: [["Prix fondé sur la valeur", "un prix basé sur ce que vaut le résultat pour le client."], ["Prix plancher", "le prix le plus bas qui couvre encore vos coûts et votre bénéfice."], ["Niveau", "une version d'un produit à un prix fixé, comme basique ou premium."]],
          slides: [
            { title: "Les clients paient des résultats", bullets: ["Pas vos minutes", "Qu'est-ce que cela leur fait économiser ou gagner ?"] },
            { title: "Plancher et valeur", bullets: ["Plancher : coûts + bénéfice", "Valeur : ce que cela vaut pour le client", "Le prix se situe entre les deux"] },
            { title: "Structures", bullets: ["Niveaux, offres groupées, prix de lancement", "L'IA propose ; vous vérifiez les chiffres", "Gardez vos justificatifs pour les impôts"] }
          ],
          sources: [{ name: "IRS : centre fiscal des travailleurs indépendants (en anglais)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }],
          tryIt: "Pour le modèle choisi, écrivez la valeur pour le client, votre plancher, deux prix de concurrents et votre prix. Vérifiez les calculs dans un tableur.",
          youCanNow: "fixer le prix d'une offre assistée par l'IA selon sa valeur, au-dessus de vos coûts.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce que votre prix plancher ?", options: ["Vos coûts plus le bénéfice", "Le prix le plus bas d'un concurrent", "Ce que propose l'IA", "Zéro"], answer: 0, why: "En dessous du plancher, chaque vente fait perdre de l'argent." },
            { objective: "O3", q: "L'IA dit que votre tâche ne prend que cinq minutes et que vous devriez donc demander très peu. Que faites-vous ?", options: ["Ne demander presque rien", "Fixer le prix selon la valeur du résultat, au-dessus de votre plancher", "La faire gratuitement", "Copier le concurrent le moins cher"], answer: 1, why: "Les clients paient pour le résultat, pas pour le temps qu'a mis l'IA." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Choisir comment vous allez gagner",
        questions: [
          { objective: "O1", q: "Lequel est un service en formule ?", options: ["Un travail à l'heure sans limite", "\"10 descriptions de produits à prix fixe\"", "Un loisir gratuit", "Un achat d'actions"], answer: 1, why: "C'est un ensemble fixe à un prix fixe." },
          { objective: "O1", q: "Quelle affirmation sur les revenus avec l'IA est vraie ?", options: ["Il suffit d'un prompt", "L'IA fait de l'argent pendant que vous dormez, sans travail", "Toute entreprise d'IA gagne vite", "Aucun modèle n'est automatique ; chacun demande des clients et de la valeur"], answer: 3, why: "Un vrai revenu demande une vraie valeur et du travail." },
          { objective: "O2", q: "Vous avez des compétences et du temps mais pas de public. Quel modèle rapporte en général le plus vite ?", options: ["Les services ou services en formule", "Les contenus sponsorisés", "Les abonnements pour un public", "Les liens d'affiliation"], answer: 0, why: "Les services peuvent se vendre sans public." },
          { objective: "O2", q: "Pourquoi choisir un seul modèle pour 90 jours ?", options: ["L'IA n'en permet qu'un", "C'est la loi", "Tout essayer à la fois est une raison fréquente pour laquelle les gens ne gagnent rien", "Pour éviter les clients"], answer: 2, why: "La concentration donne des résultats." },
          { objective: "O3", q: "Votre prix doit se situer :", options: ["Au-dessus de toute valeur", "Sous vos coûts", "Entre votre prix plancher et la valeur pour le client", "À zéro"], answer: 2, why: "Il couvre ainsi les coûts et reflète la valeur." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Créer, tester et rester en sécurité",
      lessons: [
        {
          objectives: ["O4"],
          title: "Créer un produit numérique avec l'IA",
          minutes: 6,
          goal: "Créer une première version d'un produit numérique avec l'aide de l'IA et votre propre expertise.",
          text: [
            "Les bons produits numériques résolvent un problème pour un type d'acheteur : \"Un planning hebdomadaire de préparation des repas pour les travailleurs en horaires décalés\", \"20 modèles d'e-mails pour les entreprises de ménage\", \"Une liste de contrôle pour ouvrir un food truck dans votre ville\". C'est votre expérience qui lui donne de la valeur ; l'IA accélère la rédaction et la mise en page.",
            "Étapes : faites le plan avec l'IA, écrivez les parties clés avec vos propres connaissances, vérifiez chaque fait, mettez-le en page dans Canva ou dans un document, et testez-le avec deux ou trois acheteurs avant un lancement plus large.",
            "Le droit d'auteur compte : le Bureau du droit d'auteur des États-Unis (US Copyright Office) dit qu'un contenu produit uniquement par l'IA n'est pas protégé, alors que votre propre travail créatif et vos modifications peuvent l'être. Mettez un vrai travail humain dans tout ce que vous voulez posséder, et ne copiez jamais le produit de quelqu'un d'autre. Si vous promettez des résultats (\"perdez du poids\", \"gagnez 1 000 $\"), vous devez pouvoir les prouver."
          ],
          steps: ["Choisissez un problème et un acheteur.", "Faites le plan du produit avec l'IA.", "Écrivez les parties clés à partir de votre propre expérience.", "Vérifiez les faits et faites la mise en page.", "Testez avec deux ou trois acheteurs et améliorez."],
          words: [["Produit numérique", "quelque chose de fait une fois et vendu plusieurs fois en ligne, comme un modèle ou un guide."], ["Droit d'auteur", "le droit légal de contrôler la copie d'une œuvre créative originale."]],
          slides: [
            { title: "Un problème, un acheteur", bullets: ["Planning des repas pour horaires décalés", "Modèles d'e-mails pour entreprises de ménage", "Votre expérience lui donne de la valeur"] },
            { title: "Fabriquez-le", bullets: ["Le plan avec l'IA", "Les parties clés avec vos connaissances", "Vérifiez les faits, mettez en page, testez"] },
            { title: "Droit d'auteur et promesses", bullets: ["Un contenu fait uniquement par l'IA n'est pas protégé", "Ajoutez un vrai travail humain ; ne copiez jamais", "Prouvez toute promesse de résultat"] }
          ],
          sources: [{ name: "US Copyright Office : annonce du rapport partie 2 sur la protection par le droit d'auteur (en anglais)", url: "https://www.copyright.gov/newsnet/2025/1060.html" }, { name: "FTC : bases de la publicité et du marketing (en anglais)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Faites la première version d'un petit produit numérique (ou la première formule de votre service) avec l'aide de l'IA et votre propre expertise. Vérifiez chaque fait.",
          youCanNow: "créer un produit numérique qui associe votre expertise à la rapidité de l'IA.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qui donne envie d'acheter un produit numérique ?", options: ["Il est très long", "Il a été entièrement fait par l'IA", "Il règle un problème pour un acheteur grâce à une vraie expertise", "Il couvre tous les sujets"], answer: 2, why: "Les produits ciblés fondés sur une vraie expertise apportent de la valeur aux acheteurs." },
            { objective: "O4", q: "L'IA ajoute « les acheteurs gagnent 1 000 $ par mois » sur la page de votre produit. Vous n'en avez aucune preuve. Que faites-vous ?", options: ["La garder", "Mettre 500 $ à la place", "La mettre en petits caractères", "La retirer"], answer: 3, why: "Les promesses de revenus doivent être prouvables." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Revenus récurrents et petit lancement",
          minutes: 5,
          goal: "Concevoir une offre récurrente ou groupée et faire un test de lancement de 30 jours.",
          text: [
            "Les revenus récurrents (l'argent qui arrive chaque mois) sont plus stables que les ventes ponctuelles. Possibilités : un pack mensuel de contenus ou de modèles, une formule d'accompagnement pour vos clients de services, un abonnement de membre ou un petit outil par abonnement. Les offres groupées (un produit plus un court appel, ou trois produits ensemble) augmentent la valeur de chaque vente.",
            "Faites un petit lancement : prévenez les gens qui vous connaissent déjà, une communauté dont vous faites partie ou vos anciens clients. Utilisez l'IA pour rédiger l'annonce, mais rendez-la personnelle et honnête. Si vous utilisez de l'affiliation ou des sponsors, signalez-le clairement (par exemple \"#publicité\" au début).",
            "Fixez un objectif pour 30 jours (par exemple 5 ventes ou 3 abonnés), suivez-le, et demandez aux acheteurs ce qui les a fait acheter et ce qui rendrait l'offre meilleure."
          ],
          steps: ["Concevez une offre récurrente ou groupée.", "Rédigez avec l'IA une annonce de lancement honnête et personnalisez-la.", "Partagez-la avec les personnes et les groupes qui vous connaissent déjà.", "Signalez clairement tout sponsor ou toute affiliation.", "Suivez votre objectif de 30 jours et demandez l'avis des acheteurs."],
          words: [["Revenus récurrents", "des revenus qui se répètent régulièrement, comme des abonnements mensuels."], ["Offre groupée", "plusieurs produits ou services vendus ensemble."], ["Mention (transparence)", "le fait de dire clairement aux gens qu'il existe une relation payée."]],
          slides: [
            { title: "Le récurrent bat le ponctuel", bullets: ["Packs mensuels ou formules d'accompagnement", "Abonnements de membre ou petits outils", "Les offres groupées augmentent la valeur de chaque vente"] },
            { title: "Lancez petit et honnête", bullets: ["Les personnes et groupes qui vous connaissent", "L'IA rédige ; vous personnalisez", "Signalez sponsors et affiliation"] },
            { title: "Objectif sur 30 jours", bullets: ["5 ventes ou 3 abonnés", "Suivez-le", "Demandez aux acheteurs pourquoi ils ont acheté"] }
          ],
          sources: [{ name: "FTC : guide sur les recommandations, questions fréquentes (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }],
          tryIt: "Concevez une offre récurrente ou groupée, écrivez votre annonce de lancement, et fixez un objectif sur 30 jours avec la façon dont vous le suivrez.",
          youCanNow: "concevoir des revenus récurrents et lancer une offre avec un test clair et mesurable.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qu'un revenu récurrent ?", options: ["Un revenu qui se répète, comme un abonnement mensuel", "Une vente unique", "Un remboursement d'impôts", "Un prêt"], answer: 0, why: "Les offres récurrentes rapportent chaque mois." },
            { objective: "O5", q: "Une marque vous paie pour parler de son outil d'IA dans votre lettre d'information. Que faites-vous ?", options: ["Cacher le paiement", "Le signaler clairement, par exemple avec « #pub » au début", "Le mentionner seulement tout à la fin en petits caractères", "Refuser de le suivre"], answer: 1, why: "Le contenu sponsorisé doit être clairement signalé." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Repérer les arnaques à l'argent facile avec l'IA",
          minutes: 5,
          goal: "Utiliser une liste de signaux d'alerte avant de payer un programme de revenus ou un coaching sur l'IA.",
          text: [
            "Beaucoup de programmes vendent des \"revenus grâce à l'IA\" : boutiques en ligne clés en main, robots de trading à l'IA, cours de \"revenus passifs\". La FTC (l'autorité américaine de protection des consommateurs) a agi contre plusieurs d'entre eux. Dans un cas qu'elle décrit, une entreprise promettait d'utiliser l'IA pour choisir les produits les plus vendus pour des boutiques en ligne, mais la FTC a accusé ses promesses de gains d'être sans fondement, et la plupart des clients n'ont pas récupéré ce qu'ils avaient payé.",
            "Conseils de la FTC avant d'acheter une opportunité d'affaires ou un coaching : demandez le document d'information d'une page exigé par la loi ; vérifiez qu'il donne le nom du vendeur et les éventuels procès ; lisez les conditions d'annulation et de remboursement ; demandez des références ; s'ils disent que vous pouvez gagner de l'argent, demandez la déclaration écrite sur les gains ; et partez si ce qu'ils disent ne correspond pas à leurs documents.",
            "Autres signaux d'alerte : revenus garantis, pression pour acheter aujourd'hui, gros frais à payer d'avance, \"IA secrète\" vague, et contrats qui vous empêchent de laisser des avis honnêtes. Aux États-Unis, signalez les arnaques suspectées sur ReportFraud.ftc.gov. Ce cours ne recommande aucun produit d'investissement ou de trading."
          ],
          steps: ["Demandez le document d'information d'une page.", "Vérifiez le nom du vendeur et les procès.", "Lisez les conditions de remboursement et d'annulation.", "Demandez des références et la déclaration écrite sur les gains.", "Partez si quelque chose ne correspond pas ; signalez les arnaques sur ReportFraud.ftc.gov."],
          words: [["Opportunité d'affaires", "un programme vendu comme un moyen tout prêt de commencer à gagner de l'argent."], ["Promesse de gains", "une affirmation sur la somme que vous pourriez gagner."], ["Signal d'alerte", "un signe qui annonce une arnaque."]],
          slides: [
            { title: "Les programmes de \"revenus grâce à l'IA\"", bullets: ["Boutiques clés en main, robots de trading, revenus passifs", "La FTC a agi contre des promesses de gains sans fondement"] },
            { title: "FTC : avant d'acheter", bullets: ["Document d'information d'une page", "Nom du vendeur et procès", "Remboursement, références, déclaration sur les gains"] },
            { title: "Signaux d'alerte", bullets: ["Revenus garantis, pression pour acheter aujourd'hui", "Gros frais d'avance, \"IA secrète\" vague", "Interdiction de laisser des avis honnêtes"] },
            { title: "En cas de doute", bullets: ["Partez", "Signalez sur ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC, alerte aux consommateurs : vérifier une opportunité d'affaires ou de coaching avant d'acheter (en anglais)", url: "https://www.consumer.ftc.gov/consumer-alerts/2023/08/vetting-business-or-coaching-opportunity-you-buy" }],
          tryIt: "Tâche finale : écrivez votre liste de signaux d'alerte, puis rassemblez votre plan pour gagner de l'argent : modèle et pourquoi, offre avec son prix, premier produit ou offre récurrente, et test de lancement sur 30 jours.",
          youCanNow: "gagner de l'argent avec l'IA grâce à des offres honnêtes et testées, et éviter les arnaques à l'argent facile.",
          quickCheck: [
            { objective: "O6", q: "Lequel est un signal d'alerte dans un programme de revenus avec l'IA ?", options: ["Un essai gratuit sans promesses", "Des prix clairs et une politique de remboursement", "Des gains garantis et une pression pour payer aujourd'hui", "Un contrat écrit"], answer: 2, why: "Des revenus garantis et la pression pour acheter tout de suite sont des signaux d'alerte." },
            { objective: "O6", q: "Un coach demande de gros frais d'avance pour une occasion d'affaires de « boutique IA ». Que faites-vous d'abord ?", options: ["Payer vite avant que le prix monte", "Emprunter l'argent", "Signer sans lire", "Demander le document d'information d'une page et vérifier votre liste de signaux d'alerte"], answer: 3, why: "Demandez le document d'information et vérifiez les signaux d'alerte avant de payer." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Créer, tester et rester en sécurité",
        questions: [
          { objective: "O4", q: "Qu'est-ce qui donne envie d'acheter un produit numérique ?", options: ["Il résout un problème pour un acheteur, avec votre vraie expertise", "Il a été fait uniquement par l'IA", "Il est très long", "Il copie un best-seller"], answer: 0, why: "L'expertise et un problème clair créent de la valeur." },
          { objective: "O4", q: "Un contenu produit uniquement par l'IA est-il protégé par le droit d'auteur aux États-Unis ?", options: ["Seulement s'il est vendu", "Oui, toujours", "Seulement les images", "Non, selon le Copyright Office"], answer: 3, why: "Le droit d'auteur exige un auteur humain." },
          { objective: "O5", q: "Lequel est un revenu récurrent ?", options: ["Une vente unique", "Un abonnement mensuel à des modèles", "Un cadeau", "Un remboursement"], answer: 1, why: "Il se répète chaque mois." },
          { objective: "O6", q: "Un programme promet \"10 000 $ par mois garantis avec nos boutiques IA\". Qu'est-ce que c'est ?", options: ["Un signal d'alerte", "Un investissement sûr", "Un programme du gouvernement", "Une offre d'emploi normale"], answer: 0, why: "Un revenu garanti est un signe classique d'arnaque." },
          { objective: "O6", q: "Quel document demander avant d'acheter une opportunité d'affaires ?", options: ["Votre propre relevé bancaire", "Le fichier de leur logo", "Le document d'information d'une page", "La photo d'une célébrité"], answer: 2, why: "La FTC conseille de demander ce document obligatoire." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Stratégies pour gagner de l'argent avec l'IA",
    questions: [
      { objective: "O1", q: "Monétiser veut dire :", options: ["Dépenser de l'argent", "Trouver un moyen de gagner de l'argent avec quelque chose", "Donner gratuitement", "Emprunter de l'argent"], answer: 1, why: "C'est la définition." },
      { objective: "O1", q: "Lequel est un service assisté par l'IA ?", options: ["Payer des publicités", "Acheter des cryptomonnaies", "Regarder des vidéos", "Écrire plus vite avec l'IA des publications pour les réseaux sociaux de clients"], answer: 3, why: "Vous faites le travail des clients avec l'aide de l'IA." },
      { objective: "O1", q: "Un produit numérique est :", options: ["Un prêt", "Un envoi physique", "Une consultation unique", "Fait une fois et vendu plusieurs fois en ligne"], answer: 3, why: "Les modèles et les guides en sont des exemples." },
      { objective: "O1", q: "Un lien d'affiliation :", options: ["Est un cadeau gratuit", "Vous verse une commission quand quelqu'un achète en passant par lui", "Est un formulaire fiscal", "Est un mot de passe"], answer: 1, why: "C'est ainsi que fonctionne l'affiliation." },
      { objective: "O1", q: "Les économies comptent comme un revenu parce que :", options: ["Elles évitent les clients", "Elles sont gratuites", "L'argent économisé dans une entreprise est de l'argent gagné", "L'IA vous paie"], answer: 2, why: "Des coûts plus bas augmentent le bénéfice." },
      { objective: "O1", q: "L'IA aide surtout en :", options: ["Réduisant le temps pour fabriquer et livrer", "Garantissant un revenu", "Trouvant des clients automatiquement", "Supprimant tout le travail"], answer: 0, why: "L'IA accélère le travail ; les clients ont toujours besoin de valeur." },
      { objective: "O2", q: "Si vous avez déjà une entreprise, un bon début est :", options: ["Lancer six nouveaux modèles", "L'abandonner", "Les économies et un service complémentaire pour les clients actuels", "Acheter un cours de revenus avec l'IA"], answer: 2, why: "Construisez sur ce que vous avez déjà." },
      { objective: "O2", q: "Sur combien de modèles vous concentrer pendant 90 jours ?", options: ["Un", "Six", "Aucun", "Le plus possible"], answer: 0, why: "La concentration donne des résultats." },
      { objective: "O3", q: "Les clients paient surtout pour :", options: ["Vos minutes", "Le résultat", "Vos outils", "Votre logo"], answer: 1, why: "Fixez le prix selon la valeur." },
      { objective: "O3", q: "Votre prix plancher, c'est :", options: ["Le prix d'un concurrent", "Le prix le plus élevé", "Zéro", "Les coûts plus le bénéfice"], answer: 3, why: "En dessous, vous perdez de l'argent." },
      { objective: "O3", q: "Qui fixe et vérifie vos prix finaux ?", options: ["Vous", "L'IA", "Votre concurrent", "Personne"], answer: 0, why: "L'IA peut proposer ; vous décidez et vérifiez." },
      { objective: "O3", q: "Aux États-Unis, un revenu de travailleur indépendant veut dire en général payer :", options: ["Seulement des frais à l'entreprise d'IA", "Aucun impôt", "Seulement la taxe sur les ventes", "L'impôt sur le travail indépendant en plus de l'impôt sur le revenu"], answer: 3, why: "Voir le centre fiscal de l'IRS pour les indépendants." },
      { objective: "O4", q: "Un bon produit numérique se concentre sur :", options: ["La copie d'un produit populaire", "Tout pour tout le monde", "Un problème pour un type d'acheteur", "Ce que l'IA propose"], answer: 2, why: "La concentration lui donne de la valeur." },
      { objective: "O4", q: "Si votre produit promet \"gagnez 1 000 $ par mois\", vous devez :", options: ["Ajouter \"garanti\"", "Pouvoir le prouver", "Le cacher en petits caractères", "Rien"], answer: 1, why: "Les affirmations publicitaires doivent être vraies et prouvées." },
      { objective: "O5", q: "Une offre groupée, c'est :", options: ["Un essai gratuit", "Un seul article", "Un remboursement", "Plusieurs produits ou services vendus ensemble"], answer: 3, why: "Les offres groupées augmentent la valeur de chaque vente." },
      { objective: "O5", q: "Si vous êtes payé par un sponsor, vous devez :", options: ["Le mentionner une fois par an", "Le cacher", "Le signaler clairement, comme \"#publicité\" au début", "Le dire seulement à vos amis"], answer: 2, why: "Les règles de la FTC sur les recommandations exigent une mention claire." },
      { objective: "O5", q: "Un bon objectif de lancement sur 30 jours est :", options: ["5 ventes ou 3 abonnés", "Aucun objectif", "Un million d'utilisateurs", "Ce qui arrivera"], answer: 0, why: "Des objectifs clairs et petits se mesurent." },
      { objective: "O6", q: "Dans un cas de la FTC, une entreprise promettait que l'IA choisirait les meilleurs produits pour des boutiques en ligne. La FTC a dit :", options: ["Que cela marchait parfaitement", "Que ses promesses de gains étaient sans fondement et que la plupart des clients n'avaient pas récupéré leur argent", "Que c'était un programme du gouvernement", "Que tout le monde était devenu riche"], answer: 1, why: "Cela vient de l'alerte aux consommateurs de la FTC." },
      { objective: "O6", q: "Lequel est un signal d'alerte ?", options: ["Des conditions de remboursement claires", "Une pression pour acheter aujourd'hui avec de gros frais d'avance", "Des références que vous pouvez appeler", "Un document d'information écrit"], answer: 1, why: "La pression et les gros frais d'avance sont des signes d'arnaque." },
      { objective: "O6", q: "Où signaler, aux États-Unis, une arnaque suspectée à l'opportunité d'affaires ?", options: ["ReportFraud.ftc.gov", "Le site de l'arnaqueur", "Un forum au hasard", "Nulle part"], answer: 0, why: "La FTC y recueille les signalements." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      6,
      7,
      8,
      9,
      12,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Modèle et raison",
        objective: "O2",
        notYet: "Aucun modèle choisi, ou plusieurs en même temps.",
        meets: "Un modèle avec une raison écrite qui montre qu'il convient aux compétences, au temps et au public de l'apprenant.",
        exceeds: "Dit aussi quels modèles ont été écartés et pourquoi."
      },
      {
        name: "Prix selon la valeur",
        objective: "O3",
        notYet: "Prix sous le plancher, ou aucun calcul.",
        meets: "Un prix entre le plancher et la valeur, avec deux prix de concurrents et des calculs vérifiés.",
        exceeds: "Explique la valeur avec les mots du client."
      },
      {
        name: "Premier produit ou première offre",
        objective: "O4",
        notYet: "Contenu de l'IA non vérifié, ou affirmations impossibles à prouver.",
        meets: "Une première version pour un problème et un acheteur, faits vérifiés, avec l'expertise propre de l'apprenant.",
        exceeds: "Montrée à au moins un acheteur possible pour avoir son avis."
      },
      {
        name: "Test de lancement",
        objective: "O5",
        notYet: "Pas d'objectif ou pas de moyen de le suivre.",
        meets: "Un test de 30 jours avec un objectif clair, un message de lancement et un suivi.",
        exceeds: "Comprend une offre récurrente ou groupée et le signalement de tout sponsoring."
      },
      {
        name: "Liste de signaux d'alerte",
        objective: "O6",
        notYet: "Pas de liste, ou elle oublie les revenus garantis ou les techniques de pression.",
        meets: "Une liste qui couvre les garanties, la pression, les frais d'avance et le document d'information.",
        exceeds: "Note où signaler une arnaque soupçonnée."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui atteignent l'objectif de leur lancement de 30 jours (enquête de suivi)",
      "Les apprenants qui disent avoir évité un programme pour gagner de l'argent avec l'IA grâce à la liste de signaux d'alerte",
      "Les apprenants qui commencent un autre cours Koach Learn pour entrepreneurs dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec un assistant IA gratuit",
      "Un tableur pour les calculs de prix et le suivi du lancement",
      "Une liste de vos compétences, de vos heures, de votre réseau et de votre public",
      "Environ 60 minutes pour les leçons et les vérifications, plus un test de lancement de 30 jours"
    ],
    facilitatorNotes: [
      "Dites dès le début qu'aucun revenu n'est garanti et que le cours ne donne pas de conseil en investissement.",
      "Faites présenter en binômes le modèle et le prix choisis, pour vérifier qu'ils sont réalistes.",
      "Étudiez ensemble de vrais exemples publics de la FTC sur des combines pour gagner de l'argent avec l'IA, et construisez la liste de signaux d'alerte en groupe.",
      "Orientez les questions d'impôts vers les sources officielles ou un comptable.",
      "Notez le plan de revenus avec la grille, une ligne « Pas encore » à la fois."
    ]
  }
};
