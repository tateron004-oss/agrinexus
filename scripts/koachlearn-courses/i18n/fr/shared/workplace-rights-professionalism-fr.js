"use strict";

// Koach Learn course (French translation of shared/workplace-rights-professionalism.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "workplace-rights-professionalism-fr",
  lang: "fr",
  translationOf: "workplace-rights-professionalism",
  category: "Re-Entry",
  name: "Droits au travail et professionnalisme",
  skills: "Arriver à l'heure et prêt, Communiquer de façon professionnelle au travail, Bien utiliser son téléphone au travail, Vérifier sa paie et sa fiche de paie, Connaître ses droits de travailleur aux États-Unis, Signaler un problème de la bonne façon",
  outcome: "arriver à un nouveau travail prêt et professionnel, communiquer clairement avec un superviseur, comparer votre fiche de paie avec vos heures, et savoir où et comment signaler un salaire impayé, une discrimination, un harcèlement ou un problème de sécurité.",
  about: [
    "Ce cours s'adresse à toute personne qui commence ou reprend un travail aux États-Unis : un jeune dans son premier emploi, un ancien militaire qui passe à un travail civil, une personne qui sort de prison, ou toute personne qui veut se sentir plus sûre d'elle au travail.",
    "Le premier chapitre explique comment devenir quelqu'un sur qui un superviseur peut compter : arriver à l'heure, s'habiller pour le poste, parler et écrire clairement, et gérer son téléphone. Le deuxième chapitre porte sur vos droits : un salaire juste et les heures supplémentaires, la protection contre la discrimination et le harcèlement, un lieu de travail sûr, et la lecture d'une fiche de paie.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites la tâche \"Essayez maintenant\". Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Ce cours explique les règles fédérales américaines avec des mots simples ; ce n'est pas un conseil juridique. Les lois des États et des villes peuvent vous protéger davantage, et chaque leçon indique où vérifier."
  ],
  finalTask: "Faites un plan \"Prêt pour le travail\" d'une page pour un emploi réel ou d'entraînement : votre plan pour arriver 10 minutes en avance (trajet, solution de secours, réveil), ce que vous porterez, un court message à envoyer si vous êtes en retard ou malade, votre règle pour le téléphone pendant le service, une routine pour vérifier votre paie (relevé d'heures et contrôle de la fiche de paie), et l'endroit officiel où vous signaleriez un salaire impayé, une discrimination ou un harcèlement, et un danger pour la sécurité, ainsi que le bureau du travail de votre État.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Toute personne qui commence ou reprend un travail aux États-Unis : jeunes dans un premier emploi, anciens combattants qui passent au travail civil, personnes qui sortent de prison et toute personne qui veut se sentir plus sûre d'elle au travail.",
    startingPoint: "Ils sont prêts à travailler et savent utiliser un téléphone, mais beaucoup n'ont pas eu d'emploi stable récemment, ne savent pas bien ce qu'attendent les superviseurs, n'ont jamais comparé une fiche de paie avec leurs heures, et ne savent pas où signaler un salaire impayé, une discrimination, un harcèlement ou un problème de sécurité.",
    gap: "Les nouveaux salariés perdent leur emploi à cause des retards, de l'usage du téléphone et d'une mauvaise communication, et peuvent perdre de l'argent ou subir un traitement injuste sans connaître leurs droits. Les apprenants ont besoin d'habitudes qui les rendent fiables et du savoir-faire pour vérifier leur paie et signaler les problèmes au bon organisme officiel.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes",
      "Les règles fédérales en mots simples ; ce n'est pas un conseil juridique, et les lois des États et des villes peuvent protéger davantage",
      "Les apprenants vérifient les règles de leur État sur les sites officiels (dol.gov, eeoc.gov, osha.gov et le bureau du travail de l'État)",
      "Appareils : un téléphone pour les trajets, les messages et les sites officiels",
      "Certains apprenants ont des contraintes de libération conditionnelle, de transport ou de garde d'enfants qui pèsent sur leurs horaires"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pour un emploi réel ou d'entraînement", action: "planifier votre trajet, une solution de secours et votre matinée pour arriver environ 10 minutes en avance", standard: "avec un message prêt à envoyer si vous êtes en retard ou malade" },
    { id: "O2", condition: "Dans un nouvel emploi", action: "vous habiller pour le poste et écrire des messages clairs et polis à un superviseur, y compris pour reconnaître une erreur", standard: "avec chaque message court et respectueux" },
    { id: "O3", condition: "Pour votre prochain service", action: "écrire une règle pour le téléphone qui vous garde en sécurité et concentré au travail", standard: "sans téléphone en conduisant ou en utilisant des machines" },
    { id: "O4", condition: "À partir de votre relevé d'heures et d'une fiche de paie", action: "calculer votre paie, heures supplémentaires comprises, et la comparer à la fiche de paie", standard: "en signalant tout écart au service de paie avec votre relevé d'heures" },
    { id: "O5", condition: "Face à un cas possible de discrimination ou de harcèlement", action: "lister les étapes pour le noter et le signaler, dans l'entreprise et auprès de l'EEOC", standard: "dans le bon ordre et dans le délai de dépôt" },
    { id: "O6", condition: "Face à un danger ou à une question sur les règles de votre État", action: "trouver où signaler un problème de sécurité et le bureau du travail de votre État", standard: "en nommant l'OSHA et le site du bureau du travail de votre État" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Être professionnel au travail",
      lessons: [
        {
          objectives: ["O1"],
          title: "Être à l'heure et prêt à travailler",
          minutes: 5,
          goal: "Planifier votre trajet et votre matinée pour arriver en avance et prêt.",
          text: [
            "La ponctualité est la première chose que remarquent la plupart des superviseurs. Dans beaucoup d'emplois, \"à l'heure\" veut dire à votre poste et prêt à commencer quand le service démarre, pas en train de passer la porte. Visez une arrivée 10 minutes en avance.",
            "Préparez le trajet avant votre premier jour. Vérifiez les horaires du bus ou du train, ou faites le trajet en voiture à la même heure. Ayez une solution de secours : un deuxième bus, un ami qui peut vous conduire, ou de l'argent pour une application de transport. Mettez deux réveils.",
            "Si vous allez être en retard ou malade, prévenez votre superviseur AVANT le début du service, de la façon qu'il a demandée (appel, SMS ou application). Dites quand vous arriverez ou quand vous reviendrez. Ne pas appeler et ne pas venir (en anglais \"no call, no show\") peut vous faire perdre le poste très vite.",
            "Être prêt veut aussi dire être reposé et préparé : la veille, préparez vos vêtements, votre pièce d'identité, vos clés, votre repas, et vos outils ou équipements de sécurité."
          ],
          steps: ["Renseignez-vous sur votre heure exacte de début et l'endroit où vous présenter.", "Préparez le trajet et un trajet de secours.", "Mettez deux réveils et visez une arrivée 10 minutes en avance.", "Enregistrez le numéro de votre superviseur et les règles pour prévenir d'une absence.", "Préparez vêtements, pièce d'identité, repas et équipement la veille."],
          words: [["Service", "les heures fixes pendant lesquelles vous devez travailler (on dit aussi poste ou quart)."], ["Prévenir d'une absence", "dire à votre superviseur avant votre service que vous ne pouvez pas venir ou que vous serez en retard."], ["No call, no show", "manquer un service sans prévenir personne ; c'est souvent un motif de renvoi."]],
          slides: [
            { title: "À l'heure veut dire prêt à commencer", bullets: ["À votre poste quand le service commence", "Visez une arrivée 10 minutes en avance"] },
            { title: "Préparez le trajet", bullets: ["Faites le trajet à la même heure", "Ayez un moyen ou un trajet de secours", "Mettez deux réveils"] },
            { title: "En retard ou malade ?", bullets: ["Prévenez votre superviseur avant le service", "De la façon demandée : appel, SMS ou application", "Jamais de \"no call, no show\""] },
            { title: "La veille", bullets: ["Vêtements, pièce d'identité, clés et repas prêts", "Outils et équipement de sécurité rangés dans le sac", "Reposez-vous"] }
          ],
          tryIt: "Choisissez l'adresse d'un emploi réel ou d'entraînement. Préparez votre trajet pour un début à 7 h, choisissez un moyen de secours pour y aller, et écrivez le SMS exact que vous enverriez à votre superviseur si votre bus tombait en panne.",
          youCanNow: "prévoir d'arriver en avance et prêt, et prévenir votre superviseur de la bonne façon si vous êtes en retard ou malade.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qu'une solution de secours pour aller au travail ?", options: ["Un deuxième moyen d'y aller si votre transport habituel fait défaut", "Partir après le début de votre service", "Vous déclarer malade", "Demander un service plus tard"], answer: 0, why: "Une solution de secours vous garde à l'heure quand quelque chose tourne mal." },
            { objective: "O1", q: "Votre bus tombe en panne et vous aurez 20 minutes de retard. Que faites-vous ?", options: ["Ne rien dire et arriver en retard", "Rentrer chez vous et manquer le service", "Envoyer un SMS ou appeler votre superviseur tout de suite, comme il l'a demandé", "Attendre le lendemain pour expliquer"], answer: 2, why: "Prévenir votre superviseur tout de suite montre que vous êtes fiable." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Tenue et communication au travail",
          minutes: 5,
          goal: "S'habiller pour le poste et parler et écrire à un superviseur de façon claire et polie.",
          text: [
            "Habillez-vous pour le poste que vous avez. Demandez avant le premier jour : \"Y a-t-il un uniforme ou un code vestimentaire ?\" Un entrepôt peut exiger des chaussures de sécurité à embout d'acier ; un bureau peut demander une tenue de ville décontractée ; une cuisine demande des chaussures fermées et les cheveux attachés. Propre, soigné et sûr, c'est toujours bien.",
            "Parlez avec respect à tout le monde : superviseurs, collègues et clients. Écoutez la consigne en entier, répétez-la si elle est longue (\"Donc vous voulez que les palettes aillent à la zone 3 avant le déjeuner ?\"), et posez une question quand vous n'êtes pas sûr. Demander vaut mieux que deviner et mal faire.",
            "Si vous n'êtes pas d'accord ou si vous faites une erreur, restez calme et parlez en privé. Reconnaissez vite une erreur : dites ce qui s'est passé, ce que vous avez fait pour la corriger, et ce que vous ferez la prochaine fois. Cela crée la confiance.",
            "Les messages écrits au travail doivent être courts et clairs : une salutation, ce dont vous avez besoin, et votre nom. Évitez l'argot, les majuscules partout et les émojis avec un superviseur tant que vous ne savez pas ce qui est normal à cet endroit."
          ],
          steps: ["Renseignez-vous sur le code vestimentaire avant le premier jour.", "Écoutez la consigne en entier.", "Répétez les longues consignes pour vérifier.", "Posez une question quand vous n'êtes pas sûr.", "Reconnaissez vos erreurs vite et en privé.", "Gardez les messages de travail courts : salutation, besoin, nom."],
          words: [["Code vestimentaire", "les règles sur ce qu'on porte dans un emploi."], ["Tenue de ville décontractée", "des vêtements soignés, moins formels qu'un costume, comme un pantalon de ville et une chemise à col (en anglais : business casual)."]],
          slides: [
            { title: "Habillez-vous pour le poste", bullets: ["Renseignez-vous sur l'uniforme ou le code vestimentaire", "Propre, soigné et sûr, c'est toujours bien", "Certains postes exigent des bottes ou les cheveux attachés"] },
            { title: "Écoutez et vérifiez", bullets: ["Écoutez la consigne en entier", "Répétez-la si elle est longue", "Demandez au lieu de deviner"] },
            { title: "Erreurs et désaccords", bullets: ["Restez calme et parlez en privé", "Dites ce qui s'est passé et comment vous l'avez corrigé", "Dites ce que vous ferez la prochaine fois"] },
            { title: "Messages de travail", bullets: ["Salutation, ce dont vous avez besoin, votre nom", "Au début, pas d'argot, de majuscules partout ni d'émojis"] }
          ],
          tryIt: "Écrivez un court SMS à un superviseur pour poser une question sur le service de demain. Puis écrivez un message de deux phrases qui reconnaît une petite erreur, comme avoir mis du stock dans le mauvais rayon, et qui dit comment vous l'avez corrigée.",
          youCanNow: "vous habiller pour le poste et communiquer avec un superviseur de façon claire et respectueuse, y compris pour reconnaître une erreur.",
          quickCheck: [
            { objective: "O2", q: "Quelle est la meilleure façon de vérifier que vous avez compris une longue consigne ?", options: ["Hocher la tête en espérant", "La redire avec vos propres mots", "Demander plus tard à un collègue", "Faire à votre façon"], answer: 1, why: "Redire la consigne permet de repérer les erreurs avant qu'elles arrivent." },
            { objective: "O2", q: "Vous avez cassé un carton de verres en remplissant les rayons. Que faites-vous ?", options: ["Cacher le carton", "Accuser un autre employé", "Attendre de voir si quelqu'un le remarque", "Dire à votre superviseur ce qui s'est passé et ce que vous avez fait"], answer: 3, why: "Reconnaître une erreur et dire comment vous l'avez réparée crée la confiance." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Le téléphone au travail",
          minutes: 4,
          goal: "Suivre une règle simple pour le téléphone qui vous garde en sécurité et concentré au travail.",
          text: [
            "Beaucoup de gens perdent leur emploi à cause du téléphone. Apprenez la règle de votre lieu de travail sur le téléphone dès le premier jour. Certains emplois permettent de le garder en poche en mode silencieux ; d'autres demandent de le laisser dans un casier ; d'autres l'interdisent dans la zone de travail parce qu'il est dangereux près des machines, des véhicules ou de la nourriture.",
            "Une règle simple qui marche presque partout : téléphone en silencieux et rangé pendant le travail ; regardez-le seulement pendant les pauses et dans les espaces de pause. Ne l'utilisez jamais en conduisant un chariot élévateur, en utilisant une machine ou en servant un client.",
            "Si vous attendez un appel important, comme une urgence familiale ou un appel de votre agent de probation, d'un médecin ou de l'école de votre enfant, prévenez votre superviseur au début du service et demandez-lui comment il veut que vous fassiez.",
            "Faites attention à ce que vous publiez. Ne publiez pas de photos du lieu de travail, des clients ou des collègues, ni de plaintes à leur sujet, sans connaître les règles. Cela peut enfreindre les règles de l'entreprise et le respect de la vie privée."
          ],
          steps: ["Renseignez-vous sur la règle du téléphone dès le premier jour.", "Mettez votre téléphone en silencieux et rangez-le pendant le travail.", "Regardez-le pendant les pauses, dans les espaces de pause.", "Prévenez votre superviseur à l'avance si vous devez prendre un appel important.", "Ne publiez pas de photos du lieu de travail ou des gens sans permission."],
          words: [["Règle du téléphone", "les règles du lieu de travail sur quand et où vous pouvez utiliser un téléphone."], ["Pause", "un temps de repos prévu pendant un service."]],
          slides: [
            { title: "Connaissez la règle du téléphone", bullets: ["Demandez dès le premier jour", "En poche, au casier, ou pas du tout dans la zone de travail"] },
            { title: "Une règle qui marche", bullets: ["Silencieux et rangé pendant le travail", "Regardez-le seulement pendant les pauses", "Jamais près des machines, des véhicules ou en servant"] },
            { title: "Vous attendez un appel important ?", bullets: ["Prévenez votre superviseur au début", "Demandez comment il veut que vous fassiez"] },
            { title: "Attention à ce que vous publiez", bullets: ["Pas de photos de clients ou de collègues", "Ne publiez pas les problèmes du travail sans connaître les règles"] }
          ],
          tryIt: "Écrivez en une phrase votre règle personnelle pour le téléphone lors de votre prochain service. Puis écrivez ce que vous diriez à un superviseur si vous attendez un appel important de l'école de votre enfant.",
          youCanNow: "suivre une règle pour le téléphone qui vous garde en sécurité et concentré, et gérer un appel important de la bonne façon.",
          quickCheck: [
            { objective: "O3", q: "Quelle est une bonne règle personnelle pour le téléphone dans la plupart des emplois ?", options: ["Téléphone en silencieux et rangé pendant le travail ; on le regarde pendant les pauses", "Téléphone en main tout le temps", "Répondre tout de suite à chaque appel", "Écouter de la musique avec des écouteurs en servant les clients"], answer: 0, why: "En silencieux et rangé pendant le travail, regardé pendant les pauses : vous restez concentré." },
            { objective: "O3", q: "Vous conduisez un chariot élévateur et votre téléphone vibre. Que faites-vous ?", options: ["Le regarder vite", "Répondre en haut-parleur", "L'ignorer jusqu'à ce que vous soyez arrêté en sécurité et en pause", "Répondre par SMS en roulant doucement"], answer: 2, why: "Utiliser le téléphone en conduisant ou en utilisant des machines n'est jamais sûr." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Être professionnel au travail",
        questions: [
          { objective: "O1", q: "Votre service commence à 7 h 00. Quand devez-vous prévoir d'arriver ?", options: ["À 7 h 00 pile", "À 7 h 10", "Vers 6 h 50, prêt à commencer à 7 h 00", "Quand le bus arrive"], answer: 2, why: "Arriver environ 10 minutes en avance vous permet d'être prêt à votre poste à l'heure." },
          { objective: "O1", q: "Vous vous réveillez malade. Que faites-vous ?", options: ["Vous prévenez votre superviseur avant le service, de la façon demandée", "Vous n'y allez pas et vous n'appelez pas", "Vous envoyez un SMS à un collègue en espérant qu'il transmette", "Vous appelez après la fin du service"], answer: 0, why: "Prévenir votre superviseur avant le service est professionnel ; un \"no call, no show\" peut vous coûter le poste." },
          { objective: "O2", q: "Votre superviseur vous donne une longue consigne. Que faire ?", options: ["Hocher la tête et deviner plus tard", "Demander à un collègue de le faire", "L'ignorer", "La répéter pour vérifier que vous avez compris"], answer: 3, why: "Répéter la consigne évite les erreurs avant qu'elles arrivent." },
          { objective: "O2", q: "Vous avez mis du stock sur la mauvaise étagère. Que faites-vous ?", options: ["Vous le cachez", "Vous dites à votre superviseur ce qui s'est passé et comment vous l'avez corrigé", "Vous accusez un collègue", "Vous démissionnez"], answer: 1, why: "Reconnaître vite une erreur crée la confiance." },
          { objective: "O3", q: "Quelle est la meilleure habitude avec le téléphone dans la plupart des emplois ?", options: ["Téléphone en sonnerie forte dans la main", "Répondre aux appels en conduisant un chariot élévateur", "En silencieux et rangé pendant le travail, regardé pendant les pauses", "Publier des photos des clients"], answer: 2, why: "Cela vous garde concentré et en sécurité, et respecte la plupart des règles." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Vos droits au travail aux États-Unis",
      lessons: [
        {
          objectives: ["O4"],
          title: "Salaire minimum, heures supplémentaires et fiche de paie",
          minutes: 6,
          goal: "Vérifier que votre paie est juste en comparant vos heures avec votre fiche de paie.",
          text: [
            "La loi fédérale Fair Labor Standards Act (FLSA, loi sur les normes de travail équitables) fixe un salaire minimum et le paiement des heures supplémentaires pour la plupart des travailleurs. La Wage and Hour Division (division des salaires et des horaires) du ministère du Travail des États-Unis (DOL) indique que le salaire minimum fédéral est de $7.25 de l'heure. Beaucoup d'États et de villes fixent un minimum plus élevé. Dans ce cas, l'employeur doit payer le plus élevé. Vérifiez votre État sur dol.gov.",
            "Heures supplémentaires : sauf si votre poste est exempté, vous devez recevoir au moins une fois et demie votre taux normal pour les heures au-delà de 40 dans une semaine de travail. Une semaine de travail est une période fixe de sept jours, et on ne peut pas faire la moyenne des heures sur deux semaines. Selon la loi fédérale, travailler le week-end ou un jour férié ne donne pas à lui seul droit aux heures supplémentaires. Certains États ont des règles en plus.",
            "Votre fiche de paie indique vos heures, votre taux horaire, le salaire brut (avant retenues), les retenues comme les impôts, et le salaire net (ce que vous touchez). La loi fédérale oblige l'employeur à tenir des registres exacts des heures et de la paie, mais n'oblige pas à donner une fiche de paie ; beaucoup d'États l'exigent. Tenez votre propre relevé des jours et des heures travaillés et comparez-le avec chaque fiche.",
            "Si votre paie est fausse, demandez d'abord poliment au service de paie ou à votre superviseur, avec votre relevé d'heures. Si rien n'est corrigé, vous pouvez contacter la Wage and Hour Division ou le bureau du travail de votre État. La FLSA interdit de vous renvoyer ou de vous punir parce que vous avez fait une réclamation sur votre salaire, à l'oral ou par écrit."
          ],
          steps: ["Notez chaque jour l'heure de début et de fin, et vos pauses.", "Quand vous êtes payé, trouvez sur la fiche les heures, le taux, le brut, les retenues et le net.", "Vérifiez que les heures correspondent à votre relevé et que le taux est celui promis.", "Vérifiez les heures supplémentaires : au-delà de 40 dans la semaine, payées 1,5 fois votre taux (sauf exemption).", "En cas d'erreur, demandez au service de paie avec votre relevé ; sinon, contactez la Wage and Hour Division ou le bureau du travail de l'État."],
          words: [["Salaire minimum", "le salaire horaire le plus bas que la loi permet."], ["Heures supplémentaires", "un paiement en plus, au moins 1,5 fois votre taux, pour les heures au-delà de 40 dans une semaine, pour la plupart des salariés payés à l'heure."], ["Exempté", "un poste, souvent payé au mois et d'encadrement, pour lequel la loi n'exige pas d'heures supplémentaires."], ["Salaire brut", "votre paie avant impôts et retenues."], ["Salaire net", "ce que vous touchez après les retenues."]],
          slides: [
            { title: "Salaire minimum", bullets: ["Minimum fédéral : $7.25 de l'heure (dol.gov)", "Beaucoup d'États et de villes fixent plus", "L'employeur doit payer le plus élevé"] },
            { title: "Heures supplémentaires", bullets: ["Au-delà de 40 heures dans une semaine de travail", "Au moins 1,5 fois votre taux normal", "Sauf si votre poste est exempté"] },
            { title: "Lisez votre fiche de paie", bullets: ["Heures et taux", "Brut, retenues, net", "Comparez avec votre propre relevé d'heures"] },
            { title: "La paie est fausse ?", bullets: ["Demandez d'abord au service de paie, avec votre relevé", "Puis la Wage and Hour Division ou le bureau du travail de l'État", "Vous renvoyer ou punir pour une réclamation salariale est illégal"] }
          ],
          sources: [
            { name: "Ministère du Travail des États-Unis : Salaire minimum", url: "https://www.dol.gov/agencies/whd/minimum-wage" },
            { name: "Ministère du Travail des États-Unis : Lois des États sur le salaire minimum", url: "https://www.dol.gov/agencies/whd/minimum-wage/state" },
            { name: "Ministère du Travail des États-Unis : Heures supplémentaires", url: "https://www.dol.gov/agencies/whd/overtime" },
            { name: "Ministère du Travail des États-Unis : Questions et réponses sur la FLSA (fiches de paie et registres)", url: "https://www.dol.gov/agencies/whd/flsa/faq" },
            { name: "Ministère du Travail des États-Unis : Fiche 77A, représailles interdites par la FLSA", url: "https://www.dol.gov/agencies/whd/fact-sheets/77a-flsa-prohibiting-retaliation" }
          ],
          tryIt: "Exercice : vous gagnez $16 de l'heure et vous avez travaillé 44 heures cette semaine (non exempté). Calculez la paie : 40 x $16, plus 4 heures x $24. Puis cherchez le salaire minimum de votre État sur la page des États de dol.gov et notez-le.",
          youCanNow: "comparer vos heures et votre paie avec votre fiche de paie, repérer des heures supplémentaires manquantes, et savoir où aller si votre paie est fausse.",
          quickCheck: [
            { objective: "O4", q: "Qu'est-ce que le salaire brut sur une fiche de paie ?", options: ["Ce que vous touchez réellement", "Votre paie avant les retenues", "Seulement vos heures supplémentaires", "Votre remboursement d'impôts"], answer: 1, why: "Le brut est avant les retenues ; le net est ce que vous touchez." },
            { objective: "O4", q: "Vous gagnez $16 de l'heure et avez travaillé 42 heures (non exempté). Comment calculez-vous la paie ?", options: ["42 x $16", "40 x $24 plus 2 x $16", "42 x $24", "40 x $16 plus 2 x $24"], answer: 3, why: "Les heures au-delà de 40 sont payées au moins 1,5 fois le taux, donc $24 ici." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Discrimination et harcèlement, et comment les signaler",
          minutes: 5,
          goal: "Reconnaître la discrimination et le harcèlement au travail et connaître les étapes pour les signaler.",
          text: [
            "La loi fédérale, appliquée par l'Equal Employment Opportunity Commission (EEOC, commission américaine pour l'égalité des chances dans l'emploi), interdit de traiter plus mal des salariés ou des candidats à cause de leur race, couleur de peau, religion, sexe (y compris l'orientation sexuelle, l'identité transgenre et la grossesse), origine nationale, âge (40 ans ou plus), handicap ou informations génétiques.",
            "Le harcèlement est un comportement non désiré lié à l'une de ces caractéristiques. Il est illégal quand le supporter devient une condition pour garder l'emploi, ou quand il est assez grave ou fréquent pour rendre le lieu de travail hostile ou abusif. Exemples : insultes répétées, contacts physiques non désirés ou menaces.",
            "Comment le signaler : notez ce qui s'est passé, quand, où, qui était là, et gardez les messages. Signalez-le par la procédure de plainte de votre employeur (un superviseur, un responsable ou les ressources humaines). Vous pouvez aussi déposer une plainte auprès de l'EEOC : en ligne sur l'EEOC Public Portal, en personne dans un bureau de l'EEOC, ou en commençant par appeler le 1-800-669-4000. Dans la plupart des cas, vous devez déposer la plainte dans les 180 jours calendaires, ou 300 jours si un organisme de l'État ou local applique une loi semblable. C'est gratuit et vous n'avez pas besoin d'avocat.",
            "Il est illégal pour un employeur de vous punir (représailles) parce que vous avez signalé une discrimination, déposé une plainte ou aidé à une enquête. Votre État peut avoir son propre organisme pour l'égalité dans l'emploi et des protections en plus."
          ],
          steps: ["Notez ce qui s'est passé : date, heure, lieu, personnes, paroles ou actes.", "Gardez les SMS, e-mails et photos.", "Signalez-le par la procédure de votre employeur : superviseur, responsable ou ressources humaines.", "Si rien ne change, contactez l'EEOC (portail en ligne, un bureau, ou 1-800-669-4000) ou l'organisme de votre État.", "Agissez vite : le délai est en général de 180 jours, ou 300 dans beaucoup d'États."],
          words: [["Discrimination", "traiter quelqu'un plus mal à cause d'une caractéristique protégée comme la race, le sexe, l'âge ou le handicap."], ["Harcèlement", "un comportement non désiré lié à une caractéristique protégée, grave ou fréquent, ou qu'il faut accepter pour garder son emploi."], ["Représailles", "punir quelqu'un parce qu'il a signalé un problème ou participé à une enquête."], ["EEOC", "l'Equal Employment Opportunity Commission, l'agence fédérale américaine qui applique les lois contre la discrimination à l'emploi."]],
          slides: [
            { title: "Caractéristiques protégées (loi fédérale)", bullets: ["Race, couleur de peau, religion, origine nationale", "Sexe, y compris grossesse, orientation sexuelle, identité de genre", "Âge 40 ans et plus, handicap, informations génétiques"] },
            { title: "Ce qu'est le harcèlement", bullets: ["Un comportement non désiré lié à une caractéristique protégée", "Grave ou fréquent, ou une condition pour garder l'emploi", "Insultes, contacts non désirés, menaces"] },
            { title: "Comment le signaler", bullets: ["Notez-le et gardez les messages", "Utilisez la procédure de plainte de votre employeur", "EEOC : portail en ligne, un bureau, ou 1-800-669-4000"] },
            { title: "Délais et protection", bullets: ["En général 180 jours, ou 300 dans beaucoup d'États", "C'est gratuit ; pas besoin d'avocat", "Les représailles sont illégales"] }
          ],
          sources: [
            { name: "EEOC : Comment déposer une plainte pour discrimination à l'emploi", url: "https://www.eeoc.gov/how-file-charge-employment-discrimination" },
            { name: "EEOC : Le harcèlement", url: "https://www.eeoc.gov/harassment" }
          ],
          tryIt: "Lisez ce cas : un collègue fait chaque jour des blagues sur la religion d'un nouvel employé, et le superviseur rit. Écrivez dans l'ordre les trois premières choses que le nouvel employé devrait faire, et où il pourrait aller si l'entreprise ne fait rien.",
          youCanNow: "reconnaître la discrimination et le harcèlement, noter ce qui s'est passé, et le signaler dans l'entreprise ou à l'EEOC.",
          quickCheck: [
            { objective: "O5", q: "Que sont les représailles au travail ?", options: ["Punir quelqu'un parce qu'il a signalé un problème ou fait valoir ses droits", "Une évaluation normale du travail", "Une augmentation de salaire", "Un changement d'horaire que vous avez demandé"], answer: 0, why: "Les représailles sont une punition pour avoir signalé un problème ou fait valoir ses droits, et elles sont illégales." },
            { objective: "O5", q: "Un collègue fait sans cesse des blagues sur votre handicap. Que faites-vous d'abord ?", options: ["Démissionner tout de suite", "Lui répondre par des blagues", "L'ignorer pendant un an", "Noter ce qui s'est passé, avec les dates, et garder les messages"], answer: 3, why: "Tout noter et garder les messages est la première étape pour signaler." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Un lieu de travail sûr et où vérifier les règles de votre État",
          minutes: 5,
          goal: "Expliquer votre droit à un travail sûr, et trouver où signaler un danger et le bureau du travail de votre État.",
          text: [
            "L'Occupational Safety and Health Administration (OSHA, administration de la sécurité et de la santé au travail) est l'agence fédérale pour la sécurité au travail. L'employeur doit fournir un lieu de travail sans dangers graves connus, suivre les règles de sécurité, fournir les équipements de sécurité obligatoires, et vous former aux dangers d'une façon que vous comprenez.",
            "Vous avez le droit de signaler un danger ou une blessure, de demander à l'OSHA d'inspecter votre lieu de travail, et de voir les registres des accidents du travail. Vous pouvez déposer une plainte de sécurité auprès de l'OSHA en ligne, par téléphone au 1-800-321-OSHA (6742), par courrier ou dans un bureau de l'OSHA, et vous pouvez demander que votre nom ne soit pas donné à votre employeur.",
            "Il est illégal de vous punir parce que vous avez soulevé un problème de sécurité ou signalé une blessure. Si vous êtes puni, déposez vite une plainte pour représailles (plainte de lanceur d'alerte, en anglais whistleblower) auprès de l'OSHA : selon la loi fédérale, vous n'avez que 30 jours.",
            "Les lois des États peuvent ajouter des droits : un salaire minimum plus élevé, des congés maladie payés, des pauses repas et repos, des règles sur les fiches de paie, et plus. Beaucoup d'États ont leur propre plan de sécurité approuvé par l'OSHA. Trouvez le bureau du travail de votre État grâce à la liste des bureaux du travail des États du ministère du Travail, et consultez les pages de votre État."
          ],
          steps: ["Signalez d'abord un danger à votre superviseur, si vous pouvez le faire sans risque.", "Notez ce que vous avez vu et quand.", "Si rien n'est corrigé, déposez une plainte auprès de l'OSHA en ligne ou au 1-800-321-6742.", "Si vous êtes puni pour l'avoir signalé, déposez une plainte de lanceur d'alerte dans les 30 jours.", "Cherchez le bureau du travail de votre État pour les droits en plus."],
          words: [["OSHA", "l'Occupational Safety and Health Administration, l'agence fédérale américaine qui fixe et fait respecter les règles de sécurité au travail."], ["Danger", "quelque chose au travail qui pourrait vous blesser, comme un sol mouillé, un bruit fort ou une machine sans protection."], ["Plainte de lanceur d'alerte", "une plainte disant que vous avez été puni pour avoir signalé un problème (en anglais : whistleblower complaint)."]],
          slides: [
            { title: "Votre employeur doit", bullets: ["Garder le lieu de travail sans dangers graves connus", "Fournir les équipements de sécurité obligatoires", "Vous former d'une façon que vous comprenez"] },
            { title: "Vos droits en matière de sécurité", bullets: ["Signaler dangers et blessures", "Demander une inspection à l'OSHA ; demander l'anonymat", "OSHA : osha.gov ou 1-800-321-6742"] },
            { title: "Puni pour avoir parlé ?", bullets: ["Les représailles sont illégales", "Déposez une plainte de lanceur d'alerte dans les 30 jours"] },
            { title: "Votre État peut ajouter des droits", bullets: ["Salaire minimum plus élevé, congés maladie, pauses", "Règles sur la fiche de paie et plans de sécurité de l'État", "Trouvez le bureau du travail de votre État sur dol.gov"] }
          ],
          sources: [
            { name: "OSHA : Déposer une plainte de sécurité et de santé", url: "https://www.osha.gov/workers/file-complaint" },
            { name: "OSHA : Les droits des travailleurs", url: "https://www.osha.gov/workers" },
            { name: "Programme de protection des lanceurs d'alerte de l'OSHA : déposer une plainte pour représailles", url: "https://www.whistleblowers.gov/complaint_page.html" },
            { name: "Ministère du Travail des États-Unis : Bureaux du travail des États", url: "https://www.dol.gov/agencies/whd/state/contacts" }
          ],
          tryIt: "Tâche finale : faites votre plan \"Prêt pour le travail\" d'une page. Mettez votre plan d'arrivée, vos vêtements, votre message en cas de retard ou de maladie, votre règle pour le téléphone, votre routine de vérification de la paie, et où vous signaleriez un salaire impayé (dol.gov), une discrimination ou un harcèlement (eeoc.gov), et un danger pour la sécurité (osha.gov), ainsi que le site web du bureau du travail de votre État.",
          youCanNow: "expliquer votre droit à un lieu de travail sûr, signaler un danger de la bonne façon, et trouver les règles en plus de votre État.",
          quickCheck: [
            { objective: "O6", q: "Quel organisme traite les plaintes sur la sécurité au travail ?", options: ["L'EEOC", "L'OSHA", "L'IRS", "La poste"], answer: 1, why: "L'OSHA s'occupe de la sécurité au travail." },
            { objective: "O6", q: "Vous voulez savoir si votre État accorde des congés maladie payés. Que faites-vous ?", options: ["Demander à un ami dans un autre État", "Deviner", "Vérifier auprès du bureau du travail de votre État, trouvé sur la liste du ministère du Travail", "Demander à une IA et croire sa réponse"], answer: 2, why: "Le bureau du travail de votre État a les règles officielles pour votre État." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Vos droits au travail aux États-Unis",
        questions: [
          { objective: "O4", q: "Le salaire minimum de votre État est plus élevé que les $7.25 fédéraux. Lequel votre employeur doit-il payer ?", options: ["Les $7.25 fédéraux", "Le taux de l'État, plus élevé", "Ce qu'il veut", "La moyenne des deux"], answer: 1, why: "L'employeur doit respecter les deux lois, donc c'est le taux le plus élevé qui s'applique." },
          { objective: "O4", q: "Vous êtes payé à l'heure, non exempté, et vous avez travaillé 45 heures cette semaine. Que devez-vous voir ?", options: ["5 heures supplémentaires payées au moins 1,5 fois votre taux", "Pas d'heures supplémentaires, car ce n'est qu'une semaine", "Des heures supplémentaires seulement si vous avez travaillé le dimanche", "Un jour de congé au lieu de la paie"], answer: 0, why: "Les heures au-delà de 40 dans une semaine sont payées au moins une fois et demie." },
          { objective: "O5", q: "Quelle agence applique les lois fédérales contre la discrimination à l'emploi ?", options: ["L'OSHA", "L'IRS (les impôts)", "Le DMV (les permis de conduire)", "L'EEOC"], answer: 3, why: "L'Equal Employment Opportunity Commission traite les plaintes pour discrimination." },
          { objective: "O5", q: "Que devez-vous faire EN PREMIER si vous êtes harcelé au travail ?", options: ["Le publier en ligne", "Démissionner sans préavis", "Noter ce qui s'est passé et garder les messages", "Attendre un an"], answer: 2, why: "Une trace écrite aide à chaque étape suivante, dans l'entreprise ou en dehors." },
          { objective: "O6", q: "Vous avez signalé une protection cassée sur une machine et on vous a retiré du planning la semaine suivante. Que pouvez-vous faire ?", options: ["Rien", "Déposer une plainte de lanceur d'alerte auprès de l'OSHA, dans les 30 jours", "Attendre six mois, puis vous plaindre", "Seulement le publier en ligne"], answer: 1, why: "Vous punir pour un signalement de sécurité est illégal, et le délai fédéral est court." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Droits au travail et professionnalisme",
    questions: [
      { objective: "O1", q: "Dans beaucoup d'emplois, \"à l'heure\" veut dire :", options: ["Passer la porte à l'heure de début", "À votre poste et prêt quand le service commence", "Dans les 15 minutes après l'heure de début", "Quand votre transport arrive"], answer: 1, why: "Soyez prêt à travailler quand le service commence, donc prévoyez d'arriver en avance." },
      { objective: "O1", q: "Qu'est-ce qu'un \"no call, no show\" ?", options: ["Manquer un service sans prévenir personne", "Un jour de congé que vous avez demandé", "Une règle sur le téléphone", "Un jour férié payé"], answer: 0, why: "C'est l'une des façons les plus rapides de perdre un emploi." },
      { objective: "O1", q: "Un bon plan de secours pour aller au travail, c'est :", options: ["Espérer que tout ira bien", "Partir plus tard", "Un deuxième bus ou un ami qui peut vous conduire", "Prévenir d'une absence chaque fois que le bus est en retard"], answer: 2, why: "Un trajet de secours vous garde à l'heure quand il y a un problème." },
      { objective: "O2", q: "Vous ne savez pas quoi porter le premier jour. Vous :", options: ["Portez ce qui est confortable", "Copiez ce que vous voyez à la télé", "Mettez des sandales par sécurité", "Demandez s'il y a un uniforme ou un code vestimentaire"], answer: 3, why: "Demander évite les erreurs, et certains postes exigent des chaussures de sécurité." },
      { objective: "O2", q: "Quel message à un superviseur est le meilleur ?", options: ["\"HÉ JE VAIS OÙ\"", "\"Bonjour Mme Lee, quelle entrée dois-je utiliser demain ? Merci, Sam\"", "Une rangée d'émojis", "Pas de message ; deviner"], answer: 1, why: "Une salutation, le besoin et votre nom : c'est clair et poli." },
      { objective: "O2", q: "Un collègue vous contredit à voix forte devant des clients. Vous :", options: ["Restez calme et en parlez en privé plus tard", "Criez à votre tour", "Le publiez en ligne", "Quittez votre poste"], answer: 0, why: "Une discussion calme et privée règle les problèmes sans les aggraver." },
      { objective: "O3", q: "Quand n'est-il JAMAIS acceptable d'utiliser votre téléphone au travail ?", options: ["Pendant votre pause", "Dans la salle de pause", "Avant votre service", "En conduisant un chariot élévateur ou en utilisant une machine"], answer: 3, why: "Les téléphones près des véhicules et des machines causent des blessures graves." },
      { objective: "O3", q: "Vous attendez un appel important de l'école de votre enfant. Vous :", options: ["Gardez le téléphone en main tout le service", "Prévenez votre superviseur au début et demandez comment faire", "Partez sans rien dire", "L'ignorez"], answer: 1, why: "Prévenir votre superviseur à l'avance montre du respect et évite les problèmes." },
      { objective: "O4", q: "Quel est le salaire minimum fédéral selon le ministère du Travail ?", options: ["$5.15 de l'heure", "$10.00 de l'heure", "$7.25 de l'heure", "$15.00 de l'heure"], answer: 2, why: "Le minimum fédéral est de $7.25 ; beaucoup d'États et de villes fixent plus." },
      { objective: "O4", q: "Les heures supplémentaires fédérales commencent après combien d'heures dans une semaine de travail ?", options: ["40", "35", "45", "50"], answer: 0, why: "Les salariés couverts et non exemptés ont droit aux heures supplémentaires au-delà de 40 heures par semaine." },
      { objective: "O4", q: "Vous avez travaillé 30 heures une semaine et 50 la suivante. Selon la loi fédérale :", options: ["On fait la moyenne, donc pas d'heures supplémentaires", "Vous avez 10 heures supplémentaires pour la deuxième semaine", "Vous avez 20 heures supplémentaires", "Les heures supplémentaires ne comptent que les jours fériés"], answer: 1, why: "Chaque semaine de travail compte seule ; on ne fait pas la moyenne sur plusieurs semaines." },
      { objective: "O4", q: "Sur une fiche de paie, le \"salaire net\" est :", options: ["La paie avant impôts", "Le montant des impôts", "Votre taux horaire", "Ce que vous touchez après les retenues"], answer: 3, why: "Le net est ce qui reste après les impôts et les autres retenues." },
      { objective: "O4", q: "Votre fiche de paie indique 32 heures mais votre relevé dit 38. Quelle est la meilleure première étape ?", options: ["Demander poliment au service de paie en montrant votre relevé d'heures", "Ne rien dire", "Démissionner", "Prendre des articles du magasin pour compenser"], answer: 0, why: "La plupart des erreurs se corrigent plus vite en demandant au service de paie avec votre relevé." },
      { objective: "O5", q: "Laquelle est une caractéristique protégée par la loi fédérale contre la discrimination à l'emploi ?", options: ["L'équipe de sport préférée", "Le handicap", "La pointure", "Les goûts musicaux"], answer: 1, why: "Le handicap est protégé, comme la race, la couleur de peau, la religion, le sexe, l'origine nationale, l'âge de 40 ans et plus et les informations génétiques." },
      { objective: "O5", q: "Comment pouvez-vous commencer une plainte auprès de l'EEOC ?", options: ["Seulement en engageant un avocat", "Seulement par fax", "En ligne sur l'EEOC Public Portal, dans un bureau, ou en appelant le 1-800-669-4000", "En publiant sur les réseaux sociaux"], answer: 2, why: "C'est gratuit et on peut commencer en ligne, en personne ou par téléphone." },
      { objective: "O5", q: "Dans la plupart des cas, combien de temps avez-vous pour déposer une plainte auprès de l'EEOC ?", options: ["7 jours", "Cinq ans", "Il n'y a pas de délai", "180 jours, ou 300 jours si un organisme de l'État ou local applique une loi semblable"], answer: 3, why: "Ce sont les délais normaux de l'EEOC ; agissez vite." },
      { objective: "O5", q: "Votre patron réduit vos heures après que vous avez signalé un harcèlement. Cela peut être :", options: ["Normal", "Des représailles, ce qui est illégal", "Une promotion", "Obligatoire selon la loi"], answer: 1, why: "Punir quelqu'un parce qu'il a fait un signalement, ce sont des représailles." },
      { objective: "O6", q: "Quelle agence traite les plaintes de sécurité au travail ?", options: ["L'OSHA", "L'EEOC", "La Poste", "La FCC (les télécommunications)"], answer: 0, why: "L'Occupational Safety and Health Administration s'occupe de la sécurité." },
      { objective: "O6", q: "Quand vous déposez une plainte de sécurité auprès de l'OSHA, vous pouvez :", options: ["Le faire seulement si votre patron est d'accord", "Ne jamais rester anonyme", "Demander que votre nom ne soit pas donné à votre employeur", "Le faire seulement en anglais"], answer: 2, why: "L'OSHA permet aux travailleurs de demander que leur nom reste confidentiel." },
      { objective: "O6", q: "Où trouver les droits en plus donnés par votre État, comme les congés maladie payés ou les règles sur la fiche de paie ?", options: ["Une publication sur les réseaux sociaux", "Le bureau du travail de votre État, trouvé sur la liste du ministère du Travail", "La supposition d'un collègue", "Nulle part ; seules les règles fédérales existent"], answer: 1, why: "Les lois des États peuvent ajouter des protections ; le bureau du travail de l'État est l'endroit officiel pour vérifier." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      4,
      6,
      9,
      12,
      13,
      16,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Plan d'arrivée",
        objective: "O1",
        notYet: "Pas de trajet, de solution de secours ou de réveil, ou pas de message en cas de retard ou de maladie.",
        meets: "Trajet, solution de secours et réveil pour arriver environ 10 minutes en avance, plus un message prêt en cas de retard ou de maladie.",
        exceeds: "Les horaires sont vérifiés sur une application de cartes et le message indique à qui il est envoyé."
      },
      {
        name: "Tenue et messages",
        objective: "O2",
        notYet: "Tenue non prévue, ou message pas clair ou impoli.",
        meets: "La tenue convient au poste, et le message est court, clair et poli.",
        exceeds: "Indique aussi comment demander le code vestimentaire en cas de doute."
      },
      {
        name: "Règle pour le téléphone",
        objective: "O3",
        notYet: "Pas de règle, ou elle permet le téléphone en conduisant ou sur des machines.",
        meets: "Une règle d'une phrase qui garde le téléphone rangé pendant le travail.",
        exceeds: "Prévoit aussi comment gérer un appel important attendu."
      },
      {
        name: "Routine de vérification de la paie",
        objective: "O4",
        notYet: "Pas de relevé d'heures ni de vérification de la fiche de paie.",
        meets: "Tient un relevé d'heures et le compare à chaque fiche de paie, heures supplémentaires comprises.",
        exceeds: "Sait quoi dire au service de paie si les chiffres ne correspondent pas."
      },
      {
        name: "Où signaler",
        objective: "O5",
        notYet: "Il manque un des organismes officiels, ou ils sont faux.",
        meets: "Nomme dol.gov pour les salaires, eeoc.gov pour la discrimination ou le harcèlement, et osha.gov pour la sécurité.",
        exceeds: "Note les délais de dépôt et les étapes pour noter d'abord un problème."
      },
      {
        name: "Bureau du travail de l'État",
        objective: "O6",
        notYet: "Aucun bureau du travail de l'État indiqué.",
        meets: "Indique le site du bureau du travail de son État.",
        exceeds: "Note un droit en plus accordé par son État, d'après le site officiel."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui commencent ou gardent un emploi pendant 90 jours (questionnaire de suivi)",
      "Apprenants qui disent comparer leur fiche de paie à leurs heures",
      "Apprenants qui signalent au bon endroit, si besoin, un problème de salaire, de discrimination, de harcèlement ou de sécurité",
      "Apprenants qui commencent un autre cours de carrière Koach Learn dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone avec une application de cartes et Internet",
      "Un exemple de fiche de paie ou celle de l'apprenant (gardée privée)",
      "Du papier et un stylo ou une application de notes pour le plan « Prêt pour le travail »",
      "Les sites officiels : dol.gov, eeoc.gov, osha.gov et le bureau du travail de l'État",
      "Environ 60 minutes au total"
    ],
    facilitatorNotes: [
      "Rappelez que ce cours n'est pas un conseil juridique ; pour un vrai problème, contactez l'organisme ou un bureau d'aide juridique.",
      "Utilisez des exemples de fiches de paie pour l'exercice ; ne demandez jamais aux apprenants de montrer leurs propres informations de paie.",
      "Aidez les apprenants à trouver pendant la séance le salaire minimum et le bureau du travail de leur État sur les sites officiels.",
      "Pour les apprenants qui sortent de prison, tenez compte des rendez-vous de libération conditionnelle, des contraintes de transport et de la garde d'enfants dans les plans d'arrivée.",
      "Notez le plan « Prêt pour le travail » avec la grille et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
