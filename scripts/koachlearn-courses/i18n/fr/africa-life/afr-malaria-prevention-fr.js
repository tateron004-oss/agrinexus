"use strict";

// Koach Learn course (French translation of africa-life/afr-malaria-prevention.js). See scripts/koachlearn-courses/README.md, "Translations".
// Prevention and when to get help only, exactly as in the English: no medicine names for self-treatment, no doses, no treatment plans and no diagnosis.

const WHO_MALARIA = { name: "OMS, aide-mémoire : Paludisme (transmission, symptômes, signes de danger, moustiquaires, pulvérisation, chimioprévention, vaccins, tests)", url: "https://www.who.int/news-room/fact-sheets/detail/malaria" };
const CDC_MALARIA = { name: "CDC (Centres pour le contrôle et la prévention des maladies des États-Unis) : À propos du paludisme (piqûres en soirée et la nuit, symptômes, consulter vite)", url: "https://www.cdc.gov/malaria/about/index.html" };
const WHO_WATER = { name: "OMS, aide-mémoire : Eau potable (les récipients d'eau de la maison comme gîtes de moustiques ; couvrez-les)", url: "https://www.who.int/news-room/fact-sheets/detail/drinking-water" };

module.exports = {
  id: "afr-malaria-prevention-fr",
  lang: "fr",
  translationOf: "afr-malaria-prevention",
  category: "Africa: Life and Work",
  name: "Protéger votre famille du paludisme",
  skills: "Savoir comment le paludisme se transmet et qui est le plus à risque, Utiliser une moustiquaire imprégnée chaque nuit, Réduire les moustiques autour de la maison, Utiliser les services du centre de santé pour les femmes enceintes et les enfants, Faire tester chaque fièvre le jour même, Repérer les signes de danger du paludisme grave",
  outcome: "protéger votre famille du paludisme : dormir sous une moustiquaire imprégnée chaque nuit, réduire les moustiques autour de la maison, utiliser les services du centre de santé pour les femmes enceintes et les jeunes enfants, faire tester chaque fièvre le jour même et repérer les signes de danger qui veulent dire : allez au centre de santé maintenant.",
  about: [
    "Le paludisme (aussi appelé malaria) se transmet par les piqûres de moustiques, et l'Afrique compte la plupart des cas et des décès dans le monde. L'OMS (Organisation mondiale de la Santé) indique qu'en 2024 la Région africaine de l'OMS a eu environ 95 % des cas et des décès de paludisme du monde, et que les enfants de moins de 5 ans représentaient environ trois décès sur quatre dans cette région. Le paludisme peut être évité, et il se soigne quand on le trouve tôt. Ce cours s'adresse aux mères, aux pères, aux grands-parents, aux personnes qui gardent des enfants et aux jeunes du Nigeria, de la RD Congo, du Kenya, du Ghana, du Burkina Faso, du Mali, du Cameroun et de toute l'Afrique.",
    "Vous apprendrez comment le paludisme se transmet et qui est le plus à risque, à installer et entretenir une moustiquaire imprégnée, à réduire les endroits où les moustiques se reproduisent et piquent autour de la maison, quels services du centre de santé protègent les femmes enceintes et les jeunes enfants, à faire tester chaque fièvre le jour même et à repérer les signes de danger du paludisme grave.",
    "Ce cours enseigne la prévention et le moment de demander de l'aide. Il ne vous dit pas quel médicament prendre ni en quelle quantité : seul un agent de santé peut faire le test du paludisme et décider du traitement. Chaque leçon dure environ cinq minutes et se termine par une tâche « Essayez maintenant », et toutes ensemble construisent le plan antipaludisme de votre foyer."
  ],
  finalTask: "Faites un plan antipaludisme pour votre foyer, sur une page : qui dans votre maison est le plus à risque ; combien de moustiquaires imprégnées vous avez et combien il vous en faut, où chaque personne dort sous une moustiquaire et comment vous allez les entretenir ; trois actions pour réduire les moustiques autour de la maison ; les visites prévues au centre de santé pour toute femme enceinte ou jeune enfant ; ce que vous ferez le jour même où quelqu'un a de la fièvre ; et une carte des signes de danger avec le nom et le numéro du centre de santé ou de l'agent de santé communautaire le plus proche.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mères, pères, grands-parents, personnes qui gardent des enfants et jeunes de toute l'Afrique, surtout dans les zones où le paludisme est fréquent, dans les villages, les villes et les quartiers précaires. Beaucoup ont déjà eu le paludisme et s'occupent de jeunes enfants ou d'une femme enceinte de la famille.",
    startingPoint: "Ils savent que les moustiques donnent le paludisme et beaucoup ont une moustiquaire. Mais souvent elle n'est pas utilisée chaque nuit ni par tout le monde, les moustiquaires ont des trous, de l'eau stagne autour de la maison, les fièvres sont soignées à la maison avec des restes de médicaments ou des médicaments du marché sans test, et les signes de danger sont vus trop tard.",
    gap: "Le paludisme tue encore beaucoup de jeunes enfants et fait du mal aux femmes enceintes et à leurs bébés. Les familles ont besoin d'habitudes simples chaque jour (une moustiquaire chaque nuit, moins de moustiques) et d'agir vite (un test pour chaque fièvre, le centre de santé tout de suite en cas de signes de danger) pour éviter des décès. Ces habitudes sont gratuites ou peu chères et marchent mieux ensemble.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; pour beaucoup d'apprenants, la langue du cours n'est pas leur langue maternelle",
      "Appareils : un téléphone simple et des données mobiles chères ; les leçons marchent hors ligne une fois chargées",
      "Argent : petits budgets ; beaucoup de moustiquaires, de tests et de services sont gratuits ou peu chers dans les centres de santé et les programmes nationaux, mais cela varie",
      "Santé : prévention et signes d'alerte seulement ; pas de noms de médicaments pour se soigner seul, pas de doses, pas de plan de traitement, pas de diagnostic ; les apprenants suivent leur centre de santé, leur agent de santé communautaire et le ministère de la Santé",
      "Temps : leçons de 4 à 6 minutes, entre les tâches de la maison et le travail"
    ],
    prerequisites: "Aucun."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir de votre propre foyer", action: "expliquer comment le paludisme se transmet et lister les personnes de votre maison les plus à risque", standard: "en nommant la piqûre de moustique la nuit et en nommant les jeunes enfants et les femmes enceintes" },
    { id: "O2", condition: "Avec une moustiquaire imprégnée et les endroits où dort votre famille", action: "installer une moustiquaire imprégnée, la border et réparer tous les trous", standard: "avec chaque personne, en commençant par les jeunes enfants et les femmes enceintes, qui dort sous une moustiquaire chaque nuit" },
    { id: "O3", condition: "À partir des abords de votre maison", action: "supprimer ou couvrir les endroits où les moustiques se reproduisent et les empêcher d'entrer dans la maison", standard: "en réalisant au moins trois actions en une semaine" },
    { id: "O4", condition: "Avec une femme enceinte ou un jeune enfant dans votre famille", action: "lister les services contre le paludisme que votre centre de santé leur offre et prévoir les visites", standard: "en nommant les premières visites prénatales faites tôt et en demandant les vaccins et les médicaments préventifs là où ils sont proposés" },
    { id: "O5", condition: "Avec un membre de la famille qui a de la fièvre dans une zone de paludisme", action: "emmener la personne faire un test du paludisme le jour même et suivre le traitement donné par l'agent de santé", standard: "sans jamais soigner avec des restes de médicaments ou des médicaments inconnus et sans jamais arrêter trop tôt" },
    { id: "O6", condition: "Avec un membre de la famille malade", action: "repérer les signes de danger du paludisme grave et emmener la personne au centre de santé tout de suite", standard: "en nommant au moins quatre signes de danger et le centre de santé ou l'agent de santé communautaire le plus proche" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Arrêter la piqûre",
      lessons: [
        {
          title: "Comment le paludisme se transmet et qui est le plus à risque",
          objectives: ["O1"],
          minutes: 5,
          goal: "Expliquer comment le paludisme se transmet et lister les personnes de votre maison les plus à risque.",
          text: [
            "Le paludisme est causé par un tout petit parasite. Il se transmet par la piqûre de certains moustiques femelles (anophèles). Un moustique pique une personne qui a le paludisme, puis pique quelqu'un d'autre et le lui transmet. Il ne passe pas directement d'une personne à l'autre par le toucher, la nourriture ou l'air.",
            "Ces moustiques piquent surtout en fin de soirée et la nuit, souvent pendant que les gens dorment. Les signes du paludisme commencent en général 10 à 15 jours après la piqûre, avec de la fièvre, des frissons et des maux de tête.",
            "L'OMS indique que les personnes les plus à risque de paludisme grave sont les bébés et les enfants de moins de 5 ans, les femmes enceintes, les personnes vivant avec le VIH et les voyageurs qui viennent de pays sans paludisme. En Afrique, la plupart des décès dus au paludisme sont des jeunes enfants. L'OMS rapporte que le Nigeria et la RD Congo comptaient à eux seuls plus de 40 % des décès dus au paludisme de la région en 2024. Dans une grande partie de l'Afrique du Nord, le paludisme local est rare, mais les habitants du Maroc, de l'Égypte ou de la Tunisie qui voyagent dans des zones de paludisme courent un risque élevé et doivent voir un agent de santé avant de partir."
          ],
          words: [["Parasite", "un tout petit être vivant qui vit dans un autre corps et lui fait du mal."], ["Anophèle", "le type de moustique qui transmet le paludisme."], ["À risque", "qui a plus de chances de tomber malade ou très malade."]],
          slides: [
            { title: "Comment le paludisme se transmet", bullets: ["Un parasite porté par les moustiques anophèles", "Piqûre d'une personne malade, puis de la suivante", "Pas par le toucher, la nourriture ou l'air"] },
            { title: "Quand ils piquent", bullets: ["Surtout en fin de soirée et la nuit", "Les signes commencent 10 à 15 jours après la piqûre", "Fièvre, frissons, maux de tête"] },
            { title: "Les plus à risque", bullets: ["Bébés et enfants de moins de 5 ans", "Femmes enceintes", "Personnes vivant avec le VIH ; voyageurs venant de pays sans paludisme"] }
          ],
          sources: [WHO_MALARIA, CDC_MALARIA],
          tryIt: "Écrivez le nom de toutes les personnes qui dorment dans votre maison. Entourez les plus à risque : enfants de moins de 5 ans, toute femme enceinte, toute personne vivant avec le VIH et les visiteurs venant de pays sans paludisme.",
          youCanNow: "expliquer comment le paludisme se transmet et dire qui dans votre maison est le plus à risque.",
          quickCheck: [
            { objective: "O1", q: "Comment le paludisme se transmet-il ?", options: ["En serrant la main", "Par la piqûre de certains moustiques", "En mangeant des mangues", "Par la pluie froide"], answer: 1, why: "Le paludisme se transmet par la piqûre de moustiques anophèles infectés, pas par le toucher, la nourriture ou le temps qu'il fait." },
            { objective: "O1", q: "Qui, dans une famille, est le plus à risque de paludisme grave ?", options: ["Les jeunes enfants de moins de 5 ans et les femmes enceintes", "Seulement les garçons adolescents", "Seulement les grands-parents", "Personne n'est plus à risque"], answer: 0, why: "L'OMS cite les jeunes enfants et les femmes enceintes parmi les plus à risque." }
          ]
        },
        {
          title: "Une moustiquaire imprégnée chaque nuit",
          objectives: ["O2"],
          minutes: 5,
          goal: "Installer une moustiquaire imprégnée, la border et réparer tous les trous.",
          text: [
            "Une moustiquaire traitée avec un insecticide (souvent appelée MII ou moustiquaire à longue durée d'action) est l'un des principaux moyens recommandés par l'OMS pour prévenir le paludisme. La moustiquaire empêche les moustiques de vous atteindre pendant que vous dormez, et l'insecticide tue ou affaiblit ceux qui se posent dessus. L'OMS indique que les nouveaux types de moustiquaires protègent mieux là où les moustiques ne meurent plus avec l'ancien insecticide.",
            "Une moustiquaire ne marche que si on l'utilise chaque nuit, toute l'année, pas seulement en saison des pluies. Accrochez-la au-dessus du lit ou de la natte pour qu'elle touche le sol, bordez les bords sous le matelas ou la natte avant la nuit, et entrez sans laisser d'ouverture. S'il n'y a pas assez de moustiquaires pour tout le monde, les jeunes enfants et les femmes enceintes dorment dessous en premier, puis cherchez des moustiquaires pour les autres.",
            "Entretenez-la : cherchez les trous chaque semaine et cousez-les ou faites un nœud tout de suite. Lavez-la doucement et pas trop souvent, et séchez-la à l'ombre, en suivant les instructions du paquet ou de votre agent de santé. N'utilisez pas les moustiquaires pour pêcher, faire des clôtures ou protéger les jardins. Beaucoup de programmes nationaux donnent des moustiquaires gratuites dans les centres de santé, lors des visites prénatales, dans les écoles ou pendant les campagnes : demandez à votre centre de santé ou à votre agent de santé communautaire."
          ],
          steps: ["Accrochez la moustiquaire au-dessus du lit ou de la natte pour qu'elle touche le sol.", "Bordez les bords sous le matelas ou la natte avant la nuit.", "Entrez sans laisser d'ouverture, chaque nuit.", "Cherchez les trous chaque semaine et fermez-les tout de suite.", "Lavez-la doucement, pas trop souvent, et séchez-la à l'ombre.", "Demandez des moustiquaires gratuites à votre centre de santé ou à votre agent de santé communautaire."],
          words: [["Insecticide", "un produit chimique qui tue les insectes."], ["MII (moustiquaire imprégnée d'insecticide)", "une moustiquaire traitée avec un insecticide pour éloigner et tuer les moustiques."], ["Campagne", "une période où les agents de santé distribuent des moustiquaires ou des services à beaucoup de gens."]],
          slides: [
            { title: "Pourquoi une moustiquaire imprégnée marche", bullets: ["Elle arrête les moustiques pendant votre sommeil", "L'insecticide les tue ou les affaiblit", "L'un des principaux moyens de l'OMS contre le paludisme"] },
            { title: "Chaque nuit, toute l'année", bullets: ["La moustiquaire touche le sol", "Bordée avant la nuit, sans ouverture", "Pas assez de moustiquaires ? Enfants et femmes enceintes d'abord"] },
            { title: "Entretenez-la", bullets: ["Cherchez les trous chaque semaine ; fermez-les", "Lavez doucement, pas souvent ; séchez à l'ombre", "Jamais pour pêcher ni pour les jardins"] },
            { title: "Obtenir des moustiquaires", bullets: ["Centres de santé, visites prénatales, écoles, campagnes", "Demandez à votre centre de santé ou à votre agent de santé communautaire"] }
          ],
          sources: [WHO_MALARIA],
          tryIt: "Ce soir, vérifiez toutes les moustiquaires de la maison. Accrochez chacune pour qu'elle touche le sol, bordez-la et fermez les trous. Comptez combien de moustiquaires il manque à votre famille.",
          youCanNow: "accrocher, border et entretenir une moustiquaire imprégnée pour que tout le monde, en commençant par les plus à risque, dorme dessous chaque nuit.",
          quickCheck: [
            { objective: "O2", q: "Quand votre famille doit-elle dormir sous la moustiquaire ?", options: ["Seulement en saison des pluies", "Seulement quand quelqu'un est malade", "Chaque nuit, toute l'année", "Seulement le week-end"], answer: 2, why: "Les moustiques peuvent piquer et transmettre le paludisme toute l'année ; la moustiquaire ne marche que si on l'utilise chaque nuit." },
            { objective: "O2", q: "Vous trouvez un petit trou dans la moustiquaire. Que faites-vous ?", options: ["Jeter la moustiquaire", "L'utiliser pour pêcher", "Attendre que le trou soit plus grand", "Le coudre ou faire un nœud tout de suite"], answer: 3, why: "Les moustiques passent par les petits trous ; les fermer tout de suite garde la moustiquaire efficace." }
          ]
        },
        {
          title: "Moins de moustiques et moins de piqûres autour de la maison",
          objectives: ["O3"],
          minutes: 5,
          goal: "Supprimer ou couvrir les endroits où les moustiques se reproduisent et les empêcher d'entrer dans la maison.",
          text: [
            "Les moustiques pondent leurs œufs dans l'eau stagnante. Les flaques, les vieux pneus, les boîtes de conserve, les pots cassés, les caniveaux bouchés, les fûts et les seaux d'eau sans couvercle peuvent tous devenir des gîtes tout près de l'endroit où dort votre famille.",
            "Autour de la maison : videz ou retournez les objets qui gardent l'eau ; couvrez les fûts, les seaux et les réservoirs avec un couvercle ou un tissu bien serré ; dégagez les gouttières et les caniveaux bouchés ; remplissez les flaques avec de la terre. Faites-le chaque semaine, surtout en saison des pluies, et travaillez avec vos voisins, car les moustiques volent d'une maison à l'autre.",
            "Gardez-les dehors et évitez les piqûres : fermez portes et fenêtres à la tombée de la nuit et posez des grillages aux fenêtres et sous le toit si vous pouvez. Le soir, portez des manches longues et un pantalon long ou un pagne long. Les répulsifs au DEET, à l'IR3535 ou à l'icaridine peuvent aider après la tombée de la nuit ; utilisez-les comme l'indique l'étiquette. Les spirales et les diffuseurs peuvent aussi aider, mais ne remplacent jamais la moustiquaire. Si les équipes de pulvérisation du programme de santé viennent traiter l'intérieur des maisons (pulvérisation intradomiciliaire d'insecticide), laissez-les entrer et suivez leurs conseils : ne lavez pas et ne peignez pas les murs ensuite."
          ],
          steps: ["Faites le tour de la maison et trouvez tout ce qui garde de l'eau stagnante.", "Videz-le, retournez-le, couvrez-le ou enlevez-le.", "Dégagez les caniveaux bouchés et remplissez les flaques.", "Fermez portes et fenêtres à la tombée de la nuit ; posez des grillages si vous pouvez.", "Couvrez bras et jambes le soir ; utilisez un répulsif comme l'indique l'étiquette.", "Laissez entrer les équipes de pulvérisation du programme de santé."],
          words: [["Gîte larvaire", "eau stagnante où les moustiques pondent leurs œufs."], ["Répulsif", "une crème ou un spray qui éloigne les moustiques de la peau."], ["Pulvérisation intradomiciliaire (PID)", "des agents de santé qui pulvérisent un insecticide sur les murs intérieurs pour tuer les moustiques qui s'y posent."]],
          slides: [
            { title: "Les moustiques naissent dans l'eau stagnante", bullets: ["Flaques, pneus, boîtes de conserve, pots cassés", "Caniveaux bouchés, fûts et seaux ouverts"] },
            { title: "Chaque semaine autour de la maison", bullets: ["Videz ou retournez ce qui garde l'eau", "Couvrez fûts, seaux et réservoirs", "Dégagez les caniveaux ; remplissez les flaques ; avec les voisins"] },
            { title: "Gardez-les dehors, évitez les piqûres", bullets: ["Portes et fenêtres fermées à la nuit tombante ; grillages", "Manches longues et pantalon long le soir", "Répulsif selon l'étiquette ; jamais à la place de la moustiquaire"] },
            { title: "Équipes de pulvérisation", bullets: ["La pulvérisation intérieure tue les moustiques posés", "Laissez entrer les équipes du programme de santé", "Suivez leurs conseils ensuite"] }
          ],
          sources: [WHO_MALARIA, WHO_WATER],
          tryIt: "Faites le tour de votre maison maintenant. Notez chaque endroit avec de l'eau stagnante. Videz, couvrez ou enlevez-en au moins trois aujourd'hui, et prévoyez de vérifier à nouveau chaque semaine.",
          youCanNow: "supprimer les gîtes de moustiques autour de votre maison et réduire les piqûres le soir.",
          quickCheck: [
            { objective: "O3", q: "Où les moustiques pondent-ils leurs œufs ?", options: ["Dans le sable sec", "Dans l'eau stagnante, comme les flaques, les pneus et les seaux ouverts", "Dans le feu de cuisine", "Dans le pain"], answer: 1, why: "Les moustiques ont besoin d'eau stagnante pour pondre leurs œufs." },
            { objective: "O3", q: "Vous utilisez une spirale antimoustique le soir. Qu'est-ce qui est vrai ?", options: ["Elle peut aider, mais vous dormez quand même sous une moustiquaire", "Vous n'avez plus besoin de moustiquaire", "Elle guérit le paludisme", "Elle doit brûler toute la nuit à côté du bébé"], answer: 0, why: "Les spirales et les répulsifs ajoutent de la protection mais ne remplacent jamais la moustiquaire." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Arrêter la piqûre",
        questions: [
          { objective: "O1", q: "Quand les moustiques du paludisme piquent-ils surtout ?", options: ["À midi", "Seulement le matin", "En fin de soirée et la nuit", "Seulement en saison sèche"], answer: 2, why: "Les anophèles piquent surtout en fin de soirée et la nuit, souvent pendant que les gens dorment." },
          { objective: "O2", q: "Votre famille a trois moustiquaires et cinq personnes. Qui dort sous les moustiquaires en premier ?", options: ["Le père et les fils aînés", "Les visiteurs", "Le premier qui se couche", "Les jeunes enfants et la femme enceinte"], answer: 3, why: "Les jeunes enfants et les femmes enceintes sont les plus à risque, donc ils passent en premier pendant que vous trouvez d'autres moustiquaires." },
          { objective: "O2", q: "Comment faut-il installer une moustiquaire ?", options: ["Elle touche le sol et elle est bordée avant la nuit", "Roulée au-dessus du lit", "Sur la moitié du lit", "Seulement sur le visage"], answer: 0, why: "Une moustiquaire qui touche le sol et qui est bordée ne laisse aucune ouverture aux moustiques." },
          { objective: "O3", q: "Derrière votre maison, il y a de vieux pneus pleins d'eau de pluie. Que faites-vous ?", options: ["Les laisser ; ils ne sont pas à vous", "Les vider et les ranger au sec, ou les enlever", "Ajouter de l'eau", "Les couvrir avec une moustiquaire"], answer: 1, why: "L'eau dans les pneus est un gîte ; les vider ou les enlever empêche les moustiques de se reproduire." },
          { objective: "O3", q: "Des agents de santé viennent pulvériser les murs intérieurs de votre maison. Que faites-vous ?", options: ["Les refuser", "Laver les murs juste après", "Les laisser entrer et suivre leurs conseils ensuite", "Repeindre par-dessus le jour même"], answer: 2, why: "La pulvérisation intradomiciliaire est une mesure clé de l'OMS ; laver ou peindre les murs l'empêche de marcher." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Protéger les plus à risque et agir vite",
      lessons: [
        {
          title: "Protéger les femmes enceintes et les jeunes enfants",
          objectives: ["O4"],
          minutes: 5,
          goal: "Lister les services contre le paludisme que votre centre de santé offre aux femmes enceintes et aux jeunes enfants et prévoir les visites.",
          text: [
            "Le paludisme pendant la grossesse peut faire du mal à la mère et au bébé : l'OMS indique qu'il peut faire naître le bébé trop tôt ou trop petit. Une femme enceinte doit commencer les visites prénatales tôt et aller à chacune. Aux consultations prénatales de beaucoup de pays, elle peut recevoir une moustiquaire imprégnée, un test du paludisme et, là où le programme national le propose, un médicament préventif contre le paludisme pendant la grossesse (l'OMS l'appelle TPIp, traitement préventif intermittent pendant la grossesse). L'agent de santé décide de ce dont elle a besoin et quand. Ne prenez jamais de médicament contre le paludisme pendant la grossesse sans un agent de santé.",
            "Pour les jeunes enfants : l'OMS recommande deux vaccins contre le paludisme (RTS,S et R21) pour les enfants des zones où le paludisme est fréquent, et ils sont ajoutés aux vaccinations de routine des enfants dans beaucoup de pays africains. Dans certaines zones, par exemple une partie du Sahel comme le Burkina Faso et le Mali, les agents de santé donnent aussi aux jeunes enfants un médicament préventif pendant la saison des pluies (chimioprévention du paludisme saisonnier). Demandez à votre centre de santé ce qui est proposé là où vous vivez et gardez le carnet de santé de l'enfant à jour.",
            "Les vaccins et les médicaments préventifs ajoutent de la protection, mais l'OMS indique qu'ils marchent mieux avec les moustiquaires. Continuez à utiliser la moustiquaire chaque nuit. Notez les dates du centre de santé dans votre plan, et demandez à votre agent de santé communautaire si vous ne pouvez pas aller au centre."
          ],
          steps: ["Femme enceinte : commencez les visites prénatales tôt et allez à chacune.", "Aux consultations prénatales, demandez une moustiquaire, un test et un médicament préventif contre le paludisme.", "Enfant : demandez au centre de santé si les vaccins contre le paludisme sont donnés là où vous vivez et gardez le carnet de santé à jour.", "Demandez s'il y a des campagnes de médicament préventif en saison des pluies dans votre zone.", "Notez chaque date du centre de santé dans votre plan et continuez à utiliser les moustiquaires."],
          words: [["Consultation prénatale", "les visites de santé d'une femme pendant la grossesse."], ["Vaccin", "un médicament, souvent une piqûre, qui aide le corps à se protéger d'une maladie."], ["Médicament préventif", "un médicament donné par un agent de santé pour empêcher une maladie avant qu'elle commence."], ["Carnet de santé", "la carte ou le carnet où le centre de santé note les vaccins et les visites d'un enfant."]],
          slides: [
            { title: "Le paludisme pendant la grossesse", bullets: ["Peut faire du mal à la mère et au bébé", "Bébé né trop tôt ou trop petit", "Commencez les visites prénatales tôt ; allez à chacune"] },
            { title: "Aux consultations prénatales, demandez", bullets: ["Une moustiquaire imprégnée et un test du paludisme", "Un médicament préventif là où il est proposé (TPIp)", "Jamais de médicament antipaludique sans agent de santé"] },
            { title: "Jeunes enfants", bullets: ["Vaccins RTS,S et R21 là où ils sont proposés", "Médicament préventif en saison des pluies dans certaines zones", "Gardez le carnet de santé à jour"] },
            { title: "Toujours la moustiquaire", bullets: ["Vaccins et médicaments marchent mieux avec les moustiquaires", "Notez les dates du centre de santé dans votre plan", "Demandez de l'aide à votre agent de santé communautaire"] }
          ],
          sources: [WHO_MALARIA],
          tryIt: "Si quelqu'un dans votre maison est enceinte ou a moins de 5 ans, notez la prochaine date au centre de santé pour chacun et les questions que vous poserez sur les moustiquaires, les vaccins et les médicaments préventifs. Si ce n'est pas le cas, faites-le pour un voisin ou un parent que vous pouvez aider.",
          youCanNow: "nommer les services du centre de santé qui protègent les femmes enceintes et les jeunes enfants du paludisme et prévoir les visites.",
          quickCheck: [
            { objective: "O4", q: "Une femme de votre famille est enceinte. Quelle est la première étape pour la protéger du paludisme ?", options: ["Attendre le dernier mois", "Acheter un médicament contre le paludisme au marché", "Commencer les visites prénatales tôt, dormir sous une moustiquaire et demander une protection contre le paludisme", "Arrêter de manger des fruits"], answer: 2, why: "Des visites prénatales tôt et une moustiquaire lui donnent la protection proposée par le centre de santé." },
            { objective: "O4", q: "Votre enfant a reçu le vaccin contre le paludisme. Et la moustiquaire ?", options: ["La jeter", "L'utiliser seulement en saison des pluies", "La donner aux voisins", "Continuer à l'utiliser chaque nuit ; les vaccins marchent mieux avec les moustiquaires"], answer: 3, why: "L'OMS indique que les vaccins donnent le plus de bénéfice avec les moustiquaires et les autres mesures." }
          ]
        },
        {
          title: "Fièvre : faites un test le jour même",
          objectives: ["O5"],
          minutes: 5,
          goal: "Emmener un membre de la famille qui a de la fièvre faire un test du paludisme le jour même.",
          text: [
            "Dans une zone de paludisme, considérez toute fièvre comme un paludisme possible jusqu'à ce qu'un test dise le contraire. Le paludisme commence souvent comme beaucoup d'autres maladies, avec de la fièvre, des frissons, des maux de tête et des douleurs dans le corps, donc on ne peut pas savoir juste en regardant. L'OMS recommande de confirmer chaque cas suspect par un test, un test de diagnostic rapide ou un microscope, avant le traitement.",
            "Allez le jour même dans un centre de santé, un dispensaire ou chez un agent de santé communautaire formé qui peut faire le test. Un test rapide prend une goutte de sang au bout du doigt et donne le résultat en quelques minutes. Chez un enfant de moins de 5 ans, une fièvre ne doit jamais attendre le lendemain.",
            "Si le test montre un paludisme, l'agent de santé choisit le médicament et vous dit comment le prendre. Prenez-le en entier, exactement comme indiqué, même si la personne se sent mieux. N'utilisez pas de restes de médicaments, de médicaments prévus pour quelqu'un d'autre ou de médicaments inconnus achetés au marché ou à un vendeur ambulant : ils peuvent être du mauvais type, en trop petite quantité ou faux. Si le test est négatif, l'agent de santé cherche une autre cause. Si la personne ne va pas mieux, ou va plus mal, retournez-y."
          ],
          steps: ["De la fièvre dans une zone de paludisme ? Considérez-la comme un paludisme possible.", "Allez le jour même au centre de santé ou chez un agent de santé communautaire qui peut faire le test.", "Si c'est le paludisme : prenez le médicament exactement comme le dit l'agent de santé, en entier.", "N'utilisez jamais de restes, de médicaments empruntés ou inconnus.", "Pas mieux ou plus mal ? Retournez-y tout de suite."],
          words: [["Test de diagnostic rapide (TDR)", "un test rapide avec une goutte de sang du doigt qui montre le paludisme en quelques minutes."], ["Résultat négatif", "le test n'a pas trouvé de paludisme."], ["Faux médicament", "un médicament qui a l'air vrai mais qui a la mauvaise quantité ou rien d'efficace."]],
          slides: [
            { title: "Chaque fièvre peut être le paludisme", bullets: ["Fièvre, frissons, maux de tête, douleurs", "On ne peut pas savoir juste en regardant", "OMS : un test avant le traitement"] },
            { title: "Faites le test le jour même", bullets: ["Centre de santé ou agent de santé communautaire formé", "Test rapide : une goutte de sang, quelques minutes", "Enfant de moins de 5 ans : jamais attendre le lendemain"] },
            { title: "Si c'est le paludisme", bullets: ["L'agent de santé choisit le médicament", "Prenez-le en entier, exactement comme indiqué", "Pas mieux ou plus mal ? Retournez-y"] },
            { title: "Jamais", bullets: ["Restes de médicaments ou médicaments empruntés", "Médicaments inconnus d'un vendeur ambulant", "Ils peuvent être mauvais, insuffisants ou faux"] }
          ],
          sources: [WHO_MALARIA, CDC_MALARIA],
          tryIt: "Trouvez où votre famille peut faire un test du paludisme le jour même : le centre de santé ou l'agent de santé communautaire le plus proche, les horaires et comment vous y iriez. Notez-le dans votre plan.",
          youCanNow: "faire tester chaque fièvre le jour même et suivre seulement le traitement de l'agent de santé, en entier.",
          quickCheck: [
            { objective: "O5", q: "Votre enfant a de la fièvre le soir. Que faites-vous ?", options: ["Faire un test du paludisme le jour même au centre de santé ou chez un agent de santé communautaire", "Attendre trois jours", "Donner le reste du médicament de la dernière fois", "Acheter un médicament à un vendeur ambulant"], answer: 0, why: "L'OMS conseille de tester avant de traiter, et la fièvre d'un enfant ne doit pas attendre." },
            { objective: "O5", q: "Après deux jours de médicament contre le paludisme, votre mari se sent mieux. Que doit-il faire ?", options: ["Arrêter et garder le reste pour la prochaine fois", "Tout finir exactement comme l'a dit l'agent de santé", "Donner le reste à un voisin", "Doubler la prochaine prise"], answer: 1, why: "Arrêter trop tôt peut faire revenir le paludisme ; prenez tout comme indiqué." }
          ]
        },
        {
          title: "Signes de danger du paludisme grave et plan de votre famille",
          objectives: ["O6"],
          minutes: 5,
          goal: "Repérer les signes de danger du paludisme grave et emmener la personne au centre de santé tout de suite.",
          text: [
            "Le paludisme peut devenir grave très vite, surtout chez les jeunes enfants et les femmes enceintes. Le paludisme grave est une urgence.",
            "L'OMS cite ces signes de danger. Allez au centre de santé ou à l'hôpital MAINTENANT, de jour comme de nuit, si la personne : est très fatiguée ou faible, ou ne peut pas s'asseoir ou se tenir debout ; est confuse, très somnolente ou difficile à réveiller ; a des convulsions, surtout plus d'une fois ; a du mal à respirer ; a des urines foncées ou avec du sang ; a les yeux ou la peau jaunes ; ou saigne de façon inhabituelle. Un enfant qui ne peut pas boire ou téter, ou qui vomit tout, doit aussi aller au centre de santé maintenant.",
            "Préparez-vous avant que cela arrive : écrivez les signes de danger et le nom, le lieu et le numéro de téléphone du centre de santé, de l'hôpital et de l'agent de santé communautaire les plus proches sur une carte accrochée au mur ; sachez comment vous irez là-bas la nuit ; et mettez de côté un peu d'argent pour le transport si vous pouvez. Ensuite, mettez tout ce que vous avez appris dans ce cours dans le plan antipaludisme de votre foyer."
          ],
          steps: ["Apprenez les signes de danger.", "Si vous en voyez un : allez au centre de santé ou à l'hôpital maintenant, de jour comme de nuit.", "Faites une carte avec les signes et les noms et numéros du centre de santé et de l'agent de santé les plus proches.", "Prévoyez comment vous voyagerez la nuit et gardez de l'argent pour le transport si vous pouvez.", "Écrivez le plan antipaludisme de votre foyer."],
          words: [["Paludisme grave", "un paludisme devenu dangereux pour la vie, qui demande un hôpital ou un centre de santé tout de suite."], ["Convulsions", "des secousses soudaines du corps que la personne ne peut pas contrôler."], ["Jaunisse", "couleur jaune des yeux ou de la peau."]],
          slides: [
            { title: "Le paludisme grave est une urgence", bullets: ["Il peut arriver vite", "Plus dangereux pour les jeunes enfants et les femmes enceintes"] },
            { title: "Allez-y MAINTENANT, jour ou nuit, si", bullets: ["Faiblesse extrême ; confusion ou difficile à réveiller", "Convulsions ; difficulté à respirer", "Urines foncées ou avec du sang ; yeux ou peau jaunes ; saignements", "L'enfant ne peut pas boire ou téter, ou vomit tout"] },
            { title: "Soyez prêt", bullets: ["Carte des signes de danger au mur", "Numéros du centre de santé, de l'hôpital et de l'agent de santé", "Plan de transport la nuit ; argent de côté si possible"] }
          ],
          sources: [WHO_MALARIA],
          tryIt: "Faites maintenant votre carte des signes de danger avec au moins quatre signes et le nom et le numéro du centre de santé ou de l'agent de santé communautaire le plus proche. Ensuite, écrivez le plan antipaludisme complet de votre foyer, selon la tâche finale.",
          youCanNow: "repérer les signes de danger du paludisme grave, obtenir de l'aide tout de suite et tenir un plan antipaludisme pour votre foyer.",
          quickCheck: [
            { objective: "O6", q: "Un enfant qui a le paludisme commence à avoir des convulsions. Que faites-vous ?", options: ["Attendre de voir si cela s'arrête", "Donner plus du même médicament", "Aller au centre de santé ou à l'hôpital maintenant", "Le laisser dormir pour que cela passe"], answer: 2, why: "Les convulsions sont un signe de danger du paludisme grave ; c'est une urgence." },
            { objective: "O6", q: "Lequel est un signe de danger du paludisme grave ?", options: ["Un léger mal de tête", "Avoir un peu chaud après le travail", "Avoir envie de manger", "Des yeux jaunes, ou des urines foncées ou avec du sang"], answer: 3, why: "L'OMS cite la jaunisse et les urines foncées ou avec du sang comme signes de danger qui demandent des soins d'urgence." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Protéger les plus à risque et agir vite",
        questions: [
          { objective: "O4", q: "Que peut recevoir une femme enceinte aux consultations prénatales dans beaucoup de pays ?", options: ["Des filets de pêche gratuits", "Une moustiquaire imprégnée, un test du paludisme et un médicament préventif là où le programme le propose", "Un médicament contre le paludisme à garder à la maison", "Rien sur le paludisme"], answer: 1, why: "Les consultations prénatales sont l'endroit où beaucoup de programmes donnent des moustiquaires, des tests et un médicament préventif pendant la grossesse." },
          { objective: "O4", q: "Quels vaccins contre le paludisme l'OMS recommande-t-elle pour les enfants des zones très touchées ?", options: ["RTS,S et R21", "Polio et rougeole", "Seulement le tétanos", "Il n'existe pas de vaccin contre le paludisme"], answer: 0, why: "L'OMS recommande RTS,S (depuis 2021) et R21 (depuis 2023) pour les enfants des zones où le paludisme est modéré à élevé." },
          { objective: "O5", q: "Pourquoi faire un test avant de soigner une fièvre ?", options: ["Les tests sont amusants", "Pour pouvoir vendre le médicament", "Parce que beaucoup de maladies ressemblent au paludisme ; le test montre si c'en est un", "Les tests remplacent les moustiquaires"], answer: 2, why: "Le paludisme ressemble à d'autres fièvres ; un test permet de donner le bon traitement." },
          { objective: "O5", q: "Un vendeur ambulant propose des comprimés contre le paludisme pas chers. Que faites-vous ?", options: ["Les acheter pour la famille", "Les acheter seulement pour les enfants", "Les partager avec les voisins", "Ne pas acheter ; se faire tester et soigner par un agent de santé"], answer: 3, why: "Un médicament inconnu peut être mauvais ou faux ; le test et le traitement d'un agent de santé sont sûrs." },
          { objective: "O6", q: "À minuit, votre fille qui a le paludisme est confuse et très difficile à réveiller. Que faites-vous ?", options: ["Aller au centre de santé ou à l'hôpital maintenant", "Attendre le matin", "Lui donner plus de médicament", "La mettre sous la moustiquaire et la laisser dormir"], answer: 0, why: "La confusion et la difficulté à se réveiller sont des signes de danger ; allez-y maintenant, de jour comme de nuit." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Protéger votre famille du paludisme",
    questions: [
      { objective: "O1", q: "Qu'est-ce qui transmet le paludisme d'une personne à l'autre ?", options: ["Les mouches", "Certains moustiques (anophèles)", "L'eau sale", "La toux"], answer: 1, why: "Le paludisme se transmet par la piqûre de moustiques anophèles infectés." },
      { objective: "O1", q: "Environ combien de temps après une piqûre les signes du paludisme commencent-ils en général ?", options: ["Dans l'heure", "Après un an", "10 à 15 jours", "Jamais"], answer: 2, why: "L'OMS indique que les symptômes apparaissent en général 10 à 15 jours après la piqûre infectante." },
      { objective: "O1", q: "Une cousine venue de Tunisie, où le paludisme local est rare, vous rend visite dans une zone de paludisme. Qu'est-ce qui est vrai ?", options: ["Elle ne risque rien parce qu'elle est adulte", "Elle ne peut pas attraper le paludisme", "Elle n'a besoin d'une moustiquaire qu'en saison des pluies", "Elle court un risque élevé, doit voir un agent de santé avant le voyage et dormir sous une moustiquaire"], answer: 3, why: "Les voyageurs venant de pays sans paludisme courent un risque élevé, donc ils se préparent avec un agent de santé." },
      { objective: "O2", q: "À quoi sert l'insecticide d'une moustiquaire imprégnée ?", options: ["Il tue ou affaiblit les moustiques qui se posent dessus", "Il donne une bonne odeur à la moustiquaire", "Il guérit le paludisme", "Il garde la moustiquaire propre"], answer: 0, why: "L'insecticide tue ou affaiblit les moustiques, donc la moustiquaire protège mieux." },
      { objective: "O2", q: "Comment faut-il sécher une moustiquaire lavée ?", options: ["En plein soleil pendant une semaine", "À l'ombre, après un lavage doux", "Au-dessus du feu de cuisine", "Mouillée, sur le lit"], answer: 1, why: "Un lavage doux et un séchage à l'ombre aident la moustiquaire à rester efficace." },
      { objective: "O2", q: "Quelle utilisation d'une moustiquaire est mauvaise ?", options: ["Au-dessus d'une natte pour dormir", "Au-dessus du berceau d'un bébé", "Comme clôture du potager", "Au-dessus du lit d'une femme enceinte"], answer: 2, why: "Les moustiquaires servent à dormir dessous ; les utiliser pour les jardins ou la pêche laisse les gens sans protection." },
      { objective: "O3", q: "Quelle tâche réduit la reproduction des moustiques à la maison ?", options: ["Laisser les seaux sans couvercle", "Garder de vieux pneus dans la cour", "Dormir dehors", "Vider, couvrir ou enlever ce qui garde de l'eau stagnante"], answer: 3, why: "Enlever l'eau stagnante supprime les endroits où les moustiques pondent." },
      { objective: "O3", q: "Quand faut-il fermer portes et fenêtres pour empêcher les moustiques d'entrer ?", options: ["À la tombée de la nuit", "À midi", "Seulement le dimanche", "Jamais"], answer: 0, why: "Les moustiques du paludisme piquent surtout à partir de la fin de soirée et la nuit." },
      { objective: "O3", q: "Pourquoi agir avec les voisins contre l'eau stagnante ?", options: ["Pour emprunter leurs pneus", "Parce que les moustiques volent d'une maison à l'autre", "Pour qu'ils paient", "Cela n'a pas d'importance"], answer: 1, why: "Les gîtes de la maison voisine envoient aussi des moustiques chez vous." },
      { objective: "O4", q: "L'OMS indique que le paludisme pendant la grossesse peut faire...", options: ["Rien du tout", "Des jumeaux", "Naître le bébé trop tôt ou trop petit", "Seulement un petit rhume"], answer: 2, why: "Le paludisme pendant la grossesse peut entraîner une naissance trop tôt et un faible poids à la naissance." },
      { objective: "O4", q: "Où savoir si les vaccins contre le paludisme sont donnés aux enfants là où vous vivez ?", options: ["Un message sur les réseaux sociaux", "Le marché", "Ce que devine un voisin", "Votre centre de santé ou votre agent de santé communautaire"], answer: 3, why: "Les programmes de vaccination changent selon les endroits ; le centre de santé sait ce qui est proposé." },
      { objective: "O4", q: "Dans une partie du Sahel, que donnent les agents de santé aux jeunes enfants en saison des pluies ?", options: ["Un médicament préventif contre le paludisme lors de campagnes", "Des téléphones gratuits", "Des filets de pêche", "Rien"], answer: 0, why: "La chimioprévention du paludisme saisonnier est donnée aux jeunes enfants pendant les saisons à haut risque dans certaines zones." },
      { objective: "O5", q: "Que recommande l'OMS avant de soigner un cas de paludisme suspect ?", options: ["Attendre une semaine", "Un test rapide ou au microscope", "Demander à un voisin", "Acheter deux sortes de médicaments"], answer: 1, why: "L'OMS recommande de confirmer chaque cas suspect par un test avant le traitement." },
      { objective: "O5", q: "Il vous reste des comprimés du paludisme de l'an dernier. Votre fils a de la fièvre. Que faites-vous ?", options: ["Lui donner les vieux comprimés", "Lui donner la moitié des vieux comprimés", "L'emmener faire un test aujourd'hui ; ne pas utiliser les restes", "Attendre de voir"], answer: 2, why: "Les restes peuvent être du mauvais type ou en trop petite quantité ; faites d'abord le test et suivez l'agent de santé." },
      { objective: "O5", q: "Le test du paludisme était négatif, mais votre enfant a encore de la fièvre deux jours après. Que faites-vous ?", options: ["Ne plus s'inquiéter", "Donner quand même un médicament contre le paludisme", "Attendre une semaine de plus", "Retourner voir l'agent de santé"], answer: 3, why: "Si la fièvre continue ou s'aggrave, l'agent de santé doit examiner de nouveau." },
      { objective: "O5", q: "Qui décide quel médicament contre le paludisme prendre et en quelle quantité ?", options: ["Un agent de santé formé, après un test", "La personne malade", "Un vendeur du marché", "Un SMS"], answer: 0, why: "Seul un agent de santé peut choisir le bon médicament et la bonne quantité après un test." },
      { objective: "O6", q: "Lequel de ces signes veut dire : allez au centre de santé maintenant ?", options: ["Le nez qui coule", "La difficulté à respirer", "Avoir faim", "Une petite coupure"], answer: 1, why: "La difficulté à respirer est un signe de danger du paludisme grave." },
      { objective: "O6", q: "Un bébé qui a de la fièvre refuse de téter et vomit tout. Que faites-vous ?", options: ["Réessayer demain", "Donner seulement de l'eau et attendre", "Aller au centre de santé maintenant", "Donner un médicament pour adulte"], answer: 2, why: "Un enfant qui ne peut pas boire ou qui vomit tout doit aller au centre de santé tout de suite." },
      { objective: "O6", q: "Qu'est-ce qui vous aide à agir vite la nuit en cas d'urgence ?", options: ["Rien ; vous vous en souviendrez", "Une liste de médicaments et de doses", "Le code PIN de votre argent mobile", "Une carte des signes de danger avec les numéros du centre de santé et un plan de transport la nuit"], answer: 3, why: "Connaître les signes, qui appeler et comment y aller fait gagner du temps." },
      { objective: "O1", q: "Le paludisme peut-il passer d'une personne à l'autre par le toucher ou en partageant la nourriture ?", options: ["Non ; il se transmet par les piqûres de moustiques", "Oui, par le toucher", "Oui, en partageant la nourriture", "Oui, par l'air"], answer: 0, why: "L'OMS indique que le paludisme ne passe pas directement d'une personne à l'autre ; ce sont les moustiques qui le transmettent." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 2, 3, 6, 9, 12, 13, 16] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Qui est à risque", objective: "O1", notYet: "Personne n'est marqué comme le plus à risque, ou le plan ne dit pas comment le paludisme se transmet.", meets: "Les jeunes enfants, les femmes enceintes et les autres personnes à haut risque de la maison sont nommés, avec la piqûre de moustique la nuit comme cause.", exceeds: "Le plan prévoit aussi les visiteurs ou les voyageurs venant de pays sans paludisme." },
      { name: "Moustiquaires chaque nuit", objective: "O2", notYet: "Les moustiquaires sont comptées mais pas qui dort dessous, ou les trous ne sont pas mentionnés.", meets: "Chaque endroit où l'on dort a une moustiquaire, les plus à risque d'abord, avec une recherche de trous chaque semaine et un entretien doux.", exceeds: "Les moustiquaires qui manquent sont comptées et l'apprenant a demandé au centre de santé ou à l'agent de santé communautaire comment les obtenir." },
      { name: "Moins de moustiques", objective: "O3", notYet: "Moins de trois actions, ou des actions qui n'enlèvent pas l'eau stagnante et n'empêchent pas les piqûres.", meets: "Au moins trois actions, comme vider les récipients, couvrir les fûts, dégager les caniveaux et fermer les portes à la tombée de la nuit.", exceeds: "Un jour de vérification est fixé chaque semaine et les voisins participent." },
      { name: "Services du centre de santé", objective: "O4", notYet: "Aucune visite au centre de santé n'est prévue pour une femme enceinte ou un jeune enfant de la maison.", meets: "Les visites prénatales et les dates de consultation de l'enfant sont notées, avec des questions sur les moustiquaires, les vaccins et les médicaments préventifs.", exceeds: "Les visites sont réservées ou faites, et le carnet de santé de l'enfant est à jour." },
      { name: "En cas de fièvre", objective: "O5", notYet: "Le plan prévoit de soigner à la maison avec des restes de médicaments ou des médicaments du marché, ou d'attendre de voir.", meets: "Un test le jour même dans un centre de santé ou chez un agent de santé communautaire nommé, et le traitement complet comme le dit l'agent de santé.", exceeds: "Les horaires et un autre endroit pour faire le test sont aussi notés." },
      { name: "Carte des signes de danger", objective: "O6", notYet: "Moins de quatre signes de danger, ou aucun contact de centre de santé.", meets: "Au moins quatre signes de danger et le nom et le numéro du centre de santé ou de l'agent de santé le plus proche.", exceeds: "Il y a aussi un plan de transport la nuit, et aucun nom de médicament ni dose sur la carte." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Foyers où chaque personne, en commençant par les jeunes enfants et les femmes enceintes, dort sous une moustiquaire 30 jours après (enquête de suivi)",
      "Familles qui font un test du paludisme le jour même pour la fièvre d'un enfant, selon les familles ou les agents de santé communautaires",
      "Plus de femmes enceintes qui commencent les consultations prénatales tôt et plus d'enfants à jour de leurs vaccins là où les vaccins contre le paludisme sont proposés",
      "Moins d'enfants qui arrivent tard au centre de santé avec un paludisme grave pendant la prochaine saison des pluies"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Une moustiquaire imprégnée pour s'entraîner à l'installer et à la vérifier (ou celle de l'apprenant)",
      "Une aiguille et du fil pour fermer les trous",
      "Du papier et un stylo pour le plan du foyer et la carte des signes de danger",
      "Environ 60 minutes en tout, en séances courtes : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Convient bien aux clubs de mères, aux groupes prénatals, aux écoles, aux groupes religieux, aux groupements d'agriculteurs et aux visites de l'agent de santé communautaire ; faites le test de départ ensemble.",
      "Installez une moustiquaire ensemble pendant la leçon 2 et faites le tour du lieu de réunion pour trouver de l'eau stagnante pendant la leçon 3.",
      "Invitez l'agent de santé communautaire ou l'infirmier du centre de santé local à dire ce que le centre propose : moustiquaires gratuites, tests, vaccins et médicaments préventifs changent selon le pays et la zone.",
      "Ne nommez pas de médicaments contre le paludisme et ne donnez pas de doses ; renvoyez toutes les questions de traitement au centre de santé, à l'agent de santé communautaire ou au ministère de la Santé.",
      "Utilisez les messages actuels du programme national de lutte contre le paludisme pendant les campagnes et la saison des pluies.",
      "Notez la tâche finale avec la grille d'évaluation et donnez un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
