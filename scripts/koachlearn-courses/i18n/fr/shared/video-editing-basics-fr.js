"use strict";

// Koach Learn course (French translation of shared/video-editing-basics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "video-editing-basics-fr",
  lang: "fr",
  translationOf: "video-editing-basics",
  category: "Workforce Development",
  name: "Les bases du montage vidéo",
  skills: "Lire un brief et organiser ses images, Configurer un projet, Monter un premier montage, Utiliser des plans de coupe et des coupes plus propres, Corriger le son et ajouter des sous-titres, Exporter et constituer un portfolio",
  outcome: "prendre vos propres vidéos brutes et un court brief, les monter dans un logiciel de montage gratuit pour en faire une vidéo propre de 30 à 60 secondes avec un son clair et des sous-titres, l'exporter au bon format pour l'endroit où elle sera diffusée, et l'utiliser comme première pièce d'un portfolio professionnel.",
  about: [
    "Ce cours s'adresse à toute personne qui veut faire du montage vidéo pour son travail : des jeunes qui cherchent un premier emploi créatif, des adultes qui changent de métier, des sportifs et des entraîneurs qui font des vidéos de leurs meilleurs moments, et des propriétaires de petites entreprises qui veulent des vidéos pour leur commerce. Vous n'avez pas besoin d'avoir déjà fait du montage.",
    "Vous travaillerez comme un vrai monteur : lire un brief, organiser vos fichiers, faire un premier montage, le rendre plus fluide avec des plans de coupe et de meilleures coupes, corriger le son, ajouter des sous-titres et exporter le fichier final. Tout fonctionne avec des logiciels gratuits comme DaVinci Resolve, Microsoft Clipchamp, CapCut ou l'éditeur intégré à votre téléphone.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche \"Essayez maintenant\" avec vos propres vidéos. Il y a un mini-test de deux questions après chaque leçon, un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Votre produit final est une courte vidéo terminée et une note de portfolio que vous pouvez montrer à un employeur ou à un client.",
    "Ce cours vous prépare. Il ne donne pas de certificat. Si vous voulez une certification plus tard, la leçon 6 en présente deux vraies et indique où vérifier les informations."
  ],
  finalTask: "Montez une vidéo de 30 à 60 secondes à partir de vos propres images, pour un brief réel ou d'entraînement (par exemple les meilleurs moments d'une équipe, une promotion pour un commerce local ou l'histoire d'un programme d'emploi). À rendre : un dossier de projet bien nommé, la vidéo finale exportée au bon format pour l'endroit où elle sera diffusée, avec des plans de coupe, un son propre, des sous-titres et uniquement de la musique que vous avez le droit d'utiliser, et une courte note de portfolio qui indique le brief, votre rôle et les outils utilisés.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des jeunes et des adultes inscrits dans des programmes d'insertion professionnelle, des sportifs et des entraîneurs, et des propriétaires de petites entreprises, aux États-Unis et ailleurs. La plupart ont déjà filmé avec un téléphone ; peu ont fait plus qu'ajouter un filtre dans une application de réseau social.",
    startingPoint: "Ils savent filmer avec un téléphone et publier sur les réseaux sociaux. Ils n'ont jamais utilisé de timeline, ne connaissent pas le format d'image ni la fréquence d'images, et n'ont jamais exporté un fichier pour quelqu'un d'autre.",
    gap: "Les entreprises, les écoles, les équipes et les associations ont toutes besoin de courtes vidéos, et beaucoup d'emplois de débutant et de missions en freelance (assistant réseaux sociaux, créateur de contenu, monteur junior) demandent des bases en montage et un exemple de votre travail. Les apprenants ont besoin d'une méthode qu'ils peuvent répéter pour transformer des vidéos et un brief en une vidéo propre et terminée, et d'une réalisation finie à montrer.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque terme de montage est expliqué",
      "Appareils : un téléphone, ou un ordinateur à la maison, dans une bibliothèque ou un centre pour l'emploi ; logiciels gratuits uniquement",
      "Les menus des logiciels changent souvent, donc les leçons enseignent des actions, pas des noms de menus exacts",
      "Temps : leçons de 4 à 6 minutes, plus environ une heure de montage pratique pour la tâche finale",
      "Règles : accord des personnes filmées (et d'un parent pour toute personne de moins de 18 ans) et musique que l'apprenant a le droit d'utiliser"
    ],
    prerequisites: "Savoir filmer avec un téléphone et transférer des fichiers vers un ordinateur ou d'une application à une autre. Les personnes qui découvrent le téléphone ou l'ordinateur peuvent d'abord suivre \"Les bases de l'ordinateur\" ou \"Utiliser un smartphone et une tablette\"."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "À partir d'un court brief et d'un ensemble de vidéos brutes", action: "organiser les images dans un dossier de projet bien nommé et régler le format d'image et la fréquence d'images du projet selon l'endroit où la vidéo sera diffusée", standard: "avec chaque vidéo facile à retrouver et aucune vidéo étirée ou rognée par erreur" },
    { id: "O2", condition: "Avec un logiciel de montage gratuit", action: "faire un premier montage en coupant, en divisant et en ordonnant les vidéos sur la timeline pour former un début, un milieu et une fin", standard: "qui raconte l'histoire du brief dans la durée prévue, sans temps mort" },
    { id: "O3", condition: "À partir d'un premier montage", action: "ajouter des plans de coupe, des inserts et des transitions simples pour cacher les sauts et garder le rythme de la vidéo", standard: "en n'utilisant pas plus d'un ou deux types de transition" },
    { id: "O4", condition: "À partir d'un montage avec de la parole et de la musique", action: "équilibrer les niveaux sonores et ajouter des sous-titres exacts et du texte à l'écran", standard: "pour que chaque mot puisse être entendu et lu, que l'indicateur n'atteigne jamais le haut, et que toute la musique soit utilisée avec autorisation" },
    { id: "O5", condition: "À partir d'un montage terminé", action: "exporter la vidéo avec des réglages adaptés à la plateforme, la vérifier par rapport au brief et rédiger une courte note de portfolio", standard: "pour que le fichier se lise correctement du premier coup et que la note indique le brief, votre rôle et vos outils" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Des vidéos brutes au premier montage",
      lessons: [
        {
          title: "Lire le brief et organiser vos images",
          objectives: ["O1"],
          minutes: 5,
          goal: "Écrire un brief et créer un dossier de projet bien nommé avec vos vidéos triées.",
          text: [
            "Chaque travail de montage commence par un brief : une courte description de l'objectif de la vidéo. Un bon brief répond à cinq questions : qui va la regarder, où elle sera diffusée (par exemple YouTube, Instagram Reels, TikTok, un écran dans la vitrine d'un magasin), quelle durée elle doit avoir, quel message unique elle doit faire passer, et pour quand elle doit être prête.",
            "Ensuite, organisez-vous. Les monteurs perdent des heures à chercher des vidéos. Créez un dossier de projet avec un nom clair, comme \"2026-11 Promo boulangerie\". À l'intérieur, créez des dossiers pour la vidéo, le son, la musique, les graphismes et les exports. Copiez-y vos vidéos et donnez des noms courts aux meilleures, comme \"four-gros-plan\" ou \"interview-patronne\".",
            "Gardez une deuxième copie de vos vidéos brutes ailleurs, par exemple sur une clé USB ou dans un stockage en ligne (cloud). Si un téléphone se casse ou si un fichier est supprimé, le travail n'est pas perdu.",
            "Vérifiez les autorisations maintenant, pas après la publication. Toute personne que l'on peut clairement voir ou entendre doit accepter d'être dans la vidéo, et toute personne de moins de 18 ans a aussi besoin de l'accord d'un parent ou d'un tuteur."
          ],
          steps: ["Écrivez le brief : public, plateforme, durée, message unique, date de remise.", "Créez un dossier de projet avec un nom clair et la date.", "Ajoutez des dossiers pour la vidéo, le son, la musique, les graphismes et les exports.", "Copiez vos vidéos et renommez les meilleures.", "Sauvegardez les vidéos brutes dans un deuxième endroit.", "Vérifiez que toutes les personnes filmées ont donné leur accord."],
          words: [["Brief", "une courte description de l'objectif d'une vidéo : pour qui, où elle est diffusée, quelle durée, le message et la date de remise."], ["Images (rushes)", "les vidéos brutes que vous avez filmées, avant le montage."], ["Sauvegarder", "garder une deuxième copie de vos fichiers dans un autre endroit."], ["Client", "la personne ou l'entreprise pour qui vous faites la vidéo."]],
          slides: [
            { title: "Un brief répond à cinq questions", bullets: ["Qui va la regarder ?", "Où sera-t-elle diffusée ?", "Quelle durée ? Quel message unique ?", "Pour quand ?"] },
            { title: "Un dossier de projet clair", bullets: ["Nommez-le avec la date et le travail", "Dossiers : vidéo, son, musique, graphismes, exports", "Renommez vos meilleures vidéos"] },
            { title: "Protégez le travail", bullets: ["Sauvegardez les vidéos brutes dans un deuxième endroit", "L'accord de toutes les personnes filmées", "Un parent ou tuteur pour toute personne de moins de 18 ans"] }
          ],
          tryIt: "Choisissez la vidéo que vous ferez pour la tâche finale (les meilleurs moments d'une équipe, la promotion d'un commerce, l'histoire d'un programme d'emploi ou votre propre idée). Écrivez un brief de cinq lignes sur papier. Puis créez le dossier de projet avec ses cinq dossiers intérieurs, copiez-y 8 à 15 vidéos que vous avez filmées, et renommez les cinq meilleures.",
          youCanNow: "écrire un court brief et créer un dossier de projet où chaque vidéo est facile à retrouver.",
          quickCheck: [
            { objective: "O1", q: "Lequel de ces éléments a sa place dans le brief d'une vidéo ?", options: ["Votre couleur préférée", "L'endroit où la vidéo sera diffusée et sa durée", "Le prix de votre téléphone", "La liste de toutes vos applications"], answer: 1, why: "L'endroit de diffusion et la durée guident tous les choix de montage qui suivent." },
            { objective: "O1", q: "Votre téléphone contient la seule copie des vidéos d'un client. Que faites-vous d'abord ?", options: ["Commencer le montage tout de suite", "Supprimer les vidéos que vous n'aimez pas", "Publier les vidéos pour qu'elles soient enregistrées en ligne", "Les copier dans un deuxième endroit, comme une clé USB ou un stockage en ligne"], answer: 3, why: "Avec une sauvegarde dans un deuxième endroit, un téléphone cassé ou un fichier supprimé ne fait pas perdre le travail." }
          ]
        },
        {
          title: "Configurer le projet : forme, taille et vitesse",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choisir le format d'image, la résolution et la fréquence d'images d'un projet avant le montage.",
          text: [
            "Avant de monter, indiquez au logiciel la forme et la taille de la vidéo finale. Le format d'image est la forme. Le format large 16:9 convient à YouTube, aux ordinateurs portables et aux télévisions. Le format vertical 9:16 convient aux applications pour téléphone comme TikTok, Instagram Reels et YouTube Shorts. Le format carré 1:1 convient à certains fils d'actualité. Choisissez la forme d'après votre brief.",
            "La résolution est le nombre de points (pixels) qui forment l'image. 1920 sur 1080, souvent appelé 1080p ou Full HD, est un choix sûr pour la plupart des travaux. Pour une vidéo verticale, c'est 1080 de large sur 1920 de haut.",
            "La fréquence d'images est le nombre d'images fixes affichées chaque seconde, écrite en fps (images par seconde). Les fréquences courantes sont 24, 30 et 60. Réglez le projet sur la fréquence utilisée pour filmer la plupart de vos vidéos. Vous trouverez les détails d'une vidéo dans le logiciel ou dans les informations du fichier sur votre ordinateur ou votre téléphone.",
            "Si la forme est mauvaise, le logiciel ajoutera des bandes noires ou coupera les côtés. Si vous mélangez les fréquences d'images, les mouvements peuvent sembler saccadés. Régler cela dès le début évite beaucoup de corrections plus tard."
          ],
          steps: ["Lisez le brief : où la vidéo sera-t-elle diffusée ?", "Choisissez la forme : 16:9 large, 9:16 vertical ou 1:1 carré.", "Choisissez la taille : 1920 x 1080 en large, ou 1080 x 1920 en vertical.", "Vérifiez la fréquence d'images de vos vidéos et réglez le projet pour qu'il corresponde.", "Créez le projet et importez vos vidéos."],
          words: [["Format d'image", "la forme de la vidéo, écrite largeur sur hauteur, comme 16:9 (large) ou 9:16 (vertical)."], ["Résolution", "le nombre de pixels qui forment l'image, comme 1920 x 1080."], ["Pixel", "un tout petit point de couleur sur un écran."], ["Fréquence d'images (fps)", "le nombre d'images fixes affichées chaque seconde, comme 24, 30 ou 60."], ["Importer", "faire entrer vos vidéos dans le logiciel de montage."]],
          slides: [
            { title: "La forme : le format d'image", bullets: ["16:9 large : YouTube, ordinateurs portables, télévisions", "9:16 vertical : TikTok, Reels, Shorts", "1:1 carré : certains fils d'actualité"] },
            { title: "La taille : la résolution", bullets: ["1920 x 1080 (1080p) convient à la plupart des travaux", "Vertical : 1080 de large x 1920 de haut"] },
            { title: "La vitesse : la fréquence d'images", bullets: ["24, 30 ou 60 images par seconde", "Prenez la fréquence de la plupart de vos vidéos"] },
            { title: "Pourquoi régler cela d'abord", bullets: ["Mauvaise forme = bandes noires ou côtés coupés", "Fréquences mélangées = mouvements saccadés"] }
          ],
          sources: [
            { name: "Blackmagic Design : DaVinci Resolve (version gratuite pour Mac, Windows et Linux)", url: "https://www.blackmagicdesign.com/products/davinciresolve" },
            { name: "Microsoft Clipchamp : offres, dont l'offre gratuite", url: "https://clipchamp.com/en/pricing/" }
          ],
          tryIt: "Ouvrez un logiciel de montage gratuit : DaVinci Resolve ou Clipchamp sur un ordinateur, ou CapCut ou l'éditeur intégré de votre téléphone. Cherchez la fréquence d'images de trois de vos vidéos. Créez un nouveau projet avec la forme et la fréquence d'images demandées par votre brief, et importez vos vidéos.",
          youCanNow: "configurer un projet avec la bonne forme, la bonne taille et la bonne fréquence d'images pour l'endroit où la vidéo sera diffusée.",
          quickCheck: [
            { objective: "O1", q: "Votre brief indique que la vidéo sera un Reel Instagram. Quelle forme choisissez-vous ?", options: ["16:9 large", "4:3 ancienne télévision", "9:16 vertical", "21:9 cinéma"], answer: 2, why: "Les Reels, TikTok et les Shorts s'affichent en vertical sur un téléphone, donc le 9:16 remplit l'écran." },
            { objective: "O1", q: "La plupart de vos vidéos ont été filmées à 30 fps. Quelle fréquence d'images le projet doit-il utiliser ?", options: ["30 fps, pour correspondre aux vidéos", "60 fps, parce que plus haut est toujours mieux", "N'importe laquelle ; cela ne change rien", "24 fps, parce que le cinéma l'utilise"], answer: 0, why: "Prendre la fréquence de la plupart de vos vidéos garde des mouvements fluides." }
          ]
        },
        {
          title: "Faire un premier montage sur la timeline",
          objectives: ["O2"],
          minutes: 6,
          goal: "Couper, diviser et ordonner des vidéos sur la timeline pour raconter une histoire dans la durée prévue.",
          text: [
            "La timeline (ligne de temps) est la bande où vous placez les vidéos dans l'ordre, de gauche à droite. La tête de lecture est la ligne qui montre où vous êtes. Un premier montage est votre première version complète : les bonnes vidéos, dans le bon ordre, à peu près à la bonne durée. Il n'a pas encore besoin d'être beau.",
            "Construisez-le en trois parties. Le début attire l'attention dans les premières secondes. Le milieu montre le message principal. La fin dit au spectateur quoi faire ou quoi retenir. Pour une boulangerie : du pain chaud qui sort du four, la patronne qui explique pourquoi elle a commencé, puis l'enseigne et les horaires du magasin.",
            "Deux outils font l'essentiel du travail. Couper (rogner) enlève le début ou la fin d'une vidéo. Diviser coupe une vidéo en deux à la tête de lecture, pour pouvoir enlever une partie au milieu. Commencez chaque plan juste avant l'action et terminez-le juste après. Enlevez les temps morts : l'attente, les regards vers la caméra, les \"euh\" et les longues pauses.",
            "Regardez tout le premier montage depuis le début. S'il est plus long que ce que permet le brief, enlevez des plans entiers avant de raccourcir les bons. Enregistrez souvent, et enregistrez une copie avec un numéro de version (v1, v2) avant les gros changements."
          ],
          steps: ["Faites glisser vos meilleures vidéos sur la timeline dans l'ordre de l'histoire : début, milieu, fin.", "Coupez le début et la fin de chaque vidéo pour qu'elle commence juste avant l'action.", "Divisez les vidéos pour enlever les pauses, les erreurs et les temps morts.", "Regardez depuis le début et comparez la durée avec le brief.", "Enlevez des plans faibles entiers si c'est trop long.", "Enregistrez en v1."],
          words: [["Timeline", "la bande d'un logiciel de montage où les vidéos sont placées dans l'ordre, de gauche à droite."], ["Tête de lecture", "la ligne sur la timeline qui montre le moment que vous regardez."], ["Couper (rogner)", "raccourcir une vidéo en enlevant son début ou sa fin."], ["Diviser", "couper une vidéo en deux morceaux à la tête de lecture."], ["Premier montage", "la première version complète d'un montage, avec les bonnes vidéos dans l'ordre mais pas encore finie."], ["Temps mort", "des moments où rien d'utile ne se passe, comme l'attente ou de longues pauses."]],
          slides: [
            { title: "La timeline", bullets: ["Les vidéos dans l'ordre, de gauche à droite", "La tête de lecture montre où vous êtes", "Premier montage = première version complète"] },
            { title: "Début, milieu, fin", bullets: ["Attirer l'attention dès les premières secondes", "Montrer le message principal", "Finir par quoi faire ou quoi retenir"] },
            { title: "Couper et diviser", bullets: ["Couper : enlever le début ou la fin", "Diviser : couper une vidéo en deux à la tête de lecture", "Enlever l'attente, les pauses et les \"euh\""] },
            { title: "Vérifier et enregistrer", bullets: ["Regardez depuis le début", "Trop long ? Enlevez d'abord des plans entiers", "Enregistrez des versions : v1, v2"] }
          ],
          tryIt: "Dans votre projet, faites un premier montage de la vidéo de votre tâche finale. Placez les vidéos dans l'ordre début-milieu-fin, coupez chacune, enlevez par division au moins deux pauses ou erreurs, et arrivez à moins de 10 secondes de votre durée prévue. Enregistrez en v1 et notez sa durée.",
          youCanNow: "faire un premier montage qui raconte une histoire dans la durée prévue, sans temps mort.",
          quickCheck: [
            { objective: "O2", q: "Vous devez enlever une longue pause au milieu d'une vidéo d'interview. Quel outil utilisez-vous ?", options: ["Changer le format d'image", "Exporter la vidéo", "Ajouter une transition", "Diviser la vidéo aux deux bouts de la pause et supprimer le milieu"], answer: 3, why: "Diviser aux deux bouts de la pause permet d'enlever seulement la partie du milieu." },
            { objective: "O2", q: "Votre premier montage dure 20 secondes de trop. Qu'essayez-vous d'abord ?", options: ["Accélérer toute la vidéo", "Enlever des plans faibles entiers", "Raccourcir chaque vidéo d'une seconde", "Changer la fréquence d'images"], answer: 1, why: "Enlever les plans faibles garde les bons plans entiers et l'histoire claire." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Des vidéos brutes au premier montage",
        questions: [
          { objective: "O1", q: "La propriétaire d'un magasin demande une vidéo pour l'écran de sa vitrine. Quelle forme convient à une télévision ?", options: ["9:16 vertical", "16:9 large", "1:1 carré", "N'importe laquelle ; les télévisions s'adaptent"], answer: 1, why: "Les télévisions ont des écrans larges, donc le 16:9 les remplit sans bandes noires." },
          { objective: "O1", q: "Quel nom de dossier de projet est le plus utile ?", options: ["\"trucs\"", "\"Nouveau dossier (3)\"", "\"vidéo finale finale\"", "\"2026-11 Promo boulangerie\""], answer: 3, why: "Une date et le nom du travail rendent le dossier facile à retrouver plus tard." },
          { objective: "O2", q: "Qu'est-ce qu'un premier montage ?", options: ["La première version complète, avec les bonnes vidéos dans l'ordre", "Une vidéo avec une rayure sur l'objectif", "Le fichier final exporté", "Une vidéo mal filmée"], answer: 0, why: "Un premier montage met l'histoire en place ; les finitions viennent après." },
          { objective: "O2", q: "Où un plan doit-il généralement commencer ?", options: ["Dès que vous avez appuyé sur enregistrer", "Après la fin de l'action", "Juste avant l'action", "Au milieu de l'action"], answer: 2, why: "Commencer juste avant l'action enlève les temps morts et garde le rythme de la vidéo." },
          { objective: "O2", q: "Avant un gros changement dans votre montage, quelle est une bonne habitude ?", options: ["Supprimer l'ancienne version pour gagner de la place", "Fermer le logiciel sans enregistrer", "Changer le format d'image", "Enregistrer une copie avec un numéro de version, comme v2"], answer: 3, why: "Les copies de version permettent de revenir en arrière si le changement ne marche pas." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Finitions et livraison",
      lessons: [
        {
          title: "Rendre le montage fluide avec des plans de coupe et de meilleures coupes",
          objectives: ["O3"],
          minutes: 5,
          goal: "Ajouter des plans de coupe, un insert et un montage en L ou en J pour rendre votre premier montage plus fluide.",
          text: [
            "Quand vous enlevez une partie d'une interview, le visage saute. On appelle cela un faux raccord (jump cut). Les monteurs le cachent avec des plans de coupe (B-roll) : des images qui montrent ce dont la personne parle. Un entraîneur parle de l'entraînement ; on voit les joueurs faire des exercices. La voix continue pendant que l'image change.",
            "Un insert est un plan court sur quelque chose de proche, comme des mains, une foule ou un tableau d'affichage des scores, placé entre deux plans du même sujet. Mélangez plans larges, plans moyens et gros plans pour que le spectateur voie le lieu, les personnes et les détails.",
            "Deux astuces de professionnel sont faciles. Dans un montage en L, l'image passe au plan suivant pendant que le son du premier plan continue. Dans un montage en J, on entend le plan suivant avant de le voir. Les deux rendent le montage fluide et naturel. La plupart des logiciels permettent de dissocier ou de détacher le son de l'image pour faire cela.",
            "Utilisez peu de transitions. Les professionnels utilisent une coupe simple la plupart du temps. Utilisez une ou deux transitions simples, comme un court fondu au début et à la fin. Beaucoup de volets et de rotations tape-à-l'œil donnent l'impression qu'un débutant a fait la vidéo."
          ],
          steps: ["Regardez votre premier montage et repérez chaque faux raccord.", "Placez des plans de coupe sur la piste au-dessus de l'interview pour couvrir chaque saut.", "Ajoutez au moins un insert (mains, foule, enseigne, tableau des scores).", "Essayez un montage en L ou en J en dissociant le son de l'image.", "Utilisez des coupes simples, avec au plus une ou deux transitions simples.", "Enregistrez en v2."],
          words: [["Plan de coupe (B-roll)", "des images supplémentaires qui montrent ce dont quelqu'un parle, placées sur sa voix."], ["Faux raccord (jump cut)", "un saut soudain de l'image quand une partie d'un plan est enlevée."], ["Insert", "un plan court sur quelque chose de proche, placé entre deux plans du même sujet."], ["Montage en L et en J", "des coupes où le son et l'image changent à des moments différents, pour que la coupe paraisse fluide."], ["Transition", "un effet entre deux vidéos, comme un fondu."]],
          slides: [
            { title: "Cacher les sauts", bullets: ["Couper une interview fait sauter le visage", "Couvrez le saut avec des plans de coupe sur le sujet", "La voix continue en dessous"] },
            { title: "Mélangez vos plans", bullets: ["Plan large : le lieu", "Plan moyen : les personnes", "Gros plan : les détails", "Inserts : mains, foule, enseigne"] },
            { title: "Montage en L et en J", bullets: ["En L : l'image change, le son continue", "En J : on entend le plan suivant avant de le voir", "Dissociez le son de l'image pour le faire"] },
            { title: "Transitions : moins, c'est mieux", bullets: ["Des coupes simples la plupart du temps", "Une ou deux transitions simples au maximum"] }
          ],
          tryIt: "Ouvrez votre v1. Couvrez chaque faux raccord avec des plans de coupe, ajoutez au moins un insert et faites un montage en L ou en J. Enlevez les transitions tape-à-l'œil pour ne pas utiliser plus de deux types. Enregistrez en v2 et regardez v1 et v2 l'une après l'autre pour comparer.",
          youCanNow: "utiliser des plans de coupe, des inserts et des montages en L ou en J pour rendre un montage fluide et agréable à regarder.",
          quickCheck: [
            { objective: "O3", q: "Une interview a un faux raccord là où vous avez enlevé une phrase. Comment le cacher ?", options: ["Placer des plans de coupe sur le saut pendant que la voix continue", "Ajouter une transition qui tourne", "Monter le volume de la vidéo", "Changer la fréquence d'images"], answer: 0, why: "Les plans de coupe cachent le saut dans l'image pendant que la parole continue." },
            { objective: "O3", q: "Vous entendez la foule applaudir avant que l'image passe à la foule. Comment cela s'appelle-t-il ?", options: ["Un faux raccord", "Un montage en L", "Un premier montage", "Un montage en J"], answer: 3, why: "Dans un montage en J, le son du plan suivant commence avant son image." }
          ]
        },
        {
          title: "Corriger le son, ajouter de la musique et des sous-titres",
          objectives: ["O4"],
          minutes: 6,
          goal: "Équilibrer les niveaux de la voix et de la musique, ajouter une musique que vous avez le droit d'utiliser et ajouter des sous-titres exacts.",
          text: [
            "Les spectateurs pardonnent une image moyenne, mais pas un mauvais son. Utilisez l'indicateur de niveau sonore : il montre la force du son. S'il atteint le haut et devient rouge, le son va grésiller. Un objectif courant est que les voix montent jusqu'à environ -6 sur l'indicateur, avec la musique beaucoup plus basse sous la parole, et que rien n'atteigne 0.",
            "Utilisez uniquement de la musique que vous avez le droit d'utiliser : votre propre musique, de la musique avec une autorisation écrite, ou la bibliothèque gratuite de votre logiciel ou de votre plateforme, en respectant ses règles. La bibliothèque audio de YouTube (YouTube Audio Library) propose de la musique pour les vidéos YouTube ; certains morceaux demandent de citer l'artiste. Citer l'artiste ne vous donne pas à lui seul le droit d'utiliser la chanson de quelqu'un d'autre, et il n'existe aucun nombre de secondes sans risque.",
            "Beaucoup de gens regardent sans le son, et les sous-titres aident aussi les spectateurs sourds ou malentendants. La plupart des logiciels peuvent créer des sous-titres automatiques. Lisez-les toujours et corrigez chaque erreur, surtout les noms, les lieux et les nombres.",
            "Ajoutez du texte à l'écran avec soin : un titre court, le nom et le rôle d'une personne la première fois qu'elle parle, et un écran de fin avec le message ou l'appel à l'action. Utilisez de grandes lettres simples et gardez le texte loin des bords, là où les applications placent leurs boutons."
          ],
          steps: ["Lisez le montage et surveillez l'indicateur de niveau sonore.", "Baissez toute vidéo qui passe au rouge ; montez les voix trop faibles.", "Ajoutez une musique que vous pouvez utiliser et baissez-la sous la parole.", "Activez les sous-titres automatiques, puis lisez et corrigez chaque mot.", "Ajoutez un titre, une étiquette de nom et un écran de fin en grandes lettres simples.", "Enregistrez en v3."],
          words: [["Indicateur de niveau sonore", "la barre qui montre la force du son."], ["Saturation", "un son qui grésille quand le niveau atteint le haut de l'indicateur."], ["Libre de droits", "de la musique que vous pouvez utiliser sans payer à chaque diffusion, selon les règles de la bibliothèque ; elle a quand même des règles."], ["Sous-titres", "les paroles affichées sous forme de texte à l'écran."], ["Appel à l'action", "ce que vous voulez que le spectateur fasse ensuite, comme \"Venez nous voir samedi\"."]],
          slides: [
            { title: "Surveillez l'indicateur", bullets: ["Rouge en haut = son qui grésille", "Les voix montent jusqu'à environ -6", "La musique beaucoup plus basse sous la parole"] },
            { title: "Une musique que vous pouvez utiliser", bullets: ["Votre propre musique ou une autorisation écrite", "La bibliothèque de votre logiciel ou de votre plateforme, selon ses règles", "Citer l'artiste n'est pas une autorisation"] },
            { title: "Les sous-titres", bullets: ["Beaucoup de spectateurs regardent sans le son", "Ils aident les spectateurs sourds ou malentendants", "Lisez et corrigez chaque sous-titre automatique"] },
            { title: "Le texte à l'écran", bullets: ["Un titre court et des étiquettes de nom", "Un écran de fin avec l'appel à l'action", "De grandes lettres simples, loin des bords"] }
          ],
          sources: [
            { name: "U.S. Copyright Office (bureau américain du droit d'auteur) : questions sur l'usage équitable (fair use)", url: "https://www.copyright.gov/help/faq/faq-fairuse.html" },
            { name: "Aide YouTube : utiliser la musique et les effets sonores de la bibliothèque audio", url: "https://support.google.com/youtube/answer/3376882" }
          ],
          tryIt: "Ouvrez votre v2. Surveillez l'indicateur et corrigez toute vidéo qui passe au rouge. Ajoutez une musique que vous avez le droit d'utiliser et baissez-la sous la parole. Activez les sous-titres automatiques et corrigez chaque erreur. Ajoutez un titre, une étiquette de nom et un écran de fin. Enregistrez en v3, puis regardez-la une fois sans le son pour vérifier que les sous-titres racontent l'histoire.",
          youCanNow: "équilibrer les niveaux sonores, ajouter de la musique correctement et ajouter des sous-titres et du texte faciles à lire.",
          quickCheck: [
            { objective: "O4", q: "L'indicateur de niveau sonore devient rouge en haut quand l'entraîneur crie. Que faites-vous ?", options: ["Monter le volume de cette vidéo", "Ne rien changer ; le rouge, c'est bien", "Baisser le niveau de cette vidéo pour qu'il reste hors du rouge", "Supprimer les sous-titres"], answer: 2, why: "Le rouge en haut signifie une saturation ; baisser le niveau arrête le grésillement." },
            { objective: "O4", q: "Un client veut un tube à la mode dans sa publicité. Vous n'avez pas d'autorisation. Qu'est-ce qui est vrai ?", options: ["C'est permis si vous n'en utilisez que 10 secondes", "Citer l'artiste rend cela légal", "Les publicités peuvent utiliser n'importe quelle chanson de la radio", "Il vous faut une autorisation, ou une musique d'une bibliothèque selon ses règles"], answer: 3, why: "Il n'existe aucun nombre de secondes sans risque et citer l'artiste n'est pas une autorisation : obtenez une autorisation ou utilisez une musique de bibliothèque sous licence." }
          ]
        },
        {
          title: "Exporter, vérifier et constituer votre portfolio",
          objectives: ["O5"],
          minutes: 6,
          goal: "Exporter une vidéo terminée, la vérifier par rapport au brief et rédiger une note de portfolio.",
          text: [
            "Exporter transforme votre projet en un seul fichier vidéo. Pour la plupart des usages en ligne, choisissez un fichier MP4 avec une vidéo H.264, avec la même forme, la même taille et la même fréquence d'images que votre projet. Donnez au fichier un nom clair, comme \"promo-boulangerie-v3-9x16.mp4\", et enregistrez-le dans votre dossier des exports. Dans DaVinci Resolve, cela se fait sur la page appelée Deliver ; les autres logiciels ont un bouton comme Exporter ou Enregistrer.",
            "N'envoyez jamais un fichier que vous n'avez pas regardé. Lisez le fichier exporté du début à la fin sur l'appareil où il sera vu. Vérifiez le brief : bonne durée, bonne forme, un message clair, un son propre, des sous-titres et des noms corrects. Ensuite, envoyez-le, demandez un avis et faites les changements dans une nouvelle version. Les clients demandent souvent des changements ; cela fait normalement partie du travail.",
            "Votre portfolio est une petite collection de vos meilleurs travaux. Mettez la vidéo en ligne là où vous en avez le droit (avec l'accord du client et de toutes les personnes filmées) et écrivez une courte note : le brief, ce que vous avez fait, les outils utilisés et le résultat. Les employeurs qui recrutent des monteurs juniors, des assistants réseaux sociaux et des créateurs de contenu demandent souvent ce genre d'exemples.",
            "Les certifications peuvent aider plus tard. Certiport, une entreprise de Pearson VUE, fait passer l'examen Adobe Certified Professional in Digital Video Using Adobe Premiere (vidéo numérique avec Adobe Premiere). Blackmagic Design propose des formations et des examens en ligne pour devenir monteur certifié DaVinci Resolve. Consultez chaque page officielle pour connaître les conditions et les coûts actuels. Ce cours vous prépare à continuer d'apprendre ; il ne donne aucune de ces certifications."
          ],
          steps: ["Exportez un MP4 (H.264) avec la forme, la taille et la fréquence d'images du projet.", "Donnez au fichier un nom clair et enregistrez-le dans votre dossier des exports.", "Regardez tout le fichier sur l'appareil où il sera diffusé.", "Vérifiez-le par rapport à chaque ligne du brief.", "Envoyez-le, recueillez des avis et faites les changements dans une nouvelle version.", "Rédigez une note de portfolio : brief, votre rôle, outils, résultat."],
          words: [["Exporter", "transformer votre montage en un seul fichier vidéo terminé."], ["MP4 et H.264", "un type de fichier et un format vidéo courants, lisibles sur la plupart des téléphones, ordinateurs et sites web."], ["Portfolio", "une petite collection de vos meilleurs travaux à montrer à des employeurs ou des clients."], ["Révision", "un changement qu'un client demande après avoir vu une version."], ["Certification", "une preuve, donnée par un organisme reconnu, que vous avez réussi un test de vos compétences."]],
          slides: [
            { title: "Exporter le fichier", bullets: ["MP4 avec H.264 pour la plupart des usages en ligne", "Même forme, même taille et même fréquence d'images que le projet", "Un nom clair, enregistré dans votre dossier des exports"] },
            { title: "Vérifier avant d'envoyer", bullets: ["Regardez tout le fichier sur le vrai appareil", "Vérifiez chaque ligne du brief", "Les changements vont dans une nouvelle version"] },
            { title: "Votre note de portfolio", bullets: ["Le brief", "Ce que vous avez fait et les outils utilisés", "Le résultat ; partagez seulement avec autorisation"] },
            { title: "Des certifications à découvrir plus tard", bullets: ["Adobe Certified Professional pour Premiere (Certiport)", "Certification DaVinci Resolve (Blackmagic Design)", "Consultez les pages officielles ; ce cours ne fait que préparer"] }
          ],
          sources: [
            { name: "Certiport : examens Adobe Certified Professional", url: "https://certiport.pearsonvue.com/Certifications/Adobe/ACP/Certify" },
            { name: "Blackmagic Design : formation et certification DaVinci Resolve", url: "https://www.blackmagicdesign.com/products/davinciresolve/training" },
            { name: "U.S. Bureau of Labor Statistics (bureau américain des statistiques du travail) : monteurs vidéo et cadreurs", url: "https://www.bls.gov/ooh/media-and-communication/film-and-video-editors-and-camera-operators.htm" }
          ],
          tryIt: "Tâche finale : exportez votre v3 en MP4 dans la bonne forme, donnez-lui un nom clair et regardez-la sur l'appareil où elle sera diffusée. Vérifiez-la par rapport à votre brief et corrigez tout ce qui ne correspond pas. Puis rédigez votre note de portfolio en quatre lignes : le brief, ce que vous avez fait, les outils utilisés et le résultat.",
          youCanNow: "exporter une vidéo terminée, la vérifier par rapport à un brief et la présenter comme une pièce de portfolio.",
          quickCheck: [
            { objective: "O5", q: "Quel nom de fichier est le meilleur pour la vidéo finale ?", options: ["\"final.mp4\"", "\"promo-boulangerie-v3-9x16.mp4\"", "\"sans titre (2).mp4\"", "\"video.mp4\""], answer: 1, why: "Il indique le travail, la version et la forme, donc personne n'envoie le mauvais fichier." },
            { objective: "O5", q: "Vous venez d'exporter la vidéo. Que faites-vous avant de l'envoyer ?", options: ["L'envoyer tout de suite pour gagner du temps", "Supprimer le projet pour gagner de la place", "Regarder tout le fichier sur l'appareil où il sera diffusé et le vérifier par rapport au brief", "Changer la fréquence d'images"], answer: 2, why: "Regarder le vrai fichier permet de repérer les erreurs avant que le client les voie." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Finitions et livraison",
        questions: [
          { objective: "O3", q: "Que sont les plans de coupe (B-roll) ?", options: ["La première vidéo sur la timeline", "Un type de caméra", "Des images supplémentaires qui montrent ce dont quelqu'un parle", "Un fichier de musique"], answer: 2, why: "Les plans de coupe sont placés sur une voix pour montrer le sujet et cacher les sauts." },
          { objective: "O3", q: "Combien de types de transitions la vidéo professionnelle d'un débutant doit-elle généralement utiliser ?", options: ["Une ou deux transitions simples, avec des coupes simples la plupart du temps", "Une différente entre chaque vidéo", "Au moins dix", "Seulement des effets de rotation et de volet"], answer: 0, why: "Les professionnels utilisent surtout des coupes simples ; beaucoup de transitions tape-à-l'œil font amateur." },
          { objective: "O4", q: "Pourquoi lire les sous-titres automatiques avant d'exporter ?", options: ["Les sous-titres ralentissent la vidéo", "Les sous-titres changent le format d'image", "Les sous-titres automatiques sont toujours parfaits", "Ils se trompent souvent sur les noms, les lieux et les nombres"], answer: 3, why: "Les sous-titres automatiques font des erreurs, donc vous vérifiez et corrigez chaque mot." },
          { objective: "O4", q: "À quel niveau doit être la musique quand quelqu'un parle ?", options: ["Plus forte que la voix", "Beaucoup plus basse que la voix", "Tout en haut de l'indicateur", "Coupée et supprimée"], answer: 1, why: "Une musique basse sous la parole garde chaque mot clair." },
          { objective: "O5", q: "Un client demande deux changements après avoir regardé la v3. Quelle est la réponse professionnelle ?", options: ["Faire les changements dans une nouvelle version, la v4", "Refuser ; la vidéo est terminée", "Supprimer la v3 et tout recommencer", "Renvoyer le même fichier"], answer: 0, why: "Les révisions font normalement partie du travail, et une nouvelle version garde l'ancienne en sécurité." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases du montage vidéo",
    questions: [
      { objective: "O1", q: "Un brief dit : \"TikTok de 30 secondes pour notre food truck, pour vendredi.\" Quelle est la forme du projet ?", options: ["16:9 large", "1:1 carré", "9:16 vertical", "4:3"], answer: 2, why: "TikTok s'affiche en vertical sur les téléphones, donc le 9:16 remplit l'écran." },
      { objective: "O1", q: "Quelle est la raison principale de créer un dossier de projet bien nommé avec des dossiers intérieurs ?", options: ["Pour que chaque vidéo et chaque fichier soient faciles à retrouver", "La vidéo se lit plus vite", "Les logiciels n'ouvrent pas les fichiers sans cela", "Cela ajoute des sous-titres automatiquement"], answer: 0, why: "Des dossiers bien organisés font gagner du temps et évitent les fichiers perdus ou erronés." },
      { objective: "O1", q: "Que décrit \"1920 x 1080\" ?", options: ["La fréquence d'images", "Le format d'image seulement", "La durée en secondes", "La résolution, en pixels"], answer: 3, why: "1920 x 1080 est la largeur et la hauteur en pixels, souvent appelée 1080p." },
      { objective: "O1", q: "Vous voulez filmer un joueur de 15 ans pour les meilleurs moments d'une équipe. Qui doit donner son accord ?", options: ["Seulement l'entraîneur", "Le joueur et un parent ou tuteur", "Personne, si c'est un match public", "Seulement l'autre équipe"], answer: 1, why: "Toute personne de moins de 18 ans a besoin de l'accord d'un parent ou d'un tuteur, en plus du sien." },
      { objective: "O2", q: "Que fait l'outil pour couper (rogner) ?", options: ["Il change les couleurs", "Il enlève le début ou la fin d'une vidéo", "Il ajoute de la musique", "Il exporte le fichier"], answer: 1, why: "Couper raccourcit une vidéo par son début ou sa fin." },
      { objective: "O2", q: "Qu'est-ce que la tête de lecture ?", options: ["La première vidéo du projet", "Le logo du logiciel", "L'indicateur de niveau sonore", "La ligne sur la timeline qui montre où vous êtes"], answer: 3, why: "La tête de lecture marque le moment que vous regardez ; c'est là que se font les divisions." },
      { objective: "O2", q: "Quel ordre convient à une promotion de 45 secondes pour un salon de coiffure ?", options: ["Une coupe qu'on termine, le coiffeur qui dit ce qui rend le salon spécial, puis l'adresse et les horaires", "Les horaires, puis un long plan sur une chaise vide, puis le logo", "Dix minutes de la coupe complète", "Le coiffeur qui regarde la caméra en attendant de commencer"], answer: 0, why: "Il attire l'attention, donne le message et finit par ce qu'il faut faire." },
      { objective: "O2", q: "Lequel est un temps mort à enlever ?", options: ["Le moment où un joueur marque", "La patronne qui explique son meilleur produit", "Une longue pause où la personne dit \"euh\" et regarde ailleurs", "L'enseigne du magasin à la fin"], answer: 2, why: "Les pauses et l'attente allongent la vidéo sans rien ajouter au sens." },
      { objective: "O3", q: "Que se passe-t-il dans un montage en L ?", options: ["La vidéo devient noire", "L'image et le son s'arrêtent tous les deux", "Le son commence avant l'image", "L'image change pendant que le son du premier plan continue"], answer: 3, why: "Dans un montage en L, le son précédent continue sous la nouvelle image." },
      { objective: "O3", q: "Quel plan peut servir d'insert dans l'interview d'une boulangère ?", options: ["Le même plan d'interview encore une fois", "Un écran noir", "Un gros plan sur ses mains qui façonnent la pâte", "Un plan d'une autre vidéo sur les voitures"], answer: 2, why: "Un insert montre quelque chose de proche et lié au sujet, ce qui cache une coupe." },
      { objective: "O3", q: "Pourquoi mélanger plans larges, plans moyens et gros plans ?", options: ["Pour montrer le lieu, les personnes et les détails", "Pour rendre le fichier plus petit", "Pour changer la fréquence d'images", "Les logiciels exigent trois tailles de plan"], answer: 0, why: "Différentes tailles de plan donnent au spectateur une vue complète et gardent son intérêt." },
      { objective: "O3", q: "Votre montage a une transition tape-à-l'œil différente entre chaque vidéo. Que devez-vous changer ?", options: ["Ajouter plus de transitions", "Utiliser des coupes simples et garder une ou deux transitions simples", "Allonger les transitions", "Accélérer toute la vidéo"], answer: 1, why: "Des coupes simples avec peu de transitions simples font professionnel." },
      { objective: "O4", q: "Que signifie un indicateur de niveau sonore qui atteint le haut et devient rouge ?", options: ["Le son est parfait", "Les sous-titres sont activés", "Le son est trop fort et peut grésiller", "La musique a une autorisation"], answer: 2, why: "Le rouge en haut est une saturation, qui fait grésiller le son." },
      { objective: "O4", q: "Quelle musique pouvez-vous utiliser dans la vidéo d'un client ?", options: ["N'importe quelle chanson si vous citez l'artiste", "Une chanson de la radio si elle dure moins de 15 secondes", "Une chanson qu'un ami a mise en ligne", "La musique de la bibliothèque de votre logiciel, en respectant ses règles"], answer: 3, why: "La musique de bibliothèque selon ses règles, votre propre musique ou une autorisation écrite sont les choix sûrs." },
      { objective: "O4", q: "Pourquoi ajouter des sous-titres à une vidéo professionnelle ?", options: ["Beaucoup de gens regardent sans le son, et les sous-titres aident les spectateurs sourds ou malentendants", "Les sous-titres rendent le fichier plus petit", "Les sous-titres sont seulement pour les films", "Les plateformes suppriment les vidéos sans sous-titres"], answer: 0, why: "Les sous-titres touchent plus de spectateurs et rendent le message clair sans le son." },
      { objective: "O4", q: "Où placer le texte à l'écran dans une vidéo verticale pour téléphone ?", options: ["Tout au bord de l'écran", "Loin des bords, en grandes lettres simples", "Seulement sur la dernière image, en tout petit", "Sous les boutons de l'application"], answer: 1, why: "Les applications placent des boutons près des bords, donc le texte à cet endroit peut être caché." },
      { objective: "O5", q: "Pour la plupart des usages en ligne, quel choix d'export est sûr ?", options: ["N'importe quel type de fichier, à n'importe quelle taille", "Une image fixe", "Un MP4 avec H.264, avec la même forme, la même taille et la même fréquence d'images que le projet", "Seulement le fichier du projet"], answer: 2, why: "Un MP4 avec H.264 se lit sur la plupart des téléphones, ordinateurs et sites web." },
      { objective: "O5", q: "Que met-on dans une courte note de portfolio ?", options: ["Le brief, ce que vous avez fait, les outils utilisés et le résultat", "Votre adresse et votre numéro de téléphone", "Le mot de passe de votre logiciel", "Seulement la taille du fichier vidéo"], answer: 0, why: "Ces quatre lignes montrent à un employeur ce que vous savez faire." },
      { objective: "O5", q: "Qui fait passer l'examen Adobe Certified Professional in Digital Video Using Adobe Premiere ?", options: ["Le ministère du Travail des États-Unis", "YouTube", "N'importe quelle application de montage vidéo", "Certiport, une entreprise de Pearson VUE"], answer: 3, why: "Certiport fait passer les examens Adobe Certified Professional ; consultez sa page pour les détails actuels." },
      { objective: "O5", q: "Que vous apporte ce cours ?", options: ["Un certificat Adobe", "Une certification DaVinci Resolve", "Une licence d'État pour faire du montage vidéo", "Une préparation et une pièce de portfolio, pas une certification"], answer: 3, why: "Le cours vous prépare ; les certifications viennent d'Adobe par Certiport ou de Blackmagic Design." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 2, 4, 7, 8, 11, 12, 13, 16, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie, exportez une nouvelle version et réessayez.",
    criteria: [
      { name: "Organisation et configuration", objective: "O1", notYet: "Les vidéos sont éparpillées ou la forme ne correspond pas à la plateforme (bandes noires ou côtés coupés).", meets: "Un dossier de projet bien nommé avec des dossiers intérieurs, une sauvegarde, et une forme et une fréquence d'images du projet conformes au brief.", exceeds: "Les meilleures vidéos sont renommées et l'apprenant sait expliquer pourquoi il a choisi la forme et la fréquence d'images." },
      { name: "Histoire et durée", objective: "O2", notYet: "Les vidéos ne sont pas dans l'ordre, il y a des temps morts, ou la vidéo est loin de la durée prévue.", meets: "Un début, un milieu et une fin clairs ; aucun temps mort ; à 5 secondes près de la durée prévue.", exceeds: "Les premières secondes attirent l'attention et chaque plan a sa raison d'être." },
      { name: "Montage fluide", objective: "O3", notYet: "Des faux raccords sont visibles ou beaucoup de transitions tape-à-l'œil sont utilisées.", meets: "Des plans de coupe ou des inserts cachent les sauts ; pas plus de deux types de transition.", exceeds: "Comprend un montage en L ou en J propre et un bon mélange de plans larges, moyens et gros plans." },
      { name: "Son et sous-titres", objective: "O4", notYet: "Le son grésille ou s'entend mal, les sous-titres ont des erreurs, ou la musique n'a pas d'autorisation.", meets: "Des voix claires, la musique sous la parole, des sous-titres exacts, et uniquement de la musique que l'apprenant peut utiliser.", exceeds: "Les étiquettes de nom et l'écran de fin sont lisibles sur un téléphone, et l'artiste est cité quand la bibliothèque l'exige." },
      { name: "Livraison et présentation", objective: "O5", notYet: "Le fichier est mal nommé, ne se lit pas, ou la note de portfolio manque.", meets: "Un MP4 au nom clair qui se lit sur l'appareil prévu, vérifié par rapport au brief, avec une note de portfolio de quatre lignes.", exceeds: "L'apprenant a recueilli des avis et livré une version révisée, et la note indique ce qui a changé." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui ajoutent la vidéo finale à un portfolio ou à une candidature dans les 30 jours (questionnaire de suivi)",
      "Apprenants qui réalisent un travail de montage payé ou bénévole pour une entreprise, une équipe, une école ou une association dans les 90 jours",
      "Apprenants qui poursuivent avec un autre cours de montage ou une certification comme Adobe Certified Professional ou la certification DaVinci Resolve"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone qui filme, et 8 à 15 courtes vidéos filmées par l'apprenant lui-même",
      "Un logiciel de montage gratuit : DaVinci Resolve ou Microsoft Clipchamp sur un ordinateur, ou CapCut ou l'éditeur intégré du téléphone",
      "Une clé USB ou un stockage en ligne pour la sauvegarde",
      "Des écouteurs ou un casque pour vérifier le son",
      "Environ 2 heures au total : leçons, contrôles et temps de montage pour la tâche finale"
    ],
    facilitatorNotes: [
      "Dans une salle informatique, vérifiez avant le cours que le logiciel choisi s'installe et fonctionne sur les ordinateurs du programme ; DaVinci Resolve demande un ordinateur plus puissant qu'un éditeur en ligne comme Clipchamp.",
      "Donnez aux apprenants qui n'ont pas d'images un court brief d'entraînement et laissez-les filmer autour du bâtiment, avec l'accord de toutes les personnes filmées.",
      "Vérifiez les règles d'âge de chaque logiciel pour les jeunes apprenants, et obtenez l'accord d'un parent ou d'un tuteur pour toute personne de moins de 18 ans qui apparaît dans une vidéo.",
      "Les menus changent souvent : montrez les actions (importer, couper, diviser, dissocier le son, sous-titres, exporter) en direct dans le logiciel utilisé par le groupe.",
      "Organisez une courte projection où les apprenants montrent leurs vidéos et donnent leur avis en suivant les lignes de la grille, une ligne à la fois."
    ]
  }
};
