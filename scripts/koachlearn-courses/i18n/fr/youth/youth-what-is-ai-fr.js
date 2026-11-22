"use strict";

// Koach Learn course (French translation of youth/youth-what-is-ai.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "youth-what-is-ai-fr",
  lang: "fr",
  translationOf: "youth-what-is-ai",
  category: "Youth",
  name: "C'est quoi l'IA ? (pour les jeunes)",
  skills: "Expliquer ce qu'est l'IA, Repérer l'IA dans les applications de tous les jours, Respecter les âges minimum et les règles de l'école, Poser une question claire à un assistant d'IA, Vérifier une réponse de l'IA",
  outcome: "expliquer avec vos propres mots ce qu'est l'IA, la repérer dans les applications que vous utilisez déjà, et utiliser correctement un assistant d'IA gratuit : en respectant son âge minimum et les règles de votre école, avec une question claire, et en vérifiant la réponse avant de lui faire confiance.",
  about: [
    "L'IA est déjà dans votre téléphone, vos jeux, votre application de musique et vos outils scolaires. Ce cours s'adresse aux jeunes d'environ 13 à 18 ans qui veulent comprendre ce qu'elle est vraiment et comment bien l'utiliser.",
    "Vous apprendrez ce qu'est l'IA et ce qu'elle n'est pas, où elle se cache dans les applications que vous utilisez chaque jour, comment respecter les âges minimum et les règles de votre école sur l'IA, comment poser une question claire, et comment vérifier une réponse avant d'y croire.",
    "Chaque leçon dure environ cinq minutes. Lisez-la, regardez les diapositives, puis faites la tâche \"Essayez maintenant\". Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Faites une page \"L'IA expliquée\" pour un élève plus jeune ou un ami : dites ce qu'est l'IA en deux phrases, citez trois applications que vous utilisez qui contiennent de l'IA, et ajoutez une question que vous avez posée à un assistant d'IA, sa réponse, et comment vous l'avez vérifiée.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adolescents d'environ 13 à 18 ans, scolarisés ou non, qui utilisent déjà des téléphones, des jeux et des applications et veulent comprendre ce qu'est vraiment l'IA et comment bien l'utiliser.",
    startingPoint: "Ils utilisent chaque jour des applications de musique, de vidéo, de jeux et de messagerie, et ont parfois essayé un assistant d'IA. La plupart ne savent pas expliquer comment fonctionne l'IA, où elle se cache dans leurs applications, ni comment vérifier ce qu'elle dit.",
    gap: "L'IA est dans les outils que les jeunes utilisent pour l'école et les loisirs, mais beaucoup s'en servent sans connaître ses âges minimum, les règles de leur école, ni le fait qu'elle peut se tromper. Apprendre à poser une question claire, à vérifier les réponses et à rester en sécurité les aide à mieux apprendre, à éviter les ennuis pour triche et à se protéger, eux et les autres.",
    constraints: [
      "Âges minimum : beaucoup d'outils d'IA demandent d'avoir au moins 13 ans, et certains demandent l'accord d'un parent ou tuteur avant 18 ans",
      "Les règles sur l'IA varient selon l'école et selon le professeur",
      "Appareils : un téléphone ou un ordinateur de l'école ; certains ont peu d'Internet à la maison",
      "Vie privée et sécurité : pas d'informations privées ni de photos de vraies personnes dans les outils d'IA",
      "Des mots simples et des leçons courtes pour des niveaux de lecture variés"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avec vos propres mots", action: "expliquer ce qu'est l'IA, comment elle apprend à partir d'exemples et pourquoi elle peut se tromper", standard: "en deux phrases qu'un élève plus jeune peut suivre" },
    { id: "O2", condition: "Avec les applications de votre téléphone ou d'un ordinateur de l'école", action: "repérer où l'IA propose, trie, devine ou crée quelque chose, y compris l'IA générative", standard: "en citant au moins trois applications et ce que fait l'IA dans chacune" },
    { id: "O3", condition: "Avant d'utiliser un nouvel outil d'IA à la maison ou à l'école", action: "vérifier l'âge minimum de l'outil et les règles de votre école sur l'IA, et montrer l'application à un parent ou tuteur", standard: "en utilisant la page officielle d'aide ou de conditions de l'outil" },
    { id: "O4", condition: "À partir de quelque chose que vous voulez apprendre", action: "écrire une demande qui dit ce que vous voulez, donne un peu de contexte et précise la forme de réponse voulue", standard: "pour que la première réponse soit utile" },
    { id: "O5", condition: "Face à une réponse de l'IA qui contient des faits", action: "vérifier les noms, les dates et les chiffres dans une source fiable", standard: "en notant où vous avez vérifié chaque fait" },
    { id: "O6", condition: "Quand vous écrivez une demande ou voyez un contenu fait par l'IA", action: "garder les informations privées pour vous, refuser de faire des faux de vraies personnes et remettre en question les réponses injustes", standard: "sans partager aucune information privée et en parlant des faux blessants à un adulte de confiance" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Ce qu'est l'IA et où vous la rencontrez",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce qu'est l'IA, avec des mots simples",
          minutes: 4,
          goal: "Expliquer en deux phrases ce qu'est l'IA et ce qu'elle n'est pas.",
          text: [
            "IA veut dire intelligence artificielle. Ce sont des programmes informatiques qui font des choses qui demandent d'habitude la réflexion d'une personne, comme reconnaître un visage, comprendre la parole, proposer une chanson ou écrire une réponse.",
            "La plupart des IA apprennent à partir d'énormes quantités d'exemples. Un programme qui a vu des millions de photos de chats peut deviner si une nouvelle photo contient un chat. Un programme qui a lu d'énormes quantités de textes peut écrire des phrases qui ressemblent à celles d'une personne.",
            "L'IA n'est pas vivante, elle n'a pas de sentiments, et elle ne comprend pas vraiment le monde comme vous. Elle trouve des régularités et fait sa meilleure supposition. C'est pour cela qu'elle peut être très utile et quand même se tromper."
          ],
          words: [["IA", "intelligence artificielle : des programmes informatiques qui font des tâches qui demandent d'habitude la réflexion humaine."], ["Régularité", "quelque chose qui se répète d'une façon qu'un programme peut apprendre et utiliser pour deviner."]],
          slides: [
            { title: "IA = intelligence artificielle", bullets: ["Des programmes qui font des tâches de réflexion", "Reconnaître des visages, comprendre la parole, écrire des réponses"] },
            { title: "Comment elle apprend", bullets: ["Elle étudie d'énormes quantités d'exemples", "Elle trouve des régularités", "Elle fait sa meilleure supposition"] },
            { title: "Ce que l'IA N'EST PAS", bullets: ["Pas vivante, pas de sentiments", "Elle ne comprend pas comme vous", "Elle peut se tromper, même quand elle a l'air sûre"] }
          ],
          tryIt: "Écrivez deux phrases qui expliquent l'IA à un enfant de dix ans. N'utilisez aucun mot qu'il ne connaîtrait pas. Lisez-les à quelqu'un et demandez si c'était clair.",
          youCanNow: "expliquer en deux phrases simples ce qu'est l'IA et ce qu'elle n'est pas.",
          quickCheck: [
            { objective: "O1", q: "Que veut dire « l'IA trouve des modèles » ?", options: ["Elle ressent ce que vous ressentez", "Elle sait tout sur le monde", "Elle apprend à partir de nombreux exemples et fait sa meilleure supposition", "Elle lit dans vos pensées"], answer: 2, why: "L'IA apprend à partir d'énormément d'exemples et devine à partir des modèles qu'elle y a trouvés." },
            { objective: "O1", q: "Votre ami dit : « L'IA est vivante et elle me comprend. » Que lui répondez-vous ?", options: ["L'IA n'est pas vivante et n'a pas de sentiments ; elle devine à partir de modèles", "Oui, elle a des sentiments comme une personne", "Seule l'IA payante est vivante", "L'IA ne marche que sur les téléphones"], answer: 0, why: "L'IA est un programme qui trouve des modèles ; elle n'est pas vivante et ne comprend pas vraiment." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Repérer l'IA dans les applications que vous utilisez déjà",
          minutes: 5,
          goal: "Citer au moins trois endroits où l'IA apparaît dans vos applications de tous les jours.",
          text: [
            "Vous utilisez sans doute l'IA chaque jour sans l'appeler ainsi. Les applications de musique et de vidéo proposent quoi écouter ou regarder ensuite d'après ce que vous avez aimé avant. C'est l'IA qui cherche des régularités dans vos choix.",
            "Les appareils photo des téléphones utilisent l'IA pour rendre les photos plus nettes et flouter l'arrière-plan. Les claviers devinent votre prochain mot. Les cartes devinent la circulation. Les jeux utilisent l'IA pour contrôler les personnages contre qui vous jouez. Les messageries filtrent les spams.",
            "Les assistants conversationnels, comme ChatGPT, Microsoft Copilot et Google Gemini, sont une forme plus récente appelée IA générative. Au lieu de seulement trier ou proposer, ils créent du nouveau texte, des images ou du son."
          ],
          steps: ["Ouvrez une application que vous utilisez beaucoup.", "Demandez-vous : est-ce qu'elle me propose, trie, devine ou crée quelque chose ?", "Si oui, c'est probablement de l'IA.", "Notez le nom de l'application et ce que fait l'IA."],
          words: [["Recommandation", "une suggestion qu'une application fait d'après ce que vous avez fait avant."], ["IA générative", "une IA qui crée des choses nouvelles, comme du texte, des images ou de la musique."]],
          slides: [
            { title: "L'IA que vous utilisez déjà", bullets: ["Suggestions de musique et de vidéos", "Retouches photo de l'appareil du téléphone", "Le clavier qui devine le mot suivant", "Personnages de jeux et filtres anti-spam"] },
            { title: "Demandez-vous", bullets: ["L'application propose, trie, devine ou crée ?", "Si oui, c'est probablement de l'IA"] },
            { title: "L'IA générative", bullets: ["Crée du nouveau texte, des images ou du son", "Exemples : ChatGPT, Copilot, Gemini"] }
          ],
          tryIt: "Parcourez les applications de votre téléphone ou d'un ordinateur de l'école. Listez-en trois qui utilisent l'IA et écrivez une ligne pour chacune qui dit ce que fait l'IA, par exemple \"Application de musique : propose des chansons qui pourraient me plaire\".",
          youCanNow: "repérer l'IA dans les applications de tous les jours et dire ce qu'elle fait.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qui différencie l'IA générative des chansons proposées par une application de musique ?", options: ["Elle ne fait que trier les e-mails", "Elle crée du nouveau texte, de nouvelles images ou de nouveaux sons", "Elle ne marche que hors ligne", "Elle n'utilise jamais de modèles"], answer: 1, why: "L'IA générative crée du nouveau contenu au lieu de seulement trier ou proposer." },
            { objective: "O2", q: "Vous voulez savoir si une application utilise l'IA. Quelle question aide le plus ?", options: ["L'application est-elle gratuite ?", "L'icône est-elle bleue ?", "Depuis quand l'application existe-t-elle ?", "Est-ce qu'elle me propose, trie, devine ou crée quelque chose ?"], answer: 3, why: "Si une application propose, trie, devine ou crée quelque chose pour vous, l'IA est sans doute à l'œuvre." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Âges minimum, règles de l'école et votre parent ou tuteur",
          minutes: 5,
          goal: "Vérifier si vous avez le droit d'utiliser un outil d'IA, à la maison et à l'école, avant de vous inscrire.",
          text: [
            "Chaque outil d'IA a des règles sur qui peut l'utiliser. Beaucoup exigent d'avoir au moins 13 ans, et certains demandent l'autorisation d'un parent ou tuteur si vous avez moins de 18 ans. Google, par exemple, dit qu'il faut avoir 13 ans ou plus (ou l'âge qui s'applique dans votre pays) pour utiliser Gemini avec un compte personnel ou scolaire. Les règles changent, donc lisez les conditions ou la page d'aide de l'outil.",
            "Votre école a aussi des règles. Certains cours autorisent l'IA pour trouver des idées mais pas pour écrire votre travail. Certains l'interdisent pour les contrôles. L'utiliser contre les règles peut compter comme de la triche, même sans le vouloir. En cas de doute, demandez à votre professeur avant de l'utiliser.",
            "Avant de créer un compte sur une nouvelle application, parlez-en avec un parent ou tuteur. Montrez-lui l'application, son âge minimum et les informations qu'elle demande. Beaucoup d'écoles vous donnent aussi un compte scolaire pour les outils approuvés ; utilisez-le pour le travail scolaire."
          ],
          steps: ["Trouvez l'âge minimum de l'outil sur sa page d'aide ou ses conditions officielles.", "Vérifiez les règles sur l'IA de votre école et de votre professeur.", "Montrez l'application à un parent ou tuteur avant de vous inscrire.", "Utilisez votre compte scolaire pour les outils scolaires approuvés."],
          words: [["Conditions d'utilisation", "les règles qu'une entreprise fixe pour utiliser son application ou son site."], ["Intégrité scolaire", "être honnête dans son travail scolaire : le travail rendu montre ce que vous avez fait."]],
          sources: [{ name: "Aide Google Gemini : ce qu'il faut pour se connecter (âge minimum)", url: "https://support.google.com/gemini/answer/13278668" }],
          slides: [
            { title: "Vérifiez d'abord l'âge minimum", bullets: ["Beaucoup d'outils d'IA exigent 13 ans ou plus", "Certains demandent l'accord d'un parent avant 18 ans", "Lisez la page d'aide ou les conditions de l'outil"] },
            { title: "Connaissez les règles de l'école", bullets: ["Certains cours autorisent l'IA seulement pour les idées", "Certains l'interdisent pour les contrôles", "Un doute ? Demandez d'abord au professeur"] },
            { title: "Impliquez un parent ou tuteur", bullets: ["Montrez-lui l'application avant de vous inscrire", "Regardez quelles informations elle demande", "Utilisez votre compte scolaire pour l'école"] }
          ],
          tryIt: "Choisissez un assistant d'IA. Trouvez son âge minimum sur la page d'aide ou les conditions de l'entreprise. Puis notez la règle de votre école ou d'un professeur sur l'IA. Montrez les deux à un parent ou tuteur.",
          youCanNow: "vérifier l'âge minimum d'un outil d'IA et les règles de votre école sur l'IA, et impliquer un parent ou tuteur avant de vous inscrire.",
          quickCheck: [
            { objective: "O3", q: "Où trouver le mieux l'âge minimum d'un outil d'IA ?", options: ["Sur la page d'aide ou de conditions de l'outil lui-même", "Dans ce que suppose un ami", "Dans un commentaire au hasard sous une vidéo", "Dans la note en étoiles de l'application"], answer: 0, why: "Les règles changent, alors lisez-les sur la page d'aide ou de conditions de l'entreprise elle-même." },
            { objective: "O3", q: "Vous ne savez pas si l'IA est autorisée pour un projet de classe. Que faites-vous ?", options: ["Vous l'utilisez en espérant que ça ira", "Vous demandez à un ami d'une autre école", "Vous l'utilisez sans le dire à personne", "Vous demandez à votre professeur avant de l'utiliser"], answer: 3, why: "Les règles varient selon l'école, et utiliser l'IA contre ces règles peut compter comme de la triche, alors demandez d'abord." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Ce qu'est l'IA et où vous la rencontrez",
        questions: [
          { objective: "O1", q: "Quelle phrase décrit le mieux l'IA ?", options: ["Un robot qui a des sentiments", "Des programmes informatiques qui font des tâches qui demandent d'habitude la réflexion humaine", "Une sorte de chargeur de téléphone", "Un site qui a toujours raison"], answer: 1, why: "L'IA, ce sont des programmes qui font des tâches de réflexion comme reconnaître, proposer et écrire." },
          { objective: "O1", q: "Comment apprennent la plupart des IA ?", options: ["En allant à l'école", "En lisant dans vos pensées", "Elles n'apprennent jamais", "En étudiant d'énormes quantités d'exemples et en trouvant des régularités"], answer: 3, why: "L'IA trouve des régularités dans de grands ensembles d'exemples et s'en sert pour deviner." },
          { objective: "O2", q: "Votre application de musique vous propose une nouvelle chanson qui pourrait vous plaire. C'est :", options: ["L'IA qui fait une recommandation", "Un virus", "Une règle du professeur", "Un appel téléphonique"], answer: 0, why: "Les suggestions basées sur vos choix passés sont un usage courant de l'IA." },
          { objective: "O3", q: "Vous voulez essayer une nouvelle application d'IA. Que faites-vous d'abord ?", options: ["Vous inscrire avec n'importe quelle date de naissance", "Lui donner votre mot de passe scolaire", "Vérifier son âge minimum et la montrer à un parent ou tuteur", "La télécharger depuis une publicité"], answer: 2, why: "L'âge minimum et l'accord d'un parent ou tuteur passent avant l'inscription." },
          { objective: "O3", q: "Votre professeur dit que l'IA est permise pour trouver des idées mais pas pour écrire votre rédaction. Vous :", options: ["Faites quand même écrire la rédaction par l'IA", "Ignorez la règle", "Utilisez l'IA seulement pour les idées, puis écrivez la rédaction vous-même", "Copiez la rédaction d'un ami"], answer: 2, why: "Suivre la règle du professeur garde votre travail honnête." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Utiliser un assistant d'IA intelligemment",
      lessons: [
        {
          objectives: ["O4"],
          title: "Poser une question claire",
          minutes: 5,
          goal: "Écrire une demande claire qui donne une réponse utile du premier coup.",
          text: [
            "Ce que vous tapez à un assistant d'IA s'appelle une demande (un \"prompt\"). Des demandes claires donnent de meilleures réponses.",
            "Une bonne demande a trois parties : ce que vous voulez, un peu de contexte, et la forme de réponse voulue. Par exemple : \"Je suis en 3e et nous commençons le chapitre sur le cycle de l'eau. Explique-le en 5 étapes courtes avec un exemple de la vie de tous les jours.\"",
            "Une demande faible comme \"cycle de l'eau\" oblige l'assistant à deviner ce dont vous avez besoin. Vous obtiendrez en général une réponse longue et générale."
          ],
          steps: ["Dites ce que vous voulez.", "Ajoutez un peu de contexte (votre classe, le sujet, ce que vous savez déjà).", "Dites la forme voulue : étapes, liste, court, mots simples ou exemple."],
          words: [["Demande (prompt)", "ce que vous tapez ou dites à un assistant d'IA."]],
          slides: [
            { title: "Une demande, c'est votre requête", bullets: ["Demande claire = meilleure réponse", "Demande vague = réponse générale"] },
            { title: "Trois parties", bullets: ["1. Ce que vous voulez", "2. Un peu de contexte", "3. La forme de réponse voulue"] },
            { title: "Faible ou claire", bullets: ["Faible : \"cycle de l'eau\"", "Claire : \"Je suis en 3e. Explique le cycle de l'eau en 5 étapes courtes avec un exemple.\""] }
          ],
          tryIt: "Choisissez un sujet qui vous intrigue, comme le fonctionnement d'un moteur de jeu vidéo ou pourquoi le ciel est bleu. Écrivez une demande avec les trois parties, envoyez-la à un assistant d'IA que vous avez le droit d'utiliser, et lisez la réponse.",
          youCanNow: "écrire une demande claire en trois parties.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce que la partie « contexte » d'une demande ?", options: ["La couleur de l'écran", "Un peu d'informations sur vous et le sujet, comme votre classe ou ce que vous savez déjà", "Votre mot de passe", "Les réglages de l'application"], answer: 1, why: "Le contexte, comme votre classe et le sujet, aide l'assistant à adapter la réponse à vous." },
            { objective: "O4", q: "Vous avez tapé « volcans » et reçu une réponse longue et générale. Qu'envoyez-vous ensuite ?", options: ["« volcans » encore une fois", "Rien ; vous abandonnez", "« Je suis en 4e. Explique comment un volcan entre en éruption en 4 étapes courtes. »", "Votre adresse"], answer: 2, why: "Ajouter ce que vous voulez, du contexte et la forme de réponse rend la demande claire." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Vérifier la réponse avant de lui faire confiance",
          minutes: 5,
          goal: "Vérifier une réponse de l'IA dans au moins une source fiable.",
          text: [
            "Les assistants d'IA inventent parfois des choses. Ils peuvent inventer une date, une citation, un livre qui n'existe pas, ou un fait qui semble juste mais qui est faux. On appelle cela une hallucination.",
            "Vérifiez tout ce qui est important, surtout les faits pour l'école, la santé, l'argent et l'actualité. Regardez dans votre manuel, demandez à votre professeur ou au documentaliste, ou trouvez un site fiable, comme un musée, une agence scientifique, une encyclopédie utilisée par votre école, ou un site officiel du gouvernement ou d'une université.",
            "Une bonne habitude : comparer deux sources. Si l'IA et une source fiable ne sont pas d'accord, faites confiance à la source, et dites peut-être à votre professeur ce que l'IA a mal dit."
          ],
          steps: ["Repérez les faits dans la réponse : noms, dates, nombres.", "Cherchez chacun dans une source fiable.", "S'ils ne sont pas d'accord, suivez la source fiable.", "Notez où vous avez vérifié."],
          words: [["Hallucination", "quand une IA écrit quelque chose qui semble vrai mais qui est inventé."], ["Source", "l'endroit d'où vient une information."]],
          slides: [
            { title: "L'IA peut inventer", bullets: ["Mauvaises dates et mauvais nombres", "Fausses citations ou faux livres", "Des faits qui semblent justes mais ne le sont pas"] },
            { title: "Vérifiez avec des sources fiables", bullets: ["Votre manuel, votre professeur ou le documentaliste", "Musées, agences scientifiques, sites officiels"] },
            { title: "S'ils ne sont pas d'accord", bullets: ["Faites confiance à la source fiable", "Notez où vous avez vérifié"] }
          ],
          tryIt: "Prenez la réponse de votre dernière demande. Choisissez-y deux faits et vérifiez chacun dans une source fiable. Notez si chacun était juste et où vous avez vérifié.",
          youCanNow: "repérer les faits à vérifier et les vérifier dans une source fiable.",
          quickCheck: [
            { objective: "O5", q: "Laquelle est une source fiable pour vérifier un fait scolaire ?", options: ["Un commentaire au hasard en ligne", "La même IA, interrogée une deuxième fois", "Un mème", "Votre manuel scolaire ou un site officiel d'école, d'université ou de l'État"], answer: 3, why: "Les manuels, les professeurs, les bibliothécaires et les sites fiables sont de bons endroits pour vérifier des faits." },
            { objective: "O5", q: "L'IA cite un livre pour votre exposé, mais vous ne le trouvez nulle part. Que faites-vous ?", options: ["Vous le traitez comme une hallucination possible et utilisez une source que vous pouvez trouver", "Vous le mettez quand même dans votre exposé", "Vous inventez un numéro de page", "Vous demandez à l'IA de promettre qu'il existe"], answer: 0, why: "L'IA peut inventer des livres et des faits ; faites confiance aux sources que vous pouvez vraiment vérifier." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rester en sécurité et être juste avec l'IA",
          minutes: 5,
          goal: "Utiliser l'IA sans partager d'informations privées et sans blesser personne.",
          text: [
            "Ne tapez pas d'informations privées dans un outil d'IA : votre nom complet avec votre adresse, votre école et votre emploi du temps, des numéros de téléphone, des mots de passe, ou des photos d'amis sans leur demander. Ce que vous tapez peut être enregistré.",
            "L'IA peut créer de fausses images, de fausses voix et de fausses vidéos, qu'on appelle parfois des deepfakes (hypertrucages). N'utilisez jamais l'IA pour créer des images fausses ou humiliantes de vraies personnes. Cela peut les blesser, enfreindre les règles de l'école et même la loi. Si quelqu'un le fait contre vous ou un ami, parlez-en à un adulte de confiance.",
            "L'IA peut aussi être injuste. Elle a appris à partir de textes écrits par des humains, donc elle peut répéter des stéréotypes. Si une réponse semble injuste envers un groupe de personnes, remettez-la en question."
          ],
          steps: ["Relisez votre demande avant de l'envoyer et retirez les détails privés.", "Ne créez jamais de fausses images ou de fausses voix de vraies personnes.", "Si vous voyez un deepfake blessant, parlez-en à un adulte de confiance.", "Remettez en question les réponses qui semblent injustes."],
          words: [["Deepfake (hypertrucage)", "une fausse image, voix ou vidéo créée avec l'IA pour avoir l'air vraie."], ["Biais", "quand un résultat est injuste envers certaines personnes, souvent à cause de ce que l'IA a appris."]],
          slides: [
            { title: "Gardez votre vie privée", bullets: ["Pas d'adresse, d'emploi du temps ni de numéro de téléphone", "Pas de mots de passe", "Pas de photos d'amis sans leur demander"] },
            { title: "Les deepfakes blessent", bullets: ["Ne truquez jamais de vraies personnes", "Cela peut enfreindre les règles de l'école et la loi", "Parlez-en à un adulte de confiance si vous en voyez un"] },
            { title: "Attention aux biais", bullets: ["L'IA peut répéter des stéréotypes", "Remettez en question les réponses injustes"] }
          ],
          tryIt: "Tâche finale : faites votre page \"L'IA expliquée\" : ce qu'est l'IA en deux phrases, trois applications que vous utilisez qui contiennent de l'IA, et une question posée à un assistant d'IA avec sa réponse et comment vous l'avez vérifiée. Assurez-vous qu'elle ne contient aucune information privée.",
          youCanNow: "utiliser l'IA de façon sûre et juste, et expliquer l'IA à quelqu'un d'autre.",
          quickCheck: [
            { objective: "O6", q: "Pourquoi garder les informations privées hors des outils d'IA ?", options: ["Les outils d'IA sont lents", "Ce que vous tapez peut être enregistré", "Cela rend les réponses plus courtes", "Les informations privées rendent l'IA plus intelligente"], answer: 1, why: "Ce que vous tapez peut être enregistré, alors les informations privées comme votre adresse et votre emploi du temps restent hors de l'outil." },
            { objective: "O6", q: "Un ami veut utiliser l'IA pour faire une fausse photo drôle d'un camarade de classe. Que faites-vous ?", options: ["Vous l'aidez à la faire, mais sans la partager", "Vous la publiez, puisque c'est une blague", "Vous dites non, car les faux de vraies personnes peuvent les blesser et enfreindre les règles", "Vous l'envoyez seulement à des amis proches"], answer: 2, why: "Les fausses images de vraies personnes peuvent les blesser, enfreindre le règlement de l'école et même la loi." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Utiliser un assistant d'IA intelligemment",
        questions: [
          { objective: "O4", q: "Quelle demande est la plus claire ?", options: ["\"Je suis en 3e. Explique le cycle de l'eau en 5 étapes courtes avec un exemple.\"", "\"sciences\"", "\"aide\"", "\"dis-moi des trucs\""], answer: 0, why: "Elle dit ce que vous voulez, donne du contexte et précise la forme de la réponse." },
          { objective: "O5", q: "Qu'est-ce qu'une \"hallucination\" de l'IA ?", options: ["Un niveau de jeu vidéo", "Une sorte d'écran de téléphone", "Une règle de l'école", "Quand l'IA invente quelque chose qui semble vrai"], answer: 3, why: "Une hallucination est une réponse inventée qui semble réelle." },
          { objective: "O5", q: "L'IA vous donne une date pour un exposé d'histoire. Vous devez :", options: ["La recopier tout de suite", "La vérifier dans votre manuel ou une autre source fiable", "Redemander à l'IA et croire la deuxième réponse", "Laisser tomber la date"], answer: 1, why: "Les faits importants se vérifient dans une source fiable." },
          { objective: "O6", q: "Que ne faut-il PAS taper dans un assistant d'IA ?", options: ["Votre adresse et votre emploi du temps", "\"Explique simplement la photosynthèse\"", "\"Donne-moi 3 idées pour l'affiche d'un club\"", "\"Fais plus court\""], answer: 0, why: "L'adresse et l'emploi du temps sont des informations privées." },
          { objective: "O6", q: "Un camarade a fait une fausse photo d'un autre élève avec l'IA. Que devez-vous faire ?", options: ["La partager", "En faire une autre", "En parler à un adulte de confiance", "Poster un commentaire"], answer: 2, why: "Les deepfakes de vraies personnes peuvent les blesser ; un adulte de confiance peut aider à les arrêter." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : C'est quoi l'IA ? (pour les jeunes)",
    questions: [
      { objective: "O1", q: "IA veut dire :", options: ["Internet automatique", "Intelligence artificielle", "Information avancée", "Installateur d'applications"], answer: 1, why: "IA est l'abréviation d'intelligence artificielle." },
      { objective: "O1", q: "Qu'est-ce qui est vrai à propos de l'IA ?", options: ["Elle a des sentiments", "Elle a toujours raison", "Elle est vivante", "Elle trouve des régularités et fait sa meilleure supposition"], answer: 3, why: "L'IA devine à partir de régularités ; elle n'est pas vivante et peut se tromper." },
      { objective: "O1", q: "Pourquoi l'IA peut-elle se tromper même quand elle a l'air sûre ?", options: ["Elle est paresseuse", "Elle veut vous piéger", "Les téléphones sont lents", "Elle devine à partir de régularités, sans vraiment comprendre"], answer: 3, why: "Elle prédit à partir de régularités, donc une réponse sûre d'elle peut quand même être fausse." },
      { objective: "O2", q: "Le clavier de votre téléphone devine votre prochain mot. C'est :", options: ["Un virus", "L'IA au travail", "Un professeur", "Un mot de passe"], answer: 1, why: "Deviner le mot suivant est une fonction courante de l'IA." },
      { objective: "O2", q: "Lequel est un exemple d'IA générative ?", options: ["Une calculatrice", "Un interrupteur", "Un assistant conversationnel qui écrit une histoire", "Une carte papier"], answer: 2, why: "L'IA générative crée du nouveau texte, des images ou du son." },
      { objective: "O2", q: "Une application vidéo affiche \"Parce que vous avez regardé...\". C'est :", options: ["Une recommandation faite par l'IA", "Un SMS", "Une règle de l'école", "Une manette de jeu"], answer: 0, why: "Elle propose des vidéos d'après vos choix passés." },
      { objective: "O3", q: "Où trouver l'âge minimum d'un outil d'IA ?", options: ["Dans la supposition d'un ami", "Sur la page d'aide ou les conditions de l'outil", "Dans une publicité", "Nulle part, il n'y en a pas"], answer: 1, why: "Les pages de l'entreprise donnent la règle actuelle." },
      { objective: "O3", q: "Que dit la page d'aide de Google sur l'utilisation de Gemini avec un compte personnel ou scolaire ?", options: ["Tout âge convient", "Il faut avoir 21 ans", "Seuls les professeurs peuvent l'utiliser", "Il faut avoir 13 ans ou plus, ou l'âge qui s'applique dans votre pays"], answer: 3, why: "La page d'aide de Google fixe 13 ans ou plus, ou l'âge local." },
      { objective: "O3", q: "Avant de vous inscrire sur une nouvelle application, vous devez :", options: ["En parler avec un parent ou tuteur", "Utiliser une fausse date de naissance", "Donner votre mot de passe à un ami", "Cliquer sur toutes les publicités"], answer: 0, why: "Un parent ou tuteur doit être au courant des nouveaux comptes." },
      { objective: "O3", q: "Utiliser l'IA pour écrire un travail que votre professeur vous a demandé d'écrire vous-même, c'est :", options: ["Acceptable si personne ne le voit", "Obligatoire", "Enfreindre les règles, et cela peut compter comme de la triche", "Une bonne habitude de travail"], answer: 2, why: "Les règles de l'école décident comment utiliser l'IA ; les enfreindre est malhonnête." },
      { objective: "O4", q: "Qu'est-ce qu'une demande (prompt) ?", options: ["Une manette de jeu", "Un type de mot de passe", "Ce que vous tapez ou dites à un assistant d'IA", "Une boutique d'applications"], answer: 2, why: "Une demande est votre requête à l'IA." },
      { objective: "O4", q: "Quelle partie rend une demande plus claire ?", options: ["Dire la forme de réponse voulue, comme 5 étapes courtes", "Taper un seul mot", "Ajouter votre adresse", "Tout écrire en majuscules"], answer: 0, why: "Préciser le format aide l'IA à donner une réponse utile." },
      { objective: "O4", q: "Une demande faible comme \"cycle de l'eau\" donne en général :", options: ["Une réponse parfaite", "Jamais de réponse", "Un virus", "Une réponse longue et générale"], answer: 3, why: "L'IA doit deviner, donc la réponse est générale." },
      { objective: "O5", q: "Quelle source est la plus fiable pour vérifier un fait scientifique ?", options: ["Un commentaire au hasard en ligne", "Une agence scientifique ou votre manuel", "Un mème", "Une publicité"], answer: 1, why: "Les manuels et les sites scientifiques officiels sont fiables." },
      { objective: "O5", q: "L'IA et votre manuel ne sont pas d'accord. Vous devez :", options: ["Faire confiance au manuel ou à la source fiable", "Faire confiance à l'IA", "Tirer à pile ou face", "Utiliser les deux réponses"], answer: 0, why: "Une source fiable l'emporte sur une réponse de l'IA non vérifiée." },
      { objective: "O5", q: "Quels faits faut-il le plus vérifier ?", options: ["Votre propre opinion", "Une blague que vous avez demandée", "Les dates, les nombres et les noms", "Un poème que vous avez demandé"], answer: 2, why: "C'est sur les dates et les nombres que l'IA se trompe souvent." },
      { objective: "O6", q: "Laquelle est une information privée à garder hors de l'IA ?", options: ["\"Explique les fractions\"", "Votre mot de passe", "\"Fais plus court\"", "Une couleur préférée"], answer: 1, why: "Un mot de passe ne doit jamais être partagé." },
      { objective: "O6", q: "Un deepfake, c'est :", options: ["Une piscine profonde", "Un type de jeu", "Une fiche de révision", "Une fausse image, voix ou vidéo créée avec l'IA"], answer: 3, why: "Les deepfakes sont des faux créés par l'IA qui ont l'air vrais." },
      { objective: "O6", q: "L'IA donne une réponse qui semble injuste envers un groupe de personnes. Vous devez :", options: ["La partager", "La croire", "Ne plus jamais utiliser d'IA", "La remettre en question, car l'IA peut répéter des stéréotypes"], answer: 3, why: "L'IA peut garder des biais de ce qu'elle a appris." },
      { objective: "O6", q: "Si quelqu'un fait un faux blessant de vous avec l'IA, la meilleure chose à faire est de :", options: ["Le garder secret", "En parler à un adulte de confiance", "En faire un en retour", "Le partager davantage"], answer: 1, why: "Un adulte de confiance peut aider à le signaler et à l'arrêter." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      3,
      6,
      9,
      10,
      13,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Ce qu'est l'IA",
        objective: "O1",
        notYet: "L'explication manque, est fausse ou trop difficile pour un élève plus jeune.",
        meets: "Deux phrases claires qui disent ce qu'est l'IA et qu'elle peut se tromper.",
        exceeds: "Dit aussi comment l'IA apprend à partir d'exemples, avec des mots qu'un enfant de dix ans connaît."
      },
      {
        name: "L'IA dans mes applications",
        objective: "O2",
        notYet: "Moins de trois applications, ou pas de ligne sur ce que fait l'IA.",
        meets: "Trois applications, chacune avec une ligne sur ce que fait l'IA.",
        exceeds: "Indique aussi laquelle utilise de l'IA générative."
      },
      {
        name: "Question claire",
        objective: "O4",
        notYet: "La demande fait un ou deux mots.",
        meets: "La demande dit ce que vous voulez, donne un peu de contexte et précise la forme de réponse voulue.",
        exceeds: "La réponse était utile du premier coup, ou une question de suivi l'a améliorée."
      },
      {
        name: "Réponse vérifiée",
        objective: "O5",
        notYet: "La réponse a été utilisée sans vérification.",
        meets: "Au moins un fait vérifié dans une source fiable, et la source est nommée.",
        exceeds: "Deux faits vérifiés dans deux sources, avec une note sur ce que l'IA a mal dit."
      },
      {
        name: "Sûr et autorisé",
        objective: "O6",
        notYet: "L'explication contient des informations privées, ou l'outil a été utilisé contre son âge minimum ou les règles de l'école.",
        meets: "Aucune information privée, et l'outil utilisé respecte son âge minimum et les règles de l'école.",
        exceeds: "Ajoute un conseil pour le lecteur plus jeune sur la façon de rester en sécurité avec l'IA."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui commencent un autre cours Koach Learn pour les jeunes dans les 30 jours",
      "Les apprenants qui disent, dans le sondage de suivi à 30 jours, vérifier les réponses de l'IA pour leurs devoirs",
      "Les professeurs ou programmes jeunesse qui signalent moins de problèmes de règles liés à l'IA chez les apprenants"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur de l'école avec Internet",
      "Un assistant d'IA gratuit que l'apprenant a l'âge et l'autorisation d'utiliser, comme un outil approuvé par l'école",
      "Du papier ou un document pour l'explication d'une page",
      "Environ 60 minutes en tout : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Vérifiez l'âge minimum de chaque outil d'IA avant le cours, et utilisez les comptes approuvés par l'école quand il y en a.",
      "Présentez au début les règles de votre école ou de votre programme sur l'IA, pour que les apprenants sachent ce qui est permis.",
      "Ne demandez jamais aux apprenants de taper des informations privées ou d'envoyer des photos de vraies personnes.",
      "Les apprenants qui n'ont pas l'âge minimum peuvent faire les tâches sur papier ou pendant qu'un professeur montre l'outil.",
      "Demandez aux apprenants de présenter leur explication à un élève plus jeune ou à un partenaire, et évaluez-la avec la grille."
    ]
  }
};
