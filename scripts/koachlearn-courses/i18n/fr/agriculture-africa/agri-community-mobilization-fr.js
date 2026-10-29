"use strict";

// Koach Learn course (French translation of agriculture-africa/agri-community-mobilization.js). See scripts/koachlearn-courses/README.md, "Translations".

const FAO_MECH = { name: "FAO : mécanisation agricole durable : ce que fait la FAO (services de location, appui aux petits exploitants)", url: "https://www.fao.org/sustainable-agricultural-mechanization/overview/what-fao-does/en/" };
const KEPHIS_SEED = { name: "KEPHIS (Kenya) : services de certification des semences et de protection des obtentions végétales", url: "https://www.kephis.go.ke/seed-certification-services" };
const NASC_FAKE = { name: "Voice of Nigeria : le Conseil national des semences agricoles (NASC) met en garde les agriculteurs contre les fausses semences (acheter chez des agro-dealers enregistrés ; étiquette de certification)", url: "https://von.gov.ng/nasc-cautions-farmers-over-fake-seeds/" };
const GH_ACT803 = { name: "UNEP LEAP : loi ghanéenne de 2010 sur les plantes et les engrais (Act 803) : enregistrement des semences et des engrais (PPRSD)", url: "https://leap.unep.org/en/countries/gh/national-legislation/plants-and-fertilizer-act-2010-no-803" };
const FAO_PEST_REG = { name: "Boîte à outils de la FAO pour l'homologation des pesticides : registres nationaux des pesticides en Afrique", url: "https://www.fao.org/pesticide-registration-toolkit/information-sources/registrations-elsewhere/africa/en" };
const ICA = { name: "Alliance coopérative internationale : l'identité, les valeurs et les principes coopératifs", url: "https://ica.coop/en/cooperatives/cooperative-identity" };

module.exports = {
  id: "agri-community-mobilization-fr",
  lang: "fr",
  translationOf: "agri-community-mobilization",
  category: "Agriculture (Africa)",
  name: "Mobilisation communautaire : mettre en commun les machines et négocier les intrants",
  skills: "Cartographier les besoins de la communauté, Convoquer et animer une première réunion, Convenir d'objectifs et de règles, Mettre en commun pour les machines et la location de tracteurs, Acheter en gros et négocier des intrants authentiques, Garder la confiance avec des registres ouverts",
  outcome: "rassembler les agriculteurs de votre communauté autour d'un besoin commun, convenir d'objectifs et de règles justes, et faire un plan écrit pour acheter des semences et des engrais en gros ou partager un tracteur ou une machine, avec des registres ouverts qui gardent la confiance de tous.",
  about: [
    "Un agriculteur seul paie le prix fort pour un sac d'engrais et attend des semaines pour avoir un tracteur. Vingt agriculteurs ensemble peuvent négocier un meilleur prix, vérifier que les intrants sont authentiques, et réserver ou partager une machine au bon moment. Ce cours s'adresse aux paysans relais, aux responsables de groupements, aux agents de vulgarisation, aux groupements de jeunes et de femmes, et à toute personne prête à organiser ses voisins au Kenya, au Nigeria, au Ghana, au Burkina Faso et partout en Afrique.",
    "Vous allez cartographier les besoins de votre communauté, convoquer et animer une première réunion, convenir d'un objectif commun et de règles simples, prévoir une caisse commune pour une machine ou un service de location de tracteur, acheter les intrants en gros et négocier avec les fournisseurs, éviter les fausses semences et les faux engrais, gérer les conflits, tenir des registres ouverts, et vous assurer que les femmes et les jeunes ont vraiment leur mot à dire.",
    "Il s'appuie sur le cours Coopératives agricoles et accès au marché, qui traite de l'enregistrement officiel, des statuts et de la vente en groupe, donc il ne les répète pas. Chaque leçon dure environ cinq minutes et se termine par une tâche \"Essayez maintenant\" dans votre propre communauté. Les montants sont donnés à titre d'exemple."
  ],
  finalTask: "Faites un plan écrit pour votre communauté : soit un plan d'achat groupé d'intrants (membres, quantités, avances, trois devis de fournisseurs, comment vous vérifierez que les intrants sont authentiques, livraison et partage), soit un accord de partage de machines (la machine ou le service de location, le calendrier de réservation, les tarifs, la caisse d'entretien, le conducteur, et ce qui se passe en cas de panne), avec les registres que vous montrerez aux membres et la façon dont les femmes et les jeunes participent.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Paysans relais, responsables de groupements et de villages, agents de vulgarisation, et membres de groupements de femmes et de jeunes au Kenya, au Nigeria, au Ghana, en Afrique de l'Ouest francophone et partout en Afrique. La plupart cultivent de petites parcelles de maïs, de manioc, de riz, de sorgho, de haricots, d'arachides ou de légumes.",
    startingPoint: "Connaissent leurs voisins et les problèmes qu'ils partagent, comme le labour tardif, l'engrais cher et les fausses semences. Certains font partie de groupes informels ou de tontines. Peu ont déjà animé une réunion de planification, collecté de l'argent pour un achat commun ou négocié avec un fournisseur.",
    gap: "Les agriculteurs perdent du rendement et de l'argent quand le labour arrive tard, quand les intrants coûtent trop cher ou se révèlent faux, et quand les groupes éclatent à cause de l'argent. Les responsables doivent cartographier les besoins, organiser une réunion juste, convenir de règles, mener un achat groupé ou un plan de partage de machines, et garder les registres ouverts pour que la confiance dure, en incluant les femmes et les jeunes qui sont souvent laissés de côté.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; beaucoup d'apprenants parlent la langue du cours comme deuxième langue, et les réunions peuvent se tenir en langues locales",
      "Appareils : un téléphone simple pour les appels, les SMS et le mobile money ; des registres en papier",
      "Argent : de petites sommes réunies auprès de nombreux membres ; aucune perte ne peut être cachée",
      "Règles : les règles et registres des semences, engrais et pesticides varient selon les pays et changent ; les apprenants vérifient auprès de leurs organismes nationaux",
      "Temps : les réunions doivent tenir entre les travaux des champs, les marchés et les tâches du foyer, surtout pour les femmes"
    ],
    prerequisites: "Aucun. Utile : Coopératives agricoles et accès au marché, pour un enregistrement officiel plus tard."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "Dans votre village ou votre groupement", action: "cartographier les besoins agricoles communs de la communauté et classer les trois premiers", standard: "après avoir interrogé au moins dix ménages, y compris des femmes et des jeunes agriculteurs" },
    { id: "O2", condition: "À partir du premier besoin commun", action: "convoquer et animer une première réunion qui fixe un objectif commun et des règles écrites", standard: "avec un ordre du jour, un compte rendu, un responsable nommé pour chaque tâche et des règles sur l'argent, les décisions et le départ" },
    { id: "O3", condition: "Face à un besoin de labour, de battage ou d'une autre machine", action: "rédiger un plan de partage de machines ou de location de tracteur", standard: "qui traite de louer ou acheter, d'un calendrier de réservation juste, des tarifs, d'une caisse d'entretien, du conducteur et de ce qui se passe en cas de panne" },
    { id: "O4", condition: "À partir des commandes de semences et d'engrais des membres", action: "préparer un achat groupé, comparer au moins trois devis de fournisseurs et négocier", standard: "avec les avances notées, les intrants vérifiés comme authentiques et homologués, et des reçus au nom du groupement" },
    { id: "O5", condition: "Pendant que le groupement gère l'argent et les décisions", action: "tenir des registres ouverts, régler les désaccords selon les étapes convenues et donner un vrai rôle aux femmes et aux jeunes", standard: "pour que chaque membre puisse voir où est allé chaque paiement, et que des femmes et des jeunes aient des tâches ou des postes de responsabilité" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Rassembler la communauté",
      lessons: [
        {
          title: "Cartographier les besoins de votre communauté",
          objectives: ["O1"],
          minutes: 5,
          goal: "Interroger au moins dix ménages sur leurs problèmes agricoles et classer les trois premiers besoins communs.",
          text: [
            "Les gens rejoignent un groupe quand il règle un problème qu'ils ressentent. Alors, avant de convoquer une réunion, découvrez ce dont vos voisins ont vraiment besoin. Ne supposez rien : le responsable peut penser qu'il faut un tracteur alors que la plupart des agriculteurs parlent des fausses semences ou du prix de l'engrais.",
            "Rendez visite ou téléphonez à au moins dix ménages. Posez les mêmes quelques questions : Quelles sont vos principales cultures ou vos animaux ? Qu'est-ce qui a freiné votre dernière récolte ? Combien payez-vous le labour, les semences et l'engrais, et quand les obtenez-vous ? Que feriez-vous avec vos voisins ? Interrogez aussi les femmes et les jeunes agriculteurs, pas seulement le chef de ménage ; leurs problèmes peuvent être différents, comme ne pas avoir de titre foncier pour obtenir un crédit, ou être servis en dernier par le tracteur.",
            "Écrivez les réponses sur une feuille : une ligne par ménage, une colonne par problème. Comptez combien de ménages ont cité chaque problème. Les trois premiers sont les besoins communs de votre communauté. Vous pouvez aussi dessiner un plan simple du village avec les champs, les routes, les boutiques d'intrants, et l'endroit où se trouve un tracteur ou un moulin. Un téléphone peut vous aider à compter et à trier les réponses."
          ],
          steps: ["Écrivez quatre ou cinq questions simples.", "Interrogez au moins dix ménages, y compris des femmes et des jeunes agriculteurs.", "Notez les réponses dans un tableau : une ligne par ménage.", "Comptez combien ont cité chaque problème.", "Classez les trois premiers besoins communs."],
          words: [["Mobilisation", "rassembler les gens pour agir sur un besoin commun."], ["Carte des besoins", "un relevé simple des problèmes que partagent les ménages et de l'endroit où se trouvent les ressources."], ["Ménage", "les personnes qui vivent et cultivent ensemble et partagent la nourriture et l'argent."]],
          slides: [
            { title: "Partez du besoin", bullets: ["On rejoint un groupe pour régler un problème qu'on ressent", "Ne supposez rien : demandez d'abord", "L'idée du responsable n'est pas toujours le premier besoin"] },
            { title: "Interrogez dix ménages ou plus", bullets: ["Qu'est-ce qui a freiné votre dernière récolte ?", "Combien payez-vous labour, semences, engrais ?", "Interrogez aussi les femmes et les jeunes"] },
            { title: "Comptez et classez", bullets: ["Une ligne par ménage", "Comptez chaque problème", "Les trois premiers = besoins communs"] }
          ],
          tryIt: "Posez vos questions à au moins dix ménages de votre communauté. Mettez les réponses dans un tableau, comptez chaque problème et notez les trois premiers besoins communs.",
          youCanNow: "cartographier les besoins agricoles de votre communauté et classer les trois premiers problèmes communs.",
          quickCheck: [
            { objective: "O1", q: "Pourquoi interroger les ménages avant de convoquer une réunion ?", options: ["Pour collecter de l'argent tôt", "Pour choisir le responsable", "Pour leur vendre des intrants", "Pour savoir quels problèmes les gens partagent vraiment"], answer: 3, why: "Un groupe dure quand il règle un besoin que ressentent la plupart des membres, pas seulement l'idée du responsable." },
            { objective: "O1", q: "Qui faut-il inclure quand on demande les besoins ?", options: ["Les femmes et les jeunes agriculteurs, en plus des chefs de ménage", "Seulement les hommes les plus âgés", "Seulement ceux qui ont un tracteur", "Seulement ceux qui savent lire"], answer: 0, why: "Les femmes et les jeunes peuvent avoir des problèmes différents ; les écarter donne une image fausse." }
          ]
        },
        {
          title: "Convoquer et animer une première réunion",
          objectives: ["O2"],
          minutes: 5,
          goal: "Animer une première réunion avec un ordre du jour qui se termine par des tâches claires et un compte rendu.",
          text: [
            "Choisissez une heure et un lieu qui conviennent au plus grand nombre : après les travaux des champs, pas le jour du marché, dans un endroit que les femmes et les jeunes peuvent facilement rejoindre, comme une école, une église, une mosquée ou sous un arbre connu. Invitez les gens en personne, par téléphone, par SMS ou de bouche à oreille, et par l'intermédiaire de personnes respectées comme le chef, un responsable religieux ou l'agent de vulgarisation. Donnez le but en une phrase : « Parlons de comment avoir de l'engrais moins cher cette saison. »",
            "Prévoyez un ordre du jour de quatre ou cinq points et gardez la réunion courte : accueil et but ; ce qu'a montré la carte des besoins ; idées de ce qu'on peut faire ensemble ; accord sur une première étape ; qui fait quoi et pour quand. Choisissez quelqu'un pour présider et quelqu'un pour écrire le compte rendu. Laissez chacun parler, et interrogez directement les personnes discrètes.",
            "Terminez par des décisions, pas seulement par des paroles. Écrivez chaque tâche, la personne responsable et la date. Lisez le compte rendu à voix haute et fixez la prochaine réunion. Exemple : un groupement de producteurs de sorgho au Burkina Faso a décidé lors de sa première réunion de collecter les commandes d'engrais en deux semaines, avec deux membres chargés de la liste, dont une jeune femme."
          ],
          steps: ["Choisissez une heure et un lieu qui conviennent au plus grand nombre, femmes et jeunes compris.", "Invitez en personne et par des personnes respectées, avec un but en une phrase.", "Préparez un court ordre du jour : but, besoins trouvés, idées, première étape, tâches.", "Choisissez un président de séance et un secrétaire ; laissez chacun parler.", "Terminez par des tâches, des noms et des dates ; lisez le compte rendu à voix haute."],
          words: [["Ordre du jour", "la liste des points qu'une réunion va traiter, dans l'ordre."], ["Compte rendu", "le relevé écrit de ce qu'une réunion a décidé et de qui fera quoi."], ["Président de séance", "la personne qui dirige la réunion et veille au temps."]],
          slides: [
            { title: "Heure, lieu, invitation", bullets: ["Après les travaux des champs, pas le jour du marché", "Un lieu que femmes et jeunes peuvent rejoindre", "Invitez en personne ; but en une phrase"] },
            { title: "Un ordre du jour court", bullets: ["But ; ce qu'a montré la carte des besoins", "Idées ; accord sur une première étape", "Qui fait quoi, pour quand"] },
            { title: "Terminez par des décisions", bullets: ["Tâches, noms et dates dans le compte rendu", "Lisez le compte rendu à voix haute", "Fixez la prochaine réunion"] }
          ],
          tryIt: "Écrivez l'invitation (une phrase de but, l'heure et le lieu) et un ordre du jour en cinq points pour votre première réunion. Si vous le pouvez, tenez-la, et écrivez un compte rendu avec au moins deux tâches, des noms et des dates.",
          youCanNow: "convoquer et animer une courte première réunion qui se termine par des tâches, des noms, des dates et un compte rendu.",
          quickCheck: [
            { objective: "O2", q: "Quelle heure de réunion convient en général le mieux aux agriculteurs ?", options: ["Le jour du marché à midi", "Après les travaux des champs, dans un lieu que la plupart peuvent rejoindre", "Très tôt, loin du village", "Quand le responsable est libre"], answer: 1, why: "Une heure et un lieu pratiques permettent à la plupart des membres, femmes et jeunes compris, de venir." },
            { objective: "O2", q: "Comment doit se terminer une première réunion ?", options: ["Par un long discours", "Par tout le monde qui paie tout de suite", "Par des tâches, des noms et des dates écrits dans le compte rendu", "Sans aucune décision"], answer: 2, why: "Des tâches claires avec des noms et des dates transforment la discussion en action." }
          ]
        },
        {
          title: "Objectifs communs, règles justes et place pour tous",
          objectives: ["O2", "O5"],
          minutes: 6,
          goal: "Écrire un objectif commun et cinq règles simples acceptées par votre groupement.",
          text: [
            "Un objectif commun est précis et a une date : « D'ici le 1er mars, acheter ensemble 200 sacs d'engrais à un prix plus bas que celui que les membres paient seuls. » ou « Cette saison, le champ de chaque membre est labouré dans les deux semaines après les premières pluies. » Un objectif clair montre aux membres à quoi ressemble la réussite.",
            "Convenez de règles simples avant que l'argent circule : qui peut adhérer et combien il paie ; comment on décide (par exemple un membre, une voix, comme dans les coopératives) ; qui garde l'argent et comment (un compte du groupement en banque ou en mobile money, avec deux personnes pour approuver les paiements) ; ce qui se passe si quelqu'un ne paie pas ou ne livre pas ; et comment un membre peut partir et récupérer son argent. Écrivez les règles et lisez-les à voix haute pour que les membres qui ne savent pas lire les acceptent aussi.",
            "Faites exprès de la place aux femmes et aux jeunes. Tenez les réunions à des heures où ils peuvent venir, laissez les membres adhérer en leur propre nom même sans titre foncier, et donnez-leur de vrais postes comme trésorière, responsable des réservations ou contrôleur des intrants. Les groupements qui les incluent ont souvent plus de membres, plus de confiance et plus de compétences, par exemple des jeunes qui maîtrisent le téléphone et le mobile money. Quand votre groupement sera prêt à s'enregistrer officiellement, voyez le cours Coopératives agricoles et accès au marché."
          ],
          steps: ["Écrivez un objectif avec un chiffre et une date.", "Convenez de règles sur l'adhésion, les décisions, l'argent, le fait de ne pas payer ou ne pas livrer, et le départ.", "Lisez les règles à voix haute et notez l'accord dans le compte rendu.", "Donnez aux femmes et aux jeunes de vrais postes et des heures de réunion qui leur conviennent."],
          words: [["Objectif commun", "un résultat clair que veut tout le groupement, avec un chiffre et une date."], ["Signataire", "une personne autorisée à approuver les paiements du compte du groupement."], ["Inclusion", "faire en sorte que tout le monde, y compris les femmes et les jeunes, puisse adhérer, parler et diriger."]],
          slides: [
            { title: "Un objectif avec un chiffre et une date", bullets: ["« D'ici le 1er mars, acheter ensemble 200 sacs »", "« Chaque champ labouré deux semaines après les pluies »", "Montre à quoi ressemble la réussite"] },
            { title: "Des règles avant que l'argent circule", bullets: ["Adhésion et cotisations ; un membre, une voix", "Compte du groupement ; deux personnes approuvent", "Ne pas payer ou ne pas livrer ; départ et remboursement"] },
            { title: "Inclure les femmes et les jeunes", bullets: ["Des heures et des lieux où ils peuvent venir", "Adhérer en leur nom, sans titre foncier", "De vrais postes : trésorerie, réservations, contrôle des intrants"] }
          ],
          sources: [ICA],
          tryIt: "Écrivez l'objectif commun de votre groupement avec un chiffre et une date, et cinq règles sur l'adhésion, les décisions, l'argent, le fait de ne pas payer ou ne pas livrer, et le départ. Nommez un poste qu'occupera une femme ou un jeune membre.",
          youCanNow: "écrire un objectif commun clair et des règles justes, et donner aux femmes et aux jeunes un vrai rôle dans le groupement.",
          quickCheck: [
            { objective: "O2", q: "Quel est l'objectif commun le plus clair ?", options: ["D'ici le 1er mars, acheter ensemble 200 sacs d'engrais à un prix plus bas", "Aider les agriculteurs", "Améliorer les choses", "Avoir de l'engrais un jour"], answer: 0, why: "Un objectif avec un chiffre et une date montre exactement à quoi ressemble la réussite." },
            { objective: "O5", q: "Une jeune femme n'a pas de titre foncier mais cultive sa propre parcelle. Que doivent permettre les règles du groupement ?", options: ["Elle ne peut pas adhérer", "Elle adhère seulement par son mari", "Elle peut venir mais pas voter", "Elle adhère en son propre nom et peut occuper un poste"], answer: 3, why: "Laisser les femmes et les jeunes adhérer et diriger en leur propre nom donne un groupement plus grand et plus solide." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Rassembler la communauté",
        questions: [
          { objective: "O1", q: "Vous avez interrogé douze ménages. Huit ont cité les fausses semences et trois les tracteurs. Quel est le premier besoin commun ?", options: ["Les tracteurs", "Une nouvelle route", "Les fausses semences", "Une école"], answer: 2, why: "Le problème cité par le plus de ménages est le premier besoin commun." },
          { objective: "O1", q: "Qu'est-ce qu'une carte des besoins ?", options: ["Un relevé simple des problèmes que partagent les ménages et de l'endroit où sont les ressources", "Une carte routière vers la ville", "Une liste des prix des récoltes", "Un relevé bancaire"], answer: 0, why: "Une carte des besoins montre les problèmes communs et les ressources locales comme les boutiques d'intrants et les machines." },
          { objective: "O2", q: "Qui écrit ce que décide la réunion ?", options: ["Le chef", "Le fournisseur", "Personne", "Le secrétaire de séance"], answer: 3, why: "Le secrétaire de séance note les décisions, les tâches, les noms et les dates." },
          { objective: "O2", q: "Quand un groupement doit-il convenir de ses règles sur l'argent ?", options: ["Après un problème", "Avant de collecter le moindre argent", "Seulement à l'enregistrement officiel", "Jamais ; la confiance suffit"], answer: 1, why: "Convenir des règles d'abord évite les disputes une fois l'argent mis en commun." },
          { objective: "O5", q: "Qu'est-ce qui aide les femmes à venir aux réunions du groupement ?", options: ["Des réunions à des heures et dans des lieux qui leur conviennent", "Des réunions seulement le jour du marché", "Des réunions tard le soir et loin", "Des réunions seulement pour les chefs de ménage"], answer: 0, why: "Une heure et un lieu adaptés lèvent un obstacle fréquent pour les femmes." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Mettre en commun, acheter ensemble et garder la confiance",
      lessons: [
        {
          title: "Mettre en commun pour les machines et la location de tracteurs",
          objectives: ["O3"],
          minutes: 6,
          goal: "Rédiger un plan pour partager une machine ou louer un service de tracteur en groupement.",
          text: [
            "Décidez d'abord : louer ou acheter ? Acheter un tracteur coûte très cher et demande du carburant, des réparations, un conducteur formé et assez de travail pour l'occuper. Pour la plupart des petits groupements, louer ensemble un service de tracteur est la première étape : un prestataire de location donne souvent une meilleure date ou un meilleur prix pour beaucoup de champs proches les uns des autres. La FAO soutient les services de location comme moyen pour les petits exploitants d'accéder aux machines. Des applications et des agents de réservation, comme Hello Tractor dans certaines régions du Nigeria et du Kenya, mettent en relation agriculteurs et propriétaires de tracteurs ; renseignez-vous sur ce qui marche dans votre zone. Les petites machines partagées, comme une batteuse, une égreneuse ou un moulin, peuvent être achetées par un groupement.",
            "Faites un calendrier juste. Labourer ou semer en retard fait perdre du rendement, et tout le monde veut la machine les mêmes jours. Convenez de l'ordre à l'avance : par zone et par trajet pour économiser carburant et déplacements, par tirage au sort, ou selon les besoins de semis, et faites tourner qui passe en premier chaque saison. Écrivez le calendrier et partagez-le. Convenez de ce qui se passe si la pluie ou une panne arrête le travail.",
            "Convenez des tarifs et des coûts : ce que paient les membres par acre ou par heure (montants donnés à titre d'exemple : XOF, KES, NGN ou GHS par acre), paiement avant ou le jour même, et une caisse d'entretien séparée pour une machine du groupement, pour que les réparations n'arrêtent pas la saison. Nommez un conducteur formé, tenez un carnet de bord des heures, du carburant, des champs servis et des réparations, et rangez la machine en lieu sûr."
          ],
          steps: ["Décidez de louer ou d'acheter, selon le coût, les compétences et la quantité de travail.", "Listez les champs des membres, leur taille et les dates où ils ont besoin de la machine.", "Convenez d'un calendrier juste (par trajet, tirage au sort ou besoin de semis) et faites tourner la première place.", "Fixez les tarifs, le moment du paiement et une caisse d'entretien.", "Nommez le conducteur et tenez un carnet de bord ; convenez de ce qui se passe en cas de panne."],
          words: [["Service de location", "un prestataire qui amène un tracteur ou une machine et fait le travail contre paiement."], ["Caisse d'entretien", "de l'argent mis de côté sur les tarifs pour payer les réparations et l'entretien."], ["Carnet de bord", "un relevé des heures, du carburant, des champs servis et des réparations d'une machine."]],
          slides: [
            { title: "Louer ou acheter ?", bullets: ["Acheter : gros coût, carburant, réparations, conducteur", "La plupart des petits groupements commencent par louer ensemble", "Petites machines partagées : batteuse, égreneuse, moulin"] },
            { title: "Un calendrier juste", bullets: ["Listez champs, tailles et dates voulues", "Ordre par trajet, tirage au sort ou besoin de semis", "Faites tourner la première place chaque saison"] },
            { title: "Tarifs et entretien", bullets: ["Tarif par acre ou par heure (montants d'exemple)", "Caisse d'entretien pour les réparations", "Conducteur formé ; carnet de bord des heures et du carburant"] }
          ],
          sources: [FAO_MECH],
          tryIt: "Choisissez la machine ou le service de location dont votre groupement a besoin. Listez les champs, les tailles et les dates de cinq membres, puis écrivez un calendrier de réservation, le tarif par acre, une règle de caisse d'entretien si la machine appartient au groupement, et ce qui se passe en cas de panne.",
          youCanNow: "rédiger un plan juste pour louer ou partager un tracteur ou une machine, avec calendrier, tarifs et entretien.",
          quickCheck: [
            { objective: "O3", q: "Pourquoi beaucoup de petits groupements louent-ils un service de tracteur au lieu d'en acheter un ?", options: ["La location est toujours gratuite", "On ne peut pas acheter de tracteur en Afrique", "Acheter demande beaucoup d'argent, des réparations, un conducteur et assez de travail", "Les services de location n'arrivent jamais à l'heure"], answer: 2, why: "Posséder un tracteur entraîne de gros coûts et besoins ; la location en groupe donne accès sans eux." },
            { objective: "O3", q: "À quoi sert une caisse d'entretien ?", options: ["À payer un salaire au président", "À payer les réparations pour que la machine continue de marcher", "À acheter des semences", "À payer les réunions"], answer: 1, why: "Mettre de l'argent de côté pour les réparations évite qu'une panne arrête la saison." }
          ]
        },
        {
          title: "Acheter en gros, négocier et éviter les faux intrants",
          objectives: ["O4"],
          minutes: 6,
          goal: "Préparer un achat groupé de semences ou d'engrais, comparer trois devis et vérifier que les intrants sont authentiques.",
          text: [
            "Collectez d'abord les commandes : le nom de chaque membre, l'intrant, la quantité et l'avance payée, le tout écrit dans un cahier de commandes et relu à voix haute. Faites le total. Une commande importante et sûre vous donne du poids pour négocier. Demandez à au moins trois fournisseurs enregistrés (agro-dealers, distributeurs ou sociétés) un devis écrit : prix par sac, livraison dans votre village, date, marque et variété, et toute remise pour le chargement complet.",
            "Négociez plus que le prix : livraison gratuite ou moins chère, date de livraison avant les semis, démonstration ou formation gratuite, paiement en partie à la livraison, et reçu au nom du groupement. Comparez les devis sur le coût total livré, pas seulement le prix du sac. Ne remettez jamais tout l'argent en espèces à une seule personne ; payez depuis le compte du groupement contre un reçu.",
            "Les fausses semences, les faux engrais et les faux pesticides sont un vrai risque. Achetez uniquement chez des revendeurs enregistrés. Vérifiez les scellés, les étiquettes, les numéros de lot et les dates, et que les sacs ne sont ni déchirés ni recousus. Au Kenya, les semences certifiées sont contrôlées par le KEPHIS (service d'inspection sanitaire des végétaux) ; au Nigeria, le Conseil national des semences agricoles (NASC) demande aux agriculteurs d'acheter chez des agro-dealers enregistrés et de chercher son étiquette de certification ; au Ghana, la Direction des services de protection et de réglementation des végétaux (PPRSD) contrôle les semences et les engrais selon la loi sur les plantes et les engrais. Les pesticides doivent figurer au registre national. Gardez les reçus et un petit échantillon, et signalez les faux produits à l'organisme national."
          ],
          steps: ["Collectez la commande et l'avance de chaque membre dans un cahier de commandes ; relisez-le à voix haute.", "Obtenez des devis écrits d'au moins trois fournisseurs enregistrés.", "Négociez le prix, la livraison, la date, la formation et les conditions de paiement.", "Comparez le coût total livré et choisissez ; payez depuis le compte du groupement contre un reçu.", "À la livraison, vérifiez scellés, étiquettes, numéros de lot et étiquettes de certification ; partagez avec un reçu par membre."],
          words: [["Achat groupé", "acheter ensemble une grande quantité pour obtenir un prix plus bas ou de meilleures conditions."], ["Devis", "le prix et les conditions écrits d'un fournisseur avant l'achat."], ["Agro-dealer", "une boutique ou un commerçant qui vend des semences, des engrais et d'autres intrants agricoles."], ["Semence certifiée", "une semence contrôlée par l'organisme national des semences pour vérifier la variété et la qualité."]],
          slides: [
            { title: "Collectez d'abord les commandes", bullets: ["Nom, intrant, quantité, avance", "Écrit dans un cahier de commandes et relu", "Une grosse commande sûre donne du poids pour négocier"] },
            { title: "Trois devis, puis négociez", bullets: ["Au moins trois fournisseurs enregistrés, par écrit", "Prix, livraison, date, formation, conditions de paiement", "Comparez le coût total livré ; reçu au nom du groupement"] },
            { title: "Évitez les faux intrants", bullets: ["Revendeurs enregistrés seulement ; vérifiez scellés, étiquettes, dates", "Kenya : KEPHIS ; Nigeria : étiquette NASC ; Ghana : PPRSD", "Pesticides au registre national ; signalez les faux"] }
          ],
          sources: [KEPHIS_SEED, NASC_FAKE, GH_ACT803, FAO_PEST_REG],
          tryIt: "Faites une fiche de commandes pour au moins cinq membres (nom, intrant, quantité, avance). Écrivez les questions que vous poserez à trois fournisseurs enregistrés, et une liste de contrôle pour le jour de livraison afin de repérer les fausses semences ou les faux engrais.",
          youCanNow: "préparer un achat groupé d'intrants, négocier avec trois fournisseurs et vérifier que les semences et les engrais sont authentiques.",
          quickCheck: [
            { objective: "O4", q: "Comment comparer les devis des fournisseurs ?", options: ["Seulement sur le prix du sac", "Selon le fournisseur qui est un ami", "Selon celui qui a la plus grande boutique", "Sur le coût total livré, plus la date, la qualité et les conditions"], answer: 3, why: "Un prix bas par sac peut cacher un transport cher ou une livraison tardive ; comparez l'offre complète." },
            { objective: "O4", q: "À la livraison, des sacs de semences semblent recousus et n'ont pas d'étiquette de certification. Que faites-vous ?", options: ["Vous les refusez, gardez des preuves et signalez-les à l'organisme des semences", "Vous les acceptez pour gagner du temps", "Vous les partagez discrètement", "Vous les mélangez avec de bonnes semences"], answer: 0, why: "Des sacs recousus et sans étiquette sont des signes de fausses semences ; refusez, gardez des preuves et signalez." }
          ]
        },
        {
          title: "Garder la confiance : registres ouverts et gestion des conflits",
          objectives: ["O5"],
          minutes: 5,
          goal: "Tenir des registres ouverts de l'argent mis en commun et régler un désaccord selon les étapes convenues.",
          text: [
            "Les groupements échouent rarement par manque d'idées ; ils échouent quand les membres ne savent plus où est passé l'argent et perdent confiance. Rendez chaque shilling, naira, cedi ou franc facile à suivre : un cahier de commandes pour les avances, un reçu pour chaque entrée et sortie d'argent, des paiements depuis un compte du groupement approuvés par deux personnes, et un carnet de bord si vous partagez une machine.",
            "Rendez les registres ouverts. Lisez le point financier à voix haute à chaque réunion : entrées, sorties, solde, et ce qui a été acheté pour qui. Affichez la liste des commandes et le calendrier là où les membres peuvent les voir, ou partagez une photo dans le groupe de discussion. Laissez n'importe quel membre consulter les cahiers. Changez de temps en temps les personnes qui gèrent l'argent.",
            "Il y aura des désaccords : quelqu'un a le tracteur en retard, un sac manque, un membre ne paie pas. Suivez les étapes de vos règles : d'abord parler directement ; puis le comité écoute les deux parties et vérifie les registres ; puis tout le groupement décide ; et si besoin, demandez l'aide d'une personne respectée de l'extérieur, comme l'agent de vulgarisation, le chef ou un agent des coopératives. Décidez sur les faits inscrits dans les registres, pas selon celui qui parle le plus fort. Veillez à ce que les femmes et les jeunes puissent aussi soulever des problèmes, et que leurs plaintes soient entendues."
          ],
          steps: ["Tenez un cahier de commandes, des reçus, un compte du groupement avec deux approbateurs et un carnet de bord.", "Lisez le point financier à voix haute à chaque réunion.", "Affichez les listes et les calendriers là où les membres peuvent les voir.", "Réglez les désaccords selon les étapes convenues, à partir des registres.", "Faites tourner les postes liés à l'argent et assurez-vous que chacun peut soulever un problème."],
          words: [["Transparence", "garder l'argent et les décisions ouverts pour que chaque membre puisse les voir."], ["Médiateur", "une personne respectée et neutre qui aide deux parties à régler un désaccord."], ["Solde", "l'argent qui reste quand on retire les sorties des entrées."]],
          slides: [
            { title: "La confiance suit l'argent", bullets: ["Cahier de commandes et reçus pour tout", "Compte du groupement ; deux approbateurs", "Carnet de bord si vous partagez une machine"] },
            { title: "Des registres ouverts", bullets: ["Lisez à voix haute entrées, sorties et solde", "Affichez listes et calendriers ; partagez une photo", "Tout membre peut voir les cahiers"] },
            { title: "Régler les désaccords", bullets: ["Parler directement ; le comité écoute les deux parties", "Tout le groupement décide ; médiateur extérieur si besoin", "Décider sur les registres ; écouter femmes et jeunes"] }
          ],
          tryIt: "Tâche finale : rédigez votre plan d'achat groupé d'intrants ou votre accord de partage de machines. Mettez-y les membres, les registres que vous tiendrez et lirez à voix haute, les étapes pour régler les désaccords, et les postes qu'occuperont les femmes et les jeunes.",
          youCanNow: "garder l'argent mis en commun ouvert et traçable, régler les désaccords de façon juste et garder la confiance de tous.",
          quickCheck: [
            { objective: "O5", q: "Qu'est-ce qui crée le plus de confiance dans un groupement qui met de l'argent en commun ?", options: ["Le trésorier garde les cahiers chez lui", "Lire à voix haute les entrées, les sorties et le solde à chaque réunion", "Payer les fournisseurs en espèces sans reçu", "Seul le président connaît le solde"], answer: 1, why: "Des registres ouverts permettent à chaque membre de voir où est allé l'argent." },
            { objective: "O5", q: "Une membre dit qu'elle a encore eu le tracteur en dernier. Quelle est la première étape ?", options: ["L'exclure du groupement", "L'ignorer", "Parler directement, puis vérifier le calendrier et les registres", "La rembourser et fermer le groupement"], answer: 2, why: "Suivre les étapes convenues et vérifier les registres permet de régler le problème de façon juste." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Mettre en commun, acheter ensemble et garder la confiance",
        questions: [
          { objective: "O3", q: "Qu'est-ce qu'un service de location ?", options: ["Un compte d'épargne du groupement", "Un prestataire qui amène une machine et fait le travail contre paiement", "Une société de semences", "Un prêt bancaire"], answer: 1, why: "Un service de location permet aux agriculteurs d'utiliser un tracteur ou une machine sans en être propriétaires." },
          { objective: "O3", q: "Tout le monde veut le tracteur les trois mêmes jours. Qu'est-ce qui est juste ?", options: ["Les amis du président passent en premier", "Celui qui crie le plus fort", "Celui qui paie plus en cachette", "Un ordre convenu par trajet, tirage au sort ou besoin de semis, qui tourne chaque saison"], answer: 3, why: "Un ordre convenu et tournant est juste et économise carburant et déplacements." },
          { objective: "O4", q: "Pourquoi collecter les commandes et les avances avant de parler aux fournisseurs ?", options: ["Pour dépenser l'argent tôt", "Pour ne rien avoir à écrire", "Une commande importante et sûre donne du poids pour négocier", "Les fournisseurs demandent les codes PIN des membres"], answer: 2, why: "Les fournisseurs font de meilleures conditions quand ils savent que la commande est réelle et importante." },
          { objective: "O4", q: "Quel est un signe de faux engrais ou de fausses semences ?", options: ["Des sacs déchirés ou recousus, sans étiquette ni marque de certification", "Un sac scellé avec un numéro de lot", "Un reçu d'un revendeur enregistré", "Une étiquette de certification"], answer: 0, why: "Des scellés cassés et l'absence d'étiquette ou de marque de certification sont des signaux d'alerte de faux intrants." },
          { objective: "O5", q: "Qui doit approuver les paiements du compte du groupement ?", options: ["N'importe qui qui le demande", "Le fournisseur", "Une seule personne", "Deux signataires désignés"], answer: 3, why: "Deux approbateurs rendent plus difficile le mauvais usage de l'argent." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Mobilisation communautaire : mettre en commun les machines et négocier les intrants",
    questions: [
      { objective: "O1", q: "Qu'est-ce que la mobilisation communautaire ?", options: ["Partir en ville", "Rassembler les gens pour agir sur un besoin commun", "Acheter un téléphone", "Vendre ses récoltes chacun de son côté"], answer: 1, why: "Mobiliser, c'est organiser les gens autour d'un besoin qu'ils partagent." },
      { objective: "O1", q: "Combien de ménages faut-il interroger au minimum pour cartographier les besoins ?", options: ["Un", "Deux", "Seulement les responsables", "Dix"], answer: 3, why: "Interroger au moins dix ménages donne une image juste des besoins communs." },
      { objective: "O1", q: "Pourquoi inclure les jeunes agriculteurs dans la carte des besoins ?", options: ["Leurs problèmes peuvent être différents, comme l'absence de titre foncier ou être servis en dernier", "Ils ont plus d'argent", "Ils possèdent tous les tracteurs", "Ce n'est pas nécessaire"], answer: 0, why: "Les jeunes et les femmes peuvent rencontrer d'autres obstacles que le groupement doit aussi régler." },
      { objective: "O1", q: "Après avoir compté les réponses, que faites-vous ?", options: ["Vous jetez la feuille", "Vous choisissez l'idée préférée du responsable", "Vous classez les trois premiers besoins communs", "Vous commencez à collecter de l'argent"], answer: 2, why: "Le classement montre quels besoins partagent le plus de ménages." },
      { objective: "O2", q: "Que doit contenir l'invitation à la première réunion ?", options: ["La liste des dettes des membres", "Rien, juste l'heure", "Une demande d'argent", "Un but en une phrase, l'heure et le lieu"], answer: 3, why: "Un but clair dit aux gens pourquoi il vaut la peine de venir." },
      { objective: "O2", q: "Qu'est-ce qu'un ordre du jour ?", options: ["La liste des points qu'une réunion va traiter, dans l'ordre", "Une réservation de tracteur", "Un devis de fournisseur", "Un relevé bancaire"], answer: 0, why: "Un ordre du jour garde la réunion courte et bien menée." },
      { objective: "O2", q: "Quel objectif est le plus clair ?", options: ["Faire mieux cette année", "Aider tout le monde", "Le champ de chaque membre labouré dans les deux semaines après les premières pluies", "Avoir des machines un jour"], answer: 2, why: "Il nomme un résultat et un délai, donc le groupement peut voir s'il a réussi." },
      { objective: "O2", q: "Quelle règle faut-il convenir avant de collecter de l'argent ?", options: ["La couleur des tee-shirts du groupement", "Comment un membre peut partir et récupérer son argent", "Où habite le président", "Quelle radio écouter"], answer: 1, why: "Les règles sur le départ et le remboursement évitent les disputes quand l'argent est mis en commun." },
      { objective: "O3", q: "Quelle est en général la première étape vers les machines pour un petit groupement ?", options: ["Acheter un gros tracteur à crédit", "Construire une usine", "Que chaque membre achète un tracteur", "Louer ensemble un service de tracteur"], answer: 3, why: "La location en groupe donne accès sans les gros coûts de la propriété." },
      { objective: "O3", q: "Que note le carnet de bord d'une machine ?", options: ["Les anniversaires des membres", "Les heures, le carburant, les champs servis et les réparations", "Les prix des récoltes", "La présence aux réunions"], answer: 1, why: "Un carnet de bord montre comment la machine est utilisée et entretenue." },
      { objective: "O3", q: "Labourer en retard entraîne en général :", options: ["De meilleurs rendements", "Aucun changement", "De plus faibles rendements", "De l'engrais gratuit"], answer: 2, why: "Labourer et semer en retard font perdre du rendement, c'est pourquoi un calendrier juste compte." },
      { objective: "O3", q: "Un groupement possède une égreneuse de maïs. D'où vient l'argent des réparations ?", options: ["D'une caisse d'entretien alimentée par les tarifs", "De la poche du président", "Du fournisseur", "De nulle part ; on arrête de l'utiliser"], answer: 0, why: "Une caisse d'entretien alimentée par les tarifs garde la machine en marche." },
      { objective: "O4", q: "Combien de devis écrits de fournisseurs faut-il comparer au minimum ?", options: ["Trois", "Un", "Aucun", "Vingt"], answer: 0, why: "Trois devis montrent un prix juste et vous laissent de la marge pour négocier." },
      { objective: "O4", q: "En plus du prix, que pouvez-vous négocier ?", options: ["Le nom de famille du fournisseur", "Les codes PIN des membres", "La livraison au village avant les semis", "Un prix plus élevé"], answer: 2, why: "La livraison, la date, la formation et les conditions de paiement valent autant que le prix du sac." },
      { objective: "O4", q: "Au Nigeria, quel organisme met en garde contre les fausses semences et utilise une étiquette de certification ?", options: ["KEPHIS", "Le Conseil national des semences agricoles (NASC)", "PPRSD", "KEBS"], answer: 1, why: "Le NASC demande aux agriculteurs d'acheter chez des agro-dealers enregistrés et de chercher son étiquette de certification." },
      { objective: "O4", q: "Comment le groupement doit-il payer le fournisseur ?", options: ["En espèces remises à un membre", "Sur le compte d'un inconnu", "Sans aucun reçu", "Depuis le compte du groupement, contre un reçu au nom du groupement"], answer: 3, why: "Les paiements du groupement avec reçu gardent l'argent traçable." },
      { objective: "O5", q: "Pourquoi lire le point financier à voix haute en réunion ?", options: ["Pour occuper le temps", "Pour mettre des membres mal à l'aise", "Parce que la loi oblige à chanter", "Pour que les membres qui ne savent pas lire voient aussi où est allé l'argent"], answer: 3, why: "Lire à voix haute rend les registres ouverts à chaque membre." },
      { objective: "O5", q: "Qui peut aider si le comité n'arrive pas à régler un différend ?", options: ["Une personne respectée de l'extérieur, comme un agent de vulgarisation ou des coopératives", "Le fournisseur", "Personne", "Le membre qui crie le plus fort"], answer: 0, why: "Un médiateur neutre peut aider les deux parties à s'entendre." },
      { objective: "O5", q: "Sur quoi doivent reposer les décisions dans un différend ?", options: ["Sur l'âge", "Sur celui qui crie le plus", "Sur les faits inscrits dans les registres", "Sur les rumeurs"], answer: 2, why: "Les registres montrent ce qui s'est vraiment passé, donc les décisions sont justes." },
      { objective: "O5", q: "Qu'est-ce qui aide les femmes et les jeunes à participer ?", options: ["Des postes réservés aux chefs de ménage", "De vrais postes comme trésorier ou responsable des réservations", "Des réunions la nuit et loin", "L'adhésion seulement avec un titre foncier"], answer: 1, why: "Donner de vrais rôles aux femmes et aux jeunes crée la confiance et un groupement plus solide." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  // test de départ : ces questions du quiz, faites avant la leçon 1, pour que le quiz montre les progrès de chaque apprenant
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie du plan et réessayez.",
    criteria: [
      { name: "Carte des besoins", objective: "O1", notYet: "Le besoin est une supposition du responsable, ou moins de dix ménages ont été interrogés.", meets: "Au moins dix ménages interrogés, femmes et jeunes compris, avec les trois premiers besoins classés.", exceeds: "Comprend un plan simple du village avec les champs, les routes, les boutiques d'intrants et les machines." },
      { name: "Objectif et règles", objective: "O2", notYet: "Pas d'objectif clair, ou pas de règles écrites sur l'argent et le départ.", meets: "Un objectif avec un chiffre et une date, et des règles écrites sur l'adhésion, les décisions, l'argent, le non-paiement et le départ, acceptées dans le compte rendu.", exceeds: "Les règles ont été lues à voix haute et l'accord des membres est noté nom par nom." },
      { name: "Plan pour les machines", objective: "O3", notYet: "Pas de calendrier ni de tarifs, ou pas de plan en cas de panne.", meets: "Choix entre louer ou acheter, calendrier juste, tarifs, caisse d'entretien ou conditions de location, conducteur et règle en cas de panne.", exceeds: "Un prestataire de location ou le propriétaire de la machine a confirmé le plan, et la première place tourne chaque saison." },
      { name: "Plan d'achat groupé", objective: "O4", notYet: "Pas de cahier de commandes, moins de trois devis, ou pas de contrôle contre les faux intrants.", meets: "Commandes et avances notées, trois devis écrits comparés sur le coût livré, paiement par le compte du groupement et contrôle le jour de livraison pour vérifier l'authenticité des intrants.", exceeds: "Montre ce qui a été obtenu en négociant (prix, livraison, formation) et nomme l'organisme auquel signaler les faux." },
      { name: "Confiance et inclusion", objective: "O5", notYet: "Les registres sont tenus par une seule personne, ou les femmes et les jeunes n'ont aucun rôle.", meets: "Registres ouverts lus à voix haute, étapes convenues pour les désaccords, et postes nommés pour les femmes et les jeunes.", exceeds: "Les postes liés à l'argent tournent, et des femmes et des jeunes occupent au moins un poste de responsabilité." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Groupements qui réalisent un achat groupé d'intrants ou une saison de partage de machines dans les 6 mois (enquête de suivi)",
      "Membres qui déclarent payer moins cher le sac ou être labourés plus tôt que lorsqu'ils étaient seuls",
      "Groupements sans conflit d'argent non réglé après une saison, avec des registres lus à voix haute en réunion",
      "Part des postes du groupement occupés par des femmes et par des jeunes"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone simple pour les appels, les SMS et le mobile money ; un smartphone aide pour photographier les listes",
      "Un cahier pour la carte des besoins, les comptes rendus, le cahier de commandes et le carnet de bord",
      "Des modèles simples de règles et de fiche de commandes (le formateur peut les recopier à partir des leçons)",
      "Des sacs ou étiquettes de semences et d'engrais pour s'entraîner à repérer les faux",
      "Environ 90 minutes en tout, en courtes séances, plus du temps pour visiter les ménages et les fournisseurs"
    ],
    facilitatorNotes: [
      "Donnez le cours avec un vrai village ou un vrai groupement : faites la carte des besoins et la première réunion pour de vrai, entre les séances.",
      "Tenez les séances à des heures où les femmes et les jeunes peuvent venir, et invitez-les à présider ou à écrire le compte rendu.",
      "Apportez de vrais sacs ou étiquettes d'intrants et demandez à l'organisme national des semences ou de protection des végétaux (KEPHIS, NASC, PPRSD ou celui de votre pays) comment les vérifier ; ne citez pas de tarifs ni de prix de mémoire.",
      "Faites un jeu de rôle de négociation avec un fournisseur et d'un différend sur une réservation de tracteur en retard, avec des registres d'exemple.",
      "Notez la tâche finale avec la grille ; quand le groupement est prêt à s'enregistrer officiellement, orientez-le vers le cours Coopératives agricoles et accès au marché."
    ]
  }
};
