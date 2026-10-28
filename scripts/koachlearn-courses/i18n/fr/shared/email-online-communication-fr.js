"use strict";

// Koach Learn course, French translation of shared/email-online-communication.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").

module.exports = {
  id: "email-online-communication-fr",
  lang: "fr",
  translationOf: "email-online-communication",
  category: "Seniors and Technology",
  name: "L'e-mail et la communication en ligne",
  skills: "Créer un compte e-mail gratuit, Écrire un e-mail clair, Répondre et joindre un fichier, Repérer les e-mails d'hameçonnage, Rejoindre un appel vidéo",
  outcome: "créer un compte e-mail gratuit, écrire et envoyer un e-mail clair et poli avec un fichier joint, répondre aux messages, repérer un faux e-mail (hameçonnage) et rejoindre un appel vidéo à partir d'un lien.",
  about: [
    "Aujourd'hui, les cabinets médicaux, les employeurs, les propriétaires, les écoles et les familles vous contactent par e-mail et par appel vidéo. Ce cours vous montre comment les utiliser, un petit pas à la fois.",
    "Vous allez créer un compte e-mail gratuit, écrire un message clair, répondre, joindre un fichier, protéger votre boîte de réception contre les arnaques et rejoindre un appel vidéo.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites l'exercice « Essayez maintenant ». Il y a un court contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Envoyez un e-mail clair et poli à un ami, un membre de votre famille ou à vous-même, avec un objet, une salutation, deux ou trois phrases courtes, une formule de fin et un fichier joint (une photo ou un document). Puis répondez à un e-mail que vous avez reçu, et notez deux signes d'alerte que vous chercheriez avant de cliquer sur un lien.",
  chapters: [
    {
      name: "Chapitre 1 : Les bases de l'e-mail",
      lessons: [
        {
          title: "Obtenir un compte e-mail gratuit",
          minutes: 5,
          goal: "Créer un compte e-mail gratuit et s'y connecter.",
          text: [
            "Une adresse e-mail est comme une adresse postale pour les messages. Elle ressemble à nom@gmail.com : le nom que vous avez choisi, le signe @ (arobase), puis l'entreprise qui gère le service.",
            "Parmi les services d'e-mail gratuits, il y a Gmail de Google, Outlook.com de Microsoft et Yahoo Mail. Pour vous inscrire, allez sur le site officiel de l'entreprise ou installez son application officielle, et choisissez « Créer un compte ».",
            "Choisissez une adresse qui fait sérieux, comme votre prénom et votre nom, car les employeurs et les médecins la verront. Choisissez un mot de passe fort que vous n'utilisez nulle part ailleurs, et ajoutez un numéro de téléphone ou un e-mail de secours pour pouvoir revenir si vous l'oubliez."
          ],
          steps: ["Allez sur gmail.com, outlook.com ou l'application officielle de messagerie.", "Choisissez « Créer un compte ».", "Choisissez une adresse sérieuse, comme prenom.nom.", "Créez un long mot de passe que vous n'utilisez nulle part ailleurs.", "Ajoutez un numéro de téléphone ou un e-mail de secours pour récupérer le compte.", "Notez votre nouvelle adresse et gardez le mot de passe dans un endroit sûr."],
          words: [["Adresse e-mail", "votre adresse pour recevoir des messages, comme nom@gmail.com."], ["Mot de passe", "un mot ou une phrase secrète qui ne laisse entrer que vous dans votre compte."], ["Récupération du compte", "le moyen de revenir dans votre compte si vous oubliez votre mot de passe, en général un code envoyé sur votre téléphone."]],
          slides: [
            { title: "Une adresse e-mail", bullets: ["Elle ressemble à nom@gmail.com", "Votre nom, le signe @, puis l'entreprise de messagerie"] },
            { title: "Des services d'e-mail gratuits", bullets: ["Gmail de Google", "Outlook.com de Microsoft", "Yahoo Mail"] },
            { title: "Bien s'inscrire", bullets: ["Une adresse sérieuse : votre prénom et votre nom", "Un long mot de passe utilisé nulle part ailleurs", "Un numéro de téléphone pour récupérer le compte"] }
          ],
          tryIt: "Créez un compte e-mail gratuit (ou ouvrez celui que vous avez déjà). Déconnectez-vous, puis reconnectez-vous, pour être sûr de pouvoir entrer seul.",
          youCanNow: "créer un compte e-mail gratuit avec une adresse sérieuse et vous y connecter."
        },
        {
          title: "Écrire un e-mail clair",
          minutes: 5,
          goal: "Écrire et envoyer un e-mail avec un objet, une salutation, un court message et une formule de fin.",
          text: [
            "Un bon e-mail a cinq parties : le destinataire, un objet, une salutation, un court message et une formule de fin avec votre nom.",
            "L'objet dit au lecteur de quoi parle l'e-mail avant même qu'il l'ouvre, par exemple « Question sur mon rendez-vous de mardi » ou « Candidature au poste de caissier ».",
            "Gardez le message court : dites pourquoi vous écrivez, ce dont vous avez besoin et pour quand. Relisez-le une fois avant d'appuyer sur Envoyer, et vérifiez bien l'adresse dans « À », car on ne peut pas reprendre un e-mail une fois envoyé."
          ],
          steps: ["Appuyez sur Nouveau message (ou Écrire).", "Tapez l'adresse de la personne dans la case « À ».", "Écrivez un objet court.", "Commencez par une salutation, comme « Bonjour Madame Lee, ».", "Écrivez deux ou trois phrases courtes : pourquoi, ce dont vous avez besoin, pour quand.", "Terminez par « Merci, » et votre nom.", "Relisez une fois, vérifiez l'adresse, puis appuyez sur Envoyer."],
          words: [["Objet", "quelques mots qui disent au lecteur de quoi parle l'e-mail."], ["Nouveau message (Écrire)", "le bouton qui commence un nouvel e-mail."], ["Formule de fin", "les mots de clôture, comme « Merci, » suivis de votre nom."]],
          slides: [
            { title: "Les cinq parties d'un e-mail", bullets: ["À : l'adresse, puis un objet", "Une salutation", "Un court message", "Une formule de fin avec votre nom"] },
            { title: "Un bon objet", bullets: ["« Question sur mon rendez-vous de mardi »", "« Candidature au poste de caissier »"] },
            { title: "Avant d'appuyer sur Envoyer", bullets: ["Relisez une fois", "Vérifiez l'adresse dans « À »", "On ne peut pas le reprendre après l'envoi"] }
          ],
          tryIt: "Écrivez et envoyez un e-mail à vous-même ou à un proche avec les cinq parties. Objet : « E-mail d'essai ». Ouvrez-le du côté du destinataire et regardez à quoi il ressemble.",
          youCanNow: "écrire un e-mail clair avec un objet, une salutation, un court message et une formule de fin, et l'envoyer."
        },
        {
          title: "Répondre, transférer et joindre un fichier",
          minutes: 5,
          goal: "Répondre à un e-mail et en envoyer un avec un fichier joint.",
          text: [
            "Répondre envoie votre réponse seulement à la personne qui vous a écrit. Répondre à tous l'envoie à toutes les personnes du message, donc utilisez-le seulement quand tout le monde a besoin de votre réponse. Transférer envoie l'e-mail à une nouvelle personne.",
            "Une pièce jointe est un fichier envoyé avec un e-mail, comme une photo, un CV ou un formulaire. Cherchez l'icône du trombone. Choisissez le fichier sur votre téléphone ou votre ordinateur, attendez qu'il ait fini de se charger, puis envoyez.",
            "N'ouvrez que les pièces jointes que vous attendiez, venant de personnes que vous connaissez. Les fichiers d'inconnus peuvent contenir des programmes nuisibles."
          ],
          steps: ["Ouvrez l'e-mail auquel vous voulez répondre.", "Appuyez sur Répondre (pas Répondre à tous, sauf si tout le monde en a besoin).", "Écrivez votre réponse et appuyez sur Envoyer.", "Pour joindre un fichier : dans un nouvel e-mail, appuyez sur l'icône du trombone.", "Choisissez la photo ou le document et attendez qu'il se charge.", "Mentionnez le fichier dans votre message, puis appuyez sur Envoyer."],
          words: [["Répondre à tous", "répond à toutes les personnes qui ont reçu l'e-mail, pas seulement à l'expéditeur."], ["Transférer", "envoyer à quelqu'un d'autre un e-mail que vous avez reçu."], ["Pièce jointe", "un fichier envoyé avec un e-mail."]],
          slides: [
            { title: "Répondre, Répondre à tous, Transférer", bullets: ["Répondre : seulement l'expéditeur", "Répondre à tous : tout le monde dans l'e-mail", "Transférer : l'envoyer à une nouvelle personne"] },
            { title: "Joindre un fichier", bullets: ["Appuyez sur l'icône du trombone", "Choisissez la photo ou le document", "Attendez la fin du chargement, puis envoyez"] },
            { title: "Soyez prudent", bullets: ["N'ouvrez que les pièces jointes attendues", "Les fichiers d'inconnus peuvent contenir des programmes nuisibles"] }
          ],
          tryIt: "Répondez à l'e-mail d'essai de la leçon 2. Puis écrivez un nouvel e-mail à vous-même, joignez une photo ou un document, et envoyez-le. Ouvrez-le et vérifiez que le fichier est bien arrivé.",
          youCanNow: "répondre à un e-mail, en transférer un et envoyer un fichier en pièce jointe."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les bases de l'e-mail",
        questions: [
          { q: "Quelle adresse e-mail vaut mieux utiliser pour postuler à un emploi ?", options: ["chatcool99@gmail.com", "maria.lopez@gmail.com", "lafete@yahoo.com", "xx123xx@outlook.com"], answer: 1, why: "Une adresse avec votre prénom et votre nom fait sérieux." },
          { q: "Pourquoi ajouter un numéro de téléphone à votre compte e-mail ?", options: ["Pour que l'entreprise vous appelle tous les jours", "Pour revenir dans le compte si vous oubliez votre mot de passe", "Cela rend l'e-mail plus rapide", "C'est nécessaire pour envoyer des photos"], answer: 1, why: "Un numéro de récupération permet de recevoir un code pour revenir dans le compte." },
          { q: "À quoi sert l'objet ?", options: ["À dire au lecteur de quoi parle l'e-mail", "À contenir le fichier joint", "À montrer votre mot de passe", "À supprimer les anciens e-mails"], answer: 0, why: "Il dit au lecteur le sujet avant qu'il ouvre l'e-mail." },
          { q: "Vous avez reçu un e-mail envoyé à 30 personnes. Seul l'expéditeur a besoin de votre réponse. Sur quel bouton appuyez-vous ?", options: ["Transférer", "Répondre à tous", "Supprimer", "Répondre"], answer: 3, why: "Répondre envoie votre réponse seulement à la personne qui a écrit." },
          { q: "Comment envoyer une photo avec un e-mail ?", options: ["Taper le nom de la photo dans l'objet", "Appuyer sur l'icône du trombone et choisir la photo", "Coller votre mot de passe", "Appuyer sur Répondre à tous"], answer: 1, why: "L'icône du trombone ajoute une pièce jointe." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Rester en sécurité et communiquer en ligne",
      lessons: [
        {
          title: "Repérer l'hameçonnage et les e-mails frauduleux",
          minutes: 5,
          goal: "Vérifier les signes d'alerte d'un e-mail avant de cliquer sur quoi que ce soit.",
          text: [
            "L'hameçonnage (phishing) est un faux message qui fait semblant de venir d'une banque, d'un magasin, d'une société de livraison ou d'une administration, pour vous pousser à cliquer sur un lien ou à donner des informations privées.",
            "La Federal Trade Commission (FTC), l'agence américaine de protection des consommateurs, liste des signes courants : le message fait semblant de venir d'un organisme que vous connaissez, parle d'un problème ou d'un prix, vous pousse à agir tout de suite, et demande de payer d'une façon inhabituelle comme des cartes cadeaux, des virements, des applications de paiement ou de la cryptomonnaie.",
            "Regardez aussi la vraie adresse de l'expéditeur : « support@amaz0n-help.win » n'est pas Amazon. En cas de doute, ne cliquez pas. Allez vous-même sur le site de l'entreprise, ou appelez un numéro que vous savez être le vrai. Aux États-Unis, on peut signaler les arnaques sur reportfraud.ftc.gov."
          ],
          steps: ["Regardez l'adresse complète de l'expéditeur, pas seulement le nom.", "Demandez-vous : fait-il semblant d'être quelqu'un que je connais ? Y a-t-il un problème ou un prix ? Me presse-t-on ? Veut-on des cartes cadeaux ou un virement ?", "Si oui à l'une de ces questions, ne cliquez sur aucun lien et n'ouvrez aucun fichier.", "Vérifiez en allant vous-même sur le vrai site ou en appelant un numéro connu.", "Supprimez-le ou marquez-le comme spam. Aux États-Unis, signalez-le sur reportfraud.ftc.gov."],
          words: [["Hameçonnage (phishing)", "un faux message fait pour vous pousser à cliquer sur un lien ou à donner des informations privées."], ["Spam", "des e-mails indésirables."], ["FTC", "la Federal Trade Commission, l'agence du gouvernement américain qui reçoit les signalements d'arnaques."]],
          slides: [
            { title: "Ce qu'est l'hameçonnage", bullets: ["Un faux e-mail qui imite une banque, un magasin ou un bureau", "Il veut que vous cliquiez, payiez ou partagiez des détails privés"] },
            { title: "Quatre signes d'alerte (FTC)", bullets: ["Il fait semblant d'être quelqu'un que vous connaissez", "Un problème ou un prix", "Une pression pour agir tout de suite", "Paiement par carte cadeau, virement, appli de paiement ou crypto"] },
            { title: "Vérifiez l'expéditeur", bullets: ["Regardez l'adresse complète", "« amaz0n-help.win » n'est pas Amazon"] },
            { title: "En cas de doute", bullets: ["Ne cliquez pas", "Allez sur le vrai site ou appelez un numéro connu", "Signalez sur reportfraud.ftc.gov (États-Unis)"] }
          ],
          sources: [{ name: "FTC (agence américaine de protection des consommateurs) : comment éviter une arnaque", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC : signaler une fraude", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Ouvrez votre dossier spam ou courrier indésirable et choisissez un message. Trouvez-y au moins deux signes d'alerte. Ne cliquez sur aucun lien. Puis supprimez-le.",
          youCanNow: "vérifier les quatre signes d'alerte et la vraie adresse de l'expéditeur d'un e-mail avant de cliquer."
        },
        {
          title: "La politesse en ligne",
          minutes: 4,
          goal: "Écrire un message poli et clair qui obtient une bonne réponse.",
          text: [
            "Dans un message écrit, on n'entend pas votre voix, donc les mots peuvent sembler plus durs que vous ne le voulez. ÉCRIRE TOUT EN MAJUSCULES donne l'impression de crier.",
            "Soyez poli et bref. Utilisez une salutation, « s'il vous plaît » et « merci ». Répondez aux e-mails importants en un ou deux jours, même seulement pour dire « J'ai bien reçu et je réponds d'ici vendredi ».",
            "Avant d'envoyer un message quand vous êtes contrarié, attendez un peu et relisez-le. Ne mettez pas d'informations privées comme votre numéro de sécurité sociale, vos numéros bancaires ou vos mots de passe dans un e-mail ou un message."
          ],
          steps: ["Commencez par une salutation.", "Dites ce dont vous avez besoin en phrases courtes.", "Utilisez les majuscules normalement, pas TOUT EN MAJUSCULES.", "Dites s'il vous plaît et merci.", "Si vous êtes contrarié, attendez et relisez avant d'envoyer.", "Ne mettez pas de numéros privés ni de mots de passe."],
          words: [["Nétiquette", "les bonnes manières pour les messages et publications en ligne."], ["TOUT EN MAJUSCULES", "écrire uniquement en lettres majuscules, ce qui donne l'impression de crier."]],
          slides: [
            { title: "Des mots sans voix", bullets: ["Les messages peuvent sembler plus durs que voulu", "TOUT EN MAJUSCULES donne l'impression de crier"] },
            { title: "Poli et clair", bullets: ["Salutation, s'il vous plaît et merci", "Phrases courtes", "Répondez en un ou deux jours"] },
            { title: "Avant d'envoyer", bullets: ["Contrarié ? Attendez et relisez", "Pas de numéros privés ni de mots de passe"] }
          ],
          tryIt: "Écrivez un court e-mail poli à un propriétaire, une école, un centre de santé ou un employeur (vous n'êtes pas obligé de l'envoyer) pour poser une question. Lisez-le à voix haute : est-il aimable et clair ?",
          youCanNow: "écrire un message poli et clair et éviter les habitudes qui causent des problèmes en ligne."
        },
        {
          title: "Rejoindre un appel vidéo",
          minutes: 5,
          goal: "Rejoindre un appel vidéo à partir d'un lien et utiliser les boutons micro et caméra.",
          text: [
            "Beaucoup de médecins, d'employeurs, d'écoles et de familles utilisent les appels vidéo. Les plus courants et gratuits sont Zoom, Google Meet, Microsoft Teams, et FaceTime sur les appareils Apple. En général, quelqu'un vous envoie un lien par e-mail ou par SMS.",
            "Touchez ou cliquez sur le lien quelques minutes en avance. Sur un téléphone, on peut vous demander d'installer l'application depuis le magasin d'applications officiel. Quand on vous le demande, autorisez le micro et la caméra.",
            "Apprenez deux boutons : le micro (couper et rétablir le son) et la caméra (allumer et éteindre). Asseyez-vous face à la lumière, dans un endroit calme, et coupez votre micro quand vous ne parlez pas."
          ],
          steps: ["Trouvez le lien dans l'e-mail ou le SMS d'une personne que vous connaissez.", "Rejoignez cinq minutes en avance.", "Si on vous le demande, installez l'application officielle ou ouvrez-la dans le navigateur.", "Autorisez le micro et la caméra.", "Trouvez les boutons micro et caméra.", "Tournez-vous vers la lumière, trouvez un endroit calme et coupez le micro quand vous ne parlez pas.", "Appuyez sur Quitter ou sur le bouton rouge pour raccrocher."],
          words: [["Appel vidéo", "un appel où l'on se voit et s'entend sur un écran."], ["Couper le micro", "éteindre votre micro pour que les autres ne vous entendent pas."], ["Lien de réunion", "une adresse web qui vous emmène directement dans un appel vidéo."]],
          slides: [
            { title: "Applications d'appel vidéo courantes", bullets: ["Zoom, Google Meet, Microsoft Teams", "FaceTime sur les appareils Apple", "En général, vous recevez un lien par e-mail ou SMS"] },
            { title: "Rejoindre", bullets: ["Cliquez sur le lien quelques minutes en avance", "Autorisez le micro et la caméra"] },
            { title: "Deux boutons à connaître", bullets: ["Micro : couper et rétablir le son", "Caméra : allumer et éteindre", "Bouton rouge ou Quitter : raccrocher"] },
            { title: "Bien paraître et bien s'entendre", bullets: ["Face à la lumière", "Un endroit calme", "Micro coupé quand vous ne parlez pas"] }
          ],
          tryIt: "Entraînement pour la tâche finale : demandez à un ami ou à un proche de vous envoyer un lien d'appel vidéo (ou lancez vous-même un appel Google Meet ou Zoom). Rejoignez-le, coupez et rétablissez le micro, éteignez et rallumez la caméra, puis quittez l'appel.",
          youCanNow: "rejoindre un appel vidéo à partir d'un lien, utiliser les boutons micro et caméra, et quitter l'appel."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Rester en sécurité et communiquer en ligne",
        questions: [
          { q: "Un e-mail dit que votre compte bancaire est bloqué et que vous devez cliquer sur un lien dans l'heure. Que faites-vous ?", options: ["Cliquer vite sur le lien", "Répondre avec votre numéro de compte", "Aller vous-même sur le vrai site de la banque ou appeler un numéro connu", "Le transférer à tous vos amis"], answer: 2, why: "La pression et un problème sont des signes d'arnaque ; vérifiez par un moyen que vous connaissez déjà." },
          { q: "Quelle demande de paiement est un signe d'arnaque ?", options: ["Payer une facture sur le site de votre banque", "Payer avec des cartes cadeaux", "Payer un magasin à la caisse", "Payer un médecin à l'accueil"], answer: 1, why: "La FTC cite les cartes cadeaux comme un paiement inhabituel demandé par les escrocs." },
          { q: "Quelle impression donne au lecteur un texte TOUT EN MAJUSCULES ?", options: ["Que vous criez", "Que vous êtes poli", "Que vous êtes discret", "Que vous êtes drôle"], answer: 0, why: "Tout en majuscules donne l'impression de crier." },
          { q: "Pendant un appel vidéo, vous ne parlez pas et il y a du bruit chez vous. Que devez-vous faire ?", options: ["Quitter l'appel", "Monter le volume", "Éteindre seulement la caméra", "Couper votre micro"], answer: 3, why: "Couper le micro empêche les autres d'entendre le bruit de fond." },
          { q: "Où les personnes aux États-Unis peuvent-elles signaler une arnaque ?", options: ["reportfraud.ftc.gov", "L'e-mail de l'escroc", "Un commentaire sur un réseau social", "freehelp.win"], answer: 0, why: "La FTC reçoit les signalements d'arnaques sur reportfraud.ftc.gov." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'e-mail et la communication en ligne",
    questions: [
      { q: "Dans l'adresse maria@gmail.com, que vous dit gmail.com ?", options: ["Le mot de passe de Maria", "L'entreprise qui gère l'e-mail", "Le numéro de téléphone de Maria", "La ville de Maria"], answer: 1, why: "La partie après le @ est l'entreprise de messagerie." },
      { q: "Lequel est un service d'e-mail gratuit ?", options: ["Outlook.com", "Une imprimante", "Un SMS", "Un navigateur web"], answer: 0, why: "Outlook.com, Gmail et Yahoo Mail sont des services d'e-mail gratuits." },
      { q: "Un mot de passe e-mail fort est :", options: ["Votre date de naissance", "« motdepasse »", "Le même que partout ailleurs", "Long et utilisé nulle part ailleurs"], answer: 3, why: "Un mot de passe long et unique est le plus difficile à deviner ou à voler." },
      { q: "Quel bouton commence un nouvel e-mail ?", options: ["Nouveau message ou Écrire", "Supprimer", "Spam", "Archiver"], answer: 0, why: "Nouveau message commence un nouvel e-mail." },
      { q: "Quel est le meilleur objet pour se renseigner sur un emploi ?", options: ["« salut »", "Pas d'objet", "« lis ça »", "« Candidature au poste de caissier »"], answer: 3, why: "Il dit exactement au lecteur de quoi parle l'e-mail." },
      { q: "Avant d'appuyer sur Envoyer, vous devez :", options: ["Ajouter votre numéro de compte bancaire", "Enlever la salutation", "L'écrire tout en majuscules", "Vérifier l'adresse dans « À » et relire l'e-mail une fois"], answer: 3, why: "On ne peut pas reprendre un e-mail, alors vérifiez-le d'abord." },
      { q: "Quelle partie vient à la fin d'un e-mail ?", options: ["L'objet", "L'adresse dans « À »", "Une formule de fin avec votre nom", "Le trombone"], answer: 2, why: "Une formule comme « Merci, Ana » termine l'e-mail." },
      { q: "Transférer veut dire :", options: ["Répondre seulement à l'expéditeur", "Supprimer l'e-mail", "Envoyer l'e-mail à une nouvelle personne", "Le marquer comme spam"], answer: 2, why: "Transférer envoie à une autre personne un e-mail que vous avez reçu." },
      { q: "L'icône du trombone sert à :", options: ["Joindre un fichier", "Changer la police", "Bloquer un expéditeur", "Imprimer l'e-mail"], answer: 0, why: "Le trombone ajoute une pièce jointe." },
      { q: "Un inconnu vous envoie un fichier que vous n'attendiez pas. Vous devez :", options: ["L'ouvrir tout de suite", "Le transférer à vos amis", "Ne pas l'ouvrir", "Répondre avec votre mot de passe"], answer: 2, why: "Les fichiers inattendus d'inconnus peuvent contenir des programmes nuisibles." },
      { q: "Répondre à tous doit être utilisé :", options: ["Toujours", "Seulement quand tout le monde dans l'e-mail a besoin de votre réponse", "Jamais", "Pour envoyer du spam"], answer: 1, why: "Répondre à tous atteint tout le monde, donc utilisez-le seulement quand tous en ont besoin." },
      { q: "L'hameçonnage, c'est :", options: ["Un faux message qui essaie de vous tromper", "Un type de pièce jointe", "Une application d'appel vidéo", "Un mot de passe fort"], answer: 0, why: "Les messages d'hameçonnage imitent les vrais pour voler des informations ou de l'argent." },
      { q: "Le nom de l'expéditeur dit « Amazon » mais l'adresse est support@amaz0n-help.win. C'est :", options: ["Normal", "Un lien d'appel vidéo", "L'adresse principale d'Amazon", "Un signe d'alerte"], answer: 3, why: "La vraie adresse de l'expéditeur ne correspond pas à l'entreprise." },
      { q: "Lequel est l'un des quatre signes d'arnaque de la FTC ?", options: ["Le message est court", "Une pression pour agir immédiatement", "Il a une salutation", "Il vient d'un ami que vous avez appelé"], answer: 1, why: "Les escrocs vous pressent pour que vous ne preniez pas le temps de réfléchir." },
      { q: "Vous n'êtes pas sûr qu'un e-mail de votre banque soit vrai. Le plus sûr est de :", options: ["Cliquer sur son lien pour vérifier", "Répondre pour demander", "Aller vous-même sur le site de la banque ou appeler le numéro inscrit sur votre carte", "Envoyer votre numéro de compte"], answer: 2, why: "Utilisez un moyen que vous savez être le vrai, pas le lien de l'e-mail." },
      { q: "Vous êtes contrarié et avez écrit un e-mail en colère. La politesse dit de :", options: ["L'envoyer tout en majuscules", "Attendre et relire avant d'envoyer", "L'envoyer à tout le monde", "Ajouter votre numéro de compte"], answer: 1, why: "Attendre vous aide à envoyer un message plus calme et plus clair." },
      { q: "Que ne devez-vous jamais mettre dans un e-mail ?", options: ["« Merci »", "Une salutation", "Votre numéro de sécurité sociale", "Un objet"], answer: 2, why: "Les numéros privés dans un e-mail peuvent être volés." },
      { q: "Laquelle est une application d'appel vidéo courante ?", options: ["Zoom", "Calculatrice", "Bloc-notes", "Pellicule photo"], answer: 0, why: "Zoom, Google Meet, Teams et FaceTime sont des applications d'appel vidéo." },
      { q: "En rejoignant un appel vidéo, une bonne habitude est de :", options: ["Arriver 20 minutes en retard", "S'asseoir avec une fenêtre lumineuse derrière soi", "Rejoindre quelques minutes en avance et faire face à la lumière", "Laisser la télévision allumée fort"], answer: 2, why: "Arriver en avance et faire face à la lumière aide l'appel à bien se passer." },
      { q: "Pendant un appel vidéo, le bouton micro vous permet de :", options: ["Prendre une photo", "Envoyer un fichier", "Couper internet", "Couper et rétablir votre son"], answer: 3, why: "Le bouton micro coupe et rétablit votre son." }
    ]
  }
};
