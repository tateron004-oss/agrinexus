"use strict";

// Koach Learn course (French translation of seniors/seniors-ai-learning-hobbies.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "seniors-ai-learning-hobbies-fr",
  lang: "fr",
  translationOf: "seniors-ai-learning-hobbies",
  category: "Seniors and Technology",
  name: "L'IA pour apprendre et pour les loisirs",
  skills: "Demander à l'IA de vous enseigner pas à pas, Vous faire interroger par l'IA, Faire un plan d'apprentissage, Trouver de bonnes vidéos explicatives, Utiliser l'IA pour un projet de loisir",
  outcome: "utiliser un assistant IA pour faire un plan simple de deux semaines afin d'apprendre un loisir ou un sujet qui vous tient à cœur, vous faire enseigner et interroger pas à pas, et terminer la première séance d'entraînement.",
  about: [
    "Il n'est jamais trop tard pour apprendre. Ce cours s'adresse aux personnes âgées qui veulent commencer un nouveau loisir, reprendre un ancien ou découvrir un sujet qui les a toujours intriguées : le jardinage, l'histoire familiale, la peinture, une nouvelle langue, les oiseaux, la musique ou l'histoire.",
    "Vous utiliserez un assistant IA gratuit comme ChatGPT, Microsoft Copilot ou Google Gemini comme un professeur patient qui ne se lasse jamais de répéter. Vous lui demanderez de vous enseigner par petites étapes, de vous interroger, de planifier vos séances et de vous aider pour un vrai projet de loisir.",
    "Chaque leçon dure environ cinq minutes. Faites chaque fois l'exercice « Essayez maintenant » : ensemble, ils construisent votre propre plan d'apprentissage. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Choisissez un loisir ou un sujet. Demandez à un assistant IA un plan d'apprentissage de deux semaines avec de courtes séances quotidiennes, demandez-lui de vous enseigner la première leçon pas à pas, laissez-le vous poser trois questions et notez une chose que vous pratiquerez demain.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des personnes âgées, souvent à la retraite, qui ont plus de temps libre et veulent apprendre quelque chose de nouveau ou reprendre un loisir : jardinage, peinture, musique, travaux manuels, observation des oiseaux ou histoire de la famille.",
    startingPoint: "Elles savent utiliser un téléphone, une tablette ou un ordinateur pour les appels, l'e-mail et quelques sites. Beaucoup n'ont jamais utilisé d'assistant IA comme professeur ni cherché de vidéos explicatives sur YouTube.",
    gap: "Apprendre un nouveau loisir garde l'esprit actif et crée des liens, mais les cours peuvent coûter cher, être loin ou aller trop vite. Un assistant IA peut enseigner au rythme de l'apprenant, l'interroger et faire un plan, à condition de vérifier aussi les informations de sécurité et de ne pas s'y fier pour les registres de famille.",
    constraints: [
      "Niveau de lecture : mots simples, phrases courtes et étapes grandes et simples",
      "Appareils : un téléphone, une tablette ou un ordinateur avec Internet ; un plus grand écran aide pour les vidéos",
      "Temps : environ 5 minutes par leçon, et de courtes séances d'exercice chaque jour",
      "L'énergie et la santé varient ; les plans doivent prévoir des séances courtes et des jours de repos",
      "Vie privée : ne pas donner à l'IA les informations privées des proches vivants"
    ],
    prerequisites: "« L'IA pour les seniors : utiliser un assistant IA » est utile avant, mais pas obligatoire."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avec un assistant IA gratuit", action: "lui demander d'enseigner un sujet pas à pas, en disant ce que vous savez déjà et en lui demandant d'attendre « suivant »", standard: "en obtenant de petites étapes que vous pouvez suivre à votre rythme" },
    { id: "O2", condition: "Après une courte leçon", action: "demander à l'assistant de vous interroger une question à la fois et de réexpliquer ce que vous ratez", standard: "en répondant à au moins 2 questions sur 3 avec vos propres mots" },
    { id: "O3", condition: "À partir d'un loisir ou d'un sujet qui vous tient à cœur", action: "demander un plan d'apprentissage de deux semaines adapté à votre temps, à votre matériel et à votre énergie", standard: "avec un petit objectif par jour, écrit dans votre calendrier ou sur papier" },
    { id: "O4", condition: "Face à une compétence plus facile à apprendre en regardant", action: "chercher sur YouTube une vidéo explicative pour débutants et passer les publicités et les liens d'inscription", standard: "en choisissant une vidéo claire pour débutants" },
    { id: "O5", condition: "À partir d'un projet de loisir comme un jardin ou un album de souvenirs", action: "demander une liste de matériel et des étapes simples, et vérifier les informations de sécurité sur une étiquette ou une source de confiance", standard: "avant d'acheter ou d'utiliser quoi que ce soit de risqué" },
    { id: "O6", condition: "À partir d'un souvenir de famille", action: "écrire une courte histoire de famille avec votre propre voix et l'aide de l'IA, en cherchant les registres sur des sites de confiance plutôt qu'auprès de l'IA", standard: "sans aucune information privée sur des proches vivants" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : L'IA, votre professeur patient",
      lessons: [
        {
          objectives: ["O1"],
          title: "Demander à l'IA de vous enseigner pas à pas",
          minutes: 5,
          goal: "Demander à un assistant IA de vous enseigner un sujet par petites étapes claires, à votre rythme.",
          text: [
            "Un assistant IA peut jouer le rôle d'un professeur patient. Il vous expliquera une chose autant de fois que nécessaire, de toutes les façons possibles, et il ne se lasse jamais des questions.",
            "Dites-lui ce que vous voulez apprendre, ce que vous savez déjà et comment vous aimez apprendre. Par exemple : « Je veux commencer à observer les oiseaux dans mon jardin. Je suis débutant complet. Apprends-moi les trois premières choses à savoir, une à la fois, avec des phrases courtes. Attends que je dise \"suivant\" avant de continuer. »",
            "Lui demander d'attendre « suivant » garde chaque étape petite, pour que vous puissiez essayer ou réfléchir avant de passer à la suite."
          ],
          steps: ["Dites ce que vous voulez apprendre.", "Dites ce que vous savez déjà, même si ce n'est rien.", "Demandez des étapes courtes et simples.", "Demandez-lui d'attendre que vous disiez « suivant »."],
          words: [["Professeur particulier", "un enseignant qui aide une seule personne à apprendre à son rythme."]],
          slides: [
            { title: "Un professeur patient", bullets: ["Explique autant de fois que nécessaire", "Ne se lasse jamais des questions"] },
            { title: "Dites-lui", bullets: ["Ce que vous voulez apprendre", "Ce que vous savez déjà", "Comment vous aimez apprendre"] },
            { title: "Gardez des étapes petites", bullets: ["« Apprends-moi une chose à la fois. »", "« Attends que je dise \"suivant\". »"] }
          ],
          tryIt: "Choisissez un sujet qui vous intrigue. Demandez à un assistant de vous apprendre les trois premières choses à savoir, une à la fois, en attendant que vous disiez « suivant ». Faites les trois.",
          youCanNow: "demander à un assistant IA de vous enseigner un sujet par petites étapes, à votre rythme.",
          quickCheck: [
            { objective: "O1", q: "Pourquoi un assistant IA peut-il être un bon professeur ?", options: ["Il sait tout de vous", "Il réexplique autant de fois et de façons que nécessaire, sans se fatiguer", "Il vous note comme à l'école", "Il ne marche que pour les enfants"], answer: 1, why: "La leçon dit qu'un assistant est comme un professeur patient qui ne se lasse jamais des questions." },
            { objective: "O1", q: "Vous voulez apprendre à jouer de l'harmonica et vous n'avez jamais essayé. Que dites-vous à l'assistant ?", options: ["\"Harmonica.\"", "\"Dis-moi tout sur la musique.\"", "\"Je suis complètement débutant. Apprends-moi les trois premières choses, une à la fois. Attends que je dise suivant.\"", "\"Joue-moi une chanson.\""], answer: 2, why: "Dire ce que vous savez et demander de petites étapes qui attendent « suivant » garde l'apprentissage à votre rythme." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Vous faire interroger pour mieux retenir",
          minutes: 4,
          goal: "Demander à un assistant IA de vous interroger sur ce que vous venez d'apprendre.",
          text: [
            "On retient mieux quand on essaie de se rappeler une chose que quand on la relit simplement. Un petit quiz est l'un des meilleurs moyens de faire tenir ce qu'on vient d'apprendre.",
            "Après une leçon, demandez : « Pose-moi trois questions faciles sur ce que tu viens de m'apprendre. Une à la fois, et dis-moi si j'ai juste. » Répondez avec vos propres mots. Si vous vous trompez, demandez-lui d'expliquer à nouveau d'une autre façon.",
            "Refaites le même quiz le lendemain. Un peu d'entraînement réparti sur plusieurs jours marche mieux que beaucoup d'un seul coup."
          ],
          steps: ["Terminez une courte leçon.", "Demandez trois questions faciles, une à la fois.", "Répondez avec vos propres mots.", "Demandez une nouvelle explication pour ce que vous avez raté.", "Refaites le quiz demain."],
          words: [["Se rappeler", "faire revenir une chose à l'esprit, de mémoire."]],
          slides: [
            { title: "Les quiz aident à retenir", bullets: ["Se rappeler vaut mieux que relire", "Court et souvent, c'est le mieux"] },
            { title: "Demandez un quiz", bullets: ["« Pose-moi trois questions faciles. »", "« Une à la fois ; dis-moi si j'ai juste. »"] },
            { title: "Une erreur ?", bullets: ["Demandez une autre explication", "Réessayez demain"] }
          ],
          tryIt: "Demandez à l'assistant de vous poser trois questions sur ce qu'il vous a appris dans la leçon 1. Répondez-y une à une.",
          youCanNow: "utiliser l'IA pour vous interroger et retenir davantage ce que vous apprenez.",
          quickCheck: [
            { objective: "O2", q: "Pourquoi un petit quiz vous aide-t-il à apprendre ?", options: ["Essayer de se rappeler quelque chose aide à le retenir", "Il rend la leçon plus longue", "Il vous donne une note pour vos dossiers", "Il remplace l'exercice"], answer: 0, why: "On retient mieux quand on essaie de se rappeler quelque chose, pas seulement quand on le relit." },
            { objective: "O2", q: "Vous avez raté une question du quiz sur les chants d'oiseaux. Que faites-vous ?", options: ["Arrêter d'apprendre ce sujet", "La passer et continuer", "Vous fâcher contre l'assistant", "Lui demander de réexpliquer cette partie d'une autre façon"], answer: 3, why: "Demandez une nouvelle explication de ce que vous avez raté, puis réessayez." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Faire un plan d'apprentissage simple",
          minutes: 5,
          goal: "Demander à un assistant IA un plan d'apprentissage court et réaliste.",
          text: [
            "Un plan transforme « un jour » en « aujourd'hui ». Demandez à l'assistant un plan de deux semaines avec de courtes séances adaptées à votre énergie et à votre emploi du temps.",
            "Par exemple : « Fais-moi un plan de deux semaines pour apprendre les bases de l'aquarelle. Je peux pratiquer 20 minutes par jour, cinq jours par semaine. J'ai une petite boîte de peinture et du papier. Un seul petit objectif par jour. »",
            "Relisez le plan et changez ce qui ne vous convient pas. Demandez-lui des journées plus faciles ou plus courtes, ou d'ajouter des jours de repos. Puis notez le plan dans votre calendrier ou sur une feuille près de votre fauteuil."
          ],
          steps: ["Dites ce que vous voulez apprendre et pendant combien de temps.", "Dites combien de minutes et de jours vous pouvez pratiquer.", "Dites le matériel que vous avez déjà.", "Demandez un petit objectif par jour.", "Ajustez le plan, puis notez-le."],
          words: [["Plan d'apprentissage", "une liste de ce qu'il faut pratiquer chaque jour pour atteindre un objectif."]],
          slides: [
            { title: "D'« un jour » à « aujourd'hui »", bullets: ["Un plan court et réaliste", "Un petit objectif chaque jour"] },
            { title: "Dites à l'assistant", bullets: ["Quoi et pendant combien de temps", "Les minutes et les jours dont vous disposez", "Le matériel que vous avez déjà"] },
            { title: "Adaptez-le à vous", bullets: ["Demandez des journées plus faciles ou plus courtes", "Ajoutez des jours de repos", "Notez-le dans votre calendrier"] }
          ],
          tryIt: "Demandez à un assistant un plan d'apprentissage de deux semaines pour votre sujet, avec un petit objectif par jour et le temps dont vous disposez. Faites un changement pour qu'il vous convienne mieux, puis notez les trois premiers jours.",
          youCanNow: "faire avec l'IA un plan d'apprentissage réaliste adapté à votre temps et à votre énergie.",
          quickCheck: [
            { objective: "O3", q: "Que doit avoir un bon plan d'apprentissage chaque jour ?", options: ["Plusieurs heures d'exercice", "Un petit objectif adapté à votre temps", "Un examen", "Un nouveau loisir"], answer: 1, why: "Un petit objectif par jour transforme « un jour » en « aujourd'hui »." },
            { objective: "O3", q: "Le plan donné par l'IA vous semble trop fatigant. Que faites-vous ?", options: ["Abandonner le loisir", "Le suivre quand même", "Lui demander de raccourcir les journées ou d'ajouter des jours de repos", "Commencer un nouveau loisir"], answer: 2, why: "Vous pouvez demander à l'assistant de changer le plan pour qu'il convienne à votre énergie." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : L'IA, votre professeur patient",
        questions: [
          { objective: "O1", q: "Pourquoi demander à l'assistant d'attendre que vous disiez « suivant » ?", options: ["Pour qu'il arrête de fonctionner", "Pour qu'il aille plus vite", "Pour que chaque étape reste petite et que vous puissiez réfléchir", "C'est obligatoire pour se connecter"], answer: 2, why: "De petites étapes à votre rythme sont plus faciles à apprendre." },
          { objective: "O1", q: "Que faut-il dire à l'assistant quand vous voulez apprendre quelque chose ?", options: ["Ce que vous voulez apprendre, ce que vous savez et comment vous aimez apprendre", "Votre numéro de compte", "Un seul mot", "Votre mot de passe"], answer: 0, why: "Ces détails l'aident à enseigner au bon niveau." },
          { objective: "O2", q: "Qu'est-ce qui vous aide à retenir davantage ?", options: ["Relire dix fois la même page", "Tout apprendre en une journée", "Ne jamais pratiquer", "Répondre à un petit quiz"], answer: 3, why: "Se rappeler les réponses fait tenir ce qu'on apprend." },
          { objective: "O2", q: "Vous vous êtes trompé à une question du quiz. Quelle est une bonne suite ?", options: ["Abandonner le loisir", "Lui demander d'expliquer à nouveau d'une autre façon", "Supprimer l'application", "Laisser tomber le sujet pour toujours"], answer: 1, why: "Une nouvelle explication fait souvent comprendre." },
          { objective: "O3", q: "Un bon plan d'apprentissage a :", options: ["Dix heures de travail par jour", "Un petit objectif par jour adapté à votre temps", "Aucun jour", "Seulement de grands objectifs"], answer: 1, why: "De petits objectifs réalistes vous aident à continuer." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Profiter de vos loisirs avec l'IA",
      lessons: [
        {
          objectives: ["O4"],
          title: "Trouver de bonnes vidéos explicatives",
          minutes: 5,
          goal: "Chercher une vidéo explicative utile et juger si elle est bonne.",
          text: [
            "Certaines choses s'apprennent mieux en regardant : un point de tricot, la taille des rosiers, un accord de guitare. YouTube propose des vidéos explicatives gratuites sur presque tous les loisirs.",
            "Demandez d'abord à un assistant IA de bons mots à chercher : « Que dois-je chercher sur YouTube pour apprendre un point de tricot pour débutant ? » Puis ouvrez YouTube, touchez la zone de recherche (la loupe) et tapez ces mots. Cherchez des vidéos faites pour les débutants, avec des titres clairs et des commentaires utiles.",
            "Vous pouvez mettre sur pause, revenir en arrière et revoir autant de fois que vous voulez. Méfiez-vous des publicités et des liens dans la description des vidéos qui vous demandent d'acheter ou de vous inscrire ; vous n'en avez pas besoin pour apprendre."
          ],
          steps: ["Demandez à l'IA de bons mots à chercher.", "Ouvrez YouTube et touchez la loupe.", "Tapez les mots et cherchez des vidéos pour débutants.", "Mettez sur pause et revoyez autant que nécessaire.", "Ignorez les publicités et les liens qui demandent d'acheter ou de s'inscrire."],
          words: [["YouTube", "un site et une application gratuits avec des vidéos sur presque tous les sujets."], ["Zone de recherche", "là où l'on tape des mots pour trouver quelque chose ; souvent montrée par une loupe."]],
          slides: [
            { title: "Apprendre en regardant", bullets: ["Tricot, jardinage, musique et plus encore", "Gratuit sur YouTube"] },
            { title: "Trouver une bonne vidéo", bullets: ["Demandez à l'IA des mots à chercher", "Touchez la loupe et tapez", "Choisissez des vidéos pour débutants"] },
            { title: "Regardez à votre façon", bullets: ["Pause et revisionnage", "Ignorez les publicités et les liens « achetez maintenant »"] }
          ],
          tryIt: "Demandez à un assistant IA quoi chercher sur YouTube pour le premier jour de votre plan. Cherchez-le, regardez une vidéo pour débutants et mettez-la sur pause au moins une fois pour essayer une étape.",
          youCanNow: "trouver une vidéo utile pour débutants et apprendre avec elle à votre rythme.",
          quickCheck: [
            { objective: "O4", q: "À quoi sert la loupe sur YouTube ?", options: ["À agrandir la vidéo", "À ouvrir la zone de recherche", "À monter le son", "À acheter la vidéo"], answer: 1, why: "La loupe est le bouton de recherche où vous tapez vos mots." },
            { objective: "O4", q: "Une vidéo de tricot affiche un lien pour « acheter le cours complet ». Que faites-vous ?", options: ["Le passer ; vous n'en avez pas besoin pour apprendre", "L'acheter tout de suite", "Entrer votre numéro de carte pour en voir plus", "Arrêter de regarder des vidéos"], answer: 0, why: "Les publicités et les liens qui vous demandent d'acheter ou de vous inscrire ne sont pas nécessaires pour apprendre." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Utiliser l'IA pour un projet de loisir",
          minutes: 5,
          goal: "Utiliser un assistant IA pour planifier un vrai projet de loisir du début à la fin.",
          text: [
            "L'IA peut vous aider à planifier un projet : un petit potager, un album pour l'anniversaire d'un petit-enfant, un livre de recettes de famille ou un nichoir à oiseaux.",
            "Décrivez le projet et demandez une liste de matériel et les étapes : « Aide-moi à faire un petit album de la première année de ma petite-fille. Donne la liste du matériel et les étapes. Reste simple. » Pour un jardin, ajoutez votre région et la saison : « J'habite dans l'Ohio et j'ai un patio ensoleillé. Quels sont trois légumes faciles à cultiver en pot ce printemps ? »",
            "Pour tout ce qui touche à la sécurité, comme les outils, les produits chimiques ou les plantes qui peuvent être dangereuses pour les animaux, vérifiez l'étiquette ou une source de confiance comme votre jardinerie ou votre bibliothèque."
          ],
          steps: ["Décrivez le projet et pour qui il est.", "Ajoutez votre région, la saison ou l'espace si cela compte.", "Demandez une liste de matériel et des étapes simples.", "Vérifiez les questions de sécurité sur une étiquette ou une source de confiance."],
          words: [["Liste de matériel", "les choses à rassembler avant de commencer un projet."]],
          slides: [
            { title: "Planifiez un vrai projet", bullets: ["Potager, album, livre de recettes, nichoir"] },
            { title: "Demandez", bullets: ["Une liste de matériel", "Des étapes simples", "Des idées adaptées à votre région et à la saison"] },
            { title: "Restez en sécurité", bullets: ["Lisez les étiquettes des outils et des produits", "Demandez à une jardinerie ou à la bibliothèque"] }
          ],
          tryIt: "Choisissez un petit projet lié à votre sujet. Demandez à un assistant une liste de matériel et des étapes simples, et entourez le matériel que vous avez déjà.",
          youCanNow: "planifier un projet de loisir avec l'IA, du matériel jusqu'aux étapes.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qu'une liste de matériel ?", options: ["Une liste des magasins près de chez vous", "Un ticket de caisse", "Une liste d'amis qui peuvent aider", "Les choses dont vous avez besoin avant de commencer un projet"], answer: 3, why: "Une liste de matériel montre ce dont vous avez besoin avant de commencer." },
            { objective: "O5", q: "L'IA vous propose une plante pour votre terrasse, et vous avez un chat. Que faites-vous ?", options: ["L'acheter tout de suite", "Demander à l'IA si elle est sûre", "Vérifier auprès de votre jardinerie ou sur l'étiquette de la plante si elle est sans danger pour les animaux", "Ignorer la question"], answer: 2, why: "Les informations de sécurité, comme les plantes qui peuvent nuire aux animaux, se vérifient sur une étiquette ou auprès d'une source de confiance." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Explorer l'histoire et les récits de famille",
          minutes: 5,
          goal: "Utiliser l'IA pour vous aider à écrire un récit familial à partager.",
          text: [
            "Beaucoup de personnes âgées aiment explorer l'histoire de leur famille et transmettre des récits aux petits-enfants. L'IA peut vous aider à transformer des souvenirs en une courte histoire que d'autres auront plaisir à lire.",
            "Racontez-lui un souvenir avec vos propres mots : « Mon père tenait une boulangerie à Chicago dans les années 1950. Je l'aidais le samedi. Aide-moi à en faire une histoire d'une page pour mes petits-enfants, avec ma voix. » Puis faites des changements pour qu'elle vous ressemble.",
            "L'IA ne connaît pas la vraie histoire de votre famille ; ne lui demandez donc pas de compléter des faits sur vos ancêtres, elle pourrait les inventer. Pour les archives, des sites comme FamilySearch (gratuit) ou le service de généalogie de votre bibliothèque sont de meilleurs endroits. Ne mettez pas dans l'IA les détails privés des proches vivants."
          ],
          steps: ["Racontez un souvenir à l'IA avec vos propres mots.", "Demandez une histoire d'une page, avec votre voix.", "Changez ce qui ne vous ressemble pas.", "Cherchez les archives sur des sites fiables, pas dans l'IA.", "Partagez l'histoire avec la famille."],
          words: [["Généalogie", "l'étude de l'histoire d'une famille et de ses ancêtres."], ["Ancêtre", "un membre de la famille d'il y a longtemps, comme un arrière-grand-parent."]],
          slides: [
            { title: "Des souvenirs aux récits", bullets: ["Racontez le souvenir à l'IA avec vos mots", "Demandez une courte histoire avec votre voix"] },
            { title: "Les faits viennent des archives", bullets: ["L'IA peut inventer des faits familiaux", "Essayez FamilySearch ou votre bibliothèque"] },
            { title: "Partagez-le", bullets: ["Gardez hors de l'IA les détails privés des proches vivants", "Lisez-le à voix haute à vos petits-enfants"] }
          ],
          tryIt: "Tâche finale : choisissez un loisir ou un sujet, demandez à un assistant IA un plan de deux semaines, faites-vous enseigner la première leçon pas à pas, laissez-le vous poser trois questions et notez une chose que vous pratiquerez demain.",
          youCanNow: "utiliser l'IA pour apprendre, planifier des projets de loisir et garder des récits de famille.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce que la généalogie ?", options: ["L'étude de l'histoire de la famille", "Une sorte de jardin", "Un style de peinture", "Une application vidéo"], answer: 0, why: "La généalogie est l'étude de l'histoire de la famille." },
            { objective: "O6", q: "Vous voulez savoir où est née votre arrière-grand-mère. Où cherchez-vous ?", options: ["Demander à l'IA de compléter", "Deviner et l'écrire dans l'histoire", "Publier en ligne les informations de vos proches", "FamilySearch ou le service d'aide à la généalogie de votre bibliothèque"], answer: 3, why: "L'IA peut inventer des faits sur la famille ; les vrais registres se trouvent sur des sites de confiance ou à la bibliothèque." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Profiter de vos loisirs avec l'IA",
        questions: [
          { objective: "O4", q: "Comment l'IA peut-elle vous aider à trouver une bonne vidéo explicative ?", options: ["Elle supprime les publicités", "Elle filme la vidéo", "Elle la paie", "Elle propose de bons mots à chercher"], answer: 3, why: "De bons mots de recherche mènent à de meilleures vidéos." },
          { objective: "O4", q: "Un lien dans la description dit « Achetez le cours complet maintenant ». En avez-vous besoin pour apprendre ?", options: ["Non, vous pouvez l'ignorer", "Oui, toujours", "Oui, c'est obligatoire", "Seulement le week-end"], answer: 0, why: "Les vidéos gratuites enseignent beaucoup ; vous n'avez pas besoin d'acheter." },
          { objective: "O5", q: "Pour un plan de potager, que faut-il dire à l'IA ?", options: ["Votre mot de passe", "Votre numéro de compte", "Votre région, la saison et l'espace", "Rien"], answer: 2, why: "La région, la saison et l'espace changent ce qui pousse bien." },
          { objective: "O5", q: "L'IA propose un produit à pulvériser au jardin. Comment vérifier qu'il est sans danger ?", options: ["Faire confiance à l'IA", "Demander à un inconnu", "En mettre plus", "Lire l'étiquette ou demander à une jardinerie"], answer: 3, why: "Les informations de sécurité doivent venir des étiquettes ou de sources fiables." },
          { objective: "O6", q: "Pourquoi ne pas demander à l'IA des faits sur vos arrière-grands-parents ?", options: ["Cela coûte de l'argent", "C'est trop lent", "Elle pourrait les inventer", "Elle ne parle que français"], answer: 2, why: "L'IA ne connaît pas l'histoire de votre famille ; les archives, si." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour apprendre et pour les loisirs",
    questions: [
      { objective: "O1", q: "Un assistant IA peut jouer le rôle :", options: ["De votre médecin", "D'un professeur patient", "De votre banque", "D'un pharmacien"], answer: 1, why: "Il explique les choses aussi souvent que nécessaire." },
      { objective: "O1", q: "Quelle demande vous enseignera le mieux ?", options: ["« Je suis débutant. Apprends-moi trois choses sur les oiseaux du jardin, une à la fois. »", "« oiseaux »", "« enseigne »", "« tout »"], answer: 0, why: "Elle donne le sujet, votre niveau et le rythme." },
      { objective: "O1", q: "Dire « attends que je dise suivant » aide en :", options: ["Gardant chaque étape petite", "Montant le son", "Éteignant l'appareil", "Payant moins"], answer: 0, why: "De petites étapes vous laissent réfléchir avant de continuer." },
      { objective: "O1", q: "Un professeur particulier, c'est :", options: ["Un type de téléphone", "Un enseignant qui aide une personne à son rythme", "La fin d'une adresse web", "Une vidéo"], answer: 1, why: "Il enseigne à une personne à la fois." },
      { objective: "O2", q: "Qu'est-ce qui aide à retenir ce qu'on apprend ?", options: ["Tout apprendre en une nuit", "Ne jamais réviser", "Se faire interroger", "Sauter l'entraînement"], answer: 2, why: "Se rappeler les réponses renforce la mémoire." },
      { objective: "O2", q: "Comment l'IA doit-elle vous interroger ?", options: ["Sans dire si c'est juste", "Cinquante questions d'un coup", "Seulement des questions difficiles", "Une question à la fois en disant si vous avez juste"], answer: 3, why: "Une à la fois avec une réponse, c'est le plus facile." },
      { objective: "O2", q: "L'entraînement marche le mieux quand il est :", options: ["Une fois par an", "D'un seul coup", "Court et réparti sur plusieurs jours", "Seulement quand on est fatigué"], answer: 2, why: "L'entraînement réparti aide la mémoire." },
      { objective: "O3", q: "Un bon plan d'apprentissage contient :", options: ["Un petit objectif chaque jour", "Aucun objectif", "Des heures d'entraînement par jour", "Seulement un examen final"], answer: 0, why: "De petits objectifs quotidiens sont réalistes." },
      { objective: "O3", q: "Si le plan semble trop difficile, vous pouvez :", options: ["Supprimer le plan", "Abandonner", "Tout faire quand même", "Demander à l'IA des journées plus faciles ou des jours de repos"], answer: 3, why: "Le plan doit vous convenir." },
      { objective: "O3", q: "Que dire à l'IA quand vous demandez un plan ?", options: ["Votre mot de passe", "Les minutes et les jours où vous pouvez pratiquer", "Votre numéro de compte", "Votre numéro Medicare"], answer: 1, why: "Le temps disponible façonne le plan." },
      { objective: "O4", q: "La loupe sur YouTube, c'est :", options: ["Le volume", "Le bouton de recherche", "Le bouton marche/arrêt", "L'appareil photo"], answer: 1, why: "Elle ouvre la zone de recherche." },
      { objective: "O4", q: "En regardant une vidéo explicative, vous pouvez :", options: ["Ne pas revenir en arrière", "La regarder une seule fois", "Ne pas l'arrêter", "La mettre sur pause et la revoir autant que vous voulez"], answer: 3, why: "La pause vous permet d'essayer chaque étape." },
      { objective: "O4", q: "Les publicités qui demandent de s'inscrire ou d'acheter sont :", options: ["Inutiles pour apprendre", "Obligatoires", "Envoyées par le gouvernement", "Une partie de la leçon"], answer: 0, why: "Vous pouvez apprendre sans elles." },
      { objective: "O5", q: "Pour un projet de loisir, l'IA peut vous donner :", options: ["Le solde de votre compte", "Le matériel lui-même", "Une liste de matériel et des étapes simples", "Un certificat médical"], answer: 2, why: "Elle peut planifier ; c'est vous qui rassemblez et faites." },
      { objective: "O5", q: "Une liste de matériel, c'est :", options: ["Un numéro de téléphone", "Un ticket de caisse", "Un mot de passe", "Les choses nécessaires avant de commencer"], answer: 3, why: "Elle liste ce qu'il faut rassembler." },
      { objective: "O5", q: "Les informations de sécurité sur les outils ou les produits chimiques se vérifient :", options: ["Jamais", "Seulement avec l'IA", "Sur l'étiquette ou auprès d'une source fiable", "Avec un inconnu"], answer: 2, why: "Les étiquettes et les spécialistes sont fiables." },
      { objective: "O6", q: "La généalogie, c'est :", options: ["Une plante de jardin", "L'étude de l'histoire familiale", "Une application de téléphone", "Un type de peinture"], answer: 1, why: "La généalogie retrace les ancêtres." },
      { objective: "O6", q: "L'IA peut vous aider pour un récit familial en :", options: ["Transformant votre souvenir en une courte histoire avec votre voix", "Connaissant les dates de naissance de vos ancêtres", "Trouvant l'adresse de vos proches", "Signant des documents"], answer: 0, why: "Elle met en forme vos mots ; c'est vous qui apportez le souvenir." },
      { objective: "O6", q: "Où chercher de vraies archives familiales ?", options: ["Sur FamilySearch ou au service de généalogie de votre bibliothèque", "Seulement dans l'IA", "Dans une publicité", "Dans des rumeurs sur les réseaux sociaux"], answer: 0, why: "Les archives viennent de sources d'archives fiables." },
      { objective: "O6", q: "Que faut-il garder hors de l'IA quand vous écrivez des récits de famille ?", options: ["Votre couleur préférée", "Les détails privés des proches vivants", "Le nom d'un animal", "La saison"], answer: 1, why: "Les détails privés des proches vivants méritent d'être protégés." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      4,
      7,
      10,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est à « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Plan de deux semaines",
        objective: "O3",
        notYet: "Pas de plan, ou un plan qui ne convient pas à votre temps ou à votre matériel.",
        meets: "Un plan de deux semaines avec de courtes séances chaque jour et un petit objectif par jour.",
        exceeds: "Vous avez ajusté le plan pour ajouter des jours de repos ou des jours plus faciles, et vous l'avez écrit."
      },
      {
        name: "Première leçon pas à pas",
        objective: "O1",
        notYet: "Vous avez tout demandé d'un coup.",
        meets: "Vous avez demandé à l'assistant d'enseigner la première leçon pas à pas, à votre rythme.",
        exceeds: "Vous avez dit ce que vous savez déjà pour que les étapes commencent au bon niveau."
      },
      {
        name: "Quiz fait",
        objective: "O2",
        notYet: "Vous avez sauté le quiz.",
        meets: "Vous avez répondu à trois questions du quiz, une à la fois, avec vos propres mots.",
        exceeds: "Vous avez demandé une nouvelle explication de ce qui était raté et vous avez réessayé."
      },
      {
        name: "Prochain exercice",
        objective: "O3",
        notYet: "Rien d'écrit pour demain.",
        meets: "Vous avez écrit une chose à exercer demain.",
        exceeds: "Vous avez choisi une heure pour le faire et vous l'avez mise dans votre calendrier."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui pratiquent encore leur loisir au suivi à 30 jours",
      "Apprenants qui partagent un projet ou une histoire de famille avec leurs proches ou un groupe",
      "Apprenants qui commencent un autre cours Seniors et technologie dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone, une tablette ou un ordinateur avec Internet",
      "Un assistant IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini) et YouTube",
      "Du papier et un stylo, ou un calendrier, pour le plan d'apprentissage",
      "Environ 60 minutes au total, en courtes séances tranquilles : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Demandez à chaque apprenant de choisir un loisir qui lui tient à cœur avant la première séance ; cela garde la motivation.",
      "Montrez YouTube sur un grand écran et signalez les publicités et les liens d'inscription avant que les apprenants cherchent seuls.",
      "Rappelez aux apprenants de vérifier les informations de sécurité sur les outils, les produits chimiques et les plantes, sur les étiquettes ou auprès d'une jardinerie.",
      "Pour les histoires de famille, rappelez aux apprenants que l'IA peut inventer des faits sur la famille et qu'il faut garder privées les informations des proches vivants.",
      "Notez la tâche finale avec la grille d'évaluation, et faites un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
