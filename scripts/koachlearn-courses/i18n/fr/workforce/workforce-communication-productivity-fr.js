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
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des travailleurs et des demandeurs d'emploi de tous les domaines : commerce, entrepôt, aide en santé, bureau, service client et métiers manuels.",
    startingPoint: "Ils envoient des SMS et des e-mails et tiennent une forme de liste de tâches. Beaucoup écrivent des messages où le point principal est noyé, font des passations incomplètes et organisent leur semaine autour de ce qui est urgent. Certains ont essayé un assistant d'IA.",
    gap: "Communiquer clairement et gérer son temps font partie des compétences que les employeurs apprécient le plus, et les passations ratées et les messages flous causent des erreurs. Les apprenants ont besoin de formats simples et réutilisables pour les messages, les passations et les points d'avancement, d'une façon de choisir ce qui compte et d'un plan pour la semaine, en utilisant l'IA pour rédiger tout en gardant leur propre jugement aux commandes.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes",
      "Appareils : un smartphone ou un ordinateur ; l'agenda du téléphone ou un agenda papier",
      "Vie privée et règles : aucun détail privé sur un client ou un patient dans les outils d'IA, sauf si le lieu de travail a approuvé le système ; les règles d'IA du lieu de travail passent en premier",
      "Les travailleurs postés contrôlent peu leurs horaires : les plans s'organisent autour des postes fixes",
      "Temps : des leçons d'environ 5 minutes qui s'intègrent dans une journée de travail"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pour un message à envoyer au travail", action: "écrire le message avec le point principal en premier et une demande claire avec une date limite", standard: "sur un seul sujet, avec chaque fait vérifié" },
    { id: "O2", condition: "À la fin d'un poste ou d'une tâche", action: "faire une passation complète avec la liste de contrôle en cinq sections", standard: "avec les points ouverts et les points de vigilance, et aucun détail privé dans des outils non approuvés" },
    { id: "O3", condition: "Chaque semaine, ou quand vous êtes bloqué", action: "écrire un point d'avancement Fait / Ensuite / Bloqué et demander de l'aide tôt", standard: "en disant ce que vous avez essayé, ce dont vous avez besoin et pour quand" },
    { id: "O4", condition: "À partir d'au moins dix tâches", action: "les classer dans les quatre cases urgent et important et choisir vos trois priorités", standard: "en demandant à votre responsable quand vous ne savez pas quoi faire en premier" },
    { id: "O5", condition: "Pour la semaine prochaine", action: "créer un planning en blocs de temps avec vos postes, vos tâches importantes, des moments pour les messages et du temps de réserve", standard: "adapté à votre vraie vie" },
    { id: "O6", condition: "Quand vous utilisez l'IA pour vous aider dans votre travail", action: "choisir les parties que l'IA rédige et vérifier chaque fait avant d'envoyer", standard: "en n'utilisant que des outils approuvés et en gardant les données confidentielles à l'écart" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Communiquer clairement",
      lessons: [
        {
          objectives: ["O1"],
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
          youCanNow: "écrire un court message de travail avec le point principal et la demande en premier.",
          quickCheck: [
            { objective: "O1", q: "Pourquoi mettre le point principal en premier dans un message de travail ?", options: ["Cela rend le message plus long", "Cela paraît plus poli", "Les gens occupés lisent la première ligne et survolent le reste", "C'est une règle légale"], answer: 2, why: "Le lecteur qui ne voit que la première ligne comprend quand même ce dont vous avez besoin." },
            { objective: "O1", q: "Vous avez besoin de votre vendredi. Quel message envoyez-vous ?", options: ["« Puis-je prendre mon vendredi pour un rendez-vous médical ? Merci de me répondre d'ici mercredi. »", "« Bonjour, j'espère que vous allez bien, cette semaine a été chargée et... »", "« Vendredi ? »", "Un message avec trois demandes différentes"], answer: 0, why: "Il met la demande en premier, donne une raison et une date limite, et ne traite qu'un sujet." }
          ]
        },
        {
          objectives: ["O2"],
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
          youCanNow: "faire une passation complète pour que la personne suivante sache quoi faire.",
          quickCheck: [
            { objective: "O2", q: "Pourquoi les passations sont-elles importantes ?", options: ["Elles allongent les postes", "Elles ne concernent que les responsables", "Elles remplacent la formation", "Beaucoup de problèmes arrivent quand le travail change de mains"], answer: 3, why: "Des informations se perdent quand le travail change de mains : une liste de contrôle garde la passation complète." },
            { objective: "O2", q: "Vous faites la passation de votre poste et une palette penche dangereusement. Où la mentionnez-vous ?", options: ["Nulle part ; la personne suivante la verra", "Dans les points de vigilance de votre passation", "Dans un SMS à un ami", "Seulement dans votre tête"], answer: 1, why: "Les problèmes de sécurité et les choses à surveiller vont dans la passation pour que la personne suivante agisse." }
          ]
        },
        {
          objectives: ["O3"],
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
          youCanNow: "envoyer des points d'avancement clairs et demander de l'aide tôt.",
          quickCheck: [
            { objective: "O3", q: "Que veut dire « Bloqué » dans un point d'avancement ?", options: ["Vous ne pouvez pas continuer tant que quelque chose n'est pas réglé", "Vous avez fini la tâche", "Vous êtes en pause", "Vous avez bloqué l'e-mail d'un collègue"], answer: 0, why: "Bloqué dit à votre responsable ce qui vous arrête pour qu'il puisse aider." },
            { objective: "O3", q: "Vous êtes bloqué sur une tâche depuis un jour et elle est due demain. Que faites-vous ?", options: ["Continuer seul sans rien dire", "Attendre après la date limite", "Demander de l'aide maintenant, en disant ce que vous avez essayé, ce dont vous avez besoin et pour quand", "Sauter la tâche"], answer: 2, why: "Demander tôt avec des détails laisse aux autres le temps d'aider avant la date limite." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Communiquer clairement",
        questions: [
          { objective: "O1", q: "Où va le point principal dans un message de travail ?", options: ["À la fin", "Au début", "Caché au milieu", "Nulle part"], answer: 1, why: "Les lecteurs occupés voient la première ligne." },
          { objective: "O1", q: "Quel est l'objet le plus clair ?", options: ["« Trucs »", "« Salut »", "« Question »", "« Besoin d'un remplaçant : samedi 8 h-16 h »"], answer: 3, why: "Il dit le sujet et la demande." },
          { objective: "O2", q: "Qu'est-ce qui a sa place dans une passation ?", options: ["Les points ouverts et les points de vigilance", "Votre mot de passe de réseau social", "Des ragots", "Rien"], answer: 0, why: "La personne suivante a besoin de l'état, des risques et des prochaines étapes." },
          { objective: "O3", q: "Quelles sont les trois lignes d'un point d'avancement ?", options: ["Oui, Non, Peut-être", "Bonjour, Ça va, Au revoir", "Fait, Ensuite, Bloqué", "Début, Arrêt, Pause"], answer: 2, why: "Ce format montre la progression et les besoins." },
          { objective: "O3", q: "Quand faut-il demander de l'aide ?", options: ["Jamais", "Seulement après la date limite", "Tôt, avec ce que vous avez essayé et une date limite", "Seulement en devinant"], answer: 2, why: "Demander tôt laisse le temps de régler le problème." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Faire le bon travail",
      lessons: [
        {
          objectives: ["O4"],
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
          youCanNow: "classer une liste de tâches selon l'urgence et l'importance et choisir quoi faire en premier.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qui rend une tâche importante ?", options: ["Quelqu'un l'a demandée fort", "Elle est liée à vos missions principales, à la sécurité ou à vos objectifs", "C'est l'e-mail le plus récent", "C'est la plus facile"], answer: 1, why: "Les tâches importantes sont liées à vos missions principales, à la sécurité et à vos objectifs." },
            { objective: "O4", q: "Une tâche n'est ni urgente ni importante. Qu'en faites-vous ?", options: ["La faire en premier", "La prévoir pour ce matin", "Demander à un collègue de la faire tout de suite", "L'abandonner ou la faire plus tard"], answer: 3, why: "Les tâches de la case 4 sont abandonnées ou faites plus tard, pour que le temps aille à ce qui compte." }
          ]
        },
        {
          objectives: ["O5"],
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
          youCanNow: "planifier une semaine en blocs de temps pour que le travail important soit fait.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce que le temps de réserve ?", options: ["Du temps pour consulter les réseaux sociaux", "Du temps en plus pour les réunions", "Du temps libre dans votre plan pour les imprévus et les retards", "Des heures supplémentaires"], answer: 2, why: "Le temps de réserve évite qu'un imprévu ne détruise tout le plan." },
            { objective: "O5", q: "Le planning de la semaine fait par l'IA place une tâche pendant votre poste du mardi. Que faites-vous ?", options: ["La déplacer à un moment qui convient à votre vrai emploi du temps", "Suivre quand même le plan de l'IA", "Sauter votre poste", "Supprimer le plan"], answer: 0, why: "L'IA rédige le plan, mais c'est vous qui l'adaptez à votre vraie vie." }
          ]
        },
        {
          objectives: ["O6"],
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
          youCanNow: "communiquer clairement et gérer votre temps au travail avec l'IA comme aide.",
          quickCheck: [
            { objective: "O6", q: "Pour quelle partie de votre travail l'IA est-elle utile ?", options: ["Décider de ce qui compte le plus", "Réconforter un client mécontent", "Connaître la vraie date limite de votre responsable", "Les premiers brouillons et l'organisation des notes"], answer: 3, why: "L'IA aide pour les brouillons et l'organisation ; le jugement et le travail avec les gens restent à vous." },
            { objective: "O6", q: "Vous voulez que l'IA mette au propre des notes qui contiennent le nom d'un patient. Que faites-vous ?", options: ["Les coller dans n'importe quelle IA gratuite", "Utiliser seulement un outil approuvé, ou enlever d'abord les détails privés", "Publier les notes en ligne", "Les envoyer par e-mail à un ami pour qu'il les corrige"], answer: 1, why: "Les règles du lieu de travail passent en premier : seulement des outils approuvés, et les données confidentielles restent à l'écart." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Faire le bon travail",
        questions: [
          { objective: "O4", q: "Une tâche est importante mais pas urgente. Que faites-vous ?", options: ["La planifier", "L'abandonner", "La faire immédiatement à chaque fois", "La donner à un client"], answer: 0, why: "Planifier protège le travail important." },
          { objective: "O4", q: "Quelle tâche est urgente et importante ?", options: ["Changer le fond d'écran", "Ranger de vieux e-mails", "Lire une lettre d'information", "Un danger pour la sécurité au sol, maintenant"], answer: 3, why: "La sécurité immédiate est à la fois urgente et importante." },
          { objective: "O5", q: "Qu'est-ce que la planification par blocs de temps ?", options: ["Bloquer des collègues", "Placer les tâches à des heures fixes dans votre agenda", "Éteindre son téléphone pour toujours", "Un sport"], answer: 1, why: "Elle fixe quand vous faites les tâches." },
          { objective: "O5", q: "Pourquoi garder du temps de réserve ?", options: ["Pour les imprévus et les retards", "Pour faire la sieste", "Parce que l'IA le dit", "Ce n'est pas utile"], answer: 0, why: "Les imprévus arrivent toujours." },
          { objective: "O6", q: "Le brouillon de l'IA dit que votre responsable veut le rapport vendredi, mais elle a dit mercredi. Que faites-vous ?", options: ["Envoyer les deux dates", "Faire confiance à l'IA", "Corriger en mercredi", "L'ignorer"], answer: 2, why: "C'est vous qui vérifiez ; l'IA ne sait pas ce qui a été dit." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Communication et productivité au travail",
    questions: [
      { objective: "O1", q: "Pourquoi mettre le point principal en premier ?", options: ["C'est une loi", "Les gens occupés lisent la première ligne et survolent le reste", "Ça rallonge le message", "Ça cache le point principal"], answer: 1, why: "Les premières lignes sont lues." },
      { objective: "O1", q: "Un bon message de travail contient :", options: ["Des ragots", "Tous les détails que vous connaissez", "Votre mot de passe", "Ce dont vous avez besoin et pour quand"], answer: 3, why: "Une demande claire avec une date limite fait agir." },
      { objective: "O1", q: "Un message devrait traiter :", options: ["Tout le mois", "Dix sujets", "Aucun sujet", "Un seul sujet"], answer: 3, why: "Un seul sujet garde le message clair." },
      { objective: "O2", q: "Laquelle est une section de passation ?", options: ["Plat préféré", "Points de vigilance", "Projets du week-end", "Liste de mots de passe"], answer: 1, why: "Les points de vigilance listent les risques." },
      { objective: "O2", q: "Les passations comptent parce que :", options: ["Elles sont facultatives", "Elles sont amusantes", "Beaucoup de problèmes arrivent quand le travail change de mains", "Elles remplacent la formation"], answer: 2, why: "Les trous dans les passations causent des erreurs." },
      { objective: "O2", q: "Quand l'IA organise vos notes de passation, laissez de côté :", options: ["Les détails privés sur les clients ou les patients, sauf avec un système approuvé", "Les points ouverts", "Les prochaines étapes", "Le rôle des contacts"], answer: 0, why: "Les données privées restent protégées." },
      { objective: "O3", q: "« Bloqué » dans un point d'avancement veut dire :", options: ["Vous êtes en pause", "Vous avez fini", "Vous ne pouvez pas continuer tant qu'un problème n'est pas réglé", "Votre compte est verrouillé"], answer: 2, why: "Cela signale ce dont vous avez besoin." },
      { objective: "O3", q: "Une bonne demande d'aide dit :", options: ["Ce que vous avez essayé, ce dont vous avez besoin et pour quand", "Seulement « Au secours ! »", "Rien", "À qui est la faute"], answer: 0, why: "Une demande claire obtient de l'aide plus vite." },
      { objective: "O3", q: "Le meilleur moment pour envoyer un point d'avancement :", options: ["Jamais", "Avant que votre responsable ait à le demander", "Seulement après un problème", "Une fois par an"], answer: 1, why: "Les points envoyés d'avance créent la confiance." },
      { objective: "O4", q: "Les tâches de la case 4 (ni urgentes ni importantes) doivent être :", options: ["Faites toutes les heures", "Faites en premier", "Confiées au PDG", "Abandonnées ou faites plus tard"], answer: 3, why: "Elles apportent peu." },
      { objective: "O4", q: "Les tâches importantes sont liées à :", options: ["Vos missions principales, la sécurité et vos objectifs", "Vos séries préférées", "Des e-mails au hasard", "Rien"], answer: 0, why: "Important veut dire que cela compte pour votre poste." },
      { objective: "O4", q: "Si vous ne savez pas quelle tâche passe en premier, vous devez :", options: ["Laisser l'IA décider seule", "Deviner", "Ne rien faire", "Demander à votre responsable"], answer: 3, why: "Votre responsable connaît les priorités." },
      { objective: "O5", q: "Quelles tâches réserver en premier dans votre agenda ?", options: ["Les réseaux sociaux", "Les moins importantes", "Les importantes mais pas urgentes", "Aucune"], answer: 2, why: "Ce sont celles qu'on repousse." },
      { objective: "O5", q: "Au lieu de regarder vos e-mails toute la journée, vous pouvez :", options: ["Ne jamais lire vos e-mails", "Prévoir de courts blocs pour les messages", "Les regarder chaque minute", "Tout transférer"], answer: 1, why: "Les blocs protègent le temps de concentration." },
      { objective: "O5", q: "Après que l'IA a préparé votre planning de la semaine, vous :", options: ["L'ignorez", "Le suivez à la lettre", "Supprimez votre agenda", "L'adaptez à votre vraie vie"], answer: 3, why: "Vous connaissez vos trajets, votre famille et vos pauses." },
      { objective: "O6", q: "L'IA est douée pour :", options: ["Connaître vos collègues", "Savoir ce que votre responsable voulait dire", "Les premiers brouillons et l'organisation des notes", "Avoir toujours raison"], answer: 2, why: "Rédiger et organiser sont ses points forts." },
      { objective: "O6", q: "Avant d'envoyer un brouillon de l'IA, toujours :", options: ["Vérifier chaque fait", "Ajouter plus de texte d'IA", "Retirer votre nom", "L'envoyer sans le lire"], answer: 0, why: "L'IA peut se tromper." },
      { objective: "O6", q: "Le temps gagné grâce à l'IA sert le mieux à :", options: ["Ne rien faire", "La partie humaine de votre travail", "Plus de temps d'écran", "Rien"], answer: 1, why: "C'est dans le travail humain que vous faites la différence." },
      { objective: "O6", q: "Qu'est-ce qui respecte les règles d'IA du lieu de travail ?", options: ["Utiliser n'importe quelle application", "N'utiliser que des outils approuvés et garder les données confidentielles à l'écart", "Coller des données de clients", "Partager des mots de passe"], answer: 1, why: "Les règles vous protègent, vous et votre employeur." },
      { objective: "O3", q: "La ligne « Ensuite » d'un point d'avancement dit à votre responsable :", options: ["Ce que vous faites ensuite", "Vos projets pour le déjeuner", "Vos prochaines vacances", "Rien"], answer: 0, why: "Elle montre votre plan." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      6,
      7,
      9,
      12,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Message avec le point principal en premier",
        objective: "O1",
        notYet: "Le point principal ou la demande est noyé ou manque.",
        meets: "Le point principal vient en premier, avec une demande claire et une date limite, sur un seul sujet.",
        exceeds: "Il a un objet clair, et le message fait moins de 100 mots."
      },
      {
        name: "Passation complète",
        objective: "O2",
        notYet: "Une ou plusieurs des cinq sections manquent.",
        meets: "Les cinq sections, dont les points ouverts et les points de vigilance.",
        exceeds: "Chaque point ouvert indique qui s'en charge ensuite."
      },
      {
        name: "Point d'avancement",
        objective: "O3",
        notYet: "Il manque Fait, Ensuite ou Bloqué.",
        meets: "Un point Fait / Ensuite / Bloqué avec une demande d'aide claire.",
        exceeds: "La demande d'aide dit ce qui a été essayé et pour quand l'aide est nécessaire."
      },
      {
        name: "Quatre cases et blocs de temps",
        objective: "O5",
        notYet: "Les tâches ne sont pas classées, ou la semaine n'a pas de blocs de temps.",
        meets: "Dix tâches dans les quatre cases et une semaine avec les postes, trois tâches importantes, des moments pour les messages et du temps de réserve.",
        exceeds: "Les tâches importantes mais pas urgentes sont placées en premier."
      },
      {
        name: "IA vérifiée",
        objective: "O6",
        notYet: "Des brouillons de l'IA ont été envoyés sans vérification, ou des détails privés ont été utilisés.",
        meets: "L'IA a aidé à rédiger au moins deux éléments, et chaque fait a été vérifié.",
        exceeds: "L'apprenant note un fait qu'il a corrigé."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent l'exercice final (grille d'évaluation)",
      "Apprenants qui disent utiliser au travail des messages avec le point principal en premier et des points d'avancement 30 jours plus tard (enquête de suivi)",
      "Superviseurs qui signalent moins de passations ratées ou de dates limites manquées",
      "Apprenants qui commencent un autre cours Koach Learn sur le travail dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone ou un ordinateur",
      "Un assistant d'IA gratuit : ChatGPT, Microsoft Copilot ou Google Gemini, ou l'outil approuvé par le lieu de travail",
      "L'agenda du téléphone ou un agenda papier",
      "Des exemples de messages, de notes de passation et de listes de tâches sans détail privé",
      "Environ 60 minutes au total : leçons, exercices, contrôles et exercice final"
    ],
    facilitatorNotes: [
      "Utilisez des exemples tirés des domaines des apprenants (commerce, entrepôt, aide en santé, bureau) pour que les formats paraissent concrets.",
      "Faites pratiquer les passations par deux : l'un fait la passation, l'autre vérifie les cinq sections.",
      "Rappelez aux apprenants de la santé et du service client que les détails sur les patients et les clients restent hors des outils d'IA non approuvés.",
      "Les travailleurs postés ne contrôlent pas toujours leurs horaires ; aidez-les à organiser le temps qu'ils contrôlent.",
      "Notez le kit d'une semaine avec la grille, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
