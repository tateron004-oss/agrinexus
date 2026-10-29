"use strict";

// Koach Learn course (French translation of underserved/underserved-tech-skills-beginners.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-tech-skills-beginners-fr",
  lang: "fr",
  translationOf: "underserved-tech-skills-beginners",
  category: "Undeserved Community",
  name: "Compétences numériques pour débutants",
  skills: "Utiliser un écran tactile et une souris, Se connecter gratuitement ou à petit prix, Chercher sur le web et repérer les sites fiables, Envoyer un e-mail avec une pièce jointe, Créer un mot de passe solide, Demander de l'aide technique à l'IA",
  outcome: "utiliser un téléphone ou un ordinateur gratuit de bibliothèque pour aller sur internet, chercher des informations fiables, envoyer un e-mail avec une photo ou un fichier joint, et protéger votre compte avec un mot de passe solide.",
  about: [
    "Ce cours s'adresse à toute personne qui se sent débutante ou mal à l'aise avec la technologie. Beaucoup de gens n'ont jamais eu l'occasion d'apprendre, et ce n'est pas grave. Nous commençons au tout début et avançons une petite étape à la fois.",
    "Vous vous entraînerez à utiliser un écran tactile et une souris, vous trouverez des moyens gratuits ou peu chers d'aller sur internet, vous chercherez sur le web, vous distinguerez un site fiable d'un site risqué, vous enverrez un e-mail avec une pièce jointe, vous créerez un mot de passe solide et vous demanderez de l'aide à un assistant d'IA gratuit quand vous êtes bloqué.",
    "Vous pouvez utiliser votre propre téléphone ou un ordinateur gratuit dans une bibliothèque publique ou un centre communautaire. Chaque leçon dure environ cinq minutes et se termine par une tâche « Essayez maintenant ». Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Sur un téléphone ou un ordinateur de bibliothèque, cherchez les horaires de votre bibliothèque publique sur son site officiel, faites une capture d'écran ou une photo des horaires, et envoyez-la par e-mail à un membre de votre famille ou à un ami avec un court message poli. Utilisez un compte protégé par un mot de passe solide, et déconnectez-vous si vous avez utilisé un ordinateur partagé.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes de communautés mal desservies qui découvrent la technologie ou s'en méfient : personnes âgées, personnes qui n'ont jamais eu l'occasion d'apprendre, personnes de retour après une longue absence et personnes dont ce n'est pas la langue maternelle.",
    startingPoint: "Ils ont parfois un téléphone simple pour appeler. Ils utilisent peu ou pas les écrans tactiles, la souris, le clavier, la recherche sur le web ou l'e-mail, et certains n'ont jamais créé de compte ni de mot de passe.",
    gap: "Les employeurs, les écoles, les cliniques et les aides sociales attendent maintenant qu'on aille en ligne, qu'on trouve des informations et qu'on envoie des e-mails. Les apprenants ont besoin de ces premières compétences, et de bonnes habitudes avec les mots de passe et les sites web, pour faire les tâches du quotidien sans dépendre des autres ni tomber dans des arnaques.",
    constraints: [
      "Niveau de lecture : mots très simples et phrases courtes (niveau milieu d'école primaire)",
      "Appareils : parfois seulement un téléphone simple ou un ordinateur de bibliothèque à temps limité",
      "Coût : seulement des endroits gratuits pour aller sur internet et une messagerie gratuite",
      "Vie privée : aucun vrai mot de passe ni code montré ou partagé pendant la pratique ; se déconnecter des ordinateurs partagés",
      "Rythme : une petite étape à la fois, avec beaucoup de pratique"
    ],
    prerequisites: "Aucun. C'est le premier cours pour les personnes qui découvrent la technologie."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Sur un téléphone ou un ordinateur", action: "toucher, glisser, cliquer, faire défiler et taper, et corriger une faute de frappe", standard: "sans aide" },
    { id: "O2", condition: "Là où vous habitez", action: "trouver un endroit gratuit pour aller sur internet, connecter un téléphone au Wi-Fi et vérifier si vous avez droit à Lifeline", standard: "en nommant l'endroit et ses horaires" },
    { id: "O3", condition: "Face à une chose que vous devez chercher", action: "chercher sur le web et choisir un résultat fiable", standard: "en évitant les publicités et en fermant les pages avec des fenêtres surgissantes ou des prix" },
    { id: "O4", condition: "Avec une messagerie gratuite", action: "envoyer un e-mail avec un objet, un court message et une photo ou un fichier joint", standard: "en vérifiant l'adresse, le message et la pièce jointe avant d'envoyer" },
    { id: "O5", condition: "Quand vous créez ou utilisez un compte", action: "créer un mot de passe solide et protéger vos comptes", standard: "sans jamais donner un code et en vous déconnectant des ordinateurs partagés" },
    { id: "O6", condition: "Quand vous êtes bloqué sur une tâche technique", action: "demander à un assistant d'IA gratuit des étapes courtes et décrire ce que vous voyez quand une étape ne correspond pas", standard: "sans taper aucun mot de passe, code ni numéro privé" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Prendre ses repères et aller sur internet",
      lessons: [
        {
          objectives: ["O1"],
          title: "Écrans tactiles, souris et claviers",
          minutes: 5,
          goal: "Toucher, glisser, cliquer, faire défiler et taper sur un téléphone ou un ordinateur.",
          text: [
            "Sur un téléphone ou une tablette, vous utilisez votre doigt. Touchez une fois pour ouvrir quelque chose. Glissez (faites glisser votre doigt) pour aller en haut, en bas ou sur le côté. Appuyez longuement pour voir plus de choix.",
            "Sur un ordinateur, vous utilisez une souris ou un pavé tactile. Bougez-la pour déplacer la flèche à l'écran. Cliquez une fois sur le bouton gauche pour choisir quelque chose. Double-cliquez pour ouvrir certains fichiers. Faites rouler la molette, ou glissez deux doigts sur le pavé tactile, pour faire défiler.",
            "Le clavier tape les lettres. La touche Maj fait une majuscule. La touche Retour arrière efface la lettre avant le curseur. Entrée passe à la ligne ou lance une recherche."
          ],
          steps: ["Téléphone : touchez une application pour l'ouvrir, glissez pour faire défiler, appuyez sur le bouton d'accueil ou glissez vers le haut pour revenir à l'accueil.", "Ordinateur : bougez la souris, cliquez une fois pour choisir, faites défiler avec la molette.", "Clavier : tapez votre prénom, utilisez Maj pour la majuscule, utilisez Retour arrière pour corriger une erreur."],
          words: [["Toucher", "appuyer une fois rapidement sur l'écran."], ["Glisser", "faire glisser votre doigt sur l'écran."], ["Cliquer", "appuyer une fois sur le bouton de la souris."], ["Curseur", "la petite barre qui clignote et montre où votre texte va apparaître."]],
          slides: [
            { title: "Sur un téléphone ou une tablette", bullets: ["Touchez pour ouvrir", "Glissez pour bouger", "Appui long pour plus de choix"] },
            { title: "Sur un ordinateur", bullets: ["Bougez la souris pour bouger la flèche", "Cliquez une fois pour choisir", "Défilez avec la molette ou deux doigts"] },
            { title: "Les bases du clavier", bullets: ["Maj : majuscule", "Retour arrière : effacer une erreur", "Entrée : nouvelle ligne ou recherche"] }
          ],
          tryIt: "Sur un téléphone ou un ordinateur, ouvrez une application ou un programme, faites défiler vers le bas puis vers le haut, puis tapez votre prénom avec une majuscule et corrigez une erreur avec Retour arrière.",
          youCanNow: "toucher, glisser, cliquer, faire défiler et taper sur un téléphone ou un ordinateur.",
          quickCheck: [
            { objective: "O1", q: "Que veut dire « glisser » sur un téléphone ?", options: ["Faire glisser le doigt sur l'écran", "Toucher deux fois vite", "Appuyer sur le bouton marche-arrêt", "Secouer le téléphone"], answer: 0, why: "Glisser, c'est faire bouger le doigt sur l'écran pour aller vers le haut, le bas ou le côté." },
            { objective: "O1", q: "Il vous faut une majuscule au début de votre prénom. Sur quelle touche appuyez-vous ?", options: ["Entrée", "Maj", "Retour arrière", "Espace"], answer: 1, why: "La touche Maj fait une majuscule." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Aller sur internet gratuitement ou à petit prix",
          minutes: 5,
          goal: "Trouver un lieu gratuit pour aller sur internet et connaître la réduction Lifeline.",
          text: [
            "Les bibliothèques publiques offrent des ordinateurs et du Wi-Fi gratuits. Beaucoup de centres communautaires, de centres pour l'emploi et certains restaurants aussi. Demandez au personnel comment réserver un ordinateur et combien de temps vous pouvez l'utiliser.",
            "Aux États-Unis, Lifeline est un programme fédéral qui réduit le coût mensuel du téléphone ou d'internet pour les personnes à faible revenu ou qui reçoivent des aides comme SNAP (aide alimentaire) ou Medicaid (assurance santé publique). La réduction standard va jusqu'à 9,25 $ par mois. Vous faites la demande sur getinternet.gov, puis vous contactez une compagnie de téléphone ou d'internet qui participe. Les montants et les règles peuvent changer : vérifiez sur lifelinesupport.org. Ailleurs, renseignez-vous sur les tarifs sociaux de votre pays.",
            "Sur un Wi-Fi public, évitez si possible de faire vos opérations bancaires ou de taper les mots de passe de comptes importants. Ne laissez jamais un ordinateur partagé enregistrer votre mot de passe."
          ],
          steps: ["Appelez ou passez à votre bibliothèque ou centre communautaire et renseignez-vous sur les ordinateurs et le Wi-Fi gratuits.", "Pour connecter un téléphone au Wi-Fi : ouvrez Réglages (ou Paramètres), touchez Wi-Fi, choisissez le réseau et tapez le mot de passe s'il y en a un.", "Si l'argent manque, vérifiez si vous avez droit à Lifeline sur lifelinesupport.org."],
          words: [["Wi-Fi", "un moyen sans fil de se connecter à internet."], ["Lifeline", "un programme fédéral américain qui réduit les factures de téléphone ou d'internet des personnes qui y ont droit."], ["Wi-Fi public", "un Wi-Fi gratuit partagé par beaucoup de gens dans un lieu public."]],
          sources: [{ name: "Lifeline Support (USAC, sous le contrôle de la FCC)", url: "https://www.lifelinesupport.org/" }],
          slides: [
            { title: "Des lieux gratuits pour aller sur internet", bullets: ["Ordinateurs et Wi-Fi de la bibliothèque", "Centres communautaires et centres pour l'emploi", "Demandez au personnel comment réserver"] },
            { title: "Lifeline réduit votre facture (États-Unis)", bullets: ["Faible revenu, ou SNAP, Medicaid et autres", "Réduction standard jusqu'à 9,25 $ par mois", "Demande sur getinternet.gov ; voir lifelinesupport.org"] },
            { title: "Sécurité sur le Wi-Fi public", bullets: ["Évitez la banque en ligne sur le Wi-Fi public", "Ne laissez pas un ordinateur partagé garder vos mots de passe"] }
          ],
          tryIt: "Renseignez-vous sur les horaires d'accès gratuit aux ordinateurs de la bibliothèque ou du centre communautaire le plus proche. Si vous avez un téléphone, connectez-le à un réseau Wi-Fi par Réglages, puis Wi-Fi.",
          youCanNow: "trouver un lieu gratuit pour aller sur internet, vous connecter au Wi-Fi et savoir où chercher une facture internet moins chère.",
          quickCheck: [
            { objective: "O2", q: "À part les bibliothèques, où trouve-t-on souvent du Wi-Fi gratuit ?", options: ["Seulement à la maison", "Dans le coffre-fort d'une banque", "Dans les centres communautaires et les centres pour l'emploi", "Nulle part ailleurs"], answer: 2, why: "Beaucoup de centres communautaires, de centres pour l'emploi et certains restaurants offrent du Wi-Fi gratuit." },
            { objective: "O2", q: "Vous êtes sur le Wi-Fi gratuit d'un café. Qu'est-ce qu'il vaut mieux éviter ?", options: ["Lire les actualités", "Regarder la météo", "Chercher les horaires de bus", "Faire des opérations bancaires en ligne"], answer: 3, why: "Sur un Wi-Fi public, évitez si possible la banque en ligne et les mots de passe importants." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Chercher sur le web et repérer les sites fiables",
          minutes: 5,
          goal: "Chercher des informations et décider si un site peut être fiable.",
          text: [
            "Un moteur de recherche comme Google ou Bing trouve des sites pour vous. Tapez quelques mots clés, comme « horaires bibliothèque Dakar », dans la zone de recherche et appuyez sur Entrée.",
            "Tous les résultats ne sont pas fiables. Les résultats marqués « Sponsorisé » ou « Annonce » sont des publicités payées. Aux États-Unis, les sites officiels du gouvernement finissent par .gov ; ailleurs, cherchez l'adresse officielle de l'administration de votre pays. Vérifiez que le vrai nom du lieu figure dans l'adresse web.",
            "Méfiez-vous des sites avec beaucoup de fenêtres surgissantes, qui disent que vous avez gagné un prix, qui vous demandent de télécharger quelque chose, ou qui demandent des informations personnelles. Fermez-les et revenez en arrière."
          ],
          steps: ["Ouvrez un navigateur web et tapez quelques mots clés dans la zone de recherche.", "Passez les résultats marqués Sponsorisé ou Annonce.", "Choisissez un résultat dont l'adresse correspond au vrai organisme ou finit par .gov.", "Fermez toute page avec des fenêtres surgissantes, des prix ou des demandes de téléchargement."],
          words: [["Moteur de recherche", "un site qui trouve d'autres sites, comme Google ou Bing."], ["Sponsorisé", "une publicité payée affichée dans les résultats de recherche."], ["Fenêtre surgissante", "une fenêtre qui apparaît soudain par-dessus une page."]],
          slides: [
            { title: "Comment chercher", bullets: ["Tapez quelques mots clés", "Exemple : « horaires bibliothèque Dakar »", "Appuyez sur Entrée"] },
            { title: "Signes de confiance", bullets: ["Pas marqué Sponsorisé ou Annonce", "L'adresse contient le vrai nom", "Sites du gouvernement américain : .gov"] },
            { title: "Signaux d'alarme", bullets: ["Beaucoup de fenêtres surgissantes", "« Vous avez gagné un prix ! »", "Demande de télécharger ou d'infos personnelles"] }
          ],
          tryIt: "Cherchez les horaires de votre bibliothèque publique. Choisissez le résultat du site de la bibliothèque elle-même, pas une annonce, et notez les horaires.",
          youCanNow: "chercher sur le web et choisir un site fiable.",
          quickCheck: [
            { objective: "O3", q: "Quelle adresse web est le plus probablement le site officiel d'un bureau de l'État américain ?", options: ["Une adresse qui se termine par .gov", "Une adresse avec beaucoup de fenêtres surgissantes", "Une adresse marquée « Sponsorisé »", "Une adresse qui dit que vous avez gagné un prix"], answer: 0, why: "Les sites officiels de l'État américain se terminent en général par .gov." },
            { objective: "O3", q: "Vous cherchez les horaires de votre clinique. Le premier résultat est une publicité. Que faites-vous ?", options: ["Cliquer sur la publicité", "La passer et choisir le site de la clinique elle-même", "Télécharger ce qu'elle propose", "Y taper votre mot de passe"], answer: 1, why: "Les publicités sont des résultats payés ; le site de la clinique elle-même est plus fiable." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Prendre ses repères et aller sur internet",
        questions: [
          { objective: "O1", q: "Sur un téléphone, comment ouvrir une application ?", options: ["Secouer le téléphone", "La toucher une fois", "Appuyer sur Retour arrière", "L'éteindre"], answer: 1, why: "Un seul toucher ouvre une application." },
          { objective: "O1", q: "Quelle touche efface la lettre avant le curseur ?", options: ["Maj", "Entrée", "Retour arrière", "Espace"], answer: 2, why: "Retour arrière efface la lettre avant le curseur." },
          { objective: "O2", q: "Où peut-on en général utiliser un ordinateur et le Wi-Fi gratuitement ?", options: ["Dans une publicité surgissante", "Chez un concessionnaire auto", "Dans le coffre d'une banque", "Dans une bibliothèque publique"], answer: 3, why: "Les bibliothèques publiques offrent des ordinateurs et du Wi-Fi gratuits." },
          { objective: "O2", q: "Qu'est-ce que Lifeline ?", options: ["Un programme fédéral américain qui réduit les factures de téléphone ou d'internet de ceux qui y ont droit", "Un jeu gratuit sur téléphone", "Un type de virus", "Un moteur de recherche"], answer: 0, why: "Lifeline donne une réduction mensuelle sur le téléphone ou internet." },
          { objective: "O3", q: "Un résultat de recherche est marqué « Sponsorisé ». Qu'est-ce que cela veut dire ?", options: ["C'est un site du gouvernement", "C'est une publicité payée", "C'est toujours la meilleure réponse", "C'est votre e-mail"], answer: 1, why: "Les résultats sponsorisés sont des publicités." }
        ]
      }
    },
    {
      name: "Chapitre 2 : E-mail, mots de passe et demander de l'aide",
      lessons: [
        {
          objectives: ["O4"],
          title: "Envoyer un e-mail avec une pièce jointe",
          minutes: 5,
          goal: "Écrire et envoyer un e-mail avec une photo ou un fichier joint.",
          text: [
            "L'e-mail permet d'envoyer des messages et des fichiers à toute personne qui a une adresse e-mail. Parmi les services gratuits, il y a Gmail et Outlook.com. Votre bibliothèque peut vous aider à créer un compte.",
            "Un e-mail a quatre parties : À (l'adresse e-mail de la personne), Objet (quelques mots qui disent de quoi il s'agit), le message, et les pièces jointes (fichiers ou photos que vous ajoutez). L'icône du trombone veut en général dire joindre.",
            "Avant d'appuyer sur Envoyer, vérifiez que l'adresse est juste, relisez votre message une fois, et assurez-vous que le bon fichier est joint."
          ],
          steps: ["Ouvrez votre messagerie et choisissez Nouveau message.", "Tapez l'adresse de la personne dans À.", "Tapez un court Objet.", "Écrivez un message court et poli.", "Touchez ou cliquez sur le trombone, choisissez une photo ou un fichier, puis appuyez sur Envoyer."],
          words: [["Adresse e-mail", "une adresse comme nom@exemple.com où vous recevez vos e-mails."], ["Objet", "le court titre d'un e-mail."], ["Pièce jointe", "un fichier ou une photo envoyé avec un e-mail."]],
          slides: [
            { title: "Les quatre parties d'un e-mail", bullets: ["À : son adresse e-mail", "Objet : quelques mots", "Message", "Pièce jointe : un fichier ou une photo"] },
            { title: "Joindre un fichier", bullets: ["Cherchez l'icône du trombone", "Choisissez la photo ou le fichier", "Attendez la fin de l'ajout"] },
            { title: "Avant d'appuyer sur Envoyer", bullets: ["Adresse juste ?", "Message clair ?", "Bon fichier joint ?"] }
          ],
          tryIt: "Envoyez un e-mail à un ami ou à un membre de la famille avec l'objet « E-mail d'essai », un message d'une ligne et une photo jointe.",
          youCanNow: "écrire et envoyer un e-mail avec une pièce jointe.",
          quickCheck: [
            { objective: "O4", q: "Dans un e-mail, que met-on dans le champ À ?", options: ["Votre mot de passe", "L'objet", "L'adresse e-mail de la personne", "La photo"], answer: 2, why: "Le champ À contient l'adresse e-mail de la personne à qui vous écrivez." },
            { objective: "O4", q: "Vous avez écrit votre e-mail mais oublié la photo. Que faites-vous avant d'envoyer ?", options: ["L'envoyer et espérer", "Supprimer l'e-mail", "Écrire « photo à venir »", "Cliquer sur le trombone et joindre la photo"], answer: 3, why: "L'icône du trombone joint une photo ou un fichier avant d'appuyer sur Envoyer." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Créer un mot de passe solide et protéger vos comptes",
          minutes: 5,
          goal: "Créer un mot de passe solide et savoir comment protéger vos comptes.",
          text: [
            "Un mot de passe solide est long et difficile à deviner. Une méthode facile : enchaîner trois ou quatre mots au hasard avec un chiffre et un symbole, comme « Bleu-Taco-Fleuve-58 ». N'utilisez pas votre nom, votre date de naissance ou « motdepasse123 ».",
            "Utilisez pour votre e-mail un mot de passe différent de celui de vos autres comptes. Votre e-mail est la clé qui permet de réinitialiser tout le reste.",
            "Activez la validation en deux étapes si votre compte la propose : après votre mot de passe, vous entrez aussi un code envoyé sur votre téléphone. Ne donnez jamais ce code à quelqu'un qui vous appelle ou vous écrit, même s'il dit venir de l'entreprise."
          ],
          steps: ["Choisissez trois ou quatre mots au hasard.", "Assemblez-les et ajoutez un chiffre et un symbole.", "Utilisez-le seulement pour ce compte.", "Activez la validation en deux étapes dans les réglages de sécurité de votre compte.", "Ne partagez jamais le code envoyé sur votre téléphone."],
          words: [["Mot de passe", "un mot ou une phrase secrète qui permet à vous seul d'entrer dans un compte."], ["Validation en deux étapes", "une deuxième vérification, en général un code envoyé sur votre téléphone, après votre mot de passe."]],
          slides: [
            { title: "Un mot de passe solide", bullets: ["Long : trois ou quatre mots au hasard", "Ajoutez un chiffre et un symbole", "Style d'exemple : Bleu-Taco-Fleuve-58"] },
            { title: "À éviter", bullets: ["Votre nom ou votre date de naissance", "« motdepasse123 »", "Le même mot de passe partout"] },
            { title: "Validation en deux étapes", bullets: ["Mot de passe plus un code sur votre téléphone", "Activez-la dans les réglages de sécurité", "Ne partagez jamais le code"] }
          ],
          tryIt: "Inventez un mot de passe solide avec trois mots au hasard, un chiffre et un symbole. Ne l'utilisez pas tel qu'il est écrit ici. Notez un indice, pas le mot de passe, dans un endroit sûr chez vous.",
          youCanNow: "créer un mot de passe solide et protéger votre compte avec la validation en deux étapes.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce que la validation en deux étapes ?", options: ["Une deuxième vérification, comme un code envoyé sur votre téléphone", "Taper votre mot de passe deux fois", "Deux comptes de messagerie", "Un nom d'utilisateur plus long"], answer: 0, why: "Après votre mot de passe, vous entrez aussi un code envoyé sur votre téléphone." },
            { objective: "O5", q: "Vous voulez un mot de passe pour votre nouvelle messagerie. Lequel est le meilleur ?", options: ["Votre date de naissance", "Trois mots au hasard reliés par un chiffre et un symbole", "Votre prénom", "Le même mot de passe que pour votre banque"], answer: 1, why: "Des mots longs et au hasard, avec un chiffre et un symbole, sont difficiles à deviner." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Demander de l'aide technique à un assistant d'IA gratuit",
          minutes: 5,
          goal: "Utiliser un assistant d'IA gratuit pour obtenir une aide étape par étape sur un problème technique.",
          text: [
            "Quand vous êtes bloqué, un assistant d'IA gratuit comme ChatGPT, Microsoft Copilot ou Google Gemini peut expliquer comment faire quelque chose, étape par étape, avec des mots simples. Vous pouvez lui écrire ou lui parler.",
            "Dites quel appareil vous avez et ce que vous voulez faire. Par exemple : « J'ai un téléphone Android. Comment joindre une photo à un e-mail dans Gmail ? Donne-moi des étapes courtes. » Si une étape ne correspond pas à votre écran, dites-lui ce que vous voyez.",
            "Ne tapez jamais de mots de passe, de codes, de numéros de compte bancaire ou votre numéro de sécurité sociale dans une IA. Et le personnel de la bibliothèque est toujours une bonne personne à qui demander aussi."
          ],
          steps: ["Ouvrez un assistant d'IA gratuit.", "Dites votre appareil et ce que vous voulez faire.", "Demandez des étapes courtes et simples.", "Si une étape ne correspond pas, décrivez ce que vous voyez à l'écran."],
          words: [["Assistant d'IA", "un programme informatique avec qui vous discutez avec des mots de tous les jours."], ["Appareil", "un téléphone, une tablette ou un ordinateur."]],
          slides: [
            { title: "L'IA peut être votre aide technique", bullets: ["Explique les étapes avec des mots simples", "Vous pouvez écrire ou parler"] },
            { title: "Demandez clairement", bullets: ["Dites votre appareil", "Dites ce que vous voulez faire", "Demandez des étapes courtes"] },
            { title: "Restez prudent", bullets: ["Pas de mots de passe, codes ou numéros bancaires", "Le personnel de la bibliothèque peut aussi aider"] }
          ],
          tryIt: "Tâche finale : cherchez les horaires de votre bibliothèque sur son site officiel, faites une capture d'écran ou une photo, et envoyez-la par e-mail à quelqu'un avec un message poli. Si vous êtes bloqué, demandez les étapes à un assistant d'IA. Déconnectez-vous si vous avez utilisé un ordinateur partagé.",
          youCanNow: "aller sur internet, trouver des informations fiables, les envoyer par e-mail et obtenir de l'aide en sécurité quand vous êtes bloqué.",
          quickCheck: [
            { objective: "O6", q: "Quelles deux choses votre première demande d'aide technique doit-elle dire ?", options: ["Votre mot de passe et votre e-mail", "Votre âge et votre adresse", "Votre appareil et ce que vous voulez faire", "Votre banque et votre code"], answer: 2, why: "L'IA a besoin de votre appareil et de votre but pour donner les bonnes étapes." },
            { objective: "O6", q: "L'IA dit de toucher « Réglages » mais vous ne le voyez pas. Que faites-vous ?", options: ["Abandonner", "Redémarrer le téléphone", "Taper votre mot de passe à l'IA", "Dire à l'IA ce que vous voyez sur votre écran"], answer: 3, why: "Décrire votre écran aide l'IA à donner des étapes qui correspondent." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : E-mail, mots de passe et demander de l'aide",
        questions: [
          { objective: "O4", q: "Que fait en général l'icône du trombone dans un e-mail ?", options: ["Elle supprime l'e-mail", "Elle imprime l'e-mail", "Elle joint un fichier ou une photo", "Elle change votre mot de passe"], answer: 2, why: "Le trombone ajoute une pièce jointe." },
          { objective: "O5", q: "Quel est le mot de passe le plus solide ?", options: ["motdepasse123", "Votre date de naissance", "Votre prénom", "Trois mots au hasard avec un chiffre et un symbole"], answer: 3, why: "Les mots de passe longs et aléatoires sont difficiles à deviner." },
          { objective: "O5", q: "Quelqu'un appelle en disant venir de votre messagerie et demande le code envoyé sur votre téléphone. Vous :", options: ["Ne le donnez jamais et raccrochez", "Le lui lisez", "Le lui envoyez par SMS", "Le publiez en ligne"], answer: 0, why: "Ce code protège votre compte ; les vraies entreprises ne le demandent pas." },
          { objective: "O5", q: "Pourquoi le mot de passe de votre e-mail doit-il être différent des autres ?", options: ["C'est plus joli", "L'e-mail peut réinitialiser vos autres comptes", "Il est plus court", "La loi l'exige"], answer: 1, why: "Si quelqu'un entre dans votre e-mail, il peut réinitialiser vos autres comptes." },
          { objective: "O6", q: "Quelle est une bonne façon de demander de l'aide technique à l'IA ?", options: ["« aide »", "« Voici mon mot de passe, répare »", "« J'ai un téléphone Android. Comment joindre une photo dans Gmail ? Étapes courtes. »", "« téléphone »"], answer: 2, why: "Elle nomme l'appareil, la tâche et la forme de réponse." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Compétences numériques pour débutants",
    questions: [
      { objective: "O1", q: "Pour monter et descendre dans une page sur un téléphone, vous :", options: ["Glissez", "Le secouez", "Appuyez sur Maj", "L'éteignez"], answer: 0, why: "Glisser fait défiler l'écran." },
      { objective: "O1", q: "Sur un ordinateur, cliquer une fois sur le bouton gauche de la souris :", options: ["L'éteint", "Choisit quelque chose", "Supprime tout", "Imprime la page"], answer: 1, why: "Un seul clic sélectionne ou choisit." },
      { objective: "O1", q: "Le curseur montre :", options: ["L'heure", "La batterie", "Où votre texte va apparaître", "Votre mot de passe"], answer: 2, why: "La barre qui clignote marque où va le texte." },
      { objective: "O2", q: "Pour connecter un téléphone au Wi-Fi, vous ouvrez en général :", options: ["L'appareil photo", "La calculatrice", "Un jeu", "Réglages, puis Wi-Fi"], answer: 3, why: "Les réglages Wi-Fi sont dans l'application Réglages." },
      { objective: "O2", q: "Qui peut demander Lifeline ?", options: ["Les personnes à faible revenu ou qui reçoivent des aides comme SNAP ou Medicaid", "Seulement les entreprises", "Seulement les plus de 90 ans", "Toute personne qui paie des frais"], answer: 0, why: "Lifeline dépend du revenu ou de la participation à certains programmes d'aide." },
      { objective: "O2", q: "Où vérifier les derniers montants et règles de Lifeline ?", options: ["Dans le SMS d'un inconnu", "Sur lifelinesupport.org", "Dans une publicité surgissante", "Dans un commentaire sur les réseaux sociaux"], answer: 1, why: "Lifeline Support est le site officiel du programme." },
      { objective: "O2", q: "Sur un Wi-Fi public, il vaut mieux éviter :", options: ["De lire les nouvelles", "De regarder la météo", "La banque en ligne", "De chercher les horaires de la bibliothèque"], answer: 2, why: "Les tâches sensibles sont plus sûres sur une connexion privée." },
      { objective: "O3", q: "Un moteur de recherche est :", options: ["Une pièce de voiture", "Une application d'e-mail", "Un mot de passe", "Un site qui trouve d'autres sites, comme Google ou Bing"], answer: 3, why: "Les moteurs de recherche trouvent des sites pour vous." },
      { objective: "O3", q: "Les sites officiels du gouvernement américain finissent en général par :", options: [".gov", ".win", ".prize", ".xyz"], answer: 0, why: ".gov est réservé aux sites du gouvernement américain." },
      { objective: "O3", q: "Une page dit « Vous avez gagné un prix ! Téléchargez maintenant ! » Vous devez :", options: ["Télécharger", "Fermer la page et revenir en arrière", "Taper votre numéro de compte", "La partager avec des amis"], answer: 1, why: "Les prix et les demandes de téléchargement sont des signaux d'alarme." },
      { objective: "O4", q: "Dans un e-mail, l'Objet est :", options: ["L'adresse de la personne", "La pièce jointe", "Quelques mots qui disent de quoi parle l'e-mail", "Votre mot de passe"], answer: 2, why: "L'objet est le court titre de l'e-mail." },
      { objective: "O4", q: "Avant d'appuyer sur Envoyer, vérifiez :", options: ["Rien", "Seulement la police", "La météo", "L'adresse, le message et la pièce jointe"], answer: 3, why: "Une vérification rapide évite les erreurs." },
      { objective: "O4", q: "Lequel est un service d'e-mail gratuit ?", options: ["Gmail", "Un fax", "Une imprimante", "Une box Wi-Fi"], answer: 0, why: "Gmail et Outlook.com sont des services d'e-mail gratuits." },
      { objective: "O5", q: "Quel mot de passe est le plus faible ?", options: ["Bleu-Taco-Fleuve-58", "motdepasse123", "Lampe!Jardin!Sept!42", "Lune-Fourchette-Cactus-19"], answer: 1, why: "« motdepasse123 » est l'un des mots de passe les plus devinés." },
      { objective: "O5", q: "La validation en deux étapes veut dire :", options: ["Taper votre mot de passe deux fois", "Deux personnes partagent un compte", "Une deuxième vérification, comme un code sur votre téléphone", "Faire deux pas"], answer: 2, why: "Elle ajoute une deuxième vérification après le mot de passe." },
      { objective: "O5", q: "Quand vous avez fini sur un ordinateur de bibliothèque, vous devez :", options: ["Laisser votre e-mail ouvert", "Enregistrer votre mot de passe", "Écrire votre mot de passe sur un post-it", "Vous déconnecter et fermer le navigateur"], answer: 3, why: "Se déconnecter empêche la personne suivante d'entrer dans votre compte." },
      { objective: "O6", q: "Qu'est-ce qu'il ne faut JAMAIS taper dans un assistant d'IA ?", options: ["Le code envoyé sur votre téléphone", "« Comment joindre une photo ? »", "« J'ai un iPhone »", "« Donne-moi des étapes courtes »"], answer: 0, why: "Les codes et les mots de passe doivent rester privés." },
      { objective: "O6", q: "Une étape de l'IA ne correspond pas à votre écran. Vous devez :", options: ["Abandonner", "Lui dire ce que vous voyez à l'écran", "Redémarrer internet", "Taper votre mot de passe"], answer: 1, why: "Décrire votre écran l'aide à donner les bonnes étapes." },
      { objective: "O6", q: "Qui d'autre peut vous aider gratuitement avec la technologie ?", options: ["Une publicité surgissante", "Un inconnu qui vous envoie un SMS", "Le personnel de la bibliothèque", "Quelqu'un qui demande votre code"], answer: 2, why: "Le personnel des bibliothèques aide chaque jour avec les ordinateurs." },
      { objective: "O6", q: "Une bonne première consigne pour de l'aide technique contient :", options: ["Votre numéro de compte", "Un seul mot", "Votre numéro de sécurité sociale", "Votre appareil et ce que vous voulez faire"], answer: 3, why: "Cela donne à l'IA ce dont elle a besoin pour aider." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      7,
      8,
      10,
      13,
      14,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Recherche fiable",
        objective: "O3",
        notYet: "A utilisé une publicité ou un site qui n'est pas celui de la bibliothèque.",
        meets: "A trouvé les horaires sur le site officiel de la bibliothèque.",
        exceeds: "Peut dire comment il a su que le site était officiel."
      },
      {
        name: "Capture d'écran ou photo",
        objective: "O1",
        notYet: "Pas de capture d'écran ni de photo des horaires.",
        meets: "Une capture d'écran ou une photo nette qui montre les horaires.",
        exceeds: "L'a prise sans aide."
      },
      {
        name: "E-mail envoyé",
        objective: "O4",
        notYet: "E-mail sans objet, sans message ou sans pièce jointe.",
        meets: "Envoyé avec un objet, un court message poli et la photo jointe.",
        exceeds: "La personne a confirmé l'avoir reçu et voir la photo."
      },
      {
        name: "Sécurité du compte",
        objective: "O5",
        notYet: "Mot de passe faible, ou pas de déconnexion d'un ordinateur partagé.",
        meets: "Le compte a un mot de passe solide, et déconnexion de tout ordinateur partagé.",
        exceeds: "La validation en deux étapes est activée."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui envoient un e-mail ou cherchent une information seuls dans les 30 jours (questionnaire de suivi)",
      "Apprenants qui demandent Lifeline ou commencent à utiliser les ordinateurs gratuits de la bibliothèque",
      "Apprenants qui commencent un autre cours Koach Learn dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone, ou un ordinateur de bibliothèque ou de centre communautaire",
      "Une messagerie gratuite (Gmail ou Outlook.com) ; le personnel de la bibliothèque peut aider à la créer",
      "Un assistant d'IA gratuit pour l'aide technique",
      "Du papier et un stylo pour les notes et les indices de mot de passe (pas le mot de passe lui-même)",
      "Environ 60 minutes au total, en courtes séances : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Allez lentement et laissez les apprenants faire chaque étape de leurs propres mains ; ne leur prenez pas la souris ni le téléphone.",
      "Prévoyez du personnel pour aider les apprenants à créer une messagerie avant la leçon 4.",
      "Ne demandez jamais aux apprenants de montrer ou de dire leurs mots de passe ou leurs codes.",
      "Avant que les apprenants partent, vérifiez que chacun se déconnecte des ordinateurs partagés.",
      "Notez la tâche finale avec la grille d'évaluation, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
