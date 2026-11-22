"use strict";

// Koach Learn course (French translation of youth/youth-simple-chatbots.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "youth-simple-chatbots-fr",
  lang: "fr",
  translationOf: "youth-simple-chatbots",
  category: "Youth",
  name: "Créer des chatbots IA simples",
  skills: "Prévoir ce que doit faire un chatbot, Créer un chatbot à mots-clés en Python, Écrire des instructions de bot pour un assistant d'IA, Tester avec de vraies questions, Rendre un bot sûr et honnête",
  outcome: "créer un chatbot simple de questions-réponses pour un club de l'école : un bot à mots-clés en Python qui répond à au moins cinq questions fréquentes, et une série d'instructions qui transforme un assistant d'IA gratuit en aide pour le club, les deux testés avec de vraies questions et gardés sûrs et honnêtes.",
  about: [
    "Ce cours s'adresse aux jeunes qui veulent comprendre comment marchent les chatbots en en créant un. Pas besoin d'avoir déjà programmé : vous recopierez de petits modèles et vous les modifierez.",
    "Vous préparerez un chatbot pour quelque chose de réel, comme votre club de robotique, votre groupe de musique ou votre équipe de sport. D'abord, vous créerez un bot simple à mots-clés en Python dans Google Colab, un notebook gratuit qui marche dans un navigateur. Ensuite, vous écrirez des instructions qui font agir un assistant d'IA gratuit comme ChatGPT, Microsoft Copilot ou Google Gemini comme aide du club, et vous comparerez les deux. Enfin, vous les testerez et les rendrez sûrs et honnêtes.",
    "Google Colab et les assistants d'IA demandent un compte et ont un âge minimum. Lisez les conditions de chaque outil, suivez les règles de votre école sur l'IA, et faites-vous aider par un parent ou tuteur pour les inscriptions. Chaque leçon se termine par une activité \"Essayez maintenant\", un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Créez un chatbot pour un club ou une équipe de l'école. Partie 1 : un bot à mots-clés en Python dans Google Colab qui salue l'utilisateur, répond à au moins cinq questions fréquentes (comme l'heure et le lieu des réunions et comment s'inscrire), dit \"Je ne sais pas, demande au responsable du club\" pour tout le reste, et s'arrête quand l'utilisateur tape bye. Partie 2 : une fiche d'instructions qui fait agir un assistant d'IA gratuit comme l'aide du club. Testez les deux avec 10 vraies questions, notez ce que chacun a réussi et raté, et faites une amélioration à chacun.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des jeunes qui veulent comprendre comment fonctionnent les chatbots en en créant un pour un vrai groupe, comme un club, un groupe de musique ou une équipe de sport, avec ou sans expérience de la programmation.",
    startingPoint: "Ils ont déjà utilisé des chatbots sur des sites web, dans des jeux ou avec des assistants d'IA. La plupart n'ont jamais écrit de code, préparé le travail d'un bot, ni testé un bot pour corriger ce qui rate.",
    gap: "Les chatbots sont partout, mais la plupart des jeunes ne font que les utiliser. Créer un simple bot à mots-clés et une aide IA montre comment les deux fonctionnent, où chacun échoue, et pourquoi les bots doivent être honnêtes et protéger la vie privée. Ce sont de vraies compétences pour la programmation, les métiers de la technologie et pour servir leurs propres groupes.",
    constraints: [
      "Âges minimum : Google Colab et les assistants d'IA demandent des comptes et ont un âge minimum ; un parent ou tuteur participe aux inscriptions",
      "Les règles de l'école sur l'IA et la technologie ; le responsable du club approuve le partage du bot",
      "Débutants : de petits modèles de code à copier et à modifier ; environ cinq minutes par leçon",
      "Appareils : un ordinateur avec un navigateur web ; rien à installer",
      "Vie privée : les bots ne demandent ni ne gardent jamais de mots de passe, de numéros de téléphone, d'adresses ou de numéros d'identité"
    ],
    prerequisites: "Aucun. « Initiation à la programmation avec l'IA » aide, mais n'est pas obligatoire."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'exemples de chatbots", action: "expliquer comment fonctionnent un chatbot à mots-clés et un chatbot IA, avec un point fort et une limite de chacun", standard: "en réussissant au moins 4 questions sur 5" },
    { id: "O2", condition: "Pour un vrai club, une équipe ou un groupe", action: "écrire un plan de bot avec qui il aide, au moins cinq réponses vérifiées, une réponse de secours et ce qu'il ne doit jamais faire", standard: "avec chaque réponse vérifiée auprès du responsable du club" },
    { id: "O3", condition: "Avec Google Colab", action: "créer en Python un chatbot à mots-clés avec une boucle, des réponses par mots-clés, une réponse de secours et un au revoir", standard: "pour qu'il fonctionne et réponde à au moins cinq questions" },
    { id: "O4", condition: "Avec un assistant d'IA gratuit", action: "écrire une fiche d'instructions avec le rôle, des faits vérifiés, le ton et les limites, qui fait agir l'assistant comme aide du club", standard: "pour qu'il renvoie les questions inconnues vers le responsable et ne demande aucune information personnelle" },
    { id: "O5", condition: "À partir de 10 questions de test réalistes", action: "tester les deux bots, noter chaque réponse juste, fausse ou inventée, et corriger ce qui rate", standard: "en faisant au moins une correction sur chaque bot et en testant de nouveau" },
    { id: "O6", condition: "Avant de partager votre bot", action: "ajouter un message d'accueil qui dit que c'est un bot, des limites de vie privée et de sécurité, et obtenir l'accord de votre responsable", standard: "avec les questions sérieuses ou inconnues renvoyées vers un adulte de confiance" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Comment marchent les chatbots, et votre premier bot",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce qu'est un chatbot, et deux façons d'en créer un",
          minutes: 4,
          goal: "Expliquer la différence entre un chatbot à mots-clés et un chatbot IA.",
          text: [
            "Un chatbot est un programme avec qui vous parlez en écrivant ou en parlant. On en voit sur les sites web (\"Comment puis-je vous aider ?\"), dans les jeux et dans les applications.",
            "Il en existe deux grands types. Un chatbot à mots-clés suit des règles écrites par une personne : si le message contient \"heure\", il répond avec l'heure de la réunion. Il est simple et prévisible, mais il ne sait que ce que vous lui avez appris. Un chatbot IA utilise un grand modèle de langage, qui a appris à partir d'énormes quantités de texte. Il peut répondre à presque tout avec des mots naturels, mais il peut aussi se tromper ou inventer.",
            "Dans ce cours, vous créerez les deux pour un vrai usage, comme répondre aux questions des nouveaux membres de votre club, pour voir les forces et les limites de chacun."
          ],
          words: [["Chatbot", "un programme avec qui on parle en écrivant ou en parlant."], ["Mot-clé", "un mot que le bot cherche pour décider comment répondre."], ["Grand modèle de langage", "le type d'IA derrière des assistants comme ChatGPT ; il a appris des modèles à partir d'énormes quantités de texte."]],
          slides: [
            { title: "Un chatbot, c'est...", bullets: ["Un programme avec qui on parle", "Sur les sites, les jeux et les applis"] },
            { title: "Chatbot à mots-clés", bullets: ["Suit des règles écrites par une personne", "Simple et prévisible", "Ne sait que ce que vous lui avez appris"] },
            { title: "Chatbot IA", bullets: ["Utilise un grand modèle de langage", "Répond avec des mots naturels", "Peut se tromper ou inventer"] }
          ],
          tryIt: "Choisissez un club, une équipe ou un groupe dont vous faites partie. Notez cinq questions que les nouveaux membres posent toujours, comme quand vous vous réunissez, où, et comment s'inscrire.",
          youCanNow: "expliquer la différence entre les chatbots à mots-clés et les chatbots IA, et choisir un vrai usage pour un bot.",
          quickCheck: [
            { objective: "O1", q: "Quelle est une limite d'un chatbot à mots-clés ?", options: ["Il est imprévisible", "Il ne connaît que ce que vous lui avez appris", "Il invente souvent des faits", "Il a besoin d'un grand modèle de langage"], answer: 1, why: "Un bot à mots-clés suit des règles écrites par une personne, donc il ne connaît que ce qu'on lui a appris." },
            { objective: "O1", q: "Il vous faut un bot qui donne toujours exactement la même heure de réunion, vérifiée. Quel type est le plus sûr ?", options: ["Un chatbot IA sans instructions", "Aucun des deux types ne peut le faire", "Un bot pris au hasard sur un site web", "Un chatbot à mots-clés avec la réponse vérifiée"], answer: 3, why: "Les bots à mots-clés sont simples et prévisibles ; les bots IA peuvent se tromper ou inventer des choses." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Prévoir le travail de votre bot",
          minutes: 5,
          goal: "Écrire un plan simple : qui le bot aide, à quoi il répond et ce qu'il ne doit jamais faire.",
          text: [
            "Les bons bots ont un travail petit et clair. Écrivez un plan de bot en quatre parties : qui il aide (par exemple, les nouveaux membres du club d'échecs), les questions auxquelles il répond, les réponses (vérifiées avec votre responsable de club), et ce qu'il doit dire quand il ne sait pas.",
            "Décidez aussi ce que le bot ne doit jamais faire : ne jamais demander de mots de passe, de numéros de téléphone ou d'adresses, ne jamais faire semblant d'être une vraie personne, et ne jamais donner de conseils sur la santé, l'argent ou la loi. En cas de doute, il envoie les gens vers un vrai adulte, comme le responsable du club.",
            "Un assistant d'IA peut vous aider à trouver d'autres questions : \"Que pourraient demander les nouveaux membres d'un club d'échecs de lycée ? Liste-en 10.\" Puis vérifiez vous-même les réponses."
          ],
          steps: ["Écrivez qui le bot aide.", "Listez 5 à 10 questions auxquelles il répondra.", "Écrivez une réponse courte et vérifiée pour chacune.", "Écrivez la réponse \"Je ne sais pas\" qui envoie vers un vrai adulte.", "Listez ce que le bot ne doit jamais faire."],
          words: [["Plan de bot", "une courte description de ce que fait et ne fait pas un bot."], ["Réponse de secours", "ce que dit un bot quand il ne sait pas."]],
          slides: [
            { title: "Un travail petit et clair", bullets: ["Qui il aide", "Questions et réponses vérifiées", "Ce qu'il dit quand il ne sait pas"] },
            { title: "Jamais", bullets: ["Demander mots de passe, numéros ou adresses", "Faire semblant d'être une vraie personne", "Donner des conseils santé, argent ou juridiques"] },
            { title: "Trouvez des idées avec l'IA", bullets: ["Demandez d'autres questions probables", "Vérifiez vous-même chaque réponse"] }
          ],
          tryIt: "Écrivez votre plan de bot : qui il aide, vos cinq questions avec des réponses vérifiées, votre réponse de secours et trois choses qu'il ne doit jamais faire. Demandez à un assistant d'IA cinq autres questions que vous auriez pu oublier.",
          youCanNow: "prévoir le travail d'un chatbot, ses réponses, sa réponse de secours et ses règles de sécurité.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qui fait un bon travail pour un bot ?", options: ["Un petit travail clair, comme répondre aux questions des nouveaux membres", "Répondre à toutes les questions du monde", "Donner des conseils de santé", "Se faire passer pour le président du club"], answer: 0, why: "Les bons bots ont un petit travail clair." },
            { objective: "O2", q: "L'IA propose une réponse sur la cotisation du club pour votre plan de bot. Que faites-vous ?", options: ["Vous l'utilisez telle quelle", "Vous ne parlez jamais de la cotisation dans le plan", "Vous la vérifiez auprès du responsable du club avant de l'ajouter", "Vous inventez un autre montant"], answer: 2, why: "Les réponses du bot doivent être vérifiées auprès du responsable, pas prises à l'IA." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Créer un chatbot à mots-clés en Python",
          minutes: 6,
          goal: "Créer et exécuter un chatbot à mots-clés dans Google Colab.",
          text: [
            "Ouvrez Google Colab sur colab.research.google.com, connectez-vous avec un compte que vous avez le droit d'utiliser et commencez un nouveau notebook. Le bot utilise une boucle qui demande des messages sans arrêt, et des instructions if qui cherchent des mots-clés.",
            "Voici le modèle, ligne par ligne : while True: commence une boucle qui se répète. À l'intérieur, msg = input(\"Toi : \").lower() lit le message en minuscules. if \"bye\" in msg: print(\"Bot : À bientôt !\") puis break arrête la boucle. elif \"heure\" in msg: print(\"Bot : On se réunit le mardi à 15 h 30.\") répond à une question. else: print(\"Bot : Je ne sais pas. Demande au responsable du club.\") est la réponse de secours. Décalez les lignes dans la boucle et dans chaque if.",
            "Ajoutez un elif pour chaque question de votre plan. Si vous avez une erreur, lisez la dernière ligne et le numéro de ligne, cherchez deux-points, guillemet ou décalage manquant, et si vous êtes bloqué, collez le code et l'erreur dans un assistant d'IA et demandez-lui de l'expliquer."
          ],
          steps: ["Ouvrez un nouveau notebook Colab.", "Tapez while True: et décalez les lignes suivantes.", "Lisez le message : msg = input(\"Toi : \").lower()", "Ajoutez if \"bye\" in msg: avec un print d'au revoir et break.", "Ajoutez un elif par question, et un else de secours. Exécutez et discutez avec votre bot."],
          words: [["Boucle", "du code qui se répète ; while True se répète jusqu'à break."], ["elif", "abréviation de else if : vérifier une autre condition."], ["break", "arrête une boucle."], [".lower()", "met le texte en minuscules pour que \"HEURE\" et \"heure\" correspondent."]],
          slides: [
            { title: "Le modèle", bullets: ["while True: fait durer la discussion", "msg = input(\"Toi : \").lower()", "if \"bye\" in msg: dire au revoir, puis break"] },
            { title: "Les réponses", bullets: ["elif \"heure\" in msg: afficher l'heure", "Un elif par question", "else : la réponse de secours"] },
            { title: "Si ça ne marche pas", bullets: ["Lisez la dernière ligne de l'erreur", "Vérifiez deux-points, guillemets et décalages", "Demandez à l'IA d'expliquer l'erreur"] }
          ],
          tryIt: "Créez votre bot à mots-clés dans Colab avec un au revoir, au moins trois réponses de votre plan et une réponse de secours. Discutez avec lui et essayez une question qu'il ne devrait pas connaître.",
          youCanNow: "créer et exécuter un chatbot à mots-clés en Python avec des réponses, une réponse de secours et un moyen de s'arrêter.",
          quickCheck: [
            { objective: "O3", q: "Dans le bot en Python, que fait la ligne else ?", options: ["Elle termine le programme", "Elle donne la réponse de secours quand aucun mot-clé ne correspond", "Elle lit le message de l'utilisateur", "Elle lance la boucle"], answer: 1, why: "else attrape tout ce que les autres tests n'ont pas reconnu." },
            { objective: "O3", q: "Votre bot répond à « heure » mais pas à « HEURE ». Qu'ajoutez-vous ?", options: [".lower() quand il lit le message", "Un autre break", "Un deuxième while True:", "Rien ; on ne peut pas le corriger"], answer: 0, why: ".lower() met le message en minuscules pour que les deux façons d'écrire correspondent." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment marchent les chatbots, et votre premier bot",
        questions: [
          { objective: "O1", q: "Comment un chatbot à mots-clés décide-t-il quoi dire ?", options: ["Il lit dans vos pensées", "Il suit des règles qui cherchent des mots dans votre message", "Il cherche dans tout internet", "Il demande à un professeur"], answer: 1, why: "Les bots à mots-clés suivent des règles écrites par une personne." },
          { objective: "O1", q: "Laquelle est une faiblesse d'un chatbot IA ?", options: ["Il peut se tromper ou inventer", "Il ne peut dire qu'une phrase", "Il ne comprend pas les mots normaux", "Il n'a pas besoin d'électricité"], answer: 0, why: "Les grands modèles de langage peuvent donner de mauvaises réponses qui semblent justes." },
          { objective: "O2", q: "Qu'est-ce qu'une réponse de secours ?", options: ["Le premier bonjour", "Un mot de passe", "Ce que dit le bot quand il ne sait pas", "Le nom du bot"], answer: 2, why: "La réponse de secours gère les questions auxquelles le bot ne peut pas répondre." },
          { objective: "O2", q: "Que ne doit JAMAIS demander le bot de votre club ?", options: ["Ce que l'utilisateur veut savoir", "S'il veut s'inscrire", "Son ouverture préférée aux échecs", "Son adresse"], answer: 3, why: "Les bots ne doivent jamais recueillir de détails privés." },
          { objective: "O3", q: "Dans le bot Python, que fait break ?", options: ["Il arrête la boucle pour finir la discussion", "Il casse l'ordinateur", "Il ajoute une réponse", "Il supprime le notebook"], answer: 0, why: "break met fin à la boucle while." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Bots d'aide IA, tests et sécurité",
      lessons: [
        {
          objectives: ["O4"],
          title: "Écrire des instructions pour un bot d'aide IA",
          minutes: 5,
          goal: "Écrire une fiche d'instructions qui fait agir un assistant d'IA gratuit comme aide de votre club.",
          text: [
            "Vous pouvez transformer un assistant d'IA général en aide pour un seul travail en commençant une discussion avec des instructions claires. Certains outils permettent aussi d'enregistrer des instructions comme bot personnalisé ; les menus et les règles d'âge varient, alors vérifiez votre outil. Coller les instructions au début d'une nouvelle discussion marche dans la plupart des assistants.",
            "Une bonne fiche d'instructions contient : le rôle du bot (\"Tu es l'aide du club d'échecs du lycée Lincoln\"), les faits qu'il peut utiliser (vos réponses vérifiées), son ton (sympathique, réponses courtes) et ses limites (\"Si tu ne sais pas, dis : demande à Mme Rivera, la responsable du club. Ne demande jamais d'informations personnelles.\").",
            "Dites-lui d'utiliser seulement les faits que vous lui avez donnés. Cela réduit le risque qu'il invente des horaires ou des règles."
          ],
          steps: ["Écrivez le rôle : qui est le bot et qui il aide.", "Collez vos faits et réponses vérifiés.", "Fixez le ton : sympathique, réponses courtes.", "Ajoutez les limites : seulement ces faits ; les inconnues vont au responsable ; jamais d'informations personnelles.", "Commencez une nouvelle discussion, collez la fiche, puis posez une question test."],
          words: [["Fiche d'instructions", "les règles écrites que vous donnez à un assistant d'IA au début d'une discussion."], ["Rôle", "qui le bot doit jouer."], ["Ton", "la façon dont le bot s'exprime : sympathique, formel, court."]],
          slides: [
            { title: "Transformez un assistant en aide", bullets: ["Collez les instructions au début", "Certains outils enregistrent des bots ; vérifiez"] },
            { title: "La fiche d'instructions", bullets: ["Rôle", "Faits vérifiés", "Ton", "Limites"] },
            { title: "Seulement ces faits", bullets: ["Moins de réponses inventées", "Les inconnues vont au responsable", "Jamais d'infos personnelles demandées"] }
          ],
          tryIt: "Écrivez une fiche d'instructions pour le bot d'aide de votre club. Commencez une nouvelle discussion dans un assistant d'IA gratuit, collez-la, et posez trois questions de votre plan et une qu'il ne devrait pas connaître.",
          youCanNow: "écrire des instructions claires qui transforment un assistant d'IA gratuit en bot d'aide ciblé et limité.",
          quickCheck: [
            { objective: "O4", q: "À quoi sert la ligne « rôle » d'une fiche d'instructions ?", options: ["Elle liste les questions de test", "Elle choisit la police", "Elle dit à l'IA qui elle est et qui elle aide", "Elle garde les mots de passe"], answer: 2, why: "La ligne de rôle, comme « Tu es l'aide du club d'échecs », fixe le travail du bot." },
            { objective: "O4", q: "Votre aide IA répond aussi aux questions sur les devoirs. Qu'ajoutez-vous à la fiche ?", options: ["Plus de faits sur les devoirs", "Une règle pour n'utiliser que les faits du club et renvoyer les autres questions vers le responsable", "Un message d'accueil plus long", "Rien ; plus de réponses, c'est mieux"], answer: 1, why: "Les limites gardent l'aide dans son rôle et réduisent le risque qu'elle invente des choses." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tester et améliorer vos bots",
          minutes: 5,
          goal: "Tester les deux bots avec de vraies questions et corriger ce qui rate.",
          text: [
            "Tester, c'est essayer votre bot comme le feraient de vraies personnes. Écrivez 10 questions de test : les cinq de votre plan, quelques-unes posées autrement (\"on se retrouve quand ?\"), une avec une faute de frappe, et une à laquelle il ne doit pas répondre.",
            "Posez chaque question aux deux bots et notez chaque réponse : juste, fausse ou inventée. Le bot à mots-clés peut rater les questions posées autrement ; corrigez en ajoutant des mots-clés. Le bot d'aide IA peut sembler juste mais inventer des détails ; corrigez en resserrant ses instructions.",
            "Demandez aussi à un ami ou à un membre du club d'essayer votre bot. Les gens posent toujours des questions inattendues."
          ],
          steps: ["Écrivez 10 questions de test, avec d'autres formulations et une faute de frappe.", "Posez chaque question aux deux bots.", "Notez chaque réponse : juste, fausse ou inventée.", "Bot à mots-clés : ajoutez des mots-clés. Bot IA : resserrez les instructions.", "Faites tester par quelqu'un d'autre."],
          words: [["Test", "essayer un programme exprès pour trouver ce qui ne marche pas."], ["Cas de test", "une question ou une entrée utilisée pour tester un programme."]],
          slides: [
            { title: "10 questions de test", bullets: ["Vos questions prévues", "D'autres formulations et une faute", "Une à laquelle il ne doit pas répondre"] },
            { title: "Notez chaque réponse", bullets: ["Juste", "Fausse", "Inventée"] },
            { title: "Corrigez et retestez", bullets: ["Bot à mots-clés : ajoutez des mots-clés", "Bot IA : resserrez les instructions", "Faites essayer un ami"] }
          ],
          tryIt: "Posez vos 10 questions de test aux deux bots, notez chaque réponse et faites une correction à chaque bot. Testez de nouveau pour voir si les corrections ont marché.",
          youCanNow: "tester des chatbots avec de vraies questions, trouver ce qui rate et les améliorer.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qui a sa place dans une bonne série de questions de test ?", options: ["Seulement des questions copiées mot pour mot de votre plan", "Une seule question", "Des questions dont vous savez qu'elles vont marcher", "La même question posée avec d'autres mots"], answer: 3, why: "Les vraies personnes posent leurs questions avec d'autres mots et font des fautes de frappe, alors les tests aussi." },
            { objective: "O5", q: "L'aide IA a donné avec assurance une salle de réunion inventée. Comment la notez-vous ?", options: ["Juste, car elle avait l'air sûre", "Inventée, puis vous resserrez ses instructions", "Vous la sautez", "Juste, si c'était proche"], answer: 1, why: "Notez les détails inventés comme inventés et corrigez les instructions." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rendre votre bot sûr et honnête",
          minutes: 5,
          goal: "Ajouter des règles de sécurité et d'honnêteté, puis terminer le chatbot de votre club.",
          text: [
            "Un bot doit dire qu'il est un bot. Les gens ont le droit de savoir qu'ils ne parlent pas à une vraie personne. Commencez par un message comme : \"Bonjour, je suis le bot du club d'échecs. Je réponds aux questions simples. Pour le reste, demande à Mme Rivera.\"",
            "Il doit protéger la vie privée : ne jamais demander ni garder de mots de passe, de numéros de téléphone, d'adresses ou de numéros d'élève. Il doit rester dans son rôle : pas de conseils de santé, d'argent, juridiques ou personnels, et il doit renvoyer vers un adulte de confiance pour tout ce qui est sérieux.",
            "Avant de partager un bot avec votre club, obtenez l'accord de votre responsable, suivez les règles de votre école sur l'IA et la technologie, et gardez les réponses à jour quand les horaires changent."
          ],
          steps: ["Ajoutez un message d'accueil qui dit que c'est un bot et ce qu'il fait.", "Vérifiez qu'il ne demande jamais d'informations privées.", "Faites-le renvoyer les questions sérieuses ou inconnues vers un adulte de confiance.", "Obtenez l'accord de votre responsable avant de le partager.", "Mettez à jour les réponses quand les faits changent."],
          words: [["Transparence", "être ouvert et honnête, comme dire qu'un bot est un bot."], ["Vie privée", "la protection des informations personnelles."]],
          slides: [
            { title: "Dites que c'est un bot", bullets: ["Un accueil clair", "Ce qu'il peut faire ou non", "À qui demander pour le reste"] },
            { title: "Protégez la vie privée", bullets: ["Pas de mots de passe, numéros ou adresses", "Pas de numéros d'élève"] },
            { title: "Restez dans son rôle", bullets: ["Pas de conseils santé, argent ou juridiques", "Le sérieux va à un adulte de confiance", "Accord du responsable avant de partager"] }
          ],
          tryIt: "Tâche finale : terminez votre bot Python à mots-clés (cinq réponses, réponse de secours, bye) et votre fiche d'instructions du bot IA. Ajoutez un accueil qui dit que c'est un bot, testez les deux avec 10 questions, notez ce que chacun a réussi et raté, et faites une amélioration à chacun.",
          youCanNow: "créer, tester et partager un chatbot simple qui est utile, sûr et honnête sur le fait d'être un bot.",
          quickCheck: [
            { objective: "O6", q: "Laquelle de ces informations votre bot ne doit-il jamais demander ?", options: ["Quelle question la personne a", "Si la personne veut l'heure de la réunion", "Si la personne veut dire au revoir", "Son numéro de carte d'élève"], answer: 3, why: "Les bots ne doivent jamais demander ni garder de mots de passe, de numéros de téléphone, d'adresses ou de numéros d'identité." },
            { objective: "O6", q: "Votre bot est prêt. Que faites-vous avant de le partager avec le club ?", options: ["Vous obtenez l'accord du responsable et suivez les règles de l'école", "Vous le publiez tout de suite en public", "Vous enlevez le message d'accueil", "Vous le laissez demander les numéros de téléphone pour faire un suivi"], answer: 0, why: "Obtenez l'accord de votre responsable et suivez les règles de l'école avant de partager." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Bots d'aide IA, tests et sécurité",
        questions: [
          { objective: "O4", q: "Que met-on sur la fiche d'instructions d'un bot d'aide IA ?", options: ["Votre mot de passe", "Le rôle, des faits vérifiés, le ton et les limites", "Une histoire au hasard", "Rien ; on commence à discuter"], answer: 1, why: "Ces quatre parties cadrent et limitent le bot." },
          { objective: "O4", q: "Pourquoi dire au bot IA d'utiliser seulement les faits que vous lui avez donnés ?", options: ["Pour le ralentir", "Pour réduire le risque qu'il invente des détails", "Pour le rallonger", "La loi l'exige"], answer: 1, why: "Les limites réduisent les réponses inventées." },
          { objective: "O5", q: "Votre bot à mots-clés rate \"on se retrouve quand ?\". Comment corriger ?", options: ["Supprimer le bot", "Enlever la réponse de secours", "Ajouter des mots-clés comme \"retrouve\"", "Accuser l'utilisateur"], answer: 2, why: "Plus de mots-clés attrapent d'autres formulations." },
          { objective: "O6", q: "Pourquoi un bot doit-il dire qu'il est un bot ?", options: ["Les gens ont le droit de savoir qu'ils ne parlent pas à une personne", "Ça fait plus cool", "Ça raccourcit le code", "Ce n'est jamais utile"], answer: 0, why: "La transparence donne confiance." },
          { objective: "O6", q: "Avant de partager votre bot avec le club, vous devez :", options: ["Ajouter une demande de numéro de téléphone", "Ne pas le tester", "Cacher que c'est un bot", "Obtenir l'accord du responsable et suivre les règles de l'école"], answer: 3, why: "L'accord d'un adulte et les règles de l'école passent en premier." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Créer des chatbots IA simples",
    questions: [
      { objective: "O1", q: "Un chatbot est :", options: ["Un programme avec qui on parle en écrivant ou en parlant", "Une coque de téléphone", "Un type de bras robotique", "Une adresse de site web"], answer: 0, why: "Les chatbots sont des programmes de conversation." },
      { objective: "O1", q: "Une force d'un chatbot à mots-clés est qu'il est :", options: ["Capable de répondre à tout", "Simple et prévisible", "Toujours créatif", "Relié à tous les sites web"], answer: 1, why: "Il dit seulement ce que vous avez programmé." },
      { objective: "O1", q: "Un grand modèle de langage est :", options: ["Un grand clavier", "Une matière scolaire", "Le type d'IA derrière des assistants comme ChatGPT", "Une erreur Python"], answer: 2, why: "Les grands modèles de langage ont appris à partir d'énormes quantités de texte." },
      { objective: "O2", q: "Quel est le meilleur travail pour un premier chatbot ?", options: ["Donner des conseils médicaux", "Gérer des comptes bancaires", "Répondre à tout sur le monde", "Répondre aux questions des nouveaux membres de votre club"], answer: 3, why: "Un travail petit et clair, c'est le mieux." },
      { objective: "O2", q: "Qui doit vérifier les réponses de votre plan de bot ?", options: ["Vous, avec le responsable du club", "Personne", "Un inconnu en ligne", "Le bot lui-même"], answer: 0, why: "Les réponses doivent être justes ; vérifiez avec le responsable." },
      { objective: "O2", q: "Que doit faire votre bot quand il ne sait pas ?", options: ["Inventer une réponse", "Envoyer les gens vers un vrai adulte comme le responsable", "Demander leur numéro de téléphone", "Arrêter de marcher"], answer: 1, why: "Une bonne réponse de secours renvoie vers une vraie personne." },
      { objective: "O3", q: "Que fait while True: en Python ?", options: ["Il affiche True", "Il termine le programme", "Il commence une boucle qui se répète jusqu'à break", "Il crée une variable"], answer: 2, why: "while True boucle jusqu'à un break." },
      { objective: "O3", q: "Pourquoi utiliser .lower() sur le message de l'utilisateur ?", options: ["Pour le raccourcir", "Pour le supprimer", "Pour le traduire", "Pour que \"HEURE\" et \"heure\" correspondent au même mot-clé"], answer: 3, why: "Les minuscules facilitent la correspondance." },
      { objective: "O3", q: "Que veut dire elif ?", options: ["Else if : vérifier une autre condition", "Fin de boucle", "Erreur", "Sortie"], answer: 0, why: "elif vérifie une autre condition après if." },
      { objective: "O3", q: "Vous avez une erreur Python. Une bonne première étape est de :", options: ["Supprimer le notebook", "Lire la dernière ligne et le numéro de ligne", "Redémarrer l'ordinateur de l'école", "Abandonner"], answer: 1, why: "Le message d'erreur montre le problème." },
      { objective: "O4", q: "La ligne de rôle d'une fiche d'instructions pourrait dire :", options: ["\"Demande les mots de passe\"", "\"Fais semblant d'être le directeur\"", "\"Tu es l'aide du club d'échecs du lycée Lincoln\"", "\"Dis n'importe quoi\""], answer: 2, why: "Le rôle dit à l'IA qui être et qui elle aide." },
      { objective: "O4", q: "Où peut-on en général mettre les instructions d'un bot d'aide dans un assistant gratuit ?", options: ["Dans les paramètres de l'ordinateur", "Dans un SMS", "Dans la barre d'adresse du navigateur", "Au début d'une nouvelle discussion"], answer: 3, why: "Coller les instructions au début d'une discussion marche dans la plupart des assistants." },
      { objective: "O4", q: "Quelle limite mettre sur une fiche d'instructions ?", options: ["\"Ne demande jamais d'informations personnelles\"", "\"Invente des réponses si tu n'es pas sûr\"", "\"Donne des conseils juridiques\"", "\"Fais semblant d'être humain\""], answer: 0, why: "Les limites gardent le bot sûr." },
      { objective: "O5", q: "Tester un bot, c'est :", options: ["Le supprimer", "L'essayer exprès pour trouver ce qui ne marche pas", "Le partager tout de suite", "Le rallonger"], answer: 1, why: "Les tests trouvent les problèmes avant les utilisateurs." },
      { objective: "O5", q: "Pourquoi mettre une question avec une faute de frappe dans vos tests ?", options: ["Pour casser l'ordinateur", "Les fautes sont interdites", "Les vraies personnes font des fautes de frappe", "Pour rendre le bot impoli"], answer: 2, why: "Les tests doivent ressembler à la façon dont les gens tapent." },
      { objective: "O5", q: "Le bot IA invente un lieu de réunion. Que corrigez-vous ?", options: ["La boucle Python", "Votre clavier", "Rien", "Ses instructions, pour qu'il utilise seulement vos faits"], answer: 3, why: "Des instructions plus strictes réduisent les détails inventés." },
      { objective: "O5", q: "Pourquoi faire tester votre bot par un ami ?", options: ["Les gens posent des questions inattendues", "Les amis doivent approuver tout le code", "Ça rend le bot plus rapide", "Ce n'est pas utile"], answer: 0, why: "De nouveaux testeurs trouvent de nouveaux problèmes." },
      { objective: "O6", q: "Un bon message d'accueil de bot dit :", options: ["\"Je suis une vraie personne\"", "\"Bonjour, je suis le bot du club. Je réponds aux questions simples. Pour le reste, demande au responsable.\"", "\"Donne-moi ton adresse\"", "Rien"], answer: 1, why: "Il est honnête et explique ce que fait le bot." },
      { objective: "O6", q: "Un membre du club pose à votre bot une question sur un problème personnel grave. Le bot doit :", options: ["Donner des conseils quand même", "L'ignorer", "L'orienter vers un adulte de confiance", "Demander son numéro de téléphone"], answer: 2, why: "Les questions sérieuses vont à de vrais adultes de confiance." },
      { objective: "O6", q: "Le club change de jour de réunion. Que faites-vous ?", options: ["Rien", "Supprimer le bot", "Dire aux membres que le bot a toujours raison", "Mettre à jour les réponses du bot"], answer: 3, why: "Les bots doivent être tenus à jour." }
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
      9,
      10,
      12,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Le bot à mots-clés marche",
        objective: "O3",
        notYet: "Le bot ne s'exécute pas, ou a moins de cinq réponses.",
        meets: "S'exécute dans Colab, accueille l'utilisateur, répond à au moins cinq questions, a une réponse de secours et s'arrête à « au revoir ».",
        exceeds: "Reconnaît aussi des questions posées avec d'autres mots grâce à des mots-clés en plus."
      },
      {
        name: "Fiche de l'aide IA",
        objective: "O4",
        notYet: "Il manque à la fiche le rôle, les faits ou les limites.",
        meets: "Le rôle, des faits vérifiés, le ton et les limites, et elle renvoie les questions inconnues vers le responsable.",
        exceeds: "L'aide est restée dans son rôle face à une question de test piège."
      },
      {
        name: "Réponses vérifiées",
        objective: "O2",
        notYet: "Les réponses ne sont pas vérifiées ou viennent de l'IA.",
        meets: "Chaque réponse des deux bots est vérifiée auprès du responsable du club.",
        exceeds: "Comprend un plan pour mettre à jour les réponses quand les faits changent."
      },
      {
        name: "Tests et corrections",
        objective: "O5",
        notYet: "Moins de 10 tests, ou aucune correction.",
        meets: "10 tests sur les deux bots, chacun noté juste, faux ou inventé, et une correction sur chaque bot.",
        exceeds: "Testé de nouveau après les corrections, et quelqu'un d'autre a aussi testé les bots."
      },
      {
        name: "Sûr et honnête",
        objective: "O6",
        notYet: "Le bot ne dit pas que c'est un bot, ou demande des informations privées.",
        meets: "Le message d'accueil dit que c'est un bot, il ne demande aucune information privée, et les questions sérieuses vont à un adulte de confiance.",
        exceeds: "Le responsable a approuvé son partage."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les clubs ou les équipes qui utilisent le bot de l'apprenant avec l'accord du responsable dans les 60 jours",
      "Les apprenants qui créent seuls un autre programme ou un autre bot dans les 30 jours (sondage de suivi)",
      "Les apprenants qui commencent un autre cours Koach Learn de programmation ou d'IA dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec un navigateur web et Internet",
      "Google Colab et un assistant d'IA gratuit, avec des comptes que l'apprenant a le droit d'utiliser",
      "Le plan du bot sur papier ou dans un document",
      "Environ 60 minutes en tout, plus le temps des tests"
    ],
    facilitatorNotes: [
      "Vérifiez avant le cours l'âge minimum de Colab et des outils d'IA ; préparez un compte de démonstration pour que les apprenants trop jeunes puissent quand même suivre.",
      "Programmez le bot à mots-clés en direct, ligne par ligne, et oubliez exprès un deux-points pour que les apprenants s'entraînent à lire les erreurs.",
      "Demandez aux apprenants d'échanger leurs bots et de tester ceux des autres avec des questions pièges.",
      "Vérifiez qu'aucun bot ne demande ni ne garde d'informations privées, et que chacun dit que c'est un bot.",
      "Évaluez les deux bots avec la grille et donnez un retour sur une ligne « Pas encore » à la fois."
    ]
  }
};
