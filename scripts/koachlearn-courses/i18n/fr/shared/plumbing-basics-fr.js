"use strict";

// Koach Learn course (French translation of shared/plumbing-basics.js). See scripts/koachlearn-courses/README.md, "Translations".

const BLS = "https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm";

module.exports = {
  id: "plumbing-basics-fr",
  lang: "fr",
  translationOf: "plumbing-basics",
  category: "Workforce Development",
  name: "Les bases de la plomberie",
  skills: "Suivre les réseaux d'alimentation en eau et d'évacuation, Expliquer les siphons et la ventilation, Mesurer les tuyaux et calculer la pente d'évacuation, Repérer les dangers du métier de plombier, Mettre une réparation simple dans un ordre sûr, Préparer votre parcours vers un apprentissage en plomberie",
  outcome: "expliquer comment l'eau entre dans un bâtiment et comment les eaux usées en sortent, mesurer des tuyaux et calculer la pente d'une évacuation, nommer les dangers du métier de plombier et la façon de vous protéger, mettre une réparation simple dans un ordre sûr, et suivre un plan daté vers un apprentissage et une licence de plombier.",
  about: [
    "Les plombiers amènent l'eau propre dans les maisons, les écoles, les hôpitaux et les usines, et évacuent les eaux usées en toute sécurité. Chaque bâtiment a besoin d'eux, et la plupart des plombiers apprennent le métier par un apprentissage rémunéré (apprenticeship) plutôt qu'à l'université. Ce cours s'adresse à toute personne qui pense à ce parcours : jeunes, anciens militaires, personnes qui sortent de prison, demandeurs d'emploi et adultes qui reprennent leurs études.",
    "Vous apprendrez les deux réseaux de tout bâtiment (l'alimentation en eau, et l'évacuation des eaux usées avec la ventilation), pourquoi les siphons et la ventilation empêchent les gaz d'égout d'entrer, les matériaux et raccords de tuyauterie courants, et les calculs que les plombiers font chaque jour : longueurs de coupe et pente d'évacuation. Ensuite, vous apprendrez les dangers du métier, l'ordre sûr pour les réparations simples, et le fonctionnement des apprentissages et des licences.",
    "Ce cours vous prépare. Il ne vous donne ni licence ni certificat. Aux États-Unis, la plupart des États et certaines villes délivrent une licence aux plombiers, et ce sont eux qui fixent les règles d'expérience et d'examen. Les gestes pratiques, comme couper et assembler des tuyaux, souder au chalumeau, travailler sur une conduite de gaz ou dans une tranchée, s'apprennent en personne avec un formateur qualifié, jamais avec une vidéo seule.",
    "Chaque leçon dure environ cinq minutes, avec une courte tâche \"Essayez maintenant\" et deux questions rapides. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Votre produit final est votre propre plan de départ en plomberie, avec de vraies dates."
  ],
  finalTask: "Préparez votre plan de départ en plomberie : (1) un croquis à la main d'une salle de bain ou d'une cuisine qui montre les conduites d'eau chaude et d'eau froide, les robinets d'arrêt, le siphon, l'évacuation et la ventilation, avec des flèches pour le sens de l'eau ; (2) une feuille de calcul avec deux longueurs de coupe et une pente d'évacuation, calculs détaillés ; (3) une liste des dangers d'un travail de plomberie avec la protection pour chaque danger ; et (4) un plan daté qui nomme deux apprentissages ou formations près de chez vous, ce que votre État ou votre ville exige pour une licence de plombier (d'après la page officielle, avec son adresse web), et une date pour chaque étape.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des jeunes adultes et des adultes qui cherchent un métier qualifié sans diplôme universitaire de quatre ans : demandeurs d'emploi, anciens militaires, personnes qui sortent de prison, immigrants et adultes qui reprennent leurs études. Certains ont fait du travail manuel (entretien, construction, armée) ; beaucoup n'ont jamais travaillé sur des tuyaux.",
    startingPoint: "Ils savent lire des consignes courtes, utiliser un mètre ruban ou une règle et calculer avec des nombres entiers. La plupart savent où sont l'évier et les toilettes, mais ne savent pas expliquer d'où vient l'eau, pourquoi une évacuation a un siphon, comment on mesure un tuyau, ni comment on devient plombier titulaire d'une licence.",
    gap: "Les entreprises et les programmes d'apprentissage cherchent des aides qui connaissent les pièces et les mots de base, savent mesurer et faire des calculs simples, et prennent la sécurité au sérieux. Les apprenants ont besoin de cette base, et d'un plan honnête et daté, pour postuler avec confiance et ne pas payer une formation qui ne mène pas à un emploi.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (environ 11 à 14 ans) ; chaque mot du métier est expliqué",
      "Pas de chalumeau, de conduite de gaz, de tranchée ni d'égout dans ce cours : cela s'apprend en personne avec un formateur qualifié et le bon équipement de protection",
      "Appareils : un téléphone ou un ordinateur de bibliothèque pour lire les pages officielles ; du papier, un stylo et un mètre ruban ou une règle pour s'exercer",
      "Temps : leçons de 5 à 6 minutes, à placer entre le travail, l'école et les rendez-vous",
      "Les licences varient selon l'État et la ville : chaque apprenant vérifie les règles sur la page officielle du lieu où il vit"
    ],
    prerequisites: "Aucun. \"Commencer une carrière dans les métiers techniques\" est une bonne première étape pour choisir un métier ; ce cours va plus loin en plomberie."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir d'un croquis ou d'une photo d'une cuisine ou d'une salle de bain", action: "suivre l'alimentation en eau et le réseau d'évacuation et de ventilation, et nommer chaque pièce", standard: "avec les robinets d'arrêt, le siphon, l'évacuation et la ventilation indiqués et les flèches dans le bon sens" },
    { id: "O2", condition: "À partir de la description d'un travail de plomberie", action: "lister les dangers du travail et la protection pour chacun", standard: "en nommant au moins cinq dangers, chacun associé à un geste sûr ou à un équipement de protection" },
    { id: "O3", condition: "À partir de mesures de tuyaux et d'un tronçon d'évacuation", action: "calculer les longueurs de coupe des tuyaux et la pente dont une évacuation a besoin", standard: "avec au moins 4 exercices justes sur 5 et les calculs détaillés" },
    { id: "O4", condition: "Face à un problème simple de plomberie à la maison", action: "mettre les étapes de la réparation dans un ordre sûr", standard: "en commençant par couper l'eau et en finissant par la recherche de fuites, sans aucune étape dangereuse" },
    { id: "O5", condition: "À l'aide des sites officiels de votre État", action: "écrire un plan daté pour entrer en apprentissage de plomberie et avancer vers une licence", standard: "avec au moins cinq étapes datées et une source officielle pour chaque exigence" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Comment fonctionne la plomberie",
      lessons: [
        {
          title: "Les deux réseaux : l'eau entre, les eaux usées sortent",
          objectives: ["O1"],
          minutes: 5,
          goal: "Suivre comment l'eau propre entre dans un bâtiment et comment l'eau usée en sort.",
          text: [
            "Chaque bâtiment a deux réseaux de plomberie séparés. Le réseau d'alimentation en eau amène l'eau propre sous pression. Le réseau d'évacuation et de ventilation (DWV en anglais) emporte l'eau usée et les déchets grâce à la gravité. Les deux ne se mélangent jamais : c'est ce qui garde l'eau potable sans danger.",
            "Alimentation : l'eau vient de la conduite principale de la ville ou d'un puits, passe par le compteur d'eau (pour l'eau de la ville) et le robinet d'arrêt principal, puis entre dans le bâtiment. Une dérivation va au chauffe-eau, donc à partir de là, une conduite d'eau froide et une conduite d'eau chaude vont à chaque appareil. La plupart des appareils ont aussi leurs propres petits robinets d'arrêt, sous l'évier ou derrière les toilettes.",
            "Évacuation et ventilation : quand l'eau quitte un évier, elle descend dans un siphon puis dans un tuyau d'évacuation. Les évacuations rejoignent des tuyaux plus gros et vont jusqu'au collecteur du bâtiment, puis à l'égout de la ville ou à une fosse septique. Les tuyaux de ventilation montent et sortent par le toit pour laisser entrer l'air dans les évacuations.",
            "Les plombiers installent et réparent aussi les appareils sanitaires (éviers, toilettes, baignoires, douches) et les appareils qui utilisent de l'eau, comme les chauffe-eau et les lave-vaisselle. Les tuyauteurs et les monteurs de conduites de vapeur (pipefitters et steamfitters) font un travail semblable sur de plus grands réseaux, dans les usines et les grands bâtiments."
          ],
          steps: [
            "Partez du compteur d'eau ou du puits et trouvez le robinet d'arrêt principal.",
            "Suivez la conduite d'eau froide jusqu'au chauffe-eau ; de là, une conduite chaude et une conduite froide vont aux appareils.",
            "À chaque appareil, trouvez les petits robinets d'arrêt.",
            "Suivez l'eau usée vers le bas, par le siphon, dans l'évacuation et jusqu'à l'égout ou la fosse septique."
          ],
          words: [
            ["Réseau d'alimentation en eau", "les tuyaux qui amènent l'eau propre dans un bâtiment, sous pression."],
            ["DWV (évacuation et ventilation)", "les tuyaux qui emportent l'eau usée et les déchets par gravité, plus la ventilation qui laisse entrer l'air."],
            ["Robinet d'arrêt principal", "le robinet qui coupe l'eau de tout le bâtiment."],
            ["Appareil sanitaire", "tout ce qui utilise ou contient de l'eau et l'évacue : un évier, des toilettes, une baignoire ou une douche."],
            ["Conduite principale", "le gros tuyau public sous la rue qui amène l'eau de la ville."],
            ["Fosse septique", "une cuve enterrée qui traite les eaux usées de la maison là où il n'y a pas d'égout."]
          ],
          slides: [
            { title: "Deux réseaux qui ne se mélangent jamais", bullets: ["Alimentation : l'eau propre entre, sous pression", "DWV : l'eau usée sort, par gravité"] },
            { title: "Suivre l'alimentation", bullets: ["Compteur ou puits, puis robinet d'arrêt principal", "Le chauffe-eau crée la conduite d'eau chaude", "Petits robinets d'arrêt à chaque appareil"] },
            { title: "Suivre l'évacuation", bullets: ["Appareil, puis siphon, puis tuyau d'évacuation", "Collecteur du bâtiment vers l'égout ou la fosse septique", "La ventilation monte par le toit"] },
            { title: "Sur quoi travaillent les plombiers", bullets: ["Tuyaux, appareils sanitaires et chauffe-eau", "Tuyauteurs : grands réseaux dans les grands bâtiments"] }
          ],
          sources: [
            { name: "Bureau des statistiques du travail des États-Unis (BLS) : Plombiers, tuyauteurs et monteurs de conduites de vapeur", url: BLS }
          ],
          tryIt: "Allez dans la cuisine ou la salle de bain de votre logement. Sans rien démonter, regardez sous l'évier. Sur papier, dessinez ce que vous voyez : les deux conduites d'alimentation (chaude et froide), les petits robinets d'arrêt, le siphon courbé et l'évacuation qui entre dans le mur. Ajoutez des flèches pour le sens de l'eau. Puis trouvez où est le robinet d'arrêt principal du bâtiment (demandez au propriétaire ou au gérant si vous n'êtes pas sûr). Gardez le croquis : c'est le début de la partie 1 de votre tâche finale.",
          youCanNow: "suivre comment l'eau propre entre dans un bâtiment et comment l'eau usée en sort.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qui fait circuler l'eau dans le réseau d'évacuation ?", options: ["La pression de l'eau de la ville", "La gravité", "Le chauffe-eau", "Les robinets d'arrêt"], answer: 1, why: "Les évacuations emportent l'eau usée par gravité, donc les tuyaux d'évacuation doivent descendre en pente." },
            { objective: "O1", q: "Un tuyau éclate et l'eau gicle partout. Quel robinet coupe l'eau de tout le bâtiment ?", options: ["Le petit robinet sous un évier", "Le robinet de vidange du chauffe-eau", "Le chapeau de ventilation sur le toit", "Le robinet d'arrêt principal"], answer: 3, why: "Le robinet d'arrêt principal coupe l'alimentation en eau de tout le bâtiment." }
          ]
        },
        {
          title: "Siphons, ventilation et pente : bloquer les gaz d'égout",
          objectives: ["O1", "O3"],
          minutes: 5,
          goal: "Expliquer à quoi servent un siphon et une ventilation, et calculer la pente dont un tuyau d'évacuation a besoin.",
          text: [
            "Regardez sous un évier : vous verrez un tuyau courbé, souvent en forme de P. C'est le siphon. Il garde toujours un peu d'eau. Ce bouchon d'eau empêche les gaz d'égout, qui sentent mauvais et peuvent rendre malade, de remonter par l'évacuation dans la pièce. Les toilettes ont un siphon intégré.",
            "La ventilation, ce sont des tuyaux reliés aux évacuations qui montent par le toit. Ils laissent entrer l'air dans le réseau d'évacuation pour que l'eau coule bien et n'aspire pas l'eau des siphons. Si un évier gargouille, ou si un siphon se vide et que la pièce sent l'égout, une ventilation absente ou bouchée peut en être la cause.",
            "Les tuyaux d'évacuation doivent descendre en pente pour que les déchets s'écoulent. S'ils sont trop plats, les déchets stagnent et bouchent le tuyau. Les codes de plomberie fixent la pente. Pour les petits tuyaux d'évacuation, les codes demandent souvent environ 1/4 de pouce de pente pour chaque pied de tuyau ; votre code local fixe le chiffre exact. Pour trouver la descente totale, multipliez la pente par la longueur : une évacuation de 12 pieds à 1/4 de pouce par pied a besoin de 3 pouces de descente.",
            "Un code de plomberie est l'ensemble des règles pour une plomberie sûre. Beaucoup d'endroits utilisent l'International Plumbing Code (IPC) ou l'Uniform Plumbing Code (UPC), souvent avec des modifications locales. Le service local de l'urbanisme (building department) vous dit quel code s'applique et contrôle le travail par une inspection."
          ],
          steps: [
            "Trouvez la pente donnée par votre code ou votre formateur (exercice : 1/4 de pouce par pied).",
            "Mesurez la longueur du tronçon d'évacuation en pieds.",
            "Multipliez : longueur x pente = descente totale en pouces.",
            "Vérifiez : l'extrémité la plus éloignée doit être plus basse que le départ de cette valeur."
          ],
          words: [
            ["Siphon", "le tuyau courbé sous un appareil qui garde de l'eau pour bloquer les gaz d'égout."],
            ["Gaz d'égout", "le gaz nocif et malodorant qui se forme dans les égouts et les évacuations."],
            ["Ventilation", "un tuyau qui laisse entrer l'air dans les évacuations et sort par le toit, pour que les siphons gardent leur eau."],
            ["Pente", "de combien un tuyau d'évacuation descend pour chaque pied de longueur, pour que les déchets s'écoulent vers le bas."],
            ["Code de plomberie", "les règles pour une plomberie sûre qu'un État ou une ville adopte et que les inspecteurs contrôlent."],
            ["Inspection", "une visite du service de l'urbanisme pour vérifier que le travail respecte le code."]
          ],
          slides: [
            { title: "Le siphon : un bouchon d'eau", bullets: ["Tuyau courbé qui garde toujours de l'eau", "Empêche les gaz d'égout d'entrer dans la pièce", "Les toilettes en ont un intégré"] },
            { title: "La ventilation fait respirer les évacuations", bullets: ["Elle monte par le toit", "Elle garde l'eau dans les siphons", "Gargouillis ou odeur d'égout : vérifiez la ventilation"] },
            { title: "Les évacuations descendent en pente", bullets: ["Trop plat : les déchets stagnent et bouchent", "Descente totale = longueur x pente", "Exercice : 12 pi x 1/4 po = 3 po"] },
            { title: "Le code et l'inspecteur", bullets: ["Beaucoup d'endroits utilisent l'IPC ou l'UPC, avec des modifications locales", "Le service de l'urbanisme inspecte le travail"] }
          ],
          tryIt: "Exercice seulement : sur papier, calculez la descente totale de trois évacuations à 1/4 de pouce par pied : 8 pieds, 10 pieds et 16 pieds. Montrez vos calculs (par exemple, 8 x 1/4 = 2 pouces). Puis regardez de nouveau sous un évier et montrez le siphon du doigt. Écrivez une phrase qui dit pourquoi il doit toujours garder de l'eau. Réponses : 2 pouces, 2 1/2 pouces, 4 pouces.",
          youCanNow: "expliquer à quoi servent un siphon et une ventilation et calculer la pente dont un tuyau d'évacuation a besoin.",
          quickCheck: [
            { objective: "O1", q: "Pourquoi un siphon garde-t-il toujours un peu d'eau ?", options: ["Pour empêcher les gaz d'égout d'entrer dans la pièce", "Pour garder le tuyau au frais", "Pour rendre l'eau plus chaude", "Pour mesurer l'eau utilisée"], answer: 0, why: "L'eau du siphon forme un bouchon qui bloque les gaz d'égout." },
            { objective: "O3", q: "Exercice seulement : une évacuation mesure 20 pieds et doit descendre de 1/4 de pouce par pied. Quelle descente totale lui faut-il ?", options: ["4 pouces", "20 pouces", "5 pouces", "1/4 de pouce"], answer: 2, why: "20 x 1/4 = 5, donc l'évacuation a besoin de 5 pouces de descente." }
          ]
        },
        {
          title: "Tuyaux, raccords et mesure d'une coupe",
          objectives: ["O3"],
          minutes: 6,
          goal: "Nommer les matériaux de tuyauterie courants et calculer une longueur de coupe à partir d'une mesure d'axe en axe.",
          text: [
            "Les plombiers utilisent plusieurs matériaux. Le cuivre sert aux conduites d'alimentation en eau ; on l'assemble par brasure au chalumeau, ou avec des raccords à sertir ou à emboîter. Le PEX est un tube en plastique souple pour les conduites d'alimentation, assemblé avec des raccords à sertir ou à expansion. Le PVC et l'ABS sont des tuyaux en plastique rigide utilisés surtout pour l'évacuation et la ventilation. Les maisons anciennes peuvent avoir de l'acier galvanisé ou de la fonte. Selon la loi fédérale des États-Unis, les tuyaux et raccords pour l'eau potable doivent être sans plomb.",
            "Les raccords changent la direction ou relient les tuyaux : un coude tourne un angle, un té crée une dérivation, un manchon relie deux morceaux droits, et un adaptateur relie deux matériaux différents. Les tailles de tuyaux sont nominales : un tuyau de 1/2 pouce est une taille commerciale, pas la mesure exacte de l'intérieur ou de l'extérieur.",
            "Les plombiers mesurent souvent d'axe en axe : du centre d'un raccord au centre du suivant. Mais le tuyau n'arrive pas jusqu'au centre du raccord. Chaque raccord a une cote d'emboîtement (aussi appelée take-off) : la distance entre son centre et l'endroit où le tuyau s'arrête à l'intérieur. Pour trouver la longueur de coupe, retirez la cote de chaque extrémité.",
            "Exemple (exercice seulement, chiffres inventés) : d'axe en axe, il y a 24 pouces, et chaque coude a une cote de 1/2 pouce. Longueur de coupe = 24 - 1/2 - 1/2 = 23 pouces. Les vraies cotes viennent du tableau du fabricant ou de votre formateur, et on mesure toujours deux fois avant de couper une fois."
          ],
          steps: [
            "Mesurez d'axe en axe entre les deux raccords.",
            "Cherchez la cote d'emboîtement de chaque raccord (tableau du fabricant ou formateur).",
            "Retirez la cote de chaque extrémité : longueur de coupe = axe en axe - cote 1 - cote 2.",
            "Mesurez deux fois, marquez le tuyau, puis coupez."
          ],
          words: [
            ["Cuivre", "tuyau en métal utilisé pour les conduites d'eau, souvent assemblé par brasure."],
            ["PEX", "tube en plastique souple utilisé pour les conduites d'eau chaude et froide."],
            ["PVC et ABS", "tuyaux en plastique rigide utilisés surtout pour l'évacuation et la ventilation."],
            ["Raccord", "une pièce qui relie des tuyaux ou change leur direction : coude, té, manchon, adaptateur."],
            ["Taille nominale", "le nom commercial de la taille d'un tuyau, pas une mesure exacte."],
            ["Axe en axe", "une mesure du centre d'un raccord au centre du suivant."],
            ["Cote d'emboîtement (take-off)", "la distance entre le centre d'un raccord et l'endroit où le tuyau s'arrête à l'intérieur."],
            ["Sans plomb", "selon la loi fédérale des États-Unis, des tuyaux et raccords avec au plus une moyenne pondérée de 0,25 % de plomb sur les surfaces en contact avec l'eau, et une brasure et un flux avec au plus 0,2 % de plomb."]
          ],
          slides: [
            { title: "Matériaux de tuyauterie courants", bullets: ["Cuivre et PEX : alimentation en eau", "PVC et ABS : évacuation et ventilation", "Maisons anciennes : acier galvanisé, fonte"] },
            { title: "Raccords", bullets: ["Le coude tourne, le té crée une dérivation", "Le manchon relie, l'adaptateur change de matériau", "Les pièces pour l'eau potable doivent être sans plomb"] },
            { title: "Mesurer une coupe", bullets: ["Mesurez d'axe en axe", "Retirez la cote d'emboîtement à chaque extrémité", "Exemple : 24 - 1/2 - 1/2 = 23 pouces"] },
            { title: "Mesurer deux fois, couper une fois", bullets: ["Les cotes viennent du tableau du fabricant", "Les tailles sont nominales (commerciales)"] }
          ],
          sources: [
            { name: "EPA (Agence américaine de protection de l'environnement) : Utilisation de tuyaux, raccords, appareils, brasure et flux sans plomb pour l'eau potable", url: "https://www.epa.gov/sdwa/use-lead-free-pipes-fittings-fixtures-solder-and-flux-drinking-water" }
          ],
          tryIt: "Exercice seulement, avec des chiffres inventés : calculez la longueur de coupe de deux tuyaux. Tuyau A : d'axe en axe 36 pouces, chaque cote 3/4 de pouce. Tuyau B : d'axe en axe 18 1/2 pouces, cotes de 1/2 pouce et 1 pouce. Montrez vos calculs. Puis, avec un mètre ruban, marquez la longueur de coupe du tuyau A sur une bande de papier ou de carton. Réponses : 34 1/2 pouces et 17 pouces. Gardez cette feuille pour la partie 2 de votre tâche finale.",
          youCanNow: "nommer les matériaux de tuyauterie courants et calculer une longueur de coupe à partir d'une mesure d'axe en axe.",
          quickCheck: [
            { objective: "O3", q: "Exercice seulement : d'axe en axe, il y a 30 pouces et chaque cote est de 1/2 pouce. Quelle est la longueur de coupe ?", options: ["30 pouces", "31 pouces", "29 1/2 pouces", "29 pouces"], answer: 3, why: "30 - 1/2 - 1/2 = 29 pouces." },
            { objective: "O3", q: "Quel tuyau est le plus souvent utilisé pour l'évacuation et la ventilation dans les maisons récentes ?", options: ["Le cuivre", "Le PVC", "Le tuyau d'arrosage", "Le PEX"], answer: 1, why: "Les tuyaux en plastique rigide comme le PVC (ou l'ABS) servent surtout à l'évacuation et à la ventilation." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment fonctionne la plomberie",
        questions: [
          { objective: "O1", q: "Quelle phrase sur les deux réseaux de plomberie est vraie ?", options: ["L'eau d'alimentation et l'eau d'évacuation se mélangent dans le chauffe-eau", "Le réseau d'alimentation fonctionne par gravité", "L'alimentation amène l'eau propre sous pression ; l'évacuation emporte les déchets par gravité", "La ventilation amène l'eau propre jusqu'au toit"], answer: 2, why: "L'alimentation est sous pression, l'évacuation fonctionne par gravité, et les deux ne se mélangent jamais." },
          { objective: "O1", q: "Une salle de bain sent l'égout et l'évier gargouille. Quelle est une cause probable ?", options: ["Le chauffe-eau est trop chaud", "Une ventilation bouchée ou un siphon vide", "Le robinet d'arrêt principal est ouvert", "Les tuyaux d'alimentation sont en cuivre"], answer: 1, why: "La ventilation garde l'eau dans les siphons ; si elle est bouchée ou si un siphon se vide, les gaz d'égout peuvent entrer." },
          { objective: "O1", q: "Où commence la conduite d'eau chaude ?", options: ["Au chauffe-eau", "À la ventilation du toit", "Au siphon", "À l'égout"], answer: 0, why: "L'eau froide entre dans le chauffe-eau, et la conduite chaude part de là vers les appareils." },
          { objective: "O3", q: "Exercice seulement : une évacuation de 16 pieds doit descendre de 1/4 de pouce par pied. Quelle est la descente totale ?", options: ["2 pouces", "16 pouces", "8 pouces", "4 pouces"], answer: 3, why: "16 x 1/4 = 4 pouces." },
          { objective: "O3", q: "Pourquoi retire-t-on la cote d'emboîtement d'une mesure d'axe en axe ?", options: ["Pour économiser sur le tuyau", "Parce que le tuyau s'arrête dans le raccord avant son centre", "Parce que les tuyaux rétrécissent quand il fait froid", "C'est seulement nécessaire pour le PEX"], answer: 1, why: "Le tuyau s'arrête là où il s'emboîte dans le raccord, pas au centre du raccord." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Sécurité, réparations simples et votre parcours",
      lessons: [
        {
          title: "Les dangers de la plomberie et comment vous protéger",
          objectives: ["O2"],
          minutes: 6,
          goal: "Lister les dangers d'un travail de plomberie et la protection pour chacun.",
          text: [
            "Le Bureau des statistiques du travail des États-Unis (BLS) cite les blessures courantes des plombiers : coupures avec des outils tranchants, brûlures avec des tuyaux chauds et du matériel de soudure, et chutes d'échelle. Les plombiers portent aussi des charges lourdes, travaillent dans des espaces étroits et souvent dehors, par tous les temps.",
            "Les eaux d'égout contiennent des microbes. Portez des gants et une protection des yeux quand vous ouvrez une évacuation, lavez-vous les mains avant de manger ou de toucher votre visage, et gardez vos plaies couvertes. L'eau chaude et la vapeur brûlent : laissez refroidir une conduite de chauffe-eau et ouvrez-la seulement comme votre formateur vous le montre. Le travail au chalumeau (soudure) peut mettre le feu à l'intérieur des murs : les plombiers formés utilisent un écran thermique, gardent un extincteur à portée de main et surveillent la zone après avoir fini.",
            "Gaz : si vous sentez une odeur de gaz, n'allumez rien et ne touchez pas aux interrupteurs. Sortez du bâtiment et appelez la compagnie de gaz ou le 911 (numéro d'urgence aux États-Unis) depuis l'extérieur. Le travail sur les conduites de gaz demande une formation et, dans certains États, une licence spéciale. L'électricité et l'eau forment un mélange mortel : ne restez jamais debout dans l'eau près de fils électriques, et gardez câbles et outils loin des zones mouillées.",
            "Tranchées et espaces confinés : l'OSHA (l'agence américaine de sécurité au travail) dit que les effondrements de tranchées sont le plus grand risque pour la vie des travailleurs dans les travaux de fouille. N'entrez jamais dans une tranchée qui n'a pas été inspectée et protégée par un talutage, un étaiement ou un caisson de tranchée, avec un moyen sûr d'entrer et de sortir. Les vides sanitaires et les zones étroites demandent un équipier et un bon air."
          ],
          steps: [
            "Lisez le travail : qu'allez-vous ouvrir, couper, chauffer ou soulever ?",
            "Écrivez chaque danger : microbes, brûlures, incendie, coupures, chutes, gaz, électricité, tranchée, charges lourdes.",
            "Associez chaque danger à une protection : gants, lunettes, écran thermique, extincteur, vérification de l'échelle, sortir et appeler, zone sèche, tranchée inspectée, soulever à deux.",
            "Si quelque chose n'est pas sûr, arrêtez-vous et demandez à votre responsable."
          ],
          words: [
            ["Danger", "tout ce qui, au travail, pourrait vous blesser."],
            ["EPI", "équipement de protection individuelle : gants, lunettes de sécurité, chaussures de sécurité, protection auditive."],
            ["Soudure (brasure, sweating)", "assembler des tuyaux et raccords en cuivre avec du métal d'apport fondu, chauffé au chalumeau."],
            ["Écran thermique", "un tapis résistant au feu placé derrière un joint pour protéger le mur du chalumeau."],
            ["Caisson de tranchée", "une solide caisse en acier placée dans une tranchée pour protéger les travailleurs si les parois s'effondrent."],
            ["Espace confiné", "une zone étroite avec peu de moyens d'entrer et de sortir, comme un vide sanitaire ou un regard."]
          ],
          slides: [
            { title: "Blessures courantes en plomberie", bullets: ["Coupures avec des outils tranchants", "Brûlures avec des tuyaux chauds et des chalumeaux", "Chutes d'échelle"] },
            { title: "Microbes, chaleur et feu", bullets: ["Eaux d'égout : gants, lunettes, lavage des mains", "L'eau chaude et la vapeur brûlent", "Chalumeau : écran thermique et extincteur"] },
            { title: "Gaz et électricité", bullets: ["Odeur de gaz : sortez, puis appelez de l'extérieur", "Jamais debout dans l'eau près de fils électriques"] },
            { title: "Tranchées et espaces étroits", bullets: ["N'entrez jamais dans une tranchée non protégée", "Talutage, étaiement ou caisson de tranchée", "Vides sanitaires : un équipier et un bon air"] }
          ],
          sources: [
            { name: "Bureau des statistiques du travail des États-Unis (BLS) : Plombiers, environnement de travail", url: BLS + "#tab-3" },
            { name: "OSHA : Tranchées et fouilles", url: "https://www.osha.gov/trenching-excavation" }
          ],
          tryIt: "Choisissez un travail : \"déboucher l'évacuation d'un évier de cuisine\", \"remplacer un chauffe-eau\" ou \"réparer une fuite sous une maison, dans un vide sanitaire\". Sur papier, faites deux colonnes : Danger et Protection. Écrivez au moins cinq dangers de ce travail et la protection pour chacun. Gardez-le : c'est la partie 3 de votre tâche finale.",
          youCanNow: "lister les dangers d'un travail de plomberie et la protection pour chacun.",
          quickCheck: [
            { objective: "O2", q: "Vous sentez une odeur de gaz dans un sous-sol où vous travaillez. Que faites-vous d'abord ?", options: ["Allumer une allumette pour trouver la fuite", "Allumer la lumière pour mieux voir", "Continuer à travailler et prévenir quelqu'un plus tard", "Sortir du bâtiment et appeler la compagnie de gaz ou le 911 depuis l'extérieur"], answer: 3, why: "Une étincelle ou une flamme peut enflammer le gaz : sortez d'abord, puis appelez de l'extérieur." },
            { objective: "O2", q: "Quelle protection compte le plus quand vous ouvrez une évacuation d'eaux d'égout ?", options: ["Des gants et une protection des yeux, puis se laver les mains", "Un écran thermique", "Seulement une protection auditive", "Un caisson de tranchée"], answer: 0, why: "Les eaux d'égout contiennent des microbes : vous protégez votre peau et vos yeux, et vous vous lavez les mains." }
          ]
        },
        {
          title: "Des réparations simples dans un ordre sûr",
          objectives: ["O4"],
          minutes: 6,
          goal: "Mettre les étapes d'une réparation simple de plomberie dans un ordre sûr, de la coupure de l'eau à la recherche de fuites.",
          text: [
            "Les aides et les nouveaux apprentis commencent souvent par des travaux simples. Chacun suit le même schéma sûr : couper l'eau, faire tomber la pression, protéger la zone, faire la réparation, rouvrir l'eau doucement et vérifier qu'il n'y a pas de fuite.",
            "Chasse d'eau qui coule sans arrêt : l'eau continue de couler dans la cuvette. Un clapet usé (le joint en caoutchouc au fond du réservoir) en est une cause courante. Fermez le robinet d'arrêt des toilettes, tirez la chasse pour vider le réservoir, remplacez le clapet par un modèle qui convient à ces toilettes, rouvrez l'eau et regardez le réservoir se remplir. Si une goutte de colorant alimentaire dans le réservoir apparaît dans la cuvette sans tirer la chasse, il y a encore une fuite.",
            "Évier qui s'écoule lentement : essayez d'abord une ventouse. Si cela ne marche pas, mettez un seau sous le siphon, mettez des gants, desserrez les écrous à la main ou avec une pince, retirez le siphon et nettoyez-le. Remontez-le avec les joints dans le bon sens, faites couler l'eau et vérifiez qu'il n'y a pas de gouttes.",
            "Connaissez vos limites. Les conduites de gaz, les brûleurs de chauffe-eau, les conduites principales d'égout et tout ce qui demande un permis reviennent aux plombiers titulaires d'une licence. Chez quelqu'un d'autre, faites seulement ce que votre responsable vous confie. Ici, vous vous exercez sur papier ; la partie pratique s'apprend avec un formateur."
          ],
          steps: [
            "Coupez l'eau au robinet de l'appareil (ou au robinet principal s'il n'y en a pas).",
            "Faites tomber la pression : ouvrez le robinet ou tirez la chasse pour vider l'eau.",
            "Protégez la zone : seau, serviettes, gants et protection des yeux.",
            "Faites la réparation (changez la pièce ou nettoyez le siphon).",
            "Rouvrez l'eau doucement.",
            "Vérifiez qu'il n'y a pas de fuite et testez l'appareil."
          ],
          words: [
            ["Clapet", "le joint en caoutchouc au fond du réservoir des toilettes qui laisse passer l'eau dans la cuvette quand vous tirez la chasse."],
            ["Écrou de siphon", "le gros écrou qui tient le siphon d'un évier ; on peut souvent le desserrer à la main."],
            ["Ventouse", "une coupelle en caoutchouc avec un manche qui pousse et tire l'eau pour déboucher un tuyau."],
            ["Faire tomber la pression", "ouvrir un robinet ou tirer la chasse après avoir coupé l'eau, pour que l'eau ne gicle pas quand vous ouvrez la conduite."],
            ["Permis", "autorisation officielle du service de l'urbanisme pour faire certains travaux de plomberie, suivie d'une inspection."]
          ],
          slides: [
            { title: "Le schéma sûr pour chaque réparation", bullets: ["Couper, faire tomber la pression, protéger la zone", "Réparer, rouvrir doucement, vérifier les fuites"] },
            { title: "Chasse d'eau qui coule sans arrêt", bullets: ["Couper l'eau et tirer la chasse pour vider le réservoir", "Remplacer le clapet usé par un modèle adapté", "Test au colorant alimentaire pour les fuites"] },
            { title: "Évier qui s'écoule lentement", bullets: ["Essayer d'abord la ventouse", "Seau et gants, puis retirer le siphon", "Remonter et vérifier qu'il n'y a pas de gouttes"] },
            { title: "Connaissez vos limites", bullets: ["Gaz, brûleurs, égout principal et travaux avec permis : plombiers avec licence", "Faites seulement ce que votre responsable vous confie"] }
          ],
          tryIt: "Écrivez chacune de ces étapes sur un bout de papier, mélangez-les, puis remettez-les dans un ordre sûr pour une chasse d'eau qui coule sans arrêt : \"Regarder le réservoir se remplir\", \"Fermer le robinet d'arrêt des toilettes\", \"Remplacer le clapet\", \"Tirer la chasse pour vider le réservoir\", \"Faire le test au colorant\", \"Rouvrir l'eau doucement\". Puis écrivez avec vos propres mots l'ordre sûr pour nettoyer le siphon d'un évier, en commençant par le seau.",
          youCanNow: "mettre les étapes d'une réparation simple de plomberie dans un ordre sûr, de la coupure de l'eau à la recherche de fuites.",
          quickCheck: [
            { objective: "O4", q: "Quelle est la première étape avant de retirer le flexible d'alimentation d'un évier ?", options: ["Desserrer vite l'écrou", "Ouvrir le robinet", "Fermer le robinet d'arrêt de cet évier", "Appeler la mairie"], answer: 2, why: "Couper l'eau d'abord empêche la conduite de gicler quand vous l'ouvrez." },
            { objective: "O4", q: "Vous venez de remonter le siphon d'un évier. Et ensuite ?", options: ["Partir tout de suite", "Faire couler l'eau et vérifier qu'il n'y a pas de gouttes", "Peindre le tuyau", "Fermer le robinet principal"], answer: 1, why: "Chaque réparation se termine par un test et une vérification des fuites." }
          ]
        },
        {
          title: "Votre parcours : apprentissage, licence et plan daté",
          objectives: ["O5"],
          minutes: 6,
          goal: "Écrire un plan daté pour entrer en apprentissage de plomberie et avancer vers une licence, à partir de sources officielles.",
          text: [
            "Le BLS dit que la plupart des plombiers, tuyauteurs et monteurs de conduites de vapeur apprennent le métier par un apprentissage de 4 ou 5 ans, avec environ 2 000 heures par an de formation rémunérée sur le terrain, plus des cours. Les syndicats, les associations professionnelles et les entreprises parrainent les apprentissages. Certaines personnes commencent d'abord comme aides. Un diplôme de fin d'études secondaires ou un équivalent est généralement exigé.",
            "Le BLS dit aussi que la plupart des États et certaines collectivités locales exigent une licence pour les plombiers, souvent après 2 à 5 ans d'expérience et un examen. Certains États exigent une licence spéciale pour travailler sur les conduites de gaz. Les règles varient : vérifiez donc la page officielle des licences de votre État ou de votre ville. Le License Finder de CareerOneStop (un site public américain) peut vous aider à la trouver. Si vous avez un casier judiciaire, demandez à l'organisme de délivrance comment il examine les casiers avant de payer une formation.",
            "Pour trouver un apprentissage, utilisez l'Apprenticeship Job Finder sur apprenticeship.gov, appelez le syndicat local des plombiers et tuyauteurs, demandez aux entreprises de plomberie si elles embauchent des aides, et adressez-vous à votre centre local pour l'emploi (American Job Center). Les anciens militaires peuvent demander s'ils peuvent utiliser leurs droits du GI Bill pour un apprentissage agréé.",
            "Les salaires et le nombre d'emplois changent chaque année. Lisez les chiffres actuels et leur année sur la page du BLS au lieu de croire les publicités ou les vidéos. Avant de payer une école, demandez : est-ce que cela mène à un apprentissage ou à un emploi, et est-ce que les heures comptent pour la licence dans mon État ?"
          ],
          steps: [
            "Ouvrez la page des licences de plomberie de votre État (essayez le License Finder de CareerOneStop). Notez les niveaux de licence, les heures et l'examen indiqués, avec l'adresse web.",
            "Cherchez sur apprenticeship.gov des apprentissages en plomberie près de chez vous. Notez-en deux, avec comment et quand postuler.",
            "Notez un poste d'aide ou une entreprise que vous pourriez contacter en attendant.",
            "Listez ce dont vous avez besoin d'abord : diplôme ou GED, permis de conduire, révision des maths de base.",
            "Mettez une date sur chaque étape et partagez le plan avec quelqu'un qui suivra vos progrès."
          ],
          words: [
            ["Apprentissage (apprenticeship)", "un emploi rémunéré où vous apprenez le métier avec des travailleurs expérimentés, plus des cours."],
            ["Compagnon (journeyworker ou journeyman)", "un plombier qui a fini sa formation et obtenu le niveau de licence qui lui permet de travailler sans supervision directe."],
            ["Aide", "un travailleur débutant qui assiste les plombiers et apprend sur le terrain."],
            ["Licence", "autorisation officielle d'un État ou d'une ville pour faire des travaux de plomberie."],
            ["American Job Center", "un bureau public et gratuit aux États-Unis qui aide les gens à trouver une formation et un emploi."]
          ],
          slides: [
            { title: "Comment la plupart des plombiers apprennent", bullets: ["Apprentissage rémunéré de 4 ou 5 ans", "Environ 2 000 heures rémunérées sur le terrain par an", "Plus des cours"] },
            { title: "Licences", bullets: ["La plupart des États et certaines villes délivrent une licence", "Souvent 2 à 5 ans d'expérience et un examen", "Vérifiez la page officielle de votre État"] },
            { title: "Où chercher", bullets: ["Job Finder de apprenticeship.gov", "Syndicat local, entreprises, American Job Center"] },
            { title: "Votre plan", bullets: ["Règles officielles de la licence, avec l'adresse web", "Deux apprentissages, un poste d'aide", "Une date sur chaque étape"] }
          ],
          sources: [
            { name: "Bureau des statistiques du travail des États-Unis (BLS) : Plombiers, comment le devenir", url: BLS + "#tab-4" },
            { name: "Apprenticeship.gov : Recherche d'apprentissages (Apprenticeship Job Finder)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop : Recherche de licences", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" }
          ],
          tryIt: "Suivez les étapes pour écrire votre plan sur papier ou dans un document gratuit. Écrivez au moins cinq étapes, chacune avec une date, et l'adresse web de chaque page officielle utilisée. Rangez-le avec votre croquis, votre feuille de calcul et votre liste des dangers : ensemble, ils forment votre plan de départ en plomberie.",
          youCanNow: "écrire un plan daté pour entrer en apprentissage de plomberie et avancer vers une licence, à partir de sources officielles.",
          quickCheck: [
            { objective: "O5", q: "Où devez-vous vérifier ce que votre État exige pour une licence de plombier ?", options: ["Dans un commentaire de vidéo", "Dans une publicité d'école de formation", "Dans l'avis d'un ami", "Sur la page officielle de l'organisme des licences de l'État ou de la ville"], answer: 3, why: "Les règles de licence varient selon le lieu, et c'est la page officielle qui compte." },
            { objective: "O5", q: "Quelle étape du plan est écrite de la façon la plus utile ?", options: ["\"Postuler à deux apprentissages en plomberie trouvés sur apprenticeship.gov avant le 1er mars\"", "\"Me renseigner sur la plomberie\"", "\"Avoir une licence un jour\"", "\"Apprendre beaucoup\""], answer: 0, why: "Une étape utile dit l'action exacte, où, et une date." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Sécurité, réparations simples et votre parcours",
        questions: [
          { objective: "O2", q: "Un plombier va souder un tuyau en cuivre près d'un mur en bois. Qu'est-ce qui protège le mur ?", options: ["Un caisson de tranchée", "Un écran thermique, avec un extincteur à portée de main", "Une protection auditive", "Une ventouse"], answer: 1, why: "L'écran thermique bloque la flamme, et l'extincteur est prêt en cas de feu." },
          { objective: "O2", q: "Votre équipe doit travailler dans une tranchée profonde aux parois de terre droites, sans soutien. Que faites-vous ?", options: ["Entrer vite et sortir vite", "Entrer si la terre a l'air sèche", "Ne pas entrer tant qu'elle n'est pas inspectée et protégée par un talutage, un étaiement ou un caisson de tranchée", "Envoyer le plus nouveau d'abord"], answer: 2, why: "L'OSHA dit de ne jamais entrer dans une tranchée qui n'a pas été inspectée et protégée." },
          { objective: "O4", q: "Mettez dans l'ordre pour une chasse d'eau qui coule sans arrêt : (a) remplacer le clapet, (b) fermer le robinet d'arrêt, (c) vérifier les fuites, (d) tirer la chasse pour vider le réservoir.", options: ["b, d, a, c", "a, b, c, d", "d, a, b, c", "c, b, a, d"], answer: 0, why: "Couper l'eau, vider le réservoir, réparer, puis vérifier les fuites." },
          { objective: "O4", q: "Quel travail un nouvel aide doit-il laisser à un plombier titulaire d'une licence ?", options: ["Déboucher un évier lent à la ventouse", "Remplacer le clapet des toilettes", "Déplacer une conduite de gaz vers une nouvelle cuisinière", "Mettre un seau sous un siphon"], answer: 2, why: "Le travail sur les conduites de gaz demande une formation et, dans certains États, une licence spéciale." },
          { objective: "O5", q: "Selon le BLS, comment la plupart des plombiers apprennent-ils le métier ?", options: ["Un cours en ligne de deux semaines", "Un diplôme universitaire de quatre ans", "En regardant des vidéos à la maison", "Un apprentissage rémunéré de 4 ou 5 ans"], answer: 3, why: "Le BLS dit que la plupart apprennent par un apprentissage de 4 ou 5 ans avec une formation rémunérée sur le terrain." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases de la plomberie",
    questions: [
      { objective: "O1", q: "Quel réseau emporte l'eau usée et les déchets hors d'un bâtiment ?", options: ["Le réseau d'alimentation en eau", "Le réseau d'évacuation et de ventilation", "Le compteur d'eau", "Le chauffe-eau"], answer: 1, why: "Le réseau DWV emporte les déchets par gravité et laisse entrer l'air par la ventilation." },
      { objective: "O1", q: "Où trouve-t-on en général les petits robinets d'arrêt d'un évier ?", options: ["Sous l'évier", "Sur le toit", "Dans le siphon", "À l'égout"], answer: 0, why: "Les robinets d'arrêt des appareils sont en général sous l'évier ou derrière les toilettes." },
      { objective: "O1", q: "À quoi sert un tuyau de ventilation ?", options: ["Amener l'eau chaude à la douche", "Garder de l'eau pour bloquer les gaz d'égout", "Mesurer la consommation d'eau", "Laisser entrer l'air dans les évacuations pour que les siphons gardent leur eau"], answer: 3, why: "La ventilation laisse entrer l'air pour que l'eau coule bien et ne vide pas les siphons par aspiration." },
      { objective: "O1", q: "Qu'est-ce qui empêche les gaz d'égout de remonter par l'évacuation d'un évier ?", options: ["Le robinet d'arrêt", "Le compteur d'eau", "Le bouchon d'eau dans le siphon", "Le robinet"], answer: 2, why: "L'eau gardée dans le siphon forme un bouchon contre les gaz d'égout." },
      { objective: "O3", q: "Exercice seulement : une évacuation de 10 pieds doit descendre de 1/4 de pouce par pied. Quelle est la descente totale ?", options: ["2 1/2 pouces", "10 pouces", "1/4 de pouce", "4 pouces"], answer: 0, why: "10 x 1/4 = 2 1/2 pouces." },
      { objective: "O3", q: "Exercice seulement : d'axe en axe, il y a 40 pouces et chaque cote est de 1 pouce. Quelle est la longueur de coupe ?", options: ["40 pouces", "39 pouces", "42 pouces", "38 pouces"], answer: 3, why: "40 - 1 - 1 = 38 pouces." },
      { objective: "O3", q: "Quel tuyau est un tube en plastique souple utilisé pour l'alimentation en eau ?", options: ["La fonte", "Le PEX", "L'ABS", "L'acier galvanisé"], answer: 1, why: "Le PEX est un tube souple pour les conduites d'eau chaude et froide." },
      { objective: "O3", q: "Que veut dire \"taille nominale\" pour un tuyau ?", options: ["Sa mesure extérieure exacte", "Son poids", "Une taille commerciale, pas une mesure exacte", "Son prix"], answer: 2, why: "Les tailles de tuyaux sont des noms commerciaux ; les vraies mesures intérieure et extérieure sont différentes." },
      { objective: "O2", q: "Selon le BLS, quelle est une blessure courante en plomberie ?", options: ["Des brûlures avec des tuyaux chauds et du matériel de soudure", "Des coups de soleil à cause des écrans", "La fatigue des yeux à force de lire", "Une perte d'audition à cause de la musique"], answer: 0, why: "Le BLS cite les coupures, les brûlures avec des tuyaux chauds et du matériel de soudure, et les chutes d'échelle." },
      { objective: "O2", q: "Vous réparez une fuite dans un sous-sol mouillé, près d'une prise électrique. Quel est le bon choix ?", options: ["Rester dans l'eau pour aller plus vite", "Rester loin des fils électriques quand vous êtes dans l'eau et demander à votre responsable de couper le courant", "Utiliser une perceuse à fil dans l'eau", "Toucher la prise pour voir si elle marche"], answer: 1, why: "L'électricité et l'eau forment un mélange mortel : restez à l'écart et faites d'abord régler la question du courant." },
      { objective: "O2", q: "Pourquoi se laver les mains après avoir débouché une évacuation, même avec des gants ?", options: ["Pour faire briller le tuyau", "C'est seulement une habitude", "Les gants sont interdits", "Les eaux d'égout contiennent des microbes qui peuvent rendre malade"], answer: 3, why: "Les gants aident, mais le lavage enlève les microbes avant de manger ou de toucher votre visage." },
      { objective: "O4", q: "Quel est le schéma sûr pour une réparation simple ?", options: ["Réparer d'abord, puis couper l'eau", "Couper, faire tomber la pression, protéger la zone, réparer, rouvrir doucement, vérifier les fuites", "Ouvrir l'eau à fond, puis réparer", "Vérifier les fuites avant de commencer, puis partir"], answer: 1, why: "Chaque réparation simple commence par couper l'eau et se termine par une vérification des fuites." },
      { objective: "O4", q: "Après avoir coupé l'eau d'un évier, pourquoi ouvrir le robinet avant de retirer un flexible ?", options: ["Pour faire tomber la pression et que l'eau ne gicle pas", "Pour chauffer le tuyau", "Pour tester la ventilation", "Pour remplir le siphon"], answer: 0, why: "Ouvrir le robinet vide la pression qui reste dans la conduite." },
      { objective: "O4", q: "Un évier s'écoule lentement. Qu'essayez-vous d'abord ?", options: ["Couper le tuyau d'évacuation", "Demander un permis", "Une ventouse", "Fermer l'arrivée principale de gaz"], answer: 2, why: "La ventouse est la première étape simple avant de démonter le siphon." },
      { objective: "O4", q: "Une goutte de colorant alimentaire mise dans le réservoir des toilettes apparaît dans la cuvette sans tirer la chasse. Qu'est-ce que cela vous apprend ?", options: ["La ventilation est bouchée", "Le chauffe-eau est en panne", "Le siphon est vide", "Le clapet fuit encore"], answer: 3, why: "Si la couleur arrive dans la cuvette sans tirer la chasse, l'eau passe au niveau du clapet." },
      { objective: "O5", q: "Ce cours va :", options: ["Vous donner une licence de plombier", "Compter comme votre apprentissage", "Vous préparer à vous former et à postuler ; il ne donne pas de licence", "Remplacer l'examen de votre État"], answer: 2, why: "Les licences sont délivrées par l'État ou la ville après l'expérience et l'examen qu'ils exigent." },
      { objective: "O5", q: "Quel site gratuit peut vous aider à trouver des apprentissages en plomberie près de chez vous ?", options: ["Une publicité qui s'affiche toute seule", "apprenticeship.gov", "Un forum d'emploi au hasard", "Les commentaires d'une vidéo"], answer: 1, why: "Apprenticeship.gov est le site du ministère du Travail des États-Unis, avec un outil de recherche d'apprentissages (Apprenticeship Job Finder)." },
      { objective: "O5", q: "Que dit le BLS sur les licences de plombier ?", options: ["La plupart des États et certaines collectivités locales les exigent, souvent après 2 à 5 ans d'expérience et un examen", "Aucun État n'en exige", "Seuls les plombiers des grandes villes en ont besoin", "On en reçoit une en achetant des outils"], answer: 0, why: "Le BLS dit que la plupart des États et certaines collectivités locales délivrent une licence aux plombiers, souvent avec de l'expérience et un examen." },
      { objective: "O5", q: "Une école promet une formation rapide en plomberie. Quelle question vous aide le plus avant de payer ?", options: ["Le bâtiment est-il neuf ?", "De quelle couleur sont les t-shirts ?", "Puis-je commencer un lundi ?", "Est-ce que cela mène à un apprentissage ou à un emploi, et les heures comptent-elles pour la licence de mon État ?"], answer: 3, why: "Une bonne formation mène à un emploi et compte pour les règles de licence du lieu où vous vivez." },
      { objective: "O5", q: "Quelle étape du plan est complète ?", options: ["\"Appeler le syndicat local des plombiers au sujet de l'apprentissage en plomberie avant le 10 avril, après avoir lu la page des licences de l'État\"", "\"Apprendre la plomberie\"", "\"Postuler quelque part bientôt\"", "\"Penser à une licence\""], answer: 0, why: "Elle dit l'action, qui, quand, et la source officielle à vérifier d'abord." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  // test de départ : ces questions du quiz, avant la leçon 1, pour que le quiz montre les progrès de chaque apprenant
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 4, 5, 8, 10, 11, 14, 16, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Croquis de l'alimentation et de l'évacuation", objective: "O1", notYet: "Des pièces manquent, ou les flèches vont dans le mauvais sens.", meets: "Alimentation chaude et froide, robinets d'arrêt, siphon, évacuation et ventilation sont indiqués, avec des flèches dans le bon sens.", exceeds: "Montre aussi où se trouve le robinet d'arrêt principal et explique en une phrase pourquoi le siphon et la ventilation sont importants." },
      { name: "Calculs de plomberie", objective: "O3", notYet: "Les longueurs de coupe ou la pente contiennent des erreurs, ou les calculs ne sont pas montrés.", meets: "Deux longueurs de coupe et une pente d'évacuation, au moins 4 exercices justes sur 5, calculs détaillés.", exceeds: "Tout est juste, et l'apprenant explique d'où viennent les vraies cotes d'emboîtement et les vraies pentes." },
      { name: "Liste des dangers", objective: "O2", notYet: "Moins de cinq dangers, ou la protection ne correspond pas au danger.", meets: "Au moins cinq dangers, chacun associé à un geste sûr ou au bon équipement.", exceeds: "Indique aussi quoi faire en cas d'odeur de gaz et quand s'arrêter pour demander à un responsable." },
      { name: "Ordre sûr de la réparation", objective: "O4", notYet: "Une réparation commence sans couper l'eau ou se termine sans vérification des fuites.", meets: "Les deux réparations sont dans un ordre sûr, de la coupure de l'eau à la vérification des fuites.", exceeds: "Nomme aussi les travaux qui reviennent à un plombier titulaire d'une licence, et pourquoi." },
      { name: "Plan daté à partir de sources officielles", objective: "O5", notYet: "Les étapes n'ont pas de date, ou les règles de licence viennent de publicités ou de publications.", meets: "Au moins cinq étapes datées, deux vrais apprentissages ou programmes, et les règles de licence tirées de la page officielle, avec son adresse web.", exceeds: "Comprend aussi un poste d'aide auquel postuler en attendant et des questions à poser à chaque programme." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui postulent à un apprentissage ou à une formation en plomberie dans les 90 jours",
      "Apprenants admis en apprentissage ou embauchés comme aides-plombiers dans les 6 mois",
      "Apprenants qui restent dans leur apprentissage ou leur poste d'aide au moins 6 mois (déclaré lors du suivi)",
      "Les programmes partenaires indiquent que les candidats arrivent en connaissant les pièces, les mots, les calculs et les règles de sécurité de base"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec internet pour lire les pages du BLS, de l'OSHA, de l'EPA, d'apprenticeship.gov et des licences de l'État",
      "Du papier, un stylo, un mètre ruban ou une règle et une calculatrice (celle du téléphone suffit)",
      "Facultatif : un évier ou des toilettes à observer (ne démontez jamais rien pour ce cours), ou des photos d'un siphon d'évier et de raccords",
      "Facultatif, pour les programmes : des morceaux de tuyau et des raccords (PVC, PEX, cuivre) à faire circuler, sans outils ni chalumeau"
    ],
    facilitatorNotes: [
      "Ce cours enseigne des connaissances, des étapes et la sécurité. Ne faites pas souder, couper des tuyaux ni travailler sur de l'eau, du gaz ou des évacuations en service dans le cadre de ce cours ; les gestes pratiques s'apprennent dans un atelier encadré, avec un formateur qualifié.",
      "Avant la séance, cherchez la page des licences de plomberie de votre État et les apprentissages proches, pour que les apprenants puissent les consulter ensemble.",
      "Entraînez-vous au tableau aux calculs de longueur de coupe et de pente avec plusieurs exemples inventés ; beaucoup d'apprenants ont besoin d'aide avec les fractions.",
      "Invitez un plombier local, un coordinateur de formation syndical ou un parrain d'apprentissage à parler d'une journée type et de la façon de postuler.",
      "Demandez aux apprenants qui ont un casier judiciaire de se renseigner auprès de l'organisme des licences sur l'examen des casiers avant de payer une formation.",
      "Évaluez la tâche finale avec la grille et donnez un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
