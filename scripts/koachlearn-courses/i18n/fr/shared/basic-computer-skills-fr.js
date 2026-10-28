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
  chapters: [
    {
      name: "Chapitre 1 : Se sentir à l'aise",
      lessons: [
        {
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
          youCanNow: "nommer les parties d'un ordinateur, l'allumer et vous connecter."
        },
        {
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
          youCanNow: "pointer, cliquer, double-cliquer, faire un clic droit et faire défiler avec une souris ou un pavé tactile."
        },
        {
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
          youCanNow: "taper des phrases avec majuscules et ponctuation, corriger les erreurs et utiliser les raccourcis courants."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Se sentir à l'aise",
        questions: [
          { q: "Qu'est-ce qu'un pavé tactile ?", options: ["L'écran", "Un type d'imprimante", "La surface tactile plate d'un portable qui fonctionne comme une souris", "Un câble"], answer: 2, why: "Le pavé tactile fait le travail de la souris sur un portable." },
          { q: "À quoi ressemble en général le bouton marche ?", options: ["Une étoile", "Un cercle avec un trait en haut", "Un cœur", "Un point d'interrogation"], answer: 1, why: "C'est le symbole habituel de mise en marche." },
          { q: "Comment ouvrir un dossier avec la souris ?", options: ["Faire un clic droit une fois", "Rouler la molette", "Double-cliquer dessus", "Secouer la souris"], answer: 2, why: "Un double-clic ouvre les choses." },
          { q: "Comment taper une seule majuscule ?", options: ["Appuyer sur Entrée", "Maintenir Maj et appuyer sur la lettre", "Appuyer sur Retour arrière", "Appuyer deux fois sur la barre d'espace"], answer: 1, why: "Maj plus une lettre donne une majuscule." },
          { q: "Vous avez tapé une mauvaise lettre. Quelle touche l'efface ?", options: ["La barre d'espace", "Maj", "Verr Maj", "Retour arrière (Supprimer sur Mac)"], answer: 3, why: "Retour arrière efface la lettre à gauche du curseur." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Applications, fichiers et entretien",
      lessons: [
        {
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
          youCanNow: "ouvrir n'importe quelle application par son nom, passer d'une fenêtre à l'autre et les fermer."
        },
        {
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
          youCanNow: "créer des dossiers, enregistrer des fichiers avec des noms clairs et les retrouver."
        },
        {
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
          youCanNow: "utiliser un ordinateur du début à la fin : vous connecter, travailler, enregistrer, retrouver vos fichiers et éteindre en sécurité."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Applications, fichiers et entretien",
        questions: [
          { q: "Sur Windows, comment ouvrir une application que vous ne voyez pas ?", options: ["Éteindre l'écran", "Débrancher l'ordinateur", "Appuyer sur Retour arrière", "Cliquer sur Démarrer et taper son nom"], answer: 3, why: "La recherche de Démarrer trouve n'importe quelle application par son nom." },
          { q: "Sur Mac, le bouton rouge en haut à gauche d'une fenêtre :", options: ["La met en plein écran", "La cache", "La ferme", "L'imprime"], answer: 2, why: "Rouge ferme, jaune réduit, vert remplit l'écran." },
          { q: "Qu'est-ce qu'un dossier ?", options: ["Un type de clavier", "Un endroit qui contient des fichiers, comme un tiroir", "Une mise à jour", "Une page web"], answer: 1, why: "Les dossiers gardent les fichiers en ordre." },
          { q: "Quelles touches enregistrent votre travail sur Windows ?", options: ["Ctrl+Z", "Ctrl+P", "Alt+Tab", "Ctrl+S"], answer: 3, why: "Ctrl+S enregistre (Commande+S sur Mac)." },
          { q: "L'ordinateur est lent et un programme est bloqué. Une bonne première étape est de :", options: ["Appeler un numéro affiché dans une fenêtre", "Enregistrer votre travail et redémarrer", "Verser de l'eau dessus", "Acheter un nouvel ordinateur"], answer: 1, why: "Un redémarrage règle beaucoup de problèmes." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases de l'ordinateur",
    questions: [
      { q: "Quelle partie regardez-vous pour voir votre travail ?", options: ["Le câble d'alimentation", "La souris", "L'écran", "Le clavier"], answer: 2, why: "L'écran montre ce que fait l'ordinateur." },
      { q: "Un ordinateur portable est :", options: ["Un chargeur de téléphone", "Un type de souris", "Une imprimante", "Un ordinateur qui s'ouvre, avec l'écran et le clavier ensemble"], answer: 3, why: "Les portables sont tout-en-un et se transportent." },
      { q: "Après avoir allumé l'ordinateur, vous devez en général :", options: ["Le débrancher", "Vous connecter avec un mot de passe ou un code PIN", "Appuyer sur Verr Maj", "Fermer le couvercle"], answer: 1, why: "Se connecter dit à l'ordinateur que c'est vous." },
      { q: "Le pointeur est :", options: ["Un dossier", "Le bouton marche", "La petite flèche qui bouge avec la souris", "Une touche"], answer: 2, why: "Le pointeur suit la souris." },
      { q: "Votre souris arrive au bord de la table. Que faites-vous ?", options: ["La retourner", "Appuyer plus fort", "Redémarrer l'ordinateur", "La soulever et la reposer au milieu"], answer: 3, why: "Soulever la souris ne déplace pas le pointeur." },
      { q: "Un clic droit montre :", options: ["Seulement les options d'alimentation", "Un petit menu de choix", "Un nouvel ordinateur", "Jamais rien"], answer: 1, why: "Le clic droit ouvre un menu." },
      { q: "Sur un pavé tactile, comment faire défiler ?", options: ["Appuyer sur Maj", "Toucher le bouton marche", "Faire glisser deux doigts vers le haut ou le bas", "Fermer le couvercle"], answer: 2, why: "Deux doigts font défiler sur un pavé tactile." },
      { q: "Le trait qui clignote là où va s'écrire votre texte s'appelle :", options: ["L'écran", "Le dossier", "Le Dock", "Le curseur"], answer: 3, why: "Le curseur montre où les lettres vont apparaître." },
      { q: "Verr Maj :", options: ["Efface un mot", "Met toutes les lettres en majuscules jusqu'au prochain appui", "Enregistre le fichier", "Éteint l'ordinateur"], answer: 1, why: "Il bloque les majuscules." },
      { q: "Quel raccourci annule une erreur sur Windows ?", options: ["Ctrl+V", "Ctrl+S", "Ctrl+Z", "Ctrl+P"], answer: 2, why: "Ctrl+Z annule (Commande+Z sur Mac)." },
      { q: "Entrée (Retour sur Mac) sert à :", options: ["Éteindre l'écran", "Effacer une lettre", "Faire une majuscule", "Commencer une nouvelle ligne"], answer: 3, why: "Entrée commence une nouvelle ligne ou valide." },
      { q: "Sur Mac, comment ouvrir une application par son nom ?", options: ["Appuyer sur le bouton marche", "Cliquer sur la loupe (Spotlight) et taper le nom", "Faire un clic droit sur l'écran", "Maintenir Maj"], answer: 1, why: "Spotlight trouve les applications par leur nom." },
      { q: "Sur Windows, le X en haut à droite d'une fenêtre :", options: ["La ferme", "L'agrandit", "L'enregistre", "La cache"], answer: 0, why: "Le X ferme la fenêtre." },
      { q: "Une fenêtre réduite va :", options: ["Dans la barre des tâches (Windows) ou le Dock (Mac)", "À la corbeille pour toujours", "À l'imprimante", "Sur internet"], answer: 0, why: "Cliquez sur son icône pour la faire revenir." },
      { q: "Quel est le meilleur nom de fichier ?", options: ["Questions pour le Dr Lee", "azer", "Sans titre", "1"], answer: 0, why: "Un nom clair aide à le retrouver plus tard." },
      { q: "L'application pour voir les fichiers sur Windows est :", options: ["L'Explorateur de fichiers", "Spotlight", "Le Dock", "Safari"], answer: 0, why: "L'Explorateur de fichiers montre les fichiers et les dossiers." },
      { q: "Vous ne savez plus où vous avez enregistré un fichier. Vous pouvez :", options: ["Chercher une partie de son nom", "Redémarrer jusqu'à ce qu'il apparaisse", "Acheter un nouvel ordinateur", "Débrancher la souris"], answer: 0, why: "La recherche trouve les fichiers par leur nom." },
      { q: "Pourquoi installer les mises à jour ?", options: ["Elles corrigent des problèmes et ferment des failles de sécurité", "Elles suppriment vos fichiers", "Elles coûtent de l'argent à chaque fois", "Elles ralentissent l'ordinateur pour toujours"], answer: 0, why: "Les mises à jour améliorent la sécurité et corrigent les problèmes." },
      { q: "Comment éteindre correctement un Mac ?", options: ["Menu Pomme, puis Éteindre", "Tirer sur la prise", "Fermer la fenêtre", "Appuyer sur Verr Maj"], answer: 0, why: "Le menu Pomme permet d'éteindre en sécurité." },
      { q: "Une fenêtre dit que vous avez un virus et qu'il faut appeler un numéro. Vous devez :", options: ["Ne pas appeler ; la fermer et demander à une personne de confiance", "Appeler tout de suite", "Leur donner votre mot de passe", "Payer avec une carte cadeau"], answer: 0, why: "Les vrais avertissements ne demandent jamais d'appeler un numéro." }
    ]
  }
};
