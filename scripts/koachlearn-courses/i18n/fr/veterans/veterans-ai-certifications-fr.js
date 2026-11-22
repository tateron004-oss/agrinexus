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
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des vétérans et des militaires en transition qui veulent une certification civile pour prouver les compétences acquises sous l'uniforme, souvent en informatique, logistique, maintenance, santé ou sécurité.",
    startingPoint: "Ils ont des écoles militaires, des qualifications, des permis et une formation sur le terrain, et savent utiliser un ordinateur ou un smartphone. La plupart ne savent pas encore quelle certification les employeurs veulent, si la VA peut payer les frais d'examen, ni comment organiser leurs révisions avec le travail et la famille.",
    gap: "Les employeurs civils trient souvent les candidats selon des certifications précises, et un mauvais choix fait perdre du temps et des droits. Les apprenants doivent choisir la certification que demandent de vraies offres d'emploi, vérifier les règles de paiement de la VA sur les pages officielles et suivre un plan de révision réaliste construit avec l'IA, sans tricherie.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes",
      "Appareils : un ordinateur ou un smartphone avec internet et un assistant d'IA gratuit",
      "Les montants des prestations, les formulaires et les règles des examens changent : les apprenants les confirment sur va.gov et sur le site de l'organisme certificateur",
      "OPSEC : aucun détail classifié ni information sur l'unité dans une demande à l'IA",
      "Temps : des leçons d'environ 5 minutes ; le plan de révision lui-même dure plusieurs semaines après le cours"
    ],
    prerequisites: "Aucun. « Introduction à l'IA et au monde du travail de demain » aide d'abord les apprenants à traduire leurs missions."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de votre code d'emploi militaire", action: "repérer deux ou trois intitulés de métiers civils qui correspondent à votre emploi militaire", standard: "avec My Next Move for Veterans et sans aucun détail classifié dans une demande" },
    { id: "O2", condition: "À partir d'au moins cinq vraies offres d'emploi pour le métier visé", action: "repérer la certification que les employeurs demandent le plus et confirmer ses règles sur le site de l'organisme certificateur", standard: "en comptant les offres" },
    { id: "O3", condition: "Pour la certification visée", action: "vérifier sur va.gov si la VA peut rembourser les frais d'examen et comment le demander", standard: "en notant le plafond, les prestations qui y donnent droit et le formulaire d'après la page officielle" },
    { id: "O4", condition: "À partir du programme officiel de l'examen, de vos semaines et de vos heures", action: "créer avec un assistant d'IA un plan de révision semaine par semaine", standard: "avec un objectif chaque semaine, une semaine de révision générale et un examen blanc" },
    { id: "O5", condition: "Quand vous vous entraînez pour l'examen", action: "utiliser l'IA pour vous interroger et expliquer vos erreurs, en vérifiant avec les documents officiels", standard: "sans brain dumps ni questions d'examen divulguées" },
    { id: "O6", condition: "Quand vous avez obtenu la certification ou que vous la préparez", action: "écrire une ligne de CV qui montre ensemble la certification et votre service", standard: "avec le nom complet, l'organisme certificateur et l'année ou la date d'examen" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Choisir la bonne certification",
      lessons: [
        {
          objectives: ["O1"],
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
          youCanNow: "transformer votre code d'emploi militaire en intitulés de postes civils qu'un employeur reconnaîtra.",
          quickCheck: [
            { objective: "O1", q: "Que fait My Next Move for Veterans ?", options: ["Il montre des carrières civiles proches de votre emploi militaire", "Il paie votre certification", "Il écrit votre CV à votre place", "Il réserve votre examen"], answer: 0, why: "Vous indiquez votre emploi militaire et il montre des carrières civiles proches." },
            { objective: "O1", q: "Vous demandez à une IA de décrire vos missions en mots civils. Que laissez-vous en dehors de la demande ?", options: ["Votre intitulé de poste", "Le nombre de personnes que vous encadriez", "Le type de matériel que vous entreteniez", "Les détails classifiés et les informations sur l'unité"], answer: 3, why: "Les missions générales ne posent pas de problème, mais les détails classifiés et les informations sur l'unité ne vont jamais dans une IA publique." }
          ]
        },
        {
          objectives: ["O2"],
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
          youCanNow: "utiliser de vraies offres d'emploi pour choisir la certification que les employeurs veulent le plus.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qu'une certification ?", options: ["Un diplôme universitaire", "Une lettre d'un ami", "La preuve, par un organisme extérieur, que vous avez réussi un examen de compétences", "Un intitulé de poste"], answer: 2, why: "Une certification s'obtient en réussissant un examen fixé par un organisme certificateur extérieur." },
            { objective: "O2", q: "Trois de vos cinq offres d'emploi citent la même certification. Que faites-vous ?", options: ["En choisir une autre qui paraît plus difficile", "L'entourer comme cible et vérifier ses règles sur le site de l'organisme certificateur", "Ignorer les offres et demander à l'IA", "Passer toutes les certifications en même temps"], answer: 1, why: "La certification la plus citée dans de vraies offres est celle que veulent les employeurs ; ses règles actuelles viennent de l'organisme certificateur." }
          ]
        },
        {
          objectives: ["O3"],
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
          youCanNow: "vérifier sur va.gov si la VA peut rembourser des frais d'examen de certification et ce qu'il faut envoyer.",
          quickCheck: [
            { objective: "O3", q: "Que se passe-t-il pour votre GI Bill quand la VA rembourse des frais d'examen ?", options: ["Rien ne change", "Vous recevez des droits en plus", "Votre GI Bill est annulé", "Le montant est pris sur vos droits"], answer: 3, why: "Le remboursement des frais d'examen utilise une partie de vos droits au GI Bill." },
            { objective: "O3", q: "Un message de forum dit que la VA paie entièrement n'importe quels frais d'examen. Que faites-vous ?", options: ["Vérifier les règles actuelles sur la page officielle de va.gov sur les frais d'examen", "Réserver l'examen le plus cher", "Croire le message parce que beaucoup de gens l'ont aimé", "Demander à l'IA de le confirmer"], answer: 0, why: "Les règles et les plafonds des prestations changent : vous les confirmez sur la page officielle de va.gov." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Choisir la bonne certification",
        questions: [
          { objective: "O1", q: "Un recruteur ne sait pas ce que veut dire votre MOS. Que devez-vous faire ?", options: ["Écrire le code en plus gros", "Enlever cet emploi de votre CV", "Le traduire en intitulés et missions civils", "Lui demander de chercher"], answer: 2, why: "Les intitulés et missions civils sont des mots que l'employeur comprend déjà." },
          { objective: "O1", q: "Quel site gratuit permet d'entrer un code d'emploi militaire et de voir des métiers civils ?", options: ["My Next Move for Veterans", "Un réseau social", "Un magasin de jeux vidéo", "Un site météo"], answer: 0, why: "mynextmove.org/vets est l'outil du ministère du Travail pour ça." },
          { objective: "O2", q: "Comment trouver la certification que les employeurs veulent le plus ?", options: ["Choisir la plus chère", "Demander à un ami au hasard", "Passer tous les examens d'un coup", "Compter les certifications citées dans de vraies offres d'emploi"], answer: 3, why: "Les offres d'emploi montrent ce que demandent les employeurs." },
          { objective: "O2", q: "Où vérifier les règles et le prix actuels d'un examen de certification ?", options: ["Seulement dans une discussion avec l'IA", "Sur le site de l'organisme certificateur", "Dans un vieux message de forum", "Dans une publicité"], answer: 1, why: "L'organisme qui fait passer l'examen a les détails actuels." },
          { objective: "O3", q: "Selon va.gov en octobre 2026, qu'est-ce qui est vrai sur le paiement des frais d'examen par la VA ?", options: ["La VA paie le certificat papier", "La VA peut rembourser jusqu'à 2 000 dollars par examen, pris sur vos droits", "Il n'y a pas de limite", "N'importe qui peut le demander sans prestation GI Bill"], answer: 1, why: "La page disait 2 000 dollars maximum par examen, pris sur les droits." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Obtenir la certification",
      lessons: [
        {
          objectives: ["O4"],
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
          youCanNow: "transformer un programme d'examen officiel en plan de révision semaine par semaine avec un assistant d'IA.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce que le programme officiel de l'examen ?", options: ["Un examen blanc trouvé sur un site", "La liste officielle des sujets couverts par l'examen", "Le calendrier d'un groupe d'étude", "Une liste de réponses d'anciens examens"], answer: 1, why: "Le programme officiel de l'organisme certificateur liste exactement ce que couvre l'examen." },
            { objective: "O4", q: "Vous avez 10 semaines et 5 heures par semaine. Que donnez-vous à l'IA pour votre plan de révision ?", options: ["Seulement « aide-moi à réussir »", "Vos identifiants du site d'examen", "Les sujets de l'examen, 10 semaines, 5 heures par semaine et ce que vous savez déjà", "Le plan de révision d'un ami"], answer: 2, why: "Les sujets, le temps et ce que vous savez permettent à l'IA de construire un plan réaliste semaine par semaine." }
          ]
        },
        {
          objectives: ["O5"],
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
          youCanNow: "utiliser l'IA pour vous interroger et expliquer vos erreurs, en la vérifiant avec les documents officiels.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qu'un brain dump ?", options: ["Des questions d'examen réelles divulguées et partagées contre les règles", "Un plan de révision fait par l'IA", "Un examen blanc officiel gratuit", "Une liste des sujets de l'examen"], answer: 0, why: "Les brain dumps partagent de vraies questions d'examen, ce qui enfreint les règles et peut vous faire perdre la certification." },
            { objective: "O5", q: "Vous avez raté une question d'entraînement de l'IA. Que faites-vous ensuite ?", options: ["Sauter ce sujet", "Apprendre par cœur la réponse de l'IA sans vérifier", "Chercher un brain dump", "Demander à l'IA de l'expliquer simplement et vérifier dans le guide officiel"], answer: 3, why: "Les explications de l'IA aident, mais le guide officiel a le dernier mot." }
          ]
        },
        {
          objectives: ["O6"],
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
          youCanNow: "planifier, financer, préparer et mettre en valeur une certification qui correspond à votre expérience militaire.",
          quickCheck: [
            { objective: "O6", q: "Que met-on dans la partie Certifications de votre CV ?", options: ["Seulement le sigle", "Votre note à l'examen", "Le nom complet, l'organisme certificateur et l'année", "Le prix que vous avez payé"], answer: 2, why: "Les employeurs ont besoin du nom complet, de l'organisme qui l'a délivrée et de la date." },
            { objective: "O6", q: "Votre examen est en mars et vous ne l'avez pas encore réussi. Comment l'indiquez-vous ?", options: ["L'indiquer comme réussi", "« [Nom], en cours, examen prévu mars 2027 »", "Ne pas dire que vous révisez", "Écrire « presque certifié »"], answer: 1, why: "L'indiquer « en cours » avec une date d'examen est honnête et montre votre plan." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Obtenir la certification",
        questions: [
          { objective: "O4", q: "Que donner à un assistant d'IA pour faire un bon plan de révision ?", options: ["Votre numéro de sécurité sociale", "Vos coordonnées bancaires", "Seulement le nom de la certification", "Les sujets de l'examen, vos semaines et vos heures par semaine"], answer: 3, why: "Les sujets et votre temps donnent à l'IA ce qu'il lui faut pour planifier." },
          { objective: "O4", q: "Qu'est-ce qu'un programme d'examen ?", options: ["La liste officielle des sujets couverts par l'examen", "Une liste de réponses", "Un examen blanc", "Une offre d'emploi"], answer: 0, why: "L'organisme certificateur le publie pour que vous sachiez quoi étudier." },
          { objective: "O5", q: "L'explication de l'IA ne correspond pas au guide officiel. Que faites-vous ?", options: ["Croire l'IA", "Sauter le sujet", "Croire le guide officiel", "Demander à l'IA de se disputer"], answer: 2, why: "Les documents officiels sont la référence de l'examen." },
          { objective: "O5", q: "Quelqu'un vous propose un \"brain dump\" de vraies questions d'examen. Que devez-vous faire ?", options: ["L'utiliser la veille", "Le partager avec des amis", "Payer plus pour un plus récent", "Refuser : il enfreint les règles et peut vous coûter la certification"], answer: 3, why: "Les brain dumps enfreignent les règles de certification." },
          { objective: "O6", q: "Quelle ligne de CV relie le mieux une certification à votre service ?", options: ["\"Je suis certifié.\"", "\"Bon en informatique.\"", "\"Gestion des accès réseau de 300 utilisateurs comme spécialiste informatique dans l'Army ; [certification] obtenue en 2026.\"", "\"Voir pièce jointe.\""], answer: 2, why: "Elle montre la compétence en action et la preuve." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Certifications et IA pour les vétérans",
    questions: [
      { objective: "O1", q: "Pourquoi traduire votre emploi militaire en intitulés de postes civils ?", options: ["Pour cacher votre service", "Pour que les employeurs comprennent vos compétences", "Parce que les codes sont secrets", "Pour rallonger votre CV"], answer: 1, why: "Les intitulés civils utilisent des mots que les employeurs connaissent." },
      { objective: "O1", q: "Sur My Next Move for Veterans, vous pouvez :", options: ["Entrer votre emploi militaire et voir des métiers civils semblables", "Demander une pension d'invalidité à la VA", "Acheter des bons d'examen", "Télécharger votre DD-214"], answer: 0, why: "Il relie les emplois militaires à des métiers civils." },
      { objective: "O1", q: "Que ne faut-il PAS coller dans un assistant d'IA quand vous traduisez vos missions ?", options: ["Votre intitulé de poste", "Vos missions générales", "Des détails classifiés ou des informations sur l'unité", "Le mot \"leadership\""], answer: 2, why: "Les détails classifiés et d'unité doivent rester privés." },
      { objective: "O2", q: "Une certification est :", options: ["La preuve, donnée par un organisme extérieur, que vous avez réussi un examen de compétence", "Un diplôme universitaire", "Un grade militaire", "Une offre d'emploi"], answer: 0, why: "Elle prouve que vous avez réussi un examen de compétence." },
      { objective: "O2", q: "Le meilleur premier guide pour choisir une certification est :", options: ["L'examen le plus long", "L'examen le moins cher", "Une vidéo au hasard", "De vraies offres d'emploi pour le poste visé"], answer: 3, why: "Les employeurs nomment ce qu'ils veulent dans leurs offres." },
      { objective: "O2", q: "Que veut dire COOL ?", options: ["Civilian Office of Online Learning", "Credentialing Opportunities On-Line", "Certified Officer Operations List", "Career Options Over Lunch"], answer: 1, why: "COOL relie les emplois militaires aux qualifications civiles." },
      { objective: "O2", q: "Où confirmer le prix et les règles actuels d'un examen ?", options: ["Dans une discussion avec l'IA", "Sur le site de l'organisme certificateur", "Dans la mémoire d'un ami", "Dans un commentaire sur un réseau social"], answer: 1, why: "L'organisme certificateur a les détails actuels." },
      { objective: "O3", q: "Selon va.gov en octobre 2026, le remboursement des frais d'examen par la VA est limité à :", options: ["200 dollars par examen", "20 000 dollars par an", "Aucune limite", "2 000 dollars par examen"], answer: 3, why: "La page disait 2 000 dollars maximum par examen." },
      { objective: "O3", q: "Quand la VA rembourse des frais d'examen, qu'arrive-t-il à votre GI Bill ?", options: ["Le montant est retiré de vos droits", "Rien", "Il double", "Il s'arrête"], answer: 0, why: "La VA déduit le montant remboursé de vos droits." },
      { objective: "O3", q: "Quel formulaire envoyer pour demander à la VA de rembourser des frais d'examen ?", options: ["W-2", "DD-214", "Le formulaire VA 22-0803", "SF-86"], answer: 2, why: "va.gov cite le formulaire VA 22-0803 pour le remboursement des frais d'examen." },
      { objective: "O3", q: "Le remboursement des frais d'examen par la VA couvre :", options: ["Les frais du certificat papier", "Vos en-cas de révision", "Votre trajet jusqu'à l'examen", "Les frais d'examen, y compris l'inscription et les frais administratifs"], answer: 3, why: "Il couvre les frais d'examen, pas le certificat lui-même." },
      { objective: "O3", q: "VET TEC 2.0, c'est surtout :", options: ["Une demande d'invalidité", "Un prêt immobilier", "Un programme de la VA pour la formation en haute technologie, avec des places limitées", "Un grade militaire"], answer: 2, why: "Il finance des formations non universitaires en haute technologie, avec un plafond annuel." },
      { objective: "O3", q: "Les montants des prestations peuvent changer. Avant de dépenser de l'argent, vous devez :", options: ["Croire un vieil article de blog", "Vérifier la page officielle de va.gov", "Demander seulement à l'IA", "Deviner"], answer: 1, why: "La page officielle a les règles actuelles." },
      { objective: "O4", q: "La première chose à rassembler pour un plan de révision avec l'IA est :", options: ["Le programme officiel de l'examen", "Un brain dump", "Votre mot de passe", "Les notes de quelqu'un d'autre"], answer: 0, why: "Le programme liste ce que couvre l'examen." },
      { objective: "O4", q: "Un bon plan de révision comprend :", options: ["Seulement la date de l'examen", "Tout réviser la veille", "Un objectif par semaine, une semaine de révision et un examen blanc", "Pas d'agenda"], answer: 2, why: "Des objectifs hebdomadaires et une révision mènent à être prêt." },
      { objective: "O5", q: "Quelle demande est la meilleure pour s'entraîner ?", options: ["\"Pose-moi 5 questions sur ce sujet, une à la fois.\"", "\"Donne-moi les vraies réponses de l'examen.\"", "\"Passe l'examen pour moi.\"", "\"Raconte-moi une blague.\""], answer: 0, why: "Elle vous fait pratiquer et attend votre réponse." },
      { objective: "O5", q: "Pourquoi éviter les brain dumps ?", options: ["Ils sont trop longs", "Ils sont ennuyeux", "Ils sont gratuits", "Ils enfreignent les règles et peuvent vous coûter la certification"], answer: 3, why: "Les organismes certificateurs les interdisent." },
      { objective: "O5", q: "Vous avez raté une question d'entraînement. Une bonne étape suivante est de :", options: ["Arrêter de réviser", "Demander à l'IA une explication simple et vérifier le guide officiel", "Sauter tout le sujet", "Avancer votre examen à demain"], answer: 1, why: "Comprendre l'erreur corrige le point faible." },
      { objective: "O6", q: "La partie Certifications de votre CV doit montrer :", options: ["Seulement un logo", "Le nom complet, l'organisme certificateur et l'année", "Votre feuille de score", "Vos heures de révision"], answer: 1, why: "Le nom complet, l'organisme et l'année sont ce que vérifient les employeurs." },
      { objective: "O6", q: "Vous n'avez pas encore réussi. Comment indiquer la certification ?", options: ["Dire que vous l'avez", "En citer une autre", "Laisser une ligne vide", "\"[Nom], en cours, examen prévu [mois année]\""], answer: 3, why: "\"En cours\" avec une date est honnête et utile." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      4,
      6,
      8,
      12,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Intitulés de métiers civils",
        objective: "O1",
        notYet: "Aucun intitulé civil, ou des intitulés qui ne correspondent pas à l'emploi militaire.",
        meets: "L'emploi militaire et deux intitulés de métiers civils correspondants.",
        exceeds: "Les intitulés figurent à la fois dans My Next Move for Veterans et dans la description de l'IA."
      },
      {
        name: "Certification visée",
        objective: "O2",
        notYet: "La certification a été devinée ou choisie à partir d'une publicité.",
        meets: "La certification qui apparaît le plus dans au moins cinq vraies offres d'emploi.",
        exceeds: "Montre le décompte et la page de l'organisme certificateur consultée pour les règles actuelles."
      },
      {
        name: "Paiement de la VA vérifié",
        objective: "O3",
        notYet: "Aucune vérification auprès de la VA, ou des informations venant seulement d'un forum ou de l'IA.",
        meets: "Si la VA peut payer les frais d'examen, avec la page officielle de va.gov nommée.",
        exceeds: "Indique aussi le formulaire et le fait que le remboursement utilise des droits."
      },
      {
        name: "Plan de révision",
        objective: "O4",
        notYet: "Aucun plan, ou un plan sans semaines ni sujets.",
        meets: "Un plan semaine par semaine tiré du programme officiel de l'examen, avec une semaine de révision générale et un examen blanc.",
        exceeds: "Le plan correspond aux heures réelles de l'apprenant et a une date d'examen fixée."
      },
      {
        name: "Ligne de CV",
        objective: "O6",
        notYet: "Aucune ligne de CV, ou une ligne qui annonce une certification pas encore obtenue.",
        meets: "Une ligne de CV vraie avec le nom complet, l'organisme et l'année ou la date d'examen, reliée au service.",
        exceeds: "Comprend une courte histoire d'un résultat obtenu pendant le service que la certification confirme."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent l'exercice final (grille d'évaluation)",
      "Apprenants qui s'inscrivent à l'examen de certification dans les 60 jours (enquête de suivi)",
      "Apprenants qui obtiennent leur certification dans les 6 mois",
      "Apprenants qui postulent dans les 90 jours à un emploi qui demande la certification"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur ou un smartphone avec internet",
      "Un assistant d'IA gratuit : ChatGPT, Microsoft Copilot ou Google Gemini",
      "Les sites gratuits My Next Move for Veterans, va.gov et de l'organisme certificateur, et cinq vraies offres d'emploi",
      "Du papier ou un document pour le plan de certification d'une page",
      "Environ 60 minutes au total pour le cours ; le plan de révision continue ensuite"
    ],
    facilitatorNotes: [
      "Regroupez les apprenants par domaine visé (informatique, logistique, maintenance, santé) pour qu'ils partagent offres d'emploi et programmes d'examen.",
      "Faites confirmer chaque montant et chaque formulaire sur va.gov pendant la séance plutôt que de croire des notes ou l'IA.",
      "Mettez clairement en garde contre les brain dumps ; ils peuvent faire perdre la certification.",
      "Notez le plan de certification avec la grille, et donnez un retour sur une seule ligne « Pas encore » à la fois.",
      "Prévoyez un point à 30 jours pour que les apprenants indiquent l'avancement de leurs révisions et leur date d'examen."
    ]
  }
};
