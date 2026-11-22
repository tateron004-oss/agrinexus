"use strict";

// Koach Learn course (French translation of shared/warehouse-logistics.js). See scripts/koachlearn-courses/README.md, "Translations".
// Prepares learners for entry-level warehouse work and for the MSSC CLA and CLT credentials. It does not grant any credential.
// All counts and weights are practice only.

const BLS_MOVERS = { name: "Bureau des statistiques du travail des États-Unis (BLS) : manutentionnaires et déplaceurs de marchandises (en anglais)", url: "https://www.bls.gov/ooh/transportation-and-material-moving/hand-laborers-and-material-movers.htm" };
const BLS_CLERKS = { name: "Bureau des statistiques du travail des États-Unis (BLS) : employés d'enregistrement des marchandises (en anglais)", url: "https://www.bls.gov/ooh/office-and-administrative-support/material-recording-clerks.htm" };
const MSSC_CLT = { name: "MSSC : Certified Logistics Technician (CLT) et Certified Logistics Associate (CLA), en anglais", url: "https://www.msscusa.org/certified-logistics-technician-clt/" };
const OSHA_OUTREACH = { name: "Programme de formation Outreach de l'OSHA (cours de 10 heures et de 30 heures)", url: "https://www.osha.gov/training/outreach" };
const OSHA_WAREHOUSE = { name: "OSHA : Entrepôts", url: "https://www.osha.gov/warehousing" };
const OSHA_WH_HAZARDS = { name: "OSHA : Dangers en entrepôt et solutions", url: "https://www.osha.gov/warehousing/hazards-solutions" };
const OSHA_HEAT = { name: "OSHA : Exposition à la chaleur", url: "https://www.osha.gov/heat-exposure" };
const OSHA_178 = { name: "OSHA 29 CFR 1910.178 : Chariots industriels motorisés (freins de remorque et cales de roues)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.178" };
const AJC = { name: "CareerOneStop : trouver un American Job Center près de chez vous", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" };

module.exports = {
  id: "warehouse-logistics-fr",
  lang: "fr",
  translationOf: "warehouse-logistics",
  category: "Workforce Development",
  name: "Métiers de l'entrepôt et de la logistique",
  skills: "Connaître les métiers et les certifications de l'entrepôt, Trouver un article par SKU et par emplacement, Réceptionner une livraison, Monter une palette sûre, Travailler en sécurité et à bon rythme",
  outcome: "nommer les principaux métiers de l'entrepôt et les certifications qui aident à les obtenir, suivre les marchandises de la réception à l'expédition, trouver un article grâce à son SKU et à son code d'emplacement, vérifier une livraison avec ses documents et noter chaque problème, prévoir un chargement de palette sûr, et faire un plan pour être embauché.",
  about: [
    "Les entrepôts et les centres de distribution déplacent les produits que nous achetons chaque jour, et ils recrutent toute l'année. Ce cours s'adresse aux personnes qui cherchent un emploi, aux personnes qui sortent de prison, aux anciens militaires et à toute personne qui veut un premier emploi stable dans la logistique, avec des possibilités d'évoluer.",
    "Vous allez découvrir les métiers de l'entrepôt, le trajet des marchandises du camion au rayonnage puis au client, la lecture des codes d'emplacement, la réception d'une livraison et le comptage précis du stock, le montage d'une palette sûre, et la façon de rester en sécurité tout en gardant le rythme.",
    "Ce cours vous prépare. Il ne vous donne pas de certification. Si vous en voulez une, le Manufacturing Skill Standards Council (MSSC, un conseil national américain des normes de compétences) propose le Certified Logistics Associate (CLA) et le Certified Logistics Technician (CLT). Pour conduire un chariot élévateur, il faut la formation de l'employeur ; voyez notre cours « Les bases du métier de cariste (chariot élévateur) ».",
    "Chaque leçon dure environ cinq minutes et se termine par une activité « À vous de jouer » à faire avec un papier et un crayon. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Préparez un dossier de démarrage pour travailler en entrepôt : un rapport de réception pour une livraison d'entraînement (quantités vérifiées avec la liste de colisage, chaque manquant, excédent et dommage noté), une liste de préparation que vous avez mise dans l'ordre de parcours grâce aux codes d'emplacement, un croquis de plan de chargement de palette sûr avec les poids et les couches, et un plan d'une page pour être embauché, avec trois employeurs ou programmes, la certification que vous visez et deux lignes de CV honnêtes.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Adultes qui cherchent un premier emploi en entrepôt, en centre de distribution ou en logistique : demandeurs d'emploi, personnes qui sortent de prison, anciens militaires et militaires ayant une expérience de l'approvisionnement, jeunes adultes et personnes en reconversion.",
    startingPoint: "Savent compter, lire des nombres et des étiquettes, et suivre des consignes. Ont peu d'expérience des codes d'emplacement, des documents de réception, des inventaires ou du montage de palettes. Certains ont fait du travail physique, mais n'ont pas appris à soulever des charges en sécurité.",
    gap: "Les entrepôts embauchent beaucoup, mais les nouveaux qui se trompent en comptant, confondent les emplacements ou se blessent ne restent pas. Les apprenants ont besoin des habitudes de base de précision et de sécurité, et d'un chemin clair vers une certification et une promotion, pour être embauchés et rester.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; chaque terme est expliqué",
      "Calcul : nombres entiers, additions et multiplications simples ; les nombres d'entraînement sont inventés",
      "Aucun équipement nécessaire : on s'entraîne avec du papier, des objets de la maison ou des cartons",
      "Aucun chariot élévateur ni engin motorisé n'est utilisé dans ce cours",
      "Appareils : un téléphone ou un ordinateur de bibliothèque pour les pages officielles et la recherche d'emploi"
    ],
    prerequisites: "Aucun. « Les bases de la sécurité au travail (OSHA) » et « Les bases du métier de cariste (chariot élévateur) » sont de bons cours pour continuer."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "À partir d'une liste d'offres d'emploi en entrepôt", action: "identifier les postes, ce que fait chacun et les certifications qui aident à être embauché", standard: "en nommant au moins quatre postes et une vraie certification avec l'organisme qui la délivre" },
    { id: "O2", condition: "À partir d'une liste de préparation avec des SKU et des codes d'emplacement", action: "trouver l'emplacement de chaque article et mettre les prélèvements dans l'ordre de parcours", standard: "en lisant correctement chaque emplacement" },
    { id: "O3", condition: "À partir d'une livraison d'entraînement et de sa liste de colisage", action: "réceptionner la livraison et noter chaque manquant, excédent ou dommage", standard: "avec chaque quantité et chaque note justes" },
    { id: "O4", condition: "À partir de cartons et de leurs poids", action: "prévoir un chargement de palette sûr, avec le lourd en bas et sous la limite de poids", standard: "en respectant chaque règle de la liste de contrôle de la palette" },
    { id: "O5", condition: "Face à une tâche ou à un danger en entrepôt", action: "choisir la façon sûre de soulever, déplacer ou signaler tout en gardant le rythme", standard: "en réussissant au moins 4 situations sur 5" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Comment fonctionne un entrepôt",
      lessons: [
        {
          title: "Les métiers de l'entrepôt et les certifications utiles",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identifier les principaux métiers de l'entrepôt et une certification qui peut vous aider à être embauché.",
          text: [
            "Postes de départ courants : manutentionnaire ou agent d'entrepôt (déplace les marchandises), préparateur de commandes et emballeur (prépare les commandes des clients), agent de réapprovisionnement, agent d'expédition et de réception (contrôle ce qui entre et ce qui sort), agent d'inventaire (compte le stock et corrige les registres) et cariste. Avec l'expérience, vous pouvez devenir chef d'équipe, superviseur, ou coordinateur des stocks ou de la logistique.",
            "La plupart des postes de départ ne demandent pas de diplôme. On apprend en général sur le tas, souvent en un mois ou moins, ainsi que des règles de sécurité basées sur les normes de l'OSHA (l'Administration de la sécurité et de la santé au travail des États-Unis). Les employeurs cherchent des personnes ponctuelles, qui comptent avec soin et travaillent en sécurité.",
            "Les certifications vous aident à vous démarquer. Le Manufacturing Skill Standards Council (MSSC) propose le Certified Logistics Associate (CLA) et le Certified Logistics Technician (CLT) ; vous réussissez le CLA avant de passer le CLT. Le cours Outreach de 10 heures de l'OSHA donne une carte de fin de formation ; il est facultatif, et l'OSHA dit que ce n'est pas une certification. La conduite d'un chariot élévateur demande toujours la formation et l'évaluation de l'employeur lui-même.",
            "Le salaire et les offres d'emploi varient selon le lieu. Consultez l'Occupational Outlook Handbook officiel (le guide des perspectives d'emploi) sur bls.gov pour le salaire et les perspectives, ainsi que de vraies offres d'emploi près de chez vous."
          ],
          words: [["Logistique", "organiser et déplacer les marchandises depuis le lieu où elles sont fabriquées jusqu'au lieu où on en a besoin."], ["Centre de distribution", "un grand entrepôt qui expédie les marchandises vers des magasins ou des clients."], ["Certification", "un certificat ou une carte qui montre que vous avez réussi un examen ou terminé une formation."], ["MSSC", "le Manufacturing Skill Standards Council, un organisme national américain qui délivre les certifications CLA et CLT."]],
          slides: [
            { title: "Postes de départ", bullets: ["Manutentionnaire, préparateur, emballeur, réapprovisionneur", "Agent d'expédition et de réception, agent d'inventaire", "Cariste (avec la formation de l'employeur)"] },
            { title: "Comment on commence", bullets: ["En général, pas de diplôme demandé", "On apprend sur le tas, souvent en un mois ou moins", "Ponctualité, comptage soigneux, travail sûr"] },
            { title: "Certifications utiles", bullets: ["MSSC : d'abord le CLA, puis le CLT", "Carte OSHA de 10 heures : facultative, pas une certification", "Chariot élévateur : formation et évaluation de l'employeur"] },
            { title: "Vérifiez les faits", bullets: ["Salaire et perspectives : Occupational Outlook Handbook sur bls.gov", "De vraies offres d'emploi près de chez vous"] }
          ],
          sources: [BLS_MOVERS, BLS_CLERKS, MSSC_CLT, OSHA_OUTREACH],
          tryIt: "Trouvez trois offres d'emploi en entrepôt près de chez vous. Pour chacune, écrivez l'intitulé du poste, les horaires, ce que fait le poste en une ligne, et toute certification ou compétence demandée. Ouvrez ensuite la page CLT du MSSC et écrivez qui délivre le CLA et le CLT.",
          youCanNow: "nommer les principaux métiers de l'entrepôt, ce que fait chacun et les certifications qui peuvent vous aider à être embauché.",
          quickCheck: [
            { objective: "O1", q: "Quel poste contrôle les marchandises qui entrent et qui sortent en les comparant aux documents ?", options: ["Agent d'expédition et de réception", "Emballeur", "Mécanicien de chariots élévateurs", "Agent de sécurité"], answer: 0, why: "Les agents d'expédition et de réception suivent et contrôlent les envois qui entrent et qui sortent." },
            { objective: "O1", q: "Qui délivre la certification Certified Logistics Technician (CLT) ?", options: ["L'OSHA", "L'IRS", "Le Manufacturing Skill Standards Council (MSSC)", "N'importe quelle agence d'intérim"], answer: 2, why: "Le CLT, et le CLA qui vient avant, sont des certifications du MSSC." }
          ]
        },
        {
          title: "Le trajet des marchandises et les codes d'emplacement",
          objectives: ["O2"],
          minutes: 5,
          goal: "Trouver un article grâce à son SKU et à son code d'emplacement, et mettre les prélèvements dans l'ordre de parcours.",
          text: [
            "Les marchandises traversent l'entrepôt dans le même ordre chaque jour. Réception : elles arrivent et sont contrôlées. Rangement : elles sont placées à un endroit fixe. Stockage. Préparation : les employés prélèvent les articles d'une commande. Emballage. Expédition : les commandes partent en camion.",
            "Chaque produit a un SKU (unité de gestion de stock), un code pour cet article précis, par exemple une chemise bleue en taille L. Chaque emplacement de stockage a un code d'emplacement. Beaucoup d'entrepôts utilisent zone, allée, rack (ou travée) et niveau : A-12-03-B peut donc vouloir dire zone A, allée 12, rack 3, niveau B. Votre entrepôt vous apprendra son propre système.",
            "La plupart des entrepôts utilisent des scanners. Vous scannez l'emplacement et l'article pour que le système informatique (un système de gestion d'entrepôt) sache ce qui a bougé. Si l'article à cet endroit ne correspond pas au SKU, arrêtez-vous et prévenez votre chef d'équipe ; ne prenez pas un article qui y ressemble.",
            "Pour économiser des pas, prélevez dans l'ordre de parcours : triez votre liste par allée, puis par rack, pour passer une seule fois dans chaque allée."
          ],
          steps: ["Lisez le SKU et le code d'emplacement de chaque ligne.", "Découpez le code d'emplacement en ses parties : zone, allée, rack, niveau.", "Triez la liste par zone, puis par allée, puis par rack.", "À chaque emplacement, scannez ou vérifiez que le SKU correspond avant de prélever.", "S'il ne correspond pas ou si l'emplacement est vide, signalez-le."],
          words: [["SKU", "unité de gestion de stock : un code pour un produit précis."], ["Code d'emplacement", "l'adresse d'un emplacement de stockage, par exemple zone, allée, rack et niveau."], ["Rangement", "placer les marchandises reçues à leur emplacement de stockage."], ["Préparation de commandes", "prélever des articles dans le stock pour remplir une commande."], ["Système de gestion d'entrepôt (WMS)", "le système informatique qui suit l'emplacement de chaque article."]],
          slides: [
            { title: "Le trajet des marchandises", bullets: ["Réception, rangement, stockage", "Préparation, emballage, expédition"] },
            { title: "Les codes que vous utilisez", bullets: ["SKU : l'article précis", "Emplacement : zone, allée, rack, niveau", "Exemple : A-12-03-B"] },
            { title: "Prélever juste et malin", bullets: ["Scannez l'emplacement et l'article", "Mauvais article ou emplacement vide ? Signalez-le", "Triez par allée pour passer une fois dans chacune"] }
          ],
          sources: [BLS_CLERKS],
          tryIt: "Entraînement seulement. Mettez cette liste de préparation dans l'ordre de parcours (zone, allée, rack, niveau) : B-04-02-A, A-12-03-B, A-03-01-C, B-01-05-A, A-12-01-A. Écrivez ensuite ce que veut dire chaque partie de A-12-03-B. Vérification : l'ordre commence par A-03-01-C, A-12-01-A, A-12-03-B.",
          youCanNow: "lire un code d'emplacement, trouver un article par son SKU et mettre une liste de préparation dans l'ordre de parcours.",
          quickCheck: [
            { objective: "O2", q: "Qu'est-ce qu'un SKU ?", options: ["Un type de chariot élévateur", "Un code pour un produit précis", "Un camion de livraison", "Une règle de sécurité"], answer: 1, why: "Une unité de gestion de stock est un code pour un article précis." },
            { objective: "O2", q: "Vous arrivez à un emplacement et l'article ne correspond pas au SKU de votre liste. Que faites-vous ?", options: ["Vous prenez un article qui y ressemble", "Vous sautez la ligne sans rien dire", "Vous prenez deux articles d'autre chose", "Vous vous arrêtez et vous le signalez à votre chef d'équipe"], answer: 3, why: "Une erreur doit être signalée pour que la commande et les registres restent justes." }
          ]
        },
        {
          title: "Réceptionner une livraison et compter le stock",
          objectives: ["O3"],
          minutes: 6,
          goal: "Vérifier une livraison avec sa liste de colisage et noter chaque problème.",
          text: [
            "Quand un camion arrive, la réception vérifie que ce qui est arrivé correspond à ce qui a été commandé. Vous comparez les marchandises à la liste de colisage (et au bon de commande, si vous l'avez). Le chauffeur remet aussi un connaissement, le document de transport que vous signez.",
            "Comptez chaque ligne. Vérifiez le SKU, la quantité et l'état. Si un carton est écrasé, mouillé ou ouvert, prenez une photo si votre site le permet et notez-le. Si vous avez reçu moins que la liste, c'est un manquant ; plus, c'est un excédent. Notez chaque problème sur les documents avant de signer, comme le prévoit la procédure de votre site. Signer un reçu sans réserve peut vouloir dire que vous avez tout accepté en bon état.",
            "L'inventaire fonctionne de la même façon. Un inventaire tournant consiste à compter quelques emplacements chaque jour au lieu de tout l'entrepôt d'un coup. Si votre comptage ne correspond pas au système, recomptez, puis signalez-le. Ici, la précision compte plus que la vitesse."
          ],
          steps: ["Prenez la liste de colisage (et le bon de commande si vous l'avez).", "Comptez chaque ligne : bon SKU, bonne quantité.", "Vérifiez l'état de chaque carton.", "Notez chaque manquant, excédent ou dommage sur les documents.", "Suivez la procédure de votre site avant de signer le connaissement.", "Signalez les problèmes à votre chef d'équipe."],
          words: [["Liste de colisage", "la liste de ce que contient un envoi."], ["Bon de commande (PO)", "la commande de l'acheteur, qui montre ce qui a été acheté et en quelle quantité."], ["Connaissement (BOL)", "le document de transport remis par le transporteur ; le signer dit que vous avez reçu les marchandises."], ["Manquant", "moins d'articles sont arrivés que ce que disent les documents."], ["Excédent", "plus d'articles sont arrivés que ce que disent les documents."], ["Inventaire tournant", "compter quelques emplacements à la fois pour garder des registres justes."]],
          slides: [
            { title: "Ce que vérifie la réception", bullets: ["Bon SKU", "Bonne quantité", "Bon état"] },
            { title: "Les problèmes à noter", bullets: ["Manquant : moins que la liste", "Excédent : plus que la liste", "Dommage : écrasé, mouillé ou ouvert"] },
            { title: "Avant de signer", bullets: ["Notez chaque problème", "Suivez la procédure de votre site", "Une signature sans réserve peut dire que tout allait bien"] },
            { title: "Compter le stock", bullets: ["Inventaire tournant : quelques emplacements par jour", "Ça ne correspond pas ? Recomptez, puis signalez", "La précision avant la vitesse"] }
          ],
          sources: [BLS_CLERKS],
          tryIt: "Entraînement seulement. La liste de colisage indique : SKU 1001, 12 caisses ; SKU 1002, 8 caisses ; SKU 1003, 20 caisses. Vous comptez 12 de 1001, 6 de 1002 et 21 de 1003, dont une caisse de 1003 écrasée. Écrivez un rapport de réception : chaque ligne, ce qui était prévu, ce qui est arrivé et le problème. Réponse : 1002, manquant de 2 ; 1003, excédent de 1 et 1 abîmée.",
          youCanNow: "vérifier une livraison avec sa liste de colisage et noter les manquants, les excédents et les dommages.",
          quickCheck: [
            { objective: "O3", q: "La liste de colisage indique 10 caisses, mais 8 sont arrivées. Comment cela s'appelle-t-il ?", options: ["Un excédent", "Un manquant", "Un inventaire tournant", "Un rangement"], answer: 1, why: "Moins d'articles que ce qu'indiquent les documents, c'est un manquant." },
            { objective: "O3", q: "Un carton de la livraison est mouillé et déchiré. Que faites-vous ?", options: ["Vous notez le dommage sur les documents avant de signer, comme le prévoit la procédure de votre site", "Vous signez le document sans rien dire", "Vous jetez le carton", "Vous le cachez au fond"], answer: 0, why: "Le dommage doit être noté pour pouvoir faire une réclamation et ne pas être reproché à l'entrepôt." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment fonctionne un entrepôt",
        questions: [
          { objective: "O1", q: "De quoi avez-vous besoin avant de conduire un chariot élévateur dans un entrepôt ?", options: ["Seulement d'une carte obtenue en ligne", "De rien", "D'un permis de conduire auto", "De la formation et de l'évaluation de l'employeur lui-même"], answer: 3, why: "L'OSHA exige que l'employeur forme et évalue chaque cariste." },
          { objective: "O1", q: "Qu'est-ce qui est vrai à propos de la carte OSHA de 10 heures ?", options: ["C'est un permis de cariste", "C'est une formation facultative et ce n'est pas une certification", "La loi l'exige pour tous les emplois", "Elle est délivrée par le MSSC"], answer: 1, why: "L'OSHA dit que la formation Outreach est facultative et n'est pas une certification." },
          { objective: "O2", q: "Dans le code A-12-03-B, que représente le plus probablement 12 ?", options: ["L'allée", "Le prix", "Le SKU", "Le poids"], answer: 0, why: "Dans un système zone-allée-rack-niveau, la deuxième partie est l'allée." },
          { objective: "O2", q: "Quelle étape vient juste après la réception ?", options: ["L'expédition", "L'emballage", "Le rangement", "La préparation"], answer: 2, why: "Une fois les marchandises réceptionnées, elles sont rangées à leur emplacement de stockage." },
          { objective: "O3", q: "Votre inventaire tournant donne 14, mais le système indique 16. Que faites-vous d'abord ?", options: ["Vous changez le système à 14", "Vous écrivez 16 pour que ça corresponde", "Vous l'ignorez", "Vous recomptez, puis vous le signalez si ça ne correspond toujours pas"], answer: 3, why: "Recomptez d'abord ; si ça ne correspond toujours pas, signalez-le pour qu'on vérifie." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Travailler en sécurité et se faire embaucher",
      lessons: [
        {
          title: "Soulever en sécurité et les dangers de l'entrepôt",
          objectives: ["O5"],
          minutes: 5,
          goal: "Choisir la façon sûre de soulever, de déplacer et de signaler les dangers dans un entrepôt.",
          text: [
            "L'OSHA cite les principaux dangers de l'entrepôt : les chariots élévateurs et autres engins motorisés, le port de charges et les gestes répétitifs, la manutention, les produits chimiques, les glissades, trébuchements et chutes, et les robots et convoyeurs. Les blessures les plus fréquentes sont les lésions dues au port de charges et les heurts par des chariots élévateurs.",
            "Soulevez malin. Prévoyez le geste et le trajet. Approchez-vous de la charge, pliez les genoux, gardez le dos droit et la charge près du corps, et ne vous tordez pas : tournez avec les pieds. Utilisez un chariot, un diable ou un transpalette quand c'est possible. Pour les objets lourds ou encombrants, demandez à les porter à plusieurs.",
            "Près des engins : restez dans les allées piétonnes, croisez le regard des caristes et ne passez jamais sous des fourches levées. Gardez les mains loin des convoyeurs en marche. Quand il fait chaud, buvez de l'eau souvent, prenez vos pauses et prévenez quelqu'un si vous avez des vertiges ou vous sentez mal.",
            "Le rythme compte, mais ne prenez jamais un raccourci dangereux. Signalez tout de suite à votre chef d'équipe les dangers comme une flaque, un rack abîmé ou une sortie bloquée."
          ],
          steps: ["Prévoyez : quel poids, où aller, le trajet est-il libre ?", "Approchez-vous, pliez les genoux, dos droit.", "Soulevez avec les jambes, la charge près du corps.", "Tournez avec les pieds ; ne vous tordez pas.", "Pour les charges lourdes, utilisez un chariot ou un transpalette, ou portez à plusieurs.", "Signalez les dangers tout de suite."],
          words: [["Ergonomie", "adapter le travail au corps pour éviter les efforts excessifs et les blessures."], ["Transpalette", "un outil manuel ou électrique qui soulève les palettes et les déplace sur une courte distance."], ["Port à plusieurs", "deux personnes ou plus qui soulèvent ensemble un objet lourd ou encombrant."], ["Maladie liée à la chaleur", "malaise dû au travail à la chaleur, comme l'épuisement par la chaleur ou le coup de chaleur."]],
          slides: [
            { title: "Principaux dangers de l'entrepôt", bullets: ["Chariots élévateurs et engins motorisés", "Port de charges et gestes répétitifs", "Glissades, chutes, convoyeurs, chaleur"] },
            { title: "Soulevez malin", bullets: ["Prévoyez, approchez-vous, pliez les genoux", "Charge près du corps ; tournez avec les pieds", "Chariot, transpalette ou port à plusieurs"] },
            { title: "Près des engins", bullets: ["Restez dans l'allée ; regardez le cariste", "Jamais sous des fourches levées", "Mains loin des convoyeurs en marche"] },
            { title: "Un rythme sûr", bullets: ["Eau et pauses quand il fait chaud", "Aucun raccourci dangereux", "Signalez les dangers tout de suite"] }
          ],
          sources: [OSHA_WAREHOUSE, OSHA_WH_HAZARDS, OSHA_HEAT],
          tryIt: "Entraînez-vous chez vous avec un carton vide ou peu chargé. Soulevez-le en suivant chaque étape, et dites chaque étape à voix haute. Écrivez ensuite trois dangers que vous pourriez voir dans un entrepôt et ce que vous feriez pour chacun.",
          youCanNow: "soulever et déplacer des objets en sécurité et signaler correctement les dangers de l'entrepôt.",
          quickCheck: [
            { objective: "O5", q: "Vous devez tourner en portant un carton. Comment faites-vous ?", options: ["Vous vous tordez au niveau de la taille", "Vous tournez avec les pieds", "Vous lancez le carton", "Vous le levez d'abord au-dessus de la tête"], answer: 1, why: "Tourner avec les pieds protège le dos ; se tordre en portant cause des blessures." },
            { objective: "O5", q: "Vous voyez un chariot élévateur arriver dans votre allée. Que faut-il faire pour être le plus en sécurité ?", options: ["Passer vite derrière lui", "Passer sous les fourches levées", "Rester dans l'allée piétonne et croiser le regard du cariste", "Faire signe et continuer à marcher sur son passage"], answer: 2, why: "Les allées piétonnes et le contact visuel aident le cariste à vous voir et vous gardent hors de son passage." }
          ]
        },
        {
          title: "Monter un chargement de palette sûr",
          objectives: ["O4"],
          minutes: 6,
          goal: "Prévoir un chargement de palette avec le lourd en bas, des couches régulières et un total sous la limite de poids.",
          text: [
            "Une bonne palette arrive entière et protège les personnes. Vérifiez d'abord la palette elle-même : pas de planches cassées ni de clous qui dépassent.",
            "Les cartons lourds vont en bas, les plus légers en haut. Faites des couches régulières et plates. Gardez les cartons à l'intérieur des bords de la palette (rien ne dépasse). Tournez une couche sur deux pour que les cartons se croisent (on appelle cela croiser les couches) ; cela aide la pile à tenir. Restez sous les limites de hauteur et de poids de votre site.",
            "Additionnez le poids. Exemple (entraînement seulement) : 20 cartons de 25 lb (livres) chacun font 500 lb, plus une palette d'environ 40 lb, cela fait 540 lb. Vérifiez que c'est sous la limite de la palette, du rack et de l'engin.",
            "Entourez le chargement de film étirable, bien serré du bas vers le haut, en prenant aussi la palette. Placez les étiquettes vers l'extérieur, là où on peut les scanner. Avant de charger les camions, on serre les freins de la remorque et on cale ses roues ; les charges sont réparties de façon égale dans la remorque."
          ],
          steps: ["Vérifiez la palette : pas de planches cassées ni de clous.", "Les cartons les plus lourds sur la couche du bas.", "Couches régulières, à l'intérieur des bords, croisées.", "Additionnez le poids total et vérifiez les limites.", "Filmez bien serré, du bas vers le haut, palette comprise.", "Étiquettes vers l'extérieur."],
          words: [["Palette", "un support plat en bois ou en plastique sur lequel on empile les marchandises pour les déplacer ensemble."], ["Croisement des couches", "tourner chaque couche de cartons pour qu'elle chevauche la couche du dessous."], ["Débord", "des cartons qui dépassent du bord de la palette."], ["Film étirable", "un film plastique fin enroulé autour d'un chargement pour le maintenir."]],
          slides: [
            { title: "Bien commencer", bullets: ["Vérifiez la palette : planches cassées, clous", "Les cartons les plus lourds en bas"] },
            { title: "Bien empiler", bullets: ["Couches régulières et plates", "Aucun débord", "Croisez les couches"] },
            { title: "Vérifier le poids", bullets: ["Cartons x poids, plus la palette", "Sous la limite de la palette, du rack et de l'engin"] },
            { title: "Bien finir", bullets: ["Filmez serré, du bas vers le haut", "Étiquettes vers l'extérieur"] }
          ],
          sources: [OSHA_WH_HAZARDS, OSHA_178],
          tryIt: "Entraînement seulement. Vous avez 8 cartons de 50 lb, 12 cartons de 20 lb et 6 cartons de 10 lb. Dessinez la palette vue de côté : quels cartons vont sur quelle couche. Additionnez le poids total avec une palette de 40 lb et vérifiez qu'il est sous une limite de 1 000 lb. Réponse : 400 + 240 + 60 + 40 = 740 lb.",
          youCanNow: "prévoir un chargement de palette sûr, avec le lourd en bas, des couches régulières et un total sous la limite.",
          quickCheck: [
            { objective: "O4", q: "Où vont les cartons les plus lourds sur une palette ?", options: ["Sur la couche du haut", "En débord", "Seulement sur la couche du milieu", "Sur la couche du bas"], answer: 3, why: "Le lourd en bas garde le chargement stable et protège les cartons plus légers." },
            { objective: "O4", q: "Entraînement : 30 cartons de 20 lb sur une palette de 40 lb. Quel est le poids total ?", options: ["640 lb", "600 lb", "540 lb", "60 lb"], answer: 0, why: "30 x 20 = 600 lb, plus la palette de 40 lb = 640 lb." }
          ]
        },
        {
          title: "Se faire embaucher et évoluer",
          objectives: ["O1", "O5"],
          minutes: 5,
          goal: "Écrire un plan pour être embauché, avec des employeurs, un objectif de certification et des lignes de CV honnêtes.",
          text: [
            "Où chercher : les sites carrières des grandes enseignes et des transporteurs, les sites d'emploi locaux, les agences d'intérim et votre American Job Center local (un bureau public et gratuit pour l'emploi aux États-Unis), qui peut aussi, dans certains cas, aider à payer des formations et des certifications. Beaucoup d'entrepôts embauchent des personnes avec un casier judiciaire ; demandez au centre quels employeurs offrent une seconde chance.",
            "Ce que veulent les employeurs : la ponctualité, un comptage soigneux, des habitudes sûres et un rythme régulier. Les entrepôts mesurent souvent votre cadence, par exemple le nombre de prélèvements à l'heure. Atteignez-la en travaillant malin (ordre de parcours, scans soigneux) et jamais en négligeant la sécurité.",
            "Adaptez votre CV au poste. Utilisez des verbes d'action et des exemples réels : \"J'ai compté et vérifié des livraisons avec les listes de colisage\" ou \"Formation en sécurité et logistique d'entrepôt terminée (Koach Learn), 2026\". Anciens militaires : les tâches d'approvisionnement, de parc automobile et de logistique comptent, alors décrivez-les avec des mots de tous les jours.",
            "Prévoyez votre évolution. Une certification comme le CLA du MSSC, puis le CLT, et la formation de cariste de l'employeur peuvent mener à des postes mieux payés, comme chef d'équipe, gestion des stocks ou coordinateur logistique."
          ],
          steps: ["Listez trois employeurs ou programmes près de chez vous, dont votre American Job Center.", "Choisissez un objectif de certification (par exemple le CLA du MSSC) et une date.", "Écrivez deux lignes de CV honnêtes tirées de ce cours ou d'un ancien travail.", "Entraînez-vous à une réponse de 30 secondes : \"Comment restez-vous précis et en sécurité à un rythme rapide ?\""],
          words: [["Cadence", "la quantité de travail faite en un temps donné, par exemple les prélèvements à l'heure."], ["American Job Center", "un bureau public et gratuit qui aide les gens à trouver un emploi et une formation."], ["Employeur de la seconde chance", "une entreprise qui embauche des personnes ayant un casier judiciaire."]],
          slides: [
            { title: "Où chercher", bullets: ["Sites carrières des entreprises et sites d'emploi", "Agences d'intérim", "Votre American Job Center local"] },
            { title: "Ce que veulent les employeurs", bullets: ["Ponctuel, précis, prudent", "Atteindre la cadence en travaillant malin", "Jamais en négligeant la sécurité"] },
            { title: "Votre CV", bullets: ["Verbes d'action et exemples réels", "Honnête sur les formations et certifications", "Anciens militaires : traduisez vos tâches logistiques"] },
            { title: "Évoluer", bullets: ["CLA du MSSC, puis CLT", "Formation de cariste de l'employeur", "Chef d'équipe, gestion des stocks, coordinateur"] }
          ],
          sources: [AJC, MSSC_CLT, BLS_MOVERS],
          tryIt: "Écrivez votre plan pour être embauché : trois employeurs ou programmes près de chez vous, votre objectif de certification et sa date, deux lignes de CV honnêtes, et votre réponse de 30 secondes à \"Comment restez-vous précis et en sécurité à un rythme rapide ?\" Lisez la réponse à voix haute.",
          youCanNow: "écrire un plan pour être embauché en entrepôt, avec un objectif de certification et des lignes de CV honnêtes.",
          quickCheck: [
            { objective: "O5", q: "Vous êtes en retard sur votre cadence de prélèvements à l'heure. Quelle est la bonne façon de rattraper ?", options: ["Ne plus scanner pour aller plus vite", "Courir dans les allées", "Prélever dans l'ordre de parcours et scanner avec soin", "Grimper sur les racks au lieu de prendre une échelle"], answer: 2, why: "Travailler malin fait gagner du temps ; les raccourcis dangereux causent des blessures et des erreurs." },
            { objective: "O1", q: "Quelle ligne de CV est honnête et solide ?", options: ["\"Certifié CLT du MSSC\" (avant de l'avoir réussi)", "\"Travailleur acharné\"", "\"Certifié cariste\" (sans évaluation de l'employeur)", "\"J'ai compté et vérifié des livraisons avec les listes de colisage\""], answer: 3, why: "Elle utilise un verbe d'action et une tâche réelle, et n'affirme rien que vous n'avez pas." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Travailler en sécurité et se faire embaucher",
        questions: [
          { objective: "O5", q: "Un carton est trop lourd pour le soulever seul. Que faites-vous ?", options: ["Vous le soulevez vite avant d'avoir mal", "Vous utilisez un chariot ou un transpalette, ou vous demandez à le porter à plusieurs", "Vous le traînez le dos courbé", "Vous le laissez dans l'allée"], answer: 1, why: "Utilisez un engin ou portez à plusieurs pour les charges lourdes afin d'éviter les blessures au dos." },
          { objective: "O5", q: "Vous voyez une flaque dans une allée. Quelle est la bonne action ?", options: ["La contourner sans rien dire", "Attendre que quelqu'un d'autre la voie", "Éloigner les gens et la signaler tout de suite", "La couvrir avec un carton"], answer: 2, why: "Signalez les dangers tout de suite pour qu'ils soient nettoyés avant que quelqu'un glisse." },
          { objective: "O4", q: "À quoi sert le croisement des couches sur une palette ?", options: ["Il aide la pile à tenir", "Il la rend plus lourde", "Il cache les étiquettes", "Il permet aux cartons de dépasser du bord"], answer: 0, why: "Les couches qui se chevauchent lient la pile pour qu'elle ne se sépare pas." },
          { objective: "O4", q: "Quelle palette est prête à partir ?", options: ["Des cartons qui dépassent du bord", "Des cartons légers en bas", "Non filmée, en vrac", "Cartons lourds en bas, couches régulières, filmée, étiquettes vers l'extérieur"], answer: 3, why: "Elle respecte toutes les règles : lourd en bas, régulière, filmée et étiquetée." },
          { objective: "O1", q: "Quel bureau peut vous aider gratuitement à trouver un emploi et une formation en entrepôt ?", options: ["Votre American Job Center local", "Une billetterie", "Le DMV (le service des permis de conduire)", "Une banque"], answer: 0, why: "Les American Job Centers sont des bureaux publics et gratuits pour l'emploi et la formation." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Métiers de l'entrepôt et de la logistique",
    questions: [
      { objective: "O1", q: "Quel poste prépare les commandes des clients en prélevant les articles dans les rayonnages ?", options: ["Agent de réception", "Préparateur de commandes", "Mécanicien poids lourds", "Agent de sécurité"], answer: 1, why: "Les préparateurs prélèvent les articles dans le stock pour remplir les commandes." },
      { objective: "O1", q: "Quelle certification devez-vous réussir avant de passer le CLT du MSSC ?", options: ["Un CDL (permis de conduire commercial américain)", "La carte OSHA de 30 heures", "Le Certified Logistics Associate (CLA) du MSSC", "Une carte de cariste"], answer: 2, why: "Le MSSC exige le CLA avant l'évaluation du CLT." },
      { objective: "O1", q: "Où vérifier le salaire et les perspectives des emplois en entrepôt ?", options: ["L'Occupational Outlook Handbook sur bls.gov", "Une publication sur les réseaux sociaux", "L'avis d'un ami", "Un jeu vidéo"], answer: 0, why: "Le guide du BLS est la source officielle pour le salaire et les perspectives." },
      { objective: "O2", q: "Quel est le bon ordre du trajet des marchandises ?", options: ["Expédition, préparation, réception", "Emballage, réception, rangement", "Préparation, réception, stockage", "Réception, rangement, stockage, préparation, emballage, expédition"], answer: 3, why: "Les marchandises entrent, sont stockées, puis préparées, emballées et expédiées." },
      { objective: "O2", q: "Entraînement : quel est le premier emplacement dans l'ordre de parcours ?", options: ["B-02-01-A", "A-07-04-C", "A-02-06-B", "B-01-01-A"], answer: 2, why: "Triez par zone, puis par allée : zone A allée 02 vient avant A allée 07 et avant toute la zone B." },
      { objective: "O2", q: "Pourquoi scanner l'emplacement et l'article quand vous prélevez ?", options: ["Pour que le système sache exactement ce qui a bougé", "Pour vous ralentir", "Pour voir l'heure", "C'est juste pour s'amuser"], answer: 0, why: "Le scan garde justes les registres du système de gestion d'entrepôt." },
      { objective: "O2", q: "L'emplacement de votre SKU est vide. Que faites-vous ?", options: ["Vous prenez n'importe quel article à côté", "Vous le signalez à votre chef d'équipe", "Vous marquez la commande comme terminée", "Vous laissez la ligne vide sans rien dire"], answer: 1, why: "Un emplacement vide se signale pour retrouver le stock et corriger les registres." },
      { objective: "O3", q: "Qu'est-ce qu'un connaissement ?", options: ["Une liste de courses", "Un panneau de sécurité", "Une fiche de paie", "Le document de transport que vous signez pour une livraison"], answer: 3, why: "Le connaissement est le document de transport du transporteur." },
      { objective: "O3", q: "La liste indique 15 caisses ; 17 sont arrivées. Qu'est-ce que c'est ?", options: ["Un excédent", "Un manquant", "Un dommage", "Un rangement"], answer: 0, why: "Plus que ce qu'indiquent les documents, c'est un excédent." },
      { objective: "O3", q: "Quelles trois choses vérifiez-vous sur chaque ligne à la réception ?", options: ["Couleur, taille et odeur", "Bon SKU, bonne quantité, bon état", "Prix, taxe et pourboire", "Nom du chauffeur, couleur du camion, heure"], answer: 1, why: "La réception vérifie l'article, la quantité et l'état." },
      { objective: "O3", q: "Qu'est-ce qu'un inventaire tournant ?", options: ["Compter des vélos", "Compter tout l'entrepôt une seule fois par an", "Compter quelques emplacements à la fois pour garder des registres justes", "Compter vos heures"], answer: 2, why: "L'inventaire tournant vérifie quelques emplacements chaque jour pour que les registres restent justes." },
      { objective: "O4", q: "Que vérifiez-vous en premier quand vous montez une palette ?", options: ["La couleur de l'étiquette", "Que la palette n'a pas de planches cassées ni de clous qui dépassent", "La météo", "La radio du camion"], answer: 1, why: "Une palette abîmée peut casser et faire tomber le chargement." },
      { objective: "O4", q: "Entraînement : 10 cartons de 30 lb et 10 cartons de 15 lb sur une palette de 40 lb. Total ?", options: ["450 lb", "300 lb", "490 lb", "45 lb"], answer: 2, why: "300 + 150 + 40 = 490 lb." },
      { objective: "O4", q: "Pourquoi les cartons ne doivent-ils pas dépasser du bord de la palette ?", options: ["Le débord écrase les cartons et peut rendre le chargement instable", "C'est juste moins joli", "Cela rend le chargement plus léger", "C'est plus rapide à filmer"], answer: 0, why: "Les cartons qui dépassent perdent leur appui, s'écrasent et peuvent faire tomber le chargement." },
      { objective: "O4", q: "Comment faut-il poser le film étirable ?", options: ["Seulement autour de la couche du haut", "Lâche, pour qu'il s'enlève facilement", "Par-dessus les étiquettes pour qu'on ne puisse pas les lire", "Serré, du bas vers le haut, et autour de la palette aussi"], answer: 3, why: "Filmer serré en prenant la palette maintient tout le chargement." },
      { objective: "O5", q: "D'après l'OSHA, quelles sont les blessures les plus fréquentes en entrepôt ?", options: ["Les coupures de papier", "Les lésions dues au port de charges et les heurts par des chariots élévateurs", "Les coups de soleil", "La fatigue des yeux devant les écrans"], answer: 1, why: "L'OSHA cite les lésions dues au port de charges et les heurts par des engins motorisés comme les plus fréquentes." },
      { objective: "O5", q: "Comment soulever un carton posé au sol ?", options: ["Approchez-vous, pliez les genoux, gardez le dos droit et la charge près de vous", "Penchez-vous en avant, jambes tendues", "Tournez-vous en soulevant", "Tenez-le loin du corps"], answer: 0, why: "Utiliser les jambes et garder la charge près de soi protège le dos." },
      { objective: "O5", q: "Il fait très chaud dans l'entrepôt et vous avez des vertiges. Que faites-vous ?", options: ["Vous continuez pour atteindre votre cadence", "Vous sautez votre pause", "Vous prévenez quelqu'un, buvez de l'eau et vous reposez dans un endroit frais", "Vous rentrez chez vous sans prévenir personne"], answer: 2, why: "Les vertiges peuvent être une maladie liée à la chaleur ; prévenez, rafraîchissez-vous et buvez de l'eau." },
      { objective: "O5", q: "Quelle est la façon sûre de tenir votre cadence ?", options: ["Ne pas scanner", "Monter sur un transpalette", "Grimper aux racks pour atteindre les articles", "Travailler malin : ordre de parcours, scans soigneux, aucun raccourci dangereux"], answer: 3, why: "Les méthodes malines font gagner du temps sans risquer de blessures ni d'erreurs." },
      { objective: "O1", q: "Qu'est-ce qui est vrai à propos de la carte Outreach de 10 heures de l'OSHA ?", options: ["C'est une formation facultative et l'OSHA dit que ce n'est pas une certification", "Elle permet de conduire n'importe quel chariot élévateur", "C'est la même chose que le CLT du MSSC", "La loi fédérale l'exige pour tout emploi en entrepôt"], answer: 0, why: "L'OSHA dit que les cours Outreach sont facultatifs et qu'aucun n'est une certification." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 4, 8, 9, 11, 12, 15, 16] },
  rubric: {
    mastery: "Atteint ou Dépassé sur chaque ligne. Si une ligne est Pas encore, corrigez cette partie et vérifiez à nouveau.",
    criteria: [
      { name: "Rapport de réception", objective: "O3", notYet: "Une quantité est fausse, ou un manquant, un excédent ou un dommage n'est pas noté.", meets: "Chaque ligne montre le prévu et le reçu, et chaque problème est noté.", exceeds: "Indique aussi quoi faire avant de signer le connaissement et qui prévenir." },
      { name: "Liste de préparation dans l'ordre de parcours", objective: "O2", notYet: "Les emplacements sont dans le désordre ou un code est mal lu.", meets: "Tous les prélèvements sont triés par zone, allée, rack et niveau, et chaque code est bien lu.", exceeds: "Explique quoi faire si un article ne correspond pas ou si un emplacement est vide." },
      { name: "Plan de chargement de palette", objective: "O4", notYet: "Cartons lourds en haut, débord, ou poids total faux ou au-dessus de la limite.", meets: "Cartons lourds en bas, couches régulières et croisées, total juste sous la limite, filmée et étiquetée.", exceeds: "Ajoute la vérification de la palette et les étapes de sécurité de la remorque." },
      { name: "Plan pour être embauché", objective: "O1", notYet: "Aucun employeur, aucun objectif de certification, ou une ligne de CV qui affirme quelque chose de faux.", meets: "Trois employeurs ou programmes, une vraie certification avec l'organisme qui la délivre et une date, deux lignes de CV honnêtes.", exceeds: "Comprend une réponse de 30 secondes travaillée sur la précision et la sécurité." },
      { name: "Travail en sécurité", objective: "O5", notYet: "Le plan propose des raccourcis dangereux pour atteindre une cadence.", meets: "La réponse de 30 secondes et le plan mettent la sécurité en premier, avec le port de charges sûr et le signalement des dangers.", exceeds: "Nomme un danger précis de la page de l'OSHA sur les entrepôts et la façon de le prévenir." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et un dossier de démarrage conforme à la grille",
      "Apprenants qui postulent à au moins trois emplois en entrepôt en 30 jours (questionnaire de suivi)",
      "Apprenants embauchés à un poste en entrepôt ou en logistique en 90 jours (rapports des partenaires et de suivi)",
      "Apprenants qui s'inscrivent au CLA du MSSC ou commencent la formation de cariste de l'employeur"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Papier, crayon et calculatrice (celle du téléphone suffit)",
      "Un téléphone ou un ordinateur avec internet pour la recherche d'emploi et les pages officielles",
      "Facultatif : quelques cartons vides ou des notes autocollantes pour s'entraîner aux couches de palette et aux trajets de préparation",
      "Environ 60 minutes en tout"
    ],
    facilitatorNotes: [
      "Installez un mini-entrepôt avec des étagères étiquetées (notes autocollantes comme A-01-01-A) et organisez une course de préparation chronométrée, notée d'abord sur la précision.",
      "Utilisez une liste de colisage d'entraînement imprimée et un carton d'articles variés pour l'activité de réception.",
      "Faites pratiquer le port de charges uniquement avec des cartons vides ou légers.",
      "Invitez un superviseur d'entrepôt local ou un agent de l'American Job Center à parler d'embauche, de cadence et d'employeurs de la seconde chance.",
      "Évaluez le dossier de démarrage avec la grille et revoyez une ligne Pas encore à la fois."
    ]
  }
};
