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
  chapters: [
    {
      name: "Chapitre 1 : Votre message et vos publications",
      lessons: [
        {
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
          youCanNow: "écrire un message principal clair pour votre entreprise."
        },
        {
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
          youCanNow: "écrire avec l'aide de l'IA des publications qui sonnent vrai et qui ressemblent à votre entreprise."
        },
        {
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
          youCanNow: "concevoir un prospectus ou un visuel promotionnel clair pour votre entreprise."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Votre message et vos publications",
        questions: [
          { q: "À quelle question répond un message principal ?", options: ["Quel est votre mot de passe ?", "Pourquoi devrais-je vous choisir ?", "Où est la banque ?", "Quel âge a le patron ?"], answer: 1, why: "Le message principal dit pourquoi les clients devraient vous choisir." },
          { q: "Lequel est un message principal fort ?", options: ["\"Nous sommes les meilleurs.\"", "\"Entrez.\"", "\"De la nourriture.\"", "\"Nous aidons les familles occupées du sud de Sacramento à avoir des repas philippins faits maison en 10 minutes.\""], answer: 3, why: "Il dit qui, quoi et ce qui est différent." },
          { q: "Avant de publier la photo d'un client, vous devez :", options: ["Obtenir son accord", "Ajouter un filtre", "Demander à l'IA", "La publier la nuit"], answer: 0, why: "L'accord respecte les clients et évite les ennuis." },
          { q: "Qu'est-ce qu'un appel à l'action ?", options: ["Un hashtag", "Une facture de téléphone", "Des mots qui disent aux gens quoi faire ensuite", "Un logo"], answer: 2, why: "Il indique l'étape suivante, comme \"Appelez pour réserver\"." },
          { q: "Une image d'IA montre un plat que vous ne vendez pas. Que faites-vous ?", options: ["L'utiliser quand même", "Ajouter d'autres faux plats", "La remplacer par une vraie photo ou une image de ce que vous vendez", "La publier deux fois"], answer: 2, why: "Les images ne doivent pas tromper les clients." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Planification, honnêteté et résultats",
      lessons: [
        {
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
          youCanNow: "planifier un mois de publications dans un calendrier de contenus."
        },
        {
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
          youCanNow: "vérifier votre marketing pour repérer les affirmations non prouvables, les faux avis et les problèmes avec les règles sur les e-mails."
        },
        {
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
          youCanNow: "planifier, réaliser et mesurer un mois de marketing honnête pour votre entreprise."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Planification, honnêteté et résultats",
        questions: [
          { q: "Qu'est-ce qu'un calendrier de contenus ?", options: ["Un planning de ce que vous publiez et quand", "Un calendrier fiscal", "Un planning du personnel", "Une horloge murale"], answer: 0, why: "Il planifie vos publications." },
          { q: "Le calendrier de l'IA indique un festival local à une date. Que faites-vous ?", options: ["Supprimer le calendrier", "La croire", "Publier dessus sans vérifier", "Vérifier vous-même la date"], answer: 3, why: "L'IA peut se tromper sur les dates et les événements." },
          { q: "Quelle affirmation demande une preuve ?", options: ["\"Passez nous dire bonjour\"", "\"Notre nettoyage élimine 99 % des microbes\"", "\"Nous aimons notre quartier\"", "\"Ouvert samedi\""], answer: 1, why: "Les affirmations factuelles précises demandent une preuve." },
          { q: "Quel est le meilleur signe qu'une publication a marché ?", options: ["De nouvelles réservations de personnes qui en parlent", "Un \"j'aime\" de plus", "Une jolie couleur", "Une longue légende"], answer: 0, why: "Les clients comptent plus que les \"j'aime\"." },
          { q: "Pourquoi ajouter un code spécial comme FLYER10 ?", options: ["La loi l'exige", "Pour embrouiller les clients", "Pour suivre quel marketing a fait venir des clients", "Pour cacher le prix"], answer: 2, why: "Les codes montrent quelle action a marché." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA dans le marketing des petites entreprises",
    questions: [
      { q: "La formule du message principal est : Nous aidons [qui] à obtenir [quoi] avec...", options: ["Notre mot de passe", "Ce qui nous rend différents", "Toujours une réduction", "Le nom de notre concurrent"], answer: 1, why: "Le point de différence la complète." },
      { q: "Votre message principal doit être :", options: ["Secret", "Le plus grand possible", "Copié sur un concurrent", "Vrai et à votre image"], answer: 3, why: "Les clients font confiance aux messages vrais." },
      { q: "Où doit apparaître votre message principal ?", options: ["Nulle part", "Seulement dans votre tête", "Seulement dans vos impôts", "Dans vos publications, prospectus et affiches"], answer: 3, why: "Le répéter vous fait reconnaître." },
      { q: "Laquelle est une bonne publication de petite entreprise ?", options: ["Une photo de banque d'images d'une plage", "Une coupe avant-après, avec accord", "Un faux avis", "La photo d'un concurrent"], answer: 1, why: "Un vrai travail crée la confiance." },
      { q: "Après que l'IA a écrit des légendes, vous devez :", options: ["Ajouter d'autres grandes affirmations", "Les publier sans changement", "Ajouter de vrais détails et retirer ce qui est faux", "Supprimer votre page"], answer: 2, why: "Les corriger les rend réelles et exactes." },
      { q: "Qu'est-ce qu'une légende ?", options: ["Le texte qui accompagne une photo ou vidéo sur les réseaux sociaux", "Un reçu", "Une étiquette de prix", "Un logo"], answer: 0, why: "Les légendes décrivent les publications." },
      { q: "Quels outils gratuits peuvent créer des prospectus ?", options: ["Une caisse enregistreuse", "Une calculatrice", "Canva ou Adobe Express", "Un chargeur de téléphone"], answer: 2, why: "Ce sont des outils de conception avec des modèles." },
      { q: "Le titre d'un prospectus doit être :", options: ["Grand et parler de l'offre", "Minuscule", "Absent", "Votre mot de passe"], answer: 0, why: "Le titre attire l'attention." },
      { q: "À quelle image les clients font-ils le plus confiance ?", options: ["Des images d'IA de choses que vous ne vendez pas", "Vos propres vraies photos", "Des photos prises au hasard sur internet", "Les photos des concurrents"], answer: 1, why: "Les vraies images créent la confiance." },
      { q: "Combien de publications par semaine prévoir ?", options: ["Autant que l'IA en propose", "Cinquante", "Aucune", "Un nombre que vous pouvez vraiment tenir"], answer: 3, why: "La régularité vaut mieux que l'épuisement." },
      { q: "Laquelle est une colonne du calendrier de contenus ?", options: ["Type de publication", "Numéro de carte du client", "Mot de passe", "Code de carte bancaire"], answer: 0, why: "Le type de publication aide à varier vos contenus." },
      { q: "Varier les types de publications veut dire :", options: ["Seulement des republications", "Seulement des réductions", "Seulement des selfies", "Des offres, des conseils, l'équipe et le quartier"], answer: 3, why: "La variété garde l'intérêt des abonnés." },
      { q: "Selon la FTC, les publicités doivent être :", options: ["Longues", "Drôles", "Vraies et non trompeuses", "En couleur"], answer: 2, why: "C'est la règle de base de la FTC." },
      { q: "L'IA a ajouté \"primé\" mais vous n'avez aucun prix. Vous :", options: ["Le gardez", "Le retirez", "Inventez un prix", "Ajoutez \"garanti\""], answer: 1, why: "Les affirmations non prouvables trompent." },
      { q: "Les faux avis écrits par l'IA sont :", options: ["Obligatoires", "Acceptables s'ils sont courts", "Acceptables le week-end", "Interdits par la règle de la FTC sur les avis"], answer: 3, why: "La règle couvre les faux avis faits par l'IA." },
      { q: "Un e-mail marketing conforme à CAN-SPAM doit contenir :", options: ["Un faux expéditeur", "Le numéro de carte du client", "Votre adresse postale et un moyen de se désinscrire", "Aucun objet"], answer: 2, why: "Les deux sont obligatoires." },
      { q: "La portée, c'est :", options: ["Le nombre de personnes qui ont vu une publication", "Le nombre d'acheteurs", "Le nombre d'employés", "La force de votre Wi-Fi"], answer: 0, why: "La portée compte les vues." },
      { q: "Où trouver les chiffres gratuits des publications sur un compte professionnel ?", options: ["Dans votre imprimante de tickets", "Dans la section statistiques ou analyses", "À votre banque", "Nulle part"], answer: 1, why: "Les plateformes affichent des statistiques aux comptes professionnels." },
      { q: "Avant de coller vos chiffres de suivi dans l'IA, retirez :", options: ["Les dates", "Les noms des clients", "Les types de publications", "Les totaux"], answer: 1, why: "Les noms des clients sont privés." },
      { q: "Après que l'IA a dit que les publications de conseils amènent le plus de réservations, vous :", options: ["Le confirmez dans votre tableau, puis en prévoyez plus", "Arrêtez toutes les publications de conseils", "L'ignorez", "Supprimez votre compte"], answer: 0, why: "Confirmez, puis agissez." }
    ]
  }
};
