"use strict";

// Koach Learn course (French translation of shared/everyday-math.js). See scripts/koachlearn-courses/README.md, "Translations".
// All money and pay examples are made up for practice. US units, US paystub rules and US agency names are kept, with a short explanation.
// Numbers keep the decimal point of the English (the course teaches "moving the point"); thousands are written with a space.

const DOL_OT = { name: "Ministère du Travail des États-Unis (DOL) : la rémunération des heures supplémentaires", url: "https://www.dol.gov/agencies/whd/overtime" };
const IRS_751 = { name: "IRS, sujet 751 : taux de retenue pour la Social Security et Medicare", url: "https://www.irs.gov/taxtopics/tc751" };
const CFPB = { name: "CFPB : Your Money, Your Goals (documents gratuits pour faire un budget)", url: "https://www.consumerfinance.gov/consumer-tools/educator-tools/your-money-your-goals/" };

module.exports = {
  id: "everyday-math-fr",
  lang: "fr",
  translationOf: "everyday-math",
  category: "Workforce Development",
  name: "Les maths de tous les jours, au travail et dans la vie",
  skills: "Fractions, nombres décimaux et pourcentages, Réductions, taxes, pourboires et augmentations, Prix unitaires et meilleurs achats, Mesures et heures de travail, Vérifier une fiche de paie, Faire un budget mensuel",
  outcome: "faire les calculs que vous rencontrez au travail et à la maison : utiliser les fractions, les nombres décimaux et les pourcentages, trouver le meilleur achat, mesurer et convertir des unités, vérifier votre fiche de paie et faire un budget mensuel à partir de votre salaire.",
  about: [
    "Ce cours s'adresse aux adultes qui veulent reprendre confiance avec les chiffres : personnes qui cherchent un emploi, personnes qui sortent de prison, immigrés, parents et toute personne qui reprend des études. Vous n'avez pas besoin de vous souvenir des maths de l'école. Nous partons du début, avec des choses réelles comme une étiquette de solde, un mètre ruban et une fiche de paie.",
    "Vous allez vous entraîner avec les fractions, les nombres décimaux et les pourcentages ; calculer des réductions, la taxe de vente, des pourboires et des augmentations ; comparer des prix unitaires au magasin ; mesurer et convertir pour une tâche de travail ; vérifier chaque ligne d'une fiche de paie ; et faire un budget mensuel.",
    "Ce sont les compétences par lesquelles commencent beaucoup de tests d'embauche et le test de mathématiques du GED (l'examen américain équivalent au diplôme de fin d'études secondaires). Après ce cours, « Préparation à l'examen GED : Mathématiques » est une bonne suite. Ce cours ne donne ni certificat ni diplôme ; il construit les compétences.",
    "Chaque leçon dure environ cinq minutes, avec des exemples résolus et une tâche « À vous de jouer » sur papier ou avec la calculatrice du téléphone. Un mini-contrôle de 2 questions suit chaque leçon, un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours. Tous les exemples de salaire et d'argent sont inventés pour s'entraîner. Les montants sont en dollars américains et s'écrivent avec un point décimal, comme aux États-Unis."
  ],
  finalTask: "Faites votre propre « Fiche de calcul travail et argent » sur une seule page : (1) vérifiez ligne par ligne une fiche de paie d'exercice (ou la vôtre, avec les numéros privés cachés) : heures multipliées par le taux, heures supplémentaires, retenues et salaire net ; (2) transformez ce salaire en revenu mensuel et faites un budget mensuel avec une ligne d'épargne, où les dépenses ne dépassent pas les revenus ; (3) comparez les prix unitaires de 3 produits que vous achetez souvent et écrivez quel format est le meilleur achat. Gardez-la et mettez-la à jour chaque mois.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Adultes qui reprennent des études : personnes qui cherchent un emploi, personnes qui sortent de prison, immigrés, parents et travailleurs plus âgés. Beaucoup ont quitté l'école tôt ou n'ont pas fait de calcul sur papier depuis des années, et certains sont anxieux face aux chiffres.",
    startingPoint: "Savent additionner, soustraire et utiliser la calculatrice du téléphone pour des calculs simples. Beaucoup ne sont pas sûrs d'eux avec les fractions, les pourcentages, les conversions d'unités et les retenues sur la fiche de paie, et peu tiennent un budget écrit.",
    gap: "Le travail et la vie de tous les jours demandent des calculs rapides et justes : mesurer sur le chantier, compter les heures, vérifier la paie, trouver les vrais prix et faire durer l'argent jusqu'à la fin du mois. Les erreurs coûtent de l'argent et peuvent passer inaperçues sur une fiche de paie. Ces compétences sont aussi la base du test de mathématiques du GED et de nombreux tests d'embauche.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; beaucoup d'exemples résolus",
      "Outils : papier, crayon et une calculatrice simple de téléphone ; aucun logiciel particulier",
      "Anxiété face aux maths : petites étapes, vérifier les réponses de deux façons, pas de pression de temps",
      "Vie privée : les fiches de paie d'exercice sont inventées ; sur une vraie, cachez le numéro de Social Security et les numéros de compte",
      "Les règles qui changent (taux d'impôt, heures supplémentaires) renvoient à des sources officielles ; les règles varient selon l'État"
    ],
    prerequisites: "Savoir additionner, soustraire et multiplier, avec ou sans calculatrice."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "À partir de fractions, de nombres décimaux, de pourcentages et d'un mètre ruban", action: "passer des fractions aux nombres décimaux et aux pourcentages, et lire un mètre ruban au 1/8 de pouce près", standard: "avec au moins 4 bonnes réponses sur 5" },
    { id: "O2", condition: "À partir d'un prix, d'une addition ou d'un taux de salaire", action: "calculer une réduction, une taxe de vente, un pourboire ou une augmentation avec les pourcentages", standard: "au centime près" },
    { id: "O3", condition: "À partir de deux formats du même produit et de leurs prix", action: "calculer le prix unitaire de chacun et choisir le meilleur achat", standard: "en choisissant bien dans au moins 4 paires sur 5" },
    { id: "O4", condition: "À partir d'une tâche de travail, comme poser un sol dans une pièce ou noter une journée de travail", action: "convertir des unités et calculer une surface ou des heures travaillées", standard: "avec la bonne unité, et en arrondissant au-dessus quand il faut des articles entiers" },
    { id: "O5", condition: "À partir d'une fiche de paie", action: "vérifier ligne par ligne les heures, le taux horaire, les heures supplémentaires, les retenues et le salaire net", standard: "avec chaque ligne juste au centime près, ou l'erreur notée pour la signaler" },
    { id: "O6", condition: "À partir d'un salaire régulier", action: "faire un budget mensuel qui comprend de l'épargne et garde les dépenses au niveau des revenus ou en dessous", standard: "avec chaque catégorie écrite et les totaux vérifiés" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Les nombres de tous les jours",
      lessons: [
        {
          title: "Fractions, nombres décimaux, pourcentages et mètre ruban",
          objectives: ["O1"],
          minutes: 6,
          goal: "Passer des fractions aux nombres décimaux et aux pourcentages, et lire un mètre ruban.",
          text: [
            "Les fractions, les nombres décimaux et les pourcentages sont trois façons d'écrire la même quantité. Une demi-pizza, c'est 1/2, ou 0.5, ou 50%. Un quart, c'est 1/4, 0.25 ou 25%. Trois quarts, c'est 3/4, 0.75 ou 75%.",
            "Pour passer d'une fraction à un nombre décimal, divisez le nombre du haut par le nombre du bas : 3/8, c'est 3 divisé par 8, soit 0.375. Pour passer d'un nombre décimal à un pourcentage, déplacez le point décimal de deux rangs vers la droite : 0.375 devient 37.5%. Pour passer d'un pourcentage à un nombre décimal, déplacez-le de deux rangs vers la gauche : 15% devient 0.15.",
            "Aux États-Unis, le mètre ruban divise chaque pouce (inch) en 16 petits traits. Le trait le plus long, au milieu du pouce, c'est 1/2. Les traits un peu moins longs sont 1/4 et 3/4. Ensuite viennent 1/8, 3/8, 5/8 et 7/8. Les plus courts sont les seizièmes. Si le ruban s'arrête 3 traits de 1/8 après le 5, la mesure est 5 pouces et 3/8.",
            "Additionner des fractions qui ont le même nombre en bas, c'est facile : additionnez les nombres du haut et gardez celui du bas. 1/8 + 3/8 = 4/8, ce qui est la même chose que 1/2."
          ],
          steps: ["Fraction vers nombre décimal : divisez le haut par le bas.", "Nombre décimal vers pourcentage : déplacez le point de 2 rangs vers la droite.", "Pourcentage vers nombre décimal : déplacez le point de 2 rangs vers la gauche.", "Mètre ruban : trouvez le pouce entier, puis comptez les traits après lui.", "Simplifiez : 4/8 est la même chose que 1/2."],
          words: [["Fraction", "une partie d'un tout, écrite avec un nombre en haut et un nombre en bas, comme 3/4."], ["Numérateur", "le nombre du haut d'une fraction : combien de parts vous avez."], ["Dénominateur", "le nombre du bas d'une fraction : combien de parts égales forment le tout."], ["Nombre décimal", "un nombre avec un point, comme 0.75, qui montre des parties d'un tout."], ["Pourcentage (%)", "des parts sur 100. 25% veut dire 25 sur 100."]],
          slides: [
            { title: "Trois façons d'écrire la même quantité", bullets: ["1/2 = 0.5 = 50%", "1/4 = 0.25 = 25%", "3/4 = 0.75 = 75%"] },
            { title: "Convertir", bullets: ["Fraction vers décimal : divisez le haut par le bas (3/8 = 0.375)", "Décimal vers pourcentage : le point de 2 rangs vers la droite (37.5%)", "Pourcentage vers décimal : le point de 2 rangs vers la gauche (15% = 0.15)"] },
            { title: "Lire un mètre ruban", bullets: ["Le trait le plus long, au milieu : 1/2", "Puis 1/4 et 3/4, puis les huitièmes, puis les seizièmes", "5 pouces et 3 traits de huitième = 5 3/8 pouces"] }
          ],
          tryIt: "Entraînez-vous (réponses plus bas) : (1) Écrivez 1/4 en nombre décimal et en pourcentage. (2) Écrivez 0.6 en pourcentage. (3) Écrivez 8% en nombre décimal. (4) Transformez 5/8 en nombre décimal. (5) Additionnez 1/4 + 1/4. Réponses : (1) 0.25 et 25% ; (2) 60% ; (3) 0.08 ; (4) 0.625 ; (5) 2/4, soit 1/2. Si vous avez un mètre ruban ou une règle, mesurez 3 objets chez vous au 1/8 de pouce près.",
          youCanNow: "passer des fractions aux nombres décimaux et aux pourcentages, et lire un mètre ruban au 1/8 de pouce près.",
          quickCheck: [
            { objective: "O1", q: "Combien fait 3/4 en pourcentage ?", options: ["34%", "0.34%", "75%", "43%"], answer: 2, why: "3 divisé par 4 donne 0.75, et en déplaçant le point de deux rangs vers la droite on obtient 75%." },
            { objective: "O1", q: "Combien fait 6% en nombre décimal ?", options: ["0.06", "0.6", "6.0", "60"], answer: 0, why: "Déplacez le point de deux rangs vers la gauche : 6% = 0.06." }
          ]
        },
        {
          title: "Réductions, taxe de vente, pourboires et augmentations",
          objectives: ["O2"],
          minutes: 6,
          goal: "Calculer des réductions, la taxe de vente, des pourboires et des augmentations avec les pourcentages.",
          text: [
            "Pour trouver un pourcentage d'un nombre, transformez le pourcentage en nombre décimal et multipliez. 20% de $45, c'est 0.20 x 45 = $9.",
            "Réduction : enlevez-la du prix. Une veste à $45 avec 20% de réduction coûte 45 - 9 = $36. Taxe de vente : ajoutez-la. Si le taux est de 8%, la taxe sur $36 est 0.08 x 36 = $2.88, donc vous payez $38.88. Aux États-Unis, le taux de la taxe de vente change selon l'État et la ville ; consultez l'administration fiscale de votre État ou regardez un ticket de caisse.",
            "Le pourboire sans calculatrice : trouvez 10% en déplaçant le point d'un rang vers la gauche, puis partez de là. Sur une addition de $28, 10% fait $2.80, 5% en est la moitié, $1.40, donc 15% fait $2.80 + $1.40 = $4.20. 20%, c'est le double de 10% : $5.60.",
            "Augmentation : une augmentation de 3% sur $16.00 de l'heure, c'est 0.03 x 16 = $0.48, donc le nouveau taux est de $16.48 de l'heure. Attention aux mots : « 20% de réduction » veut dire que vous payez 80% du prix ; « 20% de plus » veut dire que vous payez 120%."
          ],
          steps: ["Transformez le pourcentage en nombre décimal.", "Multipliez par le montant.", "Réduction : soustrayez. Taxe ou pourboire : ajoutez. Augmentation : ajoutez-la à l'ancien taux.", "Arrondissez l'argent au centime près.", "Vérifiez : la réponse a-t-elle du sens ? Une réduction doit être plus petite que le prix."],
          words: [["Réduction", "l'argent enlevé du prix."], ["Taxe de vente", "une taxe ajoutée au prix à la caisse ; aux États-Unis, son taux dépend de l'État et de la ville."], ["Pourboire", "l'argent en plus que l'on donne pour le service, souvent calculé en pourcentage de l'addition."], ["Augmentation", "une hausse de votre taux de salaire."], ["Arrondir", "rendre un nombre plus simple ; l'argent s'arrondit au centime près."]],
          slides: [
            { title: "Le pourcentage d'un nombre", bullets: ["Transformez le pourcentage en nombre décimal", "Multipliez : 20% de $45 = 0.20 x 45 = $9"] },
            { title: "Réduction et taxe", bullets: ["20% de réduction sur $45 : 45 - 9 = $36", "Taxe de 8% sur $36 : 0.08 x 36 = $2.88", "Vous payez $38.88 ; le taux change selon l'État et la ville"] },
            { title: "Le pourboire de tête", bullets: ["10% : déplacez le point d'un rang vers la gauche", "Addition de $28 : 10% = $2.80, 5% = $1.40", "15% = $4.20, 20% = $5.60"] },
            { title: "Les augmentations", bullets: ["3% de $16.00 = $0.48", "Nouveau taux : $16.48 de l'heure", "20% de réduction = payer 80% ; 20% de plus = payer 120%"] }
          ],
          tryIt: "Entraînez-vous (réponses plus bas) : (1) Des chaussures de travail à $60 sont à 25% de réduction. Quel est le prix soldé ? (2) La taxe est de 7% sur un article à $50. Quel est le total ? (3) Calculez un pourboire de 20% sur une addition de $35. (4) Votre taux de $15.50 reçoit une augmentation de 4%. Quel est le nouveau taux ? Réponses : (1) $45 ; (2) $3.50 de taxe, $53.50 au total ; (3) $7.00 ; (4) $0.62 de plus, $16.12 de l'heure. Ensuite, regardez un vrai ticket de caisse et trouvez le taux de taxe appliqué dans votre région.",
          youCanNow: "calculer des réductions, la taxe de vente, des pourboires et des augmentations au centime près.",
          quickCheck: [
            { objective: "O2", q: "Un manteau à $80 est à 25% de réduction. Quel est le prix soldé ?", options: ["$55", "$20", "$105", "$60"], answer: 3, why: "25% de 80 font 20, et 80 - 20 = $60." },
            { objective: "O2", q: "Combien fait un pourboire de 15% sur une addition de $40 ?", options: ["$4.00", "$6.00", "$15.00", "$0.60"], answer: 1, why: "10% font $4.00 et 5% font $2.00, donc 15% font $6.00." }
          ],
          sources: [{ name: "Federation of Tax Administrators : liens vers l'administration fiscale de chaque État", url: "https://taxadmin.org/state-tax-agencies/" }]
        },
        {
          title: "Les prix unitaires : trouver le meilleur achat",
          objectives: ["O3"],
          minutes: 5,
          goal: "Calculer des prix unitaires et choisir le meilleur achat.",
          text: [
            "Le prix unitaire, c'est le prix d'une seule unité : une once, une livre, une pièce. Il permet de comparer des formats différents de façon juste. Pour le trouver, divisez le prix par le nombre d'unités.",
            "Exemple : une boîte de céréales de 24 onces coûte $4.80. $4.80 / 24 = $0.20 l'once. Une boîte de 36 onces coûte $6.12. $6.12 / 36 = $0.17 l'once. La grande boîte est le meilleur achat.",
            "Plus grand ne veut pas toujours dire moins cher. Un sac de riz de 2 livres à $3.18 revient à $1.59 la livre. Un sac de 5 livres à $8.45 revient à $1.69 la livre. Ici, c'est le petit sac le meilleur achat. Beaucoup de magasins impriment le prix unitaire en petits caractères sur l'étiquette du rayon ; vérifiez que les deux étiquettes utilisent la même unité.",
            "Le meilleur achat n'est vraiment meilleur que si vous l'utilisez avant qu'il ne s'abîme et si vous pouvez le payer cette semaine. Les prix unitaires servent aussi au travail, par exemple pour commander des fournitures."
          ],
          steps: ["Écrivez le prix et la taille de chaque article.", "Vérifiez que les unités sont les mêmes (onces avec onces).", "Divisez : prix / taille = prix unitaire.", "Comparez : le prix unitaire le plus bas est le meilleur achat.", "Demandez-vous : vais-je tout utiliser, et puis-je le payer maintenant ?"],
          words: [["Prix unitaire", "le prix d'une seule unité, comme une once ou une livre."], ["Once (oz)", "une petite unité de poids américaine ; 16 onces font 1 livre."], ["Livre (lb)", "une unité de poids américaine égale à 16 onces."], ["Étiquette du rayon", "l'étiquette de prix sur le rayon du magasin ; elle montre souvent le prix unitaire."]],
          slides: [
            { title: "Prix unitaire = prix / taille", bullets: ["Le prix d'une once, d'une livre ou d'une pièce", "Comparer des formats différents de façon juste"] },
            { title: "L'exemple des céréales", bullets: ["24 oz pour $4.80 = $0.20 l'once", "36 oz pour $6.12 = $0.17 l'once", "Ici, la grande boîte gagne"] },
            { title: "Plus grand n'est pas toujours moins cher", bullets: ["Riz 2 lb à $3.18 = $1.59 la livre", "Riz 5 lb à $8.45 = $1.69 la livre", "Ici, le petit sac gagne"] },
            { title: "Acheter malin", bullets: ["Regardez l'étiquette du rayon, avec la même unité des deux côtés", "L'utiliserez-vous avant qu'il ne s'abîme ?", "Pouvez-vous le payer cette semaine ?"] }
          ],
          tryIt: "Entraînez-vous (réponses plus bas) : (1) 12 œufs pour $3.60 ou 18 œufs pour $5.04 ? (2) 64 oz de jus pour $3.84 ou 128 oz pour $6.40 ? Réponses : (1) $0.30 l'œuf contre $0.28 l'œuf : les 18 œufs sont le meilleur achat ; (2) $0.06 l'once contre $0.05 l'once : les 128 oz sont le meilleur achat. Ensuite, dans un magasin ou sur le site web d'un magasin, trouvez les prix unitaires de 3 produits que vous achetez souvent, en deux formats, et notez le meilleur achat. Cela ira sur la fiche de votre tâche finale.",
          youCanNow: "trouver des prix unitaires, choisir le meilleur achat et savoir quand le grand format n'en vaut pas la peine.",
          quickCheck: [
            { objective: "O3", q: "Un sac de pommes de terre de 10 livres coûte $5.90. Quel est le prix unitaire ?", options: ["$0.59 la livre", "$5.90 la livre", "$1.69 la livre", "$59.00 la livre"], answer: 0, why: "$5.90 / 10 = $0.59 la livre." },
            { objective: "O3", q: "Savon A : 3 pains pour $2.70. Savon B : 8 pains pour $8.00. Quel est le meilleur achat ?", options: ["Le savon B, parce qu'il y a plus de pains", "Ils coûtent le même prix par pain", "Le savon B, parce qu'il coûte plus cher", "Le savon A, à $0.90 le pain contre $1.00"], answer: 3, why: "$2.70 / 3 = $0.90 et $8.00 / 8 = $1.00, donc A coûte moins cher par pain." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les nombres de tous les jours",
        questions: [
          { objective: "O1", q: "Combien fait 1/8 en nombre décimal ?", options: ["0.18", "0.8", "0.125", "1.8"], answer: 2, why: "1 divisé par 8 donne 0.125." },
          { objective: "O1", q: "Sur un mètre ruban, le trait le plus long entre 4 et 5 pouces indique :", options: ["4 pouces 1/2", "4 pouces 1/8", "4 pouces 1/16", "5 pouces"], answer: 0, why: "Le trait le plus long au milieu d'un pouce est celui de 1/2." },
          { objective: "O2", q: "La taxe de vente est de 6% sur un achat de $25. Combien fait la taxe ?", options: ["$6.00", "$0.25", "$31.00", "$1.50"], answer: 3, why: "0.06 x 25 = $1.50." },
          { objective: "O2", q: "Votre salaire passe de $14.00 à $14.70 de l'heure. Quel est le pourcentage d'augmentation ?", options: ["7%", "5%", "70%", "0.5%"], answer: 1, why: "L'augmentation est de $0.70, et 0.70 / 14.00 = 0.05, soit 5%." },
          { objective: "O3", q: "Quel est le meilleur achat : 16 oz de beurre de cacahuète pour $3.20 ou 40 oz pour $7.20 ?", options: ["16 oz, à $0.20 l'once", "C'est pareil", "40 oz, à $0.18 l'once", "Impossible à dire"], answer: 2, why: "$3.20 / 16 = $0.20 et $7.20 / 40 = $0.18, donc le pot de 40 oz coûte moins cher par once." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Les maths pour le travail et l'argent",
      lessons: [
        {
          title: "Mesurer, convertir et compter les heures de travail",
          objectives: ["O4"],
          minutes: 6,
          goal: "Convertir des unités et calculer une surface et des heures travaillées pour une tâche de travail.",
          text: [
            "Unités courantes aux États-Unis : 12 pouces (inches) = 1 pied (foot), 3 pieds = 1 yard, 16 onces = 1 livre, 2 pintes = 1 quart, 4 quarts = 1 gallon. Certains métiers utilisent le système métrique : 1 pouce = 2.54 centimètres, et 1 kilogramme fait environ 2.2 livres. Pour passer d'une grande unité à de petites unités, multipliez ; pour passer de petites unités à une grande, divisez. 90 pouces / 12 = 7.5 pieds.",
            "La surface, c'est l'espace que couvre une surface plane : longueur x largeur, en unités carrées. Une pièce de 12 pieds sur 10 pieds fait 12 x 10 = 120 pieds carrés. Si une boîte de revêtement de sol couvre 20 pieds carrés, il vous faut 120 / 20 = 6 boîtes. Les ouvriers ajoutent souvent environ 10% de plus pour les coupes et les erreurs : 120 x 1.10 = 132, et 132 / 20 = 6.6. On ne peut pas acheter 0.6 boîte, donc arrondissez AU-DESSUS : 7.",
            "Heures travaillées : comptez de l'heure d'arrivée à l'heure de départ, puis enlevez les pauses non payées. Une journée de 7:30 am à 4:00 pm fait 8 heures 1/2 ; moins 30 minutes de déjeuner non payé, cela fait 8 heures. Beaucoup de feuilles de temps utilisent les heures décimales : 15 minutes = 0.25, 30 minutes = 0.5, 45 minutes = 0.75. Aux États-Unis, « am » veut dire le matin et « pm » l'après-midi ; certains lieux de travail utilisent l'horloge de 24 heures : 15:00, c'est 3:00 pm."
          ],
          steps: ["Écrivez ce que vous avez et l'unité dont vous avez besoin.", "De la grande unité vers la petite : multipliez. De la petite vers la grande : divisez.", "Surface : longueur x largeur, en unités carrées.", "S'il faut des articles entiers (boîtes, sacs) : arrondissez toujours au-dessus.", "Heures : heure de départ moins heure d'arrivée, moins les pauses non payées ; passez les minutes en décimal en les divisant par 60."],
          words: [["Unité", "ce avec quoi on mesure, comme les pouces, les pieds, les livres ou les heures."], ["Convertir", "changer une mesure d'une unité à une autre."], ["Surface", "l'espace que couvre une surface plane : longueur fois largeur, en unités carrées."], ["Pied carré (sq ft)", "l'unité de surface quand on mesure en pieds."], ["Système métrique", "le système de mesure utilisé dans la plus grande partie du monde : centimètres, mètres, kilogrammes, litres."], ["Heures décimales", "le temps écrit en nombre décimal, comme 7.75 heures pour 7 heures 45 minutes."]],
          slides: [
            { title: "Les unités à connaître", bullets: ["12 in = 1 ft ; 3 ft = 1 yd", "16 oz = 1 lb ; 4 qt = 1 gal", "1 in = 2.54 cm ; 1 kg fait environ 2.2 lb", "Grande vers petite : multipliez. Petite vers grande : divisez"] },
            { title: "La surface pour un chantier", bullets: ["Pièce de 12 ft x 10 ft = 120 pieds carrés", "Ajoutez 10% pour les coupes : 132 pieds carrés", "20 pieds carrés par boîte : 6.6, donc achetez 7 boîtes"] },
            { title: "Compter les heures", bullets: ["De 7:30 am à 4:00 pm = 8.5 heures", "Moins 30 min de déjeuner non payé = 8 heures", "15 min = 0.25, 30 min = 0.5, 45 min = 0.75"] }
          ],
          tryIt: "Entraînez-vous (réponses plus bas) : (1) Convertissez 5 pieds en pouces. (2) Convertissez 48 onces en livres. (3) Une réserve mesure 9 pieds sur 14 pieds. Quelle est sa surface ? (4) La peinture couvre environ 350 pieds carrés par gallon (sur ce pot inventé). Vous devez couvrir 800 pieds carrés. Combien de gallons achetez-vous ? (5) Vous travaillez de 6:45 am à 3:15 pm avec 30 minutes de déjeuner non payé. Combien d'heures, en décimal ? Réponses : (1) 60 pouces ; (2) 3 livres ; (3) 126 pieds carrés ; (4) 800 / 350 = 2.29, donc achetez 3 gallons ; (5) 8.5 heures moins 0.5 = 8.0 heures.",
          youCanNow: "convertir des unités, trouver une surface, arrondir au-dessus pour des articles entiers et compter vos heures de travail en décimal.",
          quickCheck: [
            { objective: "O4", q: "Il vous faut 4.2 sacs de mélange à béton. Combien de sacs achetez-vous ?", options: ["4", "4.2", "42", "5"], answer: 3, why: "On ne peut pas acheter une partie de sac, donc on arrondit au-dessus : 5." },
            { objective: "O4", q: "Combien font 7 heures et 45 minutes en heures décimales ?", options: ["7.45", "7.75", "7.5", "8.45"], answer: 1, why: "45 / 60 = 0.75, donc cela fait 7.75 heures." }
          ]
        },
        {
          title: "Vérifier votre fiche de paie",
          objectives: ["O5"],
          minutes: 6,
          goal: "Vérifier les heures, le taux, les heures supplémentaires, les retenues et le salaire net sur une fiche de paie.",
          text: [
            "La fiche de paie montre comment votre salaire a été calculé. Le salaire brut, c'est ce que vous avez gagné avant toute retenue. Les retenues sont les montants enlevés, comme les impôts. Le salaire net, c'est ce que vous recevez vraiment : le salaire brut moins les retenues. YTD (year to date) veut dire « depuis le début de l'année » : le total de l'année jusqu'ici.",
            "Fiche de paie d'exercice (inventée) : 45 heures à $18.00 de l'heure. Selon la loi fédérale américaine, les salariés payés à l'heure qui sont couverts reçoivent des heures supplémentaires pour les heures au-delà de 40 dans une semaine de travail, payées au moins une fois et demie le taux. Donc : 40 x $18.00 = $720.00 de salaire normal. Le taux des heures supplémentaires est de $18.00 x 1.5 = $27.00, et 5 x $27.00 = $135.00. Salaire brut = $855.00. Certains États ont des règles en plus sur les heures supplémentaires ; renseignez-vous auprès du bureau du travail de votre État.",
            "Retenues sur cette fiche : Social Security (la retraite publique américaine) 6.2% de $855.00 = $53.01. Medicare (l'assurance maladie fédérale) 1.45% = $12.40. Impôt fédéral sur le revenu $60.00 et impôt de l'État $20.00 (ils dépendent de votre formulaire W-4 et de votre État ; ici ils sont inventés). Total des retenues = $145.41. Salaire net = $855.00 - $145.41 = $709.59.",
            "Si une ligne est fausse, notez la date de paie, la ligne et ce que vous attendiez, puis demandez d'abord au service de paie ou à votre responsable. Si ce n'est pas corrigé, vous pouvez contacter le bureau du travail de votre État ou la Wage and Hour Division (division des salaires et des horaires) du ministère du Travail des États-Unis. Gardez vos fiches de paie, et cachez votre numéro de Social Security avant d'en montrer une à quelqu'un."
          ],
          steps: ["Comparez les heures avec votre propre relevé des heures travaillées.", "Salaire normal : jusqu'à 40 heures x votre taux.", "Heures supplémentaires : heures au-delà de 40 x (taux x 1.5), si vous êtes couvert.", "Salaire brut = salaire normal + heures supplémentaires + autres paiements.", "Additionnez toutes les retenues.", "Salaire net = salaire brut - total des retenues. Est-ce que cela correspond à la fiche ?", "Sinon, notez-le et demandez au service de paie."],
          words: [["Fiche de paie", "le papier ou le relevé en ligne qui montre comment votre salaire a été calculé."], ["Salaire brut", "ce que vous avez gagné avant toute retenue."], ["Salaire net", "ce que vous recevez après les retenues ; on dit aussi « ce qui reste en poche »."], ["Retenue", "un montant enlevé de votre salaire, comme les impôts ou une assurance."], ["Heures supplémentaires", "une paie en plus, au moins 1.5 fois votre taux, pour les heures couvertes au-delà de 40 dans une semaine de travail, selon la loi fédérale américaine."], ["YTD (depuis le début de l'année)", "le total du 1er janvier jusqu'à cette paie."], ["W-4", "le formulaire que vous donnez à votre employeur pour fixer combien d'impôt fédéral sur le revenu il retient."]],
          slides: [
            { title: "Les mots de la fiche de paie", bullets: ["Salaire brut : gagné avant les retenues", "Retenues : impôts et autres montants enlevés", "Salaire net : ce que vous recevez", "YTD : le total depuis le début de l'année"] },
            { title: "Fiche d'exercice : 45 heures à $18.00", bullets: ["Normal : 40 x $18.00 = $720.00", "Heures supplémentaires : 5 x $27.00 = $135.00", "Salaire brut : $855.00"] },
            { title: "Retenues et salaire net", bullets: ["Social Security 6.2% = $53.01 ; Medicare 1.45% = $12.40", "Fédéral $60.00 + État $20.00 (inventés)", "Net : $855.00 - $145.41 = $709.59"] },
            { title: "Si quelque chose est faux", bullets: ["Notez la date, la ligne et ce que vous attendiez", "Demandez d'abord au service de paie ou à votre responsable", "Puis au bureau du travail de l'État ou à la Wage and Hour Division du DOL"] }
          ],
          tryIt: "Entraînez-vous (réponses plus bas) : vous avez travaillé 42 heures à $16.00 de l'heure. Retenues : Social Security 6.2%, Medicare 1.45%, impôt fédéral $45.00, impôt de l'État $15.00 (inventés). Trouvez (1) le salaire normal, (2) la paie des heures supplémentaires, (3) le salaire brut, (4) le total des retenues, (5) le salaire net. Réponses : (1) $640.00 ; (2) 2 x $24.00 = $48.00 ; (3) $688.00 ; (4) $42.66 + $9.98 + $45.00 + $15.00 = $112.64 ; (5) $575.36. Ensuite, vérifiez de la même façon une vraie fiche de paie à vous, avec les numéros privés cachés.",
          youCanNow: "vérifier chaque ligne d'une fiche de paie et savoir quoi faire si le compte n'est pas bon.",
          quickCheck: [
            { objective: "O5", q: "Le salaire brut est de $600.00 et les retenues font $95.00 au total. Quel est le salaire net ?", options: ["$695.00", "$95.00", "$505.00", "$600.00"], answer: 2, why: "Salaire net = salaire brut - retenues = 600 - 95 = $505.00." },
            { objective: "O5", q: "Vous gagnez $20.00 de l'heure et la loi fédérale sur les heures supplémentaires vous couvre. Quel est votre taux d'heures supplémentaires ?", options: ["$30.00", "$20.00", "$40.00", "$21.50"], answer: 0, why: "Une fois et demie : $20.00 x 1.5 = $30.00." }
          ],
          sources: [DOL_OT, IRS_751]
        },
        {
          title: "Faire un budget mensuel à partir de votre salaire",
          objectives: ["O6"],
          minutes: 6,
          goal: "Faire un budget mensuel avec de l'épargne qui garde les dépenses au niveau des revenus ou en dessous.",
          text: [
            "Un budget est un plan pour votre argent. Commencez par votre salaire net mensuel. Les mois durent un peu plus de 4 semaines, donc ne multipliez pas simplement la paie de la semaine par 4. Payé chaque semaine : net de la semaine x 52 / 12. Payé toutes les deux semaines : net x 26 / 12. Exemple : $700 par semaine x 52 = $36 400 par an, / 12 = $3 033.33 par mois.",
            "Listez vos dépenses : d'abord les besoins (loyer, eau, électricité et gaz, nourriture, transport, téléphone, garde d'enfants, paiements minimums des dettes), puis l'épargne, puis les envies. Exemple : loyer $1 200, eau, électricité et gaz $150, téléphone $50, nourriture $400, transport $200, dettes $150, épargne $150. Cela fait $2 300 au total, et il reste $733.33 pour d'autres besoins et des envies.",
            "La règle : le total des dépenses (épargne comprise) doit être égal ou inférieur aux revenus. S'il est plus grand, supprimez une envie, baissez une facture ou trouvez plus de revenus. Vérifiez les totaux en les additionnant une deuxième fois, ou avec une calculatrice.",
            "Suivez votre budget pendant un mois. Notez ce que vous dépensez vraiment, puis comparez avec votre plan et ajustez. Les documents gratuits « Your Money, Your Goals » (Votre argent, vos objectifs) du Consumer Financial Protection Bureau (CFPB, le bureau américain de protection financière des consommateurs) ont des fiches à imprimer."
          ],
          steps: ["Trouvez le salaire net mensuel (semaine x 52 / 12, ou toutes les deux semaines x 26 / 12).", "Listez les besoins : loyer, eau, électricité et gaz, nourriture, transport, téléphone, garde d'enfants, minimums des dettes.", "Ajoutez une ligne d'épargne, même petite.", "Ajoutez les envies en dernier.", "Le total des dépenses doit être égal ou inférieur aux revenus.", "Suivez pendant un mois et ajustez."],
          words: [["Budget", "un plan pour la façon dont vous utiliserez votre argent chaque mois."], ["Revenu", "l'argent qui entre, comme votre salaire net."], ["Dépense", "l'argent qui sort, comme le loyer ou les courses."], ["Dépense fixe", "une dépense qui est la même chaque mois, comme le loyer."], ["Dépense variable", "une dépense qui change chaque mois, comme la nourriture ou l'essence."]],
          slides: [
            { title: "Le revenu mensuel", bullets: ["Paie de la semaine x 52 / 12", "Toutes les deux semaines : x 26 / 12", "$700 par semaine = $3 033.33 par mois"] },
            { title: "L'ordre des dépenses", bullets: ["D'abord les besoins : loyer, eau et énergie, nourriture, transport", "Puis l'épargne, même un petit montant", "Puis les envies"] },
            { title: "La règle", bullets: ["Dépenses + épargne au niveau des revenus ou en dessous", "Si ça dépasse : supprimez une envie, baissez une facture ou gagnez plus", "Additionnez les totaux deux fois pour vérifier"] },
            { title: "Suivre et ajuster", bullets: ["Notez vos vraies dépenses pendant un mois", "Comparez avec votre plan", "Fiches gratuites du CFPB : Your Money, Your Goals"] }
          ],
          tryIt: "Terminez votre tâche finale. Prenez le salaire net de la fiche de paie de la leçon 5 (ou de la vôtre) et transformez-le en revenu mensuel. Écrivez un budget avec les besoins, une ligne d'épargne et les envies. Additionnez deux fois. Si les dépenses dépassent les revenus, modifiez-le jusqu'à ce qu'il tienne. Mettez la vérification de votre fiche de paie, votre budget et 3 comparaisons de prix unitaires sur une seule page : votre « Fiche de calcul travail et argent ».",
          youCanNow: "transformer une paie en revenu mensuel et faire un budget équilibré qui comprend de l'épargne.",
          quickCheck: [
            { objective: "O6", q: "Vous touchez $500 net par semaine. Quel est votre revenu mensuel ?", options: ["$2 000.00", "$2 166.67", "$500.00", "$6 000.00"], answer: 1, why: "$500 x 52 / 12 = $2 166.67 ; multiplier par 4 oublie les jours en plus." },
            { objective: "O6", q: "Vos dépenses prévues dépassent vos revenus de $50. Que faites-vous ?", options: ["Je garde le plan et j'espère", "J'enlève la ligne d'épargne et je n'y pense plus", "Je prends un prêt sur salaire (payday loan) chaque mois", "Je supprime ou je baisse des dépenses jusqu'à ce que ça tienne"], answer: 3, why: "Un budget ne marche que si les dépenses sont au niveau des revenus ou en dessous." }
          ],
          sources: [CFPB]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Les maths pour le travail et l'argent",
        questions: [
          { objective: "O4", q: "Une pièce mesure 15 pieds sur 11 pieds. Quelle est sa surface ?", options: ["26 pieds carrés", "165 pieds carrés", "52 pieds carrés", "1 511 pieds carrés"], answer: 1, why: "Surface = longueur x largeur = 15 x 11 = 165 pieds carrés." },
          { objective: "O4", q: "Combien de pieds font 60 pouces ?", options: ["5 pieds", "720 pieds", "6 pieds", "48 pieds"], answer: 0, why: "De la petite unité vers la grande : divisez. 60 / 12 = 5 pieds." },
          { objective: "O5", q: "Sur une fiche de paie, qu'est-ce que le salaire brut ?", options: ["Ce que vous recevez", "Seulement les impôts", "La paie d'une heure", "Ce que vous avez gagné avant les retenues"], answer: 3, why: "Le salaire brut est le total gagné avant toute retenue." },
          { objective: "O5", q: "Votre fiche de paie indique 38 heures, mais votre propre relevé en indique 41. Que faites-vous d'abord ?", options: ["Ne rien dire", "Quitter le travail", "Noter les dates et les heures et demander au service de paie", "Modifier vous-même la fiche de paie"], answer: 2, why: "Commencez par le service de paie ou votre responsable, avec votre propre relevé en main." },
          { objective: "O6", q: "Qu'est-ce qui va dans la partie « besoins » d'un budget ?", options: ["Le loyer", "Un nouveau jeu vidéo", "Des places de concert", "Des plats à emporter tous les soirs"], answer: 0, why: "Le loyer est un besoin ; le reste, ce sont des envies." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les maths de tous les jours, au travail et dans la vie",
    questions: [
      { objective: "O1", q: "Qu'est-ce qui est égal à 50% ?", options: ["0.05", "1/5", "1/2", "5.0"], answer: 2, why: "50% veut dire 50 sur 100, soit 1/2 ou 0.5." },
      { objective: "O1", q: "Combien fait 0.4 en pourcentage ?", options: ["40%", "4%", "0.4%", "400%"], answer: 0, why: "Déplacez le point de deux rangs vers la droite : 0.4 = 40%." },
      { objective: "O1", q: "1/8 + 5/8 = ?", options: ["6/16", "5/64", "4/8", "6/8, soit 3/4"], answer: 3, why: "Même nombre en bas : additionnez ceux du haut. 6/8 se simplifie en 3/4." },
      { objective: "O2", q: "Combien font 10% de $73.00 ?", options: ["$73.00", "$7.30", "$0.73", "$10.00"], answer: 1, why: "Déplacez le point d'un rang vers la gauche : $7.30." },
      { objective: "O2", q: "Une perceuse à $120 est à 30% de réduction. Quel est le prix soldé ?", options: ["$36", "$90", "$84", "$150"], answer: 2, why: "30% de 120 font 36, et 120 - 36 = $84." },
      { objective: "O2", q: "Avec « 20% de réduction », quel pourcentage du prix payez-vous ?", options: ["80%", "20%", "120%", "100%"], answer: 0, why: "100% - 20% = 80% du prix." },
      { objective: "O2", q: "Aux États-Unis, les taux de la taxe de vente :", options: ["Sont les mêmes partout", "Sont toujours de 10%", "Sont fixés par le magasin", "Changent selon l'État et la ville : consultez l'administration fiscale de votre État ou un ticket"], answer: 3, why: "Les États et beaucoup de villes fixent leurs propres taux de taxe de vente." },
      { objective: "O3", q: "Comment trouve-t-on un prix unitaire ?", options: ["Prix x taille", "Prix / taille", "Taille / 100", "Prix - taille"], answer: 1, why: "On divise le prix par le nombre d'unités." },
      { objective: "O3", q: "Lessive : 50 oz pour $6.00 ou 100 oz pour $13.00. Quel est le meilleur achat ?", options: ["100 oz, parce que c'est plus grand", "C'est pareil", "50 oz, à $0.12 l'once contre $0.13", "Impossible à dire"], answer: 2, why: "$6.00 / 50 = $0.12 et $13.00 / 100 = $0.13, donc la petite bouteille coûte moins cher par once." },
      { objective: "O3", q: "Avant d'acheter le grand format, vous devez aussi vous demander :", options: ["Vais-je l'utiliser avant qu'il ne s'abîme, et puis-je le payer maintenant ?", "La boîte a-t-elle une jolie couleur ?", "Est-il sur l'étagère du haut ?", "Le magasin a-t-il un parking ?"], answer: 0, why: "Un prix unitaire plus bas ne fait économiser que si vous utilisez le produit et pouvez le payer." },
      { objective: "O4", q: "Combien de quarts y a-t-il dans 3 gallons ?", options: ["7", "3", "16", "12"], answer: 3, why: "4 quarts = 1 gallon, donc 3 x 4 = 12 quarts." },
      { objective: "O4", q: "Une boîte de carreaux couvre 15 pieds carrés. Il vous faut 100 pieds carrés. Combien de boîtes ?", options: ["6", "7", "6.67", "15"], answer: 1, why: "100 / 15 = 6.67, et on arrondit au-dessus : 7 boîtes entières." },
      { objective: "O4", q: "Vous travaillez de 8:00 am à 4:30 pm avec 30 minutes de déjeuner non payé. Combien d'heures ?", options: ["8.5", "8.3", "8.0", "9.0"], answer: 2, why: "De 8:00 à 4:30, cela fait 8.5 heures, moins 0.5 heure = 8.0 heures." },
      { objective: "O5", q: "Le salaire net, c'est :", options: ["Le salaire brut moins les retenues", "Le salaire brut plus les retenues", "Seulement vos heures supplémentaires", "Votre taux horaire"], answer: 0, why: "Le salaire net est ce qui reste une fois les retenues enlevées." },
      { objective: "O5", q: "Selon la loi fédérale américaine, les salariés à l'heure couverts reçoivent des heures supplémentaires au-delà de :", options: ["35 heures par semaine de travail", "8 heures par mois", "50 heures par semaine de travail", "40 heures par semaine de travail"], answer: 3, why: "La règle fédérale est une fois et demie le taux pour les heures au-delà de 40 dans une semaine de travail." },
      { objective: "O5", q: "Vous avez travaillé 44 heures à $15.00 de l'heure, avec heures supplémentaires. Quel est le salaire brut ?", options: ["$660.00", "$690.00", "$600.00", "$900.00"], answer: 1, why: "40 x $15 = $600, plus 4 x $22.50 = $90, soit $690.00." },
      { objective: "O5", q: "Avant de montrer une fiche de paie à quelqu'un qui vous aide, vous devez :", options: ["La publier sur internet", "Y écrire votre mot de passe", "Cacher votre numéro de Social Security", "La jeter"], answer: 2, why: "Votre numéro de Social Security est privé et peut servir à voler votre identité." },
      { objective: "O6", q: "Vous êtes payé toutes les deux semaines et touchez $1 200 net. Quel est votre revenu mensuel ?", options: ["$2 400.00", "$2 600.00", "$1 200.00", "$4 800.00"], answer: 1, why: "$1 200 x 26 / 12 = $2 600.00." },
      { objective: "O6", q: "Dans un budget équilibré, le total des dépenses, épargne comprise, est :", options: ["Plus grand que les revenus", "Égal ou inférieur aux revenus", "Toujours exactement $0", "Jamais écrit"], answer: 1, why: "Dépenser autant ou moins que ses revenus évite de nouvelles dettes." },
      { objective: "O6", q: "Laquelle est une dépense variable ?", options: ["Un loyer qui ne change pas", "Un remboursement de voiture fixe", "Un forfait de téléphone fixe", "Les courses, qui changent chaque mois"], answer: 3, why: "Les dépenses variables changent d'un mois à l'autre." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 1, 4, 7, 8, 11, 12, 13, 15, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur chaque ligne. Si une ligne est à Pas encore, refaites cette partie avec les étapes de la leçon et vérifiez-la de nouveau.",
    criteria: [
      { name: "Fiche de paie vérifiée", objective: "O5", notYet: "Certaines lignes ne sont pas vérifiées, ou il y a des erreurs de calcul dans le salaire brut ou net.", meets: "Heures, taux, heures supplémentaires, retenues et salaire net vérifiés ; chaque ligne est juste au centime près ou l'erreur est notée.", exceeds: "Écrit aussi quoi dire au service de paie sur une erreur et où s'adresser ensuite." },
      { name: "Revenu mensuel", objective: "O6", notYet: "Paie de la semaine multipliée par 4, ou salaire brut utilisé au lieu du net.", meets: "Salaire net mensuel trouvé avec x 52 / 12 ou x 26 / 12.", exceeds: "Montre le calcul et le vérifie d'une autre façon." },
      { name: "Budget équilibré", objective: "O6", notYet: "Les dépenses dépassent les revenus, ou il n'y a pas de ligne d'épargne.", meets: "Besoins, épargne et envies listés ; dépenses au niveau des revenus ou en dessous ; totaux vérifiés.", exceeds: "Comprend un plan pour suivre les vraies dépenses et une date pour faire le point." },
      { name: "Prix unitaires", objective: "O3", notYet: "Moins de 3 comparaisons, ou les unités ne sont pas les mêmes.", meets: "3 comparaisons avec les bons prix unitaires et le meilleur achat indiqué.", exceeds: "Note quand le grand format n'est pas le meilleur choix, et pourquoi." },
      { name: "Pourcentages", objective: "O2", notYet: "Les réponses d'exercice sur les réductions, la taxe, les pourboires ou les augmentations sont souvent fausses.", meets: "Au moins 4 exercices de pourcentage sur 5 justes, au centime près.", exceeds: "Sait expliquer l'astuce (d'abord 10%, puis on construit) à quelqu'un d'autre." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et remplissent la Fiche de calcul travail et argent selon la grille",
      "Apprenants qui disent avoir repéré une erreur sur une fiche de paie ou économisé de l'argent grâce aux prix unitaires dans les 30 jours (enquête de suivi)",
      "Apprenants qui tiennent un budget écrit pendant au moins 2 mois",
      "Apprenants qui continuent avec « Préparation à l'examen GED : Mathématiques » ou réussissent le test de maths d'un employeur dans les 6 mois"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Papier, crayon et une calculatrice simple (celle du téléphone suffit)",
      "Un mètre ruban ou une règle avec des traits de 1/8 de pouce",
      "La fiche de paie d'exercice inventée de la leçon 5, ou celle de l'apprenant, avec les numéros privés cachés",
      "Des tickets de caisse ou des étiquettes de rayon pour les prix unitaires",
      "Environ 2 heures en tout : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Beaucoup d'adultes sont anxieux face aux maths. Commencez par le test de départ comme un échauffement « sans note » et fêtez les progrès au quiz final.",
      "Résolvez d'abord chaque exemple au tableau, puis laissez les apprenants essayer le suivant à deux.",
      "Apprenez à vérifier les réponses de deux façons (estimer, puis calculer) pour que les apprenants fassent confiance à leur propre travail.",
      "Quand les apprenants apportent de vraies fiches de paie, demandez-leur d'abord de cacher le numéro de Social Security et les numéros bancaires. Les questions d'impôts et d'heures supplémentaires qui vont au-delà des bases sont à poser au service de paie, au bureau du travail de l'État ou à la Wage and Hour Division du DOL.",
      "Ne jugez le budget de personne ; le but est un plan équilibré, pas un plan parfait.",
      "Orientez les apprenants qui veulent un diplôme vers « Préparation à l'examen GED : Mathématiques »."
    ]
  }
};
