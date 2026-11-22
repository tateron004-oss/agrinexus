"use strict";

// Koach Learn course, French translation of leadership/lead-agentic-transformation.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").

module.exports = {
  id: "lead-agentic-transformation-fr",
  lang: "fr",
  translationOf: "lead-agentic-transformation",
  category: "Leadership Development",
  name: "Diriger à l'ère de l'IA agentique 3 : IA agentique, automatisation et conduite de la transformation",
  skills: "Choisir un processus à automatiser, Fixer le niveau d'autonomie d'un agent, Mesurer la situation de départ et la valeur, Tenir un registre des risques, Accompagner les personnes dans le changement, Rédiger un plan de projet pilote sur 90 jours",
  outcome: "choisir un processus de travail que des agents IA pourraient améliorer et rédiger pour lui un plan de projet pilote sur 90 jours, avec la carte du processus, le niveau d'autonomie et les approbations de l'agent, la situation de départ et les mesures de réussite, un registre des risques, un plan pour les personnes et la formation, et une règle de décision pour le passage à plus grande échelle.",
  about: [
    "Ce cours s'adresse aux responsables qui décideront si et comment des agents IA entrent dans leur organisation : managers, directeurs, dirigeants, et responsables d'associations et du secteur public. Il termine la série Diriger à l'ère de l'IA agentique.",
    "Le chapitre 1 porte sur le travail : trouver un processus qui vaut la peine d'être automatisé, décider ce qu'un agent peut faire seul, et mesurer honnêtement la valeur et les risques. Le chapitre 2 porte sur les personnes : conduire le changement, mettre en place une gouvernance simple, et rédiger un plan de projet pilote sur 90 jours que vous pourriez présenter à votre conseil d'administration, au propriétaire ou à votre équipe de direction.",
    "Aucun code n'est nécessaire. Vous utiliserez un assistant IA gratuit pour vous aider à rédiger, et votre propre jugement pour décider. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Rédigez un plan de projet pilote de deux pages sur 90 jours pour un agent IA dans votre organisation. Incluez : la carte du processus (étapes et temps actuels), le travail de l'agent et son niveau d'autonomie, chaque point d'approbation humaine et la personne responsable, la situation de départ et les mesures de réussite, un registre des risques d'au moins cinq risques, un plan pour les personnes (qui est concerné, comment vous communiquerez et formerez), et une règle de décision pour le jour 90. Présentez-le en cinq minutes à un collègue et notez ses deux questions les plus difficiles.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des responsables qui vont décider si et comment des agents IA entrent dans leur organisation : managers, directeurs, dirigeants, et responsables d'associations et du secteur public qui terminent la série Diriger à l'ère de l'IA agentique.",
    startingPoint: "Ils savent expliquer l'IA générative et agentique, utilisent l'IA dans leur propre travail de responsable et ont un guide d'usage de l'IA pour leur équipe. Ils n'ont jamais planifié ni conduit un projet pilote d'agent IA.",
    gap: "Les projets d'agents échouent souvent parce que les responsables automatisent le mauvais processus, donnent trop d'autonomie aux agents, sautent la situation de départ ou oublient les personnes concernées. Les responsables ont besoin d'un plan pilote clair et honnête, avec des approbations, des mesures, des risques, un plan pour les personnes et une règle d'arrêt avant toute mise en service.",
    constraints: [
      "Aucune programmation nécessaire ; des mots simples pour des responsables non techniciens",
      "Appareils : un ordinateur avec un assistant IA gratuit pour rédiger",
      "Les lois et les règles varient selon le secteur et le lieu : les apprenants vérifient auprès d'un conseiller qualifié",
      "Aucune donnée personnelle ou confidentielle dans les outils d'IA pendant la rédaction du plan",
      "Temps : des leçons courtes, le plan final demandant plus de temps"
    ],
    prerequisites: "Les cours 1 et 2 de Diriger à l'ère de l'IA agentique."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de cinq processus de votre domaine", action: "cartographier un processus et l'évaluer comme premier candidat pour un agent IA", standard: "avec les cinq critères : volume, étapes claires, entrées numériques, difficulté actuelle et faible risque de dommage" },
    { id: "O2", condition: "Pour le processus de votre pilote", action: "choisir le niveau d'autonomie de départ de l'agent, lister chaque point d'approbation humaine et nommer le responsable de l'agent", standard: "avec une approbation avant que l'agent dépense de l'argent ou parle à des clients" },
    { id: "O3", condition: "Avant le début du pilote", action: "fixer une situation de départ, trois à cinq mesures de réussite et un registre des risques", standard: "avec des mesures de qualité et au moins cinq risques, chacun avec une protection et un responsable" },
    { id: "O4", condition: "Pour les personnes concernées par votre pilote", action: "planifier comment vous allez communiquer avec elles, les impliquer et les former", standard: "en disant honnêtement ce qui changera et ce qui ne changera pas, et comment faire part d'une inquiétude" },
    { id: "O5", condition: "Pour votre équipe ou votre organisation", action: "mettre en place une gouvernance légère de l'IA avec un inventaire, un responsable par agent et un groupe de revue", standard: "avec au moins trois lignes dans l'inventaire et une personne capable de mettre chaque agent en pause" },
    { id: "O6", condition: "À partir des éléments ci-dessus", action: "rédiger et présenter un plan pilote de 90 jours en deux pages avec une règle de décision « on continue ou on arrête »", standard: "avec la règle écrite avant le début du pilote et deux questions difficiles notées" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Les agents dans le travail",
      lessons: [
        {
          objectives: ["O1"],
          title: "Trouver un processus qui vaut la peine d'être automatisé",
          minutes: 6,
          goal: "Cartographier un processus et évaluer s'il est un bon premier candidat pour un agent.",
          text: [
            "Ne partez pas de la technologie ; partez du travail. Un bon premier processus est fréquent, suit des étapes claires, utilise des informations déjà numériques, est pénible ou lent pour les personnes, et comporte des erreurs que l'on peut repérer avant qu'elles ne causent du tort. Exemples : trier les demandes entrantes, préparer les rapports hebdomadaires, planifier des rendez-vous, rédiger les premiers jets de réponses courantes.",
            "Cartographiez-le avant de l'automatiser. Écrivez chaque étape, qui la fait, l'outil utilisé et le temps qu'elle prend. La cartographie montre souvent du gaspillage que l'on peut supprimer sans aucune IA. Automatiser un processus défaillant ne fait que le faire échouer plus vite.",
            "Notez chaque candidat de 1 à 5 sur : le volume, la clarté des étapes, les entrées numériques, la pénibilité pour le personnel, et le faible risque en cas d'erreur. Choisissez le meilleur total pour votre premier pilote, pas l'idée la plus excitante. Évitez les premiers pilotes qui prennent des décisions sur des personnes, de l'argent ou la sécurité."
          ],
          steps: ["Listez cinq processus candidats.", "Cartographiez les deux meilleurs : étapes, qui, outil, temps.", "Supprimez d'abord le gaspillage évident.", "Notez chacun de 1 à 5 sur volume, étapes claires, entrées numériques, pénibilité, faible risque.", "Choisissez le meilleur score qui évite les décisions sur des personnes, de l'argent ou la sécurité."],
          words: [["Carte du processus", "une représentation étape par étape de la façon dont un travail se fait aujourd'hui."], ["Projet pilote", "un petit essai limité dans le temps avant un déploiement plus large."]],
          slides: [
            { title: "Partir du travail", bullets: ["Fréquent, étapes claires, entrées numériques", "Lent ou pénible pour les personnes", "Erreurs repérables avant tout tort"] },
            { title: "Cartographier avant d'automatiser", bullets: ["Étapes, qui, outil, temps", "Supprimez d'abord le gaspillage", "Processus défaillant + IA = échec plus rapide"] },
            { title: "Noter les candidats", bullets: ["Volume, étapes claires, entrées numériques, pénibilité, faible risque", "Le meilleur score, pas le plus excitant", "Pas de décisions sur personnes, argent, sécurité"] }
          ],
          tryIt: "Listez cinq processus de votre domaine. Cartographiez les deux premiers, notez-les sur les cinq critères, et choisissez votre processus pilote.",
          youCanNow: "cartographier un processus et choisir un premier candidat raisonnable pour un agent IA.",
          quickCheck: [
            { objective: "O1", q: "Que montre une carte de processus ?", options: ["Chaque étape, qui la fait, l'outil utilisé et le temps qu'elle prend", "Le plan des bureaux", "Seulement le résultat final", "Quels employés remplacer"], answer: 0, why: "Une carte montre comment le travail se fait vraiment, ce qui révèle où un agent pourrait aider." },
            { objective: "O1", q: "Un processus est rare, flou et dommageable en cas d'erreur. Comment l'évalueriez-vous comme premier pilote ?", options: ["Un très bon premier pilote, parce qu'il est difficile", "Un mauvais premier candidat ; choisissez un processus fréquent, clair et à faible risque", "L'automatiser entièrement tout de suite", "L'évaluer plus tard, une fois l'agent construit"], answer: 1, why: "Les premiers pilotes doivent être fréquents, clairs et peu dommageables en cas d'erreur." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Que peut faire l'agent ? Autonomie et approbations",
          minutes: 5,
          goal: "Fixer le niveau d'autonomie d'un agent et nommer les approbations humaines.",
          text: [
            "Pensez l'autonomie par niveaux. Niveau 1, suggérer : l'agent rédige, une personne fait tout. Niveau 2, préparer : l'agent prépare l'action (un formulaire rempli, un e-mail prêt) et une personne approuve chacune. Niveau 3, agir avec contrôles : l'agent agit sur les cas courants et envoie les exceptions à une personne, qui relit aussi un échantillon. Niveau 4, agir seul : rare, seulement pour des tâches à faible risque et réversibles.",
            "Commencez les pilotes au niveau 1 ou 2. Montez seulement quand vos mesures montrent que l'agent est fiable, et seulement pour les cas où il l'a prouvé. Gardez une approbation avant tout ce qui dépense de l'argent, parle aux clients ou au public, modifie des dossiers ou touche aux droits d'une personne.",
            "Nommez une personne responsable de l'agent : quelqu'un qui répond de ses résultats, relit son journal et peut l'éteindre. Un agent sans responsable est la façon la plus courante dont l'automatisation tourne mal."
          ],
          words: [["Niveau d'autonomie", "ce qu'un agent IA peut faire sans l'approbation d'une personne."], ["Exception", "un cas qui sort du schéma habituel et demande une personne."], ["Responsable de l'agent", "la personne qui répond des résultats d'un agent et peut l'éteindre."]],
          slides: [
            { title: "Quatre niveaux d'autonomie", bullets: ["1 Suggérer : l'agent rédige, les personnes agissent", "2 Préparer : les personnes approuvent chaque action", "3 Agir avec contrôles : exceptions aux personnes", "4 Agir seul : rare, faible risque, réversible"] },
            { title: "Commencer bas, gagner la confiance", bullets: ["Pilotes au niveau 1 ou 2", "Monter seulement avec des preuves"] },
            { title: "Toujours approuver avant de", bullets: ["Dépenser de l'argent", "Parler aux clients ou au public", "Modifier des dossiers ou toucher aux droits"] },
            { title: "Chaque agent a un responsable", bullets: ["Il répond des résultats, relit les journaux", "Il peut l'éteindre"] }
          ],
          tryIt: "Pour votre processus pilote, choisissez le niveau d'autonomie de départ, listez chaque étape où une personne doit approuver, et nommez le responsable de l'agent.",
          youCanNow: "fixer le niveau d'autonomie, les points d'approbation et le responsable d'un agent.",
          quickCheck: [
            { objective: "O2", q: "Que fait le responsable d'un agent ?", options: ["Il écrit le code de l'agent", "Il achète le logiciel", "Il répond des résultats de l'agent, relit ses journaux et peut l'arrêter", "Il est celui qui utilise le plus l'agent"], answer: 2, why: "Chaque agent a besoin d'une personne nommée qui en répond." },
            { objective: "O2", q: "L'agent de votre pilote va rédiger des réponses aux clients. À quel niveau d'autonomie commenceriez-vous ?", options: ["Autonomie complète, pour gagner le plus de temps", "Agir avec des contrôles, en ne transmettant que les exceptions", "Aucun niveau ; ne pas décider", "Niveau 1 ou 2, pour qu'une personne approuve avant que quoi que ce soit arrive à un client"], answer: 3, why: "Les pilotes commencent en général bas, et l'approbation vient avant qu'un agent parle à des clients." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Mesurer honnêtement la valeur et les risques",
          minutes: 6,
          goal: "Fixer une situation de départ, des mesures de réussite et un registre des risques pour un pilote.",
          text: [
            "On ne peut pas montrer une amélioration sans situation de départ : la performance du processus aujourd'hui. Mesurez le temps par tâche, le volume, le taux d'erreur, le temps d'attente et la satisfaction du personnel ou des clients pendant quelques semaines avant le pilote.",
            "Choisissez trois à cinq mesures de réussite, et incluez la qualité, pas seulement la vitesse : « temps par demande réduit de 30 % sans hausse des erreurs ». Comptez les coûts cachés : temps de relecture, coût des outils, formation et temps passé à corriger les erreurs de l'agent.",
            "Tenez un registre des risques : un tableau simple avec chaque risque, sa probabilité, sa gravité, la protection et le responsable. Risques typiques des agents : réponses fausses, fuites de données privées, injection de consigne, trop d'accès, résultats injustes, confiance excessive du personnel dans l'agent, et dépendance à un fournisseur. Le cadre gratuit de gestion des risques de l'IA du NIST (l'institut américain des normes), organisé en Gouverner, Cartographier, Mesurer et Gérer, est un bon guide."
          ],
          steps: ["Mesurez la situation de départ pendant quelques semaines.", "Choisissez trois à cinq mesures, dont la qualité.", "Comptez les coûts cachés : relecture, outils, formation, corrections.", "Listez au moins cinq risques dans un registre.", "Donnez à chaque risque une protection et un responsable."],
          words: [["Situation de départ", "la performance d'un processus avant que vous ne le changiez (baseline)."], ["Registre des risques", "un tableau des risques avec leur probabilité, leur gravité, la protection et le responsable."], ["Dépendance à un fournisseur", "être coincé avec un seul fournisseur parce qu'il est difficile d'en changer."]],
          slides: [
            { title: "La situation de départ d'abord", bullets: ["Temps par tâche, volume, erreurs", "Temps d'attente, satisfaction", "Mesurez pendant quelques semaines"] },
            { title: "Mesurer la qualité, pas seulement la vitesse", bullets: ["« 30 % plus rapide, sans hausse des erreurs »", "Comptez relecture, outils, formation, corrections"] },
            { title: "Registre des risques", bullets: ["Risque, probabilité, gravité, protection, responsable", "Réponse fausse, vie privée, injection, accès", "Injustice, confiance excessive, dépendance"] }
          ],
          sources: [{ name: "NIST : cadre de gestion des risques de l'IA (AI RMF)", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Écrivez les mesures de départ de votre processus pilote, trois à cinq mesures de réussite, et un registre d'au moins cinq risques, chacun avec une protection et un responsable.",
          youCanNow: "fixer une situation de départ, des mesures de réussite honnêtes et un registre des risques pour un pilote d'IA.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'un registre des risques ?", options: ["Une liste de risques, chacun avec sa probabilité, son impact, sa protection et son responsable", "Une liste des employés qui utilisent l'IA", "Une police d'assurance", "Le journal d'exécution de l'agent"], answer: 0, why: "Un registre des risques rend chaque risque visible et lui donne une protection et un responsable." },
            { objective: "O3", q: "Votre seule mesure de réussite est « plus rapide ». Qu'ajouteriez-vous ?", options: ["Rien ; seule la vitesse compte", "Une mesure de qualité, comme aucune hausse des erreurs", "Une mesure de combien le personnel apprécie le fournisseur", "La note que l'agent se donne à lui-même"], answer: 1, why: "La vitesse sans la qualité peut cacher des erreurs et du travail à refaire." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les agents dans le travail",
        questions: [
          { objective: "O1", q: "Quel est le meilleur premier processus pour un pilote d'agent IA ?", options: ["Décider qui promouvoir", "Approuver de gros paiements", "Trier les demandes entrantes courantes", "Gérer les incidents de sécurité"], answer: 2, why: "Un travail fréquent, clair et à faible risque fait un premier pilote sûr." },
          { objective: "O1", q: "Pourquoi cartographier un processus avant de l'automatiser ?", options: ["La carte révèle souvent du gaspillage, et automatiser un processus défaillant le fait échouer plus vite", "La loi l'exige", "Les agents ne fonctionnent pas sans carte", "Cela allonge le pilote"], answer: 0, why: "Corrigez d'abord le processus, puis automatisez." },
          { objective: "O2", q: "Au niveau d'autonomie 2 (préparer), qui approuve chaque action ?", options: ["Personne", "L'agent", "Le fournisseur", "Une personne"], answer: 3, why: "Le niveau 2 prépare les actions pour une approbation humaine." },
          { objective: "O3", q: "Qu'est-ce que la situation de départ ?", options: ["L'offre la moins chère", "La performance du processus avant le changement", "Le nom de l'agent", "Le rapport final"], answer: 1, why: "Sans situation de départ, on ne peut pas montrer d'amélioration." },
          { objective: "O3", q: "Quelle mesure de réussite est la meilleure ?", options: ["« On a l'impression que c'est plus rapide »", "« Le personnel aime le logo »", "« L'agent est occupé »", "« Temps par demande réduit de 30 % sans hausse des erreurs »"], answer: 3, why: "Elle mesure la vitesse et la qualité par rapport à la situation de départ." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Conduire les personnes et le plan",
      lessons: [
        {
          objectives: ["O4"],
          title: "Accompagner les personnes dans le changement",
          minutes: 5,
          goal: "Planifier comment vous allez communiquer avec les personnes concernées, les impliquer et les former.",
          text: [
            "L'automatisation change les métiers, et les gens le sentent avant toute annonce. Impliquez dès le début les personnes qui font le travail aujourd'hui : elles connaissent les exceptions, les solutions de contournement et les vrais risques. Elles doivent aider à cartographier le processus et à tester l'agent.",
            "Communiquez tôt et honnêtement : pourquoi vous faites ce pilote, ce qui va changer et ce qui ne changera pas, ce que deviendra le temps gagné, et comment chacun peut faire part de ses inquiétudes. Si vous ne savez pas encore, dites-le et dites quand vous saurez. Le silence se remplit de rumeurs.",
            "Planifiez les nouvelles compétences : relire le travail de l'agent, traiter les exceptions, repérer les erreurs de l'IA et rédiger de bonnes instructions. Prévoyez du temps pour la formation, et reconnaissez les personnes qui trouvent des problèmes ; repérer une erreur de l'agent est une contribution, pas un manque de loyauté."
          ],
          steps: ["Listez qui est concerné et comment.", "Invitez les personnes qui font le travail à aider à cartographier et à tester.", "Dites-leur pourquoi, ce qui change, ce qui ne change pas, et comment faire part de leurs inquiétudes.", "Planifiez les nouvelles compétences et le temps de formation.", "Reconnaissez les personnes qui trouvent des problèmes."],
          words: [["Conduite du changement", "planifier comment les personnes passent de l'ancienne façon de travailler à la nouvelle."], ["Partie prenante", "toute personne concernée par un changement ou capable de l'influencer."]],
          slides: [
            { title: "Impliquer ceux qui font le travail", bullets: ["Ils connaissent les exceptions et les risques", "Ils aident à cartographier et à tester"] },
            { title: "Communiquer tôt et honnêtement", bullets: ["Pourquoi, ce qui change, ce qui ne change pas", "Ce que devient le temps gagné", "Dites quand vous ne savez pas encore"] },
            { title: "Développer de nouvelles compétences", bullets: ["Relire le travail de l'agent et les exceptions", "Repérer les erreurs de l'IA", "Récompenser ceux qui trouvent des problèmes"] }
          ],
          tryIt: "Listez les personnes concernées par votre pilote. Écrivez-leur un court premier message qui explique pourquoi, ce qui va changer et ce qui ne changera pas, et comment faire part de leurs inquiétudes. Planifiez une séance de formation.",
          youCanNow: "planifier le volet humain d'un changement lié à l'IA : implication, communication honnête et formation.",
          quickCheck: [
            { objective: "O4", q: "De quoi s'occupe la conduite du changement ?", options: ["Changer de version de logiciel", "Changer le budget", "Faire passer les personnes de l'ancienne façon de travailler à la nouvelle", "Changer de managers"], answer: 2, why: "La conduite du changement concerne les personnes, pas seulement les outils." },
            { objective: "O4", q: "Le personnel demande si le pilote va toucher leurs emplois et vous ne le savez pas encore. Que dites-vous ?", options: ["Promettre que rien ne changera", "Ne rien dire jusqu'au jour 90", "Leur dire que c'est confidentiel", "Dire que vous ne le savez pas encore et quand vous le saurez"], answer: 3, why: "Des réponses honnêtes, même « pas encore », construisent la confiance pendant le changement." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Une gouvernance de l'IA simple et efficace",
          minutes: 5,
          goal: "Mettre en place une gouvernance légère : un inventaire, un responsable par agent et un rythme de revue.",
          text: [
            "La gouvernance consiste à décider qui peut faire quoi avec l'IA, et à vérifier que cela fonctionne. Elle n'a pas besoin d'être lourde. Commencez par trois choses.",
            "Un inventaire : la liste de chaque outil et agent d'IA utilisé, ce qu'il fait, les données qu'il touche, son niveau d'autonomie et son responsable. On ne peut pas gouverner ce dont on ignore l'existence, et le personnel commence souvent à utiliser des outils de lui-même.",
            "Un petit groupe de revue (pour une petite organisation, deux ou trois personnes) qui approuve les nouveaux agents, revoit chaque mois le registre des risques et les rapports d'incident, et peut suspendre n'importe quel agent. Écrivez comment quelqu'un signale un problème d'IA et en combien de temps vous réagissez. Vérifiez avec un conseiller qualifié les lois ou règles qui s'appliquent à votre secteur et à votre pays."
          ],
          steps: ["Dressez un inventaire des outils et agents d'IA.", "Notez pour chacun le but, les données, le niveau d'autonomie et le responsable.", "Formez un petit groupe de revue.", "Revoyez risques et incidents chaque mois ; permettez de suspendre tout agent.", "Publiez la façon de signaler un problème d'IA."],
          words: [["Gouvernance", "les règles et les rôles pour décider et vérifier comment quelque chose est utilisé."], ["Inventaire", "la liste complète des outils et agents d'IA utilisés."], ["Incident", "un événement où quelque chose a mal tourné ou a failli mal tourner."]],
          slides: [
            { title: "La gouvernance peut être légère", bullets: ["Qui peut faire quoi avec l'IA", "Et vérifier que cela fonctionne"] },
            { title: "Commencer par un inventaire", bullets: ["Chaque outil et agent d'IA", "But, données, niveau d'autonomie, responsable"] },
            { title: "Un petit groupe de revue", bullets: ["Approuve les nouveaux agents", "Revue mensuelle des risques et incidents", "Peut suspendre tout agent"] },
            { title: "Faciliter les signalements", bullets: ["Comment signaler un problème d'IA", "En combien de temps vous réagissez", "Règles du secteur : voyez un conseiller"] }
          ],
          sources: [{ name: "NIST : cadre de gestion des risques de l'IA (fonction Gouverner)", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Commencez un inventaire IA pour votre équipe avec au moins trois lignes (outil, but, données, niveau d'autonomie, responsable). Nommez qui ferait partie de votre groupe de revue.",
          youCanNow: "mettre en place une gouvernance légère de l'IA avec un inventaire, des responsables et un rythme de revue.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qu'un inventaire de l'IA ?", options: ["La liste de tous les outils et agents d'IA utilisés, avec leurs responsables", "Un magasin qui vend de l'IA", "Le nombre d'ordinateurs", "La liste des employés formés à l'IA"], answer: 0, why: "On ne peut pas encadrer ce qu'on n'a pas listé." },
            { objective: "O5", q: "Vous ne savez pas quelles lois s'appliquent à votre agent dans votre secteur. Que feriez-vous ?", options: ["Demander à l'assistant IA et suivre sa réponse", "Vérifier auprès d'un conseiller qualifié", "Supposer qu'aucune loi ne s'applique aux pilotes", "Copier le plan d'une autre entreprise"], answer: 1, why: "Les lois varient selon le secteur et le lieu : un conseiller qualifié doit les confirmer." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rédiger le plan de projet pilote sur 90 jours",
          minutes: 6,
          goal: "Assembler un plan de projet pilote sur 90 jours avec une règle de décision.",
          text: [
            "Rassemblez votre travail dans un plan de deux pages. Jours 1 à 30 : situation de départ, mise en place, formation, agent au niveau 1 ou 2 sur une petite part du travail. Jours 31 à 60 : fonctionnement, revue hebdomadaire du journal, corrections, suivi des mesures. Jours 61 à 90 : comparaison avec la situation de départ, entretiens avec le personnel et décision.",
            "Écrivez la règle de décision avant de commencer, pour que ce soit le résultat qui décide, pas l'enthousiasme : « Étendre à toute l'équipe si le temps par demande baisse d'au moins 25 %, si les erreurs n'augmentent pas et s'il n'y a aucun incident grave. Sinon, arrêter ou repenser. » Incluez une règle d'arrêt immédiat en cas d'incident grave.",
            "Utilisez un assistant IA pour transformer vos notes en un brouillon propre, puis corrigez-le vous-même. Présentez-le en cinq minutes : le problème, le processus, l'agent et ses limites, les mesures, les risques, le plan pour les personnes, et la règle de décision."
          ],
          steps: ["Jours 1-30 : situation de départ, mise en place, formation, petit démarrage.", "Jours 31-60 : fonctionnement, revue hebdomadaire du journal, corrections, mesures.", "Jours 61-90 : comparaison, entretiens avec le personnel, décision.", "Écrivez d'abord la règle de décision et la règle d'arrêt.", "Rédigez avec l'IA, corrigez vous-même, présentez en cinq minutes."],
          words: [["Règle de décision", "une règle écrite à l'avance qui dit s'il faut continuer ou non (go / no-go)."], ["Règle d'arrêt", "une condition qui suspend immédiatement le pilote, comme un incident grave."]],
          slides: [
            { title: "Trois phases", bullets: ["Jours 1-30 : départ, mise en place, petit démarrage", "Jours 31-60 : fonctionnement, revue, corrections", "Jours 61-90 : comparer, interroger, décider"] },
            { title: "Fixer la règle d'abord", bullets: ["On continue si les mesures sont atteintes, sans incident grave", "Sinon, arrêter ou repenser", "Règle d'arrêt pour les incidents graves"] },
            { title: "Présenter en cinq minutes", bullets: ["Problème, processus, agent et limites", "Mesures, risques, plan pour les personnes", "La règle de décision"] }
          ],
          tryIt: "Exercice final : rédigez votre plan de projet pilote de deux pages sur 90 jours avec la carte du processus, l'autonomie et les approbations, le responsable, la situation de départ et les mesures, le registre des risques, le plan pour les personnes et la règle de décision. Présentez-le à un collègue en cinq minutes et notez ses deux questions les plus difficiles.",
          youCanNow: "conduire un pilote d'agent IA de l'idée à un plan avec des mesures claires, des garde-fous et une règle de décision.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qu'une règle « on continue ou on arrête » ?", options: ["Une règle sur quand le personnel peut utiliser l'IA", "L'heure de démarrage quotidienne de l'agent", "Une règle écrite à l'avance qui décide au jour 90 s'il faut étendre, modifier ou arrêter", "Une liste d'outils interdits"], answer: 2, why: "Écrire la règle d'abord garde la décision du jour 90 honnête." },
            { objective: "O6", q: "Un collègue pose sur votre plan une question difficile à laquelle vous ne savez pas répondre. Que faites-vous ?", options: ["La noter et ajouter au plan la réponse ou une prochaine étape", "Changer de sujet", "Retirer cette partie du plan", "Dire que l'IA s'en occupera"], answer: 0, why: "Les questions difficiles montrent où le plan doit être retravaillé avant le début du pilote." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Conduire les personnes et le plan",
        questions: [
          { objective: "O4", q: "Qui doit aider à cartographier le processus et à tester l'agent ?", options: ["Seulement le fournisseur", "Seulement les hauts responsables", "Les personnes qui font le travail aujourd'hui", "Personne"], answer: 2, why: "Elles connaissent les exceptions et les vrais risques." },
          { objective: "O4", q: "Vous ne savez pas encore comment le pilote touchera les emplois. Que dire ?", options: ["Que vous ne savez pas encore et quand vous saurez", "Que rien ne changera jamais", "Rien jusqu'à la fin", "Que tout le monde perdra son emploi"], answer: 0, why: "L'honnêteté sur l'incertitude évite les rumeurs." },
          { objective: "O5", q: "Qu'est-ce qu'un inventaire IA ?", options: ["Une liste de courses", "La liste de chaque outil et agent d'IA utilisé, avec les responsables", "La liste du personnel", "Un budget"], answer: 1, why: "On ne peut pas gouverner ce dont on ignore l'existence." },
          { objective: "O6", q: "Quand faut-il écrire la règle de décision ?", options: ["Avant le début du pilote", "Après les résultats", "Jamais", "Seulement si le pilote échoue"], answer: 0, why: "L'écrire d'abord laisse décider les résultats, pas l'enthousiasme." },
          { objective: "O6", q: "Un grave incident de vie privée survient au jour 40. Que doit dire le plan ?", options: ["Continuer jusqu'au jour 90", "Augmenter le niveau d'autonomie", "Le cacher", "Suspendre immédiatement selon la règle d'arrêt"], answer: 3, why: "Une règle d'arrêt s'applique à tout moment." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Diriger à l'ère de l'IA agentique 3 : IA agentique, automatisation et conduite de la transformation",
    questions: [
      { objective: "O1", q: "Un bon premier candidat à l'automatisation est :", options: ["Rare et complexe", "Fréquent, à étapes claires, à faible risque en cas d'erreur", "Lié aux licenciements", "Lié aux gros paiements"], answer: 1, why: "Un travail simple, fréquent et à faible risque est un départ sûr." },
      { objective: "O1", q: "Une carte de processus montre :", options: ["Seulement l'organigramme", "Les plans du bureau", "Chaque étape, qui la fait, l'outil et le temps", "Les salaires"], answer: 2, why: "Les cartes montrent comment le travail se fait aujourd'hui." },
      { objective: "O1", q: "Automatiser un processus défaillant :", options: ["Le rend gratuit", "Le répare automatiquement", "Le fait échouer plus vite", "Supprime tous les risques"], answer: 2, why: "Corrigez d'abord le processus." },
      { objective: "O1", q: "Les cinq critères de notation comprennent :", options: ["Volume, étapes claires, entrées numériques, pénibilité, faible risque", "Couleur, taille, marque", "Seulement le coût", "La popularité"], answer: 0, why: "Ils prédisent un bon premier pilote." },
      { objective: "O2", q: "Le niveau d'autonomie 1 (suggérer) veut dire :", options: ["Aucune IA n'est utilisée", "L'agent agit seul", "L'agent approuve les personnes", "L'agent rédige ; les personnes font tout"], answer: 3, why: "Il ne fait que suggérer." },
      { objective: "O2", q: "Au niveau 3 (agir avec contrôles), qu'envoie-t-on aux personnes ?", options: ["Rien", "Les exceptions, plus un échantillon à relire", "Seulement les factures", "Seulement des compliments"], answer: 1, why: "Les cas courants passent ; les exceptions vont aux personnes." },
      { objective: "O2", q: "Les pilotes doivent en général commencer :", options: ["Au plus haut niveau disponible", "Au niveau 4", "Sans niveau", "Au niveau 1 ou 2"], answer: 3, why: "Commencez bas et gagnez la confiance." },
      { objective: "O2", q: "Une approbation doit toujours précéder le moment où un agent :", options: ["Compte des mots", "Lit une page publique", "Dépense de l'argent ou parle aux clients", "Met en forme un tableau"], answer: 2, why: "Ces actions ont de vraies conséquences." },
      { objective: "O2", q: "Le responsable d'un agent :", options: ["Répond de ses résultats, relit les journaux et peut l'éteindre", "Est le fournisseur d'IA", "Est facultatif", "Est l'agent lui-même"], answer: 0, why: "Chaque agent a besoin d'une personne responsable." },
      { objective: "O3", q: "Les mesures de réussite doivent inclure :", options: ["Seulement la vitesse", "La qualité, pas seulement la vitesse", "Seulement le coût", "Seulement l'avis du personnel"], answer: 1, why: "Plus rapide mais moins bien, ce n'est pas une réussite." },
      { objective: "O3", q: "Lequel est un coût caché d'un agent ?", options: ["Le temps passé à relire et corriger son travail", "Le loyer du bureau", "Le café", "Le parking"], answer: 0, why: "Le temps de relecture et de correction se déduit des gains." },
      { objective: "O3", q: "Un registre des risques liste chaque risque avec :", options: ["Rien d'autre", "Une blague", "Seulement le coût", "Sa probabilité, sa gravité, la protection et le responsable"], answer: 3, why: "Cela rend les risques gérables." },
      { objective: "O3", q: "La dépendance à un fournisseur veut dire :", options: ["Un bureau fermé à clé", "Être coincé avec un seul fournisseur parce qu'il est difficile d'en changer", "Un mot de passe", "Une remise"], answer: 1, why: "C'est un risque stratégique à inscrire au registre." },
      { objective: "O5", q: "Les quatre fonctions du NIST AI RMF sont :", options: ["Acheter, Construire, Faire tourner, Vendre", "Planifier, Faire, Vérifier, Agir", "Gouverner, Cartographier, Mesurer, Gérer", "Embaucher, Former, Promouvoir, Retraiter"], answer: 2, why: "Le NIST nomme ces quatre-là." },
      { objective: "O4", q: "La conduite du changement porte sur :", options: ["Le changement des mots de passe", "Le comptage des pièces", "Le passage des personnes de l'ancienne façon de travailler à la nouvelle", "L'achat de logiciels"], answer: 2, why: "C'est le volet humain du changement." },
      { objective: "O4", q: "Un employé trouve une erreur de l'agent. Les responsables doivent :", options: ["La reconnaître comme une contribution", "La traiter comme un manque de loyauté", "L'ignorer", "La cacher"], answer: 0, why: "Trouver les problèmes garde le pilote sûr." },
      { objective: "O5", q: "La gouvernance de l'IA peut commencer par :", options: ["Rien", "Un manuel de 200 pages", "L'interdiction de tous les outils", "Un inventaire, des responsables et un petit groupe de revue"], answer: 3, why: "Une gouvernance légère suffit pour commencer." },
      { objective: "O5", q: "Avec une bonne gouvernance, qui peut suspendre un agent ?", options: ["Personne", "Le groupe de revue ou le responsable", "Seulement le fournisseur", "Seulement l'agent"], answer: 1, why: "Quelqu'un doit toujours pouvoir l'arrêter." },
      { objective: "O5", q: "Pour les lois qui s'appliquent à votre secteur et à votre pays, vous devez :", options: ["Copier les règles d'un autre pays", "Demander à l'IA de décider", "Supposer qu'aucune ne s'applique", "Vérifier avec un conseiller qualifié"], answer: 3, why: "Les questions juridiques demandent un avis qualifié." },
      { objective: "O6", q: "Les jours 61 à 90 du pilote servent à :", options: ["Acheter plus d'outils", "Commencer la mise en place", "Comparer avec la situation de départ, interroger le personnel et décider", "Sauter la revue"], answer: 2, why: "La dernière phase produit la décision." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      4,
      7,
      9,
      11,
      14,
      16,
      17,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Carte du processus",
        objective: "O1",
        notYet: "Les étapes actuelles ou les temps manquent.",
        meets: "Montre les étapes actuelles, qui les fait et le temps.",
        exceeds: "Note le gaspillage trouvé en cartographiant et pourquoi ce processus a obtenu une bonne note."
      },
      {
        name: "Autonomie et approbations",
        objective: "O2",
        notYet: "Pas de niveau d'autonomie, de points d'approbation ou de personne responsable.",
        meets: "Indique la tâche de l'agent, son niveau d'autonomie, chaque point d'approbation humaine et la personne responsable.",
        exceeds: "Explique pourquoi ce niveau convient à un premier pilote."
      },
      {
        name: "Mesures et risques",
        objective: "O3",
        notYet: "Pas de situation de départ, ou moins de cinq risques.",
        meets: "Situation de départ et mesures de réussite, et un registre d'au moins cinq risques.",
        exceeds: "Chaque risque a une protection et un responsable, et les mesures incluent la qualité."
      },
      {
        name: "Plan pour les personnes",
        objective: "O4",
        notYet: "Ne dit pas qui est concerné ni comment ces personnes seront informées et formées.",
        meets: "Nomme les personnes concernées et comment vous allez communiquer et former.",
        exceeds: "Implique le personnel dans la cartographie et les tests et dit comment faire part d'une inquiétude."
      },
      {
        name: "Règle « on continue ou on arrête »",
        objective: "O6",
        notYet: "Pas de règle, ou une règle impossible à mesurer.",
        meets: "Une règle claire pour le jour 90, écrite avant le début.",
        exceeds: "Comprend une règle d'arrêt en cas d'incident grave pendant le pilote."
      },
      {
        name: "Présenté et mis à l'épreuve",
        objective: "O6",
        notYet: "Pas présenté, ou questions non notées.",
        meets: "Présenté en cinq minutes, avec les deux questions les plus difficiles du collègue notées.",
        exceeds: "Le plan a été mis à jour pour répondre à ces questions."
      }
    ]
  },
  evaluation: {
    results: [
      "Responsables qui terminent le cours et réussissent l'exercice final (grille d'évaluation)",
      "Plans pilotes présentés à un conseil d'administration, un dirigeant ou une équipe de direction dans les 60 jours (enquête de suivi)",
      "Pilotes lancés avec une règle « on continue ou on arrête » écrite et un responsable d'agent nommé (enquête de suivi)",
      "Organisations qui ont un inventaire de l'IA et un groupe de revue en place dans les 90 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur avec un assistant IA gratuit pour rédiger",
      "Une liste des processus de votre domaine et l'accès aux personnes qui les réalisent",
      "Un modèle de plan de deux pages ou un document vierge",
      "Environ 60 minutes pour les leçons et les contrôles, plus le temps de rédiger et de présenter le plan"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis faites évaluer les processus candidats en petits groupes.",
      "Encouragez les responsables à inviter le personnel qui fait le travail à aider à cartographier le processus.",
      "Rappelez aux responsables de ne mettre aucune donnée personnelle ou confidentielle dans les outils d'IA pendant la rédaction, et de vérifier les lois auprès d'un conseiller qualifié.",
      "Organisez une séance de présentation où les pairs posent les deux questions les plus difficiles.",
      "Notez le plan final avec la grille, et vérifiez que la règle « on continue ou on arrête » a été écrite avant la date de début."
    ]
  }
};
