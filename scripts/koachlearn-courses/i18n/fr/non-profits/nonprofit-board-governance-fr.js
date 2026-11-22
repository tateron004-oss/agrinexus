"use strict";

// Koach Learn course (French translation of non-profits/nonprofit-board-governance.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nonprofit-board-governance-fr",
  lang: "fr",
  translationOf: "nonprofit-board-governance",
  category: "Non Profits",
  name: "La gouvernance du conseil d'administration d'une association",
  skills: "Devoirs de prudence, de loyauté et d'obéissance du conseil, Rôles du conseil et du personnel, Règlement intérieur, réunions et procès-verbaux, Gérer les conflits d'intérêts, Surveillance financière et Form 990, Recruter des administrateurs",
  outcome: "siéger au conseil d'administration d'une association ou le diriger avec sérieux : expliquer les devoirs légaux du conseil, garder des rôles clairs entre le conseil et le personnel, tenir une réunion correcte avec un procès-verbal, gérer un conflit d'intérêts, examiner les finances et les déclarations annuelles, et recruter les bons nouveaux membres.",
  about: [
    "Ce cours s'adresse aux membres de conseils d'administration d'associations, aux fondateurs, aux directeurs exécutifs, aux responsables d'églises et de groupes communautaires, et à toute personne invitée pour la première fois à rejoindre un conseil.",
    "Le conseil d'administration est légalement responsable de l'organisation. Vous apprendrez les trois devoirs essentiels du conseil, comment le conseil et le personnel se partagent le travail, à quoi sert le règlement intérieur (bylaws), comment tenir les réunions et rédiger les procès-verbaux, comment gérer les conflits d'intérêts, quels rapports financiers et quel Form 990 de l'IRS (le fisc fédéral américain) le conseil doit examiner, les règles d'enregistrement des œuvres caritatives en Californie, et comment recruter de bons administrateurs.",
    "Chaque leçon dure environ cinq minutes, avec une tâche \"Essayez maintenant\" à faire avec les documents de votre propre organisation. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Ce cours est une formation générale, pas un conseil juridique ou fiscal. Les règles varient selon l'État américain et changent avec le temps : vérifiez les sources officielles citées dans les leçons et demandez l'avis d'un avocat ou d'un comptable spécialisé dans les associations pour votre situation."
  ],
  finalTask: "Préparez une liste de contrôle de gouvernance d'une page pour une association réelle ou imaginaire : les trois devoirs avec des mots simples, un partage conseil-personnel pour cinq décisions courantes, un ordre du jour de réunion avec un modèle de procès-verbal, les étapes à suivre en cas de conflit d'intérêts, un calendrier annuel des examens financiers et des déclarations (quelle version du Form 990, sa date limite, et tout enregistrement auprès de l'État, comme le Registry of Charities and Fundraisers de Californie), et un plan de recrutement pour deux sièges libres, établi à partir d'une grille de compétences.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des membres de conseils d'administration d'associations, des fondateurs, des directeurs, des responsables d'églises et de groupes communautaires, et des personnes invitées pour la première fois à rejoindre un conseil.",
    startingPoint: "Ils tiennent à une mission et ont parfois assisté à des réunions du conseil. Beaucoup n'ont jamais lu leur règlement intérieur, rédigé un procès-verbal, examiné un Form 990 ou géré un conflit d'intérêts.",
    gap: "Un conseil est juridiquement responsable de son organisation. Des membres qui ne connaissent pas leurs devoirs, la limite entre le conseil et le personnel ou les déclarations annuelles mettent en danger l'exonération fiscale, l'argent et la réputation de l'association. Une liste de contrôle claire les aide à bien gouverner et à garder la confiance du public.",
    constraints: [
      "Des bénévoles avec peu de temps ; des leçons de 5 minutes",
      "Les règles varient selon l'État américain et changent avec le temps ; les apprenants vérifient sur irs.gov et auprès du bureau des œuvres caritatives de leur État",
      "Une formation générale, pas un conseil juridique ou fiscal ; les décisions importantes vont à un avocat ou un comptable spécialisé dans les associations",
      "Des mots simples pour les nouveaux membres de conseil et les petits groupes entièrement bénévoles"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Face à une décision ou une situation du conseil", action: "expliquer les devoirs de prudence, de loyauté et d'obéissance, et repérer quel devoir est menacé", standard: "en réussissant au moins 4 situations sur 5" },
    { id: "O2", condition: "Avec votre règlement intérieur et une grille de compétences", action: "répartir les décisions courantes entre le conseil et le personnel, trouver les règles clés du règlement intérieur et prévoir comment pourvoir les sièges libres du conseil", standard: "avec cinq décisions réparties et deux sièges associés à des compétences manquantes" },
    { id: "O3", condition: "Pour une prochaine réunion du conseil", action: "écrire un ordre du jour avec un ensemble de points approuvés en un seul vote, et rédiger un procès-verbal avec les présences, le quorum, les motions, les votes et les actions", standard: "avec toutes les parties obligatoires du procès-verbal" },
    { id: "O4", condition: "Quand un membre du conseil, sa famille ou son entreprise pourrait profiter d'une décision", action: "suivre les étapes en cas de conflit d'intérêts : déclarer, se retirer, vérifier que l'accord est équitable et l'inscrire", standard: "dans le bon ordre et inscrit au procès-verbal" },
    { id: "O5", condition: "À partir des recettes, des biens et de la date de fin d'exercice d'une association", action: "examiner ses rapports financiers et construire un calendrier annuel de son Form 990 et de ses déclarations à l'État", standard: "avec la version et la date limite confirmées sur irs.gov et sur le site du bureau des œuvres caritatives de l'État" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Le rôle du conseil d'administration",
      lessons: [
        {
          objectives: ["O1"],
          title: "Les trois devoirs : prudence, loyauté et obéissance",
          minutes: 5,
          goal: "Expliquer les trois devoirs essentiels du conseil et repérer quand l'un d'eux est menacé.",
          text: [
            "Les membres du conseil d'une association gèrent l'organisation au nom du public et des personnes qu'elle sert. Cette confiance est souvent décrite comme trois devoirs.",
            "Devoir de prudence : être attentif et prendre des décisions éclairées. Venez aux réunions, lisez les rapports, posez des questions et faites preuve de bon sens. Devoir de loyauté : faire passer les intérêts de l'organisation avant les vôtres, et ne jamais utiliser votre siège pour vous avantager, vous, votre famille ou votre entreprise. Devoir d'obéissance : veiller à ce que l'organisation respecte sa mission, son propre règlement intérieur et la loi.",
            "Ces devoirs concernent chaque membre du conseil, pas seulement le président ou le trésorier. \"Je n'ai pas lu le budget\" n'est pas une excuse. Les règles exactes varient selon l'État, alors consultez un avocat spécialisé dans les associations quand une décision est importante."
          ],
          words: [["Conseil d'administration", "le groupe légalement responsable de la supervision d'une association."], ["Devoir fiduciaire", "l'obligation légale d'agir dans le meilleur intérêt d'autrui ; les membres du conseil la doivent à l'organisation."], ["Devoir de prudence", "prendre des décisions éclairées et réfléchies."], ["Devoir de loyauté", "faire passer les intérêts de l'organisation avant les siens."], ["Devoir d'obéissance", "garder l'organisation fidèle à sa mission, à son règlement intérieur et à la loi."]],
          slides: [
            { title: "Vous gérez l'association au nom des autres", bullets: ["Pour le public et les personnes qu'elle sert", "Trois devoirs essentiels"] },
            { title: "Prudence, loyauté, obéissance", bullets: ["Prudence : être présent, lire, demander, bien décider", "Loyauté : l'organisation d'abord, jamais vous-même", "Obéissance : la mission, le règlement intérieur et la loi"] },
            { title: "Chaque membre, à chaque fois", bullets: ["Pas seulement le président ou le trésorier", "\"Je ne l'ai pas lu\" n'est pas une excuse", "Décision importante ? Consultez un avocat spécialisé"] }
          ],
          tryIt: "Écrivez un exemple réel de chaque devoir pour une association que vous connaissez, comme une banque alimentaire, une église ou un club sportif pour les jeunes. Puis écrivez une action qui ne respecterait pas chaque devoir.",
          youCanNow: "expliquer les devoirs de prudence, de loyauté et d'obéissance, et repérer quand l'un d'eux est menacé.",
          quickCheck: [
            { objective: "O1", q: "Que demande le devoir de loyauté à un membre du conseil ?", options: ["Venir à l'heure à chaque réunion", "Respecter le règlement intérieur et la loi", "Faire passer les intérêts de l'organisation avant les siens", "Récolter le plus d'argent"], answer: 2, why: "La loyauté veut dire ne jamais utiliser son siège pour s'avantager, soi, sa famille ou son entreprise." },
            { objective: "O1", q: "Un membre dit : « Je ne lis pas les rapports ; c'est le trésorier qui s'occupe de l'argent. » Que lui dites-vous ?", options: ["Chaque membre a le devoir de prudence, alors lisez les rapports et posez des questions", "Ce n'est pas grave ; seul le trésorier est responsable", "Demandez au personnel de voter à votre place", "Ne participez pas aux votes sur l'argent"], answer: 0, why: "Les trois devoirs concernent chaque membre du conseil, et ne pas lire le budget n'est pas une excuse." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Les rôles du conseil et du personnel, et le règlement intérieur",
          minutes: 6,
          goal: "Répartir les décisions courantes entre le conseil et le personnel, et trouver les règles clés de votre règlement intérieur.",
          text: [
            "Dans la plupart des associations qui ont du personnel salarié, le conseil fixe la direction et supervise ; le personnel fait le travail quotidien. Le conseil approuve la mission, la stratégie et le budget ; il recrute, soutient et évalue le directeur exécutif ; il surveille l'argent et les risques, et il aide à collecter des fonds. Le directeur exécutif gère les programmes, recrute et encadre le reste du personnel, et prend les décisions quotidiennes.",
            "Les problèmes commencent quand le conseil fait de la microgestion, ou quand il approuve tout sans poser de questions. Dans les petits groupes composés uniquement de bénévoles, les membres du conseil font souvent aussi le travail de terrain : soyez clair sur la \"casquette\" que vous portez.",
            "Le règlement intérieur (bylaws) est le livre de règles de l'organisation. Il fixe en général le nombre de membres du conseil, comment ils sont élus et pour combien de temps, les responsables (président, trésorier, secrétaire), comment les réunions sont convoquées, combien de membres forment le quorum, et comment se font les votes. Gardez-en une copie à jour, lisez-le et respectez-le. Ne le modifiez qu'en suivant la procédure qu'il prévoit."
          ],
          steps: ["Listez cinq décisions courantes (budget, embauche de personnel, nouveau programme, gros contrat, date d'un événement).", "Indiquez pour chacune : conseil, personnel ou les deux.", "Ouvrez votre règlement intérieur et trouvez : taille du conseil, durée des mandats, responsables, quorum et règles de vote.", "Notez ce que votre conseil ne respecte pas."],
          words: [["Directeur exécutif", "le premier responsable salarié, qui dirige l'association au quotidien et rend compte au conseil."], ["Règlement intérieur", "les règles de l'association sur le fonctionnement du conseil et de l'organisation (en anglais : bylaws)."], ["Quorum", "le nombre minimum de membres présents pour qu'une réunion puisse prendre des décisions."], ["Microgestion", "le fait de contrôler les petits détails du travail de quelqu'un d'autre."]],
          slides: [
            { title: "Le conseil : direction et supervision", bullets: ["Mission, stratégie et budget", "Recrute et évalue le directeur exécutif", "Surveille l'argent et les risques, aide à collecter des fonds"] },
            { title: "Le personnel : le travail quotidien", bullets: ["Gère les programmes", "Recrute et encadre le reste du personnel", "Décisions quotidiennes"] },
            { title: "Deux pièges", bullets: ["Faire de la microgestion", "Tout approuver sans poser de questions", "Que des bénévoles ? Sachez quelle casquette vous portez"] },
            { title: "Le règlement intérieur : votre livre de règles", bullets: ["Taille du conseil, mandats, responsables", "Réunions, quorum, votes", "Lisez-le, respectez-le, modifiez-le seulement selon sa procédure"] }
          ],
          tryIt: "Procurez-vous le règlement intérieur de votre organisation (ou un exemple d'une association que vous connaissez). Trouvez la taille du conseil, la durée des mandats, le quorum et la façon dont les votes se font. Puis classez cinq décisions courantes : conseil, personnel ou les deux.",
          youCanNow: "garder des rôles clairs entre le conseil et le personnel, et trouver les règles clés dans un règlement intérieur.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce que le règlement intérieur ?", options: ["Les règles fiscales de l'État", "La fiche de poste du directeur", "Une liste de donateurs", "Le propre livre de règles de l'organisation : taille du conseil, mandats, quorum et votes"], answer: 3, why: "Le règlement intérieur contient les propres règles de l'organisation sur le fonctionnement du conseil." },
            { objective: "O2", q: "Le président du conseil commence à dire au personnel des programmes comment mener chaque activité quotidienne. Quel est le problème ?", options: ["Aucun ; le président dirige le travail quotidien", "Le conseil fait de la microgestion ; le travail quotidien revient au personnel dirigé par le directeur", "Le président devrait aussi faire la paie", "Le personnel devrait plutôt voter le budget"], answer: 1, why: "Le conseil fixe la direction et surveille ; le personnel mène le travail quotidien." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Les réunions du conseil et les procès-verbaux",
          minutes: 5,
          goal: "Tenir une réunion du conseil qui respecte le règlement intérieur et rédiger un procès-verbal clair.",
          text: [
            "Envoyez l'ordre du jour et les rapports plusieurs jours à l'avance pour que les membres puissent se préparer. Beaucoup de conseils utilisent un ordre du jour groupé pour les points de routine (comme l'approbation du procès-verbal de la dernière réunion), afin de garder du temps pour les grandes questions.",
            "Vérifiez que le quorum est atteint avant de voter. Pour chaque décision, quelqu'un présente une motion, le conseil en discute, et le président fait voter. Les membres qui ont un conflit d'intérêts se retirent de la discussion et du vote.",
            "Le procès-verbal est le compte rendu officiel. Il indique la date, les personnes présentes, si le quorum était atteint, chaque motion et le résultat du vote, les conflits déclarés, et les actions avec leurs responsables. Gardez-le court et factuel : ce n'est pas une transcription mot à mot. Faites-le approuver à la réunion suivante et conservez-le en lieu sûr."
          ],
          steps: ["Envoyez l'ordre du jour et les rapports plusieurs jours à l'avance.", "Utilisez un ordre du jour groupé pour les points de routine.", "Vérifiez le quorum avant tout vote.", "Pour chaque décision : motion, discussion, vote.", "Rédigez le procès-verbal : date, présences, quorum, motions, votes, conflits, actions.", "Faites approuver le procès-verbal à la réunion suivante et conservez-le en lieu sûr."],
          words: [["Procès-verbal", "le compte rendu écrit officiel de ce que le conseil a décidé lors d'une réunion."], ["Motion", "une proposition formelle soumise au vote du conseil."], ["Ordre du jour groupé", "un ensemble de points de routine approuvés en un seul vote (en anglais : consent agenda)."]],
          slides: [
            { title: "Avant la réunion", bullets: ["Ordre du jour et rapports plusieurs jours avant", "Ordre du jour groupé pour les points de routine"] },
            { title: "Prendre les décisions", bullets: ["Vérifier le quorum", "Motion, discussion, vote", "Les membres en conflit se retirent"] },
            { title: "Ce que contient le procès-verbal", bullets: ["Date, présences et quorum", "Chaque motion et le résultat du vote", "Conflits déclarés, actions et responsables"] },
            { title: "Le procès-verbal n'est pas une transcription", bullets: ["Court et factuel", "Approuvé à la réunion suivante", "Conservé en lieu sûr"] }
          ],
          tryIt: "Écrivez un ordre du jour de réunion du conseil d'une page, avec une partie \"ordre du jour groupé\" et deux points de discussion. Puis rédigez un exemple de procès-verbal pour une motion, avec qui l'a présentée, le décompte des voix et le résultat.",
          youCanNow: "tenir une réunion du conseil qui respecte les règles et rédiger un procès-verbal officiel et clair.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce que le procès-verbal du conseil ?", options: ["La transcription mot pour mot de tout ce qui a été dit", "Le compte rendu officiel, court et factuel de la réunion", "L'ordre du jour envoyé avant la réunion", "La liste des numéros de téléphone des membres"], answer: 1, why: "Le procès-verbal est le compte rendu officiel : qui était présent, le quorum, les motions, les votes, les conflits et les actions." },
            { objective: "O3", q: "Seuls quelques membres arrivent et vous ne savez pas si vous pouvez voter. Que vérifiez-vous d'abord ?", options: ["Si le café est prêt", "Si le procès-verbal est assez long", "Si le personnel est d'accord", "Si le quorum fixé par le règlement intérieur est atteint"], answer: 3, why: "Le conseil ne peut prendre de décisions que si le quorum est atteint." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Le rôle du conseil d'administration",
        questions: [
          { objective: "O1", q: "Quel devoir consiste à lire les rapports et à poser des questions avant de voter ?", options: ["Le devoir de loyauté", "Le devoir d'obéissance", "Le devoir de prudence", "Le devoir de silence"], answer: 2, why: "La prudence, c'est prendre des décisions éclairées et réfléchies." },
          { objective: "O1", q: "Un membre du conseil veut que l'association loue des locaux à son entreprise à un prix élevé. Quel devoir est menacé ?", options: ["Le devoir de loyauté", "Le devoir de prudence", "Le devoir d'obéissance", "Aucun"], answer: 0, why: "La loyauté, c'est faire passer l'organisation avant ses propres intérêts." },
          { objective: "O2", q: "Dans une association qui a du personnel salarié, qui recrute en général le directeur exécutif ?", options: ["Le bénévole le plus récent", "Le directeur exécutif lui-même", "Un donateur", "Le conseil d'administration"], answer: 3, why: "Recruter et évaluer le directeur exécutif est une tâche essentielle du conseil." },
          { objective: "O3", q: "Qu'est-ce que le quorum ?", options: ["Le compte bancaire du conseil", "Le nombre minimum de membres présents pour prendre des décisions", "Un type de motion", "Le budget annuel"], answer: 1, why: "Sans quorum, le conseil ne peut pas voter valablement." },
          { objective: "O3", q: "Que doit contenir le procès-verbal du conseil ?", options: ["Chaque mot prononcé par chacun", "Les blagues de la réunion", "Chaque motion et le résultat du vote", "L'adresse personnelle des membres"], answer: 2, why: "Le procès-verbal note les décisions ; ce n'est pas une transcription." }
        ]
      }
    },
    {
      name: "Chapitre 2 : La supervision et la construction du conseil",
      lessons: [
        {
          objectives: ["O4"],
          title: "Gérer les conflits d'intérêts",
          minutes: 5,
          goal: "Suivre des étapes claires quand un membre du conseil a un conflit d'intérêts.",
          text: [
            "Il y a conflit d'intérêts quand un membre du conseil, sa famille ou son entreprise pourrait profiter d'une décision du conseil. Les conflits sont fréquents dans les petites communautés et ne sont pas toujours une faute, mais ils doivent être gérés ouvertement.",
            "La plupart des conseils adoptent une politique écrite sur les conflits d'intérêts et demandent à chaque membre de signer chaque année une déclaration d'intérêts. Quand un conflit apparaît, le membre le signale au conseil et se retire de la discussion et du vote ; le conseil décide alors si l'accord est équitable pour l'organisation, idéalement après avoir comparé d'autres options. Le procès-verbal note tout cela.",
            "Exemple : le cousin du trésorier tient une imprimerie qui fait une offre pour imprimer le rapport annuel. Le trésorier le déclare et se retire ; le conseil compare trois devis et choisit le meilleur rapport qualité-prix. Les transactions avec des proches de l'organisation peuvent avoir des conséquences fiscales et juridiques : demandez l'avis d'un avocat ou d'un comptable pour toute somme importante."
          ],
          steps: ["Adoptez une politique écrite sur les conflits d'intérêts.", "Faites signer chaque année une déclaration d'intérêts à chaque membre.", "Quand un conflit apparaît, le membre le déclare.", "Le membre se retire de la discussion et du vote.", "Le conseil vérifie que l'accord est équitable, idéalement en comparant des options.", "Notez tout dans le procès-verbal ; demandez conseil pour les gros accords."],
          words: [["Conflit d'intérêts", "situation où les intérêts personnels d'une personne pourraient influencer une décision qu'elle prend pour l'organisation."], ["Déclaration", "le fait d'informer ouvertement le conseil d'un conflit possible."], ["Se récuser", "se retirer d'une discussion et d'un vote à cause d'un conflit."]],
          slides: [
            { title: "Qu'est-ce qu'un conflit d'intérêts ?", bullets: ["Un membre, sa famille ou son entreprise pourrait en profiter", "Fréquent, pas toujours une faute", "Doit être géré ouvertement"] },
            { title: "Politique et déclaration annuelle", bullets: ["Politique écrite sur les conflits d'intérêts", "Déclaration d'intérêts signée chaque année"] },
            { title: "Quand un conflit apparaît", bullets: ["Le déclarer", "Se retirer de la discussion et du vote", "Le conseil vérifie que l'accord est équitable", "Le noter dans le procès-verbal"] }
          ],
          tryIt: "Écrivez avec des mots simples les cinq étapes que votre conseil suivra quand un conflit apparaît. Puis appliquez-les à ce cas : le conjoint d'un membre du conseil veut vendre une camionnette d'occasion à l'association.",
          youCanNow: "gérer un conflit d'intérêts par la déclaration, la récusation, un examen équitable et une trace écrite.",
          quickCheck: [
            { objective: "O4", q: "Quand y a-t-il un conflit d'intérêts ?", options: ["Quand un membre, sa famille ou son entreprise pourrait profiter d'une décision du conseil", "Quand deux membres ne sont pas d'accord", "Quand une réunion finit tard", "Quand le budget est serré"], answer: 0, why: "Il y a conflit quand une personne du conseil pourrait tirer un avantage personnel de la décision." },
            { objective: "O4", q: "La sœur d'un membre dirige le traiteur qui fait une offre pour votre gala. Que se passe-t-il ensuite ?", options: ["Le membre vote, puisque la famille aide", "On le cache dans le procès-verbal", "Le membre le déclare et se retire, et le conseil compare les devis", "On annule le gala"], answer: 2, why: "Le membre déclare le conflit et quitte la discussion et le vote, et le conseil vérifie que l'accord est équitable." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Surveillance financière, Form 990 et enregistrement auprès de l'État",
          minutes: 6,
          goal: "Examiner les finances d'une association en tant que membre du conseil et inscrire les déclarations annuelles dans un calendrier.",
          text: [
            "Chaque membre du conseil, pas seulement le trésorier, doit comprendre l'essentiel : le budget approuvé, les rapports réguliers qui comparent les recettes et les dépenses réelles au budget, le bilan (ce que l'organisation possède et ce qu'elle doit), la trésorerie disponible, et les dons affectés, qui doivent servir à un but précis. Posez des questions quand les chiffres changent beaucoup. Mettez en place des contrôles, comme deux personnes impliquées dans le paiement des factures, et un examen externe ou un audit quand la taille de l'organisation le justifie.",
            "La plupart des organisations exonérées d'impôt doivent déposer chaque année une déclaration auprès de l'IRS, choisie dans la série Form 990. Selon l'IRS, les organisations dont les recettes brutes sont normalement de 50 000 $ ou moins peuvent déposer le Form 990-N (e-Postcard, une déclaration électronique simplifiée) ; celles dont les recettes brutes sont inférieures à 200 000 $ et le total des actifs inférieur à 500 000 $ peuvent déposer le Form 990-EZ ou le Form 990 ; les plus grandes déposent le Form 990. La déclaration est due le 15e jour du 5e mois après la fin de l'exercice (le 15 mai pour un exercice qui se termine le 31 décembre). Selon l'IRS, les organisations qui ne déposent pas leur déclaration trois années de suite perdent automatiquement leur exonération d'impôt. Ces déclarations doivent aussi être mises à la disposition du public. Les seuils et les règles peuvent changer, alors vérifiez sur irs.gov chaque année. Les églises et certains autres groupes ont des règles différentes.",
            "Les États américains ont leurs propres règles. En Californie, le Registry of Charities and Fundraisers du Procureur général (le registre des œuvres caritatives et des collecteurs de fonds) exige que les œuvres caritatives s'enregistrent et déposent des rapports annuels, sauf exceptions limitées. Consultez oag.ca.gov/charities pour les formulaires et les frais actuels. Les autres États ont leurs propres bureaux des œuvres caritatives. Faites-vous aider par un comptable pour préparer les déclarations, et le conseil doit les examiner avant leur dépôt."
          ],
          steps: ["Approuvez un budget annuel.", "Examinez à chaque réunion les rapports budget-réalisé.", "Vérifiez la trésorerie, le bilan et les dons affectés.", "Mettez en place des contrôles : deux personnes pour les paiements ; un examen externe si nécessaire.", "Inscrivez la date limite du Form 990 au calendrier ; confirmez la bonne version sur irs.gov.", "Inscrivez les déclarations à l'État au calendrier (Californie : oag.ca.gov/charities).", "Examinez les déclarations avant leur envoi ; faites-vous aider par un comptable."],
          words: [["Budget-réalisé", "un rapport qui compare les recettes et les dépenses prévues avec ce qui s'est vraiment passé."], ["Bilan", "un rapport de ce qu'une organisation possède et doit à une date donnée."], ["Don affecté", "un don qui doit servir à un but précis."], ["Form 990", "la déclaration annuelle d'information à l'IRS pour la plupart des organisations exonérées d'impôt."], ["Registry of Charities and Fundraisers", "le service du Procureur général de Californie où les œuvres caritatives s'enregistrent et déposent leurs rapports annuels."]],
          slides: [
            { title: "Ce que chaque membre examine", bullets: ["Le budget et le rapport budget-réalisé", "Le bilan et la trésorerie", "Les dons affectés"] },
            { title: "Les contrôles", bullets: ["Deux personnes impliquées dans les paiements", "Examen externe ou audit si la taille le justifie", "Poser des questions quand les chiffres changent beaucoup"] },
            { title: "Série Form 990 de l'IRS (vérifiez sur irs.gov)", bullets: ["990-N : recettes brutes normalement de 50 000 $ ou moins", "990-EZ : recettes < 200 000 $ et actifs < 500 000 $", "990 : les plus grandes organisations", "Dû le 15e jour du 5e mois ; 3 années sans dépôt = exonération perdue"] },
            { title: "Les règles de l'État", bullets: ["Californie : s'enregistrer au Registry of Charities du Procureur général", "Déposer des rapports annuels ; voir oag.ca.gov/charities", "Prendre un comptable ; le conseil examine avant le dépôt"] }
          ],
          sources: [
            { name: "IRS : série Form 990, quels formulaires déposent les organisations exonérées (en anglais)", url: "https://www.irs.gov/charities-non-profits/form-990-series-which-forms-do-exempt-organizations-file-filing-phase-in" },
            { name: "IRS : dates limites de déclaration des organisations exonérées (en anglais)", url: "https://www.irs.gov/charities-non-profits/return-due-dates-for-exempt-organizations-annual-return" },
            { name: "IRS : retrait automatique de l'exonération (en anglais)", url: "https://www.irs.gov/charities-non-profits/automatic-revocation-of-exemption" },
            { name: "IRS : publicité des déclarations des organisations exonérées (en anglais)", url: "https://www.irs.gov/charities-non-profits/public-disclosure-and-availability-of-exempt-organizations-returns-and-applications-documents-subject-to-public-disclosure" },
            { name: "Procureur général de Californie : Registry of Charities and Fundraisers (en anglais)", url: "https://oag.ca.gov/charities" },
            { name: "Procureur général de Californie : guide pour les œuvres caritatives (PDF, en anglais)", url: "https://oag.ca.gov/system/files/media/Guide%20for%20Charities.pdf" }
          ],
          tryIt: "Cherchez une association que vous connaissez dans une base de données publique ou dans son rapport annuel. Notez à peu près ses recettes annuelles et déterminez quelle version du Form 990 elle dépose probablement, puis confirmez la règle sur irs.gov. Inscrivez dans un calendrier annuel la date limite de son Form 990 et, si elle est en Californie, le renouvellement de son enregistrement au Registry.",
          youCanNow: "examiner les finances d'une association en tant que membre du conseil et planifier ses déclarations annuelles à l'IRS et à l'État.",
          quickCheck: [
            { objective: "O5", q: "Que montre le bilan ?", options: ["Qui est venu à la réunion", "La durée maximale des mandats du conseil", "Les événements de l'année prochaine", "Ce que l'organisation possède et ce qu'elle doit"], answer: 3, why: "Le bilan montre ce que l'organisation possède et ce qu'elle doit." },
            { objective: "O5", q: "L'exercice de votre association se termine le 31 décembre. Qu'inscrivez-vous au calendrier du conseil ?", options: ["Rien ; les déclarations sont facultatives", "La date limite du Form 990, le 15 mai, après avoir confirmé la version sur irs.gov", "Un rappel pour déclarer tous les cinq ans", "Seulement la fête de fin d'année"], answer: 1, why: "La déclaration est due le 15e jour du 5e mois après la fin de l'exercice, et la version se confirme sur irs.gov." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Recruter et accueillir les membres du conseil",
          minutes: 5,
          goal: "Utiliser une grille de compétences pour recruter les membres du conseil dont votre association a besoin.",
          text: [
            "Recrutez de façon réfléchie, pas seulement parmi vos amis. Faites une grille de compétences : listez les compétences et les réseaux dont votre conseil a besoin (par exemple finances, droit, collecte de fonds, la communauté que vous servez, technologie) et indiquez quels membres actuels les ont. Les manques vous disent qui chercher. Incluez des personnes qui ont vécu elles-mêmes le problème sur lequel vous travaillez.",
            "Soyez honnête sur la fonction : combien de réunions, quels comités, combien de temps, et s'il est attendu de donner ou d'aider à collecter de l'argent. Rencontrez les candidats plus d'une fois, invitez-les à une réunion et vérifiez leurs références. Élisez-les selon la procédure de votre règlement intérieur.",
            "Accueillez les nouveaux membres avec une séance d'intégration : la mission, le règlement intérieur, le budget et le dernier rapport financier, les procès-verbaux récents, la politique sur les conflits d'intérêts à signer, et un parrain au sein du conseil. Évaluez chaque année le travail du conseil lui-même, et limitez le nombre de mandats pour que de nouvelles personnes continuent d'arriver."
          ],
          steps: ["Faites une grille de compétences ; trouvez les manques.", "Cherchez au-delà de vos amis ; incluez l'expérience vécue.", "Écrivez une description honnête de la fonction et du temps demandé.", "Rencontrez les candidats, invitez-les à une réunion, vérifiez leurs références.", "Élisez-les selon la procédure du règlement intérieur.", "Organisez une séance d'intégration et désignez un parrain.", "Évaluez le conseil chaque année."],
          words: [["Grille de compétences", "un tableau des compétences dont le conseil a besoin et des membres qui les ont."], ["Intégration", "l'accueil et la formation que reçoit un nouveau membre."], ["Limite de mandats", "un plafond au nombre de mandats qu'une personne peut faire à la suite."]],
          slides: [
            { title: "Recruter de façon réfléchie", bullets: ["Faire une grille de compétences", "Trouver les manques", "Chercher au-delà des amis ; inclure l'expérience vécue"] },
            { title: "Être honnête sur la fonction", bullets: ["Réunions, comités, temps", "Attentes en dons ou en collecte de fonds", "Se rencontrer plus d'une fois, vérifier les références"] },
            { title: "Bien les accueillir", bullets: ["Dossier d'intégration : mission, règlement, finances, procès-verbaux", "Signer la politique sur les conflits d'intérêts", "Désigner un parrain au sein du conseil"] },
            { title: "Renouveler le conseil", bullets: ["Évaluer le conseil chaque année", "Limiter le nombre de mandats"] }
          ],
          tryIt: "Tâche finale : préparez votre liste de contrôle de gouvernance d'une page. Incluez les trois devoirs, un partage conseil-personnel pour cinq décisions, un ordre du jour et un modèle de procès-verbal, les étapes en cas de conflit d'intérêts, un calendrier annuel des déclarations et des finances, et un plan de recrutement pour deux sièges à partir d'une grille de compétences.",
          youCanNow: "recruter et accueillir des membres du conseil qui comblent de vrais manques, et garder un conseil en bonne santé année après année.",
          quickCheck: [
            { objective: "O2", q: "Que montre une grille de compétences ?", options: ["Les anniversaires des membres", "Le calendrier des réunions", "Les compétences et les relations dont le conseil a besoin, et quels membres les ont", "Le budget annuel"], answer: 2, why: "Une grille de compétences montre ce qui manque, et donc qui recruter." },
            { objective: "O2", q: "Votre grille montre que personne n'a de compétences en finances. Quelle est une bonne étape suivante ?", options: ["Chercher au-delà de vos amis une personne compétente en finances, la rencontrer et l'inviter à une réunion", "Demander à votre meilleur ami, quelles que soient ses compétences", "Laisser le manque ; ce n'est pas important", "Faire tout faire au trésorier"], answer: 0, why: "Recrutez exprès pour combler les manques, et rencontrez les candidats et faites-les assister d'abord à une réunion." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : La supervision et la construction du conseil",
        questions: [
          { objective: "O4", q: "Un membre du conseil a un conflit d'intérêts sur un contrat. Que doit-il faire ?", options: ["Voter d'abord, puis le mentionner", "Le déclarer et se retirer de la discussion et du vote", "Ne rien dire", "Démissionner du conseil"], answer: 1, why: "La déclaration et la récusation permettent au conseil de décider équitablement." },
          { objective: "O5", q: "Quel rapport compare les recettes et les dépenses prévues et réelles ?", options: ["Le rapport budget-réalisé", "Le procès-verbal", "Le règlement intérieur", "La grille de compétences"], answer: 0, why: "Le rapport budget-réalisé montre où le plan et la réalité diffèrent." },
          { objective: "O5", q: "Selon l'IRS, quelles petites organisations peuvent déposer le Form 990-N (e-Postcard) ?", options: ["N'importe quelle organisation", "Celles dont les recettes brutes sont normalement de 50 000 $ ou moins", "Seulement les églises", "Celles qui ont plus de 1 million de dollars d'actifs"], answer: 1, why: "L'IRS fixe la limite du 990-N à des recettes brutes normalement de 50 000 $ ou moins." },
          { objective: "O5", q: "Que se passe-t-il si une organisation ne dépose pas sa déclaration annuelle obligatoire trois années de suite ?", options: ["Rien", "Elle reçoit seulement une lettre d'avertissement", "Elle doit changer de nom", "Elle perd automatiquement son exonération d'impôt"], answer: 3, why: "Selon l'IRS, l'exonération est retirée automatiquement." },
          { objective: "O2", q: "Un premier outil utile pour recruter des membres du conseil est :", options: ["Une grille de compétences", "Une liste de vos amis uniquement", "Une tombola", "La page de couverture du règlement intérieur"], answer: 0, why: "La grille montre quelles compétences manquent." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : La gouvernance du conseil d'administration d'une association",
    questions: [
      { objective: "O1", q: "Quel devoir consiste à garder l'association fidèle à sa mission et à la loi ?", options: ["Le devoir de prudence", "Le devoir de loyauté", "Le devoir d'obéissance", "Le devoir de rapidité"], answer: 2, why: "L'obéissance, c'est la mission, le règlement intérieur et la loi." },
      { objective: "O1", q: "Un membre du conseil ne lit pas le budget et vote oui quand même. Quel devoir est le plus faible ?", options: ["Le devoir de prudence", "Le devoir de loyauté", "Le devoir d'obéissance", "Aucun ; c'est normal"], answer: 0, why: "La prudence exige des décisions éclairées." },
      { objective: "O1", q: "À qui s'appliquent les trois devoirs du conseil ?", options: ["Seulement au président", "Seulement au trésorier", "Seulement au personnel salarié", "À chaque membre du conseil"], answer: 3, why: "Chaque membre porte ces devoirs." },
      { objective: "O2", q: "Dans une association qui a du personnel salarié, qui gère les programmes au quotidien ?", options: ["Le président du conseil", "Le personnel, dirigé par le directeur exécutif", "Les donateurs", "L'IRS"], answer: 1, why: "Le personnel fait le travail quotidien ; le conseil supervise." },
      { objective: "O2", q: "Un conseil vote oui à tout sans poser de questions. Comment appelle-t-on cela ?", options: ["Une bonne gouvernance", "La microgestion", "L'approbation automatique", "La récusation"], answer: 2, why: "L'approbation automatique ne respecte pas le devoir de prudence." },
      { objective: "O2", q: "Où trouvez-vous la taille de votre conseil, la durée des mandats et les règles de vote ?", options: ["Dans le règlement intérieur", "Dans le Form 990-N", "Dans une lettre d'un donateur", "Dans un journal"], answer: 0, why: "Le règlement intérieur est le livre de règles de l'organisation." },
      { objective: "O3", q: "Avant que le conseil vote, le président doit vérifier :", options: ["Que tout le monde est d'accord", "Que le quorum est atteint", "Que la presse est présente", "Que le vote est secret"], answer: 1, why: "Les décisions ont besoin du quorum pour être valables." },
      { objective: "O3", q: "Un ordre du jour groupé sert pour :", options: ["Les grands débats de stratégie", "Le renvoi du directeur", "Les conflits d'intérêts", "Les points de routine approuvés en un seul vote"], answer: 3, why: "Il garde du temps pour les sujets importants." },
      { objective: "O3", q: "Le procès-verbal du conseil doit être :", options: ["Court, factuel et approuvé à la réunion suivante", "Une transcription mot à mot", "Caché au conseil", "Rédigé seulement s'il reste du temps"], answer: 0, why: "Le procès-verbal note les décisions et il est approuvé officiellement." },
      { objective: "O4", q: "Une déclaration d'intérêts doit être signée :", options: ["Jamais", "Seulement quand on est pris", "Chaque année par chaque membre du conseil", "Seulement par le personnel"], answer: 2, why: "La déclaration annuelle garde les conflits au grand jour." },
      { objective: "O4", q: "Le conjoint d'un membre veut vendre une camionnette à l'association. Le conseil doit :", options: ["L'acheter à n'importe quel prix", "Faire déclarer le membre et le faire se retirer, puis vérifier que l'accord est équitable", "Laisser le membre décider", "Ne pas le noter dans le procès-verbal"], answer: 1, why: "Déclarer, se récuser, examiner équitablement et noter." },
      { objective: "O4", q: "\"Se récuser\" veut dire :", options: ["Se retirer d'une discussion et d'un vote à cause d'un conflit", "Démissionner pour toujours", "Approuver un budget", "Convoquer une réunion"], answer: 0, why: "La récusation garde la décision équitable." },
      { objective: "O5", q: "Un don affecté est :", options: ["Un don que le conseil peut dépenser pour n'importe quoi", "Un prêt", "Un don qui doit servir à un but précis", "Un don qui a été refusé"], answer: 2, why: "Les donateurs fixent des conditions que l'association doit respecter." },
      { objective: "O5", q: "Un bon contrôle financier, c'est :", options: ["Une seule personne gère tout l'argent seule", "Aucun rapport", "Payer les factures uniquement en espèces", "Deux personnes impliquées dans le paiement des factures"], answer: 3, why: "Deux personnes réduisent le risque d'erreur et de vol." },
      { objective: "O5", q: "Selon l'IRS, une organisation dont les recettes brutes sont inférieures à 200 000 $ et les actifs totaux inférieurs à 500 000 $ peut déposer :", options: ["Le Form 990-EZ ou le Form 990", "Seulement le Form 990-PF", "Aucune déclaration, jamais", "Le Form 1040"], answer: 0, why: "L'IRS autorise le 990-EZ ou le 990 dans cette tranche." },
      { objective: "O5", q: "Pour une association dont l'exercice se termine le 31 décembre, le Form 990 est dû le :", options: ["1er janvier", "1er avril", "15 mai", "31 décembre"], answer: 2, why: "Il est dû le 15e jour du 5e mois après la fin de l'exercice." },
      { objective: "O5", q: "Les déclarations Form 990 sont-elles cachées au public ?", options: ["Oui, toujours", "Non ; elles doivent être mises à la disposition du public", "Seule la première page est publique", "Seuls les donateurs peuvent les voir"], answer: 1, why: "L'IRS exige que les déclarations annuelles soient accessibles au public." },
      { objective: "O5", q: "En Californie, les œuvres caritatives s'enregistrent et déposent leurs rapports annuels auprès :", options: ["Du DMV (le service des permis de conduire)", "De la foire du comté", "De la FAA (l'aviation civile)", "Du Registry of Charities and Fundraisers du Procureur général"], answer: 3, why: "Le Registry du Procureur général gère l'enregistrement des œuvres caritatives en Californie." },
      { objective: "O5", q: "Où les membres du conseil doivent-ils vérifier chaque année les règles de déclaration en vigueur ?", options: ["Sur les sites officiels comme irs.gov et auprès du bureau des œuvres caritatives de leur État", "Sur un blog au hasard", "De mémoire, d'après l'année dernière", "Selon l'avis d'un ami"], answer: 0, why: "Les règles changent ; les sources officielles sont à jour." },
      { objective: "O2", q: "Un nouveau membre du conseil doit recevoir :", options: ["Rien ; il se débrouillera", "Seulement un tee-shirt", "Une séance d'intégration avec la mission, le règlement intérieur, les finances, les procès-verbaux et la politique sur les conflits", "Les mots de passe du directeur exécutif"], answer: 2, why: "L'intégration prépare les membres à remplir leurs devoirs." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      1,
      3,
      5,
      6,
      8,
      10,
      11,
      14,
      15
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Les trois devoirs",
        objective: "O1",
        notYet: "Un devoir manque ou est mal expliqué.",
        meets: "La prudence, la loyauté et l'obéissance sont chacune expliquées avec des mots simples.",
        exceeds: "Chaque devoir a un exemple réel où on le respecte et où on le trahit."
      },
      {
        name: "Rôles et recrutement",
        objective: "O2",
        notYet: "Les décisions ne sont pas réparties, ou le recrutement se fait seulement parmi les amis.",
        meets: "Cinq décisions réparties entre conseil, personnel ou les deux, et deux sièges libres associés à des manques dans une grille de compétences.",
        exceeds: "Note aussi les règles du règlement intérieur que le conseil ne suit pas, et un plan d'accueil pour les nouveaux membres."
      },
      {
        name: "Réunions et procès-verbal",
        objective: "O3",
        notYet: "Pas d'ordre du jour, ou le procès-verbal oublie le quorum, les motions ou les votes.",
        meets: "Un ordre du jour avec un ensemble de points approuvés en un seul vote, et un modèle de procès-verbal avec toutes les parties obligatoires.",
        exceeds: "Un exemple de procès-verbal pour une motion, avec qui l'a proposée, le décompte des voix et le résultat."
      },
      {
        name: "Conflit d'intérêts",
        objective: "O4",
        notYet: "Des étapes manquent ou ne sont pas dans l'ordre.",
        meets: "Déclarer, se retirer, vérifier que l'accord est équitable et l'inscrire, dans l'ordre.",
        exceeds: "Comprend aussi le formulaire de déclaration signé chaque année et le moment où demander un avis juridique."
      },
      {
        name: "Finances et calendrier des déclarations",
        objective: "O5",
        notYet: "Pas de version ni de date limite du Form 990, ou pas de déclaration à l'État.",
        meets: "Les examens du budget, la bonne version du Form 990 et sa date limite, et tout enregistrement auprès de l'État, confirmés sur les sites officiels.",
        exceeds: "Liste aussi des contrôles financiers, comme deux personnes pour les paiements, et indique où chaque règle a été vérifiée."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les conseils qui adoptent une politique écrite sur les conflits d'intérêts et des formulaires de déclaration annuels dans les 90 jours",
      "Les organisations qui déposent leur Form 990 et leurs déclarations à l'État à temps l'année suivante",
      "Les conseils qui pourvoient leurs sièges libres avec une grille de compétences et organisent un accueil pour les nouveaux membres"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur ou un téléphone avec Internet pour consulter irs.gov et le bureau des œuvres caritatives de l'État",
      "Le règlement intérieur de votre organisation, son dernier rapport budgétaire et des procès-verbaux récents, ou un jeu d'exemples",
      "Du papier ou un document pour la liste de contrôle d'une page",
      "Environ 60 minutes en tout : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Organisez-le comme une séance de retraite du conseil : les membres construisent la liste de contrôle ensemble à partir de leur propre règlement intérieur et de leurs rapports.",
      "Rappelez au groupe qu'il s'agit d'une formation générale, pas d'un conseil juridique ou fiscal ; orientez les questions sérieuses vers un avocat ou un comptable spécialisé dans les associations.",
      "Demandez aux apprenants de confirmer les seuils du Form 990 et les règles de l'État sur les sites officiels pendant la séance, car ils peuvent changer.",
      "Utilisez des jeux de rôle pour les étapes du conflit d'intérêts, afin que les membres s'entraînent à se retirer d'un vote.",
      "Évaluez la liste de contrôle avec la grille et donnez un retour sur une ligne « Pas encore » à la fois."
    ]
  }
};
