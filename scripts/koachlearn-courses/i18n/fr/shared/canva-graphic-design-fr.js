"use strict";

// Koach Learn course (French translation of shared/canva-graphic-design.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "canva-graphic-design-fr",
  lang: "fr",
  translationOf: "canva-graphic-design",
  category: "Workforce Development",
  name: "Graphisme avec Canva",
  skills: "Rédiger un brief de création, Appliquer les règles de mise en page, Choisir les couleurs et les polices, Créer des visuels dans Canva, Vérifier les droits et la lisibilité, Exporter une pièce de portfolio",
  outcome: "rédiger un court brief de création, puis réaliser dans la version gratuite de Canva une affiche claire et lisible et une publication assortie pour les réseaux sociaux, vérifier les droits et la lisibilité, et les enregistrer comme pièce de portfolio à montrer à un employeur ou à un client.",
  about: [
    "Ce cours s'adresse aux jeunes qui cherchent un premier emploi créatif, aux adultes qui veulent ajouter une compétence à leur CV, aux petits commerçants et entrepreneurs qui font eux-mêmes leur publicité, et au personnel et aux bénévoles d'associations qui préparent des affiches pour des événements et des donateurs.",
    "Vous apprendrez ce que font les graphistes, les règles de base qui rendent un visuel facile à lire, comment choisir les couleurs et les polices, comment créer un visuel dans la version gratuite de Canva, comment vous assurer que vous avez le droit d'utiliser chaque image, et comment exporter votre travail et l'ajouter à un portfolio.",
    "Canva est un outil de graphisme gratuit en ligne. Il fonctionne dans un navigateur web ou comme application sur téléphone. Vous n'avez rien à acheter. Chaque leçon dure environ cinq minutes et se termine par une tâche \"Essayez maintenant\". Il y a un mini-contrôle après chaque leçon, un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin.",
    "Ce cours enseigne les bases et vous aide à créer une première pièce de portfolio. Il ne donne ni certificat ni diplôme. Si vous voulez plus tard une qualification officielle, les leçons vous disent où chercher."
  ],
  finalTask: "Pour un client réel ou fictif (un commerce du quartier, un événement associatif, une équipe sportive, une église ou votre propre petite activité), rédigez un brief de création en un paragraphe. Ensuite, réalisez dans la version gratuite de Canva une affiche au format lettre US (ou A4) et une publication carrée assortie pour les réseaux sociaux, avec les mêmes couleurs et les mêmes polices. Vérifiez les deux avec la liste de contrôle (hiérarchie, contraste, orthographe, droits sur chaque image), exportez l'affiche en PDF et la publication en PNG, et écrivez une description de portfolio de 3 à 4 phrases sur l'objectif, vos choix et le résultat.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des apprenants variés, aux États-Unis et ailleurs : des jeunes qui cherchent un premier emploi ou un revenu créatif d'appoint, des adultes en reconversion, des petits commerçants et entrepreneurs, et le personnel et les bénévoles d'associations qui font eux-mêmes leurs affiches et leurs publications.",
    startingPoint: "Ils savent utiliser un téléphone ou un ordinateur et les réseaux sociaux. La plupart n'ont jamais appris les règles du graphisme ; beaucoup ont déjà essayé Canva ou un outil semblable en copiant un modèle, sans savoir pourquoi il fonctionne.",
    gap: "Les employeurs, les clients et les organisations veulent vite des visuels clairs et fidèles à leur image. Les apprenants doivent préparer un visuel à partir d'un brief, appliquer les règles de base de mise en page, de couleur et de typographie, éviter les problèmes de droits d'auteur et présenter leur travail fini dans un portfolio. Une pièce de portfolio est souvent ce qui permet de décrocher une première mission ou un premier emploi en graphisme.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes",
      "Coût : uniquement la version gratuite de Canva ; aucun élément payant ni abonnement nécessaire",
      "Appareils : un ordinateur est le plus simple ; un téléphone suffit pour la plupart des tâches",
      "Temps : leçons de 4 à 6 minutes ; la tâche finale prend environ 60 à 90 minutes",
      "Droits : seulement des images qui appartiennent à l'apprenant ou dont il a la licence ; aucun logo ni photo copié d'autres entreprises"
    ],
    prerequisites: "Savoir utiliser un ordinateur ou un téléphone, et avoir une adresse e-mail pour créer un compte Canva gratuit. Les débutants en informatique peuvent d'abord suivre \"Les bases de l'ordinateur\"."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "À partir d'une demande de visuel d'un client, d'un employeur ou de votre propre projet", action: "rédiger un brief de création qui précise le public, le message principal, le format et la taille", standard: "avec les quatre éléments dans un court paragraphe" },
    { id: "O2", condition: "À partir d'un projet de visuel", action: "disposer le texte et les images en utilisant la hiérarchie, l'alignement, le contraste, la répétition et l'espace blanc", standard: "pour qu'on comprenne le message principal en 3 secondes" },
    { id: "O3", condition: "Avec la version gratuite de Canva", action: "créer un visuel à la bonne taille à partir d'un modèle ou d'une page vierge, en changeant le texte, les couleurs, les polices et les images", standard: "avec au plus 2 polices et 3 couleurs principales, et aucun élément payant" },
    { id: "O4", condition: "Avant de partager ou d'imprimer un visuel", action: "vérifier que le contraste est lisible, que l'orthographe et les informations sont justes et que vous avez le droit d'utiliser chaque image", standard: "en corrigeant chaque problème trouvé" },
    { id: "O5", condition: "Quand un visuel est terminé", action: "exporter le visuel dans le bon type de fichier et l'ajouter à un portfolio avec une courte description", standard: "PDF pour l'impression et PNG ou JPG pour les écrans, avec un nom de fichier clair" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Les bases du graphisme",
      lessons: [
        {
          title: "Ce que font les graphistes, et le brief de création",
          objectives: ["O1"],
          minutes: 5,
          goal: "Rédiger un brief de création qui précise le public, le message, le format et la taille.",
          text: [
            "Les graphistes utilisent des images, des mots, des couleurs et la mise en page pour faire passer un message. Ils créent des affiches, des publications pour les réseaux sociaux, des menus, des panneaux, des logos, des diapositives et des rapports. Le Bureau of Labor Statistics (l'office des statistiques du travail des États-Unis) indique que les employeurs regardent de près le portfolio : un recueil de vos meilleurs travaux.",
            "Le travail de graphiste prend plusieurs formes : un poste interne dans une entreprise ou une association, un poste d'assistant réseaux sociaux ou marketing, une imprimerie, ou des missions en indépendant pour des commerces locaux. Beaucoup de postes demandent un diplôme ou une formation technique, mais un bon portfolio aide à tous les niveaux. Des certifications de logiciels, comme Adobe Certified Professional (examens organisés par Certiport), peuvent plus tard faire la différence. Ce cours vous prépare à créer une première pièce de portfolio ; il ne donne pas de certificat.",
            "Tout bon visuel commence par un brief : un court plan qui répond à quatre questions. Pour qui est-ce (le public) ? Quel est le message principal, un seul ? Quel est le format (affiche, publication, poster, menu) ? Quelle est la taille ? Si vous ne pouvez pas répondre, posez la question au client avant de commencer."
          ],
          steps: ["Demandez pour qui est le visuel.", "Demandez le message principal et les détails indispensables (date, lieu, prix, contact).", "Demandez le format et où le visuel sera utilisé.", "Notez la taille, par exemple format lettre ou A4 pour une affiche, ou carré pour une publication.", "Relisez le brief au client et obtenez son accord avant de commencer."],
          words: [["Graphisme", "utiliser des mots, des images, des couleurs et la mise en page pour transmettre un message."], ["Brief de création", "un court plan écrit pour un visuel : public, message, format et taille."], ["Portfolio", "un recueil de vos meilleurs travaux que vous montrez aux employeurs ou aux clients."], ["Indépendant (freelance)", "travailler à son compte et faire des missions payées pour différents clients."]],
          slides: [
            { title: "Ce que créent les graphistes", bullets: ["Affiches, publications, menus, panneaux", "Logos, diapositives et rapports", "Les employeurs regardent de près votre portfolio"] },
            { title: "Où trouver du travail en graphisme", bullets: ["En interne dans une entreprise ou une association", "Assistant réseaux sociaux ou marketing", "Imprimeries et missions en indépendant"] },
            { title: "Le brief de création : 4 éléments", bullets: ["Public : pour qui ?", "Message : quelle est l'idée principale ?", "Format : affiche, publication, poster ?", "Taille : lettre, A4, carré ?"] },
            { title: "Avant de créer", bullets: ["Obtenez les détails indispensables", "Relisez le brief au client", "Obtenez son accord, puis commencez"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics : Graphic Designers (en anglais)", url: "https://www.bls.gov/ooh/arts-and-design/graphic-designers.htm" },
            { name: "Certiport : Adobe Certified Professional", url: "https://certiport.pearsonvue.com/Certifications/Adobe/ACP/Overview" }
          ],
          tryIt: "Choisissez un client réel ou fictif, par exemple une station de lavage qui collecte des fonds, un salon de coiffure ou votre propre petite activité. Rédigez un brief en un paragraphe qui précise le public, le message principal, le format et la taille. Gardez-le pour la tâche finale.",
          youCanNow: "dire ce que créent les graphistes et rédiger un brief de création en quatre éléments.",
          quickCheck: [
            { objective: "O1", q: "Lequel de ces éléments fait partie d'un brief de création ?", options: ["Le public, le message principal, le format et la taille", "Seulement votre couleur préférée", "Le prix des logiciels de graphisme", "La liste de toutes les polices que vous connaissez"], answer: 0, why: "Un brief dit pour qui c'est, ce que ça dit, ce que c'est et quelle taille ça fait." },
            { objective: "O1", q: "Un client dit : \"Faites-moi une affiche.\" Que faites-vous d'abord ?", options: ["Vous commencez à créer tout de suite", "Vous copiez l'affiche d'une autre entreprise", "Vous posez des questions sur le public, le message et la taille, et vous rédigez un brief", "Vous choisissez cinq polices"], answer: 2, why: "Poser des questions et rédiger un brief évite le travail perdu et les refontes." }
          ]
        },
        {
          title: "Les règles de mise en page qui rendent un visuel facile à lire",
          objectives: ["O2"],
          minutes: 5,
          goal: "Disposer un visuel pour que le message principal se voie en premier.",
          text: [
            "Les gens regardent une affiche ou une publication quelques secondes seulement. Cinq règles simples les aident à comprendre vite le message.",
            "Hiérarchie : rendez l'élément le plus important le plus grand ou le plus gras, puis le suivant, puis les détails. Alignement : alignez les éléments sur le même bord ou le même axe central pour que le visuel soit net. Contraste : faites ressortir les éléments importants, par exemple un texte foncé sur un fond clair, ou un grand titre à côté de petits détails.",
            "Répétition : réutilisez les mêmes couleurs, polices et formes pour que le visuel forme un tout. Espace blanc : laissez de l'espace vide autour des éléments. L'espace vide n'est pas perdu ; il repose l'œil et fait ressortir le message principal.",
            "Un test rapide : montrez votre visuel à quelqu'un pendant 3 secondes, puis cachez-le. Demandez-lui de quoi il parlait. S'il ne peut pas dire le message principal, agrandissez le titre et enlevez les mots en trop."
          ],
          steps: ["Choisissez le message principal et faites-en le texte le plus grand.", "Mettez les détails (date, lieu, contact) en plus petit.", "Alignez les textes et les images sur les mêmes bords.", "Réutilisez les mêmes couleurs et polices.", "Enlevez tout ce qui n'aide pas le message.", "Faites le test des 3 secondes avec une autre personne."],
          words: [["Hiérarchie", "montrer d'abord ce qui est le plus important en le rendant plus grand, plus gras ou plus haut sur la page."], ["Alignement", "placer les éléments sur le même bord ou le même axe central."], ["Contraste", "une différence nette, comme foncé sur clair ou grand à côté de petit."], ["Espace blanc", "l'espace vide autour et entre les éléments d'un visuel."]],
          slides: [
            { title: "Cinq règles de mise en page", bullets: ["Hiérarchie : le plus important = le plus grand", "Alignement : alignez les éléments", "Contraste : faites ressortir l'essentiel", "Répétition et espace blanc"] },
            { title: "L'espace blanc n'est pas perdu", bullets: ["Il repose l'œil", "Il fait ressortir le message principal", "Enlevez les mots et images en trop"] },
            { title: "Le test des 3 secondes", bullets: ["Montrez le visuel 3 secondes, puis cachez-le", "Demandez : de quoi parlait-il ?", "Si la personne ne sait pas, agrandissez le titre"] }
          ],
          tryIt: "Trouvez une affiche ou une publicité autour de vous (sur un mur, dans le courrier ou en ligne). Sur papier, écrivez les cinq règles et notez celles qu'elle respecte bien et celles qu'elle ne respecte pas. Ensuite, dessinez une meilleure mise en page pour votre propre brief : titre, image et détails dans des cases.",
          youCanNow: "utiliser la hiérarchie, l'alignement, le contraste, la répétition et l'espace blanc pour prévoir une mise en page, et la tester en 3 secondes.",
          quickCheck: [
            { objective: "O2", q: "Sur l'affiche d'un événement, quel texte doit en général être le plus grand ?", options: ["Le numéro de téléphone", "Les petits caractères", "L'adresse du site web", "Le message principal, comme le nom de l'événement"], answer: 3, why: "La hiérarchie met le message principal en premier pour qu'on le comprenne en quelques secondes." },
            { objective: "O2", q: "Votre visuel paraît trop chargé. Quelle correction suit les règles de mise en page ?", options: ["Ajouter plus d'images", "Enlever les mots en trop et laisser plus d'espace blanc", "Utiliser cinq polices différentes", "Mettre tout le texte à la même taille"], answer: 1, why: "L'espace blanc et moins de mots font ressortir le message principal." }
          ]
        },
        {
          title: "Choisir les couleurs et les polices",
          objectives: ["O2", "O4"],
          minutes: 5,
          goal: "Choisir une palette de couleurs simple et une paire de polices faciles à lire.",
          text: [
            "Restez simple : choisissez 2 ou 3 couleurs principales plus une couleur neutre comme le blanc, le noir ou le gris. Si le client a des couleurs de marque, utilisez-les. Utiliser les mêmes couleurs partout permet de reconnaître facilement une entreprise.",
            "N'utilisez pas plus de 2 polices : une pour les titres et une pour le texte. Une police grasse et simple convient aux titres. Une police sobre et facile à lire convient aux détails. Les polices manuscrites décoratives sont difficiles à lire en petit ; gardez-les pour un mot ou deux.",
            "Le texte doit bien ressortir sur son fond. Les règles d'accessibilité du web (WCAG, publiées par le W3C, l'organisme qui fixe les normes du web) demandent un rapport de contraste d'au moins 4,5 pour 1 pour le texte normal et de 3 pour 1 pour le grand texte. Un vérificateur de contraste gratuit, comme celui de WebAIM, vous donne ce rapport quand vous entrez les deux couleurs. Un texte gris clair sur du blanc, ou du rouge sur du vert, échoue souvent."
          ],
          steps: ["Notez 2 ou 3 couleurs principales et une couleur neutre.", "Choisissez une police pour les titres et une pour le texte.", "Vérifiez chaque couleur de texte par rapport à son fond dans un vérificateur de contraste.", "Changez toute paire en dessous de 4,5 pour 1 pour le texte normal."],
          words: [["Palette de couleurs", "le petit ensemble de couleurs utilisé dans un visuel."], ["Police", "un style de lettres, comme des lettres grasses ou un style écriture à la main."], ["Rapport de contraste", "un nombre qui montre la différence de luminosité entre deux couleurs ; plus il est élevé, plus c'est facile à lire."], ["Couleurs de marque", "les couleurs fixes qu'une entreprise ou un groupe utilise toujours pour qu'on le reconnaisse."]],
          slides: [
            { title: "La couleur", bullets: ["2 ou 3 couleurs principales plus une neutre", "Les couleurs de marque du client s'il en a", "Les mêmes couleurs sur chaque visuel"] },
            { title: "Les polices", bullets: ["Pas plus de 2 polices", "Police grasse et simple pour les titres", "Police sobre pour les détails ; manuscrite pour un mot ou deux"] },
            { title: "Un contraste lisible", bullets: ["Au moins 4,5 pour 1 pour le texte normal", "Au moins 3 pour 1 pour le grand texte", "Vérifiez avec un vérificateur de contraste gratuit"] }
          ],
          sources: [
            { name: "W3C : Understanding Contrast (Minimum) (en anglais)", url: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" },
            { name: "Vérificateur de contraste WebAIM (en anglais)", url: "https://webaim.org/resources/contrastchecker/" }
          ],
          tryIt: "Pour votre brief, notez 2 ou 3 couleurs et une couleur neutre, et choisissez une police de titre et une police de texte. Ouvrez un vérificateur de contraste gratuit, entrez la couleur du texte et celle du fond, et notez le rapport. Changez toute paire en dessous de 4,5 pour 1.",
          youCanNow: "choisir une palette de couleurs simple et une paire de polices, et vérifier que le texte est lisible.",
          quickCheck: [
            { objective: "O2", q: "Combien de polices une affiche simple utilise-t-elle en général ?", options: ["Cinq ou plus", "Une police différente pour chaque ligne", "Pas plus de deux", "Seulement des polices manuscrites"], answer: 2, why: "Une police de titre et une police de texte gardent le visuel net et lisible." },
            { objective: "O4", q: "Un vérificateur de contraste indique 2,8 pour 1 pour votre texte de taille normale. Que faites-vous ?", options: ["Foncer le texte ou éclaircir le fond jusqu'à au moins 4,5 pour 1", "Rien ; n'importe quel rapport convient", "Réduire la taille du texte", "Ajouter une deuxième couleur de fond derrière"], answer: 0, why: "Les WCAG demandent au moins 4,5 pour 1 pour le texte normal afin que la plupart des gens puissent le lire." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les bases du graphisme",
        questions: [
          { objective: "O1", q: "Qu'est-ce qu'un brief de création ?", options: ["Une affiche terminée", "Un court plan qui précise le public, le message, le format et la taille", "Une facture envoyée au client", "Une liste de modèles Canva"], answer: 1, why: "Le brief est le plan sur lequel vous vous mettez d'accord avant de créer." },
          { objective: "O1", q: "Le propriétaire d'un food truck veut une publication pour un nouveau plat. Quel brief est le plus complet ?", options: ["\"Faites quelque chose de joli.\"", "\"Publication sur la nourriture.\"", "\"Utilisez du rouge.\"", "\"Publication Instagram carrée pour les clients du midi du quartier : nouveau taco au poulet épicé, 5 $, vendredi seulement.\""], answer: 3, why: "Il précise le format et la taille, le public et le message principal." },
          { objective: "O2", q: "Aligner le titre, l'image et les détails sur le même bord gauche est un exemple de :", options: ["Alignement", "Répétition", "Contraste", "Hiérarchie"], answer: 0, why: "L'alignement consiste à placer les éléments sur le même bord ou le même axe central." },
          { objective: "O2", q: "Vous montrez votre affiche à un ami pendant 3 secondes et il ne peut pas dire de quoi elle parle. Quelle est la meilleure correction ?", options: ["Ajouter plus de détails", "Utiliser plus de couleurs", "Agrandir le message principal et enlever les mots en trop", "Réduire l'image"], answer: 2, why: "Une hiérarchie plus forte et moins de mots rendent le message principal clair." },
          { objective: "O2", q: "Pourquoi utiliser les mêmes couleurs et polices sur chaque visuel d'un client ?", options: ["La loi l'exige", "Canva n'autorise qu'une couleur", "Cela utilise moins d'encre", "La répétition permet de reconnaître facilement l'entreprise"], answer: 3, why: "La répétition relie les visuels entre eux et aide à se faire reconnaître." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Créer dans Canva",
      lessons: [
        {
          title: "Créer un visuel avec la version gratuite de Canva",
          objectives: ["O3"],
          minutes: 6,
          goal: "Créer un visuel à la bonne taille à partir d'un modèle et le personnaliser.",
          text: [
            "Canva fonctionne dans un navigateur web sur canva.com ou dans l'application Canva. Créez un compte gratuit avec votre e-mail. La version gratuite comprend beaucoup de modèles, de polices, de photos et d'illustrations. Certains éléments sont réservés aux offres payantes et sont marqués Pro ou premium ; laissez-les de côté pour que votre visuel reste gratuit.",
            "Commencez par la taille. Utilisez la recherche ou le bouton de création et tapez le format voulu, comme \"Flyer\" (affiche) ou \"Publication Instagram\". Canva ouvre une page à cette taille. Vous pouvez aussi choisir une taille personnalisée. Les écoles, les élèves et les associations peuvent avoir droit à des offres améliorées gratuites ; consultez les pages Canva Éducation et Canva pour les associations sur le site de Canva.",
            "Un modèle est un visuel déjà prêt. C'est un point de départ, pas le travail fini. Remplacez les mots par ceux de votre brief, les couleurs par votre palette, utilisez vos deux polices, mettez vos propres photos et supprimez tout ce qui n'aide pas le message. Les employeurs reconnaissent un modèle qui n'a pas été modifié.",
            "Utilisez le panneau latéral pour ajouter du texte, des formes et des illustrations, et pour importer vos propres photos. Canva enregistre votre travail au fur et à mesure. Donnez à votre visuel un nom clair pour le retrouver."
          ],
          steps: ["Connectez-vous à Canva sur un ordinateur ou dans l'application.", "Cherchez le format voulu, comme Flyer, ou choisissez une taille personnalisée.", "Choisissez un modèle qui correspond à votre croquis de mise en page, ou partez d'une page vierge.", "Remplacez le texte par le message et les détails de votre brief.", "Changez les couleurs et les polices pour celles de votre palette et de votre paire de polices.", "Importez vos propres photos ou utilisez des images gratuites que vous avez le droit d'utiliser.", "Supprimez tout ce qui n'aide pas le message, puis nommez le visuel."],
          words: [["Modèle", "un visuel déjà prêt que vous modifiez pour en faire le vôtre."], ["Version gratuite", "la version de Canva que vous pouvez utiliser sans payer."], ["Élément Pro ou premium", "un modèle, une photo ou une illustration qui demande une offre payante."], ["Taille personnalisée", "une taille de page que vous entrez vous-même, en pouces, en pixels ou en millimètres."]],
          slides: [
            { title: "Pour commencer", bullets: ["canva.com dans un navigateur ou l'application Canva", "Compte gratuit avec votre e-mail", "Laissez de côté les éléments marqués Pro ou premium"] },
            { title: "Commencez par la taille", bullets: ["Cherchez le format : Flyer, Publication Instagram", "Ou choisissez une taille personnalisée", "Consultez les pages Canva Éducation et Associations"] },
            { title: "Personnalisez le modèle", bullets: ["Vos mots, vos couleurs et vos deux polices", "Vos propres photos", "Supprimez ce qui n'aide pas le message"] },
            { title: "Terminez le brouillon", bullets: ["Importez vos photos depuis le panneau latéral", "Canva enregistre au fur et à mesure", "Donnez au visuel un nom clair"] }
          ],
          sources: [
            { name: "Canva", url: "https://www.canva.com/" },
            { name: "Canva Éducation (vérifiez qui y a droit)", url: "https://www.canva.com/education/" },
            { name: "Canva pour les associations (vérifiez qui y a droit)", url: "https://www.canva.com/canva-for-nonprofits/" }
          ],
          tryIt: "Ouvrez Canva, cherchez Flyer et choisissez un modèle qui correspond à votre croquis de la leçon 2. Changez le texte, les couleurs et les polices selon votre brief et votre palette, ajoutez une photo que vous avez prise vous-même et supprimez ce qui est en trop. Nommez le visuel avec le nom du client et la date.",
          youCanNow: "créer un visuel à la bonne taille avec la version gratuite de Canva et modifier un modèle pour qu'il corresponde à votre brief.",
          quickCheck: [
            { objective: "O3", q: "Vous avez besoin d'une affiche dans Canva. Que faites-vous d'abord ?", options: ["Télécharger une image au hasard", "Chercher le format Flyer ou choisir la bonne taille", "Choisir cinq polices", "Payer une offre"], answer: 1, why: "Commencer à la bonne taille vous évite de refaire la mise en page plus tard." },
            { objective: "O3", q: "Vous voulez que votre visuel reste gratuit. Une illustration est marquée Pro. Que faites-vous ?", options: ["L'utiliser en espérant que personne ne le remarque", "En faire une capture d'écran", "La copier depuis un autre site", "Choisir plutôt une illustration gratuite"], answer: 3, why: "Les éléments Pro demandent une offre payante ; choisir des éléments gratuits garde le visuel gratuit et en règle." }
          ]
        },
        {
          title: "Images, droits et vérification finale",
          objectives: ["O4"],
          minutes: 5,
          goal: "Vérifier les droits, la lisibilité, l'orthographe et les informations d'un visuel avant de le partager.",
          text: [
            "Toutes les images en ligne ne sont pas libres d'utilisation. Aux États-Unis, une œuvre est protégée par le droit d'auteur dès sa création, même sans le signe ©. Vous ne pouvez donc pas copier une photo, un logo ou un dessin d'un site web ou d'une autre entreprise simplement parce que vous l'avez trouvé.",
            "Les images sûres sont celles que vous avez prises ou créées vous-même, les images de Canva que votre offre vous permet d'utiliser (lisez les conditions de licence de Canva sur son site) et les images de sources gratuites dont la licence autorise clairement votre usage. N'utilisez jamais le logo d'une autre entreprise, la photo d'une célébrité ou l'emblème d'une équipe sportive sans autorisation écrite. Si vous utilisez l'IA pour créer une image, vérifiez les règles de l'outil et cherchez les erreurs, comme des mains bizarres ou un texte faux.",
            "Avant de partager ou d'imprimer, faites la vérification finale : le message principal est-il clair en 3 secondes ? Chaque couleur de texte est-elle lisible (contraste) ? Chaque mot est-il bien écrit, et la date, l'heure, le lieu, le prix et le contact sont-ils justes ? Avez-vous le droit d'utiliser chaque image et chaque police ? Demandez au client ou à une autre personne de relire aussi. Quand vous publiez en ligne, ajoutez un texte alternatif (une courte description de l'image) si le site le permet, pour que les personnes qui utilisent un lecteur d'écran sachent ce qu'elle montre."
          ],
          steps: ["Refaites le test des 3 secondes.", "Vérifiez chaque couleur de texte par rapport à son fond.", "Lisez chaque mot lentement, à voix haute, pour l'orthographe.", "Comparez la date, l'heure, le lieu, le prix et le contact avec le brief.", "Notez d'où vient chaque image et pourquoi vous pouvez l'utiliser.", "Demandez à quelqu'un d'autre de relire, puis corrigez ce qu'il trouve."],
          words: [["Droit d'auteur", "le droit légal de la personne qui a créé une œuvre de contrôler les copies qui en sont faites."], ["Licence", "une autorisation, avec des règles, d'utiliser l'œuvre de quelqu'un d'autre."], ["Texte alternatif", "une courte description écrite d'une image pour les personnes qui ne peuvent pas la voir."], ["Relire", "lire lentement pour trouver et corriger les erreurs."]],
          slides: [
            { title: "Toutes les images ne sont pas libres", bullets: ["Une œuvre est protégée dès sa création", "Pas de signe © ne veut pas dire libre", "Ne copiez jamais les logos ou photos d'autres entreprises"] },
            { title: "Les images sûres", bullets: ["Les photos que vous avez prises vous-même", "Les images Canva que votre offre permet d'utiliser", "Les sources gratuites dont la licence autorise votre usage"] },
            { title: "La vérification finale", bullets: ["Clair en 3 secondes ?", "Contraste lisible ?", "Orthographe et informations justes ?", "Droits sur chaque image ?"] },
            { title: "Avant de publier", bullets: ["Demandez à une autre personne de relire", "Ajoutez un texte alternatif si le site le permet"] }
          ],
          sources: [
            { name: "US Copyright Office : FAQ sur les bases du droit d'auteur (en anglais)", url: "https://www.copyright.gov/help/faq/faq-general.html" },
            { name: "W3C : Understanding Contrast (Minimum) (en anglais)", url: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" }
          ],
          tryIt: "Faites la vérification finale sur votre affiche Canva. Écrivez la liste de toutes les images et d'où elles viennent. Lisez chaque mot à voix haute, comparez les détails avec votre brief et vérifiez une couleur de texte dans un vérificateur de contraste. Corrigez chaque problème trouvé.",
          youCanNow: "vérifier les droits, la lisibilité, l'orthographe et les informations d'un visuel, et le corriger avant de le partager.",
          quickCheck: [
            { objective: "O4", q: "Vous trouvez une belle photo sur le site d'une autre boulangerie, sans signe ©. Pouvez-vous l'utiliser sur l'affiche de votre client ?", options: ["Non ; elle reste protégée, utilisez votre propre image ou une image sous licence", "Oui, car elle n'a pas de signe ©", "Oui, si vous la réduisez", "Oui, si vous changez sa couleur"], answer: 0, why: "Le droit d'auteur protège une œuvre dès sa création, avec ou sans signe." },
            { objective: "O4", q: "Quelle étape fait partie de la vérification finale avant l'impression ?", options: ["Ajouter une troisième police", "Réduire le titre", "Comparer la date, le lieu et le prix avec le brief", "Supprimer tout l'espace blanc"], answer: 2, why: "Des détails faux sur une affiche imprimée coûtent de l'argent et la confiance du client." }
          ]
        },
        {
          title: "Exporter, recueillir des avis et construire un portfolio",
          objectives: ["O5", "O3"],
          minutes: 5,
          goal: "Exporter un visuel dans le bon type de fichier et l'ajouter à un portfolio avec une description.",
          text: [
            "Quand le visuel a passé la vérification finale, partagez-le pour avoir des avis avant l'export final. Canva a un bouton Partager qui permet d'envoyer un lien de consultation. Posez une question claire, comme \"Y a-t-il quelque chose de pas clair ou de faux ?\", puis faites les changements acceptés par le client.",
            "Exportez dans le bon type de fichier. Ouvrez Partager et choisissez Télécharger. Utilisez le PDF pour tout ce qui sera imprimé, comme une affiche. Utilisez le PNG pour les publications sur les réseaux sociaux et les visuels avec du texte, car il garde le texte net. Le JPG convient aux photos quand un fichier plus léger compte. Nommez le fichier clairement, par exemple : carwash-flyer-2026-11.pdf.",
            "Créez un visuel assorti. Commencez un nouveau visuel à la taille d'une publication pour les réseaux sociaux et utilisez les mêmes couleurs, polices et photo, pour que l'ensemble ressemble à une seule campagne. Les clients veulent souvent une affiche et une publication ensemble.",
            "Ajoutez le travail à votre portfolio. Un portfolio peut être un dossier, un site web gratuit ou un simple PDF. Pour chaque pièce, écrivez 3 à 4 phrases : l'objectif, pour qui c'était, vos choix de création et le résultat. Ne montrez le travail d'un client que s'il est d'accord, et n'y mettez jamais d'informations privées."
          ],
          steps: ["Partagez un lien de consultation et posez une question claire pour avoir un avis.", "Faites les changements acceptés.", "Ouvrez Partager, puis Télécharger, et choisissez PDF pour l'impression ou PNG pour les écrans.", "Nommez le fichier avec le projet et la date.", "Créez une publication assortie avec les mêmes couleurs et polices.", "Écrivez une description de portfolio de 3 à 4 phrases et ajoutez les deux fichiers."],
          words: [["Exporter", "enregistrer un visuel comme un fichier que vous pouvez imprimer, publier ou envoyer."], ["PDF", "un type de fichier qui garde la même mise en page partout ; le meilleur pour l'impression."], ["PNG", "un type de fichier image qui garde le texte et les contours nets ; bon pour les écrans."], ["JPG", "un type de fichier image qui rend les photos plus légères ; le texte peut paraître un peu flou."]],
          slides: [
            { title: "D'abord, recueillez des avis", bullets: ["Partagez un lien de consultation", "Posez une question claire", "Faites les changements acceptés par le client"] },
            { title: "Choisissez le bon type de fichier", bullets: ["PDF pour l'impression, comme les affiches", "PNG pour les publications et le texte", "JPG pour les photos quand la taille compte"] },
            { title: "Créez un ensemble", bullets: ["Nouveau visuel au format publication", "Mêmes couleurs, polices et photo"] },
            { title: "La description de portfolio", bullets: ["L'objectif et pour qui c'était", "Vos choix de création", "Le résultat ; demandez l'accord du client avant de le montrer"] }
          ],
          tryIt: "Partagez votre affiche avec une personne et demandez : \"Y a-t-il quelque chose de pas clair ou de faux ?\" Corrigez ce qu'elle trouve. Téléchargez l'affiche en PDF, créez une publication carrée assortie et téléchargez-la en PNG, nommez clairement les deux fichiers et écrivez votre description de portfolio de 3 à 4 phrases.",
          youCanNow: "recueillir des avis, exporter un visuel dans le bon type de fichier, créer un visuel assorti et l'ajouter à un portfolio avec une description.",
          quickCheck: [
            { objective: "O5", q: "Votre affiche part chez un imprimeur. Quel type de fichier est le meilleur ?", options: ["Une capture d'écran", "Un JPG d'une photo", "Un PNG fait pour un téléphone", "Un PDF"], answer: 3, why: "Le PDF garde la même mise en page et c'est le choix habituel pour l'impression." },
            { objective: "O5", q: "Que met-on dans une description de portfolio ?", options: ["L'adresse personnelle du client", "L'objectif, pour qui c'était, vos choix de création et le résultat", "Seulement le nom du fichier", "Votre mot de passe Canva"], answer: 1, why: "Un court récit de l'objectif, des choix et du résultat montre aux employeurs comment vous réfléchissez." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Créer dans Canva",
        questions: [
          { objective: "O3", q: "Qu'est-ce qu'un modèle dans Canva ?", options: ["Un abonnement payant", "Un type de fichier pour l'impression", "Un visuel déjà prêt que vous modifiez pour en faire le vôtre", "Une licence de droit d'auteur"], answer: 2, why: "Les modèles sont des points de départ ; vous changez les mots, les couleurs, les polices et les images." },
          { objective: "O3", q: "Un employeur regarde votre visuel et voit que c'est un modèle non modifié. Qu'auriez-vous dû faire ?", options: ["Changer le texte, les couleurs, les polices et les images pour suivre le brief", "Utiliser plus d'éléments Pro", "Ajouter une troisième police", "L'exporter en JPG"], answer: 0, why: "Personnaliser le modèle montre un vrai savoir-faire en graphisme." },
          { objective: "O4", q: "Quelle image pouvez-vous utiliser sans risque sur l'affiche d'un client ?", options: ["Le logo d'une équipe sportive pris sur son site", "Une photo que vous avez prise vous-même", "La photo d'une célébrité prise sur un site d'actualités", "La photo du produit d'un concurrent"], answer: 1, why: "Vos propres photos vous appartiennent ; les autres demandent une autorisation écrite." },
          { objective: "O4", q: "Un texte gris clair sur fond blanc est difficile à lire. Quelle règle n'est pas respectée ?", options: ["La hiérarchie", "La répétition", "Le nommage des fichiers", "Un contraste lisible"], answer: 3, why: "Le texte doit avoir assez de contraste avec son fond pour être lisible." },
          { objective: "O5", q: "Quel type de fichier est le meilleur pour une publication sur les réseaux sociaux avec du texte ?", options: ["PNG", "PDF pour l'impression", "Un document Word", "Une capture de votre écran"], answer: 0, why: "Le PNG garde le texte et les contours nets sur les écrans." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Graphisme avec Canva",
    questions: [
      { objective: "O1", q: "Que font les graphistes ?", options: ["Ils réparent des ordinateurs", "Ils écrivent des lois sur les images", "Ils utilisent des mots, des images, des couleurs et la mise en page pour transmettre un message", "Ils vendent des imprimantes"], answer: 2, why: "Le graphisme est une communication visuelle." },
      { objective: "O1", q: "Que regardent de près les employeurs quand ils embauchent des graphistes ?", options: ["Un portfolio de vos meilleurs travaux", "Votre nombre d'abonnés sur les réseaux sociaux", "Le nombre de polices que vous possédez", "Votre vitesse de frappe"], answer: 0, why: "Le BLS indique que le portfolio est essentiel pour les emplois en graphisme." },
      { objective: "O1", q: "Lequel n'est PAS l'un des quatre éléments d'un brief de création ?", options: ["Le public", "Le message principal", "La taille", "Votre couleur préférée"], answer: 3, why: "Le brief porte sur le public du client, le message, le format et la taille." },
      { objective: "O1", q: "Une association demande \"quelque chose pour la collecte de nourriture\". Quelle est la meilleure étape suivante ?", options: ["Créer un logo", "Demander pour qui c'est, le message principal, le format et la taille, puis rédiger un brief", "Copier l'affiche de l'an dernier d'un autre groupe", "Choisir un modèle au hasard"], answer: 1, why: "Un brief transforme une demande vague en plan clair." },
      { objective: "O2", q: "Faire du nom de l'événement le plus grand texte de la page applique quelle règle ?", options: ["La répétition", "La hiérarchie", "L'espace blanc", "L'alignement"], answer: 1, why: "La hiérarchie montre d'abord ce qui compte le plus." },
      { objective: "O2", q: "Qu'est-ce que l'espace blanc ?", options: ["N'importe quelle couleur blanche", "Une fonction payante de Canva", "Une erreur d'impression", "L'espace vide autour et entre les éléments"], answer: 3, why: "L'espace blanc repose l'œil et fait ressortir le message." },
      { objective: "O2", q: "Qu'est-ce que le test des 3 secondes ?", options: ["Montrer le visuel pendant 3 secondes et demander de quoi il parlait", "Exporter le visuel en 3 secondes", "Utiliser 3 polices", "Publier le visuel 3 fois"], answer: 0, why: "Si les gens ne peuvent pas dire le message après 3 secondes, la hiérarchie doit être revue." },
      { objective: "O2", q: "Une palette de couleurs simple pour une affiche, c'est en général :", options: ["Toutes les couleurs de l'arc-en-ciel", "Une couleur pour chaque ligne de texte", "2 ou 3 couleurs principales plus une neutre", "Seulement du rouge et du vert"], answer: 2, why: "Une petite palette paraît nette et se répète facilement." },
      { objective: "O3", q: "Dans Canva, comment commencer une affiche à la bonne taille ?", options: ["Chercher le format Flyer ou choisir une taille personnalisée", "Prendre n'importe quelle page et l'étirer", "La faire en format publication et l'imprimer", "Dessiner les bords à la main"], answer: 0, why: "Commencer à la bonne taille évite de refaire la mise en page." },
      { objective: "O3", q: "Qu'est-ce qui est vrai sur la version gratuite de Canva ?", options: ["Tous les modèles et toutes les photos sont gratuits", "Vous devez payer avant de créer le moindre visuel", "Certains éléments sont marqués Pro ou premium et demandent une offre payante", "Elle ne fonctionne que sur téléphone"], answer: 2, why: "La version gratuite a beaucoup d'éléments gratuits, mais certains demandent une offre payante." },
      { objective: "O3", q: "Combien de polices la plupart des visuels simples doivent-ils utiliser ?", options: ["Une par phrase", "Pas plus de deux", "Au moins cinq", "Seulement des polices manuscrites"], answer: 1, why: "Une police de titre et une police de texte gardent le visuel lisible." },
      { objective: "O3", q: "Où ajoutez-vous vos propres photos dans Canva ?", options: ["Dans le menu Télécharger", "Dans le nom du fichier", "Dans le vérificateur de contraste", "En les important depuis le panneau latéral"], answer: 3, why: "Le panneau latéral sert à ajouter du texte, des illustrations et vos fichiers importés." },
      { objective: "O4", q: "Une photo d'un site web n'a pas de signe ©. Qu'est-ce qui est vrai ?", options: ["Elle est libre pour tout le monde", "Elle appartient à Canva", "Elle est libre si vous la recadrez", "Elle peut quand même être protégée par le droit d'auteur"], answer: 3, why: "Aux États-Unis, une œuvre est protégée dès sa création, avec ou sans signe." },
      { objective: "O4", q: "Quel rapport de contraste les WCAG demandent-elles pour un texte de taille normale ?", options: ["1 pour 1", "Au moins 4,5 pour 1", "Au moins 2 pour 1", "Exactement 10 pour 1"], answer: 1, why: "4,5 pour 1 est le minimum pour le texte normal ; le grand texte demande 3 pour 1." },
      { objective: "O4", q: "Qu'est-ce que le texte alternatif ?", options: ["Une deuxième police", "Un type de fichier", "Une courte description d'une image pour les personnes qui ne peuvent pas la voir", "Un modèle Canva"], answer: 2, why: "Le texte alternatif permet aux lecteurs d'écran de décrire l'image." },
      { objective: "O4", q: "Avant d'imprimer 500 affiches, quelle est la vérification la plus importante ?", options: ["L'orthographe, la date, le lieu, le prix et le contact correspondent au brief", "Vous avez utilisé toutes les couleurs", "Le fichier est le plus lourd possible", "Le modèle n'a pas été modifié"], answer: 0, why: "Les erreurs sur des affiches imprimées coûtent cher et sont difficiles à corriger." },
      { objective: "O5", q: "Quel type de fichier est le meilleur pour une affiche imprimée ?", options: ["JPG", "Une capture d'écran", "PDF", "Un fichier texte"], answer: 2, why: "Le PDF garde la même mise en page et c'est la norme pour l'impression." },
      { objective: "O5", q: "Quel est le nom de fichier le plus clair ?", options: ["carwash-flyer-2026-11.pdf", "final-final-2.pdf", "untitled.pdf", "aaa.pdf"], answer: 0, why: "Il indique le projet et la date pour que vous et le client puissiez le retrouver." },
      { objective: "O5", q: "Avant de mettre l'affiche d'un client dans votre portfolio, vous devez :", options: ["Ajouter son numéro de téléphone privé", "Retirer votre nom", "La convertir en JPG", "Demander au client si vous pouvez la montrer"], answer: 3, why: "Montrer le travail d'un client demande son accord." },
      { objective: "O5", q: "Pourquoi créer une publication assortie à l'affiche ?", options: ["Canva l'exige", "Les clients veulent souvent un ensemble qui ressemble à une seule campagne", "Cela change le type de fichier", "Cela supprime le droit d'auteur"], answer: 1, why: "Un ensemble assorti, avec les mêmes couleurs et polices, aide à se faire reconnaître." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [2, 4, 5, 9, 12, 13, 16, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Brief de création", objective: "O1", notYet: "Il manque au brief le public, le message, le format ou la taille.", meets: "Un court paragraphe précise les quatre éléments.", exceeds: "Il liste aussi les détails indispensables et a été relu au client." },
      { name: "Mise en page", objective: "O2", notYet: "On ne peut pas dire le message principal après 3 secondes, ou la mise en page est trop chargée.", meets: "Le message principal passe clairement en premier, les éléments sont alignés et il y a de l'espace blanc.", exceeds: "L'affiche et la publication utilisent les mêmes idées de mise en page et forment un ensemble." },
      { name: "Créé dans Canva", objective: "O3", notYet: "Mauvaise taille, plus de 2 polices, un élément payant ou un modèle non modifié.", meets: "Bonne taille, au plus 2 polices et 3 couleurs principales, uniquement des éléments gratuits, et le modèle a été personnalisé.", exceeds: "Créé à partir d'une page vierge, ou modèle tellement modifié que c'est clairement une création personnelle." },
      { name: "Vérifié", objective: "O4", notYet: "Une faute d'orthographe ou un détail faux, un texte illisible, ou une image sans droit clair d'utilisation.", meets: "Aucune erreur, le texte atteint 4,5 pour 1, et chaque image est listée avec sa provenance.", exceeds: "Une autre personne a relu, et un texte alternatif est écrit pour la publication." },
      { name: "Exporté et décrit", objective: "O5", notYet: "Mauvais type de fichier, nom de fichier pas clair, ou pas de description.", meets: "Affiche en PDF, publication en PNG, noms de fichiers clairs et description de 3 à 4 phrases.", exceeds: "La description explique pourquoi chaque choix de création convient au public, et le client a accepté qu'on la montre." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui ajoutent la pièce à un portfolio et l'utilisent dans une candidature à un emploi, un stage ou une mission en indépendant dans les 30 jours (questionnaire de suivi)",
      "Apprenants qui disent avoir réalisé un visuel payé ou bénévole pour une entreprise, une équipe ou une association dans les 30 jours",
      "Organisations partenaires et petites entreprises qui disent utiliser des affiches et des publications créées par les apprenants"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un ordinateur avec internet (le plus simple) ou un smartphone avec l'application Canva",
      "Un compte Canva gratuit (une adresse e-mail est nécessaire pour s'inscrire)",
      "Un vérificateur de contraste gratuit, comme celui de WebAIM",
      "Du papier et un stylo pour les croquis de mise en page et le brief",
      "L'appareil photo d'un téléphone pour prendre vos propres photos",
      "Environ 2 à 3 heures au total : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis un chapitre par séance ; montrez le test des 3 secondes et la personnalisation d'un modèle sur un écran partagé.",
      "Quand c'est possible, associez les apprenants à un vrai client local (une association, un club scolaire ou une petite entreprise) ; cela rend le brief et le portfolio concrets.",
      "Ne laissez pas les apprenants copier des logos ou des photos du web ; demandez-leur de noter la source de chaque image.",
      "Si votre école ou votre association peut avoir droit aux offres Canva Éducation ou Canva pour les associations, vérifiez les conditions sur le site de Canva avant le cours, mais prévoyez que chaque tâche fonctionne avec la version gratuite.",
      "Notez la tâche finale avec la grille d'évaluation et organisez une courte exposition où chaque apprenant fait un commentaire bienveillant et un commentaire utile sur chaque pièce."
    ]
  }
};
