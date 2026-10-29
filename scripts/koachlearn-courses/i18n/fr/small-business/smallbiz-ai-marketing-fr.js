"use strict";

// Koach Learn course (French translation of small-business/smallbiz-ai-marketing.js). See scripts/koachlearn-courses/README.md, "Translations".

const FTC_ADS = { name: "FTC : bases de la publicité et du marketing (en anglais)", url: "https://www.ftc.gov/business-guidance/advertising-marketing" };
const FTC_REVIEWS = { name: "FTC : règle sur les avis et témoignages de consommateurs, questions et réponses (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };
const CAN_SPAM = { name: "FTC : loi CAN-SPAM, guide de conformité pour les entreprises (en anglais)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

module.exports = {
  id: "smallbiz-ai-marketing-fr",
  lang: "fr",
  translationOf: "smallbiz-ai-marketing",
  category: "Small Business",
  name: "L'IA dans le marketing des petites entreprises",
  skills: "Rédiger un message marketing, Créer des publications pour les réseaux sociaux avec l'IA, Concevoir un prospectus, Planifier un calendrier de contenus, Garder des affirmations honnêtes, Vérifier ce qui marche",
  outcome: "planifier et réaliser un mois de marketing pour votre entreprise avec l'aide de l'IA : un message principal clair, un calendrier de contenus sur quatre semaines, une série de publications et un prospectus, le tout avec des affirmations honnêtes, et un moyen simple de voir quelles publications ont fait venir des clients.",
  about: [
    "Ce cours s'adresse aux patrons de petites entreprises qui font leur propre marketing : restaurants et food trucks, salons de coiffure et barbiers, boutiques, entreprises de ménage et de réparation, et entreprises à domicile. Beaucoup de nos élèves sont des entreprises tenues par des personnes issues de minorités qui font leur marketing auprès de leur quartier et de leur communauté.",
    "Vous utiliserez des outils d'IA gratuits pour trouver votre message principal, écrire des publications et des légendes, concevoir un prospectus, planifier un mois de contenus, garder des affirmations honnêtes selon les règles de la FTC (l'autorité américaine de protection des consommateurs), et suivre ce qui fait vraiment venir des clients.",
    "Chaque leçon dure environ cinq minutes, avec une tâche \"Essayez maintenant\". Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Les tâches forment ensemble un mois de marketing prêt à publier."
  ],
  finalTask: "Réalisez un mois de marketing : écrivez votre message principal, un calendrier de contenus sur quatre semaines avec au moins huit publications, des légendes terminées pour quatre d'entre elles, un prospectus fait dans un outil de conception, et un tableau de suivi qui montre comment vous saurez quelles publications ont fait venir des clients. Vérifiez que chaque affirmation est vraie et que vous avez le droit d'utiliser chaque image.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des propriétaires de petites entreprises qui font leur propre marketing : restaurants et food trucks, salons de coiffure et barbiers, commerces, services de nettoyage et de réparation, et entreprises à domicile. Beaucoup sont des entreprises tenues par des personnes issues de minorités, qui font leur marketing auprès de leur quartier et de leur communauté.",
    startingPoint: "Ils publient de temps en temps sur les réseaux sociaux et ont peut-être fait un prospectus. Ils n'ont ni message principal, ni calendrier de contenus, ni suivi, et utilisent peu l'IA pour le marketing.",
    gap: "Des publications au hasard prennent du temps et attirent rarement des clients, et l'IA peut ajouter des affirmations ou des images fausses, ce qui peut enfreindre les règles de la FTC et abîmer la confiance. Les propriétaires ont besoin d'un message clair, d'un mois de contenus honnêtes et planifiés, et d'un moyen simple de voir ce qui fait venir les clients.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Appareils : un smartphone avec appareil photo ; un ordinateur aide pour le prospectus et le tableau",
      "Temps : des leçons d'environ 5 minutes, à caser dans une journée de travail chargée",
      "Règles : les règles de la FTC sur la vérité dans la publicité, la règle de la FTC sur les avis et la loi CAN-SPAM pour les e-mails marketing",
      "Vie privée et droits : une autorisation avant de publier la photo d'un client, et les noms des clients gardés hors de l'IA"
    ],
    prerequisites: "Le cours « Introduction à l'IA pour les petites entreprises » est utile, mais pas obligatoire."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avec la formule du message principal et un assistant d'IA", action: "écrire un message principal qui dit qui vous servez, ce que vous faites et ce qui vous rend différent", standard: "en une ou deux phrases vraies qui vous ressemblent" },
    { id: "O2", condition: "À partir de votre message principal", action: "écrire des publications et des légendes avec l'aide de l'IA", standard: "avec un vrai détail ajouté à chacune, rien de faux, et une autorisation pour toute photo de client" },
    { id: "O3", condition: "Avec un outil de conception gratuit", action: "créer un prospectus pour une offre ou un événement", standard: "avec un titre, une vraie image, trois détails et un appel à l'action, le tout vérifié" },
    { id: "O4", condition: "Avec un assistant d'IA et un tableau", action: "planifier un calendrier de contenus sur quatre semaines", standard: "avec un nombre de publications que vous pouvez tenir, différents types de publications et chaque date vérifiée" },
    { id: "O5", condition: "À partir de vos légendes et de votre prospectus", action: "vérifier votre marketing pour repérer les affirmations non prouvables, les faux avis et les règles sur les e-mails", standard: "avec chaque affirmation non prouvée modifiée ou retirée" },
    { id: "O6", condition: "À partir de vos publications et de votre prospectus", action: "créer un tableau de suivi qui montre quel marketing fait venir des clients", standard: "avec un code promo sur une offre et toute tendance trouvée par l'IA confirmée dans le tableau" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Votre message et vos publications",
      lessons: [
        {
          objectives: ["O1"],
          title: "Trouver votre message marketing principal",
          minutes: 5,
          goal: "Écrire une ou deux phrases qui disent qui vous servez, ce que vous faites et ce qui vous rend différent.",
          text: [
            "Votre message principal est la réponse courte à \"Pourquoi devrais-je vous choisir ?\" Chaque publication, prospectus et affiche doit le répéter avec d'autres mots.",
            "Une formule simple : Nous aidons [qui] à obtenir [quoi] avec [ce qui nous rend différents]. Exemple : \"Nous aidons les familles occupées du sud de Sacramento à avoir des repas philippins faits maison, prêts en 10 minutes, préparés par la même famille depuis 2009.\"",
            "Demandez à l'IA de vous aider à le trouver : \"Voici ce que les clients disent de ma boutique et ce que je fais différemment. Écris cinq versions d'un message principal en une phrase.\" Choisissez celle qui est vraie et qui vous ressemble."
          ],
          steps: ["Écrivez qui vous servez.", "Écrivez ce qu'ils obtiennent.", "Écrivez ce qui vous rend différent (vrai, précis).", "Demandez cinq versions à l'IA et choisissez-en une."],
          words: [["Message principal", "la courte phrase qui dit pourquoi les clients devraient vous choisir."], ["Point de différence", "quelque chose de vrai qui vous distingue des concurrents."]],
          slides: [
            { title: "Pourquoi devrais-je vous choisir ?", bullets: ["Votre message principal y répond", "Répétez-le dans chaque publication et prospectus"] },
            { title: "La formule", bullets: ["Nous aidons [qui]", "à obtenir [quoi]", "avec [ce qui nous rend différents]"] },
            { title: "Explorez avec l'IA", bullets: ["Partagez ce que les clients disent de vous", "Demandez cinq versions", "Choisissez celle qui est vraie et vous ressemble"] }
          ],
          tryIt: "Remplissez la formule pour votre entreprise. Puis demandez à un assistant d'IA cinq versions et choisissez la meilleure.",
          youCanNow: "écrire un message principal clair pour votre entreprise.",
          quickCheck: [
            { objective: "O1", q: "À quelle question des clients répond un message principal ?", options: ["À quelle heure fermez-vous ?", "Combien d'employés avez-vous ?", "Pourquoi devrais-je vous choisir ?", "Où avez-vous acheté votre matériel ?"], answer: 2, why: "Un message principal dit aux clients pourquoi vous choisir." },
            { objective: "O1", q: "L'IA vous donne cinq versions de message principal, et la meilleure dit que vous êtes « le salon n° 1 de la ville ». Que faites-vous ?", options: ["L'utiliser, car elle a de l'impact", "Choisir une version vraie qui vous ressemble", "Utiliser les cinq", "Y ajouter « peut-être »"], answer: 1, why: "Votre message principal doit être vrai et vous ressembler." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Écrire des publications et des légendes avec l'IA",
          minutes: 5,
          goal: "Transformer votre message principal en plusieurs publications avec votre propre ton.",
          text: [
            "Les bonnes publications de petites entreprises montrent des choses réelles : le plat du jour, une coupe avant-après, un client content (avec son accord), votre équipe, les coulisses, un conseil, un événement. Les gens suivent des personnes.",
            "Demandez des brouillons à l'IA : \"Écris quatre courtes légendes Instagram pour mon salon de barbier. Message principal : [votre message]. Une sur nos horaires du samedi, une sur un dégradé, une pour présenter notre nouveau barbier Marcus, une avec un conseil d'entretien des cheveux. Ton amical, 2 phrases chacune, 3 hashtags.\"",
            "Puis corrigez. Ajoutez de vrais détails que vous seul connaissez. Retirez tout ce qui sonne faux ou exagéré. Demandez toujours l'accord avant de publier la photo ou le nom d'un client."
          ],
          steps: ["Choisissez quatre types de publications : offre, coulisses, équipe, conseil.", "Demandez à l'IA des légendes avec votre message principal et votre ton.", "Ajoutez de vrais détails et retirez tout ce qui est faux.", "Obtenez l'accord pour toute photo ou nom de client."],
          words: [["Légende", "le texte qui accompagne une photo ou une vidéo sur les réseaux sociaux."], ["Hashtag", "un mot précédé de #, utilisé pour regrouper les publications sur un sujet."]],
          slides: [
            { title: "Publiez des choses réelles", bullets: ["Le plat du jour ou un avant-après", "Votre équipe et les coulisses", "Conseils et événements"] },
            { title: "Demandez des brouillons à l'IA", bullets: ["Donnez votre message principal et votre ton", "Indiquez les types de publications et la longueur", "Demandez quelques hashtags"] },
            { title: "Puis rendez-les réelles", bullets: ["Ajoutez des détails que vous seul connaissez", "Retirez ce qui est faux ou exagéré", "Accord avant toute photo ou nom de client"] }
          ],
          tryIt: "Demandez à l'IA quatre légendes pour votre entreprise avec votre message principal. Corrigez chacune pour ajouter un vrai détail et retirer tout ce qui n'est pas vrai.",
          youCanNow: "écrire avec l'aide de l'IA des publications qui sonnent vrai et qui ressemblent à votre entreprise.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qu'une légende ?", options: ["Le texte qui accompagne une photo ou une vidéo sur les réseaux sociaux", "Une licence commerciale", "Un type de prospectus", "L'avis d'un client"], answer: 0, why: "Une légende est le texte qui accompagne votre photo ou votre vidéo publiée." },
            { objective: "O2", q: "Vous voulez publier une très belle photo de la nouvelle coupe d'un client. Que faites-vous d'abord ?", options: ["La publier et l'identifier", "La flouter et la publier", "Demander à l'IA si c'est permis", "Obtenir l'autorisation du client"], answer: 3, why: "Il vous faut l'autorisation du client avant de publier sa photo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Concevoir un prospectus ou un visuel promotionnel",
          minutes: 5,
          goal: "Créer un prospectus ou un visuel clair pour une offre ou un événement.",
          text: [
            "Un prospectus fonctionne sur un comptoir, sur un panneau d'affichage de quartier, dans le bulletin d'une église ou comme publication. Utilisez un outil de conception gratuit comme Canva ou Adobe Express, en partant d'un modèle.",
            "Gardez des parties claires : un grand titre (l'offre), une image, trois courts détails (quoi, quand, où), et un appel à l'action (\"Appelez pour réserver\", \"Commandez en ligne\"). Mettez votre message principal en petit en bas.",
            "Si vous utilisez des images créées par l'IA, assurez-vous qu'elles ne montrent pas de plats, de travaux ou de résultats que vous ne proposez pas vraiment. Utilisez vos propres photos quand vous pouvez ; les clients font confiance aux vraies images."
          ],
          steps: ["Ouvrez un outil de conception et choisissez un modèle.", "Écrivez un grand titre avec l'offre.", "Ajoutez une image, trois détails et un appel à l'action.", "Vérifiez l'orthographe, le téléphone, la date et l'adresse.", "Téléchargez ou partagez."],
          words: [["Appel à l'action", "les mots qui disent aux gens quoi faire ensuite, comme \"Appelez pour réserver\"."], ["Titre", "les plus grands mots d'un prospectus ou d'une publicité."]],
          slides: [
            { title: "Les parties d'un prospectus clair", bullets: ["Grand titre : l'offre", "Une image", "Quoi, quand, où", "Appel à l'action"] },
            { title: "Outils de conception gratuits", bullets: ["Canva ou Adobe Express", "Partez d'un modèle"] },
            { title: "Des images qui inspirent confiance", bullets: ["Utilisez vos propres photos quand vous pouvez", "Les images d'IA ne doivent pas montrer ce que vous ne proposez pas"] }
          ],
          tryIt: "Créez un prospectus pour une vraie offre ou un vrai événement avec un titre, une image, trois détails et un appel à l'action. Vérifiez chaque détail avant de l'enregistrer.",
          youCanNow: "concevoir un prospectus ou un visuel promotionnel clair pour votre entreprise.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'un appel à l'action ?", options: ["Un appel téléphonique à un client", "Un grand titre", "Des mots qui disent aux gens quoi faire ensuite", "Une liste de prix"], answer: 2, why: "Un appel à l'action dit aux gens la prochaine étape, comme « Appelez pour réserver »." },
            { objective: "O3", q: "Votre prospectus montre une image d'IA d'un gâteau que vous ne faites pas. Que faites-vous ?", options: ["La garder, car elle est jolie", "La rendre plus petite", "Ajouter une note disant qu'elle vient de l'IA", "La remplacer par une vraie photo de ce que vous vendez"], answer: 3, why: "Les images doivent montrer ce que vous vendez vraiment." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Votre message et vos publications",
        questions: [
          { objective: "O1", q: "À quelle question répond un message principal ?", options: ["Quel est votre mot de passe ?", "Pourquoi devrais-je vous choisir ?", "Où est la banque ?", "Quel âge a le patron ?"], answer: 1, why: "Le message principal dit pourquoi les clients devraient vous choisir." },
          { objective: "O1", q: "Lequel est un message principal fort ?", options: ["\"Nous sommes les meilleurs.\"", "\"Entrez.\"", "\"De la nourriture.\"", "\"Nous aidons les familles occupées du sud de Sacramento à avoir des repas philippins faits maison en 10 minutes.\""], answer: 3, why: "Il dit qui, quoi et ce qui est différent." },
          { objective: "O2", q: "Avant de publier la photo d'un client, vous devez :", options: ["Obtenir son accord", "Ajouter un filtre", "Demander à l'IA", "La publier la nuit"], answer: 0, why: "L'accord respecte les clients et évite les ennuis." },
          { objective: "O3", q: "Qu'est-ce qu'un appel à l'action ?", options: ["Un hashtag", "Une facture de téléphone", "Des mots qui disent aux gens quoi faire ensuite", "Un logo"], answer: 2, why: "Il indique l'étape suivante, comme \"Appelez pour réserver\"." },
          { objective: "O3", q: "Une image d'IA montre un plat que vous ne vendez pas. Que faites-vous ?", options: ["L'utiliser quand même", "Ajouter d'autres faux plats", "La remplacer par une vraie photo ou une image de ce que vous vendez", "La publier deux fois"], answer: 2, why: "Les images ne doivent pas tromper les clients." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Planification, honnêteté et résultats",
      lessons: [
        {
          objectives: ["O4"],
          title: "Planifier un calendrier de contenus mensuel",
          minutes: 5,
          goal: "Planifier quatre semaines de publications dans un calendrier simple.",
          text: [
            "Un calendrier de contenus est un tableau qui dit ce que vous publierez et quand. Il met fin à la panique du \"qu'est-ce que je publie aujourd'hui ?\".",
            "Créez des colonnes : Date, Plateforme, Type de publication, Idée, Légende faite ?, Image faite ?. Prévoyez deux ou trois publications par semaine que vous pouvez vraiment tenir. Variez les types : offres, conseils, équipe, clients (avec leur accord) et événements de quartier.",
            "Demandez à l'IA : \"Fais un calendrier de publications sur quatre semaines pour mon entreprise de ménage, deux publications par semaine, en mélangeant offres, conseils et équipe. Notre message principal est [...]. Ajoute les fêtes et les événements locaux à [ville] en [mois] que je devrais vérifier.\" Puis vérifiez vous-même chaque date et chaque événement."
          ],
          steps: ["Créez un tableau de calendrier avec six colonnes.", "Choisissez combien de publications par semaine vous pouvez tenir.", "Demandez à l'IA des idées pour quatre semaines.", "Vérifiez vous-même les dates et les événements locaux.", "Cochez les publications faites au fur et à mesure."],
          words: [["Calendrier de contenus", "un planning de ce que vous publierez et quand."], ["Plateforme", "un réseau social ou une application, comme Instagram, Facebook ou TikTok."]],
          slides: [
            { title: "Pourquoi un calendrier", bullets: ["Fini le \"qu'est-ce que je publie aujourd'hui ?\"", "Un tableau de quoi et quand"] },
            { title: "Colonnes", bullets: ["Date, Plateforme, Type de publication", "Idée, Légende faite ?, Image faite ?"] },
            { title: "Planifiez avec l'IA", bullets: ["Deux ou trois publications par semaine que vous pouvez tenir", "Variez offres, conseils, équipe, quartier", "Vérifiez vous-même chaque date et événement"] }
          ],
          tryIt: "Demandez à l'IA un calendrier de quatre semaines avec deux publications par semaine pour votre entreprise. Mettez-le dans un tableau et vérifiez chaque date.",
          youCanNow: "planifier un mois de publications dans un calendrier de contenus.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qu'un calendrier de contenus ?", options: ["Un planning de ce que vous publiez et quand", "Une liste des jours fériés", "Un rapport de ventes", "Vos heures d'ouverture"], answer: 0, why: "Un calendrier de contenus prévoit vos publications par date." },
            { objective: "O4", q: "Le calendrier de l'IA prévoit deux publications par jour, mais vous avez le temps d'en faire deux par semaine. Que faites-vous ?", options: ["Essayer quand même de publier tous les jours", "Le réduire à un nombre que vous pouvez vraiment tenir", "Laisser tomber le calendrier", "Engager une agence de marketing"], answer: 1, why: "Prévoyez un nombre de publications que vous pouvez vraiment tenir." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Garder un marketing honnête et légal",
          minutes: 5,
          goal: "Vérifier votre marketing pour repérer les affirmations non prouvables, les faux avis et les règles sur les e-mails.",
          text: [
            "La Federal Trade Commission (FTC) dit que la publicité doit être vraie et non trompeuse, et que vous devez avoir des preuves de vos affirmations. \"Les meilleurs tacos de LA\" se lit comme une opinion, mais \"Notre nettoyage élimine 99 % des microbes\" ou \"Perdez 5 kilos\" sont des affirmations que vous devez pouvoir prouver.",
            "L'IA aime les grands mots : \"garanti\", \"primé\", \"numéro un\". Retirez ceux que vous ne pouvez pas prouver. Ne publiez jamais de faux avis ni de faux témoignages ; la règle de la FTC sur les avis les interdit, y compris ceux écrits par l'IA.",
            "Aux États-Unis, les e-mails marketing doivent respecter la loi CAN-SPAM : expéditeur et objet honnêtes, dire que c'est une publicité, mettre votre adresse postale et un moyen facile de se désinscrire, et respecter les désinscriptions sous 10 jours ouvrables."
          ],
          steps: ["Soulignez chaque affirmation de votre publication ou de votre prospectus.", "Demandez-vous : puis-je le prouver ?", "Retirez ou changez les affirmations que vous ne pouvez pas prouver.", "Aucun faux avis ni faux témoignage.", "Vérifiez les bases de CAN-SPAM dans vos e-mails marketing."],
          words: [["Affirmation", "une phrase qui présente un fait dans une publicité, comme \"élimine 99 % des microbes\"."], ["Trompeur", "qui risque de donner aux gens une fausse idée."], ["Témoignage", "les paroles d'un client qui fait l'éloge de votre entreprise, utilisées dans le marketing."]],
          slides: [
            { title: "FTC : des publicités vraies", bullets: ["Les publicités ne doivent pas tromper", "Il faut des preuves de vos affirmations"] },
            { title: "Retirez les grands mots non prouvés", bullets: ["\"Garanti\", \"primé\", \"numéro un\"", "Aucun faux avis, même écrit par l'IA"] },
            { title: "E-mails marketing (CAN-SPAM)", bullets: ["Expéditeur et objet honnêtes ; dire que c'est une publicité", "Adresse postale et désinscription facile", "Désinscriptions respectées sous 10 jours ouvrables"] }
          ],
          sources: [FTC_ADS, FTC_REVIEWS, CAN_SPAM],
          tryIt: "Reprenez vos quatre légendes et votre prospectus. Soulignez chaque affirmation, et changez ou retirez celles que vous ne pouvez pas prouver.",
          youCanNow: "vérifier votre marketing pour repérer les affirmations non prouvables, les faux avis et les problèmes avec les règles sur les e-mails.",
          quickCheck: [
            { objective: "O5", q: "Selon la FTC, comment doivent être les publicités ?", options: ["Drôles", "Courtes", "Vraies et non trompeuses", "Publiées chaque jour"], answer: 2, why: "Les règles de la FTC disent que les publicités doivent être vraies et non trompeuses." },
            { objective: "O5", q: "L'IA a écrit « Élus meilleurs tacos de LA » dans votre légende, mais il n'y a jamais eu de vote. Que faites-vous ?", options: ["Le retirer", "Le garder : tout le monde dit ça", "Le changer en « Élus meilleurs tacos de la ville »", "Demander à des amis de voter maintenant"], answer: 0, why: "Les affirmations que vous ne pouvez pas prouver doivent être retirées." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Voir ce qui marche",
          minutes: 5,
          goal: "Suivre quelles publications et quels prospectus font venir des clients.",
          text: [
            "Les \"j'aime\" font plaisir, mais les clients comptent plus. Suivez des signaux simples : messages et appels, réservations, personnes qui parlent d'une publication, et usage d'un code spécial (\"Dites FLYER10 pour 10 % de réduction\").",
            "La plupart des réseaux sociaux affichent des chiffres gratuits pour les comptes professionnels, comme la portée et les visites du profil ; cherchez la section statistiques ou analyses. Notez les chiffres clés dans un tableau de suivi chaque semaine.",
            "Une fois par mois, collez votre tableau (sans noms de clients) dans un assistant d'IA et demandez : \"Quels types de publications ont amené le plus de réservations ? Que devrais-je faire davantage ?\" Confirmez dans votre tableau, puis planifiez le mois suivant."
          ],
          steps: ["Choisissez vos signaux : messages, réservations, mentions, usage du code.", "Ajoutez un code spécial à une offre.", "Notez les chiffres chaque semaine dans un tableau.", "Demandez les tendances à l'IA une fois par mois et confirmez-les."],
          words: [["Portée", "le nombre de personnes qui ont vu une publication."], ["Statistiques", "les chiffres qu'une plateforme affiche sur les résultats de vos publications."], ["Code promo", "un mot que les clients disent ou tapent pour obtenir une offre, ce qui aide à la suivre."]],
          slides: [
            { title: "Les clients avant les \"j'aime\"", bullets: ["Messages, appels et réservations", "Personnes qui parlent d'une publication", "Codes spéciaux comme FLYER10"] },
            { title: "Des chiffres gratuits", bullets: ["Les comptes professionnels ont des statistiques", "Portée et visites du profil", "Notez-les dans un tableau chaque semaine"] },
            { title: "Bilan mensuel avec l'IA", bullets: ["Collez le tableau, sans noms", "Demandez ce qui a amené le plus de réservations", "Confirmez, puis planifiez le mois suivant"] }
          ],
          tryIt: "Tâche finale : terminez votre mois de marketing : message principal, calendrier de quatre semaines, quatre légendes terminées, un prospectus, et un tableau de suivi avec un code promo sur une offre. Vérifiez chaque affirmation et chaque image.",
          youCanNow: "planifier, réaliser et mesurer un mois de marketing honnête pour votre entreprise.",
          quickCheck: [
            { objective: "O6", q: "Que veut dire la portée d'une publication ?", options: ["Le nombre de personnes qui ont acheté quelque chose", "Le nombre de personnes qui ont vu une publication", "La distance que font les clients", "Le nombre de publications que vous avez faites"], answer: 1, why: "La portée est le nombre de personnes qui ont vu une publication." },
            { objective: "O6", q: "Vous voulez savoir si votre prospectus a fait venir des clients. Que faites-vous ?", options: ["Deviner d'après l'affluence", "Demander à l'IA de deviner", "Compter vos mentions « J'aime »", "Mettre un code promo spécial sur le prospectus et le suivre"], answer: 3, why: "Un code spécial montre quel marketing a fait venir chaque client." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Planification, honnêteté et résultats",
        questions: [
          { objective: "O4", q: "Qu'est-ce qu'un calendrier de contenus ?", options: ["Un planning de ce que vous publiez et quand", "Un calendrier fiscal", "Un planning du personnel", "Une horloge murale"], answer: 0, why: "Il planifie vos publications." },
          { objective: "O4", q: "Le calendrier de l'IA indique un festival local à une date. Que faites-vous ?", options: ["Supprimer le calendrier", "La croire", "Publier dessus sans vérifier", "Vérifier vous-même la date"], answer: 3, why: "L'IA peut se tromper sur les dates et les événements." },
          { objective: "O5", q: "Quelle affirmation demande une preuve ?", options: ["\"Passez nous dire bonjour\"", "\"Notre nettoyage élimine 99 % des microbes\"", "\"Nous aimons notre quartier\"", "\"Ouvert samedi\""], answer: 1, why: "Les affirmations factuelles précises demandent une preuve." },
          { objective: "O6", q: "Quel est le meilleur signe qu'une publication a marché ?", options: ["De nouvelles réservations de personnes qui en parlent", "Un \"j'aime\" de plus", "Une jolie couleur", "Une longue légende"], answer: 0, why: "Les clients comptent plus que les \"j'aime\"." },
          { objective: "O6", q: "Pourquoi ajouter un code spécial comme FLYER10 ?", options: ["La loi l'exige", "Pour embrouiller les clients", "Pour suivre quel marketing a fait venir des clients", "Pour cacher le prix"], answer: 2, why: "Les codes montrent quelle action a marché." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA dans le marketing des petites entreprises",
    questions: [
      { objective: "O1", q: "La formule du message principal est : Nous aidons [qui] à obtenir [quoi] avec...", options: ["Notre mot de passe", "Ce qui nous rend différents", "Toujours une réduction", "Le nom de notre concurrent"], answer: 1, why: "Le point de différence la complète." },
      { objective: "O1", q: "Votre message principal doit être :", options: ["Secret", "Le plus grand possible", "Copié sur un concurrent", "Vrai et à votre image"], answer: 3, why: "Les clients font confiance aux messages vrais." },
      { objective: "O1", q: "Où doit apparaître votre message principal ?", options: ["Nulle part", "Seulement dans votre tête", "Seulement dans vos impôts", "Dans vos publications, prospectus et affiches"], answer: 3, why: "Le répéter vous fait reconnaître." },
      { objective: "O2", q: "Laquelle est une bonne publication de petite entreprise ?", options: ["Une photo de banque d'images d'une plage", "Une coupe avant-après, avec accord", "Un faux avis", "La photo d'un concurrent"], answer: 1, why: "Un vrai travail crée la confiance." },
      { objective: "O2", q: "Après que l'IA a écrit des légendes, vous devez :", options: ["Ajouter d'autres grandes affirmations", "Les publier sans changement", "Ajouter de vrais détails et retirer ce qui est faux", "Supprimer votre page"], answer: 2, why: "Les corriger les rend réelles et exactes." },
      { objective: "O2", q: "Qu'est-ce qu'une légende ?", options: ["Le texte qui accompagne une photo ou vidéo sur les réseaux sociaux", "Un reçu", "Une étiquette de prix", "Un logo"], answer: 0, why: "Les légendes décrivent les publications." },
      { objective: "O3", q: "Quels outils gratuits peuvent créer des prospectus ?", options: ["Une caisse enregistreuse", "Une calculatrice", "Canva ou Adobe Express", "Un chargeur de téléphone"], answer: 2, why: "Ce sont des outils de conception avec des modèles." },
      { objective: "O3", q: "Le titre d'un prospectus doit être :", options: ["Grand et parler de l'offre", "Minuscule", "Absent", "Votre mot de passe"], answer: 0, why: "Le titre attire l'attention." },
      { objective: "O3", q: "À quelle image les clients font-ils le plus confiance ?", options: ["Des images d'IA de choses que vous ne vendez pas", "Vos propres vraies photos", "Des photos prises au hasard sur internet", "Les photos des concurrents"], answer: 1, why: "Les vraies images créent la confiance." },
      { objective: "O4", q: "Combien de publications par semaine prévoir ?", options: ["Autant que l'IA en propose", "Cinquante", "Aucune", "Un nombre que vous pouvez vraiment tenir"], answer: 3, why: "La régularité vaut mieux que l'épuisement." },
      { objective: "O4", q: "Laquelle est une colonne du calendrier de contenus ?", options: ["Type de publication", "Numéro de carte du client", "Mot de passe", "Code de carte bancaire"], answer: 0, why: "Le type de publication aide à varier vos contenus." },
      { objective: "O4", q: "Varier les types de publications veut dire :", options: ["Seulement des republications", "Seulement des réductions", "Seulement des selfies", "Des offres, des conseils, l'équipe et le quartier"], answer: 3, why: "La variété garde l'intérêt des abonnés." },
      { objective: "O5", q: "Selon la FTC, les publicités doivent être :", options: ["Longues", "Drôles", "Vraies et non trompeuses", "En couleur"], answer: 2, why: "C'est la règle de base de la FTC." },
      { objective: "O5", q: "L'IA a ajouté \"primé\" mais vous n'avez aucun prix. Vous :", options: ["Le gardez", "Le retirez", "Inventez un prix", "Ajoutez \"garanti\""], answer: 1, why: "Les affirmations non prouvables trompent." },
      { objective: "O5", q: "Les faux avis écrits par l'IA sont :", options: ["Obligatoires", "Acceptables s'ils sont courts", "Acceptables le week-end", "Interdits par la règle de la FTC sur les avis"], answer: 3, why: "La règle couvre les faux avis faits par l'IA." },
      { objective: "O5", q: "Un e-mail marketing conforme à CAN-SPAM doit contenir :", options: ["Un faux expéditeur", "Le numéro de carte du client", "Votre adresse postale et un moyen de se désinscrire", "Aucun objet"], answer: 2, why: "Les deux sont obligatoires." },
      { objective: "O6", q: "La portée, c'est :", options: ["Le nombre de personnes qui ont vu une publication", "Le nombre d'acheteurs", "Le nombre d'employés", "La force de votre Wi-Fi"], answer: 0, why: "La portée compte les vues." },
      { objective: "O6", q: "Où trouver les chiffres gratuits des publications sur un compte professionnel ?", options: ["Dans votre imprimante de tickets", "Dans la section statistiques ou analyses", "À votre banque", "Nulle part"], answer: 1, why: "Les plateformes affichent des statistiques aux comptes professionnels." },
      { objective: "O6", q: "Avant de coller vos chiffres de suivi dans l'IA, retirez :", options: ["Les dates", "Les noms des clients", "Les types de publications", "Les totaux"], answer: 1, why: "Les noms des clients sont privés." },
      { objective: "O6", q: "Après que l'IA a dit que les publications de conseils amènent le plus de réservations, vous :", options: ["Le confirmez dans votre tableau, puis en prévoyez plus", "Arrêtez toutes les publications de conseils", "L'ignorez", "Supprimez votre compte"], answer: 0, why: "Confirmez, puis agissez." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      1,
      4,
      5,
      7,
      8,
      9,
      12,
      13,
      16
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Message principal",
        objective: "O1",
        notYet: "Flou, ou il dit quelque chose de faux.",
        meets: "Une ou deux phrases vraies : qui vous servez, ce que vous faites, ce qui vous rend différent.",
        exceeds: "Il apparaît dans les publications et sur le prospectus."
      },
      {
        name: "Calendrier de contenus",
        objective: "O4",
        notYet: "Moins de huit publications, ou des dates non vérifiées.",
        meets: "Quatre semaines avec au moins huit publications, dates vérifiées.",
        exceeds: "Il mélange offres, conseils, équipe et publications sur la communauté."
      },
      {
        name: "Légendes",
        objective: "O2",
        notYet: "Moins de quatre, ou elles contiennent des détails faux.",
        meets: "Quatre légendes terminées avec un vrai détail dans chacune.",
        exceeds: "Chacune a un appel à l'action clair et ressemble au propriétaire."
      },
      {
        name: "Prospectus",
        objective: "O3",
        notYet: "Il manque un titre, des détails ou un appel à l'action.",
        meets: "Un titre, une vraie image, trois détails et un appel à l'action, le tout vérifié.",
        exceeds: "Il contient un code promo pour le suivi."
      },
      {
        name: "Affirmations et images honnêtes",
        objective: "O5",
        notYet: "Une affirmation ne peut pas être prouvée, ou une image n'est pas à vous.",
        meets: "Chaque affirmation peut être prouvée et chaque image est à vous ou utilisée avec autorisation.",
        exceeds: "Le propriétaire peut dire comment chaque affirmation est appuyée."
      },
      {
        name: "Tableau de suivi",
        objective: "O6",
        notYet: "Aucun moyen de savoir quelles publications ont marché.",
        meets: "Un tableau pour noter les résultats, avec un code promo sur une offre.",
        exceeds: "Il utilise les statistiques gratuites des plateformes et prévoit de revoir les résultats à la fin du mois."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les propriétaires qui publient selon leur calendrier pendant tout le mois (enquête de suivi à 30 jours)",
      "Les propriétaires qui peuvent dire, grâce à leur tableau de suivi, quelle publication ou quel prospectus a fait venir de nouveaux clients",
      "Les propriétaires qui disent avoir plus de réservations ou de ventes après le mois"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone avec appareil photo et internet ; un ordinateur aide pour le prospectus et le tableau",
      "Un assistant d'IA gratuit et un outil de conception gratuit comme Canva ou Adobe Express",
      "De vraies photos de votre entreprise, de vos produits ou de votre travail",
      "Environ 60 minutes en tout : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Demandez aux propriétaires d'apporter quelques vraies photos et une offre ou un événement à venir.",
      "Rappelez aux propriétaires d'obtenir une autorisation avant de publier la photo d'un client.",
      "Faites souligner ensemble chaque affirmation dans les légendes et le prospectus, puis demandez à chacun comment il la prouverait.",
      "Les noms des clients restent hors des outils d'IA quand on colle les chiffres de suivi.",
      "Notez le mois de marketing avec la grille et donnez votre retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
