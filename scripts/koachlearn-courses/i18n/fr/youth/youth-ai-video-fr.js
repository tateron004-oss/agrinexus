"use strict";

// Koach Learn course (French translation of youth/youth-ai-video.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "youth-ai-video-fr",
  lang: "fr",
  translationOf: "youth-ai-video",
  category: "Youth",
  name: "Création vidéo avec l'IA",
  skills: "Écrire un court script avec l'IA, Faire un storyboard, Filmer avec un téléphone, Monter dans un logiciel gratuit, Ajouter des sous-titres et de la musique de façon responsable, Partager en sécurité",
  outcome: "préparer, filmer et monter une vidéo de 30 à 60 secondes (comme une promo pour un club ou un événement de l'école) en utilisant l'IA pour le script, le storyboard et les sous-titres, avec l'accord de toutes les personnes filmées, une musique que vous avez le droit d'utiliser, et une mention honnête pour tout ce qui est fait par l'IA.",
  about: [
    "Ce cours s'adresse aux jeunes qui veulent faire de meilleures vidéos pour des projets scolaires, des clubs, des équipes, un groupe de musique ou leur propre chaîne. Un téléphone et un logiciel de montage gratuit suffisent.",
    "Vous utiliserez un assistant d'IA comme ChatGPT, Microsoft Copilot ou Google Gemini pour trouver des idées et écrire un court script, le transformer en storyboard, le filmer avec une bonne lumière et un bon son, le monter dans un logiciel gratuit comme CapCut ou Canva, ajouter des sous-titres et le partager en sécurité.",
    "Les applications vidéo et les outils d'IA ont un âge minimum et certains demandent un compte : lisez les conditions de chaque outil, suivez les règles de votre école sur l'IA et sur le fait de filmer, et faites-vous aider par un parent ou tuteur pour les inscriptions. Chaque leçon se termine par une activité \"Essayez maintenant\", un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Faites une vidéo de 30 à 60 secondes qui fait la promotion d'un club, d'une équipe, d'un événement ou d'une cause de votre école qui vous tient à cœur. Utilisez l'IA pour aider à écrire le script et le storyboard, filmez au moins quatre plans avec l'accord de toutes les personnes filmées, montez-la dans un logiciel gratuit, ajoutez des sous-titres et une musique que vous avez le droit d'utiliser, signalez tout ce qui est généré par l'IA, et exportez-la.",
  chapters: [
    {
      name: "Chapitre 1 : Préparer et filmer",
      lessons: [
        {
          title: "Comment l'IA aide pour la vidéo, et les règles de base",
          minutes: 4,
          goal: "Citer des façons dont l'IA aide pour la vidéo et les règles que vous suivrez.",
          text: [
            "L'IA est partout dans la création vidéo : des assistants qui aident à trouver des idées et à écrire des scripts, des logiciels de montage qui font des sous-titres automatiques ou enlèvent les bruits de fond, et des générateurs qui créent des images ou des clips à partir d'un texte.",
            "L'IA peut aussi être mal utilisée. Un deepfake est une fausse vidéo ou une fausse voix qui fait croire qu'une vraie personne a dit ou fait quelque chose qu'elle n'a pas fait. Faire des deepfakes de camarades, de professeurs ou de célébrités peut blesser des gens, enfreindre les règles de l'école et, à certains endroits, la loi.",
            "Vos règles de base : demandez l'accord de toutes les personnes que vous filmez, utilisez seulement des musiques et des clips que vous avez le droit d'utiliser, signalez tout ce qui est généré par l'IA, vérifiez l'âge minimum de chaque application et suivez les règles de votre école."
          ],
          words: [["Script", "les paroles et les actions prévues pour une vidéo."], ["Deepfake", "une fausse vidéo ou une fausse voix qui fait croire qu'une vraie personne a dit ou fait quelque chose qu'elle n'a pas fait."], ["Généré par l'IA", "fait par un outil d'IA au lieu d'être filmé ou dessiné par une personne."]],
          slides: [
            { title: "L'IA dans la création vidéo", bullets: ["Idées et scripts", "Sous-titres automatiques et réduction du bruit", "Images ou clips à partir d'un prompt"] },
            { title: "Mauvais usage : les deepfakes", bullets: ["Faire dire ou faire des choses à une vraie personne", "Blesse les gens et enfreint les règles", "N'en faites jamais"] },
            { title: "Règles de base", bullets: ["Accord de toutes les personnes filmées", "Musiques et clips autorisés", "Signalez le contenu fait par l'IA", "Vérifiez l'âge des applis et les règles"] }
          ],
          tryIt: "Choisissez le sujet de votre vidéo finale : un club, une équipe, un événement ou une cause de votre école ou de votre quartier. Écrivez une phrase sur le public de la vidéo et ce que vous voulez qu'il fasse après l'avoir vue.",
          youCanNow: "citer des façons dont l'IA aide pour la vidéo et expliquer les règles pour l'utiliser de façon juste."
        },
        {
          title: "Écrire un script et un storyboard avec l'IA",
          minutes: 5,
          goal: "Utiliser l'IA pour écrire un premier jet de court script et le transformer en storyboard plan par plan.",
          text: [
            "Les vidéos courtes ont besoin d'une accroche dans les 3 premières secondes, d'un milieu clair et d'une fin qui dit aux gens quoi faire, comme \"Rejoignez-nous jeudi en salle 12\".",
            "Demandez un premier jet à l'IA : \"Écris un script de 45 secondes pour une vidéo qui invite les nouveaux élèves à rejoindre notre club de robotique. Mets une accroche, 3 courtes scènes et un appel à l'action. Utilise des mots simples pour des ados.\" Puis réécrivez-le pour qu'il vous ressemble, à vous et à votre club.",
            "Un storyboard est le plan de chaque prise de vue : ce qu'on voit, ce qu'on entend et la durée. Demandez à l'IA de transformer votre script en tableau avec ces colonnes. Vous pouvez aussi dessiner des bonshommes."
          ],
          steps: ["Donnez à l'IA le sujet, le public, la durée et le ton.", "Demandez une accroche, 3 courtes scènes et un appel à l'action.", "Réécrivez-le avec vos mots et vérifiez les faits (dates, salle, horaires).", "Demandez à l'IA d'en faire un tableau de storyboard : plan, ce qu'on voit, ce qu'on entend, secondes.", "Vérifiez que la durée totale correspond à votre format."],
          words: [["Accroche", "les premières secondes qui attirent l'attention."], ["Appel à l'action", "la phrase qui dit aux spectateurs quoi faire ensuite."], ["Storyboard", "le plan d'une vidéo, prise de vue par prise de vue."], ["Plan", "un morceau de film tourné sans arrêt."]],
          slides: [
            { title: "La forme d'une vidéo courte", bullets: ["Accroche dans les 3 premières secondes", "Un milieu clair", "Un appel à l'action à la fin"] },
            { title: "Demandez un premier jet à l'IA", bullets: ["Sujet, public, durée, ton", "Puis réécrivez avec vos mots", "Vérifiez dates, horaires et lieux"] },
            { title: "Storyboard", bullets: ["Numéro du plan", "Ce qu'on voit et entend", "Combien de secondes"] }
          ],
          tryIt: "Utilisez un assistant d'IA pour écrire un script sur le sujet de votre vidéo, réécrivez-le avec vos mots, et transformez-le en storyboard de 4 à 6 plans qui tient dans votre durée.",
          youCanNow: "écrire un court script vidéo et un storyboard avec l'aide de l'IA."
        },
        {
          title: "Filmer avec un téléphone",
          minutes: 5,
          goal: "Filmer des plans stables et bien éclairés, avec un son clair et l'accord des personnes.",
          text: [
            "La lumière : placez la personne face à la lumière, comme une fenêtre, pour que la lumière soit sur son visage et pas derrière elle. La stabilité : tenez le téléphone à deux mains, appuyez-vous sur quelque chose ou utilisez un support. Filmez à l'horizontale ou à la verticale selon l'endroit où vous publierez.",
            "Le son compte plus qu'on ne le croit. Filmez près de la personne qui parle, dans un endroit calme, loin des ventilateurs et des couloirs. Enregistrez un test de 3 secondes et écoutez-le avant la vraie prise.",
            "Demandez à chaque personne filmée si elle est d'accord, et dites-lui où la vidéo sera montrée. Certains élèves ne peuvent pas être filmés ou publiés selon les règles de l'école : vérifiez avec votre professeur ou le responsable du club. Ne filmez pas les gens dans des lieux privés ni quelqu'un qui dit non."
          ],
          steps: ["Placez la personne face à la lumière.", "Tenez le téléphone stable à deux mains ou avec un support.", "Choisissez horizontal ou vertical selon l'endroit où vous publierez.", "Enregistrez un court test de son et écoutez-le.", "Obtenez l'accord de toutes les personnes filmées et suivez les règles de l'école."],
          words: [["Prise", "un essai pour filmer un plan."], ["Cadrage", "ce qui se trouve à l'intérieur des bords de l'image."]],
          slides: [
            { title: "Lumière et stabilité", bullets: ["Face à la lumière", "Deux mains ou un support", "Horizontal ou vertical selon la plateforme"] },
            { title: "Le son", bullets: ["Rapprochez-vous de la personne", "Endroit calme, sans ventilateur ni couloir", "Faites un test de 3 secondes"] },
            { title: "L'accord", bullets: ["Demandez à chaque personne filmée", "Dites où ce sera montré", "Suivez les règles de l'école"] }
          ],
          tryIt: "Filmez les deux premiers plans de votre storyboard. Faites d'abord un test de son, obtenez l'accord de chaque personne filmée, et filmez chaque plan au moins deux fois.",
          youCanNow: "filmer des plans stables et bien éclairés avec un son clair, avec l'accord des personnes filmées."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Préparer et filmer",
        questions: [
          { q: "Qu'est-ce qu'un deepfake ?", options: ["Une fausse vidéo ou voix qui fait croire qu'une vraie personne a dit ou fait quelque chose qu'elle n'a pas fait", "Un type de caméra", "Une application de montage gratuite", "La fin d'une vidéo"], answer: 0, why: "Les deepfakes prêtent à de vraies personnes des paroles ou des actes qui n'ont jamais eu lieu." },
          { q: "Que doivent faire les 3 premières secondes d'une vidéo courte ?", options: ["Montrer le générique", "Rester silencieuses", "Attirer l'attention avec une accroche", "Montrer un écran noir"], answer: 2, why: "Une accroche donne envie de continuer à regarder." },
          { q: "L'IA écrit un premier jet de votre script. Que faites-vous ensuite ?", options: ["Le publier tel quel", "Le réécrire avec vos mots et vérifier les faits", "L'effacer", "Ajouter votre adresse"], answer: 1, why: "Vous le rendez personnel et vérifiez que les dates et les lieux sont justes." },
          { q: "Où doit être la lumière quand vous filmez une personne ?", options: ["Derrière elle", "Nulle part", "Seulement au sol", "Sur son visage, comme face à une fenêtre"], answer: 3, why: "La lumière sur le visage rend la personne facile à voir." },
          { q: "Un camarade dit qu'il ne veut pas être dans votre vidéo. Que faites-vous ?", options: ["Le filmer quand même", "Le filmer de loin", "Ne pas le filmer", "Le flouter plus tard sans demander"], answer: 2, why: "Filmez seulement les personnes d'accord." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Monter et partager",
      lessons: [
        {
          title: "Monter dans un logiciel de montage gratuit",
          minutes: 6,
          goal: "Importer des clips, les couper, les mettre dans l'ordre et ajouter du texte.",
          text: [
            "Les logiciels de montage gratuits comme CapCut et Canva marchent sur téléphone et dans un navigateur. Les menus changent souvent, alors cherchez ces actions : commencer un nouveau projet, importer vos clips, rogner (couper le début et la fin), diviser un clip, glisser les clips dans l'ordre et ajouter du texte.",
            "Suivez votre storyboard. Coupez chaque plan serré : commencez juste avant l'action et arrêtez juste après. Les temps morts font défiler les gens plus loin.",
            "Ajoutez un titre au début et votre appel à l'action en texte à la fin. Gardez le texte grand, court, et assez longtemps à l'écran pour être lu deux fois."
          ],
          steps: ["Commencez un nouveau projet et importez vos clips.", "Mettez les clips dans l'ordre du storyboard.", "Rognez le début et la fin de chaque clip.", "Ajoutez un titre et un appel à l'action en texte.", "Regardez tout du début à la fin et corrigez ce qui est lent."],
          words: [["Importer", "mettre vos clips dans le logiciel de montage."], ["Rogner", "couper le début ou la fin d'un clip."], ["Ligne de temps", "la bande du logiciel où les clips sont placés dans l'ordre."]],
          slides: [
            { title: "Logiciels gratuits", bullets: ["CapCut ou Canva sur téléphone ou web", "Cherchez : importer, rogner, diviser, texte"] },
            { title: "Coupez serré", bullets: ["Commencez juste avant l'action", "Arrêtez juste après", "Pas de temps mort"] },
            { title: "Texte à l'écran", bullets: ["Titre au début", "Appel à l'action à la fin", "Grand, court, lisible"] }
          ],
          tryIt: "Importez tous vos plans, mettez-les dans l'ordre du storyboard, rognez chacun et ajoutez un titre et un appel à l'action final.",
          youCanNow: "monter des clips en une vidéo serrée et ordonnée, avec un titre et un appel à l'action."
        },
        {
          title: "Sous-titres, musique et visuels IA, bien faits",
          minutes: 5,
          goal: "Ajouter des sous-titres exacts, une musique autorisée et des mentions honnêtes pour le contenu IA.",
          text: [
            "Beaucoup de gens regardent sans le son, et les sous-titres aident les personnes sourdes ou malentendantes. Beaucoup de logiciels font des sous-titres automatiques avec l'IA. Relisez-les toujours et corrigez les mots faux, surtout les noms.",
            "La musique est protégée par le droit d'auteur. Selon le Bureau du droit d'auteur des États-Unis (U.S. Copyright Office), une œuvre est protégée dès qu'elle est créée et fixée, donc la plupart des chansons que vous entendez sont protégées. Utilisez la musique de la bibliothèque du logiciel selon ses règles, une musique que vous avez faite, ou une musique avec une permission claire. Les plateformes peuvent couper le son ou retirer les vidéos qui utilisent de la musique sans permission.",
            "Si vous ajoutez une image ou un clip généré par l'IA, signalez-le, par exemple \"Image générée par IA\" à l'écran ou dans la description. N'utilisez jamais l'IA pour mettre le visage ou la voix d'une vraie personne dans votre vidéo sans sa permission claire."
          ],
          steps: ["Activez les sous-titres automatiques si votre logiciel en a.", "Lisez chaque sous-titre et corrigez les erreurs, surtout les noms.", "Choisissez une musique de la bibliothèque du logiciel, la vôtre, ou avec permission.", "Signalez toute image ou tout clip généré par l'IA.", "N'utilisez aucun visage ni aucune voix de vraie personne faits par IA sans permission."],
          words: [["Sous-titres", "des mots à l'écran qui montrent ce qui est dit."], ["Droit d'auteur", "le droit légal d'un créateur de contrôler les copies de son œuvre."], ["Mention", "une courte note qui dit que quelque chose a été fait avec l'IA."]],
          slides: [
            { title: "Sous-titres", bullets: ["Beaucoup regardent sans le son", "Aident les personnes sourdes ou malentendantes", "Corrigez les erreurs des sous-titres auto"] },
            { title: "Une musique autorisée", bullets: ["Bibliothèque du logiciel selon ses règles", "Une musique que vous avez faite", "Une musique avec permission claire"] },
            { title: "Visuels IA", bullets: ["Signalez-les", "Pas de visage ni de voix IA de vraies personnes sans accord"] }
          ],
          sources: [{ name: "U.S. Copyright Office : questions fréquentes sur les bases du droit d'auteur", url: "https://www.copyright.gov/help/faq/faq-general.html" }],
          tryIt: "Ajoutez des sous-titres à votre vidéo et corrigez chaque erreur. Ajoutez une musique que vous avez le droit d'utiliser. Si vous avez utilisé une image ou un clip généré par l'IA, ajoutez une mention.",
          youCanNow: "ajouter des sous-titres exacts, choisir une musique autorisée et signaler honnêtement le contenu généré par l'IA."
        },
        {
          title: "Relire, exporter et partager en sécurité",
          minutes: 5,
          goal: "Obtenir des avis, exporter votre vidéo et la partager en sécurité.",
          text: [
            "Avant de terminer, montrez votre vidéo à une ou deux personnes et demandez : L'accroche était-elle forte ? Quelque chose était-il confus ? Saviez-vous quoi faire à la fin ? Vous pouvez aussi décrire votre vidéo à un assistant d'IA et lui demander trois façons de l'améliorer.",
            "Exportez la vidéo avec l'option d'export ou d'enregistrement du logiciel. Regardez encore une fois le fichier exporté pour vérifier le son, les sous-titres et la fin.",
            "Partagez-la là où votre club, votre école et votre famille sont d'accord. Ne mettez pas votre nom complet, l'adresse de votre école ni votre emploi du temps dans les publications publiques. Si c'est un projet scolaire, suivez les règles de votre professeur sur l'IA et dites comment vous l'avez utilisée."
          ],
          steps: ["Montrez la vidéo à une ou deux personnes et posez trois questions.", "Faites une ou deux améliorations.", "Exportez la vidéo et regardez le fichier encore une fois.", "Partagez là où votre club, votre école et votre famille sont d'accord.", "Gardez vos détails personnels privés et dites comment vous avez utilisé l'IA pour l'école."],
          words: [["Retour (avis)", "les remarques des autres qui vous aident à vous améliorer."], ["Exporter", "enregistrer votre projet en fichier vidéo."]],
          slides: [
            { title: "Demandez des avis", bullets: ["L'accroche était-elle forte ?", "Quelque chose de confus ?", "Saviez-vous quoi faire à la fin ?"] },
            { title: "Exportez et vérifiez", bullets: ["Utilisez exporter ou enregistrer", "Regardez le fichier encore une fois"] },
            { title: "Partagez en sécurité", bullets: ["Là où l'école et la famille sont d'accord", "Gardez vos détails personnels privés", "Dites comment vous avez utilisé l'IA"] }
          ],
          tryIt: "Tâche finale : terminez votre vidéo de 30 à 60 secondes avec un script et un storyboard faits avec l'IA, au moins quatre plans filmés avec accord, des sous-titres, une musique autorisée et des mentions pour le contenu IA. Demandez des avis, exportez-la et partagez-la en sécurité.",
          youCanNow: "préparer, filmer, monter, vérifier et partager une vidéo courte de façon responsable avec l'aide de l'IA."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Monter et partager",
        questions: [
          { q: "Que veut dire rogner dans un logiciel de montage ?", options: ["Ajouter de la musique", "Couper le début ou la fin d'un clip", "Partager la vidéo", "Faire des sous-titres"], answer: 1, why: "Rogner enlève le temps en trop au début ou à la fin." },
          { q: "Les sous-titres automatiques ont mal écrit le nom du responsable de votre club. Que faites-vous ?", options: ["Laisser comme ça", "Couper le son", "Supprimer la vidéo", "Corriger le sous-titre"], answer: 3, why: "Relisez et corrigez toujours les sous-titres automatiques." },
          { q: "Quelle musique peut-on utiliser sans risque ?", options: ["La musique de la bibliothèque du logiciel selon ses règles", "Un tube passé à la radio", "Une chanson récupérée sur un site de vidéos", "N'importe quelle chanson si vous citez le chanteur"], answer: 0, why: "La musique de la bibliothèque selon ses règles, la vôtre ou une musique avec permission est autorisée." },
          { q: "Vous avez ajouté une image générée par l'IA. Que devez-vous faire ?", options: ["La cacher", "Dire que vous l'avez dessinée", "Indiquer qu'elle est générée par l'IA", "Enlever les sous-titres"], answer: 2, why: "Une mention honnête dit aux spectateurs ce que l'IA a fait." },
          { q: "Que devez-vous faire avant de partager la vidéo d'un projet scolaire ?", options: ["Publier l'adresse de votre école", "Cacher comment vous avez utilisé l'IA", "Ne pas regarder le fichier exporté", "Suivre les règles du professeur sur l'IA et dire comment vous l'avez utilisée"], answer: 3, why: "Suivre les règles de l'école et être honnête sur l'IA est important." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Création vidéo avec l'IA",
    questions: [
      { q: "Laquelle est une façon utile d'utiliser l'IA pour la vidéo ?", options: ["Faire des sous-titres automatiques", "Faire de fausses vidéos de camarades", "Copier des films", "Voler des comptes"], answer: 0, why: "Les sous-titres automatiques sont une fonction IA courante et utile." },
      { q: "Pourquoi les deepfakes de vraies personnes posent-ils problème ?", options: ["Ils sont trop courts", "Ils peuvent blesser des gens et enfreindre les règles de l'école ou la loi", "Ils n'ont pas de son", "Ils demandent un trépied"], answer: 1, why: "Les deepfakes font croire que de vraies personnes ont fait des choses qu'elles n'ont pas faites." },
      { q: "Avant de s'inscrire sur une application vidéo ou d'IA, un ado doit :", options: ["Utiliser le compte d'un ami plus âgé", "Ne pas lire les conditions", "Vérifier l'âge minimum et en parler à un parent ou tuteur", "Donner une fausse date de naissance"], answer: 2, why: "Les applications ont des limites d'âge, et un parent doit être impliqué." },
      { q: "Un appel à l'action est :", options: ["La musique de fond", "Un réglage de caméra", "Le nom du fichier vidéo", "La phrase qui dit aux spectateurs quoi faire ensuite"], answer: 3, why: "Il dit aux spectateurs quoi faire, comme s'inscrire ou venir." },
      { q: "Quelle demande à l'IA donnera le meilleur premier jet de script ?", options: ["\"Vidéo de 45 s invitant les nouveaux au club de robotique ; accroche, 3 scènes, appel à l'action ; mots simples\"", "\"vidéo\"", "\"fais quelque chose\"", "\"robots\""], answer: 0, why: "Elle donne le sujet, le public, la durée, la forme et le ton." },
      { q: "Un storyboard montre :", options: ["Seulement la musique", "Chaque plan : ce qu'on voit, ce qu'on entend et la durée", "Le prix du logiciel", "Les commentaires des spectateurs"], answer: 1, why: "Un storyboard est un plan prise de vue par prise de vue." },
      { q: "Pourquoi vérifier les faits dans un script écrit par l'IA ?", options: ["L'IA ne se trompe jamais", "Les faits ne comptent pas dans les vidéos", "L'IA peut se tromper sur les dates, horaires ou lieux", "Ça rallonge la vidéo"], answer: 2, why: "L'IA peut se tromper ; vous vérifiez les détails." },
      { q: "Pour garder votre téléphone stable, vous pouvez :", options: ["Le secouer", "Le tenir avec un doigt", "Filmer en courant", "Le tenir à deux mains, vous appuyer sur quelque chose ou utiliser un support"], answer: 3, why: "Des plans stables ont l'air plus professionnels." },
      { q: "Le meilleur endroit pour enregistrer quelqu'un qui parle est :", options: ["Un endroit calme, près de la personne", "À côté d'un ventilateur bruyant", "Un couloir plein de monde", "À l'autre bout d'un gymnase"], answer: 0, why: "Le calme et la proximité donnent un son clair." },
      { q: "Avant de filmer des gens pour la vidéo d'un club de l'école, vous devez :", options: ["Filmer en cachette", "Demander leur accord et vérifier les règles de l'école", "Demander seulement après avoir publié", "Filmer dans des lieux privés"], answer: 1, why: "L'accord et les règles de l'école passent en premier." },
      { q: "Importer, dans un logiciel de montage, veut dire :", options: ["Publier la vidéo", "Supprimer des clips", "Mettre vos clips dans le logiciel", "Ajouter des sous-titres"], answer: 2, why: "Importer fait entrer les clips pour les monter." },
      { q: "Pourquoi couper chaque plan serré ?", options: ["Pour utiliser plus de stockage", "Pour rallonger la vidéo", "Pour cacher les sous-titres", "Les temps morts font défiler les spectateurs plus loin"], answer: 3, why: "Des coupes serrées gardent l'attention." },
      { q: "Le texte à l'écran doit être :", options: ["Grand, court et assez longtemps à l'écran pour être lu", "Minuscule et rapide", "De très longs paragraphes", "Caché"], answer: 0, why: "Un texte lisible fait passer votre message." },
      { q: "Pourquoi ajouter des sous-titres ?", options: ["Ils sont obligatoires sur tous les téléphones", "Beaucoup regardent sans le son, et ils aident les personnes sourdes ou malentendantes", "Ils remplacent le montage", "Ils rendent le fichier plus petit"], answer: 1, why: "Les sous-titres rendent les vidéos plus claires et plus accessibles." },
      { q: "Selon le U.S. Copyright Office, le droit d'auteur protège une œuvre :", options: ["Seulement après son enregistrement officiel", "Seulement pendant 1 an", "Dès qu'elle est créée et fixée sous une forme qu'on peut voir ou entendre", "Seulement pour les vidéos"], answer: 2, why: "La protection commence quand l'œuvre est créée et fixée." },
      { q: "Que peut-il arriver si vous utilisez un tube sans permission ?", options: ["Jamais rien", "Vous gagnez de l'argent", "La chanson s'améliore", "La plateforme peut couper le son ou retirer votre vidéo"], answer: 3, why: "Les plateformes agissent contre la musique utilisée sans permission." },
      { q: "Un ami propose de mettre le visage d'une célébrité fait par IA dans votre vidéo pour rire. Vous :", options: ["Refusez ; on n'utilise pas le visage d'une vraie personne sans permission", "Le faites et le signalez", "Le faites sur un compte privé", "Le faites mais le floutez"], answer: 0, why: "N'utilisez pas de copies IA de vraies personnes sans leur permission." },
      { q: "Quelle question est la plus utile pour avoir un avis ?", options: ["\"Est-ce que c'est parfait ?\"", "\"Saviez-vous quoi faire à la fin ?\"", "\"Est-ce que tu m'aimes bien ?\"", "\"Mon téléphone est beau ?\""], answer: 1, why: "Elle vérifie si l'appel à l'action marche." },
      { q: "Après l'export, vous devez :", options: ["Supprimer le projet tout de suite", "Publier sans regarder", "Regarder le fichier encore une fois pour vérifier le son et les sous-titres", "Le renommer avec votre adresse"], answer: 2, why: "Un export peut avoir des problèmes ; vérifiez avant de partager." },
      { q: "Quand vous partagez en public, gardez privés :", options: ["Le nom du club", "La date de l'événement", "Le titre de la vidéo", "Votre nom complet, l'adresse de votre école et votre emploi du temps"], answer: 3, why: "Les détails personnels restent privés en ligne." }
    ]
  }
};
