"use strict";

// Koach Learn course (French translation of shared/home-health-aide.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "home-health-aide-fr",
  lang: "fr",
  translationOf: "home-health-aide",
  category: "Workforce Development",
  name: "Compétences d'aide à domicile",
  skills: "Connaître le métier d'aide à domicile et le parcours pour y arriver, Vérifier la sécurité d'un logement, Suivre un plan de soins avec dignité, Écrire une note de visite et signaler les changements, Respecter la confidentialité et les limites",
  outcome: "expliquer ce que fait un aide à domicile et comment vous former dans votre État, et préparer un kit de visite d'entraînement : une liste de sécurité du logement, une liste des tâches du plan de soins et une note de visite basée sur des faits.",
  about: [
    "Les aides à domicile aident des personnes à vivre en sécurité chez elles : des personnes âgées, des personnes handicapées et des personnes qui se remettent d'un séjour à l'hôpital. Ils aident pour la toilette, l'habillage, les repas et les déplacements, et ils surveillent les changements pour les signaler à un infirmier ou une infirmière.",
    "Ce cours vous prépare à la formation et au travail. Il ne vous donne pas de certification. Aux États-Unis, les aides qui travaillent pour des agences de soins à domicile ou de soins palliatifs payées par Medicare (l'assurance santé fédérale américaine) doivent suivre une formation officielle et réussir un examen, et beaucoup d'États ajoutent leurs propres règles. Vous apprendrez où vérifier celles de votre État.",
    "Vous allez vous entraîner à la façon de penser que demande le métier : vérifier la sécurité d'un logement, suivre un plan de soins, écrire ce que vous voyez et protéger les informations et l'argent du client. Les gestes pratiques, comme les transferts, s'apprennent sous la supervision d'un infirmier, pas sur une vraie personne chez elle.",
    "C'est aussi un bon parcours pour les personnes qui sortent de prison. Les règles sur la vérification des antécédents changent selon l'État et l'agence, alors le cours vous montre comment poser la question."
  ],
  finalTask: "Préparez un kit de visite d'entraînement pour un client imaginaire (entraînement seulement) : une liste de sécurité du logement d'une page, la liste des tâches du plan de soins que vous feriez pendant une visite, dans l'ordre, une note de visite basée sur des faits avec un changement que vous signaleriez, et le nom de la page officielle de votre État sur les règles pour les aides à domicile.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des adultes qui cherchent un travail stable dans le soin : demandeurs d'emploi, personnes qui sortent de prison, immigrés, aidants familiaux qui veulent être payés pour les compétences qu'ils ont déjà, et adultes qui reprennent le travail.",
    startingPoint: "Beaucoup se sont déjà occupés d'un membre de leur famille. Peu connaissent la différence entre un aide à domicile (home health aide) et un aide aux soins personnels (personal care aide), les règles de formation ou la façon d'écrire une note de visite.",
    gap: "Les agences ont besoin d'aides formés qui suivent le plan de soins, restent en sécurité chez le client, signalent les changements et protègent la confidentialité. Les apprenants doivent connaître le parcours de formation et ces habitudes pour être embauchés et garder leurs clients en sécurité.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (environ 6e à 7e année aux États-Unis)",
      "Appareils : un téléphone ou un ordinateur de bibliothèque ; toutes les tâches peuvent se faire sur papier",
      "Les règles de formation et d'examen viennent de la loi fédérale, de l'État et de l'agence ; le cours renvoie à des pages officielles et n'indique ni heures ni frais",
      "Aucun conseil sur les médicaments ni les doses ; aucun entraînement pratique sur de vrais clients chez eux",
      "Certains apprenants ont un casier judiciaire ; les règles de vérification des antécédents changent selon l'État et l'agence"
    ],
    prerequisites: "Aucun. \"S'occuper d'un proche\" et \"Comprendre l'information sur la santé\" sont utiles, mais pas obligatoires."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À l'aide de la page officielle de votre État et d'une offre d'emploi d'une agence", action: "décrire ce que fait un aide à domicile et les étapes pour vous former dans votre État", standard: "en nommant la formation, l'examen ou le contrôle des compétences, et la page que vous avez consultée" },
    { id: "O2", condition: "À partir d'une image ou d'une description du logement d'un client", action: "lister les dangers pour la sécurité et ce que vous feriez pour chacun", standard: "en trouvant au moins 4 dangers, dont un pour votre propre sécurité" },
    { id: "O3", condition: "À partir du plan de soins d'un client imaginaire", action: "mettre les tâches de la visite dans l'ordre et faire chacune en respectant la dignité et les choix du client", standard: "sans sortir du plan de soins" },
    { id: "O4", condition: "Face à un changement que vous remarquez pendant une visite", action: "écrire une note de visite basée sur des faits et choisir d'appeler l'infirmier ou le 911", standard: "avec l'heure, ce que vous avez vu ou entendu, et la personne que vous avez prévenue" },
    { id: "O5", condition: "Face à une situation de confidentialité, d'argent, de cadeaux ou de possible maltraitance", action: "choisir l'action qui protège le client et respecte les règles", standard: "avec au moins 4 bonnes réponses sur 5 situations" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Le métier et le logement",
      lessons: [
        {
          title: "Ce que fait un aide à domicile et comment se former",
          objectives: ["O1"],
          minutes: 5,
          goal: "Décrire le métier d'aide à domicile et lister les étapes pour vous former dans votre État.",
          text: [
            "Les aides à domicile et les aides aux soins personnels aident les personnes chez elles pour les tâches de tous les jours comme la toilette, l'habillage, les repas et le linge. Les aides à domicile peuvent aussi faire des tâches de santé simples, comme vérifier le pouls, la température et la respiration, selon l'État. Ils sont supervisés par des infirmiers ou d'autres membres du personnel médical.",
            "Les aides aux soins personnels donnent en général une aide non médicale, comme de la compagnie, le ménage, la cuisine et les trajets en voiture. Les offres d'emploi utilisent souvent les deux titres, alors lisez les tâches.",
            "Les agences de soins à domicile et de soins palliatifs payées par Medicare doivent suivre des règles fédérales pour leurs aides. Le Bureau des statistiques du travail des États-Unis (BLS) indique que les aides de ces agences doivent suivre une formation officielle et réussir un examen standardisé. Certains États demandent aussi une licence ou une certification, une vérification des antécédents ou un examen de compétences.",
            "Ce cours vous prépare. Votre formation et votre examen viennent d'une agence ou d'un programme agréé. Pour vérifier les règles de votre État, allez sur le site du conseil ou du département de la santé de votre État. Beaucoup d'agences forment les nouveaux aides, parfois gratuitement, alors demandez."
          ],
          steps: ["Cherchez le nom de votre État suivi de \"home health aide training requirements\" (exigences de formation des aides à domicile) et ouvrez la page du département de la santé de l'État.", "Notez les règles sur la formation, l'examen et la vérification des antécédents.", "Regardez deux offres d'emploi d'agences de soins à domicile près de chez vous et listez les tâches et les exigences.", "Demandez à chaque agence si elle forme les nouveaux aides."],
          words: [["Aide à domicile (HHA)", "un aide formé qui donne des soins personnels et quelques tâches de santé simples chez le client, sous la supervision d'un infirmier."], ["Aide aux soins personnels", "un aide qui donne une aide non médicale à domicile, comme le ménage, la cuisine et la compagnie."], ["Agence", "une entreprise qui envoie des aides et des infirmiers chez les clients."], ["Examen de compétences", "un examen qui vérifie que vous connaissez et savez faire les gestes du métier."]],
          slides: [
            { title: "Deux sortes d'aides", bullets: ["Aide à domicile : soins personnels et quelques tâches de santé simples", "Aide aux soins personnels : aide non médicale", "Lisez les tâches de chaque offre d'emploi"] },
            { title: "Qui supervise", bullets: ["Les aides à domicile travaillent sous un infirmier", "L'infirmier écrit le plan de soins", "Vous le suivez et signalez les changements"] },
            { title: "Règles de formation", bullets: ["Agences payées par Medicare : formation officielle et examen", "Les États peuvent ajouter licence, examen ou vérification des antécédents", "Consultez la page du département de la santé de votre État"] },
            { title: "Ce cours vous prépare", bullets: ["Il ne vous donne pas de certification", "Beaucoup d'agences forment les nouveaux aides", "Renseignez-vous avant de payer"] }
          ],
          sources: [
            { name: "Bureau des statistiques du travail des États-Unis : aides à domicile et aides aux soins personnels", url: "https://www.bls.gov/ooh/healthcare/home-health-aides-and-personal-care-aides.htm" },
            { name: "CareerOneStop : trouver un American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }
          ],
          tryIt: "Trouvez la page officielle de votre État sur les règles pour les aides à domicile. Puis trouvez une offre d'emploi d'une agence de soins à domicile près de chez vous. Sur papier, écrivez la règle de formation donnée par la page de l'État, trois tâches de l'offre d'emploi et une question que vous poseriez à l'agence.",
          youCanNow: "expliquer ce que fait un aide à domicile et trouver les règles de formation de votre État sur une page officielle.",
          quickCheck: [
            { objective: "O1", q: "Qui supervise un aide à domicile ?", options: ["Le voisin du client", "Personne", "Un infirmier ou un autre membre du personnel médical", "Les amis de l'aide"], answer: 2, why: "Les aides à domicile sont supervisés par des infirmiers ou d'autres membres du personnel médical." },
            { objective: "O1", q: "Où vérifiez-vous les règles de formation des aides à domicile de votre État ?", options: ["Auprès du conseil ou du département de la santé de votre État", "Dans une publicité en ligne", "Dans un commentaire sur les réseaux sociaux", "Dans un message en chaîne"], answer: 0, why: "La page officielle de la santé de l'État fixe et explique les règles." }
          ]
        },
        {
          title: "Vérifier la sécurité du logement d'un client",
          objectives: ["O2"],
          minutes: 5,
          goal: "Lister les dangers pour la sécurité dans un logement et ce qu'il faut faire pour chacun.",
          text: [
            "Un logement n'est pas un hôpital. Chaque logement est différent, alors regardez autour de vous à chaque arrivée. Les chutes sont l'un des plus grands dangers pour les personnes âgées. MedlinePlus (le site santé de la Bibliothèque nationale de médecine des États-Unis) donne des moyens de réduire le risque : enlever ce qui fait trébucher, avoir des rampes dans l'escalier et dans la baignoire ou la douche, et faire contrôler sa vue.",
            "Repérez les tapis qui glissent, les fils électriques par terre, les objets dans l'escalier, le manque de lumière, le sol mouillé de la salle de bain et les objets que le client doit attraper en hauteur. Signalez à votre superviseur les dangers que vous ne pouvez pas régler, et ne déplacez jamais de meubles et ne jetez jamais rien sans demander au client.",
            "Les microbes comptent aussi à la maison. Lavez-vous les mains avant et après les soins, portez des gants quand vous risquez de toucher des liquides du corps, et lavez-vous les mains juste après avoir retiré les gants. Utilisez de l'eau et du savon quand vos mains sont visiblement sales.",
            "Protégez-vous aussi. Ayez l'adresse et le numéro de téléphone de votre agence. Demandez qu'on éloigne les animaux s'ils vous mettent mal à l'aise. Si vous ne vous sentez pas en sécurité, partez et appelez votre superviseur. Personne ne vous demande de rester en danger."
          ],
          steps: ["Regardez autour de vous en arrivant : sols, escalier, lumière, salle de bain.", "Réglez les petits dangers avec l'accord du client, comme un fil sur le passage.", "Notez et signalez les dangers que vous ne pouvez pas régler.", "Si vous ne vous sentez pas en sécurité, partez et appelez votre superviseur."],
          words: [["Danger", "quelque chose qui pourrait causer une blessure, comme un tapis qui glisse."], ["Risque de chute", "la probabilité qu'une personne tombe."], ["Barre d'appui", "une barre solide fixée au mur pour se tenir, souvent près des toilettes ou de la baignoire."]],
          slides: [
            { title: "Regardez autour de vous à chaque visite", bullets: ["Sols : tapis, fils, objets qui traînent", "Escalier et lumière", "Salle de bain : sol mouillé, pas de rampe"] },
            { title: "Réduire le risque de chute", bullets: ["Enlevez ce qui fait trébucher, avec l'accord du client", "Rampes dans l'escalier et dans la baignoire ou la douche", "Signalez ce que vous ne pouvez pas régler"] },
            { title: "Les microbes à la maison", bullets: ["Mains propres avant et après les soins", "Gants pour les liquides du corps", "Mains propres après avoir retiré les gants"] },
            { title: "Votre propre sécurité", bullets: ["Ayez l'adresse et le numéro de l'agence", "Demandez qu'on éloigne les animaux", "Pas en sécurité ? Partez et appelez votre superviseur"] }
          ],
          sources: [
            { name: "MedlinePlus : les chutes", url: "https://medlineplus.gov/falls.html" },
            { name: "CDC : sécurité clinique, hygiène des mains pour les soignants", url: "https://www.cdc.gov/clean-hands/hcp/clinical-safety/index.html" }
          ],
          tryIt: "Faites le tour de votre propre logement comme si vous étiez aide à domicile. Listez au moins quatre dangers que vous trouvez (par exemple un tapis qui glisse ou un couloir sombre), ce que vous feriez pour chacun, et une chose que vous feriez pour votre propre sécurité.",
          youCanNow: "vérifier les dangers d'un logement, les régler ou les signaler, et protéger votre propre sécurité pendant une visite.",
          quickCheck: [
            { objective: "O2", q: "Vous voyez le fil d'une lampe sur le passage vers la salle de bain. Que faites-vous ?", options: ["Vous l'ignorez", "Avec l'accord du client, vous l'enlevez du passage", "Vous coupez le fil", "Vous jetez la lampe"], answer: 1, why: "Enlever ce qui fait trébucher, avec l'accord du client, réduit le risque de chute." },
            { objective: "O2", q: "Un visiteur chez le client fait des menaces et vous ne vous sentez pas en sécurité. Que faites-vous ?", options: ["Vous restez et finissez d'abord toutes les tâches", "Vous vous disputez avec le visiteur", "Vous vous cachez dans la salle de bain", "Vous partez et appelez votre superviseur"], answer: 3, why: "Votre sécurité passe en premier ; partez et appelez votre superviseur." }
          ]
        },
        {
          title: "Suivre le plan de soins avec dignité",
          objectives: ["O3"],
          minutes: 5,
          goal: "Mettre dans l'ordre les tâches du plan de soins d'une visite et les faire en respectant le client.",
          text: [
            "L'infirmier écrit un plan de soins pour chaque client. Il dit ce que vous faites à chaque visite : par exemple aider à la douche, aider à s'habiller, préparer le déjeuner, une petite marche et le linge. Faites ce que dit le plan. Si le client demande quelque chose qui n'est pas dans le plan, appelez votre superviseur.",
            "Les aides ne changent pas le plan de soins et ne donnent pas de conseils médicaux. Selon l'État et le plan, vous pouvez rappeler au client que c'est l'heure de son médicament, mais vous ne décidez pas des doses et vous ne changez pas les médicaments. Les questions sur les médicaments vont à l'infirmier.",
            "La dignité, c'est traiter le client comme un adulte qui dirige sa propre vie. Frappez, saluez-le avec le nom qu'il préfère, expliquez ce que vous allez faire et demandez avant de commencer. Proposez des choix, comme la chemise à porter. Laissez-le faire ce qu'il peut faire seul, même si cela prend plus de temps. Gardez-le couvert pendant la toilette.",
            "Les gestes pratiques, comme les transferts ou la toilette d'une personne qui ne peut pas se tenir debout, s'apprennent et sont vérifiés pendant votre formation, sous la supervision d'un infirmier."
          ],
          steps: ["Lisez le plan de soins avant de commencer.", "Saluez le client, expliquez le plan du jour et demandez ce qu'il souhaite.", "Faites les tâches dans un ordre logique, par exemple la toilette avant l'habillage, et les repas à l'heure.", "Laissez le client faire ce qu'il peut et proposez des choix.", "Appelez votre superviseur pour tout ce qui n'est pas dans le plan."],
          words: [["Plan de soins", "la liste écrite par l'infirmier des soins que reçoit le client et de la façon de les donner."], ["Dignité", "traiter une personne avec respect, comme un adulte qui fait ses propres choix."], ["Champ d'action", "les tâches que vous êtes formé et autorisé à faire dans votre travail."]],
          slides: [
            { title: "Le plan de soins est votre guide", bullets: ["Écrit par l'infirmier", "Faites ce qu'il dit", "Pas dans le plan ? Appelez votre superviseur"] },
            { title: "Restez dans votre rôle", bullets: ["Pas de conseils médicaux", "Pas de changement de médicaments ni de doses", "Les questions sur les médicaments vont à l'infirmier"] },
            { title: "Dignité", bullets: ["Frappez, saluez, expliquez, demandez", "Proposez des choix", "Laissez-le faire ce qu'il peut", "Gardez-le couvert"] }
          ],
          tryIt: "Entraînement seulement, cliente imaginaire : le plan de soins de Mme Okafor dit \"linge, aide à la douche, aide à l'habillage, déjeuner à midi, marche de 10 minutes après le déjeuner\". Vous arrivez à 10 h 30. Écrivez les tâches dans l'ordre où vous les feriez et une façon de lui proposer un choix pour chacune.",
          youCanNow: "suivre un plan de soins dans un ordre logique, rester dans votre rôle et respecter la dignité et les choix du client.",
          quickCheck: [
            { objective: "O3", q: "Un client vous demande de nettoyer ses gouttières, ce qui n'est pas dans le plan de soins. Que faites-vous ?", options: ["Vous le faites pour être gentil", "Vous appelez votre superviseur au sujet de la demande", "Vous refusez sèchement", "Vous demandez à un ami de le faire contre de l'argent"], answer: 1, why: "Les tâches qui ne sont pas dans le plan de soins passent par votre superviseur." },
            { objective: "O3", q: "Un client veut boutonner sa chemise lui-même, mais il est lent. Que faites-vous ?", options: ["Vous le faites à sa place pour gagner du temps", "Vous lui dites de se dépêcher", "Vous le laissez faire et n'aidez que s'il le demande", "Vous laissez tomber la chemise"], answer: 2, why: "Laisser les clients faire ce qu'ils peuvent protège leur dignité et leur autonomie." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Le métier et le logement",
        questions: [
          { objective: "O1", q: "Quelle est une différence importante entre un aide à domicile et un aide aux soins personnels ?", options: ["Les aides à domicile peuvent faire quelques tâches de santé simples sous un infirmier", "Les aides aux soins personnels font de la chirurgie", "Il n'y a aucune différence", "Les aides à domicile n'aident jamais pour la toilette"], answer: 0, why: "Les aides à domicile peuvent vérifier les signes vitaux et faire des tâches semblables, selon l'État ; les aides aux soins personnels donnent en général une aide non médicale." },
          { objective: "O2", q: "Lequel est un danger de chute ?", options: ["Une veilleuse dans le couloir", "Une rampe dans l'escalier", "Une barre d'appui près de la baignoire", "Un tapis qui glisse en haut de l'escalier"], answer: 3, why: "Les tapis qui glissent peuvent faire trébucher ; les autres réduisent le risque." },
          { objective: "O2", q: "Vous trouvez un danger que vous ne pouvez pas régler, comme une rampe d'escalier cassée. Que faites-vous ?", options: ["Vous la réparez avec du ruban adhésif", "Vous le notez et le signalez à votre superviseur", "Vous ne dites rien", "Vous dites au client de ne plus jamais prendre l'escalier"], answer: 1, why: "Les dangers que vous ne pouvez pas régler sont signalés pour que l'agence agisse." },
          { objective: "O3", q: "Le client vous demande quelle quantité d'un médicament prendre. Que répondez-vous ?", options: ["Vous donnez votre meilleure estimation", "Vous lui dites de doubler la dose", "Vous dites que vous allez demander à l'infirmier", "Vous cherchez et vous décidez à sa place"], answer: 2, why: "Les aides ne donnent ni conseils ni doses de médicaments ; l'infirmier répond aux questions sur les médicaments." },
          { objective: "O3", q: "Qui écrit le plan de soins du client ?", options: ["L'infirmier", "L'aide", "Le voisin du client", "Personne"], answer: 0, why: "L'infirmier écrit le plan de soins ; l'aide le suit." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Signalements, confidentialité et votre kit de visite",
      lessons: [
        {
          title: "Surveiller les changements et écrire une note de visite",
          objectives: ["O4"],
          minutes: 5,
          goal: "Écrire une note de visite basée sur des faits et choisir d'appeler l'infirmier ou le 911.",
          text: [
            "Vous êtes peut-être la seule personne qui voit le client aujourd'hui. Surveillez les changements : il mange ou boit moins, il a une nouvelle douleur, une nouvelle plaie ou un nouveau bleu, il est plus confus, il a du mal à respirer, il est tombé, ou son humeur a changé.",
            "Écrivez votre note de visite avec des faits : ce que vous avez fait, ce que vous avez vu et entendu, et l'heure. Mettez les mots du client entre guillemets. \"11 h. Aide à la douche. Zone rouge sur le talon droit, de la taille d'une pièce. Le client a dit : 'J'ai mal au talon.'\" est une bonne note. \"Avait l'air bizarre\" n'en est pas une.",
            "Appelez votre superviseur ou l'infirmier pour tout changement. Appelez d'abord le 911 (le numéro d'urgence aux États-Unis) en cas d'urgence : difficulté à respirer, douleur à la poitrine, personne qui ne se réveille pas, saignement important ou signes d'AVC. Appelez ensuite votre agence.",
            "Votre agence vous dira comment elle veut que les notes soient écrites, sur papier ou dans une application. N'écrivez jamais de détails privés ailleurs, par exemple dans les notes de votre propre téléphone."
          ],
          steps: ["Remarquez le changement.", "Urgence ? Appelez d'abord le 911, puis votre agence.", "Pas une urgence ? Appelez votre infirmier ou votre superviseur.", "Écrivez les faits, l'heure, les mots du client et la personne que vous avez prévenue."],
          words: [["Note de visite", "le compte rendu qu'un aide écrit après chaque visite."], ["Urgence", "un danger soudain et grave pour la vie ou la santé, qui demande d'appeler le 911."], ["Escarre", "une lésion de la peau due au fait de rester trop longtemps dans la même position ; elle commence souvent par une zone rouge sur un os."]],
          slides: [
            { title: "Surveillez les changements", bullets: ["Mange ou boit moins", "Nouvelle douleur, plaie ou bleu", "Plus confus, une chute ou du mal à respirer"] },
            { title: "Écrivez des faits", bullets: ["Ce que vous avez fait, vu et entendu", "L'heure et les mots du client", "Pas : \"Avait l'air bizarre\""] },
            { title: "Qui appeler", bullets: ["Urgence : d'abord le 911, puis votre agence", "Tout autre changement : votre infirmier ou superviseur", "Notez qui vous avez prévenu"] }
          ],
          sources: [{ name: "MedlinePlus : les escarres", url: "https://medlineplus.gov/pressuresores.html" }],
          tryIt: "Entraînement seulement, client imaginaire : \"M. Diaz mange d'habitude tout son déjeuner. Aujourd'hui, il a mangé deux bouchées, a dit 'Je n'ai pas envie de manger', et sa cheville gauche semble plus enflée que la semaine dernière.\" Écrivez une note de visite de trois lignes et décidez : appeler l'infirmier ou le 911 ? Écrivez pourquoi.",
          youCanNow: "écrire une note de visite basée sur des faits et choisir si un changement demande l'infirmier ou le 911.",
          quickCheck: [
            { objective: "O4", q: "Votre client a soudain du mal à respirer. Que faites-vous d'abord ?", options: ["Vous écrivez une note", "Vous appelez le 911", "Vous attendez de voir si ça passe", "Vous envoyez un message à un ami"], answer: 1, why: "Avoir du mal à respirer est une urgence ; appelez d'abord le 911, puis l'agence." },
            { objective: "O4", q: "Quelle note de visite est la meilleure ?", options: ["\"Le client était bizarre aujourd'hui.\"", "\"Tout va bien, je crois.\"", "\"Sans doute une mauvaise journée.\"", "\"13 h 15. A mangé 2 bouchées du déjeuner. A dit : 'Je n'ai pas faim.'\""], answer: 3, why: "Elle donne l'heure, ce qui a été observé et les mots du client." }
          ]
        },
        {
          title: "Confidentialité, argent et limites",
          objectives: ["O5"],
          minutes: 5,
          goal: "Choisir l'action qui protège la confidentialité, l'argent et la sécurité d'un client.",
          text: [
            "Les informations de santé d'un client sont privées. HIPAA, une loi fédérale américaine, les protège. Partagez-les seulement avec votre équipe de soins. Ne parlez pas des clients avec vos amis, ne publiez rien sur eux et ne prenez pas de photos chez eux.",
            "Fixez des limites claires pour l'argent et les cadeaux. N'empruntez jamais d'argent, n'en prêtez pas, n'acceptez pas de cadeaux de valeur et n'utilisez pas la carte d'un client, sauf si les règles de votre agence et le plan de soins permettent une tâche comme faire les courses avec des reçus. Suivez exactement les règles de votre agence et gardez les reçus.",
            "Les personnes âgées et handicapées peuvent être victimes de maltraitance, de négligence et de vol d'argent, parfois par des proches. Les signes d'alerte sont des bleus que personne ne peut expliquer, un manque d'hygiène, des escarres, la peur ou le repli sur soi, et des changements soudains avec l'argent.",
            "Si vous soupçonnez une maltraitance, dites-le tout de suite à votre superviseur. Vous pouvez aussi contacter Adult Protective Services (le service de protection des adultes) de votre État. Si le client est en danger maintenant, appelez le 911. Certains États obligent les aides à signaler ; votre agence vous dira comment."
          ],
          steps: ["Partagez les informations du client seulement avec l'équipe de soins.", "Suivez les règles de l'agence sur l'argent, gardez les reçus et refusez les cadeaux de valeur.", "Surveillez les signes de maltraitance, de négligence ou de vol d'argent.", "Signalez vos inquiétudes à votre superviseur ou à Adult Protective Services ; appelez le 911 en cas de danger."],
          words: [["HIPAA", "une loi fédérale américaine qui protège la confidentialité des informations de santé."], ["Limite", "une frontière claire sur ce que vous faites dans une relation de travail."], ["Exploitation financière", "prendre ou mal utiliser l'argent ou les biens de quelqu'un."], ["Adult Protective Services (APS)", "le bureau de l'État ou du comté qui enquête sur la maltraitance et la négligence envers les personnes âgées ou handicapées."]],
          slides: [
            { title: "Confidentialité", bullets: ["Partagez seulement avec l'équipe de soins", "Pas de discussions, publications ni photos", "HIPAA protège les informations de santé"] },
            { title: "Argent et cadeaux", bullets: ["Pas d'emprunt, pas de prêt, pas de cadeaux de valeur", "Courses seulement si le plan le permet, avec reçus", "Suivez exactement les règles de l'agence"] },
            { title: "Signes de maltraitance", bullets: ["Des bleus que personne ne peut expliquer", "Manque d'hygiène ou escarres", "Peur, repli sur soi ou changements soudains avec l'argent"] },
            { title: "Signalez-le", bullets: ["Dites-le tout de suite à votre superviseur", "Adult Protective Services", "Danger maintenant : 911"] }
          ],
          sources: [
            { name: "MedlinePlus : la maltraitance des personnes âgées", url: "https://medlineplus.gov/elderabuse.html" },
            { name: "Eldercare Locator (ACL)", url: "https://eldercare.acl.gov/" }
          ],
          tryIt: "Lisez ces trois situations imaginaires et écrivez ce que vous feriez : 1) Le client vous offre 200 $ \"parce que vous êtes si gentil\". 2) Le neveu du client vous demande le code PIN de la carte bancaire du client. 3) Un ami vous demande de quelle personne célèbre vous vous occupez. Puis écrivez une phrase aimable pour poser une limite.",
          youCanNow: "protéger la confidentialité, l'argent et la sécurité d'un client et signaler vos inquiétudes à la bonne personne.",
          quickCheck: [
            { objective: "O5", q: "Un client vous offre une montre chère pour vous remercier. Que faites-vous ?", options: ["Vous refusez gentiment et prévenez votre superviseur", "Vous la prenez discrètement", "Vous la vendez et partagez l'argent", "Vous demandez plutôt de l'argent liquide"], answer: 0, why: "Les cadeaux de valeur franchissent une limite ; refusez gentiment et suivez les règles de l'agence." },
            { objective: "O5", q: "Vous remarquez que l'argent du client disparaît après chaque visite d'un parent. Que faites-vous ?", options: ["Vous affrontez le parent", "Vous l'ignorez, c'est une affaire de famille", "Vous le signalez à votre superviseur", "Vous cachez le portefeuille du client dans votre sac"], answer: 2, why: "Une possible exploitation financière se signale à votre superviseur ou à Adult Protective Services." }
          ]
        },
        {
          title: "Votre kit de visite d'entraînement et les prochaines étapes",
          objectives: ["O2", "O3", "O4", "O1"],
          minutes: 6,
          goal: "Préparer un kit de visite d'entraînement pour un client imaginaire et prévoir votre prochaine étape vers la formation.",
          text: [
            "Vous allez maintenant rassembler tout le cours. Un kit de visite, c'est ce qu'un aide bien préparé a en tête et sur papier : une vérification rapide de la sécurité du logement, les tâches du plan de soins dans l'ordre et une note de visite claire.",
            "Utilisez un client imaginaire, par exemple \"M. Johnson, 78 ans, vit seul, utilise un déambulateur, plan de soins : aide à la douche, habillage, préparer le petit-déjeuner, petite marche, linge\". N'utilisez jamais le nom ou les détails d'une vraie personne pour vous entraîner.",
            "Ensuite, faites un vrai pas vers le métier. Trouvez près de chez vous une agence de soins à domicile ou un programme agréé qui forme les nouveaux aides. Posez des questions sur la formation, l'examen, la vérification des antécédents, la paie pendant la formation et les horaires. Un American Job Center (centre public pour l'emploi aux États-Unis) peut vous aider à trouver une formation et à la payer.",
            "Sur un CV, indiquez l'aide que vous avez déjà donnée, par exemple à un membre de votre famille, avec des mots simples : \"J'ai aidé un membre de ma famille pour les repas, la toilette et les rendez-vous pendant 2 ans.\""
          ],
          steps: ["Écrivez une liste de sécurité du logement d'au moins 6 points.", "Listez les tâches du plan de soins du client imaginaire dans l'ordre où vous les feriez.", "Écrivez une note de visite basée sur des faits avec un changement que vous signaleriez, et la personne que vous préviendriez.", "Écrivez la page officielle de votre État et une agence ou un programme que vous contacterez cette semaine."],
          words: [["Kit de visite", "votre liste de vérification, votre liste de tâches et votre modèle de note pour chaque visite."], ["Programme agréé", "un programme de formation accepté par votre État ou par une agence certifiée."]],
          slides: [
            { title: "Votre kit de visite", bullets: ["Liste de sécurité du logement", "Tâches du plan de soins dans l'ordre", "Une note de visite basée sur des faits"] },
            { title: "Entraînement seulement", bullets: ["Utilisez un client imaginaire", "Jamais de vrais noms ni de vrais détails"] },
            { title: "Votre prochain vrai pas", bullets: ["Trouvez une agence ou un programme qui forme les aides", "Posez des questions : formation, examen, antécédents, paie", "Un American Job Center peut vous aider"] },
            { title: "Une ligne pour le CV", bullets: ["Indiquez l'aide familiale avec des mots simples", "Dites ce que vous avez fait et pendant combien de temps"] }
          ],
          sources: [{ name: "Bureau des statistiques du travail des États-Unis : aides à domicile et aides aux soins personnels (comment le devenir)", url: "https://www.bls.gov/ooh/healthcare/home-health-aides-and-personal-care-aides.htm#tab-4" }],
          tryIt: "Tâche finale : préparez votre kit de visite d'entraînement pour un client imaginaire : une liste de sécurité du logement, les tâches du plan de soins dans l'ordre, une note de visite basée sur des faits avec un changement que vous signaleriez et à qui, et la page officielle de votre État avec une agence ou un programme que vous contacterez.",
          youCanNow: "préparer un kit de visite d'entraînement et faire un vrai pas vers la formation d'aide à domicile.",
          quickCheck: [
            { objective: "O1", q: "Quelle est une bonne question à poser à une agence de soins à domicile ?", options: ["\"Est-ce que je peux sauter la formation ?\"", "\"Formez-vous les nouveaux aides, et y a-t-il un examen ?\"", "\"Est-ce que je peux donner les médicaments à ma façon ?\"", "\"Est-ce que je peux emmener mes amis chez les clients ?\""], answer: 1, why: "Poser des questions sur la formation et l'examen vous montre le vrai parcours dans cette agence." },
            { objective: "O3", q: "Votre plan de soins imaginaire dit douche, habillage et petit-déjeuner. Quel ordre est logique ?", options: ["Douche, habillage, puis petit-déjeuner", "Petit-déjeuner sous la douche", "Habillage, douche, puis de nouveau habillage", "Sauter la douche"], answer: 0, why: "La toilette avant l'habillage, puis le repas, est un ordre logique pour ces tâches." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Signalements, confidentialité et votre kit de visite",
        questions: [
          { objective: "O4", q: "Quel changement devez-vous signaler à l'infirmier ?", options: ["Le client a regardé la télévision", "Le client portait une chemise bleue", "Une nouvelle zone rouge sur le talon du client", "Le client a eu une visite"], answer: 2, why: "Une nouvelle zone rouge peut être le début d'une escarre et doit être signalée." },
          { objective: "O4", q: "Votre client ne se réveille pas. Que faites-vous d'abord ?", options: ["Vous appelez le 911", "Vous le laissez dormir", "Vous écrivez une note et partez", "Vous appelez son ami"], answer: 0, why: "Une personne qui ne se réveille pas est une urgence ; appelez d'abord le 911." },
          { objective: "O5", q: "Un voisin vous demande ce qu'a votre client. Que répondez-vous ?", options: ["Vous lui donnez le diagnostic", "Vous lui montrez les notes de visite", "Vous dites que vous ne pouvez pas partager d'informations sur les clients", "Vous publiez des nouvelles en ligne"], answer: 2, why: "Les informations de santé du client sont privées et ne vont qu'à l'équipe de soins." },
          { objective: "O5", q: "Qui enquête sur la maltraitance ou la négligence envers les personnes âgées ou handicapées ?", options: ["La poste", "Adult Protective Services", "Un guichetier de banque", "La salle de sport du client"], answer: 1, why: "Adult Protective Services enquête sur la maltraitance et la négligence ; appelez le 911 en cas de danger immédiat." },
          { objective: "O5", q: "Le client vous demande de lui prêter 50 $. Que faites-vous ?", options: ["Vous les prêtez discrètement", "Vous les prêtez avec des intérêts", "Vous lui donnez votre carte", "Vous refusez gentiment et prévenez votre superviseur"], answer: 3, why: "Prêter de l'argent franchit une limite de travail ; suivez les règles de l'agence." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Compétences d'aide à domicile",
    questions: [
      { objective: "O1", q: "Où travaille en général un aide à domicile ?", options: ["Chez les clients", "Seulement dans les blocs opératoires", "Dans une banque", "Dans le laboratoire d'une pharmacie"], answer: 0, why: "Les aides à domicile aident les personnes chez elles." },
      { objective: "O1", q: "À quoi sert ce cours ?", options: ["Il vous certifie comme aide", "Il remplace la formation de votre agence", "Il vous prépare à la formation et au métier", "Il vous donne une licence de l'État"], answer: 2, why: "Le cours vous prépare ; la formation et l'examen viennent d'une agence ou d'un programme agréé." },
      { objective: "O1", q: "Les aides des agences payées par Medicare doivent :", options: ["Avoir un diplôme d'infirmier", "Suivre une formation officielle et réussir un examen", "Travailler sans aucune formation", "Travailler seulement la nuit"], answer: 1, why: "Le BLS indique que les aides des agences certifiées doivent suivre une formation officielle et réussir un examen standardisé." },
      { objective: "O1", q: "Pour connaître les règles de votre État pour les aides à domicile, consultez :", options: ["Un commentaire sous une vidéo", "Un message en chaîne", "Le conseil d'un inconnu", "Le conseil ou le département de la santé de votre État"], answer: 3, why: "La page officielle de la santé de l'État explique ses règles." },
      { objective: "O2", q: "Quel est le meilleur moyen de réduire le risque de chute à la maison ?", options: ["Enlever ce qui fait trébucher, avec l'accord du client", "Ajouter des tapis", "Éteindre les lumières du couloir", "Mettre les objets sur des étagères hautes"], answer: 0, why: "Enlever ce qui fait trébucher est l'un des principaux moyens de prévenir les chutes." },
      { objective: "O2", q: "Quand devez-vous vous laver les mains pendant une visite ?", options: ["Seulement en partant", "Avant et après les soins, et après avoir retiré les gants", "Seulement si le client le demande", "Jamais, les gants suffisent"], answer: 1, why: "Lavez-vous les mains avant et après les soins et juste après avoir retiré les gants." },
      { objective: "O2", q: "Vous ne vous sentez pas en sécurité chez un client. Que faites-vous ?", options: ["Vous restez jusqu'à la fin de la visite", "Vous vous enfermez dans une pièce", "Vous partez et appelez votre superviseur", "Vous en parlez sur les réseaux sociaux"], answer: 2, why: "Votre sécurité passe en premier ; partez et appelez votre superviseur." },
      { objective: "O2", q: "Qu'est-ce qui aide à prévenir les chutes dans la salle de bain ?", options: ["Un sol mouillé", "Un tapis de bain qui glisse", "Une lumière faible", "Des rampes ou des barres d'appui dans la baignoire ou la douche"], answer: 3, why: "Les rampes dans la baignoire ou la douche aident à prévenir les chutes." },
      { objective: "O3", q: "Un client demande une tâche qui n'est pas dans le plan de soins. Vous :", options: ["Appelez votre superviseur", "La faites quand même", "Refusez et partez", "Demandez à un autre client"], answer: 0, why: "Les changements au plan passent par votre superviseur." },
      { objective: "O3", q: "Qu'est-ce qui montre du respect pour la dignité d'un client ?", options: ["Tout décider à sa place", "Lui proposer des choix, comme la chemise à porter", "Parler de lui comme s'il n'était pas là", "Le laisser découvert pendant la toilette"], answer: 1, why: "Proposer des choix traite le client comme un adulte qui dirige sa vie." },
      { objective: "O3", q: "Qui répond aux questions sur les médicaments d'un client ?", options: ["L'aide", "Le voisin du client", "L'infirmier", "Un forum sur Internet"], answer: 2, why: "Les aides ne donnent pas de conseils sur les médicaments ; l'infirmier répond aux questions sur les médicaments." },
      { objective: "O3", q: "Avant de commencer les soins, que faites-vous ?", options: ["Vous commencez sans parler", "Vous lisez le plan de soins, saluez le client et expliquez", "Vous changez les meubles de place", "Vous modifiez le plan de soins"], answer: 1, why: "Lire le plan, saluer et expliquer passent en premier." },
      { objective: "O4", q: "Quelle urgence demande d'appeler d'abord le 911 ?", options: ["Le client veut un en-cas", "Le client s'ennuie", "Le linge est en retard", "Une douleur à la poitrine ou du mal à respirer"], answer: 3, why: "La douleur à la poitrine et le mal à respirer demandent d'abord le 911, puis l'agence." },
      { objective: "O4", q: "Une bonne note de visite contient :", options: ["L'heure, ce que vous avez vu et les mots du client", "Votre avis sur la famille du client", "Des suppositions sur ce qui ne va pas", "Des détails privés sur votre propre téléphone"], answer: 0, why: "Les notes sont des faits, avec l'heure et les mots du client." },
      { objective: "O4", q: "Cette semaine, le client mange beaucoup moins que d'habitude. Vous :", options: ["Ne dites rien", "Le signalez à l'infirmier et l'écrivez dans votre note", "L'obligez à tout manger", "Jetez sa nourriture"], answer: 1, why: "Un changement dans l'alimentation se signale et s'écrit." },
      { objective: "O4", q: "Après avoir appelé le 911 pour une urgence, vous devez aussi :", options: ["Rentrer chez vous", "Effacer vos notes", "Appeler votre agence", "Attendre un jour avant de prévenir quelqu'un"], answer: 2, why: "Après le 911, appelez votre agence pour que l'infirmier et le superviseur soient au courant." },
      { objective: "O5", q: "Quelle loi protège les informations de santé des clients ?", options: ["HIPAA", "La limite de vitesse", "La loi sur le salaire minimum", "La loi sur le droit d'auteur"], answer: 0, why: "HIPAA protège la confidentialité des informations de santé." },
      { objective: "O5", q: "Quel est un signe d'alerte d'exploitation financière ?", options: ["Le client paie une facture à temps", "Le client fait ses courses", "Le client a une carte de bibliothèque", "Des changements soudains et inexpliqués avec l'argent du client"], answer: 3, why: "Des changements soudains avec l'argent peuvent vouloir dire que quelqu'un prend l'argent du client." },
      { objective: "O5", q: "Prendre des photos d'un client chez lui pour les montrer à des amis, c'est :", options: ["Acceptable s'il a l'air heureux", "Un problème de confidentialité ; ne le faites pas", "Obligatoire pour l'agence", "Acceptable si vous floutez la maison"], answer: 1, why: "Les photos et les publications sur les clients violent leur vie privée." },
      { objective: "O5", q: "Vous soupçonnez qu'un membre de la famille néglige un client. Vous :", options: ["En parlez aux voisins du client", "Attendez que ça empire", "Le signalez à votre superviseur ou à Adult Protective Services", "Ne faites rien parce que c'est la famille"], answer: 2, why: "Une négligence soupçonnée se signale ; appelez le 911 en cas de danger immédiat." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [1, 2, 4, 6, 9, 10, 13, 17, 19] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et vérifiez-la de nouveau.",
    criteria: [
      { name: "Liste de sécurité du logement", objective: "O2", notYet: "Moins de 4 points, ou aucun point sur la sécurité de l'aide.", meets: "Au moins 6 points sur les sols, l'escalier, la lumière, la salle de bain, les microbes et la sécurité de l'aide.", exceeds: "Indique quoi faire pour chaque point : régler avec l'accord du client, ou signaler." },
      { name: "Tâches du plan de soins", objective: "O3", notYet: "Des tâches manquent, ne sont pas dans un ordre logique ou sortent du plan.", meets: "Toutes les tâches du plan dans un ordre logique, avec une façon de proposer un choix.", exceeds: "Indique les tâches que le client peut faire en partie lui-même." },
      { name: "Note de visite", objective: "O4", notYet: "La note contient des suppositions ou des opinions, ou n'a pas d'heure.", meets: "Des faits, l'heure, les mots du client et la personne prévenue.", exceeds: "Dit correctement si le changement demande l'infirmier ou le 911, et pourquoi." },
      { name: "Confidentialité respectée", objective: "O5", notYet: "Le kit utilise le nom ou des détails privés d'une vraie personne.", meets: "Utilise un client imaginaire et aucun détail privé.", exceeds: "Ajoute une phrase pour poser une limite sur l'argent ou les cadeaux." },
      { name: "Prochaine étape", objective: "O1", notYet: "Aucune page officielle ni agence indiquée.", meets: "Indique la page officielle de l'État et une agence ou un programme à contacter.", exceeds: "Indique les questions à poser sur la formation, l'examen, la vérification des antécédents et la paie." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui contactent une agence de soins à domicile ou un programme de formation agréé dans les 30 jours",
      "Apprenants qui terminent la formation d'aide à domicile et réussissent l'examen de compétences",
      "Apprenants embauchés comme aides à domicile ou aides aux soins personnels dans les 6 mois (enquête de suivi)",
      "Les agences partenaires constatent que les nouveaux aides signalent les changements et suivent les plans de soins dès leurs premières semaines"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Internet pour trouver la page du département de la santé de l'État et les agences locales",
      "Du papier et un stylo pour la liste de vérification, la liste de tâches et la note de visite",
      "Votre propre logement pour le tour de sécurité",
      "Environ 60 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "Avant le cours, trouvez les règles de votre État pour les aides à domicile et deux agences locales qui forment les nouveaux aides, et partagez-les.",
      "Utilisez seulement des clients imaginaires ; rappelez aux apprenants de ne jamais utiliser le nom ou les détails d'une vraie personne pour s'entraîner.",
      "Ne laissez pas les apprenants s'entraîner aux transferts ou à la toilette les uns sur les autres sans un formateur qualifié.",
      "Dites clairement que le cours prépare les apprenants et ne les certifie pas ; les règles viennent de la loi fédérale, de l'État et de l'agence.",
      "Pour les apprenants qui ont un casier judiciaire, indiquez les règles de l'État et un conseiller en réinsertion ou en aide juridique avant qu'ils postulent."
    ]
  }
};
