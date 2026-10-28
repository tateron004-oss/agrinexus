"use strict";

// Koach Learn course (French translation of veterans/veterans-ai-productivity-leadership.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "veterans-ai-productivity-leadership-fr",
  lang: "fr",
  translationOf: "veterans-ai-productivity-leadership",
  category: "Veterans (military)",
  name: "L'IA pour la productivité et le leadership",
  skills: "Planifier la semaine d'une équipe avec l'IA, Écrire des e-mails BLUF, Résumer des réunions en actions à faire, Donner des retours clairs, Déléguer avec une liste de contrôle, Utiliser l'IA de façon responsable avec les informations de l'équipe",
  outcome: "utiliser un assistant d'IA pour planifier la semaine d'une petite équipe, écrire un e-mail de point d'avancement clair avec l'essentiel en premier (BLUF), et transformer des notes de réunion en actions avec responsables et dates, sans mettre les informations privées des membres de l'équipe dans des outils d'IA publics.",
  about: [
    "Ce cours s'adresse aux anciens militaires qui ont commandé sous l'uniforme, comme sous-officiers, officiers ou chefs d'équipe, et qui dirigent ou veulent diriger dans des entreprises civiles. Vos habitudes de commandement se transfèrent ; les mots et les outils sont un peu différents.",
    "Vous utiliserez un assistant d'IA gratuit pour planifier la semaine d'une équipe, écrire des points d'avancement courts et clairs, transformer des notes de réunion en désordre en actions à faire, préparer des retours et bien déléguer. Vous apprendrez aussi les règles pour utiliser l'IA de façon responsable avec les informations des autres.",
    "Chaque leçon dure environ cinq minutes : lisez, regardez les diapositives, puis faites l'activité \"Essayez maintenant\". Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Pour une équipe réelle ou d'entraînement de trois à six personnes : utilisez un assistant d'IA pour construire un plan d'une semaine avec priorités et responsables, écrivez un e-mail de point d'avancement à votre responsable avec l'essentiel en premier, et transformez une courte série de notes de réunion en tableau d'actions avec responsable et date limite, en utilisant des rôles au lieu des noms et sans aucune information privée.",
  chapters: [
    {
      name: "Chapitre 1 : Faire avancer le travail",
      lessons: [
        {
          title: "De la planification de mission au plan hebdomadaire de l'équipe",
          minutes: 5,
          goal: "Utiliser l'IA pour transformer une liste de tâches en plan hebdomadaire priorisé avec des responsables.",
          text: [
            "Dans l'armée, vous planifiiez à partir de la mission : ce qui doit être fait, pour quand, avec quelles personnes et quels moyens. Les équipes civiles ont besoin de la même chose ; elles parlent souvent de plan de travail ou de plan de projet.",
            "Donnez à un assistant d'IA votre liste de tâches, les délais et les rôles de l'équipe, et demandez-lui de les trier par priorité et d'organiser la semaine. Exemple : \"Voici 8 tâches pour mon équipe d'entrepôt de 5 personnes cette semaine, avec les délais. Trie-les par urgence et importance et fais un tableau du lundi au vendredi avec un rôle responsable pour chacune.\"",
            "Utilisez des rôles, pas des noms complets (\"Chef d'équipe A\", \"Cariste 2\"). Puis appliquez votre jugement : l'IA ne sait pas qu'une personne est en congé ou qu'un client compte plus que les autres. C'est vous qui ajustez et validez le plan."
          ],
          steps: ["Listez les tâches et les délais de la semaine.", "Listez les rôles de l'équipe, pas les noms.", "Demandez à l'IA de trier par urgence et importance et de faire un tableau de la semaine.", "Ajustez selon ce que l'IA ne sait pas : congés, compétences, clients clés.", "Partagez le plan final avec l'équipe."],
          words: [["Plan de travail", "une liste de tâches avec des responsables et des dates ; la version civile d'un ordre d'opération."], ["Urgent ou important", "urgent demande une action tout de suite ; important compte le plus pour l'objectif. Ce n'est pas toujours la même chose."]],
          slides: [
            { title: "Même compétence, nouveaux mots", bullets: ["Planification de mission = plan de travail", "Quoi, pour quand, qui, avec quoi"] },
            { title: "Laissez l'IA trier et organiser", bullets: ["Donnez tâches, délais et rôles", "Demandez l'ordre de priorité et un tableau"] },
            { title: "Vous validez le plan", bullets: ["Des rôles, pas des noms", "Ajustez pour congés, compétences, clients clés", "Partagez le plan final"] }
          ],
          tryIt: "Écrivez six tâches que votre équipe (réelle ou d'entraînement) doit faire cette semaine. Demandez à un assistant d'IA de les trier par urgence et importance et de faire un tableau du lundi au vendredi avec un rôle responsable pour chacune. Changez une chose qu'il a mal faite.",
          youCanNow: "transformer une liste de tâches en plan d'équipe hebdomadaire priorisé avec l'IA, et le corriger avec votre jugement."
        },
        {
          title: "Écrire des e-mails et des points d'avancement BLUF",
          minutes: 5,
          goal: "Écrire un court e-mail avec l'essentiel en premier (BLUF) avec l'aide de l'IA.",
          text: [
            "BLUF (bottom line up front, l'essentiel en premier) marche aussi dans les bureaux civils, même si les gens n'utilisent pas le terme. Mettez l'idée principale ou la décision dont vous avez besoin dans la première phrase. Puis donnez les raisons en bref et les prochaines étapes.",
            "Demandez à l'IA de réécrire un long brouillon : \"Réécris ceci en e-mail court à mon responsable. Mets l'essentiel dans la première phrase, puis trois points, puis la prochaine étape. Ton aimable et professionnel. Pas de termes militaires.\"",
            "Vérifiez le ton. L'écriture militaire peut sembler sèche aux lecteurs civils. Un simple \"Merci\" ou \"Je reste disponible pour en parler\" aide. Relisez-le une fois en vous mettant à la place de la personne qui le reçoit."
          ],
          steps: ["Écrivez ce que vous devez dire, même en désordre.", "Demandez à l'IA de mettre l'essentiel en premier, puis des points, puis la prochaine étape.", "Demandez-lui d'enlever les termes militaires et d'utiliser un ton aimable et professionnel.", "Relisez-le comme le destinataire et corrigez ce qui n'est pas clair."],
          words: [["BLUF", "bottom line up front : l'idée principale ou la demande vient en premier."], ["Ton", "la façon dont votre texte sonne pour le lecteur : aimable, sec, formel."]],
          slides: [
            { title: "Le BLUF marche partout", bullets: ["L'idée principale ou la demande d'abord", "Les raisons en bref ensuite", "La prochaine étape à la fin"] },
            { title: "Demandez à l'IA de réécrire", bullets: ["\"L'essentiel dans la première phrase\"", "\"Trois points, puis la prochaine étape\"", "\"Aimable, professionnel, sans termes militaires\""] },
            { title: "Vérifiez le ton", bullets: ["L'écriture militaire peut sembler sèche", "Ajoutez \"Merci\" ou \"Disponible pour en parler\"", "Relisez comme le destinataire"] }
          ],
          tryIt: "Écrivez une note en désordre à un responsable sur un retard dans une tâche. Demandez à un assistant d'IA de la réécrire en e-mail BLUF avec trois points et une prochaine étape, avec un ton aimable et professionnel.",
          youCanNow: "écrire un e-mail court et clair avec l'essentiel en premier, adapté à un milieu de travail civil."
        },
        {
          title: "Transformer des notes de réunion en actions à faire",
          minutes: 5,
          goal: "Utiliser l'IA pour transformer des notes de réunion en tableau d'actions avec responsables et dates limites.",
          text: [
            "Les réunions font perdre du temps quand personne ne repart en sachant qui fait quoi. Une habitude de retour d'expérience règle ça : ce qui a été décidé, qui est responsable de chaque action, et pour quand.",
            "Collez vos notes (avec des rôles au lieu des noms, et sans détails privés) et demandez : \"Transforme ces notes en : 1) décisions prises, 2) tableau des actions avec responsable et date limite, 3) questions en suspens.\" Si une action n'a ni responsable ni date, l'IA doit le signaler.",
            "Beaucoup d'outils de travail, comme Microsoft Teams avec Copilot ou Google Meet avec Gemini, peuvent résumer les réunions si votre employeur l'a activé. Suivez les règles de votre employeur sur l'enregistrement et l'IA, et prévenez les gens quand une réunion est enregistrée ou résumée."
          ],
          steps: ["Prenez des notes courtes pendant la réunion.", "Remplacez les noms par des rôles et enlevez les détails privés.", "Demandez à l'IA les décisions, un tableau d'actions avec responsable et date, et les questions en suspens.", "Complétez les responsables ou dates manquants.", "Envoyez le résumé à l'équipe le jour même."],
          words: [["Action à faire", "une tâche issue d'une réunion avec un seul responsable et une date limite."], ["Retour d'expérience", "un court regard en arrière : ce qui s'est passé, ce qui a marché, ce qu'il faut changer."]],
          slides: [
            { title: "Chaque réunion doit finir par", bullets: ["Les décisions prises", "Les actions : responsable + date limite", "Les questions en suspens"] },
            { title: "Demandez à l'IA de trier les notes", bullets: ["Collez des notes avec des rôles, pas des noms", "Demandez décisions, actions, questions", "Faites signaler les responsables ou dates manquants"] },
            { title: "Suivez les règles du travail", bullets: ["Outils IA de réunion seulement si autorisés", "Prévenez quand vous enregistrez ou résumez", "Envoyez le résumé le jour même"] }
          ],
          tryIt: "Écrivez cinq lignes de notes de réunion d'entraînement. Demandez à un assistant d'IA de les transformer en décisions, en tableau d'actions avec rôle responsable et date limite, et en questions en suspens.",
          youCanNow: "transformer des notes de réunion en tableau d'actions clair avec des responsables et des dates."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Faire avancer le travail",
        questions: [
          { q: "Quel nom civil utilise-t-on souvent pour un ordre de mission ou d'opération ?", options: ["Un plan de travail ou plan de projet", "Un CV", "Un budget", "Une table de correspondance"], answer: 0, why: "Les équipes civiles parlent en général de plan de travail ou de plan de projet." },
          { q: "Pourquoi utiliser des rôles comme \"Chef d'équipe A\" au lieu des noms dans une demande à l'IA ?", options: ["L'IA ne sait pas lire les noms", "Pour protéger les informations des membres de l'équipe", "Les noms rallongent les réponses", "C'est plus rapide à taper"], answer: 1, why: "Les rôles donnent à l'IA ce qu'il lui faut sans partager les informations des personnes." },
          { q: "Le plan de l'IA met une grosse tâche le jour où une personne est en congé. Vous :", options: ["Gardez le plan de l'IA", "Annulez la tâche", "Ajustez le plan avec votre jugement", "Demandez à la personne d'annuler son congé"], answer: 2, why: "Vous savez des choses que l'IA ignore ; vous validez le plan final." },
          { q: "Que met-on dans la première phrase d'un e-mail BLUF ?", options: ["Une longue formule de politesse", "L'historique", "Une blague", "L'idée principale ou la demande"], answer: 3, why: "L'essentiel en premier : l'idée principale vient d'abord." },
          { q: "Qu'est-ce qui rend une action à faire complète ?", options: ["Un seul responsable et une date limite", "Une longue description", "Tout le monde en est responsable", "Pas de date, pour rester souple"], answer: 0, why: "Une action a besoin d'un responsable clair et d'une date limite." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Diriger des personnes avec l'IA comme adjoint",
      lessons: [
        {
          title: "Préparer des retours clairs et justes",
          minutes: 5,
          goal: "Utiliser l'IA pour préparer un retour en forme situation-comportement-impact, puis le rendre personnel.",
          text: [
            "Un bon retour est précis et porte sur le comportement, pas sur la personnalité. Un modèle simple est situation, comportement, impact (SCI, en anglais SBI) : \"Lors de la passation de mardi (situation), tu as passé en revue toutes les commandes en cours (comportement), et l'équipe suivante a commencé sans aucun retard (impact).\" Il marche pour féliciter comme pour corriger.",
            "L'IA peut vous aider à préparer : \"Aide-moi à écrire un retour SCI pour un membre de l'équipe qui est arrivé en retard trois fois ce mois-ci au point du matin. Reste respectueux et termine par une question qui l'invite à donner sa version.\" Utilisez un rôle, pas un nom.",
            "Donnez le retour vous-même, en personne ou par téléphone, et écoutez. L'IA vous aide à préparer les mots ; la confiance entre vous et vos équipes vient de vous."
          ],
          steps: ["Choisissez une situation précise.", "Décrivez le comportement observé, pas le caractère de la personne.", "Dites l'impact sur l'équipe ou le travail.", "Demandez à l'IA de vous aider à le formuler avec respect, avec un rôle et pas un nom.", "Donnez-le vous-même et écoutez."],
          words: [["SCI (SBI)", "situation, comportement, impact : une façon simple de donner un retour clair."], ["Comportement", "ce que quelqu'un a fait ou dit, que vous pouvez voir ou entendre."]],
          slides: [
            { title: "Le retour SCI", bullets: ["Situation : quand et où", "Comportement : ce qu'il a fait", "Impact : l'effet sur l'équipe ou le travail"] },
            { title: "L'IA vous aide à préparer", bullets: ["Un rôle, pas un nom", "Demandez une formulation respectueuse", "Terminez par une question pour sa version"] },
            { title: "C'est vous qui le donnez", bullets: ["En personne ou par téléphone", "Écoutez", "La confiance vient de vous, pas de l'outil"] }
          ],
          tryIt: "Pensez à une chose qu'un coéquipier a bien faite récemment. Demandez à un assistant d'IA de vous aider à écrire des félicitations SCI, avec un rôle et pas un nom. Puis réécrivez-les avec vos mots.",
          youCanNow: "préparer avec l'IA un retour situation-comportement-impact clair et juste, et le donner vous-même."
        },
        {
          title: "Déléguer avec une liste de contrôle claire",
          minutes: 5,
          goal: "Utiliser l'IA pour construire une liste de délégation qui donne la tâche, le critère, la date limite et les points de suivi.",
          text: [
            "Vous connaissez l'intention du chef : dire aux gens le but et l'état final recherché, pas seulement les étapes, pour qu'ils puissent s'adapter. La délégation civile marche de la même façon.",
            "Une bonne passation couvre : la tâche, pourquoi elle compte (l'intention), à quoi ressemble le travail fini (le critère), la date limite, les moyens et l'autorité donnés, et quand vous ferez le point. Demandez à l'IA : \"Fais une liste de délégation d'une page pour confier le rapport d'inventaire hebdomadaire à un nouveau membre de l'équipe. Mets le but, le critère, la date limite, les moyens et les points de suivi.\"",
            "Puis confiez la tâche en personne, demandez à la personne de vous la réexpliquer, et prenez du recul. Faites le point aux moments convenus au lieu de surveiller en permanence."
          ],
          steps: ["Nommez la tâche et pourquoi elle compte.", "Décrivez à quoi ressemble le travail fini.", "Fixez la date limite, les moyens et l'autorité.", "Demandez à l'IA d'en faire une liste d'une page.", "Confiez-la, demandez une reformulation, et faites le point comme convenu."],
          words: [["Déléguer", "confier une tâche à quelqu'un d'autre avec l'autorité pour la faire."], ["Intention", "le but et l'état final d'une tâche, pour que les gens puissent s'adapter quand les choses changent."]],
          slides: [
            { title: "L'intention du chef, version civile", bullets: ["Le but et l'état final", "Pas seulement les étapes", "Pour que les gens s'adaptent"] },
            { title: "Une bonne passation couvre", bullets: ["La tâche et pourquoi elle compte", "Le critère et la date limite", "Moyens, autorité et points de suivi"] },
            { title: "Puis prenez du recul", bullets: ["Demandez une reformulation", "Faites le point aux moments convenus", "Ne surveillez pas en permanence"] }
          ],
          tryIt: "Choisissez une tâche que vous pourriez confier. Demandez à un assistant d'IA une liste de délégation d'une page avec le but, le critère, la date limite, les moyens et les points de suivi.",
          youCanNow: "déléguer une tâche avec une liste claire qui donne le but, le critère, la date limite et les points de suivi."
        },
        {
          title: "Utiliser l'IA de façon responsable quand on dirige",
          minutes: 5,
          goal: "Appliquer trois règles pour utiliser l'IA de façon responsable avec les informations de l'équipe et de l'entreprise.",
          text: [
            "Quand vous dirigez, vous montrez l'exemple. Règle 1 : suivez la politique de votre employeur sur l'IA. Beaucoup d'entreprises disent quels outils d'IA sont autorisés et quelles informations peuvent y être mises. S'il n'y a pas de politique, demandez.",
            "Règle 2 : gardez les informations privées des gens hors des outils d'IA publics : problèmes de performance avec un nom, santé, salaire, adresses, ou tout ce qui a été dit en confidence. Gardez aussi à l'écart les secrets des clients et de l'entreprise. Utilisez des rôles et des descriptions générales.",
            "Règle 3 : le résultat est sous votre responsabilité. Vérifiez les faits, les chiffres et le ton avant que quoi que ce soit parte. Si l'IA a aidé à écrire quelque chose d'important, lisez chaque mot. Dire à votre équipe comment vous utilisez l'IA, et comment elle peut l'utiliser, crée de la confiance."
          ],
          steps: ["Trouvez et lisez la politique de votre employeur sur l'IA, ou demandez à votre responsable.", "Utilisez seulement des outils autorisés pour les informations de travail.", "Gardez les informations privées et confidentielles hors des IA publiques.", "Vérifiez tout ce que l'IA écrit avant l'envoi.", "Dites à votre équipe comment l'IA peut être utilisée."],
          words: [["Politique sur l'IA", "les règles d'un employeur sur les outils d'IA autorisés et les informations qu'on peut y mettre."], ["Confidentiel", "une information qui doit rester privée au sein d'un groupe ou d'une entreprise."]],
          slides: [
            { title: "Règle 1 : suivez la politique", bullets: ["Utilisez les outils d'IA autorisés", "Pas de politique ? Demandez"] },
            { title: "Règle 2 : protégez les gens", bullets: ["Pas de noms avec performance, santé ou salaire", "Pas de secrets des clients ou de l'entreprise", "Des rôles et des termes généraux"] },
            { title: "Règle 3 : le résultat est à vous", bullets: ["Vérifiez faits, chiffres et ton", "Lisez chaque mot d'un travail important", "Soyez transparent avec l'équipe sur l'IA"] }
          ],
          tryIt: "Tâche finale : pour une équipe de trois à six personnes, utilisez un assistant d'IA pour construire un plan d'une semaine avec des responsables, écrivez un e-mail de point d'avancement BLUF, et transformez de courtes notes de réunion en tableau d'actions. Utilisez des rôles au lieu des noms et vérifiez qu'il n'y a aucune information privée.",
          youCanNow: "utiliser l'IA quand vous dirigez, en suivant la politique, en protégeant vos équipes et en restant responsable."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Diriger des personnes avec l'IA comme adjoint",
        questions: [
          { q: "Que veut dire SCI (SBI en anglais) ?", options: ["Situation, comportement, impact", "Personnel, budget, inventaire", "Vitesse, équilibre, intention", "Sécurité, briefing, inspection"], answer: 0, why: "SCI est un modèle simple pour un retour clair." },
          { q: "Lequel est un retour basé sur le comportement ?", options: ["\"Tu es paresseux.\"", "\"Tu es arrivé 15 minutes en retard à trois points du matin ce mois-ci.\"", "\"Tu as une mauvaise attitude.\"", "\"Tu es le pire.\""], answer: 1, why: "Il décrit ce que la personne a fait, ce qu'on peut voir." },
          { q: "En délégation, \"l'intention\" veut dire :", options: ["Seulement les étapes exactes", "Seulement la date limite", "Le but et l'état final, pour que les gens puissent s'adapter", "Ce que vous ressentez pour la tâche"], answer: 2, why: "L'intention permet aux gens de s'adapter quand les choses changent." },
          { q: "Votre entreprise n'a pas de politique sur l'IA. Que faites-vous ?", options: ["Utiliser n'importe quel outil avec n'importe quelles données", "Interdire l'IA à tout le monde de vous-même", "Coller les données clients dans un chatbot public", "Demander à votre responsable avant d'utiliser l'IA avec des informations de travail"], answer: 3, why: "Quand il n'y a pas de politique, demandez avant de mettre des informations de travail dans l'IA." },
          { q: "Qu'est-ce qu'on peut mettre dans une demande à une IA publique ?", options: ["\"Un membre de l'équipe est arrivé en retard à trois points du matin\"", "Le problème de santé d'un employé nommé", "Les numéros de compte des clients", "Les adresses de votre équipe"], answer: 0, why: "Une description générale avec un rôle protège les informations des personnes." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour la productivité et le leadership",
    questions: [
      { q: "Un plan de travail civil couvre :", options: ["Seulement qui commande", "Quoi, pour quand, qui et avec quoi", "Seulement le budget", "Seulement l'heure de la réunion"], answer: 1, why: "Comme un ordre de mission, il couvre les tâches, les dates, les personnes et les moyens." },
      { q: "Quand vous demandez à l'IA de trier des tâches, il est utile de demander :", options: ["Un ordre au hasard", "L'ordre alphabétique", "L'ordre par urgence et importance", "La tâche la plus longue d'abord"], answer: 2, why: "L'urgence et l'importance donnent un ordre de priorité utile." },
      { q: "Urgent et important sont :", options: ["Toujours la même chose", "Deux mots pour \"facile\"", "Seulement des termes militaires", "Pas toujours la même chose"], answer: 3, why: "Urgent veut dire maintenant ; important veut dire que ça compte le plus pour l'objectif." },
      { q: "Qui valide le plan final de l'équipe ?", options: ["Vous, le responsable", "L'IA", "Le dernier arrivé dans l'équipe", "Personne"], answer: 0, why: "Vous appliquez un jugement que l'IA n'a pas." },
      { q: "BLUF veut dire :", options: ["Briefing, leçon, mise à jour, suivi", "Bottom line up front (l'essentiel en premier)", "Leadership de base sous le feu", "Meilleur dernier dossier d'unité"], answer: 1, why: "On met l'idée principale en premier." },
      { q: "L'écriture militaire peut sembler sèche aux civils. Une bonne solution est :", options: ["La rallonger", "Ajouter des sigles", "Ajouter une phrase aimable comme \"Disponible pour en parler\"", "Écrire tout en majuscules"], answer: 2, why: "Un ton aimable et professionnel aide les lecteurs civils." },
      { q: "Avant d'envoyer un e-mail écrit avec l'IA, vous devez :", options: ["L'envoyer sans le lire", "Ajouter des termes militaires", "Le rallonger", "Le relire comme le destinataire et corriger ce qui n'est pas clair"], answer: 3, why: "Vous êtes responsable de ce que vous envoyez." },
      { q: "Un résumé de réunion doit contenir :", options: ["Les décisions, les actions avec responsable et date, et les questions en suspens", "Seulement qui était présent", "Seulement des blagues", "Seulement l'heure de début"], answer: 0, why: "Cela dit à chacun qui fait quoi et pour quand." },
      { q: "Avant de coller des notes de réunion dans une IA publique, vous devez :", options: ["Ajouter les numéros de téléphone de tous", "Remplacer les noms par des rôles et enlever les détails privés", "Ajouter les secrets de l'entreprise", "Ne rien faire"], answer: 1, why: "Protégez d'abord les informations des personnes." },
      { q: "Utiliser un outil d'IA qui résume les réunions au travail est acceptable quand :", options: ["Personne n'est au courant", "Vous utilisez un compte personnel avec des données de l'entreprise", "Votre employeur l'autorise et les gens sont prévenus", "Toujours, quelles que soient les règles"], answer: 2, why: "Suivez les règles de votre employeur et soyez transparent sur l'enregistrement." },
      { q: "Une action sans responsable doit être :", options: ["Ignorée", "Donnée à tout le monde", "Supprimée", "Attribuée à un responsable avec une date limite"], answer: 3, why: "Quand tout le monde est responsable, souvent personne ne la fait." },
      { q: "Un bon retour porte sur :", options: ["Le comportement observé", "La personnalité de la personne", "Des rumeurs", "Votre humeur"], answer: 0, why: "Le comportement est précis et juste." },
      { q: "Dans un retour SCI, \"l'impact\" est :", options: ["Le grade de la personne", "L'effet sur l'équipe ou le travail", "La sanction", "La date"], answer: 1, why: "L'impact explique pourquoi le comportement compte." },
      { q: "Qui doit donner un retour que l'IA a aidé à préparer ?", options: ["L'IA par e-mail", "Un collègue", "Vous, en personne ou par téléphone", "Personne"], answer: 2, why: "La confiance vient de vous, pas de l'outil." },
      { q: "Après avoir délégué une tâche, vous devez :", options: ["La faire vous-même quand même", "Surveiller chaque étape", "Ne plus jamais vérifier", "Faire le point aux moments convenus"], answer: 3, why: "Des points convenus équilibrent confiance et responsabilité." },
      { q: "Une bonne passation de délégation comprend :", options: ["Le but, le critère, la date limite, les moyens et les points de suivi", "Seulement la date limite", "Seulement \"fais-le\"", "Votre mot de passe"], answer: 0, why: "Ces éléments permettent à la personne de réussir." },
      { q: "Demander à la personne de réexpliquer la tâche vous aide à :", options: ["Perdre du temps", "Vérifier qu'elle a compris", "Tester sa mémoire pour rire", "Éviter de donner l'intention"], answer: 1, why: "Cela repère les malentendus tôt." },
      { q: "La règle 1 pour utiliser l'IA quand on dirige est :", options: ["Utiliser n'importe quel outil gratuit pour tout", "Ne jamais utiliser l'IA", "Suivre la politique de votre employeur sur l'IA", "Laisser l'équipe décider seule"], answer: 2, why: "La politique dit quels outils et quelles informations sont autorisés." },
      { q: "Qu'est-ce qui ne doit jamais aller dans un outil d'IA public ?", options: ["\"Planifie ma semaine\"", "\"Réécris cet e-mail\"", "Une liste de noms de tâches", "Le salaire et les informations de santé d'un employé nommé"], answer: 3, why: "Ce sont des informations privées et confidentielles." },
      { q: "Si l'IA a aidé à écrire un rapport important, qui en est responsable ?", options: ["Vous", "L'entreprise d'IA", "Le lecteur", "Personne"], answer: 0, why: "Le résultat est sous votre responsabilité, alors vérifiez chaque mot." }
    ]
  }
};
