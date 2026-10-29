"use strict";

// Koach Learn course, French translation of shared/basic-computer-skills.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// Key and menu names are the ones French keyboards and French Windows/macOS show (Maj, Entrée, Bloc-notes, Explorateur de fichiers, Réglages Système).

module.exports = {
  id: "basic-computer-skills-fr",
  lang: "fr",
  translationOf: "basic-computer-skills",
  category: "Seniors and Technology",
  name: "Les bases de l'ordinateur",
  skills: "Allumer et éteindre un ordinateur, Utiliser une souris ou un pavé tactile, Taper au clavier, Ouvrir et fermer des applications et des fenêtres, Enregistrer et retrouver des fichiers dans des dossiers, Garder un ordinateur à jour",
  outcome: "allumer un ordinateur Windows ou Mac et vous connecter, utiliser la souris et le clavier avec assurance, ouvrir une application, taper et enregistrer une courte note dans un dossier que vous avez créé, la retrouver plus tard et éteindre l'ordinateur correctement.",
  about: [
    "Ce cours est pour toute personne qui se sent hésitante devant un ordinateur : celles qui n'en ont jamais utilisé, celles qui ont appris il y a des années et celles qui utilisent surtout un téléphone. Nous avançons un petit pas à la fois, et rien de ce que vous ferez dans ces leçons ne cassera l'ordinateur.",
    "Au chapitre 1, vous apprenez les parties d'un ordinateur, comment l'allumer et vous connecter, et comment utiliser la souris et le clavier. Au chapitre 2, vous ouvrez des applications et des fenêtres, enregistrez un fichier dans un dossier, le retrouvez, et gardez l'ordinateur en bonne santé.",
    "Les étapes sont données pour les ordinateurs Windows et les ordinateurs Mac. Chaque leçon dure environ cinq minutes. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Allumez l'ordinateur et connectez-vous. Créez un nouveau dossier appelé « Essai » dans votre dossier Documents. Ouvrez le Bloc-notes (Windows) ou TextEdit (Mac), tapez une courte note, par exemple une liste de questions pour votre prochain rendez-vous chez le médecin ou un mot pour un petit-enfant, avec une majuscule au début de chaque phrase. Enregistrez-la dans le dossier Essai avec un nom clair, fermez l'application, retrouvez le fichier et ouvrez-le, puis éteignez l'ordinateur correctement.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes qui ont peu ou pas d'expérience de l'ordinateur : seniors, personnes qui reprennent le travail ou reviennent dans la communauté, chercheurs d'emploi et aidants qui veulent utiliser seuls un ordinateur à la maison, à la bibliothèque ou dans un centre pour l'emploi.",
    startingPoint: "Ils utilisent parfois un téléphone portable pour les appels ou les SMS. Beaucoup n'ont jamais utilisé une souris, tapé sur un clavier complet, ouvert une application sur un ordinateur, enregistré un fichier dans un dossier ou éteint un ordinateur correctement.",
    gap: "Les candidatures, les services de bibliothèque, l'école et beaucoup de formulaires demandent un ordinateur. Sans ces bases, on doit demander de l'aide aux autres, on perd son travail parce qu'il n'a pas été enregistré, ou on évite complètement les ordinateurs.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque partie et chaque bouton est nommé et décrit",
      "Appareils : un ordinateur de bureau ou portable Windows ou Mac, à la maison, à la bibliothèque ou dans un centre pour l'emploi",
      "Temps : environ 5 minutes par leçon, environ 60 minutes au total, avec du temps en plus pour s'exercer à la souris",
      "Coût : seulement les applications gratuites déjà sur l'ordinateur (Bloc-notes ou TextEdit)",
      "Ordinateurs partagés : les apprenants suivent les règles de connexion du personnel et n'enregistrent pas de fichiers privés sur les ordinateurs de bibliothèque"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Devant un ordinateur de bureau ou portable", action: "nommer ses parties principales, l'allumer et se connecter", standard: "sans aide, en nommant l'écran, le clavier, la souris ou le pavé tactile et le bouton d'alimentation" },
    { id: "O2", condition: "Avec une souris ou un pavé tactile", action: "pointer, cliquer, double-cliquer, faire un clic droit et faire défiler", standard: "en faisant chaque geste correctement quand on le demande" },
    { id: "O3", condition: "Avec le clavier", action: "taper une phrase avec des majuscules, des espaces et de la ponctuation, et corriger les erreurs", standard: "avec une majuscule au début de chaque phrase et chaque erreur corrigée avec Retour arrière ou l'annulation" },
    { id: "O4", condition: "Sur un ordinateur Windows ou Mac", action: "ouvrir une application par son nom, agrandir ou réduire sa fenêtre, la faire revenir et la fermer", standard: "sans aide" },
    { id: "O5", condition: "À partir d'une courte note à enregistrer", action: "créer un dossier, y enregistrer la note avec un nom clair et la retrouver", standard: "avec le fichier dans le bon dossier et rouvert plus tard" },
    { id: "O6", condition: "Quand un ordinateur a besoin d'entretien ou a un problème", action: "installer les mises à jour, redémarrer, éteindre correctement et choisir un endroit sûr pour trouver de l'aide", standard: "en éteignant par le menu et sans jamais appeler un numéro affiché dans une fenêtre surgissante" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Se sentir à l'aise",
      lessons: [
        {
          objectives: ["O1"],
          title: "Les parties d'un ordinateur, et l'allumer",
          minutes: 5,
          goal: "Nommer les parties principales d'un ordinateur, l'allumer et se connecter.",
          text: [
            "Un ordinateur de bureau a un écran, un clavier, une souris et un boîtier (ou un écran) qui contient l'ordinateur lui-même. Un ordinateur portable a tout cela en une seule pièce qui s'ouvre ; à la place de la souris, il a une surface tactile plate appelée pavé tactile.",
            "Pour l'allumer, appuyez une fois sur le bouton marche. Il porte en général un cercle avec un trait en haut. Sur un portable, il est souvent en haut à droite du clavier ou sur le côté. Attendez que l'écran s'allume.",
            "La plupart des ordinateurs demandent ensuite de vous connecter avec un mot de passe ou un code PIN. Tapez-le et appuyez sur Entrée. Sur un ordinateur partagé, comme à la bibliothèque, le personnel vous dira comment vous connecter."
          ],
          steps: ["Trouvez le bouton marche (un cercle avec un trait en haut).", "Appuyez une fois et relâchez.", "Attendez l'écran de connexion.", "Tapez votre mot de passe ou votre code PIN et appuyez sur Entrée."],
          words: [["Écran (moniteur)", "l'écran d'un ordinateur de bureau."], ["Ordinateur portable", "un ordinateur qui s'ouvre, avec l'écran et le clavier en une seule pièce."], ["Pavé tactile", "la surface tactile plate d'un portable qui fonctionne comme une souris."], ["Se connecter", "taper votre mot de passe ou code PIN pour que l'ordinateur sache que c'est vous."]],
          slides: [
            { title: "Les parties d'un ordinateur", bullets: ["L'écran", "Le clavier", "La souris, ou le pavé tactile sur un portable"] },
            { title: "L'allumer", bullets: ["Bouton marche : un cercle avec un trait en haut", "Appuyez une fois et attendez"] },
            { title: "Se connecter", bullets: ["Tapez votre mot de passe ou code PIN", "Appuyez sur Entrée", "Sur un ordinateur partagé, demandez au personnel"] }
          ],
          tryIt: "Montrez l'écran, le clavier et la souris (ou le pavé tactile) d'un ordinateur près de vous. Trouvez le bouton marche, allumez l'ordinateur et connectez-vous.",
          youCanNow: "nommer les parties d'un ordinateur, l'allumer et vous connecter.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'un moniteur ?", options: ["La souris", "L'écran", "Le câble d'alimentation", "Le clavier"], answer: 1, why: "Le moniteur est l'écran où vous voyez votre travail." },
            { objective: "O1", q: "Vous voulez utiliser un ordinateur à la bibliothèque et il demande une connexion. Que faites-vous ?", options: ["Appuyer longtemps sur le bouton d'alimentation jusqu'à ce qu'il s'éteigne", "Le débrancher", "Taper des lettres au hasard jusqu'à ce qu'il s'ouvre", "Demander au personnel comment se connecter"], answer: 3, why: "Sur un ordinateur partagé, le personnel vous dira comment vous connecter." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Utiliser la souris ou le pavé tactile",
          minutes: 5,
          goal: "Pointer, cliquer, double-cliquer, faire un clic droit et faire défiler.",
          text: [
            "La souris déplace le pointeur, la petite flèche à l'écran. Posez la main sur la souris et faites-la glisser doucement sur la table ; la flèche suit. Si vous manquez de place, soulevez la souris et reposez-la au milieu.",
            "Cliquer : appuyez une fois sur le bouton gauche pour choisir quelque chose. Double-cliquer : appuyez deux fois vite sur le bouton gauche pour ouvrir quelque chose, comme un dossier. Clic droit : appuyez une fois sur le bouton droit pour voir un petit menu de choix. Faire défiler : roulez la petite molette entre les boutons pour faire monter ou descendre une page.",
            "Sur le pavé tactile d'un portable, faites glisser un doigt pour déplacer la flèche, touchez ou appuyez une fois pour cliquer, et faites glisser deux doigts vers le haut ou le bas pour faire défiler. Pour un clic droit, touchez avec deux doigts."
          ],
          steps: ["Faites glisser la souris pour déplacer la flèche.", "Cliquer : appuyez une fois sur le bouton gauche.", "Double-cliquer : appuyez deux fois vite sur le bouton gauche.", "Clic droit : appuyez une fois sur le bouton droit pour un menu.", "Faire défiler : roulez la molette, ou faites glisser deux doigts sur un pavé tactile."],
          words: [["Pointeur", "la petite flèche à l'écran qui bouge avec la souris."], ["Cliquer", "appuyer une fois sur le bouton gauche de la souris."], ["Double-cliquer", "appuyer deux fois vite sur le bouton gauche pour ouvrir quelque chose."], ["Clic droit", "appuyer sur le bouton droit pour voir un menu de choix."], ["Faire défiler", "faire monter ou descendre une page."]],
          slides: [
            { title: "Déplacer le pointeur", bullets: ["Faites glisser la souris doucement", "Plus de place ? Soulevez-la et reposez-la au milieu"] },
            { title: "Les clics", bullets: ["Clic : bouton gauche une fois, pour choisir", "Double-clic : deux fois vite, pour ouvrir", "Clic droit : bouton droit, pour un menu"] },
            { title: "Faire défiler", bullets: ["Roulez la molette de la souris", "Pavé tactile : deux doigts vers le haut ou le bas"] },
            { title: "Le pavé tactile", bullets: ["Un doigt déplace la flèche", "Touchez pour cliquer", "Touchez avec deux doigts pour un clic droit"] }
          ],
          tryIt: "Ouvrez n'importe quelle page web ou document. Faites défiler vers le bas puis vers le haut. Faites un clic droit sur un endroit vide et lisez le menu, puis appuyez sur la touche Échap pour le fermer. Double-cliquez sur un mot pour le sélectionner.",
          youCanNow: "pointer, cliquer, double-cliquer, faire un clic droit et faire défiler avec une souris ou un pavé tactile.",
          quickCheck: [
            { objective: "O2", q: "À quoi sert le défilement ?", options: ["À faire monter ou descendre une page", "À ouvrir un dossier", "À éteindre l'ordinateur", "À taper une majuscule"], answer: 0, why: "Tourner la molette de la souris, ou glisser deux doigts sur un pavé tactile, fait bouger la page." },
            { objective: "O2", q: "Sur le pavé tactile d'un portable, vous voulez voir le petit menu de choix. Que faites-vous ?", options: ["Glisser un doigt", "Appuyer sur le bouton d'alimentation", "Toucher avec deux doigts", "Appuyer sur Verr Maj"], answer: 2, why: "Sur un pavé tactile, toucher avec deux doigts fait un clic droit." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Taper au clavier",
          minutes: 5,
          goal: "Taper une phrase avec majuscules, espaces et ponctuation, et corriger les erreurs.",
          text: [
            "Le clavier a des lettres, des chiffres et des touches spéciales. La longue barre en bas est la barre d'espace. Entrée (Retour sur Mac) commence une nouvelle ligne ou dit « vas-y ». Retour arrière (la flèche vers la gauche au-dessus d'Entrée ; Supprimer sur Mac) efface la lettre à gauche du petit trait qui clignote, appelé le curseur.",
            "Pour une seule majuscule, maintenez Maj (la flèche vers le haut) et appuyez sur la lettre. Verr Maj met toutes les lettres en majuscules jusqu'à ce que vous appuyiez à nouveau dessus. Maj sert aussi à taper le symbole du haut d'une touche, comme ? ou les chiffres sur un clavier français.",
            "Les raccourcis font gagner du temps. Sur Windows, utilisez Ctrl ; sur Mac, utilisez Commande. Ctrl+Z annule une erreur, Ctrl+C copie, Ctrl+V colle et Ctrl+S enregistre."
          ],
          steps: ["Cliquez là où vous voulez taper ; le curseur y clignote.", "Maintenez Maj et appuyez sur une lettre pour une majuscule.", "Appuyez sur la barre d'espace entre les mots.", "Appuyez sur Retour arrière (Supprimer sur Mac) pour corriger une erreur.", "Appuyez sur Entrée (Retour sur Mac) pour une nouvelle ligne."],
          words: [["Curseur", "le trait qui clignote et montre où va s'écrire votre texte."], ["Maj", "la touche que vous maintenez pour une majuscule ou un symbole du haut."], ["Retour arrière", "la touche qui efface la lettre à gauche (Supprimer sur Mac)."], ["Raccourci", "une combinaison de touches qui fait une tâche vite, comme Ctrl+S pour enregistrer."]],
          slides: [
            { title: "Les touches essentielles", bullets: ["Barre d'espace : un espace", "Entrée (Retour sur Mac) : nouvelle ligne", "Retour arrière (Supprimer sur Mac) : effacer une lettre"] },
            { title: "Majuscules et symboles", bullets: ["Maj + lettre = une majuscule", "Verr Maj = tout en majuscules jusqu'au prochain appui", "Maj sert aussi pour ? et les symboles du haut"] },
            { title: "Raccourcis pratiques", bullets: ["Windows : Ctrl. Mac : Commande", "Z annuler, C copier, V coller, S enregistrer"] }
          ],
          tryIt: "Ouvrez une case de recherche ou un document vierge et tapez : Je m'appelle ___ et j'apprends l'informatique ! Mettez une majuscule au début, puis effacez un mot avec Retour arrière et retapez-le.",
          youCanNow: "taper des phrases avec majuscules et ponctuation, corriger les erreurs et utiliser les raccourcis courants.",
          quickCheck: [
            { objective: "O3", q: "Que fait Ctrl+C sur Windows ?", options: ["Il enregistre votre travail", "Il annule une erreur", "Il copie", "Il ferme l'application"], answer: 2, why: "Ctrl+C copie ; Ctrl+V colle." },
            { objective: "O3", q: "Tout ce que vous tapez sort en majuscules. Que faites-vous ?", options: ["Redémarrer l'ordinateur", "Appuyer de nouveau sur Verr Maj pour le désactiver", "Tenir Maj pour chaque lettre", "Acheter un nouveau clavier"], answer: 1, why: "Verr Maj met toutes les lettres en majuscules jusqu'à ce que vous appuyiez de nouveau dessus." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Se sentir à l'aise",
        questions: [
          { objective: "O1", q: "Qu'est-ce qu'un pavé tactile ?", options: ["L'écran", "Un type d'imprimante", "La surface tactile plate d'un portable qui fonctionne comme une souris", "Un câble"], answer: 2, why: "Le pavé tactile fait le travail de la souris sur un portable." },
          { objective: "O1", q: "À quoi ressemble en général le bouton marche ?", options: ["Une étoile", "Un cercle avec un trait en haut", "Un cœur", "Un point d'interrogation"], answer: 1, why: "C'est le symbole habituel de mise en marche." },
          { objective: "O2", q: "Comment ouvrir un dossier avec la souris ?", options: ["Faire un clic droit une fois", "Rouler la molette", "Double-cliquer dessus", "Secouer la souris"], answer: 2, why: "Un double-clic ouvre les choses." },
          { objective: "O3", q: "Comment taper une seule majuscule ?", options: ["Appuyer sur Entrée", "Maintenir Maj et appuyer sur la lettre", "Appuyer sur Retour arrière", "Appuyer deux fois sur la barre d'espace"], answer: 1, why: "Maj plus une lettre donne une majuscule." },
          { objective: "O3", q: "Vous avez tapé une mauvaise lettre. Quelle touche l'efface ?", options: ["La barre d'espace", "Maj", "Verr Maj", "Retour arrière (Supprimer sur Mac)"], answer: 3, why: "Retour arrière efface la lettre à gauche du curseur." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Applications, fichiers et entretien",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ouvrir des applications et gérer les fenêtres",
          minutes: 5,
          goal: "Ouvrir une application, changer la taille de sa fenêtre et la fermer.",
          text: [
            "Les applications (programmes) font des tâches : un navigateur web pour internet, une application d'écriture pour les notes, une application photo pour les images. Sur Windows, cliquez sur le bouton Démarrer (le logo Windows en bas de l'écran) et tapez le nom de l'application. Sur Mac, cliquez sur la loupe en haut à droite (Spotlight), tapez le nom et appuyez sur Retour.",
            "Chaque application s'ouvre dans une fenêtre. Dans le coin du haut se trouvent de petits boutons. Sur Windows, en haut à droite : un tiret (réduire, la cacher pour l'instant), un carré (agrandir, remplir l'écran) et un X (fermer). Sur Mac, en haut à gauche : rouge (fermer), jaune (réduire) et vert (plein écran).",
            "Les applications réduites attendent dans la barre des tâches (Windows, en bas) ou dans le Dock (Mac). Cliquez sur l'icône de l'application pour la faire revenir."
          ],
          steps: ["Windows : cliquez sur Démarrer et tapez le nom de l'application. Mac : cliquez sur la loupe et tapez le nom.", "Appuyez sur Entrée ou Retour pour l'ouvrir.", "Utilisez le bouton réduire pour la cacher.", "Cliquez sur son icône dans la barre des tâches ou le Dock pour la faire revenir.", "Fermez-la avec le X (Windows) ou le bouton rouge (Mac)."],
          words: [["Application / programme", "un logiciel qui fait une tâche, comme écrire ou naviguer sur le web."], ["Fenêtre", "le cadre dans lequel s'ouvre une application."], ["Réduire", "cacher une fenêtre pour l'instant sans la fermer."], ["Barre des tâches / Dock", "la rangée d'icônes d'applications en bas de l'écran (barre des tâches sur Windows, Dock sur Mac)."]],
          slides: [
            { title: "Ouvrir une application", bullets: ["Windows : bouton Démarrer, tapez le nom", "Mac : loupe (Spotlight), tapez le nom"] },
            { title: "Les boutons de fenêtre sur Windows", bullets: ["En haut à droite", "Tiret = réduire, carré = agrandir, X = fermer"] },
            { title: "Les boutons de fenêtre sur Mac", bullets: ["En haut à gauche", "Rouge = fermer, jaune = réduire, vert = plein écran"] },
            { title: "La faire revenir", bullets: ["Cliquez sur son icône dans la barre des tâches (Windows)", "Ou dans le Dock (Mac)"] }
          ],
          tryIt: "Ouvrez le Bloc-notes (Windows) ou TextEdit (Mac) en tapant son nom dans Démarrer ou Spotlight. Réduisez-le, faites-le revenir depuis la barre des tâches ou le Dock, puis faites-lui remplir l'écran.",
          youCanNow: "ouvrir n'importe quelle application par son nom, passer d'une fenêtre à l'autre et les fermer.",
          quickCheck: [
            { objective: "O4", q: "Sur Windows, que fait le bouton carré en haut d'une fenêtre, dans le coin ?", options: ["Il ferme la fenêtre", "Il cache la fenêtre", "Il ouvre Spotlight", "Il fait remplir tout l'écran à la fenêtre"], answer: 3, why: "Le carré agrandit ; le tiret cache la fenêtre et le X la ferme." },
            { objective: "O4", q: "Vous avez réduit votre application d'écriture et vous voulez la faire revenir. Que faites-vous ?", options: ["Cliquer sur son icône dans la barre des tâches (Windows) ou le Dock (Mac)", "Éteindre l'ordinateur", "Ouvrir un nouveau dossier", "Appuyer sur Retour arrière"], answer: 0, why: "Les applications réduites attendent dans la barre des tâches ou le Dock jusqu'à ce que vous cliquiez dessus." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Enregistrer et retrouver des fichiers dans des dossiers",
          minutes: 5,
          goal: "Enregistrer une note dans un dossier que vous avez créé et la retrouver.",
          text: [
            "Un fichier est une chose enregistrée : une lettre, une photo, une liste. Un dossier contient des fichiers, comme le tiroir d'un classeur. Le dossier Documents est un bon endroit pour ranger vos fichiers.",
            "Pour créer un dossier : sur Windows, ouvrez l'Explorateur de fichiers (l'icône de dossier jaune), cliquez sur Documents, puis choisissez Nouveau et Dossier. Sur Mac, ouvrez le Finder (l'icône du visage bleu), cliquez sur Documents, puis ouvrez le menu Fichier et choisissez Nouveau dossier. Tapez un nom et appuyez sur Entrée ou Retour.",
            "Pour enregistrer : appuyez sur Ctrl+S (Commande+S sur Mac). Une fenêtre s'ouvre ; choisissez le dossier, tapez un nom de fichier clair comme « Questions pour le Dr Lee », et cliquez sur Enregistrer. Pour retrouver un fichier plus tard, ouvrez l'Explorateur de fichiers ou le Finder et regardez dans le dossier, ou tapez une partie du nom dans la case de recherche."
          ],
          steps: ["Ouvrez l'Explorateur de fichiers (Windows) ou le Finder (Mac).", "Allez dans Documents et créez un nouveau dossier.", "Dans votre application, appuyez sur Ctrl+S (Commande+S sur Mac).", "Choisissez le dossier, tapez un nom clair, cliquez sur Enregistrer.", "Pour le retrouver : ouvrez le dossier, ou cherchez une partie du nom."],
          words: [["Fichier", "un élément enregistré, comme une lettre ou une photo."], ["Dossier", "un endroit qui contient des fichiers, comme un tiroir."], ["Explorateur de fichiers / Finder", "l'application pour voir les fichiers et les dossiers (Windows / Mac)."]],
          slides: [
            { title: "Fichiers et dossiers", bullets: ["Fichier = une chose enregistrée", "Dossier = un tiroir qui contient des fichiers", "Documents est un bon endroit"] },
            { title: "Créer un dossier", bullets: ["Windows : Explorateur de fichiers, Documents, Nouveau, Dossier", "Mac : Finder, Documents, Fichier, Nouveau dossier"] },
            { title: "Enregistrer avec un nom clair", bullets: ["Ctrl+S (Commande+S sur Mac)", "Choisissez le dossier, nommez-le, cliquez sur Enregistrer"] },
            { title: "Le retrouver", bullets: ["Ouvrez le dossier", "Ou cherchez une partie du nom"] }
          ],
          tryIt: "Créez un dossier appelé « Essai » dans Documents. Tapez une courte liste dans le Bloc-notes ou TextEdit, enregistrez-la dans Essai sous le nom « Ma première note », fermez l'application, puis retrouvez et ouvrez le fichier.",
          youCanNow: "créer des dossiers, enregistrer des fichiers avec des noms clairs et les retrouver.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qu'un fichier ?", options: ["Une chose enregistrée, comme une lettre, une photo ou une liste", "Un tiroir qui contient des dossiers", "L'application qui ouvre internet", "Le bouton d'alimentation"], answer: 0, why: "Un fichier est une chose enregistrée ; un dossier contient des fichiers." },
            { objective: "O5", q: "Vous avez fini une note et vous voulez la garder. Que faites-vous ?", options: ["Fermer l'application sans enregistrer", "Éteindre l'ordinateur", "Débrancher le clavier", "Appuyer sur Ctrl+S (Commande+S sur Mac), choisir le dossier, taper un nom clair et cliquer sur Enregistrer"], answer: 3, why: "Enregistrer met la note dans un dossier avec un nom, pour que vous la retrouviez plus tard." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Garder votre ordinateur en bonne santé",
          minutes: 4,
          goal: "Installer les mises à jour, redémarrer et éteindre correctement, et savoir où trouver de l'aide.",
          text: [
            "Les mises à jour corrigent des problèmes et ferment des failles de sécurité. Sur Windows, ouvrez Paramètres et choisissez Windows Update. Sur Mac, ouvrez Réglages Système et choisissez Général, puis Mise à jour de logiciels. Installez les mises à jour quand on vous le demande et laissez l'ordinateur redémarrer.",
            "Si l'ordinateur est lent ou si quelque chose est bloqué, enregistrez votre travail et redémarrez-le. Cela règle beaucoup de problèmes. Pour éteindre sur Windows : Démarrer, puis l'icône marche, puis Arrêter. Sur Mac : le menu Pomme en haut à gauche, puis Éteindre. Ne le débranchez pas et ne maintenez pas le bouton marche, sauf s'il est complètement bloqué.",
            "Si une fenêtre dit que votre ordinateur a un virus et donne un numéro de téléphone, n'appelez pas ; fermez-la. Demandez de l'aide à une personne de confiance, à un atelier d'aide informatique de la bibliothèque ou au magasin où vous avez acheté l'ordinateur."
          ],
          steps: ["Cherchez les mises à jour : Windows Update (Windows) ou Mise à jour de logiciels (Mac).", "Installez-les et laissez l'ordinateur redémarrer.", "Lent ou bloqué ? Enregistrez et redémarrez.", "Éteindre : Démarrer, icône marche, Arrêter (Windows) ou menu Pomme, Éteindre (Mac).", "Besoin d'aide ? Une personne de confiance, l'aide informatique de la bibliothèque ou le magasin."],
          words: [["Mise à jour", "une correction gratuite du fabricant qui améliore la sécurité et les fonctions."], ["Redémarrer", "éteindre et rallumer l'ordinateur en une seule étape."], ["Éteindre", "arrêter complètement l'ordinateur de la bonne façon."]],
          sources: [{ name: "FTC (agence américaine de protection des consommateurs) : repérer, éviter et signaler les arnaques au faux support technique", url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams" }],
          slides: [
            { title: "Installez les mises à jour", bullets: ["Windows : Paramètres, Windows Update", "Mac : Réglages Système, Général, Mise à jour de logiciels"] },
            { title: "Redémarrer règle beaucoup de choses", bullets: ["Lent ou bloqué ? Enregistrez, puis redémarrez"] },
            { title: "Éteindre correctement", bullets: ["Windows : Démarrer, icône marche, Arrêter", "Mac : menu Pomme, Éteindre", "Ne le débranchez pas simplement"] },
            { title: "Trouver de l'aide", bullets: ["N'appelez jamais les numéros des fausses alertes de virus", "Demandez à une personne de confiance ou à la bibliothèque"] }
          ],
          tryIt: "Tâche finale : allumez et connectez-vous, créez un dossier Essai, tapez et enregistrez une courte note avec des majuscules dans le Bloc-notes ou TextEdit, fermez-la, retrouvez-la et ouvrez-la, cherchez les mises à jour, puis éteignez correctement.",
          youCanNow: "utiliser un ordinateur du début à la fin : vous connecter, travailler, enregistrer, retrouver vos fichiers et éteindre en sécurité.",
          quickCheck: [
            { objective: "O6", q: "Où trouvez-vous les mises à jour sur un ordinateur Windows ?", options: ["Dans la corbeille", "Dans Paramètres, sous Windows Update", "Sur l'horloge de la barre des tâches", "Dans le Bloc-notes"], answer: 1, why: "Les mises à jour de Windows sont dans Paramètres, sous Windows Update." },
            { objective: "O6", q: "Vous avez fini pour aujourd'hui sur un ordinateur Windows. Que faites-vous ?", options: ["Tirer sur la prise", "Tenir le bouton d'alimentation enfoncé", "Cliquer sur Démarrer, puis sur l'icône d'alimentation, puis sur Arrêter", "Fermer le couvercle pendant qu'une application enregistre"], answer: 2, why: "Arrêter par le menu est la bonne façon ; débrancher peut causer des problèmes." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Applications, fichiers et entretien",
        questions: [
          { objective: "O4", q: "Sur Windows, comment ouvrir une application que vous ne voyez pas ?", options: ["Éteindre l'écran", "Débrancher l'ordinateur", "Appuyer sur Retour arrière", "Cliquer sur Démarrer et taper son nom"], answer: 3, why: "La recherche de Démarrer trouve n'importe quelle application par son nom." },
          { objective: "O4", q: "Sur Mac, le bouton rouge en haut à gauche d'une fenêtre :", options: ["La met en plein écran", "La cache", "La ferme", "L'imprime"], answer: 2, why: "Rouge ferme, jaune réduit, vert remplit l'écran." },
          { objective: "O5", q: "Qu'est-ce qu'un dossier ?", options: ["Un type de clavier", "Un endroit qui contient des fichiers, comme un tiroir", "Une mise à jour", "Une page web"], answer: 1, why: "Les dossiers gardent les fichiers en ordre." },
          { objective: "O5", q: "Quelles touches enregistrent votre travail sur Windows ?", options: ["Ctrl+Z", "Ctrl+P", "Alt+Tab", "Ctrl+S"], answer: 3, why: "Ctrl+S enregistre (Commande+S sur Mac)." },
          { objective: "O6", q: "L'ordinateur est lent et un programme est bloqué. Une bonne première étape est de :", options: ["Appeler un numéro affiché dans une fenêtre", "Enregistrer votre travail et redémarrer", "Verser de l'eau dessus", "Acheter un nouvel ordinateur"], answer: 1, why: "Un redémarrage règle beaucoup de problèmes." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases de l'ordinateur",
    questions: [
      { objective: "O1", q: "Quelle partie regardez-vous pour voir votre travail ?", options: ["Le câble d'alimentation", "La souris", "L'écran", "Le clavier"], answer: 2, why: "L'écran montre ce que fait l'ordinateur." },
      { objective: "O1", q: "Un ordinateur portable est :", options: ["Un chargeur de téléphone", "Un type de souris", "Une imprimante", "Un ordinateur qui s'ouvre, avec l'écran et le clavier ensemble"], answer: 3, why: "Les portables sont tout-en-un et se transportent." },
      { objective: "O1", q: "Après avoir allumé l'ordinateur, vous devez en général :", options: ["Le débrancher", "Vous connecter avec un mot de passe ou un code PIN", "Appuyer sur Verr Maj", "Fermer le couvercle"], answer: 1, why: "Se connecter dit à l'ordinateur que c'est vous." },
      { objective: "O2", q: "Le pointeur est :", options: ["Un dossier", "Le bouton marche", "La petite flèche qui bouge avec la souris", "Une touche"], answer: 2, why: "Le pointeur suit la souris." },
      { objective: "O2", q: "Votre souris arrive au bord de la table. Que faites-vous ?", options: ["La retourner", "Appuyer plus fort", "Redémarrer l'ordinateur", "La soulever et la reposer au milieu"], answer: 3, why: "Soulever la souris ne déplace pas le pointeur." },
      { objective: "O2", q: "Un clic droit montre :", options: ["Seulement les options d'alimentation", "Un petit menu de choix", "Un nouvel ordinateur", "Jamais rien"], answer: 1, why: "Le clic droit ouvre un menu." },
      { objective: "O2", q: "Sur un pavé tactile, comment faire défiler ?", options: ["Appuyer sur Maj", "Toucher le bouton marche", "Faire glisser deux doigts vers le haut ou le bas", "Fermer le couvercle"], answer: 2, why: "Deux doigts font défiler sur un pavé tactile." },
      { objective: "O3", q: "Le trait qui clignote là où va s'écrire votre texte s'appelle :", options: ["L'écran", "Le dossier", "Le Dock", "Le curseur"], answer: 3, why: "Le curseur montre où les lettres vont apparaître." },
      { objective: "O3", q: "Verr Maj :", options: ["Efface un mot", "Met toutes les lettres en majuscules jusqu'au prochain appui", "Enregistre le fichier", "Éteint l'ordinateur"], answer: 1, why: "Il bloque les majuscules." },
      { objective: "O3", q: "Quel raccourci annule une erreur sur Windows ?", options: ["Ctrl+V", "Ctrl+S", "Ctrl+Z", "Ctrl+P"], answer: 2, why: "Ctrl+Z annule (Commande+Z sur Mac)." },
      { objective: "O3", q: "Entrée (Retour sur Mac) sert à :", options: ["Éteindre l'écran", "Effacer une lettre", "Faire une majuscule", "Commencer une nouvelle ligne"], answer: 3, why: "Entrée commence une nouvelle ligne ou valide." },
      { objective: "O4", q: "Sur Mac, comment ouvrir une application par son nom ?", options: ["Appuyer sur le bouton marche", "Cliquer sur la loupe (Spotlight) et taper le nom", "Faire un clic droit sur l'écran", "Maintenir Maj"], answer: 1, why: "Spotlight trouve les applications par leur nom." },
      { objective: "O4", q: "Sur Windows, le X en haut à droite d'une fenêtre :", options: ["La ferme", "L'agrandit", "L'enregistre", "La cache"], answer: 0, why: "Le X ferme la fenêtre." },
      { objective: "O4", q: "Une fenêtre réduite va :", options: ["Dans la barre des tâches (Windows) ou le Dock (Mac)", "À la corbeille pour toujours", "À l'imprimante", "Sur internet"], answer: 0, why: "Cliquez sur son icône pour la faire revenir." },
      { objective: "O5", q: "Quel est le meilleur nom de fichier ?", options: ["Questions pour le Dr Lee", "azer", "Sans titre", "1"], answer: 0, why: "Un nom clair aide à le retrouver plus tard." },
      { objective: "O5", q: "L'application pour voir les fichiers sur Windows est :", options: ["L'Explorateur de fichiers", "Spotlight", "Le Dock", "Safari"], answer: 0, why: "L'Explorateur de fichiers montre les fichiers et les dossiers." },
      { objective: "O5", q: "Vous ne savez plus où vous avez enregistré un fichier. Vous pouvez :", options: ["Chercher une partie de son nom", "Redémarrer jusqu'à ce qu'il apparaisse", "Acheter un nouvel ordinateur", "Débrancher la souris"], answer: 0, why: "La recherche trouve les fichiers par leur nom." },
      { objective: "O6", q: "Pourquoi installer les mises à jour ?", options: ["Elles corrigent des problèmes et ferment des failles de sécurité", "Elles suppriment vos fichiers", "Elles coûtent de l'argent à chaque fois", "Elles ralentissent l'ordinateur pour toujours"], answer: 0, why: "Les mises à jour améliorent la sécurité et corrigent les problèmes." },
      { objective: "O6", q: "Comment éteindre correctement un Mac ?", options: ["Menu Pomme, puis Éteindre", "Tirer sur la prise", "Fermer la fenêtre", "Appuyer sur Verr Maj"], answer: 0, why: "Le menu Pomme permet d'éteindre en sécurité." },
      { objective: "O6", q: "Une fenêtre dit que vous avez un virus et qu'il faut appeler un numéro. Vous devez :", options: ["Ne pas appeler ; la fermer et demander à une personne de confiance", "Appeler tout de suite", "Leur donner votre mot de passe", "Payer avec une carte cadeau"], answer: 0, why: "Les vrais avertissements ne demandent jamais d'appeler un numéro." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      4,
      5,
      8,
      9,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Allumer et se connecter",
        objective: "O1",
        notYet: "A besoin d'aide pour allumer l'ordinateur ou se connecter.",
        meets: "Allume l'ordinateur et se connecte sans aide.",
        exceeds: "Nomme aussi les parties principales de l'ordinateur."
      },
      {
        name: "Dossier et note enregistrée",
        objective: "O5",
        notYet: "Le dossier Essai ou la note enregistrée manque, ou la note a un nom comme Sans titre.",
        meets: "Un dossier Essai dans Documents contient la note, enregistrée avec un nom clair.",
        exceeds: "Retrouve le fichier avec la zone de recherche aussi bien qu'avec le dossier."
      },
      {
        name: "Taper la note",
        objective: "O3",
        notYet: "La note manque, ou les phrases n'ont pas de majuscule.",
        meets: "Une courte note avec une majuscule au début de chaque phrase et les erreurs corrigées.",
        exceeds: "Utilise aussi correctement la ponctuation comme ? ou ! et annule avec Ctrl+Z (Commande+Z)."
      },
      {
        name: "Ouvrir et fermer l'application",
        objective: "O4",
        notYet: "N'arrive pas à ouvrir le Bloc-notes ou TextEdit, ou à le fermer.",
        meets: "Ouvre l'application par son nom, la ferme, puis retrouve et ouvre le fichier enregistré.",
        exceeds: "Réduit aussi la fenêtre et la fait revenir depuis la barre des tâches ou le Dock."
      },
      {
        name: "Éteindre",
        objective: "O6",
        notYet: "L'ordinateur est débranché ou le bouton d'alimentation est tenu enfoncé.",
        meets: "Éteint correctement depuis le menu Démarrer ou le menu Pomme.",
        exceeds: "Vérifie aussi les mises à jour avant d'éteindre."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et obtiennent « Atteint » ou « Dépasse » sur chaque ligne de la grille de l'exercice final",
      "Apprenants qui disent avoir utilisé un ordinateur seuls, par exemple à la bibliothèque ou dans un centre pour l'emploi, dans les 30 jours après le cours (enquête de suivi)",
      "Apprenants qui suivent ensuite un autre cours, comme « Les bases d'internet » ou « Les bases de Microsoft 365 et Google Docs »",
      "Apprenants qui disent avoir fait une vraie tâche sur un ordinateur, comme une lettre ou une candidature"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur de bureau ou portable Windows ou Mac avec une souris ou un pavé tactile",
      "Un identifiant de connexion pour l'ordinateur (à la maison, ou donné par le personnel de la bibliothèque ou de la salle)",
      "Le Bloc-notes (Windows) ou TextEdit (Mac), déjà sur l'ordinateur",
      "Environ 60 minutes au total, en courtes séances, plus du temps pour s'exercer à la souris"
    ],
    facilitatorNotes: [
      "Préparez les connexions avant le cours pour que la première leçon ne soit pas passée sur les comptes.",
      "Donnez aux nouveaux apprenants plus de temps avec la souris ; laissez-les s'exercer à cliquer et double-cliquer sur les icônes du bureau avant de continuer.",
      "Séparez les utilisateurs de Windows et de Mac, ou montrez les deux séries d'étapes à l'écran.",
      "Sur les ordinateurs partagés, faites supprimer les fichiers d'exercice et faites se déconnecter à la fin, et rappelez de ne pas y enregistrer d'informations privées.",
      "Laissez les apprenants appuyer sur chaque touche et cliquer sur chaque bouton eux-mêmes ; évitez de leur prendre la souris."
    ]
  }
};
