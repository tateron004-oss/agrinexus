"use strict";

// Koach Learn course (shared), French translation of "AI for Customer Experience". Shape and rules: ../../../README.md (Translations).

module.exports = {
  id: "ai-customer-experience-fr",
  lang: "fr",
  translationOf: "ai-customer-experience",
  category: "Small Business",
  name: "L'IA au service de l'expérience client",
  skills: "Cartographier le parcours client, Rédiger des modèles de réponse avec l'IA, Répondre aux avis et aux réclamations, Analyser les retours avec l'IA, Personnaliser sans perdre la confidentialité, Construire un plan d'amélioration",
  outcome: "cartographier la façon dont les clients ou bénéficiaires vivent votre organisation, utiliser l'IA pour rédiger des réponses rapides et chaleureuses aux questions, avis et réclamations, classer les retours en principaux problèmes et les transformer en un plan d'amélioration sur 30 jours.",
  about: [
    "L'expérience client, c'est ce que les gens ressentent à chaque moment où ils ont affaire à vous : vous trouver, poser une question, acheter ou recevoir de l'aide, et ce qui se passe après. Les clients satisfaits reviennent et en parlent à leurs amis ; les mécontents partent sans rien dire ou laissent un mauvais avis.",
    "Ce cours s'adresse aux propriétaires et au personnel de petites entreprises, et aux associations dont les « clients » sont des bénéficiaires, des familles, des donateurs et des bénévoles. Exemples : un salon de coiffure pour hommes, une entreprise de réparations à domicile, l'accueil d'une clinique et une banque alimentaire.",
    "Vous utiliserez des assistants d'IA gratuits comme ChatGPT, Microsoft Copilot ou Google Gemini pour rédiger des réponses et étudier les retours, tandis qu'une personne garde la main. Chaque leçon dure environ cinq minutes avec une tâche « Essayez maintenant », un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Pour une organisation réelle ou fictive, produisez un kit d'expérience client : une carte du parcours client avec les trois moments les plus faibles marqués, cinq modèles de réponse (question courante, avis positif, avis négatif, réclamation, relance), une synthèse d'au moins 15 commentaires réels ou d'exemple classés en principaux problèmes, et un plan d'amélioration sur 30 jours avec un responsable et une mesure par action.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des propriétaires de petites entreprises et du personnel en contact avec le public, ainsi que des personnes qui servent des bénéficiaires, des familles, des donateurs ou des bénévoles dans des associations et des organisations locales.",
    startingPoint: "Ils parlent avec les clients tous les jours par téléphone, SMS, e-mail, réseaux sociaux ou en personne, et lisent parfois les avis en ligne. Peu ont cartographié le parcours client, utilisé des modèles de réponse, classé les commentaires par thèmes ou suivi des améliorations.",
    gap: "Des réponses lentes, froides ou fausses et des réclamations sans réponse font perdre des clients et abîment les avis publics. Les apprenants doivent utiliser l'IA pour répondre vite et chaleureusement, apprendre des retours et faire une amélioration mesurée à la fois, tout en protégeant la vie privée des clients et en restant honnêtes.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes",
      "Appareils : un téléphone ou un ordinateur ; un ordinateur est plus pratique pour les documents et le tri des commentaires",
      "Vie privée : aucun nom, numéro de téléphone, détail de santé ou fichier client collé dans un outil d'IA grand public",
      "Honnêteté : aucun faux avis, et les clients sont prévenus quand ils parlent à une IA",
      "Temps : des leçons de 5 minutes, environ 60 minutes en tout, plus le temps de construire le kit"
    ],
    prerequisites: "Aucun. Les apprenants qui n'ont jamais utilisé d'assistant d'IA peuvent d'abord suivre un cours d'introduction à l'IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pour une organisation réelle ou fictive", action: "dessiner une carte du parcours client, de « Découvrir » à « Après », et marquer les trois moments les plus faibles", standard: "avec ce que le client fait et ressent à chaque étape" },
    { id: "O2", condition: "À partir de vos cinq questions les plus fréquentes et des vrais faits", action: "rédiger avec l'IA des modèles de réponse qui vous ressemblent", standard: "personnalisés et vérifiés avant chaque utilisation" },
    { id: "O3", condition: "À partir d'un avis positif, d'un avis négatif et d'une réclamation", action: "rédiger des réponses calmes et utiles avec la méthode écouter, s'excuser, résoudre, faire un suivi", standard: "sans aucun détail privé dans une réponse publique" },
    { id: "O4", condition: "À partir d'au moins 15 commentaires clients dont les détails privés ont été retirés", action: "classer les commentaires par thèmes avec l'IA et hiérarchiser les trois principaux problèmes", standard: "après avoir vérifié quelques commentaires dans chaque thème" },
    { id: "O5", condition: "Pour un message de remerciement, de rappel ou de relance", action: "rédiger un modèle personnalisé avec des champs à remplir, qui protège la vie privée et reste honnête", standard: "envoyé seulement aux personnes qui ont accepté vos messages, avec un moyen de joindre une personne" },
    { id: "O6", condition: "À partir de vos trois principaux problèmes", action: "créer un plan d'amélioration sur 30 jours", standard: "avec une action, un responsable et une mesure pour chaque problème" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Voir vos clients et leur répondre",
      lessons: [
        {
          objectives: ["O1"],
          title: "Cartographier le parcours client",
          minutes: 5,
          goal: "Dessiner une carte du parcours client et marquer les moments les plus faibles.",
          text: [
            "Une carte du parcours client liste chaque étape qu'une personne vit avec vous, dans l'ordre : découvrir (comment elle vous trouve), demander (premier contact), décider, acheter ou recevoir le service, et après (suivi, avis, retour).",
            "À chaque étape, notez ce que fait le client, ce qu'il ressent et ce qui pourrait mal tourner. Pour une banque alimentaire : une famille trouve les horaires en ligne, appelle avec une question, attend dans la file, reçoit de la nourriture, et se demande quand revenir.",
            "L'IA peut vous aider à voir les étapes oubliées. Demandez : « Je gère une entreprise de réparations à domicile. Liste chaque étape que vit un client, de la première recherche à l'après-chantier, et ce qui pourrait l'agacer à chaque étape. » Comparez ensuite avec ce que vous voyez chaque jour."
          ],
          steps: ["Listez les étapes : découvrir, demander, décider, acheter ou recevoir, après.", "Pour chaque étape, notez ce que fait et ressent le client.", "Demandez à l'IA ce qui pourrait l'agacer à chaque étape.", "Marquez les trois moments les plus faibles."],
          words: [["Expérience client", "ce que les gens ressentent à chaque moment où ils ont affaire à une organisation."], ["Carte du parcours", "une image étape par étape de l'expérience d'un client."], ["Point de contact", "tout moment où un client a affaire à vous : un appel, une publication, une visite, un e-mail."]],
          slides: [
            { title: "Le parcours", bullets: ["Découvrir, demander, décider", "Acheter ou recevoir", "Après : suivi et retour"] },
            { title: "À chaque étape", bullets: ["Ce qu'il fait", "Ce qu'il ressent", "Ce qui pourrait mal tourner"] },
            { title: "Trouver les manques avec l'IA", bullets: ["Demander ce qui pourrait agacer les clients", "Comparer avec ce que vous voyez", "Marquer les trois moments les plus faibles"] }
          ],
          tryIt: "Dessinez une carte du parcours pour une organisation réelle ou fictive avec au moins cinq étapes. Utilisez l'IA pour trouver les irritants oubliés et marquez les trois moments les plus faibles.",
          youCanNow: "cartographier un parcours client et trouver où l'expérience se dégrade.",
          quickCheck: [
            { objective: "O1", q: "Quelle étape du parcours client concerne le suivi, les avis et le retour du client ?", options: ["Après", "Découvrir", "Demander", "Décider"], answer: 0, why: "L'étape « Après » couvre le suivi, les avis et les visites suivantes." },
            { objective: "O1", q: "L'IA liste des irritants pour la carte du parcours de votre entreprise de nettoyage. Que faites-vous de cette liste ?", options: ["La recopier comme carte finale", "La supprimer : l'IA ne peut pas aider", "La comparer à ce que vous voyez tous les jours et garder ce qui est vrai", "L'envoyer aux clients"], answer: 2, why: "L'IA peut signaler des étapes que vous avez oubliées, mais c'est votre expérience quotidienne qui les confirme." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rédiger des réponses rapides et chaleureuses avec l'IA",
          minutes: 5,
          goal: "Construire avec l'IA des modèles de réponse pour les questions les plus fréquentes.",
          text: [
            "Répondre vite compte. Un modèle est une réponse toute prête que vous adaptez à chaque personne. L'IA peut rédiger des modèles à votre façon en quelques secondes.",
            "Donnez du contexte à l'IA : votre organisation, votre ton et les faits. « Écris une réponse aimable pour un salon de coiffure à la question \"Prenez-vous sans rendez-vous ?\". Faits : sans rendez-vous du mardi au jeudi, rendez-vous obligatoire le vendredi et le samedi, réservation sur notre site. Moins de 50 mots. »",
            "Personnalisez toujours avant d'envoyer : utilisez le nom de la personne, répondez exactement à sa question et vérifiez les faits. Une réponse qui sonne comme un robot ou qui se trompe d'horaires fait plus de mal que de bien."
          ],
          steps: ["Listez vos cinq questions les plus fréquentes.", "Donnez à l'IA votre ton et les vrais faits pour chacune.", "Demandez un modèle court et aimable.", "Enregistrez les modèles dans un document.", "Personnalisez et vérifiez les faits à chaque utilisation."],
          words: [["Modèle", "une réponse toute prête que vous adaptez à chaque personne."], ["Personnaliser", "modifier un message pour qu'il convienne à une personne précise."]],
          slides: [
            { title: "La rapidité compte", bullets: ["Les modèles aident à répondre vite", "L'IA les rédige en quelques secondes"] },
            { title: "Donner les faits à l'IA", bullets: ["Votre ton", "Les vrais faits", "Une limite de mots"] },
            { title: "Personnaliser à chaque fois", bullets: ["Utiliser son nom", "Répondre exactement à sa question", "Vérifier les faits"] }
          ],
          tryIt: "Utilisez l'IA pour rédiger des modèles pour vos trois questions clients les plus fréquentes. Enregistrez-les, puis personnalisez-en un pour un client imaginaire.",
          youCanNow: "construire et personnaliser des modèles de réponse rédigés par l'IA.",
          quickCheck: [
            { objective: "O2", q: "Que devez-vous donner à l'IA pour qu'un modèle de réponse soit exact ?", options: ["Les numéros de téléphone des clients", "Votre ton et les vrais faits", "Seulement le mot « réponse »", "Le site web d'un concurrent"], answer: 1, why: "Votre ton et les vrais faits permettent à l'IA de rédiger une réponse juste qui vous ressemble." },
            { objective: "O2", q: "Une cliente nommée Ana pose une question sur le stationnement. Vous avez un modèle. Que faites-vous ?", options: ["Envoyer le modèle tel quel", "Ignorer la question", "Lui envoyer tous vos modèles", "Ajouter son prénom, répondre exactement à sa question et vérifier les faits"], answer: 3, why: "Personnalisez et vérifiez les faits chaque fois que vous utilisez un modèle." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Répondre aux avis et aux réclamations",
          minutes: 6,
          goal: "Répondre à un avis positif, à un avis négatif et à une réclamation avec calme et utilité.",
          text: [
            "Les avis sont publics : votre réponse s'adresse à tous les lecteurs, pas seulement à l'auteur. Remerciez pour les avis positifs en citant un détail précis. Pour les avis négatifs, restez calme, excusez-vous pour son expérience, ne discutez pas, et proposez de régler la situation en privé avec un téléphone ou un e-mail.",
            "Pour les réclamations, suivez un schéma simple : écouter, s'excuser, résoudre, faire un suivi. Demandez à l'IA : « Aide-moi à répondre à cette réclamation. Schéma : reconnaître, s'excuser, proposer cette solution : [votre solution], l'inviter à écrire à [e-mail]. »",
            "Ne partagez jamais de détails privés dans une réponse publique, comme des dates de rendez-vous, des informations de santé ou ce que quelqu'un a acheté. Ne publiez jamais de faux avis et n'en achetez pas. Si un avis contient des menaces ou de fausses accusations, suivez la procédure de signalement de la plateforme."
          ],
          steps: ["Lisez l'avis deux fois et attendez si vous êtes contrarié.", "Remerciez (positif) ou reconnaissez et excusez-vous (négatif).", "Proposez une solution précise ou un moyen d'en parler en privé.", "Gardez les détails privés hors des réponses publiques.", "Faites un suivi pour vérifier que c'est réglé."],
          words: [["Avis", "un commentaire public et une note sur une entreprise."], ["En privé", "hors de la page publique, par exemple par téléphone ou par e-mail privé."]],
          slides: [
            { title: "Les réponses sont publiques", bullets: ["Tout le monde les lit", "Remercier les avis positifs avec un détail précis"] },
            { title: "Avis négatifs", bullets: ["Rester calme, ne pas discuter", "S'excuser pour son expérience", "Proposer de régler en privé"] },
            { title: "Schéma de réclamation", bullets: ["Écouter, s'excuser, résoudre, faire un suivi", "Aucun détail privé en public", "Jamais de faux avis"] }
          ],
          tryIt: "Rédigez avec l'aide de l'IA des réponses à un avis positif, un avis négatif et une réclamation (réels ou inventés). Vérifiez pour chacune le ton calme et l'absence de détails privés.",
          youCanNow: "répondre aux avis et aux réclamations avec calme et utilité, sans partager de détails privés.",
          quickCheck: [
            { objective: "O3", q: "Que doit contenir une réponse à un avis positif ?", options: ["Un code de réduction pour tout le monde", "Une discussion sur le nombre d'étoiles", "Un merci et un détail précis tiré de son avis", "La date de rendez-vous du client"], answer: 2, why: "Remerciez et mentionnez un détail précis pour que la réponse sonne vrai." },
            { objective: "O3", q: "Un patient écrit en ligne que votre clinique l'a fait attendre une heure. Comment répondez-vous en public ?", options: ["Reconnaître le problème, s'excuser et proposer d'en parler hors ligne par téléphone ou par e-mail", "Expliquer les détails de son rendez-vous et la raison médicale de l'attente", "Dire qu'il a tort", "Supprimer la page de votre entreprise"], answer: 0, why: "Restez calme, excusez-vous, proposez de régler le problème hors ligne et ne donnez aucun détail privé." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Voir vos clients et leur répondre",
        questions: [
          { objective: "O1", q: "Que montre une carte du parcours client ?", options: ["Seulement l'itinéraire de votre camion de livraison", "Votre solde bancaire", "Chaque étape qu'un client vit avec vous", "Les horaires des employés"], answer: 2, why: "Elle liste chaque étape et ce que ressent le client." },
          { objective: "O1", q: "Lequel est un point de contact ?", options: ["Un appel téléphonique avec un client", "Seulement la couleur des murs du bureau", "Votre déclaration d'impôts", "La facture d'un fournisseur"], answer: 0, why: "Les points de contact sont les moments où un client a affaire à vous." },
          { objective: "O2", q: "Que faut-il toujours faire avant d'envoyer une réponse rédigée par l'IA ?", options: ["L'envoyer sans la lire", "Ajouter plus d'émojis", "Retirer le nom du client", "La personnaliser et vérifier les faits"], answer: 3, why: "Des réponses personnelles et exactes créent la confiance." },
          { objective: "O3", q: "Un client laisse un avis en colère. Quelle est la meilleure première étape ?", options: ["Discuter publiquement", "Rester calme, s'excuser pour son expérience et proposer de régler en privé", "Publier les détails de son rendez-vous", "L'ignorer pour toujours"], answer: 1, why: "Des réponses calmes et utiles montrent aux lecteurs que vous vous souciez d'eux." },
          { objective: "O3", q: "Qu'est-ce qui ne doit jamais apparaître dans une réponse publique à un avis ?", options: ["« Merci »", "Les informations de santé du client", "Une proposition d'en parler au téléphone", "Le nom de votre entreprise"], answer: 1, why: "Les détails privés restent hors des réponses publiques." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Apprendre des retours et s'améliorer",
      lessons: [
        {
          objectives: ["O4"],
          title: "Analyser les retours avec l'IA",
          minutes: 6,
          goal: "Utiliser l'IA pour classer les commentaires clients par thèmes et trouver les principaux problèmes.",
          text: [
            "Les retours se cachent à beaucoup d'endroits : avis, enquêtes, e-mails, commentaires sur les réseaux et notes du personnel. Tout lire à la main prend des heures. L'IA peut les classer en quelques minutes.",
            "Rassemblez au moins 15 commentaires dans un document. Retirez les noms, numéros de téléphone et autres détails privés. Puis demandez : « Classe ces commentaires par thèmes. Pour chaque thème, compte combien de commentaires le mentionnent, dis s'il est positif ou négatif, et donne une citation en exemple. »",
            "Vérifiez le travail de l'IA : lisez quelques commentaires de chaque thème pour confirmer qu'ils y ont leur place. L'IA peut mal compter ou fusionner des problèmes différents. Le résultat est votre liste des principaux problèmes, classés selon leur fréquence et le tort qu'ils font à l'expérience."
          ],
          steps: ["Rassemblez au moins 15 commentaires tirés d'avis, d'enquêtes et d'e-mails.", "Retirez les noms et les détails privés.", "Demandez à l'IA de les classer par thèmes avec des nombres et des exemples.", "Vérifiez quelques commentaires par thème.", "Classez les trois principaux problèmes."],
          words: [["Retour", "ce que les clients vous disent de leur expérience."], ["Thème", "un sujet qui revient encore et encore."], ["Sentiment", "le fait qu'un commentaire soit positif, négatif ou neutre."]],
          slides: [
            { title: "Les retours sont partout", bullets: ["Avis, enquêtes, e-mails", "Commentaires en ligne, notes du personnel"] },
            { title: "Laisser l'IA classer", bullets: ["Retirer d'abord les détails privés", "Demander thèmes, nombres, sentiment, un exemple"] },
            { title: "Vérifier et classer", bullets: ["Contrôler chaque thème", "Classer selon la fréquence et le tort causé"] }
          ],
          tryIt: "Rassemblez au moins 15 commentaires réels ou d'exemple, retirez les détails privés et faites-les classer par thèmes par l'IA. Vérifiez les résultats et listez vos trois principaux problèmes.",
          youCanNow: "transformer une pile de commentaires clients en une liste classée des principaux problèmes.",
          quickCheck: [
            { objective: "O4", q: "Pourquoi vérifier les thèmes créés par l'IA ?", options: ["L'IA a toujours raison", "Pour allonger la liste", "Pour remettre les noms des clients", "L'IA peut mal compter ou mélanger des problèmes différents"], answer: 3, why: "Lire quelques commentaires par thème permet de repérer les erreurs de comptage et les problèmes mélangés." },
            { objective: "O4", q: "Huit commentaires parlent de réponses lentes et deux parlent du stationnement. Lequel placez-vous plus haut ?", options: ["Le stationnement, parce que c'est plus facile", "Les réponses lentes, parce que plus de gens en parlent", "Aucun : ignorer les deux", "Celui que l'IA met en premier"], answer: 1, why: "Classez les problèmes selon leur fréquence et le tort qu'ils causent." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Personnaliser le service sans perdre la confiance",
          minutes: 5,
          goal: "Utiliser l'IA pour personnaliser les messages tout en protégeant la vie privée des clients et en restant honnête.",
          text: [
            "Les attentions personnelles font que les gens se sentent valorisés : une réduction d'anniversaire, un rappel avant le prochain rendez-vous d'un client, ou un mot de remerciement à un donateur qui cite le programme qu'il a soutenu.",
            "L'IA peut aider à rédiger ces messages en grand nombre à partir d'un modèle. Donnez-lui seulement les détails nécessaires, comme un prénom et le type de service, pas des dossiers complets. Utilisez votre propre logiciel clients ou outil d'e-mail pour insérer les noms, plutôt que de coller des listes de clients dans un outil d'IA grand public.",
            "Soyez honnête : si un chatbot ou une IA répond aux clients, dites-le. Facilitez le contact avec une personne. N'écrivez qu'aux personnes qui ont accepté vos messages, et rendez le désabonnement facile."
          ],
          steps: ["Choisissez un moment personnel : un remerciement, un rappel ou une relance.", "Faites rédiger par l'IA un modèle avec des champs comme [Prénom].", "Remplissez les noms avec votre propre outil d'e-mail ou logiciel clients.", "Dites clairement quand un client parle avec une IA.", "Proposez toujours un moyen de joindre une personne."],
          words: [["Champ à remplir", "un repère comme [Prénom] qui est remplacé par les vrais détails."], ["Se désabonner", "choisir de ne plus recevoir de messages."]],
          slides: [
            { title: "Attentions personnelles", bullets: ["Remerciements et rappels", "Mentionner ce qui compte pour eux"] },
            { title: "Protéger la vie privée", bullets: ["Utiliser des champs comme [Prénom]", "Insérer les noms dans votre propre outil", "Pas de listes de clients dans les IA grand public"] },
            { title: "Rester honnête", bullets: ["Dire quand une IA répond", "Joindre facilement une personne", "Se désabonner facilement"] }
          ],
          tryIt: "Rédigez avec l'IA un modèle de remerciement ou de relance personnalisé avec des champs à remplir. Vérifiez qu'il ne demande aucun détail privé et propose un moyen de joindre une personne.",
          youCanNow: "personnaliser des messages clients avec l'IA en protégeant la vie privée et en restant honnête.",
          quickCheck: [
            { objective: "O5", q: "Quelle est la façon la plus sûre d'envoyer un mot de remerciement à 200 donateurs ?", options: ["Utiliser un modèle avec [Prénom] et insérer les noms dans votre propre outil d'e-mail", "Coller la liste complète des donateurs dans un outil d'IA gratuit", "Écrire chaque mot à la main sans vérifier", "Publier tous leurs noms sur les réseaux sociaux"], answer: 0, why: "Insérez les noms dans votre propre outil pour que la liste des donateurs n'aille jamais dans un outil d'IA grand public." },
            { objective: "O5", q: "Le chatbot de votre site web répond aux questions des clients. Que devez-vous ajouter ?", options: ["Un faux nom d'employé", "Rien : les clients préfèrent ne pas savoir", "Une mention claire qu'il s'agit d'une IA et un moyen de joindre une personne", "Une demande de numéro de carte"], answer: 2, why: "Dire honnêtement qu'il s'agit d'une IA et proposer une personne crée la confiance." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Transformer les constats en plan d'amélioration sur 30 jours",
          minutes: 5,
          goal: "Transformer vos principaux problèmes en un plan sur 30 jours avec responsables et mesures.",
          text: [
            "Les constats ne comptent que si quelque chose change. Pour chacun de vos trois principaux problèmes, choisissez une action faisable en 30 jours. Exemple : « Les clients disent qu'ils attendent trop leurs devis » devient « Envoyer chaque devis sous 24 heures grâce à un modèle de devis rédigé par l'IA. »",
            "Donnez à chaque action un responsable et une mesure : un chiffre qui montrera si cela a marché, comme le délai moyen de réponse, la note des avis, les visites répétées ou les réclamations par semaine.",
            "Dites aux clients ce que vous avez changé : « Vous nous l'avez dit, nous vous avons écoutés. » Après 30 jours, vérifiez les mesures, gardez ce qui a marché et choisissez le problème suivant."
          ],
          steps: ["Écrivez une action pour chaque problème principal.", "Donnez un responsable à chaque action.", "Choisissez une mesure pour chacune.", "Notez le chiffre de départ.", "Vérifiez de nouveau après 30 jours et partagez ce qui a changé."],
          words: [["Constat", "une compréhension utile qui vient de l'étude des informations."], ["Mesure", "un chiffre qui montre si un changement a marché."]],
          slides: [
            { title: "Du constat à l'action", bullets: ["Une action par problème principal", "Faisable en 30 jours"] },
            { title: "Responsable et mesure", bullets: ["Qui le fait", "Délai de réponse, notes, visites répétées, réclamations"] },
            { title: "Boucler la boucle", bullets: ["« Vous nous l'avez dit, nous vous avons écoutés »", "Vérifier à 30 jours", "Choisir le problème suivant"] }
          ],
          tryIt: "Tâche finale : rédigez un plan d'amélioration sur 30 jours pour vos trois principaux problèmes, avec pour chacun une action, un responsable, une mesure et un chiffre de départ. Ajoutez-le à votre carte du parcours, vos modèles et votre synthèse des retours pour compléter votre kit d'expérience client.",
          youCanNow: "trouver, corriger et mesurer les problèmes d'expérience client avec l'aide de l'IA.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qu'une mesure dans un plan d'amélioration ?", options: ["La personne responsable", "Un chiffre qui montre si l'action a marché", "Le nom du client", "La date de création de l'entreprise"], answer: 1, why: "Une mesure est un chiffre, comme le délai moyen de réponse, qui montre si l'action a marché." },
            { objective: "O6", q: "Les clients disent qu'ils ne trouvent pas vos horaires. Quelle est une bonne action sur 30 jours ?", options: ["Attendre de voir si ça s'améliore", "Demander à l'IA d'écrire des avis sur vos horaires", "Retirer complètement les horaires", "Afficher les horaires sur chaque page et chaque profil, avec un responsable et une mesure"], answer: 3, why: "Chaque problème principal reçoit une action claire, un responsable et une mesure." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Apprendre des retours et s'améliorer",
        questions: [
          { objective: "O4", q: "Avant de coller des commentaires clients dans l'IA, vous devez :", options: ["Ajouter leurs numéros de téléphone", "Ajouter leurs numéros de carte", "Rien", "Retirer les noms et les détails privés"], answer: 3, why: "La vie privée passe en premier." },
          { objective: "O4", q: "L'IA classe les commentaires par thèmes. Que faites-vous ensuite ?", options: ["Vérifier quelques commentaires de chaque thème", "Lui faire entièrement confiance", "Supprimer les commentaires", "Publier les thèmes avec les noms"], answer: 0, why: "L'IA peut mal compter ou fusionner des problèmes." },
          { objective: "O5", q: "Qu'est-ce qu'un champ à remplir ?", options: ["Un faux avis", "Un type de réclamation", "Un repère comme [Prénom] remplacé par les vrais détails", "Le mot de passe d'un client"], answer: 2, why: "Les champs à remplir permettent de personnaliser en sécurité." },
          { objective: "O5", q: "Un chatbot répond à vos clients. Que devez-vous leur dire ?", options: ["Que c'est un vrai employé", "Rien", "D'arrêter de poser des questions", "Que c'est une IA et comment joindre une personne"], answer: 3, why: "L'honnêteté crée la confiance." },
          { objective: "O6", q: "Quelle est une bonne mesure pour l'action « envoyer les devis sous 24 heures » ?", options: ["Le nombre de plantes au bureau", "L'âge du propriétaire", "Le délai moyen d'envoi d'un devis", "Les couleurs du site web"], answer: 2, why: "La mesure doit montrer si l'action a marché." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA au service de l'expérience client",
    questions: [
      { objective: "O1", q: "L'expérience client, c'est :", options: ["Seulement le prix", "Ce que les gens ressentent à chaque moment où ils ont affaire à vous", "Seulement votre site web", "Le salaire de votre personnel"], answer: 1, why: "Elle couvre chaque point de contact." },
      { objective: "O1", q: "Quelle est la première étape d'un parcours client ?", options: ["Découvrir : comment il vous trouve", "Laisser un avis", "Payer", "Revenir"], answer: 0, why: "Le parcours commence quand il vous trouve." },
      { objective: "O1", q: "Pour une association, les « clients » peuvent inclure :", options: ["Seulement les acheteurs", "Seulement le conseil d'administration", "Les bénéficiaires, familles, donateurs et bénévoles", "Personne"], answer: 2, why: "Toute personne que l'association sert ou sur qui elle compte." },
      { objective: "O1", q: "L'IA peut aider une carte du parcours en :", options: ["Proposant des irritants que vous avez pu oublier", "Remplaçant vos clients", "Collectant des numéros de carte", "Écrivant de faux avis"], answer: 0, why: "Elle propose des idées ; vous comparez avec la réalité." },
      { objective: "O2", q: "Un modèle de réponse est :", options: ["Un contrat juridique", "Une enquête", "Un site d'avis", "Une réponse toute prête que vous adaptez à chaque personne"], answer: 3, why: "Les modèles accélèrent les réponses." },
      { objective: "O2", q: "Que donner à l'IA pour rédiger un modèle ?", options: ["Les mots de passe des clients", "Votre ton et les vrais faits", "Rien", "Les avis d'un concurrent"], answer: 1, why: "Les faits et le ton donnent des réponses exactes et à votre image." },
      { objective: "O2", q: "Un modèle de l'IA dit que vous ouvrez à 8 h, mais vous ouvrez à 9 h. Que faites-vous ?", options: ["L'envoyer quand même", "Corriger le fait avant de l'utiliser", "Changer vos horaires", "Accuser le client"], answer: 1, why: "Vérifiez toujours les faits." },
      { objective: "O3", q: "À qui s'adresse vraiment une réponse publique à un avis ?", options: ["Seulement à l'auteur de l'avis", "À personne", "Au propriétaire du site d'avis", "À tous ceux qui lisent les avis"], answer: 3, why: "Les futurs clients lisent vos réponses." },
      { objective: "O3", q: "Le schéma de réclamation de ce cours est :", options: ["Écouter, s'excuser, résoudre, faire un suivi", "Discuter, nier, supprimer, ignorer", "Attendre, attendre, attendre, attendre", "Toujours tout rembourser"], answer: 0, why: "Ce schéma transforme les réclamations en confiance." },
      { objective: "O3", q: "Écrire des avis sur sa propre entreprise, c'est :", options: ["Une bonne stratégie", "Obligatoire", "Trompeur et à ne jamais faire", "Acceptable avec l'IA"], answer: 2, why: "Les faux avis induisent les clients en erreur." },
      { objective: "O3", q: "Un avis contient des menaces. Vous devez :", options: ["Menacer en retour", "Publier son adresse", "Ignorer tous les avis", "Suivre la procédure de signalement de la plateforme"], answer: 3, why: "Les plateformes ont des procédures pour les contenus abusifs." },
      { objective: "O4", q: "Combien de commentaires le cours conseille-t-il de rassembler pour l'analyse ?", options: ["Exactement 1", "Aucun", "Au moins 15", "Au moins 10 000"], answer: 2, why: "Quinze ou plus montrent de vraies tendances." },
      { objective: "O4", q: "Un thème est :", options: ["Un design de site web", "Un sujet qui revient encore et encore", "Une seule réclamation", "Un code de réduction"], answer: 1, why: "Les thèmes révèlent les problèmes fréquents." },
      { objective: "O4", q: "Le sentiment désigne :", options: ["Le fait qu'un commentaire soit positif, négatif ou neutre", "La longueur d'un commentaire", "Son auteur", "Sa date"], answer: 0, why: "Le sentiment est l'émotion derrière le commentaire." },
      { objective: "O4", q: "Les principaux problèmes doivent être classés selon :", options: ["L'ordre alphabétique", "Qui s'est plaint le plus fort", "Leur fréquence et le tort qu'ils causent", "Le hasard"], answer: 2, why: "La fréquence et l'impact montrent les priorités." },
      { objective: "O5", q: "La façon la plus sûre d'ajouter des noms de clients à de nombreux messages est :", options: ["Utiliser des champs à remplir et insérer les noms dans votre propre outil d'e-mail ou logiciel clients", "Coller toute la liste de clients dans un outil d'IA grand public", "Deviner les noms", "Publier la liste"], answer: 0, why: "Votre propre outil garde les données clients sous votre contrôle." },
      { objective: "O5", q: "Vous devez écrire aux clients qui :", options: ["Ne vous ont jamais donné leurs coordonnées", "Vous ont demandé d'arrêter", "Que vous avez trouvés en ligne", "Ont accepté vos messages"], answer: 3, why: "Le consentement compte, et les désabonnements doivent être respectés." },
      { objective: "O6", q: "Chaque action d'amélioration a besoin :", options: ["D'un nouveau logo", "D'un responsable et d'une mesure", "D'un plus grand bureau", "De rien"], answer: 1, why: "Les responsables la réalisent ; les mesures montrent si elle a marché." },
      { objective: "O6", q: "« Vous nous l'avez dit, nous vous avons écoutés » est une façon de :", options: ["Cacher les problèmes", "Montrer aux clients ce que vous avez changé", "Demander des mots de passe", "Augmenter les prix"], answer: 1, why: "Boucler la boucle crée la fidélité." },
      { objective: "O6", q: "Après 30 jours, vous devez :", options: ["Arrêter d'écouter les clients", "Supprimer le plan", "Ne jamais vérifier", "Vérifier les mesures, garder ce qui a marché et choisir le problème suivant"], answer: 3, why: "L'amélioration est un cycle qui se répète." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      1,
      4,
      6,
      8,
      9,
      12,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Carte du parcours",
        objective: "O1",
        notYet: "Des étapes manquent, ou les moments les plus faibles ne sont pas marqués.",
        meets: "Les cinq étapes avec ce que le client fait et ressent, et trois moments les plus faibles marqués.",
        exceeds: "Chaque moment faible est relié à un vrai commentaire ou à une observation du personnel."
      },
      {
        name: "Modèles de réponse",
        objective: "O2",
        notYet: "Moins de cinq modèles, ou un modèle contient des faits faux.",
        meets: "Cinq modèles (question, avis positif, avis négatif, réclamation, relance) avec des faits vrais et un ton chaleureux.",
        exceeds: "Chaque modèle a des champs à remplir et une note sur ce qu'il faut personnaliser."
      },
      {
        name: "Réponses aux avis et aux réclamations",
        objective: "O3",
        notYet: "Une réponse se dispute, accuse ou partage des détails privés.",
        meets: "Les réponses sont calmes, s'excusent quand il le faut et proposent une solution ou d'en parler hors ligne.",
        exceeds: "Inclut une étape de suivi pour vérifier que le problème est réglé."
      },
      {
        name: "Synthèse des commentaires",
        objective: "O4",
        notYet: "Moins de 15 commentaires, ou des noms restent dedans.",
        meets: "Au moins 15 commentaires sans détails privés, classés par thèmes, avec les trois principaux problèmes hiérarchisés.",
        exceeds: "Montre quels thèmes ont été vérifiés et quelles erreurs de l'IA ont été corrigées."
      },
      {
        name: "Plan sur 30 jours",
        objective: "O6",
        notYet: "Les actions n'ont ni responsable ni mesure.",
        meets: "Une action, un responsable et une mesure pour chaque problème principal, avec un chiffre de départ.",
        exceeds: "Indique comment les clients seront informés de ce qui a changé."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Délai moyen de réponse aux questions des clients, avant le cours et 30 jours après",
      "Note moyenne des avis et nombre de réclamations par semaine, avant et 60 jours après",
      "Organisations qui terminent au moins un cycle d'amélioration de 30 jours (questionnaire de suivi)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec internet",
      "Un assistant d'IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Un document pour les modèles, et un tableur ou un document pour la synthèse des commentaires et le plan",
      "Au moins 15 commentaires clients réels ou d'exemple, sans détails privés",
      "Environ 60 minutes pour les leçons et les contrôles, plus le temps de construire le kit"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis un chapitre par séance ; rédigez un modèle et une réponse à une réclamation sur un écran partagé.",
      "Fournissez une série de commentaires d'exemple aux apprenants qui n'ont pas encore de vrais retours.",
      "Vérifiez que les noms, numéros de téléphone et détails de santé sont retirés avant que des commentaires aillent dans l'IA.",
      "Faites un jeu de rôle avec un client mécontent pour que les apprenants pratiquent à voix haute écouter, s'excuser, résoudre, faire un suivi.",
      "Notez le kit final avec la grille d'évaluation, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
