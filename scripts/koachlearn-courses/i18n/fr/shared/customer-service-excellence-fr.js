"use strict";

// Koach Learn course (French translation of shared/customer-service-excellence.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "customer-service-excellence-fr",
  lang: "fr",
  translationOf: "customer-service-excellence",
  category: "Re-Entry",
  name: "L'excellence du service client",
  skills: "Accueillir les clients, Écouter pour trouver le vrai besoin, Résoudre les problèmes, Calmer un client mécontent avec LAST, Servir par téléphone, chat et e-mail, Assurer le suivi",
  outcome: "servir un client du début à la fin, en personne, par téléphone, par chat ou par e-mail : l'accueillir chaleureusement, comprendre ce dont il a besoin, résoudre le problème ou le confier à la bonne personne, calmer un client mécontent avec la méthode LAST, et assurer le suivi pour qu'il revienne.",
  about: [
    "Presque chaque emploi a des clients : des acheteurs dans un magasin, des personnes qui mangent au restaurant, des appelants dans un centre d'appels, des visiteurs à l'accueil d'un bureau, les clients d'une petite entreprise. Un excellent service client est l'une des compétences les plus recherchées. Il vous aide à être embauché, à garder votre emploi et à progresser.",
    "Ce cours s'adresse aux personnes qui commencent leur premier emploi, aux jeunes, aux personnes qui reprennent le travail après la prison et aux propriétaires de petites entreprises qui servent eux-mêmes leurs clients. Les exemples viennent des magasins, des restaurants, des centres d'appels et des bureaux.",
    "Vous allez vous entraîner à accueillir, écouter, résoudre des problèmes, calmer des clients mécontents avec la méthode LAST (Listen = écouter, Apologize = s'excuser, Solve = résoudre, Thank = remercier), servir par téléphone, chat et e-mail, et assurer le suivi. Chaque leçon dure environ cinq minutes et se termine par un exercice. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Faites un jeu de rôle avec un ami qui joue un client mécontent (par exemple une mauvaise commande de repas, une livraison en retard ou une erreur de facture). Accueillez-le, utilisez LAST (écouter, s'excuser, résoudre, remercier), mettez-vous d'accord sur une solution, puis écrivez le court e-mail ou message de suivi que vous enverriez le lendemain.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des personnes qui commencent à travailler, des jeunes, des personnes qui reprennent le travail après la prison et des propriétaires de petites entreprises qui servent eux-mêmes leurs clients dans des magasins, des restaurants, des centres d'appels et des bureaux.",
    startingPoint: "Ils parlent avec des gens tous les jours et ont eux-mêmes été clients. Beaucoup n'ont pas appris à accueillir, à trouver le vrai besoin d'un client, à prendre un problème en charge, à calmer un client mécontent ni à rédiger un e-mail de service client.",
    gap: "Un excellent service client est l'une des compétences les plus demandées : il aide à être embauché, à garder son emploi et à évoluer, et il aide les petites entreprises à garder leurs clients. Les apprenants ont besoin d'une méthode simple et répétable pour servir les clients en personne, par téléphone, par chat et par e-mail, et pour assurer le suivi.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes",
      "Les exercices se font en jeu de rôle avec un ami ou un membre de la famille",
      "Sécurité : les menaces sont gérées par un responsable ou la sécurité, jamais seul",
      "Confidentialité : aucun vrai numéro de carte ni détail sur des clients dans les exercices ou les outils d'IA",
      "Temps : des leçons d'environ cinq minutes avec de courts exercices"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Quand un client arrive ou appelle", action: "l'accueillir chaleureusement en quelques secondes, en personne ou au téléphone", standard: "avec votre nom ou celui de l'entreprise et une proposition d'aide" },
    { id: "O2", condition: "À partir d'une demande floue d'un client", action: "poser des questions ouvertes et fermées et reformuler le vrai besoin du client", standard: "jusqu'à ce que le client confirme que vous avez bien compris" },
    { id: "O3", condition: "Face au problème d'un client que vous n'avez pas causé", action: "prendre le problème en charge et proposer une solution claire, des choix ou la bonne personne pour aider", standard: "avec une prochaine étape et un délai que vous tiendrez" },
    { id: "O4", condition: "Avec un client mécontent", action: "calmer le client avec LAST : écouter, s'excuser, résoudre, remercier", standard: "en utilisant les quatre étapes et en demandant de l'aide en cas de menaces" },
    { id: "O5", condition: "Par téléphone, chat ou e-mail", action: "écrire ou donner une réponse claire et aimable, avec la réponse d'abord et la prochaine étape", standard: "avec chaque fait vérifié et aucune information privée partagée" },
    { id: "O6", condition: "Après qu'un problème a été réglé", action: "écrire un message de suivi qui vérifie la solution et invite le client à revenir", standard: "envoyé au moment promis" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Les bases d'un excellent service",
      lessons: [
        {
          objectives: ["O1"],
          title: "Accueillir les clients et la première impression",
          minutes: 4,
          goal: "Accueillir un client chaleureusement en quelques secondes, en personne ou au téléphone.",
          text: [
            "Les clients décident ce qu'ils pensent d'une entreprise dans les premières secondes. Un accueil chaleureux leur montre qu'ils comptent. En personne, saluez les gens vite, même si vous êtes occupé : regardez-les dans les yeux, souriez et dites bonjour. Si vous êtes avec quelqu'un d'autre, un signe de tête et \"Je suis à vous dans un instant\" évitent que la personne suivante se sente ignorée.",
            "Utilisez une phrase simple et aimable : \"Bonjour, bienvenue ! Comment puis-je vous aider aujourd'hui ?\" Au restaurant : \"Bonsoir, bienvenue ! Une table pour combien de personnes ?\" À l'accueil d'un bureau : \"Bonjour, qui venez-vous voir ?\" Au téléphone, dites le nom de l'entreprise et votre nom : \"Merci d'appeler la Pharmacie Main Street, ici Dana. Comment puis-je vous aider ?\"",
            "Ayez l'air prêt : téléphone rangé, debout ou assis bien droit, et un espace propre et rangé. Utilisez le nom du client s'il vous le donne. Ce sont des petites choses, mais ensemble elles font une excellente première impression."
          ],
          steps: ["Remarquez vite le client.", "Regardez-le dans les yeux et souriez.", "Dites un bonjour aimable et proposez votre aide.", "Occupé ? Faites un signe de tête et dites \"Je suis à vous dans un instant\".", "Au téléphone : nom de l'entreprise, votre nom, proposez votre aide."],
          words: [["Première impression", "ce qu'une personne pense de vous ou d'une entreprise dans les premières secondes."], ["Accueil", "les premiers mots aimables que vous dites à un client."]],
          slides: [
            { title: "Les premières secondes comptent", bullets: ["Les clients décident vite ce qu'ils pensent", "Un accueil chaleureux montre qu'ils comptent"] },
            { title: "En personne", bullets: ["Un regard et un sourire", "\"Bonjour, bienvenue ! Comment puis-je vous aider aujourd'hui ?\"", "Occupé ? \"Je suis à vous dans un instant.\""] },
            { title: "Au téléphone", bullets: ["Nom de l'entreprise et votre nom", "\"Merci d'appeler la Pharmacie Main Street, ici Dana.\"", "\"Comment puis-je vous aider ?\""] },
            { title: "Ayez l'air prêt", bullets: ["Téléphone rangé", "Espace rangé", "Utilisez le nom du client"] }
          ],
          tryIt: "Écrivez trois phrases d'accueil : une pour un magasin ou un restaurant, une pour l'accueil d'un bureau et une pour répondre au téléphone dans une entreprise. Dites chacune à voix haute en souriant jusqu'à ce qu'elle sonne naturelle.",
          youCanNow: "accueillir les clients chaleureusement en personne et au téléphone.",
          quickCheck: [
            { objective: "O1", q: "Pourquoi un accueil chaleureux est-il important ?", options: ["Les clients jugent l'entreprise dans les premières secondes", "Il fait avancer la file plus lentement", "Il ne sert qu'aux clients habitués", "Il remplace la résolution du problème"], answer: 0, why: "La première impression influence ce que le client pense de toute sa visite." },
            { objective: "O1", q: "Le téléphone sonne pendant que vous rangez un rayon. Que dites-vous en décrochant ?", options: ["« Ouais ? »", "« Attendez. »", "« Merci de votre appel, ici Sam. Comment puis-je vous aider ? »", "Rien tant que la personne ne parle pas"], answer: 2, why: "Un bon accueil donne le nom de l'entreprise ou le vôtre et propose de l'aide." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Écouter pour trouver le vrai besoin",
          minutes: 5,
          goal: "Poser des questions et reformuler pour comprendre ce dont un client a vraiment besoin.",
          text: [
            "Les clients ne disent pas toujours exactement ce dont ils ont besoin. Un acheteur demande \"un chargeur de téléphone\", mais il lui en faut un qui va avec un ancien téléphone. Un appelant dit \"ma facture est fausse\", mais il veut en fait savoir pourquoi elle a augmenté. Bien écouter fait gagner du temps et évite les erreurs.",
            "Laissez le client finir sans l'interrompre. Ensuite, posez des questions ouvertes : \"Pour quoi allez-vous l'utiliser ?\" \"Quand avez-vous remarqué le problème pour la première fois ?\" Posez une question fermée pour confirmer un détail : \"C'est bien la commande de mardi ?\"",
            "Puis reformulez : \"Donc, il vous faut un chargeur pour un iPhone 8, et vous le voulez aujourd'hui. C'est bien ça ?\" Reformuler montre que vous avez écouté et permet de repérer les erreurs avant qu'elles arrivent. Au restaurant, relire la commande évite qu'un mauvais plat arrive à la table."
          ],
          steps: ["Laissez le client finir.", "Posez des questions ouvertes pour comprendre le besoin.", "Posez des questions fermées pour confirmer les détails.", "Reformulez ce que vous avez entendu.", "Demandez : \"C'est bien ça ?\""],
          words: [["Question ouverte", "une question qui demande plus qu'un oui ou un non."], ["Question fermée", "une question à laquelle on répond par oui, non ou un fait court."], ["Reformuler", "redire la demande du client pour vérifier que vous avez compris."]],
          slides: [
            { title: "Trouvez le vrai besoin", bullets: ["\"Un chargeur\" peut vouloir dire un chargeur pour un ancien téléphone", "\"Ma facture est fausse\" peut vouloir dire \"pourquoi a-t-elle augmenté ?\""] },
            { title: "Posez de bonnes questions", bullets: ["Ouverte : \"Pour quoi allez-vous l'utiliser ?\"", "Fermée : \"C'est bien la commande de mardi ?\""] },
            { title: "Reformulez", bullets: ["\"Donc, il vous faut... C'est bien ça ?\"", "Au restaurant : relisez la commande", "Repère les erreurs tôt"] }
          ],
          tryIt: "Demandez à un ami ou à un membre de votre famille de jouer un client avec une demande vague (\"Il me faut quelque chose pour ma cuisine\"). Utilisez deux questions ouvertes et une question fermée, puis reformulez son vrai besoin.",
          youCanNow: "utiliser des questions et la reformulation pour savoir ce dont un client a vraiment besoin.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qu'une question fermée ?", options: ["Une question qui invite à raconter une longue histoire", "Une question à réponse courte, comme oui, non ou une date", "Une question posée après la fermeture", "Une question à laquelle le client ne peut pas répondre"], answer: 1, why: "Les questions fermées confirment vite des détails." },
            { objective: "O2", q: "Un client dit : « Je cherche un cadeau pour mon père. » Que demandez-vous d'abord ?", options: ["« Combien d'argent avez-vous ? »", "« Vous voulez le plus cher ? »", "« Vous pouvez revenir plus tard ? »", "« Qu'est-ce que votre père aime faire ? »"], answer: 3, why: "Une question ouverte aide à trouver le vrai besoin." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Résoudre le problème",
          minutes: 5,
          goal: "Prendre en charge le problème d'un client et proposer une solution claire ou une prochaine étape.",
          text: [
            "Les clients se souviennent plus de la façon dont vous avez géré leur problème que du problème lui-même. Prenez-le en charge : dites \"Je vais vous aider avec ça\", même si quelqu'un d'autre l'a causé. Ne dites jamais \"Ce n'est pas mon service\" avant de partir.",
            "Sachez ce que vous pouvez faire. Apprenez les règles de votre lieu de travail (la politique) pour les retours, les remboursements, les échanges et les remises, et qui appeler quand une chose dépasse votre niveau. Proposez des choix quand c'est possible : \"Je peux vous le remplacer aujourd'hui ou vous rembourser sur votre carte. Que préférez-vous ?\" Si vous devez confier le client à quelqu'un d'autre, expliquez pourquoi, présentez cette personne et donnez-lui les détails, pour que le client n'ait pas à tout répéter.",
            "Ne promettez jamais ce que vous ne pouvez pas tenir. \"Je me renseigne et je vous rappelle avant 15 h\" vaut mieux que \"Ça va aller\" quand vous n'êtes pas sûr. Ensuite, tenez votre promesse."
          ],
          steps: ["Prenez-le en charge : \"Je vais vous aider avec ça.\"", "Vérifiez ce que votre politique permet.", "Proposez une ou deux options claires.", "Si cela dépasse votre niveau, transmettez avec tous les détails.", "Ne promettez que ce que vous pouvez tenir, avec une heure."],
          words: [["Politique", "les règles de l'entreprise, par exemple pour les retours ou les remboursements."], ["Faire remonter", "confier un problème à un responsable ou à quelqu'un qui peut faire plus."], ["Prise en charge", "traiter le problème du client comme le vôtre, à résoudre."]],
          slides: [
            { title: "Prenez-le en charge", bullets: ["\"Je vais vous aider avec ça.\"", "Jamais \"Ce n'est pas mon service\""] },
            { title: "Connaissez vos options", bullets: ["Apprenez les règles pour les retours, remboursements, échanges", "Proposez des choix : \"Remplacer aujourd'hui ou rembourser ?\""] },
            { title: "Passer le relais", bullets: ["Expliquez pourquoi et présentez la personne suivante", "Donnez-lui les détails", "Le client ne devrait pas tout répéter"] },
            { title: "Les promesses", bullets: ["Ne promettez que ce que vous pouvez tenir", "\"Je vous rappelle avant 15 h\", et faites-le"] }
          ],
          tryIt: "Choisissez un problème courant dans un emploi que vous avez ou que vous voulez (une mauvaise taille, un plat froid, un rendez-vous manqué, une question de facture). Écrivez ce que vous diriez pour le prendre en charge, deux options que vous pourriez proposer et à qui vous le transmettriez si besoin.",
          youCanNow: "prendre en charge le problème d'un client et proposer des options claires ou une prochaine étape.",
          quickCheck: [
            { objective: "O3", q: "Que veut dire prendre en charge le problème d'un client ?", options: ["Accuser un autre service", "Dire que ce n'est pas votre travail", "Considérer que c'est à vous d'aider à régler le problème", "Payer le problème de votre poche"], answer: 2, why: "Prendre en charge veut dire aider le client même si vous n'avez pas causé le problème." },
            { objective: "O3", q: "Un client a besoin d'une réponse que vous ne connaissez pas. Que dites-vous ?", options: ["« Je me renseigne et je vous rappelle avant 15 h. »", "« Je ne sais pas. »", "« Cherchez sur Internet. »", "« Quelqu'un vous appellera peut-être un jour. »"], answer: 0, why: "Une promesse claire avec un délai crée la confiance." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les bases d'un excellent service",
        questions: [
          { objective: "O1", q: "Vous aidez un client et un autre arrive. Que faites-vous ?", options: ["Vous l'ignorez jusqu'à ce que vous ayez fini", "Vous faites un signe de tête et dites \"Je suis à vous dans un instant\"", "Vous lui dites de revenir plus tard", "Vous laissez le premier client"], answer: 1, why: "Un petit signe et un mot évitent que le client suivant se sente ignoré." },
          { objective: "O1", q: "Quel est un bon accueil au téléphone ?", options: ["\"Ouais ?\"", "\"Vous voulez quoi ?\"", "\"Allô ?\" et attendre", "\"Merci d'appeler la Pharmacie Main Street, ici Dana. Comment puis-je vous aider ?\""], answer: 3, why: "Il donne le nom de l'entreprise, votre nom, et propose de l'aide." },
          { objective: "O2", q: "Pourquoi relire une commande au restaurant ?", options: ["Pour repérer les erreurs avant que le plat soit préparé", "Pour ralentir le client", "Parce que c'est amusant", "Pour montrer votre bonne mémoire"], answer: 0, why: "Reformuler permet de repérer les erreurs tôt." },
          { objective: "O2", q: "Laquelle est une question ouverte ?", options: ["\"C'est le bleu ?\"", "\"Vous l'avez acheté ici ?\"", "\"Pour quoi allez-vous l'utiliser ?\"", "\"Ce sera tout ?\""], answer: 2, why: "Elle demande plus qu'un oui ou un non." },
          { objective: "O3", q: "Le problème d'un client n'a pas été causé par vous. Que devriez-vous dire ?", options: ["\"Ce n'est pas mon service.\"", "\"Je vais vous aider avec ça.\"", "\"Ce n'est pas ma faute.\"", "Rien"], answer: 1, why: "Prendre le problème en charge crée la confiance." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Les moments difficiles et tous les canaux",
      lessons: [
        {
          objectives: ["O4"],
          title: "Les clients mécontents et la méthode LAST",
          minutes: 6,
          goal: "Calmer un client mécontent avec LAST : Listen (écouter), Apologize (s'excuser), Solve (résoudre), Thank (remercier).",
          text: [
            "Les clients mécontents sont en général fâchés contre la situation, pas contre vous. Rester calme, c'est votre travail et votre force. La méthode LAST vous donne quatre étapes simples (les lettres viennent de l'anglais).",
            "L pour Listen, écouter : laissez-le parler sans l'interrompre ; hochez la tête et reformulez : \"Votre commande est arrivée avec 40 minutes de retard et le repas était froid.\" A pour Apologize, s'excuser : excusez-vous sincèrement pour ce que cela lui a causé : \"Je suis vraiment désolé, ce n'est pas l'expérience que vous auriez dû avoir.\" Vous pouvez vous excuser sans accuser personne. S pour Solve, résoudre : proposez une solution dans le cadre de votre politique, ou faites venir un responsable : \"Je peux vous le refaire tout de suite, ou le retirer de l'addition.\" T pour Thank, remercier : remerciez-le de vous l'avoir dit : \"Merci de nous l'avoir signalé. Cela nous aide à corriger le problème.\"",
            "Gardez une voix basse et lente, ne vous disputez pas, ne le prenez pas personnellement, et utilisez son nom. Si un client devient menaçant ou insultant, vous n'avez pas à le supporter : appelez un responsable ou la sécurité et suivez les règles de sécurité de votre lieu de travail."
          ],
          steps: ["Écouter : laissez-le finir, puis reformulez.", "S'excuser sincèrement pour ce que cela lui a causé.", "Résoudre : proposez une solution ou faites venir un responsable.", "Remercier : merci de vous l'avoir dit.", "Menaces ou insultes : appelez un responsable ou la sécurité."],
          words: [["LAST", "Listen, Apologize, Solve, Thank (écouter, s'excuser, résoudre, remercier) : quatre étapes pour un client mécontent."], ["Sincère", "honnête et dit du fond du cœur."]],
          slides: [
            { title: "C'est la situation, pas vous", bullets: ["Restez calme : c'est votre travail et votre force", "Utilisez LAST"] },
            { title: "L et A", bullets: ["Listen (écouter) : laissez-le finir, reformulez", "Apologize (s'excuser) : \"Je suis vraiment désolé, ce n'est pas normal.\""] },
            { title: "S et T", bullets: ["Solve (résoudre) : \"Je peux le refaire ou le retirer de l'addition.\"", "Thank (remercier) : \"Merci de nous l'avoir signalé.\""] },
            { title: "Restez en sécurité", bullets: ["Voix basse et lente ; ne vous disputez pas", "Menaces ou insultes : appelez un responsable ou la sécurité"] }
          ],
          tryIt: "Écrivez un script LAST pour l'un de ces cas : un plat froid, un colis jamais arrivé ou un montant facturé en trop. Écrivez une phrase pour chaque lettre, puis dites tout le script à voix haute.",
          youCanNow: "calmer un client mécontent en écoutant, en vous excusant, en résolvant le problème et en remerciant.",
          quickCheck: [
            { objective: "O4", q: "Que veut dire le S de LAST ?", options: ["Smile (sourire)", "Solve (résoudre)", "Stop (arrêter)", "Say sorry again (s'excuser encore)"], answer: 1, why: "LAST veut dire Listen (écouter), Apologize (s'excuser), Solve (résoudre) et Thank (remercier)." },
            { objective: "O4", q: "Un client est mécontent parce que son colis n'est jamais arrivé. Que faites-vous d'abord ?", options: ["Proposer un remboursement avant qu'il ait fini de parler", "Lui dire que c'est la faute du livreur", "Le transférer tout de suite", "L'écouter jusqu'au bout et reformuler ce qui s'est passé"], answer: 3, why: "LAST commence par l'écoute pour que le client se sente entendu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Le service par téléphone, chat et e-mail",
          minutes: 5,
          goal: "Offrir un service clair et aimable par téléphone, par chat et par e-mail.",
          text: [
            "Téléphone : les clients ne voient pas votre visage, alors c'est votre voix qui fait le travail. Souriez en parlant ; cela change vraiment votre ton. Parlez clairement et, avant de mettre quelqu'un en attente, demandez : \"Puis-je vous mettre en attente un instant pendant que je vérifie ?\" et remerciez-le quand vous revenez. Si vous devez transférer l'appel, dites-lui vers qui et pourquoi.",
            "Chat : répondez vite, écrivez des messages courts et utilisez des mots aimables. Vérifiez avant de fermer : \"Puis-je vous aider pour autre chose ?\" E-mail : utilisez un objet clair, saluez la personne par son nom, répondez à la question dès les premières lignes, donnez la prochaine étape et signez avec votre nom. Relisez-le une fois avant de l'envoyer. Un assistant d'IA peut vous aider à écrire ou à améliorer une réponse, mais vérifiez chaque fait et n'y collez jamais les informations privées du client.",
            "Sur tous les canaux, protégez la vie privée. Suivez les étapes de votre entreprise pour vérifier à qui vous parlez, et ne demandez jamais un numéro de carte complet ou un mot de passe par chat ou par e-mail."
          ],
          steps: ["Téléphone : souriez, parlez clairement, demandez avant la mise en attente, remerciez ensuite.", "Transferts : dites vers qui et pourquoi.", "Chat : rapide, court, aimable ; demandez \"Autre chose ?\"", "E-mail : objet clair, nom, réponse d'abord, prochaine étape, votre nom.", "Protégez la vie privée : suivez les vérifications d'identité, pas de numéro de carte ni de mot de passe par chat ou e-mail."],
          words: [["Mise en attente", "mettre un appel en pause pendant que vous vérifiez quelque chose."], ["Transfert", "passer un appel à une autre personne ou à une autre équipe."], ["Canal", "un moyen par lequel les clients vous contactent : en personne, téléphone, chat, e-mail ou réseaux sociaux."]],
          slides: [
            { title: "Téléphone", bullets: ["Souriez : cela change votre voix", "\"Puis-je vous mettre en attente un instant ?\"", "Transferts : dites vers qui et pourquoi"] },
            { title: "Chat", bullets: ["Répondez vite, restez bref", "Des mots aimables", "\"Puis-je vous aider pour autre chose ?\""] },
            { title: "E-mail", bullets: ["Objet clair et son nom", "La réponse d'abord, puis la prochaine étape", "Signez de votre nom ; relisez avant d'envoyer"] },
            { title: "Tous les canaux", bullets: ["L'IA peut aider à écrire ; vous vérifiez les faits", "Suivez les vérifications d'identité", "Pas de numéro de carte ni de mot de passe par chat ou e-mail"] }
          ],
          tryIt: "Un client écrit : \"J'ai commandé une veste bleue et j'ai reçu une rouge. Que faire maintenant ?\" Écrivez une courte réponse avec un objet, une salutation, des excuses, une solution, la prochaine étape et votre nom.",
          youCanNow: "bien servir les clients par téléphone, chat et e-mail tout en protégeant leur vie privée.",
          quickCheck: [
            { objective: "O5", q: "Que doit-on mettre en premier dans le corps d'un e-mail de service client ?", options: ["La réponse à sa question", "Une longue histoire sur votre entreprise", "Votre intitulé de poste", "Une liste de règles"], answer: 0, why: "Les clients veulent d'abord la réponse, puis la prochaine étape." },
            { objective: "O5", q: "Vous utilisez un assistant d'IA pour rédiger une réponse de chat. Que faites-vous avant d'envoyer ?", options: ["L'envoyer tout de suite", "Ajouter le numéro de carte du client", "Vérifier chaque fait et retirer les informations privées", "La copier à tous les clients"], answer: 2, why: "Les brouillons de l'IA doivent être vérifiés et ne contenir aucune information privée." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Assurer le suivi et fidéliser",
          minutes: 5,
          goal: "Assurer le suivi après un problème et faire d'un client un client qui revient.",
          text: [
            "Un problème bien réglé peut rendre un client plus fidèle que si rien ne s'était mal passé. Le suivi, c'est la façon de finir le travail.",
            "Si vous avez promis un appel ou des nouvelles, faites-le à l'heure, même si la nouvelle est \"on y travaille encore\". Après une solution, recontactez le client quand c'est utile : \"Je voulais m'assurer que la nouvelle pièce est arrivée et qu'elle fonctionne.\" Prenez des notes simples dans votre système ou dans un carnet : nom, problème, ce que vous avez fait et la suite, pour que n'importe qui dans l'équipe puisse aider.",
            "De petites attentions créent la fidélité : se souvenir de la commande habituelle d'un habitué, remercier un client de longue date, ou prévenir un client quand l'article qu'il voulait est de nouveau en stock. Si vous avez votre propre entreprise, demandez un avis aux clients satisfaits, et voyez les plaintes comme des conseils gratuits sur ce qu'il faut améliorer."
          ],
          steps: ["Tenez à l'heure chaque promesse d'appel ou de nouvelles.", "Recontactez le client après une solution.", "Prenez des notes simples : nom, problème, action, prochaine étape.", "Souvenez-vous des habitués et remerciez-les.", "Servez-vous des plaintes pour vous améliorer."],
          words: [["Suivi", "recontacter un client pour vérifier ou lui donner des nouvelles."], ["Fidélité", "quand les clients reviennent et vous recommandent."]],
          slides: [
            { title: "Le suivi finit le travail", bullets: ["Un problème bien réglé crée la fidélité"] },
            { title: "Tenez vos promesses", bullets: ["Appel ou nouvelles à l'heure", "Même si c'est \"on y travaille encore\"", "Recontactez après une solution"] },
            { title: "Prenez des notes", bullets: ["Nom, problème, action, prochaine étape", "N'importe qui dans l'équipe peut aider"] },
            { title: "Fidélisez", bullets: ["Souvenez-vous des habitués", "Remerciez les clients de longue date", "Les plaintes sont des conseils gratuits"] }
          ],
          tryIt: "Tâche finale : faites un jeu de rôle avec un ami qui joue un client mécontent, en utilisant l'accueil et LAST, mettez-vous d'accord sur une solution, puis écrivez le message de suivi que vous enverriez le lendemain.",
          youCanNow: "assurer le suivi après un problème et fidéliser vos clients.",
          quickCheck: [
            { objective: "O6", q: "Pourquoi un problème bien réglé peut-il rendre un client plus fidèle ?", options: ["Il reçoit des cadeaux pour toujours", "Il voit que l'entreprise se soucie de lui et tient ses promesses", "Il oublie que le problème a eu lieu", "Il n'a pas d'autre choix"], answer: 1, why: "Bien gérer un problème montre qu'on peut faire confiance à l'entreprise." },
            { objective: "O6", q: "Hier, vous avez remplacé la commande erronée d'un client. Que faites-vous aujourd'hui ?", options: ["Rien ; c'est réglé", "Envoyer un bon de réduction sans message", "Lui demander de publier un avis tout de suite", "Envoyer un court message pour vérifier que tout est en ordre maintenant"], answer: 3, why: "Un suivi vérifie la solution et montre que vous vous souciez du client." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Les moments difficiles et tous les canaux",
        questions: [
          { objective: "O4", q: "Que veut dire LAST ?", options: ["Look, Ask, Sell, Talk (regarder, demander, vendre, parler)", "Leave, Argue, Stop, Try (partir, se disputer, arrêter, essayer)", "Listen, Apologize, Solve, Thank (écouter, s'excuser, résoudre, remercier)", "Learn, Answer, Smile, Tell (apprendre, répondre, sourire, raconter)"], answer: 2, why: "LAST, c'est Listen, Apologize, Solve, Thank : écouter, s'excuser, résoudre, remercier." },
          { objective: "O4", q: "Un client mécontent au restaurant dit que son plat est froid. Quelle est la première étape ?", options: ["Expliquer que la cuisine était débordée", "Écouter et reformuler ce qu'il a dit", "Offrir un bon de réduction avant qu'il ait fini", "Partir"], answer: 1, why: "Dans LAST, écouter vient en premier." },
          { objective: "O5", q: "Avant de mettre un appelant en attente, vous devez :", options: ["Simplement appuyer sur attente", "Raccrocher et rappeler", "Le transférer n'importe où", "Demander \"Puis-je vous mettre en attente un instant pendant que je vérifie ?\""], answer: 3, why: "Demander d'abord est poli et garde la confiance." },
          { objective: "O5", q: "Un client sur le chat vous propose son numéro de carte complet. Que faites-vous ?", options: ["Vous lui dites de ne pas le partager par chat et vous suivez les étapes sécurisées de votre entreprise", "Vous le copiez dans vos notes", "Vous le collez dans un outil d'IA", "Vous le lui relisez"], answer: 0, why: "Un numéro de carte ne doit jamais être partagé par chat ou par e-mail." },
          { objective: "O6", q: "Vous avez promis des nouvelles à un client pour vendredi, mais vous n'avez encore rien. Que faites-vous ?", options: ["Vous attendez d'avoir des nouvelles", "Vous le contactez vendredi pour dire \"on y travaille encore\"", "Vous l'ignorez", "Vous demandez à un collègue de faire semblant que c'est réglé"], answer: 1, why: "Tenir sa promesse à l'heure crée la confiance, même sans nouvelles." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'excellence du service client",
    questions: [
      { objective: "O1", q: "Pourquoi l'accueil est-il si important ?", options: ["Les clients jugent l'entreprise dans les premières secondes", "C'est la loi", "C'est ce qui prend le plus de temps", "Il remplace la résolution des problèmes"], answer: 0, why: "La première impression influence ce que ressentent les clients." },
      { objective: "O1", q: "Quel est un bon accueil à l'accueil d'un bureau ?", options: ["Continuer à taper sans rien dire", "\"Bonjour, qui venez-vous voir ?\"", "\"Quoi ?\"", "\"On est occupés.\""], answer: 1, why: "C'est aimable et cela va vers son besoin." },
      { objective: "O1", q: "Qu'est-ce qui montre que vous êtes prêt à servir ?", options: ["Faire défiler votre téléphone", "Manger au comptoir", "Téléphone rangé et espace rangé", "S'appuyer contre le mur"], answer: 2, why: "Avoir l'air prêt donne une bonne première impression." },
      { objective: "O2", q: "Un acheteur demande \"un chargeur\". Quelle est la meilleure étape suivante ?", options: ["Lui donner n'importe quel chargeur", "Dire que vous n'en avez pas", "Montrer le rayon du doigt", "Demander pour quel téléphone c'est"], answer: 3, why: "Une question permet de trouver le vrai besoin." },
      { objective: "O2", q: "\"Donc, il vous faut deux grandes pizzas livrées avant 18 h. C'est bien ça ?\" est un exemple de :", options: ["Reformulation", "Vente additionnelle", "Remontée à un responsable", "Accueil fermé"], answer: 0, why: "Elle confirme la commande avant d'agir." },
      { objective: "O2", q: "Une question fermée est utile pour :", options: ["Commencer une longue histoire", "Confirmer un détail, comme une date", "Calmer un client en colère", "Saluer quelqu'un"], answer: 1, why: "Les questions fermées confirment les faits rapidement." },
      { objective: "O3", q: "Quelle phrase montre que vous prenez le problème en charge ?", options: ["\"Ce n'est pas mon travail.\"", "\"Appelez quelqu'un d'autre.\"", "\"Je vais vous aider avec ça.\"", "\"Essayez le site web.\""], answer: 2, why: "Prendre le problème en charge rassure le client." },
      { objective: "O3", q: "Pourquoi proposer des choix comme \"le remplacer ou le rembourser\" ?", options: ["Pour l'embrouiller", "Cela donne au client un peu de contrôle", "Pour retarder la solution", "C'est toujours obligatoire"], answer: 1, why: "Les choix aident les clients à se sentir respectés." },
      { objective: "O3", q: "Quand vous confiez un client à un responsable, vous devez :", options: ["Lui faire tout réexpliquer", "Ne rien dire", "Partir sans expliquer", "Expliquer pourquoi, les présenter et partager les détails"], answer: 3, why: "Un passage de relais soigné évite au client de tout répéter." },
      { objective: "O3", q: "Quelle promesse est la meilleure quand vous n'êtes pas sûr de la réponse ?", options: ["\"Je me renseigne et je vous rappelle avant 15 h.\"", "\"Ça ira forcément.\"", "\"C'est gratuit, ne vous inquiétez pas.\"", "\"Personne ne sait.\""], answer: 0, why: "Ne promettez que ce que vous pouvez tenir, avec une heure." },
      { objective: "O4", q: "Dans LAST, le A veut dire :", options: ["Argue (se disputer)", "Apologize (s'excuser)", "Ask for ID (demander une pièce d'identité)", "Agree (être d'accord avec tout)"], answer: 1, why: "Des excuses sincères aident à calmer le client." },
      { objective: "O4", q: "Pouvez-vous vous excuser sans accuser personne ?", options: ["Non, vous devez dire qui l'a causé", "Seuls les responsables peuvent s'excuser", "Oui : \"Je suis désolé que cela vous soit arrivé.\"", "S'excuser n'est jamais permis"], answer: 2, why: "Des excuses sincères portent sur l'expérience du client." },
      { objective: "O4", q: "Un client mécontent commence à faire des menaces. Que devez-vous faire ?", options: ["Lui répondre sur le même ton", "L'ignorer et continuer à servir", "Le menacer", "Appeler un responsable ou la sécurité et suivre les règles de sécurité"], answer: 3, why: "Votre sécurité passe en premier." },
      { objective: "O4", q: "Dans LAST, le T veut dire :", options: ["Thank : le remercier de vous l'avoir dit", "Tell : lui dire qu'il a tort", "Transfer : transférer l'appel", "Take a break : faire une pause"], answer: 0, why: "Remercier permet de finir sur une note positive." },
      { objective: "O5", q: "Pourquoi sourire au téléphone ?", options: ["Le client peut vous voir", "Cela change le ton de votre voix", "C'est une règle dans toutes les entreprises", "Cela raccourcit les appels"], answer: 1, why: "Un sourire rend votre voix plus chaleureuse." },
      { objective: "O5", q: "Qu'est-ce qui a sa place dans un bon e-mail à un client ?", options: ["Pas d'objet", "Une longue histoire avant la réponse", "Un objet clair, son nom, la réponse d'abord et la prochaine étape", "Tout en majuscules"], answer: 2, why: "Une structure claire rend l'e-mail facile à suivre." },
      { objective: "O5", q: "Si vous utilisez un assistant d'IA pour écrire une réponse, vous devez :", options: ["Y coller le numéro de carte du client", "L'envoyer sans la lire", "La laisser promettre des remboursements", "Vérifier chaque fait et laisser de côté les informations privées"], answer: 3, why: "Vous restez responsable des faits et de la vie privée." },
      { objective: "O6", q: "Pourquoi prendre des notes sur chaque problème client ?", options: ["Pour que n'importe qui dans l'équipe puisse aider la prochaine fois", "Pour faire des commérages", "Pour ralentir les choses", "Les notes ne servent à rien"], answer: 0, why: "Les notes gardent un service régulier." },
      { objective: "O6", q: "Un problème bien réglé peut rendre un client :", options: ["Décidé à ne jamais revenir", "Plus fidèle qu'avant", "Plus en colère", "Oublieux de votre entreprise"], answer: 1, why: "Bien réparer une erreur crée la confiance et la fidélité." },
      { objective: "O6", q: "Pour le propriétaire d'une petite entreprise, il vaut mieux voir les plaintes comme :", options: ["Des attaques à ignorer", "Des raisons de se disputer", "Des conseils gratuits sur ce qu'il faut améliorer", "Quelque chose à effacer"], answer: 2, why: "Les plaintes montrent ce qu'il faut améliorer." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      3,
      5,
      7,
      10,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Accueil",
        objective: "O1",
        notYet: "Pas d'accueil, ou un accueil froid ou pressé.",
        meets: "Un accueil chaleureux en quelques secondes avec un nom et une proposition d'aide.",
        exceeds: "L'accueil convient au lieu et sonne naturel."
      },
      {
        name: "Écouter et s'excuser",
        objective: "O4",
        notYet: "A coupé la parole, s'est disputé ou a accusé.",
        meets: "A écouté jusqu'au bout, reformulé le problème et s'est excusé sans accuser.",
        exceeds: "A nommé ce que ressentait le client et est resté calme tout du long."
      },
      {
        name: "Résoudre",
        objective: "O3",
        notYet: "Pas de solution ni de prochaine étape claires.",
        meets: "A pris le problème en charge et convenu d'une solution ou d'une prochaine étape claire.",
        exceeds: "A proposé des choix et donné un délai pour chaque promesse."
      },
      {
        name: "Remercier",
        objective: "O4",
        notYet: "A fini sans remercier le client.",
        meets: "A remercié le client d'avoir signalé le problème.",
        exceeds: "A conclu en vérifiant s'il fallait autre chose."
      },
      {
        name: "Message de suivi",
        objective: "O6",
        notYet: "Pas de suivi, ou un suivi sans but clair.",
        meets: "Un court message le lendemain qui vérifie la solution et invite le client à revenir.",
        exceeds: "Personnel, précis et sans fautes."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui obtiennent ou gardent un emploi en contact avec la clientèle dans les 90 jours (questionnaire de suivi)",
      "Propriétaires de petites entreprises qui signalent moins de plaintes ou plus de clients qui reviennent",
      "Apprenants qui disent avoir utilisé LAST avec un vrai client dans les 30 jours",
      "Apprenants qui commencent un autre cours de carrière Koach Learn dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un partenaire pour le jeu de rôle (ami, membre de la famille ou camarade)",
      "Du papier et un stylo ou un téléphone pour les phrases types et le message de suivi",
      "Environ 60 minutes au total"
    ],
    facilitatorNotes: [
      "Faites les jeux de rôle par deux et échangez les rôles pour que chacun joue une fois le client mécontent.",
      "Utilisez des exemples tirés des emplois locaux que visent les apprenants : magasins, restaurants, centres d'appels et accueils.",
      "Expliquez que les menaces sont gérées par un responsable ou la sécurité ; les apprenants ne les gèrent jamais seuls.",
      "Utilisez seulement des commandes et des comptes inventés ; aucun vrai numéro de carte pendant les exercices.",
      "Notez le jeu de rôle final avec la grille et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
