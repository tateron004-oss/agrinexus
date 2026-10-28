"use strict";

// Koach Learn course, French translation of shared/microsoft-365-google-docs.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// Menu and formula names are given as they appear when the app is set to French (SOMME, MOYENNE, Fichier, Partager), with the English name where it helps.

module.exports = {
  id: "microsoft-365-google-docs-fr",
  lang: "fr",
  translationOf: "microsoft-365-google-docs",
  category: "Seniors and Technology",
  name: "Les bases de Microsoft 365 et Google Docs",
  skills: "Créer et enregistrer un document, Mettre en forme le texte, Partager et commenter, Faire un tableur simple, Additionner avec une formule, Télécharger en PDF",
  outcome: "faire un document propre d'une page et un tableur simple avec un total, dans Google Docs et Sheets ou dans Microsoft Word et Excel sur le web, puis les partager en sécurité et en garder une copie en PDF.",
  about: [
    "Aujourd'hui, la plupart des emplois, écoles, églises, associations et familles écrivent et partagent des documents en ligne. Les deux choix gratuits les plus courants sont Google Docs et Sheets (avec un compte Google) et Microsoft Word et Excel sur le web (avec un compte Microsoft). Les boutons ont des noms un peu différents, mais les compétences sont les mêmes.",
    "Au chapitre 1, vous créez, mettez en forme et partagez un document. Au chapitre 2, vous faites un petit tableur, additionnez une colonne avec une formule et enregistrez votre travail en PDF pour l'envoyer ou l'imprimer.",
    "Chaque leçon dure environ cinq minutes. Gardez l'application ouverte pendant la lecture pour faire tout de suite l'exercice « Essayez maintenant ». Un contrôle des connaissances termine chaque chapitre, et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Faites une affiche ou une lettre d'une page (par exemple pour une vente de garage, une journée de bénévolat ou un mot au propriétaire) avec un titre en gras, une liste à puces et une ligne de contact, et un petit tableur qui liste au moins cinq dépenses et les additionne avec une formule SOMME. Partagez le document avec une personne en « lecture seule », puis téléchargez les deux fichiers en PDF.",
  chapters: [
    {
      name: "Chapitre 1 : Écrire et partager un document",
      lessons: [
        {
          title: "Ouvrir Google Docs ou Word sur le web",
          minutes: 5,
          goal: "Ouvrir un nouveau document vierge, lui donner un nom et savoir où il est enregistré.",
          text: [
            "Google Docs est gratuit avec un compte Google (le même compte que Gmail). Allez sur docs.google.com et choisissez Document vierge. Microsoft Word sur le web est gratuit avec un compte Microsoft (le même compte qu'Outlook.com). Allez sur microsoft365.com, choisissez Word, puis Document vierge.",
            "Les deux enregistrent votre travail tout seuls pendant que vous tapez. Google le garde dans Google Drive ; Microsoft le garde dans OneDrive. Ce sont deux espaces de stockage en ligne, qu'on appelle aussi le cloud (le « nuage »), donc vous pouvez rouvrir le fichier depuis n'importe quel ordinateur ou téléphone après vous être connecté.",
            "Donnez à chaque fichier un nom clair en haut à gauche, par exemple « Affiche journée bénévoles - mai ». Des noms clairs rendent les fichiers faciles à retrouver."
          ],
          steps: ["Allez sur docs.google.com (Google) ou microsoft365.com (Microsoft) et connectez-vous.", "Choisissez un document vierge.", "Cliquez sur le nom en haut à gauche et tapez un nom de fichier clair.", "Tapez une phrase et regardez le message d'enregistrement en haut."],
          words: [["Cloud (nuage)", "un stockage sur internet, pour retrouver vos fichiers sur n'importe quel appareil après vous être connecté."], ["Google Drive / OneDrive", "les espaces de stockage en ligne de Google et de Microsoft, où sont gardés vos fichiers."], ["Compte", "votre identifiant et votre mot de passe pour un service."]],
          sources: [{ name: "Microsoft : Word, Excel et PowerPoint gratuits sur le web", url: "https://www.microsoft.com/en-us/microsoft-365/free-office-online-for-the-web" }, { name: "Google Docs", url: "https://docs.google.com" }],
          slides: [
            { title: "Deux choix gratuits", bullets: ["Google Docs : docs.google.com avec un compte Google", "Word sur le web : microsoft365.com avec un compte Microsoft"] },
            { title: "Il s'enregistre tout seul", bullets: ["Google enregistre dans Google Drive", "Microsoft enregistre dans OneDrive", "Rouvrez-le depuis n'importe quel appareil après connexion"] },
            { title: "Nommez chaque fichier", bullets: ["Cliquez sur le nom en haut à gauche", "Utilisez des noms clairs : « Affiche journée bénévoles - mai »"] }
          ],
          tryIt: "Ouvrez un document vierge dans Google Docs ou Word sur le web. Nommez-le « Mon document d'essai » et tapez une phrase sur votre semaine.",
          youCanNow: "ouvrir un nouveau document, le nommer, et vous savez qu'il s'enregistre tout seul dans le cloud."
        },
        {
          title: "Rendre un document propre",
          minutes: 5,
          goal: "Mettre en forme un titre, une liste et le texte pour qu'une page soit facile à lire.",
          text: [
            "Mettre en forme, c'est changer l'apparence du texte. D'abord, sélectionnez le texte : maintenez le bouton de la souris et faites glisser dessus, ou double-cliquez sur un mot. Puis utilisez la barre d'outils en haut : le bouton gras (B ou G selon l'application), I pour l'italique, la case de taille pour agrandir le texte, et les boutons de liste pour les puces ou les numéros.",
            "Utilisez un style de titre pour les titres. Dans la barre d'outils, trouvez la case qui indique « Texte normal » (Google) ou « Normal » (Word) et choisissez Titre 1. Les titres sont propres et aident les lecteurs d'écran.",
            "Restez simple : une police facile à lire, une taille de 11 à 14 pour le texte, un titre en gras, des paragraphes courts et des listes à puces. Si vous faites une erreur, appuyez sur Ctrl+Z (Commande+Z sur Mac) pour annuler."
          ],
          steps: ["Sélectionnez le texte à changer.", "Choisissez Titre 1 pour le titre.", "Sélectionnez quelques lignes et cliquez sur le bouton de liste à puces.", "Mettez un mot important en gras.", "Appuyez sur Ctrl+Z (Commande+Z sur Mac) pour annuler une erreur."],
          words: [["Mise en forme", "changer l'apparence du texte : taille, gras, listes, titres."], ["Sélectionner", "marquer du texte en faisant glisser la souris dessus pour pouvoir le modifier."], ["Barre d'outils", "la rangée de boutons en haut de l'application."]],
          slides: [
            { title: "Sélectionnez, puis changez", bullets: ["Faites glisser sur le texte ou double-cliquez sur un mot", "Puis utilisez la barre d'outils"] },
            { title: "Les bases de la barre d'outils", bullets: ["Bouton gras (B ou G), I = italique", "La case de taille agrandit ou réduit le texte", "Les boutons de liste font des puces ou des numéros"] },
            { title: "Des styles de titre pour les titres", bullets: ["Changez « Texte normal » en Titre 1", "C'est propre et cela aide les lecteurs d'écran"] },
            { title: "Restez simple", bullets: ["Une seule police, taille 11 à 14", "Paragraphes courts et puces", "Ctrl+Z (Commande+Z sur Mac) annule une erreur"] }
          ],
          tryIt: "Dans votre document d'essai, tapez un titre et trois éléments, par exemple trois choses à apporter à un pique-nique en famille. Mettez le titre en Titre 1, faites des éléments une liste à puces et mettez un mot en gras.",
          youCanNow: "mettre en forme une page avec un titre, une liste à puces et du texte en gras."
        },
        {
          title: "Partager en sécurité et utiliser les commentaires",
          minutes: 5,
          goal: "Partager un document avec une personne au bon niveau d'accès et laisser un commentaire.",
          text: [
            "Les deux applications ont un bouton Partager en haut à droite. Tapez l'adresse e-mail de la personne et choisissez ce qu'elle peut faire : lecture seule (lire), commentaire (suggérer) ou modification (changer le fichier). Donnez le niveau le plus bas dont la personne a besoin.",
            "Faites attention à « Tous les utilisateurs disposant du lien ». Toute personne qui reçoit le lien, même transféré, peut ouvrir le fichier. Ne l'utilisez pas pour des fichiers avec des détails privés comme des adresses, des numéros d'identité ou des informations de santé.",
            "Les commentaires permettent de donner un avis sans changer vos mots. Sélectionnez du texte, puis choisissez le bouton de commentaire (une bulle) ou faites un clic droit et choisissez Commentaire. Quand le problème est réglé, choisissez Résoudre."
          ],
          steps: ["Cliquez sur Partager en haut à droite.", "Tapez l'adresse e-mail de la personne.", "Choisissez Lecture, Commentaire ou Modification ; prenez le niveau le plus bas dont elle a besoin.", "Envoyez.", "Pour commenter : sélectionnez du texte, choisissez Commentaire, tapez, puis publiez-le."],
          words: [["Partager", "permettre à une autre personne d'ouvrir votre fichier."], ["Niveau d'accès", "ce qu'une personne peut faire avec votre fichier : lire, commenter ou modifier."], ["Commentaire", "une note sur le côté du fichier qui ne change pas le texte."]],
          slides: [
            { title: "Le bouton Partager, en haut à droite", bullets: ["Tapez son e-mail", "Choisissez Lecture, Commentaire ou Modification", "Donnez le niveau le plus bas dont elle a besoin"] },
            { title: "Attention à « Tous les utilisateurs disposant du lien »", bullets: ["Toute personne qui a le lien peut l'ouvrir", "Jamais pour des détails privés"] },
            { title: "Les commentaires", bullets: ["Un avis sans changer vos mots", "Sélectionnez du texte, choisissez Commentaire", "Résolvez-le une fois réglé"] }
          ],
          tryIt: "Partagez votre document d'essai avec un ami ou un membre de votre famille en lecture seule. Puis ajoutez sur votre titre un commentaire qui dit « Ce titre est-il clair ? »",
          youCanNow: "partager un document au bon niveau d'accès et utiliser les commentaires pour recevoir des avis."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Écrire et partager un document",
        questions: [
          { q: "Où Google Docs enregistre-t-il votre travail ?", options: ["Seulement sur une clé USB", "Il n'enregistre pas", "Dans Google Drive, en ligne", "Sur une imprimante"], answer: 2, why: "Google Docs enregistre automatiquement dans Google Drive." },
          { q: "Quel nom de fichier est le meilleur ?", options: ["« Document sans titre »", "« azer »", "« doc1 »", "« Affiche journée bénévoles - mai »"], answer: 3, why: "Un nom clair rend le fichier facile à retrouver." },
          { q: "Avant de mettre du texte en gras, vous devez d'abord :", options: ["Fermer l'application", "Imprimer la page", "Sélectionner le texte", "Partager le fichier"], answer: 2, why: "On sélectionne le texte, puis on le change avec la barre d'outils." },
          { q: "Votre voisin a seulement besoin de lire votre affiche. Quel niveau d'accès lui donnez-vous ?", options: ["Modification", "Propriétaire", "Lecture seule", "Tous les utilisateurs disposant du lien"], answer: 2, why: "Donnez le niveau le plus bas dont la personne a besoin." },
          { q: "Un document contient votre adresse et votre téléphone. Quel choix de partage devez-vous éviter ?", options: ["Partager avec une personne par e-mail", "Lecture seule", "Commentaire seulement", "Tous les utilisateurs disposant du lien"], answer: 3, why: "Toute personne qui reçoit le lien pourrait ouvrir un fichier avec des détails privés." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Les tableurs et la touche finale",
      lessons: [
        {
          title: "Votre premier tableur",
          minutes: 5,
          goal: "Faire un tableur avec des en-têtes et cinq lignes de données.",
          text: [
            "Un tableur est une grille de cases pour les listes et les nombres. Celui de Google s'appelle Sheets (sheets.google.com) ; celui de Microsoft s'appelle Excel (choisissez Excel sur microsoft365.com). Il est parfait pour les budgets, les listes d'inscription, les horaires et les inventaires.",
            "Les colonnes vont de haut en bas et ont des lettres (A, B, C). Les lignes vont de gauche à droite et ont des numéros (1, 2, 3). Chaque case est une cellule, nommée par sa colonne et sa ligne : B2, c'est la colonne B, ligne 2.",
            "Mettez les en-têtes à la ligne 1, comme « Article » en A1 et « Coût » en B1. Puis tapez un élément par ligne en dessous. Tapez les nombres sans mots (12,50 et non « 12,50 euros ») pour que le tableur puisse calculer avec eux. Selon la langue de l'application, la virgule décimale peut être un point (12.50)."
          ],
          steps: ["Ouvrez Google Sheets ou Excel sur le web et choisissez une feuille vierge.", "Nommez le fichier.", "Tapez les en-têtes à la ligne 1 (A1 : Article, B1 : Coût).", "Tapez cinq articles dans la colonne A et leur coût dans la colonne B.", "Mettez la ligne 1 en gras."],
          words: [["Tableur", "une grille de cellules pour les listes et les nombres, comme Google Sheets ou Excel."], ["Cellule", "une case d'un tableur, nommée par la lettre de colonne et le numéro de ligne, comme B2."], ["Colonne / ligne", "les colonnes vont de haut en bas (lettres) ; les lignes vont de gauche à droite (numéros)."]],
          slides: [
            { title: "À quoi sert un tableur", bullets: ["Budgets et dépenses", "Listes d'inscription et horaires", "Inventaires"] },
            { title: "Colonnes, lignes, cellules", bullets: ["Colonnes : lettres A, B, C", "Lignes : numéros 1, 2, 3", "Cellule B2 = colonne B, ligne 2"] },
            { title: "Préparez-le", bullets: ["Les en-têtes à la ligne 1", "Un élément par ligne", "Des nombres sans mots : 12,50"] }
          ],
          tryIt: "Faites un tableur appelé « Budget d'essai ». Mettez Article et Coût à la ligne 1, puis cinq vraies dépenses pour une semaine ou un événement, comme les courses, le bus ou la décoration.",
          youCanNow: "préparer un tableur avec des en-têtes et des lignes de données."
        },
        {
          title: "Additionner avec une formule",
          minutes: 5,
          goal: "Utiliser SOMME pour totaliser une colonne qui se met à jour toute seule.",
          text: [
            "Une formule dit au tableur de faire un calcul. Toute formule commence par le signe égal (=). Pour additionner les cellules B2 à B6, cliquez sur une cellule vide en dessous et tapez =SOMME(B2:B6), puis appuyez sur Entrée. Si l'application est en anglais, la formule s'appelle =SUM(B2:B6).",
            "Les deux-points veulent dire « jusqu'à », donc B2:B6, c'est B2, B3, B4, B5 et B6. Si vous changez un nombre, le total change tout seul. C'est le grand avantage par rapport à une calculatrice.",
            "D'autres formules simples : =MOYENNE(B2:B6) donne la moyenne (AVERAGE en anglais), et =B2*2 double une cellule. Si vous voyez une erreur comme #NOM? (#NAME? en anglais), vérifiez l'orthographe et le signe égal."
          ],
          steps: ["Cliquez sur la cellule vide sous vos nombres.", "Tapez =SOMME(B2:B6) avec votre propre plage de cellules.", "Appuyez sur Entrée.", "Changez un nombre et regardez le total se mettre à jour.", "Tapez le mot Total dans la cellule à sa gauche."],
          words: [["Formule", "une instruction qui commence par = et dit au tableur de calculer."], ["SOMME (SUM)", "une formule qui additionne un groupe de cellules."], ["Plage", "un groupe de cellules, écrit comme B2:B6 (de B2 à B6)."]],
          slides: [
            { title: "Les formules commencent par =", bullets: ["=SOMME(B2:B6) additionne B2 à B6 (=SUM en anglais)", "Appuyez sur Entrée pour voir le résultat"] },
            { title: "Il se met à jour tout seul", bullets: ["Changez un nombre", "Le total change aussi"] },
            { title: "D'autres formules simples", bullets: ["=MOYENNE(B2:B6) donne la moyenne", "=B2*2 double une cellule", "#NOM? veut dire : vérifiez l'orthographe"] }
          ],
          tryIt: "Dans votre Budget d'essai, tapez Total en A7 et =SOMME(B2:B6) en B7. Puis changez une dépense et vérifiez que le total change.",
          youCanNow: "totaliser une colonne avec SOMME, et vous savez que le total se met à jour quand les nombres changent."
        },
        {
          title: "Enregistrer en PDF et imprimer",
          minutes: 4,
          goal: "Télécharger un document ou un tableur en PDF et l'imprimer.",
          text: [
            "Un PDF est un fichier qui a le même aspect sur tous les téléphones et ordinateurs, et qu'on ne peut pas facilement modifier. Beaucoup de candidatures, de bureaux et d'écoles demandent des PDF.",
            "Dans Google Docs ou Sheets : ouvrez le menu Fichier, choisissez Télécharger, puis PDF. Dans Word ou Excel sur le web : ouvrez le menu Fichier et cherchez Enregistrer sous ou Télécharger, puis choisissez PDF. Le fichier va dans votre dossier Téléchargements.",
            "Pour imprimer, ouvrez le menu Fichier et choisissez Imprimer, ou appuyez sur Ctrl+P (Commande+P sur Mac). Regardez d'abord l'aperçu pour que rien ne soit coupé. À la bibliothèque, demandez au personnel comment payer l'impression."
          ],
          steps: ["Ouvrez le menu Fichier.", "Choisissez Télécharger (Google) ou Enregistrer sous / Télécharger (Microsoft).", "Choisissez PDF.", "Trouvez le fichier dans votre dossier Téléchargements.", "Pour imprimer : Ctrl+P (Commande+P sur Mac), regardez l'aperçu, puis imprimez."],
          words: [["PDF", "un type de fichier qui a le même aspect partout et qui est difficile à modifier."], ["Dossier Téléchargements", "l'endroit de l'ordinateur où vont les fichiers téléchargés."]],
          slides: [
            { title: "Pourquoi un PDF ?", bullets: ["Le même aspect partout", "Difficile à modifier par erreur", "Souvent demandé par les employeurs et les bureaux"] },
            { title: "Faire un PDF", bullets: ["Menu Fichier, puis Télécharger (Google)", "Menu Fichier, puis Enregistrer sous ou Télécharger (Microsoft)", "Choisissez PDF ; regardez dans Téléchargements"] },
            { title: "L'imprimer", bullets: ["Ctrl+P (Commande+P sur Mac)", "Regardez d'abord l'aperçu"] }
          ],
          tryIt: "Tâche finale : faites une affiche ou une lettre d'une page avec un titre, une liste à puces et une ligne de contact, plus un tableur de cinq dépenses avec un total SOMME. Partagez le document en lecture seule, puis téléchargez les deux en PDF.",
          youCanNow: "terminer un document et un tableur, les partager en sécurité et les enregistrer en PDF."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Les tableurs et la touche finale",
        questions: [
          { q: "Qu'est-ce que la cellule C4 ?", options: ["Ligne C, colonne 4", "Une formule", "Le quatrième fichier", "Colonne C, ligne 4"], answer: 3, why: "Les cellules sont nommées par la lettre de colonne, puis le numéro de ligne." },
          { q: "Comment taper une dépense de douze euros cinquante ?", options: ["« douze cinquante »", "« 12,50 euros »", "12,50", "« environ 12 »"], answer: 2, why: "Des nombres sans mots permettent au tableur de calculer." },
          { q: "Quelle formule additionne les cellules B2 à B6 ?", options: ["ajoute(B2-B6)", "SOMME B2 B6", "=SOMME(B2:B6)", "B2+B6"], answer: 2, why: "Les formules commencent par =, et B2:B6 veut dire de B2 à B6." },
          { q: "Vous changez une dépense dans votre budget. Que devient le total SOMME ?", options: ["Rien", "Il devient une erreur", "Vous devez le retaper", "Il se met à jour tout seul"], answer: 3, why: "Les formules recalculent quand les nombres changent." },
          { q: "Un bureau demande votre lettre dans un fichier qui a le même aspect partout. Vous envoyez :", options: ["Une capture d'écran de votre téléphone", "Une photo de l'écran", "Un lien pour tout le monde", "Un PDF"], answer: 3, why: "Un PDF a le même aspect sur tous les appareils." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases de Microsoft 365 et Google Docs",
    questions: [
      { q: "De quoi avez-vous besoin pour utiliser Google Docs gratuitement ?", options: ["Un compte Google", "Une licence payante", "Une imprimante", "Un compte Microsoft"], answer: 0, why: "Google Docs est gratuit avec un compte Google." },
      { q: "Où Word sur le web enregistre-t-il vos fichiers ?", options: ["Google Drive", "Une disquette", "OneDrive", "Nulle part"], answer: 2, why: "Microsoft enregistre dans OneDrive." },
      { q: "Le cloud, c'est :", options: ["La météo", "Un virus", "Un type d'imprimante", "Un stockage sur internet accessible depuis n'importe quel appareil"], answer: 3, why: "Le stockage dans le cloud permet d'ouvrir vos fichiers partout après connexion." },
      { q: "Où renommez-vous un document Google Docs ?", options: ["En cliquant sur le nom en haut à gauche", "En redémarrant l'ordinateur", "En l'imprimant d'abord", "En vous l'envoyant par e-mail"], answer: 0, why: "Le nom du fichier est en haut à gauche." },
      { q: "Pour changer l'apparence d'un mot, vous devez d'abord :", options: ["Partager le fichier", "Télécharger un PDF", "Sélectionner le mot", "Fermer l'onglet"], answer: 2, why: "On sélectionne d'abord, puis on met en forme." },
      { q: "Quelle est la meilleure façon de faire un titre ?", options: ["Le taper en majuscules avec des espaces", "Le mettre en bas", "L'écrire tout petit", "Choisir le style Titre 1"], answer: 3, why: "Les styles de titre sont propres et aident les lecteurs d'écran." },
      { q: "Vous avez fait une erreur de mise en forme. Qu'est-ce qui l'annule ?", options: ["Ctrl+P", "Ctrl+Z (Commande+Z sur Mac)", "Fermer le navigateur", "Le bouton Partager"], answer: 1, why: "Ctrl+Z ou Commande+Z annule la dernière modification." },
      { q: "Où se trouve le bouton Partager dans les deux applications ?", options: ["En haut à droite", "En bas de la page", "Dans l'aperçu avant impression", "Dans une cellule du tableur"], answer: 0, why: "Les deux applications placent Partager en haut à droite." },
      { q: "Votre collègue doit proposer des changements sans modifier vos mots. Vous lui donnez :", options: ["Modification", "Commentaire", "Propriétaire", "Aucun accès"], answer: 1, why: "L'accès Commentaire lui permet de proposer sans modifier." },
      { q: "Pourquoi faire attention à « Tous les utilisateurs disposant du lien » ?", options: ["Cela supprime le fichier", "Toute personne qui a le lien peut l'ouvrir", "Cela coûte de l'argent", "Cela transforme le fichier en PDF"], answer: 1, why: "Un lien transféré peut arriver chez des inconnus." },
      { q: "Un commentaire, c'est :", options: ["Une modification de votre texte", "Une note sur le côté qui ne change pas le texte", "Un PDF", "Une formule"], answer: 1, why: "Les commentaires donnent un avis sans modifier." },
      { q: "Quel est un bon usage d'un tableur ?", options: ["Un budget familial", "Une lettre d'amour", "Un album photo", "Un appel téléphonique"], answer: 0, why: "Les tableurs servent aux listes et aux nombres." },
      { q: "Les colonnes d'un tableur sont nommées avec :", options: ["Des numéros", "Des lettres", "Des couleurs", "Des émojis"], answer: 1, why: "Les colonnes utilisent des lettres ; les lignes utilisent des numéros." },
      { q: "Où vont d'habitude les en-têtes comme « Article » et « Coût » ?", options: ["À la ligne 1", "À la dernière ligne", "Dans un commentaire", "Dans le nom du fichier"], answer: 0, why: "Les en-têtes vont dans la ligne du haut." },
      { q: "Toute formule commence par :", options: ["Un signe dollar", "Un signe égal (=)", "Le mot Total", "Un espace"], answer: 1, why: "Le = dit au tableur que c'est une formule." },
      { q: "Dans =SOMME(B2:B6), les deux-points veulent dire :", options: ["Diviser", "Jusqu'à", "Moins", "Stop"], answer: 1, why: "B2:B6 veut dire de B2 jusqu'à B6." },
      { q: "Vous voyez #NOM? dans une cellule. Que devez-vous vérifier ?", options: ["L'imprimante", "L'orthographe de la formule", "Votre mot de passe", "La couleur du fichier"], answer: 1, why: "#NOM? veut souvent dire qu'une formule est mal écrite." },
      { q: "Quelle formule donne la moyenne de B2 à B6 ?", options: ["=MOYENNE(B2:B6)", "=SOMME(B2)", "MOY B2-B6", "=B2"], answer: 0, why: "MOYENNE calcule la moyenne d'une plage." },
      { q: "Dans Google Docs, comment faire un PDF ?", options: ["Menu Fichier, Télécharger, PDF", "Partager, Tous les utilisateurs disposant du lien", "Appuyer sur Ctrl+Z", "Clic droit, puis Commentaire"], answer: 0, why: "Fichier, Télécharger, PDF enregistre un PDF." },
      { q: "Avant d'imprimer, vous devez :", options: ["Regarder l'aperçu avant impression", "Supprimer le fichier", "Le partager avec tout le monde", "Changer toutes les polices"], answer: 0, why: "L'aperçu montre si quelque chose est coupé." }
    ]
  }
};
