"use strict";

// Koach Learn course (French translation of shared/esl-workplace-english.js). See scripts/koachlearn-courses/README.md, "Translations".
// ESL course: every English phrase being taught stays in English, inside double quotes; only the explanations are translated.

module.exports = {
  id: "esl-workplace-english-fr",
  lang: "fr",
  translationOf: "esl-workplace-english",
  category: "Workforce Development",
  name: "L'anglais au travail (ESL)",
  skills: "Répondre aux questions d'un entretien d'embauche, Mots et panneaux de sécurité, Signaler un problème ou une blessure, Demander de l'aide et vérifier les consignes, Parler des horaires, Aider les clients",
  outcome: "utiliser un anglais court et clair au travail : répondre aux questions courantes d'un entretien, comprendre les mots de sécurité et signaler un problème, demander de l'aide et vérifier les consignes, parler de vos horaires, et accueillir et aider un client.",
  about: [
    "Ce cours s'adresse aux adultes qui apprennent l'anglais et qui veulent trouver un emploi ou progresser dans celui qu'ils ont déjà : dans les entrepôts, les cuisines, le nettoyage, le bâtiment, les magasins, l'aide à la personne, les usines et les bureaux.",
    "Vous apprenez l'anglais dont vous avez le plus besoin au travail : des réponses pour un entretien d'embauche, les mots de sécurité, comment signaler un problème, comment demander de l'aide, comment parler de vos horaires et comment parler aux clients. Chaque leçon contient des phrases à dire, un exemple de conversation et un jeu de rôle à faire chez vous.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, lisez l'exemple de conversation à voix haute, puis faites l'activité « Essayez maintenant ». Il y a deux questions rapides après chaque leçon, un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin.",
    "À la fin, vous écrivez votre propre script d'anglais pour le travail que vous voulez, et vous le pratiquez à voix haute."
  ],
  finalTask: "Écrivez votre script d'anglais pour le travail que vous voulez, sur une page : (1) une réponse courte à \"Tell me about yourself.\" (3 à 4 phrases), (2) des réponses à deux autres questions d'entretien, (3) trois mots ou panneaux de sécurité de ce métier, avec leur sens, (4) un message pour prévenir que vous êtes malade ou en retard, et (5) deux phrases pour aider un client ou demander de l'aide à un collègue. Pratiquez tout le script à voix haute ou en jeu de rôle avec un partenaire, et enregistrez-vous si vous le pouvez.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des adultes qui apprennent l'anglais comme deuxième langue et qui cherchent un emploi ou travaillent déjà aux États-Unis : immigrés et réfugiés, jeunes adultes, personnes qui sortent de prison, et travailleurs dans des emplois de premier niveau qui veulent progresser.",
    startingPoint: "Savent saluer et dire des phrases simples en anglais. Comprennent quelques mots du travail mais se sentent nerveux en entretien, au téléphone et avec les responsables ou les clients. Beaucoup ont de solides compétences professionnelles acquises dans leur pays d'origine.",
    gap: "Les travailleurs qui ne peuvent pas répondre aux questions d'entretien, comprendre un avertissement de sécurité ou demander à un responsable d'expliquer une tâche perdent des offres d'emploi, font des erreurs et peuvent se blesser. Un petit ensemble de phrases du travail et l'habitude de vérifier les consignes les rendent plus en sécurité, plus confiants et plus faciles à promouvoir.",
    constraints: [
      "Niveau de langue : anglais débutant à intermédiaire faible ; mots très courants et phrases courtes",
      "Le cours sera traduit : les phrases anglaises enseignées restent en anglais, entre guillemets",
      "Appareils : un téléphone ou un ordinateur de bibliothèque ; pour pratiquer, il suffit de papier, d'un partenaire et de sa voix",
      "Temps : des leçons de 4 à 6 minutes qui s'intègrent entre les horaires de travail",
      "Les règles du travail (comment prévenir d'une absence, règles de sécurité) varient selon l'employeur : chaque apprenant suit le règlement et la formation de son propre employeur"
    ],
    prerequisites: "Savoir lire des phrases courtes et simples en anglais. « L'anglais de tous les jours (ESL) » est un bon premier cours pour ceux qui débutent."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "Lors d'un entretien d'embauche", action: "répondre aux questions courantes d'entretien comme \"Tell me about yourself\" avec des réponses courtes et préparées", standard: "en 2 à 4 phrases claires chacune, avec un exemple réel tiré de votre travail ou de votre vie" },
    { id: "O2", condition: "Face aux mots, panneaux et avertissements de sécurité courants au travail", action: "dire ce que chacun veut dire et ce qu'il faut faire, et signaler un danger ou une blessure à un responsable", standard: "avec au moins 4 bonnes réponses sur 5 et en signalant tout de suite" },
    { id: "O3", condition: "Quand vous recevez une consigne que vous ne comprenez pas bien", action: "demander de l'aide à un responsable ou à un collègue et répéter la consigne pour la vérifier", standard: "avant de commencer la tâche" },
    { id: "O4", condition: "Face à un planning de travail ou à un changement dans vos projets", action: "lire vos horaires de travail et prévenir votre responsable que vous serez en retard, que vous êtes malade ou que vous avez besoin d'un congé", standard: "en donnant le jour, l'heure et la raison, le plus tôt possible" },
    { id: "O5", condition: "Quand un client vient vers vous", action: "accueillir le client, proposer votre aide et aller chercher un autre employé quand vous ne pouvez pas aider", standard: "poliment et sans deviner une réponse" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Obtenir l'emploi et rester en sécurité",
      lessons: [
        {
          title: "L'entretien d'embauche : répondre aux questions courantes",
          objectives: ["O1"],
          minutes: 6,
          goal: "Répondre à trois questions courantes d'entretien avec des réponses courtes et préparées.",
          text: [
            "La plupart des entretiens commencent par les mêmes quelques questions. Vous pouvez préparer vos réponses et les pratiquer à voix haute. Des réponses courtes et claires valent mieux que des réponses longues.",
            "\"Tell me about yourself.\" Répondez en parlant de votre travail, pas de votre vie privée : \"I have three years of experience in a restaurant kitchen. I am fast and careful. I want to grow in food service.\" \"Why do you want this job?\" Réponse : \"I like working with my hands, and this company has good training.\" \"When can you start?\" Réponse : \"I can start next Monday.\"",
            "Autres questions courantes : \"What are your strengths?\" (\"I am on time and I learn fast.\") \"Can you work weekends?\" (\"Yes, I can work Saturdays.\") À la fin, on vous demande souvent \"Do you have any questions?\" Ayez-en une prête : \"What does a normal day look like?\" ou \"What are the hours?\"",
            "L'expérience acquise dans votre pays d'origine compte. Dites-le : \"In Mexico I built houses for five years.\" Si vous n'avez pas compris une question, utilisez les phrases que vous connaissez : \"Sorry, can you repeat the question, please?\""
          ],
          steps: ["Écrivez des réponses courtes aux questions courantes.", "Donnez un exemple réel de votre travail ou de votre vie dans chaque réponse.", "Pratiquez à voix haute jusqu'à pouvoir les dire sans lire.", "Préparez une question à poser à la fin.", "Si vous ratez une question, demandez qu'on la répète."],
          words: [["\"Experience\"", "le travail que vous avez déjà fait."], ["\"Strengths\"", "les choses que vous faites bien."], ["\"Interview\"", "une rencontre où un employeur vous pose des questions pour décider s'il vous embauche."]],
          slides: [
            { title: "Préparez-vous et pratiquez", bullets: ["Les mêmes questions reviennent sans cesse", "Les réponses courtes et claires gagnent", "Pratiquez à voix haute"] },
            { title: "\"Tell me about yourself.\"", bullets: ["Parlez du travail, pas de votre vie privée", "\"I have three years of experience in a kitchen.\"", "\"I am fast and careful.\""] },
            { title: "D'autres questions courantes", bullets: ["\"Why do you want this job?\"", "\"What are your strengths?\"", "\"When can you start?\" \"Can you work weekends?\""] },
            { title: "À vous de poser une question", bullets: ["\"Do you have any questions?\"", "\"What does a normal day look like?\"", "\"What are the hours?\""] }
          ],
          sources: [{ name: "USA Learns : cours d'anglais gratuits pour adultes (Bureau de l'éducation du comté de Sacramento)", url: "https://www.usalearns.org/" }],
          tryIt: "Écrivez vos réponses à \"Tell me about yourself\", \"Why do you want this job?\" et \"When can you start?\" pour un emploi que vous voulez. Chaque réponse fait 2 à 4 phrases. Lisez-les trois fois à voix haute, puis demandez à un partenaire de vous faire passer l'entretien, ou enregistrez-vous en train de répondre.",
          youCanNow: "répondre aux questions courantes d'entretien avec des réponses courtes et préparées, et poser une question à la fin d'un entretien.",
          quickCheck: [
            { objective: "O1", q: "Le recruteur dit \"Tell me about yourself.\" Quelle est la meilleure réponse ?", options: ["\"I have two years of experience cleaning offices. I am careful and on time.\"", "\"I don't know.\"", "\"I have three children and I like soccer and my favorite food is rice.\"", "\"What is your name?\""], answer: 0, why: "Elle parle du travail et des points forts en phrases courtes et claires." },
            { objective: "O1", q: "Le recruteur demande \"Do you have any questions?\" Quelle est une bonne réponse ?", options: ["\"No.\"", "\"Where is the bathroom?\"", "\"What does a normal day look like?\"", "\"Goodbye.\""], answer: 2, why: "Une question sur le poste montre que vous êtes intéressé." }
          ]
        },
        {
          title: "Mots, panneaux et avertissements de sécurité",
          objectives: ["O2"],
          minutes: 5,
          goal: "Dire ce que veulent dire les panneaux et avertissements de sécurité courants et ce qu'il faut faire.",
          text: [
            "Les mots de sécurité sont l'anglais le plus important au travail. Apprenez-les en premier. Panneaux : \"Danger\" signale un danger grave qui peut vous tuer ou vous blesser gravement. \"Caution\" ou \"Warning\" veut dire faites attention. \"Exit\" est la sortie. \"Authorized personnel only\" veut dire que seuls les employés autorisés peuvent entrer. \"Wet floor\" veut dire que le sol est glissant.",
            "Les avertissements oraux sont courts et forts : \"Watch out!\" \"Stop!\" \"Look out!\" \"Heads up!\" (quelque chose peut tomber ou venir vers vous). Quand vous en entendez un, arrêtez-vous, regardez et éloignez-vous du danger.",
            "Les mots de l'équipement de protection : \"Wear your gloves.\" \"Put on your safety glasses.\" \"Hard hat\" (un casque solide). \"Safety vest\" (un gilet de couleur vive pour que les conducteurs vous voient). \"Ear plugs\" (des bouchons d'oreilles). Votre employeur vous forme à l'équipement de votre poste. Si vous ne comprenez pas la formation, posez des questions.",
            "Exemple de conversation. Responsable : \"Heads up! Forklift coming.\" Employé : \"Okay!\" (recule). Responsable : \"Always wear your vest in this area.\" Employé : \"Yes. My vest, always in this area.\""
          ],
          words: [["\"Hazard\"", "quelque chose qui peut vous blesser, comme un sol mouillé ou une machine en marche."], ["\"Danger\"", "un mot de panneau pour un danger grave qui peut vous tuer ou vous blesser gravement."], ["\"Caution\"", "un mot de panneau qui veut dire faites attention."], ["\"Protective equipment\"", "l'équipement qui vous protège, comme des gants, des lunettes de sécurité ou un casque."]],
          slides: [
            { title: "Les mots des panneaux", bullets: ["\"Danger\" : danger grave", "\"Caution\" / \"Warning\" : faites attention", "\"Exit\" : la sortie", "\"Authorized personnel only\" : autorisation nécessaire"] },
            { title: "Les avertissements oraux", bullets: ["\"Watch out!\" \"Stop!\" \"Look out!\"", "\"Heads up!\" : quelque chose arrive", "Arrêtez-vous, regardez, éloignez-vous"] },
            { title: "L'équipement de protection", bullets: ["\"Wear your gloves.\"", "\"Put on your safety glasses.\"", "\"Hard hat\" \"Safety vest\" \"Ear plugs\""] }
          ],
          sources: [{ name: "OSHA : les droits des travailleurs (ministère du Travail des États-Unis)", url: "https://www.osha.gov/workers" }],
          tryIt: "Faites une carte de mots de sécurité pour l'emploi que vous voulez : écrivez cinq mots ou panneaux de sécurité que vous y verrez et ce que chacun veut dire. Dites chacun à voix haute. Ensuite, demandez à un partenaire de crier des avertissements (\"Watch out!\" \"Heads up!\") pendant que vous montrez ce que vous feriez.",
          youCanNow: "dire ce que veulent dire les panneaux, les avertissements et les mots de l'équipement de protection les plus courants, et ce qu'il faut faire quand vous entendez un avertissement.",
          quickCheck: [
            { objective: "O2", q: "Un collègue crie \"Heads up!\" Que faites-vous ?", options: ["Vous regardez votre téléphone", "Vous vous arrêtez, regardez et vous éloignez de ce qui arrive", "Vous continuez à travailler", "Vous criez \"Heads up\" à votre tour et restez sur place"], answer: 1, why: "\"Heads up!\" veut dire que quelque chose peut tomber ou venir vers vous." },
            { objective: "O2", q: "Une porte porte un panneau : \"Authorized personnel only\". Qu'est-ce que cela veut dire ?", options: ["Tout le monde peut entrer", "C'est la sortie", "Le sol est mouillé", "Seuls les employés autorisés peuvent entrer"], answer: 3, why: "\"Authorized personnel only\" veut dire qu'il faut une autorisation pour entrer." }
          ]
        },
        {
          title: "Signaler un problème ou une blessure",
          objectives: ["O2"],
          minutes: 5,
          goal: "Signaler tout de suite un danger ou une blessure à votre responsable.",
          text: [
            "Si vous voyez quelque chose de dangereux, dites-le tout de suite à votre responsable : \"Excuse me, there is a problem. There is oil on the floor in aisle 4.\" \"This machine is making a strange noise.\" \"The ladder is broken.\"",
            "Si vous vous blessez, même un peu, dites-le à votre responsable le jour même : \"I hurt my hand. I cut it on a box.\" \"I hurt my back when I lifted that.\" Dites où et quand : \"It happened at 10 o'clock, at the loading dock.\" En cas d'urgence, appelez le 911.",
            "Aux États-Unis, l'OSHA (l'agence fédérale de la sécurité au travail) dit que les travailleurs ont des droits, notamment recevoir une formation à la sécurité dans une langue qu'ils comprennent, signaler une blessure au travail et demander l'inspection d'un lieu de travail dangereux. La loi dit que votre employeur ne peut pas vous punir parce que vous utilisez ces droits. Consultez osha.gov/workers pour les détails.",
            "Exemple de conversation. Employé : \"Excuse me, I need to report something. I slipped and hurt my knee.\" Responsable : \"When did it happen?\" Employé : \"About ten minutes ago, near the freezer.\" Responsable : \"Okay, let's fill out a report.\""
          ],
          steps: ["Dites \"Excuse me, I need to report something.\"", "Dites ce qui ne va pas : le danger ou la blessure.", "Dites où et quand c'est arrivé.", "Signalez une blessure le jour même, même petite.", "En cas d'urgence, appelez le 911."],
          words: [["\"Report\"", "informer la bonne personne d'un problème."], ["\"Injury\"", "une blessure du corps, comme une coupure, une brûlure ou un mal de dos."], ["\"Supervisor\"", "la personne responsable de votre travail."], ["OSHA", "l'Occupational Safety and Health Administration, l'agence fédérale américaine de la sécurité et de la santé au travail."]],
          slides: [
            { title: "Signalez un danger", bullets: ["\"Excuse me, there is a problem.\"", "\"There is oil on the floor in aisle 4.\"", "\"The ladder is broken.\""] },
            { title: "Signalez une blessure", bullets: ["\"I hurt my hand. I cut it on a box.\"", "Dites où et quand", "Le jour même, même si elle est petite"] },
            { title: "Vos droits (OSHA)", bullets: ["Une formation à la sécurité dans une langue que vous comprenez", "Signaler une blessure ; demander une inspection", "Votre employeur ne peut pas vous punir pour cela", "Détails : osha.gov/workers"] }
          ],
          sources: [{ name: "OSHA : les droits des travailleurs (ministère du Travail des États-Unis)", url: "https://www.osha.gov/workers" }],
          tryIt: "Pour vous entraîner seulement : écrivez deux signalements courts, l'un sur un danger (par exemple un sol mouillé) et l'autre sur une petite blessure inventée. Chacun dit quoi, où et quand. Dites-les à voix haute comme si vous parliez à votre responsable.",
          youCanNow: "signaler un danger ou une blessure à votre responsable en disant quoi, où et quand, et citer vos droits de base en matière de sécurité.",
          quickCheck: [
            { objective: "O2", q: "Vous voyez une échelle cassée au travail. Que dites-vous à votre responsable ?", options: ["Rien ; quelqu'un d'autre la verra", "\"Excuse me, the ladder in the back room is broken.\"", "\"Watch out!\" et vous rentrez chez vous", "\"Can I have a day off?\""], answer: 1, why: "Dire à votre responsable quoi et où lui permet de régler le danger avant que quelqu'un se blesse." },
            { objective: "O2", q: "Vous vous coupez un peu le doigt au travail. Quand le signalez-vous ?", options: ["Le mois prochain", "Seulement si ça s'aggrave", "Jamais", "Le jour même"], answer: 3, why: "Signalez chaque blessure au travail le jour même, même petite." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Obtenir l'emploi et rester en sécurité",
        questions: [
          { objective: "O1", q: "Le recruteur demande \"When can you start?\" Quelle est une réponse claire ?", options: ["\"I can start next Monday.\"", "\"Maybe.\"", "\"I like this company.\"", "\"Where is the exit?\""], answer: 0, why: "Elle donne un jour précis." },
          { objective: "O1", q: "Vous n'avez pas compris la question de l'entretien. Que dites-vous ?", options: ["\"Yes.\"", "Rien", "\"Sorry, can you repeat the question, please?\"", "\"Goodbye.\""], answer: 2, why: "Demander de répéter vaut mieux que deviner la réponse." },
          { objective: "O2", q: "Un panneau indique \"Danger\". Qu'est-ce que cela veut dire ?", options: ["Les toilettes", "Un endroit pour se reposer", "Un danger grave qui peut vous tuer ou vous blesser gravement", "Une salle de pause"], answer: 2, why: "\"Danger\" signale les dangers les plus graves." },
          { objective: "O2", q: "Lequel de ces objets est un équipement de protection ?", options: ["Des lunettes de sécurité", "Un planning", "Une fiche de paie", "Un reçu"], answer: 0, why: "Les lunettes de sécurité protègent vos yeux." },
          { objective: "O2", q: "Vous vous êtes fait mal au dos en soulevant un carton. Que dites-vous ?", options: ["\"Watch out!\"", "\"When can I start?\"", "\"Do you have any questions?\"", "\"I need to report something. I hurt my back lifting a box at 2 o'clock.\""], answer: 3, why: "Elle dit ce qui s'est passé, comment et quand." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Chaque jour au travail",
      lessons: [
        {
          title: "Demander de l'aide et vérifier les consignes",
          objectives: ["O3"],
          minutes: 5,
          goal: "Demander de l'aide et répéter une consigne avant de commencer.",
          text: [
            "Au travail, une erreur peut coûter du temps, de l'argent ou la sécurité. Il vaut toujours mieux demander que deviner. Les bons employés posent des questions.",
            "Pour demander de l'aide : \"Excuse me, can you help me?\" \"Can you show me how to do this?\" \"Where do I put these boxes?\" \"What should I do next?\" Si vous n'avez pas compris : \"Sorry, can you explain that again, more slowly?\"",
            "Avant de commencer, répétez la consigne : \"So, first I clean the tables, then I fill the napkins?\" ou \"Okay, I put the blue boxes on shelf 3. Is that right?\" Votre responsable dira \"Yes\" ou vous corrigera.",
            "Exemple de conversation. Responsable : \"Please restock aisle 7 and then break down the empty boxes.\" Employé : \"Okay. So, first I restock aisle 7, then I break down the boxes. Where do the boxes go?\" Responsable : \"In the recycling by the back door.\" Employé : \"Got it. Thank you.\""
          ],
          steps: ["Écoutez toute la consigne.", "Posez des questions sur ce que vous n'avez pas compris.", "Répétez les étapes : \"So, first ..., then ...?\"", "Attendez le \"Yes\" avant de commencer.", "Si vous êtes bloqué, demandez encore : \"What should I do next?\""],
          words: [["\"Instruction\"", "les mots qui vous disent comment faire une tâche (une consigne)."], ["\"Show me\"", "faites-le devant moi pour que je voie comment."], ["\"Got it\"", "une façon courte de dire \"I understand\" (je comprends)."]],
          slides: [
            { title: "Demandez, ne devinez pas", bullets: ["Les erreurs coûtent du temps, de l'argent et la sécurité", "Les bons employés posent des questions"] },
            { title: "Demander de l'aide", bullets: ["\"Excuse me, can you help me?\"", "\"Can you show me how to do this?\"", "\"What should I do next?\""] },
            { title: "Répétez la consigne", bullets: ["\"So, first I clean the tables, then I fill the napkins?\"", "\"Is that right?\"", "Attendez le \"Yes\" avant de commencer"] }
          ],
          tryIt: "Demandez à un partenaire ou à un membre de votre famille de vous donner une consigne en trois étapes en anglais (par exemple comment faire un sandwich ou plier une chemise). Répétez-la avec \"So, first ..., then ...?\" avant de la faire. Ensuite, échangez les rôles.",
          youCanNow: "demander de l'aide à un responsable ou à un collègue, et répéter une consigne pour la vérifier avant de commencer.",
          quickCheck: [
            { objective: "O3", q: "Votre responsable vous donne une longue consigne. Que faites-vous avant de commencer ?", options: ["Vous commencez en espérant que c'est juste", "Vous répétez les étapes pour vérifier", "Vous demandez à un client", "Vous partez en pause"], answer: 1, why: "Répéter les étapes permet de repérer les erreurs avant de commencer." },
            { objective: "O3", q: "Vous ne savez pas utiliser la nouvelle machine. Que dites-vous ?", options: ["\"Can you show me how to do this?\"", "\"Got it.\"", "\"Heads up!\"", "Rien ; vous essayez quand même"], answer: 0, why: "\"Can you show me?\" demande de l'aide de façon sûre et claire." }
          ]
        },
        {
          title: "Les horaires : postes, retards, jours de maladie et congés",
          objectives: ["O4"],
          minutes: 6,
          goal: "Lire vos horaires de travail et prévenir votre responsable que vous serez en retard, que vous êtes malade ou que vous avez besoin d'un congé.",
          text: [
            "Un poste (\"shift\") est le temps pendant lequel vous travaillez, par exemple \"Monday, 7 a.m. to 3:30 p.m.\" \"a.m.\" est le matin (avant midi) et \"p.m.\" est l'après-midi et le soir. Votre planning peut aussi indiquer \"OFF\" pour les jours où vous ne travaillez pas.",
            "Si vous allez être en retard, prévenez votre responsable avant votre poste : \"Hi, this is Carlos. I'm sorry, my bus is late. I will be about 20 minutes late.\" Si vous êtes malade : \"Hi, this is Carlos. I'm sick today and I can't come in. I'm sorry.\" Chaque employeur a ses propres règles pour prévenir, alors consultez votre règlement ou demandez à votre responsable comment et quand le prévenir.",
            "Pour demander un congé, demandez-le à l'avance, en personne ou par écrit : \"Can I have Friday the 14th off? I have an appointment.\" Pour échanger un poste avec un collègue : \"Can I switch shifts with Maria on Saturday?\"",
            "Exemple de SMS : \"Hi Ms. Johnson, this is Carlos from the morning shift. I am sick today and cannot come in. I'm sorry. I will let you know about tomorrow.\""
          ],
          steps: ["Lisez votre planning : les jours, les heures de début et de fin.", "En retard ou malade : prévenez votre responsable avant votre poste.", "Dites qui vous êtes, ce qui ne va pas et quand vous viendrez.", "Demandez un congé à l'avance, en donnant la date.", "Suivez les règles de votre employeur pour prévenir."],
          words: [["\"Shift\"", "les heures que vous travaillez dans une journée (un poste)."], ["\"Call in sick\"", "prévenir votre employeur que vous êtes malade et ne pouvez pas travailler."], ["\"Time off\"", "les jours où vous demandez à ne pas travailler (un congé)."], ["\"Switch shifts\"", "échanger vos heures de travail avec un collègue."]],
          slides: [
            { title: "Lisez votre planning", bullets: ["\"Monday, 7 a.m. to 3:30 p.m.\"", "\"a.m.\" = matin, \"p.m.\" = après-midi et soir", "\"OFF\" = vous ne travaillez pas"] },
            { title: "En retard ou malade", bullets: ["Prévenez avant votre poste", "\"I will be about 20 minutes late.\"", "\"I'm sick today and I can't come in.\""] },
            { title: "Congés et échanges de postes", bullets: ["\"Can I have Friday the 14th off?\"", "\"Can I switch shifts with Maria on Saturday?\"", "Demandez à l'avance"] },
            { title: "Les règles de votre employeur", bullets: ["Chaque employeur a ses propres règles pour prévenir", "Consultez votre règlement ou demandez à votre responsable"] }
          ],
          tryIt: "Écrivez deux messages à un responsable au nom inventé : un pour dire que vous aurez 15 minutes de retard, et un pour prévenir que vous êtes malade. Chacun dit qui vous êtes, ce qui ne va pas et quand vous viendrez. Lisez-les à voix haute comme un appel téléphonique.",
          youCanNow: "lire vos horaires de travail, et prévenir clairement votre responsable que vous serez en retard, que vous êtes malade ou que vous avez besoin d'un congé.",
          quickCheck: [
            { objective: "O4", q: "Votre planning indique \"Tuesday 2 p.m. - 10 p.m.\" À quelle heure commencez-vous ?", options: ["À 2 heures du matin", "À 10 heures du matin", "À 2 heures de l'après-midi", "À 10 heures du soir"], answer: 2, why: "\"p.m.\" veut dire l'après-midi ou le soir, donc 2 p.m. est 2 heures de l'après-midi (14 h)." },
            { objective: "O4", q: "Votre bus est en retard et vous allez manquer le début de votre poste. Que faites-vous ?", options: ["Vous prévenez votre responsable avant le début de votre poste", "Vous ne dites rien et arrivez en retard", "Vous rentrez chez vous", "Vous prévenez un client"], answer: 0, why: "Prévenir votre responsable tôt est respectueux et l'aide à s'organiser." }
          ]
        },
        {
          title: "Parler aux clients",
          objectives: ["O5"],
          minutes: 5,
          goal: "Accueillir un client, proposer votre aide et aller chercher un autre employé quand vous ne pouvez pas aider.",
          text: [
            "Les clients aiment les employés aimables et clairs. Accueillez-les : \"Hi, welcome!\" ou \"Good morning.\" Proposez votre aide : \"Can I help you find something?\" \"What can I get for you?\"",
            "Si vous connaissez la réponse, faites court : \"Yes, it's in aisle 9.\" \"It comes with fries.\" Si vous ne savez pas, ne devinez jamais. Dites : \"Let me check for you.\" ou \"One moment, please. I'll get my manager.\"",
            "Si le client parle trop vite : \"Sorry, could you say that again, please?\" S'il est mécontent, restez calme et poli : \"I'm sorry about that. Let me get someone who can help.\" Terminez par : \"Have a nice day!\"",
            "Exemple de conversation. Employé : \"Hi, welcome! Can I help you find something?\" Client : \"Do you have this jacket in a large?\" Employé : \"Let me check for you. One moment, please.\" (vérifie) \"Yes, here you go.\" Client : \"Thanks!\" Employé : \"You're welcome. Have a nice day!\""
          ],
          steps: ["Accueillez : \"Hi, welcome!\"", "Proposez votre aide : \"Can I help you find something?\"", "Répondez court si vous savez.", "Si vous ne savez pas : \"Let me check for you.\" ou allez chercher un responsable.", "Terminez : \"Have a nice day!\""],
          words: [["\"Customer\"", "une personne qui achète ou utilise ce que vend une entreprise."], ["\"Manager\"", "une personne qui dirige un magasin ou une équipe."], ["\"Let me check\"", "une façon polie de dire que vous allez trouver la réponse."]],
          slides: [
            { title: "Accueillez et proposez votre aide", bullets: ["\"Hi, welcome!\"", "\"Can I help you find something?\"", "\"What can I get for you?\""] },
            { title: "Vous ne savez pas ? Ne devinez pas", bullets: ["\"Let me check for you.\"", "\"One moment, please. I'll get my manager.\""] },
            { title: "Les moments difficiles", bullets: ["\"Sorry, could you say that again, please?\"", "Client mécontent : \"I'm sorry about that.\"", "\"Let me get someone who can help.\""] },
            { title: "Bien terminer", bullets: ["\"You're welcome.\"", "\"Have a nice day!\""] }
          ],
          tryIt: "Tâche finale : écrivez votre script d'anglais pour le travail que vous voulez : votre réponse à \"Tell me about yourself\", deux autres réponses d'entretien, trois mots de sécurité avec leur sens, un message pour prévenir d'une maladie ou d'un retard, et deux phrases pour un client ou pour demander de l'aide à un collègue. Pratiquez-le à voix haute ou en jeu de rôle, et enregistrez-vous si vous le pouvez.",
          youCanNow: "accueillir un client, proposer votre aide et aller chercher la bonne personne quand vous ne connaissez pas la réponse.",
          quickCheck: [
            { objective: "O5", q: "Un client pose une question et vous ne connaissez pas la réponse. Que dites-vous ?", options: ["Vous devinez une réponse", "\"I don't know\" et vous partez", "\"That's not my job.\"", "\"Let me check for you.\""], answer: 3, why: "Vérifier ou aller chercher un responsable est poli et donne au client la bonne réponse." },
            { objective: "O5", q: "Un client s'approche de vous. Que dire en premier ?", options: ["\"What?\"", "\"Hi, welcome! Can I help you find something?\"", "\"Heads up!\"", "\"I'm sick today.\""], answer: 1, why: "Un accueil et une offre d'aide commencent bien la conversation." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Chaque jour au travail",
        questions: [
          { objective: "O3", q: "Votre responsable dit \"Put the red boxes on shelf 2.\" Comment vérifiez-vous ?", options: ["\"Got it\" et vous les mettez sur l'étagère 3", "\"So, the red boxes go on shelf 2?\"", "Vous ne dites rien", "\"Have a nice day!\""], answer: 1, why: "Répéter la consigne vérifie que vous l'avez bien entendue." },
          { objective: "O3", q: "Vous avez fini votre tâche et ne savez pas quoi faire. Que demandez-vous ?", options: ["\"What should I do next?\"", "\"Can I go home?\"", "\"Where is the exit?\"", "\"Watch out!\""], answer: 0, why: "Demander quoi faire ensuite montre que vous êtes prêt à travailler." },
          { objective: "O4", q: "Qu'est-ce qu'un \"shift\" ?", options: ["Une sorte d'uniforme", "Un panneau de sécurité", "Les heures que vous travaillez dans une journée", "Un jour de repos"], answer: 2, why: "Un \"shift\" (poste) est le temps pendant lequel vous travaillez." },
          { objective: "O4", q: "Vous avez besoin de vendredi prochain pour un rendez-vous. Que dites-vous, et quand ?", options: ["Rien ; vous ne venez pas, c'est tout", "Vous le dites à un client le vendredi", "Vous envoyez un SMS à votre responsable pendant votre poste du vendredi", "Vous demandez à l'avance à votre responsable : \"Can I have Friday the 14th off?\""], answer: 3, why: "Demander à l'avance, avec la date, laisse à votre responsable le temps de s'organiser." },
          { objective: "O5", q: "Un client est mécontent. Quelle est la meilleure chose à dire ?", options: ["\"Not my problem.\"", "\"Calm down!\"", "\"I'm sorry about that. Let me get someone who can help.\"", "\"Goodbye.\""], answer: 2, why: "Rester calme et aller chercher de l'aide est poli et règle le problème." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'anglais au travail (ESL)",
    questions: [
      { objective: "O1", q: "En entretien, \"Tell me about yourself\" veut dire :", options: ["Parlez de votre travail et de vos points forts", "Racontez toute l'histoire de votre vie", "Posez-leur des questions sur eux", "Donnez votre adresse"], answer: 0, why: "Ils veulent entendre parler de votre travail, de vos compétences et de vos objectifs en quelques phrases." },
      { objective: "O1", q: "Quelle est une bonne réponse à \"What are your strengths?\" ?", options: ["\"Nothing.\"", "\"I don't know.\"", "\"I'm sick today.\"", "\"I am always on time and I learn fast.\""], answer: 3, why: "Elle cite deux choses que vous faites bien." },
      { objective: "O1", q: "Vous étiez maçon dans votre pays d'origine. Faut-il le dire en entretien ?", options: ["Non, ça ne compte pas", "Oui : \"In Mexico I built houses for five years.\"", "Seulement s'ils posent la question en espagnol", "Seulement par écrit"], answer: 1, why: "L'expérience de travail acquise dans votre pays d'origine compte et montre vos compétences." },
      { objective: "O2", q: "Que veut dire un panneau \"Caution\" ?", options: ["Faites attention", "La sortie", "La salle de pause", "Repas gratuit"], answer: 0, why: "\"Caution\" veut dire faites attention." },
      { objective: "O2", q: "Quelqu'un crie \"Watch out!\" Que faites-vous ?", options: ["Vous continuez à marcher", "Vous criez à votre tour", "Vous vous arrêtez, regardez et vous éloignez du danger", "Vous fermez les yeux"], answer: 2, why: "\"Watch out!\" vous avertit d'un danger près de vous." },
      { objective: "O2", q: "Qu'est-ce qu'un \"hazard\" ?", options: ["Une sorte d'outil", "Quelque chose qui peut vous blesser", "Un client", "Un planning"], answer: 1, why: "Un \"hazard\" (danger) est quelque chose qui peut vous blesser, comme un sol mouillé." },
      { objective: "O2", q: "Vous voyez de l'huile par terre dans l'allée 4. Que dites-vous à votre responsable ?", options: ["\"Have a nice day!\"", "\"Can I switch shifts?\"", "\"Got it.\"", "\"Excuse me, there is oil on the floor in aisle 4.\""], answer: 3, why: "Dites quel est le danger et où il se trouve." },
      { objective: "O2", q: "Lequel de ces droits du travailleur figure sur la liste de l'OSHA ?", options: ["Un déjeuner gratuit tous les jours", "Une formation à la sécurité dans une langue que vous comprenez", "Choisir votre propre salaire", "Pas de planning"], answer: 1, why: "L'OSHA cite la formation à la sécurité dans une langue que vous comprenez comme un droit du travailleur." },
      { objective: "O2", q: "Quand faut-il signaler une petite blessure au travail ?", options: ["Le jour même", "Seulement si ça s'aggrave", "À la fin de l'année", "Jamais"], answer: 0, why: "Signalez chaque blessure le jour même, même les petites." },
      { objective: "O3", q: "Vous ne comprenez pas une consigne. Que faire de mieux ?", options: ["Deviner et commencer", "Demander à un client", "Demander : \"Sorry, can you explain that again, more slowly?\"", "Rentrer chez vous"], answer: 2, why: "Demander est plus sûr et plus rapide que deviner." },
      { objective: "O3", q: "Quelle phrase répète une consigne ?", options: ["\"Hi, welcome!\"", "\"Heads up!\"", "\"I'm sick today.\"", "\"So, first I sweep, then I mop. Is that right?\""], answer: 3, why: "Elle répète les étapes et demande si elles sont justes." },
      { objective: "O3", q: "Que veut dire \"Got it\" ?", options: ["Je comprends", "J'ai un rhume", "Je l'ai perdu", "Donnez-le-moi"], answer: 0, why: "\"Got it\" est une façon courte de dire \"I understand\" (je comprends)." },
      { objective: "O4", q: "Que veut dire \"a.m.\" sur un planning ?", options: ["L'après-midi", "La nuit", "Le matin, avant midi", "Un jour de repos"], answer: 2, why: "\"a.m.\" est le matin." },
      { objective: "O4", q: "Vous êtes malade. Quel est un bon message pour votre responsable ?", options: ["\"Not coming.\"", "\"Hi, this is Carlos. I'm sick today and I can't come in. I'm sorry.\"", "Rien", "\"Watch out!\""], answer: 1, why: "Il dit qui vous êtes, ce qui ne va pas, et que vous ne viendrez pas." },
      { objective: "O4", q: "Comment trouver les règles de votre lieu de travail pour prévenir d'une absence ?", options: ["Demander à un client", "Deviner", "Utiliser les règles d'une autre entreprise", "Consulter votre règlement ou demander à votre responsable"], answer: 3, why: "Chaque employeur a ses propres règles pour prévenir." },
      { objective: "O5", q: "Que veut dire \"Let me check for you\" ?", options: ["Je vais trouver la réponse", "Partez", "Je suis le responsable", "C'est gratuit"], answer: 0, why: "Cela dit poliment que vous allez trouver la réponse." },
      { objective: "O5", q: "Un client demande quelque chose que vous ne connaissez pas. Que ne faut-il PAS faire ?", options: ["Aller chercher votre responsable", "Dire \"Let me check for you\"", "Deviner une réponse", "Demander à un collègue"], answer: 2, why: "Deviner peut donner au client une information fausse." },
      { objective: "O5", q: "Quelle est une façon polie de terminer avec un client ?", options: ["\"What?\"", "\"Have a nice day!\"", "\"Heads up!\"", "\"I'm late.\""], answer: 1, why: "\"Have a nice day!\" est un au revoir aimable." },
      { objective: "O1", q: "À la fin d'un entretien, quelle question est bonne à poser ?", options: ["\"What does a normal day look like?\"", "\"Can I leave now?\"", "\"Watch out!\"", "\"Where is the bathroom?\""], answer: 0, why: "Une question sur le poste montre que vous êtes intéressé." },
      { objective: "O3", q: "Votre nouvelle tâche comporte une étape que vous ne connaissez pas. Que dites-vous ?", options: ["\"Have a nice day!\"", "\"I'm sick today.\"", "\"Let me check for you.\"", "\"Can you show me how to do this step?\""], answer: 3, why: "Demander qu'on vous montre est la façon sûre d'apprendre une nouvelle étape." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 6, 9, 12, 13, 15, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, pratiquez cette partie et réessayez.",
    criteria: [
      { name: "Réponses d'entretien", objective: "O1", notYet: "Des réponses manquent, sont très longues, ou parlent de la vie privée au lieu du travail.", meets: "\"Tell me about yourself\" et deux autres réponses, chacune en 2 à 4 phrases claires avec un exemple réel.", exceeds: "Les dit à voix haute sans lire et ajoute une question à poser à la fin." },
      { name: "Mots de sécurité", objective: "O2", notYet: "Moins de trois mots, ou les sens sont faux.", meets: "Trois mots ou panneaux de sécurité du métier, chacun avec le bon sens.", exceeds: "Montre aussi comment signaler un danger ou une blessure : quoi, où et quand." },
      { name: "Demander de l'aide", objective: "O3", notYet: "Aucune phrase pour demander de l'aide, ou aucun moyen de vérifier une consigne.", meets: "Une phrase pour demander de l'aide et une phrase qui répète une consigne.", exceeds: "Les utilise correctement dans un jeu de rôle avec un partenaire." },
      { name: "Message de retard ou de maladie", objective: "O4", notYet: "Il manque qui vous êtes, ce qui ne va pas ou quand vous viendrez.", meets: "Un message clair et poli avec le nom, la raison et l'heure.", exceeds: "Note aussi comment son employeur veut être prévenu des absences (règlement ou responsable)." },
      { name: "Phrases pour les clients", objective: "O5", notYet: "Aucune phrase pour les clients, ou les phrases ne sont pas polies.", meets: "Un accueil avec une offre d'aide, et une phrase pour quand vous ne savez pas.", exceeds: "Gère poliment un client mécontent dans un jeu de rôle." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille)",
      "Apprenants qui passent un entretien d'embauche en anglais dans les 30 jours, et combien reçoivent une offre (enquête de suivi)",
      "Apprenants qui disent avoir demandé de l'aide à un responsable ou signalé un danger en anglais dans les 30 jours",
      "Les employeurs partenaires signalent moins d'erreurs et d'incidents de sécurité dus à des consignes mal comprises"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur pour regarder les leçons, ou une copie imprimée du texte des leçons",
      "Du papier et un stylo pour les scripts et les cartes de mots de sécurité",
      "Un partenaire pour les jeux de rôle, ou un téléphone pour vous enregistrer",
      "Environ 60 à 75 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "Faites de chaque exemple de conversation un jeu de rôle : lisez-le, échangez les rôles, puis changez les détails (un autre métier, une autre heure ou un autre problème).",
      "Les versions traduites gardent les phrases anglaises en anglais ; expliquez-les dans la langue des apprenants, mais pratiquez-les en anglais.",
      "Adaptez la leçon sur la sécurité aux métiers visés par les apprenants ; apportez de vrais panneaux ou des photos de lieux de travail de la région si vous le pouvez.",
      "Les règles pour prévenir d'une absence, demander un congé et les règles de sécurité varient selon l'employeur : rappelez aux apprenants de suivre le règlement et la formation de leur propre employeur. Ce cours enseigne la langue, pas les règles de l'employeur.",
      "Utilisez des noms et des détails inventés dans les signalements et messages d'entraînement. Associez ce cours à une aide à la recherche d'emploi (voir « CV, LinkedIn et entretiens d'embauche »)."
    ]
  }
};
