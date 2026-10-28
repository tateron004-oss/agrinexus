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
  chapters: [
    {
      name: "Chapitre 1 : L'argent après le service",
      lessons: [
        {
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
          youCanNow: "poser des questions d'argent à un assistant d'IA sans risque et savoir quoi vérifier ailleurs."
        },
        {
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
          youCanNow: "construire un tableau de budget mensuel civil avec des chiffres arrondis et vérifier ses totaux."
        },
        {
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
          youCanNow: "repérer les signes des arnaques financières visant les vétérans et réagir sans risque."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : L'argent après le service",
        questions: [
          { q: "Que pouvez-vous taper dans une IA pour avoir de l'aide sur votre budget ?", options: ["Votre numéro de compte bancaire", "\"Loyer d'environ 1 200 dollars\"", "Votre numéro de sécurité sociale", "Votre mot de passe de banque en ligne"], answer: 1, why: "Des chiffres arrondis donnent à l'IA ce qu'il lui faut sans détails privés." },
          { q: "Pour l'argent, une IA est le plus utile pour :", options: ["Prendre les décisions finales à votre place", "Choisir vos placements", "Expliquer, organiser et construire un plan que vous vérifiez ensuite", "Garder vos mots de passe"], answer: 2, why: "L'IA vous aide à comprendre et à organiser ; vous vérifiez les décisions auprès de sources officielles." },
          { q: "Pourquoi un budget civil a-t-il besoin de lignes qu'un budget militaire n'avait peut-être pas ?", options: ["Les civils ne paient pas de loyer", "Les impôts sont plus bas", "L'IA le dit", "Certaines indemnités et prises en charge changent ou s'arrêtent après le service"], answer: 3, why: "Des frais comme le logement étaient peut-être pris en charge ou payés en indemnités pendant le service." },
          { q: "Quelqu'un vous propose de l'argent tout de suite contre vos futures pensions. C'est :", options: ["Une avance sur pension, contre laquelle le CFPB met en garde", "Un salaire normal", "Une prestation de la VA", "Un remboursement d'impôts"], answer: 0, why: "Le CFPB met en garde les militaires et les vétérans contre les offres d'avance sur pension." },
          { q: "Un appel dit venir de la VA et demande le code envoyé sur votre téléphone. Vous :", options: ["Lui lisez le code", "Raccrochez et appelez la VA à un numéro que vous trouvez vous-même", "Donnez plutôt votre numéro de sécurité sociale", "Envoyez une carte cadeau"], answer: 1, why: "Les vrais services ne demandent pas ce code ; rappelez un numéro que vous savez vrai." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Objectifs, routine et vraie aide",
      lessons: [
        {
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
          youCanNow: "écrire des objectifs clairs et en découper un en étapes hebdomadaires avec l'aide de l'IA."
        },
        {
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
          youCanNow: "construire une routine hebdomadaire réaliste qui laisse du temps pour vos objectifs."
        },
        {
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
          youCanNow: "choisir la bonne source officielle et gratuite pour une question d'argent et lui apporter une question claire."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Objectifs, routine et vraie aide",
        questions: [
          { q: "Quel est le meilleur objectif ?", options: ["\"Épargner plus\"", "\"Mieux gérer mon argent\"", "\"Épargner 1 000 dollars pour les urgences d'ici le 31 mars\"", "\"Acheter une maison un jour\""], answer: 2, why: "Il est précis, mesurable et daté." },
          { q: "Beaucoup de vétérans regrettent le cadre après le service. Qu'est-ce qui aide ?", options: ["Ne jamais planifier", "Laisser l'IA diriger votre vie", "Travailler à toute heure", "Construire une routine hebdomadaire et la revoir"], answer: 3, why: "Une routine réaliste revue chaque semaine redonne un cadre." },
          { q: "Votre routine n'a pas marché cette semaine. Vous :", options: ["La revoyez et l'ajustez", "Abandonnez les routines", "Ajoutez des heures de travail", "Supprimez votre agenda"], answer: 0, why: "On ajuste les plans en apprenant ce qui marche." },
          { q: "Quelle source offre un conseil financier gratuit aux militaires ?", options: ["Une publicité", "Military OneSource", "Une société d'avances sur pension", "N'importe quel chatbot d'IA"], answer: 1, why: "Military OneSource offre un conseil financier gratuit aux militaires et aux membres de leur famille éligibles." },
          { q: "Une IA propose un placement précis. Que devez-vous faire ?", options: ["L'acheter tout de suite", "Dire à vos amis de l'acheter", "Le considérer comme non vérifié et parler à un professionnel qualifié", "Y mettre toute votre épargne"], answer: 2, why: "Les placements sont des décisions personnelles ; l'IA n'est pas un conseiller financier." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour réussir sa vie financière et personnelle",
    questions: [
      { q: "Un assistant d'IA peut aider pour l'argent en :", options: ["Gardant vos mots de passe", "Expliquant les termes et en construisant un tableau de budget", "Garantissant des gains", "Déposant votre demande à la VA à votre place"], answer: 1, why: "Expliquer et organiser sont des tâches sûres et utiles pour l'IA." },
      { q: "Qu'est-ce qu'on peut taper sans risque dans une IA ?", options: ["Votre numéro de DD-214", "Votre numéro de carte", "Votre mot de passe", "\"Courses environ 450 dollars par mois\""], answer: 3, why: "Les chiffres arrondis sans détails de compte sont sans risque." },
      { q: "Les réponses de l'IA sur les règles et les taux doivent être :", options: ["Vérifiées auprès d'une source officielle", "Crues parce qu'elles ont l'air sûres", "Publiées en ligne", "Complètement ignorées"], answer: 0, why: "L'IA peut se tromper ou ne pas être à jour sur les règles et les taux." },
      { q: "Un budget est :", options: ["Un prêt", "Un formulaire d'impôts", "Un plan de l'argent qui entre et qui sort chaque mois", "Un compte bancaire"], answer: 2, why: "Un budget planifie les revenus et les dépenses." },
      { q: "Lequel est un besoin ?", options: ["Un abonnement de streaming", "Le loyer", "Les restaurants", "Un nouveau jeu vidéo"], answer: 1, why: "Le loyer est un frais qu'il faut payer pour vivre." },
      { q: "Après le service, quels frais devrez-vous peut-être payer vous-même ?", options: ["Aucun", "Seulement les places de cinéma", "Seulement les cadeaux", "Les frais autrefois pris en charge ou payés en indemnités, comme le logement"], answer: 3, why: "Les indemnités et les prises en charge peuvent changer ou s'arrêter après le service." },
      { q: "Où confirmer votre dernière solde et vos droits ?", options: ["Votre service financier, la DFAS ou la VA", "Une publication sur un réseau social", "Une supposition de l'IA", "Le SMS d'un inconnu"], answer: 0, why: "Les services officiels ont vos vrais chiffres." },
      { q: "Après que l'IA a construit votre tableau de budget, vous devez :", options: ["Croire les totaux", "Vérifier vous-même les calculs", "L'envoyer à des inconnus", "Ajouter vos identifiants bancaires"], answer: 1, why: "L'IA peut faire des erreurs de calcul ; vérifiez avec une calculatrice." },
      { q: "Une offre d'\"avance sur pension\" est :", options: ["Un programme de la VA", "Un remboursement d'impôts", "Une somme tout de suite contre vos paiements futurs, souvent très coûteuse", "De l'argent gratuit"], answer: 2, why: "Le CFPB met en garde contre ces offres." },
      { q: "Quelqu'un demande des frais à l'avance pour \"augmenter votre taux VA\". C'est :", options: ["Normal", "Obligatoire", "Une règle de la VA", "Un signe d'arnaque"], answer: 3, why: "Les frais à l'avance et les promesses sont des signes d'arnaque courants." },
      { q: "Un message vous presse de payer avec des cartes cadeaux. Vous :", options: ["Arrêtez et ne payez pas", "Payez vite", "Donnez votre numéro de sécurité sociale", "Leur donnez un code"], answer: 0, why: "La pression et les cartes cadeaux sont des signes d'arnaque classiques." },
      { q: "Avant de coller un message suspect dans une IA, vous devez :", options: ["Ajouter votre numéro de compte", "Enlever vos détails privés", "Le transférer à vos amis", "Répondre à l'expéditeur"], answer: 1, why: "Enlevez vos détails privés, puis demandez à l'IA de repérer les signes d'alerte." },
      { q: "Un bon objectif a :", options: ["Pas de date", "Pas de chiffre", "Un chiffre et une date", "Seulement des sentiments"], answer: 2, why: "Les objectifs précis, mesurables et datés se réalisent." },
      { q: "Quelle agence propose une fiche gratuite pour fixer ses objectifs aux militaires ?", options: ["Une société d'avances sur pension", "Un concessionnaire auto", "Une application de crypto", "Le Consumer Financial Protection Bureau"], answer: 3, why: "La page militaire du CFPB renvoie vers une fiche d'objectifs." },
      { q: "Quand vous demandez à l'IA de découper un objectif en étapes, donnez :", options: ["L'objectif, la date et ce que vous pouvez vraiment y consacrer", "Votre mot de passe bancaire", "Votre numéro de sécurité sociale", "Rien"], answer: 0, why: "Des détails clairs donnent un plan réaliste." },
      { q: "Une routine hebdomadaire doit inclure :", options: ["Seulement le travail", "Des créneaux d'objectifs plus du temps libre et en famille", "Aucun repos", "Seulement du temps d'écran"], answer: 1, why: "Une routine réaliste équilibre objectifs et repos." },
      { q: "À quelle fréquence revoir votre routine ?", options: ["Jamais", "Une fois par an", "Chaque semaine", "Seulement quand ça va mal"], answer: 2, why: "Une revue chaque semaine permet d'ajuster ce qui ne marche pas." },
      { q: "Quel est le bon endroit pour une question sur vos paiements de la VA ?", options: ["Une publicité", "Un forum au hasard", "Seulement un chatbot d'IA", "La VA sur va.gov"], answer: 3, why: "La VA est la source officielle pour ses prestations." },
      { q: "Ce cours recommande-t-il des placements ?", options: ["Non ; parlez à un professionnel qualifié", "Oui, la crypto", "Oui, n'importe quelle action", "Oui, les avances sur pension"], answer: 0, why: "Ce cours ne donne aucun conseil en investissement." },
      { q: "Quelqu'un promet des gains importants et rapides. Vous devez :", options: ["Investir tout de suite", "Être prudent et vérifier auprès d'un professionnel qualifié", "Lui donner vos identifiants", "Emprunter pour investir"], answer: 1, why: "Les promesses de gains importants et rapides sont un signe d'alerte." }
    ]
  }
};
