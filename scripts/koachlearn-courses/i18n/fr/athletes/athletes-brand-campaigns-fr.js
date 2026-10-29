"use strict";

// Koach Learn course (French translation of athletes/athletes-brand-campaigns.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-brand-campaigns-fr",
  lang: "fr",
  translationOf: "athletes-brand-campaigns",
  category: "Athletes",
  name: "Campagnes éducatives des marques",
  skills: "Reconnaître une campagne éducative, Choisir une cause qui vous correspond, Vérifier les faits auprès de sources fiables, Planifier une campagne de 3 publications avec l'IA, Proposer un partenariat à une marque ou une association avec une mention claire",
  outcome: "planifier une campagne éducative de trois publications sur une cause qui vous tient à cœur (par exemple la sécurité dans l'eau, la lecture, la prévention des commotions cérébrales ou l'éducation financière), avec des faits vérifiés auprès de sources officielles, une proposition de partenariat et une mention claire de tout soutien d'une marque.",
  about: [
    "Ce cours s'adresse aux athlètes et aux entraîneurs qui veulent utiliser leur audience pour enseigner quelque chose d'utile, seuls ou avec une marque ou une association partenaire. Les marques mènent souvent des campagnes éducatives avec des athlètes sur des sujets comme la santé, la sécurité, la lecture, la gestion de l'argent et la vie locale.",
    "Une campagne éducative enseigne d'abord et vend ensuite, si elle vend. Vous apprendrez ce qui fait une bonne campagne, choisirez une cause qui vous correspond, vérifierez les faits auprès de sources officielles, planifierez trois publications avec l'IA et proposerez honnêtement un partenariat.",
    "Chaque leçon dure environ cinq minutes et comprend une tâche « Essayez maintenant ». Une vérification des connaissances termine chaque chapitre, et un quiz de 20 questions termine le cours. Tout travail payé ou offert par une marque doit être clairement signalé et, pour les étudiants, demande de vérifier les règles NIL (nom, image et ressemblance) de votre école et de votre État."
  ],
  finalTask: "Planifiez une campagne éducative de trois publications sur une cause : un objectif d'apprentissage clair, trois plans de publication rédigés avec l'IA, chaque fait relié à une source officielle ou experte, un appel à l'action et une courte proposition à une marque ou une association partenaire. Indiquez comment vous signalerez tout soutien d'une marque et auprès de qui, dans votre école ou votre État, vous avez vérifié les règles NIL.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des athlètes et des entraîneurs de lycée, d'université et en début de carrière qui veulent utiliser leur audience pour enseigner quelque chose d'utile, seuls ou avec une marque ou une association partenaire.",
    startingPoint: "Ils ont un public sur les réseaux sociaux et une cause qui leur tient à cœur, tirée de leur propre vie. Peu ont planifié une campagne, vérifié des faits auprès de sources officielles, fait une proposition à un partenaire ou mesuré si les gens ont appris.",
    gap: "Des publications bien intentionnées mais avec des faits faux peuvent nuire aux gens et abîmer la réputation de l'athlète et du partenaire, et un soutien non signalé enfreint les règles de la publicité. Une petite campagne aux faits vérifiés, avec une mention honnête, permet aux athlètes d'aider leur communauté et de construire des partenariats de confiance.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Un téléphone avec les réseaux sociaux et un assistant IA gratuit",
      "Environ 60 minutes au total",
      "Chaque fait vient d'une source officielle ou experte ; sensibilisation générale seulement, les conseils personnels restent aux professionnels",
      "Les règles de mention de la FTC et les règles NIL de l'école et de l'État ; les athlètes de moins de 18 ans impliquent un parent ou un tuteur"
    ],
    prerequisites: "Aucun. « Création de contenu pour les athlètes » aide à réaliser les publications."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'exemples de publications", action: "expliquer en quoi une campagne éducative diffère d'une publicité classique", standard: "en nommant les quatre éléments d'une bonne campagne : un objectif d'apprentissage, des faits exacts, une action simple et l'honnêteté sur qui paie" },
    { id: "O2", condition: "À partir de causes liées à votre vie", action: "choisir une cause et écrire un objectif d'apprentissage pour votre public", standard: "avec un lien à votre histoire en deux phrases et un objectif qui dit qui saura ou fera quoi" },
    { id: "O3", condition: "À partir des faits que vous voulez partager", action: "vérifier chaque fait auprès d'une source officielle ou experte et le noter sur une fiche de faits", standard: "avec un lien et une date pour chaque fait, et tout fait que vous ne pouvez pas confirmer retiré" },
    { id: "O4", condition: "Avec votre fiche de faits et un assistant IA", action: "créer un plan de trois publications : pourquoi c'est important, ce qu'il faut savoir et passer à l'action", standard: "avec une accroche, des points principaux et un appel à l'action pour chaque publication, seulement des faits de votre fiche, et un ton plein d'espoir" },
    { id: "O5", condition: "À partir de partenaires qui tiennent déjà à votre cause", action: "écrire une courte proposition à une marque ou une association", standard: "en moins de 150 mots, avec votre cause, votre histoire, votre objectif, votre plan, votre public et une demande claire, et les règles NIL vérifiées" },
    { id: "O6", condition: "Pour une campagne avec un soutien de marque, quel qu'il soit", action: "écrire une mention claire pour chaque publication et choisir deux façons de mesurer l'apprentissage", standard: "avec la mention au début, aucune affirmation au-delà de votre fiche de faits, et les résultats partagés avec votre partenaire" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Ce qui fait une bonne campagne éducative",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce qu'est une campagne éducative",
          minutes: 4,
          goal: "Distinguer une campagne éducative d'une publicité classique.",
          text: [
            "Une publicité classique dit « achetez ceci ». Une campagne éducative dit « voici quelque chose d'utile à savoir ou à faire ». Les marques font appel à des athlètes pour ces campagnes parce que les jeunes et les familles leur font confiance.",
            "Exemples de sujets de campagne : apprendre à nager et la sécurité dans l'eau, reconnaître les signes d'une commotion cérébrale, lire chaque jour, bien s'hydrater, épargner, la sécurité en ligne ou la sensibilisation à la santé mentale.",
            "Une bonne campagne a un seul objectif d'apprentissage, des faits exacts tirés de sources fiables, une action simple que les gens peuvent faire, et elle dit honnêtement qui la finance."
          ],
          words: [["Campagne éducative", "une série de messages qui enseigne quelque chose d'utile, souvent soutenue par une marque ou une association."], ["Objectif d'apprentissage", "la chose que vous voulez que votre public sache ou fasse après la campagne."]],
          slides: [
            { title: "Publicité ou campagne éducative", bullets: ["Publicité : « achetez ceci »", "Campagne : « voici quelque chose d'utile à savoir ou à faire »"] },
            { title: "Exemples de sujets", bullets: ["Sécurité dans l'eau, signes de commotion", "Lecture, gestion de l'argent", "Sécurité en ligne, santé mentale"] },
            { title: "Une bonne campagne a", bullets: ["Un seul objectif d'apprentissage", "Des faits exacts et sourcés", "Une action simple", "L'honnêteté sur qui paie"] }
          ],
          tryIt: "Trouvez une campagne éducative que vous avez vue avec un athlète ou une marque. Notez son objectif d'apprentissage, l'action demandée et si elle disait qui la finançait.",
          youCanNow: "distinguer une campagne éducative d'une publicité classique et dire ce qui la rend bonne.",
          quickCheck: [
            { objective: "O1", q: "Que dit une campagne éducative ?", options: ["« Achetez ça maintenant »", "« Voici quelque chose d'utile à savoir ou à faire »", "« Suivez-moi pour des cadeaux »", "« Notre équipe est la meilleure »"], answer: 1, why: "Une publicité classique dit « achetez ça » ; une campagne éducative enseigne quelque chose d'utile." },
            { objective: "O1", q: "Une marque vous propose une « campagne » qui n'est que des codes de réduction, sans leçon. Qu'est-ce que c'est ?", options: ["Une campagne éducative", "Une fiche de faits", "Une publicité classique", "Un partenariat avec une association"], answer: 2, why: "Sans objectif d'apprentissage ni action utile, c'est une publicité classique." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Choisir votre cause",
          minutes: 5,
          goal: "Choisir une cause qui correspond à votre histoire et à votre public.",
          text: [
            "Les campagnes les plus fortes viennent de la vraie vie. Un entraîneur vous a-t-il appris les commotions cérébrales après la blessure d'un coéquipier ? La lecture vous a-t-elle aidé à garder votre admissibilité sportive ? Apprendre à gérer votre argent NIL a-t-il changé les choses ? Votre histoire donne envie d'écouter.",
            "Choisissez une cause qui correspond aussi à votre public. Les jeunes fans et leurs parents s'intéressent peut-être à la sécurité et à la lecture ; vos camarades d'université, à la gestion de l'argent et à la santé mentale.",
            "Écrivez un objectif d'apprentissage : « Après ma campagne, les joueurs de collège connaîtront trois signes d'une commotion cérébrale et sauront qu'il faut prévenir un entraîneur tout de suite. »"
          ],
          steps: ["Listez trois causes liées à votre vie.", "Marquez celle qui convient le mieux à votre public.", "Écrivez votre lien personnel en deux phrases.", "Écrivez un objectif d'apprentissage."],
          words: [["Cause", "un problème ou un but qui vous tient à cœur et que vous voulez soutenir."], ["Authentique", "vrai et fidèle à qui vous êtes."]],
          slides: [
            { title: "Partez de votre histoire", bullets: ["Que vous est-il arrivé ?", "Pourquoi cela vous tient-il à cœur ?"] },
            { title: "Adaptez-vous à votre public", bullets: ["Jeunes fans : sécurité, lecture", "Étudiants : argent, santé mentale"] },
            { title: "Un objectif d'apprentissage", bullets: ["Qui apprendra quoi", "Et ce qu'ils feront"] }
          ],
          tryIt: "Demandez à un assistant IA de vous aider à lister des causes liées à votre sport et à votre vie. Choisissez-en une et écrivez votre histoire en deux phrases et un objectif d'apprentissage.",
          youCanNow: "choisir une cause authentique et écrire un objectif d'apprentissage clair.",
          quickCheck: [
            { objective: "O2", q: "D'où viennent les causes de campagne les plus fortes ?", options: ["De votre vraie vie", "De ce qui est à la mode", "De ce qu'une marque vous dit", "De sujets au hasard proposés par l'IA"], answer: 0, why: "Votre histoire donne envie aux gens d'écouter." },
            { objective: "O2", q: "Vos fans sont surtout des joueurs de collège et leurs parents. Quelle cause convient le mieux ?", options: ["Investir pour la retraite", "L'assurance auto", "Les formulaires fiscaux de l'université", "Reconnaître les signes d'une commotion"], answer: 3, why: "Les jeunes fans et leurs parents peuvent tenir à des sujets de sécurité comme les commotions." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Avoir des faits exacts",
          minutes: 5,
          goal: "Vérifier chaque fait de votre campagne auprès d'une source officielle ou experte.",
          text: [
            "Si vous enseignez quelque chose de faux, des gens peuvent se blesser, et votre réputation comme celle de votre partenaire en souffrent. Chaque fait a besoin d'une source fiable.",
            "Utilisez des sources officielles et expertes : les agences gouvernementales de santé et de sécurité (par exemple les pages HEADS UP du CDC, l'agence de santé publique américaine, sur les commotions), les organisations nationales et des experts comme les soigneurs sportifs, les médecins, les enseignants ou les conseillers financiers. Demandez à un assistant IA d'expliquer un sujet simplement, puis confirmez chaque fait sur la source elle-même.",
            "Tenez une fiche de faits : chaque fait, le lien de la source et la date de vérification. Enseignez une sensibilisation générale et orientez les gens vers des professionnels pour un conseil personnel."
          ],
          steps: ["Listez les faits que vous voulez partager.", "Trouvez une source officielle ou experte pour chacun.", "Notez le lien et la date de vérification.", "Retirez tout fait que vous ne pouvez pas confirmer.", "Orientez les gens vers des professionnels pour un conseil personnel."],
          words: [["Source officielle", "une information venant d'une agence gouvernementale ou de l'organisation responsable du sujet."], ["Fiche de faits", "une liste de vos faits avec leurs sources et leurs dates de vérification."]],
          slides: [
            { title: "Les faits faux blessent", bullets: ["Des gens peuvent se blesser", "Votre nom et celui de votre partenaire en souffrent"] },
            { title: "Sources fiables", bullets: ["Agences gouvernementales, comme CDC HEADS UP", "Organisations nationales", "Experts : soigneurs, médecins, enseignants"] },
            { title: "Votre fiche de faits", bullets: ["Fait, lien de la source, date de vérification", "Impossible à confirmer ? Retirez-le"] }
          ],
          sources: [{ name: "CDC : HEADS UP (prévention des commotions cérébrales, en anglais)", url: "https://www.cdc.gov/heads-up/index.html" }],
          tryIt: "Écrivez trois faits pour votre campagne. Trouvez une source officielle ou experte pour chacun et créez votre fiche de faits avec les liens et les dates.",
          youCanNow: "vérifier les faits d'une campagne auprès de sources officielles et tenir une fiche de faits.",
          quickCheck: [
            { objective: "O3", q: "Que contient une fiche de faits ?", options: ["Votre nombre d'abonnés", "Chaque fait, le lien de sa source et la date de vérification", "Seulement la réponse de l'IA", "Les prix de votre partenaire"], answer: 1, why: "Une fiche de faits garde chaque fait avec sa source et la date de vérification." },
            { objective: "O3", q: "Un abonné vous demande quoi faire pour sa propre blessure. Que faites-vous ?", options: ["Lui donner un plan de traitement", "Demander à une IA et republier la réponse", "L'orienter vers un médecin ou un soigneur", "L'ignorer"], answer: 2, why: "Faites de la sensibilisation générale et orientez les gens vers des professionnels pour les conseils personnels." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Ce qui fait une bonne campagne éducative",
        questions: [
          { objective: "O1", q: "En quoi une campagne éducative diffère-t-elle d'une publicité classique ?", options: ["Elle est toujours plus longue", "Elle n'a pas d'athlètes", "Elle enseigne d'abord quelque chose d'utile", "Elle n'a jamais de marques"], answer: 2, why: "Les campagnes enseignent ; les publicités vendent surtout." },
          { objective: "O2", q: "Quel est un objectif d'apprentissage clair ?", options: ["« Les joueurs de collège connaîtront trois signes de commotion et préviendront un entraîneur »", "« Soyez attentifs »", "« Faites passer le mot »", "« Devenir viral »"], answer: 0, why: "Il dit qui apprend quoi et ce qu'ils font." },
          { objective: "O2", q: "Pourquoi partir de votre propre histoire ?", options: ["C'est exigé par la loi", "Cela rallonge les publications", "Cela cache la marque", "Cela rend la campagne vraie et les gens écoutent"], answer: 3, why: "Les histoires authentiques créent la confiance." },
          { objective: "O3", q: "L'IA vous donne un fait de santé. Que faites-vous ?", options: ["Le publier tout de suite", "Le confirmer auprès d'une source officielle ou experte", "Le rendre plus effrayant", "Demander à un fan"], answer: 1, why: "L'IA peut se tromper ; confirmez sur la source." },
          { objective: "O3", q: "Vous ne trouvez pas de source pour un fait. Vous :", options: ["Le publiez quand même", "Le retirez", "Inventez une source", "Changez les chiffres"], answer: 1, why: "Ne partagez que ce que vous pouvez confirmer." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Planifier et s'associer",
      lessons: [
        {
          objectives: ["O4"],
          title: "Planifier trois publications avec l'IA",
          minutes: 5,
          goal: "Rédiger un plan de campagne de trois publications avec l'IA et le retoucher.",
          text: [
            "Trois publications suffisent pour une campagne ciblée : 1. Pourquoi c'est important (votre histoire). 2. Ce qu'il faut savoir ou faire (la leçon principale). 3. Passer à l'action (une étape simple, comme « partagez ceci avec votre équipe » ou « suivez la formation gratuite »).",
            "Demandez à un assistant IA : « Voici ma cause, mon objectif d'apprentissage, mon histoire et ma fiche de faits. Planifie trois publications courtes : pourquoi c'est important, ce qu'il faut savoir, passer à l'action. Donne une accroche, les points principaux et un appel à l'action pour chacune. Utilise seulement les faits de ma fiche. »",
            "Retouchez pour que ce soit votre voix et vérifiez de nouveau chaque fait avec votre fiche. Gardez un ton plein d'espoir et pratique, pas effrayant."
          ],
          steps: ["Collez votre cause, votre objectif, votre histoire et votre fiche de faits.", "Demandez trois publications : pourquoi, quoi, action.", "Vérifiez chaque fait avec votre fiche.", "Retouchez avec votre voix.", "Gardez un ton plein d'espoir et pratique."],
          words: [["Appel à l'action", "l'étape simple que vous demandez aux gens de faire."], ["Ton", "le sentiment que donne votre message, comme plein d'espoir ou sérieux."]],
          slides: [
            { title: "Trois publications", bullets: ["1. Pourquoi c'est important : votre histoire", "2. Ce qu'il faut savoir ou faire", "3. Passer à l'action"] },
            { title: "Donnez à l'IA", bullets: ["Cause, objectif, histoire", "Seulement votre fiche de faits"] },
            { title: "Puis retouchez", bullets: ["Les faits correspondent à votre fiche", "Votre voix", "Plein d'espoir, pas effrayant"] }
          ],
          tryIt: "Utilisez l'IA pour rédiger votre plan de trois publications à partir de votre fiche de faits. Retouchez-le et vérifiez de nouveau chaque fait.",
          youCanNow: "planifier une campagne ciblée de trois publications avec l'IA en gardant des faits exacts.",
          quickCheck: [
            { objective: "O4", q: "De quoi parle la publication 2 de la campagne ?", options: ["De votre histoire", "Des prix du partenaire", "Des remerciements", "De ce qu'il faut savoir ou faire : la leçon principale"], answer: 3, why: "Les trois publications sont : pourquoi c'est important, ce qu'il faut savoir, et passer à l'action." },
            { objective: "O4", q: "Le brouillon de l'IA ajoute une statistique qui n'est pas sur votre fiche de faits. Que faites-vous ?", options: ["La retirer, ou d'abord la confirmer auprès d'une source officielle", "La garder ; elle sonne bien", "L'arrondir vers le haut", "Citer l'IA comme source"], answer: 0, why: "N'utilisez que des faits de votre fiche de faits." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Proposer un partenariat à une marque ou une association",
          minutes: 5,
          goal: "Écrire une courte proposition à une marque ou une association qui correspond à votre cause.",
          text: [
            "Les partenaires peuvent apporter de la visibilité, de l'argent ou des ressources. Cherchez ceux qui s'intéressent déjà à votre cause : une école de natation pour la sécurité dans l'eau, une bibliothèque ou une librairie pour la lecture, une coopérative de crédit locale pour la gestion de l'argent, une clinique de médecine du sport pour la prévention des blessures. Les associations peuvent accueillir un partenariat bénévole.",
            "Une proposition présente votre cause, votre histoire, votre objectif d'apprentissage, votre plan de trois publications et votre public. Demandez quelque chose de clair : partager les publications, fournir du matériel ou parrainer la campagne.",
            "Utilisez l'IA pour la rédiger, puis personnalisez-la. Moins de 18 ans ? Impliquez un parent ou un tuteur. Étudiants-athlètes : vérifiez les règles NIL de votre école et de votre État avant d'accepter tout paiement ou produit."
          ],
          steps: ["Listez trois partenaires qui s'intéressent déjà à votre cause.", "Écrivez ce que vous allez demander.", "Utilisez l'IA pour rédiger une proposition de moins de 150 mots.", "Personnalisez-la.", "Vérifiez les règles NIL avant d'accepter un paiement ou des produits."],
          words: [["Partenaire", "une marque ou une association qui travaille avec vous sur la campagne."], ["Association", "une organisation qui travaille pour une cause et non pour le profit."]],
          slides: [
            { title: "De bons partenaires", bullets: ["S'intéressent déjà à votre cause", "École de natation, bibliothèque, coopérative de crédit, clinique"] },
            { title: "Votre proposition présente", bullets: ["Cause, histoire, objectif d'apprentissage", "Plan de trois publications et public", "Une demande claire"] },
            { title: "Avant de dire oui", bullets: ["Moins de 18 ans : impliquez un parent", "Vérifiez les règles NIL de l'école et de l'État"] }
          ],
          sources: [{ name: "NCAA : Nom, image et ressemblance (en anglais)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }],
          tryIt: "Choisissez un partenaire et écrivez une proposition de moins de 150 mots avec l'aide de l'IA. Faites-la lire par un entraîneur ou un parent.",
          youCanNow: "proposer un partenariat à une marque ou une association pour votre campagne.",
          quickCheck: [
            { objective: "O5", q: "Quel partenaire convient à une campagne sur la sécurité dans l'eau ?", options: ["Un concessionnaire automobile", "Une école de natation", "Un magasin de jeux vidéo", "Une pizzeria"], answer: 1, why: "Cherchez des partenaires qui tiennent déjà à votre cause." },
            { objective: "O5", q: "Un partenaire vous offre du matériel gratuit pour votre campagne, et vous êtes étudiant-athlète. Que faites-vous d'abord ?", options: ["L'accepter tout de suite", "En parler en ligne sans prévenir personne", "Vérifier les règles NIL de votre école et de votre État", "Vendre le matériel"], answer: 2, why: "Vérifiez les règles NIL avant d'accepter tout paiement ou produit." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mention, honnêteté et mesure de l'impact",
          minutes: 5,
          goal: "Signaler clairement le soutien d'une marque et mesurer si les gens ont appris.",
          text: [
            "Si une marque vous paie ou vous donne quoi que ce soit pour la campagne, la FTC (l'agence américaine de protection des consommateurs) dit de le signaler clairement dans chaque publication, près du début : « Partenariat rémunéré avec [marque] » ou « Merci à [marque] de soutenir cette campagne ». Dans les vidéos, dites-le et montrez-le.",
            "Dites seulement ce que vous croyez et ce que votre fiche de faits confirme. Ne laissez pas un partenaire ajouter des affirmations que vous ne pouvez pas prouver, surtout des affirmations de santé.",
            "Mesurez l'apprentissage, pas seulement les mentions J'aime : comptez les partages, les enregistrements, les commentaires avec des questions, les personnes qui ont fait l'action (comme s'inscrire à une formation), ou faites un sondage de deux questions à la fin. Partagez les résultats avec votre partenaire."
          ],
          steps: ["Ajoutez une mention claire dans chaque publication sponsorisée.", "Vérifiez chaque affirmation avec votre fiche de faits.", "Choisissez deux mesures d'impact.", "Faites un court sondage après la publication 3.", "Envoyez les résultats à votre partenaire."],
          words: [["Mention de partenariat", "une phrase claire qui dit qu'une marque vous a payé ou soutenu."], ["Impact", "le vrai changement apporté par votre campagne, comme des gens qui apprennent ou agissent."]],
          slides: [
            { title: "Signalez clairement", bullets: ["Dans chaque publication sponsorisée, au début", "« Partenariat rémunéré avec [marque] »", "Vidéo : dites-le et montrez-le"] },
            { title: "Restez honnête", bullets: ["Seulement ce que votre fiche confirme", "Pas d'affirmations de santé non prouvées"] },
            { title: "Mesurez l'apprentissage", bullets: ["Partages, enregistrements, questions", "Les personnes qui ont fait l'action", "Un sondage de deux questions"] }
          ],
          sources: [{ name: "FTC : Disclosures 101 pour les influenceurs sur les réseaux sociaux (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" }],
          tryIt: "Tâche finale : rassemblez votre plan de campagne avec l'objectif d'apprentissage, les trois publications, la fiche de faits, l'appel à l'action, la proposition au partenaire, le texte de la mention et la personne avec qui vous avez vérifié les règles NIL.",
          youCanNow: "mener une campagne éducative honnête avec une mention claire et mesurer son impact.",
          quickCheck: [
            { objective: "O6", q: "Où placer la mention dans une publication de campagne sponsorisée ?", options: ["Au début de chaque publication", "Seulement dans la dernière publication", "Seulement dans votre bio", "À la fin d'une longue série de hashtags"], answer: 0, why: "La FTC dit de faire une mention claire dans chaque publication, au début." },
            { objective: "O6", q: "Votre campagne a eu beaucoup de j'aime. Comment savoir si les gens ont appris ?", options: ["Les j'aime le prouvent", "Demander à la marque", "Compter les abonnés", "Faire un court sondage et compter les personnes qui ont fait l'action"], answer: 3, why: "Mesurez l'apprentissage, pas seulement les j'aime." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Planifier et s'associer",
        questions: [
          { objective: "O4", q: "De quoi parle la publication 1 de la campagne ?", options: ["Acheter le produit", "Vos statistiques", "Un concours", "Pourquoi c'est important : votre histoire"], answer: 3, why: "Votre histoire donne envie de s'intéresser." },
          { objective: "O5", q: "Quel partenaire convient à une campagne sur la lecture ?", options: ["Une bibliothèque ou une librairie locale", "Une application de paris", "Une boisson énergisante", "Un concessionnaire automobile"], answer: 0, why: "Ils s'intéressent déjà à la lecture." },
          { objective: "O6", q: "Une marque soutient votre campagne avec de l'argent. Chaque publication doit inclure :", options: ["Rien", "Un hashtag caché", "Une mention claire près du début", "Un faux nom"], answer: 2, why: "La FTC exige une mention claire." },
          { objective: "O6", q: "Un partenaire veut que vous disiez que sa boisson prévient les commotions. Vous :", options: ["Le dites", "Le dites discrètement", "Le dites sans mention", "Refusez ; c'est une affirmation de santé non prouvée"], answer: 3, why: "Ne faites pas d'affirmations que vous ne pouvez pas prouver." },
          { objective: "O6", q: "Qu'est-ce qui mesure le mieux l'apprentissage ?", options: ["Les mentions J'aime seules", "Les personnes qui ont fait l'action et les résultats du sondage", "Votre nombre d'abonnés", "Le nombre d'émojis"], answer: 1, why: "L'impact, c'est l'apprentissage et l'action." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Campagnes éducatives des marques",
    questions: [
      { objective: "O1", q: "Une campagne éducative sert surtout à :", options: ["Vendre des chaussures", "Montrer des moments forts", "Enseigner quelque chose d'utile", "Lister des statistiques"], answer: 2, why: "Enseigner est le but principal." },
      { objective: "O1", q: "Pourquoi les marques font-elles appel à des athlètes pour leurs campagnes ?", options: ["Les jeunes et les familles font confiance aux athlètes", "Les athlètes travaillent gratuitement", "C'est obligatoire", "Les athlètes sont médecins"], answer: 0, why: "La confiance fait passer le message." },
      { objective: "O1", q: "Lequel est un exemple de sujet de campagne ?", options: ["La sécurité dans l'eau", "Les rumeurs sur les rivaux", "Des conseils de paris", "Des faux régimes"], answer: 0, why: "C'est utile et sans risque à enseigner." },
      { objective: "O2", q: "Combien d'objectifs d'apprentissage une campagne doit-elle avoir ?", options: ["Dix", "Aucun", "Un", "Le plus possible"], answer: 2, why: "Un seul objectif garde la campagne ciblée." },
      { objective: "O2", q: "Les causes les plus fortes viennent de :", options: ["Ce qui est à la mode", "Votre vraie vie", "Une liste au hasard", "Un concurrent"], answer: 1, why: "Les vraies histoires sont authentiques." },
      { objective: "O2", q: "Authentique veut dire :", options: ["Cher", "Viral", "Long", "Vrai et fidèle à vous"], answer: 3, why: "L'authenticité crée la confiance." },
      { objective: "O3", q: "Quelle est une source officielle sur les commotions ?", options: ["Une page de mèmes", "Une publicité", "CDC HEADS UP", "Une section de commentaires"], answer: 2, why: "Elle vient d'une agence gouvernementale de santé." },
      { objective: "O3", q: "Une fiche de faits contient :", options: ["Votre mot de passe", "Seulement des opinions", "Les statistiques des rivaux", "Chaque fait, sa source et la date de vérification"], answer: 3, why: "Elle prouve vos faits." },
      { objective: "O3", q: "Pour un conseil personnel, votre campagne doit :", options: ["Orienter les gens vers des professionnels", "Faire des diagnostics", "Donner des doses", "L'ignorer"], answer: 0, why: "Vous sensibilisez ; les professionnels conseillent." },
      { objective: "O4", q: "La publication 3 de la campagne, c'est :", options: ["Un selfie au hasard", "Passer à l'action", "Une plainte", "Un concours"], answer: 1, why: "L'action transforme l'apprentissage en changement." },
      { objective: "O4", q: "Quand vous demandez des publications à l'IA, dites-lui de :", options: ["Inventer des statistiques", "Ajouter des histoires effrayantes", "Utiliser seulement les faits de votre fiche", "Copier d'autres athlètes"], answer: 2, why: "Cela garde les faits exacts." },
      { objective: "O4", q: "Le meilleur ton pour les sujets de sécurité est :", options: ["Plein d'espoir et pratique", "Effrayant", "En colère", "Moqueur sur les blessures"], answer: 0, why: "Les gens agissent sur des messages pratiques et pleins d'espoir." },
      { objective: "O5", q: "Une coopérative de crédit est un bon partenaire pour :", options: ["La prévention des commotions", "La natation", "La lecture", "La gestion de l'argent"], answer: 3, why: "Elle s'intéresse déjà à l'éducation financière." },
      { objective: "O5", q: "Une proposition doit inclure :", options: ["Seulement un prix", "Votre cause, votre histoire, votre objectif, votre plan, votre public et une demande claire", "Seulement vos statistiques", "Une exigence"], answer: 1, why: "Les partenaires ont besoin de la vue d'ensemble." },
      { objective: "O5", q: "Avant d'accepter les produits d'un partenaire, un étudiant-athlète doit :", options: ["Publier tout de suite", "Vérifier les règles NIL de son école et de son État", "Le cacher", "Demander à un rival"], answer: 1, why: "Les règles NIL varient." },
      { objective: "O5", q: "Si vous avez moins de 18 ans et faites une proposition à un partenaire :", options: ["Utilisez un faux âge", "Cachez-le", "Renoncez à la proposition", "Impliquez un parent ou un tuteur"], answer: 3, why: "Les adultes aident à protéger les mineurs." },
      { objective: "O6", q: "Quelle mention est claire ?", options: ["« Partenariat rémunéré avec [marque] » au début", "« #sp » à la fin", "Rien", "Seulement dans votre biographie"], answer: 0, why: "Claire et difficile à manquer." },
      { objective: "O6", q: "Dans une vidéo sponsorisée, la mention doit être :", options: ["Seulement dans la description", "Dans un commentaire", "Dite et montrée", "Absente"], answer: 2, why: "La mention d'une vidéo doit être dans la vidéo." },
      { objective: "O6", q: "L'impact, c'est :", options: ["Votre nombre d'abonnés", "Seulement les mentions J'aime", "La durée de la vidéo", "Le vrai changement apporté par votre campagne"], answer: 3, why: "L'impact, c'est l'apprentissage et l'action." },
      { objective: "O6", q: "Après la campagne, vous devez :", options: ["Tout supprimer", "Partager les résultats avec votre partenaire", "Cacher les chiffres", "Demander plus d'argent sans résultats"], answer: 1, why: "Rendre compte des résultats crée des partenariats durables." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      6,
      9,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Cause et objectif d'apprentissage",
        objective: "O2",
        notYet: "Pas d'objectif clair, ou la cause ne correspond pas au public.",
        meets: "Une cause avec un lien à l'histoire de l'athlète et un objectif d'apprentissage qui dit qui saura ou fera quoi.",
        exceeds: "L'objectif est mesurable et correspond aux mesures d'impact choisies."
      },
      {
        name: "Fiche de faits",
        objective: "O3",
        notYet: "Des faits sans source, ou des faits non confirmés sont gardés.",
        meets: "Chaque fait a le lien d'une source officielle ou experte et la date de vérification.",
        exceeds: "Un expert, comme un soigneur ou un enseignant, a relu les faits."
      },
      {
        name: "Plan de trois publications",
        objective: "O4",
        notYet: "Moins de trois publications, ou des publications sans accroche ou sans appel à l'action.",
        meets: "Les publications pourquoi, quoi et action, chacune avec une accroche, des points principaux et un appel à l'action, avec seulement des faits de la fiche.",
        exceeds: "Le ton est plein d'espoir et pratique, et chaque publication oriente vers un professionnel ou une ressource gratuite."
      },
      {
        name: "Proposition au partenaire",
        objective: "O5",
        notYet: "Pas de demande claire, ou le partenaire ne correspond pas à la cause.",
        meets: "Moins de 150 mots, à un partenaire adapté, avec la cause, l'histoire, l'objectif, le plan, le public et une demande claire.",
        exceeds: "Personnalisée avec une raison vraie d'avoir choisi ce partenaire, et un parent impliqué quand il le faut."
      },
      {
        name: "Mention et règles",
        objective: "O6",
        notYet: "Pas de plan de mention, ou les règles NIL ne sont pas vérifiées.",
        meets: "Une mention claire pour chaque publication et la personne de l'école ou de l'État qui a confirmé les règles NIL.",
        exceeds: "Nomme aussi deux mesures d'impact et la façon de partager les résultats avec le partenaire."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le plan de campagne avec « Atteint » ou « Dépasse » sur chaque ligne de la grille",
      "Les apprenants qui mènent leur campagne de trois publications dans les 30 jours (questionnaire de suivi)",
      "Les personnes qui ont fait l'action de la campagne, comme s'inscrire à une formation, ou des résultats de sondage qui montrent un apprentissage",
      "Les partenariats noués avec une marque ou une association, et les partenaires qui acceptent une deuxième campagne"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone avec les réseaux sociaux",
      "Un assistant IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "L'accès à des sources officielles pour votre cause, comme les pages HEADS UP du CDC",
      "La politique NIL de votre école ou les règles de l'association de votre État",
      "Environ 60 minutes"
    ],
    facilitatorNotes: [
      "Aidez les apprenants à choisir des causes qu'ils peuvent enseigner sans danger ; les campagnes sur la santé et la santé mentale doivent orienter vers des professionnels, pas donner de conseils personnels.",
      "Demandez à un expert local, comme un soigneur, un bibliothécaire ou un conseiller financier, de relire les fiches de faits.",
      "Impliquez les parents ou tuteurs des athlètes de moins de 18 ans avant de contacter des partenaires.",
      "Envoyez les questions NIL au service de conformité ou à l'association de l'État avant d'accepter tout paiement ou produit.",
      "Vérifiez que chaque publication sponsorisée a une mention claire et aucune affirmation au-delà de la fiche de faits."
    ]
  }
};
