"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-ipm-pest-control.js). See scripts/koachlearn-courses/README.md, "Translations".

const FAO_IPM = { name: "FAO : Lutte intégrée contre les ravageurs", url: "https://www.fao.org/pest-and-pesticide-management/ipm/integrated-pest-management/en/" };
const CIMMYT_FAW = { name: "CIMMYT, USAID et partenaires : La chenille légionnaire d'automne en Afrique : guide de lutte intégrée (2018)", url: "https://repository.cimmyt.org/handle/10883/19204" };
const FAO_FAMEWS = { name: "FAO : application mobile pour aider la lutte contre la chenille légionnaire d'automne en Afrique (FAMEWS)", url: "https://www.fao.org/newsroom/detail/FAO-launches-mobile-application-to-support-fight-against-Fall-Armyworm-in-Africa/en" };
const ICIPE_TUTA = { name: "icipe : Insecte du mois : la mineuse de la tomate, Tuta absoluta", url: "https://www.icipe.org/news/insect-month-february-tomato-leafminer-tuta-absoluta" };
const ICIPE_PP_FAW = { name: "icipe : La technologie push-pull arrête la chenille légionnaire d'automne", url: "https://www.icipe.org/news/icipe-push-pull-technology-halts-fall-armyworm-rampage" };
const ICIPE_PP_HOW = { name: "icipe : Une nouvelle étude explique comment le push-pull vient à bout de la chenille légionnaire d'automne (rôle du desmodium et du brachiaria)", url: "https://www.icipe.org/news/new-study-unravels-mechanisms-through-which-icipe-push-pull-technology-conquers-fall-armyworm" };
const ICIPE_PP_GUIDE = { name: "icipe : Guide du producteur pour le push-pull intelligent face au climat (édition révisée)", url: "https://technologytransfer.icipe.org/wp-content/uploads/2021/04/Climate_Smart_Push-Pull_English_Revised_Edition_Web_Version.pdf" };
const PCPB = { name: "Pest Control Products Board (PCPB, office des produits phytosanitaires du Kenya)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "National Agency for Food and Drug Administration and Control (NAFDAC, agence de contrôle des aliments et des médicaments du Nigeria)", url: "https://www.nafdac.gov.ng" };
const GHANA_EPA = { name: "Environmental Protection Authority (EPA, autorité de protection de l'environnement du Ghana)", url: "https://www.epa.gov.gh" };
const CILSS_CSP = { name: "CILSS / INSAH : guide d'homologation du Comité sahélien des pesticides (CSP)", url: "https://insah.cilss.int/wp-content/uploads/2023/08/GUIDE_CSP_FINAL_nov_2017_anglais.pdf" };

module.exports = {
  id: "agri-ipm-pest-control-fr",
  lang: "fr",
  translationOf: "agri-ipm-pest-control",
  category: "Agriculture (Africa)",
  name: "Lutte intégrée et lutte biologique contre les ravageurs",
  skills: "Prévenir les ravageurs avant qu'ils n'arrivent, Surveiller le champ et reconnaître la chenille légionnaire d'automne et Tuta absoluta, Décider quand agir avec des seuils et des fiches, Utiliser le push-pull, les ennemis naturels, les pièges et la lutte biologique, Utiliser les pesticides en toute sécurité et dans la légalité, en dernier recours",
  outcome: "écrire et appliquer un plan de lutte intégrée contre les ravageurs (IPM) pour une culture de votre exploitation : prévenir les ravageurs, surveiller le champ chaque semaine, décider avec un seuil quand agir, utiliser d'abord des moyens sans produits chimiques, et n'utiliser un pesticide homologué, en toute sécurité, que s'il est vraiment nécessaire.",
  about: [
    "Ce cours s'adresse aux petits producteurs et aux producteurs commerciaux en croissance, aux ouvriers agricoles, aux jeunes agripreneurs et aux agents de vulgarisation qui en ont assez de traiter encore et encore tout en perdant leurs récoltes. Les exemples portent sur le maïs, le sorgho, le haricot et la tomate au Kenya, au Nigeria, au Ghana et au Burkina Faso.",
    "Le chapitre 1 vous apprend à arrêter les ravageurs tôt : les quatre étapes de l'IPM (prévenir, surveiller, décider, agir), comment surveiller un champ et distinguer la chenille légionnaire d'automne et la mineuse de la tomate (Tuta absoluta) des autres dégâts, et comment utiliser un seuil et des fiches simples pour décider quand une intervention est rentable. Le chapitre 2 vous apprend à lutter avec moins de poison : le push-pull de l'icipe, les ennemis naturels, les pièges, les produits botaniques et biologiques et, en dernier recours, l'usage sûr et légal des pesticides, qui freine aussi la résistance.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche « À vous de jouer » dans votre propre champ. Les ravageurs et les produits autorisés changent d'un pays à l'autre : utilisez donc ce cours avec votre agent de vulgarisation, une clinique des plantes et l'autorité nationale des pesticides. Un court contrôle rapide suit chaque leçon, un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Écrivez un plan IPM pour une saison et une culture de votre propre exploitation (par exemple un demi-acre de maïs ou une parcelle de tomates) : les principaux ravageurs et maladies attendus, au moins trois mesures de prévention, une routine de surveillance hebdomadaire avec une fiche d'observation, le seuil d'intervention donné par la vulgarisation pour chaque ravageur principal, les moyens sans produits chimiques que vous utiliserez d'abord, et un plan pesticide de dernier recours (un produit vérifié sur la liste de votre autorité nationale, les règles de l'étiquette que vous suivrez, l'équipement de protection que vous porterez et la façon dont vous alternerez les groupes pour freiner la résistance).",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Petits producteurs et producteurs commerciaux en croissance, ouvriers agricoles, jeunes agripreneurs et agents de vulgarisation de toute l'Afrique, qui cultivent maïs, sorgho, riz, haricot, arachide, légumes et tomate. Beaucoup luttent contre la chenille légionnaire d'automne depuis son arrivée en Afrique en 2016, et les producteurs de tomate font face à Tuta absoluta.",
    startingPoint: "Ils savent nommer quelques ravageurs et traitent souvent quand ils voient des dégâts, souvent avec ce que propose le vendeur d'intrants. Peu surveillent leurs champs à jour fixe, tiennent des fiches sur les ravageurs, utilisent des seuils ou savent quels ennemis naturels les aident. Beaucoup traitent sans équipement de protection complet.",
    gap: "Traiter par habitude coûte de l'argent, tue les ennemis naturels, crée de la résistance, nuit à la santé et peut laisser des résidus que les acheteurs refusent. Les apprenants doivent prévenir les ravageurs, surveiller et noter, n'agir que lorsqu'un seuil montre que c'est rentable, utiliser d'abord des moyens sans produits chimiques, et utiliser des pesticides homologués en toute sécurité en dernier recours.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; beaucoup d'apprenants ont l'anglais ou le français comme seconde langue",
      "Appareils : un téléphone simple ou un smartphone ; une loupe aide, mais n'est pas indispensable",
      "Temps : des leçons d'environ 5 minutes, entre deux travaux des champs ; la pratique se fait dans le propre champ de l'apprenant",
      "Les règles changent selon le pays : les produits doivent figurer sur la liste de l'autorité nationale (par exemple le PCPB au Kenya, la NAFDAC au Nigeria, l'EPA au Ghana, le Comité sahélien des pesticides pour les pays du CILSS comme le Sénégal et le Burkina Faso)",
      "Sécurité : le cours ne donne jamais de noms de produits, de doses ni de délais avant récolte ; les apprenants suivent l'étiquette et leur agent de vulgarisation"
    ],
    prerequisites: "Aucun. « Production végétale et horticole durable » donne d'abord un court aperçu de l'IPM, et « Santé et fertilité du sol » aide pour la prévention."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "Pour une culture de votre propre exploitation", action: "lister les mesures de prévention qui empêchent les ravageurs de se multiplier avant le début de la saison", standard: "en nommant au moins trois mesures adaptées à votre culture" },
    { id: "O2", condition: "En parcourant votre propre champ une fois par semaine", action: "observer un nombre fixe de plantes et reconnaître la chenille légionnaire d'automne, Tuta absoluta et les ennemis naturels courants à leurs signes", standard: "en contrôlant au moins 50 plantes (ou 20 plants de tomate) et en notant ce que vous trouvez" },
    { id: "O3", condition: "À partir de vos comptages et d'un seuil donné par la vulgarisation", action: "décider s'il faut agir maintenant ou continuer à surveiller, et noter la décision", standard: "en respectant la règle du seuil à chaque fois" },
    { id: "O4", condition: "Face à un problème de ravageurs sur votre culture", action: "choisir et mettre en place des moyens sans produits chimiques comme le push-pull, les ennemis naturels, les pièges et les produits biologiques", standard: "avant tout usage d'un pesticide de synthèse" },
    { id: "O5", condition: "Quand un pesticide est vraiment nécessaire", action: "vérifier que le produit est homologué, suivre son étiquette et porter l'équipement de protection qu'elle indique", standard: "sans sauter aucune étape" },
    { id: "O6", condition: "Au fil d'une saison de décisions de traitement", action: "alterner les groupes de pesticides et tenir un registre des traitements pour freiner la résistance", standard: "sans jamais utiliser le même groupe deux fois de suite sur la même génération du ravageur" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Arrêter les ravageurs tôt",
      lessons: [
        {
          title: "Les quatre étapes de l'IPM, à commencer par la prévention",
          objectives: ["O1"],
          minutes: 5,
          goal: "Lister les mesures de prévention qui empêchent les ravageurs de se multiplier sur une de vos cultures.",
          text: [
            "La FAO (Organisation des Nations unies pour l'alimentation et l'agriculture) décrit la lutte intégrée contre les ravageurs (IPM, de l'anglais integrated pest management) comme le fait d'examiner tous les moyens de lutte, de combiner les bons, et de n'utiliser des pesticides que lorsqu'ils sont justifiés. Elle se fait en quatre étapes : prévenir, surveiller, décider et agir. La plus grande partie des économies vient de la première étape.",
            "Prévenir, c'est faire du champ un mauvais logement pour les ravageurs et un bon logement pour la culture. Semez des semences certifiées d'une variété adaptée à votre zone, et des variétés résistantes ou tolérantes quand elles existent. Faites une rotation des cultures pour que les ravageurs qui vivent dans le sol ou dans les résidus n'aient plus de nourriture : par exemple maïs, puis haricot, puis sorgho. Semez à temps et en même temps que vos voisins, pour que les ravageurs ne passent pas des champs tardifs aux champs précoces. Nourrissez le sol, car les plantes faibles sont attaquées en premier.",
            "Gardez le champ propre : arrachez et détruisez les plantes atteintes de virus ou de maladie, enlevez les repousses et les mauvaises herbes qui hébergent des ravageurs, et nettoyez les outils et les bottes. Pour la tomate, élevez les plants dans une pépinière propre et protégée par un filet, pour qu'ils arrivent au champ sans Tuta absoluta ni aleurodes (mouches blanches). Laissez des bordures fleuries et des haies, car elles nourrissent les insectes qui mangent les ravageurs.",
            "Une productrice du Ghana qui fait une rotation maïs-arachide, sème tôt avec ses voisins et arrache chaque semaine les plantes malades traite souvent beaucoup moins que celle qui sème du maïs sur la même parcelle à chaque saison."
          ],
          steps: ["Notez les principaux ravageurs et maladies de votre culture (demandez à la vulgarisation ou à une clinique des plantes).", "Choisissez des semences certifiées d'une variété adaptée, résistante ou tolérante.", "Prévoyez une rotation et semez à temps, en même temps que vos voisins.", "Prévoyez l'hygiène du champ : enlevez les plantes malades, les repousses et les mauvaises herbes hôtes ; nettoyez les outils.", "Laissez des bordures fleuries pour les ennemis naturels."],
          words: [["IPM", "lutte intégrée contre les ravageurs : prévenir les ravageurs, les surveiller, décider quand agir est rentable et combiner plusieurs moyens de lutte, avec des pesticides seulement quand c'est justifié."], ["Prévention", "les mesures prises avant l'arrivée des ravageurs pour qu'ils ne puissent pas se multiplier."], ["Rotation", "cultiver une plante différente sur la même parcelle à chaque saison."], ["Repousse", "une plante de la culture qui pousse toute seule à partir des graines de la saison passée et peut porter des ravageurs."]],
          slides: [
            { title: "L'IPM en quatre étapes", bullets: ["1. Prévenir", "2. Surveiller (observer le champ)", "3. Décider : est-ce rentable d'agir ?", "4. Agir : d'abord sans chimie, le pesticide en dernier"] },
            { title: "La prévention commence par la semence", bullets: ["Semences certifiées d'une variété adaptée", "Variétés résistantes ou tolérantes quand elles existent", "Nourrir le sol : les plantes faibles sont attaquées en premier"] },
            { title: "Affamer les ravageurs", bullets: ["Rotation : maïs, puis haricot, puis sorgho", "Semer à temps, avec les voisins", "Enlever les repousses et les mauvaises herbes hôtes"] },
            { title: "Garder le champ propre", bullets: ["Arracher et détruire les plantes malades", "Nettoyer outils et bottes", "Pépinière de tomates propre et sous filet", "Les bordures fleuries nourrissent les ennemis naturels"] }
          ],
          sources: [FAO_IPM],
          tryIt: "Choisissez une culture que vous ferez la saison prochaine. Écrivez ses trois pires ravageurs ou maladies, puis au moins trois mesures de prévention que vous prendrez avant de semer (semence, rotation, date de semis, hygiène, bordures).",
          youCanNow: "nommer les quatre étapes de l'IPM et lister les mesures de prévention qui empêchent les ravageurs de se multiplier sur votre culture.",
          quickCheck: [
            { objective: "O1", q: "Quelle étape de l'IPM fait en général économiser le plus d'argent ?", options: ["Traiter chaque semaine", "Acheter un produit plus fort", "La prévention avant l'arrivée des ravageurs", "Traiter le champ du voisin"], answer: 2, why: "La prévention empêche les ravageurs de se multiplier, donc il faut moins d'interventions ensuite." },
            { objective: "O1", q: "Votre maïs a subi de gros dégâts sur la même parcelle trois saisons de suite. Quelle mesure de prévention convient le mieux ?", options: ["Mettre la parcelle en haricot ou en arachide la saison prochaine", "Semer le maïs plus tard que vos voisins", "Laisser debout les tiges de maïs de la saison passée", "Semer des graines non certifiées gardées d'épis abîmés"], answer: 0, why: "La rotation casse le cycle du ravageur en lui retirant sa plante nourricière." }
          ]
        },
        {
          title: "Surveiller et reconnaître la chenille légionnaire d'automne et Tuta absoluta",
          objectives: ["O2"],
          minutes: 6,
          goal: "Parcourir un champ selon un trajet fixe et reconnaître la chenille légionnaire d'automne, Tuta absoluta et les ennemis naturels à leurs signes.",
          text: [
            "Surveiller, c'est parcourir votre champ à jour fixe et contrôler un nombre fixe de plantes, pour voir les problèmes tôt et pouvoir les compter. Surveillez au moins une fois par semaine, plus souvent pour le jeune maïs et pour la tomate. Marchez en W ou en zigzag pour couvrir tout le champ, pas seulement les bords. Dans le maïs, arrêtez-vous à cinq endroits et contrôlez 10 plantes à la suite à chaque arrêt, soit 50 plantes en tout. Dans une petite parcelle de tomates, contrôlez 20 plants répartis sur les planches.",
            "La chenille légionnaire d'automne est arrivée en Afrique en 2016 et se trouve maintenant dans la plus grande partie du continent. Sur le jeune maïs, cherchez de petites « fenêtres » (taches fines et transparentes) sur les feuilles, puis des trous irréguliers et des excréments humides qui ressemblent à de la sciure dans le cornet. La chenille porte un Y clair à l'envers sur la tête et quatre points sombres en carré près de la queue. Les masses d'œufs sont sur les feuilles, sous une couche d'écailles duveteuses. Une plante compte comme infestée si elle a des dégâts frais ou une chenille vivante.",
            "Tuta absoluta, la mineuse de la tomate, vient d'Amérique du Sud et s'est répandue en Afrique en quelques années ; l'icipe rapporte qu'en 2016, dans le nord du Nigeria, elle a détruit la plus grande partie de la récolte de tomates. Ses minuscules chenilles creusent des galeries à l'intérieur des feuilles, faisant des taches pâles et transparentes (des mines) avec des excréments sombres, et percent de petits trous dans les tiges et les fruits. L'adulte est un petit papillon gris-brun qui se cache le jour.",
            "Cherchez aussi vos alliés : coccinelles et leurs larves, chrysopes, araignées, perce-oreilles, fourmis et petites guêpes parasitoïdes, et les chenilles qui ont l'air malades, molles ou couvertes de champignon. La FAO note que les ennemis naturels tuent déjà beaucoup de chenilles légionnaires dans les champs africains. Si vous n'êtes pas sûr de ce que vous voyez, prenez une photo nette et demandez à un agent de vulgarisation ou à une clinique des plantes ; dans certains pays, l'application FAMEWS de la FAO enregistre les observations de la chenille légionnaire."
          ],
          steps: ["Choisissez un jour de surveillance chaque semaine et prenez un cahier ou votre téléphone.", "Marchez en W ; arrêtez-vous à 5 endroits dans le maïs (10 plantes à chaque fois) ou contrôlez 20 plants de tomate répartis.", "Sur chaque plante, regardez les feuilles, le cornet ou le bourgeon, les tiges et les fruits.", "Comptez les plantes avec des dégâts frais ou des ravageurs vivants ; notez les masses d'œufs.", "Notez les ennemis naturels que vous voyez.", "Photographiez ce que vous ne reconnaissez pas et demandez à la vulgarisation ou à une clinique des plantes."],
          words: [["Surveillance", "parcourir un champ à jour fixe et contrôler un nombre fixe de plantes pour chercher ravageurs, maladies et ennemis naturels."], ["Cornet", "les jeunes feuilles enroulées au sommet d'un jeune plant de maïs."], ["Mine", "une galerie ou une tache pâle à l'intérieur d'une feuille, faite par une minuscule chenille qui mange entre les deux faces de la feuille."], ["Ennemi naturel", "un insecte, une araignée, un champignon ou un autre être vivant qui tue les ravageurs."]],
          slides: [
            { title: "Comment surveiller", bullets: ["Chaque semaine, le même jour", "Trajet en W ou en zigzag, pas seulement les bords", "Maïs : 5 arrêts x 10 plantes = 50", "Tomate : 20 plants répartis"] },
            { title: "Signes de la chenille légionnaire d'automne", bullets: ["Fenêtres sur les jeunes feuilles, puis trous irréguliers", "Excréments humides comme de la sciure dans le cornet", "Y à l'envers sur la tête, 4 points sombres près de la queue"] },
            { title: "Signes de Tuta absoluta", bullets: ["Mines pâles dans les feuilles, avec des excréments sombres", "Petits trous dans les tiges et les fruits", "Petit papillon gris-brun qui se cache le jour"] },
            { title: "Cherchez aussi vos alliés", bullets: ["Coccinelles, chrysopes, araignées, perce-oreilles, fourmis", "Guêpes parasitoïdes ; chenilles malades ou couvertes de champignon", "Un doute ? Photo à la vulgarisation ou à une clinique des plantes"] }
          ],
          sources: [CIMMYT_FAW, ICIPE_TUTA, FAO_FAMEWS],
          tryIt: "Surveillez aujourd'hui un de vos champs en marchant en W : 50 plantes de maïs ou 20 plants de tomate. Notez combien de plantes avaient des dégâts frais ou des ravageurs vivants, les masses d'œufs, et chaque ennemi naturel que vous avez vu.",
          youCanNow: "parcourir un champ selon un trajet fixe, reconnaître la chenille légionnaire d'automne et Tuta absoluta à leurs signes, et repérer les ennemis naturels.",
          quickCheck: [
            { objective: "O2", q: "Vous voyez des excréments humides comme de la sciure et des trous irréguliers dans le cornet du jeune maïs. Quel est le ravageur le plus probable ?", options: ["La mineuse de la tomate", "Des pucerons", "La chenille légionnaire d'automne", "Des termites"], answer: 2, why: "Des trous irréguliers et des excréments humides dans le cornet sont des signes typiques de la chenille légionnaire d'automne." },
            { objective: "O2", q: "Pourquoi marcher en W pour surveiller au lieu de contrôler les plantes près de l'entrée ?", options: ["C'est plus rapide", "Les ravageurs ne vivent qu'au milieu", "Cela consomme moins d'eau", "Cela couvre tout le champ, pas seulement les bords"], answer: 3, why: "Un trajet en W prend des plantes dans toutes les parties du champ, donc le comptage reflète le niveau réel." }
          ]
        },
        {
          title: "Seuils et fiches : décider quand agir",
          objectives: ["O3"],
          minutes: 5,
          goal: "Comparer votre comptage avec un seuil d'intervention et noter s'il faut agir ou continuer à surveiller.",
          text: [
            "Voir un ravageur ne veut pas dire qu'il faut traiter. Un seuil d'intervention est le niveau de ravageurs ou de dégâts à partir duquel la lutte vaut ce qu'elle coûte. En dessous, les ennemis naturels et la culture s'en sortent en général, et traiter serait gaspiller de l'argent et tuer vos alliés. Demandez le seuil pour chaque ravageur principal, chaque stade de la culture et votre zone à votre agent de vulgarisation ou à votre institut de recherche (comme le KALRO, l'institut de recherche agricole du Kenya), car il change avec le stade de la culture, les prix et la recherche locale.",
            "Transformez votre comptage en pourcentage : plantes avec dégâts frais ou ravageurs vivants, divisées par les plantes contrôlées, fois 100. Exemple : vous avez contrôlé 50 plantes de maïs et 9 avaient des dégâts frais de chenille légionnaire, donc 9 / 50 x 100 = 18 %. Si la vulgarisation vous a dit d'agir à 20 % à ce stade, vous continuez à surveiller et vous revenez dans quelques jours. Si la semaine suivante c'est 26 %, vous agissez. Le jeune maïs supporte en général moins de dégâts que le maïs plus âgé, donc les seuils changent souvent selon le stade.",
            "Notez chaque passage. Une fiche simple contient la date, le champ, le stade de la culture, les plantes contrôlées, les plantes infestées, le pourcentage, les ennemis naturels vus, le seuil, votre décision et ce que vous avez fait. Après quelques saisons, vos fiches montrent quand les ravageurs arrivent sur votre exploitation, quels moyens ont marché et ce qu'ils ont coûté. Un cahier en papier suffit ; un tableur sur le téléphone ou une application agricole aussi."
          ],
          steps: ["Demandez à la vulgarisation le seuil pour chaque ravageur principal et chaque stade de la culture.", "Après la surveillance, comptez les plantes contrôlées et les plantes infestées.", "Calculez le pourcentage : infestées / contrôlées x 100.", "Comparez avec le seuil : en dessous = continuez à surveiller ; égal ou au-dessus = agissez.", "Notez sur votre fiche la date, les chiffres, les ennemis naturels, la décision et l'action."],
          words: [["Seuil d'intervention", "le niveau de ravageurs ou de dégâts à partir duquel la lutte vaut ce qu'elle coûte."], ["Infestée", "qui porte des ravageurs ou des dégâts frais de ravageurs."], ["Stade de la culture", "le niveau de croissance de la culture, par exemple plantule, hauteur du genou, floraison mâle (panicule), floraison, fructification."]],
          slides: [
            { title: "Voir un ravageur n'oblige pas à traiter", bullets: ["Seuil : le niveau où agir devient rentable", "En dessous, les ennemis naturels suffisent souvent", "Demandez les seuils à la vulgarisation, par stade"] },
            { title: "Calculez le pourcentage", bullets: ["Plantes infestées / plantes contrôlées x 100", "Exemple : 9 / 50 x 100 = 18 %", "Seuil de 20 % : continuez à surveiller, revenez bientôt"] },
            { title: "Notez chaque passage", bullets: ["Date, champ, stade de la culture", "Contrôlées, infestées, %, ennemis naturels", "Seuil, décision, action, coût"] }
          ],
          sources: [FAO_IPM, CIMMYT_FAW],
          tryIt: "Reprenez le comptage de votre surveillance de la leçon précédente. Calculez le pourcentage de plantes infestées, demandez à votre agent de vulgarisation le seuil pour le stade de votre culture, et remplissez la première ligne de votre fiche avec votre décision.",
          youCanNow: "transformer un comptage en pourcentage, le comparer à un seuil et noter votre décision.",
          quickCheck: [
            { objective: "O3", q: "Vous avez contrôlé 50 plantes et 15 avaient des dégâts frais. Quelle est l'infestation ?", options: ["15 %", "30 %", "50 %", "35 %"], answer: 1, why: "15 / 50 x 100 = 30 %." },
            { objective: "O3", q: "Votre comptage est de 12 % et le seuil de la vulgarisation pour ce stade est de 20 %. Que faites-vous ?", options: ["Traiter aujourd'hui par précaution", "Arracher la culture", "Doubler la dose", "Continuer à surveiller, revenir bientôt et le noter"], answer: 3, why: "En dessous du seuil, la lutte n'est pas encore rentable ; vous continuez à surveiller et à noter." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Arrêter les ravageurs tôt",
        questions: [
          { objective: "O1", q: "Laquelle de ces actions est une mesure de prévention de l'IPM ?", options: ["Traiter dès qu'on voit une chenille", "Semer à temps des semences certifiées d'une variété adaptée", "Mélanger deux pesticides", "Brûler la culture du voisin"], answer: 1, why: "De bonnes semences et un semis à temps empêchent les ravageurs de se multiplier dès le départ." },
          { objective: "O2", q: "Des taches pâles avec des excréments sombres à l'intérieur des feuilles de tomate, et de petits trous dans les fruits, indiquent :", options: ["Tuta absoluta (mineuse de la tomate)", "La chenille légionnaire d'automne", "Trop d'engrais", "Le manque d'eau"], answer: 0, why: "Les mines dans les feuilles et les trous dans les fruits sont les signes de Tuta absoluta." },
          { objective: "O2", q: "En surveillant, vous trouvez des coccinelles et une chenille couverte d'un champignon blanc. Vous devez :", options: ["Traiter pour les tuer aussi", "Les ignorer ; elles ne comptent pas", "Les noter comme ennemis naturels au travail", "Brûler la plante"], answer: 2, why: "Les ennemis naturels limitent les ravageurs, donc vous les notez et vous les protégez." },
          { objective: "O3", q: "Qu'est-ce qu'un seuil d'intervention ?", options: ["Le jour du semis", "Le prix d'un pesticide", "Le nombre d'ouvriers nécessaires", "Le niveau de ravageurs à partir duquel la lutte vaut ce qu'elle coûte"], answer: 3, why: "En dessous du seuil, la lutte coûte plus qu'elle ne fait gagner." },
          { objective: "O3", q: "Pourquoi tenir une fiche écrite de chaque passage de surveillance ?", options: ["Pour voir quand les ravageurs arrivent, ce qui a marché et ce que cela a coûté", "Parce que le vendeur d'intrants la demande", "Pour que le champ ait l'air bien tenu", "Cela ne sert à rien"], answer: 0, why: "Les fiches transforment chaque saison en leçons pour la suivante." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Lutter contre les ravageurs avec moins de poison",
      lessons: [
        {
          title: "Le push-pull et les ennemis naturels",
          objectives: ["O4"],
          minutes: 6,
          goal: "Planifier une parcelle en push-pull et protéger les ennemis naturels de votre exploitation.",
          text: [
            "Le push-pull (« repousser-attirer ») a été mis au point par l'icipe (Centre international de physiologie et d'écologie des insectes), avec des partenaires, pour le maïs et le sorgho en Afrique de l'Est. Vous semez du desmodium entre les lignes de maïs. Le desmodium dégage des odeurs qui repoussent les papillons foreurs de tiges loin de la culture. Autour de la parcelle, vous plantez une bordure d'herbe fourragère (le brachiaria dans la version intelligente face au climat pour les zones plus sèches, l'herbe à éléphant ou napier dans la version d'origine), qui attire les papillons et les piège. Le desmodium freine aussi le striga et apporte de l'azote au sol, et les deux plantes sont un bon fourrage pour le bétail.",
            "Des études de l'icipe au Kenya, en Ouganda et en Tanzanie ont trouvé beaucoup moins de dégâts de chenille légionnaire d'automne dans les champs en push-pull intelligent face au climat que dans le maïs cultivé seul, et de meilleurs rendements en grain. Le push-pull demande du travail à l'installation et il vous faut des semences ou des boutures de desmodium et des éclats de touffes d'herbe : commencez donc par une petite parcelle, demandez le plan à la vulgarisation ou à un producteur formé par l'icipe, et suivez le guide du producteur de l'icipe.",
            "Les ennemis naturels sont des ouvriers gratuits. Les fourmis, perce-oreilles, araignées, coccinelles et chrysopes mangent les œufs et les jeunes chenilles ; de petites guêpes pondent leurs œufs à l'intérieur des ravageurs ; des champignons et des virus tuent les chenilles. La FAO note qu'ils tuent déjà une grande partie des chenilles légionnaires dans les champs africains. L'icipe a lâché au Kenya une minuscule guêpe d'Amérique du Sud qui n'attaque que Tuta absoluta. Pour les protéger : traitez seulement quand le seuil le dit, choisissez des produits sélectifs, gardez des plantes à fleurs et des haies autour des champs, et laissez une couverture sur le sol."
          ],
          steps: ["Délimitez une petite parcelle en push-pull (demandez le plan à la vulgarisation ou consultez le guide de l'icipe).", "Plantez d'abord l'herbe de bordure (brachiaria ou napier) autour de la parcelle.", "Semez le desmodium entre les lignes de maïs ou de sorgho.", "Coupez l'herbe et le desmodium pour nourrir le bétail, en laissant les plantes repousser.", "Protégez les ennemis naturels : pas de traitement inutile, gardez les fleurs et la couverture du sol."],
          words: [["Push-pull", "un système de l'icipe où une culture associée (le desmodium) repousse les ravageurs et une herbe de bordure les attire hors de la culture."], ["Desmodium", "une légumineuse basse semée entre les lignes de céréales ; elle repousse les papillons foreurs, freine le striga et apporte de l'azote."], ["Striga", "une mauvaise herbe parasite à fleurs roses ou violettes qui se fixe aux racines du maïs et du sorgho et leur vole leur nourriture."], ["Guêpe parasitoïde", "une minuscule guêpe qui pond ses œufs dans ou sur un ravageur ; ses larves tuent le ravageur."]],
          slides: [
            { title: "Le push-pull (icipe)", bullets: ["Le desmodium entre les lignes repousse les papillons", "L'herbe de bordure (brachiaria ou napier) les attire dehors", "Pour le maïs et le sorgho"] },
            { title: "Avantages en plus", bullets: ["Le desmodium freine le striga et apporte de l'azote", "Les deux plantes nourrissent le bétail", "Essais de l'icipe : beaucoup moins de dégâts de chenille légionnaire"] },
            { title: "Vos ouvriers gratuits", bullets: ["Fourmis, perce-oreilles, araignées, coccinelles, chrysopes", "Guêpes parasitoïdes ; champignons et virus", "Une guêpe lâchée au Kenya n'attaque que Tuta absoluta"] },
            { title: "Protéger les ennemis naturels", bullets: ["Traiter seulement au-dessus du seuil", "Choisir des produits sélectifs", "Garder fleurs, haies et couverture du sol"] }
          ],
          sources: [ICIPE_PP_FAW, ICIPE_PP_HOW, ICIPE_PP_GUIDE, ICIPE_TUTA],
          tryIt: "Dessinez le plan d'une petite parcelle en push-pull pour votre maïs ou votre sorgho, avec l'herbe de bordure, les lignes de desmodium et les lignes de culture. Puis écrivez deux choses que vous changerez sur votre exploitation pour protéger les ennemis naturels.",
          youCanNow: "expliquer comment fonctionne le push-pull, dessiner une parcelle en push-pull et citer des moyens de protéger les ennemis naturels.",
          quickCheck: [
            { objective: "O4", q: "Dans le push-pull, que fait le desmodium entre les lignes de maïs ?", options: ["Il attire les ravageurs dans le maïs", "Il repousse les papillons foreurs et freine le striga", "Il fait de l'ombre au maïs pour qu'il pousse plus haut", "Il tue les coccinelles"], answer: 1, why: "L'odeur du desmodium repousse les papillons et il freine le striga ; c'est l'herbe de bordure qui attire." },
            { objective: "O4", q: "Quelle habitude protège le mieux les ennemis naturels ?", options: ["Traiter chaque semaine avec un pesticide à large spectre", "Enlever toutes les fleurs et les haies autour du champ", "Brûler les résidus et toute la couverture du sol", "Traiter seulement au-dessus du seuil et garder des bordures fleuries"], answer: 3, why: "Moins de traitements et des plantes à fleurs gardent les ennemis naturels en vie et nourris." }
          ]
        },
        {
          title: "Pièges, solutions botaniques et biologiques",
          objectives: ["O4"],
          minutes: 5,
          goal: "Choisir et installer des pièges et des moyens botaniques ou biologiques autorisés contre un problème de ravageurs.",
          text: [
            "Les pièges vous aident à surveiller et à réduire le nombre de ravageurs. Les pièges à phéromones utilisent l'odeur de la femelle pour attraper les mâles : l'icipe utilise le piégeage de masse dans sa lutte intégrée contre Tuta absoluta, et les pièges à phéromones pour la chenille légionnaire d'automne vous disent quand les papillons arrivent, pour que vous surveilliez de plus près. Les plaques jaunes engluées attrapent les aleurodes, les pucerons et les adultes de mineuses ; les bleues attrapent les thrips. Remplacez les capsules et les plaques comme le dit le fournisseur, et comptez les captures chaque semaine sur votre fiche.",
            "Le ramassage à la main marche bien sur les petites parcelles : écrasez les masses d'œufs et les jeunes chenilles de la légionnaire, et cueillez puis détruisez les feuilles minées par Tuta et les fruits abîmés (enterrez-les profondément ou fermez-les dans un sac au soleil, ne les laissez jamais par terre).",
            "Les produits biologiques utilisent des êtres vivants ou leurs produits naturels contre les ravageurs : par exemple des produits à base de la bactérie Bt (Bacillus thuringiensis), de champignons qui infectent les insectes ou de virus d'insectes. L'icipe met au point des biopesticides à base de champignons. Ils sont en général doux pour les ennemis naturels, mais ils agissent lentement, doivent toucher les jeunes chenilles, et doivent être stockés comme le dit l'étiquette. Dans beaucoup de pays, ils doivent être homologués comme tout pesticide : vérifiez donc la liste de l'autorité.",
            "Les solutions botaniques viennent des plantes, comme le neem. Les produits au neem homologués ont une étiquette que vous pouvez suivre. Les extraits faits maison sont très utilisés, mais leur force varie et ils peuvent quand même nuire aux ennemis naturels, à la peau et aux yeux : demandez donc à votre agent de vulgarisation comment on les utilise chez vous, portez des gants et essayez d'abord sur quelques plantes."
          ],
          steps: ["Choisissez l'outil selon le ravageur : pièges à phéromones pour les papillons, plaques jaunes pour les aleurodes et les pucerons, bleues pour les thrips.", "Accrochez les pièges à la hauteur de la culture et comptez les captures chaque semaine.", "Ramassez à la main et détruisez les masses d'œufs, les jeunes chenilles et les feuilles minées.", "S'il faut plus, choisissez un produit biologique ou botanique homologué.", "Appliquez-le sur les jeunes chenilles, comme le dit son étiquette, et notez-le."],
          words: [["Piège à phéromones", "un piège avec l'odeur d'accouplement d'un insecte ; il attrape les mâles et montre quand les ravageurs arrivent."], ["Biopesticide", "un produit de lutte contre les ravageurs fait à partir d'êtres vivants comme des bactéries, des champignons ou des virus, ou de leurs produits naturels."], ["Bt", "Bacillus thuringiensis, une bactérie du sol utilisée dans les biopesticides ; elle tue certaines chenilles quand elles la mangent."], ["Produit botanique", "un produit de lutte contre les ravageurs fait à partir de plantes, comme le neem."]],
          slides: [
            { title: "Des pièges pour surveiller et réduire", bullets: ["Les pièges à phéromones attrapent les papillons mâles", "Plaques jaunes : aleurodes, pucerons ; bleues : thrips", "Comptez les captures chaque semaine ; changez les capsules à temps"] },
            { title: "Le ramassage à la main marche", bullets: ["Écrasez masses d'œufs et jeunes chenilles", "Enlevez feuilles minées par Tuta et fruits abîmés", "Enterrez profond ou fermez dans un sac, jamais par terre"] },
            { title: "Produits biologiques", bullets: ["Bt, champignons tueurs d'insectes, virus d'insectes", "Doux pour les ennemis naturels, mais lents", "Visez les jeunes chenilles ; vérifiez l'homologation"] },
            { title: "Produits botaniques comme le neem", bullets: ["Les produits homologués ont une étiquette : suivez-la", "La force des extraits faits maison varie", "Demandez à la vulgarisation, portez des gants, essayez sur quelques plantes"] }
          ],
          sources: [ICIPE_TUTA, CIMMYT_FAW, PCPB, NAFDAC],
          tryIt: "Pour le pire ravageur de votre culture, écrivez quel piège vous utiliseriez et où vous l'accrocheriez, ce que vous ramasseriez à la main et une solution biologique ou botanique. Vérifiez ensuite si ce produit figure sur la liste d'homologation de votre pays, ou demandez à votre vendeur d'intrants de vous montrer son homologation.",
          youCanNow: "choisir des pièges, le ramassage à la main et des moyens biologiques ou botaniques autorisés contre un ravageur, et les mettre en place.",
          quickCheck: [
            { objective: "O4", q: "Vous cultivez des tomates et voulez savoir quand les papillons de Tuta absoluta arrivent. Qu'installez-vous ?", options: ["Un piège à phéromones pour Tuta absoluta", "Une plaque bleue engluée", "Un seau d'eau dans le magasin", "Un épouvantail"], answer: 0, why: "Un piège à phéromones pour Tuta attrape les papillons mâles et montre quand ils arrivent." },
            { objective: "O4", q: "Un biopesticide à base de Bt marche le mieux quand vous :", options: ["Le pulvérisez sur de grosses chenilles âgées à midi", "Le mélangez avec n'importe quel autre produit chimique", "L'appliquez sur les jeunes chenilles comme le dit son étiquette", "Le stockez au soleil"], answer: 2, why: "Les produits biologiques agissent lentement et marchent le mieux sur les jeunes chenilles, utilisés selon l'étiquette." }
          ]
        },
        {
          title: "Les pesticides en dernier recours, et freiner la résistance",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Vérifier l'homologation d'un pesticide, suivre son étiquette avec l'équipement de protection, et prévoir l'alternance des groupes pour freiner la résistance.",
          text: [
            "N'utilisez un pesticide de synthèse que lorsque votre comptage dépasse le seuil et que les autres moyens ne suffisent pas. Vérifiez d'abord que le produit est homologué pour votre culture et votre ravageur dans votre pays : le Pest Control Products Board (PCPB) au Kenya, la NAFDAC au Nigeria, l'Environmental Protection Authority (EPA) au Ghana, et le Comité sahélien des pesticides (CSP) pour les pays du CILSS comme le Sénégal et le Burkina Faso. Chacun tient une liste de produits homologués : consultez-la, et n'achetez que des emballages scellés et étiquetés chez un vendeur d'intrants agréé. Les produits contrefaits et non homologués sont courants.",
            "L'étiquette, c'est la loi. Lisez-la en entier avant d'ouvrir l'emballage : les cultures et les ravageurs visés, la dose, la préparation, le moment du traitement, l'équipement de protection, le délai à respecter avant la récolte (le délai avant récolte) et avant que les personnes retournent dans le champ, et les premiers secours. Portez ce que l'étiquette indique, en général des gants, des bottes, des manches longues et un pantalon, une protection des yeux et un masque ou un respirateur. Traitez aux heures fraîches et sans vent, jamais vers des personnes, des animaux ou de l'eau. Ne mangez pas, ne buvez pas et ne fumez pas pendant le traitement, lavez-vous après, et gardez les produits sous clé, loin des enfants et de la nourriture. Ne mettez jamais de pesticide dans une bouteille de boisson ou un récipient de nourriture.",
            "Les ravageurs deviennent résistants quand le même type de produit est utilisé encore et encore : les rares survivants se reproduisent. La chenille légionnaire d'automne et Tuta absoluta sont connues pour cela. Les étiquettes indiquent souvent un numéro de groupe ou la matière active. Alternez les groupes, n'utilisez pas le même groupe deux fois de suite sur la même génération du ravageur, ne sous-dosez jamais et ne faites jamais vos propres mélanges, et tenez un registre des traitements avec la date, le produit, le groupe, la dose, le champ et la date de fin du délai avant récolte. Au Kenya, une productrice de tomates qui pulvérise le même produit tous les quelques jours le voit souvent cesser de marcher ; celle qui surveille, piège et alterne les groupes garde l'efficacité de ses rares traitements."
          ],
          steps: ["Confirmez que le comptage dépasse le seuil et que les autres moyens ne suffisent pas.", "Vérifiez que le produit est homologué pour votre culture et votre ravageur (PCPB, NAFDAC, EPA Ghana, CSP).", "Achetez un emballage scellé et étiqueté chez un vendeur d'intrants agréé.", "Lisez toute l'étiquette ; mettez tout l'équipement de protection qu'elle indique.", "Traitez aux heures fraîches et sans vent, à la dose de l'étiquette ; lavez-vous et rangez en sécurité.", "Notez le produit, le groupe, la dose et la date de fin du délai avant récolte ; changez de groupe la fois suivante."],
          words: [["Pesticide homologué", "un produit que l'autorité nationale a autorisé pour des cultures et des ravageurs précis."], ["Étiquette", "le mode d'emploi sur l'emballage ; le suivre, c'est la loi."], ["EPI", "équipement de protection individuelle : gants, bottes, vêtements longs, protection des yeux et masque ou respirateur."], ["Délai avant récolte", "le temps à attendre après un traitement avant de récolter ; il est écrit sur l'étiquette."], ["Résistance", "quand un ravageur ne meurt plus avec un produit qui le tuait avant."], ["Groupe de mode d'action", "un numéro ou un nom qui montre comment un pesticide tue ; alternez les groupes pour freiner la résistance."]],
          slides: [
            { title: "Le pesticide : en dernier recours", bullets: ["Seulement au-dessus du seuil", "Seulement si les autres moyens ne suffisent pas", "Seulement homologué pour votre culture et votre ravageur"] },
            { title: "Vérifiez l'homologation", bullets: ["Kenya : PCPB ; Nigeria : NAFDAC", "Ghana : EPA ; Sénégal, Burkina Faso : CSP (CILSS)", "Scellé, étiqueté, vendeur d'intrants agréé"] },
            { title: "L'étiquette, c'est la loi", bullets: ["Culture, ravageur, dose, moment du traitement", "EPI : gants, bottes, manches longues, yeux, masque", "Délai avant récolte et délai de retour au champ"] },
            { title: "Freiner la résistance", bullets: ["Alternez les groupes de mode d'action", "Ne sous-dosez jamais, ne faites pas vos propres mélanges", "Tenez un registre des traitements"] }
          ],
          sources: [PCPB, NAFDAC, GHANA_EPA, CILSS_CSP, FAO_IPM],
          tryIt: "Tâche finale : écrivez votre plan IPM d'une saison pour une culture de votre exploitation : ravageurs principaux, au moins trois mesures de prévention, votre routine de surveillance hebdomadaire et votre fiche, les seuils donnés par la vulgarisation, les moyens sans produits chimiques que vous utiliserez d'abord, et un plan pesticide de dernier recours (un produit vérifié sur la liste de votre autorité, les règles de l'étiquette, votre EPI et la façon dont vous alternerez les groupes).",
          youCanNow: "vérifier qu'un pesticide est homologué, suivre son étiquette avec le bon équipement de protection, et alterner les groupes et tenir un registre pour freiner la résistance.",
          quickCheck: [
            { objective: "O5", q: "Un vendeur d'intrants vous propose à bas prix une bouteille d'insecticide sans étiquette. Que faites-vous ?", options: ["L'acheter ; c'est moins cher", "La mélanger à de l'eau et l'essayer", "La refuser et acheter un produit scellé, étiqueté et homologué", "Utiliser la moitié de la bouteille"], answer: 2, why: "Sans étiquette, vous ne pouvez savoir ni ce que c'est, ni comment l'utiliser en sécurité, ni s'il est homologué." },
            { objective: "O6", q: "La dernière fois, vous avez traité avec un produit du groupe A. Le ravageur est toujours au-dessus du seuil. Que faire de mieux ?", options: ["Retraiter avec le groupe A à double dose", "Traiter avec un produit homologué d'un autre groupe", "Mélanger vous-même le groupe A avec un autre produit", "Traiter avec le groupe A tous les jours"], answer: 1, why: "Passer à un autre groupe freine la résistance ; les doubles doses et les mélanges maison sont dangereux et illégaux." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Lutter contre les ravageurs avec moins de poison",
        questions: [
          { objective: "O4", q: "Dans le push-pull, l'herbe de bordure autour du maïs :", options: ["Attire les papillons foreurs loin du maïs", "Pousse les papillons dans le maïs", "Tue le maïs", "Remplace l'engrais"], answer: 0, why: "L'herbe de bordure (brachiaria ou napier) attire et piège les papillons." },
          { objective: "O4", q: "Lequel est un moyen de lutte biologique ?", options: ["Un insecticide à large spectre", "Un produit à base de la bactérie Bt", "Brûler le champ", "Arroser la nuit"], answer: 1, why: "Les produits au Bt utilisent une bactérie pour tuer certaines chenilles." },
          { objective: "O5", q: "Qui tient la liste des pesticides homologués au Kenya ?", options: ["Le bureau des routes du comté", "Le vendeur d'intrants", "Le Pest Control Products Board (PCPB)", "La société semencière"], answer: 2, why: "Le PCPB homologue les produits de lutte contre les ravageurs au Kenya." },
          { objective: "O5", q: "Où trouvez-vous le temps à attendre entre le traitement et la récolte ?", options: ["En demandant à un voisin", "En devinant selon la météo", "C'est toujours un jour", "Sur l'étiquette du produit (le délai avant récolte)"], answer: 3, why: "L'étiquette donne le délai avant récolte pour chaque culture." },
          { objective: "O6", q: "Pourquoi alterner les groupes de pesticides ?", options: ["Pour freiner l'apparition de la résistance chez les ravageurs", "Pour que le champ sente différemment", "Parce qu'un groupe est toujours illégal", "Pour écouler les vieux stocks"], answer: 0, why: "Utiliser le même groupe encore et encore sélectionne les ravageurs qui y survivent." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Lutte intégrée et lutte biologique contre les ravageurs",
    questions: [
      { objective: "O1", q: "Quelles sont les quatre étapes de l'IPM, dans l'ordre ?", options: ["Traiter, attendre, traiter, récolter", "Prévenir, surveiller, décider, agir", "Acheter, mélanger, traiter, vendre", "Labourer, semer, traiter, stocker"], answer: 1, why: "L'IPM commence par la prévention et n'utilise des pesticides qu'après avoir surveillé et décidé." },
      { objective: "O1", q: "Quelle mesure aide à empêcher les ravageurs de passer d'un champ à l'autre ?", options: ["Semer à d'autres dates que vos voisins", "Laisser les repousses", "Semer à temps, avec vos voisins", "Garder les mauvaises herbes hôtes"], answer: 2, why: "Semer ensemble ne laisse pas de champs tardifs où les ravageurs peuvent passer." },
      { objective: "O1", q: "Pourquoi élever les plants de tomate dans une pépinière propre et sous filet ?", options: ["Pour qu'ils arrivent au champ sans Tuta absoluta ni aleurodes", "Pour qu'ils n'aient pas besoin d'eau", "Parce que le filet apporte de l'engrais", "Pour qu'ils poussent plus vite dans le noir"], answer: 0, why: "Des plants propres et protégés par un filet empêchent les ravageurs d'arriver avec la culture." },
      { objective: "O2", q: "Combien de plantes de maïs la méthode de surveillance de ce cours contrôle-t-elle ?", options: ["5", "10", "100 à l'entrée", "50 : 10 plantes à 5 endroits sur un trajet en W"], answer: 3, why: "Cinq arrêts de 10 plantes sur un trajet en W donnent une image juste du champ." },
      { objective: "O2", q: "Une chenille porte un Y à l'envers sur la tête et quatre points sombres en carré près de la queue. C'est :", options: ["La chenille légionnaire d'automne", "Une larve de coccinelle", "Tuta absoluta", "Une chrysope"], answer: 0, why: "Ces marques identifient la chenille légionnaire d'automne." },
      { objective: "O2", q: "Lequel de ces êtres vivants est un ennemi naturel à noter et à protéger ?", options: ["Le papillon de la chenille légionnaire", "L'aleurode", "La coccinelle", "Le striga"], answer: 2, why: "Les coccinelles mangent les pucerons et d'autres petits ravageurs." },
      { objective: "O2", q: "Vous trouvez des dégâts que vous ne reconnaissez pas. La meilleure chose à faire ensuite :", options: ["Traiter avec le produit le plus fort que vous avez", "Les photographier et demander à la vulgarisation ou à une clinique des plantes", "Les ignorer", "Brûler tout le champ"], answer: 1, why: "Un bon diagnostic passe avant toute lutte." },
      { objective: "O3", q: "Vous avez contrôlé 40 plantes et 10 étaient infestées. Quel est le pourcentage ?", options: ["10 %", "40 %", "4 %", "25 %"], answer: 3, why: "10 / 40 x 100 = 25 %." },
      { objective: "O3", q: "D'où doit venir votre seuil d'intervention ?", options: ["De la publicité du pesticide", "De votre agent de vulgarisation ou institut de recherche, pour le stade de votre culture", "Du chiffre le plus élevé auquel vous pensez", "D'une supposition d'un voisin"], answer: 1, why: "Les seuils dépendent du stade de la culture et de la recherche locale." },
      { objective: "O3", q: "Votre comptage dépasse le seuil. Que faites-vous ?", options: ["Agir, en commençant par la meilleure solution sans chimie, et le noter", "Attendre la récolte", "Arrêter de surveiller", "Ressemer"], answer: 0, why: "Au-dessus du seuil, agir est rentable ; l'IPM commence par les moyens sans produits chimiques." },
      { objective: "O4", q: "Le push-pull a été mis au point par :", options: ["Une société de pesticides", "L'icipe et ses partenaires", "Une boutique de semences", "Une banque"], answer: 1, why: "L'icipe a mis au point le push-pull avec des partenaires en Afrique de l'Est." },
      { objective: "O4", q: "En plus des ravageurs, le desmodium du push-pull :", options: ["Attire plus de striga", "Doit être traité tous les jours", "Tue le bétail", "Freine le striga et apporte de l'azote"], answer: 3, why: "Le desmodium freine le striga, fixe l'azote et fait un bon fourrage." },
      { objective: "O4", q: "Les plaques bleues engluées servent surtout à attraper :", options: ["Les thrips", "Les chenilles légionnaires d'automne", "Les rats", "Les termites"], answer: 0, why: "Les plaques bleues attirent les thrips ; les jaunes attirent les aleurodes et les pucerons." },
      { objective: "O4", q: "Que faire des feuilles minées par Tuta et des fruits abîmés que vous enlevez ?", options: ["Les laisser par terre", "Les donner à la culture de tomates suivante", "Les vendre", "Les enterrer profondément ou les fermer dans un sac au soleil"], answer: 3, why: "Laissées par terre, les chenilles à l'intérieur finissent leur croissance et attaquent de nouveau." },
      { objective: "O5", q: "Au Nigeria, quelle agence homologue les pesticides ?", options: ["La Banque centrale", "L'agence météorologique du Nigeria", "La NAFDAC", "Le conseil des semences"], answer: 2, why: "La NAFDAC homologue les pesticides au Nigeria." },
      { objective: "O5", q: "Quelle est la bonne règle pour l'équipement de protection ?", options: ["Porter ce que l'étiquette indique, comme gants, bottes, manches longues, protection des yeux et masque", "Le short suffit les jours de chaleur", "Les gants sont seulement pour les femmes", "L'équipement de protection est seulement pour les grandes exploitations"], answer: 0, why: "L'étiquette indique l'équipement de protection nécessaire pour ce produit." },
      { objective: "O5", q: "Où ne faut-il jamais garder un pesticide ?", options: ["Dans son emballage d'origine", "Dans un magasin fermé à clé", "Dans une bouteille de soda ou d'eau", "Loin de la nourriture et des enfants"], answer: 2, why: "Les pesticides mis dans des bouteilles de boisson causent beaucoup d'intoxications." },
      { objective: "O6", q: "Un ravageur ne meurt plus avec un produit qui marchait avant. On appelle cela :", options: ["La rotation", "La résistance", "Un seuil", "La pollinisation"], answer: 1, why: "La résistance apparaît quand le même groupe chimique est utilisé encore et encore." },
      { objective: "O6", q: "Quelle habitude accélère la résistance ?", options: ["Alterner les groupes", "Traiter seulement au-dessus du seuil", "Tenir un registre des traitements", "Pulvériser le même produit tous les quelques jours"], answer: 3, why: "L'usage répété du même groupe sélectionne les ravageurs qui y survivent." },
      { objective: "O6", q: "Que faut-il noter dans un registre des traitements ?", options: ["Date, produit, groupe, dose, champ et date de fin du délai avant récolte", "Seulement le prix", "Seulement la météo", "Rien ; les registres sont inutiles"], answer: 0, why: "Ces informations vous permettent d'alterner les groupes et de respecter le délai avant récolte." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 4, 7, 9, 11, 14, 16, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie du plan et revoyez-la avec votre agent de vulgarisation.",
    criteria: [
      { name: "Prévention", objective: "O1", notYet: "Aucune mesure de prévention, ou seulement « traiter tôt ».", meets: "Au moins trois mesures de prévention adaptées à la culture (semence, rotation, date de semis, hygiène ou bordures).", exceeds: "Les mesures de prévention sont placées sur un calendrier et décidées avec les voisins, par exemple semer ensemble." },
      { name: "Routine de surveillance", objective: "O2", notYet: "La surveillance se fait « quand je vois des dégâts », sans nombre de plantes.", meets: "Un jour fixe par semaine, un trajet en W, un nombre fixe de plantes et une fiche avec des colonnes pour les ravageurs et les ennemis naturels.", exceeds: "Comprend des photos des principaux ravageurs et ennemis naturels pour les reconnaître, et la fiche a déjà servi au moins deux semaines." },
      { name: "Seuils et décisions", objective: "O3", notYet: "Pas de seuils ; on agit par habitude.", meets: "Un seuil donné par la vulgarisation pour chaque ravageur principal, avec le calcul du pourcentage écrit.", exceeds: "Les seuils sont donnés par stade de la culture, avec un exemple calculé à partir des propres comptages de l'apprenant." },
      { name: "D'abord sans chimie", objective: "O4", notYet: "Le pesticide est le premier et le seul moyen de lutte.", meets: "Au moins deux moyens sans produits chimiques (push-pull, pièges, ramassage à la main, ennemis naturels, biologiques ou botaniques) sont prévus avant tout pesticide.", exceeds: "Les moyens sans produits chimiques sont déjà en place, par exemple des pièges accrochés ou une parcelle en push-pull semée." },
      { name: "Dernier recours sûr et légal", objective: "O5", notYet: "Le produit n'est pas vérifié, ou le plan oublie l'étiquette ou l'EPI.", meets: "Le produit est vérifié sur la liste de l'autorité nationale, et le plan suit l'étiquette, liste l'EPI et indique le délai avant récolte de l'étiquette.", exceeds: "Comprend aussi le stockage sûr, l'élimination des emballages vides selon l'étiquette et les gestes de premiers secours." },
      { name: "Résistance et registres", objective: "O6", notYet: "Un seul produit toute la saison, pas de registre des traitements.", meets: "Un registre des traitements et une alternance entre au moins deux groupes.", exceeds: "L'alternance est prévue par génération du ravageur, et les registres comprennent le coût de chaque moyen de lutte." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui disent, 30 jours plus tard, surveiller chaque semaine et tenir des fiches sur les ravageurs (enquête de suivi)",
      "Moins de traitements pesticides par saison selon les apprenants, avec un rendement maintenu ou meilleur",
      "Apprenants qui mettent en place au moins un moyen sans produits chimiques (push-pull, pièges, produits biologiques) en une saison",
      "Moins de cas d'intoxication aux pesticides ou de produits refusés dans les groupes d'apprenants (retours de la vulgarisation et des acheteurs)"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone (avec appareil photo si possible) ou un cahier et un stylo pour les fiches de surveillance",
      "L'accès à un champ cultivé, de préférence en maïs, sorgho ou tomate",
      "En option : une loupe, un piège à phéromones et des plaques engluées pour les montrer au groupe",
      "Les coordonnées de l'agent de vulgarisation local ou de la clinique des plantes, et le site web de l'autorité nationale des pesticides",
      "Environ 60 à 90 minutes en tout pour les leçons, les contrôles rapides et les quiz, plus la surveillance hebdomadaire au champ"
    ],
    facilitatorNotes: [
      "Si possible, organisez le cours comme un champ-école paysan : passez ensemble le test de départ, puis surveillez un vrai champ en groupe après les leçons 2 et 3.",
      "Apportez de vrais échantillons ou des photos de la chenille légionnaire d'automne, de Tuta absoluta et des ennemis naturels pour que les apprenants s'exercent à les reconnaître.",
      "Obtenez les seuils locaux auprès du service de vulgarisation ou de l'institut de recherche avant la séance ; ne les inventez pas.",
      "Ne recommandez jamais un produit, une dose ou un délai avant récolte ; montrez plutôt aux apprenants comment lire l'étiquette et la liste de l'autorité.",
      "Ne manipulez pas de pesticides pendant la séance sans EPI complet ; utilisez un emballage étiqueté vide et propre pour s'exercer à lire l'étiquette.",
      "Notez le plan IPM final avec la grille et convenez avec chaque apprenant d'une amélioration pour la saison prochaine."
    ]
  }
};
