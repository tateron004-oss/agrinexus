"use strict";

// Koach Learn course, French translation of agriculture-africa/agri-drones-regulations.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// Official titles of Kenyan and Nigerian regulations are kept in English (their legal names), with a French explanation.

const KCAA_UAS = { name: "Autorité de l'aviation civile du Kenya (KCAA) : systèmes d'aéronefs sans pilote", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_PORTAL = { name: "Système en ligne de la KCAA pour les drones (RPAS)", url: "https://rpas.kcaa.or.ke/" };
const KCAA_FEES = { name: "KCAA : Civil Aviation (Regulatory Fees and Charges for Unmanned Aircraft Systems) Regulations, 2020 (L.N. 4 of 2021), barème des redevances", url: "https://www.kcaa.or.ke/sites/default/files/docs/uas/UASCharges.pdf" };
const KCAA_ROC = { name: "KCAA : certificat d'exploitant aérien à distance (ROC)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems/roc" };
const KCAA_UTO = { name: "KCAA : organismes de formation aux systèmes d'aéronefs sans pilote (UTO)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems/uto" };
const KCAA_REGS_2026 = { name: "KCAA : règlements de l'aviation civile du Kenya 2026 (règlements publiés)", url: "https://www.kcaa.or.ke/published-regs-2026" };
const KENYA_LAW_UAS = { name: "Kenya Law : The Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020 (L.N. 42 of 2020)", url: "https://new.kenyalaw.org/akn/ke/act/ln/2020/42" };
const NCAA_P21 = { name: "Autorité de l'aviation civile du Nigeria (NCAA) : Nig.CARs 2023, partie 21, systèmes d'aéronefs télépilotés", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_WHO_AERIAL = { name: "FAO et OMS : directives pour l'application aérienne des pesticides (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };
const PCPB = { name: "Pest Control Products Board (Kenya), office des produits phytosanitaires", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "Agence nationale de contrôle des aliments et des médicaments (NAFDAC, Nigeria)", url: "https://www.nafdac.gov.ng" };
const ODPC = { name: "Bureau du Commissaire à la protection des données (Kenya, ODPC)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Commission nigériane de protection des données (NDPC)", url: "https://ndpc.gov.ng" };

module.exports = {
  id: "agri-drones-regulations-fr",
  lang: "fr",
  translationOf: "agri-drones-regulations",
  category: "Agriculture (Africa)",
  name: "Drones agricoles en Afrique : réglementation aérienne et licences",
  skills: "Trouver et lire la réglementation nationale sur les drones, Classer un drone et une opération selon le risque, Établir la liste des licences et certificats nécessaires à une mission, Gérer les opérations spéciales (pulvérisation, BVLOS, près des aérodromes), Constituer un dossier de conformité, Suivre l'évolution des règles",
  outcome: "lire la réglementation sur les drones de votre pays, déterminer les immatriculations, licences, certificats et autorisations nécessaires à une mission de drone agricole, et constituer un dossier de conformité complet pour une entreprise de services par drone.",
  about: [
    "Ce cours s'adresse aux personnes qui prévoient de piloter des drones de façon professionnelle dans l'agriculture africaine : entrepreneurs de services par drone, gestionnaires d'agro-entreprises et de plantations, responsables de coopératives et de vulgarisation, et jeunes qui se forment comme télépilotes. Il va plus loin que l'aperçu donné dans le parcours de surveillance.",
    "Le chapitre 1 explique comment le droit des drones est construit, puis présente les règles du Kenya et du Nigeria : les Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020, supervisées par l'Autorité de l'aviation civile du Kenya (KCAA), et la partie 21 des règlements de l'aviation civile du Nigeria de 2023, supervisée par l'Autorité de l'aviation civile du Nigeria (NCAA). Le chapitre 2 porte sur les licences et la certification des exploitants, les opérations spéciales comme la pulvérisation et les vols près des aérodromes, et la constitution et la tenue d'un dossier de conformité.",
    "Ce cours est une formation, pas un conseil juridique. Les règles sur les drones sont des lois, elles changent, et les autres pays africains ont leur propre autorité et leurs propres règles. Chaque leçon renvoie à la source officielle ; vérifiez tout sur place, ou auprès de l'autorité ou d'un avocat, avant d'agir. Ne volez jamais sans l'immatriculation, la licence et les autorisations exigées par votre pays."
  ],
  finalTask: "Constituez un dossier de conformité pour une entreprise de services par drone dans votre pays, qui cartographiera des cultures pour des agriculteurs et des plantations (et, si vous le prévoyez, pulvérisera) : l'autorité et les règlements applicables, avec les liens et la date de vérification ; la classification de votre drone et la catégorie de risque de l'opération ; chaque immatriculation, permis, licence, certificat et autorisation nécessaire, qui le délivre et où vous en êtes ; les documents exigés (manuel d'exploitation, assurance, registres de maintenance et de vol) ; les autorisations supplémentaires pour toute pulvérisation ; les mesures de protection des données ; et un calendrier de vérification des changements de règles et des renouvellements.",
  chapters: [
    {
      name: "Chapitre 1 : Le droit des drones en Afrique",
      lessons: [
        {
          title: "Comment le droit des drones est construit",
          minutes: 5,
          goal: "Trouver et nommer les niveaux du droit des drones qui s'appliquent dans votre pays.",
          text: [
            "Les pays fondent leurs règles aériennes sur les normes internationales de l'OACI, l'Organisation de l'aviation civile internationale des Nations unies, mais chaque pays écrit et fait appliquer son propre droit des drones. En général, il y a une loi sur l'aviation votée par le parlement ; des règlements sur les drones pris en application de cette loi ; des normes ou manuels d'application avec les détails techniques ; un barème des redevances ; et des avis ou circulaires pour les cas particuliers.",
            "La plupart des règles modernes classent les opérations selon le risque. Les vols à faible risque (petit drone, à vue, à basse hauteur, loin des personnes et des aéroports) ont les exigences les plus légères. Les vols à risque plus élevé (drones lourds, hors de vue, au-dessus des personnes, près des aérodromes, pulvérisation ou largage) demandent davantage : une autorisation, des exploitants certifiés, des pilotes titulaires d'une licence et parfois des aéronefs certifiés.",
            "Pour trouver les règles de votre pays, allez sur le site de l'autorité de l'aviation civile et cherchez une rubrique « drones », « UAS », « RPAS » ou « aéronefs sans pilote ». Téléchargez les règlements, les normes et le barème des redevances, et notez la date. Exemples d'autorités : la KCAA (Kenya), la NCAA (Nigeria), et les autorités de l'aviation civile du Ghana, du Rwanda, de l'Ouganda, de la Tanzanie et de l'Afrique du Sud. En Afrique francophone, cherchez l'agence nationale de l'aviation civile de votre pays (par exemple l'ANAC)."
          ],
          steps: ["Ouvrez le site de votre autorité de l'aviation civile.", "Trouvez la rubrique drones / UAS / RPAS.", "Téléchargez les règlements, les normes d'application et le barème des redevances.", "Notez la date et la version de chaque document.", "Notez comment les règles classent les opérations selon le risque."],
          words: [["OACI", "l'Organisation de l'aviation civile internationale (ICAO en anglais), une agence de l'ONU qui fixe les normes aériennes internationales."], ["Règlements", "des règles juridiquement obligatoires prises en application d'une loi votée par le parlement."], ["Normes d'application", "des règles techniques détaillées qui expliquent comment respecter les règlements."], ["Catégorie de risque", "un groupe d'opérations au risque et aux exigences semblables."]],
          slides: [
            { title: "Les niveaux du droit des drones", bullets: ["Loi sur l'aviation", "Règlements sur les drones pris en application de la loi", "Normes d'application et barème des redevances", "Avis et circulaires"] },
            { title: "Les règles suivent le risque", bullets: ["Faible risque : petit, à vue, bas, loin des personnes", "Risque élevé : lourd, hors de vue, au-dessus des personnes", "Pulvériser ou larguer : plus d'autorisations"] },
            { title: "Trouvez vos règles", bullets: ["Site de l'autorité : drones, UAS ou RPAS", "Téléchargez règlements, normes, redevances", "Notez la date et la version"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Pour votre pays, notez l'autorité de l'aviation, le nom et l'année des règlements sur les drones, s'il existe des normes d'application et un barème des redevances, et la date de votre vérification. Rangez les documents dans un seul dossier.",
          youCanNow: "trouver les niveaux du droit des drones de votre pays et voir comment ils classent les opérations selon le risque."
        },
        {
          title: "Kenya : la KCAA et les règlements UAS de 2020",
          minutes: 6,
          goal: "Lister les autorisations kényanes dont un exploitant commercial de drones agricoles aura probablement besoin.",
          text: [
            "Au Kenya, les drones sont régis par les Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020, pris en application de la loi sur l'aviation civile de 2013 (Civil Aviation Act, 2013) et supervisés par la KCAA. La page drones de la KCAA publie aussi un manuel des normes d'application et un barème des redevances, les Civil Aviation (Regulatory Fees and Charges for Unmanned Aircraft Systems) Regulations, 2020.",
            "Le barème montre les principales autorisations qui existent : un permis d'importation et l'immatriculation du drone ; des certificats de navigabilité ; un certificat d'exploitant aérien à distance (ROC) pour les exploitants ; des autorisations d'opération pour la catégorie A et pour les catégories B et C ; des licences pour les personnes, dont une licence d'élève télépilote, une licence de télépilote (RPL) et des qualifications comme le vol hors de la vue directe ; et des agréments pour les organismes de formation et les revendeurs de drones. La KCAA publie sur son site la liste des titulaires de ROC et des organismes de formation agréés, et les demandes passent par son système en ligne pour les drones.",
            "Le site de la KCAA liste aussi de nouveaux règlements de l'aviation civile du Kenya publiés en 2026. Vérifiez si l'un d'eux modifie les règles sur les drones avant de vous fier aux versions de 2020, et vérifiez les redevances en vigueur le jour de votre demande."
          ],
          words: [["KCAA", "l'Autorité de l'aviation civile du Kenya, qui réglemente les drones au Kenya."], ["ROC", "certificat d'exploitant aérien à distance : l'agrément de la KCAA qui permet à une organisation d'exploiter des drones."], ["SRPL / RPL", "licence d'élève télépilote / licence de télépilote."], ["Certificat de navigabilité", "une confirmation officielle qu'un aéronef est apte et sûr pour voler."]],
          slides: [
            { title: "Le droit des drones au Kenya", bullets: ["Civil Aviation (UAS) Regulations, 2020", "Pris en application du Civil Aviation Act, 2013", "Supervisés par la KCAA"] },
            { title: "Autorisations du barème", bullets: ["Permis d'importation et immatriculation", "ROC pour les exploitants", "Autorisations d'opération : catégorie A ; B et C", "SRPL, RPL, BVLOS et autres qualifications"] },
            { title: "Où demander et vérifier", bullets: ["Système en ligne de la KCAA pour les drones", "Listes des titulaires de ROC et des écoles", "Vérifiez les règlements 2026 et les redevances"] }
          ],
          sources: [KCAA_UAS, KENYA_LAW_UAS, KCAA_FEES, KCAA_ROC, KCAA_UTO, KCAA_PORTAL, KCAA_REGS_2026],
          tryIt: "Ouvrez la page drones et le barème des redevances de la KCAA. Faites un tableau de toutes les autorisations dont aurait besoin une entreprise payée pour cartographier des plantations de thé (drone, personnes, organisation, opération), avec une colonne indiquant où faire la demande. Pour les redevances, écrivez « à vérifier le jour même ».",
          youCanNow: "lister les immatriculations, licences, certificats et autorisations kényans dont un exploitant commercial de drones agricoles aura probablement besoin, et où les demander."
        },
        {
          title: "Nigeria : la NCAA et la partie 21 des Nig.CARs",
          minutes: 6,
          goal: "Classer un drone et une opération selon la partie 21 du Nigeria et lister ce qu'elle exige.",
          text: [
            "Au Nigeria, les drones relèvent de la partie 21 (systèmes d'aéronefs télépilotés, RPAS) des règlements de l'aviation civile du Nigeria de 2023, document Nig.CARs/2023/021, en vigueur depuis le 17 mai 2023 et supervisé par la NCAA. Elle couvre la certification, l'immatriculation, l'exploitation et la surveillance des RPAS.",
            "La partie 21 classe les aéronefs selon leur poids : Nano (moins de 250 g), Micro (de 250 g à moins de 2 kg), Small (de 2 kg à moins de 25 kg), Medium (de 25 kg à 150 kg) et Large (plus de 150 kg), chaque classe ayant des conditions et demandant une autorisation préalable de l'Autorité. Elle utilise aussi trois catégories de risque opérationnel : Open (risque le plus faible, immatriculation obligatoire), Specific (risque plus élevé, autorisation nécessaire) et Certified (aéronef, exploitant et pilote certifiés, traités presque comme l'aviation avec pilote à bord). Elle prévoit des licences de télépilote et des certificats d'exploitant de RPAS.",
            "La partie 21 fixe aussi des limites d'exploitation, par exemple des vols à 120 m (400 pieds) ou moins au-dessus du sol dans de nombreux cas, une distance horizontale de 30 m des personnes qui ne participent pas à l'opération, aucun vol au-dessus des zones habitées, et une distance avec les aérodromes (par exemple à moins de 4 km de l'aire de mouvement d'un aérodrome contrôlé, ou 10 km pour les vols privés et de loisir), sauf autorisation. Lisez le texte complet pour connaître les conditions qui s'appliquent à votre opération."
          ],
          words: [["NCAA", "l'Autorité de l'aviation civile du Nigeria, qui réglemente les drones au Nigeria."], ["Nig.CARs", "les règlements de l'aviation civile du Nigeria."], ["Open / Specific / Certified", "les trois catégories de risque opérationnel de la partie 21, du risque le plus faible au plus élevé."], ["Aire de mouvement", "la partie d'un aéroport où les aéronefs décollent, atterrissent et circulent au sol."]],
          slides: [
            { title: "Le droit des drones au Nigeria", bullets: ["Nig.CARs 2023, partie 21 : RPAS", "En vigueur depuis le 17 mai 2023", "Supervisé par la NCAA"] },
            { title: "Classes selon le poids", bullets: ["Nano < 250 g ; Micro de 250 g à < 2 kg", "Small de 2 à < 25 kg ; Medium 25-150 kg", "Large > 150 kg"] },
            { title: "Catégories de risque", bullets: ["Open : risque le plus faible, immatriculé", "Specific : autorisation nécessaire", "Certified : aéronef, exploitant, pilote certifiés"] },
            { title: "Exemples de limites", bullets: ["120 m (400 pieds) au-dessus du sol dans de nombreux cas", "30 m des personnes non concernées", "Distances avec les aérodromes sauf autorisation"] }
          ],
          sources: [NCAA_P21],
          tryIt: "Une agro-entreprise nigériane veut cartographier des champs de manioc dans l'État d'Ogun avec un multirotor de 1,2 kg, et pulvériser avec un multirotor de 15 kg. À l'aide de la partie 21, écrivez la classe de poids de chaque drone, la catégorie de risque probable de chaque mission, et trois questions que vous poseriez à la NCAA.",
          youCanNow: "classer un drone et une opération selon la partie 21 du Nigeria et lister ce qu'elle exige."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Le droit des drones en Afrique",
        questions: [
          { q: "D'où les règlements nationaux sur les drones tirent-ils leur force juridique ?", options: ["Du manuel d'un fabricant de drones", "D'une loi votée par le parlement, comme une loi sur l'aviation civile", "Des réseaux sociaux", "De l'agriculteur"], answer: 1, why: "Les règlements sont pris en application d'une loi votée par le parlement." },
          { q: "Quelle opération présente en général le risque le plus élevé ?", options: ["Un petit drone à vue au-dessus d'un champ vide", "Un vol stationnaire à 5 mètres", "Un drone lourd qui pulvérise hors de la vue directe", "Un vol sur simulateur"], answer: 2, why: "Le poids, le BVLOS et la pulvérisation augmentent tous le risque et les exigences." },
          { q: "Au Kenya, une entreprise payée pour cartographier des plantations a besoin de quel agrément d'exploitant ?", options: ["Un certificat d'exploitant aérien à distance (ROC) de la KCAA", "Une carte de visite", "Seulement un permis du comté", "Rien"], answer: 0, why: "La KCAA délivre les ROC aux exploitants de drones." },
          { q: "Selon la partie 21 du Nigeria, un drone de 1,2 kg est dans quelle classe de poids ?", options: ["Nano", "Small", "Large", "Micro"], answer: 3, why: "Micro va de 250 g à moins de 2 kg." },
          { q: "Dans la partie 21, la catégorie Specific signifie :", options: ["Qu'aucune règle ne s'applique", "Un risque plus élevé ; une autorisation est nécessaire pour opérer", "Seulement pour les jouets", "Seulement pour les aéronefs avec pilote"], answer: 1, why: "Les opérations Specific présentent plus de risque et demandent une autorisation." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Licences, certification et conformité",
      lessons: [
        {
          title: "Licences de pilote et certificats d'exploitant",
          minutes: 5,
          goal: "Planifier les autorisations des personnes et de l'organisation pour une entreprise de services par drone.",
          text: [
            "Deux types d'autorisation comptent pour une entreprise. La personne qui pilote a besoin de la licence de pilote et des qualifications exigées : au Kenya, la licence de télépilote (RPL), obtenue dans un organisme de formation agréé par la KCAA ; au Nigeria, une licence de télépilote selon la partie 21. L'organisation qui vend des services par drone a en général besoin d'un certificat d'exploitant : le certificat d'exploitant aérien à distance de la KCAA ou le certificat d'exploitant de RPAS de la NCAA.",
            "La certification d'exploitant demande en général de prouver que l'entreprise peut opérer en sécurité : un manuel d'exploitation (comment vous planifiez, volez, entretenez et signalez), des responsables nommés, des pilotes formés et titulaires d'une licence, des drones immatriculés, un système de maintenance, des registres et une assurance. La partie 21, par exemple, cite les certificats d'assurance responsabilité civile parmi les documents qu'une opération doit avoir à bord.",
            "Prévoyez du temps et de l'argent pour cela. Demandez à l'autorité sa liste de vérification et ses redevances actuelles, et demandez aux organismes de formation agréés s'ils aident à rédiger les manuels d'exploitation."
          ],
          steps: ["Listez chaque pilote avec la licence et les qualifications dont il a besoin.", "Vérifiez le certificat d'exploitant dont votre entreprise a besoin.", "Obtenez la liste de vérification actuelle de l'autorité pour la demande.", "Rédigez un manuel d'exploitation : planification, vol, maintenance, urgences, signalement.", "Prévoyez une assurance et des systèmes de registres."],
          words: [["Manuel d'exploitation", "les règles écrites d'une entreprise sur la façon de planifier, de voler, d'entretenir les drones et de gérer les urgences."], ["Assurance responsabilité civile", "une assurance qui paie si votre opération cause un dommage à d'autres personnes ou à leurs biens."]],
          slides: [
            { title: "Deux types d'autorisation", bullets: ["La personne : licence de télépilote et qualifications", "L'entreprise : certificat d'exploitant"] },
            { title: "Le certificat d'exploitant demande", bullets: ["Un manuel d'exploitation", "Des responsables, des pilotes avec licence", "Drones immatriculés, maintenance, registres", "Une assurance"] },
            { title: "Préparez-vous", bullets: ["Obtenez la liste de vérification et les redevances", "Demandez aux écoles agréées pour les manuels", "Prévoyez du temps avant tout travail payé"] }
          ],
          sources: [KCAA_ROC, KCAA_UTO, NCAA_P21],
          tryIt: "Écrivez la table des matières d'un manuel d'exploitation pour une petite entreprise de cartographie des cultures, avec au moins huit sections (par exemple : organisation, responsabilités, planification des vols, vérifications avant vol, urgences, maintenance, registres, signalement des incidents).",
          youCanNow: "planifier les licences de pilote et le certificat d'exploitant dont une entreprise de services par drone a besoin, et savoir ce que contient un manuel d'exploitation."
        },
        {
          title: "Opérations spéciales : pulvérisation, BVLOS et aérodromes",
          minutes: 6,
          goal: "Repérer les opérations qui demandent des autorisations supplémentaires et savoir qui les délivre.",
          text: [
            "Pulvériser des pesticides ou larguer quoi que ce soit depuis un drone est une opération spéciale. La partie 21, par exemple, interdit de larguer ou de déverser des objets d'une façon qui crée un danger et a des règles à part pour les marchandises dangereuses, et le barème kényan liste des autorisations distinctes pour les catégories à risque plus élevé. Beaucoup de pesticides sont classés comme marchandises dangereuses. Attendez-vous à avoir besoin d'une autorisation aérienne spécifique, d'un aéronef certifié plus lourd et d'équipes formées.",
            "La pulvérisation relève aussi du droit des pesticides. Au Kenya, les produits phytosanitaires sont réglementés par le Pest Control Products Board (PCPB) ; au Nigeria, les produits agrochimiques sont réglementés par la NAFDAC. Demandez-leur si le produit peut être appliqué par voie aérienne et quelle formation et quels équipements de protection les applicateurs doivent avoir. La FAO et l'OMS ont publié des directives pour l'application aérienne des pesticides. Ne pulvérisez jamais, et ne proposez jamais de pulvériser, sans les autorisations aériennes et phytosanitaires.",
            "Les autres opérations spéciales comprennent le vol hors de la vue directe (BVLOS), le vol de nuit, près des aérodromes ou sur ceux-ci, au-dessus des personnes ou des routes, et dans les zones réglementées ou protégées comme les parcs nationaux. Chacune demande une autorisation spécifique. Les grandes exploitations proches d'une piste d'atterrissage sont fréquentes en Afrique : vérifiez les distances et demandez avant de planifier."
          ],
          words: [["Marchandises dangereuses", "des matières qui peuvent nuire à la santé, à la sécurité ou aux biens pendant le transport, comme beaucoup de pesticides."], ["Autorité des pesticides", "l'organisme public qui homologue les pesticides et contrôle leur utilisation."], ["BVLOS", "vol hors de la vue directe du pilote (beyond visual line of sight)."]],
          slides: [
            { title: "Pulvériser et larguer", bullets: ["Opérations spéciales, à risque plus élevé", "Autorisation aérienne, aéronef certifié, équipe formée", "Beaucoup de pesticides sont des marchandises dangereuses"] },
            { title: "Le droit des pesticides aussi", bullets: ["Kenya : Pest Control Products Board (PCPB)", "Nigeria : NAFDAC", "Directives FAO/OMS sur l'application aérienne"] },
            { title: "Autres opérations spéciales", bullets: ["Hors de vue, de nuit", "Près des aérodromes, au-dessus des personnes ou routes", "Parcs et zones réglementées"] },
            { title: "La règle", bullets: ["Pas de pulvérisation sans autorisation aérienne ET phytosanitaire", "Demandez avant de planifier près d'une piste"] }
          ],
          sources: [NCAA_P21, KCAA_FEES, PCPB, NAFDAC, FAO_WHO_AERIAL],
          tryIt: "Une plantation de canne à sucre située à 3 km d'une piste d'atterrissage vous demande de pulvériser un fongicide par drone. Listez toutes les autorisations et vérifications nécessaires (aérienne, phytosanitaire, propriétaire du terrain, aérodrome) et la personne ou l'organisme à contacter pour chacune.",
          youCanNow: "repérer les opérations spéciales et lister les autorisations aériennes et phytosanitaires qu'elles demandent."
        },
        {
          title: "Constituer et tenir un dossier de conformité",
          minutes: 5,
          goal: "Constituer un dossier de conformité et un calendrier pour le tenir à jour.",
          text: [
            "Un dossier de conformité réunit tout ce qui prouve que votre opération est légale et sûre, en un seul endroit que vous pouvez montrer à un inspecteur, à un client ou à un assureur. Gardez une copie papier et une copie numérique sauvegardée.",
            "Incluez : les règlements et normes que vous suivez (avec la date de vérification) ; les certificats d'immatriculation de chaque drone ; les permis d'importation ; les licences et qualifications des pilotes ; le certificat d'exploitant ; les autorisations d'opération ; le manuel d'exploitation ; les certificats d'assurance ; les registres de maintenance ; les carnets de vol ; les rapports d'incident ; les contrats avec les clients et les autorisations des propriétaires ; et vos mesures de protection des données (Kenya : ODPC ; Nigeria : NDPC) si vous détenez des données personnelles d'agriculteurs.",
            "Les règles, les redevances et les formulaires changent. Tenez un calendrier des renouvellements pour chaque licence et certificat, et consultez le site de l'autorité à intervalles fixes, par exemple chaque mois, et avant chaque nouveau type de mission. Notez ce que vous avez vérifié et quand."
          ],
          steps: ["Créez le dossier : papier et numérique sauvegardé.", "Ajoutez règlements, certificats, licences, autorisations, manuel, assurance.", "Ajoutez registres de maintenance, carnets de vol, rapports d'incident, contrats.", "Ajoutez l'enregistrement ou les mesures de protection des données si vous détenez des données personnelles.", "Fixez un calendrier des renouvellements et une vérification mensuelle des règles."],
          words: [["Conformité", "le fait de respecter les lois et règles qui s'appliquent à vous."], ["Renouvellement", "faire une nouvelle demande avant qu'une licence ou un certificat n'expire."]],
          slides: [
            { title: "Un seul endroit pour les preuves", bullets: ["Pour les inspecteurs, les clients et les assureurs", "Copie papier et copie numérique sauvegardée"] },
            { title: "Ce qu'il contient", bullets: ["Règlements, immatriculations, permis", "Licences, certificat d'exploitant, autorisations", "Manuel, assurance, maintenance, carnets, incidents"] },
            { title: "Ajoutez aussi", bullets: ["Contrats avec clients et propriétaires", "Mesures de protection des données (ODPC, NDPC)"] },
            { title: "Tenez-le à jour", bullets: ["Calendrier des renouvellements", "Vérifiez les règles chaque mois et avant toute nouvelle mission", "Notez ce que vous avez vérifié et quand"] }
          ],
          sources: [KCAA_UAS, KCAA_REGS_2026, NCAA_P21, ODPC, NDPC],
          tryIt: "Exercice final : constituez le dossier de conformité d'une entreprise de services par drone dans votre pays : autorité et règlements avec les dates, classification et catégorie de risque, chaque autorisation et où vous en êtes, documents exigés, autorisations de pulvérisation si prévues, mesures de protection des données, et calendrier des renouvellements et des vérifications de règles.",
          youCanNow: "constituer et tenir un dossier de conformité qui prouve que votre opération de drone est légale et sûre."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Licences, certification et conformité",
        questions: [
          { q: "Qui a en général besoin d'un certificat d'exploitant ?", options: ["L'organisation qui vend des services par drone", "Chaque agriculteur dont le champ est cartographié", "Le magasin de drones", "Personne"], answer: 0, why: "Les certificats d'exploitant agréent l'entreprise qui mène les opérations." },
          { q: "Qu'est-ce qu'un manuel d'exploitation ?", options: ["Le mode d'emploi du drone", "Les règles écrites d'une entreprise pour la planification, le vol, la maintenance et les urgences", "Une brochure commerciale", "Un reçu de paiement"], answer: 1, why: "Les autorités demandent aux exploitants de montrer comment ils opèrent en sécurité." },
          { q: "Au Kenya, quel organisme réglemente les produits phytosanitaires ?", options: ["La KCAA", "L'ODPC", "Le Pest Control Products Board (PCPB)", "La NDPC"], answer: 2, why: "Le PCPB réglemente les produits phytosanitaires ; la pulvérisation demande aussi une autorisation aérienne." },
          { q: "Un client veut qu'un drone pulvérise près d'une piste d'atterrissage. Votre première étape est de :", options: ["Pulvériser tôt le matin", "Pulvériser seulement la moitié du champ", "Ignorer la piste", "Vérifier les autorisations aériennes et phytosanitaires et les règles de distance avec l'aérodrome"], answer: 3, why: "La pulvérisation et la proximité d'un aérodrome demandent toutes deux des autorisations spécifiques." },
          { q: "À quelle fréquence vérifier les changements de règles ?", options: ["À intervalles fixes, par exemple chaque mois, et avant tout nouveau type de mission", "Jamais", "Seulement après une amende", "Tous les dix ans"], answer: 0, why: "Les règles et les redevances changent ; un calendrier vous tient à jour." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Drones agricoles en Afrique : réglementation aérienne et licences",
    questions: [
      { q: "L'OACI est :", options: ["Le régulateur des drones au Kenya", "L'Organisation de l'aviation civile internationale de l'ONU", "Une marque de drones", "Un pesticide"], answer: 1, why: "L'OACI fixe des normes internationales sur lesquelles les pays s'appuient." },
      { q: "Qui écrit et fait appliquer le droit des drones dans chaque pays africain ?", options: ["L'OACI directement", "Les fabricants de drones", "L'autorité de l'aviation civile de chaque pays", "Seulement l'Union africaine"], answer: 2, why: "Chaque pays contrôle son espace aérien et ses règles sur les drones." },
      { q: "Les normes d'application sont :", options: ["Des règles techniques détaillées qui expliquent comment respecter les règlements", "Des normes publicitaires", "Des variétés de cultures", "Des polices d'assurance"], answer: 0, why: "Elles contiennent le détail technique derrière les règlements." },
      { q: "Les principaux règlements kényans sur les drones sont :", options: ["La partie 21 des Nig.CARs", "La loi de 2019 sur la protection des données", "La loi sur les produits phytosanitaires", "Les Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020"], answer: 3, why: "La KCAA supervise les règlements UAS de 2020." },
      { q: "Le barème de la KCAA liste des autorisations d'opération pour :", options: ["La catégorie A, et les catégories B et C", "Seulement les jouets", "Seulement les aéronefs avec pilote", "Seulement les importations"], answer: 0, why: "Le Kenya autorise les opérations par catégorie de risque." },
      { q: "Au Kenya, les demandes d'autorisation pour les drones passent par :", options: ["Un bureau du comté", "Le système en ligne de la KCAA pour les drones", "Un magasin de drones", "Les réseaux sociaux"], answer: 1, why: "La KCAA gère un système RPAS en ligne." },
      { q: "Avant de vous fier aux règles kényanes de 2020, vous devez aussi vérifier :", options: ["De vieux articles de journaux", "L'avis d'un ami", "Les nouveaux règlements publiés par la KCAA et les redevances en vigueur", "Rien"], answer: 2, why: "Les règles et les redevances peuvent changer ; la KCAA liste les nouveaux règlements." },
      { q: "Les règles nigérianes sur les drones se trouvent dans :", options: ["Les règlements UAS du Kenya", "Les directives de la FAO", "La loi sur la protection des données", "La partie 21 des Nig.CARs 2023"], answer: 3, why: "La partie 21 couvre les RPAS au Nigeria." },
      { q: "Selon la partie 21, un drone de 15 kg est dans quelle classe ?", options: ["Small", "Nano", "Micro", "Large"], answer: 0, why: "Small va de 2 kg à moins de 25 kg." },
      { q: "La catégorie Open de la partie 21 :", options: ["Ne demande aucune immatriculation", "Est au risque le plus faible mais le drone doit être immatriculé", "Concerne les drones lourds de pulvérisation", "Permet de voler n'importe où"], answer: 1, why: "Les opérations Open sont à faible risque mais restent immatriculées." },
      { q: "La partie 21 limite de nombreuses opérations à :", options: ["1 000 m au-dessus du sol", "Aucune limite", "120 m (400 pieds) au-dessus du sol", "10 m au-dessus du sol"], answer: 2, why: "120 m (400 pieds) au-dessus du sol est une limite courante dans la partie 21." },
      { q: "La partie 21 tient de nombreuses opérations à quelle distance horizontale minimale des personnes non concernées ?", options: ["1 m", "3 m", "30 m", "300 km"], answer: 2, why: "La partie 21 utilise 30 m des personnes qui ne participent pas à l'opération." },
      { q: "Une licence de télépilote concerne :", options: ["La personne qui pilote", "Le drone", "La ferme", "L'entreprise"], answer: 0, why: "Les licences concernent les personnes ; les certificats concernent les organisations et les aéronefs." },
      { q: "L'assurance responsabilité civile paie quand :", options: ["On vous vole votre drone", "Votre opération cause un dommage à d'autres personnes ou à leurs biens", "Les prix des cultures baissent", "Vous réussissez un examen"], answer: 1, why: "Elle couvre les dommages causés aux autres." },
      { q: "Au Nigeria, les produits agrochimiques sont réglementés par :", options: ["La NCAA", "La NDPC", "La NAFDAC", "La KCAA"], answer: 2, why: "La NAFDAC réglemente les produits chimiques, dont les produits agrochimiques." },
      { q: "Beaucoup de pesticides sont classés comme :", options: ["Aliments", "Jouets", "Pièces détachées", "Marchandises dangereuses"], answer: 3, why: "Les règles sur les marchandises dangereuses s'appliquent à leur transport par air." },
      { q: "Laquelle est une opération spéciale qui demande une autorisation spécifique ?", options: ["Voler hors de la vue directe", "Un vol sur simulateur", "Lire les règlements", "Charger les batteries"], answer: 0, why: "Le BVLOS est à risque plus élevé et demande une autorisation." },
      { q: "Un dossier de conformité est :", options: ["Seulement une liste de clients", "Un seul endroit qui réunit toutes les preuves que votre opération est légale et sûre", "Une pièce de drone", "Une étiquette de pesticide"], answer: 1, why: "Il contient certificats, licences, manuels, registres et plus encore." },
      { q: "Si votre entreprise détient les numéros de téléphone d'agriculteurs au Kenya, quelle loi s'applique aussi ?", options: ["Aucune", "La partie 21 des Nig.CARs", "La loi de 2019 sur la protection des données, supervisée par l'ODPC", "Seulement le manuel du drone"], answer: 2, why: "Les données personnelles relèvent de la loi kényane sur la protection des données." },
      { q: "Ce cours est :", options: ["Un conseil juridique pour votre cas", "Une licence de télépilote", "Une autorisation de voler", "Une formation ; vérifiez tout auprès de l'autorité officielle"], answer: 3, why: "Les règles changent ; ce sont les sources officielles et les professionnels qui décident." }
    ]
  }
};
