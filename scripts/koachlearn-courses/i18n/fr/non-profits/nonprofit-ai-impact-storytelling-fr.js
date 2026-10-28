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
  chapters: [
    {
      name: "Chapitre 1 : Des histoires qui respectent les personnes",
      lessons: [
        {
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
          youCanNow: "demander et noter un consentement éclairé avant de partager l'histoire de quelqu'un."
        },
        {
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
          youCanNow: "écrire sur les personnes que vous servez avec dignité et respect."
        },
        {
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
          youCanNow: "construire une histoire avec une structure claire et l'appuyer par un vrai chiffre."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Des histoires qui respectent les personnes",
        questions: [
          { q: "Que vous faut-il avant de partager l'histoire d'un bénéficiaire ?", options: ["Une belle photo", "L'accord d'un donateur", "Son consentement éclairé", "Un brouillon de l'IA"], answer: 2, why: "L'histoire appartient à la personne ; elle doit d'abord être d'accord." },
          { q: "Un bénéficiaire refuse de partager son histoire. Qu'arrive-t-il à son aide ?", options: ["Rien ne change ; il reçoit toujours de l'aide", "Elle s'arrête", "Elle est réduite", "Il doit payer"], answer: 0, why: "Le consentement doit être libre ; refuser n'a jamais d'effet sur l'aide." },
          { q: "Laquelle nomme la personne avant sa situation ?", options: ["\"un SDF\"", "\"les sans-abri\"", "\"un pauvre homme brisé\"", "\"un homme sans logement\""], answer: 3, why: "Elle nomme la personne avant la situation." },
          { q: "Dans la structure Avant, Tournant, Après, que met-on dans l'Après ?", options: ["Le nom du donateur", "Le changement concret", "L'adresse de l'organisation", "Le budget"], answer: 1, why: "L'Après montre ce qui a changé." },
          { q: "Quel chiffre est le bon à utiliser ?", options: ["Une supposition qui sonne bien", "Un chiffre tiré de vos propres registres, vérifié", "Un chiffre arrondi au-dessus", "Un chiffre inventé par l'IA"], answer: 1, why: "Les chiffres honnêtes viennent de vos propres registres vérifiés." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Rédiger et partager des histoires avec l'IA",
      lessons: [
        {
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
          youCanNow: "rédiger une histoire d'impact avec l'IA tout en protégeant la vie privée de la personne."
        },
        {
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
          youCanNow: "adapter une histoire pour les donateurs, les réseaux sociaux et les financeurs."
        },
        {
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
          youCanNow: "vérifier la vérité, le consentement, la dignité et l'honnêteté des chiffres des histoires d'impact avant de les partager."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Rédiger et partager des histoires avec l'IA",
        questions: [
          { q: "Qu'est-ce qui peut aller sans risque dans une demande d'histoire à l'IA ?", options: ["Les notes de suivi du bénéficiaire", "Son adresse", "Son dossier médical", "Des cases à remplir et des détails généraux"], answer: 3, why: "Les cases à remplir gardent les détails privés hors de l'IA." },
          { q: "Le formulaire de consentement autorise le site web mais pas les réseaux sociaux. Que faites-vous ?", options: ["Vous utilisez l'histoire seulement sur le site web", "Vous la publiez quand même sur les réseaux", "Vous demandez à l'IA", "Vous changez le nom et la publiez partout"], answer: 0, why: "Ne partagez que là où la personne a accepté." },
          { q: "L'IA a ajouté une citation que la personne n'a jamais dite. Que faites-vous ?", options: ["Vous la gardez, elle sonne bien", "Vous ajoutez d'autres citations", "Vous la retirez", "Vous demandez au donateur"], answer: 2, why: "Les détails inventés brisent la confiance et doivent être retirés." },
          { q: "Quelle version demande des résultats et comment l'argent du financeur a aidé ?", options: ["La publication sur les réseaux", "L'affiche d'un événement", "La carte de remerciement", "Le rapport de subvention"], answer: 3, why: "Les financeurs veulent des résultats liés à leur soutien." },
          { q: "Comment utiliser une image faite par l'IA ?", options: ["En la présentant comme un vrai bénéficiaire", "En la cachant à l'arrière-plan", "En l'indiquant, et jamais à la place d'un vrai bénéficiaire", "Pour obtenir le consentement"], answer: 2, why: "Les images de l'IA ne doivent pas faire croire qu'elles montrent de vraies personnes que vous servez." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final : L'IA pour raconter votre impact social",
    questions: [
      { q: "À qui appartient l'histoire d'un bénéficiaire ?", options: ["À l'organisation", "Au bénéficiaire", "Au donateur", "À l'outil d'IA"], answer: 1, why: "C'est sa vie et son histoire." },
      { q: "Le consentement éclairé veut dire que la personne comprend :", options: ["Ce que vous allez partager, où et pour combien de temps", "Seulement qu'une photo sera prise", "Rien ; une signature suffit", "Le budget de l'organisation"], answer: 0, why: "Le consentement n'est éclairé que si elle sait comment il sera utilisé." },
      { q: "Pour l'histoire d'un enfant, qui donne son consentement ?", options: ["L'enseignant de l'enfant", "Un bénévole", "Un parent ou tuteur", "Personne"], answer: 2, why: "Un parent ou tuteur doit donner son accord pour un enfant." },
      { q: "Une personne qui avait accepté le mois dernier vous demande de retirer son histoire. Vous :", options: ["La retirez", "Refusez", "Lui demandez de payer", "La raccourcissez"], answer: 0, why: "Les gens peuvent changer d'avis." },
      { q: "Quand une histoire peut-elle ne pas être partagée, même avec consentement ?", options: ["Quand elle est trop courte", "Quand c'est un lundi", "Jamais", "Quand la partager pourrait mettre la personne en danger"], answer: 3, why: "La sécurité passe avant une belle histoire." },
      { q: "Dans une histoire digne, le héros est :", options: ["L'organisation", "La personne que vous servez", "Le donateur", "L'IA"], answer: 1, why: "La personne agit et choisit ; vous aidez." },
      { q: "Quel mot faut-il éviter ?", options: ["\"a terminé\"", "\"brisé\"", "\"a choisi\"", "\"a commencé\""], answer: 1, why: "\"Brisé\" est un mot de pitié." },
      { q: "Quel détail faut-il en général laisser de côté ?", options: ["Le changement concret", "Le programme suivi", "Son objectif", "Son adresse exacte"], answer: 3, why: "Une adresse peut identifier ou mettre en danger une personne." },
      { q: "Les trois parties de la structure de l'histoire sont :", options: ["Avant, Tournant, Après", "Titre, Logo, Demande", "Nom, Adresse, Téléphone", "Problème, Prix, Profit"], answer: 0, why: "Cette structure simple est facile à suivre." },
      { q: "Pourquoi ajouter un chiffre honnête ?", options: ["Pour allonger le texte", "Parce que l'IA en a besoin", "Pour montrer que l'histoire fait partie d'un impact plus grand", "Pour remplacer le consentement"], answer: 2, why: "Le chiffre montre l'ampleur de votre impact." },
      { q: "D'où doit venir le chiffre de votre programme ?", options: ["D'une supposition", "De l'IA", "Du site d'un concurrent", "De vos propres registres vérifiés"], answer: 3, why: "Les chiffres honnêtes viennent de vos registres." },
      { q: "Quelle demande est sûre ?", options: ["\"Maria Lopez, 123 rue Principale, diagnostiquée avec...\"", "\"Voici ses notes de suivi...\"", "\"[Prénom], parent seul, a terminé notre formation et travaille maintenant dans un cabinet médical.\"", "\"Voici l'école de son enfant...\""], answer: 2, why: "Elle utilise une case à remplir et aucun détail privé." },
      { q: "Après un brouillon de l'IA, quels vrais détails ajoutez-vous ?", options: ["Tous les détails que vous connaissez", "Seulement ceux que la personne a acceptés", "Son numéro de téléphone", "Ce que l'IA propose"], answer: 1, why: "Le formulaire de consentement limite ce que vous partagez." },
      { q: "Une version pour les réseaux sociaux doit être :", options: ["Courte avec une seule action claire", "Aussi longue qu'un rapport de subvention", "Pleine de détails du dossier", "Sans aucune demande"], answer: 0, why: "Les publications courtes avec une seule action marchent le mieux." },
      { q: "Une version pour un rapport de subvention met l'accent sur :", options: ["Des blagues", "Des mots de pitié", "Les faits, les résultats et comment l'argent a aidé", "L'adresse de la personne"], answer: 2, why: "Les financeurs ont besoin de résultats." },
      { q: "Avant de publier une histoire sur les réseaux sociaux, vérifiez :", options: ["Que le formulaire de consentement autorise les réseaux sociaux", "Seulement l'orthographe", "La météo", "La liste des donateurs"], answer: 0, why: "Le consentement couvre chaque endroit séparément." },
      { q: "Une image faite par l'IA d'une famille souriante est présentée comme \"une famille que nous avons aidée\". C'est :", options: ["Acceptable", "Obligatoire", "Mieux qu'une vraie photo", "Trompeur ; indiquez-le et ne la présentez pas comme un vrai bénéficiaire"], answer: 3, why: "Les images de l'IA ne doivent pas se faire passer pour de vrais bénéficiaires." },
      { q: "Laquelle fait partie des quatre vérifications ?", options: ["La vitesse", "La vérité", "Le prix", "La police"], answer: 1, why: "Vérité, Consentement, Dignité et Chiffres sont les quatre vérifications." },
      { q: "L'IA a écrit que la personne \"a trois enfants\" mais vos notes disent un. Vous :", options: ["Le gardez", "Corrigez pour que cela corresponde à vos notes", "Redemandez à l'IA et la croyez", "Retirez le consentement de la personne"], answer: 1, why: "Chaque détail doit correspondre à vos notes." },
      { q: "Où gardez-vous l'histoire finale ?", options: ["Seulement dans la discussion avec l'IA", "Nulle part", "Sur un disque partagé public", "Avec le formulaire de consentement signé"], answer: 3, why: "Les garder ensemble montre ce qui a été accepté." }
    ]
  }
};
