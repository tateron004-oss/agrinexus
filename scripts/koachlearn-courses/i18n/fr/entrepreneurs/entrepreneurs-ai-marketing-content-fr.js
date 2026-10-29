"use strict";

// Koach Learn course (French translation of entrepreneurs/entrepreneurs-ai-marketing-content.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "entrepreneurs-ai-marketing-content-fr",
  lang: "fr",
  translationOf: "entrepreneurs-ai-marketing-content",
  category: "Entrepreneurs",
  name: "Marketing et création de contenu avec l'IA",
  skills: "Décrire votre client idéal, Écrire une offre claire, Planifier un mois de contenu, Créer des publications et des visuels avec l'IA, Écrire un e-mail marketing qui respecte les règles",
  outcome: "décrire votre client idéal, écrire une offre claire, et utiliser l'IA pour planifier et créer un mois de publications sur les réseaux sociaux et un e-mail marketing honnêtes et conformes aux règles américaines sur la publicité et les e-mails.",
  about: [
    "Ce cours s'adresse aux chefs d'entreprise qui savent qu'ils devraient faire du marketing mais n'ont pas le temps, pas l'argent pour une agence, ou pas d'idées. L'IA peut aider sur les trois points si vous lui donnez la bonne direction.",
    "Vous allez décrire le client que vous voulez, écrire une offre qui lui parle, planifier un mois de contenu, créer des publications et des visuels avec des outils gratuits comme ChatGPT, Copilot, Gemini et Canva, et écrire un e-mail marketing. Vous apprendrez aussi les règles de base aux États-Unis : les publicités doivent être vraies, les recommandations payées doivent être signalées, les faux avis sont interdits, et les e-mails marketing doivent respecter la loi CAN-SPAM.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche pour votre propre entreprise. Une vérification des connaissances suit chaque chapitre, et un quiz de 20 questions vous attend à la fin. Ce cours explique les règles en mots simples ; ce n'est pas un conseil juridique. Si vous vendez hors des États-Unis, vérifiez aussi les règles de votre pays."
  ],
  finalTask: "Créez un kit marketing d'un mois pour votre entreprise : un profil de client idéal en un paragraphe, une offre en une phrase, un calendrier de 12 publications, trois publications terminées avec leurs visuels, et un e-mail marketing avec un objet honnête, votre adresse postale et une ligne de désabonnement qui fonctionne.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des propriétaires de petites entreprises aux États-Unis qui savent qu'ils devraient faire du marketing mais ont peu de temps, pas de budget d'agence et peu d'idées, comme des boulangers, des entreprises de nettoyage, des salons de coiffure, des artisans et des vendeurs en ligne.",
    startingPoint: "Ils publient de temps en temps sur les réseaux sociaux et ont parfois une liste d'e-mails de clients. Peu ont un profil client écrit, une offre ou un plan de contenu, et beaucoup ne connaissent pas les bases des règles de la FTC (l'agence américaine de protection des consommateurs) et de la loi CAN-SPAM.",
    gap: "Des publications au hasard touchent les mauvaises personnes, et l'IA peut facilement produire des affirmations fausses, des résultats qui semblent truqués ou des e-mails qui enfreignent les règles américaines. Les entrepreneurs doivent viser un vrai client, planifier un mois de contenu honnête et envoyer des e-mails conformes, pour que le marketing apporte des clients sans problème juridique ni perte de confiance.",
    constraints: [
      "Des mots simples ; les règles sont expliquées simplement et ne sont pas un conseil juridique",
      "Appareils : un téléphone ou un ordinateur avec un assistant IA gratuit et Canva",
      "Temps : environ cinq minutes par leçon, plus la création de publications pour sa propre entreprise",
      "Les publicités doivent être vraies, les recommandations payées signalées, les faux avis sont interdits, et les e-mails doivent respecter CAN-SPAM",
      "Les histoires et les photos de clients ne sont utilisées qu'avec leur autorisation"
    ],
    prerequisites: "« Introduction à l'IA pour les entrepreneurs ». « Les outils d'IA que tout entrepreneur devrait connaître » aide pour Canva."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avec l'IA et au moins une vraie conversation avec un client ou un relevé de ventes", action: "écrire en un paragraphe le profil de votre client idéal", standard: "en vérifiant chaque supposition auprès de vraies personnes" },
    { id: "O2", condition: "À partir de votre profil client", action: "écrire une offre en une phrase qui dit pour qui c'est, ce qu'on reçoit et pourquoi c'est important", standard: "avec chaque affirmation vraie et prouvable" },
    { id: "O3", condition: "À partir de votre offre", action: "créer avec l'IA un calendrier de 12 publications sur un mois", standard: "avec plusieurs types de publications sur une ou deux plateformes utilisées par vos clients, enregistré avec les dates" },
    { id: "O4", condition: "À partir de trois idées du calendrier", action: "créer des publications terminées avec des légendes de l'IA retravaillées et des visuels Canva", standard: "en utilisant de vraies photos quand c'est possible et sans jamais truquer les résultats" },
    { id: "O5", condition: "Quand vous demandez des avis ou travaillez avec des promoteurs payés", action: "écrire une demande d'avis et des mentions conformes aux règles de la FTC", standard: "en demandant à tous les clients, sans récompense pour les bonnes notes, et en signalant chaque lien payé" },
    { id: "O6", condition: "Quand vous utilisez l'IA pour rédiger un e-mail marketing", action: "vérifier l'e-mail par rapport aux bases de CAN-SPAM", standard: "avec un objet honnête, votre adresse postale et une ligne de désinscription qui fonctionne" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Savoir à qui vous parlez",
      lessons: [
        {
          objectives: ["O1"],
          title: "Décrire votre client idéal",
          minutes: 5,
          goal: "Écrire en un paragraphe le profil du client que vous voulez le plus.",
          text: [
            "Faire du marketing pour « tout le monde », c'est ne toucher personne. Votre client idéal est la personne qui a besoin de ce que vous vendez, peut le payer et est facile à atteindre pour vous. Le client idéal d'une pâtisserie à domicile pourrait être « des parents occupés à moins de 15 km qui commandent des gâteaux d'anniversaire deux à quatre fois par an ».",
            "L'IA peut vous aider à y réfléchir. Dites-lui ce que vous vendez et qui achète aujourd'hui, puis demandez : « Aide-moi à décrire mon client idéal : sa situation, son plus gros problème, ce qui l'inquiète avant d'acheter et où il passe du temps en ligne. »",
            "L'IA devine à partir de tendances générales. Vérifiez ses suppositions avec de vrais clients : regardez qui vous a acheté, lisez leurs messages et demandez à trois clients pourquoi ils vous ont choisi."
          ],
          steps: ["Écrivez ce que vous vendez et qui vous a acheté jusqu'ici.", "Demandez à l'IA de vous aider à décrire la situation, le problème, les inquiétudes du client idéal et où il passe son temps.", "Vérifiez les suppositions avec trois vrais clients ou vos registres de ventes.", "Écrivez un profil en un paragraphe."],
          words: [["Client idéal", "la personne qui a le plus besoin de ce que vous vendez, peut payer et est facile à atteindre."], ["Profil", "une courte description d'un type de client."]],
          slides: [
            { title: "« Tout le monde » n'est pas un client", bullets: ["A besoin de ce que vous vendez", "Peut le payer", "Est facile à atteindre pour vous"] },
            { title: "Demandez à l'IA d'aider à décrire", bullets: ["Sa situation et son plus gros problème", "Ce qui l'inquiète avant d'acheter", "Où il passe du temps en ligne"] },
            { title: "Vérifiez avec de vraies personnes", bullets: ["Regardez qui a déjà acheté", "Demandez à trois clients pourquoi ils vous ont choisi", "Puis écrivez votre profil"] }
          ],
          tryIt: "Utilisez un assistant IA pour rédiger le profil de votre client idéal, puis vérifiez-le avec au moins une vraie conversation de client ou vos registres de ventes. Enregistrez le paragraphe final.",
          youCanNow: "décrire le client à qui s'adresse votre marketing, vérifié avec de vraies personnes.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce que le profil du client idéal ?", options: ["Une courte description du client que vous voulez le plus atteindre", "Une liste de tous les habitants de votre ville", "La liste de clients d'un concurrent", "Les coordonnées privées d'un client"], answer: 0, why: "Un profil décrit la personne que vise votre marketing." },
            { objective: "O1", q: "L'IA dit que vos clients utilisent surtout une application, mais vos relevés de ventes montrent autre chose. Que faites-vous ?", options: ["Croire l'IA", "Suivre ce que montrent vos vrais relevés", "Utiliser toutes les applications", "Arrêter le marketing"], answer: 1, why: "Les vrais clients et les vrais relevés valent mieux que les suppositions de l'IA." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Écrire une offre claire et honnête",
          minutes: 5,
          goal: "Écrire une offre en une phrase qui dit pour qui c'est, ce qu'on reçoit et pourquoi c'est important.",
          text: [
            "Une offre répond vite à trois questions : pour qui est-ce ? Qu'est-ce qu'on reçoit ? Pourquoi s'y intéresser ? Exemple : « Parents occupés de Decatur : des gâteaux d'anniversaire sur mesure livrés chez vous, pour avoir un souci de moins le jour de la fête. »",
            "Donnez à l'IA votre profil de client et demandez : « Écris cinq offres en une phrase pour ce client. Des mots simples, pas d'exagération. » Choisissez la meilleure et retouchez-la avec votre voix.",
            "Restez honnête. Aux États-Unis, la FTC (l'agence de protection des consommateurs) dit que les publicités doivent être vraies, non trompeuses et appuyées par des preuves. Ne dites pas « le meilleur de la ville », « résultats garantis » ou « propulsé par l'IA » sauf si c'est vrai et que vous pouvez le prouver."
          ],
          steps: ["Collez votre profil de client dans un assistant IA.", "Demandez cinq offres en une phrase avec des mots simples.", "Choisissez-en une et retouchez-la pour qu'elle sonne comme vous.", "Retirez toute affirmation que vous ne pouvez pas prouver."],
          words: [["Offre", "ce que vous vendez, pour qui et pourquoi c'est important, dit simplement."], ["Affirmation", "quelque chose que votre publicité présente comme vrai."]],
          slides: [
            { title: "Une offre répond à trois questions", bullets: ["Pour qui est-ce ?", "Qu'est-ce qu'on reçoit ?", "Pourquoi s'y intéresser ?"] },
            { title: "Laissez l'IA proposer des options", bullets: ["Collez votre profil de client", "Demandez cinq offres en une phrase", "Choisissez-en une et retouchez-la"] },
            { title: "Restez honnête", bullets: ["FTC : les publicités doivent être vraies et non trompeuses", "Les affirmations ont besoin de preuves", "Pas de « garanti » ou « meilleur » non prouvé"] }
          ],
          sources: [{ name: "FTC : les bases de la publicité et du marketing (en anglais)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Demandez à l'IA cinq offres à partir de votre profil de client, choisissez-en une, retouchez-la, et vérifiez que chaque affirmation est vraie et prouvable.",
          youCanNow: "écrire une offre courte et honnête qui parle à votre client idéal.",
          quickCheck: [
            { objective: "O2", q: "Comment doit être chaque affirmation de votre offre ?", options: ["La plus grande possible", "Copiée sur un concurrent", "Vraie et prouvable", "Écrite uniquement par l'IA"], answer: 2, why: "Les règles de la FTC exigent des affirmations vraies et appuyées par des preuves." },
            { objective: "O2", q: "L'IA écrit « le service le plus rapide de la ville », mais vous n'avez aucune preuve. Que faites-vous ?", options: ["Le garder", "Ajouter un point d'exclamation", "Le mettre en petits caractères", "Le retirer ou le remplacer par quelque chose que vous pouvez prouver"], answer: 3, why: "Les affirmations que vous ne pouvez pas prouver n'ont pas leur place dans votre offre." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Planifier un mois de contenu",
          minutes: 5,
          goal: "Utiliser l'IA pour construire un calendrier de 12 publications sur un mois.",
          text: [
            "Publier trois fois par semaine pendant un mois, cela fait 12 publications. Un mélange simple garde l'intérêt : enseigner quelque chose d'utile, montrer votre travail ou votre équipe, partager l'histoire d'un client (avec sa permission) et présenter votre offre.",
            "Demandez à l'IA : « Crée un calendrier de 12 publications pour [entreprise] destiné à [client]. Mélange : 4 conseils utiles, 3 coulisses, 2 histoires de clients, 3 publications d'offre. Donne pour chacune une date, une idée en une ligne et la plateforme. »",
            "Choisissez les plateformes où votre client passe déjà du temps (d'après votre profil). Mieux vaut bien publier sur une ou deux plateformes que mal sur cinq."
          ],
          steps: ["Choisissez une ou deux plateformes où votre client passe du temps.", "Demandez à l'IA un calendrier de 12 publications avec différents types de publications.", "Modifiez les idées qui ne correspondent pas à votre entreprise.", "Mettez le calendrier dans un tableur ou un document avec les dates."],
          words: [["Calendrier de contenu", "un plan qui liste ce que vous allez publier et quand."], ["Plateforme", "un réseau social ou une application, comme Facebook, Instagram, TikTok ou LinkedIn."]],
          slides: [
            { title: "12 publications = 3 par semaine pendant un mois", bullets: ["Conseils utiles", "Coulisses", "Histoires de clients (avec permission)", "Votre offre"] },
            { title: "Demandez le calendrier à l'IA", bullets: ["Entreprise + client + types de publications", "Date, idée en une ligne et plateforme pour chacune"] },
            { title: "Choisissez vos plateformes", bullets: ["Là où votre client est déjà", "Une ou deux bien faites valent mieux que cinq mal faites"] }
          ],
          tryIt: "Faites construire votre calendrier de 12 publications par l'IA, adaptez-le à votre entreprise et enregistrez-le avec les dates dans un tableur ou un document.",
          youCanNow: "planifier un mois de contenu varié pour les plateformes qu'utilisent vos clients.",
          quickCheck: [
            { objective: "O3", q: "Que contient un bon mélange de contenus ?", options: ["Des conseils, des coulisses, des histoires de clients et des offres", "Seulement des offres commerciales", "Seulement des mèmes", "La même publication tous les jours"], answer: 0, why: "Un mélange garde l'intérêt des gens et crée la confiance." },
            { objective: "O3", q: "Vos clients sont surtout sur une plateforme. Où publiez-vous ?", options: ["Sur toutes les plateformes à la fois", "D'abord là où vos clients sont déjà", "Seulement sur une nouvelle plateforme", "Nulle part tant que vous n'avez pas plus de temps"], answer: 1, why: "Une ou deux plateformes où sont déjà vos clients suffisent pour commencer." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Savoir à qui vous parlez",
        questions: [
          { objective: "O1", q: "Quelle est la meilleure description de client idéal pour une pâtisserie à domicile ?", options: ["Tous ceux qui mangent", "Des parents occupés à moins de 15 km qui commandent des gâteaux d'anniversaire quelques fois par an", "Les gens sur Internet", "Les autres pâtisseries"], answer: 1, why: "Elle nomme une personne, un besoin et une zone précis." },
          { objective: "O1", q: "L'IA a deviné ce qui inquiète vos clients. Que devez-vous faire ?", options: ["Ignorer vos clients", "Lui faire entièrement confiance", "Le publier comme un fait", "Le vérifier avec de vrais clients ou vos registres de ventes"], answer: 3, why: "L'IA devine à partir de tendances générales ; les vrais clients confirment." },
          { objective: "O2", q: "À quelles trois questions une offre doit-elle répondre ?", options: ["Pour qui c'est, ce qu'on reçoit, pourquoi s'y intéresser", "Quel âge avez-vous, où habitez-vous, quel est votre mot de passe", "Quel temps fait-il, quelle heure est-il, quelle date sommes-nous", "Qui sont vos concurrents, combien ils facturent, où ils sont"], answer: 0, why: "Ces trois réponses rendent une offre claire." },
          { objective: "O2", q: "L'IA a écrit « Résultats garantis ou remboursé » dans votre offre, mais vous ne remboursez pas. Que faites-vous ?", options: ["Vous l'agrandissez", "Vous le gardez parce que ça sonne bien", "Vous le retirez", "Vous ajoutez aussi « propulsé par l'IA »"], answer: 2, why: "Les publicités doivent être vraies ; retirez les promesses que vous ne pouvez pas tenir." },
          { objective: "O3", q: "Avec combien de plateformes une petite entreprise doit-elle commencer ?", options: ["Aucune", "Toutes les plateformes qui existent", "Une ou deux où ses clients sont déjà", "Seulement celles que ses concurrents évitent"], answer: 2, why: "Bien faire une ou deux choses vaut mieux que se disperser." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Créer, publier et respecter les règles",
      lessons: [
        {
          objectives: ["O4"],
          title: "Créer des publications et des visuels avec l'IA",
          minutes: 5,
          goal: "Transformer les idées du calendrier en publications terminées avec légendes et visuels.",
          text: [
            "Pour chaque publication, demandez une légende à un assistant conversationnel : « Écris une légende Instagram pour cette idée : [idée]. Pour [client]. Ton amical, moins de 80 mots, une question pour inviter aux commentaires, et un appel à l'action. » Demandez deux ou trois versions et choisissez-en une.",
            "Créez le visuel dans Canva à partir d'un modèle, avec vos couleurs de marque. Utilisez vos propres photos quand c'est possible ; de vraies photos de votre travail créent la confiance. Si vous utilisez une image générée par l'IA, vérifiez les erreurs et ne lui faites jamais représenter un vrai client ou un résultat que vous n'avez pas obtenu.",
            "Selon les indications du Copyright Office (l'office américain du droit d'auteur), un contenu entièrement généré par l'IA n'est pas protégé par le droit d'auteur, alors que vos propres choix créatifs et vos retouches peuvent l'être. S'il est important pour vous de posséder votre logo ou votre visuel de marque principal, faites appel à un graphiste humain et parlez à un avocat."
          ],
          steps: ["Choisissez une publication de votre calendrier.", "Demandez à l'IA deux ou trois versions de légende et choisissez-en une.", "Créez le visuel dans Canva à partir d'un modèle, avec votre propre photo si possible.", "Vérifiez l'orthographe, les faits et les images.", "Enregistrez la publication prête à être publiée."],
          words: [["Légende", "le texte qui accompagne une publication sur les réseaux sociaux."], ["Droit d'auteur", "le droit légal de contrôler la copie d'une œuvre créative."]],
          slides: [
            { title: "Légende avec l'IA", bullets: ["Donnez l'idée et le client", "Demandez 2 ou 3 versions courtes", "Avec une question et un appel à l'action"] },
            { title: "Visuel dans Canva", bullets: ["Partez d'un modèle", "Vos couleurs de marque", "Vos propres photos créent la confiance"] },
            { title: "Images d'IA : prudence", bullets: ["Vérifiez les erreurs", "Ne simulez jamais un client ou un résultat"] },
            { title: "Droit d'auteur et IA", bullets: ["Le contenu entièrement fait par l'IA n'est pas protégé", "Vos propres retouches créatives peuvent l'être", "Pour un logo, voyez un graphiste et un avocat"] }
          ],
          sources: [{ name: "Copyright Office des États-Unis : droit d'auteur et intelligence artificielle (en anglais)", url: "https://www.copyright.gov/ai/" }, { name: "Copyright Office des États-Unis : annonce du rapport partie 2 sur la protection (en anglais)", url: "https://www.copyright.gov/newsnet/2025/1060.html" }],
          tryIt: "Transformez trois idées de votre calendrier en publications terminées : une légende rédigée avec l'IA et retouchée par vous, et un visuel Canva avec votre propre photo si possible.",
          youCanNow: "créer des publications terminées avec des légendes et des visuels faits avec l'IA, sans truquer les résultats.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qui fait une bonne demande de légende à l'IA ?", options: ["Juste « écris une légende »", "Votre mot de passe", "L'idée, le client, la longueur et un appel à l'action", "La légende d'un concurrent à copier"], answer: 2, why: "Des indications précises donnent une légende utilisable." },
            { objective: "O4", q: "L'IA crée une photo avant-après parfaite d'une cuisine que vous n'avez pas nettoyée. Que faites-vous ?", options: ["La publier comme votre travail", "La publier sans légende", "La retoucher un peu et la publier", "Ne pas l'utiliser ; prendre une vraie photo de votre travail"], answer: 3, why: "Les images ne doivent pas suggérer des résultats que vous n'avez pas obtenus." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Avis, témoignages et recommandations : les règles",
          minutes: 5,
          goal: "Utiliser les avis et les promotions payées d'une façon conforme aux règles de la FTC.",
          text: [
            "Les vrais avis de clients sont un marketing puissant. Les faux sont illégaux. La règle de la FTC sur les faux avis interdit de créer, d'acheter ou de vendre de faux avis et témoignages, y compris des avis générés par l'IA qui prétendent venir de personnes qui n'existent pas. Elle interdit aussi d'offrir une récompense seulement pour des avis positifs.",
            "Vous POUVEZ demander à tous vos clients, satisfaits ou non, de laisser un avis honnête, et vous pouvez partager de vrais avis avec permission. N'utilisez pas l'IA pour écrire des avis, et ne modifiez pas un avis d'une façon qui change son sens.",
            "Si vous payez quelqu'un ou lui donnez des produits gratuits pour vous promouvoir, ce lien doit être signalé clairement, par exemple « #pub » ou « Sponsorisé » au début de la publication, et dans la vidéo elle-même pour les vidéos. Vous êtes responsable de ce que vos promoteurs disent pour vous."
          ],
          steps: ["Demandez des avis honnêtes à tous les clients, pas seulement aux satisfaits.", "Partagez de vrais avis seulement avec permission et sans changer leur sens.", "N'utilisez jamais l'IA pour écrire des avis.", "Faites signaler clairement tout paiement ou cadeau, comme « #pub » au début."],
          words: [["Témoignage", "une déclaration d'un client sur votre entreprise utilisée dans le marketing."], ["Recommandation", "un message que les gens prendront pour l'avis sincère de quelqu'un d'autre, comme la publication d'un influenceur."], ["Signaler", "dire clairement aux gens."]],
          slides: [
            { title: "Les faux avis sont interdits", bullets: ["Pas d'achat, de vente ou de rédaction de faux avis", "Y compris les faux avis générés par l'IA", "Pas de récompense seulement pour les avis positifs"] },
            { title: "Ce que vous pouvez faire", bullets: ["Demander un avis honnête à chaque client", "Partager de vrais avis avec permission", "Ne pas changer le sens d'un avis"] },
            { title: "Promotion payée ou offerte", bullets: ["Doit être clairement signalée", "« #pub » ou « Sponsorisé » au début", "Dans la vidéo elle-même pour les vidéos"] }
          ],
          sources: [{ name: "FTC : règle finale interdisant les faux avis et témoignages (communiqué, en anglais)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }, { name: "FTC : Guide sur les recommandations, questions fréquentes (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }],
          tryIt: "Utilisez l'IA pour rédiger un court message honnête qui demande un avis à vos clients récents (pas seulement les satisfaits, et sans récompense pour une bonne note). Retouchez-le et enregistrez-le.",
          youCanNow: "recueillir et utiliser des avis et des promotions payées de façon honnête et légale.",
          quickCheck: [
            { objective: "O5", q: "Quelle demande d'avis respecte les règles de la FTC ?", options: ["Demander un avis honnête à tous les clients récents", "Offrir une réduction seulement pour les avis cinq étoiles", "Écrire les avis vous-même", "Ne demander qu'aux clients contents"], answer: 0, why: "Demander à tout le monde un avis honnête, sans récompense pour les bonnes notes, est permis." },
            { objective: "O5", q: "Une amie reçoit des produits gratuits pour parler de votre boutique en ligne. Que lui demandez-vous ?", options: ["Cacher qu'elle a reçu quelque chose", "Le signaler clairement, par exemple avec « #pub » au début", "Publier seulement dans les commentaires", "Utiliser un faux nom"], answer: 1, why: "Les liens payés ou les cadeaux doivent être clairement signalés." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Écrire un e-mail marketing conforme à CAN-SPAM",
          minutes: 5,
          goal: "Écrire avec l'IA un e-mail marketing qui respecte les bases de CAN-SPAM.",
          text: [
            "L'e-mail touche des gens qui vous connaissent déjà. Demandez à l'IA : « Écris un court e-mail marketing aux anciens clients de [entreprise] sur [offre]. Ton amical, moins de 150 mots, un seul appel à l'action clair, et trois propositions d'objet honnêtes. »",
            "Aux États-Unis, la loi CAN-SPAM encadre les e-mails commerciaux. Le guide de la FTC liste les bases : des informations d'expéditeur exactes, un objet qui ne trompe pas, indiquer clairement qu'il s'agit d'une publicité, votre adresse postale valide, et un moyen clair de se désabonner. Vous devez traiter les demandes de désabonnement sous 10 jours ouvrables. Les amendes peuvent être élevées pour chaque e-mail : consultez la page de la FTC.",
            "N'écrivez qu'aux personnes qui vous ont donné leur adresse et ont accepté de recevoir vos messages, et utilisez un service d'e-mail qui gère les désabonnements pour vous. Les autres pays ont leurs propres règles ; vérifiez-les si vous écrivez à des clients à l'étranger."
          ],
          steps: ["Demandez à l'IA l'e-mail et trois objets honnêtes.", "Vérifiez chaque fait et chaque affirmation.", "Assurez-vous qu'il montre le nom de votre entreprise, votre adresse postale et un lien de désabonnement.", "N'envoyez qu'aux personnes qui ont accepté.", "Traitez les désabonnements sous 10 jours ouvrables."],
          words: [["Loi CAN-SPAM", "la loi américaine qui fixe les règles des e-mails commerciaux (marketing)."], ["Se désabonner", "demander à ne plus recevoir de messages."]],
          slides: [
            { title: "Rédigez-le avec l'IA", bullets: ["Court, amical, un seul appel à l'action", "Trois objets honnêtes au choix"] },
            { title: "Bases de CAN-SPAM (FTC)", bullets: ["Expéditeur exact, objet honnête", "Indiquez que c'est une publicité", "Votre adresse postale", "Un moyen clair de se désabonner"] },
            { title: "Désabonnements", bullets: ["À traiter sous 10 jours ouvrables", "Utilisez un service qui gère les désabonnements"] },
            { title: "Seulement aux personnes qui ont accepté", bullets: ["Anciens clients et inscrits", "Les autres pays ont leurs propres règles"] }
          ],
          sources: [{ name: "FTC : guide de conformité à la loi CAN-SPAM pour les entreprises (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }],
          tryIt: "Tâche finale : écrivez votre e-mail marketing avec l'IA, vérifiez-le avec les bases de CAN-SPAM (objet honnête, publicité indiquée, adresse, désabonnement), et rassemblez-le avec votre profil, votre offre, votre calendrier et vos trois publications pour former votre kit marketing d'un mois.",
          youCanNow: "planifier, créer et envoyer un marketing honnête conforme aux règles américaines sur la publicité et les e-mails.",
          quickCheck: [
            { objective: "O6", q: "Que doit contenir un e-mail marketing conforme à CAN-SPAM ?", options: ["Un bon de réduction", "Une photo", "Une adresse postale physique valide", "Votre numéro de téléphone personnel"], answer: 2, why: "CAN-SPAM exige une adresse postale physique valide." },
            { objective: "O6", q: "Vous avez acheté une liste d'adresses e-mail à un inconnu. Que faites-vous ?", options: ["Écrire à toutes ces adresses", "Écrire à la moitié", "Les ajouter discrètement à votre lettre d'information", "Ne pas l'utiliser ; écrire seulement aux personnes qui ont accepté"], answer: 3, why: "Envoyez des e-mails marketing aux personnes qui vous ont donné leur adresse et ont accepté." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Créer, publier et respecter les règles",
        questions: [
          { objective: "O4", q: "Quelle photo crée le plus de confiance dans une publication ?", options: ["Une vraie photo de votre propre travail", "Une image d'IA d'un faux client heureux", "La photo d'un concurrent", "Une image d'illustration floue"], answer: 0, why: "De vraies photos d'un vrai travail créent la confiance ; les faux clients trompent." },
          { objective: "O4", q: "Selon le Copyright Office américain, un contenu entièrement généré par l'IA est :", options: ["Automatiquement une marque déposée", "Toujours à vous", "À votre client", "Non protégé par le droit d'auteur"], answer: 3, why: "Le droit d'auteur protège la création humaine ; vos propres retouches créatives peuvent être protégées." },
          { objective: "O5", q: "Pouvez-vous utiliser l'IA pour écrire des avis de clients sur votre entreprise ?", options: ["Oui, s'ils ont l'air vrais", "Non, les faux avis sont interdits par la FTC", "Oui, si vous les publiez lentement", "Seulement le week-end"], answer: 1, why: "La règle de la FTC interdit les faux avis, y compris ceux générés par l'IA." },
          { objective: "O5", q: "Vous avez donné des produits gratuits à un influenceur pour qu'il parle de vous. Que doit-il se passer ?", options: ["Le lien doit être clairement signalé, comme « #pub » au début", "Rien", "Le cacher dans les commentaires", "Le mettre à la fin d'une longue légende"], answer: 0, why: "Les liens significatifs doivent être signalés de façon claire et visible." },
          { objective: "O6", q: "Selon CAN-SPAM, en combien de temps devez-vous traiter une demande de désabonnement ?", options: ["Jamais", "Dans l'année", "Sous 10 jours ouvrables", "Seulement s'ils demandent deux fois"], answer: 2, why: "Le guide de la FTC dit que les désabonnements doivent être traités sous 10 jours ouvrables." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Marketing et création de contenu avec l'IA",
    questions: [
      { objective: "O1", q: "Votre client idéal est quelqu'un qui :", options: ["Vit n'importe où dans le monde", "A besoin de ce que vous vendez, peut payer et est facile à atteindre", "Travaille déjà pour vous", "Est votre concurrent"], answer: 1, why: "C'est la définition utilisée dans le cours." },
      { objective: "O1", q: "Quelle demande à l'IA aide à décrire votre client idéal ?", options: ["« Trouve leurs adresses personnelles. »", "« Fais mes impôts. »", "« Invente des avis. »", "« Décris leur situation, leur plus gros problème, leurs inquiétudes et où ils passent du temps en ligne. »"], answer: 3, why: "Ces questions construisent un profil utile." },
      { objective: "O1", q: "Après que l'IA a rédigé un profil de client, vous devez :", options: ["Le vendre", "Le publier", "Ne jamais le changer", "Le vérifier avec de vrais clients"], answer: 3, why: "L'IA devine ; les vrais clients confirment." },
      { objective: "O2", q: "Laquelle est une offre claire ?", options: ["« On fait des trucs. »", "« Parents occupés de Decatur : gâteaux d'anniversaire sur mesure livrés, pour un souci de moins le jour de la fête. »", "« Le meilleur de tous, garanti ! »", "« Appelez-nous. »"], answer: 1, why: "Elle dit qui, quoi et pourquoi." },
      { objective: "O2", q: "Selon les règles de la FTC, les affirmations publicitaires doivent être :", options: ["Écrites par l'IA", "Drôles", "Vraies, non trompeuses et appuyées par des preuves", "Très longues"], answer: 2, why: "C'est la règle de base de la vérité dans la publicité." },
      { objective: "O2", q: "Devez-vous dire que votre service est « propulsé par l'IA » s'il n'utilise pas l'IA ?", options: ["Non, c'est une fausse affirmation", "Oui, ça fait moderne", "Seulement en petits caractères", "Seulement sur les réseaux sociaux"], answer: 0, why: "Les fausses affirmations sur l'IA sont de la publicité trompeuse." },
      { objective: "O3", q: "Un calendrier de 12 publications sur un mois, c'est environ :", options: ["Douze publications par jour", "Une publication par mois", "Trois publications par semaine", "Une publication par an"], answer: 2, why: "12 publications sur quatre semaines, c'est trois par semaine." },
      { objective: "O3", q: "Un bon mélange de contenu comprend :", options: ["Des conseils, des coulisses, des histoires de clients et des offres", "Seulement des publications de vente", "Seulement des mèmes", "Seulement des nouvelles des concurrents"], answer: 0, why: "Un mélange garde l'intérêt des abonnés." },
      { objective: "O3", q: "Les histoires de clients se partagent :", options: ["Sans demander", "Avec la permission du client", "Avec son numéro de téléphone", "Seulement si l'IA les a écrites"], answer: 1, why: "La permission respecte les clients et évite les problèmes." },
      { objective: "O4", q: "Une bonne demande de légende contient :", options: ["La légende de quelqu'un d'autre", "Vos coordonnées bancaires", "Un seul mot", "L'idée, le client, la longueur et un appel à l'action"], answer: 3, why: "Des détails clairs donnent une légende utilisable." },
      { objective: "O4", q: "Quand vous utilisez une image générée par l'IA, vous ne devez pas :", options: ["Lui faire représenter un vrai résultat que vous n'avez pas obtenu", "Vérifier ses erreurs", "Utiliser vos couleurs de marque", "Ajouter votre logo"], answer: 0, why: "Les faux résultats trompent les clients." },
      { objective: "O4", q: "Qui peut aider s'il est important de posséder le visuel de votre logo ?", options: ["Personne", "Seulement un outil d'images d'IA", "Un abonné au hasard", "Un graphiste humain et un avocat"], answer: 3, why: "Les visuels entièrement faits par l'IA ne sont pas protégés par le droit d'auteur." },
      { objective: "O5", q: "La règle de la FTC sur les faux avis interdit aussi :", options: ["De remercier les clients", "De demander des avis honnêtes aux clients", "D'offrir des récompenses seulement pour des avis positifs", "De répondre aux avis"], answer: 2, why: "Les récompenses liées à un avis positif sont interdites." },
      { objective: "O5", q: "Quelle pratique d'avis est autorisée ?", options: ["Acheter 50 avis cinq étoiles", "Demander un avis honnête à tous les clients", "Écrire des avis avec l'IA", "Modifier un mauvais avis pour qu'il paraisse bon"], answer: 1, why: "Les avis honnêtes de vrais clients sont autorisés." },
      { objective: "O5", q: "Où placer « #pub » sur une publication payée ?", options: ["Nulle part", "Caché dans les commentaires", "Tout à la fin d'une longue légende", "Au début, là où les gens le verront"], answer: 3, why: "Les mentions doivent être faciles à remarquer." },
      { objective: "O5", q: "Pour une vidéo payée, la mention doit être :", options: ["Seulement dans un lien", "Seulement dans la description", "Dans la vidéo elle-même", "Inutile"], answer: 2, why: "La FTC dit que la mention doit être dans la vidéo." },
      { objective: "O6", q: "CAN-SPAM exige que les e-mails marketing contiennent :", options: ["Une adresse postale valide", "Votre numéro de compte bancaire", "L'adresse d'un client", "Votre mot de passe"], answer: 0, why: "Une adresse postale fait partie des bases." },
      { objective: "O6", q: "L'objet d'un e-mail marketing doit être :", options: ["Tout en majuscules", "Non trompeur", "Secret", "Écrit par l'IA"], answer: 1, why: "Les objets trompeurs ne sont pas autorisés." },
      { objective: "O6", q: "Qui doit recevoir vos e-mails marketing ?", options: ["Toutes les adresses que vous trouvez", "Les personnes qui vous ont donné leur adresse et ont accepté", "Les clients de votre concurrent", "Des inconnus d'une liste achetée"], answer: 1, why: "Écrivez aux personnes qui ont accepté de recevoir vos messages." },
      { objective: "O6", q: "Si vous écrivez à des clients dans d'autres pays, vous devez :", options: ["Vérifier aussi les règles de ce pays", "Supposer que les règles américaines couvrent tout", "Arrêter le marketing", "Retirer votre adresse"], answer: 0, why: "Chaque pays peut avoir ses propres règles sur les e-mails." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      4,
      6,
      9,
      10,
      12,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Client idéal",
        objective: "O1",
        notYet: "Trop large, comme « tout le monde », ou pas vérifié auprès de vrais clients.",
        meets: "Un paragraphe sur qui ils sont, leur problème et où ils passent leur temps, vérifié auprès de vraies personnes.",
        exceeds: "Note quelles suppositions de l'IA étaient fausses et ont été corrigées."
      },
      {
        name: "Offre",
        objective: "O2",
        notYet: "Il manque pour qui, quoi ou pourquoi, ou elle contient une affirmation impossible à prouver.",
        meets: "Une phrase qui dit pour qui c'est, ce qu'on reçoit et pourquoi c'est important, le tout vrai.",
        exceeds: "Utilise les mots du client tirés d'une vraie conversation."
      },
      {
        name: "Calendrier de contenu",
        objective: "O3",
        notYet: "Moins de 12 publications, pas de dates, ou un seul type de publication.",
        meets: "12 publications datées avec plusieurs types sur une ou deux plateformes.",
        exceeds: "Chaque publication est liée à l'offre ou au problème du client."
      },
      {
        name: "Publications terminées",
        objective: "O4",
        notYet: "Légendes non retravaillées, ou images qui suggèrent des résultats non obtenus.",
        meets: "Trois publications avec des légendes retravaillées, des visuels et un appel à l'action, et des images honnêtes.",
        exceeds: "Utilise de vraies photos du travail de l'entrepreneur, avec l'autorisation de tout client montré."
      },
      {
        name: "E-mail conforme aux règles",
        objective: "O6",
        notYet: "Il manque un objet honnête, l'adresse ou la ligne de désinscription.",
        meets: "Objet honnête, signalé comme publicité, adresse physique et désinscription qui fonctionne.",
        exceeds: "Note aussi comment les désinscriptions seront traitées dans les 10 jours ouvrables."
      }
    ]
  },
  evaluation: {
    results: [
      "Les entrepreneurs qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les entrepreneurs qui publient au moins huit publications prévues dans les 30 jours (enquête de suivi)",
      "Les nouvelles demandes de clients ou les ventes que l'entrepreneur relie au kit marketing",
      "Les apprenants qui commencent un autre cours Koach Learn pour entrepreneurs dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec un assistant IA gratuit et un compte Canva gratuit",
      "De vraies photos de votre travail et une vraie conversation avec un client ou un relevé de ventes",
      "Un tableur ou un document pour le calendrier de contenu",
      "Environ 60 à 75 minutes au total pour les leçons, les tâches, les vérifications et le kit marketing"
    ],
    facilitatorNotes: [
      "Demandez aux entrepreneurs d'interroger un vrai client avant la leçon 1 pour que le profil repose sur du concret.",
      "Relisez chaque offre et chaque publication en binômes, en entourant toute affirmation impossible à prouver.",
      "Expliquez que le cours présente les règles américaines de base avec des mots simples et n'est pas un conseil juridique.",
      "Rappelez aux entrepreneurs de demander l'autorisation avant de partager des histoires ou des photos de clients.",
      "Notez le kit marketing avec la grille, une ligne « Pas encore » à la fois."
    ]
  }
};
