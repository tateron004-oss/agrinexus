"use strict";

// Koach Learn course (French translation of veterans/veterans-ai-consulting.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "veterans-ai-consulting-fr",
  lang: "fr",
  translationOf: "veterans-ai-consulting",
  category: "Veterans (military)",
  name: "Opportunités de conseil avec l'IA",
  skills: "Transformer une expertise en offre de conseil, Trouver une aide gratuite pour les entreprises de vétérans, Écrire un message de prise de contact, Écrire une proposition avec l'IA, Protéger les informations des clients",
  outcome: "transformer votre expertise militaire en offre de conseil claire et écrire une proposition d'une page pour un client avec un assistant d'IA, en sachant où trouver une aide officielle gratuite pour créer l'entreprise.",
  about: [
    "Un consultant est payé pour régler un problème précis pour un client. Les anciens militaires (vétérans) apportent des compétences qui manquent à beaucoup de petites entreprises, d'associations et de sous-traitants : planification, sécurité, logistique, formation, sûreté et direction d'équipes. Les outils d'IA aident maintenant les consultants à chercher, écrire et livrer plus vite.",
    "Dans ce cours, vous choisirez une offre fondée sur ce que vous savez faire, vous apprendrez où les vétérans trouvent une aide officielle gratuite pour les entreprises, vous écrirez un premier message de prise de contact, et vous utiliserez un assistant d'IA pour préparer une proposition d'une page. Vous apprendrez aussi les règles qui protègent les informations des clients.",
    "Chaque leçon dure environ cinq minutes. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours. Ce cours ne donne pas de conseil juridique ou fiscal : pour créer l'entreprise, adressez-vous aux services officiels cités ici ou à un professionnel qualifié.",
    "Les organismes cités sont américains. Si vous vivez dans un autre pays, cherchez les services officiels d'aide à la création d'entreprise de votre pays."
  ],
  finalTask: "Écrivez une proposition de conseil d'une page pour un client local inventé ou réel : le problème, ce que vous ferez, ce qu'il recevra, le calendrier, votre prix (fixé par vous, pas par l'IA), et comment vous protégerez ses informations. Préparez-la avec un assistant d'IA, puis corrigez-la pour que chaque affirmation soit vraie, et notez le service officiel gratuit d'aide aux entreprises que vous contacterez ensuite.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des vétérans qui veulent gagner de l'argent comme consultants pour de petites entreprises, des associations et des sous-traitants, grâce à des compétences comme la planification, la sécurité, la logistique, la formation, la sûreté et la direction d'équipes.",
    startingPoint: "Ils ont une grande expertise et l'habitude de faire des briefings et d'écrire des ordres, et savent utiliser un ordinateur. La plupart n'ont pas défini d'offre de conseil, contacté de clients, fixé de prix ni écrit de proposition, et peu ont utilisé l'IA pour écrire des documents professionnels.",
    gap: "Une expertise ne rapporte que si elle est proposée clairement à un client qui en a besoin. Les apprenants doivent transformer leurs compétences en offre claire, contacter honnêtement leurs premiers clients, préparer avec l'IA une proposition dont ils fixent et vérifient eux-mêmes le prix, protéger les informations des clients et utiliser l'aide officielle gratuite aux entreprises.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; aucune connaissance en gestion d'entreprise supposée",
      "Appareils : un ordinateur ou un smartphone avec internet et un assistant d'IA gratuit",
      "Vie privée : aucune information confidentielle d'un client dans les outils d'IA publics, sauf si le client a accepté et que l'outil est approuvé ; des repères pendant les exercices",
      "Honnêteté : chaque affirmation des messages et des propositions doit être vraie ; c'est l'apprenant, pas l'IA, qui fixe le prix",
      "Les licences, les impôts et l'enregistrement relèvent du bureau des entreprises de l'État, d'irs.gov ou d'un conseiller d'un VBOC"
    ],
    prerequisites: "Aucun. « L'IA pour la productivité et le leadership » est un bon cours complémentaire."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'exemples de missions de conseil", action: "expliquer ce que fait un consultant et trois façons dont l'IA l'aide", standard: "en nommant au moins deux problèmes de clients qui correspondent à vos compétences militaires" },
    { id: "O2", condition: "À partir de votre expertise militaire", action: "écrire une offre en une phrase qui nomme qui vous aidez, le problème et le résultat", standard: "testée auprès d'au moins une personne de ce domaine" },
    { id: "O3", condition: "Quand vous préparez votre entreprise", action: "repérer l'aide officielle gratuite aux entreprises de vétérans près de chez vous et ce que fait chaque bureau", standard: "avec les coordonnées du Veterans Business Outreach Center le plus proche et une question à lui poser" },
    { id: "O4", condition: "Pour votre offre", action: "écrire un message de prise de contact court et honnête qui demande à un client possible un appel de 15 minutes", standard: "avec chaque affirmation vraie et trois personnes à qui l'envoyer" },
    { id: "O5", condition: "À partir de votre offre et du problème d'un client", action: "préparer avec l'IA une proposition d'une page et la corriger jusqu'à ce qu'elle soit exacte", standard: "avec un périmètre clair, un calendrier et un prix que vous fixez vous-même" },
    { id: "O6", condition: "Quand vous utilisez l'IA pour le travail d'un client", action: "écrire des règles qui protègent les informations du client et vérifier le travail de l'IA avant de le remettre", standard: "avec une phrase sur l'usage de l'IA dans la proposition et aucune donnée du client dans les outils publics sans autorisation" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Construire votre offre de conseil",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce que font les consultants et où intervient l'IA",
          minutes: 4,
          goal: "Expliquer ce que fait un consultant et trois façons dont l'IA l'aide.",
          text: [
            "Un consultant est un expert extérieur qu'un client engage pour un travail précis, pour une durée fixée. Exemples : mettre en place un programme de sécurité pour une entreprise de bâtiment, construire un plan de formation pour les bénévoles d'une association, ou organiser l'aménagement d'un entrepôt.",
            "L'IA aide les consultants à se renseigner vite sur un sujet, à écrire des premiers jets de documents comme des propositions et des rapports, et à transformer des notes en listes de contrôle ou en diapositives. Elle ne remplace pas votre expérience : les clients paient pour votre jugement.",
            "Le conseil en IA, c'est aussi aider de petites organisations à commencer à utiliser les outils d'IA sans risque, par exemple en écrivant une politique simple d'utilisation de l'IA ou en formant le personnel. Vos habitudes militaires de procédures standard et de formation claire se transfèrent bien."
          ],
          words: [["Consultant", "un expert extérieur payé pour régler un problème précis pour un client."], ["Client", "la personne ou l'organisation qui paie votre service."], ["Livrable", "ce que vous remettez à la fin, comme un plan, un rapport ou une formation."]],
          slides: [
            { title: "Un consultant, c'est...", bullets: ["Un expert extérieur", "Engagé pour un travail précis, une durée fixée", "Payé pour son jugement et ses résultats"] },
            { title: "Comment l'IA aide", bullets: ["Se renseigner vite", "Écrire propositions et rapports", "Transformer des notes en listes ou diapositives"] },
            { title: "Le conseil en IA", bullets: ["Aider de petites structures à utiliser l'IA sans risque", "Écrire des politiques simples d'usage de l'IA", "Former le personnel"] }
          ],
          tryIt: "Demandez à un assistant d'IA : \"Pour quels problèmes les petites entreprises près de chez moi engagent-elles souvent des consultants ?\" Entourez-en deux qui correspondent à ce que vous faisiez dans l'armée.",
          youCanNow: "expliquer ce que fait un consultant et comment l'IA soutient son travail.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'un livrable ?", options: ["Ce que vous remettez à la fin, comme un plan ou un rapport", "Le paiement du client", "Votre carte de visite", "Le premier appel téléphonique"], answer: 0, why: "Un livrable, c'est le travail terminé que reçoit le client." },
            { objective: "O1", q: "L'IA vous donne une liste de problèmes pour lesquels les petites entreprises engagent des consultants. Que faites-vous ?", options: ["Proposer de tous les régler", "Ignorer la liste", "Entourer ceux qui correspondent à ce que vous avez fait dans l'armée", "Choisir celui qui paie le plus, même sans compétence dans ce domaine"], answer: 2, why: "Votre offre doit relier de vrais problèmes aux compétences que vous avez déjà." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Transformer votre expertise en offre",
          minutes: 5,
          goal: "Écrire une offre en une phrase : qui vous aidez, le problème et le résultat.",
          text: [
            "Une offre claire a trois parties : qui vous aidez, quel problème vous réglez, et quel résultat ils obtiennent. Par exemple : \"J'aide les petites entreprises du bâtiment à mettre en place un programme de sécurité écrit pour qu'elles réussissent les inspections et réduisent les accidents.\"",
            "Partez de ce que vous faisiez souvent et bien en service, puis trouvez des groupes civils qui ont le même problème. Un ancien sous-officier logisticien pourrait aider de petits distributeurs à planifier leurs stocks. Un ancien formateur pourrait aider des associations à accueillir leurs bénévoles.",
            "Utilisez un assistant d'IA pour trouver des idées, puis testez l'offre en demandant à deux ou trois vraies personnes du domaine : \"Est-ce un problème que vous paieriez pour régler ?\""
          ],
          steps: ["Listez trois choses que vous faisiez souvent et bien en service.", "Demandez à un assistant d'IA : \"Quelles entreprises civiles ont ce problème ?\"", "Écrivez : \"J'aide [qui] à [régler quoi] pour qu'ils [résultat].\"", "Demandez à deux ou trois personnes du domaine si elles paieraient pour ça."],
          words: [["Offre", "une phrase claire qui dit qui vous aidez, avec quoi, et le résultat."], ["Niche", "un petit groupe précis de clients sur lequel vous vous concentrez."]],
          slides: [
            { title: "Les trois parties d'une offre", bullets: ["Qui vous aidez", "Le problème que vous réglez", "Le résultat qu'ils obtiennent"] },
            { title: "Partez de votre service", bullets: ["Ce que vous faisiez souvent et bien", "Quels civils ont le même problème ?"] },
            { title: "Testez-la avec de vraies personnes", bullets: ["\"Paieriez-vous pour régler ce problème ?\"", "Demandez à deux ou trois personnes du domaine"] }
          ],
          tryIt: "Écrivez votre offre en une phrase avec \"J'aide [qui] à [régler quoi] pour qu'ils [résultat].\" Demandez à un assistant d'IA de la rendre plus claire, puis lisez-la à une personne du domaine.",
          youCanNow: "écrire une offre de conseil claire fondée sur votre expertise militaire.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qu'une niche ?", options: ["Tous les clients possibles", "Un type de contrat", "Un programme public gratuit", "Un petit groupe précis de clients sur lequel vous vous concentrez"], answer: 3, why: "Une niche, c'est le groupe précis que vous servez, ce qui rend votre offre claire." },
            { objective: "O2", q: "Vous avez écrit « J'aide les entreprises avec des trucs. » Que faites-vous ?", options: ["L'utiliser tel quel", "La réécrire sous la forme « J'aide [qui] à [régler quoi] pour qu'ils [résultat] »", "L'allonger avec plus de mots à la mode", "Enlever le résultat"], answer: 1, why: "Une offre claire nomme qui vous aidez, le problème et le résultat." }
          ]
        },
        {
          objectives: ["O3"],
          title: "L'aide officielle gratuite pour les chefs d'entreprise vétérans",
          minutes: 5,
          goal: "Trouver l'aide gratuite aux entreprises de vétérans près de chez vous et savoir ce que fait chaque service.",
          text: [
            "La Small Business Administration (SBA, l'agence américaine des petites entreprises) gère Boots to Business, qui fait partie du Transition Assistance Program des militaires, et Boots to Business Reboot pour les vétérans de toutes les époques. Les Veterans Business Outreach Centers (VBOC) proposent des ateliers sur le plan d'affaires, du mentorat et des formations.",
            "Si vous voulez des marchés publics, la SBA certifie les petites entreprises détenues par des vétérans et par des vétérans handicapés du service grâce à son programme Veteran Small Business Certification, appelé VetCert, sur certifications.sba.gov. Quand nous avons vérifié en octobre 2026, la VA (l'administration américaine des anciens combattants) disait que les entreprises qui travaillent avec elle doivent être enregistrées auprès de la SBA.",
            "La VA cite aussi la formation à l'entrepreneuriat comme une façon d'utiliser certains droits au GI Bill. Les noms d'entreprise, les licences et les impôts dépendent de votre État et de l'IRS (l'administration fiscale américaine) : consultez le service des entreprises de votre État et irs.gov, ou demandez à un conseiller d'un VBOC."
          ],
          steps: ["Ouvrez la page de la SBA sur les entreprises détenues par des vétérans.", "Trouvez le Veterans Business Outreach Center le plus proche.", "Regardez les dates de Boots to Business ou de Reboot.", "Si vous voulez travailler pour l'État, lisez les informations sur VetCert sur certifications.sba.gov.", "Consultez le service des entreprises de votre État pour les licences et l'enregistrement."],
          words: [["SBA", "U.S. Small Business Administration, l'agence fédérale qui aide les petites entreprises."], ["VBOC", "Veterans Business Outreach Center : des centres financés par la SBA qui aident les chefs d'entreprise vétérans."], ["VetCert", "la certification de la SBA pour les petites entreprises détenues par des vétérans et des vétérans handicapés du service."]],
          slides: [
            { title: "Aide gratuite de la SBA pour les vétérans", bullets: ["Boots to Business (dans le TAP)", "Boots to Business Reboot, toutes époques", "Veterans Business Outreach Centers"] },
            { title: "Marchés publics", bullets: ["VetCert sur certifications.sba.gov", "Entreprises de vétérans et de vétérans handicapés", "Travailler avec la VA demande l'enregistrement SBA"] },
            { title: "Règles de création", bullets: ["Noms, licences et impôts : votre État et l'IRS", "Demandez à un conseiller d'un VBOC", "Pas de conseil juridique ou fiscal par l'IA seule"] }
          ],
          sources: [
            { name: "SBA : entreprises détenues par des vétérans", url: "https://www.sba.gov/business-guide/grow-your-business/veteran-owned-businesses" },
            { name: "SBA : aide aux marchés publics pour les vétérans (VetCert)", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/veteran-contracting-assistance-programs" },
            { name: "VA : soutien aux petites entreprises de vétérans", url: "https://www.va.gov/careers-employment/veteran-owned-business-support/" },
            { name: "VA : comment utiliser vos droits au GI Bill", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/" }
          ],
          tryIt: "Trouvez sur sba.gov le Veterans Business Outreach Center le plus proche de chez vous. Notez son nom, comment le contacter et une question que vous poserez sur la création d'une activité de conseil.",
          youCanNow: "trouver une aide officielle gratuite pour créer une activité de conseil détenue par un vétéran.",
          quickCheck: [
            { objective: "O3", q: "Que propose un Veterans Business Outreach Center ?", options: ["Des prêts sans papiers", "Des publicités payantes pour votre entreprise", "Une aide gratuite pour le plan d'affaires et du mentorat pour les vétérans", "Un premier client garanti"], answer: 2, why: "Les VBOC donnent aux vétérans une aide gratuite pour planifier leur entreprise et du mentorat." },
            { objective: "O3", q: "Vous avez une question sur la licence d'entreprise dont vous avez besoin. À qui la posez-vous ?", options: ["Au bureau des entreprises de votre État, sur irs.gov ou à un conseiller d'un VBOC", "Seulement à un assistant d'IA", "À un groupe sur les réseaux sociaux", "À un concurrent"], answer: 0, why: "Les questions de licence et d'impôts vont aux bureaux officiels ou aux conseillers, pas à l'IA." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Construire votre offre de conseil",
        questions: [
          { objective: "O1", q: "Qu'est-ce qu'un consultant ?", options: ["Un inspecteur du gouvernement", "Un salarié à temps plein à vie", "Un expert extérieur payé pour régler un problème précis", "Un vendeur d'un seul produit"], answer: 2, why: "Les consultants sont engagés pour un travail et une durée précis." },
          { objective: "O1", q: "Pour quoi les clients paient-ils surtout un consultant ?", options: ["Son jugement et ses résultats", "Son abonnement à l'IA", "Son uniforme", "Sa vitesse de frappe"], answer: 0, why: "L'IA aide, mais les clients paient pour l'expertise." },
          { objective: "O2", q: "Laquelle est une offre claire ?", options: ["\"Appelez-moi.\"", "\"Je fais des trucs.\"", "\"Je suis un vétéran.\"", "\"J'aide les petites entreprises du bâtiment à mettre en place un programme de sécurité pour réussir les inspections.\""], answer: 3, why: "Elle nomme qui, le problème et le résultat." },
          { objective: "O2", q: "Comment tester si votre offre est réelle ?", options: ["Demander seulement à l'IA", "Demander à des gens du domaine s'ils paieraient pour régler le problème", "Deviner", "Imprimer d'abord des cartes de visite"], answer: 1, why: "De vrais acheteurs vous disent si le problème vaut d'être payé." },
          { objective: "O3", q: "Où les vétérans trouvent-ils une aide gratuite pour le plan d'affaires et du mentorat ?", options: ["Chez un concessionnaire auto", "Dans un Veterans Business Outreach Center", "Dans une publicité sur un réseau social", "Dans un groupe crypto"], answer: 1, why: "Les VBOC sont des centres financés par la SBA pour les chefs d'entreprise vétérans." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Décrocher et réaliser les missions",
      lessons: [
        {
          objectives: ["O4"],
          title: "Écrire votre premier message de prise de contact",
          minutes: 5,
          goal: "Écrire un message court et honnête qui demande un appel de 15 minutes à un client possible.",
          text: [
            "Vos premiers clients viennent souvent de personnes qui vous connaissent déjà : anciens chefs, associations d'anciens combattants, groupes d'entrepreneurs locaux et associations où vous êtes bénévole.",
            "Un bon message de prise de contact est court : qui vous êtes, le problème que vous aidez à régler, une preuve (un résultat de votre service ou d'un travail passé), et une petite demande, comme un appel de 15 minutes.",
            "L'IA peut l'écrire, mais faites qu'il vous ressemble et enlevez tout ce qui n'est pas vrai. N'affirmez jamais avoir une certification, une habilitation ou un résultat que vous n'avez pas."
          ],
          steps: ["Listez dix personnes ou groupes qui vous connaissent ou partagent votre domaine.", "Demandez à un assistant d'IA un message de 5 phrases : qui vous êtes, le problème, une preuve, un appel de 15 minutes.", "Corrigez-le pour qu'il vous ressemble.", "Vérifiez que chaque affirmation est vraie.", "Envoyez-le à trois personnes."],
          words: [["Prise de contact", "contacter des clients possibles pour commencer une conversation."], ["Preuve", "un vrai résultat qui montre que vous savez faire le travail."]],
          slides: [
            { title: "Commencez par ceux qui vous connaissent", bullets: ["Anciens chefs et associations d'anciens combattants", "Groupes d'entrepreneurs locaux", "Associations où vous êtes bénévole"] },
            { title: "Un message court", bullets: ["Qui vous êtes et le problème réglé", "Une vraie preuve", "Une petite demande : un appel de 15 minutes"] },
            { title: "Restez honnête", bullets: ["Faites qu'il vous ressemble", "Aucune affirmation que vous ne pouvez prouver"] }
          ],
          tryIt: "Demandez à un assistant d'IA d'écrire un message de prise de contact de cinq phrases pour votre offre. Corrigez-le pour qu'il vous ressemble et que chaque affirmation soit vraie, puis écrivez le nom de trois personnes à qui vous l'enverrez.",
          youCanNow: "écrire un message de prise de contact honnête qui demande un court appel à un client possible.",
          quickCheck: [
            { objective: "O4", q: "Quelle est une bonne petite demande dans un message de prise de contact ?", options: ["Signer un contrat d'un an aujourd'hui", "Un appel de 15 minutes", "Payer un acompte maintenant", "Partager ses documents financiers"], answer: 1, why: "Une petite demande facile, comme un court appel, rend un premier oui plus probable." },
            { objective: "O4", q: "Le brouillon de l'IA dit que vous avez « 20 ans d'expérience en conseil ». Vous n'en avez aucune. Que faites-vous ?", options: ["Le laisser ; ça sonne bien", "Le changer en 10 ans", "L'envoyer à plus de personnes", "L'enlever et indiquer votre vraie expérience militaire"], answer: 3, why: "Chaque affirmation doit être vraie ; votre vraie expérience est votre preuve." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Écrire une proposition avec l'IA",
          minutes: 6,
          goal: "Préparer une proposition d'une page avec l'IA et la corriger jusqu'à ce qu'elle soit exacte.",
          text: [
            "Une proposition est votre plan pour le problème du client. Elle marche comme un ordre d'opération : situation (le problème), mission (ce que vous ferez), exécution (étapes et calendrier), et ce que reçoit le client (les livrables).",
            "Donnez à l'IA vos notes de l'appel avec le client, sans données privées du client, et demandez une proposition d'une page avec ces titres. Puis corrigez sans pitié : enlevez tout ce qui est vague, corrigez les dates et rendez le périmètre clair pour que le travail ne grossisse pas sans fin.",
            "C'est vous qui fixez le prix, pas l'IA. Pensez à vos heures, à vos frais et à ce que vaut le résultat pour le client. Demandez à un conseiller d'un VBOC ou à d'autres consultants de votre domaine ce qui est habituel."
          ],
          steps: ["Écrivez vos notes de la conversation avec le client (sans données privées).", "Demandez à un assistant d'IA une proposition d'une page : problème, ce que je ferai, calendrier, livrables, prix.", "Précisez le périmètre : ce qui est compris et ce qui ne l'est pas.", "Ajoutez votre propre prix.", "Lisez-la comme le client : quelque chose n'est-il pas clair ?"],
          words: [["Proposition", "un plan écrit avec un prix pour régler le problème d'un client."], ["Périmètre", "exactement quel travail est compris et lequel ne l'est pas."], ["Dérive du périmètre", "quand un travail grossit au-delà de ce qui était convenu."]],
          slides: [
            { title: "Proposition = ordre d'opération", bullets: ["Situation : le problème", "Mission : ce que vous ferez", "Exécution : étapes et calendrier", "Livrables : ce qu'il reçoit"] },
            { title: "L'IA rédige, vous corrigez", bullets: ["Vos notes, sans données privées du client", "Enlevez le vague, corrigez les dates", "Un périmètre clair évite la dérive"] },
            { title: "Vous fixez le prix", bullets: ["Vos heures et vos frais", "Ce que vaut le résultat", "Demandez à un conseiller VBOC ce qui est habituel"] }
          ],
          tryIt: "Prenez votre offre et un client inventé. Demandez à un assistant d'IA une proposition d'une page avec les cinq titres, puis corrigez le périmètre et ajoutez votre propre prix.",
          youCanNow: "préparer et corriger avec l'aide de l'IA une proposition de conseil claire d'une page.",
          quickCheck: [
            { objective: "O5", q: "Que veut dire le périmètre dans une proposition ?", options: ["Exactement quel travail est compris et lequel ne l'est pas", "L'adresse du client", "La police de caractères utilisée", "Seulement votre tarif horaire"], answer: 0, why: "Le périmètre fixe des limites claires au travail, ce qui évite la dérive du périmètre." },
            { objective: "O5", q: "L'IA propose un prix pour votre proposition. Que faites-vous ?", options: ["Utiliser le prix de l'IA", "Ne pas mettre de prix", "Fixer votre propre prix d'après vos heures, vos coûts et la valeur apportée", "Demander au client de choisir n'importe quel prix"], answer: 2, why: "C'est vous qui fixez le prix ; l'IA ne connaît ni vos coûts ni votre valeur." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Réaliser la mission et protéger le client",
          minutes: 5,
          goal: "Fixer des règles d'utilisation de l'IA pour le travail client qui protègent les informations du client.",
          text: [
            "Les clients vous confient leurs informations : noms du personnel, argent, projets et problèmes. Ne collez pas les informations privées ou confidentielles d'un client dans un outil d'IA public, sauf si le client a donné son accord et que l'outil est autorisé pour ça.",
            "Vérifiez tout ce que produit l'IA avant que le client le voie : faits, chiffres, noms et lois. C'est vous qui êtes responsable du travail, pas l'IA.",
            "Soyez transparent sur votre utilisation de l'IA. Une simple phrase dans votre proposition suffit : \"J'utilise des outils d'IA pour rédiger des documents ; je relis tout le travail et je ne leur transmets pas vos informations privées.\""
          ],
          steps: ["Gardez les données privées du client hors des outils d'IA publics.", "Utilisez des repères comme [nom du client] pour rédiger.", "Vérifiez chaque fait, chiffre et loi avant la remise.", "Ajoutez à votre proposition une phrase sur votre utilisation de l'IA."],
          words: [["Confidentiel", "une information que le client veut garder privée."], ["Outil autorisé", "un outil d'IA que le client vous a permis d'utiliser avec ses informations."]],
          slides: [
            { title: "Protégez les informations du client", bullets: ["Pas de données privées du client dans une IA publique", "Utilisez des repères comme [nom du client]"] },
            { title: "Le travail est à vous", bullets: ["Vérifiez faits, chiffres, noms et lois", "L'IA n'est pas responsable ; vous l'êtes"] },
            { title: "Soyez transparent sur l'IA", bullets: ["Dites comment vous l'utilisez dans la proposition", "\"Je relis tout et je protège vos données\""] }
          ],
          tryIt: "Tâche finale : terminez votre proposition d'une page. Ajoutez votre phrase sur l'utilisation de l'IA, vérifiez que chaque affirmation est vraie, et écrivez le nom du service officiel gratuit d'aide aux entreprises que vous contacterez ensuite.",
          youCanNow: "proposer du conseil fondé sur votre expertise militaire, écrire une proposition avec l'IA et protéger les informations de votre client.",
          quickCheck: [
            { objective: "O6", q: "À quoi sert un repère comme [nom du client] ?", options: ["À cacher votre propre nom", "À rendre la proposition plus longue", "À envoyer la proposition automatiquement", "À rédiger avec l'IA sans partager de détails privés"], answer: 3, why: "Les repères gardent les détails du client en dehors de l'IA pendant que vous rédigez." },
            { objective: "O6", q: "Un client vous envoie des plans confidentiels et vous voulez l'aide de l'IA. Que faites-vous d'abord ?", options: ["Les coller dans n'importe quelle IA publique", "Vérifier que le client est d'accord et que l'outil est approuvé pour cela", "Les publier en ligne pour avoir des avis", "Les partager avec un autre client"], answer: 1, why: "Les informations confidentielles d'un client ne vont dans un outil d'IA qu'avec l'accord du client et un outil approuvé." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Décrocher et réaliser les missions",
        questions: [
          { objective: "O4", q: "D'où viennent souvent les premiers clients d'un consultant ?", options: ["De nulle part", "De publicités au hasard", "Seulement d'appels à des inconnus", "De personnes et de groupes qui vous connaissent déjà"], answer: 3, why: "La confiance des gens qui vous connaissent ouvre les portes le plus vite." },
          { objective: "O4", q: "Quelle est une bonne petite demande dans un message de prise de contact ?", options: ["Un appel de 15 minutes", "Un contrat d'un an", "Ses coordonnées bancaires", "Un gros paiement d'avance"], answer: 0, why: "Un court appel est facile à accepter." },
          { objective: "O5", q: "Qui doit fixer votre prix ?", options: ["Un site au hasard", "L'IA", "Vous, selon vos heures, vos frais et la valeur", "Le client seul"], answer: 2, why: "Le prix est une décision de votre entreprise." },
          { objective: "O5", q: "Qu'est-ce que la dérive du périmètre ?", options: ["Une livraison rapide", "Un type d'IA", "Un formulaire juridique", "Quand un travail grossit au-delà de ce qui était convenu"], answer: 3, why: "Un périmètre clair empêche le travail de grossir sans être payé." },
          { objective: "O6", q: "Pouvez-vous coller les projets confidentiels d'un client dans un outil d'IA public ?", options: ["Oui, si ça fait gagner du temps", "Toujours", "Seulement si le client est d'accord et que l'outil est autorisé pour ça", "Oui, si vous l'effacez après"], answer: 2, why: "Les informations du client demandent son accord et un outil autorisé." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Opportunités de conseil avec l'IA",
    questions: [
      { objective: "O1", q: "Un livrable, c'est :", options: ["Votre voiture", "Ce que vous remettez à la fin, comme un plan ou un rapport", "Votre numéro de facture", "L'outil d'IA"], answer: 1, why: "Les livrables sont les résultats que reçoit le client." },
      { objective: "O1", q: "Laquelle est une façon dont l'IA aide les consultants ?", options: ["Écrire des premiers jets de propositions et de rapports", "Remplacer tout jugement", "Signer les contrats", "Détenir une habilitation de sécurité"], answer: 0, why: "L'IA accélère la rédaction ; c'est vous qui décidez." },
      { objective: "O1", q: "Le conseil en IA peut comprendre :", options: ["Vendre les données des clients", "Pirater les concurrents", "Aider un petit groupe à écrire une politique simple d'usage de l'IA", "Garantir des profits"], answer: 2, why: "L'adoption sûre de l'IA est un vrai besoin de conseil." },
      { objective: "O2", q: "Les trois parties d'une offre sont :", options: ["Qui vous aidez, le problème et le résultat", "Logo, couleur et police", "Grade, unité et base", "Prix, taxe et frais"], answer: 0, why: "Elles rendent l'offre claire pour un acheteur." },
      { objective: "O2", q: "Une niche, c'est :", options: ["Une application d'IA", "Un type d'impôt", "Un insigne militaire", "Un petit groupe précis de clients sur lequel vous vous concentrez"], answer: 3, why: "Se concentrer rend votre offre plus facile à vendre." },
      { objective: "O2", q: "Un ancien formateur pourrait proposer de :", options: ["Piloter des avions sans licence", "Aider des associations à accueillir leurs bénévoles", "Donner des conseils juridiques", "Vendre de la crypto"], answer: 1, why: "Les compétences de formation se transfèrent directement." },
      { objective: "O3", q: "Boots to Business est géré par :", options: ["Une banque privée", "La SBA, dans le cadre du Transition Assistance Program", "Un réseau social", "L'IRS"], answer: 1, why: "La SBA le gère dans le TAP." },
      { objective: "O3", q: "Boots to Business Reboot s'adresse :", options: ["Seulement aux étudiants", "Seulement aux officiers en activité", "Seulement aux civils", "Aux vétérans de toutes les époques, y compris la Garde nationale et la réserve"], answer: 3, why: "La SBA dit que Reboot sert les vétérans de toutes les époques." },
      { objective: "O3", q: "VetCert, c'est :", options: ["La certification de la SBA pour les petites entreprises détenues par des vétérans et des vétérans handicapés du service", "Un formulaire d'impôts", "Un site d'emploi", "Un paiement du GI Bill"], answer: 0, why: "La SBA gère VetCert pour les marchés publics." },
      { objective: "O3", q: "Où demander VetCert ?", options: ["Dans n'importe quelle discussion avec une IA", "Par un lien dans un SMS", "Sur certifications.sba.gov", "Sur une page de réseau social"], answer: 2, why: "Le site de certification de la SBA traite les demandes." },
      { objective: "O3", q: "Les questions sur les licences et les impôts de l'entreprise vont de préférence à :", options: ["Personne", "Seulement une discussion avec une IA", "Un forum au hasard", "Le service des entreprises de votre État, irs.gov ou un conseiller d'un VBOC"], answer: 3, why: "Les services officiels et les conseillers donnent les règles actuelles." },
      { objective: "O4", q: "Un bon message de prise de contact contient :", options: ["Votre numéro de sécurité sociale", "Toute l'histoire de votre vie", "Qui vous êtes, le problème, une preuve et une petite demande", "Une demande de paiement"], answer: 2, why: "Court et précis, il obtient des réponses." },
      { objective: "O4", q: "Un brouillon de l'IA dit que vous avez une certification que vous n'avez pas. Vous devez :", options: ["La garder", "L'enlever", "En ajouter deux autres", "Demander au client de ne pas vérifier"], answer: 1, why: "Chaque affirmation doit être vraie." },
      { objective: "O5", q: "Une proposition ressemble à quel document militaire ?", options: ["Un ordre d'opération", "Une demande de permission", "Une inspection de tenue", "Une fiche de solde"], answer: 0, why: "Les deux présentent la situation, la mission et l'exécution." },
      { objective: "O5", q: "Le périmètre, dans une proposition, c'est :", options: ["Seulement le prix", "La lunette d'un fusil", "Exactement quel travail est compris et lequel ne l'est pas", "L'adresse du client"], answer: 2, why: "Un périmètre clair évite les désaccords." },
      { objective: "O5", q: "Quand vous demandez à l'IA d'écrire une proposition, donnez-lui :", options: ["Vos notes, sans données privées du client", "Les coordonnées bancaires du client", "Les adresses du personnel", "Les mots de passe"], answer: 0, why: "Gardez les données privées du client à l'écart." },
      { objective: "O6", q: "Qui est responsable des erreurs dans un travail client rédigé avec l'IA ?", options: ["Le client", "L'entreprise d'IA", "Personne", "Vous"], answer: 3, why: "C'est vous qui livrez le travail, donc il est sous votre responsabilité." },
      { objective: "O6", q: "Que vérifier avant de remettre un travail rédigé avec l'IA ?", options: ["Seulement la police", "Les faits, les chiffres, les noms et les lois", "Rien", "Seulement l'orthographe"], answer: 1, why: "L'IA peut se tromper sur les faits." },
      { objective: "O6", q: "Comment parler de l'IA à vos clients ?", options: ["Le cacher", "Une phrase claire dans la proposition sur votre façon de l'utiliser et de protéger leurs données", "Dire que l'IA a tout fait", "Ne jamais en parler"], answer: 1, why: "La transparence crée la confiance." },
      { objective: "O6", q: "Un repère comme [nom du client] vous aide à :", options: ["Obtenir une certification", "Facturer plus vite", "Sauter la proposition", "Rédiger avec l'IA sans partager de détails privés"], answer: 3, why: "Les repères gardent les vrais noms hors des outils d'IA." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      6,
      8,
      11,
      12,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Problème et offre",
        objective: "O2",
        notYet: "Le problème du client ou ce que vous ferez est vague.",
        meets: "Indique le problème du client et ce que vous ferez, en accord avec votre offre.",
        exceeds: "Reprend les propres mots du client pour décrire le problème."
      },
      {
        name: "Périmètre, livrables et calendrier",
        objective: "O5",
        notYet: "Pas de périmètre, de livrables ou de calendrier clairs.",
        meets: "Un périmètre clair (ce qui est compris et ce qui ne l'est pas), ce que reçoit le client et un calendrier.",
        exceeds: "Dit comment les changements de périmètre seront traités."
      },
      {
        name: "Votre prix",
        objective: "O5",
        notYet: "Pas de prix, ou le prix de l'IA repris tel quel.",
        meets: "Un prix fixé par l'apprenant.",
        exceeds: "L'apprenant peut expliquer le prix d'après ses heures, ses coûts et la valeur apportée."
      },
      {
        name: "Informations du client protégées",
        objective: "O6",
        notYet: "Pas de phrase sur l'usage de l'IA, ou des détails du client collés dans une IA publique.",
        meets: "Une phrase claire sur la façon dont l'IA est utilisée et dont les informations du client sont protégées.",
        exceeds: "Des repères ont été utilisés pour toute la rédaction avec l'IA."
      },
      {
        name: "Affirmations vraies et prochaine étape",
        objective: "O3",
        notYet: "Une affirmation n'est pas vraie, ou aucun bureau n'est nommé.",
        meets: "Chaque affirmation est vraie, et un bureau officiel et gratuit d'aide aux entreprises est indiqué comme prochain contact.",
        exceeds: "L'apprenant a une question prête pour ce bureau."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent l'exercice final (grille d'évaluation)",
      "Apprenants qui envoient au moins trois messages de prise de contact dans les 30 jours (enquête de suivi)",
      "Apprenants qui contactent un VBOC ou rejoignent Boots to Business dans les 60 jours",
      "Apprenants qui décrochent un premier client payant en conseil dans les 6 mois"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur ou un smartphone avec internet",
      "Un assistant d'IA gratuit : ChatGPT, Microsoft Copilot ou Google Gemini",
      "Le site gratuit sba.gov pour trouver un Veterans Business Outreach Center",
      "Un traitement de texte pour la proposition d'une page",
      "Environ 60 minutes au total : leçons, exercices, contrôles et exercice final"
    ],
    facilitatorNotes: [
      "Faites dire à voix haute l'offre en une phrase à un partenaire, puis faites-la améliorer une fois.",
      "Utilisez des clients inventés en classe, et exigez des repères pour tout détail sur un client.",
      "Ne proposez pas de prix ; demandez à chaque apprenant d'expliquer comment il a fixé le sien.",
      "Invitez un conseiller d'un VBOC ou de la SBA à la dernière séance pour répondre aux questions sur la création d'entreprise.",
      "Notez la proposition avec la grille, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
