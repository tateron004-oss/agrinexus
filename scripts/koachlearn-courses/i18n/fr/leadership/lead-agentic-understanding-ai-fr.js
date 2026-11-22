"use strict";

// Koach Learn course, French translation of leadership/lead-agentic-understanding-ai.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").

module.exports = {
  id: "lead-agentic-understanding-ai-fr",
  lang: "fr",
  translationOf: "lead-agentic-understanding-ai",
  category: "Leadership Development",
  name: "Diriger à l'ère de l'IA agentique 1 : comprendre l'IA",
  skills: "Expliquer l'IA à votre équipe en mots simples, Distinguer l'IA générative de l'IA agentique, Repérer les bons et les mauvais usages, Nommer les principaux risques, Préparer une présentation IA pour l'équipe",
  outcome: "expliquer à votre équipe, en mots simples, ce que sont l'IA générative et l'IA agentique, où elles aident et où elles échouent, et animer une présentation de dix minutes avec trois bons usages, trois risques et une règle de base claire.",
  about: [
    "Ce cours s'adresse aux managers, aux encadrants, aux chefs d'équipe et aux dirigeants de petites entreprises et d'associations. Aucune formation technique n'est nécessaire. Vous devez pouvoir parler de l'IA clairement, parce que votre équipe l'utilise déjà ou pose des questions à son sujet.",
    "Le chapitre 1 explique ce qu'est l'IA, comment fonctionne l'IA générative d'aujourd'hui, et ce qui rend l'IA agentique différente. Le chapitre 2 vous aide à juger où l'IA a sa place dans le travail de votre équipe, ce qui peut mal tourner, et comment présenter le sujet à l'équipe pour que tout le monde parte de la même compréhension.",
    "Chaque leçon dure environ cinq minutes et se termine par un court exercice à faire avec votre propre travail. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours. Voici le cours 1 sur 3 de la série Diriger à l'ère de l'IA agentique."
  ],
  finalTask: "Préparez et donnez (ou enregistrez) une présentation IA de dix minutes pour votre équipe. Elle explique l'IA générative et l'IA agentique en mots simples, montre un exemple en direct avec un assistant IA gratuit, nomme trois bons usages et trois risques pour le vrai travail de votre équipe, et se termine par une règle de base que tout le monde suivra, comme « aucune donnée personnelle de client ou d'employé dans les outils d'IA publics ».",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des managers, superviseurs, chefs d'équipe et dirigeants de petites entreprises et d'associations dont les équipes utilisent déjà l'IA ou posent des questions à son sujet. Aucune formation technique n'est nécessaire.",
    startingPoint: "Ils ont entendu parler de ChatGPT et d'outils semblables et en ont peut-être essayé un. Ils ne savent pas encore expliquer clairement l'IA générative ou agentique, juger où elle a sa place dans le travail de leur équipe, ni nommer ses principaux risques.",
    gap: "Les équipes utilisent l'IA, avec ou sans consignes. Les responsables doivent l'expliquer en mots simples, juger les bons et les mauvais usages, nommer les risques et fixer une première règle de base, pour que leurs équipes utilisent l'IA en sécurité et avec des attentes communes.",
    constraints: [
      "Niveau de lecture : mots simples, aucune formation technique supposée",
      "Appareils : un téléphone ou un ordinateur avec un assistant IA gratuit",
      "Temps : environ cinq minutes par leçon, à caser dans la journée d'un manager",
      "Vie privée : aucune donnée personnelle de client ou d'employé dans des outils d'IA publics pendant les exercices",
      "Les politiques propres à chaque organisation et les lois sur l'IA et les données s'appliquent"
    ],
    prerequisites: "Aucun. C'est le cours 1 sur 3 de Diriger à l'ère de l'IA agentique."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Quand un membre de l'équipe demande ce qu'est l'IA", action: "expliquer l'IA, l'apprentissage automatique et l'IA générative en mots simples", standard: "en une phrase chacun qu'un nouveau membre de l'équipe comprendrait" },
    { id: "O2", condition: "Pour une tâche courante de l'équipe", action: "décrire ce que feraient un assistant IA et un agent IA, et quelles étapes une personne doit approuver", standard: "en nommant qui reste responsable" },
    { id: "O3", condition: "À partir d'une liste des tâches de votre équipe", action: "classer chaque tâche en bon usage, usage prudent ou mauvais usage de l'IA", standard: "avec une courte raison pour chacune" },
    { id: "O4", condition: "Pour le vrai travail de votre équipe", action: "nommer les trois plus grands risques de l'IA et une protection pour chacun", standard: "avec des protections que vous pourriez mettre en place ce mois-ci" },
    { id: "O5", condition: "Avec un assistant IA gratuit et une tâche d'équipe non privée", action: "faire une courte démonstration en direct, avec une question de suivi et une vérification", standard: "sans utiliser de données privées" },
    { id: "O6", condition: "Avec votre équipe", action: "donner une présentation de dix minutes sur l'IA qui se termine par une règle de base", standard: "couvrant trois usages, trois risques et la règle, envoyée ensuite par écrit" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Ce que les responsables doivent savoir sur l'IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "L'IA en mots simples",
          minutes: 5,
          goal: "Expliquer l'IA, l'apprentissage automatique et l'IA générative en une phrase chacun.",
          text: [
            "L'intelligence artificielle (IA) est un logiciel qui fait des tâches qui demandent d'habitude un jugement humain, comme reconnaître la parole, repérer des tendances ou écrire du texte. L'apprentissage automatique est la façon la plus courante de la construire : au lieu d'écrire chaque règle, on montre au logiciel de nombreux exemples et il apprend des régularités.",
            "L'IA générative est un apprentissage automatique qui crée du contenu nouveau : texte, images, audio, code. Des outils comme ChatGPT, Microsoft Copilot, Google Gemini et Claude reposent sur de grands modèles de langage (LLM) entraînés sur d'énormes quantités d'écrits. Ils prédisent les mots probables : c'est pourquoi ils écrivent avec aisance, et aussi pourquoi ils peuvent se tromper avec assurance.",
            "En tant que responsable, vous n'avez pas besoin des mathématiques. Il vous faut trois phrases simples à dire à votre équipe, et le jugement pour savoir quand l'outil aide et quand il devine."
          ],
          words: [["Intelligence artificielle (IA)", "un logiciel qui fait des tâches qui demandent d'habitude un jugement humain."], ["Apprentissage automatique", "construire un logiciel en lui montrant des exemples pour qu'il apprenne des régularités (machine learning)."], ["IA générative", "une IA qui crée du texte, des images, de l'audio ou du code nouveaux."], ["LLM", "grand modèle de langage : l'IA derrière les assistants conversationnels."]],
          slides: [
            { title: "Trois définitions simples", bullets: ["IA : un logiciel qui fait des tâches de jugement", "Apprentissage automatique : apprend d'exemples", "IA générative : crée texte, images, code"] },
            { title: "Pourquoi elle paraît si sûre", bullets: ["Les LLM prédisent les mots probables", "Fluide ne veut pas dire juste"] },
            { title: "Ce qu'il faut au responsable", bullets: ["Des mots simples pour l'équipe", "Du jugement : elle aide ou elle devine ?"] }
          ],
          tryIt: "Écrivez votre propre explication en une phrase de l'IA, de l'apprentissage automatique et de l'IA générative, avec des mots que comprendrait votre plus récent membre d'équipe. Lisez-les à voix haute.",
          youCanNow: "expliquer l'IA, l'apprentissage automatique et l'IA générative en mots simples.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce que l'apprentissage automatique ?", options: ["Un logiciel qui apprend des régularités à partir d'exemples", "Un robot qui apprend à marcher", "Une personne qui enseigne à un ordinateur à la main, règle par règle", "Un logiciel qui ne se trompe jamais"], answer: 0, why: "L'apprentissage automatique trouve des régularités dans des exemples au lieu de suivre des règles écrites à la main." },
            { objective: "O1", q: "Un nouveau membre de l'équipe demande ce qu'est l'IA générative. Quelle réponse donneriez-vous ?", options: ["C'est un moteur de recherche sous un nouveau nom", "C'est un logiciel qui fait seulement des calculs", "C'est une IA qui crée du texte, des images ou du code à partir de ce que vous demandez", "C'est un programme qui connaît tous les faits"], answer: 2, why: "L'IA générative crée du contenu nouveau ; elle ne connaît pas tous les faits." }
          ]
        },
        {
          objectives: ["O2"],
          title: "De l'assistant à l'agent : ce que change l'IA agentique",
          minutes: 5,
          goal: "Expliquer la différence entre un assistant IA et un agent IA, et pourquoi elle compte pour les responsables.",
          text: [
            "Un assistant IA répond quand on lui demande : vous posez une consigne (prompt), il rédige, vous décidez. Un agent IA reçoit un objectif et agit : il planifie des étapes, utilise des outils comme la messagerie, les agendas, les tableurs ou des sites web, vérifie les résultats et continue jusqu'à ce qu'il ait fini ou qu'on l'arrête.",
            "L'IA agentique fait passer l'IA du conseil à l'action. Un assistant rédige une réponse à un client ; un agent pourrait lire la boîte de réception, rédiger les réponses, les envoyer et mettre à jour la fiche du client. Cela fait gagner plus de temps, et cela peut aussi produire des erreurs à grande vitesse, au nom de votre organisation.",
            "Pour les responsables, les questions clés changent. Pas seulement « la réponse est-elle bonne ? » mais « qu'a-t-il le droit de faire, qui approuve ses actions, et qui répond quand il se trompe ? » C'est toujours une personne qui répond."
          ],
          words: [["IA agentique", "une IA qui travaille vers un objectif en planifiant des étapes et en agissant avec des outils."], ["Responsable (au sens de rendre des comptes)", "la personne qui répond du résultat, bon ou mauvais."]],
          slides: [
            { title: "Assistant ou agent", bullets: ["Assistant : vous demandez, il rédige, vous décidez", "Agent : il reçoit un objectif, planifie et agit"] },
            { title: "Du conseil à l'action", bullets: ["Rédiger une réponse ou l'envoyer et mettre à jour la fiche", "Plus de temps gagné, erreurs à grande vitesse"] },
            { title: "Nouvelles questions du responsable", bullets: ["Qu'a-t-il le droit de faire ?", "Qui approuve ses actions ?", "Qui répond ? Toujours une personne"] }
          ],
          tryIt: "Choisissez une tâche courante de votre équipe. Décrivez ce qu'un assistant IA ferait pour elle, et ce qu'un agent IA pourrait faire. Écrivez quelles étapes vous voudriez faire approuver par une personne.",
          youCanNow: "expliquer en quoi l'IA agentique diffère d'un assistant et ce que les responsables doivent décider.",
          quickCheck: [
            { objective: "O2", q: "Que peut faire un agent IA qu'un assistant de base ne fait pas ?", options: ["Répondre à une question quand on la lui pose", "Planifier des étapes et agir avec des outils pour atteindre un objectif", "Rédiger un court e-mail", "Corriger ses propres erreurs sans que personne le sache"], answer: 1, why: "Les agents planifient et agissent avec des outils : c'est pourquoi les responsables doivent décider de ce qu'ils ont le droit de faire." },
            { objective: "O2", q: "Un agent pourrait envoyer seul des e-mails de remboursement aux clients. Que décideriez-vous d'abord ?", options: ["Le laisser tout envoyer pour gagner du temps", "Interdire toute IA dans l'équipe", "Laisser l'agent décider quels remboursements demandent une personne", "Quelles étapes une personne doit approuver et qui est responsable"], answer: 3, why: "Avec les agents, la question du responsable est : que peut-il faire, qui approuve et qui est responsable." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ce que l'IA fait bien et là où elle échoue",
          minutes: 5,
          goal: "Classer des tâches en bons usages, usages prudents et mauvais usages de l'IA.",
          text: [
            "L'IA est douée pour les premiers jets (e-mails, offres d'emploi, ordres du jour), le résumé de longs documents, la recherche d'idées, la réécriture pour un autre public, et l'explication de sujets inconnus. Elle fait gagner du temps parce qu'une personne relit toujours le résultat.",
            "Soyez prudent avec tout ce qui touche aux faits, au droit, à l'argent, à la santé ou aux personnes : l'IA peut inventer des faits, des sources et des chiffres (on parle souvent d'hallucination), peut refléter des biais de ses données d'entraînement, et ne connaît pas les règles de votre organisation si vous ne les lui donnez pas.",
            "Mauvais usages : les décisions finales sur des personnes (embauche, licenciement, sanction, salaire), tout ce dont l'erreur ne peut pas être réparée, et tout ce qui demande de mettre des données privées dans un outil public. Un test simple pour votre équipe : seriez-vous à l'aise d'expliquer à la personne concernée que c'est l'IA qui a fait cela ?"
          ],
          words: [["Hallucination", "quand l'IA écrit quelque chose qui paraît vrai mais qui est inventé."], ["Biais", "des régularités injustes dans les réponses de l'IA, souvent apprises de ses données d'entraînement."]],
          slides: [
            { title: "Bons usages", bullets: ["Premiers jets : e-mails, annonces, ordres du jour", "Résumés et recherche d'idées", "Réécriture pour un nouveau public"] },
            { title: "Usages prudents", bullets: ["Faits, droit, argent, santé, personnes", "Peut inventer faits et sources", "Peut refléter des biais"] },
            { title: "Mauvais usages", bullets: ["Décisions finales sur des personnes", "Erreurs impossibles à réparer", "Données privées dans des outils publics"] },
            { title: "Le test de l'explication", bullets: ["Diriez-vous à la personne concernée que l'IA l'a fait ?"] }
          ],
          tryIt: "Listez dix tâches de votre équipe. Marquez chacune BON, PRUDENCE ou MAUVAIS pour l'IA, avec quelques mots qui expliquent pourquoi.",
          youCanNow: "juger quelles tâches de votre équipe sont de bons usages, des usages prudents ou de mauvais usages de l'IA.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'une hallucination de l'IA ?", options: ["Une image créée par l'IA", "L'IA qui refuse de répondre", "L'IA qui écrit quelque chose qui semble vrai mais qui est inventé", "L'IA qui fonctionne lentement"], answer: 2, why: "Les hallucinations ont l'air sûres d'elles : c'est pourquoi les résultats de l'IA doivent être vérifiés." },
            { objective: "O3", q: "Votre équipe veut que l'IA décide quels candidats sont convoqués en entretien. Comment le classeriez-vous ?", options: ["PRUDENCE ou MAUVAIS : une personne doit prendre la décision, l'IA ne fait qu'aider", "BON : l'IA est plus rapide", "BON, tant que personne n'est prévenu", "Ce n'est pas la peine d'y réfléchir"], answer: 0, why: "Les décisions sur des personnes demandent un jugement humain, et le test de l'explication échoue si vous voulez le cacher." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Ce que les responsables doivent savoir sur l'IA",
        questions: [
          { objective: "O1", q: "Quelle est la meilleure description simple de l'IA générative ?", options: ["Un robot dans une usine", "Un tableur plus rapide", "Une IA qui crée du texte, des images ou du code nouveaux", "Un moteur de recherche"], answer: 2, why: "L'IA générative crée du contenu nouveau." },
          { objective: "O1", q: "Pourquoi un assistant IA peut-il paraître sûr et pourtant se tromper ?", options: ["Il prédit des mots probables au lieu de vérifier les faits", "Il est conçu pour mentir", "Il ne lit que de vieux journaux", "Il est cassé"], answer: 0, why: "Une prédiction fluide n'est pas une vérification des faits." },
          { objective: "O2", q: "Qu'est-ce qui rend le plus clairement une IA « agentique » ?", options: ["Elle a une voix", "Elle coûte cher", "Elle écrit de longues réponses", "Elle planifie des étapes et agit avec des outils"], answer: 3, why: "Les agents agissent vers un objectif, ils ne font pas que répondre." },
          { objective: "O2", q: "Un agent IA envoie à un client un e-mail de remboursement erroné. Qui en répond ?", options: ["L'IA", "Une personne de votre organisation", "Personne", "Seulement l'éditeur du logiciel"], answer: 1, why: "C'est toujours une personne qui répond des actions de l'IA faites au nom de l'organisation." },
          { objective: "O3", q: "Lequel est un MAUVAIS usage de l'IA ?", options: ["Rédiger un ordre du jour de réunion", "Chercher des noms d'événement", "Résumer un long rapport", "Prendre la décision finale de licencier un employé"], answer: 3, why: "Les décisions finales sur des personnes demandent un jugement humain." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Guider les premiers pas de votre équipe",
      lessons: [
        {
          objectives: ["O4"],
          title: "Les risques que tout responsable doit nommer",
          minutes: 5,
          goal: "Nommer les principaux risques de l'IA pour votre équipe et une protection pour chacun.",
          text: [
            "La vie privée : tout ce qui est tapé dans un outil d'IA public peut être conservé par le fournisseur, et certains outils gratuits peuvent l'utiliser pour améliorer leurs produits. Protection : aucune donnée de client, d'employé ou confidentielle dans les outils publics ; utilisez les outils approuvés par votre organisation.",
            "L'exactitude : faits inventés, chiffres faux, sources imaginaires. Protection : une personne vérifie les faits, les chiffres et les citations avant tout envoi. Les biais et l'équité : les réponses peuvent être injustes envers certains groupes. Protection : aucune décision sur des personnes prise par l'IA seule.",
            "La sécurité et les agents : les agents qui lisent des e-mails ou des pages web peuvent être piégés par des instructions cachées (injection de consigne), et les agents qui ont trop d'accès peuvent faire de vrais dégâts. Protection : le moins d'accès possible et une approbation humaine pour les actions. Pour un cadre plus complet, le cadre gratuit de gestion des risques de l'IA du NIST (l'institut américain des normes et de la technologie) organise ce travail en quatre fonctions : Gouverner, Cartographier, Mesurer et Gérer (Govern, Map, Measure, Manage)."
          ],
          words: [["Injection de consigne", "un texte caché qui essaie de faire suivre à une IA les instructions de quelqu'un d'autre."], ["Moindre accès", "donner à un outil ou à une personne seulement l'accès dont le travail a besoin."], ["NIST AI RMF", "un cadre américain gratuit et volontaire pour gérer les risques de l'IA."]],
          slides: [
            { title: "Vie privée", bullets: ["Les outils publics peuvent garder ce que vous tapez", "Aucune donnée client, employé ou confidentielle", "Utilisez les outils approuvés"] },
            { title: "Exactitude et équité", bullets: ["Vérifiez faits, chiffres et citations", "Aucune décision sur des personnes par l'IA seule"] },
            { title: "Sécurité et agents", bullets: ["Des instructions cachées peuvent piéger les agents", "Moindre accès, approbation humaine des actions"] },
            { title: "Un cadre gratuit", bullets: ["NIST AI RMF : Gouverner, Cartographier, Mesurer, Gérer", "Volontaire ; en révision : voyez la page du NIST"] }
          ],
          sources: [{ name: "NIST : cadre de gestion des risques de l'IA (AI RMF)", url: "https://www.nist.gov/itl/ai-risk-management-framework" }, { name: "OWASP Top 10 pour les applications LLM 2025", url: "https://genai.owasp.org/llm-top-10/" }],
          tryIt: "Écrivez les trois plus grands risques de l'IA pour le vrai travail de votre équipe, et une protection que vous pourriez mettre en place ce mois-ci pour chacun.",
          youCanNow: "nommer les principaux risques de l'IA pour votre équipe et une protection concrète pour chacun.",
          quickCheck: [
            { objective: "O4", q: "Que veut dire le moindre accès pour les outils d'IA ?", options: ["Donner aux outils d'IA le plus d'accès possible pour qu'ils marchent bien", "Donner à chaque outil seulement l'accès dont sa tâche a besoin", "Laisser seulement le responsable utiliser l'IA", "Utiliser l'IA le moins possible"], answer: 1, why: "Le moindre accès limite les dégâts si un outil se trompe ou est piégé." },
            { objective: "O4", q: "Votre équipe gère des dossiers de clients. Quelle paire risque et protection convient le mieux ?", options: ["Risque : l'IA est lente. Protection : acheter un ordinateur plus rapide", "Risque : l'IA est nouvelle. Protection : attendre cinq ans", "Risque : le personnel aime l'IA. Protection : bloquer tous les sites web", "Risque : des données personnelles fuient dans des outils publics. Protection : retirer d'abord ces données ou utiliser un outil approuvé"], answer: 3, why: "Une bonne protection répond au vrai risque du travail de l'équipe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "L'essayer vous-même : une démonstration à montrer",
          minutes: 5,
          goal: "Faire une courte démonstration d'IA, sans risque, sur une vraie tâche d'équipe (non privée).",
          text: [
            "Les responsables qui utilisent eux-mêmes l'IA la pilotent mieux. Choisissez une vraie tâche sans données privées : l'ordre du jour de la réunion d'équipe de la semaine prochaine, un premier jet d'offre d'emploi, ou un résumé en langage simple d'une politique publique.",
            "Rédigez une consigne (prompt) claire : ce dont vous avez besoin, le contexte (sans noms ni détails privés), et le format. Puis améliorez-la avec une relance, comme « fais plus court » ou « écris-le pour les nouveaux employés ». Vérifiez chaque fait avant de l'utiliser.",
            "Dans votre présentation, montrez tout le processus, y compris une erreur si l'IA en fait une. Voir un responsable repérer une erreur de l'IA apprend plus à l'équipe qu'une démonstration parfaite."
          ],
          steps: ["Choisissez une vraie tâche sans données privées.", "Rédigez une consigne : besoin, contexte, format.", "Faites une relance pour l'améliorer.", "Vérifiez les faits et corrigez les erreurs.", "Notez ce que vous montrerez à l'équipe."],
          words: [["Consigne (prompt)", "ce que vous tapez ou dites à un outil d'IA pour lui demander quelque chose."], ["Relance", "une deuxième demande qui améliore la première réponse."]],
          slides: [
            { title: "Utilisez-la d'abord vous-même", bullets: ["Qui utilise l'IA la pilote mieux", "Une vraie tâche, sans données privées"] },
            { title: "Une bonne démonstration", bullets: ["Consigne claire : besoin, contexte, format", "Une relance pour l'améliorer", "Vérifiez chaque fait"] },
            { title: "Montrez aussi les erreurs", bullets: ["Repérer une erreur de l'IA est la meilleure leçon"] }
          ],
          tryIt: "Utilisez ChatGPT, Copilot, Gemini ou Claude pour rédiger l'ordre du jour de la réunion d'équipe de la semaine prochaine. Faites une relance, vérifiez-le, et gardez les versions avant et après pour votre présentation.",
          youCanNow: "faire une courte démonstration d'IA, sûre et honnête, sur une vraie tâche d'équipe.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qui fait une bonne démonstration d'IA en direct pour votre équipe ?", options: ["Une vraie tâche sans données privées", "Une tâche avec le dossier d'un vrai client", "Une tâche inventée sans lien avec votre travail", "Une démonstration qui cache les erreurs"], answer: 0, why: "Une tâche réelle mais non privée montre l'intérêt sans mettre en danger les données de quiconque." },
            { objective: "O5", q: "Pendant votre démonstration, l'IA rédige un ordre du jour avec une mauvaise date de réunion. Que faites-vous ?", options: ["Passer vite sur ce point", "Accuser l'outil et arrêter", "Montrer comment vous l'avez repéré et poser une question de suivi pour corriger", "Dire qu'elle se trompe toujours autant"], answer: 2, why: "Montrer comment vous repérez l'erreur apprend à votre équipe l'habitude de vérifier." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Présenter l'IA à votre équipe et fixer une première règle de base",
          minutes: 6,
          goal: "Donner à votre équipe une présentation de dix minutes sur l'IA qui se termine par une règle de base.",
          text: [
            "Une bonne première présentation est courte et pratique. Déroulé : deux minutes sur ce que sont l'IA et l'IA agentique ; trois minutes de démonstration en direct ; deux minutes sur les bons usages pour notre équipe ; deux minutes sur les risques ; une minute sur la règle de base et à qui poser ses questions.",
            "Choisissez une règle de base qui protège les personnes et qui est facile à retenir. La première règle la plus utile pour la plupart des équipes : « Aucune donnée personnelle de client, d'élève, de patient ou d'employé dans les outils d'IA publics. » Ajoutez à qui demander en cas de doute.",
            "Invitez les questions et les inquiétudes. Certains seront enthousiastes, d'autres inquiets pour leur emploi. Dites simplement ce que vous savez, ce que vous ne savez pas, et que chacun reste responsable de son travail. Puis envoyez la règle par écrit."
          ],
          steps: ["Deux minutes : ce que sont l'IA et l'IA agentique.", "Trois minutes : démonstration en direct.", "Deux minutes : bons usages pour notre équipe.", "Deux minutes : risques.", "Une minute : la règle de base et à qui demander ; puis envoyez-la par écrit."],
          words: [["Règle de base", "une règle simple et partagée que tout le monde suit."], ["Présentation d'équipe", "une courte réunion pour donner à une équipe la même information (briefing)."]],
          slides: [
            { title: "La présentation de dix minutes", bullets: ["2 min : ce que sont l'IA et les agents", "3 min : démonstration en direct", "2 min : bons usages ; 2 min : risques", "1 min : la règle de base"] },
            { title: "Une première règle de base", bullets: ["Aucune donnée personnelle dans les outils publics", "Dites à qui demander en cas de doute"] },
            { title: "Mener la conversation", bullets: ["Invitez questions et inquiétudes", "Dites ce que vous savez et ne savez pas", "Chacun reste responsable ; suivi par écrit"] }
          ],
          tryIt: "Exercice final : préparez votre présentation de dix minutes avec les cinq parties ci-dessus, en utilisant votre démonstration de la leçon 5 et vos risques de la leçon 4. Donnez-la à votre équipe (ou enregistrez-la), terminez par une règle de base, et envoyez la règle par écrit ensuite.",
          youCanNow: "présenter clairement l'IA à votre équipe et fixer une première règle de base qui protège les personnes.",
          quickCheck: [
            { objective: "O6", q: "Par quoi doit se terminer une première présentation sur l'IA ?", options: ["La liste de tous les outils d'IA du marché", "Une règle de base claire et la personne à qui s'adresser", "La promesse que l'IA ne changera rien", "Un test noté"], answer: 1, why: "Une règle claire et une personne de contact donnent à l'équipe un point de départ commun." },
            { objective: "O6", q: "Le lendemain de votre présentation, quelle est la meilleure étape suivante ?", options: ["Attendre de voir si quelqu'un se souvient de la règle", "Ajouter cinq autres règles", "Demander à l'IA de le rappeler à tout le monde", "Envoyer la règle de base à l'équipe par écrit"], answer: 3, why: "Une règle écrite est facile à retrouver et à consulter." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Guider les premiers pas de votre équipe",
        questions: [
          { objective: "O4", q: "Un employé veut coller la réclamation d'un client, avec son nom et son adresse, dans un outil d'IA public gratuit. Meilleure réponse ?", options: ["Allez-y", "Collez seulement l'adresse", "Retirez d'abord les données personnelles, ou utilisez un outil approuvé", "Demandez à l'IA si c'est sûr"], answer: 2, why: "Les données personnelles restent hors des outils publics." },
          { objective: "O4", q: "Quelles sont les quatre fonctions du cadre de gestion des risques de l'IA du NIST ?", options: ["Gouverner, Cartographier, Mesurer, Gérer", "Planifier, Construire, Tester, Livrer", "Acheter, Installer, Former, Utiliser", "Lire, Écrire, Vérifier, Envoyer"], answer: 0, why: "Le NIST nomme Govern, Map, Measure et Manage." },
          { objective: "O5", q: "Votre démonstration en direct donne une date fausse. Que faire pendant la présentation ?", options: ["La cacher", "Montrer comment vous l'avez repérée et corrigée", "Arrêter la présentation", "Accuser l'outil et passer à autre chose"], answer: 1, why: "Repérer les erreurs ouvertement enseigne l'habitude de vérifier." },
          { objective: "O6", q: "Quelle est la meilleure première règle de base pour la plupart des équipes ?", options: ["« Aucune donnée personnelle dans les outils d'IA publics ; demandez en cas de doute. »", "« N'utilisez jamais l'IA. »", "« Seuls les managers peuvent utiliser l'IA. »", "« Utilisez l'IA pour tout. »"], answer: 0, why: "Elle protège les personnes et se retient facilement." },
          { objective: "O6", q: "Un membre de l'équipe a peur que l'IA le remplace. Un bon responsable :", options: ["Met fin à la réunion", "Ignore l'inquiétude", "Promet que rien ne changera jamais", "Dit simplement ce qu'on sait et que chacun reste responsable"], answer: 3, why: "Des réponses honnêtes et simples créent la confiance." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Diriger à l'ère de l'IA agentique 1 : comprendre l'IA",
    questions: [
      { objective: "O1", q: "La meilleure description de l'IA est :", options: ["Un nouveau type d'écran d'ordinateur", "Un logiciel qui fait des tâches qui demandent d'habitude un jugement humain", "Une application de réseau social", "Seulement un type de robot"], answer: 1, why: "C'est la définition simple." },
      { objective: "O1", q: "L'apprentissage automatique veut dire :", options: ["Le personnel apprend à utiliser des machines", "Les machines se réparent seules", "Le logiciel apprend des régularités à partir d'exemples", "Taper plus vite"], answer: 2, why: "Il apprend d'exemples au lieu de règles écrites à la main." },
      { objective: "O1", q: "Lequel est un outil d'IA générative ?", options: ["Une imprimante", "Une calculatrice", "Microsoft Copilot", "Un classeur"], answer: 2, why: "Copilot, ChatGPT, Gemini et Claude génèrent du texte." },
      { objective: "O1", q: "LLM veut dire :", options: ["Grand modèle de langage", "Long mémo juridique", "Machine de bas niveau", "Module d'apprentissage local"], answer: 0, why: "Les LLM font fonctionner les assistants conversationnels." },
      { objective: "O2", q: "Un assistant IA :", options: ["Ne fait jamais d'erreurs", "Agit toujours seul", "Signe des contrats", "Répond et rédige quand on le lui demande"], answer: 3, why: "Les assistants répondent ; c'est vous qui décidez." },
      { objective: "O2", q: "Un agent IA :", options: ["Ne fait que répondre aux questions", "Planifie des étapes et agit avec des outils vers un objectif", "Est un employé humain", "Ne peut pas utiliser la messagerie ni les agendas"], answer: 1, why: "Les agents agissent." },
      { objective: "O2", q: "L'IA agentique change la question du responsable en :", options: ["Est-elle populaire ?", "De quelle couleur est-elle ?", "Combien de mots peut-elle écrire ?", "Qu'a-t-elle le droit de faire, qui approuve, qui répond ?"], answer: 3, why: "L'action demande des permissions et une responsabilité." },
      { objective: "O3", q: "L'hallucination veut dire que l'IA :", options: ["Refuse de répondre", "Est très rapide", "Écrit quelque chose qui paraît vrai mais qui est inventé", "Parle à voix haute"], answer: 2, why: "Le contenu inventé doit être vérifié." },
      { objective: "O3", q: "Lequel est un BON usage de l'IA pour une équipe ?", options: ["Le premier jet d'une offre d'emploi relu par une personne", "Décider qui obtient une augmentation", "Envoyer des avis juridiques sans vérification", "Stocker les dossiers médicaux du personnel"], answer: 0, why: "Des brouillons relus par des personnes font gagner du temps sans risque." },
      { objective: "O3", q: "Les réponses de l'IA peuvent être injustes envers certains groupes à cause :", options: ["D'une connexion Internet lente", "De biais appris dans les données d'entraînement", "Du choix des polices", "De la taille de l'écran"], answer: 1, why: "Les régularités des données d'entraînement peuvent porter des biais." },
      { objective: "O3", q: "Le test de l'explication demande :", options: ["Diriez-vous à la personne concernée que l'IA l'a fait ?", "L'IA peut-elle s'expliquer ?", "Est-ce bon marché ?", "Est-ce rapide ?"], answer: 0, why: "Être à l'aise pour l'expliquer signale un usage acceptable." },
      { objective: "O4", q: "L'injection de consigne, c'est :", options: ["Un forfait", "Un traitement médical", "Une consigne plus rapide", "Un texte caché qui essaie de faire suivre à l'IA les ordres de quelqu'un d'autre"], answer: 3, why: "Les agents qui lisent des e-mails ou des pages web peuvent être piégés." },
      { objective: "O4", q: "Le moindre accès veut dire :", options: ["Aucun accès", "Seulement l'accès dont le travail a besoin", "Un accès complet pour aller vite", "Un accès réservé aux managers"], answer: 1, why: "Moins d'accès limite les dégâts en cas d'erreur." },
      { objective: "O4", q: "Le NIST AI RMF est :", options: ["Un outil d'IA", "Une loi avec des amendes", "Un cadre gratuit et volontaire pour gérer les risques de l'IA", "Un certificat de formation"], answer: 2, why: "Le NIST le décrit comme volontaire." },
      { objective: "O4", q: "Avant d'utiliser dans un rapport des faits écrits par l'IA, vous devez :", options: ["Demander à l'IA de promettre", "Les croire s'ils semblent justes", "Les vérifier avec une source fiable", "Retirer tous les chiffres"], answer: 2, why: "Une personne vérifie les faits et les chiffres." },
      { objective: "O5", q: "Une bonne démonstration en direct utilise :", options: ["Une vraie tâche sans données privées", "Le dossier complet d'un client", "Les salaires du personnel", "Des mots de passe"], answer: 0, why: "Une vraie tâche non privée est sûre et pertinente." },
      { objective: "O5", q: "Pourquoi montrer une erreur de l'IA pendant votre présentation ?", options: ["Cela prouve que l'IA est inutile", "C'est drôle", "Cela termine la réunion plus tôt", "Cela enseigne l'habitude de vérifier"], answer: 3, why: "Voir des erreurs repérées en apprend plus qu'une démonstration parfaite." },
      { objective: "O6", q: "Une première présentation doit se terminer par :", options: ["Une politique de 50 pages", "Une règle de base claire et à qui demander", "Aucune conclusion", "L'achat d'un logiciel"], answer: 1, why: "Une règle simple est retenue et suivie." },
      { objective: "O6", q: "Après la présentation, vous devez :", options: ["Interdire les questions", "Ne plus jamais parler d'IA", "Supprimer la démonstration", "Envoyer la règle de base par écrit"], answer: 3, why: "L'écrire la fait durer." },
      { objective: "O6", q: "Quand des personnes utilisent l'IA pour leur travail, qui reste responsable de ce travail ?", options: ["L'éditeur de l'IA", "L'outil d'IA", "Les personnes qui font le travail", "Personne"], answer: 2, why: "La responsabilité reste aux personnes." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      5,
      6,
      8,
      10,
      11,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Explication simple",
        objective: "O1",
        notYet: "Utilise du jargon, ou confond IA générative et IA agentique.",
        meets: "Explique l'IA générative et l'IA agentique en mots simples.",
        exceeds: "Utilise un exemple tiré du travail de l'équipe que tout le monde reconnaît."
      },
      {
        name: "Trois bons usages",
        objective: "O3",
        notYet: "Moins de trois usages, ou des usages mal adaptés.",
        meets: "Nomme trois bons usages pour le vrai travail de l'équipe.",
        exceeds: "Dit lesquels demandent qu'une personne vérifie le résultat."
      },
      {
        name: "Trois risques",
        objective: "O4",
        notYet: "Les risques sont trop généraux ou absents.",
        meets: "Nomme trois risques qui correspondent au vrai travail de l'équipe.",
        exceeds: "Donne une protection pour chaque risque."
      },
      {
        name: "Exemple en direct",
        objective: "O5",
        notYet: "Pas d'exemple, ou il utilise des données privées.",
        meets: "Montre un exemple en direct avec un assistant IA gratuit sur une tâche non privée.",
        exceeds: "Montre une question de suivi et comment le résultat a été vérifié."
      },
      {
        name: "Règle de base",
        objective: "O6",
        notYet: "Pas de règle de base, ou une règle vague.",
        meets: "Se termine par une règle de base claire que tout le monde suivra.",
        exceeds: "Nomme la personne à qui s'adresser et envoie la règle par écrit ensuite."
      }
    ]
  },
  evaluation: {
    results: [
      "Responsables qui terminent le cours et réussissent l'exercice final (grille d'évaluation)",
      "Responsables qui font la présentation à leur équipe dans les 30 jours (enquête de suivi)",
      "Équipes qui ont une règle de base écrite sur l'IA dans les 30 jours (enquête de suivi)",
      "Responsables qui passent au cours 2 de Diriger à l'ère de l'IA agentique"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec un assistant IA gratuit comme ChatGPT, Copilot, Gemini ou Claude",
      "Une liste des tâches courantes de votre équipe",
      "Du papier ou un document pour les notes et le plan de la présentation",
      "Environ 60 minutes au total, plus la présentation de dix minutes à l'équipe"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis demandez aux managers de partager une tâche classée BON, PRUDENCE ou MAUVAIS, et pourquoi.",
      "Faites la démonstration de la leçon 5 en direct avec le groupe, y compris une erreur qui est repérée.",
      "Rappelez à chacun de suivre les politiques de son organisation sur l'IA et les données, et de n'utiliser aucune donnée personnelle pendant les exercices.",
      "Laissez les responsables s'entraîner à leur présentation à deux avant de la donner à leur équipe.",
      "Notez l'exercice final avec la grille, et demandez la règle de base écrite comme preuve."
    ]
  }
};
