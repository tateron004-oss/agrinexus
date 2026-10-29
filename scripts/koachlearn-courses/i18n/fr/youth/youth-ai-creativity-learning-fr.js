"use strict";

// Koach Learn course (French translation of youth/youth-ai-creativity-learning.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "youth-ai-creativity-learning-fr",
  lang: "fr",
  translationOf: "youth-ai-creativity-learning",
  category: "Youth",
  name: "Les outils d'IA pour créer et apprendre",
  skills: "Trouver des idées avec l'IA, Créer un visuel avec Canva, Apprendre une nouvelle compétence avec un tuteur IA, Créer des questions d'entraînement, Citer l'aide reçue et rester original",
  outcome: "utiliser des outils d'IA gratuits pour trouver des idées pour un projet créatif, réaliser un visuel avec, et apprendre seul une nouvelle compétence avec un partenaire d'étude IA, tout en gardant le travail à vous et en disant où l'IA a aidé.",
  about: [
    "Ce cours s'adresse aux jeunes d'environ 13 à 18 ans qui aiment créer (affiches, histoires, sons, idées de jeux, affiches de club) et qui veulent apprendre plus vite.",
    "Vous utiliserez l'IA comme partenaire de création et comme partenaire d'étude. Vous trouverez des idées, réaliserez une affiche, apprendrez quelque chose de nouveau étape par étape et vous testerez. Vous apprendrez aussi à garder votre propre voix et à être honnête sur ce que l'IA a fait.",
    "Avant de commencer : vérifiez l'âge minimum de chaque outil, suivez les règles de votre école sur l'IA, et parlez avec un parent ou tuteur avant de créer un nouveau compte. Chaque leçon dure environ cinq minutes et se termine par une tâche \"Essayez maintenant\"."
  ],
  finalTask: "Réalisez une affiche pour un club ou un événement scolaire, réel ou imaginaire. Utilisez l'IA pour trouver au moins cinq idées, choisissez-en une et faites-la vôtre, réalisez l'affiche dans Canva ou Google Slides, puis ajoutez en bas une petite note qui dit comment l'IA a aidé.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des jeunes d'environ 13 à 18 ans qui aiment créer, par exemple des affiches, des histoires, des sons, des idées de jeux et des affiches de club, et qui veulent apprendre plus vite.",
    startingPoint: "Ils utilisent des téléphones et des ordinateurs de l'école, et ont parfois essayé un assistant d'IA ou une application de design. Peu utilisent l'IA exprès pour trouver des idées, étudier étape par étape ou s'interroger, et beaucoup ne savent pas bien ce qu'est une utilisation honnête de l'IA.",
    gap: "Les jeunes peuvent utiliser l'IA pour se débloquer, créer plus vite et mieux étudier, mais s'en servir pour copier fait sauter l'apprentissage et peut enfreindre le règlement de l'école. Ils doivent utiliser l'IA comme partenaire de création et d'étude, tout en gardant leur propre voix et en citant l'aide reçue.",
    constraints: [
      "Âges minimum : les outils et les fonctions d'image par IA ont leurs propres âges minimum ; un parent ou tuteur approuve les nouveaux comptes",
      "Les règles sur l'IA et les images faites par l'IA varient selon l'école, la classe et le concours",
      "Appareils : un téléphone, un ordinateur de l'école ou de la bibliothèque ; seulement des offres gratuites",
      "Vie privée : aucune information privée dans les demandes ou les notes collées",
      "Des leçons courtes et des mots simples pour des niveaux de lecture variés"
    ],
    prerequisites: "« C'est quoi l'IA ? (pour les jeunes) » est un bon premier cours, mais il n'est pas obligatoire."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'un projet créatif", action: "utiliser un assistant d'IA pour lister beaucoup d'idées variées, puis les modifier ou les combiner en une idée à vous", standard: "en obtenant au moins cinq idées et en faisant vôtre l'une d'elles" },
    { id: "O2", condition: "Avec un outil de design gratuit comme Canva ou Google Slides", action: "réaliser une affiche simple à partir d'un modèle, après avoir vérifié l'âge minimum de l'outil et les réglages de l'école", standard: "avec un grand titre et une date, une heure et un lieu bien visibles" },
    { id: "O3", condition: "Pour tout travail où l'IA a aidé", action: "écrire une note de crédit qui dit ce qu'a fait l'IA et ce que vous avez fait, et ajouter quelque chose que vous seul pouviez créer", standard: "en respectant les règles de la classe ou du concours sur l'IA et sans utiliser l'œuvre de quelqu'un d'autre sans permission" },
    { id: "O4", condition: "À partir d'une petite compétence que vous voulez apprendre", action: "demander à un assistant d'IA de vous l'apprendre par petites étapes à votre niveau et de vous interroger après chacune", standard: "en indiquant la compétence, votre niveau et la demande d'avancer une étape à la fois" },
    { id: "O5", condition: "À partir de vos propres notes de cours", action: "créer des questions d'entraînement ou des cartes mémoire avec l'IA, y répondre d'abord, puis vérifier les réponses", standard: "sans aucune information privée et en vérifiant chaque réponse dans vos notes ou votre manuel" },
    { id: "O6", condition: "Avant et après avoir utilisé l'IA pour vos devoirs", action: "décider si une utilisation de l'IA vous fait apprendre ou vous fait sauter l'apprentissage, avec le test du lendemain et les règles de votre professeur", standard: "en demandant d'abord à votre professeur chaque fois que vous avez un doute" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : L'IA comme partenaire de création",
      lessons: [
        {
          objectives: ["O1"],
          title: "Trouver des idées avec l'IA",
          minutes: 5,
          goal: "Utiliser un assistant d'IA pour obtenir beaucoup d'idées, puis choisir et améliorer la meilleure.",
          text: [
            "Un remue-méninges, c'est trouver beaucoup d'idées vite, sans encore les juger. Les assistants d'IA comme ChatGPT, Microsoft Copilot et Google Gemini sont bons pour cela, car ils peuvent lister beaucoup d'idées en quelques secondes.",
            "Demandez de la quantité et de la variété : \"Donne-moi 10 idées différentes d'affiche pour le club de robotique de notre école. Certaines drôles, certaines sérieuses et certaines audacieuses.\" Ensuite, c'est vous qui choisissez. Les meilleurs résultats viennent quand vous mélangez les idées de l'IA avec les vôtres.",
            "Prenez les idées de l'IA comme un point de départ. Modifiez-les, combinez-en deux, ou servez-vous d'une pour en trouver une nouvelle. Ainsi, l'idée finale est vraiment la vôtre."
          ],
          steps: ["Dites ce que vous créez et pour qui.", "Demandez beaucoup d'idées de styles différents.", "Entourez les deux ou trois que vous aimez.", "Modifiez-les ou combinez-les pour en faire votre idée."],
          words: [["Remue-méninges", "trouver beaucoup d'idées rapidement avant d'en choisir une."]],
          slides: [
            { title: "Remue-méninges = beaucoup d'idées, vite", bullets: ["Ne jugez pas encore les idées", "L'IA peut lister 10 idées en quelques secondes"] },
            { title: "Demandez de la variété", bullets: ["Dites ce que vous créez et pour qui", "Demandez des idées drôles, sérieuses et audacieuses"] },
            { title: "Faites-la vôtre", bullets: ["Choisissez-en deux ou trois", "Modifiez-les ou combinez-les", "Ajoutez votre touche"] }
          ],
          tryIt: "Choisissez un projet : une affiche de club, une courte histoire, un niveau de jeu ou le thème d'une chanson. Demandez 10 idées différentes à un assistant d'IA que vous avez le droit d'utiliser. Choisissez vos deux préférées et écrivez comment vous les changeriez.",
          youCanNow: "trouver des idées avec l'IA et en faire vos propres idées.",
          quickCheck: [
            { objective: "O1", q: "Quelle est la règle principale pendant un remue-méninges ?", options: ["Choisir la première idée", "Utiliser seulement les idées de l'IA", "Juger chaque idée tout de suite", "Trouver beaucoup d'idées avant de les juger"], answer: 3, why: "Un remue-méninges, c'est beaucoup d'idées vite, sans encore les juger." },
            { objective: "O1", q: "L'IA vous a donné 10 idées d'affiche et deux sont proches de ce que vous voulez. Que faites-vous ?", options: ["Vous copiez la première exactement", "Vous les combinez ou les modifiez et ajoutez votre propre touche", "Vous en demandez 100 de plus et ne choisissez jamais", "Vous abandonnez l'affiche"], answer: 1, why: "Mélanger les idées de l'IA avec les vôtres rend l'idée finale vraiment à vous." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Créer avec des outils d'IA gratuits",
          minutes: 5,
          goal: "Réaliser une affiche ou un visuel simple avec un outil de design gratuit.",
          text: [
            "Canva est un outil de design avec une offre gratuite qui fonctionne dans un navigateur ou une application. Certaines écoles y donnent aussi accès par un compte scolaire, donc demandez à votre professeur. Google Slides et Microsoft PowerPoint marchent aussi pour des affiches simples.",
            "Partez d'un modèle (un design tout prêt), puis changez les mots, les couleurs et les images. Certains outils peuvent créer une image à partir des mots que vous tapez. Ces fonctions d'image par IA peuvent avoir leur propre âge minimum ou être désactivées sur les comptes scolaires, donc vérifiez avant de les utiliser.",
            "Un bon design est simple : un grand titre, quelques lignes courtes, des couleurs claires et faciles à lire, et les informations importantes comme la date, l'heure et le lieu."
          ],
          steps: ["Ouvrez Canva, Google Slides ou PowerPoint (avec votre compte scolaire si l'école vous en donne un).", "Choisissez un modèle d'affiche.", "Changez le titre, les détails et les couleurs.", "Ajoutez ou créez une image.", "Vérifiez que la date, l'heure et le lieu se lisent facilement."],
          words: [["Modèle", "un design tout prêt que l'on peut modifier."], ["Générateur d'images par IA", "un outil qui crée une image à partir des mots que vous tapez."]],
          slides: [
            { title: "Des outils gratuits pour créer", bullets: ["Canva (offre gratuite ; demandez si l'école donne accès)", "Google Slides", "Microsoft PowerPoint"] },
            { title: "Partez d'un modèle", bullets: ["Changez les mots, les couleurs et les images", "Les fonctions d'image par IA peuvent avoir un âge minimum"] },
            { title: "Le simple gagne", bullets: ["Un grand titre", "Quelques lignes courtes", "Des couleurs faciles à lire", "Date, heure et lieu"] }
          ],
          tryIt: "Ouvrez un outil de design gratuit et choisissez un modèle d'affiche. Mettez un titre et la date, l'heure et le lieu de votre idée de la leçon 1. Enregistrez-la.",
          youCanNow: "réaliser une affiche simple avec un outil de design gratuit.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qui rend une affiche facile à lire ?", options: ["Un grand titre, quelques lignes courtes et des couleurs claires", "Beaucoup de petit texte", "Dix polices différentes", "Un texte foncé sur un fond foncé"], answer: 0, why: "Un bon design est simple, avec un grand titre et les informations clés faciles à voir." },
            { objective: "O2", q: "Vous voulez utiliser une fonction d'image par IA dans un outil de design avec votre compte scolaire. Que faites-vous d'abord ?", options: ["Vous utilisez le compte d'un ami", "Vous créez un nouveau compte sans le dire à personne", "Vous vérifiez son âge minimum et si votre école l'autorise", "Vous laissez tomber l'affiche"], answer: 2, why: "Les fonctions d'image par IA peuvent avoir leur propre âge minimum ou être désactivées sur les comptes scolaires." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rester original et dire ce que l'IA a fait",
          minutes: 4,
          goal: "Dire honnêtement comment l'IA a aidé et garder votre propre voix dans le travail.",
          text: [
            "Si l'IA vous a aidé à créer quelque chose, dites-le. Une courte note comme \"Idées trouvées avec Microsoft Copilot ; design et textes par moi\" est honnête et montre que vous savez utiliser l'outil.",
            "N'utilisez pas les dessins, la musique, les logos ou les personnages d'autres personnes sans autorisation, et ne demandez pas à l'IA de copier exactement le travail d'un vrai artiste. Certaines écoles et certains concours n'autorisent pas du tout les images faites par l'IA, donc lisez les règles.",
            "Votre voix compte. Ajoutez quelque chose que vous seul pouvez ajouter : une blague interne de votre club, une photo que vous avez prise, un dessin, ou vos propres mots."
          ],
          steps: ["Notez ce que l'IA a fait et ce que vous avez fait.", "Ajoutez une courte note de crédit.", "Lisez les règles du concours ou de la classe sur l'IA.", "Ajoutez une chose que vous seul pouviez créer."],
          words: [["Crédit", "dire qui ou quoi a aidé à créer quelque chose."], ["Droit d'auteur", "la loi qui protège les créations des gens, comme les dessins, la musique et les textes."]],
          slides: [
            { title: "Dites comment l'IA a aidé", bullets: ["\"Idées trouvées avec l'IA ; design par moi\"", "C'est honnête et cela montre votre savoir-faire"] },
            { title: "Respectez les autres créateurs", bullets: ["Ne copiez pas dessins, logos ou personnages", "Certains concours interdisent les images d'IA : lisez les règles"] },
            { title: "Ajoutez votre voix", bullets: ["Une photo que vous avez prise", "Un dessin ou vos propres mots", "Quelque chose que vous seul pouvez ajouter"] }
          ],
          tryIt: "Ajoutez une note de crédit d'une ligne à l'affiche commencée. Puis ajoutez une chose que vous seul pouviez ajouter, comme votre propre photo ou slogan.",
          youCanNow: "dire honnêtement ce que l'IA a fait et garder votre propre voix dans votre travail.",
          quickCheck: [
            { objective: "O3", q: "Pourquoi ajouter une note de crédit quand l'IA a aidé ?", options: ["Pour rendre l'affiche plus longue", "Les concours exigent des images faites par l'IA", "Elle cache ce que vous avez fait", "C'est honnête et cela montre comment vous avez utilisé l'outil"], answer: 3, why: "Une courte note de crédit dit honnêtement ce qu'a fait l'IA et ce que vous avez fait." },
            { objective: "O3", q: "Votre affiche ressemble beaucoup à toutes les autres affiches faites par l'IA. Comment y ajouter votre propre voix ?", options: ["Ajouter votre propre photo, un dessin, un slogan ou une blague du club", "Demander à l'IA de copier exactement un artiste célèbre", "Utiliser un logo célèbre", "Enlever votre nom"], answer: 0, why: "Ajouter quelque chose que vous seul pouviez créer garde le travail à vous." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : L'IA comme partenaire de création",
        questions: [
          { objective: "O1", q: "Qu'est-ce qu'un remue-méninges ?", options: ["Copier le travail de quelqu'un", "Trouver beaucoup d'idées avant de choisir", "Réparer un ordinateur en panne", "Supprimer de vieux fichiers"], answer: 1, why: "Le remue-méninges, c'est trouver beaucoup d'idées vite, puis choisir." },
          { objective: "O1", q: "Quelle demande donnera le meilleur remue-méninges ?", options: ["\"affiche\"", "\"fais-le\"", "\"idées\"", "\"Donne-moi 10 idées différentes d'affiche pour un club de robotique : certaines drôles, certaines sérieuses\""], answer: 3, why: "Elle dit quoi, pour qui, combien et dans quels styles." },
          { objective: "O2", q: "Qu'est-ce qu'un modèle ?", options: ["Un design tout prêt que l'on peut modifier", "Un mot de passe", "Un type de virus", "Une règle de l'école"], answer: 0, why: "Les modèles donnent un design de départ à modifier." },
          { objective: "O3", q: "Un concours dit : pas d'images faites par l'IA. Vous :", options: ["En utilisez une quand même", "Cachez que vous avez utilisé l'IA", "Suivez la règle et créez ou utilisez votre propre image", "Ne lisez pas les règles"], answer: 2, why: "Suivre les règles du concours garde votre participation honnête et valable." },
          { objective: "O3", q: "Laquelle est une bonne note de crédit ?", options: ["Rien du tout", "\"J'ai tout fait\" alors que l'IA a aidé", "\"Idées trouvées avec l'IA ; design et textes par moi\"", "\"Fait par un robot\""], answer: 2, why: "Elle dit honnêtement ce que l'IA a fait et ce que vous avez fait." }
        ]
      }
    },
    {
      name: "Chapitre 2 : L'IA comme partenaire d'étude",
      lessons: [
        {
          objectives: ["O4"],
          title: "Apprendre une nouvelle compétence étape par étape",
          minutes: 5,
          goal: "Demander à l'IA de vous apprendre une nouvelle compétence par petites étapes, à votre niveau.",
          text: [
            "L'IA peut jouer le rôle d'un tuteur patient. Dites-lui ce que vous voulez apprendre, ce que vous savez déjà, et demandez-lui d'avancer une étape à la fois. Par exemple : \"Je veux apprendre à lire des tablatures de guitare. Je n'y connais rien. Apprends-moi en 5 petites étapes et attends-moi après chacune.\"",
            "Demandez-lui de vérifier que vous avez compris : \"Pose-moi une question avant de continuer.\" Si quelque chose n'est pas clair, dites-le : \"Explique-moi ça comme si j'avais 12 ans\" ou \"Donne-moi un exemple avec le basket.\"",
            "Des sites d'apprentissage gratuits comme Khan Academy proposent des leçons et des exercices à utiliser avec un assistant d'IA. Votre école a peut-être des outils approuvés, donc demandez à votre professeur lesquels utiliser."
          ],
          steps: ["Nommez la compétence et votre niveau.", "Demandez de petites étapes, une à la fois.", "Demandez-lui de vous interroger avant de continuer.", "Demandez des exemples tirés de ce que vous aimez."],
          words: [["Tuteur", "une personne (ou un outil) qui vous aide à apprendre en tête-à-tête."]],
          slides: [
            { title: "L'IA comme tuteur", bullets: ["Dites ce que vous voulez apprendre", "Dites ce que vous savez déjà", "Demandez une étape à la fois"] },
            { title: "Faites-vous interroger", bullets: ["\"Pose-moi une question avant de continuer\"", "\"Explique-moi ça comme si j'avais 12 ans\""] },
            { title: "Des exemples que vous aimez", bullets: ["Sport, jeux, musique", "Demandez au professeur les outils approuvés"] }
          ],
          tryIt: "Choisissez une petite compétence à apprendre cette semaine (un accord, une méthode de maths, une technique de dessin, un mot dans une nouvelle langue). Demandez à un assistant d'IA de vous l'apprendre par petites étapes et de vous interroger après chacune.",
          youCanNow: "utiliser l'IA comme tuteur étape par étape, à votre niveau.",
          quickCheck: [
            { objective: "O4", q: "Que doit contenir une demande pour apprendre une nouvelle compétence ?", options: ["Seulement le mot « apprends-moi »", "La compétence, votre niveau et la demande d'avancer une étape à la fois", "Votre mot de passe", "La réponse que vous voulez"], answer: 1, why: "Dire à l'IA la compétence, votre niveau et d'avancer étape par étape la fait agir comme un tuteur patient." },
            { objective: "O4", q: "L'explication de l'IA sur une méthode de maths vous embrouille. Qu'envoyez-vous ?", options: ["Rien ; vous fermez l'application", "« Fais mes devoirs. »", "« Explique-moi ça comme si j'avais 12 ans, avec un exemple tiré du basket. »", "La même question encore une fois"], answer: 2, why: "Demander des mots plus simples ou un exemple qui vous plaît vous aide à comprendre." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Créer des questions d'entraînement et des cartes mémoire",
          minutes: 5,
          goal: "Transformer vos notes en questions d'entraînement et vous interroger.",
          text: [
            "Se tester soi-même est l'une des meilleures façons de retenir. L'IA peut transformer vos propres notes en questions en quelques secondes.",
            "Collez ou tapez vos notes de cours (sans information privée) et demandez : \"Fais 8 questions d'entraînement à partir de ces notes. Ne montre pas les réponses avant que je réponde.\" Puis répondez vous-même avant de regarder.",
            "Vous pouvez aussi demander des cartes mémoire : un mot d'un côté, sa définition de l'autre. Des outils gratuits comme Google Docs ou des cartes en papier suffisent. Vérifiez les réponses dans vos notes ou votre manuel, car l'IA peut quand même se tromper."
          ],
          steps: ["Rassemblez vos notes sur un sujet.", "Demandez à l'IA des questions d'entraînement, réponses cachées.", "Répondez d'abord vous-même.", "Vérifiez les réponses dans vos notes ou votre manuel."],
          words: [["Carte mémoire", "une carte avec une question ou un mot d'un côté et la réponse de l'autre."], ["Auto-évaluation", "s'interroger soi-même pour mieux retenir."]],
          slides: [
            { title: "Se tester pour retenir", bullets: ["S'interroger vaut mieux que relire", "L'IA peut faire des questions à partir de vos notes"] },
            { title: "Demandez de la bonne façon", bullets: ["\"Fais 8 questions à partir de ces notes\"", "\"Cache les réponses jusqu'à ce que je réponde\""] },
            { title: "Vérifiez les réponses", bullets: ["Avec vos notes ou votre manuel", "L'IA peut quand même se tromper"] }
          ],
          tryIt: "Prenez les notes d'un cours de cette semaine. Demandez à l'IA 5 questions d'entraînement avec les réponses cachées. Répondez, puis vérifiez-vous avec vos notes.",
          youCanNow: "transformer vos notes en questions d'entraînement et vous interroger.",
          quickCheck: [
            { objective: "O5", q: "Pourquoi demander à l'IA de cacher les réponses quand elle crée des questions d'entraînement ?", options: ["Pour économiser du papier", "Pour que l'IA se note elle-même", "Parce que les réponses sont privées", "Pour que vous répondiez d'abord et vous testiez vraiment"], answer: 3, why: "Vous tester avant de voir la réponse vous aide à retenir." },
            { objective: "O5", q: "La réponse de l'IA à une question d'entraînement ne correspond pas à vos notes. Que faites-vous ?", options: ["Vous vérifiez dans vos notes ou votre manuel et leur faites confiance", "Vous faites toujours confiance à l'IA", "Vous supprimez vos notes", "Vous sautez ce sujet"], answer: 0, why: "L'IA peut encore se tromper, alors vérifiez dans vos notes ou votre manuel." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Utiliser l'IA pour apprendre, pas pour sauter l'apprentissage",
          minutes: 4,
          goal: "Savoir quand l'aide de l'IA vous fait apprendre et quand elle vous fait sauter le travail.",
          text: [
            "Il y a une différence entre l'IA qui vous aide à apprendre et l'IA qui fait le travail à votre place. Si vous lui demandez d'expliquer, de vous interroger ou de vous donner un avis, vous apprenez. Si vous lui demandez d'écrire votre rédaction ou de résoudre vos devoirs pour les recopier, vous sautez l'apprentissage, et cela peut enfreindre les règles de l'école.",
            "Un bon test : après avoir utilisé l'IA, pourriez-vous faire la tâche seul demain ? Si oui, l'IA vous a aidé à apprendre. Si non, recommencez d'une façon qui vous fait réfléchir.",
            "Suivez toujours les règles de votre professeur. Si vous ne savez pas si quelque chose est permis, demandez avant d'utiliser l'IA, et soyez prêt à dire comment vous l'avez utilisée."
          ],
          steps: ["Demandez à l'IA d'expliquer, d'interroger ou de donner un avis, pas de faire le travail.", "Vérifiez : pourrais-je le faire seul demain ?", "Suivez les règles de votre professeur sur l'IA.", "Soyez prêt à dire comment vous avez utilisé l'IA."],
          words: [["Avis (retour)", "des commentaires qui vous aident à améliorer votre propre travail."]],
          slides: [
            { title: "Apprendre ou sauter", bullets: ["Apprendre : expliquer, interroger, donner un avis", "Sauter : l'IA l'écrit, vous recopiez"] },
            { title: "Le test du lendemain", bullets: ["Pourriez-vous le faire seul demain ?", "Sinon, faites plus de réflexion vous-même"] },
            { title: "Suivez les règles", bullets: ["Demandez au professeur en cas de doute", "Soyez prêt à dire comment vous avez utilisé l'IA"] }
          ],
          tryIt: "Tâche finale : réalisez votre affiche de club ou d'événement. Trouvez au moins cinq idées avec l'IA, faites-en une vôtre, réalisez-la dans Canva ou Google Slides, et ajoutez une note de crédit qui dit comment l'IA a aidé.",
          youCanNow: "utiliser l'IA pour créer et apprendre de façon honnête, en gardant la compétence à vous.",
          quickCheck: [
            { objective: "O6", q: "Laquelle de ces utilisations sert à apprendre avec l'IA ?", options: ["Copier une rédaction faite par l'IA", "Demander à l'IA d'expliquer une étape que vous avez ratée, puis essayer vous-même", "Faire résoudre tous les exercices des devoirs par l'IA", "Coller des réponses de l'IA dans un contrôle"], answer: 1, why: "Les explications, les questions et les retours vous aident à apprendre ; copier fait sauter l'apprentissage." },
            { objective: "O6", q: "Après l'aide de l'IA, vous ne pourriez pas faire la tâche seul demain. Que faites-vous ?", options: ["Vous rendez le travail de l'IA", "Vous arrêtez l'IA pour toujours", "Vous recommencez pour faire davantage la réflexion vous-même", "Vous cachez que vous avez utilisé l'IA"], answer: 2, why: "Le test du lendemain montre que l'IA a fait la réflexion, alors refaites-le d'une façon qui vous fait apprendre." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : L'IA comme partenaire d'étude",
        questions: [
          { objective: "O4", q: "Quelle demande fait de l'IA un bon tuteur ?", options: ["\"Apprends-moi les tablatures de guitare en 5 petites étapes et interroge-moi après chacune\"", "\"Fais mes devoirs\"", "\"Réponds à tout\"", "\"tablatures\""], answer: 0, why: "Elle fixe le niveau, les petites étapes et les vérifications." },
          { objective: "O5", q: "Pourquoi s'interroger soi-même est-il utile ?", options: ["Cela fait perdre du temps", "Les professeurs l'interdisent", "Cela efface les notes", "Cela aide à retenir"], answer: 3, why: "S'auto-évaluer est l'une des meilleures façons de retenir." },
          { objective: "O5", q: "L'IA a fait des questions d'entraînement à partir de vos notes. Avant de croire les réponses, vous devez :", options: ["Les partager en ligne", "Les vérifier avec vos notes ou votre manuel", "Supprimer vos notes", "Demander à un inconnu"], answer: 1, why: "L'IA peut quand même se tromper, donc vérifiez." },
          { objective: "O6", q: "Quel usage de l'IA fait sauter l'apprentissage ?", options: ["Lui demander d'écrire votre rédaction pour la recopier", "Lui demander d'expliquer une étape", "Lui demander de vous interroger", "Lui demander un avis sur votre brouillon"], answer: 0, why: "Recopier le travail de l'IA, c'est sauter l'apprentissage et peut-être enfreindre les règles." },
          { objective: "O6", q: "Qu'est-ce que le \"test du lendemain\" ?", options: ["Faire ses devoirs demain", "Passer un contrôle demain", "Se demander si l'on pourrait faire la tâche seul demain", "Éteindre l'IA demain"], answer: 2, why: "Si vous pouvez le faire seul, l'IA vous a aidé à apprendre." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les outils d'IA pour créer et apprendre",
    questions: [
      { objective: "O1", q: "Quand vous cherchez des idées avec l'IA, vous devez d'abord :", options: ["Juger chaque idée", "Demander beaucoup d'idées différentes", "Prendre la première", "Vous arrêter après une idée"], answer: 1, why: "Le remue-méninges, c'est d'abord beaucoup d'idées." },
      { objective: "O1", q: "La meilleure façon de faire vôtre une idée de l'IA est de :", options: ["La copier exactement", "Demander à un ami de choisir", "Ne jamais utiliser les idées de l'IA", "Modifier ou combiner des idées et ajouter votre touche"], answer: 3, why: "Modifier et mélanger les idées rend le résultat à vous." },
      { objective: "O1", q: "Demander des idées \"drôles, sérieuses et audacieuses\" vous donne :", options: ["Un virus", "Moins d'idées", "Un mot de passe", "De la variété"], answer: 3, why: "Des styles différents donnent plus de choix." },
      { objective: "O2", q: "Canva, c'est :", options: ["Une console de jeux", "Un outil de design avec une offre gratuite", "Une règle de l'école", "Seulement une application de musique"], answer: 1, why: "Canva est un outil de design avec une offre gratuite." },
      { objective: "O2", q: "Avant d'utiliser une fonction d'image par IA, vous devez :", options: ["Téléverser la photo d'un ami", "Partager votre mot de passe", "Vérifier son âge minimum et les réglages de votre école", "Ignorer toutes les règles"], answer: 2, why: "Les fonctions d'image par IA peuvent avoir leur propre âge minimum." },
      { objective: "O2", q: "Une bonne affiche a :", options: ["Un grand titre et une date, une heure et un lieu clairs", "Beaucoup de tout petit texte", "Toutes les couleurs à la fois", "Aucun détail"], answer: 0, why: "Un design simple se lit le plus facilement." },
      { objective: "O3", q: "Un crédit honnête pour l'aide de l'IA ressemble à :", options: ["Cacher que vous avez utilisé l'IA", "\"Idées trouvées avec l'IA ; design par moi\"", "Dire qu'un robot a tout fait", "Rien"], answer: 1, why: "Il dit la vérité sur qui a fait quoi." },
      { objective: "O3", q: "Vous voulez utiliser un personnage de dessin animé célèbre sur une affiche. Vous devez :", options: ["L'utiliser sans demander", "Demander à l'IA de le copier exactement", "Retirer la note de crédit", "Créer votre propre image à la place, ou obtenir une autorisation"], answer: 3, why: "Les personnages et les dessins sont protégés par le droit d'auteur." },
      { objective: "O3", q: "Le droit d'auteur protège :", options: ["Les créations des gens, comme les dessins et la musique", "La batterie de votre téléphone", "La cantine", "Le Wi-Fi"], answer: 0, why: "Le droit d'auteur protège le travail des créateurs." },
      { objective: "O4", q: "Pour apprendre une nouvelle compétence avec l'IA, vous devez lui dire :", options: ["Rien", "Votre mot de passe", "La compétence, votre niveau, et d'avancer une étape à la fois", "De sauter jusqu'à la fin"], answer: 2, why: "Le niveau et les petites étapes font de l'IA un bon tuteur." },
      { objective: "O4", q: "Si une explication de l'IA n'est pas claire, une bonne relance est :", options: ["\"Laisse tomber\"", "\"Donne-moi ma note\"", "\"Explique-moi ça comme si j'avais 12 ans\"", "\"Écris mon contrôle\""], answer: 2, why: "Demander des mots plus simples aide à comprendre." },
      { objective: "O4", q: "Qui peut vous dire quels outils d'IA sont approuvés pour l'école ?", options: ["Votre professeur", "Une publicité", "Un inconnu en ligne", "Personne"], answer: 0, why: "Les professeurs connaissent les outils approuvés et les règles de l'école." },
      { objective: "O5", q: "Que faut-il retirer quand vous collez vos notes dans l'IA ?", options: ["Les mots du sujet", "Les dates clés du sujet", "Le vocabulaire", "Les informations privées comme votre adresse"], answer: 3, why: "Ne mettez jamais d'informations privées dans les outils d'IA." },
      { objective: "O5", q: "Pourquoi demander à l'IA de cacher les réponses aux questions d'entraînement ?", options: ["Pour économiser du papier", "Pour répondre d'abord et vraiment vous tester", "La loi l'exige", "Pour piéger votre professeur"], answer: 1, why: "Répondre d'abord, c'est une vraie auto-évaluation." },
      { objective: "O5", q: "Une carte mémoire a :", options: ["Une question ou un mot d'un côté et la réponse de l'autre", "Seulement des images", "Un mot de passe", "Seulement des notes de musique"], answer: 0, why: "C'est ainsi que marchent les cartes mémoire." },
      { objective: "O5", q: "Après que l'IA a fait des réponses d'entraînement, vous devez :", options: ["Leur faire entièrement confiance", "Les publier en ligne", "Les vérifier avec vos notes ou un manuel", "Les supprimer"], answer: 2, why: "Les réponses de l'IA peuvent être fausses." },
      { objective: "O6", q: "Lequel est utiliser l'IA pour apprendre ?", options: ["Recopier une rédaction de l'IA", "Demander à l'IA un avis sur votre propre brouillon", "Faire passer votre contrôle par l'IA", "Coller les réponses de devoirs de l'IA"], answer: 1, why: "Un avis sur votre propre travail vous aide à progresser." },
      { objective: "O6", q: "Vous ne savez pas si l'IA est permise pour un projet. Vous devez :", options: ["L'utiliser en espérant", "L'utiliser en cachette", "Demander à l'IA si c'est permis", "Demander d'abord à votre professeur"], answer: 3, why: "C'est votre professeur qui décide des règles de la classe." },
      { objective: "O2", q: "Avant de créer un compte sur une application de création, vous devez :", options: ["Utiliser un faux âge", "Lui donner votre mot de passe scolaire", "Ne pas lire les conditions", "Parler avec un parent ou tuteur et vérifier l'âge minimum"], answer: 3, why: "L'âge minimum et l'accord d'un parent ou tuteur passent d'abord." },
      { objective: "O6", q: "Après avoir utilisé l'IA, vous ne pourriez pas faire la tâche seul demain. Cela veut dire :", options: ["Vous avez tout appris", "L'IA a fait la réflexion ; recommencez pour en faire plus vous-même", "L'IA est cassée", "Vous devriez arrêter l'école"], answer: 1, why: "Le test du lendemain montre si vous avez appris." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      1,
      3,
      6,
      7,
      9,
      13,
      15,
      16,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Remue-méninges",
        objective: "O1",
        notYet: "Moins de cinq idées, ou la première idée de l'IA a été utilisée telle quelle.",
        meets: "Au moins cinq idées, dont une modifiée ou combinée pour devenir la vôtre.",
        exceeds: "Peut montrer quelles idées ont été combinées et pourquoi celle-ci a été choisie."
      },
      {
        name: "Design de l'affiche",
        objective: "O2",
        notYet: "Le titre ou la date, l'heure et le lieu manquent ou sont difficiles à lire.",
        meets: "Un grand titre, quelques lignes courtes, des couleurs claires, et la date, l'heure et le lieu faciles à lire.",
        exceeds: "Le design va bien avec le club ou l'événement, et un camarade peut la lire de l'autre bout de la salle."
      },
      {
        name: "Voix personnelle",
        objective: "O3",
        notYet: "Rien sur l'affiche ne vient de l'apprenant, ou elle utilise l'œuvre ou le logo de quelqu'un d'autre.",
        meets: "Contient une chose que seul l'apprenant pouvait ajouter, comme une photo, un dessin ou un slogan.",
        exceeds: "La plupart des mots et des choix sont clairement ceux de l'apprenant."
      },
      {
        name: "Note de crédit",
        objective: "O3",
        notYet: "Pas de note, ou elle cache comment l'IA a aidé.",
        meets: "Une courte note dit ce qu'a fait l'IA et ce qu'a fait l'apprenant.",
        exceeds: "La note est précise, par exemple quel outil a servi à trouver les idées."
      },
      {
        name: "Règles respectées",
        objective: "O6",
        notYet: "Un outil ou une fonction a été utilisé contre son âge minimum, les règles de l'école ou celles du concours.",
        meets: "Chaque outil et chaque fonction utilisés sont autorisés pour l'âge et l'école de l'apprenant.",
        exceeds: "Peut expliquer quelles règles ont été vérifiées et où."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui disent, dans le sondage de suivi à 30 jours, utiliser l'IA pour s'interroger ou apprendre une compétence",
      "Les affiches ou projets faits pendant le cours qui sont vraiment utilisés par un club, un événement ou une classe",
      "Les apprenants qui commencent un autre cours Koach Learn pour les jeunes dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone, un ordinateur de l'école ou de la bibliothèque avec Internet",
      "Un assistant d'IA gratuit que l'apprenant a le droit d'utiliser, et Canva, Google Slides ou PowerPoint",
      "Des notes de cours d'une matière pour les leçons d'étude",
      "Environ 60 minutes en tout : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Vérifiez l'âge minimum de chaque outil et de chaque fonction d'image par IA avant le cours, et utilisez les comptes scolaires quand l'école en fournit.",
      "Présentez au début les règles de votre école ou de votre programme sur l'IA, y compris si les images faites par l'IA sont permises.",
      "Rappelez aux apprenants de ne pas coller d'informations privées quand ils transforment leurs notes en questions d'entraînement.",
      "Organisez une courte exposition d'affiches où les apprenants expliquent leur note de crédit et la partie qui vient d'eux.",
      "Évaluez l'affiche avec la grille et donnez un retour sur une ligne « Pas encore » à la fois."
    ]
  }
};
