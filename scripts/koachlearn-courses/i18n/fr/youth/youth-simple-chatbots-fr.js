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
  chapters: [
    {
      name: "Chapitre 1 : Comment marchent les chatbots, et votre premier bot",
      lessons: [
        {
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
          youCanNow: "expliquer la différence entre les chatbots à mots-clés et les chatbots IA, et choisir un vrai usage pour un bot."
        },
        {
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
          youCanNow: "prévoir le travail d'un chatbot, ses réponses, sa réponse de secours et ses règles de sécurité."
        },
        {
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
          youCanNow: "créer et exécuter un chatbot à mots-clés en Python avec des réponses, une réponse de secours et un moyen de s'arrêter."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment marchent les chatbots, et votre premier bot",
        questions: [
          { q: "Comment un chatbot à mots-clés décide-t-il quoi dire ?", options: ["Il lit dans vos pensées", "Il suit des règles qui cherchent des mots dans votre message", "Il cherche dans tout internet", "Il demande à un professeur"], answer: 1, why: "Les bots à mots-clés suivent des règles écrites par une personne." },
          { q: "Laquelle est une faiblesse d'un chatbot IA ?", options: ["Il peut se tromper ou inventer", "Il ne peut dire qu'une phrase", "Il ne comprend pas les mots normaux", "Il n'a pas besoin d'électricité"], answer: 0, why: "Les grands modèles de langage peuvent donner de mauvaises réponses qui semblent justes." },
          { q: "Qu'est-ce qu'une réponse de secours ?", options: ["Le premier bonjour", "Un mot de passe", "Ce que dit le bot quand il ne sait pas", "Le nom du bot"], answer: 2, why: "La réponse de secours gère les questions auxquelles le bot ne peut pas répondre." },
          { q: "Que ne doit JAMAIS demander le bot de votre club ?", options: ["Ce que l'utilisateur veut savoir", "S'il veut s'inscrire", "Son ouverture préférée aux échecs", "Son adresse"], answer: 3, why: "Les bots ne doivent jamais recueillir de détails privés." },
          { q: "Dans le bot Python, que fait break ?", options: ["Il arrête la boucle pour finir la discussion", "Il casse l'ordinateur", "Il ajoute une réponse", "Il supprime le notebook"], answer: 0, why: "break met fin à la boucle while." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Bots d'aide IA, tests et sécurité",
      lessons: [
        {
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
          youCanNow: "écrire des instructions claires qui transforment un assistant d'IA gratuit en bot d'aide ciblé et limité."
        },
        {
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
          youCanNow: "tester des chatbots avec de vraies questions, trouver ce qui rate et les améliorer."
        },
        {
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
          youCanNow: "créer, tester et partager un chatbot simple qui est utile, sûr et honnête sur le fait d'être un bot."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Bots d'aide IA, tests et sécurité",
        questions: [
          { q: "Que met-on sur la fiche d'instructions d'un bot d'aide IA ?", options: ["Votre mot de passe", "Le rôle, des faits vérifiés, le ton et les limites", "Une histoire au hasard", "Rien ; on commence à discuter"], answer: 1, why: "Ces quatre parties cadrent et limitent le bot." },
          { q: "Pourquoi dire au bot IA d'utiliser seulement les faits que vous lui avez donnés ?", options: ["Pour le ralentir", "Pour réduire le risque qu'il invente des détails", "Pour le rallonger", "La loi l'exige"], answer: 1, why: "Les limites réduisent les réponses inventées." },
          { q: "Votre bot à mots-clés rate \"on se retrouve quand ?\". Comment corriger ?", options: ["Supprimer le bot", "Enlever la réponse de secours", "Ajouter des mots-clés comme \"retrouve\"", "Accuser l'utilisateur"], answer: 2, why: "Plus de mots-clés attrapent d'autres formulations." },
          { q: "Pourquoi un bot doit-il dire qu'il est un bot ?", options: ["Les gens ont le droit de savoir qu'ils ne parlent pas à une personne", "Ça fait plus cool", "Ça raccourcit le code", "Ce n'est jamais utile"], answer: 0, why: "La transparence donne confiance." },
          { q: "Avant de partager votre bot avec le club, vous devez :", options: ["Ajouter une demande de numéro de téléphone", "Ne pas le tester", "Cacher que c'est un bot", "Obtenir l'accord du responsable et suivre les règles de l'école"], answer: 3, why: "L'accord d'un adulte et les règles de l'école passent en premier." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Créer des chatbots IA simples",
    questions: [
      { q: "Un chatbot est :", options: ["Un programme avec qui on parle en écrivant ou en parlant", "Une coque de téléphone", "Un type de bras robotique", "Une adresse de site web"], answer: 0, why: "Les chatbots sont des programmes de conversation." },
      { q: "Une force d'un chatbot à mots-clés est qu'il est :", options: ["Capable de répondre à tout", "Simple et prévisible", "Toujours créatif", "Relié à tous les sites web"], answer: 1, why: "Il dit seulement ce que vous avez programmé." },
      { q: "Un grand modèle de langage est :", options: ["Un grand clavier", "Une matière scolaire", "Le type d'IA derrière des assistants comme ChatGPT", "Une erreur Python"], answer: 2, why: "Les grands modèles de langage ont appris à partir d'énormes quantités de texte." },
      { q: "Quel est le meilleur travail pour un premier chatbot ?", options: ["Donner des conseils médicaux", "Gérer des comptes bancaires", "Répondre à tout sur le monde", "Répondre aux questions des nouveaux membres de votre club"], answer: 3, why: "Un travail petit et clair, c'est le mieux." },
      { q: "Qui doit vérifier les réponses de votre plan de bot ?", options: ["Vous, avec le responsable du club", "Personne", "Un inconnu en ligne", "Le bot lui-même"], answer: 0, why: "Les réponses doivent être justes ; vérifiez avec le responsable." },
      { q: "Que doit faire votre bot quand il ne sait pas ?", options: ["Inventer une réponse", "Envoyer les gens vers un vrai adulte comme le responsable", "Demander leur numéro de téléphone", "Arrêter de marcher"], answer: 1, why: "Une bonne réponse de secours renvoie vers une vraie personne." },
      { q: "Que fait while True: en Python ?", options: ["Il affiche True", "Il termine le programme", "Il commence une boucle qui se répète jusqu'à break", "Il crée une variable"], answer: 2, why: "while True boucle jusqu'à un break." },
      { q: "Pourquoi utiliser .lower() sur le message de l'utilisateur ?", options: ["Pour le raccourcir", "Pour le supprimer", "Pour le traduire", "Pour que \"HEURE\" et \"heure\" correspondent au même mot-clé"], answer: 3, why: "Les minuscules facilitent la correspondance." },
      { q: "Que veut dire elif ?", options: ["Else if : vérifier une autre condition", "Fin de boucle", "Erreur", "Sortie"], answer: 0, why: "elif vérifie une autre condition après if." },
      { q: "Vous avez une erreur Python. Une bonne première étape est de :", options: ["Supprimer le notebook", "Lire la dernière ligne et le numéro de ligne", "Redémarrer l'ordinateur de l'école", "Abandonner"], answer: 1, why: "Le message d'erreur montre le problème." },
      { q: "La ligne de rôle d'une fiche d'instructions pourrait dire :", options: ["\"Demande les mots de passe\"", "\"Fais semblant d'être le directeur\"", "\"Tu es l'aide du club d'échecs du lycée Lincoln\"", "\"Dis n'importe quoi\""], answer: 2, why: "Le rôle dit à l'IA qui être et qui elle aide." },
      { q: "Où peut-on en général mettre les instructions d'un bot d'aide dans un assistant gratuit ?", options: ["Dans les paramètres de l'ordinateur", "Dans un SMS", "Dans la barre d'adresse du navigateur", "Au début d'une nouvelle discussion"], answer: 3, why: "Coller les instructions au début d'une discussion marche dans la plupart des assistants." },
      { q: "Quelle limite mettre sur une fiche d'instructions ?", options: ["\"Ne demande jamais d'informations personnelles\"", "\"Invente des réponses si tu n'es pas sûr\"", "\"Donne des conseils juridiques\"", "\"Fais semblant d'être humain\""], answer: 0, why: "Les limites gardent le bot sûr." },
      { q: "Tester un bot, c'est :", options: ["Le supprimer", "L'essayer exprès pour trouver ce qui ne marche pas", "Le partager tout de suite", "Le rallonger"], answer: 1, why: "Les tests trouvent les problèmes avant les utilisateurs." },
      { q: "Pourquoi mettre une question avec une faute de frappe dans vos tests ?", options: ["Pour casser l'ordinateur", "Les fautes sont interdites", "Les vraies personnes font des fautes de frappe", "Pour rendre le bot impoli"], answer: 2, why: "Les tests doivent ressembler à la façon dont les gens tapent." },
      { q: "Le bot IA invente un lieu de réunion. Que corrigez-vous ?", options: ["La boucle Python", "Votre clavier", "Rien", "Ses instructions, pour qu'il utilise seulement vos faits"], answer: 3, why: "Des instructions plus strictes réduisent les détails inventés." },
      { q: "Pourquoi faire tester votre bot par un ami ?", options: ["Les gens posent des questions inattendues", "Les amis doivent approuver tout le code", "Ça rend le bot plus rapide", "Ce n'est pas utile"], answer: 0, why: "De nouveaux testeurs trouvent de nouveaux problèmes." },
      { q: "Un bon message d'accueil de bot dit :", options: ["\"Je suis une vraie personne\"", "\"Bonjour, je suis le bot du club. Je réponds aux questions simples. Pour le reste, demande au responsable.\"", "\"Donne-moi ton adresse\"", "Rien"], answer: 1, why: "Il est honnête et explique ce que fait le bot." },
      { q: "Un membre du club pose à votre bot une question sur un problème personnel grave. Le bot doit :", options: ["Donner des conseils quand même", "L'ignorer", "L'orienter vers un adulte de confiance", "Demander son numéro de téléphone"], answer: 2, why: "Les questions sérieuses vont à de vrais adultes de confiance." },
      { q: "Le club change de jour de réunion. Que faites-vous ?", options: ["Rien", "Supprimer le bot", "Dire aux membres que le bot a toujours raison", "Mettre à jour les réponses du bot"], answer: 3, why: "Les bots doivent être tenus à jour." }
    ]
  }
};
