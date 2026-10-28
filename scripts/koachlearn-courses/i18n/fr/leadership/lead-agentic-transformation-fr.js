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
  chapters: [
    {
      name: "Chapitre 1 : Les agents dans le travail",
      lessons: [
        {
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
          youCanNow: "cartographier un processus et choisir un premier candidat raisonnable pour un agent IA."
        },
        {
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
          youCanNow: "fixer le niveau d'autonomie, les points d'approbation et le responsable d'un agent."
        },
        {
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
          youCanNow: "fixer une situation de départ, des mesures de réussite honnêtes et un registre des risques pour un pilote d'IA."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les agents dans le travail",
        questions: [
          { q: "Quel est le meilleur premier processus pour un pilote d'agent IA ?", options: ["Décider qui promouvoir", "Approuver de gros paiements", "Trier les demandes entrantes courantes", "Gérer les incidents de sécurité"], answer: 2, why: "Un travail fréquent, clair et à faible risque fait un premier pilote sûr." },
          { q: "Pourquoi cartographier un processus avant de l'automatiser ?", options: ["La carte révèle souvent du gaspillage, et automatiser un processus défaillant le fait échouer plus vite", "La loi l'exige", "Les agents ne fonctionnent pas sans carte", "Cela allonge le pilote"], answer: 0, why: "Corrigez d'abord le processus, puis automatisez." },
          { q: "Au niveau d'autonomie 2 (préparer), qui approuve chaque action ?", options: ["Personne", "L'agent", "Le fournisseur", "Une personne"], answer: 3, why: "Le niveau 2 prépare les actions pour une approbation humaine." },
          { q: "Qu'est-ce que la situation de départ ?", options: ["L'offre la moins chère", "La performance du processus avant le changement", "Le nom de l'agent", "Le rapport final"], answer: 1, why: "Sans situation de départ, on ne peut pas montrer d'amélioration." },
          { q: "Quelle mesure de réussite est la meilleure ?", options: ["« On a l'impression que c'est plus rapide »", "« Le personnel aime le logo »", "« L'agent est occupé »", "« Temps par demande réduit de 30 % sans hausse des erreurs »"], answer: 3, why: "Elle mesure la vitesse et la qualité par rapport à la situation de départ." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Conduire les personnes et le plan",
      lessons: [
        {
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
          youCanNow: "planifier le volet humain d'un changement lié à l'IA : implication, communication honnête et formation."
        },
        {
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
          youCanNow: "mettre en place une gouvernance légère de l'IA avec un inventaire, des responsables et un rythme de revue."
        },
        {
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
          youCanNow: "conduire un pilote d'agent IA de l'idée à un plan avec des mesures claires, des garde-fous et une règle de décision."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Conduire les personnes et le plan",
        questions: [
          { q: "Qui doit aider à cartographier le processus et à tester l'agent ?", options: ["Seulement le fournisseur", "Seulement les hauts responsables", "Les personnes qui font le travail aujourd'hui", "Personne"], answer: 2, why: "Elles connaissent les exceptions et les vrais risques." },
          { q: "Vous ne savez pas encore comment le pilote touchera les emplois. Que dire ?", options: ["Que vous ne savez pas encore et quand vous saurez", "Que rien ne changera jamais", "Rien jusqu'à la fin", "Que tout le monde perdra son emploi"], answer: 0, why: "L'honnêteté sur l'incertitude évite les rumeurs." },
          { q: "Qu'est-ce qu'un inventaire IA ?", options: ["Une liste de courses", "La liste de chaque outil et agent d'IA utilisé, avec les responsables", "La liste du personnel", "Un budget"], answer: 1, why: "On ne peut pas gouverner ce dont on ignore l'existence." },
          { q: "Quand faut-il écrire la règle de décision ?", options: ["Avant le début du pilote", "Après les résultats", "Jamais", "Seulement si le pilote échoue"], answer: 0, why: "L'écrire d'abord laisse décider les résultats, pas l'enthousiasme." },
          { q: "Un grave incident de vie privée survient au jour 40. Que doit dire le plan ?", options: ["Continuer jusqu'au jour 90", "Augmenter le niveau d'autonomie", "Le cacher", "Suspendre immédiatement selon la règle d'arrêt"], answer: 3, why: "Une règle d'arrêt s'applique à tout moment." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Diriger à l'ère de l'IA agentique 3 : IA agentique, automatisation et conduite de la transformation",
    questions: [
      { q: "Un bon premier candidat à l'automatisation est :", options: ["Rare et complexe", "Fréquent, à étapes claires, à faible risque en cas d'erreur", "Lié aux licenciements", "Lié aux gros paiements"], answer: 1, why: "Un travail simple, fréquent et à faible risque est un départ sûr." },
      { q: "Une carte de processus montre :", options: ["Seulement l'organigramme", "Les plans du bureau", "Chaque étape, qui la fait, l'outil et le temps", "Les salaires"], answer: 2, why: "Les cartes montrent comment le travail se fait aujourd'hui." },
      { q: "Automatiser un processus défaillant :", options: ["Le rend gratuit", "Le répare automatiquement", "Le fait échouer plus vite", "Supprime tous les risques"], answer: 2, why: "Corrigez d'abord le processus." },
      { q: "Les cinq critères de notation comprennent :", options: ["Volume, étapes claires, entrées numériques, pénibilité, faible risque", "Couleur, taille, marque", "Seulement le coût", "La popularité"], answer: 0, why: "Ils prédisent un bon premier pilote." },
      { q: "Le niveau d'autonomie 1 (suggérer) veut dire :", options: ["Aucune IA n'est utilisée", "L'agent agit seul", "L'agent approuve les personnes", "L'agent rédige ; les personnes font tout"], answer: 3, why: "Il ne fait que suggérer." },
      { q: "Au niveau 3 (agir avec contrôles), qu'envoie-t-on aux personnes ?", options: ["Rien", "Les exceptions, plus un échantillon à relire", "Seulement les factures", "Seulement des compliments"], answer: 1, why: "Les cas courants passent ; les exceptions vont aux personnes." },
      { q: "Les pilotes doivent en général commencer :", options: ["Au plus haut niveau disponible", "Au niveau 4", "Sans niveau", "Au niveau 1 ou 2"], answer: 3, why: "Commencez bas et gagnez la confiance." },
      { q: "Une approbation doit toujours précéder le moment où un agent :", options: ["Compte des mots", "Lit une page publique", "Dépense de l'argent ou parle aux clients", "Met en forme un tableau"], answer: 2, why: "Ces actions ont de vraies conséquences." },
      { q: "Le responsable d'un agent :", options: ["Répond de ses résultats, relit les journaux et peut l'éteindre", "Est le fournisseur d'IA", "Est facultatif", "Est l'agent lui-même"], answer: 0, why: "Chaque agent a besoin d'une personne responsable." },
      { q: "Les mesures de réussite doivent inclure :", options: ["Seulement la vitesse", "La qualité, pas seulement la vitesse", "Seulement le coût", "Seulement l'avis du personnel"], answer: 1, why: "Plus rapide mais moins bien, ce n'est pas une réussite." },
      { q: "Lequel est un coût caché d'un agent ?", options: ["Le temps passé à relire et corriger son travail", "Le loyer du bureau", "Le café", "Le parking"], answer: 0, why: "Le temps de relecture et de correction se déduit des gains." },
      { q: "Un registre des risques liste chaque risque avec :", options: ["Rien d'autre", "Une blague", "Seulement le coût", "Sa probabilité, sa gravité, la protection et le responsable"], answer: 3, why: "Cela rend les risques gérables." },
      { q: "La dépendance à un fournisseur veut dire :", options: ["Un bureau fermé à clé", "Être coincé avec un seul fournisseur parce qu'il est difficile d'en changer", "Un mot de passe", "Une remise"], answer: 1, why: "C'est un risque stratégique à inscrire au registre." },
      { q: "Les quatre fonctions du NIST AI RMF sont :", options: ["Acheter, Construire, Faire tourner, Vendre", "Planifier, Faire, Vérifier, Agir", "Gouverner, Cartographier, Mesurer, Gérer", "Embaucher, Former, Promouvoir, Retraiter"], answer: 2, why: "Le NIST nomme ces quatre-là." },
      { q: "La conduite du changement porte sur :", options: ["Le changement des mots de passe", "Le comptage des pièces", "Le passage des personnes de l'ancienne façon de travailler à la nouvelle", "L'achat de logiciels"], answer: 2, why: "C'est le volet humain du changement." },
      { q: "Un employé trouve une erreur de l'agent. Les responsables doivent :", options: ["La reconnaître comme une contribution", "La traiter comme un manque de loyauté", "L'ignorer", "La cacher"], answer: 0, why: "Trouver les problèmes garde le pilote sûr." },
      { q: "La gouvernance de l'IA peut commencer par :", options: ["Rien", "Un manuel de 200 pages", "L'interdiction de tous les outils", "Un inventaire, des responsables et un petit groupe de revue"], answer: 3, why: "Une gouvernance légère suffit pour commencer." },
      { q: "Avec une bonne gouvernance, qui peut suspendre un agent ?", options: ["Personne", "Le groupe de revue ou le responsable", "Seulement le fournisseur", "Seulement l'agent"], answer: 1, why: "Quelqu'un doit toujours pouvoir l'arrêter." },
      { q: "Pour les lois qui s'appliquent à votre secteur et à votre pays, vous devez :", options: ["Copier les règles d'un autre pays", "Demander à l'IA de décider", "Supposer qu'aucune ne s'applique", "Vérifier avec un conseiller qualifié"], answer: 3, why: "Les questions juridiques demandent un avis qualifié." },
      { q: "Les jours 61 à 90 du pilote servent à :", options: ["Acheter plus d'outils", "Commencer la mise en place", "Comparer avec la situation de départ, interroger le personnel et décider", "Sauter la revue"], answer: 2, why: "La dernière phase produit la décision." }
    ]
  }
};
