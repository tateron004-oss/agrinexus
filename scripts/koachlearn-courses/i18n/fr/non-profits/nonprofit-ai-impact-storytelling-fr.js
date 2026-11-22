"use strict";

// Koach Learn course (French translation of non-profits/nonprofit-ai-impact-storytelling.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nonprofit-ai-impact-storytelling-fr",
  lang: "fr",
  translationOf: "nonprofit-ai-impact-storytelling",
  category: "Non Profits",
  name: "L'IA pour raconter votre impact social",
  skills: "Obtenir un consentement éclairé, Recueillir une histoire avec dignité, Construire une histoire avec une structure simple, Ajouter des chiffres honnêtes, Utiliser l'IA pour rédiger et adapter des histoires, Vérifier la vérité et le respect des histoires",
  outcome: "obtenir le consentement écrit d'une personne aidée par votre programme, construire son histoire avec une structure simple et un chiffre honnête, utiliser un assistant d'IA pour la rédiger et l'adapter à un bulletin, une publication sur les réseaux et un rapport de subvention, et vérifier sa vérité et sa dignité avant de la partager.",
  about: [
    "Ce cours s'adresse aux salariés, bénévoles et responsables d'associations et d'organisations religieuses qui montrent la différence que fait leur travail aux donateurs, financeurs, membres et au public.",
    "Les histoires poussent les gens à donner et à aider, mais elles appartiennent aux personnes qu'elles racontent. Vous apprendrez à demander correctement l'autorisation, à raconter une histoire avec dignité, à l'appuyer par des chiffres honnêtes, et à utiliser l'IA (comme ChatGPT, Microsoft Copilot ou Google Gemini) pour la rédiger et l'adapter sans mettre les détails privés de quiconque dans l'IA.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites la tâche \"Essayez maintenant\". Il y a un court contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Prenez une vraie histoire de programme (avec consentement écrit) ou une histoire d'entraînement entièrement inventée. Écrivez les faits avec la structure Avant, Tournant, Après et ajoutez un chiffre honnête du programme. Utilisez l'IA avec des cases à remplir pour rédiger une histoire de bulletin de 150 mots, une publication de 40 mots et un paragraphe de rapport de subvention de 100 mots. Vérifiez les trois avec le formulaire de consentement et la liste de contrôle de dignité, et corrigez tout ce qui ne passe pas.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des salariés, bénévoles et responsables d'associations et d'organisations confessionnelles qui partagent la différence que fait leur travail avec les donateurs, les financeurs, les membres et le public.",
    startingPoint: "Ils entendent des histoires fortes de la part des personnes qu'ils servent et en partagent quelques-unes dans des bulletins ou des publications. Beaucoup n'ont pas de procédure de consentement écrite et n'ont pas réfléchi à la dignité dans les mots ni aux risques d'utiliser l'IA avec de vraies histoires.",
    gap: "Les histoires touchent les donateurs et les financeurs, mais une histoire partagée sans consentement, avec des mots de pitié ou des détails inventés peut blesser la personne et la confiance envers l'organisation. Les apprenants ont besoin d'une démarche sûre, du consentement à la vérification finale, en utilisant l'IA pour rédiger et adapter les histoires sans exposer personne.",
    constraints: [
      "Un consentement éclairé écrit avant d'utiliser toute histoire, photo ou citation ; celui des parents ou tuteurs pour les enfants",
      "Certaines histoires ne doivent pas être racontées même avec consentement, comme celles de victimes de violences ou de personnes en procédure d'immigration",
      "Vie privée : pas de noms complets, d'adresses, d'informations de santé ni de notes de suivi dans les outils d'IA",
      "Les images faites par l'IA sont signalées comme telles et ne remplacent jamais de vrais bénéficiaires",
      "Temps : environ 60 minutes au total, en leçons de 5 minutes"
    ],
    prerequisites: "« Introduction à l'IA pour les associations », ou une première expérience d'un assistant d'IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avant d'utiliser l'histoire, la photo ou les mots de quiconque", action: "demander et noter un consentement éclairé écrit, y compris où ce sera partagé et comment la personne veut être nommée", standard: "en disant à la personne qu'elle peut refuser ou changer d'avis sans perdre l'aide" },
    { id: "O2", condition: "À partir d'un brouillon d'histoire", action: "le réécrire pour que la personne en soit le héros, avec des mots qui parlent d'abord de la personne et sans mots de pitié", standard: "en laissant de côté les détails qui pourraient la faire reconnaître ou la gêner" },
    { id: "O3", condition: "À partir de notes sur une histoire", action: "organiser l'histoire en Avant, Tournant, Après et ajouter un chiffre honnête du programme", standard: "avec un chiffre tiré de vos propres registres vérifiés" },
    { id: "O4", condition: "À partir de vos notes sur une histoire", action: "écrire une demande à l'IA avec des cases à remplir et des détails généraux pour obtenir un brouillon", standard: "sans nom complet, adresse, information de santé ni note de suivi dans la demande" },
    { id: "O5", condition: "À partir d'un brouillon d'histoire", action: "l'adapter en histoire de bulletin, en publication pour les réseaux sociaux et en paragraphe de rapport de subvention", standard: "en utilisant chaque version seulement là où le formulaire de consentement le permet" },
    { id: "O6", condition: "Avant la diffusion d'une histoire", action: "la vérifier pour la vérité, le consentement, la dignité et les chiffres, et corriger tout ce qui ne passe pas", standard: "avec chaque détail conforme à vos notes et au formulaire de consentement" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Des histoires qui respectent les personnes",
      lessons: [
        {
          objectives: ["O1"],
          title: "Le consentement d'abord",
          minutes: 5,
          goal: "Demander et noter un consentement éclairé avant d'utiliser l'histoire, la photo ou les mots de quiconque.",
          text: [
            "L'histoire d'une personne lui appartient. Avant de la partager, demandez un consentement éclairé : la personne comprend ce que vous allez partager, où (bulletin, site web, réseaux sociaux, rapports de subvention), pour combien de temps, et qu'elle peut dire non ou changer d'avis sans perdre aucune aide.",
            "Obtenez le consentement par écrit avec un formulaire simple, et pour les enfants obtenez celui d'un parent ou tuteur. Laissez la personne choisir : vrai nom, prénom seulement, ou nom changé ; photo ou pas de photo. Notez ce qu'elle a accepté et gardez-le avec l'histoire.",
            "Certaines histoires ne doivent pas être racontées, même avec consentement, si les partager pouvait mettre la personne en danger, par exemple des victimes de violences, des personnes en procédure d'immigration ou des personnes en rétablissement. En cas de doute, demandez à votre directeur. Votre organisation a peut-être son propre formulaire de consentement : utilisez-le. Demandez à un avocat ou à votre fédération si vous devez faire relire un formulaire."
          ],
          steps: ["Expliquez ce que vous allez partager, où et pour combien de temps.", "Dites clairement qu'elle peut refuser sans perdre aucune aide.", "Laissez-la choisir le nom, la photo et les détails.", "Obtenez une signature (d'un parent ou tuteur pour les enfants).", "Gardez le formulaire avec l'histoire et respectez tout changement d'avis."],
          words: [["Consentement éclairé", "un oui clair donné par une personne qui comprend exactement comment son histoire sera utilisée."], ["Tuteur", "un adulte légalement responsable d'un enfant."]],
          slides: [
            { title: "L'histoire lui appartient", bullets: ["Demandez avant de partager", "Refuser n'a jamais d'effet sur son aide"] },
            { title: "Le consentement éclairé couvre", bullets: ["Ce que vous partagerez", "Où et pour combien de temps", "Le choix du nom et de la photo", "Le droit de changer d'avis"] },
            { title: "Obtenez-le par écrit", bullets: ["Un formulaire simple signé", "Un parent ou tuteur pour les enfants", "Gardez-le avec l'histoire"] },
            { title: "Quand ne pas partager", bullets: ["Si partager peut mettre la personne en danger", "En cas de doute, demandez à votre directeur"] }
          ],
          tryIt: "Écrivez une liste de consentement en cinq lignes pour votre organisation : quoi, où, combien de temps, choix du nom et de la photo, et droit de refuser. Comparez-la à tout formulaire que votre organisation utilise déjà.",
          youCanNow: "demander et noter un consentement éclairé avant de partager l'histoire de quelqu'un.",
          quickCheck: [
            { objective: "O1", q: "Quel choix de nom faut-il proposer à la personne ?", options: ["Son vrai nom, seulement son prénom, ou un nom changé", "Seulement son nom légal complet", "Seulement une photo sans nom", "Ce que préfère l'équipe"], answer: 0, why: "Laissez la personne choisir comment elle est nommée, et si une photo est utilisée." },
            { objective: "O1", q: "Une victime de violences veut partager son histoire, mais la partager pourrait la mettre en danger. Que faites-vous ?", options: ["Vous la partagez, puisqu'elle est d'accord", "Vous demandez à votre directeur, car certaines histoires ne doivent pas être racontées même avec consentement", "Vous la partagez avec son nom complet", "Vous la publiez seulement sur les réseaux sociaux"], answer: 1, why: "Certaines histoires ne doivent pas être racontées, même avec consentement, si le partage peut mettre la personne en danger." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Raconter une histoire avec dignité",
          minutes: 5,
          goal: "Réécrire une histoire pour que la personne en soit le héros, pas la victime.",
          text: [
            "La dignité, c'est montrer les gens comme des personnes capables, avec leurs forces et leurs choix, pas comme des victimes impuissantes. La personne est le héros de l'histoire ; votre organisation est celle qui aide.",
            "Nommez la personne avant sa situation (\"un homme sans logement\" ou \"un homme qui vit à la rue\", plutôt que \"un SDF\"). Évitez les mots de pitié comme \"pauvre\", \"souffrant\" ou \"brisé\". N'exagérez pas. Citez ses propres mots quand elle a accepté.",
            "Laissez de côté les détails inutiles qui pourraient l'identifier ou la gêner : adresse exacte, détails de santé, problèmes judiciaires, nom de l'école des enfants."
          ],
          steps: ["Faites de la personne l'acteur principal de l'histoire.", "Nommez la personne avant sa situation.", "Retirez les mots de pitié et l'exagération.", "Retirez les détails inutiles.", "Utilisez ses propres mots si elle a accepté."],
          words: [["Dignité", "montrer les gens avec respect, comme des personnes capables qui ont leurs propres forces."], ["Langage centré sur la personne", "nommer la personne avant sa situation, comme \"une femme sans logement\"."]],
          slides: [
            { title: "La personne est le héros", bullets: ["Elle agit et choisit", "Votre organisation aide"] },
            { title: "Les mots comptent", bullets: ["La personne d'abord : \"un homme sans logement\"", "Pas de mots de pitié : pauvre, souffrant, brisé", "Pas d'exagération"] },
            { title: "À laisser de côté", bullets: ["L'adresse exacte", "Les détails de santé et judiciaires", "Le nom de l'école des enfants"] }
          ],
          tryIt: "Réécrivez cette phrase avec dignité : \"La pauvre Maria, brisée, était sans abri et impuissante jusqu'à ce que nous la sauvions.\" Faites de Maria l'héroïne et retirez les mots de pitié.",
          youCanNow: "écrire sur les personnes que vous servez avec dignité et respect.",
          quickCheck: [
            { objective: "O2", q: "Dans une histoire qui respecte la dignité, quel est le rôle de votre organisation ?", options: ["Le héros", "La victime", "L'aide", "Le juge"], answer: 2, why: "La personne est le héros ; votre organisation est celle qui aide." },
            { objective: "O2", q: "Un brouillon dit « la pauvre Mme [Nom] souffrait ». Que faites-vous ?", options: ["Vous le gardez ; ça touche les donateurs", "Vous ajoutez d'autres mots de pitié", "Vous le rallongez", "Vous retirez les mots de pitié et montrez ses forces et ses choix"], answer: 3, why: "Évitez les mots de pitié comme « pauvre » et « souffrir » ; montrez les personnes comme capables." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Une structure simple et un chiffre honnête",
          minutes: 5,
          goal: "Construire une histoire en Avant, Tournant, Après, et ajouter un vrai chiffre du programme.",
          text: [
            "Une structure simple rend l'histoire facile à suivre. Avant : comment était la vie et ce que la personne voulait. Tournant : ce qu'elle a fait, avec l'aide de votre programme. Après : ce qui a changé, concrètement.",
            "Ajoutez ensuite un chiffre honnête pour montrer que l'histoire fait partie de quelque chose de plus grand : \"Maria fait partie des 84 parents qui ont terminé notre formation professionnelle cette année.\" Utilisez des chiffres tirés de vos propres registres, sans arrondir au-dessus ni deviner.",
            "L'histoire d'une personne touche les gens ; le chiffre montre l'ampleur de votre impact. Les financeurs veulent les deux."
          ],
          steps: ["Écrivez l'Avant : la vie et l'objectif.", "Écrivez le Tournant : son action, avec votre aide.", "Écrivez l'Après : le changement concret.", "Ajoutez un chiffre honnête tiré de vos registres.", "Vérifiez le chiffre avec la personne qui tient vos données."],
          words: [["Impact", "le vrai changement que votre travail apporte dans la vie des gens."], ["Résultat", "un effet mesurable, comme \"84 parents ont terminé la formation\"."]],
          slides: [
            { title: "Avant, Tournant, Après", bullets: ["Avant : la vie et l'objectif", "Tournant : son action, votre aide", "Après : le changement concret"] },
            { title: "Ajoutez un chiffre honnête", bullets: ["Tiré de vos propres registres", "Sans arrondir au-dessus ni deviner"] },
            { title: "Pourquoi les deux", bullets: ["L'histoire touche les gens", "Le chiffre montre l'ampleur de l'impact"] }
          ],
          tryIt: "À partir d'une histoire avec consentement ou d'une histoire d'entraînement inventée, écrivez trois courtes lignes (Avant, Tournant, Après) et un chiffre honnête de votre programme.",
          youCanNow: "construire une histoire avec une structure claire et l'appuyer par un vrai chiffre.",
          quickCheck: [
            { objective: "O3", q: "Que met-on dans le Tournant ?", options: ["Ce que la personne a fait, avec l'aide de votre programme", "L'adresse de la personne", "Votre budget", "Une liste de donateurs"], answer: 0, why: "Le Tournant, c'est ce que la personne a fait, avec l'aide de votre programme." },
            { objective: "O3", q: "Vous pensez qu'environ 90 personnes ont terminé le programme, mais vos registres disent 84. Quel chiffre utilisez-vous ?", options: ["Environ 90, en arrondissant", "84, d'après vos registres", "100, pour faire plus important", "Aucun chiffre"], answer: 1, why: "Utilisez les chiffres de vos propres registres ; n'arrondissez pas et ne devinez pas." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Des histoires qui respectent les personnes",
        questions: [
          { objective: "O1", q: "Que vous faut-il avant de partager l'histoire d'un bénéficiaire ?", options: ["Une belle photo", "L'accord d'un donateur", "Son consentement éclairé", "Un brouillon de l'IA"], answer: 2, why: "L'histoire appartient à la personne ; elle doit d'abord être d'accord." },
          { objective: "O1", q: "Un bénéficiaire refuse de partager son histoire. Qu'arrive-t-il à son aide ?", options: ["Rien ne change ; il reçoit toujours de l'aide", "Elle s'arrête", "Elle est réduite", "Il doit payer"], answer: 0, why: "Le consentement doit être libre ; refuser n'a jamais d'effet sur l'aide." },
          { objective: "O2", q: "Laquelle nomme la personne avant sa situation ?", options: ["\"un SDF\"", "\"les sans-abri\"", "\"un pauvre homme brisé\"", "\"un homme sans logement\""], answer: 3, why: "Elle nomme la personne avant la situation." },
          { objective: "O3", q: "Dans la structure Avant, Tournant, Après, que met-on dans l'Après ?", options: ["Le nom du donateur", "Le changement concret", "L'adresse de l'organisation", "Le budget"], answer: 1, why: "L'Après montre ce qui a changé." },
          { objective: "O3", q: "Quel chiffre est le bon à utiliser ?", options: ["Une supposition qui sonne bien", "Un chiffre tiré de vos propres registres, vérifié", "Un chiffre arrondi au-dessus", "Un chiffre inventé par l'IA"], answer: 1, why: "Les chiffres honnêtes viennent de vos propres registres vérifiés." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Rédiger et partager des histoires avec l'IA",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rédiger une histoire avec l'IA, en sécurité",
          minutes: 5,
          goal: "Utiliser l'IA pour transformer vos notes en brouillon sans partager de détails privés.",
          text: [
            "L'IA peut transformer vos notes Avant, Tournant, Après en brouillon fluide en quelques secondes. Mais ne collez jamais le nom complet, l'adresse, les détails de santé ou les notes de suivi d'une vraie personne dans un outil d'IA. Beaucoup d'outils d'IA peuvent garder ce que vous tapez.",
            "Utilisez des cases à remplir et des détails généraux : \"Écris une histoire de bulletin de 150 mots. [Prénom], parent seul, voulait un emploi stable. Elle a terminé notre formation professionnelle de 10 semaines et travaille maintenant comme assistante dans un cabinet médical. 84 parents ont terminé le programme cette année. Ton chaleureux et respectueux, la personne d'abord, aucun mot de pitié.\"",
            "Une fois le brouillon reçu, ajoutez vous-même les vrais détails, mais seulement ceux que la personne a acceptés sur le formulaire de consentement."
          ],
          steps: ["Partez de vos notes structurées.", "Remplacez les noms et les détails privés par des cases à remplir.", "Demandez une longueur, un ton et un langage centré sur la personne.", "Demandez un ou deux changements.", "Ajoutez vous-même seulement les vrais détails acceptés."],
          words: [["Case à remplir", "un repère comme [Prénom] que vous remplacez plus tard."], ["Brouillon", "une première version que vous allez vérifier et améliorer."]],
          slides: [
            { title: "Ne collez jamais dans l'IA", bullets: ["Noms complets et adresses", "Détails de santé ou notes de suivi", "Détails sur les enfants"] },
            { title: "Une demande sûre pour une histoire", bullets: ["Des cases à remplir comme [Prénom]", "Vos notes Avant, Tournant, Après", "Longueur, ton, la personne d'abord"] },
            { title: "Après le brouillon", bullets: ["N'ajoutez que les détails acceptés", "Vérifiez avec le formulaire de consentement"] }
          ],
          tryIt: "Transformez vos notes de la leçon 3 en demande sûre avec des cases à remplir et demandez à l'IA une histoire de bulletin de 150 mots. Demandez un changement, puis ajoutez seulement les détails acceptés.",
          youCanNow: "rédiger une histoire d'impact avec l'IA tout en protégeant la vie privée de la personne.",
          quickCheck: [
            { objective: "O4", q: "Pourquoi garder les vrais noms et les notes de suivi hors des outils d'IA ?", options: ["L'IA ne sait pas lire les noms", "Cela rallonge les brouillons", "Beaucoup d'outils d'IA peuvent garder ce que vous tapez", "L'IA n'écrit qu'en majuscules"], answer: 2, why: "Beaucoup d'outils d'IA peuvent garder ce que vous tapez." },
            { objective: "O4", q: "La personne a accepté de partager son prénom mais pas son métier. Qu'ajoutez-vous au brouillon de l'IA ?", options: ["Son nom complet et son métier", "Son adresse", "Rien du tout", "Seulement son prénom"], answer: 3, why: "N'ajoutez que les vrais détails que la personne a acceptés sur le formulaire de consentement." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Adapter une histoire à différents publics",
          minutes: 5,
          goal: "Transformer une histoire en article de bulletin, publication sur les réseaux et paragraphe de rapport de subvention.",
          text: [
            "Des lecteurs différents ont besoin de versions différentes. Les donateurs, dans un bulletin, veulent de la chaleur et un moyen d'aider. Les réseaux sociaux demandent des mots courts et une seule action claire. Un rapport de subvention demande des faits, des résultats et comment l'argent du financeur a aidé.",
            "Demandez à l'IA d'adapter le brouillon : \"Transforme cette histoire en publication de 40 mots avec un appel à l'action, et en paragraphe de rapport de subvention de 100 mots qui donne le résultat et le chiffre.\" N'utilisez l'histoire qu'aux endroits que la personne a acceptés.",
            "Les images faites par l'IA ne doivent jamais faire croire qu'elles montrent de vraies personnes que vous servez. Si vous utilisez une image faite par l'IA, indiquez-le, et ne l'utilisez pas à la place d'un vrai bénéficiaire."
          ],
          steps: ["Vérifiez sur le formulaire de consentement où vous pouvez partager.", "Demandez à l'IA une version courte pour les réseaux avec une action.", "Demandez à l'IA une version pour le rapport de subvention avec les résultats et le chiffre.", "Comparez les versions pour la vérité.", "Indiquez toute image faite par l'IA."],
          words: [["Public", "les personnes qui vont lire ou voir ce que vous partagez."], ["Rapport de subvention", "un rapport à un financeur qui montre ce que son argent a permis."]],
          slides: [
            { title: "Même histoire, trois versions", bullets: ["Bulletin : chaleureux, un moyen d'aider", "Réseaux : court, une action", "Rapport de subvention : faits et résultats"] },
            { title: "Seulement là où elle a accepté", bullets: ["Vérifiez d'abord le formulaire de consentement", "Oui pour le site ne veut pas dire oui pour les réseaux"] },
            { title: "Les images de l'IA", bullets: ["Ne jamais faire croire à de vrais bénéficiaires", "Indiquer les images faites par l'IA"] }
          ],
          tryIt: "Demandez à l'IA d'adapter votre histoire de bulletin en publication de 40 mots et en paragraphe de rapport de subvention de 100 mots. Vérifiez que chaque endroit est autorisé sur le formulaire de consentement.",
          youCanNow: "adapter une histoire pour les donateurs, les réseaux sociaux et les financeurs.",
          quickCheck: [
            { objective: "O5", q: "Que veulent les donateurs qui lisent un bulletin ?", options: ["De la chaleur et un moyen d'aider", "Un tableau budgétaire", "Un langage juridique", "Seulement des chiffres"], answer: 0, why: "Les donateurs qui lisent un bulletin veulent de la chaleur et un moyen d'aider." },
            { objective: "O5", q: "Vous n'avez pas de photo de la vraie personne, alors l'IA crée l'image d'une famille souriante. Comment l'utilisez-vous ?", options: ["Vous dites que c'est la famille que vous avez aidée", "Vous la signalez comme faite par l'IA et ne la présentez pas comme un vrai bénéficiaire", "Vous l'utilisez sans aucune mention", "Vous mettez le nom de la personne dessous"], answer: 1, why: "Les images faites par l'IA doivent être signalées comme telles et ne remplacent jamais un vrai bénéficiaire." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Vérifier une histoire avant de la diffuser",
          minutes: 5,
          goal: "Utiliser une courte liste de contrôle pour repérer les erreurs, les détails inventés et les problèmes de dignité.",
          text: [
            "L'IA ajoute parfois des détails faux : un enfant de plus, un poste que la personne n'a jamais eu, une citation qu'elle n'a jamais dite. Cela peut nuire à la personne et à la confiance envers votre organisation.",
            "Avant de partager, vérifiez : Vérité (chaque détail est-il vrai et dans vos notes ?), Consentement (chaque détail et chaque endroit sont-ils autorisés ?), Dignité (la personne est-elle le héros, nommée avant sa situation ?), et Chiffres (le chiffre vient-il de vos registres ?). Si possible, laissez la personne lire son histoire avant la diffusion.",
            "Gardez une copie de la version finale avec le formulaire de consentement, et retirez l'histoire si la personne le demande."
          ],
          steps: ["Vérité : comparez chaque détail avec vos notes ; retirez ce que l'IA a ajouté.", "Consentement : vérifiez chaque détail et chaque endroit sur le formulaire.", "Dignité : le héros, la personne d'abord, pas de pitié.", "Chiffres : confirmez avec vos registres.", "Laissez la personne la lire si possible, puis classez-la avec le formulaire de consentement."],
          words: [["Invention", "un détail inventé présenté comme vrai."], ["Liste de contrôle", "une liste de vérifications que vous faites à chaque fois."]],
          slides: [
            { title: "L'IA peut ajouter des détails faux", bullets: ["Des personnes ou événements en plus", "Des postes ou citations jamais dits"] },
            { title: "Quatre vérifications", bullets: ["Vérité", "Consentement", "Dignité", "Chiffres"] },
            { title: "Bien terminer", bullets: ["Laissez la personne la lire si possible", "Classez-la avec le formulaire de consentement", "Retirez-la si elle le demande"] }
          ],
          tryIt: "Tâche finale : passez vos trois versions (bulletin, publication, paragraphe de subvention) aux quatre vérifications. Corrigez tout ce qui échoue et notez ce que vous avez changé.",
          youCanNow: "vérifier la vérité, le consentement, la dignité et l'honnêteté des chiffres des histoires d'impact avant de les partager.",
          quickCheck: [
            { objective: "O6", q: "Laquelle fait partie des quatre vérifications avant le partage ?", options: ["La longueur", "La police", "Le consentement", "La couleur"], answer: 2, why: "Les quatre vérifications sont la vérité, le consentement, la dignité et les chiffres." },
            { objective: "O6", q: "Une famille vous demande de retirer son histoire un mois après sa publication. Que faites-vous ?", options: ["Vous la laissez en ligne ; elle a signé le formulaire", "Vous lui demandez de payer pour la retirer", "Vous changez un mot", "Vous retirez l'histoire"], answer: 3, why: "Retirez l'histoire si la personne le demande." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Rédiger et partager des histoires avec l'IA",
        questions: [
          { objective: "O4", q: "Qu'est-ce qui peut aller sans risque dans une demande d'histoire à l'IA ?", options: ["Les notes de suivi du bénéficiaire", "Son adresse", "Son dossier médical", "Des cases à remplir et des détails généraux"], answer: 3, why: "Les cases à remplir gardent les détails privés hors de l'IA." },
          { objective: "O5", q: "Le formulaire de consentement autorise le site web mais pas les réseaux sociaux. Que faites-vous ?", options: ["Vous utilisez l'histoire seulement sur le site web", "Vous la publiez quand même sur les réseaux", "Vous demandez à l'IA", "Vous changez le nom et la publiez partout"], answer: 0, why: "Ne partagez que là où la personne a accepté." },
          { objective: "O6", q: "L'IA a ajouté une citation que la personne n'a jamais dite. Que faites-vous ?", options: ["Vous la gardez, elle sonne bien", "Vous ajoutez d'autres citations", "Vous la retirez", "Vous demandez au donateur"], answer: 2, why: "Les détails inventés brisent la confiance et doivent être retirés." },
          { objective: "O5", q: "Quelle version demande des résultats et comment l'argent du financeur a aidé ?", options: ["La publication sur les réseaux", "L'affiche d'un événement", "La carte de remerciement", "Le rapport de subvention"], answer: 3, why: "Les financeurs veulent des résultats liés à leur soutien." },
          { objective: "O5", q: "Comment utiliser une image faite par l'IA ?", options: ["En la présentant comme un vrai bénéficiaire", "En la cachant à l'arrière-plan", "En l'indiquant, et jamais à la place d'un vrai bénéficiaire", "Pour obtenir le consentement"], answer: 2, why: "Les images de l'IA ne doivent pas faire croire qu'elles montrent de vraies personnes que vous servez." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA pour raconter votre impact social",
    questions: [
      { objective: "O1", q: "À qui appartient l'histoire d'un bénéficiaire ?", options: ["À l'organisation", "Au bénéficiaire", "Au donateur", "À l'outil d'IA"], answer: 1, why: "C'est sa vie et son histoire." },
      { objective: "O1", q: "Le consentement éclairé veut dire que la personne comprend :", options: ["Ce que vous allez partager, où et pour combien de temps", "Seulement qu'une photo sera prise", "Rien ; une signature suffit", "Le budget de l'organisation"], answer: 0, why: "Le consentement n'est éclairé que si elle sait comment il sera utilisé." },
      { objective: "O1", q: "Pour l'histoire d'un enfant, qui donne son consentement ?", options: ["L'enseignant de l'enfant", "Un bénévole", "Un parent ou tuteur", "Personne"], answer: 2, why: "Un parent ou tuteur doit donner son accord pour un enfant." },
      { objective: "O1", q: "Une personne qui avait accepté le mois dernier vous demande de retirer son histoire. Vous :", options: ["La retirez", "Refusez", "Lui demandez de payer", "La raccourcissez"], answer: 0, why: "Les gens peuvent changer d'avis." },
      { objective: "O1", q: "Quand une histoire peut-elle ne pas être partagée, même avec consentement ?", options: ["Quand elle est trop courte", "Quand c'est un lundi", "Jamais", "Quand la partager pourrait mettre la personne en danger"], answer: 3, why: "La sécurité passe avant une belle histoire." },
      { objective: "O2", q: "Dans une histoire digne, le héros est :", options: ["L'organisation", "La personne que vous servez", "Le donateur", "L'IA"], answer: 1, why: "La personne agit et choisit ; vous aidez." },
      { objective: "O2", q: "Quel mot faut-il éviter ?", options: ["\"a terminé\"", "\"brisé\"", "\"a choisi\"", "\"a commencé\""], answer: 1, why: "\"Brisé\" est un mot de pitié." },
      { objective: "O2", q: "Quel détail faut-il en général laisser de côté ?", options: ["Le changement concret", "Le programme suivi", "Son objectif", "Son adresse exacte"], answer: 3, why: "Une adresse peut identifier ou mettre en danger une personne." },
      { objective: "O3", q: "Les trois parties de la structure de l'histoire sont :", options: ["Avant, Tournant, Après", "Titre, Logo, Demande", "Nom, Adresse, Téléphone", "Problème, Prix, Profit"], answer: 0, why: "Cette structure simple est facile à suivre." },
      { objective: "O3", q: "Pourquoi ajouter un chiffre honnête ?", options: ["Pour allonger le texte", "Parce que l'IA en a besoin", "Pour montrer que l'histoire fait partie d'un impact plus grand", "Pour remplacer le consentement"], answer: 2, why: "Le chiffre montre l'ampleur de votre impact." },
      { objective: "O3", q: "D'où doit venir le chiffre de votre programme ?", options: ["D'une supposition", "De l'IA", "Du site d'un concurrent", "De vos propres registres vérifiés"], answer: 3, why: "Les chiffres honnêtes viennent de vos registres." },
      { objective: "O4", q: "Quelle demande est sûre ?", options: ["\"Maria Lopez, 123 rue Principale, diagnostiquée avec...\"", "\"Voici ses notes de suivi...\"", "\"[Prénom], parent seul, a terminé notre formation et travaille maintenant dans un cabinet médical.\"", "\"Voici l'école de son enfant...\""], answer: 2, why: "Elle utilise une case à remplir et aucun détail privé." },
      { objective: "O4", q: "Après un brouillon de l'IA, quels vrais détails ajoutez-vous ?", options: ["Tous les détails que vous connaissez", "Seulement ceux que la personne a acceptés", "Son numéro de téléphone", "Ce que l'IA propose"], answer: 1, why: "Le formulaire de consentement limite ce que vous partagez." },
      { objective: "O5", q: "Une version pour les réseaux sociaux doit être :", options: ["Courte avec une seule action claire", "Aussi longue qu'un rapport de subvention", "Pleine de détails du dossier", "Sans aucune demande"], answer: 0, why: "Les publications courtes avec une seule action marchent le mieux." },
      { objective: "O5", q: "Une version pour un rapport de subvention met l'accent sur :", options: ["Des blagues", "Des mots de pitié", "Les faits, les résultats et comment l'argent a aidé", "L'adresse de la personne"], answer: 2, why: "Les financeurs ont besoin de résultats." },
      { objective: "O5", q: "Avant de publier une histoire sur les réseaux sociaux, vérifiez :", options: ["Que le formulaire de consentement autorise les réseaux sociaux", "Seulement l'orthographe", "La météo", "La liste des donateurs"], answer: 0, why: "Le consentement couvre chaque endroit séparément." },
      { objective: "O5", q: "Une image faite par l'IA d'une famille souriante est présentée comme \"une famille que nous avons aidée\". C'est :", options: ["Acceptable", "Obligatoire", "Mieux qu'une vraie photo", "Trompeur ; indiquez-le et ne la présentez pas comme un vrai bénéficiaire"], answer: 3, why: "Les images de l'IA ne doivent pas se faire passer pour de vrais bénéficiaires." },
      { objective: "O6", q: "Laquelle fait partie des quatre vérifications ?", options: ["La vitesse", "La vérité", "Le prix", "La police"], answer: 1, why: "Vérité, Consentement, Dignité et Chiffres sont les quatre vérifications." },
      { objective: "O6", q: "L'IA a écrit que la personne \"a trois enfants\" mais vos notes disent un. Vous :", options: ["Le gardez", "Corrigez pour que cela corresponde à vos notes", "Redemandez à l'IA et la croyez", "Retirez le consentement de la personne"], answer: 1, why: "Chaque détail doit correspondre à vos notes." },
      { objective: "O6", q: "Où gardez-vous l'histoire finale ?", options: ["Seulement dans la discussion avec l'IA", "Nulle part", "Sur un disque partagé public", "Avec le formulaire de consentement signé"], answer: 3, why: "Les garder ensemble montre ce qui a été accepté." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      1,
      5,
      8,
      11,
      14,
      17
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Consentement",
        objective: "O1",
        notYet: "Pas de consentement écrit pour une vraie histoire, ou un détail utilisé sans accord.",
        meets: "Un consentement écrit, ou une histoire d'entraînement entièrement inventée, avec le nom choisi et les lieux de diffusion notés.",
        exceeds: "La personne a lu son histoire avant sa diffusion."
      },
      {
        name: "Structure et chiffre",
        objective: "O3",
        notYet: "Il manque une partie de l'histoire, ou le chiffre est deviné.",
        meets: "Avant, Tournant et Après, plus un chiffre tiré de registres vérifiés.",
        exceeds: "La partie Après montre un changement concret avec les propres mots de la personne, avec son autorisation."
      },
      {
        name: "Demande à l'IA sûre",
        objective: "O4",
        notYet: "La demande contient un nom complet, une adresse, des informations de santé ou des notes de suivi.",
        meets: "La demande utilise seulement des cases à remplir et des détails généraux.",
        exceeds: "Demande à l'IA des mots qui parlent d'abord de la personne et aucun mot de pitié."
      },
      {
        name: "Trois versions",
        objective: "O5",
        notYet: "Une version manque ou est utilisée là où le consentement ne le permet pas.",
        meets: "Une histoire de bulletin d'environ 150 mots, une publication de 40 mots et un paragraphe de subvention de 100 mots, chacun là où le consentement le permet.",
        exceeds: "Chaque version convient à ses lecteurs : la chaleur, une action, ou les résultats et le financement."
      },
      {
        name: "Vérification finale",
        objective: "O6",
        notYet: "Un détail faux, un mot de pitié ou un chiffre non vérifié reste dans le texte.",
        meets: "Les trois passent la vérité, le consentement, la dignité et les chiffres.",
        exceeds: "Liste ce qui a été corrigé et garde la version finale avec le formulaire de consentement."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Organisations qui adoptent un formulaire de consentement écrit pour les histoires dans les 60 jours (enquête de suivi)",
      "Histoires partagées dans des bulletins, des publications ou des rapports de subvention avec un consentement archivé",
      "Apprenants qui commencent un autre cours Koach Learn pour les associations dans les 30 jours"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec internet",
      "Un assistant d'IA gratuit",
      "Le formulaire de consentement de votre organisation, ou un formulaire d'exemple simple",
      "Environ 60 minutes au total : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Utilisez en classe des histoires d'entraînement entièrement inventées, sauf si les vraies histoires ont un consentement écrit.",
      "Faites un exercice en groupe pour réécrire les mots de pitié avec des mots qui parlent d'abord de la personne.",
      "Apportez le formulaire de consentement de l'organisation pour que les apprenants vérifient chaque version par rapport à ce qui a été accepté.",
      "Rappelez aux apprenants de demander à leur directeur avant de raconter l'histoire de personnes qui pourraient être mises en danger.",
      "Notez la tâche finale avec la grille, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
