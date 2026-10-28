"use strict";

// Koach Learn course (French translation of seniors/seniors-ai-daily-life.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "seniors-ai-daily-life-fr",
  lang: "fr",
  translationOf: "seniors-ai-daily-life",
  category: "Seniors and Technology",
  name: "L'IA au quotidien",
  skills: "Faire une liste de courses avec l'IA, Prévoir des repas simples, Créer des rappels à la voix, Ajouter des rendez-vous au calendrier, Comprendre une lettre compliquée",
  outcome: "utiliser un assistant IA et l'assistant vocal de votre téléphone pour prévoir une semaine de repas simples, en faire une liste de courses, créer un rappel et vous faire expliquer une lettre compliquée avec des mots simples.",
  about: [
    "Ce cours s'adresse aux personnes âgées qui veulent que la technologie leur facilite un peu les tâches de tous les jours : les courses, la cuisine, les rendez-vous à ne pas oublier et le courrier à comprendre.",
    "Vous utiliserez un assistant IA gratuit comme ChatGPT, Microsoft Copilot ou Google Gemini, et l'assistant vocal déjà présent sur votre téléphone (Siri sur iPhone, ou Google Assistant ou Gemini sur Android), pour prévoir des repas, faire des listes, créer des rappels et comprendre des lettres.",
    "Chaque leçon dure environ cinq minutes. Allez doucement, répétez ce dont vous avez besoin et faites chaque fois l'exercice « Essayez maintenant ». Un court contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Prévoyez trois dîners simples pour la semaine à venir avec un assistant IA, demandez-lui une seule liste de courses pour les trois, créez un rappel sur votre téléphone pour aller faire les courses et ajoutez un vrai rendez-vous dans le calendrier de votre téléphone.",
  chapters: [
    {
      name: "Chapitre 1 : Listes, repas et courses",
      lessons: [
        {
          title: "Prévoir des repas simples avec l'IA",
          minutes: 5,
          goal: "Demander à un assistant IA quelques idées de repas faciles adaptées à vos besoins.",
          text: [
            "Décider quoi cuisiner chaque jour peut être fatigant, surtout quand on cuisine pour une ou deux personnes. Un assistant IA peut proposer des idées en quelques secondes.",
            "Dites-lui ce que vous aimez, pour combien de personnes vous cuisinez, combien de temps et d'effort vous voulez y mettre, et ce que vous devez éviter. Par exemple : « Je cuisine pour une personne. Propose trois dîners faciles, prêts en moins de 30 minutes, avec peu d'ingrédients et peu salés. »",
            "Si votre médecin vous a donné un régime particulier, suivez ses conseils. L'assistant peut donner des idées, mais il ne connaît pas votre santé."
          ],
          steps: ["Ouvrez votre assistant IA.", "Dites pour combien de personnes vous cuisinez.", "Dites combien de temps vous avez et ce que vous aimez.", "Dites ce qu'il faut éviter, comme trop de sel ou de sucre.", "Demandez trois idées."],
          words: [["Ingrédient", "un des aliments qui entrent dans une recette."]],
          slides: [
            { title: "Laissez l'IA proposer des repas", bullets: ["Des idées en quelques secondes", "Pratique quand on cuisine pour une ou deux personnes"] },
            { title: "Dites-lui", bullets: ["Combien de personnes", "Combien de temps", "Ce que vous aimez et ce qu'il faut éviter"] },
            { title: "Votre médecin d'abord", bullets: ["Suivez le régime donné par votre médecin", "L'IA ne connaît pas votre santé"] }
          ],
          tryIt: "Demandez à un assistant IA trois dîners faciles pour la semaine à venir, adaptés à votre façon de manger. Notez les trois que vous préférez.",
          youCanNow: "demander à un assistant IA des idées de repas adaptées à vos besoins."
        },
        {
          title: "Transformer les repas en liste de courses",
          minutes: 4,
          goal: "Obtenir une seule liste de courses bien rangée pour plusieurs repas.",
          text: [
            "Une fois que vous avez des idées de repas, demandez à l'assistant de faire une seule liste de courses pour tous. Cela vous évite de recopier chaque recette.",
            "Demandez-lui de ranger la liste par rayons du magasin, comme fruits et légumes, produits laitiers et conserves, pour ne traverser le magasin qu'une fois. Puis dites-lui ce que vous avez déjà à la maison pour qu'il le retire.",
            "Vous pouvez imprimer la liste, la copier dans l'application Notes de votre téléphone ou simplement l'écrire sur papier. Faites ce qui est le plus simple pour vous."
          ],
          steps: ["Demandez : « Fais une seule liste de courses pour ces trois dîners. »", "Demandez-lui de ranger la liste par rayon.", "Dites-lui ce que vous avez déjà.", "Copiez la liste dans Notes, imprimez-la ou écrivez-la."],
          words: [["Application Notes", "une application du téléphone pour écrire et garder de courtes notes et des listes."]],
          slides: [
            { title: "Une liste pour tous les repas", bullets: ["« Fais une seule liste de courses pour ces trois dîners. »"] },
            { title: "Des courses plus faciles", bullets: ["Rangez par rayon du magasin", "Retirez ce que vous avez déjà"] },
            { title: "Gardez votre liste", bullets: ["Copiez-la dans l'application Notes", "Imprimez-la", "Ou écrivez-la sur papier"] }
          ],
          tryIt: "Demandez à l'assistant une seule liste de courses pour vos trois dîners, rangée par rayon. Dites-lui deux choses que vous avez déjà, et gardez la liste finale.",
          youCanNow: "transformer des idées de repas en une seule liste de courses adaptée à votre cuisine."
        },
        {
          title: "Utiliser l'assistant vocal du téléphone pour les rappels",
          minutes: 6,
          goal: "Créer un rappel ou un minuteur en parlant à votre téléphone.",
          text: [
            "La plupart des téléphones ont un assistant vocal intégré : Siri sur iPhone, et Google Assistant ou Gemini sur beaucoup de téléphones Android. Vous parlez, et le téléphone fait une tâche simple, comme créer un rappel, un minuteur ou une alarme.",
            "Pour le lancer, vous pouvez en général dire « Dis Siri » ou « Ok Google », ou appuyer longuement sur le bouton latéral ou le bouton d'accueil. S'il n'est pas activé, demandez à un proche de vous aider à l'activer dans les Réglages.",
            "Puis parlez clairement : « Rappelle-moi d'aller faire les courses jeudi à 10 h. » « Mets un minuteur de 20 minutes. » « Rappelle-moi d'appeler Ruth demain à 17 h. » Le téléphone vous dira ou vous montrera que c'est fait."
          ],
          steps: ["Dites « Dis Siri » ou « Ok Google », ou appuyez longuement sur le bouton latéral ou d'accueil.", "Attendez le son ou la lumière à l'écran.", "Dites ce que vous voulez, avec le jour et l'heure.", "Regardez l'écran pour vérifier que c'est enregistré."],
          words: [["Assistant vocal", "une aide intégrée au téléphone qui fait des tâches simples quand vous lui parlez."], ["Rappel", "un message que le téléphone vous affiche à l'heure que vous choisissez."]],
          slides: [
            { title: "Votre téléphone peut écouter", bullets: ["Siri sur iPhone", "Google Assistant ou Gemini sur Android"] },
            { title: "Réveillez-le", bullets: ["Dites « Dis Siri » ou « Ok Google »", "Ou appuyez longuement sur le bouton latéral ou d'accueil"] },
            { title: "Dites ce qu'il vous faut", bullets: ["« Rappelle-moi les courses jeudi à 10 h. »", "« Mets un minuteur de 20 minutes. »", "Regardez l'écran pour vérifier"] }
          ],
          tryIt: "Utilisez l'assistant vocal de votre téléphone pour créer un rappel pour aller faire les courses, au jour et à l'heure qui vous conviennent. Vérifiez qu'il apparaît à l'écran.",
          youCanNow: "créer un rappel ou un minuteur en parlant à votre téléphone."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Listes, repas et courses",
        questions: [
          { q: "Que faut-il dire à un assistant IA quand vous demandez des idées de repas ?", options: ["Votre numéro de compte bancaire", "Seulement « nourriture »", "Le nombre de personnes, votre temps, ce que vous aimez et ce qu'il faut éviter", "Le mot de passe de votre médecin"], answer: 2, why: "Ces détails l'aident à proposer des repas qui vous conviennent." },
          { q: "Votre médecin vous a prescrit un régime peu salé, mais l'IA propose un plat salé. Que faites-vous ?", options: ["Je suis les conseils de mon médecin", "Je suis l'IA", "J'arrête de manger", "J'ignore les deux"], answer: 0, why: "Votre médecin connaît votre santé ; l'IA, non." },
          { q: "Pourquoi demander à l'assistant de ranger la liste par rayon ?", options: ["Cela rend la nourriture moins chère", "C'est obligatoire", "Pour qu'elle s'imprime en couleur", "Pour ne traverser le magasin qu'une fois"], answer: 3, why: "Ranger par rayon rend les courses plus rapides." },
          { q: "Lequel est un assistant vocal intégré à beaucoup de téléphones ?", options: ["La calculatrice", "Siri", "L'appareil photo", "La lampe torche"], answer: 1, why: "Siri sur iPhone et Google Assistant ou Gemini sur Android écoutent les demandes à voix haute." },
          { q: "Quelle demande à voix haute crée un rappel utile ?", options: ["« Courses. »", "« Rappelle-moi d'aller faire les courses jeudi à 10 h. »", "« Bonjour. »", "« Téléphone. »"], answer: 1, why: "Elle dit quoi retenir, le jour et l'heure." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Rendez-vous et papiers",
      lessons: [
        {
          title: "Ajouter des rendez-vous au calendrier du téléphone",
          minutes: 6,
          goal: "Ajouter un rendez-vous chez le médecin au calendrier de votre téléphone, avec une alerte.",
          text: [
            "Votre téléphone a une application Calendrier qui peut garder tous vos rendez-vous et vous prévenir avant chacun. C'est pratique pour les visites chez le médecin, le coiffeur et les anniversaires de la famille.",
            "Le plus simple est de demander à votre assistant vocal : « Ajoute un rendez-vous avec le docteur Lee le 12 mai à 14 h. » Vous pouvez aussi ouvrir l'application Calendrier, toucher le signe plus (+), taper le nom, choisir la date et l'heure, puis toucher Ajouter ou Enregistrer.",
            "Réglez une alerte pour que le téléphone vous prévienne à l'avance, par exemple un jour avant et une heure avant. Cherchez un choix appelé Alerte ou Notification quand vous ajoutez l'événement."
          ],
          steps: ["Ouvrez l'application Calendrier, ou demandez à votre assistant vocal.", "Touchez le signe plus (+) pour ajouter un événement.", "Tapez le nom, par exemple « Contrôle docteur Lee ».", "Choisissez la date et l'heure.", "Choisissez une alerte, par exemple 1 jour avant.", "Touchez Ajouter ou Enregistrer."],
          words: [["Application Calendrier", "l'application du téléphone qui garde vos rendez-vous par date."], ["Alerte", "un son ou un message que le téléphone vous donne avant un rendez-vous."]],
          slides: [
            { title: "Le calendrier de votre téléphone", bullets: ["Garde tous vos rendez-vous", "Vous prévient avant chacun"] },
            { title: "Deux façons d'ajouter", bullets: ["Demandez à votre assistant vocal", "Ou ouvrez Calendrier et touchez +"] },
            { title: "Remplissez", bullets: ["Nom, date et heure", "Choisissez une alerte, par exemple 1 jour avant", "Touchez Ajouter ou Enregistrer"] }
          ],
          tryIt: "Ajoutez un vrai rendez-vous ou un anniversaire de la famille au calendrier de votre téléphone, avec une alerte un jour avant. Vérifiez qu'il apparaît à la bonne date.",
          youCanNow: "ajouter un rendez-vous au calendrier de votre téléphone et recevoir un rappel avant."
        },
        {
          title: "Se faire expliquer une lettre compliquée",
          minutes: 5,
          goal: "Demander à un assistant IA d'expliquer une lettre compliquée avec des mots simples, sans partager de détails privés.",
          text: [
            "Les lettres des assurances, des fournisseurs d'eau ou d'électricité ou des administrations peuvent être pleines de mots difficiles. Un assistant IA peut les expliquer en langage simple.",
            "D'abord, cachez ou laissez de côté les détails privés : noms, numéros de compte, numéros Medicare ou de sécurité sociale, et votre adresse. Puis tapez la partie qui vous pose problème, ou décrivez-la, et demandez : « Explique-moi ceci avec des mots simples. Est-ce que je dois faire quelque chose ? »",
            "Certains assistants permettent de prendre une page en photo. Dans ce cas, cachez les détails privés avant de prendre la photo. Pour tout ce qui touche à l'argent, aux aides ou à la santé, confirmez quoi faire en appelant le numéro imprimé sur la lettre elle-même, ou demandez à un proche de confiance."
          ],
          steps: ["Cachez ou laissez de côté les noms, les numéros et votre adresse.", "Tapez ou décrivez seulement la partie compliquée.", "Demandez : « Explique-moi ceci avec des mots simples. Que dois-je faire ? »", "Confirmez en appelant le numéro imprimé sur la lettre."],
          words: [["Langage simple", "des mots simples, de tous les jours, faciles à comprendre."], ["Numéro de compte", "un numéro privé qu'une entreprise utilise pour votre compte ; ne le donnez jamais à une IA."]],
          slides: [
            { title: "Lettres difficiles, mots simples", bullets: ["Assurances, factures, administrations", "L'IA peut les expliquer simplement"] },
            { title: "Protégez-vous d'abord", bullets: ["Cachez les noms et les numéros de compte", "Laissez de côté les numéros Medicare ou de sécurité sociale", "Laissez de côté votre adresse"] },
            { title: "Demandez et confirmez", bullets: ["« Explique avec des mots simples. Que dois-je faire ? »", "Appelez le numéro imprimé sur la lettre pour confirmer"] }
          ],
          tryIt: "Trouvez une lettre ou une facture avec une phrase que vous ne comprenez pas bien. Laissez de côté tous les détails privés, tapez seulement cette phrase dans un assistant et demandez-lui de l'expliquer avec des mots simples.",
          youCanNow: "vous faire expliquer une lettre compliquée avec des mots simples tout en protégeant vos détails privés."
        },
        {
          title: "Tout réunir : une semaine plus facile",
          minutes: 5,
          goal: "Utiliser ensemble l'IA et votre téléphone pour organiser une semaine.",
          text: [
            "Vous avez maintenant plusieurs petites compétences : demander des idées de repas, faire une liste, créer des rappels et ajouter des rendez-vous. Ensemble, elles peuvent organiser toute une semaine.",
            "Une routine simple : le dimanche, demandez à l'assistant trois dîners et une liste de courses. Créez un rappel pour votre jour de courses. Regardez votre calendrier pour voir les rendez-vous de la semaine, et ajoutez ce qui est nouveau.",
            "Restez simple. Utilisez les outils qui vous aident et laissez de côté ceux qui ne vous aident pas. Les listes sur papier marchent toujours bien, et demander de l'aide à un proche, c'est toujours permis."
          ],
          steps: ["Demandez trois dîners à un assistant IA.", "Demandez une seule liste de courses.", "Créez un rappel pour votre jour de courses.", "Regardez votre calendrier et ajoutez les nouveaux rendez-vous."],
          words: [["Routine", "une série d'étapes que l'on fait chaque fois de la même façon."]],
          slides: [
            { title: "Une routine simple le dimanche", bullets: ["Trois dîners proposés par l'IA", "Une seule liste de courses", "Un rappel pour les courses"] },
            { title: "Regardez votre semaine", bullets: ["Consultez votre calendrier", "Ajoutez ce qui est nouveau, avec une alerte"] },
            { title: "Restez simple", bullets: ["Utilisez ce qui vous aide", "Les listes sur papier marchent toujours", "Demandez de l'aide à un proche quand vous voulez"] }
          ],
          tryIt: "Tâche finale : prévoyez trois dîners simples pour la semaine prochaine avec un assistant IA, demandez une seule liste de courses, créez un rappel sur votre téléphone pour votre jour de courses et ajoutez un vrai rendez-vous à votre calendrier.",
          youCanNow: "utiliser ensemble l'IA et votre téléphone pour prévoir vos repas, faire vos courses et suivre vos rendez-vous."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Rendez-vous et papiers",
        questions: [
          { q: "Dans l'application Calendrier, que touchez-vous pour ajouter un rendez-vous ?", options: ["Le bouton du volume", "L'appareil photo", "L'icône de la batterie", "Le signe plus (+)"], answer: 3, why: "Le signe plus ajoute un nouvel événement." },
          { q: "Pourquoi régler une alerte sur un rendez-vous ?", options: ["Pour que le téléphone vous prévienne avant", "Pour que cela coûte moins cher", "Pour que le médecin vous appelle", "Cela supprime l'événement"], answer: 0, why: "Une alerte vous prévient à l'avance." },
          { q: "Avant de demander à l'IA de vous expliquer une lettre, vous devez :", options: ["Taper votre numéro de compte", "Envoyer toute la lettre avec votre nom", "Cacher ou laisser de côté les détails privés", "Donner votre numéro Medicare"], answer: 2, why: "Les détails privés ne doivent jamais aller dans un assistant IA." },
          { q: "L'IA vous explique une lettre sur vos aides. Comment confirmer quoi faire ?", options: ["Faire entièrement confiance à l'IA", "Ne rien faire", "Demander à un inconnu sur internet", "Appeler le numéro imprimé sur la lettre"], answer: 3, why: "Le service qui a envoyé la lettre est la source officielle." },
          { q: "Quelle est une bonne routine du dimanche d'après ce cours ?", options: ["Effacer votre calendrier", "Partager vos mots de passe", "Prévoir les dîners, faire une liste, créer un rappel de courses, consulter le calendrier", "Acheter un nouveau téléphone"], answer: 2, why: "Elle réunit les compétences de toutes les leçons." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final : L'IA au quotidien",
    questions: [
      { q: "Un assistant IA peut vous aider pour les repas en :", options: ["Les cuisinant", "Proposant des idées faciles qui vous conviennent", "Faisant les courses pour vous", "Connaissant le régime donné par votre médecin"], answer: 1, why: "Il propose des idées quand vous lui dites ce qu'il vous faut." },
      { q: "Quelle demande de repas est la plus claire ?", options: ["« Je cuisine pour une personne. Propose trois dîners faciles, peu salés, prêts en moins de 30 minutes. »", "« nourriture »", "« dîner ? »", "« manger »"], answer: 0, why: "Elle donne le nombre de personnes, le temps et ce qu'il faut éviter." },
      { q: "Si le régime de votre médecin et l'idée de l'IA ne sont pas d'accord, suivez :", options: ["Votre médecin", "L'IA", "Le plus facile", "Aucun des deux"], answer: 0, why: "Votre médecin connaît votre santé." },
      { q: "Un ingrédient, c'est :", options: ["Un ustensile de cuisine", "Un des aliments d'une recette", "Un magasin", "Une application"], answer: 1, why: "Les ingrédients sont les aliments qui entrent dans une recette." },
      { q: "Pour obtenir une liste pour trois repas, vous demandez :", options: ["« Quel est mon mot de passe ? »", "« Supprime les repas. »", "« Fais une seule liste de courses pour ces trois dîners. »", "« Appelle le magasin. »"], answer: 2, why: "L'assistant regroupe les ingrédients dans une seule liste." },
      { q: "Dire à l'assistant ce que vous avez déjà à la maison l'aide à :", options: ["Imprimer en couleur", "Vous faire payer moins", "Appeler votre famille", "Retirer ces articles de la liste"], answer: 3, why: "Il retire ce que vous n'avez pas besoin d'acheter." },
      { q: "L'application Notes sert à :", options: ["Prendre des photos", "Passer des appels", "Écrire et garder de courtes notes et des listes", "Écouter de la musique"], answer: 2, why: "Notes garde vos listes sur le téléphone." },
      { q: "Siri et Google Assistant sont :", options: ["Des assistants vocaux intégrés aux téléphones", "Des supermarchés", "Des médecins", "Des adresses e-mail"], answer: 0, why: "Ils font des tâches simples quand vous parlez." },
      { q: "Une façon de réveiller un assistant vocal est de :", options: ["Secouer le téléphone", "Ouvrir l'appareil photo", "Éteindre le téléphone", "Dire « Dis Siri » ou « Ok Google »"], answer: 3, why: "Une phrase de réveil ou un appui long sur le bouton latéral ou d'accueil le lance." },
      { q: "Quelle demande à voix haute lance un minuteur ?", options: ["« Minuteur. »", "« Mets un minuteur de 20 minutes. »", "« Bonjour téléphone. »", "« Cuisine. »"], answer: 1, why: "Elle dit quoi faire et pour combien de temps." },
      { q: "Après avoir créé un rappel à la voix, vous devez :", options: ["Éteindre le téléphone", "Regarder l'écran pour vérifier qu'il est créé", "Supprimer l'application", "Rien"], answer: 1, why: "Vérifier confirme qu'il est bien enregistré." },
      { q: "L'application Calendrier vous aide à :", options: ["Jouer", "Prendre des photos", "Envoyer de l'argent", "Garder vos rendez-vous et recevoir des rappels"], answer: 3, why: "Elle garde les événements par date et peut vous alerter." },
      { q: "Quand vous ajoutez un rendez-vous, que remplissez-vous ?", options: ["Le nom, la date et l'heure", "Votre numéro de compte", "Votre mot de passe", "Votre numéro Medicare"], answer: 0, why: "Le nom, la date et l'heure sont ce dont le calendrier a besoin." },
      { q: "Une alerte un jour avant un rendez-vous veut dire :", options: ["Le rendez-vous est annulé", "Le médecin va appeler", "Votre téléphone vous le rappelle la veille", "Le rendez-vous est déplacé"], answer: 2, why: "Les alertes vous préviennent à l'avance." },
      { q: "Vous pouvez aussi ajouter un rendez-vous en :", options: ["Ouvrant l'appareil photo", "Envoyant une lettre", "Éteignant le téléphone", "Le demandant à votre assistant vocal"], answer: 3, why: "Les assistants vocaux peuvent ajouter des événements au calendrier." },
      { q: "Avant de taper une partie d'une lettre dans une IA, retirez :", options: ["Les mots difficiles", "La date", "Les noms, les numéros de compte et votre adresse", "Rien"], answer: 2, why: "Les détails privés ne vont jamais dans une IA." },
      { q: "Si vous prenez une lettre en photo pour l'IA, vous devez d'abord :", options: ["Allumer le flash", "Cacher les détails privés", "Ajouter votre mot de passe", "Écrire votre numéro de sécurité sociale dessus"], answer: 1, why: "Cacher les détails protège votre vie privée." },
      { q: "« Langage simple » veut dire :", options: ["Des mots simples, de tous les jours", "Une langue étrangère", "Des mots juridiques", "Du code informatique"], answer: 0, why: "Le langage simple est facile à comprendre." },
      { q: "Pour confirmer ce qu'une lettre sur vos aides vous demande, vous :", options: ["Appelez le numéro imprimé sur la lettre", "Faites confiance à l'IA", "La publiez en ligne", "L'ignorez"], answer: 0, why: "L'expéditeur est la source officielle." },
      { q: "Si un outil ne vous aide pas, le cours conseille de :", options: ["Acheter un téléphone plus récent", "Le laisser de côté et utiliser ce qui marche, même le papier", "Arrêter de vous organiser", "Partager votre mot de passe"], answer: 1, why: "Restez simple et utilisez ce qui vous aide." }
    ]
  }
};
