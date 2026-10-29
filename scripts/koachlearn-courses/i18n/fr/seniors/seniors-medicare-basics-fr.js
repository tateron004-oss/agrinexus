"use strict";

// Koach Learn course (French translation of seniors/seniors-medicare-basics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "seniors-medicare-basics-fr",
  lang: "fr",
  translationOf: "seniors-medicare-basics",
  category: "Seniors and Technology",
  name: "Les bases de Medicare",
  skills: "Connaître les Parties A, B, C et D, Comparer Original Medicare et Medicare Advantage, Protéger votre numéro Medicare, Trouver votre période d'inscription, Revoir votre plan chaque automne, Obtenir l'aide gratuite du SHIP",
  outcome: "expliquer ce que couvrent les Parties A, B, C et D, calculer votre propre période d'inscription, lister ce dont vous avez besoin pour comparer des plans, et obtenir une aide gratuite et impartiale auprès de votre State Health Insurance Assistance Program (SHIP, le programme d'aide de votre État pour l'assurance santé) ou du 1-800-MEDICARE.",
  about: [
    "Ce cours s'adresse aux personnes qui vont avoir 65 ans, aux personnes qui ont déjà Medicare et le trouvent compliqué, et aux membres de la famille qui aident un parent ou un grand-parent avec son assurance santé.",
    "Vous apprendrez ce que couvre chaque partie de Medicare, la différence entre Original Medicare et Medicare Advantage, quand vous pouvez vous inscrire ou faire des changements, comment protéger votre numéro Medicare contre les arnaques, et où obtenir l'aide gratuite d'une vraie personne.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche \"Essayez maintenant\". Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Les règles, les dates et les coûts de Medicare changent. Vérifiez-les toujours sur medicare.gov, en appelant le 1-800-MEDICARE ou avec votre conseiller SHIP local, et demandez à votre médecin ou à votre pharmacien ce qui concerne vos propres soins."
  ],
  finalTask: "Faites un plan Medicare d'une page : votre période d'inscription (les mois de votre Initial Enrollment Period, ou les dates de l'Open Enrollment de cette année si vous avez déjà Medicare), les parties que vous avez ou dont vous avez besoin, la liste de vos médecins, de vos médicaments et de votre pharmacie, trois questions auxquelles vous voulez une réponse, et l'aide gratuite que vous utiliserez (votre SHIP local, medicare.gov et le 1-800-MEDICARE). Ensuite, contactez votre SHIP ou utilisez l'outil de comparaison des plans sur medicare.gov.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des personnes aux États-Unis qui vont avoir 65 ans ou qui ont déjà Medicare, et les membres de la famille qui les aident. Beaucoup se sentent perdues face aux différentes parties, aux dates limites et au flot d'appels commerciaux et de publicités chaque automne.",
    startingPoint: "Elles savent que Medicare existe et ont peut-être déjà une carte. La plupart ne savent pas expliquer les Parties A à D, ne connaissent pas leur propre période d'inscription et n'ont jamais utilisé l'outil de comparaison des plans de medicare.gov ni entendu parler du SHIP.",
    gap: "Manquer une période d'inscription peut entraîner une pénalité de retard à vie, et un mauvais plan peut exclure les médecins ou les médicaments d'une personne. Connaître les parties, ses propres dates, la façon de comparer les plans et où trouver une aide gratuite et neutre protège leur santé et leur argent, et les éloigne des arnaques à Medicare.",
    constraints: [
      "Niveau de lecture : mots simples, phrases courtes et étapes grandes et simples",
      "Appareils : un téléphone pour les appels, et un ordinateur ou une tablette pour medicare.gov si possible",
      "Temps : environ 5 minutes par leçon, à un rythme tranquille",
      "Les coûts et certaines règles changent chaque année ; les apprenants vérifient les montants actuels sur medicare.gov, ssa.gov ou auprès du SHIP",
      "Le cours ne recommande aucun plan ; le numéro Medicare n'est jamais tapé dans une IA ni donné à quelqu'un qui appelle"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir des quatre parties de Medicare", action: "expliquer ce que couvrent les Parties A, B, C et D et les deux grands chemins pour être couvert", standard: "en trouvant au moins 4 bonnes réponses sur 5" },
    { id: "O2", condition: "Quand quelqu'un demande votre numéro Medicare ou qu'un relevé montre des soins que vous n'avez jamais reçus", action: "repérer une arnaque à Medicare et la signaler au 1-800-MEDICARE", standard: "en ne donnant votre numéro qu'à vos médecins, à votre pharmacie et à votre plan" },
    { id: "O3", condition: "À partir du mois de vos 65 ans et de votre couverture liée au travail", action: "trouver votre Initial Enrollment Period et voir si une Special Enrollment Period peut s'appliquer", standard: "avec les bons mois de début et de fin, confirmés sur ssa.gov, medicare.gov ou auprès du SHIP" },
    { id: "O4", condition: "À partir de vos médecins, de vos médicaments et de votre pharmacie", action: "comparer les plans sur medicare.gov ou avec le SHIP pendant l'Open Enrollment", standard: "en regardant le coût total sur l'année et en vérifiant que vos médecins font partie du réseau" },
    { id: "O5", condition: "Quand vous avez des questions sur Medicare", action: "contacter votre SHIP local ou le 1-800-MEDICARE avec vos questions et vos listes prêtes", standard: "en notant la date, le nom de la personne et la réponse" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Les parties de Medicare",
      lessons: [
        {
          objectives: ["O1"],
          title: "À qui s'adresse Medicare, et les Parties A et B",
          minutes: 5,
          goal: "Dire qui peut avoir Medicare et ce que couvrent les Parties A et B.",
          text: [
            "Medicare est l'assurance santé du gouvernement des États-Unis pour les personnes de 65 ans ou plus, les personnes de moins de 65 ans ayant certains handicaps, et les personnes de tout âge atteintes d'End-Stage Renal Disease (maladie rénale au stade terminal, c'est-à-dire une insuffisance rénale permanente). Il est géré par les Centers for Medicare & Medicaid Services (CMS), l'agence fédérale chargée de Medicare et de Medicaid.",
            "Medicare a plusieurs parties, désignées par des lettres. La Partie A est l'assurance hospitalisation. Elle aide à couvrir les soins quand vous êtes hospitalisé, ainsi que les soins palliatifs (hospice) et certains soins à domicile.",
            "La Partie B est l'assurance médicale. Elle aide à couvrir les consultations chez le médecin, les soins ambulatoires (des soins après lesquels vous rentrez chez vous le jour même), beaucoup d'examens et des services de prévention comme certains dépistages et vaccins.",
            "Ensemble, la Partie A et la Partie B s'appellent Original Medicare (le Medicare d'origine). La plupart des gens ne paient pas de prime mensuelle pour la Partie A s'ils ont travaillé, eux ou leur conjoint, et payé les impôts Medicare assez longtemps. La plupart des gens paient une prime mensuelle pour la Partie B. Les primes et les franchises changent chaque année : cherchez les montants de cette année sur medicare.gov ou demandez au SHIP."
          ],
          words: [["Medicare", "le programme d'assurance santé du gouvernement des États-Unis pour les personnes de 65 ans et plus et certaines personnes plus jeunes ayant un handicap."], ["Prime", "le montant que vous payez chaque mois pour être assuré."], ["Franchise", "le montant que vous payez pour vos soins avant que l'assurance commence à payer."], ["Ambulatoire", "des soins après lesquels vous rentrez chez vous le jour même, comme une consultation chez le médecin."]],
          slides: [
            { title: "À qui s'adresse Medicare", bullets: ["Les personnes de 65 ans ou plus", "Certaines personnes de moins de 65 ans ayant un handicap", "Les personnes en insuffisance rénale permanente"] },
            { title: "Partie A : assurance hospitalisation", bullets: ["Séjours à l'hôpital quand vous êtes hospitalisé", "Soins palliatifs et certains soins à domicile"] },
            { title: "Partie B : assurance médicale", bullets: ["Consultations chez le médecin et soins ambulatoires", "Beaucoup d'examens et de services de prévention"] },
            { title: "A + B = Original Medicare", bullets: ["La plupart ne paient pas de prime pour la Partie A", "La plupart paient une prime mensuelle pour la Partie B", "Coûts de cette année : medicare.gov ou SHIP"] }
          ],
          sources: [{ name: "CMS : Medicare (Parties A, B et D, qui y a droit)", url: "https://www.cms.gov/about-cms/what-we-do/medicare" }],
          tryIt: "Notez deux types de soins que vous ou un membre de votre famille avez reçus l'an dernier, comme un séjour à l'hôpital, un bilan de santé ou une prise de sang. À côté de chacun, écrivez s'il relève de la Partie A ou de la Partie B.",
          youCanNow: "dire à qui s'adresse Medicare et classer les soins de tous les jours dans la Partie A ou la Partie B.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'Original Medicare ?", options: ["La Partie A et la Partie B ensemble", "Seulement la Partie D", "Un plan Medicare Advantage", "Une assurance Medigap"], answer: 0, why: "La Partie A (hôpital) et la Partie B (soins médicaux) ensemble s'appellent Original Medicare." },
            { objective: "O1", q: "Votre voisin est hospitalisé pendant trois jours. Quelle partie aide surtout à couvrir le séjour à l'hôpital ?", options: ["La Partie D", "La Partie B", "La Partie A", "Aucune d'elles"], answer: 2, why: "La Partie A est l'assurance hôpital pour les soins quand vous êtes hospitalisé." }
          ]
        },
        {
          objectives: ["O1","O4"],
          title: "Parties C et D : Medicare Advantage et plans médicaments",
          minutes: 5,
          goal: "Expliquer la différence entre Original Medicare et un plan Medicare Advantage, et ce que couvre la Partie D.",
          text: [
            "La Partie C, c'est Medicare Advantage. Ce sont des plans de compagnies d'assurance privées agréées par Medicare. Un plan Medicare Advantage vous donne toutes vos prestations des Parties A et B dans un seul plan, et la plupart incluent aussi une couverture des médicaments. Beaucoup ont des réseaux : des listes de médecins et d'hôpitaux que vous êtes censé utiliser.",
            "La Partie D est la couverture des médicaments sur ordonnance. Elle est ouverte à toutes les personnes qui ont Medicare, par des plans privés agréés par Medicare. Les personnes qui ont Original Medicare ajoutent en général un plan médicaments Partie D séparé.",
            "Il y a donc deux grands chemins. Chemin 1 : Original Medicare (A et B), souvent avec un plan médicaments Partie D séparé ; certaines personnes achètent aussi une police Medicare Supplement Insurance (Medigap, assurance complémentaire) pour aider à payer les frais qu'Original Medicare ne paie pas. Chemin 2 : un plan Medicare Advantage (Partie C) qui regroupe A, B et en général D.",
            "Aucun chemin n'est le meilleur pour tout le monde. Cela dépend de vos médecins, de vos médicaments, de l'endroit où vous vivez et voyagez, et de votre budget. C'est justement ce qu'un conseiller SHIP gratuit vous aide à comparer."
          ],
          words: [["Medicare Advantage (Partie C)", "un plan d'une compagnie privée, agréé par Medicare, qui inclut les Parties A et B et souvent les médicaments."], ["Partie D", "la couverture Medicare des médicaments sur ordonnance, proposée par des plans privés."], ["Réseau", "les médecins, les hôpitaux et les pharmacies avec lesquels un plan travaille."], ["Medigap", "Medicare Supplement Insurance : une police privée qui aide à payer les frais qu'Original Medicare ne paie pas."]],
          slides: [
            { title: "Partie C : Medicare Advantage", bullets: ["Des plans privés agréés par Medicare", "Inclut A et B ; la plupart incluent les médicaments", "Utilise souvent un réseau de médecins"] },
            { title: "Partie D : médicaments sur ordonnance", bullets: ["Ouverte à toutes les personnes qui ont Medicare", "Par des plans privés", "Souvent ajoutée à Original Medicare"] },
            { title: "Deux grands chemins", bullets: ["Original Medicare + Partie D (+ Medigap pour certains)", "Ou un plan Medicare Advantage"] },
            { title: "Lequel est le meilleur pour vous ?", bullets: ["Vos médecins et vos médicaments", "Où vous vivez et voyagez", "Votre budget : demandez au SHIP de comparer"] }
          ],
          sources: [{ name: "CMS : Plans Medicare Advantage et Partie D", url: "https://www.cms.gov/medicare/enrollment-renewal/health-plans" }],
          tryIt: "Faites la liste de tous les médecins que vous voyez et de tous les médicaments que vous prenez, avec la dose, et de la pharmacie que vous utilisez. Demandez de l'aide à un proche si vous le souhaitez. Gardez cette liste : c'est ce qu'il vous faut pour comparer des plans.",
          youCanNow: "expliquer les Parties C et D, décrire les deux grands chemins de Medicare, et faire la liste dont vous avez besoin pour comparer des plans.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'un plan de la Partie D ?", options: ["Une assurance hôpital", "Une couverture des médicaments sur ordonnance par un plan privé approuvé par Medicare", "Un plan dentaire", "Une pension de l'État"], answer: 1, why: "La Partie D est la couverture des médicaments sur ordonnance par des plans privés approuvés par Medicare." },
            { objective: "O1", q: "Un ami dit qu'un des chemins, Original Medicare ou Medicare Advantage, est le meilleur pour tout le monde. Que répondez-vous ?", options: ["Être d'accord et choisir celui-là", "Toujours choisir la prime la moins chère", "Choisir ce que propose un vendeur au téléphone", "Cela dépend de vos médecins, de vos médicaments, de l'endroit où vous vivez et de votre budget"], answer: 3, why: "Aucun chemin n'est le meilleur pour tout le monde ; un conseiller gratuit du SHIP vous aide à comparer." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Protéger votre carte et votre numéro Medicare",
          minutes: 4,
          goal: "Repérer une arnaque Medicare et savoir à qui la signaler.",
          text: [
            "Votre carte Medicare rouge, blanche et bleue porte votre numéro Medicare. Traitez-la comme une carte bancaire. Montrez-la à vos médecins, à votre pharmacie et à votre plan, et rangez-la en lieu sûr.",
            "Des escrocs appellent, envoient des SMS ou frappent à la porte en se faisant passer pour Medicare. Ils peuvent proposer une attelle, un kit de test ou une nouvelle carte \"gratuits\", ou dire que vos prestations vont s'arrêter si vous ne donnez pas votre numéro. Un vrai représentant de Medicare ne vous appellera pas sans prévenir pour vous demander votre numéro Medicare ou vos coordonnées bancaires.",
            "Vérifiez vos relevés. Original Medicare envoie un Medicare Summary Notice (relevé récapitulatif Medicare), et les plans envoient une Explanation of Benefits (relevé des prestations). Cherchez des soins que vous n'avez jamais reçus. Si quelque chose ne va pas, ou si un appelant vous demande votre numéro, signalez-le au 1-800-MEDICARE.",
            "Si un petit-enfant ou un ami vous aide en ligne, asseyez-vous avec lui, utilisez seulement le site officiel medicare.gov, et ne tapez jamais votre numéro Medicare dans un chatbot ou sur un site web ouvert depuis un SMS."
          ],
          steps: ["Rangez votre carte en lieu sûr et ne donnez le numéro qu'à vos médecins, à votre pharmacie et à votre plan.", "Raccrochez quand un appel inattendu vous demande votre numéro.", "Lisez chaque Medicare Summary Notice ou Explanation of Benefits.", "Signalez tout problème au 1-800-MEDICARE."],
          words: [["Medicare Summary Notice", "un relevé d'Original Medicare qui liste les soins facturés sous votre numéro."], ["Explanation of Benefits", "un relevé d'un plan qui montre ce qui a été facturé et ce que le plan a payé."], ["Arnaque", "une ruse pour voler de l'argent ou des informations personnelles."]],
          slides: [
            { title: "Traitez votre carte comme une carte bancaire", bullets: ["Montrez-la à vos médecins, à votre pharmacie et à votre plan", "Rangez-la en lieu sûr"] },
            { title: "Signes d'arnaque", bullets: ["Attelles, kits de test ou nouvelle carte \"gratuits\"", "\"Vos prestations vont s'arrêter\"", "Appels inattendus qui demandent votre numéro"] },
            { title: "Vérifiez vos relevés", bullets: ["Medicare Summary Notice ou Explanation of Benefits", "Cherchez des soins jamais reçus", "Signalez les problèmes au 1-800-MEDICARE"] }
          ],
          sources: [{ name: "Medicare.gov : Signaler une fraude (vérifiez ici les étapes actuelles)", url: "https://www.medicare.gov/fraud" }],
          tryIt: "Trouvez votre dernier Medicare Summary Notice ou Explanation of Benefits (ou demandez à un proche de vous aider à le trouver). Vérifiez trois lignes : chacune correspond-elle à des soins que vous avez vraiment reçus ?",
          youCanNow: "protéger votre numéro Medicare, lire vos relevés pour repérer les problèmes, et savoir où signaler une arnaque.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qu'un Medicare Summary Notice ?", options: ["Une facture à payer tout de suite", "Une publicité pour un nouveau plan", "Un relevé d'Original Medicare qui liste les soins facturés à Medicare", "Une nouvelle carte Medicare"], answer: 2, why: "Vérifiez votre Medicare Summary Notice ou votre Explanation of Benefits pour repérer des soins que vous n'avez jamais reçus." },
            { objective: "O2", q: "Un SMS dit que vos prestations Medicare vont s'arrêter si vous ne répondez pas avec votre numéro Medicare. Que faites-vous ?", options: ["Ne pas répondre, et le signaler au 1-800-MEDICARE", "Répondre vite pour garder vos prestations", "Envoyer la moitié du numéro", "Le transférer à vos amis"], answer: 0, why: "Medicare ne vous contacte pas sans raison pour vous demander votre numéro ; signalez-le." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les parties de Medicare",
        questions: [
          { objective: "O1", q: "Quelle partie de Medicare est l'assurance hospitalisation ?", options: ["Partie D", "Partie A", "Partie B", "Medigap"], answer: 1, why: "La Partie A aide à couvrir les séjours à l'hôpital, les soins palliatifs et certains soins à domicile." },
          { objective: "O1", q: "Votre grand-mère a un bilan de santé chez le médecin. Quelle partie aide en général à le payer ?", options: ["Partie A", "Partie D", "Partie B", "Aucune"], answer: 2, why: "La Partie B couvre les consultations chez le médecin et les soins ambulatoires." },
          { objective: "O1", q: "Qu'est-ce que Medicare Advantage ?", options: ["Un plan privé agréé par Medicare qui inclut les Parties A et B", "Un téléphone gratuit", "Un versement de la Social Security", "Un type d'hôpital"], answer: 0, why: "Les plans de la Partie C sont des plans privés qui regroupent A, B et en général les médicaments." },
          { objective: "O1", q: "Où trouver la prime de la Partie B de cette année ?", options: ["Dans un SMS d'un inconnu", "Dans le journal de l'an dernier", "En demandant à un voisin de deviner", "Sur medicare.gov ou auprès de votre conseiller SHIP"], answer: 3, why: "Les primes changent chaque année ; consultez la source officielle." },
          { objective: "O2", q: "Quelqu'un appelle en disant qu'il vient de Medicare et qu'il a besoin de votre numéro Medicare pour vous envoyer une attelle gratuite. Que faites-vous ?", options: ["Vous donnez le numéro", "Vous raccrochez et le signalez au 1-800-MEDICARE", "Vous donnez plutôt votre numéro de compte bancaire", "Vous rappelez le numéro qu'il vous a donné"], answer: 1, why: "Medicare n'appelle pas sans prévenir pour demander votre numéro ; c'est une arnaque courante." }
        ]
      }
    },
    {
      name: "Chapitre 2 : S'inscrire à temps et obtenir de l'aide",
      lessons: [
        {
          objectives: ["O3"],
          title: "Trouver votre période d'inscription",
          minutes: 6,
          goal: "Calculer votre propre Initial Enrollment Period et savoir ce qui se passe si vous la manquez.",
          text: [
            "Votre première occasion de vous inscrire est votre Initial Enrollment Period (période d'inscription initiale). Elle dure 7 mois : elle commence 3 mois avant le mois de vos 65 ans, inclut le mois de votre anniversaire, et se termine 3 mois après. Exemple donné par les CMS : si vous avez 65 ans en juin, votre période va de mars à septembre.",
            "Si vous recevez déjà des prestations de la Social Security (l'agence fédérale des retraites) quand vous avez 65 ans, vous êtes en général inscrit automatiquement aux Parties A et B. Sinon, vous vous inscrivez par la Social Security. Consultez ssa.gov ou appelez la Social Security pour savoir comment cela fonctionne dans votre cas.",
            "Si vous ou votre conjoint travaillez encore et avez une assurance santé par cet emploi, vous pourrez peut-être attendre. Les CMS disent que vous pouvez vous inscrire pendant que vous avez cette couverture, ou dans les 8 mois après la fin de l'emploi ou de la couverture, selon ce qui arrive en premier. C'est une Special Enrollment Period (période d'inscription spéciale). Demandez au service des avantages sociaux de votre employeur et au SHIP avant de décider d'attendre.",
            "Si vous manquez votre période et n'avez pas droit à une Special Enrollment Period, vous pouvez vous inscrire pendant la General Enrollment Period (période d'inscription générale), du 1er janvier au 31 mars de chaque année ; la couverture commence le mois qui suit votre inscription. Mais vous pourrez payer une pénalité de retard aussi longtemps que vous aurez la Partie B : selon les CMS, la prime peut augmenter de 10% pour chaque période complète de 12 mois pendant laquelle vous auriez pu avoir la Partie B sans l'avoir. Il peut aussi y avoir une pénalité si vous restez sans couverture des médicaments ; demandez au SHIP ou consultez medicare.gov."
          ],
          steps: ["Écrivez le mois de vos 65 ans.", "Comptez 3 mois en arrière et 3 mois en avant : c'est votre période de 7 mois.", "Si vous avez une assurance santé par votre emploi, demandez à votre employeur et au SHIP si vous pouvez attendre.", "Notez le premier mois de votre période dans votre calendrier.", "Vérifiez les détails sur ssa.gov, medicare.gov ou avec le SHIP."],
          words: [["Initial Enrollment Period", "votre première période de 7 mois pour vous inscrire à Medicare, autour de vos 65 ans."], ["Special Enrollment Period", "une possibilité de vous inscrire en dehors des périodes habituelles à cause d'une situation de vie, comme la perte de la couverture liée à l'emploi."], ["General Enrollment Period", "du 1er janvier au 31 mars de chaque année, pour les personnes qui ont manqué leur première période."], ["Pénalité de retard", "une prime plus élevée que vous payez parce que vous vous êtes inscrit en retard."]],
          slides: [
            { title: "Initial Enrollment Period : 7 mois", bullets: ["3 mois avant le mois de vos 65 ans", "Le mois de votre anniversaire", "3 mois après"] },
            { title: "Exemple", bullets: ["65 ans en juin", "Période : de mars à septembre"] },
            { title: "Vous travaillez encore avec une assurance d'entreprise ?", bullets: ["Vous pourrez peut-être attendre", "Inscrivez-vous dans les 8 mois après la fin", "Demandez d'abord à votre employeur et au SHIP"] },
            { title: "Période manquée ?", bullets: ["General Enrollment : du 1er janvier au 31 mars", "Pénalité Partie B : jusqu'à 10% par année complète de retard", "Vérifiez sur medicare.gov ou avec le SHIP"] }
          ],
          sources: [
            { name: "CMS : Original Medicare (Parties A et B), droits et inscription", url: "https://www.cms.gov/medicare/enrollment-renewal/original-part-a-b" },
            { name: "Social Security : S'inscrire à Medicare", url: "https://www.ssa.gov/medicare/sign-up" }
          ],
          tryIt: "Calculez l'Initial Enrollment Period pour vous ou pour un membre de votre famille : écrivez le mois d'anniversaire, puis le premier et le dernier mois de la période de 7 mois. Si cette personne a déjà Medicare, écrivez plutôt les dates de la General Enrollment Period.",
          youCanNow: "calculer une Initial Enrollment Period, savoir quand vous pouvez attendre, et connaître le coût d'une inscription en retard.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce que l'Initial Enrollment Period ?", options: ["Votre période de 7 mois : les 3 mois avant le mois de vos 65 ans, ce mois-là, et les 3 mois après", "L'Open Enrollment de l'automne", "Quand vous voulez", "Une semaine après votre anniversaire"], answer: 0, why: "Elle dure 7 mois, autour du mois de vos 65 ans." },
            { objective: "O3", q: "Vous avez 65 ans en octobre et vous n'avez pas d'assurance liée à un emploi. Quels mois correspondent à votre période ?", options: ["Octobre seulement", "De janvier à mars", "Du 15 octobre au 7 décembre", "De juillet à janvier"], answer: 3, why: "Comptez 3 mois en arrière (juillet) et 3 mois en avant (janvier)." }
          ]
        },
        {
          objectives: ["O4"],
          title: "Revoir votre couverture chaque automne",
          minutes: 5,
          goal: "Utiliser la période d'Open Enrollment d'automne pour vérifier si votre plan vous convient toujours.",
          text: [
            "Les plans changent chaque année : les coûts, les médicaments couverts et les médecins du réseau. Chaque automne, Medicare a une période d'Open Enrollment (inscription ouverte) du 15 octobre au 7 décembre. Pendant ce temps, vous pouvez changer de plan Medicare Advantage ou de plan médicaments Partie D, ou passer d'Original Medicare à Medicare Advantage et inversement. Les changements commencent le 1er janvier. Si votre couverture vous convient, vous n'avez rien à faire.",
            "Avant l'Open Enrollment, les plans envoient un Annual Notice of Change (avis annuel de changements). Lisez-le pour voir les changements de votre prime, de vos médicaments et de vos médecins.",
            "Pour comparer des plans, utilisez l'outil de comparaison des plans sur medicare.gov. Saisissez vos médicaments et votre pharmacie à partir de la liste faite à la leçon 2. Regardez le coût total sur l'année, pas seulement la prime mensuelle, et vérifiez que vos médecins font partie du réseau.",
            "Méfiez-vous des appels commerciaux insistants et des publicités à l'automne. Personne ne doit vous forcer à changer. Un conseiller SHIP est gratuit et ne vend pas de plans. Les personnes qui ont Medicare Advantage peuvent avoir une autre possibilité de changer de plan au début de l'année ; vérifiez les dates sur medicare.gov."
          ],
          steps: ["Lisez l'Annual Notice of Change de votre plan dès qu'il arrive.", "Prenez votre liste de médecins, de médicaments et de pharmacie.", "Entre le 15 octobre et le 7 décembre, comparez les plans sur medicare.gov ou avec le SHIP.", "Vérifiez le coût total sur l'année et que vos médecins font partie du réseau.", "Si vous changez, notez le nouveau plan et le numéro de confirmation."],
          words: [["Open Enrollment", "du 15 octobre au 7 décembre de chaque année, quand les personnes qui ont Medicare peuvent changer de plan pour l'année suivante."], ["Annual Notice of Change", "une lettre de votre plan chaque automne qui liste ce qui va changer l'année suivante."], ["Formulaire de médicaments", "la liste des médicaments couverts par un plan."]],
          slides: [
            { title: "Les plans changent chaque année", bullets: ["Coûts, médicaments couverts, réseaux de médecins", "Lisez votre Annual Notice of Change"] },
            { title: "Open Enrollment", bullets: ["Du 15 octobre au 7 décembre", "Changez de plan ; le nouveau plan commence le 1er janvier", "Satisfait ? Vous n'avez rien à faire"] },
            { title: "Bien comparer", bullets: ["Saisissez vos médicaments et votre pharmacie", "Regardez le coût total sur l'année", "Vérifiez que vos médecins sont dans le réseau"] },
            { title: "Pas de pression", bullets: ["Ignorez les appels commerciaux insistants", "Le SHIP est gratuit et ne vend pas de plans"] }
          ],
          sources: [
            { name: "CMS : Documents d'information sur l'Open Enrollment de Medicare", url: "https://www.cms.gov/outreach-and-education/reach-out/find-tools-to-help-you-help-others/open-enrollment-outreach-and-media-materials" },
            { name: "Medicare.gov : Trouver et comparer des plans", url: "https://www.medicare.gov/plan-compare/" }
          ],
          tryIt: "Notez dans votre calendrier les dates de l'Open Enrollment de cette année. Puis trouvez l'Annual Notice of Change de votre plan (ou demandez à un proche de vous aider) et écrivez une chose qui change l'année prochaine. Si vous n'avez pas encore Medicare, écrivez les questions que vous poseriez sur un plan.",
          youCanNow: "utiliser la période d'Open Enrollment d'automne pour revoir votre plan et comparer les options avec vos propres médicaments et médecins.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce que l'Annual Notice of Change ?", options: ["Une lettre de votre plan qui liste les changements de l'année suivante", "Une pénalité Medicare", "Une nouvelle carte", "Un formulaire d'impôts"], answer: 0, why: "Les plans l'envoient avant l'Open Enrollment pour que vous puissiez vérifier les changements de coûts, de médicaments et de médecins." },
            { objective: "O4", q: "Deux plans médicaments ont l'air bien. L'un a une prime mensuelle plus basse. Que comparez-vous ?", options: ["Seulement la prime mensuelle", "Le coût total sur l'année avec vos propres médicaments et votre pharmacie", "Le plan qui vous appelle le plus", "Le logo"], answer: 1, why: "Regardez le coût total sur l'année, pas seulement la prime mensuelle." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Obtenir l'aide gratuite du SHIP et de Medicare",
          minutes: 5,
          goal: "Contacter une aide Medicare gratuite et impartiale, et venir préparé avec vos questions.",
          text: [
            "Vous n'avez pas à comprendre Medicare tout seul. Chaque État a un State Health Insurance Assistance Program, ou SHIP. Le SHIP offre des conseils Medicare locaux et individuels, sans frais pour vous. Les conseillers sont impartiaux : ils ne vendent pas d'assurance. Ils peuvent vous aider à comparer le coût des plans, revoir votre couverture, vérifier les réseaux et vous expliquer vos options. Trouvez le vôtre sur shiphelp.org.",
            "L'aide de Medicare lui-même : le site officiel medicare.gov, et la ligne téléphonique 1-800-MEDICARE (1-800-633-4227), ouverte 24 heures sur 24 et 7 jours sur 7 selon les CMS. Pour les questions d'inscription aux Parties A et B, contactez la Social Security sur ssa.gov.",
            "Préparez-vous avant d'appeler : gardez votre carte Medicare à portée de main (ne lisez pas le numéro à quelqu'un qui vous a appelé), votre liste de médecins et de médicaments, les lettres de votre plan et vos questions écrites. Prenez des notes : la date, le nom de la personne et ce qu'elle a dit.",
            "Un membre de votre famille peut participer à l'appel avec votre accord. Si vous demandez à un assistant d'IA d'expliquer une lettre de Medicare, retirez d'abord votre nom, votre numéro Medicare et vos autres informations privées, et vérifiez quand même la réponse avec le SHIP ou sur medicare.gov."
          ],
          steps: ["Allez sur shiphelp.org et choisissez votre État pour trouver votre SHIP local.", "Écrivez vos questions et rassemblez votre liste de médecins et de médicaments.", "Appelez le SHIP ou le 1-800-MEDICARE, ou utilisez medicare.gov.", "Prenez des notes : date, nom et réponse.", "Notez la prochaine date limite dans votre calendrier."],
          words: [["SHIP", "State Health Insurance Assistance Program : des conseils Medicare locaux, gratuits et impartiaux."], ["Impartial", "qui n'essaie pas de vous vendre quelque chose ni de vous pousser vers un seul choix."]],
          slides: [
            { title: "SHIP : une aide locale gratuite", bullets: ["Des conseils Medicare individuels", "Gratuit, ne vend pas d'assurance", "Trouvez le vôtre sur shiphelp.org"] },
            { title: "L'aide de Medicare", bullets: ["medicare.gov", "1-800-MEDICARE (1-800-633-4227), 24 h/24, 7 j/7", "Questions d'inscription : ssa.gov"] },
            { title: "Avant d'appeler", bullets: ["Votre liste de médecins et de médicaments", "Les lettres de votre plan", "Vos questions écrites"] },
            { title: "Pendant l'appel", bullets: ["Prenez des notes : date, nom, réponse", "Un proche peut participer", "Notez la prochaine date limite dans votre calendrier"] }
          ],
          sources: [
            { name: "SHIP : State Health Insurance Assistance Programs", url: "https://www.shiphelp.org/" },
            { name: "Medicare.gov : Parler à quelqu'un (vérifiez ici les horaires)", url: "https://www.medicare.gov/talk-to-someone" }
          ],
          tryIt: "Tâche finale : faites votre plan Medicare d'une page avec votre période d'inscription, les parties que vous avez ou dont vous avez besoin, vos médecins, vos médicaments et votre pharmacie, trois questions, et le numéro de téléphone de votre SHIP trouvé sur shiphelp.org. Ensuite, appelez votre SHIP pour prendre rendez-vous avec un conseiller, ou utilisez l'outil de comparaison des plans sur medicare.gov avec votre liste de médicaments.",
          youCanNow: "trouver et contacter une aide Medicare gratuite, et venir préparé avec votre propre plan et vos questions.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce que le SHIP ?", options: ["Une compagnie d'assurance", "Un plan Medicare Advantage", "Un programme gratuit et neutre de conseil sur Medicare dans chaque État", "Un centre d'appels commerciaux"], answer: 2, why: "Le SHIP donne des conseils gratuits et individuels sur Medicare et ne vend pas d'assurance." },
            { objective: "O5", q: "Vous allez appeler le SHIP. Que préparez-vous ?", options: ["Rien ; ils savent tout de vous", "Votre carte bancaire", "Vos questions, la liste de vos médecins et de vos médicaments, et les lettres de votre plan", "Votre numéro de Social Security pour le lire en premier"], answer: 2, why: "Préparez vos questions, vos listes et vos lettres, et prenez des notes pendant l'appel." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : S'inscrire à temps et obtenir de l'aide",
        questions: [
          { objective: "O3", q: "Vous avez 65 ans en juin. Quand est votre Initial Enrollment Period ?", options: ["Seulement en juin", "De janvier à mars", "Du 15 octobre au 7 décembre", "De mars à septembre"], answer: 3, why: "Elle commence 3 mois avant le mois de votre anniversaire et se termine 3 mois après." },
          { objective: "O3", q: "Que peut-il se passer si vous vous inscrivez en retard à la Partie B sans Special Enrollment Period ?", options: ["Vous pouvez payer une prime plus élevée aussi longtemps que vous avez la Partie B", "Rien du tout", "Vous êtes remboursé", "Vous ne pourrez jamais avoir Medicare"], answer: 0, why: "Selon les CMS, la prime de la Partie B peut augmenter de 10% pour chaque période complète de 12 mois de retard." },
          { objective: "O4", q: "Quand a lieu l'Open Enrollment d'automne de Medicare ?", options: ["Du 1er janvier au 31 mars", "Le mois de votre anniversaire", "Du 15 octobre au 7 décembre", "N'importe quel jour"], answer: 2, why: "Chaque automne, les personnes qui ont Medicare peuvent changer de plan du 15 octobre au 7 décembre." },
          { objective: "O4", q: "Quelle est la meilleure façon de comparer des plans médicaments ?", options: ["Choisir seulement la prime mensuelle la plus basse", "Saisir vos propres médicaments et votre pharmacie et regarder le coût total sur l'année", "Choisir le plan recommandé par quelqu'un qui vous appelle", "Choisir le plan avec la plus belle publicité"], answer: 1, why: "Le coût total sur l'année avec vos propres médicaments montre le vrai prix." },
          { objective: "O5", q: "Qu'est-ce qui est vrai à propos du SHIP ?", options: ["Il vend des plans d'assurance", "Il fait payer chaque appel", "Il offre des conseils Medicare gratuits et impartiaux", "Il n'aide que les moins de 65 ans"], answer: 2, why: "Les conseils du SHIP sont gratuits, locaux et impartiaux." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases de Medicare",
    questions: [
      { objective: "O1", q: "Qui peut avoir Medicare ?", options: ["Seulement les moins de 30 ans", "Les personnes de 65 ans ou plus, et certaines personnes plus jeunes ayant un handicap ou une insuffisance rénale", "Seulement les anciens combattants", "Seulement les personnes qui vivent à l'étranger"], answer: 1, why: "Medicare couvre les 65 ans et plus, certaines personnes handicapées et les personnes atteintes d'End-Stage Renal Disease." },
      { objective: "O1", q: "La Partie B couvre surtout :", options: ["Les séjours à l'hôpital", "Seulement les médicaments sur ordonnance", "Seulement les détartrages dentaires", "Les consultations chez le médecin et les soins ambulatoires"], answer: 3, why: "La Partie B est l'assurance médicale pour les médecins et les soins ambulatoires." },
      { objective: "O1", q: "Original Medicare, c'est :", options: ["La Partie A et la Partie B", "Seulement la Partie C", "Seulement la Partie D", "Un plan privé"], answer: 0, why: "Original Medicare désigne les Parties A et B ensemble." },
      { objective: "O1", q: "La plupart des gens paient une prime mensuelle pour :", options: ["Rien", "Seulement la Partie A", "La Partie B", "Leur carte Medicare"], answer: 2, why: "La plupart ne paient pas de prime pour la Partie A mais en paient une pour la Partie B." },
      { objective: "O1", q: "La Partie D couvre :", options: ["Les médicaments sur ordonnance", "Les séjours à l'hôpital", "Seulement les lunettes", "Le logement"], answer: 0, why: "La Partie D est la couverture Medicare des médicaments sur ordonnance." },
      { objective: "O1", q: "Un plan Medicare Advantage, en général :", options: ["Ne couvre que les médicaments", "Inclut les Parties A et B et souvent les médicaments", "Est géré par votre banque", "Remplace la Social Security"], answer: 1, why: "Les plans de la Partie C regroupent A, B et en général D." },
      { objective: "O4", q: "Qu'est-ce que le réseau d'un plan ?", options: ["Son site web", "Son numéro de téléphone", "Les médecins, hôpitaux et pharmacies avec lesquels il travaille", "Sa facture mensuelle"], answer: 2, why: "Beaucoup de plans s'attendent à ce que vous utilisiez leur réseau." },
      { objective: "O4", q: "Que devez-vous avoir sous la main pour comparer des plans ?", options: ["Le code de votre carte bancaire", "Une publicité dans le journal", "Rien", "La liste de vos médecins, de vos médicaments et de votre pharmacie"], answer: 3, why: "Vos propres médecins et médicaments décident quel plan vous convient." },
      { objective: "O2", q: "Un appelant vous offre un kit de test gratuit si vous donnez votre numéro Medicare. C'est :", options: ["Un service normal de Medicare", "Probablement une arnaque", "Un renouvellement d'ordonnance", "Un conseiller SHIP"], answer: 1, why: "Medicare n'appelle pas sans prévenir pour demander votre numéro ; les offres gratuites sont une ruse courante." },
      { objective: "O2", q: "Votre Medicare Summary Notice indique un fauteuil roulant que vous n'avez jamais reçu. Vous devez :", options: ["Le signaler au 1-800-MEDICARE", "L'ignorer", "Le payer", "Jeter le relevé"], answer: 0, why: "Des soins jamais reçus peuvent être une fraude ; signalez-les." },
      { objective: "O3", q: "Combien de temps dure l'Initial Enrollment Period ?", options: ["1 semaine", "1 mois", "1 an", "7 mois"], answer: 3, why: "3 mois avant, le mois de l'anniversaire et 3 mois après." },
      { objective: "O3", q: "Vous recevez des prestations de la Social Security avant 65 ans. En général, vous êtes :", options: ["Jamais admissible", "Pénalisé", "Inscrit automatiquement aux Parties A et B", "Placé seulement dans la Partie D"], answer: 2, why: "Les personnes qui touchent déjà la Social Security sont en général inscrites automatiquement ; vérifiez sur ssa.gov." },
      { objective: "O3", q: "Vous avez 66 ans et êtes encore couvert par l'assurance santé de votre emploi actuel. Que devez-vous faire avant de décider d'attendre pour la Partie B ?", options: ["Rien ; attendre est toujours possible", "Résilier l'assurance de votre emploi", "Demander au service des avantages sociaux de votre employeur et au SHIP", "Demander à un démarcheur au téléphone"], answer: 2, why: "Une Special Enrollment Period peut s'appliquer, mais vérifiez d'abord votre situation." },
      { objective: "O3", q: "La General Enrollment Period va :", options: ["Du 1er janvier au 31 mars", "Du 15 octobre au 7 décembre", "Seulement le jour de votre anniversaire", "De juin à août"], answer: 0, why: "Les CMS fixent la General Enrollment Period du 1er janvier au 31 mars de chaque année." },
      { objective: "O3", q: "La pénalité de retard de la Partie B peut augmenter la prime de :", options: ["1% une seule fois", "50% pendant un mois", "Rien", "10% pour chaque période complète de 12 mois où vous auriez pu avoir la Partie B sans l'avoir"], answer: 3, why: "Selon les CMS, la pénalité peut aller jusqu'à 10% par période complète de 12 mois, aussi longtemps que vous avez la Partie B." },
      { objective: "O4", q: "Pendant l'Open Enrollment d'automne, vous pouvez :", options: ["Changer votre numéro de Social Security", "Changer de plan Medicare Advantage ou de plan médicaments pour l'année suivante", "Recevoir de l'argent liquide de Medicare", "Seulement résilier Medicare"], answer: 1, why: "Du 15 octobre au 7 décembre, vous pouvez changer de plan pour le 1er janvier." },
      { objective: "O4", q: "Chaque automne, votre plan envoie une lettre qui liste les changements de l'année suivante. C'est :", options: ["L'Annual Notice of Change", "Une carte d'anniversaire", "Une déclaration d'impôts", "Un rapport de crédit"], answer: 0, why: "Lisez l'Annual Notice of Change avant l'Open Enrollment." },
      { objective: "O5", q: "Où trouvez-vous votre SHIP local ?", options: ["Dans une publicité qui s'ouvre toute seule", "Dans un lien reçu par SMS", "Sur shiphelp.org", "Auprès de n'importe quel agent d'assurance"], answer: 2, why: "shiphelp.org liste le SHIP de chaque État." },
      { objective: "O5", q: "Vous voulez demander à un assistant d'IA d'expliquer une lettre de Medicare. D'abord, vous devez :", options: ["Coller votre numéro Medicare", "Ajouter vos coordonnées bancaires", "Envoyer une photo de votre carte", "Retirer votre nom, votre numéro Medicare et vos autres informations privées"], answer: 3, why: "Ne partagez jamais de numéros privés avec des outils d'IA ; vérifiez ensuite avec le SHIP ou sur medicare.gov." },
      { objective: "O5", q: "Quand vous appelez le SHIP ou le 1-800-MEDICARE, une bonne habitude est de :", options: ["Raccrocher vite", "Prendre des notes : date, nom et réponse", "Lire votre numéro à toute personne qui vous a appelé", "Oublier vos questions"], answer: 1, why: "Les notes vous aident à vous souvenir et à faire le suivi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      4,
      7,
      8,
      10,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est à « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Période d'inscription",
        objective: "O3",
        notYet: "Pas de période, ou des mois ou des dates faux.",
        meets: "Les bons mois de l'Initial Enrollment Period, ou les dates de l'Open Enrollment de cette année si vous avez déjà Medicare.",
        exceeds: "Indique si une Special Enrollment Period peut s'appliquer et où cela a été confirmé."
      },
      {
        name: "Parties que vous avez ou dont vous avez besoin",
        objective: "O1",
        notYet: "Des parties manquent ou sont mélangées.",
        meets: "Liste les parties que vous avez ou dont vous avez besoin et ce que couvre chacune.",
        exceeds: "Nomme le chemin que vous regardez (Original Medicare ou Medicare Advantage), et pourquoi."
      },
      {
        name: "Prêt à comparer",
        objective: "O4",
        notYet: "Pas de liste des médecins, des médicaments ou de la pharmacie.",
        meets: "Une liste des médecins, des médicaments et de la pharmacie, prête pour l'outil de comparaison des plans.",
        exceeds: "Vous avez utilisé l'outil ou le SHIP pour comparer le coût total sur l'année et les réseaux."
      },
      {
        name: "Aide gratuite et questions",
        objective: "O5",
        notYet: "Pas de questions, ou aucune aide gratuite indiquée.",
        meets: "Trois questions claires et l'aide gratuite que vous utiliserez : votre SHIP local, medicare.gov et le 1-800-MEDICARE.",
        exceeds: "Vous avez contacté le SHIP ou utilisé medicare.gov, et noté la date, le nom et la réponse."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui contactent leur SHIP ou utilisent l'outil de comparaison des plans de medicare.gov dans les 30 jours (questionnaire de suivi)",
      "Apprenants qui s'inscrivent pendant leur période et évitent une pénalité de retard",
      "Apprenants qui signalent une arnaque à Medicare soupçonnée ou une facturation erronée au 1-800-MEDICARE"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Du papier et un stylo pour le plan Medicare d'une page",
      "Une liste des médecins, des médicaments et de la pharmacie de l'apprenant",
      "Un téléphone, et un ordinateur ou une tablette avec Internet pour medicare.gov et shiphelp.org si possible",
      "Environ 60 minutes au total, en courtes séances tranquilles : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Ne recommandez aucun plan et ne donnez pas de conseils d'assurance ; orientez les apprenants vers leur SHIP local, qui est gratuit et neutre.",
      "Vérifiez les primes de cette année et les détails de l'Open Enrollment sur medicare.gov avant chaque séance.",
      "Ne demandez jamais aux apprenants leur numéro Medicare ; utilisez une carte d'exemple pour les exercices.",
      "Invitez si possible un conseiller du SHIP local à une séance, surtout avant le 15 octobre.",
      "Notez la tâche finale avec la grille d'évaluation, et faites un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
