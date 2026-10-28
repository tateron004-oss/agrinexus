"use strict";

// Koach Learn course (French translation of underserved/underserved-beginner-ai-tools.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-beginner-ai-tools-fr",
  lang: "fr",
  translationOf: "underserved-beginner-ai-tools",
  category: "Undeserved Community",
  name: "Des outils d'IA faciles pour débuter",
  skills: "Choisir le bon outil d'IA gratuit, Parler à l'IA avec votre voix, Traduire avec l'appareil photo du téléphone, Faire une affiche simple avec Canva, Écrire de courts messages avec un assistant d'IA",
  outcome: "choisir le bon outil d'IA gratuit pour une tâche de tous les jours et l'utiliser : parler à un assistant avec votre voix, traduire un panneau ou une lettre avec l'appareil photo de votre téléphone, et faire une affiche simple d'une page pour un événement de quartier.",
  about: [
    "Il existe beaucoup d'outils d'IA gratuits, et il est difficile de savoir par où commencer. Ce cours vous montre un petit ensemble d'outils faciles pour débuter, qui ne coûtent rien et marchent sur un téléphone ou un ordinateur de bibliothèque.",
    "Vous utiliserez votre voix au lieu de taper, vous traduirez des mots avec l'appareil photo de votre téléphone, vous écrirez de courts messages avec un assistant d'IA, et vous créerez une affiche simple avec la version gratuite de Canva.",
    "Chaque leçon dure environ cinq minutes. Faites la tâche « Essayez maintenant » après chacune. Un contrôle des connaissances termine chaque chapitre, et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Faites une affiche d'une page pour un événement de quartier réel ou imaginaire, comme une collecte de nourriture, un nettoyage de rue ou une collecte de fonds pour l'école. Utilisez un assistant d'IA pour écrire un titre court et trois lignes de détails, créez l'affiche dans la version gratuite de Canva, et utilisez un outil de traduction pour mettre les mêmes mots dans une deuxième langue que parlent vos voisins.",
  chapters: [
    {
      name: "Chapitre 1 : Votre boîte à outils d'IA gratuite",
      lessons: [
        {
          title: "Choisir le bon outil gratuit pour la tâche",
          minutes: 4,
          goal: "Associer une tâche de tous les jours à l'outil d'IA gratuit qui lui convient.",
          text: [
            "Voyez les outils d'IA comme les ustensiles d'un tiroir de cuisine. Chacun est bon pour un travail différent.",
            "Un assistant conversationnel d'IA (ChatGPT, Microsoft Copilot ou Google Gemini) est bon pour écrire, expliquer et planifier. Une application de traduction (comme Google Traduction) est bonne pour les autres langues. Un outil de création graphique (comme Canva, qui a une version gratuite) est bon pour les affiches et les cartes.",
            "Partez de la tâche, pas de l'outil. Demandez-vous : ai-je besoin de mots écrits, de mots traduits, ou de quelque chose de joli à imprimer ou à partager ?"
          ],
          steps: ["Notez la tâche que vous devez faire.", "Décidez : avez-vous besoin de mots écrits, traduits ou mis en page ?", "Choisissez l'outil qui correspond : assistant conversationnel, application de traduction ou outil de création.", "Utilisez d'abord la version gratuite."],
          words: [["Assistant conversationnel", "un programme d'IA à qui vous écrivez ou parlez, et qui vous répond par écrit."], ["Version gratuite", "le niveau sans frais d'un outil ; certains outils vendent aussi des fonctions en plus."]],
          slides: [
            { title: "Les outils sont comme un tiroir de cuisine", bullets: ["Chaque outil est bon pour un travail différent", "Partez de la tâche, pas de l'outil"] },
            { title: "Trois outils gratuits pour commencer", bullets: ["Assistant conversationnel : écrire, expliquer, planifier", "Application de traduction : autres langues", "Canva gratuit : affiches et cartes"] },
            { title: "Demandez-vous", bullets: ["Ai-je besoin de mots écrits ?", "De mots traduits ?", "D'une création à imprimer ou à partager ?"] }
          ],
          tryIt: "Listez trois tâches que vous avez ce mois-ci. À côté de chacune, écrivez quel type d'outil convient : assistant conversationnel, application de traduction ou outil de création.",
          youCanNow: "associer une tâche de tous les jours au bon outil d'IA gratuit."
        },
        {
          title: "Parler à l'IA avec votre voix",
          minutes: 5,
          goal: "Poser une question à un assistant d'IA en parlant au lieu de taper.",
          text: [
            "Si taper est lent ou difficile pour vous, vous pouvez parler. La plupart des applications d'assistant d'IA ont un bouton micro. Touchez-le, dites votre question, et l'application transforme vos paroles en texte.",
            "Les téléphones ont aussi la saisie vocale intégrée au clavier. Cherchez un petit micro sur le clavier quand vous écrivez un message.",
            "Parlez clairement et un peu plus lentement que d'habitude. Dites ce dont vous avez besoin, par exemple : « Aide-moi à écrire un petit mot à l'enseignant de mon fils pour dire qu'il manquera l'école vendredi pour un rendez-vous chez le médecin. » Relisez les mots avant d'envoyer, car la saisie vocale peut mal entendre."
          ],
          steps: ["Ouvrez l'application d'assistant d'IA ou un message sur votre téléphone.", "Trouvez le bouton micro.", "Touchez-le et dites votre question clairement.", "Relisez les mots entendus, corrigez les erreurs, puis envoyez."],
          words: [["Saisie vocale", "une fonction du téléphone qui transforme ce que vous dites en mots écrits."], ["Bouton micro", "un petit bouton avec le dessin d'un micro qui permet à l'appareil d'écouter."]],
          slides: [
            { title: "Parlez au lieu de taper", bullets: ["La plupart des applications d'IA ont un bouton micro", "Les téléphones ont la saisie vocale sur le clavier"] },
            { title: "Comment lui parler", bullets: ["Parlez clairement, un peu plus lentement", "Dites ce dont vous avez besoin et comment"] },
            { title: "Vérifiez avant d'envoyer", bullets: ["La saisie vocale peut mal entendre", "Relisez, corrigez, puis envoyez"] }
          ],
          tryIt: "Utilisez le bouton micro pour demander à un assistant d'IA d'écrire un mot de deux phrases à un enseignant, un patron ou un voisin. Relisez-le et corrigez les erreurs.",
          youCanNow: "demander de l'aide à un assistant d'IA avec votre voix et vérifier ce qu'il a entendu."
        },
        {
          title: "Traduire avec l'appareil photo de votre téléphone",
          minutes: 5,
          goal: "Traduire un panneau, une étiquette ou une lettre imprimée en pointant l'appareil photo de votre téléphone dessus.",
          text: [
            "Des applications gratuites comme Google Traduction peuvent lire des mots imprimés avec l'appareil photo de votre téléphone et les afficher dans une autre langue. Cela aide pour les panneaux, les étiquettes de médicaments, les avis de l'école et les formulaires écrits dans une langue que vous lisez mal.",
            "Dans l'application, choisissez les deux langues (celle du papier et celle que vous voulez), choisissez l'option appareil photo, et pointez votre téléphone vers les mots.",
            "La traduction automatique est utile mais pas parfaite. Pour les médicaments, les papiers juridiques ou tout ce qui est important, demandez un interprète. Beaucoup d'hôpitaux, de cliniques et de bureaux de l'administration en proposent un gratuitement ; demandez à l'accueil."
          ],
          steps: ["Installez une application de traduction gratuite depuis la boutique d'applications officielle.", "Choisissez la langue du papier et la langue que vous voulez.", "Choisissez l'option appareil photo et pointez votre téléphone vers les mots.", "Pour les papiers importants, demandez un interprète au bureau."],
          words: [["Traduire", "faire passer des mots d'une langue à une autre."], ["Interprète", "une personne formée qui traduit la parole entre deux langues."]],
          slides: [
            { title: "Votre appareil photo peut traduire", bullets: ["Panneaux, étiquettes, avis de l'école, formulaires", "Applications gratuites comme Google Traduction"] },
            { title: "Comment faire", bullets: ["Choisissez les deux langues", "Choisissez l'option appareil photo", "Pointez votre téléphone vers les mots"] },
            { title: "Papiers importants", bullets: ["La traduction automatique n'est pas parfaite", "Demandez un interprète au bureau", "Beaucoup de cliniques et bureaux en offrent un gratuitement"] }
          ],
          tryIt: "Pointez l'appareil photo d'une application de traduction vers une étiquette ou un panneau imprimé chez vous (une boîte d'aliments fait l'affaire). Traduisez-le dans une autre langue, puis dans l'autre sens.",
          youCanNow: "traduire des mots imprimés avec l'appareil photo de votre téléphone, et savoir quand demander plutôt une personne."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Votre boîte à outils d'IA gratuite",
        questions: [
          { q: "Vous avez besoin d'une affiche pour une vente de gâteaux à l'école. Quel type d'outil convient le mieux ?", options: ["Une application de traduction", "Un outil de création comme Canva", "Une calculatrice", "Une application de cartes"], answer: 1, why: "Les outils de création sont faits pour les affiches et les cartes." },
          { q: "Taper est difficile pour vous. Comment poser quand même une question à un assistant d'IA ?", options: ["C'est impossible", "Payer d'abord un cours de clavier", "Utiliser le bouton micro et parler", "Demander à quelqu'un de taper votre mot de passe"], answer: 2, why: "La saisie vocale permet de parler au lieu de taper." },
          { q: "Pourquoi relire ce que la saisie vocale a écrit avant d'envoyer ?", options: ["Elle peut mal entendre des mots", "Elle ajoute toujours votre adresse", "Elle coûte de l'argent", "Elle supprime votre message"], answer: 0, why: "La saisie vocale peut se tromper de mots." },
          { q: "Vous voulez lire un panneau dans une autre langue. Qu'utilisez-vous ?", options: ["Un outil de création", "Une application de musique", "Une lampe de poche", "Une application de traduction avec l'option appareil photo"], answer: 3, why: "L'option appareil photo lit et traduit les mots imprimés." },
          { q: "Vous devez comprendre les instructions de votre médecin dans une autre langue. Que faire de mieux ?", options: ["Demander un interprète à la clinique", "Deviner", "Utiliser seulement une traduction sur téléphone", "Ignorer les instructions"], answer: 0, why: "Pour les médicaments et les papiers importants, un interprète formé est le plus sûr." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Créer des choses avec l'IA",
      lessons: [
        {
          title: "Écrire de courts messages avec un assistant d'IA",
          minutes: 4,
          goal: "Faire écrire par un assistant d'IA un message court et clair avec le ton voulu.",
          text: [
            "Un assistant d'IA peut écrire de courts messages pour vous : un rappel pour votre groupe de quartier, un mot à un propriétaire, ou un remerciement à un bénévole.",
            "Dites-lui à qui s'adresse le message, ce qu'il doit dire, et le ton : aimable, poli ou ferme. Dites-lui la longueur : « trois phrases » ou « moins de 50 mots ».",
            "Ensuite, faites-le vôtre. Changez les mots qui ne vous ressemblent pas, et vérifiez vous-même les noms, les dates et les lieux."
          ],
          steps: ["Dites à qui s'adresse le message.", "Dites ce qu'il doit contenir : date, heure, lieu, quoi apporter.", "Dites le ton et la longueur.", "Retouchez-le pour qu'il vous ressemble, et vérifiez chaque fait."],
          words: [["Ton", "la façon dont un message sonne : aimable, poli, sérieux ou ferme."]],
          slides: [
            { title: "Courts messages que l'IA peut écrire", bullets: ["Rappels pour votre groupe", "Mots à un propriétaire ou à l'école", "Remerciements aux bénévoles"] },
            { title: "Dites-lui quatre choses", bullets: ["À qui il s'adresse", "Ce qu'il doit dire", "Le ton", "La longueur"] },
            { title: "Faites-le vôtre", bullets: ["Changez les mots qui ne vous ressemblent pas", "Vérifiez noms, dates et lieux"] }
          ],
          tryIt: "Demandez à un assistant d'IA : « Écris un rappel aimable de trois phrases pour mes voisins sur le nettoyage de la rue samedi à 9 h. Apportez des gants. » Puis changez une ligne pour qu'elle vous ressemble.",
          youCanNow: "faire écrire par un assistant d'IA un court message avec le bon ton et la bonne longueur, puis le faire vôtre."
        },
        {
          title: "Créer une affiche simple avec Canva",
          minutes: 6,
          goal: "Faire une affiche d'une page dans la version gratuite de Canva.",
          text: [
            "Canva est un site et une application de création graphique avec une version gratuite. Il a des modèles tout prêts, donc vous n'avez pas besoin d'être artiste. Vous pouvez l'utiliser sur canva.com depuis un ordinateur de bibliothèque ou dans son application sur votre téléphone.",
            "Cherchez un modèle dans Canva, comme « affiche » ou « affiche événement ». Cliquez sur celui qui vous plaît, puis cliquez sur ses mots pour les remplacer par les vôtres. Restez simple : un grand titre, trois lignes courtes (quoi, quand, où) et une image.",
            "Quand vous avez fini, téléchargez-la pour l'imprimer, ou partagez-la par SMS ou par e-mail. Canva vous demande de créer un compte gratuit ; sur un ordinateur partagé, déconnectez-vous à la fin."
          ],
          steps: ["Allez sur canva.com ou ouvrez l'application Canva et créez un compte gratuit.", "Cherchez un modèle d'affiche et choisissez-en un.", "Cliquez sur chaque texte et écrivez vos propres mots.", "Limitez-vous à un titre, trois lignes courtes et une image.", "Téléchargez-la ou partagez-la, puis déconnectez-vous sur un ordinateur partagé."],
          words: [["Modèle", "une création toute prête que vous remplissez avec vos mots et vos images."], ["Télécharger", "enregistrer une copie d'un fichier sur votre appareil."]],
          slides: [
            { title: "Canva : outil de création gratuit", bullets: ["Site canva.com ou application Canva", "Modèles tout prêts", "Pas besoin de talent artistique"] },
            { title: "Faites votre affiche", bullets: ["Cherchez un modèle d'affiche", "Cliquez sur les mots et écrivez les vôtres", "Titre + quoi, quand, où + une image"] },
            { title: "Terminez et partagez", bullets: ["Téléchargez pour imprimer", "Partagez par SMS ou e-mail", "Déconnectez-vous sur un ordinateur partagé"] }
          ],
          tryIt: "Ouvrez Canva, choisissez un modèle d'affiche, et remplacez les mots par le rappel écrit à la leçon 4. Téléchargez-la ou enregistrez-la dans votre compte.",
          youCanNow: "faire une affiche simple et claire avec un modèle gratuit de Canva."
        },
        {
          title: "Utiliser les outils ensemble",
          minutes: 5,
          goal: "Utiliser ensemble un assistant conversationnel, un outil de création et un outil de traduction pour faire une affiche terminée en deux langues.",
          text: [
            "Les vrais projets utilisent souvent plus d'un outil. Pour une affiche de quartier, vous pouvez utiliser l'assistant conversationnel pour écrire les mots, Canva pour la mise en page, et un outil de traduction pour faire une deuxième version.",
            "Demandez à l'IA un titre court et trois lignes de détails. Collez-les dans un modèle Canva. Puis traduisez les mêmes mots dans une deuxième langue que parlent vos voisins et faites une copie de l'affiche avec eux.",
            "Si vous le pouvez, demandez à quelqu'un qui parle cette langue de relire la traduction. Les outils gratuits sont un bon début ; un vrai lecteur la rend juste."
          ],
          steps: ["Demandez à un assistant conversationnel un titre et trois lignes de détails.", "Mettez les mots dans un modèle d'affiche Canva.", "Traduisez les mots dans une deuxième langue.", "Faites une copie de l'affiche avec la traduction.", "Si vous le pouvez, demandez à une personne qui parle bien la langue de la relire."],
          words: [["Projet", "un travail avec un résultat final clair, comme une affiche."]],
          slides: [
            { title: "Un projet, trois outils", bullets: ["Assistant conversationnel : les mots", "Canva : la mise en page", "Application de traduction : une deuxième langue"] },
            { title: "Les étapes", bullets: ["Écrivez les mots avec l'IA", "Mettez-les dans un modèle Canva", "Traduisez et faites une deuxième copie"] },
            { title: "Rendez-la juste", bullets: ["Vérifiez chaque date et chaque lieu", "Faites relire la traduction par une personne qui parle bien la langue"] }
          ],
          tryIt: "Tâche finale : faites une affiche d'une page pour un événement de quartier. Utilisez un assistant d'IA pour écrire un titre et trois lignes, créez-la dans Canva, et faites une deuxième copie traduite dans une autre langue que parlent vos voisins.",
          youCanNow: "utiliser plusieurs outils d'IA gratuits ensemble pour terminer un vrai projet pour votre quartier."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Créer des choses avec l'IA",
        questions: [
          { q: "Quelles quatre choses dire à un assistant d'IA quand vous demandez un court message ?", options: ["Votre mot de passe, adresse, âge et banque", "À qui il s'adresse, ce qu'il doit dire, le ton et la longueur", "Seulement la date", "Rien ; il devinera"], answer: 1, why: "Ces quatre détails donnent un message adapté." },
          { q: "Qu'est-ce qu'un modèle ?", options: ["Un virus", "Un mot de passe", "Une création toute prête que vous remplissez avec vos mots", "Un réglage du téléphone"], answer: 2, why: "Les modèles permettent aux débutants de faire de belles créations." },
          { q: "Que doit contenir une affiche simple ?", options: ["Un grand titre et quoi, quand et où", "Dix paragraphes", "Votre numéro de sécurité sociale", "Seulement des images, sans mots"], answer: 0, why: "Les affiches simples se lisent facilement : titre, détails et une image." },
          { q: "Vous avez utilisé Canva sur un ordinateur de bibliothèque. Que faites-vous à la fin ?", options: ["Laisser votre compte ouvert", "Enregistrer votre mot de passe dans le navigateur", "Écrire votre mot de passe sur l'écran", "Vous déconnecter"], answer: 3, why: "Se déconnecter protège votre compte sur un ordinateur partagé." },
          { q: "Vous avez traduit votre affiche avec un outil gratuit. Comment vous assurer qu'elle est juste ?", options: ["La faire relire par une personne qui parle bien la langue", "La traduire dix fois de plus", "Agrandir la police", "Ajouter plus d'images"], answer: 0, why: "Un vrai lecteur repère les erreurs des machines." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Des outils d'IA faciles pour débuter",
    questions: [
      { q: "Pour choisir un outil d'IA, vous devez partir de :", options: ["L'outil le plus cher", "La tâche que vous devez faire", "La plus récente application", "Ce que propose un inconnu"], answer: 1, why: "Partez de la tâche, puis choisissez l'outil qui convient." },
      { q: "Quel outil est le meilleur pour écrire et expliquer ?", options: ["Une application d'appareil photo", "Une application de lampe de poche", "Un assistant conversationnel comme Copilot, ChatGPT ou Gemini", "Un lecteur de musique"], answer: 2, why: "Les assistants conversationnels sont doués pour écrire, expliquer et planifier." },
      { q: "Canva sert surtout à :", options: ["Créer des affiches et des cartes", "Faire des opérations bancaires", "Passer des appels", "Voir la météo"], answer: 0, why: "Canva est un outil de création avec une version gratuite." },
      { q: "Qu'essayer en premier quand vous choisissez un outil ?", options: ["L'abonnement le plus cher", "Un cours payant", "Une publicité surgissante", "La version gratuite"], answer: 3, why: "Les versions gratuites suffisent pour la plupart des tâches de débutant." },
      { q: "Comment poser une question à voix haute à la plupart des applications d'IA ?", options: ["Secouer le téléphone", "Toucher le bouton micro", "Éteindre le téléphone", "Ouvrir l'appareil photo"], answer: 1, why: "Le bouton micro permet à l'application d'écouter." },
      { q: "Avec la saisie vocale, il est utile de :", options: ["Parler clairement et un peu plus lentement", "Chuchoter", "Parler très vite", "Couvrir le micro"], answer: 0, why: "Une parole claire et plus lente est mieux comprise." },
      { q: "La saisie vocale a écrit « vent dredi » au lieu de « vendredi ». Vous devez :", options: ["L'envoyer quand même", "Supprimer l'application", "Corriger avant d'envoyer", "Recommencer sur un nouveau téléphone"], answer: 2, why: "Relisez et corrigez toujours ce que la saisie vocale a entendu." },
      { q: "Pour traduire un avis imprimé de l'école, vous pouvez :", options: ["Utiliser un outil de création", "Utiliser l'option appareil photo d'une application de traduction", "Utiliser la calculatrice", "Attendre qu'on vous appelle"], answer: 1, why: "L'option appareil photo lit et traduit les mots imprimés." },
      { q: "Dans une application de traduction, vous choisissez d'abord :", options: ["Un mot de passe", "Une police", "Une couleur", "La langue du papier et la langue que vous voulez"], answer: 3, why: "L'application doit connaître les deux langues." },
      { q: "Pour un papier juridique dans une langue que vous lisez mal, l'aide la plus sûre est :", options: ["Un interprète formé", "Deviner", "Un mème", "Ne pas le lire"], answer: 0, why: "Les papiers importants demandent une personne formée, pas seulement une machine." },
      { q: "Laquelle est une bonne demande de court message ?", options: ["« message »", "« Écris un mot poli de deux phrases à mon propriétaire pour demander quand le chauffage sera réparé. »", "« écris »", "« trucs pour le proprio »"], answer: 1, why: "Elle dit à qui, quoi, le ton et la longueur." },
      { q: "Après qu'une IA a écrit votre message, vous devez :", options: ["L'envoyer sans le lire", "Ajouter vos coordonnées bancaires", "Le retoucher pour qu'il vous ressemble et vérifier les faits", "Le publier"], answer: 2, why: "Vous le faites vôtre et vérifiez les noms, dates et lieux." },
      { q: "Le ton, c'est :", options: ["La façon dont un message sonne, aimable ou ferme par exemple", "La longueur du message", "La taille de la police", "Le volume du téléphone"], answer: 0, why: "Le ton est ce que le message fait ressentir au lecteur." },
      { q: "Que vous demande de créer Canva avant de pouvoir travailler ?", options: ["Un paiement", "Un appel téléphonique", "Un compte gratuit", "Un formulaire imprimé"], answer: 2, why: "Canva utilise un compte gratuit pour enregistrer vos créations." },
      { q: "Quelle affiche est la plus facile à lire ?", options: ["Une page pleine de petits caractères", "Un titre, trois lignes courtes et une image", "Dix images sans mots", "Seulement un numéro de téléphone"], answer: 1, why: "Court et clair, c'est le mieux pour une affiche." },
      { q: "Pour avoir une copie de votre affiche à imprimer, vous :", options: ["Prenez l'écran en photo", "Fermez le navigateur", "Écrivez à Canva", "La téléchargez"], answer: 3, why: "Télécharger enregistre une copie que vous pouvez imprimer." },
      { q: "Dans le projet combiné, quel outil écrit les mots ?", options: ["L'assistant conversationnel", "L'application de traduction", "L'imprimante", "L'appareil photo"], answer: 0, why: "L'assistant conversationnel écrit le titre et les détails." },
      { q: "Pourquoi faire une deuxième copie de l'affiche dans une autre langue ?", options: ["Elle est plus jolie", "Pour que plus de voisins puissent la lire", "Canva l'exige", "Pour utiliser plus de papier"], answer: 1, why: "Une deuxième langue touche une plus grande partie de votre quartier." },
      { q: "Avant de partager l'affiche terminée, vous devez vérifier :", options: ["La météo", "La batterie de votre téléphone", "Que chaque date et chaque lieu sont justes", "La couleur de l'imprimante"], answer: 2, why: "Des détails faux envoient les gens au mauvais endroit." },
      { q: "Dans la tâche finale, le dernier outil que vous utilisez est :", options: ["Une calculatrice", "Une application de musique", "Une carte", "Un outil de traduction pour une copie dans une deuxième langue"], answer: 3, why: "La dernière étape fait l'affiche dans une deuxième langue." }
    ]
  }
};
