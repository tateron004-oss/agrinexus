"use strict";

// Koach Learn course (French translation of shared/emotional-intelligence.js). See scripts/koachlearn-courses/README.md, "Translations".
// STOP is kept as in the English; its letters are given French words (S'arrêter / prendre le Temps de respirer / Observer / Poursuivre).

module.exports = {
  id: "emotional-intelligence-fr",
  lang: "fr",
  translationOf: "emotional-intelligence",
  category: "Athletes",
  name: "Intelligence émotionnelle",
  skills: "Nommer vos émotions, Repérer vos déclencheurs, Faire une pause avant de répondre, Écouter avec empathie, Gérer un conflit avec des phrases en \"je\", Donner et recevoir un retour",
  outcome: "nommer ce que vous ressentez, faire une pause avant de réagir, écouter de façon que l'autre se sente compris, et mener une conversation difficile au travail, dans une équipe ou à la maison avec des phrases en \"je\" calmes et une demande claire.",
  about: [
    "L'intelligence émotionnelle, c'est la compétence de remarquer et de gérer vos propres émotions et de comprendre celles des autres. Il ne s'agit pas de cacher vos sentiments ni d'être toujours gentil. Il s'agit d'utiliser vos sentiments comme des informations, pour choisir ce que vous faites ensuite au lieu de réagir.",
    "Elle compte partout : un sportif qui reçoit des critiques dures de son entraîneur, une responsable qui fait un retour, un nouvel employé face à un client impatient, une responsable de bénévoles qui garde son équipe soudée, un ancien militaire qui s'adapte au travail civil, une personne qui sort de prison et reconstruit la confiance de sa famille, une adolescente prise dans une dispute sur un groupe de discussion. Les employeurs placent souvent ces compétences humaines aussi haut que les compétences techniques.",
    "Vous allez pratiquer six compétences : nommer vos émotions, repérer vos déclencheurs, faire une pause, écouter avec empathie, gérer un conflit, et donner et recevoir un retour. Chaque leçon dure environ cinq minutes, avec une tâche \"Essayez maintenant\". Il y a un court contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Préparez et ayez une vraie conversation que vous repoussez depuis un moment (avec un coéquipier, un collègue, un proche ou un ami). Avant, écrivez ce que vous ressentez et ce qui l'a déclenché. Pendant, faites une pause avant de répondre, reformulez ce que l'autre dit, et utilisez une phrase \"Je me sens ... quand ... parce que ... Est-ce qu'on pourrait ... ?\". Après, écrivez ce qui s'est bien passé et une chose à faire autrement.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des sportifs et des entraîneurs, des responsables et de nouveaux employés, des responsables bénévoles, des anciens combattants qui s'adaptent au travail civil, des personnes qui sortent de prison et reconstruisent la confiance en famille, et des jeunes.",
    startingPoint: "Ils ressentent des émotions fortes et ont affaire à d'autres personnes tous les jours. Beaucoup décrivent leurs émotions seulement par bien, mal, ça va ou énervé, réagissent vite quand quelque chose les touche, et sont mal à l'aise avec les retours et les conversations difficiles.",
    gap: "Les employeurs placent les compétences humaines au même niveau que les compétences techniques, et les réactions trop rapides abîment les équipes, les emplois et les familles. Les apprenants doivent nommer et gérer leurs émotions, écouter avec empathie et gérer calmement les conflits et les retours, pour choisir ce qu'ils font ensuite au lieu de réagir.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes",
      "Les exercices utilisent des situations réelles mais gérables ; personne n'a à raconter de détails privés",
      "Ce n'est pas une thérapie ; les apprenants en détresse durable sont orientés vers un conseiller ou vers le cours « Santé mentale et gestion du stress »",
      "Temps : des leçons d'environ cinq minutes avec de courts exercices quotidiens"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Trois fois dans une même journée", action: "nommer ce que vous ressentez avec un mot d'émotion précis et le signal du corps qui va avec", standard: "sans utiliser bien, mal, ça va ou énervé" },
    { id: "O2", condition: "En repensant à vos réactions fortes récentes", action: "identifier deux de vos déclencheurs et ce que chacun touche, comme le respect ou la justice", standard: "avec une réponse prévue écrite pour chacun" },
    { id: "O3", condition: "Dans un moment tendu", action: "utiliser la pause STOP pour choisir votre réponse", standard: "avant de parler ou d'envoyer un message" },
    { id: "O4", condition: "Quand quelqu'un vous parle d'un problème", action: "reformuler ce qu'il ressent et poser une question ouverte", standard: "pour qu'il dise que vous l'avez compris" },
    { id: "O5", condition: "Face à un vrai problème avec une autre personne", action: "dire ce qui vous dérange avec une phrase en \"je\" calme et une demande claire", standard: "en suivant le modèle : je me sens, quand, parce que, est-ce qu'on pourrait" },
    { id: "O6", condition: "Quand vous donnez ou recevez un retour", action: "donner un retour précis et bienveillant et répondre à un retour difficile sans vous braquer", standard: "en décrivant des actions, pas la personne" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Se connaître et se gérer",
      lessons: [
        {
          objectives: ["O1"],
          title: "Nommer ce que vous ressentez",
          minutes: 5,
          goal: "Nommer votre émotion avec un mot précis, pas seulement \"ça va\" ou \"énervé\".",
          text: [
            "L'intelligence émotionnelle commence par la conscience de soi : savoir ce que vous ressentez au moment où vous le ressentez. Beaucoup d'entre nous n'utilisent que quelques mots, comme bien, mal, ça va ou énervé. Mais \"énervé\" peut en réalité vouloir dire gêné, pas respecté, inquiet ou fatigué.",
            "Votre corps le sait souvent en premier. La mâchoire serrée, le visage qui chauffe, les poings fermés, une boule au ventre ou le cœur qui bat vite sont des indices. Quand vous en remarquez un, demandez-vous : \"Qu'est-ce que je ressens en ce moment ?\" et cherchez un mot plus précis.",
            "Nommer clairement un sentiment vous aide à le calmer et à décider quoi faire. Un joueur qui sait \"je suis frustré contre moi, pas contre l'entraîneur\" vit l'entraînement autrement qu'un joueur qui est juste en colère contre tout le monde."
          ],
          steps: ["Remarquez un indice dans votre corps : mâchoire serrée, visage qui chauffe, boule au ventre.", "Demandez-vous : qu'est-ce que je ressens en ce moment ?", "Trouvez un mot plus précis que bien, mal ou énervé.", "Dites-le-vous : \"Je me sens ...\""],
          words: [["Intelligence émotionnelle", "la compétence de remarquer et de gérer vos propres émotions et de comprendre celles des autres."], ["Conscience de soi", "savoir ce que vous ressentez et pourquoi, au moment où cela se passe."]],
          slides: [
            { title: "L'intelligence émotionnelle", bullets: ["Remarquer et gérer vos émotions", "Comprendre celles des autres", "Choisir votre réponse au lieu de réagir"] },
            { title: "Votre corps le sait en premier", bullets: ["Mâchoire serrée, visage qui chauffe, poings fermés", "Boule au ventre, cœur qui bat vite"] },
            { title: "Allez plus loin que \"énervé\"", bullets: ["Gêné, pas respecté, inquiet, fatigué ?", "Frustré, nerveux, déçu, jaloux ?", "Un mot précis aide à se calmer"] }
          ],
          tryIt: "Trois fois aujourd'hui, arrêtez-vous et écrivez un mot précis pour ce que vous ressentez et l'indice dans votre corps qui allait avec (par exemple : \"nerveux - cœur rapide avant mon service\"). Essayez de ne pas utiliser bien, mal, ça va ou énervé.",
          youCanNow: "remarquer les indices dans votre corps et nommer votre émotion avec un mot précis.",
          quickCheck: [
            { objective: "O1", q: "Quel mot est plus précis pour dire qu'on se sent mal avant un examen important ?", options: ["Ça va", "Nerveux", "Bof", "Mal"], answer: 1, why: "« Nerveux » nomme l'émotion exacte, ce qui aide à la gérer." },
            { objective: "O1", q: "Vous remarquez une poitrine serrée et un cœur qui bat vite avant votre service. Que faites-vous ?", options: ["L'ignorer en espérant que ça passe", "Dire à tout le monde que ça va", "Nommer l'émotion avec un mot précis, comme inquiet", "Ne pas aller à votre service"], answer: 2, why: "Nommer l'émotion à partir du signal du corps est la première étape pour la gérer." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Repérer vos déclencheurs",
          minutes: 5,
          goal: "Identifier deux situations qui provoquent chez vous des réactions fortes.",
          text: [
            "Un déclencheur est une situation, un mot ou une action qui provoque très vite une émotion forte : être interrompu, être corrigé devant les autres, quelqu'un en retard, un certain ton de voix, perdre un match serré, se sentir ignoré.",
            "Les déclencheurs sont souvent liés à des choses qui comptent pour vous, comme le respect, la justice ou la sécurité, ou à des expériences passées. Pour une personne qui sort de prison, être prise de haut peut faire très mal. Pour un ancien militaire, un bruit fort et soudain aussi. C'est humain, ce n'est pas un défaut.",
            "Quand vous connaissez vos déclencheurs, ils perdent une partie de leur force. Vous pouvez prévoir : \"Quand mon responsable me corrige devant l'équipe, je respire, je dis 'compris' et je demande à en parler après.\""
          ],
          steps: ["Pensez aux deux dernières fois où vous avez réagi fortement.", "Écrivez ce qui s'est passé juste avant.", "Écrivez ce que cela touchait : le respect, la justice, la sécurité, le besoin d'être écouté ?", "Écrivez un plan pour la prochaine fois."],
          words: [["Déclencheur", "une situation ou une action qui provoque très vite une émotion forte."], ["Schéma", "quelque chose qui se répète encore et encore de façon semblable."]],
          slides: [
            { title: "Ce qu'est un déclencheur", bullets: ["Provoque très vite une émotion forte", "Être interrompu, corrigé en public, ignoré", "Coéquipiers en retard, un certain ton de voix"] },
            { title: "Pourquoi ils frappent fort", bullets: ["Ils touchent le respect, la justice ou la sécurité", "Ou des expériences passées", "C'est humain, ce n'est pas un défaut"] },
            { title: "Prévoyez à l'avance", bullets: ["Connaissez vos principaux déclencheurs", "Décidez votre réponse à l'avance", "\"Respirer, dire 'compris', en parler après\""] }
          ],
          tryIt: "Écrivez vos deux principaux déclencheurs. Pour chacun, écrivez ce qu'il touche (respect, justice, sécurité, besoin d'être écouté) et une phrase sur la façon dont vous répondrez la prochaine fois.",
          youCanNow: "nommer vos déclencheurs, voir ce qu'ils touchent, et prévoir à l'avance une meilleure réponse.",
          quickCheck: [
            { objective: "O2", q: "À quoi les déclencheurs sont-ils souvent liés ?", options: ["À des choses qui comptent pour vous, comme le respect ou la justice", "À la météo", "Au hasard", "Seulement à la faim"], answer: 0, why: "Les déclencheurs touchent en général quelque chose qui vous tient vraiment à cœur." },
            { objective: "O2", q: "Être coupé quand vous parlez en réunion vous met toujours en colère. Que faites-vous ?", options: ["Ne plus aller aux réunions", "Couper la parole aux autres en premier", "Espérer que ça n'arrive plus", "Le noter comme déclencheur et prévoir comment vous répondrez la prochaine fois"], answer: 3, why: "Prévoir à l'avance enlève de la force au déclencheur." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Faire une pause avant de répondre",
          minutes: 5,
          goal: "Utiliser la pause STOP pour choisir votre réponse dans un moment tendu.",
          text: [
            "Entre ce qui arrive et ce que vous faites, il y a un tout petit espace. Se maîtriser, c'est agrandir cet espace. Un outil simple est STOP : S'arrêter. Prendre le Temps de respirer. Observer ce que vous ressentez et ce qui se passe. Poursuivre avec un choix.",
            "Sur le moment, quelques respirations lentes, compter jusqu'à dix ou dire \"Laisse-moi une minute\" vous fait gagner du temps. Si vous êtes trop énervé pour bien parler, vous pouvez dire \"Je veux en parler, mais j'ai d'abord besoin de dix minutes\" et revenir. Revenir, c'est l'essentiel.",
            "Faire une pause, ce n'est pas tout garder pour soi. Vous vous occupez quand même du sentiment ; vous le faites juste quand vous pouvez penser clairement. Les sportifs appellent cela garder son sang-froid ; un joueur calme prend de meilleures décisions en fin de match."
          ],
          steps: ["S'arrêter : ne parlez pas et n'appuyez pas encore sur Envoyer.", "Prendre le Temps de respirer : une respiration lente, ou trois.", "Observer : qu'est-ce que je ressens ? Que se passe-t-il vraiment ?", "Poursuivre : choisissez quoi dire ou faire, ou demandez une courte pause et revenez."],
          words: [["Maîtrise de soi", "choisir ce que vous faites même quand vous ressentez une émotion forte."], ["Sang-froid", "rester calme et lucide sous la pression."]],
          slides: [
            { title: "Agrandissez l'espace", bullets: ["Quelque chose arrive", "Pause", "Puis vous choisissez votre réponse"] },
            { title: "STOP", bullets: ["S'arrêter", "Prendre le Temps de respirer", "Observer", "Poursuivre avec un choix"] },
            { title: "Besoin de plus de temps ?", bullets: ["\"J'ai besoin de dix minutes, puis on en parle.\"", "Revenez toujours au sujet"] },
            { title: "Faire une pause, ce n'est pas tout garder", bullets: ["Occupez-vous du sentiment", "Quand vous pouvez penser clairement"] }
          ],
          tryIt: "Pensez à un message ou une remarque qui vous a mis en colère récemment. Faites STOP sur papier : ce que vous avez ressenti, ce qui se passait vraiment, et ce que vous diriez maintenant. La prochaine fois que cela arrive pour de vrai, utilisez STOP avant de répondre.",
          youCanNow: "utiliser STOP pour faire une pause et choisir votre réponse au lieu de réagir.",
          quickCheck: [
            { objective: "O3", q: "Que veut dire le S de STOP ?", options: ["S'arrêter", "S'emporter", "Sourire", "Somnoler"], answer: 0, why: "STOP commence par s'arrêter avant de réagir." },
            { objective: "O3", q: "Un SMS impoli arrive et vous commencez à taper une réponse en colère. Que faites-vous ?", options: ["L'envoyer vite avant de changer d'avis", "Vous arrêter, respirer et décider quoi dire une fois calme", "Transférer le SMS à vos amis", "Bloquer la personne tout de suite"], answer: 1, why: "Faire une pause vous permet de choisir votre réponse au lieu de réagir." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Se connaître et se gérer",
        questions: [
          { objective: "O1", q: "L'intelligence émotionnelle, c'est surtout :", options: ["Cacher tous vos sentiments", "Être toujours gentil", "Remarquer et gérer vos émotions et comprendre celles des autres", "Être le plus bruyant de la pièce"], answer: 2, why: "Il s'agit d'utiliser vos sentiments comme des informations pour choisir votre réponse." },
          { objective: "O1", q: "Quel est le mot le plus précis pour un sentiment ?", options: ["Mal", "Gêné", "Ça va", "Peu importe"], answer: 1, why: "Un mot précis comme gêné vous dit ce qui se passe vraiment." },
          { objective: "O2", q: "Qu'est-ce qu'un déclencheur ?", options: ["Une situation qui provoque très vite une émotion forte", "Un type d'exercice", "Un moment de calme", "Un intitulé de poste"], answer: 0, why: "Les déclencheurs provoquent très vite des émotions fortes." },
          { objective: "O3", q: "Dans STOP, que veut dire le T ?", options: ["Taper vite une réponse", "Tout lâcher", "Tout raconter à tout le monde", "Prendre le Temps de respirer"], answer: 3, why: "S'arrêter, prendre le Temps de respirer, Observer, Poursuivre." },
          { objective: "O3", q: "Vous êtes trop en colère pour bien parler. Quelle est la bonne chose à faire ?", options: ["Dire tout ce qui vous passe par la tête", "Ne plus jamais lui parler", "Demander dix minutes et revenir en parler", "En parler sur internet"], answer: 2, why: "Une courte pause suivie d'un retour vous permet de parler clairement." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Comprendre les autres et travailler avec eux",
      lessons: [
        {
          objectives: ["O4"],
          title: "Écouter avec empathie",
          minutes: 5,
          goal: "Écouter et reformuler pour que l'autre se sente compris.",
          text: [
            "L'empathie, c'est comprendre ce qu'une autre personne ressent et pourquoi, même si vous ressentiriez autre chose. Vous n'avez pas besoin d'être d'accord avec quelqu'un pour le comprendre.",
            "La plupart des gens écoutent pour répondre. Écouter avec empathie, c'est écouter pour comprendre. Posez le téléphone, regardez la personne et laissez-la finir. Puis reformulez : redites ce que vous avez entendu et le sentiment que vous avez remarqué. \"Donc tu fais des heures en plus depuis un moment et personne ne l'a remarqué. Ça a l'air vraiment frustrant.\"",
            "Ensuite, posez une question ouverte : \"Qu'est-ce qui t'aiderait ?\" ou \"Et après, que s'est-il passé ?\" Évitez de sauter aux conseils, de comparer (\"ce n'est rien, moi une fois...\") ou de dire \"calme-toi\". Un entraîneur, un employé du service client, une responsable de bénévoles et un parent vont plus loin quand les gens se sentent d'abord écoutés."
          ],
          steps: ["Rangez ce qui vous distrait et regardez la personne.", "Laissez-la finir sans l'interrompre.", "Reformulez ce que vous avez entendu et le sentiment : \"On dirait que ...\"", "Posez une question ouverte : \"Qu'est-ce qui t'aiderait ?\""],
          words: [["Empathie", "comprendre ce qu'une autre personne ressent et pourquoi."], ["Reformuler", "redire avec vos propres mots ce que vous avez entendu."], ["Question ouverte", "une question à laquelle on ne peut pas répondre seulement par oui ou non."]],
          slides: [
            { title: "L'empathie", bullets: ["Comprendre ce qu'il ressent et pourquoi", "Pas besoin d'être d'accord"] },
            { title: "Écoutez pour comprendre", bullets: ["Téléphone posé, regard levé", "Laissez la personne finir", "Reformulez : \"On dirait que c'était frustrant.\""] },
            { title: "Puis demandez", bullets: ["\"Qu'est-ce qui t'aiderait ?\"", "\"Et après, que s'est-il passé ?\""] },
            { title: "À éviter", bullets: ["Sauter aux conseils", "\"Ce n'est rien, moi une fois...\"", "\"Calme-toi\""] }
          ],
          tryIt: "Dans votre prochaine vraie conversation, pratiquez une reformulation (\"On dirait que tu t'es senti ...\") et une question ouverte. Après, écrivez ce que l'autre personne a dit et comment elle a réagi.",
          youCanNow: "écouter pour comprendre, reformuler ce qu'une personne a dit et ressenti, et poser une question ouverte.",
          quickCheck: [
            { objective: "O4", q: "Que veut dire reformuler ?", options: ["Donner tout de suite un conseil", "Ramener la conversation à votre propre histoire", "Dire avec vos mots ce que l'autre ressent et pourquoi", "Répéter le dernier mot qu'il a dit"], answer: 2, why: "Reformuler montre à la personne que vous l'avez comprise." },
            { objective: "O4", q: "Un collègue dit : « J'en ai assez de faire tout le rangement. » Que répondez-vous d'abord ?", options: ["« Calme-toi, ce n'est pas grave. »", "« J'en fais plus que toi. »", "« Tu devrais le dire au patron. »", "« On dirait que tu trouves que le travail n'est pas partagé équitablement. Qu'est-ce qui se passe ? »"], answer: 3, why: "Reformuler l'émotion et poser une question ouverte montre de l'empathie." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gérer un conflit avec des phrases en \"je\"",
          minutes: 5,
          goal: "Dire ce qui vous dérange avec une phrase en \"je\" calme et une demande claire.",
          text: [
            "Le conflit est normal dans toute équipe, toute famille et toute entreprise. Bien géré, il règle des problèmes. Mal géré, il détruit la confiance.",
            "Les phrases en \"tu\" sonnent comme des reproches : \"Tu me laisses toujours fermer.\" Les gens se défendent et arrêtent d'écouter. Les phrases en \"je\" décrivent votre côté : \"Je me sens stressé quand je ferme seul trois soirs de suite, parce que je rate mon bus. Est-ce qu'on pourrait faire chacun son tour ?\"",
            "Le modèle : Je me sens [émotion] quand [action précise] parce que [pourquoi c'est important pour moi]. Est-ce qu'on pourrait [demande] ? Restez sur un seul sujet, décrivez des actions et pas le caractère (\"tu es arrivé en retard deux fois\", pas \"tu es paresseux\"), et écoutez son côté avec les compétences de la leçon précédente. Cherchez une solution qui vous convienne à tous les deux."
          ],
          steps: ["Choisissez un seul sujet.", "Écrivez : Je me sens ... quand ... parce que ... Est-ce qu'on pourrait ... ?", "Choisissez un moment calme et un endroit privé.", "Dites-le, puis écoutez et reformulez son côté.", "Mettez-vous d'accord sur une prochaine étape."],
          words: [["Phrase en \"je\"", "une façon de dire comment quelque chose vous touche sans accuser l'autre."], ["Conflit", "un désaccord entre des personnes qui ont besoin de choses différentes ou qui veulent des choses différentes."]],
          slides: [
            { title: "\"Tu\" ou \"je\"", bullets: ["\"Tu me laisses toujours fermer.\" (reproche)", "\"Je me sens stressé quand je ferme seul...\" (votre côté)"] },
            { title: "Le modèle", bullets: ["Je me sens [émotion]", "quand [action précise]", "parce que [pourquoi c'est important]", "Est-ce qu'on pourrait [demande] ?"] },
            { title: "Restez juste", bullets: ["Un sujet à la fois", "Décrivez des actions, pas le caractère", "Écoutez et reformulez son côté"] },
            { title: "Finissez par une étape", bullets: ["Trouvez une solution qui convient aux deux", "Mettez-vous d'accord sur une prochaine étape"] }
          ],
          tryIt: "Pensez à un vrai problème avec un coéquipier, un collègue ou un proche. Écrivez-le d'abord avec une phrase en \"tu\", puis réécrivez-le en \"Je me sens ... quand ... parce que ... Est-ce qu'on pourrait ... ?\" Lisez les deux à voix haute et remarquez la différence.",
          youCanNow: "transformer un reproche en phrase en \"je\" calme avec une demande claire, et avancer vers une prochaine étape commune.",
          quickCheck: [
            { objective: "O5", q: "Quelle partie d'une phrase en \"je\" contient la demande claire ?", options: ["Je me sens", "Quand", "Parce que", "Est-ce qu'on pourrait"], answer: 3, why: "« Est-ce qu'on pourrait ... ? » demande un changement précis." },
            { objective: "O5", q: "Un membre de votre famille regarde sans cesse votre téléphone. Que dites-vous ?", options: ["« Je me sens mal à l'aise quand on regarde mon téléphone, parce que j'ai besoin de confiance. Est-ce qu'on pourrait en parler ? »", "« Tu passes ton temps à m'espionner. »", "« Arrête, sinon tu vas voir. »", "Ne rien dire et rester contrarié"], answer: 0, why: "Une phrase en \"je\" calme nomme votre émotion et demande un changement sans reproche." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Donner et recevoir un retour",
          minutes: 6,
          goal: "Donner un retour précis et bienveillant, et recevoir un retour sans vous braquer.",
          text: [
            "Un retour aide les gens à progresser. Un bon retour est précis, porte sur des actions et est utile. Au lieu de \"Bon travail\" ou \"C'était mauvais\", dites ce qui s'est passé et son effet : \"Ton résumé au début de la réunion a aidé tout le monde à rester concentré.\" \"Le rapport avait trois totaux faux, alors le client a appelé deux fois. Peux-tu vérifier les totaux avant d'envoyer ?\"",
            "Recevoir un retour est plus difficile. Votre premier réflexe peut être de vous défendre. Utilisez STOP, écoutez jusqu'au bout, reformulez et posez une question : \"Peux-tu me donner un exemple ?\" Dites merci, même si vous n'êtes pas encore d'accord. Puis décidez ce que vous allez en faire. Les sportifs qui acceptent bien les conseils de l'entraîneur progressent le plus vite.",
            "Quand vous vous trompez, réparez. De vraies excuses nomment ce que vous avez fait, son effet et ce que vous ferez autrement : \"Je t'ai parlé sèchement pendant la réunion. Ça t'a mis dans l'embarras. La prochaine fois, je te proposerai d'en parler après.\" Vous êtes maintenant prêt pour votre tâche finale."
          ],
          steps: ["Pour donner : dites l'action précise et son effet.", "Ajoutez une demande claire ou un merci.", "Pour recevoir : faites une pause, écoutez jusqu'au bout, reformulez, demandez un exemple, dites merci.", "Pour réparer : nommez ce que vous avez fait, son effet et ce que vous ferez autrement."],
          words: [["Retour", "une information sur la façon dont quelqu'un s'y est pris, donnée pour qu'il progresse ou continue à bien faire (en anglais, feedback)."], ["Se braquer", "se défendre tout de suite contre une critique au lieu d'écouter."], ["Réparer", "arranger une relation après une erreur, souvent avec de vraies excuses."]],
          slides: [
            { title: "Donner un retour", bullets: ["Action précise + son effet", "\"Ton résumé nous a aidés à rester concentrés.\"", "Ajoutez une demande claire ou un merci"] },
            { title: "Recevoir un retour", bullets: ["Pause, écoutez jusqu'au bout", "Reformulez et demandez un exemple", "Dites merci, puis décidez quoi en faire"] },
            { title: "Réparer avec de vraies excuses", bullets: ["Ce que j'ai fait", "L'effet que cela a eu", "Ce que je ferai autrement"] }
          ],
          tryIt: "Tâche finale : préparez et ayez une conversation que vous repoussez depuis un moment. Avant, écrivez ce que vous ressentez et ce qui l'a déclenché. Pendant, faites une pause, reformulez ce que l'autre dit, et utilisez une phrase \"Je me sens ... quand ... parce que ... Est-ce qu'on pourrait ... ?\". Après, écrivez ce qui s'est bien passé et une chose à faire autrement.",
          youCanNow: "donner un retour précis, recevoir un retour sans vous braquer, réparer une erreur et mener une conversation difficile avec intelligence émotionnelle.",
          quickCheck: [
            { objective: "O6", q: "Quel retour porte sur des actions et non sur la personne ?", options: ["« Tu es négligent. »", "« Tu n'essaies jamais. »", "« Deux commandes sont parties hier sans étiquette. »", "« Tu es le pire de l'équipe. »"], answer: 2, why: "Un bon retour décrit des actions précises qui peuvent changer." },
            { objective: "O6", q: "Votre entraîneur dit que votre défense était faible lors du dernier match. Que faites-vous d'abord ?", options: ["Dire que l'entraîneur a tort", "Écouter, reformuler et demander un exemple", "Quitter l'équipe", "Accuser un coéquipier"], answer: 1, why: "Écouter et demander un exemple vous aide à apprendre au lieu de vous braquer." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Comprendre les autres et travailler avec eux",
        questions: [
          { objective: "O4", q: "L'empathie, c'est :", options: ["Être d'accord avec tout", "Comprendre ce que quelqu'un ressent et pourquoi", "S'apitoyer sur soi-même", "Donner vite des conseils"], answer: 1, why: "Vous pouvez comprendre quelqu'un sans être d'accord avec lui." },
          { objective: "O4", q: "Une coéquipière vous dit qu'elle se sent mise à l'écart. Quelle réponse montre une écoute empathique ?", options: ["\"Ce n'est rien, moi j'ai vécu pire.\"", "\"Calme-toi.\"", "\"Voilà ce que tu devrais faire...\"", "\"On dirait que tu t'es sentie mise à l'écart. Que s'est-il passé ?\""], answer: 3, why: "Elle reformule son sentiment et pose une question ouverte." },
          { objective: "O5", q: "Laquelle est une phrase en \"je\" ?", options: ["\"Je me sens stressé quand je ferme seul parce que je rate mon bus. Est-ce qu'on pourrait faire chacun son tour ?\"", "\"Tu n'aides jamais.\"", "\"Tu es tellement paresseux.\"", "\"Tout le monde pense que tu as tort.\""], answer: 0, why: "Elle nomme votre sentiment, l'action, pourquoi c'est important et une demande." },
          { objective: "O6", q: "Quel retour est le plus utile ?", options: ["\"Mauvais travail.\"", "\"Peu importe.\"", "\"Le rapport avait trois totaux faux ; vérifie les totaux avant d'envoyer, s'il te plaît.\"", "\"Tu es nul pour ça.\""], answer: 2, why: "Il nomme l'action précise et une demande claire." },
          { objective: "O6", q: "Lesquelles sont de vraies excuses ?", options: ["\"Désolé que tu te sois fâché.\"", "\"Je t'ai parlé sèchement ; ça t'a mis dans l'embarras ; la prochaine fois je te proposerai d'en parler après.\"", "\"Désolé, mais c'est toi qui as commencé.\"", "Ne rien dire"], answer: 1, why: "Elles nomment l'action, son effet et ce qui va changer." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Intelligence émotionnelle",
    questions: [
      { objective: "O1", q: "La conscience de soi, c'est :", options: ["Savoir ce que vous ressentez et pourquoi au moment où cela arrive", "Ne penser qu'à vous", "Ignorer vos sentiments", "Vous regarder dans un miroir"], answer: 0, why: "La conscience de soi, c'est remarquer vos sentiments sur le moment." },
      { objective: "O1", q: "Lequel est un indice dans le corps d'une émotion forte ?", options: ["Une chemise propre", "Une mâchoire serrée ou un cœur qui bat vite", "Une batterie de téléphone pleine", "Une journée ensoleillée"], answer: 1, why: "Votre corps signale souvent une émotion avant que vous la nommiez." },
      { objective: "O1", q: "Pourquoi nommer un sentiment avec un mot précis ?", options: ["Pour gagner les disputes", "Pour paraître intelligent", "Cela aide à le calmer et à décider quoi faire", "Cela rend le sentiment plus fort"], answer: 2, why: "Nommer précisément le sentiment aide à le gérer." },
      { objective: "O1", q: "\"Énervé\" peut en réalité vouloir dire :", options: ["Avoir envie d'une pizza", "Seulement avoir sommeil", "Être heureux", "Gêné, pas respecté ou inquiet"], answer: 3, why: "La colère cache souvent un sentiment plus précis." },
      { objective: "O2", q: "Les déclencheurs sont souvent liés à :", options: ["Des choses qui comptent pour vous, comme le respect ou la justice", "La météo seulement", "Des nombres au hasard", "La marque de votre téléphone"], answer: 0, why: "Les déclencheurs touchent des valeurs comme le respect, la justice ou la sécurité, ou des expériences passées." },
      { objective: "O2", q: "Pourquoi prévoir à l'avance votre réponse à un déclencheur ?", options: ["Pour ne plus jamais rien ressentir", "Pour pouvoir accuser les autres", "Pour que le déclencheur ait moins de force et que vous répondiez mieux", "Cela ne sert à rien"], answer: 2, why: "Un plan fait au calme vous guide quand le déclencheur arrive." },
      { objective: "O3", q: "Dans STOP, le O veut dire :", options: ["Oublier", "Observer", "Offenser", "Ouvrir votre téléphone"], answer: 1, why: "S'arrêter, prendre le Temps de respirer, Observer, Poursuivre." },
      { objective: "O3", q: "Faire une pause avant de répondre, c'est :", options: ["La même chose que tout garder pour toujours", "Un signe de faiblesse", "Réservé aux sportifs", "Choisir une réponse quand vous pouvez penser clairement"], answer: 3, why: "Vous vous occupez quand même du sentiment, mais à un meilleur moment." },
      { objective: "O3", q: "Après avoir demandé une pause de dix minutes dans une dispute, l'essentiel est de :", options: ["Revenir et en parler", "Ne jamais revenir", "Vous plaindre aux autres", "Changer de sujet pour toujours"], answer: 0, why: "Une pause n'aide que si vous revenez à la conversation." },
      { objective: "O4", q: "Écouter avec empathie, c'est écouter pour :", options: ["Répondre vite", "Trouver des erreurs", "Comprendre", "Attendre votre tour"], answer: 2, why: "Écouter pour comprendre aide la personne à se sentir écoutée." },
      { objective: "O4", q: "Laquelle est une question ouverte ?", options: ["\"Ça va ?\"", "\"Qu'est-ce qui t'aiderait ?\"", "\"Tu as fini ?\"", "\"On est mardi ?\""], answer: 1, why: "On ne peut pas répondre à une question ouverte seulement par oui ou non." },
      { objective: "O4", q: "Quand quelqu'un vous parle d'un problème, qu'est-ce qu'il vaut mieux éviter au début ?", options: ["Le regarder", "Le laisser finir", "Reformuler ce qu'il a dit", "Dire \"calme-toi\""], answer: 3, why: "\"Calme-toi\" peut donner l'impression qu'on balaie ce que la personne ressent." },
      { objective: "O5", q: "Pourquoi les phrases en \"tu\" échouent-elles souvent ?", options: ["Elles sont trop courtes", "Elles sont trop polies", "Elles sonnent comme des reproches, alors les gens se défendent", "Elles contiennent des sentiments"], answer: 2, why: "Les reproches mettent les gens sur la défensive et ils arrêtent d'écouter." },
      { objective: "O5", q: "Complétez le modèle : Je me sens ... quand ... parce que ...", options: ["Est-ce qu'on pourrait ... ?", "Tu fais toujours ...", "Tout le monde sait ...", "Laisse tomber."], answer: 0, why: "Le modèle se termine par une demande claire." },
      { objective: "O5", q: "Une bonne discussion sur un conflit décrit :", options: ["Le caractère de quelqu'un (\"tu es paresseux\")", "Tout ce qui a toujours mal tourné", "Des rumeurs", "Des actions précises (\"tu es arrivé en retard deux fois\")"], answer: 3, why: "Les actions peuvent changer ; les attaques contre la personne ne font que blesser." },
      { objective: "O5", q: "Quel est un bon endroit pour une conversation difficile ?", options: ["Un groupe de discussion", "Un endroit calme et privé", "Devant toute l'équipe", "En criant juste après une défaite"], answer: 1, why: "Un lieu calme et privé aide les deux personnes à écouter." },
      { objective: "O6", q: "Un bon retour est :", options: ["Précis, sur des actions, et utile", "Vague et général", "Sur la personnalité de quelqu'un", "Donné seulement sous le coup de la colère"], answer: 0, why: "Un retour précis dit exactement quoi garder ou changer." },
      { objective: "O6", q: "Votre entraîneur ou votre patron vous fait un retour dur. Une bonne première réaction est de :", options: ["Discuter tout de suite", "Partir", "Écouter, reformuler et demander un exemple", "L'ignorer"], answer: 2, why: "Écouter et poser des questions vous aide à en tirer des leçons." },
      { objective: "O6", q: "De vraies excuses contiennent :", options: ["Une excuse pour se justifier", "Le fait d'accuser l'autre", "\"Désolé que tu le prennes comme ça\"", "Ce que vous avez fait, son effet et ce que vous ferez autrement"], answer: 3, why: "Ces trois parties réparent la confiance." },
      { objective: "O6", q: "Réparer après une erreur aide parce que cela :", options: ["Prouve que vous aviez raison", "Reconstruit la confiance dans la relation", "Met fin à tout conflit futur", "Est obligatoire selon la loi"], answer: 1, why: "Réparer montre du respect et reconstruit la confiance." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      3,
      4,
      7,
      10,
      13,
      16,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Émotion et déclencheur nommés",
        objective: "O1",
        notYet: "A utilisé un mot vague comme mal ou énervé, ou n'a écrit aucun déclencheur.",
        meets: "A écrit avant la conversation un mot d'émotion précis et ce qui l'a déclenché.",
        exceeds: "A aussi nommé ce que touche le déclencheur, comme le respect ou la justice."
      },
      {
        name: "Pause avant de répondre",
        objective: "O3",
        notYet: "A réagi vite ou a haussé la voix.",
        meets: "A fait au moins une pause avant de répondre dans un moment difficile.",
        exceeds: "A demandé une courte pause et est revenu finir la conversation."
      },
      {
        name: "Reformulation",
        objective: "O4",
        notYet: "N'a pas vérifié ce que l'autre voulait dire.",
        meets: "A reformulé au moins une fois ce que l'autre ressentait.",
        exceeds: "L'autre personne a dit qu'elle s'était sentie comprise."
      },
      {
        name: "Phrase en \"je\"",
        objective: "O5",
        notYet: "A utilisé des phrases en \"tu\" qui accusent.",
        meets: "A utilisé une phrase complète « Je me sens ... quand ... parce que ... Est-ce qu'on pourrait ... ? ».",
        exceeds: "La demande a mené à une suite claire acceptée par les deux."
      },
      {
        name: "Bilan après coup",
        objective: "O6",
        notYet: "Aucun bilan écrit.",
        meets: "A écrit ce qui s'est bien passé et une chose à faire autrement.",
        exceeds: "A demandé un retour à l'autre personne et l'a noté calmement."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui disent avoir eu dans les 30 jours une conversation qu'ils repoussaient (questionnaire de suivi)",
      "Apprenants qui disent avoir fait une pause avant de réagir dans un moment difficile",
      "Entraîneurs, responsables ou équipes de programme qui signalent un meilleur travail d'équipe ou moins d'éclats",
      "Apprenants qui commencent un autre cours Koach Learn sur les relations humaines dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Du papier ou une application de notes pour les mots d'émotion, les déclencheurs et le plan",
      "Une liste de mots d'émotion (facultatif)",
      "Environ 60 minutes au total, plus le temps de la vraie conversation"
    ],
    facilitatorNotes: [
      "Entraînez-vous d'abord par deux avec des situations inventées ; personne n'a à raconter d'histoire privée.",
      "Montrez vous-même la reformulation et les phrases en \"je\" avant de demander aux apprenants de les essayer.",
      "Rappelez que les conversations où il y a un danger ou des violences demandent une aide extérieure, pas un tête-à-tête.",
      "Si un apprenant semble en détresse durable, orientez-le vers un conseiller, le cours « Santé mentale et gestion du stress » ou une ligne de crise locale.",
      "Notez la tâche finale avec la grille et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
