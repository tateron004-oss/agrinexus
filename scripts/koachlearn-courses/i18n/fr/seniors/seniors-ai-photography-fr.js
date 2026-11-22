"use strict";

// Koach Learn course (French translation of seniors/seniors-ai-photography.js). Rules: scripts/koachlearn-courses/README.md, "Translations".
// As in the English: editing menus differ by phone and app, so lessons describe the action rather than exact menu names.

module.exports = {
  id: "seniors-ai-photography-fr",
  lang: "fr",
  translationOf: "seniors-ai-photography",
  category: "Seniors and Technology",
  name: "L'IA pour la photographie",
  skills: "Prendre des photos nettes au téléphone, Utiliser l'amélioration automatique et les retouches, Effacer de petits détails gênants avec l'IA, Retrouver des photos par la recherche, Créer un album à partager en famille",
  outcome: "prendre une photo nette avec votre téléphone, l'améliorer avec les outils de retouche automatiques et d'IA, retrouver d'anciennes photos par la recherche et partager un petit album avec votre famille.",
  about: [
    "Ce cours s'adresse aux personnes âgées qui aiment photographier leurs petits-enfants, leur jardin, leurs animaux, leurs voyages et les réunions de famille, et qui veulent de belles photos sans apprendre à manier un appareil compliqué.",
    "L'appareil photo et l'application Photos de votre téléphone contiennent déjà des fonctions d'IA : l'amélioration automatique, des outils qui effacent de petits détails gênants, et une recherche capable de trouver « chien » ou « plage » parmi des milliers de photos. Vous apprendrez à les utiliser, et aussi à être honnête sur les photos retouchées.",
    "Chaque leçon dure environ cinq minutes. Gardez votre téléphone ou votre tablette avec vous et entraînez-vous sur vos propres photos. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Prenez trois photos de quelque chose que vous aimez (une personne avec son accord, un animal, une plante ou un plat). Améliorez la meilleure avec l'amélioration automatique et une autre retouche, retrouvez deux photos plus anciennes par la recherche de votre application Photos, et partagez les trois dans un petit album ou un message avec un proche.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des personnes âgées qui aiment prendre et partager des photos de leurs petits-enfants, de leurs animaux, de leur jardin, de leurs repas et de leurs voyages, et qui ont souvent des boîtes de vieux tirages de famille.",
    startingPoint: "Elles savent prendre une photo avec l'appareil photo d'un téléphone. Beaucoup trouvent leurs photos floues ou sombres, n'ont jamais ouvert l'écran Modifier, font défiler longtemps pour retrouver de vieilles photos et ne savent pas bien comment partager un album.",
    gap: "Les photos sont l'un des principaux moyens pour une famille de rester proche. Des photos nettes, des retouches simples avec l'IA, une recherche rapide, des albums partagés et des copies numériques des vieux tirages aident les seniors à partager et à garder leurs souvenirs, tandis que demander la permission et être honnête sur les retouches par IA gardent la confiance dans la famille.",
    constraints: [
      "Niveau de lecture : mots simples, phrases courtes et étapes grandes et simples",
      "Appareils : un smartphone avec un appareil photo ; les applications photo et les outils d'IA changent selon le téléphone, et certains téléphones n'ont pas de gomme IA",
      "Temps : environ 5 minutes par leçon, à un rythme tranquille, avec des exercices",
      "Permission : demander aux personnes, et aux parents des enfants, avant de partager leurs photos",
      "Honnêteté : les retouches par IA et les photos colorisées sont signalées, et les originaux sont gardés"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avec l'appareil photo de votre téléphone", action: "prendre une photo nette et bien éclairée en nettoyant l'objectif, en tenant le téléphone immobile, en utilisant une bonne lumière et en touchant l'écran pour faire la mise au point", standard: "en gardant la meilleure de quelques prises" },
    { id: "O2", condition: "À partir d'une photo sur votre téléphone", action: "améliorer la photo avec l'amélioration automatique, le recadrage et le redressement", standard: "et revenir en arrière avec Revenir si vous changez d'avis" },
    { id: "O3", condition: "À partir d'une photo avec un petit détail gênant", action: "effacer le détail gênant avec un outil de gomme IA et être honnête sur la façon dont la photo a été retouchée", standard: "sans changer ce qui s'est vraiment passé d'une façon trompeuse" },
    { id: "O4", condition: "À partir d'une photothèque avec beaucoup d'images", action: "trouver des photos en cherchant un objet, un lieu ou une date, et marquer des favoris", standard: "en trouvant deux photos anciennes sans faire défiler" },
    { id: "O5", condition: "À partir de plusieurs photos à partager", action: "créer un album ou un message et le partager avec un membre de la famille", standard: "après avoir demandé la permission pour les photos d'autres personnes" },
    { id: "O6", condition: "À partir d'une vieille photo imprimée", action: "faire une copie numérique de la photo et l'améliorer, en signalant toute version colorisée par l'IA", standard: "avec des bords droits, peu de reflets et l'original gardé" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Prendre et améliorer des photos",
      lessons: [
        {
          objectives: ["O1","O5"],
          title: "Prendre une photo nette avec votre téléphone",
          minutes: 5,
          goal: "Prendre une photo nette et bien éclairée avec votre téléphone.",
          text: [
            "Les bonnes photos commencent par quelques habitudes simples. Essuyez doucement l'objectif avec un chiffon doux ; les traces de doigts rendent les photos floues. Tenez le téléphone à deux mains, les coudes près du corps, pour des photos stables.",
            "La lumière compte plus que tout. Tournez votre sujet vers une fenêtre ou la lumière du jour, la lumière derrière vous et non derrière lui. Touchez l'écran sur le visage de la personne ou la fleur que vous voulez nette ; l'appareil fait la mise au point à cet endroit.",
            "Approchez-vous et remplissez l'image avec ce qui compte. Prenez plusieurs photos au lieu d'une ; vous garderez la meilleure et supprimerez les autres. Demandez toujours l'accord des personnes, surtout des parents de vos petits-enfants, avant de partager leurs photos."
          ],
          steps: ["Essuyez l'objectif avec un chiffon doux.", "Tenez le téléphone à deux mains.", "Placez la lumière derrière vous, face à votre sujet.", "Touchez l'écran là où vous voulez la netteté.", "Prenez plusieurs photos et gardez la meilleure."],
          words: [["Objectif", "le petit verre rond au dos du téléphone à travers lequel l'appareil photo voit."], ["Mise au point", "rendre une partie de la photo nette et claire."]],
          slides: [
            { title: "Avant la photo", bullets: ["Essuyez doucement l'objectif", "Tenez à deux mains, coudes serrés"] },
            { title: "Lumière et mise au point", bullets: ["Lumière derrière vous, sur votre sujet", "Touchez l'écran pour faire la mise au point"] },
            { title: "Obtenir la meilleure photo", bullets: ["Approchez-vous", "Prenez-en plusieurs, gardez la meilleure", "Demandez avant de partager des photos de personnes"] }
          ],
          tryIt: "Essuyez votre objectif, puis prenez trois photos d'une fleur, d'un animal ou d'un objet près d'une fenêtre. Touchez l'écran pour faire la mise au point à chaque fois. Regardez-les et choisissez votre préférée.",
          youCanNow: "prendre une photo nette et bien éclairée avec votre téléphone.",
          quickCheck: [
            { objective: "O1", q: "Pourquoi toucher l'écran sur un visage avant de prendre la photo ?", options: ["Cela fait dézoomer", "Cela fait la mise au point de l'appareil sur cet endroit", "Cela supprime la photo", "Cela allume le flash"], answer: 1, why: "Toucher l'écran dit à l'appareil où faire la mise au point, pour que cet endroit soit net." },
            { objective: "O1", q: "Vous photographiez votre amie à l'intérieur. Où vous placez-vous ?", options: ["Avec la fenêtre derrière votre amie", "Dans un coin sombre", "Avec la fenêtre derrière vous, pour que la lumière tombe sur votre amie", "Loin, à l'autre bout de la pièce"], answer: 2, why: "La lumière doit éclairer votre sujet : elle doit être derrière vous, pas derrière lui." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Amélioration automatique et retouches simples",
          minutes: 5,
          goal: "Améliorer une photo en une touche, la recadrer et la redresser.",
          text: [
            "Votre application Photos a un bouton Modifier. Ouvrez une photo et touchez Modifier. La plupart des applications ont un bouton automatique en une touche, souvent une baguette magique, qui utilise l'IA pour corriger la luminosité, les couleurs et le contraste en une seconde.",
            "Ensuite, recadrez pour retirer l'espace vide et redressez un horizon penché. Cherchez l'outil de recadrage (souvent un carré avec des flèches), faites glisser les coins vers l'intérieur et tournez un peu si besoin.",
            "En général, les retouches ne détruisent pas l'original. La plupart des applications permettent de revenir en arrière avec Revenir à l'original ou Annuler. Touchez OK ou Enregistrer quand vous êtes satisfait."
          ],
          steps: ["Ouvrez la photo et touchez Modifier.", "Touchez le bouton automatique ou la baguette magique.", "Utilisez l'outil de recadrage pour retirer l'espace vide.", "Redressez si l'image penche.", "Touchez OK ou Enregistrer ; revenez à l'original si vous changez d'avis."],
          words: [["Amélioration", "rendre automatiquement une photo plus lumineuse et plus colorée."], ["Recadrer", "couper les bords d'une photo."]],
          slides: [
            { title: "Une touche pour mieux faire", bullets: ["Ouvrez la photo, touchez Modifier", "Touchez le bouton automatique ou la baguette magique"] },
            { title: "Recadrer et redresser", bullets: ["Retirez l'espace vide", "Redressez les horizons penchés"] },
            { title: "Aucun risque", bullets: ["La plupart des applications gardent l'original", "Revenir à l'original ou Annuler", "Touchez OK ou Enregistrer"] }
          ],
          tryIt: "Ouvrez votre photo préférée de la leçon 1. Utilisez l'amélioration automatique, recadrez-la un peu et enregistrez-la. Puis comparez-la à l'original.",
          youCanNow: "améliorer une photo avec l'amélioration automatique, le recadrage et le redressement.",
          quickCheck: [
            { objective: "O2", q: "Que fait le recadrage d'une photo ?", options: ["Il coupe les bords et l'espace vide", "Il rend les couleurs plus vives", "Il partage la photo", "Il supprime la photo"], answer: 0, why: "Recadrer coupe l'espace vide pour que l'image soit remplie par ce qui compte." },
            { objective: "O2", q: "Vous avez fait des retouches et maintenant la photo est moins belle. Que faites-vous ?", options: ["Supprimer la photo", "Faire une capture d'écran", "Faire encore plus de retouches", "Toucher Revenir ou Annuler pour revenir en arrière"], answer: 3, why: "Les retouches n'abîment généralement pas l'original ; Revenir ou Annuler le fait revenir." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Les outils d'IA qui effacent les détails gênants",
          minutes: 5,
          goal: "Effacer un petit détail gênant d'une photo avec une gomme IA, et savoir quand dire honnêtement qu'une photo est retouchée.",
          text: [
            "Beaucoup de téléphones et d'applications photo récents ont une gomme IA : vous entourez ou coloriez un petit détail dont vous ne voulez pas, comme une poubelle, un inconnu à l'arrière-plan ou un fil électrique, et l'IA remplit l'espace.",
            "Cherchez dans l'écran Modifier un outil appelé par exemple Gomme magique, Nettoyer ou Effaceur d'objets. Les noms changent selon les téléphones, et certains n'en ont pas. Si le vôtre n'en a pas, demandez à un assistant IA : « Comment enlever un objet d'une photo sur mon téléphone ? » en lui donnant le modèle de votre téléphone.",
            "Les petits nettoyages sont acceptables pour les photos de famille. Mais n'utilisez pas l'IA pour changer ce qui s'est vraiment passé d'une façon qui pourrait tromper les gens, et soyez honnête si quelqu'un vous demande si une photo a été retouchée."
          ],
          steps: ["Ouvrez la photo et touchez Modifier.", "Cherchez un outil de gomme ou de nettoyage.", "Coloriez ou entourez le petit détail gênant.", "Vérifiez le résultat et enregistrez, ou annulez.", "Soyez honnête au sujet des photos retouchées."],
          words: [["Gomme IA", "un outil qui retire un objet d'une photo et remplit l'arrière-plan."], ["Tromper", "faire croire à quelqu'un une chose qui n'est pas vraie."]],
          slides: [
            { title: "Effacez les petits détails gênants", bullets: ["Poubelles, inconnus, fils électriques", "Coloriez-les ou entourez-les", "L'IA remplit l'espace"] },
            { title: "Trouvez l'outil", bullets: ["Les noms changent selon les téléphones", "Cherchez une gomme ou un nettoyage dans Modifier", "Demandez à l'IA en donnant votre modèle"] },
            { title: "Soyez honnête", bullets: ["Les petits nettoyages sont acceptables", "Ne changez pas ce qui s'est vraiment passé", "Dites-le si une photo a été retouchée"] }
          ],
          tryIt: "Trouvez une photo avec un petit détail gênant. Cherchez dans Modifier un outil de gomme ou de nettoyage et essayez de l'effacer. Si votre téléphone n'en a pas, demandez à un assistant IA comment faire sur votre modèle.",
          youCanNow: "utiliser une gomme IA pour nettoyer une photo, et l'utiliser honnêtement.",
          quickCheck: [
            { objective: "O3", q: "Que fait une gomme IA ?", options: ["Elle supprime toute la photo", "Elle enlève un petit objet que vous passez au pinceau et remplit l'espace", "Elle ajoute des personnes sur une photo", "Elle met la photo en noir et blanc"], answer: 1, why: "Vous passez le pinceau ou entourez un petit détail gênant, et l'IA remplit l'espace." },
            { objective: "O3", q: "Votre petit-fils vous demande si vous avez retouché la photo de la plage. Vous avez enlevé une poubelle. Que dites-vous ?", options: ["Dire que non, elle n'a jamais été retouchée", "Changer de sujet", "Supprimer la photo", "Dire honnêtement que vous avez enlevé une poubelle"], answer: 3, why: "Les petits nettoyages sont acceptables, mais soyez honnête si quelqu'un demande si une photo a été retouchée." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Prendre et améliorer des photos",
        questions: [
          { objective: "O1", q: "Vos photos sont floues. Quelle chose simple essayer d'abord ?", options: ["Secouer le téléphone", "Acheter un nouveau téléphone", "Essuyer l'objectif avec un chiffon doux", "Éteindre l'écran"], answer: 2, why: "Les traces de doigts sur l'objectif rendent les photos floues." },
          { objective: "O1", q: "Où doit être la lumière pour un bon portrait ?", options: ["Sur votre sujet, derrière vous", "Derrière votre sujet", "Nulle part", "Sous la table"], answer: 0, why: "La lumière sur le visage le montre clairement." },
          { objective: "O1", q: "À quoi sert de toucher l'écran avant la photo ?", options: ["À envoyer la photo", "À supprimer la photo", "À lancer de la musique", "À faire la mise au point à cet endroit"], answer: 3, why: "Toucher indique à l'appareil où faire la mise au point." },
          { objective: "O2", q: "Que fait en général la baguette magique ou le bouton automatique ?", options: ["Il supprime la photo", "Il corrige luminosité et couleurs en une touche", "Il la publie pour tout le monde", "Il l'imprime"], answer: 1, why: "C'est une amélioration par IA en une touche." },
          { objective: "O3", q: "Quand n'est-il PAS acceptable d'utiliser une gomme IA ?", options: ["Pour enlever une poubelle", "Pour changer ce qui s'est vraiment passé de façon trompeuse", "Pour enlever un fil électrique", "Pour arranger une photo de famille"], answer: 1, why: "Les retouches ne doivent pas tromper les gens." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Retrouver, ranger et partager",
      lessons: [
        {
          objectives: ["O4"],
          title: "Retrouver des photos par la recherche",
          minutes: 5,
          goal: "Retrouver d'anciennes photos en tapant un mot dans la recherche de votre application Photos.",
          text: [
            "Si vous avez des milliers de photos, les faire défiler est fatigant. Les applications comme Apple Photos et Google Photos utilisent l'IA pour reconnaître ce qu'il y a sur vos images : vous pouvez donc chercher « chien », « plage », « gâteau d'anniversaire » ou « neige ».",
            "Ouvrez votre application Photos, touchez Rechercher (souvent une loupe) et tapez un mot. Vous pouvez aussi chercher par lieu (« Floride ») ou par mois et année (« juillet 2019 »). Beaucoup d'applications peuvent regrouper les photos d'un même visage pour que vous nommiez les personnes ; c'est facultatif, et vous pouvez le désactiver dans les réglages.",
            "Utilisez les favoris pour garder vos meilleures photos ensemble : touchez le cœur sur une photo, puis retrouvez tous les favoris dans un seul album."
          ],
          steps: ["Ouvrez votre application Photos.", "Touchez Rechercher ou la loupe.", "Tapez un objet, un lieu ou une date.", "Touchez le cœur sur les photos que vous aimez pour en faire des favoris."],
          words: [["Album", "un groupe de photos rangées ensemble, comme une page d'album photo."], ["Favoris", "les photos marquées d'un cœur pour les retrouver vite."]],
          slides: [
            { title: "Laissez l'IA trouver vos photos", bullets: ["Cherchez « chien », « plage », « gâteau d'anniversaire »", "Ou un lieu, ou un mois et une année"] },
            { title: "Comment chercher", bullets: ["Ouvrez votre application Photos", "Touchez la loupe", "Tapez un mot"] },
            { title: "Gardez les meilleures", bullets: ["Touchez le cœur pour les favoris", "Le regroupement des visages est facultatif"] }
          ],
          tryIt: "Cherchez deux choses dans votre application Photos, par exemple « fleur » et un lieu que vous avez visité. Mettez en favori une photo de chaque recherche.",
          youCanNow: "retrouver d'anciennes photos par la recherche et garder les meilleures en favoris.",
          quickCheck: [
            { objective: "O4", q: "Comment une application photo peut-elle trouver toutes vos photos de neige ?", options: ["L'IA reconnaît ce qu'il y a sur vos photos, donc vous pouvez chercher \"neige\"", "Elle demande à votre famille", "Elle lit les noms de fichiers que vous avez tapés", "Elle ne peut pas ; vous devez faire défiler"], answer: 0, why: "Les applications photo utilisent l'IA pour reconnaître des choses sur les images, pour que vous puissiez chercher avec un mot." },
            { objective: "O4", q: "Vous voulez trouver les photos de votre voyage de juillet 2019. Que tapez-vous dans Rechercher ?", options: ["\"Photos\"", "\"juillet 2019\"", "\"Appareil photo\"", "Rien ; vous faites défiler"], answer: 1, why: "Vous pouvez chercher par mois et année, par lieu ou par objet." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Créer et partager un album",
          minutes: 6,
          goal: "Créer un album et le partager avec la famille.",
          text: [
            "Un album est une collection de photos sur un thème, comme « Été au lac » ou « La première année d'Emma ». En faire un est une belle façon de partager des souvenirs.",
            "Dans la plupart des applications : choisissez plusieurs photos en touchant Sélectionner puis chaque photo, touchez le bouton Partager ou le signe plus, et choisissez de les ajouter à un nouvel album ou à un album partagé. Donnez-lui un nom. Un album partagé permet aux proches que vous invitez de voir les photos, et souvent d'ajouter les leurs.",
            "Vous pouvez aussi simplement envoyer quelques photos par SMS ou par e-mail. Avant de partager des photos de vos petits-enfants, demandez à leurs parents si c'est d'accord et avec qui partager."
          ],
          steps: ["Touchez Sélectionner et choisissez plusieurs photos.", "Touchez Partager ou le signe plus.", "Choisissez un nouvel album ou un album partagé et nommez-le.", "Invitez vos proches par leur nom, leur numéro ou leur e-mail.", "Demandez aux parents avant de partager des photos d'enfants."],
          words: [["Album partagé", "un album que les personnes invitées peuvent voir et souvent compléter."], ["Sélectionner", "choisir plusieurs éléments à la fois."]],
          slides: [
            { title: "Un album raconte une histoire", bullets: ["« Été au lac »", "« La première année d'Emma »"] },
            { title: "Créez-en un", bullets: ["Touchez Sélectionner, choisissez les photos", "Touchez Partager ou +", "Nouvel album ou album partagé, puis nommez-le"] },
            { title: "Partagez avec soin", bullets: ["Invitez vos proches", "Ou envoyez-en quelques-unes par SMS ou e-mail", "Demandez aux parents avant de partager des photos d'enfants"] }
          ],
          tryIt: "Créez un album de cinq photos préférées avec un nom clair. Partagez-le, ou envoyez deux de ces photos, à un proche.",
          youCanNow: "créer un album photo et le partager avec votre famille.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qu'un album partagé ?", options: ["Un livre photo en papier", "Des photos que vous seul pouvez voir", "Un album que les membres de la famille que vous invitez peuvent voir, et souvent compléter", "Une liste de favoris"], answer: 2, why: "Un album partagé permet aux personnes que vous invitez de voir les photos, et souvent d'ajouter les leurs." },
            { objective: "O5", q: "Vous voulez partager des photos de votre petite-fille dans un album de famille. Que faites-vous d'abord ?", options: ["Demander à ses parents si c'est d'accord et avec qui les partager", "Les publier pour tout le monde", "Les partager avec tous vos contacts", "Effacer son visage"], answer: 0, why: "Demandez aux parents avant de partager des photos d'enfants." }
          ]
        },
        {
          objectives: ["O6","O2"],
          title: "Faire entrer les vieux tirages dans votre téléphone",
          minutes: 5,
          goal: "Transformer une vieille photo papier en copie numérique et l'améliorer.",
          text: [
            "Beaucoup de familles ont des boîtes de vieux tirages. Vous pouvez en faire des copies numériques pour les partager et les protéger, avec seulement votre téléphone.",
            "Posez la photo bien à plat près d'une fenêtre, hors du soleil direct, et photographiez-la bien d'en haut pour que les bords restent droits. Des applications de numérisation gratuites, comme PhotoScan de Google, sont faites pour cela et réduisent les reflets. Ensuite, utilisez l'amélioration automatique et le recadrage, comme dans la leçon 2.",
            "Certaines applications utilisent l'IA pour coloriser ou réparer les vieilles photos. C'est amusant, mais les couleurs sont une supposition de l'IA, pas la réalité. Gardez aussi la numérisation d'origine, et indiquez que les copies sont colorisées quand vous les partagez. Vous pouvez demander à un assistant IA de vous aider à écrire une courte légende avec les noms et l'année."
          ],
          steps: ["Posez le tirage à plat, à la lumière douce du jour.", "Tenez le téléphone bien au-dessus.", "Prenez la photo, ou utilisez une application de numérisation pour réduire les reflets.", "Améliorez et recadrez.", "Gardez l'original ; indiquez toute copie colorisée par IA."],
          words: [["Numériser", "faire une copie numérique d'une photo ou d'un document papier."], ["Reflet", "un éclat lumineux sur une photo, dû à la lumière qui s'y reflète."], ["Coloriser", "ajouter des couleurs à une photo en noir et blanc."]],
          slides: [
            { title: "Sauvez vos vieux tirages", bullets: ["Des copies numériques à partager et à protéger"] },
            { title: "Comment copier", bullets: ["À plat, à la lumière douce du jour", "Téléphone bien au-dessus", "Une application de numérisation réduit les reflets"] },
            { title: "La colorisation par IA", bullets: ["Les couleurs sont une supposition", "Gardez la numérisation d'origine", "Indiquez les copies colorisées"] }
          ],
          tryIt: "Tâche finale : prenez trois nouvelles photos de quelque chose que vous aimez, améliorez la meilleure avec l'amélioration automatique et une autre retouche, retrouvez deux photos plus anciennes par la recherche et partagez les trois dans un petit album ou un message avec votre famille. Si vous avez un vieux tirage, ajoutez-en aussi une copie numérisée.",
          youCanNow: "prendre, améliorer, retrouver, ranger et partager des photos, y compris des copies de vieux tirages de famille.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qu'un reflet sur la photo d'un tirage ?", options: ["Un visage flou", "Une tache brillante due à la lumière sur la photo", "Une marque de recadrage", "Un coin manquant"], answer: 1, why: "Un reflet est une tache brillante ; les applications de numérisation comme PhotoScan aident à le réduire." },
            { objective: "O6", q: "Une application a colorisé la photo de mariage de vos parents. Comment la partagez-vous ?", options: ["Dire qu'elle a toujours été en couleur", "Supprimer l'original en noir et blanc", "Indiquer qu'elle est colorisée et garder la numérisation d'origine", "N'en parler à personne"], answer: 2, why: "Les couleurs de l'IA sont une supposition, donc signalez les copies colorisées et gardez l'original." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Retrouver, ranger et partager",
        questions: [
          { objective: "O4", q: "Comment retrouver vite toutes vos photos de plage ?", options: ["Demander à un inconnu", "Faire défiler pendant une heure", "Supprimer les autres photos", "Chercher « plage » dans votre application Photos"], answer: 3, why: "La recherche par IA reconnaît le contenu des photos." },
          { objective: "O4", q: "Que fait le cœur touché sur une photo ?", options: ["Il la met en favori", "Il la supprime", "Il la publie pour tout le monde", "Il l'imprime"], answer: 0, why: "Les favoris sont gardés ensemble pour être retrouvés facilement." },
          { objective: "O5", q: "Qu'est-ce qu'un album partagé ?", options: ["Un livre en papier", "Un album supprimé", "Un album que les personnes invitées peuvent voir", "Une liste de mots de passe"], answer: 2, why: "Les albums partagés permettent à la famille de voir et d'ajouter des photos." },
          { objective: "O5", q: "Avant de partager des photos de vos petits-enfants, vous devez :", options: ["Rien", "Les publier partout", "Les imprimer pour des inconnus", "Demander à leurs parents"], answer: 3, why: "Les parents décident avec qui partager les photos de leurs enfants." },
          { objective: "O6", q: "Une application d'IA colorise une vieille photo en noir et blanc. Les couleurs sont :", options: ["Tirées du film d'origine", "Exactement la réalité", "Une supposition de l'IA", "Toujours justes"], answer: 2, why: "La colorisation est une supposition ; gardez et indiquez l'original." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour la photographie",
    questions: [
      { objective: "O1", q: "L'objectif, c'est :", options: ["L'écran", "Le petit verre à travers lequel l'appareil voit", "La batterie", "Le chargeur"], answer: 1, why: "L'objectif capte l'image." },
      { objective: "O1", q: "Pour des photos stables, tenez le téléphone :", options: ["À deux mains, coudes serrés", "Avec un doigt", "Au-dessus de la tête", "À l'envers"], answer: 0, why: "Deux mains le gardent stable." },
      { objective: "O1", q: "Pour un portrait, la lumière doit être :", options: ["Sur le visage de la personne", "Derrière la personne", "Éteinte", "Sous la personne"], answer: 0, why: "La lumière sur le visage le montre clairement." },
      { objective: "O1", q: "Prendre plusieurs photos aide parce que :", options: ["Les téléphones ont besoin d'entraînement", "Vous pouvez garder la meilleure", "Cela économise la batterie", "Cela efface les vieilles photos"], answer: 1, why: "Plus de photos, plus de chances d'en avoir une très bonne." },
      { objective: "O2", q: "Pour commencer à retoucher une photo, touchez :", options: ["Partager", "Supprimer", "Modifier", "Réglages"], answer: 2, why: "Modifier ouvre les outils de retouche." },
      { objective: "O2", q: "« Recadrer » veut dire :", options: ["Supprimer", "Ajouter des couleurs", "Partager", "Couper les bords"], answer: 3, why: "Recadrer coupe les bords de la photo." },
      { objective: "O2", q: "Si vos retouches ne vous plaisent pas, vous pouvez en général :", options: ["Racheter l'original", "Ne jamais revenir en arrière", "Revenir à l'original ou Annuler", "Redémarrer le téléphone"], answer: 2, why: "La plupart des applications gardent l'original." },
      { objective: "O3", q: "Une gomme IA sert à :", options: ["Effacer un petit détail gênant d'une photo", "Supprimer toute votre photothèque", "Imprimer des photos", "Appeler la famille"], answer: 0, why: "Elle retire des objets et remplit l'espace." },
      { objective: "O3", q: "Votre téléphone ne semble pas avoir de gomme IA. Une bonne idée est de :", options: ["Supprimer l'application Photos", "Abandonner la photo", "Partager votre mot de passe", "Demander à un assistant IA comment faire sur votre modèle"], answer: 3, why: "Les noms des outils changent ; l'IA peut vous guider." },
      { objective: "O3", q: "Utiliser l'IA pour changer ce qui s'est vraiment passé sur une photo afin de tromper les gens est :", options: ["Toujours acceptable", "Trompeur et à éviter", "Obligatoire", "Une fonction de sécurité"], answer: 1, why: "Les retouches ne doivent pas tromper." },
      { objective: "O4", q: "La recherche de l'application Photos peut trouver des images par :", options: ["Seulement leur numéro de fichier", "Objets, lieux et dates", "Seulement la couleur", "Rien"], answer: 1, why: "L'IA reconnaît le contenu, les lieux et les dates." },
      { objective: "O4", q: "Le regroupement des visages dans une application Photos est :", options: ["Un mot de passe", "Obligatoire", "Un virus", "Facultatif et peut être désactivé"], answer: 3, why: "Vous choisissez de l'utiliser ou non." },
      { objective: "O5", q: "Un album, c'est :", options: ["Un groupe de photos rangées ensemble", "Une seule photo", "Un appareil photo", "Un filtre"], answer: 0, why: "Les albums rassemblent des photos liées." },
      { objective: "O5", q: "Pour choisir plusieurs photos à la fois, touchez :", options: ["Appareil photo", "Supprimer", "Sélectionner", "Réglages"], answer: 2, why: "Sélectionner permet de choisir plusieurs photos." },
      { objective: "O5", q: "Une façon simple de partager quelques photos est de :", options: ["Les publier sur la page d'un inconnu", "Envoyer le téléphone par la poste", "Les imprimer et les faxer", "Les envoyer par SMS ou par e-mail"], answer: 3, why: "Les SMS et e-mails partagent facilement." },
      { objective: "O6", q: "Pour copier un vieux tirage, tenez le téléphone :", options: ["Derrière la photo", "Très en biais", "Bien au-dessus de la photo", "À l'autre bout de la pièce"], answer: 2, why: "Bien au-dessus, les bords restent droits." },
      { objective: "O6", q: "Un reflet, c'est :", options: ["Un type d'album", "Un éclat lumineux de la lumière sur la photo", "Un filtre", "Un mot de passe"], answer: 1, why: "Le reflet cache des parties de l'image." },
      { objective: "O6", q: "Les applications de numérisation comme PhotoScan de Google aident en :", options: ["Réduisant les reflets", "Ajoutant des mots de passe", "Supprimant les tirages", "Passant des appels"], answer: 0, why: "Elles sont faites pour bien copier les tirages." },
      { objective: "O6", q: "Quand vous partagez une photo colorisée par IA, vous devez :", options: ["Indiquer qu'elle est colorisée et garder l'original", "Dire que c'est l'original", "Supprimer l'original", "La cacher"], answer: 0, why: "Les couleurs sont une supposition ; l'honnêteté compte." },
      { objective: "O6", q: "L'IA peut aider pour la légende d'une vieille photo en :", options: ["Sachant qui est dessus", "Aidant à l'écrire une fois que vous donnez les noms et l'année", "Trouvant leurs adresses", "Devinant correctement leurs dates de naissance"], answer: 1, why: "Vous donnez les faits ; l'IA aide pour les mots." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      4,
      7,
      9,
      10,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est à « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Photos nettes",
        objective: "O1",
        notYet: "Les photos sont floues ou sombres, ou une personne a été photographiée sans qu'on lui demande.",
        meets: "Trois photos nettes et bien éclairées, avec la permission de toute personne qui y figure.",
        exceeds: "Le sujet remplit le cadre et la meilleure prise a été choisie parmi plusieurs."
      },
      {
        name: "Photo améliorée",
        objective: "O2",
        notYet: "Pas de retouche, ou les retouches ont rendu la photo moins belle.",
        meets: "La meilleure photo améliorée avec l'amélioration automatique et une autre retouche, comme un recadrage.",
        exceeds: "Vous pouvez montrer comment annuler la retouche et expliquer pourquoi vous l'avez choisie."
      },
      {
        name: "Anciennes photos retrouvées",
        objective: "O4",
        notYet: "Photos trouvées seulement en faisant longtemps défiler, ou pas trouvées.",
        meets: "Deux photos anciennes trouvées avec Rechercher, par objet, lieu ou date.",
        exceeds: "Des favoris ont été marqués pour les retrouver facilement."
      },
      {
        name: "Partagées avec la famille",
        objective: "O5",
        notYet: "Les photos n'ont pas été partagées, ou l'ont été sans permission.",
        meets: "Les trois photos partagées dans un petit album ou un message avec un membre de la famille.",
        exceeds: "L'album a un nom clair et la famille est invitée à ajouter des photos."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui partagent un album photo avec leur famille dans les 30 jours (questionnaire de suivi)",
      "Apprenants qui numérisent de vieux tirages de famille et les partagent",
      "Apprenants qui commencent un autre cours Seniors et technologie dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone avec un appareil photo et une application photo comme Apple Photos ou Google Photos",
      "Un chiffon doux pour l'objectif, et une ou deux vieilles photos imprimées",
      "Une application de numérisation gratuite comme PhotoScan de Google (facultatif)",
      "Environ 60 minutes au total, en courtes séances tranquilles : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Regroupez les apprenants par type de téléphone ; les outils Modifier et gomme ont des noms différents selon les téléphones.",
      "Demandez aux apprenants d'apporter un vieux tirage pour s'exercer à en faire une copie numérique.",
      "Montrez l'exemple en demandant la permission avant de photographier ou de partager des photos d'autres personnes, surtout des enfants.",
      "Parlez de l'honnêteté pour les retouches par IA et les photos colorisées, et de l'importance de garder les originaux.",
      "Notez la tâche finale avec la grille d'évaluation, et faites un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
