"use strict";

// Koach Learn course (French translation of leadership/lead-inclusive-teams.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "lead-inclusive-teams-fr",
  lang: "fr",
  translationOf: "lead-inclusive-teams",
  category: "Leadership Development",
  name: "Diriger des équipes inclusives",
  skills: "Créer un sentiment d'appartenance, Repérer les biais inconscients, Recruter et promouvoir de façon équitable, Animer des réunions où chacun est entendu, Accessibilité et langage respectueux, Réagir à l'exclusion ou au harcèlement",
  outcome: "diriger une équipe où chacun peut contribuer : créer un sentiment d'appartenance, vérifier vos décisions pour repérer les biais, recruter et promouvoir avec des habitudes équitables, animer des réunions où chaque voix est entendue, rendre le travail accessible, utiliser un langage respectueux, et réagir vite et correctement quand quelqu'un est exclu ou harcelé.",
  about: [
    "Ce cours s'adresse aux chefs d'équipe, superviseurs, encadrants, coordinateurs de bénévoles et chefs d'entreprise qui veulent que chaque personne de leur équipe soit traitée de façon équitable et puisse donner le meilleur d'elle-même.",
    "Il est pratique, pas politique. Vous apprendrez de petites habitudes de tous les jours : remarquer les biais dans vos propres décisions, rendre le recrutement et les promotions plus équitables, animer une réunion pour que les personnes plus discrètes soient entendues, rendre le travail accessible, et savoir quoi faire quand quelqu'un est mis à l'écart ou maltraité.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites la tâche \"Essayez maintenant\". Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Ce cours n'est pas un conseil juridique ; pour vos obligations légales, consultez les sources officielles citées dans les leçons ou demandez à un professionnel qualifié."
  ],
  finalTask: "Rédigez un plan d'une page sur vos \"habitudes d'inclusion\" pour votre équipe : une habitude pour l'appartenance, une vérification des biais que vous appliquerez à une vraie décision, trois habitudes de recrutement ou de promotion équitables, une routine de réunion qui garantit que chaque voix est entendue, une amélioration de l'accessibilité, et les étapes que vous suivrez si quelqu'un signale une exclusion ou un harcèlement, y compris qui vous prévenez et où se trouvent les règles officielles.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des chefs d'équipe, des superviseurs, des managers, des propriétaires de petites entreprises et des responsables d'associations qui veulent que chaque membre de leur équipe contribue et soit traité équitablement.",
    startingPoint: "Ils veulent être justes et savent faire tourner le travail quotidien d'une équipe. Peu ont une routine pour vérifier les biais dans leurs décisions, mener des entretiens structurés, rendre les réunions et les documents accessibles, ou réagir à un signalement de harcèlement.",
    gap: "Sans habitudes simples, certaines personnes se taisent, le recrutement et les promotions glissent vers les personnes qui nous ressemblent, et les responsables gèrent mal les signalements de harcèlement. Ils ont besoin d'habitudes pratiques pour l'appartenance, la vérification des biais, le recrutement équitable, les réunions inclusives, l'accessibilité et une réponse claire à l'exclusion ou au harcèlement.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Temps : des leçons courtes qui s'insèrent dans une journée de travail",
      "Les lois varient selon le pays et la taille de l'organisation ; aux États-Unis, les apprenants consultent eeoc.gov et parlent de leurs obligations aux RH ou à un avocat en droit du travail",
      "Vie privée : les demandes d'aménagement et les signalements de harcèlement sont traités en privé et suivent la politique de l'organisation",
      "Sécurité : toute personne en danger immédiat appelle les services d'urgence"
    ],
    prerequisites: "Aucun. Le cours « Gérer une équipe » est un bon complément."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pour une équipe que vous dirigez ou que vous connaissez", action: "repérer les signes d'appartenance et choisir une habitude qui la renforce", standard: "en nommant une habitude que vous pouvez répéter chaque semaine" },
    { id: "O2", condition: "À partir d'une vraie décision concernant des personnes", action: "appliquer une vérification des biais : fixer d'abord les critères, écrire vos raisons et vous demander si vous décideriez la même chose pour quelqu'un d'un autre groupe", standard: "avant que la décision soit définitive" },
    { id: "O3", condition: "À partir d'un poste à pourvoir ou d'une promotion", action: "prévoir des habitudes de recrutement ou de promotion équitables, comme des exigences liées au poste et des entretiens structurés", standard: "en jugeant chaque candidat selon les mêmes critères liés au poste" },
    { id: "O4", condition: "Pour une réunion d'équipe régulière", action: "prévoir une routine de réunion qui donne à chaque personne une chance équitable de parler", standard: "avec au moins deux outils, comme le tour de table, l'écriture en silence ou la parole d'abord aux personnes à distance" },
    { id: "O5", condition: "Pour une partie du travail de votre équipe", action: "choisir une amélioration de l'accessibilité et utiliser un langage respectueux pour les noms et les pronoms", standard: "en traitant les demandes en privé" },
    { id: "O6", condition: "Quand quelqu'un signale une exclusion ou un harcèlement, ou que vous en êtes témoin", action: "lister les étapes que vous suivrez, qui vous prévenez et où se trouvent les règles officielles", standard: "en agissant tout de suite et en protégeant la personne contre les représailles" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Appartenance et décisions équitables",
      lessons: [
        {
          objectives: ["O1"],
          title: "À quoi ressemble l'appartenance dans une équipe",
          minutes: 5,
          goal: "Nommer les signes d'appartenance dans une équipe et choisir une habitude qui la renforce.",
          text: [
            "Une équipe a un sentiment d'appartenance quand chaque personne se sent respectée, libre de parler, et appréciée pour ce qu'elle apporte. Les personnes qui se sentent à leur place partagent leurs idées, reconnaissent tôt leurs erreurs et restent plus longtemps. Celles qui se sentent mises à l'écart se taisent, et l'équipe perd leurs idées.",
            "L'appartenance se construit par de petites actions répétées du responsable : apprendre à bien prononcer le nom de chaque personne, partager les informations importantes avec tout le monde en même temps, répartir équitablement les missions qui font progresser, et remercier les gens qui signalent des problèmes au lieu de les punir.",
            "Demandez, ne devinez pas. Une courte question en privé, comme \"Qu'est-ce qui vous aiderait à prendre la parole ici ?\", vous en apprend plus que n'importe quelle supposition."
          ],
          steps: ["Remarquez qui prend la parole et qui reste silencieux.", "Partagez les informations clés avec tout le monde en même temps.", "Répartissez équitablement les bonnes missions.", "Remerciez les personnes qui signalent des problèmes.", "Demandez en privé ce qui aiderait chaque personne à prendre la parole."],
          words: [["Inclusion", "faire en sorte que chaque personne puisse participer pleinement et équitablement."], ["Appartenance", "le sentiment d'être respecté et apprécié comme membre d'un groupe."], ["Sécurité psychologique", "la conviction partagée qu'on peut parler, poser des questions ou reconnaître ses erreurs sans être puni ni moqué."]],
          slides: [
            { title: "Les signes d'appartenance", bullets: ["Les gens se sentent respectés et appréciés", "Ils prennent la parole et reconnaissent tôt leurs erreurs", "Ils restent plus longtemps"] },
            { title: "De petites habitudes qui la construisent", bullets: ["Bien prononcer chaque nom", "Partager les nouvelles avec tous en même temps", "Répartir équitablement les bonnes missions", "Remercier ceux qui signalent des problèmes"] },
            { title: "Demandez, ne devinez pas", bullets: ["\"Qu'est-ce qui vous aiderait à prendre la parole ici ?\""] }
          ],
          tryIt: "Pendant une semaine, remarquez qui parle dans vos réunions d'équipe et qui ne parle pas. Notez une habitude d'appartenance de cette leçon que vous allez commencer, et une personne à qui vous demanderez en privé ce qui l'aiderait à prendre la parole.",
          youCanNow: "décrire à quoi ressemble l'appartenance et commencer une habitude qui la renforce.",
          quickCheck: [
            { objective: "O1", q: "Que se passe-t-il quand des membres d'une équipe se sentent mis à l'écart ?", options: ["Ils travaillent plus dur pour faire leurs preuves", "Ils se taisent et l'équipe perd leurs idées", "Rien ne change", "Ils partent toujours le jour même"], answer: 1, why: "Les personnes qui se sentent mises à l'écart se taisent, et leurs idées sont perdues." },
            { objective: "O1", q: "Vous ne savez pas pourquoi un membre de l'équipe ne parle jamais en réunion. Que faites-vous ?", options: ["Lui demander en privé ce qui l'aiderait à prendre la parole", "Supposer qu'il n'a rien à dire", "Lui donner la parole en premier devant tout le monde", "Interroger le reste de l'équipe à son sujet"], answer: 0, why: "Demandez au lieu de deviner ; une courte question en privé vous en apprend davantage." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Repérer les biais inconscients",
          minutes: 5,
          goal: "Utiliser une vérification simple pour repérer un biais dans une vraie décision.",
          text: [
            "Les biais inconscients sont des jugements rapides que notre cerveau fait sans que nous le remarquions, à partir de choses comme l'âge, l'accent, le sexe, l'origine, le handicap, le milieu ou l'école d'une personne. Tout le monde en a. En avoir ne fait pas de vous une mauvaise personne, mais agir en fonction d'eux peut mener à des décisions injustes.",
            "Pièges courants : apprécier les personnes qui nous ressemblent (biais d'affinité), laisser une seule qualité ou un seul défaut influencer tout le reste (l'effet de halo), et ne remarquer que les faits qui confirment ce que nous pensons déjà (biais de confirmation).",
            "La volonté seule ne suffit pas à supprimer les biais, alors intégrez des vérifications dans vos décisions. Fixez les critères avant de regarder les personnes. Notez vos raisons. Demandez-vous : \"Est-ce que je déciderais la même chose si cette personne venait d'un autre groupe ?\" Demandez un deuxième avis pour les décisions importantes."
          ],
          steps: ["Écrivez les critères avant de regarder les personnes ou les options.", "Jugez chaque personne avec les mêmes critères.", "Notez la raison de votre décision.", "Demandez-vous : \"Est-ce que je déciderais la même chose si cette personne venait d'un autre groupe ?\"", "Demandez un deuxième avis pour les grandes décisions."],
          words: [["Biais inconscient", "un jugement rapide sur les gens que nous faisons sans le remarquer."], ["Biais d'affinité", "favoriser les personnes qui nous ressemblent."], ["Effet de halo", "laisser une seule caractéristique nous faire juger tout le reste d'une personne comme bon ou mauvais."], ["Critères", "les règles que vous utilisez pour prendre une décision."]],
          slides: [
            { title: "Tout le monde a des biais", bullets: ["Des jugements rapides qu'on ne remarque pas", "Ce n'est pas une faute morale", "Agir en fonction d'eux mène à des décisions injustes"] },
            { title: "Pièges courants", bullets: ["Biais d'affinité : favoriser ceux qui nous ressemblent", "Effet de halo : une qualité influence tout le reste", "Biais de confirmation : ne voir que ce qui nous arrange"] },
            { title: "Intégrez des vérifications", bullets: ["D'abord les critères, ensuite les personnes", "Les mêmes critères pour tous", "Notez vos raisons", "\"Est-ce que je déciderais la même chose... ?\" et un deuxième avis"] }
          ],
          tryIt: "Pensez à une décision récente concernant des personnes, par exemple qui a eu un créneau de travail, un projet ou la parole. Écrivez les critères que vous auriez dû utiliser, puis posez-vous la question \"est-ce que je déciderais la même chose ?\". Notez une chose que vous feriez autrement.",
          youCanNow: "nommer les biais courants et utiliser une vérification simple pour prendre une décision plus équitable.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce que le biais de confirmation ?", options: ["Favoriser les personnes qui nous ressemblent", "Tout juger d'après une seule caractéristique", "Ne remarquer que les faits qui vont dans le sens de ce que l'on croit déjà", "Confirmer l'heure d'une réunion"], answer: 2, why: "Le biais de confirmation trie les faits pour qu'ils collent à notre avis déjà formé." },
            { objective: "O2", q: "Vous choisissez qui va diriger un nouveau projet. Que faites-vous d'abord ?", options: ["Choisir la personne avec qui vous vous entendez le mieux", "Fixer les critères avant de regarder les personnes", "Laisser la personne qui parle le plus fort choisir", "Choisir vite et expliquer plus tard"], answer: 1, why: "Fixer les critères d'abord est une vérification intégrée à la décision." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Recruter et promouvoir de façon équitable",
          minutes: 6,
          goal: "Mettre en place un recrutement ou une promotion qui juge chacun selon les mêmes critères liés au poste.",
          text: [
            "Un recrutement équitable commence par le poste, pas par la personne. Écrivez ce dont le poste a vraiment besoin et retirez les exigences qui ne comptent pas, comme un diplôme pour un travail qui n'en demande pas. Diffusez les offres largement, pas seulement par les amis de l'équipe actuelle.",
            "Utilisez des entretiens structurés : posez à chaque candidat les mêmes questions liées au poste, notez les réponses sur la même échelle, et faites noter par plus d'une personne. Ne posez pas de questions sans rapport avec le poste, comme les projets d'enfants, la religion ou l'âge.",
            "Pour les promotions, faites connaître les critères et donnez à chacun une chance équitable d'avoir les missions qui font progresser et mènent à une promotion. Aux États-Unis, l'Equal Employment Opportunity Commission (EEOC, la commission fédérale pour l'égalité des chances dans l'emploi) fait appliquer les lois fédérales contre la discrimination à l'emploi fondée sur la race, la couleur, la religion, le sexe (selon l'EEOC, cela inclut la grossesse, l'orientation sexuelle et l'identité transgenre), l'origine nationale, l'âge (40 ans ou plus), le handicap et l'information génétique. Le fait qu'une loi s'applique à votre organisation peut dépendre de sa taille, alors consultez eeoc.gov et parlez avec les RH ou un avocat en droit du travail de vos obligations."
          ],
          steps: ["Listez ce dont le poste a vraiment besoin ; retirez le reste.", "Diffusez l'offre largement.", "Posez à chaque candidat les mêmes questions liées au poste.", "Notez les réponses sur la même échelle, avec plus d'une personne qui note.", "Faites connaître les critères de promotion et répartissez équitablement les missions qui font progresser.", "Consultez eeoc.gov ou demandez aux RH vos obligations légales."],
          words: [["Entretien structuré", "un entretien où chaque candidat reçoit les mêmes questions et est noté de la même façon."], ["EEOC", "l'Equal Employment Opportunity Commission des États-Unis, l'agence fédérale qui fait appliquer les lois contre la discrimination à l'emploi."], ["Caractéristique protégée", "un trait, comme la race, le sexe, l'âge (40 ans ou plus) ou le handicap, que la loi interdit d'utiliser comme base des décisions d'emploi."]],
          slides: [
            { title: "Commencez par le poste", bullets: ["Listez ce dont le poste a vraiment besoin", "Retirez les exigences qui ne comptent pas", "Diffusez les offres largement"] },
            { title: "Entretiens structurés", bullets: ["Les mêmes questions liées au poste pour tous", "La même échelle de notation", "Plus d'une personne qui note"] },
            { title: "Des promotions équitables", bullets: ["Faites connaître les critères", "Répartissez équitablement les missions qui font progresser"] },
            { title: "Connaître les règles (États-Unis)", bullets: ["L'EEOC fait appliquer les lois fédérales anti-discrimination", "L'application peut dépendre de la taille de l'employeur", "Consultez eeoc.gov ; demandez aux RH ou à un avocat"] }
          ],
          sources: [{ name: "EEOC : Employeurs", url: "https://www.eeoc.gov/employers" }],
          tryIt: "Choisissez un poste réel ou imaginaire dans votre équipe. Écrivez trois exigences indispensables, retirez-en une qui n'est pas vraiment nécessaire, et écrivez trois questions d'entretien que vous poseriez à chaque candidat, avec ce à quoi ressemble une bonne réponse.",
          youCanNow: "concevoir un recrutement ou une promotion qui juge chaque candidat selon les mêmes critères liés au poste, et où vérifier la loi.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'un entretien structuré ?", options: ["Chaque recruteur pose les questions qu'il veut", "Une discussion pendant un déjeuner", "Un entretien sans notation", "Chaque candidat reçoit les mêmes questions liées au poste, notées sur la même échelle"], answer: 3, why: "Les mêmes questions et la même échelle aident à juger chacun équitablement." },
            { objective: "O3", q: "Vous voulez faire connaître un nouveau poste. Que faites-vous ?", options: ["Le proposer seulement aux amis de l'équipe actuelle", "Le diffuser largement, pas seulement par les amis de l'équipe", "Le garder discret jusqu'à trouver quelqu'un", "Le publier seulement dans un groupe privé"], answer: 1, why: "Un recrutement équitable diffuse largement les offres." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Appartenance et décisions équitables",
        questions: [
          { objective: "O1", q: "Lequel est un signe d'appartenance dans une équipe ?", options: ["Seul le responsable parle", "Les gens cachent leurs erreurs", "Les nouveaux ne reçoivent pas les nouvelles", "Les gens prennent la parole et reconnaissent tôt leurs erreurs"], answer: 3, why: "Quand les gens se sentent en sécurité, ils parlent et signalent les problèmes tôt." },
          { objective: "O2", q: "Qu'est-ce que le biais d'affinité ?", options: ["Favoriser les personnes qui nous ressemblent", "Aimer les bureaux bien rangés", "Être bon en maths", "Recruter seulement des experts"], answer: 0, why: "Le biais d'affinité nous attire vers les personnes qui nous ressemblent." },
          { objective: "O2", q: "Quelle est la meilleure façon de réduire les biais dans une décision ?", options: ["Suivre son instinct", "Fixer d'abord les critères et juger tout le monde avec eux", "Décider vite", "Demander seulement à ses amis"], answer: 1, why: "Fixez des critères et des vérifications ; la volonté seule ne supprime pas les biais." },
          { objective: "O3", q: "Dans un entretien structuré, vous :", options: ["Posez à chacun ce qui vous vient à l'esprit", "Demandez ses projets familiaux", "Posez à chaque candidat les mêmes questions liées au poste", "Ne notez pas"], answer: 2, why: "Les mêmes questions et la même notation rendent les comparaisons équitables." },
          { objective: "O3", q: "Aux États-Unis, quelle agence fait appliquer les lois fédérales contre la discrimination à l'emploi ?", options: ["L'IRS", "La Poste", "La FAA", "L'EEOC"], answer: 3, why: "L'Equal Employment Opportunity Commission fait appliquer ces lois." }
        ]
      }
    },
    {
      name: "Chapitre 2 : L'inclusion au quotidien",
      lessons: [
        {
          objectives: ["O4"],
          title: "Animer des réunions où chacun est entendu",
          minutes: 5,
          goal: "Utiliser une routine de réunion qui donne à chaque personne une chance équitable de parler.",
          text: [
            "Dans beaucoup de réunions, quelques personnes parlent presque tout le temps. Ce n'est pas toujours parce que les autres n'ont rien à dire. Elles sont peut-être nouvelles, plus discrètes, parlent dans une deuxième langue, participent à distance ou ont l'habitude d'être interrompues.",
            "Des outils simples aident : envoyez l'ordre du jour à l'avance pour que les gens se préparent, faites un tour de table, donnez une minute d'écriture en silence avant la discussion, donnez d'abord la parole aux personnes à distance, et invitez à envoyer des idées par écrit après la réunion.",
            "Surveillez les interruptions et les personnes dont les idées sont reprises par quelqu'un d'autre qui en reçoit le mérite. Intervenez avec gentillesse : \"Laissons Amina finir\", ou \"Cela prolonge ce que Luis a dit tout à l'heure.\" Faites tourner les rôles comme la prise de notes pour que ce ne soient pas toujours les mêmes qui font les tâches de l'ombre."
          ],
          steps: ["Envoyez l'ordre du jour à l'avance.", "Commencez par un tour de table ou une minute d'écriture en silence.", "Donnez d'abord la parole aux personnes à distance.", "Arrêtez les interruptions avec gentillesse et attribuez les idées à la personne qui les a eues.", "Faites tourner la prise de notes.", "Invitez à envoyer des idées par écrit après la réunion."],
          words: [["Tour de table", "donner la parole à chaque personne, l'une après l'autre."], ["Réunion hybride", "une réunion où certaines personnes sont dans la salle et d'autres participent en ligne."]],
          slides: [
            { title: "Pourquoi certaines voix manquent", bullets: ["Nouveaux ou plus discrets", "Personnes qui parlent une deuxième langue", "À distance, ou habitués à être interrompus"] },
            { title: "Des outils qui aident", bullets: ["L'ordre du jour à l'avance", "Tour de table ou écriture en silence", "D'abord les personnes à distance", "Des idées par écrit après"] },
            { title: "Intervenez avec gentillesse", bullets: ["\"Laissons Amina finir.\"", "\"Cela prolonge ce que Luis a dit.\"", "Faites tourner la prise de notes"] }
          ],
          tryIt: "Préparez votre prochaine réunion d'équipe avec au moins trois outils de cette leçon. Écrivez-les dans l'ordre du jour. Après la réunion, notez qui a parlé parmi ceux qui ne parlent pas d'habitude.",
          youCanNow: "animer une réunion qui donne à chaque personne une chance équitable de parler et d'être reconnue pour ses idées.",
          quickCheck: [
            { objective: "O4", q: "Pourquoi envoyer l'ordre du jour de la réunion à l'avance ?", options: ["Pour que les gens puissent se préparer", "Pour que la réunion puisse durer plus longtemps", "Pour que personne n'ait besoin de venir", "Pour que le responsable n'ait pas à préparer"], answer: 0, why: "Se préparer à l'avance aide les personnes discrètes et celles qui parlent une seconde langue à contribuer." },
            { objective: "O4", q: "Ce sont toujours les deux mêmes personnes qui prennent les notes. Que faites-vous ?", options: ["Laisser faire ; elles sont douées pour ça", "Prendre les notes vous-même à chaque fois", "Faire tourner le rôle de preneur de notes", "Arrêter de prendre des notes"], answer: 2, why: "Faire tourner les rôles évite que les mêmes personnes fassent toujours les tâches de l'ombre." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Accessibilité et langage respectueux",
          minutes: 5,
          goal: "Rendre une partie du travail de votre équipe plus accessible et utiliser un langage respectueux.",
          text: [
            "L'accessibilité signifie que les personnes en situation de handicap, et tout le monde, peuvent utiliser votre lieu de travail, vos documents, vos outils et vos réunions. Beaucoup de handicaps ne se voient pas. Des gestes simples aident beaucoup de gens : des sous-titres sur les vidéos et les réunions en ligne, des polices lisibles et un bon contraste, des documents compatibles avec les lecteurs d'écran, des espaces sans marches, et des endroits calmes pour travailler.",
            "Rendez facile le fait de demander ce dont on a besoin, et traitez les demandes en toute confidentialité. Aux États-Unis, le Job Accommodation Network (askjan.org, un service gratuit de conseil sur les aménagements de poste) donne des conseils gratuits et confidentiels sur les aménagements au travail, et la page de l'EEOC pour les employeurs explique quand refuser un aménagement nécessaire peut être illégal.",
            "Un langage respectueux, c'est appeler les gens comme ils demandent à être appelés : prononcez bien les noms, utilisez les pronoms que les gens indiquent, et en cas de doute, demandez poliment ou utilisez simplement leur nom. Évitez les plaisanteries sur l'identité de quelqu'un. Si vous vous trompez, excusez-vous brièvement, corrigez et continuez."
          ],
          steps: ["Activez les sous-titres dans les réunions en ligne et les vidéos.", "Utilisez des polices claires, un bon contraste et des titres dans les documents.", "Expliquez comment demander un aménagement, et gardez les demandes confidentielles.", "Utilisez les noms et les pronoms que les gens indiquent.", "Si vous vous trompez : excusez-vous brièvement, corrigez, continuez."],
          words: [["Accessibilité", "concevoir les lieux, les outils et l'information pour que les personnes en situation de handicap puissent les utiliser."], ["Aménagement", "un changement apporté à un poste ou au lieu de travail qui permet à une personne en situation de handicap, ayant un besoin religieux ou un besoin lié à la grossesse de faire son travail."], ["Lecteur d'écran", "un logiciel qui lit à voix haute le texte de l'écran pour les personnes aveugles ou malvoyantes."]],
          slides: [
            { title: "L'accessibilité aide tout le monde", bullets: ["Sous-titres sur les vidéos et les réunions", "Polices lisibles, contraste et titres", "Espaces sans marches et endroits calmes"] },
            { title: "Aménagements", bullets: ["Rendez la demande facile", "Gardez les demandes confidentielles", "Conseils gratuits (États-Unis) : askjan.org"] },
            { title: "Un langage respectueux", bullets: ["Prononcez bien les noms", "Utilisez les pronoms que les gens indiquent", "Pas de plaisanteries sur l'identité"] },
            { title: "Vous vous êtes trompé ?", bullets: ["Excusez-vous brièvement", "Corrigez", "Continuez"] }
          ],
          sources: [{ name: "Job Accommodation Network (JAN)", url: "https://askjan.org/" }, { name: "EEOC : Employeurs", url: "https://www.eeoc.gov/employers" }],
          tryIt: "Vérifiez une chose que votre équipe utilise souvent, comme un formulaire d'inscription, une vidéo de formation ou la réunion de la semaine. Listez deux améliorations d'accessibilité et faites-en une cette semaine.",
          youCanNow: "rendre le travail de l'équipe plus accessible, traiter les demandes d'aménagement avec respect et utiliser un langage respectueux.",
          quickCheck: [
            { objective: "O5", q: "Laquelle est une étape simple d'accessibilité ?", options: ["Utiliser une toute petite police pour en mettre plus sur une page", "Diffuser des vidéos sans le son", "Faire des documents uniquement en images", "Activer les sous-titres des vidéos et des réunions en ligne"], answer: 3, why: "Les sous-titres aident beaucoup de gens, y compris les personnes ayant un handicap auditif." },
            { objective: "O5", q: "Vous ne savez pas comment parler d'un nouveau collègue. Que faites-vous ?", options: ["Deviner et espérer", "Demander poliment ou utiliser son nom", "Éviter de lui parler", "Demander à un autre collègue de se renseigner"], answer: 1, why: "En cas de doute, demandez poliment ou utilisez simplement son nom." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Réagir à l'exclusion ou au harcèlement",
          minutes: 6,
          goal: "Réagir vite et correctement quand quelqu'un est exclu, maltraité ou harcelé.",
          text: [
            "L'exclusion peut être discrète : toujours oublier une personne quand on invite à déjeuner, ignorer ses idées, ou faire des plaisanteries à ses dépens. Le harcèlement est plus grave : un comportement non désiré lié à des choses comme la race, la couleur, la religion, le sexe, l'origine nationale, l'âge, le handicap ou l'information génétique. En tant que responsable, vous ne pouvez ignorer ni l'un ni l'autre.",
            "Si vous le voyez, agissez. Intervenez calmement sur le moment (\"Ce n'est pas acceptable ici\"), puis parlez en privé avec la personne concernée et demandez-lui ce dont elle a besoin. Si quelqu'un vous parle de harcèlement, écoutez, remerciez-le, ne promettez pas de garder le secret si votre règlement vous oblige à le signaler, notez ce qu'il a dit, et signalez-le tout de suite aux RH ou à la personne désignée dans votre règlement.",
            "Protégez les gens contre les représailles : personne ne doit être puni pour avoir signalé un problème ou aidé une enquête. Aux États-Unis, l'EEOC explique sur eeoc.gov ce que sont le harcèlement et les représailles, et comment déposer une plainte. Si quelqu'un est en danger, appelez les services d'urgence. Demandez conseil aux RH ou à un avocat en droit du travail sur vos obligations légales."
          ],
          steps: ["Si vous le voyez, intervenez calmement sur le moment.", "Parlez en privé avec la personne concernée et demandez-lui ce dont elle a besoin.", "Si quelqu'un signale un harcèlement : écoutez, remerciez, notez.", "Ne promettez pas le secret si votre règlement vous oblige à signaler.", "Signalez tout de suite aux RH ou à la personne désignée dans votre règlement.", "Veillez à ce que personne ne soit puni pour avoir parlé."],
          words: [["Harcèlement", "un comportement non désiré lié à une caractéristique protégée, assez grave ou fréquent pour rendre le travail hostile."], ["Représailles", "punir quelqu'un parce qu'il s'est plaint de discrimination ou a aidé une enquête."], ["Témoin", "une personne qui voit quelque chose de mal arriver à quelqu'un d'autre."]],
          slides: [
            { title: "Exclusion et harcèlement", bullets: ["Exclusion : mis à l'écart, ignoré, moqué", "Harcèlement : comportement non désiré lié à un trait protégé", "Un responsable ne peut ignorer ni l'un ni l'autre"] },
            { title: "Si vous le voyez", bullets: ["Intervenez calmement : \"Ce n'est pas acceptable ici\"", "Parlez en privé avec la personne concernée", "Demandez-lui ce dont elle a besoin"] },
            { title: "Si quelqu'un vous en parle", bullets: ["Écoutez et remerciez", "Notez ce qui a été dit", "Ne promettez pas un secret que vous ne pouvez pas garder", "Signalez tout de suite aux RH"] },
            { title: "Protéger et vérifier", bullets: ["Aucune punition pour avoir parlé", "Règles aux États-Unis : eeoc.gov", "Un danger ? Appelez les services d'urgence"] }
          ],
          sources: [{ name: "EEOC : Employeurs (harcèlement, représailles, aménagements)", url: "https://www.eeoc.gov/employers" }],
          tryIt: "Tâche finale : rédigez votre plan d'une page sur vos habitudes d'inclusion. Incluez une habitude d'appartenance, une vérification des biais, trois habitudes de recrutement ou de promotion équitables, une routine de réunion, une amélioration de l'accessibilité, et les étapes que vous suivrez si quelqu'un signale une exclusion ou un harcèlement, avec qui vous prévenez et où vérifier les règles.",
          youCanNow: "réagir vite et correctement à l'exclusion ou au harcèlement, protéger les personnes qui parlent, et où vérifier vos obligations légales.",
          quickCheck: [
            { objective: "O6", q: "Lequel est un exemple de petite exclusion au quotidien ?", options: ["Toujours oublier une personne dans l'invitation au déjeuner", "Donner des dates limites claires", "Tenir des entretiens individuels", "Partager une nouvelle avec tout le monde en même temps"], answer: 0, why: "L'exclusion peut être petite mais répétée, et un responsable ne doit pas l'ignorer." },
            { objective: "O6", q: "Une personne qui a fait part d'un problème est soudain retirée d'un projet par son manager. De quoi est-ce le signe ?", options: ["D'une organisation normale du planning", "D'une promotion équitable", "De possibles représailles, que vous devez faire cesser", "D'un entretien structuré"], answer: 2, why: "Personne ne doit être puni pour avoir fait part d'un problème." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : L'inclusion au quotidien",
        questions: [
          { objective: "O4", q: "Un membre de l'équipe à distance parle rarement dans les réunions hybrides. Qu'est-ce qui aide ?", options: ["Donner d'abord la parole aux personnes à distance", "Couper sa caméra", "Ne plus l'inviter", "Envoyer seulement les notes après"], answer: 0, why: "Donner d'abord la parole aux personnes à distance leur offre un tour équitable." },
          { objective: "O4", q: "L'idée d'une personne est reprise par un collègue plus bruyant, qui reçoit les félicitations. Que dites-vous ?", options: ["Rien", "\"Excellente idée !\" à la personne plus bruyante", "\"Cela prolonge ce que Luis a dit tout à l'heure.\"", "\"Passons à la suite.\""], answer: 2, why: "Attribuez l'idée à la personne qui l'a dite en premier." },
          { objective: "O5", q: "Laquelle est une mesure d'accessibilité pour les réunions en ligne ?", options: ["Parler plus vite", "Activer les sous-titres", "Utiliser de toutes petites polices", "Désactiver le chat"], answer: 1, why: "Les sous-titres aident les personnes sourdes ou malentendantes, et beaucoup d'autres." },
          { objective: "O5", q: "Vous utilisez le mauvais pronom pour un collègue. Que faites-vous ?", options: ["Vous vous disputez à ce sujet", "Vous faites une plaisanterie", "Vous l'évitez", "Vous vous excusez brièvement, corrigez et continuez"], answer: 3, why: "Une courte excuse et une correction sont respectueuses sans rendre la situation gênante." },
          { objective: "O6", q: "Un membre de l'équipe signale un harcèlement et vous demande de garder le secret. Votre règlement oblige à signaler. Vous devez :", options: ["Expliquer que vous devez le signaler, puis le signaler tout de suite aux RH", "Promettre le secret", "L'ignorer", "Le dire à toute l'équipe"], answer: 0, why: "Ne promettez pas un secret que vous ne pouvez pas garder ; suivez votre règlement." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Diriger des équipes inclusives",
    questions: [
      { objective: "O1", q: "La sécurité psychologique signifie que les gens :", options: ["Ne sont jamais en désaccord", "Peuvent parler ou reconnaître leurs erreurs sans être punis ni moqués", "Travaillent seuls", "N'ont pas de délais"], answer: 1, why: "Pouvoir parler en toute sécurité, c'est l'essentiel." },
      { objective: "O1", q: "Quelle habitude renforce l'appartenance ?", options: ["Partager les nouvelles d'abord avec certaines personnes", "Donner les meilleures tâches à ses amis", "Mal prononcer les noms", "Remercier les personnes qui signalent des problèmes"], answer: 3, why: "Remercier ceux qui signalent des problèmes rend la prise de parole plus sûre." },
      { objective: "O1", q: "Pour savoir ce qui aiderait quelqu'un à prendre la parole, vous devez :", options: ["Lui demander en privé", "Deviner", "Demander à ses collègues", "Attendre"], answer: 0, why: "Demander vaut mieux que supposer." },
      { objective: "O2", q: "Un biais inconscient, c'est :", options: ["Toujours volontaire", "Un problème seulement pour les mauvaises personnes", "Un jugement rapide que nous faisons sans le remarquer", "Interdit par la loi"], answer: 2, why: "Tout le monde en a ; le problème, c'est d'agir en fonction de lui." },
      { objective: "O2", q: "L'effet de halo, c'est quand :", options: ["Une seule caractéristique influence notre jugement sur tout le reste d'une personne", "Nous aimons les bureaux lumineux", "Nous travaillons tard", "Nous recrutons dans beaucoup d'endroits"], answer: 0, why: "Une qualité ou un défaut s'étend à toute notre vision de la personne." },
      { objective: "O2", q: "Une bonne question pour vérifier un biais est :", options: ["\"Est-ce que je l'aime bien ?\"", "\"Est-ce que je déciderais la même chose si cette personne venait d'un autre groupe ?\"", "\"Est-ce qu'il me ressemble ?\"", "\"Que me dit mon instinct ?\""], answer: 1, why: "Elle teste si l'appartenance à un groupe a changé votre décision." },
      { objective: "O3", q: "L'offre d'emploi demande un diplôme, mais le travail n'en a pas besoin. Un recrutement équitable dit :", options: ["Le garder pour réduire le nombre de candidats", "Ajouter deux autres diplômes", "Retirer les exigences dont le poste n'a pas vraiment besoin", "Cacher l'offre"], answer: 2, why: "Les exigences inutiles écartent des personnes compétentes." },
      { objective: "O3", q: "Quelle question d'entretien ne faut-il PAS poser ?", options: ["\"Parlez-moi d'une fois où vous avez résolu le problème d'un client.\"", "\"Comment géreriez-vous une livraison en retard ?\"", "\"Quelles règles de sécurité suivez-vous ?\"", "\"Prévoyez-vous d'avoir des enfants ?\""], answer: 3, why: "Les projets familiaux n'ont pas de lien avec le poste et peuvent mener à une discrimination." },
      { objective: "O3", q: "Où les employeurs américains peuvent-ils vérifier leurs obligations fédérales contre la discrimination ?", options: ["eeoc.gov", "Une publication sur les réseaux sociaux", "Le site d'un concurrent", "Nulle part"], answer: 0, why: "Le site officiel de l'EEOC explique les obligations des employeurs." },
      { objective: "O3", q: "Selon les règles de l'EEOC, la protection contre la discrimination liée à l'âge couvre les personnes qui ont :", options: ["Moins de 25 ans", "40 ans ou plus", "Plus de 70 ans seulement", "N'importe quel âge sous 18 ans"], answer: 1, why: "L'EEOC indique 40 ans ou plus." },
      { objective: "O4", q: "Une minute d'écriture en silence avant la discussion aide parce que :", options: ["Elle fait finir la réunion plus vite", "Les personnes plus discrètes ont le temps de former leurs idées", "Personne n'a besoin de parler", "Elle remplace l'ordre du jour"], answer: 1, why: "Elle donne à chacun le temps de réfléchir avant que les voix les plus fortes prennent le dessus." },
      { objective: "O4", q: "Pourquoi faire tourner la prise de notes ?", options: ["Pour que ce ne soient pas toujours les mêmes qui font les tâches de l'ombre", "Pour embrouiller les gens", "Parce que les notes ne servent à rien", "Pour punir les retardataires"], answer: 0, why: "Faire tourner les tâches de l'ombre est plus équitable." },
      { objective: "O4", q: "Un collègue interrompt sans cesse Amina. Vous dites :", options: ["Rien", "\"Amina, fais plus vite.\"", "\"Laissons Amina finir.\"", "\"Faisons une pause.\""], answer: 2, why: "Intervenir avec gentillesse protège son tour de parole." },
      { objective: "O5", q: "Quel service américain gratuit donne des conseils confidentiels sur les aménagements au travail ?", options: ["Une publicité sur un moteur de recherche", "Le Job Accommodation Network (askjan.org)", "Un site de jeux vidéo", "Une application d'achats"], answer: 1, why: "Le JAN donne des conseils gratuits et confidentiels sur les aménagements." },
      { objective: "O5", q: "Un employé demande un changement pour faire son travail à cause d'un handicap. Vous devez :", options: ["En discuter avec toute l'équipe", "Dire non tout de suite", "Lui demander de le prouver en public", "Traiter la demande en privé et suivre votre procédure d'aménagement"], answer: 3, why: "Les demandes doivent rester confidentielles et être prises au sérieux." },
      { objective: "O5", q: "Quand vous n'êtes pas sûr des pronoms de quelqu'un, une option respectueuse est de :", options: ["Deviner à voix haute", "Éviter de lui parler", "Demander poliment ou utiliser son nom", "Faire une plaisanterie"], answer: 2, why: "Demander poliment ou utiliser son nom est respectueux." },
      { objective: "O6", q: "Vous entendez une \"blague\" qui se moque de l'accent d'un collègue. Quelle est la meilleure première étape ?", options: ["Intervenir calmement : \"Ce n'est pas acceptable ici\", puis prendre des nouvelles du collègue", "Rire avec les autres", "Attendre de voir si cela recommence", "En parler sur internet"], answer: 0, why: "Agissez sur le moment et soutenez la personne concernée." },
      { objective: "O6", q: "Les représailles, c'est :", options: ["Donner une augmentation", "Punir quelqu'un parce qu'il s'est plaint de discrimination ou a aidé une enquête", "Une fête d'équipe", "Une séance de formation"], answer: 1, why: "Les représailles sont elles-mêmes interdites et doivent être évitées." },
      { objective: "O6", q: "Après qu'une personne vous a signalé un harcèlement, vous devez :", options: ["Attendre quelques semaines", "Lui dire de régler cela elle-même", "Confronter la personne accusée devant l'équipe", "Noter ce qu'elle a dit et le signaler tout de suite aux RH"], answer: 3, why: "Un signalement rapide et écrit suit les bonnes pratiques et le règlement." },
      { objective: "O6", q: "Quelqu'un est en danger immédiat au travail. Vous devez :", options: ["Envoyer un e-mail aux RH demain", "Appeler les services d'urgence", "Organiser une réunion", "Ne rien faire"], answer: 1, why: "La sécurité passe avant tout ; appelez les services d'urgence." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      5,
      6,
      10,
      12,
      13,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Habitude d'appartenance",
        objective: "O1",
        notYet: "Aucune habitude, ou un événement ponctuel.",
        meets: "Une habitude d'appartenance que le responsable peut répéter.",
        exceeds: "Dit comment il demandera à l'équipe si elle aide."
      },
      {
        name: "Vérification des biais",
        objective: "O2",
        notYet: "Aucune vérification, ou la vérification arrive après la décision.",
        meets: "Une vérification des biais appliquée à une vraie décision : critères d'abord, raisons écrites.",
        exceeds: "Demande aussi un deuxième avis sur la décision."
      },
      {
        name: "Recrutement ou promotion équitable",
        objective: "O3",
        notYet: "Moins de trois habitudes, ou des habitudes sans lien avec le poste.",
        meets: "Trois habitudes qui jugent chacun selon les mêmes critères liés au poste.",
        exceeds: "Inclut des questions d'entretien structuré notées par plus d'une personne."
      },
      {
        name: "Réunions et accessibilité",
        objective: "O4",
        notYet: "Aucune routine de réunion ou aucune amélioration de l'accessibilité.",
        meets: "Une routine de réunion qui donne un tour de parole à chaque voix, et une amélioration de l'accessibilité.",
        exceeds: "Dit comment il interviendra en cas d'interruption ou d'idée reprise sans en citer l'auteur."
      },
      {
        name: "Étapes de réponse",
        objective: "O6",
        notYet: "Des étapes manquent, ou le plan promet de garder un signalement secret contrairement à la politique.",
        meets: "Des étapes pour un signalement d'exclusion ou de harcèlement, qui il prévient et où se trouvent les règles officielles.",
        exceeds: "Prévoit de protéger la personne contre les représailles et d'appeler les services d'urgence si quelqu'un est en danger."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui utilisent un entretien structuré ou une vérification des biais dans les 90 jours (enquête de suivi)",
      "Les membres d'équipe qui disent pouvoir prendre la parole en réunion",
      "Les apprenants qui suivent un autre cours Koach Learn sur le leadership"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur pour regarder les leçons",
      "Du papier ou un document pour le plan d'une page sur les habitudes d'inclusion",
      "La politique de votre organisation sur le harcèlement et les aménagements, si elle en a une",
      "Environ 60 minutes au total : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Fixez d'abord des règles : pas de vrais noms ni d'histoires identifiables tirées du lieu de travail des apprenants pendant les discussions en groupe.",
      "Faites pratiquer à voix haute l'intervention avec des phrases comme « Laissons Amina finir. »",
      "Demandez aux apprenants de trouver la politique de signalement de leur propre organisation avant d'écrire les étapes de réponse.",
      "Rappelez aux apprenants hors des États-Unis que les lois varient, et qu'ils doivent vérifier les règles de leur propre pays et parler aux RH.",
      "Notez la tâche finale avec la grille et donnez un retour sur une ligne « Pas encore » à la fois."
    ]
  }
};
