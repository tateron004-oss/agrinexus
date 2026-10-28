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
  chapters: [
    {
      name: "Chapitre 1 : L'IA à la maison",
      lessons: [
        {
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
          youCanNow: "transformer une semaine chargée en planning clair et repérer tôt les chevauchements."
        },
        {
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
          youCanNow: "faire un plan de repas et une liste de courses avec un petit budget grâce à l'IA, et les comparer aux vrais prix."
        },
        {
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
          youCanNow: "trouver une ressource locale pour un vrai besoin et la confirmer auprès d'une source officielle."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : L'IA à la maison",
        questions: [
          { q: "Quand vous listez la semaine de votre famille pour une IA, comment nommer les personnes ?", options: ["Noms complets avec dates de naissance", "Prénoms ou rôles comme « mon aîné »", "Numéros de sécurité sociale", "Adresse de chaque personne"], answer: 1, why: "Les prénoms ou les rôles gardent les détails privés à l'écart." },
          { q: "Qu'est-ce qu'un chevauchement dans un planning ?", options: ["Deux choses prévues au même moment", "Un jour libre", "Un jour férié", "Un projet annulé"], answer: 0, why: "Un chevauchement, c'est quand deux projets se superposent." },
          { q: "L'IA dit que votre liste de courses coûtera 42 $. Que faites-vous ?", options: ["La croire exactement", "Payer 42 $ avant les courses", "Le prendre comme une estimation et vérifier les prix du magasin", "Ignorer la liste"], answer: 2, why: "L'IA ne connaît pas les prix du jour dans votre magasin." },
          { q: "Votre enfant a une allergie alimentaire. Quels conseils passent en premier pour les repas ?", options: ["Ceux de l'IA", "Une publication sur les réseaux sociaux", "Un site au hasard", "Ceux de votre médecin ou diététicien"], answer: 3, why: "Les besoins de santé suivent l'avis d'un professionnel." },
          { q: "L'IA cite une banque alimentaire près de chez vous. Que faire avant d'y aller ?", options: ["La confirmer avec le 211, son site officiel ou un appel", "Y aller directement", "La publier en ligne", "Redemander à l'IA"], answer: 0, why: "L'IA peut citer des lieux fermés ; confirmez d'abord." }
        ]
      }
    },
    {
      name: "Chapitre 2 : L'IA pour votre communauté",
      lessons: [
        {
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
          youCanNow: "faire un ordre du jour de réunion clair avec un assistant d'IA."
        },
        {
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
          youCanNow: "écrire des rappels de réunion clairs et transformer des notes en compte rendu avec des actions à mener."
        },
        {
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
          youCanNow: "organiser une réunion de quartier et partager une liste vérifiée de l'aide locale."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : L'IA pour votre communauté",
        questions: [
          { q: "Qu'est-ce qu'un ordre du jour ?", options: ["La liste des sujets d'une réunion, dans l'ordre, avec les horaires", "Une facture", "Une discussion de groupe", "Une feuille de présence"], answer: 0, why: "Un ordre du jour planifie ce que la réunion traite." },
          { q: "Où mettre le sujet le plus important dans un ordre du jour ?", options: ["Tout à la fin", "Tôt dans la réunion", "Pas dans l'ordre du jour", "Dans une autre réunion l'an prochain"], answer: 1, why: "Les premiers sujets reçoivent le plus de temps et d'attention." },
          { q: "Un bon rappel de réunion contient :", options: ["Les numéros de téléphone de tout le monde", "L'adresse des membres", "Quoi, quand, où et quoi apporter", "Une longue histoire du groupe"], answer: 2, why: "Ces quatre détails sont ce dont les gens ont besoin." },
          { q: "Vos notes parlent du problème médical d'un membre. Avant de les donner à l'IA, vous :", options: ["Le laissez", "Ajoutez plus de détails", "Le partagez dans la discussion de groupe", "Retirez ce détail privé"], answer: 3, why: "Les détails privés sur les autres restent hors des outils d'IA." },
          { q: "D'où doivent venir les numéros de téléphone d'une liste de ressources ?", options: ["Du 211 ou du site officiel du programme", "De ce que dit l'IA", "D'une supposition", "D'une vieille affiche d'il y a des années"], answer: 0, why: "L'IA peut donner de faux numéros ; les sources officielles sont justes." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour la vie quotidienne et la communauté",
    questions: [
      { q: "Pour planifier la semaine de votre famille avec l'IA, d'abord :", options: ["Listez tout ce que vous devez faire, avec les heures connues", "Écrivez votre numéro de compte", "Achetez une application d'agenda", "Appelez le 211"], answer: 0, why: "L'IA a besoin de votre liste pour la trier." },
      { q: "Quelle est une façon sûre de nommer les membres de la famille dans une consigne ?", options: ["Noms complets et dates de naissance", "« Mon aîné » ou des prénoms", "Numéros d'élève", "Numéros de sécurité sociale"], answer: 1, why: "Les rôles ou les prénoms gardent les détails privés." },
      { q: "Quand l'IA trouve un chevauchement, vous :", options: ["Laissez l'IA décider", "L'ignorez", "Demandez des idées, puis faites le choix final", "Annulez tout"], answer: 2, why: "L'IA propose ; vous décidez." },
      { q: "Une consigne de plan de repas doit contenir :", options: ["Votre mot de passe", "Votre adresse", "Le code de votre carte", "Le nombre de personnes, le budget, les goûts et les allergies"], answer: 3, why: "Ces détails donnent un plan utile." },
      { q: "Pourquoi regarder les promotions du magasin après que l'IA a fait votre liste ?", options: ["L'IA ne connaît pas les prix du jour", "L'IA surestime toujours", "Le magasin l'exige", "C'est la loi"], answer: 0, why: "Les estimations de coût de l'IA sont approximatives." },
      { q: "Les produits de base sont :", options: ["Seulement des fournitures de bureau", "Des aliments de base utilisés souvent, comme le riz et les haricots", "Des desserts raffinés", "Des repas au restaurant"], answer: 1, why: "Les produits de base sont des aliments de tous les jours." },
      { q: "Le 211 est :", options: ["Une application d'IA", "Un magasin", "Une ligne confidentielle qui met en contact avec l'aide locale", "Une banque"], answer: 2, why: "Le 211 vous met en contact avec l'aide locale." },
      { q: "Les appels au 211 sont :", options: ["Partagés en ligne", "Enregistrés pour la publicité", "Réservés aux entreprises", "Confidentiels et peuvent être anonymes"], answer: 3, why: "Le 211 indique que les appels sont confidentiels et peuvent être anonymes." },
      { q: "Une IA vous donne une liste de banques alimentaires. Avant d'y aller, vous :", options: ["En confirmez une avec le 211, son site officiel ou un appel", "Allez dans toutes", "Lui faites entièrement confiance", "Publiez la liste en ligne"], answer: 0, why: "Les programmes ferment ou changent ; confirmez d'abord." },
      { q: "Demander de l'aide pour la nourriture ou les factures, c'est :", options: ["Quelque chose à cacher", "Une façon de prendre soin de sa famille", "Interdit", "Seulement pour les autres"], answer: 1, why: "Utiliser l'aide locale est une démarche normale et intelligente." },
      { q: "Un ordre du jour de réunion doit contenir :", options: ["Seulement la date", "Les numéros de téléphone des membres", "Les sujets dans l'ordre avec les horaires", "L'adresse de tout le monde"], answer: 2, why: "Les sujets et les horaires gardent la réunion sur les rails." },
      { q: "Une bonne consigne d'ordre du jour indique à l'IA :", options: ["Rien", "Votre mot de passe", "Votre banque", "Le groupe, le but, la durée et les sujets"], answer: 3, why: "Ces détails donnent un ordre du jour utile." },
      { q: "Quand partager l'ordre du jour ?", options: ["Avant la réunion", "Jamais", "Un mois après", "Seulement au président"], answer: 0, why: "Le partager tôt aide les gens à venir préparés." },
      { q: "Des membres de votre groupe parlent une autre langue. Pour le rappel, vous pouvez :", options: ["Les oublier", "Demander à l'IA une version dans cette langue", "N'utiliser que des images", "Ne rien envoyer"], answer: 1, why: "Une version dans une deuxième langue inclut plus de membres." },
      { q: "Une action à mener est :", options: ["Un film", "Un type d'application", "Une tâche que quelqu'un a accepté de faire après une réunion", "Un en-cas"], answer: 2, why: "Les actions disent qui fait quoi, pour quand." },
      { q: "Avant d'envoyer un compte rendu de réunion, vous devez :", options: ["Ajouter des détails privés", "L'envoyer sans le lire", "Supprimer les notes", "Le vérifier avec une personne présente"], answer: 3, why: "Un compte rendu doit correspondre à ce qui s'est passé." },
      { q: "Sur une liste de ressources, qui doit remplir les numéros et les horaires ?", options: ["Vous, à partir de sources officielles", "L'IA", "Personne", "Une publicité surgissante"], answer: 0, why: "Les sources officielles donnent les bons numéros." },
      { q: "Pourquoi ajouter « Vérifié le » et une date à votre liste de ressources ?", options: ["C'est joli", "Les programmes changent, donc les gens savent si elle est récente", "La loi l'exige", "Pour la rallonger"], answer: 1, why: "Une date montre quand elle a été confirmée pour la dernière fois." },
      { q: "À quelle fréquence revérifier une liste de ressources ?", options: ["Jamais", "Tous les dix ans", "Tous les quelques mois", "Seulement si quelqu'un se plaint"], answer: 2, why: "Les programmes changent, donc revérifiez souvent." },
      { q: "Dans la tâche finale, la liste de ressources contient :", options: ["Dix lieux inventés par l'IA", "L'adresse des membres", "Un seul lieu", "Trois ressources locales que vous avez vérifiées vous-même"], answer: 3, why: "La tâche demande trois ressources que vous avez confirmées." }
    ]
  }
};
