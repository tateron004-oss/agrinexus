"use strict";

// Koach Learn course (shared), French translation of "AI for Productivity and Operations". Shape and rules: ../../../README.md (Translations).

module.exports = {
  id: "ai-productivity-operations-fr",
  lang: "fr",
  translationOf: "ai-productivity-operations",
  category: "Small Business",
  name: "L'IA pour la productivité et les opérations",
  skills: "Planifier sa semaine avec l'IA, Rédiger une procédure opérationnelle standard, Transformer les réunions en actions, Construire un planning du personnel ou des bénévoles, Suivre les fournitures et les réapprovisionnements, Rédiger un bilan hebdomadaire des opérations",
  outcome: "utiliser un assistant d'IA gratuit pour planifier la semaine, transformer une tâche confuse en procédure claire étape par étape, tirer des actions des réunions, construire un planning, suivre les fournitures et faire le bilan de la semaine, pour que l'organisation tourne mieux en vous prenant moins de temps.",
  about: [
    "Les opérations, c'est le travail de tous les jours qui fait tourner une organisation : plannings, fournitures, procédures, réunions et suivis. Quand c'est désordonné, les propriétaires et les directeurs passent leurs soirées à rattraper le retard. L'IA peut alléger une bonne partie de cette charge.",
    "Ce cours s'adresse aux propriétaires et gérants de petites entreprises, aux directeurs d'associations et aux coordinateurs de bénévoles. Exemples : un restaurant, une crèche, une équipe d'entretien d'espaces verts, une friperie solidaire et une banque alimentaire.",
    "Vous utiliserez ChatGPT, Microsoft Copilot ou Google Gemini avec Google Docs et Sheets ou Microsoft 365. Chaque leçon dure environ cinq minutes avec une tâche « Essayez maintenant ». Un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours."
  ],
  finalTask: "Construisez un kit d'opérations hebdomadaire pour une organisation réelle ou fictive : un plan de la semaine classé par priorité, une procédure opérationnelle standard pour une tâche répétée, des notes de réunion avec actions, responsables et échéances, un planning d'une semaine pour le personnel ou les bénévoles, une feuille de fournitures avec seuils de réapprovisionnement, et un court bilan de fin de semaine avec une amélioration pour la semaine suivante.",
  chapters: [
    {
      name: "Chapitre 1 : S'organiser",
      lessons: [
        {
          title: "Planifier votre semaine avec l'IA",
          minutes: 5,
          goal: "Transformer une liste de tâches désordonnée en plan de la semaine classé par priorité.",
          text: [
            "Une longue liste de tâches mélangées donne l'impression que tout est urgent. L'IA peut la trier vite. Versez toutes les tâches dans la discussion, puis demandez-lui de trier et de planifier.",
            "Un prompt utile : « Voici ma liste de tâches de la semaine. Trie-la en : à faire absolument cette semaine, à faire si possible, peut attendre, et peut être confié à quelqu'un. Puis fais un plan jour par jour. J'ai environ 3 heures par jour pour le travail de bureau, et le mardi est chargé avec les livraisons. »",
            "C'est vous le chef du plan. Déplacez ce que l'IA a mal placé, bloquez du temps dans votre agenda pour les trois tâches principales, et gardez de la place pour les imprévus."
          ],
          steps: ["Écrivez toutes les tâches, grandes et petites, dans une seule liste.", "Demandez à l'IA de les trier en : absolument, si possible, peut attendre, à confier.", "Indiquez-lui vos vraies heures disponibles et vos jours chargés.", "Corrigez le plan, puis bloquez du temps dans votre agenda pour les trois principales."],
          words: [["Prioriser", "décider ce qui compte le plus et le faire en premier."], ["Déléguer", "confier une tâche à quelqu'un d'autre."]],
          slides: [
            { title: "Vider la liste", bullets: ["Toutes les tâches, grandes et petites", "Un seul endroit, une seule liste"] },
            { title: "Demander à l'IA de trier", bullets: ["Absolument, si possible", "Peut attendre, à confier", "Lui donner vos vraies heures"] },
            { title: "Le plan est à vous", bullets: ["Corriger les erreurs de l'IA", "Bloquer du temps pour les trois principales", "Garder de la place pour les imprévus"] }
          ],
          tryIt: "Écrivez votre liste complète de tâches pour cette semaine. Demandez à un assistant d'IA de la trier et de faire un plan jour par jour avec vos vraies heures, puis corrigez-le et bloquez vos trois tâches principales dans un agenda.",
          youCanNow: "transformer une liste de tâches désordonnée en plan de la semaine classé par priorité avec l'IA."
        },
        {
          title: "Rédiger une procédure opérationnelle standard",
          minutes: 6,
          goal: "Transformer votre façon de faire une tâche en une procédure claire, étape par étape, que tout le monde peut suivre.",
          text: [
            "Une procédure opérationnelle standard (POS, en anglais SOP) décrit par écrit les étapes d'une tâche répétée : ouvrir la boutique, nettoyer la cuisine, accueillir un bénéficiaire, compter la caisse. Avec une POS, le nouveau personnel ou les nouveaux bénévoles apprennent plus vite, et le travail se fait de la même façon à chaque fois.",
            "Le moyen le plus rapide : dites-la ou tapez-la comme vous l'expliqueriez à un nouveau, même en désordre. Puis demandez à l'IA : « Transforme ceci en POS numérotée avec un titre, un objectif, le matériel nécessaire, des étapes d'une seule action chacune, des consignes de sécurité et une liste de contrôle finale. Utilise des mots simples. »",
            "Testez-la : faites-la suivre par quelqu'un qui n'a jamais fait la tâche pendant que vous observez en silence. Chaque fois qu'il hésite, la POS a besoin d'une étape plus claire. Datez-la et indiquez qui en est responsable."
          ],
          steps: ["Expliquez la tâche à voix haute ou par écrit, même en désordre.", "Demandez à l'IA d'en faire une POS numérotée avec objectif, matériel, étapes, consignes de sécurité et liste de contrôle.", "Vérifiez l'exactitude de chaque étape.", "Faites-la tester par une nouvelle personne.", "Corrigez les étapes peu claires, puis datez-la et nommez un responsable."],
          words: [["POS (SOP)", "procédure opérationnelle standard : les étapes écrites d'une tâche répétée."], ["Liste de contrôle", "une liste d'éléments à cocher pour ne rien oublier."]],
          slides: [
            { title: "Pourquoi des POS", bullets: ["Les nouveaux apprennent plus vite", "Fait de la même façon à chaque fois"] },
            { title: "Des notes en désordre à la POS", bullets: ["L'expliquer comme à un nouveau", "L'IA met en forme : objectif, matériel, étapes", "Ajouter sécurité et liste de contrôle"] },
            { title: "La tester", bullets: ["Une nouvelle personne la suit", "Chaque hésitation = une étape à clarifier", "La dater et nommer un responsable"] }
          ],
          tryIt: "Choisissez une tâche que vous faites chaque semaine. Expliquez-la avec vos mots, faites-en une POS avec l'IA, vérifiez-la, et demandez à quelqu'un d'essayer de la suivre.",
          youCanNow: "rédiger et tester une procédure opérationnelle standard claire avec l'aide de l'IA."
        },
        {
          title: "Transformer les réunions en actions",
          minutes: 5,
          goal: "Mener une courte réunion et utiliser l'IA pour transformer les notes en décisions et en actions.",
          text: [
            "Beaucoup de réunions se terminent avec tout le monde qui hoche la tête et rien qui se passe. La solution est simple : chaque réunion se termine par des actions, chacune avec un responsable et une échéance.",
            "Utilisez un ordre du jour minuté. Prenez des notes rapides, ou utilisez les notes IA intégrées à un outil de réunion si votre organisation le permet et que tout le monde a été prévenu. Collez ensuite les notes dans l'IA : « À partir de ces notes, liste les décisions prises, les actions avec responsable et échéance, et les questions en suspens. »",
            "Vérifiez la liste avant de l'envoyer, car l'IA peut deviner un responsable ou une date qui n'ont jamais été convenus. Retirez tout ce qui est privé, comme la santé ou le salaire du personnel, avant de partager. Envoyez-la dans la journée."
          ],
          steps: ["Écrivez un court ordre du jour minuté.", "Prenez des notes ou utilisez des notes IA autorisées, en prévenant tout le monde.", "Demandez à l'IA d'en tirer les décisions, les actions et les questions en suspens.", "Vérifiez responsables et dates ; retirez les détails privés.", "Envoyez la liste des actions dans la journée."],
          words: [["Ordre du jour", "la liste des sujets d'une réunion, dans l'ordre."], ["Action", "une tâche issue d'une réunion avec un responsable et une échéance."]],
          slides: [
            { title: "Finir par des actions", bullets: ["Chaque action a un responsable", "Chaque action a une échéance"] },
            { title: "Laisser l'IA les extraire", bullets: ["Décisions prises", "Actions", "Questions en suspens"] },
            { title: "Avant d'envoyer", bullets: ["Vérifier responsables et dates", "Retirer les détails privés", "Envoyer dans la journée"] }
          ],
          tryIt: "Prenez des notes à votre prochaine réunion, ou écrivez celles d'une réunion récente. Utilisez l'IA pour en tirer les décisions et les actions avec responsables et dates, vérifiez-les, et rédigez le message que vous enverriez.",
          youCanNow: "transformer des notes de réunion en actions vérifiées avec responsables et échéances."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : S'organiser",
        questions: [
          { q: "Quand vous demandez à l'IA de planifier votre semaine, que devez-vous lui dire ?", options: ["Votre mot de passe bancaire", "Rien ; elle devinera", "Vos vraies heures disponibles et vos jours chargés", "Les adresses personnelles de votre personnel"], answer: 2, why: "De vraies contraintes rendent le plan réaliste." },
          { q: "Qu'est-ce qu'une POS ?", options: ["Les étapes écrites d'une tâche répétée", "Un type de charge sociale", "Une publication sur les réseaux sociaux", "Un rapport de ventes"], answer: 0, why: "Les procédures opérationnelles standard rendent les tâches reproductibles." },
          { q: "Un nouveau bénévole hésite à l'étape 4 de votre POS. Qu'est-ce que cela vous dit ?", options: ["Le bénévole n'est pas malin", "Les POS ne marchent jamais", "Il faut supprimer la POS", "L'étape 4 doit être plus claire"], answer: 3, why: "L'hésitation montre où les étapes ne sont pas claires." },
          { q: "Chaque action doit avoir :", options: ["Une longue histoire", "Un responsable et une échéance", "Un code secret", "Aucun détail"], answer: 1, why: "Les responsables et les dates font avancer les actions." },
          { q: "L'IA écrit « Maria terminera le budget vendredi » mais personne n'a convenu de cela. Que faites-vous ?", options: ["L'envoyer quand même", "Corriger avant d'envoyer", "Le confier à Maria sans lui demander", "Supprimer toutes les notes"], answer: 1, why: "L'IA peut deviner ; vérifiez responsables et dates." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Des opérations plus fluides",
      lessons: [
        {
          title: "Construire un planning du personnel ou des bénévoles",
          minutes: 5,
          goal: "Utiliser l'IA et un tableur pour construire un planning d'une semaine équitable qui couvre chaque créneau.",
          text: [
            "Faire un planning, c'est un casse-tête : qui est disponible, combien de personnes chaque créneau demande, et qui a quelles compétences. L'IA peut proposer une première version en quelques secondes.",
            "Donnez-lui les règles sans détails privés : « Fais un tableau de planning sur une semaine. Créneaux : du lundi au vendredi 8 h-12 h et 12 h-16 h, deux personnes chacun. Samedi 9 h-13 h, trois personnes. Disponibilités : Personne A seulement en semaine, Personne B pas le lundi... Chaque personne pas plus de 20 heures. Au moins une personne formée à l'hygiène alimentaire par créneau. »",
            "Vérifiez le brouillon par rapport à vos règles et aux lois du travail qui s'appliquent, comme les pauses et les horaires des mineurs ; aux États-Unis, le service du travail de votre État les publie, ailleurs l'inspection ou le ministère du travail. Mettez le planning final dans un tableur partagé pour que tout le monde voie les changements."
          ],
          steps: ["Listez les créneaux et le nombre de personnes pour chacun.", "Listez les disponibilités de chaque personne avec un prénom ou une étiquette.", "Listez les règles : nombre d'heures maximum, compétences requises.", "Demandez à l'IA un tableau de planning.", "Vérifiez les règles et les lois du travail, puis partagez-le dans un tableur."],
          words: [["Créneau", "une plage de travail définie."], ["Disponibilités", "les moments où une personne peut travailler ou faire du bénévolat."]],
          slides: [
            { title: "Le planning est un casse-tête", bullets: ["Disponibilités, créneaux, compétences"] },
            { title: "Donner les règles à l'IA", bullets: ["Créneaux et nombre de personnes", "Disponibilités par prénom ou étiquette", "Heures maximum et compétences requises"] },
            { title: "Vérifier et partager", bullets: ["Respecter vos règles", "Vérifier le droit du travail : pauses, mineurs", "Partager dans un tableur"] }
          ],
          tryIt: "Écrivez les créneaux, les disponibilités et les règles pour une équipe réelle ou fictive d'au moins quatre personnes. Faites proposer un planning de la semaine par l'IA, vérifiez chaque règle et corrigez les problèmes.",
          youCanNow: "construire et vérifier un planning hebdomadaire équitable avec l'aide de l'IA."
        },
        {
          title: "Suivre les fournitures et les réapprovisionnements",
          minutes: 5,
          goal: "Construire une feuille de fournitures avec des seuils de réapprovisionnement pour ne jamais être à court.",
          text: [
            "Manquer de gobelets, de gants, de farine ou de couches arrête le travail. Une feuille de fournitures simple l'évite. Colonnes : article, unité, quantité en stock, consommation par semaine, seuil de réapprovisionnement, quantité à commander et fournisseur.",
            "Le seuil de réapprovisionnement est la quantité qui vous dit de commander maintenant. Règle simple : consommation par semaine multipliée par le nombre de semaines de livraison, plus un peu de marge. Si vous utilisez 10 boîtes par semaine et que la livraison prend 1 semaine, recommandez vers 12 boîtes.",
            "Demandez à l'IA une formule qui signale les articles à commander : « Dans Google Sheets, écris une formule qui affiche COMMANDER quand le stock est égal ou inférieur au seuil de réapprovisionnement. » Comptez les fournitures le même jour chaque semaine et mettez la feuille à jour."
          ],
          steps: ["Listez les articles avec l'unité et le fournisseur.", "Estimez la consommation par semaine de chacun.", "Fixez un seuil : consommation par semaine x semaines de livraison + un peu de marge.", "Demandez à l'IA une formule qui affiche COMMANDER.", "Comptez chaque semaine le même jour."],
          words: [["Stock (inventaire)", "les fournitures ou produits que vous avez sous la main."], ["Seuil de réapprovisionnement", "la quantité qui vous dit qu'il est temps d'en commander."]],
          slides: [
            { title: "Colonnes de la feuille de fournitures", bullets: ["Article, unité, en stock", "Consommation par semaine, seuil", "Quantité à commander, fournisseur"] },
            { title: "Seuil de réapprovisionnement", bullets: ["Consommation x semaines de livraison + marge", "10 par semaine, livraison en 1 semaine : environ 12"] },
            { title: "Laisser la feuille vous prévenir", bullets: ["La formule affiche COMMANDER", "Compter le même jour chaque semaine"] }
          ],
          tryIt: "Construisez une feuille de fournitures d'au moins huit articles, fixez les seuils de réapprovisionnement et ajoutez une formule écrite par l'IA qui signale les articles à commander.",
          youCanNow: "suivre les fournitures avec des seuils de réapprovisionnement et une alerte automatique de commande."
        },
        {
          title: "Faire le bilan de la semaine et s'améliorer",
          minutes: 5,
          goal: "Rédiger un court bilan de fin de semaine et choisir une amélioration.",
          text: [
            "Un bilan de 15 minutes en fin de semaine empêche les petits problèmes de grossir. Regardez ce qui a été fait, ce qui ne l'a pas été, ce qui a mal tourné et ce qu'il faut changer.",
            "Donnez à l'IA votre plan, vos actions terminées et quelques notes, puis demandez : « Rédige un court bilan hebdomadaire des opérations : réussites, manques, problèmes, et une amélioration pour la semaine prochaine. » Corrigez-le pour qu'il soit vrai et juste envers votre équipe.",
            "Ne choisissez qu'une amélioration par semaine, comme une nouvelle POS, une correction du planning ou un changement de réapprovisionnement. De petites corrections chaque semaine donnent, en quelques mois, des opérations bien plus fluides."
          ],
          steps: ["Rassemblez votre plan de la semaine, vos actions et vos notes.", "Demandez à l'IA un court bilan : réussites, manques, problèmes, une amélioration.", "Corrigez-le pour qu'il soit vrai et juste.", "Choisissez une amélioration et ajoutez-la au plan de la semaine suivante."],
          words: [["Bilan", "un regard en arrière pour apprendre ce qui a marché et ce qui n'a pas marché."], ["Amélioration continue", "faire régulièrement de petits changements pour progresser avec le temps."]],
          slides: [
            { title: "15 minutes par semaine", bullets: ["Ce qui a été fait", "Ce qui ne l'a pas été", "Ce qui a mal tourné"] },
            { title: "L'IA rédige le bilan", bullets: ["Réussites, manques, problèmes", "Une amélioration", "Vous corrigez pour qu'il soit vrai et juste"] },
            { title: "Une correction par semaine", bullets: ["Nouvelle POS, correction du planning ou des commandes", "Les petites corrections s'additionnent"] }
          ],
          tryIt: "Tâche finale : rédigez votre bilan de fin de semaine avec l'aide de l'IA et choisissez une amélioration. Avec votre plan de la semaine, votre POS, vos actions, votre planning et votre feuille de fournitures, cela complète votre kit d'opérations hebdomadaire.",
          youCanNow: "mener une semaine d'opérations avec l'aide de l'IA et continuer à l'améliorer."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Des opérations plus fluides",
        questions: [
          { q: "Quand vous donnez à l'IA des informations de planning, qu'utilisez-vous pour désigner les personnes ?", options: ["Les numéros de sécurité sociale complets", "Les adresses personnelles", "Les dossiers médicaux", "Des prénoms ou des étiquettes, sans détails privés"], answer: 3, why: "Un planning a besoin des disponibilités, pas des détails privés." },
          { q: "Où vérifier les règles sur les pauses et les horaires de travail des mineurs ?", options: ["Auprès du service officiel du travail (aux États-Unis, celui de votre État)", "Sur un blog au hasard", "Seulement dans un chat d'IA", "Chez un concurrent"], answer: 0, why: "Les règles du travail viennent des services officiels du travail." },
          { q: "Vous utilisez 10 boîtes par semaine et la livraison prend 1 semaine. Un seuil de réapprovisionnement sensé est d'environ :", options: ["0 boîte", "1 boîte", "12 boîtes", "100 boîtes"], answer: 2, why: "Consommation par semaine x semaines de livraison, plus un peu de marge." },
          { q: "Combien de temps dure le bilan hebdomadaire dans ce cours ?", options: ["Une journée entière", "Trois heures", "Aucun temps ; on le saute", "Environ 15 minutes"], answer: 3, why: "Un court bilan hebdomadaire garde les problèmes petits." },
          { q: "Combien d'améliorations choisir chaque semaine ?", options: ["Vingt", "Aucune", "Une", "Tout à la fois"], answer: 2, why: "Une correction par semaine est faisable et s'additionne." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour la productivité et les opérations",
    questions: [
      { q: "Les opérations, c'est :", options: ["Seulement la chirurgie", "Le travail de tous les jours qui fait tourner une organisation", "Seulement les ventes", "Seulement le marketing"], answer: 1, why: "Plannings, fournitures, procédures et suivis." },
      { q: "Quand l'IA trie votre liste de tâches, quel groupe correspond à « à confier » ?", options: ["Les tâches que quelqu'un d'autre peut faire", "Les tâches à faire absolument aujourd'hui", "Les tâches à supprimer", "Les tâches que l'IA fait seule"], answer: 0, why: "Confier veut dire déléguer." },
      { q: "Qui a le dernier mot sur votre plan de la semaine ?", options: ["L'IA", "Personne", "Vous", "Votre fournisseur"], answer: 2, why: "Vous corrigez le plan et il est à vous." },
      { q: "Une POS aide parce que :", options: ["Les tâches se font de la même façon et les nouveaux apprennent plus vite", "Elle remplace tout le personnel", "Elle est obligatoire pour chaque e-mail", "Elle ralentit les tâches"], answer: 0, why: "C'est le but des POS." },
      { q: "Le moyen le plus rapide de commencer une POS est de :", options: ["Copier la POS d'une autre entreprise", "Attendre un consultant", "Ne pas l'écrire", "Expliquer la tâche avec vos mots, puis la faire mettre en forme par l'IA"], answer: 3, why: "Votre savoir plus la mise en forme de l'IA, c'est rapide." },
      { q: "Une bonne POS contient :", options: ["Seulement un titre", "Objectif, matériel, étapes numérotées, consignes de sécurité et liste de contrôle", "Les salaires du personnel", "Les numéros de téléphone des clients"], answer: 1, why: "Ces parties la rendent complète." },
      { q: "Comment tester une POS ?", options: ["La lire une fois soi-même", "La faire suivre par une nouvelle personne pendant que vous observez", "Demander à l'IA si elle est bonne", "Ne pas la tester"], answer: 1, why: "Une nouvelle personne révèle les étapes peu claires." },
      { q: "Un ordre du jour est :", options: ["La liste des collations d'une réunion", "Un formulaire de paie", "Un type de POS", "La liste des sujets d'une réunion, dans l'ordre"], answer: 3, why: "L'ordre du jour garde la réunion concentrée." },
      { q: "Avant d'utiliser des notes de réunion par IA, vous devez :", options: ["Vérifier que c'est autorisé et que tout le monde a été prévenu", "Enregistrer en secret", "Partager les salaires du personnel", "Sauter l'ordre du jour"], answer: 0, why: "Les gens doivent savoir quand une réunion est enregistrée ou transcrite." },
      { q: "Avant d'envoyer des notes de réunion faites par l'IA, retirez :", options: ["Toutes les actions", "La date de la réunion", "Les détails privés comme la santé ou le salaire du personnel", "Les décisions"], answer: 2, why: "Les informations privées ne doivent pas être largement partagées." },
      { q: "Les actions doivent être envoyées :", options: ["Un mois plus tard", "Jamais", "Seulement si on le demande", "Dans la journée"], answer: 3, why: "Un suivi rapide garde l'élan." },
      { q: "Un créneau est :", options: ["Seulement une touche du clavier", "Un type de fourniture", "Une plage de travail définie", "Une réunion"], answer: 2, why: "Les plannings sont faits de créneaux." },
      { q: "Le brouillon de planning de l'IA donne 30 heures à une personne, mais votre limite est de 20. Vous devez :", options: ["Le garder", "Corriger le planning pour respecter votre règle", "Ignorer la règle", "Retirer cette personne"], answer: 1, why: "Vérifiez toujours les brouillons de l'IA par rapport à vos règles." },
      { q: "Pourquoi partager le planning final dans un tableur ?", options: ["Tout le monde voit les derniers changements", "Pour le cacher", "Les tableurs sont obligatoires par la loi", "Pour que personne ne le voie"], answer: 0, why: "Une feuille partagée garde tout le monde à jour." },
      { q: "Le stock (inventaire), c'est :", options: ["La liste du personnel", "Les notes de réunion", "Les fournitures ou produits sous la main", "Les avis clients"], answer: 2, why: "Le stock est ce que vous avez en réserve." },
      { q: "Un seuil de réapprovisionnement vous dit :", options: ["Quand il est temps d'en commander", "Le prix d'un article", "Qui est le fournisseur", "Comment le cuisiner"], answer: 0, why: "Il déclenche une nouvelle commande." },
      { q: "Une formule qui affiche COMMANDER aide en :", options: ["Commandant automatiquement avec votre carte", "Supprimant la feuille", "Changeant de fournisseur", "Signalant automatiquement les articles en baisse"], answer: 3, why: "La feuille vous prévient quand le stock est bas." },
      { q: "À quelle fréquence compter les fournitures ?", options: ["Une fois par an", "Chaque semaine le même jour", "Jamais", "Seulement quand on est à court"], answer: 1, why: "Des comptages réguliers gardent la feuille exacte." },
      { q: "Un bilan hebdomadaire couvre :", options: ["Seulement les réussites", "Réussites, manques, problèmes et une amélioration", "Seulement les reproches", "Rien par écrit"], answer: 1, why: "Un bilan équilibré mène à l'amélioration." },
      { q: "Faire régulièrement de petits changements pour progresser s'appelle :", options: ["La délégation", "L'inventaire", "Le planning", "L'amélioration continue"], answer: 3, why: "De petites corrections régulières s'additionnent." }
    ]
  }
};
