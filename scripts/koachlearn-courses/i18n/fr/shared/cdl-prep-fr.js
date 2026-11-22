"use strict";

// Koach Learn course (French translation of shared/cdl-prep.js). See scripts/koachlearn-courses/README.md, "Translations".
// CDL class and endorsement letters, 49 CFR rule numbers and FMCSA names are kept as written.

const CFR_CLASSES = { name: "49 CFR 383.91 : Groupes de véhicules utilitaires (copie de la règle fédérale sur Cornell LII)", url: "https://www.law.cornell.edu/cfr/text/49/383.91" };
const CFR_ENDORSE = { name: "49 CFR 383.153 : Codes des mentions sur le CDL et le CLP", url: "https://www.law.cornell.edu/cfr/text/49/383.153" };
const CFR_CLP = { name: "49 CFR 383.25 : Permis d'apprentissage commercial (CLP)", url: "https://www.law.cornell.edu/cfr/text/49/383.25" };
const CFR_ELDT = { name: "49 CFR 380.603 : Qui doit suivre la formation des conducteurs débutants", url: "https://www.law.cornell.edu/cfr/text/49/380.603" };
const TPR = { name: "Training Provider Registry de la FMCSA (registre des organismes de formation ELDT)", url: "https://tpr.fmcsa.dot.gov/" };
const FMCSA_CDL = { name: "FMCSA : Commercial Driver's License (les pages fédérales officielles sur le CDL)", url: "https://www.fmcsa.dot.gov/registration/commercial-drivers-license" };
const CFR_AGE = { name: "49 CFR 391.11 : Conditions pour être conducteur (âge, anglais, visite médicale)", url: "https://www.law.cornell.edu/cfr/text/49/391.11" };
const CFR_MED = { name: "49 CFR 391.45 : Quand les conducteurs doivent passer la visite médicale", url: "https://www.law.cornell.edu/cfr/text/49/391.45" };
const CFR_SKILLS = { name: "49 CFR 383.113 : Ce que couvre l'examen pratique du CDL", url: "https://www.law.cornell.edu/cfr/text/49/383.113" };
const CFR_INSPECT = { name: "49 CFR 396.13 : Inspection par le conducteur avant de rouler", url: "https://www.law.cornell.edu/cfr/text/49/396.13" };
const FMCSA_HOS = { name: "FMCSA : Règles sur les heures de service", url: "https://www.fmcsa.dot.gov/regulations/hours-of-service" };
const CFR_MIL = { name: "49 CFR 383.77 : Dispense de l'examen pratique pour les conducteurs militaires", url: "https://www.law.cornell.edu/cfr/text/49/383.77" };
const BLS_TRUCK = { name: "Bureau of Labor Statistics des États-Unis (BLS) : Conducteurs de poids lourds et de semi-remorques", url: "https://www.bls.gov/ooh/transportation-and-material-moving/heavy-and-tractor-trailer-truck-drivers.htm" };

module.exports = {
  id: "cdl-prep-fr",
  lang: "fr",
  translationOf: "cdl-prep",
  category: "Workforce Development",
  name: "Préparation au permis de conduire commercial (CDL)",
  skills: "Choisir la bonne classe de CDL et les bonnes mentions, Planifier les étapes du permis d'apprentissage au permis, Étudier le manuel CDL de l'État, Faire une inspection avant le départ, Faire des choix de conduite sûrs",
  outcome: "choisir la classe de CDL et les mentions que demande l'emploi que vous visez, énumérer chaque étape du permis d'apprentissage jusqu'au permis, réviser les examens théoriques de l'État avec le manuel officiel, expliquer à voix haute une inspection avant le départ, et transformer le tout en un plan daté d'étude et d'examens pour le CDL.",
  about: [
    "Ce cours s'adresse à toute personne qui veut un emploi de conducteur de camion ou de bus : demandeurs d'emploi, anciens militaires, jeunes adultes, personnes qui sortent de prison et adultes en reconversion. Vous n'avez besoin d'aucune expérience de conduite au-delà d'un permis ordinaire.",
    "Vous allez apprendre quel permis de conduire commercial (CDL) il vous faut, les étapes pour l'obtenir, comment réviser les examens écrits, comment faire l'inspection avant le départ qui ouvre l'examen de conduite, et les habitudes de conduite sûre que les examinateurs recherchent.",
    "Ce cours vous prépare. Il ne vous donne ni permis ni autorisation. Les règles fédérales viennent de la FMCSA (Federal Motor Carrier Safety Administration, l'agence fédérale américaine chargée de la sécurité des transporteurs routiers), les examens sont faits par le bureau des permis de conduire de votre État, et la plupart des nouveaux conducteurs doivent aussi terminer une formation de conducteur débutant auprès d'un organisme enregistré. Chaque leçon vous dit où vérifier les règles officielles.",
    "Chaque leçon dure environ cinq minutes, avec une activité « Essayez maintenant ». Un court contrôle des connaissances termine chaque chapitre, et un quiz de 20 questions termine le cours. À la fin, vous faites votre propre plan d'étude et d'examens pour le CDL, avec de vraies dates."
  ],
  finalTask: "Faites votre propre plan d'étude et d'examens pour le CDL sur une page : l'emploi que vous voulez, la classe de CDL et les mentions qu'il demande, les étapes de la visite médicale jusqu'à l'examen pratique dans l'ordre avec une date cible pour chacune, trois organismes de formation enregistrés trouvés dans le Training Provider Registry, les sections du manuel de l'État que vous étudierez chaque semaine, et une liste écrite d'inspection avant le départ pour le type de véhicule avec lequel vous passerez l'examen.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des adultes qui visent un premier emploi de conducteur de camion ou de bus : demandeurs d'emploi, anciens militaires et militaires qui quittent l'armée, jeunes adultes, personnes qui sortent de prison et personnes en reconversion. Beaucoup ont un permis ordinaire mais aucune expérience de la conduite professionnelle.",
    startingPoint: "Ils savent conduire une voiture et lire un manuel simple. La plupart ne connaissent pas les classes de CDL, les étapes du permis, la règle sur la formation ni ce qu'est l'inspection avant le départ. Certains ont reçu de fausses informations de proches ou de publicités.",
    gap: "Les emplois de conducteur offrent un salaire stable et beaucoup de postes, mais les gens perdent du temps et de l'argent quand ils choisissent la mauvaise classe, s'inscrivent dans une école non enregistrée ou se présentent aux examens sans préparation. Les apprenants ont besoin d'une image juste du parcours et d'un plan qu'ils peuvent suivre, avant de payer une formation.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque terme technique est expliqué",
      "Appareils : un téléphone ou un ordinateur de bibliothèque pour lire le manuel CDL de l'État et le registre officiel",
      "Les règles varient selon l'État : le cours renvoie au manuel et au bureau de l'État pour les frais, les formulaires et les rendez-vous d'examen",
      "Pas de vraie conduite dans ce cours ; la pratique au volant se fait avec un organisme de formation enregistré",
      "Certains apprenants ont un casier judiciaire ou des problèmes de santé : ils vérifient leur admissibilité auprès de l'État et d'un médecin agréé, pas avec ce cours"
    ],
    prerequisites: "Un permis de conduire ordinaire valide, ou le projet d'en obtenir un d'abord. Une lecture de base en anglais, car les règles fédérales exigent que les conducteurs lisent et parlent assez bien l'anglais pour le travail."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "À partir de la description d'un emploi de conducteur", action: "identifier la classe de CDL (A, B ou C) et les mentions dont l'emploi a besoin", standard: "en réussissant au moins 4 descriptions d'emploi sur 5" },
    { id: "O2", condition: "En utilisant les sources officielles de la FMCSA et de l'État", action: "énumérer dans le bon ordre les étapes de la visite médicale jusqu'à l'examen pratique du CDL", standard: "sans oublier d'étape et en incluant le délai d'attente et la règle sur la formation" },
    { id: "O3", condition: "En utilisant le manuel CDL gratuit de votre État", action: "mettre en place une routine de révision pour les examens théoriques nécessaires et noter une série d'exercices", standard: "en atteignant au moins 8 sur 10 aux questions d'entraînement avant de réserver l'examen" },
    { id: "O4", condition: "Devant un camion ou avec une image de camion", action: "nommer chaque partie contrôlée lors d'une inspection avant le départ et dire ce que vous y vérifiez", standard: "en couvrant toutes les zones principales dans l'ordre, sans en sauter aucune" },
    { id: "O5", condition: "Face à une situation de conduite", action: "choisir la conduite sûre en matière de distance, de vitesse, de marche arrière et d'aptitude à conduire", standard: "en réussissant au moins 4 situations sur 5" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Le parcours vers le CDL",
      lessons: [
        {
          title: "Classes et mentions du CDL : laquelle vous faut-il ?",
          objectives: ["O1"],
          minutes: 5,
          goal: "Associer un emploi de conducteur à la classe de CDL et aux mentions qu'il demande.",
          text: [
            "Un permis de conduire commercial (CDL) vous permet de conduire des véhicules grands ou spéciaux pour le travail. Il existe trois classes, selon le véhicule.",
            "La classe A concerne les ensembles de véhicules, comme un tracteur qui tire une remorque, quand l'ensemble a un poids nominal de 26 001 livres ou plus et que la remorque tirée a un poids nominal de plus de 10 000 livres. La classe B concerne un seul grand véhicule de 26 001 livres ou plus, comme un camion-benne, un camion fourgon ou un bus de ville ; il peut tirer une petite remorque de 10 000 livres ou moins. La classe C concerne des véhicules plus petits qui transportent 16 personnes ou plus (conducteur compris) ou des matières dangereuses qui exigent des plaques de signalisation.",
            "Les mentions sont des lettres en plus sur votre permis pour des travaux spéciaux. T : remorques doubles ou triples. P : passagers. N : véhicules-citernes. H : matières dangereuses. X : citerne plus matières dangereuses. S : bus scolaire. Chacune demande son propre examen, et la mention H demande aussi une vérification de sécurité des antécédents.",
            "Partez de l'emploi que vous voulez. Lisez de vraies offres d'emploi près de chez vous et cherchez la classe et les mentions demandées."
          ],
          steps: ["Choisissez un emploi qui vous intéresse : longue distance, livraison locale, bus ou camion-benne.", "Demandez-vous : est-ce qu'il tire une grande remorque ? C'est en général la classe A.", "Est-ce un seul gros camion ou un bus ? C'est en général la classe B.", "Transporte-t-il des passagers, des liquides en citerne, des remorques doubles ou des matières dangereuses ? Ajoutez la mention."],
          words: [["CDL", "Commercial Driver's License, le permis de conduire commercial : le permis nécessaire pour conduire des véhicules grands ou spéciaux pour le travail."], ["Ensemble de véhicules", "un camion qui tire une remorque, comme un semi-remorque."], ["Poids nominal", "le poids maximal prévu par le fabricant pour un véhicule chargé à plein (souvent appelé GVWR)."], ["Mention", "une autorisation en plus sur votre CDL pour des travaux spéciaux, comme les passagers ou les citernes."], ["Matières dangereuses (hazmat)", "des marchandises qui peuvent blesser des personnes ou abîmer des biens, comme le carburant ou les produits chimiques, et qui exigent des panneaux d'avertissement appelés plaques."]],
          slides: [
            { title: "Trois classes de CDL", bullets: ["Classe A : camion qui tire une remorque lourde (semi-remorque)", "Classe B : un seul camion ou bus lourd (camion-benne, bus de ville)", "Classe C : véhicule plus petit avec 16+ personnes ou hazmat avec plaques"] },
            { title: "Les mentions : des lettres en plus", bullets: ["T doubles/triples, P passagers, N citerne", "H hazmat, X citerne plus hazmat, S bus scolaire", "Chacune demande son propre examen"] },
            { title: "Partir de l'emploi", bullets: ["Lisez trois vraies offres d'emploi près de chez vous", "Notez la classe et les mentions demandées", "C'est votre permis cible"] }
          ],
          sources: [CFR_CLASSES, CFR_ENDORSE, FMCSA_CDL],
          tryIt: "Trouvez trois vraies offres d'emploi de conducteur près de chez vous (sur un site d'emploi ou sur le site d'une entreprise). Pour chacune, notez l'emploi, la classe de CDL demandée et les mentions. Entourez l'emploi qui vous plaît le plus.",
          youCanNow: "associer un emploi de conducteur à la classe A, B ou C et nommer les mentions dont il a besoin.",
          quickCheck: [
            { objective: "O1", q: "Un emploi consiste à conduire un tracteur qui tire une remorque de 53 pieds. Quelle classe est-ce en général ?", options: ["Classe C", "Classe B", "Classe A", "Pas besoin de CDL"], answer: 2, why: "Un tracteur qui tire une remorque lourde est un ensemble de véhicules, donc la classe A." },
            { objective: "O1", q: "Quelle mention ajoutez-vous pour conduire un bus scolaire ?", options: ["S", "T", "N", "X"], answer: 0, why: "S est la mention bus scolaire ; la mention P (passagers) est aussi nécessaire pour les bus." }
          ]
        },
        {
          title: "Les étapes du permis d'apprentissage au permis",
          objectives: ["O2"],
          minutes: 6,
          goal: "Énumérer dans l'ordre les étapes vers le CDL et qui s'occupe de chacune.",
          text: [
            "La plupart des nouveaux conducteurs suivent les mêmes étapes. Les règles fédérales viennent de la FMCSA ; le bureau des permis de conduire de votre État fait passer les examens et fixe les frais et les formulaires.",
            "D'abord, une visite médicale (souvent appelée DOT physical) chez un médecin examinateur agréé. La plupart des conducteurs doivent la repasser au moins tous les 24 mois. Ensuite, réussir les examens théoriques écrits de l'État pour obtenir un permis d'apprentissage commercial (CLP). Les règles fédérales disent que le titulaire d'un CLP doit avoir au moins 18 ans et attendre au moins 14 jours avant l'examen pratique. Pendant que vous vous entraînez sur la voie publique, un titulaire du CDL de la bonne classe doit être assis à côté de vous.",
            "Depuis le 7 février 2022, la plupart des personnes qui passent un premier CDL de classe A ou B, ou une première mention P, S ou H, doivent terminer la formation des conducteurs débutants (ELDT) auprès d'un organisme inscrit au Training Provider Registry de la FMCSA avant l'examen. Ensuite, vous passez l'examen pratique de l'État : inspection avant le départ, maîtrise de base du véhicule et conduite sur route.",
            "Âge : pour conduire d'un État à un autre, vous devez avoir au moins 21 ans. Certains États autorisent les conducteurs de 18 à 20 ans à rouler seulement à l'intérieur de l'État. Vérifiez les règles de votre État."
          ],
          steps: ["Visite médicale chez un médecin examinateur agréé.", "Étudiez le manuel CDL de l'État et réussissez les examens théoriques.", "Obtenez votre permis d'apprentissage commercial (CLP).", "Terminez la formation des conducteurs débutants auprès d'un organisme enregistré, si elle vous concerne.", "Entraînez-vous avec un titulaire du CDL qualifié à côté de vous ; attendez au moins 14 jours.", "Passez l'examen pratique : inspection avant le départ, maîtrise de base, conduite sur route."],
          words: [["FMCSA", "la Federal Motor Carrier Safety Administration, l'agence américaine qui fixe les règles pour les camions et les bus."], ["CLP", "Commercial Learner's Permit, le permis d'apprentissage commercial : il vous permet de vous entraîner sur un véhicule utilitaire avec un titulaire du CDL qualifié à côté de vous."], ["ELDT", "Entry-Level Driver Training, la formation des conducteurs débutants : la formation fédérale que la plupart des nouveaux conducteurs doivent terminer avant l'examen."], ["Training Provider Registry", "la liste officielle de la FMCSA des écoles et des employeurs autorisés à donner l'ELDT."], ["Médecin examinateur", "un professionnel de santé agréé pour faire la visite médicale DOT des conducteurs professionnels."]],
          slides: [
            { title: "Qui fait quoi", bullets: ["FMCSA : les règles fédérales", "Votre État : les examens, les frais et les formulaires", "Organisme enregistré : la formation obligatoire"] },
            { title: "Les étapes dans l'ordre", bullets: ["Visite médicale, puis examens théoriques, puis le CLP", "Formation des conducteurs débutants si elle vous concerne", "Attendre au moins 14 jours, puis l'examen pratique"] },
            { title: "Les règles à retenir", bullets: ["CLP : au moins 18 ans, titulaire du CDL à côté de vous", "D'un État à un autre : au moins 21 ans", "L'organisme de formation doit être au registre de la FMCSA"] }
          ],
          sources: [CFR_CLP, CFR_ELDT, TPR, CFR_AGE, CFR_MED, CFR_SKILLS],
          tryIt: "Cherchez la page CDL de votre État (tapez le nom de votre État suivi de « CDL » et ouvrez le site en .gov). Écrivez les six étapes dans l'ordre et, à côté de chacune, ce que dit votre État : les formulaires, où aller et les frais indiqués.",
          youCanNow: "énumérer dans l'ordre les étapes de la visite médicale à l'examen pratique et dire qui s'occupe de chacune.",
          quickCheck: [
            { objective: "O2", q: "Vous venez d'obtenir votre CLP. Quand pouvez-vous passer l'examen pratique selon les règles fédérales ?", options: ["Le jour même", "Le lendemain", "Après 6 mois", "Après au moins 14 jours"], answer: 3, why: "Les règles fédérales disent que le titulaire d'un CLP doit attendre au moins 14 jours avant de passer l'examen pratique." },
            { objective: "O2", q: "Où trouvez-vous une école qui peut donner la formation obligatoire des conducteurs débutants ?", options: ["Dans n'importe quelle publicité sur les réseaux sociaux", "Dans le Training Provider Registry de la FMCSA", "Auprès d'un ami qui conduit des camions", "Chez un concessionnaire automobile"], answer: 1, why: "Seuls les organismes inscrits au Training Provider Registry de la FMCSA peuvent donner la formation obligatoire." }
          ]
        },
        {
          title: "Réviser les examens théoriques",
          objectives: ["O3"],
          minutes: 5,
          goal: "Mettre en place une routine de révision avec le manuel CDL de votre État et noter une série d'exercices.",
          text: [
            "Chaque État a un manuel CDL gratuit sur son site des permis de conduire. Les examens écrits en sont tirés, c'est donc le meilleur livre de révision que vous puissiez avoir.",
            "La plupart des nouveaux conducteurs passent l'examen de Connaissances générales. Beaucoup passent aussi Freins à air (la plupart des gros camions ont des freins à air) et Ensembles de véhicules (pour la classe A). Chaque mention a son propre examen. Le manuel de votre État indique quelles sections correspondent à quel examen.",
            "Étudiez une section à la fois. Lisez-la, fermez le manuel et écrivez trois choses que vous avez apprises. Ensuite, utilisez les questions d'entraînement du manuel ou du site de votre État. Visez au moins 8 sur 10 avant de réserver le vrai examen.",
            "Méfiez-vous des applications et des sites payants qui promettent les « vraies questions de l'examen ». L'entraînement gratuit de votre État suffit pour la plupart des gens."
          ],
          steps: ["Téléchargez le manuel CDL de votre État sur le site officiel en .gov.", "Marquez les sections dont vous avez besoin : Connaissances générales plus celles de votre classe et de vos mentions.", "Prévoyez une section par séance de révision, de 20 à 30 minutes.", "Après chaque section, écrivez trois choses apprises sans regarder.", "Faites des questions d'entraînement jusqu'à obtenir au moins 8 sur 10."],
          words: [["Examen théorique", "l'examen écrit (souvent sur ordinateur) que vous réussissez pour obtenir votre CLP."], ["Freins à air", "des freins qui fonctionnent à l'air comprimé, utilisés sur la plupart des camions et des bus lourds."], ["Manuel CDL", "le livre de révision officiel de votre État pour les examens du CDL."]],
          slides: [
            { title: "Votre livre de révision est gratuit", bullets: ["Chaque État a un manuel CDL sur son site en .gov", "Les examens écrits en sont tirés"] },
            { title: "Quels examens ?", bullets: ["Connaissances générales pour tous", "Freins à air et Ensembles de véhicules pour la plupart des classes A", "Un examen par mention"] },
            { title: "Comment réviser", bullets: ["Une section par séance", "Fermez le livre et écrivez trois choses apprises", "Entraînez-vous jusqu'à obtenir 8 sur 10"] }
          ],
          sources: [FMCSA_CDL],
          tryIt: "Téléchargez le manuel CDL de votre État. Lisez le début de la section Connaissances générales sur l'inspection du véhicule. Fermez-le et écrivez trois choses dont vous vous souvenez. Ensuite, écrivez cinq questions d'entraînement à vous avec les réponses, et échangez-les avec un camarade de révision ou vérifiez-les dans le manuel.",
          youCanNow: "trouver le manuel CDL de votre État, choisir les sections nécessaires et les étudier en courtes séances jusqu'à obtenir 8 sur 10.",
          quickCheck: [
            { objective: "O3", q: "Quel est le meilleur livre de révision gratuit pour vos examens théoriques du CDL ?", options: ["Une application payante avec les « vraies réponses de l'examen »", "Une vidéo d'un inconnu sur Internet", "Le manuel CDL officiel de votre État", "Un guide pour les conducteurs de voiture"], answer: 2, why: "Les examens écrits sont tirés du manuel CDL officiel de votre État." },
            { objective: "O3", q: "Vous voulez une classe A pour des semi-remorques à freins à air. Quels examens vous faut-il en général ?", options: ["Seulement Bus scolaire", "Seulement Passagers", "Seulement Matières dangereuses", "Connaissances générales, Freins à air et Ensembles de véhicules"], answer: 3, why: "La plupart des conducteurs de semi-remorques en classe A passent Connaissances générales, Freins à air et Ensembles de véhicules." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Le parcours vers le CDL",
        questions: [
          { objective: "O1", q: "Un emploi consiste à conduire un seul camion-benne de 33 000 livres. Quelle classe est-ce en général ?", options: ["Classe B", "Classe A", "Classe C", "Un permis voiture ordinaire"], answer: 0, why: "Un seul véhicule lourd de 26 001 livres ou plus relève de la classe B." },
          { objective: "O1", q: "Quelle mention vous permet de tirer des remorques doubles ou triples ?", options: ["P", "S", "T", "N"], answer: 2, why: "T est la mention remorques doubles et triples." },
          { objective: "O2", q: "Quelle étape vient en général en premier sur le parcours vers le CDL ?", options: ["L'examen de conduite sur route", "La visite médicale et les examens théoriques pour le CLP", "Acheter un camion", "Obtenir la mention H"], answer: 1, why: "Vous réussissez une visite médicale et les examens théoriques pour obtenir un CLP avant de vous former et de passer l'examen sur route." },
          { objective: "O2", q: "Quand vous vous entraînez avec un CLP sur la voie publique, qui doit être avec vous ?", options: ["Personne", "N'importe quel ami qui a le permis voiture", "Un membre de la famille", "Un titulaire du CDL de la bonne classe, à côté de vous"], answer: 3, why: "Un titulaire du CDL qualifié pour ce véhicule doit être assis à côté de vous et vous superviser." },
          { objective: "O3", q: "Vous obtenez 5 sur 10 aux questions d'entraînement de Freins à air. Que devez-vous faire ?", options: ["Réserver le vrai examen aujourd'hui", "Sauter Freins à air", "Payer une application avec les réponses de l'examen", "Étudier de nouveau cette section et vous entraîner jusqu'à atteindre 8 sur 10"], answer: 3, why: "Entraînez-vous jusqu'à obtenir de bons résultats avant de réserver le vrai examen." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Les compétences et votre plan",
      lessons: [
        {
          title: "L'inspection avant le départ",
          objectives: ["O4"],
          minutes: 6,
          goal: "Nommer chaque zone d'une inspection avant le départ et ce que vous y vérifiez.",
          text: [
            "L'examen pratique commence par une inspection avant le départ. Vous faites le tour du véhicule, vous montrez chaque partie et vous dites à voix haute ce que vous vérifiez. Les règles fédérales disent aussi que chaque conducteur doit s'assurer que le véhicule est sûr avant de le conduire : c'est donc une habitude pour toute votre carrière.",
            "Suivez toujours le même ordre pour ne jamais oublier une partie. Un ordre courant est : compartiment moteur, cabine et démarrage du moteur, direction, suspension, freins, roues et pneus, les côtés et l'arrière avec les feux, et la zone d'attelage sur un ensemble de véhicules. Sur les véhicules à freins à air, vous vérifiez aussi les manomètres et les alarmes des freins à air.",
            "Pour chaque partie, dites ce qui la rend sûre : « Bien fixé, ni fissuré ni tordu, pas de fuite. » Le manuel de votre État donne la liste complète pour votre type de véhicule. Votre organisme de formation vous le montrera sur un vrai camion.",
            "Si vous trouvez un défaut, le camion ne bouge pas tant qu'il n'est pas réparé. Signalez-le et notez-le."
          ],
          steps: ["Utilisez la liste de contrôle du manuel de votre État pour votre type de véhicule.", "Commencez par le compartiment moteur, puis la cabine, puis faites le tour du camion toujours dans le même ordre.", "Montrez chaque partie et dites ce que vous vérifiez : bien fixée, pas abîmée, pas de fuite.", "Vérifiez les feux, les réflecteurs et les pneus de chaque côté.", "Notez et signalez tout défaut ; ne roulez pas tant qu'il n'est pas réparé."],
          words: [["Inspection avant le départ", "le contrôle de sécurité qu'un conducteur fait sur un véhicule avant de le conduire."], ["Défaut", "une pièce cassée, usée ou manquante qui rend un véhicule dangereux."], ["Attelage", "les pièces qui relient un tracteur à une remorque, comme la sellette et le pivot d'attelage."], ["Sellette d'attelage", "la plaque plate et ronde du tracteur sur laquelle la remorque se verrouille (fifth wheel en anglais)."]],
          slides: [
            { title: "Pourquoi l'inspection avant le départ compte", bullets: ["L'examen pratique commence par elle", "La loi dit : vérifiez avant de rouler", "Un défaut veut dire que vous ne roulez pas"] },
            { title: "Toujours le même ordre", bullets: ["Compartiment moteur, puis cabine et démarrage", "Direction, suspension, freins, roues", "Côtés, arrière, feux, attelage"] },
            { title: "Dites ce que vous vérifiez", bullets: ["Bien fixé", "Ni fissuré, ni tordu, ni usé", "Pas de fuite"] }
          ],
          sources: [CFR_SKILLS, CFR_INSPECT],
          tryIt: "À l'aide de la section sur l'inspection du manuel CDL de votre État, écrivez une liste d'inspection avant le départ pour le véhicule avec lequel vous comptez passer l'examen. Ensuite, entraînez-vous à la dire à voix haute devant une voiture, une image de camion ou un camion jouet : montrez chaque zone et dites ce que vous vérifiez.",
          youCanNow: "dérouler dans l'ordre une inspection avant le départ et dire ce que vous vérifiez sur chaque partie.",
          quickCheck: [
            { objective: "O4", q: "Pourquoi faites-vous l'inspection toujours dans le même ordre ?", options: ["Pour ne jamais oublier une partie", "Parce que c'est plus rapide de sauter des parties", "Parce que l'examinateur choisit l'ordre", "Cela n'a pas d'importance"], answer: 0, why: "Un ordre fixe fait qu'aucune zone n'est oubliée." },
            { objective: "O4", q: "Pendant votre inspection, vous trouvez un flexible de frein fissuré. Que faites-vous ?", options: ["Rouler doucement jusqu'au prochain arrêt", "Mettre du ruban adhésif et partir", "Le signaler, le noter et ne pas rouler tant qu'il n'est pas réparé", "L'ignorer si les freins marchent encore"], answer: 2, why: "Un défaut de sécurité veut dire que le véhicule ne bouge pas tant qu'il n'est pas réparé." }
          ]
        },
        {
          title: "Maîtrise de base et habitudes de conduite sûre",
          objectives: ["O5"],
          minutes: 5,
          goal: "Choisir la conduite sûre dans des situations courantes de conduite de camion.",
          text: [
            "Après l'inspection avant le départ, l'examen pratique vérifie la maîtrise de base du véhicule (avancer et reculer, reculer en ligne droite et en courbe, et tourner) et la conduite sur route.",
            "Les examinateurs cherchent de bonnes habitudes. Gardez une grande marge de sécurité : les camions ont besoin de beaucoup plus de place que les voitures pour s'arrêter. Ralentissez sous la pluie, la neige, dans les virages, les zones de travaux et la circulation dense, même en dessous de la limite de vitesse. Regardez loin devant et vérifiez souvent vos rétroviseurs. Prenez les virages à droite larges et avec prudence pour que la remorque ne touche pas le trottoir ou une voiture.",
            "Reculez le moins possible. Si vous n'êtes pas sûr de ce qu'il y a derrière, descendez et regardez. Beaucoup de conducteurs retiennent G.O.A.L. (Get Out And Look en anglais) : descendez et regardez.",
            "Vous devez aussi être apte à conduire. Les règles fédérales sur les heures de service limitent combien de temps vous pouvez conduire et travailler avant de vous reposer, et les conducteurs passent des tests de drogues et d'alcool. Ne conduisez jamais fatigué, malade ou sous l'effet d'une substance."
          ],
          steps: ["Gardez une grande distance devant ; encore plus par mauvais temps.", "Réglez votre vitesse selon la route, la météo et la charge, pas seulement selon le panneau.", "Vérifiez vos rétroviseurs toutes les quelques secondes et avant chaque changement de voie.", "Avant de reculer : descendez et regardez (G.O.A.L.), puis reculez lentement.", "Arrêtez-vous et reposez-vous quand vous êtes fatigué ; respectez les règles sur les heures de service."],
          words: [["Marge de sécurité", "l'espace libre que vous gardez autour de votre véhicule pour avoir la place de freiner ou d'éviter."], ["Déport (off-tracking)", "quand, dans un virage, les roues arrière d'un long véhicule suivent une trajectoire plus courte que les roues avant."], ["Heures de service", "les règles de la FMCSA sur la durée pendant laquelle un conducteur peut conduire et travailler avant de se reposer."]],
          slides: [
            { title: "Ce que vérifie l'examen pratique", bullets: ["Inspection avant le départ", "Maîtrise de base : reculer, tourner, s'arrêter", "Conduite sur route"] },
            { title: "Distance et vitesse", bullets: ["Les camions ont besoin de beaucoup plus de place pour s'arrêter", "Ralentissez par mauvais temps, dans les virages et les travaux", "Regardez loin devant ; vérifiez souvent les rétroviseurs"] },
            { title: "Marche arrière : G.O.A.L.", bullets: ["Get Out And Look : descendez et regardez", "Reculez lentement, le moins possible"] },
            { title: "Être apte à conduire", bullets: ["Respectez les règles sur les heures de service", "Ne conduisez jamais fatigué, malade ou sous l'effet d'une substance"] }
          ],
          sources: [CFR_SKILLS, FMCSA_HOS],
          tryIt: "Notez cinq situations tirées de la section sur la conduite sûre du manuel de votre État (par exemple la pluie la nuit, une zone de travaux, reculer vers un quai de chargement). Pour chacune, écrivez la conduite sûre en une phrase. Demandez à un camarade de révision de vous interroger.",
          youCanNow: "choisir la conduite sûre en matière de distance, de vitesse, de marche arrière et d'aptitude à conduire.",
          quickCheck: [
            { objective: "O5", q: "Vous reculez vers un quai de chargement et vous ne voyez pas un coin. Que faites-vous ?", options: ["Reculer plus vite pour finir rapidement", "Descendre et regarder avant de continuer à reculer", "Klaxonner et continuer", "Utiliser seulement la radio"], answer: 1, why: "G.O.A.L. : descendez et regardez quand vous n'êtes pas sûr de ce qu'il y a derrière." },
            { objective: "O5", q: "Il commence à pleuvoir fort sur l'autoroute. Quel est le choix sûr ?", options: ["Garder la même vitesse et la même distance", "Suivre de plus près la voiture de devant pour voir ses feux", "Accélérer pour sortir de la pluie", "Ralentir et augmenter la distance avec le véhicule de devant"], answer: 3, why: "Sur route mouillée, il faut plus de distance pour s'arrêter : ralentissez et laissez plus d'espace." }
          ]
        },
        {
          title: "Choisir sa formation et faire son plan CDL",
          objectives: ["O2", "O3"],
          minutes: 5,
          goal: "Écrire un plan CDL daté avec des organismes de formation enregistrés que vous pouvez contacter.",
          text: [
            "Avant de payer ou de vous inscrire à une formation, vérifiez que l'école ou l'employeur figure dans le Training Provider Registry de la FMCSA. Vous pouvez chercher dans le registre par lieu.",
            "Certaines entreprises de transport paient la formation si vous acceptez de conduire pour elles pendant une durée fixe. Lisez le contrat avec attention : que se passe-t-il si vous partez plus tôt ? Devrez-vous rembourser la formation ? Posez la question avant de signer.",
            "Anciens militaires : si vous avez conduit des véhicules militaires lourds, demandez à votre État la dispense militaire de l'examen pratique ; la FMCSA permet aux États de la proposer aux militaires et aux anciens militaires récents qui remplissent les conditions. Si vous avez un casier judiciaire, appelez le bureau des permis de l'État et interrogez tôt les employeurs sur leurs règles d'embauche ; la mention matières dangereuses demande aussi une vérification de sécurité.",
            "Maintenant, faites-en un plan. Un plan avec des dates a beaucoup plus de chances de se réaliser qu'un simple souhait."
          ],
          steps: ["Écrivez l'emploi que vous voulez, ainsi que la classe et les mentions qu'il demande.", "Cherchez dans le Training Provider Registry et notez trois organismes près de chez vous.", "Appelez ou rendez-vous sur place ; renseignez-vous sur l'horaire, le coût total, le contrat et l'aide pour trouver un emploi.", "Mettez une date cible à côté de chaque étape, de la visite médicale à l'examen pratique.", "Prévoyez quelles sections du manuel vous étudierez chaque semaine."],
          words: [["Contrat de formation", "un accord où une entreprise paie votre formation si vous travaillez pour elle pendant une durée fixe."], ["Dispense de l'examen pratique", "une possibilité offerte par certains États de ne pas passer l'examen pratique du CDL pour les conducteurs militaires qui remplissent les conditions."]],
          slides: [
            { title: "Vérifiez avant de payer", bullets: ["L'organisme est-il dans le Training Provider Registry de la FMCSA ?", "Cherchez dans le registre par lieu"] },
            { title: "Formation payée par l'entreprise", bullets: ["Lisez le contrat", "Et si vous partez plus tôt ? Faut-il rembourser ?"] },
            { title: "Renseignez-vous tôt", bullets: ["Anciens militaires : demandez la dispense militaire de l'examen pratique", "Avec un casier : interrogez tôt l'État et les employeurs"] },
            { title: "Un plan avec des dates", bullets: ["Chaque étape a une date cible", "Des sections à étudier chaque semaine", "Trois organismes à appeler"] }
          ],
          sources: [TPR, CFR_MIL, CFR_ELDT, BLS_TRUCK],
          tryIt: "Cherchez trois organismes près de chez vous dans le Training Provider Registry. Notez leur nom, comment les contacter et trois questions que vous poserez à chacun. Ensuite, mettez une date cible à côté de chaque étape de votre parcours vers le CDL.",
          youCanNow: "vérifier qu'un organisme de formation est enregistré et écrire un plan CDL avec une date pour chaque étape.",
          quickCheck: [
            { objective: "O2", q: "Une école dit qu'elle donne la formation au CDL, mais elle n'est pas dans le Training Provider Registry. Que devez-vous faire ?", options: ["Vous inscrire vite avant que le prix augmente", "Payer en espèces pour que ce soit moins cher", "Choisir un organisme qui est dans le registre", "Demander à un ami de vérifier plus tard"], answer: 2, why: "La formation valable pour la plupart des nouveaux conducteurs doit venir d'un organisme inscrit au registre de la FMCSA." },
            { objective: "O3", q: "Quel plan a le plus de chances de marcher ?", options: ["« J'aurai mon CDL un jour. »", "« Visite médicale avant le 3 mai, examens théoriques avant le 24 mai, une section du manuel chaque semaine. »", "« J'étudierai quand j'aurai le temps. »", "« Je passerai l'examen et on verra. »"], answer: 1, why: "Un plan avec des dates et des étapes de révision chaque semaine transforme un objectif en actions." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Les compétences et votre plan",
        questions: [
          { objective: "O4", q: "Par quoi commence l'examen pratique du CDL ?", options: ["L'inspection avant le départ", "La conduite sur route", "La marche arrière en courbe", "Une rédaction écrite"], answer: 0, why: "L'examen pratique commence par l'inspection avant le départ." },
          { objective: "O4", q: "Pendant une inspection avant le départ, que dites-vous de chaque partie ?", options: ["Seulement son nom", "Son prix", "Ce que vous vérifiez : bien fixée, pas abîmée, pas de fuite", "Rien ; vous regardez seulement"], answer: 2, why: "Vous montrez chaque partie et dites ce qui la rend sûre." },
          { objective: "O5", q: "Pourquoi les camions gardent-ils plus de distance que les voitures ?", options: ["Seulement pour économiser du carburant", "Ils ont besoin de beaucoup plus de place pour s'arrêter", "C'est juste une habitude", "Pour que les autres conducteurs puissent doubler"], answer: 1, why: "Les véhicules lourds mettent beaucoup plus de temps à s'arrêter, ils ont donc besoin d'une plus grande marge de sécurité." },
          { objective: "O5", q: "Vous avez très sommeil deux heures après le départ. Quelle est la conduite sûre ?", options: ["Ouvrir la fenêtre et continuer", "Boire plus de café et accélérer", "Monter le son de la radio", "Vous arrêter dans un endroit sûr et vous reposer"], answer: 3, why: "Ne conduisez jamais fatigué : arrêtez-vous dans un endroit sûr, reposez-vous et respectez les règles sur les heures de service." },
          { objective: "O2", q: "Une entreprise propose une formation CDL gratuite si vous conduisez pour elle pendant un an. Que faites-vous d'abord ?", options: ["Lire le contrat et demander ce qui se passe si vous partez plus tôt", "Signer tout de suite", "Leur dire que vous déciderez après la formation", "Ignorer le contrat"], answer: 0, why: "Une formation payée par l'entreprise a souvent une règle de remboursement : lisez et posez vos questions avant de signer." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Préparation au permis de conduire commercial (CDL)",
    questions: [
      { objective: "O1", q: "Un emploi de conducteur de bus de ville qui transporte 40 passagers. Quelle classe et quelle mention sont les plus probables ?", options: ["Classe C avec T", "Classe A avec H", "Classe B avec P", "Pas besoin de CDL"], answer: 2, why: "Un seul bus lourd relève en général de la classe B, et transporter des passagers demande la mention P." },
      { objective: "O1", q: "Que permet la mention H ?", options: ["Transporter des matières dangereuses", "Conduire un bus scolaire", "Tirer des remorques doubles", "Conduire seulement un véhicule-citerne"], answer: 0, why: "H est la mention matières dangereuses ; elle demande aussi une vérification de sécurité des antécédents." },
      { objective: "O1", q: "Quel véhicule relève en général de la classe A ?", options: ["Un minibus de 15 passagers", "Un seul camion fourgon de 30 000 livres", "Une camionnette pick-up", "Un tracteur qui tire une remorque de plus de 10 000 livres"], answer: 3, why: "Un ensemble de 26 001 livres ou plus, avec une remorque de plus de 10 000 livres, relève de la classe A." },
      { objective: "O1", q: "Vous voulez transporter du carburant dans une citerne qui porte des plaques de matières dangereuses. Quelle mention couvre les deux ?", options: ["S", "X", "P", "T"], answer: 1, why: "X réunit les mentions véhicule-citerne et matières dangereuses." },
      { objective: "O2", q: "Qui fait les règles fédérales pour les conducteurs professionnels ?", options: ["La FMCSA", "L'IRS", "L'OSHA", "Votre école de formation"], answer: 0, why: "La FMCSA, la Federal Motor Carrier Safety Administration, fixe les règles fédérales." },
      { objective: "O2", q: "Qui fait passer les examens théoriques et pratiques du CDL ?", options: ["La FMCSA à Washington, D.C.", "N'importe quelle entreprise de transport", "Le tribunal fédéral", "Le bureau des permis de conduire de votre État ou ses examinateurs agréés"], answer: 3, why: "L'État fait passer les examens et fixe les frais et les formulaires." },
      { objective: "O2", q: "Selon les règles fédérales, quel est l'âge minimum pour conduire un véhicule utilitaire d'un État à un autre ?", options: ["16", "18", "21", "25"], answer: 2, why: "Les conducteurs doivent avoir au moins 21 ans pour conduire des véhicules utilitaires d'un État à un autre." },
      { objective: "O2", q: "Quel ordre est le bon ?", options: ["Examen pratique, puis CLP, puis visite médicale", "Visite médicale et examens théoriques, CLP, formation, puis examen pratique", "Formation, examen pratique, puis examens théoriques", "CLP, examen pratique le jour même, puis formation"], answer: 1, why: "La visite médicale et les examens théoriques mènent au CLP ; la formation et l'attente de 14 jours viennent avant l'examen pratique." },
      { objective: "O2", q: "À quelle fréquence la plupart des conducteurs doivent-ils repasser la visite médicale DOT ?", options: ["Au moins tous les 24 mois", "Une seule fois dans leur vie", "Tous les 10 ans", "Plus jamais après 30 ans"], answer: 0, why: "La plupart des conducteurs doivent être réexaminés et certifiés au moins tous les 24 mois ; certains plus souvent." },
      { objective: "O3", q: "D'où viennent les questions de l'examen écrit du CDL ?", options: ["D'articles de presse", "Du manuel CDL de votre État", "Des réseaux sociaux", "De la radio du camion"], answer: 1, why: "Les examens théoriques reposent sur le manuel CDL officiel de l'État." },
      { objective: "O3", q: "Quelle est une bonne routine de révision pour les examens théoriques ?", options: ["Lire tout le manuel la veille", "Regarder seulement des vidéos", "Apprendre par cœur les réponses d'une application payante", "Une section du manuel par séance, puis écrire trois choses apprises et faire des questions d'entraînement"], answer: 3, why: "Des séances courtes, le rappel par écrit et les questions d'entraînement vous aident à retenir." },
      { objective: "O3", q: "Quand êtes-vous prêt à réserver un examen théorique ?", options: ["Quand vous avez lu la page de titre", "Quand vous obtenez au moins 8 sur 10 aux questions d'entraînement", "Quand un ami dit que vous l'êtes", "Dès que vous avez le manuel"], answer: 1, why: "De bons résultats aux questions d'entraînement sont un bon signe que vous êtes prêt." },
      { objective: "O4", q: "Qu'est-ce qu'une inspection avant le départ ?", options: ["Un contrôle de sécurité du véhicule avant de le conduire", "Un test de la vue", "Un coup d'œil à la météo", "Une vérification de votre fiche de paie"], answer: 0, why: "C'est le contrôle que fait un conducteur pour s'assurer que le véhicule est sûr avant de rouler." },
      { objective: "O4", q: "Quelle est une bonne façon de présenter une partie pendant votre inspection ?", options: ["« Ça, c'est un pneu. »", "« Ça a l'air bien, je crois. »", "« Bien fixé, ni fissuré ni tordu, pas de fuite. »", "« Je vérifierai plus tard. »"], answer: 2, why: "Vous nommez la partie et dites exactement ce qui la rend sûre." },
      { objective: "O4", q: "Sur un semi-remorque, quelle zone relie le tracteur à la remorque ?", options: ["Les rétroviseurs", "La zone d'attelage, comme la sellette", "Le réservoir de carburant", "La radio"], answer: 1, why: "La zone d'attelage, avec la sellette et le pivot d'attelage, maintient la remorque au tracteur." },
      { objective: "O5", q: "Que veut dire G.O.A.L. quand on recule ?", options: ["Go On And Leave (continuez et partez)", "Get Over All Lanes (traversez toutes les voies)", "Gas Off At Lights (lâchez l'accélérateur aux feux)", "Get Out And Look (descendez et regardez)"], answer: 3, why: "Get Out And Look : descendez et vérifiez ce qu'il y a derrière avant de reculer." },
      { objective: "O5", q: "Vous traversez une zone de travaux. Que faites-vous ?", options: ["Ralentir et laisser plus d'espace", "Garder la vitesse de l'autoroute", "Changer souvent de voie", "Suivre de près la voiture de devant"], answer: 0, why: "Dans les zones de travaux, il y a des ouvriers, des voies étroites et des arrêts brusques : ralentissez et laissez de l'espace." },
      { objective: "O5", q: "À quoi servent les règles sur les heures de service ?", options: ["Elles fixent votre salaire", "Elles limitent combien de temps vous conduisez et travaillez avant de vous reposer", "Elles vous disent quelles routes prendre", "Elles fixent la date de votre examen"], answer: 1, why: "Les règles sur les heures de service limitent le temps de conduite et de travail pour que les conducteurs ne soient pas trop fatigués." },
      { objective: "O5", q: "Vous tournez à droite avec un long camion. Quel est le risque ?", options: ["La remorque peut couper le virage et toucher le trottoir ou une voiture", "Le moteur va s'arrêter", "Les rétroviseurs vont se replier", "Il n'y a aucun risque"], answer: 0, why: "À cause du déport, les roues arrière suivent une trajectoire plus courte, donc la remorque peut toucher ce qui se trouve à l'intérieur du virage." },
      { objective: "O4", q: "Pendant votre inspection, vous trouvez un feu qui ne marche pas. Que faites-vous ?", options: ["Rouler de nuit quand même", "L'ignorer s'il fait jour", "Le signaler et le faire réparer avant de rouler", "Le couvrir de ruban adhésif"], answer: 2, why: "Un défaut est signalé et réparé avant que le véhicule ne bouge." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 2, 5, 7, 9, 12, 13, 15, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur chaque ligne. Si une ligne est Pas encore, corrigez cette partie et vérifiez votre plan de nouveau.",
    criteria: [
      { name: "Le bon permis", objective: "O1", notYet: "La classe ou les mentions ne correspondent pas à l'emploi, ou elles manquent.", meets: "La classe et chaque mention correspondent à l'emploi visé et à une vraie offre d'emploi.", exceeds: "Indique aussi un deuxième emploi que le même permis ouvrirait, ou une mention à ajouter plus tard." },
      { name: "Étapes dans l'ordre", objective: "O2", notYet: "Des étapes manquent ou ne sont pas dans l'ordre, ou la règle sur la formation ou l'attente de 14 jours est oubliée.", meets: "Toutes les étapes sont dans l'ordre avec une date cible chacune, y compris la visite médicale, le CLP, la formation et l'attente de 14 jours.", exceeds: "Chaque étape nomme aussi le bureau ou le site web qui s'en occupe." },
      { name: "Formation enregistrée", objective: "O2", notYet: "Aucun organisme, ou des organismes non vérifiés dans le registre.", meets: "Trois organismes du Training Provider Registry avec leurs coordonnées.", exceeds: "Contient les réponses aux questions posées : coût, horaire, conditions du contrat." },
      { name: "Plan de révision", objective: "O3", notYet: "Pas de plan de révision, ou il n'utilise pas le manuel de l'État.", meets: "Des sections du manuel de l'État chaque semaine pour chaque examen nécessaire, avec un score d'entraînement à atteindre.", exceeds: "Contient les scores d'entraînement déjà atteints." },
      { name: "Liste d'inspection avant le départ", objective: "O4", notYet: "La liste saute des zones principales ou ne suit pas un ordre fixe.", meets: "Couvre chaque zone principale dans un ordre fixe, avec ce qu'il faut vérifier sur chaque partie.", exceeds: "L'apprenant peut la dire à voix haute, en montrant les parties, sans lire." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et un plan CDL conforme à la grille",
      "Apprenants qui réussissent les examens théoriques de l'État et obtiennent un CLP dans les 90 jours (enquête de suivi)",
      "Apprenants qui s'inscrivent auprès d'un organisme du Training Provider Registry",
      "Apprenants qui obtiennent un CDL et commencent un emploi de conducteur (rapports des partenaires et de suivi)"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Internet pour ouvrir le manuel CDL de l'État et le Training Provider Registry de la FMCSA",
      "Le manuel CDL de votre État (gratuit sur le site .gov de l'État)",
      "Du papier, un stylo et un calendrier pour le plan",
      "Facultatif : une image ou une maquette de camion, ou une voiture, pour s'entraîner à présenter l'inspection",
      "Environ 60 à 75 minutes au total, plus du temps de révision chaque semaine"
    ],
    facilitatorNotes: [
      "En groupe, imprimez la liste d'inspection de l'État et faites pratiquer la présentation à voix haute par deux.",
      "Ne recommandez pas une école ou une entreprise précise ; montrez aux apprenants comment consulter le Training Provider Registry et comparer.",
      "Rappelez aux apprenants que les règles, les frais et les formulaires varient selon l'État ; il faut toujours vérifier le site .gov de l'État.",
      "Pour les anciens militaires, indiquez la page de l'État sur la dispense militaire de l'examen pratique ; mettez les apprenants qui ont un casier en contact avec un conseiller en réinsertion ou en emploi.",
      "Notez le plan final avec la grille et aidez l'apprenant à corriger une ligne Pas encore à la fois."
    ]
  }
};
