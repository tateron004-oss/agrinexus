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
  chapters: [
    {
      name: "Chapitre 1 : L'IA, votre professeur patient",
      lessons: [
        {
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
          youCanNow: "demander à un assistant IA de vous enseigner un sujet par petites étapes, à votre rythme."
        },
        {
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
          youCanNow: "utiliser l'IA pour vous interroger et retenir davantage ce que vous apprenez."
        },
        {
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
          youCanNow: "faire avec l'IA un plan d'apprentissage réaliste adapté à votre temps et à votre énergie."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : L'IA, votre professeur patient",
        questions: [
          { q: "Pourquoi demander à l'assistant d'attendre que vous disiez « suivant » ?", options: ["Pour qu'il arrête de fonctionner", "Pour qu'il aille plus vite", "Pour que chaque étape reste petite et que vous puissiez réfléchir", "C'est obligatoire pour se connecter"], answer: 2, why: "De petites étapes à votre rythme sont plus faciles à apprendre." },
          { q: "Que faut-il dire à l'assistant quand vous voulez apprendre quelque chose ?", options: ["Ce que vous voulez apprendre, ce que vous savez et comment vous aimez apprendre", "Votre numéro de compte", "Un seul mot", "Votre mot de passe"], answer: 0, why: "Ces détails l'aident à enseigner au bon niveau." },
          { q: "Qu'est-ce qui vous aide à retenir davantage ?", options: ["Relire dix fois la même page", "Tout apprendre en une journée", "Ne jamais pratiquer", "Répondre à un petit quiz"], answer: 3, why: "Se rappeler les réponses fait tenir ce qu'on apprend." },
          { q: "Vous vous êtes trompé à une question du quiz. Quelle est une bonne suite ?", options: ["Abandonner le loisir", "Lui demander d'expliquer à nouveau d'une autre façon", "Supprimer l'application", "Laisser tomber le sujet pour toujours"], answer: 1, why: "Une nouvelle explication fait souvent comprendre." },
          { q: "Un bon plan d'apprentissage a :", options: ["Dix heures de travail par jour", "Un petit objectif par jour adapté à votre temps", "Aucun jour", "Seulement de grands objectifs"], answer: 1, why: "De petits objectifs réalistes vous aident à continuer." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Profiter de vos loisirs avec l'IA",
      lessons: [
        {
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
          youCanNow: "trouver une vidéo utile pour débutants et apprendre avec elle à votre rythme."
        },
        {
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
          youCanNow: "planifier un projet de loisir avec l'IA, du matériel jusqu'aux étapes."
        },
        {
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
          youCanNow: "utiliser l'IA pour apprendre, planifier des projets de loisir et garder des récits de famille."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Profiter de vos loisirs avec l'IA",
        questions: [
          { q: "Comment l'IA peut-elle vous aider à trouver une bonne vidéo explicative ?", options: ["Elle supprime les publicités", "Elle filme la vidéo", "Elle la paie", "Elle propose de bons mots à chercher"], answer: 3, why: "De bons mots de recherche mènent à de meilleures vidéos." },
          { q: "Un lien dans la description dit « Achetez le cours complet maintenant ». En avez-vous besoin pour apprendre ?", options: ["Non, vous pouvez l'ignorer", "Oui, toujours", "Oui, c'est obligatoire", "Seulement le week-end"], answer: 0, why: "Les vidéos gratuites enseignent beaucoup ; vous n'avez pas besoin d'acheter." },
          { q: "Pour un plan de potager, que faut-il dire à l'IA ?", options: ["Votre mot de passe", "Votre numéro de compte", "Votre région, la saison et l'espace", "Rien"], answer: 2, why: "La région, la saison et l'espace changent ce qui pousse bien." },
          { q: "L'IA propose un produit à pulvériser au jardin. Comment vérifier qu'il est sans danger ?", options: ["Faire confiance à l'IA", "Demander à un inconnu", "En mettre plus", "Lire l'étiquette ou demander à une jardinerie"], answer: 3, why: "Les informations de sécurité doivent venir des étiquettes ou de sources fiables." },
          { q: "Pourquoi ne pas demander à l'IA des faits sur vos arrière-grands-parents ?", options: ["Cela coûte de l'argent", "C'est trop lent", "Elle pourrait les inventer", "Elle ne parle que français"], answer: 2, why: "L'IA ne connaît pas l'histoire de votre famille ; les archives, si." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final : L'IA pour apprendre et pour les loisirs",
    questions: [
      { q: "Un assistant IA peut jouer le rôle :", options: ["De votre médecin", "D'un professeur patient", "De votre banque", "D'un pharmacien"], answer: 1, why: "Il explique les choses aussi souvent que nécessaire." },
      { q: "Quelle demande vous enseignera le mieux ?", options: ["« Je suis débutant. Apprends-moi trois choses sur les oiseaux du jardin, une à la fois. »", "« oiseaux »", "« enseigne »", "« tout »"], answer: 0, why: "Elle donne le sujet, votre niveau et le rythme." },
      { q: "Dire « attends que je dise suivant » aide en :", options: ["Gardant chaque étape petite", "Montant le son", "Éteignant l'appareil", "Payant moins"], answer: 0, why: "De petites étapes vous laissent réfléchir avant de continuer." },
      { q: "Un professeur particulier, c'est :", options: ["Un type de téléphone", "Un enseignant qui aide une personne à son rythme", "La fin d'une adresse web", "Une vidéo"], answer: 1, why: "Il enseigne à une personne à la fois." },
      { q: "Qu'est-ce qui aide à retenir ce qu'on apprend ?", options: ["Tout apprendre en une nuit", "Ne jamais réviser", "Se faire interroger", "Sauter l'entraînement"], answer: 2, why: "Se rappeler les réponses renforce la mémoire." },
      { q: "Comment l'IA doit-elle vous interroger ?", options: ["Sans dire si c'est juste", "Cinquante questions d'un coup", "Seulement des questions difficiles", "Une question à la fois en disant si vous avez juste"], answer: 3, why: "Une à la fois avec une réponse, c'est le plus facile." },
      { q: "L'entraînement marche le mieux quand il est :", options: ["Une fois par an", "D'un seul coup", "Court et réparti sur plusieurs jours", "Seulement quand on est fatigué"], answer: 2, why: "L'entraînement réparti aide la mémoire." },
      { q: "Un bon plan d'apprentissage contient :", options: ["Un petit objectif chaque jour", "Aucun objectif", "Des heures d'entraînement par jour", "Seulement un examen final"], answer: 0, why: "De petits objectifs quotidiens sont réalistes." },
      { q: "Si le plan semble trop difficile, vous pouvez :", options: ["Supprimer le plan", "Abandonner", "Tout faire quand même", "Demander à l'IA des journées plus faciles ou des jours de repos"], answer: 3, why: "Le plan doit vous convenir." },
      { q: "Que dire à l'IA quand vous demandez un plan ?", options: ["Votre mot de passe", "Les minutes et les jours où vous pouvez pratiquer", "Votre numéro de compte", "Votre numéro Medicare"], answer: 1, why: "Le temps disponible façonne le plan." },
      { q: "La loupe sur YouTube, c'est :", options: ["Le volume", "Le bouton de recherche", "Le bouton marche/arrêt", "L'appareil photo"], answer: 1, why: "Elle ouvre la zone de recherche." },
      { q: "En regardant une vidéo explicative, vous pouvez :", options: ["Ne pas revenir en arrière", "La regarder une seule fois", "Ne pas l'arrêter", "La mettre sur pause et la revoir autant que vous voulez"], answer: 3, why: "La pause vous permet d'essayer chaque étape." },
      { q: "Les publicités qui demandent de s'inscrire ou d'acheter sont :", options: ["Inutiles pour apprendre", "Obligatoires", "Envoyées par le gouvernement", "Une partie de la leçon"], answer: 0, why: "Vous pouvez apprendre sans elles." },
      { q: "Pour un projet de loisir, l'IA peut vous donner :", options: ["Le solde de votre compte", "Le matériel lui-même", "Une liste de matériel et des étapes simples", "Un certificat médical"], answer: 2, why: "Elle peut planifier ; c'est vous qui rassemblez et faites." },
      { q: "Une liste de matériel, c'est :", options: ["Un numéro de téléphone", "Un ticket de caisse", "Un mot de passe", "Les choses nécessaires avant de commencer"], answer: 3, why: "Elle liste ce qu'il faut rassembler." },
      { q: "Les informations de sécurité sur les outils ou les produits chimiques se vérifient :", options: ["Jamais", "Seulement avec l'IA", "Sur l'étiquette ou auprès d'une source fiable", "Avec un inconnu"], answer: 2, why: "Les étiquettes et les spécialistes sont fiables." },
      { q: "La généalogie, c'est :", options: ["Une plante de jardin", "L'étude de l'histoire familiale", "Une application de téléphone", "Un type de peinture"], answer: 1, why: "La généalogie retrace les ancêtres." },
      { q: "L'IA peut vous aider pour un récit familial en :", options: ["Transformant votre souvenir en une courte histoire avec votre voix", "Connaissant les dates de naissance de vos ancêtres", "Trouvant l'adresse de vos proches", "Signant des documents"], answer: 0, why: "Elle met en forme vos mots ; c'est vous qui apportez le souvenir." },
      { q: "Où chercher de vraies archives familiales ?", options: ["Sur FamilySearch ou au service de généalogie de votre bibliothèque", "Seulement dans l'IA", "Dans une publicité", "Dans des rumeurs sur les réseaux sociaux"], answer: 0, why: "Les archives viennent de sources d'archives fiables." },
      { q: "Que faut-il garder hors de l'IA quand vous écrivez des récits de famille ?", options: ["Votre couleur préférée", "Les détails privés des proches vivants", "Le nom d'un animal", "La saison"], answer: 1, why: "Les détails privés des proches vivants méritent d'être protégés." }
    ]
  }
};
