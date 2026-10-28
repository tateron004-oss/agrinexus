"use strict";

// Koach Learn course, French translation of artificial-intelligence/agentic-building-agents.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// Python code (function names, dictionaries, JSON keys, loop lines) is kept exactly as in the English course; messages the program sends back to the model are translated.

module.exports = {
  id: "agentic-building-agents-fr",
  lang: "fr",
  translationOf: "agentic-building-agents",
  category: "Artificial Intelligence",
  name: "Construire des agents IA",
  skills: "Écrire une boucle d'agent en Python, Définir des outils comme des fonctions, Demander au modèle sa prochaine action en JSON, Garder une mémoire et un journal d'exécution, Ajouter des limites d'étapes et la gestion des erreurs",
  outcome: "construire un petit agent IA qui fonctionne, en Python, dans un notebook Colab gratuit : une boucle qui demande au modèle sa prochaine action, exécute l'un des deux outils que vous avez écrits, renvoie le résultat, s'arrête à une limite d'étapes et note chaque étape dans un journal.",
  about: [
    "Voici le cours 3 du programme Concevoir, construire et déployer des agents IA autonomes. Vous avez une fiche de conception (cours 1) et une consigne testée (cours 2). Maintenant, vous construisez l'agent lui-même, en Python simple, pour voir chaque pièce en mouvement au lieu de la cacher dans un framework.",
    "Le chapitre 1 construit la boucle : les outils comme fonctions Python, une consigne qui fait choisir au modèle une action en JSON, et le code qui exécute l'action et renvoie le résultat. Le chapitre 2 rend l'agent fiable : mémoire, journal d'exécution, limites d'étapes, gestion des erreurs, et un aperçu des frameworks d'agents que vous pourrez utiliser plus tard.",
    "Il vous faut un compte Google pour Colab et une clé API de modèle (l'offre gratuite de l'API Gemini du cours 2 convient, ou un modèle local gratuit avec Ollama sur votre ordinateur). Le code apparaît sous forme de courtes lignes dans les leçons. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Dans un notebook Colab, construisez un agent avec deux outils que vous avez écrits (par exemple calculator(expression) et lookup_note(topic), qui lit dans un petit dictionnaire Python de notes). Donnez-lui l'objectif « Combien d'heures vais-je étudier ce mois-ci si j'étudie 45 minutes chaque jour de cours indiqué dans mes notes ? ». L'agent doit choisir les outils en JSON, les exécuter, renvoyer les résultats, s'arrêter à une limite de 6 étapes, gérer une mauvaise réponse du modèle sans planter, et afficher un journal de chaque étape.",
  chapters: [
    {
      name: "Chapitre 1 : La boucle de l'agent en code",
      lessons: [
        {
          title: "Les outils ne sont que des fonctions",
          minutes: 5,
          goal: "Écrire deux outils sous forme de fonctions Python avec des noms et des descriptions clairs.",
          text: [
            "Pour un agent, un outil est une fonction que votre code exécute quand le modèle le demande. Le modèle n'exécute jamais rien lui-même : il écrit seulement le nom d'un outil et son entrée. C'est votre code qui décide de l'exécuter ou non.",
            "Commencez par des outils sûrs, en lecture seule. Une calculatrice : def calculator(expression): avec un corps qui n'accepte que les chiffres et + - * / ( ) . puis calcule la réponse. Une recherche dans des notes : NOTES = {'schedule': 'Class days: Mon, Wed, Thu'} (vous pouvez écrire vos notes en français), et def lookup_note(topic): return NOTES.get(topic, 'no note found').",
            "Rassemblez-les dans un dictionnaire pour que la boucle les trouve par leur nom : TOOLS = {'calculator': calculator, 'lookup_note': lookup_note}. Écrivez une description d'une ligne pour chacun. Le modèle lit ces descriptions pour choisir : elles comptent donc autant que le code."
          ],
          steps: ["Écrivez chaque outil comme une fonction Python à une entrée.", "Rendez-le sûr : vérifiez l'entrée avant de l'utiliser.", "Renvoyez un texte que le modèle peut lire, avec un message clair en cas d'échec.", "Mettez les outils dans un dictionnaire TOOLS.", "Écrivez une description d'une ligne pour chaque outil."],
          words: [["Fonction", "un bloc de code nommé qui reçoit une entrée et renvoie un résultat."], ["Dictionnaire", "une collection Python de paires nom et valeur, comme {'calculator': calculator}."], ["Outil en lecture seule", "un outil qui ne fait que chercher des informations et ne change rien."]],
          slides: [
            { title: "Un outil est une fonction", bullets: ["Le modèle nomme seulement l'outil et son entrée", "Votre code décide de l'exécuter ou non"] },
            { title: "Deux outils sûrs pour débuter", bullets: ["calculator(expression) : vérifie l'entrée, calcule", "lookup_note(topic) : lit dans un dictionnaire"] },
            { title: "Des outils faciles à choisir", bullets: ["TOOLS = {nom: fonction}", "Une ligne claire qui décrit chaque outil", "Un message clair en cas d'échec"] }
          ],
          tryIt: "Dans un nouveau notebook Colab, écrivez calculator et lookup_note, mettez-les dans TOOLS, et testez chacun en l'appelant vous-même : calculator('45*12/60') et lookup_note('schedule').",
          youCanNow: "écrire des outils sûrs sous forme de fonctions Python et les enregistrer par leur nom."
        },
        {
          title: "Demander au modèle sa prochaine action",
          minutes: 6,
          goal: "Rédiger une consigne qui fait répondre le modèle par une seule action en JSON.",
          text: [
            "Le modèle doit connaître l'objectif, les outils et le format de réponse. Votre consigne système liste chaque outil avec sa description et dit : réponds uniquement en JSON, soit {\"tool\": \"name\", \"input\": \"...\"} pour utiliser un outil, soit {\"final\": \"...\"} quand l'objectif est atteint.",
            "Ajoutez les règles de votre fiche de conception : n'utilise que les outils listés ; une seule action par réponse ; si le résultat d'un outil dit qu'il a échoué, essaie une autre approche ; n'invente jamais le résultat d'un outil.",
            "Écrivez une fonction d'aide pour que le reste de votre code ne dépende pas du fournisseur : def ask_model(text): qui appelle votre modèle (copiez l'appel depuis le démarrage rapide de votre fournisseur, comme au cours 2) et renvoie le texte de la réponse. Si vous changez de fournisseur plus tard, seule ask_model change."
          ],
          steps: ["Listez le nom et la description de chaque outil dans la consigne système.", "Donnez les deux formes de réponse JSON : outil ou final.", "Ajoutez les règles de votre fiche de conception.", "Écrivez ask_model(text) qui renvoie le texte de la réponse du modèle.", "Testez-la une fois avec l'objectif et affichez la réponse."],
          words: [["Action", "une chose que l'agent décide de faire ensuite, comme utiliser un outil ou donner la réponse finale."], ["Fonction d'aide", "une petite fonction qui cache des détails, comme le fournisseur de modèle appelé."]],
          slides: [
            { title: "La consigne dit au modèle", bullets: ["L'objectif", "Les outils et ce que fait chacun", "Les formes exactes de réponse JSON"] },
            { title: "Deux formes de réponse", bullets: ["{\"tool\": \"name\", \"input\": \"...\"}", "{\"final\": \"...\"} quand l'objectif est atteint"] },
            { title: "Les règles de votre fiche", bullets: ["Seulement les outils listés, une action par réponse", "Si un outil échoue, essayer autrement", "Ne jamais inventer un résultat d'outil"] },
            { title: "Cacher le fournisseur", bullets: ["ask_model(text) renvoie le texte de la réponse", "Changer de fournisseur = changer une fonction"] }
          ],
          tryIt: "Écrivez la consigne système et ask_model. Envoyez l'objectif de l'exercice final et affichez la réponse. A-t-il choisi lookup_note en premier ? Sinon, améliorez les descriptions des outils.",
          youCanNow: "faire choisir à un modèle sa prochaine action en JSON parmi une liste d'outils."
        },
        {
          title: "Faire tourner la boucle : agir et renvoyer le résultat",
          minutes: 6,
          goal: "Écrire la boucle qui exécute l'outil choisi et renvoie le résultat.",
          text: [
            "La boucle est courte. history = [] garde ce qui s'est passé. À chaque étape : construisez le texte (consigne système, objectif, historique), appelez ask_model, lisez le JSON. S'il contient 'final', affichez-le et arrêtez. S'il contient 'tool', cherchez l'outil dans TOOLS, exécutez-le avec l'entrée, et ajoutez une ligne à l'historique : l'action et le résultat.",
            "Renvoyer le résultat, c'est l'étape « observer » du cours 1. Sans elle, le modèle demanderait la même chose à l'infini. Avec elle, le modèle voit « lookup_note(schedule) a renvoyé : Class days: Mon, Wed, Thu » et peut choisir l'étape suivante, comme utiliser la calculatrice.",
            "Si le modèle nomme un outil qui n'est pas dans TOOLS, ne plantez pas : ajoutez « Outil inconnu : X. Utilise l'un de ceux-ci : calculator, lookup_note » à l'historique et continuez. Des messages clairs renvoyés au modèle, c'est ainsi qu'un agent se remet de ses propres erreurs."
          ],
          steps: ["history = []", "Construisez le texte : consigne système, objectif, historique.", "Appelez ask_model et lisez le JSON.", "Si 'final' : affichez et arrêtez.", "Si 'tool' : exécutez-le depuis TOOLS et ajoutez l'action et le résultat à l'historique."],
          words: [["Historique", "la liste en cours des actions et des résultats vus par l'agent pendant cette exécution."], ["Observation", "le résultat d'un outil, renvoyé au modèle."]],
          slides: [
            { title: "Chaque étape de la boucle", bullets: ["Construire le texte : consigne, objectif, historique", "Demander au modèle, lire le JSON", "Final ? Arrêt. Outil ? On l'exécute."] },
            { title: "Renvoyer le résultat", bullets: ["Ajoutez l'action et le résultat à l'historique", "Le modèle le voit à l'étape suivante", "Sans cela, l'agent se répète"] },
            { title: "Outil inconnu ?", bullets: ["Ne plantez pas", "Dites au modèle quels outils existent", "Laissez-le réessayer"] }
          ],
          tryIt: "Écrivez la boucle et lancez-la sur l'objectif de l'exercice final. Affichez l'historique après chaque étape. Comptez combien d'étapes il a fallu pour arriver à une réponse finale.",
          youCanNow: "écrire une boucle d'agent qui exécute des outils et renvoie leurs résultats au modèle."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : La boucle de l'agent en code",
        questions: [
          { q: "Qui exécute réellement un outil dans un agent ?", options: ["Le modèle", "Le navigateur de l'utilisateur", "Votre code", "Le site web de l'outil"], answer: 2, why: "Le modèle nomme seulement l'outil ; votre code décide et l'exécute." },
          { q: "Pourquoi chaque outil a-t-il besoin d'une description claire d'une ligne ?", options: ["Le modèle la lit pour choisir le bon outil", "Elle accélère le code", "Python l'exige", "Elle cache l'outil au modèle"], answer: 0, why: "Les descriptions disent au modèle à quoi sert chaque outil." },
          { q: "Le modèle répond {\"final\": \"Environ 27 heures\"}. Que fait la boucle ?", options: ["Elle lance la calculatrice", "Elle recommence", "Elle demande un mot de passe à l'utilisateur", "Elle affiche la réponse et s'arrête"], answer: 3, why: "Une réponse finale veut dire que l'objectif est atteint." },
          { q: "À quoi sert la fonction d'aide ask_model ?", options: ["À exécuter les outils", "À garder les détails du fournisseur au même endroit", "À stocker la clé API dans le code", "À sauter la boucle"], answer: 1, why: "Changer de fournisseur revient alors à changer une seule fonction." },
          { q: "Le modèle demande un outil nommé « search » que vous n'avez pas écrit. Meilleure réaction ?", options: ["Planter pour que vous le remarquiez", "Dire au modèle quels outils existent et continuer", "Lancer n'importe quelle recherche disponible", "Arrêter l'agent pour toujours"], answer: 1, why: "Un retour clair permet à l'agent de se rattraper." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Rendre l'agent fiable",
      lessons: [
        {
          title: "La mémoire et le journal d'exécution",
          minutes: 5,
          goal: "Garder une mémoire à court terme bien rangée et noter chaque étape.",
          text: [
            "La mémoire à court terme, c'est la liste d'historique que vous avez déjà. Elle grandit à chaque étape, et tout ce qu'elle contient est envoyé au modèle, ce qui coûte des tokens et du temps. Pour les longues exécutions, gardez les dernières étapes en entier et remplacez les plus anciennes par un résumé d'une ligne.",
            "La mémoire à long terme, c'est tout ce qui est enregistré entre deux exécutions : un fichier de notes, un tableur, une petite base de données. N'enregistrez que ce dont l'agent a vraiment besoin la fois suivante, et n'enregistrez jamais de données privées inutiles.",
            "Le journal d'exécution est pour vous, pas pour le modèle. Pour chaque étape, notez le numéro de l'étape, la réponse brute du modèle, l'outil et l'entrée, le résultat et l'heure. Quand l'agent fait quelque chose de bizarre, le journal vous dit pourquoi. Une façon simple : log.append({'step': n, 'reply': reply, 'result': result}), puis affichez-le à la fin."
          ],
          words: [["Mémoire à court terme", "ce que l'agent voit pendant une exécution : l'historique jusque-là."], ["Mémoire à long terme", "les informations enregistrées entre deux exécutions, comme un fichier de notes."], ["Journal d'exécution", "votre relevé de chaque étape faite par l'agent, pour vérifier et déboguer."]],
          slides: [
            { title: "Mémoire à court terme", bullets: ["La liste d'historique, envoyée à chaque étape", "Un long historique coûte tokens et temps", "Résumez les anciennes étapes"] },
            { title: "Mémoire à long terme", bullets: ["Enregistrée entre exécutions : fichier ou base", "Seulement le nécessaire", "Pas de données privées inutiles"] },
            { title: "Le journal d'exécution", bullets: ["Étape, réponse brute, outil, entrée, résultat, heure", "Pour vous, pas pour le modèle", "À lire quand l'agent agit bizarrement"] }
          ],
          tryIt: "Ajoutez une liste log à votre agent et notez chaque étape. Lancez-le, puis affichez le journal sous forme de tableau propre : étape, outil, entrée, résultat.",
          youCanNow: "gérer la mémoire d'un agent et tenir un journal d'exécution lisible."
        },
        {
          title: "Limites d'étapes, mauvaises réponses et erreurs",
          minutes: 6,
          goal: "Ajouter une limite d'étapes et gérer les mauvaises réponses du modèle et les erreurs des outils.",
          text: [
            "Chaque boucle a besoin d'un plafond : MAX_STEPS = 6 et for step in range(MAX_STEPS): au lieu d'une boucle qui tourne à l'infini. Si elle atteint la limite sans réponse finale, arrêtez et indiquez « Arrêt : limite d'étapes atteinte » avec le journal.",
            "Les mauvaises réponses arrivent : des mots en plus autour du JSON, une clé manquante, une réponse vide. Lisez dans un try et un except. En cas d'échec, ajoutez « Ta dernière réponse n'était pas un JSON valide. Réponds uniquement en JSON. » à l'historique et laissez l'étape suivante réessayer. Comptez-les ; s'il y en a deux de suite, arrêtez.",
            "Les outils échouent aussi : la calculatrice reçoit des lettres, un fichier manque. Chaque outil doit attraper ses propres erreurs et renvoyer un message clair comme « erreur de la calculatrice : seuls les chiffres et + - * / sont permis ». Le modèle peut alors corriger son entrée à l'étape suivante."
          ],
          steps: ["Fixez MAX_STEPS et bouclez avec range(MAX_STEPS).", "Lisez les réponses dans un try / except.", "En cas de mauvaise réponse, prévenez le modèle et continuez.", "Arrêtez après deux mauvaises réponses de suite.", "Faites renvoyer à chaque outil un message d'erreur clair au lieu de planter."],
          words: [["Limite d'étapes", "le nombre maximal d'étapes qu'un agent peut faire en une exécution."], ["Exception", "une erreur qui survient pendant qu'un programme tourne ; try / except l'attrape."]],
          slides: [
            { title: "Fixez toujours un plafond", bullets: ["MAX_STEPS = 6", "for step in range(MAX_STEPS):", "À la limite : arrêter et le signaler"] },
            { title: "Mauvaises réponses du modèle", bullets: ["Lisez dans un try / except", "Dites au modèle : uniquement du JSON", "Deux mauvaises réponses de suite : arrêt"] },
            { title: "Erreurs des outils", bullets: ["Chaque outil attrape ses propres erreurs", "Il renvoie un message d'erreur clair", "Le modèle corrige son entrée ensuite"] }
          ],
          tryIt: "Testez votre code de sécurité : faites temporairement renvoyer « hello » à ask_model à l'étape 2, et envoyez à calculator l'entrée 'abc'. Vérifiez que l'agent se rattrape, et qu'il s'arrête à la limite quand vous fixez MAX_STEPS = 2.",
          youCanNow: "empêcher un agent de tourner à l'infini et l'aider à se remettre des mauvaises réponses et des erreurs d'outils."
        },
        {
          title: "Les frameworks, et terminer votre premier agent",
          minutes: 6,
          goal: "Terminer et tester votre agent, et savoir quand un framework aiderait.",
          text: [
            "Les frameworks d'agents sont des bibliothèques qui vous donnent la boucle, la gestion des outils et la mémoire toutes prêtes. Parmi les plus connus : LangGraph, CrewAI, l'OpenAI Agents SDK et l'Agent Development Kit de Google, et beaucoup de fournisseurs de modèles proposent l'appel d'outils natif, où le modèle vous renvoie une demande d'outil structurée. Ils changent souvent : lisez la documentation de chaque projet pour l'installation à jour.",
            "Construire d'abord la boucle vous-même veut dire que vous comprenez ce qu'un framework fait pour vous, et que vous pouvez le déboguer quand ça tourne mal. Beaucoup de vrais agents sont encore une simple boucle comme la vôtre.",
            "Avant de dire que votre agent est terminé, testez-le comme au cours 2 : trois objectifs qu'il devrait atteindre, un qu'il ne peut pas atteindre (il doit le dire, pas inventer une réponse), et une mauvaise entrée. Lisez le journal de chaque exécution."
          ],
          steps: ["Lancez l'agent sur trois objectifs qu'il devrait atteindre.", "Lancez un objectif qu'il ne peut pas atteindre : il doit le dire.", "Lancez une mauvaise entrée.", "Lisez le journal de chaque exécution.", "Corrigez une faiblesse et relancez les cinq tests."],
          words: [["Framework", "une bibliothèque toute prête qui gère pour vous les parties courantes d'un programme."], ["Appel d'outils natif", "une fonction du modèle où il renvoie une demande structurée pour utiliser un outil."]],
          slides: [
            { title: "Les frameworks d'agents", bullets: ["Boucle, outils et mémoire tout prêts", "LangGraph, CrewAI, OpenAI Agents SDK, Google ADK", "Ils changent souvent : lisez leur documentation"] },
            { title: "Pourquoi d'abord à la main", bullets: ["Vous comprenez ce que fait un framework", "Vous pouvez le déboguer", "Beaucoup de vrais agents sont une simple boucle"] },
            { title: "Testez avant de conclure", bullets: ["Trois objectifs qu'il devrait atteindre", "Un qu'il ne peut pas atteindre : il doit le dire", "Une mauvaise entrée ; lisez chaque journal"] }
          ],
          tryIt: "Exercice final : terminez votre agent à deux outils sur l'objectif des heures d'étude, avec une limite de 6 étapes, une mauvaise réponse rattrapée et un journal affiché de chaque étape. Puis lancez les cinq tests ci-dessus et écrivez deux phrases sur ce que vous avez corrigé.",
          youCanNow: "construire, tester et expliquer un agent IA qui fonctionne, en Python simple."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Rendre l'agent fiable",
        questions: [
          { q: "Pourquoi résumer les anciennes étapes dans une longue exécution ?", options: ["Le modèle n'oublie rien de toute façon", "Cela cache les erreurs", "Python ne peut pas garder de longues listes", "Un long historique coûte des tokens et du temps"], answer: 3, why: "Tout l'historique est envoyé à chaque étape." },
          { q: "Pour qui est surtout le journal d'exécution ?", options: ["Pour vous, afin de voir pourquoi l'agent a agi ainsi", "Pour le modèle", "Pour le fournisseur d'API", "Pour les autres utilisateurs"], answer: 0, why: "Le journal sert à vérifier et à déboguer." },
          { q: "Que doit-il se passer quand un agent atteint MAX_STEPS sans réponse finale ?", options: ["Continuer quand même", "Inventer une réponse finale", "S'arrêter et signaler que la limite est atteinte", "Supprimer le journal"], answer: 2, why: "Signalez-le honnêtement et montrez le journal." },
          { q: "La calculatrice reçoit l'entrée 'abc'. Un outil bien construit :", options: ["Fait planter tout l'agent", "Supprime le notebook", "Renvoie zéro sans rien dire", "Renvoie un message d'erreur clair que le modèle peut utiliser"], answer: 3, why: "Des messages d'erreur clairs permettent au modèle de corriger son entrée." },
          { q: "Quel est un bon test avant de dire que l'agent est terminé ?", options: ["Seulement des objectifs qu'il atteindra sûrement", "Aucun test, on le met en service", "Un objectif qu'il ne peut pas atteindre, pour voir s'il le dit", "Le lancer une seule fois"], answer: 2, why: "Un « je ne peux pas » honnête vaut mieux qu'une réponse inventée." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Construire des agents IA",
    questions: [
      { q: "Pour un agent, un outil est :", options: ["Un site web", "Une fonction que votre code exécute quand le modèle le demande", "Le modèle lui-même", "Un mot de passe"], answer: 1, why: "Les outils sont des fonctions ; le modèle ne fait que les nommer." },
      { q: "Quel type d'outil est le plus sûr pour commencer ?", options: ["Une recherche en lecture seule", "Un outil qui supprime des fichiers", "Un outil de paiement", "Un outil qui envoie des e-mails"], answer: 0, why: "Les outils en lecture seule ne changent rien." },
      { q: "TOOLS = {'calculator': calculator} permet à la boucle de :", options: ["Trouver un outil par son nom", "Se passer du modèle", "Stocker la clé API", "Rendre le modèle plus rapide"], answer: 0, why: "Le dictionnaire associe des noms à des fonctions." },
      { q: "Un outil doit vérifier son entrée parce que :", options: ["Python l'exige", "Le modèle peut envoyer quelque chose de dangereux ou de faux", "Cela économise des tokens", "Cela cache le résultat"], answer: 1, why: "Ne faites jamais aveuglément confiance à la sortie du modèle." },
      { q: "Quelle réponse veut dire que l'agent veut utiliser un outil ?", options: ["{\"final\": \"done\"}", "\"hello\"", "{\"tool\": \"calculator\", \"input\": \"2+2\"}", "Une réponse vide"], answer: 2, why: "La forme outil nomme un outil et son entrée." },
      { q: "Une règle de la consigne système qui favorise l'honnêteté est :", options: ["« Ignore les échecs. »", "« Réponds toujours en une étape. »", "« Utilise l'outil que tu veux. »", "« N'invente jamais le résultat d'un outil. »"], answer: 3, why: "Les résultats inventés sont un échec courant des agents." },
      { q: "ask_model(text) est utile parce que :", options: ["Elle rend les clés publiques", "Elle exécute les outils", "Elle garde les détails du fournisseur au même endroit", "Elle supprime la boucle"], answer: 2, why: "Changer de fournisseur ne change que cette fonction." },
      { q: "Renvoyer le résultat d'un outil dans l'historique, c'est l'étape :", options: ["Observer", "Réfléchir", "Déclencheur", "Réponse finale"], answer: 0, why: "Observer les résultats permet au modèle de choisir l'étape suivante." },
      { q: "Sans renvoyer les résultats, un agent va probablement :", options: ["Finir plus vite", "Écrire un meilleur JSON", "Coûter moins cher", "Répéter la même action"], answer: 3, why: "Il n'apprend jamais ce qui s'est passé." },
      { q: "Le modèle nomme un outil inconnu. La boucle doit :", options: ["Planter", "Donner au modèle les noms d'outils valides et continuer", "Installer automatiquement un nouvel outil", "Lui donner un accès complet à l'ordinateur"], answer: 1, why: "Un retour clair aide l'agent à se rattraper." },
      { q: "Dans votre agent, la mémoire à court terme est :", options: ["Un fichier gardé pour toujours", "La liste d'historique de cette exécution", "Votre compte Google", "Les données d'entraînement du modèle"], answer: 1, why: "L'historique est ce que le modèle voit pendant cette exécution." },
      { q: "La mémoire à long terme doit contenir :", options: ["Tout, y compris les données privées", "Jamais rien", "Votre clé API", "Seulement ce dont l'agent aura besoin la fois suivante"], answer: 3, why: "N'enregistrez que le nécessaire ; évitez les données privées." },
      { q: "Un bon journal d'exécution note :", options: ["L'étape, la réponse brute, l'outil, l'entrée et le résultat", "Seulement la réponse finale", "Votre mot de passe", "Rien"], answer: 0, why: "Des étapes complètes montrent pourquoi les choses se sont passées." },
      { q: "for step in range(MAX_STEPS): donne à l'agent :", options: ["Des étapes illimitées", "Plus d'outils", "Un plafond d'étapes", "Un modèle plus rapide"], answer: 2, why: "La boucle ne peut pas tourner à l'infini." },
      { q: "Le modèle répond avec des mots autour du JSON. Un bon agent :", options: ["Désactive la limite d'étapes", "Plante", "Accepte les mots comme réponse", "Demande au modèle de répondre uniquement en JSON et continue"], answer: 3, why: "Rattrapez une fois, et arrêtez après des échecs répétés." },
      { q: "Quand l'agent doit-il s'arrêter après de mauvaises réponses ?", options: ["Jamais", "Après le premier mot", "Après deux de suite", "Seulement quand l'ordinateur s'éteint"], answer: 2, why: "Des échecs répétés veulent dire que quelque chose ne va pas." },
      { q: "Les frameworks d'agents :", options: ["Ne changent jamais", "Donnent une boucle, des outils et une mémoire tout prêts", "Dispensent de tout test", "Sont obligatoires pour tout agent"], answer: 1, why: "Ils aident, mais changent souvent et doivent quand même être testés." },
      { q: "L'appel d'outils natif veut dire :", options: ["Le modèle renvoie une demande structurée pour utiliser un outil", "Le modèle exécute seul du code sur votre ordinateur", "Vous tapez les outils à la main", "Les outils tournent sans code"], answer: 0, why: "Le fournisseur renvoie un appel d'outil structuré que votre code exécute." },
      { q: "Pourquoi construire d'abord la boucle à la main ?", options: ["Vous comprenez et pouvez déboguer ce que fait un framework", "Les frameworks sont illégaux", "C'est toujours plus rapide", "Les modèles l'exigent"], answer: 0, why: "Connaître les pièces rend le débogage possible." },
      { q: "Face à un objectif qu'il ne peut pas atteindre, un bon agent :", options: ["Invente une réponse", "Dit qu'il ne peut pas et montre ce qu'il a essayé", "Tourne à l'infini", "Supprime son journal"], answer: 1, why: "Un échec honnête vaut mieux qu'une réponse inventée." }
    ]
  }
};
