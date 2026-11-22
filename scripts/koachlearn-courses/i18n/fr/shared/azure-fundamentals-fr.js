"use strict";

// Koach Learn course, French translation of shared/azure-fundamentals.js. Shape and rules: scripts/koachlearn-courses/README.md ("Translations").
// Azure product names are kept in English (as on the AZ-900 exam), with the French term where Microsoft's French pages use one. Exam facts are the ones the English course checked.

const CERT = { name: "Microsoft Learn : certification Microsoft Certified: Azure Fundamentals", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/" };
const STUDY = { name: "Microsoft Learn : guide d'étude de l'examen AZ-900", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900" };
const FREE = { name: "Microsoft Azure : services gratuits", url: "https://azure.microsoft.com/en-us/pricing/free-services" };
const CALC = { name: "Microsoft Azure : calculatrice de prix", url: "https://azure.microsoft.com/en-us/pricing/calculator/" };

module.exports = {
  id: "azure-fundamentals-fr",
  lang: "fr",
  translationOf: "azure-fundamentals",
  category: "Undeserved Community",
  name: "Les fondamentaux de Microsoft Azure",
  skills: "Expliquer les concepts du cloud, Distinguer IaaS, PaaS et SaaS, Organiser les ressources Azure, Associer les besoins aux principaux services Azure, Estimer et maîtriser les coûts du cloud, Préparer l'examen AZ-900",
  outcome: "préparer une petite installation Azure pour un vrai besoin d'une association : choisir les bons services, expliquer comment ils sont organisés et sécurisés, estimer le coût mensuel avec la calculatrice de prix Azure, et tracer votre propre parcours vers la certification Azure Fundamentals (AZ-900).",
  about: [
    "Microsoft Azure est l'une des plus grandes plateformes cloud au monde, et les compétences cloud ouvrent les portes du support informatique, de l'assistance technique et des métiers du cloud. Ce cours est un point de départ gratuit et simple pour les personnes qui découvrent la tech, celles qui changent de métier et les membres de la communauté qui veulent une première certification reconnue.",
    "Vous apprendrez les notions couvertes par l'examen Microsoft Azure Fundamentals (AZ-900) : les concepts du cloud, les briques et les services principaux d'Azure, et la façon dont Azure est géré, sécurisé et facturé. Vous n'avez pas besoin de compte Azure : les parties pratiques utilisent les outils publics et gratuits de Microsoft, comme la calculatrice de prix et l'évaluation d'entraînement gratuite.",
    "Chaque leçon dure environ cinq minutes et se termine par un exercice « Essayez maintenant ». Un contrôle des connaissances termine chaque chapitre et un quiz de 20 questions termine le cours. Ce cours vous aide à vous préparer ; ce n'est pas l'examen officiel, et les pages de Microsoft ont le dernier mot sur les détails de l'examen. L'examen existe en plusieurs langues ; vérifiez sur la page officielle s'il est proposé en français."
  ],
  finalTask: "Écrivez un plan Azure d'une page pour le site web et le stockage de fichiers d'une petite association : indiquez le type de service (IaaS, PaaS ou SaaS) et les services Azure que vous utiliseriez, la région et le groupe de ressources, comment les gens se connecteront en sécurité, comment vous maîtriserez les coûts (budget, étiquettes), et le coût mensuel estimé par la calculatrice de prix Azure. Puis passez l'évaluation d'entraînement gratuite AZ-900 de Microsoft et notez vos deux domaines les plus faibles à étudier ensuite.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes de communautés mal desservies qui débutent dans le numérique ou changent de métier, et des membres de la communauté qui veulent une première certification reconnue. Beaucoup visent un poste en support informatique, en assistance technique (help desk) ou un premier emploi dans le cloud.",
    startingPoint: "Ils savent utiliser un ordinateur, un navigateur web, l'e-mail et les applications courantes. Ils ont peu ou pas d'expérience des serveurs, des réseaux ou des plateformes cloud, et on ne suppose pas qu'ils ont un compte Azure.",
    gap: "Les premiers emplois en informatique et dans le cloud demandent souvent les bases du cloud et une première certification comme l'AZ-900. Les apprenants ont besoin des idées et des mots de base, et de l'habitude de planifier, sécuriser et chiffrer une petite installation, pour postuler avec assurance et éviter les factures cloud surprises.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; les termes techniques sont expliqués la première fois",
      "Appareils : un ordinateur ou une tablette avec un navigateur web ; la calculatrice de prix est difficile à utiliser sur téléphone",
      "Coût : aucun compte Azure ni carte bancaire n'est nécessaire ; les parties pratiques utilisent les outils publics gratuits de Microsoft",
      "Temps : des leçons de 5 minutes, environ 60 minutes en tout, plus l'évaluation d'entraînement",
      "Les détails et les prix de l'examen changent ; les apprenants vérifient les pages officielles de Microsoft"
    ],
    prerequisites: "Aucun. « Les bases de l'informatique en nuage (cloud) » est un début plus doux pour les apprenants qui n'ont jamais entendu parler du cloud."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'un exemple du quotidien, comme le site web très fréquenté d'une banque alimentaire", action: "expliquer ce qu'est l'informatique en nuage et nommer ses principaux avantages et modèles de cloud", standard: "avec vos mots, en donnant au moins deux avantages justes" },
    { id: "O2", condition: "À partir d'un service cloud", action: "classer ce service en IaaS, PaaS ou SaaS et dire ce que le fournisseur et le client protègent chacun", standard: "en ayant au moins 4 réponses justes sur 5" },
    { id: "O3", condition: "Pour un petit projet Azure", action: "choisir une région et un groupe de ressources et décrire leur place dans un abonnement", standard: "en donnant une raison pour la région choisie" },
    { id: "O4", condition: "À partir d'un besoin courant, comme un site web, un serveur complet ou des sauvegardes", action: "associer ce besoin au bon service Azure principal", standard: "en ayant au moins 4 réponses justes sur 5" },
    { id: "O5", condition: "Pour les personnes et les ressources de votre plan", action: "lister comment vous protégerez la connexion et l'accès et ferez respecter les règles avec la MFA, le RBAC, les étiquettes, Azure Policy ou les verrous de ressources", standard: "en nommant au moins trois de ces outils et ce que fait chacun" },
    { id: "O6", condition: "Avec la calculatrice de prix Azure gratuite et Microsoft Learn", action: "estimer un coût mensuel pour votre plan et écrire un plan d'étude pour l'AZ-900", standard: "avec un total estimé et vos deux domaines d'examen les plus faibles" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Les concepts du cloud et les briques d'Azure",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ce qu'est le cloud et pourquoi les organisations l'utilisent",
          minutes: 5,
          goal: "Expliquer l'informatique en nuage et ses principaux avantages avec un exemple du quotidien.",
          text: [
            "L'informatique en nuage (cloud computing), c'est louer de la puissance de calcul, du stockage et des logiciels par internet au lieu d'acheter et de faire tourner ses propres serveurs. Microsoft Azure, Amazon Web Services et Google Cloud sont les plus grands fournisseurs de cloud.",
            "C'est comme l'électricité : vous ne construisez pas de centrale, vous branchez et payez ce que vous consommez. C'est le modèle basé sur la consommation, ou paiement à l'usage. Au lieu d'un gros achat au départ (dépense d'investissement, CapEx), vous payez un coût de fonctionnement (dépense d'exploitation, OpEx).",
            "Les principaux avantages : l'évolutivité (ajouter de la puissance quand la page d'inscription d'une banque alimentaire est très visitée, puis la réduire), la haute disponibilité (le service continue si une machine tombe en panne), la fiabilité, les outils de sécurité et une gestion plus simple. Il existe trois modèles de cloud : public (un fournisseur partagé comme Azure), privé (utilisé par une seule organisation) et hybride (un mélange des deux)."
          ],
          words: [["Informatique en nuage", "louer de la puissance de calcul, du stockage et des logiciels par internet."], ["Modèle basé sur la consommation", "vous ne payez que ce que vous utilisez."], ["CapEx / OpEx", "la dépense d'investissement est un gros achat au départ ; la dépense d'exploitation est un coût régulier."], ["Évolutivité", "ajouter ou retirer des ressources selon la demande."], ["Haute disponibilité", "un service qui continue de fonctionner même quand des éléments tombent en panne."], ["Cloud hybride", "un mélange de cloud public et des systèmes privés d'une organisation."]],
          slides: [
            { title: "L'informatique en nuage, c'est", bullets: ["Louer de la puissance de calcul par internet", "Comme l'électricité : on branche, on paie l'usage", "Azure, AWS et Google Cloud sont les trois grands"] },
            { title: "Comment on paie", bullets: ["Basé sur la consommation : on paie ce qu'on utilise", "CapEx : un gros achat au départ", "OpEx : un coût de fonctionnement régulier"] },
            { title: "Les principaux avantages", bullets: ["Évolutivité et haute disponibilité", "Fiabilité et outils de sécurité", "Gestion plus simple"] },
            { title: "Trois modèles de cloud", bullets: ["Public : un fournisseur partagé", "Privé : une seule organisation", "Hybride : un mélange des deux"] }
          ],
          sources: [STUDY],
          tryIt: "Choisissez une organisation de votre quartier (une église, un centre de santé, une école, une banque alimentaire ou une petite boutique). Écrivez deux façons dont elle pourrait utiliser le cloud et quel avantage (évolutivité, disponibilité, paiement à l'usage) chacune lui apporte.",
          youCanNow: "expliquer l'informatique en nuage, le paiement à l'usage, ses avantages et les trois modèles de cloud.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce que l'OpEx dans l'informatique en nuage ?", options: ["Un gros achat de serveurs payé d'avance", "Un coût courant que vous payez au fur et à mesure que vous utilisez le service", "Un type de machine virtuelle", "Un essai gratuit qui ne finit jamais"], answer: 1, why: "Le paiement à l'usage transforme un gros achat payé d'avance (CapEx) en dépense de fonctionnement courante (OpEx)." },
            { objective: "O1", q: "Une clinique doit garder certaines données sur ses propres serveurs mais veut utiliser Azure pour son site web. Quel modèle de cloud convient ?", options: ["Public uniquement", "Privé uniquement", "Pas de cloud du tout", "Hybride"], answer: 3, why: "Le cloud hybride combine les propres serveurs d'une organisation et un cloud public comme Azure." }
          ]
        },
        {
          objectives: ["O2"],
          title: "IaaS, PaaS, SaaS et qui est responsable de quoi",
          minutes: 5,
          goal: "Classer un service en IaaS, PaaS ou SaaS et dire qui s'occupe de quoi.",
          text: [
            "Les services cloud sont de trois types. IaaS (infrastructure en tant que service) : vous louez des machines virtuelles et des réseaux et vous gérez presque tout dessus vous-même, comme louer un appartement vide. PaaS (plateforme en tant que service) : le fournisseur fait tourner les serveurs et les logiciels système ; vous apportez votre application ou vos données, comme un appartement meublé. SaaS (logiciel en tant que service) : vous utilisez simplement un logiciel fini, comme la messagerie Outlook ou Microsoft Teams, comme une chambre d'hôtel.",
            "Le serverless (sans serveur) est une sorte de PaaS où votre code ne s'exécute que quand quelque chose le déclenche, et vous payez à l'usage, sans aucun serveur à gérer (Azure Functions en est un exemple).",
            "Le modèle de responsabilité partagée dit qui protège quoi. Le fournisseur sécurise toujours les centres de données physiques. Vous êtes toujours responsable de vos données, de vos comptes et de qui y a accès. Entre les deux, plus on va de l'IaaS vers le SaaS, plus le fournisseur prend de choses en charge."
          ],
          steps: ["Demandez-vous : gérons-nous le système d'exploitation ? Si oui, c'est de l'IaaS.", "Apportons-nous seulement notre application ou nos données ? Alors c'est du PaaS.", "Est-ce qu'on se connecte et on utilise juste le logiciel ? Alors c'est du SaaS.", "Rappel : vos données et vos comptes sont toujours votre affaire."],
          words: [["IaaS", "infrastructure en tant que service : vous louez des machines virtuelles et les gérez."], ["PaaS", "plateforme en tant que service : le fournisseur fait tourner la plateforme ; vous apportez votre application."], ["SaaS", "logiciel en tant que service : un logiciel prêt à l'emploi utilisé par internet."], ["Serverless", "du code qui ne s'exécute que quand il est déclenché, sans serveur à gérer pour vous."], ["Modèle de responsabilité partagée", "la façon dont les tâches de sécurité sont réparties entre le fournisseur de cloud et vous."]],
          slides: [
            { title: "Trois types de services", bullets: ["IaaS : appartement vide, vous gérez presque tout", "PaaS : meublé, vous apportez votre application", "SaaS : chambre d'hôtel, vous l'utilisez simplement"] },
            { title: "Le serverless", bullets: ["Le code ne s'exécute que quand il est déclenché", "Paiement à l'usage, aucun serveur à gérer", "Exemple : Azure Functions"] },
            { title: "Responsabilité partagée", bullets: ["Le fournisseur : toujours le centre de données physique", "Vous : toujours vos données, comptes et accès", "De l'IaaS au SaaS : le fournisseur en fait plus"] }
          ],
          sources: [STUDY],
          tryIt: "Classez ces services en IaaS, PaaS ou SaaS : la messagerie Microsoft Outlook, une machine virtuelle Azure, Azure App Service pour un site web, Microsoft Teams, Azure Functions. Puis écrivez une chose dont vous êtes toujours responsable, quel que soit le type.",
          youCanNow: "distinguer IaaS, PaaS et SaaS et expliquer le modèle de responsabilité partagée.",
          quickCheck: [
            { objective: "O2", q: "Quel type ressemble à la location d'un appartement meublé : le fournisseur gère les serveurs et vous apportez votre application ?", options: ["PaaS", "IaaS", "SaaS", "Un cloud privé"], answer: 0, why: "Avec le PaaS, le fournisseur gère les serveurs et les logiciels système ; vous apportez votre application ou vos données." },
            { objective: "O2", q: "Votre association passe de l'IaaS au SaaS. Que devient son travail de sécurité ?", options: ["Elle doit maintenant surveiller le centre de données", "Rien ne change du tout", "Le fournisseur en fait plus, mais vos données et vos comptes restent à votre charge", "Le fournisseur devient responsable de vos mots de passe"], answer: 2, why: "Aller vers le SaaS confie plus de travail au fournisseur, mais vos données et vos accès restent toujours à votre charge." }
          ]
        },
        {
          objectives: ["O3"],
          title: "L'organisation d'Azure : régions, zones et groupes de ressources",
          minutes: 6,
          goal: "Décrire où tourne Azure et comment les ressources sont organisées et retrouvées dans le portail Azure.",
          text: [
            "Azure tourne dans des centres de données du monde entier regroupés en régions, comme East US ou South Africa North. Vous choisissez une région pour chaque chose que vous créez : plus elle est proche de vos utilisateurs, plus c'est rapide en général, et certaines données doivent rester dans un pays précis selon les règles. Beaucoup de régions ont des zones de disponibilité : des centres de données séparés avec leur propre alimentation et leur propre refroidissement, pour que si l'un tombe en panne, un autre continue. Les régions sont aussi associées à une autre région de la même zone géographique pour la reprise après sinistre.",
            "Tout ce que vous créez (une machine virtuelle, une base de données, un compte de stockage) est une ressource. Les ressources vont dans des groupes de ressources, des dossiers pour les choses qui vont ensemble, comme tout ce qu'il faut pour un site web. Les groupes de ressources sont dans un abonnement, qui est le compte de facturation. Les grandes organisations regroupent les abonnements avec des groupes d'administration.",
            "Vous gérez tout cela dans le portail Azure, un site à l'adresse portal.azure.com. Vous pouvez aussi utiliser Azure Cloud Shell, Azure CLI ou Azure PowerShell pour le gérer en tapant des commandes."
          ],
          steps: ["Choisissez une région proche de vos utilisateurs qui respecte les règles sur les données.", "Utilisez les zones de disponibilité quand le service doit rester en marche.", "Mettez les ressources liées dans un même groupe de ressources.", "Sachez quel abonnement les paie.", "Gérez tout dans le portail Azure ou avec les outils en ligne de commande."],
          words: [["Région", "une zone géographique avec un ou plusieurs centres de données Azure."], ["Zone de disponibilité", "un centre de données séparé dans une région, avec sa propre alimentation, son refroidissement et son réseau."], ["Ressource", "tout ce que vous créez dans Azure, comme une machine virtuelle ou une base de données."], ["Groupe de ressources", "un dossier qui contient des ressources liées."], ["Abonnement", "le compte sur lequel les frais Azure sont facturés."], ["Groupe d'administration", "un moyen de regrouper plusieurs abonnements sous des règles communes."], ["Portail Azure", "le site web pour gérer Azure."]],
          slides: [
            { title: "Où tourne Azure", bullets: ["Des centres de données regroupés en régions", "Choisissez une région proche des utilisateurs et des règles", "Zones de disponibilité : centres de données séparés"] },
            { title: "Comment c'est organisé", bullets: ["Ressource : une chose que vous créez", "Groupe de ressources : des ressources liées", "Abonnement : la facturation", "Groupe d'administration : plusieurs abonnements"] },
            { title: "Comment on le gère", bullets: ["Le portail Azure sur portal.azure.com", "Cloud Shell, Azure CLI, Azure PowerShell"] }
          ],
          sources: [STUDY],
          tryIt: "Préparez l'organisation pour un centre communautaire qui veut un site web et un endroit pour garder les formulaires d'inscription : nommez un groupe de ressources, listez deux ressources qui vont dedans et choisissez une région proche de chez vous. Écrivez une raison pour votre choix de région.",
          youCanNow: "expliquer les régions, les zones de disponibilité, les ressources, les groupes de ressources, les abonnements et les groupes d'administration.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qu'un groupe de ressources dans Azure ?", options: ["Une équipe d'employés de Microsoft", "Un type de machine virtuelle", "Un compte de facturation", "Un dossier pour les ressources qui vont ensemble, comme un site web"], answer: 3, why: "Les groupes de ressources regroupent des ressources liées ; c'est l'abonnement qui sert de compte de facturation." },
            { objective: "O3", q: "Vos utilisateurs sont en Afrique du Sud et leurs données doivent rester dans le pays. Comment choisissez-vous la région ?", options: ["Prendre la région la moins chère, n'importe où", "Prendre une région proche de vos utilisateurs qui respecte les règles sur les données", "Prendre une région au hasard", "Utiliser toutes les régions à la fois"], answer: 1, why: "Choisissez une région proche des utilisateurs qui respecte aussi les règles sur l'endroit où les données doivent rester." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Les concepts du cloud et les briques d'Azure",
        questions: [
          { objective: "O1", q: "Qu'est-ce que le modèle basé sur la consommation ?", options: ["On achète tous les serveurs au départ", "Tout est toujours gratuit", "On ne paie que ce qu'on utilise", "On paie un prix fixe pour toujours"], answer: 2, why: "Les services cloud sont en général payés à l'usage." },
          { objective: "O1", q: "Le site d'une banque alimentaire est très visité une fois par mois. Quel avantage du cloud aide le plus ?", options: ["L'évolutivité", "Le cloud privé", "Le CapEx", "Le SaaS"], answer: 0, why: "L'évolutivité ajoute des ressources quand la demande monte et les retire ensuite." },
          { objective: "O2", q: "Microsoft Teams utilisé dans un navigateur web est un exemple de :", options: ["IaaS", "PaaS", "Région", "SaaS"], answer: 3, why: "C'est un logiciel prêt à l'emploi fourni par internet." },
          { objective: "O2", q: "Avec le modèle de responsabilité partagée, qu'est-ce qui est TOUJOURS votre affaire ?", options: ["Construire le centre de données", "Vos données et qui y a accès", "Refroidir les serveurs", "Remplacer les disques durs cassés"], answer: 1, why: "Les clients sont toujours responsables de leurs données, comptes et accès." },
          { objective: "O3", q: "Qu'est-ce qui contient les ressources Azure liées, comme tout ce qu'il faut pour un site web ?", options: ["Une région", "Un groupe de ressources", "Une zone de disponibilité", "Un mot de passe"], answer: 1, why: "Les groupes de ressources rangent les ressources qui vont ensemble." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Services principaux, coûts et certification",
      lessons: [
        {
          objectives: ["O4"],
          title: "Les services Azure principaux : calcul, réseau, stockage et bases de données",
          minutes: 6,
          goal: "Associer un besoin courant au bon service Azure principal.",
          text: [
            "Le calcul fait tourner vos programmes. Azure Virtual Machines vous donne un ordinateur complet dans le cloud (IaaS). Azure App Service héberge des sites et des applications web sans gérer de serveurs (PaaS). Les conteneurs emballent une application avec tout ce dont elle a besoin pour qu'elle tourne pareil partout. Azure Functions exécute de petits morceaux de code quand ils sont déclenchés (serverless). Azure Virtual Desktop donne aux gens un bureau Windows accessible depuis n'importe quel appareil.",
            "Le réseau relie les choses. Un réseau virtuel Azure est votre réseau privé dans le cloud. Une passerelle VPN (VPN Gateway) le relie à votre bureau par internet ; ExpressRoute est une connexion privée qui ne passe pas par l'internet public. Azure DNS transforme les noms en adresses.",
            "Le stockage garde les fichiers et les données. Un compte de stockage contient le stockage Blob (photos, vidéos, sauvegardes), Azure Files (dossiers partagés), des files d'attente et des tables. Les niveaux de stockage (chaud, froid, très froid, archive) coûtent moins cher à mesure que vous ouvrez les fichiers moins souvent. Les options de redondance gardent des copies en plus pour qu'une panne ne fasse pas perdre de données. Pour les bases de données, Azure propose des options gérées comme Azure SQL Database et Azure Cosmos DB."
          ],
          steps: ["Besoin d'un site web ? Regardez Azure App Service.", "Besoin du contrôle complet d'un serveur ? Azure Virtual Machines.", "Besoin d'exécuter du code lors d'un événement ? Azure Functions.", "Besoin de garder des fichiers ou des sauvegardes ? Un compte de stockage avec le stockage Blob.", "Des fichiers rarement ouverts ? Prenez un niveau plus froid et moins cher."],
          words: [["Machine virtuelle (VM)", "un ordinateur qui tourne comme un logiciel dans le cloud."], ["Azure App Service", "un service PaaS pour héberger des sites et des applications web."], ["Conteneur", "un paquet qui contient une application et tout ce dont elle a besoin pour tourner."], ["Réseau virtuel", "un réseau privé pour vos ressources Azure."], ["Stockage Blob", "un stockage pour les gros fichiers comme les photos, les vidéos et les sauvegardes."], ["Niveau de stockage", "un niveau de prix selon la fréquence d'ouverture des données : chaud, froid, très froid ou archive."], ["Redondance", "garder des copies en plus pour que les données survivent à une panne."]],
          slides: [
            { title: "Le calcul", bullets: ["Virtual Machines : ordinateur complet (IaaS)", "App Service : sites web (PaaS)", "Functions : du code sur déclenchement", "Conteneurs et Virtual Desktop"] },
            { title: "Le réseau", bullets: ["Réseau virtuel : votre réseau privé dans le cloud", "VPN Gateway : lien vers votre bureau", "ExpressRoute : connexion privée", "Azure DNS : des noms vers des adresses"] },
            { title: "Stockage et bases de données", bullets: ["Compte de stockage : Blob, Files, files d'attente, tables", "Niveaux : chaud, froid, très froid, archive", "La redondance garde des copies en plus", "Azure SQL Database, Azure Cosmos DB"] }
          ],
          sources: [STUDY],
          tryIt: "Pour le centre communautaire de la leçon 3, choisissez un service pour chaque besoin : un site web public, un endroit pour garder les formulaires d'inscription numérisés, et de vieilles photos presque jamais ouvertes. Écrivez quel service et, pour les photos, quel niveau de stockage.",
          youCanNow: "associer des besoins courants aux services Azure de calcul, de réseau, de stockage et de bases de données.",
          quickCheck: [
            { objective: "O4", q: "Quel service Azure fait tourner de petits morceaux de code seulement quand un événement le déclenche ?", options: ["Azure Virtual Machines", "Azure DNS", "Azure Functions", "ExpressRoute"], answer: 2, why: "Azure Functions est serverless : le code tourne quand il est déclenché, et vous payez à l'usage." },
            { objective: "O4", q: "Un centre pour les jeunes a besoin d'un dossier partagé que tout le personnel peut ouvrir. Que proposez-vous ?", options: ["Azure Files dans un compte de stockage", "Azure Virtual Desktop", "Une VPN Gateway", "Azure SQL Database"], answer: 0, why: "Azure Files, dans un compte de stockage, fournit des dossiers partagés." }
          ]
        },
        {
          objectives: ["O5","O6"],
          title: "Sécurité, gouvernance et maîtrise des coûts",
          minutes: 6,
          goal: "Nommer les outils Azure qui protègent les comptes, imposent des règles et évitent les factures surprises.",
          text: [
            "L'identité : Microsoft Entra ID est le service de connexion et d'annuaire d'Azure. Activez l'authentification multifacteur (MFA), qui demande une deuxième preuve comme un code dans une application, pour qu'un mot de passe volé ne suffise pas. L'authentification unique (SSO) permet d'utiliser un seul compte pour beaucoup d'applications. Le contrôle d'accès basé sur les rôles (RBAC) donne à chaque personne seulement l'accès dont son travail a besoin. Le Zero Trust veut dire ne jamais supposer qu'une demande est sûre ; toujours vérifier.",
            "La gouvernance : Azure Policy fixe des règles, comme « ne créer des ressources que dans ces régions ». Les verrous de ressources empêchent qu'une ressource importante soit supprimée ou modifiée par erreur. Les étiquettes (tags) sont des libellés comme department=youth ou project=website qui aident à trier et à suivre les coûts. Microsoft Defender for Cloud vérifie votre installation pour trouver des problèmes de sécurité.",
            "Les coûts : ce que vous payez dépend du service, de sa taille, de la région, de sa durée de fonctionnement et de la quantité de données qui sortent d'Azure. La calculatrice de prix Azure, gratuite, estime un coût mensuel avant de créer quoi que ce soit. Cost Management (gestion des coûts) permet de fixer des budgets et des alertes. Une règle simple : supprimez ce que vous n'utilisez pas."
          ],
          steps: ["Activez la MFA pour chaque compte.", "Donnez aux gens seulement l'accès dont leur travail a besoin (RBAC).", "Ajoutez des étiquettes à chaque ressource.", "Utilisez Azure Policy et les verrous de ressources pour les règles importantes.", "Estimez d'abord les coûts dans la calculatrice de prix, puis fixez une alerte de budget."],
          words: [["Microsoft Entra ID", "le service de connexion et d'annuaire de Microsoft dans le cloud."], ["Authentification multifacteur (MFA)", "se connecter avec un mot de passe plus une deuxième preuve."], ["RBAC", "contrôle d'accès basé sur les rôles : l'accès dépend du travail de la personne."], ["Zero Trust", "une approche de sécurité : ne jamais supposer la confiance, toujours vérifier."], ["Azure Policy", "un outil qui impose des règles sur ce qui peut être créé."], ["Verrou de ressource", "empêche une ressource d'être supprimée ou modifiée par erreur."], ["Étiquette (tag)", "un libellé sur une ressource, pour la trier et suivre les coûts."]],
          slides: [
            { title: "Identité et accès", bullets: ["Microsoft Entra ID pour la connexion", "MFA : une deuxième preuve", "RBAC : seulement l'accès dont le travail a besoin", "Zero Trust : toujours vérifier"] },
            { title: "Gouvernance", bullets: ["Azure Policy : imposer des règles", "Verrous de ressources : éviter les accidents", "Étiquettes : trier et suivre les coûts", "Defender for Cloud : trouver les points faibles"] },
            { title: "Maîtriser les coûts", bullets: ["Le coût dépend du service, de la taille, de la région et du temps", "Calculatrice de prix : estimez d'abord", "Budgets et alertes dans Cost Management", "Supprimez ce que vous n'utilisez pas"] }
          ],
          sources: [STUDY, CALC],
          tryIt: "Écrivez trois règles de sécurité et de coût pour l'installation Azure du centre communautaire, une pour la connexion, une pour l'accès et une pour les dépenses. Exemple : « Chaque compte de bénévole utilise la MFA. » Puis écrivez deux étiquettes que vous mettriez sur chaque ressource.",
          youCanNow: "décrire comment Azure protège les comptes, impose des règles et garde les coûts sous contrôle.",
          quickCheck: [
            { objective: "O5", q: "Que veut dire Zero Trust (confiance zéro) ?", options: ["Faire confiance à toute demande venant du bureau", "Toujours vérifier ; ne jamais supposer qu'une demande est sûre", "Désactiver les mots de passe", "Faire confiance seulement au fournisseur de cloud"], answer: 1, why: "Zero Trust veut dire que chaque demande est vérifiée au lieu d'être supposée sûre." },
            { objective: "O5", q: "Le mot de passe d'un bénévole a été volé, mais le voleur n'a pas pu se connecter. Quel réglage l'a le plus probablement arrêté ?", options: ["Une étiquette sur la ressource", "Un niveau de stockage plus froid", "Un groupe de ressources", "L'authentification multifacteur (MFA)"], answer: 3, why: "La MFA demande une deuxième preuve : un mot de passe volé ne suffit donc pas." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Estimer les coûts et préparer votre parcours AZ-900",
          minutes: 6,
          goal: "Estimer un coût mensuel dans la calculatrice de prix et faire un plan d'étude pour l'AZ-900.",
          text: [
            "La calculatrice de prix est gratuite sur le site de Microsoft. Vous ajoutez les services que vous comptez utiliser, choisissez une région et des options comme la taille et les heures, et elle affiche un coût mensuel estimé. Les prix changent et dépendent de la région, donc utilisez toujours la calculatrice plutôt qu'un chiffre lu quelque part.",
            "Si vous voulez vous entraîner dans Azure lui-même, Microsoft propose aux nouveaux clients un compte gratuit avec certains services gratuits pendant 12 mois et plus de 65 services gratuits chaque mois jusqu'à certains montants. Lisez les conditions actuelles sur la page des services gratuits de Microsoft avant de vous inscrire, fixez une alerte de budget et supprimez les ressources d'entraînement quand vous avez fini. Les étudiants peuvent avoir droit à une offre séparée, Azure for Students, avec une adresse e-mail universitaire.",
            "L'examen de la certification Microsoft Certified: Azure Fundamentals est l'AZ-900. Le guide d'étude de Microsoft liste trois domaines : les concepts du cloud (25-30 %), l'architecture et les services Azure (35-40 %), et la gestion et la gouvernance Azure (30-35 %). Il faut un score de 700 ou plus pour réussir. La page de l'examen indique 45 minutes pour l'évaluation, et le prix dépend du pays où vous le passez, donc vérifiez-le sur cette page. Microsoft Learn propose une formation gratuite et une évaluation d'entraînement gratuite."
          ],
          steps: ["Ouvrez la calculatrice de prix Azure.", "Ajoutez les services de votre plan, choisissez votre région et les tailles.", "Notez le total mensuel estimé.", "Ouvrez la page AZ-900 sur Microsoft Learn et passez l'évaluation d'entraînement gratuite.", "Notez vos deux domaines les plus faibles et les modules gratuits de Microsoft Learn qui y correspondent."],
          words: [["Calculatrice de prix", "l'outil gratuit de Microsoft pour estimer les coûts Azure avant de créer quoi que ce soit."], ["AZ-900", "le code de l'examen de la certification Microsoft Certified: Azure Fundamentals."], ["Évaluation d'entraînement", "des questions d'entraînement gratuites sur Microsoft Learn qui montrent si vous êtes prêt."], ["Microsoft Learn", "le site gratuit de formation et de certification de Microsoft."]],
          slides: [
            { title: "Estimez avant de créer", bullets: ["Calculatrice de prix Azure gratuite", "Ajoutez services, région et tailles", "Les prix changent : revérifiez toujours"] },
            { title: "S'entraîner en sécurité", bullets: ["Lisez d'abord les conditions du compte gratuit", "Fixez une alerte de budget", "Supprimez les ressources d'entraînement à la fin"] },
            { title: "L'examen AZ-900", bullets: ["Concepts du cloud : 25-30 %", "Architecture et services : 35-40 %", "Gestion et gouvernance : 30-35 %", "Note de réussite : 700 ; prix selon le pays"] },
            { title: "Votre prochaine étape", bullets: ["Évaluation d'entraînement gratuite sur Microsoft Learn", "Étudiez vos deux domaines les plus faibles"] }
          ],
          sources: [CALC, FREE, CERT, STUDY],
          tryIt: "Tâche finale : écrivez le plan Azure d'une page pour le site web et le stockage de fichiers d'une association (services et type, région, groupe de ressources, connexion sûre, étiquettes et budget), ajoutez l'estimation mensuelle de la calculatrice de prix, puis passez l'évaluation d'entraînement gratuite AZ-900 et notez vos deux domaines les plus faibles.",
          youCanNow: "préparer et chiffrer une petite installation Azure et suivre un parcours clair vers la certification AZ-900.",
          quickCheck: [
            { objective: "O6", q: "Pourquoi utiliser la calculatrice de prix Azure plutôt qu'un prix lu en ligne ?", options: ["Les prix changent et dépendent de la région, donc la calculatrice donne une estimation à jour", "La calculatrice rend Azure gratuit", "Les prix en ligne sont toujours plus élevés", "La calculatrice vous inscrit automatiquement"], answer: 0, why: "Les prix changent et varient selon la région : faites l'estimation avec la calculatrice pour vos propres choix." },
            { objective: "O6", q: "Vous avez passé l'évaluation d'entraînement AZ-900 gratuite. Quelle est la meilleure étape suivante ?", options: ["Réserver l'examen aujourd'hui sans étudier", "La repasser jusqu'à connaître les réponses par cœur", "Noter vos deux domaines les plus faibles et trouver les modules Microsoft Learn gratuits qui les couvrent", "Arrêter, car les scores d'entraînement ne comptent pas"], answer: 2, why: "Vos domaines les plus faibles montrent quoi étudier ensuite, et Microsoft Learn a des modules gratuits pour chacun." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Services principaux, coûts et certification",
        questions: [
          { objective: "O4", q: "Quel service Azure héberge un site web sans que vous gériez de serveurs ?", options: ["Azure Virtual Machines", "ExpressRoute", "Les verrous de ressources", "Azure App Service"], answer: 3, why: "App Service est de l'hébergement web en PaaS." },
          { objective: "O4", q: "De vieilles photos ne sont presque jamais ouvertes. Quel choix de stockage fait économiser ?", options: ["Un niveau plus froid comme froid, très froid ou archive", "Le niveau chaud", "Une machine virtuelle plus grosse", "Un deuxième abonnement"], answer: 0, why: "Les niveaux plus froids coûtent moins pour des données rarement ouvertes." },
          { objective: "O5", q: "Quel outil empêche une ressource importante d'être supprimée par erreur ?", options: ["Une étiquette", "La calculatrice de prix", "Un verrou de ressource", "Une région"], answer: 2, why: "Les verrous empêchent les suppressions ou modifications accidentelles." },
          { objective: "O5", q: "Qu'ajoute la MFA à la connexion ?", options: ["Un nom d'utilisateur plus long", "Un abonnement gratuit", "Une nouvelle région", "Une deuxième preuve, comme un code dans une application"], answer: 3, why: "Avec la MFA, un mot de passe volé ne suffit pas." },
          { objective: "O6", q: "Où trouver le prix actuel de l'examen AZ-900 ?", options: ["L'estimation d'un ami", "Un vieil article de blog", "La page officielle de l'examen de Microsoft pour votre pays", "N'importe quel chatbot d'IA"], answer: 2, why: "Le prix dépend du pays, et la page officielle est à jour." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les fondamentaux de Microsoft Azure",
    questions: [
      { objective: "O1", q: "L'informatique en nuage, c'est :", options: ["Garder ses fichiers seulement sur une clé USB", "Louer de la puissance de calcul et des services par internet", "La prévision météo", "Acheter un nouvel ordinateur portable"], answer: 1, why: "Le cloud, c'est utiliser les ordinateurs d'un fournisseur par internet." },
      { objective: "O1", q: "Payer une grosse somme au départ pour acheter des serveurs, c'est :", options: ["Du CapEx", "De l'OpEx", "Du SaaS", "Du serverless"], answer: 0, why: "La dépense d'investissement est un achat au départ." },
      { objective: "O1", q: "Un service continue de fonctionner même quand une machine tombe en panne. C'est :", options: ["Une étiquette", "Un groupe d'administration", "La haute disponibilité", "Du CapEx"], answer: 2, why: "La haute disponibilité garde les services en marche malgré les pannes." },
      { objective: "O1", q: "Une organisation utilise ses propres serveurs et Azure ensemble. C'est :", options: ["Le cloud hybride", "Seulement le cloud privé", "Seulement le cloud public", "Le SaaS"], answer: 0, why: "L'hybride mélange privé et public." },
      { objective: "O2", q: "Vous louez une machine virtuelle et gérez son système d'exploitation. C'est :", options: ["Du SaaS", "Du PaaS", "Une région", "De l'IaaS"], answer: 3, why: "Gérer le système d'exploitation de machines louées, c'est de l'IaaS." },
      { objective: "O2", q: "Du code qui ne s'exécute que quand il est déclenché, sans serveur à gérer, s'appelle :", options: ["Un verrou de ressource", "Le serverless", "Le stockage archive", "Un VPN"], answer: 1, why: "Le serverless s'exécute à la demande ; Azure Functions en est un exemple." },
      { objective: "O2", q: "Qui sécurise toujours le centre de données physique ?", options: ["Le client", "Le fournisseur de cloud", "La banque de l'utilisateur", "Personne"], answer: 1, why: "La sécurité physique est toujours l'affaire du fournisseur." },
      { objective: "O3", q: "Une région Azure est :", options: ["Un compte de facturation", "Un type de base de données", "Une règle de mot de passe", "Une zone géographique avec un ou plusieurs centres de données"], answer: 3, why: "Les régions sont les endroits où se trouvent les centres de données d'Azure." },
      { objective: "O3", q: "Les zones de disponibilité sont :", options: ["Des centres de données séparés dans une région, avec leur propre alimentation et refroidissement", "Des niveaux de prix pour le stockage", "Des groupes d'utilisateurs", "Des pays"], answer: 0, why: "Les zones protègent contre la panne d'un centre de données." },
      { objective: "O3", q: "Quel est le compte de facturation qui contient les groupes de ressources ?", options: ["Une étiquette", "Un conteneur", "Un abonnement", "Une région"], answer: 2, why: "Les abonnements sont facturés et contiennent les groupes de ressources." },
      { objective: "O3", q: "Où gérez-vous Azure dans un navigateur web ?", options: ["Dans un magasin d'applications", "Dans un niveau de stockage", "Dans ExpressRoute", "Dans le portail Azure"], answer: 3, why: "Le portail Azure est le site de gestion." },
      { objective: "O4", q: "Quel service vous donne un ordinateur complet dans le cloud ?", options: ["Azure DNS", "Azure Policy", "Azure Virtual Machines", "Les étiquettes"], answer: 2, why: "Virtual Machines, c'est du calcul en IaaS." },
      { objective: "O4", q: "Laquelle est une connexion privée à Azure qui n'utilise pas l'internet public ?", options: ["VPN Gateway", "ExpressRoute", "Azure DNS", "Le stockage Blob"], answer: 1, why: "ExpressRoute est une connexion privée." },
      { objective: "O4", q: "Où garderiez-vous des sauvegardes et des vidéos ?", options: ["Dans le stockage Blob d'un compte de stockage", "Dans Azure Policy", "Dans un groupe d'administration", "Dans Microsoft Entra ID"], answer: 0, why: "Le stockage Blob contient les gros fichiers." },
      { objective: "O5", q: "Quel est le service de connexion et d'annuaire d'Azure ?", options: ["Azure Advisor", "Azure Functions", "Microsoft Entra ID", "Le niveau archive"], answer: 2, why: "Entra ID gère les identités et la connexion." },
      { objective: "O5", q: "Un bénévole a seulement besoin de lire des rapports. Quelle idée le limite à cela ?", options: ["Le contrôle d'accès basé sur les rôles (RBAC)", "Le cloud hybride", "L'évolutivité", "Le stockage archive"], answer: 0, why: "Le RBAC donne seulement l'accès dont un rôle a besoin." },
      { objective: "O5", q: "Vous voulez empêcher quiconque de créer des ressources hors de votre région. Quel outil ?", options: ["Les étiquettes", "La calculatrice de prix", "Un conteneur", "Azure Policy"], answer: 3, why: "Azure Policy impose des règles comme les régions autorisées." },
      { objective: "O5", q: "Les libellés comme project=website sur les ressources s'appellent :", options: ["Des verrous", "Des étiquettes (tags)", "Des zones", "Des niveaux"], answer: 1, why: "Les étiquettes trient les ressources et aident à suivre les coûts." },
      { objective: "O6", q: "Avant de créer quoi que ce soit, comment estimer le coût mensuel ?", options: ["Deviner", "Utiliser la calculatrice de prix Azure", "Attendre la première facture", "Demander à un inconnu en ligne"], answer: 1, why: "La calculatrice estime les coûts avant de créer." },
      { objective: "O6", q: "Quel score faut-il pour réussir l'AZ-900, selon le guide d'étude de Microsoft ?", options: ["500", "600", "700 ou plus", "900 ou plus"], answer: 2, why: "Le guide d'étude de Microsoft dit qu'un score de 700 ou plus est nécessaire." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      3,
      4,
      6,
      7,
      9,
      11,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Type de service et services",
        objective: "O4",
        notYet: "Le plan ne nomme aucun service Azure, ou les services ne conviennent pas à un site web et au stockage de fichiers.",
        meets: "Nomme le type de service (IaaS, PaaS ou SaaS) et des services adaptés, comme App Service et un compte de stockage.",
        exceeds: "Dit pourquoi chaque service convient mieux qu'un autre choix."
      },
      {
        name: "Région et organisation",
        objective: "O3",
        notYet: "Aucune région ni aucun groupe de ressources n'est nommé.",
        meets: "Nomme une région avec une raison et met les ressources dans un seul groupe de ressources.",
        exceeds: "Nomme aussi l'abonnement qui paie et dit si des zones de disponibilité sont nécessaires."
      },
      {
        name: "Connexion sûre et règles",
        objective: "O5",
        notYet: "Ne dit pas comment les gens se connectent ni qui peut faire quoi.",
        meets: "Utilise la MFA et donne à chaque personne seulement l'accès dont elle a besoin (RBAC).",
        exceeds: "Ajoute aussi des étiquettes, une stratégie ou un verrou de ressource et dit ce que chacun protège."
      },
      {
        name: "Estimation des coûts",
        objective: "O6",
        notYet: "Pas d'estimation, ou un chiffre qui ne vient pas de la calculatrice de prix.",
        meets: "Donne un total mensuel estimé avec la calculatrice de prix et une alerte de budget.",
        exceeds: "Nomme un changement qui ferait baisser le coût, comme un niveau de stockage plus froid."
      },
      {
        name: "Plan d'étude",
        objective: "O6",
        notYet: "L'évaluation d'entraînement n'a pas été passée.",
        meets: "A passé l'évaluation d'entraînement gratuite et noté les deux domaines les plus faibles.",
        exceeds: "A relié chaque domaine faible à un module Microsoft Learn gratuit et à une date pour l'étudier."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui passent l'examen officiel AZ-900 dans les 90 jours, et combien le réussissent",
      "Apprenants qui postulent ou commencent un emploi ou un stage en support informatique, assistance technique ou cloud",
      "Organisations locales qui utilisent le plan d'un apprenant pour passer un site web ou des fichiers dans le cloud"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un ordinateur ou une tablette avec un navigateur web et internet",
      "La calculatrice de prix Azure gratuite de Microsoft et un compte Microsoft Learn gratuit pour l'évaluation d'entraînement",
      "Un modèle de plan d'une page, ou du papier et un stylo",
      "Environ 60 minutes pour les leçons, les contrôles et le plan, plus environ 45 minutes pour l'évaluation d'entraînement"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis un chapitre par séance ; parcourez la calculatrice de prix sur un écran partagé.",
      "Aucun compte Azure n'est nécessaire. Si des apprenants choisissent d'ouvrir un compte gratuit, faites-leur lire les conditions actuelles, régler une alerte de budget et supprimer les ressources d'exercice à la fin.",
      "Prenez une vraie organisation locale, comme une banque alimentaire ou un centre pour les jeunes, comme exemple pour le plan d'une page.",
      "Rappelez que les détails et les prix de l'examen changent ; envoyez les apprenants vers la page officielle de l'examen Microsoft pour leur pays.",
      "Notez le plan avec la grille d'évaluation, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
