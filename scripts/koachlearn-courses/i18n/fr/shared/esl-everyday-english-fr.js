"use strict";

// Koach Learn course (French translation of shared/esl-everyday-english.js). See scripts/koachlearn-courses/README.md, "Translations".
// ESL course: every English phrase being taught stays in English, inside double quotes; only the explanations are translated.

module.exports = {
  id: "esl-everyday-english-fr",
  lang: "fr",
  translationOf: "esl-everyday-english",
  category: "Workforce Development",
  name: "L'anglais de tous les jours (ESL)",
  skills: "Se présenter, Demander de répéter ou de parler plus lentement, Faire des achats et payer, Parler au médecin et prendre rendez-vous, Demander son chemin",
  outcome: "utiliser des phrases anglaises courtes et polies pour vous présenter, demander aux gens de répéter ou de parler plus lentement, faire des achats et payer, dire au médecin ce qui ne va pas, prendre rendez-vous par téléphone et demander votre chemin.",
  about: [
    "Ce cours s'adresse aux adultes qui apprennent l'anglais et veulent l'utiliser dans la vie de tous les jours aux États-Unis : au magasin, chez le médecin, au téléphone, à l'école de vos enfants et dans la rue.",
    "Chaque leçon vous donne des phrases courtes à dire, une courte conversation d'exemple et un exercice à faire à voix haute à la maison, seul ou avec un partenaire. Vous n'avez pas besoin d'une grammaire parfaite. Vous avez besoin de phrases qui marchent, et du courage de les utiliser.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, lisez la conversation d'exemple à voix haute, puis faites l'activité « Essayez maintenant ». Il y a deux questions rapides après chaque leçon, un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin.",
    "À la fin, vous préparez votre propre fiche de phrases d'anglais de tous les jours, avec les phrases dont vous avez le plus besoin, et vous la pratiquez à voix haute. Les phrases anglaises sont entre guillemets droits : apprenez-les et dites-les en anglais, telles qu'elles sont écrites."
  ],
  finalTask: "Préparez votre propre fiche de phrases d'anglais de tous les jours et pratiquez-la à voix haute. Sur une page, écrivez en anglais : (1) une présentation de vous en 3 ou 4 phrases, (2) trois phrases pour demander à quelqu'un de répéter, de parler plus lentement ou d'épeler, (3) deux questions pour un magasin où vous allez, (4) un court texte pour prendre rendez-vous chez le médecin par téléphone et (5) une question pour demander le chemin d'un lieu où vous allez souvent. Lisez toute la fiche à voix haute, ou jouez-la avec un partenaire, et enregistrez-vous si vous pouvez.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des adultes qui apprennent l'anglais comme langue seconde aux États-Unis : immigrés et réfugiés, personnes qui cherchent un emploi, parents, personnes âgées et personnes qui sortent de prison et dont la première langue n'est pas l'anglais.",
    startingPoint: "Ils connaissent quelques mots d'anglais et savent dire quelques salutations. Ils peuvent lire des phrases courtes et simples. Ils comprennent souvent plus qu'ils ne peuvent dire, et ils sont nerveux quand ils parlent avec des inconnus ou au téléphone.",
    gap: "La vie de tous les jours demande un anglais parlé et court : rencontrer des gens, faire des achats, aller chez le médecin, téléphoner et demander son chemin. Sans quelques phrases prêtes et sans moyen de demander de répéter ou de ralentir, les apprenants évitent ces échanges, dépendent des autres ou comprennent mal des choses importantes, comme l'heure d'un rendez-vous.",
    constraints: [
      "Niveau de langue : anglais de débutant à intermédiaire faible ; mots très courants et phrases courtes",
      "Le cours est traduit : les phrases anglaises enseignées restent en anglais, entre guillemets",
      "Appareils : un téléphone ou un ordinateur de bibliothèque ; l'exercice marche aussi avec du papier et la voix",
      "Temps : des leçons de 4 à 6 minutes, faciles à placer entre le travail et la famille",
      "Vie privée : les exercices utilisent des noms, des numéros et des dates de naissance inventés, jamais de vrais numéros privés"
    ],
    prerequisites: "Savoir lire l'alphabet et des mots simples en anglais. Les apprenants qui ne lisent pas encore l'anglais peuvent suivre le cours avec un enseignant ou une personne qui lit à voix haute."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "Quand vous rencontrez une nouvelle personne", action: "vous présenter en anglais avec votre nom, votre pays d'origine et ce que vous faites, et poser une question en retour", standard: "en au moins trois phrases courtes" },
    { id: "O2", condition: "Quand vous ne comprenez pas ce que quelqu'un dit", action: "demander à la personne de répéter, de parler plus lentement ou d'épeler un mot avec une phrase anglaise polie", standard: "au lieu de faire semblant de comprendre" },
    { id: "O3", condition: "Dans un magasin", action: "demander où se trouve un article, demander le prix et dire comment vous allez payer", standard: "avec les phrases de la leçon" },
    { id: "O4", condition: "Au cabinet médical ou au téléphone", action: "dire ce qui ne va pas et prendre rendez-vous pour un jour et une heure qui vous conviennent", standard: "en donnant votre nom, le problème et l'heure, et en répétant l'heure pour la vérifier" },
    { id: "O5", condition: "Quand vous devez aller à un endroit", action: "demander votre chemin et répéter les indications pour les vérifier", standard: "avec des mots de direction comme \"left\", \"right\", \"straight\" et \"next to\"" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Rencontrer des gens et faire des achats",
      lessons: [
        {
          title: "Dire bonjour et se présenter",
          objectives: ["O1"],
          minutes: 5,
          goal: "Vous présenter en trois phrases courtes et poser une question en retour.",
          text: [
            "Quand vous rencontrez quelqu'un, commencez par une salutation : \"Hello.\" ou \"Hi.\" Le matin, vous pouvez dire \"Good morning.\" Ensuite, dites votre nom : \"My name is Ana.\" ou \"I'm Ana.\"",
            "Ajoutez d'où vous venez et ce que vous faites : \"I'm from Guatemala.\" \"I work at a restaurant.\" \"I'm looking for a job.\" Puis posez une question en retour : \"What's your name?\" \"Where are you from?\" Quand la personne répond, dites \"Nice to meet you.\"",
            "Conversation d'exemple. A : \"Hi, I'm Ana. What's your name?\" B : \"I'm Sam. Nice to meet you.\" A : \"Nice to meet you too. I'm from Guatemala. I work at a restaurant.\" B : \"Oh, which one?\"",
            "Vous n'avez pas besoin de longues phrases. Trois phrases courtes et claires font une bonne présentation. Souriez, regardez la personne et parlez un peu lentement."
          ],
          steps: ["Saluez : \"Hello.\" ou \"Good morning.\"", "Dites votre nom : \"My name is ...\" ou \"I'm ...\"", "Dites d'où vous venez : \"I'm from ...\"", "Dites ce que vous faites : \"I work at ...\" ou \"I'm looking for a job.\"", "Posez une question en retour : \"What's your name?\" Puis dites \"Nice to meet you.\""],
          words: [["\"I'm\"", "forme courte de \"I am\" (je suis)."], ["\"Nice to meet you\"", "phrase polie que l'on dit quand on rencontre quelqu'un pour la première fois (enchanté)."], ["Se présenter", "dire à une nouvelle personne qui vous êtes."]],
          slides: [
            { title: "Saluez la personne", bullets: ["\"Hello.\" \"Hi.\"", "\"Good morning.\" \"Good afternoon.\""] },
            { title: "Trois phrases courtes", bullets: ["\"My name is Ana.\"", "\"I'm from Guatemala.\"", "\"I work at a restaurant.\""] },
            { title: "Posez une question en retour", bullets: ["\"What's your name?\"", "\"Where are you from?\"", "Puis : \"Nice to meet you.\""] },
            { title: "Conseils", bullets: ["Court et clair, c'est efficace", "Souriez et regardez la personne", "Parlez un peu lentement"] }
          ],
          sources: [{ name: "USA Learns : cours d'anglais gratuits pour adultes (Bureau de l'éducation du comté de Sacramento)", url: "https://www.usalearns.org/" }],
          tryIt: "Écrivez votre propre présentation en anglais : votre nom, d'où vous venez et ce que vous faites, en trois phrases courtes. Ajoutez une question à poser en retour. Lisez-la à voix haute trois fois. Puis dites-la sans regarder le papier.",
          youCanNow: "vous présenter en trois phrases anglaises courtes et poser une question en retour à une nouvelle personne.",
          quickCheck: [
            { objective: "O1", q: "Quelqu'un vous dit \"Nice to meet you.\" Quelle est une bonne réponse ?", options: ["\"Goodbye.\"", "\"Nice to meet you too.\"", "\"I don't know.\"", "\"How much is it?\""], answer: 1, why: "\"Nice to meet you too\" est la réponse polie quand vous rencontrez quelqu'un." },
            { objective: "O1", q: "Quelle présentation donne le nom, le pays d'origine et le travail ?", options: ["\"Hello. Hello. Hello.\"", "\"Where is the bus?\"", "\"I like pizza.\"", "\"I'm Ali. I'm from Somalia. I drive a truck.\""], answer: 3, why: "Elle donne le nom, le pays et le travail en trois phrases courtes." }
          ]
        },
        {
          title: "Demander de répéter, de ralentir ou d'épeler",
          objectives: ["O2"],
          minutes: 5,
          goal: "Demander à une personne de répéter, de parler plus lentement ou d'épeler un mot avec une phrase polie.",
          text: [
            "Tout le monde rate des mots parfois, même les personnes dont l'anglais est la langue maternelle. C'est normal et poli de demander. C'est bien mieux que de dire \"yes\" quand vous n'avez pas compris.",
            "Phrases utiles : \"Sorry, can you repeat that, please?\" \"Can you speak more slowly, please?\" \"How do you spell that?\" \"What does that word mean?\" \"Can you write it down, please?\"",
            "Pour vérifier que vous avez compris, répétez : \"So, Tuesday at 3 o'clock?\" Si vous avez raté une seule partie, demandez cette partie : \"Sorry, what time?\"",
            "Conversation d'exemple. A : \"Your pickup is at the side entrance at four fifteen.\" B : \"Sorry, can you speak more slowly, please?\" A : \"Side entrance. Four fifteen.\" B : \"So, the side door at 4:15?\" A : \"Yes, that's right.\""
          ],
          steps: ["Ne faites pas semblant de comprendre.", "Dites \"Sorry,\" et demandez de répéter, de ralentir, d'épeler ou de l'écrire.", "Répétez la partie importante pour la vérifier.", "Attendez le \"Yes, that's right.\""],
          words: [["\"Repeat\"", "le dire encore une fois (répéter)."], ["\"Slowly\"", "pas vite (lentement)."], ["\"Spell\"", "dire les lettres d'un mot une par une (épeler)."]],
          slides: [
            { title: "Demander, c'est normal et poli", bullets: ["Tout le monde rate des mots parfois", "Demander vaut mieux qu'un \"yes\" faux"] },
            { title: "Phrases pour demander", bullets: ["\"Sorry, can you repeat that, please?\"", "\"Can you speak more slowly, please?\"", "\"How do you spell that?\"", "\"Can you write it down, please?\""] },
            { title: "Vérifiez ce que vous avez entendu", bullets: ["Répétez : \"So, Tuesday at 3 o'clock?\"", "Demandez une partie : \"Sorry, what time?\""] }
          ],
          tryIt: "Écrivez les quatre phrases pour demander de l'aide sur une petite fiche et gardez-la dans votre poche ou dans votre téléphone. Lisez chaque phrase à voix haute cinq fois. Puis mettez une radio ou une vidéo en anglais, et chaque fois que vous ratez quelque chose, dites une des phrases à voix haute.",
          youCanNow: "demander à quelqu'un de répéter, de parler plus lentement, d'épeler ou d'écrire un mot, et répéter ce que vous avez entendu pour le vérifier.",
          quickCheck: [
            { objective: "O2", q: "Un employé parle très vite et vous ne comprenez pas. Que dites-vous ?", options: ["\"Can you speak more slowly, please?\"", "\"Yes, yes.\"", "Rien ; vous partez", "\"Goodbye.\""], answer: 0, why: "Demander à la personne de parler plus lentement est poli et vous donne l'information." },
            { objective: "O2", q: "L'infirmière dit le nom de votre médecin et vous ne savez pas l'écrire. Que demandez-vous ?", options: ["\"How much is it?\"", "\"Where are you from?\"", "\"How do you spell that?\"", "\"What time is it?\""], answer: 2, why: "\"How do you spell that?\" demande les lettres pour que vous puissiez écrire le nom." }
          ]
        },
        {
          title: "Faire des achats : trouver des articles, les prix et payer",
          objectives: ["O3"],
          minutes: 5,
          goal: "Demander où se trouve un article, demander le prix et dire comment vous allez payer.",
          text: [
            "Pour trouver quelque chose, dites \"Excuse me\" et demandez : \"Where can I find the rice?\" ou \"Do you have diapers?\" L'employé peut répondre \"Aisle 5\" (une allée numérotée du magasin) ou \"Sorry, we're out of it.\" (il n'y en a plus).",
            "Pour demander le prix : \"How much is this?\", ou \"How much are these?\" pour plusieurs articles. À la caisse, le caissier peut demander : \"Cash or card?\" \"Do you want a bag?\" \"Do you want your receipt?\" Répondez : \"Card, please.\" \"No bag, thanks.\" \"Yes, please.\"",
            "Gardez votre ticket de caisse. Pour rapporter un article, dites : \"I'd like to return this, please. Here is my receipt.\" Chaque magasin a ses propres règles de retour, alors vous pouvez demander : \"What is your return policy?\"",
            "Conversation d'exemple. A : \"Excuse me, where can I find the milk?\" B : \"In the back, next to the eggs.\" A : \"Thanks. How much is this?\" B : \"Three ninety-nine.\" A : \"Okay. Card, please.\""
          ],
          steps: ["Dites \"Excuse me\" pour demander de l'aide.", "Demandez \"Where can I find ...?\"", "Demandez \"How much is this?\"", "À la caisse, répondez à \"Cash or card?\" et à \"Do you want a bag?\"", "Gardez le ticket de caisse pour les retours."],
          words: [["\"Aisle\"", "une allée du magasin avec des rayons des deux côtés. Se prononce comme \"I'll\"."], ["\"Receipt\"", "le papier qui montre ce que vous avez acheté et payé (ticket de caisse). Le p ne se prononce pas."], ["\"Return\"", "rapporter un article au magasin pour récupérer votre argent."], ["\"Cashier\"", "l'employé qui prend votre argent à la caisse (caissier)."]],
          slides: [
            { title: "Trouver des articles", bullets: ["\"Excuse me, where can I find the rice?\"", "\"Do you have diapers?\"", "Réponse : \"Aisle 5.\""] },
            { title: "Demander le prix", bullets: ["Un article : \"How much is this?\"", "Plusieurs articles : \"How much are these?\""] },
            { title: "À la caisse", bullets: ["\"Cash or card?\" - \"Card, please.\"", "\"Do you want a bag?\" - \"No bag, thanks.\"", "\"Do you want your receipt?\" - \"Yes, please.\""] },
            { title: "Les retours", bullets: ["Gardez votre ticket de caisse", "\"I'd like to return this, please.\"", "\"What is your return policy?\""] }
          ],
          tryIt: "Faites un jeu de rôle avec un partenaire, ou jouez les deux rôles à voix haute : vous êtes dans une épicerie. Demandez où se trouvent deux articles, demandez le prix d'un article et répondez aux trois questions du caissier. La prochaine fois que vous faites des courses, utilisez une phrase pour de vrai.",
          youCanNow: "demander où se trouve un article dans un magasin, demander le prix, répondre au caissier et demander à rapporter un article.",
          quickCheck: [
            { objective: "O3", q: "Vous voulez connaître le prix de deux chemises. Que demandez-vous ?", options: ["\"Where are you from?\"", "\"Can you spell that?\"", "\"What time is it?\"", "\"How much are these?\""], answer: 3, why: "\"How much are these?\" demande le prix de plusieurs articles." },
            { objective: "O3", q: "La caissière demande \"Cash or card?\" Que veut-elle savoir ?", options: ["Comment vous allez payer", "Votre nom", "Où vous habitez", "Si vous voulez un sac"], answer: 0, why: "\"Cash or card?\" demande comment vous allez payer (en espèces ou par carte)." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Rencontrer des gens et faire des achats",
        questions: [
          { objective: "O1", q: "Quelle est une bonne première phrase quand vous rencontrez quelqu'un ?", options: ["\"How much is this?\"", "\"Hi, my name is Rosa.\"", "\"Turn left.\"", "\"I have a fever.\""], answer: 1, why: "Une salutation et votre nom : c'est ainsi que commence une présentation." },
          { objective: "O1", q: "Vous avez dit votre nom. Quelle est une bonne question à poser en retour ?", options: ["\"Where is the milk?\"", "\"Cash or card?\"", "\"What's your name?\"", "\"Can I return this?\""], answer: 2, why: "Demander le nom de l'autre personne fait continuer la conversation." },
          { objective: "O2", q: "Vous n'avez pas compris une adresse. Que faut-il faire ?", options: ["Dire \"yes\" et deviner", "Demander \"Can you write it down, please?\"", "Partir", "Demander \"How much is it?\""], answer: 1, why: "Demander à la personne de l'écrire vous donne l'adresse exacte." },
          { objective: "O2", q: "Quelqu'un dit \"Your appointment is Friday at nine.\" Comment vérifiez-vous que vous avez bien entendu ?", options: ["\"So, Friday at 9?\"", "\"Nice to meet you.\"", "\"Do you have a bag?\"", "\"I'm from Haiti.\""], answer: 0, why: "Répéter le jour et l'heure permet à la personne de confirmer ou de corriger." },
          { objective: "O3", q: "Vous voulez rapporter des chaussures qui ne vous vont pas. Que dites-vous ?", options: ["\"Where are you from?\"", "\"How do you spell that?\"", "\"Turn right.\"", "\"I'd like to return this, please. Here is my receipt.\""], answer: 3, why: "Cette phrase demande à rapporter l'article et montre le ticket de caisse." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Le médecin, le téléphone et les déplacements",
      lessons: [
        {
          title: "Chez le médecin : dire ce qui ne va pas",
          objectives: ["O4"],
          minutes: 5,
          goal: "Dire au médecin ou à l'infirmière ce qui ne va pas, où vous avez mal et depuis quand.",
          text: [
            "À l'accueil, dites : \"Hi, I have an appointment at 10 o'clock. My name is Ana Lopez.\" On peut vous demander votre date de naissance et votre carte d'assurance santé.",
            "Pour dire ce qui ne va pas : \"I have a headache.\" \"I have a fever.\" \"My stomach hurts.\" \"My back hurts.\" \"I feel dizzy.\" Puis dites depuis quand : \"It started two days ago.\" ou \"I've had it since Monday.\" Le médecin peut demander : \"Does it hurt here?\" Répondez : \"Yes, there.\" ou \"No.\"",
            "Si vous avez besoin d'aide en anglais, vous pouvez demander : \"Do you have an interpreter?\" Un interprète est une personne qui vous aide à parler avec le médecin dans votre langue. Demandez au médecin d'écrire les consignes : \"Can you write that down, please?\" Ce cours enseigne seulement des mots. Les questions sur votre santé sont pour votre médecin ou votre infirmière.",
            "En cas d'urgence, par exemple si quelqu'un a du mal à respirer ou a mal à la poitrine, appelez le 911 (le numéro d'urgence aux États-Unis) et dites : \"I need an ambulance.\" Puis dites où vous êtes."
          ],
          steps: ["À l'accueil : dites l'heure de votre rendez-vous et votre nom.", "Dites ce qui ne va pas : \"I have a ...\" ou \"My ... hurts.\"", "Dites depuis quand : \"for two days\" ou \"since Monday\".", "Demandez un interprète ou des consignes écrites si vous en avez besoin."],
          words: [["\"Appointment\"", "un jour et une heure fixés pour voir quelqu'un, comme le médecin (rendez-vous)."], ["\"Fever\"", "quand votre corps est trop chaud parce que vous êtes malade (fièvre)."], ["\"Interpreter\"", "une personne qui aide deux personnes à parler dans des langues différentes (interprète)."], ["\"Insurance card\"", "la carte de votre assurance santé que le cabinet demande à voir."]],
          slides: [
            { title: "À l'accueil", bullets: ["\"I have an appointment at 10 o'clock.\"", "\"My name is Ana Lopez.\""] },
            { title: "Dites ce qui ne va pas", bullets: ["\"I have a headache.\" \"I have a fever.\"", "\"My stomach hurts.\" \"My back hurts.\"", "\"I feel dizzy.\""] },
            { title: "Dites depuis quand", bullets: ["\"for two days\"", "\"since Monday\""] },
            { title: "Demandez de l'aide pour comprendre", bullets: ["\"Do you have an interpreter?\"", "\"Can you write that down, please?\"", "Urgence : appelez le 911, \"I need an ambulance.\""] }
          ],
          tryIt: "Pour vous exercer seulement, avec un problème inventé : écrivez trois phrases en anglais pour le médecin, par exemple \"I have a sore throat. It started on Sunday. It hurts when I swallow.\" Lisez-les à voix haute. Puis exercez-vous à la phrase de l'accueil avec un nom et une heure inventés.",
          youCanNow: "vous présenter à l'accueil, dire ce qui ne va pas et depuis quand, et demander un interprète ou des consignes écrites.",
          quickCheck: [
            { objective: "O4", q: "Vous avez mal à la tête depuis hier. Que dites-vous au médecin ?", options: ["\"I've had a headache since yesterday.\"", "\"How much is this?\"", "\"Turn left.\"", "\"Cash, please.\""], answer: 0, why: "Elle dit le problème et depuis combien de temps il dure." },
            { objective: "O4", q: "Vous ne comprenez pas bien le médecin. Que pouvez-vous demander ?", options: ["\"Where is aisle 5?\"", "\"Nice to meet you.\"", "\"Do you have a bag?\"", "\"Do you have an interpreter?\""], answer: 3, why: "Un interprète vous aide, vous et le médecin, à vous comprendre." }
          ]
        },
        {
          title: "Au téléphone : prendre rendez-vous et appeler l'école",
          objectives: ["O4", "O2"],
          minutes: 6,
          goal: "Prendre rendez-vous par téléphone et répéter le jour et l'heure pour les vérifier.",
          text: [
            "Les appels sont difficiles parce que vous ne voyez pas la personne. Préparez vos mots avant d'appeler et gardez un stylo et du papier à portée de main.",
            "Pour prendre rendez-vous : \"Hi, my name is Ana Lopez. I'd like to make an appointment, please.\" On vous demande : \"What is it for?\" \"What day works for you?\" Répondez : \"I have a cough.\" \"Tuesday morning is good.\" Puis répétez : \"So, Tuesday the 12th at 9:30?\" Pour le changer : \"I need to change my appointment, please.\"",
            "Pour appeler l'école de votre enfant quand il est malade : \"Hi, this is Ana Lopez. My son, David Lopez, is sick today. He is in second grade. He will not come to school today.\"",
            "Si l'appel va trop vite, utilisez vos phrases de la leçon 2 : \"Sorry, can you speak more slowly, please?\" \"Can you spell that?\" Si on vous donne un numéro de téléphone, répétez-le par groupes : \"5-5-5, 0-1-2-3?\""
          ],
          steps: ["Écrivez ce que vous allez dire avant d'appeler.", "Dites votre nom et pourquoi vous appelez.", "Répondez : pour quoi c'est, et quel jour et quelle heure vous conviennent.", "Écrivez le jour et l'heure, puis répétez-les.", "Pour finir : \"Thank you. Bye.\""],
          words: [["\"Make an appointment\"", "fixer un jour et une heure pour voir quelqu'un (prendre rendez-vous)."], ["\"Change\" / \"cancel\"", "passer à une autre heure / annuler le rendez-vous."], ["\"What works for you?\"", "une question qui veut dire « quel jour ou quelle heure vous convient ? »"]],
          slides: [
            { title: "Avant d'appeler", bullets: ["Écrivez ce que vous allez dire", "Un stylo et du papier prêts"] },
            { title: "Prendre rendez-vous", bullets: ["\"I'd like to make an appointment, please.\"", "\"What day works for you?\" - \"Tuesday morning.\"", "Répétez : \"So, Tuesday the 12th at 9:30?\""] },
            { title: "Appeler l'école", bullets: ["\"My son, David Lopez, is sick today.\"", "\"He is in second grade.\"", "\"He will not come to school today.\""] },
            { title: "Quand ça va trop vite", bullets: ["\"Can you speak more slowly, please?\"", "Répétez les numéros par groupes"] }
          ],
          tryIt: "Écrivez en anglais un court texte pour prendre rendez-vous chez le médecin par téléphone, avec un nom et un problème inventés. Jouez-le avec un partenaire, ou dites les deux rôles à voix haute. Vérifiez que vous répétez le jour et l'heure à la fin.",
          youCanNow: "prendre ou changer un rendez-vous par téléphone, appeler l'école de votre enfant et répéter le jour et l'heure pour les vérifier.",
          quickCheck: [
            { objective: "O4", q: "Le cabinet vous dit \"What day works for you?\" Que veut-il savoir ?", options: ["Votre adresse", "Votre travail", "Un jour qui vous convient", "Votre carte d'assurance"], answer: 2, why: "\"What day works for you?\" demande quel jour vous convient." },
            { objective: "O2", q: "Le cabinet vous donne l'heure de votre rendez-vous. Que faites-vous ensuite ?", options: ["Raccrocher tout de suite", "Répéter le jour et l'heure pour vérifier", "Dire \"Nice to meet you\"", "Demander \"How much are these?\""], answer: 1, why: "Répéter le jour et l'heure permet d'être sûr d'avoir bien entendu." }
          ]
        },
        {
          title: "Demander son chemin",
          objectives: ["O5"],
          minutes: 5,
          goal: "Demander le chemin d'un endroit et répéter les indications pour les vérifier.",
          text: [
            "Commencez par \"Excuse me.\" Puis demandez : \"How do I get to the library?\" ou \"Where is the bus stop?\" ou \"Is the post office near here?\"",
            "Mots de direction : \"Go straight.\" \"Turn left.\" \"Turn right.\" \"It's on the corner.\" \"It's next to the bank.\" \"It's across from the park.\" \"Go two blocks.\" Un pâté de maisons (\"block\") est la partie d'une rue entre deux coins de rue.",
            "Répétez les indications : \"So, go straight two blocks, then turn left?\" La personne dira \"Yes\" ou vous corrigera. Si c'est trop long, demandez : \"Can you show me on my phone?\" ou \"Can you point?\"",
            "Conversation d'exemple. A : \"Excuse me, how do I get to the clinic?\" B : \"Go straight two blocks and turn right. It's next to the pharmacy.\" A : \"So, straight two blocks, turn right, next to the pharmacy?\" B : \"That's right.\" A : \"Thank you!\""
          ],
          steps: ["Dites \"Excuse me.\"", "Demandez \"How do I get to ...?\" ou \"Where is ...?\"", "Écoutez \"left\", \"right\", \"straight\", \"blocks\" et \"next to\".", "Répétez les indications.", "Dites \"Thank you!\""],
          words: [["\"Straight\"", "tout droit, sans tourner."], ["\"Block\"", "la partie d'une rue entre deux coins de rue (pâté de maisons)."], ["\"Across from\"", "de l'autre côté de la rue par rapport à quelque chose (en face de)."], ["\"Next to\"", "juste à côté de quelque chose."]],
          slides: [
            { title: "Demandez le chemin", bullets: ["\"Excuse me, how do I get to the library?\"", "\"Where is the bus stop?\"", "\"Is the post office near here?\""] },
            { title: "Mots de direction", bullets: ["\"Go straight.\" \"Turn left.\" \"Turn right.\"", "\"Go two blocks.\"", "\"Next to\" / \"across from\" / \"on the corner\""] },
            { title: "Vérifiez", bullets: ["\"So, straight two blocks, then left?\"", "\"Can you show me on my phone?\""] }
          ],
          sources: [{ name: "USA Learns : exercices d'anglais gratuits pour adultes", url: "https://www.usalearns.org/" }],
          tryIt: "Tâche finale : préparez votre fiche de phrases d'anglais de tous les jours. Écrivez en anglais votre présentation, trois phrases pour demander de répéter ou de ralentir, deux questions pour le magasin, un court texte téléphonique pour un rendez-vous chez le médecin et une question pour demander le chemin d'un lieu où vous allez souvent. Lisez toute la fiche à voix haute, ou jouez-la avec un partenaire, et enregistrez-vous si vous pouvez.",
          youCanNow: "demander votre chemin, comprendre \"left\", \"right\", \"straight\" et \"next to\", et répéter les indications pour les vérifier.",
          quickCheck: [
            { objective: "O5", q: "La personne dit \"It's across from the park.\" Où est-ce ?", options: ["Dans le parc", "Loin du parc", "De l'autre côté de la rue, en face du parc", "Derrière vous"], answer: 2, why: "\"Across from\" veut dire de l'autre côté de la rue." },
            { objective: "O5", q: "Quelle question sert à demander son chemin ?", options: ["\"How much is this?\"", "\"How do I get to the bus station?\"", "\"Do you have an interpreter?\"", "\"What's your name?\""], answer: 1, why: "\"How do I get to ...?\" demande le chemin vers un endroit." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Le médecin, le téléphone et les déplacements",
        questions: [
          { objective: "O4", q: "Vous arrivez au centre de santé. Que dites-vous à l'accueil ?", options: ["\"I have an appointment at 2 o'clock. My name is Li Wei.\"", "\"Turn right.\"", "\"Cash or card?\"", "\"Where are you from?\""], answer: 0, why: "En arrivant, dites l'heure de votre rendez-vous et votre nom." },
          { objective: "O4", q: "Quelle phrase dit depuis combien de temps vous êtes malade ?", options: ["\"My stomach hurts.\"", "\"I feel dizzy.\"", "\"I have an appointment.\"", "\"I've had a fever since Monday.\""], answer: 3, why: "\"Since Monday\" dit au médecin depuis quand." },
          { objective: "O4", q: "Vous ne pouvez pas aller à votre rendez-vous de vendredi. Que dites-vous au téléphone ?", options: ["\"I need to change my appointment, please.\"", "\"Nice to meet you.\"", "\"Where is aisle 3?\"", "\"Go straight.\""], answer: 0, why: "Cette phrase demande à déplacer le rendez-vous à une autre heure." },
          { objective: "O5", q: "Que veut dire \"Go two blocks\" ?", options: ["Attendre deux minutes", "Marcher et passer deux coins de rue", "Prendre le bus numéro deux", "Tourner deux fois"], answer: 1, why: "Un \"block\" est la partie d'une rue entre deux coins de rue." },
          { objective: "O5", q: "Quelqu'un vous indique le chemin. Comment vérifiez-vous que vous avez compris ?", options: ["Dire \"Okay\" et partir", "Demander \"How much is it?\"", "Répéter les indications", "Demander \"What's your name?\""], answer: 2, why: "Répéter les indications permet à la personne de les confirmer ou de les corriger." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'anglais de tous les jours (ESL)",
    questions: [
      { objective: "O1", q: "Quelle est la meilleure façon de commencer une présentation ?", options: ["\"Hello, I'm Marco.\"", "\"How much is this?\"", "\"Turn left.\"", "\"My back hurts.\""], answer: 0, why: "Une salutation et votre nom commencent une présentation." },
      { objective: "O1", q: "Que veut dire \"I'm\" ?", options: ["\"I will\"", "\"I have\"", "\"I am\"", "\"I can\""], answer: 2, why: "\"I'm\" est la forme courte de \"I am\"." },
      { objective: "O1", q: "Un nouveau collègue dit \"I'm from Nigeria.\" Quelle est une bonne question en retour ?", options: ["\"Cash or card?\"", "\"Where is the bus stop?\"", "\"Can you spell that?\"", "\"How long have you been here?\""], answer: 3, why: "Une question aimable sur la personne fait continuer la conversation." },
      { objective: "O2", q: "Quelqu'un parle trop vite. Que dites-vous ?", options: ["\"Yes, yes, okay.\"", "\"Can you speak more slowly, please?\"", "\"Nice to meet you.\"", "\"Goodbye.\""], answer: 1, why: "Demander à la personne de ralentir est poli et vous aide à comprendre." },
      { objective: "O2", q: "Pourquoi vaut-il mieux demander que dire \"yes\" quand vous n'avez pas compris ?", options: ["Vous risquez de rater une information importante, comme une heure ou un lieu", "Demander est impoli", "Les gens n'aiment pas les questions", "C'est plus rapide de deviner"], answer: 0, why: "Un \"yes\" faux peut vous faire rater une heure, un lieu ou une consigne." },
      { objective: "O2", q: "Vous devez écrire le nom d'une rue que vous avez entendu. Que demandez-vous ?", options: ["\"How much is it?\"", "\"Do you want a bag?\"", "\"How do you spell that?\"", "\"What's your name?\""], answer: 2, why: "\"How do you spell that?\" demande les lettres." },
      { objective: "O3", q: "Vous ne trouvez pas le pain dans un magasin. Que demandez-vous à un employé ?", options: ["\"I have a fever.\"", "\"So, Tuesday at 3?\"", "\"Nice to meet you.\"", "\"Excuse me, where can I find the bread?\""], answer: 3, why: "\"Where can I find ...?\" demande où se trouve un article." },
      { objective: "O3", q: "Qu'est-ce qu'un \"receipt\" ?", options: ["Le papier qui montre ce que vous avez acheté et payé", "Un sac de courses", "Un employé du magasin", "Une allée du magasin"], answer: 0, why: "Le ticket de caisse (\"receipt\") montre ce que vous avez acheté ; gardez-le pour les retours." },
      { objective: "O3", q: "Le caissier demande \"Do you want a bag?\" Vous n'en voulez pas. Que dites-vous ?", options: ["\"Aisle 5.\"", "\"No bag, thanks.\"", "\"Turn right.\"", "\"I'm from Peru.\""], answer: 1, why: "\"No bag, thanks\" dit non poliment." },
      { objective: "O4", q: "Quelle phrase dit au médecin ce qui ne va pas ?", options: ["\"Go straight.\"", "\"How much are these?\"", "\"My stomach hurts.\"", "\"Nice to meet you.\""], answer: 2, why: "\"My stomach hurts\" dit le problème." },
      { objective: "O4", q: "Qu'est-ce qu'un \"interpreter\" ?", options: ["Un médecin pour enfants", "Une personne qui aide deux personnes à parler dans des langues différentes", "Une sorte de médicament", "Un formulaire à remplir"], answer: 1, why: "Un interprète (\"interpreter\") vous aide, vous et le médecin, à vous comprendre." },
      { objective: "O4", q: "Quelqu'un a mal à la poitrine et du mal à respirer. Que faites-vous ?", options: ["Appeler le 911 et dire \"I need an ambulance.\"", "Prendre rendez-vous pour la semaine prochaine", "Aller faire des courses", "Envoyer un message à un ami"], answer: 0, why: "La douleur à la poitrine et le mal à respirer sont des urgences : appelez le 911." },
      { objective: "O4", q: "Vous appelez pour prendre rendez-vous. Quelle est la première chose à dire ?", options: ["\"Turn left.\"", "\"How much is this?\"", "\"Do you want a bag?\"", "\"Hi, my name is Ana Lopez. I'd like to make an appointment, please.\""], answer: 3, why: "Dites votre nom et pourquoi vous appelez." },
      { objective: "O4", q: "Le cabinet dit \"Thursday at 4:15.\" Que dites-vous ensuite ?", options: ["\"So, Thursday at 4:15?\"", "\"Where are you from?\"", "\"Cash, please.\"", "\"Go straight.\""], answer: 0, why: "Répéter le jour et l'heure vérifie que vous avez bien entendu." },
      { objective: "O4", q: "Votre fille est malade et va manquer l'école. Qui appelez-vous et que dites-vous ?", options: ["Le magasin : \"Where is the milk?\"", "L'école : \"My daughter is sick today. She will not come to school.\"", "La compagnie de bus : \"Turn right.\"", "Personne"], answer: 1, why: "Appelez l'école, donnez le nom de votre enfant et dites qu'elle est malade aujourd'hui." },
      { objective: "O5", q: "Que veut dire \"Turn right\" ?", options: ["Arrêter de marcher", "Revenir en arrière", "Changer de direction vers la droite", "Aller tout droit"], answer: 2, why: "\"Turn right\" veut dire tourner à droite." },
      { objective: "O5", q: "La banque est \"next to\" la pharmacie. Où est-elle ?", options: ["Loin de la pharmacie", "Dans la pharmacie", "Dans une autre rue", "Juste à côté de la pharmacie"], answer: 3, why: "\"Next to\" veut dire juste à côté." },
      { objective: "O5", q: "Les indications sont longues et pas claires. Que pouvez-vous demander ?", options: ["\"Can you show me on my phone?\"", "\"Do you want a bag?\"", "\"I have a headache.\"", "\"Nice to meet you.\""], answer: 0, why: "Une carte sur votre téléphone, ou une personne qui montre du doigt, rend les indications claires." },
      { objective: "O2", q: "Dans une longue phrase, vous avez raté seulement l'heure. Quelle est la meilleure question ?", options: ["\"Goodbye.\"", "\"Sorry, what time?\"", "\"How much are these?\"", "\"Where are you from?\""], answer: 1, why: "Demander seulement la partie ratée est rapide et clair." },
      { objective: "O1", q: "Quelle présentation est claire et complète ?", options: ["\"Me, me, job.\"", "\"Where is the bank?\"", "\"Hi, I'm Fatima. I'm from Syria. I'm a cook.\"", "\"Card, please.\""], answer: 2, why: "Elle donne le nom, le pays et le travail en phrases courtes." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 5, 6, 9, 13, 15, 16] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, exercez-vous sur cette partie et réessayez.",
    criteria: [
      { name: "Présentation", objective: "O1", notYet: "Moins de trois phrases, ou pas de nom ou pas de question en retour.", meets: "Dit son nom, son pays d'origine et ce qu'il fait, et pose une question en retour.", exceeds: "Le dit à voix haute sans lire et ajoute un détail de plus, comme un objectif." },
      { name: "Demander de répéter ou de ralentir", objective: "O2", notYet: "Pas de phrases, ou les phrases ne sont pas polies.", meets: "Trois phrases polies pour demander de répéter, de ralentir, d'épeler ou d'écrire.", exceeds: "Montre aussi comment répéter quelque chose pour le vérifier, comme \"So, Tuesday at 3?\"" },
      { name: "Questions au magasin", objective: "O3", notYet: "Pas de questions pour le magasin, ou elles ne demandent ni un article ni un prix.", meets: "Deux questions claires, par exemple où se trouve un article et son prix.", exceeds: "Répond aussi aux questions du caissier dans un jeu de rôle." },
      { name: "Texte téléphonique pour un rendez-vous", objective: "O4", notYet: "Il manque le nom, le motif ou le jour et l'heure.", meets: "Donne le nom, le motif, un jour et une heure qui conviennent, et répète l'heure.", exceeds: "Montre aussi comment changer le rendez-vous ou demander un interprète." },
      { name: "Demander son chemin", objective: "O5", notYet: "Pas de question, ou la question ne nomme pas de lieu.", meets: "Une question claire vers un vrai lieu, et une phrase qui répète les indications.", exceeds: "Utilise correctement trois mots de direction dans un jeu de rôle." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui disent avoir fait seuls un appel, une prise de rendez-vous ou une demande au magasin en anglais dans les 30 jours (enquête de suivi)",
      "Apprenants qui commencent \"L'anglais au travail (ESL)\" ou un cours d'anglais pour adultes dans les 30 jours",
      "Les programmes partenaires signalent moins de rendez-vous manqués à cause de malentendus de langue"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur pour regarder les leçons, ou une copie imprimée du texte des leçons",
      "Du papier et un stylo pour les fiches de phrases et les textes",
      "Un partenaire pour les jeux de rôle, ou un téléphone pour vous enregistrer",
      "Environ 60 à 75 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "Lisez d'abord chaque conversation d'exemple à voix haute, puis faites-la lire aux apprenants par deux, puis faites-les changer de rôle.",
      "Les versions traduites gardent les phrases anglaises en anglais ; expliquez-les dans la langue des apprenants, mais pratiquez-les en anglais.",
      "Utilisez des noms, des dates de naissance et des numéros de téléphone inventés pour tous les exercices ; ne recueillez jamais de vraies informations privées.",
      "Félicitez les essais, pas la grammaire parfaite. Le but, ce sont des phrases qui marchent et le courage de les utiliser.",
      "La leçon chez le médecin enseigne seulement des mots ; renvoyez les questions de santé vers un médecin ou une infirmière. Indiquez aux apprenants les cours d'anglais gratuits pour adultes près de chez eux (écoles pour adultes, bibliothèques, community colleges, ces établissements publics d'études courtes) et des exercices gratuits comme USA Learns."
    ]
  }
};
