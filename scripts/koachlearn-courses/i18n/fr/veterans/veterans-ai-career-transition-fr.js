"use strict";

// Koach Learn course (French translation of veterans/veterans-ai-career-transition.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "veterans-ai-career-transition-fr",
  lang: "fr",
  translationOf: "veterans-ai-career-transition",
  category: "Veterans (military)",
  name: "L'IA pour la reconversion et l'emploi",
  skills: "Trouver une aide officielle à la transition, Lire une offre d'emploi pour en tirer les mots-clés, Écrire un CV civil adapté à un poste, Écrire une courte lettre de motivation et un profil, S'entraîner aux entretiens avec l'IA, Repérer les arnaques à l'emploi",
  outcome: "utiliser un assistant d'IA pour écrire un CV civil d'une page adapté à une vraie offre d'emploi et une réponse de 60 secondes à \"parlez-moi de vous\", vérifier les deux pour l'exactitude et les détails privés, et savoir où trouver une aide officielle gratuite.",
  about: [
    "Ce cours s'adresse aux anciens militaires (vétérans) et aux militaires en transition qui postulent à des emplois civils. Vous avez l'expérience ; le travail maintenant est de la montrer avec des mots qu'un recruteur civil comprend, et d'être prêt pour l'entretien.",
    "Vous trouverez une aide officielle gratuite, vous lirez une offre d'emploi comme un recruteur, vous utiliserez un assistant d'IA gratuit pour construire un CV adapté, une courte lettre de motivation et un résumé de profil en ligne, et vous vous entraînerez à répondre aux questions d'entretien. Vous apprendrez aussi à repérer les arnaques à l'emploi.",
    "Chaque leçon dure environ cinq minutes : lisez, regardez les diapositives, puis faites l'activité \"Essayez maintenant\". Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours.",
    "Les programmes et sites officiels cités sont ceux des États-Unis. Si vous avez servi dans un autre pays, cherchez les services officiels de reconversion des militaires de votre pays."
  ],
  finalTask: "Choisissez une vraie offre d'emploi civile. Utilisez un assistant d'IA pour écrire un CV d'une page adapté à cette offre (au moins cinq lignes avec des mots civils et des chiffres) et une réponse de 60 secondes à \"parlez-moi de vous\". Vérifiez que chaque affirmation est vraie, qu'il n'y a aucun numéro de sécurité sociale, de DD-214 ou autre numéro privé, et entraînez-vous à dire la réponse à voix haute deux fois.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des vétérans et des militaires en transition qui postulent à des emplois civils, des engagés en fin de premier contrat jusqu'aux retraités.",
    startingPoint: "Ils ont une vraie expérience, de la discipline et des qualités de chef, et savent utiliser un ordinateur ou un smartphone. La plupart n'ont pas écrit de CV civil adapté à une offre ni préparé un entretien civil, et peu ont utilisé un assistant d'IA pour les aider.",
    gap: "Les recruteurs civils et les logiciels de tri des CV cherchent les mots de l'offre elle-même et des résultats clairs, et les arnaques à l'emploi visent les personnes en transition. Les apprenants doivent utiliser l'IA pour adapter à une vraie offre un CV et une réponse d'entretien vrais et sans données privées, et savoir où trouver une aide officielle et gratuite.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes",
      "Appareils : un ordinateur est plus pratique pour le CV ; un smartphone suffit pour s'entraîner",
      "Vie privée : aucun numéro de sécurité sociale, de DD-214 ou autre numéro privé dans une demande à l'IA ou dans le CV",
      "Honnêteté : chaque affirmation et chaque chiffre du CV doivent être vrais",
      "Temps : des leçons d'environ 5 minutes qui s'intègrent entre les rendez-vous de transition et le travail"
    ],
    prerequisites: "Aucun. « Introduction à l'IA et au monde du travail de demain » aide d'abord les apprenants à transformer leurs missions en lignes de CV civiles."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Selon votre étape de transition", action: "repérer des sources officielles et gratuites d'aide à l'emploi et en choisir une à contacter", standard: "avec un moyen de contact ou un rendez-vous noté" },
    { id: "O2", condition: "À partir d'une vraie offre d'emploi", action: "lister avec l'aide de l'IA ses exigences indispensables, ses compétences appréciées et ses mots-clés, et les relier à vos compétences", standard: "avec au moins 10 mots-clés tirés de l'offre" },
    { id: "O3", condition: "À partir de votre liste de mots-clés", action: "écrire avec l'aide de l'IA un CV civil d'une page adapté à l'offre", standard: "avec au moins cinq lignes en mots civils et avec des chiffres, chaque affirmation vraie et aucun numéro privé" },
    { id: "O4", condition: "Pour le même emploi", action: "écrire avec l'aide de l'IA une courte lettre de motivation et un résumé de profil en ligne", standard: "retravaillés pour qu'ils vous ressemblent" },
    { id: "O5", condition: "Avec une IA qui joue le recruteur", action: "vous entraîner à voix haute à une réponse de 60 secondes à « Parlez-moi de vous » et à des réponses STAR", standard: "au moins deux fois, en notant un point fort et un point à corriger" },
    { id: "O6", condition: "Quand vous cherchez un emploi", action: "chercher dans des sources officielles d'offres d'emploi et repérer les signes d'une arnaque à l'emploi", standard: "sans rien payer et sans partager de numéro privé avant une vraie offre" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Construire votre CV civil",
      lessons: [
        {
          objectives: ["O1"],
          title: "L'aide officielle et gratuite à la transition et à l'emploi",
          minutes: 5,
          goal: "Citer trois sources officielles et gratuites d'aide à l'emploi et en choisir une à contacter.",
          text: [
            "Vous n'avez pas à faire ça seul. Le Transition Assistance Program (TAP, programme d'aide à la transition) est géré par plusieurs agences, dont le ministère du Travail, le ministère de la Défense et la VA (l'administration américaine des anciens combattants). La partie du ministère du Travail comprend des ateliers sur l'emploi et une aide individuelle grâce à son Employment Navigator and Partnership Program dans certaines bases. Trouvez les horaires des cours auprès du bureau de transition de votre base.",
            "Après votre départ, les American Job Centers (près de 2 400 dans le pays, à trouver sur CareerOneStop) aident à chercher un emploi et une formation, et les vétérans y sont prioritaires. Le programme Personalized Career Planning and Guidance de la VA offre un conseil gratuit en carrière et en formation, y compris de l'aide pour le CV, aux vétérans et militaires éligibles.",
            "L'IA est une excellente partenaire d'écriture, mais un conseiller formé connaît le marché de l'emploi local et vos droits. Utilisez les deux."
          ],
          steps: ["Encore en service : contactez le bureau de transition de votre base pour le TAP.", "Sorti du service : trouvez l'American Job Center le plus proche sur CareerOneStop.", "Lisez la page Personalized Career Planning and Guidance de la VA et vérifiez l'éligibilité.", "Prenez un rendez-vous cette semaine."],
          words: [["TAP", "Transition Assistance Program : formation et aide pour les militaires qui passent à la vie civile."], ["American Job Center", "un centre gratuit financé par le ministère du Travail pour aider à chercher un emploi et une formation."], ["Priorité de service", "les vétérans passent en premier dans beaucoup de programmes d'emploi et de formation du ministère du Travail."]],
          slides: [
            { title: "Encore en service", bullets: ["Transition Assistance Program (TAP)", "Ateliers emploi du ministère du Travail", "Aide individuelle dans certaines bases"] },
            { title: "Après votre départ", bullets: ["American Job Centers, sur CareerOneStop", "Les vétérans sont prioritaires", "Conseil carrière gratuit de la VA"] },
            { title: "Utilisez les deux", bullets: ["L'IA pour l'aide à l'écriture", "Un conseiller pour l'emploi local et vos droits"] }
          ],
          sources: [
            { name: "Ministère du Travail des États-Unis : Transition Assistance Program", url: "https://www.dol.gov/agencies/vets/programs/tap" },
            { name: "Ministère du Travail des États-Unis (VETS) : trouver un emploi", url: "https://www.dol.gov/agencies/vets/veterans/findajob" },
            { name: "VA : Personalized Career Planning and Guidance", url: "https://www.va.gov/careers-employment/education-and-career-counseling/" }
          ],
          tryIt: "Choisissez la source officielle de cette leçon qui vous correspond maintenant. Trouvez sa page ou le bureau le plus proche et notez comment la contacter. Prenez ou prévoyez un rendez-vous.",
          youCanNow: "citer des sources officielles et gratuites d'aide à l'emploi et choisir la bonne à contacter.",
          quickCheck: [
            { objective: "O1", q: "Laquelle de ces sources d'aide à l'emploi est officielle et gratuite pour les militaires en transition ?", options: ["Un site de CV payant vu dans une publicité", "Un inconnu sur les réseaux sociaux", "Le TAP, au bureau de transition de votre base", "Un SMS qui promet un emploi garanti"], answer: 2, why: "Le TAP est le programme de transition officiel et gratuit pour les militaires." },
            { objective: "O1", q: "Vous avez rédigé votre CV avec l'IA. Que faites-vous d'autre ?", options: ["Demander à un conseiller du TAP, d'un American Job Center ou de la VA de le relire", "L'envoyer à toutes les offres sans le relire", "Vous passer des conseillers, car l'IA suffit", "Le publier en ligne avec votre numéro de téléphone"], answer: 0, why: "L'IA vous aide à écrire, mais un conseiller connaît les emplois et les droits locaux et peut repérer les erreurs." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Lire une offre d'emploi comme un recruteur",
          minutes: 5,
          goal: "Tirer d'une offre d'emploi les exigences clés et les mots-clés avec l'aide de l'IA.",
          text: [
            "Chaque offre d'emploi vous dit ce que l'employeur veut entendre. Beaucoup d'entreprises utilisent un logiciel de suivi des candidatures (ATS) qui analyse les CV pour trouver les mots qui correspondent à l'offre : il est donc important d'utiliser les mots de l'offre elle-même.",
            "Copiez une vraie offre dans un assistant d'IA et demandez : \"Liste les exigences indispensables, les compétences appréciées et les 10 mots-clés les plus importants de cette offre. Puis dis-moi lesquelles de mes compétences correspondent : j'ai été chef de l'approvisionnement dans le Marine Corps pendant 7 ans, j'ai encadré 10 Marines et géré 2 millions de dollars d'équipement.\"",
            "Vérifiez vous-même la liste de l'IA avec l'offre. Si vous remplissez la plupart des exigences indispensables, postulez. Beaucoup de gens postulent sans avoir toutes les compétences appréciées."
          ],
          steps: ["Choisissez une vraie offre d'emploi.", "Collez l'offre (pas vos détails privés) dans un assistant d'IA.", "Demandez les exigences indispensables, les compétences appréciées et les principaux mots-clés.", "Demandez lesquelles de vos compétences correspondent.", "Vérifiez vous-même la liste avec l'offre."],
          words: [["Logiciel de suivi des candidatures (ATS)", "un logiciel que les employeurs utilisent pour recevoir les CV et y chercher les mots qui correspondent."], ["Mot-clé", "un mot ou une expression importante de l'offre, comme \"gestion des stocks\"."], ["Exigence indispensable", "une condition qu'il faut remplir pour être pris en compte."]],
          slides: [
            { title: "L'offre vous dit quoi dire", bullets: ["Les employeurs cherchent les mots qui correspondent", "Utilisez les mots de l'offre"] },
            { title: "Demandez à l'IA d'extraire", bullets: ["Les exigences indispensables", "Les compétences appréciées", "Les 10 principaux mots-clés", "Vos compétences qui correspondent"] },
            { title: "Puis décidez", bullets: ["Vérifiez la liste vous-même", "La plupart des indispensables ? Postulez"] }
          ],
          tryIt: "Trouvez une vraie offre d'emploi qui vous plaît. Demandez à un assistant d'IA de lister ses exigences indispensables, ses compétences appréciées et ses 10 principaux mots-clés, et lesquelles de vos compétences correspondent.",
          youCanNow: "tirer d'une offre d'emploi les exigences et les mots-clés et les relier à votre expérience.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qu'une compétence appréciée dans une offre d'emploi ?", options: ["Une exigence à remplir pour postuler", "Le salaire", "L'adresse de l'entreprise", "Une compétence qui aide mais qui n'est pas obligatoire"], answer: 3, why: "Les compétences appréciées sont un plus ; vous pouvez postuler si vous remplissez la plupart des exigences indispensables." },
            { objective: "O2", q: "Vous collez une offre d'emploi dans une IA. Que demandez-vous ?", options: ["« Est-ce que ce poste est bien ? »", "« Liste les exigences indispensables, les compétences appréciées et les 10 principaux mots-clés, et dis lesquels correspondent à mes compétences. »", "« Postule pour moi. »", "« Écris mon numéro de sécurité sociale dessus. »"], answer: 1, why: "Une demande claire fait ressortir les exigences et les mots-clés qu'il vous faut pour adapter votre CV." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Écrire un CV civil adapté",
          minutes: 6,
          goal: "Utiliser l'IA pour écrire un CV d'une page adapté à une offre, avec des mots civils et des chiffres.",
          text: [
            "Un CV civil fait en général une ou deux pages, pas un état de service complet. Il a un court résumé en haut, votre expérience en points, vos compétences, vos études et vos certifications. Utilisez des intitulés civils quand ils conviennent (\"responsable de la chaîne d'approvisionnement\" plutôt que \"supply chief\") et expliquez ce que vous avez fait, à quelle échelle, et le résultat.",
            "Donnez à l'IA votre expérience en mots simples et les mots-clés de la leçon 2 : \"Écris un CV d'une page pour cette offre de coordinateur logistique. Utilise ces mots-clés. Mon expérience : [description simple]. Utilise des verbes forts et des chiffres, sans sigles militaires.\"",
            "N'y mettez pas votre numéro de sécurité sociale, les détails de votre DD-214, votre date de naissance complète ni les détails de votre habilitation de sécurité au-delà de ce que demande l'offre. Ne laissez jamais l'IA ajouter ce que vous n'avez pas fait. Puis demandez à un conseiller du TAP, d'un American Job Center ou de la VA de le relire."
          ],
          steps: ["Écrivez votre expérience en mots simples : quoi, quelle échelle, quel résultat.", "Donnez à l'IA les mots-clés de l'offre.", "Demandez un CV d'une page avec un résumé, des points d'expérience et des compétences.", "Remplacez les termes militaires et vérifiez que chaque affirmation est vraie.", "Enlevez les détails privés et demandez à un conseiller de le relire."],
          words: [["Résumé (accroche)", "deux ou trois lignes en haut d'un CV qui disent qui vous êtes et ce que vous apportez."], ["Adapter", "modifier votre CV pour qu'il corresponde à un poste précis."]],
          slides: [
            { title: "La forme d'un CV civil", bullets: ["Un court résumé", "Des points d'expérience avec résultats", "Compétences, études, certifications"] },
            { title: "Dites-le à leur façon", bullets: ["Intitulés civils quand ils conviennent", "Quoi, quelle échelle, quel résultat", "Les mots-clés de l'offre"] },
            { title: "Vrai et sûr", bullets: ["Pas de numéro de sécurité sociale, DD-214 ni date complète", "Jamais d'ajout de ce que vous n'avez pas fait", "Faites-le relire par un conseiller"] }
          ],
          tryIt: "Reprenez votre liste de mots-clés de la leçon 2. Demandez à un assistant d'IA d'écrire un CV d'une page pour cette offre. Changez toute ligne qui n'est pas exactement vraie.",
          youCanNow: "écrire avec l'aide de l'IA un CV civil d'une page adapté à une offre d'emploi précise.",
          quickCheck: [
            { objective: "O3", q: "Pourquoi un CV adapté reprend-il les mots de l'offre ?", options: ["Pour que le logiciel de tri et le recruteur voient la correspondance", "Pour qu'il soit plus long", "Pour qu'il utilise des termes militaires", "Pour pouvoir sauter la lettre de motivation"], answer: 0, why: "Les logiciels de suivi des candidatures (ATS) et les recruteurs cherchent les mots-clés de l'offre." },
            { objective: "O3", q: "Le brouillon de l'IA dit que vous avez une certification que vous n'avez pas. Que faites-vous ?", options: ["La laisser ; personne ne vérifie", "Dire que vous allez bientôt l'obtenir", "L'enlever pour que chaque affirmation soit vraie", "Ajouter deux autres certifications"], answer: 2, why: "Chaque affirmation de votre CV doit être vraie." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Construire votre CV civil",
        questions: [
          { objective: "O1", q: "Vous quittez le service le mois prochain et voulez une aide individuelle pour l'emploi. Un bon premier arrêt est :", options: ["Le bureau de transition de votre base et le TAP", "Un site d'emploi au hasard", "Un influenceur sur les réseaux sociaux", "Un service payant pour postuler"], answer: 0, why: "Le TAP et le ministère du Travail offrent des ateliers et une aide individuelle." },
          { objective: "O2", q: "Qu'est-ce qu'un logiciel de suivi des candidatures ?", options: ["Un GPS pour les entretiens", "Un logiciel qui analyse les CV pour trouver les mots qui correspondent", "Une prestation de la VA", "Une base de données militaire"], answer: 1, why: "Beaucoup d'employeurs l'utilisent pour trier les CV." },
          { objective: "O2", q: "Pourquoi utiliser les mots de l'offre dans votre CV ?", options: ["Pour copier l'employeur", "Pour le rallonger", "Pour que le logiciel et les recruteurs voient la correspondance", "La loi l'exige"], answer: 2, why: "Des mots-clés qui correspondent montrent que vous convenez au poste." },
          { objective: "O3", q: "Quelle ligne de CV marche le mieux pour un emploi civil en logistique ?", options: ["\"NCOIC du S4\"", "\"Je faisais des trucs d'approvisionnement\"", "\"Hooah\"", "\"Gestion de 2 millions de dollars d'équipement sans aucune perte sur 3 inventaires\""], answer: 3, why: "Des mots civils, des chiffres et un résultat." },
          { objective: "O3", q: "Qu'est-ce qu'il ne faut PAS mettre sur un CV civil ?", options: ["Votre numéro de sécurité sociale", "Vos compétences", "Un court résumé", "Vos certifications"], answer: 0, why: "Les numéros privés n'ont pas leur place sur un CV." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Postuler et passer des entretiens",
      lessons: [
        {
          objectives: ["O4"],
          title: "Écrire une courte lettre de motivation et un résumé de profil",
          minutes: 5,
          goal: "Utiliser l'IA pour écrire une courte lettre de motivation et un résumé de profil en ligne qui vous ressemblent.",
          text: [
            "Une lettre de motivation est une courte lettre qui dit pourquoi vous voulez ce poste et pourquoi vous convenez. Faites trois courts paragraphes : pourquoi ce poste, vos deux ou trois meilleurs points communs avec des preuves, et une conclusion polie.",
            "Demandez à l'IA : \"Écris une lettre de motivation de 3 paragraphes pour cette offre, à partir de mon CV. Ton assuré mais pas raide, sans jargon militaire.\" Puis faites qu'elle vous ressemble : changez les mots que vous ne diriez jamais.",
            "Un résumé de profil en ligne, par exemple sur LinkedIn, fait deux à quatre phrases sur qui vous êtes et quel travail vous cherchez. Demandez trois versions à l'IA, choisissez-en une et corrigez-la."
          ],
          steps: ["Donnez à l'IA l'offre et votre CV.", "Demandez une lettre de motivation en trois paragraphes.", "Corrigez-la pour qu'elle vous ressemble.", "Demandez trois versions d'un résumé de profil de deux à quatre phrases.", "Choisissez-en une, corrigez-la et utilisez-la."],
          words: [["Lettre de motivation", "une courte lettre envoyée avec un CV qui dit pourquoi vous voulez le poste et pourquoi vous convenez."], ["Résumé de profil", "quelques phrases sur vous en haut d'un profil professionnel en ligne."]],
          slides: [
            { title: "Lettre de motivation : trois paragraphes", bullets: ["Pourquoi ce poste", "Vos meilleurs atouts, avec preuves", "Une conclusion polie"] },
            { title: "Rendez-la personnelle", bullets: ["Assurée, pas raide", "Sans jargon militaire", "Changez les mots que vous ne diriez jamais"] },
            { title: "Résumé de profil", bullets: ["Deux à quatre phrases", "Qui vous êtes et quel travail vous cherchez", "Demandez trois versions à l'IA"] }
          ],
          tryIt: "Demandez à un assistant d'IA une lettre de motivation en trois paragraphes pour le poste de la leçon 2. Changez au moins trois expressions pour qu'elle vous ressemble.",
          youCanNow: "écrire avec l'aide de l'IA une courte lettre de motivation et un résumé de profil qui vous ressemblent.",
          quickCheck: [
            { objective: "O4", q: "Quelle longueur fait une bonne lettre de motivation ?", options: ["Une phrase", "Trois courts paragraphes", "Trois pages entières", "La même longueur que votre CV"], answer: 1, why: "Trois courts paragraphes suffisent : pourquoi ce poste, vos meilleurs points communs et une formule de politesse." },
            { objective: "O4", q: "La lettre de motivation de l'IA utilise des mots que vous ne diriez jamais. Que faites-vous ?", options: ["L'envoyer telle quelle", "Demander une version plus longue", "Copier plutôt la lettre d'un ami", "Changer au moins trois expressions pour qu'elle vous ressemble"], answer: 3, why: "Votre lettre doit vous ressembler, pour que l'entretien corresponde à la lettre." }
          ]
        },
        {
          objectives: ["O5"],
          title: "S'entraîner aux entretiens avec l'IA",
          minutes: 6,
          goal: "S'entraîner à une présentation de 60 secondes et à deux réponses STAR avec un recruteur IA.",
          text: [
            "La plupart des entretiens commencent par \"Parlez-moi de vous.\" Une bonne réponse dure environ 60 secondes : qui vous êtes aujourd'hui, votre expérience la plus utile pour le poste, et pourquoi vous voulez ce poste. Ne racontez pas tout votre parcours militaire.",
            "Pour les questions \"Racontez-moi une fois où...\", utilisez STAR : situation, tâche, action, résultat. Exemple : \"La disponibilité des véhicules de notre unité était de 70 % (situation). On m'a demandé de l'augmenter avant une inspection (tâche). J'ai mis en place un suivi quotidien des pièces et un planning en deux équipes (action). La disponibilité a atteint 92 % en six semaines (résultat).\"",
            "Demandez à l'IA de jouer le recruteur : \"Joue le rôle d'un recruteur pour ce poste. Pose-moi une question à la fois. Après chaque réponse, donne-moi une chose que j'ai bien faite et une chose à améliorer.\" Entraînez-vous à voix haute. Si vous utilisez le mode vocal, parlez naturellement."
          ],
          steps: ["Écrivez une réponse de 60 secondes à \"parlez-moi de vous\".", "Écrivez deux histoires STAR tirées de votre service.", "Demandez à l'IA de jouer le recruteur, une question à la fois.", "Répondez à voix haute et demandez un point fort et une correction à chaque fois.", "Entraînez-vous jusqu'à ce que ce soit naturel."],
          words: [["STAR", "situation, tâche, action, résultat : une façon de raconter une courte histoire sur votre travail."], ["Question comportementale", "une question d'entretien qui demande de raconter une fois où vous avez fait quelque chose."]],
          slides: [
            { title: "\"Parlez-moi de vous\"", bullets: ["Environ 60 secondes", "Qui vous êtes aujourd'hui", "L'expérience la plus utile", "Pourquoi ce poste"] },
            { title: "Réponses STAR", bullets: ["Situation", "Tâche", "Action", "Résultat, avec un chiffre si possible"] },
            { title: "L'IA comme recruteur", bullets: ["Une question à la fois", "Un point fort, une correction à chaque fois", "Entraînez-vous à voix haute"] }
          ],
          tryIt: "Demandez à un assistant d'IA de jouer un recruteur pour le poste choisi. Répondez à voix haute à trois questions, dont \"Parlez-moi de vous\", et notez les retours.",
          youCanNow: "faire une présentation de 60 secondes et répondre aux questions comportementales avec STAR.",
          quickCheck: [
            { objective: "O5", q: "Que veut dire le A dans une réponse STAR ?", options: ["Accomplissement", "Attitude", "Action", "Avis"], answer: 2, why: "STAR, c'est situation, tâche, action, résultat ; l'action, c'est ce que vous avez fait." },
            { objective: "O5", q: "Vous voulez vous entraîner avec une IA qui joue le recruteur. Quelle demande utilisez-vous ?", options: ["« Pose une question à la fois et donne-moi un point fort et un point à corriger. »", "« Donne-moi toutes les réponses à apprendre par cœur. »", "« Pose-moi 30 questions d'un coup. »", "« Dis-moi que je suis parfait. »"], answer: 0, why: "Une question à la fois avec un retour vous permet de vous entraîner et d'améliorer chaque réponse." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Chercher intelligemment et repérer les arnaques à l'emploi",
          minutes: 5,
          goal: "Chercher sur des sources d'emploi officielles et repérer les signes d'une arnaque à l'emploi.",
          text: [
            "Cherchez là où les vrais emplois sont publiés : sites des entreprises, Job Finder de CareerOneStop, American Job Centers, et pour les emplois fédéraux USAJOBS et le site FedsHireVets de l'Office of Personnel Management (l'agence du personnel fédéral), qui explique le recrutement fédéral des vétérans, y compris la préférence accordée aux vétérans.",
            "Les escrocs visent les chercheurs d'emploi. Signes d'alerte : une offre sans entretien, une demande de payer une formation ou du matériel, un chèque à encaisser puis de l'argent à renvoyer, des entretiens uniquement par messagerie écrite, ou une demande de numéro de sécurité sociale ou de coordonnées bancaires avant une vraie offre.",
            "Demandez à une IA de montrer les signes d'alerte d'une offre suspecte, après avoir enlevé vos détails. Puis vérifiez vous-même l'entreprise sur son site officiel. Ne donnez vos détails privés que pour les vrais papiers, après une vraie offre, par la procédure officielle de l'employeur."
          ],
          steps: ["Cherchez sur les sites des entreprises, CareerOneStop, les American Job Centers et USAJOBS.", "Repérez les signes d'alerte : pas d'entretien, paiement à l'avance, chèque à renvoyer, entretiens seulement par écrit.", "Ne donnez pas de numéro de sécurité sociale ni de coordonnées bancaires avant une vraie offre.", "Vérifiez l'entreprise sur son site officiel.", "Demandez à l'IA de lister les signes d'alerte d'une offre suspecte."],
          words: [["Préférence aux vétérans", "des règles qui donnent un avantage aux vétérans éligibles dans le recrutement fédéral."], ["Arnaque à l'emploi", "une fausse offre d'emploi faite pour voler de l'argent ou des informations personnelles."]],
          slides: [
            { title: "Cherchez là où sont les vrais emplois", bullets: ["Sites des entreprises", "CareerOneStop et American Job Centers", "USAJOBS et FedsHireVets pour le fédéral"] },
            { title: "Signes d'une arnaque à l'emploi", bullets: ["Offre sans entretien", "Payer une formation ou du matériel", "Encaisser un chèque et renvoyer de l'argent", "Entretiens seulement par écrit"] },
            { title: "Protégez-vous", bullets: ["Pas de numéro de sécurité sociale ni de banque avant une offre", "Vérifiez l'entreprise vous-même", "Demandez à l'IA les signes d'alerte"] }
          ],
          sources: [
            { name: "Ministère du Travail des États-Unis (VETS) : trouver un emploi", url: "https://www.dol.gov/agencies/vets/veterans/findajob" },
            { name: "Office of Personnel Management : FedsHireVets", url: "https://www.opm.gov/fedshirevets/" }
          ],
          tryIt: "Tâche finale : terminez votre CV d'une page adapté à l'offre choisie et votre réponse de 60 secondes à \"parlez-moi de vous\". Vérifiez que chaque affirmation est vraie et qu'il n'y a aucun numéro privé, puis dites la réponse à voix haute deux fois.",
          youCanNow: "chercher sur des sources d'emploi officielles, éviter les arnaques à l'emploi et postuler avec un CV adapté et une présentation bien préparée.",
          quickCheck: [
            { objective: "O6", q: "Où sont publiés les emplois fédéraux aux États-Unis ?", options: ["Seulement sur les réseaux sociaux", "Dans des SMS d'inconnus", "Sur des sites de CV payants", "Sur USAJOBS"], answer: 3, why: "USAJOBS est le site officiel des offres d'emploi fédérales." },
            { objective: "O6", q: "Un recruteur demande votre numéro de sécurité sociale avant tout entretien. Que faites-vous ?", options: ["L'envoyer pour ne pas perdre le poste", "Ne pas l'envoyer ; le donner seulement pour de vrais papiers après une vraie offre", "En envoyer la moitié", "Envoyer votre DD-214 à la place"], answer: 1, why: "Demander des numéros privés avant tout entretien ou toute offre est un signe d'arnaque." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Postuler et passer des entretiens",
        questions: [
          { objective: "O4", q: "Une bonne lettre de motivation, c'est :", options: ["Cinq pages", "Trois courts paragraphes : pourquoi ce poste, vos meilleurs atouts, une conclusion polie", "Une copie de votre CV", "Plein de sigles militaires"], answer: 1, why: "Courte, ciblée et adaptée au poste." },
          { objective: "O5", q: "Une réponse à \"parlez-moi de vous\" doit durer environ :", options: ["10 minutes", "Tout votre parcours militaire", "60 secondes : qui vous êtes, l'expérience utile, pourquoi ce poste", "Votre histoire familiale"], answer: 2, why: "Courte et centrée sur le poste." },
          { objective: "O5", q: "Que veut dire le R de STAR ?", options: ["Rang", "Raison", "Rapport", "Résultat"], answer: 3, why: "Terminez par le résultat, si possible avec un chiffre." },
          { objective: "O6", q: "Une \"entreprise\" vous offre un emploi sans entretien et vous demande de payer une formation. C'est :", options: ["Un signe d'arnaque à l'emploi", "Une offre d'emploi normale", "Une prestation pour les vétérans", "La préférence aux vétérans"], answer: 0, why: "Pas d'entretien et un paiement à l'avance sont des signes classiques d'arnaque." },
          { objective: "O6", q: "Quel site explique le recrutement fédéral des vétérans, y compris la préférence aux vétérans ?", options: ["Une publicité", "FedsHireVets de l'OPM", "Un lien dans un SMS", "N'importe quel chatbot d'IA"], answer: 1, why: "FedsHireVets est la ressource de l'OPM pour les vétérans qui visent une carrière fédérale." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour la reconversion et l'emploi",
    questions: [
      { objective: "O1", q: "TAP veut dire :", options: ["Transition Assistance Program", "Training and Pay", "Total Army Program", "Tech Apprentice Plan"], answer: 0, why: "Le TAP aide les militaires à passer à la vie civile." },
      { objective: "O1", q: "Quelles agences font partie du TAP ?", options: ["Seulement des entreprises privées", "Plusieurs, dont le ministère du Travail, le ministère de la Défense et la VA", "Seulement l'Army", "Seulement la VA"], answer: 1, why: "Le TAP est un effort commun à plusieurs agences." },
      { objective: "O1", q: "Où les vétérans sont-ils prioritaires pour l'aide à la recherche d'emploi et à la formation ?", options: ["Chez un concessionnaire auto", "Dans un groupe sur un réseau social", "Dans les American Job Centers", "Sur un site payant pour postuler"], answer: 2, why: "Le ministère du Travail y donne la priorité aux vétérans." },
      { objective: "O1", q: "Quel programme de la VA offre un conseil carrière gratuit, y compris pour le CV, aux vétérans éligibles ?", options: ["Les prêts immobiliers de la VA", "TRICARE", "Le GI Bill Comparison Tool", "Personalized Career Planning and Guidance"], answer: 3, why: "La VA le présente comme un conseil gratuit en carrière et en formation." },
      { objective: "O1", q: "Pourquoi utiliser à la fois l'IA et un conseiller ?", options: ["L'IA aide à écrire ; le conseiller connaît l'emploi local et vos droits", "L'IA se trompe toujours", "Les conseillers écrivent tout pour vous", "Un seul suffit"], answer: 0, why: "Chacun fait quelque chose que l'autre ne peut pas faire." },
      { objective: "O2", q: "Une \"exigence indispensable\" dans une offre d'emploi, c'est :", options: ["Un petit plus", "Une condition qu'il faut remplir pour être pris en compte", "Le salaire", "L'adresse du bureau"], answer: 1, why: "Les exigences indispensables sont les conditions de base." },
      { objective: "O3", q: "Quand vous collez une offre d'emploi dans l'IA, il ne faut PAS coller aussi :", options: ["L'intitulé du poste", "Les exigences", "Votre numéro de sécurité sociale", "Les mots-clés"], answer: 2, why: "Les numéros privés ne vont jamais dans l'IA." },
      { objective: "O2", q: "Vous remplissez la plupart des exigences indispensables mais pas toutes les compétences appréciées. Vous devez :", options: ["Ne jamais postuler", "Mentir pour le reste", "Attendre cinq ans", "Postuler"], answer: 3, why: "Beaucoup de gens postulent sans avoir toutes les compétences appréciées." },
      { objective: "O3", q: "Adapter un CV, c'est :", options: ["Le modifier pour qu'il corresponde à un poste précis", "Le rallonger", "Y ajouter tous les emplois que vous avez eus", "L'imprimer en couleur"], answer: 0, why: "Adapter, c'est faire correspondre votre CV à l'offre." },
      { objective: "O3", q: "Quel est un meilleur intitulé civil pour un supply chief ?", options: ["NCOIC du S4", "Responsable de la chaîne d'approvisionnement", "Gunny", "Chef des trucs"], answer: 1, why: "Les intitulés civils aident les recruteurs à comprendre votre rôle." },
      { objective: "O3", q: "Le brouillon de CV de l'IA dit que vous avez encadré 50 personnes ; c'était 10. Vous :", options: ["Gardez 50, ça fait mieux", "Mettez 100", "Mettez le vrai chiffre, 10", "Enlevez tous les chiffres"], answer: 2, why: "Chaque affirmation doit être vraie." },
      { objective: "O3", q: "Qui doit relire votre CV avant l'envoi ?", options: ["Un inconnu en ligne", "Personne", "Seulement l'IA", "Un conseiller du TAP, d'un American Job Center ou de la VA"], answer: 3, why: "Un conseiller formé repère des problèmes que l'IA ne voit pas." },
      { objective: "O4", q: "Un résumé de profil, c'est :", options: ["Deux à quatre phrases sur qui vous êtes et le travail que vous cherchez", "Votre état de service complet", "Votre adresse", "Une liste de mots de passe"], answer: 0, why: "C'est une courte présentation en haut d'un profil en ligne." },
      { objective: "O4", q: "Après que l'IA a écrit votre lettre de motivation, vous devez :", options: ["L'envoyer sans la lire", "La corriger pour qu'elle vous ressemble", "Ajouter du jargon militaire", "En faire cinq pages"], answer: 1, why: "Votre lettre doit vous ressembler." },
      { objective: "O5", q: "STAR veut dire :", options: ["Savoir, talents, atouts, rang", "Start, try, answer, repeat", "Situation, tâche, action, résultat", "Speak, think, act, rest"], answer: 2, why: "STAR est une façon de raconter une courte histoire de travail." },
      { objective: "O5", q: "Quand l'IA joue votre recruteur, une bonne demande est :", options: ["\"Pose toutes les questions d'un coup\"", "\"Réponds à ma place\"", "\"Dis-moi que je suis parfait\"", "\"Pose une question à la fois et donne un point fort et une correction\""], answer: 3, why: "Une question à la fois avec des retours développe une vraie compétence." },
      { objective: "O5", q: "S'entraîner à voix haute aide parce que :", options: ["Parler n'est pas lire ; cela rend les réponses naturelles", "C'est obligatoire", "L'IA ne sait pas lire", "C'est plus rapide que taper"], answer: 0, why: "Le dire à voix haute vous prépare au vrai entretien." },
      { objective: "O6", q: "Où sont publiés les emplois fédéraux ?", options: ["Seulement sur les réseaux sociaux", "Sur USAJOBS", "Par SMS", "Seulement dans les bases"], answer: 1, why: "USAJOBS est le site d'emploi du gouvernement fédéral." },
      { objective: "O6", q: "Un recruteur vous envoie un chèque à encaisser et vous demande d'en renvoyer une partie. C'est :", options: ["Une prime d'embauche", "Une prestation de la VA", "Un signe d'arnaque à l'emploi", "Une intégration normale"], answer: 2, why: "Le chèque à encaisser puis à renvoyer est une arnaque courante." },
      { objective: "O6", q: "Quand peut-on donner son numéro de sécurité sociale à un employeur ?", options: ["Dans la première discussion par écrit", "Pour obtenir un entretien", "Avant toute offre", "Pour les vrais papiers après une vraie offre, par la procédure officielle"], answer: 3, why: "Les vrais employeurs en ont besoin seulement pour les papiers d'embauche après une offre." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      5,
      7,
      8,
      10,
      12,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Adapté à l'offre",
        objective: "O2",
        notYet: "Le CV pourrait servir pour n'importe quel poste ; peu de mots-clés de l'offre y figurent.",
        meets: "Le CV reprend les mots-clés de l'offre et montre les exigences indispensables que l'apprenant remplit.",
        exceeds: "L'apprenant peut montrer où chaque exigence indispensable apparaît."
      },
      {
        name: "Lignes civiles avec des chiffres",
        objective: "O3",
        notYet: "Moins de cinq lignes, ou des lignes avec du jargon militaire et sans chiffres.",
        meets: "Au moins cinq lignes en mots civils, avec des chiffres ou des résultats, sur une page.",
        exceeds: "Chaque ligne montre ce qui a été fait, l'échelle et le résultat."
      },
      {
        name: "Vrai et privé",
        objective: "O6",
        notYet: "Une affirmation n'est pas vraie, ou un numéro de sécurité sociale, de DD-214 ou autre numéro privé apparaît.",
        meets: "Chaque affirmation est vraie, et aucun numéro privé n'apparaît.",
        exceeds: "Un conseiller ou un lecteur de confiance l'a vérifié."
      },
      {
        name: "Réponse de 60 secondes",
        objective: "O5",
        notYet: "La réponse dure bien plus de 60 secondes ou ne parle pas de ce poste.",
        meets: "Environ 60 secondes : qui vous êtes, l'expérience utile et pourquoi ce poste, dite à voix haute deux fois.",
        exceeds: "L'apprenant a utilisé le retour de l'IA pour améliorer une partie entre les deux essais."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent l'exercice final (grille d'évaluation)",
      "Apprenants qui postulent à au moins un emploi avec leur CV adapté dans les 30 jours (enquête de suivi)",
      "Apprenants qui obtiennent un entretien ou une offre d'emploi dans les 90 jours",
      "Apprenants qui contactent le TAP, un American Job Center ou le conseil d'orientation de la VA dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec internet (un smartphone suffit pour s'entraîner aux entretiens)",
      "Un assistant d'IA gratuit : ChatGPT, Microsoft Copilot ou Google Gemini",
      "Une vraie offre d'emploi civile qui intéresse l'apprenant",
      "Un traitement de texte comme Google Docs ou Microsoft Word pour le CV",
      "Environ 60 minutes au total : leçons, exercices, contrôles et exercice final"
    ],
    facilitatorNotes: [
      "Demandez à chaque apprenant d'apporter une vraie offre d'emploi à la première séance.",
      "Rappelez que les numéros de sécurité sociale, de DD-214 et les autres numéros privés ne vont jamais dans une demande à l'IA ni sur un CV.",
      "Après l'entraînement avec l'IA, faites pratiquer les entretiens par deux : l'un pose les questions, l'autre répond à voix haute, puis on échange.",
      "Notez le CV et la réponse finale avec la grille, et donnez un retour sur une seule ligne « Pas encore » à la fois.",
      "Mettez les apprenants en contact avec le TAP, un American Job Center ou le conseil d'orientation de la VA pour une relecture après le cours."
    ]
  }
};
