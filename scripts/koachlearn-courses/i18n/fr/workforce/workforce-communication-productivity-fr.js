"use strict";

// Koach Learn course (French translation of workforce/workforce-communication-productivity.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "workforce-communication-productivity-fr",
  lang: "fr",
  translationOf: "workforce-communication-productivity",
  category: "Workforce Development",
  name: "Communication et productivité au travail",
  skills: "Écrire des messages de travail clairs, Faire une passation de poste ou de tâche, Demander de l'aide et donner des nouvelles, Classer une liste de tâches par priorité, Planifier sa semaine avec des blocs de temps, Utiliser l'IA comme une aide et non un remplaçant",
  outcome: "communiquer clairement et faire le bon travail à votre poste : écrire un message clair avec le point principal en premier, faire une passation complète, envoyer un court point d'avancement, classer une liste de tâches selon l'importance et l'urgence, et planifier une semaine avec des blocs de temps, en utilisant l'IA pour vous aider à rédiger et à organiser.",
  about: [
    "Ce cours s'adresse aux travailleurs et aux chercheurs d'emploi de tous les domaines : commerce, entrepôt, aide dans la santé, bureau, service client, métiers manuels. Une communication claire et une bonne gestion du temps font partie des qualités que les employeurs apprécient le plus, et elles aident dans tous les emplois.",
    "Vous vous exercerez à écrire des messages compris du premier coup, à passer le travail sans rien oublier, à tenir votre responsable informé, et à décider quoi faire en premier quand tout semble urgent. Un assistant d'IA vous aide à rédiger et à organiser ; c'est vous qui apportez les faits et le jugement.",
    "Chaque leçon dure environ cinq minutes, avec une tâche « Essayez maintenant ». Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Suivez les règles de votre lieu de travail sur les outils d'IA autorisés et gardez les informations confidentielles à l'écart."
  ],
  finalTask: "Réalisez un kit de communication et de productivité pour une semaine : un message de travail clair avec le point principal en premier, une passation de poste ou de tâche avec la liste de contrôle de passation, un point d'avancement au format Fait / Ensuite / Bloqué, une liste de tâches classée dans les quatre cases urgent/important, et un planning en blocs de temps pour la semaine prochaine. Utilisez l'IA pour rédiger au moins deux de ces éléments, et vérifiez chaque fait.",
  chapters: [
    {
      name: "Chapitre 1 : Communiquer clairement",
      lessons: [
        {
          title: "Le point principal d'abord : des messages clairs",
          minutes: 5,
          goal: "Écrire un message de travail avec le point principal en premier et une demande claire.",
          text: [
            "Les gens occupés lisent la première ligne et survolent le reste. Mettez le point principal ou la demande en premier, puis les détails, puis ce dont vous avez besoin et pour quand. Exemple : « Peux-tu me remplacer samedi de 8 h à 16 h ? J'ai une urgence familiale. Merci de répondre avant jeudi midi. »",
            "Restez court : un sujet par message, des phrases courtes, des puces pour les listes. Pour un e-mail, utilisez un objet clair : « Besoin d'un remplaçant : samedi 8 h-16 h ».",
            "Un assistant d'IA peut transformer des notes rapides en message clair : « Réécris ceci avec le point principal en premier, moins de 80 mots, poli et direct. » C'est vous qui vérifiez les faits, les noms et les heures."
          ],
          steps: ["Écrivez le point principal ou la demande en une phrase.", "Ajoutez seulement les détails utiles au lecteur.", "Dites ce dont vous avez besoin et pour quand.", "Utilisez un objet clair.", "Demandez à l'IA de resserrer le texte, puis vérifiez les faits."],
          words: [["Point principal d'abord", "mettre le message ou la demande la plus importante au début."], ["Objet", "le court titre d'un e-mail."]],
          slides: [
            { title: "Les lecteurs survolent", bullets: ["Le point principal ou la demande d'abord", "Puis les détails", "Puis ce dont vous avez besoin et pour quand"] },
            { title: "Restez court", bullets: ["Un sujet par message", "Phrases courtes et puces", "Objet clair : « Besoin d'un remplaçant : sam. 8 h-16 h »"] },
            { title: "L'IA peut resserrer le texte", bullets: ["« Point principal d'abord, moins de 80 mots »", "Vous vérifiez noms, dates et heures"] }
          ],
          tryIt: "Prenez un message que vous devez envoyer (ou un exemple, comme demander un changement d'horaire). Réécrivez-le avec le point principal en premier et une date limite, demandez à l'IA de le resserrer, et vérifiez chaque fait.",
          youCanNow: "écrire un court message de travail avec le point principal et la demande en premier."
        },
        {
          title: "Des passations qui n'oublient rien",
          minutes: 5,
          goal: "Faire une passation complète de poste ou de tâche avec une liste de contrôle simple.",
          text: [
            "Beaucoup de problèmes au travail arrivent lors des passations : fin de poste, collègue qui part en congé, tâche confiée à quelqu'un d'autre. Une courte liste de contrôle évite que des choses se perdent.",
            "Une bonne passation couvre : l'État (où en sont les choses), les Points ouverts (ce qui n'est pas fini), les Points de vigilance (risques ou problèmes), les Contacts (qui appeler) et les Prochaines étapes (ce que la personne suivante doit faire en premier).",
            "Vous pouvez dicter vos notes à votre téléphone ou les taper vite, puis demander à l'IA : « Transforme ces notes en passation avec les sections État, Points ouverts, Points de vigilance, Contacts, Prochaines étapes. » Laissez de côté les détails privés sur les clients, les patients ou les employés, sauf si vous utilisez un système de travail approuvé."
          ],
          steps: ["Écrivez ou dictez des notes rapides à la fin du poste ou de la tâche.", "Organisez-les en État, Points ouverts, Points de vigilance, Contacts, Prochaines étapes.", "Vérifiez que rien ne manque.", "Transmettez et répondez aux questions."],
          words: [["Passation", "le fait de transmettre un travail à une autre personne, avec les informations dont elle a besoin."], ["Point ouvert", "quelque chose qui n'est pas encore fini."]],
          slides: [
            { title: "Les problèmes arrivent aux passations", bullets: ["Fin de poste", "Congé ou vacances", "Une tâche confiée à quelqu'un d'autre"] },
            { title: "Liste de contrôle de passation", bullets: ["État et points ouverts", "Points de vigilance (risques)", "Contacts et prochaines étapes"] },
            { title: "L'IA organise vos notes", bullets: ["Dictez ou tapez des notes rapides", "Demandez les cinq sections", "Laissez les détails privés de côté"] }
          ],
          tryIt: "Écrivez une passation pour votre emploi actuel ou le dernier (ou un poste d'entrepôt fictif) avec les cinq sections. Utilisez l'IA pour organiser vos notes et vérifiez que rien ne manque.",
          youCanNow: "faire une passation complète pour que la personne suivante sache quoi faire."
        },
        {
          title: "Points d'avancement et demandes d'aide",
          minutes: 4,
          goal: "Envoyer un court point d'avancement et demander de l'aide tôt et clairement.",
          text: [
            "Les responsables aiment connaître l'avancement avant d'avoir à le demander. Un point en trois lignes suffit : Fait (ce que vous avez terminé), Ensuite (ce que vous faites ensuite), Bloqué (ce qui vous arrête et ce dont vous avez besoin).",
            "Demandez de l'aide tôt, pas à la date limite. Dites ce que vous avez essayé, ce dont vous avez besoin et pour quand : « J'ai redémarré le scanner et vérifié le câble. Il ne se connecte toujours pas. L'informatique peut-elle le regarder avant 14 h ? »",
            "L'IA peut vous aider à trouver les mots quand un message est délicat, comme demander plus de temps ou signaler une erreur à votre responsable. Restez honnête et bref."
          ],
          steps: ["Écrivez Fait, Ensuite, Bloqué.", "Pour chaque blocage, dites ce que vous avez essayé et ce dont vous avez besoin.", "Envoyez-le avant qu'on vous le demande.", "Demandez de l'aide tôt avec une date limite claire."],
          words: [["Point d'avancement", "un court compte rendu sur la progression."], ["Bloqué", "incapable de continuer tant qu'un problème n'est pas réglé ou que quelqu'un n'aide pas."]],
          slides: [
            { title: "Un point en trois lignes", bullets: ["Fait", "Ensuite", "Bloqué"] },
            { title: "Demandez de l'aide tôt", bullets: ["Ce que vous avez essayé", "Ce dont vous avez besoin", "Pour quand"] },
            { title: "Messages délicats", bullets: ["Demander plus de temps ; signaler une erreur", "L'IA aide à trouver les mots", "Restez honnête et bref"] }
          ],
          tryIt: "Écrivez un point Fait / Ensuite / Bloqué pour cette semaine (réel ou fictif). Ajoutez une demande d'aide claire avec ce que vous avez essayé et une date limite.",
          youCanNow: "envoyer des points d'avancement clairs et demander de l'aide tôt."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Communiquer clairement",
        questions: [
          { q: "Où va le point principal dans un message de travail ?", options: ["À la fin", "Au début", "Caché au milieu", "Nulle part"], answer: 1, why: "Les lecteurs occupés voient la première ligne." },
          { q: "Quel est l'objet le plus clair ?", options: ["« Trucs »", "« Salut »", "« Question »", "« Besoin d'un remplaçant : samedi 8 h-16 h »"], answer: 3, why: "Il dit le sujet et la demande." },
          { q: "Qu'est-ce qui a sa place dans une passation ?", options: ["Les points ouverts et les points de vigilance", "Votre mot de passe de réseau social", "Des ragots", "Rien"], answer: 0, why: "La personne suivante a besoin de l'état, des risques et des prochaines étapes." },
          { q: "Quelles sont les trois lignes d'un point d'avancement ?", options: ["Oui, Non, Peut-être", "Bonjour, Ça va, Au revoir", "Fait, Ensuite, Bloqué", "Début, Arrêt, Pause"], answer: 2, why: "Ce format montre la progression et les besoins." },
          { q: "Quand faut-il demander de l'aide ?", options: ["Jamais", "Seulement après la date limite", "Tôt, avec ce que vous avez essayé et une date limite", "Seulement en devinant"], answer: 2, why: "Demander tôt laisse le temps de régler le problème." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Faire le bon travail",
      lessons: [
        {
          title: "Classer sa liste de tâches : urgent ou important",
          minutes: 5,
          goal: "Classer les tâches dans quatre cases et décider quoi faire en premier.",
          text: [
            "Quand tout semble urgent, faites un tri. Dessinez quatre cases : Urgent et important (à faire maintenant), Important mais pas urgent (à planifier), Urgent mais pas important (à déléguer ou à faire vite), Ni l'un ni l'autre (à abandonner ou à faire plus tard). On l'appelle souvent la matrice d'Eisenhower.",
            "Les tâches importantes sont liées à vos objectifs ou aux missions principales de votre poste : la sécurité, les clients, les délais fixés par votre responsable. Les tâches urgentes ont une échéance proche ou quelqu'un qui attend.",
            "Vous pouvez coller votre liste de tâches (sans détails confidentiels) dans l'IA et lui demander de proposer des cases. Ensuite, décidez vous-même : vous savez ce que votre responsable attend. En cas de doute, demandez à votre responsable ce qui passe en premier."
          ],
          steps: ["Listez toutes vos tâches.", "Demandez-vous : est-ce important ? Est-ce urgent ?", "Mettez chaque tâche dans l'une des quatre cases.", "Faites la case 1, planifiez la case 2, déléguez ou expédiez la case 3, abandonnez la case 4.", "En cas de doute, demandez à votre responsable."],
          words: [["Urgent", "qui demande de l'attention bientôt, avec une échéance proche ou quelqu'un qui attend."], ["Important", "lié à vos missions principales ou à vos objectifs."], ["Matrice d'Eisenhower", "une méthode en quatre cases pour classer les tâches selon l'urgence et l'importance."]],
          slides: [
            { title: "Quatre cases", bullets: ["Urgent + important : maintenant", "Important, pas urgent : à planifier", "Urgent, pas important : déléguer ou vite", "Ni l'un ni l'autre : abandonner ou plus tard"] },
            { title: "Ce qui rend une tâche importante", bullets: ["La sécurité et les clients", "Les missions principales et les délais du responsable"] },
            { title: "L'IA propose, vous décidez", bullets: ["Collez votre liste sans détails confidentiels", "Vérifiez les cases vous-même", "Un doute ? Demandez à votre responsable"] }
          ],
          tryIt: "Listez au moins dix tâches pour cette semaine. Classez-les dans les quatre cases (demandez un premier essai à l'IA si vous voulez), puis choisissez vos trois priorités pour demain.",
          youCanNow: "classer une liste de tâches selon l'urgence et l'importance et choisir quoi faire en premier."
        },
        {
          title: "Planifier sa semaine avec des blocs de temps",
          minutes: 5,
          goal: "Planifier une semaine en réservant du temps pour le travail important.",
          text: [
            "Une liste de tâches dit quoi ; un agenda dit quand. Planifier par blocs de temps, c'est placer les tâches à des heures fixes dans votre agenda, par exemple « Mardi 9 h-10 h : finir le rapport d'inventaire ».",
            "Réservez d'abord les tâches importantes mais pas urgentes, parce qu'elles sont souvent repoussées. Ajoutez de courts blocs pour les e-mails et les messages au lieu de les regarder toute la journée. Laissez du temps libre pour les imprévus.",
            "Demandez à l'IA : « Voici mes horaires de travail et mes tâches avec leur durée estimée. Fais un planning en blocs de temps pour la semaine prochaine avec du temps de réserve. » Puis adaptez-le à votre vraie vie : trajets, famille, pauses."
          ],
          steps: ["Notez vos horaires fixes : postes, réunions, famille.", "Estimez la durée de chaque tâche.", "Réservez d'abord les tâches importantes.", "Ajoutez de courts blocs pour les messages et du temps de réserve.", "Demandez un brouillon à l'IA et adaptez-le."],
          words: [["Blocs de temps", "le fait de placer les tâches à des heures fixes dans votre agenda."], ["Temps de réserve", "du temps libre gardé pour les imprévus et les retards."]],
          slides: [
            { title: "La liste dit quoi ; l'agenda dit quand", bullets: ["« Mardi 9 h-10 h : finir le rapport d'inventaire »"] },
            { title: "Comment réserver", bullets: ["D'abord l'important pas urgent", "De courts blocs pour e-mails et messages", "Laissez du temps de réserve"] },
            { title: "L'IA prépare la semaine", bullets: ["Donnez horaires, tâches et durées", "Adaptez aux trajets, à la famille, aux pauses"] }
          ],
          tryIt: "Faites un planning en blocs de temps pour la semaine prochaine avec vos horaires de travail, trois tâches importantes, deux blocs pour les messages et du temps de réserve. Utilisez l'IA pour un premier brouillon si vous voulez.",
          youCanNow: "planifier une semaine en blocs de temps pour que le travail important soit fait."
        },
        {
          title: "L'IA comme aide, pas comme remplaçant",
          minutes: 5,
          goal: "Utiliser l'IA pour les bonnes parties de votre travail et garder votre jugement aux commandes.",
          text: [
            "L'IA aide surtout pour les premiers brouillons, l'organisation des notes, les résumés et les mots pour les messages difficiles. Elle ne connaît ni votre lieu de travail, ni vos collègues, ni ce que votre responsable voulait vraiment dire, et elle peut se tromper.",
            "Bonnes habitudes : donnez-lui vos notes, pas votre réflexion ; demandez un brouillon court ; vérifiez chaque fait ; faites en sorte que le texte vous ressemble ; suivez les règles d'IA de votre lieu de travail ; gardez les informations confidentielles et personnelles à l'écart.",
            "Suivez une seule chose : le temps gagné. Si un outil vous fait gagner 20 minutes par jour sur les messages, c'est du temps pour la partie humaine de votre travail, celle où vous faites la différence."
          ],
          steps: ["Utilisez l'IA pour les brouillons, l'organisation et les résumés.", "Vérifiez les faits et faites en sorte que le texte vous ressemble.", "Suivez les règles d'IA du lieu de travail.", "Notez le temps gagné chaque semaine."],
          words: [["Jugement", "votre capacité à bien décider à partir de ce que vous savez."]],
          slides: [
            { title: "L'IA est douée pour", bullets: ["Les premiers brouillons", "Organiser des notes et résumer", "Trouver les mots des messages difficiles"] },
            { title: "Bonnes habitudes", bullets: ["Vérifiez chaque fait", "Faites en sorte que le texte vous ressemble", "Suivez les règles ; pas de données privées"] },
            { title: "Temps gagné = temps humain", bullets: ["Notez les minutes gagnées", "Utilisez-les là où vous faites la différence"] }
          ],
          tryIt: "Tâche finale : construisez votre kit pour une semaine : un message avec le point principal d'abord, une passation, un point Fait/Ensuite/Bloqué, une liste de tâches en quatre cases et une semaine en blocs de temps. Utilisez l'IA pour en rédiger au moins deux et vérifiez chaque fait.",
          youCanNow: "communiquer clairement et gérer votre temps au travail avec l'IA comme aide."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Faire le bon travail",
        questions: [
          { q: "Une tâche est importante mais pas urgente. Que faites-vous ?", options: ["La planifier", "L'abandonner", "La faire immédiatement à chaque fois", "La donner à un client"], answer: 0, why: "Planifier protège le travail important." },
          { q: "Quelle tâche est urgente et importante ?", options: ["Changer le fond d'écran", "Ranger de vieux e-mails", "Lire une lettre d'information", "Un danger pour la sécurité au sol, maintenant"], answer: 3, why: "La sécurité immédiate est à la fois urgente et importante." },
          { q: "Qu'est-ce que la planification par blocs de temps ?", options: ["Bloquer des collègues", "Placer les tâches à des heures fixes dans votre agenda", "Éteindre son téléphone pour toujours", "Un sport"], answer: 1, why: "Elle fixe quand vous faites les tâches." },
          { q: "Pourquoi garder du temps de réserve ?", options: ["Pour les imprévus et les retards", "Pour faire la sieste", "Parce que l'IA le dit", "Ce n'est pas utile"], answer: 0, why: "Les imprévus arrivent toujours." },
          { q: "Le brouillon de l'IA dit que votre responsable veut le rapport vendredi, mais elle a dit mercredi. Que faites-vous ?", options: ["Envoyer les deux dates", "Faire confiance à l'IA", "Corriger en mercredi", "L'ignorer"], answer: 2, why: "C'est vous qui vérifiez ; l'IA ne sait pas ce qui a été dit." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Communication et productivité au travail",
    questions: [
      { q: "Pourquoi mettre le point principal en premier ?", options: ["C'est une loi", "Les gens occupés lisent la première ligne et survolent le reste", "Ça rallonge le message", "Ça cache le point principal"], answer: 1, why: "Les premières lignes sont lues." },
      { q: "Un bon message de travail contient :", options: ["Des ragots", "Tous les détails que vous connaissez", "Votre mot de passe", "Ce dont vous avez besoin et pour quand"], answer: 3, why: "Une demande claire avec une date limite fait agir." },
      { q: "Un message devrait traiter :", options: ["Tout le mois", "Dix sujets", "Aucun sujet", "Un seul sujet"], answer: 3, why: "Un seul sujet garde le message clair." },
      { q: "Laquelle est une section de passation ?", options: ["Plat préféré", "Points de vigilance", "Projets du week-end", "Liste de mots de passe"], answer: 1, why: "Les points de vigilance listent les risques." },
      { q: "Les passations comptent parce que :", options: ["Elles sont facultatives", "Elles sont amusantes", "Beaucoup de problèmes arrivent quand le travail change de mains", "Elles remplacent la formation"], answer: 2, why: "Les trous dans les passations causent des erreurs." },
      { q: "Quand l'IA organise vos notes de passation, laissez de côté :", options: ["Les détails privés sur les clients ou les patients, sauf avec un système approuvé", "Les points ouverts", "Les prochaines étapes", "Le rôle des contacts"], answer: 0, why: "Les données privées restent protégées." },
      { q: "« Bloqué » dans un point d'avancement veut dire :", options: ["Vous êtes en pause", "Vous avez fini", "Vous ne pouvez pas continuer tant qu'un problème n'est pas réglé", "Votre compte est verrouillé"], answer: 2, why: "Cela signale ce dont vous avez besoin." },
      { q: "Une bonne demande d'aide dit :", options: ["Ce que vous avez essayé, ce dont vous avez besoin et pour quand", "Seulement « Au secours ! »", "Rien", "À qui est la faute"], answer: 0, why: "Une demande claire obtient de l'aide plus vite." },
      { q: "Le meilleur moment pour envoyer un point d'avancement :", options: ["Jamais", "Avant que votre responsable ait à le demander", "Seulement après un problème", "Une fois par an"], answer: 1, why: "Les points envoyés d'avance créent la confiance." },
      { q: "Les tâches de la case 4 (ni urgentes ni importantes) doivent être :", options: ["Faites toutes les heures", "Faites en premier", "Confiées au PDG", "Abandonnées ou faites plus tard"], answer: 3, why: "Elles apportent peu." },
      { q: "Les tâches importantes sont liées à :", options: ["Vos missions principales, la sécurité et vos objectifs", "Vos séries préférées", "Des e-mails au hasard", "Rien"], answer: 0, why: "Important veut dire que cela compte pour votre poste." },
      { q: "Si vous ne savez pas quelle tâche passe en premier, vous devez :", options: ["Laisser l'IA décider seule", "Deviner", "Ne rien faire", "Demander à votre responsable"], answer: 3, why: "Votre responsable connaît les priorités." },
      { q: "Quelles tâches réserver en premier dans votre agenda ?", options: ["Les réseaux sociaux", "Les moins importantes", "Les importantes mais pas urgentes", "Aucune"], answer: 2, why: "Ce sont celles qu'on repousse." },
      { q: "Au lieu de regarder vos e-mails toute la journée, vous pouvez :", options: ["Ne jamais lire vos e-mails", "Prévoir de courts blocs pour les messages", "Les regarder chaque minute", "Tout transférer"], answer: 1, why: "Les blocs protègent le temps de concentration." },
      { q: "Après que l'IA a préparé votre planning de la semaine, vous :", options: ["L'ignorez", "Le suivez à la lettre", "Supprimez votre agenda", "L'adaptez à votre vraie vie"], answer: 3, why: "Vous connaissez vos trajets, votre famille et vos pauses." },
      { q: "L'IA est douée pour :", options: ["Connaître vos collègues", "Savoir ce que votre responsable voulait dire", "Les premiers brouillons et l'organisation des notes", "Avoir toujours raison"], answer: 2, why: "Rédiger et organiser sont ses points forts." },
      { q: "Avant d'envoyer un brouillon de l'IA, toujours :", options: ["Vérifier chaque fait", "Ajouter plus de texte d'IA", "Retirer votre nom", "L'envoyer sans le lire"], answer: 0, why: "L'IA peut se tromper." },
      { q: "Le temps gagné grâce à l'IA sert le mieux à :", options: ["Ne rien faire", "La partie humaine de votre travail", "Plus de temps d'écran", "Rien"], answer: 1, why: "C'est dans le travail humain que vous faites la différence." },
      { q: "Qu'est-ce qui respecte les règles d'IA du lieu de travail ?", options: ["Utiliser n'importe quelle application", "N'utiliser que des outils approuvés et garder les données confidentielles à l'écart", "Coller des données de clients", "Partager des mots de passe"], answer: 1, why: "Les règles vous protègent, vous et votre employeur." },
      { q: "La ligne « Ensuite » d'un point d'avancement dit à votre responsable :", options: ["Ce que vous faites ensuite", "Vos projets pour le déjeuner", "Vos prochaines vacances", "Rien"], answer: 0, why: "Elle montre votre plan." }
    ]
  }
};
