"use strict";

// Koach Learn course (French translation of shared/nursing-assistant-cna-prep.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nursing-assistant-cna-prep-fr",
  lang: "fr",
  translationOf: "nursing-assistant-cna-prep",
  category: "Workforce Development",
  name: "Préparation au métier d'aide-soignant certifié (CNA)",
  skills: "Connaître le parcours CNA dans votre État, Se laver les mains et utiliser des gants en sécurité, Protéger les droits et la vie privée des résidents, Donner des soins quotidiens sûrs, Observer et signaler les changements, Préparer l'examen de l'État",
  outcome: "faire un plan personnel pour devenir aide-soignant certifié dans votre État, et expliquer les bases de sécurité, de vie privée, de soins et de signalement que vérifie l'examen de l'État.",
  about: [
    "Un aide-soignant certifié (CNA, de l'anglais « certified nursing assistant ») aide les personnes dans leurs soins de tous les jours, en maison de retraite, à l'hôpital et dans d'autres lieux de soins. C'est l'un des moyens les plus rapides de commencer une carrière dans la santé, et beaucoup d'infirmiers ont commencé comme CNA.",
    "Ce cours vous prépare. Il ne fait pas de vous un CNA. Pour être certifié, vous terminez une formation agréée par l'État, vous réussissez l'examen de compétence de votre État et vous êtes inscrit au registre des aides-soignants de votre État. Chaque État fixe ses propres règles, donc vous apprendrez où vérifier les vôtres.",
    "Vous apprendrez ce qui est à la base du métier et de l'examen : des mains propres, les droits et la vie privée des résidents, des soins quotidiens sûrs, et comment observer et signaler. Les gestes pratiques, comme déplacer une personne ou prendre la tension artérielle, s'apprennent dans votre formation encadrée, pas à la maison sur un vrai patient.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche « Essayez maintenant » et une vérification rapide de deux questions. À la fin, vous faites votre propre plan de révision et d'examen avec de vraies dates."
  ],
  finalTask: "Faites un plan de révision et d'examen CNA d'une page pour votre État : la page officielle du registre ou du département de la santé que vous avez consultée, deux formations agréées près de chez vous avec leur coût et leur date de début (prises sur leurs propres pages), les parties de l'examen de votre État, un emploi du temps de révision par semaine avec des dates, les cinq gestes que vous pratiquerez le plus en cours, et une personne à qui vous vous adresserez si vous avez une question.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des adultes qui veulent un premier emploi dans la santé : demandeurs d'emploi, jeunes adultes, personnes qui rentrent chez elles après la prison, immigrés et adultes qui reprennent des études. Beaucoup sont des personnes attentionnées qui se sont déjà occupées d'un proche, mais sans formation en santé.",
    startingPoint: "Peuvent lire des consignes courtes et utiliser un téléphone ou un ordinateur pour chercher des informations. La plupart n'ont jamais suivi de cours de santé. Certains se sont occupés d'un proche à la maison.",
    gap: "Les emplois d'aide-soignant demandent une formation agréée par l'État et la réussite à l'examen de l'État. Souvent, les apprenants ne connaissent pas les étapes, ne savent pas à quelle page officielle se fier et ignorent les bases de sécurité et de vie privée attendues à l'examen. Connaître le parcours et ces bases les aide à choisir une vraie formation et à la terminer.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (environ 6e à 7e année aux États-Unis, soit 11 à 13 ans)",
      "Appareils : un téléphone ou un ordinateur de bibliothèque ; le papier convient pour toutes les tâches",
      "Les règles changent selon l'État ; le cours renvoie au registre de l'État au lieu de donner des heures ou des frais",
      "Aucune pratique clinique sur de vraies personnes à la maison ; les gestes pratiques s'apprennent dans une formation encadrée",
      "Dans certains États, une ancienne condamnation peut gêner l'inscription au registre ; chaque apprenant vérifie les règles de son État"
    ],
    prerequisites: "Aucun. « Comprendre sa santé et ses soins » est un bon premier cours."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "À l'aide de la page officielle du registre des aides-soignants ou du département de la santé de votre État", action: "énumérer les étapes pour devenir aide-soignant certifié dans votre État", standard: "en nommant la formation agréée, l'examen de compétence et le registre, avec la page consultée" },
    { id: "O2", condition: "Face à une situation de soins", action: "choisir quand et comment vous laver les mains et utiliser des gants", standard: "avec au moins 4 situations sur 5 correctes" },
    { id: "O3", condition: "À partir d'une courte histoire sur un résident", action: "repérer si les droits ou la vie privée du résident sont protégés et dire quoi faire sinon", standard: "en précisant à qui vous le signaleriez" },
    { id: "O4", condition: "Face à une tâche de soins quotidiens, comme changer de position, aider à marcher ou servir un repas", action: "mettre les étapes de sécurité dans le bon ordre", standard: "sans aucune étape qui mette le résident ou vous-même en danger" },
    { id: "O5", condition: "À partir du dossier d'un résident imaginaire et d'un changement que vous remarquez", action: "écrire une courte note factuelle et la signaler à l'infirmier", standard: "en utilisant ce que vous avez vu ou mesuré, pas des suppositions" },
    { id: "O6", condition: "À l'aide de votre propre calendrier", action: "construire un plan de révision et d'examen avec des dates", standard: "qui couvre toutes les parties de l'examen de votre État" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Le parcours CNA et les bases des soins sûrs",
      lessons: [
        {
          title: "Ce que fait un CNA et comment être certifié",
          objectives: ["O1"],
          minutes: 5,
          goal: "Énumérer les étapes pour devenir CNA dans votre État et trouver la page officielle de votre État.",
          text: [
            "Les aides-soignants donnent des soins de base et aident les personnes dans la vie de tous les jours : se laver, s'habiller, aller aux toilettes, manger, bouger et se retourner. Ils prennent les signes vitaux, surveillent les changements et les signalent à l'infirmier. Ils travaillent sous la direction de l'infirmier.",
            "Dans la plupart des États, le parcours a trois étapes. D'abord, terminer une formation d'aide-soignant agréée par l'État. Elle mélange des cours et de la pratique encadrée. Ensuite, réussir l'examen de compétence de votre État. Enfin, être inscrit au registre des aides-soignants de votre État. Vous devez être au registre pour travailler comme aide-soignant en maison de retraite.",
            "Ce cours vous prépare. Il ne vous donne pas de certificat. Les heures, les frais, la vérification des antécédents et les règles de l'examen changent selon l'État et peuvent évoluer. Consultez la page du registre des aides-soignants ou du département de la santé de votre État, et demandez à chaque formation qui vous intéresse si elle est agréée par l'État.",
            "Certaines formations sont gratuites ou payées par un employeur, par exemple une maison de retraite qui vous embauche pendant votre formation. Un American Job Center (centre public pour l'emploi aux États-Unis) peut aussi aider à payer la formation. Renseignez-vous avant de payer."
          ],
          steps: ["Cherchez sur Internet le nom de votre État suivi de « nurse aide registry » (registre des aides-soignants).", "Ouvrez le résultat qui vient du site du gouvernement de votre État (il se termine souvent par .gov).", "Notez les étapes, l'examen et les règles de vérification des antécédents.", "Notez deux formations agréées par l'État près de chez vous, et vérifiez la propre page de chacune."],
          words: [["CNA", "aide-soignant certifié : un aide-soignant qui a réussi l'examen de l'État et qui est inscrit au registre de l'État."], ["Registre des aides-soignants", "la liste officielle de l'État des aides-soignants autorisés à travailler en maison de retraite."], ["Formation agréée par l'État", "une formation que l'État a vérifiée et autorisée à former des aides-soignants."], ["Examen de compétence", "l'examen de l'État qui vérifie ce que vous savez et ce que vous savez faire."]],
          slides: [
            { title: "Ce que fait un CNA", bullets: ["Aide à se laver, s'habiller, manger et bouger", "Prend les signes vitaux et surveille les changements", "Rend compte à l'infirmier"] },
            { title: "Trois étapes dans la plupart des États", bullets: ["1. Terminer une formation agréée par l'État", "2. Réussir l'examen de compétence de l'État", "3. Être inscrit au registre des aides-soignants"] },
            { title: "Ce cours vous prépare", bullets: ["Il ne donne pas de certificat", "Règles, heures et frais changent selon l'État", "Consultez la page du registre de votre État"] },
            { title: "Payer la formation", bullets: ["Certains employeurs paient pendant la formation", "Un American Job Center peut aider", "Renseignez-vous avant de payer"] }
          ],
          sources: [
            { name: "Bureau des statistiques du travail des États-Unis (BLS) : aides-soignants et agents de service hospitalier", url: "https://www.bls.gov/ooh/healthcare/nursing-assistants.htm" },
            { name: "CareerOneStop : trouver un American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }
          ],
          tryIt: "Trouvez la page du registre des aides-soignants ou du département de la santé de votre État. Sur papier, écrivez les trois étapes pour votre État, l'adresse de la page et une règle que vous ne connaissiez pas (par exemple sur la vérification des antécédents).",
          youCanNow: "énumérer les étapes pour devenir CNA dans votre État et trouver la page officielle qui fixe les règles.",
          quickCheck: [
            { objective: "O1", q: "Quelle étape vient après la fin d'une formation agréée par l'État ?", options: ["Commencer à donner des médicaments", "Réussir l'examen de compétence de l'État", "Ouvrir votre propre clinique", "Acheter un certificat en ligne"], answer: 1, why: "Après la formation, vous réussissez l'examen de l'État, puis vous êtes inscrit au registre." },
            { objective: "O1", q: "Où vérifiez-vous les règles CNA de votre État ?", options: ["Dans une publication sur les réseaux sociaux", "Auprès d'un ami qui l'a fait il y a des années", "Sur la page du registre des aides-soignants ou du département de la santé de votre État", "Dans n'importe quelle publicité qui dit « certifié en un rien de temps »"], answer: 2, why: "C'est l'État qui fixe les règles, donc c'est sa page officielle qu'il faut croire." }
          ]
        },
        {
          title: "Mains propres et gants : arrêter la propagation des microbes",
          objectives: ["O2"],
          minutes: 5,
          goal: "Choisir quand vous laver les mains et de quelle façon.",
          text: [
            "Avoir les mains propres est le moyen le plus important d'empêcher les microbes de se propager dans un lieu de soins. Les personnes dont vous vous occupez sont souvent âgées ou malades, donc les microbes peuvent leur faire plus de mal.",
            "Les CDC (Centres de contrôle et de prévention des maladies des États-Unis) disent que le personnel de santé doit se laver les mains juste avant de toucher un patient, après avoir touché un patient ou ses affaires, après un contact avec du sang ou des liquides du corps, et juste après avoir retiré ses gants.",
            "La solution hydroalcoolique est le choix habituel quand vos mains n'ont pas l'air sales. Frottez-la sur toutes les surfaces jusqu'à ce que vos mains soient sèches, ce qui prend environ 20 secondes. Utilisez de l'eau et du savon quand vos mains ont l'air sales, avant de manger et après être allé aux toilettes. Frottez chaque partie des mains et des doigts.",
            "Les gants aident, mais ils ne remplacent pas des mains propres. Utilisez une nouvelle paire pour chaque résident, ne les lavez jamais pour les réutiliser, et lavez-vous les mains dès que vous les retirez. Votre formation vous apprendra à mettre et à retirer les gants, les blouses et les masques dans le bon ordre."
          ],
          steps: ["Lavez-vous les mains juste avant de toucher un résident.", "Mettez des gants si vous risquez de toucher du sang, des liquides du corps ou une peau abîmée.", "Retirez les gants sans toucher l'extérieur avec la peau nue.", "Lavez-vous les mains juste après avoir retiré les gants et avant de quitter la chambre."],
          words: [["Hygiène des mains", "se laver les mains avec une solution hydroalcoolique ou avec de l'eau et du savon."], ["Prévention des infections", "les mesures que prend le personnel de santé pour empêcher les microbes de se propager."], ["EPI", "équipement de protection individuelle : gants, blouses, masques et protection des yeux."]],
          slides: [
            { title: "Quand se laver les mains", bullets: ["Juste avant de toucher un résident", "Après avoir touché un résident ou ses affaires", "Après du sang ou des liquides du corps", "Juste après avoir retiré les gants"] },
            { title: "De quelle façon", bullets: ["Mains pas sales : solution hydroalcoolique, frottez jusqu'à ce qu'elles sèchent", "Mains qui ont l'air sales : eau et savon", "Eau et savon avant de manger et après les toilettes"] },
            { title: "Les gants", bullets: ["Ils ne remplacent pas des mains propres", "Une nouvelle paire pour chaque résident", "Mains lavées dès qu'on les retire"] }
          ],
          sources: [{ name: "CDC : sécurité clinique, hygiène des mains pour le personnel de santé", url: "https://www.cdc.gov/clean-hands/hcp/clinical-safety/index.html" }],
          tryIt: "Entraînez-vous à votre lavabo. Lavez-vous avec de l'eau et du savon en frottant les paumes, le dos des mains, entre les doigts, les pouces, le bout des doigts et les poignets. Puis écrivez sur une fiche les quatre moments où un CNA doit se laver les mains, et gardez-la pour réviser.",
          youCanNow: "dire quand un CNA se lave les mains, choisir entre solution hydroalcoolique et eau et savon, et utiliser des gants sans oublier de se laver les mains.",
          quickCheck: [
            { objective: "O2", q: "Vos mains ont l'air sales après avoir aidé un résident. Qu'utilisez-vous ?", options: ["Seulement de la solution hydroalcoolique", "Un essuie-tout sec", "Rien jusqu'à votre pause", "De l'eau et du savon"], answer: 3, why: "L'eau et le savon sont le bon choix quand les mains ont l'air sales." },
            { objective: "O2", q: "Vous venez de retirer vos gants. Que faites-vous ensuite ?", options: ["Vous lavez les mains", "Vous mettez les gants dans votre poche pour les réutiliser", "Vous touchez le résident suivant", "Rien, puisque vous portiez des gants"], answer: 0, why: "Les gants ne remplacent pas des mains propres ; lavez-les juste après avoir retiré les gants." }
          ]
        },
        {
          title: "Droits des résidents, vie privée et signalement des maltraitances",
          objectives: ["O3"],
          minutes: 5,
          goal: "Repérer quand les droits ou la vie privée d'un résident ne sont pas respectés et dire à qui vous le signalez.",
          text: [
            "Les personnes dont vous vous occupez ont des droits. Elles choisissent quoi porter et quand se reposer quand elles le peuvent. Elles ont droit à l'intimité quand elles se lavent ou vont aux toilettes. On leur parle avec respect et on les appelle par le nom qu'elles préfèrent. Frappez, dites qui vous êtes et expliquez ce que vous allez faire.",
            "Les informations de santé sont privées. Une loi fédérale appelée HIPAA les protège. Ne partagez les informations d'un résident qu'avec l'équipe de soins qui en a besoin pour son travail. Ne parlez pas des résidents dans le couloir, à la maison ou sur les réseaux sociaux, et ne publiez jamais de photos d'eux.",
            "La maltraitance et la négligence peuvent être physiques, psychologiques, sexuelles ou financières, comme prendre de l'argent. Les signes d'alerte sont, par exemple, des bleus que personne ne peut expliquer, des escarres, une mauvaise hygiène, une personne qui semble avoir peur ou se renfermer, ou un changement soudain avec son argent.",
            "Si vous voyez ou soupçonnez une maltraitance, dites-le tout de suite à votre infirmier ou à votre responsable. Dans beaucoup d'États, les aides-soignants doivent signaler les maltraitances qu'ils soupçonnent. Si quelqu'un est en danger en ce moment, appelez le 911 (numéro d'urgence aux États-Unis). Le Long-Term Care Ombudsman (médiateur pour les résidents des soins de longue durée) de votre État aide aussi les résidents des maisons de retraite."
          ],
          steps: ["Frappez, dites votre nom et expliquez ce que vous allez faire.", "Fermez le rideau ou la porte pour les soins intimes.", "Ne partagez les informations qu'avec l'équipe de soins.", "Signalez tout de suite à l'infirmier les signes de maltraitance ou de négligence."],
          words: [["HIPAA", "une loi fédérale qui protège la confidentialité des informations de santé des personnes."], ["Négligence", "ne pas donner à une personne les soins dont elle a besoin, comme la nourriture, la toilette ou les changements de position."], ["Ombudsman (médiateur)", "une personne qui défend les résidents des maisons de retraite et aide à régler les problèmes."], ["Signalement obligatoire", "l'obligation, pour certains travailleurs, de signaler une maltraitance soupçonnée."]],
          slides: [
            { title: "Le respect, à chaque fois", bullets: ["Frappez et dites qui vous êtes", "Expliquez avant de commencer", "Proposez des choix quand c'est possible", "Fermez le rideau pour les soins intimes"] },
            { title: "Vie privée (HIPAA)", bullets: ["Partagez seulement avec l'équipe de soins", "Pas de discussions dans les couloirs ni à la maison", "Pas de photos ni de publications sur les réseaux sociaux"] },
            { title: "Signes de maltraitance ou de négligence", bullets: ["Des bleus que personne ne peut expliquer", "Escarres ou mauvaise hygiène", "Peur, repli sur soi ou changements soudains avec l'argent"] },
            { title: "Ce que vous faites", bullets: ["Prévenez tout de suite l'infirmier ou le responsable", "Danger immédiat : appelez le 911", "Le médiateur (ombudsman) aide aussi les résidents"] }
          ],
          sources: [
            { name: "MedlinePlus : maltraitance des personnes âgées", url: "https://medlineplus.gov/elderabuse.html" },
            { name: "MedlinePlus : droits des patients", url: "https://medlineplus.gov/patientrights.html" }
          ],
          tryIt: "Lisez cette histoire inventée : « Un collègue publie sur les réseaux sociaux une photo drôle de M. Lee, un résident, et vous dit que la famille de M. Lee ne vient jamais le voir. » Écrivez deux problèmes que vous voyez, et ce que vous feriez pour chacun.",
          youCanNow: "repérer quand les droits ou la vie privée d'un résident ne sont pas respectés et le signaler à la bonne personne.",
          quickCheck: [
            { objective: "O3", q: "Un ami vous demande comment va un résident qu'il connaît. Que répondez-vous ?", options: ["Vous donnez les détails de santé du résident", "Vous lui montrez le dossier", "Vous dites que vous ne pouvez pas partager d'informations sur les résidents", "Vous lui envoyez une photo"], answer: 2, why: "Les informations de santé sont privées et vont seulement à l'équipe de soins." },
            { objective: "O3", q: "Vous voyez sur un résident des bleus que personne ne peut expliquer. Que faites-vous ?", options: ["Vous attendez une semaine pour voir s'ils disparaissent", "Vous prévenez tout de suite votre infirmier ou votre responsable", "Vous demandez au résident de garder le secret", "Vous en parlez sur Internet"], answer: 1, why: "Une possible maltraitance se signale tout de suite à l'infirmier ou au responsable." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Le parcours CNA et les bases des soins sûrs",
        questions: [
          { objective: "O1", q: "Sur quoi un aide-soignant doit-il être inscrit pour travailler en maison de retraite ?", options: ["Un groupe sur les réseaux sociaux", "Le registre des aides-soignants de l'État", "La liste des membres d'une salle de sport", "Un site d'offres d'emploi privé"], answer: 1, why: "Les aides-soignants doivent être inscrits au registre de l'État pour travailler en maison de retraite." },
          { objective: "O1", q: "Un site Internet dit : « Obtenez votre certificat CNA en ligne en un jour. » Qu'est-ce qui est vrai ?", options: ["C'est le vrai chemin le plus rapide", "Il remplace l'examen de l'État", "Vérifiez d'abord la liste des formations agréées de l'État", "Tous les États l'acceptent"], answer: 2, why: "Seuls une formation agréée par l'État et l'examen de l'État mènent au registre ; consultez la page de l'État." },
          { objective: "O2", q: "Quand un CNA doit-il se laver les mains ?", options: ["Juste avant de toucher un résident", "Seulement au début de son service", "Seulement quand les mains ont l'air sales", "Seulement quand les gants sont déchirés"], answer: 0, why: "Les CDC disent de se laver les mains juste avant de toucher un patient, entre autres moments." },
          { objective: "O2", q: "Pourquoi vous lavez-vous les mains même après avoir porté des gants ?", options: ["Les gants rendent les mains plus propres", "C'est seulement pour la forme", "Les gants sont réutilisés, donc ça ne compte pas", "Les gants peuvent avoir de tout petits trous, et les microbes passent sur les mains quand on les retire"], answer: 3, why: "Les gants ne remplacent pas des mains propres ; les microbes peuvent atteindre vos mains." },
          { objective: "O3", q: "Avant d'aider un résident à se laver, que faites-vous ?", options: ["Vous commencez vite sans parler", "Vous frappez, dites qui vous êtes, expliquez et fermez le rideau", "Vous laissez la porte ouverte pour que d'autres aident", "Vous demandez au voisin de chambre du résident de regarder"], answer: 1, why: "Frapper, expliquer et fermer le rideau protègent la dignité et l'intimité." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Soins quotidiens, signalement et votre plan d'examen",
      lessons: [
        {
          title: "Des soins quotidiens sûrs : déplacements, marche et repas",
          objectives: ["O4"],
          minutes: 6,
          goal: "Mettre dans le bon ordre les étapes de sécurité des soins quotidiens.",
          text: [
            "Chaque soin commence de la même façon : lavez-vous les mains, dites qui vous êtes, expliquez ce que vous allez faire, préservez l'intimité et vérifiez le plan de soins. Chaque soin se termine aussi de la même façon : laissez la sonnette d'appel à portée de main, le lit en position basse et freiné, et lavez-vous les mains.",
            "Les personnes qui restent trop longtemps dans la même position peuvent avoir des escarres, aussi appelées plaies de pression, sur les endroits où l'os est proche de la peau, comme les hanches, les talons et le dos. MedlinePlus conseille de changer de position environ toutes les deux heures et de garder la peau propre et sèche. Suivez le planning de changements de position du plan de soins.",
            "Les chutes sont un grand risque. Gardez le sol dégagé, la sonnette d'appel proche et le lit en position basse. Vérifiez que le résident porte des chaussures antidérapantes. Bloquez les roues du fauteuil roulant et du lit avant un transfert. Utilisez la ceinture de marche et le nombre d'aidants indiqués dans le plan de soins.",
            "Protégez votre dos. Pliez les genoux, gardez la personne ou l'objet près de vous, et tournez avec les pieds au lieu de vous tordre. Ne soulevez jamais une personne seul si le plan indique deux personnes ou un lève-personne. Vous pratiquerez les transferts seulement dans votre formation encadrée."
          ],
          steps: ["Lavez-vous les mains, dites qui vous êtes et expliquez le soin.", "Vérifiez le plan de soins et préservez l'intimité.", "Bloquez les roues et baissez ou montez le lit à une hauteur sûre.", "Faites le soin comme l'indique le plan de soins, avec de l'aide si besoin.", "Laissez le lit en position basse, la sonnette à portée de main et lavez-vous les mains."],
          words: [["Activités de la vie quotidienne (AVQ)", "les soins de soi de tous les jours : se laver, s'habiller, manger, aller aux toilettes et bouger."], ["Plan de soins", "le plan écrit par l'infirmier qui indique les soins que reçoit chaque résident."], ["Escarre", "une plaie de la peau causée par une position gardée trop longtemps, aussi appelée plaie de pression."], ["Ceinture de marche", "une ceinture solide placée autour de la taille d'une personne pour qu'un aidant puisse la tenir pendant qu'elle marche ou bouge."], ["Gestes et postures", "utiliser son corps de façon sûre pour ne pas se blesser le dos."]],
          slides: [
            { title: "Au début de chaque soin", bullets: ["Lavez-vous les mains et dites qui vous êtes", "Expliquez ce que vous allez faire", "Préservez l'intimité et vérifiez le plan de soins"] },
            { title: "Prévenir les escarres", bullets: ["Changer de position environ toutes les 2 heures", "Garder la peau propre et sèche", "Suivre le planning de changements de position"] },
            { title: "Prévenir les chutes", bullets: ["Sol dégagé, lit bas, sonnette proche", "Chaussures antidérapantes", "Bloquer les roues avant un transfert"] },
            { title: "Protéger votre dos", bullets: ["Pliez les genoux, gardez la charge près de vous", "Tournez avec les pieds, sans vous tordre", "Demandez de l'aide quand le plan indique deux personnes"] },
            { title: "À la fin de chaque soin", bullets: ["Lit en position basse et freiné", "Sonnette à portée de main", "Lavez-vous les mains"] }
          ],
          sources: [
            { name: "MedlinePlus : escarres", url: "https://medlineplus.gov/pressuresores.html" },
            { name: "MedlinePlus : chutes", url: "https://medlineplus.gov/falls.html" }
          ],
          tryIt: "Écrivez ces étapes sur des fiches, mélangez-les, puis remettez-les dans l'ordre : « Bloquer les roues du fauteuil roulant », « Se laver les mains », « Expliquer ce que vous allez faire », « Laisser la sonnette à portée de main », « Vérifier le plan de soins ». Ensuite, comparez votre ordre avec la leçon.",
          youCanNow: "mettre dans le bon ordre les étapes de sécurité des soins quotidiens et expliquer comment elles évitent les chutes, les escarres et les blessures au dos.",
          quickCheck: [
            { objective: "O4", q: "Que faites-vous avant d'aider un résident à passer du lit au fauteuil roulant ?", options: ["Retirer les chaussures du résident", "Monter le lit le plus haut possible", "Bloquer les roues du fauteuil et du lit", "Éteindre la lumière"], answer: 2, why: "Des roues bloquées empêchent le fauteuil ou le lit de rouler pendant un transfert." },
            { objective: "O4", q: "Le plan de soins indique deux personnes pour un transfert, mais vous êtes seul. Que faites-vous ?", options: ["Le faire seul pour gagner du temps", "Attendre de l'aide ou demander à l'infirmier", "Demander au résident d'essayer seul", "Sauter le transfert pour la journée sans prévenir personne"], answer: 1, why: "Suivre le plan protège le résident et vous-même ; trouvez de l'aide ou demandez à l'infirmier." }
          ]
        },
        {
          title: "Observer, mesurer et signaler",
          objectives: ["O5"],
          minutes: 5,
          goal: "Écrire une courte note factuelle sur un changement et la signaler à l'infirmier.",
          text: [
            "Vous voyez les résidents plus que n'importe qui, donc vous êtes souvent le premier à remarquer un changement. Votre travail est d'observer, de noter et de signaler. C'est l'infirmier qui décide ce que cela veut dire.",
            "Les quatre principaux signes vitaux sont la tension artérielle, le pouls (rythme du cœur), la fréquence respiratoire et la température. Vous apprendrez à les mesurer dans votre formation et vous vous entraînerez sur d'autres élèves, sous surveillance.",
            "Écrivez ce que vous avez vu, entendu ou mesuré, pas ce que vous pensez que cela veut dire. « A mangé la moitié du déjeuner. A dit : \"J'ai mal au ventre.\" Se tient le ventre. » vaut mieux que « Elle a l'air malade. » Écrivez l'heure et signez de votre nom.",
            "Certains changements doivent être signalés tout de suite : une nouvelle douleur, une difficulté à respirer, une chute, un changement dans l'éveil ou la confusion de la personne, ou un grand changement d'un signe vital. En cas de doute, prévenez l'infirmier."
          ],
          steps: ["Remarquez le changement : ce que vous voyez, entendez ou mesurez.", "Écrivez les faits, l'heure et votre nom.", "Signalez-le tout de suite à l'infirmier si c'est nouveau ou grave.", "Notez que vous l'avez signalé, et à qui."],
          words: [["Signes vitaux", "des mesures des fonctions de base du corps : tension artérielle, pouls, fréquence respiratoire et température."], ["Objectif", "des faits que vous pouvez voir, entendre, mesurer ou compter."], ["Subjectif", "ce que le résident vous dit ressentir, écrit avec ses propres mots."], ["Dossier", "le dossier de soins du résident."]],
          slides: [
            { title: "Observer, noter, signaler", bullets: ["Vous remarquez les changements en premier", "Vous notez les faits", "L'infirmier décide ce qu'ils veulent dire"] },
            { title: "Quatre signes vitaux", bullets: ["Tension artérielle", "Pouls (rythme du cœur)", "Fréquence respiratoire", "Température"] },
            { title: "Des faits, pas des suppositions", bullets: ["Bien : « A mangé la moitié du déjeuner. A dit : \"J'ai mal au ventre.\" »", "Pas : « Elle a l'air malade. »", "Ajoutez l'heure et votre nom"] },
            { title: "Signalez tout de suite", bullets: ["Nouvelle douleur ou difficulté à respirer", "Une chute", "Plus confus ou plus endormi que d'habitude"] }
          ],
          sources: [{ name: "MedlinePlus : signes vitaux", url: "https://medlineplus.gov/vitalsigns.html" }],
          tryIt: "Pour vous entraîner seulement, avec une résidente imaginaire : « D'habitude, Mme Rivera va à pied au petit-déjeuner. Aujourd'hui à 8 h 15, elle est restée au lit, a dit \"J'ai la tête qui tourne\" et n'a pas mangé. » Écrivez une note factuelle de trois lignes et une phrase que vous diriez à l'infirmier.",
          youCanNow: "écrire une courte note factuelle sur un changement que vous remarquez et la signaler à l'infirmier.",
          quickCheck: [
            { objective: "O5", q: "Quelle note est écrite de la bonne façon ?", options: ["« Il fait des difficultés. »", "« Il est sûrement en train de tomber malade. »", "« Il a l'air bien, je crois. »", "« 10 h 30. A refusé le déjeuner. A dit : \"J'ai la poitrine serrée.\" »"], answer: 3, why: "Elle donne l'heure, ce qui s'est passé et les propres mots du résident." },
            { objective: "O5", q: "Un résident est soudain beaucoup plus confus que d'habitude. Que faites-vous ?", options: ["Vous prévenez tout de suite l'infirmier", "Vous attendez la fin de votre service", "Vous lui donnez un médicament du chariot", "Vous le dites seulement à son voisin de chambre"], answer: 0, why: "Un changement soudain de l'éveil ou de la confusion se signale tout de suite à l'infirmier." }
          ]
        },
        {
          title: "Se préparer à l'examen de l'État : votre plan de révision",
          objectives: ["O6", "O1"],
          minutes: 5,
          goal: "Construire un plan de révision et d'examen avec de vraies dates pour l'examen CNA de votre État.",
          text: [
            "Dans la plupart des États, l'examen CNA a deux parties : une épreuve écrite (certains États la proposent lue à voix haute) et une épreuve pratique où vous montrez quelques gestes de soins devant un évaluateur. La page du registre de votre État ou celle de l'organisme d'examen indique les parties exactes, la liste des gestes et comment s'inscrire.",
            "Utilisez le guide officiel du candidat si votre État en a un. Il liste les gestes, les étapes que l'évaluateur surveille et ce qu'il faut apporter le jour de l'examen. Les questions d'entraînement gratuites de votre formation aident aussi.",
            "Révisez un peu chaque jour. Pratiquez les gestes en cours ou en salle de pratique libre, là où un formateur peut vous observer. Dites chaque étape à voix haute, y compris celles que les gens oublient : se laver les mains, préserver l'intimité et laisser la sonnette à portée de main.",
            "Préparez le côté pratique : votre pièce d'identité, comment vous irez sur le lieu de l'examen, la garde des enfants et le congé au travail. Écrivez les dates sur un calendrier."
          ],
          steps: ["Trouvez sur la page officielle les parties de l'examen de votre État et le guide du candidat.", "Faites la liste des gestes que vous devez le plus pratiquer.", "Fixez une heure de révision par jour et deux dates d'examen blanc.", "Écrivez la date de l'examen, ce qu'il faut apporter et comment vous irez."],
          words: [["Guide du candidat", "le guide officiel de l'État ou de l'organisme d'examen qui explique l'examen."], ["Évaluateur", "la personne qui observe et note votre épreuve pratique."], ["Épreuve pratique", "la partie de l'examen où vous montrez des gestes de soins étape par étape."]],
          slides: [
            { title: "Deux parties dans la plupart des États", bullets: ["Une épreuve écrite (certains États la proposent lue à voix haute)", "Une épreuve pratique observée par un évaluateur", "La page de votre État donne les détails"] },
            { title: "Utilisez les documents officiels", bullets: ["Le guide du candidat et la liste des gestes", "Des questions d'entraînement de votre formation", "Pratiquez là où un formateur peut vous observer"] },
            { title: "Les étapes souvent oubliées", bullets: ["Se laver les mains", "Préserver l'intimité", "Sonnette à portée de main, lit bas"] },
            { title: "Préparer le jour de l'examen", bullets: ["Pièce d'identité et choses à apporter", "Transport et garde des enfants", "Congé au travail"] }
          ],
          sources: [
            { name: "Bureau des statistiques du travail des États-Unis (BLS) : aides-soignants et agents de service hospitalier (comment le devenir)", url: "https://www.bls.gov/ooh/healthcare/nursing-assistants.htm#tab-4" }
          ],
          tryIt: "Tâche finale : faites votre plan de révision et d'examen CNA d'une page. Mettez-y la page officielle de votre État, deux formations agréées avec leur coût et leur date de début prises sur leurs propres pages, les parties de l'examen, un emploi du temps de révision par semaine avec des dates, les cinq gestes que vous pratiquerez le plus, et une personne à qui vous poserez vos questions.",
          youCanNow: "construire un plan de révision et d'examen avec des dates qui couvre toutes les parties de l'examen CNA de votre État.",
          quickCheck: [
            { objective: "O6", q: "Où trouvez-vous les gestes exacts de l'examen de votre État ?", options: ["Dans un commentaire au hasard sous une vidéo", "Dans le guide officiel du candidat ou sur la page du registre", "Dans ce que devine un ami", "L'examen ne le dit pas"], answer: 1, why: "Le guide officiel ou la page du registre liste les gestes et ce que vérifie l'évaluateur." },
            { objective: "O6", q: "Quel plan de révision est le plus solide ?", options: ["Réviser la veille de l'examen", "Réviser seulement l'épreuve écrite", "Révision chaque jour, gestes pratiqués en cours, examens blancs avec des dates", "Ne pas s'entraîner et espérer"], answer: 2, why: "Une révision régulière, des gestes pratiqués sous surveillance et des examens blancs datés couvrent toutes les parties." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Soins quotidiens, signalement et votre plan d'examen",
        questions: [
          { objective: "O4", q: "Environ tous les combien faut-il changer de position une personne qui ne peut pas bouger, sauf si le plan de soins dit autre chose ?", options: ["Une fois par jour", "Une fois par semaine", "Seulement quand elle le demande", "Environ toutes les deux heures"], answer: 3, why: "MedlinePlus conseille de changer de position environ toutes les deux heures pour aider à prévenir les escarres." },
          { objective: "O4", q: "Quelle posture est sûre ?", options: ["Se pencher à la taille et se tordre", "Plier les genoux et garder la charge près de soi", "Soulever avec les bras tendus devant soi", "Soulever vite et seul une personne lourde"], answer: 1, why: "Plier les genoux et garder la charge près de soi protège le dos." },
          { objective: "O5", q: "Lequel de ces éléments est un signe vital ?", options: ["Le pouls", "Le plat préféré", "La pointure", "Le numéro de chambre"], answer: 0, why: "Le pouls, la tension artérielle, la fréquence respiratoire et la température sont les principaux signes vitaux." },
          { objective: "O5", q: "Qui décide ce que veut dire un changement chez un résident ?", options: ["Le CNA seul", "Le voisin de chambre du résident", "L'infirmier, après le signalement du CNA", "Personne"], answer: 2, why: "Le CNA observe et signale ; l'infirmier décide ce que cela veut dire." },
          { objective: "O6", q: "Que doit contenir un plan pour l'examen CNA ?", options: ["Seulement la date de l'examen", "Des heures de révision, des examens blancs, la date de l'examen et ce qu'il faut apporter", "Seulement l'adresse de la formation", "Une liste d'émissions de télévision"], answer: 1, why: "Un plan complet couvre la révision, l'entraînement et les détails du jour de l'examen." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Préparation au métier d'aide-soignant certifié (CNA)",
    questions: [
      { objective: "O1", q: "Quel est un travail principal d'un aide-soignant ?", options: ["Aider les personnes à se laver, s'habiller, manger et bouger", "Rédiger des ordonnances", "Faire des opérations chirurgicales", "Poser un diagnostic"], answer: 0, why: "Les CNA aident dans la vie quotidienne et rendent compte à l'infirmier." },
      { objective: "O1", q: "Que fait ce cours ?", options: ["Il vous donne un certificat CNA", "Il vous inscrit au registre", "Il vous prépare à une formation agréée par l'État et à l'examen de l'État", "Il remplace l'épreuve pratique"], answer: 2, why: "Le cours vous prépare ; la formation de l'État, l'examen et le registre font de vous un CNA." },
      { objective: "O1", q: "Quelles sont les trois étapes dans la plupart des États ?", options: ["Acheter une tenue, postuler, commencer le travail", "Formation agréée, examen de l'État, inscription au registre", "Quiz en ligne, entretien, badge", "Regarder des vidéos, signer un formulaire, travailler"], answer: 1, why: "La plupart des États exigent une formation agréée, l'examen de compétence et le registre." },
      { objective: "O1", q: "Les règles sur la vérification des antécédents des aides-soignants :", options: ["Sont les mêmes partout", "N'existent pas", "Concernent seulement les infirmiers", "Changent selon l'État, donc consultez la page de votre État"], answer: 3, why: "Chaque État fixe ses propres règles, donc consultez la page officielle." },
      { objective: "O2", q: "Vos mains n'ont pas l'air sales et vous allez toucher un résident. Qu'utilisez-vous ?", options: ["Rien", "Une solution hydroalcoolique, frottée jusqu'à ce que les mains soient sèches", "De la crème", "Une lingette humide de votre sac"], answer: 1, why: "La solution hydroalcoolique est le choix habituel quand les mains n'ont pas l'air sales." },
      { objective: "O2", q: "Comment utiliser les gants correctement ?", options: ["Une nouvelle paire pour chaque résident, puis se laver les mains", "Une seule paire pour tout le service", "Les laver et les réutiliser", "Les porter à la place du lavage des mains"], answer: 0, why: "De nouveaux gants pour chaque résident, et des mains lavées après les avoir retirés." },
      { objective: "O2", q: "Quand devez-vous utiliser de l'eau et du savon au lieu de la solution hydroalcoolique ?", options: ["Jamais", "Seulement le week-end", "Quand les mains ont l'air sales et après être allé aux toilettes", "Seulement avant de quitter le travail"], answer: 2, why: "Les CDC disent eau et savon quand les mains ont l'air sales, avant de manger et après les toilettes." },
      { objective: "O3", q: "Quelle loi protège la confidentialité des informations de santé ?", options: ["OSHA", "HIPAA", "FMLA", "ADA"], answer: 1, why: "La loi HIPAA protège la confidentialité des informations de santé." },
      { objective: "O3", q: "Un collègue publie en ligne la photo d'un résident. C'est :", options: ["Acceptable si elle est drôle", "Acceptable si le visage est flou", "Bon pour l'établissement", "Un problème de vie privée à signaler"], answer: 3, why: "Des photos de résidents sur les réseaux sociaux violent leur vie privée ; signalez-le." },
      { objective: "O3", q: "Lequel peut être un signe de négligence ?", options: ["Des vêtements propres", "Un résident qui sourit", "Des escarres et une mauvaise hygiène", "Une visite de la famille"], answer: 2, why: "Des escarres et une mauvaise hygiène peuvent montrer que les soins ne sont pas donnés." },
      { objective: "O3", q: "Un résident veut porter une chemise rouge aujourd'hui, pas la bleue que vous avez choisie. Que faites-vous ?", options: ["Vous l'aidez à mettre la chemise rouge", "Vous insistez pour la bleue", "Vous lui dites qu'il ne peut pas choisir", "Vous ne l'habillez pas"], answer: 0, why: "Les résidents ont le droit de faire des choix sur leurs propres soins quand ils le peuvent." },
      { objective: "O4", q: "Que faites-vous à la fin de chaque soin ?", options: ["Laisser le lit en position haute", "Retirer la sonnette d'appel", "Laisser le lit bas, la sonnette à portée de main, et se laver les mains", "Laisser la porte ouverte pour les contrôles"], answer: 2, why: "Un lit bas, une sonnette à portée de main et des mains propres gardent le résident en sécurité." },
      { objective: "O4", q: "Les escarres se forment souvent sur :", options: ["Les endroits osseux comme les hanches et les talons", "Les cheveux", "Les ongles", "Les paupières"], answer: 0, why: "Elles se forment là où l'os est proche de la peau et où la pression dure trop longtemps." },
      { objective: "O4", q: "Pour prévenir les chutes, un résident doit porter :", options: ["Seulement des chaussettes", "Rien aux pieds", "Des talons hauts", "Des chaussures antidérapantes"], answer: 3, why: "Les chaussures antidérapantes aident à prévenir les chutes." },
      { objective: "O4", q: "Où pratique-t-on les transferts à la main ?", options: ["À la maison sur un proche, seul", "Dans une formation encadrée et agréée par l'État", "Seulement le jour de l'examen", "Seulement avec une vidéo"], answer: 1, why: "Les gestes pratiques s'apprennent dans une formation encadrée, où un formateur peut vous corriger." },
      { objective: "O5", q: "Quelle note est factuelle ?", options: ["« Elle est paresseuse aujourd'hui. »", "« Sûrement la grippe. »", "« 14 h. A bu un verre d'eau. A dit : \"J'ai froid.\" »", "« Pas comme d'habitude. »"], answer: 2, why: "Elle note l'heure, une quantité mesurée et les propres mots de la résidente." },
      { objective: "O5", q: "Un résident tombe mais dit qu'il se sent bien. Que faites-vous ?", options: ["Signaler la chute à l'infirmier tout de suite", "L'aider à se relever et ne rien dire", "L'écrire la semaine prochaine", "Lui demander de n'en parler à personne"], answer: 0, why: "Toute chute se signale tout de suite pour que l'infirmier puisse examiner le résident." },
      { objective: "O5", q: "Lequel n'est PAS l'un des quatre principaux signes vitaux ?", options: ["La température", "La fréquence respiratoire", "La tension artérielle", "Le poids de ses chaussures"], answer: 3, why: "Les quatre principaux signes vitaux sont la tension artérielle, le pouls, la fréquence respiratoire et la température." },
      { objective: "O6", q: "Dans la plupart des États, l'examen CNA comprend :", options: ["Seulement une rédaction", "Une partie écrite et une partie pratique", "Seulement un entretien", "Aucun examen"], answer: 1, why: "La plupart des États utilisent une épreuve écrite (ou lue à voix haute) et une épreuve pratique ; consultez la page de votre État." },
      { objective: "O6", q: "À l'épreuve pratique, quelle étape les gens oublient-ils souvent ?", options: ["Saluer la famille de l'évaluateur", "Apporter un goûter", "Se laver les mains et laisser la sonnette à portée de main", "Porter des bijoux"], answer: 2, why: "Se laver les mains, préserver l'intimité et la sonnette sont des étapes faciles à oublier." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [2, 4, 7, 9, 11, 13, 15, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et vérifiez-la de nouveau.",
    criteria: [
      { name: "Parcours officiel de l'État", objective: "O1", notYet: "Pas de page officielle, ou les étapes viennent d'une publicité ou d'un ami.", meets: "Liste les étapes formation, examen et registre prises sur la page officielle de l'État, avec son adresse.", exceeds: "Note aussi les règles de l'État sur la vérification des antécédents et qui appeler en cas de question." },
      { name: "Formations agréées", objective: "O1", notYet: "Les formations manquent, ou on ne sait pas si elles sont agréées par l'État.", meets: "Deux formations avec leur coût et leur date de début prises sur leurs propres pages, et l'agrément vérifié.", exceeds: "Ajoute aussi une option gratuite ou payée par un employeur, ou l'aide d'un American Job Center." },
      { name: "Parties de l'examen couvertes", objective: "O6", notYet: "Seulement l'épreuve écrite, ou aucune partie de l'examen.", meets: "Liste toutes les parties de l'examen de l'État et les cinq gestes à pratiquer le plus.", exceeds: "Relie chaque geste aux étapes souvent oubliées, comme les mains propres et l'intimité." },
      { name: "Calendrier daté", objective: "O6", notYet: "Pas de dates, ou une seule révision de dernière minute.", meets: "Heures de révision par semaine, deux dates d'examen blanc et la date de l'examen sur un calendrier.", exceeds: "Prévoit aussi le jour de l'examen : pièce d'identité, transport, garde des enfants et congé." },
      { name: "Sécurité et signalement", objective: "O5", notYet: "Aucune personne nommée à qui signaler ou poser des questions.", meets: "Nomme la personne à qui poser des questions ou signaler, comme le formateur ou l'infirmier.", exceeds: "Ajoute une courte note d'entraînement écrite avec des faits, pas des suppositions." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui s'inscrivent dans une formation d'aide-soignant agréée par l'État dans les 60 jours",
      "Apprenants qui réussissent l'examen de compétence CNA de leur État et sont inscrits au registre",
      "Apprenants embauchés comme aides-soignants dans les 6 mois (enquête de suivi)",
      "Les formations partenaires constatent moins d'abandons dans les premières semaines"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Internet pour trouver la page du registre de l'État",
      "Du papier, un stylo et des fiches pour les tâches « Essayez maintenant »",
      "Un lavabo avec du savon pour s'entraîner au lavage des mains",
      "Un calendrier (papier ou téléphone) pour le plan de révision",
      "Environ 60 minutes au total, en séances courtes"
    ],
    facilitatorNotes: [
      "Avant le cours, trouvez la page du registre des aides-soignants de votre État et une liste de formations agréées de la région, et partagez les liens.",
      "Ne laissez jamais les apprenants s'entraîner aux transferts ou au soulèvement les uns sur les autres sans un formateur qualifié et le bon matériel.",
      "Dites clairement que ce cours ne certifie personne, et que les règles, les heures et les frais sont fixés par l'État.",
      "Si un apprenant s'inquiète d'une ancienne condamnation, orientez-le vers les règles de son État et vers un conseiller en réinsertion ou en aide juridique.",
      "Notez le plan final avec la grille d'évaluation et aidez chaque apprenant à contacter une formation agréée avant de partir."
    ]
  }
};
