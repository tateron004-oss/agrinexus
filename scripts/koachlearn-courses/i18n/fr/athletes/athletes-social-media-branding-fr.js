"use strict";

// Koach Learn course (French translation of athletes/athletes-social-media-branding.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-social-media-branding-fr",
  lang: "fr",
  translationOf: "athletes-social-media-branding",
  category: "Athletes",
  name: "Image de marque sur les réseaux sociaux pour les sportifs",
  skills: "Définir son image de sportif, Écrire une bonne bio, Choisir ses thèmes de contenu, Faire le tri dans ses anciennes publications, Régler la confidentialité et la sécurité",
  outcome: "créer ou nettoyer un profil sur un réseau social pour en faire une image de sportif claire et sûre : une phrase d'image de marque, une bonne bio et une bonne photo de profil, trois thèmes de contenu, un tri de vos anciennes publications et des réglages de confidentialité sûrs.",
  about: [
    "Ce cours s'adresse aux sportifs qui savent que les entraîneurs, les recruteurs, les marques et les futurs employeurs regardent leurs réseaux sociaux, et qui veulent que cela les aide au lieu de leur nuire. Les entraîneurs peuvent l'utiliser pour former leurs équipes.",
    "Votre image de marque, c'est ce à quoi les gens pensent quand ils voient votre nom. Vous déciderez ce que vous voulez qu'elle soit, construirez un profil qui la montre, choisirez vos sujets de publication, ferez le tri dans vos anciennes publications et protégerez votre sécurité.",
    "Chaque leçon dure environ cinq minutes, avec un exercice « Essayez maintenant ». Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Travaillez l'image d'un profil sur un réseau social : écrivez votre phrase d'image de marque, mettez à jour votre bio et votre photo de profil, écrivez trois thèmes de contenu avec deux idées de publication chacun, passez en revue vos 30 dernières publications et corrigez ce qui ne vous correspond pas, puis vérifiez vos réglages de confidentialité et de sécurité.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des sportifs de lycée, d'université et de club qui savent que les entraîneurs, les recruteurs, les marques et les futurs employeurs regardent leurs réseaux sociaux, et des entraîneurs qui en parlent à leurs équipes.",
    startingPoint: "Ils ont un ou plusieurs comptes sur les réseaux sociaux et publient régulièrement. Peu ont une phrase d'image de marque écrite, une bio réfléchie, des thèmes de contenu, un tri récent de leurs anciennes publications ou des réglages de confidentialité choisis volontairement.",
    gap: "Les anciennes publications, les profils peu clairs et les réglages ouverts peuvent coûter aux sportifs des occasions de recrutement, de parrainage et d'emploi, et les exposer à des inconnus et à des arnaques. Une image claire et sûre les aide à se faire remarquer pour les bonnes raisons et à rester protégés.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Un téléphone avec les applications de réseaux sociaux du sportif et un assistant IA gratuit",
      "Environ 60 minutes au total",
      "Les règles d'âge des plateformes ; les sportifs de moins de 18 ans impliquent un parent ou un tuteur avant d'indiquer leur école ou leur ville",
      "Les règles de l'équipe, de l'établissement, de la ligue, du NIL et de mention de la FTC ; les menus de réglages changent d'une application à l'autre"
    ],
    prerequisites: "Aucun"
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de votre sport, de vos valeurs et de vos centres d'intérêt", action: "écrire une phrase d'image de marque", standard: "qui nomme votre sport et votre poste, une valeur et une chose vraie en dehors du sport" },
    { id: "O2", condition: "Sur un profil de réseau social", action: "écrire une bio courte et choisir une photo de profil qui correspondent à votre image", standard: "avec le sport, le poste, une valeur et un lien, une photo nette et bien éclairée, et aucun détail privé" },
    { id: "O3", condition: "Avec votre phrase d'image de marque et un assistant IA", action: "choisir trois thèmes de contenu avec deux idées de publication pour chacun", standard: "avec chaque thème et chaque idée en accord avec votre phrase d'image de marque" },
    { id: "O4", condition: "Sur votre propre profil", action: "vérifier vos 30 dernières publications, vos commentaires, vos repartages et vos identifications avec le test de l'entraîneur, du sponsor et de la grand-mère", standard: "en archivant, masquant, supprimant ou retirant l'identification de tout ce qui ne passe pas le test" },
    { id: "O5", condition: "Dans les réglages de chaque application", action: "choisir qui peut vous écrire, commenter et vous identifier, désactiver la position sur les publications et activer la vérification en deux étapes", standard: "avec chaque réglage vérifié et un plan pour garder des preuves, bloquer, signaler et prévenir un adulte en cas de menace" },
    { id: "O6", condition: "Avec les règles de votre équipe", action: "écrire vos règles personnelles de publication, y compris comment mentionner les accords avec des marques et gérer les commentaires négatifs", standard: "avec trois règles « Je fais toujours », trois règles « Je ne fais jamais » et une règle sur la mention et la vérification NIL" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Définir votre image",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce qu'est l'image de marque d'un sportif",
          minutes: 4,
          goal: "Écrire une phrase d'image de marque.",
          text: [
            "Une image de marque, c'est l'idée que les gens ont en tête quand ils entendent votre nom. Vous en avez déjà une, que vous l'ayez voulue ou non. Les entraîneurs, les marques et les fans la construisent à partir de vos publications, de vos commentaires et de votre comportement.",
            "Votre image est plus que votre sport. C'est votre sport, plus vos valeurs, plus ce qui fait que vous êtes vous : « Une meneuse travailleuse qui adore entraîner les plus jeunes et veut devenir infirmière. »",
            "Écrivez une phrase d'image de marque : « Je suis un(e) [sport et poste] qui [ce que vous valorisez ou faites] et [autre chose de vrai sur vous]. » Utilisez un assistant IA pour proposer des formulations, mais choisissez des mots honnêtes."
          ],
          steps: ["Notez votre sport et votre poste.", "Notez trois valeurs (comme le travail, la foi, la famille, le leadership).", "Notez un centre d'intérêt en dehors du sport.", "Écrivez une phrase d'image de marque."],
          words: [["Image de marque", "l'idée que les gens ont en tête quand ils entendent votre nom."], ["Valeurs", "ce qui compte le plus pour vous et guide votre façon d'agir."]],
          slides: [
            { title: "Vous avez déjà une image", bullets: ["Construite par vos publications, commentaires et actes", "Vue par les entraîneurs, les marques, les fans"] },
            { title: "Image de marque =", bullets: ["Votre sport", "Plus vos valeurs", "Plus ce qui fait que vous êtes vous"] },
            { title: "Phrase d'image de marque", bullets: ["« Je suis un(e) [sport/poste] qui [valeur]", "et [quelque chose de vrai sur moi]. »"] }
          ],
          tryIt: "Écrivez votre phrase d'image de marque. Demandez à un assistant IA trois autres formulations, puis choisissez ou mélangez celle qui vous ressemble le plus.",
          youCanNow: "décrire votre image de sportif en une phrase honnête.",
          quickCheck: [
            { objective: "O1", q: "Avez-vous une image de marque si vous ne l'avez jamais planifiée ?", options: ["Non, seuls les professionnels en ont une", "Seulement si vous avez 10 000 abonnés", "Oui, les gens la forment à partir de vos publications, commentaires et actions", "Seulement si une entreprise vous sponsorise"], answer: 2, why: "Vous avez déjà une image de marque, que vous l'ayez planifiée ou non." },
            { objective: "O1", q: "L'IA propose une phrase d'image qui vous présente comme « le meilleur tireur de l'État », ce qui est faux. Que faites-vous ?", options: ["L'utiliser, elle sonne bien", "La changer pour des mots honnêtes sur vous", "La publier et voir qui le remarque", "Demander à l'IA de l'exagérer encore plus"], answer: 1, why: "Choisissez des mots honnêtes." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Photo de profil, nom et bio",
          minutes: 5,
          goal: "Écrire une bio claire et choisir une photo de profil qui correspondent à votre image.",
          text: [
            "Votre profil est votre porte d'entrée. En quelques secondes, les gens doivent savoir qui vous êtes, quel sport vous pratiquez et pourquoi vous suivre.",
            "Utilisez une photo claire et bien éclairée de votre visage ou de vous en action. Utilisez un nom que les gens peuvent trouver. Une bonne bio est courte : sport et poste, niveau ou équipe (si c'est autorisé), une valeur ou un centre d'intérêt, et un lien ou un appel à l'action, comme votre vidéo de meilleurs moments.",
            "Ne mettez pas dans votre bio votre adresse, votre numéro de téléphone, votre emploi du temps ni l'emplacement exact de votre établissement. Si vous êtes mineur, demandez à un parent ou tuteur avant d'indiquer votre école ou votre ville."
          ],
          steps: ["Choisissez une photo claire et bien éclairée.", "Utilisez un nom facile à trouver.", "Écrivez votre sport, votre poste et votre niveau.", "Ajoutez une valeur ou un centre d'intérêt.", "Ajoutez un lien ou un appel à l'action.", "Retirez les détails privés."],
          words: [["Bio", "la courte description en haut de votre profil."], ["Identifiant", "votre @nomdutilisateur sur une application sociale."]],
          slides: [
            { title: "Votre porte d'entrée", bullets: ["Qui êtes-vous ?", "Quel sport pratiquez-vous ?", "Pourquoi vous suivre ?"] },
            { title: "Une bonne bio", bullets: ["Sport, poste, niveau", "Une valeur ou un centre d'intérêt", "Un lien : meilleurs moments ou contact"] },
            { title: "À ne pas mettre dans votre bio", bullets: ["Adresse ou téléphone", "Emploi du temps", "Mineurs : demandez à un parent pour l'école ou la ville"] }
          ],
          tryIt: "Demandez à un assistant IA cinq propositions de bio à partir de votre phrase d'image de marque, sous la limite de caractères de la plateforme. Choisissez-en une, modifiez-la et mettez à jour votre profil.",
          youCanNow: "écrire une bio claire et choisir une photo de profil qui correspondent à votre image.",
          quickCheck: [
            { objective: "O2", q: "Que doivent apprendre les gens de votre profil en quelques secondes ?", options: ["Qui vous êtes, quel sport vous pratiquez et pourquoi vous suivre", "Votre adresse", "Votre emploi du temps de cours", "Toutes les équipes où vous avez joué"], answer: 0, why: "Votre profil est votre porte d'entrée et doit rendre ces trois choses claires." },
            { objective: "O2", q: "Vous avez 15 ans et voulez ajouter votre ville et votre école à votre bio. Que faites-vous ?", options: ["Les ajouter tout de suite", "Ajouter aussi votre adresse", "Ajouter plutôt votre numéro de téléphone", "Demander d'abord à un parent ou à un tuteur"], answer: 3, why: "Les mineurs doivent demander à un parent ou à un tuteur avant d'indiquer leur école ou leur ville." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Choisir vos thèmes de contenu",
          minutes: 5,
          goal: "Choisir trois thèmes de contenu et deux idées de publication pour chacun.",
          text: [
            "Les thèmes de contenu sont les trois ou quatre grands sujets sur lesquels vous publiez. Ils gardent votre fil cohérent, pour que les gens sachent à quoi s'attendre.",
            "Pour un sportif, les thèmes peuvent être : Entraînement (séances, extraits d'entraînement), Jour de match (meilleurs moments, moments d'équipe), En dehors du terrain (école, foi, famille, loisirs, bénévolat) et Leçons (ce que vous apprenez). Choisissez ceux qui correspondent à votre phrase d'image de marque.",
            "Un assistant IA est doué pour trouver des idées de publications pour chaque thème. Demandez-en dix, puis gardez celles que vous publieriez vraiment."
          ],
          steps: ["Relisez votre phrase d'image de marque.", "Choisissez trois thèmes qui lui correspondent.", "Demandez à l'IA dix idées par thème.", "Gardez-en deux par thème que vous publierez vraiment."],
          words: [["Thème de contenu", "l'un des quelques grands sujets sur lesquels vous publiez régulièrement."], ["Fil", "la suite de publications sur votre profil."]],
          slides: [
            { title: "Thèmes de contenu", bullets: ["3 ou 4 grands sujets", "Un fil cohérent"] },
            { title: "Thèmes de sportif", bullets: ["Entraînement", "Jour de match", "En dehors du terrain", "Leçons"] },
            { title: "L'IA pour trouver des idées", bullets: ["Demandez dix idées par thème", "Gardez celles que vous publieriez vraiment"] }
          ],
          tryIt: "Écrivez vos trois thèmes de contenu. Utilisez un assistant IA pour trouver des idées et gardez deux vraies idées de publication par thème.",
          youCanNow: "choisir des thèmes de contenu qui correspondent à votre image et prévoir des publications pour chacun.",
          quickCheck: [
            { objective: "O3", q: "Pourquoi utiliser des thèmes de contenu ?", options: ["Pour publier le plus souvent possible", "Pour garder votre fil centré, afin que les gens sachent à quoi s'attendre", "Pour cacher vos publications", "Pour recevoir des produits gratuits"], answer: 1, why: "Les thèmes gardent votre fil centré sur quelques sujets principaux." },
            { objective: "O3", q: "Votre phrase d'image parle de foi et d'engagement dans la communauté. Quel thème convient le mieux ?", options: ["Les provocations envers les rivaux", "Des mèmes au hasard", "En dehors du terrain : foi et engagement dans la communauté", "Les meilleurs moments des autres équipes"], answer: 2, why: "Choisissez des thèmes qui correspondent à votre phrase d'image de marque." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Définir votre image",
        questions: [
          { objective: "O1", q: "Qu'est-ce que votre image de marque de sportif ?", options: ["Votre numéro de maillot", "Votre sponsor de chaussures", "L'idée que les gens ont en tête quand ils entendent votre nom", "Votre nombre d'abonnés"], answer: 2, why: "Votre image, c'est la façon dont les gens vous voient." },
          { objective: "O1", q: "Laquelle est une phrase d'image de marque ?", options: ["« Je suis une meneuse travailleuse qui adore entraîner les enfants et veut devenir infirmière. »", "« Suivez-moi »", "« Le meilleur de tous les temps »", "« Pas de commentaire »"], answer: 0, why: "Elle nomme votre sport, vos valeurs et quelque chose de vrai sur vous." },
          { objective: "O2", q: "Que mettre dans une bonne bio ?", options: ["Votre adresse", "Votre emploi du temps", "Votre numéro de téléphone", "Sport, poste et un lien vers vos meilleurs moments"], answer: 3, why: "Une bio montre qui vous êtes sans détails privés." },
          { objective: "O3", q: "Que sont les thèmes de contenu ?", options: ["Les colonnes d'un stade", "Les 3 ou 4 grands sujets sur lesquels vous publiez", "Des hashtags", "Des abonnés"], answer: 1, why: "Les thèmes gardent votre fil cohérent." },
          { objective: "O3", q: "L'IA vous donne dix idées de publication. Que faites-vous ?", options: ["Je publie les dix aujourd'hui", "Je garde celles que je publierais vraiment", "Je les ignore toutes", "Je copie les publications d'un autre sportif"], answer: 1, why: "Ne publiez que ce qui vous correspond et correspond à votre image." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Protéger votre image",
      lessons: [
        {
          objectives: ["O4"],
          title: "Faire le tri dans vos anciennes publications",
          minutes: 5,
          goal: "Passer en revue vos anciennes publications et corriger ce qui nuit à votre image.",
          text: [
            "Les entraîneurs, les responsables des admissions, les marques et les employeurs remontent souvent loin dans les anciennes publications. Une vieille blague, un commentaire méchant ou une vidéo repartagée peut coûter une opportunité.",
            "Faites un tri : parcourez vos 30 dernières publications, commentaires, repartages et photos où vous êtes identifié. Pour chacun, demandez-vous : est-ce que ça me dérangerait qu'un entraîneur, un sponsor ou ma grand-mère le voie ? Est-ce que ça correspond à mon image ? Sinon, archivez, masquez ou supprimez, et retirez votre identification quand c'est possible.",
            "Souvenez-vous que les captures d'écran durent pour toujours. La meilleure protection est de publier avec soin à partir de maintenant : réfléchissez avant de publier, surtout quand vous êtes en colère après une défaite."
          ],
          steps: ["Parcourez vos 30 dernières publications, commentaires, repartages et identifications.", "Faites le test de l'entraîneur, du sponsor et de la grand-mère.", "Archivez, masquez ou supprimez ce qui échoue.", "Retirez votre identification si besoin.", "Fixez-vous une règle : pas de publication sous le coup de la colère."],
          words: [["Tri (audit)", "une vérification attentive de tout, pour trouver et corriger les problèmes."], ["Archiver", "cacher une publication de votre profil sans la supprimer."]],
          slides: [
            { title: "Les gens remontent loin", bullets: ["Entraîneurs, admissions, marques, employeurs", "Une vieille publication peut coûter une chance"] },
            { title: "Le tri", bullets: ["30 dernières publications, commentaires, repartages, identifications", "Test de l'entraîneur, du sponsor et de la grand-mère", "Archiver, masquer, supprimer ou retirer l'identification"] },
            { title: "À partir de maintenant", bullets: ["Les captures d'écran durent pour toujours", "Pas de publication sous le coup de la colère"] }
          ],
          tryIt: "Faites le tri dans vos 30 dernières publications et photos où vous êtes identifié. Notez combien vous en avez gardé, archivé et supprimé.",
          youCanNow: "faire le tri dans vos réseaux sociaux et retirer les publications qui nuisent à votre image.",
          quickCheck: [
            { objective: "O4", q: "Que doit inclure votre tri en plus de vos propres publications ?", options: ["Les commentaires, les repartages et les photos où vous êtes identifié", "Seulement votre photo de profil", "Les comptes de vos coéquipiers", "Vos messages privés à votre famille"], answer: 0, why: "Le tri couvre les publications, les commentaires, les repartages et les identifications." },
            { objective: "O4", q: "Un ancien repartage d'une vidéo méchante ne passe pas le test de la grand-mère. Que faites-vous ?", options: ["Le laisser, il est ancien", "Le repartager encore", "L'archiver, le masquer ou le supprimer", "Le commenter pour vous expliquer"], answer: 2, why: "Archivez, masquez ou supprimez ce qui ne passe pas le test." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Réglages de confidentialité et de sécurité",
          minutes: 5,
          goal: "Régler vos comptes pour contrôler qui vous voit et qui vous contacte.",
          text: [
            "Être public aide à se faire voir, mais cela permet aussi à des inconnus de vous trouver. Beaucoup de sportifs gardent un compte public de sportif et un compte personnel privé.",
            "Vérifiez les réglages de chaque application : qui peut vous écrire, qui peut commenter, qui peut vous identifier, si votre position est ajoutée aux publications, et la vérification en deux étapes pour protéger votre connexion. Les menus de réglages changent : cherchez confidentialité, sécurité et messages dans les réglages de l'application.",
            "Ne publiez jamais votre position en direct, vos déplacements en temps réel, votre domicile ni votre routine quotidienne. Méfiez-vous des messages privés d'inconnus, y compris de faux recruteurs et de fausses marques. Si quelqu'un vous menace ou vous demande des photos intimes, ne répondez pas ; gardez des preuves, bloquez, signalez et parlez-en à un adulte de confiance ou à votre entraîneur."
          ],
          steps: ["Décidez : un compte public de sportif et un compte personnel privé ?", "Limitez qui peut vous écrire, commenter et vous identifier.", "Désactivez la position sur les publications.", "Activez la vérification en deux étapes.", "Sachez comment bloquer et signaler."],
          words: [["Vérification en deux étapes", "un deuxième contrôle, comme un code, à la connexion, pour que personne ne puisse entrer avec seulement votre mot de passe."], ["Message privé (DM)", "un message privé envoyé sur une application sociale."]],
          slides: [
            { title: "Public ou privé", bullets: ["Compte public de sportif pour être vu", "Compte personnel privé pour les amis"] },
            { title: "Vérifiez ces réglages", bullets: ["Qui peut écrire, commenter, identifier", "Position sur les publications : désactivée", "Vérification en deux étapes : activée"] },
            { title: "Restez en sécurité", bullets: ["Ni position en direct ni routine", "Prudence avec les messages d'inconnus", "Menaces : preuves, bloquer, signaler, parler à un adulte"] }
          ],
          tryIt: "Ouvrez les réglages d'un compte. Limitez qui peut vous écrire et vous identifier, désactivez la position sur les publications et activez la vérification en deux étapes.",
          youCanNow: "régler vos comptes pour contrôler qui vous voit et qui vous contacte.",
          quickCheck: [
            { objective: "O5", q: "Que protège la vérification en deux étapes ?", options: ["Votre nombre d'abonnés", "Votre connexion", "La qualité de vos photos", "Votre position"], answer: 1, why: "La vérification en deux étapes ajoute un deuxième contrôle pour protéger votre connexion." },
            { objective: "O5", q: "Un inconnu qui se dit recruteur vous écrit sans cesse et demande des photos privées. Que faites-vous ?", options: ["Répondre poliment", "Envoyer une photo pour qu'il soit content", "Lui demander d'abord une preuve", "Ne pas répondre ; garder des preuves, bloquer, signaler et prévenir un adulte de confiance"], answer: 3, why: "Ne répondez jamais aux menaces ni aux demandes de photos privées ; gardez des preuves et demandez de l'aide." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rester fidèle à votre image : règles, marques et jugement",
          minutes: 5,
          goal: "Écrire vos règles personnelles de publication, y compris pour les publications sponsorisées.",
          text: [
            "Votre équipe, votre établissement ou votre ligue peut avoir des règles sur les réseaux sociaux, surtout sur les nouvelles de l'équipe, les blessures, le recrutement et les rivaux. Demandez-les à votre entraîneur et respectez-les.",
            "Quand votre image grandit, des marques peuvent vous offrir des produits ou de l'argent pour publier. Aux États-Unis, la FTC (l'agence qui fait respecter le droit de la publicité) dit que vous devez indiquer clairement, directement dans la publication, tout contrat payé ou produit offert. Les sportifs universitaires peuvent aussi avoir des règles de déclaration NIL, et les règles au lycée varient selon les États. Demandez à votre service de conformité ou à votre fédération avant d'accepter. Ailleurs, des règles semblables existent souvent : renseignez-vous.",
            "Écrivez une courte liste de vos propres règles de publication : ce que vous publiez, ce que vous ne publiez jamais, et comment vous gérez les commentaires négatifs (ne pas discuter ; masquer, cacher ou bloquer)."
          ],
          steps: ["Demandez à votre entraîneur les règles de l'équipe sur les réseaux sociaux.", "Écrivez trois règles « Je publie toujours ».", "Écrivez trois règles « Je ne publie jamais ».", "Écrivez comment vous gérez les commentaires négatifs.", "Ajoutez : « J'indique tout contrat avec une marque et je vérifie d'abord les règles NIL. »"],
          words: [["NIL", "name, image and likeness (nom, image et notoriété) : un sportif qui gagne de l'argent grâce à son nom, sa photo ou son image personnelle."], ["Mention", "une phrase claire dans la publication qui dit que vous avez été payé ou que l'on vous a donné quelque chose."]],
          slides: [
            { title: "Connaissez les règles", bullets: ["Règles de l'équipe et de l'établissement", "Blessures, recrutement, rivaux"] },
            { title: "Contrats avec des marques", bullets: ["Indiquez dans la publication les contrats payés et produits offerts", "Vérifiez les règles NIL avec la conformité ou votre fédération"] },
            { title: "Vos règles de publication", bullets: ["Trois « Je publie toujours »", "Trois « Je ne publie jamais »", "Commentaires négatifs : ne discutez pas ; masquez, cachez ou bloquez"] }
          ],
          sources: [
            { name: "FTC : Disclosures 101 for Social Media Influencers (mentions pour les influenceurs, en anglais)", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
            { name: "NCAA : Name, Image and Likeness (en anglais)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Tâche finale : écrivez vos règles de publication, puis terminez le travail d'image d'un profil : phrase d'image de marque, bio et photo, trois thèmes avec deux idées chacun, tri des 30 dernières publications et réglages sûrs.",
          youCanNow: "garder votre image sur la bonne voie avec des règles de publication claires et une gestion honnête des contrats avec des marques.",
          quickCheck: [
            { objective: "O6", q: "Que dit la FTC sur un produit gratuit dont vous parlez dans une publication ?", options: ["Le mentionner clairement dans la publication elle-même", "Mentionner seulement les accords en argent", "Le mettre une fois dans votre bio", "Aucune mention n'est nécessaire pour les élèves et étudiants"], answer: 0, why: "Tout accord payé ou produit gratuit doit être clairement mentionné dans la publication." },
            { objective: "O6", q: "Quelqu'un publie un commentaire grossier après une défaite de votre équipe. Que dit votre règle ?", options: ["Discuter jusqu'à ce qu'il arrête", "Publier une réponse en colère", "Supprimer votre compte", "Ne pas discuter ; mettre en sourdine, masquer ou bloquer"], answer: 3, why: "Vos règles de publication disent comment gérer les commentaires négatifs sans discuter." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Protéger votre image",
        questions: [
          { objective: "O4", q: "Quel est le test du tri pour une ancienne publication ?", options: ["A-t-elle eu 100 j'aime ?", "Est-elle drôle ?", "Est-elle ancienne ?", "Un entraîneur, un sponsor ou un grand-parent serait-il à l'aise en la voyant ?"], answer: 3, why: "Si elle échoue à ce test, elle peut nuire à votre image." },
          { objective: "O5", q: "Quel réglage protège votre connexion ?", options: ["La vérification en deux étapes", "Une jolie police", "Plus de hashtags", "Une position publique"], answer: 0, why: "La vérification en deux étapes bloque ceux qui n'ont que votre mot de passe." },
          { objective: "O5", q: "Que ne faut-il jamais publier ?", options: ["Un extrait d'entraînement", "Un merci à votre entraîneur", "Votre position en direct", "Une photo de bénévolat"], answer: 2, why: "Votre position en direct peut vous mettre en danger." },
          { objective: "O5", q: "Quelqu'un vous menace par message privé. Que faites-vous ?", options: ["Je réponds sur le même ton", "J'envoie ce qu'il demande", "Je l'ignore et n'en parle à personne", "Je garde des preuves, je bloque, je signale et j'en parle à un adulte de confiance"], answer: 3, why: "Protégez-vous et demandez de l'aide." },
          { objective: "O6", q: "Une marque vous envoie un casque audio gratuit pour que vous en parliez. Que devez-vous faire ?", options: ["Rien", "Indiquer clairement le produit offert dans la publication et vérifier les règles NIL", "Cacher le nom de la marque", "Supprimer la publication plus tard"], answer: 1, why: "La FTC exige une mention claire, et les règles NIL peuvent s'appliquer." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Image de marque sur les réseaux sociaux pour les sportifs",
    questions: [
      { objective: "O1", q: "Qui construit votre image de marque ?", options: ["Seulement vous", "Seulement votre entraîneur", "Les gens qui voient vos publications, commentaires et actes", "Personne"], answer: 2, why: "Votre image vit dans l'esprit des autres." },
      { objective: "O1", q: "Une image de marque, c'est votre sport plus :", options: ["Vos valeurs et ce qui fait que vous êtes vous", "Votre mot de passe", "Votre rival", "Votre pointure"], answer: 0, why: "Les valeurs et la personnalité vous démarquent." },
      { objective: "O1", q: "Une phrase d'image de marque doit être :", options: ["Honnête", "Inventée", "Copiée", "Très longue"], answer: 0, why: "Une image ne marche que si elle est vraie." },
      { objective: "O2", q: "Votre profil est comme :", options: ["Votre casier", "Un secret", "Votre porte d'entrée", "Un tableau d'affichage"], answer: 2, why: "C'est la première chose que les gens voient." },
      { objective: "O2", q: "Une bonne photo de profil est :", options: ["Floue", "Claire et bien éclairée", "Un mème au hasard", "Quelqu'un d'autre"], answer: 1, why: "Les gens doivent vous reconnaître." },
      { objective: "O2", q: "Qu'est-ce qui n'est PAS bon dans une bio ?", options: ["Votre sport", "Votre poste", "Un lien vers vos meilleurs moments", "Votre numéro de téléphone"], answer: 3, why: "Les numéros de téléphone sont privés." },
      { objective: "O2", q: "Si vous êtes mineur, avant d'indiquer votre école ou votre ville, vous devez :", options: ["La publier quand même", "Demander à un inconnu", "Demander à un parent ou tuteur", "Ajouter aussi votre adresse"], answer: 2, why: "Les parents vous aident à décider ce qu'on peut partager sans risque." },
      { objective: "O3", q: "Combien de thèmes de contenu avoir ?", options: ["20", "Aucun", "1 publication", "3 ou 4"], answer: 3, why: "Quelques thèmes gardent votre fil cohérent." },
      { objective: "O3", q: "Laquelle est une publication du thème « En dehors du terrain » ?", options: ["Être bénévole dans un stage pour les jeunes", "Un meilleur moment de match", "Un extrait de séance", "Un visuel de statistiques"], answer: 0, why: "Elle montre qui vous êtes au-delà du sport." },
      { objective: "O3", q: "Comment utiliser l'IA pour les idées de publication ?", options: ["Publier tout ce qu'elle dit", "Trouver beaucoup d'idées et garder celles qui vous correspondent", "Ne jamais l'utiliser", "La laisser gérer votre compte"], answer: 1, why: "C'est vous qui choisissez ce qui correspond à votre image." },
      { objective: "O4", q: "Combien de publications récentes votre tri doit-il couvrir au minimum ?", options: ["1", "0", "30", "Seulement celles d'aujourd'hui"], answer: 2, why: "Remontez assez loin pour voir ce que voient les autres." },
      { objective: "O4", q: "Archiver une publication veut dire :", options: ["La cacher de votre profil sans la supprimer", "La republier", "La rendre publique", "La vendre"], answer: 0, why: "Archiver cache sans supprimer." },
      { objective: "O4", q: "Après une défaite difficile, une bonne règle est :", options: ["Publier tout de suite", "Critiquer l'arbitre en ligne", "Accuser ses coéquipiers", "Pas de publication sous le coup de la colère"], answer: 3, why: "Les publications sous la colère nuisent souvent à votre image." },
      { objective: "O5", q: "Beaucoup de sportifs gardent :", options: ["Dix comptes publics", "Un compte public de sportif et un compte personnel privé", "Aucune confidentialité", "Leur mot de passe dans leur bio"], answer: 1, why: "Cela sépare le fait d'être vu de la vie personnelle." },
      { objective: "O5", q: "Désactiver la position sur les publications vous aide à :", options: ["Avoir plus de j'aime", "Rester en sécurité", "Publier plus vite", "Paraître plus âgé"], answer: 1, why: "Les inconnus ne peuvent pas savoir où vous êtes." },
      { objective: "O5", q: "Un inconnu vous écrit comme recruteur et demande de l'argent. C'est :", options: ["Normal", "Obligatoire", "Une bourse", "Un signal d'alerte"], answer: 3, why: "Les faux recruteurs demandent de l'argent." },
      { objective: "O6", q: "Où trouver les règles de votre équipe sur les réseaux sociaux ?", options: ["Auprès de votre entraîneur", "En devinant", "Auprès d'un rival", "Dans une publicité"], answer: 0, why: "Les équipes et les établissements fixent leurs propres règles." },
      { objective: "O6", q: "Que veut dire NIL ?", options: ["National Interest League", "No Internet Limits", "Name, image and likeness (nom, image et notoriété)", "New Influencer Level"], answer: 2, why: "Le NIL, c'est gagner de l'argent grâce à son nom, son image et sa notoriété." },
      { objective: "O6", q: "Un sportif de lycée reçoit une proposition de contrat NIL. Il doit d'abord :", options: ["Signer tout de suite", "Le cacher", "Demander à un fan", "Vérifier les règles de sa fédération d'État et de son établissement"], answer: 3, why: "Les règles NIL au lycée varient selon les États." },
      { objective: "O6", q: "Comment gérer les commentaires négatifs ?", options: ["Répondre en majuscules", "Ne pas discuter ; masquer, cacher ou bloquer", "Publier leur adresse", "Quitter les réseaux pour toujours"], answer: 1, why: "Discuter répand le négatif et nuit à votre image." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      5,
      7,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Phrase d'image de marque",
        objective: "O1",
        notYet: "Absente, vague ou pas honnête.",
        meets: "Une phrase honnête avec le sport et le poste, une valeur et un centre d'intérêt en dehors du sport.",
        exceeds: "La bio, la photo et les thèmes correspondent tous clairement à la phrase."
      },
      {
        name: "Bio et photo",
        objective: "O2",
        notYet: "Pas de lien ni d'appel à l'action, une photo pas nette, ou des détails privés visibles.",
        meets: "Une bio courte avec le sport, le poste, une valeur et un lien, une photo nette, et aucun détail privé.",
        exceeds: "Le lien mène à une vidéo des meilleurs moments ou à un profil de recrutement à jour."
      },
      {
        name: "Thèmes de contenu",
        objective: "O3",
        notYet: "Moins de trois thèmes, ou des idées qui ne correspondent pas à l'image.",
        meets: "Trois thèmes avec deux idées de publication chacun, en accord avec la phrase d'image de marque.",
        exceeds: "Les idées sont programmées sur les deux semaines suivantes."
      },
      {
        name: "Tri des publications",
        objective: "O4",
        notYet: "Moins de 30 publications vérifiées, ou des publications qui ne passent pas le test restent visibles.",
        meets: "Les 30 dernières publications, commentaires, repartages et identifications vérifiés, avec ce qui échoue archivé, masqué, supprimé ou désidentifié.",
        exceeds: "Le tri remonte plus loin et une règle « pas de publication sous le coup de la colère » est écrite."
      },
      {
        name: "Confidentialité et sécurité",
        objective: "O5",
        notYet: "La position est encore active sur les publications, les messages sont ouverts à tous, ou pas de vérification en deux étapes.",
        meets: "Messages, commentaires et identifications limités, position désactivée et vérification en deux étapes activée.",
        exceeds: "Un compte personnel privé séparé est créé et le sportif sait montrer comment bloquer et signaler."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent la tâche finale avec « Atteint » ou « Dépasse » sur chaque ligne de la grille",
      "Les apprenants qui disent avoir supprimé ou masqué des publications qui auraient pu leur coûter une occasion",
      "Les apprenants qui disent avoir été contactés par un entraîneur, un recruteur, une marque ou un employeur grâce à leur profil remis en ordre (questionnaire de suivi)",
      "Les apprenants qui disent avoir bloqué et signalé un faux recruteur, une arnaque ou une menace au lieu de répondre"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone avec l'application de réseau social du sportif",
      "Un assistant IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini), facultatif",
      "Les règles de votre équipe sur les réseaux sociaux, données par votre entraîneur",
      "Du papier ou une note sur le téléphone pour votre phrase d'image et vos règles",
      "Environ 60 minutes"
    ],
    facilitatorNotes: [
      "Ne demandez jamais aux sportifs de montrer leurs messages privés ou leurs comptes privés au groupe ; laissez-les faire leur tri seuls.",
      "Pour les sportifs de moins de 18 ans, impliquez les parents ou tuteurs dans les décisions sur les profils publics et l'affichage de l'école ou de la ville.",
      "Partagez les règles de l'équipe sur les réseaux sociaux et dites qui prévenir en cas de menace, de faux recruteur ou de demande de photos privées.",
      "Parcourez ensemble les réglages de confidentialité des applications que le groupe utilise, car les menus changent selon les applications et les mises à jour.",
      "Invitez le service de conformité ou le contact de l'association sportive de l'État à expliquer les règles NIL avant que quiconque accepte un accord."
    ]
  }
};
