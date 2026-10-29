"use strict";

// Koach Learn course (French translation of entrepreneurs/entrepreneurs-ai-automation-agentic.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "entrepreneurs-ai-automation-agentic-fr",
  lang: "fr",
  translationOf: "entrepreneurs-ai-automation-agentic",
  category: "Entrepreneurs",
  name: "Automatisation par l'IA et processus agentiques",
  skills: "Décrire un processus, Penser en déclencheurs et actions, Créer une automatisation sans code, Ajouter une étape d'IA, Fixer des garde-fous pour les agents IA, Surveiller et réparer les automatisations",
  outcome: "décrire un processus répété de votre entreprise, créer pour lui une automatisation sans code qui fonctionne avec une étape d'IA, ajouter un garde-fou d'approbation humaine, et la tester et la surveiller pour qu'elle échoue sans danger.",
  about: [
    "L'automatisation, c'est quand un ordinateur fait à votre place une tâche répétée lorsqu'un événement se produit : un formulaire est rempli, un e-mail arrive, une commande est payée. L'IA ajoute la capacité de lire, trier et écrire dans cette tâche. Les outils « agentiques » vont plus loin : vous leur donnez un objectif et ils planifient et font plusieurs étapes tout seuls.",
    "Ce cours s'adresse aux chefs d'entreprise qui veulent arrêter de copier-coller les mêmes informations toute la journée. Vous allez décrire un processus, apprendre à penser en déclencheurs et actions, créer une vraie automatisation avec un outil sans code (comme Zapier, Make ou Microsoft Power Automate), ajouter une étape d'IA, et fixer des garde-fous pour que rien d'important ne se passe sans votre accord.",
    "Chaque leçon dure environ cinq minutes et comprend une tâche pratique. Une vérification des connaissances suit chaque chapitre, et un quiz de 20 questions vous attend à la fin. Les fonctions des outils et les limites des offres gratuites changent souvent : consultez les pages de tarifs et d'aide de chaque outil."
  ],
  finalTask: "Créez et testez une automatisation pour votre entreprise, par exemple : quand un client remplit votre formulaire de demande, ajouter sa demande dans un tableur, faire rédiger une réponse par l'IA et vous envoyer le brouillon pour approbation avant que quoi que ce soit parte chez le client. Rédigez une fiche d'une page : la description du processus, le déclencheur et les actions, l'instruction donnée à l'IA, l'étape d'approbation, trois résultats de test et ce que vous vérifierez chaque semaine.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des propriétaires de petites entreprises qui passent des heures à recopier les mêmes informations entre des formulaires, l'e-mail et des tableurs, et qui veulent qu'un ordinateur le fasse à leur place.",
    startingPoint: "Ils utilisent des formulaires en ligne, l'e-mail et des tableurs, et se sont déjà servis d'un assistant IA. Peu ont créé une automatisation ou réfléchi à ce qu'un agent IA doit faire ou ne pas faire seul.",
    gap: "Recopier sans cesse fait perdre des heures et provoque des erreurs, mais des automatisations et des agents qui agissent sans limites peuvent envoyer de mauvaises réponses, dépenser de l'argent ou divulguer des données de clients. Les entrepreneurs doivent créer une petite automatisation avec une étape d'IA, un garde-fou d'approbation, des tests et une vérification hebdomadaire, pour qu'elle fasse gagner du temps et échoue sans danger.",
    constraints: [
      "Pas de code ; des mots simples et l'offre gratuite d'un outil sans code",
      "Appareils : un ordinateur avec un outil de formulaire, un tableur et l'e-mail",
      "Temps : environ cinq minutes par leçon, plus la création et les tests",
      "Les fonctions des outils et les limites des offres gratuites changent souvent ; vérifiez les pages de tarifs et d'aide de chaque outil",
      "Testez avec des données inventées, et gardez les numéros de carte et les autres données privées hors des étapes d'IA"
    ],
    prerequisites: "« Les outils d'IA que tout entrepreneur devrait connaître », ou être à l'aise avec les formulaires en ligne et les tableurs."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'un processus que vous répétez chaque semaine", action: "décrire le processus en étapes du début à la fin, en marquant chacune comme copie, décision ou écriture", standard: "en corrigeant toutes les erreurs de l'IA" },
    { id: "O2", condition: "À partir de la description de votre processus", action: "écrire le processus sous forme d'un déclencheur et d'une liste d'actions", standard: "avec l'action d'IA et l'étape d'approbation marquées" },
    { id: "O3", condition: "Avec l'offre gratuite d'un outil sans code", action: "créer une automatisation qui place les réponses d'un formulaire dans un tableur et vous prévient", standard: "testée avec des données inventées et qui fonctionne" },
    { id: "O4", condition: "À partir de votre automatisation qui fonctionne", action: "ajouter une étape d'IA qui rédige une réponse ou trie une demande et vous l'envoie", standard: "avec des règles claires, testée sur trois demandes différentes et sans aucune donnée privée qui passe par l'IA" },
    { id: "O5", condition: "Pour votre automatisation ou tout agent IA", action: "écrire une liste de garde-fous qui dit ce qu'il peut faire seul et ce qui demande toujours votre accord", standard: "avec l'envoi aux clients et les dépenses d'argent qui demandent toujours votre accord" },
    { id: "O6", condition: "Avant et après la mise en marche de votre automatisation", action: "tester l'automatisation avec des entrées inhabituelles, activer les alertes d'échec et prévoir une vérification hebdomadaire", standard: "pour qu'elle s'arrête et vous prévienne en cas de problème" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Penser en processus",
      lessons: [
        {
          objectives: ["O1"],
          title: "Décrire un processus que vous répétez",
          minutes: 5,
          goal: "Décrire un processus répété de votre entreprise sous forme de liste d'étapes, du début à la fin.",
          text: [
            "Avant d'automatiser quoi que ce soit, écrivez-le. Un processus, ce sont les étapes par lesquelles passe un travail du début à la fin. Exemple, une demande d'un nouveau client : le formulaire arrive, vous copiez les détails dans un tableur, vous écrivez une réponse, vous ajoutez un rappel de relance.",
            "Choisissez un processus qui arrive souvent, suit les mêmes étapes à chaque fois, et vous fait perdre du temps à copier, coller ou retaper. Ce sont les meilleurs à automatiser.",
            "L'IA peut vous aider à le décrire. Expliquez ce que vous faites avec vos mots et demandez : « Transforme ceci en processus numéroté. Indique quelles étapes consistent à copier des informations, lesquelles demandent une décision et lesquelles demandent d'écrire. »"
          ],
          steps: ["Choisissez un processus que vous faites au moins chaque semaine.", "Décrivez-le à un assistant IA avec vos mots.", "Demandez un processus numéroté, en marquant les étapes de copie, de décision et d'écriture.", "Comparez la description avec ce que vous faites vraiment et corrigez-la."],
          words: [["Processus", "les étapes par lesquelles passe un travail du début à la fin."], ["Automatiser", "régler un ordinateur pour qu'il fasse une tâche répétée sans que vous fassiez chaque étape."]],
          slides: [
            { title: "Écrivez-le d'abord", bullets: ["Un processus = les étapes du début à la fin", "Exemple : formulaire, tableur, réponse, rappel"] },
            { title: "Les meilleurs processus à automatiser", bullets: ["Arrivent souvent", "Mêmes étapes à chaque fois", "Beaucoup de copie et de ressaisie"] },
            { title: "Décrivez-le avec l'IA", bullets: ["Expliquez ce que vous faites", "Demandez des étapes numérotées", "Marquez copie, décision et écriture"] }
          ],
          tryIt: "Décrivez avec l'aide de l'IA un processus que vous répétez chaque semaine. Marquez chaque étape comme copie, décision ou écriture, et corrigez les erreurs de l'IA.",
          youCanNow: "décrire un processus répété de votre entreprise en étapes claires.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'un processus ?", options: ["Les étapes que suit le travail du début à la fin", "Un type de tableur", "Une plainte de client", "Une application d'IA"], answer: 0, why: "Un processus liste chaque étape d'un travail dans l'ordre." },
            { objective: "O1", q: "La description que l'IA fait de votre processus de commande oublie l'étape où vous vérifiez le stock. Que faites-vous ?", options: ["Utiliser la description telle quelle", "Ajouter vous-même l'étape manquante", "Commencer quand même à automatiser", "Supprimer toute la description"], answer: 1, why: "C'est vous qui connaissez le mieux votre processus, alors vous corrigez la description de l'IA." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Déclencheurs et actions",
          minutes: 5,
          goal: "Transformer la description de votre processus en un déclencheur et une liste d'actions.",
          text: [
            "Chaque automatisation a un déclencheur et une ou plusieurs actions. Le déclencheur est l'événement qui la lance : « une nouvelle réponse au formulaire », « un nouvel e-mail contenant le mot facture », « une nouvelle commande payée ». Les actions sont ce qui se passe ensuite : « ajouter une ligne dans un tableur », « m'envoyer un message », « créer un événement dans l'agenda ».",
            "Les étapes de copie deviennent facilement des actions. Les étapes d'écriture peuvent devenir des actions d'IA. Les étapes de décision restent généralement avec vous, ou deviennent une étape d'approbation où l'automatisation attend votre oui.",
            "Les outils sans code comme Zapier, Make et Microsoft Power Automate relient les applications que vous utilisez déjà avec des déclencheurs et des actions. La plupart ont des offres gratuites avec des limites ; consultez la page de tarifs de chaque outil pour savoir ce qui est inclus aujourd'hui."
          ],
          steps: ["Trouvez l'événement qui lance votre processus : c'est le déclencheur.", "Transformez chaque étape de copie en action.", "Transformez les étapes d'écriture en actions d'IA.", "Transformez les étapes de décision en étape d'approbation ou gardez-les manuelles.", "Écrivez-le ainsi : Quand [déclencheur], alors [action 1], [action 2]..."],
          words: [["Déclencheur", "l'événement qui lance une automatisation."], ["Action", "une étape que fait l'automatisation après le déclencheur."], ["Outil sans code", "un outil qui permet de créer des automatisations en cliquant et en choisissant, sans programmer."]],
          slides: [
            { title: "Un déclencheur, des actions", bullets: ["Déclencheur : l'événement qui la lance", "Actions : ce qui se passe ensuite"] },
            { title: "Transformer les étapes en actions", bullets: ["Étapes de copie : actions faciles", "Étapes d'écriture : actions d'IA", "Décisions : étape d'approbation ou vous"] },
            { title: "Outils sans code", bullets: ["Zapier, Make, Microsoft Power Automate", "Relient les applis que vous utilisez déjà", "Vérifiez les limites gratuites sur leurs sites"] }
          ],
          sources: [{ name: "Zapier : tarifs (en anglais)", url: "https://zapier.com/pricing" }, { name: "Make : tarifs (en anglais)", url: "https://www.make.com/en/pricing" }],
          tryIt: "Écrivez votre processus sous la forme « Quand [déclencheur], alors [actions] ». Indiquez quelle action est faite par l'IA et où vous voulez une étape d'approbation.",
          youCanNow: "décrire n'importe quelle automatisation comme un déclencheur plus des actions, en gardant le contrôle des décisions.",
          quickCheck: [
            { objective: "O2", q: "Dans « Quand un paiement arrive, envoyer un reçu », quelle est l'action ?", options: ["Un paiement arrive", "Le client", "Envoyer un reçu", "La banque"], answer: 2, why: "L'action est ce qui se passe après le déclencheur." },
            { objective: "O2", q: "Une étape de votre processus consiste à décider d'accorder un remboursement. Comment la traitez-vous ?", options: ["Laisser l'automatisation décider", "Laisser l'IA décider", "Retirer l'étape", "La garder comme étape d'approbation pour vous"], answer: 3, why: "Les étapes de décision deviennent des approbations ou restent à vous." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Créer votre première automatisation sans code",
          minutes: 6,
          goal: "Créer une automatisation qui fonctionne, qui place les réponses d'un formulaire dans un tableur et vous prévient.",
          text: [
            "Commencez par une automatisation simple et sûre : quand quelqu'un remplit votre formulaire de demande (par exemple un Google Form ou un Microsoft Form), ajouter ses réponses dans un tableur et vous envoyer une notification. Rien ne part encore chez le client.",
            "Dans votre outil sans code, créez une nouvelle automatisation, choisissez l'application de formulaire comme déclencheur, connectez votre compte et choisissez le formulaire. Ajoutez ensuite une action pour le tableur, et associez chaque question du formulaire à une colonne. Ajoutez une deuxième action pour vous envoyer un e-mail ou un message.",
            "Testez-la avec une fausse demande au nom inventé, comme « Client Test ». Vérifiez que la ligne apparaît dans les bonnes colonnes et que vous avez reçu le message. Seulement ensuite, activez-la."
          ],
          steps: ["Créez un court formulaire de demande avec nom, e-mail et demande.", "Dans l'outil sans code, choisissez le formulaire comme déclencheur.", "Ajoutez une action tableur et associez les questions aux colonnes.", "Ajoutez une action pour vous prévenir.", "Testez avec des données « Client Test », vérifiez les résultats, puis activez-la."],
          words: [["Connecter un compte", "donner à l'outil d'automatisation la permission d'utiliser une de vos applications."], ["Correspondance des champs", "associer chaque information à l'endroit où elle doit aller, comme une question de formulaire à une colonne de tableur."]],
          slides: [
            { title: "Commencez simple et sûr", bullets: ["Réponses du formulaire dans un tableur", "Une notification pour vous", "Rien ne part encore chez le client"] },
            { title: "Créez-la", bullets: ["Déclencheur : nouvelle réponse au formulaire", "Action : ajouter une ligne, associer les champs", "Action : vous prévenir"] },
            { title: "Testez avant d'activer", bullets: ["Utilisez des données « Client Test »", "Vérifiez les colonnes et la notification", "Puis activez-la"] }
          ],
          tryIt: "Créez l'automatisation formulaire-tableur-notification avec l'offre gratuite d'un outil sans code. Testez-la avec des données inventées et confirmez qu'elle fonctionne.",
          youCanNow: "créer et tester une automatisation simple sans code entre les applications que vous utilisez.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce que la correspondance des champs dans un outil sans code ?", options: ["Faire correspondre chaque information à l'endroit où elle doit aller", "Dessiner un plan de votre boutique", "Choisir une police", "Payer une offre"], answer: 0, why: "La correspondance des champs envoie chaque réponse dans la bonne colonne." },
            { objective: "O3", q: "Votre automatisation est créée. Que faites-vous avant de la mettre en marche ?", options: ["L'envoyer à tous les clients", "La tester avec des données inventées comme « Client Test »", "Supprimer le formulaire", "Sauter le test pour gagner du temps"], answer: 1, why: "Tester avec des données inventées permet de trouver les problèmes sans risque." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Penser en processus",
        questions: [
          { objective: "O1", q: "Quel processus vaut mieux automatiser en premier ?", options: ["Une décision juridique ponctuelle", "Un processus fréquent, avec les mêmes étapes et beaucoup de copie", "Quelque chose que vous faites une fois par an", "L'embauche de votre premier salarié"], answer: 1, why: "Le travail de copie fréquent et répété fait gagner le plus de temps." },
          { objective: "O2", q: "Dans « Quand une nouvelle réponse au formulaire arrive, ajouter une ligne au tableur », quel est le déclencheur ?", options: ["Votre e-mail", "Ajouter une ligne au tableur", "Le tableur", "Une nouvelle réponse au formulaire arrive"], answer: 3, why: "Le déclencheur est l'événement qui lance l'automatisation." },
          { objective: "O2", q: "Que deviennent généralement les étapes de décision dans une automatisation ?", options: ["Une étape d'approbation, ou elles restent avec vous", "L'outil devine", "Elles sont supprimées", "Le client décide"], answer: 0, why: "Les décisions demandent votre jugement." },
          { objective: "O3", q: "Qu'est-ce que la correspondance des champs ?", options: ["Choisir une police", "Dessiner le plan d'une ferme", "Associer chaque information à l'endroit où elle va", "Payer une facture"], answer: 2, why: "Elle relie les questions du formulaire aux colonnes du tableur." },
          { objective: "O3", q: "Quelles données utiliser pour tester une nouvelle automatisation ?", options: ["Votre mot de passe", "Le numéro de carte d'un vrai client", "Des données de test inventées comme « Client Test »", "Aucun test"], answer: 2, why: "Des fausses données permettent de tester sans risque." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Ajouter l'IA et garder le contrôle",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ajouter une étape d'IA",
          minutes: 5,
          goal: "Ajouter une action d'IA qui rédige une réponse ou trie une demande.",
          text: [
            "Beaucoup d'outils sans code permettent d'ajouter une action d'IA : envoyer un texte à un modèle d'IA avec une instruction et récupérer sa réponse dans l'automatisation. Usages courants : classer une demande dans une catégorie, en extraire les détails clés ou rédiger une réponse. Sur certains outils, l'étape d'IA n'existe que dans les offres payantes (lors de notre vérification en octobre 2026, les étapes d'IA de Zapier demandaient une offre payante) ; consultez la page de tarifs. Si la vôtre ne l'inclut pas, faites-vous envoyer la demande par l'automatisation et collez-la vous-même dans un assistant conversationnel gratuit.",
            "Écrivez l'instruction à l'IA avec soin, comme un prompt réutilisable : « Lis cette demande de client. Réponds en moins de 100 mots, de façon amicale et claire. Utilise seulement les informations de l'entreprise données ici : [horaires, services]. Ne donne jamais de prix. En cas de doute, écris [VÉRIFIER]. »",
            "Envoyez le brouillon de l'IA à VOUS, pas au client. Pensez aux informations de clients qui passent par le service d'IA ; vérifiez les conditions de données et de confidentialité de l'outil, et n'y faites pas passer de numéros de carte, de numéros d'identité ou de détails de santé."
          ],
          steps: ["Ajoutez une action d'IA après l'étape du tableur.", "Écrivez une instruction soignée avec des règles et les faits de votre entreprise.", "Ne transmettez que le texte de la demande dont l'IA a besoin.", "Envoyez-vous le brouillon de l'IA pour le relire.", "Testez avec trois demandes inventées différentes."],
          words: [["Action d'IA", "une étape d'une automatisation qui envoie un texte à une IA et utilise sa réponse."], ["Conditions de données", "les règles sur la façon dont un outil conserve et utilise les informations que vous lui envoyez."]],
          slides: [
            { title: "Ce que peut faire une étape d'IA", bullets: ["Classer une demande dans une catégorie", "Extraire les détails clés", "Rédiger une réponse", "Peut demander une offre payante : voir les tarifs"] },
            { title: "Une instruction soignée", bullets: ["Longueur et ton", "Seulement les faits donnés", "Jamais de prix ; [VÉRIFIER] en cas de doute"] },
            { title: "Gardez-la sûre", bullets: ["Le brouillon va à vous, pas au client", "N'envoyez que ce dont l'IA a besoin", "Vérifiez les conditions de données de l'outil"] }
          ],
          sources: [{ name: "Zapier : tarifs (étapes d'IA et limites des offres, en anglais)", url: "https://zapier.com/pricing" }],
          tryIt: "Ajoutez à votre automatisation une étape d'IA qui rédige une réponse et vous l'envoie. Testez-la avec trois demandes inventées différentes et notez les erreurs.",
          youCanNow: "ajouter une étape d'IA à une automatisation avec des règles claires, sans y faire passer de données privées.",
          quickCheck: [
            { objective: "O4", q: "Quelle règle a sa place dans l'instruction d'une étape d'IA ?", options: ["« Invente un prix si tu n'es pas sûr »", "« Envoie directement au client »", "« Utilise seulement les faits donnés ; ne donne jamais de prix »", "« Ajoute le numéro de carte »"], answer: 2, why: "Des règles claires gardent les brouillons de l'IA justes et sûrs." },
            { objective: "O4", q: "Votre formulaire demande un numéro de carte. Que faites-vous pour l'étape d'IA ?", options: ["Tout envoyer à l'IA", "Demander à l'IA de le cacher", "L'enregistrer dans la réponse", "Retirer ce champ de ce que reçoit l'étape d'IA"], answer: 3, why: "Les numéros de carte et les données privées ne doivent pas passer par l'étape d'IA." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Agents et garde-fous",
          minutes: 5,
          goal: "Décider ce qu'un agent IA peut faire seul et ce qui demande votre accord.",
          text: [
            "Un agent IA reçoit un objectif et planifie et fait plusieurs étapes tout seul, comme chercher, remplir des formulaires ou utiliser vos applications. Les agents peuvent faire gagner du temps, mais ils peuvent aussi se tromper vite et à grande échelle.",
            "Les garde-fous sont les limites que vous fixez. Une règle simple : un agent peut lire, trier et rédiger seul, mais il doit obtenir votre accord avant d'envoyer quoi que ce soit à un client, de dépenser de l'argent, de supprimer quoi que ce soit, de changer des prix ou de s'inscrire à quoi que ce soit. Ne lui donnez accès qu'aux applications et aux dossiers dont il a besoin.",
            "Gardez une trace de ce que l'agent a fait (la plupart des outils ont un historique ou un journal) et commencez par de petites tâches peu risquées. Donnez-lui plus de liberté seulement après qu'il a bien fonctionné pendant un moment."
          ],
          steps: ["Listez ce que l'agent va faire.", "Marquez chaque action : autorisée seul, ou avec votre accord.", "Exigez votre accord pour les envois, les dépenses, les suppressions, les prix et les inscriptions.", "Limitez son accès aux seules applications et dossiers nécessaires.", "Consultez régulièrement son historique ou son journal."],
          words: [["Agent IA", "un outil d'IA qui fait plusieurs étapes tout seul vers un objectif."], ["Garde-fou", "une limite qui empêche une automatisation ou un agent de faire quelque chose de risqué."], ["Journal", "un registre de ce qu'une automatisation ou un agent a fait et quand."]],
          slides: [
            { title: "Ce qu'est un agent", bullets: ["Reçoit un objectif", "Planifie et fait plusieurs étapes seul", "Rapide, y compris pour se tromper"] },
            { title: "Demande votre accord", bullets: ["Envoyer aux clients", "Dépenser de l'argent ou changer les prix", "Supprimer ou s'inscrire à quelque chose"] },
            { title: "Limitez et surveillez", bullets: ["Accès seulement à ce dont il a besoin", "Consultez son historique ou son journal", "Commencez petit, augmentez la liberté lentement"] }
          ],
          tryIt: "Écrivez une liste de garde-fous pour votre automatisation : ce qu'elle peut faire seule, et les cinq choses qui demandent toujours votre accord. Ajoutez une étape d'approbation si votre outil le permet.",
          youCanNow: "fixer des garde-fous pour que les automatisations et les agents ne fassent jamais d'étapes risquées sans vous.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qu'un garde-fou dans une automatisation ?", options: ["Une limite qui empêche les actions risquées", "Un déclencheur plus rapide", "Une colonne de tableur", "Une fonction payante"], answer: 0, why: "Les garde-fous empêchent l'automatisation de faire seule des choses risquées." },
            { objective: "O5", q: "Un outil d'agent demande l'accès à tous vos dossiers et à votre banque. Que lui donnez-vous ?", options: ["Tout ce qu'il demande", "Seulement les applications et les dossiers dont il a besoin", "Votre mot de passe", "Les droits d'administrateur"], answer: 1, why: "Le moindre accès limite les dégâts si quelque chose tourne mal." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Tester, surveiller et échouer sans danger",
          minutes: 5,
          goal: "Tester votre automatisation pour trouver les problèmes et mettre en place une vérification hebdomadaire.",
          text: [
            "Les automatisations se cassent : une application change, une question de formulaire est renommée, un mot de passe expire ou l'IA donne une réponse bizarre. Testez avec des entrées inhabituelles : un champ vide, un message très long, un message dans une autre langue, un message impoli.",
            "Réglez-la pour qu'elle échoue sans danger : si quelque chose ne va pas, l'automatisation doit s'arrêter et vous prévenir, pas envoyer un message à moitié fini. La plupart des outils peuvent vous envoyer un e-mail quand une exécution échoue ; activez cette option.",
            "Une fois par semaine, regardez le journal : combien d'exécutions, combien d'échecs, et deux ou trois brouillons de l'IA. Comptez les minutes gagnées. Si elle vous donne plus de travail qu'elle ne vous en épargne, changez-la ou désactivez-la."
          ],
          steps: ["Testez avec un champ vide, un message très long et un message inhabituel.", "Activez les alertes d'échec.", "Assurez-vous qu'un échec arrête l'exécution au lieu d'envoyer quelque chose.", "Chaque semaine, vérifiez les exécutions, les échecs et quelques brouillons de l'IA.", "Gardez, changez ou désactivez selon le temps gagné."],
          words: [["Échouer sans danger", "quand quelque chose ne va pas, s'arrêter et prévenir une personne au lieu de faire quelque chose de nuisible."], ["Exécution", "une fois où l'automatisation démarre et déroule ses étapes."]],
          slides: [
            { title: "Les automatisations se cassent", bullets: ["Les applications changent", "Les questions de formulaire sont renommées", "L'IA donne des réponses bizarres"] },
            { title: "Testez des entrées inhabituelles", bullets: ["Champ vide", "Message très long", "Autre langue ou message impoli"] },
            { title: "Échouer sans danger", bullets: ["S'arrêter et vous prévenir", "Jamais de message à moitié fini", "Activez les e-mails d'échec"] },
            { title: "Vérification hebdomadaire", bullets: ["Exécutions et échecs dans le journal", "Lisez quelques brouillons de l'IA", "Comptez les minutes gagnées"] }
          ],
          tryIt: "Tâche finale : testez votre automatisation avec trois entrées inhabituelles, activez les alertes d'échec, et rédigez votre fiche d'une page : description, déclencheur et actions, instruction à l'IA, étape d'approbation, résultats de test et vérification hebdomadaire.",
          youCanNow: "créer, protéger, tester et surveiller une automatisation par l'IA pour votre entreprise.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qu'un test avec des entrées inhabituelles ?", options: ["Tester seulement le week-end", "Tester avec votre meilleur client", "Tester avec des données inhabituelles, comme un champ vide", "Tester avec de vrais numéros de carte"], answer: 2, why: "Les entrées inhabituelles montrent comment l'automatisation gère les problèmes." },
            { objective: "O6", q: "Votre vérification hebdomadaire montre cinq exécutions en échec. Que faites-vous ?", options: ["Les ignorer", "Désactiver les alertes d'échec", "Donner plus d'accès à l'automatisation", "Trouver la cause, la corriger et tester de nouveau"], answer: 3, why: "La surveillance sert à repérer et corriger les échecs." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Ajouter l'IA et garder le contrôle",
        questions: [
          { objective: "O4", q: "Où doit aller le brouillon de réponse de l'IA dans votre première automatisation ?", options: ["À vous pour relecture", "Directement au client", "Sur les réseaux sociaux", "Nulle part"], answer: 0, why: "Vous relisez les brouillons avant que les clients les voient." },
          { objective: "O4", q: "Quelle information ne doit PAS passer par l'étape d'IA ?", options: ["Votre liste de services", "Le texte de la demande", "Vos horaires d'ouverture", "Le numéro de carte d'un client"], answer: 3, why: "Les numéros de carte et les informations du même genre ne doivent jamais être envoyés aux outils d'IA." },
          { objective: "O5", q: "Quelle action doit toujours demander votre accord ?", options: ["Lire un e-mail", "Dépenser de l'argent", "Trier une demande", "Vous rédiger une réponse"], answer: 1, why: "Dépenser de l'argent est une action à haut risque." },
          { objective: "O6", q: "Que veut dire « échouer sans danger » ?", options: ["S'arrêter et prévenir une personne quand quelque chose ne va pas", "Continuer quoi qu'il arrive", "Supprimer les données", "Envoyer un e-mail à tous les clients"], answer: 0, why: "S'arrêter évite des actions nuisibles à moitié finies." },
          { objective: "O6", q: "Votre automatisation vous donne plus de corrections qu'elle ne fait gagner de temps. Que faites-vous ?", options: ["Vous l'ignorez", "Vous ajoutez d'autres étapes d'IA", "Vous la changez ou la désactivez", "Vous lui donnez plus d'accès"], answer: 2, why: "Les automatisations doivent faire gagner du temps, pas en coûter." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Automatisation par l'IA et processus agentiques",
    questions: [
      { objective: "O1", q: "L'automatisation, c'est :", options: ["Embaucher plus de monde", "Un ordinateur fait une tâche répétée quand un événement se produit", "Écrire chaque e-mail à la main", "Éteindre votre ordinateur"], answer: 1, why: "C'est l'idée de base." },
      { objective: "O1", q: "La première étape avant d'automatiser est de :", options: ["Supprimer les anciennes données", "Acheter l'outil le plus cher", "Donner un accès complet à un agent", "Décrire le processus en étapes"], answer: 3, why: "On ne peut automatiser que ce qu'on comprend." },
      { objective: "O1", q: "Un processus, c'est :", options: ["Un mot de passe", "Un type de tableur", "Un paiement", "Les étapes par lesquelles passe un travail du début à la fin"], answer: 3, why: "C'est la définition." },
      { objective: "O1", q: "Quelle étape est la plus facile à automatiser ?", options: ["Décider d'embaucher quelqu'un", "Copier les réponses d'un formulaire dans un tableur", "Signer un bail", "Choisir un nom d'entreprise"], answer: 1, why: "La copie est répétitive et suit des règles." },
      { objective: "O2", q: "Le déclencheur, c'est :", options: ["Le modèle d'IA", "La dernière étape", "L'événement qui lance l'automatisation", "Le prix"], answer: 2, why: "Les déclencheurs lancent les automatisations." },
      { objective: "O2", q: "Laquelle est une action ?", options: ["Ajouter une ligne dans un tableur", "Une nouvelle réponse au formulaire", "Une nouvelle commande payée", "Un nouvel e-mail arrive"], answer: 0, why: "Les autres sont des déclencheurs." },
      { objective: "O3", q: "Zapier, Make et Microsoft Power Automate sont :", options: ["Des réseaux sociaux", "Des banques", "Des outils d'automatisation sans code", "Des imprimantes"], answer: 2, why: "Ils relient les applications avec des déclencheurs et des actions." },
      { objective: "O3", q: "Où vérifier les limites de l'offre gratuite d'un outil sans code ?", options: ["Sur sa propre page de tarifs", "En devinant", "Dans une vieille vidéo", "Auprès d'un client"], answer: 0, why: "Les offres et les limites changent." },
      { objective: "O3", q: "Avant d'activer une automatisation, vous devez :", options: ["L'envoyer à tous les clients", "La tester avec des données inventées", "Sauter les tests", "Retirer les notifications"], answer: 1, why: "Tester repère les erreurs sans risque." },
      { objective: "O4", q: "Une action d'IA dans une automatisation peut :", options: ["S'approuver elle-même", "Signer des contrats", "Payer vos impôts", "Classer une demande ou rédiger une réponse"], answer: 3, why: "Lire, trier et rédiger sont de bons usages de l'IA." },
      { objective: "O4", q: "Une bonne instruction à l'IA contient :", options: ["Des règles comme « Utilise seulement les faits donnés ; ne donne jamais de prix »", "« Fais ce que tu veux »", "Votre mot de passe", "Les numéros de carte des clients"], answer: 0, why: "Les règles réduisent les erreurs." },
      { objective: "O4", q: "Pourquoi vérifier les conditions de données d'un outil d'automatisation ?", options: ["Ce n'est pas nécessaire", "Pour changer votre logo", "Pour avoir une remise", "Pour savoir comment les informations de clients que vous envoyez sont conservées et utilisées"], answer: 3, why: "Les données des clients passent par ces outils." },
      { objective: "O5", q: "Un agent IA, c'est :", options: ["Un tableur", "Un commercial humain", "Un outil d'IA qui fait plusieurs étapes tout seul vers un objectif", "Un livreur"], answer: 2, why: "Les agents planifient et agissent seuls." },
      { objective: "O5", q: "Un garde-fou, c'est :", options: ["Un type de déclencheur", "Une limite qui empêche les actions risquées", "Une connexion Internet rapide", "Une nouvelle application"], answer: 1, why: "Les garde-fous vous gardent aux commandes." },
      { objective: "O5", q: "Un agent doit obtenir votre accord avant de :", options: ["Vous rédiger une note", "Lire un e-mail", "Trier une liste", "Envoyer quoi que ce soit à un client"], answer: 3, why: "Envoyer aux clients est à haut risque." },
      { objective: "O5", q: "Quel accès un agent doit-il avoir ?", options: ["Vos identifiants bancaires", "Tout ce que vous possédez", "Seulement les applications et dossiers dont il a besoin", "Tous les dossiers clients"], answer: 2, why: "Un accès limité limite les dégâts en cas d'erreur." },
      { objective: "O5", q: "Quand vous donnez plus de liberté à un agent, vous devez :", options: ["Commencer petit et augmenter la liberté après qu'il a bien fonctionné", "Donner toute liberté dès le premier jour", "Ne jamais consulter son journal", "Désactiver les alertes"], answer: 0, why: "La confiance se gagne avec un historique." },
      { objective: "O6", q: "Lequel est un bon test d'entrée inhabituelle ?", options: ["Seulement des messages parfaits", "Un message avec un champ vide", "Aucun test", "Le numéro de carte d'un vrai client"], answer: 1, why: "Les entrées inhabituelles révèlent les points faibles." },
      { objective: "O6", q: "Si une exécution d'automatisation échoue, elle doit :", options: ["Envoyer un message à moitié fini", "S'arrêter et vous prévenir", "Supprimer votre tableur", "Réessayer sans fin en silence"], answer: 1, why: "C'est échouer sans danger." },
      { objective: "O6", q: "Dans votre vérification hebdomadaire, vous regardez :", options: ["Les exécutions, les échecs, quelques brouillons de l'IA et les minutes gagnées", "Seulement le logo de l'outil", "Rien", "Les mots de passe des concurrents"], answer: 0, why: "Cela montre si l'automatisation fonctionne toujours et vaut la peine." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      1,
      4,
      6,
      8,
      9,
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
        name: "Description du processus",
        objective: "O1",
        notYet: "Des étapes manquent ou ne sont pas marquées.",
        meets: "Chaque étape du début à la fin, marquée copie, décision ou écriture.",
        exceeds: "Note combien de temps prend chaque étape à la main aujourd'hui."
      },
      {
        name: "Déclencheur et actions",
        objective: "O2",
        notYet: "Le déclencheur ou les actions ne sont pas clairs.",
        meets: "Un déclencheur clair et une liste d'actions, avec l'étape d'IA et l'approbation marquées.",
        exceeds: "La correspondance des champs est écrite pour chaque information."
      },
      {
        name: "Automatisation qui fonctionne",
        objective: "O3",
        notYet: "Elle ne marche pas, ou a été testée avec de vraies données de clients.",
        meets: "Le passage du formulaire au tableur et la notification fonctionnent, testés avec des données inventées.",
        exceeds: "Note les limites de l'offre gratuite vérifiées sur la page des tarifs de l'outil."
      },
      {
        name: "Étape d'IA et garde-fous",
        objective: "O5",
        notYet: "L'IA peut envoyer aux clients ou agir sur des étapes risquées sans approbation.",
        meets: "Les brouillons de l'IA vont à l'entrepreneur pour approbation ; une liste de garde-fous avec cinq points à approuver.",
        exceeds: "L'instruction de l'IA a des règles claires et les champs privés restent hors de l'étape d'IA."
      },
      {
        name: "Tests et surveillance",
        objective: "O6",
        notYet: "Moins de trois tests, ou pas d'alerte d'échec.",
        meets: "Trois tests avec des entrées inhabituelles, des alertes d'échec activées et une vérification hebdomadaire écrite.",
        exceeds: "La vérification hebdomadaire comprend les minutes gagnées et une règle pour savoir quand l'arrêter."
      }
    ]
  },
  evaluation: {
    results: [
      "Les entrepreneurs qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les entrepreneurs dont l'automatisation fonctionne encore sans danger après 30 jours (enquête de suivi)",
      "Les minutes gagnées chaque semaine sur la copie et les réponses, selon les entrepreneurs",
      "Les apprenants qui commencent un autre cours Koach Learn pour entrepreneurs dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec un outil de formulaire, un tableur et un compte e-mail gratuits",
      "L'offre gratuite d'un outil sans code comme Zapier, Make ou Microsoft Power Automate",
      "Des données de test inventées, par exemple « Client Test »",
      "Environ 75 minutes au total pour les leçons, la création, les tests et la fiche d'une page"
    ],
    facilitatorNotes: [
      "Créez en direct une automatisation d'exemple commune avant que les apprenants créent la leur.",
      "Vérifiez les limites actuelles des offres gratuites sur la page des tarifs de chaque outil avant la séance.",
      "Ne laissez pas les apprenants connecter de comptes bancaires ni rien envoyer à de vrais clients pendant le cours.",
      "Faites échanger les listes de garde-fous entre apprenants pour repérer toute action risquée laissée sans approbation.",
      "Notez la fiche d'une page avec la grille, une ligne « Pas encore » à la fois."
    ]
  }
};
