"use strict";

// Koach Learn course (shared, bonus), French translation of "AI Project Management". Shape and rules: ../../../README.md (Translations).
// RACI is kept with French words: Responsable (réalise), Approbateur (rend des comptes), Consulté, Informé.

module.exports = {
  id: "ai-project-management-fr",
  lang: "fr",
  translationOf: "ai-project-management",
  category: "Veterans (military)",
  name: "Gestion de projet avec l'IA",
  skills: "Rédiger une charte de projet avec l'IA, Découper le travail en WBS, Construire un calendrier avec jalons, Attribuer les rôles avec une matrice RACI, Tenir un registre des risques, Rédiger des points d'avancement et un retour d'expérience",
  outcome: "utiliser un assistant d'IA pour planifier et mener un petit projet du début à la fin : une charte d'une page, un découpage du travail, un calendrier avec jalons, une matrice RACI, un registre des risques, des points d'avancement hebdomadaires et une clôture avec retour d'expérience, en vérifiant vous-même chaque brouillon de l'IA.",
  about: [
    "Les chefs de projet planifient le travail, mobilisent les personnes et tiennent tout le monde informé jusqu'à ce que le travail soit fait. Les assistants d'IA comme ChatGPT, Microsoft Copilot et Google Gemini peuvent rédiger les documents en quelques minutes, pour que vous passiez votre temps sur les décisions et les personnes.",
    "Ce cours s'adresse aux anciens militaires qui passent à des postes de projet civils (beaucoup ont déjà dirigé des missions, de la logistique et des équipes), aux participants de programmes d'insertion qui visent un poste de coordinateur ou d'assistant de projet, et à toute personne qui mène un projet au travail ou dans son quartier.",
    "Vous planifierez un projet réel ou fictif, de la charte à la clôture. Chaque leçon dure environ cinq minutes avec une tâche « Essayez maintenant ». Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours."
  ],
  finalTask: "Planifiez avec l'aide de l'IA un projet réel ou fictif de quatre à douze semaines (par exemple un forum de l'emploi de quartier, un déménagement de bureau ou le lancement d'un site web) : une charte d'une page, une structure de découpage du travail, un calendrier avec au moins quatre jalons, une matrice RACI, un registre de cinq risques, un point d'avancement hebdomadaire et un modèle de retour d'expérience. Marquez chaque endroit où vous avez corrigé l'IA.",
  chapters: [
    {
      name: "Chapitre 1 : Planifier le projet",
      lessons: [
        {
          title: "Rédiger une charte de projet avec l'IA",
          minutes: 5,
          goal: "Rédiger une charte d'une page qui définit l'objectif, le périmètre et la réussite du projet.",
          text: [
            "La charte de projet est l'acte de naissance du projet. Elle dit pourquoi le projet existe, ce qu'il livrera, ce qui est dans le périmètre et hors du périmètre, qui est le commanditaire, le budget et l'échéance approximatifs, et comment on saura qu'il a réussi. C'est comme un ordre de mission : but, état final recherché, contraintes.",
            "Donnez les faits à l'IA et laissez-la rédiger : « Rédige une charte de projet d'une page. Projet : forum de l'emploi pour anciens militaires au centre communautaire le 15 mars. Objectif : 30 employeurs, 200 participants. Budget : 3 000 $. Commanditaire : la directrice du centre. Hors périmètre : la restauration au-delà du café. »",
            "Puis corrigez-la. L'IA peut inventer des chiffres, des parties prenantes ou des objectifs. Chaque fait doit venir de vous. Faites approuver la charte par le commanditaire avant le début du travail ; cela évite plus tard les disputes sur ce que le projet était censé faire."
          ],
          steps: ["Écrivez le but, l'objectif, l'échéance, le budget et le commanditaire.", "Listez ce qui est dans le périmètre et hors du périmètre.", "Demandez à l'IA une charte d'une page.", "Corrigez tout ce que l'IA a inventé.", "Obtenez l'accord du commanditaire."],
          words: [["Charte de projet", "un court document qui autorise un projet et en fixe l'objectif, le périmètre et les limites."], ["Périmètre", "le travail que le projet fera et ne fera pas."], ["Commanditaire", "la personne qui soutient et approuve le projet."], ["Partie prenante", "toute personne concernée par le projet ou impliquée dedans."]],
          slides: [
            { title: "La charte est l'ordre de mission", bullets: ["But et objectif", "Périmètre : dedans et dehors", "Commanditaire, budget, échéance, réussite"] },
            { title: "L'IA rédige à partir de vos faits", bullets: ["Lui donner les vrais chiffres", "Demander une seule page"] },
            { title: "Corriger et faire approuver", bullets: ["Retirer les faits inventés", "Accord du commanditaire avant de commencer"] }
          ],
          tryIt: "Choisissez un projet réel ou fictif. Écrivez ses faits clés, faites rédiger une charte d'une page par l'IA, et marquez tout ce que vous avez corrigé.",
          youCanNow: "rédiger une charte de projet d'une page avec l'aide de l'IA."
        },
        {
          title: "Découper le travail et le planifier",
          minutes: 6,
          goal: "Transformer la charte en structure de découpage du travail et en calendrier avec jalons.",
          text: [
            "Une structure de découpage du travail (WBS, de l'anglais Work Breakdown Structure) divise tout le projet en morceaux plus petits, jusqu'à ce que chaque morceau soit une tâche qu'une personne peut faire en quelques jours. Pour un forum de l'emploi : lieu, employeurs, communication, bénévoles, logistique du jour J, suivi, chacun découpé en tâches.",
            "Demandez à l'IA : « À partir de cette charte, crée une WBS avec phases et tâches. Puis estime une durée pour chaque tâche et liste quelles tâches dépendent d'autres. » Les dépendances comptent : on ne peut pas imprimer les prospectus avant que le lieu et la date soient confirmés.",
            "Transformez-la en calendrier dans un tableur ou un outil gratuit, en partant de l'échéance à rebours. Marquez les jalons, les grands points de contrôle comme « lieu réservé » ou « 20 employeurs confirmés ». Comparez les estimations de durée de l'IA avec votre propre expérience ; elle a tendance à être trop optimiste."
          ],
          steps: ["Demandez à l'IA une WBS avec phases et tâches.", "Découpez toute tâche de plus de quelques jours.", "Ajoutez durées et dépendances.", "Construisez le calendrier à rebours depuis l'échéance.", "Marquez au moins quatre jalons."],
          words: [["WBS", "structure de découpage du travail : tout le projet divisé en tâches plus petites."], ["Dépendance", "une tâche qui ne peut pas commencer avant qu'une autre soit finie."], ["Jalon", "un point de contrôle clé d'un projet."]],
          slides: [
            { title: "Structure de découpage du travail", bullets: ["Projet entier, puis phases, puis tâches", "Chaque tâche : une personne, quelques jours"] },
            { title: "Durées et dépendances", bullets: ["Combien de temps prend chaque tâche", "Ce qui doit être fini avant"] },
            { title: "Calendrier et jalons", bullets: ["Partir de l'échéance à rebours", "Marquer les points de contrôle clés", "Les estimations de l'IA sont optimistes"] }
          ],
          tryIt: "Utilisez l'IA pour créer une WBS de votre projet, puis construisez dans un tableur un calendrier simple avec durées, dépendances et au moins quatre jalons.",
          youCanNow: "découper un projet en tâches et les planifier avec des jalons."
        },
        {
          title: "Attribuer les rôles avec une matrice RACI",
          minutes: 5,
          goal: "Construire une matrice RACI pour que chacun sache qui fait, qui décide et qui est informé.",
          text: [
            "La confusion sur qui fait quoi coule les projets. Une matrice RACI liste les tâches sur le côté et les personnes en haut, et marque chaque case : R pour Responsable (réalise le travail), A pour Approbateur (rend des comptes sur le résultat et valide ; un seul par tâche), C pour Consulté (donne son avis) et I pour Informé (tenu au courant).",
            "Demandez à l'IA : « Fais une matrice RACI pour ces tâches et ces rôles : [tâches], [personnes ou rôles]. » Puis vérifiez : chaque tâche a-t-elle exactement un A ? Quelqu'un est-il surchargé de R ? Quelqu'un est-il consulté sur tout, ce qui ralentit tout ?",
            "Partagez la matrice RACI avec l'équipe et le commanditaire. Quand des questions se posent, comme qui valide le prospectus, montrez la matrice."
          ],
          steps: ["Listez les tâches principales et les personnes ou rôles.", "Demandez à l'IA un brouillon de matrice RACI.", "Vérifiez que chaque tâche a exactement un A.", "Répartissez les R pour que personne ne soit surchargé.", "Partagez-la avec l'équipe et le commanditaire."],
          words: [["Matrice RACI", "un tableau qui montre, pour chaque tâche, qui est Responsable, Approbateur, Consulté et Informé."], ["Approbateur", "la seule personne qui rend des comptes sur le résultat et le valide."]],
          slides: [
            { title: "RACI", bullets: ["R : Responsable, réalise le travail", "A : Approbateur, rend des comptes ; un seul", "C : Consulté ; I : Informé"] },
            { title: "Vérifier la matrice", bullets: ["Exactement un A par tâche", "Personne surchargé de R", "Pas tout le monde consulté sur tout"] },
            { title: "S'en servir", bullets: ["La partager avec l'équipe et le commanditaire", "La montrer quand des questions se posent"] }
          ],
          tryIt: "Faites rédiger par l'IA une matrice RACI pour les tâches principales de votre projet. Corrigez-la pour que chaque tâche ait exactement un A et que le travail soit équilibré.",
          youCanNow: "construire et vérifier une matrice RACI qui clarifie les rôles."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Planifier le projet",
        questions: [
          { q: "Que définit une charte de projet ?", options: ["Seulement la commande de repas de l'équipe", "La déclaration d'impôts de l'entreprise", "Le but, le périmètre, le commanditaire, le budget, l'échéance et la réussite du projet", "Chaque tâche en détail"], answer: 2, why: "La charte pose les fondations du projet." },
          { q: "L'IA ajoute à votre charte un objectif de « 100 employeurs », mais vous avez dit 30. Que faites-vous ?", options: ["Corriger avec votre vrai objectif", "Le garder", "Faire la moyenne", "Supprimer la charte"], answer: 0, why: "Chaque fait de la charte doit venir de vous." },
          { q: "Une dépendance est :", options: ["Un membre de l'équipe", "Une ligne du budget", "Un jalon", "Une tâche qui ne peut pas commencer avant qu'une autre soit finie"], answer: 3, why: "Les dépendances fixent l'ordre du travail." },
          { q: "Combien de personnes doivent être Approbateur (A) pour une tâche dans une matrice RACI ?", options: ["Tout le monde", "Exactement une", "Aucune", "Au moins cinq"], answer: 1, why: "Un seul responsable du résultat évite la confusion." },
          { q: "L'IA estime que réserver un lieu prend une heure. D'après ce cours, vous devez :", options: ["L'accepter", "La comparer à votre expérience ; les estimations de l'IA sont optimistes", "La mettre à zéro", "Sauter la planification"], answer: 1, why: "Utilisez votre propre jugement sur les durées." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Mener et clôturer le projet",
      lessons: [
        {
          title: "Tenir un registre des risques",
          minutes: 5,
          goal: "Identifier, évaluer et prévoir des réponses aux risques du projet avec l'aide de l'IA.",
          text: [
            "Un risque est quelque chose qui pourrait arriver et toucherait le projet. Un registre des risques liste chaque risque, sa probabilité, la gravité de son impact, le plan de réponse et un responsable qui le surveille.",
            "Demandez à l'IA : « Liste dix risques pour ce projet [collez la charte], note la probabilité et l'impact (faible, moyen ou élevé), et propose une réponse pour chacun. » Réponses possibles : l'éviter, le réduire, le transférer (par exemple par une assurance ou un contrat) ou l'accepter avec un plan de secours.",
            "Ne gardez que les risques réels pour votre projet, ajoutez ceux que l'IA a oubliés, et revoyez le registre chaque semaine. Les planificateurs militaires parlent d'envisager les variantes et les suites ; les civils parlent de gestion des risques."
          ],
          steps: ["Demandez à l'IA de lister des risques à partir de votre charte.", "Évaluez la probabilité et l'impact.", "Choisissez une réponse : éviter, réduire, transférer ou accepter.", "Donnez un responsable à chaque risque.", "Revoyez le registre chaque semaine."],
          words: [["Risque", "quelque chose qui pourrait arriver et toucher le projet."], ["Registre des risques", "une liste des risques avec leurs notes, leurs réponses et leurs responsables."], ["Atténuation", "les mesures qui réduisent la probabilité ou l'impact d'un risque."]],
          slides: [
            { title: "Colonnes du registre des risques", bullets: ["Risque, probabilité, impact", "Réponse et responsable"] },
            { title: "Quatre réponses", bullets: ["Éviter ou réduire", "Transférer (assurance, contrat)", "Accepter avec un plan de secours"] },
            { title: "Rester réaliste", bullets: ["Retirer les risques qui ne s'appliquent pas", "Ajouter ce que l'IA a oublié", "Revoir chaque semaine"] }
          ],
          tryIt: "Faites lister par l'IA des risques pour votre projet. Gardez les cinq plus réels, notez-les, choisissez des réponses et attribuez des responsables.",
          youCanNow: "construire et tenir à jour un registre des risques avec l'aide de l'IA."
        },
        {
          title: "Rédiger des points d'avancement que les gens lisent",
          minutes: 5,
          goal: "Rédiger un court point d'avancement hebdomadaire avec un statut clair rouge, orange ou vert.",
          text: [
            "Un point d'avancement tient le commanditaire et l'équipe informés. Limitez-le à une demi-page : statut général (vert dans les temps, orange à risque, rouge en retard), ce qui a été fait cette semaine, la suite, les risques et problèmes, et les décisions attendues du commanditaire.",
            "Collez vos mises à jour du calendrier et vos notes dans l'IA et demandez : « Rédige un point d'avancement hebdomadaire d'une demi-page avec une couleur de statut général, les réalisations, les prochaines étapes, les risques et problèmes, et les décisions nécessaires. Sois direct. »",
            "Soyez honnête sur l'orange et le rouge. Une mauvaise nouvelle annoncée tôt est un cadeau : elle donne au commanditaire le temps d'aider. Cacher les problèmes jusqu'à l'échéance est le moyen le plus rapide de perdre la confiance. Vérifiez chaque date et chaque chiffre écrits par l'IA."
          ],
          steps: ["Mettez à jour le calendrier et le registre des risques.", "Collez notes et mises à jour dans l'IA.", "Demandez un point d'une demi-page avec une couleur de statut.", "Vérifiez chaque date et chaque chiffre.", "Envoyez-le le même jour chaque semaine."],
          words: [["Point d'avancement", "une mise à jour régulière sur les progrès, les risques et les besoins d'un projet."], ["Problème", "une difficulté qui se produit maintenant, contrairement à un risque qui pourrait arriver."], ["Statut RAG", "rouge, orange (amber) ou vert : un signal rapide de la santé du projet."]],
          slides: [
            { title: "Une demi-page", bullets: ["Couleur de statut : vert, orange, rouge", "Fait cette semaine et prochaines étapes", "Risques, problèmes, décisions nécessaires"] },
            { title: "L'IA rédige à partir de vos notes", bullets: ["Coller les mises à jour du calendrier", "Demander un langage direct", "Vérifier dates et chiffres"] },
            { title: "Les mauvaises nouvelles tôt", bullets: ["Donnent au commanditaire le temps d'aider", "Cacher les problèmes fait perdre la confiance"] }
          ],
          tryIt: "Rédigez avec l'aide de l'IA un point d'avancement hebdomadaire pour votre projet (semaine 3, réelle ou imaginée). Incluez une couleur de statut honnête et au moins une décision attendue.",
          youCanNow: "rédiger avec l'aide de l'IA un point d'avancement hebdomadaire clair et honnête."
        },
        {
          title: "Clôturer le projet et tirer les leçons",
          minutes: 5,
          goal: "Clôturer proprement un projet et mener un retour d'expérience.",
          text: [
            "Beaucoup de projets s'éteignent tout seuls. Une vraie clôture confirme que les objectifs ont été atteints (en comparant à la charte), transmet ce qui continue, règle les dernières factures, remercie l'équipe et range les fichiers là où d'autres pourront les trouver.",
            "Un retour d'expérience, comme un débriefing après action, demande : qu'avions-nous prévu, que s'est-il passé, pourquoi, et que faire autrement la prochaine fois ? Recueillez l'avis de tout le monde, y compris sur ce qui a bien marché.",
            "L'IA peut classer les avis : « Regroupe ces commentaires de retour d'expérience par thèmes et écris trois recommandations pour les futurs projets. » Restez sans reproches, concentrez-vous sur la méthode, et vérifiez que la synthèse est juste. Si vous voulez progresser en gestion de projet, le Project Management Institute (PMI) propose des certifications comme CAPM, PMP et PMI-CPMAI, centrée sur l'IA ; consultez pmi.org pour les conditions et tarifs actuels."
          ],
          steps: ["Comparez les résultats aux objectifs de la charte.", "Transmettez le travail qui continue et réglez les dernières factures.", "Menez un retour d'expérience sans reproches.", "Utilisez l'IA pour regrouper les commentaires et rédiger des recommandations.", "Rangez tous les fichiers et remerciez l'équipe."],
          words: [["Clôture", "la fin officielle d'un projet."], ["Retour d'expérience", "ce qu'une équipe a appris et qui doit changer la façon de mener les futurs projets."], ["Débriefing après action", "un regard structuré en arrière : prévu, arrivé, pourquoi, quoi changer."]],
          slides: [
            { title: "Bien clôturer", bullets: ["Comparer les résultats à la charte", "Transmettre, payer, ranger les fichiers", "Remercier l'équipe"] },
            { title: "Retour d'expérience", bullets: ["Prévu, arrivé, pourquoi, quoi changer", "Ce qui a bien marché aussi", "Sans reproches"] },
            { title: "Faire progresser sa carrière", bullets: ["Certifications PMI : CAPM, PMP, PMI-CPMAI", "Voir pmi.org pour les règles et tarifs actuels"] }
          ],
          sources: [{ name: "Project Management Institute : certifications", url: "https://www.pmi.org/certifications" }],
          tryIt: "Tâche finale : terminez votre plan de projet avec la charte, la WBS, le calendrier avec jalons, la matrice RACI, le registre des risques et un point d'avancement, puis rédigez un modèle de retour d'expérience avec les quatre questions. Marquez chaque endroit où vous avez corrigé l'IA.",
          youCanNow: "planifier, mener et clôturer un projet en laissant l'IA rédiger les documents pendant que vous prenez les décisions."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Mener et clôturer le projet",
        questions: [
          { q: "Quelle est la différence entre un risque et un problème ?", options: ["Il n'y a aucune différence", "Les problèmes sont toujours bons", "Les risques ne concernent que l'argent", "Un risque pourrait arriver ; un problème se produit maintenant"], answer: 3, why: "Les risques sont possibles ; les problèmes sont actuels." },
          { q: "Souscrire une assurance contre une perte possible est quelle réponse au risque ?", options: ["Transférer", "Éviter", "Accepter", "Ignorer"], answer: 0, why: "L'assurance transfère l'impact à quelqu'un d'autre." },
          { q: "Votre projet risque de manquer un jalon. Quel statut votre point doit-il afficher ?", options: ["Vert, pour ne pas inquiéter", "Aucun statut", "Orange ou rouge, honnêtement", "Violet"], answer: 2, why: "Une mauvaise nouvelle annoncée tôt permet au commanditaire d'aider." },
          { q: "Un retour d'expérience doit être :", options: ["Une recherche de quelqu'un à licencier", "Sauté", "Seulement sur ce qui a mal tourné", "Sans reproches et centré sur la méthode"], answer: 3, why: "Un retour sans reproches obtient des avis honnêtes." },
          { q: "Où vérifier les conditions et tarifs actuels des certifications PMI ?", options: ["Sur un forum au hasard", "Dans une supposition de l'IA", "Sur pmi.org", "Sur un prospectus"], answer: 2, why: "Les conditions officielles changent ; vérifiez à la source." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Gestion de projet avec l'IA",
    questions: [
      { q: "Le rôle principal d'un chef de projet est de :", options: ["Faire seul chaque tâche", "Planifier le travail, mobiliser les personnes et tenir tout le monde informé", "Seulement approuver les budgets", "Écrire du code"], answer: 1, why: "Les chefs de projet planifient, coordonnent et communiquent." },
      { q: "Dans ce cours, le rôle de l'IA est de :", options: ["Rédiger les documents pendant que vous décidez", "Prendre toutes les décisions", "Remplacer le commanditaire", "Approuver le budget"], answer: 0, why: "L'IA rédige ; le chef de projet décide." },
      { q: "Une charte ressemble le plus à quel document militaire ?", options: ["Un formulaire de permission", "Une liste de contrôle de l'uniforme", "Un ordre de mission", "Une fiche de solde"], answer: 2, why: "Les deux donnent le but, l'état final et les contraintes." },
      { q: "« La restauration au-delà du café » notée hors périmètre veut dire :", options: ["Le projet ne la fournira pas", "C'est l'objectif principal", "C'est un risque", "C'est un jalon"], answer: 0, why: "Le travail hors périmètre ne fait pas partie du projet." },
      { q: "Qui doit approuver la charte avant le début du travail ?", options: ["Personne", "Seulement l'IA", "Un employé au hasard", "Le commanditaire"], answer: 3, why: "L'accord du commanditaire évite les litiges plus tard." },
      { q: "Une WBS découpe le projet en :", options: ["Seulement des lignes de budget", "Tâches plus petites qu'une personne peut faire en quelques jours", "Photos d'équipe", "Pièces du bureau"], answer: 1, why: "Les petites tâches sont plus faciles à planifier et à suivre." },
      { q: "On ne peut pas imprimer les prospectus avant que le lieu soit confirmé. C'est :", options: ["Un jalon", "Une dépendance", "Un commanditaire", "Une réponse au risque"], answer: 1, why: "Une tâche dépend de la fin d'une autre." },
      { q: "« 20 employeurs confirmés » est un bon exemple :", options: ["De durée de tâche", "De rôle RACI", "De couleur de statut", "De jalon"], answer: 3, why: "Les jalons sont des points de contrôle clés." },
      { q: "Le mieux est souvent de construire un calendrier :", options: ["À rebours depuis l'échéance", "Au hasard", "En commençant seulement par la dernière tâche", "Sans dates"], answer: 0, why: "Partir de l'échéance montre ce qui doit commencer et quand." },
      { q: "Dans RACI, « R » veut dire :", options: ["Retraité", "Relecteur seulement", "Responsable : réalise le travail", "Refusé"], answer: 2, why: "R est la personne qui fait le travail." },
      { q: "Dans RACI, « I » veut dire :", options: ["Initiateur", "Inspecteur", "Ignoré", "Informé : tenu au courant"], answer: 3, why: "Les personnes informées reçoivent les mises à jour." },
      { q: "Une matrice RACI montre une personne avec un R sur 15 tâches. Vous devez :", options: ["Lui ajouter encore des R", "Supprimer la matrice", "Rééquilibrer le travail", "L'ignorer"], answer: 2, why: "Les personnes surchargées ralentissent le projet." },
      { q: "Un registre des risques contient :", options: ["Seulement le budget", "Risque, probabilité, impact, réponse et responsable", "Les anniversaires de l'équipe", "Les avis des clients"], answer: 1, why: "Ces colonnes rendent les risques gérables." },
      { q: "Changer le plan pour qu'un risque ne puisse pas arriver est quelle réponse ?", options: ["Éviter", "Transférer", "Accepter", "Signaler"], answer: 0, why: "Éviter supprime le risque." },
      { q: "À quelle fréquence revoir le registre des risques ?", options: ["Jamais", "Une fois à la fin", "Chaque semaine", "Tous les dix ans"], answer: 2, why: "Les risques changent à mesure que le projet avance." },
      { q: "Un point d'avancement doit faire environ :", options: ["Une demi-page", "Cinquante pages", "Un mot", "Le plus long possible"], answer: 0, why: "Les points courts sont lus." },
      { q: "Le statut vert veut dire :", options: ["En retard", "Annulé", "Inconnu", "Dans les temps"], answer: 3, why: "Le vert signale que le projet est dans les temps." },
      { q: "Avant d'envoyer un point d'avancement écrit par l'IA, vous devez :", options: ["Ajouter plus de couleurs", "Vérifier chaque date et chaque chiffre", "Retirer la partie décisions", "L'envoyer sans le lire"], answer: 1, why: "L'IA peut se tromper sur les détails." },
      { q: "Un retour d'expérience demande :", options: ["Qui blâmer", "Ce qu'on avait prévu, ce qui s'est passé, pourquoi, et quoi changer", "Comment cacher les erreurs", "Rien"], answer: 1, why: "Il reprend le modèle du débriefing après action." },
      { q: "Une vraie clôture comprend :", options: ["Partir sans rien dire", "Supprimer tous les documents", "Lancer un nouveau projet sans bilan", "Comparer les résultats à la charte et ranger les fichiers"], answer: 3, why: "Bien clôturer préserve la valeur et les leçons." }
    ]
  }
};
