"use strict";

// Koach Learn course (French translation of underserved/underserved-ai-community-daily-life.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-ai-community-daily-life-fr",
  lang: "fr",
  translationOf: "underserved-ai-community-daily-life",
  category: "Undeserved Community",
  name: "L'IA pour la vie quotidienne et la communauté",
  skills: "Organiser la semaine de la famille, Faire un plan de repas avec un petit budget, Trouver et vérifier l'aide locale, Animer une réunion de quartier, Écrire des messages de groupe clairs",
  outcome: "utiliser un assistant d'IA gratuit pour organiser la vie quotidienne et le travail communautaire : planifier la semaine et les repas de votre famille avec un petit budget, trouver de l'aide locale et la vérifier, et organiser une petite réunion de quartier avec un ordre du jour, un rappel et une liste de ressources.",
  about: [
    "La vie est chargée : horaires de travail, sorties d'école, rendez-vous, église, sport et aide aux voisins. Un assistant d'IA gratuit peut vous enlever une partie de l'organisation.",
    "Au chapitre 1, vous planifierez une semaine en famille et des repas avec un petit budget, et vous trouverez de l'aide locale quand l'argent manque. Au chapitre 2, vous utiliserez l'IA pour rassembler votre communauté : un ordre du jour de réunion, des messages de groupe clairs et une liste de ressources locales.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche « Essayez maintenant ». Un contrôle des connaissances termine chaque chapitre, et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Organisez une petite réunion pour un groupe dont vous faites partie (association de quartier, groupe de parents, groupe d'église ou association de locataires). Utilisez un assistant d'IA pour écrire un ordre du jour d'une page et un court message de rappel, puis faites une liste de trois ressources d'aide locale (par exemple nourriture, factures d'eau ou d'électricité et aide à l'emploi) que vous avez vérifiées vous-même sur des sites officiels ou par le 211 (ou le service d'aide de votre pays).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes de communautés mal desservies qui jonglent entre le travail, la famille et la vie de quartier : parents, aidants, et membres ou responsables d'associations de quartier, de groupes de parents, de groupes d'église et d'associations de locataires.",
    startingPoint: "Ils utilisent un téléphone pour appeler, envoyer des SMS et quelques applications, et organisent leur semaine de tête ou sur papier. Peu ont utilisé un assistant d'IA pour s'organiser, et beaucoup ne connaissent pas le 211.",
    gap: "Les familles occupées ratent des rendez-vous, dépensent trop pour la nourriture et ont du mal à trouver de l'aide locale, et les groupes de quartier perdent du temps dans des réunions mal préparées. Un assistant d'IA gratuit peut prendre en charge l'organisation, mais les apprenants doivent l'utiliser en sécurité et vérifier tout ce qu'il dit sur les programmes locaux.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (niveau fin d'école primaire)",
      "Appareils : un smartphone ou un ordinateur de bibliothèque",
      "Coût : seulement des outils gratuits",
      "L'IA ne connaît pas les prix du jour ni les programmes ouverts ; les apprenants vérifient auprès du 211 et des sources officielles",
      "Vie privée : seulement des prénoms ou des rôles, et aucun détail de santé ou d'argent sur d'autres personnes dans les demandes"
    ],
    prerequisites: "Aucun. Les apprenants qui découvrent les assistants d'IA peuvent d'abord suivre « Introduction à l'IA et autonomie numérique »."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Face à une semaine chargée entre travail, école et rendez-vous", action: "utiliser un assistant d'IA pour transformer votre liste en un planning jour par jour et régler les conflits d'horaires", standard: "en utilisant seulement des prénoms ou des rôles, et en faisant vous-même les choix finaux" },
    { id: "O2", condition: "À partir de la taille de votre foyer, de votre budget et des aliments que vous avez", action: "créer avec un assistant d'IA un plan de cinq dîners et une liste de courses", standard: "en vérifiant le coût avec les vrais prix de votre magasin" },
    { id: "O3", condition: "Face à un vrai besoin comme la nourriture, le loyer ou les factures d'eau et d'électricité", action: "trouver un programme local par le 211 et le confirmer avec une source officielle", standard: "en notant son numéro de téléphone officiel avant d'y aller" },
    { id: "O4", condition: "Pour un groupe dont vous faites partie", action: "écrire avec un assistant d'IA un ordre du jour de réunion d'une page", standard: "avec les sujets dans l'ordre, les horaires, le sujet le plus important au début et du temps pour les questions" },
    { id: "O5", condition: "Avant et après une réunion de groupe", action: "écrire un rappel et transformer des notes rapides en compte rendu avec les actions à faire", standard: "sans détails privés, et vérifié avec une personne qui était présente" },
    { id: "O6", condition: "Pour trois besoins de votre communauté", action: "créer une liste de ressources d'une page avec les numéros officiels et les horaires que vous avez vérifiés vous-même", standard: "datée du jour de la vérification" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : L'IA à la maison",
      lessons: [
        {
          objectives: ["O1"],
          title: "Planifier la semaine de votre famille",
          minutes: 5,
          goal: "Utiliser un assistant d'IA pour transformer une semaine désordonnée en un planning clair.",
          text: [
            "Quand les horaires de travail, l'école, les rendez-vous et les courses s'accumulent, on oublie facilement quelque chose. Un assistant d'IA peut trier votre liste en un plan jour par jour.",
            "Écrivez tout ce que vous devez faire cette semaine, dans n'importe quel ordre, avec les heures que vous connaissez déjà. Utilisez des prénoms ou des rôles (« mon aîné », « Grand-mère ») plutôt que des noms complets. Puis demandez : « Mets ceci dans un planning jour par jour. Montre ce qui se chevauche. »",
            "Cherchez les chevauchements, quand deux choses ont lieu en même temps. Demandez des idées à l'IA, comme le covoiturage ou déplacer une course, mais c'est vous qui faites le choix final."
          ],
          steps: ["Listez tout ce qu'il y a à faire dans la semaine, dans n'importe quel ordre, avec les heures connues.", "Demandez à l'IA de le trier en planning jour par jour et de montrer les chevauchements.", "Demandez des idées pour régler chaque chevauchement.", "Recopiez le plan final dans l'agenda de votre téléphone ou sur une feuille sur le frigo."],
          words: [["Planning", "un plan qui montre ce qui se passe chaque jour et à quelle heure."], ["Chevauchement", "quand deux choses sont prévues au même moment."]],
          slides: [
            { title: "Trop de choses à retenir ?", bullets: ["Travail, école, rendez-vous, courses", "L'IA peut en faire un plan"] },
            { title: "Comment demander", bullets: ["Listez tout, dans n'importe quel ordre", "Prénoms ou rôles, pas de noms complets", "« Fais un planning jour par jour. Montre les chevauchements. »"] },
            { title: "Réglez les chevauchements", bullets: ["Demandez des idées : covoiturage, déplacer une course", "C'est vous qui choisissez", "Mettez-le dans l'agenda ou sur le frigo"] }
          ],
          tryIt: "Listez tout ce que votre foyer doit faire cette semaine. Demandez à un assistant d'IA d'en faire un planning jour par jour et de signaler les chevauchements.",
          youCanNow: "transformer une semaine chargée en planning clair et repérer tôt les chevauchements.",
          quickCheck: [
            { objective: "O1", q: "Que devez-vous écrire d'abord quand vous organisez votre semaine avec l'IA ?", options: ["Tout ce que vous avez à faire, avec les horaires connus", "Les noms complets et les dates de naissance de votre famille", "Seulement le jour le plus difficile", "Le mot de passe de votre travail"], answer: 0, why: "L'IA a besoin de toute votre liste et des horaires connus pour en faire un planning." },
            { objective: "O1", q: "Pour régler un conflit d'horaires, l'IA propose d'annuler le rendez-vous médical de votre enfant. Que faites-vous ?", options: ["Faire ce que dit l'IA", "Demander d'autres idées, comme le covoiturage, et choisir vous-même", "Tout annuler ce jour-là", "Arrêter d'utiliser le planning"], answer: 1, why: "L'IA donne des idées, mais c'est vous qui faites le choix final pour votre famille." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Faire un plan de repas avec un petit budget",
          minutes: 5,
          goal: "Faire une semaine de repas et une liste de courses qui respectent votre budget.",
          text: [
            "Un assistant d'IA peut planifier des repas selon ce que vous avez déjà, ce que votre famille aime et ce que vous pouvez dépenser.",
            "Dites-lui : combien de personnes, votre budget, les aliments que votre famille aime ou ne peut pas manger, ce qu'il y a dans votre cuisine, et le temps que vous avez pour cuisiner. Demandez une liste de courses classée par rayon du magasin.",
            "L'IA ne connaît pas les prix du jour dans votre magasin : prenez ses estimations de coût comme approximatives. Regardez les promotions ou l'application du magasin. Pour les besoins de santé comme le diabète ou les allergies, suivez les conseils de votre médecin ou de votre diététicien."
          ],
          steps: ["Regardez la nourriture que vous avez déjà.", "Dites à l'IA le nombre de personnes, le budget, les goûts, les allergies et le temps de cuisine.", "Demandez cinq dîners et une liste de courses classée par rayon.", "Comparez avec les vrais prix de votre magasin et ajustez."],
          words: [["Budget", "la somme d'argent que vous prévoyez de dépenser."], ["Produits de base", "les aliments de base que vous utilisez souvent, comme le riz, les haricots, la farine et l'huile."]],
          slides: [
            { title: "L'IA peut planifier les repas", bullets: ["Selon ce que vous avez déjà", "Selon ce que votre famille aime", "Selon votre budget"] },
            { title: "Dites-lui", bullets: ["Nombre de personnes et budget", "Goûts, allergies, temps de cuisine", "Ce qu'il y a déjà dans votre cuisine"] },
            { title: "Vérifiez avant les courses", bullets: ["L'IA ne connaît pas les prix du jour", "Regardez les promotions ou l'application du magasin", "Santé : suivez votre médecin"] }
          ],
          tryIt: "Demandez à un assistant d'IA cinq dîners pour votre foyer avec les aliments que vous avez déjà et un budget que vous choisissez, avec une liste de courses classée par rayon.",
          youCanNow: "faire un plan de repas et une liste de courses avec un petit budget grâce à l'IA, et les comparer aux vrais prix.",
          quickCheck: [
            { objective: "O2", q: "Pourquoi classer une liste de courses par rayon ?", options: ["Ça rend la nourriture moins chère", "L'IA en a besoin", "Ça rend les courses plus rapides", "Les magasins l'exigent"], answer: 2, why: "Classer par rayon, comme les fruits et légumes ou les produits laitiers, fait gagner du temps au magasin." },
            { objective: "O2", q: "Vous avez du riz, des haricots et des œufs à la maison. Que dites-vous à l'IA ?", options: ["Rien ; elle devinera", "Seulement votre budget", "Votre restaurant préféré", "Les aliments que vous avez déjà, pour qu'elle les utilise dans le plan"], answer: 3, why: "Prévoir les repas avec ce que vous avez déjà évite les dépenses et le gaspillage." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Trouver de l'aide locale quand l'argent manque",
          minutes: 5,
          goal: "Trouver une ressource locale pour un vrai besoin et la vérifier auprès d'une source officielle.",
          text: [
            "Beaucoup de familles ont parfois besoin d'aide : pour la nourriture, le loyer, les factures d'eau ou d'électricité, la garde d'enfants ou un emploi. Demander de l'aide fait partie de prendre soin de sa famille.",
            "Aux États-Unis, le 211 est une ligne confidentielle qui met les gens en contact avec l'aide locale pour le logement, la nourriture, les transports, la santé et plus. Vous pouvez composer le 211, et beaucoup de régions proposent aussi un service par SMS ou par discussion en ligne. Ailleurs, utilisez le numéro d'aide sociale de votre pays ou adressez-vous à la mairie. Votre bibliothèque et votre centre communautaire tiennent aussi des listes d'aide locale.",
            "Un assistant d'IA peut vous aider à comprendre quels types d'aide existent et quelles questions poser. Mais il peut citer des lieux qui ont fermé ou des programmes qui ont changé. Confirmez toujours avec le 211, le site officiel du programme ou un appel."
          ],
          steps: ["Nommez le besoin : nourriture, loyer, factures, garde d'enfants ou emploi.", "Demandez à une IA quels types de programmes aident en général et quoi leur demander.", "Composez le 211 ou allez sur 211.org pour trouver de vrais programmes locaux.", "Appelez ou consultez le site officiel du programme avant d'y aller."],
          words: [["Ressource", "un lieu, un programme ou une personne qui peut aider pour un besoin."], ["Confidentiel", "gardé privé ; pas partagé sans votre permission."]],
          sources: [{ name: "211.org : À propos du 211", url: "https://www.211.org/about-us" }],
          slides: [
            { title: "Demander de l'aide est une force", bullets: ["Nourriture, loyer, factures, garde d'enfants, emploi", "Beaucoup de programmes locaux existent"] },
            { title: "Le 211 vous met en contact", bullets: ["Composez le 211, à toute heure (États-Unis)", "Confidentiel, et peut être anonyme", "Aussi : listes de la bibliothèque et du centre communautaire"] },
            { title: "Utilisez l'IA, puis confirmez", bullets: ["L'IA explique quels types d'aide existent", "Elle peut citer des lieux fermés", "Confirmez avec le 211 ou le site officiel"] }
          ],
          tryIt: "Choisissez un besoin de votre famille ou d'un voisin. Demandez à une IA quels types de programmes aident pour ce besoin. Puis trouvez un vrai programme local par 211.org ou en composant le 211 (ou par le service d'aide de votre pays), et notez son numéro de téléphone officiel.",
          youCanNow: "trouver une ressource locale pour un vrai besoin et la confirmer auprès d'une source officielle.",
          quickCheck: [
            { objective: "O3", q: "À part en composant le 211, comment peut-on souvent le joindre ?", options: ["Par SMS, par chat en ligne ou sur 211.org", "Seulement en personne", "En envoyant une lettre", "Par une application payante"], answer: 0, why: "Dans beaucoup de régions, le 211 répond par SMS ou par chat en ligne, et sur 211.org." },
            { objective: "O3", q: "Un voisin a besoin d'aide pour payer sa facture d'électricité. Quelle est une bonne première étape avec l'IA ?", options: ["Demander à l'IA de payer la facture", "Demander quels types de programmes aident et quelles questions leur poser", "Publier la facture du voisin en ligne", "Attendre que le courant soit coupé"], answer: 1, why: "L'IA peut expliquer les types d'aide et les questions à poser ; ensuite vous trouvez de vrais programmes par le 211." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : L'IA à la maison",
        questions: [
          { objective: "O1", q: "Quand vous listez la semaine de votre famille pour une IA, comment nommer les personnes ?", options: ["Noms complets avec dates de naissance", "Prénoms ou rôles comme « mon aîné »", "Numéros de sécurité sociale", "Adresse de chaque personne"], answer: 1, why: "Les prénoms ou les rôles gardent les détails privés à l'écart." },
          { objective: "O1", q: "Qu'est-ce qu'un chevauchement dans un planning ?", options: ["Deux choses prévues au même moment", "Un jour libre", "Un jour férié", "Un projet annulé"], answer: 0, why: "Un chevauchement, c'est quand deux projets se superposent." },
          { objective: "O2", q: "L'IA dit que votre liste de courses coûtera 42 $. Que faites-vous ?", options: ["La croire exactement", "Payer 42 $ avant les courses", "Le prendre comme une estimation et vérifier les prix du magasin", "Ignorer la liste"], answer: 2, why: "L'IA ne connaît pas les prix du jour dans votre magasin." },
          { objective: "O2", q: "Votre enfant a une allergie alimentaire. Quels conseils passent en premier pour les repas ?", options: ["Ceux de l'IA", "Une publication sur les réseaux sociaux", "Un site au hasard", "Ceux de votre médecin ou diététicien"], answer: 3, why: "Les besoins de santé suivent l'avis d'un professionnel." },
          { objective: "O3", q: "L'IA cite une banque alimentaire près de chez vous. Que faire avant d'y aller ?", options: ["La confirmer avec le 211, son site officiel ou un appel", "Y aller directement", "La publier en ligne", "Redemander à l'IA"], answer: 0, why: "L'IA peut citer des lieux fermés ; confirmez d'abord." }
        ]
      }
    },
    {
      name: "Chapitre 2 : L'IA pour votre communauté",
      lessons: [
        {
          objectives: ["O4"],
          title: "Faire un ordre du jour de réunion",
          minutes: 5,
          goal: "Utiliser un assistant d'IA pour écrire un ordre du jour clair d'une page.",
          text: [
            "Les groupes communautaires avancent mieux quand les réunions ont un plan. Un ordre du jour est une courte liste de ce que la réunion va traiter, dans l'ordre, avec le temps prévu pour chaque partie.",
            "Dites à l'IA le groupe, le but, la durée de la réunion et les sujets. Par exemple : « Fais un ordre du jour d'une heure pour notre association de locataires. Sujets : les machines à laver en panne, un repas d'été, et le choix d'un nouveau secrétaire. Garde du temps pour les questions. »",
            "Relisez-le en pensant aux besoins de votre groupe. Déplacez des sujets, ajoutez un mot d'accueil, et faites en sorte que le sujet le plus important ne soit pas coincé à la fin."
          ],
          steps: ["Notez le groupe, le but, la durée et les sujets.", "Demandez à l'IA un ordre du jour d'une page avec un temps pour chaque sujet.", "Mettez le sujet le plus important au début.", "Ajoutez un accueil et du temps pour les questions, puis partagez-le avant la réunion."],
          words: [["Ordre du jour", "la liste des sujets d'une réunion, dans l'ordre, avec les horaires."], ["Secrétaire", "la personne d'un groupe qui prend les notes et garde les documents."]],
          slides: [
            { title: "Les réunions ont besoin d'un plan", bullets: ["L'ordre du jour liste les sujets dans l'ordre", "Chaque sujet a un temps"] },
            { title: "Dites à l'IA", bullets: ["Le groupe et le but", "La durée de la réunion", "Les sujets"] },
            { title: "Adaptez-le", bullets: ["Le sujet le plus important au début", "Ajoutez un accueil et des questions", "Partagez-le avant la réunion"] }
          ],
          tryIt: "Demandez à un assistant d'IA d'écrire un ordre du jour d'une heure pour un vrai groupe dont vous faites partie, avec trois sujets et du temps pour les questions.",
          youCanNow: "faire un ordre du jour de réunion clair avec un assistant d'IA.",
          quickCheck: [
            { objective: "O4", q: "Quelles quatre choses une demande d'ordre du jour doit-elle dire à l'IA ?", options: ["Les numéros de téléphone des membres", "Seulement la date", "Le groupe, le but, la durée et les sujets", "La liste des collations de la réunion"], answer: 2, why: "Avec le groupe, le but, la durée et les sujets, l'IA peut faire un ordre du jour utile." },
            { objective: "O4", q: "L'IA a mis le choix d'un nouveau secrétaire à la fin, avec 5 minutes. C'est votre sujet principal. Que faites-vous ?", options: ["Le laisser ainsi", "Le retirer", "Raccourcir la réunion", "Le placer plus tôt et lui donner plus de temps"], answer: 3, why: "Le sujet le plus important doit venir tôt pour ne pas être bâclé à la fin." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Écrire des messages de groupe et des comptes rendus clairs",
          minutes: 5,
          goal: "Écrire un rappel de réunion et transformer des notes rapides en court compte rendu.",
          text: [
            "Un bon rappel dit quoi, quand, où et quoi apporter, en quelques lignes courtes. Demandez-en un à l'IA sur un ton aimable, et une deuxième version dans une autre langue si votre groupe en a besoin.",
            "Après la réunion, l'IA peut transformer des notes rapides en compte rendu propre : ce qui a été décidé, qui fait quoi, et pour quand. Laissez de côté les détails privés, comme la santé ou les problèmes d'argent de quelqu'un.",
            "Avant d'envoyer, vérifiez les noms, les dates et les décisions avec une personne qui était présente. Un compte rendu doit correspondre à ce qui s'est vraiment passé."
          ],
          steps: ["Demandez un rappel aimable avec quoi, quand, où et quoi apporter.", "Demandez une version dans une autre langue si besoin.", "Après la réunion, collez vos notes rapides sans détails privés.", "Demandez un compte rendu : décisions, qui fait quoi, et pour quand.", "Vérifiez-le avec une personne présente, puis envoyez."],
          words: [["Compte rendu", "une version courte qui garde seulement les points principaux."], ["Action à mener", "une tâche que quelqu'un a accepté de faire après une réunion."]],
          slides: [
            { title: "Un bon rappel", bullets: ["Quoi, quand, où, quoi apporter", "Court et aimable", "Une deuxième langue si besoin"] },
            { title: "Des notes au compte rendu", bullets: ["Collez les notes, sans détails privés", "Demandez les décisions et les actions", "Qui fait quoi, pour quand"] },
            { title: "Vérifiez avant d'envoyer", bullets: ["Noms, dates et décisions", "Demandez à une personne présente"] }
          ],
          tryIt: "Demandez à un assistant d'IA un rappel de trois lignes pour la réunion de la leçon 4. Puis écrivez cinq notes d'entraînement rapides et demandez-lui d'en faire un compte rendu avec des actions à mener.",
          youCanNow: "écrire des rappels de réunion clairs et transformer des notes en compte rendu avec des actions à mener.",
          quickCheck: [
            { objective: "O5", q: "Que contient un compte rendu de réunion ?", options: ["Les décisions, qui fait quoi, et pour quand", "Les problèmes privés de chacun", "Seulement les collations", "Chaque mot prononcé"], answer: 0, why: "Un compte rendu montre ce qui a été décidé et qui fera quoi pour quand." },
            { objective: "O5", q: "Vos notes rapides disent qu'un membre est en retard de loyer. Que faites-vous avant de les coller dans l'IA ?", options: ["Le laisser ; c'est utile", "Retirer ce détail privé", "Ajouter son nom complet", "Envoyer les notes à toute la rue"], answer: 1, why: "Les détails privés sur l'argent ou la santé de quelqu'un restent hors des demandes à l'IA et des comptes rendus." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Faire une liste de ressources pour la communauté",
          minutes: 5,
          goal: "Faire une liste d'une page de l'aide locale, que vous avez vérifiée vous-même.",
          text: [
            "Une liste de ressources aide les voisins à trouver de l'aide vite. Tenez-vous à une page : le type d'aide, le nom du programme, le numéro de téléphone ou le site officiel, et les horaires.",
            "Utilisez l'IA pour préparer la mise en page et expliquer chaque programme en une phrase simple. Prenez les vrais noms, numéros et horaires auprès du 211, du site officiel du programme ou par un appel, pas auprès de l'IA.",
            "Mettez la date en bas (« Vérifié le ... »). Les programmes changent : revérifiez la liste tous les quelques mois."
          ],
          steps: ["Choisissez trois besoins de votre communauté.", "Trouvez un vrai programme pour chacun par le 211 ou des sites officiels.", "Demandez à l'IA une mise en page simple d'une page et une description simple d'une ligne pour chacun.", "Remplissez vous-même les numéros et horaires officiels.", "Ajoutez la date de vérification."],
          words: [["Mise en page", "la façon dont les mots et les cadres sont disposés sur une page."]],
          sources: [{ name: "211.org : trouver votre 211 local", url: "https://www.211.org/about-us" }],
          slides: [
            { title: "Une liste de ressources d'une page", bullets: ["Type d'aide et nom du programme", "Téléphone ou site officiel", "Horaires"] },
            { title: "Qui fait quoi", bullets: ["L'IA : mise en page et descriptions simples", "Vous : vrais noms, numéros, horaires de sources officielles"] },
            { title: "Gardez-la à jour", bullets: ["Écrivez « Vérifié le » et la date", "Revérifiez tous les quelques mois"] }
          ],
          tryIt: "Tâche finale : organisez une petite réunion pour votre groupe avec un ordre du jour et un message de rappel écrits avec l'IA, et faites une liste d'une page de trois ressources d'aide locale que vous avez vérifiées vous-même.",
          youCanNow: "organiser une réunion de quartier et partager une liste vérifiée de l'aide locale.",
          quickCheck: [
            { objective: "O6", q: "Quelles quatre choses vont sur chaque ligne d'une liste de ressources ?", options: ["Nom, âge, adresse et métier", "Prix, couleur, taille et marque", "Type d'aide, nom du programme, téléphone ou site officiel, et horaires", "Seulement le nom du programme"], answer: 2, why: "Ces quatre éléments permettent aux voisins de trouver et de joindre l'aide vite." },
            { objective: "O6", q: "L'IA ajoute un numéro de téléphone pour une banque alimentaire. Que faites-vous ?", options: ["L'utiliser tel quel", "Retirer la banque alimentaire de la liste", "Redemander à l'IA", "Le remplacer par le numéro donné par le 211 ou le site officiel"], answer: 3, why: "Les vrais numéros et horaires viennent du 211 ou des sources officielles, pas de l'IA." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : L'IA pour votre communauté",
        questions: [
          { objective: "O4", q: "Qu'est-ce qu'un ordre du jour ?", options: ["La liste des sujets d'une réunion, dans l'ordre, avec les horaires", "Une facture", "Une discussion de groupe", "Une feuille de présence"], answer: 0, why: "Un ordre du jour planifie ce que la réunion traite." },
          { objective: "O4", q: "Où mettre le sujet le plus important dans un ordre du jour ?", options: ["Tout à la fin", "Tôt dans la réunion", "Pas dans l'ordre du jour", "Dans une autre réunion l'an prochain"], answer: 1, why: "Les premiers sujets reçoivent le plus de temps et d'attention." },
          { objective: "O5", q: "Un bon rappel de réunion contient :", options: ["Les numéros de téléphone de tout le monde", "L'adresse des membres", "Quoi, quand, où et quoi apporter", "Une longue histoire du groupe"], answer: 2, why: "Ces quatre détails sont ce dont les gens ont besoin." },
          { objective: "O5", q: "Vos notes parlent du problème médical d'un membre. Avant de les donner à l'IA, vous :", options: ["Le laissez", "Ajoutez plus de détails", "Le partagez dans la discussion de groupe", "Retirez ce détail privé"], answer: 3, why: "Les détails privés sur les autres restent hors des outils d'IA." },
          { objective: "O6", q: "D'où doivent venir les numéros de téléphone d'une liste de ressources ?", options: ["Du 211 ou du site officiel du programme", "De ce que dit l'IA", "D'une supposition", "D'une vieille affiche d'il y a des années"], answer: 0, why: "L'IA peut donner de faux numéros ; les sources officielles sont justes." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour la vie quotidienne et la communauté",
    questions: [
      { objective: "O1", q: "Pour planifier la semaine de votre famille avec l'IA, d'abord :", options: ["Listez tout ce que vous devez faire, avec les heures connues", "Écrivez votre numéro de compte", "Achetez une application d'agenda", "Appelez le 211"], answer: 0, why: "L'IA a besoin de votre liste pour la trier." },
      { objective: "O1", q: "Quelle est une façon sûre de nommer les membres de la famille dans une consigne ?", options: ["Noms complets et dates de naissance", "« Mon aîné » ou des prénoms", "Numéros d'élève", "Numéros de sécurité sociale"], answer: 1, why: "Les rôles ou les prénoms gardent les détails privés." },
      { objective: "O1", q: "Quand l'IA trouve un chevauchement, vous :", options: ["Laissez l'IA décider", "L'ignorez", "Demandez des idées, puis faites le choix final", "Annulez tout"], answer: 2, why: "L'IA propose ; vous décidez." },
      { objective: "O2", q: "Une consigne de plan de repas doit contenir :", options: ["Votre mot de passe", "Votre adresse", "Le code de votre carte", "Le nombre de personnes, le budget, les goûts et les allergies"], answer: 3, why: "Ces détails donnent un plan utile." },
      { objective: "O2", q: "Pourquoi regarder les promotions du magasin après que l'IA a fait votre liste ?", options: ["L'IA ne connaît pas les prix du jour", "L'IA surestime toujours", "Le magasin l'exige", "C'est la loi"], answer: 0, why: "Les estimations de coût de l'IA sont approximatives." },
      { objective: "O2", q: "Les produits de base sont :", options: ["Seulement des fournitures de bureau", "Des aliments de base utilisés souvent, comme le riz et les haricots", "Des desserts raffinés", "Des repas au restaurant"], answer: 1, why: "Les produits de base sont des aliments de tous les jours." },
      { objective: "O3", q: "Le 211 est :", options: ["Une application d'IA", "Un magasin", "Une ligne confidentielle qui met en contact avec l'aide locale", "Une banque"], answer: 2, why: "Le 211 vous met en contact avec l'aide locale." },
      { objective: "O3", q: "Les appels au 211 sont :", options: ["Partagés en ligne", "Enregistrés pour la publicité", "Réservés aux entreprises", "Confidentiels et peuvent être anonymes"], answer: 3, why: "Le 211 indique que les appels sont confidentiels et peuvent être anonymes." },
      { objective: "O3", q: "Une IA vous donne une liste de banques alimentaires. Avant d'y aller, vous :", options: ["En confirmez une avec le 211, son site officiel ou un appel", "Allez dans toutes", "Lui faites entièrement confiance", "Publiez la liste en ligne"], answer: 0, why: "Les programmes ferment ou changent ; confirmez d'abord." },
      { objective: "O3", q: "Demander de l'aide pour la nourriture ou les factures, c'est :", options: ["Quelque chose à cacher", "Une façon de prendre soin de sa famille", "Interdit", "Seulement pour les autres"], answer: 1, why: "Utiliser l'aide locale est une démarche normale et intelligente." },
      { objective: "O4", q: "Un ordre du jour de réunion doit contenir :", options: ["Seulement la date", "Les numéros de téléphone des membres", "Les sujets dans l'ordre avec les horaires", "L'adresse de tout le monde"], answer: 2, why: "Les sujets et les horaires gardent la réunion sur les rails." },
      { objective: "O4", q: "Une bonne consigne d'ordre du jour indique à l'IA :", options: ["Rien", "Votre mot de passe", "Votre banque", "Le groupe, le but, la durée et les sujets"], answer: 3, why: "Ces détails donnent un ordre du jour utile." },
      { objective: "O4", q: "Quand partager l'ordre du jour ?", options: ["Avant la réunion", "Jamais", "Un mois après", "Seulement au président"], answer: 0, why: "Le partager tôt aide les gens à venir préparés." },
      { objective: "O5", q: "Des membres de votre groupe parlent une autre langue. Pour le rappel, vous pouvez :", options: ["Les oublier", "Demander à l'IA une version dans cette langue", "N'utiliser que des images", "Ne rien envoyer"], answer: 1, why: "Une version dans une deuxième langue inclut plus de membres." },
      { objective: "O5", q: "Une action à mener est :", options: ["Un film", "Un type d'application", "Une tâche que quelqu'un a accepté de faire après une réunion", "Un en-cas"], answer: 2, why: "Les actions disent qui fait quoi, pour quand." },
      { objective: "O5", q: "Avant d'envoyer un compte rendu de réunion, vous devez :", options: ["Ajouter des détails privés", "L'envoyer sans le lire", "Supprimer les notes", "Le vérifier avec une personne présente"], answer: 3, why: "Un compte rendu doit correspondre à ce qui s'est passé." },
      { objective: "O6", q: "Sur une liste de ressources, qui doit remplir les numéros et les horaires ?", options: ["Vous, à partir de sources officielles", "L'IA", "Personne", "Une publicité surgissante"], answer: 0, why: "Les sources officielles donnent les bons numéros." },
      { objective: "O6", q: "Pourquoi ajouter « Vérifié le » et une date à votre liste de ressources ?", options: ["C'est joli", "Les programmes changent, donc les gens savent si elle est récente", "La loi l'exige", "Pour la rallonger"], answer: 1, why: "Une date montre quand elle a été confirmée pour la dernière fois." },
      { objective: "O6", q: "À quelle fréquence revérifier une liste de ressources ?", options: ["Jamais", "Tous les dix ans", "Tous les quelques mois", "Seulement si quelqu'un se plaint"], answer: 2, why: "Les programmes changent, donc revérifiez souvent." },
      { objective: "O6", q: "Dans la tâche finale, la liste de ressources contient :", options: ["Dix lieux inventés par l'IA", "L'adresse des membres", "Un seul lieu", "Trois ressources locales que vous avez vérifiées vous-même"], answer: 3, why: "La tâche demande trois ressources que vous avez confirmées." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      6,
      8,
      10,
      13,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Ordre du jour",
        objective: "O4",
        notYet: "Pas d'ordre du jour, ou des sujets sans ordre ni horaires.",
        meets: "Une page avec les sujets dans l'ordre, les horaires et du temps pour les questions.",
        exceeds: "Le sujet le plus important est au début, et il y a un mot d'accueil."
      },
      {
        name: "Message de rappel",
        objective: "O5",
        notYet: "Il manque quoi, quand ou où.",
        meets: "Un rappel court et aimable avec quoi, quand, où et ce qu'il faut apporter.",
        exceeds: "A aussi une version dans une deuxième langue dont le groupe a besoin."
      },
      {
        name: "Ressources vérifiées",
        objective: "O3",
        notYet: "Les programmes ou les numéros viennent de l'IA et n'ont pas été vérifiés.",
        meets: "Trois vrais programmes locaux, chacun confirmé par le 211, un site officiel ou un appel.",
        exceeds: "Peut dire comment chacun a été vérifié."
      },
      {
        name: "Présentation de la liste",
        objective: "O6",
        notYet: "Il manque des numéros de téléphone, des horaires ou une date.",
        meets: "Une page avec le type d'aide, le programme, le numéro ou le site officiel, les horaires, et une date « Vérifié le ».",
        exceeds: "Chaque programme a une description simple d'une ligne."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui tiennent une réunion de groupe préparée avec un ordre du jour dans les 30 jours (questionnaire de suivi)",
      "Apprenants ou voisins qui entrent en contact avec un programme d'aide local trouvé par le 211",
      "Les partenaires communautaires signalent des listes de ressources partagées et tenues à jour"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone avec internet, ou un ordinateur de bibliothèque ou de centre communautaire",
      "Un assistant d'IA gratuit : Microsoft Copilot, ChatGPT ou Google Gemini",
      "Un accès au 211 par téléphone, par SMS ou sur 211.org",
      "Du papier et un stylo, ou le calendrier du téléphone, pour le planning et les listes",
      "Environ 60 minutes au total : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Faites le cours avec un vrai groupe, comme un groupe de parents ou une association de locataires, pour que l'ordre du jour et la liste de ressources servent tout de suite.",
      "Montrez le 211 en direct et rappelez aux apprenants que demander de l'aide est normal.",
      "Vérifiez les détails privés dans les demandes : seulement des prénoms ou des rôles, et rien sur la santé ou l'argent des autres.",
      "Rassemblez les listes de ressources vérifiées en une seule liste partagée pour le groupe, avec la date de vérification.",
      "Notez la tâche finale avec la grille d'évaluation, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
