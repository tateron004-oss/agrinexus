"use strict";

// Koach Learn course (French translation of shared/forklift-operator.js). See scripts/koachlearn-courses/README.md, "Translations".
// Safety: this course prepares learners but does not certify anyone. Under OSHA 29 CFR 1910.178(l) the employer trains and evaluates.
// All load numbers are practice only.

const OSHA_178 = { name: "OSHA 29 CFR 1910.178 : Chariots industriels motorisés (la règle fédérale sur les chariots élévateurs)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.178" };
const OSHA_ETOOL = { name: "OSHA eTool : Chariots industriels motorisés (chariot élévateur), en anglais", url: "https://www.osha.gov/etools/powered-industrial-trucks" };
const OSHA_TYPES = { name: "OSHA eTool : Types de chariots élévateurs (classes I à VII)", url: "https://www.osha.gov/etools/powered-industrial-trucks/types-fundamentals/types" };
const OSHA_PARTS = { name: "OSHA eTool : Les pièces du chariot élévateur", url: "https://www.osha.gov/etools/powered-industrial-trucks/types-fundamentals/parts" };
const OSHA_PREOP = { name: "OSHA eTool : Inspection avant utilisation", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/pre-operation" };
const OSHA_LOAD = { name: "OSHA eTool : Manutention des charges", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/load-handling" };
const OSHA_TRAVEL = { name: "OSHA eTool : Déplacements et manœuvres", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/traveling-maneuvering" };
const OSHA_DOCKS = { name: "OSHA eTool : Quais de chargement", url: "https://www.osha.gov/etools/powered-industrial-trucks/workplace/loading-docks" };
const OSHA_TRAINING = { name: "OSHA eTool : Formation des caristes", url: "https://www.osha.gov/etools/powered-industrial-trucks/training" };
const AGE_RULE = { name: "29 CFR 570.58 : Interdiction de conduire un chariot élévateur pour les travailleurs de moins de 18 ans (règle du ministère du Travail des États-Unis, copie de Cornell LII)", url: "https://www.law.cornell.edu/cfr/text/29/570.58" };

module.exports = {
  id: "forklift-operator-fr",
  lang: "fr",
  translationOf: "forklift-operator",
  category: "Workforce Development",
  name: "Les bases du métier de cariste (chariot élévateur)",
  skills: "Connaître les types et les pièces du chariot élévateur, Faire l'inspection avant le poste, Lire la plaque de capacité, Manipuler les charges en sécurité, Conduire en sécurité près des personnes et des quais",
  outcome: "nommer les principaux types et pièces d'un chariot élévateur, faire une inspection complète avant le poste et mettre hors service un chariot dangereux, décider avec la plaque de capacité si une charge peut être levée en sécurité, choisir le bon geste pour conduire, empiler, travailler au quai et stationner, et préparer un plan pour être formé et évalué par un employeur.",
  about: [
    "Les caristes déplacent des marchandises dans les entrepôts, les magasins, les usines, les fermes et les chantiers. Ce cours s'adresse aux demandeurs d'emploi, aux personnes qui sortent de prison, aux anciens militaires et à toute personne qui veut commencer ce travail.",
    "Vous allez apprendre les types et les pièces d'un chariot élévateur, l'inspection quotidienne, la lecture de la plaque de capacité et l'évaluation d'une charge, les règles pour conduire près des personnes, sur les rampes et aux quais de chargement, et la façon de stationner en sécurité.",
    "Important : ce cours vous prépare, mais ne vous certifie pas. Selon la règle de l'OSHA (l'agence fédérale américaine de la sécurité et de la santé au travail) sur les chariots élévateurs, 29 CFR 1910.178, votre employeur doit vous former, vous regarder conduire son chariot sur son lieu de travail et vous évaluer avant que vous conduisiez seul. Un cours en ligne ou une carte ne suffisent pas. Vous devez avoir au moins 18 ans. Ne conduisez pas de chariot élévateur pour vous entraîner avant d'être en formation encadrée.",
    "Chaque leçon dure environ cinq minutes et se termine par une activité « À vous de jouer » sur papier. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Préparez un dossier « prêt pour le chariot élévateur » : une liste d'inspection avant le poste pour un type de chariot, trois décisions de charge à partir de plaques de capacité d'exercice avec votre raison pour chacune, une carte de poche avec les étapes pour stationner et pour le quai, et un plan pour obtenir la formation et l'évaluation d'un employeur, avec une ligne de CV honnête.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des adultes qui cherchent un emploi en entrepôt, en centre de distribution, en réserve de magasin ou en usine : demandeurs d'emploi, personnes qui sortent de prison, anciens militaires et jeunes adultes de 18 ans et plus. Certains ont déjà conduit un chariot élévateur de façon informelle ; la plupart, non.",
    startingPoint: "Savent conduire une voiture ou faire du vélo et suivre une liste de vérification. Connaissent peu les pièces du chariot, la stabilité, la capacité de charge ou les règles de l'OSHA. Certains croient qu'une carte obtenue en ligne suffit à les certifier.",
    gap: "Les chariots élévateurs sont à l'origine de nombreux accidents graves en entrepôt : renversements, personnes heurtées, chutes depuis un quai. Les employeurs doivent former et évaluer chaque cariste, et ils embauchent des personnes qui connaissent déjà l'inspection, les règles de charge et les bons réflexes de sécurité. Les apprenants ont besoin de ces connaissances, et d'une idée juste du fonctionnement de la certification, pour arriver prêts à la formation de l'employeur et ne pas payer une « certification instantanée » trompeuse.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque terme est expliqué",
      "Aucune conduite de chariot dans ce cours : la pratique réelle se fait seulement en formation encadrée chez l'employeur",
      "Il faut avoir au moins 18 ans pour conduire un chariot élévateur au travail",
      "Appareils : un téléphone ou un ordinateur de bibliothèque pour les pages de l'OSHA ; du papier pour les listes",
      "Les règles présentées ici sont celles de l'OSHA fédérale ; certains États ont leur propre plan OSHA avec des règles au moins aussi strictes"
    ],
    prerequisites: "Aucun. Le cours « Les bases de la sécurité au travail (OSHA) » est un bon complément."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir de photos ou de descriptions de chariots élévateurs", action: "identifier le type de chariot et montrer ses pièces principales", standard: "en nommant au moins 6 pièces et le rôle de chacune" },
    { id: "O2", condition: "Avec une liste d'inspection", action: "faire une inspection avant le poste et décider si le chariot peut être utilisé", standard: "en vérifiant chaque point et en mettant hors service tout chariot dangereux" },
    { id: "O3", condition: "À partir d'une plaque de capacité et de la description d'une charge", action: "décider si la charge peut être levée en sécurité et expliquer pourquoi", standard: "avec au moins 4 bonnes décisions sur 5" },
    { id: "O4", condition: "Face à une situation de conduite, d'empilage, de quai ou de stationnement", action: "choisir le geste sûr selon les règles de l'OSHA", standard: "avec au moins 4 bonnes réponses sur 5" },
    { id: "O5", condition: "En vous appuyant sur ce que l'OSHA exige des employeurs", action: "rédiger un plan pour être formé et évalué, et une ligne de CV honnête", standard: "qui précise le rôle de l'employeur et n'annonce aucune certification que vous n'avez pas" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Le métier, le chariot et la vérification quotidienne",
      lessons: [
        {
          title: "Le métier de cariste et la règle de formation de l'OSHA",
          objectives: ["O5"],
          minutes: 5,
          goal: "Expliquer qui forme et certifie un cariste et quand une nouvelle formation est nécessaire.",
          text: [
            "L'OSHA appelle les chariots élévateurs des « chariots industriels motorisés » (powered industrial trucks). Sa règle, 29 CFR 1910.178, dit que l'employeur doit s'assurer que chaque cariste est compétent. Cela veut dire une formation (en salle et en pratique avec un formateur qualifié) et une évaluation de votre conduite sur le vrai lieu de travail.",
            "Ensuite, l'employeur certifie que vous avez été formé et évalué. Le registre indique votre nom, les dates de la formation et de l'évaluation, et qui les a faites. Votre évaluation doit être refaite au moins une fois tous les trois ans.",
            "Vous recevez aussi une formation de rappel si l'on vous voit conduire de façon dangereuse, si vous avez un accident ou un presque-accident, si votre évaluation est mauvaise, si l'on vous affecte à un autre type de chariot, ou si le lieu de travail change d'une manière qui touche la sécurité.",
            "Les règles fédérales du travail interdisent à toute personne de moins de 18 ans de conduire un chariot élévateur au travail. Et un cours en ligne ou une carte de poche ne vous certifient pas à eux seuls : seules la formation et l'évaluation de votre employeur le font."
          ],
          words: [["OSHA", "l'Occupational Safety and Health Administration, l'agence américaine chargée de la sécurité au travail."], ["Chariot industriel motorisé", "le nom que l'OSHA donne aux chariots élévateurs et aux machines semblables qui lèvent et déplacent des charges."], ["Évaluation", "une personne qualifiée vous regarde conduire sur le lieu de travail pour juger si vous le faites en sécurité."], ["Formation de rappel", "une formation en plus pour corriger un problème ou vous préparer à un autre chariot ou un autre lieu de travail."], ["Presque-accident", "un événement où personne n'a été blessé, mais où quelqu'un aurait pu l'être."]],
          slides: [
            { title: "Qui vous certifie ?", bullets: ["Votre employeur, pas un site Internet", "Formation : en salle et en pratique avec un formateur", "Évaluation : vous au volant sur le vrai lieu de travail"] },
            { title: "Le registre", bullets: ["Votre nom", "Les dates de la formation et de l'évaluation", "Qui vous a formé et évalué"] },
            { title: "Quand se former à nouveau", bullets: ["Au moins tous les trois ans : une nouvelle évaluation", "Après un accident, un presque-accident ou une conduite dangereuse", "Un autre type de chariot ou un lieu de travail qui a changé"] },
            { title: "Avant de commencer", bullets: ["Vous devez avoir au moins 18 ans", "Pas d'entraînement à la conduite sans formateur"] }
          ],
          sources: [OSHA_178, OSHA_TRAINING, AGE_RULE],
          tryIt: "Sur papier, écrivez trois phrases avec vos mots : qui forme et évalue un cariste, à quelle fréquence l'évaluation est refaite, et deux événements qui veulent dire que vous avez besoin d'une formation de rappel.",
          youCanNow: "expliquer qui forme et certifie un cariste, à quelle fréquence vous êtes évalué et quand vous avez besoin d'une formation de rappel.",
          quickCheck: [
            { objective: "O5", q: "Qui doit vous former et vous évaluer avant que vous conduisiez un chariot élévateur au travail ?", options: ["N'importe quel site qui vend des cartes", "Votre employeur, sur votre lieu de travail", "Un ami qui conduit des chariots", "Personne"], answer: 1, why: "La règle de l'OSHA confie la formation et l'évaluation à l'employeur, sur le vrai lieu de travail." },
            { objective: "O5", q: "Vous heurtez un rayonnage avec votre chariot. Personne n'est blessé. Qu'est-ce qui est vrai ?", options: ["Il ne se passe rien", "Vous perdez automatiquement votre emploi", "Vous devez acheter une nouvelle carte en ligne", "C'est une raison de suivre une formation de rappel"], answer: 3, why: "Un accident ou un presque-accident fait partie des raisons prévues par l'OSHA pour une formation de rappel." }
          ]
        },
        {
          title: "Les types et les pièces du chariot élévateur",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identifier le type de chariot élévateur et nommer ses pièces principales.",
          text: [
            "L'OSHA classe les chariots élévateurs en sept classes. Classe I : chariots électriques à conducteur porté. Classe II : chariots électriques pour allées étroites. Classe III : chariots électriques à conducteur accompagnant, dont les transpalettes qu'on conduit en marchant derrière. Classes IV et V : chariots à moteur thermique, avec des pneus pleins pour les sols lisses à l'intérieur (IV) ou des pneus gonflables pour l'extérieur (V). Classe VI : tracteurs de remorquage. Classe VII : chariots tout-terrain pour les chantiers et les fermes.",
            "La plupart des chariots à contrepoids ont les mêmes pièces principales. Les fourches lèvent la charge. Elles sont accrochées au tablier porte-fourches, qui monte et descend le long du mât. Le dosseret de charge empêche la charge de tomber vers vous. Le toit de protection vous protège des objets qui tombent. Le contrepoids, à l'arrière, équilibre la charge.",
            "Depuis le siège, vous avez le volant, la commande de sens de marche (avant et arrière), les leviers de levage et d'inclinaison, l'avertisseur sonore, les freins et la ceinture de sécurité. La plaque de capacité (aussi appelée plaque signalétique) vous dit combien le chariot peut lever."
          ],
          words: [["Mât", "le cadre vertical le long duquel les fourches montent et descendent."], ["Tablier porte-fourches", "la plaque sur le mât qui tient les fourches."], ["Dosseret de charge", "un cadre au-dessus des fourches qui empêche la charge de tomber vers le cariste."], ["Toit de protection", "le cadre au-dessus du siège qui protège le cariste des objets qui tombent."], ["Contrepoids", "une masse lourde à l'arrière du chariot qui équilibre la charge."], ["Plaque de capacité", "la plaque fixée sur le chariot qui indique son modèle et combien il peut lever."]],
          slides: [
            { title: "Sept classes", bullets: ["I, II, III : électriques (porté, allée étroite, accompagnant)", "IV, V : à moteur, pour l'intérieur ou l'extérieur", "VI : tracteurs de remorquage ; VII : tout-terrain"] },
            { title: "Les pièces qui lèvent", bullets: ["Les fourches sur le tablier", "Le tablier monte et descend le long du mât", "Le dosseret garde la charge loin de vous"] },
            { title: "Les pièces qui protègent", bullets: ["Le toit de protection au-dessus de votre tête", "Le contrepoids à l'arrière", "Ceinture, avertisseur et feux"] },
            { title: "La plaque de capacité", bullets: ["Indique le modèle du chariot", "Indique combien il peut lever", "Doit être en place et lisible"] }
          ],
          sources: [OSHA_TYPES, OSHA_PARTS],
          tryIt: "Dessinez simplement un chariot élévateur à conducteur assis, vu de côté (des carrés et des traits suffisent). Notez au moins six pièces : fourches, tablier, mât, dosseret de charge, toit de protection, contrepoids. À côté de chacune, écrivez une ligne sur son rôle.",
          youCanNow: "dire à quelle classe appartient un chariot élévateur et nommer ses pièces principales et leur rôle.",
          quickCheck: [
            { objective: "O1", q: "Quelle pièce empêche une charge de tomber vers le cariste ?", options: ["Le dosseret de charge", "Le contrepoids", "Les pneus", "L'avertisseur sonore"], answer: 0, why: "Le dosseret de charge se trouve au-dessus des fourches et empêche la charge de tomber vers vous." },
            { objective: "O1", q: "Un chariot fait pour les sols inégaux d'un chantier appartient à quelle classe ?", options: ["Classe I", "Classe III", "Classe VII", "Classe IV"], answer: 2, why: "La classe VII regroupe les chariots tout-terrain pour les sols inégaux en extérieur." }
          ]
        },
        {
          title: "L'inspection avant le poste",
          objectives: ["O2"],
          minutes: 6,
          goal: "Remplir une liste d'inspection avant le poste et décider si le chariot peut être utilisé en sécurité.",
          text: [
            "L'OSHA exige que chaque chariot soit examiné avant utilisation, au moins une fois par jour ; si les chariots tournent 24 heures sur 24, après chaque poste. Si quelque chose rend le chariot dangereux, il est mis hors service jusqu'à sa réparation.",
            "Commencez contact coupé. Vérifiez les niveaux des liquides et cherchez les fuites, les fissures et les flexibles ou chaînes de mât abîmés (ne mettez jamais les mains dans le mât). Vérifiez les pneus, les fourches, le dosseret de charge, le toit de protection, et que la plaque de capacité et les étiquettes d'avertissement sont en place et lisibles. Vérifiez la ceinture de sécurité.",
            "Chariots électriques : regardez les câbles, les connecteurs et le système qui maintient la batterie. Chariots au gaz propane : vérifiez que la bouteille est bien fixée, que la soupape de sécurité est tournée vers le haut et qu'il n'y a pas de fuite.",
            "Ensuite, moteur en marche, testez les freins, la direction, la marche avant et arrière, la montée, la descente, l'inclinaison, l'avertisseur, les feux et l'alarme de recul. Si quelque chose ne va pas : n'utilisez pas le chariot, étiquetez-le ou signalez-le, notez-le sur la liste et prévenez votre responsable. Seules des personnes formées et autorisées font les réparations."
          ],
          steps: ["Contact coupé : liquides, fuites, flexibles et chaînes (regardez, ne mettez pas la main).", "Pneus, fourches, dosseret de charge, toit de protection.", "Plaque de capacité et étiquettes d'avertissement présentes et lisibles ; la ceinture fonctionne.", "Contact mis : freins, direction, marche avant et arrière.", "Montée, descente, inclinaison, avertisseur, feux, alarme de recul.", "Signez la liste ; signalez et étiquetez tout défaut et n'utilisez pas le chariot."],
          words: [["Inspection avant le poste", "la vérification d'un chariot avant de l'utiliser pendant le poste de travail."], ["Hors service", "à ne pas utiliser avant réparation, en général signalé par une étiquette."], ["Chaînes de mât", "les chaînes qui font monter le tablier et les fourches le long du mât."]],
          slides: [
            { title: "Quand inspecter", bullets: ["Avant utilisation, au moins une fois par jour", "Après chaque poste si les chariots tournent jour et nuit"] },
            { title: "Contact coupé", bullets: ["Liquides, fuites, flexibles, chaînes : regardez sans mettre la main", "Pneus, fourches, dosseret, toit de protection", "Plaque de capacité, étiquettes, ceinture"] },
            { title: "Contact mis", bullets: ["Freins, direction, marche avant et arrière", "Montée, descente, inclinaison", "Avertisseur, feux, alarme de recul"] },
            { title: "Un problème ?", bullets: ["N'utilisez pas le chariot", "Étiquetez-le, notez-le, prévenez votre responsable", "Seules des personnes autorisées le réparent"] }
          ],
          sources: [OSHA_PREOP, OSHA_178],
          tryIt: "Écrivez votre propre liste d'inspection avant le poste en deux colonnes, « Contact coupé » et « Contact mis », à l'aide de la page de l'OSHA sur l'inspection avant utilisation. Puis lisez ce cas d'exercice : l'avertisseur ne marche pas et une fourche est fissurée. Écrivez ce que vous faites, étape par étape.",
          youCanNow: "remplir une liste d'inspection avant le poste et mettre hors service un chariot dangereux.",
          quickCheck: [
            { objective: "O2", q: "À quelle fréquence un chariot élévateur doit-il être examiné avant utilisation ?", options: ["Une fois par mois", "Une fois par an", "Seulement quand il tombe en panne", "Au moins une fois par jour, avant utilisation"], answer: 3, why: "L'OSHA exige un examen avant utilisation, au moins une fois par jour, et après chaque poste si le chariot tourne 24 heures sur 24." },
            { objective: "O2", q: "Pendant votre vérification, les freins semblent faibles. Que faites-vous ?", options: ["Je l'utilise prudemment aujourd'hui", "Je le signale, je le mets hors service avec une étiquette et je ne l'utilise pas", "Je répare les freins moi-même", "Je dis à un collègue de l'utiliser"], answer: 1, why: "Un chariot dangereux est mis hors service et signalé ; seules des personnes autorisées le réparent." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Le métier, le chariot et la vérification quotidienne",
        questions: [
          { objective: "O5", q: "Vous avez suivi un cours en ligne sur les chariots élévateurs et reçu une carte. Pouvez-vous maintenant conduire n'importe quel chariot dans un nouvel emploi ?", options: ["Non ; l'employeur doit vous former et vous évaluer sur son chariot et son site", "Oui, la carte suffit", "Oui, si la carte est plastifiée", "Seulement le week-end"], answer: 0, why: "L'OSHA exige que l'employeur forme et évalue chaque cariste sur le lieu de travail." },
          { objective: "O5", q: "Au minimum, à quelle fréquence l'évaluation d'un cariste doit-elle être refaite ?", options: ["Tous les mois", "Tous les dix ans", "Une fois tous les trois ans", "Jamais"], answer: 2, why: "L'OSHA dit que l'évaluation de chaque cariste est faite au moins une fois tous les trois ans." },
          { objective: "O1", q: "À quoi sert le contrepoids ?", options: ["À lever les fourches", "À tenir l'avertisseur", "À protéger votre tête", "À équilibrer la charge à l'avant"], answer: 3, why: "Le contrepoids lourd, à l'arrière, équilibre le poids posé sur les fourches." },
          { objective: "O1", q: "Où trouvez-vous combien un chariot élévateur peut lever ?", options: ["Sur les pneus", "Sur la plaque de capacité", "Sur l'avertisseur", "Sur le siège"], answer: 1, why: "La plaque de capacité indique la capacité de levage du chariot." },
          { objective: "O2", q: "Quelle vérification se fait moteur en marche ?", options: ["Tester les freins, la direction, le levage et l'inclinaison", "Regarder les pneus", "Lire les étiquettes", "Vérifier les niveaux des liquides"], answer: 0, why: "Les freins, la direction, le levage et l'inclinaison sont des essais de fonctionnement faits moteur en marche." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Les charges, la conduite et l'embauche",
      lessons: [
        {
          title: "Lire la plaque de capacité et juger une charge",
          objectives: ["O3"],
          minutes: 6,
          goal: "Décider avec la plaque de capacité et le centre de charge si une charge peut être levée en sécurité.",
          text: [
            "La plaque de capacité indique le poids maximum que le chariot peut lever à un certain centre de charge. Le centre de charge est la distance entre la face avant des fourches et le milieu (le centre de gravité) de la charge. Beaucoup de chariots sont prévus pour un centre de charge de 24 pouces. Si le milieu de la charge est plus loin, ou si le chariot porte un accessoire, la capacité sûre est plus faible : regardez la plaque et demandez à votre responsable.",
            "Un chariot élévateur s'équilibre comme une balançoire à bascule sur ses roues avant. La charge sur les fourches est d'un côté ; le chariot et le contrepoids sont de l'autre. Trop de poids, une charge trop en avant, ou une charge levée et inclinée vers l'avant peuvent faire basculer le chariot vers l'avant. Tourner trop vite peut le renverser sur le côté.",
            "Ne levez que des charges stables et dans la limite de la capacité. Centrez la charge entre les fourches et glissez les fourches sous au moins les deux tiers de la longueur de la charge. Levez un peu, inclinez légèrement le mât vers l'arrière pour que la charge s'appuie sur le dosseret, et gardez-la basse."
          ],
          steps: ["Trouvez le poids de la charge (étiquette, documents ou demandez).", "Lisez la plaque de capacité : capacité et centre de charge.", "Le milieu de la charge est-il dans le centre de charge ? Le poids est-il sous la capacité ?", "La charge est-elle stable, filmée et en bon état ?", "Si oui : centrez-la, fourches sous au moins les deux tiers, levez un peu, inclinez vers l'arrière. Si non ou en cas de doute : arrêtez et demandez."],
          words: [["Capacité", "le poids maximum qu'un chariot peut lever en sécurité, indiqué sur la plaque de capacité."], ["Centre de charge", "la distance entre l'avant des fourches et le milieu de la charge."], ["Centre de gravité", "le point où le poids d'un objet est en équilibre."], ["Renversement", "quand un chariot élévateur bascule vers l'avant ou tombe sur le côté."]],
          slides: [
            { title: "Ce que dit la plaque de capacité", bullets: ["Capacité : le maximum que le chariot peut lever", "À un centre de charge, souvent 24 pouces", "Charge plus en avant = il peut lever moins"] },
            { title: "Comme une balançoire à bascule", bullets: ["Les roues avant sont le point d'appui", "La charge d'un côté, le contrepoids de l'autre", "Trop lourde ou trop en avant : il bascule"] },
            { title: "Bien prendre la charge", bullets: ["Charge stable, dans la limite de la capacité", "Centrée, fourches sous les deux tiers", "Levez un peu, inclinez vers l'arrière, gardez-la basse"] },
            { title: "Un doute ? Arrêtez et demandez", bullets: ["Poids inconnu", "Charge abîmée ou penchée", "Un accessoire change la capacité"] }
          ],
          sources: [OSHA_LOAD, OSHA_178],
          tryIt: "Exercice seulement, chiffres inventés. La plaque d'un chariot indique 4 000 lb (livres) à un centre de charge de 24 pouces. Répondez oui ou non, avec une raison : (1) une palette de 3 200 lb, centrée et filmée ; (2) une caisse de 4 600 lb ; (3) une charge de 2 500 lb penchée et déchirée ; (4) une charge de 3 000 lb dont le milieu est bien au-delà de 24 pouces. Écrivez ce que vous feriez dans chaque cas.",
          youCanNow: "lire une plaque de capacité, décider si une charge peut être levée en sécurité et dire pourquoi.",
          quickCheck: [
            { objective: "O3", q: "La plaque indique 5 000 lb à 24 pouces. La charge pèse 5 800 lb. Que faites-vous ?", options: ["Je la lève lentement", "Je mets une personne à l'arrière comme poids en plus", "Je ne la lève pas ; je préviens mon responsable", "Je la lève haut pour qu'elle s'équilibre"], answer: 2, why: "Ne levez jamais plus que la capacité indiquée ; personne ne doit jamais monter sur le chariot pour faire contrepoids." },
            { objective: "O3", q: "Jusqu'où les fourches doivent-elles passer sous une charge ?", options: ["Seulement les pointes", "Au moins les deux tiers de la longueur de la charge", "Jusqu'à la palette suivante, derrière", "Cela n'a pas d'importance"], answer: 1, why: "Les conseils de l'OSHA disent au moins les deux tiers de la longueur de la charge, sans toucher les charges placées derrière." }
          ]
        },
        {
          title: "Conduire, travailler au quai et stationner en sécurité",
          objectives: ["O4"],
          minutes: 6,
          goal: "Choisir le geste sûr pour conduire, travailler au quai et stationner.",
          text: [
            "Roulez avec la charge basse et inclinée vers l'arrière, jamais levée ni inclinée vers l'avant. Roulez à une vitesse qui vous permet de vous arrêter en sécurité, et ralentissez sur les sols mouillés, dans les virages et aux croisements d'allées. Klaxonnez aux croisements d'allées et dans les angles sans visibilité. Regardez où vous allez. Si la charge vous cache la vue, roulez en marche arrière. Gardez environ trois longueurs de chariot derrière un autre chariot.",
            "Les personnes : personne ne se tient ni ne passe sous des fourches levées, chargées ou vides. Pas de passagers, sauf si le chariot a une place sûre prévue pour eux et que c'est autorisé. Ne roulez jamais vers quelqu'un qui se tient devant un mur ou un rayonnage.",
            "Les rampes : allez lentement. Avec une charge, gardez la charge du côté de la montée : marche avant pour monter, marche arrière pour descendre. Ne tournez jamais sur une rampe. Les quais : avant d'entrer dans une remorque, les freins de la remorque doivent être serrés et ses roues arrière calées ; vérifiez que le plancher de la remorque n'a ni trou ni partie fragile ; restez loin du bord du quai.",
            "Stationner : si vous quittez le chariot (ou si vous êtes à 25 pieds ou plus, ou hors de vue), descendez complètement les fourches, mettez les commandes au point mort, coupez le moteur et serrez le frein ; calez les roues dans une pente. Si un chariot à conducteur assis commence à se renverser : ne sautez pas. Restez sur le siège avec la ceinture attachée, tenez le volant, calez vos pieds et penchez-vous du côté opposé à la chute."
          ],
          steps: ["Charge basse, inclinée vers l'arrière ; klaxon aux croisements ; regardez où vous allez.", "La charge vous cache la vue : roulez en marche arrière.", "Rampes : charge du côté de la montée, pas de virage sur la rampe.", "Quais : freins de la remorque serrés, roues calées, plancher vérifié.", "Stationner : fourches en bas, point mort, moteur coupé, frein serré.", "Renversement : restez dedans, ceinture attachée, tenez-vous, penchez-vous du côté opposé."],
          words: [["Croisement d'allées", "l'endroit où deux allées se croisent, comme un carrefour."], ["Cale de roue", "un coin placé contre une roue pour que la remorque ne roule pas."], ["Bord du quai", "le bord du quai de chargement, là où le sol s'arrête."], ["Laissé sans surveillance", "laissé seul : vous êtes à 25 pieds ou plus du chariot, ou vous ne le voyez plus."]],
          slides: [
            { title: "En roulant", bullets: ["Charge basse et inclinée vers l'arrière", "Klaxon aux croisements et dans les angles morts", "La charge vous cache la vue ? Marche arrière"] },
            { title: "Les personnes", bullets: ["Personne sous des fourches levées", "Pas de passagers", "Ne coincez jamais quelqu'un contre un mur ou un rayonnage"] },
            { title: "Rampes et quais", bullets: ["Charge du côté de la montée ; pas de virage sur une rampe", "Freins de la remorque serrés et roues calées", "Vérifiez le plancher de la remorque ; restez loin du bord"] },
            { title: "Stationner et renversement", bullets: ["Fourches en bas, point mort, moteur coupé, frein serré", "Renversement : restez dedans, ceinture attachée, penchez-vous à l'opposé"] }
          ],
          sources: [OSHA_TRAVEL, OSHA_DOCKS, OSHA_178],
          tryIt: "Faites une carte de poche avec deux listes : « Avant d'entrer dans une remorque » et « Quand je stationne ». Puis répondez par écrit à ce cas d'exercice : vous transportez une charge haute qui vous cache la vue et vous devez descendre une rampe. Que faites-vous ?",
          youCanNow: "choisir le geste sûr pour conduire, travailler au quai, utiliser une rampe, stationner et réagir si un chariot commence à se renverser.",
          quickCheck: [
            { objective: "O4", q: "Un collègue veut se mettre sous vos fourches levées pour réparer une étiquette. Que lui dites-vous ?", options: ["« Vas-y, fais vite. »", "« Seulement si les fourches sont vides. »", "« Seulement si tu portes un casque. »", "« Non. Personne ne passe sous des fourches levées. Je les descends d'abord. »"], answer: 3, why: "L'OSHA interdit à quiconque de se tenir ou de passer sous des fourches levées, chargées ou vides." },
            { objective: "O4", q: "Votre chariot à conducteur assis commence à se renverser. Que faites-vous ?", options: ["Je reste sur le siège, ceinture attachée, je tiens le volant et je me penche du côté opposé", "Je saute vite", "Je m'accroche au mât", "Je lève les fourches"], answer: 0, why: "Sur un chariot à conducteur assis, rester dedans avec la ceinture attachée est la façon d'éviter d'être écrasé." }
          ]
        },
        {
          title: "Se former et se faire embaucher comme cariste",
          objectives: ["O5"],
          minutes: 5,
          goal: "Rédiger un plan pour être formé et évalué, et une ligne de CV honnête.",
          text: [
            "Beaucoup d'entrepôts, de centres de distribution et de magasins embauchent des personnes pour le travail général d'entrepôt, puis les forment au chariot élévateur. Certaines agences d'intérim, certains centres pour l'emploi et certains collèges communautaires (community colleges) proposent aussi des formations avec de la pratique réelle. Demandez si la formation comprend de la conduite avec un formateur et une évaluation pratique.",
            "Rappelez-vous : quel que soit l'endroit où vous vous formez, chaque nouvel employeur doit s'assurer que vous êtes formé et évalué pour ses chariots et son lieu de travail avant que vous conduisiez seul. Une formation passée aide, et un employeur peut ne pas avoir à refaire les sujets que vous avez déjà appris et sur lesquels vous avez été évalué.",
            "Sur votre CV, soyez honnête. Si vous avez terminé ce cours, écrivez que vous avez suivi une formation sur les connaissances de sécurité du chariot élévateur. Si un employeur vous a formé et évalué, écrivez les types de chariots et l'année. N'écrivez jamais « certifié » si vous ne l'êtes pas.",
            "En entretien, parlez de l'inspection avant le poste, de la plaque de capacité et de la sécurité des piétons. Les employeurs veulent des caristes prudents d'abord, rapides ensuite."
          ],
          steps: ["Notez trois employeurs ou programmes près de chez vous qui forment des caristes (entreprises, centre pour l'emploi, collège communautaire).", "Demandez à chacun : la formation comprend-elle de la conduite encadrée et une évaluation ?", "Écrivez une ligne de CV honnête sur ce que vous avez fait jusqu'ici.", "Entraînez-vous à une réponse de 30 secondes : « Comment restez-vous en sécurité sur un chariot élévateur ? »"],
          words: [["Agence d'intérim", "une entreprise qui place des travailleurs dans d'autres entreprises."], ["Centre pour l'emploi", "un bureau public (souvent appelé American Job Center) qui aide les gens à trouver un emploi et une formation."]],
          slides: [
            { title: "Où se former", bullets: ["Les employeurs qui embauchent puis forment", "Les centres pour l'emploi et les collèges communautaires", "Demandez : conduite encadrée et évaluation ?"] },
            { title: "Chaque employeur vous évalue", bullets: ["Pour ses chariots et son lieu de travail", "Avant que vous conduisiez seul"] },
            { title: "Soyez honnête sur votre CV", bullets: ["Cours : formation sur les connaissances de sécurité du chariot élévateur", "Formé par un employeur : types de chariots et année", "N'écrivez jamais « certifié » si vous ne l'êtes pas"] }
          ],
          sources: [OSHA_178, OSHA_TRAINING],
          tryIt: "Écrivez votre plan : trois endroits qui pourraient vous former, la question que vous poserez à chacun, une ligne de CV honnête et votre réponse de 30 secondes à « Comment restez-vous en sécurité sur un chariot élévateur ? » Lisez la réponse à voix haute.",
          youCanNow: "rédiger un plan pour obtenir une formation et une évaluation de cariste, et décrire honnêtement votre formation sur un CV.",
          quickCheck: [
            { objective: "O5", q: "Vous avez terminé ce cours, mais aucun employeur ne vous a évalué. Quelle ligne de CV est honnête ?", options: ["« Cariste certifié, toutes classes »", "« Formation sur les connaissances de sécurité du chariot élévateur (Koach Learn), 2026 »", "« Conducteur de chariot élévateur avec licence OSHA »", "« Expert en chariot élévateur, 10 ans »"], answer: 1, why: "Elle dit exactement ce que vous avez fait, sans annoncer une certification que vous n'avez pas." },
            { objective: "O5", q: "Que devez-vous demander à un programme de formation de cariste ?", options: ["S'il comprend de la conduite encadrée et une évaluation pratique", "S'il donne une belle carte", "Si vous pouvez sauter la partie pratique", "S'il est le moins cher en ligne"], answer: 0, why: "Une formation conforme à l'OSHA comprend de la pratique réelle et une évaluation, alors vérifiez que le programme les propose." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Les charges, la conduite et l'embauche",
        questions: [
          { objective: "O3", q: "Qu'est-ce que le centre de charge ?", options: ["Le milieu de l'entrepôt", "Le centre du volant", "La distance entre la face des fourches et le milieu de la charge", "La hauteur du mât"], answer: 2, why: "Le centre de charge se mesure de la face avant des fourches jusqu'au centre de gravité de la charge." },
          { objective: "O3", q: "Une charge est penchée et son film est déchiré. Que faites-vous ?", options: ["Je la lève vite", "Je la lève haut pour voir", "Je la pousse avec les fourches", "Je ne la lève pas ; je la signale pour qu'elle soit réparée ou réempilée"], answer: 3, why: "Seules les charges stables et bien rangées doivent être manipulées." },
          { objective: "O4", q: "Votre charge vous cache la vue vers l'avant. Comment roulez-vous ?", options: ["En marche arrière, en regardant où vous allez", "En marche avant, charge levée", "En marche avant, plus vite", "Avec un collègue debout sur les fourches"], answer: 0, why: "Si la charge vous cache la vue, roulez avec la charge derrière vous (en marche arrière)." },
          { objective: "O4", q: "Avant d'entrer dans la remorque d'un camion au quai, que faut-il faire ?", options: ["Rien", "Ouvrir les fenêtres arrière de la remorque", "Serrer les freins de la remorque, caler ses roues et vérifier le plancher", "Klaxonner trois fois"], answer: 2, why: "L'OSHA exige des freins serrés et des roues calées, et un plancher de remorque vérifié avant d'y entrer." },
          { objective: "O5", q: "Vous changez pour un emploi avec un autre type de chariot élévateur. Qu'est-ce qui est vrai ?", options: ["Vous avez besoin d'une formation et d'une évaluation pour ce nouveau type", "Votre ancienne carte couvre tout", "Vous pouvez apprendre seul après les heures de travail", "Rien ne change"], answer: 0, why: "Un autre type de chariot est une raison d'être formé et évalué sur ce chariot." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les bases du métier de cariste",
    questions: [
      { objective: "O5", q: "Selon la règle de l'OSHA, qui certifie qu'un cariste a été formé et évalué ?", options: ["Le cariste", "Un site Internet", "L'employeur", "Le fabricant du chariot"], answer: 2, why: "C'est l'employeur qui certifie la formation et l'évaluation du cariste." },
      { objective: "O5", q: "Quel est l'âge minimum pour conduire un chariot élévateur au travail ?", options: ["16", "18", "14", "21"], answer: 1, why: "Les règles fédérales du travail interdisent la conduite de chariots élévateurs aux travailleurs de moins de 18 ans." },
      { objective: "O5", q: "Laquelle de ces situations demande une formation de rappel ?", options: ["Un presque-accident avec un piéton", "Un nouvel uniforme", "Une augmentation de salaire", "Un jour férié"], answer: 0, why: "Un accident ou un presque-accident fait partie des raisons prévues par l'OSHA pour une formation de rappel." },
      { objective: "O1", q: "À quoi sert le toit de protection ?", options: ["À tenir la charge", "À équilibrer le chariot", "À diriger le chariot", "À protéger le cariste des objets qui tombent"], answer: 3, why: "Le toit de protection abrite le cariste des objets qui tombent d'en haut." },
      { objective: "O1", q: "Sur quelle pièce les fourches sont-elles accrochées ?", options: ["Le contrepoids", "Le tablier porte-fourches", "Les pneus", "Le siège"], answer: 1, why: "Les fourches sont accrochées au tablier, qui monte et descend le long du mât." },
      { objective: "O1", q: "Un transpalette électrique qu'on conduit en marchant derrière appartient à quelle classe ?", options: ["Classe VII", "Classe V", "Classe III", "Classe VI"], answer: 2, why: "La classe III regroupe les chariots électriques à conducteur accompagnant, dont ceux qu'on conduit en marchant derrière." },
      { objective: "O2", q: "Quand un chariot élévateur doit-il être examiné ?", options: ["Avant utilisation, au moins une fois par jour", "Une fois par an", "Seulement après un accident", "Seulement quand il est neuf"], answer: 0, why: "L'OSHA exige un examen avant utilisation, au moins une fois par jour." },
      { objective: "O2", q: "Pourquoi ne mettez-vous pas les mains dans le mât pour vérifier les chaînes ?", options: ["Parce que c'est sale", "Parce que cela ne fait pas partie de la vérification", "Parce que c'est le responsable qui le fait", "Parce que le mât peut bouger et vous écraser les mains"], answer: 3, why: "Les pièces mobiles du mât peuvent écraser les mains ; les conseils de l'OSHA sont de regarder, ou d'utiliser un bâton pour vérifier la tension." },
      { objective: "O2", q: "La plaque de capacité manque sur un chariot. Que faites-vous ?", options: ["Je devine la capacité", "Je le signale ; la plaque doit être en place et lisible", "J'utilise la photo de la plaque d'un autre chariot", "Je n'en tiens pas compte"], answer: 1, why: "Les plaques et les marquages doivent rester en place et lisibles ; signalez-le avant utilisation." },
      { objective: "O2", q: "Qui peut réparer un chariot élévateur ?", options: ["Seulement des personnes formées et autorisées", "N'importe quel cariste", "Toute personne qui a des outils", "Le dernier arrivé"], answer: 0, why: "Seules des personnes autorisées et formées doivent faire les réparations." },
      { objective: "O3", q: "La plaque indique 3 000 lb à 24 pouces. Quelle charge pouvez-vous lever (exercice seulement) ?", options: ["Une caisse de 3 500 lb", "Une charge de 3 000 lb dont le milieu est à 40 pouces", "Une charge de 1 000 lb déchirée et penchée", "Une palette filmée de 2 400 lb, centrée"], answer: 3, why: "Elle est sous la capacité, stable et centrée dans le centre de charge indiqué." },
      { objective: "O3", q: "Que se passe-t-il quand le milieu de la charge est plus loin que le centre de charge indiqué ?", options: ["Le chariot peut lever plus", "La capacité sûre diminue", "Rien ne change", "Le chariot va plus vite"], answer: 1, why: "Un centre de charge plus long rend le chariot moins stable, donc il peut lever moins." },
      { objective: "O3", q: "Après avoir levé un peu une charge, que faites-vous avant de rouler ?", options: ["J'incline légèrement le mât vers l'arrière pour que la charge s'appuie sur le dosseret", "Je l'incline vers l'avant", "Je la lève le plus haut possible", "Je laisse quelqu'un la tenir"], answer: 0, why: "Incliner légèrement vers l'arrière stabilise la charge contre le dosseret." },
      { objective: "O4", q: "Comment devez-vous porter une charge en roulant ?", options: ["Haute, pour voir", "Inclinée vers l'avant", "Basse et inclinée vers l'arrière", "Avec une personne qui la tient"], answer: 2, why: "Une charge basse et inclinée vers l'arrière garde le chariot stable ; ne roulez jamais charge levée ou inclinée vers l'avant." },
      { objective: "O4", q: "Vous arrivez à un croisement d'allées où vous ne voyez pas derrière l'angle. Que faites-vous ?", options: ["J'accélère pour passer vite", "Je ralentis et je klaxonne", "Je lève les fourches", "Je ferme les yeux et j'avance"], answer: 1, why: "L'OSHA dit de ralentir et de klaxonner là où la vue est bloquée." },
      { objective: "O4", q: "Vous descendez une rampe avec un chariot chargé. Dans quel sens ?", options: ["En marche avant, charge devant", "De côté", "Je fais demi-tour au milieu", "En marche arrière, pour que la charge reste du côté de la montée"], answer: 3, why: "Gardez la charge du côté de la montée : marche avant pour monter, marche arrière pour descendre, et ne tournez jamais sur une rampe." },
      { objective: "O4", q: "Vous quittez votre chariot pour une pause. Que devez-vous faire ?", options: ["Descendre les fourches, mettre au point mort, couper le moteur et serrer le frein", "Le laisser tourner pour qu'il soit prêt", "Laisser les fourches en l'air", "Demander à un collègue de le surveiller"], answer: 0, why: "Un chariot laissé sans surveillance a les fourches en bas, les commandes au point mort, le moteur coupé et le frein serré." },
      { objective: "O4", q: "À quelle distance devez-vous rester derrière un autre chariot ?", options: ["Un pied", "Le plus près possible", "Environ trois longueurs de chariot", "Cela n'a pas d'importance"], answer: 2, why: "L'OSHA demande environ trois longueurs de chariot entre deux chariots." },
      { objective: "O5", q: "Un site Internet dit que sa vidéo en ligne vous rend « certifié OSHA » en 20 minutes. Qu'est-ce qui est vrai ?", options: ["Elle remplace la formation de l'employeur", "L'OSHA vend la carte", "Elle suffit pour tous les emplois", "La formation pratique et l'évaluation de l'employeur restent obligatoires"], answer: 3, why: "Seules la formation et l'évaluation de l'employeur sur le lieu de travail respectent la règle de l'OSHA." },
      { objective: "O1", q: "Qu'indique la plaque de capacité ?", options: ["Le modèle du chariot et combien il peut lever", "Le nom du cariste", "L'adresse de l'entrepôt", "Le prix du carburant"], answer: 0, why: "La plaque de capacité indique le modèle et les informations de capacité." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 6, 8, 10, 11, 13, 15, 18] },
  rubric: {
    mastery: "Atteint ou Dépassé sur chaque ligne. Si une ligne est Pas encore, corrigez cette partie et vérifiez à nouveau.",
    criteria: [
      { name: "Liste d'inspection", objective: "O2", notYet: "Il manque des vérifications contact coupé ou contact mis, ou aucune étape pour un chariot dangereux.", meets: "Couvre chaque point contact coupé et contact mis pour le type de chariot choisi et dit quoi faire en cas de défaut.", exceeds: "Ajoute les vérifications en plus pour les chariots électriques ou au propane." },
      { name: "Pièces nommées", objective: "O1", notYet: "Moins de six pièces nommées, ou des rôles faux.", meets: "Au moins six pièces nommées avec le rôle de chacune, et la classe du chariot.", exceeds: "Explique comment le contrepoids et le dosseret de charge protègent le cariste." },
      { name: "Décisions de charge", objective: "O3", notYet: "Une charge trop lourde ou instable est jugée sûre.", meets: "Les trois décisions de charge sont justes, avec une raison qui s'appuie sur la plaque de capacité.", exceeds: "Indique quand demander au responsable, par exemple pour un poids inconnu ou un accessoire." },
      { name: "Carte conduite, quai et stationnement", objective: "O4", notYet: "Il manque la vérification du quai ou une étape de stationnement.", meets: "Donne les étapes du quai (freins, cales, plancher) et les quatre étapes de stationnement.", exceeds: "Ajoute les règles pour les rampes, les piétons et le renversement." },
      { name: "Plan de formation et ligne de CV", objective: "O5", notYet: "Se dit certifié, ou dit qu'aucune formation de l'employeur n'est nécessaire.", meets: "Nomme trois endroits où se former, dit que l'employeur doit évaluer et donne une ligne de CV honnête.", exceeds: "Comprend une réponse de 30 secondes sur la sécurité, préparée pour les entretiens." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours avec un dossier « prêt pour le chariot élévateur » conforme à la grille",
      "Apprenants qui commencent une formation de cariste chez un employeur ou dans un programme dans les 60 jours (enquête de suivi)",
      "Apprenants embauchés à un poste d'entrepôt ou de cariste (rapports des partenaires et de suivi)",
      "Les employeurs partenaires signalent de nouvelles recrues qui réussissent leur évaluation pratique du premier coup"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Internet pour les pages eTool de l'OSHA",
      "Du papier et un stylo pour le dessin, la liste d'inspection et la carte de poche",
      "Facultatif : des photos imprimées de chariots élévateurs et un exemple de plaque de capacité",
      "Environ 60 minutes en tout"
    ],
    facilitatorNotes: [
      "Dites-le clairement dès le début : ce cours ne certifie personne ; c'est l'employeur qui forme et évalue.",
      "Ne laissez pas les apprenants s'entraîner sur de vrais chariots élévateurs dans le cadre de ce cours. Si votre programme a un chariot de formation, la pratique se fait seulement avec un formateur qualifié.",
      "Utilisez des plaques de capacité imprimées avec des chiffres inventés pour l'exercice sur les charges.",
      "Faites attention aux apprenants de moins de 18 ans : ils peuvent suivre le cours, mais ne peuvent pas conduire de chariot élévateur au travail.",
      "Notez le dossier avec la grille et revoyez une ligne Pas encore à la fois."
    ]
  }
};
