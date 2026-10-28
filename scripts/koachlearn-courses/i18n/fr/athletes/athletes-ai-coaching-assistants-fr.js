"use strict";

// Koach Learn course (French translation of athletes/athletes-ai-coaching-assistants.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-ai-coaching-assistants-fr",
  lang: "fr",
  translationOf: "athletes-ai-coaching-assistants",
  category: "Athletes",
  name: "Assistants de coaching IA",
  skills: "Configurer un assistant IA avec des consignes de coaching, Planifier les entraînements avec l'IA, Écrire des messages aux parents et aux joueurs, Créer des fiches d'exercices et des quiz, Garder les données des athlètes privées et les décisions humaines",
  outcome: "configurer un assistant IA comme aide au coaching avec vos propres consignes permanentes, puis l'utiliser pour planifier un entraînement de 90 minutes, écrire un message clair aux parents, et créer une fiche d'exercice et un quiz de cinq questions sur le système de jeu, le tout vérifié par vous et sans aucune donnée privée sur les athlètes.",
  about: [
    "Ce cours s'adresse aux entraîneurs principaux, aux entraîneurs adjoints, aux directeurs de club et aux athlètes qui aident à entraîner des plus jeunes. Les entraîneurs passent des heures sur la planification et l'administratif ; un assistant IA peut en prendre une partie.",
    "Vous allez configurer un assistant IA gratuit avec des consignes permanentes sur votre équipe, puis l'utiliser pour planifier des entraînements, écrire des messages et créer du matériel pédagogique. Vous fixerez aussi des règles claires : ce qui reste privé et quelles décisions restent humaines.",
    "Chaque leçon dure environ cinq minutes et comprend une tâche « Essayez maintenant ». Une vérification des connaissances termine chaque chapitre, et un quiz de 20 questions termine le cours. Suivez les règles de votre école, de votre club ou de votre ligue sur la technologie, la communication avec les mineurs et les données des élèves."
  ],
  finalTask: "Écrivez les consignes permanentes de votre assistant de coaching (niveau de l'équipe, style, règles de sécurité, ce qu'il ne faut pas inclure), puis utilisez-le pour produire un plan d'entraînement de 90 minutes, un message aux parents sur le programme de la semaine prochaine, une fiche pour un exercice et un quiz de cinq questions sur le système de jeu. Vérifiez et retouchez chaque élément, et confirmez qu'aucune information privée sur les athlètes n'a été utilisée.",
  chapters: [
    {
      name: "Chapitre 1 : Configurer votre assistant de coaching",
      lessons: [
        {
          title: "Ce qu'un assistant de coaching IA peut faire",
          minutes: 4,
          goal: "Lister les tâches de coaching à confier à l'IA et les décisions à garder pour vous.",
          text: [
            "Un assistant de coaching IA est un assistant IA général, comme ChatGPT, Microsoft Copilot ou Google Gemini, que vous utilisez pour votre travail d'entraîneur. Il peut rédiger des plans d'entraînement, écrire des e-mails, expliquer des règles, créer des descriptions d'exercices, des quiz et des plannings, et résumer des notes.",
            "Il ne peut pas voir vos joueurs, connaître leur santé ou leurs sentiments, ni assumer de responsabilité. Le temps de jeu, la discipline, les décisions de blessure et de reprise du jeu, les choix de sécurité et tout ce qui touche au bien-être d'un joueur restent entre vos mains et celles des bons professionnels.",
            "Une bonne règle : l'IA rédige, l'entraîneur décide. Tout ce qu'elle écrit est un premier brouillon que vous vérifiez."
          ],
          words: [["Assistant de coaching IA", "un assistant IA général utilisé pour aider aux tâches d'entraîneur."], ["Reprise du jeu", "la décision du moment où un athlète blessé peut rejouer sans danger ; elle est prise par des professionnels de santé."]],
          slides: [
            { title: "L'IA peut rédiger", bullets: ["Plans d'entraînement et plannings", "E-mails et messages", "Descriptions d'exercices et quiz", "Résumés de vos notes"] },
            { title: "L'entraîneur garde", bullets: ["Le temps de jeu et la discipline", "Les choix de sécurité", "Le bien-être ; les blessures vont au personnel médical"] },
            { title: "La règle", bullets: ["L'IA rédige", "L'entraîneur décide"] }
          ],
          tryIt: "Écrivez deux listes : cinq tâches hebdomadaires d'entraîneur que l'IA pourrait rédiger, et cinq décisions que vous garderez toujours.",
          youCanNow: "décider quelles tâches de coaching l'IA peut aider à faire et quelles décisions restent humaines."
        },
        {
          title: "Écrire des consignes permanentes",
          minutes: 5,
          goal: "Écrire des consignes permanentes qui informent l'IA sur votre équipe et vos règles.",
          text: [
            "Les consignes permanentes sont un paragraphe que vous collez au début d'une conversation (ou que vous enregistrez dans les instructions personnalisées ou la fonction projet de l'assistant, s'il en a) pour qu'il connaisse toujours votre contexte.",
            "Incluez : le sport, le niveau et la catégorie d'âge ; la taille de l'équipe ; la durée des entraînements et les installations ; votre style et vos valeurs d'entraîneur ; les règles de sécurité (exercices adaptés à l'âge, pauses pour boire, pas de préparation physique en guise de punition) ; et ce qu'il ne doit jamais inclure (noms des joueurs, détails de santé, notes scolaires).",
            "Exemple : « J'entraîne une équipe de football féminine U12 de 16 joueuses. Les entraînements durent 90 minutes sur un demi-terrain, le mardi et le jeudi. Je valorise l'effort, le plaisir et l'esprit d'équipe. Les plans doivent inclure un échauffement, une pause pour boire toutes les 20 minutes et des exercices adaptés à l'âge. Ne demande et n'utilise jamais les noms des joueuses ni de détails de santé. »"
          ],
          steps: ["Écrivez votre sport, votre niveau, la catégorie d'âge et la taille de l'équipe.", "Ajoutez la durée des entraînements et les installations.", "Ajoutez vos valeurs et votre style d'entraîneur.", "Ajoutez les règles de sécurité.", "Ajoutez ce qu'il ne doit jamais inclure.", "Enregistrez-les là où vous pourrez les coller à chaque fois."],
          words: [["Consignes permanentes", "le contexte que vous donnez à une IA au départ pour que chaque réponse corresponde à votre situation."], ["Adapté à l'âge", "qui convient à l'âge et au développement des joueurs."]],
          slides: [
            { title: "Consignes permanentes", bullets: ["À coller au début de chaque conversation", "Ou à enregistrer dans les réglages de l'assistant, s'il le permet"] },
            { title: "À inclure", bullets: ["Sport, niveau, âge, taille de l'équipe", "Durée des entraînements et espace", "Valeurs et règles de sécurité"] },
            { title: "À ne jamais inclure", bullets: ["Les noms des joueurs", "Les détails de santé", "Les notes scolaires ou infos familiales"] }
          ],
          tryIt: "Écrivez vos consignes permanentes en un paragraphe et enregistrez-les dans une note. Collez-les dans un assistant IA et demandez : « Résume ce que tu sais de mon équipe. » Corrigez tout ce qui est faux.",
          youCanNow: "écrire des consignes permanentes qui adaptent les réponses de l'IA à votre équipe."
        },
        {
          title: "Planifier un entraînement avec l'IA",
          minutes: 6,
          goal: "Utiliser l'IA pour rédiger un plan d'entraînement de 90 minutes et l'ajuster.",
          text: [
            "Après avoir collé vos consignes permanentes, demandez : « Planifie un entraînement de 90 minutes centré sur [compétence]. Inclus un échauffement, trois exercices progressifs, un jeu réduit, un retour au calme et des pauses pour boire. Donne les durées, l'installation, les points clés de coaching et comment rendre chaque exercice plus facile ou plus difficile. »",
            "Vérifiez-le en entraîneur : les exercices sont-ils sûrs et adaptés à l'âge ? Les durées tombent-elles juste ? Avez-vous l'espace et le matériel ? L'équilibre effort-récupération est-il bon ? Y a-t-il trop de files d'attente et de temps passé à attendre ?",
            "Posez des questions de suivi : « Nous n'avons que 10 ballons. » « Deux joueuses sont nouvelles. » « Remplace l'exercice 2 par quelque chose avec plus de touches de balle. » Gardez les plans qui vous plaisent dans un dossier pour les réutiliser et les améliorer."
          ],
          steps: ["Collez vos consignes permanentes.", "Demandez un plan de 90 minutes avec les durées, l'installation et les points clés.", "Vérifiez la sécurité, les durées, l'espace et le matériel.", "Posez des questions de suivi pour corriger les problèmes.", "Enregistrez le plan final."],
          words: [["Progression", "des exercices qui vont du simple au plus difficile."], ["Jeu réduit", "un jeu avec moins de joueurs et un espace plus petit pour que chacun touche plus le ballon."]],
          slides: [
            { title: "Demandez", bullets: ["Échauffement, 3 exercices progressifs", "Jeu réduit, retour au calme", "Durées, installation, points clés"] },
            { title: "Vérifiez en entraîneur", bullets: ["Sûr et adapté à l'âge ?", "Durées justes ? Espace et matériel ?", "Peu de temps d'attente ?"] },
            { title: "Ajustez", bullets: ["« Nous n'avons que 10 ballons. »", "« Deux joueuses sont nouvelles. »", "Gardez les plans qui vous plaisent"] }
          ],
          tryIt: "Utilisez vos consignes permanentes pour obtenir un plan de 90 minutes pour un vrai entraînement à venir. Faites au moins deux modifications de suivi et enregistrez-le.",
          youCanNow: "planifier un entraînement sûr et bien minuté avec l'aide de l'IA."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Configurer votre assistant de coaching",
        questions: [
          { q: "Quelle tâche convient bien à un assistant de coaching IA ?", options: ["Décider de la reprise du jeu après une commotion", "Sanctionner un joueur", "Rédiger un plan d'entraînement", "Juger les sentiments d'un joueur"], answer: 2, why: "L'IA rédige ; les décisions médicales et personnelles restent aux personnes." },
          { q: "Quelle est la règle de coaching pour l'IA ?", options: ["L'IA rédige, l'entraîneur décide", "L'IA décide de tout", "Ne jamais utiliser l'IA", "Les joueurs décident"], answer: 0, why: "Chaque production de l'IA est un premier brouillon." },
          { q: "Qu'est-ce qui a sa place dans les consignes permanentes ?", options: ["Les noms des joueurs", "Les détails de santé des joueurs", "Les notes scolaires des joueurs", "La catégorie d'âge et la durée des entraînements"], answer: 3, why: "Le contexte de l'équipe aide ; les données privées restent dehors." },
          { q: "Le plan de l'IA contient un exercice dangereux pour des enfants de 10 ans. Vous :", options: ["L'utilisez quand même", "Le remplacez par un exercice adapté à l'âge", "Le rendez plus difficile", "Supprimez les pauses pour boire"], answer: 1, why: "La sécurité et l'adaptation à l'âge passent en premier." },
          { q: "Un jeu réduit est utile parce que :", options: ["Il est plus long", "Chacun touche plus le ballon", "Il demande plus de matériel", "Les joueurs attendent en file"], answer: 1, why: "Moins de joueurs, c'est plus de participation." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Communication, supports et garde-fous",
      lessons: [
        {
          title: "Messages aux parents et aux joueurs",
          minutes: 5,
          goal: "Écrire un message clair et bienveillant aux parents ou aux joueurs avec l'IA et l'envoyer par les canaux approuvés.",
          text: [
            "Les entraîneurs écrivent beaucoup de messages : plannings, changements, rappels, attentes. Demandez : « Écris un court message amical aux parents sur les changements d'entraînement de la semaine prochaine : mardi passe à 17 h, jeudi est annulé pour la réparation du terrain. Indique quoi apporter. Moins de 100 mots. »",
            "Vérifiez les faits, les dates et le ton. Les messages de groupe parlent de l'équipe ; ne parlez jamais des performances, de la santé ou du comportement d'un joueur dans un message de groupe.",
            "Utilisez le moyen de communication approuvé par votre école ou votre club. Beaucoup d'organisations ont des règles pour les entraîneurs qui écrivent à des mineurs, par exemple inclure un parent ou un autre entraîneur. Les conversations difficiles, comme le temps de jeu ou le comportement, se font mieux en personne ou par téléphone, pas par des textos écrits par l'IA."
          ],
          steps: ["Demandez à l'IA un brouillon court et amical.", "Vérifiez les faits, les dates et le ton.", "Gardez les messages de groupe centrés sur l'équipe.", "Envoyez par les canaux approuvés.", "Menez les conversations difficiles en personne."],
          words: [["Canal approuvé", "le moyen de communication que votre école ou votre club autorise pour les entraîneurs."], ["Ton", "le sentiment que donne un message : amical, ferme, chaleureux."]],
          slides: [
            { title: "L'IA rédige les messages", bullets: ["Plannings, changements, rappels", "Courts et amicaux"] },
            { title: "Vérifiez", bullets: ["Les faits et les dates", "Le ton", "Seulement des sujets d'équipe en groupe"] },
            { title: "Bien l'envoyer", bullets: ["Canaux approuvés", "Respectez les règles pour écrire aux mineurs", "Conversations difficiles en personne"] }
          ],
          tryIt: "Utilisez l'IA pour écrire un vrai message aux parents, ou un message d'entraînement, sur un changement de planning. Vérifiez chaque date et envoyez-le (ou enregistrez-le) par votre canal approuvé.",
          youCanNow: "écrire des messages d'équipe clairs avec l'IA et les envoyer de la bonne façon."
        },
        {
          title: "Fiches d'exercices et quiz sur le système de jeu",
          minutes: 5,
          goal: "Créer une fiche d'exercice et un quiz de cinq questions sur le système de jeu.",
          text: [
            "Les fiches d'exercices aident les entraîneurs adjoints et les joueurs à faire les exercices de la même façon. Demandez : « Fais une fiche d'une page pour [exercice] : objectif, installation, étapes, points clés de coaching, erreurs courantes, et comment le rendre plus facile ou plus difficile. » Ajoutez un schéma simple avec un outil comme Canva ou à la main.",
            "Les quiz aident les joueurs à apprendre le système de jeu et les règles. Demandez : « Écris cinq questions à choix multiples sur notre combinaison de touche : [décrivez-la]. Une seule bonne réponse par question, avec une courte explication. » Vérifiez chaque réponse avec votre vraie combinaison.",
            "Utilisez un outil de quiz comme Google Forms pour le partager, sans collecter plus d'informations personnelles que nécessaire."
          ],
          steps: ["Demandez à l'IA une fiche d'exercice avec l'objectif, l'installation, les étapes et les points clés.", "Ajoutez un schéma simple.", "Décrivez une combinaison et demandez cinq questions de quiz.", "Vérifiez chaque réponse avec votre vraie combinaison.", "Partagez avec un formulaire simple, en collectant le minimum d'infos."],
          words: [["Fiche d'exercice", "un guide d'une page qui explique comment mener un exercice."], ["Système de jeu", "l'ensemble des combinaisons d'une équipe et des règles pour les exécuter."]],
          slides: [
            { title: "Fiche d'exercice", bullets: ["Objectif, installation, étapes", "Points clés, erreurs courantes", "Versions plus faciles et plus difficiles"] },
            { title: "Quiz sur le système de jeu", bullets: ["Décrivez la combinaison", "Cinq questions avec explications", "Vérifiez chaque réponse"] },
            { title: "Partagez simplement", bullets: ["Google Forms ou équivalent", "Collectez le minimum d'infos personnelles"] }
          ],
          tryIt: "Créez avec l'IA une fiche d'exercice et un quiz de cinq questions sur une de vos combinaisons. Vérifiez les deux et corrigez tout ce qui est faux.",
          youCanNow: "créer des fiches d'exercices et des quiz sur le système de jeu avec l'aide de l'IA."
        },
        {
          title: "Garde-fous : vie privée, sécurité et équité",
          minutes: 5,
          goal: "Écrire vos garde-fous pour l'IA dans le coaching et les respecter.",
          text: [
            "Vie privée : ne collez jamais dans les outils d'IA les noms des joueurs avec des informations de santé, des blessures, des notes scolaires, des situations familiales, des coordonnées ou des photos de mineurs. Utilisez les postes ou les numéros. Vérifiez les règles de votre organisation sur les outils autorisés avec les données des élèves ou des joueurs.",
            "Sécurité : l'IA peut proposer des exercices, une préparation physique ou des pratiques par forte chaleur dépassés ou dangereux. Vérifiez les exercices avec les recommandations de votre instance dirigeante et votre soigneur sportif, et n'utilisez jamais l'IA pour des décisions médicales, de commotion ou de reprise du jeu ; la formation gratuite HEADS UP du CDC (l'agence de santé publique américaine) est un bon point de départ pour les bases sur les commotions.",
            "Équité et honnêteté : les décisions de sélection et de temps de jeu viennent de ce que vous observez, et s'expliquent aux joueurs en personne. Soyez transparent avec les familles sur votre usage de l'IA pour la planification, si votre organisation le demande."
          ],
          steps: ["Écrivez votre règle de vie privée : pas de noms avec des infos privées.", "Écrivez votre règle de sécurité : vérifier les exercices ; pas de décisions médicales.", "Écrivez votre règle d'équité : des décisions fondées sur l'observation, expliquées en personne.", "Vérifiez les règles technologiques de votre organisation.", "Partagez les garde-fous avec votre staff."],
          words: [["Garde-fou", "une règle qui vous protège pendant que vous utilisez un outil."], ["Instance dirigeante", "l'organisation qui fixe les règles de votre sport ou de votre niveau."]],
          slides: [
            { title: "Vie privée", bullets: ["Pas de noms avec santé, notes ou infos familiales", "Utilisez les postes ou les numéros", "Suivez les règles d'outils de votre organisation"] },
            { title: "Sécurité", bullets: ["Vérifiez exercices et préparation physique", "Pas de décisions médicales ou de reprise du jeu", "CDC HEADS UP pour les bases sur les commotions"] },
            { title: "Équité", bullets: ["Des décisions fondées sur ce que vous observez", "Expliquées en personne"] }
          ],
          sources: [{ name: "CDC : formation HEADS UP sur les commotions cérébrales (en anglais)", url: "https://www.cdc.gov/heads-up/index.html" }],
          tryIt: "Tâche finale : écrivez vos garde-fous et vos consignes permanentes, puis produisez avec l'IA un plan d'entraînement, un message aux parents, une fiche d'exercice et un quiz, en vérifiant chacun et en confirmant qu'aucune donnée privée d'athlète n'a été utilisée.",
          youCanNow: "utiliser un assistant de coaching IA avec des garde-fous clairs pour la vie privée, la sécurité et l'équité."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Communication, supports et garde-fous",
        questions: [
          { q: "Où parler du comportement d'un joueur ?", options: ["Dans le groupe de discussion de l'équipe", "Sur les réseaux sociaux", "Dans un message de groupe écrit par l'IA", "En privé, en personne ou par téléphone"], answer: 3, why: "Les messages de groupe restent centrés sur l'équipe." },
          { q: "Une fiche d'exercice contient :", options: ["L'objectif, l'installation, les étapes et les points clés", "Les notes scolaires des joueurs", "Les notes de santé des joueurs", "Rien"], answer: 0, why: "Elle aide tout le monde à mener l'exercice de la même façon." },
          { q: "L'IA écrit un quiz sur le système de jeu. Avant de le partager, vous :", options: ["Le partagez sans le lire", "Ajoutez des réponses pièges", "Vérifiez chaque réponse avec votre vraie combinaison", "Laissez l'IA noter les joueurs"], answer: 2, why: "L'IA peut se tromper sur votre combinaison." },
          { q: "Que peut-on coller sans risque dans l'IA ?", options: ["« Maria Lopez, rupture du ligament croisé, sous traitement »", "L'adresse personnelle d'un joueur", "La photo et le nom complet d'un mineur", "« Notre arrière gauche perd souvent son marquage sur les corners »"], answer: 3, why: "Des postes sans nom ni info de santé protègent la vie privée." },
          { q: "Qui décide de la reprise du jeu après une commotion ?", options: ["Un assistant IA", "Des professionnels de santé", "Le capitaine de l'équipe", "Les parents dans un groupe de discussion"], answer: 1, why: "Les décisions médicales reviennent à des professionnels qualifiés." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Assistants de coaching IA",
    questions: [
      { q: "Un assistant de coaching IA, c'est :", options: ["Un robot sur le banc", "Un arbitre", "Un assistant IA général utilisé pour les tâches d'entraîneur", "Un recruteur payé"], answer: 2, why: "Les entraîneurs utilisent des assistants gratuits pour leur travail." },
      { q: "Que ne peut PAS faire l'IA ?", options: ["Voir vos joueurs et connaître leurs sentiments", "Rédiger un planning", "Écrire la description d'un exercice", "Résumer des notes"], answer: 0, why: "Elle ne sait que ce que vous lui dites." },
      { q: "Qui décide du temps de jeu ?", options: ["L'entraîneur", "L'IA", "Un groupe de discussion de parents", "L'adversaire"], answer: 0, why: "Le temps de jeu est une décision humaine." },
      { q: "Les consignes permanentes sont :", options: ["Un étirement d'équipe", "Un règlement", "Le contexte que vous donnez à l'IA au départ", "Un trophée"], answer: 2, why: "Elles adaptent les réponses à votre équipe." },
      { q: "Quelle règle de sécurité convient aux consignes permanentes ?", options: ["Jamais de repos", "Une pause pour boire toutes les 20 minutes", "Des tours de terrain en punition", "Pas d'échauffement"], answer: 1, why: "Les règles de sécurité ont leur place dans les consignes." },
      { q: "Que doivent dire les consignes permanentes de ne jamais inclure ?", options: ["La durée des entraînements", "La catégorie d'âge", "La taille du terrain", "Les noms des joueurs et les détails de santé"], answer: 3, why: "Les données privées restent dehors." },
      { q: "Une progression, c'est :", options: ["Un défilé", "Des phases finales", "Des exercices qui vont du simple au plus difficile", "Un changement de planning"], answer: 2, why: "Les progressions construisent les compétences pas à pas." },
      { q: "Les durées du plan de l'IA font 120 minutes pour un entraînement de 90. Vous :", options: ["Faites quand même 120 minutes", "Supprimez l'échauffement", "L'ignorez", "Lui demandez de corriger les durées"], answer: 3, why: "Vérifiez que les durées tombent juste." },
      { q: "Vous n'avez que 10 ballons. Vous :", options: ["Le dites à l'IA et lui demandez d'ajuster", "Annulez l'entraînement", "En achetez 50 aujourd'hui", "Ignorez le plan"], answer: 0, why: "Les questions de suivi adaptent le plan à vos ressources." },
      { q: "Un message aux parents sur un changement de planning doit être :", options: ["Long et vague", "Court, amical et vérifié pour les dates", "Envoyé sans vérifier", "Envoyé depuis un compte personnel contre les règles du club"], answer: 1, why: "Clair et exact, c'est le mieux." },
      { q: "Les messages de groupe doivent parler :", options: ["Des erreurs d'un joueur", "Des détails de la blessure d'un joueur", "De l'équipe", "De rumeurs"], answer: 2, why: "Les questions individuelles restent privées." },
      { q: "Les règles pour écrire à des mineurs exigent souvent :", options: ["D'inclure un parent ou un autre entraîneur", "Des messages secrets", "Des textos tard le soir", "Des comptes sociaux personnels"], answer: 0, why: "Ces règles protègent les athlètes et les entraîneurs." },
      { q: "Les conversations difficiles sur le temps de jeu se font mieux :", options: ["Par un texto écrit par l'IA", "Sur les réseaux sociaux", "Dans le groupe de discussion", "En personne ou par téléphone"], answer: 3, why: "Les conversations difficiles demandent une touche humaine." },
      { q: "Une fiche d'exercice aide à :", options: ["Cacher l'exercice", "Ce que les adjoints et les joueurs fassent les exercices de la même façon", "Remplacer l'entraînement", "Suivre les notes scolaires"], answer: 1, why: "La cohérence améliore l'entraînement." },
      { q: "Un quiz sur le système de jeu vérifie :", options: ["La santé des joueurs", "Si les joueurs connaissent les combinaisons", "Les notes scolaires des joueurs", "Les emplois du temps des parents"], answer: 1, why: "Les quiz renforcent l'apprentissage." },
      { q: "Quand vous partagez un quiz avec un formulaire, collectez :", options: ["Les adresses personnelles", "Les mots de passe", "Les antécédents médicaux", "Seulement les informations nécessaires"], answer: 3, why: "Un minimum de données protège les joueurs." },
      { q: "Un garde-fou, c'est :", options: ["Une règle qui vous protège pendant que vous utilisez un outil", "Une clôture", "Un exercice", "Un uniforme"], answer: 0, why: "Les garde-fous évitent les mauvais usages." },
      { q: "L'IA propose une préparation physique intense par forte chaleur. Vous :", options: ["La faites", "La rallongez", "Vérifiez avec votre soigneur sportif et les recommandations de l'instance dirigeante", "Supprimez l'eau"], answer: 2, why: "L'IA peut proposer des pratiques dangereuses." },
      { q: "Une instance dirigeante, c'est :", options: ["Une salle de sport", "Un sponsor", "Un groupe de parents", "L'organisation qui fixe les règles de votre sport ou de votre niveau"], answer: 3, why: "Elle fixe les règles officielles." },
      { q: "Les décisions de sélection doivent venir :", options: ["De suppositions de l'IA", "De ce que l'entraîneur observe", "Des réseaux sociaux", "De rumeurs"], answer: 1, why: "Les décisions équitables viennent d'une vraie observation." }
    ]
  }
};
