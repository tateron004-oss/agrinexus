"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-extension-farmer-trainer.js). See scripts/koachlearn-courses/README.md, "Translations".

const FAO_FFS = { name: "Plateforme mondiale des champs-écoles paysans de la FAO : présentation", url: "https://www.fao.org/farmer-field-schools/overview/en/" };
const IDE_FBA = { name: "iDE : Farm Business Advisors (conseillers d'affaires agricoles)", url: "https://www.ideglobal.org/story/fbas" };
const GIZ_FBS = { name: "GIZ : agrobusiness durable des petits exploitants (Farmer Business School, Afrique de l'Ouest et du Centre)", url: "https://www.giz.de/en/projects/sustainable-smallholder-agribusiness" };
const ICRAF_VFT = { name: "CGIAR / ICRAF : l'approche des formateurs paysans volontaires en Afrique de l'Est", url: "https://cgspace.cgiar.org/handle/10568/123260" };
const NAERLS = { name: "National Agricultural Extension and Research Liaison Services (NAERLS, service national de liaison entre vulgarisation et recherche agricoles), Nigeria", url: "https://www.naerls.gov.ng/" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO, organisme kényan de recherche agricole et d'élevage)", url: "https://www.kalro.org" };
const PCPB = { name: "Pest Control Products Board (office des produits phytosanitaires, Kenya) : produits homologués", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "NAFDAC (Nigeria) : homologation des produits agrochimiques", url: "https://www.nafdac.gov.ng" };
const ODPC = { name: "Office of the Data Protection Commissioner (Bureau du commissaire à la protection des données, Kenya)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC, Commission de protection des données du Nigeria)", url: "https://ndpc.gov.ng" };

module.exports = {
  id: "agri-extension-farmer-trainer-fr",
  lang: "fr",
  translationOf: "agri-extension-farmer-trainer",
  category: "Agriculture (Africa)",
  name: "Devenir formateur paysan : vulgarisation agricole et conseillers d'affaires agricoles",
  skills: "Connaître les rôles dans la vulgarisation agricole, Planifier une séance de formation montrer-essayer-discuter, Animer une parcelle de démonstration et une séance de champ-école, Conseiller de façon responsable et orienter, Gagner sa vie de façon éthique avec les intrants et les services, Tenir des registres de formation",
  outcome: "planifier et animer une courte journée de formation pour les agriculteurs de votre communauté : une leçon pratique basée sur montrer, essayer et discuter, une parcelle de démonstration qui compare la pratique habituelle à une meilleure pratique, des conseils honnêtes qui savent quand orienter vers un expert, et des registres de qui vous avez formé et de ce qui a changé.",
  about: [
    "Ce cours s'adresse aux agriculteurs qui veulent enseigner à leurs voisins : paysans relais, formateurs paysans volontaires, personnes qui veulent devenir conseillers d'affaires agricoles (Farm ou Farmer Business Advisors), jeunes agripreneurs, responsables de coopératives et nouveaux agents de vulgarisation au Kenya, au Nigeria, au Ghana, en Côte d'Ivoire, au Cameroun et partout en Afrique.",
    "Vous apprendrez comment fonctionne la vulgarisation et quelle est votre place, comment les adultes apprennent le mieux, comment animer une parcelle de démonstration et une séance de champ-école paysan, comment planifier une courte séance, comment utiliser les téléphones et les vidéos pour toucher plus d'agriculteurs, comment conseiller de façon responsable et quand orienter vers un expert, comment gagner votre vie de façon éthique en vendant des intrants et des services, et comment tenir des registres de qui vous avez formé et de ce qui a changé.",
    "Vous terminez avec un plan de leçon et un plan de parcelle de démonstration pour une vraie journée de formation dans votre communauté. Les montants sont seulement des exemples. Chaque leçon se termine par une tâche ; un contrôle des connaissances clôt chaque chapitre et un quiz de 20 questions clôt le cours."
  ],
  finalTask: "Planifiez une journée de formation pour 15 à 25 agriculteurs de votre communauté sur une pratique que vous connaissez bien (par exemple semer le maïs en lignes avec du compost, stocker le grain dans des sacs hermétiques, ou faire vacciner les poulets par le vétérinaire). Écrivez : (1) un plan de leçon de 60 à 90 minutes qui suit montrer, essayer, discuter, avec la compétence, le matériel, les durées et la façon de vérifier que chaque agriculteur sait le faire ; (2) un plan de parcelle de démonstration avec deux parcelles côte à côte (pratique habituelle et nouvelle pratique), de même taille, avec des panneaux, ce que vous allez noter et les dates des visites de terrain ; (3) votre liste d'orientation (vétérinaire, bureau de vulgarisation, organisme qui contrôle les intrants) et ce sur quoi vous ne donnerez pas de conseils ; (4) une fiche de registre de formation avec consentement et une date de suivi.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Paysans relais, formateurs paysans volontaires, futurs conseillers d'affaires agricoles, jeunes agripreneurs, responsables de coopératives et nouveaux agents de vulgarisation partout en Afrique, notamment au Kenya, au Nigeria, au Ghana, en Côte d'Ivoire et au Cameroun. La plupart sont des agriculteurs respectés, avec un vrai savoir-faire pratique, mais sans formation pour enseigner ou conseiller.",
    startingPoint: "Ils savent bien cultiver ou élever des animaux et donnent souvent des conseils informels à leurs voisins. Peu ont planifié une leçon, mis en place une parcelle de comparaison juste, tenu un registre de qui ils ont formé, ou réfléchi à l'endroit où leurs conseils doivent s'arrêter. Certains vendent des intrants et ne savent pas trop comment le faire de façon juste.",
    gap: "Il y a beaucoup trop peu d'agents de vulgarisation pour le nombre d'agriculteurs, donc les formateurs paysans et les conseillers portent une grande partie du travail. Sans compétences pour enseigner, sans limites honnêtes et sans registres, leur aide est moins efficace et peut faire du tort (mauvaises doses, produits non homologués, vente forcée). Les apprenants doivent enseigner d'une façon qui reste, conseiller sans danger, gagner leur vie de façon juste et montrer des résultats.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; le cours existe aussi en anglais, en espagnol et en arabe",
      "Appareils : un smartphone simple ; les agriculteurs qu'ils forment n'ont parfois qu'un téléphone simple",
      "Cadre : la formation se fait dans les fermes, avec peu de matériel et sans projecteur",
      "Sécurité : aucune dose de médicament, de vaccin ou d'hormone et aucun délai d'attente ; uniquement des pesticides homologués, utilisés selon l'étiquette",
      "Argent : tous les chiffres sont des exemples ; les conseils pour gagner sa vie portent sur l'équité, pas sur l'investissement",
      "Les données personnelles des ouvriers et des agriculteurs sont protégées par les lois nationales sur la protection des données"
    ],
    prerequisites: "Une expérience pratique d'au moins une culture ou un élevage. Un cours sur les cultures ou l'élevage de ce catalogue vous aide à préparer le contenu que vous enseignerez."
  },
  // ---- ADDIE : Conception (objectifs) ----
  objectives: [
    { id: "O1", condition: "En pensant aux personnes qui appuient les agriculteurs de votre zone", action: "décrire les rôles d'un paysan relais, d'un conseiller d'affaires agricoles et d'un agent de vulgarisation, et avec qui vous allez travailler", standard: "en nommant un contact ou un bureau local pour chacun, là où il existe" },
    { id: "O2", condition: "À partir d'une pratique que vous connaissez bien", action: "planifier une séance de formation de 60 à 90 minutes qui suit montrer, essayer, discuter", standard: "avec une seule compétence claire, des durées, du matériel et une vérification que chaque agriculteur sait le faire" },
    { id: "O3", condition: "Pour une pratique que vous voulez faire adopter aux agriculteurs", action: "installer une parcelle de démonstration qui compare la pratique habituelle à la nouvelle pratique", standard: "avec des parcelles de même taille, munies de panneaux, suivies dans un registre et visitées à des dates fixées" },
    { id: "O4", condition: "Quand un agriculteur vous demande un conseil qui dépasse votre formation", action: "donner seulement les conseils pour lesquels vous êtes formé et orienter l'agriculteur vers le bon expert", standard: "avec une liste d'orientation écrite, sans jamais donner de doses de médicaments ni recommander de pesticides non homologués" },
    { id: "O5", condition: "Si vous vendez des intrants ou des services aux agriculteurs que vous formez", action: "expliquer comment vous gagnez votre vie et les règles éthiques que vous suivez", standard: "avec des prix écrits, des commissions annoncées et aucune pression pour acheter" },
    { id: "O6", condition: "Après chaque formation", action: "noter qui vous avez formé, sur quoi, et les résultats", standard: "avec le consentement des personnes, gardé confidentiel, et au moins un suivi" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Enseigner aux agriculteurs pour que ça reste",
      lessons: [
        {
          title: "Paysans relais, conseillers d'affaires agricoles et agents de vulgarisation",
          objectives: ["O1"],
          minutes: 5,
          goal: "Décrire les rôles dans la vulgarisation agricole et nommer les personnes avec qui vous travaillerez.",
          text: [
            "La vulgarisation agricole, c'est aider les agriculteurs à apprendre et à utiliser de meilleures pratiques. Les agents de vulgarisation de l'État (au Nigeria, les programmes de développement agricole de chaque État, appuyés par NAERLS, le service national de vulgarisation ; au Kenya, les agents agricoles des comtés, qui travaillent avec des organismes de recherche comme KALRO) sont des conseillers formés, mais chacun sert un très grand nombre d'agriculteurs. Ce sont donc les agriculteurs eux-mêmes qui assurent une grande partie de l'enseignement.",
            "Un paysan relais ou formateur paysan volontaire est un agriculteur respecté qui accueille des démonstrations et enseigne à ses voisins, en général formé et soutenu par un projet ou un bureau de vulgarisation. En Afrique de l'Est, l'ICRAF (le centre international de recherche en agroforesterie) et ses partenaires ont beaucoup utilisé les formateurs paysans volontaires, par exemple dans l'élevage laitier ; une évaluation en Ouganda a montré une amélioration des connaissances des agriculteurs, de la production de lait et des revenus.",
            "Un conseiller d'affaires agricoles (Farm Business Advisor ou Farmer Business Advisor, FBA) est un entrepreneur local qui vend des intrants et des conseils aux agriculteurs voisins et gagne sa vie avec des commissions et des frais de service. iDE, une organisation de développement, forme des FBA en Zambie et au Mozambique, et chacun sert environ 80 à 120 agriculteurs. En Afrique de l'Ouest et du Centre, la Farmer Business School (école d'entrepreneuriat agricole) de la GIZ, l'agence allemande de coopération, a formé des producteurs de cacao et de cultures vivrières en Côte d'Ivoire, au Ghana, au Togo, au Nigeria et au Cameroun à la gestion de leur exploitation, avec les services de vulgarisation. Quel que soit votre titre, vous complétez l'agent de vulgarisation ; vous ne le remplacez pas."
          ],
          steps: ["Faites la liste de ceux qui appuient les agriculteurs dans votre zone : bureau de vulgarisation, projets, coopératives, boutiques d'intrants et de produits vétérinaires.", "Décidez quel rôle vous convient : paysan relais, FBA, ou les deux.", "Rencontrez votre agent de vulgarisation local et expliquez-lui ce que vous voulez faire.", "Notez un contact pour chaque rôle et la date de votre prochain échange."],
          words: [["Vulgarisation agricole", "les services qui aident les agriculteurs à apprendre et à utiliser de meilleures pratiques."], ["Paysan relais", "un agriculteur respecté qui accueille des démonstrations et enseigne à ses voisins, souvent avec l'appui d'un projet ou de la vulgarisation."], ["Conseiller d'affaires agricoles (FBA)", "un entrepreneur local qui vend des intrants et donne des conseils aux agriculteurs voisins contre une commission ou des frais."]],
          slides: [
            { title: "Les agents de vulgarisation", bullets: ["Conseillers de l'État formés", "Nigeria : ADP, NAERLS ; Kenya : agents des comtés, KALRO", "Chacun sert un très grand nombre d'agriculteurs"] },
            { title: "Paysans relais et formateurs volontaires", bullets: ["Accueillent des démonstrations, enseignent aux voisins", "Très utilisés en Afrique de l'Est (ICRAF, élevage laitier)"] },
            { title: "Les conseillers d'affaires agricoles", bullets: ["Entrepreneurs locaux : intrants et conseils", "iDE : Zambie, Mozambique ; 80 à 120 agriculteurs chacun", "Farmer Business School de la GIZ : Afrique de l'Ouest et du Centre"] },
            { title: "Travailler ensemble", bullets: ["Vous complétez l'agent de vulgarisation", "Rencontrez d'abord votre bureau local"] }
          ],
          sources: [NAERLS, KALRO, ICRAF_VFT, IDE_FBA, GIZ_FBS],
          tryIt: "Faites un tableau de ceux qui appuient les agriculteurs dans votre zone : le bureau de vulgarisation, les projets ou coopératives, et la boutique d'intrants ou de produits vétérinaires la plus proche. Écrivez quel rôle vous prendrez (paysan relais, FBA ou les deux) et un contact pour chaque rôle.",
          youCanNow: "expliquer les rôles dans la vulgarisation agricole et la place que vous y occupez.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce qui distingue surtout un conseiller d'affaires agricoles d'un paysan relais volontaire ?", options: ["Le FBA gagne sa vie en vendant des intrants et des services", "Le FBA est un employé de l'État", "Le FBA ne donne jamais de conseils", "Le FBA travaille seulement en ville"], answer: 0, why: "Les FBA sont des entrepreneurs locaux qui gagnent leur vie avec des commissions et des frais." },
            { objective: "O1", q: "Vous voulez commencer à former vos voisins. Qui devez-vous rencontrer en premier ?", options: ["Un acheteur en ville", "Une station de radio", "Votre agent de vulgarisation local", "Personne ; commencez tout de suite"], answer: 2, why: "Travailler avec la vulgarisation garde vos conseils à jour et vous donne des appuis." }
          ]
        },
        {
          title: "Comment les adultes apprennent, et planifier une courte séance",
          objectives: ["O2"],
          minutes: 6,
          goal: "Planifier une séance de formation de 60 à 90 minutes qui suit montrer, essayer, discuter.",
          text: [
            "Les agriculteurs adultes apprennent mieux en faisant, avec des personnes en qui ils ont confiance, sur des problèmes qu'ils ont maintenant. Ils ont de l'expérience : respectez-la et demandez ce qu'ils font déjà. Les longs discours s'oublient ; ce qu'on fait de ses propres mains reste. Utilisez trois étapes : montrer (vous faites le geste lentement en expliquant pourquoi), essayer (chaque agriculteur le fait pendant que vous regardez et aidez), discuter (le groupe parle de ce qu'il a vu, de ce qui est difficile, et de ce qui marchera ou non dans ses fermes).",
            "Enseignez une seule compétence par séance, comme \"mesurer et semer le maïs en lignes avec une poignée de compost par poquet\", et pas \"tout sur le maïs\". Planifiez-la : la compétence ; du matériel pour que tout le monde essaie ; les durées (par exemple 10 minutes d'accueil et ce qu'ils font aujourd'hui, 15 pour montrer, 30 pour essayer, 20 pour discuter, 10 pour planifier et vérifier) ; et comment vous vérifierez que chaque agriculteur sait le faire, par exemple en regardant chacun semer correctement trois poquets.",
            "Choisissez une heure qui convient aux agriculteurs (après le travail du matin, pas le jour du marché), un lieu facile d'accès et une langue qu'ils parlent. Faites participer les femmes et les jeunes : demandez qui fait le travail à la maison et invitez ces personnes. Gardez des groupes assez petits pour que chacun essaie, environ 15 à 25 personnes par formateur."
          ],
          steps: ["Choisissez une compétence dont les agriculteurs ont besoin maintenant.", "Planifiez montrer, essayer et discuter, avec les durées.", "Faites la liste du matériel pour que tout le monde puisse essayer.", "Décidez comment vous vérifierez que chaque agriculteur sait le faire.", "Choisissez une heure, un lieu et une langue qui conviennent aux agriculteurs."],
          words: [["Montrer, essayer, discuter", "une méthode d'enseignement : faire la démonstration, laisser chacun pratiquer, puis en parler ensemble."], ["Plan de leçon", "un court plan écrit de ce que vous allez enseigner, comment, avec quoi et combien de temps dure chaque partie."], ["Apprendre en faisant", "apprendre une compétence en la pratiquant de ses propres mains."]],
          slides: [
            { title: "Comment les adultes apprennent", bullets: ["En faisant, avec des gens de confiance", "Sur les problèmes qu'ils ont maintenant", "Respectez ce qu'ils savent déjà"] },
            { title: "Montrer, essayer, discuter", bullets: ["Montrer : démontrez lentement, dites pourquoi", "Essayer : tout le monde le fait", "Discuter : qu'est-ce qui est dur ? Est-ce que ça marchera ici ?"] },
            { title: "Une compétence par séance", bullets: ["Exemple : lignes avec du compost dans chaque poquet", "Durées, matériel, une vérification pour chacun"] },
            { title: "Faciliter la venue", bullets: ["Bonne heure et bon lieu", "La langue des agriculteurs", "Invitez les femmes et les jeunes"] }
          ],
          tryIt: "Écrivez un plan de leçon pour une compétence que vous connaissez bien : la compétence en une phrase, le matériel, les durées de montrer, essayer et discuter sur 60 à 90 minutes, et comment vous vérifierez que chaque agriculteur sait le faire.",
          youCanNow: "planifier une courte séance de formation qui enseigne une compétence par montrer, essayer et discuter.",
          quickCheck: [
            { objective: "O2", q: "Quelle est la meilleure compétence pour une séance de 90 minutes ?", options: ["Tout sur le maïs", "Toute la santé animale", "L'agriculture en général", "Semer le maïs en lignes avec une poignée de compost par poquet"], answer: 3, why: "Une seule compétence claire peut être montrée, pratiquée et vérifiée en une séance." },
            { objective: "O2", q: "Que se passe-t-il à l'étape \"essayer\" ?", options: ["Le formateur fait un long discours", "Chaque agriculteur fait le geste pendant que le formateur regarde et aide", "Les agriculteurs rentrent chez eux", "Le groupe vend des intrants"], answer: 1, why: "C'est en pratiquant de leurs propres mains que les adultes retiennent." }
          ]
        },
        {
          title: "Parcelles de démonstration et champs-écoles paysans",
          objectives: ["O3"],
          minutes: 6,
          goal: "Installer une parcelle de démonstration qui compare de façon juste la pratique habituelle à une nouvelle.",
          text: [
            "Les agriculteurs croient ce qu'ils voient dans une ferme comme la leur. Une parcelle de démonstration montre une nouvelle pratique à côté de la pratique habituelle. Choisissez un endroit visible, près d'un chemin, avec un sol homogène. Délimitez deux parcelles de même taille (par exemple 10 m x 10 m chacune) : la parcelle A, la pratique habituelle ; la parcelle B, la nouvelle pratique. Ne changez qu'une seule chose entre elles, comme la variété, l'écartement ou le compost, pour que la différence ait une seule cause. Mettez un panneau clair sur chacune.",
            "Tenez des registres dès le début : date de semis, intrants et main-d'œuvre de chaque parcelle, photos toutes les deux semaines, problèmes, et récolte pesée séparément. Prévoyez des journées au champ aux étapes clés (après la levée, à la floraison, à la récolte) pour que les agriculteurs voient et comparent. Soyez honnête si la nouvelle pratique ne gagne pas : c'est aussi une leçon utile.",
            "Un champ-école paysan (CEP, en anglais Farmer Field School ou FFS) va plus loin. La FAO le décrit comme un groupe d'agriculteurs qui se réunit régulièrement dans un champ pendant tout un cycle de production, guidé par un facilitateur formé. Ils comparent des parcelles (la pratique locale et une meilleure pratique proposée) et font l'analyse de l'agroécosystème : en petits groupes, ils observent les plantes, les ravageurs, les ennemis naturels, le sol et la météo, dessinent ce qu'ils voient et décident ensemble quoi faire. Les CEP ont été utilisés dans plus de 90 pays. Si vous voulez en animer un, renseignez-vous auprès de votre bureau de vulgarisation ou d'un projet sur la formation des facilitateurs."
          ],
          steps: ["Choisissez un endroit visible avec un sol homogène.", "Délimitez deux parcelles de même taille : pratique habituelle et nouvelle pratique.", "Ne changez qu'une seule chose entre elles ; mettez un panneau sur chacune.", "Notez les dates, les intrants, la main-d'œuvre, les photos et la récolte par parcelle.", "Prévoyez des journées au champ à la levée, à la floraison et à la récolte."],
          words: [["Parcelle de démonstration", "une petite parcelle qui montre une pratique pour que les agriculteurs la voient fonctionner."], ["Champ-école paysan (CEP)", "un groupe qui se réunit régulièrement dans un champ pendant une saison, guidé par un facilitateur, pour apprendre en observant et en testant."], ["Analyse de l'agroécosystème (AAES)", "observer les plantes, les ravageurs, les ennemis naturels, le sol et la météo dans un champ, puis décider ensemble quoi faire."]],
          slides: [
            { title: "Voir pour croire", bullets: ["Pratique habituelle à côté de la nouvelle", "Même taille, visibles, avec panneaux"] },
            { title: "Une comparaison juste", bullets: ["Ne changez qu'une seule chose", "Sol homogène, mêmes soins pour le reste"] },
            { title: "Noter et montrer", bullets: ["Dates, intrants, main-d'œuvre, photos", "Récolte pesée par parcelle", "Journées au champ aux étapes clés"] },
            { title: "Champ-école paysan (FAO)", bullets: ["Se réunit régulièrement toute la saison", "Facilitateur formé, comparaison de parcelles", "Analyse de l'agroécosystème, décisions en groupe"] }
          ],
          sources: [FAO_FFS],
          tryIt: "Dessinez le plan d'une parcelle de démonstration pour la compétence planifiée à la leçon 2 : deux parcelles de même taille, la seule chose qui change, les panneaux, ce que vous allez noter, et les dates de trois journées au champ.",
          youCanNow: "installer une parcelle de démonstration juste et expliquer comment fonctionne un champ-école paysan.",
          quickCheck: [
            { objective: "O3", q: "Dans votre démonstration, la parcelle B a une nouvelle variété ET du compost ET un plus grand écartement. Quel est le problème ?", options: ["Aucun ; plus il y a de changements, mieux c'est", "Les parcelles sont trop petites", "On ne peut pas savoir quel changement a fait la différence", "Les agriculteurs n'aiment pas les panneaux"], answer: 2, why: "Ne changez qu'une seule chose pour que la différence ait une seule cause." },
            { objective: "O3", q: "Que font les agriculteurs d'un champ-école paysan de la FAO pendant l'analyse de l'agroécosystème ?", options: ["Ils observent le champ en petits groupes et décident ensemble quoi faire", "Ils écoutent seulement un exposé", "Ils achètent des intrants", "Ils remplissent des demandes de prêt"], answer: 0, why: "L'AAES consiste à observer les plantes, les ravageurs, le sol et la météo, puis à décider en groupe." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Enseigner aux agriculteurs pour que ça reste",
        questions: [
          { objective: "O1", q: "Pourquoi les formateurs paysans comptent-ils autant dans la vulgarisation en Afrique ?", options: ["Les agents de vulgarisation ne sont pas formés", "Chaque agent de vulgarisation sert un très grand nombre d'agriculteurs", "Les agriculteurs n'aiment pas les experts", "La loi les impose"], answer: 1, why: "Les formateurs paysans aident la vulgarisation à toucher plus de monde." },
          { objective: "O1", q: "Dans quels pays la Farmer Business School de la GIZ a-t-elle travaillé avec des producteurs de cacao ?", options: ["Seulement au Kenya", "Seulement en Asie", "Seulement en Zambie et au Mozambique", "Côte d'Ivoire, Ghana, Togo, Nigeria et Cameroun"], answer: 3, why: "Le projet couvre ces cinq pays d'Afrique de l'Ouest et du Centre." },
          { objective: "O2", q: "Quelles sont les trois étapes de la méthode d'enseignement de ce cours ?", options: ["Montrer, essayer, discuter", "Parler, parler, tester", "Lire, écrire, signer", "Acheter, vendre, payer"], answer: 0, why: "Faire la démonstration, pratiquer, puis en parler ensemble." },
          { objective: "O2", q: "Comment vérifier qu'une séance a marché ?", options: ["Compter combien de personnes sont venues", "Demander s'ils ont aimé", "Regarder chaque agriculteur faire correctement le geste", "Distribuer un long dépliant"], answer: 2, why: "Le test d'une séance de compétence, c'est que chaque agriculteur sache faire le geste." },
          { objective: "O3", q: "Une parcelle de démonstration doit être placée :", options: ["Cachée derrière la maison", "Dans un endroit visible près d'un chemin, avec un sol homogène", "Seulement sur le plus mauvais sol", "Loin de tous les agriculteurs"], answer: 1, why: "Les agriculteurs doivent la voir, et un sol homogène garde la comparaison juste." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Conseiller, gagner sa vie et montrer des résultats",
      lessons: [
        {
          title: "Toucher les agriculteurs par téléphone, et savoir quand orienter",
          objectives: ["O4"],
          minutes: 6,
          goal: "Donner seulement les conseils pour lesquels vous êtes formé et orienter les agriculteurs vers le bon expert.",
          text: [
            "Les téléphones vous aident à toucher plus d'agriculteurs entre deux visites. Filmez avec votre téléphone une courte vidéo (une à deux minutes) de l'étape \"montrer\" et partagez-la dans un groupe WhatsApp ; envoyez des rappels par SMS aux agriculteurs qui ont un téléphone simple ; utilisez des notes vocales dans la langue locale ; faites un court appel de groupe avant une journée au champ. Demandez la permission avant de filmer des personnes ou leurs fermes, et gardez le groupe pour les sujets agricoles seulement.",
            "Un conseil peut aider ou faire du tort. Conseillez seulement sur ce pour quoi vous avez été formé et que vous avez vu marcher. Ne donnez jamais de doses de médicaments, de vaccins ou d'hormones pour les animaux, et ne donnez jamais de délais d'attente : dites \"suivez le vétérinaire et l'étiquette du produit\". Ne recommandez que des pesticides homologués dans votre pays (par exemple par le Pest Control Products Board au Kenya, l'office qui contrôle les pesticides, ou par la NAFDAC au Nigeria, l'agence qui contrôle les aliments, les médicaments et les produits agrochimiques), utilisés selon l'étiquette, avec un équipement de protection. En cas de doute, consultez la liste de l'organisme d'homologation.",
            "Orientez vite quand quelque chose vous dépasse : les animaux malades ou mourants vont au vétérinaire ; les morts soudaines de porcs ou de volailles peuvent être la peste porcine africaine ou la grippe aviaire, qui sont à déclaration obligatoire, donc dites à l'agriculteur de prévenir tout de suite le vétérinaire ou les services vétérinaires et de ne pas déplacer ni vendre les animaux. Les ravageurs ou maladies inconnus sur les cultures vont au bureau de vulgarisation ou à un institut de recherche. Les prêts et les contrats vont à un conseiller de confiance. Gardez une liste d'orientation écrite avec les noms et les numéros de téléphone, et faites un suivi pour savoir ce qui s'est passé."
          ],
          steps: ["Partagez de courtes vidéos, des rappels par SMS et des notes vocales ; demandez la permission avant de filmer.", "Conseillez seulement sur ce pour quoi vous avez été formé.", "Pas de doses ni de délais d'attente : seulement le vétérinaire et l'étiquette.", "Seulement des pesticides homologués, utilisés selon l'étiquette.", "Orientez vite grâce à votre liste d'orientation écrite, et faites un suivi."],
          words: [["Orientation", "envoyer un agriculteur vers un expert qui peut l'aider pour ce qui dépasse vos compétences."], ["Maladie à déclaration obligatoire", "une maladie que la loi oblige à signaler aux services vétérinaires, comme la peste porcine africaine ou la grippe aviaire."], ["Pesticide homologué", "un produit dont l'usage est autorisé par l'organisme national de contrôle."]],
          slides: [
            { title: "Les téléphones touchent plus d'agriculteurs", bullets: ["Vidéos de 1 à 2 minutes de l'étape \"montrer\"", "Rappels par SMS, notes vocales, appels de groupe", "Demandez avant de filmer"] },
            { title: "Conseiller dans les limites de sa formation", bullets: ["Aucune dose de médicament, de vaccin ou d'hormone", "Seulement le vétérinaire et l'étiquette du produit", "Pesticides homologués, utilisés selon l'étiquette"] },
            { title: "Orienter vite", bullets: ["Animaux malades : le vétérinaire", "Morts de porcs ou de volailles : signaler tout de suite", "Problèmes inconnus sur les cultures : la vulgarisation"] },
            { title: "Votre liste d'orientation", bullets: ["Noms et numéros de téléphone", "Faites un suivi pour savoir ce qui s'est passé"] }
          ],
          sources: [PCPB, NAFDAC],
          tryIt: "Écrivez votre liste d'orientation : le vétérinaire ou le poste vétérinaire le plus proche, le bureau de vulgarisation, l'organisme d'homologation des pesticides de votre pays, et un conseiller de confiance pour l'argent et les contrats, avec les numéros de téléphone. Puis écrivez trois questions auxquelles vous ne répondrez PAS vous-même et à qui vous les enverrez.",
          youCanNow: "toucher les agriculteurs par téléphone et conseiller dans vos limites, en orientant le reste vers le bon expert.",
          quickCheck: [
            { objective: "O4", q: "Un agriculteur vous demande combien d'antibiotique donner à une chèvre malade. Vous dites :", options: ["\"Donnez deux cuillères par jour.\"", "\"Prenez le moins cher.\"", "\"Donnez le double pour être sûr.\"", "\"Appelez le vétérinaire et suivez l'étiquette du produit ; je ne peux pas donner de doses.\""], answer: 3, why: "Les doses viennent du vétérinaire et de l'étiquette, pas d'un formateur paysan." },
            { objective: "O4", q: "Plusieurs porcs meurent soudainement dans un village. Que dites-vous aux agriculteurs ?", options: ["De vendre vite ceux qui restent", "De prévenir tout de suite le vétérinaire ou les services vétérinaires et de ne pas déplacer les porcs", "D'attendre une semaine", "De manger la viande"], answer: 1, why: "Ce peut être la peste porcine africaine, une maladie à déclaration obligatoire qu'il faut signaler tout de suite." }
          ]
        },
        {
          title: "Gagner sa vie comme conseiller d'affaires agricoles, de façon éthique",
          objectives: ["O5"],
          minutes: 5,
          goal: "Expliquer comment vous gagnerez votre vie avec les intrants et les services, et les règles éthiques que vous suivrez.",
          text: [
            "Un FBA gagne sa vie en apportant des intrants et des services aux agriculteurs éloignés des boutiques : commission sur les semences, les engrais, les sacs de stockage hermétiques ou les outils vendus ; frais pour des services comme la pulvérisation avec le bon équipement, le labour, le prélèvement d'échantillons de sol, le regroupement des récoltes pour les acheteurs ou la tenue de registres. iDE souligne que les liens durables d'un FBA avec sa communauté lui donnent une bonne raison de ne recommander que des produits qui rapportent aux agriculteurs.",
            "L'éthique, c'est du bon commerce. Ne vendez que des produits authentiques et homologués, achetés à des fournisseurs agréés. Écrivez vos prix et dites aux agriculteurs quand vous touchez une commission. Recommandez ce dont l'agriculteur a besoin, pas ce qui vous rapporte le plus ; dites clairement quand la meilleure réponse est \"vous n'avez rien besoin d'acheter\". Ne faites jamais pression, ne vendez jamais à crédit à quelqu'un dont vous savez qu'il ne pourra pas rembourser, et séparez la formation de la vente : tout le monde peut venir à une formation, qu'il achète ou non.",
            "Connaissez vos chiffres. Exemple seulement : si vous touchez une commission de XOF 500 par sac et vendez 120 sacs dans la saison, cela fait XOF 60 000, avant votre transport et votre temps. Tenez un registre simple des ventes, des commissions et des frais de service, et vérifiez si votre pays exige un enregistrement d'entreprise ou une licence pour vendre des intrants, surtout des produits agrochimiques."
          ],
          steps: ["Faites la liste des intrants et des services que vous pouvez offrir.", "Écrivez vos prix et votre commission sur chacun.", "Écrivez vos règles éthiques : produits authentiques, commissions annoncées, aucune pression, formation ouverte à tous.", "Notez les ventes, les commissions et les frais.", "Vérifiez les règles d'enregistrement et de licence pour les vendeurs d'intrants."],
          words: [["Commission", "l'argent qu'un vendeur gagne sur chaque article vendu, payé par le fournisseur."], ["Frais de service", "l'argent demandé pour faire un travail, comme pulvériser ou labourer."], ["Conflit d'intérêts", "quand ce qui vous rapporte le plus n'est pas ce qui est le mieux pour la personne que vous conseillez."]],
          slides: [
            { title: "Comment les FBA gagnent leur vie", bullets: ["Commission sur les intrants vendus", "Frais de service : pulvérisation, labour, regroupement", "Apporter les intrants près des agriculteurs"] },
            { title: "L'éthique, c'est du bon commerce", bullets: ["Seulement des produits authentiques et homologués", "Prix écrits, commissions annoncées", "Le conseil d'abord, la vente ensuite"] },
            { title: "Aucune pression", bullets: ["\"Vous n'avez rien besoin d'acheter\" est permis", "Formation ouverte à tous, acheteurs ou non", "Pas de crédit impossible à rembourser"] },
            { title: "Connaître ses chiffres", bullets: ["Exemple seulement : XOF 500 x 120 sacs = XOF 60 000", "Moins le transport et le temps", "Vérifiez les règles de licence"] }
          ],
          sources: [IDE_FBA],
          tryIt: "Écrivez une note d'activité de FBA d'une page : trois intrants ou services que vous pourriez offrir, un prix et une commission d'exemple pour chacun, des gains d'exemple sur une saison, et vos cinq règles éthiques.",
          youCanNow: "planifier comment gagner votre vie comme FBA avec des intrants et des services tout en gardant la confiance des agriculteurs.",
          quickCheck: [
            { objective: "O5", q: "Laquelle est une règle éthique de FBA ?", options: ["Dire aux agriculteurs quand vous touchez une commission", "Ne former que ceux qui vous achètent", "Pousser le produit qui donne la plus grosse commission", "Vendre des produits non homologués s'ils sont moins chers"], answer: 0, why: "Annoncer ses commissions garde les conseils honnêtes et crée la confiance." },
            { objective: "O5", q: "La culture d'un agriculteur n'a pas besoin d'engrais cette saison. Vous devez :", options: ["Lui en vendre quand même", "Ne rien dire et lui vendre un plus petit sac", "Lui dire honnêtement qu'il n'a pas besoin d'en acheter", "Refuser de retourner le voir"], answer: 2, why: "La confiance sur la durée vaut plus qu'une seule vente." }
          ]
        },
        {
          title: "Tenir des registres de formation et planifier votre journée de formation",
          objectives: ["O6", "O2", "O3"],
          minutes: 6,
          goal: "Tenir un registre de formation avec consentement et planifier une journée de formation complète.",
          text: [
            "Les registres montrent ce que votre travail apporte, vous aident à faire le suivi, et c'est ce que demandent les projets, les coopératives et les employeurs. Tenez un registre pour chaque séance : date, lieu, sujet, et pour chaque agriculteur son nom, son sexe, sa tranche d'âge (jeune ou non) et son village, avec un numéro de téléphone seulement s'il est d'accord. Notez si chaque agriculteur savait faire le geste à la fin.",
            "Faites au moins un suivi, par exemple un mois plus tard ou à la récolte : ont-ils utilisé la pratique, sur quelle surface ou avec combien d'animaux, et qu'est-ce que cela a donné ? Notez les résultats de la parcelle de démonstration par parcelle. Avec le temps, vous pourrez dire par exemple : \"J'ai formé 60 agriculteurs ; 35 sèment maintenant en lignes ; leur rendement en maïs a augmenté en moyenne\", avec des registres à l'appui. N'inventez pas de chiffres : si vous ne l'avez pas mesuré, dites-le.",
            "Demandez la permission de noter les informations des personnes, expliquez pourquoi, et gardez le registre confidentiel : sur papier dans un endroit sûr ou dans un téléphone verrouillé, pas dans un groupe WhatsApp public. Le Kenya, le Nigeria et d'autres pays ont des lois sur la protection des données. Rassemblez maintenant tout pour votre journée de formation : le plan de leçon, la parcelle de démonstration, votre liste d'orientation et ce registre."
          ],
          steps: ["Faites un registre : date, lieu, sujet, nom, sexe, tranche d'âge, village, téléphone avec consentement.", "Notez qui savait faire le geste à la fin.", "Faites au moins un suivi et notez ce qui a changé.", "Notez les résultats de la parcelle de démonstration par parcelle.", "Gardez le registre confidentiel ; demandez la permission d'abord."],
          words: [["Registre de formation", "une liste de qui a suivi une formation, sur quel sujet, et avec quels résultats."], ["Suivi", "vérifier plus tard si les agriculteurs ont utilisé ce qu'ils ont appris et ce que cela a donné."], ["Consentement", "la permission d'une personne pour noter ou partager ses informations."]],
          slides: [
            { title: "Pourquoi tenir des registres", bullets: ["Montrer ce que votre travail apporte", "Faire le suivi des agriculteurs", "Les projets et employeurs les demandent"] },
            { title: "Le registre de formation", bullets: ["Date, lieu, sujet", "Nom, sexe, tranche d'âge, village", "Téléphone seulement avec consentement ; savait-il le faire ?"] },
            { title: "Faire le suivi", bullets: ["Au moins une fois : un mois après ou à la récolte", "L'ont-ils utilisé ? Qu'est-ce que ça a donné ?", "N'inventez jamais de chiffres"] },
            { title: "Garder le registre confidentiel", bullets: ["Demandez la permission, expliquez pourquoi", "Papier en lieu sûr ou téléphone verrouillé", "Pas dans un groupe public"] }
          ],
          sources: [ODPC, NDPC],
          tryIt: "Tâche finale : planifiez votre journée de formation. Écrivez le plan de leçon de 60 à 90 minutes (montrer, essayer, discuter, avec la compétence, le matériel, les durées et la vérification), le plan de la parcelle de démonstration (deux parcelles de même taille avec panneaux, la seule différence, les registres et les dates des journées au champ), votre liste d'orientation et ce sur quoi vous ne donnerez pas de conseils, et une fiche de registre de formation avec une ligne de consentement et une date de suivi.",
          youCanNow: "planifier une journée de formation complète et tenir des registres qui montrent qui vous avez formé et ce qui a changé.",
          quickCheck: [
            { objective: "O6", q: "Avant d'écrire le numéro de téléphone d'un agriculteur dans votre registre, vous devez :", options: ["Le publier dans le groupe", "Lui demander la permission et expliquer pourquoi", "Le copier chez quelqu'un d'autre", "L'écrire sans demander"], answer: 1, why: "Il faut le consentement pour noter des informations personnelles." },
            { objective: "O6", q: "Vous n'avez pas mesuré les rendements après la formation. Dans votre rapport, vous devez :", options: ["Deviner un chiffre élevé", "Copier les chiffres d'un autre formateur", "Ne pas parler de la formation", "Dire que les rendements n'ont pas été mesurés"], answer: 3, why: "Des registres honnêtes valent plus que des résultats inventés." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Conseiller, gagner sa vie et montrer des résultats",
        questions: [
          { objective: "O4", q: "Quel pesticide un formateur paysan peut-il recommander ?", options: ["N'importe quel produit bon marché du marché", "Un produit homologué dans le pays, utilisé selon l'étiquette", "Un mélange maison de plusieurs produits chimiques", "Ce qu'a utilisé un voisin"], answer: 1, why: "Seulement des produits homologués, utilisés selon l'étiquette, avec un équipement de protection." },
          { objective: "O4", q: "Avant de filmer un agriculteur pour une vidéo de formation, vous :", options: ["Lui demandez la permission", "Le filmez en cachette", "Publiez d'abord et demandez après", "Ne le lui dites jamais"], answer: 0, why: "La permission respecte les personnes et leurs fermes." },
          { objective: "O5", q: "La formation doit être :", options: ["Réservée à ceux qui vous achètent", "Payée seulement par les commissions", "Ouverte à tous, qu'ils achètent ou non", "Annulée si les ventes sont faibles"], answer: 2, why: "Séparer la formation de la vente protège la confiance." },
          { objective: "O5", q: "Exemple seulement : commission de XOF 500 par sac, 120 sacs vendus. La commission brute est de :", options: ["XOF 6 000", "XOF 600", "XOF 620", "XOF 60 000"], answer: 3, why: "500 x 120 = 60 000, avant les coûts." },
          { objective: "O6", q: "Où faut-il garder un registre de formation ?", options: ["En lieu confidentiel : papier en lieu sûr ou téléphone verrouillé", "Dans un groupe WhatsApp public", "Sur un tableau d'affichage", "Le donner à n'importe quel acheteur"], answer: 0, why: "Les données personnelles doivent rester confidentielles." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Devenir formateur paysan : vulgarisation agricole et conseillers d'affaires agricoles",
    questions: [
      { objective: "O1", q: "La vulgarisation agricole, c'est :", options: ["Agrandir une ferme", "Aider les agriculteurs à apprendre et à utiliser de meilleures pratiques", "Vendre des terres", "Prêter de l'argent"], answer: 1, why: "La vulgarisation, c'est du conseil et de l'apprentissage pour les agriculteurs." },
      { objective: "O1", q: "Un paysan relais est en général :", options: ["Un agriculteur respecté qui accueille des démonstrations et enseigne à ses voisins", "Un employé de banque", "Un ministre", "Un acheteur"], answer: 0, why: "Les paysans relais enseignent par l'exemple sur leur propre ferme." },
      { objective: "O1", q: "Quelle organisation forme des conseillers d'affaires agricoles en Zambie et au Mozambique ?", options: ["La NAFDAC", "Le service météorologique du Kenya", "iDE", "L'OMSA (WOAH, Organisation mondiale de la santé animale)"], answer: 2, why: "iDE gère des réseaux de FBA dans ces pays." },
      { objective: "O2", q: "Les adultes apprennent le mieux une compétence agricole :", options: ["En écoutant un long discours", "En lisant un long dépliant", "En regardant la télévision", "En la faisant de leurs propres mains"], answer: 3, why: "Ce qu'on apprend en faisant, on le retient." },
      { objective: "O2", q: "Dans une séance de 90 minutes, le plus de temps doit aller à :", options: ["L'accueil", "L'essai de la compétence", "La vente d'intrants", "L'attente"], answer: 1, why: "C'est en pratiquant qu'on apprend la compétence." },
      { objective: "O2", q: "Qu'est-ce qui aide plus de femmes et de jeunes à venir ?", options: ["Demander qui fait le travail à la maison et inviter ces personnes, à une heure qui convient", "La faire le jour du marché", "Utiliser une langue qu'ils ne parlent pas", "N'inviter que les chefs de ménage"], answer: 0, why: "Inviter ceux qui font le travail, à une bonne heure, permet à la formation de les toucher." },
      { objective: "O3", q: "Une parcelle de démonstration juste compare :", options: ["Deux parcelles avec beaucoup de différences", "Une seule parcelle", "Des parcelles de même taille qui diffèrent par une seule pratique", "Votre ferme et celle d'un voisin"], answer: 2, why: "Ne changez qu'une seule chose pour que le résultat ait une seule cause." },
      { objective: "O3", q: "Quand organiser des journées au champ sur une parcelle de démonstration ?", options: ["Seulement après la récolte", "Jamais", "Seulement avant le semis", "Aux étapes clés comme la levée, la floraison et la récolte"], answer: 3, why: "Les agriculteurs voient la différence à mesure que la culture pousse." },
      { objective: "O3", q: "Selon la FAO, un champ-école paysan se réunit :", options: ["Régulièrement pendant tout un cycle de production, avec un facilitateur formé", "Une fois, pendant une heure", "Seulement en ligne", "Seulement dans une salle de classe"], answer: 0, why: "Les groupes de CEP apprennent au champ tout au long de la saison." },
      { objective: "O4", q: "Un formateur paysan doit donner des doses de médicaments ou de vaccins :", options: ["Quand on lui demande", "Jamais ; il envoie l'agriculteur vers le vétérinaire et l'étiquette", "Seulement pour les volailles", "Si l'agriculteur insiste"], answer: 1, why: "Les doses viennent du vétérinaire et de l'étiquette." },
      { objective: "O4", q: "Plusieurs poulets meurent soudainement dans une ferme. Vous dites à l'agriculteur de :", options: ["Vendre les autres au marché", "Attendre de voir", "Prévenir tout de suite le vétérinaire ou les services vétérinaires", "Les enterrer et ne rien dire"], answer: 2, why: "Ce peut être la grippe aviaire, une maladie à déclaration obligatoire." },
      { objective: "O4", q: "Au Nigeria, les produits agrochimiques sont homologués par :", options: ["La Banque centrale", "NiMet, le service météorologique", "La police", "La NAFDAC"], answer: 3, why: "La NAFDAC homologue les produits agrochimiques au Nigeria." },
      { objective: "O4", q: "Un agriculteur vous pose une question sur un contrat de prêt. Vous :", options: ["Lui dites de signer vite", "L'orientez vers un conseiller de confiance et lui conseillez de le lire en entier", "Le signez à sa place", "Lui conseillez d'emprunter plus"], answer: 1, why: "L'argent et les contrats dépassent le rôle d'un formateur paysan." },
      { objective: "O5", q: "Un FBA gagne en général sa vie avec :", options: ["Des commissions sur les intrants et des frais de service", "Seulement un salaire de l'État", "Des amendes aux agriculteurs", "La vente des données des agriculteurs"], answer: 0, why: "Les FBA sont des entrepreneurs payés par des commissions et des frais." },
      { objective: "O5", q: "Qu'est-ce qu'un conflit d'intérêts pour un FBA ?", options: ["Vendre des semences authentiques", "Noter ses ventes", "Quand le produit qui vous rapporte le plus n'est pas le meilleur pour l'agriculteur", "Donner une formation"], answer: 2, why: "Les règles éthiques servent à gérer ce conflit." },
      { objective: "O5", q: "Laquelle est une bonne pratique de FBA ?", options: ["Cacher sa commission", "Vendre à crédit à ceux qui ne peuvent pas rembourser", "Vendre des produits sans étiquette", "Écrire ses prix"], answer: 3, why: "Des prix écrits gardent la vente juste et claire." },
      { objective: "O6", q: "Un registre de formation doit contenir :", options: ["La date, le sujet, les noms et si chaque agriculteur savait faire le geste", "Les codes PIN de mobile money des agriculteurs", "Seulement le nom du formateur", "Rien ; la mémoire suffit"], answer: 0, why: "Cela montre qui a été formé et avec quel résultat." },
      { objective: "O6", q: "Pourquoi faire un suivi des agriculteurs après la formation ?", options: ["Pour vendre plus", "Pour voir s'ils ont utilisé la pratique et ce que cela a donné", "Parce qu'ils vous doivent quelque chose", "Ce n'est pas nécessaire"], answer: 1, why: "Le suivi montre les résultats et où aider davantage." },
      { objective: "O6", q: "Si vous n'avez pas mesuré les résultats, vous devez :", options: ["Inventer de bons chiffres", "Reprendre les chiffres de l'année dernière", "Dire qu'ils n'ont pas été mesurés", "Copier un autre rapport"], answer: 2, why: "N'inventez jamais de résultats." },
      { objective: "O6", q: "Noter le numéro de téléphone d'un agriculteur demande :", options: ["Rien", "Un paiement", "L'accord d'un acheteur", "Son consentement"], answer: 3, why: "Les informations personnelles ne sont notées qu'avec la permission de la personne." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 6, 8, 9, 10, 13, 14, 16] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Plan de leçon", objective: "O2", notYet: "Un discours sans pratique, ou plusieurs compétences à la fois.", meets: "Une seule compétence, montrer-essayer-discuter avec des durées et du matériel, sur 60 à 90 minutes, avec une vérification que chaque agriculteur sait le faire.", exceeds: "Prévoit aussi la venue des femmes et des jeunes et inclut une courte vidéo sur téléphone ou un suivi par SMS." },
      { name: "Parcelle de démonstration", objective: "O3", notYet: "Pas de comparaison, ou des parcelles qui diffèrent de plusieurs façons.", meets: "Deux parcelles de même taille avec panneaux, qui diffèrent par une seule pratique, avec des registres et des dates de journées au champ.", exceeds: "Précise comment les récoltes seront pesées par parcelle et partagées honnêtement, même si la nouvelle pratique ne gagne pas." },
      { name: "Conseils sûrs et orientation", objective: "O4", notYet: "Donne des doses ou cite des produits non homologués ; pas de liste d'orientation.", meets: "Une liste d'orientation avec les contacts, et ce sur quoi le formateur ne donnera pas de conseils, y compris les maladies à déclaration obligatoire.", exceeds: "Nomme l'organisme national d'homologation des pesticides et explique comment consulter sa liste." },
      { name: "Gains justes", objective: "O5", notYet: "Formation liée à l'achat, ou commissions cachées.", meets: "En cas de vente, prix écrits, commissions annoncées et formation ouverte à tous.", exceeds: "Inclut des gains d'exemple sur une saison après les coûts, et une règle pour dire \"vous n'avez rien besoin d'acheter\"." },
      { name: "Registres et rôles", objective: "O6", notYet: "Pas de registre, ou des données personnelles partagées ouvertement.", meets: "Un registre avec consentement, une date de suivi et un rangement confidentiel ; le contact local de la vulgarisation est nommé.", exceeds: "Note à la fois les résultats de la parcelle de démonstration et l'adoption par les agriculteurs au moment du suivi." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui animent au moins une journée de formation dans les 30 jours (enquête de suivi)",
      "Nombre d'agriculteurs formés par apprenant, d'après les registres de formation",
      "Part des agriculteurs formés qui utilisent la pratique au moment du suivi",
      "Résultats de la parcelle de démonstration comparés à la pratique habituelle après une saison",
      "Apprenants qui travaillent avec leur bureau de vulgarisation local ou un programme comme paysans relais ou FBA"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un smartphone pour les courtes vidéos, les SMS et WhatsApp",
      "Papier, stylo et un cahier pour le plan de leçon, le plan de parcelle de démonstration et le registre",
      "L'accès à un petit terrain pour une parcelle de démonstration, des piquets, de la ficelle et des panneaux",
      "Les coordonnées du bureau de vulgarisation local, d'un vétérinaire et de l'organisme national d'homologation des pesticides",
      "Environ 90 minutes au total, plus le temps d'animer la journée de formation"
    ],
    facilitatorNotes: [
      "Enseignez ce cours comme il demande aux apprenants d'enseigner : montrer, essayer, discuter, avec le plan de leçon et le plan de parcelle de démonstration faits pendant la séance.",
      "Associez le bureau de vulgarisation local ; invitez si possible un agent de vulgarisation à la leçon 1.",
      "Ne laissez jamais les apprenants donner des doses de médicaments, de vaccins ou d'hormones pour animaux ni des délais d'attente dans les jeux de rôle ; faites-leur plutôt pratiquer l'orientation.",
      "Avec les futurs FBA, jouez une conversation de vente où la bonne réponse est \"vous n'avez rien besoin d'acheter\".",
      "Vérifiez que les registres d'exercice utilisent des noms inventés, sauf si de vrais agriculteurs ont donné leur consentement.",
      "Évaluez la tâche finale avec la grille et donnez un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
