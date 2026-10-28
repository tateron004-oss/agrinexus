"use strict";

// Koach Learn course (French translation of veterans/veterans-ai-certifications.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "veterans-ai-certifications-fr",
  lang: "fr",
  translationOf: "veterans-ai-certifications",
  category: "Veterans (military)",
  name: "Certifications et IA pour les vétérans",
  skills: "Traduire un emploi militaire en intitulés de postes civils, Trouver la certification que demandent les employeurs, Vérifier ce que paie le GI Bill, Construire un plan de révision avec l'IA, Montrer une certification sur un CV",
  outcome: "choisir un emploi civil qui correspond à votre expérience militaire, trouver la certification que demandent les employeurs, vérifier si la VA peut payer les frais d'examen, et construire un plan de révision semaine par semaine avec un assistant d'IA.",
  about: [
    "Vous avez déjà obtenu des qualifications sous l'uniforme : écoles, brevets, permis et formation sur le terrain. Les employeurs civils veulent souvent voir ces mêmes compétences sous la forme d'une certification qui porte un nom. Ce cours vous aide à choisir la bonne et à prévoir comment l'obtenir.",
    "Vous traduirez votre emploi militaire en intitulés de postes civils, vous lirez de vraies offres d'emploi pour voir quelle certification elles demandent, vous consulterez les pages officielles de la VA (l'administration américaine des anciens combattants) sur ce que le GI Bill peut payer, et vous utiliserez un assistant d'IA pour construire un plan de révision et des questions d'entraînement.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites l'activité \"Essayez maintenant\". Un court contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours. Les règles des prestations changent, donc chaque information sur l'argent renvoie à la page officielle de la VA à vérifier."
  ],
  finalTask: "Faites un plan de certification d'une page : votre emploi militaire et deux intitulés de postes civils correspondants, la certification qui revient le plus dans les vraies offres d'emploi, si la VA peut payer les frais d'examen (avec la page officielle consultée), un plan de révision semaine par semaine fait avec un assistant d'IA, et la ligne de CV que vous ajouterez quand vous aurez réussi.",
  chapters: [
    {
      name: "Chapitre 1 : Choisir la bonne certification",
      lessons: [
        {
          title: "Traduire votre emploi militaire en intitulés de postes civils",
          minutes: 5,
          goal: "Transformer votre code d'emploi militaire en deux ou trois intitulés de postes civils.",
          text: [
            "Les recruteurs civils savent rarement ce que veut dire un MOS, un rating ou un AFSC. Votre premier travail est de le traduire en intitulés de postes qu'ils utilisent, comme \"technicien support informatique\", \"coordinateur logistique\" ou \"technicien de maintenance\".",
            "My Next Move for Veterans (mynextmove.org/vets), géré pour le ministère du Travail des États-Unis, vous permet de taper votre armée et votre code ou intitulé d'emploi militaire et de voir des métiers civils au travail semblable.",
            "Un assistant d'IA peut aussi aider. Demandez-lui de décrire vos missions avec des mots civils, puis comparez sa réponse avec My Next Move. Ne collez pas de détails classifiés, de noms d'unités ni rien de ce qu'on vous a dit de ne pas partager."
          ],
          steps: ["Ouvrez mynextmove.org/vets.", "Dans la partie militaire, choisissez votre armée et tapez votre code ou intitulé d'emploi.", "Notez deux ou trois métiers civils proposés.", "Demandez à un assistant d'IA : \"J'étais 25B dans l'Army (spécialiste informatique). Décris mes missions avec des mots civils pour une offre d'emploi.\"", "Gardez les intitulés qui apparaissent aux deux endroits."],
          words: [["MOS / rating / AFSC", "les codes que les armées américaines utilisent pour les emplois militaires (MOS de l'Army et des Marines, ratings de la Navy et des garde-côtes, AFSC de l'Air Force)."], ["Intitulé de poste", "le nom qu'un employeur donne à un emploi dans une offre."]],
          slides: [
            { title: "Les employeurs ne parlent pas MOS", bullets: ["Traduisez votre code en intitulés civils", "Utilisez les mots d'une offre d'emploi"] },
            { title: "My Next Move for Veterans", bullets: ["mynextmove.org/vets, pour le ministère du Travail", "Entrez votre armée et votre code", "Voyez des métiers civils semblables"] },
            { title: "Demandez à l'IA de traduire", bullets: ["\"Décris mes missions de 25B en mots civils\"", "Comparez avec My Next Move", "Jamais de détails classifiés ou d'unité"] }
          ],
          sources: [{ name: "My Next Move for Veterans (ministère du Travail des États-Unis)", url: "https://www.mynextmove.org/vets/" }],
          tryIt: "Cherchez votre emploi militaire sur mynextmove.org/vets et demandez à un assistant d'IA de décrire vos missions avec des mots civils. Notez les deux intitulés civils qui apparaissent dans les deux.",
          youCanNow: "transformer votre code d'emploi militaire en intitulés de postes civils qu'un employeur reconnaîtra."
        },
        {
          title: "Trouver la certification que demandent les employeurs",
          minutes: 5,
          goal: "Trouver la certification qui revient le plus dans les vraies offres d'emploi pour le poste visé.",
          text: [
            "Une certification est la preuve, donnée par un organisme extérieur, que vous avez réussi un examen sur une compétence. Les employeurs citent celles qu'ils veulent dans leurs offres d'emploi : les offres sont donc le meilleur guide.",
            "Cherchez sur un site d'emploi l'intitulé visé et votre région. Lisez cinq à dix offres et comptez chaque certification citée. Celle qui revient le plus est en général votre premier objectif.",
            "Chaque armée a un site Credentialing Opportunities On-Line (COOL) qui relie les emplois militaires aux certifications correspondantes. Demandez à votre bureau de formation ou cherchez \"COOL\" avec le nom de votre armée. Vérifiez toujours sur le site de l'organisme certificateur l'examen, les règles et le prix actuels.",
            "L'IA peut vous aider à comparer deux certifications, mais elle peut ne pas être à jour. Utilisez-la pour expliquer, pas pour fixer les prix ou les règles."
          ],
          steps: ["Cherchez l'intitulé visé sur un site d'emploi.", "Lisez cinq à dix offres et listez chaque certification citée.", "Comptez-les ; entourez la plus fréquente.", "Regardez sur le site COOL de votre armée comment elle se relie à votre emploi militaire.", "Ouvrez le site de l'organisme certificateur pour les détails actuels de l'examen."],
          words: [["Certification", "la preuve, donnée par un organisme extérieur, que vous avez réussi un examen sur une compétence."], ["Organisme certificateur", "l'organisation qui écrit l'examen et délivre la certification."], ["COOL", "Credentialing Opportunities On-Line, les sites des armées américaines qui relient les emplois militaires aux qualifications civiles."]],
          slides: [
            { title: "Laissez les offres décider", bullets: ["Lisez 5 à 10 offres pour le poste visé", "Comptez chaque certification citée", "La plus fréquente est votre premier objectif"] },
            { title: "Utilisez le site COOL de votre armée", bullets: ["Relie votre emploi militaire aux certifications", "Demandez le lien à votre bureau de formation"] },
            { title: "Vérifiez à la source", bullets: ["Le site de l'organisme a l'examen actuel", "L'IA explique, mais peut ne pas être à jour"] }
          ],
          tryIt: "Lisez au moins cinq vraies offres d'emploi pour l'un de vos intitulés civils. Comptez les certifications citées et entourez la plus fréquente.",
          youCanNow: "utiliser de vraies offres d'emploi pour choisir la certification que les employeurs veulent le plus."
        },
        {
          title: "Vérifier ce que le GI Bill peut payer",
          minutes: 5,
          goal: "Vérifier sur va.gov si la VA peut rembourser vos frais d'examen de certification et comment le demander.",
          text: [
            "La VA peut vous rembourser les frais d'examen de licence et de certification, y compris les frais d'inscription et administratifs. Quand nous avons vérifié va.gov en octobre 2026, la limite était de 2 000 dollars maximum par examen, et la VA retire le montant remboursé de vos droits au GI Bill. Elle ne paie pas le certificat lui-même.",
            "Vous devez déjà avoir l'une de ces prestations : le Post-9/11 GI Bill, le Montgomery GI Bill Active Duty ou Selected Reserve, ou le Survivors' and Dependents' Educational Assistance. Pour demander l'argent, envoyez le formulaire VA 22-0803 avec le reçu des frais et vos résultats ou votre certificat.",
            "La VA cite aussi d'autres façons d'utiliser vos droits, comme les cours de préparation, les formations non universitaires et le programme de formation en haute technologie VET TEC 2.0, qui a un nombre de places limité chaque année. Les règles et les montants changent, alors ouvrez la page officielle avant de dépenser de l'argent."
          ],
          steps: ["Ouvrez va.gov et trouvez la page sur les frais d'examen de licence et de certification.", "Vérifiez que vous avez l'une des prestations GI Bill citées.", "Notez la limite actuelle et le fait qu'elle utilise une partie de vos droits.", "Gardez votre reçu d'examen et vos résultats.", "Envoyez le formulaire VA 22-0803 comme l'explique la page."],
          words: [["Droits (entitlement)", "la part de prestations du GI Bill qu'il vous reste à utiliser."], ["Remboursement", "être payé en retour pour de l'argent déjà dépensé."]],
          slides: [
            { title: "La VA peut rembourser les examens", bullets: ["Frais d'examen de licence et de certification", "2 000 dollars max par examen (va.gov, oct. 2026)", "Pris sur vos droits au GI Bill"] },
            { title: "Comment le demander", bullets: ["Gardez le reçu et vos résultats", "Envoyez le formulaire VA 22-0803", "Vérifiez sur va.gov où l'envoyer"] },
            { title: "Autres options", bullets: ["Cours de préparation et formations non universitaires", "VET TEC 2.0 pour la haute technologie (places limitées)", "Vérifiez toujours la page officielle d'abord"] }
          ],
          sources: [
            { name: "VA : frais d'examen de licence et de certification", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/test-fees/" },
            { name: "VA : comment utiliser vos droits au GI Bill", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/" },
            { name: "VA : VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" }
          ],
          tryIt: "Ouvrez la page de va.gov sur les frais d'examen. Notez la limite actuelle, les prestations qui y donnent droit et le numéro du formulaire. Puis vérifiez si vous avez l'une de ces prestations.",
          youCanNow: "vérifier sur va.gov si la VA peut rembourser des frais d'examen de certification et ce qu'il faut envoyer."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Choisir la bonne certification",
        questions: [
          { q: "Un recruteur ne sait pas ce que veut dire votre MOS. Que devez-vous faire ?", options: ["Écrire le code en plus gros", "Enlever cet emploi de votre CV", "Le traduire en intitulés et missions civils", "Lui demander de chercher"], answer: 2, why: "Les intitulés et missions civils sont des mots que l'employeur comprend déjà." },
          { q: "Quel site gratuit permet d'entrer un code d'emploi militaire et de voir des métiers civils ?", options: ["My Next Move for Veterans", "Un réseau social", "Un magasin de jeux vidéo", "Un site météo"], answer: 0, why: "mynextmove.org/vets est l'outil du ministère du Travail pour ça." },
          { q: "Comment trouver la certification que les employeurs veulent le plus ?", options: ["Choisir la plus chère", "Demander à un ami au hasard", "Passer tous les examens d'un coup", "Compter les certifications citées dans de vraies offres d'emploi"], answer: 3, why: "Les offres d'emploi montrent ce que demandent les employeurs." },
          { q: "Où vérifier les règles et le prix actuels d'un examen de certification ?", options: ["Seulement dans une discussion avec l'IA", "Sur le site de l'organisme certificateur", "Dans un vieux message de forum", "Dans une publicité"], answer: 1, why: "L'organisme qui fait passer l'examen a les détails actuels." },
          { q: "Selon va.gov en octobre 2026, qu'est-ce qui est vrai sur le paiement des frais d'examen par la VA ?", options: ["La VA paie le certificat papier", "La VA peut rembourser jusqu'à 2 000 dollars par examen, pris sur vos droits", "Il n'y a pas de limite", "N'importe qui peut le demander sans prestation GI Bill"], answer: 1, why: "La page disait 2 000 dollars maximum par examen, pris sur les droits." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Obtenir la certification",
      lessons: [
        {
          title: "Construire un plan de révision avec l'IA",
          minutes: 5,
          goal: "Utiliser un assistant d'IA pour transformer le programme officiel de l'examen en plan de révision semaine par semaine.",
          text: [
            "La plupart des organismes certificateurs publient un programme d'examen, parfois appelé objectifs d'examen. Il liste tous les sujets couverts par l'examen. C'est votre ordre de mission.",
            "Copiez les sujets principaux (pas tout le document s'il est long) dans un assistant d'IA et donnez-lui votre situation : combien de semaines vous avez, combien d'heures par semaine, et ce que vous savez déjà grâce à l'armée.",
            "Demandez un plan avec un objectif pour chaque semaine, une semaine de révision avant l'examen et une date d'examen blanc. Puis mettez les séances dans votre agenda comme des heures de service."
          ],
          steps: ["Téléchargez le programme officiel de l'examen sur le site de l'organisme.", "Dites à l'IA vos semaines, vos heures par semaine et ce que vous savez déjà.", "Collez les sujets principaux et demandez un plan semaine par semaine.", "Demandez-lui d'ajouter une semaine de révision et un examen blanc.", "Mettez chaque séance dans votre agenda."],
          words: [["Programme d'examen (objectifs)", "la liste officielle des sujets couverts par un examen de certification."], ["Plan de révision", "un calendrier qui dit ce que vous allez étudier et quand."]],
          slides: [
            { title: "Le programme d'examen est votre ordre de mission", bullets: ["Liste tous les sujets de l'examen", "Récupérez-le auprès de l'organisme"] },
            { title: "Donnez votre situation à l'IA", bullets: ["Semaines avant l'examen", "Heures de révision par semaine", "Ce que vous savez déjà grâce au service"] },
            { title: "Demandez un vrai plan", bullets: ["Un objectif par semaine", "Une semaine de révision et un examen blanc", "Puis mettez-le dans l'agenda"] }
          ],
          tryIt: "Récupérez le programme d'examen de la certification visée. Demandez à un assistant d'IA : \"J'ai 8 semaines et 6 heures par semaine. Je sais déjà [ce que vous savez]. Fais un plan de révision semaine par semaine pour ces sujets : [sujets].\"",
          youCanNow: "transformer un programme d'examen officiel en plan de révision semaine par semaine avec un assistant d'IA."
        },
        {
          title: "S'entraîner avec l'IA de la bonne façon",
          minutes: 5,
          goal: "Utiliser l'IA pour vous interroger et expliquer vos erreurs, en la vérifiant avec les documents officiels.",
          text: [
            "L'IA est une bonne partenaire de révision. Elle peut vous interroger sur un sujet, expliquer une mauvaise réponse avec des mots plus simples ou vous donner un exemple concret tiré de votre emploi militaire.",
            "Elle peut aussi se tromper ou ne pas être à jour. Si sa réponse ne correspond pas au guide officiel ou au programme d'examen, faites confiance aux documents officiels.",
            "N'utilisez jamais de \"brain dumps\" (copies de vraies questions d'examen). Ils enfreignent les règles de l'organisme certificateur et peuvent vous faire perdre la certification. Entraînez-vous pour comprendre, pas pour apprendre des réponses par cœur."
          ],
          steps: ["Demandez : \"Pose-moi 5 questions sur [un sujet]. Attends ma réponse à chaque fois.\"", "Quand vous vous trompez, demandez une explication avec des mots simples.", "Demandez un exemple tiré de votre emploi militaire.", "Vérifiez dans le guide officiel toute réponse qui vous fait douter.", "Notez vos sujets faibles et révisez-les de nouveau."],
          words: [["Brain dump", "une copie de vraies questions d'examen partagée contre les règles ; l'utiliser peut vous faire perdre la certification."], ["Examen blanc", "un examen d'entraînement qui ressemble au vrai sans en être copié."]],
          slides: [
            { title: "L'IA comme partenaire de révision", bullets: ["Vous interroge sur un sujet", "Explique simplement les mauvaises réponses", "Donne des exemples de votre emploi militaire"] },
            { title: "Vérifiez avec les documents officiels", bullets: ["L'IA peut se tromper ou être dépassée", "Le guide officiel a le dernier mot"] },
            { title: "Pas de brain dumps", bullets: ["Les questions copiées enfreignent les règles", "Ils peuvent vous coûter la certification", "Entraînez-vous pour comprendre"] }
          ],
          tryIt: "Prenez le premier sujet de votre plan de révision. Demandez à un assistant d'IA de vous poser cinq questions, une à la fois. Pour chaque erreur, demandez une explication simple et vérifiez-la dans les documents officiels.",
          youCanNow: "utiliser l'IA pour vous interroger et expliquer vos erreurs, en la vérifiant avec les documents officiels."
        },
        {
          title: "Montrer votre certification aux employeurs",
          minutes: 4,
          goal: "Écrire la ligne de CV et une courte histoire qui montrent ensemble votre certification et votre service.",
          text: [
            "Une fois l'examen réussi, mettez la certification là où les employeurs regardent : une partie \"Certifications\" dans votre CV avec le nom complet, l'organisme certificateur et l'année, ainsi que sur votre profil en ligne.",
            "Reliez-la à votre service. Par exemple : \"Gestion des accès réseau de 300 utilisateurs comme spécialiste informatique dans l'Army ; [nom de la certification] obtenue en 2026.\" La certification prouve la compétence ; votre service prouve que vous l'avez utilisée sous pression.",
            "Encore en révision ? Vous pouvez écrire \"[nom de la certification], en cours, examen prévu [mois année]\". Demandez à un assistant d'IA de vous aider à formuler, puis vérifiez que chaque mot est vrai."
          ],
          steps: ["Ajoutez une partie Certifications à votre CV.", "Écrivez le nom complet de la certification, l'organisme et l'année.", "Ajoutez une ligne de CV qui la relie à quelque chose que vous avez fait en service.", "Si vous révisez encore, écrivez \"en cours\" avec le mois de l'examen.", "Lisez-le à voix haute et vérifiez que chaque mot est vrai."],
          words: [["CV", "un résumé d'une ou deux pages de votre travail, de vos formations et de vos compétences pour les employeurs."]],
          slides: [
            { title: "Là où les employeurs regardent", bullets: ["Une partie Certifications dans votre CV", "Nom complet, organisme, année"] },
            { title: "Reliez-la à votre service", bullets: ["La certification prouve la compétence", "Le service montre que vous l'avez utilisée sous pression"] },
            { title: "Encore en révision ?", bullets: ["\"[Nom], en cours, examen prévu [mois année]\"", "Chaque mot doit être vrai"] }
          ],
          tryIt: "Tâche finale : faites votre plan de certification d'une page avec vos intitulés de postes, la certification visée, la page de la VA consultée, votre plan de révision fait avec l'IA, et la ligne de CV que vous ajouterez quand vous aurez réussi.",
          youCanNow: "planifier, financer, préparer et mettre en valeur une certification qui correspond à votre expérience militaire."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Obtenir la certification",
        questions: [
          { q: "Que donner à un assistant d'IA pour faire un bon plan de révision ?", options: ["Votre numéro de sécurité sociale", "Vos coordonnées bancaires", "Seulement le nom de la certification", "Les sujets de l'examen, vos semaines et vos heures par semaine"], answer: 3, why: "Les sujets et votre temps donnent à l'IA ce qu'il lui faut pour planifier." },
          { q: "Qu'est-ce qu'un programme d'examen ?", options: ["La liste officielle des sujets couverts par l'examen", "Une liste de réponses", "Un examen blanc", "Une offre d'emploi"], answer: 0, why: "L'organisme certificateur le publie pour que vous sachiez quoi étudier." },
          { q: "L'explication de l'IA ne correspond pas au guide officiel. Que faites-vous ?", options: ["Croire l'IA", "Sauter le sujet", "Croire le guide officiel", "Demander à l'IA de se disputer"], answer: 2, why: "Les documents officiels sont la référence de l'examen." },
          { q: "Quelqu'un vous propose un \"brain dump\" de vraies questions d'examen. Que devez-vous faire ?", options: ["L'utiliser la veille", "Le partager avec des amis", "Payer plus pour un plus récent", "Refuser : il enfreint les règles et peut vous coûter la certification"], answer: 3, why: "Les brain dumps enfreignent les règles de certification." },
          { q: "Quelle ligne de CV relie le mieux une certification à votre service ?", options: ["\"Je suis certifié.\"", "\"Bon en informatique.\"", "\"Gestion des accès réseau de 300 utilisateurs comme spécialiste informatique dans l'Army ; [certification] obtenue en 2026.\"", "\"Voir pièce jointe.\""], answer: 2, why: "Elle montre la compétence en action et la preuve." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Certifications et IA pour les vétérans",
    questions: [
      { q: "Pourquoi traduire votre emploi militaire en intitulés de postes civils ?", options: ["Pour cacher votre service", "Pour que les employeurs comprennent vos compétences", "Parce que les codes sont secrets", "Pour rallonger votre CV"], answer: 1, why: "Les intitulés civils utilisent des mots que les employeurs connaissent." },
      { q: "Sur My Next Move for Veterans, vous pouvez :", options: ["Entrer votre emploi militaire et voir des métiers civils semblables", "Demander une pension d'invalidité à la VA", "Acheter des bons d'examen", "Télécharger votre DD-214"], answer: 0, why: "Il relie les emplois militaires à des métiers civils." },
      { q: "Que ne faut-il PAS coller dans un assistant d'IA quand vous traduisez vos missions ?", options: ["Votre intitulé de poste", "Vos missions générales", "Des détails classifiés ou des informations sur l'unité", "Le mot \"leadership\""], answer: 2, why: "Les détails classifiés et d'unité doivent rester privés." },
      { q: "Une certification est :", options: ["La preuve, donnée par un organisme extérieur, que vous avez réussi un examen de compétence", "Un diplôme universitaire", "Un grade militaire", "Une offre d'emploi"], answer: 0, why: "Elle prouve que vous avez réussi un examen de compétence." },
      { q: "Le meilleur premier guide pour choisir une certification est :", options: ["L'examen le plus long", "L'examen le moins cher", "Une vidéo au hasard", "De vraies offres d'emploi pour le poste visé"], answer: 3, why: "Les employeurs nomment ce qu'ils veulent dans leurs offres." },
      { q: "Que veut dire COOL ?", options: ["Civilian Office of Online Learning", "Credentialing Opportunities On-Line", "Certified Officer Operations List", "Career Options Over Lunch"], answer: 1, why: "COOL relie les emplois militaires aux qualifications civiles." },
      { q: "Où confirmer le prix et les règles actuels d'un examen ?", options: ["Dans une discussion avec l'IA", "Sur le site de l'organisme certificateur", "Dans la mémoire d'un ami", "Dans un commentaire sur un réseau social"], answer: 1, why: "L'organisme certificateur a les détails actuels." },
      { q: "Selon va.gov en octobre 2026, le remboursement des frais d'examen par la VA est limité à :", options: ["200 dollars par examen", "20 000 dollars par an", "Aucune limite", "2 000 dollars par examen"], answer: 3, why: "La page disait 2 000 dollars maximum par examen." },
      { q: "Quand la VA rembourse des frais d'examen, qu'arrive-t-il à votre GI Bill ?", options: ["Le montant est retiré de vos droits", "Rien", "Il double", "Il s'arrête"], answer: 0, why: "La VA déduit le montant remboursé de vos droits." },
      { q: "Quel formulaire envoyer pour demander à la VA de rembourser des frais d'examen ?", options: ["W-2", "DD-214", "Le formulaire VA 22-0803", "SF-86"], answer: 2, why: "va.gov cite le formulaire VA 22-0803 pour le remboursement des frais d'examen." },
      { q: "Le remboursement des frais d'examen par la VA couvre :", options: ["Les frais du certificat papier", "Vos en-cas de révision", "Votre trajet jusqu'à l'examen", "Les frais d'examen, y compris l'inscription et les frais administratifs"], answer: 3, why: "Il couvre les frais d'examen, pas le certificat lui-même." },
      { q: "VET TEC 2.0, c'est surtout :", options: ["Une demande d'invalidité", "Un prêt immobilier", "Un programme de la VA pour la formation en haute technologie, avec des places limitées", "Un grade militaire"], answer: 2, why: "Il finance des formations non universitaires en haute technologie, avec un plafond annuel." },
      { q: "Les montants des prestations peuvent changer. Avant de dépenser de l'argent, vous devez :", options: ["Croire un vieil article de blog", "Vérifier la page officielle de va.gov", "Demander seulement à l'IA", "Deviner"], answer: 1, why: "La page officielle a les règles actuelles." },
      { q: "La première chose à rassembler pour un plan de révision avec l'IA est :", options: ["Le programme officiel de l'examen", "Un brain dump", "Votre mot de passe", "Les notes de quelqu'un d'autre"], answer: 0, why: "Le programme liste ce que couvre l'examen." },
      { q: "Un bon plan de révision comprend :", options: ["Seulement la date de l'examen", "Tout réviser la veille", "Un objectif par semaine, une semaine de révision et un examen blanc", "Pas d'agenda"], answer: 2, why: "Des objectifs hebdomadaires et une révision mènent à être prêt." },
      { q: "Quelle demande est la meilleure pour s'entraîner ?", options: ["\"Pose-moi 5 questions sur ce sujet, une à la fois.\"", "\"Donne-moi les vraies réponses de l'examen.\"", "\"Passe l'examen pour moi.\"", "\"Raconte-moi une blague.\""], answer: 0, why: "Elle vous fait pratiquer et attend votre réponse." },
      { q: "Pourquoi éviter les brain dumps ?", options: ["Ils sont trop longs", "Ils sont ennuyeux", "Ils sont gratuits", "Ils enfreignent les règles et peuvent vous coûter la certification"], answer: 3, why: "Les organismes certificateurs les interdisent." },
      { q: "Vous avez raté une question d'entraînement. Une bonne étape suivante est de :", options: ["Arrêter de réviser", "Demander à l'IA une explication simple et vérifier le guide officiel", "Sauter tout le sujet", "Avancer votre examen à demain"], answer: 1, why: "Comprendre l'erreur corrige le point faible." },
      { q: "La partie Certifications de votre CV doit montrer :", options: ["Seulement un logo", "Le nom complet, l'organisme certificateur et l'année", "Votre feuille de score", "Vos heures de révision"], answer: 1, why: "Le nom complet, l'organisme et l'année sont ce que vérifient les employeurs." },
      { q: "Vous n'avez pas encore réussi. Comment indiquer la certification ?", options: ["Dire que vous l'avez", "En citer une autre", "Laisser une ligne vide", "\"[Nom], en cours, examen prévu [mois année]\""], answer: 3, why: "\"En cours\" avec une date est honnête et utile." }
    ]
  }
};
