"use strict";

// Koach Learn course (French translation of re-entry/reentry-family-ties.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "reentry-family-ties-fr",
  lang: "fr",
  translationOf: "reentry-family-ties",
  category: "Re-Entry",
  name: "Renouer les liens avec la famille et la communauté",
  skills: "Préparer un premier contact, Renouer avec vos enfants, Demander une révision de la pension alimentaire, Écouter et vous excuser, Trouver des mentors et des groupes, Poser des limites saines",
  outcome: "faire un plan pour renouer avec votre famille et vos enfants, faire le premier pas pour la pension alimentaire si cela vous concerne, trouver des mentors et un soutien dans la communauté, et poser des limites qui protègent vos progrès.",
  about: [
    "Revenir chez soi, ce n'est pas seulement trouver un emploi et un logement. Les personnes autour de vous comptent tout autant. La famille, les enfants, les amis, les mentors et les groupes de la communauté peuvent vous aider à rester sur la bonne voie, et renouer ces liens est une compétence qui s'apprend.",
    "Dans ce cours, vous préparerez un premier contact, vous apprendrez à renouer avec vos enfants à leur rythme, à demander une révision de la pension alimentaire si le montant ne correspond plus à vos revenus, à vous entraîner à écouter et à vous excuser, à trouver des mentors et des groupes, et à poser des limites saines. Vous ferez aussi une liste de soutien qui comprend le 988 Suicide and Crisis Lifeline (ligne d'écoute pour le suicide et les crises).",
    "Chaque famille est différente. Certaines personnes vous accueilleront vite, d'autres ont besoin de temps, et certains contacts peuvent ne pas être sûrs ou pas autorisés. Respectez toujours les décisions du tribunal, et demandez à un conseiller, à l'aide juridique ou à votre agent de libération conditionnelle ou de probation quand vous n'êtes pas sûr.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche à faire tout de suite. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Écrivez un plan d'une page pour renouer des liens et trouver du soutien : le premier membre de votre famille que vous contacterez et votre premier message, une étape pour votre rôle de parent ou la pension alimentaire si cela vous concerne, deux soutiens dans la communauté (un mentor, un groupe ou une communauté religieuse), deux limites que vous allez tenir, et une liste de soutien avec les personnes et les numéros à appeler, dont le 988.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes qui sortent de prison (réinsertion) et qui veulent renouer avec leur famille, leurs enfants, leurs amis et leur communauté. Certains sont des parents qui doivent payer une pension alimentaire ; certains ont des décisions de justice qui limitent les contacts.",
    startingPoint: "Ils connaissent les personnes qu'ils veulent contacter et ont parfois des contacts par téléphone ou par lettre. Beaucoup ne savent pas comment commencer, ont peur d'être rejetés et ne savent pas comment fonctionnent les révisions de pension alimentaire, le mentorat ou les groupes de soutien.",
    gap: "Des liens forts avec la famille et la communauté aident à rester sur la bonne voie après la sortie, mais un premier contact précipité ou mal préparé peut abîmer une relation, et une pension alimentaire ignorée peut devenir une grosse dette. Les apprenants ont besoin d'un plan pour renouer au rythme des autres, reconstruire la confiance, trouver du soutien et protéger leurs progrès.",
    constraints: [
      "Niveau de lecture : des mots simples et des phrases courtes (fin d'école primaire environ)",
      "Appareils : un téléphone simple ou un smartphone ; du papier et un stylo suffisent aussi",
      "Temps : des leçons d'environ 5 minutes, à caser autour du travail et des rendez-vous",
      "Les décisions de justice, les interdictions de contact et les conditions de libération conditionnelle ou de mise à l'épreuve passent toujours en premier",
      "Sujets sensibles : les apprenants ne partagent que ce qu'ils veulent, et le 988 figure sur chaque liste de soutien"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir des personnes avec qui vous voulez renouer", action: "choisir qui contacter en premier et écrire un premier message court et respectueux", standard: "sans demande d'argent, sans reproche ni pression, et en respectant toute décision de justice" },
    { id: "O2", condition: "Pour un enfant avec qui vous voulez renouer", action: "préparer une première visite ou un premier appel qui met les besoins de l'enfant en premier", standard: "avec des questions pour la personne qui s'occupe de l'enfant et une petite promesse que vous pouvez tenir" },
    { id: "O3", condition: "Face à une pension alimentaire qui ne correspond plus à vos revenus", action: "demander une révision à votre service de pension alimentaire", standard: "avec les coordonnées du service, les papiers nécessaires et une date pour le contacter" },
    { id: "O4", condition: "Pendant une conversation difficile", action: "utiliser l'écoute, les phrases en « je » et des excuses en trois parties", standard: "sans « mais » dans les excuses et sans demander à être pardonné" },
    { id: "O5", condition: "Avec le 211, votre conseiller ou des groupes locaux", action: "trouver un mentor et un groupe de la communauté, et demander au mentor un engagement précis", standard: "avec les coordonnées de chacun et les mots exacts de votre demande" },
    { id: "O6", condition: "Face à des personnes ou des situations qui pourraient vous faire reculer", action: "poser deux limites saines et écrire une liste de soutien qui comprend le 988", standard: "avec la liste gardée dans votre téléphone et sur papier" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Renouer avec la famille et les enfants",
      lessons: [
        {
          objectives: ["O1"],
          title: "Préparer votre premier contact",
          minutes: 5,
          goal: "Choisir qui contacter en premier et écrire un premier message court et respectueux.",
          text: [
            "Pendant votre absence, votre famille a continué à vivre. Les enfants ont grandi, des gens ont déménagé, certaines relations se sont renforcées et d'autres ont été blessées. Renouer se passe mieux quand on le prépare au lieu d'arriver sans prévenir.",
            "Commencez par faire une liste des personnes que vous voulez retrouver dans votre vie. À côté de chaque nom, notez comment les choses se sont arrêtées et s'il existe une décision du tribunal, comme une interdiction de contact ou une décision de garde. Respectez chaque décision. Si vous n'êtes pas sûr, demandez à votre agent de libération conditionnelle ou de probation, ou à l'aide juridique.",
            "Choisissez une personne qui sera sans doute ouverte, et commencez petit : une lettre, un SMS ou un court appel. Dites que vous êtes rentré, que vous aimeriez reprendre contact, et laissez-la choisir le rythme. Ne demandez pas d'argent ni un endroit où dormir dans le premier message.",
            "Attendez-vous à des sentiments mélangés, y compris les vôtres. Si quelqu'un n'est pas prêt, remerciez-le et laissez la porte ouverte. Ce n'est pas la fin ; c'est le début."
          ],
          steps: ["Listez les personnes avec qui vous voulez renouer.", "Notez comment les choses se sont arrêtées et toute décision du tribunal ; respectez chaque décision.", "Choisissez une personne qui sera sans doute ouverte.", "Écrivez un court message : vous êtes rentré, vous aimeriez reprendre contact, elle peut choisir le rythme.", "Envoyez-le, puis laissez-lui le temps de répondre."],
          words: [["Interdiction de contact (no-contact order)", "une décision du tribunal qui vous interdit de contacter une certaine personne."], ["Décision de garde (custody order)", "une décision du tribunal qui dit avec qui vivent les enfants et qui prend les décisions pour eux."], ["Rythme", "la vitesse à laquelle les choses se passent."]],
          slides: [
            { title: "Préparez, ne surprenez pas", bullets: ["La famille a continué à vivre pendant votre absence", "Un premier contact préparé se passe mieux"] },
            { title: "Faites votre liste", bullets: ["Qui vous voulez retrouver dans votre vie", "Comment les choses se sont arrêtées", "Les décisions du tribunal : respectez-les toutes"] },
            { title: "Commencez petit", bullets: ["Une lettre, un SMS ou un court appel", "Dites que vous êtes rentré et voulez reprendre contact", "Laissez l'autre choisir le rythme"] },
            { title: "Si la personne n'est pas prête", bullets: ["Remerciez-la", "Laissez la porte ouverte", "Réessayez plus tard, en douceur"] }
          ],
          tryIt: "Écrivez votre liste de personnes, puis choisissez-en une et écrivez un premier message de trois ou quatre phrases. Lisez-le à voix haute. Enlevez tout ce qui demande de l'argent, accuse quelqu'un ou pousse à répondre vite.",
          youCanNow: "préparer un premier contact, respecter les décisions du tribunal, et écrire un message court et respectueux qui laisse l'autre personne choisir le rythme.",
          quickCheck: [
            { objective: "O1", q: "Que doit contenir un premier message à un membre de votre famille ?", options: ["Une demande pour habiter chez lui", "Que vous êtes rentré et que vous aimeriez renouer", "La liste de ce qu'il a mal fait", "L'exigence d'une réponse aujourd'hui"], answer: 1, why: "Un message court et respectueux ouvre la porte sans mettre de pression." },
            { objective: "O1", q: "Votre frère répond qu'il a besoin de temps avant de parler. Que faites-vous ?", options: ["L'appeler tous les jours jusqu'à ce qu'il réponde", "Aller chez lui sans prévenir", "Le remercier et laisser la porte ouverte", "Demander au reste de la famille de faire pression sur lui"], answer: 2, why: "Respecter son rythme garde la porte ouverte pour plus tard." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Renouer avec vos enfants",
          minutes: 6,
          goal: "Préparer une première visite ou un premier appel avec votre enfant qui met ses besoins en premier.",
          text: [
            "Les enfants ont besoin de trois choses d'un parent qui revient : la sécurité, une honnêteté qu'ils peuvent comprendre, et un parent qui est là encore et encore. Être régulier compte plus que de gros cadeaux ou de grandes promesses.",
            "Travaillez avec l'adulte qui s'occupe de votre enfant aujourd'hui. Demandez-lui ce que l'enfant sait, ce à quoi il est prêt, et quels horaires conviennent. Parlez avec respect de l'autre parent ou de la personne qui s'occupe de l'enfant devant lui, même quand c'est difficile.",
            "Soyez honnête avec des mots adaptés à l'âge de l'enfant. Un jeune enfant a peut-être seulement besoin d'entendre : J'ai fait une erreur, j'étais absent, et maintenant je suis là. Les enfants plus grands peuvent avoir des questions ou de la colère. Écoutez, ne vous disputez pas, et ne faites pas de promesses que vous ne pouvez pas tenir.",
            "Si vous avez besoin de droits de visite ou d'un changement de garde, le site d'aide des tribunaux de votre État explique les formulaires, et les family law facilitators (aides du tribunal pour le droit de la famille) ou l'aide juridique peuvent vous aider. Ne prenez jamais un enfant et ne faites jamais pression sur la personne qui s'en occupe en dehors d'une décision du tribunal."
          ],
          steps: ["Parlez d'abord avec la personne qui s'occupe de l'enfant.", "Demandez ce que l'enfant sait et ce à quoi il est prêt.", "Prévoyez une première visite ou un premier appel court, à un moment qui convient à l'enfant.", "Utilisez des mots honnêtes adaptés à son âge.", "Tenez chaque promesse, en commençant par les petites, comme appeler quand vous l'avez dit."],
          words: [["Personne qui s'occupe de l'enfant", "l'adulte qui s'occupe d'un enfant au quotidien."], ["Droit de visite", "le temps qu'un parent passe avec un enfant qui ne vit pas avec lui, souvent fixé par un tribunal."], ["Family law facilitator", "une personne du tribunal qui explique les formulaires du droit de la famille, souvent gratuitement."]],
          slides: [
            { title: "Ce dont les enfants ont besoin", bullets: ["La sécurité", "Une honnêteté qu'ils peuvent comprendre", "Un parent qui est là encore et encore"] },
            { title: "Travaillez avec la personne qui s'occupe de l'enfant", bullets: ["Demandez ce que l'enfant sait et ce à quoi il est prêt", "Mettez-vous d'accord sur les horaires", "Parlez d'elle avec respect"] },
            { title: "Des mots honnêtes, adaptés à l'âge", bullets: ["Petit : j'étais absent, maintenant je suis là", "Plus grand : écoutez les questions et la colère", "Pas de promesses que vous ne pouvez pas tenir"] },
            { title: "Visites et garde", bullets: ["Utilisez le site d'aide des tribunaux de votre État", "Demandez à un family law facilitator ou à l'aide juridique", "Respectez toujours les décisions du tribunal"] }
          ],
          tryIt: "Écrivez trois questions à poser à la personne qui s'occupe de votre enfant avant une première visite ou un premier appel, et une petite promesse que vous savez pouvoir tenir, comme appeler chaque dimanche à 18 h.",
          youCanNow: "préparer une première visite ou un premier appel qui met votre enfant en premier, travailler avec la personne qui s'en occupe, et tenir de petites promesses qui créent la confiance.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qui construit le plus la confiance d'un enfant quand un parent rentre ?", options: ["Des cadeaux chers", "De grandes promesses sur l'avenir", "Une seule longue visite", "Tenir de petites promesses encore et encore"], answer: 3, why: "Un enfant fait confiance à un parent qui revient toujours et tient ses petites promesses." },
            { objective: "O2", q: "Vous voulez appeler votre fille pour la première fois depuis des années. Que faites-vous d'abord ?", options: ["Parler avec la personne qui s'occupe d'elle", "Appeler son école", "Lui écrire sur les réseaux sociaux", "L'attendre à la sortie de l'école"], answer: 0, why: "La personne qui s'occupe de l'enfant peut aider à préparer un contact qui met ses besoins en premier." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Pension alimentaire : demander une révision",
          minutes: 5,
          goal: "Demander une révision à votre service de pension alimentaire quand le montant ne correspond plus à vos revenus.",
          text: [
            "La pension alimentaire (child support) ne s'arrête pas toute seule quand vos revenus changent. Une pension non payée peut devenir une grosse dette et entraîner, par exemple, la suspension de votre permis de conduire. L'ignorer empire les choses. Demander une révision est la bonne décision.",
            "En Californie, chacun des deux parents peut demander au service local de pension alimentaire une révision et un ajustement, appelé modification. C'est gratuit. C'est possible quand le montant changerait de 20 % ou de $50, selon le plus petit des deux. Les changements qui comptent incluent la perte ou le début d'un emploi, un changement de revenus, un changement de garde, un handicap, l'incarcération et un déploiement militaire. Un parent qui sera incarcéré 60 jours ou plus d'affilée peut demander un montant plus bas avec le formulaire Incarcerated Parent's Request to Review Child Support (demande de révision pour un parent incarcéré).",
            "Apportez des preuves de vos revenus et de vos dépenses, comme des fiches de paie ou une attestation d'aides. Si les deux parents sont d'accord, ils peuvent signer un accord pour le tribunal ; sinon, c'est le tribunal qui décide. Le family law facilitator de votre comté peut vous aider.",
            "Hors de Californie, contactez le service de pension alimentaire de votre État ou de votre nation tribale et demandez comment obtenir une révision. Demandez tôt : dans beaucoup d'endroits, un changement ne compte qu'à partir de la date de votre demande, pas de la date où vos revenus ont baissé."
          ],
          steps: ["Trouvez votre service local de pension alimentaire (en Californie, childsupport.ca.gov).", "Appelez ou écrivez pour demander une révision et un ajustement.", "Réunissez des preuves de vos revenus et de vos dépenses.", "Gardez des copies et notez la date de votre demande.", "Payez ce que vous pouvez en attendant, et gardez une trace de chaque paiement."],
          words: [["Décision de pension alimentaire", "une décision du tribunal qui dit combien un parent paie pour aider à élever un enfant."], ["Modification", "un changement d'une décision de pension alimentaire."], ["Arriérés (arrears)", "la pension alimentaire qui était due et n'a pas été payée."]],
          slides: [
            { title: "N'ignorez pas la pension alimentaire", bullets: ["Elle ne s'arrête pas toute seule", "Une pension non payée devient une grosse dette", "Demander une révision est la bonne décision"] },
            { title: "Révision et ajustement en Californie", bullets: ["Chaque parent peut demander ; c'est gratuit", "Changements : emploi, revenus, garde, incarcération", "Incarcéré 60 jours ou plus d'affilée : demandez un montant plus bas"] },
            { title: "Ce qu'il faut apporter", bullets: ["Preuves de revenus et de dépenses", "Aide : le family law facilitator de votre comté"] },
            { title: "Hors de Californie", bullets: ["Contactez le service de votre État ou de votre nation tribale", "Demandez tôt : souvent, cela compte seulement à partir de votre demande"] }
          ],
          sources: [
            { name: "California Department of Child Support Services : Modifier mon paiement", url: "https://childsupport.ca.gov/overview/modify-my-payment/" },
            { name: "California Department of Child Support Services : Accueil", url: "https://childsupport.ca.gov/" }
          ],
          tryIt: "Trouvez le site web ou le numéro de téléphone de votre service de pension alimentaire. Notez comment demander une révision, les papiers demandés, et la date à laquelle vous les contacterez. Si vous n'avez pas de décision de pension, notez une façon d'aider votre enfant ce mois-ci.",
          youCanNow: "demander une révision à votre service de pension alimentaire et apporter les bonnes preuves, au lieu de laisser grossir les impayés.",
          quickCheck: [
            { objective: "O3", q: "Que peut-il arriver si vous ignorez la pension alimentaire après une baisse de revenus ?", options: ["La décision s'arrête toute seule", "Les montants impayés peuvent devenir une grosse dette", "Le service de pension alimentaire l'oublie", "C'est votre enfant qui paie"], answer: 1, why: "Une pension ignorée continue de s'accumuler, d'où l'importance de demander une révision." },
            { objective: "O3", q: "Vous avez perdu des heures de travail et votre pension alimentaire est maintenant trop élevée. Que faites-vous ?", options: ["Arrêter de payer et attendre", "Payer seulement quand vous pouvez", "Demander à un ami d'appeler pour vous", "Contacter votre service de pension alimentaire et demander une révision"], answer: 3, why: "La révision est le moyen officiel d'adapter le montant à vos revenus." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Renouer avec la famille et les enfants",
        questions: [
          { objective: "O1", q: "Vous voulez renouer avec un cousin à qui vous n'avez pas parlé depuis des années. Quelle est la meilleure première étape ?", options: ["Arriver chez lui tard le soir", "Envoyer un court message pour dire que vous êtes rentré et aimeriez reprendre contact", "Lui demander de l'argent tout de suite", "Parler de lui en ligne"], answer: 1, why: "Un message court et respectueux lui laisse choisir le rythme." },
          { objective: "O1", q: "Il existe une interdiction de contact avec un membre de votre famille. Que devez-vous faire ?", options: ["Respecter l'interdiction", "L'ignorer si vous vous sentez prêt", "Demander à un ami de passer des messages", "Le contacter une fois pour expliquer"], answer: 0, why: "Les décisions du tribunal doivent toujours être respectées ; demandez à l'aide juridique ou à votre agent si vous n'êtes pas sûr." },
          { objective: "O2", q: "Qu'est-ce qui compte le plus pour un enfant quand un parent revient ?", options: ["Des cadeaux chers", "De grandes promesses", "Être là encore et encore", "Dire du mal de la personne qui s'occupe de lui"], answer: 2, why: "La régularité crée la confiance d'un enfant plus que les cadeaux ou les promesses." },
          { objective: "O3", q: "Vos revenus ont baissé et vous ne pouvez pas payer votre pension alimentaire. Que faites-vous ?", options: ["Arrêter de payer sans rien dire", "Attendre que la dette soit grosse", "Déménager", "Demander une révision à votre service de pension alimentaire"], answer: 3, why: "Une révision peut baisser le montant ; l'ignorer laisse la dette grossir." },
          { objective: "O3", q: "En Californie, combien coûte une demande de révision de la pension alimentaire ?", options: ["$500", "Rien", "Un mois de pension", "Cela dépend du juge"], answer: 1, why: "La révision et l'ajustement en Californie sont gratuits." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Communauté, limites et soutien",
      lessons: [
        {
          objectives: ["O4"],
          title: "Écouter, vous excuser et reconstruire la confiance",
          minutes: 5,
          goal: "Utiliser l'écoute, les phrases en « je » et de vraies excuses dans une conversation difficile.",
          text: [
            "La confiance se reconstruit par des actes, avec le temps, pas en une seule discussion. Bien communiquer aide à rendre ces actes visibles.",
            "Écoutez d'abord. Laissez l'autre personne finir, puis redites ce que vous avez entendu : Donc tu t'es senti abandonné quand j'ai manqué ta remise de diplôme. Cela montre que vous comprenez, même si vous voyez les choses autrement.",
            "Utilisez des phrases en « je » pour dire ce que vous ressentez sans accuser : Je suis nerveux à propos de ça, au lieu de Tu rends toujours les choses difficiles. De vraies excuses disent ce que vous avez fait, comment cela a blessé l'autre, et ce que vous ferez autrement. Elles ne contiennent pas de mais, et elles n'exigent pas le pardon.",
            "Certaines personnes auront besoin de beaucoup de temps. Soyez patient. Continuez à être là, tenez parole, et laissez la confiance revenir à leur rythme."
          ],
          steps: ["Laissez l'autre personne finir de parler.", "Redites ce que vous avez entendu.", "Dites ce que vous ressentez avec des phrases en « je ».", "Excusez-vous : ce que vous avez fait, comment cela a blessé, ce que vous ferez autrement.", "N'ajoutez pas de mais ; n'exigez pas le pardon.", "Tenez parole ensuite."],
          words: [["Phrase en « je »", "une façon de dire ce que vous ressentez en commençant par je, sans accuser."], ["Reformuler", "redire avec vos propres mots ce que quelqu'un a dit, pour montrer que vous avez compris."], ["Confiance", "croire que quelqu'un fera ce qu'il dit."]],
          slides: [
            { title: "La confiance revient par les actes", bullets: ["Pas en une seule discussion", "La communication aide à rendre les actes visibles"] },
            { title: "Écoutez d'abord", bullets: ["Laissez l'autre finir", "Redites ce que vous avez entendu"] },
            { title: "De vraies excuses", bullets: ["Dites ce que vous avez fait", "Dites comment cela l'a blessé", "Dites ce que vous ferez autrement", "Pas de mais ; pas d'exigence de pardon"] },
            { title: "Soyez patient", bullets: ["Certains ont besoin de beaucoup de temps", "Continuez à être là et tenez parole"] }
          ],
          tryIt: "Écrivez de vraies excuses à une personne, avec les trois parties : ce que vous avez fait, comment cela l'a blessée, et ce que vous ferez autrement. Vérifiez qu'il n'y a pas de mais et que vous ne demandez pas à être pardonné. Vous déciderez plus tard si et quand les partager.",
          youCanNow: "écouter et reformuler, parler avec des phrases en « je », et présenter de vraies excuses qui aident à reconstruire la confiance.",
          quickCheck: [
            { objective: "O4", q: "Quelles sont les trois parties de vraies excuses ?", options: ["Ce que vous avez fait, le mal que cela a causé, et ce que vous ferez autrement", "Pourquoi vous l'avez fait, qui d'autre était fautif, et ce que l'autre devrait faire", "Pardon, mais, et s'il te plaît pardonne-moi", "Un cadeau, un câlin et une promesse d'oublier"], answer: 0, why: "De vraies excuses nomment le mal causé et le changement, sans excuses toutes faites." },
            { objective: "O4", q: "Votre mère commence à vous dire à quel point elle a souffert. Que faites-vous d'abord ?", options: ["Expliquer tout de suite votre point de vue", "Changer de sujet", "L'écouter et la laisser finir", "Quitter la pièce"], answer: 2, why: "Écouter d'abord montre du respect et aide à reconstruire la confiance." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mentors, foi et groupes de la communauté",
          minutes: 5,
          goal: "Trouver un mentor et un groupe de la communauté que vous pouvez rejoindre ce mois-ci.",
          text: [
            "Un mentor est quelqu'un qui a quelques pas d'avance sur vous et qui peut vous conseiller, prendre de vos nouvelles et vous encourager. Beaucoup de programmes de réinsertion mettent les gens en lien avec des mentors, souvent des personnes qui sont elles-mêmes rentrées après une peine.",
            "Les groupes de la communauté vous donnent un endroit où vous avez votre place : groupes de soutien à la réinsertion, réunions de rétablissement, communautés religieuses, clubs de sport, groupes de bénévoles, cours pour les parents et groupes d'anciens des programmes que vous avez finis. Être entouré de gens qui construisent une bonne vie aide à faire pareil.",
            "Pour les trouver, demandez à votre programme de réinsertion, à votre travailleur social ou à votre agent de libération conditionnelle, appelez le 211, ou demandez à une communauté religieuse près de chez vous. Allez-y une fois, puis retournez-y. La plupart des groupes semblent bizarres au début et deviennent plus agréables à la troisième visite.",
            "Quand vous demandez à quelqu'un d'être votre mentor, soyez précis : Pourrions-nous parler 30 minutes une fois par mois ? Je travaille à garder mon emploi et à renouer avec mes enfants."
          ],
          steps: ["Demandez des mentors à votre programme de réinsertion ou à votre travailleur social.", "Appelez le 211 ou demandez à une communauté religieuse quels groupes existent près de chez vous.", "Choisissez un groupe et allez-y au moins trois fois.", "Demandez à un mentor possible un petit engagement précis.", "Remerciez les personnes qui vous aident."],
          words: [["Mentor", "une personne de confiance qui vous conseille et vous soutient pendant que vous progressez."], ["Groupe de soutien", "des personnes qui ont vécu quelque chose de commun et qui se réunissent pour s'aider."], ["Communauté religieuse", "une église, une mosquée, un temple ou un autre lieu de culte et ses membres."]],
          slides: [
            { title: "Pourquoi un mentor", bullets: ["Quelqu'un qui a quelques pas d'avance sur vous", "Conseils, nouvelles et encouragements", "Souvent quelqu'un qui est aussi rentré après une peine"] },
            { title: "Des endroits où avoir sa place", bullets: ["Groupes de réinsertion et de rétablissement", "Communautés religieuses et bénévolat", "Sport, groupes de parents et d'anciens"] },
            { title: "Comment les trouver", bullets: ["Demandez à votre programme ou à votre travailleur social", "Appelez le 211", "Allez-y au moins trois fois"] },
            { title: "Demander à quelqu'un d'être votre mentor", bullets: ["Soyez précis et demandez peu", "30 minutes une fois par mois", "Dites sur quoi vous travaillez"] }
          ],
          sources: [
            { name: "211 : Trouver de l'aide locale", url: "https://www.211.org/" }
          ],
          tryIt: "Trouvez un mentor possible et un groupe de la communauté. Notez comment joindre chacun. Puis écrivez les mots exacts que vous utiliserez pour demander au mentor un petit engagement précis.",
          youCanNow: "trouver un mentor et un groupe de la communauté, et demander du soutien de façon claire et précise.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qu'un mentor ?", options: ["Quelqu'un qui paie vos factures", "Une personne de confiance qui a un peu d'avance sur vous et qui vous conseille et vous soutient", "Votre agent de libération conditionnelle", "N'importe qui que vous avez vu une fois"], answer: 1, why: "Un mentor a fait un chemin semblable au vôtre et vous aide à avancer." },
            { objective: "O5", q: "Vous voulez qu'une personne de votre église soit votre mentor. Que lui dites-vous ?", options: ["Est-ce que vous pouvez arranger ma vie ?", "Pouvez-vous être là chaque fois que j'ai besoin de vous ?", "Pouvez-vous me prêter de l'argent ?", "Pourrions-nous nous voir 30 minutes une fois par mois pour parler de mes objectifs ?"], answer: 3, why: "Une petite demande précise est plus facile à accepter pour un mentor." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Des limites saines et trouver du soutien",
          minutes: 6,
          goal: "Poser deux limites saines et faire une liste de soutien qui comprend le 988.",
          text: [
            "Une limite est une ligne que vous tracez pour protéger votre santé, votre liberté et vos progrès. Certains anciens amis, certains endroits et certaines habitudes peuvent vous tirer en arrière. Une limite peut être : Je ne vais plus dans ce quartier, ou Je ne garde rien dans ma voiture pour personne.",
            "Dites une limite simplement et gentiment : Je tiens à toi, et je ne peux pas être là où on boit en ce moment. Vous n'avez pas besoin de vous disputer ni de l'expliquer plusieurs fois. Les limites vont aussi dans les deux sens : respectez les limites que votre famille pose avec vous.",
            "Revenir chez soi est stressant. Se sentir inquiet, en colère, triste ou seul est courant, et demander de l'aide est normal. Le 988 Suicide and Crisis Lifeline est gratuit, confidentiel et ouvert 24 heures sur 24, tous les jours. Vous pouvez appeler ou envoyer un SMS au 988, ou discuter en ligne sur 988lifeline.org, pour vous-même ou pour quelqu'un qui vous inquiète. En cas d'urgence, appelez le 911.",
            "Faites une liste de soutien : deux ou trois personnes de confiance, votre mentor ou votre groupe, votre travailleur social, et le 988. Gardez-la dans votre téléphone et sur papier."
          ],
          steps: ["Nommez deux situations qui pourraient vous tirer en arrière.", "Écrivez une limite pour chacune.", "Entraînez-vous à dire chacune simplement et gentiment.", "Écrivez votre liste de soutien : personnes de confiance, mentor ou groupe, travailleur social, 988.", "Gardez la liste dans votre téléphone et sur papier."],
          words: [["Limite", "une barrière que vous posez pour protéger votre santé, votre sécurité et vos progrès."], ["988", "la Suicide and Crisis Lifeline ; appel, SMS ou discussion en ligne gratuits, 24 h/24 et 7 j/7."], ["Déclencheur", "une personne, un endroit ou un sentiment qui rend une ancienne habitude plus forte."]],
          slides: [
            { title: "Ce qu'est une limite", bullets: ["Une ligne qui protège vos progrès", "Exemple : je ne vais plus dans ce quartier"] },
            { title: "La dire", bullets: ["Simplement et gentiment", "Pas besoin de vous disputer ou de réexpliquer sans cesse", "Respectez aussi les limites de votre famille"] },
            { title: "988 : de l'aide à toute heure", bullets: ["Appelez ou envoyez un SMS au 988, ou discutez sur 988lifeline.org", "Gratuit, confidentiel, 24 h/24 et 7 j/7", "Urgence : appelez le 911"] },
            { title: "Votre liste de soutien", bullets: ["Deux ou trois personnes de confiance", "Mentor, groupe et travailleur social", "Le 988, dans votre téléphone et sur papier"] }
          ],
          sources: [
            { name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" }
          ],
          tryIt: "Tâche finale : écrivez votre plan d'une page pour renouer des liens et trouver du soutien, avec le premier membre de votre famille que vous contacterez et votre message, une étape pour votre rôle de parent ou la pension alimentaire si cela vous concerne, deux soutiens dans la communauté, deux limites, et votre liste de soutien avec le 988.",
          youCanNow: "poser des limites saines, les dire gentiment, et chercher du soutien, y compris le 988, quand les choses deviennent difficiles.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qu'une limite ?", options: ["Une limite que vous posez pour protéger votre santé et vos progrès", "Une règle que votre famille vous impose", "Une décision de justice", "Un moyen de punir les gens"], answer: 0, why: "Les limites sont des bornes que vous choisissez pour vous protéger et protéger vos progrès." },
            { objective: "O6", q: "Un ancien ami vous invite sans arrêt dans des endroits qui pourraient vous attirer des ennuis. Que faites-vous ?", options: ["Y aller une fois pour qu'il arrête de demander", "Dire non gentiment et proposer autre chose, ou prendre vos distances", "Y aller mais partir tôt", "Bloquer tous les gens que vous connaissez"], answer: 1, why: "Un non clair et gentil protège vos progrès." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Communauté, limites et soutien",
        questions: [
          { objective: "O4", q: "Lesquelles sont de vraies excuses ?", options: ["Je suis désolé, mais c'est toi qui m'as poussé à le faire", "Je suis désolé si tu as été contrarié", "On peut juste oublier ça ?", "J'ai manqué tes anniversaires. Je sais que ça t'a fait du mal. Maintenant, je t'appellerai chaque semaine."], answer: 3, why: "Elles disent ce que vous avez fait, comment cela a blessé et ce que vous ferez autrement." },
          { objective: "O4", q: "Laquelle est une phrase en « je » ?", options: ["Tu n'écoutes jamais", "Je suis nerveux à propos de cette discussion", "Tu gâches toujours tout", "Tout le monde est contre moi"], answer: 1, why: "Une phrase en « je » dit ce que vous ressentez sans accuser." },
          { objective: "O5", q: "Quelle est une bonne façon de demander à quelqu'un d'être votre mentor ?", options: ["Pourrions-nous parler 30 minutes une fois par mois de comment garder mon emploi ?", "Répare ma vie", "Donne-moi de l'argent", "Sois disponible tout le temps"], answer: 0, why: "Une demande précise et petite est facile à accepter." },
          { objective: "O6", q: "Un ancien ami veut que vous gardiez quelque chose dans votre voiture. Une limite saine, c'est :", options: ["Dire oui pour garder l'amitié", "Dire oui juste cette fois", "Dire non gentiment : je ne peux plus faire ça", "Ignorer les règles de votre libération conditionnelle"], answer: 2, why: "Un non clair et gentil protège votre liberté et vos progrès." },
          { objective: "O6", q: "Vous vous sentez sans espoir tard le soir. Que pouvez-vous faire ?", options: ["Attendre le mois prochain", "Appeler le 988 ou lui envoyer un SMS", "Le garder pour vous", "Chercher un forum au hasard"], answer: 1, why: "Le 988 est gratuit, confidentiel et ouvert 24 h/24 et 7 j/7 par appel, SMS ou discussion en ligne." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Renouer les liens avec la famille et la communauté",
    questions: [
      { objective: "O1", q: "Pourquoi préparer votre premier contact au lieu d'arriver sans prévenir ?", options: ["Un plan respecte l'autre personne et se passe mieux", "La loi exige un plan", "Surprendre les gens va plus vite", "Cela n'a pas d'importance"], answer: 0, why: "Un contact préparé et respectueux donne un meilleur départ à la relation." },
      { objective: "O1", q: "Qu'est-ce qu'un premier message ne doit PAS contenir ?", options: ["Que vous êtes rentré", "Que vous aimeriez reprendre contact", "Une demande d'argent ou d'un endroit où dormir", "Que l'autre peut choisir le rythme"], answer: 2, why: "Demander d'abord de l'argent ou un logement met la pression sur l'autre." },
      { objective: "O1", q: "Un membre de votre famille dit qu'il n'est pas prêt à parler. Quelle est la meilleure réponse ?", options: ["Continuer à appeler toutes les heures", "Vous mettre en colère", "Demander à d'autres de faire pression sur lui", "Le remercier et laisser la porte ouverte"], answer: 3, why: "Respecter son rythme laisse la porte ouverte pour plus tard." },
      { objective: "O2", q: "Avant votre première visite avec votre enfant, vous devez d'abord parler avec :", options: ["La personne qui s'occupe de l'enfant", "Un inconnu en ligne", "Vos anciens amis", "Personne"], answer: 0, why: "La personne qui s'occupe de l'enfant sait ce à quoi il est prêt et quels horaires conviennent." },
      { objective: "O2", q: "Un jeune enfant demande où vous étiez. Une bonne réponse est :", options: ["Une longue histoire avec tous les détails", "J'ai fait une erreur, j'étais absent, et maintenant je suis là", "C'était la faute de ta mère", "Rien"], answer: 1, why: "Des mots simples et honnêtes sont adaptés à l'âge d'un jeune enfant." },
      { objective: "O2", q: "Vous voulez des visites régulières fixées par un tribunal. Par où commencer ?", options: ["Un groupe sur les réseaux sociaux", "Votre ancien compagnon de cellule", "Le site d'aide des tribunaux de votre État ou un family law facilitator", "Un prêteur sur gages"], answer: 2, why: "Les sites d'aide des tribunaux et les family law facilitators expliquent les formulaires." },
      { objective: "O2", q: "Qu'est-ce qui crée le plus la confiance d'un enfant ?", options: ["De grandes promesses", "De gros cadeaux une fois par an", "Dire du mal de la personne qui s'occupe de lui", "Tenir de petites promesses encore et encore"], answer: 3, why: "La régularité montre à l'enfant qu'il peut compter sur vous." },
      { objective: "O3", q: "Que se passe-t-il si vous ignorez la pension alimentaire après une baisse de vos revenus ?", options: ["La pension non payée peut devenir une grosse dette", "Elle s'arrête toute seule", "Elle est annulée automatiquement", "Il ne se passe rien"], answer: 0, why: "Les décisions restent en place tant qu'elles ne sont pas changées, alors les impayés s'accumulent." },
      { objective: "O3", q: "En Californie, qui peut demander une révision de la pension alimentaire ?", options: ["Seulement le juge", "Chacun des deux parents", "Seulement l'enfant", "Seulement un avocat"], answer: 1, why: "Chaque parent peut demander une révision au service local de pension alimentaire." },
      { objective: "O3", q: "En Californie, un parent incarcéré 60 jours ou plus d'affilée peut :", options: ["Ne jamais changer la décision", "Ignorer la décision", "Demander un montant plus bas avec le formulaire Incarcerated Parent's Request to Review Child Support", "Payer le double"], answer: 2, why: "La Californie a un formulaire spécial pour que les parents incarcérés demandent une révision." },
      { objective: "O3", q: "Hors de Californie, où demander à changer une décision de pension alimentaire ?", options: ["À votre employeur", "À votre propriétaire", "À une station de radio", "Au service de pension alimentaire de votre État ou de votre nation tribale"], answer: 3, why: "Les services des États et des nations tribales s'occupent des révisions." },
      { objective: "O4", q: "Que devez-vous faire d'abord dans une conversation difficile ?", options: ["Écouter et laisser l'autre finir", "Interrompre pour expliquer", "Partir", "Hausser le ton"], answer: 0, why: "Écouter d'abord montre du respect et vous aide à comprendre." },
      { objective: "O4", q: "Redire ce que vous avez entendu s'appelle :", options: ["Se disputer", "Reformuler", "Ignorer", "Accuser"], answer: 1, why: "Reformuler montre à l'autre personne que vous avez compris." },
      { objective: "O4", q: "Quel mot devez-vous éviter dans des excuses ?", options: ["Désolé", "Ferai", "Mais", "Je"], answer: 2, why: "Le mot mais transforme des excuses en justification." },
      { objective: "O5", q: "Un mentor est :", options: ["Votre agent de libération conditionnelle", "Quelqu'un qui paie vos factures", "Un juge", "Une personne de confiance qui a quelques pas d'avance et qui vous conseille et vous soutient"], answer: 3, why: "Les mentors partagent des conseils et des encouragements pendant que vous progressez." },
      { objective: "O5", q: "Vous êtes allé une fois à un groupe de soutien et vous ne vous êtes pas senti à votre place. Quelle est une bonne étape suivante ?", options: ["Y retourner au moins deux fois avant de décider", "Ne jamais y retourner", "Vous plaindre en ligne", "Dire aux autres de ne pas y aller"], answer: 0, why: "La plupart des groupes deviennent plus agréables à la troisième visite." },
      { objective: "O5", q: "Quelle est une façon de trouver des groupes de la communauté ?", options: ["Demander de l'argent à un inconnu", "Appeler le 211 ou demander à votre travailleur social", "Attendre que quelqu'un vous trouve", "Retourner dans vos anciens lieux de rencontre"], answer: 1, why: "Le 211 et les travailleurs sociaux connaissent les groupes et programmes locaux." },
      { objective: "O6", q: "Qu'est-ce qu'une limite ?", options: ["Une clôture autour de votre maison", "Une règle que les autres posent pour vous", "Une barrière que vous posez pour protéger votre santé et vos progrès", "Un type de décision du tribunal"], answer: 2, why: "Une limite protège votre santé, votre sécurité et vos progrès." },
      { objective: "O6", q: "Qu'est-ce qui est vrai sur le 988 ?", options: ["C'est payant", "Il marche seulement en semaine", "C'est seulement pour les urgences avec la police", "Vous pouvez appeler, envoyer un SMS ou discuter gratuitement, 24 h/24 et 7 j/7"], answer: 3, why: "Le 988 est gratuit, confidentiel et ouvert 24 h/24 et 7 j/7 par appel, SMS ou discussion en ligne." },
      { objective: "O6", q: "Où devez-vous garder votre liste de soutien ?", options: ["Dans votre téléphone et sur papier", "Seulement dans votre tête", "Nulle part", "Chez un inconnu"], answer: 0, why: "L'avoir à deux endroits veut dire que vous pouvez la trouver quand vous en avez besoin." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      1,
      3,
      6,
      7,
      10,
      11,
      13,
      14,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Premier contact",
        objective: "O1",
        notYet: "Pas de message, ou il demande de l'argent, fait des reproches ou met la pression.",
        meets: "Il nomme qui contacter en premier et contient un message court et respectueux.",
        exceeds: "Le message a été lu à voix haute et laisse à la personne le temps de répondre."
      },
      {
        name: "Étape pour l'enfant ou la pension alimentaire",
        objective: "O3",
        notYet: "Aucune étape alors qu'elle s'applique.",
        meets: "Une étape claire, comme contacter la personne qui s'occupe de l'enfant ou demander une révision au service, avec une date.",
        exceeds: "Elle liste les papiers nécessaires ou les questions pour la personne qui s'occupe de l'enfant."
      },
      {
        name: "Soutiens dans la communauté",
        objective: "O5",
        notYet: "Moins de deux soutiens.",
        meets: "Deux soutiens, comme un mentor, un groupe ou une communauté religieuse, avec le moyen de les joindre.",
        exceeds: "Elle donne les mots exacts pour demander un engagement précis à un mentor."
      },
      {
        name: "Limites",
        objective: "O6",
        notYet: "Moins de deux limites, ou des limites floues.",
        meets: "Deux limites claires qui protègent les progrès de l'apprenant.",
        exceeds: "Chaque limite a les mots que l'apprenant utilisera pour la faire respecter."
      },
      {
        name: "Liste de soutien",
        objective: "O6",
        notYet: "Pas de liste, ou le 988 manque.",
        meets: "Une liste de personnes et de numéros à appeler, avec le 988.",
        exceeds: "Enregistrée dans le téléphone et sur papier."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui disent avoir contacté un membre de leur famille ou un enfant dans les 30 jours (enquête de suivi)",
      "Les apprenants qui rejoignent un programme de mentorat, un groupe de soutien ou une communauté religieuse dans les 60 jours",
      "Les apprenants qui demandent une révision de leur pension alimentaire quand elle ne correspond plus à leurs revenus"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Du papier et un stylo, ou une application de notes sur un téléphone",
      "Un téléphone pour enregistrer la liste de soutien",
      "Environ 60 minutes en tout, en séances courtes : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Ces sujets peuvent faire remonter des émotions fortes ; laissez les apprenants partager seulement ce qu'ils veulent et gardez le 988 bien visible.",
      "Rappelez aux apprenants que les décisions de justice, les interdictions de contact et les conditions de libération conditionnelle ou de mise à l'épreuve passent en premier.",
      "Ayez prêtes les coordonnées de votre service local de pension alimentaire, de l'aide juridique et du 211.",
      "Faites pratiquer par deux l'écoute et les phrases en « je » avec des situations inventées, pas de vrais conflits familiaux.",
      "Notez le plan avec la grille et donnez votre retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
