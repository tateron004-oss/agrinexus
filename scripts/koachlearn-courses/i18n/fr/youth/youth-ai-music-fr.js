"use strict";

// Koach Learn course (French translation of youth/youth-ai-music.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "youth-ai-music-fr",
  lang: "fr",
  translationOf: "youth-ai-music",
  category: "Youth",
  name: "Production musicale avec l'IA",
  skills: "Faire un beat dans un studio en ligne gratuit, Trouver des idées de paroles avec l'IA, Construire la structure d'une chanson, Respecter le droit d'auteur et les voix, Exporter et partager en sécurité",
  outcome: "créer un court morceau original (environ 60 secondes) dans un studio de musique en ligne gratuit, en utilisant l'IA pour trouver des idées et des paroles, avec une structure de chanson claire, sans chanson copiée ni voix clonée, et avec des crédits qui disent comment vous avez utilisé l'IA.",
  about: [
    "Ce cours s'adresse aux jeunes qui aiment la musique et veulent créer la leur, même s'ils ne savent pas encore jouer d'un instrument. Vous pouvez le faire sur un téléphone ou sur un ordinateur de l'école ou de la bibliothèque.",
    "Vous ferez un beat dans BandLab, un studio de musique en ligne gratuit, vous utiliserez un assistant d'IA comme partenaire pour trouver des idées et des paroles, vous construirez les parties d'une chanson et vous apprendrez les règles sur le droit d'auteur et l'utilisation de la voix des autres. Vous terminerez en exportant un court morceau et en le partageant en sécurité.",
    "Les conditions de BandLab disent que les utilisateurs doivent avoir au moins 13 ans et que les moins de 18 ans ont besoin de la permission d'un parent ou tuteur. Vérifiez les règles d'âge de chaque outil, les règles de votre école sur l'IA, et faites-vous aider par un parent ou tuteur pour l'inscription. Chaque leçon se termine par une activité \"Essayez maintenant\", avec un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Créez un morceau original d'environ 60 secondes dans un studio en ligne gratuit : un beat, une intro, un couplet et un refrain. Utilisez un assistant d'IA pour trouver un thème et au moins quatre lignes de paroles, puis réécrivez-les avec vos propres mots. N'utilisez aucune chanson copiée ni aucune copie par IA de la voix d'une vraie personne. Exportez-le et écrivez une courte note de crédits qui dit ce que vous avez fait et comment vous avez utilisé l'IA.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des jeunes qui aiment la musique et veulent créer la leur, y compris ceux qui ne savent pas encore jouer d'un instrument.",
    startingPoint: "Ils écoutent de la musique chaque jour et connaissent des chansons qu'ils adorent. La plupart n'ont jamais fait de beat, organisé une chanson, ni appris les règles sur le droit d'auteur, les samples et les voix générées par IA.",
    gap: "Les outils de musique par IA permettent de copier facilement des chansons ou des voix sans savoir que c'est interdit, et écrire une demande ne suffit pas pour être l'auteur. Les jeunes doivent créer eux-mêmes une musique originale, utiliser l'IA seulement comme partenaire pour trouver des idées, et partager leur travail honnêtement et en sécurité.",
    constraints: [
      "Âges minimum : BandLab et d'autres outils ont un âge minimum et demandent l'accord d'un parent ou tuteur pour les moins de 18 ans",
      "Les règles de l'école sur l'IA en cours de musique",
      "Appareils : un téléphone ou un ordinateur de l'école ou de la bibliothèque avec un navigateur web ; seulement des outils gratuits",
      "Droit d'auteur et droit sur la voix : pas de chansons copiées, pas de samples sans permission, pas de copies IA de vraies voix",
      "Vie privée au moment de partager : pas de nom complet, d'école ni de lieu dans les publications publiques"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "En pensant à la musique que vous écoutez et que vous créez", action: "expliquer comment l'IA est utilisée en musique et les règles de base que vous suivrez", standard: "en citant trois utilisations et les règles sur la copie, les voix, les âges minimum et l'honnêteté" },
    { id: "O2", condition: "Avec un studio en ligne gratuit comme BandLab, et l'accord d'un parent ou tuteur", action: "faire un beat de 4 mesures avec de la batterie et un autre son, à un tempo qui va avec l'ambiance", standard: "qui se joue en boucle sans trous" },
    { id: "O3", condition: "À partir d'un thème tiré de votre propre vie", action: "utiliser l'IA pour trouver des images et des rimes, puis écrire quatre lignes de paroles avec vos propres mots", standard: "pour que les lignes tiennent sur le beat quand on les dit à voix haute" },
    { id: "O4", condition: "À partir de votre beat et de vos paroles", action: "organiser le morceau en intro, couplet et refrain", standard: "d'environ 60 secondes, avec chaque partie un peu différente" },
    { id: "O5", condition: "Pour chaque son et chaque voix de votre morceau", action: "décider si chaque son ou chaque voix peut être utilisé, et retirer tout ce dont vous ne pouvez pas montrer que c'est permis", standard: "sans chansons copiées, sans samples non autorisés et sans copies IA de vraies voix" },
    { id: "O6", condition: "Quand le morceau est fini", action: "équilibrer le mixage, exporter le morceau et écrire une note de crédits honnête", standard: "en partageant seulement là où votre famille est d'accord et en gardant vos informations personnelles privées" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Faire de la musique avec l'IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Comment l'IA est utilisée en musique, et les règles de base",
          minutes: 4,
          goal: "Expliquer trois façons dont l'IA est utilisée en musique et les règles que vous suivrez.",
          text: [
            "L'IA est utilisée en musique de beaucoup de façons : des applications qui proposent des accords ou des rythmes de batterie, des outils qui nettoient les enregistrements, des assistants comme ChatGPT, Microsoft Copilot ou Google Gemini qui aident à trouver des idées de paroles, et des générateurs qui créent des chansons entières à partir d'un texte.",
            "Dans ce cours, l'IA est votre partenaire pour trouver des idées. C'est vous qui faites les grands choix créatifs. C'est important pour apprendre, et aussi pour la loi : le Bureau du droit d'auteur des États-Unis (U.S. Copyright Office) a dit que taper des demandes (prompts) ne suffit pas pour être l'auteur de ce que produit une IA. Ce qui compte, ce sont vos propres mots, vos sons et votre arrangement.",
            "Règles de base : ne copiez pas les chansons des autres, n'utilisez pas de copie par IA de la voix d'un vrai chanteur ou d'un camarade, vérifiez les règles d'âge de chaque outil, suivez les règles de votre école sur l'IA en cours de musique, et soyez honnête sur votre façon d'utiliser l'IA."
          ],
          words: [["Générateur de musique IA", "un outil qui crée de la musique à partir d'une description écrite."], ["Auteur", "la personne qui crée une œuvre et peut en avoir le droit d'auteur."], ["Prompt", "ce que vous tapez pour demander quelque chose à une IA."]],
          slides: [
            { title: "L'IA en musique", bullets: ["Propose des accords et des rythmes", "Nettoie les enregistrements", "Trouve des idées de paroles", "Génère des chansons à partir d'un prompt"] },
            { title: "L'IA est votre partenaire", bullets: ["Vous faites les grands choix créatifs", "Un prompt seul ne fait pas de vous l'auteur", "Vos mots et vos sons comptent"] },
            { title: "Règles de base", bullets: ["Pas de chansons copiées", "Pas de copies IA de vraies voix", "Vérifiez les règles d'âge et de l'école", "Soyez honnête sur l'usage de l'IA"] }
          ],
          sources: [{ name: "U.S. Copyright Office : droit d'auteur et intelligence artificielle, partie 2 (protection)", url: "https://www.copyright.gov/newsnet/2025/1060.html" }, { name: "U.S. Copyright Office : droit d'auteur et IA", url: "https://www.copyright.gov/ai/" }],
          tryIt: "Écrivez le nom d'une chanson que vous adorez et trois choses que vous aimez dedans (le rythme, l'ambiance, les paroles). Ce sont des idées dont vous pouvez vous inspirer sans copier la chanson.",
          youCanNow: "citer des façons dont l'IA est utilisée en musique et expliquer les règles pour l'utiliser de façon juste.",
          quickCheck: [
            { objective: "O1", q: "Laquelle est une façon dont l'IA est utilisée en musique ?", options: ["Des outils qui nettoient les enregistrements", "Accorder une guitare à la main", "Imprimer des billets de concert", "Fabriquer des enceintes"], answer: 0, why: "L'IA propose des accords, nettoie les enregistrements, aide pour les paroles et peut générer des chansons." },
            { objective: "O1", q: "Un générateur de chansons crée un morceau entier à partir de votre demande d'une ligne. Pouvez-vous dire que c'est entièrement votre travail ?", options: ["Oui, la demande fait de vous l'auteur", "Oui, si vous le renommez", "Non ; une demande seule ne suffit pas, alors faites vous-même les principaux choix créatifs", "Seulement si personne ne pose la question"], answer: 2, why: "Le Bureau du droit d'auteur des États-Unis (U.S. Copyright Office) a dit que taper des demandes ne suffit pas pour être l'auteur." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Faire votre premier beat dans un studio en ligne gratuit",
          minutes: 6,
          goal: "Ouvrir un studio en ligne gratuit et faire un beat de 4 mesures avec de la batterie et un autre son.",
          text: [
            "BandLab est une application et un site de musique gratuits avec un studio en ligne pour créer de la musique. Vous pouvez l'utiliser dans un navigateur sur bandlab.com ou dans son application depuis le magasin d'applications officiel. Il faut un compte, alors faites-vous aider par un parent ou tuteur pour l'inscription.",
            "La musique se compte en temps et en mesures. La plupart des chansons pop et hip-hop ont 4 temps par mesure. Une boucle est un court morceau de musique qui se répète. Beaucoup de beats commencent par une boucle de batterie, puis ajoutent une basse, puis un autre son comme un clavier ou une guitare.",
            "Les menus changent avec le temps, alors cherchez ces actions : commencer un nouveau projet, ajouter une piste, choisir un instrument ou parcourir les boucles, glisser une boucle sur la piste et appuyer sur lecture. Changez le tempo (la vitesse) selon l'ambiance : plus lent pour du calme, plus rapide pour de l'énergie."
          ],
          steps: ["Avec un parent ou tuteur, inscrivez-vous sur BandLab ou un autre studio en ligne gratuit.", "Commencez un nouveau projet.", "Ajoutez une piste de batterie, avec une boucle ou en tapant un rythme simple.", "Ajoutez une piste de basse ou de clavier qui va avec la batterie.", "Réglez le tempo, faites 4 mesures et appuyez sur lecture."],
          words: [["Beat", "la pulsation régulière de la musique ; aussi un court morceau instrumental."], ["Mesure", "un groupe de temps, en général 4."], ["Boucle", "un court morceau de musique qui se répète."], ["Tempo", "la vitesse de la musique, comptée en battements par minute (BPM)."]],
          slides: [
            { title: "Un studio en ligne gratuit", bullets: ["BandLab : navigateur ou application officielle", "Inscription avec un parent ou tuteur", "13 ans minimum selon les conditions de BandLab"] },
            { title: "Temps, mesures et boucles", bullets: ["La plupart des chansons : 4 temps par mesure", "Une boucle est un court passage qui se répète", "Batterie d'abord, puis basse, puis un autre son"] },
            { title: "Construisez votre beat", bullets: ["Nouveau projet, ajoutez une piste", "Choisissez une boucle ou un instrument", "Réglez le tempo et appuyez sur lecture"] }
          ],
          sources: [{ name: "Conditions d'utilisation de BandLab (âge et permission des parents)", url: "https://bandlabtechnologies.com/policies/bandlab-terms-of-use/" }],
          tryIt: "Faites un beat de 4 mesures avec de la batterie et un autre son. Essayez deux tempos différents et gardez celui qui va avec l'ambiance que vous voulez.",
          youCanNow: "ouvrir un studio en ligne gratuit et construire un court beat avec des pistes et des boucles.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qu'une mesure en musique ?", options: ["Un son fort", "Un type de tambour", "Une application d'enregistrement", "Un groupe de temps, en général 4 dans la pop et le hip-hop"], answer: 3, why: "La musique se compte en temps et en mesures, et la plupart des chansons pop et hip-hop ont 4 temps par mesure." },
            { objective: "O2", q: "Votre beat devrait donner de l'énergie, mais il sonne endormi. Que changez-vous ?", options: ["Vous le rendez plus doux", "Vous accélérez le tempo", "Vous supprimez la batterie", "Vous ajoutez des mesures de silence"], answer: 1, why: "Le tempo est la vitesse : plus rapide pour l'énergie, plus lent pour le calme." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Trouver des idées de paroles avec l'IA",
          minutes: 5,
          goal: "Utiliser l'IA pour trouver un thème et des rimes, puis écrire des paroles avec vos propres mots.",
          text: [
            "Partez d'un thème de votre vie : le premier jour dans une nouvelle école, un job d'été, un ami qui déménage, entrer dans l'équipe. Les vrais sentiments font de meilleures chansons que les idées générales.",
            "Demandez des idées à l'IA, pas une chanson finie : \"Donne-moi 10 images et expressions sur le dernier jour des vacances avant le lycée\" ou \"Donne-moi des mots qui riment avec 'nuit' et 'bruit'.\" Puis choisissez ce qui vous plaît et écrivez les lignes vous-même.",
            "Comptez les syllabes pour que les mots tiennent sur le beat. Lisez vos lignes à voix haute sur le beat. Si une ligne est trop chargée, enlevez des mots. Vos paroles doivent vous ressembler."
          ],
          steps: ["Choisissez un thème de votre propre vie.", "Demandez à l'IA des images, des expressions ou des rimes, pas une chanson entière.", "Écrivez quatre lignes avec vos propres mots.", "Dites-les à voix haute sur votre beat.", "Enlevez ou changez des mots jusqu'à ce que ça tienne."],
          words: [["Paroles", "les mots d'une chanson."], ["Thème", "ce dont parle une chanson."], ["Syllabe", "un battement de son dans un mot ; \"mu-sique\" en a deux."]],
          slides: [
            { title: "Partez de votre vie", bullets: ["Un vrai moment ou un vrai sentiment", "Le précis vaut mieux que le général"] },
            { title: "Des idées, pas une chanson", bullets: ["\"10 images sur...\"", "\"Des rimes avec 'nuit'\"", "Vous choisissez et écrivez"] },
            { title: "Faites que ça tienne", bullets: ["Comptez les syllabes", "Lisez sur le beat", "Allégez les lignes chargées"] }
          ],
          tryIt: "Choisissez un thème, demandez à un assistant d'IA 10 images ou expressions sur ce thème, et écrivez quatre lignes de paroles avec vos mots qui tiennent sur votre beat.",
          youCanNow: "trouver des idées avec l'IA et écrire des paroles originales qui tiennent sur un beat.",
          quickCheck: [
            { objective: "O3", q: "Que devez-vous demander à l'IA quand vous écrivez des paroles ?", options: ["Une chanson finie à copier", "Les paroles de votre ami", "Les paroles d'une chanson célèbre", "Des idées, comme des images, des expressions ou des rimes"], answer: 3, why: "L'IA donne des idées ; vous écrivez les lignes vous-même pour qu'elles vous ressemblent." },
            { objective: "O3", q: "Une ligne semble trop chargée quand vous la dites sur le beat. Que faites-vous ?", options: ["Vous enlevez ou changez des mots jusqu'à ce qu'elle tienne", "Vous accélérez toute la chanson", "Vous ajoutez des mots", "Vous la gardez et rappez plus vite"], answer: 0, why: "Compter les syllabes et enlever des mots aide les lignes à tenir sur le beat." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Faire de la musique avec l'IA",
        questions: [
          { objective: "O1", q: "Selon le U.S. Copyright Office, taper des prompts suffit-il pour être l'auteur de ce que produit l'IA ?", options: ["Oui, toujours", "Non, les prompts seuls ne suffisent pas", "Seulement pour les chansons", "Seulement si vous payez"], answer: 1, why: "Le Bureau a dit que donner des prompts ne suffit pas." },
          { objective: "O1", q: "Un ami veut utiliser une copie IA de la voix d'un chanteur célèbre sur votre morceau. Que faites-vous ?", options: ["L'utiliser", "L'utiliser mais le cacher", "Refuser et utiliser votre voix ou celle d'une personne d'accord", "Copier toute la chanson aussi"], answer: 2, why: "N'utilisez pas la voix d'une vraie personne sans sa permission." },
          { objective: "O2", q: "Qu'est-ce qu'une boucle ?", options: ["Un court morceau de musique qui se répète", "Les paroles d'une chanson", "Un bouton de volume", "Un type de micro"], answer: 0, why: "Les boucles se répètent et servent souvent à construire des beats." },
          { objective: "O2", q: "Que veut dire tempo ?", options: ["Le volume de la chanson", "Le titre de la chanson", "Le nombre de pistes", "La vitesse de la musique"], answer: 3, why: "Le tempo est la vitesse, comptée en battements par minute." },
          { objective: "O3", q: "Quelle demande à l'IA convient le mieux à ce cours ?", options: ["\"Écris toute ma chanson\"", "\"Donne-moi 10 images sur mon premier job d'été\"", "\"Copie un tube\"", "\"Chante avec la voix de mon prof\""], answer: 1, why: "Demandez des idées à l'IA, puis écrivez la chanson vous-même." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Construire, protéger et partager votre morceau",
      lessons: [
        {
          objectives: ["O4"],
          title: "Construire la structure d'une chanson",
          minutes: 5,
          goal: "Organiser votre morceau en intro, couplet et refrain.",
          text: [
            "La plupart des chansons sont faites de parties. L'intro ouvre la chanson. Le couplet raconte l'histoire et change de paroles à chaque fois. Le refrain est la partie accrocheuse qui se répète. Une chanson courte peut suivre l'ordre : intro, couplet, refrain.",
            "Donnez à chaque partie un son un peu différent. Par exemple, l'intro n'a que le clavier, le couplet ajoute la batterie, et le refrain ajoute la basse et une mélodie. Copiez et collez des sections dans le studio pour construire la chanson sur la ligne de temps.",
            "Vous pouvez demander à l'IA : \"J'ai un beat de 4 mesures à 90 BPM. Comment organiser une chanson de 60 secondes avec une intro, un couplet et un refrain ?\" Puis essayez ses idées et faites confiance à vos oreilles."
          ],
          steps: ["Prévoyez l'ordre : intro, couplet, refrain.", "Copiez votre beat pour faire chaque section.", "Enlevez ou ajoutez des sons pour que chaque partie soit différente.", "Placez vos paroles sur le couplet et le refrain.", "Écoutez le tout et ajustez."],
          words: [["Intro", "le début d'une chanson."], ["Couplet", "la partie qui raconte l'histoire ; les paroles changent à chaque fois."], ["Refrain", "la partie accrocheuse qui se répète."], ["Arrangement", "la façon dont les parties d'une chanson sont ordonnées et superposées."]],
          slides: [
            { title: "Les parties d'une chanson", bullets: ["Intro : ouvre la chanson", "Couplet : raconte l'histoire", "Refrain : la partie accrocheuse qui revient"] },
            { title: "Rendez chaque partie différente", bullets: ["Intro : peu de sons", "Couplet : ajoutez la batterie", "Refrain : ajoutez basse et mélodie"] },
            { title: "Demandez à l'IA, croyez vos oreilles", bullets: ["Demandez des idées d'arrangement", "Essayez-les", "Gardez ce qui vous plaît"] }
          ],
          tryIt: "Organisez votre beat en intro, couplet et refrain d'environ 60 secondes. Ajoutez vos quatre lignes de paroles en notes écrites, ou enregistrez-les si vous voulez.",
          youCanNow: "organiser un morceau en parties claires qui sonnent chacune différemment.",
          quickCheck: [
            { objective: "O4", q: "À quoi sert l'intro d'une chanson ?", options: ["À répéter la partie accrocheuse", "À finir la chanson", "À ouvrir la chanson", "À raconter toute l'histoire"], answer: 2, why: "L'intro ouvre la chanson avant le couplet et le refrain." },
            { objective: "O4", q: "Votre intro, votre couplet et votre refrain sonnent tous pareil. Que faites-vous ?", options: ["Vous enlevez ou ajoutez des sons pour que chaque partie soit différente", "Vous mettez chaque partie plus fort", "Vous supprimez le refrain", "Vous utilisez une autre chanson"], answer: 0, why: "Changer les sons qui jouent dans chaque partie rend la structure claire." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Droit d'auteur, samples et voix",
          minutes: 5,
          goal: "Décider si un son ou une voix peut être utilisé dans votre morceau.",
          text: [
            "Le droit d'auteur protège les œuvres originales comme les chansons et les enregistrements. Selon le U.S. Copyright Office, une œuvre est protégée dès qu'elle est créée et fixée sous une forme que les gens peuvent entendre ou voir, et l'enregistrement officiel est en général facultatif. Donc la plupart des chansons que vous entendez sont protégées, et la chanson que vous créez est à vous.",
            "Utiliser un morceau de l'enregistrement de quelqu'un d'autre s'appelle faire un sample. Ne samplez pas de chansons sauf si vous avez la permission ou si le son vient d'une bibliothèque qui dit que vous pouvez l'utiliser, comme les boucles de votre studio. Lisez les règles de l'outil.",
            "Les voix sont personnelles. Ne créez pas et n'utilisez pas de copie par IA de la voix d'une vraie personne, que ce soit une star, un professeur ou un camarade, sans sa permission claire. Si vous n'êtes pas sûr que quelque chose est permis, laissez-le de côté ou demandez à un professeur ou à un parent."
          ],
          steps: ["Demandez-vous : ai-je créé ce son, ou l'outil dit-il que je peux l'utiliser ?", "S'il vient de la chanson de quelqu'un d'autre, laissez-le de côté sauf si vous avez la permission.", "N'utilisez jamais de copie par IA de la voix d'une vraie personne sans permission.", "En cas de doute, laissez-le de côté ou demandez à un adulte de confiance."],
          words: [["Droit d'auteur", "le droit légal d'un créateur de contrôler les copies de son œuvre."], ["Sample", "un morceau de l'enregistrement de quelqu'un d'autre utilisé dans un nouveau morceau."], ["Clone de voix", "une copie par IA de la voix d'une vraie personne."]],
          slides: [
            { title: "Les bases du droit d'auteur", bullets: ["Protège chansons et enregistrements", "Commence quand l'œuvre est créée et fixée", "L'enregistrement est en général facultatif"] },
            { title: "Les samples", bullets: ["Pas de sample de chanson sans permission", "Boucles du studio : lisez les règles de l'outil"] },
            { title: "Les voix", bullets: ["Pas de copie IA de vraies personnes sans accord", "Stars, profs et camarades compris", "Un doute ? Laissez de côté ou demandez"] }
          ],
          sources: [{ name: "U.S. Copyright Office : questions fréquentes sur les bases du droit d'auteur", url: "https://www.copyright.gov/help/faq/faq-general.html" }, { name: "U.S. Copyright Office : droit d'auteur et intelligence artificielle", url: "https://www.copyright.gov/ai/" }],
          tryIt: "Listez chaque son de votre morceau et d'où il vient : créé par vous, boucle du studio ou autre chose. Enlevez tout ce dont vous ne pouvez pas dire qu'il est permis.",
          youCanNow: "vérifier chaque son et chaque voix de votre morceau et garder seulement ce que vous avez le droit d'utiliser.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce que sampler ?", options: ["Enregistrer votre propre voix", "Utiliser un morceau de l'enregistrement de quelqu'un d'autre dans un nouveau morceau", "Changer le tempo", "Exporter une chanson"], answer: 1, why: "Sampler, c'est utiliser une partie de l'enregistrement de quelqu'un d'autre." },
            { objective: "O5", q: "Vous avez trouvé un son génial en ligne, mais vous ne savez pas qui l'a fait ni si vous pouvez l'utiliser. Que faites-vous ?", options: ["Vous l'utilisez ; personne ne le remarquera", "Vous l'accélérez pour qu'il sonne différemment", "Vous vous en attribuez le mérite", "Vous le laissez de côté ou demandez à un adulte de confiance"], answer: 3, why: "Si vous ne pouvez pas dire qu'un son est permis, laissez-le de côté ou demandez." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mixer, exporter et partager en sécurité",
          minutes: 5,
          goal: "Équilibrer votre morceau, l'exporter et le partager avec des crédits honnêtes.",
          text: [
            "Mixer, c'est régler le volume de chaque piste pour qu'aucune ne couvre les autres. Baissez ce qui est trop fort et écoutez à la fois au casque et sur le haut-parleur d'un téléphone.",
            "Ensuite, exportez ou enregistrez le morceau en fichier audio avec l'option d'export ou de téléchargement du studio. Écrivez une courte note de crédits : votre nom ou nom d'artiste, le titre, et comment vous avez utilisé l'IA, par exemple : \"L'IA m'a aidé à trouver des idées de paroles ; toute la musique et les paroles ont été écrites et arrangées par moi.\"",
            "Partagez en sécurité : publiez seulement là où votre famille est d'accord, gardez votre nom complet, votre école et votre lieu de vie privés si vous publiez en public, et réfléchissez avant d'activer les commentaires. Si votre morceau est pour l'école, suivez les règles de votre professeur sur l'IA."
          ],
          steps: ["Équilibrez le volume de chaque piste.", "Écoutez au casque et sur un haut-parleur de téléphone.", "Exportez ou enregistrez le morceau en fichier audio.", "Écrivez une note de crédits qui dit comment vous avez utilisé l'IA.", "Partagez seulement là où votre famille est d'accord, sans détails personnels."],
          words: [["Mixage", "l'équilibre du volume de chaque piste."], ["Exporter", "enregistrer votre projet dans un fichier que d'autres peuvent écouter."], ["Note de crédits", "une courte note qui dit qui a fait quoi."]],
          slides: [
            { title: "Mixez", bullets: ["Équilibrez le volume de chaque piste", "Vérifiez au casque et sur un téléphone"] },
            { title: "Exportez et créditez", bullets: ["Enregistrez en fichier audio", "Titre et nom d'artiste", "Dites comment vous avez utilisé l'IA"] },
            { title: "Partagez en sécurité", bullets: ["Là où votre famille est d'accord", "Nom, école et lieu restent privés", "Suivez les règles de l'école sur l'IA"] }
          ],
          tryIt: "Tâche finale : terminez votre morceau original de 60 secondes avec un beat, une intro, un couplet, un refrain et vos propres paroles. Vérifiez que chaque son est permis, exportez-le et écrivez une note de crédits qui dit comment vous avez utilisé l'IA.",
          youCanNow: "créer, mixer, exporter et partager un morceau original de façon juste et sûre, avec des crédits honnêtes.",
          quickCheck: [
            { objective: "O6", q: "Que veut dire mixer ?", options: ["Régler le volume de chaque piste pour qu'aucune ne couvre les autres", "Ajouter des paroles", "Choisir le titre de la chanson", "Mettre la chanson en ligne"], answer: 0, why: "Le mixage équilibre le volume de chaque piste." },
            { objective: "O6", q: "Vous voulez publier votre morceau en public. Que gardez-vous privé ?", options: ["Le titre de la chanson", "Votre nom d'artiste", "Votre nom complet, votre école et votre lieu de vie", "La façon dont vous avez utilisé l'IA"], answer: 2, why: "Partagez en sécurité en gardant vos informations personnelles privées et en publiant seulement là où votre famille est d'accord." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Construire, protéger et partager votre morceau",
        questions: [
          { objective: "O4", q: "Quelle partie d'une chanson est la partie accrocheuse qui se répète ?", options: ["L'intro", "Le couplet", "L'export", "Le refrain"], answer: 3, why: "Le refrain est le passage accrocheur qui revient." },
          { objective: "O5", q: "Quand commence la protection du droit d'auteur, selon le U.S. Copyright Office ?", options: ["Quand une œuvre est créée et fixée sous une forme qu'on peut entendre ou voir", "Seulement après l'enregistrement officiel", "Après 10 ans", "Seulement pour les artistes célèbres"], answer: 0, why: "La protection commence quand l'œuvre est créée et fixée." },
          { objective: "O5", q: "Vous voulez utiliser 5 secondes d'un tube dans votre beat. Que faites-vous ?", options: ["L'utiliser ; c'est court", "Le laisser de côté sauf si vous avez la permission", "Changer la vitesse pour que personne ne remarque", "Citer le chanteur et l'utiliser"], answer: 1, why: "Sampler une chanson protégée demande une permission." },
          { objective: "O6", q: "Qu'est-ce que le mixage ?", options: ["Écrire des paroles", "S'inscrire sur une application", "Équilibrer le volume de chaque piste", "Choisir un thème"], answer: 2, why: "Le mixage équilibre le volume de chaque partie." },
          { objective: "O6", q: "Quelle note de crédits est honnête ?", options: ["\"Aucune IA utilisée\" alors qu'elle l'a été", "\"L'IA m'a aidé à trouver des idées de paroles ; musique et paroles par moi\"", "Aucune note pour un travail scolaire", "\"Fait par un producteur célèbre\""], answer: 1, why: "Elle dit clairement comment l'IA a été utilisée." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Production musicale avec l'IA",
    questions: [
      { objective: "O1", q: "Laquelle est une façon d'utiliser l'IA en musique ?", options: ["Proposer des accords ou des rythmes de batterie", "Remplacer vos oreilles", "Signer des contrats de disque pour vous", "Posséder vos chansons"], answer: 0, why: "Les outils d'IA peuvent proposer des idées musicales." },
      { objective: "O1", q: "Dans ce cours, le rôle de l'IA est d'être votre :", options: ["Prête-plume", "Partenaire pour trouver des idées", "Patron", "Avocat"], answer: 1, why: "C'est vous qui faites les grands choix créatifs." },
      { objective: "O1", q: "Qu'a dit le U.S. Copyright Office sur les prompts seuls ?", options: ["Ils font de vous l'auteur", "Ils sont illégaux", "Ils ne suffisent pas pour être l'auteur", "Ils sont réservés aux adultes"], answer: 2, why: "Donner des prompts ne suffit pas pour être auteur." },
      { objective: "O2", q: "Selon les conditions de BandLab, les utilisateurs doivent avoir au moins :", options: ["8 ans", "10 ans", "21 ans", "13 ans, avec la permission d'un parent avant 18 ans"], answer: 3, why: "Les conditions disent 13 ans et plus, avec la permission d'un parent ou tuteur pour les mineurs." },
      { objective: "O2", q: "La plupart des chansons pop et hip-hop ont combien de temps par mesure ?", options: ["1", "4", "12", "100"], answer: 1, why: "Quatre temps par mesure, c'est le plus courant." },
      { objective: "O2", q: "Un bon ordre pour construire un beat est :", options: ["Seulement la voix", "La batterie, puis la basse, puis un autre son", "Exporter d'abord", "Dix sons d'un coup"], answer: 1, why: "Commencer par la batterie et la basse donne une base solide." },
      { objective: "O2", q: "Vous voulez une ambiance calme et détendue. Vous devriez sans doute :", options: ["Mettre un tempo très rapide", "Ajouter des alarmes fortes", "Utiliser un tempo plus lent", "Supprimer la batterie"], answer: 2, why: "Les tempos lents semblent en général plus calmes." },
      { objective: "O3", q: "Quel thème fera sans doute une chanson plus forte ?", options: ["\"Des choses\"", "\"La vie en général\"", "\"Il se passe des trucs\"", "\"Vider mon casier le dernier jour du collège\""], answer: 3, why: "Les moments précis et réels donnent des paroles plus fortes." },
      { objective: "O3", q: "Une bonne demande à l'IA pour des paroles est :", options: ["\"Donne-moi des mots qui riment avec 'nuit'\"", "\"Écris toute la chanson et je la signerai\"", "\"Copie les paroles d'une chanson célèbre\"", "\"Utilise le journal intime de mon ami\""], answer: 0, why: "Demander des idées brutes garde l'écriture à vous." },
      { objective: "O3", q: "Une ligne est trop chargée pour le beat. Que faites-vous ?", options: ["Accélérer toute la chanson", "Enlever des mots jusqu'à ce que ça tienne", "Ajouter des mots", "Supprimer le refrain"], answer: 1, why: "Enlever des mots aide les lignes à suivre le rythme." },
      { objective: "O4", q: "Le couplet d'une chanson :", options: ["N'a jamais de paroles", "Est pareil à chaque fois", "Raconte l'histoire, avec des paroles qui changent", "Est le fichier exporté"], answer: 2, why: "Les couplets portent l'histoire et changent de paroles." },
      { objective: "O4", q: "Comment faire ressortir le refrain ?", options: ["Le rendre silencieux", "Supprimer le beat", "Utiliser les mêmes sons que l'intro", "Ajouter des sons, comme la basse et une mélodie"], answer: 3, why: "Ajouter des couches rend le refrain plus grand." },
      { objective: "O4", q: "L'IA vous donne des idées d'arrangement. Ensuite, vous :", options: ["Les essayez et faites confiance à vos oreilles", "Devez toutes les utiliser", "Devez toutes les ignorer", "Les publiez comme votre chanson"], answer: 0, why: "C'est vous qui faites les choix créatifs." },
      { objective: "O5", q: "L'enregistrement officiel est-il obligatoire pour que votre chanson soit protégée ?", options: ["Oui, toujours", "Non, l'enregistrement est en général facultatif", "Seulement le week-end", "Seulement pour les chansons d'école"], answer: 1, why: "Le Copyright Office dit que l'enregistrement est en général facultatif." },
      { objective: "O5", q: "Un sample est :", options: ["Un essai gratuit", "Un type de micro", "Un morceau de l'enregistrement de quelqu'un d'autre utilisé dans un nouveau morceau", "Une idée de paroles"], answer: 2, why: "Sampler, c'est utiliser une partie d'un enregistrement existant." },
      { objective: "O5", q: "La voix d'un camarade pourrait être clonée par IA pour votre refrain. Quelle est la règle ?", options: ["Le faire en surprise", "Le faire si ça sonne bien", "Le faire seulement sur les ordinateurs de l'école", "Seulement avec sa permission claire"], answer: 3, why: "Les voix sont personnelles : obtenez une permission claire ou ne les utilisez pas." },
      { objective: "O5", q: "Vous n'êtes pas sûr qu'un son est permis. Le choix le plus sûr est :", options: ["Le laisser de côté ou demander à un adulte de confiance", "L'utiliser en espérant", "Le cacher dans le mixage", "Renommer le fichier"], answer: 0, why: "En cas de doute, laissez-le de côté ou demandez." },
      { objective: "O6", q: "Pourquoi écouter au casque et sur un haut-parleur de téléphone ?", options: ["La loi l'exige", "Pour vérifier que le mixage sonne bien sur différents appareils", "Pour le rendre plus fort", "Pour l'exporter"], answer: 1, why: "Un mixage sonne différemment selon l'appareil." },
      { objective: "O6", q: "Quand vous publiez votre morceau en public, vous gardez privés :", options: ["Le titre de la chanson", "Votre nom d'artiste", "Votre nom complet, votre école et votre lieu de vie", "Le style musical"], answer: 2, why: "Les détails personnels restent privés en ligne." },
      { objective: "O6", q: "Votre morceau est pour le cours de musique. Pour l'IA, vous devez :", options: ["Cacher que vous l'avez utilisée", "Demander à l'IA d'écrire une note disant qu'il n'y a pas d'IA", "Ne pas faire de note de crédits", "Suivre les règles du professeur et dire comment vous l'avez utilisée"], answer: 3, why: "L'honnêteté sur l'usage de l'IA fait partie des règles de l'école." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      4,
      6,
      8,
      10,
      13,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Beat",
        objective: "O2",
        notYet: "Pas de batterie, ou un seul son.",
        meets: "Un beat avec de la batterie et au moins un autre son, à un tempo qui va avec l'ambiance.",
        exceeds: "L'apprenant peut expliquer pourquoi il a choisi ce tempo."
      },
      {
        name: "Structure de la chanson",
        objective: "O4",
        notYet: "Pas d'intro, de couplet ou de refrain clairs.",
        meets: "Environ 60 secondes avec une intro, un couplet et un refrain qui sonnent un peu différemment.",
        exceeds: "Le refrain ressort clairement, par exemple avec de la basse ou une mélodie en plus."
      },
      {
        name: "Paroles personnelles",
        objective: "O3",
        notYet: "Les paroles manquent ou sont copiées de l'IA.",
        meets: "Au moins quatre lignes avec les propres mots de l'apprenant, qui tiennent sur le beat.",
        exceeds: "Les paroles partent d'un vrai thème de la vie de l'apprenant et montrent des idées de l'IA qui ont été modifiées."
      },
      {
        name: "Original et permis",
        objective: "O5",
        notYet: "Utilise une chanson copiée, un sample non autorisé ou une copie IA d'une vraie voix.",
        meets: "Chaque son est créé par l'apprenant ou permis par le studio, et aucune vraie voix n'est copiée.",
        exceeds: "Comprend une liste de chaque son et de sa provenance."
      },
      {
        name: "Export et crédits",
        objective: "O6",
        notYet: "Pas exporté, ou pas de note de crédits.",
        meets: "Exporté en fichier audio avec une note de crédits qui dit comment l'IA a été utilisée.",
        exceeds: "Le mixage a été écouté au casque et sur le haut-parleur d'un téléphone, puis ajusté."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui créent un deuxième morceau original dans les 30 jours (sondage de suivi)",
      "Les apprenants qui partagent un morceau en sécurité avec leur famille, une classe ou lors d'une présentation d'un programme jeunesse",
      "Les apprenants qui rejoignent un cours, un club ou un programme de musique dans les 90 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur de l'école ou de la bibliothèque avec Internet",
      "Un casque ou des écouteurs",
      "BandLab ou un autre studio en ligne gratuit, avec l'accord d'un parent ou tuteur pour les moins de 18 ans",
      "Un assistant d'IA gratuit que l'apprenant a le droit d'utiliser",
      "Environ 60 minutes en tout : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Vérifiez l'âge minimum de chaque outil avant le cours et recueillez l'accord des parents ou tuteurs pour les inscriptions ; préparez un compte de démonstration si besoin.",
      "Prévoyez des casques pour que les apprenants puissent travailler côte à côte dans une salle.",
      "Relisez la liste des sons de chaque apprenant avant l'export pour repérer les chansons copiées, les samples non autorisés ou les voix clonées.",
      "Organisez une séance d'écoute seulement dans le groupe, avec l'accord des familles avant toute publication en public.",
      "Évaluez le morceau avec la grille et donnez un retour sur une ligne « Pas encore » à la fois."
    ]
  }
};
