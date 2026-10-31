"use strict";

// Koach Learn course (French translation of shared/first-aid-cpr-awareness.js). See scripts/koachlearn-courses/README.md, "Translations".
// An AWARENESS course, as in the English: it does not certify anyone. No medicine doses anywhere.

const MEDLINE_CPR = { name: "MedlinePlus (Bibliothèque nationale de médecine des États-Unis) : RCR chez l'adulte et l'enfant après la puberté (en anglais)", url: "https://medlineplus.gov/ency/article/000013.htm" };
const MEDLINE_CHOKING = { name: "MedlinePlus : Étouffement chez l'adulte ou l'enfant de plus de 1 an (en anglais)", url: "https://medlineplus.gov/ency/article/000049.htm" };
const MEDLINE_BLEEDING = { name: "MedlinePlus : Saignement (en anglais)", url: "https://medlineplus.gov/ency/article/000045.htm" };
const MEDLINE_HEART = { name: "MedlinePlus : Premiers secours en cas de crise cardiaque (en anglais)", url: "https://medlineplus.gov/ency/article/000063.htm" };
const CDC_STROKE = { name: "CDC : Signes et symptômes de l'AVC (en anglais)", url: "https://www.cdc.gov/stroke/signs-symptoms/index.html" };
const AHA_CPR = { name: "American Heart Association : formations RCR et premiers secours (en anglais)", url: "https://cpr.heart.org/" };
const REDCROSS = { name: "Croix-Rouge américaine : cours de premiers secours, RCR et DEA (en anglais)", url: "https://www.redcross.org/take-a-class" };
const OSHA_FIRSTAID = { name: "OSHA : Soins médicaux et premiers secours (en anglais)", url: "https://www.osha.gov/medical-first-aid" };

module.exports = {
  id: "first-aid-cpr-awareness-fr",
  lang: "fr",
  translationOf: "first-aid-cpr-awareness",
  category: "Workforce Development",
  name: "Premiers secours et RCR : les bases",
  skills: "Vérifier les lieux et appeler les secours, Les étapes de la RCR à mains seules, Utiliser un DEA, Aider une personne qui s'étouffe, Arrêter un saignement grave, Reconnaître une crise cardiaque et un AVC",
  outcome: "agir avec calme dans les premières minutes d'une urgence : vérifier que les lieux sont sûrs, appeler le 911 (ou le numéro d'urgence de votre pays), suivre les étapes de la RCR à mains seules et d'un DEA, aider en cas d'étouffement et de saignement grave, reconnaître une crise cardiaque ou un AVC, et vous inscrire à un cours en présentiel de RCR et de premiers secours qui donne un vrai certificat.",
  about: [
    "Ce cours s'adresse à toute personne qui veut être prête à aider : jeunes qui cherchent un premier emploi, parents et grands-parents, personnes qui travaillent en garderie, en restauration, dans le commerce, la sécurité et les métiers manuels, et bénévoles d'associations et d'églises. Beaucoup de ces emplois demandent un certificat de RCR et de premiers secours.",
    "Vous apprendrez dans quel ordre agir en cas d'urgence, les étapes de la RCR à mains seules (réanimation cardio-respiratoire sans bouche-à-bouche), comment un DEA vous guide à voix haute pour donner un choc, et quoi faire en cas d'étouffement, de saignement grave, de crise cardiaque et d'AVC. Les étapes suivent les recommandations générales de la Croix-Rouge américaine, de l'American Heart Association (Association américaine de cardiologie) et de la Bibliothèque nationale de médecine des États-Unis.",
    "C'est un cours de sensibilisation. Il vous PRÉPARE ; il ne vous donne pas de certificat de RCR ni de premiers secours. Les vrais gestes, comme appuyer sur la poitrine à la bonne profondeur, s'apprennent et s'évaluent en personne avec un formateur qualifié, sur un mannequin d'entraînement. La dernière leçon vous montre comment trouver ce cours.",
    "Chaque leçon dure environ cinq minutes. Lisez-la, regardez les diapositives, puis faites la tâche \"Essayez maintenant\" avec du papier ou un coussin. Il y a une vérification rapide après chaque leçon, un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Faites votre propre Plan de préparation aux premiers secours et à la RCR sur une page : (1) votre numéro d'urgence et comment dire clairement votre adresse ; (2) où se trouvent le DEA et la trousse de premiers secours les plus proches à la maison, au travail, à l'école ou sur votre lieu de culte ; (3) les étapes d'urgence, écrites de mémoire dans le bon ordre (vérifier, appeler, RCR et DEA, étouffement, saignement, B.E. F.A.S.T.) ; et (4) un cours en présentiel de RCR, DEA et premiers secours que vous choisissez auprès de la Croix-Rouge américaine ou de l'American Heart Association, avec son nom, qui délivre le certificat, le lieu et la date à laquelle vous le suivrez.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Un public mixte : adolescents et jeunes adultes qui cherchent un premier emploi, adultes qui occupent ou vont occuper un emploi qui demande la RCR et les premiers secours (garderie, restauration, commerce, sécurité, métiers manuels, aide à domicile), personnes âgées qui s'occupent de leur conjoint ou de leurs petits-enfants, et bénévoles d'associations et d'églises. Certains parlent la langue comme deuxième langue.",
    startingPoint: "La plupart savent qu'il faut appeler les secours, mais restent figés ou ne savent pas quoi faire ensuite. Beaucoup ont vu la RCR à la télévision sans jamais l'avoir pratiquée. Peu savent où se trouve le DEA le plus proche ou comment il fonctionne. Certains pensent qu'ils pourraient avoir des ennuis en aidant.",
    gap: "Lors d'un arrêt cardiaque, d'un étouffement ou d'un saignement grave, les premières minutes avant l'arrivée des secours comptent le plus. Les apprenants ont besoin d'un ordre clair des étapes, de la confiance pour commencer et d'un plan pour se faire certifier en personne, car beaucoup d'emplois exigent un certificat valide d'un organisme reconnu.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (environ 11 à 12 ans)",
      "Appareils : un téléphone ou un ordinateur de bibliothèque ; l'entraînement se fait avec du papier, un coussin ou une serviette roulée",
      "Temps : leçons de 4 à 6 minutes",
      "Sécurité : sensibilisation seulement ; aucun entraînement sur une vraie personne ; les gestes pratiques et la certification se font en personne avec un formateur qualifié",
      "Aucune dose de médicament ni aucun conseil médical ; suivez l'opérateur du 911 et les équipes de secours",
      "Les numéros d'urgence changent selon le pays : 911 aux États-Unis ; les apprenants d'autres pays utilisent leur numéro local"
    ],
    prerequisites: "Aucun. Les apprenants qui veulent en savoir plus sur la lecture des informations de santé peuvent aussi suivre \"Littératie en santé\"."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "Face à une scène d'urgence décrite par des mots", action: "vérifier s'il y a un danger sur les lieux, vérifier si la personne réagit et appeler le 911 ou le numéro d'urgence local", standard: "dans le bon ordre, en donnant l'adresse et ce qui s'est passé en une phrase claire" },
    { id: "O2", condition: "Face à un adulte qui s'effondre et ne respire pas normalement", action: "énumérer les étapes de la RCR à mains seules et de l'utilisation d'un DEA", standard: "dans le bon ordre, avec la position des mains, un rythme de 100 à 120 par minute et une profondeur d'environ 2 pouces" },
    { id: "O3", condition: "Face à la description d'un adulte qui s'étouffe peut-être", action: "identifier les signes d'étouffement et décrire les premiers secours", standard: "en distinguant une personne qui peut tousser et parler d'une personne qui ne le peut pas" },
    { id: "O4", condition: "Face à une plaie qui saigne beaucoup", action: "décrire comment contrôler le saignement par une pression ferme et directe", standard: "en citant les gants ou une barrière, une pression sans relâche, et l'ajout de couches au lieu de soulever le tissu" },
    { id: "O5", condition: "Face à une liste de symptômes", action: "reconnaître les signes d'alerte d'une crise cardiaque et d'un AVC avec B.E. F.A.S.T.", standard: "en trouvant au moins 4 réponses sur 5 et en appelant le 911 au lieu de conduire la personne soi-même" },
    { id: "O6", condition: "Avec l'outil de recherche de cours de la Croix-Rouge américaine ou de l'American Heart Association", action: "choisir un cours en présentiel de RCR, DEA et premiers secours et écrire un plan de formation avec une date", standard: "en indiquant le cours, qui délivre le certificat et si votre emploi l'exige" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Agir vite et faire battre un cœur",
      lessons: [
        {
          title: "Vérifier, appeler, secourir : la première minute",
          objectives: ["O1"],
          minutes: 5,
          goal: "Vérifier les lieux et la personne, puis appeler le 911 avec un message clair.",
          text: [
            "Dans toute urgence, commencez par trois mots : vérifier, appeler, secourir. D'abord, VÉRIFIEZ que les lieux sont sûrs pour vous : circulation, feu, fumée, électricité, une personne agressive ou une eau profonde. S'ils ne sont pas sûrs, restez à distance et appelez. Vous ne pouvez aider personne si vous êtes blessé vous aussi.",
            "Ensuite, vérifiez la personne. Tapotez son épaule et criez : \"Est-ce que ça va ?\" Regardez sa poitrine pour voir si elle respire normalement. Des bruits de suffocation de temps en temps, ce N'EST PAS une respiration normale.",
            "Puis APPELEZ le 911 (ou le numéro d'urgence local hors des États-Unis). Si quelqu'un est avec vous, montrez-le du doigt et dites : \"Vous, appelez le 911 et apportez un DEA.\" Mettez le téléphone sur haut-parleur. Donnez d'abord l'adresse, puis ce qui s'est passé, et ne raccrochez pas avant que l'opérateur vous le dise. L'opérateur peut vous guider pour faire la RCR.",
            "Enfin, SECOUREZ : donnez l'aide que vous pouvez jusqu'à l'arrivée de secours formés. Utilisez des gants ou une barrière si vous en avez. Beaucoup d'États américains ont des lois du \"Bon Samaritain\" qui protègent les personnes qui aident de bonne foi ; les détails changent d'un État à l'autre."
          ],
          steps: ["Vérifiez les lieux : sont-ils sûrs pour moi ?", "Vérifiez la personne : tapotez, criez \"Est-ce que ça va ?\", regardez si elle respire normalement.", "Appelez le 911 (ou votre numéro local), ou désignez une personne pour appeler et une autre pour apporter un DEA.", "Téléphone sur haut-parleur : d'abord l'adresse, puis ce qui s'est passé. Restez en ligne.", "Secourez : aidez jusqu'à l'arrivée de secours formés."],
          words: [["Opérateur", "la personne formée qui répond aux appels au 911, envoie les secours et peut vous dire quoi faire."], ["Inconscient", "une personne qui ne bouge pas, n'ouvre pas les yeux et ne répond pas quand vous la tapotez et criez."], ["Loi du Bon Samaritain", "une loi d'un État américain qui protège les personnes qui aident de bonne foi en cas d'urgence ; les détails changent d'un État à l'autre."]],
          slides: [
            { title: "Vérifier, appeler, secourir", bullets: ["Vérifier : les lieux sont-ils sûrs ? La personne réagit-elle ?", "Appeler : le 911 ou le numéro d'urgence local", "Secourir : aider jusqu'à l'arrivée de secours formés"] },
            { title: "Vérifier la personne", bullets: ["Tapotez l'épaule et criez \"Est-ce que ça va ?\"", "Regardez la poitrine : respire-t-elle normalement ?", "Suffoquer, ce N'EST PAS respirer normalement"] },
            { title: "Appeler clairement", bullets: ["Désignez une personne : \"Vous, appelez le 911\"", "Demandez à une autre d'apporter un DEA", "D'abord l'adresse, puis ce qui s'est passé", "Restez en ligne ; l'opérateur vous aide"] }
          ],
          sources: [MEDLINE_CPR, REDCROSS],
          tryIt: "Écrivez la phrase que vous diriez au 911 depuis chez vous : votre adresse complète avec la rue transversale la plus proche, puis \"un homme s'est effondré et ne respire pas\". Lisez-la à voix haute deux fois, jusqu'à pouvoir la dire sans regarder.",
          youCanNow: "vérifier les lieux et la personne, et appeler le 911 avec un message clair.",
          quickCheck: [
            { objective: "O1", q: "Vous voyez un homme allongé sur la route et des voitures passent. Que faites-vous d'abord ?", options: ["Vous courez tout de suite vers lui", "Vous vérifiez que les lieux sont sûrs pour vous, puis vous appelez le 911", "Vous commencez la RCR au milieu de la route", "Vous le filmez"], answer: 1, why: "Vérifier que les lieux sont sûrs passe en premier ; s'ils ne le sont pas, restez à distance et appelez." },
            { objective: "O1", q: "Pendant l'appel au 911, que dites-vous en premier ?", options: ["L'histoire de votre vie", "Les antécédents médicaux de la personne", "L'adresse ou le lieu", "Le modèle de votre téléphone"], answer: 2, why: "L'adresse vient en premier pour que les secours soient envoyés même si l'appel est coupé." }
          ]
        },
        {
          title: "La RCR à mains seules : appuyer fort et vite",
          objectives: ["O2"],
          minutes: 6,
          goal: "Énumérer les étapes de la RCR à mains seules dans le bon ordre.",
          text: [
            "Quand un adulte s'effondre soudain, ne réagit pas et ne respire pas normalement, son cœur s'est peut-être arrêté. C'est un arrêt cardiaque. La RCR pousse le sang vers le cerveau jusqu'à l'arrivée d'un DEA et des équipes de secours.",
            "L'American Heart Association enseigne la RCR à mains seules à toute personne qui n'est pas formée ou qui n'ose pas faire le bouche-à-bouche : appelez le 911, puis appuyez fort et vite au centre de la poitrine. Vous n'avez pas besoin de chercher le pouls, sauf si vous êtes professionnel de santé.",
            "Mettez-vous à genoux à côté de la personne, sur une surface ferme et plate. Placez le talon d'une main au centre de la poitrine, l'autre main par-dessus, les bras tendus, les épaules au-dessus des mains. Enfoncez d'environ 2 pouces (5 centimètres), à un rythme de 100 à 120 compressions par minute, et laissez la poitrine remonter complètement à chaque fois.",
            "Continuez jusqu'à ce qu'un DEA soit prêt, que des secours formés prennent le relais ou que la personne recommence à respirer normalement. La RCR est fatigante : si quelqu'un d'autre sait la faire, changez environ toutes les deux minutes, avec une pause très courte. Un cours vous permet de vous entraîner à la bonne profondeur sur un mannequin ; ne vous entraînez jamais sur une vraie personne."
          ],
          steps: ["Ne réagit pas et ne respire pas normalement : appelez le 911 et faites chercher un DEA.", "Allongez la personne sur le dos, sur une surface ferme et plate.", "Talon d'une main au centre de la poitrine, l'autre main par-dessus.", "Bras tendus, épaules au-dessus des mains.", "Enfoncez d'environ 2 pouces, 100 à 120 fois par minute ; laissez la poitrine remonter complètement.", "N'arrêtez pas avant un DEA, des secours formés ou une respiration normale."],
          words: [["RCR", "réanimation cardio-respiratoire (aussi appelée RCP) : des compressions de la poitrine (et parfois des insufflations) qui font circuler le sang quand le cœur s'arrête."], ["Arrêt cardiaque", "quand le cœur cesse soudain de pomper ; la personne s'effondre et ne respire pas normalement."], ["Compression", "une poussée vers le bas sur la poitrine."], ["Mannequin", "un corps d'entraînement utilisé dans les cours de RCR."]],
          slides: [
            { title: "Quand commencer la RCR", bullets: ["Un adulte s'effondre et ne réagit pas", "Il ne respire pas normalement, ou il suffoque seulement", "Appelez d'abord le 911 et faites chercher un DEA"] },
            { title: "Les mains au bon endroit", bullets: ["Talon d'une main au centre de la poitrine", "L'autre main par-dessus", "Bras tendus, épaules au-dessus des mains"] },
            { title: "Fort et vite", bullets: ["Environ 2 pouces (5 cm) de profondeur", "100 à 120 compressions par minute", "Laissez la poitrine remonter complètement"] },
            { title: "Continuer", bullets: ["Jusqu'à ce que le DEA soit prêt ou que les secours prennent le relais", "Changez avec un autre sauveteur environ toutes les 2 minutes", "Entraînez-vous à la profondeur sur un mannequin en cours"] }
          ],
          sources: [MEDLINE_CPR, AHA_CPR],
          tryIt: "Mettez-vous à genoux près d'un coussin ferme ou d'une serviette roulée posés par terre (jamais une personne). Placez vos mains comme indiqué, bras tendus. Réglez un minuteur de 30 secondes sur votre téléphone et comptez vos compressions à voix haute. Visez 50 à 60 compressions en 30 secondes, ce qui correspond à 100 à 120 par minute.",
          youCanNow: "énumérer les étapes de la RCR à mains seules et garder le bon rythme.",
          quickCheck: [
            { objective: "O2", q: "Où placez-vous les mains pour la RCR d'un adulte ?", options: ["Sur le ventre", "Sur l'épaule gauche", "Sur le cou", "Au centre de la poitrine"], answer: 3, why: "Le talon d'une main se place au centre de la poitrine, l'autre main par-dessus." },
            { objective: "O2", q: "À quel rythme appuyez-vous pendant la RCR ?", options: ["100 à 120 fois par minute", "Environ 20 fois par minute", "Une fois toutes les 10 secondes", "Le plus lentement possible"], answer: 0, why: "La recommandation est de 100 à 120 compressions par minute, en laissant la poitrine remonter à chaque fois." }
          ]
        },
        {
          title: "Utiliser un DEA, et ce qu'apporte un cours complet de RCR",
          objectives: ["O2"],
          minutes: 5,
          goal: "Énumérer les étapes de l'utilisation d'un DEA avec la RCR.",
          text: [
            "Un DEA (défibrillateur automatisé externe) est un petit boîtier qui peut donner un choc pour remettre le cœur dans un rythme normal. On en trouve dans les écoles, les salles de sport, les aéroports, les bureaux, les centres commerciaux et les lieux de culte, souvent dans un boîtier mural avec un cœur et un éclair.",
            "Les DEA sont faits pour des personnes sans formation. Allumez-le et il vous parle. Dénudez la poitrine, essuyez-la, collez les électrodes là où les images l'indiquent et branchez le câble si nécessaire. Tout le monde s'écarte pendant qu'il analyse le cœur. S'il demande un choc, vérifiez que personne ne touche la victime et appuyez sur le bouton. Reprenez ensuite tout de suite la RCR, comme le DEA vous l'indique.",
            "Utilisez le DEA dès qu'il arrive et suivez exactement sa voix. N'arrêtez pas la RCR pour aller le chercher vous-même si quelqu'un d'autre peut l'apporter.",
            "Dans un cours complet de RCR, vous apprenez aussi les insufflations (bouche-à-bouche) : 30 compressions, puis 2 insufflations, et on recommence. Vous apprenez aussi la RCR de l'enfant et du bébé, qui est différente. Entraînez-vous à ces gestes en cours avec un formateur."
          ],
          steps: ["Continuez la RCR pendant que quelqu'un apporte le DEA.", "Allumez le DEA et écoutez.", "Dénudez et séchez la poitrine ; collez les électrodes là où les images l'indiquent.", "Écartez-vous pendant l'analyse ; personne ne touche la victime.", "S'il demande un choc : tout le monde s'écarte, appuyez sur le bouton.", "Reprenez tout de suite la RCR, comme il vous l'indique."],
          words: [["DEA", "défibrillateur automatisé externe : un boîtier qui analyse le cœur et, si nécessaire, donne un choc pour rétablir son rythme. Il vous guide à voix haute à chaque étape."], ["Électrodes", "des patchs collants reliés à des fils, posés sur la poitrine nue pour que le DEA analyse le cœur et donne le choc."], ["Insufflations", "l'air que vous soufflez dans la bouche de la personne pendant la RCR ; elles s'apprennent dans un cours complet."]],
          slides: [
            { title: "Ce que fait un DEA", bullets: ["Il analyse le rythme du cœur", "Il donne un choc seulement si c'est nécessaire", "Il vous guide à voix haute à chaque étape"] },
            { title: "Les étapes du DEA", bullets: ["Allumez-le et écoutez", "Poitrine nue et sèche ; électrodes là où les images l'indiquent", "Écartez-vous pendant l'analyse"] },
            { title: "S'il demande un choc", bullets: ["Vérifiez que personne ne touche la victime", "Appuyez sur le bouton de choc", "Reprenez tout de suite la RCR"] },
            { title: "Un cours complet ajoute", bullets: ["Les insufflations : 30 compressions, puis 2 insufflations", "La RCR de l'enfant et du bébé", "Un entraînement pratique avec un formateur"] }
          ],
          sources: [MEDLINE_CPR, AHA_CPR, REDCROSS],
          tryIt: "Trouvez où se trouve le DEA le plus proche à votre travail, à l'école, à la salle de sport ou sur votre lieu de culte. Demandez à un responsable ou cherchez le panneau. Notez exactement où il se trouve, et dessinez de mémoire les deux emplacements des électrodes sur un bonhomme.",
          youCanNow: "énumérer les étapes de l'utilisation d'un DEA avec la RCR et dire où se trouve le plus proche.",
          quickCheck: [
            { objective: "O2", q: "Le DEA dit qu'un choc est recommandé. Que faites-vous avant d'appuyer sur le bouton ?", options: ["Vous tenez la main de la personne", "Vous retirez les électrodes", "Vous vérifiez que personne ne touche la personne", "Vous donnez de l'eau à la personne"], answer: 2, why: "Tout le monde doit s'écarter pour que le choc aille seulement à la personne." },
            { objective: "O2", q: "Le DEA a donné un choc. Et ensuite ?", options: ["Vous attendez l'ambulance sans rien faire", "Vous reprenez la RCR comme le DEA vous l'indique", "Vous éteignez le DEA", "Vous asseyez la personne"], answer: 1, why: "Après un choc, vous reprenez tout de suite la RCR en suivant la voix du DEA." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Agir vite et faire battre un cœur",
        questions: [
          { objective: "O1", q: "Quels sont les trois premiers mots pour toute urgence ?", options: ["Attendre, regarder, marcher", "Vérifier, appeler, secourir", "Courir, se cacher, prévenir", "Demander, filmer, publier"], answer: 1, why: "Vérifiez les lieux et la personne, appelez le 911, puis secourez jusqu'à l'arrivée des secours." },
          { objective: "O1", q: "Trois personnes regardent une femme qui s'est effondrée. Comment obtenir de l'aide le plus vite ?", options: ["Désigner une personne : \"Vous, appelez le 911\", et demander à une autre d'apporter un DEA", "Crier \"Que quelqu'un appelle !\" à la foule", "Attendre que quelqu'un d'autre le fasse", "Publier sur les réseaux sociaux"], answer: 0, why: "Donner une tâche claire à une personne évite que chacun pense qu'un autre a déjà appelé." },
          { objective: "O2", q: "À quelle profondeur appuyez-vous sur la poitrine d'un adulte pendant la RCR ?", options: ["En la touchant à peine", "Environ un demi-pouce", "Le plus profond possible", "Environ 2 pouces (5 cm)"], answer: 3, why: "Chez l'adulte, les compressions font environ 2 pouces de profondeur, en laissant la poitrine remonter." },
          { objective: "O2", q: "Quand devez-vous commencer la RCR à mains seules chez un adulte ?", options: ["Quand il parle mais qu'il est fatigué", "Quand il ne réagit pas et ne respire pas normalement", "Quand il a une petite coupure", "Quand il tousse fort"], answer: 1, why: "La RCR est pour une personne qui ne réagit pas et ne respire pas normalement, ou qui suffoque seulement." },
          { objective: "O2", q: "Qui peut utiliser un DEA ?", options: ["Tout le monde ; il vous guide à chaque étape", "Seulement les médecins", "Seulement les pompiers", "Seulement les personnes de plus de 30 ans"], answer: 0, why: "Les DEA sont faits pour des personnes sans formation et donnent des instructions à voix haute." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Urgences courantes et certification",
      lessons: [
        {
          title: "Étouffement et saignement grave",
          objectives: ["O3", "O4"],
          minutes: 6,
          goal: "Identifier un étouffement, et décrire comment arrêter un saignement grave par une pression directe.",
          text: [
            "Étouffement : la personne peut se tenir la gorge, ne pas pouvoir parler, tousser faiblement, faire un bruit aigu ou devenir bleutée. Demandez : \"Vous vous étouffez ? Pouvez-vous parler ?\" Si elle peut tousser fort et parler, ne la frappez pas ; dites-lui de continuer à tousser.",
            "Si elle ne peut ni parler, ni tousser, ni respirer, demandez à quelqu'un d'appeler le 911. Les recommandations américaines montrent deux façons de faire sortir l'objet : des tapes fermes entre les omoplates avec le talon de la main (claques dans le dos) et des poussées rapides vers l'intérieur et vers le haut, juste au-dessus du nombril (compressions abdominales). Pour une femme enceinte ou une personne très corpulente, on fait des compressions sur la poitrine. Si la personne perd connaissance, appelez le 911, allongez-la au sol et commencez la RCR. Apprenez et pratiquez ces gestes en cours ; ne pratiquez pas les compressions sur une vraie personne.",
            "Saignement grave : appelez le 911. Mettez des gants si vous en avez, ou utilisez un sac plastique comme barrière. Appuyez fort, directement sur la plaie, avec un tissu propre, une compresse ou même un vêtement, et continuez d'appuyer. Ne le soulevez pas pour regarder. Si le sang traverse, ajoutez du tissu par-dessus et continuez d'appuyer.",
            "Ne retirez pas un objet planté dans une plaie ; calez du tissu autour. Un garrot sert en cas de saignement mortel d'un bras ou d'une jambe quand la pression ne suffit pas ; les cours Stop the Bleed (Arrêtez le saignement) et les cours de premiers secours apprennent à l'utiliser."
          ],
          steps: ["Étouffement : demandez \"Vous vous étouffez ? Pouvez-vous parler ?\"", "Elle peut tousser et parler : laissez-la tousser.", "Elle ne peut ni parler ni respirer : appelez le 911 et faites les gestes appris en cours (claques dans le dos et compressions abdominales).", "Elle perd connaissance : allongez-la au sol, commencez la RCR.", "Saignement : appelez le 911, gants ou barrière, appuyez fort sur la plaie avec un tissu propre.", "Le sang traverse : ajoutez des couches par-dessus ; ne soulevez pas le premier tissu."],
          words: [["Compressions abdominales", "des poussées rapides vers l'intérieur et vers le haut, juste au-dessus du nombril, pour faire sortir ce qui bloque ; on parle aussi de manœuvre de Heimlich."], ["Claques dans le dos", "des tapes fermes entre les omoplates avec le talon de la main pour débloquer ce qui gêne."], ["Pression directe", "appuyer fermement directement sur une plaie pour ralentir et arrêter le saignement."], ["Garrot", "une bande serrée posée sur un bras ou une jambe, au-dessus de la plaie, pour arrêter un saignement mortel ; on l'apprend en cours."]],
          slides: [
            { title: "Signes d'étouffement", bullets: ["Se tient la gorge, ne peut pas parler", "Toux faible ou bruit aigu", "Devient bleutée"] },
            { title: "Étouffement : que faire", bullets: ["Peut tousser et parler : laissez-la tousser", "Ne peut pas parler : 911, claques dans le dos et compressions", "Perd connaissance : allongez-la au sol, commencez la RCR"] },
            { title: "Saignement grave", bullets: ["Appelez le 911 ; gants ou barrière", "Appuyez fort, directement sur la plaie", "Le sang traverse : ajoutez des couches, continuez d'appuyer"] },
            { title: "À ne pas faire", bullets: ["Ne soulevez pas le tissu pour regarder", "Ne retirez pas un objet planté", "Ne pratiquez pas les compressions sur une vraie personne"] }
          ],
          sources: [MEDLINE_CHOKING, MEDLINE_BLEEDING, REDCROSS],
          tryIt: "Posez une serviette pliée sur votre propre avant-bras. Appuyez fort avec le plat de la main pendant 60 secondes, montre en main, sans soulever. Ajoutez ensuite une deuxième serviette par-dessus et continuez d'appuyer. Écrivez deux lignes : à quel point il était difficile de garder la pression, et les trois signes d'étouffement de cette leçon.",
          youCanNow: "repérer les signes d'étouffement et arrêter un saignement grave par une pression ferme et directe.",
          quickCheck: [
            { objective: "O3", q: "Une femme au déjeuner tousse fort et peut encore parler. Que faites-vous ?", options: ["Vous lui tapez fort dans le dos tout de suite", "Vous lui faites des compressions abdominales", "Vous l'encouragez à continuer de tousser et restez avec elle", "Vous l'allongez au sol"], answer: 2, why: "Si une personne peut tousser fort et parler, laissez-la tousser ; ne la frappez pas." },
            { objective: "O4", q: "Le sang traverse le tissu que vous appuyez sur une plaie. Que faites-vous ?", options: ["Vous soulevez le tissu pour regarder", "Vous arrêtez d'appuyer", "Vous lavez la plaie à l'eau", "Vous ajoutez du tissu par-dessus et continuez d'appuyer"], answer: 3, why: "Ajouter des couches garde la pression ; soulever le tissu peut relancer le saignement." }
          ]
        },
        {
          title: "Reconnaître une crise cardiaque et un AVC",
          objectives: ["O5"],
          minutes: 5,
          goal: "Reconnaître les signes d'alerte d'une crise cardiaque et d'un AVC.",
          text: [
            "Une crise cardiaque se produit quand le sang ne passe plus vers une partie du cœur. Signes courants : douleur ou pression dans la poitrine qui peut s'étendre à la mâchoire, au bras, au dos ou au ventre, essoufflement, sueurs froides, nausées ou vertiges, et une fatigue inhabituelle. Chez les femmes, les personnes âgées et les personnes diabétiques, les signes peuvent être plus légers ou différents.",
            "Si vous pensez que c'est une crise cardiaque, appelez le 911 tout de suite. N'attendez pas de voir si ça passe, et ne laissez pas la personne vous convaincre de ne pas appeler. Faites-la asseoir et se reposer, desserrez les vêtements serrés et restez avec elle. Ne donnez aucun médicament, sauf s'il s'agit de son propre médicament prescrit ou si l'opérateur du 911 vous le dit. Si elle ne réagit plus et ne respire plus normalement, commencez la RCR et utilisez un DEA.",
            "Un AVC (accident vasculaire cérébral) se produit quand le sang ne passe plus vers une partie du cerveau ou qu'un vaisseau sanguin éclate. Les CDC (Centres américains pour le contrôle et la prévention des maladies) enseignent B.E. F.A.S.T., d'après les mots anglais : Balance, équilibre (vertige ou perte d'équilibre soudains) ; Eyes, yeux (troubles de la vue soudains) ; Face, visage (demandez-lui de sourire : un côté tombe-t-il ?) ; Arms, bras (demandez-lui de lever les deux bras : l'un retombe-t-il ?) ; Speech, parole (parle-t-elle mal ou bizarrement ?) ; Time, temps (appelez le 911 tout de suite).",
            "Notez l'heure du début des signes et dites-la aux secours. Appelez une ambulance ; ne conduisez pas vous-même la personne à l'hôpital."
          ],
          steps: ["Signes de crise cardiaque : douleur ou pression dans la poitrine, essoufflement, sueurs froides, nausées, vertiges.", "Appelez le 911 tout de suite ; faites-la asseoir, desserrez les vêtements, restez avec elle.", "Aucun médicament, sauf le sien ou si l'opérateur le dit.", "AVC : vérifiez B.E. F.A.S.T.", "Notez l'heure du début des signes ; appelez une ambulance, ne la conduisez pas vous-même."],
          words: [["Crise cardiaque", "quand le sang ne passe plus vers une partie du cœur ; la personne est en général consciente et a une douleur ou une pression dans la poitrine."], ["AVC", "accident vasculaire cérébral : quand le sang ne passe plus vers une partie du cerveau ou qu'un vaisseau sanguin du cerveau éclate."], ["B.E. F.A.S.T.", "Balance, Eyes, Face, Arms, Speech, Time (équilibre, yeux, visage, bras, parole, temps) : une façon de repérer un AVC et de penser à appeler le 911."]],
          slides: [
            { title: "Signes de crise cardiaque", bullets: ["Douleur ou pression dans la poitrine ; peut aller à la mâchoire, au bras, au dos", "Essoufflement, sueurs froides, nausées", "Femmes et personnes âgées : signes parfois plus légers"] },
            { title: "Crise cardiaque : que faire", bullets: ["Appelez le 911 maintenant ; n'attendez pas", "Asseoir, reposer, desserrer les vêtements, rester avec elle", "Aucun médicament, sauf le sien ou si l'opérateur le dit"] },
            { title: "AVC : B.E. F.A.S.T.", bullets: ["Équilibre et yeux : vertige ou troubles de la vue soudains", "Visage qui tombe, bras qui retombe, parole confuse", "Temps : appelez le 911 tout de suite"] },
            { title: "Chaque minute compte", bullets: ["Notez l'heure du début des signes", "Appelez une ambulance ; ne la conduisez pas vous-même"] }
          ],
          sources: [MEDLINE_HEART, CDC_STROKE],
          tryIt: "Écrivez B.E. F.A.S.T. de haut en bas sur le bord d'une page. À côté de chaque lettre, écrivez de mémoire la question ou le test que vous utiliseriez. Puis expliquez-le à un ami ou un membre de votre famille en moins d'une minute.",
          youCanNow: "reconnaître les signes d'alerte d'une crise cardiaque et d'un AVC et appeler vite le 911.",
          quickCheck: [
            { objective: "O5", q: "Le sourire de votre oncle tombe d'un côté et il parle de façon confuse. Que faites-vous ?", options: ["Vous appelez le 911 tout de suite et notez l'heure", "Vous le laissez s'allonger et dormir pour que ça passe", "Vous le conduisez vous-même à l'hôpital", "Vous lui donnez un antidouleur"], answer: 0, why: "Ce sont des signes d'AVC ; appelez le 911 tout de suite, notez l'heure et laissez l'ambulance l'emmener." },
            { objective: "O5", q: "Quel est un signe courant de crise cardiaque ?", options: ["Une petite coupure à la main", "Une douleur ou une pression dans la poitrine qui s'étend au bras ou à la mâchoire", "Un éternuement", "Une éruption qui gratte sur la jambe"], answer: 1, why: "Une douleur ou une pression dans la poitrine qui peut s'étendre est un signe courant de crise cardiaque." }
          ]
        },
        {
          title: "Se faire certifier : votre plan de préparation",
          objectives: ["O6"],
          minutes: 5,
          goal: "Choisir un cours en présentiel de RCR et de premiers secours et écrire un plan de formation avec une date.",
          text: [
            "Ce cours apporte une sensibilisation, pas un certificat. Les employeurs qui demandent la RCR et les premiers secours veulent en général une carte d'un organisme reconnu. Aux États-Unis, les plus connus sont la Croix-Rouge américaine et l'American Heart Association. Les deux ont un outil de recherche de cours sur leur site web.",
            "Choisissez le bon cours pour votre parcours. Beaucoup d'emplois en entreprise et dans la communauté (garderie, encadrement sportif, sécurité, restauration, associations) acceptent un cours de Premiers secours, RCR et DEA pour adultes et enfants. Les emplois de santé (aide-soignant, technicien ambulancier, étudiants en pharmacie et en médecine) demandent en général le BLS (Basic Life Support, soutien de base des fonctions vitales). Demandez à votre employeur ou à votre programme lequel il accepte avant de payer.",
            "Beaucoup de cours sont mixtes : une partie en ligne, puis une séance pratique en présentiel avec un formateur et des mannequins. Un cours entièrement en ligne sans test pratique peut ne pas être accepté. Les prix, la durée du cours et la durée de validité de la carte varient : vérifiez la page de l'organisme et la date sur votre carte, et renouvelez-la avant qu'elle expire.",
            "Renseignez-vous sur les cours gratuits ou à petit prix : certains employeurs, programmes d'emploi, casernes de pompiers, hôpitaux et associations locales en proposent. L'OSHA (l'agence américaine pour la sécurité et la santé au travail) dit que les employeurs doivent avoir des personnes et du matériel de premiers secours adaptés aux risques du lieu de travail."
          ],
          steps: ["Demandez à votre employeur ou à votre programme quel cours il accepte (par exemple Premiers secours, RCR et DEA, ou BLS).", "Ouvrez l'outil de recherche de cours de la Croix-Rouge ou de l'American Heart Association.", "Choisissez un cours en présentiel ou mixte près de chez vous.", "Notez le nom du cours, qui délivre la carte, le lieu, la date et le prix.", "Mettez la date dans votre agenda et un rappel avant que la carte expire."],
          words: [["Carte de certification", "la preuve, donnée par l'organisme de formation, que vous avez réussi le test pratique ; les employeurs demandent à la voir."], ["BLS", "Basic Life Support (soutien de base des fonctions vitales) : le cours de RCR pour les travailleurs et étudiants de santé."], ["Formation mixte", "un cours en partie en ligne et en partie en présentiel, avec un test pratique."], ["Pédiatrique", "pour les enfants et les bébés."]],
          slides: [
            { title: "Ce cours est une sensibilisation", bullets: ["Il vous prépare ; il ne vous certifie pas", "Les certificats viennent d'un organisme reconnu", "Aux États-Unis : Croix-Rouge américaine, American Heart Association"] },
            { title: "Choisir le bon cours", bullets: ["La plupart des emplois : Premiers secours, RCR et DEA (adultes et enfants)", "Santé : Basic Life Support (BLS)", "Demandez à votre employeur lequel il accepte"] },
            { title: "Avant de vous inscrire", bullets: ["Il faut un test pratique en présentiel", "Vérifiez le prix, la durée et la validité de la carte", "Renseignez-vous sur les cours gratuits ou à petit prix"] }
          ],
          sources: [REDCROSS, AHA_CPR, OSHA_FIRSTAID],
          tryIt: "Tâche finale : faites votre Plan de préparation aux premiers secours et à la RCR sur une page. Écrivez votre numéro d'urgence et votre phrase avec l'adresse, où se trouvent le DEA et la trousse les plus proches, les étapes d'urgence de mémoire, et un cours en présentiel trouvé sur le site de la Croix-Rouge ou de l'AHA : nom, qui le délivre, lieu et date.",
          youCanNow: "choisir un cours reconnu de RCR et de premiers secours en présentiel et prévoir quand vous le suivrez.",
          quickCheck: [
            { objective: "O6", q: "Vous avez terminé ce cours de sensibilisation. Que vous apporte-t-il ?", options: ["Une carte de RCR que votre employeur doit accepter", "Un diplôme d'infirmier", "Des connaissances pour vous préparer à un cours de certification en présentiel", "Le droit d'enseigner la RCR"], answer: 2, why: "Ce cours vous prépare ; le certificat vient d'un cours en présentiel avec un organisme reconnu." },
            { objective: "O6", q: "Vous commencez une formation d'aide-soignant. Quel cours de RCR vont-ils le plus probablement demander ?", options: ["Une vidéo entièrement en ligne sans test pratique", "Aucun cours", "Un cours vu dans une publication sur les réseaux sociaux", "Le Basic Life Support (BLS), après vérification auprès de la formation"], answer: 3, why: "Les formations de santé demandent en général le BLS ; demandez à la formation lequel elle accepte." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Urgences courantes et certification",
        questions: [
          { objective: "O3", q: "Un homme se tient la gorge et ne peut ni parler ni tousser. Que faites-vous ?", options: ["Vous attendez qu'il aille mieux", "Vous faites appeler le 911 et faites les gestes de premiers secours contre l'étouffement", "Vous lui donnez de l'eau à boire", "Vous lui demandez de s'allonger pour se reposer"], answer: 1, why: "Une personne qui ne peut ni parler ni tousser s'étouffe gravement ; appelez le 911 et agissez." },
          { objective: "O4", q: "Quelle est la première chose à faire pour une coupure profonde qui saigne beaucoup (après avoir appelé le 911) ?", options: ["Appuyer fort, directement sur la plaie, avec un tissu propre", "La laisser saigner pour la nettoyer", "Mettre de la glace dessus", "Demander à la personne de marcher"], answer: 0, why: "Une pression ferme et directe est le moyen principal d'arrêter un saignement grave." },
          { objective: "O4", q: "Un morceau de verre est planté dans une plaie. Que devez-vous faire ?", options: ["Le retirer vite", "L'enfoncer plus profond", "Le laisser en place et caler du tissu autour", "Verser de l'eau dessus jusqu'à ce qu'il sorte"], answer: 2, why: "Le retirer peut aggraver le saignement ; calez du tissu autour et laissez les professionnels le retirer." },
          { objective: "O5", q: "Dans B.E. F.A.S.T., que veut dire le A ?", options: ["Allergie", "Adresse", "Ambulance", "Arms, bras : un bras retombe-t-il ?"], answer: 3, why: "A veut dire Arms (bras) : demandez à la personne de lever les deux bras et regardez si l'un retombe." },
          { objective: "O6", q: "Quel est le meilleur moyen d'obtenir un certificat de RCR accepté par un employeur ?", options: ["Un cours en présentiel ou mixte de la Croix-Rouge ou de l'AHA", "Regarder une vidéo en ligne sans test", "Lire ce cours deux fois", "Demander à un ami de signer un mot"], answer: 0, why: "Les employeurs veulent en général une carte d'un organisme reconnu, avec un test pratique." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Premiers secours et RCR : les bases",
    questions: [
      { objective: "O1", q: "Vous trouvez un collègue au sol près d'un câble électrique qui fait des étincelles. Que faites-vous d'abord ?", options: ["Vous attrapez le bras du collègue et tirez", "Vous restez à distance, appelez le 911 et faites couper le courant", "Vous versez de l'eau sur le câble", "Vous commencez la RCR à l'endroit où il est"], answer: 1, why: "Les lieux ne sont pas sûrs ; restez à distance, appelez et sécurisez les lieux avant de toucher quelqu'un." },
      { objective: "O1", q: "Comment vérifiez-vous si une personne réagit ?", options: ["Vous tapotez son épaule et criez \"Est-ce que ça va ?\"", "Vous lui versez de l'eau froide sur le visage", "Vous lui secouez fort la tête", "Vous attendez cinq minutes"], answer: 0, why: "Tapoter et crier est la façon sûre de vérifier si quelqu'un réagit." },
      { objective: "O1", q: "Vous appelez le 911. Quand pouvez-vous raccrocher ?", options: ["Dès que vous avez donné l'adresse", "Après une minute", "Quand l'opérateur vous le dit", "Quand la personne ouvre les yeux"], answer: 2, why: "Restez en ligne ; l'opérateur peut avoir besoin d'autres détails ou vous guider pour la RCR." },
      { objective: "O1", q: "Hors des États-Unis, quel numéro appelez-vous ?", options: ["Toujours le 911, partout", "Le numéro d'un ami", "Le standard de l'hôpital", "Le numéro d'urgence local de votre pays"], answer: 3, why: "Les numéros d'urgence changent selon le pays ; apprenez le vôtre." },
      { objective: "O2", q: "Un adulte s'effondre, ne réagit pas et ne fait que suffoquer. Que se passe-t-il ?", options: ["Il dort probablement", "Son cœur s'est peut-être arrêté ; appelez le 911 et commencez la RCR", "Il s'étouffe mais il va bien", "Il a besoin d'un verre d'eau"], answer: 1, why: "Suffoquer n'est pas respirer normalement ; agissez comme pour un arrêt cardiaque." },
      { objective: "O2", q: "Que veut dire la RCR à mains seules ?", options: ["Appeler le 911 et appuyer fort et vite au centre de la poitrine", "Frotter les mains de la personne", "Faire seulement des insufflations", "Tenir les mains de la personne jusqu'à l'arrivée des secours"], answer: 0, why: "La RCR à mains seules, ce sont des compressions de la poitrine sans insufflations, après avoir appelé le 911." },
      { objective: "O2", q: "Après chaque compression, que laissez-vous faire à la poitrine ?", options: ["Rester enfoncée", "Trembler", "Remonter complètement", "Tourner sur le côté"], answer: 2, why: "Laisser la poitrine remonter complètement permet au cœur de se remplir de sang avant la compression suivante." },
      { objective: "O2", q: "Quelqu'un apporte un DEA. Que faites-vous ?", options: ["Vous attendez que l'ambulance l'utilise", "Vous lisez d'abord tout le mode d'emploi", "Vous le mettez sous la tête de la personne", "Vous l'allumez et suivez sa voix"], answer: 3, why: "Les DEA vous guident à chaque étape ; utilisez-le dès qu'il arrive." },
      { objective: "O3", q: "Quel est un signe qu'un adulte s'étouffe ?", options: ["Il rit très fort", "Il se tient la gorge et ne peut pas parler", "Il éternue", "Il demande une serviette"], answer: 1, why: "Se tenir la gorge et ne pas pouvoir parler sont des signes typiques d'étouffement." },
      { objective: "O3", q: "Une personne qui s'étouffe perd connaissance. Que faites-vous ?", options: ["Vous appelez le 911, l'allongez au sol et commencez la RCR", "Vous continuez les claques dans le dos pendant qu'elle est allongée", "Vous la laissez se reposer", "Vous lui donnez de l'eau"], answer: 0, why: "Si une personne qui s'étouffe ne réagit plus, appelez le 911 et commencez la RCR." },
      { objective: "O3", q: "Où devez-vous apprendre correctement les claques dans le dos et les compressions abdominales ?", options: ["En vous entraînant fort sur un ami", "Dans un commentaire au hasard sous une vidéo", "Dans un cours pratique avec un formateur", "Vous n'avez pas besoin de les apprendre"], answer: 2, why: "Ces gestes se pratiquent en sécurité en cours ; ne pratiquez jamais les compressions sur une vraie personne." },
      { objective: "O4", q: "Avant d'appuyer sur la plaie qui saigne de quelqu'un, qu'est-ce qui vous protège ?", options: ["Des gants, ou un sac plastique comme barrière", "Rien n'est nécessaire", "Vous laver les mains pendant cinq minutes avant", "Fermer les yeux"], answer: 0, why: "Les gants ou une barrière vous protègent du sang pendant que vous aidez." },
      { objective: "O4", q: "Vous appuyez sur une plaie. Combien de temps continuez-vous ?", options: ["Dix secondes", "Jusqu'à ce que vous soyez fatigué", "Jusqu'à ce que vous regardiez sous le tissu", "Jusqu'à ce que le saignement s'arrête ou que les secours prennent le relais, sans soulever"], answer: 3, why: "Une pression constante, sans regarder dessous, laisse au sang le temps de coaguler." },
      { objective: "O4", q: "Quand utilise-t-on un garrot ?", options: ["Pour n'importe quelle petite coupure", "Pour un saignement mortel d'un bras ou d'une jambe quand la pression ne suffit pas", "Pour un saignement de nez", "Pour un bleu"], answer: 1, why: "Le garrot sert pour un saignement mortel d'un membre et s'apprend en cours." },
      { objective: "O5", q: "Votre grand-mère dit qu'elle a une pression dans la poitrine et des sueurs froides, mais elle veut attendre. Que faites-vous ?", options: ["Vous attendez une heure pour voir", "Vous appelez le 911 maintenant et restez avec elle", "Vous la conduisez vous-même après le dîner", "Vous lui donnez n'importe quel cachet de la maison"], answer: 1, why: "Ce sont des signes de crise cardiaque ; appelez le 911 maintenant et ne la laissez pas vous en dissuader." },
      { objective: "O5", q: "Dans B.E. F.A.S.T., que vous rappelle le T ?", options: ["Prendre une photo", "Texter un ami", "Lui dire de dormir", "Time, temps : appeler le 911 tout de suite et noter l'heure du début des signes"], answer: 3, why: "T veut dire Time (temps) : appelez le 911 tout de suite et notez l'heure du début des signes." },
      { objective: "O5", q: "Pourquoi appeler une ambulance pour un AVC au lieu de conduire la personne vous-même ?", options: ["L'équipe peut commencer les soins en route et prévenir l'hôpital", "Les ambulances sont toujours gratuites", "Les hôpitaux n'acceptent pas les gens sans rendez-vous", "Il est interdit par la loi de conduire quelqu'un"], answer: 0, why: "Les équipes de secours commencent les soins tôt et préviennent l'hôpital ; les CDC disent d'appeler le 911, pas de conduire." },
      { objective: "O6", q: "Quels sont les deux organismes américains les plus connus pour la certification en RCR et premiers secours ?", options: ["Le DMV et la poste", "L'IRS et la SBA", "La Croix-Rouge américaine et l'American Heart Association", "N'importe quel groupe sur les réseaux sociaux"], answer: 2, why: "La Croix-Rouge et l'AHA sont les organismes de RCR et de premiers secours les plus connus aux États-Unis." },
      { objective: "O6", q: "Avant de payer un cours de RCR pour un emploi, que devez-vous demander ?", options: ["Quel cours et quel organisme l'employeur accepte", "Si vous pouvez sauter le test pratique", "Si un ami peut le suivre à votre place", "Rien ; tous les cours se valent"], answer: 0, why: "Les emplois varient : certains acceptent Premiers secours, RCR et DEA ; la santé demande souvent le BLS." },
      { objective: "O6", q: "Votre carte de RCR porte une date. Que faites-vous ?", options: ["Vous l'ignorez", "Vous jetez la carte", "Vous la plastifiez pour qu'elle n'expire jamais", "Vous mettez un rappel pour la renouveler avant qu'elle expire"], answer: 3, why: "Les cartes expirent ; renouvelez-la avant la date pour rester certifié." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 2, 4, 6, 8, 11, 15, 17, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Appel d'urgence prêt", objective: "O1", notYet: "Pas de numéro d'urgence ni de phrase avec l'adresse, ou l'adresse n'est pas claire.", meets: "A le bon numéro d'urgence et une phrase claire : d'abord l'adresse, puis ce qui s'est passé.", exceeds: "Ajoute aussi une rue transversale ou un point de repère et s'entraîne à la dire à voix haute." },
      { name: "DEA et trousse repérés", objective: "O2", notYet: "Ne sait pas où se trouve un DEA ou une trousse de premiers secours.", meets: "Indique où se trouvent le DEA et la trousse les plus proches à la maison, au travail, à l'école ou sur le lieu de culte.", exceeds: "Indique deux endroits, et a vérifié que le boîtier du DEA est accessible." },
      { name: "Étapes dans l'ordre", objective: "O2", notYet: "Des étapes manquent ou sont dans le mauvais ordre, ou le rythme et la profondeur de la RCR sont faux.", meets: "Écrit vérifier, appeler, RCR et DEA dans l'ordre, avec les mains au centre de la poitrine, 100 à 120 par minute et environ 2 pouces.", exceeds: "Écrit aussi les étapes du DEA et quand changer de sauveteur." },
      { name: "Étouffement et saignement", objective: "O4", notYet: "Confond les gestes, ou dit de soulever le tissu ou de retirer un objet planté.", meets: "Écrit les signes d'étouffement (O3) et la pression ferme et directe avec des couches pour le saignement.", exceeds: "Dit aussi quand une personne qui s'étouffe a besoin de la RCR et à quoi sert un garrot." },
      { name: "Crise cardiaque et AVC", objective: "O5", notYet: "Ne peut pas énumérer B.E. F.A.S.T. ni les signes de crise cardiaque.", meets: "Énumère B.E. F.A.S.T. et trois signes de crise cardiaque, avec \"appeler le 911\".", exceeds: "Note aussi qu'il faut noter l'heure du début des signes et ne pas conduire la personne soi-même." },
      { name: "Plan de certification", objective: "O6", notYet: "Aucun cours choisi, ou un cours uniquement en ligne sans test pratique.", meets: "Indique un cours en présentiel ou mixte, qui délivre la carte, le lieu et une date.", exceeds: "A aussi vérifié avec l'employeur ou la formation que le cours est accepté, et a mis un rappel de renouvellement." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui suivent un cours en présentiel de RCR, DEA et premiers secours de la Croix-Rouge ou de l'AHA dans les 60 jours (questionnaire de suivi, carte montrée)",
      "Apprenants qui indiquent une carte valide de RCR et de premiers secours sur une candidature ou un CV",
      "Lieux de travail et associations du programme qui signalent plus de salariés et de bénévoles certifiés et des emplacements de DEA connus"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec internet pour voir les leçons et les outils de recherche de cours",
      "Du papier et un stylo ; un coussin ferme ou une serviette roulée pour l'entraînement au rythme de la RCR ; une serviette pour l'entraînement à la pression",
      "Un minuteur sur le téléphone ou une montre",
      "Environ 60 à 75 minutes au total, en séances courtes"
    ],
    facilitatorNotes: [
      "Ce cours est une sensibilisation seulement. Rappelez souvent qu'il ne certifie pas, et orientez les apprenants vers un cours en présentiel avec un formateur qualifié de la Croix-Rouge ou de l'AHA.",
      "Ne laissez jamais les apprenants pratiquer les compressions, les claques dans le dos ou les compressions abdominales les uns sur les autres ; utilisez des coussins ou, si vous en avez, des mannequins avec un formateur certifié.",
      "Ne donnez aucune dose de médicament ni aucun conseil médical ; orientez les questions de santé vers un médecin ou l'opérateur du 911.",
      "Certains apprenants ont peut-être vécu une urgence ou perdu un proche ; prévoyez des pauses et laissez-les sortir s'ils en ont besoin.",
      "Pour les groupes hors des États-Unis, remplacez le 911 par le numéro d'urgence local et par les organismes de formation locaux (par exemple les sociétés nationales de la Croix-Rouge ou du Croissant-Rouge).",
      "Associez-vous à une caserne de pompiers, un hôpital ou une section locale de la Croix-Rouge pour proposer un cours de certification juste après ce cours."
    ]
  }
};
