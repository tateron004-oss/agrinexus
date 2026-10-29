"use strict";

// Koach Learn course (French translation of athletes/athletes-sports-management-marketing.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-sports-management-marketing-fr",
  lang: "fr",
  translationOf: "athletes-sports-management-marketing",
  category: "Athletes",
  name: "Marketing en management du sport",
  skills: "Définir l'offre et le public d'un événement, Écrire un plan de promotion d'une page, Construire une offre de parrainage local, Écrire un e-mail de démarchage de sponsor avec l'IA, Suivre la fréquentation et les résultats pour les sponsors",
  outcome: "préparer le marketing d'un vrai événement sportif, d'un stage ou d'une saison d'équipe : un plan de promotion d'une page, une offre de parrainage local à trois niveaux, un e-mail de démarchage de sponsor préparé avec l'IA et un rapport de résultats simple pour les sponsors.",
  about: [
    "Ce cours s'adresse aux entraîneurs, managers d'équipe, membres du staff sportif, organisateurs de clubs et sportifs qui organisent des stages, des tournois, des collectes de fonds ou la saison d'une équipe, et qui ont besoin que le public vienne et que les entreprises soutiennent le projet.",
    "Vous apprendrez les bases du marketing sportif du côté de l'organisateur : à qui s'adresse l'événement, comment toucher ce public, comment construire une offre de parrainage à laquelle une entreprise locale peut dire oui, et comment présenter les résultats pour que les sponsors reviennent.",
    "Chaque leçon dure environ cinq minutes, avec un exercice « Essayez maintenant ». Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours. Les établissements et les ligues ont leurs propres règles sur les sponsors, les logos et les collectes de fonds ; vérifiez avec votre directeur sportif ou votre ligue avant de commencer."
  ],
  finalTask: "Choisissez un événement réel ou prévu (un stage, un tournoi, une collecte de fonds ou un match à domicile). Écrivez un plan de promotion d'une page, une offre de parrainage à trois niveaux et un e-mail de démarchage à une entreprise locale préparé avec l'IA et réécrit avec vos mots. Obtenez l'accord de votre directeur sportif ou de votre ligue, puis listez les trois chiffres que vous présenterez ensuite aux sponsors.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des entraîneurs, des responsables d'équipe, du personnel sportif, des organisateurs de club et des sportifs qui organisent des stages, des tournois, des collectes de fonds ou la saison d'une équipe, et qui ont besoin que les gens viennent et que les entreprises soutiennent.",
    startingPoint: "Ils connaissent leur sport et leur communauté, et utilisent les réseaux sociaux et l'e-mail. La plupart font la promotion de leurs événements avec une publication ou une affiche de dernière minute, n'ont jamais écrit d'offre de parrainage et ne présentent pas les résultats aux sponsors.",
    gap: "Sans plan, les événements attirent peu de monde, et les sponsors locaux sont sollicités d'une façon facile à refuser, ou ne sont jamais recontactés. Un plan de promotion simple, une offre de parrainage claire, un démarchage personnel et un rapport de résultats honnête font venir les familles et revenir les sponsors.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes",
      "Un téléphone ou un ordinateur avec un assistant IA gratuit et Canva ; seulement des outils gratuits",
      "Environ 60 minutes de leçons, plus le temps de planifier un vrai événement",
      "L'accord de l'établissement, de la ligue ou du club pour les dates, les sponsors, les logos et les photos ; des autorisations de droit à l'image des parents pour les mineurs",
      "L'argent des sponsors passe seulement par la procédure officielle de l'établissement ou du club"
    ],
    prerequisites: "Aucun. « Les outils d'IA pour les sportifs » aide si vous n'avez jamais utilisé Canva."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'un événement sportif réel ou prévu", action: "écrire une offre en une phrase et nommer le public qui décide de venir ou de payer", standard: "avec la date, le lieu, le coût et les autorisations confirmés avec votre directeur sportif ou votre ligue" },
    { id: "O2", condition: "Avec votre offre et un assistant IA", action: "écrire un plan de promotion d'une page avec les canaux, un message principal et un calendrier", standard: "avec trois à cinq canaux, un calendrier annonce, rappel, dernière semaine et remerciements, et une personne responsable de chaque tâche" },
    { id: "O3", condition: "Avec un assistant IA et un modèle Canva", action: "créer une affiche et une publication pour les réseaux avec les cinq informations de l'événement", standard: "relues par quelqu'un d'autre et conformes aux règles de votre établissement sur les logos et les photos de mineurs" },
    { id: "O4", condition: "À partir de ce que votre établissement vous permet de proposer", action: "construire une offre de parrainage local à trois niveaux", standard: "avec des prix vérifiés avec votre directeur sportif, seulement des promesses que vous pouvez tenir, et l'argent passant par la procédure officielle" },
    { id: "O5", condition: "À partir d'un brouillon de l'IA", action: "écrire un e-mail de démarchage à une entreprise locale", standard: "en moins de 150 mots, avec une raison vraie et précise de l'avoir choisie, envoyé depuis un compte officiel avec une relance" },
    { id: "O6", condition: "Après votre événement", action: "créer un rapport de remerciement d'une page pour les sponsors avec trois chiffres, une photo et une citation", standard: "avec chaque chiffre vérifié et le rapport envoyé dans les deux semaines" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Faire la promotion de l'événement",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce que vous proposez, et à qui",
          minutes: 5,
          goal: "Écrire en une phrase l'offre et le public de votre événement.",
          text: [
            "Chaque événement est une offre : quelque chose que les gens obtiennent en échange de leur temps ou de leur argent. Un stage pour les jeunes offre des compétences et du plaisir dans un cadre sûr. Un match à domicile offre du spectacle et un moment de communauté. Un tournoi offre de la compétition aux équipes.",
            "Écrivez votre offre en une phrase : « Un stage de football de deux jours pour les débutants de 6 à 10 ans, encadré par nos joueurs de l'équipe première, avec un T-shirt et un goûter, les 12 et 13 juin. » Puis nommez le public : qui décide de venir ou de payer ? Pour un stage de jeunes, ce sont les parents.",
            "Avant toute promotion, confirmez les bases avec votre directeur sportif ou votre ligue : date, lieu, prix, assurance, sécurité et autorisations nécessaires."
          ],
          steps: ["Nommez l'événement.", "Écrivez ce que les gens obtiennent.", "Nommez qui décide de venir ou de payer.", "Confirmez date, lieu, prix et autorisations avec votre directeur sportif ou votre ligue."],
          words: [["Offre", "ce que les gens obtiennent en échange de leur temps ou de leur argent."], ["Directeur sportif", "la personne qui dirige le programme sportif d'un établissement ou d'un club et autorise les événements."]],
          slides: [
            { title: "Chaque événement est une offre", bullets: ["Stage : compétences et plaisir, en sécurité", "Match à domicile : spectacle et communauté", "Tournoi : compétition"] },
            { title: "L'offre en une phrase", bullets: ["Pour qui, ce qu'ils obtiennent", "Quand et où"] },
            { title: "Vérifiez d'abord", bullets: ["Date, lieu, prix", "Assurance, sécurité, autorisations"] }
          ],
          tryIt: "Choisissez un événement réel ou prévu. Écrivez son offre en une phrase et nommez le public qui décide de venir ou de payer.",
          youCanNow: "décrire en une phrase l'offre d'un événement et le public qui décide.",
          quickCheck: [
            { objective: "O1", q: "Qu'offre un match à domicile aux personnes qui viennent ?", options: ["Du divertissement et un moment de communauté", "Une offre de parrainage", "Une assurance gratuite", "Un plan d'entraînement"], answer: 0, why: "Chaque événement est une offre ; un match à domicile offre du divertissement et un moment de communauté." },
            { objective: "O1", q: "Vous voulez organiser un tournoi le mois prochain. Que faites-vous avant toute promotion ?", options: ["Publier la date sur les réseaux sociaux", "Imprimer des affiches", "Confirmer la date, le lieu, le coût, l'assurance et les autorisations avec votre directeur sportif ou votre ligue", "Écrire aux sponsors"], answer: 2, why: "Confirmez les bases et les autorisations avant toute promotion." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Le plan de promotion d'une page",
          minutes: 5,
          goal: "Écrire un plan d'une page avec les canaux, les messages et un calendrier.",
          text: [
            "Un plan de promotion répond à trois questions : où le public en entendra-t-il parler, que dirons-nous, et quand ? Tenez-le sur une page.",
            "Les événements sportifs locaux marchent souvent mieux avec un mélange : lettres d'information de l'établissement ou du club, comptes de l'équipe sur les réseaux, groupes Facebook locaux, affiches dans les écoles, les salles de sport et les magasins, bouche-à-oreille des joueurs et des familles, et presse locale ou agendas de la commune.",
            "Utilisez un calendrier simple : annoncez environ quatre à six semaines avant, relancez deux semaines avant, mettez le paquet la dernière semaine et publiez des remerciements après. Un assistant IA peut transformer vos notes en un tableau clair."
          ],
          steps: ["Listez trois à cinq canaux.", "Écrivez un message principal.", "Faites un calendrier : annonce, relance, dernière semaine, remerciements.", "Demandez à l'IA d'en faire un tableau d'une page.", "Désignez qui fait chaque tâche."],
          words: [["Promotion", "faire connaître votre événement pour que les gens viennent."], ["Calendrier", "ce qui se passe à quelles dates."]],
          slides: [
            { title: "Trois questions", bullets: ["Où en entendront-ils parler ?", "Que dirons-nous ?", "Quand ?"] },
            { title: "Canaux locaux", bullets: ["Lettres d'information et réseaux de l'équipe", "Groupes Facebook locaux et affiches", "Bouche-à-oreille et agendas locaux"] },
            { title: "Calendrier", bullets: ["Annonce 4 à 6 semaines avant", "Relance à 2 semaines", "On met le paquet la dernière semaine", "Remerciements après"] }
          ],
          tryIt: "Demandez à un assistant IA : « Transforme ces notes en tableau d'une page pour un plan de promotion, avec canal, message, date et responsable. » Collez vos notes sur l'événement et modifiez le résultat.",
          youCanNow: "écrire un plan de promotion d'une page avec des canaux, un message, un calendrier et des responsables.",
          quickCheck: [
            { objective: "O2", q: "À quelles trois questions répond un plan de promotion ?", options: ["Qui joue, qui gagne, qui marque", "Où le public en entend parler, ce que nous disons, et quand", "Combien, combien de temps, à quelle distance", "Quel logo, quelle couleur, quelle police"], answer: 1, why: "Un plan de promotion couvre les canaux, le message et le calendrier." },
            { objective: "O2", q: "Votre événement a lieu la semaine prochaine et personne n'est chargé de publier les rappels. Que faites-vous ?", options: ["Espérer que le bouche-à-oreille suffise", "Annuler l'événement", "Attendre la veille", "Désigner maintenant une personne pour chaque tâche de promotion"], answer: 3, why: "Chaque tâche du plan a besoin d'une personne responsable." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Créer les supports de promotion avec l'IA et Canva",
          minutes: 5,
          goal: "Créer une affiche et une publication sur les réseaux pour votre événement, en respectant les règles de votre établissement.",
          text: [
            "Chaque support de promotion a besoin des cinq mêmes informations : quoi, pour qui, quand, où, et comment s'inscrire ou obtenir des billets. Ajoutez une photo et une raison de venir.",
            "Utilisez un assistant IA pour préparer un texte court, puis un outil de design gratuit comme Canva pour créer une affiche et une publication carrée à partir d'un modèle.",
            "Respectez les règles de votre établissement ou de votre ligue sur les logos, les noms d'équipe et les photos de mineurs. N'utilisez des photos qu'avec autorisation ; beaucoup d'établissements exigent une autorisation de droit à l'image signée par les parents avant de publier des photos d'élèves."
          ],
          steps: ["Listez les cinq informations.", "Demandez à l'IA un titre et deux lignes courtes.", "Créez une affiche et une publication dans Canva.", "Vérifiez logos et photos selon les règles de votre établissement.", "Faites relire la date, l'heure et le lien par quelqu'un d'autre."],
          words: [["Autorisation de droit à l'image", "une permission signée pour utiliser la photo ou la vidéo de quelqu'un."], ["Relire", "vérifier attentivement les erreurs avant de partager."]],
          slides: [
            { title: "Cinq informations sur chaque support", bullets: ["Quoi et pour qui", "Quand et où", "Comment s'inscrire ou obtenir des billets"] },
            { title: "Créez-le", bullets: ["L'IA prépare le texte", "Un modèle Canva pour l'affiche et la publication"] },
            { title: "Avant de partager", bullets: ["Logos et noms d'équipe : suivez les règles", "Photos de mineurs : autorisation et droit à l'image", "Quelqu'un d'autre relit"] }
          ],
          tryIt: "Créez une affiche et une publication pour votre événement. Demandez à quelqu'un d'autre de vérifier les cinq informations et le lien d'inscription.",
          youCanNow: "créer des supports de promotion clairs qui respectent les règles de l'établissement et du droit à l'image.",
          quickCheck: [
            { objective: "O3", q: "Laquelle de ces informations fait partie des cinq que chaque support de promotion doit contenir ?", options: ["Comment s'inscrire ou obtenir des billets", "Le numéro de téléphone de l'entraîneur", "Le score de l'an dernier", "La liste de prix des sponsors"], answer: 0, why: "Quoi, pour qui, quand, où et comment s'inscrire figurent sur chaque support." },
            { objective: "O3", q: "Votre affiche est terminée. Que faites-vous avant de la partager ?", options: ["La partager tout de suite", "Ajouter d'autres photos d'élèves sans demander", "Faire relire par quelqu'un d'autre la date, l'heure et le lien", "Retirer le lien d'inscription"], answer: 2, why: "Une autre personne repère les erreurs dans les informations clés." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Faire la promotion de l'événement",
        questions: [
          { objective: "O1", q: "Pour un stage de jeunes, qui est en général le public qui décide ?", options: ["L'arbitre", "Les entraîneurs rivaux", "Les parents des enfants", "Le chauffeur du bus"], answer: 2, why: "Ce sont les parents qui décident et paient les stages de jeunes." },
          { objective: "O1", q: "Avant de faire la promotion d'un événement, vous devez confirmer :", options: ["La date, le lieu, le prix et les autorisations", "Seulement la couleur du T-shirt", "Votre nombre d'abonnés", "Rien"], answer: 0, why: "On ne peut pas promouvoir un événement qui n'est ni autorisé ni fixé." },
          { objective: "O2", q: "Quand annoncer en général un événement local ?", options: ["La veille", "Après qu'il a eu lieu", "Un an plus tard", "Environ quatre à six semaines avant"], answer: 3, why: "Cela laisse aux gens le temps de s'organiser, avec des relances ensuite." },
          { objective: "O3", q: "Quelles cinq informations doivent figurer sur chaque affiche ?", options: ["Score, météo, mascotte, couleur, chanson", "Quoi, pour qui, quand, où, comment s'inscrire", "Votre mot de passe et votre adresse", "Seulement le logo"], answer: 1, why: "Elles permettent aux gens de décider et d'agir." },
          { objective: "O3", q: "Vous voulez publier des photos des enfants du stage. De quoi avez-vous besoin ?", options: ["De rien", "D'une autorisation et souvent du droit à l'image signé par les parents", "D'un filtre", "De plus de hashtags"], answer: 1, why: "Les photos de mineurs demandent une autorisation selon la plupart des règlements." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Sponsors et résultats",
      lessons: [
        {
          objectives: ["O4"],
          title: "Construire une offre de parrainage local",
          minutes: 6,
          goal: "Construire une offre de parrainage à trois niveaux à laquelle une entreprise locale peut dire oui.",
          text: [
            "Un sponsor est une entreprise qui donne de l'argent, des produits ou des services en échange d'une visibilité auprès de votre public. Les commerces locaux comme les pizzerias, les garages, les salles de sport ou les dentistes parrainent souvent le sport scolaire et associatif.",
            "Facilitez les choses avec trois niveaux, par exemple Bronze, Argent et Or. Chaque niveau indique ce que le sponsor donne et ce qu'il obtient : son nom sur la banderole, son logo sur le T-shirt, une publication de remerciement, des annonces pendant les matchs, ou un stand le jour de l'événement. Ne promettez que ce que vous pouvez tenir et ce que votre établissement autorise.",
            "Fixez les prix en demandant à votre directeur sportif ce que d'autres sponsors ont payé et quels sont vos coûts. N'inventez pas de gros chiffres, et faites passer l'argent par la procédure officielle de votre établissement ou de votre club."
          ],
          steps: ["Listez ce que vous pouvez offrir aux sponsors et que votre établissement autorise.", "Regroupez les avantages en trois niveaux.", "Demandez à votre directeur sportif les prix passés et vos coûts.", "Mettez l'offre sur une page.", "Faites passer l'argent par la procédure officielle de l'établissement ou du club."],
          words: [["Sponsor", "une entreprise qui soutient votre événement en échange de visibilité."], ["Offre de parrainage", "une page qui liste les niveaux de parrainage, ce que les sponsors donnent et ce qu'ils obtiennent."]],
          slides: [
            { title: "Ce que veut un sponsor", bullets: ["Être vu par votre public", "Une bonne image dans la communauté"] },
            { title: "Trois niveaux", bullets: ["Bronze, Argent, Or", "Ce qu'il donne et ce qu'il obtient", "Ne promettez que ce que vous pouvez tenir"] },
            { title: "L'argent", bullets: ["Renseignez-vous sur les prix passés et vos coûts", "Passez par la procédure officielle"] }
          ],
          tryIt: "Demandez à un assistant IA de vous aider à présenter une offre de parrainage à trois niveaux pour votre événement, en n'utilisant que les avantages que vous avez listés. Ne remplissez les prix qu'après avoir parlé à votre directeur sportif.",
          youCanNow: "construire une offre de parrainage local à trois niveaux, avec ce que chacun donne et obtient.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce qu'un sponsor ?", options: ["Un parent de joueur bénévole", "Une entreprise qui donne de l'argent, des produits ou des services pour être vue par votre public", "Le bureau de la ligue", "Un acheteur de billets"], answer: 1, why: "Les sponsors apportent un soutien en échange d'être vus par votre public." },
            { objective: "O4", q: "Un sponsor demande à mettre son logo sur les maillots des joueurs, mais votre établissement ne le permet pas. Que faites-vous ?", options: ["Le promettre quand même", "Le faire sans prévenir l'établissement", "Lui faire payer plus cher", "Proposer seulement ce que votre établissement permet, comme une banderole ou une publication de remerciement"], answer: 3, why: "Ne promettez que ce que vous pouvez tenir et ce que votre établissement permet." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Démarcher un sponsor avec un e-mail préparé par l'IA",
          minutes: 5,
          goal: "Écrire et envoyer un e-mail de démarchage court et personnel à un sponsor.",
          text: [
            "Un e-mail de démarchage est court et personnel. Il dit qui vous êtes, quel est l'événement, pourquoi leur entreprise correspond, ce que vous demandez et ce qu'ils y gagnent. Joignez l'offre d'une page ou mettez un lien.",
            "Demandez à un assistant IA : « Écris un e-mail court et chaleureux à [type d'entreprise] pour lui demander de parrainer notre stage de basket pour les jeunes. Mentionne notre public de 80 familles du quartier et notre niveau Argent. Moins de 150 mots. » Puis modifiez-le : ajoutez une raison vraie et précise liée à cette entreprise et à votre choix.",
            "Relancez une fois au bout d'environ une semaine si vous n'avez pas de réponse. Pour les commerces locaux, passer en personne avec un joueur ou un parent marche souvent mieux que l'e-mail. Dites toujours merci, même s'ils refusent."
          ],
          steps: ["Choisissez une entreprise locale qui correspond à votre public.", "Demandez à l'IA un brouillon court de moins de 150 mots.", "Ajoutez une raison vraie et précise de les avoir choisis.", "Joignez l'offre et envoyez depuis une adresse officielle.", "Relancez une fois au bout d'une semaine ; remerciez dans tous les cas."],
          words: [["Démarchage", "une demande courte qui explique ce que vous voulez et en quoi cela les aide."], ["Relance", "un deuxième message poli si vous n'avez pas eu de réponse."]],
          slides: [
            { title: "Un bon e-mail de démarchage", bullets: ["Qui vous êtes et l'événement", "Pourquoi leur entreprise correspond", "Ce que vous demandez et ce qu'ils y gagnent"] },
            { title: "L'IA fait le brouillon, vous personnalisez", bullets: ["Moins de 150 mots", "Ajoutez une raison vraie et précise"] },
            { title: "Après l'envoi", bullets: ["Une seule relance au bout d'une semaine", "Passez en personne si possible", "Remerciez, que ce soit oui ou non"] }
          ],
          tryIt: "Choisissez une entreprise locale. Utilisez l'IA pour préparer un e-mail de démarchage, personnalisez-le et faites-le lire par votre entraîneur ou votre directeur sportif avant de l'envoyer.",
          youCanNow: "écrire un e-mail de démarchage court et personnel et relancer poliment.",
          quickCheck: [
            { objective: "O5", q: "Que doit contenir un e-mail de démarchage ?", options: ["Qui vous êtes, l'événement, pourquoi leur entreprise convient, la demande et ce qu'ils y gagnent", "Tout le calendrier de votre saison", "Une longue histoire de l'équipe", "Seulement le prix"], answer: 0, why: "Un démarchage court et personnel couvre ces cinq points et renvoie à l'offre." },
            { objective: "O5", q: "Une pizzeria locale n'a pas répondu à votre e-mail après une semaine. Que faites-vous ?", options: ["Lui écrire tous les jours", "Parler d'elle en ligne", "Relancer une fois, ou passer la voir avec un joueur ou un parent", "Abandonner et ne plus jamais demander"], answer: 2, why: "Relancez une fois après environ une semaine ; passer en personne marche souvent mieux." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Présenter les résultats pour que les sponsors reviennent",
          minutes: 5,
          goal: "Suivre les chiffres de l'événement et envoyer aux sponsors un court rapport de remerciement.",
          text: [
            "Les sponsors reviennent quand ils voient ce qu'ils ont obtenu. Suivez quelques chiffres pendant et après l'événement : fréquentation ou inscriptions, portée et engagement des publications, et tout ce qui concerne le sponsor, comme l'utilisation d'un bon de réduction ou les visites à son stand.",
            "Envoyez un rapport de remerciement d'une page dans les deux semaines : une photo de leur banderole ou de leur logo pendant l'événement, les chiffres, la phrase d'une famille ou d'un joueur, et un merci de l'équipe.",
            "Demandez à un assistant IA de transformer vos chiffres et vos notes en un rapport chaleureux, puis vérifiez vous-même chaque chiffre. N'exagérez jamais les chiffres ; c'est la confiance qui fait revenir les sponsors l'année suivante."
          ],
          steps: ["Choisissez trois chiffres avant l'événement.", "Recueillez-les pendant et après.", "Prenez en photo la signalétique des sponsors.", "Préparez un rapport d'une page avec l'IA.", "Vérifiez chaque chiffre et envoyez dans les deux semaines."],
          words: [["Portée", "le nombre de personnes qui ont vu une publication."], ["Rapport de remerciement", "un court résumé pour les sponsors, avec photos et résultats."]],
          slides: [
            { title: "Suivez trois chiffres", bullets: ["Fréquentation ou inscriptions", "Portée et engagement des publications", "Propre au sponsor : bons, visites"] },
            { title: "Rapport de remerciement", bullets: ["Photo de leur logo pendant l'événement", "Les chiffres et un témoignage", "Envoyé dans les deux semaines"] },
            { title: "La confiance", bullets: ["Vérifiez chaque chiffre", "N'exagérez jamais"] }
          ],
          tryIt: "Tâche finale : pour votre événement, terminez le plan de promotion, l'offre de parrainage et l'e-mail de démarchage, obtenez l'accord de votre directeur sportif ou de votre ligue, et notez les trois chiffres que vous présenterez aux sponsors.",
          youCanNow: "présenter des résultats honnêtes aux sponsors pour qu'ils aient envie de revenir.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qui fait revenir les sponsors l'année suivante ?", options: ["Un plus grand logo la prochaine fois", "Voir ce qu'ils ont obtenu, avec des chiffres honnêtes", "Un e-mail plus long", "Un prix plus bas"], answer: 1, why: "Les sponsors reviennent quand un rapport montre de vrais résultats." },
            { objective: "O6", q: "L'IA a rédigé votre rapport et dit que 200 personnes sont venues, mais votre compte était de 150. Que faites-vous ?", options: ["L'envoyer ; plus gros, c'est mieux", "Faire la moyenne des deux chiffres", "Ne pas mettre le chiffre", "Corriger à 150 avant d'envoyer"], answer: 3, why: "Vérifiez chaque chiffre vous-même et ne les gonflez jamais." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Sponsors et résultats",
        questions: [
          { objective: "O4", q: "Que veut en général un sponsor ?", options: ["Entraîner l'équipe", "Seulement des billets gratuits", "Vos mots de passe", "Être vu par votre public et soigner son image"], answer: 3, why: "Les sponsors vous soutiennent pour être vus par votre public." },
          { objective: "O4", q: "Comment fixer les prix du parrainage ?", options: ["Demander à votre directeur sportif les prix passés et vos coûts", "Inventer un gros chiffre", "Copier une équipe professionnelle", "Laisser l'IA décider"], answer: 0, why: "Les vrais prix passés et les coûts gardent l'offre juste et réaliste." },
          { objective: "O5", q: "Qu'est-ce qui rend un e-mail de démarchage personnel ?", options: ["Un e-mail très long", "Beaucoup d'émojis", "Une raison vraie et précise d'avoir choisi cette entreprise", "L'envoyer à 500 entreprises d'un coup"], answer: 2, why: "Une raison précise montre que vous les connaissez." },
          { objective: "O5", q: "Une entreprise ne répond pas. Que faites-vous ?", options: ["Je lui écris chaque jour", "Je publie à son sujet", "J'abandonne tout de suite", "Je relance une fois au bout d'environ une semaine"], answer: 3, why: "Une relance polie est professionnelle." },
          { objective: "O6", q: "Votre événement a accueilli 140 personnes. Que présentez-vous ?", options: ["250, pour faire mieux", "140", "Environ 200", "Rien"], answer: 1, why: "Des chiffres honnêtes construisent la confiance." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Marketing en management du sport",
    questions: [
      { objective: "O1", q: "L'offre d'un événement, c'est :", options: ["Seulement le prix du billet", "Le logo de l'équipe", "Ce que les gens obtiennent pour leur temps ou leur argent", "Le stade"], answer: 2, why: "L'offre, c'est la valeur pour le public." },
      { objective: "O1", q: "Qui autorise les événements et les sponsors d'un établissement ?", options: ["En général le directeur sportif", "Un fan", "Un sponsor", "L'entraîneur adverse"], answer: 0, why: "Le directeur sportif dirige le programme sportif de l'établissement." },
      { objective: "O2", q: "Un bon plan de promotion tient sur :", options: ["Une page", "Cinquante pages", "Une serviette sans aucune date", "Rien"], answer: 0, why: "Une page le garde clair et utilisable." },
      { objective: "O2", q: "Lequel est un bon canal local ?", options: ["Le vestiaire d'un rival", "Des messages privés à des inconnus", "Les groupes Facebook locaux et les lettres d'information de l'établissement", "Aucun"], answer: 2, why: "Ils touchent les familles du coin." },
      { objective: "O2", q: "Quand publier des remerciements ?", options: ["Jamais", "Après l'événement", "Avant l'annonce", "Seulement si on gagne"], answer: 1, why: "Les remerciements préparent la bonne volonté pour la prochaine fois." },
      { objective: "O2", q: "Chaque tâche de promotion doit avoir :", options: ["Aucun responsable", "Dix responsables", "Une IA comme responsable", "Une personne responsable"], answer: 3, why: "Quelqu'un doit être responsable de chaque tâche." },
      { objective: "O3", q: "Quelle information manque dans « Stage de foot, 12 juin, parc Lincoln » ?", options: ["Quand", "Où", "Comment s'inscrire", "Quoi"], answer: 2, why: "Les gens doivent savoir comment s'inscrire." },
      { objective: "O3", q: "Une autorisation de droit à l'image, c'est :", options: ["Une conférence de presse", "Un article de journal", "Un billet", "Une permission signée pour utiliser la photo ou la vidéo de quelqu'un"], answer: 3, why: "Elle autorise à partager des images." },
      { objective: "O3", q: "Avant de partager une affiche, vous devez :", options: ["La faire relire par quelqu'un d'autre", "Ajouter plus de couleurs", "La publier à minuit", "Retirer la date"], answer: 0, why: "Un deuxième lecteur repère les erreurs." },
      { objective: "O4", q: "Une offre de parrainage a en général :", options: ["Un seul prix énorme", "Trois niveaux de ce qu'on donne et ce qu'on obtient", "Aucun avantage", "Seulement un logo"], answer: 1, why: "Les niveaux rendent le oui plus facile." },
      { objective: "O4", q: "Lequel est un avantage pour un sponsor ?", options: ["Entraîner l'équipe", "Choisir la composition", "Son nom sur la banderole", "Des données gratuites sur les joueurs"], answer: 2, why: "La visibilité est l'avantage principal." },
      { objective: "O4", q: "L'argent des sponsors doit passer par :", options: ["La procédure officielle de l'établissement ou du club", "Votre compte personnel", "Du liquide dans un sac", "Un ami"], answer: 0, why: "Les procédures officielles protègent tout le monde." },
      { objective: "O4", q: "Vous ne devez promettre aux sponsors que :", options: ["Tout ce qu'ils veulent", "Des titres de champion", "Du temps des joueurs sans leur demander", "Ce que vous pouvez tenir et que votre établissement autorise"], answer: 3, why: "Les promesses non tenues font perdre les sponsors." },
      { objective: "O5", q: "Un e-mail de démarchage doit faire environ :", options: ["Deux pages", "Moins de 150 mots", "Un mot", "Le plus long possible"], answer: 1, why: "Les e-mails courts sont lus." },
      { objective: "O5", q: "L'IA prépare votre e-mail de démarchage. Ensuite, vous :", options: ["L'envoyez à tout le monde sans le changer", "Ajoutez une raison vraie et précise d'avoir choisi cette entreprise", "Ajoutez de faux chiffres", "Le supprimez"], answer: 1, why: "Les touches personnelles obtiennent des réponses." },
      { objective: "O5", q: "Souvent plus efficace que l'e-mail pour les commerces locaux :", options: ["Envoyer 10 e-mails", "Appeler à minuit", "Publier des commentaires énervés", "Passer en personne avec un joueur ou un parent"], answer: 3, why: "Les commerces locaux réagissent aux vraies personnes." },
      { objective: "O5", q: "Une entreprise dit non. Vous :", options: ["La remerciez quand même", "Discutez", "Publiez à son sujet", "Continuez à lui écrire"], answer: 0, why: "La bonne volonté peut mener à un oui plus tard." },
      { objective: "O6", q: "Quel chiffre est propre au sponsor ?", options: ["Votre pointure", "La météo", "L'utilisation des bons de réduction de son offre", "Seulement le score final"], answer: 2, why: "Il montre directement ce qu'il a obtenu." },
      { objective: "O6", q: "Quand envoyer le rapport de remerciement ?", options: ["L'année prochaine", "Jamais", "Avant l'événement", "Dans les deux semaines"], answer: 3, why: "Des résultats récents font la meilleure impression." },
      { objective: "O6", q: "L'IA rédige votre rapport. Avant de l'envoyer, vous :", options: ["Arrondissez les chiffres vers le haut", "Vérifiez vous-même chaque chiffre", "Retirez les photos", "L'envoyez sans le lire"], answer: 1, why: "L'IA peut se tromper ; la confiance dépend de l'exactitude." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      6,
      9,
      11,
      14,
      18,
      19
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Plan de promotion",
        objective: "O2",
        notYet: "Pas de calendrier, trop peu de canaux, ou personne n'est responsable des tâches.",
        meets: "Une page avec trois à cinq canaux, un message principal, un calendrier annonce, rappel, dernière semaine et remerciements, et un responsable pour chaque tâche.",
        exceeds: "Les canaux correspondent au public qui décide, nommé dans l'offre."
      },
      {
        name: "Offre de parrainage",
        objective: "O4",
        notYet: "Moins de trois niveaux, des prix au hasard, ou des promesses que l'établissement ne permet pas.",
        meets: "Trois niveaux avec ce que le sponsor donne et reçoit clairement indiqué, des prix vérifiés avec le directeur sportif, et l'argent passant par la procédure officielle.",
        exceeds: "Chaque niveau correspond à une taille différente d'entreprise locale et comprend un chiffre propre au sponsor à présenter."
      },
      {
        name: "E-mail de démarchage",
        objective: "O5",
        notYet: "Il ressemble à un texte d'IA copié, il est long, ou il n'a pas de raison précise pour cette entreprise.",
        meets: "Moins de 150 mots, avec les mots de l'auteur, une raison vraie d'avoir choisi l'entreprise et l'offre en pièce jointe.",
        exceeds: "Comprend un plan de relance et la possibilité d'une visite en personne."
      },
      {
        name: "Autorisation et plan de résultats",
        objective: "O6",
        notYet: "Pas d'autorisation, ou pas de chiffres choisis pour le rapport aux sponsors.",
        meets: "Autorisé par le directeur sportif ou la ligue, avec trois chiffres choisis à présenter aux sponsors.",
        exceeds: "Indique comment chaque chiffre sera recueilli et quand le rapport sera envoyé."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent la tâche finale avec « Atteint » ou « Dépasse » sur chaque ligne de la grille",
      "Les événements qui atteignent leur objectif de participation ou d'inscriptions",
      "Les sponsors locaux signés, et les sponsors qui reviennent pour l'événement ou la saison suivante",
      "Les apprenants qui disent avoir envoyé un rapport de résultats aux sponsors dans les deux semaines après l'événement"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Internet",
      "Un assistant IA gratuit (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "Un compte Canva gratuit",
      "Les règles de votre établissement, de votre ligue ou de votre club sur les sponsors, les logos et les autorisations de droit à l'image",
      "Environ 60 minutes de leçons, plus du temps de préparation pour un vrai événement"
    ],
    facilitatorNotes: [
      "Invitez le directeur sportif ou le contact de la ligue à la première séance, pour que les autorisations, les prix et la gestion de l'argent soient clairs dès le départ.",
      "Ayez les formulaires d'autorisation de droit à l'image des parents prêts avant que quiconque publie des photos de mineurs.",
      "Associez les sportifs à un adulte pour les visites et les e-mails aux sponsors ; envoyez les démarchages depuis des comptes officiels.",
      "Ne laissez jamais les apprenants manier l'argent des sponsors en dehors de la procédure officielle de l'établissement ou du club.",
      "Après l'événement, revoyez les rapports aux sponsors en groupe et vérifiez chaque chiffre avant l'envoi."
    ]
  }
};
