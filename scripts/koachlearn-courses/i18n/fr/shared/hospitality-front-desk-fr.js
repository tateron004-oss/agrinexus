"use strict";

// Koach Learn course (French translation of shared/hospitality-front-desk.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "hospitality-front-desk-fr",
  lang: "fr",
  translationOf: "hospitality-front-desk",
  category: "Workforce Development",
  name: "Métiers de l'hôtellerie : réception et service client",
  skills: "Faire l'arrivée et le départ des clients, Lire la note du client (folio), Résoudre les problèmes des clients, Protéger la vie privée et la sécurité des clients, Tenir un poste à la réception, Préparer la certification CFDR",
  outcome: "tenir un poste à la réception d'un hôtel comme il faut : faire l'arrivée et le départ d'un client, expliquer une note, résoudre un problème avec calme, protéger la vie privée et la sécurité des clients, et suivre un plan écrit vers un emploi et une certification de réceptionniste.",
  about: [
    "Les hôtels recrutent des réceptionnistes dans toutes les villes et dans beaucoup de petites villes, et beaucoup embauchent des personnes sans expérience en hôtellerie si elles sont aimables, fiables et soigneuses. Ce cours s'adresse aux personnes qui cherchent un emploi, aux jeunes adultes, aux personnes qui sortent de prison et à toute personne qui veut faire un premier pas dans l'hôtellerie.",
    "Vous allez pratiquer le vrai travail de la réception : faire l'arrivée d'un client (le check-in), lire sa note (le folio), faire son départ (le check-out), gérer un hôtel complet ou un client mécontent, et suivre les règles qui protègent les clients, comme ne jamais dire un numéro de chambre à voix haute.",
    "Le cours vous prépare au métier et à une certification de réceptionniste, comme la START Certified Front Desk Representative (CFDR) de l'American Hotel & Lodging Educational Institute (AHLEI, l'institut de formation de l'association américaine des hôtels). Il ne délivre pas cette certification : vous l'obtenez en suivant le cours et en passant l'examen de l'AHLEI.",
    "Chaque leçon dure environ cinq minutes, avec une tâche « Essayez maintenant » et une vérification rapide de deux questions. Il y a un contrôle des connaissances après chaque chapitre, un quiz de 20 questions à la fin et une tâche finale que vous pouvez montrer en entretien."
  ],
  finalTask: "Préparez votre dossier pour un emploi à la réception : (1) une liste de contrôle d'une page pour le début, le milieu et la fin d'un poste à la réception ; (2) un script d'arrivée que vous pouvez dire à voix haute, avec la règle de confidentialité incluse ; (3) un plan de 30 jours avec des dates : trois hôtels où vous allez postuler, quand vous allez pratiquer le script avec quelqu'un, et quand vous allez consulter la page CFDR de l'AHLEI ou demander à un employeur une formation à la réception.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Adultes et jeunes adultes qui cherchent un premier emploi ou un meilleur emploi : demandeurs d'emploi, personnes qui sortent de prison, immigrés, personnes en reconversion et jeunes dans des programmes d'emploi. La plupart ont déjà utilisé un téléphone et parlé avec des clients, mais n'ont jamais travaillé dans un hôtel.",
    startingPoint: "Savent accueillir les gens et utiliser un smartphone. La plupart n'ont jamais utilisé de logiciel hôtelier, lu la note d'un client, ni géré les paiements, les clés et les règles de confidentialité des clients.",
    gap: "Les hôtels recrutent à la réception toute l'année et forment souvent sur le tas, mais ils veulent des personnes qui connaissent déjà les étapes de base de l'arrivée et du départ, qui restent calmes face aux clients mécontents et qui protègent la vie privée et la sécurité des clients. Connaître ces étapes, et avoir un plan vers une certification, aide à se faire embaucher et à garder l'emploi.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (environ fin du primaire, début du collège)",
      "Appareils : un téléphone ou un ordinateur de bibliothèque ; toute la pratique peut se faire sur papier",
      "Temps : leçons de 4 à 6 minutes qui trouvent leur place entre le travail et les rendez-vous",
      "Aucun vrai logiciel hôtelier n'est nécessaire ; les systèmes varient d'un hôtel à l'autre, donc le cours enseigne les étapes, pas les noms des menus",
      "Confidentialité : la pratique utilise uniquement des clients, des numéros de carte et des numéros de chambre inventés",
      "Les règles d'embauche varient : les limites d'âge pour les adolescents et les vérifications d'antécédents dépendent de l'État et de l'employeur"
    ],
    prerequisites: "Aucun. « L'excellence du service client » est un bon cours complémentaire pour les compétences générales de service."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir d'une offre d'emploi de réceptionniste", action: "énumérer les principales tâches de la réception, les compétences demandées par les hôtels et une certification adaptée au poste", standard: "en citant au moins quatre tâches et où vérifier la certification" },
    { id: "O2", condition: "Face à un client fictif qui a une réservation", action: "faire l'arrivée du client étape par étape, de l'accueil à la remise de la clé", standard: "sans sauter d'étape et sans dire le numéro de chambre à voix haute" },
    { id: "O3", condition: "À partir du folio d'un client fictif au départ", action: "expliquer chaque montant du folio et faire le départ du client", standard: "en expliquant chaque montant et en confiant toute erreur à un responsable ou en la corrigeant selon les règles" },
    { id: "O4", condition: "Face à un client mécontent ou à un hôtel complet", action: "résoudre le problème du client avec des excuses, des choix et une note de suivi", standard: "en restant calme et en proposant au client au moins deux choix" },
    { id: "O5", condition: "Face à une situation de confidentialité, de sécurité ou d'urgence à la réception", action: "réagir selon les règles de sécurité et de confidentialité de l'hôtel", standard: "sans jamais donner le numéro de chambre ni la clé d'un client, et en appelant le 911 ou un responsable si nécessaire" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Travailler à la réception",
      lessons: [
        {
          title: "Le métier de réceptionniste et le chemin pour y arriver",
          objectives: ["O1"],
          minutes: 5,
          goal: "Énumérer les principales tâches de la réception et la certification qui peut vous aider à être embauché.",
          text: [
            "La réception est le centre d'un hôtel. Les réceptionnistes (aussi appelés agents du service client) accueillent les clients, font leur arrivée et leur départ, prennent les réservations, répondent au téléphone, gèrent les paiements et les clés, résolvent les problèmes et transmettent les messages à l'entretien des chambres et à la maintenance. L'auditeur de nuit travaille la nuit, vérifie les chiffres de la journée et clôture la journée comptable.",
            "Les hôtels recrutent d'abord pour l'attitude et la fiabilité. Les offres demandent souvent une manière aimable, une parole claire, des bases en informatique, du soin avec l'argent liquide et les cartes, et la possibilité de travailler la nuit, le week-end et les jours fériés. Parler une deuxième langue est un atout dans beaucoup de villes.",
            "Une certification peut vous aider à vous démarquer. L'American Hotel & Lodging Educational Institute (AHLEI) propose le cours et l'examen en ligne START Certified Front Desk Representative (CFDR). Ce cours vous prépare au métier et à ce type d'examen ; il ne délivre pas la certification. Consultez la page de l'AHLEI pour les détails à jour, ou demandez à un hôtel s'il paie la formation. Certains employeurs proposent aussi des apprentissages rémunérés, publiés sur apprenticeship.gov.",
            "Adolescents : les emplois et les horaires autorisés dépendent de votre âge et de votre État. Consultez dol.gov/youthrules et le bureau du travail de votre État. Si vous avez un casier judiciaire, beaucoup d'hôtels embauchent de façon équitable : soyez honnête dans votre candidature et prêt à parler de ce que vous avez fait depuis."
          ],
          words: [["Réceptionniste", "l'employé de l'hôtel qui fait l'arrivée et le départ des clients et les aide pendant leur séjour ; aussi appelé agent du service client."], ["Auditeur de nuit", "le réceptionniste de nuit qui vérifie les montants et les paiements de la journée et clôture la journée comptable."], ["Certification", "un certificat qui montre que vous avez réussi un cours ou un examen."], ["AHLEI", "l'American Hotel & Lodging Educational Institute, qui propose des formations hôtelières et des examens de certification."]],
          slides: [
            { title: "Ce que fait la réception", bullets: ["Accueillir, faire l'arrivée et le départ des clients", "Prendre les réservations et répondre au téléphone", "Gérer les paiements et les clés des chambres", "Résoudre les problèmes et transmettre les messages"] },
            { title: "Ce que recherchent les hôtels", bullets: ["Aimable, clair et fiable", "Soigneux avec l'argent, les cartes et les clés", "Des bases en informatique", "Nuits, week-ends et jours fériés"] },
            { title: "Une certification qui peut aider", bullets: ["AHLEI START Certified Front Desk Representative (CFDR)", "Ce cours vous prépare ; l'examen de l'AHLEI la délivre", "Consultez la page de l'AHLEI pour les détails à jour"] },
            { title: "Vérifiez vos propres règles", bullets: ["Adolescents : dol.gov/youthrules et le bureau du travail de votre État", "Apprentissages : apprenticeship.gov", "Casier judiciaire : soyez honnête et montrez ce que vous avez fait depuis"] }
          ],
          sources: [
            { name: "AHLEI : cours et examen en ligne START Certified Front Desk Representative (CFDR)", url: "https://shopahlei.servsafebrands.com/start-cfdr-online-course-and-exam" },
            { name: "AHLEI : examens de certification", url: "https://shopahlei.servsafebrands.com/training-and-certification/resourcetype/certification-exam" },
            { name: "Apprenticeship.gov (ministère du Travail des États-Unis)", url: "https://www.apprenticeship.gov/" },
            { name: "YouthRules! (ministère du Travail des États-Unis)", url: "https://www.dol.gov/agencies/whd/youthrules" }
          ],
          tryIt: "Trouvez une vraie offre d'emploi de réceptionniste ou d'agent du service client près de chez vous (sur un site d'emploi ou la page carrières d'un hôtel). Sur papier, notez quatre tâches qu'elle cite, trois compétences qu'elle demande et les horaires. Entourez une compétence que vous avez déjà et une que vous devez développer.",
          youCanNow: "dire ce que fait un réceptionniste, citer les compétences demandées par les hôtels, et nommer une certification utile et où la vérifier.",
          quickCheck: [
            { objective: "O1", q: "Laquelle est une tâche normale de la réception ?", options: ["Réparer la climatisation d'une chambre", "Préparer le petit-déjeuner des clients", "Faire l'arrivée et le départ des clients", "Nettoyer la piscine"], answer: 2, why: "L'arrivée et le départ sont le cœur du travail de la réception ; les réparations, la cuisine et le ménage relèvent d'autres équipes." },
            { objective: "O1", q: "Que fait ce cours pour la certification CFDR ?", options: ["Il délivre le certificat CFDR", "Il vous prépare ; vous obtenez la certification par le cours et l'examen de l'AHLEI", "Il remplace toute autre formation", "C'est la même chose qu'une licence de l'État"], answer: 1, why: "L'AHLEI délivre la CFDR après son propre cours et son examen ; ce cours vous prépare seulement." }
          ]
        },
        {
          title: "Faire l'arrivée d'un client",
          objectives: ["O2"],
          minutes: 6,
          goal: "Faire l'arrivée d'un client fictif en sept étapes, de l'accueil à la clé.",
          text: [
            "L'arrivée est le premier vrai moment du client avec l'hôtel. Faites-la toujours dans le même ordre pour ne rien oublier, même quand il y a une file d'attente.",
            "Accueillez le client, trouvez la réservation et vérifiez que la pièce d'identité avec photo correspond au nom. Confirmez les dates, le type de chambre et le tarif. Prenez la carte de paiement, ou une caution selon les règles de l'hôtel ; beaucoup d'hôtels bloquent un montant sur la carte pour le séjour et les extras, et vous l'expliquez avec des mots simples.",
            "Remettez la carte-clé et montrez le numéro de chambre sur la pochette de la clé ou sur un papier, mais ne dites pas le numéro de chambre à voix haute : d'autres personnes dans le hall peuvent entendre. Expliquez l'essentiel (Wi-Fi, petit-déjeuner, heure de départ) et demandez si le client a besoin d'autre chose.",
            "Chaque hôtel utilise un logiciel, appelé système de gestion hôtelière (PMS, de l'anglais property management system), pour enregistrer tout cela. Les systèmes varient, et l'hôtel vous formera sur le sien ; les étapes restent les mêmes."
          ],
          steps: ["Accueillez le client avec un sourire et votre prénom.", "Trouvez la réservation et vérifiez que la pièce d'identité avec photo correspond.", "Confirmez les dates, le type de chambre et le tarif.", "Prenez la carte de paiement ou la caution et expliquez tout blocage.", "Préparez la carte-clé et écrivez le numéro de chambre sur la pochette ; ne le dites pas à voix haute.", "Expliquez le Wi-Fi, le petit-déjeuner et l'heure de départ.", "Demandez « Puis-je vous aider pour autre chose ? » et souhaitez un bon séjour."],
          words: [["Réservation", "une demande qui garde une chambre pour un client à certaines dates."], ["Tarif", "le prix de la chambre par nuit."], ["Blocage (pré-autorisation)", "un montant que l'hôtel bloque sur la carte du client pour couvrir le séjour et les extras ; ce n'est pas le paiement final."], ["Système de gestion hôtelière (PMS)", "le logiciel de l'hôtel pour les réservations, les chambres, les arrivées, les notes et les départs."]],
          slides: [
            { title: "L'arrivée, toujours de la même façon", bullets: ["Accueillez avec un sourire et votre prénom", "Trouvez la réservation et vérifiez la pièce d'identité", "Confirmez les dates, le type de chambre et le tarif"] },
            { title: "Paiement et clés", bullets: ["Prenez la carte ou la caution selon les règles", "Expliquez tout blocage avec des mots simples", "Préparez la carte-clé"] },
            { title: "La règle de confidentialité", bullets: ["Écrivez le numéro de chambre sur la pochette", "Montrez-le ; ne le dites jamais à voix haute", "D'autres personnes dans le hall peuvent entendre"] },
            { title: "Bien terminer", bullets: ["Wi-Fi, petit-déjeuner et heure de départ", "« Puis-je vous aider pour autre chose ? »", "Souhaitez un bon séjour"] }
          ],
          tryIt: "Avec un ami ou devant un miroir, faites l'arrivée d'un client inventé : « Mme Rivera, deux nuits, une chambre avec un grand lit. » Dites les sept étapes à voix haute. Écrivez la chambre 214 sur une pochette en papier et montrez-la au lieu de la dire. Faites-le deux fois, la deuxième en moins de trois minutes.",
          youCanNow: "faire l'arrivée d'un client en sept étapes et remettre la clé sans dire le numéro de chambre à voix haute.",
          quickCheck: [
            { objective: "O2", q: "Vous remettez la clé à un client. Que faites-vous avec le numéro de chambre ?", options: ["Le dire fort pour qu'il s'en souvienne", "Le dire à toute la file pour que tout le monde sache", "L'envoyer par SMS à un ami du client", "L'écrire sur la pochette de la clé et le montrer"], answer: 3, why: "Dire le numéro à voix haute permet à des inconnus dans le hall de savoir où loge le client." },
            { objective: "O2", q: "Que vérifiez-vous juste après avoir trouvé la réservation ?", options: ["Que la pièce d'identité avec photo correspond au nom de la réservation", "Le métier du client", "Comment le client est venu à l'hôtel", "L'adresse du client sur les réseaux sociaux"], answer: 0, why: "Comparer la pièce d'identité à la réservation garantit que la chambre va à la bonne personne." }
          ]
        },
        {
          title: "Lire le folio et faire le départ d'un client",
          objectives: ["O3"],
          minutes: 5,
          goal: "Expliquer chaque montant du folio d'un client et faire son départ.",
          text: [
            "Le folio est la note du client. Il indique le tarif de chaque nuit, les taxes et tous les extras, comme le parking, le service en chambre, le minibar ou des frais de départ tardif, ainsi que chaque paiement.",
            "Au départ, accueillez le client, demandez-lui comment s'est passé son séjour, et imprimez ou envoyez le folio par e-mail. Parcourez-le ligne par ligne si le client le souhaite, et écoutez tout ce qui n'allait pas pendant le séjour.",
            "Si le client conteste un montant, restez calme et regardez-le ensemble. Si c'est une erreur claire que l'hôtel vous autorise à corriger, corrigez-la et dites-le. Si vous n'avez pas le droit de la retirer, dites « Je vais chercher mon responsable pour régler cela » et ne vous disputez pas. Beaucoup d'hôtels proposent aussi le départ express par téléphone, télévision ou application.",
            "Protégez les données de carte : n'écrivez jamais et ne lisez jamais à voix haute un numéro de carte complet. Les folios montrent seulement les derniers chiffres."
          ],
          steps: ["Accueillez le client et demandez-lui comment s'est passé son séjour.", "Imprimez ou envoyez le folio par e-mail.", "Parcourez chaque montant si le client le demande.", "Corrigez une erreur claire si votre hôtel le permet ; sinon, appelez le responsable.", "Encaissez le paiement final, remerciez le client et invitez-le à revenir."],
          words: [["Folio", "la note du client, avec les nuits, les taxes, les extras et les paiements."], ["Extras (incidentals)", "les frais en plus pendant un séjour, comme le parking, les repas ou le téléphone."], ["Départ tardif", "quitter la chambre après l'heure normale de départ, parfois avec des frais."], ["Départ express", "partir sans passer par la réception, par téléphone, télévision ou application."]],
          slides: [
            { title: "Le folio est la note du client", bullets: ["Le tarif de chaque nuit, plus les taxes", "Extras : parking, repas, départ tardif", "Chaque paiement effectué"] },
            { title: "Faire le départ", bullets: ["Demandez comment s'est passé le séjour", "Imprimez ou envoyez le folio par e-mail", "Parcourez les montants si le client le demande"] },
            { title: "Un montant est contesté", bullets: ["Restez calme et regardez-le ensemble", "Corrigez une erreur claire si vous en avez le droit", "Sinon : « Je vais chercher mon responsable. »"] },
            { title: "Protégez les données de carte", bullets: ["N'écrivez jamais un numéro de carte complet", "Ne le lisez jamais à voix haute", "Les folios montrent seulement les derniers chiffres"] }
          ],
          tryIt: "Faites sur papier un folio d'entraînement pour un client inventé : deux nuits à 129 $, la taxe sur une ligne à part (utilisez un montant inventé), un parking à 15 $ par nuit, et un service en chambre de 12 $ que le client dit ne pas avoir commandé. Faites le total, puis écrivez ce que vous diriez sur chaque ligne et comment vous traiteriez le montant du service en chambre.",
          youCanNow: "lire un folio ligne par ligne, expliquer chaque montant et traiter avec calme un montant contesté selon les règles de l'hôtel.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'un folio ?", options: ["La clé de la chambre du client", "La note du client avec les montants et les paiements", "Une liste des règles de l'hôtel", "Le planning du ménage"], answer: 1, why: "Le folio indique chaque nuit, taxe, extra et paiement du séjour." },
            { objective: "O3", q: "Un client conteste un montant que vous n'avez pas le droit de retirer. Que dites-vous ?", options: ["« Tant pis, vous devez le payer. »", "« Je vais juste le supprimer. »", "« Je vais chercher mon responsable pour régler cela. »", "« Appelez votre banque. »"], answer: 2, why: "Appeler un responsable vous garde calme et dans les règles, et donne une réponse au client." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Travailler à la réception",
        questions: [
          { objective: "O1", q: "Quel employé vérifie la nuit les montants de la journée et clôture la journée comptable ?", options: ["L'auditeur de nuit", "La femme de chambre", "Le cuisinier", "Le voiturier"], answer: 0, why: "L'auditeur de nuit équilibre les montants et les paiements de la journée et clôture la journée." },
          { objective: "O1", q: "Où vérifiez-vous les détails à jour de la certification START CFDR ?", options: ["Dans une publication sur les réseaux sociaux", "Auprès d'un ami qui en a entendu parler", "Sur n'importe quel site qui vend un certificat", "Sur la page officielle de l'AHLEI"], answer: 3, why: "L'AHLEI propose la CFDR, donc sa page officielle a les détails à jour." },
          { objective: "O2", q: "À l'arrivée, dans un hall plein de monde, un client demande : « Quelle est ma chambre ? » Que faites-vous ?", options: ["Dire le numéro fort", "Montrer le numéro écrit sur la pochette de la clé", "Refuser de le dire", "L'écrire sur le tableau du hall"], answer: 1, why: "Montrer le numéro écrit informe le client sans informer tout le monde." },
          { objective: "O2", q: "Pourquoi expliquez-vous le blocage sur la carte à l'arrivée ?", options: ["Pour que le client sache qu'un montant est bloqué pour le séjour et les extras, et que ce n'est pas le paiement final", "Pour que le client paie deux fois", "Parce que c'est la note finale", "Les blocages sont secrets et ne s'expliquent pas"], answer: 0, why: "Une explication claire évite les surprises et les plaintes quand les clients voient le blocage sur leur carte." },
          { objective: "O3", q: "Un folio indique trois nuits de parking, mais le client est resté deux nuits. Quelle est la meilleure première étape ?", options: ["L'ignorer", "Dire au client qu'il a tort", "Regarder ensemble et corriger ou appeler un responsable selon les règles", "Facturer une nuit de plus pour que ça corresponde"], answer: 2, why: "Vérifier ensemble et suivre les règles de correction, c'est traiter le client de façon juste." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Problèmes, confidentialité et votre poste",
      lessons: [
        {
          title: "Résoudre les problèmes des clients, même quand l'hôtel est complet",
          objectives: ["O4"],
          minutes: 5,
          goal: "Résoudre le problème d'un client avec des excuses, deux choix et une note de suivi.",
          text: [
            "Dans les hôtels, des choses tournent mal : une chambre n'est pas prête, la climatisation fait du bruit, une réservation a disparu. Le client est fatigué et veut une solution. Votre travail est de rester calme, de prendre le problème en charge et de proposer des choix.",
            "Utilisez quatre gestes : écoutez sans interrompre, excusez-vous (« Je suis désolé, ce n'est pas le séjour que nous voulons pour vous »), proposez au moins deux choix (une autre chambre, une réparation à une heure précise, une offre du responsable), puis faites le suivi et notez-le dans le cahier de liaison pour que l'équipe suivante soit au courant.",
            "Parfois, un hôtel est en surréservation et un client qui a réservé n'a pas de chambre. L'hôtel peut alors « reloger » le client (en anglais, walk) : lui réserver une chambre dans un hôtel proche. Suivez la règle de relogement de votre hôtel et appelez un responsable. Ne promettez jamais de l'argent ou des nuits gratuites que vous n'avez pas le droit de donner.",
            "Si un client crie, menace ou devient dangereux, vous n'avez pas à gérer cela seul. Reculez et appelez votre responsable ou la sécurité."
          ],
          steps: ["Écoutez tout le problème sans interrompre.", "Excusez-vous et remerciez le client de vous l'avoir dit.", "Proposez au moins deux choix que vous avez le droit de donner.", "Faites ce que vous avez promis, ou appelez un responsable.", "Faites le suivi avec le client et notez-le dans le cahier de liaison."],
          words: [["Surréservation", "quand l'hôtel a plus de réservations que de chambres."], ["Reloger un client (walk)", "réserver une chambre dans un autre hôtel proche pour un client qui ne peut pas avoir de chambre, selon la règle de l'hôtel."], ["Cahier de liaison", "un registre écrit ou informatique où la réception note les problèmes et les messages pour l'équipe suivante."]],
          slides: [
            { title: "Quatre gestes pour tout problème", bullets: ["Écoutez sans interrompre", "Excusez-vous et remerciez", "Proposez au moins deux choix", "Faites le suivi et notez-le dans le cahier"] },
            { title: "Quand l'hôtel est complet", bullets: ["L'hôtel peut « reloger » un client dans un hôtel proche", "Suivez la règle de relogement et appelez un responsable", "Ne promettez jamais ce que vous ne pouvez pas donner"] },
            { title: "Si un client devient dangereux", bullets: ["Reculez du comptoir", "Appelez votre responsable ou la sécurité", "Vous ne gérez pas les menaces seul"] }
          ],
          tryIt: "Écrivez ce que vous diriez à ce client : « J'ai réservé une chambre avec deux lits et vous m'avez donné un seul grand lit. Mes enfants sont avec moi. » Écrivez vos excuses, deux choix que vous pourriez proposer et la note d'une ligne que vous mettriez dans le cahier de liaison. Puis dites-le à voix haute.",
          youCanNow: "calmer un client mécontent, proposer deux choix, faire le suivi et noter le problème, et savoir quand appeler un responsable.",
          quickCheck: [
            { objective: "O4", q: "La chambre d'un client n'est pas prête. Quelle réponse suit les quatre gestes ?", options: ["« Ce n'est pas ma faute, revenez plus tard. »", "« Les chambres ne sont jamais prêtes à l'heure. »", "« Voici une semaine gratuite. »", "« Je suis désolé. Je peux garder vos bagages et vous appeler avant 15 h, ou chercher une autre chambre tout de suite. »"], answer: 3, why: "Elle présente des excuses et propose deux choix que le réceptionniste peut donner." },
            { objective: "O4", q: "L'hôtel est en surréservation et un client n'a pas de chambre. Que faites-vous ?", options: ["Suivre la règle de relogement et appeler un responsable", "Dire au client de dormir dans le hall", "Promettre un remboursement d'un mois entier", "Annuler la chambre d'un autre client sans demander"], answer: 0, why: "Reloger un client selon la règle, avec un responsable, c'est ainsi que les hôtels gèrent la surréservation de façon juste." }
          ]
        },
        {
          title: "Confidentialité, clés et sécurité des clients",
          objectives: ["O5"],
          minutes: 6,
          goal: "Réagir aux situations de confidentialité, de clés et de sécurité selon les règles de l'hôtel.",
          text: [
            "La confidentialité protège les clients. Ne dites jamais à une personne qui appelle ou qui passe si quelqu'un loge à l'hôtel ni dans quelle chambre. Dites « Je ne peux pas donner d'informations sur les clients, mais je peux vous passer la chambre si la personne loge ici » ou prenez un message. Ne donnez jamais une clé à quelqu'un dont le nom n'est pas sur la chambre sans suivre la procédure d'identité de l'hôtel.",
            "Cartes-clés : vérifiez la pièce d'identité avant de faire une nouvelle clé, ne laissez jamais les cartes-clés ni l'encodeur de clés à portée des clients, et signalez tout de suite la perte d'un passe général.",
            "Animaux d'assistance : selon l'ADA, quand ce n'est pas évident, le personnel peut poser seulement deux questions : le chien est-il nécessaire à cause d'un handicap, et quel travail ou quelle tâche a-t-il appris à faire. Vous ne pouvez pas demander de papiers ni faire payer des frais d'animal pour un animal d'assistance.",
            "Soyez attentif aux signes de traite des êtres humains, comme une personne qui semble contrôlée par quelqu'un d'autre, à qui on dicte quoi dire, ou qui a peur. Ne confrontez personne. Prévenez votre responsable et suivez la règle de l'hôtel ; vous pouvez signaler au numéro national contre la traite des êtres humains, le 1-888-373-7888. En cas d'urgence (incendie, malaise, violence), appelez d'abord le 911 (ou votre numéro d'urgence local), puis votre responsable."
          ],
          steps: ["Ne confirmez jamais qu'un client loge à l'hôtel et ne donnez jamais un numéro de chambre.", "Proposez de passer l'appel à la chambre ou de prendre un message.", "Vérifiez la pièce d'identité avant de faire toute nouvelle clé.", "Pour un animal d'assistance, posez seulement les deux questions autorisées si nécessaire.", "Signalez les signes de traite à votre responsable ; ne confrontez personne.", "En cas d'urgence, appelez d'abord le 911, puis votre responsable."],
          words: [["Contrôle des clés", "les règles pour faire, ranger et suivre les clés des chambres afin que seules les bonnes personnes entrent."], ["ADA", "l'Americans with Disabilities Act, la loi des États-Unis qui protège les personnes handicapées, y compris leur usage d'animaux d'assistance."], ["Animal d'assistance", "selon l'ADA, un chien dressé pour faire un travail ou des tâches pour une personne handicapée."], ["Traite des êtres humains", "utiliser la force, la tromperie ou les menaces pour obliger quelqu'un à travailler ou à faire des actes sexuels."]],
          slides: [
            { title: "Protégez la vie privée des clients", bullets: ["Ne confirmez jamais qui loge à l'hôtel", "Ne donnez jamais un numéro de chambre", "« Je peux vous passer la chambre ou prendre un message. »"] },
            { title: "Contrôle des clés", bullets: ["Vérifiez la pièce d'identité avant toute nouvelle clé", "Gardez les clés et l'encodeur hors de portée", "Signalez tout de suite un passe général perdu"] },
            { title: "Animaux d'assistance (ADA)", bullets: ["Demandez seulement : est-il nécessaire pour un handicap ?", "Et : quel travail ou quelle tâche a-t-il appris à faire ?", "Pas de papiers, pas de frais d'animal pour un animal d'assistance"] },
            { title: "Signes de traite et urgences", bullets: ["Repérez une personne contrôlée, guidée ou qui a peur", "Ne confrontez pas ; prévenez votre responsable", "Numéro d'aide : 1-888-373-7888", "Urgence : appelez d'abord le 911, puis votre responsable"] }
          ],
          sources: [
            { name: "ADA.gov : exigences de l'ADA sur les animaux d'assistance", url: "https://www.ada.gov/resources/service-animals-2010-requirements/" },
            { name: "Blue Campaign du DHS : signes de traite des êtres humains", url: "https://www.dhs.gov/blue-campaign/indicators-human-trafficking" },
            { name: "AHLA Foundation : No Room For Trafficking (formation gratuite pour le personnel hôtelier)", url: "https://www.ahlafoundation.org/nrft/" }
          ],
          tryIt: "Écrivez votre réponse à chaque cas : (1) Une personne appelle : « Passez-moi ma femme, Jane Lee. Dans quelle chambre est-elle ? » (2) Un homme sans pièce d'identité dit qu'il a perdu sa clé de la chambre 305. (3) Un client a un chien ; vous n'êtes pas sûr que ce soit un animal d'assistance. Ensuite, si vous le pouvez, suivez la formation gratuite de 30 minutes « Your Role in Preventing Human Trafficking » (votre rôle dans la prévention de la traite des êtres humains), accessible depuis la page No Room For Trafficking de l'AHLA Foundation.",
          youCanNow: "protéger la vie privée des clients au téléphone et au comptoir, contrôler les clés, accueillir un animal d'assistance selon l'ADA, et signaler correctement les signes de traite et les urgences.",
          quickCheck: [
            { objective: "O5", q: "Une personne appelle et demande dans quelle chambre est un client. Que dites-vous ?", options: ["Donner le numéro de chambre", "« Je ne peux pas donner d'informations sur les clients, mais je peux vous passer la chambre ou prendre un message. »", "« Elle est partie il y a une heure. »", "« Rappelez quand j'aurai fini mon service. »"], answer: 1, why: "Ne confirmez jamais qu'un client loge à l'hôtel et ne donnez jamais un numéro de chambre ; passer l'appel ou prendre un message protège le client." },
            { objective: "O5", q: "Un client a un chien et il n'est pas évident que ce soit un animal d'assistance. Que pouvez-vous demander ?", options: ["Les papiers de certification du chien", "Quel est le handicap du client", "De payer d'abord les frais d'animal", "Si le chien est nécessaire à cause d'un handicap et quelle tâche il a appris à faire"], answer: 3, why: "L'ADA autorise seulement ces deux questions ; pas de papiers et pas de frais d'animal pour un animal d'assistance." }
          ]
        },
        {
          title: "Votre liste de contrôle de poste et votre plan d'emploi",
          objectives: ["O1", "O2"],
          minutes: 5,
          goal: "Rédiger une liste de contrôle pour un poste à la réception et un plan de 30 jours vers un emploi de réceptionniste.",
          text: [
            "Les bons réceptionnistes travaillent avec une liste de contrôle. Au début du poste : arrivez en avance, lisez le cahier de liaison, comptez votre caisse avec un responsable ou selon la procédure de l'hôtel, et vérifiez les arrivées, les départs et les chambres prêtes du jour.",
            "Pendant le poste : accueillez chaque client, faites les arrivées et les départs avec les mêmes étapes, répondez au téléphone avant la troisième sonnerie si possible, gardez le comptoir rangé et les clés en sécurité. À la fin : terminez les tâches en cours, recomptez votre caisse et notez dans le cahier tout ce que l'équipe suivante doit savoir.",
            "Maintenant, planifiez votre parcours. Choisissez trois hôtels près de chez vous, pratiquez votre script d'arrivée avec une vraie personne, et décidez quand vous consulterez la page CFDR de l'AHLEI ou demanderez à un employeur s'il paie la formation. Mettez de vraies dates à chaque étape. Apportez votre liste et votre script à l'entretien : cela montre que vous connaissez déjà le métier."
          ],
          steps: ["Écrivez les tâches du début de poste.", "Écrivez les tâches pendant le poste.", "Écrivez les tâches de fin de poste.", "Écrivez votre script d'arrivée avec la règle de confidentialité.", "Écrivez un plan de 30 jours avec des dates : trois hôtels, la pratique et la vérification de la certification."],
          words: [["Caisse (fonds de caisse)", "l'argent liquide dont un réceptionniste est responsable pendant un poste ; il est compté au début et à la fin."], ["Arrivées et départs", "les listes des clients qui arrivent et qui partent aujourd'hui."], ["Passation de poste", "transmettre les tâches en cours et les notes à l'équipe suivante."]],
          slides: [
            { title: "Début de poste", bullets: ["Arrivez en avance et lisez le cahier de liaison", "Comptez la caisse selon la procédure de l'hôtel", "Vérifiez arrivées, départs et chambres prêtes"] },
            { title: "Pendant le poste", bullets: ["Toujours les mêmes étapes d'arrivée et de départ", "Répondez au téléphone vite et poliment", "Gardez le comptoir rangé et les clés en sécurité"] },
            { title: "Fin de poste", bullets: ["Terminez les tâches en cours", "Recomptez la caisse", "Notez ce que l'équipe suivante doit savoir"] },
            { title: "Votre plan de 30 jours", bullets: ["Trois hôtels où postuler, avec des dates", "Pratiquez votre script avec une vraie personne", "Consultez la page CFDR de l'AHLEI ou demandez une formation"] }
          ],
          tryIt: "Préparez votre dossier sur papier ou dans un document gratuit : votre liste de contrôle (début, pendant, fin), votre script d'arrivée en sept étapes et un plan de 30 jours avec de vraies dates. Demandez à quelqu'un de jouer le client pendant que vous lisez le script.",
          youCanNow: "montrer à un recruteur une liste de contrôle pour un poste à la réception, un script d'arrivée et un plan daté vers l'emploi et une certification.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qui a sa place dans un plan de 30 jours pour un emploi à la réception ?", options: ["« Un jour, chercher du travail »", "« Postuler dans trois hôtels nommés avant le 15 et pratiquer mon script le 10 »", "« Payer quelqu'un pour un emploi garanti »", "« Attendre qu'un hôtel m'appelle »"], answer: 1, why: "Un vrai plan nomme des étapes précises avec des dates." },
            { objective: "O2", q: "Quelle est une bonne tâche de début de poste ?", options: ["Lire le cahier de liaison et vérifier les arrivées du jour", "Laisser la caisse sans la compter", "Éteindre les téléphones", "Distribuer des clés en plus pour gagner du temps"], answer: 0, why: "Lire le cahier et les arrivées vous dit ce dont le poste a besoin avant l'arrivée des clients." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Problèmes, confidentialité et votre poste",
        questions: [
          { objective: "O4", q: "Que devez-vous toujours faire après avoir résolu le problème d'un client ?", options: ["L'oublier", "En parler sur Internet", "Faire le suivi et le noter dans le cahier de liaison", "Facturer un supplément au client"], answer: 2, why: "Faire le suivi et le noter informe l'équipe suivante et montre au client que vous vous en souciez." },
          { objective: "O4", q: "Un client commence à crier des menaces à la réception. Que faites-vous ?", options: ["Crier aussi", "Reculer et appeler votre responsable ou la sécurité", "Sauter par-dessus le comptoir", "L'ignorer et continuer à taper"], answer: 1, why: "Vous ne gérez pas les menaces seul ; reculer et demander de l'aide protège tout le monde." },
          { objective: "O5", q: "Un visiteur sans pièce d'identité dit qu'il a perdu la clé de la chambre 305. Que faites-vous ?", options: ["Faire une clé rapidement", "Lui donner le passe général", "Lui dire qui loge au 305", "Suivre la procédure d'identité ; pas de clé sans elle"], answer: 3, why: "Le contrôle des clés, c'est vérifier la pièce d'identité avant toute nouvelle clé, pour que des inconnus n'entrent pas dans les chambres." },
          { objective: "O5", q: "Un client s'effondre dans le hall. Quelle est votre première étape ?", options: ["Appeler le 911 (ou votre numéro d'urgence local), puis votre responsable", "Terminer l'arrivée du client suivant", "En parler sur les réseaux", "Attendre de voir s'il se relève"], answer: 0, why: "En cas d'urgence médicale, appelez d'abord le 911 ; prévenez ensuite votre responsable." },
          { objective: "O5", q: "Vous remarquez un jeune qui semble contrôlé et guidé par un adulte. Que faites-vous ?", options: ["Confronter l'adulte", "Demander fort au jeune s'il est victime de traite", "Ne pas confronter ; prévenir votre responsable et suivre la règle de l'hôtel", "L'ignorer"], answer: 2, why: "Confronter peut mettre des personnes en danger ; signalez-le à votre responsable et au bon numéro d'aide." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Métiers de l'hôtellerie : réception et service client",
    questions: [
      { objective: "O1", q: "Laquelle est une tâche principale d'un réceptionniste ?", options: ["Réparer la plomberie des chambres", "Prendre les réservations et répondre au téléphone", "Laver le linge de l'hôtel", "Cuisiner le service en chambre"], answer: 1, why: "Les réservations et le téléphone relèvent de la réception ; le reste relève d'autres équipes." },
      { objective: "O1", q: "Qui propose la certification START Certified Front Desk Representative (CFDR) ?", options: ["L'American Hotel & Lodging Educational Institute (AHLEI)", "L'IRS (l'administration fiscale des États-Unis)", "Le DMV de votre État", "N'importe quel client de l'hôtel"], answer: 0, why: "L'AHLEI propose le cours et l'examen CFDR." },
      { objective: "O1", q: "Un adolescent veut un emploi à la réception. Où doit-il vérifier les emplois et horaires autorisés ?", options: ["Ce que devine un ami", "N'importe quelle offre d'emploi", "dol.gov/youthrules et le bureau du travail de son État", "Nulle part ; les règles pour les jeunes sont les mêmes partout"], answer: 2, why: "Les règles de travail des jeunes dépendent de l'âge et de l'État, donc consultez les pages officielles." },
      { objective: "O1", q: "Que recherchent d'abord les hôtels chez un nouveau réceptionniste ?", options: ["Seulement des années d'expérience en hôtellerie", "Seulement un diplôme universitaire", "Seulement avoir une voiture", "Une personne aimable et fiable, soigneuse avec l'argent et les clés"], answer: 3, why: "Les hôtels forment souvent sur le tas et recrutent pour l'attitude et la fiabilité." },
      { objective: "O2", q: "Quel est le bon ordre pour commencer une arrivée ?", options: ["Faire la clé, puis accueillir le client", "Accueillir, trouver la réservation, vérifier la pièce d'identité", "Encaisser, puis savoir qui est le client", "Dire le numéro de chambre, puis accueillir"], answer: 1, why: "Accueillez d'abord, puis trouvez la réservation et comparez la pièce d'identité." },
      { objective: "O2", q: "Qu'est-ce qu'un système de gestion hôtelière (PMS) ?", options: ["Le logiciel de l'hôtel pour les réservations, les chambres et les notes", "Un planning de ménage", "Une application de parking", "Un type de carte-clé"], answer: 0, why: "Le PMS enregistre les réservations, les arrivées, les notes et les départs." },
      { objective: "O2", q: "Comment donnez-vous son numéro de chambre à un client à l'arrivée ?", options: ["L'annoncer à tout le hall", "Le crier pendant qu'il s'éloigne", "L'écrire sur la pochette de la clé et le montrer", "L'afficher sur le tableau"], answer: 2, why: "Écrire et montrer le numéro le garde confidentiel." },
      { objective: "O2", q: "Que devez-vous expliquer avant que le client quitte le comptoir ?", options: ["L'adresse personnelle du responsable", "Les numéros de chambre des autres clients", "Les codes d'alarme de l'hôtel", "Le Wi-Fi, le petit-déjeuner et l'heure de départ"], answer: 3, why: "Ces informations de base aident le client et réduisent les appels à la réception." },
      { objective: "O3", q: "Lequel est un extra ?", options: ["Le parking ou le service en chambre", "Le loyer du client chez lui", "La facture d'électricité de l'hôtel", "Votre salaire"], answer: 0, why: "Les extras sont les frais en plus pendant un séjour, comme le parking et les repas." },
      { objective: "O3", q: "Comment un numéro de carte complet doit-il apparaître quand vous parlez de la note avec un client ?", options: ["Lu à voix haute en entier", "Écrit sur un papier autocollant", "Jamais lu à voix haute ni écrit ; seulement les derniers chiffres", "Envoyé par SMS au client"], answer: 2, why: "Protéger les numéros de carte empêche la fraude ; les folios montrent seulement les derniers chiffres." },
      { objective: "O3", q: "Un client dit qu'un service en chambre n'est pas le sien. Vous n'avez pas le droit de retirer des montants. Que faites-vous ?", options: ["Discuter jusqu'à ce qu'il paie", "Le supprimer quand même", "Lui dire de contester auprès de sa banque", "Regarder avec lui et appeler votre responsable"], answer: 3, why: "Rester calme et faire venir un responsable respecte les règles et donne une réponse au client." },
      { objective: "O3", q: "Qu'est-ce que le départ express ?", options: ["Partir sans passer par la réception, par téléphone, télévision ou application", "Partir sans payer", "Un ascenseur plus rapide", "Partir seulement à minuit"], answer: 0, why: "Le départ express permet aux clients de partir sans faire la queue." },
      { objective: "O4", q: "Quels sont les quatre gestes face au problème d'un client ?", options: ["Ignorer, attendre, accuser, partir", "Écouter, s'excuser, proposer des choix, faire le suivi et noter", "Discuter, rembourser, s'excuser, oublier", "Transférer, raccrocher, noter, recommencer"], answer: 1, why: "Écouter, s'excuser, proposer des choix et faire le suivi résout la plupart des problèmes." },
      { objective: "O4", q: "Que veut dire « reloger un client » (walk) ?", options: ["Accompagner un client jusqu'à l'ascenseur", "Promener le chien d'un client", "Réserver une chambre dans un hôtel proche quand le vôtre est en surréservation", "Demander à un client de partir"], answer: 2, why: "Les hôtels relogent les clients dans un autre hôtel, selon leur règle, quand ils sont en surréservation." },
      { objective: "O4", q: "Un client veut une semaine gratuite parce que la télévision ne marchait pas. Vous n'avez pas le droit de la donner. Que faites-vous ?", options: ["La promettre quand même", "Lui dire qu'il ment", "Lui raccrocher au nez", "S'excuser, proposer des choix autorisés et appeler un responsable pour toute demande en plus"], answer: 3, why: "Ne promettez jamais ce que vous ne pouvez pas donner ; proposez ce que vous pouvez et faites venir un responsable." },
      { objective: "O4", q: "Pourquoi noter les problèmes des clients dans le cahier de liaison ?", options: ["Pour que l'équipe suivante soit au courant et puisse faire le suivi", "Pour accuser le client", "Parce que les clients le lisent", "Ce n'est pas nécessaire"], answer: 0, why: "Le cahier transmet les informations importantes à l'équipe suivante." },
      { objective: "O5", q: "Quelqu'un à la réception demande : « Mon patron, M. Diaz, loge-t-il ici ? » Que dites-vous ?", options: ["« Oui, chambre 410. »", "« Je ne peux pas donner d'informations sur les clients, mais je peux prendre un message. »", "« Il est arrivé hier. »", "« Je vais chercher son adresse personnelle. »"], answer: 1, why: "Vous ne confirmez jamais qu'un client loge à l'hôtel ; prendre un message le protège." },
      { objective: "O5", q: "Selon l'ADA, que ne pouvez-vous PAS faire avec un animal d'assistance ?", options: ["Demander si le chien est nécessaire à cause d'un handicap", "Demander quelle tâche il a appris à faire", "Faire payer des frais d'animal ou demander des papiers", "Accueillir le client"], answer: 2, why: "L'ADA interdit les frais d'animal et les demandes de papiers pour les animaux d'assistance." },
      { objective: "O5", q: "Quel est le numéro national contre la traite des êtres humains ?", options: ["411", "1-800-555-0000", "Le poste téléphonique de la réception", "1-888-373-7888"], answer: 3, why: "Le 1-888-373-7888 est le numéro national contre la traite indiqué par le DHS." },
      { objective: "O5", q: "L'alarme incendie sonne et vous sentez de la fumée. Que faites-vous d'abord ?", options: ["Appeler le 911 (ou votre numéro d'urgence local) et suivre le plan d'urgence de l'hôtel", "Terminer l'arrivée en cours", "Publier une vidéo", "Attendre qu'un client se plaigne"], answer: 0, why: "En cas d'urgence, appelez d'abord le 911 et suivez le plan d'urgence de l'hôtel." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  // test de départ : ces questions du quiz, avant la Leçon 1, pour que le quiz montre les progrès de chaque apprenant
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 4, 6, 8, 10, 12, 13, 16, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur chaque ligne. Si une ligne est à Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Liste de contrôle du poste", objective: "O1", notYet: "Il manque le début, le milieu ou la fin du poste.", meets: "Elle a des tâches de début, pendant et fin, dont le cahier de liaison et le comptage de la caisse.", exceeds: "Elle ajoute aussi le contrôle des clés et le téléphone, et tient sur une page claire." },
      { name: "Script d'arrivée", objective: "O2", notYet: "Des étapes manquent ou le script dit le numéro de chambre à voix haute.", meets: "Les sept étapes dans l'ordre, avec le numéro de chambre écrit et montré, pas dit.", exceeds: "Lu à voix haute à un partenaire en moins de trois minutes, avec un accueil et une conclusion chaleureux." },
      { name: "Folio et départ", objective: "O3", notYet: "Ne sait pas expliquer les montants, ou se disputerait pour un montant contesté.", meets: "Explique chaque montant d'un folio d'entraînement et dit corriger une erreur claire ou appeler un responsable.", exceeds: "Explique aussi un blocage sur la carte avec des mots simples et ne montre jamais un numéro de carte complet." },
      { name: "Résolution de problèmes", objective: "O4", notYet: "La réponse se dispute, accuse ou promet ce que le réceptionniste ne peut pas donner.", meets: "S'excuse, propose au moins deux choix autorisés et écrit une note dans le cahier de liaison.", exceeds: "Dit aussi quand appeler un responsable et comment faire le suivi avec le client." },
      { name: "Confidentialité et sécurité", objective: "O5", notYet: "Donne un numéro de chambre, donne une clé sans pièce d'identité ou confronterait un trafiquant présumé.", meets: "Protège les informations des clients, vérifie l'identité pour les clés, et signale correctement les urgences et les signes de traite.", exceeds: "Accueille aussi un animal d'assistance avec seulement les deux questions de l'ADA et a suivi une formation gratuite sur la traite." },
      { name: "Plan de 30 jours", objective: "O1", notYet: "Pas de dates, ou pas d'hôtels nommés.", meets: "Trois hôtels nommés, une date de pratique et une date pour consulter la page CFDR ou demander une formation.", exceeds: "Indique aussi qui sera sa référence et comment il se rendra à chaque poste." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille)",
      "Apprenants qui postulent à au moins trois emplois en hôtellerie dans les 30 jours (enquête de suivi)",
      "Apprenants embauchés à la réception, au service client ou dans un autre emploi d'hôtel dans les 90 jours",
      "Apprenants qui commencent une certification de réceptionniste comme la CFDR de l'AHLEI dans les 90 jours",
      "Les hôtels partenaires indiquent que les nouvelles recrues ont besoin de moins de formation de base à la réception"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Internet, ou les leçons sur papier",
      "Du papier et un stylo pour les folios d'entraînement, les pochettes de clé et la liste de contrôle",
      "Un partenaire pour jouer le client (un ami, un membre de la famille ou un camarade)",
      "Environ 75 minutes en tout, en séances courtes : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Installez une fausse réception avec une table, une pochette de clé en papier et un folio d'entraînement ; les apprenants jouent à tour de rôle le réceptionniste et le client.",
      "Utilisez uniquement des noms de clients, des numéros de carte et des numéros de chambre inventés dans toute la pratique.",
      "Invitez le responsable d'un hôtel local à observer les jeux de rôle d'arrivée et à parler de sa façon de recruter.",
      "Programmes pour les jeunes : vérifiez les règles de l'État sur les horaires de travail des adolescents avant tout placement ; programmes de réinsertion : orientez les apprenants vers des employeurs connus pour donner une seconde chance.",
      "Évaluez la tâche finale avec la grille et donnez un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
