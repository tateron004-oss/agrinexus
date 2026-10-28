"use strict";

// Koach Learn course, French translation of shared/telemedicine-portal.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// US facts (HIPAA, HealthIT.gov, 911) are kept as US facts with a short explanation; students elsewhere are told to use their local emergency number.

module.exports = {
  id: "telemedicine-portal-fr",
  lang: "fr",
  translationOf: "telemedicine-portal",
  category: "Seniors and Technology",
  name: "Utiliser la téléconsultation et le portail patient",
  skills: "Se connecter à un portail patient, Lire ses résultats d'examens et comptes rendus, Écrire à son équipe soignante, Demander un renouvellement d'ordonnance et un rendez-vous, Rejoindre une téléconsultation",
  outcome: "vous connecter à votre portail patient, trouver vos résultats d'examens et comptes rendus de consultation, envoyer un message clair à votre équipe soignante, demander un renouvellement d'ordonnance ou un rendez-vous, et rejoindre une téléconsultation préparé avec vos questions.",
  about: [
    "Beaucoup de cabinets et d'hôpitaux ont maintenant un portail patient : un site ou une application sécurisés où vous voyez vos informations de santé et parlez à votre équipe soignante. Beaucoup proposent aussi des consultations vidéo, appelées téléconsultation ou télémédecine, pour voir un médecin ou un infirmier sans vous déplacer.",
    "Ce cours vous montre comment entrer dans votre portail, lire vos résultats, envoyer des messages, demander des renouvellements d'ordonnance et des rendez-vous, et préparer puis rejoindre une téléconsultation.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites l'exercice « Essayez maintenant ». Il y a un court contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Ce cours apprend à utiliser les outils ; pour les questions sur votre propre santé, demandez toujours à votre médecin, votre infirmier ou votre pharmacien. En cas d'urgence, appelez le numéro d'urgence (le 911 aux États-Unis, le 15 ou le 112 en France), pas le portail."
  ],
  finalTask: "Connectez-vous à votre portail patient. Trouvez un résultat d'examen ou un compte rendu de consultation, puis écrivez (et envoyez, si vous avez une vraie question) un message court et clair à votre équipe soignante avec votre question. Trouvez où demander un renouvellement d'ordonnance ou un rendez-vous. Enfin, écrivez une liste de trois questions et de vos médicaments actuels pour votre prochaine consultation, et trouvez où le lien de la téléconsultation apparaîtra dans le portail ou dans vos e-mails.",
  chapters: [
    {
      name: "Chapitre 1 : Votre portail patient",
      lessons: [
        {
          title: "Entrer dans votre portail patient",
          minutes: 5,
          goal: "Créer votre compte sur le portail et vous connecter en sécurité.",
          text: [
            "Un portail patient est un site ou une application sécurisés de votre cabinet, de votre hôpital ou de votre assurance santé. Aux États-Unis, MyChart est utilisé par beaucoup de systèmes de santé, mais le portail de votre cabinet peut avoir un autre nom. Demandez à l'accueil quel portail ils utilisent.",
            "Pour vous inscrire, il vous faut en général un code d'activation du cabinet (imprimé sur un compte rendu ou envoyé par SMS ou e-mail), ou vous vous inscrivez avec votre nom, votre date de naissance et un code envoyé sur votre téléphone. Utilisez le lien du site officiel de votre cabinet ou l'application officielle du magasin d'applications.",
            "Choisissez un mot de passe fort que vous n'utilisez nulle part ailleurs, et activez la validation en deux étapes si elle est proposée. Ne vous connectez pas sur un ordinateur partagé, sauf si vous vous déconnectez et fermez le navigateur ensuite."
          ],
          steps: ["Demandez à votre cabinet quel portail il utilise.", "Obtenez votre code d'activation ou votre lien d'inscription auprès du cabinet.", "Utilisez le site officiel du cabinet ou l'application officielle.", "Créez un mot de passe fort et unique.", "Activez la validation en deux étapes si elle est proposée.", "Sur un ordinateur partagé : déconnectez-vous et fermez le navigateur."],
          words: [["Portail patient", "un site ou une application sécurisés où vous voyez vos informations de santé et contactez votre équipe soignante."], ["Code d'activation", "un code à usage unique du cabinet qui relie votre compte à votre dossier."], ["Équipe soignante", "votre médecin, les infirmiers et les autres personnes qui s'occupent de votre santé."]],
          slides: [
            { title: "Ce qu'est un portail patient", bullets: ["Un site ou une appli sécurisés de votre cabinet ou assurance", "MyChart est courant ; demandez lequel utilise votre cabinet"] },
            { title: "S'inscrire", bullets: ["Code d'activation du cabinet", "Seulement le site ou l'appli officiels"] },
            { title: "Protégez-le", bullets: ["Mot de passe fort et unique", "Validation en deux étapes", "Déconnectez-vous sur un ordinateur partagé"] }
          ],
          tryIt: "Trouvez le portail de votre cabinet depuis son site officiel ou demandez à l'accueil. Créez votre compte ou connectez-vous, puis déconnectez-vous et reconnectez-vous pour être sûr de pouvoir le faire seul.",
          youCanNow: "trouver le portail patient de votre cabinet, créer votre compte et vous connecter en sécurité."
        },
        {
          title: "Lire vos résultats d'examens et comptes rendus",
          minutes: 5,
          goal: "Trouver un résultat d'examen et un compte rendu de consultation dans votre portail.",
          text: [
            "Les portails ont des rubriques comme Résultats, Consultations ou Rendez-vous, Médicaments et Résumé de santé. Les résultats montrent souvent votre chiffre à côté d'une plage normale, appelée valeurs de référence. Un résultat en dehors de cette plage est souvent signalé, mais cela ne veut pas toujours dire que quelque chose ne va pas.",
            "Vous pouvez voir un résultat avant que votre médecin vous en ait parlé. Ne paniquez pas et ne devinez pas. Notez votre question et posez-la à votre équipe soignante. Un outil d'IA peut aider à expliquer un mot médical avec des mots simples, mais n'y tapez jamais votre nom, votre date de naissance ni vos numéros de dossier, et vérifiez sa réponse avec votre équipe soignante.",
            "Aux États-Unis, HealthIT.gov explique que, selon la règle de confidentialité HIPAA, vous avez le droit de voir votre dossier de santé et d'en obtenir une copie, y compris une copie électronique, même si vous n'avez pas payé vos factures médicales. Dans beaucoup d'autres pays, la loi vous donne aussi le droit d'accéder à votre dossier."
          ],
          steps: ["Ouvrez Résultats d'examens ou Résultats.", "Touchez un résultat pour voir votre chiffre et la plage normale.", "Ouvrez Consultations pour lire votre compte rendu.", "Notez tout mot ou résultat que vous ne comprenez pas.", "Demandez à votre équipe soignante ; ne devinez pas."],
          words: [["Valeurs de référence", "la plage habituelle des résultats chez les personnes en bonne santé."], ["Compte rendu de consultation", "les notes de votre rendez-vous, comme votre plan de soins et vos médicaments."], ["HIPAA", "une loi américaine qui protège vos informations de santé et vous donne le droit de voir votre dossier."]],
          slides: [
            { title: "Les rubriques du portail", bullets: ["Résultats d'examens", "Consultations ou Rendez-vous", "Médicaments", "Résumé de santé"] },
            { title: "Lire un résultat", bullets: ["Votre chiffre à côté d'une plage normale", "Hors de la plage ne veut pas toujours dire problème", "Demandez ; ne devinez pas"] },
            { title: "Utiliser l'IA pour expliquer des mots", bullets: ["D'accord pour un mot médical en langage simple", "Jamais votre nom, date de naissance ou numéros de dossier", "Vérifiez avec votre équipe soignante"] },
            { title: "Votre droit à votre dossier (États-Unis)", bullets: ["Le voir et en obtenir une copie, y compris électronique", "Même avec des factures médicales impayées"] }
          ],
          sources: [{ name: "HealthIT.gov (site officiel américain de la santé numérique) : comment obtenir votre dossier de santé", url: "https://www.healthit.gov/how-to-get-your-health-record/" }],
          tryIt: "Dans votre portail, ouvrez un résultat d'examen ou un compte rendu. Notez un mot ou un chiffre que vous aimeriez faire expliquer, pour le demander à votre équipe soignante.",
          youCanNow: "trouver et lire un résultat d'examen et un compte rendu, et savoir quand demander à votre équipe soignante."
        },
        {
          title: "Écrire à votre équipe soignante",
          minutes: 5,
          goal: "Envoyer un message court et clair à votre équipe soignante par le portail.",
          text: [
            "La plupart des portails ont une rubrique Messages pour les questions qui ne sont pas urgentes, comme une question sur un médicament, un formulaire ou un résultat. La réponse peut prendre un jour ou plus, donc n'utilisez pas les messages pour quelque chose d'urgent. En cas d'urgence, appelez le numéro d'urgence.",
            "Un bon message est court. Dites à qui il s'adresse, votre question, et les détails utiles : quand cela a commencé, ce que vous avez essayé et ce dont vous avez besoin. Par exemple : « Depuis lundi, j'ai des vertiges après mon nouveau médicament pour la tension le matin. Dois-je le prendre le soir ? »",
            "Certains cabinets peuvent facturer à votre assurance les messages qui demandent un avis médical. Demandez à votre cabinet si vous n'êtes pas sûr. Les messages du portail sont sécurisés ; n'envoyez pas vos détails de santé par e-mail ordinaire ou par SMS à la place."
          ],
          steps: ["Ouvrez Messages et choisissez Nouveau message.", "Choisissez le destinataire ou le sujet.", "Écrivez votre question, quand cela a commencé et ce dont vous avez besoin.", "Relisez une fois et envoyez.", "Surveillez le portail ou votre e-mail pour la réponse.", "Urgent ? Appelez le cabinet. Urgence vitale ? Appelez le numéro d'urgence."],
          words: [["Message sécurisé", "un message privé envoyé dans le portail."], ["Non urgent", "qui peut sans danger attendre un jour ou deux pour une réponse."]],
          slides: [
            { title: "Les messages sont pour les questions non urgentes", bullets: ["Médicaments, formulaires, résultats", "La réponse peut prendre un jour ou plus", "Urgence : appelez le numéro d'urgence"] },
            { title: "Un message clair", bullets: ["À qui il s'adresse et votre question", "Quand cela a commencé et ce que vous avez essayé", "Ce dont vous avez besoin"] },
            { title: "Bon à savoir", bullets: ["Certains cabinets facturent les messages d'avis médical", "Utilisez le portail, pas l'e-mail ordinaire ni le SMS"] }
          ],
          tryIt: "Ouvrez Messages dans votre portail et préparez un court message avec les trois parties. Si vous avez une vraie question non urgente, envoyez-le ; sinon, supprimez le brouillon.",
          youCanNow: "écrire et envoyer un message clair et non urgent à votre équipe soignante, et savoir quand il vaut mieux appeler."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Votre portail patient",
        questions: [
          { q: "Qu'est-ce qu'un portail patient ?", options: ["Une application de réseau social", "Un site ou une appli sécurisés pour voir vos informations de santé et contacter votre équipe soignante", "Une pharmacie", "Un bureau d'aides sociales"], answer: 1, why: "Les portails donnent un accès sécurisé à votre dossier et à votre équipe soignante." },
          { q: "Où devez-vous trouver le lien pour vous inscrire à votre portail ?", options: ["Dans un SMS d'un inconnu", "Dans une publicité de recherche", "Sur le site officiel de votre cabinet ou à l'accueil", "Dans une publication sur un réseau social"], answer: 2, why: "Les sources officielles vous tiennent loin des faux sites." },
          { q: "Un résultat est hors de la plage normale et votre médecin n'a pas encore appelé. Que faites-vous ?", options: ["Noter votre question et la poser à votre équipe soignante", "Paniquer", "Arrêter tous vos médicaments", "Le publier sur les réseaux sociaux"], answer: 0, why: "Un résultat signalé n'est pas toujours un problème ; demandez à votre équipe soignante." },
          { q: "Vous voulez qu'un outil d'IA explique un mot médical. Que devez-vous laisser de côté ?", options: ["Le mot médical", "Les mots « explique simplement »", "Une demande d'exemple", "Votre nom, votre date de naissance et vos numéros de dossier"], answer: 3, why: "Ne mettez jamais vos identifiants de santé privés dans un outil d'IA." },
          { q: "Vous avez une douleur soudaine dans la poitrine. Que faites-vous ?", options: ["Envoyer un message sur le portail", "Appeler le numéro d'urgence (911 aux États-Unis, 15 ou 112 en France)", "Attendre une téléconsultation la semaine prochaine", "Relire vos anciens résultats"], answer: 1, why: "Les portails sont pour les questions non urgentes ; les urgences demandent d'appeler les secours." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Ordonnances, rendez-vous et téléconsultations",
      lessons: [
        {
          title: "Demander un renouvellement d'ordonnance et prendre rendez-vous",
          minutes: 4,
          goal: "Demander le renouvellement d'un médicament et trouver où prendre ou changer un rendez-vous.",
          text: [
            "Dans la rubrique Médicaments, beaucoup de portails montrent un bouton Demander un renouvellement à côté de chaque médicament. Choisissez le médicament et votre pharmacie, et envoyez. Demandez quelques jours avant d'être à court, car le cabinet et la pharmacie ont besoin de temps.",
            "Dans la rubrique Rendez-vous ou Consultations, vous pouvez souvent voir vos prochains rendez-vous, réserver certains types de consultation, annuler, ou vous inscrire sur une liste d'attente. Certains rendez-vous doivent être pris par téléphone ; le portail l'indiquera.",
            "Votre pharmacie a peut-être sa propre application qui vous prévient quand un médicament est prêt. Si quelque chose ne marche pas dans le portail, appelez le cabinet ; c'est toujours possible."
          ],
          steps: ["Ouvrez Médicaments.", "Touchez Demander un renouvellement à côté du médicament.", "Choisissez votre pharmacie et envoyez.", "Demandez quelques jours avant d'être à court.", "Ouvrez Rendez-vous pour voir, prendre, changer ou annuler des consultations."],
          words: [["Renouvellement", "une nouvelle quantité d'un médicament que vous prenez déjà."], ["Liste d'attente", "une liste qui vous propose un horaire plus tôt si quelqu'un annule."]],
          slides: [
            { title: "Les renouvellements", bullets: ["Rubrique Médicaments", "Demander un renouvellement, choisir la pharmacie, envoyer", "Demandez quelques jours avant d'être à court"] },
            { title: "Les rendez-vous", bullets: ["Voir les prochaines consultations", "Prendre, changer ou annuler certaines consultations", "Certaines demandent encore un appel"] },
            { title: "Quand ça ne marche pas", bullets: ["Appelez le cabinet", "C'est toujours possible"] }
          ],
          tryIt: "Ouvrez la rubrique Médicaments de votre portail et trouvez le bouton de renouvellement (n'envoyez une demande que si vous en avez besoin). Puis ouvrez Rendez-vous et trouvez votre prochaine consultation ou l'endroit pour en prendre une.",
          youCanNow: "demander un renouvellement et trouver, prendre ou changer un rendez-vous dans votre portail."
        },
        {
          title: "Se préparer à une téléconsultation",
          minutes: 5,
          goal: "Préparer votre appareil, votre espace et vos questions avant une téléconsultation.",
          text: [
            "Une téléconsultation (ou télémédecine) vous permet de voir un médecin, un infirmier ou un conseiller sur votre téléphone, votre tablette ou votre ordinateur. Elle convient bien à beaucoup de suivis, de bilans de traitement, de consultations de santé mentale et de problèmes simples. Certains problèmes demandent encore un examen en personne, et votre équipe soignante vous le dira.",
            "Préparez-vous la veille : chargez votre appareil, vérifiez que l'application du portail ou l'application vidéo est installée, et testez votre caméra et votre micro. Beaucoup de portails ont un bouton de test ou un enregistrement en ligne à faire à l'avance.",
            "Trouvez un endroit calme, privé et bien éclairé. Notez vos questions, vos symptômes et quand ils ont commencé, et la liste de vos médicaments. Gardez près de vous vos lunettes, vos boîtes de médicaments et, si c'est utile, une mesure de tension ou un thermomètre. Un proche ou un aidant peut participer pour vous aider si vous le souhaitez."
          ],
          steps: ["Chargez votre appareil et vérifiez que l'application est installée.", "Testez la caméra et le micro.", "Faites l'enregistrement en ligne dans le portail s'il y en a un.", "Choisissez un endroit calme, privé et bien éclairé.", "Notez vos questions, vos symptômes et vos médicaments.", "Gardez vos boîtes de médicaments et vos lunettes près de vous."],
          words: [["Téléconsultation ou télémédecine", "voir votre équipe soignante par vidéo ou par téléphone plutôt qu'en personne."], ["Enregistrement en ligne", "remplir des formulaires dans le portail avant votre consultation."]],
          slides: [
            { title: "Ce qu'est une téléconsultation", bullets: ["Voir votre équipe soignante sur un écran", "Bien pour les suivis, bilans de traitement, soutien psychologique", "Certains problèmes demandent encore une visite en personne"] },
            { title: "La veille", bullets: ["Chargez votre appareil", "Testez la caméra et le micro", "Faites l'enregistrement en ligne"] },
            { title: "À avoir sous la main", bullets: ["Un endroit calme, privé et bien éclairé", "Questions, symptômes et liste de médicaments", "Boîtes de médicaments et lunettes à côté"] }
          ],
          tryIt: "Écrivez une liste pour votre prochaine consultation : trois questions, vos symptômes et quand ils ont commencé, et chaque médicament que vous prenez avec la dose. Gardez-la avec votre appareil.",
          youCanNow: "préparer votre appareil, votre espace et vos questions pour une téléconsultation."
        },
        {
          title: "Rejoindre et terminer une téléconsultation",
          minutes: 5,
          goal: "Rejoindre une téléconsultation à l'heure, parler clairement et connaître la suite.",
          text: [
            "Connectez-vous 10 à 15 minutes en avance. Ouvrez le rendez-vous dans votre portail et touchez le bouton pour commencer la téléconsultation, ou utilisez le lien envoyé par le cabinet. Autorisez la caméra et le micro quand on vous le demande. Vous attendrez peut-être dans une salle d'attente virtuelle jusqu'à l'arrivée du soignant.",
            "Pendant la consultation, regardez l'écran, parlez clairement et servez-vous de votre liste. Si le son ou l'image coupe, restez calme ; le soignant vous rappellera en général, alors gardez votre téléphone près de vous. Vous avez le droit de demander de répéter ou d'expliquer plus simplement.",
            "Avant de raccrocher, répétez le plan : « Donc je prends le nouveau médicament le soir, et je reviens dans deux semaines ? » Ensuite, regardez dans le portail le compte rendu de la consultation et les nouvelles ordonnances ou examens."
          ],
          steps: ["Connectez-vous 10 à 15 minutes en avance depuis le portail ou le lien du cabinet.", "Autorisez la caméra et le micro.", "Attendez dans la salle d'attente virtuelle.", "Servez-vous de votre liste ; demandez une explication simple si besoin.", "Répétez le plan avant de raccrocher.", "Lisez ensuite le compte rendu dans le portail."],
          words: [["Salle d'attente virtuelle", "un écran où vous attendez que le soignant arrive."], ["Soignant", "un médecin, un infirmier, un assistant médical ou un conseiller qui vous soigne."]],
          slides: [
            { title: "Rejoindre", bullets: ["10 à 15 minutes en avance", "Depuis le portail ou le lien du cabinet", "Autorisez la caméra et le micro"] },
            { title: "Pendant la consultation", bullets: ["Servez-vous de votre liste", "Demandez une explication simple", "Coupure ? Gardez votre téléphone près de vous"] },
            { title: "Avant de raccrocher", bullets: ["Répétez le plan", "Demandez quand revenir"] },
            { title: "Ensuite", bullets: ["Lisez le compte rendu dans le portail", "Vérifiez les nouvelles ordonnances et examens"] }
          ],
          tryIt: "Entraînement pour la tâche finale : dans votre portail, ouvrez un rendez-vous à venir ou passé et trouvez où apparaît le bouton ou le lien de la téléconsultation. Puis faites la tâche finale : un résultat, un message, les renouvellements et rendez-vous, et votre liste pour la consultation.",
          youCanNow: "rejoindre une téléconsultation à l'heure, parcourir votre liste, confirmer le plan et trouver le compte rendu ensuite."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Ordonnances, rendez-vous et téléconsultations",
        questions: [
          { q: "Quel est le meilleur moment pour demander un renouvellement ?", options: ["Après une semaine sans médicament", "Quelques jours avant d'être à court", "Seulement pendant une téléconsultation", "Jamais par le portail"], answer: 1, why: "Le cabinet et la pharmacie ont besoin de temps pour la traiter." },
          { q: "Le portail dit qu'un type de rendez-vous doit être pris par téléphone. Que faites-vous ?", options: ["Abandonner", "Envoyer dix messages", "Appeler le cabinet", "Réserver un autre médecin en ligne"], answer: 2, why: "Certaines consultations ne peuvent être prises que par téléphone." },
          { q: "Que devez-vous faire la veille d'une téléconsultation ?", options: ["Charger votre appareil et tester la caméra et le micro", "Supprimer l'application", "Changer votre mot de passe", "Rien"], answer: 0, why: "Tester à l'avance évite les problèmes au moment de la consultation." },
          { q: "Combien de temps en avance faut-il rejoindre une téléconsultation ?", options: ["30 minutes en retard", "Pile à l'heure", "Seulement quand on vous appelle", "10 à 15 minutes en avance"], answer: 3, why: "Arriver en avance laisse le temps pour l'accueil et les problèmes techniques." },
          { q: "Pourquoi répéter le plan avant de raccrocher ?", options: ["Pour allonger la consultation", "Pour être sûr d'avoir compris quoi faire ensuite", "C'est obligatoire pour être remboursé", "Pour tester le micro"], answer: 1, why: "Répéter le plan permet de repérer les malentendus." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Utiliser la téléconsultation et le portail patient",
    questions: [
      { q: "Un portail patient courant, utilisé par beaucoup de systèmes de santé américains, est :", options: ["MyChart", "TikTok", "DoorDash", "Netflix"], answer: 0, why: "MyChart est très utilisé ; votre cabinet peut en utiliser un autre." },
      { q: "Un code d'activation vient :", options: ["D'un ami sur un réseau social", "De votre cabinet", "D'une fenêtre publicitaire", "De n'importe quel site"], answer: 1, why: "Les cabinets donnent des codes d'activation pour relier votre compte." },
      { q: "Sur un ordinateur de bibliothèque, après avoir utilisé votre portail, vous devez :", options: ["Rester connecté", "Enregistrer votre mot de passe", "Vous déconnecter et fermer le navigateur", "Écrire votre mot de passe sur un papier"], answer: 2, why: "Cela empêche la personne suivante d'entrer dans votre dossier de santé." },
      { q: "Qu'est-ce qui protège le plus votre compte de portail ?", options: ["Un mot de passe court", "Partager votre mot de passe avec un ami", "Utiliser le même mot de passe partout", "La validation en deux étapes"], answer: 3, why: "La validation en deux étapes demande un code de votre téléphone." },
      { q: "Les valeurs de référence, c'est :", options: ["La plage habituelle des résultats chez les personnes en bonne santé", "L'adresse de votre cabinet", "Votre numéro d'assurance", "Une sorte de médicament"], answer: 0, why: "Les résultats sont comparés aux valeurs de référence." },
      { q: "Un résultat est signalé hors de la plage. Cela veut dire :", options: ["Vous devez aller aux urgences", "C'est toujours une maladie grave", "Ce n'est pas toujours un problème ; demandez à votre équipe soignante", "Le laboratoire s'est trompé"], answer: 2, why: "Les résultats signalés doivent être expliqués par votre équipe soignante." },
      { q: "Selon HealthIT.gov, la règle de confidentialité HIPAA aux États-Unis vous donne le droit de :", options: ["Recevoir des médicaments gratuits", "Choisir le salaire de votre médecin", "Voir votre dossier de santé et en obtenir une copie", "Ne payer aucune facture"], answer: 2, why: "Vous avez le droit de voir votre dossier et d'en obtenir une copie." },
      { q: "Aux États-Unis, un soignant peut-il refuser votre dossier parce que vous avez des factures médicales impayées ?", options: ["Oui, toujours", "Seulement le week-end", "Seulement pour les copies papier", "Non ; HealthIT.gov dit que vous pouvez l'obtenir même avec des factures impayées"], answer: 3, why: "Les factures impayées ne vous retirent pas le droit à votre dossier." },
      { q: "Les messages du portail sont faits pour :", options: ["Les urgences", "Les questions non urgentes", "Envoyer de l'argent", "Discuter avec des inconnus"], answer: 1, why: "La réponse peut prendre un jour ou plus." },
      { q: "Quel message de portail est le plus clair ?", options: ["« aide »", "« ? »", "« appelez-moi »", "« Depuis lundi, j'ai des vertiges après mon nouveau médicament du matin. Dois-je le prendre le soir ? »"], answer: 3, why: "Il dit quoi, depuis quand, et ce dont vous avez besoin." },
      { q: "Certains cabinets peuvent facturer à l'assurance :", options: ["La connexion", "La lecture des résultats", "Les messages qui demandent un avis médical", "Le changement de mot de passe"], answer: 2, why: "Demandez à votre cabinet si vous n'êtes pas sûr de la facturation des messages." },
      { q: "Où demande-t-on en général un renouvellement dans un portail ?", options: ["Dans la rubrique Médicaments", "Dans la page Paramètres", "Dans la corbeille des Messages", "Sur l'écran de connexion"], answer: 0, why: "Les boutons de renouvellement sont à côté de vos médicaments." },
      { q: "Une liste d'attente vous permet de :", options: ["Changer les notes de votre médecin", "Ne pas payer", "Voir les résultats d'autres patients", "Avoir un horaire plus tôt si quelqu'un annule"], answer: 3, why: "Les listes d'attente proposent les créneaux annulés." },
      { q: "Les téléconsultations conviennent bien pour :", options: ["Tous les problèmes, toujours", "Les os cassés qui demandent une radio", "Beaucoup de suivis, de bilans de traitement et de soutien psychologique", "Les urgences"], answer: 2, why: "Certains problèmes demandent encore des soins en personne." },
      { q: "Un enregistrement en ligne, c'est :", options: ["Un renouvellement", "Un chèque bancaire", "Un jeu vidéo", "Remplir des formulaires dans le portail avant votre consultation"], answer: 3, why: "Cela fait gagner du temps au début de la consultation." },
      { q: "Qu'avez-vous intérêt à préparer pour une téléconsultation ?", options: ["Vos questions et la liste de vos médicaments", "De la musique forte", "Un lieu public bruyant", "Rien"], answer: 0, why: "Une liste vous aide à bien profiter de la consultation." },
      { q: "Une salle d'attente virtuelle, c'est :", options: ["Une vraie salle du cabinet", "Une discussion avec d'autres patients", "Un écran où vous attendez que le soignant arrive", "Un type de facture"], answer: 2, why: "Vous y attendez jusqu'au début de la consultation." },
      { q: "L'image coupe pendant votre consultation. Que faites-vous ?", options: ["Renoncer à vous soigner", "Prendre un nouveau rendez-vous l'an prochain", "En parler sur les réseaux sociaux", "Rester calme et garder votre téléphone près de vous pour être rappelé"], answer: 3, why: "Les soignants rappellent souvent si la vidéo ne marche pas." },
      { q: "Après une téléconsultation, où vérifier le plan ?", options: ["Dans une publication sur un réseau social", "Dans le magasin d'applications", "Dans le compte rendu de consultation de votre portail", "Dans le SMS d'un inconnu"], answer: 2, why: "Le compte rendu donne le plan, les ordonnances et les examens." },
      { q: "À qui devez-vous poser les questions sur votre propre santé ?", options: ["À un site web au hasard", "Seulement à un outil d'IA", "Dans un commentaire sur un réseau social", "À votre médecin, votre infirmier ou votre pharmacien"], answer: 3, why: "Votre équipe soignante connaît vos antécédents de santé." }
    ]
  }
};
