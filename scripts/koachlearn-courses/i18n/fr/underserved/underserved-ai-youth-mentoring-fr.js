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
  chapters: [
    {
      name: "Chapitre 1 : Un mentorat sûr et solide avec l'IA",
      lessons: [
        {
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
          youCanNow: "expliquer le rôle d'un mentor et les règles de sécurité que vous suivez."
        },
        {
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
          youCanNow: "planifier une séance de mentorat avec l'IA en protégeant la vie privée du jeune."
        },
        {
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
          youCanNow: "poser des questions ouvertes et écouter d'une façon qui aide les jeunes à parler."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Un mentorat sûr et solide avec l'IA",
        questions: [
          { q: "Laquelle est une règle de sécurité courante du mentorat ?", options: ["Se retrouver seuls dans votre voiture", "Se rencontrer dans des lieux publics ou approuvés avec un autre adulte à proximité", "S'écrire en privé tard le soir", "Donner de l'argent quand il en demande"], answer: 1, why: "Des lieux publics ou approuvés avec un autre adulte à proximité protègent tout le monde." },
          { q: "Votre filleul vous dit que quelqu'un à la maison lui fait du mal et vous demande de garder le secret. Vous :", options: ["Promettez de garder le secret", "L'ignorez", "Écoutez, ne promettez pas le secret, et suivez les étapes de signalement de votre programme", "En parlez en ligne"], answer: 2, why: "La sécurité passe d'abord ; suivez tout de suite les étapes de signalement." },
          { q: "Quel détail peut-on donner à l'IA pour planifier une séance ?", options: ["Le nom complet du jeune", "Son école et son adresse", "Une confidence qu'il vous a faite", "« Un jeune de 14 ans qui adore le basket »"], answer: 3, why: "Des détails généraux comme l'âge et les intérêts suffisent." },
          { q: "Laquelle est une question ouverte ?", options: ["« Dans quoi aimerais-tu t'améliorer ? »", "« L'école, ça allait ? »", "« Tu es fatigué ? »", "« Tu as mangé ? »"], answer: 0, why: "On ne peut pas y répondre par oui ou non." },
          { q: "Votre filleul est contrarié par une note. Une bonne première étape est de :", options: ["Lui dire exactement quoi faire", "Écouter et reformuler ce que vous avez entendu", "Regarder votre téléphone", "Changer de sujet"], answer: 1, why: "Écouter d'abord l'aide à se sentir entendu et à réfléchir." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Aider les jeunes à bien utiliser l'IA",
      lessons: [
        {
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
          youCanNow: "montrer à un jeune comment utiliser l'IA honnêtement comme aide aux études."
        },
        {
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
          youCanNow: "aider un jeune à explorer des métiers et à fixer une petite étape concrète."
        },
        {
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
          youCanNow: "planifier, animer et suivre des séances de mentorat sûres qui aident les jeunes à bien utiliser l'IA."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Aider les jeunes à bien utiliser l'IA",
        questions: [
          { q: "Avant que votre filleul utilise l'IA pour ses devoirs, vérifiez :", options: ["Rien", "Seulement la météo", "Les règles de l'école et de l'enseignant sur l'IA", "Ses réseaux sociaux"], answer: 2, why: "Les écoles ont des règles différentes sur l'IA ; vérifiez-les d'abord." },
          { q: "Lequel est un usage honnête de l'IA pour l'école ?", options: ["Copier la rédaction de l'IA", "Faire faire les devoirs de maths par l'IA", "Rendre le travail de l'IA comme le sien", "« Interroge-moi sur ces mots de vocabulaire »"], answer: 3, why: "Utiliser l'IA pour s'entraîner aide à apprendre." },
          { q: "L'IA liste des métiers pour votre filleul. Comment vérifier le salaire et la formation ?", options: ["Chercher sur bls.gov/ooh", "Faire confiance à l'IA", "Demander à un inconnu en ligne", "Ne pas vérifier"], answer: 0, why: "L'Occupational Outlook Handbook est la source officielle." },
          { q: "Quelle note de suivi est la meilleure ?", options: ["Nom complet, école et problèmes familiaux", "« J. : objectif améliorer les maths ; fractions travaillées ; réussite : B à l'interro ; suite : plan de révision. »", "Rien du tout", "Une photo publiée en ligne"], answer: 1, why: "Elle est courte, utilise les initiales et note l'objectif, la réussite et la suite." },
          { q: "Pouvez-vous coller vos notes sur un filleul dans l'IA pour avoir des conseils ?", options: ["Oui, toujours", "Seulement si elles sont courtes", "Non ; posez seulement des questions générales", "Oui, avec sa photo"], answer: 2, why: "Les informations sur un jeune restent privées." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour le mentorat des jeunes",
    questions: [
      { q: "La meilleure description d'un mentor est :", options: ["Un adulte de confiance qui écoute et encourage", "Le patron d'un jeune", "Un thérapeute", "Un enseignant qui donne des notes"], answer: 0, why: "Les mentors sont des guides bienveillants, pas des parents, enseignants ou thérapeutes." },
      { q: "Quelles règles passent en premier quand vous êtes mentor ?", options: ["Celles de l'IA", "La politique de votre programme de mentorat", "Celles de vos amis", "Celles des réseaux sociaux"], answer: 1, why: "Suivez toujours la politique de votre programme." },
      { q: "Qu'est-ce qui est en général exigé avant d'accompagner des jeunes ?", options: ["Un cadeau pour le filleul", "Une voiture", "Une vérification des antécédents", "Un compte sur les réseaux sociaux"], answer: 2, why: "Les programmes exigent souvent une vérification des antécédents." },
      { q: "Aux États-Unis, en cas d'urgence touchant la sécurité d'un jeune, vous :", options: ["Attendez la semaine suivante", "Publiez en ligne", "Demandez à l'IA", "Appelez le 911"], answer: 3, why: "Les urgences demandent une aide immédiate ; ailleurs, appelez votre numéro d'urgence." },
      { q: "Quel numéro joint la ligne nationale Childhelp contre la maltraitance des enfants ?", options: ["(800) 422-4453", "(800) 555-0000", "411", "0"], answer: 0, why: "La ligne de Childhelp est le (800) 422-4453." },
      { q: "Une bonne séance de mentorat a :", options: ["Seulement du temps sur le téléphone", "Un démarrage, une activité, une discussion et une suite", "Aucun plan", "Un examen"], answer: 1, why: "Ces quatre parties donnent une forme à la séance." },
      { q: "Qu'est-ce qu'on peut dire sans risque à l'IA pour planifier ?", options: ["L'adresse du filleul", "Le nom de son école", "Sa tranche d'âge, ses intérêts et son objectif", "Une confidence qu'il vous a faite"], answer: 2, why: "Des détails généraux suffisent pour planifier." },
      { q: "Après que l'IA a proposé un plan de séance, vous devez :", options: ["L'utiliser sans le lire", "Le partager sur les réseaux sociaux", "Ajouter le nom du filleul", "Vérifier qu'il est sûr, peu cher et adapté au jeune"], answer: 3, why: "Vous connaissez le jeune ; l'IA, non." },
      { q: "Laquelle est une question fermée ?", options: ["« L'école, ça allait ? »", "« Qu'est-ce qui t'a fait rire cette semaine ? »", "« Que changerais-tu dans ta journée ? »", "« Que veux-tu apprendre ensuite ? »"], answer: 0, why: "On peut y répondre par oui ou non." },
      { q: "L'écoute active veut dire :", options: ["Regarder son téléphone pendant qu'il parle", "Écouter attentivement et reformuler ce qu'on a entendu", "Parler plus que lui", "Régler tout de suite chaque problème"], answer: 1, why: "Reformuler montre que vous avez compris." },
      { q: "Avant de donner un conseil, il est utile de :", options: ["Terminer la séance", "Changer de sujet", "Demander ce qu'il pense pouvoir essayer", "Interroger l'IA sur lui en donnant son nom"], answer: 2, why: "Ses propres idées renforcent sa confiance." },
      { q: "Pour quoi l'IA peut-elle aider un mentor ?", options: ["Garder des secrets", "Prendre des décisions de sécurité", "Remplacer le mentor", "Proposer des idées pour lancer la conversation"], answer: 3, why: "L'IA peut proposer des questions ; vous choisissez et menez." },
      { q: "Avant qu'un ado s'inscrive à un outil d'IA, vérifiez :", options: ["L'âge minimum de l'outil, avec un parent ou tuteur", "Rien", "Seulement les couleurs", "Combien d'amis l'utilisent"], answer: 0, why: "Beaucoup d'outils ont un âge minimum et demandent l'accord d'un parent pour les ados." },
      { q: "Rendre la rédaction de l'IA comme la sienne, c'est :", options: ["Bien", "Tricher", "Obligatoire", "Étudier"], answer: 1, why: "Le travail doit être le sien." },
      { q: "Laquelle est une bonne consigne d'étude pour l'IA ?", options: ["« Écris ma rédaction »", "« Fais tous mes devoirs »", "« Explique les fractions comme si j'avais 12 ans, puis interroge-moi »", "« Réponds à mon examen »"], answer: 2, why: "Elle utilise l'IA comme professeur particulier." },
      { q: "L'IA donne à votre filleul une réponse qui contredit le manuel. Il doit :", options: ["Croire l'IA", "Ignorer les deux", "Changer le manuel", "Vérifier avec les notes de cours ou l'enseignant"], answer: 3, why: "L'IA peut se tromper ; vérifiez avec les supports de cours." },
      { q: "Une bonne façon de commencer l'exploration des métiers est de :", options: ["Demander au jeune ce qu'il aime", "Choisir un métier à sa place", "Ne choisir que le métier le mieux payé", "La sauter"], answer: 0, why: "Les intérêts mènent à des métiers qui comptent pour lui." },
      { q: "Le guide officiel gratuit sur les salaires et les formations aux États-Unis est :", options: ["Une publicité surgissante", "L'Occupational Outlook Handbook sur bls.gov/ooh", "Une vidéo sur les réseaux sociaux", "Le SMS d'un inconnu"], answer: 1, why: "Il est géré par le Bureau of Labor Statistics des États-Unis." },
      { q: "Une note de suivi doit utiliser :", options: ["Les noms complets et les adresses", "Des photos", "Les initiales, l'objectif, une réussite et la suite", "Des secrets de famille"], answer: 2, why: "Des notes courtes avec les initiales protègent la vie privée." },
      { q: "Pourquoi fêter les petites réussites ?", options: ["La loi l'exige", "Pour publier en ligne", "Cela remplace les objectifs", "Les jeunes se souviennent quand un adulte l'a remarqué"], answer: 3, why: "Remarquer les progrès renforce la motivation et la confiance." }
    ]
  }
};
