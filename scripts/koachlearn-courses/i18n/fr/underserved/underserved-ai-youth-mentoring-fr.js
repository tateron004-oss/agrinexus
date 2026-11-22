"use strict";

// Koach Learn course (French translation of underserved/underserved-ai-youth-mentoring.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-ai-youth-mentoring-fr",
  lang: "fr",
  translationOf: "underserved-ai-youth-mentoring",
  category: "Undeserved Community",
  name: "L'IA pour le mentorat des jeunes",
  skills: "Suivre les règles de sécurité du mentorat avec des mineurs, Planifier une séance de mentorat avec l'IA, Poser de bonnes questions et écouter, Enseigner un usage honnête de l'IA pour l'école, Explorer les métiers ensemble, Suivre les progrès d'un jeune",
  outcome: "planifier et animer une séance de mentorat sûre de 45 minutes avec un jeune, en utilisant un assistant d'IA gratuit pour préparer l'activité et les questions, et en montrant à votre filleul comment utiliser l'IA honnêtement pour ses objectifs scolaires et professionnels.",
  about: [
    "Dans chaque quartier, les jeunes s'en sortent mieux avec un adulte bienveillant à leurs côtés. Ce cours s'adresse aux mentors bénévoles des églises, centres communautaires, écoles, clubs sportifs et programmes pour les jeunes, y compris ceux qui débutent avec la technologie.",
    "Vous apprendrez les règles de sécurité qui protègent les jeunes et vous-même, comment planifier une séance avec un assistant d'IA gratuit, comment poser des questions qui ouvrent une vraie conversation, comment aider votre filleul à utiliser l'IA honnêtement pour l'école, et comment explorer les métiers et suivre les progrès ensemble.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche « Essayez maintenant » qui construit un vrai plan de séance. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Suivez toujours les règles de votre propre programme de mentorat ; elles passent avant tout ce qui est dans ce cours."
  ],
  finalTask: "Écrivez et animez (ou jouez avec un autre adulte) un plan de séance de mentorat de 45 minutes fait avec l'aide d'un assistant d'IA gratuit : un objectif, une question pour démarrer, une activité, trois questions ouvertes, une courte démonstration d'usage honnête de l'IA pour les devoirs ou les métiers, et une note de suivi d'une ligne. Le plan doit respecter les règles de sécurité de votre programme et ne contenir aucun détail privé sur le jeune.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des mentors bénévoles de communautés mal desservies, dans les églises, les centres communautaires, les écoles, les clubs sportifs et les programmes jeunesse, y compris des mentors qui découvrent la technologie.",
    startingPoint: "Ils tiennent aux jeunes et ont parfois élevé des enfants ou entraîné une équipe, mais n'ont pas été formés à la sécurité du mentorat, aux questions ouvertes ni à la préparation d'une séance. Beaucoup ont peu utilisé l'IA et ne savent pas comment les jeunes devraient s'en servir pour l'école.",
    gap: "Les jeunes s'en sortent mieux avec un adulte bienveillant, mais les mentors ont besoin de bonnes habitudes de sécurité, d'un plan pour chaque séance et d'une façon de guider un usage honnête de l'IA pour l'école et les métiers. Sans cela, les séances partent dans tous les sens, la vie privée est mise en danger, et les jeunes peuvent mal utiliser l'IA.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (niveau début de collège)",
      "Appareils : un smartphone ou un ordinateur du programme",
      "La politique du programme passe en premier : vérification des antécédents, rencontres dans des lieux publics, contacts approuvés et étapes de signalement",
      "Vie privée : aucun nom, école, photo ni histoire privée d'un jeune dans l'IA ou dans des notes qui traînent",
      "Les écoles et les outils d'IA ont leurs propres règles et limites d'âge, à vérifier avec l'enseignant et un parent ou tuteur"
    ],
    prerequisites: "La vérification des antécédents et la formation de votre propre programme de mentorat. Les apprenants qui découvrent les assistants d'IA peuvent d'abord suivre « Introduction à l'IA et autonomie numérique »."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À chaque rencontre avec un jeune", action: "suivre les règles de sécurité de votre programme et les étapes à suivre si un jeune vous parle d'un mal subi", standard: "en nommant au moins cinq règles et les étapes de signalement sans aide" },
    { id: "O2", condition: "Avec un assistant d'IA gratuit", action: "planifier une séance de 45 minutes avec un démarrage, une activité, une discussion et les prochaines étapes", standard: "en donnant à l'IA seulement des détails généraux et en vérifiant que le plan est sûr, peu coûteux et adapté" },
    { id: "O3", condition: "Dans une conversation avec un jeune", action: "poser des questions ouvertes et reformuler ce que vous avez entendu avant de donner un conseil", standard: "en utilisant au moins trois questions ouvertes avec vos propres mots" },
    { id: "O4", condition: "Quand un jeune utilise l'IA pour l'école", action: "montrer un usage honnête de l'IA pour expliquer, interroger et donner un retour, et vérifier ses réponses", standard: "en suivant les règles de l'école et de l'outil, et sans jamais rendre le travail de l'IA" },
    { id: "O5", condition: "À partir des centres d'intérêt d'un jeune", action: "explorer des métiers avec l'IA et en vérifier un sur bls.gov/ooh", standard: "en terminant par une petite prochaine étape avec une date" },
    { id: "O6", condition: "Après chaque séance", action: "écrire une courte note de suivi privée et fêter une réussite", standard: "en utilisant seulement les initiales et sans jamais coller les notes dans l'IA" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Un mentorat sûr et solide avec l'IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Le rôle du mentor et les règles de sécurité",
          minutes: 5,
          goal: "Nommer les règles de sécurité que vous suivrez à chaque rencontre avec un jeune.",
          text: [
            "Un mentor est un adulte de confiance qui écoute, encourage et aide un jeune à se fixer des objectifs et à les atteindre. Vous n'êtes ni son parent, ni son enseignant, ni son thérapeute ; vous êtes un guide stable et bienveillant.",
            "Les programmes protègent les jeunes et les mentors avec des règles. Les plus courantes : une vérification des antécédents avant de commencer, des rencontres dans des lieux publics ou approuvés, un deuxième adulte à proximité au lieu d'être seul avec un jeune, des contacts uniquement par les moyens approuvés, et jamais de trajets en voiture, de cadeaux ou d'argent sauf si votre programme l'autorise. La règle à suivre, c'est la politique de votre programme.",
            "Si un jeune vous dit qu'on lui fait du mal ou qu'il est en danger, restez calme, écoutez, ne promettez pas de garder le secret, et suivez tout de suite les étapes de signalement de votre programme. Aux États-Unis, en cas d'urgence, appelez le 911 ; la ligne nationale Childhelp contre la maltraitance des enfants est le (800) 422-4453. Ailleurs, appelez le numéro d'urgence et la ligne d'aide à l'enfance de votre pays."
          ],
          steps: ["Faites la vérification des antécédents et la formation de votre programme.", "Rencontrez le jeune seulement dans des lieux publics ou approuvés, avec un autre adulte à proximité.", "Utilisez seulement les moyens approuvés pour contacter votre filleul.", "Si un jeune vous parle d'un mal subi : écoutez, ne promettez pas le secret, suivez les étapes de signalement."],
          words: [["Mentor", "un adulte de confiance qui guide et encourage un jeune."], ["Filleul", "le jeune qui est accompagné par un mentor."], ["Vérification des antécédents", "un contrôle du passé d'une personne avant qu'elle travaille avec des jeunes."]],
          sources: [{ name: "Childhelp : ligne nationale contre la maltraitance des enfants (États-Unis)", url: "https://www.childhelphotline.org/" }, { name: "MENTOR : éléments d'une pratique efficace du mentorat", url: "https://www.mentoring.org/resource/elements-of-effective-practice-for-mentoring/" }],
          slides: [
            { title: "Un mentor est", bullets: ["Un adulte de confiance et bienveillant", "Quelqu'un qui écoute et encourage", "Ni parent, ni enseignant, ni thérapeute"] },
            { title: "Règles de sécurité courantes", bullets: ["D'abord la vérification des antécédents", "Lieux publics ou approuvés, un autre adulte à proximité", "Contacts approuvés ; ni trajets ni cadeaux sauf autorisation"] },
            { title: "Si un jeune révèle un mal subi", bullets: ["Restez calme et écoutez", "Ne promettez pas le secret", "Suivez le signalement ; urgence : 911 (É.-U.) ou votre numéro local"] },
            { title: "La politique de votre programme d'abord", bullets: ["Ligne Childhelp (É.-U.) : (800) 422-4453", "Ailleurs : la ligne d'aide à l'enfance de votre pays"] }
          ],
          tryIt: "Trouvez la politique de mentorat de votre programme (ou demandez-la au coordinateur). Notez cinq règles que vous suivrez à chaque rencontre avec votre filleul.",
          youCanNow: "expliquer le rôle d'un mentor et les règles de sécurité que vous suivez.",
          quickCheck: [
            { objective: "O1", q: "Quel est le rôle d'un mentor ?", options: ["Un guide stable et bienveillant qui écoute et encourage", "Un parent de remplacement", "Un thérapeute", "Un enseignant qui met des notes"], answer: 0, why: "Un mentor est un adulte de confiance qui guide, pas un parent, un enseignant ni un thérapeute." },
            { objective: "O1", q: "Votre filleul vous demande de le ramener chez lui après une séance. Que faites-vous ?", options: ["Le ramener ; c'est gentil", "Suivre la politique de votre programme sur les trajets", "Lui demander de garder le secret", "Le laisser rentrer seul à pied la nuit"], answer: 1, why: "Ne raccompagnez jamais un jeune en voiture sauf si votre programme l'autorise ; la politique fait la règle." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Planifier une séance avec l'IA",
          minutes: 5,
          goal: "Utiliser un assistant d'IA gratuit pour planifier une séance de 45 minutes avec un objectif clair.",
          text: [
            "Une bonne séance a quatre parties : un démarrage (5 minutes), une activité (20 minutes), une discussion sur ce qu'on a appris (15 minutes) et un plan pour la prochaine fois (5 minutes).",
            "Un assistant d'IA gratuit comme ChatGPT, Microsoft Copilot ou Google Gemini peut proposer des activités. Décrivez le jeune en termes généraux seulement : tranche d'âge, centres d'intérêt et objectif. Exemple : « Planifie une séance de mentorat de 45 minutes pour un jeune de 14 ans qui adore le basket et veut améliorer sa note de maths. Inclus un démarrage, une activité peu chère et trois questions. »",
            "Ne donnez jamais à l'IA le nom d'un jeune, son école, son adresse, ses photos, ses problèmes familiaux ou quoi que ce soit qu'il vous a confié. Ensuite, vérifiez le plan : est-il sûr, gratuit ou peu cher, et adapté à ce jeune ?"
          ],
          steps: ["Choisissez un objectif pour la séance.", "Décrivez le jeune en termes généraux seulement : âge, intérêts, objectif.", "Demandez à l'IA un démarrage, une activité et des questions.", "Vérifiez la sécurité, le coût et l'adaptation du plan, et changez ce qui ne convient pas."],
          words: [["Séance", "une rencontre entre un mentor et son filleul."], ["Démarrage", "un début court et facile qui aide les gens à se détendre."]],
          slides: [
            { title: "Une séance de 45 minutes", bullets: ["Démarrage : 5 minutes", "Activité : 20 minutes", "Discussion : 15 minutes ; suite : 5"] },
            { title: "Demandez à l'IA avec des détails généraux", bullets: ["Tranche d'âge, intérêts, objectif", "Demandez démarrage, activité, questions"] },
            { title: "Ne partagez jamais avec l'IA", bullets: ["Nom, école, adresse ou photos", "Problèmes familiaux ou confidences"] },
            { title: "Vérifiez le plan", bullets: ["Sûr ?", "Gratuit ou peu cher ?", "Adapté à ce jeune ?"] }
          ],
          tryIt: "Demandez à l'IA de planifier une séance de 45 minutes pour un jeune que vous accompagnez ou pourriez accompagner, avec seulement des détails généraux. Changez une partie pour mieux l'adapter.",
          youCanNow: "planifier une séance de mentorat avec l'IA en protégeant la vie privée du jeune.",
          quickCheck: [
            { objective: "O2", q: "Combien de temps dure l'activité dans le plan de séance de 45 minutes ?", options: ["5 minutes", "10 minutes", "20 minutes", "40 minutes"], answer: 2, why: "Le plan prévoit 5 minutes de démarrage, 20 minutes d'activité, 15 minutes de discussion et 5 minutes pour les prochaines étapes." },
            { objective: "O2", q: "L'IA propose une sortie payante dans un parc d'attractions pour votre séance. Que faites-vous ?", options: ["La réserver", "Demander à la famille du filleul de payer", "L'utiliser telle quelle", "La remplacer par une activité gratuite ou peu chère qui convient"], answer: 3, why: "Vous vérifiez que le plan de l'IA est sûr, peu coûteux et adapté, et vous changez ce qui ne convient pas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Poser de bonnes questions et vraiment écouter",
          minutes: 5,
          goal: "Écrire trois questions ouvertes et s'entraîner à écouter sans chercher à tout régler.",
          text: [
            "Les questions fermées donnent des réponses d'un mot : « L'école, ça allait ? » « Oui. » Les questions ouvertes invitent une vraie réponse : « Quel a été le meilleur moment de ta semaine ? » « Dans quoi aimerais-tu t'améliorer ? »",
            "Écouter compte plus que parler. Regardez le jeune, rangez votre téléphone, hochez la tête, et reformulez ce que vous avez entendu : « Donc l'interro de maths t'a semblé injuste parce que tu avais révisé le mauvais chapitre ? » Ne vous précipitez pas pour tout régler ; demandez ce qu'il pense pouvoir essayer.",
            "L'IA peut proposer des idées pour lancer la conversation selon l'humeur et les intérêts. Demandez-lui dix questions ouvertes pour un ado qui adore la musique, puis choisissez les trois qui vous ressemblent le plus."
          ],
          steps: ["Transformez les questions fermées en questions ouvertes.", "Rangez votre téléphone et donnez toute votre attention.", "Reformulez ce que vous avez entendu.", "Demandez ce qu'il pense pouvoir essayer avant de conseiller."],
          words: [["Question ouverte", "une question à laquelle on ne peut pas répondre par oui ou non."], ["Écoute active", "écouter attentivement et reformuler ce qu'on a entendu."]],
          slides: [
            { title: "Fermée ou ouverte", bullets: ["Fermée : « L'école, ça allait ? »", "Ouverte : « Quel a été le meilleur moment de ta semaine ? »"] },
            { title: "Vraiment écouter", bullets: ["Téléphone rangé, regard levé", "Hochez la tête et reformulez", "Demandez ce qu'il pourrait essayer avant de conseiller"] },
            { title: "L'IA pour lancer la conversation", bullets: ["Demandez dix questions ouvertes", "Choisissez-en trois qui vous ressemblent"] }
          ],
          tryIt: "Demandez à l'IA dix questions ouvertes pour un jeune dont vous connaissez un loisir. Choisissez-en trois, et réécrivez-les avec vos mots.",
          youCanNow: "poser des questions ouvertes et écouter d'une façon qui aide les jeunes à parler.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'une question ouverte ?", options: ["Une question qui invite une vraie réponse, pas seulement oui ou non", "Une question avec une seule bonne réponse", "Une question seulement sur les notes", "Une question posée à voix forte"], answer: 0, why: "Les questions ouvertes invitent les jeunes à dire plus qu'un mot." },
            { objective: "O3", q: "Votre filleul dit que l'entraînement était horrible. Que dites-vous d'abord ?", options: ["« Quitte l'équipe. »", "« Donc l'entraînement a été vraiment dur aujourd'hui. Qu'est-ce qui s'est passé ? »", "« J'ai connu pire. »", "« Parlons d'autre chose. »"], answer: 1, why: "Reformuler ce que vous avez entendu et demander plus montre que vous écoutez." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Un mentorat sûr et solide avec l'IA",
        questions: [
          { objective: "O1", q: "Laquelle est une règle de sécurité courante du mentorat ?", options: ["Se retrouver seuls dans votre voiture", "Se rencontrer dans des lieux publics ou approuvés avec un autre adulte à proximité", "S'écrire en privé tard le soir", "Donner de l'argent quand il en demande"], answer: 1, why: "Des lieux publics ou approuvés avec un autre adulte à proximité protègent tout le monde." },
          { objective: "O1", q: "Votre filleul vous dit que quelqu'un à la maison lui fait du mal et vous demande de garder le secret. Vous :", options: ["Promettez de garder le secret", "L'ignorez", "Écoutez, ne promettez pas le secret, et suivez les étapes de signalement de votre programme", "En parlez en ligne"], answer: 2, why: "La sécurité passe d'abord ; suivez tout de suite les étapes de signalement." },
          { objective: "O2", q: "Quel détail peut-on donner à l'IA pour planifier une séance ?", options: ["Le nom complet du jeune", "Son école et son adresse", "Une confidence qu'il vous a faite", "« Un jeune de 14 ans qui adore le basket »"], answer: 3, why: "Des détails généraux comme l'âge et les intérêts suffisent." },
          { objective: "O3", q: "Laquelle est une question ouverte ?", options: ["« Dans quoi aimerais-tu t'améliorer ? »", "« L'école, ça allait ? »", "« Tu es fatigué ? »", "« Tu as mangé ? »"], answer: 0, why: "On ne peut pas y répondre par oui ou non." },
          { objective: "O3", q: "Votre filleul est contrarié par une note. Une bonne première étape est de :", options: ["Lui dire exactement quoi faire", "Écouter et reformuler ce que vous avez entendu", "Regarder votre téléphone", "Changer de sujet"], answer: 1, why: "Écouter d'abord l'aide à se sentir entendu et à réfléchir." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Aider les jeunes à bien utiliser l'IA",
      lessons: [
        {
          objectives: ["O4"],
          title: "Un usage honnête de l'IA pour l'école",
          minutes: 5,
          goal: "Montrer à un jeune comment utiliser l'IA comme un professeur particulier, pas pour faire son travail.",
          text: [
            "Beaucoup d'élèves utilisent déjà l'IA. Les écoles ont des règles différentes : certaines l'autorisent pour certaines tâches, d'autres non. Vérifiez toujours d'abord les règles de l'école et de l'enseignant. Beaucoup d'outils d'IA ont aussi un âge minimum et peuvent demander l'autorisation d'un parent ou tuteur pour les adolescents ; vérifiez les conditions de chaque outil avec le parent ou tuteur.",
            "Un usage honnête, c'est quand l'IA vous aide à apprendre, pas quand elle fait le travail à votre place. Bons usages : « Explique-moi les fractions comme si j'avais 12 ans. » « Interroge-moi sur ces mots de vocabulaire. » « Donne-moi un avis sur mon paragraphe, mais ne le réécris pas. » Copier les réponses de l'IA et les rendre comme les siennes, c'est tricher.",
            "Apprenez-lui aussi à vérifier l'IA. Elle peut se tromper. Comparez avec le manuel, les notes de cours ou l'enseignant."
          ],
          steps: ["Vérifiez les règles de l'école et de l'enseignant sur l'IA.", "Vérifiez l'âge minimum de l'outil avec un parent ou tuteur.", "Utilisez l'IA pour expliquer, interroger ou donner un avis.", "Ne rendez jamais le travail de l'IA comme le vôtre.", "Vérifiez les réponses avec les supports de cours."],
          words: [["Professeur particulier", "quelqu'un ou quelque chose qui vous aide à apprendre, sans faire le travail à votre place."], ["Tricher", "rendre un travail qui n'est pas le vôtre comme s'il l'était."]],
          slides: [
            { title: "Les règles d'abord", bullets: ["Règles de l'école et de l'enseignant sur l'IA", "Âge minimum de l'outil et autorisation parentale"] },
            { title: "L'IA comme professeur particulier", bullets: ["« Explique les fractions comme si j'avais 12 ans »", "« Interroge-moi sur ces mots »", "« Donne un avis, ne réécris pas »"] },
            { title: "Pas acceptable", bullets: ["Copier les réponses de l'IA comme les siennes", "Croire l'IA sans vérifier"] }
          ],
          tryIt: "Avec votre filleul (ou seul pour vous entraîner), demandez à l'IA d'expliquer un sujet scolaire avec des mots simples puis de vous poser trois questions. Vérifiez une réponse avec un manuel ou des notes de cours.",
          youCanNow: "montrer à un jeune comment utiliser l'IA honnêtement comme aide aux études.",
          quickCheck: [
            { objective: "O4", q: "Quelle est une bonne demande à l'IA pour l'école ?", options: ["« Écris ma rédaction à ma place. »", "« Fais mes devoirs de maths. »", "« Donne-moi un retour sur mon paragraphe, mais ne le réécris pas. »", "« Réponds aux questions du contrôle. »"], answer: 2, why: "Demander un retour aide l'élève à apprendre tout en faisant son propre travail." },
            { objective: "O4", q: "Votre filleul de 12 ans veut s'inscrire à un outil d'IA. Que faites-vous d'abord ?", options: ["L'inscrire avec votre e-mail", "Lui dire de mentir sur son âge", "Ignorer les règles de l'école", "Vérifier les règles d'âge de l'outil avec un parent ou tuteur"], answer: 3, why: "Beaucoup d'outils d'IA ont des règles d'âge qui demandent l'accord d'un parent ou tuteur." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Explorer les métiers et les objectifs ensemble",
          minutes: 5,
          goal: "Utiliser l'IA et un site officiel pour explorer un métier avec votre filleul.",
          text: [
            "Les jeunes ne connaissent souvent que les métiers qu'ils voient autour d'eux. Explorer les métiers ouvre des portes. Partez de ce qu'ils aiment : jeux, musique, sport, réparer des choses, aider les gens, dessiner.",
            "Demandez à l'IA : « Liste cinq métiers pour un ado qui adore les jeux vidéo et le dessin. Pour chacun, dis en une phrase en quoi il consiste et quoi étudier. » Puis cherchez ensemble un métier dans l'Occupational Outlook Handbook sur bls.gov/ooh, le guide gratuit du gouvernement américain, pour vérifier son salaire, sa formation et ses perspectives. Hors des États-Unis, utilisez le site officiel d'orientation ou des métiers de votre pays.",
            "Transformez l'intérêt en petit objectif : rejoindre un club, suivre un cours gratuit à la bibliothèque, parler à quelqu'un qui fait ce métier, ou essayer une leçon gratuite en ligne."
          ],
          steps: ["Demandez-lui ce qu'il aime.", "Demandez à l'IA cinq métiers liés.", "Cherchez-en un ensemble sur bls.gov/ooh.", "Fixez une petite prochaine étape avec une date."],
          words: [["Carrière", "le type de travail que quelqu'un fait pendant de nombreuses années."], ["Perspectives d'emploi", "la vitesse de croissance prévue d'un métier."]],
          sources: [{ name: "Bureau of Labor Statistics (États-Unis) : Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" }],
          slides: [
            { title: "Partez de ce qu'il aime", bullets: ["Jeux, musique, sport", "Réparer, aider les gens, dessiner"] },
            { title: "Explorez avec l'IA, vérifiez officiellement", bullets: ["Demandez à l'IA cinq métiers liés", "Vérifiez-en un sur bls.gov/ooh : salaire, formation, perspectives"] },
            { title: "Une petite prochaine étape", bullets: ["Rejoindre un club ou un cours gratuit", "Parler à quelqu'un qui fait ce métier", "Fixer une date"] }
          ],
          tryIt: "Choisissez un centre d'intérêt (le vôtre ou celui de votre filleul). Demandez à l'IA cinq métiers liés, vérifiez-en un sur bls.gov/ooh (ou le site officiel de votre pays), et écrivez une petite prochaine étape avec une date.",
          youCanNow: "aider un jeune à explorer des métiers et à fixer une petite étape concrète.",
          quickCheck: [
            { objective: "O5", q: "Que montre l'Occupational Outlook Handbook pour un métier ?", options: ["Le salaire, la formation et les perspectives", "Seulement les offres d'emploi près de chez vous", "Les métiers des célébrités", "Les notes scolaires"], answer: 0, why: "Le Handbook sur bls.gov/ooh montre le salaire, la formation et les perspectives d'un métier." },
            { objective: "O5", q: "Votre filleul aime dessiner et l'IA cite le métier de graphiste. Quelle est une bonne prochaine étape ?", options: ["Lui dire que ce n'est pas un vrai métier", "Fixer une petite étape, comme un cours gratuit à la bibliothèque, avec une date", "Choisir un autre métier pour lui", "Attendre qu'il finisse l'école"], answer: 1, why: "Transformer un intérêt en petite étape datée donne de l'élan." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Suivre les progrès et tout rassembler",
          minutes: 5,
          goal: "Tenir des notes de suivi simples et privées et terminer votre plan de séance.",
          text: [
            "De courtes notes vous aident à vous souvenir des objectifs et à fêter les réussites. Après chaque séance, écrivez une ou deux lignes : l'objectif, ce que vous avez fait, une réussite et la prochaine étape. Utilisez seulement le prénom ou les initiales, et gardez les notes là où votre programme le demande.",
            "Fêtez les progrès, même les petits pas : une note qui monte, un dossier terminé, arriver à l'heure. Les jeunes se souviennent quand un adulte l'a remarqué.",
            "Ne collez pas de notes sur un jeune dans l'IA. Si vous voulez de l'aide, demandez en termes généraux : « Quelles sont des façons amusantes de fêter un ado qui a amélioré sa note ? »"
          ],
          steps: ["Après chaque séance, notez l'objectif, ce que vous avez fait, une réussite et la prochaine étape.", "Utilisez seulement les initiales et rangez les notes là où votre programme le demande.", "Fêtez les petites réussites.", "Ne posez à l'IA que des questions générales, jamais sur un jeune précis."],
          words: [["Note de suivi", "un court compte rendu de ce qui s'est passé et de la suite."]],
          slides: [
            { title: "Des notes de suivi simples", bullets: ["L'objectif et ce que vous avez fait", "Une réussite et la prochaine étape", "Initiales seulement ; rangez comme le dit votre programme"] },
            { title: "Fêtez les petites réussites", bullets: ["Une note qui monte", "Un dossier terminé", "Arriver à l'heure"] },
            { title: "Gardez les notes hors de l'IA", bullets: ["Seulement des questions générales", "Jamais sur un jeune précis"] }
          ],
          tryIt: "Tâche finale : écrivez votre plan de séance de 45 minutes avec l'aide de l'IA : objectif, démarrage, activité, trois questions ouvertes, une démonstration d'usage honnête de l'IA pour l'école ou les métiers, et une note de suivi d'une ligne. Vérifiez-le avec les règles de sécurité de votre programme, puis animez-le ou jouez-le avec un autre adulte.",
          youCanNow: "planifier, animer et suivre des séances de mentorat sûres qui aident les jeunes à bien utiliser l'IA.",
          quickCheck: [
            { objective: "O6", q: "Comment devez-vous nommer votre filleul dans les notes de suivi ?", options: ["Nom complet et école", "Nom complet et adresse", "Seulement les initiales ou le prénom", "Son numéro de téléphone"], answer: 2, why: "Les initiales ou le prénom seulement gardent les informations du jeune privées." },
            { objective: "O6", q: "Vous voulez des idées pour fêter la meilleure note de votre filleul. Que demandez-vous à l'IA ?", options: ["Coller toutes vos notes de séance", "Donner son nom et son école", "Envoyer son bulletin", "Poser une question générale sur la façon de fêter la meilleure note d'un ado"], answer: 3, why: "Posez à l'IA seulement des questions générales, jamais sur un jeune en particulier." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Aider les jeunes à bien utiliser l'IA",
        questions: [
          { objective: "O4", q: "Avant que votre filleul utilise l'IA pour ses devoirs, vérifiez :", options: ["Rien", "Seulement la météo", "Les règles de l'école et de l'enseignant sur l'IA", "Ses réseaux sociaux"], answer: 2, why: "Les écoles ont des règles différentes sur l'IA ; vérifiez-les d'abord." },
          { objective: "O4", q: "Lequel est un usage honnête de l'IA pour l'école ?", options: ["Copier la rédaction de l'IA", "Faire faire les devoirs de maths par l'IA", "Rendre le travail de l'IA comme le sien", "« Interroge-moi sur ces mots de vocabulaire »"], answer: 3, why: "Utiliser l'IA pour s'entraîner aide à apprendre." },
          { objective: "O5", q: "L'IA liste des métiers pour votre filleul. Comment vérifier le salaire et la formation ?", options: ["Chercher sur bls.gov/ooh", "Faire confiance à l'IA", "Demander à un inconnu en ligne", "Ne pas vérifier"], answer: 0, why: "L'Occupational Outlook Handbook est la source officielle." },
          { objective: "O6", q: "Quelle note de suivi est la meilleure ?", options: ["Nom complet, école et problèmes familiaux", "« J. : objectif améliorer les maths ; fractions travaillées ; réussite : B à l'interro ; suite : plan de révision. »", "Rien du tout", "Une photo publiée en ligne"], answer: 1, why: "Elle est courte, utilise les initiales et note l'objectif, la réussite et la suite." },
          { objective: "O6", q: "Pouvez-vous coller vos notes sur un filleul dans l'IA pour avoir des conseils ?", options: ["Oui, toujours", "Seulement si elles sont courtes", "Non ; posez seulement des questions générales", "Oui, avec sa photo"], answer: 2, why: "Les informations sur un jeune restent privées." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour le mentorat des jeunes",
    questions: [
      { objective: "O1", q: "La meilleure description d'un mentor est :", options: ["Un adulte de confiance qui écoute et encourage", "Le patron d'un jeune", "Un thérapeute", "Un enseignant qui donne des notes"], answer: 0, why: "Les mentors sont des guides bienveillants, pas des parents, enseignants ou thérapeutes." },
      { objective: "O1", q: "Quelles règles passent en premier quand vous êtes mentor ?", options: ["Celles de l'IA", "La politique de votre programme de mentorat", "Celles de vos amis", "Celles des réseaux sociaux"], answer: 1, why: "Suivez toujours la politique de votre programme." },
      { objective: "O1", q: "Qu'est-ce qui est en général exigé avant d'accompagner des jeunes ?", options: ["Un cadeau pour le filleul", "Une voiture", "Une vérification des antécédents", "Un compte sur les réseaux sociaux"], answer: 2, why: "Les programmes exigent souvent une vérification des antécédents." },
      { objective: "O1", q: "Aux États-Unis, en cas d'urgence touchant la sécurité d'un jeune, vous :", options: ["Attendez la semaine suivante", "Publiez en ligne", "Demandez à l'IA", "Appelez le 911"], answer: 3, why: "Les urgences demandent une aide immédiate ; ailleurs, appelez votre numéro d'urgence." },
      { objective: "O1", q: "Quel numéro joint la ligne nationale Childhelp contre la maltraitance des enfants ?", options: ["(800) 422-4453", "(800) 555-0000", "411", "0"], answer: 0, why: "La ligne de Childhelp est le (800) 422-4453." },
      { objective: "O2", q: "Une bonne séance de mentorat a :", options: ["Seulement du temps sur le téléphone", "Un démarrage, une activité, une discussion et une suite", "Aucun plan", "Un examen"], answer: 1, why: "Ces quatre parties donnent une forme à la séance." },
      { objective: "O2", q: "Qu'est-ce qu'on peut dire sans risque à l'IA pour planifier ?", options: ["L'adresse du filleul", "Le nom de son école", "Sa tranche d'âge, ses intérêts et son objectif", "Une confidence qu'il vous a faite"], answer: 2, why: "Des détails généraux suffisent pour planifier." },
      { objective: "O2", q: "Après que l'IA a proposé un plan de séance, vous devez :", options: ["L'utiliser sans le lire", "Le partager sur les réseaux sociaux", "Ajouter le nom du filleul", "Vérifier qu'il est sûr, peu cher et adapté au jeune"], answer: 3, why: "Vous connaissez le jeune ; l'IA, non." },
      { objective: "O3", q: "Laquelle est une question fermée ?", options: ["« L'école, ça allait ? »", "« Qu'est-ce qui t'a fait rire cette semaine ? »", "« Que changerais-tu dans ta journée ? »", "« Que veux-tu apprendre ensuite ? »"], answer: 0, why: "On peut y répondre par oui ou non." },
      { objective: "O3", q: "L'écoute active veut dire :", options: ["Regarder son téléphone pendant qu'il parle", "Écouter attentivement et reformuler ce qu'on a entendu", "Parler plus que lui", "Régler tout de suite chaque problème"], answer: 1, why: "Reformuler montre que vous avez compris." },
      { objective: "O3", q: "Avant de donner un conseil, il est utile de :", options: ["Terminer la séance", "Changer de sujet", "Demander ce qu'il pense pouvoir essayer", "Interroger l'IA sur lui en donnant son nom"], answer: 2, why: "Ses propres idées renforcent sa confiance." },
      { objective: "O3", q: "Pour quoi l'IA peut-elle aider un mentor ?", options: ["Garder des secrets", "Prendre des décisions de sécurité", "Remplacer le mentor", "Proposer des idées pour lancer la conversation"], answer: 3, why: "L'IA peut proposer des questions ; vous choisissez et menez." },
      { objective: "O4", q: "Avant qu'un ado s'inscrive à un outil d'IA, vérifiez :", options: ["L'âge minimum de l'outil, avec un parent ou tuteur", "Rien", "Seulement les couleurs", "Combien d'amis l'utilisent"], answer: 0, why: "Beaucoup d'outils ont un âge minimum et demandent l'accord d'un parent pour les ados." },
      { objective: "O4", q: "Rendre la rédaction de l'IA comme la sienne, c'est :", options: ["Bien", "Tricher", "Obligatoire", "Étudier"], answer: 1, why: "Le travail doit être le sien." },
      { objective: "O4", q: "Laquelle est une bonne consigne d'étude pour l'IA ?", options: ["« Écris ma rédaction »", "« Fais tous mes devoirs »", "« Explique les fractions comme si j'avais 12 ans, puis interroge-moi »", "« Réponds à mon examen »"], answer: 2, why: "Elle utilise l'IA comme professeur particulier." },
      { objective: "O4", q: "L'IA donne à votre filleul une réponse qui contredit le manuel. Il doit :", options: ["Croire l'IA", "Ignorer les deux", "Changer le manuel", "Vérifier avec les notes de cours ou l'enseignant"], answer: 3, why: "L'IA peut se tromper ; vérifiez avec les supports de cours." },
      { objective: "O5", q: "Une bonne façon de commencer l'exploration des métiers est de :", options: ["Demander au jeune ce qu'il aime", "Choisir un métier à sa place", "Ne choisir que le métier le mieux payé", "La sauter"], answer: 0, why: "Les intérêts mènent à des métiers qui comptent pour lui." },
      { objective: "O5", q: "Le guide officiel gratuit sur les salaires et les formations aux États-Unis est :", options: ["Une publicité surgissante", "L'Occupational Outlook Handbook sur bls.gov/ooh", "Une vidéo sur les réseaux sociaux", "Le SMS d'un inconnu"], answer: 1, why: "Il est géré par le Bureau of Labor Statistics des États-Unis." },
      { objective: "O6", q: "Une note de suivi doit utiliser :", options: ["Les noms complets et les adresses", "Des photos", "Les initiales, l'objectif, une réussite et la suite", "Des secrets de famille"], answer: 2, why: "Des notes courtes avec les initiales protègent la vie privée." },
      { objective: "O6", q: "Pourquoi fêter les petites réussites ?", options: ["La loi l'exige", "Pour publier en ligne", "Cela remplace les objectifs", "Les jeunes se souviennent quand un adulte l'a remarqué"], answer: 3, why: "Remarquer les progrès renforce la motivation et la confiance." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      1,
      5,
      6,
      8,
      9,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Plan de séance",
        objective: "O2",
        notYet: "Il manque l'objectif, le démarrage ou l'activité, ou le plan ne tient pas en 45 minutes.",
        meets: "Un objectif, un démarrage, une activité, une discussion et les prochaines étapes qui tiennent en 45 minutes.",
        exceeds: "A changé le plan de l'IA pour l'adapter aux intérêts du jeune et le garder peu coûteux."
      },
      {
        name: "Questions ouvertes",
        objective: "O3",
        notYet: "Moins de trois questions, ou des questions à réponse oui ou non.",
        meets: "Trois questions ouvertes avec les mots du mentor.",
        exceeds: "Prévoit de reformuler ce que dit le filleul."
      },
      {
        name: "Démonstration d'usage honnête de l'IA",
        objective: "O4",
        notYet: "Dans la démonstration, l'IA fait le travail, ou les règles de l'école sont oubliées.",
        meets: "Montre l'IA qui explique ou interroge, et vérifie une réponse avec les supports du cours.",
        exceeds: "Parle aussi des règles d'âge de l'outil et des règles de l'école sur l'IA."
      },
      {
        name: "Note de suivi",
        objective: "O6",
        notYet: "Pas de note, ou elle utilise le nom complet ou des détails privés.",
        meets: "Une ligne avec les initiales, l'objectif, une réussite et la prochaine étape.",
        exceeds: "Indique où la note sera gardée selon les règles du programme."
      },
      {
        name: "Sécurité et vie privée",
        objective: "O1",
        notYet: "Le plan enfreint une règle de sécurité du programme ou contient des détails privés sur le jeune.",
        meets: "Respecte les règles de sécurité du programme et ne contient aucun détail privé.",
        exceeds: "Liste les étapes de signalement que le mentor suivrait si un jeune parlait d'un mal subi."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Mentors qui animent au moins quatre séances préparées dans les 60 jours (questionnaire de suivi)",
      "Filleuls qui fixent et atteignent une étape scolaire ou professionnelle, d'après le programme",
      "Programmes qui ne signalent aucun incident de sécurité ou de vie privée parmi les mentors formés"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone ou un ordinateur du programme",
      "Un assistant d'IA gratuit : Microsoft Copilot, ChatGPT ou Google Gemini",
      "La politique de mentorat et de sécurité du programme",
      "Du papier pour le plan de séance et les notes de suivi",
      "Environ 60 minutes au total : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Commencez par la politique de sécurité et les étapes de signalement de votre programme ; ce cours ne les remplace pas.",
      "Pendant la formation, faites jouer la séance par les mentors avec un autre adulte, pas avec un jeune.",
      "Vérifiez qu'aucune demande ni note ne contient le nom, l'école, des photos ou des histoires privées d'un jeune.",
      "Donnez les contacts locaux pour les signalements et la ligne Childhelp, et rappelez aux mentors d'appeler le 911 en cas d'urgence.",
      "Notez la tâche finale avec la grille d'évaluation, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
