"use strict";

// Koach Learn course (French translation of shared/early-childhood-cda-prep.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "early-childhood-cda-prep-fr",
  lang: "fr",
  translationOf: "early-childhood-cda-prep",
  category: "Workforce Development",
  name: "Éducation de la petite enfance et préparation au certificat CDA",
  skills: "Connaître les exigences du CDA, Garder les enfants en sécurité et en bonne santé, Signaler une maltraitance soupçonnée, Rédiger des notes d'observation, Préparer une activité d'apprentissage, Faire un plan CDA avec des dates",
  outcome: "commencer votre parcours vers le certificat Child Development Associate (CDA) : noter ce que le Council exige pour votre cadre de travail, garder les enfants en sécurité, rédiger des notes d'observation justes, préparer une activité d'apprentissage et réunir le tout dans un plan daté pour la formation, l'expérience, le portfolio, l'examen et la visite.",
  about: [
    "Les crèches et centres d'accueil, les programmes Head Start (programme fédéral américain d'éducation précoce), les écoles maternelles et les assistantes maternelles à domicile ont besoin d'adultes attentionnés et formés. Le certificat Child Development Associate (CDA), délivré par le Council for Professional Recognition (Conseil pour la reconnaissance professionnelle), est le premier diplôme le plus connu dans l'éducation de la petite enfance aux États-Unis.",
    "Ce cours s'adresse aux personnes en recherche d'emploi, aux parents, aux jeunes adultes, aux personnes qui sortent de prison et à toute personne qui veut travailler avec de jeunes enfants. Il vous prépare au parcours CDA. Il ne délivre pas le certificat et ne compte pas comme heures de formation officielle, sauf si un programme vous dit le contraire.",
    "Vous apprendrez les étapes du CDA, les bases de la sécurité des enfants et du signalement obligatoire, comment observer un enfant et écrire ce qu'il fait, et comment préparer une activité simple. À la fin, vous aurez votre propre plan CDA avec de vraies dates.",
    "Chaque leçon dure environ cinq minutes, avec une tâche « Essayez maintenant » et deux questions rapides. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Faites votre propre plan de préparation au CDA sur papier ou dans un document gratuit : votre cadre de travail, où vous suivrez les 120 heures de formation (avec au moins 10 heures dans chacun des huit domaines), comment vous noterez vos heures de travail, une date pour commencer votre portfolio, des dates visées pour l'examen et la Verification Visit (visite de vérification), et un plan d'activité écrit pour un enfant d'âge préscolaire qui pourrait aller dans votre portfolio.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Adultes et grands adolescents qui veulent travailler dans l'accueil des enfants, en maternelle, dans un programme Head Start ou comme assistante maternelle aux États-Unis : parents, personnes en recherche d'emploi ou en reconversion, immigrés, conjoints de militaires vétérans et personnes qui sortent de prison. Beaucoup s'occupent déjà d'enfants à la maison mais n'ont aucune formation officielle.",
    startingPoint: "Savent s'occuper d'enfants au quotidien et lire des consignes simples. La plupart n'ont jamais entendu parler des domaines du CDA, du portfolio ni de la visite de vérification, et n'ont jamais rédigé de notes d'observation ni de plans d'activité.",
    gap: "Beaucoup d'emplois dans l'accueil des enfants et les règles d'agrément des États demandent une formation ou un certificat comme le CDA. Les apprenants doivent connaître les étapes exactes, garder les enfants en sécurité dès le premier jour et s'exercer aux écrits que demandent le portfolio et l'examen. Sans plan, on suit la mauvaise formation, on perd le compte de ses heures ou on laisse passer le délai de 3 ans pour l'expérience et celui de 6 mois pour le portfolio.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (environ fin du primaire à début du collège)",
      "Appareils : un téléphone ou un ordinateur de bibliothèque ; chaque tâche se fait aussi sur papier",
      "Temps : leçons de 4 à 6 minutes qui s'intègrent entre le travail et la famille",
      "Les règles changent : les exigences et les frais du CDA se vérifient sur cdacouncil.org ; les règles d'agrément et de signalement obligatoire varient selon l'État",
      "Vie privée des enfants : les notes d'exercice utilisent des prénoms inventés ou seulement l'initiale, jamais de photos ni de vrais détails sur un enfant",
      "La vérification des antécédents fait partie du travail avec les enfants ; les apprenants qui ont un casier judiciaire vérifient les règles de leur État"
    ],
    prerequisites: "Aucun. Il faut un diplôme de fin d'études secondaires américain (high school) ou le GED (examen d'équivalence de ce diplôme) avant de déposer une demande de CDA (ou être inscrit en avant-dernière ou dernière année d'une filière professionnelle petite enfance au lycée)."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "À l'aide de la page du Council for Professional Recognition pour votre cadre de travail", action: "énumérer les étapes du CDA : formation, expérience, portfolio, examen et visite de vérification", standard: "avec les heures et les délais corrects" },
    { id: "O2", condition: "Face à une salle d'accueil d'enfants ou à sa description", action: "vérifier la salle pour repérer les problèmes de surveillance, de lavage des mains, de sommeil sûr et de dangers", standard: "en trouvant au moins 4 des 5 problèmes cachés" },
    { id: "O3", condition: "Face à une histoire où un enfant pourrait subir un tort", action: "décrire les étapes pour signaler une maltraitance ou une négligence soupçonnée", standard: "en appelant d'abord le 911 si un enfant est en danger, et en suivant la loi de l'État et le règlement du programme" },
    { id: "O4", condition: "Après avoir regardé un enfant jouer pendant cinq minutes", action: "rédiger une note d'observation qui ne contient que ce que vous avez vu et entendu", standard: "sans étiquette ni supposition, avec la date, l'heure et le lieu" },
    { id: "O5", condition: "À partir de l'âge et d'un centre d'intérêt d'un enfant", action: "rédiger un court plan d'activité avec un objectif, du matériel, des étapes et une note de sécurité", standard: "adapté à l'âge et qui nomme un domaine du CDA" },
    { id: "O6", condition: "À l'aide de votre propre calendrier", action: "établir un plan daté de préparation au CDA, de la formation à la visite de vérification", standard: "qui garde l'expérience dans les 3 ans et le portfolio dans les 6 mois avant la demande" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Le parcours CDA et la sécurité des enfants",
      lessons: [
        {
          title: "Ce qu'est le CDA et les étapes pour l'obtenir",
          objectives: ["O1"],
          minutes: 6,
          goal: "Énumérer les étapes pour obtenir le CDA dans votre cadre de travail.",
          text: [
            "Le certificat Child Development Associate (CDA) est délivré par le Council for Professional Recognition. Il montre que vous savez appliquer les CDA Competency Standards (normes de compétence du CDA) avec de jeunes enfants. Il existe des parcours pour quatre cadres : Preschool (maternelle), Infant-Toddler (bébés et tout-petits), Family Child Care (accueil familial à domicile) et Home Visitor (visites à domicile). Chacun a sa propre page d'exigences.",
            "Pour le cadre Preschool (enfants de 3 à 5 ans dans un centre), la page du Council indique : un diplôme de fin d'études secondaires ou le GED (ou une inscription en avant-dernière ou dernière année d'une filière petite enfance au lycée) ; 120 heures de formation officielle en petite enfance, avec au moins 10 heures dans chacun des huit domaines du CDA ; et 480 heures de travail avec des enfants de 3 à 5 ans dans les 3 ans avant la demande.",
            "Vous constituez aussi un portfolio professionnel dans les 6 mois avant la demande et vous choisissez un CDA Professional Development (PD) Specialist (spécialiste du développement professionnel). Une fois votre demande acceptée, vous passez l'examen CDA : environ 65 questions sur ordinateur, dans un centre d'examen Pearson VUE (entreprise qui organise des examens). Ensuite, un PD Specialist fait la Verification Visit (visite de vérification) : il examine votre portfolio, vous observe avec les enfants et parle avec vous de vos points forts et de vos progrès. Pour certains résultats d'examen, le Council propose aussi une décision plus rapide sans visite ; consultez sa page sur les changements du processus.",
            "Les frais, les bourses et les règles changent. Vérifiez les montants actuels sur cdacouncil.org et demandez à votre employeur ou à votre État s'il existe des bourses avant de payer. Le certificat est valable 3 ans, puis il se renouvelle."
          ],
          steps: ["Choisissez votre cadre : Preschool, Infant-Toddler, Family Child Care ou Home Visitor.", "Ouvrez la page de ce cadre sur cdacouncil.org et notez ses exigences.", "Trouvez une formation qui couvre les huit domaines.", "Commencez à noter vos heures de travail avec des enfants.", "Constituez votre portfolio, déposez votre demande, passez l'examen, puis recevez la visite de vérification."],
          words: [["CDA", "Child Development Associate : un certificat national pour les personnes qui travaillent avec de jeunes enfants."], ["Council for Professional Recognition", "l'organisme qui délivre le CDA."], ["Portfolio", "un ensemble de vos propres écrits et ressources qui montre votre travail avec les enfants et les familles."], ["Visite de vérification", "une visite où un PD Specialist vous observe au travail, examine votre portfolio et parle avec vous."], ["PD Specialist", "un spécialiste du développement professionnel agréé par le Council pour faire votre visite."]],
          slides: [
            { title: "Le CDA en une ligne", bullets: ["Délivré par le Council for Professional Recognition", "Cadres : Preschool, Infant-Toddler, Family Child Care, Home Visitor"] },
            { title: "Preschool : avant la demande", bullets: ["Diplôme ou GED (ou filière petite enfance au lycée)", "120 heures de formation, 10+ dans chacun des 8 domaines", "480 heures de travail avec des 3-5 ans dans les 3 ans"] },
            { title: "Ensuite", bullets: ["Portfolio terminé dans les 6 mois avant la demande", "Examen CDA dans un centre Pearson VUE", "Visite de vérification par un PD Specialist"] },
            { title: "Vérifiez avant de payer", bullets: ["Les frais et règles changent : cdacouncil.org", "Renseignez-vous sur les bourses", "Renouvelez tous les 3 ans"] }
          ],
          sources: [
            { name: "CDA Council : parcours Preschool", url: "https://www.cdacouncil.org/en/educator-pathways/preschool/" },
            { name: "CDA Council : tout savoir sur le CDA", url: "https://www.cdacouncil.org/en/about/learn-about-the-cda/" },
            { name: "CDA Council : changements du processus", url: "https://www.cdacouncil.org/en/cda-process-updates/" },
            { name: "CDA Council : trouver des bourses pour le CDA", url: "https://www.cdacouncil.org/en/find-cda-scholarships/" },
            { name: "CDA Council : renouveler le CDA", url: "https://www.cdacouncil.org/en/renew-cda/" }
          ],
          tryIt: "Ouvrez la page du CDA Council pour le cadre qui vous intéresse (ou utilisez les chiffres de cette leçon pour Preschool). Sur papier, écrivez les cinq étapes dans l'ordre, avec les heures ou le délai à côté de chacune.",
          youCanNow: "énumérer les étapes du CDA pour votre cadre de travail, avec les heures de formation, les heures de travail et les délais.",
          quickCheck: [
            { objective: "O1", q: "Pour le CDA Preschool, comment les 120 heures de formation sont-elles réparties ?", options: ["Les 120 heures dans un seul sujet de votre choix", "Au moins 10 heures dans chacun des huit domaines", "Seulement des heures de travail avec des enfants", "N'importe quelles 120 heures de vidéos en ligne"], answer: 1, why: "Le Council demande 120 heures de formation, avec au moins 10 heures dans chacun des huit domaines." },
            { objective: "O1", q: "Qui délivre le certificat CDA ?", options: ["Le service des permis de conduire de votre État", "L'école de votre enfant", "N'importe quelle crèche", "Le Council for Professional Recognition"], answer: 3, why: "Le Council for Professional Recognition délivre le CDA ; un cours ou un employeur vous aide seulement à vous préparer." }
          ]
        },
        {
          title: "Une salle sûre et saine : agrément, surveillance, lavage des mains, sommeil sûr",
          objectives: ["O2"],
          minutes: 6,
          goal: "Vérifier une salle d'accueil pour repérer les problèmes courants de sécurité et de santé.",
          text: [
            "L'accueil des enfants est agréé par chaque État ou territoire. L'agrément fixe les règles minimales de santé et de sécurité qu'un programme doit respecter, par exemple la vérification des antécédents du personnel, la formation santé et sécurité, les qualifications du personnel et les inspections. Le nombre d'enfants par adulte et les règles de formation varient selon l'État ; cherchez les vôtres sur childcare.gov.",
            "La surveillance passe en premier : vous pouvez voir et entendre chaque enfant, vous comptez souvent les enfants (surtout quand vous changez de salle ou sortez) et vous ne laissez jamais les enfants seuls.",
            "Le lavage des mains arrête les microbes : lavez avec de l'eau et du savon en frottant au moins 20 secondes, après les toilettes ou le change, avant de manger ou de toucher la nourriture, et après les jeux dehors. Aidez aussi les enfants à se laver les mains.",
            "Sommeil sûr pour les bébés : couchez le bébé sur le dos à chaque sieste et la nuit, sur une surface ferme, plate et horizontale, avec seulement un drap housse. Pas d'oreillers, de couvertures, de tours de lit ni de peluches dans le lit. Cherchez aussi les dangers : prises électriques, cordons, petits objets qui peuvent étouffer un jeune enfant, produits ménagers à portée de main et sorties bloquées."
          ],
          steps: ["Comptez les enfants et vérifiez que vous les voyez et les entendez tous.", "Cherchez les dangers : cordons, prises, petits objets, produits chimiques, sorties bloquées.", "Vérifiez que le coin lavage des mains a du savon et des serviettes et que les adultes l'utilisent.", "Dans les salles de bébés : sur le dos pour dormir, surface ferme et plate, rien dans le lit sauf un drap housse.", "Corrigez ce que vous pouvez tout de suite et signalez le reste à votre responsable."],
          words: [["Agrément", "les règles minimales de santé et de sécurité de l'État qu'un programme doit respecter pour fonctionner légalement."], ["Taux d'encadrement", "le nombre d'enfants dont un adulte peut s'occuper ; il est fixé par l'État et dépend de l'âge."], ["Surveillance", "pouvoir toujours voir et entendre les enfants dont vous vous occupez."], ["Risque d'étouffement", "un petit objet qu'un jeune enfant peut mettre dans sa bouche et avec lequel il peut s'étouffer."]],
          slides: [
            { title: "L'agrément dépend de l'État", bullets: ["Règles minimales de santé et de sécurité", "Antécédents, formation, inspections", "Cherchez votre État sur childcare.gov"] },
            { title: "Surveillez et comptez", bullets: ["Voyez et entendez chaque enfant", "Comptez à chaque déplacement", "Ne laissez jamais les enfants seuls"] },
            { title: "Lavage des mains", bullets: ["Eau et savon, frottez 20 secondes", "Après toilettes ou change, avant de manger, après dehors"] },
            { title: "Sommeil sûr pour les bébés", bullets: ["Sur le dos, à chaque sommeil", "Surface ferme, plate et horizontale, drap housse seulement", "Ni oreiller, ni couverture, ni tour de lit, ni jouet"] }
          ],
          sources: [
            { name: "Childcare.gov : comment l'accueil des enfants est-il réglementé ?", url: "https://childcare.gov/consumer-education/how-is-child-care-regulated" },
            { name: "Childcare.gov : ressources des États et territoires", url: "https://childcare.gov/state-resources" },
            { name: "Safe to Sleep (NIH) : environnement de sommeil sûr", url: "https://safetosleep.nichd.nih.gov/reduce-risk/safe-sleep-environment" }
          ],
          tryIt: "Parcourez une pièce chez vous (ou imaginez une salle de classe). Notez cinq choses que vous vérifieriez pour la sécurité et la santé, et écrivez une solution pour chacune. Ensuite, trouvez la page de votre État sur childcare.gov et notez qui agrée l'accueil des enfants chez vous.",
          youCanNow: "vérifier une salle pour repérer les problèmes de surveillance, de lavage des mains, de sommeil sûr et de dangers, et dire qui agrée l'accueil des enfants dans votre État.",
          quickCheck: [
            { objective: "O2", q: "Un bébé s'endort dans son lit. Quelle installation est sûre ?", options: ["Sur le ventre avec une couverture douce", "Sur le côté avec un oreiller pour le caler", "Sur le dos, matelas ferme, drap housse seulement", "Sur le dos avec des peluches pour le réconforter"], answer: 2, why: "Safe to Sleep (campagne des Instituts nationaux de la santé des États-Unis) recommande le sommeil sur le dos, sur une surface ferme et plate, avec seulement un drap housse." },
            { objective: "O2", q: "Votre groupe rentre de la cour de récréation. Que faites-vous en premier ?", options: ["Compter les enfants", "Commencer tout de suite l'activité suivante", "Regarder votre téléphone", "Les laisser aller seuls aux toilettes"], answer: 0, why: "Compter à chaque déplacement permet de s'assurer qu'aucun enfant n'est resté dehors." }
          ]
        },
        {
          title: "Protéger les enfants : le signalement obligatoire",
          objectives: ["O3"],
          minutes: 5,
          goal: "Décrire les étapes pour signaler une maltraitance ou une négligence soupçonnée.",
          text: [
            "Dans la plupart des États, les personnes qui travaillent dans l'accueil des enfants ont l'obligation de signaler. Cela veut dire que la loi vous oblige à faire un signalement quand vous avez des raisons de soupçonner qu'un enfant est maltraité ou négligé. Vous n'avez pas besoin de preuve. La loi de chaque État dit qui doit signaler et comment, et votre programme aura un règlement écrit. Apprenez les deux avant votre premier jour.",
            "Si un enfant est en danger immédiat, appelez d'abord le 911 (numéro d'urgence aux États-Unis). Sinon, suivez la procédure de votre État (souvent une ligne d'écoute de l'État contre la maltraitance) et le règlement de votre programme. Si vous ne savez pas qui appeler, la Childhelp National Child Abuse Hotline (ligne nationale d'aide contre la maltraitance des enfants, 1-800-422-4453) peut vous aider.",
            "Votre rôle est de signaler, pas d'enquêter. Ne posez pas à l'enfant les mêmes questions encore et encore et n'allez pas confronter la famille. Si un enfant vous raconte quelque chose, restez calme, écoutez, ne promettez pas de garder le secret, et notez ses mots exacts, la date et l'heure. Restez discret : n'en parlez qu'aux personnes prévues par la loi et par votre règlement."
          ],
          steps: ["Si un enfant est en danger en ce moment, appelez le 911.", "Écoutez calmement ; ne promettez pas de garder un secret.", "Notez ce que vous avez vu ou entendu, mot pour mot, avec la date et l'heure.", "Signalez comme l'exigent la loi de votre État et le règlement du programme.", "Restez discret et n'enquêtez pas vous-même."],
          words: [["Obligation de signaler", "le devoir, fixé par la loi, de signaler une maltraitance ou une négligence soupçonnée envers un enfant."], ["Négligence", "ne pas donner à un enfant les soins de base dont il a besoin, comme la nourriture, la sécurité, la surveillance ou les soins médicaux."], ["Soupçonner", "avoir une raison de penser que quelque chose se passe peut-être, sans preuve."]],
          slides: [
            { title: "Vous avez peut-être l'obligation de signaler", bullets: ["La plupart des États incluent le personnel d'accueil des enfants", "Vous signalez un soupçon, pas une preuve", "Apprenez la loi de votre État et le règlement du programme"] },
            { title: "Danger immédiat ? Appelez le 911", bullets: ["Puis suivez la procédure de signalement de votre État", "Un doute ? Childhelp : 1-800-422-4453"] },
            { title: "Signalez, n'enquêtez pas", bullets: ["Écoutez calmement ; pas de promesse de secret", "Notez les mots exacts, la date et l'heure", "N'en parlez que selon la loi et le règlement"] }
          ],
          sources: [
            { name: "Child Welfare Information Gateway : comment signaler la maltraitance et la négligence envers un enfant", url: "https://www.childwelfare.gov/how-report-child-abuse-and-neglect/" },
            { name: "Childcare.gov : signaler un problème dans l'accueil des enfants", url: "https://childcare.gov/health-and-safety-reporting" }
          ],
          tryIt: "Cherchez comment signaler une maltraitance soupçonnée dans votre État (tapez le nom de votre État suivi de \"report child abuse\" et utilisez la page en .gov). Écrivez le numéro ou le site sur une carte, avec au dos les cinq étapes de cette leçon.",
          youCanNow: "décrire les étapes pour signaler une maltraitance ou une négligence soupçonnée et trouver où faire un signalement dans votre État.",
          quickCheck: [
            { objective: "O3", q: "Un enfant vous confie qu'on lui fait du mal à la maison et vous demande de ne rien dire. Que répondez-vous ?", options: ["« Je te promets de ne le dire à personne. »", "« Tu es sûr ? Raconte-moi encore. »", "« Tu dois l'inventer. »", "« Merci de me l'avoir dit. Je dois en parler à des personnes qui peuvent t'aider à être en sécurité. »"], answer: 3, why: "Vous restez calme et ne promettez jamais le secret, car vous devez faire un signalement." },
            { objective: "O3", q: "Vous voyez des marques qui vous inquiètent, mais vous n'avez pas de preuve. Que fait une personne qui a l'obligation de signaler ?", options: ["Elle attend d'avoir une preuve", "Elle signale comme l'exigent la loi de l'État et le règlement du programme", "Elle appelle le parent pour demander ce qui s'est passé", "Elle prend des photos et les publie pour prévenir les autres"], answer: 1, why: "La loi vous demande de signaler un soupçon ; l'enquête est le travail du service compétent." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Le parcours CDA et la sécurité des enfants",
        questions: [
          { objective: "O1", q: "Pour le CDA Preschool, combien d'heures de travail avec des enfants de 3 à 5 ans faut-il, et dans quel délai ?", options: ["480 heures dans les 3 ans avant la demande", "120 heures en 1 an", "1 000 heures à n'importe quel moment", "Aucune heure de travail n'est nécessaire"], answer: 0, why: "La page Preschool du Council indique 480 heures dans les 3 ans avant le dépôt de votre demande." },
          { objective: "O1", q: "Dans quel ordre se passent l'examen et la visite de vérification ?", options: ["La visite a toujours lieu avant la demande", "Les deux ont lieu le même jour", "D'abord l'examen, puis la visite", "Aucun des deux ne fait partie du CDA"], answer: 2, why: "Après l'acceptation, vous fixez la date de l'examen ; la visite est programmée après l'examen." },
          { objective: "O2", q: "Qui fixe les règles d'agrément de l'accueil des enfants, comme le taux d'encadrement et la formation ?", options: ["Les parents de chaque enfant", "Chaque État ou territoire", "Le CDA Council", "Chaque enseignant"], answer: 1, why: "L'agrément est donné par les États et territoires, donc les règles changent d'un endroit à l'autre." },
          { objective: "O2", q: "Quel danger devez-vous corriger dans une salle de tout-petits ?", options: ["Des pièces de monnaie et des perles sur une étagère basse", "Du savon au lavabo", "Un drap housse sur le matelas du lit", "Une liste de numéros d'urgence près de la porte"], answer: 0, why: "Les petits objets présentent un risque d'étouffement pour les jeunes enfants." },
          { objective: "O3", q: "Un enfant arrive avec une blessure grave et il est en danger en ce moment. Que faites-vous en premier ?", options: ["Le noter pour la semaine prochaine", "Demander à ses camarades ce qui s'est passé", "Attendre que votre responsable revienne de sa pause", "Appeler le 911"], answer: 3, why: "Danger immédiat veut dire appeler d'abord le 911, puis suivre la procédure de signalement." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Enseigner, observer et votre plan CDA",
      lessons: [
        {
          title: "Observer et écrire : les notes d'observation",
          objectives: ["O4"],
          minutes: 5,
          goal: "Rédiger une note d'observation qui ne contient que ce que vous avez vu et entendu.",
          text: [
            "Observer et noter le comportement des enfants est l'un des huit domaines du CDA. Les enseignants observent les enfants pour savoir ce que chacun sait faire, ce qu'il aime et ce dont il a besoin ensuite. De bonnes notes aident aussi quand vous parlez avec les familles.",
            "Une bonne note est objective : elle dit ce que vous avez vu et entendu, pas ce que vous pensez que cela veut dire. Écrivez « M. a empilé six cubes, puis les a fait tomber et a ri » plutôt que « M. est un enfant joyeux et intelligent ». Les étiquettes comme paresseux, méchant, timide ou vilain n'ont pas leur place dans les notes.",
            "Indiquez la date, l'heure, le lieu et l'initiale du prénom de l'enfant. Citez les mots exacts de l'enfant. Gardez les notes confidentielles : elles parlent d'un vrai enfant et appartiennent au programme."
          ],
          steps: ["Écrivez la date, l'heure, le lieu et l'initiale du prénom de l'enfant.", "Observez pendant quelques minutes.", "N'écrivez que des actions et des mots exacts.", "Barrez toute étiquette ou supposition.", "Ajoutez une question ou une prochaine étape pour l'enfant, indiquée comme votre idée."],
          words: [["Observation", "regarder un enfant avec attention pour savoir ce qu'il sait faire."], ["Objectif", "seulement des faits que l'on peut voir ou entendre, sans opinion."], ["Note anecdotique", "une courte note écrite sur une chose qu'un enfant a faite ou dite."]],
          slides: [
            { title: "Pourquoi observer", bullets: ["Savoir ce que chaque enfant sait faire", "Prévoir la suite", "Partager des faits avec les familles"] },
            { title: "Des faits, pas des étiquettes", bullets: ["Oui : « a empilé 6 cubes, a ri »", "Non : « intelligent », « timide », « méchant »", "Citez les mots exacts de l'enfant"] },
            { title: "Chaque note contient", bullets: ["Date, heure, lieu", "Initiale du prénom seulement", "Gardée confidentielle"] }
          ],
          tryIt: "Observez pendant cinq minutes un enfant que vous connaissez (avec l'accord de ses parents) ou une vidéo d'enfants. Rédigez une note d'observation avec la date, l'heure et le lieu. Ensuite, entourez chaque mot qui est une étiquette ou une supposition et réécrivez-le comme un fait.",
          youCanNow: "rédiger une note d'observation juste et objective, sans étiquette.",
          quickCheck: [
            { objective: "O4", q: "Quelle phrase a sa place dans une note d'observation ?", options: ["« J. est un fauteur de troubles. »", "« J. a l'air triste aujourd'hui. »", "« J. est plus intelligent que les autres. »", "« J. a dit \"c'est mon tour\" et a pris le camion rouge à T. »"], answer: 3, why: "Elle ne note que ce qui a été vu et entendu, avec les mots exacts de l'enfant." },
            { objective: "O4", q: "Que doit contenir chaque note d'observation ?", options: ["La date, l'heure, le lieu et l'initiale du prénom de l'enfant", "Le nom complet et l'adresse de l'enfant", "Votre avis sur les parents", "Une photo de l'enfant publiée en ligne"], answer: 0, why: "La date, l'heure, le lieu et une initiale donnent le contexte tout en protégeant la vie privée de l'enfant." }
          ]
        },
        {
          title: "Préparer une activité d'apprentissage",
          objectives: ["O5"],
          minutes: 6,
          goal: "Rédiger un court plan d'activité adapté à l'âge de l'enfant.",
          text: [
            "Les jeunes enfants apprennent en jouant. Une bonne activité part de ce que les enfants aiment et savent presque faire : c'est un petit défi amusant. Favoriser le développement physique et intellectuel des enfants est l'un des huit domaines du CDA, tout comme le développement social et affectif et les relations avec les familles.",
            "Un court plan d'activité a six parties : la tranche d'âge, un objectif (ce que les enfants vont faire), le matériel, les étapes, une note de sécurité et la façon de savoir si l'activité a marché. Exemple pour des enfants de 3 et 4 ans : Objectif : trier des feuilles par taille. Matériel : feuilles ramassées dehors, trois paniers. Étapes : montrer une grande, une moyenne et une petite feuille ; les enfants trient ; demander « Laquelle est la plus grande ? » Sécurité : se laver les mains après, vérifier qu'il n'y a pas de bâtons pointus. Comment le savoir : les enfants mettent la plupart des feuilles dans le bon panier et utilisent les mots grand et petit.",
            "Pensez à chaque enfant : proposez une façon plus facile et une plus difficile, utilisez des mots et des images, et invitez les familles à envoyer des idées de la maison. Choisissez du matériel assez gros pour ne pas présenter de risque d'étouffement à cet âge."
          ],
          steps: ["Choisissez la tranche d'âge et une chose que les enfants aiment.", "Écrivez un objectif que les enfants vont réaliser.", "Listez du matériel sûr, gratuit ou bon marché.", "Écrivez 3 à 5 étapes.", "Ajoutez une note de sécurité et la façon de savoir si cela a marché.", "Nommez le domaine du CDA concerné."],
          words: [["Adapté au développement", "correspond à ce que les enfants de cet âge savent faire en général, avec un petit défi."], ["Motricité fine", "petits mouvements des mains et des doigts, comme ramasser ou découper."], ["Motricité globale", "grands mouvements du corps, comme courir, sauter ou grimper."]],
          slides: [
            { title: "Les enfants apprennent en jouant", bullets: ["Partez de ce qu'ils aiment", "Un petit défi amusant"] },
            { title: "Les six parties d'un plan", bullets: ["Âge, objectif, matériel", "Étapes, note de sécurité", "Comment savoir si cela a marché"] },
            { title: "Pensez à chaque enfant", bullets: ["Une façon plus facile et une plus difficile", "Des mots et des images", "Des idées des familles"] }
          ],
          tryIt: "Rédigez un plan d'activité d'une page pour des enfants de 3 à 5 ans, avec des objets que vous avez à la maison (gobelets, chaussettes, papier, feuilles). Incluez les six parties et nommez le domaine du CDA concerné.",
          youCanNow: "rédiger un court plan d'activité sûr, adapté à l'âge des enfants, qui nomme un domaine du CDA.",
          quickCheck: [
            { objective: "O5", q: "Quel objectif convient le mieux à des enfants de 3 et 4 ans ?", options: ["Écrire un paragraphe complet sur les feuilles", "Trier les feuilles en grandes et petites", "Faire des divisions longues avec des feuilles", "Lire seul un manuel de sciences"], answer: 1, why: "Trier par taille est un petit défi ludique pour des enfants d'âge préscolaire." },
            { objective: "O5", q: "Votre plan pour des enfants de 3 ans utilise de petites perles. Que manque-t-il au plan ?", options: ["Une liste d'étapes plus longue", "Un objectif plus difficile", "Une note de sécurité : les perles présentent un risque d'étouffement, prenez des objets plus gros", "Plus de perles"], answer: 2, why: "Chaque plan a besoin d'une note de sécurité, et les petits objets présentent un risque d'étouffement pour les jeunes enfants." }
          ]
        },
        {
          title: "Votre portfolio, l'examen, la visite et votre plan",
          objectives: ["O6"],
          minutes: 6,
          goal: "Établir un plan daté de préparation au CDA, de la formation à la visite de vérification.",
          text: [
            "Le portfolio réunit vos propres écrits et ressources sur votre travail avec les enfants et les familles. Le livre des Competency Standards du Council pour votre cadre (pour Preschool, l'édition verte) explique exactement ce qu'il doit contenir. Procurez-vous le livre tôt et remplissez le portfolio au fur et à mesure ; il doit être terminé dans les 6 mois avant la demande.",
            "Planifiez à rebours à partir des dates importantes. Les heures de travail ne comptent que si elles sont dans les 3 ans avant votre demande ; commencez donc dès maintenant un registre simple : date, lieu, âges et heures, signé par un responsable si votre programme le permet. Choisissez une formation qui couvre les huit domaines et gardez chaque certificat.",
            "Préparez l'examen en révisant les huit domaines, en vous entraînant avec des questions de mise en situation comme celles de ce cours, et en réservant un centre d'examen Pearson VUE après avoir reçu votre avis Ready to Schedule (prêt à programmer). Avant la visite de vérification, entraînez-vous à parler de vos points forts et d'un domaine dans lequel vous progressez. Vérifiez chaque frais et chaque étape sur cdacouncil.org, et renseignez-vous sur les bourses."
          ],
          steps: ["Écrivez la date du jour et votre cadre de travail.", "Choisissez un programme de formation et une date visée pour finir les 120 heures.", "Commencez un registre des heures de travail et fixez une date pour atteindre les heures demandées pour votre cadre.", "Fixez une date de début du portfolio et une date de demande dans les 6 mois qui suivent.", "Ajoutez les mois visés pour l'examen et la visite de vérification.", "Inscrivez les dates dans le calendrier de votre téléphone ou sur un calendrier papier."],
          words: [["Livre des Competency Standards", "le livre du Council pour votre cadre, qui explique le portfolio et les normes."], ["Avis Ready to Schedule", "le message du Council qui vous dit que vous pouvez réserver votre examen ou votre visite."], ["Registre des heures de travail", "un relevé des dates et des heures où vous avez travaillé avec des enfants."]],
          slides: [
            { title: "Votre portfolio", bullets: ["Procurez-vous le livre des Competency Standards de votre cadre", "Remplissez-le au fur et à mesure", "Terminez-le dans les 6 mois avant la demande"] },
            { title: "Planifiez à rebours", bullets: ["Heures de travail : dans les 3 ans avant la demande", "Formation : les 8 domaines, gardez les certificats", "Notez vos heures dès le premier jour"] },
            { title: "Examen et visite", bullets: ["Révisez les 8 domaines", "Réservez Pearson VUE après l'avis Ready to Schedule", "Entraînez-vous à parler de vos points forts"] }
          ],
          sources: [
            { name: "CDA Council : parcours Preschool", url: "https://www.cdacouncil.org/en/educator-pathways/preschool/" },
            { name: "CDA Council : parcours des éducateurs (tous les cadres)", url: "https://www.cdacouncil.org/en/educator-pathways/" },
            { name: "Pearson VUE : examen CDA", url: "https://home.pearsonvue.com/cdaexam" }
          ],
          tryIt: "Tâche finale : faites votre plan de préparation au CDA avec de vraies dates pour la formation, les heures de travail, le portfolio, la demande, l'examen et la visite de vérification. Joignez votre plan d'activité de la leçon 5 comme première pièce de type portfolio.",
          youCanNow: "transformer les étapes du CDA en votre propre plan daté, prêt à démarrer.",
          quickCheck: [
            { objective: "O6", q: "Vous avez travaillé dans une école maternelle il y a quatre ans et vous voulez déposer votre demande le mois prochain. Que devez-vous vérifier ?", options: ["Rien ; toutes les heures passées comptent pour toujours", "Si vous avez encore besoin d'un diplôme", "Si l'examen est facultatif", "Si vos heures sont dans les 3 ans avant votre demande"], answer: 3, why: "Les heures d'expérience doivent se situer dans les 3 ans avant le dépôt de votre demande." },
            { objective: "O6", q: "Quand devez-vous commencer votre registre des heures de travail ?", options: ["Maintenant, dès votre premier jour avec des enfants", "Après avoir réussi l'examen", "Seulement après la visite de vérification", "Jamais ; le Council les compte pour vous"], answer: 0, why: "Un registre tenu dès le premier jour garde vos heures et vos dates claires au moment de la demande." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Enseigner, observer et votre plan CDA",
        questions: [
          { objective: "O4", q: "Laquelle est une observation objective ?", options: ["« A. est paresseux au moment du rangement. »", "« A. s'est assis sur le tapis et a regardé les autres ranger les cubes. »", "« A. n'aide jamais. »", "« A. est celui qui écoute le moins bien. »"], answer: 1, why: "Elle décrit seulement ce qui a été vu, sans étiquette." },
          { objective: "O4", q: "Comment protéger la vie privée d'un enfant dans vos notes ?", options: ["Publier les notes dans un groupe de discussion de parents", "Utiliser le nom complet et l'adresse de l'enfant", "Utiliser l'initiale du prénom et garder les notes au programme", "Les montrer à toute personne qui les demande"], answer: 2, why: "Les initiales et la conservation des notes au programme protègent l'enfant." },
          { objective: "O5", q: "Quelle partie vous dit si une activité a marché ?", options: ["Comment savoir si cela a marché", "La liste du matériel", "La tranche d'âge", "Le titre"], answer: 0, why: "Dire comment vous saurez si cela a marché permet de vérifier l'objectif." },
          { objective: "O5", q: "Comment prévoir une même activité pour des enfants aux capacités différentes ?", options: ["Donner à tous la version la plus difficile", "Laisser de côté les enfants en difficulté", "Faire l'activité une seule fois par an", "Proposer une façon plus facile et une plus difficile"], answer: 3, why: "Une version plus facile et une plus difficile permettent à chaque enfant de participer et de progresser un peu." },
          { objective: "O6", q: "Dans quel délai avant la demande le portfolio du CDA Preschool doit-il être préparé ?", options: ["3 ans", "6 mois", "1 semaine", "10 ans"], answer: 1, why: "La page du Council indique de préparer le portfolio dans les 6 mois avant le dépôt de votre demande." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Éducation de la petite enfance et préparation au certificat CDA",
    questions: [
      { objective: "O1", q: "Que fait ce cours pour votre CDA ?", options: ["Il délivre le CDA", "Il remplace l'examen", "Il vous prépare ; le Council délivre le certificat", "Il compte comme votre visite de vérification"], answer: 2, why: "Le Council for Professional Recognition délivre le CDA ; ce cours vous prépare." },
      { objective: "O1", q: "Combien de domaines du CDA vos 120 heures de formation doivent-elles couvrir ?", options: ["Huit, avec au moins 10 heures chacun", "Deux", "Un seul, de votre choix", "Douze, avec 5 heures chacun"], answer: 0, why: "Le Council demande au moins 10 heures dans chacun des huit domaines." },
      { objective: "O1", q: "Où passe-t-on l'examen CDA ?", options: ["Dans votre crèche", "Dans un centre d'examen Pearson VUE", "Au service des permis de conduire", "Par téléphone"], answer: 1, why: "L'examen CDA se passe sur ordinateur dans un centre d'examen Pearson VUE." },
      { objective: "O1", q: "Que se passe-t-il pendant la visite de vérification ?", options: ["Vous payez vos frais en espèces", "Vous passez l'examen écrit", "Un parent note votre façon d'enseigner", "Un PD Specialist examine votre portfolio, vous observe au travail et parle avec vous"], answer: 3, why: "Le PD Specialist examine le portfolio, vous observe avec les enfants et mène un échange de réflexion avec vous." },
      { objective: "O2", q: "Où trouver les contacts de l'agrément de l'accueil des enfants de votre État ?", options: ["Dans un groupe sur les réseaux sociaux", "Dans les ressources des États sur childcare.gov", "Sur un blog au hasard", "Dans l'examen CDA"], answer: 1, why: "Childcare.gov renvoie vers les ressources de chaque État et territoire." },
      { objective: "O2", q: "Pendant combien de temps faut-il frotter ses mains avec du savon ?", options: ["Au moins 20 secondes", "2 secondes", "Seulement si elles ont l'air sales", "Il suffit de les rincer à l'eau"], answer: 0, why: "Frotter avec du savon au moins 20 secondes élimine les microbes." },
      { objective: "O2", q: "Que doit-il y avoir dans le lit d'un bébé pour dormir ?", options: ["Un oreiller et une couverture", "Des peluches", "Des tours de lit", "Seulement un drap housse sur un matelas ferme et plat"], answer: 3, why: "Safe to Sleep dit de ne rien mettre dans le lit sauf un drap housse, sur une surface ferme, plate et horizontale." },
      { objective: "O2", q: "Le taux d'encadrement (nombre d'enfants par adulte) est :", options: ["Le même partout", "Choisi par chaque enseignant", "Fixé par les règles d'agrément de chaque État", "Fixé par les parents"], answer: 2, why: "Les États fixent le taux d'encadrement, qui varie selon l'État et l'âge." },
      { objective: "O3", q: "Une personne qui a l'obligation de signaler doit le faire quand elle :", options: ["A une preuve", "A une raison de soupçonner une maltraitance ou une négligence", "A la permission de la famille", "A fini une enquête"], answer: 1, why: "La loi demande un signalement en cas de soupçon raisonnable ; vous n'avez pas besoin de preuve." },
      { objective: "O3", q: "Qu'est-ce qui fait partie de VOTRE rôle quand un enfant vous parle d'un tort subi ?", options: ["Noter ses mots exacts, la date et l'heure", "Questionner l'enfant de nombreuses fois", "Confronter le parent", "Promettre de garder le secret"], answer: 0, why: "Vous notez les faits et vous signalez ; le service compétent enquête." },
      { objective: "O3", q: "Vous ne savez pas où faire un signalement dans votre État. Qui peut vous aider ?", options: ["Un voisin", "Les camarades de classe de l'enfant", "La Childhelp National Child Abuse Hotline", "Personne, alors vous attendez"], answer: 2, why: "Childhelp (1-800-422-4453) vous aide à joindre le bon service ; appelez le 911 si un enfant est en danger." },
      { objective: "O4", q: "Quel mot n'a PAS sa place dans une note d'observation ?", options: ["« a marché »", "« a dit »", "« a empilé »", "« vilain »"], answer: 3, why: "« Vilain » est une étiquette ; les notes rapportent des actions et des mots." },
      { objective: "O4", q: "Pourquoi les enseignants rédigent-ils des notes d'observation ?", options: ["Pour punir les enfants", "Pour savoir ce que chaque enfant sait faire et prévoir la suite", "Pour les publier en ligne", "Pour comparer les familles des enfants"], answer: 1, why: "Les notes vous aident à planifier et à partager des faits avec les familles." },
      { objective: "O4", q: "Un enfant dit : « J'ai fait une fusée ! » Comment le notez-vous ?", options: ["Vous écrivez ses mots exacts entre guillemets", "Vous écrivez « l'enfant est créatif »", "Vous ne le notez pas", "Vous écrivez ce que vous pensez qu'il voulait dire"], answer: 0, why: "Citer les mots exacts garde la note objective." },
      { objective: "O5", q: "Les jeunes enfants apprennent le mieux par :", options: ["De longs cours magistraux", "Des fiches d'exercices toute la journée", "Le jeu avec un petit défi amusant", "Rester assis sans bouger à attendre"], answer: 2, why: "Le jeu qui leur lance un petit défi est la façon dont les jeunes enfants apprennent." },
      { objective: "O5", q: "Lequel est un plan d'activité complet ?", options: ["« Faire de l'art. »", "« Des feuilles. »", "« S'amuser. »", "Âge, objectif, matériel, étapes, note de sécurité et comment savoir si cela a marché"], answer: 3, why: "Les six parties forment un plan qu'une autre personne pourrait utiliser." },
      { objective: "O5", q: "Courir, sauter et grimper relèvent de :", options: ["La motricité globale", "La motricité fine", "La lecture", "Les mathématiques"], answer: 0, why: "La motricité globale fait travailler les grands muscles du corps." },
      { objective: "O6", q: "Vos heures d'expérience ne comptent que si elles sont dans :", options: ["Les 10 ans avant la demande", "Les 3 ans avant la demande", "Le mois avant la demande", "N'importe quel moment de votre vie"], answer: 1, why: "La page du Council indique dans les 3 ans avant le dépôt de votre demande." },
      { objective: "O6", q: "Quel livre explique ce que doit contenir votre portfolio ?", options: ["N'importe quel magazine pour parents", "Le code de la route de votre État", "Le livre des Competency Standards du Council pour votre cadre", "Un livre de cuisine"], answer: 2, why: "Le livre des Competency Standards de votre cadre contient les consignes du portfolio." },
      { objective: "O6", q: "Quelle est la meilleure première étape de votre plan CDA ?", options: ["Réserver la visite de vérification aujourd'hui", "Payer tous les frais avant de vérifier", "Attendre d'avoir 480 heures pour y réfléchir", "Choisir votre cadre et écrire des dates pour la formation, les heures, le portfolio, l'examen et la visite"], answer: 3, why: "Un plan daté qui commence par votre cadre vous garde dans les délais." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [1, 3, 6, 8, 11, 14, 17, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur chaque ligne. Si une ligne est à Pas encore, corrigez cette partie et vérifiez-la de nouveau.",
    criteria: [
      { name: "Exigences correctes", objective: "O1", notYet: "Des étapes manquent ou les heures et les délais sont faux.", meets: "Indique correctement le cadre, les 120 heures de formation dans les huit domaines, les heures de travail, le portfolio, l'examen et la visite.", exceeds: "Note aussi les frais actuels, une bourse à demander et la date de renouvellement, le tout vérifié sur cdacouncil.org." },
      { name: "Plan daté", objective: "O6", notYet: "Pas de dates, ou des dates qui ne respectent pas les délais de 3 ans ou de 6 mois.", meets: "De vraies dates visées pour chaque étape, qui gardent l'expérience dans les 3 ans et le portfolio dans les 6 mois avant la demande.", exceeds: "Comprend un registre des heures de travail commencé aujourd'hui et des rappels dans le calendrier." },
      { name: "Plan d'activité", objective: "O5", notYet: "Il manque un objectif, une note de sécurité ou un moyen de vérifier que cela a marché.", meets: "Âge, objectif, matériel, étapes, note de sécurité, comment savoir si cela a marché et un domaine du CDA.", exceeds: "Ajoute une version plus facile et une plus difficile, et un moyen d'impliquer les familles." },
      { name: "Réflexion sur la sécurité", objective: "O2", notYet: "L'activité ou le plan oublie la surveillance, le lavage des mains ou les risques d'étouffement.", meets: "La note de sécurité couvre la surveillance et tout danger lié au matériel.", exceeds: "Indique qui agrée l'accueil des enfants dans son État et une formation qu'il exige." },
      { name: "Prêt à observer et à signaler", objective: "O4", notYet: "La note d'exemple contient des étiquettes, ou aucun contact de signalement de l'État n'est noté.", meets: "Comprend une note d'observation objective et la carte avec le contact de signalement de l'État.", exceeds: "La note mène à une prochaine étape claire pour l'enfant, indiquée comme l'idée de l'apprenant." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui s'inscrivent dans les 60 jours à une formation CDA couvrant les huit domaines",
      "Apprenants qui déposent une demande de CDA, et ceux qui l'obtiennent, dans les 12 à 18 mois (enquête de suivi)",
      "Apprenants embauchés ou promus dans un emploi d'accueil des enfants, de Head Start ou de maternelle dans les 6 mois",
      "Les programmes partenaires signalent que le nouveau personnel connaît le sommeil sûr, la surveillance et le signalement obligatoire dès le premier jour"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Internet pour ouvrir cdacouncil.org et childcare.gov, ou des copies imprimées de ces pages",
      "Du papier, un stylo et un calendrier papier ou sur téléphone",
      "Des objets de la maison pour le plan d'activité (gobelets, chaussettes, papier, feuilles)",
      "Facultatif : le livre des Competency Standards du Council pour le cadre de l'apprenant",
      "Environ 75 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "Ce cours prépare les apprenants ; il ne compte pas comme heures de formation CDA, sauf si votre programme est organisé pour les délivrer. Orientez les apprenants vers une formation reconnue pour les 120 heures.",
      "Avant d'enseigner, vérifiez les exigences, les frais et les bourses actuels du CDA sur cdacouncil.org, ainsi que les règles d'agrément et de signalement obligatoire de votre État ; elles changent.",
      "Exercice d'observation : utilisez des vidéos d'enfants ou l'enfant d'un apprenant, avec l'accord des parents. Ne recueillez jamais de photos ni de vrais noms des enfants d'autres personnes.",
      "Le signalement obligatoire peut raviver des souvenirs difficiles. Prévenez du contenu avant la leçon 3, permettez des pauses et partagez des ressources de soutien locales.",
      "Apprenants avec un casier judiciaire : la vérification des antécédents fait partie du travail avec les enfants. Aidez-les à chercher les règles de leur État et mettez-les en contact avec une aide juridique au lieu de deviner.",
      "Notez la tâche finale avec la grille d'évaluation et faites vos retours sur une seule ligne Pas encore à la fois."
    ]
  }
};
