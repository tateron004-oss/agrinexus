"use strict";

// Koach Learn course (French translation of shared/international-cv-writing.js). See scripts/koachlearn-courses/README.md, "Translations".
// Examples stay global (Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Morocco, Egypt, India, the Philippines, Mexico, Colombia). Organization, test and certificate names are kept, with a short explanation.

module.exports = {
  id: "international-cv-writing-fr",
  lang: "fr",
  translationOf: "international-cv-writing",
  category: "Workforce Development",
  name: "Rédiger un CV pour des emplois partout dans le monde",
  skills: "Choisir un format de CV selon le pays, Rédiger l'en-tête et le profil, Décrire son travail par des résultats, Expliquer ses diplômes et ses langues, Adapter son CV à une offre d'emploi, Repérer les faux recruteurs",
  outcome: "rédiger un CV clair et honnête de deux pages au plus pour une vraie offre d'emploi dans votre pays ou à l'étranger : au format attendu dans ce pays, avec votre travail présenté sous forme de résultats, vos diplômes et vos langues expliqués, les mots clés de l'offre et aucun numéro d'identité privé, et vérifier que l'emploi est réel avant de l'envoyer.",
  about: [
    "Ce cours s'adresse à toute personne qui a besoin d'un CV : jeunes qui quittent l'école et jeunes diplômés, personnes qui ont des années de travail informel ou dans l'entreprise familiale, personnes qui changent de métier, et personnes qui postulent auprès d'employeurs d'un autre pays ou en ligne. Les exemples viennent d'Afrique, d'Asie, d'Amérique latine, du Moyen-Orient, d'Europe et d'Amérique du Nord.",
    "Vous allez construire votre propre CV, une partie à la fois : le bon format pour le pays, un en-tête et un court profil, votre travail présenté sous forme de résultats, vos études et vos langues expliquées pour qu'un employeur étranger les comprenne, et une version adaptée à une vraie offre d'emploi. Vous apprendrez aussi les signes des faux emplois et des faux recruteurs, car les escrocs visent les personnes qui cherchent du travail à l'étranger.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche « À vous de jouer » sur papier ou dans un outil gratuit comme Google Docs, Microsoft Word en ligne ou LibreOffice Writer. Un mini-contrôle de 2 questions suit chaque leçon, un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours. À la fin, votre CV est prêt.",
    "Ce cours vous apprend à rédiger un CV. Il ne vous donne ni emploi, ni visa, ni permis de travail. Pour les visas et les permis de travail, utilisez uniquement le site officiel du gouvernement ou de l'ambassade du pays où vous voulez travailler."
  ],
  finalTask: "Choisissez une vraie offre d'emploi (dans votre pays, à l'étranger ou en ligne). Rédigez pour elle un CV de deux pages au plus : le format et les informations personnelles attendus dans ce pays, un en-tête et un profil de 3 à 4 lignes, au moins trois expériences de travail ou d'activité rédigées sous la forme action + résultat, vos études et vos langues expliquées pour un lecteur étranger, et au moins cinq mots clés de l'offre utilisés honnêtement. Enregistrez-le en PDF avec un nom de fichier clair, et remplissez la liste de vérification contre les arnaques pour cet emploi avant d'envoyer quoi que ce soit.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des jeunes et des adultes qui cherchent du travail, dans de nombreux pays : jeunes qui quittent l'école, diplômés de l'EFTP (enseignement et formation techniques et professionnels) et de l'université, personnes qui ont travaillé dans l'informel, à la ferme, au marché ou dans l'entreprise familiale, migrants de retour, et personnes qui postulent à des emplois à l'étranger ou auprès d'employeurs en ligne. Le cours est traduit dans de nombreuses langues.",
    startingPoint: "La plupart savent taper un court document sur un téléphone ou un ordinateur partagé. Beaucoup n'ont jamais rédigé de CV, ou en ont un copié sur un modèle qui liste des tâches, contient des numéros d'identité privés ou fait quatre pages ou plus. Peu savent que les règles du CV changent selon le pays.",
    gap: "Les employeurs et les recruteurs passent peu de temps sur chaque CV. Un CV trop long, au mauvais format pour le pays, qui cache l'expérience informelle ou qui cite des diplômes qu'un employeur étranger ne comprend pas est souvent rejeté. Les personnes qui cherchent du travail à l'étranger sont aussi visées par de faux recruteurs qui demandent de l'argent et le passeport. Les apprenants ont besoin d'un CV solide et honnête, et de l'habitude de vérifier un emploi avant de postuler.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; beaucoup d'apprenants lisent l'anglais, le français ou l'espagnol comme deuxième langue",
      "Appareils : souvent un téléphone ou un ordinateur partagé dans un cybercafé, une bibliothèque ou un centre de formation ; outils gratuits uniquement",
      "Temps : leçons de 4 à 6 minutes ; le CV complet peut être construit en environ deux heures, en plusieurs séances",
      "Les règles changent selon le pays : le cours enseigne les pratiques courantes et comment vérifier les consignes de l'employeur ou du pays",
      "Sécurité : jamais de numéro d'identité, de passeport ou de compte bancaire dans un CV ou un fichier d'exercice ; aucun conseil sur les visas ni conseil juridique"
    ],
    prerequisites: "Savoir taper un texte simple sur un téléphone ou un ordinateur. Les débutants en informatique peuvent d'abord suivre « Compétences informatiques de base » ; les apprenants aux États-Unis qui veulent un CV américain d'une page et s'entraîner aux entretiens peuvent aussi suivre « CV, LinkedIn et entretiens d'embauche »."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "Pour un emploi dans un pays donné", action: "choisir le format, la longueur et les informations personnelles du CV qu'attendent ce pays et cet employeur", standard: "en suivant les consignes de l'offre et sans numéro de carte d'identité ni de passeport" },
    { id: "O2", condition: "À partir de vos propres informations", action: "rédiger l'en-tête d'un CV et un profil de 3 à 4 lignes visant un type d'emploi", standard: "avec des coordonnées valides et sans faute d'orthographe" },
    { id: "O3", condition: "À partir de votre expérience de travail, d'études ou dans la communauté, payée ou non", action: "rédiger des expériences qui commencent par un verbe d'action et montrent un résultat", standard: "avec au moins un chiffre ou un détail concret dans chaque expérience" },
    { id: "O4", condition: "À partir de vos certificats, formations et langues", action: "présenter vos diplômes et vos niveaux de langue pour qu'un employeur d'un autre pays les comprenne", standard: "en indiquant l'établissement, le pays, l'année et un niveau utile pour un lecteur étranger" },
    { id: "O5", condition: "À partir d'une vraie offre d'emploi", action: "adapter votre CV à l'offre en reprenant ses mots clés, avec une mise en page que les logiciels de recrutement peuvent lire", standard: "avec au moins cinq mots clés utilisés honnêtement et un PDF au nom clair" },
    { id: "O6", condition: "Avant d'envoyer votre CV à un employeur ou à un recruteur", action: "vérifier si l'offre présente les signes d'un faux emploi ou d'un recruteur illégal", standard: "sans payer aucun frais ni remettre votre passeport ou vos documents originaux" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Construire la base de votre CV",
      lessons: [
        {
          title: "CV ou resume : ce qui change d'un pays à l'autre",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choisir la bonne longueur, le bon format et les bonnes informations personnelles pour le pays où vous postulez.",
          text: [
            "Un CV (curriculum vitae) est un court document qui montre à un employeur vos compétences, votre travail et vos études. Aux États-Unis et au Canada anglophone, on l'appelle en général « resume » et il fait souvent une ou deux pages. La plupart des pays disent CV. Pour la plupart des emplois, deux pages est un maximum sûr ; les longs CV universitaires sont réservés à la recherche et aux postes à l'université.",
            "Les informations personnelles changent selon le pays. Aux États-Unis, au Canada et au Royaume-Uni, les employeurs ne veulent en général ni photo, ni âge, ni situation familiale, ni religion, à cause des règles contre la discrimination. Dans beaucoup de pays d'Afrique, du Moyen-Orient, d'Asie et d'Amérique latine (par exemple le Nigeria, l'Égypte, le Maroc, l'Inde, les Philippines, le Mexique et la Colombie), beaucoup d'employeurs attendent encore une photo, la date de naissance ou la nationalité. Au Sénégal ou en Côte d'Ivoire, le CV est en général rédigé en français.",
            "Il n'existe pas de règle unique dans le monde. Suivez donc trois sources, dans cet ordre : les consignes de l'offre d'emploi, la page carrières de l'employeur, puis l'usage habituel dans ce pays. Si l'offre demande une photo, utilisez une photo simple et professionnelle, de la tête aux épaules. Si vous postulez en Europe, beaucoup d'employeurs connaissent le format de CV gratuit Europass.",
            "Certaines choses ne vont jamais dans un CV, nulle part : votre numéro de carte d'identité, de passeport ou de sécurité sociale, vos coordonnées bancaires ou une copie de votre passeport. Un vrai employeur ne les demande qu'après une offre, par une procédure sûre."
          ],
          steps: ["Lisez les consignes de l'offre : langue, format, photo, longueur, façon de postuler.", "Consultez la page carrières de l'employeur.", "Renseignez-vous sur l'usage habituel du CV dans ce pays.", "Décidez : longueur (1 à 2 pages), photo ou non, quelles informations personnelles.", "Retirez toujours les numéros d'identité, de passeport et de compte bancaire."],
          words: [["CV", "curriculum vitae : court document qui présente vos compétences, votre travail et vos études à un employeur."], ["Resume", "le nom habituel du CV aux États-Unis et au Canada anglophone ; il fait souvent une ou deux pages."], ["Europass", "un format et un outil de CV gratuits de l'Union européenne, connus de beaucoup d'employeurs en Europe."], ["Discrimination", "traiter quelqu'un de façon injuste à cause de son âge, de son sexe, de sa religion ou de sa situation familiale, par exemple."]],
          slides: [
            { title: "CV ou resume", bullets: ["Un court document sur vos compétences, votre travail et vos études", "États-Unis et Canada : « resume » ; ailleurs, on dit surtout CV", "Deux pages : un maximum sûr pour la plupart des emplois"] },
            { title: "Les informations personnelles changent selon le pays", bullets: ["États-Unis, Canada, Royaume-Uni : en général ni photo, ni âge, ni situation familiale", "Beaucoup de pays attendent encore une photo ou la date de naissance", "Afrique francophone : le CV est en général en français"] },
            { title: "Suivez cet ordre", bullets: ["1. Les consignes de l'offre", "2. La page carrières de l'employeur", "3. L'usage habituel dans ce pays"] },
            { title: "Jamais dans un CV", bullets: ["Numéro de carte d'identité, de passeport ou de sécurité sociale", "Coordonnées bancaires ou copie de votre passeport"] }
          ],
          sources: [{ name: "Europass : créer votre CV Europass (Union européenne)", url: "https://europass.europa.eu/en/create-europass-cv" }],
          tryIt: "Choisissez deux pays où vous pourriez travailler, par exemple votre pays et un pays étranger. Pour chacun, écrivez sur papier : la langue du CV, la longueur, photo ou non, et les informations personnelles à indiquer. Puis trouvez une vraie offre d'emploi dans chaque pays et regardez si elle donne ses propres consignes.",
          youCanNow: "choisir la longueur, la langue, la photo et les informations personnelles d'un CV selon le pays, et dire ce qui ne va jamais dans un CV.",
          quickCheck: [
            { objective: "O1", q: "Une offre d'une entreprise au Canada demande un « resume ». Quelles informations personnelles retirez-vous ?", options: ["Votre adresse e-mail", "Votre ville", "Votre numéro de téléphone", "Votre photo, votre âge et votre situation familiale"], answer: 3, why: "Au Canada et aux États-Unis, les employeurs ne veulent en général ni photo, ni âge, ni situation familiale." },
            { objective: "O1", q: "Quel élément ne doit jamais figurer dans un CV, quel que soit le pays ?", options: ["Votre numéro de passeport", "Votre adresse e-mail", "Les langues que vous parlez", "Votre dernier emploi"], answer: 0, why: "Les numéros d'identité et de passeport peuvent servir à voler votre identité ; les employeurs ne les demandent qu'après une offre." }
          ]
        },
        {
          title: "L'en-tête et le profil : les dix premières secondes",
          objectives: ["O2"],
          minutes: 5,
          goal: "Rédiger l'en-tête d'un CV et un profil de 3 à 4 lignes pour un type d'emploi.",
          text: [
            "Souvent, les recruteurs regardent un CV quelques secondes seulement avant de décider de continuer à lire. Le haut de la page doit leur dire qui vous êtes et ce que vous savez faire.",
            "L'en-tête contient votre nom complet, un numéro de téléphone avec l'indicatif du pays (par exemple +234 pour le Nigeria, +254 pour le Kenya, +63 pour les Philippines), une adresse e-mail professionnelle, votre ville et votre pays, et un lien LinkedIn si vous en avez un. Une adresse e-mail professionnelle est simple, du type prenom.nom@ suivi de votre fournisseur de messagerie, et non un surnom.",
            "Le profil fait 3 à 4 lignes sous l'en-tête. Dites ce que vous êtes (votre métier ou votre domaine), vos meilleures compétences ou vos années d'expérience, un résultat, et l'emploi que vous cherchez. Exemple : « Agent du service client avec 3 ans d'expérience dans un point de mobile money très fréquenté à Accra. A servi plus de 80 clients par jour en anglais et en twi, avec très peu de plaintes. Recherche un poste en centre d'appels. »",
            "Rédigez un profil pour un type d'emploi. Si vous postulez à deux emplois différents, rédigez deux profils."
          ],
          steps: ["Écrivez votre nom complet en grand.", "Ajoutez le téléphone avec l'indicatif du pays, une adresse e-mail professionnelle, la ville et le pays.", "Ligne 1 : ce que vous êtes et vos années d'expérience.", "Lignes 2 et 3 : vos meilleures compétences et un résultat.", "Dernière ligne : l'emploi que vous cherchez."],
          words: [["En-tête", "le haut du CV, avec votre nom et vos coordonnées."], ["Profil", "3 à 4 lignes sous l'en-tête qui résument qui vous êtes et l'emploi que vous cherchez ; on dit aussi résumé ou accroche."], ["Indicatif du pays", "le numéro ajouté devant un numéro de téléphone quand on appelle depuis un autre pays, comme +233 pour le Ghana."]],
          slides: [
            { title: "Les dix premières secondes", bullets: ["Les recruteurs décident vite", "Le haut de la page 1 doit dire qui vous êtes"] },
            { title: "L'en-tête", bullets: ["Nom complet", "Téléphone avec l'indicatif du pays, par ex. +254", "E-mail professionnel, ville et pays"] },
            { title: "Le profil : 3 à 4 lignes", bullets: ["Ce que vous êtes et votre expérience", "Vos meilleures compétences et un résultat", "L'emploi que vous cherchez"] },
            { title: "Un emploi, un profil", bullets: ["Vous visez deux types d'emploi ? Rédigez deux profils"] }
          ],
          tryIt: "Rédigez votre en-tête. Vérifiez que votre numéro de téléphone a l'indicatif du pays et que votre adresse e-mail est professionnelle. Puis rédigez un profil de 3 à 4 lignes pour un emploi que vous voulez. Lisez-le à voix haute : peut-on comprendre votre métier et votre meilleur résultat en dix secondes ?",
          youCanNow: "rédiger l'en-tête d'un CV avec des coordonnées valides et un court profil qui vise un emploi.",
          quickCheck: [
            { objective: "O2", q: "Quelle adresse e-mail convient le mieux à un CV ?", options: ["sweetgirl2004@...", "amina.okafor@...", "bigboss_money@...", "dontemailme@..."], answer: 1, why: "Une adresse simple, construite avec votre nom, fait professionnel." },
            { objective: "O2", q: "Vous postulez depuis le Kenya auprès d'un employeur d'un autre pays. Comment écrire votre numéro de téléphone ?", options: ["Sans les premiers chiffres", "Seulement votre nom WhatsApp", "Avec l'indicatif du pays, comme +254", "Il ne faut pas donner de numéro"], answer: 2, why: "L'indicatif du pays permet à un employeur à l'étranger de vous appeler." }
          ]
        },
        {
          title: "Présenter votre travail par des résultats, y compris le travail informel",
          objectives: ["O3"],
          minutes: 6,
          goal: "Rédiger trois expériences qui commencent chacune par un verbe d'action et montrent un résultat.",
          text: [
            "Beaucoup de CV listent des tâches : « Chargé de la vente. » Les employeurs veulent savoir ce que vous avez accompli. Commencez chaque ligne par un verbe d'action (servi, vendu, réparé, formé, organisé, réduit) et ajoutez un résultat avec un chiffre ou un détail clair.",
            "Tâche : « Chargé des clients. » Résultat : « Servi environ 60 clients par jour et tenu les comptes de la boutique dans un cahier, sans aucun paiement manquant pendant 12 mois. »",
            "Le travail informel et non payé compte. Vendre au marché à Lagos, réparer des téléphones à Nairobi, aider à gérer la ferme familiale au Maroc, faire du bénévolat à l'église ou dans un club de jeunes, ou faire des petites missions en ligne, c'est une vraie expérience. Donnez à chacune un titre clair (par exemple « Commerçant indépendant » ou « Coordinateur bénévole d'un groupe de jeunes »), le lieu, les dates et vos résultats.",
            "Mettez votre travail le plus récent en premier. Écrivez 2 à 4 lignes par emploi. N'inventez jamais d'emploi, de titre ni de chiffre ; si vous faites une estimation, écrivez « environ » et soyez prêt à l'expliquer en entretien."
          ],
          steps: ["Listez chaque emploi, activité, ferme, bénévolat ou petite mission que vous avez eu.", "Donnez à chacun un titre clair, un lieu et des dates (mois et année).", "Pour chacun, écrivez 2 à 4 lignes qui commencent par un verbe d'action.", "Ajoutez un chiffre ou un détail concret à chaque ligne.", "Mettez le plus récent en premier et vérifiez que chaque ligne est vraie."],
          words: [["Verbe d'action", "un verbe qui dit ce que vous avez fait et qui commence une ligne du CV, comme servi, vendu ou réparé."], ["Résultat", "ce qui a changé grâce à votre travail, montré par un chiffre ou un détail clair."], ["Travail informel", "travail sans contrat officiel, comme le commerce au marché, l'entreprise familiale ou les petits boulots."]],
          slides: [
            { title: "Tâches ou résultats", bullets: ["Tâche : « Chargé des clients »", "Résultat : « Servi environ 60 clients par jour, sans paiement manquant »"] },
            { title: "Commencez par un verbe d'action", bullets: ["Servi, vendu, réparé, formé, organisé, réduit", "Ajoutez un chiffre ou un détail clair"] },
            { title: "Le travail informel compte", bullets: ["Commerce au marché, réparation de téléphones, ferme familiale", "Bénévolat et petites missions en ligne", "Donnez un titre, un lieu et des dates"] },
            { title: "Restez honnête", bullets: ["Le plus récent en premier, 2 à 4 lignes par emploi", "Écrivez « environ » pour une estimation", "N'inventez jamais d'emploi ni de chiffre"] }
          ],
          tryIt: "Choisissez trois expériences, payées ou non. Pour chacune, écrivez un titre, un lieu et des dates, puis deux lignes qui commencent par un verbe d'action et contiennent un chiffre ou un détail. Soulignez chaque chiffre et vérifiez que vous pourriez l'expliquer à un recruteur.",
          youCanNow: "transformer votre travail payé et non payé en expériences de CV honnêtes qui montrent des résultats.",
          quickCheck: [
            { objective: "O3", q: "Quelle ligne montre un résultat ?", options: ["Chargé de la boutique", "A travaillé dans la vente", "Tâches : nettoyage", "Vendu environ 40 coques de téléphone par semaine et formé 2 nouveaux employés"], answer: 3, why: "Elle commence par un verbe d'action et donne des chiffres qui montrent ce que vous avez accompli." },
            { objective: "O3", q: "Vous avez vendu des légumes au marché pendant trois ans, sans contrat. Que faites-vous ?", options: ["Je l'indique comme « Commerçant indépendant », avec les dates et les résultats", "Je ne l'indique pas, car c'était informel", "Je l'appelle poste de directeur dans une grande entreprise", "J'écris seulement « marché », sans détails"], answer: 0, why: "Le travail informel est une vraie expérience ; donnez-lui un titre clair et honnête et des résultats." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Construire la base de votre CV",
        questions: [
          { objective: "O1", q: "Vous postulez dans une entreprise en Côte d'Ivoire. L'offre est en français et ne dit rien sur la langue. Dans quelle langue rédigez-vous votre CV ?", options: ["Dans la langue de votre choix", "En français, la langue de l'offre", "Moitié en anglais, moitié en français", "En code, pour qu'il reste privé"], answer: 1, why: "Suivez la langue de l'offre et du pays ; en Côte d'Ivoire, c'est en général le français." },
          { objective: "O1", q: "Deux sources ne sont pas d'accord sur la photo. Laquelle passe en premier ?", options: ["L'ancien CV d'un ami", "Un modèle quelconque trouvé en ligne", "Les consignes de l'offre d'emploi", "Ce que vous préférez"], answer: 2, why: "Les consignes de l'offre passent en premier, puis la page de l'employeur, puis l'usage habituel du pays." },
          { objective: "O2", q: "Que met-on dans l'en-tête du CV ?", options: ["Votre nom, votre téléphone avec l'indicatif du pays, votre e-mail, votre ville et votre pays", "Votre numéro de compte bancaire", "Votre numéro de passeport", "L'histoire complète de votre vie"], answer: 0, why: "L'en-tête donne juste ce qu'il faut pour que l'employeur sache qui vous êtes et vous contacte." },
          { objective: "O2", q: "Quelle longueur doit avoir le profil ?", options: ["Un mot", "Une page entière", "Deux pages", "3 à 4 lignes"], answer: 3, why: "Un profil court se lit en quelques secondes et montre qui vous êtes et l'emploi que vous cherchez." },
          { objective: "O3", q: "Quelle expérience est la mieux rédigée ?", options: ["« Fait beaucoup de choses à la ferme »", "« Chargé des animaux »", "« Géré l'alimentation de 200 poulets et réduit le gaspillage d'aliments d'environ un cinquième en une saison »", "« Ferme »"], answer: 2, why: "Elle commence par un verbe d'action et montre un résultat chiffré." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Adapter le CV à l'emploi et rester en sécurité",
      lessons: [
        {
          title: "Des études, certificats et langues qu'un employeur étranger comprend",
          objectives: ["O4"],
          minutes: 5,
          goal: "Présenter vos diplômes et vos langues pour qu'un employeur d'un autre pays les comprenne.",
          text: [
            "Un employeur à l'étranger ne connaît peut-être pas votre école ni les diplômes de votre pays, comme le certificat WAEC ou NECO en Afrique de l'Ouest, le KCSE au Kenya, le baccalauréat au Sénégal ou au Maroc, ou un TESDA National Certificate aux Philippines. Pour chacun, écrivez le nom complet, l'école ou l'organisme qui le délivre, la ville et le pays, l'année et une courte explication simple, par exemple « (diplôme national de fin d'études secondaires) ».",
            "Pour un emploi ou des études dans un autre pays, l'employeur, un ordre professionnel ou un service de l'immigration peut demander une évaluation ou une reconnaissance officielle de votre diplôme. En Europe, le réseau ENIC-NARIC vous oriente vers le centre de reconnaissance de chaque pays ; aux États-Unis et au Canada, des services comme World Education Services (WES) évaluent les diplômes étrangers. Demandez à l'employeur ou au service officiel quelle évaluation il accepte avant de payer quoi que ce soit.",
            "Les langues sont un atout fort. Indiquez chaque langue et votre niveau. Beaucoup d'employeurs comprennent les niveaux du Cadre européen commun de référence, A1 et A2 (élémentaire), B1 et B2 (indépendant), C1 et C2 (expérimenté), ou des mots simples comme « langue maternelle », « courant » ou « notions ». Si vous avez le résultat d'un test (par exemple IELTS, TOEFL ou DELF), indiquez le test et l'année.",
            "Les formations courtes comptent aussi : certificats en ligne, programmes d'EFTP, premiers secours ou permis de conduire. Mettez-les sous « Certificats et formations », avec l'organisme et l'année."
          ],
          steps: ["Listez chaque diplôme avec son nom complet, l'école ou l'organisme, la ville, le pays et l'année.", "Ajoutez une courte explication simple pour les diplômes locaux.", "Listez chaque langue avec un niveau (langue maternelle, courant, B2, notions).", "Ajoutez le nom des tests et l'année si vous en avez.", "Listez les formations courtes et les permis, avec l'organisme et l'année."],
          words: [["Évaluation de diplôme", "un rapport officiel qui explique à quoi correspond un diplôme étranger dans un autre pays."], ["ENIC-NARIC", "un réseau de centres nationaux qui conseillent sur la reconnaissance des diplômes d'autres pays."], ["CECR", "Cadre européen commun de référence pour les langues : niveaux de A1 (débutant) à C2 (très avancé)."], ["EFTP", "enseignement et formation techniques et professionnels : programmes de formation pratique à un métier (en anglais, TVET)."]],
          slides: [
            { title: "Expliquez les diplômes locaux", bullets: ["Nom complet, école, ville, pays, année", "Ajoutez une note simple : « (diplôme national de fin d'études secondaires) »"] },
            { title: "La reconnaissance à l'étranger", bullets: ["Certains employeurs demandent une évaluation officielle", "Europe : ENIC-NARIC ; États-Unis et Canada : des services comme WES", "Demandez laquelle est acceptée avant de payer"] },
            { title: "Les langues", bullets: ["Indiquez chaque langue et un niveau", "A1-A2 élémentaire, B1-B2 indépendant, C1-C2 expérimenté", "Ajoutez un test et l'année si vous en avez un"] },
            { title: "Les formations courtes comptent", bullets: ["Certificats en ligne, EFTP, premiers secours, permis de conduire", "Indiquez l'organisme et l'année"] }
          ],
          sources: [
            { name: "Réseau ENIC-NARIC : reconnaissance des diplômes", url: "https://www.enic-naric.net/" },
            { name: "World Education Services (WES) : évaluation des diplômes pour les États-Unis et le Canada", url: "https://www.wes.org/" },
            { name: "Europass : Cadre européen commun de référence pour les langues", url: "https://europass.europa.eu/en/common-european-framework-reference-language-skills" }
          ],
          tryIt: "Rédigez vos rubriques Formation, Certificats et Langues. Donnez à chaque diplôme local une courte explication simple, et un niveau à chaque langue. Montrez-les à une personne d'un autre pays ou d'une autre région, ou lisez-les comme un employeur étranger : y a-t-il quelque chose de flou ?",
          youCanNow: "présenter vos études, vos certificats et vos langues pour qu'un employeur d'un autre pays les comprenne.",
          quickCheck: [
            { objective: "O4", q: "Un employeur en Allemagne ne connaît peut-être pas le KCSE. Qu'écrivez-vous ?", options: ["Seulement « KCSE »", "Rien sur l'école", "Un diplôme plus élevé que vous n'avez pas", "« KCSE (Kenya Certificate of Secondary Education, diplôme kényan de fin d'études secondaires), [école], Nairobi, Kenya, [année] »"], answer: 3, why: "Le nom complet, l'école, le lieu et l'année permettent à un employeur étranger de le comprendre." },
            { objective: "O4", q: "Vous parlez espagnol à la maison et anglais au travail tous les jours. Comment les présenter ?", options: ["Espagnol : langue maternelle ; anglais : courant (C1)", "Langues : quelques-unes", "Espagnol et anglais : parfaits en tout point", "Ne pas indiquer les langues"], answer: 0, why: "Indiquez chaque langue avec un niveau clair qu'un employeur peut utiliser." }
          ]
        },
        {
          title: "Adapter votre CV à une offre d'emploi",
          objectives: ["O5"],
          minutes: 6,
          goal: "Adapter votre CV à une vraie offre d'emploi avec ses mots clés et une mise en page que les logiciels de recrutement peuvent lire.",
          text: [
            "Envoyer le même CV à toutes les offres marche rarement. Lisez l'offre et soulignez les mots clés : intitulés de poste, compétences, outils, langues et certificats (par exemple « service client », « Excel », « bilingue français-anglais », « permis cariste »). Quand ils sont vrais pour vous, reprenez les mêmes mots dans votre profil, vos compétences et vos expériences.",
            "Beaucoup de grandes entreprises et de sites d'emploi utilisent un ATS (applicant tracking system, logiciel de suivi des candidatures), qui lit les CV et y cherche des mots clés. Aidez-le à lire le vôtre : des titres simples (Profil, Expérience, Formation, Compétences, Langues), une police courante, pas de texte dans des images ou des zones de texte, et pas de tableaux pour les informations importantes.",
            "Ne copiez jamais toute l'offre et n'annoncez pas des compétences que vous n'avez pas. Des mots clés cachés ou écrits en blanc peuvent faire rejeter votre CV, et de fausses déclarations peuvent vous faire perdre l'emploi plus tard.",
            "Enregistrez le CV final en PDF, sauf si l'offre demande un fichier Word. Donnez-lui un nom clair, comme « Amina-Okafor-CV-Service-Client.pdf », et gardez-le à deux pages au plus."
          ],
          steps: ["Soulignez les mots clés de l'offre : intitulés, compétences, outils, langues, certificats.", "Marquez ceux qui sont vrais pour vous.", "Reprenez exactement ces mots dans votre profil, vos compétences et vos expériences.", "Utilisez des titres simples et une mise en page sobre ; pas de texte dans des images.", "Enregistrez en PDF (ou en Word si on le demande) avec votre nom et l'emploi dans le nom du fichier."],
          words: [["Mots clés", "les mots importants d'une offre d'emploi : compétences, outils, intitulés et certificats."], ["ATS", "applicant tracking system : logiciel qui recueille les CV et y cherche des mots clés."], ["PDF", "un type de fichier qui s'affiche de la même façon sur tous les ordinateurs et téléphones."]],
          slides: [
            { title: "Une offre, un CV", bullets: ["Soulignez les mots clés de l'offre", "Reprenez ceux qui sont vrais dans votre CV"] },
            { title: "Aidez le logiciel à le lire", bullets: ["Titres simples : Profil, Expérience, Formation, Compétences", "Police courante, pas de texte dans des images ou des zones de texte", "Pas de tableaux pour les informations importantes"] },
            { title: "Restez honnête", bullets: ["Ne copiez pas l'offre", "Pas de mots clés cachés", "N'annoncez que les compétences que vous avez"] },
            { title: "Enregistrez et nommez-le", bullets: ["PDF, sauf si l'offre demande Word", "Nom-CV-Emploi.pdf", "Deux pages au plus"] }
          ],
          tryIt: "Trouvez une vraie offre d'emploi. Soulignez dix mots clés. Cochez ceux qui sont vrais pour vous et ajoutez-en au moins cinq dans votre CV, aux bons endroits. Enregistrez-le en PDF avec votre nom et l'emploi dans le nom du fichier.",
          youCanNow: "adapter votre CV à une offre avec ses mots clés et l'enregistrer dans un format que les employeurs et leurs logiciels peuvent lire.",
          quickCheck: [
            { objective: "O5", q: "L'offre demande « bilingue français-anglais » et vous parlez bien les deux. Que faites-vous ?", options: ["Je l'ignore", "J'écris ces mots dans mon profil ou dans la rubrique Langues", "Je l'écris en blanc pour que seul le logiciel le voie", "Je dis que je parle aussi cinq autres langues"], answer: 1, why: "Reprendre les vrais mots clés de l'offre là où une personne et le logiciel peuvent les voir, c'est adapter son CV honnêtement." },
            { objective: "O5", q: "Quelle mise en page un logiciel de suivi des candidatures lit-il le plus facilement ?", options: ["Votre expérience dans une image", "Du texte dans beaucoup de petites zones de texte", "Des titres simples et du texte normal", "Un tableau avec toutes vos compétences dans de toutes petites cases"], answer: 2, why: "Les logiciels lisent le plus sûrement du texte normal sous des titres simples." }
          ]
        },
        {
          title: "Avant d'envoyer : repérer les faux emplois et les recruteurs illégaux",
          objectives: ["O6"],
          minutes: 6,
          goal: "Vérifier une offre d'emploi et un recruteur pour repérer les signes d'arnaque avant d'envoyer votre CV.",
          text: [
            "Les personnes qui cherchent du travail, surtout à l'étranger, sont une cible préférée des escrocs. Le plus grand signe d'alerte : on vous demande de payer pour obtenir l'emploi, pour des « frais de dossier », une formation, une visite médicale, un visa ou un placement. Les employeurs honnêtes ne vous font pas payer pour obtenir un emploi, et les principes de recrutement équitable de l'Organisation internationale du Travail (OIT) disent que les travailleurs ne doivent payer ni frais de recrutement ni coûts liés.",
            "Autres signes d'alerte : une offre sans entretien ; un très gros salaire pour un travail facile ; des messages uniquement par WhatsApp ou depuis une adresse e-mail gratuite ; une pression pour décider aujourd'hui ; une entreprise introuvable sur son propre site web ; une demande de votre passeport, de vos certificats originaux ou de vos coordonnées bancaires ; ou un chèque qu'on vous envoie en vous demandant de renvoyer une partie de l'argent.",
            "Vérifiez avant de postuler. Cherchez le vrai site web de l'entreprise et contactez-la avec des coordonnées que vous trouvez vous-même. Pour un emploi à l'étranger, vérifiez que l'agence de recrutement a une licence du service du travail ou des travailleurs migrants de votre gouvernement (par exemple le Department of Migrant Workers aux Philippines ou la National Employment Authority au Kenya), et consultez les pages officielles sur les visas et les permis de travail du pays de destination.",
            "Gardez vous-même votre passeport et vos documents originaux ; n'envoyez que des copies quand un vrai employeur les demande après une offre. Si vous soupçonnez une arnaque ou de la traite, arrêtez le contact et signalez-le à la police de votre pays, au ministère du Travail ou à l'ambassade. L'OIM (Organisation internationale pour les migrations) et l'OIT aident les migrants et publient des conseils sur le recrutement équitable."
          ],
          steps: ["Ne payez jamais de frais pour obtenir un emploi ou une place chez un recruteur.", "Trouvez le vrai site web de l'entreprise et contactez-la vous-même.", "Pour un emploi à l'étranger, vérifiez la licence de l'agence auprès du service du travail ou des travailleurs migrants de votre gouvernement.", "Lisez les règles sur les visas et les permis de travail uniquement sur les sites officiels du gouvernement ou de l'ambassade.", "Gardez votre passeport et vos originaux ; n'envoyez des copies qu'après une vraie offre.", "Arrêtez et signalez tout ce qui vous semble anormal."],
          words: [["Frais de recrutement", "argent qu'on demande à un travailleur de payer pour obtenir un emploi ou un placement ; selon le recrutement équitable, le travailleur ne doit pas le payer."], ["Agence agréée", "une agence de recrutement approuvée par votre gouvernement, que vous pouvez vérifier."], ["Traite des personnes", "déplacer ou retenir des personnes par la force, la tromperie ou une dette pour exploiter leur travail."]],
          slides: [
            { title: "Le plus grand signe d'alerte", bullets: ["On vous demande de payer pour obtenir l'emploi", "Recrutement équitable de l'OIT : le travailleur ne paie pas de frais de recrutement"] },
            { title: "Autres signes d'alerte", bullets: ["Pas d'entretien, très gros salaire pour un travail facile", "Seulement WhatsApp ou un e-mail gratuit, pression pour décider aujourd'hui", "On veut votre passeport, vos originaux ou vos coordonnées bancaires"] },
            { title: "Vérifiez avant de postuler", bullets: ["Trouvez vous-même le vrai site de l'entreprise", "Vérifiez la licence de l'agence auprès de votre gouvernement", "Règles de visa : seulement les pages officielles du gouvernement ou de l'ambassade"] },
            { title: "Protégez-vous", bullets: ["Gardez votre passeport et vos documents originaux", "N'envoyez des copies qu'après une vraie offre", "Arrêtez et signalez : police, ministère du Travail, ambassade"] }
          ],
          sources: [
            { name: "Organisation internationale du Travail (OIT) : le recrutement équitable", url: "https://www.ilo.org/topics-and-sectors/fair-recruitment" },
            { name: "Federal Trade Commission des États-Unis (FTC, agence de protection des consommateurs) : les arnaques à l'emploi", url: "https://consumer.ftc.gov/articles/job-scams" }
          ],
          tryIt: "Tâche finale : prenez votre CV adapté et l'offre d'emploi. Remplissez cette liste sur papier : Y a-t-il des frais à payer ? Ai-je trouvé moi-même le vrai site de l'entreprise ? Le recruteur a-t-il une licence (pour un emploi à l'étranger) ? Est-ce que je garde mon passeport et mes originaux ? Mon CV est-il sans numéro d'identité, de passeport ni de compte bancaire ? Envoyez votre CV seulement si chaque réponse est sûre.",
          youCanNow: "vérifier un emploi et un recruteur pour repérer les signes d'arnaque, et envoyer un CV honnête et adapté en toute sécurité.",
          quickCheck: [
            { objective: "O6", q: "Un recruteur vous propose un emploi dans un hôtel à l'étranger et demande d'abord des « frais de dossier ». Qu'est-ce que c'est ?", options: ["Normal pour tout emploi à l'étranger", "Le signe d'une bonne entreprise", "Un signe d'alerte ; les employeurs honnêtes ne vous font pas payer pour obtenir un emploi", "Un impôt que vous devez payer"], answer: 2, why: "Faire payer les travailleurs pour obtenir un emploi est le plus grand signe d'arnaque." },
            { objective: "O6", q: "Un nouvel employeur veut garder votre passeport « par sécurité » avant votre départ. Que faites-vous ?", options: ["Je garde mon passeport et je vérifie l'offre auprès de sources officielles", "J'envoie l'original par la poste", "Je le donne ; c'est normal", "Je publie une photo du passeport en ligne"], answer: 0, why: "Garder votre passeport vous protège ; confisquer le passeport des travailleurs est un signe de travail forcé et de traite." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Adapter le CV à l'emploi et rester en sécurité",
        questions: [
          { objective: "O4", q: "Pourquoi ajouter une explication simple après un diplôme local comme le WAEC ?", options: ["Pour rallonger le CV", "Pour qu'un employeur d'un autre pays comprenne ce que c'est", "Parce que la loi l'exige partout", "Pour cacher vos notes"], answer: 1, why: "Une courte explication aide un employeur étranger à comprendre un diplôme qu'il ne connaît peut-être pas." },
          { objective: "O4", q: "Un employeur à l'étranger demande une évaluation officielle de votre diplôme. Quelle est votre première étape ?", options: ["Payer le premier site web que vous trouvez", "Fabriquer votre propre certificat", "Laisser tomber l'emploi", "Demander à l'employeur ou au service officiel quelle évaluation il accepte"], answer: 3, why: "Les employeurs et les pays n'acceptent pas tous les mêmes évaluations ; vérifiez avant de payer." },
          { objective: "O5", q: "Qu'est-ce qu'un logiciel de suivi des candidatures (ATS) ?", options: ["Un modèle de CV gratuit", "Un type de passeport", "Un logiciel qui recueille les CV et y cherche des mots clés", "Un recruteur qui fait payer des frais"], answer: 2, why: "Beaucoup d'employeurs utilisent un ATS pour trier les CV selon les mots clés." },
          { objective: "O5", q: "Quel nom de fichier convient le mieux à votre CV ?", options: ["Mohamed-Ali-CV-Electricien.pdf", "document1.docx", "cv final final nouveau.pdf", "IMG_2045.jpg"], answer: 0, why: "Un nom clair, avec votre nom et l'emploi, est facile à retrouver pour l'employeur." },
          { objective: "O6", q: "Un message promet un très gros salaire, sans entretien, et vous demande de décider aujourd'hui. Que faites-vous ?", options: ["J'accepte vite", "J'envoie mes coordonnées bancaires", "Je le considère comme un signe d'alerte et je vérifie l'entreprise moi-même", "J'envoie mon passeport"], answer: 2, why: "Un gros salaire, pas d'entretien et de la pression sont des signes d'arnaque courants." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Rédiger un CV pour des emplois partout dans le monde",
    questions: [
      { objective: "O1", q: "Qu'est-ce qu'un CV ?", options: ["Un court document qui montre à un employeur vos compétences, votre travail et vos études", "Un visa de travail", "Un formulaire de banque", "Une lettre de votre école"], answer: 0, why: "Un CV résume vos compétences, votre travail et vos études pour un employeur." },
      { objective: "O1", q: "Pour la plupart des emplois, quelle est la longueur maximale sûre d'un CV ?", options: ["Dix pages", "Deux pages", "Une demi-ligne", "Cinq pages"], answer: 1, why: "Deux pages est un maximum sûr pour la plupart des emplois ; les longs CV sont pour les postes universitaires." },
      { objective: "O1", q: "Vous postulez dans une entreprise américaine. Quel élément retirez-vous en général ?", options: ["Vos compétences", "Votre parcours professionnel", "Votre e-mail", "Votre photo"], answer: 3, why: "Les employeurs américains ne veulent en général ni photo, ni âge, ni situation familiale." },
      { objective: "O1", q: "Un employeur en Égypte demande une photo dans l'offre. Que faites-vous ?", options: ["J'envoie une photo de fête", "Je refuse de postuler", "J'ajoute une photo simple et professionnelle, de la tête aux épaules", "J'envoie une copie de mon passeport"], answer: 2, why: "Suivez les consignes de l'offre avec une photo simple et professionnelle." },
      { objective: "O2", q: "Que doit dire le profil en haut de votre CV ?", options: ["Toute l'histoire de votre famille", "Ce que vous êtes, vos meilleures compétences, un résultat et l'emploi que vous cherchez", "Votre numéro de passeport", "Votre salaire dans chaque emploi"], answer: 1, why: "Le profil dit en quelques secondes à un recruteur qui vous êtes et ce que vous cherchez." },
      { objective: "O2", q: "Pourquoi ajouter l'indicatif du pays à votre numéro de téléphone ?", options: ["Pour qu'un employeur à l'étranger puisse vous appeler", "C'est un mot de passe", "Cela rallonge le CV", "Pour cacher votre numéro"], answer: 0, why: "Sans l'indicatif du pays, quelqu'un qui appelle d'un autre pays ne peut pas vous joindre." },
      { objective: "O2", q: "Vous voulez un emploi d'aide-soignant et un emploi dans un hôtel. Que faites-vous de votre profil ?", options: ["Je supprime le profil", "J'utilise un seul profil pour les deux", "Je ne parle d'aucun des deux emplois", "J'écris un profil différent pour chaque emploi"], answer: 3, why: "Un profil doit viser un seul type d'emploi." },
      { objective: "O3", q: "Quel mot est un verbe d'action pour commencer une ligne de CV ?", options: ["Responsable", "Tâches", "Réparé", "Divers"], answer: 2, why: "Les verbes d'action comme réparé, servi et formé montrent ce que vous avez fait." },
      { objective: "O3", q: "Quelle est la meilleure façon de montrer un résultat ?", options: ["« A beaucoup travaillé »", "« Formé 5 nouveaux caissiers en 3 mois »", "« Était à la boutique »", "« Fait des tâches »"], answer: 1, why: "Un chiffre et un détail clair montrent le résultat de votre travail." },
      { objective: "O3", q: "Vous avez aidé à gérer la boutique de votre famille pendant deux ans. Comment l'indiquer ?", options: ["Je ne l'indique pas", "Je l'appelle une multinationale", "J'écris seulement « famille »", "Je lui donne un titre clair, un lieu, des dates et des résultats"], answer: 3, why: "Le travail familial et informel est une vraie expérience quand on le présente honnêtement avec des résultats." },
      { objective: "O3", q: "Vous n'êtes pas sûr d'un chiffre exact dans votre expérience. Que faites-vous ?", options: ["J'écris « environ » et je suis prêt à l'expliquer", "J'invente un chiffre plus grand", "J'ajoute des zéros", "Je laisse un chiffre que je ne peux pas expliquer"], answer: 0, why: "Une estimation honnête marquée « environ » est acceptable ; un chiffre inventé peut vous faire perdre l'emploi." },
      { objective: "O4", q: "Comment présenter un diplôme local à un employeur étranger ?", options: ["Seulement son sigle", "Nom complet, école, ville, pays, année et une note simple", "Seulement l'année", "Ne pas l'indiquer"], answer: 1, why: "Des détails complets et une note simple permettent à un lecteur étranger de le comprendre." },
      { objective: "O4", q: "Dans les niveaux de langue du CECR, quel est le plus avancé ?", options: ["A1", "B1", "A2", "C2"], answer: 3, why: "Les niveaux du CECR vont de A1 (débutant) à C2 (très avancé)." },
      { objective: "O4", q: "À quoi sert le réseau ENIC-NARIC ?", options: ["À faire reconnaître des diplômes d'autres pays", "À réserver des vols", "À payer des recruteurs", "À obtenir un visa"], answer: 0, why: "Les centres ENIC-NARIC conseillent sur la reconnaissance des diplômes étrangers." },
      { objective: "O5", q: "Que sont les mots clés d'une offre d'emploi ?", options: ["Vos mots de passe", "Des mots dans une autre langue", "Les compétences, outils, intitulés et certificats importants que l'employeur recherche", "L'adresse de l'entreprise"], answer: 2, why: "Les mots clés disent ce que l'employeur recherche." },
      { objective: "O5", q: "Quelle façon d'adapter son CV est honnête ?", options: ["Copier toute l'offre dans son CV", "Ajouter des compétences qu'on n'a pas", "Cacher des mots clés en blanc", "Reprendre les vrais mots clés de l'offre dans son profil et ses expériences"], answer: 3, why: "Reprenez les mots de l'offre seulement quand ils sont vrais pour vous." },
      { objective: "O5", q: "Sauf si l'offre demande Word, comment enregistrez-vous votre CV ?", options: ["En photo", "En PDF", "En message vocal", "En tableur"], answer: 1, why: "Un PDF s'affiche de la même façon sur tous les appareils." },
      { objective: "O6", q: "Quel est le plus grand signe d'alerte d'un faux emploi ou d'un recruteur illégal ?", options: ["On vous demande de payer pour obtenir l'emploi", "Il a un site web", "Il demande un entretien", "Il donne une description du poste"], answer: 0, why: "Les employeurs honnêtes ne vous font pas payer pour obtenir un emploi." },
      { objective: "O6", q: "Pour un emploi à l'étranger passant par une agence, que vérifiez-vous ?", options: ["Combien d'abonnés elle a", "Si son bureau est grand", "Que l'agence a une licence du service du travail ou des travailleurs migrants de votre gouvernement", "Si elle promet le plus gros salaire"], answer: 2, why: "Une licence du gouvernement est une chose que vous pouvez vérifier vous-même." },
      { objective: "O6", q: "Où lire les règles pour obtenir un visa de travail ?", options: ["Dans un message WhatsApp d'un recruteur", "Dans une publication sur les réseaux sociaux", "Dans ce que suppose un ami", "Sur le site officiel du gouvernement ou de l'ambassade de ce pays"], answer: 3, why: "Seules les pages officielles du gouvernement et de l'ambassade donnent des règles fiables sur les visas." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [1, 2, 4, 8, 11, 12, 15, 17, 18] },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et vérifiez-la de nouveau.",
    criteria: [
      { name: "Le bon format pour le pays", objective: "O1", notYet: "Plus de deux pages, ou des informations personnelles qui ne conviennent pas au pays ou à l'offre, ou un numéro d'identité ou de passeport inclus.", meets: "Deux pages au plus ; la langue, la photo et les informations personnelles suivent l'offre et le pays ; aucun numéro d'identité, de passeport ou de compte bancaire.", exceeds: "Peut expliquer quelle source (offre, page de l'employeur, usage du pays) a décidé chaque choix." },
      { name: "En-tête et profil", objective: "O2", notYet: "Coordonnées manquantes, pas d'indicatif du pays, adresse e-mail peu professionnelle ou pas de profil.", meets: "Coordonnées valides avec l'indicatif du pays et un profil de 3 à 4 lignes qui vise cet emploi.", exceeds: "Le profil contient un résultat clair et l'intitulé du poste tiré de l'offre." },
      { name: "Expériences présentées par des résultats", objective: "O3", notYet: "Les expériences listent seulement des tâches, ou le travail informel est oublié.", meets: "Au moins trois expériences, chacune commençant par un verbe d'action et contenant un chiffre ou un détail concret.", exceeds: "Le travail informel ou non payé est présenté avec de solides résultats, et chaque chiffre peut être expliqué." },
      { name: "Diplômes et langues expliqués", objective: "O4", notYet: "Les diplômes locaux n'apparaissent que sous forme de sigles ; les langues n'ont pas de niveau.", meets: "Chaque diplôme a son nom complet, le lieu, le pays et l'année ; chaque langue a un niveau.", exceeds: "Indique quelle évaluation officielle l'employeur accepte, ou donne un test de langue et l'année." },
      { name: "Adapté à l'offre", objective: "O5", notYet: "Le CV pourrait servir pour n'importe quel emploi, ou il contient du texte dans des images ou des mots clés cachés.", meets: "Au moins cinq vrais mots clés de l'offre, des titres simples, enregistré en PDF avec un nom clair.", exceeds: "L'apprenant peut montrer où se trouve chaque mot clé et expliquer pourquoi il est vrai." },
      { name: "Vérifié avant l'envoi", objective: "O6", notYet: "Liste de vérification non remplie, ou l'offre demande des frais ou le passeport et l'apprenant a quand même postulé.", meets: "Liste de vérification contre les arnaques remplie : aucuns frais, entreprise trouvée par soi-même, passeport et originaux gardés.", exceeds: "Pour un emploi à l'étranger, la licence de l'agence a été vérifiée auprès du service du gouvernement." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent avec un CV complet qui répond à la grille d'évaluation",
      "Apprenants qui envoient au moins une candidature adaptée dans les 30 jours (enquête de suivi)",
      "Apprenants qui obtiennent un entretien ou une offre d'emploi dans les 90 jours, selon ce qu'ils signalent au programme",
      "Apprenants qui disent avoir repéré et évité un faux emploi ou un recruteur qui fait payer des frais"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec un traitement de texte gratuit (Google Docs, Microsoft Word en ligne ou LibreOffice Writer), ou du papier et un stylo pour les brouillons",
      "Une ou deux vraies offres d'emploi qui intéressent l'apprenant",
      "Des copies des certificats de l'apprenant, seulement pour s'y référer (jamais téléversées dans des outils d'exercice ni partagées en classe)",
      "Environ deux heures au total, en courtes séances : leçons, exercices, contrôles et CV final"
    ],
    facilitatorNotes: [
      "Demandez aux apprenants d'apporter une vraie offre d'emploi ; l'adaptation marche mieux avec une offre qu'ils veulent vraiment.",
      "Mettez les apprenants par deux : chacun lit à voix haute le profil de l'autre et propose une amélioration.",
      "Aidez les apprenants qui ont un travail informel à trouver leurs résultats ; beaucoup sous-estiment leur expérience au marché, à la ferme ou dans l'entreprise familiale.",
      "Ne donnez aucun conseil sur les visas, l'immigration ou le droit ; orientez les apprenants vers les pages officielles du gouvernement et de l'ambassade et vers les agences agréées.",
      "Vérifiez que chaque CV final ne contient aucun numéro d'identité, de passeport ou de compte bancaire avant qu'il quitte la salle, et notez-le avec la grille, une ligne à la fois."
    ]
  }
};
