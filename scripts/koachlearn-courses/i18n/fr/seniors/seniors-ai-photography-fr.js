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
  chapters: [
    {
      name: "Chapitre 1 : Prendre et améliorer des photos",
      lessons: [
        {
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
          youCanNow: "prendre une photo nette et bien éclairée avec votre téléphone."
        },
        {
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
          youCanNow: "améliorer une photo avec l'amélioration automatique, le recadrage et le redressement."
        },
        {
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
          youCanNow: "utiliser une gomme IA pour nettoyer une photo, et l'utiliser honnêtement."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Prendre et améliorer des photos",
        questions: [
          { q: "Vos photos sont floues. Quelle chose simple essayer d'abord ?", options: ["Secouer le téléphone", "Acheter un nouveau téléphone", "Essuyer l'objectif avec un chiffon doux", "Éteindre l'écran"], answer: 2, why: "Les traces de doigts sur l'objectif rendent les photos floues." },
          { q: "Où doit être la lumière pour un bon portrait ?", options: ["Sur votre sujet, derrière vous", "Derrière votre sujet", "Nulle part", "Sous la table"], answer: 0, why: "La lumière sur le visage le montre clairement." },
          { q: "À quoi sert de toucher l'écran avant la photo ?", options: ["À envoyer la photo", "À supprimer la photo", "À lancer de la musique", "À faire la mise au point à cet endroit"], answer: 3, why: "Toucher indique à l'appareil où faire la mise au point." },
          { q: "Que fait en général la baguette magique ou le bouton automatique ?", options: ["Il supprime la photo", "Il corrige luminosité et couleurs en une touche", "Il la publie pour tout le monde", "Il l'imprime"], answer: 1, why: "C'est une amélioration par IA en une touche." },
          { q: "Quand n'est-il PAS acceptable d'utiliser une gomme IA ?", options: ["Pour enlever une poubelle", "Pour changer ce qui s'est vraiment passé de façon trompeuse", "Pour enlever un fil électrique", "Pour arranger une photo de famille"], answer: 1, why: "Les retouches ne doivent pas tromper les gens." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Retrouver, ranger et partager",
      lessons: [
        {
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
          youCanNow: "retrouver d'anciennes photos par la recherche et garder les meilleures en favoris."
        },
        {
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
          youCanNow: "créer un album photo et le partager avec votre famille."
        },
        {
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
          youCanNow: "prendre, améliorer, retrouver, ranger et partager des photos, y compris des copies de vieux tirages de famille."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Retrouver, ranger et partager",
        questions: [
          { q: "Comment retrouver vite toutes vos photos de plage ?", options: ["Demander à un inconnu", "Faire défiler pendant une heure", "Supprimer les autres photos", "Chercher « plage » dans votre application Photos"], answer: 3, why: "La recherche par IA reconnaît le contenu des photos." },
          { q: "Que fait le cœur touché sur une photo ?", options: ["Il la met en favori", "Il la supprime", "Il la publie pour tout le monde", "Il l'imprime"], answer: 0, why: "Les favoris sont gardés ensemble pour être retrouvés facilement." },
          { q: "Qu'est-ce qu'un album partagé ?", options: ["Un livre en papier", "Un album supprimé", "Un album que les personnes invitées peuvent voir", "Une liste de mots de passe"], answer: 2, why: "Les albums partagés permettent à la famille de voir et d'ajouter des photos." },
          { q: "Avant de partager des photos de vos petits-enfants, vous devez :", options: ["Rien", "Les publier partout", "Les imprimer pour des inconnus", "Demander à leurs parents"], answer: 3, why: "Les parents décident avec qui partager les photos de leurs enfants." },
          { q: "Une application d'IA colorise une vieille photo en noir et blanc. Les couleurs sont :", options: ["Tirées du film d'origine", "Exactement la réalité", "Une supposition de l'IA", "Toujours justes"], answer: 2, why: "La colorisation est une supposition ; gardez et indiquez l'original." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour la photographie",
    questions: [
      { q: "L'objectif, c'est :", options: ["L'écran", "Le petit verre à travers lequel l'appareil voit", "La batterie", "Le chargeur"], answer: 1, why: "L'objectif capte l'image." },
      { q: "Pour des photos stables, tenez le téléphone :", options: ["À deux mains, coudes serrés", "Avec un doigt", "Au-dessus de la tête", "À l'envers"], answer: 0, why: "Deux mains le gardent stable." },
      { q: "Pour un portrait, la lumière doit être :", options: ["Sur le visage de la personne", "Derrière la personne", "Éteinte", "Sous la personne"], answer: 0, why: "La lumière sur le visage le montre clairement." },
      { q: "Prendre plusieurs photos aide parce que :", options: ["Les téléphones ont besoin d'entraînement", "Vous pouvez garder la meilleure", "Cela économise la batterie", "Cela efface les vieilles photos"], answer: 1, why: "Plus de photos, plus de chances d'en avoir une très bonne." },
      { q: "Pour commencer à retoucher une photo, touchez :", options: ["Partager", "Supprimer", "Modifier", "Réglages"], answer: 2, why: "Modifier ouvre les outils de retouche." },
      { q: "« Recadrer » veut dire :", options: ["Supprimer", "Ajouter des couleurs", "Partager", "Couper les bords"], answer: 3, why: "Recadrer coupe les bords de la photo." },
      { q: "Si vos retouches ne vous plaisent pas, vous pouvez en général :", options: ["Racheter l'original", "Ne jamais revenir en arrière", "Revenir à l'original ou Annuler", "Redémarrer le téléphone"], answer: 2, why: "La plupart des applications gardent l'original." },
      { q: "Une gomme IA sert à :", options: ["Effacer un petit détail gênant d'une photo", "Supprimer toute votre photothèque", "Imprimer des photos", "Appeler la famille"], answer: 0, why: "Elle retire des objets et remplit l'espace." },
      { q: "Votre téléphone ne semble pas avoir de gomme IA. Une bonne idée est de :", options: ["Supprimer l'application Photos", "Abandonner la photo", "Partager votre mot de passe", "Demander à un assistant IA comment faire sur votre modèle"], answer: 3, why: "Les noms des outils changent ; l'IA peut vous guider." },
      { q: "Utiliser l'IA pour changer ce qui s'est vraiment passé sur une photo afin de tromper les gens est :", options: ["Toujours acceptable", "Trompeur et à éviter", "Obligatoire", "Une fonction de sécurité"], answer: 1, why: "Les retouches ne doivent pas tromper." },
      { q: "La recherche de l'application Photos peut trouver des images par :", options: ["Seulement leur numéro de fichier", "Objets, lieux et dates", "Seulement la couleur", "Rien"], answer: 1, why: "L'IA reconnaît le contenu, les lieux et les dates." },
      { q: "Le regroupement des visages dans une application Photos est :", options: ["Un mot de passe", "Obligatoire", "Un virus", "Facultatif et peut être désactivé"], answer: 3, why: "Vous choisissez de l'utiliser ou non." },
      { q: "Un album, c'est :", options: ["Un groupe de photos rangées ensemble", "Une seule photo", "Un appareil photo", "Un filtre"], answer: 0, why: "Les albums rassemblent des photos liées." },
      { q: "Pour choisir plusieurs photos à la fois, touchez :", options: ["Appareil photo", "Supprimer", "Sélectionner", "Réglages"], answer: 2, why: "Sélectionner permet de choisir plusieurs photos." },
      { q: "Une façon simple de partager quelques photos est de :", options: ["Les publier sur la page d'un inconnu", "Envoyer le téléphone par la poste", "Les imprimer et les faxer", "Les envoyer par SMS ou par e-mail"], answer: 3, why: "Les SMS et e-mails partagent facilement." },
      { q: "Pour copier un vieux tirage, tenez le téléphone :", options: ["Derrière la photo", "Très en biais", "Bien au-dessus de la photo", "À l'autre bout de la pièce"], answer: 2, why: "Bien au-dessus, les bords restent droits." },
      { q: "Un reflet, c'est :", options: ["Un type d'album", "Un éclat lumineux de la lumière sur la photo", "Un filtre", "Un mot de passe"], answer: 1, why: "Le reflet cache des parties de l'image." },
      { q: "Les applications de numérisation comme PhotoScan de Google aident en :", options: ["Réduisant les reflets", "Ajoutant des mots de passe", "Supprimant les tirages", "Passant des appels"], answer: 0, why: "Elles sont faites pour bien copier les tirages." },
      { q: "Quand vous partagez une photo colorisée par IA, vous devez :", options: ["Indiquer qu'elle est colorisée et garder l'original", "Dire que c'est l'original", "Supprimer l'original", "La cacher"], answer: 0, why: "Les couleurs sont une supposition ; l'honnêteté compte." },
      { q: "L'IA peut aider pour la légende d'une vieille photo en :", options: ["Sachant qui est dessus", "Aidant à l'écrire une fois que vous donnez les noms et l'année", "Trouvant leurs adresses", "Devinant correctement leurs dates de naissance"], answer: 1, why: "Vous donnez les faits ; l'IA aide pour les mots." }
    ]
  }
};
