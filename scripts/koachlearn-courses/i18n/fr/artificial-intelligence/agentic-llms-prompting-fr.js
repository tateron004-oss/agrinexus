"use strict";

// Koach Learn course, French translation of artificial-intelligence/agentic-llms-prompting.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// Python code, library names, model-call lines and JSON keys are kept exactly as in the English course. The "strawberry" letter-count
// example keeps the English word on purpose (it is a known tokenisation trap).

module.exports = {
  id: "agentic-llms-prompting-fr",
  lang: "fr",
  translationOf: "agentic-llms-prompting",
  category: "Artificial Intelligence",
  name: "Comprendre les LLM et l'ingénierie des consignes",
  skills: "Expliquer les tokens et le contexte, Rédiger une consigne système, Utiliser des exemples, Obtenir une sortie JSON structurée, Appeler un LLM depuis Python, Tester une consigne",
  outcome: "rédiger et tester une consigne système fiable pour un agent : elle indique un rôle, une tâche, des règles et un format de sortie avec un exemple, renvoie un JSON propre, et vous l'avez vérifiée sur cinq entrées de test depuis un court notebook Python.",
  about: [
    "Voici le cours 2 du programme Concevoir, construire et déployer des agents IA autonomes. Le modèle au cœur de chaque agent est un grand modèle de langage, et la façon dont vous lui donnez des instructions décide si l'agent se comporte bien. Ce cours vous explique en mots simples comment fonctionnent les LLM et comment bien les instruire.",
    "Le chapitre 1 porte sur le fonctionnement du modèle et sur la rédaction d'une bonne consigne (prompt) dans un chatbot gratuit. Le chapitre 2 passe à Python dans Google Colab, un notebook gratuit dans votre navigateur, où vous appelez un modèle depuis le code, demandez du JSON et testez votre consigne comme un ingénieur.",
    "Le code apparaît sous forme de courtes lignes dans le texte des leçons. Vous pouvez les copier dans Colab. Si vous n'avez jamais codé, suivez quand même ; le cours « Introduction à la programmation avec Python » est un bon compagnon. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Rédigez une consigne système pour une tâche de votre agent du cours 1 (par exemple : « classer un message entrant en : question, réclamation, commande, autre »). Elle doit donner un rôle, la tâche, trois règles, le format de sortie JSON exact et un exemple. Exécutez-la depuis un notebook Colab sur cinq entrées de test, dont une piégeuse, notez si chaque sortie était un JSON valide et correct, et modifiez la consigne une fois pour corriger un échec.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes qui construisent leur premier agent IA dans le programme Concevoir, construire et déployer des agents IA autonomes : propriétaires de petites entreprises, personnes en reconversion, étudiants et employés qui ont terminé le cours 1 et prévu une tâche pour leur agent.",
    startingPoint: "Ils ont utilisé un chatbot gratuit et planifié un agent sur papier au cours 1. La plupart ont peu ou pas d'expérience en programmation et n'ont jamais appelé un modèle depuis du code.",
    gap: "Un agent n'est fiable que si son modèle reçoit des instructions fiables. Les apprenants doivent rédiger des consignes système claires, obtenir des réponses qu'un programme peut lire et tester leurs consignes avec méthode, sinon leurs agents se comporteront de façon imprévisible et casseront sur des entrées inhabituelles.",
    constraints: [
      "Niveau de lecture : mots simples ; le code est montré en courtes lignes à copier",
      "Appareils : un ordinateur avec un navigateur web ; Google Colab est gratuit mais ses ressources ne sont pas garanties",
      "Les offres d'API gratuites ont des limites et peuvent utiliser les données : aucune donnée privée ou de client pendant les exercices",
      "Les clés API doivent rester secrètes, hors des notebooks et des captures d'écran",
      "Temps : des leçons courtes avec un exercice pratique chacune"
    ],
    prerequisites: "Le premier cours de Concevoir, construire et déployer des agents IA autonomes. « Introduction à la programmation avec Python » est un compagnon utile."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'une réponse fausse mais assurée d'un chatbot", action: "expliquer comment les tokens, la prédiction et la fenêtre de contexte peuvent faire paraître un LLM juste alors qu'il se trompe", standard: "avec vos propres mots, en citant au moins deux causes" },
    { id: "O2", condition: "Pour une tâche de votre agent", action: "rédiger une consigne système avec un rôle, une tâche, un contexte, des règles et un format de sortie", standard: "avec toutes les parties présentes et des règles vérifiables" },
    { id: "O3", condition: "À partir de votre consigne système", action: "ajouter un exemple complet et un format de sortie JSON exact", standard: "pour qu'au moins 4 réponses sur 5 soient uniquement du JSON valide avec les bonnes clés" },
    { id: "O4", condition: "Dans un notebook Google Colab gratuit", action: "appeler un LLM depuis Python avec la clé API enregistrée comme secret", standard: "avec la réponse affichée et aucune clé visible dans le code" },
    { id: "O5", condition: "À partir d'une réponse du modèle dans votre notebook", action: "transformer la réponse JSON en données Python et gérer une mauvaise réponse", standard: "sans que le code plante sur une réponse vide ou cassée" },
    { id: "O6", condition: "À partir de cinq entrées de test, dont une piège", action: "tester la consigne, noter les résultats et changer une seule chose pour corriger un échec", standard: "en relançant tous les tests après chaque changement" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Comment fonctionnent les LLM et comment les instruire",
      lessons: [
        {
          objectives: ["O1"],
          title: "Comment écrit un LLM : tokens, prédiction et contexte",
          minutes: 5,
          goal: "Expliquer pourquoi un LLM peut paraître juste et pourtant se tromper.",
          text: [
            "Un LLM écrit un petit morceau de texte à la fois. Ces morceaux s'appellent des tokens : un mot court, une partie d'un mot plus long ou un signe de ponctuation. À chaque étape, le modèle prédit un token suivant probable à partir de tout ce qu'il a vu jusque-là.",
            "Tout ce que le modèle peut voir en même temps forme sa fenêtre de contexte : la consigne système, la conversation, les documents que vous collez et sa propre réponse en cours. Ce qui est hors de la fenêtre de contexte n'existe pas pour le modèle. Il ne se souvient pas des conversations passées, sauf si l'application les ajoute.",
            "Comme il prédit un texte probable, un LLM peut écrire une réponse fluide mais fausse. Il ne vérifie pas les faits, sauf s'il a un outil de recherche. Ce sont votre consigne, le contexte que vous lui donnez et les contrôles que vous construisez qui le rendent fiable."
          ],
          words: [["Token", "un petit morceau de texte, souvent une partie de mot, qu'un LLM lit et écrit."], ["Fenêtre de contexte", "tout le texte que le modèle peut voir en même temps."], ["Prédiction", "le modèle qui choisit un token suivant probable selon ce qui précède."]],
          slides: [
            { title: "Un LLM écrit token par token", bullets: ["Un token est un mot ou une partie de mot", "Chaque étape prédit un token suivant probable"] },
            { title: "La fenêtre de contexte", bullets: ["Tout ce que le modèle voit en même temps", "Consigne système, conversation, documents, sa réponse", "Hors de la fenêtre, rien n'existe pour lui"] },
            { title: "Pourquoi il peut se tromper", bullets: ["Il prédit un texte probable, pas des faits vérifiés", "Consigne, contexte et contrôles le rendent fiable"] }
          ],
          tryIt: "Dans un chatbot gratuit, demandez : « Combien de lettres r y a-t-il dans le mot anglais strawberry ? Puis explique comment les tokens peuvent rendre cela difficile pour toi. » Notez si la première réponse était juste, et pourquoi les tokens comptent.",
          youCanNow: "expliquer les tokens et la fenêtre de contexte, et pourquoi un LLM doit être vérifié.",
          quickCheck: [
            { objective: "O1", q: "Que fait un LLM quand il écrit une réponse ?", options: ["Il cherche la réponse dans une base de données vérifiée", "Il prédit les tokens suivants probables, un à la fois", "Il copie une réponse enregistrée écrite par une personne", "Il lance une recherche et lit le premier résultat"], answer: 1, why: "Un LLM prédit le texte token par token : il peut paraître fluide sans vérifier les faits." },
            { objective: "O1", q: "Un chatbot donne une réponse assurée sur une règle importante pour votre travail. Que faites-vous ?", options: ["Vous l'utilisez, puisqu'il avait l'air sûr", "Vous reposez la question jusqu'à ce qu'il soit d'accord", "Vous vérifiez la règle dans une source fiable avant de l'utiliser", "Vous collez la réponse dans une nouvelle conversation pour la confirmer"], answer: 2, why: "Une réponse fluide peut quand même être fausse : les faits importants doivent venir d'une source fiable." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Les parties d'une bonne consigne",
          minutes: 6,
          goal: "Rédiger une consigne avec un rôle, une tâche, un contexte, des règles et un format de sortie.",
          text: [
            "Une bonne consigne (prompt) pour un agent a cinq parties. Le rôle : qui est le modèle (« Tu classes les messages des clients d'une petite boulangerie. »). La tâche : le travail unique. Le contexte : les faits dont il a besoin. Les règles : ce qu'il doit faire et ne doit pas faire. Le format de sortie : exactement à quoi la réponse doit ressembler.",
            "La consigne système contient les parties qui restent les mêmes à chaque exécution : rôle, règles et format. Le message utilisateur contient ce qui change à chaque fois : le nouveau message à classer, la nouvelle question.",
            "Soyez précis et positif. « Réponds en deux phrases » marche mieux que « ne sois pas long ». Dites quoi faire en cas de doute : « Si le message n'entre dans aucune catégorie, utilise other. » Cette seule règle évite beaucoup de mauvaises suppositions."
          ],
          steps: ["Rôle : qui est le modèle ?", "Tâche : un seul travail clair.", "Contexte : les faits dont il a besoin.", "Règles : obligations, interdits, et quoi faire en cas de doute.", "Format : exactement à quoi ressemble la réponse."],
          words: [["Consigne système", "les instructions permanentes envoyées avec chaque demande (system prompt)."], ["Message utilisateur", "la partie qui change à chaque fois, comme une nouvelle question ou une nouvelle entrée."]],
          slides: [
            { title: "Cinq parties d'une bonne consigne", bullets: ["Rôle", "Tâche", "Contexte et règles", "Format de sortie"] },
            { title: "Consigne système et message utilisateur", bullets: ["Système : ce qui reste (rôle, règles, format)", "Utilisateur : ce qui change (la nouvelle entrée)"] },
            { title: "Rédigez des règles claires", bullets: ["Dites quoi faire, pas seulement quoi éviter", "Donnez une règle pour le doute", "Exemple : si rien ne convient, utilise « other »"] }
          ],
          tryIt: "Rédigez une consigne système en cinq parties pour une tâche de votre agent du cours 1. Collez-la dans un chatbot gratuit, puis envoyez trois entrées différentes et regardez s'il suit chaque règle.",
          youCanNow: "rédiger une consigne avec un rôle, une tâche, un contexte, des règles et un format de sortie.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce que la partie « rôle » d'une consigne système ?", options: ["Les clés JSON exactes que vous voulez recevoir", "Le message que l'utilisateur envoie cette fois-ci", "La liste des entrées de test", "Ce que le modèle doit jouer, par exemple un trieur de demandes d'assistance"], answer: 3, why: "Le rôle dit au modèle qui il est pour cette tâche ; les autres parties couvrent la tâche, le contexte, les règles et le format." },
            { objective: "O2", q: "Votre consigne dit « sois utile et bon » et les réponses varient. Que changeriez-vous ?", options: ["Remplacer cela par des règles claires que le modèle peut suivre et que vous pouvez vérifier", "Allonger la consigne avec plus de mots aimables", "Supprimer toutes les règles pour laisser le modèle décider", "Passer à un autre chatbot"], answer: 0, why: "Des mots vagues ne se vérifient pas ; des règles précises rendent le comportement régulier." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Exemples, étapes et sortie structurée",
          minutes: 5,
          goal: "Utiliser un exemple et un format JSON pour obtenir des réponses qu'un programme peut lire.",
          text: [
            "Montrer vaut mieux que dire. Un ou deux exemples complets dans la consigne (une entrée et la sortie exacte voulue) améliorent beaucoup les résultats. On appelle cela la consigne à quelques exemples (few-shot). Zéro exemple se dit zero-shot.",
            "Les agents ont besoin de réponses que le code peut lire, pas de paragraphes bavards. Demandez du JSON, un format texte simple de noms et de valeurs : {\"category\": \"order\", \"urgent\": false}. Dites : « Réponds uniquement en JSON, sans autre texte », et montrez les clés exactes.",
            "Pour les tâches plus difficiles, demandez au modèle de travailler par étapes : d'abord lister les faits, puis décider. Beaucoup de services de modèles peuvent aussi imposer un JSON valide avec un réglage appelé sortie structurée (structured output) ; cherchez-le dans la documentation de votre fournisseur."
          ],
          words: [["Consigne à quelques exemples (few-shot)", "donner au modèle quelques exemples d'entrée avec la bonne sortie."], ["JSON", "un format texte simple de valeurs nommées que les programmes peuvent lire, comme {\"name\": \"Ana\"}."], ["Sortie structurée", "un réglage du modèle qui oblige la réponse à suivre un format exact."]],
          slides: [
            { title: "Montrez, ne dites pas seulement", bullets: ["Zero-shot : aucun exemple", "Few-shot : un à trois exemples complets", "Les exemples améliorent beaucoup les résultats"] },
            { title: "Demandez du JSON", bullets: ["Les programmes peuvent le lire", "« Réponds uniquement en JSON, sans autre texte »", "Montrez les clés exactes voulues"] },
            { title: "Tâches plus difficiles", bullets: ["Faites lister les faits, puis décider", "Utilisez la sortie structurée si disponible"] }
          ],
          tryIt: "Ajoutez un exemple complet et un format JSON à votre consigne de la leçon 2. Envoyez cinq entrées. Comptez combien de réponses étaient uniquement du JSON avec les bonnes clés.",
          youCanNow: "utiliser des exemples et un format JSON pour obtenir des réponses que votre code peut lire.",
          quickCheck: [
            { objective: "O3", q: "Pourquoi ajouter un exemple complet à une consigne ?", options: ["Il rend le modèle plus rapide", "Il cache les règles à l'utilisateur", "Il montre au modèle le type exact de réponse que vous voulez", "Il remplace le besoin d'un rôle"], answer: 2, why: "Un exemple montre au modèle la forme de réponse et le format à reproduire." },
            { objective: "O3", q: "Certaines réponses arrivent en JSON précédé d'une phrase aimable. Que feriez-vous ?", options: ["L'accepter, puisque le JSON est quelque part dedans", "Écrire dans la consigne de renvoyer uniquement du JSON avec les clés exactes, et montrer un exemple", "Demander une réponse plus longue", "Supprimer le format de sortie pour laisser le modèle libre"], answer: 1, why: "Le code n'a besoin que du JSON : la consigne doit le dire clairement et le montrer." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment fonctionnent les LLM et comment les instruire",
        questions: [
          { objective: "O1", q: "Qu'est-ce qu'un token ?", options: ["Un mot de passe pour l'IA", "Une pièce pour payer l'IA", "Un petit morceau de texte que le modèle lit et écrit", "Un type de chatbot"], answer: 2, why: "Les LLM travaillent sur des tokens : des mots ou des parties de mots." },
          { objective: "O1", q: "Vous avez collé un document dans une conversation. Dans une nouvelle conversation, le modèle ne le connaît pas. Pourquoi ?", options: ["Le document est maintenant hors de sa fenêtre de contexte", "Le modèle est cassé", "Les documents sont interdits", "Il lui faut un ordinateur plus rapide"], answer: 0, why: "Le modèle ne voit que ce qui est dans la fenêtre de contexte actuelle." },
          { objective: "O2", q: "Quelle partie a sa place dans la consigne système ?", options: ["Une blague au hasard", "Le message du client d'aujourd'hui", "Votre mot de passe", "Les règles qui s'appliquent à chaque exécution"], answer: 3, why: "La consigne système contient ce qui reste ; le message utilisateur contient ce qui change." },
          { objective: "O2", q: "Quelle règle est la mieux écrite ?", options: ["« Ne sois pas long. »", "« Réponds en deux phrases. En cas de doute, dis : pas sûr. »", "« Fais de ton mieux. »", "« Sois bon. »"], answer: 1, why: "Elle est précise, positive et dit quoi faire en cas de doute." },
          { objective: "O3", q: "Pourquoi demander du JSON au modèle d'un agent ?", options: ["C'est plus joli", "Les modèles ne savent pas écrire de paragraphes", "C'est plus court à taper", "Votre code peut lire la réponse de façon fiable"], answer: 3, why: "Les agents passent les réponses au code, et le code a besoin d'un format fixe." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Appeler et tester un LLM depuis Python",
      lessons: [
        {
          objectives: ["O4"],
          title: "Votre premier appel de modèle depuis Google Colab",
          minutes: 6,
          goal: "Appeler un LLM depuis un notebook Python et afficher la réponse.",
          text: [
            "Google Colab est un notebook Python gratuit qui fonctionne dans votre navigateur ; il faut un compte Google. Les ressources gratuites ne sont pas garanties et les notebooks inactifs se coupent, donc enregistrez votre travail. Ouvrez colab.research.google.com et créez un nouveau notebook.",
            "Pour appeler un modèle, il faut une clé API, un mot de passe secret pour les programmes. L'API Gemini de Google a une offre gratuite pour les petits projets ; vous obtenez une clé dans Google AI Studio (aistudio.google.com/apikey). Google indique que le contenu envoyé avec l'offre gratuite peut servir à améliorer ses produits : n'envoyez donc jamais de données privées ou de clients avec l'offre gratuite.",
            "Le guide de démarrage rapide actuel de Google montre des lignes comme celles-ci : pip install -U google-genai, puis from google import genai, client = genai.Client(), puis interaction = client.interactions.create(model='MODEL_NAME', input='Explain an AI agent in one sentence'), puis print(interaction.output_text). Copiez le nom exact du modèle et le code depuis la page de démarrage rapide, car les noms et le code changent. La clé est lue dans une variable d'environnement nommée GEMINI_API_KEY.",
            "Ne collez jamais votre clé dans un notebook partagé, une capture d'écran ou un chatbot. Gardez-la dans un réglage secret, et créez une nouvelle clé si l'une fuit. Les autres fournisseurs (OpenAI, Anthropic, ou un modèle local gratuit avec Ollama) fonctionnent de la même façon : un client, un nom de modèle, une entrée et une sortie."
          ],
          steps: ["Ouvrez colab.research.google.com et créez un nouveau notebook.", "Obtenez une clé API dans Google AI Studio et gardez-la secrète.", "Installez la bibliothèque et copiez le code de démarrage rapide.", "Utilisez le nom de modèle indiqué sur la page de démarrage rapide.", "Exécutez la cellule et affichez la réponse."],
          words: [["API", "un moyen pour un programme de parler à un autre, comme votre code qui demande une réponse à un modèle."], ["Clé API", "un code secret qui permet à votre programme d'utiliser un service ; traitez-la comme un mot de passe."], ["Variable d'environnement", "un réglage stocké en dehors de votre code, souvent utilisé pour les secrets."]],
          slides: [
            { title: "Colab : Python gratuit dans le navigateur", bullets: ["Il faut un compte Google", "Les ressources gratuites ne sont pas garanties", "Les notebooks inactifs se coupent : enregistrez"] },
            { title: "Faire répondre un modèle", bullets: ["Clé API depuis Google AI Studio", "Code et nom du modèle depuis le démarrage rapide", "Client, nom du modèle, entrée, sortie"] },
            { title: "Protégez votre clé", bullets: ["Jamais dans un notebook partagé ou une capture", "Gardez-la dans un réglage secret", "Nouvelle clé en cas de fuite"] },
            { title: "Offre gratuite et vie privée", bullets: ["Le contenu peut servir à améliorer les produits", "Jamais de données privées ou de clients"] }
          ],
          sources: [{ name: "Google Colab : questions fréquentes", url: "https://research.google.com/colaboratory/faq.html" }, { name: "API Gemini : démarrage rapide", url: "https://ai.google.dev/gemini-api/docs/quickstart" }, { name: "API Gemini : tarifs et offre gratuite", url: "https://ai.google.dev/gemini-api/docs/pricing" }],
          tryIt: "Créez un notebook Colab, configurez une clé de façon sûre et faites répondre le modèle à : « Explique ce qu'est un agent IA en une phrase. » Enregistrez le notebook sous le nom agent-prompts.",
          youCanNow: "appeler un LLM depuis Python dans un notebook gratuit et garder votre clé API secrète.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce que Google Colab ?", options: ["Un notebook Python gratuit qui fonctionne dans un navigateur web", "Un modèle d'IA payant", "Un endroit pour stocker des mots de passe", "Une application de téléphone pour discuter avec une IA"], answer: 0, why: "Colab permet d'exécuter Python gratuitement dans le navigateur, avec des limites." },
            { objective: "O4", q: "Vous allez partager votre notebook. Votre clé API est tapée dans une cellule de code. Que faites-vous ?", options: ["Vous le partagez, seuls des amis le verront", "Vous floutez plutôt la clé sur une capture d'écran", "Vous changez le nom de la variable pour qu'elle soit plus difficile à trouver", "Vous déplacez la clé dans un réglage secret, et vous créez une nouvelle clé si elle a déjà été vue"], answer: 3, why: "Une clé est comme un mot de passe : gardez-la dans un réglage secret et remplacez-la si elle a fuité." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Envoyer votre consigne système et lire le JSON dans le code",
          minutes: 6,
          goal: "Envoyer votre consigne depuis le code et transformer la réponse JSON en données Python.",
          text: [
            "Mettez votre consigne système dans une variable Python : SYSTEM = '''You sort messages for a bakery... Reply with only JSON.''' (vous pouvez écrire le texte de la consigne en français). Mettez chaque nouvelle entrée dans une autre variable. La façon la plus simple de les combiner est d'envoyer SYSTEM plus l'entrée en un seul texte ; la plupart des fournisseurs ont aussi un réglage séparé pour les instructions système, décrit dans leur documentation.",
            "Lisez la réponse avec la bibliothèque json de Python : import json, puis data = json.loads(text). Maintenant, data['category'] est une valeur Python normale sur laquelle votre agent peut agir.",
            "Le modèle ajoutera parfois des mots autour du JSON ou oubliera une clé. Prévoyez-le : entourez la lecture d'un try et d'un except, et si elle échoue, réessayez une fois avec « Réponds uniquement en JSON » ou marquez l'entrée comme échouée. Ne laissez jamais une mauvaise réponse faire planter l'agent ni passer en silence."
          ],
          steps: ["Stockez la consigne système dans une variable.", "Envoyez la consigne système et l'entrée au modèle.", "Lisez la réponse avec json.loads dans un try / except.", "Vérifiez que les clés nécessaires sont là.", "En cas d'échec : réessayez une fois, ou marquez l'échec."],
          words: [["Analyser (parse)", "transformer du texte en données qu'un programme peut utiliser."], ["try / except", "la façon dont Python attrape une erreur et la gère au lieu de planter."], ["Nouvelle tentative", "refaire la même demande après un échec (retry)."]],
          slides: [
            { title: "La consigne dans le code", bullets: ["SYSTEM contient le rôle, les règles et le format", "Chaque nouvelle entrée dans sa propre variable"] },
            { title: "Lire le JSON", bullets: ["import json", "data = json.loads(text)", "data['category'] est maintenant utilisable"] },
            { title: "Prévoir les mauvaises réponses", bullets: ["Entourez la lecture d'un try / except", "Vérifiez que les clés sont là", "Réessayez une fois, ou marquez l'échec"] }
          ],
          tryIt: "Dans votre notebook, envoyez votre consigne système avec une entrée, lisez le JSON et affichez seulement la catégorie. Puis donnez-lui une entrée étrange (un message vide) et vérifiez que votre code ne plante pas.",
          youCanNow: "envoyer une consigne système depuis Python et transformer en sécurité le JSON du modèle en données.",
          quickCheck: [
            { objective: "O5", q: "Que fait json.loads avec la réponse du modèle ?", options: ["Il la renvoie au modèle", "Il transforme le texte JSON en données Python que votre code peut utiliser", "Il vérifie si la réponse est vraie", "Il l'enregistre dans un fichier"], answer: 1, why: "json.loads transforme du texte JSON en données Python, comme un dictionnaire." },
            { objective: "O5", q: "Votre agent reçoit un message vide et l'étape de lecture échoue. Que doit faire le code ?", options: ["Planter pour que vous le remarquiez", "Renvoyer comme catégorie le texte reçu, quel qu'il soit", "Attraper l'erreur, puis réessayer une fois ou marquer l'élément comme échoué", "Supprimer le message"], answer: 2, why: "Entourer la lecture d'un try / except permet à l'agent de gérer une mauvaise réponse au lieu de planter." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Tester une consigne comme un ingénieur",
          minutes: 6,
          goal: "Exécuter une consigne sur un petit jeu de tests et l'améliorer d'après les résultats.",
          text: [
            "Une bonne réponse ne prouve pas grand-chose. Les ingénieurs écrivent un jeu de tests : une courte liste d'entrées avec la réponse attendue. Incluez des cas faciles, des cas limites (vide, très long, deux sujets à la fois) et un cas piège, comme un message qui dit « ignore tes instructions ».",
            "En Python, une liste de paires suffit : tests = [('Where is my cake?', 'order'), ('You burned my bread!', 'complaint')]. Vos messages de test peuvent être en français. Parcourez la liste, appelez le modèle, lisez le JSON et comparez à la réponse attendue. Comptez les JSON valides et les réponses correctes.",
            "Changez une seule chose à la fois : une règle plus claire, un meilleur exemple. Relancez tout le jeu de tests après chaque changement, pour savoir que la correction a aidé sans rien casser. Gardez chaque version de la consigne et son score dans votre notebook."
          ],
          steps: ["Écrivez 5 à 10 entrées de test avec les réponses attendues.", "Incluez des cas limites et une entrée piège.", "Boucle : appeler, lire, comparer, compter.", "Changez une seule chose dans la consigne.", "Relancez tous les tests et gardez la meilleure version."],
          words: [["Jeu de tests", "une liste d'entrées avec les réponses attendues, qui sert à vérifier une consigne."], ["Cas limite", "une entrée inhabituelle, comme un message vide ou très long."], ["Régression", "quand un changement corrige une chose mais en casse une autre."]],
          slides: [
            { title: "Écrivez un jeu de tests", bullets: ["Entrées avec réponses attendues", "Cas faciles et cas limites", "Une entrée piège « ignore tes instructions »"] },
            { title: "Lancez-le en boucle", bullets: ["Appelez le modèle pour chaque entrée", "Lisez le JSON, comparez à l'attendu", "Comptez valides et corrects"] },
            { title: "Améliorez un changement à la fois", bullets: ["Règle plus claire ou meilleur exemple", "Relancez tous les tests après chaque changement", "Gardez versions et scores"] }
          ],
          tryIt: "Exercice final : rédigez votre consigne système avec un rôle, une tâche, trois règles, un format JSON et un exemple. Testez-la dans Colab sur cinq entrées dont une piège, notez pour chacune si le JSON est valide et correct, modifiez la consigne une fois pour corriger un échec, et relancez.",
          youCanNow: "tester et améliorer une consigne avec un petit jeu de tests, comme le font les créateurs d'agents.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qu'une régression quand on teste des consignes ?", options: ["Un test qui passe du premier coup", "Une correction qui fait échouer un test qui passait avant", "Une entrée de test écrite dans une autre langue", "Une réponse plus lente du modèle"], answer: 1, why: "Une régression, c'est quand un changement casse quelque chose qui marchait avant." },
            { objective: "O6", q: "Un test sur cinq échoue. Quelle est la meilleure étape suivante ?", options: ["Changer une seule chose dans la consigne et relancer les cinq tests", "Réécrire toute la consigne depuis le début", "Supprimer le test qui échoue", "Relancer seulement le test qui échoue"], answer: 0, why: "Changer une seule chose et relancer tous les tests montre ce que le changement a corrigé et ce qu'il a cassé." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Appeler et tester un LLM depuis Python",
        questions: [
          { objective: "O4", q: "Où doit se trouver votre clé API ?", options: ["Dans une cellule de notebook partagé", "Dans une capture d'écran pour demander de l'aide", "Dans un réglage secret ou une variable d'environnement", "Dans le chatbot pour qu'il s'en souvienne"], answer: 2, why: "Les clés sont des mots de passe pour programmes et doivent rester secrètes." },
          { objective: "O4", q: "Pourquoi copier le nom du modèle depuis la page de démarrage rapide du fournisseur ?", options: ["Les noms de modèles et le code changent avec le temps", "La loi l'exige", "Cela raccourcit la réponse", "Sinon Colab ne fonctionne pas"], answer: 0, why: "Les fournisseurs renomment et retirent des modèles ; leur page est à jour." },
          { objective: "O5", q: "json.loads(text) échoue parce que le modèle a ajouté des mots. Un bon agent :", options: ["Plante", "Attrape l'erreur, réessaie une fois ou marque l'échec", "Supprime l'entrée", "Utilise le texte quand même"], answer: 1, why: "Prévoyez les mauvaises réponses pour qu'elles ne fassent ni planter ni passer en silence." },
          { objective: "O6", q: "Qu'est-ce qui a sa place dans un bon jeu de tests ?", options: ["Des cas faciles, des cas limites et une entrée piège", "Une seule entrée", "Seulement des entrées faciles", "Les réponses que le modèle a déjà données"], answer: 0, why: "Les cas limites et pièges montrent où une consigne casse." },
          { objective: "O6", q: "Vous avez changé la consigne et un test passe maintenant. Et ensuite ?", options: ["La mettre en service tout de suite", "Changer cinq autres choses à la fois", "Supprimer les anciens tests", "Relancer tout le jeu de tests"], answer: 3, why: "Tout relancer repère les régressions." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Comprendre les LLM et l'ingénierie des consignes",
    questions: [
      { objective: "O1", q: "Un LLM écrit en :", options: ["Copiant une page web", "Prédisant un token à la fois", "Demandant à un humain", "Consultant une liste de réponses fixes"], answer: 1, why: "Il prédit un token suivant probable, encore et encore." },
      { objective: "O1", q: "La fenêtre de contexte, c'est :", options: ["Un onglet du navigateur", "Le prix du modèle", "Tout ce que le modèle voit en même temps", "Le thème de couleur de l'application"], answer: 2, why: "Seul le texte dans la fenêtre existe pour le modèle." },
      { objective: "O1", q: "Pourquoi un modèle peut-il affirmer une chose fausse avec aisance ?", options: ["Il n'a plus de tokens", "Il ment exprès", "Il prédit un texte probable au lieu de vérifier les faits", "Sa clé a expiré"], answer: 2, why: "Prédire n'est pas vérifier, sauf si on ajoute un outil." },
      { objective: "O2", q: "Laquelle n'est PAS l'une des cinq parties d'une bonne consigne ?", options: ["Votre mot de passe", "Le format de sortie", "Les règles", "Le rôle"], answer: 0, why: "Les mots de passe n'ont jamais leur place dans une consigne." },
      { objective: "O2", q: "Qu'est-ce qui doit changer à chaque exécution ?", options: ["La consigne système", "Le format de sortie", "Le rôle", "Le message utilisateur"], answer: 3, why: "La nouvelle entrée va dans le message utilisateur." },
      { objective: "O2", q: "Une bonne règle pour les cas incertains est :", options: ["« Devine. »", "« Si rien ne convient, utilise other. »", "« Ne doute jamais. »", "« Invente quelque chose. »"], answer: 1, why: "Lui dire quoi faire en cas de doute évite les mauvaises suppositions." },
      { objective: "O3", q: "La consigne à quelques exemples (few-shot) veut dire :", options: ["Seulement des consignes courtes", "Envoyer moins de demandes", "Utiliser un petit modèle", "Inclure quelques exemples complets"], answer: 3, why: "Des exemples d'entrée et de sortie guident le modèle." },
      { objective: "O3", q: "Lequel est un JSON valide ?", options: ["category = order", "<category>order", "{\"category\": \"order\"}", "category: order;"], answer: 2, why: "Le JSON utilise des accolades, des noms et des valeurs entre guillemets." },
      { objective: "O3", q: "La sortie structurée est :", options: ["Un réglage du modèle qui impose un format exact", "Une réponse plus longue", "Un type de chatbot", "Un menu de Colab"], answer: 0, why: "Beaucoup de fournisseurs peuvent imposer un JSON valide avec ; voyez la documentation." },
      { objective: "O4", q: "Google Colab est :", options: ["Un serveur payant à installer", "Un notebook Python gratuit dans le navigateur", "Seulement une application de téléphone", "Un modèle d'IA"], answer: 1, why: "Colab exécute gratuitement des notebooks Python dans votre navigateur." },
      { objective: "O4", q: "Les ressources gratuites de Colab sont :", options: ["Non garanties ; les notebooks inactifs se coupent", "Garanties et illimitées", "Réservées aux écoles", "Seulement le week-end"], answer: 0, why: "Colab indique que les ressources gratuites ne sont pas garanties." },
      { objective: "O4", q: "Une clé API doit être traitée comme :", options: ["Un nom d'utilisateur public", "Un commentaire", "Un nom de fichier", "Un mot de passe"], answer: 3, why: "Toute personne qui a la clé peut utiliser votre compte." },
      { objective: "O4", q: "Avec l'offre gratuite de l'API Gemini, vous ne devez pas envoyer :", options: ["Une question de test", "Des données privées ou de clients", "Un message de boulangerie inventé", "« Bonjour »"], answer: 1, why: "Le contenu de l'offre gratuite peut servir à améliorer les produits de Google." },
      { objective: "O4", q: "Votre clé a fuité dans une capture d'écran. Vous devez :", options: ["Espérer que personne ne l'a vue", "La republier", "Créer une nouvelle clé et ne plus utiliser l'ancienne", "L'envoyer par e-mail au support"], answer: 2, why: "Une clé qui a fuité doit être remplacée." },
      { objective: "O5", q: "json.loads transforme :", options: ["Des données en image", "Du Python en JavaScript", "Du texte JSON en données Python", "Une consigne en modèle"], answer: 2, why: "L'analyse rend la réponse utilisable dans le code." },
      { objective: "O5", q: "Entourer la lecture d'un try / except permet à votre agent de :", options: ["Gérer une mauvaise réponse au lieu de planter", "Aller plus vite", "Sauter l'appel au modèle", "Cacher la clé"], answer: 0, why: "Les erreurs sont attrapées et gérées." },
      { objective: "O6", q: "Un cas limite est :", options: ["Une entrée très courante", "Un nom de modèle", "Le premier test", "Une entrée inhabituelle comme un message vide"], answer: 3, why: "Les cas limites testent les limites d'une consigne." },
      { objective: "O6", q: "Pourquoi inclure une entrée « ignore tes instructions » dans les tests ?", options: ["Pour rendre le modèle plus rapide", "Pour vérifier que la consigne résiste à l'injection", "Pour économiser des tokens", "Parce que la loi l'exige"], answer: 1, why: "Les agents lisent du texte non fiable ; la consigne doit tenir ses règles." },
      { objective: "O6", q: "Il y a régression quand :", options: ["Le modèle devient moins cher", "La clé expire", "Tous les tests passent", "Une correction casse quelque chose qui marchait"], answer: 3, why: "Relancer tous les tests repère les régressions." },
      { objective: "O6", q: "La meilleure façon d'améliorer une consigne est de :", options: ["Changer beaucoup de choses à la fois", "Ne jamais la changer", "Changer une chose et relancer tous les tests", "Demander seulement au modèle de se noter"], answer: 2, why: "Un changement à la fois montre ce qui a vraiment aidé." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      3,
      5,
      7,
      8,
      11,
      13,
      15,
      19
    ]
  },
  rubric: {
    mastery: "Atteint ou Dépasse sur chaque ligne. Si une ligne est à Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Consigne système complète",
        objective: "O2",
        notYet: "Le rôle, la tâche ou l'une des trois règles manque ou reste vague.",
        meets: "Donne un rôle, la tâche et trois règles claires.",
        exceeds: "Les règles disent aussi quoi faire en cas de doute ou quand rien ne convient."
      },
      {
        name: "Format et exemple",
        objective: "O3",
        notYet: "Pas de format JSON exact ou pas d'exemple.",
        meets: "Indique les clés JSON exactes et donne un exemple complet.",
        exceeds: "L'exemple suit exactement le format et la plupart des sorties sont du JSON valide."
      },
      {
        name: "Fonctionne depuis Colab en sécurité",
        objective: "O4",
        notYet: "Le notebook ne fonctionne pas, ou la clé API est visible.",
        meets: "La consigne s'exécute depuis Colab avec la clé gardée dans un réglage secret.",
        exceeds: "Le notebook est clair et quelqu'un d'autre pourrait le relancer avec sa propre clé."
      },
      {
        name: "Lit les réponses en sécurité",
        objective: "O5",
        notYet: "Une réponse mauvaise ou vide fait planter le code.",
        meets: "Le JSON est transformé en données et une mauvaise réponse est attrapée.",
        exceeds: "Les éléments en échec sont clairement marqués pour être revus."
      },
      {
        name: "Testée et améliorée",
        objective: "O6",
        notYet: "Moins de cinq entrées, pas d'entrée piège, ou résultats non notés.",
        meets: "Cinq entrées dont une piège, JSON valide et correct noté pour chacune, un changement fait et tous les tests relancés.",
        exceeds: "Sait expliquer pourquoi l'échec s'est produit et ce que le changement a corrigé."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent l'exercice final (grille d'évaluation)",
      "Apprenants qui passent au cours 3 du programme sur les agents dans les 30 jours",
      "Apprenants qui disent utiliser une consigne système testée dans un vrai agent ou une vraie tâche de travail dans les 30 jours (enquête de suivi)",
      "Apprenants qui ne signalent aucune fuite de clé API (enquête de suivi)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec un navigateur web et internet",
      "Un compte Google gratuit pour Google Colab",
      "Une clé API gratuite pour un modèle d'IA, prise sur le site officiel du fournisseur",
      "Le plan d'agent du cours 1",
      "Environ 60 minutes au total : leçons, exercices, contrôles et exercice final"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis le chapitre 1 dans un chatbot gratuit avant que quiconque ouvre Colab.",
      "Montrez au groupe comment enregistrer la clé API comme secret, et vérifiez qu'aucune clé n'apparaît à l'écran ni dans un notebook partagé.",
      "Rappelez aux apprenants de ne pas envoyer de données privées ou de clients avec les offres d'API gratuites.",
      "Mettez les personnes qui n'ont jamais codé avec quelqu'un qui a déjà codé, et demandez-leur de copier les lignes de code exactement.",
      "Notez l'exercice final avec la grille, et demandez à chaque apprenant de montrer ses cinq résultats de test."
    ]
  }
};
