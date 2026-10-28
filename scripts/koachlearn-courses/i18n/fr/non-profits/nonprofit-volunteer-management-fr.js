"use strict";

// Koach Learn course (French translation of non-profits/nonprofit-volunteer-management.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nonprofit-volunteer-management-fr",
  lang: "fr",
  translationOf: "nonprofit-volunteer-management",
  category: "Non Profits",
  name: "Gérer des bénévoles",
  skills: "Rédiger des fiches de mission bénévole, Recruter et vérifier les bénévoles, Accueillir et former, Planifier et encadrer, Reconnaître et fidéliser, Suivre les heures de bénévolat",
  outcome: "gérer un programme de bénévolat du début à la fin : rédiger une fiche de mission claire, recruter les bénévoles et les vérifier en toute sécurité, les accueillir et les former, planifier leurs créneaux et les encadrer, les remercier de façon à ce qu'ils reviennent, et suivre leurs heures.",
  about: [
    "Ce cours s'adresse aux coordinateurs de bénévoles, au personnel des associations, aux responsables d'églises et de ministères, aux associations de parents d'élèves, aux clubs sportifs de jeunes, aux banques alimentaires et à tous ceux qui comptent sur des bénévoles.",
    "Les bénévoles donnent leur temps gratuitement : la façon dont vous les gérez décide s'ils reviennent. Vous apprendrez à rédiger des fiches de mission, à trouver et vérifier les bonnes personnes (y compris la vérification des antécédents pour les missions avec des enfants ou des adultes vulnérables), à les former, à planifier leurs créneaux et à les encadrer, à les remercier et à les garder, et à suivre leurs heures.",
    "Chaque leçon dure environ cinq minutes, avec une tâche \"Essayez maintenant\" que vous pouvez utiliser pour une vraie mission bénévole. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Pour les questions juridiques, d'assurance et de fiscalité, consultez un professionnel et les sources officielles citées dans les leçons. (Si vous voulez utiliser l'IA pour trouver des bénévoles, voyez le cours sur l'IA pour recruter des bénévoles.)"
  ],
  finalTask: "Préparez un kit bénévole pour une vraie mission : une fiche de mission, un message de recrutement et les étapes de vérification (avec une vérification des antécédents si la mission concerne des enfants ou des adultes vulnérables), le plan d'une séance d'accueil de 30 minutes, un planning mensuel avec un responsable nommé, deux idées pour remercier, et une simple feuille de présence ou un tableur qui suit les heures.",
  chapters: [
    {
      name: "Chapitre 1 : Faire venir des bénévoles",
      lessons: [
        {
          title: "Rédiger une fiche de mission bénévole",
          minutes: 5,
          goal: "Rédiger une fiche de mission claire et engageante pour un poste bénévole.",
          text: [
            "Les bénévoles font de leur mieux quand ils savent exactement ce qu'on attend d'eux. Une fiche de mission ressemble à une courte fiche de poste : elle dit quelle est la mission, pourquoi elle compte, ce que le bénévole fera, le temps demandé, les compétences ou qualités utiles, la formation ou la vérification prévue, et à qui il rend compte.",
            "Rendez-la engageante. Commencez par l'impact : \"Aidez 200 familles à recevoir des courses chaque samedi.\" Soyez honnête sur le temps, y compris la durée d'engagement que vous espérez (un seul événement, ou six mois). Proposez des missions courtes et souples en plus des longues ; beaucoup de gens peuvent donner deux heures, mais pas chaque semaine.",
            "Rédigez une fiche séparée pour chaque mission. Une banque alimentaire peut avoir des accueillants, des trieurs, des chauffeurs et une aide pour la saisie de données, chacun avec des besoins différents."
          ],
          steps: ["Nommez la mission et dites pourquoi elle compte.", "Listez ce que le bénévole fera.", "Dites quand, combien de temps et pendant combien de mois.", "Listez les compétences, les qualités et les limites d'âge éventuelles.", "Indiquez la formation, la vérification et à qui il rend compte."],
          words: [["Fiche de mission", "un court texte qui décrit un poste bénévole : quoi, quand, pourquoi, et ce qui est nécessaire."], ["Coordinateur de bénévoles", "la personne qui recrute, organise et soutient les bénévoles."]],
          slides: [
            { title: "Une fiche de mission indique", bullets: ["La mission et pourquoi elle compte", "Ce qu'ils feront, quand et combien de temps", "Les compétences, la formation et la vérification", "À qui ils rendent compte"] },
            { title: "Rendez-la engageante", bullets: ["Commencez par l'impact : \"Aidez 200 familles chaque samedi\"", "Soyez honnête sur le temps", "Proposez aussi des missions courtes et souples"] },
            { title: "Une mission, une fiche", bullets: ["Accueil, tri, conduite, saisie de données", "Tâches différentes, besoins différents"] }
          ],
          tryIt: "Choisissez une mission bénévole dont votre organisation a besoin. Rédigez sa fiche en utilisant les cinq parties. Commencez par une phrase sur l'impact.",
          youCanNow: "rédiger une fiche de mission claire qui dit aux bénévoles exactement ce qu'on attend d'eux et pourquoi c'est important."
        },
        {
          title: "Recruter et vérifier les bénévoles",
          minutes: 6,
          goal: "Recruter des bénévoles pour une mission et choisir les bonnes étapes de vérification.",
          text: [
            "La raison la plus fréquente pour laquelle les gens deviennent bénévoles, c'est que quelqu'un le leur a demandé. Demandez en personne, par vos bénévoles actuels, les lieux de culte, les écoles, les employeurs qui ont des programmes de bénévolat, les tableaux d'affichage du quartier et les réseaux sociaux. Partagez la fiche de mission et un moyen simple de s'inscrire.",
            "La vérification protège les personnes que vous servez, vos bénévoles et votre organisation. Adaptez-la au risque de la mission. Pour toute mission : un formulaire d'inscription avec les coordonnées et un contact d'urgence, et une courte conversation. Les missions plus à risque, surtout tout travail avec des enfants ou des adultes vulnérables (personnes âgées, personnes en situation de handicap), demandent aussi de contacter des références et une vérification des antécédents, faite avec l'accord écrit de la personne par un prestataire sérieux.",
            "Les règles sur la vérification des antécédents des bénévoles changent selon l'État américain et selon le programme, et votre assureur peut avoir ses propres exigences. Demandez à votre compagnie d'assurance et à un avocat ce qui s'applique à vous. Ajoutez aussi des règles de sécurité : par exemple, aucun adulte ne reste seul avec un enfant hors de la vue des autres, et chaque inquiétude est signalée à une personne désignée."
          ],
          steps: ["Demandez aux gens en personne ; passez par vos bénévoles actuels et vos partenaires locaux.", "Partagez la fiche de mission et une inscription facile.", "Pour toute mission : formulaire, contact d'urgence et courte conversation.", "Pour les missions avec des enfants ou des adultes vulnérables : références et vérification des antécédents avec accord écrit.", "Vérifiez les règles de l'État et les exigences de votre assureur.", "Fixez des règles de sécurité, comme aucun adulte seul avec un enfant hors de vue."],
          words: [["Vérification", "les étapes pour s'assurer qu'un bénévole convient à une mission et ne présente pas de danger."], ["Vérification des antécédents", "une recherche dans les registres publics, comme le casier judiciaire, faite avec l'accord de la personne."], ["Adulte vulnérable", "un adulte qui peut avoir besoin d'une protection en plus, comme certaines personnes âgées ou en situation de handicap."]],
          slides: [
            { title: "Recrutez en demandant", bullets: ["La plupart des gens s'engagent parce qu'on le leur a demandé", "Bénévoles actuels, lieux de culte, écoles", "Employeurs, tableaux d'affichage, réseaux sociaux"] },
            { title: "Vérifiez selon le risque", bullets: ["Toute mission : formulaire, contact d'urgence, conversation", "Enfants ou adultes vulnérables : références + vérification des antécédents", "Toujours avec un accord écrit"] },
            { title: "Vérifiez les règles", bullets: ["Les règles changent selon l'État", "Votre assureur peut avoir des exigences", "Demandez à votre assureur et à un avocat"] },
            { title: "Règles de sécurité", bullets: ["Aucun adulte seul avec un enfant hors de vue", "Signalez chaque inquiétude à une personne désignée"] }
          ],
          tryIt: "Pour la mission décrite dans la leçon 1, écrivez un court message de recrutement et listez trois endroits où vous le partagerez. Puis listez les étapes de vérification dont la mission a besoin et expliquez pourquoi, selon son risque.",
          youCanNow: "recruter des bénévoles en personne et choisir des étapes de vérification adaptées au risque de chaque mission."
        },
        {
          title: "Accueillir et former les bénévoles",
          minutes: 5,
          goal: "Préparer une courte séance d'accueil et une formation qui rendent les nouveaux bénévoles prêts et bien accueillis.",
          text: [
            "Le premier jour décide souvent si un bénévole revient. L'intégration, c'est tout ce qui se passe entre le \"oui\" et le moment où il se sent sûr de lui dans sa mission : un message de bienvenue, une séance d'accueil, une formation à la mission et un premier créneau chaleureux.",
            "La séance d'accueil présente la mission de l'organisation et les personnes servies, l'emplacement des choses, à qui s'adresser, les consignes de sécurité et d'urgence, les règles de confidentialité (par exemple, ne pas partager le nom ou les photos des bénéficiaires), et comment signer la feuille de présence et annuler un créneau. La formation montre comment faire le travail : expliquez, montrez, laissez-les essayer, puis donnez un retour. Une courte liste de contrôle ou une vidéo les aide à se souvenir.",
            "Associez chaque nouveau bénévole à un parrain expérimenté pour son premier créneau, et faites le point ensuite : \"Comment ça s'est passé ? Qu'est-ce qui n'était pas clair ?\""
          ],
          steps: ["Envoyez un message de bienvenue avec l'heure, le lieu et la personne à demander.", "Faites une séance d'accueil : mission, lieux, sécurité, confidentialité, présence et annulation.", "Formez à la mission : expliquez, montrez, laissez essayer, donnez un retour.", "Donnez une liste de contrôle simple.", "Associez-les à un parrain.", "Faites le point après le premier créneau."],
          words: [["Intégration", "les étapes qui aident un nouveau bénévole à démarrer et à se sentir bienvenu."], ["Séance d'accueil", "une première séance qui présente l'organisation, les règles et la sécurité."], ["Confidentialité", "garder privées les informations privées sur les personnes que vous servez."]],
          slides: [
            { title: "Le premier jour compte", bullets: ["Message de bienvenue", "Séance d'accueil", "Formation à la mission", "Un premier créneau chaleureux"] },
            { title: "La séance d'accueil présente", bullets: ["La mission et les personnes servies", "Les lieux, à qui s'adresser, la sécurité", "Les règles de confidentialité", "La feuille de présence et l'annulation"] },
            { title: "Une formation qui reste", bullets: ["Expliquer, montrer, laisser essayer, donner un retour", "Une courte liste de contrôle ou une vidéo"] },
            { title: "Après le premier créneau", bullets: ["Associez-les à un parrain", "Demandez : \"Comment ça s'est passé ? Qu'est-ce qui n'était pas clair ?\""] }
          ],
          tryIt: "Écrivez le plan d'une séance d'accueil de 30 minutes pour votre mission, avec la durée de chaque partie. Puis écrivez la formation à la mission en quatre étapes : expliquer, montrer, essayer, retour.",
          youCanNow: "accueillir et former les nouveaux bénévoles pour qu'ils soient en sécurité, sûrs d'eux et qu'ils aient envie de revenir."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Faire venir des bénévoles",
        questions: [
          { q: "Quelle est la meilleure façon de commencer une fiche de mission bénévole ?", options: ["Par les règles", "Par l'impact de la mission", "Par la date limite", "Par la vérification des antécédents"], answer: 1, why: "Commencer par l'impact rend la mission engageante." },
          { q: "Quelle est la raison la plus fréquente pour laquelle les gens commencent le bénévolat ?", options: ["Quelqu'un le leur a demandé", "Un panneau publicitaire", "Un formulaire fiscal", "Un e-mail au hasard"], answer: 0, why: "Une demande personnelle est le meilleur outil de recrutement." },
          { q: "Un bénévole va donner du soutien scolaire à des enfants après l'école. Quelle vérification faut-il ?", options: ["Rien", "Seulement un nom", "Seulement un sourire à la porte", "Un formulaire, des références et une vérification des antécédents avec accord écrit"], answer: 3, why: "Les missions avec des enfants demandent la vérification la plus sérieuse." },
          { q: "À qui demander les règles sur la vérification des antécédents de vos bénévoles ?", options: ["À un ami d'un bénévole", "À personne", "À votre assureur et à un avocat", "À une publication sur les réseaux sociaux"], answer: 2, why: "Les règles changent selon l'État, et les assureurs peuvent avoir des exigences." },
          { q: "Qu'est-ce qui a sa place dans une séance d'accueil des bénévoles ?", options: ["Les règles de confidentialité sur les personnes servies", "L'adresse des bénéficiaires", "Les salaires du personnel", "Des ragots sur les donateurs"], answer: 0, why: "Les bénévoles doivent savoir protéger la vie privée des personnes." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Garder les bénévoles",
      lessons: [
        {
          title: "Planifier les créneaux et encadrer les bénévoles",
          minutes: 5,
          goal: "Créer un planning de bénévoles avec des remplaçants et encadrer les bénévoles avec bienveillance.",
          text: [
            "Rendez le planning facile à voir et facile à modifier. Un calendrier partagé, un outil d'inscription gratuit ou un simple tableur suffit. Publiez les créneaux tôt, envoyez un rappel un ou deux jours avant, et rendez l'annulation simple pour que les gens vous préviennent au lieu de ne pas venir. Prévoyez une liste de remplaçants pour les créneaux importants.",
            "Chaque créneau doit avoir un responsable nommé, salarié ou bénévole, qui accueille les gens, distribue les tâches, répond aux questions et règle les problèmes. Encadrer des bénévoles, c'est comme encadrer du personnel, mais en plus léger : des tâches claires, des points réguliers, et des retours rapides et bienveillants.",
            "Si un bénévole ne convient pas, parlez-lui en privé, soyez précis et demandez-lui ce qui l'aiderait. Parfois, une autre mission lui convient mieux. Si quelqu'un enfreint les règles de sécurité ou de conduite, suivez votre politique, qui peut aller jusqu'à mettre fin à sa mission bénévole."
          ],
          steps: ["Utilisez un calendrier partagé, un outil d'inscription ou un tableur.", "Publiez les créneaux tôt et envoyez des rappels.", "Rendez l'annulation facile ; gardez une liste de remplaçants.", "Nommez un responsable pour chaque créneau.", "Donnez des tâches claires et des retours rapides et bienveillants.", "Réglez les problèmes en privé ; suivez votre politique en cas de manquement à la sécurité."],
          words: [["Créneau", "une période fixe pendant laquelle un bénévole travaille."], ["Responsable de créneau", "la personne chargée des bénévoles pendant un créneau."], ["Liste de remplaçants", "des bénévoles que vous pouvez appeler quand quelqu'un annule."]],
          slides: [
            { title: "Un planning qui marche", bullets: ["Facile à voir, facile à modifier", "Publiez tôt, rappelez un ou deux jours avant", "Annulation facile et liste de remplaçants"] },
            { title: "Un responsable nommé à chaque créneau", bullets: ["Accueille les gens", "Distribue les tâches, répond aux questions", "Règle les problèmes"] },
            { title: "Encadrer les bénévoles", bullets: ["Tâches claires et points réguliers", "Retours rapides et bienveillants", "Ça ne marche pas ? Parlez en privé ; essayez une autre mission"] }
          ],
          tryIt: "Faites un planning d'un mois pour votre mission, dans un tableur ou sur papier : dates, horaires des créneaux, noms des bénévoles, un responsable de créneau nommé et deux noms de remplaçants. Écrivez le message de rappel que vous enverrez.",
          youCanNow: "créer un planning de bénévoles avec des rappels et des remplaçants, et encadrer les bénévoles de façon claire et bienveillante."
        },
        {
          title: "Reconnaître et fidéliser les bénévoles",
          minutes: 5,
          goal: "Prévoir des remerciements adaptés à vos bénévoles et repérer pourquoi les bénévoles partent.",
          text: [
            "Les bénévoles arrêtent souvent de venir parce qu'ils se sont sentis inutiles, mal organisés, pas formés ou jamais remerciés, ou parce que leur vie est devenue trop chargée. Les garder coûte moins cher et demande moins d'effort que d'en trouver de nouveaux.",
            "Remerciez souvent et de façon précise : \"Vos créneaux du samedi nous ont aidés à préparer 600 colis ce mois-ci.\" Partagez des histoires d'impact, avec l'accord des personnes servies. Mélangez de petits remerciements de tous les jours (un mot, une mention publique, un SMS) avec de plus grands moments (une fête de remerciement, un certificat, une lettre de recommandation pour un emploi ou des études).",
            "Demandez aux bénévoles ce qu'ils cherchent : de nouvelles compétences, des amis, des responsabilités, de la souplesse. Proposez-leur d'évoluer, par exemple en formant les nouveaux bénévoles ou en dirigeant un créneau. Demandez à ceux qui partent pourquoi, et tirez-en des leçons."
          ],
          steps: ["Remerciez souvent et de façon précise.", "Partagez des histoires d'impact, avec accord.", "Mélangez petits remerciements et plus grands moments.", "Demandez à chaque bénévole ce qu'il attend de l'expérience.", "Proposez des missions pour évoluer.", "Demandez à ceux qui partent pourquoi."],
          words: [["Fidélisation", "le fait que les bénévoles continuent de revenir dans le temps."], ["Reconnaissance", "montrer aux bénévoles que leur travail est remarqué et apprécié."]],
          slides: [
            { title: "Pourquoi les bénévoles partent", bullets: ["Ils se sont sentis inutiles ou pas formés", "Une mauvaise organisation", "Jamais remerciés, ou une vie trop chargée"] },
            { title: "Remerciez-les bien", bullets: ["Souvent et de façon précise", "Partagez des histoires d'impact, avec accord", "Petits remerciements et plus grands moments"] },
            { title: "Aidez-les à évoluer", bullets: ["Demandez ce qu'ils cherchent", "Proposez des missions de formateur et de responsable", "Demandez à ceux qui partent pourquoi"] }
          ],
          tryIt: "Écrivez deux idées de remerciement pour vos bénévoles : un petit merci que vous pouvez donner cette semaine et un plus grand moment pour cette année. Puis écrivez trois questions que vous poserez à un bénévole sur ce qu'il attend de sa mission.",
          youCanNow: "remercier les bénévoles d'une façon qui compte pour eux et agir sur les raisons qui les font partir."
        },
        {
          title: "Suivre les heures de bénévolat",
          minutes: 5,
          goal: "Mettre en place un système simple pour suivre les heures de bénévolat et utiliser les chiffres.",
          text: [
            "Notez qui a fait du bénévolat, quand, combien de temps et dans quelle mission. Une feuille de présence sur papier recopiée dans un tableur suffit pour les petits groupes ; un formulaire gratuit ou une application de bénévolat peut convenir aux plus grands. Restez simple pour que les gens signent vraiment à l'arrivée et au départ.",
            "Les chiffres vous aident : ils montrent votre impact dans les rapports aux bailleurs de fonds et à votre conseil d'administration, vous aident à prévoir les effectifs, et vous aident à remercier vos bénévoles les plus fidèles. Beaucoup de bénévoles ont aussi besoin d'une attestation d'heures pour l'école, une bourse, un tribunal ou des travaux d'intérêt général, ou une candidature à un emploi. Soyez prêt à signer une lettre ou un formulaire qui confirme leurs heures.",
            "Gardez les dossiers des bénévoles privés et protégés, et ne collectez que ce dont vous avez besoin. Une note fiscale pour les bénévoles aux États-Unis : l'IRS (l'administration fiscale américaine) dit que la valeur du temps bénévole n'est pas déductible des impôts, mais que certains frais payés de sa poche et non remboursés peuvent l'être. Orientez les bénévoles vers la Publication 526 de l'IRS et un professionnel de la fiscalité au lieu de donner des conseils fiscaux."
          ],
          steps: ["Choisissez une méthode de présence : feuille papier, formulaire ou application.", "Notez le nom, la date, l'heure d'arrivée et de départ, et la mission.", "Saisissez les données dans un seul tableur chaque semaine.", "Additionnez les heures par bénévole, par mois et par programme.", "Utilisez les totaux dans les rapports, la planification et les remerciements.", "Gardez les dossiers privés ; signez les attestations d'heures quand on vous le demande."],
          words: [["Feuille de présence", "un formulaire simple où les bénévoles écrivent leur nom et leurs heures d'arrivée et de départ."], ["Attestation d'heures", "une lettre ou un formulaire signé qui confirme combien d'heures une personne a fait du bénévolat."], ["Rapport au bailleur de fonds", "un rapport qui montre à un financeur ce qui a été fait avec son argent."]],
          slides: [
            { title: "Suivez l'essentiel", bullets: ["Qui, quand, combien de temps, quelle mission", "Papier, formulaire gratuit ou application", "Restez simple"] },
            { title: "Utilisez les chiffres", bullets: ["Rapports aux bailleurs et au conseil d'administration", "Planifier les créneaux", "Remercier les bénévoles fidèles"] },
            { title: "Attestation d'heures", bullets: ["Pour l'école, une bourse, un tribunal ou un emploi", "Soyez prêt à signer une lettre ou un formulaire"] },
            { title: "Vie privée et impôts", bullets: ["Ne collectez que le nécessaire ; protégez-le", "Le temps bénévole n'est pas déductible des impôts (IRS)", "Orientez vers la Publication 526 de l'IRS et un fiscaliste"] }
          ],
          sources: [{ name: "IRS, Publication 526 : dons de bienfaisance (en anglais)", url: "https://www.irs.gov/publications/p526" }],
          tryIt: "Tâche finale : préparez votre kit bénévole pour une mission : la fiche de mission, le message de recrutement et les étapes de vérification, le plan d'une séance d'accueil de 30 minutes, un planning mensuel avec un responsable de créneau, deux idées de remerciement, et une feuille de présence ou un tableur avec des colonnes pour le nom, la date, l'arrivée, le départ, les heures et la mission.",
          youCanNow: "suivre simplement les heures de bénévolat et utiliser les chiffres pour les rapports, la planification, les remerciements et les attestations d'heures."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Garder les bénévoles",
        questions: [
          { q: "Des bénévoles manquent souvent leurs créneaux sans vous prévenir. Qu'est-ce qui aide en premier ?", options: ["Les exclure tous", "Arrêter de faire un planning", "Envoyer des rappels et rendre l'annulation facile", "Doubler la durée des créneaux"], answer: 2, why: "Les rappels et une annulation facile réduisent les absences." },
          { q: "Qui faut-il nommer pour chaque créneau ?", options: ["Un donateur", "Un responsable de créneau", "Le bénévole le plus récent", "Personne"], answer: 1, why: "Un responsable nommé accueille, guide et règle les problèmes." },
          { q: "Quel remerciement a le plus de chances de compter pour un bénévole ?", options: ["\"Merci à tous.\"", "Pas de merci ; c'est du bénévolat", "Un e-mail général une fois par an", "\"Vos créneaux du samedi nous ont aidés à préparer 600 colis ce mois-ci.\""], answer: 3, why: "Un merci précis qui nomme l'impact compte le plus." },
          { q: "Un adolescent a besoin d'une attestation de 40 heures de bénévolat pour l'école. Vous devez :", options: ["Utiliser vos relevés d'heures et signer une lettre qui les confirme", "Refuser", "Deviner les heures", "Lui dire de demander à l'IRS"], answer: 0, why: "Un bon suivi permet de confirmer les heures avec exactitude." },
          { q: "Selon l'IRS, un bénévole peut-il déduire la valeur de son temps ?", options: ["Oui, au taux qu'il choisit", "Oui, au salaire minimum", "Non, la valeur du temps ou des services n'est pas déductible", "Seulement le week-end"], answer: 2, why: "La Publication 526 de l'IRS dit que la valeur de votre temps n'est pas déductible." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Gérer des bénévoles",
    questions: [
      { q: "Une fiche de mission bénévole doit indiquer :", options: ["Seulement le nom de la mission", "Ce qu'ils feront, quand, pourquoi c'est important et à qui ils rendent compte", "Le salaire du bénévole", "Le nom des donateurs"], answer: 1, why: "Des détails clairs aident les bénévoles à réussir." },
      { q: "Pourquoi proposer des missions courtes et souples ?", options: ["Beaucoup de gens peuvent donner un peu de temps, mais pas chaque semaine", "On les oublie plus facilement", "Elles ne demandent aucune formation", "Elles remplacent le personnel"], answer: 0, why: "Les missions souples ouvrent la porte à plus de bénévoles." },
      { q: "Une banque alimentaire a besoin d'accueillants, de trieurs et de chauffeurs. Combien de fiches de mission ?", options: ["Une pour tous", "Aucune", "Une pour chaque mission", "Seulement pour les chauffeurs"], answer: 2, why: "Chaque mission a des tâches et des besoins différents." },
      { q: "Quelle façon de recruter marche le mieux en général ?", options: ["Attendre que les gens vous trouvent", "Publier une fois et espérer", "Demander seulement au personnel", "Demander aux gens en personne, y compris par vos bénévoles actuels"], answer: 3, why: "Les demandes personnelles attirent le plus de bénévoles." },
      { q: "La vérification doit être adaptée :", options: ["Au risque de la mission", "À l'apparence du bénévole", "À la météo", "À l'humeur du coordinateur"], answer: 0, why: "Les missions plus à risque demandent plus de vérification." },
      { q: "Une vérification des antécédents doit se faire :", options: ["En secret", "Avec l'accord écrit de la personne", "Seulement après un incident", "En interrogeant les voisins"], answer: 1, why: "L'accord est obligatoire et respectueux." },
      { q: "Quelle est une bonne règle de sécurité pour les programmes de jeunes ?", options: ["N'importe quel adulte peut être seul avec un enfant n'importe où", "On garde les inquiétudes pour soi", "Aucun adulte ne reste seul avec un enfant hors de la vue des autres", "La vérification est facultative"], answer: 2, why: "Cette règle protège les enfants et les bénévoles." },
      { q: "Les règles sur la vérification des antécédents des bénévoles :", options: ["Sont les mêmes partout", "N'existent pas", "Sont fixées par les bénévoles", "Changent selon l'État et le programme ; demandez à votre assureur et à un avocat"], answer: 3, why: "Les exigences varient, alors vérifiez ce qui s'applique à vous." },
      { q: "L'intégration, c'est :", options: ["Tout ce qui aide un nouveau bénévole à démarrer et à se sentir bienvenu", "Renvoyer un bénévole", "Collecter des fonds", "Acheter du matériel"], answer: 0, why: "Elle comprend l'accueil, la séance d'accueil, la formation et le premier créneau." },
      { q: "Les quatre étapes de la formation à la mission sont :", options: ["Lire, signer, partir, oublier", "Expliquer, montrer, laisser essayer, donner un retour", "Dire, tester, échouer, recommencer", "Regarder, attendre, deviner, partir"], answer: 1, why: "Une formation où l'on montre et où l'on essaie donne des compétences et de la confiance." },
      { q: "Associer un nouveau bénévole à un parrain aide parce que :", options: ["Cela double la paperasse", "Cela remplace la séance d'accueil", "Il a quelqu'un à qui poser des questions lors de son premier créneau", "Le parrain fait tout le travail"], answer: 2, why: "Un parrain rend le premier créneau plus facile et plus chaleureux." },
      { q: "Un bénévole publie en ligne la photo d'un bénéficiaire. Quel sujet de la séance d'accueil a été oublié ?", options: ["Le stationnement", "Les règles de confidentialité", "Le goûter", "La collecte de fonds"], answer: 1, why: "Les bénévoles doivent protéger l'identité des bénéficiaires." },
      { q: "Un bon planning de bénévoles est :", options: ["Facile à voir et facile à modifier", "Gardé dans la tête d'une seule personne", "Publié la veille au soir", "Jamais partagé"], answer: 0, why: "Un planning visible et souple réduit les trous." },
      { q: "Une liste de remplaçants sert à :", options: ["Renvoyer des bénévoles", "Faire les rapports aux bailleurs", "Ranger les vieux plannings", "Appeler quelqu'un quand un bénévole annule un créneau important"], answer: 3, why: "Les remplaçants permettent de couvrir les créneaux importants." },
      { q: "Un bénévole a du mal avec la saisie de données mais adore parler aux gens. Vous pourriez :", options: ["L'ignorer", "Le mettre mal à l'aise en public", "Lui parler en privé et lui proposer une mission d'accueil", "L'écarter sans un mot"], answer: 2, why: "Une mission mieux adaptée règle souvent le problème." },
      { q: "Quelle est une raison fréquente pour laquelle les bénévoles arrêtent de venir ?", options: ["On les a trop remerciés", "Ils se sont sentis inutiles ou jamais remerciés", "Les créneaux étaient bien organisés", "Ils avaient une formation claire"], answer: 1, why: "Se sentir inutile ou jamais remercié fait partir les gens." },
      { q: "Quand vous partagez des histoires d'impact sur les personnes que vous servez, vous devez :", options: ["Obtenir leur accord", "Utiliser leur nom complet sans demander", "Inventer des détails", "Partager leur adresse"], answer: 0, why: "Le respect et la vie privée passent en premier." },
      { q: "Un bénévole de longue date veut évoluer. Vous pourriez :", options: ["Le garder pour toujours sur la même tâche", "Lui demander de partir", "Lui donner seulement plus de ménage", "L'inviter à former les nouveaux bénévoles ou à diriger un créneau"], answer: 3, why: "Les missions pour évoluer gardent les bénévoles engagés motivés." },
      { q: "Une ligne de la feuille de présence doit indiquer :", options: ["Ses coordonnées bancaires", "Le nom, la date, l'heure d'arrivée et de départ, et la mission", "Son mot de passe", "Seulement une signature"], answer: 1, why: "Ces éléments de base permettent de totaliser les heures avec exactitude." },
      { q: "Un bénévole demande s'il peut déduire l'essence utilisée pour venir faire du bénévolat. Vous devez :", options: ["Dire oui, quel que soit le montant", "Dire que c'est illégal", "L'orienter vers la Publication 526 de l'IRS et un professionnel de la fiscalité", "Ignorer la question"], answer: 2, why: "Certains frais payés de sa poche peuvent être déductibles ; il doit vérifier la source officielle." }
    ]
  }
};
