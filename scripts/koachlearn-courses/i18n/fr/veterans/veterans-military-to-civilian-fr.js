"use strict";

// Koach Learn course (French translation of veterans/veterans-military-to-civilian.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "veterans-military-to-civilian-fr",
  lang: "fr",
  translationOf: "veterans-military-to-civilian",
  category: "Veterans (military)",
  name: "De la vie militaire à la vie civile",
  skills: "Utiliser le Transition Assistance Program, Traduire vos compétences militaires, Écrire des points de CV pour le monde civil, Développer un réseau pour un emploi civil, S'adapter à la culture de travail civile, Trouver du soutien et des soins en santé mentale",
  outcome: "faire un plan de transition de 90 jours : utiliser le Transition Assistance Program et les services d'emploi pour anciens combattants, transformer votre expérience militaire en points de CV civils pour un vrai emploi, développer un réseau, vous adapter à la culture de travail civile, et savoir où trouver du soutien, y compris la Veterans Crisis Line (988, puis touche 1).",
  about: [
    "Ce cours s'adresse aux militaires qui se préparent à quitter le service ou à prendre leur retraite, aux anciens combattants déjà partis qui cherchent la suite, et aux conjoints et familles qui vivent ce changement avec eux.",
    "Vous apprendrez ce que propose le Transition Assistance Program, comment décrire votre travail militaire avec des mots que les employeurs civils comprennent, comment écrire et adapter les points de votre CV, comment développer un réseau, ce qui est différent dans les entreprises civiles, et où trouver du soutien quand le changement est difficile.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche \"Essayez maintenant\". Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Les programmes et les règles changent, alors vérifiez les détails sur dol.gov/agencies/vets, va.gov ou auprès du bureau de transition de votre base. Si vous êtes en crise, appelez le 988 et tapez 1, ou envoyez un SMS au 838255, à toute heure."
  ],
  finalTask: "Écrivez votre plan de transition de 90 jours : (1) les ateliers TAP ou les services d'emploi pour anciens combattants que vous utiliserez ; (2) cinq tâches militaires réécrites en points de CV civils, adaptées à une vraie offre d'emploi ; (3) trois personnes ou événements pour votre réseau ; (4) deux habitudes de travail civiles que vous allez pratiquer ; (5) votre liste de soutien, avec la Veterans Crisis Line (988, puis touche 1, ou SMS au 838255), votre Vet Center le plus proche et deux personnes de confiance.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des militaires qui se préparent à quitter le service ou à prendre leur retraite, des anciens combattants déjà démobilisés qui cherchent leur prochaine étape, et les conjoints et familles qui font ce passage avec eux.",
    startingPoint: "Ils ont de solides compétences militaires, de la discipline et l'esprit d'équipe, et savent utiliser un téléphone ou un ordinateur. Beaucoup décrivent leur travail en termes militaires, ont un petit réseau dans le civil et ne savent pas bien ce que propose le TAP ni où trouver du soutien après le service.",
    gap: "Le passage à la vie civile change en même temps le travail, la culture et le soutien, et beaucoup d'anciens combattants ont du mal à trouver un emploi ou à demander de l'aide. Les apprenants ont besoin d'un plan concret sur 90 jours : les bons services TAP et services d'emploi, des points de CV civils adaptés, un réseau, des habitudes de travail civiles et une liste de soutien qui comprend l'aide en cas de crise.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes",
      "Appareils : un téléphone ou un ordinateur avec internet",
      "Bien-être : le cours parle du soutien en santé mentale ; l'aide en cas de crise (Veterans Crisis Line : 988, puis touche 1, ou SMS au 838255) est montrée clairement et disponible à toute heure",
      "Vie privée : décrire les missions en termes généraux ; aucun détail classifié ni numéro privé dans les outils d'IA",
      "Les détails des programmes changent : les apprenants confirment les informations sur le TAP et le VA auprès de leur bureau TAP, sur dol.gov et va.gov"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Selon votre voie principale (emploi, études, métier manuel ou entreprise)", action: "choisir les ateliers TAP ou les services d'emploi pour anciens combattants qui correspondent à votre prochaine étape", standard: "en en nommant au moins deux et la façon de les joindre" },
    { id: "O2", condition: "À partir de votre code ou intitulé d'emploi militaire", action: "trouver des emplois civils correspondants et décrire vos missions sans jargon militaire", standard: "avec trois intitulés d'emplois civils et trois missions réécrites sans sigles et avec au moins un chiffre" },
    { id: "O3", condition: "À partir d'une vraie offre d'emploi", action: "écrire des points de CV civils adaptés à l'offre", standard: "avec cinq points, chacun avec un verbe d'action, ce que vous avez fait et un résultat, et chaque mot vrai" },
    { id: "O4", condition: "Avec les personnes que vous connaissez et les programmes d'embauche d'anciens combattants", action: "écrire une demande courte et polie d'entretien d'information et les questions que vous poseriez", standard: "en nommant trois contacts ou événements pour votre réseau" },
    { id: "O5", condition: "À partir d'un ordre direct que vous avez donné pendant le service", action: "le réécrire en demande civile polie et lister les forces militaires que vous garderez et les habitudes que vous adapterez", standard: "avec deux de chaque" },
    { id: "O6", condition: "Pour vous-même ou pour un autre ancien combattant", action: "créer une liste de soutien qui indique comment joindre la Veterans Crisis Line, votre Vet Center le plus proche et deux personnes de confiance", standard: "avec les numéros de crise enregistrés dans votre téléphone" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Préparer le départ et traduire vos compétences",
      lessons: [
        {
          objectives: ["O1"],
          title: "Utiliser le Transition Assistance Program",
          minutes: 5,
          goal: "Choisir les ateliers et services TAP qui correspondent à votre prochaine étape.",
          text: [
            "Le Transition Assistance Program (TAP, programme d'aide à la transition) aide les militaires et leurs conjoints à se préparer à la vie civile. C'est un travail commun des ministères américains du Travail, de la Défense, des Anciens combattants, de l'Éducation et de la Sécurité intérieure, de la Small Business Administration (agence fédérale des petites entreprises) et de l'Office of Personnel Management (office du personnel fédéral).",
            "La partie de TAP gérée par le Department of Labor (DOL, ministère du Travail) comprend un atelier d'une journée, Employment Fundamentals of Career Transition, sur les outils de recherche d'emploi, et un atelier de deux jours, Department of Labor Employment Workshop, sur le CV, le réseau, la recherche d'emploi, les entretiens et la négociation. Il existe aussi un parcours facultatif de deux jours, Career and Credential Exploration, pour choisir un métier et préparer le chemin pour y arriver.",
            "Une aide individuelle est aussi proposée : l'Employment Navigator and Partnership Program offre un accompagnement professionnel aux militaires en transition et à leurs conjoints dans certaines bases. Les conjoints et les aidants ont leurs propres ateliers. Si vous ne pouvez pas venir en personne, une formation en ligne peut compter, avec l'accord de votre responsable ou conseiller TAP.",
            "Commencez tôt. Demandez au bureau TAP de votre base quand vous devez commencer et quels ateliers conviennent à votre projet : un emploi, des études, un métier manuel ou votre propre entreprise. Déjà sorti ? La page des services d'emploi pour anciens combattants du DOL donne des ressources pour chaque État."
          ],
          steps: ["Contactez le bureau TAP de votre base et demandez quand vous devez commencer.", "Choisissez votre voie principale : emploi, études, métier manuel ou entreprise.", "Inscrivez-vous aux ateliers adaptés, comme le DOL Employment Workshop.", "Renseignez-vous sur l'aide individuelle et les ateliers pour conjoints.", "Déjà démobilisé ? Trouvez les ressources pour anciens combattants de votre État sur dol.gov/agencies/vets."],
          words: [["TAP", "Transition Assistance Program : cours et aide pour les militaires qui passent à la vie civile."], ["Démobilisation", "le fait de quitter le service militaire actif."], ["Certification", "une licence ou un certificat qui prouve une compétence."]],
          slides: [
            { title: "Ce qu'est TAP", bullets: ["Une aide pour passer à la vie civile", "Pour les militaires et leurs conjoints", "Géré par le DOL, le DoD, le VA et d'autres agences"] },
            { title: "Les ateliers du DOL", bullets: ["1 jour : Employment Fundamentals", "2 jours : CV, réseau, entretiens", "2 jours facultatifs : parcours métier et certifications"] },
            { title: "D'autres aides", bullets: ["Accompagnement individuel dans certaines bases", "Ateliers pour conjoints et aidants", "Formation en ligne avec accord"] },
            { title: "Commencez tôt", bullets: ["Demandez à votre bureau TAP quand commencer", "Choisissez les ateliers adaptés à votre voie", "Déjà sorti ? Trouvez les ressources de votre État"] }
          ],
          sources: [
            { name: "DOL VETS : Transition Assistance Program", url: "https://www.dol.gov/agencies/vets/programs/tap" },
            { name: "DOL VETS : Services d'emploi pour anciens combattants", url: "https://www.dol.gov/agencies/vets/veterans/veterans-employment-services" }
          ],
          tryIt: "Écrivez votre voie principale (emploi, études, métier manuel ou entreprise) et les deux ateliers ou services TAP qui lui conviennent le mieux. Si vous êtes déjà sorti, trouvez votre État sur la page des services d'emploi pour anciens combattants du DOL et notez une ressource et comment la contacter.",
          youCanNow: "choisir les ateliers TAP et les services d'emploi pour anciens combattants qui correspondent à votre prochaine étape.",
          quickCheck: [
            { objective: "O1", q: "Qui peut participer aux services TAP du DOL ?", options: ["Seulement les officiers", "Les militaires en transition et leurs conjoints", "Seulement les personnes qui ont déjà un emploi", "Seulement les retraités"], answer: 1, why: "Les services TAP s'adressent aux militaires en transition, et les conjoints peuvent aussi y participer." },
            { objective: "O1", q: "Vous prévoyez d'apprendre un métier manuel après votre départ. Que faites-vous d'abord ?", options: ["Sauter le TAP parce qu'il ne concerne que les emplois de bureau", "Attendre d'avoir quitté l'armée pour y penser", "Demander à un ami de choisir pour vous", "Écrire votre voie et choisir les ateliers ou services TAP qui y correspondent"], answer: 3, why: "Choisir des ateliers qui correspondent à votre voie principale rend le TAP utile pour votre prochaine étape." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Traduire vos compétences militaires en mots civils",
          minutes: 5,
          goal: "Trouver des emplois civils proches de votre travail militaire et décrire vos compétences sans jargon militaire.",
          text: [
            "Souvent, les recruteurs civils ne savent pas ce que veulent dire votre code de poste, votre grade ou votre unité. Vos compétences sont réelles, mais il faut les dire avec leurs mots.",
            "Commencez par des outils gratuits. Le Military Crosswalk d'O*NET (base de données américaine des métiers) permet de chercher le code ou l'intitulé de votre poste dans votre armée. My Next Move for Veterans, cité par le Department of Labor, propose une recherche pour la transition militaire qui suggère des métiers civils liés à votre expérience. Notez les intitulés de postes civils proposés.",
            "Ensuite, traduisez. Remplacez les mots militaires par des mots simples : \"NCOIC\" devient \"superviseur\" ou \"chef d'équipe\" ; \"PCS\" devient \"mutation\" ou \"déménagement\" ; \"mission\" peut devenir \"projet\" ou \"opération\". Écrivez les sigles en entier ou supprimez-les. Utilisez des chiffres qui montrent la taille et les résultats : combien de personnes vous avez encadrées, la valeur du matériel dont vous étiez responsable, ou combien de livraisons vous avez gérées.",
            "Un assistant d'IA peut vous proposer des mots civils pour une tâche. Décrivez le travail en termes généraux seulement. Ne collez jamais d'informations classifiées, sensibles ou personnelles, et vérifiez que chaque mot proposé est vrai."
          ],
          steps: ["Cherchez le code ou l'intitulé de votre poste dans le Military Crosswalk d'O*NET ou dans My Next Move for Veterans.", "Écrivez trois intitulés de postes civils correspondants.", "Listez vos tâches principales avec des mots simples.", "Remplacez les sigles et les termes militaires par des mots civils.", "Ajoutez des chiffres : personnes encadrées, valeur du matériel, tâches accomplies."],
          words: [["Code de poste", "le code de votre emploi militaire, comme un MOS, un rating ou un AFSC."], ["Jargon", "des mots particuliers qu'un seul groupe comprend."], ["Compétence transférable", "une compétence utile dans beaucoup d'emplois différents, comme diriger une équipe ou planifier."]],
          slides: [
            { title: "Dites-le avec leurs mots", bullets: ["Les employeurs ne connaissent pas toujours votre code de poste ou votre grade", "Vos compétences sont réelles ; traduisez-les"] },
            { title: "Outils gratuits", bullets: ["O*NET Military Crosswalk", "My Next Move for Veterans", "Notez les intitulés de postes civils"] },
            { title: "Traduisez", bullets: ["NCOIC -> superviseur ou chef d'équipe", "Écrivez les sigles en entier ou supprimez-les", "Ajoutez des chiffres : personnes, matériel, résultats"] },
            { title: "Utiliser l'IA en sécurité", bullets: ["Termes généraux seulement", "Jamais de détails classifiés ou personnels", "Vérifiez que chaque mot est vrai"] }
          ],
          sources: [
            { name: "O*NET OnLine : Military Crosswalk", url: "https://www.onetonline.org/crosswalk/MOC/" },
            { name: "DOL VETS : Services d'emploi pour anciens combattants (My Next Move for Veterans)", url: "https://www.dol.gov/agencies/vets/veterans/veterans-employment-services" }
          ],
          tryIt: "Cherchez le code ou l'intitulé de votre poste militaire dans le Military Crosswalk d'O*NET ou dans My Next Move for Veterans. Écrivez trois intitulés de postes civils proposés, puis réécrivez trois de vos tâches sans sigles et avec au moins un chiffre.",
          youCanNow: "trouver des emplois civils proches de votre travail militaire et décrire vos compétences avec des mots civils simples.",
          quickCheck: [
            { objective: "O2", q: "Pourquoi traduire vos compétences militaires en mots civils ?", options: ["Les recruteurs civils peuvent ne pas comprendre les termes militaires", "La loi interdit les termes militaires dans les CV", "Pour rendre votre CV plus long", "Les emplois civils n'ont pas besoin de vos compétences"], answer: 0, why: "Les recruteurs ne peuvent apprécier que les compétences qu'ils comprennent." },
            { objective: "O2", q: "Votre mission dit « Servi comme sous-officier S-4 du BN ». Que faites-vous ?", options: ["La laisser telle quelle", "Ajouter plus de sigles", "Écrire en entier ou enlever les sigles et décrire le travail avec un chiffre", "Supprimer la mission"], answer: 2, why: "Les points de CV civils écrivent en entier ou enlèvent les sigles et montrent l'échelle du travail." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Écrire des points de CV pour un vrai emploi",
          minutes: 6,
          goal: "Écrire des points de CV civils qui correspondent à une vraie offre d'emploi.",
          text: [
            "Un bon point de CV commence par un verbe d'action, dit ce que vous avez fait et montre le résultat, si possible avec un chiffre. Modèle : action + quoi + résultat. Exemple : \"Dirigé une équipe de 12 personnes pour l'entretien de 30 véhicules, avec 95% prêts dans les délais.\"",
            "Adaptez votre CV à chaque emploi. Lisez l'offre d'emploi et soulignez les compétences et les mots qu'elle utilise, comme \"inventaire\", \"sécurité\", \"planning\" ou \"service client\". Puis reprenez ces mêmes mots dans vos points, quand ils sont vrais pour vous. Beaucoup d'employeurs utilisent des logiciels qui analysent les CV pour trouver ces mots.",
            "Restez bref et civil. En général, une ou deux pages. Mettez en haut l'intitulé du poste que vous visez. Laissez de côté ce qui n'aide pas pour cet emploi, et n'indiquez aucun détail classifié. Ajoutez vos licences et certifications, y compris celles obtenues pendant le service.",
            "Exemple : une spécialiste en logistique de la Marine qui postule comme superviseure d'entrepôt écrit : \"Géré un stock de 4,000 pièces d'une valeur de $2 millions avec 99% d'exactitude\" et \"Formé 8 nouveaux membres de l'équipe aux procédures de sécurité\". Les deux reprennent des mots de l'offre."
          ],
          steps: ["Trouvez une vraie offre d'emploi qui vous intéresse.", "Soulignez les compétences et les mots qu'elle utilise.", "Écrivez cinq points : verbe d'action + ce que vous avez fait + résultat chiffré.", "Reprenez les mots de l'offre quand ils sont vrais pour vous.", "Supprimez les sigles et tout ce qui est classifié, puis lisez-le à voix haute."],
          words: [["CV", "un document court qui présente aux employeurs votre expérience, vos compétences et votre formation."], ["Adapter", "modifier votre CV pour qu'il corresponde à un emploi."], ["Mot-clé", "un mot important de l'offre d'emploi que les employeurs recherchent."]],
          slides: [
            { title: "Modèle d'un bon point", bullets: ["Verbe d'action + ce que vous avez fait + résultat", "\"Dirigé une équipe de 12 personnes pour l'entretien de 30 véhicules\""] },
            { title: "Adaptez à chaque emploi", bullets: ["Soulignez les compétences de l'offre", "Reprenez ces mots quand ils sont vrais", "Des logiciels peuvent les rechercher"] },
            { title: "Restez civil", bullets: ["En général, une ou deux pages", "Pas de sigles, rien de classifié", "Ajoutez licences et certifications"] }
          ],
          tryIt: "Trouvez une vraie offre d'emploi qui vous intéresse. Soulignez cinq compétences demandées. Écrivez cinq points de CV sur votre service, chacun avec un verbe d'action, ce que vous avez fait et un résultat, en reprenant les mots de l'offre quand ils sont vrais.",
          youCanNow: "écrire des points de CV qui transforment votre expérience militaire en résultats recherchés par un employeur civil.",
          quickCheck: [
            { objective: "O3", q: "Que veut dire adapter un CV ?", options: ["Utiliser le même CV pour tous les emplois", "Ajouter tous les emplois que vous avez jamais eus", "Le rendre le plus court possible", "Reprendre les mots de l'offre d'emploi quand ils sont vrais pour vous"], answer: 3, why: "Adapter, c'est relier votre vraie expérience aux mots d'une offre précise." },
            { objective: "O3", q: "L'offre demande « gestion des stocks ». Vous avez suivi les pièces d'une unité. Qu'écrivez-vous ?", options: ["« Fait des trucs d'approvisionnement »", "« Géré un stock de 2 500 pièces sans aucune perte à l'inventaire »", "« Expert en gestion des stocks depuis 30 ans » (faux)", "Ne rien mettre"], answer: 1, why: "Il reprend les mots de l'offre, avec un verbe d'action, ce que vous avez fait et un résultat vrai." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Préparer le départ et traduire vos compétences",
        questions: [
          { objective: "O1", q: "Qu'est-ce que le Transition Assistance Program ?", options: ["Un programme de prêts", "Une clinique médicale", "Un bureau de recrutement", "Des cours et de l'aide pour les militaires qui passent à la vie civile"], answer: 3, why: "TAP aide les militaires et leurs conjoints à se préparer à la vie civile." },
          { objective: "O1", q: "Quel atelier du DOL traite du CV, du réseau, de la recherche d'emploi et des entretiens en deux jours ?", options: ["La formation de base", "Le Department of Labor Employment Workshop", "Un examen du VA", "Le GI Bill"], answer: 1, why: "Le DOL présente le DOLEW de deux jours comme l'atelier qui couvre ces compétences." },
          { objective: "O2", q: "Quel outil gratuit aide à faire correspondre un code de poste militaire à des emplois civils ?", options: ["Le Military Crosswalk d'O*NET", "Un rapport de crédit", "Une application météo", "Un quiz sur les réseaux sociaux"], answer: 0, why: "Le Military Crosswalk recherche les codes et intitulés de postes militaires." },
          { objective: "O2", q: "Comment écririez-vous \"NCOIC of motor pool\" dans un CV civil ?", options: ["Le laisser tel quel", "Le supprimer complètement", "\"Supervisé une équipe d'entretien de véhicules\"", "\"Fait des trucs avec des camions\""], answer: 2, why: "Des mots simples et une tâche claire rendent la compétence compréhensible." },
          { objective: "O3", q: "Quel est le point de CV le plus fort ?", options: ["\"Responsable de choses\"", "\"Géré un stock de 4,000 pièces avec 99% d'exactitude\"", "\"J'étais dans la Marine\"", "\"J'ai fait mon travail\""], answer: 1, why: "Il a un verbe d'action, ce qui a été fait et un résultat chiffré." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Construire votre vie civile",
      lessons: [
        {
          objectives: ["O4"],
          title: "Développer un réseau pour un emploi civil",
          minutes: 5,
          goal: "Écrire un court message de réseau qui demande de l'aide à des personnes et à des programmes pour trouver un emploi.",
          text: [
            "Beaucoup d'emplois sont pourvus grâce à des personnes qui connaissent d'autres personnes. Développer un réseau, ce n'est pas mendier un emploi. C'est créer des liens, demander des conseils et rendre service en retour.",
            "Commencez par les gens que vous connaissez : d'autres anciens combattants déjà en poste dans le civil, d'anciens chefs, la famille, les amis, votre église ou des groupes de quartier. Créez un profil professionnel en ligne, par exemple sur LinkedIn, avec un titre civil comme \"Superviseur logistique, 8 ans à diriger des équipes\".",
            "Demandez de courts entretiens d'information : 15 à 20 minutes pour découvrir le métier et l'entreprise de quelqu'un. Préparez trois questions, comme \"À quoi ressemble une journée normale ?\" et \"Quelles compétences comptent le plus ici ?\". Remerciez la personne ensuite.",
            "Utilisez aussi les programmes pour anciens combattants. VETS, le service du DOL pour les anciens combattants, liste des ressources par État pour les anciens combattants et l'apprentissage, et le HIRE Vets Medallion Program récompense les employeurs engagés à embaucher des anciens combattants. Les salons de l'emploi pour anciens combattants et les groupes d'anciens combattants dans les entreprises sont de bons endroits pour rencontrer des gens."
          ],
          steps: ["Listez dix personnes que vous connaissez qui travaillent dans le civil.", "Créez ou mettez à jour un profil professionnel en ligne avec un titre civil.", "Demandez à deux personnes un entretien d'information de 15 à 20 minutes.", "Préparez trois questions et envoyez un remerciement ensuite.", "Cherchez des salons de l'emploi pour anciens combattants et des employeurs qui les embauchent."],
          words: [["Réseau", "les liens avec des personnes qui peuvent partager des conseils, des pistes ou des contacts."], ["Entretien d'information", "une courte discussion pour découvrir le métier de quelqu'un, pas pour demander un emploi."], ["Titre du profil", "la courte ligne sous votre nom sur un profil professionnel."]],
          slides: [
            { title: "Les gens pourvoient les emplois", bullets: ["Réseau = liens et conseils", "Ne pas mendier ; rendre service en retour"] },
            { title: "Commencez par ceux que vous connaissez", bullets: ["Anciens combattants dans le civil", "Anciens chefs, famille, communauté", "Un profil avec un titre civil"] },
            { title: "Entretiens d'information", bullets: ["15 à 20 minutes", "Trois questions préparées", "Toujours dire merci"] },
            { title: "Programmes pour anciens combattants", bullets: ["Ressources par État via DOL VETS", "Employeurs HIRE Vets", "Salons de l'emploi pour anciens combattants"] }
          ],
          sources: [
            { name: "DOL VETS : Veterans' Employment and Training Service", url: "https://www.dol.gov/agencies/vets" },
            { name: "HIRE Vets Medallion Program", url: "https://www.hirevets.gov/" }
          ],
          tryIt: "Écrivez une liste de dix personnes que vous connaissez qui travaillent dans le civil. Choisissez-en deux et écrivez à chacune un message court et poli pour demander 15 minutes d'échange sur son travail. Écrivez trois questions que vous poseriez.",
          youCanNow: "développer un réseau, demander des entretiens d'information et utiliser les programmes d'embauche des anciens combattants.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce que développer un réseau ?", options: ["Demander tout de suite un emploi à des inconnus", "Utiliser seulement les réseaux sociaux", "Créer des liens, demander des conseils et rendre service en retour", "Envoyer votre CV à tout le monde"], answer: 2, why: "Le réseau est une relation dans les deux sens, faite de conseils et d'entraide." },
            { objective: "O4", q: "Un ami travaille dans une entreprise qui vous plaît. Que lui envoyez-vous ?", options: ["Une demande courte et polie pour parler 15 minutes de son travail", "Votre CV avec « fais-moi embaucher »", "Un message de deux pages sur votre carrière", "Rien ; c'est gênant"], answer: 0, why: "Une demande courte et polie d'entretien d'information est facile à accepter." }
          ]
        },
        {
          objectives: ["O5"],
          title: "S'adapter à la culture de travail civile",
          minutes: 5,
          goal: "Citer les grandes différences des entreprises civiles et prévoir comment vous allez vous adapter.",
          text: [
            "Les entreprises civiles fonctionnent autrement. Il n'y a souvent pas de chaîne de commandement claire, et les décisions se prennent en groupe ou après de longues discussions. Les ordres peuvent arriver sous forme de suggestions : \"Pourriez-vous jeter un œil à ceci ?\" veut en général dire \"Merci de le faire\".",
            "La communication est souvent plus douce. Des réponses directes et courtes qui marchaient en uniforme peuvent sembler dures à des collègues civils. Essayez d'ajouter un peu de contexte et un ton aimable. Posez des questions quand ce n'est pas clair ; dans beaucoup d'entreprises, poser des questions est attendu, ce n'est pas un signe de faiblesse.",
            "Vos points forts vous suivent : arriver en avance, finir ce que vous commencez, rester calme sous pression et prendre soin de votre équipe. Gardez-les. Mais attendez-vous à moins de structure, moins de cérémonial, plus d'e-mails et de réunions, et des collègues qui n'ont jamais servi.",
            "Se sentir chez soi peut prendre du temps. Trouvez un mentor au travail, par exemple un collègue ancien combattant, ou rejoignez un groupe d'anciens combattants si l'entreprise en a un. Parlez aussi des changements avec votre famille : elle s'adapte, elle aussi."
          ],
          steps: ["Observez comment les décisions se prennent dans votre nouvel emploi.", "Traitez les demandes polies comme de vraies tâches.", "Ajoutez du contexte et un ton aimable à vos messages directs.", "Posez des questions quand quelque chose n'est pas clair.", "Trouvez un mentor ou un groupe d'anciens combattants au travail."],
          words: [["Chaîne de commandement", "l'ordre militaire qui dit qui rend compte à qui."], ["Culture d'entreprise", "les règles non écrites sur la façon dont les gens travaillent et se parlent dans un emploi."], ["Mentor", "une personne plus expérimentée qui vous donne des conseils."]],
          slides: [
            { title: "Ce qui est différent", bullets: ["Souvent pas de chaîne de commandement claire", "Décisions en groupe ou après discussion", "Les demandes ressemblent à des suggestions"] },
            { title: "Communication", bullets: ["Ajoutez du contexte et un ton aimable", "Poser des questions est attendu"] },
            { title: "Des points forts qui vous suivent", bullets: ["Ponctualité, suivi, calme", "Prendre soin de votre équipe"] },
            { title: "Trouver sa place", bullets: ["Trouvez un mentor ou un groupe d'anciens combattants", "Parlez avec votre famille : elle s'adapte aussi"] }
          ],
          tryIt: "Pensez à une fois où vous avez donné un ordre court et direct pendant le service. Réécrivez-le en demande civile polie avec une raison, comme vous l'écririez dans un e-mail de travail. Puis écrivez deux points forts militaires que vous garderez et deux habitudes que vous allez ajuster.",
          youCanNow: "citer les grandes différences de la culture de travail civile et ajuster votre façon de communiquer.",
          quickCheck: [
            { objective: "O5", q: "Dans beaucoup d'emplois civils, poser des questions, c'est :", options: ["Un signe de faiblesse", "Attendu et normal", "Contraire au règlement", "Réservé aux nouveaux"], answer: 1, why: "Dans les entreprises civiles, on attend en général que les gens posent des questions." },
            { objective: "O5", q: "Vous voulez qu'un collègue envoie un rapport d'ici vendredi. Comment l'écrivez-vous ?", options: ["« Rapport. Vendredi. Exécution. »", "« Fais-le, sinon... »", "Ne rien dire et le faire vous-même", "« Pourriez-vous m'envoyer le rapport d'ici vendredi ? J'en ai besoin pour la réunion de lundi. Merci ! »"], answer: 3, why: "Une demande polie avec une raison correspond à la culture de travail civile." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Trouver du soutien et des soins en santé mentale",
          minutes: 5,
          goal: "Faire une liste de soutien et savoir comment obtenir de l'aide en cas de crise, à toute heure.",
          text: [
            "Quitter l'armée est un grand changement : une nouvelle routine, une nouvelle identité, peut-être un déménagement, et moins de contacts avec les personnes avec qui vous avez servi. Le stress, le mauvais sommeil, la colère ou le moral bas sont fréquents. Demander de l'aide est une force, pas une faiblesse.",
            "La Veterans Crisis Line (ligne de crise pour anciens combattants) est gratuite, confidentielle et ouverte 24 heures sur 24, 7 jours sur 7. Appelez le 988, puis tapez 1. Envoyez un SMS au 838255. Ou discutez en ligne sur veteranscrisisline.net. Elle s'adresse aux anciens combattants, aux militaires en service, aux membres de la Garde nationale et de la Réserve et à leurs proches, et vous n'avez pas besoin d'être inscrit aux prestations ou aux soins du VA (ministère américain des Anciens combattants) pour l'utiliser.",
            "Pour un soutien sur la durée, les Vet Centers sont des centres de conseil de proximité qui offrent un accompagnement psychologique gratuit et confidentiel aux anciens combattants, militaires et familles admissibles, y compris de l'aide pour s'adapter après le service. Appelez le 1-877-927-8387 à toute heure pour parler et être mis en contact avec le Vet Center le plus proche. Le système de santé du VA propose aussi des soins en santé mentale aux anciens combattants inscrits.",
            "Construisez aussi votre propre équipe : deux ou trois personnes de confiance, un groupe d'anciens combattants, des groupes religieux ou de quartier, et une routine régulière avec de l'exercice et du sommeil. Si vous vous inquiétez pour un autre ancien combattant, vous pouvez appeler la Crisis Line pour lui."
          ],
          steps: ["Enregistrez dans votre téléphone le 988 (puis touche 1) et le numéro SMS 838255.", "Trouvez votre Vet Center le plus proche en appelant le 1-877-927-8387.", "Écrivez les noms et numéros de deux ou trois personnes de confiance.", "Ajoutez un groupe ou une routine qui vous aide, comme un groupe d'anciens combattants ou du sport.", "Si vous ou un ami êtes en crise, appelez maintenant le 988 et tapez 1."],
          words: [["Veterans Crisis Line", "un soutien de crise gratuit, confidentiel et 24 h/24 pour les anciens combattants, les militaires et leurs proches : 988, puis touche 1."], ["Vet Center", "un centre de conseil de proximité qui offre un accompagnement gratuit et confidentiel aux anciens combattants, militaires et familles admissibles."], ["Confidentiel", "gardé privé."]],
          slides: [
            { title: "Le changement est dur ; demander de l'aide est une force", bullets: ["Nouvelle routine, identité, peut-être un déménagement", "Stress, mauvais sommeil, colère sont fréquents"] },
            { title: "Veterans Crisis Line : 24 h/24, 7 j/7", bullets: ["Appelez le 988, puis tapez 1", "SMS au 838255", "Discussion sur veteranscrisisline.net"] },
            { title: "Soutien sur la durée", bullets: ["Vet Centers : accompagnement gratuit et confidentiel", "Appelez le 1-877-927-8387, à toute heure", "Soins en santé mentale du VA"] },
            { title: "Votre propre équipe", bullets: ["Deux ou trois personnes de confiance", "Groupes d'anciens combattants, religieux ou de quartier", "Routine : exercice et sommeil"] }
          ],
          sources: [
            { name: "Veterans Crisis Line", url: "https://www.veteranscrisisline.net/" },
            { name: "VA Vet Centers", url: "https://www.vetcenter.va.gov/" }
          ],
          tryIt: "Tâche finale : enregistrez le 988 (puis touche 1) et le 838255 dans votre téléphone, et écrivez votre liste de soutien avec votre Vet Center le plus proche et deux personnes de confiance. Puis terminez votre plan de transition de 90 jours avec vos services TAP ou d'emploi, cinq points de CV adaptés, trois contacts ou événements de réseau, et deux habitudes de travail civiles que vous allez pratiquer.",
          youCanNow: "obtenir de l'aide en cas de crise à toute heure, trouver un soutien sur la durée, et mettre par écrit votre plan complet de transition de 90 jours.",
          quickCheck: [
            { objective: "O6", q: "Comment joindre la Veterans Crisis Line par téléphone ?", options: ["Composer le 988, puis la touche 1", "Composer le 911, puis la touche 9", "Écrire à votre ancienne unité", "Attendre un rendez-vous au VA"], answer: 0, why: "La Veterans Crisis Line, c'est le 988, puis la touche 1, à toute heure." },
            { objective: "O6", q: "Vous êtes inquiet pour un autre ancien combattant qui semble en crise. Que pouvez-vous faire ?", options: ["Attendre de voir si ça passe", "En parler en ligne", "Appeler pour lui la Veterans Crisis Line : 988, puis la touche 1", "Lui dire de s'en sortir seul"], answer: 2, why: "Vous pouvez appeler la Veterans Crisis Line pour quelqu'un qui vous inquiète." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Construire votre vie civile",
        questions: [
          { objective: "O4", q: "Qu'est-ce qu'un entretien d'information ?", options: ["Une courte discussion pour découvrir le métier de quelqu'un", "Un entretien d'embauche avec contrat", "Un examen du VA", "Une vérification d'habilitation de sécurité"], answer: 0, why: "Il sert à apprendre et à recevoir des conseils, pas à demander un emploi." },
          { objective: "O5", q: "Une responsable civile dit : \"Pourriez-vous jeter un œil à ce rapport ?\" Qu'est-ce que cela veut dire en général ?", options: ["C'est facultatif ; ignorez-le", "Attendez un ordre écrit", "Merci de faire cette tâche", "Vous avez des ennuis"], answer: 2, why: "Les demandes civiles ressemblent souvent à des suggestions, mais ce sont de vraies tâches." },
          { objective: "O5", q: "Quel point fort militaire devez-vous garder dans un emploi civil ?", options: ["Mettre des sigles dans chaque e-mail", "Ne jamais poser de questions", "Ignorer les collègues qui n'ont jamais servi", "Aller au bout de ce que vous commencez"], answer: 3, why: "La fiabilité et le sens du suivi sont appréciés partout." },
          { objective: "O6", q: "Comment joindre la Veterans Crisis Line par téléphone ?", options: ["Composer le 911 et demander le VA", "Composer le 988, puis taper 1", "Composer le 411", "Appeler votre recruteur"], answer: 1, why: "La Veterans Crisis Line, c'est le 988, puis touche 1, à toute heure." },
          { objective: "O6", q: "Faut-il être inscrit aux prestations du VA pour utiliser la Veterans Crisis Line ?", options: ["Oui", "Seulement si vous avez servi 20 ans", "Seulement en semaine", "Non"], answer: 3, why: "Vous n'avez pas besoin d'être inscrit aux prestations ou aux soins du VA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : De la vie militaire à la vie civile",
    questions: [
      { objective: "O1", q: "Qui peut participer aux services TAP du DOL ?", options: ["Seulement les officiers", "Seulement les retraités de plus de 60 ans", "Les militaires en transition et leurs conjoints", "Seulement les civils"], answer: 2, why: "La partie TAP du DOL s'adresse aux militaires en transition et à leurs conjoints." },
      { objective: "O1", q: "Quand devez-vous commencer TAP ?", options: ["Après cinq ans hors du service", "Jamais", "Seulement si vous avez déjà un emploi", "Tôt : demandez au bureau TAP de votre base quand vous devez commencer"], answer: 3, why: "Commencer tôt vous donne plus de temps ; votre bureau TAP fixe le calendrier." },
      { objective: "O1", q: "Quel atelier est facultatif et vous aide à choisir un métier et à préparer le chemin pour y arriver ?", options: ["La formation de base", "Career and Credential Exploration", "L'entraînement physique", "Un examen de demande au VA"], answer: 1, why: "C2E est le parcours facultatif de deux jours du DOL sur les métiers et les certifications." },
      { objective: "O1", q: "Vous ne pouvez pas suivre TAP en personne. Qu'est-ce qui peut compter à la place ?", options: ["Une formation en ligne, avec l'accord de votre responsable ou conseiller TAP", "Rien", "Regarder la télévision", "Les notes d'un ami"], answer: 0, why: "Le DOL indique que la formation en ligne peut compter avec un accord." },
      { objective: "O2", q: "Pourquoi traduire vos compétences militaires ?", options: ["Les recruteurs civils ne comprennent pas toujours les termes militaires", "C'est obligatoire selon la loi", "Pour cacher votre service", "Pour allonger le CV"], answer: 0, why: "Des mots simples aident les employeurs à voir vos vraies compétences." },
      { objective: "O2", q: "My Next Move for Veterans vous aide à :", options: ["Déposer une demande au VA", "Obtenir un prêt", "Trouver des métiers civils liés à votre expérience militaire", "Prendre rendez-vous chez le médecin"], answer: 2, why: "Le DOL cite sa recherche de transition militaire pour trouver des métiers civils." },
      { objective: "O2", q: "Que faire des sigles dans un CV civil ?", options: ["En mettre le plus possible", "Les mettre en gras", "En inventer de nouveaux", "Les écrire en entier ou les supprimer"], answer: 3, why: "Les sigles perdent les lecteurs civils." },
      { objective: "O2", q: "Quand vous utilisez l'IA pour traduire vos tâches, vous devez :", options: ["Coller des détails classifiés pour plus de précision", "Décrire le travail en termes généraux et vérifier que chaque mot est vrai", "La laisser inventer des résultats", "Donner votre numéro de sécurité sociale"], answer: 1, why: "Ne partagez jamais de détails sensibles, et gardez un CV vrai." },
      { objective: "O3", q: "Un bon point de CV suit le modèle :", options: ["Grade + unité + base", "Loisir + plat préféré", "Code de poste seulement", "Verbe d'action + ce que vous avez fait + résultat"], answer: 3, why: "Il montre ce que vous avez fait et pourquoi c'était important." },
      { objective: "O3", q: "Comment adapter un CV ?", options: ["En reprenant les mots de l'offre quand ils sont vrais pour vous", "En envoyant le même CV partout", "En ajoutant tous les emplois que vous avez eus", "En écrivant dix pages"], answer: 0, why: "Adapter, c'est relier vos vraies compétences à cet emploi." },
      { objective: "O3", q: "Quel chiffre rend un point plus fort ?", options: ["Votre pointure", "\"Formé 8 nouveaux membres de l'équipe\"", "Le numéro de poste téléphonique de votre unité", "Votre matricule"], answer: 1, why: "Les chiffres montrent l'ampleur et les résultats de votre travail." },
      { objective: "O4", q: "Développer un réseau, c'est surtout :", options: ["Demander de l'argent à des inconnus", "Envoyer le même message à tout le monde", "Créer des liens, demander des conseils et rendre service en retour", "Réservé aux diplômés"], answer: 2, why: "Le réseau repose sur les relations et les conseils." },
      { objective: "O4", q: "Combien de temps dure en général un entretien d'information ?", options: ["Trois heures", "Toute la journée", "Environ 15 à 20 minutes", "Une minute"], answer: 2, why: "Une demande courte respecte le temps de l'autre personne." },
      { objective: "O4", q: "Que fait le HIRE Vets Medallion Program ?", options: ["Il récompense les employeurs engagés à embaucher des anciens combattants", "Il paie le loyer des anciens combattants", "Il dépose les demandes au VA", "Il organise les classes militaires"], answer: 0, why: "Le DOL le décrit comme une reconnaissance de l'engagement des entreprises à embaucher des anciens combattants." },
      { objective: "O5", q: "Vos messages courts et directs semblent durs à vos collègues civils. Qu'est-ce qui aide ?", options: ["Ne plus leur parler", "Utiliser plus de sigles", "Écrire tout en majuscules", "Ajouter du contexte et un ton aimable"], answer: 3, why: "Des messages plus doux et plus clairs conviennent à la culture de travail civile." },
      { objective: "O5", q: "Dans beaucoup d'emplois civils, poser des questions est :", options: ["Interdit", "Attendu et normal", "Un signe de faiblesse", "Réservé aux chefs"], answer: 1, why: "Demander quand ce n'est pas clair est attendu dans beaucoup d'entreprises." },
      { objective: "O6", q: "Quel numéro vous met en contact avec votre Vet Center le plus proche, à toute heure ?", options: ["911", "411", "1-800-MEDICARE", "1-877-927-8387"], answer: 3, why: "Le VA indique le 1-877-927-8387 comme centre d'appels des Vet Centers." },
      { objective: "O6", q: "Vous pouvez envoyer un SMS à la Veterans Crisis Line au :", options: ["988", "411", "838255", "911"], answer: 2, why: "Envoyez un SMS au 838255 pour joindre la Veterans Crisis Line." },
      { objective: "O6", q: "Vous vous inquiétez pour un autre ancien combattant. Que pouvez-vous faire ?", options: ["Appeler la Veterans Crisis Line pour lui : 988, puis touche 1", "Attendre et espérer", "En parler sur internet", "N'en parler à personne"], answer: 0, why: "La Crisis Line aide aussi les personnes inquiètes pour un ancien combattant." },
      { objective: "O6", q: "L'accompagnement des Vet Centers est :", options: ["Réservé aux officiers", "Gratuit et confidentiel", "Seulement sur décision de justice", "Payé à l'heure"], answer: 1, why: "Le VA indique que l'accompagnement des Vet Centers est gratuit et confidentiel." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      4,
      6,
      8,
      9,
      11,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "TAP et services d'emploi",
        objective: "O1",
        notYet: "Aucun atelier ni service nommé.",
        meets: "Les ateliers TAP ou les services d'emploi pour anciens combattants que l'apprenant utilisera, adaptés à sa voie.",
        exceeds: "Indique les dates ou la façon de s'inscrire à chacun."
      },
      {
        name: "Points de CV adaptés",
        objective: "O3",
        notYet: "Moins de cinq points, ou des points avec du jargon militaire et sans résultats.",
        meets: "Cinq points en mots civils, chacun avec un verbe d'action, ce qui a été fait et un résultat, adaptés à une vraie offre.",
        exceeds: "Chaque point reprend un mot de l'offre et contient un chiffre."
      },
      {
        name: "Réseau",
        objective: "O4",
        notYet: "Aucune personne ni aucun événement nommé.",
        meets: "Trois personnes ou événements pour le réseau.",
        exceeds: "Un message est rédigé pour au moins l'un d'eux, avec des questions à poser."
      },
      {
        name: "Habitudes de travail civiles",
        objective: "O5",
        notYet: "Aucune habitude nommée.",
        meets: "Deux habitudes de travail civiles que l'apprenant va pratiquer.",
        exceeds: "Nomme aussi deux forces militaires qu'il gardera."
      },
      {
        name: "Liste de soutien",
        objective: "O6",
        notYet: "Pas de liste de soutien, ou pas de ligne de crise.",
        meets: "La Veterans Crisis Line (988, puis touche 1, ou SMS au 838255), le Vet Center le plus proche et deux personnes de confiance.",
        exceeds: "Les numéros sont enregistrés dans le téléphone de l'apprenant."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent l'exercice final (grille d'évaluation)",
      "Apprenants qui participent à un atelier TAP ou contactent des services d'emploi pour anciens combattants dans les 30 jours (enquête de suivi)",
      "Apprenants qui postulent à un emploi avec un CV adapté ou font un entretien d'information dans les 30 jours",
      "Apprenants qui obtiennent un emploi civil, une formation ou une place dans une école dans les 6 mois"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec internet",
      "Une vraie offre d'emploi civile qui intéresse l'apprenant",
      "Les sites gratuits du Military Crosswalk d'O*NET ou de My Next Move for Veterans, dol.gov et va.gov",
      "Du papier ou un document pour le plan de transition sur 90 jours",
      "Environ 60 minutes au total : leçons, exercices, contrôles et exercice final"
    ],
    facilitatorNotes: [
      "Donnez la Veterans Crisis Line (988, puis touche 1, ou SMS au 838255) dès le début du cours et connaissez les démarches locales d'orientation si un apprenant est en détresse.",
      "Gardez la leçon sur la liste de soutien privée : les apprenants n'ont pas à dire qui figure sur leur liste.",
      "Invitez les conjoints et les membres de la famille ; le passage à la vie civile touche tout le foyer.",
      "Faites pratiquer par deux la réécriture en demande polie et la lecture des points de CV de l'autre.",
      "Notez le plan sur 90 jours avec la grille, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
