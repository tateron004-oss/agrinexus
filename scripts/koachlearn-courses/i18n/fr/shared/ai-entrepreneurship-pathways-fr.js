"use strict";

// Koach Learn course (shared, bonus), French translation of "AI Entrepreneurship Pathways". Shape and rules: ../../../README.md (Translations).

module.exports = {
  id: "ai-entrepreneurship-pathways-fr",
  lang: "fr",
  translationOf: "ai-entrepreneurship-pathways",
  category: "Re-Entry",
  name: "Parcours d'entrepreneuriat avec l'IA",
  skills: "Choisir un parcours d'entreprise, Construire un plan d'affaires simplifié avec l'IA, Tester l'idée auprès de clients, Comprendre les formes juridiques et l'immatriculation, Trouver un financement et éviter les arnaques aux subventions, Construire une feuille de route de lancement sur 90 jours",
  outcome: "transformer une idée d'entreprise en plan prêt à lancer avec l'aide de l'IA : un plan d'affaires simplifié d'une page, des preuves venant de vrais clients, la liste des immatriculations et autorisations à vérifier, une liste réaliste de financements et d'aides gratuites, et une feuille de route de lancement sur 90 jours.",
  about: [
    "Posséder une entreprise peut créer des revenus, de l'indépendance et un patrimoine pour votre famille et votre communauté. Cela peut aussi être une voie quand les portes de l'emploi sont difficiles à ouvrir, par exemple après la prison ou dans un quartier où il y a peu d'employeurs. Il faut planifier, et les outils d'IA peuvent rendre la planification plus rapide et moins solitaire.",
    "Ce cours s'adresse aux personnes qui sortent de prison et aux habitants de communautés mal desservies qui veulent aller plus loin qu'une activité d'appoint : une entreprise alimentaire, une société de nettoyage ou d'espaces verts, un salon de coiffure, une boutique en ligne, une entreprise de transport routier ou un service à la communauté.",
    "Vous utiliserez des assistants d'IA gratuits comme ChatGPT, Microsoft Copilot ou Google Gemini, et des ressources officielles gratuites de la Small Business Administration (SBA, l'agence fédérale américaine des petites entreprises) et de l'IRS (le fisc américain). Chaque leçon dure environ cinq minutes avec une tâche « Essayez maintenant », un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Ce cours n'est pas un conseil juridique ou fiscal ; vérifiez auprès des sources officielles et de conseillers gratuits pour les entreprises. Hors des États-Unis, cherchez les organismes équivalents de votre pays."
  ],
  finalTask: "Créez un dossier de lancement pour votre idée : un plan d'affaires simplifié d'une page couvrant les neuf parties, les notes d'au moins dix conversations avec des clients, la liste des étapes de forme juridique, d'immatriculation, d'autorisations et de numéro fiscal que vous vérifierez (avec les sites officiels), une liste de financements et d'aides gratuites avec au moins trois vraies options locales ou nationales, et une feuille de route de lancement sur 90 jours avec des dates.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des personnes qui sortent de prison et des membres de communautés mal desservies qui veulent créer une vraie entreprise : restauration, nettoyage ou entretien d'espaces verts, salon de coiffure, boutique en ligne, transport routier ou service à la communauté.",
    startingPoint: "Ils ont une idée d'entreprise, un savoir-faire ou une petite activité à côté, et savent utiliser un téléphone. La plupart n'ont jamais rédigé de plan d'affaires, interrogé des clients de façon organisée, immatriculé une entreprise ni cherché un financement de démarrage.",
    gap: "Beaucoup de nouvelles entreprises échouent à cause d'une planification faible, d'idées non testées, d'immatriculations oubliées ou d'arnaques au financement. Les apprenants ont besoin d'un plan prêt pour le lancement, construit avec l'aide de l'IA et vérifié dans des sources officielles, pour démarrer légalement, éviter les arnaques et créer un revenu pour leur famille.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes",
      "Appareils : un téléphone ou un ordinateur de bibliothèque ou de programme",
      "Les règles, les frais et les licences changent selon l'État et la ville ; les apprenants les confirment sur les sites officiels (SBA, IRS, État et collectivités locales)",
      "Ce n'est pas un conseil juridique ni fiscal ; les apprenants font appel à des conseillers d'entreprise gratuits et à des sources officielles",
      "Les personnes en libération conditionnelle ou en mise à l'épreuve vérifient leurs conditions avant de choisir une activité"
    ],
    prerequisites: "Aucun. Les apprenants qui découvrent les outils d'IA peuvent suivre d'abord « Découvrir l'IA et prendre confiance avec le numérique »."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de votre argent, de vos heures, de vos compétences et de vos limites", action: "comparer deux ou trois parcours d'entreprise et choisir celui qui vous convient", standard: "en écrivant au moins une raison de votre choix" },
    { id: "O2", condition: "Avec l'IA qui vous pose des questions", action: "rédiger un plan d'affaires simplifié d'une page qui couvre les neuf parties", standard: "avec chaque chiffre supposé marqué pour être vérifié" },
    { id: "O3", condition: "Avec une liste de trois questions pour les clients", action: "interroger des clients possibles et utiliser ce qu'ils disent pour modifier votre plan", standard: "en parlant à au moins dix personnes et en changeant au moins une partie du plan" },
    { id: "O4", condition: "Pour votre entreprise", action: "lister les étapes de forme juridique, d'immatriculation du nom, de licences, d'autorisations et de numéro fiscal, avec le site officiel de chacune", standard: "avec chaque étape reliée à une source officielle" },
    { id: "O5", condition: "À partir de vos coûts de démarrage", action: "construire un plan de financement et une liste d'aides gratuites, et repérer les arnaques au financement", standard: "avec au moins trois vraies options et aucune offre qui demande des frais à l'avance" },
    { id: "O6", condition: "À partir de votre plan et de votre liste d'étapes", action: "créer une feuille de route de lancement sur 90 jours avec des dates pour la mise en place, les tests et le lancement", standard: "avec une date pour chaque étape et un partenaire de suivi nommé" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : De l'idée au plan",
      lessons: [
        {
          objectives: ["O1"],
          title: "Choisir votre parcours d'entreprise",
          minutes: 5,
          goal: "Comparer des parcours d'entreprise et choisir celui qui correspond à vos objectifs et à votre situation.",
          text: [
            "Il y a plus d'une route vers la création d'entreprise. Une activité d'appoint rapporte un peu d'argent avec peu de mise en place. Une petite entreprise de services (nettoyage, entretien de jardins, débarras) grandit avec ses clients et ses équipes. Une entreprise de produits (alimentation, artisanat, vêtements) a besoin de fournitures et d'un lieu de vente. Une entreprise en ligne vend par un site web ou une place de marché. Certaines personnes rachètent une franchise ou s'associent à d'autres dans une coopérative.",
            "Adaptez le parcours à votre vie : combien d'argent vous pouvez risquer, combien d'heures vous avez, vos compétences, votre transport, les règles d'autorisation éventuelles et, pour les personnes sous surveillance judiciaire, les conditions de leur libération conditionnelle ou mise à l'épreuve.",
            "Demandez à l'IA de comparer : « J'ai 500 $, 20 heures par semaine, des compétences en cuisine et pas de voiture. Compare une activité de préparation de repas, l'aide à un traiteur et la vente de pâtisseries sur les marchés : coût de démarrage, délai avant la première vente, autorisations à vérifier et risques. » Vérifiez ensuite les parties sur les autorisations et les coûts auprès de sources officielles."
          ],
          steps: ["Listez votre argent, vos heures, vos compétences et vos limites.", "Listez deux ou trois idées d'entreprise.", "Demandez à l'IA de comparer coût de démarrage, délai avant la première vente, autorisations et risques.", "Vérifiez les autorisations et les coûts auprès de sources officielles.", "Choisissez un parcours à planifier."],
          words: [["Entrepreneur", "une personne qui crée et dirige une entreprise."], ["Franchise", "une entreprise que vous rachetez et qui utilise la marque et le système d'une autre entreprise."], ["Coopérative", "une entreprise possédée et dirigée par ses membres."]],
          slides: [
            { title: "Plusieurs parcours", bullets: ["Activité d'appoint ou entreprise de services", "Entreprise de produits ou en ligne", "Franchise ou coopérative"] },
            { title: "L'adapter à votre vie", bullets: ["Argent, heures, compétences, transport", "Autorisations et conditions judiciaires"] },
            { title: "Comparer avec l'IA", bullets: ["Coût de démarrage et délai avant la première vente", "Autorisations et risques", "Vérifier auprès des sources officielles"] }
          ],
          tryIt: "Écrivez votre argent, vos heures, vos compétences et vos limites. Demandez à l'IA de comparer deux ou trois idées, puis choisissez un parcours et écrivez pourquoi.",
          youCanNow: "comparer des parcours d'entreprise et choisir celui qui convient à votre vie.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'une franchise ?", options: ["Une entreprise possédée par ses membres", "Une entreprise que vous rachetez et qui utilise la marque et le système d'une autre entreprise", "Un prêt pour les petites entreprises", "Un conseiller d'entreprise gratuit"], answer: 1, why: "Une franchise utilise la marque et le système d'une autre entreprise contre paiement." },
            { objective: "O1", q: "Vous avez peu d'argent et vos soirées libres. L'IA vous propose d'ouvrir un restaurant. Que faites-vous ?", options: ["Ouvrir le restaurant puisque l'IA l'a dit", "Abandonner l'idée d'entreprise", "Le comparer à des parcours moins coûteux qui correspondent à votre argent et à vos heures", "Emprunter autant que possible"], answer: 2, why: "Choisissez le parcours qui correspond à votre vrai budget, à votre temps et à vos compétences." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Construire un plan d'affaires simplifié avec l'IA",
          minutes: 6,
          goal: "Rédiger un plan d'affaires simplifié d'une page couvrant les neuf parties.",
          text: [
            "La SBA décrit deux types de plans d'affaires : un plan traditionnel long, que les prêteurs demandent souvent, et un plan simplifié de démarrage (lean startup) qui tient sur une page. Commencez par le plan simplifié.",
            "Le plan simplifié de la SBA a neuf parties : partenaires clés, activités clés, ressources clés, proposition de valeur (pourquoi les clients vous choisissent), relations clients, segments de clientèle (qui sont vos clients), canaux (comment vous les touchez), structure de coûts et sources de revenus.",
            "Demandez de l'aide à l'IA : « Aide-moi à remplir un plan d'affaires simplifié avec ces neuf parties pour mon entreprise de nettoyage de voitures à domicile à [ville]. Pose-moi les questions une par une. » Répondez avec des faits réels. Comparez ensuite les estimations de coûts de l'IA avec les vrais prix que vous cherchez."
          ],
          steps: ["Ouvrez un modèle d'une page à neuf cases.", "Demandez à l'IA de vous interroger une question à la fois pour chaque partie.", "Remplissez chaque case avec des faits réels.", "Comparez coûts et prix avec de vrais devis.", "Tenez sur une page."],
          words: [["Plan d'affaires simplifié", "un plan d'une page qui couvre les parties clés d'une entreprise."], ["Proposition de valeur", "la raison pour laquelle les clients doivent vous choisir."], ["Source de revenus", "une façon dont l'entreprise gagne de l'argent."]],
          slides: [
            { title: "Deux types de plans (SBA)", bullets: ["Traditionnel : long, pour les prêteurs", "Simplifié : une page ; commencer ici"] },
            { title: "Neuf parties", bullets: ["Partenaires, activités, ressources", "Proposition de valeur, relations, segments", "Canaux, coûts, revenus"] },
            { title: "L'IA vous interroge", bullets: ["Une question à la fois", "Répondre avec des faits réels", "Comparer les coûts aux vrais prix"] }
          ],
          sources: [{ name: "SBA : rédiger votre plan d'affaires", url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" }],
          tryIt: "Remplissez un plan simplifié d'une page pour l'entreprise choisie en vous faisant interroger par l'IA. Marquez chaque partie où vous devez chercher de vrais chiffres.",
          youCanNow: "rédiger un plan d'affaires simplifié d'une page avec l'aide de l'IA.",
          quickCheck: [
            { objective: "O2", q: "Que veut dire « sources de revenus » dans un plan simplifié ?", options: ["Comment l'entreprise gagne de l'argent", "Qui sont vos clients", "Comment vous touchez les clients", "Le nom de votre entreprise"], answer: 0, why: "Les sources de revenus sont les façons dont l'argent rentre." },
            { objective: "O2", q: "L'IA remplit votre loyer mensuel avec une estimation. Que faites-vous ?", options: ["La laisser ; l'IA a souvent raison", "Supprimer la ligne de ce coût", "Doubler le chiffre par prudence", "La marquer et chercher le vrai prix"], answer: 3, why: "Les chiffres supposés doivent être vérifiés avec de vrais prix." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tester l'idée auprès de vrais clients",
          minutes: 5,
          goal: "Parler à dix clients possibles et utiliser ce qu'ils disent pour améliorer le plan.",
          text: [
            "Un plan reste une supposition tant que des clients ne l'ont pas prouvé. Parlez à au moins dix personnes qui correspondent à votre segment de clientèle. Interrogez-les sur leur problème, pas sur votre idée : « Comment faites-vous laver votre voiture aujourd'hui ? Combien payez-vous ? Qu'est-ce qui vous agace ? »",
            "Testez ensuite l'achat : proposez une précommande, un prix de lancement ou une liste d'inscription. Que les gens disent « bonne idée », c'est agréable ; qu'ils paient ou s'inscrivent, c'est une preuve.",
            "Collez vos notes (sans noms ni numéros de téléphone) dans l'IA et demandez : « Résume ce qu'ont dit ces dix clients. Quelles tendances vois-tu, et que devrais-je changer dans mon plan ? » Mettez à jour le plan simplifié avec ce que vous avez appris."
          ],
          steps: ["Écrivez trois questions sur le problème du client.", "Parlez à au moins dix clients possibles.", "Proposez une précommande, un prix de lancement ou une liste d'inscription.", "Demandez à l'IA de trouver les tendances dans vos notes, sans les noms.", "Mettez à jour le plan simplifié."],
          words: [["Segment de clientèle", "un groupe de clients aux besoins semblables."], ["Valider", "prouver avec des éléments réels que des clients veulent quelque chose."], ["Précommande", "un client accepte d'acheter avant que le produit ou le service soit prêt."]],
          slides: [
            { title: "Interroger sur leur problème", bullets: ["Comment le règlent-ils aujourd'hui ?", "Combien paient-ils ?", "Qu'est-ce qui les agace ?"] },
            { title: "Tester l'achat", bullets: ["Précommandes ou inscriptions", "Payer vaut mieux que « bonne idée »"] },
            { title: "Apprendre et ajuster", bullets: ["L'IA trouve les tendances dans les notes", "Retirer d'abord les noms", "Mettre à jour le plan"] }
          ],
          tryIt: "Parlez à au moins cinq clients possibles cette semaine avec vos trois questions. Faites résumer les tendances par l'IA et changez une partie de votre plan simplifié.",
          youCanNow: "tester une idée d'entreprise auprès de vrais clients et améliorer le plan.",
          quickCheck: [
            { objective: "O3", q: "Quelle est la meilleure question pour un entretien avec un client ?", options: ["« Achèteriez-vous mon super produit ? »", "« Comment réglez-vous ce problème aujourd'hui ? »", "« Est-ce que mon logo vous plaît ? »", "« Pouvez-vous me prêter de l'argent ? »"], answer: 1, why: "Demander leur problème et ce qu'ils font aujourd'hui donne des preuves honnêtes." },
            { objective: "O3", q: "Huit personnes sur dix disent qu'elles ne paieraient jamais pour votre service. Que faites-vous ?", options: ["Les ignorer et lancer quand même", "Demander à l'IA de dire qu'elles ont tort", "Arrêter de parler aux clients", "Changer le plan, par exemple le prix, le service ou le type de client"], answer: 3, why: "Les preuves des clients servent à changer le plan avant de dépenser de l'argent." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : De l'idée au plan",
        questions: [
          { objective: "O1", q: "Qu'est-ce qu'une coopérative ?", options: ["Une administration", "Un prêt", "Une entreprise possédée et dirigée par ses membres", "Un type d'autorisation"], answer: 2, why: "Les membres possèdent et dirigent les coopératives." },
          { objective: "O4", q: "L'IA dit que votre entreprise alimentaire n'a besoin d'aucun permis. Que faites-vous ?", options: ["Vérifier auprès des sources officielles de la ville, du comté ou de l'État", "La croire et démarrer", "Demander seulement à un ami", "Ignorer les permis"], answer: 0, why: "Les règles d'autorisation doivent être vérifiées auprès de sources officielles." },
          { objective: "O2", q: "Combien de parties a le plan simplifié de démarrage de la SBA ?", options: ["Deux", "Cinquante", "Une", "Neuf"], answer: 3, why: "La SBA cite neuf éléments." },
          { objective: "O2", q: "Qu'est-ce qu'une proposition de valeur ?", options: ["Votre solde bancaire", "La raison pour laquelle les clients doivent vous choisir", "Votre numéro fiscal", "Votre adresse"], answer: 1, why: "Elle explique ce que vous apportez de particulier." },
          { objective: "O3", q: "Quelle est la preuve la plus forte que des clients veulent votre idée ?", options: ["Ils disent « bonne idée »", "Ils précommandent ou s'inscrivent", "Votre famille l'aime", "L'IA l'aime"], answer: 1, why: "Une action vaut plus qu'un compliment." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Créer, financer et lancer",
      lessons: [
        {
          objectives: ["O4"],
          title: "Forme juridique, immatriculation et numéro fiscal",
          minutes: 6,
          goal: "Lister les étapes de création dont votre entreprise a besoin et les sources officielles où les vérifier.",
          text: [
            "Formes juridiques courantes aux États-Unis : l'entreprise individuelle (sole proprietorship : vous et l'entreprise ne faites qu'un ; la plus simple), la LLC (limited liability company, société à responsabilité limitée : elle peut séparer les dettes de l'entreprise de vos dettes personnelles, avec des frais et des formalités dans l'État) et les sociétés anonymes (corporations). Les associations à but non lucratif suivent une autre voie. Demandez à l'IA d'expliquer les différences, puis choisissez avec l'aide d'un conseiller gratuit pour les entreprises ou d'un professionnel.",
            "La création comprend souvent : l'enregistrement du nom commercial auprès de l'État ou du comté, les licences commerciales de la ville ou du comté, des permis spéciaux (alimentation, garde d'enfants, transport routier, esthétique et autres) et un numéro fiscal. L'IRS dit qu'un Employer Identification Number (EIN, numéro fiscal fédéral d'entreprise) est gratuit quand on le demande à l'IRS ; méfiez-vous des sites qui le font payer.",
            "Les règles et les frais changent selon l'État et la ville ; faites donc une liste et confirmez chaque point sur les sites officiels : votre Secretary of State (le bureau de l'État qui gère souvent les immatriculations), votre ville ou comté, l'agence fiscale de votre État et irs.gov. Certaines licences tiennent compte du casier judiciaire ; l'organisme qui les délivre explique ses règles."
          ],
          steps: ["Demandez à l'IA d'expliquer entreprise individuelle ou LLC pour votre situation.", "Confirmez votre choix avec un conseiller gratuit ou un professionnel.", "Listez l'enregistrement du nom, les licences et les permis à vérifier.", "Trouvez chacun sur les sites officiels de l'État, du comté et de la ville.", "Demandez gratuitement un EIN sur irs.gov si vous en avez besoin."],
          words: [["Entreprise individuelle", "une entreprise possédée par une seule personne, sans entité juridique séparée."], ["LLC", "limited liability company : une forme juridique qui peut séparer les dettes de l'entreprise et les dettes personnelles."], ["Secretary of State", "le bureau de l'État qui gère souvent l'immatriculation des entreprises."]],
          slides: [
            { title: "Formes juridiques courantes", bullets: ["Entreprise individuelle : la plus simple", "LLC : sépare les dettes ; frais et formalités", "Se faire aider pour choisir"] },
            { title: "Liste de création", bullets: ["Enregistrement du nom commercial", "Licence de la ville ou du comté ; permis spéciaux", "Numéro fiscal (EIN)"] },
            { title: "Vérifier sur les sites officiels", bullets: ["Secretary of State, ville, comté", "Agence fiscale de l'État et irs.gov", "L'EIN est gratuit auprès de l'IRS"] }
          ],
          sources: [{ name: "IRS : obtenir un Employer Identification Number", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "SBA : choisir une forme juridique", url: "https://www.sba.gov/business-guide/launch-your-business/choose-business-structure" }],
          tryIt: "Faites la liste de création de votre entreprise : forme juridique, enregistrement du nom, licences, permis et EIN. À côté de chacun, notez le site officiel où vous le confirmerez.",
          youCanNow: "lister les étapes de création d'une entreprise et savoir où confirmer chacune.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qu'un EIN ?", options: ["Une licence commerciale de la ville", "Un type de prêt aux entreprises", "Un numéro fiscal d'entreprise délivré par l'IRS", "Un compte bancaire d'entreprise"], answer: 2, why: "L'EIN est le numéro fiscal d'une entreprise attribué par l'IRS." },
            { objective: "O4", q: "Un ami dit qu'il ne faut pas d'autorisation pour une activité de restauration à domicile. Que faites-vous ?", options: ["Vérifier auprès du service de santé de votre ville, de votre comté ou de votre État", "Croire votre ami", "Demander à l'IA et croire sa réponse", "Commencer à vendre et attendre de voir"], answer: 0, why: "Les règles d'autorisation changent selon le lieu, donc confirmez auprès du service officiel." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Financer le démarrage et trouver de l'aide gratuite",
          minutes: 6,
          goal: "Construire un plan de financement réaliste et une liste d'aides gratuites, et éviter les arnaques au financement.",
          text: [
            "La plupart des petites entreprises démarrent avec l'épargne personnelle, les premières ventes et l'aide de la famille ou de la communauté. Commencez le plus petit possible et grandissez avec les ventes. Demandez à l'IA de vous aider à lister les coûts de démarrage et à trouver comment les réduire, par exemple en louant du matériel ou en utilisant une cuisine partagée.",
            "Si vous avez besoin d'un prêt, regardez du côté des prêteurs solidaires. Le programme de microcrédit de la SBA accorde des prêts jusqu'à 50 000 $ par l'intermédiaire de prêteurs associatifs ancrés dans les communautés ; la SBA indique une moyenne d'environ 13 000 $ et une durée maximale de sept ans. Les CDFI (institutions financières de développement communautaire) et les fonds de prêt locaux servent aussi des personnes que les banques refusent souvent. Les subventions existent, mais elles sont en général très disputées et ciblées.",
            "Aides gratuites : la SBA oriente vers les Small Business Development Centers (SBDC), les mentors de SCORE, les Women's Business Centers et les Veterans Business Outreach Centers pour un accompagnement gratuit ou peu coûteux. Méfiez-vous de quiconque promet des subventions ou des prêts garantis contre des frais payés d'avance : c'est une arnaque courante."
          ],
          steps: ["Listez les coûts de démarrage et réduisez-les quand c'est possible.", "Prévoyez de commencer petit et de grandir avec les ventes.", "Cherchez les prêteurs de microcrédit SBA et les CDFI près de chez vous.", "Trouvez le SBDC, SCORE ou autre partenaire de la SBA le plus proche.", "Ne payez jamais de frais d'avance pour des subventions ou prêts « garantis »."],
          words: [["Microcrédit", "un petit prêt d'entreprise, souvent accordé par un prêteur communautaire."], ["CDFI", "community development financial institution : un prêteur tourné vers les communautés mal desservies."], ["Subvention", "de l'argent qu'on ne rembourse pas, en général donné pour un but précis."]],
          slides: [
            { title: "Commencer petit", bullets: ["Épargne et premières ventes", "Réduire les coûts : louer, partager, emprunter du matériel"] },
            { title: "Prêteurs solidaires", bullets: ["Microcrédits SBA : jusqu'à 50 000 $, moyenne d'environ 13 000 $", "Par des prêteurs associatifs communautaires", "CDFI et fonds de prêt locaux"] },
            { title: "Aides gratuites et arnaques", bullets: ["SBDC, SCORE, Women's Business Centers, VBOC", "Pas de frais d'avance pour des subventions « garanties »"] }
          ],
          sources: [{ name: "SBA : microcrédits", url: "https://www.sba.gov/funding-programs/loans/microloans" }, { name: "SBA : aide locale", url: "https://www.sba.gov/local-assistance" }],
          tryIt: "Listez vos coûts de démarrage et réduisez-en au moins un. Trouvez ensuite deux vraies options de financement et un centre d'accompagnement gratuit près de chez vous (ou en ligne), et notez comment les contacter.",
          youCanNow: "faire un plan de financement réaliste, trouver de l'aide gratuite et repérer les arnaques au financement.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qu'une CDFI ?", options: ["Un formulaire fiscal du gouvernement", "Un prêteur tourné vers les communautés mal desservies", "Un type de franchise", "Une licence commerciale"], answer: 1, why: "Les CDFI sont des prêteurs qui se consacrent aux communautés mal desservies." },
            { objective: "O5", q: "Une publicité en ligne promet une subvention garantie si vous payez d'abord des frais. Que faites-vous ?", options: ["Payer vite avant que l'offre disparaisse", "Envoyer vos coordonnées bancaires pour vérifier", "La traiter comme une arnaque probable et ne pas payer", "Demander des frais moins élevés"], answer: 2, why: "Les vraies subventions ne demandent pas de frais à l'avance pour garantir l'argent." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Construire votre feuille de route de lancement sur 90 jours",
          minutes: 5,
          goal: "Transformer votre plan en feuille de route de lancement sur 90 jours avec des dates.",
          text: [
            "Une feuille de route transforme le plan en action. Divisez les 90 jours en trois parties. Jours 1 à 30 : la mise en place (forme juridique, immatriculations, autorisations, compte bancaire, outils de base). Jours 31 à 60 : la préparation et la prévente (fournitures, prix, communication, premiers clients prêts). Jours 61 à 90 : le lancement et l'apprentissage (premières ventes, avis des clients, suivi de l'argent, ajustements).",
            "Demandez à l'IA : « Transforme mon plan simplifié et ma liste de création en une feuille de route de lancement sur 90 jours sous forme de tableau avec semaine, tâche et date limite. J'ai 20 heures par semaine. » Rendez-la ensuite réaliste : déplacez les dates selon votre vie et ajoutez de la marge pour les administrations lentes.",
            "Choisissez un moment fixe chaque semaine pour revoir la feuille de route, et partagez-la avec quelqu'un qui vous aidera à tenir vos engagements, comme un mentor, un conseiller ou un ami. Fêtez la première vente."
          ],
          steps: ["Jours 1 à 30 : tâches de mise en place.", "Jours 31 à 60 : préparation et prévente.", "Jours 61 à 90 : lancement, suivi de l'argent et apprentissage.", "Demandez à l'IA un brouillon de tableau, puis ajustez les dates.", "Fixez un point hebdomadaire et un partenaire de suivi."],
          words: [["Feuille de route", "un plan qui montre les étapes dans l'ordre avec des dates."], ["Partenaire de suivi", "quelqu'un qui vérifie vos progrès et vous encourage."]],
          slides: [
            { title: "Trois parties de 30 jours", bullets: ["1 à 30 : mise en place", "31 à 60 : préparation et prévente", "61 à 90 : lancement et apprentissage"] },
            { title: "L'IA propose, vous ajustez", bullets: ["Semaine, tâche, date limite", "Adapter à vos vraies heures", "Ajouter de la marge pour les administrations lentes"] },
            { title: "Garder le cap", bullets: ["Point hebdomadaire", "Un partenaire de suivi", "Fêter la première vente"] }
          ],
          tryIt: "Tâche finale : construisez votre feuille de route de lancement sur 90 jours avec l'IA et ajustez-la. Ajoutez-la à votre plan simplifié, vos notes clients, votre liste de création et votre liste de financements et d'aides pour compléter votre dossier de lancement.",
          youCanNow: "transformer une idée d'entreprise en plan prêt à lancer et en feuille de route sur 90 jours.",
          quickCheck: [
            { objective: "O6", q: "Sur quoi portent les jours 31 à 60 d'une feuille de route sur 90 jours ?", options: ["Prendre sa retraite de l'entreprise", "Vendre l'entreprise", "Seulement la paperasse", "Tester avec les premiers clients et améliorer"], answer: 3, why: "Le mois du milieu sert à tester et à améliorer avant le lancement complet." },
            { objective: "O6", q: "Vous ratez sans cesse les dates de votre feuille de route. Que faites-vous ?", options: ["Demander à un partenaire de suivi de vérifier vos progrès chaque semaine", "Supprimer la feuille de route", "Retirer toutes les dates", "Lancer une autre entreprise"], answer: 0, why: "Un partenaire de suivi vous aide à continuer et à ajuster le plan." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Créer, financer et lancer",
        questions: [
          { objective: "O4", q: "Un site fait payer 250 $ pour obtenir un EIN. Selon l'IRS :", options: ["Ce sont les frais officiels", "Les EIN coûtent 1 000 $", "Seuls les avocats peuvent les obtenir", "Les EIN sont gratuits auprès de l'IRS ; méfiez-vous des sites payants"], answer: 3, why: "L'IRS dit qu'un EIN est gratuit." },
          { objective: "O5", q: "Selon la SBA, quel est le montant maximum d'un microcrédit SBA ?", options: ["50 000 $", "5 millions $", "500 $", "Il n'y a pas de maximum"], answer: 0, why: "La SBA dit que les microcrédits vont jusqu'à 50 000 $." },
          { objective: "O5", q: "Un interlocuteur au téléphone vous promet une subvention garantie si vous payez d'abord 300 $ de frais. C'est :", options: ["Une procédure de subvention normale", "Une exigence de la SBA", "Une arnaque courante", "Un impôt"], answer: 2, why: "Les vraies subventions ne demandent pas de frais d'avance contre une garantie." },
          { objective: "O5", q: "Selon la SBA, qui offre un accompagnement gratuit ou peu coûteux aux entreprises ?", options: ["Les prêteurs sur salaire", "Les publicités sur les réseaux sociaux", "Les prêteurs sur gages", "Les Small Business Development Centers et SCORE"], answer: 3, why: "Ce sont des partenaires de la SBA." },
          { objective: "O6", q: "Dans la feuille de route sur 90 jours, que se passe-t-il pendant les jours 1 à 30 ?", options: ["Seulement la fête de lancement", "Rien", "La mise en place : immatriculations, autorisations, compte bancaire, outils", "La vente de l'entreprise"], answer: 2, why: "La mise en place vient en premier." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Parcours d'entrepreneuriat avec l'IA",
    questions: [
      { objective: "O1", q: "Un entrepreneur est :", options: ["Un fonctionnaire", "Une personne qui crée et dirige une entreprise", "Une banque", "Un type de prêt"], answer: 1, why: "Les entrepreneurs créent des entreprises." },
      { objective: "O1", q: "Une franchise est :", options: ["Une entreprise que vous rachetez et qui utilise la marque et le système d'une autre entreprise", "Une subvention gratuite", "Un formulaire fiscal", "Une coopérative"], answer: 0, why: "Les franchises utilisent une marque existante." },
      { objective: "O1", q: "Pour choisir un parcours, les personnes sous surveillance judiciaire doivent aussi vérifier :", options: ["Leur couleur préférée", "Rien d'autre", "Les conditions de leur libération conditionnelle ou mise à l'épreuve", "Seulement les prix d'un concurrent"], answer: 2, why: "Les conditions peuvent limiter certaines activités." },
      { objective: "O2", q: "Quel type de plan la SBA décrit-elle comme tenant sur une page ?", options: ["Le plan simplifié de démarrage", "Le plan traditionnel", "La déclaration d'impôts", "La demande de prêt"], answer: 0, why: "Le plan simplifié est un tableau d'une page." },
      { objective: "O2", q: "Dans un plan simplifié, les « segments de clientèle » désignent :", options: ["Vos coûts", "Vos partenaires", "Votre banque", "Qui sont vos clients"], answer: 3, why: "Les segments sont des groupes de clients." },
      { objective: "O2", q: "Dans un plan simplifié, les « canaux » désignent :", options: ["Seulement les chaînes de télé", "Comment vous touchez les clients", "Vos fournisseurs", "Vos impôts"], answer: 1, why: "Les canaux sont la façon de toucher les clients et de leur vendre." },
      { objective: "O2", q: "L'IA estime que votre matériel coûtera 200 $. Vous devez :", options: ["Utiliser l'estimation", "Vérifier les vrais prix avant de la croire", "La doubler sans vérifier", "Ignorer le coût"], answer: 1, why: "De vrais devis valent mieux que les estimations de l'IA." },
      { objective: "O3", q: "Quand vous interrogez des clients, demandez :", options: ["S'ils adorent votre idée", "Leurs mots de passe", "Leur impôt sur le revenu", "Leur problème et comment ils le règlent aujourd'hui"], answer: 3, why: "Les questions sur le problème donnent des réponses honnêtes." },
      { objective: "O3", q: "Avant de coller des notes clients dans l'IA, retirez :", options: ["Les noms et numéros de téléphone", "Les tendances", "Vos questions", "Rien"], answer: 0, why: "Protégez la vie privée des clients." },
      { objective: "O3", q: "Valider une idée veut dire :", options: ["Faire tamponner un ticket de parking", "S'immatriculer auprès de l'État", "Prouver avec des éléments réels que des clients la veulent", "Payer des impôts"], answer: 2, why: "La validation, ce sont des preuves venant des clients." },
      { objective: "O4", q: "Une entreprise individuelle est :", options: ["Une grande société", "Une association à but non lucratif", "Une administration", "Une entreprise possédée par une seule personne, sans entité juridique séparée"], answer: 3, why: "C'est la forme la plus simple." },
      { objective: "O4", q: "Une LLC peut aider à :", options: ["Éviter tous les impôts", "Se passer d'autorisations", "Séparer les dettes de l'entreprise des dettes personnelles", "Garantir un bénéfice"], answer: 2, why: "La responsabilité limitée est sa principale caractéristique." },
      { objective: "O4", q: "Où enregistre-t-on souvent un nom commercial aux États-Unis ?", options: ["Sur une page de réseau social", "Auprès de l'État, souvent le Secretary of State, ou du comté", "Seulement à la banque", "Nulle part"], answer: 1, why: "L'enregistrement est géré par l'État ou les bureaux locaux." },
      { objective: "O4", q: "Les règles et frais de création d'entreprise :", options: ["Changent selon l'État et la ville, donc il faut confirmer sur les sites officiels", "Sont les mêmes partout", "Ne changent jamais", "Sont fixés par l'IA"], answer: 0, why: "Les règles locales varient." },
      { objective: "O5", q: "Selon la SBA, les microcrédits sont accordés par :", options: ["Des prêteurs sur salaire", "Les réseaux sociaux", "Des prêteurs intermédiaires associatifs ancrés dans les communautés", "L'IRS"], answer: 2, why: "La SBA finance des intermédiaires qui accordent les prêts." },
      { objective: "O5", q: "Une CDFI est :", options: ["Un prêteur tourné vers les communautés mal desservies", "Un formulaire fiscal", "Une licence commerciale", "Une carte de crédit"], answer: 0, why: "Les CDFI servent des personnes que les banques laissent souvent de côté." },
      { objective: "O5", q: "La plupart des petites entreprises démarrent avec :", options: ["De grosses subventions garanties", "Du capital-risque", "Des gains au loto", "L'épargne, les premières ventes et l'aide de la communauté"], answer: 3, why: "Commencer petit avec des ventes est le plus courant." },
      { objective: "O5", q: "SCORE propose :", options: ["Des prêts sur salaire", "Du mentorat pour les propriétaires de petites entreprises", "Des licences commerciales", "Des numéros fiscaux"], answer: 1, why: "SCORE est un partenaire de mentorat de la SBA." },
      { objective: "O6", q: "Les jours 61 à 90 de la feuille de route portent sur :", options: ["Le choix d'un parcours", "Le lancement, les premières ventes, les avis et le suivi de l'argent", "Les formalités de création", "La fermeture de l'entreprise"], answer: 1, why: "La dernière partie, c'est lancer et apprendre." },
      { objective: "O6", q: "Un partenaire de suivi :", options: ["Fait votre travail à votre place", "Vous prête de l'argent", "Fait votre déclaration d'impôts", "Vérifie vos progrès et vous encourage"], answer: 3, why: "Être suivi aide à tenir ses engagements." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      2,
      4,
      6,
      9,
      11,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Plan d'affaires simplifié",
        objective: "O2",
        notYet: "Des parties manquent, ou des chiffres supposés sont traités comme des faits.",
        meets: "Une page qui couvre les neuf parties, avec les chiffres supposés marqués ou vérifiés.",
        exceeds: "De vrais prix sont indiqués et le plan tient compte des retours des clients."
      },
      {
        name: "Preuves des clients",
        objective: "O3",
        notYet: "Moins de dix conversations, ou aucun changement dans le plan.",
        meets: "Des notes d'au moins dix conversations et au moins un changement dans le plan.",
        exceeds: "A des preuves plus solides, comme des précommandes ou des inscriptions."
      },
      {
        name: "Liste des étapes de création",
        objective: "O4",
        notYet: "Des étapes manquent ou n'ont pas de source officielle.",
        meets: "Forme juridique, immatriculations, licences, autorisations et EIN listés, chacun avec un site officiel.",
        exceeds: "Indique quelles étapes coûtent de l'argent et quel service appeler en cas de question."
      },
      {
        name: "Financement et aide gratuite",
        objective: "O5",
        notYet: "Moins de trois vraies options, ou une offre avec des frais à l'avance.",
        meets: "Au moins trois vraies options de financement ou d'aide gratuite, avec la façon de les contacter.",
        exceeds: "Les coûts de démarrage sont réduits et un rendez-vous avec un conseiller est pris."
      },
      {
        name: "Feuille de route sur 90 jours",
        objective: "O6",
        notYet: "Pas de dates, ou des étapes dans le désordre.",
        meets: "Des étapes de mise en place, de test et de lancement, chacune avec une date.",
        exceeds: "Nomme un partenaire de suivi et prévoit des points chaque semaine."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui immatriculent une entreprise ou obtiennent un EIN dans les 90 jours (questionnaire de suivi)",
      "Apprenants qui font leur première vente dans les 90 jours",
      "Apprenants qui rencontrent SCORE, un Small Business Development Center ou un autre conseiller gratuit dans les 30 jours",
      "Apprenants qui disent avoir évité une arnaque au financement ou à la subvention"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Internet",
      "Un assistant d'IA gratuit comme ChatGPT, Microsoft Copilot ou Google Gemini",
      "Les sites officiels : sba.gov, irs.gov et les pages entreprises de votre État et de votre ville",
      "Du papier, un cahier ou un document gratuit pour le dossier de lancement",
      "Environ 60 minutes pour les leçons et les contrôles, plus une semaine pour parler avec des clients"
    ],
    facilitatorNotes: [
      "Laissez une semaine aux apprenants entre le chapitre 1 et le chapitre 2 pour mener leurs conversations avec des clients.",
      "Rappelez que ce n'est pas un conseil juridique ni fiscal ; mettez les apprenants en contact avec SCORE, un Small Business Development Center ou un centre d'entreprises local.",
      "Mettez en garde contre les arnaques au financement : les vraies subventions et les EIN ne demandent jamais de frais à l'avance à un intermédiaire.",
      "Rappelez aux apprenants en libération conditionnelle ou en mise à l'épreuve de vérifier leurs conditions avant de choisir une activité.",
      "Notez le dossier de lancement avec la grille et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
