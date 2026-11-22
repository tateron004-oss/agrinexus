"use strict";

// Koach Learn course (French translation of workforce/workforce-ai-new-workforce.js). See scripts/koachlearn-courses/README.md, "Translations".

const BLS_OOH = { name: "Bureau des statistiques du travail des États-Unis : Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" };
const CAREERONESTOP = { name: "CareerOneStop (ministère du Travail des États-Unis) : trouver des formations et des American Job Centers", url: "https://www.careeronestop.org/" };

module.exports = {
  id: "workforce-ai-new-workforce-fr",
  lang: "fr",
  translationOf: "workforce-ai-new-workforce",
  category: "Workforce Development",
  name: "L'IA dans le nouveau monde du travail",
  skills: "Comprendre comment l'IA change les tâches, Découper votre emploi en tâches, Repérer les tâches où l'IA peut aider, Trouver des informations fiables sur l'avenir des métiers, Construire un plan de montée en compétences sur 90 jours, Parler de vos compétences en IA avec les employeurs",
  outcome: "découper votre emploi actuel ou visé en tâches, marquer celles où l'IA peut aider et celles qui dépendent de compétences humaines, chercher les perspectives de votre domaine sur une source officielle, et en faire un plan de montée en compétences sur 90 jours et une façon courte et honnête de décrire vos compétences en IA à un employeur.",
  about: [
    "Ce cours s'adresse aux personnes qui cherchent un emploi ou qui travaillent et qui entendent sans cesse que l'IA va changer les métiers, et veulent savoir ce que ça veut dire pour elles : travailleurs de l'entrepôt et de la logistique, employés du commerce et du service client, employés de bureau et administratifs, aides dans la santé, artisans et chauffeurs.",
    "Vous verrez comment l'IA change surtout des tâches plutôt que des métiers entiers, vous regarderez votre propre emploi tâche par tâche, vous trouverez des informations fiables sur votre domaine, et vous ferez un plan concret pour développer les compétences qui vous gardent précieux. Vous terminerez en vous entraînant à parler de vos compétences en IA en entretien ou avec votre responsable.",
    "Nous ne prédisons pas quels métiers vont disparaître, et aucun cours ne peut promettre un emploi ou une augmentation. Chaque leçon dure environ cinq minutes, avec un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin.",
    "Les sources officielles citées sont américaines. Si vous vivez dans un autre pays, cherchez aussi le service public de l'emploi et les statistiques officielles sur les métiers de votre pays."
  ],
  finalTask: "Faites votre plan de carrière avec l'IA : une liste des tâches de votre emploi actuel ou visé, chacune marquée \"l'IA peut aider\", \"compétence humaine\" ou \"les deux\" ; trois faits sur votre domaine tirés de l'Occupational Outlook Handbook du BLS ; un plan de montée en compétences sur 90 jours avec trois compétences, des ressources gratuites et un temps par semaine ; et une réponse de 30 secondes, honnête et précise, à \"Comment utilisez-vous l'IA dans votre travail ?\".",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des demandeurs d'emploi et des adultes qui travaillent et entendent sans cesse que l'IA va changer les emplois : employés d'entrepôt et de logistique, personnel de commerce et de service client, employés de bureau et administratifs, aides en santé, gens de métier et chauffeurs.",
    startingPoint: "Ils connaissent bien leur propre travail et savent utiliser un smartphone ou un ordinateur. Beaucoup sont inquiets ou incertains face à l'IA, n'ont pas consulté de données officielles sur les perspectives d'emploi et n'ont pas de plan écrit pour acquérir de nouvelles compétences.",
    gap: "L'IA change le temps que prennent certaines tâches dans beaucoup d'emplois. Les apprenants doivent voir quelles tâches l'IA peut les aider à faire et lesquelles dépendent de compétences humaines, vérifier les perspectives de leur domaine sur une source officielle, et suivre un plan réaliste pour acquérir des compétences qu'ils peuvent décrire honnêtement à un employeur.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; aucune formation technique supposée",
      "Appareils : un smartphone ou un ordinateur avec internet ; beaucoup utilisent un ordinateur de bibliothèque ou d'un American Job Center",
      "Temps : des leçons d'environ 5 minutes et un plan de quelques heures par semaine, à côté du travail et de la famille",
      "Vie privée et règles : aucune information privée ni confidentielle de l'entreprise dans les outils d'IA ; les politiques d'IA de l'employeur passent en premier",
      "Les chiffres sur les perspectives d'emploi viennent de la page officielle du BLS, pas de l'IA"
    ],
    prerequisites: "Aucun. Les apprenants qui découvrent les assistants d'IA peuvent suivre « Les outils d'IA essentiels au travail » en même temps que ce cours."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de votre emploi actuel ou du dernier", action: "lister au moins huit tâches de cet emploi et expliquer que l'IA touche des tâches plutôt que des emplois entiers", standard: "avec vos propres mots" },
    { id: "O2", condition: "À partir de votre liste de tâches", action: "marquer chaque tâche « l'IA peut aider », « compétence humaine » ou « les deux »", standard: "avec chaque tâche marquée et la décision finale prise par vous" },
    { id: "O3", condition: "Pour votre métier actuel ou visé", action: "chercher les perspectives d'emploi dans l'Occupational Outlook Handbook du BLS et trouver votre American Job Center le plus proche", standard: "avec trois faits tirés de la page officielle" },
    { id: "O4", condition: "À partir de trois vraies offres d'emploi pour un poste qui vous intéresse", action: "choisir trois compétences à développer et expliquer pourquoi chacune compte", standard: "avec une compétence sur un outil d'IA, une compétence du métier et une compétence humaine" },
    { id: "O5", condition: "Pour vos trois compétences", action: "écrire un plan de montée en compétences sur 90 jours avec une ressource, un temps par semaine et une preuve pour chaque compétence", standard: "avec les deux premières semaines d'étude dans votre agenda" },
    { id: "O6", condition: "Quand un employeur vous demande comment vous utilisez l'IA", action: "donner une réponse de 30 secondes Tâche-Outil-Vérification-Résultat", standard: "honnête, précise et conforme à la politique d'IA de votre employeur" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Comment l'IA change le travail",
      lessons: [
        {
          objectives: ["O1"],
          title: "L'IA change les tâches, pas seulement les métiers",
          minutes: 5,
          goal: "Expliquer comment l'IA touche les tâches à l'intérieur d'un emploi.",
          text: [
            "Chaque emploi est un ensemble de tâches. Une secrétaire médicale répond au téléphone, prend les rendez-vous, vérifie l'assurance, accueille les patients et rassure les personnes inquiètes. Un chef d'équipe d'entrepôt planifie les équipes, suit le stock, forme les nouveaux et règle les problèmes sur le terrain.",
            "Les outils d'IA sont bons pour certaines tâches : écrire des premiers jets de messages, résumer, chercher dans des informations, remplir des formulaires, trier et repérer des tendances. Ils sont faibles pour d'autres : le travail physique, sentir l'ambiance, créer la confiance, gérer une situation nouvelle et assumer la responsabilité.",
            "Donc, dans beaucoup d'emplois, l'IA change les tâches qui prennent du temps. Les personnes qui apprennent à utiliser l'IA pour les tâches répétitives ont souvent plus de temps pour les tâches humaines, et cela peut les rendre plus précieuses."
          ],
          words: [["Tâche", "un morceau de travail dans un emploi, comme prendre un rendez-vous."], ["Tâche répétitive", "une tâche faite de la même façon encore et encore."], ["Montée en compétences", "apprendre de nouvelles compétences pour mieux faire votre travail ou évoluer."]],
          slides: [
            { title: "Un emploi est un ensemble de tâches", bullets: ["Secrétaire médicale : téléphone, rendez-vous, assurance, accueil", "Chef d'entrepôt : équipes, stock, formation, problèmes"] },
            { title: "Ce que l'IA fait bien", bullets: ["Premiers jets et résumés", "Recherche et formulaires", "Tri et repérage de tendances"] },
            { title: "Ce que les personnes font le mieux", bullets: ["Le travail physique", "Sentir l'ambiance et créer la confiance", "Gérer le nouveau ; assumer la responsabilité"] }
          ],
          tryIt: "Écrivez l'intitulé de votre emploi actuel ou du dernier, et listez au moins huit tâches que vous faites (ou faisiez) dans une semaine normale.",
          youCanNow: "expliquer comment l'IA touche les tâches à l'intérieur d'un emploi.",
          quickCheck: [
            { objective: "O1", q: "Quand on réfléchit à la façon dont l'IA change le travail, qu'est-ce qu'un emploi ?", options: ["Une seule tâche", "Seulement un intitulé de poste", "Un ensemble de tâches", "Une liste d'outils"], answer: 2, why: "Un emploi est un ensemble de tâches, et l'IA change certaines tâches plus que d'autres." },
            { objective: "O1", q: "Vous voulez voir comment l'IA pourrait toucher votre emploi. Que faites-vous d'abord ?", options: ["Lister les tâches que vous faites dans une semaine normale", "Démissionner et chercher un autre emploi", "Demander à l'IA si vous allez être remplacé", "Ignorer complètement l'IA"], answer: 0, why: "Lister vos tâches montre celles où l'IA peut aider et celles qui dépendent de vous." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Marquer vos tâches : l'IA peut aider, compétence humaine, ou les deux",
          minutes: 5,
          goal: "Trier les tâches de votre emploi selon l'aide que peut apporter l'IA.",
          text: [
            "Prenez votre liste de tâches et marquez chacune. \"L'IA peut aider\" : écrire un e-mail, faire une liste de contrôle, résumer un long règlement. \"Compétence humaine\" : calmer un client mécontent en face à face, soulever et charger en sécurité, réparer une machine. \"Les deux\" : écrire un rapport où l'IA fait un premier jet et vous vérifiez les faits, ou faire un planning où l'IA propose et vous décidez.",
            "Vous pouvez demander à un assistant d'IA de vous aider à réfléchir : \"Je suis chef d'équipe dans un magasin. Voici mes tâches. Pour lesquelles un assistant d'IA pourrait-il aider, et comment ?\" Puis utilisez votre propre jugement : vous connaissez le métier mieux que lui.",
            "Regardez les tâches \"compétence humaine\". Ce sont des forces à développer et à mettre en avant devant les employeurs : communication, travail d'équipe, résolution de problèmes, sécurité, attention aux autres."
          ],
          steps: ["Marquez chaque tâche : l'IA peut aider, compétence humaine, ou les deux.", "Demandez des idées à un assistant d'IA, puis décidez vous-même.", "Entourez deux tâches \"l'IA peut aider\" à essayer ce mois-ci.", "Soulignez vos tâches \"compétence humaine\" les plus fortes."],
          words: [["Compétences humaines", "des compétences comme la communication, le travail d'équipe, le jugement et l'attention aux autres, que les personnes font le mieux ; on parle aussi de savoir-être ou de compétences durables."]],
          slides: [
            { title: "Trois étiquettes", bullets: ["L'IA peut aider : e-mails, listes, résumés", "Compétence humaine : calmer, soulever, réparer", "Les deux : l'IA rédige, vous vérifiez et décidez"] },
            { title: "Demandez à l'IA, puis décidez", bullets: ["\"Pour quelles tâches l'IA pourrait-elle aider ?\"", "Vous connaissez le métier mieux qu'elle"] },
            { title: "Vos forces", bullets: ["Communication et travail d'équipe", "Résolution de problèmes et sécurité", "Attention aux autres et jugement"] }
          ],
          tryIt: "Étiquetez chaque tâche de votre liste. Entourez deux tâches \"l'IA peut aider\" que vous essaierez ce mois-ci, et soulignez vos deux tâches de compétence humaine les plus fortes.",
          youCanNow: "trier les tâches de votre emploi selon l'aide de l'IA et selon l'importance de vos compétences humaines.",
          quickCheck: [
            { objective: "O2", q: "Quelle tâche relève d'une compétence humaine ?", options: ["Recopier des chiffres dans un formulaire", "Écrire le même rapport chaque jour", "Trier des e-mails par date", "Calmer un client mécontent"], answer: 3, why: "Créer la confiance et calmer les gens dépendent de compétences humaines." },
            { objective: "O2", q: "Une IA marque votre tâche « traiter les réclamations des clients » seulement « l'IA peut aider ». Vous n'êtes pas d'accord. Que faites-vous ?", options: ["Accepter l'étiquette de l'IA", "Prendre vous-même la décision finale ; c'est peut-être « les deux »", "Supprimer la tâche", "Demander à une autre IA jusqu'à ce qu'elle soit d'accord"], answer: 1, why: "C'est vous qui connaissez le mieux votre emploi : vous prenez la décision finale pour chaque étiquette." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Trouver des informations fiables sur votre domaine",
          minutes: 5,
          goal: "Chercher les perspectives de votre métier sur une source officielle.",
          text: [
            "Les titres sur l'IA et l'emploi sont souvent alarmistes ou exagérés. Utilisez plutôt des sources officielles fondées sur des données. Aux États-Unis, le Bureau des statistiques du travail (Bureau of Labor Statistics, BLS) publie l'Occupational Outlook Handbook sur bls.gov/ooh. Pour des centaines de métiers, il montre en quoi consiste le travail, la formation habituelle, le salaire et les perspectives d'emploi prévues.",
            "Cherchez votre métier, puis notez : ce que font les travailleurs, comment le devenir, le salaire médian et les perspectives. Regardez aussi les métiers proches : ils peuvent montrer les étapes suivantes.",
            "CareerOneStop, du ministère du Travail des États-Unis, vous aide à trouver des formations et votre American Job Center local, qui peut proposer des services d'orientation gratuits. Demandez à l'IA d'expliquer ce qui n'est pas clair sur ces pages, mais prenez les chiffres sur la page elle-même. Si vous vivez ailleurs, faites la même recherche sur le site du service public de l'emploi de votre pays."
          ],
          steps: ["Allez sur bls.gov/ooh et cherchez votre métier.", "Notez : ce qu'ils font, comment le devenir, le salaire médian, les perspectives.", "Regardez deux métiers proches.", "Trouvez votre American Job Center local sur CareerOneStop."],
          words: [["BLS", "Bureau of Labor Statistics : l'agence américaine qui publie les données sur l'emploi et les salaires."], ["Perspectives d'emploi", "l'évolution prévue du nombre d'emplois dans un métier."], ["Salaire médian", "le salaire du milieu : la moitié gagne plus, l'autre moitié moins."]],
          slides: [
            { title: "Évitez le battage", bullets: ["Utilisez des sources officielles fondées sur des données", "Occupational Outlook Handbook du BLS : bls.gov/ooh"] },
            { title: "Ce qu'il faut noter", bullets: ["Ce que font les travailleurs", "Comment le devenir", "Salaire médian et perspectives"] },
            { title: "Aide locale gratuite", bullets: ["CareerOneStop : formations et centres pour l'emploi", "Les American Job Centers offrent de l'orientation", "Les chiffres viennent de la page, pas de l'IA"] }
          ],
          sources: [BLS_OOH, CAREERONESTOP],
          tryIt: "Cherchez votre métier actuel ou visé sur bls.gov/ooh. Notez trois faits de la page, puis trouvez l'American Job Center le plus proche sur CareerOneStop (ou le service public de l'emploi de votre pays).",
          youCanNow: "trouver des informations fiables sur les perspectives et les formations de votre domaine.",
          quickCheck: [
            { objective: "O3", q: "Que montre l'Occupational Outlook Handbook ?", options: ["Ce que font les travailleurs, comment le devenir, le salaire et les perspectives", "Les offres d'emploi près de chez vous aujourd'hui", "Votre score de crédit", "Des avis sur les entreprises"], answer: 0, why: "L'OOH du BLS décrit chaque métier, son salaire et ses perspectives." },
            { objective: "O3", q: "Une IA vous dit que votre domaine va croître de 30 %. Que faites-vous ?", options: ["Le répéter à des amis", "Organiser votre carrière autour de ce chiffre", "Vérifier le chiffre sur la page officielle du BLS", "Ignorer toutes les données sur l'emploi"], answer: 2, why: "Les chiffres sur les perspectives d'emploi viennent de la page officielle, pas de l'IA." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment l'IA change le travail",
        questions: [
          { objective: "O1", q: "Dans beaucoup d'emplois, l'IA change surtout :", options: ["Rien du tout", "Les tâches qui prennent du temps", "Chaque tâche complètement", "Seulement l'intitulé du poste"], answer: 1, why: "L'IA touche les tâches à l'intérieur des emplois." },
          { objective: "O2", q: "Pour quelle tâche l'IA est-elle en général douée ?", options: ["Réparer un chariot élévateur", "Calmer un client mécontent en face à face", "Soulever des cartons en sécurité", "Écrire un premier jet d'e-mail de routine"], answer: 3, why: "Rédiger du texte est un point fort des outils d'IA." },
          { objective: "O2", q: "Écrire un rapport où l'IA fait un premier jet et vous vérifiez les faits est étiqueté :", options: ["Les deux", "Compétence humaine seulement", "IA seulement", "Aucun"], answer: 0, why: "L'IA aide et une personne vérifie." },
          { objective: "O3", q: "Où trouver les perspectives d'emploi officielles d'un métier aux États-Unis ?", options: ["Une supposition de l'IA", "Une vidéo virale", "L'Occupational Outlook Handbook du BLS", "Un fil de commentaires"], answer: 2, why: "Le BLS publie les données officielles sur les perspectives." },
          { objective: "O3", q: "Que peut offrir un American Job Center ?", options: ["Des prêts", "Des emplois garantis", "Des services d'orientation gratuits et des informations sur les formations", "Des diplômes universitaires"], answer: 2, why: "Ils offrent des services d'orientation ; aucune garantie." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Faire votre plan",
      lessons: [
        {
          objectives: ["O4"],
          title: "Choisir trois compétences à développer",
          minutes: 5,
          goal: "Choisir trois compétences adaptées à votre emploi et à vos objectifs.",
          text: [
            "Choisissez un mélange : une compétence d'outil d'IA, une compétence de votre domaine et une compétence humaine. Exemple pour un employé d'entrepôt qui veut devenir chef d'équipe : (1) utiliser un assistant d'IA pour écrire des notes de relève claires, (2) apprendre le logiciel de gestion d'entrepôt et les bases de l'inventaire, (3) encadrer et former les nouveaux.",
            "Utilisez ce que vous avez trouvé : la partie \"How to become one\" (comment le devenir) du BLS, les offres d'emploi pour le poste visé et votre liste de tâches. Les compétences qui apparaissent dans beaucoup d'offres valent la peine d'être apprises.",
            "Demandez à l'IA de vous aider à comparer : \"Voici cinq offres d'emploi de chef d'équipe d'entrepôt. Quelles compétences reviennent le plus souvent ?\" Collez seulement les offres, rien de privé."
          ],
          steps: ["Rassemblez trois à cinq offres d'emploi pour le poste visé.", "Listez les compétences qu'elles demandent le plus.", "Choisissez une compétence d'outil d'IA, une de votre domaine et une humaine.", "Écrivez pourquoi chacune compte."],
          words: [["Offre d'emploi", "une annonce qui liste les missions et les compétences demandées pour un poste."], ["Compétence métier", "une compétence propre à votre type de travail, comme les logiciels de stock ou les termes médicaux."]],
          slides: [
            { title: "Choisissez un mélange de trois", bullets: ["Une compétence d'outil d'IA", "Une compétence métier", "Une compétence humaine"] },
            { title: "Où chercher", bullets: ["\"How to become one\" du BLS", "Offres d'emploi pour le poste visé", "Votre propre liste de tâches"] },
            { title: "L'IA peut comparer les offres", bullets: ["\"Quelles compétences reviennent le plus ?\"", "Collez seulement les offres, rien de privé"] }
          ],
          tryIt: "Trouvez trois offres d'emploi pour un poste qui vous intéresse. Demandez à l'IA quelles compétences reviennent le plus souvent, puis choisissez vos trois compétences et écrivez pourquoi chacune compte.",
          youCanNow: "choisir trois compétences à développer à partir de vraies offres d'emploi et de vos objectifs.",
          quickCheck: [
            { objective: "O4", q: "Quel est un bon mélange de trois compétences à développer ?", options: ["Trois outils d'IA", "Une compétence sur un outil d'IA, une compétence du métier et une compétence humaine", "Trois compétences que vous avez déjà", "N'importe lesquelles vues dans une publicité"], answer: 1, why: "Un mélange couvre l'usage de l'IA, votre métier et les compétences humaines que l'IA ne remplace pas." },
            { objective: "O4", q: "Vous voulez savoir quelles compétences les employeurs veulent pour le poste visé. Que faites-vous ?", options: ["Deviner", "Demander à un ami d'un autre domaine", "Choisir les compétences qui paraissent les plus difficiles", "Lire de vraies offres d'emploi et voir quelles compétences reviennent le plus"], answer: 3, why: "Les compétences qui reviennent dans beaucoup de vraies offres valent la peine d'être apprises." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Construire un plan de montée en compétences sur 90 jours",
          minutes: 5,
          goal: "Transformer vos trois compétences en plan réaliste sur 90 jours.",
          text: [
            "Un plan fait que l'apprentissage a vraiment lieu. Pour chaque compétence, écrivez : une ressource gratuite ou peu chère, un temps par semaine, et une façon de prouver que vous l'avez apprise. La preuve peut être un certificat, un projet, un exemple de travail ou votre responsable qui vous voit faire.",
            "Les ressources gratuites comprennent votre bibliothèque (beaucoup offrent des cours en ligne gratuits), les American Job Centers, les community colleges (établissements publics d'études courtes), les formations de l'employeur, et des cours gratuits de grandes entreprises technologiques. Vérifiez le coût et les détails sur le site officiel de chacun.",
            "Restez modeste : deux ou trois heures par semaine valent mieux qu'un grand plan abandonné. Utilisez un assistant d'IA pour faire le planning hebdomadaire et vous interroger, et entraînez-vous à la compétence IA sur de vraies tâches au travail si votre employeur le permet."
          ],
          steps: ["Pour chaque compétence : ressource, temps par semaine, preuve.", "Vérifiez le coût et les détails de chaque ressource sur son site officiel.", "Mettez les moments d'apprentissage hebdomadaires dans votre agenda.", "Faites le point aux jours 30, 60 et 90."],
          words: [["Preuve de compétence", "quelque chose qui montre que vous savez le faire : un certificat, un projet ou un exemple de travail."], ["Community college", "un établissement public local aux États-Unis qui propose des cours et des certificats peu chers."]],
          slides: [
            { title: "Pour chaque compétence", bullets: ["Une ressource gratuite ou peu chère", "Un temps par semaine", "Une façon de la prouver"] },
            { title: "Où apprendre gratuitement", bullets: ["Cours en ligne de la bibliothèque", "American Job Centers et community colleges", "Formations de l'employeur"] },
            { title: "Restez modeste", bullets: ["2 à 3 heures par semaine, tenables", "L'IA fait le planning et vous interroge", "Faites le point à 30, 60 et 90 jours"] }
          ],
          sources: [CAREERONESTOP],
          tryIt: "Écrivez votre plan sur 90 jours : pour chacune de vos trois compétences, une ressource, un temps par semaine et une preuve. Mettez les moments d'étude des deux premières semaines dans votre agenda.",
          youCanNow: "construire un plan réaliste sur 90 jours pour apprendre trois nouvelles compétences.",
          quickCheck: [
            { objective: "O5", q: "Laquelle est une preuve de compétence ?", options: ["Dire que vous êtes bon", "Regarder une vidéo", "Un certificat, un projet ou un exemple de travail", "Mettre un cours en favori"], answer: 2, why: "Une preuve, c'est quelque chose que vous pouvez montrer, comme un certificat, un projet ou un exemple de travail." },
            { objective: "O5", q: "Vous travaillez à temps plein. Quel plan d'étude écrivez-vous ?", options: ["2 à 3 heures par semaine, prévues dans votre agenda", "10 heures chaque soir", "Étudier quand vous en avez envie", "Étudier seulement la semaine avant un entretien"], answer: 0, why: "Un petit temps régulier inscrit dans votre agenda est le plan qui a le plus de chances de marcher." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Parler de vos compétences en IA avec les employeurs",
          minutes: 5,
          goal: "Donner une réponse courte, honnête et précise sur votre utilisation de l'IA au travail.",
          text: [
            "Les employeurs demandent de plus en plus : \"Comment utilisez-vous l'IA ?\" Une bonne réponse est précise et honnête, et montre du jugement. Utilisez le modèle : Tâche, Outil, Vérification, Résultat.",
            "Exemple : \"J'utilise Microsoft Copilot pour écrire mes notes de fin de service (tâche et outil). Je vérifie toujours les quantités avec le rapport du scanner avant de les envoyer (vérification). Ça me fait gagner environ 15 minutes par service, et le chef d'équipe suivant reçoit des notes plus claires (résultat).\"",
            "N'exagérez jamais. N'affirmez pas des compétences que vous n'avez pas, et suivez la politique de votre employeur sur l'IA : ne mettez pas d'informations confidentielles de l'entreprise ou des clients dans des outils d'IA. Montrer que vous connaissez les limites fait partie de la compétence."
          ],
          steps: ["Choisissez une vraie tâche où vous avez utilisé l'IA (ou vous êtes entraîné).", "Dites la tâche, l'outil, comment vous avez vérifié et le résultat.", "Restez à environ 30 secondes.", "Entraînez-vous à voix haute."],
          words: [["Politique sur l'IA", "les règles d'un employeur sur la façon dont le personnel peut utiliser les outils d'IA."], ["Informations confidentielles", "des informations de l'entreprise ou des clients qui ne doivent pas sortir de l'entreprise."]],
          slides: [
            { title: "Tâche, Outil, Vérification, Résultat", bullets: ["Ce que vous avez fait", "Quel outil d'IA", "Comment vous avez vérifié", "Ce que ça a amélioré"] },
            { title: "Exemple", bullets: ["\"Copilot m'aide à écrire mes notes de fin de service.", "Je vérifie les quantités avec le rapport du scanner.", "Ça me fait gagner 15 minutes par service.\""] },
            { title: "Montrez du jugement", bullets: ["N'exagérez jamais vos compétences", "Suivez la politique de votre employeur sur l'IA", "Gardez les données confidentielles hors de l'IA"] }
          ],
          tryIt: "Tâche finale : terminez votre plan de carrière avec l'IA : liste de tâches étiquetées, trois faits du BLS, votre plan sur 90 jours, et une réponse de 30 secondes Tâche-Outil-Vérification-Résultat que vous répétez à voix haute.",
          youCanNow: "planifier votre évolution dans un monde du travail transformé par l'IA et parler honnêtement de vos compétences en IA avec les employeurs.",
          quickCheck: [
            { objective: "O6", q: "Dans une réponse Tâche-Outil-Vérification-Résultat, qu'est-ce que le Résultat ?", options: ["Le nom de l'outil d'IA", "La façon dont vous avez vérifié le travail de l'IA", "Ce que vous avez demandé à l'IA", "Ce qui s'est amélioré grâce à votre travail"], answer: 3, why: "Le Résultat, c'est l'effet obtenu, comme du temps gagné ou moins d'erreurs." },
            { objective: "O6", q: "Un recruteur demande si vous avez utilisé l'IA pour faire des rapports. Vous n'avez essayé que deux fois. Que dites-vous ?", options: ["Dire que vous êtes expert", "Décrire honnêtement les deux fois : la tâche, l'outil, la vérification et le résultat", "Dire que vous n'avez jamais entendu parler de l'IA", "Changer de sujet"], answer: 1, why: "Une réponse honnête et précise crée la confiance ; n'annoncez jamais des compétences que vous n'avez pas." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Faire votre plan",
        questions: [
          { objective: "O4", q: "Un bon mélange de trois compétences est :", options: ["Une compétence d'outil d'IA, une compétence métier, une compétence humaine", "Trois applications au hasard", "Seulement des compétences en IA", "Aucune"], answer: 0, why: "Un mélange vous garde équilibré et précieux." },
          { objective: "O4", q: "Où voir les compétences que veulent les employeurs ?", options: ["Un mème", "Un horoscope", "Une supposition de l'IA", "De vraies offres d'emploi pour le poste visé"], answer: 3, why: "Les offres listent les compétences demandées." },
          { objective: "O5", q: "Quel plan a le plus de chances de marcher ?", options: ["40 heures ce week-end seulement", "2 à 3 heures par semaine, dans votre agenda", "Quand vous en avez envie", "Aucun plan"], answer: 1, why: "Les petits plans réguliers se réalisent." },
          { objective: "O6", q: "Dans Tâche, Outil, Vérification, Résultat, \"Vérification\" veut dire :", options: ["Comment vous avez vérifié le travail de l'IA", "Votre fiche de paie", "Un chèque bancaire", "Vérifier vos e-mails"], answer: 0, why: "Vérifier montre du jugement." },
          { objective: "O6", q: "Que ne faut-il PAS faire quand vous décrivez vos compétences en IA ?", options: ["Dire comment vous vérifiez le travail", "Donner un exemple précis", "Affirmer des compétences que vous n'avez pas", "Suivre la politique de votre employeur"], answer: 2, why: "L'honnêteté compte." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA dans le nouveau monde du travail",
    questions: [
      { objective: "O1", q: "Un emploi, c'est surtout :", options: ["Une seule tâche", "Un ensemble de tâches", "Seulement un intitulé", "Une fiche de paie"], answer: 1, why: "Les emplois contiennent beaucoup de tâches." },
      { objective: "O1", q: "Laquelle est une tâche répétitive ?", options: ["Animer une réunion d'équipe", "Rassurer un patient qui a peur", "Gérer une urgence toute nouvelle", "Écrire le même rapport chaque jour"], answer: 3, why: "Les tâches répétitives se refont de la même façon." },
      { objective: "O1", q: "Qu'est-ce que la montée en compétences ?", options: ["Un type d'IA", "Démissionner", "Travailler moins d'heures", "Apprendre de nouvelles compétences pour mieux faire ou évoluer"], answer: 3, why: "La montée en compétences développe de nouvelles compétences." },
      { objective: "O2", q: "Laquelle est une compétence humaine ?", options: ["Trier un tableur", "Créer la confiance avec les clients", "Résumer un document", "Corriger l'orthographe"], answer: 1, why: "Créer la confiance est une force humaine." },
      { objective: "O2", q: "Quand l'IA étiquette vos tâches, qui a le dernier mot ?", options: ["Votre voisin", "L'IA", "Vous", "Personne"], answer: 2, why: "Vous connaissez le mieux votre métier." },
      { objective: "O2", q: "Pourquoi souligner vos tâches de compétence humaine ?", options: ["Ce sont des forces à développer et à mettre en avant", "Pour les supprimer", "Pour les cacher", "Elles ne comptent pas"], answer: 0, why: "Les compétences humaines gardent leur valeur." },
      { objective: "O3", q: "BLS veut dire :", options: ["Basic Labor Service", "Business Learning System", "Bureau of Labor Statistics", "Board of Licensed Skills"], answer: 2, why: "Le BLS publie les données sur l'emploi." },
      { objective: "O3", q: "L'Occupational Outlook Handbook montre :", options: ["Ce que font les travailleurs, comment le devenir, le salaire et les perspectives", "Les nouvelles des célébrités", "Des conseils boursiers", "Des recettes"], answer: 0, why: "Ce sont ses parties principales." },
      { objective: "O3", q: "Où prendre les chiffres sur les perspectives d'emploi ?", options: ["Dans un résumé de l'IA sans vérifier", "Sur la page officielle", "Dans un titre d'actualité", "Dans une rumeur"], answer: 1, why: "L'IA peut se tromper sur les chiffres." },
      { objective: "O3", q: "CareerOneStop vient :", options: ["D'un opérateur téléphonique", "D'un réseau social", "D'une banque", "Du ministère du Travail des États-Unis"], answer: 3, why: "C'est une ressource du ministère du Travail." },
      { objective: "O4", q: "Les compétences qui apparaissent dans beaucoup d'offres d'emploi :", options: ["Valent la peine d'être apprises", "Ne sont pas importantes", "Sont illégales", "Sont dépassées"], answer: 0, why: "Les employeurs les veulent clairement." },
      { objective: "O4", q: "Quand vous collez des offres d'emploi dans l'IA, laissez de côté :", options: ["Les listes de compétences", "Le texte de l'offre", "L'intitulé du poste", "Vos informations privées"], answer: 3, why: "Gardez les détails privés à l'écart." },
      { objective: "O5", q: "Laquelle est une preuve de compétence ?", options: ["Une rumeur", "Un souhait", "Un certificat, un projet ou un exemple de travail", "Une publication disant que vous êtes bon"], answer: 2, why: "Une preuve montre ce que vous savez faire." },
      { objective: "O5", q: "Où trouve-t-on souvent des cours en ligne gratuits ?", options: ["Dans les publicités", "À votre bibliothèque", "Dans les spams", "Nulle part"], answer: 1, why: "Beaucoup de bibliothèques proposent des cours gratuits." },
      { objective: "O5", q: "Quand faire le point sur votre plan de 90 jours ?", options: ["Toutes les heures", "Jamais", "Seulement le premier jour", "Aux jours 30, 60 et 90"], answer: 3, why: "Faire le point régulièrement vous garde sur la bonne voie." },
      { objective: "O6", q: "Une bonne réponse sur vos compétences en IA est :", options: ["Copiée sur un site", "Vague et exagérée", "Précise et honnête", "Inventée"], answer: 2, why: "Les réponses précises et honnêtes créent la confiance." },
      { objective: "O6", q: "Qu'est-ce qui a sa place dans une réponse Tâche-Outil-Vérification-Résultat ?", options: ["\"Je vérifie les quantités avec le rapport du scanner.\"", "\"L'IA fait tout mon travail.\"", "\"Je colle les données des clients dans des chatbots.\"", "\"Je ne vérifie jamais rien.\""], answer: 0, why: "Elle montre comment vous vérifiez." },
      { objective: "O6", q: "Avant d'utiliser l'IA au travail, vous devez connaître :", options: ["Le mot de passe d'un collègue", "La politique de votre employeur sur l'IA", "Les numéros de carte des clients", "Rien"], answer: 1, why: "La politique fixe ce qui est permis." },
      { objective: "O6", q: "Les informations confidentielles de l'entreprise doivent :", options: ["Être collées dans n'importe quel chatbot", "Rester hors des outils d'IA sauf accord de l'employeur", "Être publiées en ligne", "Être partagées avec des amis"], answer: 1, why: "Elles doivent être protégées." },
      { objective: "O6", q: "Que promet ce cours sur l'emploi ?", options: ["Rien ; il vous aide à planifier et à développer vos compétences", "Un emploi garanti", "Une augmentation garantie", "Une promotion"], answer: 0, why: "Aucun cours ne peut promettre de résultats." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      4,
      7,
      10,
      12,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Liste de tâches marquées",
        objective: "O2",
        notYet: "Moins de huit tâches, ou des tâches non marquées.",
        meets: "Au moins huit tâches, chacune marquée « l'IA peut aider », « compétence humaine » ou « les deux ».",
        exceeds: "Deux tâches « l'IA peut aider » sont entourées pour être essayées et deux forces « compétence humaine » sont soulignées."
      },
      {
        name: "Faits officiels sur le domaine",
        objective: "O3",
        notYet: "Les faits manquent ou viennent de l'IA.",
        meets: "Trois faits sur le domaine tirés de l'Occupational Outlook Handbook du BLS.",
        exceeds: "Nomme aussi l'American Job Center le plus proche et un service qu'il propose."
      },
      {
        name: "Plan sur 90 jours",
        objective: "O5",
        notYet: "Les compétences n'ont ni ressource, ni temps, ni preuve.",
        meets: "Trois compétences, chacune avec une ressource gratuite, un temps par semaine et une preuve, revues aux jours 30, 60 et 90.",
        exceeds: "Les deux premières semaines d'étude sont dans l'agenda de l'apprenant."
      },
      {
        name: "Réponse de 30 secondes sur l'IA",
        objective: "O6",
        notYet: "La réponse est vague ou annonce des compétences que l'apprenant n'a pas.",
        meets: "Une réponse honnête Tâche-Outil-Vérification-Résultat dite à voix haute en environ 30 secondes.",
        exceeds: "La réponse comprend un chiffre ou un résultat précis."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent l'exercice final (grille d'évaluation)",
      "Apprenants qui suivent encore leur plan sur 90 jours au jour 30 (enquête de suivi)",
      "Apprenants qui obtiennent un certificat ou terminent un cours de leur plan dans les 90 jours",
      "Apprenants qui obtiennent un nouvel emploi, une promotion ou une augmentation dans les 6 mois"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone ou un ordinateur avec internet",
      "Un assistant d'IA gratuit : ChatGPT, Microsoft Copilot ou Google Gemini",
      "Les sites gratuits bls.gov/ooh et CareerOneStop, et trois vraies offres d'emploi",
      "Du papier, une application de notes ou un agenda pour la liste de tâches et le plan sur 90 jours",
      "Environ 60 minutes au total : leçons, exercices, contrôles et exercice final"
    ],
    facilitatorNotes: [
      "Dans un centre pour l'emploi ou un groupe en entreprise : faites le test de départ ensemble, puis faites marquer les listes de tâches par deux pour que chacun puisse discuter les étiquettes de l'autre.",
      "Dites honnêtement que le cours ne promet aucun emploi ; il aide à planifier et à développer des compétences.",
      "Rappelez de suivre la politique d'IA de l'employeur et de garder les informations confidentielles de l'entreprise hors des outils d'IA.",
      "Faites dire à voix haute la réponse de 30 secondes à un partenaire.",
      "Notez le plan de carrière avec l'IA à l'aide de la grille, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
