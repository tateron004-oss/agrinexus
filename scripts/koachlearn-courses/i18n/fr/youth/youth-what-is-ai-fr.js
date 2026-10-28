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
  chapters: [
    {
      name: "Chapitre 1 : Ce qu'est l'IA et où vous la rencontrez",
      lessons: [
        {
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
          youCanNow: "expliquer en deux phrases simples ce qu'est l'IA et ce qu'elle n'est pas."
        },
        {
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
          youCanNow: "repérer l'IA dans les applications de tous les jours et dire ce qu'elle fait."
        },
        {
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
          youCanNow: "vérifier l'âge minimum d'un outil d'IA et les règles de votre école sur l'IA, et impliquer un parent ou tuteur avant de vous inscrire."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Ce qu'est l'IA et où vous la rencontrez",
        questions: [
          { q: "Quelle phrase décrit le mieux l'IA ?", options: ["Un robot qui a des sentiments", "Des programmes informatiques qui font des tâches qui demandent d'habitude la réflexion humaine", "Une sorte de chargeur de téléphone", "Un site qui a toujours raison"], answer: 1, why: "L'IA, ce sont des programmes qui font des tâches de réflexion comme reconnaître, proposer et écrire." },
          { q: "Comment apprennent la plupart des IA ?", options: ["En allant à l'école", "En lisant dans vos pensées", "Elles n'apprennent jamais", "En étudiant d'énormes quantités d'exemples et en trouvant des régularités"], answer: 3, why: "L'IA trouve des régularités dans de grands ensembles d'exemples et s'en sert pour deviner." },
          { q: "Votre application de musique vous propose une nouvelle chanson qui pourrait vous plaire. C'est :", options: ["L'IA qui fait une recommandation", "Un virus", "Une règle du professeur", "Un appel téléphonique"], answer: 0, why: "Les suggestions basées sur vos choix passés sont un usage courant de l'IA." },
          { q: "Vous voulez essayer une nouvelle application d'IA. Que faites-vous d'abord ?", options: ["Vous inscrire avec n'importe quelle date de naissance", "Lui donner votre mot de passe scolaire", "Vérifier son âge minimum et la montrer à un parent ou tuteur", "La télécharger depuis une publicité"], answer: 2, why: "L'âge minimum et l'accord d'un parent ou tuteur passent avant l'inscription." },
          { q: "Votre professeur dit que l'IA est permise pour trouver des idées mais pas pour écrire votre rédaction. Vous :", options: ["Faites quand même écrire la rédaction par l'IA", "Ignorez la règle", "Utilisez l'IA seulement pour les idées, puis écrivez la rédaction vous-même", "Copiez la rédaction d'un ami"], answer: 2, why: "Suivre la règle du professeur garde votre travail honnête." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Utiliser un assistant d'IA intelligemment",
      lessons: [
        {
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
          youCanNow: "écrire une demande claire en trois parties."
        },
        {
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
          youCanNow: "repérer les faits à vérifier et les vérifier dans une source fiable."
        },
        {
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
          youCanNow: "utiliser l'IA de façon sûre et juste, et expliquer l'IA à quelqu'un d'autre."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Utiliser un assistant d'IA intelligemment",
        questions: [
          { q: "Quelle demande est la plus claire ?", options: ["\"Je suis en 3e. Explique le cycle de l'eau en 5 étapes courtes avec un exemple.\"", "\"sciences\"", "\"aide\"", "\"dis-moi des trucs\""], answer: 0, why: "Elle dit ce que vous voulez, donne du contexte et précise la forme de la réponse." },
          { q: "Qu'est-ce qu'une \"hallucination\" de l'IA ?", options: ["Un niveau de jeu vidéo", "Une sorte d'écran de téléphone", "Une règle de l'école", "Quand l'IA invente quelque chose qui semble vrai"], answer: 3, why: "Une hallucination est une réponse inventée qui semble réelle." },
          { q: "L'IA vous donne une date pour un exposé d'histoire. Vous devez :", options: ["La recopier tout de suite", "La vérifier dans votre manuel ou une autre source fiable", "Redemander à l'IA et croire la deuxième réponse", "Laisser tomber la date"], answer: 1, why: "Les faits importants se vérifient dans une source fiable." },
          { q: "Que ne faut-il PAS taper dans un assistant d'IA ?", options: ["Votre adresse et votre emploi du temps", "\"Explique simplement la photosynthèse\"", "\"Donne-moi 3 idées pour l'affiche d'un club\"", "\"Fais plus court\""], answer: 0, why: "L'adresse et l'emploi du temps sont des informations privées." },
          { q: "Un camarade a fait une fausse photo d'un autre élève avec l'IA. Que devez-vous faire ?", options: ["La partager", "En faire une autre", "En parler à un adulte de confiance", "Poster un commentaire"], answer: 2, why: "Les deepfakes de vraies personnes peuvent les blesser ; un adulte de confiance peut aider à les arrêter." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final : C'est quoi l'IA ? (pour les jeunes)",
    questions: [
      { q: "IA veut dire :", options: ["Internet automatique", "Intelligence artificielle", "Information avancée", "Installateur d'applications"], answer: 1, why: "IA est l'abréviation d'intelligence artificielle." },
      { q: "Qu'est-ce qui est vrai à propos de l'IA ?", options: ["Elle a des sentiments", "Elle a toujours raison", "Elle est vivante", "Elle trouve des régularités et fait sa meilleure supposition"], answer: 3, why: "L'IA devine à partir de régularités ; elle n'est pas vivante et peut se tromper." },
      { q: "Pourquoi l'IA peut-elle se tromper même quand elle a l'air sûre ?", options: ["Elle est paresseuse", "Elle veut vous piéger", "Les téléphones sont lents", "Elle devine à partir de régularités, sans vraiment comprendre"], answer: 3, why: "Elle prédit à partir de régularités, donc une réponse sûre d'elle peut quand même être fausse." },
      { q: "Le clavier de votre téléphone devine votre prochain mot. C'est :", options: ["Un virus", "L'IA au travail", "Un professeur", "Un mot de passe"], answer: 1, why: "Deviner le mot suivant est une fonction courante de l'IA." },
      { q: "Lequel est un exemple d'IA générative ?", options: ["Une calculatrice", "Un interrupteur", "Un assistant conversationnel qui écrit une histoire", "Une carte papier"], answer: 2, why: "L'IA générative crée du nouveau texte, des images ou du son." },
      { q: "Une application vidéo affiche \"Parce que vous avez regardé...\". C'est :", options: ["Une recommandation faite par l'IA", "Un SMS", "Une règle de l'école", "Une manette de jeu"], answer: 0, why: "Elle propose des vidéos d'après vos choix passés." },
      { q: "Où trouver l'âge minimum d'un outil d'IA ?", options: ["Dans la supposition d'un ami", "Sur la page d'aide ou les conditions de l'outil", "Dans une publicité", "Nulle part, il n'y en a pas"], answer: 1, why: "Les pages de l'entreprise donnent la règle actuelle." },
      { q: "Que dit la page d'aide de Google sur l'utilisation de Gemini avec un compte personnel ou scolaire ?", options: ["Tout âge convient", "Il faut avoir 21 ans", "Seuls les professeurs peuvent l'utiliser", "Il faut avoir 13 ans ou plus, ou l'âge qui s'applique dans votre pays"], answer: 3, why: "La page d'aide de Google fixe 13 ans ou plus, ou l'âge local." },
      { q: "Avant de vous inscrire sur une nouvelle application, vous devez :", options: ["En parler avec un parent ou tuteur", "Utiliser une fausse date de naissance", "Donner votre mot de passe à un ami", "Cliquer sur toutes les publicités"], answer: 0, why: "Un parent ou tuteur doit être au courant des nouveaux comptes." },
      { q: "Utiliser l'IA pour écrire un travail que votre professeur vous a demandé d'écrire vous-même, c'est :", options: ["Acceptable si personne ne le voit", "Obligatoire", "Enfreindre les règles, et cela peut compter comme de la triche", "Une bonne habitude de travail"], answer: 2, why: "Les règles de l'école décident comment utiliser l'IA ; les enfreindre est malhonnête." },
      { q: "Qu'est-ce qu'une demande (prompt) ?", options: ["Une manette de jeu", "Un type de mot de passe", "Ce que vous tapez ou dites à un assistant d'IA", "Une boutique d'applications"], answer: 2, why: "Une demande est votre requête à l'IA." },
      { q: "Quelle partie rend une demande plus claire ?", options: ["Dire la forme de réponse voulue, comme 5 étapes courtes", "Taper un seul mot", "Ajouter votre adresse", "Tout écrire en majuscules"], answer: 0, why: "Préciser le format aide l'IA à donner une réponse utile." },
      { q: "Une demande faible comme \"cycle de l'eau\" donne en général :", options: ["Une réponse parfaite", "Jamais de réponse", "Un virus", "Une réponse longue et générale"], answer: 3, why: "L'IA doit deviner, donc la réponse est générale." },
      { q: "Quelle source est la plus fiable pour vérifier un fait scientifique ?", options: ["Un commentaire au hasard en ligne", "Une agence scientifique ou votre manuel", "Un mème", "Une publicité"], answer: 1, why: "Les manuels et les sites scientifiques officiels sont fiables." },
      { q: "L'IA et votre manuel ne sont pas d'accord. Vous devez :", options: ["Faire confiance au manuel ou à la source fiable", "Faire confiance à l'IA", "Tirer à pile ou face", "Utiliser les deux réponses"], answer: 0, why: "Une source fiable l'emporte sur une réponse de l'IA non vérifiée." },
      { q: "Quels faits faut-il le plus vérifier ?", options: ["Votre propre opinion", "Une blague que vous avez demandée", "Les dates, les nombres et les noms", "Un poème que vous avez demandé"], answer: 2, why: "C'est sur les dates et les nombres que l'IA se trompe souvent." },
      { q: "Laquelle est une information privée à garder hors de l'IA ?", options: ["\"Explique les fractions\"", "Votre mot de passe", "\"Fais plus court\"", "Une couleur préférée"], answer: 1, why: "Un mot de passe ne doit jamais être partagé." },
      { q: "Un deepfake, c'est :", options: ["Une piscine profonde", "Un type de jeu", "Une fiche de révision", "Une fausse image, voix ou vidéo créée avec l'IA"], answer: 3, why: "Les deepfakes sont des faux créés par l'IA qui ont l'air vrais." },
      { q: "L'IA donne une réponse qui semble injuste envers un groupe de personnes. Vous devez :", options: ["La partager", "La croire", "Ne plus jamais utiliser d'IA", "La remettre en question, car l'IA peut répéter des stéréotypes"], answer: 3, why: "L'IA peut garder des biais de ce qu'elle a appris." },
      { q: "Si quelqu'un fait un faux blessant de vous avec l'IA, la meilleure chose à faire est de :", options: ["Le garder secret", "En parler à un adulte de confiance", "En faire un en retour", "Le partager davantage"], answer: 1, why: "Un adulte de confiance peut aider à le signaler et à l'arrêter." }
    ]
  }
};
