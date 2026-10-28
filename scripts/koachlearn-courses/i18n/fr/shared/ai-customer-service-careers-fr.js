"use strict";

// Koach Learn course (shared, bonus), French translation of "AI for Customer Service Careers". Shape and rules: ../../../README.md (Translations).
// The English acronym HEAT is kept, with each letter explained in French.

module.exports = {
  id: "ai-customer-service-careers-fr",
  lang: "fr",
  translationOf: "ai-customer-service-careers",
  category: "Re-Entry",
  name: "L'IA pour les métiers du service client",
  skills: "Gérer un contact client du début à la fin, Calmer un client mécontent, Utiliser les réponses suggérées par l'IA et les bases de connaissances, Rédiger des notes de ticket, Protéger les données des clients, Passer un entretien pour un emploi au service client",
  outcome: "gérer un appel ou un chat client de l'accueil à la conclusion, calmer un client mécontent, utiliser les outils d'IA comme le font les agents de support tout en vérifiant leurs réponses, rédiger des notes de ticket claires, et montrer ces compétences lors d'un entretien pour un emploi au service client.",
  about: [
    "Les emplois au service client sont partout : centres d'appels, support par chat, commerce, banques, hôpitaux, services publics, sociétés de livraison et entreprises de technologie. Beaucoup sont accessibles aux débutants, offrent une formation, et certains se font à distance. L'IA change le travail : les chatbots répondent aux questions simples, et les agents humains traitent les plus difficiles avec l'aide de l'IA.",
    "Ce cours s'adresse aux personnes qui sortent de prison, aux demandeurs d'emploi suivis par des programmes d'insertion et à toute personne qui veut faire carrière dans le service client. Les qualités humaines que vous avez déjà, comme rester calme, écouter et résoudre des problèmes, sont au cœur du métier.",
    "Vous vous entraînerez avec un assistant d'IA qui joue le client. Chaque leçon dure environ cinq minutes avec une tâche « Essayez maintenant ». Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours."
  ],
  finalTask: "Faites trois jeux de rôle de contacts clients avec un assistant d'IA qui joue le client : une question simple, un client mécontent et un problème que vous ne pouvez pas régler du premier coup. Utilisez le contact en cinq étapes, rédigez les notes de ticket de chacun, puis écrivez trois points de CV et une réponse d'entretien STAR sur une fois où vous avez calmé un client mécontent.",
  chapters: [
    {
      name: "Chapitre 1 : Bien servir les clients",
      lessons: [
        {
          title: "À quoi ressemble le service client avec l'IA",
          minutes: 4,
          goal: "Décrire les emplois du service client et la façon dont les outils d'IA y sont utilisés.",
          text: [
            "Les agents du service client aident les gens par téléphone, chat, e-mail, réseaux sociaux ou en personne. Intitulés de poste courants : conseiller clientèle, agent de support, téléconseiller, technicien d'assistance et chargé de relation client.",
            "L'IA traite désormais beaucoup de questions simples par des chatbots, si bien que les agents humains reçoivent les cas plus difficiles, plus émotionnels ou inhabituels. Les agents utilisent souvent des outils d'IA qui suggèrent des réponses, cherchent dans la base de connaissances de l'entreprise, résument les longues conversations et rédigent les notes de ticket.",
            "Cela donne encore plus de valeur aux qualités humaines : écoute, empathie, calme, jugement et résolution de problèmes. L'IA suggère ; vous décidez ce qui est juste pour le client et vous suivez la politique de l'entreprise."
          ],
          words: [["Conseiller clientèle", "une personne dont le travail est d'aider les clients avec leurs questions et leurs problèmes."], ["Base de connaissances", "la bibliothèque de réponses et de modes d'emploi d'une entreprise."], ["Ticket", "le dossier d'un problème client et de ce qui a été fait."]],
          slides: [
            { title: "Où sont les emplois", bullets: ["Téléphone, chat, e-mail, réseaux sociaux, en personne", "Commerce, banques, hôpitaux, services publics, tech"] },
            { title: "L'IA dans le métier", bullets: ["Les chatbots gèrent les questions simples", "Réponses suggérées et recherche dans la base", "Résumés et notes de ticket"] },
            { title: "Les qualités humaines comptent plus", bullets: ["Écoute et empathie", "Calme et jugement", "Vous décidez ; l'IA suggère"] }
          ],
          tryIt: "Regardez trois offres d'emploi au service client. Notez les intitulés de poste, si elles parlent d'IA, de chat ou d'outils précis, et trois compétences demandées par chacune.",
          youCanNow: "décrire les emplois du service client et la façon dont les agents utilisent les outils d'IA."
        },
        {
          title: "Le contact client en cinq étapes",
          minutes: 5,
          goal: "Gérer un contact client de l'accueil à la conclusion en cinq étapes.",
          text: [
            "La plupart des bons contacts suivent cinq étapes. Accueillir : dites votre nom et proposez votre aide. Écouter : laissez la personne expliquer sans l'interrompre, et posez des questions pour comprendre. Reformuler : répétez le problème avec vos propres mots. Résoudre : donnez la réponse ou les étapes suivantes, clairement. Conclure : vérifiez que c'est réglé, demandez s'il y a autre chose, et remerciez.",
            "Exemple : « Merci de votre appel, ici Dee. Comment puis-je vous aider ? » ... « Donc votre commande est indiquée comme livrée, mais vous ne l'avez pas reçue. Je vérifie. » ... « Je vous ai envoyé un colis de remplacement ; il arrive jeudi. Puis-je vous aider pour autre chose ? »",
            "Vérifiez l'identité selon la procédure de l'entreprise avant de communiquer des détails du compte. Ne demandez jamais une information que la procédure n'exige pas, et ne demandez jamais un mot de passe complet."
          ],
          steps: ["Accueillez avec votre nom et une offre d'aide.", "Écoutez sans interrompre ; posez des questions.", "Reformulez le problème avec vos mots.", "Résolvez ou expliquez clairement les étapes suivantes.", "Concluez : vérifiez, demandez s'il y a autre chose, remerciez."],
          words: [["Vérifier l'identité", "confirmer que le client est bien celui qu'il dit être, selon les étapes de l'entreprise."], ["Résolution", "la solution au problème du client."]],
          slides: [
            { title: "Cinq étapes", bullets: ["Accueillir et écouter", "Reformuler le problème", "Résoudre et conclure"] },
            { title: "Exemples de phrases", bullets: ["« Ici Dee. Comment puis-je vous aider ? »", "« Donc votre commande est indiquée livrée mais n'est pas arrivée. »", "« Puis-je vous aider pour autre chose ? »"] },
            { title: "Protéger le compte", bullets: ["Vérifier l'identité selon la procédure", "Ne demander que ce qui est exigé", "Jamais de mot de passe complet"] }
          ],
          tryIt: "Demandez à un assistant d'IA : « Joue un client dont le colis est indiqué livré mais n'est jamais arrivé. Reste dans ton rôle. Quand on a fini, note-moi sur accueillir, écouter, reformuler, résoudre et conclure. » Faites le jeu de rôle.",
          youCanNow: "gérer un contact client de l'accueil à la conclusion en cinq étapes."
        },
        {
          title: "Calmer un client mécontent",
          minutes: 6,
          goal: "Utiliser des étapes d'apaisement pour calmer un client mécontent et trouver une solution.",
          text: [
            "Les clients mécontents en veulent en général à la situation, pas à vous. Restez calme, gardez une voix basse et lente, ne discutez pas et ne le prenez pas personnellement.",
            "Utilisez la méthode HEAT (de l'anglais) : H pour écouter jusqu'au bout (Hear), E pour faire preuve d'Empathie (« Je comprends à quel point c'est frustrant »), A pour s'excuser de ce qu'il a vécu (Apologize), et T pour agir (Take action : dites exactement ce que vous allez faire). Évitez « Calmez-vous » et « Ce n'est pas mon travail ».",
            "Connaissez vos limites. Si quelqu'un est injurieux ou menaçant, suivez la politique de l'entreprise, qui permet souvent un avertissement puis la fin du contact, ou le passage à un superviseur. Faire de courtes pauses et parler avec des collègues après des appels difficiles aide à rester en forme."
          ],
          steps: ["Restez calme et ne le prenez pas personnellement.", "Écoutez la personne jusqu'au bout.", "Montrez de l'empathie et excusez-vous pour ce qu'elle a vécu.", "Agissez : dites exactement ce que vous allez faire.", "En cas d'injures, suivez la politique de l'entreprise ou appelez un superviseur."],
          words: [["Apaisement (désescalade)", "calmer une situation tendue."], ["Empathie", "montrer que vous comprenez ce que ressent quelqu'un."], ["Transférer (escalader)", "passer un dossier à un superviseur ou à un spécialiste."]],
          slides: [
            { title: "Ce n'est pas contre vous", bullets: ["Le client en veut à la situation", "Voix basse et lente ; pas de dispute"] },
            { title: "HEAT", bullets: ["H : écouter jusqu'au bout (Hear)", "E et A : Empathie et excuses (Apologize)", "T : agir (Take action)"] },
            { title: "Connaître ses limites", bullets: ["Injures ou menaces : suivre la politique", "Appeler un superviseur", "Prendre soin de soi après les appels durs"] }
          ],
          tryIt: "Demandez à un assistant d'IA de jouer un client en colère dont la facture a été débitée deux fois. Utilisez HEAT. Demandez ensuite à l'IA quelles phrases ont marché et lesquelles changer.",
          youCanNow: "calmer un client mécontent avec HEAT et savoir quand transférer le dossier."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Bien servir les clients",
        questions: [
          { q: "Qu'est-ce qu'une base de connaissances ?", options: ["Le compte bancaire d'un client", "Un type de chatbot", "La bibliothèque de réponses et de modes d'emploi d'une entreprise", "Seulement une vidéo de formation"], answer: 2, why: "Les agents y cherchent les bonnes réponses." },
          { q: "Pourquoi les qualités humaines comptent-elles plus à mesure que l'IA grandit dans le service client ?", options: ["Les humains reçoivent les cas plus difficiles et plus émotionnels", "L'IA est interdite", "Les clients n'utilisent jamais le chat", "Les humains ne répondent qu'aux questions simples"], answer: 0, why: "Les chatbots prennent les cas simples ; les personnes gèrent les cas difficiles." },
          { q: "Quelle étape vient juste après l'écoute ?", options: ["Conclure l'appel", "Demander son mot de passe", "Le transférer", "Reformuler le problème avec vos mots"], answer: 3, why: "Reformuler montre que vous avez compris." },
          { q: "Que veut dire le E de HEAT ?", options: ["Escalader", "Empathie", "Sortie", "E-mail"], answer: 1, why: "HEAT : écouter, Empathie, s'excuser, agir." },
          { q: "Quelle phrase faut-il éviter avec un client mécontent ?", options: ["« Je comprends à quel point c'est frustrant. »", "« Calmez-vous. »", "« Voici ce que je vais faire. »", "« Merci de votre patience. »"], answer: 1, why: "« Calmez-vous » met en général les gens encore plus en colère." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Les outils d'IA et l'embauche",
      lessons: [
        {
          title: "Utiliser les réponses suggérées par l'IA et la base de connaissances",
          minutes: 5,
          goal: "Utiliser les suggestions de l'IA comme point de départ et les vérifier avant d'envoyer.",
          text: [
            "Beaucoup de systèmes de support affichent des réponses suggérées par l'IA ou tirées de la base de connaissances. Elles font gagner du temps, mais elles peuvent être fausses, dépassées, ou ne pas correspondre à la situation de ce client.",
            "Avant d'envoyer : lisez-la entièrement, vérifiez les faits dans la base de connaissances ou la politique (dates, prix, règles de remboursement), adaptez-la à cette personne (utilisez son nom, répondez à sa question), et corrigez le ton. Si l'IA propose quelque chose de contraire à la politique, comme un remboursement que vous n'avez pas le droit d'accorder, ne l'envoyez pas.",
            "Pour vous entraîner chez vous, collez un message client inventé dans un assistant d'IA gratuit et demandez : « Rédige une réponse aimable. Notre politique : remboursement sous 30 jours avec ticket de caisse. » Puis corrigez-la comme si vous étiez l'agent."
          ],
          steps: ["Lisez entièrement la réponse suggérée.", "Vérifiez les faits dans la base de connaissances ou la politique.", "Personnalisez-la pour ce client.", "Corrigez le ton.", "N'envoyez rien de contraire à la politique."],
          words: [["Réponse suggérée", "une réponse rédigée par l'IA que l'agent peut modifier et envoyer."], ["Politique", "les règles officielles de l'entreprise."]],
          slides: [
            { title: "Les suggestions de l'IA font gagner du temps", bullets: ["Mais peuvent être fausses ou dépassées", "Peuvent ne pas convenir à ce client"] },
            { title: "Avant d'envoyer", bullets: ["Vérifier les faits avec la politique", "Personnaliser et corriger le ton", "Ne jamais envoyer ce qui enfreint la politique"] },
            { title: "S'entraîner chez soi", bullets: ["Coller un message inventé dans l'IA", "Lui donner la politique", "Corriger comme un agent"] }
          ],
          tryIt: "Écrivez un e-mail client inventé sur un remboursement en retard. Demandez à l'IA une réponse fondée sur une politique que vous inventez, puis corrigez-la et marquez chaque changement fait.",
          youCanNow: "utiliser en sécurité les réponses suggérées par l'IA en les vérifiant, en les personnalisant et en suivant la politique."
        },
        {
          title: "Rédiger des notes de ticket et protéger les données des clients",
          minutes: 5,
          goal: "Rédiger des notes de ticket claires et traiter les informations des clients en sécurité.",
          text: [
            "Chaque contact a besoin de notes pour que l'agent suivant sache ce qui s'est passé. De bonnes notes de ticket sont courtes et factuelles : le problème, ce que vous avez vérifié, ce que vous avez fait, ce qui a été promis et une éventuelle date de suivi. Exemple : « Client signale un colis manquant, commande indiquée livrée le 12/10. Suivi du transporteur vérifié. Remplacement envoyé, arrivée le 16/10. Relancer si non reçu. »",
            "Certains outils permettent à l'IA de résumer la conversation en notes. Vérifiez le résumé : l'IA peut oublier une promesse ou ajouter quelque chose qui n'a pas eu lieu.",
            "Protégez les données : n'ouvrez que les comptes des clients que vous aidez, ne communiquez jamais les informations d'un client à une personne non autorisée, ne collez jamais d'informations clients dans des outils d'IA non approuvés par votre entreprise, et n'écrivez jamais de numéro de carte complet ni de mot de passe dans les notes. Respecter les règles de confidentialité fait partie du métier."
          ],
          steps: ["Écrivez le problème en une ligne.", "Écrivez ce que vous avez vérifié et ce que vous avez fait.", "Écrivez ce qui a été promis et la date de suivi.", "Vérifiez tout résumé de l'IA pour repérer oublis et erreurs.", "N'écrivez ni numéro de carte complet ni mot de passe."],
          words: [["Notes de ticket", "un court compte rendu écrit d'un contact client."], ["Protection des données", "garder en sécurité les informations personnelles des gens et ne les utiliser que comme c'est permis."]],
          slides: [
            { title: "De bonnes notes de ticket", bullets: ["Problème, vérifications, actions", "Ce qui a été promis et date de suivi", "Courtes et factuelles"] },
            { title: "Résumés par l'IA", bullets: ["Font gagner du temps", "Vérifier les promesses oubliées ou les erreurs"] },
            { title: "Protéger les données clients", bullets: ["Seulement les comptes que vous aidez", "Pas de données clients dans les IA non approuvées", "Ni numéro de carte ni mot de passe dans les notes"] }
          ],
          tryIt: "Rédigez les notes de ticket des deux jeux de rôle faits au chapitre 1. Demandez ensuite à l'IA de résumer l'un d'eux et comparez son résumé à vos notes.",
          youCanNow: "rédiger des notes de ticket claires et protéger les informations des clients."
        },
        {
          title: "Se faire embaucher au service client",
          minutes: 5,
          goal: "Montrer vos compétences de service client sur un CV et en entretien.",
          text: [
            "Les employeurs veulent de la fiabilité, une attitude calme, une communication claire, des bases en informatique et l'envie d'apprendre. L'expérience dans le commerce, la restauration, l'aide aux personnes, l'église, l'armée ou le travail en détention compte entièrement.",
            "Écrivez des points de CV qui montrent des résultats : « Servi plus de 60 clients par jour sur une chaîne de cuisine très active, avec calme et amabilité. » Demandez à l'IA de vous aider à transformer votre expérience en points adaptés au service client, et gardez-les vrais.",
            "Attendez-vous à des questions de mise en situation : « Un client crie à cause d'une commande en retard. Que faites-vous ? » Répondez avec vos étapes (HEAT et le contact en cinq étapes). Préparez une histoire STAR (Situation, Tâche, Action, Résultat) sur une fois où vous avez calmé quelqu'un ou résolu un problème. Certains employeurs font passer un test de frappe ou d'informatique ; entraînez-vous avec un test de frappe gratuit en ligne."
          ],
          steps: ["Listez les expériences où vous avez aidé des gens.", "Demandez à l'IA d'en faire des points de CV vrais, avec des chiffres.", "Préparez une histoire STAR sur une fois où vous avez calmé quelqu'un ou résolu un problème.", "Entraînez-vous à répondre à une mise en situation avec HEAT.", "Entraînez-vous à taper avec un test de frappe gratuit en ligne."],
          words: [["Question de mise en situation", "une question d'entretien où vous montrez comment vous géreriez une situation."], ["Test de frappe", "un test qui mesure la vitesse et la précision de votre frappe au clavier."]],
          slides: [
            { title: "Ce que veulent les employeurs", bullets: ["Fiable et calme", "Communication claire", "Bases en informatique ; envie d'apprendre"] },
            { title: "Points de CV", bullets: ["Montrer des résultats chiffrés", "Toute expérience d'aide compte", "Rester vrai"] },
            { title: "Préparer l'entretien", bullets: ["Mises en situation avec HEAT", "Une histoire STAR où vous avez calmé quelqu'un", "S'entraîner à taper"] }
          ],
          tryIt: "Tâche finale : faites trois jeux de rôle de contacts clients avec l'IA (question simple, client mécontent, problème non réglé du premier coup), rédigez les notes de ticket de chacun, puis écrivez trois points de CV et une réponse STAR sur une fois où vous avez calmé un client mécontent.",
          youCanNow: "gérer des clients avec les outils d'IA comme un agent de support et montrer ces compétences pour être embauché."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Les outils d'IA et l'embauche",
        questions: [
          { q: "Une réponse suggérée par l'IA propose un remboursement que votre politique n'autorise pas. Que faites-vous ?", options: ["L'envoyer quand même", "Laisser le client décider", "Supprimer le ticket", "Ne pas l'envoyer ; suivre la politique"], answer: 3, why: "Les agents suivent la politique, pas les suppositions de l'IA." },
          { q: "De bonnes notes de ticket contiennent :", options: ["Le problème, ce que vous avez fait, ce qui a été promis et le suivi", "Le numéro de carte complet du client", "Votre avis sur le client", "Rien"], answer: 0, why: "Les notes aident l'agent suivant." },
          { q: "Un résumé de l'IA oublie une promesse que vous avez faite. Vous devez :", options: ["La laisser de côté", "Supprimer toutes les notes", "Ajouter la promesse aux notes", "Accuser l'IA plus tard"], answer: 2, why: "Vérifiez et corrigez les résumés de l'IA." },
          { q: "Qu'est-ce qui ne doit jamais être écrit dans les notes de ticket ?", options: ["La date de commande", "La date de suivi", "Ce que vous avez vérifié", "Le mot de passe complet d'un client"], answer: 3, why: "Les mots de passe ne doivent jamais être notés." },
          { q: "En entretien, on vous demande comment vous géreriez un client qui crie. Meilleure réponse :", options: ["« Je crierais aussi. »", "« Je raccrocherais tout de suite. »", "Expliquer HEAT et les étapes que vous suivriez", "« Je ne sais pas. »"], answer: 2, why: "Montrer vos étapes prouve la compétence." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour les métiers du service client",
    questions: [
      { q: "Lequel est un intitulé de poste du service client ?", options: ["Cariste", "Agent de support", "Soudeur", "Pilote"], answer: 1, why: "Les agents de support aident les clients." },
      { q: "Dans beaucoup d'entreprises aujourd'hui, les questions simples sont souvent traitées par :", options: ["Des chatbots", "Le courrier seulement", "Personne", "Le PDG"], answer: 0, why: "Les chatbots gèrent les questions simples et fréquentes." },
      { q: "Un ticket est :", options: ["Une place de cinéma", "Une amende de stationnement", "Le dossier d'un problème client et de ce qui a été fait", "Une fiche de paie"], answer: 2, why: "Les tickets suivent chaque problème." },
      { q: "Qui décide en dernier ce qu'on dit à un client ?", options: ["Vous, en suivant la politique", "L'IA", "Le client", "Un collègue au hasard"], answer: 0, why: "L'IA suggère ; les agents décident." },
      { q: "La première étape d'un contact client est :", options: ["Conclure", "Résoudre", "Transférer", "Accueillir avec votre nom et proposer votre aide"], answer: 3, why: "Un accueil chaleureux commence bien." },
      { q: "« Donc votre commande est indiquée livrée mais n'est pas arrivée » est un exemple :", options: ["De conclusion", "De reformulation du problème", "De transfert", "De vérification d'identité"], answer: 1, why: "Répéter le problème le confirme." },
      { q: "Avant de communiquer des détails du compte, vous devez :", options: ["Les donner tout de suite", "Vérifier l'identité selon la procédure de l'entreprise", "Demander le mot de passe complet", "Demander à un collègue de deviner"], answer: 1, why: "La vérification protège le compte." },
      { q: "Comment conclure un contact ?", options: ["Raccrocher brusquement", "Ne rien dire", "Demander un pourboire", "Vérifier que c'est réglé, demander s'il y a autre chose, remercier"], answer: 3, why: "Une bonne conclusion laisse le client satisfait." },
      { q: "Les clients mécontents en veulent en général :", options: ["À la situation, pas à vous", "À vous personnellement", "À la météo", "À rien"], answer: 0, why: "S'en souvenir aide à rester calme." },
      { q: "Dans ce cours, HEAT veut dire :", options: ["Aider, Finir, Demander, Transférer", "Se presser, Expliquer, Discuter, Parler", "Écouter (Hear), Empathie, S'excuser (Apologize), Agir (Take action)", "Patienter, Écrire, Répondre, Remercier"], answer: 2, why: "Ce sont les quatre étapes de HEAT." },
      { q: "Un client devient injurieux et menaçant. Vous devez :", options: ["Le menacer en retour", "Communiquer son adresse", "Subir les injures indéfiniment", "Suivre la politique de l'entreprise : avertissement, fin du contact ou superviseur"], answer: 3, why: "Les politiques protègent les agents et les clients." },
      { q: "Transférer (escalader) un dossier veut dire :", options: ["Prendre un escalator", "Hausser le ton", "Passer un dossier à un superviseur ou à un spécialiste", "Fermer le dossier"], answer: 2, why: "Le transfert fait monter les cas difficiles." },
      { q: "Les réponses suggérées par l'IA peuvent être :", options: ["Toujours parfaites", "Fausses, dépassées ou inadaptées au client", "Illégales à lire", "Seulement en langue étrangère"], answer: 1, why: "Vérifiez-les toujours." },
      { q: "Avant d'envoyer une réponse suggérée par l'IA, vérifiez les faits dans :", options: ["La base de connaissances ou la politique", "Les réseaux sociaux", "Seulement votre mémoire", "Le site d'un concurrent"], answer: 0, why: "Les sources officielles gardent les réponses exactes." },
      { q: "Qu'est-ce qui ne doit jamais entrer dans un outil d'IA non approuvé par votre entreprise ?", options: ["Un message d'entraînement inventé", "Une question de grammaire", "Des informations sur les clients", "Une formule d'accueil générale"], answer: 2, why: "Les données des clients doivent être protégées." },
      { q: "La protection des données, c'est :", options: ["Garder les informations personnelles en sécurité et ne les utiliser que comme c'est permis", "Partager les données avec des amis", "Supprimer toutes les données", "Publier les données en ligne"], answer: 0, why: "C'est un devoir de base du métier." },
      { q: "Quel point de CV est le plus fort pour le service client ?", options: ["« Fait des trucs »", "« Travaillé parfois »", "« Bonne personne »", "« Servi plus de 60 clients par jour avec calme et amabilité »"], answer: 3, why: "Il montre des chiffres et la compétence." },
      { q: "L'expérience acquise où peut compter pour le service client ?", options: ["Seulement dans les centres d'appels", "Dans la restauration, l'aide aux personnes, l'église ou le travail en détention", "Seulement à l'université", "Nulle part"], answer: 1, why: "Aider des gens, n'importe où, développe la compétence." },
      { q: "Une histoire STAR sur une fois où vous avez calmé quelqu'un montre :", options: ["Vos anciens salaires", "Situation, Tâche, Action et Résultat", "Vos films préférés", "Rien"], answer: 1, why: "STAR prouve la compétence par un exemple." },
      { q: "Quelle compétence certains employeurs testent-ils avant d'embaucher ?", options: ["Le jonglage", "La natation", "Le chant", "La vitesse et la précision de frappe"], answer: 3, why: "Les agents tapent beaucoup ; entraînez-vous avec un test de frappe gratuit." }
    ]
  }
};
