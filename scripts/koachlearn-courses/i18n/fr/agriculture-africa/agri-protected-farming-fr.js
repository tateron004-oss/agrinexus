"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-protected-farming.js). See scripts/koachlearn-courses/README.md, "Translations".

const FAO_GAP_GH = { name: "FAO : Bonnes pratiques agricoles pour les cultures légumières sous serre : principes pour les zones à climat méditerranéen (Étude FAO Production végétale et protection des plantes 217)", url: "https://www.fao.org/agriculture/crops/publications/detail/en/item/276049/icode/" };
const NORDEY_REVIEW = { name: "Nordey et coll. (2017) : La culture protégée des légumes en Afrique subsaharienne : limites et perspectives pour les petits producteurs. Une revue (Agronomy for Sustainable Development)", url: "https://publications.cirad.fr/une_notice.php?dk=585832" };
const ICIPE_TUTA = { name: "icipe : Insecte du mois : la mineuse de la tomate, Tuta absoluta", url: "https://www.icipe.org/news/insect-month-february-tomato-leafminer-tuta-absoluta" };
const PCPB = { name: "Pest Control Products Board (PCPB, office des produits phytosanitaires du Kenya)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "National Agency for Food and Drug Administration and Control (NAFDAC, agence de contrôle des aliments et des médicaments du Nigeria)", url: "https://www.nafdac.gov.ng" };
const GHANA_EPA = { name: "Environmental Protection Authority (EPA, autorité de protection de l'environnement du Ghana)", url: "https://www.epa.gov.gh" };
const KEPHIS = { name: "Kenya Plant Health Inspectorate Service (KEPHIS) : semences et plants certifiés", url: "https://www.kephis.go.ke" };

module.exports = {
  id: "agri-protected-farming-fr",
  lang: "fr",
  translationOf: "agri-protected-farming",
  category: "Agriculture (Africa)",
  name: "Serres et cultures protégées pour les cultures à forte valeur",
  skills: "Décider quand la culture protégée est rentable, Comparer serres, ombrières et tunnels et vérifier les promesses des vendeurs, Produire des plants et planifier la fertigation au goutte-à-goutte, Gérer la chaleur, l'humidité, les ravageurs et l'hygiène, Écrire un dossier de rentabilité avec le délai de remboursement",
  outcome: "écrire un dossier de rentabilité pour produire une culture à forte valeur (tomate, poivron ou concombre) sous serre, sous ombrière ou sous tunnel dans votre exploitation : si cela convient à votre eau, à votre marché et à vos compétences, la structure et trois devis, un plan de culture et de fertigation, une routine contre les ravageurs et pour l'hygiène, et les coûts, les recettes, la marge brute et le délai de remboursement.",
  about: [
    "Ce cours s'adresse aux petits producteurs et aux producteurs commerciaux en croissance, aux jeunes agripreneurs, aux groupements de jeunes et de femmes et aux agents de vulgarisation qui pensent à une serre, une ombrière ou un tunnel, ou qui en ont déjà un qui ne rapporte pas. Les exemples portent sur la tomate, le poivron et le concombre au Kenya, au Nigeria, au Ghana et au Sénégal.",
    "Le chapitre 1 vous aide à décider et à vous installer : quand la culture protégée est rentable et quand elle ne l'est pas, les principales structures et comment comparer les devis, comment repérer les vendeurs qui promettent trop, et comment choisir une culture et produire des plants sains. Le chapitre 2 porte sur la gestion comme une entreprise : les bases de la fertigation au goutte-à-goutte, la gestion de la chaleur, de l'humidité, des maladies et des ravageurs, la propreté de la structure, et la rédaction d'un dossier de rentabilité avec le délai de remboursement.",
    "Une serre est un gros investissement, et beaucoup sont restées vides parce que les chiffres, l'eau ou le marché n'ont pas suivi. Chaque montant d'argent de ce cours est un exemple inventé pour s'exercer au calcul ; utilisez vos propres devis et les prix de votre marché, et parlez à un agronome, à votre agent de vulgarisation et à un conseiller de confiance avant de signer ou de payer. Un court contrôle rapide suit chaque leçon, un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Écrivez un dossier de rentabilité en culture protégée pour une culture de votre propre exploitation : vos réponses aux cinq conditions « est-ce rentable ? » (eau, marché, compétences, capital, climat), la structure que vous utiliseriez avec au moins trois devis comparés et les vérifications du vendeur faites, la culture et la variété, un plan de pépinière et de fertigation établi avec un agronome, une routine hebdomadaire pour les ravageurs, le climat et l'hygiène, et les coûts, le rendement attendu, les recettes, la marge brute par cycle, le délai de remboursement, et ce que devient ce délai si le prix baisse d'un quart.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Petits producteurs et producteurs commerciaux en croissance, jeunes agripreneurs, groupements de jeunes et de femmes et agents de vulgarisation en Afrique qui envisagent, ou ont déjà, une serre, une ombrière ou un tunnel pour la tomate, le poivron, le concombre ou d'autres légumes à forte valeur.",
    startingPoint: "Ils ont cultivé des légumes en plein champ. Certains se sont vu proposer un kit de serre avec de grandes promesses de rendement ; d'autres en possèdent une qui a eu des problèmes de ravageurs, de maladies ou de marché. Peu ont comparé des devis, planifié la fertigation ou calculé le délai de remboursement.",
    gap: "La culture protégée peut donner des rendements plus élevés, plus propres et plus réguliers, mais elle coûte cher au départ, demande des compétences et une eau fiable, retient la chaleur et les maladies, et n'est rentable qu'avec un marché régulier. Les apprenants doivent décider si elle leur convient, choisir et vérifier une structure, bien conduire la culture et prouver avec des chiffres qu'elle peut être remboursée avant que la couverture soit usée.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; beaucoup d'apprenants ont l'anglais ou le français comme seconde langue",
      "Calcul : opérations simples avec la calculatrice du téléphone ; chaque calcul est montré étape par étape",
      "Argent : tous les chiffres sont des exemples inventés ; les apprenants utilisent leurs propres devis et prix dans leur monnaie locale (KES, NGN, GHS ou XOF)",
      "Sécurité : pas de recettes d'engrais, pas de produits ni de doses de pesticides ; les apprenants travaillent avec un agronome et suivent les étiquettes et l'autorité nationale",
      "Finances : pas de conseil en investissement ; les apprenants lisent les contrats en entier et demandent l'avis d'un conseiller de confiance avant de payer"
    ],
    prerequisites: "Aucun. « Irrigation et gestion de l'eau » (goutte-à-goutte et pompes) et « Lutte intégrée et lutte biologique contre les ravageurs » sont utiles en même temps que ce cours."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "Pour votre propre exploitation", action: "vérifier les cinq conditions de la culture protégée (eau, marché, compétences, capital et climat) et décider de vous lancer ou non", standard: "en donnant un oui ou un non pour chacune, avec une raison" },
    { id: "O2", condition: "Au moment de choisir une structure", action: "comparer des devis de serre, d'ombrière ou de tunnel et vérifier les promesses de chaque vendeur", standard: "avec au moins trois devis, en demandant des références et une garantie écrite" },
    { id: "O3", condition: "Pour une culture de votre choix", action: "planifier avec un agronome la variété, la pépinière, le repiquage et la fertigation au goutte-à-goutte", standard: "sous forme de plan daté pour un cycle de culture" },
    { id: "O4", condition: "Une fois la culture en place", action: "appliquer une routine quotidienne et hebdomadaire pour la chaleur, l'humidité, les ravageurs et l'hygiène", standard: "en couvrant chaque semaine les ouvrants, la surveillance, les pièges et les règles d'entrée" },
    { id: "O5", condition: "À partir de vos devis et des prix du marché", action: "calculer le coût, les recettes, la marge brute et le délai de remboursement de la culture", standard: "et tester ce qui se passe si le prix baisse d'un quart" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Décider et s'installer",
      lessons: [
        {
          title: "Quand la culture protégée est rentable, et quand elle ne l'est pas",
          objectives: ["O1"],
          minutes: 5,
          goal: "Vérifier les cinq conditions de la culture protégée dans votre exploitation et décider de vous lancer ou non.",
          text: [
            "La culture protégée, c'est cultiver sous une couverture : une serre avec un film plastique et un filet anti-insectes, une ombrière, ou un tunnel bas ou haut. Bien conduite, elle protège des fortes pluies, de la grêle et de beaucoup d'insectes, réduit certaines maladies, et donne des rendements plus élevés, plus propres et plus réguliers de cultures à forte valeur comme la tomate, le poivron et le concombre.",
            "Elle ne convient pas à tout le monde. Une revue de 2017 sur la culture protégée en Afrique subsaharienne a montré qu'elle ne convient pas à tous les climats et qu'elle demande quand même d'autres moyens de lutte contre les ravageurs, et que le manque de compétences, d'appui technique et de financement arrête beaucoup de petits producteurs. Beaucoup de serres au Kenya, au Nigeria et au Ghana restent vides après une ou deux cultures.",
            "Vérifiez cinq conditions avant de dépenser de l'argent. Eau : une source fiable et propre toute l'année, car la culture ne reçoit pas de pluie. Marché : des acheteurs qui prennent vos produits chaque semaine à un prix juste, comme un hôtel, un supermarché, une école ou des commerçants du marché, pas seulement « le marché ». Compétences : vous ou un ouvrier formé à la fertigation, à la taille et à la surveillance, et un agronome que vous pouvez appeler. Capital : de l'argent pour la structure, la première culture et quelques mois de charges, sans mettre en danger la nourriture de votre famille. Climat : dans les basses terres très chaudes, une serre fermée peut surchauffer, donc une ombrière ou un modèle bien aéré peut mieux convenir."
          ],
          steps: ["Eau : y a-t-il une source fiable et propre toute l'année ?", "Marché : qui achètera chaque semaine, et à quel prix ?", "Compétences : qui s'occupera de la fertigation, de la taille et de la surveillance, et quel agronome pouvez-vous appeler ?", "Capital : pouvez-vous payer la structure, la première culture et les charges sans toucher à l'argent de la nourriture ?", "Climat : une structure fermée va-t-elle surchauffer chez vous ?", "Décidez : se lancer, commencer plus petit, ou pas encore."],
          words: [["Culture protégée", "cultiver sous une couverture comme une serre, une ombrière ou un tunnel."], ["Serre", "une armature couverte d'un film plastique et d'un filet anti-insectes, avec des ouvrants pour l'air."], ["Ombrière", "un filet qui coupe une partie du soleil et de la chaleur et arrête certains insectes et oiseaux."], ["Tunnel", "une armature arrondie couverte de plastique ou de filet ; les tunnels bas couvrent une planche, les tunnels hauts couvrent une parcelle."]],
          slides: [
            { title: "Ce que la protection peut faire", bullets: ["Protège des fortes pluies, de la grêle et de beaucoup d'insectes", "Rendements plus élevés, plus propres et plus réguliers", "Idéal pour les cultures à forte valeur"] },
            { title: "Elle ne convient pas à tout le monde", bullets: ["Pas adaptée à tous les climats (revue, 2017)", "Demande quand même d'autres moyens de lutte", "Compétences, appui et financement : les grands obstacles"] },
            { title: "Cinq conditions", bullets: ["De l'eau toute l'année", "Un acheteur chaque semaine", "Des compétences et un agronome", "Du capital et le bon climat"] },
            { title: "Votre décision", bullets: ["Se lancer", "Commencer plus petit (tunnel ou ombrière)", "Pas encore : réglez d'abord la condition qui manque"] }
          ],
          sources: [NORDEY_REVIEW, FAO_GAP_GH],
          tryIt: "Écrivez les cinq conditions et répondez à chacune pour votre exploitation par oui ou non, avec une raison. Puis écrivez votre décision : se lancer, commencer plus petit ou pas encore, et ce qu'il faudrait changer.",
          youCanNow: "vérifier les cinq conditions de la culture protégée et décider si elle convient à votre exploitation maintenant.",
          quickCheck: [
            { objective: "O1", q: "Quel est le signe le plus fort que vous êtes prêt pour une serre ?", options: ["Un vendeur dit qu'elle est remboursée en trois mois", "Votre voisin en a acheté une", "Vous avez de l'eau toute l'année et un acheteur qui prend des tomates chaque semaine", "Vous avez vu des photos sur internet"], answer: 2, why: "Une eau fiable et un acheteur régulier sont deux des cinq conditions qui rendent la culture rentable." },
            { objective: "O1", q: "Vous cultivez dans une zone de basse terre très chaude. Que devez-vous vérifier d'abord ?", options: ["Si une serre fermée va surchauffer, et si une ombrière convient mieux", "Seulement la couleur du plastique", "Rien ; la chaleur est bonne pour toutes les cultures", "Si vous pouvez cultiver sans eau"], answer: 0, why: "Les structures fermées retiennent la chaleur ; dans les zones chaudes, l'aération ou les ombrières peuvent mieux convenir." }
          ]
        },
        {
          title: "Serres, ombrières et tunnels : choix, coûts et vendeurs",
          objectives: ["O2"],
          minutes: 6,
          goal: "Comparer au moins trois devis de structure et vérifier les promesses de chaque vendeur.",
          text: [
            "Les principaux choix : une serre (armature en bois ou en acier, avec un film plastique traité anti-UV sur le toit et un filet anti-insectes sur les côtés) protège le plus et coûte le plus. Une ombrière coûte moins, reste plus fraîche et convient aux zones chaudes et à des cultures comme le poivron et les légumes-feuilles, mais ne protège pas de la pluie. Les tunnels hauts ou bas sont le moyen le moins cher de commencer et d'apprendre. L'acier dure plus longtemps que le bois mais coûte plus ; le bois traité peut convenir si les termites sont maîtrisés. Le film plastique s'use après quelques années : demandez donc combien de temps sa protection anti-UV est garantie.",
            "Les coûts varient beaucoup selon la taille, le matériau, le pays et ce qui est compris : demandez donc au moins trois devis écrits pour la même taille et comparez-les ligne par ligne : armature, film et filet, portes, système goutte-à-goutte, citerne, pépinière, installation, formation et visites après-vente. Par exemple (chiffres inventés, seulement pour montrer la méthode), le devis A de KES 380 000 peut comprendre le goutte-à-goutte et la formation alors que le devis B de KES 300 000 ne les comprend pas : B n'est donc pas vraiment moins cher.",
            "Méfiez-vous des vendeurs qui promettent trop. Signaux d'alerte : rendements ou revenus garantis, « remboursé en une saison », une promesse de « rachat » sans contrat écrit, une pression pour verser un gros acompte aujourd'hui, aucun producteur à visiter, pas de garantie écrite, et des kits vendus sans formation ni plan pour l'eau. Demandez à visiter deux producteurs qui utilisent la structure du vendeur depuis au moins deux saisons. Faites mettre par écrit la garantie, la date de livraison et ce qui est compris, lisez tout le contrat et demandez l'avis d'un conseiller de confiance avant de payer."
          ],
          steps: ["Choisissez la taille que vous pouvez gérer et arroser.", "Demandez à au moins trois vendeurs des devis écrits pour la même taille.", "Comparez ligne par ligne : armature, film, filet, goutte-à-goutte, citerne, pépinière, installation, formation, après-vente.", "Demandez des références à chaque vendeur et visitez deux producteurs qui utilisent sa structure.", "Faites mettre par écrit la garantie, la date de livraison et le contenu ; lisez tout et demandez l'avis d'un conseiller."],
          words: [["Film traité anti-UV", "un plastique de serre fait pour résister aux rayons ultraviolets du soleil, pour durer plus longtemps."], ["Filet anti-insectes", "un filet fin sur les côtés et les ouvrants qui arrête beaucoup d'insectes mais laisse passer l'air."], ["Devis", "un prix écrit d'un vendeur qui montre exactement ce qui est compris."], ["Garantie", "une promesse écrite du vendeur de réparer ou remplacer les pièces qui lâchent dans un délai fixé."]],
          slides: [
            { title: "Les choix", bullets: ["Serre : la plus protectrice, la plus chère", "Ombrière : plus fraîche, moins chère, pas d'abri contre la pluie", "Tunnels : le moins cher pour commencer et apprendre"] },
            { title: "Comparer trois devis", bullets: ["Même taille, par écrit, ligne par ligne", "Armature, film, filet, goutte-à-goutte, citerne, pépinière", "Installation, formation, après-vente"] },
            { title: "Signaux d'alerte", bullets: ["Rendements garantis ou « remboursé en une saison »", "Promesses de rachat sans contrat", "Pression pour verser un acompte aujourd'hui"] },
            { title: "Se protéger", bullets: ["Visiter deux producteurs qui l'utilisent depuis 2 saisons ou plus", "Garantie et contenu par écrit", "Lire tout le contrat ; demander l'avis d'un conseiller"] }
          ],
          sources: [FAO_GAP_GH, NORDEY_REVIEW],
          tryIt: "Demandez à au moins trois vendeurs ou constructeurs près de chez vous des devis écrits pour la même taille de structure. Mettez-les dans un tableau, ligne par ligne, et marquez ce que chacun laisse de côté. Écrivez les questions que vous poserez à chaque vendeur, dont deux producteurs que vous pourrez visiter.",
          youCanNow: "comparer des devis de structure ligne par ligne et vérifier les promesses d'un vendeur avant de payer.",
          quickCheck: [
            { objective: "O2", q: "Un vendeur vous garantit 10 tonnes de tomates et un remboursement en une saison, si vous versez un acompte aujourd'hui. Que faites-vous ?", options: ["Payer tout de suite avant la fin de l'offre", "Payer la moitié et décider plus tard", "Signer sans lire", "Y voir un signal d'alerte, demander des références et des conditions écrites, et comparer des devis"], answer: 3, why: "Les rendements garantis et la pression pour payer aujourd'hui sont des signes typiques de promesses exagérées." },
            { objective: "O2", q: "Le devis B est moins cher que le devis A mais ne comprend ni goutte-à-goutte ni formation. Qu'est-ce qui est vrai ?", options: ["B est clairement la meilleure affaire", "B peut coûter plus cher une fois ajouté ce qu'il laisse de côté", "Le goutte-à-goutte et la formation ne sont jamais nécessaires", "On ne peut pas comparer des devis"], answer: 1, why: "Comparez ligne par ligne ; ce qui manque doit être acheté à part." }
          ]
        },
        {
          title: "Choisir une culture et produire des plants sains",
          objectives: ["O3"],
          minutes: 5,
          goal: "Choisir une culture et une variété pour votre structure et planifier une pépinière propre et le repiquage.",
          text: [
            "Les cultures protégées les plus courantes sont la tomate, le poivron et le concombre. La tomate a le plus grand marché mais aussi le plus grand risque de ravageurs et de maladies, dont Tuta absoluta. Le poivron se vend bien aux hôtels et aux supermarchés, surtout en couleur, et met plus de temps à produire. Le concombre pousse vite et rapporte de l'argent rapidement. Choisissez d'abord selon votre acheteur : quelle culture, quelle couleur et quel calibre il prendra chaque semaine.",
            "Utilisez des variétés sélectionnées pour la serre. Beaucoup de tomates de serre sont à croissance indéterminée (elles continuent de pousser et sont palissées sur une ficelle pendant de nombreux mois), et beaucoup de concombres de serre font des fruits sans abeilles. Les semences de ces variétés peuvent être chères : achetez donc des semences certifiées et scellées chez un distributeur agréé (le KEPHIS certifie les semences au Kenya) et ne gardez pas de semences d'hybrides.",
            "Produisez les plants dans une pépinière propre : des plaques alvéolées avec un substrat propre (pas de la terre du champ), sous filet anti-insectes, avec un arrosage soigné. Beaucoup de producteurs achètent leurs plants chez un pépiniériste agréé, ce qui fait gagner du temps, mais la source doit être propre et sûre. Repiquez des plants vigoureux, sains et sans ravageurs à la fraîcheur du soir, à l'écartement donné par votre agronome, et arrosez-les tout de suite. Planifiez les dates : semis, repiquage, première récolte et dernière récolte, pour que votre acheteur reçoive les produits à temps."
          ],
          steps: ["Demandez à votre acheteur quelle culture, quelle couleur et quel calibre il prendra chaque semaine.", "Choisissez une variété de serre ; achetez des semences certifiées et scellées.", "Produisez les plants en plaques alvéolées avec un substrat propre sous filet anti-insectes, ou achetez-les chez un pépiniériste agréé.", "Repiquez le soir des plants vigoureux et sans ravageurs, à l'écartement de l'agronome.", "Écrivez les dates : semis, repiquage, première et dernière récolte."],
          words: [["Poivron", "piment doux ; vert, rouge, jaune ou orange."], ["Indéterminée", "un type de tomate qui continue de pousser et de produire pendant des mois ; on la palisse sur une ficelle."], ["Substrat", "un mélange propre (par exemple de la fibre de coco) utilisé à la place de la terre pour produire des plants."], ["Pépiniériste", "une entreprise qui produit et vend des plants."]],
          slides: [
            { title: "Choisir selon votre acheteur", bullets: ["Tomate : plus grand marché, plus de risque de ravageurs", "Poivron : hôtels et supermarchés ; démarrage plus lent", "Concombre : rapide, argent vite"] },
            { title: "Variétés de serre", bullets: ["Tomates indéterminées palissées sur ficelle", "Concombres qui font des fruits sans abeilles", "Semences certifiées et scellées ; pas de semences d'hybrides gardées"] },
            { title: "Des plants sains", bullets: ["Plaques, substrat propre, sous filet anti-insectes", "Ou un pépiniériste agréé et de confiance", "Repiquer sans ravageurs à la fraîcheur du soir"] },
            { title: "Planifier les dates", bullets: ["Semis, repiquage, première et dernière récolte", "Les caler sur les besoins hebdomadaires de l'acheteur"] }
          ],
          sources: [KEPHIS, ICIPE_TUTA],
          tryIt: "Demandez à un acheteur quelle culture, quelle couleur et quel calibre il prendrait chaque semaine. Choisissez votre culture et une variété de serre, et écrivez les dates de semis (ou d'achat des plants), de repiquage, de première récolte et de dernière récolte.",
          youCanNow: "choisir une culture protégée selon les besoins de votre acheteur et planifier des plants sains et le repiquage.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qui doit décider la première culture de votre serre ?", options: ["Ce que votre acheteur prendra chaque semaine", "La culture qui a le plus joli sachet de semences", "Ce que cultive le voisin", "La semence la moins chère"], answer: 0, why: "Un acheteur régulier est ce qui rend une culture protégée rentable." },
            { objective: "O3", q: "Où faut-il produire les plants pour la serre ?", options: ["Dans la terre du champ à côté de vieilles tomates", "Sous un arbre sans filet", "En plaques avec un substrat propre sous filet anti-insectes, ou chez un pépiniériste agréé", "N'importe où ; les ravageurs ne comptent pas dans une serre"], answer: 2, why: "Des plants sains empêchent les ravageurs et les maladies d'entrer dans la structure avec la culture." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Décider et s'installer",
        questions: [
          { objective: "O1", q: "Lequel n'est PAS une des cinq conditions de ce cours ?", options: ["De l'eau toute l'année", "Un acheteur chaque semaine", "Une serre de la couleur la plus vive", "Des compétences et un agronome"], answer: 2, why: "Les cinq conditions sont l'eau, le marché, les compétences, le capital et le climat." },
          { objective: "O1", q: "Pourquoi l'eau d'une serre doit-elle être fiable toute l'année ?", options: ["La culture sous couverture ne reçoit pas de pluie", "Le plastique doit être lavé chaque jour", "L'eau refroidit l'armature", "Ce n'est pas important"], answer: 0, why: "Sous une couverture, toute l'eau doit venir de votre source." },
          { objective: "O2", q: "Quelle structure reste la plus fraîche et convient aux zones chaudes, mais ne protège pas de la pluie ?", options: ["Une serre plastique fermée", "Une ombrière", "Un magasin en briques", "Un tunnel bas en plastique"], answer: 1, why: "Les ombrières coupent le soleil et la chaleur mais laissent passer la pluie." },
          { objective: "O2", q: "Quelle est la meilleure façon de vérifier les promesses d'un vendeur ?", options: ["Croire la brochure", "Payer d'abord, demander ensuite", "Demander seulement sur les réseaux sociaux", "Visiter deux producteurs qui utilisent sa structure depuis deux saisons ou plus"], answer: 3, why: "Les producteurs qui l'ont utilisée montrent ce qu'elle donne vraiment." },
          { objective: "O3", q: "Une tomate indéterminée :", options: ["Continue de pousser et de produire pendant des mois, palissée sur une ficelle", "Arrête de pousser après quelques semaines", "N'a jamais besoin de support", "Est une sorte de concombre"], answer: 0, why: "Les tomates indéterminées continuent de pousser, donc on les palisse sur des ficelles en serre." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Gérer comme une entreprise",
      lessons: [
        {
          title: "Les bases de la fertigation au goutte-à-goutte",
          objectives: ["O3"],
          minutes: 5,
          goal: "Décrire le fonctionnement d'un système de fertigation au goutte-à-goutte et planifier ses contrôles quotidiens avec un agronome.",
          text: [
            "La fertigation consiste à apporter l'engrais par le système goutte-à-goutte, dissous dans l'eau d'irrigation, pour que chaque plante reçoive chaque jour un peu de nourriture et d'eau à ses racines. Elle économise l'eau et l'engrais et garde les feuilles sèches, ce qui aide contre les maladies. Les systèmes goutte-à-goutte, les pompes et les solutions solaires sont enseignés dans « Irrigation et gestion de l'eau » ; cette leçon couvre ce qui change sous couverture.",
            "Un système simple comprend une citerne, un filtre, un moyen d'ajouter l'engrais (un bac de mélange ou un injecteur), des conduites principales et des gaines de goutte-à-goutte avec des goutteurs à chaque plante. N'utilisez que des engrais solubles faits pour la fertigation. La recette change avec la culture et son stade (plant, floraison, fructification) et avec votre eau et votre sol : demandez-la donc à un agronome, à une analyse du sol et de l'eau ou au service technique du fournisseur d'engrais. Ne devinez jamais, et ne mélangez jamais des produits dans le même bac sauf si l'agronome dit qu'ils peuvent être mélangés.",
            "Contrôlez le système chaque jour : le filtre est propre, chaque goutteur goutte, aucune gaine ne fuit, et la terre autour des plantes est humide, pas détrempée. Beaucoup de producteurs utilisent un conductimètre (mesure de la CE) bon marché pour vérifier que la force de l'engrais dans l'eau est celle fixée par l'agronome, ainsi qu'un pH-mètre ou des bandelettes. Rincez les gaines à l'eau propre comme conseillé, pour que les sels et l'engrais ne bouchent pas les goutteurs. Notez chaque jour l'eau et l'engrais apportés."
          ],
          steps: ["Obtenez un plan d'alimentation par stade de culture auprès d'un agronome ou grâce à une analyse du sol et de l'eau.", "N'utilisez que des engrais solubles pour la fertigation ; mélangez seulement comme conseillé.", "Chaque jour : filtre propre, vérifiez que les goutteurs gouttent et que les gaines ne fuient pas.", "Vérifiez la force avec un conductimètre et le pH selon les valeurs fixées par l'agronome.", "Rincez les gaines comme conseillé ; notez l'eau et l'engrais chaque jour."],
          words: [["Fertigation", "apporter de l'engrais dissous dans l'eau d'irrigation par un système goutte-à-goutte."], ["Goutteur", "la petite sortie sur une gaine de goutte-à-goutte qui libère l'eau à chaque plante."], ["Conductimètre (CE)", "un petit appareil qui mesure la quantité d'engrais dissous (de sel) dans l'eau ; CE veut dire conductivité électrique."], ["Rinçage", "faire passer de l'eau propre dans les gaines pour enlever les sels et les bouchons."]],
          slides: [
            { title: "Ce qu'est la fertigation", bullets: ["De l'engrais dissous dans l'eau du goutte-à-goutte", "Un peu de nourriture et d'eau aux racines chaque jour", "Économise l'eau et garde les feuilles sèches"] },
            { title: "Les éléments", bullets: ["Citerne, filtre, bac de mélange ou injecteur", "Conduite principale et gaines avec goutteurs", "Seulement des engrais solubles"] },
            { title: "La recette", bullets: ["Change avec le stade, l'eau et le sol", "D'un agronome ou d'une analyse de l'eau et du sol", "Ne devinez jamais ; mélangez seulement comme conseillé"] },
            { title: "Contrôles quotidiens", bullets: ["Filtre propre ; chaque goutteur goutte", "CE et pH selon l'agronome", "Rincez comme conseillé ; notez-le"] }
          ],
          sources: [FAO_GAP_GH],
          tryIt: "Dessinez votre système de fertigation au goutte-à-goutte, de la citerne aux plantes, et nommez chaque élément. Puis écrivez une liste de contrôle quotidienne (filtre, goutteurs, fuites, CE, pH, humidité du sol, fiche) et les questions que vous poserez à votre agronome sur le plan d'alimentation pour chaque stade de la culture.",
          youCanNow: "décrire un système de fertigation au goutte-à-goutte, planifier son alimentation avec un agronome et faire ses contrôles quotidiens.",
          quickCheck: [
            { objective: "O3", q: "D'où doit venir votre recette de fertigation ?", options: ["D'une supposition d'après la couleur des feuilles", "D'un agronome, d'une analyse du sol et de l'eau ou du service technique du fournisseur", "De la même recette pour toutes les cultures et tous les stades", "De ce qui est le moins cher cette semaine"], answer: 1, why: "La recette dépend de la culture, du stade, de l'eau et du sol : elle doit donc venir d'un conseil d'expert." },
            { objective: "O3", q: "Plusieurs plantes flétrissent alors que les autres vont bien. Que vérifiez-vous d'abord ?", options: ["Si leurs goutteurs sont bouchés et si le filtre est propre", "Ajouter plus d'engrais dans le bac", "Enlever le filet anti-insectes", "Arroser par-dessus avec un tuyau"], answer: 0, why: "Des goutteurs bouchés sont une raison courante pour laquelle certaines plantes ne reçoivent ni eau ni engrais." }
          ]
        },
        {
          title: "Gérer la chaleur, l'humidité, les ravageurs et l'hygiène",
          objectives: ["O4"],
          minutes: 6,
          goal: "Appliquer une routine quotidienne et hebdomadaire pour la chaleur, l'humidité, les ravageurs et l'hygiène dans votre structure.",
          text: [
            "La chaleur et l'humidité sont les plus gros problèmes de tous les jours sous couverture en zone tropicale. Une serre fermée peut devenir beaucoup plus chaude que l'extérieur, et l'air chaud, immobile et humide amène des maladies dues à des champignons comme le mildiou et la pourriture grise. Ouvrez les ouvrants latéraux et de toit le matin et fermez-les le soir si besoin, gardez les feuilles sèches en arrosant seulement au goutte-à-goutte, taillez les vieilles feuilles du bas et les gourmands pour que l'air circule, et ne plantez pas trop serré. Une ombrière sur le toit pendant les mois les plus chauds peut aider. Gardez un thermomètre bon marché à l'intérieur et notez les relevés.",
            "Les filets anti-insectes arrêtent beaucoup de ravageurs, mais ceux qui entrent se multiplient vite sans pluie ni ennemis naturels pour les freiner : aleurodes, thrips, pucerons, acariens et, sur la tomate, Tuta absoluta. Dans le sol, les nématodes à galles sont un problème courant dans les serres utilisées depuis longtemps. Surveillez chaque ligne de plantes chaque semaine, accrochez des plaques jaunes engluées pour les aleurodes et les pucerons et des bleues pour les thrips, et utilisez des pièges à phéromones pour Tuta absoluta. Suivez les étapes de la lutte intégrée (IPM) ; s'il faut un pesticide, n'utilisez qu'un produit homologué pour votre culture (PCPB au Kenya, NAFDAC au Nigeria, EPA au Ghana), suivez l'étiquette et son délai avant récolte, et portez l'équipement de protection, car vous allez souvent cueillir dans un espace fermé.",
            "L'hygiène empêche les ravageurs et les maladies d'entrer. Utilisez une double porte pour qu'une porte soit toujours fermée, et un pédiluve à l'entrée. Limitez les visiteurs, et faites laver les mains aux ouvriers et porter des vêtements propres. Sortez dans un sac fermé les plantes malades et les feuilles et fruits tombés, gardez désherbée la zone autour de la structure, réparez tout de suite les trous du filet, et nettoyez les outils. Entre deux cultures, enlevez tous les déchets végétaux et nettoyez la structure avant de replanter."
          ],
          steps: ["Chaque matin : ouvrez les ouvrants ; lisez le thermomètre ; vérifiez s'il y a des feuilles mouillées.", "Chaque soir : fermez les ouvrants si besoin ; notez la température.", "Chaque semaine : surveillez chaque ligne ; comptez les captures des plaques engluées et des pièges à phéromones.", "Chaque semaine : taillez les feuilles du bas et les gourmands ; sortez les plantes malades et les déchets dans un sac fermé.", "Toujours : double porte fermée, pédiluve, peu de visiteurs, outils propres, trous du filet réparés."],
          words: [["Aération", "laisser l'air circuler dans la structure par les ouvrants pour baisser la chaleur et l'humidité."], ["Humidité", "la quantité de vapeur d'eau dans l'air ; une forte humidité favorise les maladies dues aux champignons."], ["Nématode à galles", "un minuscule ver du sol qui fait des renflements sur les racines et affaiblit les plantes."], ["Pédiluve", "un bac peu profond avec un désinfectant, à l'entrée, pour nettoyer les bottes."]],
          slides: [
            { title: "Chaleur et humidité", bullets: ["Ouvrir les ouvrants le matin, fermer si besoin", "Arroser seulement au goutte-à-goutte ; feuilles sèches", "Tailler feuilles du bas et gourmands ; ne pas planter trop serré"] },
            { title: "Ravageurs sous couverture", bullets: ["Aleurodes, thrips, pucerons, acariens", "Tuta absoluta sur la tomate", "Nématodes à galles dans les vieux sols"] },
            { title: "Surveiller et piéger", bullets: ["Surveiller chaque ligne chaque semaine", "Plaques jaunes : aleurodes, pucerons ; bleues : thrips", "Pièges à phéromones pour Tuta absoluta"] },
            { title: "Hygiène", bullets: ["Double porte et pédiluve", "Peu de visiteurs ; mains, vêtements et outils propres", "Sortir les déchets en sac fermé ; réparer le filet tout de suite"] }
          ],
          sources: [FAO_GAP_GH, ICIPE_TUTA, PCPB, NAFDAC, GHANA_EPA],
          tryIt: "Écrivez une routine d'une page pour votre structure : ce que vous faites chaque matin et chaque soir, ce que vous faites chaque semaine (surveillance, pièges, taille, déchets) et vos règles d'entrée (portes, pédiluve, visiteurs). Affichez-la sur la porte.",
          youCanNow: "appliquer une routine quotidienne et hebdomadaire pour la chaleur, l'humidité, les ravageurs et l'hygiène dans une structure protégée.",
          quickCheck: [
            { objective: "O4", q: "Il fait chaud et humide à l'intérieur et vous voyez la pourriture grise commencer. Qu'est-ce qui aide le plus ?", options: ["Mouiller les feuilles au tuyau", "Fermer tous les ouvrants toute la journée", "Mettre plus de plantes, plus serrées", "Ouvrir les ouvrants, garder les feuilles sèches et tailler les feuilles du bas pour l'air"], answer: 3, why: "L'air qui circule et les feuilles sèches freinent les maladies dues aux champignons." },
            { objective: "O4", q: "Pourquoi mettre une double porte à l'entrée de la serre ?", options: ["Pour faire moderne", "Pour qu'une porte soit toujours fermée et que moins d'insectes entrent", "Pour garder les ouvriers à l'intérieur", "Elle fait entrer plus de chaleur"], answer: 1, why: "Avec une porte toujours fermée, les insectes ne peuvent pas entrer directement en volant." }
          ]
        },
        {
          title: "Le dossier de rentabilité : marge brute et délai de remboursement",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calculer le coût, les recettes, la marge brute et le délai de remboursement d'une culture protégée.",
          text: [
            "Un dossier de rentabilité montre, avec des chiffres, si la structure peut se rembourser avant d'être usée. Il vous faut deux sortes de coûts. L'investissement est ce que vous payez une seule fois : la structure, le système goutte-à-goutte, la citerne et l'installation. Les charges de fonctionnement reviennent à chaque cycle de culture : semences ou plants, engrais, protection des cultures, main-d'œuvre, eau et énergie, transport, emballage et taxes de marché.",
            "Marge brute par cycle = recettes (kg vendus attendus x prix au kg) - charges de fonctionnement. Délai de remboursement = investissement / marge brute par an. Exemple inventé en KES, seulement pour s'exercer à la méthode : investissement KES 400 000 ; un cycle de tomates par an ; ventes attendues de 4 000 kg à KES 40 = KES 160 000 ; charges de fonctionnement KES 90 000 ; marge brute KES 70 000 par an. Délai de remboursement = 400 000 / 70 000 = environ 5,7 ans. Si le vendeur dit que le film dure environ 4 ans, ce dossier ne se rembourse pas avant que vous deviez le remplacer. C'est un signal d'alerte, pas une raison d'emprunter plus.",
            "Maintenant, testez-le. Si le prix baisse d'un quart (KES 30 au lieu de 40), les recettes tombent à KES 120 000, la marge à KES 30 000 et le délai de remboursement dépasse 13 ans. Les prix de la tomate varient beaucoup selon la saison : testez donc un mauvais prix, un rendement plus faible et une culture perdue. Cherchez ensuite des moyens de l'améliorer : une structure plus petite ou moins chère, un contrat avec un acheteur, deux cycles par an, une culture de plus forte valeur comme le poivron de couleur, ou un coût partagé en groupement. Le même calcul marche en NGN, en GHS ou en XOF : un producteur près de Dakar, au Sénégal, fait les mêmes calculs en francs CFA. Utilisez vos propres devis et prix, tenez de vraies fiches une fois lancé, et demandez l'avis d'un conseiller de confiance avant d'emprunter ou de signer."
          ],
          steps: ["Additionnez l'investissement à partir du devis choisi.", "Listez les charges de fonctionnement d'un cycle.", "Recettes = kg vendus attendus x prix au kg (de votre acheteur).", "Marge brute = recettes - charges de fonctionnement ; par an = marge x cycles par an.", "Délai de remboursement = investissement / marge brute par an ; comparez-le à la durée de vie du film.", "Testez une baisse de prix d'un quart, un rendement plus faible et une culture perdue."],
          words: [["Investissement", "l'argent payé une seule fois pour s'installer, comme la structure et le système goutte-à-goutte."], ["Charges de fonctionnement", "l'argent dépensé à chaque cycle de culture, comme les plants, l'engrais, la main-d'œuvre et le transport."], ["Marge brute", "les recettes moins les charges de fonctionnement, pour un cycle ou pour un an."], ["Délai de remboursement", "le temps qu'il faut à la marge brute pour rembourser l'investissement."]],
          slides: [
            { title: "Deux sortes de coûts", bullets: ["Investissement : structure, goutte-à-goutte, citerne, installation", "Charges : plants, engrais, main-d'œuvre, eau, transport"] },
            { title: "Les formules", bullets: ["Marge brute = recettes - charges de fonctionnement", "Remboursement = investissement / marge brute par an", "Le délai doit être plus court que la durée de vie du film"] },
            { title: "Exemple inventé (KES)", bullets: ["Investissement 400 000 ; marge 70 000 par an", "Remboursement en environ 5,7 ans", "Prix en baisse d'un quart : plus de 13 ans"] },
            { title: "Le rendre plus solide", bullets: ["Structure plus petite ou partagée en groupement", "Contrat avec un acheteur ; deux cycles par an", "Culture de plus forte valeur ; vraies fiches ; avis d'un conseiller"] }
          ],
          sources: [NORDEY_REVIEW],
          tryIt: "Tâche finale : écrivez votre dossier de rentabilité en culture protégée pour une culture : vos cinq conditions, la structure avec trois devis comparés et les vérifications du vendeur faites, la culture et la variété, votre plan de pépinière et de fertigation, votre routine hebdomadaire, et l'investissement, les charges de fonctionnement, les recettes, la marge brute, le délai de remboursement, et ce délai si le prix baisse d'un quart.",
          youCanNow: "calculer la marge brute et le délai de remboursement d'une culture protégée et le tester face à une baisse de prix.",
          quickCheck: [
            { objective: "O5", q: "L'investissement est de 300 000 et la marge brute de 100 000 par an. Quel est le délai de remboursement ?", options: ["1 an", "30 ans", "3 ans", "100 ans"], answer: 2, why: "300 000 / 100 000 = 3 ans." },
            { objective: "O5", q: "Votre délai de remboursement est de 6 ans mais le film dure environ 4 ans. Qu'est-ce que cela vous dit ?", options: ["Le dossier ne se rembourse pas à temps ; changez le plan ou n'investissez pas encore", "C'est bon ; empruntez plus", "Le délai de remboursement ne compte pas", "Achetez une deuxième serre"], answer: 0, why: "Si le film s'use avant le remboursement, vous perdez de l'argent sauf si le plan change." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Gérer comme une entreprise",
        questions: [
          { objective: "O3", q: "Qu'est-ce que la fertigation ?", options: ["Pulvériser un pesticide avec un tuyau", "Brûler les déchets végétaux", "Couvrir une serre de filet", "Apporter de l'engrais dissous dans l'eau du goutte-à-goutte"], answer: 3, why: "La fertigation nourrit les plantes par les gaines de goutte-à-goutte." },
          { objective: "O3", q: "Un conductimètre (CE) vous indique :", options: ["La température de l'air", "La quantité d'engrais dissous dans l'eau", "Le prix de la tomate", "Le nombre d'insectes sur une plaque"], answer: 1, why: "La CE mesure les sels dissous, ce qui montre la force de l'engrais." },
          { objective: "O4", q: "Quel ravageur est un risque particulier pour la tomate sous serre ?", options: ["Tuta absoluta", "Les criquets", "Les rats dans le grenier", "Les tiques du bétail"], answer: 0, why: "Tuta absoluta attaque les feuilles, les tiges et les fruits de la tomate et se multiplie vite sous couverture." },
          { objective: "O4", q: "Dans une serre, les plaques bleues engluées attrapent surtout :", options: ["Les aleurodes", "Les acariens", "Les thrips", "Les nématodes"], answer: 2, why: "Les thrips sont attirés par le bleu ; les aleurodes et les pucerons par le jaune." },
          { objective: "O5", q: "La marge brute, c'est :", options: ["Les recettes moins les charges de fonctionnement", "Le prix de la structure", "Le nombre de plantes", "Les recettes plus l'investissement"], answer: 0, why: "La marge brute montre ce qui reste des ventes après les charges de fonctionnement." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Serres et cultures protégées pour les cultures à forte valeur",
    questions: [
      { objective: "O1", q: "La culture protégée, c'est :", options: ["Cultiver seulement la nuit", "Cultiver sous une couverture comme une serre, une ombrière ou un tunnel", "Utiliser un chien de garde", "Cultiver sans eau"], answer: 1, why: "La couverture protège la culture de la pluie, de la grêle et de beaucoup d'insectes." },
      { objective: "O1", q: "Quelle situation d'acheteur soutient le mieux une serre ?", options: ["« Je vendrai au marché d'une façon ou d'une autre »", "Pas encore d'acheteur", "Un voisin en achètera peut-être", "Un hôtel accepte de prendre une quantité fixe chaque semaine"], answer: 3, why: "Un acheteur hebdomadaire régulier est une des cinq conditions." },
      { objective: "O1", q: "Une revue de 2017 sur la culture protégée en Afrique subsaharienne a montré que :", options: ["Elle ne convient pas à tous les climats et demande quand même d'autres moyens de lutte contre les ravageurs", "Elle supprime tous les ravageurs", "Elle ne demande aucune compétence", "Elle est toujours remboursée en une saison"], answer: 0, why: "La revue a trouvé des limites liées au climat, et que les compétences, l'appui et le financement sont des obstacles." },
      { objective: "O1", q: "Laquelle est une condition de capital ?", options: ["Posséder un tracteur", "Avoir une grande famille", "De l'argent pour la structure, la première culture et les charges sans toucher à l'argent de la nourriture", "Une serre de couleur vive"], answer: 2, why: "Il vous faut de l'argent pour l'installation et le fonctionnement sans mettre votre foyer en danger." },
      { objective: "O2", q: "Pourquoi comparer les devis ligne par ligne ?", options: ["Pour voir ce que chacun comprend et laisse de côté", "Pour choisir le devis le plus long", "Parce que les vendeurs aiment ça", "Cela ne sert à rien"], answer: 0, why: "Un devis moins cher peut laisser de côté le goutte-à-goutte, la formation ou l'installation." },
      { objective: "O2", q: "Lequel est un signal d'alerte venant d'un vendeur de serres ?", options: ["Une garantie écrite", "Des producteurs de référence que vous pouvez visiter", "Une liste claire de ce qui est compris", "Un rendement garanti et une pression pour payer aujourd'hui"], answer: 3, why: "Les garanties de rendement et la pression pour payer vite sont des signes de promesses exagérées." },
      { objective: "O2", q: "Quel choix est le moins cher pour commencer et apprendre ?", options: ["Une grande serre en acier", "Les tunnels hauts ou bas", "Une serre en verre", "Une chambre froide"], answer: 1, why: "Les tunnels coûtent le moins et vous permettent d'apprendre avant un plus gros investissement." },
      { objective: "O2", q: "Que faut-il avoir par écrit avant de payer ?", options: ["Seulement le numéro de téléphone du vendeur", "Rien ; la confiance suffit", "La garantie, la date de livraison et tout ce qui est compris", "Une photo du vendeur"], answer: 2, why: "Des conditions écrites vous protègent si quelque chose se passe mal." },
      { objective: "O3", q: "Beaucoup de variétés de concombre de serre :", options: ["Font des fruits sans abeilles", "Ont besoin d'abeilles à l'intérieur", "Ne poussent qu'en saison froide", "Se plantent par boutures"], answer: 0, why: "Beaucoup de concombres de serre sont sélectionnés pour faire des fruits sans pollinisation." },
      { objective: "O3", q: "Quel est le meilleur moment pour repiquer les plants ?", options: ["À midi en plein soleil", "Pendant une forte pluie dehors", "Avant que les plants aient des racines", "À la fraîcheur du soir, puis les arroser"], answer: 3, why: "La fraîcheur du soir réduit le choc du repiquage." },
      { objective: "O3", q: "Quels engrais utilise-t-on pour la fertigation ?", options: ["N'importe quel engrais en granulés", "Des engrais solubles faits pour la fertigation", "Du fumier frais", "De la chaux"], answer: 1, why: "Seuls les engrais complètement solubles passent dans les gaines sans les boucher." },
      { objective: "O4", q: "L'air chaud, immobile et humide sous couverture favorise surtout :", options: ["Les maladies dues aux champignons comme le mildiou et la pourriture grise", "Une pollinisation plus rapide", "Moins de ravageurs", "Des coûts plus bas"], answer: 0, why: "L'humidité et les feuilles mouillées aident les maladies dues aux champignons à se propager." },
      { objective: "O4", q: "Pourquoi les ravageurs qui entrent dans une serre peuvent-ils se multiplier vite ?", options: ["Le plastique les nourrit", "Ils sont toujours plus gros", "Les serres attirent la pluie", "À l'intérieur, il n'y a ni pluie ni beaucoup d'ennemis naturels pour les freiner"], answer: 3, why: "Sous couverture, il y a moins de freins naturels contre les ravageurs." },
      { objective: "O4", q: "Laquelle est une bonne règle d'hygiène ?", options: ["Laisser entrer librement des visiteurs d'autres exploitations", "Laisser les fruits tombés par terre", "Utiliser un pédiluve et garder toujours fermée une des deux portes", "Laisser des trous dans le filet pour l'air"], answer: 2, why: "Le pédiluve et la double porte empêchent les ravageurs et les maladies d'entrer." },
      { objective: "O4", q: "Si un pesticide est nécessaire dans une serre au Kenya, il doit être :", options: ["Homologué par le PCPB et utilisé comme le dit son étiquette, avec l'équipement de protection", "N'importe quel produit qu'a le voisin", "Mélangé plus fort parce qu'on est à l'intérieur", "Pulvérisé juste avant la cueillette"], answer: 0, why: "Seuls les produits homologués, utilisés comme le dit l'étiquette, sont légaux et sûrs." },
      { objective: "O5", q: "Lequel est un coût d'investissement ?", options: ["Les plants", "La main-d'œuvre pour la cueillette", "La structure de la serre et le système goutte-à-goutte", "Le transport au marché"], answer: 2, why: "L'investissement se paie une fois pour s'installer ; les autres sont des charges de fonctionnement." },
      { objective: "O5", q: "Investissement 500 000 ; marge brute 125 000 par an. Quel est le délai de remboursement ?", options: ["2 ans", "6 ans", "10 ans", "4 ans"], answer: 3, why: "500 000 / 125 000 = 4 ans." },
      { objective: "O5", q: "Recettes 200 000 et charges de fonctionnement 120 000. Quelle est la marge brute ?", options: ["320 000", "80 000", "120 000", "200 000"], answer: 1, why: "200 000 - 120 000 = 80 000." },
      { objective: "O5", q: "Pourquoi tester ce qui se passe si le prix baisse d'un quart ?", options: ["Parce que les prix des légumes varient et que vous devez savoir si vous pouvez encore rembourser", "Pour que les chiffres paraissent meilleurs", "Parce que les prix ne changent jamais", "Le vendeur l'exige"], answer: 0, why: "Un plan qui ne marche qu'au meilleur prix est risqué." },
      { objective: "O5", q: "Quel changement peut rendre plus solide un dossier de rentabilité faible ?", options: ["Emprunter plus pour acheter une serre plus grande", "Ignorer le délai de remboursement", "Choisir une culture sans acheteur", "Un contrat avec un acheteur, une structure plus petite ou deux cycles par an"], answer: 3, why: "Un investissement plus faible, des prix plus stables ou plus de cycles augmentent la marge ou raccourcissent le délai de remboursement." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [1, 2, 5, 6, 9, 10, 11, 13, 16] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie du dossier et revoyez-la avec un agronome ou un conseiller de confiance avant d'investir.",
    criteria: [
      { name: "Est-ce que ça me convient ?", objective: "O1", notYet: "Les cinq conditions manquent ou sont répondues sans raisons.", meets: "L'eau, le marché, les compétences, le capital et le climat ont chacun un oui ou un non avec une raison, et une décision claire est écrite.", exceeds: "Une condition qui manque a un plan pour être réglée, comme un acheteur nommé ou une analyse de l'eau." },
      { name: "Structure et vérification du vendeur", objective: "O2", notYet: "Un seul devis, ou les promesses d'un vendeur sont acceptées sans vérification.", meets: "Au moins trois devis comparés ligne par ligne, avec des références demandées, et la garantie et le contenu par écrit.", exceeds: "Deux producteurs de référence ont été visités et leurs vrais résultats sont notés." },
      { name: "Plan de culture et de fertigation", objective: "O3", notYet: "Pas de calendrier de culture, ou le plan d'alimentation est deviné.", meets: "Culture et variété choisies selon les besoins de l'acheteur, avec des dates de pépinière, de repiquage et de récolte, et un plan d'alimentation venant d'un agronome ou d'une analyse, avec des contrôles quotidiens du goutte-à-goutte.", exceeds: "Le plan comprend des valeurs cibles de CE et de pH fixées par l'agronome et une fiche de suivi quotidienne." },
      { name: "Routine climat, ravageurs et hygiène", objective: "O4", notYet: "Pas de routine, ou les ravageurs ne sont gérés que par des traitements.", meets: "Une routine quotidienne et hebdomadaire pour les ouvrants, la surveillance, les pièges, la taille, les déchets et les règles d'entrée, avec seulement des produits homologués utilisés comme le dit l'étiquette.", exceeds: "La routine est affichée sur la porte et a été suivie et notée pendant au moins deux semaines." },
      { name: "Chiffres et remboursement", objective: "O5", notYet: "Pas de chiffres, ou la marge brute ou le délai de remboursement est faux.", meets: "L'investissement, les charges, les recettes, la marge brute et le délai de remboursement sont justes, comparés à la durée de vie du film, et une baisse de prix d'un quart est testée.", exceeds: "Teste aussi un rendement plus faible et une culture perdue, et liste des changements qui rendraient le dossier plus solide." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui comparent au moins trois devis et visitent des producteurs de référence avant d'acheter une structure (enquête de suivi)",
      "Apprenants qui décident de ne pas encore investir, ou de commencer plus petit, parce que leur dossier ne se remboursait pas (un bon résultat, pas un échec)",
      "Apprenants équipés d'une structure qui disent suivre une routine hebdomadaire et perdre moins de cultures à cause des ravageurs ou des maladies après un cycle",
      "Apprenants qui indiquent leur vraie marge brute par cycle comparée à leur dossier de rentabilité"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone avec calculatrice, ou du papier, un stylo et une calculatrice simple",
      "Des devis écrits de vendeurs locaux de serres, d'ombrières ou de tunnels (les apprenants les réunissent pendant le cours)",
      "Les coordonnées d'un agronome ou d'un agent de vulgarisation et d'un acheteur avec qui l'apprenant peut parler",
      "En option : la visite d'une serre en activité, un thermomètre, des plaques engluées et un conductimètre à montrer au groupe",
      "Environ 60 à 90 minutes en tout pour les leçons, les contrôles rapides et les quiz, plus le temps de réunir les devis et de parler aux acheteurs"
    ],
    facilitatorNotes: [
      "Passez ensemble le test de départ, puis visitez si possible une serre ou une ombrière en activité, et interrogez le propriétaire sur les vrais coûts et problèmes.",
      "Rappelez aux apprenants que chaque montant d'argent du cours est un exemple inventé ; ils doivent utiliser leurs propres devis et les prix de leur acheteur.",
      "Ne recommandez ni vendeur de serres, ni produit, ni recette d'engrais ; apprenez plutôt aux apprenants à comparer et à vérifier.",
      "Considérez « pas encore » ou « commencer plus petit » comme un bon résultat si les chiffres ne marchent pas ; cela évite des dettes aux familles.",
      "Ne recommandez jamais un pesticide ni une dose ; montrez aux apprenants comment consulter la liste de l'autorité et lire une étiquette.",
      "Notez chaque dossier de rentabilité avec la grille et vérifiez chaque calcul avec l'apprenant avant qu'il parle à un prêteur ou à un vendeur."
    ]
  }
};
