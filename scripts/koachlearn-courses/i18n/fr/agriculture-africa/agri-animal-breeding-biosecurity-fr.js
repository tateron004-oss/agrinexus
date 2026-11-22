"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-animal-breeding-biosecurity.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

const WOAH_ASF = { name: "Organisation mondiale de la santé animale (WOAH) : la peste porcine africaine", url: "https://www.woah.org/en/disease/african-swine-fever/" };
const WOAH_ASF_VACCINE = { name: "WOAH (juin 2025) : utiliser seulement des vaccins contre la PPA de haute qualité, conformes à la nouvelle norme", url: "https://www.woah.org/en/asf-woah-stresses-the-importance-of-using-high-quality-vaccines-that-comply-with-newly-adopted-standard" };
const FAO_ASF = { name: "FAO : la peste porcine africaine (pas de vaccin ni de traitement efficace ; la prévention est le moyen de lutte)", url: "https://www.fao.org/animal-health/animal-diseases/african-swine-fever/en" };
const WOAH_AI = { name: "Organisation mondiale de la santé animale (WOAH) : l'influenza aviaire", url: "https://www.woah.org/en/disease/avian-influenza/" };
const APHIS_AI = { name: "USDA APHIS : l'influenza aviaire (signes chez les oiseaux)", url: "https://www.aphis.usda.gov/livestock-poultry-disease/avian/avian-influenza" };
const FAO_PIG_BIOSEC = { name: "FAO : Bonnes pratiques de biosécurité dans le secteur porcin (Étude FAO Production et santé animales 169)", url: "https://www.fao.org/4/i1435e/i1435e00.htm" };
const FAO_POULTRY_BIOSEC = { name: "FAO : Bonnes pratiques de biosécurité dans les petits élevages de volailles commerciaux et villageois au Kenya", url: "https://www.fao.org/4/al838e/al838e00.pdf" };
const UGA_HEAT = { name: "Vulgarisation de l'Université de Géorgie : détecter les chaleurs chez les vaches laitières (acceptation du chevauchement, règle matin-soir)", url: "https://fieldreport.caes.uga.edu/publications/B1212/heat-detection-strategies-for-dairy-cattle" };
const KAGRC = { name: "Kenya Animal Genetic Resources Centre (KAGRC) : semence et matériel d'insémination artificielle", url: "https://kagrc.go.ke/" };
const KVB = { name: "Kenya Veterinary Board (registre des vétérinaires et des para-professionnels vétérinaires)", url: "https://www.kenyavetboard.or.ke/" };
const VCN = { name: "Veterinary Council of Nigeria (registre des vétérinaires)", url: "https://vcn.gov.ng" };
const ILRI_AI = { name: "ILRI : Formation des inséminateurs pour l'insémination artificielle communautaire", url: "https://www.ilri.org/knowledge/publications/training-artificial-insemination-service-providers-community-based" };
const FAO_DADIS = { name: "FAO DAD-IS : Système d'information sur la diversité des animaux domestiques (races par pays)", url: "https://www.fao.org/dad-is/en/" };

module.exports = {
  id: "agri-animal-breeding-biosecurity-fr",
  lang: "fr",
  translationOf: "agri-animal-breeding-biosecurity",
  category: "Agriculture (Africa)",
  name: "Élevage, reproduction et biosécurité à la ferme",
  skills: "Choisir des races adaptées à votre climat et à votre marché, Détecter les chaleurs et tenir les registres de reproduction, Organiser l'insémination artificielle avec un inséminateur formé, Éviter la consanguinité, Écrire un plan de biosécurité pour la ferme, Repérer et signaler la peste porcine africaine et l'influenza aviaire",
  outcome: "faire reproduire vos bovins, vos chèvres, vos porcs ou vos volailles avec un plan et garder les maladies dehors : choisir une race adaptée à votre climat et à votre marché, repérer les chaleurs et noter chaque saillie, faire appel à un inséminateur formé, éviter la consanguinité, appliquer un plan de biosécurité écrit, et signaler tout de suite au vétérinaire tout cas suspect de peste porcine africaine ou d'influenza aviaire.",
  about: [
    "Ce cours s'adresse aux petits éleveurs et aux éleveurs en croissance, aux ouvriers agricoles, aux jeunes agripreneurs et aux agents de vulgarisation au Kenya, au Nigeria, au Ghana, au Sénégal, au Cameroun et partout en Afrique qui élèvent des vaches laitières, des chèvres, des porcs ou des volailles et veulent agrandir leur troupeau ou leur bande sans faire entrer de maladie.",
    "Le chapitre 1 porte sur la bonne reproduction : choisir la bonne race, repérer les chaleurs et tenir des registres de reproduction, et utiliser l'insémination artificielle (IA) avec un inséminateur formé, tout en évitant la consanguinité. Le chapitre 2 porte sur la protection contre les maladies : un plan de biosécurité avec des zones, des pédiluves et des règles pour les visiteurs, la quarantaine des nouveaux animaux et l'élimination sans risque des animaux morts, et les deux maladies que tout éleveur de porcs et de volailles doit connaître : la peste porcine africaine et l'influenza aviaire.",
    "Ce cours fait suite à \"Santé et conduite de l'élevage\", qui couvre l'examen de santé quotidien, la vaccination avec un vétérinaire et la maladie de Newcastle. Il ne donne aucune dose de médicament, de vaccin ou d'hormone : suivez toujours votre vétérinaire et l'étiquette du produit. Chaque leçon dure environ cinq minutes et se termine par une tâche dans votre propre ferme. Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours."
  ],
  finalTask: "Écrivez un plan de biosécurité d'une page pour votre propre unité (votre ferme, ou un exemple comme 20 porcs près d'Abeokuta, 500 pondeuses près de Kumasi, 4 vaches laitières à Nyeri ou 300 poulets de chair près de Thiès) : un croquis avec la zone propre, la zone tampon et la zone sale, et l'entrée unique ; vos règles pour le pédiluve et le lavage des mains ; vos règles pour les visiteurs et les véhicules, avec un registre des visiteurs ; comment vous mettrez les nouveaux animaux en quarantaine ; comment vous éliminerez les animaux morts ; les signes d'alerte de la peste porcine africaine ou de l'influenza aviaire et ce que vous ferez dans la première heure, avec le nom et le numéro de téléphone de votre vétérinaire ou de votre service vétérinaire.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Petits éleveurs et éleveurs commerciaux en croissance, ouvriers agricoles, jeunes agripreneurs et agents de vulgarisation d'Afrique de l'Est, de l'Ouest et du Centre (y compris les pays francophones) qui élèvent des vaches laitières, des chèvres, des porcs ou des volailles.",
    startingPoint: "Ils savent nourrir et soigner les animaux et reconnaître un animal qui a l'air malade. Beaucoup font saillir par n'importe quel mâle qui se trouve à côté, tiennent peu de registres de reproduction écrits, et laissent entrer à la ferme des visiteurs, des commerçants et de nouveaux animaux sans aucune règle.",
    gap: "Les éleveurs qui veulent plus de lait, de viande ou d'œufs achètent souvent des races qui ne conviennent ni à leur climat ni à leur alimentation, ratent des chaleurs, gaspillent des inséminations et laissent la consanguinité s'installer sans le voir. Un seul visiteur, un seul camion ou un seul nouveau porc peut apporter la peste porcine africaine, qui n'a ni vaccin ni traitement efficace, ou l'influenza aviaire, qui peut tuer la plus grande partie d'une bande. Une routine de reproduction et un plan de biosécurité écrits protègent la ferme et les voisins.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; beaucoup d'apprenants lisent l'anglais comme deuxième langue et le cours existe aussi en anglais, en espagnol et en arabe",
      "Appareils : un téléphone simple ou un smartphone, du papier et un stylo ; peu de données mobiles",
      "Argent : d'abord les mesures à faible coût ; les montants en KES, NGN, GHS et XOF ne sont que des exemples",
      "Règles de santé animale : aucune dose de médicament, de vaccin ou d'hormone et aucun délai d'attente ; suivre le vétérinaire et l'étiquette",
      "La PPA et l'influenza aviaire sont à déclaration obligatoire : les cas suspects sont signalés tout de suite au vétérinaire ou à l'autorité vétérinaire, et les règles nationales changent selon le pays"
    ],
    prerequisites: "Les soins de base aux animaux. Il est conseillé de suivre d'abord \"Santé et conduite de l'élevage\" (Agriculture (Africa))."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "En tenant compte de votre climat, de vos ressources en aliments et de votre marché", action: "choisir une race ou un croisement pour votre ferme et donner les raisons de ce choix", standard: "en citant au moins trois raisons adaptées à votre ferme" },
    { id: "O2", condition: "Avec un cahier ou un téléphone, pendant les observations deux fois par jour", action: "noter les signes de chaleur, les saillies et les dates prévues de mise bas pour chaque femelle reproductrice", standard: "sans date manquante pour les animaux que vous faites reproduire" },
    { id: "O3", condition: "Quand une vache ou une chèvre accepte le chevauchement", action: "organiser l'insémination artificielle avec un inséminateur formé et enregistré au bon moment", standard: "en appelant l'inséminateur le jour même et en notant les informations sur la semence ou le géniteur" },
    { id: "O4", condition: "À partir de vos registres de reproduction", action: "prévoir des accouplements qui évitent de faire reproduire des proches parents", standard: "sans accouplement parent-descendant ni frère-sœur dans le plan" },
    { id: "O5", condition: "Pour votre propre ferme ou unité", action: "écrire un plan de biosécurité avec des zones, un pédiluve, des règles pour les visiteurs, la quarantaine et l'élimination des animaux morts", standard: "en couvrant les cinq parties sur une page" },
    { id: "O6", condition: "Quand des porcs ou des volailles montrent des signes d'alerte ou meurent brusquement", action: "reconnaître les signes de la peste porcine africaine ou de l'influenza aviaire et les signaler au vétérinaire ou à l'autorité vétérinaire", standard: "tout de suite, sans déplacer, vendre ni manger les animaux" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Bien reproduire pour un meilleur troupeau",
      lessons: [
        {
          title: "Choisir des races adaptées à votre climat et à votre marché",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choisir une race ou un croisement adapté à votre climat, à vos aliments et à vos acheteurs.",
          text: [
            "La meilleure race est celle qui rapporte de l'argent dans votre ferme, pas celle qui a les plus gros chiffres dans une brochure. Une vache laitière exotique à haut rendement a besoin de beaucoup de bons aliments, d'eau propre, d'ombre et de soins de santé suivis. Dans une zone chaude et sèche avec de mauvais pâturages, elle peut donner moins de lait qu'un croisement local résistant et tomber malade plus souvent.",
            "Les races locales, comme le zébu d'Afrique de l'Est, la chèvre naine d'Afrique de l'Ouest ou les bovins N'Dama d'Afrique de l'Ouest, supportent la chaleur, les tiques et une alimentation pauvre, mais grandissent et produisent moins. Les races exotiques, comme les vaches laitières Frisonne ou Ayrshire, les porcs Large White ou les poules hybrides commerciales, produisent plus quand vous pouvez bien les nourrir et les protéger. Les croisements se situent souvent entre les deux.",
            "Partez de votre marché : qui achète, ce qu'on paie (lait, poids vif, viande maigre, œufs, une chèvre pour la fête) et à quel moment. Vérifiez ensuite ce que vous pouvez fournir toute l'année : aliments, eau, logement, main-d'œuvre et un vétérinaire. Demandez à votre agent de vulgarisation, à une association d'éleveurs ou à votre institut national de recherche quelles races réussissent dans votre zone. La base de données DAD-IS de la FAO (l'Organisation des Nations Unies pour l'alimentation et l'agriculture) donne la liste des races élevées dans chaque pays."
          ],
          steps: ["Écrivez ce que vos acheteurs veulent et ce qu'ils paient.", "Écrivez ce que vous pouvez fournir toute l'année : aliments, eau, logement, main-d'œuvre, vétérinaire.", "Faites la liste de deux ou trois races ou croisements élevés par les éleveurs près de chez vous.", "Interrogez votre agent de vulgarisation ou une association d'éleveurs sur chacun.", "Choisissez la race qui correspond aux deux listes et écrivez trois raisons."],
          words: [["Race", "un groupe d'animaux d'une même espèce qui ont le même aspect et les mêmes caractères, transmis des parents aux petits."], ["Race exotique", "une race créée dans une autre région, souvent plus productive mais moins adaptée à la chaleur, aux maladies et aux aliments d'ici."], ["Croisement", "un animal dont les parents sont de deux races différentes."]],
          slides: [
            { title: "La bonne race rapporte dans VOTRE ferme", bullets: ["Les gros chiffres des brochures demandent de gros moyens", "Une mauvaise alimentation et la chaleur font vite baisser la production", "Choisissez pour votre ferme, pas pour une photo"] },
            { title: "Locale, exotique ou croisée", bullets: ["Locale : résistante, supporte la chaleur, les tiques et une alimentation pauvre", "Exotique : haut rendement, demande de bons aliments et des soins", "Croisée : souvent entre les deux"] },
            { title: "Partir du marché", bullets: ["Que paient les acheteurs : lait, viande, œufs ?", "Quand achètent-ils ?", "Que pouvez-vous fournir toute l'année ?"] },
            { title: "Renseignez-vous avant d'acheter", bullets: ["Agent de vulgarisation ou association d'éleveurs", "Éleveurs près de chez vous qui ont cette race", "FAO DAD-IS donne les races par pays"] }
          ],
          sources: [FAO_DADIS],
          tryIt: "Écrivez deux petites listes pour votre ferme : ce que veulent vos acheteurs, et ce que vous pouvez fournir toute l'année. Nommez deux races ou croisements et choisissez-en un, avec trois raisons.",
          youCanNow: "choisir une race ou un croisement adapté à votre climat, à vos aliments et à votre marché, et expliquer pourquoi.",
          quickCheck: [
            { objective: "O1", q: "Un éleveur d'une zone chaude et sèche avec de mauvais pâturages veut des vaches laitières. Quel choix lui convient le mieux ?", options: ["La vache exotique la plus productive qu'il puisse trouver", "N'importe quelle vache, la moins chère du marché", "Un croisement local résistant, adapté à la chaleur et aux aliments", "Une race choisie sur la photo d'une brochure"], answer: 2, why: "Une race qui supporte la chaleur et les aliments qu'il a vraiment produira plus avec le temps qu'une race qui demande des moyens qu'il ne peut pas fournir." },
            { objective: "O1", q: "Que devez-vous écrire EN PREMIER pour choisir une race ?", options: ["Le nom de la race que votre voisin aime", "Ce que vos acheteurs veulent et ce qu'ils paient", "La couleur que vous préférez", "La race qui a les plus gros animaux"], answer: 1, why: "C'est le marché qui décide de ce qui rapporte ; ensuite vous vérifiez ce que votre ferme peut fournir." }
          ]
        },
        {
          title: "Détection des chaleurs et registres de reproduction",
          objectives: ["O2"],
          minutes: 5,
          goal: "Repérer une femelle en chaleur et noter les chaleurs, les saillies et les dates de mise bas.",
          text: [
            "Une vache, une chèvre ou une truie ne peut être fécondée que pendant un court moment, quand elle est \"en chaleur\". Si vous le ratez, vous attendez environ trois semaines la chaleur suivante, tout en continuant à la nourrir. Les vaches, les chèvres et les truies reviennent en général en chaleur environ tous les 21 jours, mais cela varie, alors observez bien.",
            "Le signe le plus sûr chez une vache est l'acceptation du chevauchement : elle reste immobile quand un autre animal la chevauche. Les autres signes sont : elle chevauche les autres, elle est agitée, elle beugle, un écoulement clair et collant sort de la vulve, et elle donne moins de lait. Les chèvres remuent la queue, bêlent et cherchent le bouc. Une truie en chaleur reste immobile quand vous appuyez sur son dos. Observez au moins deux fois par jour, tôt le matin et le soir, pendant 20 à 30 minutes, quand les animaux sont calmes.",
            "Les registres transforment les suppositions en plan. Pour chaque femelle, notez : son numéro d'identification, la date et l'heure de chaque chaleur, la date de la saillie, avec quel taureau, bouc ou verrat ou quelle paillette d'IA, et la date prévue de mise bas. Vous savez alors quand surveiller un retour en chaleur environ 3 semaines plus tard, quand tarir une vache, et quelles femelles n'arrivent pas à être pleines. La gestation dure environ 9 mois chez la vache, environ 5 mois chez la chèvre, et environ 3 mois, 3 semaines et 3 jours chez la truie ; votre vétérinaire ou votre agent de vulgarisation peut vous donner les chiffres exacts pour votre race."
          ],
          steps: ["Donnez à chaque femelle reproductrice une identification : boucle d'oreille, nom ou numéro.", "Observez les chaleurs deux fois par jour, le matin et le soir.", "Notez la date, l'heure et les signes vus.", "Notez la date de la saillie et le mâle ou la paillette d'IA utilisée.", "Ajoutez la date pour surveiller un retour en chaleur, environ 3 semaines plus tard.", "Notez la date prévue de mise bas, et faites vérifier la gestation par votre vétérinaire ou votre inséminateur."],
          words: [["Chaleur (œstrus)", "le court moment où une femelle accepte le mâle et peut être fécondée."], ["Acceptation du chevauchement", "quand une vache reste immobile pour être chevauchée ; le signe le plus sûr qu'elle est en chaleur."], ["Saillie", "l'accouplement, par un mâle ou par insémination artificielle."], ["Gestation", "le temps entre la fécondation et la naissance."]],
          slides: [
            { title: "La chaleur est courte ; la rater coûte 3 semaines", bullets: ["Vaches, chèvres et truies : environ tous les 21 jours", "Chaleur ratée = des semaines d'aliments sans gestation"] },
            { title: "Les signes de chaleur", bullets: ["Vache : reste immobile quand on la chevauche (signe le plus sûr)", "Chevauche les autres, agitée, écoulement clair", "Chèvre : remue la queue ; truie : immobile quand on appuie"] },
            { title: "Observez deux fois par jour", bullets: ["Tôt le matin et le soir", "20 à 30 minutes, quand les animaux sont calmes"] },
            { title: "Le registre de reproduction", bullets: ["Identification, date et heure de la chaleur, date de saillie", "Mâle ou paillette d'IA utilisée", "Date de contrôle du retour en chaleur et date de mise bas"] }
          ],
          sources: [UGA_HEAT],
          tryIt: "Faites une page de registre de reproduction sur papier ou dans une note du téléphone, avec ces colonnes : identification de l'animal, date et heure de la chaleur, signes vus, date de saillie, mâle ou paillette d'IA, contrôle du retour en chaleur, date de mise bas. Remplissez-la pour une de vos femelles, ou pour une vache d'exemple.",
          youCanNow: "repérer les signes de chaleur et tenir un registre de reproduction avec les chaleurs, les saillies et les dates de mise bas.",
          quickCheck: [
            { objective: "O2", q: "Quel est le signe le plus sûr qu'une vache est en chaleur ?", options: ["Elle mange plus que d'habitude", "Elle se couche beaucoup", "Elle reste immobile quand un autre animal la chevauche", "Son poil est brillant"], answer: 2, why: "Rester immobile pour être chevauchée est le signe le plus sûr de la chaleur ; les autres signes la laissent seulement penser." },
            { objective: "O2", q: "Votre chèvre a été saillie le 1er mars. Quand surveillez-vous un retour en chaleur ?", options: ["Environ 3 semaines plus tard, vers le 22 mars", "Le lendemain", "Après 6 mois", "Jamais ; elle est forcément pleine"], answer: 0, why: "Les chaleurs reviennent environ tous les 21 jours, donc une femelle qui n'a pas été fécondée montre à nouveau des chaleurs environ 3 semaines plus tard." }
          ]
        },
        {
          title: "L'insémination artificielle et comment éviter la consanguinité",
          objectives: ["O3", "O4"],
          minutes: 6,
          goal: "Organiser l'IA avec un inséminateur formé au bon moment, et prévoir des accouplements qui évitent les proches parents.",
          text: [
            "L'insémination artificielle (IA) place la semence d'un mâle reconnu dans l'appareil génital de la femelle. Elle donne à un petit éleveur les gènes d'un excellent taureau ou bouc sans avoir à le garder, et elle réduit le risque des maladies transmises par l'accouplement. L'IA est faite par un inséminateur formé ou par un vétérinaire, pas par l'éleveur. Une mauvaise technique peut blesser l'animal, et la semence doit rester congelée dans l'azote liquide jusqu'au moment de l'utiliser, sinon elle meurt.",
            "Trouvez un inséminateur formé et enregistré : demandez au service de l'élevage de votre comté ou de votre district, à votre coopérative laitière ou à un vétérinaire enregistré. Au Kenya, le KAGRC (le centre kényan des ressources génétiques animales) fournit la semence par des agents agréés, et les inséminateurs doivent être enregistrés auprès du Kenya Veterinary Board (l'ordre vétérinaire du Kenya) ; au Nigeria, vérifiez que le vétérinaire figure au registre du Veterinary Council of Nigeria. Une règle courante pour les vaches est la règle matin-soir : une vache vue pour la première fois en acceptation du chevauchement le matin est inséminée l'après-midi ou le soir même ; une vache vue pour la première fois l'après-midi est inséminée le lendemain matin. Appelez l'inséminateur dès que vous voyez la chaleur, et notez le nom ou le code du taureau inscrit sur la paillette.",
            "La consanguinité, c'est faire reproduire des proches parents : un père avec sa fille, une mère avec son fils, ou un frère avec sa sœur. Les petits sont souvent plus faibles, grandissent lentement, tombent plus souvent malades et peuvent naître avec des malformations. Elle s'installe sans bruit quand le même taureau, bouc, verrat ou coq reste des années dans une ferme. Pour l'éviter : notez la mère et le père de chaque animal, échangez ou vendez votre mâle reproducteur avant que ses filles soient en âge de se reproduire, prêtez ou échangez des mâles avec des éleveurs dont les animaux ne sont pas parents des vôtres, et utilisez les paillettes d'un taureau différent chaque fois que vous faites reproduire une de ses filles."
          ],
          steps: ["Vous voyez une acceptation du chevauchement : notez l'heure.", "Appelez tout de suite votre inséminateur enregistré.", "Utilisez la règle matin-soir pour les vaches, ou le conseil de l'inséminateur.", "Vérifiez que la paillette vient d'un taureau connu et notez son nom ou son code.", "Avant chaque accouplement, vérifiez les registres : ce mâle est-il son père, son fils ou son frère ?", "Si oui, utilisez un autre mâle ou un autre taureau d'IA."],
          words: [["Insémination artificielle (IA)", "déposer à la main la semence d'un mâle choisi chez une femelle ; elle est faite par un inséminateur formé."], ["Paillette", "un tube fin qui contient une dose de semence congelée, marqué du nom ou du code du taureau."], ["Azote liquide", "un liquide très froid qui garde la semence congelée jusqu'à son utilisation."], ["Consanguinité", "faire reproduire des proches parents, ce qui donne des petits plus faibles avec plus de malformations."]],
          slides: [
            { title: "Pourquoi l'IA", bullets: ["D'excellents gènes sans garder de taureau", "Moins de risque de maladies transmises par l'accouplement", "Faite par un inséminateur formé, pas par l'éleveur"] },
            { title: "Trouver un inséminateur enregistré", bullets: ["Service de l'élevage, coopérative laitière ou vétérinaire", "Kenya : agents du KAGRC, Kenya Veterinary Board", "Nigeria : registre du Veterinary Council of Nigeria"] },
            { title: "Le moment : la règle matin-soir pour les vaches", bullets: ["Chaleur vue le matin : insémination l'après-midi", "Chaleur vue l'après-midi : insémination le lendemain matin", "Notez le nom ou le code du taureau sur la paillette"] },
            { title: "Éviter la consanguinité", bullets: ["Pas de père-fille, mère-fils ni frère-sœur", "Changez votre mâle avant que ses filles se reproduisent", "Un taureau d'IA différent pour chaque fille"] }
          ],
          sources: [UGA_HEAT, KAGRC, KVB, VCN, ILRI_AI],
          tryIt: "Écrivez le nom et le numéro de téléphone d'un inséminateur formé et enregistré près de chez vous (demandez au service de l'élevage ou à votre coopérative). Ensuite, regardez vos animaux : faites la liste des femelles proches parentes de votre mâle reproducteur actuel, et écrivez comment vous allez les faire reproduire à la place.",
          youCanNow: "organiser l'IA avec un inséminateur formé au bon moment et prévoir des accouplements qui évitent les proches parents.",
          quickCheck: [
            { objective: "O3", q: "Une vache accepte le chevauchement à 7 h du matin. Selon la règle matin-soir, quand doit-elle être inséminée ?", options: ["Dans deux jours", "L'après-midi ou le soir même", "La semaine prochaine", "Seulement quand elle ne montre plus de chaleur"], answer: 1, why: "Une vache vue pour la première fois en chaleur le matin est inséminée l'après-midi ou le soir même." },
            { objective: "O4", q: "Votre taureau est à la ferme depuis quatre ans et ses filles sont maintenant prêtes à se reproduire. Que faites-vous ?", options: ["Vous continuez à l'utiliser pour toutes", "Vous l'utilisez seulement pour ses plus grandes filles", "Vous arrêtez la reproduction pendant un an", "Vous utilisez un autre taureau, ou l'IA avec un taureau non apparenté, pour ses filles"], answer: 3, why: "Faire saillir ses filles par le taureau, c'est de la consanguinité ; un mâle non apparenté ou un autre taureau d'IA l'évite." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Bien reproduire pour un meilleur troupeau",
        questions: [
          { objective: "O1", q: "Pourquoi une race exotique à haut rendement peut-elle rapporter moins qu'un croisement local dans certaines fermes ?", options: ["Les races exotiques ne donnent jamais beaucoup de lait", "Les animaux locaux se vendent toujours plus cher", "On ne peut pas donner d'herbe aux races exotiques", "Elle demande des aliments, de l'eau et des soins que la ferme ne peut pas fournir, donc elle produit moins et tombe plus souvent malade"], answer: 3, why: "Le haut rendement dépend de bons aliments et de bons soins ; sans eux, un croisement résistant fait souvent mieux." },
          { objective: "O2", q: "À quelle fréquence devez-vous observer les signes de chaleur ?", options: ["Au moins deux fois par jour, le matin et le soir", "Une fois par semaine", "Seulement quand l'animal est malade", "Une fois par mois"], answer: 0, why: "La chaleur est courte : observer deux fois par jour, quand les animaux sont calmes, permet de repérer la plupart des chaleurs." },
          { objective: "O2", q: "Laquelle de ces informations doit figurer dans un registre de reproduction ?", options: ["Le temps qu'il fait chaque jour", "La date de saillie et le mâle ou la paillette d'IA utilisée", "La couleur du bâtiment", "Le prix du carburant"], answer: 1, why: "La date de saillie et le géniteur permettent de surveiller le retour en chaleur, de prévoir la mise bas et d'éviter la consanguinité." },
          { objective: "O3", q: "Qui doit faire l'insémination artificielle ?", options: ["N'importe quel ouvrier de la ferme après avoir regardé une vidéo", "La personne qui vend la vache", "Un inséminateur formé et enregistré, ou un vétérinaire", "Un voisin qui a le bras fort"], answer: 2, why: "L'IA demande une formation : une mauvaise technique peut blesser l'animal, et la semence doit être manipulée correctement." },
          { objective: "O4", q: "Quel accouplement est de la consanguinité ?", options: ["Une vache avec un taureau d'IA non apparenté", "Une chèvre avec un bouc prêté par un autre village", "Une cochette avec un verrat acheté dans une ferme lointaine", "Un bélier avec sa propre fille"], answer: 3, why: "Un père avec sa fille, c'est un accouplement entre proches parents, donc de la consanguinité." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Garder les maladies dehors",
      lessons: [
        {
          title: "Votre plan de biosécurité : zones, pédiluves et visiteurs",
          objectives: ["O5"],
          minutes: 5,
          goal: "Dessiner les zones de biosécurité de votre ferme et écrire les règles pour les pédiluves et les visiteurs.",
          text: [
            "La biosécurité, c'est tout ce que vous faites pour empêcher les microbes d'entrer dans votre ferme, de s'y répandre et d'en sortir. La plupart des maladies arrivent avec des animaux, des personnes, des chaussures, des vêtements, des véhicules, des cages, des sacs d'aliments ou du matériel. Beaucoup des meilleures mesures coûtent peu : une clôture, un portail, un pédiluve, du savon et une règle respectée chaque jour.",
            "Divisez la ferme en zones. La zone propre est là où vivent les animaux : seules les personnes qui s'en occupent y entrent. La zone tampon l'entoure : le magasin, le vestiaire, le pédiluve. La zone sale est à l'extérieur : la route, le parking, les cages du marché. Prévoyez UNE seule entrée vers les animaux, avec un portail qui se ferme. Les camions des commerçants restent hors de la clôture ; on charge et on décharge à la limite.",
            "À l'entrée, placez un pédiluve avec un désinfectant pour élevage préparé comme l'indique l'étiquette, et changez-le quand il est sale ou après la pluie ; la saleté empêche le désinfectant d'agir, alors brossez d'abord la boue des bottes. Mieux encore, gardez à l'entrée des bottes et des vêtements réservés à la ferme. Prévoyez de l'eau et du savon pour les mains. Limitez les visites aux personnes qui doivent vraiment venir, demandez-leur où elles ont été en contact avec des animaux, et notez chaque visite dans un registre des visiteurs : date, nom, téléphone, motif et dernière ferme visitée."
          ],
          steps: ["Dessinez votre ferme : maisons, enclos, magasin, portail et route.", "Marquez la zone propre, la zone tampon et la zone sale.", "Choisissez une seule entrée vers les animaux, avec un portail.", "Placez un pédiluve et un point de lavage des mains à cette entrée.", "Gardez-y des bottes et des vêtements réservés à la ferme si vous pouvez.", "Commencez un registre des visiteurs et laissez les véhicules des commerçants hors de la clôture."],
          words: [["Biosécurité", "les mesures qui empêchent les microbes d'entrer dans une ferme, de s'y répandre et d'en sortir."], ["Pédiluve", "un bac peu profond rempli de désinfectant où l'on passe pour nettoyer ses bottes."], ["Désinfectant", "un produit chimique qui tue les microbes ; utilisez un produit pour élevage préparé comme l'indique l'étiquette."], ["Registre des visiteurs", "un cahier où vous notez le nom, le contact, le motif et la dernière ferme visitée de chaque visiteur."]],
          slides: [
            { title: "Les microbes arrivent avec...", bullets: ["Les nouveaux animaux, les personnes, les chaussures et les vêtements", "Les véhicules, les cages, les sacs d'aliments et les outils", "La plupart des bonnes mesures coûtent peu"] },
            { title: "Trois zones", bullets: ["Propre : là où vivent les animaux", "Tampon : magasin, vestiaire, pédiluve", "Sale : route, parking, cages du marché"] },
            { title: "Une seule entrée, avec un pédiluve", bullets: ["Un seul portail vers les animaux", "Brossez la boue, puis passez dans le pédiluve", "Désinfectant préparé comme l'indique l'étiquette"] },
            { title: "Les visiteurs", bullets: ["Seulement ceux qui doivent venir", "Bottes de la ferme et lavage des mains", "Notez date, nom, téléphone, motif, dernière ferme"] }
          ],
          sources: [FAO_PIG_BIOSEC, FAO_POULTRY_BIOSEC],
          tryIt: "Dessinez votre ferme sur papier. Marquez la zone propre, la zone tampon et la zone sale, l'entrée unique, le pédiluve et l'endroit où les camions s'arrêteront. Écrivez trois règles pour les visiteurs sous le dessin.",
          youCanNow: "dessiner les zones de biosécurité de votre ferme et fixer des règles pour les pédiluves, le lavage des mains et les visiteurs.",
          quickCheck: [
            { objective: "O5", q: "Un marchand de porcs arrive pour acheter des porcelets sevrés. Où son camion doit-il s'arrêter ?", options: ["Hors de la clôture, avec le chargement à la limite", "À côté des enclos des porcs", "Dans le magasin d'aliments", "Où il veut"], answer: 0, why: "Les véhicules qui passent dans beaucoup de fermes transportent des microbes, alors ils restent dans la zone sale, hors de la clôture." },
            { objective: "O5", q: "Votre pédiluve est plein de boue après la pluie. Que faites-vous ?", options: ["Vous le laissez ; il marche encore", "Vous ajoutez seulement de l'eau", "Vous le videz, le nettoyez et le remplissez de désinfectant préparé comme l'indique l'étiquette", "Vous l'enlevez jusqu'à la saison sèche"], answer: 2, why: "La saleté et l'eau en trop empêchent le désinfectant d'agir, donc un pédiluve sale doit être nettoyé et rempli à nouveau." }
          ]
        },
        {
          title: "La quarantaine des nouveaux animaux et l'élimination sans risque des animaux morts",
          objectives: ["O5"],
          minutes: 5,
          goal: "Mettre en place la quarantaine des nouveaux animaux et une façon sûre d'éliminer les animaux morts.",
          text: [
            "Les nouveaux animaux sont le chemin le plus courant par lequel une maladie entre dans une ferme. Un animal peut avoir l'air en bonne santé et porter quand même des microbes ou des parasites. Achetez dans des fermes connues et saines, demandez l'historique des vaccins et des traitements de l'animal, et évitez les animaux venant de marchés ou de zones où des maladies sont signalées.",
            "La quarantaine, c'est garder les animaux nouveaux ou qui reviennent dans un enclos à part, loin de votre troupeau ou de votre bande, pendant la durée que conseille votre vétérinaire, souvent quelques semaines. Occupez-vous d'eux en dernier chaque jour, avec des bottes et des outils à part, et observez-les tous les jours. Demandez à votre vétérinaire s'il faut les tester, les traiter ou les vacciner avant qu'ils rejoignent les autres. Les animaux qui reviennent invendus d'un marché ou d'une foire vont aussi en quarantaine.",
            "Les animaux morts transmettent des maladies à vos animaux, aux chiens, aux animaux sauvages et aux voisins. Ne vendez, ne mangez et ne donnez jamais un animal mort d'une cause inconnue. Manipulez les cadavres avec des gants, puis éliminez-les comme le disent votre vétérinaire ou les règles locales : souvent une fosse profonde, loin de l'eau et des maisons, que les chiens et les animaux sauvages ne peuvent pas creuser. Si un animal est mort brusquement, ou si plusieurs sont malades, n'ouvrez pas le cadavre et ne le sortez pas de la ferme : appelez d'abord le vétérinaire, car il peut s'agir d'une maladie à déclaration obligatoire ou du charbon (anthrax)."
          ],
          steps: ["Achetez seulement dans des fermes connues et saines ; demandez l'historique sanitaire.", "Préparez un enclos de quarantaine à part, loin du troupeau ou de la bande.", "Gardez-y les animaux nouveaux ou qui reviennent pendant la durée que conseille votre vétérinaire.", "Occupez-vous d'eux en dernier chaque jour, avec des bottes et des outils à part.", "Choisissez avec votre vétérinaire un lieu d'élimination des cadavres, loin de l'eau et des maisons.", "Morts brusques ou inexpliquées : n'ouvrez pas et ne déplacez pas le cadavre ; appelez le vétérinaire."],
          words: [["Quarantaine", "garder à part pendant un temps les animaux nouveaux ou qui reviennent, pour voir s'ils portent une maladie."], ["Cadavre", "le corps d'un animal mort."], ["Maladie à déclaration obligatoire", "une maladie que la loi oblige à signaler à l'autorité vétérinaire."]],
          slides: [
            { title: "Les nouveaux animaux apportent des maladies", bullets: ["Un animal qui a l'air sain peut porter des microbes", "Achetez dans des fermes connues et saines", "Demandez l'historique sanitaire"] },
            { title: "La quarantaine", bullets: ["Enclos à part, loin du troupeau ou de la bande", "Pendant la durée que conseille votre vétérinaire", "Occupez-vous d'eux en dernier, bottes et outils à part"] },
            { title: "Les animaux morts", bullets: ["Ne jamais vendre, manger ni donner", "Gants ; élimination selon le vétérinaire ou les règles locales", "Fosse profonde, loin de l'eau ; les chiens ne peuvent pas creuser"] },
            { title: "Les morts brusques", bullets: ["N'ouvrez pas et ne déplacez pas le cadavre", "Appelez d'abord le vétérinaire"] }
          ],
          sources: [FAO_PIG_BIOSEC, FAO_POULTRY_BIOSEC],
          tryIt: "Marquez un enclos de quarantaine sur le dessin de votre ferme, aussi loin que possible de vos animaux, et écrivez combien de temps votre vétérinaire conseille d'y garder les nouveaux animaux (demandez-lui si vous ne savez pas). Marquez ensuite où et comment vous éliminerez les animaux morts, et écrivez la règle pour les morts brusques.",
          youCanNow: "mettre les nouveaux animaux en quarantaine, éliminer sans risque les animaux morts, et savoir quand appeler le vétérinaire avant de toucher un cadavre.",
          quickCheck: [
            { objective: "O5", q: "Vous achetez trois chèvres au marché. Que faites-vous en rentrant ?", options: ["Vous les mettez tout de suite avec votre troupeau", "Vous les gardez dans un enclos à part pendant la durée que conseille votre vétérinaire", "Vous les revendez tout de suite", "Vous les laissez pâturer avec les chèvres du voisin"], answer: 1, why: "La quarantaine montre si les nouveaux animaux portent une maladie avant qu'ils puissent contaminer votre troupeau." },
            { objective: "O5", q: "Un porc meurt brusquement pendant la nuit. Quelle est la bonne première étape ?", options: ["L'ouvrir pour voir ce qui s'est passé", "Vendre vite la viande", "Laisser le cadavre où il est, éloigner les personnes et les animaux, et appeler le vétérinaire", "Le jeter dans la rivière"], answer: 2, why: "Une mort brusque peut venir d'une maladie à déclaration obligatoire ; ouvrir ou déplacer le cadavre peut la répandre." }
          ]
        },
        {
          title: "Peste porcine africaine et influenza aviaire : repérer, arrêter, signaler",
          objectives: ["O6"],
          minutes: 6,
          goal: "Reconnaître les signes d'alerte de la peste porcine africaine et de l'influenza aviaire et les signaler tout de suite au vétérinaire.",
          text: [
            "La peste porcine africaine (PPA) est une maladie virale des porcs qui a causé de lourdes pertes dans plusieurs pays africains, dont le Nigeria. La WOAH (Organisation mondiale de la santé animale) cite une forte fièvre, de la faiblesse, une perte d'appétit, des taches rouges ou violettes sur la peau, des vomissements, de la diarrhée, des avortements chez les truies et la mort, avec jusqu'à 100 pour cent des porcs qui meurent dans les formes graves. Elle se transmet par contact avec des porcs malades, par la viande de porc et les restes de repas (eaux grasses) venant de porcs infectés, par les vêtements, les bottes, les véhicules et le matériel contaminés, et par les tiques molles là où elles existent. Le virus survit longtemps dans la viande de porc et dans l'environnement. Il n'infecte pas les humains. La FAO dit qu'il n'existe ni vaccin ni traitement efficace, donc la prévention est le seul moyen de lutte ; la WOAH met en garde contre les vaccins de mauvaise qualité, alors n'utilisez jamais un \"vaccin contre la PPA\" que l'autorité vétérinaire de votre pays n'a pas approuvé.",
            "L'influenza aviaire (grippe aviaire) est une maladie virale des oiseaux. Les formes graves peuvent tuer la plus grande partie d'une bande en quelques jours. Parmi les signes cités par l'USDA APHIS (le service de santé animale des États-Unis) : des morts brusques sans signe avant-coureur, des oiseaux faibles qui ne mangent plus, une baisse de la ponte ou des œufs à coquille molle, une crête, des barbillons et des pattes gonflés et violets, des halètements, de la toux et des cous tordus. Elle se transmet par les oiseaux sauvages, les oiseaux malades, les marchés de volailles vivantes, les fientes, les cages, les aliments, l'eau et le matériel. Les humains l'attrapent rarement, surtout par contact étroit avec des oiseaux malades, alors ne touchez jamais des oiseaux malades ou morts à mains nues.",
            "Ces deux maladies sont à déclaration obligatoire : les cas suspects doivent être signalés tout de suite à votre vétérinaire ou à l'autorité vétérinaire. Seul un test de laboratoire peut les confirmer, car d'autres maladies leur ressemblent. Pour les prévenir : ne donnez jamais d'eaux grasses non cuites aux porcs, achetez seulement dans des fermes saines, gardez les porcs en enclos et les volailles en bâtiment, loin des oiseaux sauvages, et appliquez votre plan de biosécurité chaque jour. Si vous soupçonnez l'une ou l'autre : gardez tous les animaux enfermés, arrêtez toute vente et tout déplacement d'animaux, de viande, d'œufs et de fumier, n'acceptez aucun visiteur, et appelez le vétérinaire."
          ],
          steps: ["Connaissez les signes de la PPA (porcs) et de l'influenza aviaire (volailles).", "Examinez vos animaux chaque jour.", "Vous soupçonnez un cas : gardez tous les animaux dans leurs enclos ou leurs bâtiments.", "Arrêtez toute vente et tout déplacement : animaux, viande, œufs, fumier, matériel.", "N'ouvrez pas, ne vendez pas et ne mangez pas les animaux malades ou morts ; jamais à mains nues.", "Appelez tout de suite votre vétérinaire ou votre service vétérinaire et suivez ses instructions."],
          words: [["Peste porcine africaine (PPA)", "une maladie virale mortelle des porcs, sans vaccin ni traitement efficace ; elle n'infecte pas les humains."], ["Influenza aviaire", "la grippe aviaire : une maladie virale des oiseaux ; les formes graves tuent la plus grande partie d'une bande."], ["Eaux grasses", "des restes de repas donnés aux porcs ; des eaux grasses non cuites contenant du porc peuvent transmettre la PPA."], ["Autorité vétérinaire", "le service de l'État chargé des maladies animales, comme les services vétérinaires nationaux ou du comté."]],
          slides: [
            { title: "La peste porcine africaine (porcs)", bullets: ["Forte fièvre, faiblesse, ne mange plus, peau rouge ou violette", "Vomissements, diarrhée, avortements, morts brusques", "Pas de vaccin ni de traitement efficace (FAO)"] },
            { title: "Comment la PPA se transmet", bullets: ["Porcs malades, viande de porc et eaux grasses non cuites", "Bottes, vêtements, véhicules et outils", "N'infecte pas les humains"] },
            { title: "L'influenza aviaire (volailles)", bullets: ["Morts brusques ; oiseaux faibles ; baisse de la ponte", "Crête et barbillons gonflés et violets ; halètements", "Transmise par oiseaux sauvages, marchés, cages, fientes"] },
            { title: "Déclaration obligatoire : signalez tout de suite", bullets: ["Tous les animaux enfermés ; arrêtez toute vente et tout déplacement", "Jamais à mains nues ; ne pas ouvrir, vendre ni manger", "Appelez maintenant le vétérinaire ou le service vétérinaire"] }
          ],
          sources: [WOAH_ASF, FAO_ASF, WOAH_ASF_VACCINE, WOAH_AI, APHIS_AI],
          tryIt: "Tâche finale : écrivez votre plan de biosécurité d'une page. Utilisez le dessin de votre ferme avec les zones, le pédiluve et les règles pour les visiteurs, la quarantaine et l'élimination des animaux morts, puis ajoutez les signes d'alerte de la PPA ou de l'influenza aviaire, ce que vous ferez dans la première heure, et le nom et le numéro de téléphone de votre vétérinaire.",
          youCanNow: "reconnaître les signes d'alerte de la peste porcine africaine et de l'influenza aviaire, arrêter tout déplacement, et signaler tout de suite les cas suspects au vétérinaire.",
          quickCheck: [
            { objective: "O6", q: "Plusieurs de vos porcs ont une forte fièvre et des taches violettes sur la peau, et deux sont morts pendant la nuit. Que faites-vous d'abord ?", options: ["Vendre vite les autres avant qu'ils meurent", "Acheter un vaccin contre la PPA au marché", "Les traiter avec des restes de médicaments", "Garder tous les porcs enfermés, arrêter tout déplacement et toute vente, et appeler tout de suite le vétérinaire"], answer: 3, why: "Ce sont des signes d'alerte de la PPA, une maladie à déclaration obligatoire : arrêtez les déplacements et signalez-la immédiatement." },
            { objective: "O6", q: "Quelle pratique aide à garder la peste porcine africaine dehors ?", options: ["Ne jamais donner d'eaux grasses non cuites aux porcs", "Donner aux porcs les restes de repas des hôtels", "Laisser les porcs divaguer dans le village", "Acheter des porcs à n'importe quel marchand de passage"], answer: 0, why: "Les restes de repas non cuits peuvent contenir de la viande de porc avec le virus de la PPA, qui survit longtemps dans la viande." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Garder les maladies dehors",
        questions: [
          { objective: "O5", q: "Dans un plan de biosécurité, quelle est la zone propre ?", options: ["La route devant la ferme", "Le parking des camions", "Là où vivent les animaux", "Le marché"], answer: 2, why: "La zone propre est la zone des animaux, où seules les personnes qui s'en occupent entrent." },
          { objective: "O5", q: "À quoi sert surtout un registre des visiteurs ?", options: ["À faire payer les visiteurs", "À savoir qui est venu, quand et d'où, si une maladie apparaît", "À compter vos amis", "À faire de la publicité pour la ferme"], answer: 1, why: "Si une maladie apparaît, le registre aide le vétérinaire à retrouver d'où elle a pu venir." },
          { objective: "O5", q: "Comment devez-vous éliminer une chèvre morte d'une cause inconnue ?", options: ["Vendre la viande pas cher", "La donner aux chiens", "La laisser en brousse", "Mettre des gants et l'éliminer comme le disent le vétérinaire ou les règles locales, loin de l'eau"], answer: 3, why: "Les cadavres transmettent des maladies ; une élimination sûre, comme le conseille le vétérinaire, protège les animaux, les personnes et l'eau." },
          { objective: "O6", q: "Existe-t-il un vaccin ou un traitement efficace contre la peste porcine africaine ?", options: ["Non ; la FAO dit que la prévention par la biosécurité est le seul moyen de lutte", "Oui, n'importe quel antibiotique la guérit", "Oui, on en vend sur tous les marchés", "Oui, un mélange de plantes la guérit"], answer: 0, why: "La FAO dit qu'il n'existe ni vaccin ni traitement efficace contre la PPA, donc la lutte passe par la prévention." },
          { objective: "O6", q: "Vos pondeuses arrêtent brusquement de pondre, certaines ont la crête gonflée et violette, et beaucoup meurent en une journée. Que faites-vous ?", options: ["Vendre aujourd'hui les œufs et les oiseaux au marché", "Enterrer les oiseaux morts sans rien dire", "Garder les oiseaux enfermés, arrêter tout déplacement, ne pas les toucher à mains nues et prévenir tout de suite le vétérinaire", "Lâcher les oiseaux dehors"], answer: 2, why: "Ces signes font penser à l'influenza aviaire, qui est à déclaration obligatoire et doit être signalée tout de suite." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Élevage, reproduction et biosécurité à la ferme",
    questions: [
      { objective: "O1", q: "Qu'est-ce qui doit le plus guider votre choix de race ?", options: ["Ce que veulent vos acheteurs et ce que votre ferme peut fournir toute l'année", "La race de la dernière publicité", "La race qui a les plus gros animaux", "L'animal le moins cher du marché"], answer: 0, why: "Une race ne rapporte que si elle répond au marché et si votre ferme peut la nourrir et la soigner." },
      { objective: "O1", q: "Quel est un point fort de beaucoup de races locales comme la chèvre naine d'Afrique de l'Ouest ou les bovins N'Dama ?", options: ["La plus forte production de lait du monde", "Elles supportent la chaleur, les tiques et une alimentation pauvre", "Elles ne tombent jamais malades", "Elles n'ont pas besoin d'eau"], answer: 1, why: "Les races locales sont résistantes ; en échange, elles grandissent et produisent moins." },
      { objective: "O1", q: "À qui pouvez-vous demander quelles races réussissent dans votre zone ?", options: ["À un message pris au hasard sur les réseaux sociaux", "À un marchand qui ne vend qu'une seule race", "À votre agent de vulgarisation, à une association d'éleveurs ou à un institut de recherche", "À personne ; achetez et vous verrez"], answer: 2, why: "Les experts et les éleveurs de la région savent quelles races marchent dans vos conditions." },
      { objective: "O2", q: "Environ tous les combien les vaches, les chèvres et les truies reviennent-elles en chaleur si elles ne sont pas pleines ?", options: ["Tous les 3 jours", "Tous les 6 mois", "Une fois par an", "Environ tous les 21 jours"], answer: 3, why: "Le cycle habituel est d'environ 21 jours, même s'il varie." },
      { objective: "O2", q: "Quel est le meilleur moment pour observer les chaleurs ?", options: ["Seulement à midi", "Tôt le matin et le soir, quand les animaux sont calmes", "Seulement au repas les jours de marché", "Une fois par semaine"], answer: 1, why: "Les signes de chaleur se voient mieux quand les animaux sont calmes, au moins deux fois par jour." },
      { objective: "O2", q: "Pourquoi noter la date de saillie ?", options: ["Pour surveiller un retour en chaleur et connaître la date de mise bas", "Parce que la loi demande une photo", "Pour fixer le prix du lait", "Pour choisir la marque d'aliment"], answer: 0, why: "La date de saillie vous dit quand surveiller le retour en chaleur et quand la naissance est prévue." },
      { objective: "O2", q: "Environ combien de temps dure la gestation d'une truie ?", options: ["Environ 9 mois", "Environ 3 semaines", "Environ 3 mois, 3 semaines et 3 jours", "Environ 1 an"], answer: 2, why: "La gestation de la truie dure environ 3 mois, 3 semaines et 3 jours ; vérifiez pour votre race avec votre vétérinaire." },
      { objective: "O3", q: "Quel est un grand avantage de l'insémination artificielle pour un petit éleveur ?", options: ["Elle remplace toute l'alimentation", "Elle évite de tenir des registres", "Elle supprime toutes les maladies", "L'accès à d'excellents gènes sans garder de taureau"], answer: 3, why: "L'IA apporte des gènes reconnus aux petites fermes qui ne peuvent pas garder un excellent mâle." },
      { objective: "O3", q: "Une vache accepte le chevauchement pour la première fois l'après-midi. Quand l'inséminateur doit-il l'inséminer ?", options: ["Le lendemain matin", "Tout de suite, la nuit", "Dans une semaine", "À la chaleur suivante"], answer: 0, why: "Selon la règle matin-soir, une chaleur vue pour la première fois l'après-midi est inséminée le lendemain matin." },
      { objective: "O3", q: "Comment trouver un inséminateur de confiance ?", options: ["N'importe qui avec une bonbonne de semence", "Un inséminateur formé et enregistré, trouvé par le service de l'élevage, la coopérative ou le vétérinaire", "La personne la moins chère du marché", "Un tutoriel vidéo"], answer: 1, why: "La formation et l'enregistrement protègent vos animaux et votre argent." },
      { objective: "O3", q: "Pourquoi la semence doit-elle rester dans l'azote liquide jusqu'à son utilisation ?", options: ["Pour qu'elle soit plus lourde", "Pour changer sa couleur", "Parce qu'elle meurt si elle se réchauffe", "Pour y ajouter des vitamines"], answer: 2, why: "La semence congelée meurt si elle n'est pas gardée très froide jusqu'au moment de l'insémination." },
      { objective: "O4", q: "Que se passe-t-il pour les petits de parents proches parents ?", options: ["Ils sont toujours plus forts", "Ils grandissent plus vite", "Ils ont besoin de moins d'aliments", "Ils sont souvent plus faibles, plus malades et peuvent avoir des malformations"], answer: 3, why: "La consanguinité augmente le nombre de petits faibles, malades ou malformés." },
      { objective: "O4", q: "Quel est un moyen simple d'éviter la consanguinité avec votre propre mâle reproducteur ?", options: ["L'échanger ou le vendre avant que ses filles soient en âge de se reproduire", "Le garder toute sa vie", "L'utiliser seulement en saison des pluies", "Lui donner plus à manger"], answer: 0, why: "Changer de mâle avant que ses filles se reproduisent empêche les accouplements père-fille." },
      { objective: "O4", q: "Quels registres vous aident à éviter la consanguinité ?", options: ["Les prix des aliments", "La pluie", "La mère et le père de chaque animal", "Les noms des visiteurs"], answer: 2, why: "Connaître les parents montre quels animaux sont apparentés." },
      { objective: "O5", q: "Combien d'entrées doit avoir la zone des animaux ?", options: ["Le plus possible", "Une seule, avec un portail, un pédiluve et le lavage des mains", "Aucune ; les animaux divaguent", "Une par visiteur"], answer: 1, why: "Une seule entrée contrôlée rend les règles de biosécurité faciles à respecter." },
      { objective: "O5", q: "Pourquoi brosser la boue des bottes avant le pédiluve ?", options: ["La saleté empêche le désinfectant d'agir", "Pour économiser l'eau", "La boue alourdit les bottes", "Ça n'a pas d'importance"], answer: 0, why: "Les désinfectants agissent mal sur les surfaces sales." },
      { objective: "O5", q: "Des porcs reviennent invendus du marché. Que faites-vous ?", options: ["Vous les remettez tout de suite avec les autres", "Vous les donnez au portail", "Vous les lâchez dans le village", "Vous les mettez en quarantaine comme des nouveaux animaux"], answer: 3, why: "Les animaux du marché ont pu attraper une maladie, alors ils vont en quarantaine." },
      { objective: "O6", q: "Lequel de ces éléments transmet la peste porcine africaine ?", options: ["La pluie sur le toit", "Donner du son de maïs aux porcs", "La viande de porc dans des restes de repas non cuits, les porcs malades et les bottes ou véhicules sales", "L'eau de boisson propre"], answer: 2, why: "La PPA se transmet par les porcs infectés, les produits du porc, les eaux grasses et les objets contaminés." },
      { objective: "O6", q: "La peste porcine africaine infecte-t-elle les humains ?", options: ["Oui, toujours", "Seulement les enfants", "Seulement les ouvriers agricoles", "Non, elle n'infecte pas les humains"], answer: 3, why: "La WOAH dit que la PPA ne touche pas la santé humaine, mais elle est mortelle pour les porcs." },
      { objective: "O6", q: "Pourquoi faut-il signaler tout de suite une suspicion d'influenza aviaire ?", options: ["Elle est à déclaration obligatoire et se répand vite entre les fermes", "Pour recevoir un vaccin gratuit à chaque fois", "Parce que les oiseaux arrêtent de manger", "Pour changer le prix au marché"], answer: 0, why: "Les maladies à déclaration obligatoire doivent être signalées pour que l'autorité vétérinaire puisse arrêter leur propagation." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  // test de départ : ces questions du quiz, avant la leçon 1, pour que le quiz montre les progrès de chaque apprenant
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 8, 11, 14, 16, 17, 19] },
  rubric: {
    mastery: "Atteint ou Dépasse sur chaque ligne. Si une ligne est Pas encore, corrigez cette partie du plan et vérifiez-la à nouveau.",
    criteria: [
      { name: "Zones et entrée", objective: "O5", notYet: "Pas de croquis, ou les animaux et les véhicules se mélangent sans zones marquées.", meets: "Le croquis montre la zone propre, la zone tampon et la zone sale, une seule entrée et l'endroit où les camions s'arrêtent.", exceeds: "Il montre aussi le chemin des aliments, du fumier et des animaux morts pour qu'ils ne traversent jamais la zone propre." },
      { name: "Pédiluve et règles pour les visiteurs", objective: "O5", notYet: "Pas de pédiluve ni de règles pour les visiteurs, ou des règles que personne ne peut suivre.", meets: "Pédiluve avec un désinfectant préparé comme l'indique l'étiquette, lavage des mains, et un registre des visiteurs avec la dernière ferme visitée.", exceeds: "Bottes et vêtements réservés à la ferme, et une personne nommée qui vérifie les règles chaque jour." },
      { name: "Quarantaine et animaux morts", objective: "O5", notYet: "Les nouveaux animaux rejoignent tout de suite le troupeau, ou les cadavres sont vendus, mangés ou jetés.", meets: "Un enclos de quarantaine à part pendant la durée que conseille le vétérinaire, et un lieu d'élimination sûr choisi avec le vétérinaire.", exceeds: "Couvre aussi les animaux qui reviennent du marché et la règle de ne jamais ouvrir un animal mort brusquement." },
      { name: "Réponse à la PPA ou à l'influenza aviaire", objective: "O6", notYet: "Les signes d'alerte manquent, ou le plan dit de vendre, de traiter ou d'attendre.", meets: "Donne les signes d'alerte et les actions de la première heure : garder les animaux enfermés, arrêter tout déplacement, signaler tout de suite.", exceeds: "Nomme le service vétérinaire, son numéro de téléphone et la personne qui appellera, ainsi que la règle sans eaux grasses ou contre les oiseaux sauvages." },
      { name: "Reproduction et nouveaux animaux", objective: "O4", notYet: "De nouveaux reproducteurs sont achetés sans vérification, ou le plan permet des accouplements entre parents.", meets: "Les nouveaux reproducteurs viennent de fermes connues et saines, et le plan évite les accouplements entre parents.", exceeds: "Utilise l'IA avec des taureaux non apparentés ou un plan d'échange de mâles, avec les registres des parents." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Fermes qui utilisent un pédiluve, une seule entrée contrôlée et un registre des visiteurs 30 jours après le cours (enquête de suivi ou visite de vulgarisation)",
      "Apprenants qui tiennent un registre de reproduction et signalent moins de chaleurs ratées ou d'inséminations répétées",
      "Cas suspects de PPA ou d'influenza aviaire signalés par les apprenants au vétérinaire en moins d'un jour",
      "Moins de morts par maladie dans les troupeaux et les bandes des apprenants au cours de l'année suivante"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un cahier et un stylo, ou une note ou un tableur sur le téléphone, pour les registres de reproduction et le registre des visiteurs",
      "Du papier pour le croquis de la ferme",
      "Le nom et le numéro de téléphone d'un vétérinaire local, du service vétérinaire et d'un inséminateur enregistré",
      "Environ 60 à 75 minutes au total, en courtes séances : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Faites le cours avec un groupe d'éleveurs ou une coopérative : passez le test de départ ensemble, puis un chapitre par séance, en faisant les tâches \"Essayez maintenant\" dans de vraies fermes quand c'est possible.",
      "Invitez le vétérinaire ou l'agent de santé animale local à la séance du chapitre 2 pour expliquer comment signaler la PPA et l'influenza aviaire dans votre pays et les règles locales d'élimination.",
      "Ne donnez et ne discutez jamais de doses de médicaments, de vaccins ou d'hormones ni de délais d'attente ; renvoyez chaque question de ce genre au vétérinaire et à l'étiquette.",
      "Ne laissez pas le groupe visiter plusieurs élevages de porcs ou de volailles le même jour ; appliquez la biosécurité pendant la formation elle-même.",
      "Évaluez le plan de biosécurité de chaque apprenant avec la grille et donnez un retour sur une ligne Pas encore à la fois."
    ]
  }
};
