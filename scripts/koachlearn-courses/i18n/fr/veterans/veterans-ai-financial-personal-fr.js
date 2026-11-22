"use strict";

// Koach Learn course (French translation of veterans/veterans-ai-financial-personal.js). See scripts/koachlearn-courses/README.md, "Translations". No investment advice.

module.exports = {
  id: "veterans-ai-financial-personal-fr",
  lang: "fr",
  translationOf: "veterans-ai-financial-personal",
  category: "Veterans (military)",
  name: "L'IA pour réussir sa vie financière et personnelle",
  skills: "Utiliser l'IA sans risque pour les questions d'argent, Construire un budget mensuel civil, Prévoir les changements de revenus après le service, Repérer les arnaques visant les vétérans, Fixer des objectifs et une routine hebdomadaire, Trouver une aide officielle et gratuite sur l'argent",
  outcome: "construire un budget mensuel civil simple et une routine hebdomadaire avec l'aide d'un assistant d'IA, en utilisant des chiffres arrondis et aucun détail de compte privé, et vérifier vos questions d'argent auprès d'une source officielle.",
  about: [
    "Ce cours s'adresse aux anciens militaires (vétérans) et aux militaires en transition qui veulent prendre en main leur argent et leur quotidien après le service. La solde, le logement et la routine changent tous quand on quitte l'armée, et un plan rend ce changement plus facile.",
    "Vous utiliserez un assistant d'IA gratuit pour vous aider à planifier : construire un budget, prévoir les revenus que vous perdrez et gagnerez, repérer les arnaques, fixer des objectifs et construire une routine hebdomadaire. Vous apprendrez exactement ce qu'il ne faut jamais taper dans une IA, et où trouver une aide officielle et gratuite sur l'argent.",
    "Ce cours ne donne pas de conseils en investissement. L'IA est une aide, pas un conseiller financier : vérifiez toujours vos décisions d'argent auprès d'une source officielle ou d'un professionnel qualifié. Chaque leçon dure environ cinq minutes, avec un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin.",
    "Les organismes cités sont ceux des États-Unis. Si vous vivez dans un autre pays, cherchez les services officiels d'aide aux anciens militaires et de protection des consommateurs de votre pays."
  ],
  finalTask: "Utilisez un assistant d'IA pour construire un budget mensuel civil d'une page avec des chiffres arrondis (revenus, besoins, envies, épargne et remboursements de dettes), avec une ligne pour un changement de revenus après le service, et une routine hebdomadaire avec trois créneaux pour vos objectifs. Vérifiez qu'il ne contient aucun numéro de compte ni détail privé, et écrivez une question d'argent que vous poserez à une source officielle ou à un conseiller.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des vétérans et des militaires en transition qui prennent en main leur argent et leur vie quotidienne après le service, souvent avec une famille. Beaucoup passent de la solde et des indemnités militaires et d'un rythme fixé à un salaire civil et à leur propre emploi du temps.",
    startingPoint: "Ils savent utiliser un smartphone ou un ordinateur et une calculatrice. La plupart ont déjà géré une paie, mais n'ont pas construit un budget civil à partir de zéro, et peu ont utilisé un assistant d'IA pour planifier.",
    gap: "Le salaire, le coût du logement et l'organisation des journées changent à la fin du service, et les vétérans sont visés par des arnaques financières. Les apprenants ont besoin d'un budget simple, d'une routine hebdomadaire et d'objectifs clairs, construits avec une IA sans partager de détails privés, et ils doivent savoir à qui poser leurs questions d'argent pour obtenir une aide officielle et gratuite.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; aucune connaissance en finance supposée",
      "Appareils : un smartphone ou un ordinateur avec internet, plus une calculatrice",
      "Vie privée : seulement des chiffres arrondis ; aucun numéro de compte, de carte, de sécurité sociale ou de dossier VA dans une demande à l'IA",
      "Aucun conseil en placement : les décisions d'argent sont vérifiées auprès d'une source officielle ou d'un professionnel qualifié",
      "Temps : des leçons d'environ 5 minutes qui s'intègrent entre les rendez-vous de transition, le travail et la famille"
    ],
    prerequisites: "Aucun. Les apprenants qui découvrent les assistants d'IA peuvent d'abord suivre « Introduction à l'IA et au monde du travail de demain »."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Quand vous avez une question d'argent", action: "poser la question à un assistant d'IA avec des chiffres arrondis et sans détails privés", standard: "sans partager aucun numéro de compte, de carte ou d'identité" },
    { id: "O2", condition: "Avec vos propres chiffres arrondis", action: "construire avec un assistant d'IA un tableau de budget civil mensuel, avec une ligne pour une dépense qui change après le service", standard: "avec des totaux que vous avez vérifiés vous-même à la calculatrice" },
    { id: "O3", condition: "Face à un message ou une offre sur l'argent ou les prestations", action: "repérer les signes d'une arnaque et choisir une réponse sûre", standard: "sans rien payer et sans partager de code ni de détail privé" },
    { id: "O4", condition: "Pour l'argent et la vie après le service", action: "écrire trois objectifs avec un chiffre et une date, et en découper un en étapes hebdomadaires avec l'IA", standard: "avec chaque objectif mesurable et daté" },
    { id: "O5", condition: "À partir de vos objectifs", action: "construire une routine hebdomadaire avec trois créneaux d'objectif, dont une revue du budget chaque semaine", standard: "en la revoyant et en l'ajustant chaque semaine" },
    { id: "O6", condition: "Face à une question d'argent", action: "choisir la bonne source officielle ou le bon conseiller et écrire la question", standard: "en vérifiant les réponses de l'IA sur l'argent avant d'agir" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : L'argent après le service",
      lessons: [
        {
          objectives: ["O1"],
          title: "Utiliser l'IA sans risque pour les questions d'argent",
          minutes: 4,
          goal: "Poser une question d'argent à un assistant d'IA sans risque, sans détails privés.",
          text: [
            "Un assistant d'IA peut expliquer les mots de l'argent, construire un tableau de budget, comparer des options que vous lui donnez et transformer une liste de factures en désordre en plan. C'est une aide rapide et patiente.",
            "Ce n'est pas un conseiller financier. Il ne connaît pas toute votre situation, il peut se tromper sur les règles et les chiffres, et il peut ne pas être à jour. Utilisez-le pour comprendre et organiser ; vérifiez vos décisions auprès d'une source officielle ou d'un conseiller qualifié.",
            "Ne tapez jamais votre numéro de sécurité sociale, vos numéros de DD-214 ou de dossier VA (l'administration américaine des anciens combattants), vos numéros de compte ou de carte, vos identifiants ou mots de passe dans une IA. Utilisez plutôt des chiffres arrondis : \"loyer d'environ 1 200 dollars\", c'est tout ce qu'il lui faut."
          ],
          steps: ["Décidez ce que vous voulez : une explication, un tableau ou un plan.", "Utilisez des chiffres arrondis, sans détails de compte.", "Posez la question.", "Marquez chaque règle, taux ou date limite à vérifier auprès d'une source officielle."],
          words: [["Budget", "un plan de l'argent qui entre et qui sort chaque mois."], ["Chiffre arrondi", "un nombre proche et simple comme 1 200 dollars au lieu d'un montant exact lié à un compte."]],
          slides: [
            { title: "L'IA peut vous aider à", bullets: ["Expliquer les mots de l'argent", "Construire un tableau de budget", "Transformer une liste de factures en plan"] },
            { title: "L'IA n'est pas", bullets: ["Un conseiller financier", "Toujours juste ou à jour", "Celle qui décide : c'est vous"] },
            { title: "Ne tapez jamais", bullets: ["Numéro de sécurité sociale, DD-214, dossier VA", "Numéros de compte ou de carte, identifiants", "Utilisez des chiffres arrondis"] }
          ],
          tryIt: "Demandez à un assistant d'IA : \"Explique la différence entre un besoin et une envie dans un budget mensuel, avec trois exemples de chaque.\" Vérifiez que votre demande ne contient aucun détail privé avant de l'envoyer.",
          youCanNow: "poser des questions d'argent à un assistant d'IA sans risque et savoir quoi vérifier ailleurs.",
          quickCheck: [
            { objective: "O1", q: "Quelle est la façon la plus sûre de parler de votre crédit auto à une IA ?", options: ["Taper le numéro de votre compte de prêt", "Envoyer une photo de votre relevé bancaire", "Taper votre numéro de carte pour qu'elle vérifie", "« Mensualité de voiture d'environ 350 $ par mois »"], answer: 3, why: "Un chiffre arrondi donne à l'IA ce dont elle a besoin sans aucun détail privé." },
            { objective: "O1", q: "L'IA explique une règle financière et donne un taux. Que faites-vous ?", options: ["L'utiliser tout de suite", "Vérifier la règle et le taux auprès d'une source officielle", "Demander à un inconnu en ligne", "Ignorer toutes les réponses de l'IA pour toujours"], answer: 1, why: "L'IA peut expliquer, mais les règles et les taux doivent être vérifiés auprès d'une source officielle." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Construire un budget mensuel civil",
          minutes: 6,
          goal: "Construire un tableau de budget mensuel avec un assistant d'IA en utilisant des chiffres arrondis.",
          text: [
            "Sous l'uniforme, certains frais étaient peut-être pris en charge ou payés sous forme d'indemnités, comme les indemnités de logement et de nourriture, et les soins par TRICARE. Quand vous quittez le service, beaucoup changent ou s'arrêtent. Votre budget civil doit les couvrir avec votre salaire ou vos prestations. Vérifiez votre dernière solde et vos droits auprès de votre service financier, de la DFAS ou de la VA au lieu de deviner.",
            "Commencez par quatre groupes : revenus (salaire, prestations), besoins (loyer, énergie, nourriture, transport, assurance, santé), envies (restaurants, abonnements), et épargne et remboursements de dettes. Demandez à l'IA de construire le tableau et d'additionner chaque groupe.",
            "Exemple de demande : \"Fais un tableau de budget mensuel. Revenus environ 3 800 dollars. Loyer 1 200, énergie 200, courses 450, crédit auto 350, essence 160, téléphone 70, assurance 150, restaurants 200, abonnements 40. Montre les totaux et ce qui reste.\""
          ],
          steps: ["Listez vos revenus mensuels avec des chiffres arrondis.", "Listez les besoins, les envies, l'épargne et les remboursements de dettes.", "Demandez à l'IA un tableau avec les totaux et ce qui reste.", "Ajoutez les frais qui étaient pris en charge en service et ne le sont plus.", "Vérifiez vous-même les calculs avec une calculatrice."],
          words: [["Indemnité", "de l'argent versé en service pour un frais comme le logement ou la nourriture."], ["Besoin", "un frais que vous devez payer pour vivre et travailler, comme le loyer."], ["Envie", "un frais que vous pouvez réduire, comme les restaurants."]],
          slides: [
            { title: "Ce qui change après le service", bullets: ["Les indemnités logement et nourriture peuvent s'arrêter", "La couverture santé peut changer", "Vérifiez votre solde et vos droits officiellement"] },
            { title: "Quatre groupes de budget", bullets: ["Revenus", "Besoins", "Envies", "Épargne et remboursements de dettes"] },
            { title: "Laissez l'IA faire le tableau", bullets: ["Donnez des chiffres arrondis", "Demandez les totaux et ce qui reste", "Vérifiez les calculs vous-même"] }
          ],
          tryIt: "Demandez à un assistant d'IA de construire votre tableau de budget mensuel avec des chiffres arrondis. Ajoutez une ligne pour un frais qui était pris en charge pendant votre service. Vérifiez les totaux avec une calculatrice.",
          youCanNow: "construire un tableau de budget mensuel civil avec des chiffres arrondis et vérifier ses totaux.",
          quickCheck: [
            { objective: "O2", q: "Quelle est la différence entre un besoin et une envie dans un budget ?", options: ["Un besoin est une dépense obligatoire, comme le loyer ; une envie est une dépense que vous pourriez supprimer", "Un besoin, c'est tout ce que vous aimez", "Une envie coûte toujours plus cher", "Il n'y a pas de différence"], answer: 0, why: "Les besoins sont des dépenses obligatoires ; les envies sont des choix que vous pouvez réduire quand l'argent manque." },
            { objective: "O2", q: "Le tableau de budget de l'IA indique un total de 2 950 $, mais les lignes semblent faire plus. Que faites-vous ?", options: ["Faire confiance au total de l'IA", "Supprimer le tableau", "Additionner les lignes vous-même à la calculatrice et corriger le total", "Arrondir le total à 3 000 $"], answer: 2, why: "L'IA peut faire des erreurs de calcul : vous vérifiez donc les totaux vous-même." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Repérer les arnaques qui visent les vétérans",
          minutes: 5,
          goal: "Repérer les signes d'une arnaque financière et savoir quoi faire.",
          text: [
            "Les escrocs visent les vétérans à cause de leurs prestations et pensions. Les pièges courants : des offres pour \"racheter\" votre pension ou vos prestations futures contre une somme tout de suite (avances sur pension), des gens qui font payer pour déposer une demande à la VA ou \"augmenter\" votre taux d'invalidité, de fausses offres d'emploi, et des appels qui se font passer pour la VA.",
            "Le Bureau de protection financière des consommateurs (Consumer Financial Protection Bureau, CFPB) met en garde les militaires et les vétérans contre les avances sur pension et explique leurs droits. Les escrocs utilisent maintenant aussi l'IA, pour écrire des messages qui ont l'air vrais et même imiter des voix.",
            "Signes d'alerte : on vous presse, on demande des frais à l'avance, on demande des cartes cadeaux ou un virement, ou on demande un code envoyé sur votre téléphone. Arrêtez, raccrochez et rappelez un numéro que vous trouvez vous-même sur va.gov ou le site officiel. Vous pouvez aussi coller un message suspect dans une IA et demander \"Quels sont les signes d'alerte ici ?\", après avoir enlevé vos détails privés."
          ],
          steps: ["Repérez la pression, les frais à l'avance, les cartes cadeaux, les virements ou les demandes de code.", "Arrêtez, ne payez et ne partagez rien.", "Trouvez vous-même le numéro officiel et rappelez.", "Enlevez les détails privés, puis demandez à l'IA de montrer les signes d'alerte.", "Signalez-le si vous avez perdu de l'argent."],
          words: [["Avance sur pension", "une offre qui vous paie une somme tout de suite en échange de votre pension ou de vos prestations futures, souvent à un coût très élevé."], ["Arnaque", "une ruse pour voler de l'argent ou des informations."]],
          slides: [
            { title: "Pièges courants", bullets: ["Offres d'avance sur pension", "Frais pour déposer ou \"augmenter\" une demande VA", "Fausses offres d'emploi et faux appels de la VA"] },
            { title: "Signes d'alerte", bullets: ["On vous presse", "Frais à l'avance, cartes cadeaux ou virement", "On demande un code reçu sur votre téléphone"] },
            { title: "Que faire", bullets: ["Arrêtez. Ne payez, ne partagez rien", "Rappelez un numéro trouvé vous-même", "Demandez à l'IA les signes d'alerte"] }
          ],
          sources: [{ name: "Consumer Financial Protection Bureau : l'argent tout au long de la vie militaire", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Écrivez un court exemple de SMS d'arnaque proposant d'\"augmenter votre taux VA contre des frais\". Demandez à un assistant d'IA de lister ses signes d'alerte. Puis écrivez ce que vous feriez si vous le receviez.",
          youCanNow: "repérer les signes des arnaques financières visant les vétérans et réagir sans risque.",
          quickCheck: [
            { objective: "O3", q: "Lequel est un signe d'arnaque ?", options: ["Une lettre que vous avez demandé à la VA d'envoyer", "Le relevé mensuel habituel de votre banque", "Une pression pour payer vite, avec des cartes cadeaux ou des frais à l'avance", "Un formulaire gratuit sur va.gov"], answer: 2, why: "Vous presser et demander des cartes cadeaux ou des frais à l'avance sont des signes classiques d'arnaque." },
            { objective: "O3", q: "Un SMS dit que vos prestations vont s'arrêter si vous n'envoyez pas le code que vous venez de recevoir. Que faites-vous ?", options: ["Envoyer le code vite", "Répondre pour demander qui ils sont", "Envoyer la moitié du code", "Ne pas répondre ; contacter la VA à un numéro que vous trouvez vous-même"], answer: 3, why: "Les vrais organismes ne demandent pas vos codes ; vous les contactez à un numéro que vous avez trouvé vous-même." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : L'argent après le service",
        questions: [
          { objective: "O1", q: "Que pouvez-vous taper dans une IA pour avoir de l'aide sur votre budget ?", options: ["Votre numéro de compte bancaire", "\"Loyer d'environ 1 200 dollars\"", "Votre numéro de sécurité sociale", "Votre mot de passe de banque en ligne"], answer: 1, why: "Des chiffres arrondis donnent à l'IA ce qu'il lui faut sans détails privés." },
          { objective: "O1", q: "Pour l'argent, une IA est le plus utile pour :", options: ["Prendre les décisions finales à votre place", "Choisir vos placements", "Expliquer, organiser et construire un plan que vous vérifiez ensuite", "Garder vos mots de passe"], answer: 2, why: "L'IA vous aide à comprendre et à organiser ; vous vérifiez les décisions auprès de sources officielles." },
          { objective: "O2", q: "Pourquoi un budget civil a-t-il besoin de lignes qu'un budget militaire n'avait peut-être pas ?", options: ["Les civils ne paient pas de loyer", "Les impôts sont plus bas", "L'IA le dit", "Certaines indemnités et prises en charge changent ou s'arrêtent après le service"], answer: 3, why: "Des frais comme le logement étaient peut-être pris en charge ou payés en indemnités pendant le service." },
          { objective: "O3", q: "Quelqu'un vous propose de l'argent tout de suite contre vos futures pensions. C'est :", options: ["Une avance sur pension, contre laquelle le CFPB met en garde", "Un salaire normal", "Une prestation de la VA", "Un remboursement d'impôts"], answer: 0, why: "Le CFPB met en garde les militaires et les vétérans contre les offres d'avance sur pension." },
          { objective: "O3", q: "Un appel dit venir de la VA et demande le code envoyé sur votre téléphone. Vous :", options: ["Lui lisez le code", "Raccrochez et appelez la VA à un numéro que vous trouvez vous-même", "Donnez plutôt votre numéro de sécurité sociale", "Envoyez une carte cadeau"], answer: 1, why: "Les vrais services ne demandent pas ce code ; rappelez un numéro que vous savez vrai." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Objectifs, routine et vraie aide",
      lessons: [
        {
          objectives: ["O4"],
          title: "Fixer des objectifs d'argent et de vie",
          minutes: 5,
          goal: "Écrire trois objectifs clairs avec un chiffre et une date, et en découper un en étapes avec l'IA.",
          text: [
            "Un objectif marche quand il est précis, mesurable et daté : \"Épargner 1 000 dollars pour les urgences d'ici le 31 mars\" vaut mieux que \"épargner plus\". C'est pareil pour les objectifs de vie : \"terminer ma formation de certification d'ici juin\" ou \"courir trois fois par semaine\".",
            "Écrivez trois objectifs : un objectif d'argent, un objectif de carrière ou de formation, et un objectif de santé ou de famille. Puis demandez à une IA de découper l'un d'eux en étapes hebdomadaires : \"Découpe cet objectif en étapes hebdomadaires : épargner 1 000 dollars d'ici le 31 mars. Je peux économiser environ 60 dollars par semaine sur les restaurants et les abonnements.\"",
            "Le Consumer Financial Protection Bureau a des outils gratuits pour les militaires, dont une fiche pour fixer ses objectifs. Utilisez-la avec votre plan fait avec l'IA."
          ],
          steps: ["Écrivez un objectif d'argent, un de carrière et un de santé ou de famille.", "Donnez à chacun un chiffre et une date.", "Demandez à l'IA de découper un objectif en étapes hebdomadaires.", "Mettez la première étape dans votre agenda."],
          words: [["Épargne de précaution", "de l'argent mis de côté pour les dépenses imprévues comme une réparation de voiture."], ["Mesurable", "qu'on peut compter, pour savoir quand c'est fait."]],
          slides: [
            { title: "Un objectif qui marche", bullets: ["Précis", "Mesurable : un chiffre", "Une date"] },
            { title: "Trois objectifs", bullets: ["Argent", "Carrière ou formation", "Santé ou famille"] },
            { title: "Découpez-le", bullets: ["Demandez des étapes hebdomadaires à l'IA", "Mettez l'étape 1 dans votre agenda", "Le CFPB a une fiche gratuite d'objectifs"] }
          ],
          sources: [{ name: "Consumer Financial Protection Bureau : l'argent tout au long de la vie militaire (fiche d'objectifs)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Écrivez vos trois objectifs avec un chiffre et une date. Demandez à un assistant d'IA de découper votre objectif d'argent en étapes hebdomadaires.",
          youCanNow: "écrire des objectifs clairs et en découper un en étapes hebdomadaires avec l'aide de l'IA.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qui rend un objectif clair ?", options: ["Il paraît ambitieux", "Il a un chiffre et une date", "Il n'a pas d'échéance", "Quelqu'un d'autre l'a écrit"], answer: 1, why: "Un chiffre et une date vous permettent de voir si vous avez atteint l'objectif." },
            { objective: "O4", q: "Vous voulez économiser 600 $ en 3 mois. Que donnez-vous à l'IA pour le découper en étapes ?", options: ["L'objectif, la date et ce que vous pouvez réellement y consacrer", "Vos identifiants bancaires", "Seulement le mot « économiser »", "Votre numéro de sécurité sociale"], answer: 0, why: "L'objectif, la date et un montant réaliste permettent à l'IA de proposer des étapes hebdomadaires utiles." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Construire une routine hebdomadaire",
          minutes: 5,
          goal: "Construire une routine hebdomadaire avec trois créneaux d'objectifs en utilisant un assistant d'IA.",
          text: [
            "La vie militaire suivait un emploi du temps. La vie civile, souvent non, et beaucoup de vétérans disent que perdre ce cadre est l'une des parties les plus dures de la transition. Vous pouvez construire le vôtre.",
            "Donnez à l'IA vos horaires fixes et vos objectifs : \"Je travaille de 8 h à 17 h du lundi au vendredi. Mes objectifs : étudier pour ma certification 4 heures par semaine, faire du sport 3 fois par semaine, revoir mon budget une fois par semaine. Fais un emploi du temps hebdomadaire simple sous forme de tableau.\"",
            "Restez réaliste. Gardez du temps libre et du temps en famille. Revoyez la routine chaque dimanche et ajustez-la : un plan tient jusqu'au premier contact, ensuite on s'adapte."
          ],
          steps: ["Listez vos horaires fixes : travail, études, famille.", "Listez vos trois objectifs de la leçon 4.", "Demandez à l'IA un tableau d'emploi du temps hebdomadaire.", "Ajoutez du temps libre et du temps en famille.", "Revoyez-la et ajustez-la chaque semaine."],
          words: [["Routine", "ce que vous faites à des moments réguliers chaque semaine."], ["Créneau", "un moment fixé dans votre agenda pour une seule tâche."]],
          slides: [
            { title: "Reconstruisez votre cadre", bullets: ["La vie militaire avait un emploi du temps", "La vie civile souvent non", "Vous pouvez construire le vôtre"] },
            { title: "Demandez un tableau hebdomadaire", bullets: ["Vos horaires fixes", "Vos trois créneaux d'objectifs", "Temps libre et en famille"] },
            { title: "Revoyez chaque semaine", bullets: ["Vérifiez chaque dimanche", "Ajustez ce qui n'a pas marché", "Adaptez-vous, comme pour tout plan"] }
          ],
          tryIt: "Demandez à un assistant d'IA de faire votre emploi du temps hebdomadaire avec trois créneaux d'objectifs, dont une revue du budget par semaine. Mettez-le dans l'agenda de votre téléphone ou imprimez-le.",
          youCanNow: "construire une routine hebdomadaire réaliste qui laisse du temps pour vos objectifs.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qu'un créneau d'objectif dans une routine hebdomadaire ?", options: ["Une semaine sans projets", "Un rappel pour payer un arnaqueur", "Une liste de toutes les tâches que vous avez jamais faites", "Un moment fixe chaque semaine pour travailler sur un objectif"], answer: 3, why: "Un créneau d'objectif, c'est du temps réservé un jour régulier pour faire avancer un objectif." },
            { objective: "O5", q: "Vous avez sauté deux créneaux d'objectif cette semaine à cause de rendez-vous. Que faites-vous ?", options: ["Revoir la routine et déplacer les créneaux à des moments qui conviennent", "Abandonner la routine", "Ajouter cinq créneaux de plus", "Ne plus jamais prendre de rendez-vous"], answer: 0, why: "Une routine fonctionne quand vous la revoyez chaque semaine et l'adaptez à la vraie vie." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Obtenir une aide officielle et gratuite sur l'argent",
          minutes: 5,
          goal: "Choisir la bonne source officielle pour une question d'argent et écrire la question.",
          text: [
            "Certaines questions d'argent demandent une personne ou une réponse officielle : prestations et paiements de la VA, dettes, impôts, problèmes de crédit, choix de retraite, ou tout ce qui est juridique. L'IA peut vous aider à écrire la question clairement, mais elle ne doit pas être la réponse finale.",
            "L'aide officielle gratuite comprend : la VA (va.gov) pour les prestations et paiements de la VA ; Military OneSource, qui offre un conseil financier gratuit aux militaires et aux membres de leur famille éligibles (consultez son guide d'éligibilité pour savoir si vous y avez encore droit après votre départ) ; et le Consumer Financial Protection Bureau (consumerfinance.gov) pour vos droits et vos réclamations.",
            "Les placements et les comptes de retraite sont des décisions personnelles. Ce cours n'en recommande aucun. Parlez à un professionnel qualifié et digne de confiance, et méfiez-vous de quiconque promet des gains importants et rapides."
          ],
          steps: ["Écrivez votre question d'argent en une ou deux phrases.", "Demandez à l'IA de la rendre claire, sans détails privés.", "Choisissez la bonne source : VA, Military OneSource ou CFPB.", "Contactez-les avec le numéro ou le site que vous avez trouvé vous-même."],
          words: [["Conseil financier", "une aide gratuite ou peu chère d'un conseiller formé pour planifier et régler des problèmes d'argent."], ["CFPB", "Consumer Financial Protection Bureau : l'agence américaine qui protège les gens pour les questions d'argent."]],
          slides: [
            { title: "Certaines questions demandent une réponse officielle", bullets: ["Prestations et paiements de la VA", "Dettes, impôts et crédit", "Retraite et questions juridiques"] },
            { title: "Aide officielle gratuite", bullets: ["va.gov pour les prestations de la VA", "Conseil financier de Military OneSource", "consumerfinance.gov pour vos droits"] },
            { title: "Pas de conseils de placement ici", bullets: ["Les placements sont des décisions personnelles", "Parlez à un professionnel qualifié", "Méfiez-vous des promesses de gains rapides"] }
          ],
          sources: [
            { name: "Military OneSource : conseil financier", url: "https://www.militaryonesource.mil/benefits/financial-counseling/" },
            { name: "Consumer Financial Protection Bureau : l'argent tout au long de la vie militaire", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" },
            { name: "VA : carrières et emploi (prestations et conseil de la VA)", url: "https://www.va.gov/careers-employment/" }
          ],
          tryIt: "Tâche finale : terminez votre plan d'une page : votre budget mensuel de la leçon 2 avec une ligne de changement de revenus, votre routine hebdomadaire avec trois créneaux d'objectifs, et une question d'argent avec la source officielle à qui vous la poserez. Vérifiez qu'il n'y a aucun numéro de compte ni détail privé.",
          youCanNow: "choisir la bonne source officielle et gratuite pour une question d'argent et lui apporter une question claire.",
          quickCheck: [
            { objective: "O6", q: "Pourquoi écrire votre question d'argent avant de contacter une source officielle ?", options: ["Pour pouvoir la publier en ligne", "Pour poser clairement la question au bon endroit et obtenir une réponse utile", "Pour que l'IA y réponde à la place", "Pour ne jamais avoir à demander"], answer: 1, why: "Une question claire et écrite aide le conseiller ou l'organisme à vous donner la bonne réponse." },
            { objective: "O6", q: "Vous avez une question sur vos paiements de la VA. À qui la posez-vous ?", options: ["À un groupe sur les réseaux sociaux", "Seulement à l'assistant d'IA", "À la VA, sur va.gov", "À quelqu'un qui vous a appelé pour proposer son aide"], answer: 2, why: "Les questions sur les paiements de la VA se posent à la VA elle-même." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Objectifs, routine et vraie aide",
        questions: [
          { objective: "O4", q: "Quel est le meilleur objectif ?", options: ["\"Épargner plus\"", "\"Mieux gérer mon argent\"", "\"Épargner 1 000 dollars pour les urgences d'ici le 31 mars\"", "\"Acheter une maison un jour\""], answer: 2, why: "Il est précis, mesurable et daté." },
          { objective: "O5", q: "Beaucoup de vétérans regrettent le cadre après le service. Qu'est-ce qui aide ?", options: ["Ne jamais planifier", "Laisser l'IA diriger votre vie", "Travailler à toute heure", "Construire une routine hebdomadaire et la revoir"], answer: 3, why: "Une routine réaliste revue chaque semaine redonne un cadre." },
          { objective: "O5", q: "Votre routine n'a pas marché cette semaine. Vous :", options: ["La revoyez et l'ajustez", "Abandonnez les routines", "Ajoutez des heures de travail", "Supprimez votre agenda"], answer: 0, why: "On ajuste les plans en apprenant ce qui marche." },
          { objective: "O6", q: "Quelle source offre un conseil financier gratuit aux militaires ?", options: ["Une publicité", "Military OneSource", "Une société d'avances sur pension", "N'importe quel chatbot d'IA"], answer: 1, why: "Military OneSource offre un conseil financier gratuit aux militaires et aux membres de leur famille éligibles." },
          { objective: "O6", q: "Une IA propose un placement précis. Que devez-vous faire ?", options: ["L'acheter tout de suite", "Dire à vos amis de l'acheter", "Le considérer comme non vérifié et parler à un professionnel qualifié", "Y mettre toute votre épargne"], answer: 2, why: "Les placements sont des décisions personnelles ; l'IA n'est pas un conseiller financier." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour réussir sa vie financière et personnelle",
    questions: [
      { objective: "O1", q: "Un assistant d'IA peut aider pour l'argent en :", options: ["Gardant vos mots de passe", "Expliquant les termes et en construisant un tableau de budget", "Garantissant des gains", "Déposant votre demande à la VA à votre place"], answer: 1, why: "Expliquer et organiser sont des tâches sûres et utiles pour l'IA." },
      { objective: "O1", q: "Qu'est-ce qu'on peut taper sans risque dans une IA ?", options: ["Votre numéro de DD-214", "Votre numéro de carte", "Votre mot de passe", "\"Courses environ 450 dollars par mois\""], answer: 3, why: "Les chiffres arrondis sans détails de compte sont sans risque." },
      { objective: "O1", q: "Les réponses de l'IA sur les règles et les taux doivent être :", options: ["Vérifiées auprès d'une source officielle", "Crues parce qu'elles ont l'air sûres", "Publiées en ligne", "Complètement ignorées"], answer: 0, why: "L'IA peut se tromper ou ne pas être à jour sur les règles et les taux." },
      { objective: "O2", q: "Un budget est :", options: ["Un prêt", "Un formulaire d'impôts", "Un plan de l'argent qui entre et qui sort chaque mois", "Un compte bancaire"], answer: 2, why: "Un budget planifie les revenus et les dépenses." },
      { objective: "O2", q: "Lequel est un besoin ?", options: ["Un abonnement de streaming", "Le loyer", "Les restaurants", "Un nouveau jeu vidéo"], answer: 1, why: "Le loyer est un frais qu'il faut payer pour vivre." },
      { objective: "O2", q: "Après le service, quels frais devrez-vous peut-être payer vous-même ?", options: ["Aucun", "Seulement les places de cinéma", "Seulement les cadeaux", "Les frais autrefois pris en charge ou payés en indemnités, comme le logement"], answer: 3, why: "Les indemnités et les prises en charge peuvent changer ou s'arrêter après le service." },
      { objective: "O2", q: "Où confirmer votre dernière solde et vos droits ?", options: ["Votre service financier, la DFAS ou la VA", "Une publication sur un réseau social", "Une supposition de l'IA", "Le SMS d'un inconnu"], answer: 0, why: "Les services officiels ont vos vrais chiffres." },
      { objective: "O2", q: "Après que l'IA a construit votre tableau de budget, vous devez :", options: ["Croire les totaux", "Vérifier vous-même les calculs", "L'envoyer à des inconnus", "Ajouter vos identifiants bancaires"], answer: 1, why: "L'IA peut faire des erreurs de calcul ; vérifiez avec une calculatrice." },
      { objective: "O3", q: "Une offre d'\"avance sur pension\" est :", options: ["Un programme de la VA", "Un remboursement d'impôts", "Une somme tout de suite contre vos paiements futurs, souvent très coûteuse", "De l'argent gratuit"], answer: 2, why: "Le CFPB met en garde contre ces offres." },
      { objective: "O3", q: "Quelqu'un demande des frais à l'avance pour \"augmenter votre taux VA\". C'est :", options: ["Normal", "Obligatoire", "Une règle de la VA", "Un signe d'arnaque"], answer: 3, why: "Les frais à l'avance et les promesses sont des signes d'arnaque courants." },
      { objective: "O3", q: "Un message vous presse de payer avec des cartes cadeaux. Vous :", options: ["Arrêtez et ne payez pas", "Payez vite", "Donnez votre numéro de sécurité sociale", "Leur donnez un code"], answer: 0, why: "La pression et les cartes cadeaux sont des signes d'arnaque classiques." },
      { objective: "O3", q: "Avant de coller un message suspect dans une IA, vous devez :", options: ["Ajouter votre numéro de compte", "Enlever vos détails privés", "Le transférer à vos amis", "Répondre à l'expéditeur"], answer: 1, why: "Enlevez vos détails privés, puis demandez à l'IA de repérer les signes d'alerte." },
      { objective: "O4", q: "Un bon objectif a :", options: ["Pas de date", "Pas de chiffre", "Un chiffre et une date", "Seulement des sentiments"], answer: 2, why: "Les objectifs précis, mesurables et datés se réalisent." },
      { objective: "O4", q: "Quelle agence propose une fiche gratuite pour fixer ses objectifs aux militaires ?", options: ["Une société d'avances sur pension", "Un concessionnaire auto", "Une application de crypto", "Le Consumer Financial Protection Bureau"], answer: 3, why: "La page militaire du CFPB renvoie vers une fiche d'objectifs." },
      { objective: "O4", q: "Quand vous demandez à l'IA de découper un objectif en étapes, donnez :", options: ["L'objectif, la date et ce que vous pouvez vraiment y consacrer", "Votre mot de passe bancaire", "Votre numéro de sécurité sociale", "Rien"], answer: 0, why: "Des détails clairs donnent un plan réaliste." },
      { objective: "O5", q: "Une routine hebdomadaire doit inclure :", options: ["Seulement le travail", "Des créneaux d'objectifs plus du temps libre et en famille", "Aucun repos", "Seulement du temps d'écran"], answer: 1, why: "Une routine réaliste équilibre objectifs et repos." },
      { objective: "O5", q: "À quelle fréquence revoir votre routine ?", options: ["Jamais", "Une fois par an", "Chaque semaine", "Seulement quand ça va mal"], answer: 2, why: "Une revue chaque semaine permet d'ajuster ce qui ne marche pas." },
      { objective: "O6", q: "Quel est le bon endroit pour une question sur vos paiements de la VA ?", options: ["Une publicité", "Un forum au hasard", "Seulement un chatbot d'IA", "La VA sur va.gov"], answer: 3, why: "La VA est la source officielle pour ses prestations." },
      { objective: "O6", q: "Ce cours recommande-t-il des placements ?", options: ["Non ; parlez à un professionnel qualifié", "Oui, la crypto", "Oui, n'importe quelle action", "Oui, les avances sur pension"], answer: 0, why: "Ce cours ne donne aucun conseil en investissement." },
      { objective: "O6", q: "Quelqu'un promet des gains importants et rapides. Vous devez :", options: ["Investir tout de suite", "Être prudent et vérifier auprès d'un professionnel qualifié", "Lui donner vos identifiants", "Emprunter pour investir"], answer: 1, why: "Les promesses de gains importants et rapides sont un signe d'alerte." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      3,
      5,
      9,
      10,
      12,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Budget mensuel",
        objective: "O2",
        notYet: "Les revenus, les besoins, les envies, l'épargne ou les remboursements de dettes manquent, ou les totaux sont faux.",
        meets: "Les cinq parties sont là avec des chiffres arrondis, et les totaux ont été vérifiés à la calculatrice.",
        exceeds: "L'apprenant peut dire quelle envie il supprimerait en premier si l'argent venait à manquer."
      },
      {
        name: "Ligne de changement de revenu",
        objective: "O2",
        notYet: "Aucune ligne pour une dépense ou un revenu qui change après le service.",
        meets: "Une ligne montre une dépense qui était couverte pendant le service ou un changement de revenu après le service.",
        exceeds: "L'apprenant note où il a confirmé sa dernière solde ou ses prestations."
      },
      {
        name: "Routine hebdomadaire",
        objective: "O5",
        notYet: "La routine a moins de trois créneaux d'objectif ou pas de revue du budget.",
        meets: "Trois créneaux d'objectif, dont une revue du budget chaque semaine, plus du temps libre et du temps en famille.",
        exceeds: "La routine est dans l'agenda du téléphone ou imprimée, avec un jour fixe pour la revoir."
      },
      {
        name: "Aucun détail privé",
        objective: "O1",
        notYet: "Le plan ou une demande contient un numéro de compte, de carte ou d'identité.",
        meets: "Aucun numéro de compte ni détail privé nulle part.",
        exceeds: "L'apprenant peut montrer les demandes arrondies qu'il a utilisées."
      },
      {
        name: "Question pour une source officielle",
        objective: "O6",
        notYet: "Aucune question d'argent, ou aucune source nommée.",
        meets: "Une question d'argent claire et la bonne source officielle ou le bon conseiller pour y répondre.",
        exceeds: "L'apprenant a pris rendez-vous avec cette source ou l'a contactée."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent l'exercice final (grille d'évaluation)",
      "Apprenants qui disent utiliser encore leur budget et leur routine hebdomadaire 30 jours plus tard (enquête de suivi)",
      "Apprenants qui contactent une source officielle et gratuite sur l'argent, comme Military OneSource ou la VA, dans les 30 jours",
      "Apprenants qui disent avoir repéré et évité un message ou une offre frauduleuse"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone ou un ordinateur avec internet, et une calculatrice",
      "Un assistant d'IA gratuit : ChatGPT, Microsoft Copilot ou Google Gemini",
      "Du papier, une application de notes ou un tableur pour le budget, et l'agenda du téléphone pour la routine",
      "Environ 60 minutes au total : leçons, exercices, contrôles et exercice final"
    ],
    facilitatorNotes: [
      "Avant tout exercice, montrez comment arrondir les chiffres et rappelez de ne jamais taper de numéro de compte, de carte, de sécurité sociale ou de dossier VA dans une IA.",
      "Ne donnez pas de conseil en placement ; orientez les décisions d'argent vers Military OneSource, la VA ou un professionnel qualifié.",
      "Utilisez en classe un faux SMS d'arnaque inventé ; ne demandez jamais aux apprenants de partager de vrais messages avec des détails privés.",
      "Notez le plan final d'une page avec la grille, et donnez un retour sur une seule ligne « Pas encore » à la fois.",
      "Les conjoints ou des membres de la famille peuvent participer à la leçon sur le budget si l'apprenant le souhaite."
    ]
  }
};
