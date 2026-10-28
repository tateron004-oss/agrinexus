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
  chapters: [
    {
      name: "Chapitre 1 : Construire votre offre de conseil",
      lessons: [
        {
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
          youCanNow: "expliquer ce que fait un consultant et comment l'IA soutient son travail."
        },
        {
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
          youCanNow: "écrire une offre de conseil claire fondée sur votre expertise militaire."
        },
        {
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
          youCanNow: "trouver une aide officielle gratuite pour créer une activité de conseil détenue par un vétéran."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Construire votre offre de conseil",
        questions: [
          { q: "Qu'est-ce qu'un consultant ?", options: ["Un inspecteur du gouvernement", "Un salarié à temps plein à vie", "Un expert extérieur payé pour régler un problème précis", "Un vendeur d'un seul produit"], answer: 2, why: "Les consultants sont engagés pour un travail et une durée précis." },
          { q: "Pour quoi les clients paient-ils surtout un consultant ?", options: ["Son jugement et ses résultats", "Son abonnement à l'IA", "Son uniforme", "Sa vitesse de frappe"], answer: 0, why: "L'IA aide, mais les clients paient pour l'expertise." },
          { q: "Laquelle est une offre claire ?", options: ["\"Appelez-moi.\"", "\"Je fais des trucs.\"", "\"Je suis un vétéran.\"", "\"J'aide les petites entreprises du bâtiment à mettre en place un programme de sécurité pour réussir les inspections.\""], answer: 3, why: "Elle nomme qui, le problème et le résultat." },
          { q: "Comment tester si votre offre est réelle ?", options: ["Demander seulement à l'IA", "Demander à des gens du domaine s'ils paieraient pour régler le problème", "Deviner", "Imprimer d'abord des cartes de visite"], answer: 1, why: "De vrais acheteurs vous disent si le problème vaut d'être payé." },
          { q: "Où les vétérans trouvent-ils une aide gratuite pour le plan d'affaires et du mentorat ?", options: ["Chez un concessionnaire auto", "Dans un Veterans Business Outreach Center", "Dans une publicité sur un réseau social", "Dans un groupe crypto"], answer: 1, why: "Les VBOC sont des centres financés par la SBA pour les chefs d'entreprise vétérans." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Décrocher et réaliser les missions",
      lessons: [
        {
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
          youCanNow: "écrire un message de prise de contact honnête qui demande un court appel à un client possible."
        },
        {
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
          youCanNow: "préparer et corriger avec l'aide de l'IA une proposition de conseil claire d'une page."
        },
        {
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
          youCanNow: "proposer du conseil fondé sur votre expertise militaire, écrire une proposition avec l'IA et protéger les informations de votre client."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Décrocher et réaliser les missions",
        questions: [
          { q: "D'où viennent souvent les premiers clients d'un consultant ?", options: ["De nulle part", "De publicités au hasard", "Seulement d'appels à des inconnus", "De personnes et de groupes qui vous connaissent déjà"], answer: 3, why: "La confiance des gens qui vous connaissent ouvre les portes le plus vite." },
          { q: "Quelle est une bonne petite demande dans un message de prise de contact ?", options: ["Un appel de 15 minutes", "Un contrat d'un an", "Ses coordonnées bancaires", "Un gros paiement d'avance"], answer: 0, why: "Un court appel est facile à accepter." },
          { q: "Qui doit fixer votre prix ?", options: ["Un site au hasard", "L'IA", "Vous, selon vos heures, vos frais et la valeur", "Le client seul"], answer: 2, why: "Le prix est une décision de votre entreprise." },
          { q: "Qu'est-ce que la dérive du périmètre ?", options: ["Une livraison rapide", "Un type d'IA", "Un formulaire juridique", "Quand un travail grossit au-delà de ce qui était convenu"], answer: 3, why: "Un périmètre clair empêche le travail de grossir sans être payé." },
          { q: "Pouvez-vous coller les projets confidentiels d'un client dans un outil d'IA public ?", options: ["Oui, si ça fait gagner du temps", "Toujours", "Seulement si le client est d'accord et que l'outil est autorisé pour ça", "Oui, si vous l'effacez après"], answer: 2, why: "Les informations du client demandent son accord et un outil autorisé." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Opportunités de conseil avec l'IA",
    questions: [
      { q: "Un livrable, c'est :", options: ["Votre voiture", "Ce que vous remettez à la fin, comme un plan ou un rapport", "Votre numéro de facture", "L'outil d'IA"], answer: 1, why: "Les livrables sont les résultats que reçoit le client." },
      { q: "Laquelle est une façon dont l'IA aide les consultants ?", options: ["Écrire des premiers jets de propositions et de rapports", "Remplacer tout jugement", "Signer les contrats", "Détenir une habilitation de sécurité"], answer: 0, why: "L'IA accélère la rédaction ; c'est vous qui décidez." },
      { q: "Le conseil en IA peut comprendre :", options: ["Vendre les données des clients", "Pirater les concurrents", "Aider un petit groupe à écrire une politique simple d'usage de l'IA", "Garantir des profits"], answer: 2, why: "L'adoption sûre de l'IA est un vrai besoin de conseil." },
      { q: "Les trois parties d'une offre sont :", options: ["Qui vous aidez, le problème et le résultat", "Logo, couleur et police", "Grade, unité et base", "Prix, taxe et frais"], answer: 0, why: "Elles rendent l'offre claire pour un acheteur." },
      { q: "Une niche, c'est :", options: ["Une application d'IA", "Un type d'impôt", "Un insigne militaire", "Un petit groupe précis de clients sur lequel vous vous concentrez"], answer: 3, why: "Se concentrer rend votre offre plus facile à vendre." },
      { q: "Un ancien formateur pourrait proposer de :", options: ["Piloter des avions sans licence", "Aider des associations à accueillir leurs bénévoles", "Donner des conseils juridiques", "Vendre de la crypto"], answer: 1, why: "Les compétences de formation se transfèrent directement." },
      { q: "Boots to Business est géré par :", options: ["Une banque privée", "La SBA, dans le cadre du Transition Assistance Program", "Un réseau social", "L'IRS"], answer: 1, why: "La SBA le gère dans le TAP." },
      { q: "Boots to Business Reboot s'adresse :", options: ["Seulement aux étudiants", "Seulement aux officiers en activité", "Seulement aux civils", "Aux vétérans de toutes les époques, y compris la Garde nationale et la réserve"], answer: 3, why: "La SBA dit que Reboot sert les vétérans de toutes les époques." },
      { q: "VetCert, c'est :", options: ["La certification de la SBA pour les petites entreprises détenues par des vétérans et des vétérans handicapés du service", "Un formulaire d'impôts", "Un site d'emploi", "Un paiement du GI Bill"], answer: 0, why: "La SBA gère VetCert pour les marchés publics." },
      { q: "Où demander VetCert ?", options: ["Dans n'importe quelle discussion avec une IA", "Par un lien dans un SMS", "Sur certifications.sba.gov", "Sur une page de réseau social"], answer: 2, why: "Le site de certification de la SBA traite les demandes." },
      { q: "Les questions sur les licences et les impôts de l'entreprise vont de préférence à :", options: ["Personne", "Seulement une discussion avec une IA", "Un forum au hasard", "Le service des entreprises de votre État, irs.gov ou un conseiller d'un VBOC"], answer: 3, why: "Les services officiels et les conseillers donnent les règles actuelles." },
      { q: "Un bon message de prise de contact contient :", options: ["Votre numéro de sécurité sociale", "Toute l'histoire de votre vie", "Qui vous êtes, le problème, une preuve et une petite demande", "Une demande de paiement"], answer: 2, why: "Court et précis, il obtient des réponses." },
      { q: "Un brouillon de l'IA dit que vous avez une certification que vous n'avez pas. Vous devez :", options: ["La garder", "L'enlever", "En ajouter deux autres", "Demander au client de ne pas vérifier"], answer: 1, why: "Chaque affirmation doit être vraie." },
      { q: "Une proposition ressemble à quel document militaire ?", options: ["Un ordre d'opération", "Une demande de permission", "Une inspection de tenue", "Une fiche de solde"], answer: 0, why: "Les deux présentent la situation, la mission et l'exécution." },
      { q: "Le périmètre, dans une proposition, c'est :", options: ["Seulement le prix", "La lunette d'un fusil", "Exactement quel travail est compris et lequel ne l'est pas", "L'adresse du client"], answer: 2, why: "Un périmètre clair évite les désaccords." },
      { q: "Quand vous demandez à l'IA d'écrire une proposition, donnez-lui :", options: ["Vos notes, sans données privées du client", "Les coordonnées bancaires du client", "Les adresses du personnel", "Les mots de passe"], answer: 0, why: "Gardez les données privées du client à l'écart." },
      { q: "Qui est responsable des erreurs dans un travail client rédigé avec l'IA ?", options: ["Le client", "L'entreprise d'IA", "Personne", "Vous"], answer: 3, why: "C'est vous qui livrez le travail, donc il est sous votre responsabilité." },
      { q: "Que vérifier avant de remettre un travail rédigé avec l'IA ?", options: ["Seulement la police", "Les faits, les chiffres, les noms et les lois", "Rien", "Seulement l'orthographe"], answer: 1, why: "L'IA peut se tromper sur les faits." },
      { q: "Comment parler de l'IA à vos clients ?", options: ["Le cacher", "Une phrase claire dans la proposition sur votre façon de l'utiliser et de protéger leurs données", "Dire que l'IA a tout fait", "Ne jamais en parler"], answer: 1, why: "La transparence crée la confiance." },
      { q: "Un repère comme [nom du client] vous aide à :", options: ["Obtenir une certification", "Facturer plus vite", "Sauter la proposition", "Rédiger avec l'IA sans partager de détails privés"], answer: 3, why: "Les repères gardent les vrais noms hors des outils d'IA." }
    ]
  }
};
