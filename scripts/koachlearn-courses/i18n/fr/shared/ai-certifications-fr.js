"use strict";

// Koach Learn course (shared, bonus), French translation of "AI Certifications: Which to Get and How to Prepare". Shape and rules: ../../../README.md (Translations).
// Facts as in the English course (checked on the providers' official pages on 27 October 2026); the course tells students to re-check before registering.

module.exports = {
  id: "ai-certifications-fr",
  lang: "fr",
  translationOf: "ai-certifications",
  category: "Re-Entry",
  name: "Certifications en IA : lesquelles choisir et comment se préparer",
  skills: "Associer une certification à un objectif d'emploi, Lire une page officielle d'examen, Comparer le coût et le temps, Trouver des formations et des tests d'entraînement gratuits, Faire un plan de révision, Être prêt le jour de l'examen",
  outcome: "choisir un certificat ou une certification en IA qui correspond à un vrai objectif d'emploi, lire sa page officielle d'examen pour trouver le coût, le format et les compétences évaluées, construire un plan de révision avec les formations officielles gratuites, et vous préparer pour le jour de l'examen.",
  about: [
    "Les certificats et les certifications montrent aux employeurs que vous avez une compétence, ce qui peut beaucoup aider si vous avez des trous dans votre parcours, pas de diplôme ou un casier judiciaire. En IA, de grandes entreprises technologiques et des organismes de formation proposent désormais des titres pour débutants.",
    "Ce cours s'adresse aux personnes qui sortent de prison, aux demandeurs d'emploi suivis par des programmes d'insertion et aux personnes en reconversion. Il n'enseigne pas le contenu des examens. Il vous apprend à choisir le bon titre, à éviter de gaspiller de l'argent et à vous préparer intelligemment.",
    "Les noms, les prix et les détails des examens changent souvent ; vous apprendrez donc à vérifier la page officielle à chaque fois. Chaque leçon dure environ cinq minutes avec une tâche « Essayez maintenant », un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Choisissez un titre en IA qui correspond à une vraie offre d'emploi qui vous intéresse. À partir de sa page officielle, notez le nom exact, l'organisme, le coût, la durée et le format de l'examen, les compétences évaluées, les pièces d'identité exigées et la durée de validité. Faites ensuite un plan de révision sur quatre semaines avec les formations officielles gratuites et au moins un test d'entraînement, et réservez une séance d'entraînement ou une date d'examen.",
  chapters: [
    {
      name: "Chapitre 1 : Choisir le bon titre",
      lessons: [
        {
          title: "Certificats ou certifications, et pourquoi ils comptent",
          minutes: 4,
          goal: "Distinguer un certificat de formation d'une certification surveillée et expliquer ce que chacun montre à un employeur.",
          text: [
            "Un certificat de réussite montre que vous avez terminé une formation. Une certification veut en général dire que vous avez réussi un examen surveillé qui évalue vos compétences. Les employeurs accordent souvent plus de valeur aux certifications, mais un bon certificat montre quand même votre effort et vos nouvelles compétences.",
            "Les titres en IA vont du niveau débutant (« qu'est-ce que l'IA et comment l'utiliser au travail ») au niveau technique (« construire des solutions d'IA dans le cloud »). Les titres pour débutants aident pour les emplois de bureau, de service client, de vente et d'administration. Les titres techniques aident pour les emplois de l'informatique et du cloud, et demandent souvent d'abord des bases en programmation ou en cloud.",
            "Un titre ne garantit pas un emploi. Il marche mieux avec un CV qui montre comment vous avez utilisé la compétence, même dans un petit projet. Associez-le à une vraie pratique."
          ],
          words: [["Certificat", "la preuve que vous avez terminé une formation ou un programme."], ["Certification", "un titre obtenu en réussissant un examen qui évalue vos compétences."], ["Examen surveillé", "un test surveillé par une personne ou une caméra pour empêcher la triche."], ["Titre", "tout certificat, certification ou licence qui prouve une compétence."]],
          slides: [
            { title: "Certificat ou certification", bullets: ["Certificat : vous avez terminé une formation", "Certification : vous avez réussi un examen surveillé"] },
            { title: "Débutant ou technique", bullets: ["Débutant : utiliser l'IA au travail", "Technique : construire des solutions d'IA ; peut demander de programmer"] },
            { title: "Pas une garantie d'emploi", bullets: ["L'associer à une vraie pratique", "Montrer comment vous avez utilisé la compétence"] }
          ],
          tryIt: "Écrivez un emploi que vous voulez. À côté, notez si un titre en IA pour débutant ou un titre technique convient le mieux, et pourquoi.",
          youCanNow: "distinguer un certificat d'une certification et choisir le bon niveau pour un objectif d'emploi."
        },
        {
          title: "Tour d'horizon de titres en IA connus pour débutants",
          minutes: 6,
          goal: "Comparer plusieurs titres en IA pour débutants selon l'organisme, le coût, le temps et le niveau.",
          text: [
            "Ces informations ont été vérifiées sur les pages officielles en octobre 2026 ; revérifiez toujours avant de payer. Google AI Essentials est une formation à son rythme de Google sur Coursera, de moins de 5 heures, avec un certificat ; aux États-Unis et au Canada, elle coûte 49 $ par mois après 7 jours d'essai gratuit. Elle convient à ceux qui veulent utiliser des outils d'IA au travail.",
            "L'AWS Certified AI Practitioner est une certification de base d'Amazon Web Services : un examen de 90 minutes, 65 questions, et 100 $ de frais. La certification Generative AI Leader de Google Cloud n'a aucun prérequis : 90 minutes, 50 à 60 questions, 99 $, valable 3 ans, passée en ligne ou dans un centre d'examen.",
            "La certification Microsoft Certified: Azure AI Fundamentals utilise désormais l'examen AI-901, mis à jour en avril 2026. Son prix dépend de votre pays, le score de réussite est de 700, et elle demande maintenant des bases en Python et en Azure : elle est donc plus technique qu'avant. Microsoft propose une évaluation d'entraînement gratuite une fois connecté."
          ],
          words: [["De base (foundational)", "le premier niveau d'un parcours de certification."], ["Prérequis", "ce que vous devez avoir ou savoir avant de commencer."]],
          slides: [
            { title: "Google AI Essentials", bullets: ["Formation Google sur Coursera, moins de 5 heures", "États-Unis/Canada : 49 $/mois après 7 jours d'essai", "Certificat ; utiliser l'IA au travail"] },
            { title: "AWS Certified AI Practitioner", bullets: ["Certification AWS de base", "90 minutes, 65 questions, 100 $"] },
            { title: "Google Cloud Generative AI Leader", bullets: ["Aucun prérequis", "90 minutes, 50 à 60 questions, 99 $", "Valable 3 ans"] },
            { title: "Azure AI Fundamentals (AI-901)", bullets: ["Mise à jour en avril 2026 ; prix selon le pays", "Score de réussite 700 ; bases en Python attendues", "Évaluation d'entraînement gratuite après connexion"] }
          ],
          sources: [{ name: "Grow with Google : Google AI Essentials", url: "https://grow.google/ai-essentials/" }, { name: "AWS Certified AI Practitioner", url: "https://aws.amazon.com/certification/certified-ai-practitioner/" }, { name: "Google Cloud : Generative AI Leader", url: "https://cloud.google.com/learn/certification/generative-ai-leader" }, { name: "Microsoft Learn : examen AI-901", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-901/" }],
          tryIt: "Ouvrez la page officielle de deux de ces titres. Pour chacun, notez le nom exact, l'organisme, le coût, la durée et le public visé. Notez ce qui a changé depuis l'écriture de ce cours.",
          youCanNow: "comparer des titres en IA pour débutants à l'aide de leurs pages officielles."
        },
        {
          title: "Associer un titre à un emploi et à un budget",
          minutes: 5,
          goal: "Choisir un titre à partir de vraies offres d'emploi, de votre budget et de votre temps.",
          text: [
            "Partez des emplois, pas des titres. Cherchez les emplois que vous voulez et comptez quels titres et quelles compétences apparaissent dans les offres. Si plusieurs citent une plateforme cloud, le titre de cette plateforme peut valoir la peine.",
            "Comparez ensuite le coût total (frais, frais de repassage, formation éventuelle), le temps de préparation et votre niveau actuel. Si vous débutez complètement, une courte formation pour débutants d'abord peut vous éviter de payer un examen raté.",
            "Cherchez de l'aide pour payer. Les programmes d'insertion, les American Job Centers (centres publics d'aide à l'emploi aux États-Unis), les programmes de réinsertion, les aides aux anciens militaires, les bibliothèques et certains employeurs peuvent payer la formation ou l'examen ; certains organismes offrent des réductions ou une aide financière. Demandez avant de payer, et ne payez jamais quelqu'un qui « garantit » la réussite ou vend les réponses de l'examen : c'est une arnaque et cela peut faire annuler votre titre."
          ],
          steps: ["Trouvez cinq offres d'emploi qui vous intéressent.", "Comptez les titres et compétences qu'elles citent.", "Comparez le coût total, le temps et le niveau de vos deux premiers choix.", "Demandez à votre programme d'insertion ou de réinsertion s'il peut payer.", "Choisissez-en un."],
          words: [["Frais de repassage", "ce que vous payez pour repasser un examen si vous ne l'avez pas réussi."], ["Aide financière", "une aide pour payer des études ou une formation."]],
          slides: [
            { title: "Partir des emplois", bullets: ["Trouver cinq offres d'emploi", "Compter les titres qu'elles citent"] },
            { title: "Comparer le coût total", bullets: ["Frais, repassages, formation", "Temps et niveau actuel"] },
            { title: "Trouver de l'aide pour payer", bullets: ["Programmes d'insertion, de réinsertion, anciens militaires", "Employeurs, bibliothèques, réductions des organismes", "Jamais de réussite « garantie » payante"] }
          ],
          tryIt: "Trouvez cinq offres d'emploi qui vous intéressent et listez les titres en IA ou en technologie qu'elles citent. Choisissez un titre et notez son coût total et qui pourrait aider à le payer.",
          youCanNow: "choisir un titre adapté à de vrais emplois, à votre budget et à votre temps."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Choisir le bon titre",
        questions: [
          { q: "Quelle est la principale différence entre un certificat et une certification ?", options: ["Il n'y a aucune différence", "Un certificat a toujours plus de valeur", "Une certification demande en général de réussir un examen surveillé", "Les certifications n'ont jamais d'examen"], answer: 2, why: "Les certifications évaluent les compétences par un examen surveillé." },
          { q: "Selon la page d'AWS, les frais de l'examen AWS Certified AI Practitioner sont de :", options: ["100 $", "1 000 $", "Gratuit", "10 $"], answer: 0, why: "AWS indique 100 $ de frais." },
          { q: "La page de quel titre dit qu'il demande maintenant des bases en Python et en Azure ?", options: ["Google AI Essentials", "Aucun n'a de page", "Une carte d'hygiène alimentaire", "Microsoft Azure AI Fundamentals (AI-901)"], answer: 3, why: "La page de l'AI-901 cite des bases en Python et en Azure." },
          { q: "Par où commencer pour choisir un titre ?", options: ["Le plus cher", "De vraies offres d'emploi qui vous intéressent", "Ce que conseille un inconnu", "Une publicité au hasard"], answer: 1, why: "Les offres d'emploi montrent ce que veulent les employeurs." },
          { q: "Quelqu'un propose de vous vendre les réponses d'un examen qui « garantissent » la réussite. C'est :", options: ["Un raccourci malin", "Une arnaque qui peut faire annuler votre titre", "Permis", "Une formation gratuite"], answer: 1, why: "Acheter des réponses, c'est tricher, et c'est souvent une arnaque." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Se préparer et réussir",
      lessons: [
        {
          title: "Lire la page officielle de l'examen",
          minutes: 5,
          goal: "Reporter les informations clés d'une page officielle d'examen sur une fiche d'une page.",
          text: [
            "La page officielle de l'examen est la seule source à laquelle vous devez vous fier. Cherchez : le nom exact et le code de l'examen, le prix, la durée et le nombre de questions, le score de réussite, les langues, la façon de le passer (en ligne ou en centre d'examen), les compétences évaluées et leur poids, et la durée de validité du titre.",
            "La liste des compétences évaluées, parfois appelée guide de l'examen ou guide d'étude, est votre carte. Si un sujet représente 40 % de l'examen, il mérite environ 40 % de votre temps de révision.",
            "Vérifiez aussi les règles : pièce d'identité exigée (souvent une pièce officielle avec photo, en cours de validité, au nom qui correspond à votre inscription), règles de la pièce pour l'examen en ligne, délais pour changer de date et règles de repassage. Si votre situation d'identité est compliquée, réglez-la tôt."
          ],
          steps: ["Ouvrez la page officielle de l'examen chez l'organisme.", "Notez le nom, le code, le prix, la durée, le nombre de questions et le score de réussite.", "Recopiez les compétences évaluées avec leurs pourcentages.", "Notez les règles sur l'identité, l'examen et le repassage.", "Gardez le lien de la page et la date de votre vérification."],
          words: [["Code d'examen", "le code court d'un examen, comme AI-901."], ["Compétences évaluées", "la liste des sujets d'un examen, souvent avec des pourcentages."], ["Score de réussite", "le score qu'il faut obtenir pour réussir."]],
          slides: [
            { title: "Se fier à la page officielle", bullets: ["Nom, code, prix", "Durée, questions, score de réussite", "En ligne ou en centre d'examen"] },
            { title: "Compétences évaluées = votre carte", bullets: ["Les sujets et leur poids", "40 % de l'examen = 40 % du temps de révision"] },
            { title: "Vérifier les règles tôt", bullets: ["Pièce d'identité avec photo à votre nom", "Règles de la pièce pour l'examen en ligne", "Règles de report et de repassage"] }
          ],
          tryIt: "Faites une fiche d'une page pour le titre choisi à partir de sa page officielle, avec les compétences évaluées et leurs pourcentages, les règles d'identité et la date de votre vérification.",
          youCanNow: "lire une page officielle d'examen et en faire une fiche."
        },
        {
          title: "Construire un plan de révision avec les formations gratuites et l'IA",
          minutes: 6,
          goal: "Faire un plan de révision sur quatre semaines avec les formations officielles gratuites, l'IA comme tuteur et des tests d'entraînement.",
          text: [
            "La plupart des organismes offrent des formations gratuites. Microsoft Learn propose des parcours d'apprentissage gratuits et une évaluation d'entraînement gratuite pour beaucoup d'examens ; AWS Skill Builder et Google offrent aussi des formations gratuites. Commencez par là avant de payer quoi que ce soit.",
            "Utilisez l'IA comme tuteur, pas pour tricher. Demandez : « Explique [sujet de la liste des compétences] avec des mots simples et un exemple concret. Puis pose-moi cinq questions à choix multiples et explique mes erreurs. » Vérifiez tout ce qui semble bizarre dans la formation officielle, car l'IA peut se tromper ou être dépassée.",
            "Prévoyez quatre semaines : les semaines 1 à 3 couvrent les sujets dans l'ordre de leur poids à l'examen, un peu chaque jour ; la semaine 4 est consacrée aux tests d'entraînement et aux points faibles. Visez un bon score au test d'entraînement officiel avant de réserver le vrai examen."
          ],
          steps: ["Listez les compétences évaluées et leur poids.", "Trouvez la formation officielle gratuite pour chacune.", "Prévoyez 30 à 60 minutes par jour pendant les semaines 1 à 3, les sujets les plus lourds d'abord.", "Utilisez l'IA pour vous expliquer et vous interroger ; vérifiez avec la formation officielle.", "Semaine 4 : tests d'entraînement et points faibles."],
          words: [["Parcours d'apprentissage", "une suite de leçons, dans l'ordre, sur un même sujet."], ["Test d'entraînement", "un examen d'exemple qui montre à quoi ressemble le vrai."]],
          slides: [
            { title: "D'abord les formations gratuites", bullets: ["Microsoft Learn, AWS Skill Builder, Google", "Tests d'entraînement gratuits quand ils existent"] },
            { title: "L'IA comme tuteur", bullets: ["Expliquer simplement avec des exemples", "M'interroger et expliquer mes erreurs", "Vérifier avec la formation officielle"] },
            { title: "Un plan sur quatre semaines", bullets: ["Semaines 1 à 3 : sujets selon leur poids", "Semaine 4 : tests d'entraînement et points faibles", "Réserver quand les scores d'entraînement sont bons"] }
          ],
          tryIt: "Écrivez un plan de révision sur quatre semaines pour votre titre. Puis demandez à un assistant d'IA d'expliquer un sujet de la liste des compétences et de vous poser cinq questions.",
          youCanNow: "construire un plan de révision avec des formations gratuites, l'IA comme tuteur et des tests d'entraînement."
        },
        {
          title: "Être prêt le jour de l'examen et utiliser votre titre",
          minutes: 5,
          goal: "Se préparer pour le jour de l'examen et ajouter votre nouveau titre à votre CV et à vos profils.",
          text: [
            "Avant le jour de l'examen, testez votre installation si vous le passez en ligne : la plupart des organismes ont une vérification du système. Dégagez votre bureau et votre pièce comme l'exigent les règles. Pour un centre d'examen, prévoyez votre trajet et arrivez en avance avec la bonne pièce d'identité.",
            "Pendant l'examen : lisez chaque question deux fois, répondez d'abord aux faciles, marquez les difficiles pour y revenir, et ne laissez rien en blanc sauf si les règles disent que les mauvaises réponses font perdre des points.",
            "Après la réussite, ajoutez le titre à votre CV sous « Certifications » avec le nom exact, l'organisme et la date, et réclamez le badge numérique que l'organisme propose pour le partager en ligne. Si vous n'avez pas réussi, lisez le relevé de résultats, travaillez les points faibles et utilisez les règles de repassage. Beaucoup de gens réussissent au deuxième essai."
          ],
          steps: ["Faites la vérification du système en ligne ou prévoyez votre trajet.", "Préparez votre pièce d'identité et votre pièce comme l'exigent les règles.", "À l'examen, lisez deux fois, faites d'abord les faciles, marquez les difficiles.", "Après la réussite, ajoutez-le à votre CV avec le nom exact, l'organisme et la date.", "Sinon, travaillez les points faibles du relevé de résultats et repassez-le."],
          words: [["Vérification du système", "un test qui vérifie que votre ordinateur, votre caméra et votre internet marchent pour un examen en ligne."], ["Badge numérique", "une image en ligne qui prouve que vous avez obtenu un titre."], ["Relevé de résultats", "les résultats qui montrent votre performance sur chaque partie de l'examen."]],
          slides: [
            { title: "Avant le jour de l'examen", bullets: ["En ligne : faire la vérification du système", "Centre d'examen : prévoir le trajet, arriver tôt", "Bonne pièce d'identité, pièce dégagée"] },
            { title: "Pendant l'examen", bullets: ["Lire chaque question deux fois", "Les faciles d'abord ; marquer les difficiles", "Ne pas laisser de blancs"] },
            { title: "Après l'examen", bullets: ["Réussi : l'ajouter au CV et réclamer le badge", "Pas encore : travailler les points faibles et repasser"] }
          ],
          tryIt: "Tâche finale : complétez votre fiche et votre plan de révision sur quatre semaines, passez un test d'entraînement officiel ou un quiz avec l'IA, et réservez une date de début de révision ou d'examen. Écrivez comment le titre apparaîtra sur votre CV.",
          youCanNow: "choisir un titre en IA adapté à votre objectif d'emploi, vous y préparer et l'utiliser."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Se préparer et réussir",
        questions: [
          { q: "Quelle est la source la plus fiable pour le prix et le format d'un examen ?", options: ["Une publication sur les réseaux sociaux", "Une réponse d'un chat d'IA", "Le souvenir d'un ami", "La page officielle de l'examen chez l'organisme"], answer: 3, why: "Les pages officielles ont les informations à jour." },
          { q: "Un sujet représente 40 % de l'examen. Quelle part du temps de révision doit-il avoir ?", options: ["Environ 40 %", "Aucune", "5 %", "Tout le temps"], answer: 0, why: "Le temps de révision doit suivre le poids à l'examen." },
          { q: "Comment utiliser l'IA pendant les révisions ?", options: ["Pour passer l'examen à votre place", "Pour trouver des réponses qui ont fuité", "Comme un tuteur qui explique et interroge, vérifié avec la formation officielle", "Pas du tout"], answer: 2, why: "L'IA peut servir de tuteur, mais vous devez la vérifier et ne jamais tricher." },
          { q: "Que faire avant un examen surveillé en ligne ?", options: ["Rien", "Inviter des amis à aider", "Ouvrir des notes sur votre bureau", "Faire la vérification du système de l'organisme"], answer: 3, why: "La vérification du système évite les problèmes techniques." },
          { q: "Vous n'avez pas réussi. Quelle est la meilleure étape suivante ?", options: ["Abandonner pour toujours", "Acheter les réponses de l'examen", "Travailler les points faibles du relevé de résultats et repasser", "Mentir sur votre CV"], answer: 2, why: "Beaucoup réussissent au deuxième essai avec des révisions ciblées." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Certifications en IA : lesquelles choisir et comment se préparer",
    questions: [
      { q: "Un certificat de réussite montre :", options: ["Que vous avez réussi un examen surveillé", "Que vous avez terminé une formation", "Que vous avez le droit d'exercer comme avocat", "Rien"], answer: 1, why: "Les certificats montrent qu'une formation est terminée." },
      { q: "Un examen surveillé est :", options: ["Surveillé par une personne ou une caméra pour empêcher la triche", "Un quiz à livre ouvert avec des amis", "Une enquête", "Un entretien d'embauche"], answer: 0, why: "La surveillance garde l'examen équitable." },
      { q: "Un titre garantit-il un emploi ?", options: ["Oui, toujours", "Seulement le lundi", "Non, il faut l'associer à une vraie pratique et à un bon CV", "Seulement s'il est cher"], answer: 2, why: "Les titres aident mais ne garantissent pas d'emploi." },
      { q: "Selon la page de Google, sur quelle plateforme est proposé Google AI Essentials ?", options: ["Coursera", "Une banque", "Une chaîne de télévision", "Un opérateur téléphonique"], answer: 0, why: "Google le propose sur Coursera." },
      { q: "Selon Google, combien de temps dure la formation Google AI Essentials ?", options: ["Quatre ans", "Cinq minutes", "Deux semestres", "Moins de 5 heures"], answer: 3, why: "Google indique moins de 5 heures, à son rythme." },
      { q: "Combien de temps dure l'examen AWS Certified AI Practitioner ?", options: ["3 jours", "8 heures", "10 minutes", "90 minutes"], answer: 3, why: "AWS indique 90 minutes." },
      { q: "Quels prérequis indique la certification Generative AI Leader de Google Cloud ?", options: ["Un diplôme d'informatique", "Aucun", "Cinq ans de programmation", "Une autre certification Google"], answer: 1, why: "Google n'indique aucun prérequis." },
      { q: "Selon Google Cloud, combien de temps la certification Generative AI Leader est-elle valable ?", options: ["Pour toujours", "1 mois", "10 ans", "3 ans"], answer: 3, why: "Google indique une validité de 3 ans." },
      { q: "L'examen de Microsoft Certified: Azure AI Fundamentals est désormais :", options: ["AI-901", "AZ-104", "Il n'y a pas d'examen", "PMP"], answer: 0, why: "Microsoft indique l'AI-901 comme examen requis." },
      { q: "Le prix de l'examen Azure AI Fundamentals :", options: ["Est toujours gratuit", "Est de 5 $ partout", "Dépend du pays où vous le passez", "Se paie en cartes cadeaux"], answer: 2, why: "Microsoft fixe le prix des examens selon le pays ou la région." },
      { q: "Pourquoi revérifier les pages officielles avant de payer ?", options: ["Les pages ne changent jamais", "Pour perdre du temps", "Ce n'est pas nécessaire", "Les noms, prix et détails changent"], answer: 3, why: "Les titres sont souvent mis à jour." },
      { q: "Pour choisir un titre, commencez par :", options: ["Le logo le plus voyant", "L'examen le plus long", "Les offres d'emploi qui vous intéressent", "Un choix au hasard"], answer: 2, why: "Les besoins des employeurs guident le choix." },
      { q: "Le coût total d'un titre comprend :", options: ["Seulement les frais d'examen", "Les frais d'examen, les repassages et la formation", "Rien", "Votre loyer"], answer: 1, why: "Prévoyez tous les coûts." },
      { q: "Qui pourrait aider à payer la formation ou l'examen ?", options: ["Les programmes d'insertion, de réinsertion ou pour anciens militaires, ou un employeur", "Jamais personne", "Des escrocs", "Un inconnu au téléphone"], answer: 0, why: "Beaucoup de programmes financent la formation." },
      { q: "La liste des compétences évaluées est :", options: ["Une liste d'offres d'emploi", "Les réponses de l'examen", "Votre carte de ce qu'il faut réviser", "Facultative à lire"], answer: 2, why: "Elle montre ce que l'examen évalue." },
      { q: "Quel problème d'identité faut-il régler tôt ?", options: ["Vérifier que votre pièce d'identité avec photo correspond au nom de l'inscription", "Votre couleur préférée", "Votre coque de téléphone", "La police de votre e-mail"], answer: 0, why: "Une différence de nom peut vous empêcher de passer l'examen." },
      { q: "Où chercher d'abord une formation ?", options: ["Seulement dans des stages intensifs non officiels et chers", "Sur des sites de réponses qui ont fuité", "Nulle part", "Dans les formations officielles gratuites de l'organisme"], answer: 3, why: "Les formations officielles gratuites correspondent à l'examen." },
      { q: "L'IA explique un sujet autrement que la formation officielle. Vous devez :", options: ["Croire l'IA", "Croire la formation officielle", "Sauter le sujet", "Signaler l'organisme"], answer: 1, why: "L'IA peut se tromper ou être dépassée." },
      { q: "Pendant l'examen, une bonne stratégie est :", options: ["Passer tout votre temps sur la question 1", "Répondre d'abord aux questions faciles et marquer les difficiles", "Laisser beaucoup de blancs", "Deviner sans lire"], answer: 1, why: "Cela utilise bien votre temps." },
      { q: "Après la réussite, inscrivez le titre sur votre CV avec :", options: ["Un score inventé", "Seulement « trucs d'IA »", "Rien", "Le nom exact, l'organisme et la date"], answer: 3, why: "Des détails exacts sont vérifiables et professionnels." }
    ]
  }
};
