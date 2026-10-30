"use strict";

// Koach Learn course (French translation of africa-life/afr-register-small-business.js). See scripts/koachlearn-courses/README.md, "Translations".

const BRS = { name: "Business Registration Service (BRS), Kenya : enregistrez votre entreprise en ligne via eCitizen", url: "https://brs.go.ke/" };
const CAC = { name: "Corporate Affairs Commission (CAC), Nigeria : enregistrement des sociétés, des noms commerciaux et des associations (portail icrp.cac.gov.ng)", url: "https://www.cac.gov.ng/" };
const ORC = { name: "Office of the Registrar of Companies (ORC), Ghana : noms commerciaux, sociétés, renouvellements (y compris par *222#) et déclarations annuelles", url: "https://orc.gov.gh/" };
const APIX = { name: "APIX, Sénégal : agence de promotion des investissements et guichet unique de création d'entreprise", url: "https://www.apix.sn/" };
const CEPICI = { name: "CEPICI, Côte d'Ivoire : centre de promotion des investissements et guichet unique de création d'entreprise", url: "https://cepici.ci/" };
const OHADA = { name: "OHADA : Organisation pour l'Harmonisation en Afrique du Droit des Affaires (17 pays membres)", url: "https://www.ohada.org/en/" };
const MA_AE = { name: "Maroc : portail du statut de l'auto-entrepreneur", url: "https://www.ae.gov.ma/" };
const KRA = { name: "Kenya Revenue Authority (KRA) : à propos du KRA PIN (à obtenir sur iTax)", url: "https://www.kra.go.ke/individual/individual-pin-registration/learn-about-pin/about-pin" };
const NRS = { name: "Nigeria Revenue Service (NRS) : l'administration fiscale fédérale du Nigeria", url: "https://www.nrs.gov.ng/" };
const GRA = { name: "Ghana Revenue Authority (GRA) : inscription avec un TIN ou le PIN de la Ghana Card ; régime fiscal modifié pour les petites entreprises", url: "https://gra.gov.gh/" };
const SMEDAN = { name: "SMEDAN, Nigeria : soutien aux nano, micro, petites et moyennes entreprises (inscription gratuite, SME Digital Academy)", url: "https://smedan.gov.ng/" };

module.exports = {
  id: "afr-register-small-business-fr",
  lang: "fr",
  translationOf: "afr-register-small-business",
  category: "Africa: Life and Work",
  name: "Enregistrer et gérer une petite entreprise en Afrique",
  skills: "Choisir une forme d'entreprise, Trouver le registre officiel, Préparer une liste pour l'enregistrement, Obtenir un numéro fiscal et les autorisations locales, Tenir un cahier de caisse simple, Prévoir les renouvellements et les déclarations",
  outcome: "rendre votre petite entreprise officielle et la garder en règle : choisir la bonne forme d'entreprise, trouver le registre officiel de votre pays, préparer tout ce qu'il faut pour vous enregistrer, savoir quel numéro fiscal et quelles autorisations s'appliquent, tenir un cahier de caisse simple et prévoir vos renouvellements et déclarations de chaque année.",
  about: [
    "En Afrique, beaucoup de petites entreprises fonctionnent sans être enregistrées. Cela peut marcher un temps, mais l'enregistrement peut ouvrir des portes : un compte bancaire au nom de l'entreprise, des contrats avec des sociétés et l'État, des comptes sur les plateformes de vente, des prêts et certains programmes d'appui. Ce cours s'adresse aux commerçants, artisans, coiffeurs, traiteurs, tailleurs et à toute personne qui a une activité au Kenya, au Nigeria, au Ghana, au Sénégal, en Côte d'Ivoire, au Cameroun, au Maroc et partout en Afrique.",
    "Vous choisirez une forme d'entreprise qui vous convient, trouverez le registre officiel de votre pays en évitant les faux intermédiaires, préparerez une liste pour l'enregistrement, saurez quel numéro fiscal et quelles autorisations locales s'appliquent, ouvrirez un cahier de caisse simple et ferez un calendrier des renouvellements et déclarations de l'année.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche \"Essayez maintenant\" pour votre propre entreprise. Les règles, les formulaires et les frais changent et varient selon les pays : le cours nomme donc les services et vous montre comment les vérifier. Il ne donne ni montant de frais ni conseil juridique ; pour une décision importante, demandez au registre, à un centre d'appui aux entreprises ou à un comptable ou un avocat qualifié."
  ],
  finalTask: "Faites une liste d'enregistrement pour votre propre entreprise : la forme d'entreprise choisie et pourquoi, le registre officiel et son site web, trois choix de nom, les documents et informations nécessaires, le numéro fiscal et les autorisations locales qui s'appliquent (avec l'endroit où vous avez vérifié), la façon dont vous tiendrez votre cahier de caisse, et un calendrier annuel des renouvellements et déclarations.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des propriétaires de petites entreprises, souvent informelles, dans toute l'Afrique : commerçants de marché, artisans, tailleurs, coiffeurs, traiteurs, mécaniciens, vendeurs en ligne et jeunes qui se lancent, au Kenya, au Nigeria, au Ghana, en Afrique de l'Ouest et du Centre francophone et en Afrique du Nord.",
    startingPoint: "Ils font tourner une activité au quotidien et manient l'argent liquide et le mobile money. La plupart ne sont pas enregistrés, ne savent pas à quel service s'adresser, mélangent l'argent de l'entreprise et celui du ménage, et notent peu de choses par écrit. Certains ont déjà payé de faux intermédiaires ou entendu des conseils confus.",
    gap: "Sans enregistrement ni comptes simples, beaucoup de petites entreprises ne peuvent pas ouvrir de compte bancaire professionnel, gagner des contrats, vendre sur certaines plateformes ni demander un appui. D'autres s'enregistrent une fois, puis prennent du retard sur les renouvellements ou les déclarations et paient des pénalités. Les apprenants doivent choisir une forme, s'enregistrer par le canal officiel, savoir quel numéro fiscal et quelles autorisations s'appliquent, et garder leurs comptes et leurs dates en ordre.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; beaucoup d'apprenants ont l'anglais comme deuxième langue (le cours existe aussi en français et en arabe)",
      "Appareils : un téléphone simple, parfois un ordinateur de cybercafé ; les données mobiles coûtent cher",
      "Règles : les formes d'entreprise, les frais, les impôts et les autorisations varient selon les pays et changent ; le cours ne donne jamais de frais ni de délais et renvoie toujours au service officiel",
      "Sécurité : de faux intermédiaires et de faux sites d'enregistrement existent ; les apprenants n'utilisent que les sites officiels et ne partagent jamais de mot de passe ni de code PIN",
      "Ce n'est pas un conseil juridique ou fiscal : les apprenants vérifient leur cas auprès du registre, de l'administration fiscale ou d'un professionnel qualifié"
    ],
    prerequisites: "Avoir ou préparer une petite activité. Savoir additionner et soustraire."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "Selon la taille, les propriétaires et les risques de votre entreprise", action: "choisir une forme d'entreprise, comme une entreprise individuelle ou une société à responsabilité limitée, et écrire pourquoi elle vous convient", standard: "en citant un avantage et une obligation de la forme choisie" },
    { id: "O2", condition: "Selon le pays où vous faites du commerce", action: "identifier le registre officiel des entreprises et ouvrir son site officiel ou vous rendre à son bureau", standard: "sans passer par un intermédiaire non officiel ni un faux site" },
    { id: "O3", condition: "Avant de commencer un enregistrement", action: "préparer une liste pour l'enregistrement avec trois choix de nom, les informations sur les propriétaires, l'activité, l'adresse et les documents", standard: "pour pouvoir remplir la demande en une seule fois" },
    { id: "O4", condition: "Pour votre entreprise et votre ville", action: "noter le numéro fiscal, l'autorisation commerciale locale et toute autorisation sectorielle qui s'appliquent, et où obtenir chacun", standard: "en ayant vérifié le service officiel pour chacun" },
    { id: "O5", condition: "Pendant une semaine d'activité", action: "noter chaque vente et chaque dépense dans un cahier de caisse simple, séparé de l'argent du ménage", standard: "avec des totaux justes pour les entrées et les sorties de la semaine" },
    { id: "O6", condition: "Une fois votre entreprise enregistrée", action: "établir un calendrier annuel des renouvellements, des déclarations et des dates d'autorisation", standard: "avec chaque date vérifiée sur le site officiel et un rappel programmé avant" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Choisir et s'enregistrer",
      lessons: [
        {
          title: "Pourquoi s'enregistrer, et quelle forme d'entreprise vous convient",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choisir une forme d'entreprise adaptée à votre activité et écrire pourquoi.",
          text: [
            "S'enregistrer, c'est dire à l'État que votre entreprise existe et lui donner un nom officiel. Les avantages peuvent être un compte bancaire professionnel, des contrats avec des sociétés et l'État, la vente sur certaines plateformes, la confiance des clients, et l'accès aux prêts et aux programmes d'appui. Les obligations peuvent être de tenir des comptes, de renouveler, de faire des déclarations et de payer l'impôt.",
            "Les formes courantes : l'entreprise individuelle (un seul propriétaire, souvent enregistrée sous un nom commercial) ; le partenariat ou la société de personnes (deux propriétaires ou plus qui partagent les bénéfices et les dettes) ; et la société à responsabilité limitée (une personne morale distincte : la maison et l'épargne des propriétaires sont mieux protégées des dettes de l'entreprise, mais il y a plus de formalités). Les noms changent selon les pays : le Nigeria et le Ghana enregistrent des noms commerciaux et des sociétés ; au Kenya, le Business Registration Service s'occupe des noms commerciaux et des sociétés.",
            "Dans les 17 pays de l'OHADA (une organisation qui harmonise le droit des affaires), dont le Sénégal, la Côte d'Ivoire, le Cameroun, le Mali, le Burkina Faso et la RD Congo, le droit des affaires est commun. Un petit commerçant peut s'enregistrer en entreprise individuelle ou créer une société, par exemple une SARL. Au Maroc, beaucoup de petits vendeurs utilisent le statut d'auto-entrepreneur.",
            "La plupart des commerçants de marché et des artisans commencent en entreprise individuelle ou avec un nom commercial. Une société peut convenir si vous avez des associés, de plus gros contrats ou de plus gros risques. Pour une décision importante, demandez au registre ou à un comptable ou un avocat qualifié."
          ],
          steps: ["Écrivez qui possède l'entreprise : vous seul ou avec d'autres.", "Écrivez le plus gros risque : dettes, accidents, gros contrats.", "Comparez une entreprise individuelle (nom commercial), un partenariat et une société.", "Choisissez-en une et écrivez un avantage et une obligation."],
          words: [["Entreprise individuelle", "une entreprise qui appartient à une seule personne et qu'elle dirige ; cette personne répond elle-même des dettes."], ["Société à responsabilité limitée", "une entreprise qui est sa propre personne morale : les biens personnels des propriétaires sont mieux protégés de ses dettes."], ["OHADA", "une organisation de 17 pays africains qui partagent le même droit des affaires, surtout en Afrique de l'Ouest et du Centre."]],
          slides: [
            { title: "Pourquoi s'enregistrer ?", bullets: ["Compte bancaire professionnel et contrats", "Plateformes de vente, prêts et programmes d'appui", "Confiance des clients", "Obligations : comptes, renouvellements, déclarations, impôts"] },
            { title: "Trois formes courantes", bullets: ["Entreprise individuelle / nom commercial : un propriétaire", "Partenariat : deux propriétaires ou plus", "Société à responsabilité limitée : personne morale distincte, plus de formalités"] },
            { title: "Afrique francophone et du Nord", bullets: ["17 pays de l'OHADA partagent le droit des affaires", "Entreprise individuelle ou société, par exemple une SARL", "Maroc : statut d'auto-entrepreneur"] },
            { title: "Bien choisir", bullets: ["La plupart des petits commerçants commencent avec un nom commercial", "Société : associés, gros contrats, gros risques", "Décision importante ? Demandez au registre ou à un professionnel"] }
          ],
          tryIt: "Écrivez qui possède votre entreprise et son plus gros risque. Puis choisissez une forme d'entreprise et écrivez un avantage et une obligation de cette forme.",
          youCanNow: "comparer les formes d'entreprise courantes et choisir celle qui convient à votre activité.",
          quickCheck: [
            { objective: "O1", q: "Fatima vend du tissu seule sur un marché de Kano. Par quelle forme la plupart des commerçants comme elle commencent-ils ?", options: ["Une grande société cotée", "Un nom commercial en entreprise individuelle", "Un service de l'État", "Une association caritative"], answer: 1, why: "Un seul propriétaire avec une petite activité commence en général avec un nom commercial." },
            { objective: "O1", q: "Quelle est une raison principale de choisir une société à responsabilité limitée ?", options: ["Elle n'a aucune formalité", "Elle ne paie jamais d'impôt", "Elle protège mieux les biens personnels des propriétaires contre les dettes de l'entreprise", "Elle ne peut pas ouvrir de compte bancaire"], answer: 2, why: "Une société est une personne morale distincte, ce qui limite le risque personnel des propriétaires." }
          ],
          sources: [OHADA, MA_AE]
        },
        {
          title: "Trouver le registre officiel et éviter les faux intermédiaires",
          objectives: ["O2"],
          minutes: 5,
          goal: "Trouver le registre officiel des entreprises de votre pays et ouvrir son site officiel.",
          text: [
            "Chaque pays a un service officiel qui enregistre les entreprises. Kenya : le Business Registration Service (BRS), en ligne via eCitizen. Nigeria : la Corporate Affairs Commission (CAC). Ghana : l'Office of the Registrar of Companies (ORC). Sénégal : l'APIX, le guichet unique de création d'entreprise. Côte d'Ivoire : le CEPICI. Au Maroc, le statut d'auto-entrepreneur a son propre portail national.",
            "N'utilisez que le site ou le bureau officiel. Les sites officiels de l'État finissent souvent par la terminaison gouvernementale du pays, comme .go.ke, .gov.ng ou .gov.gh. Il existe de faux sites qui imitent les vrais et des personnes qui proposent un enregistrement \"rapide\" ou \"gratuit\" ; le site du BRS au Kenya met lui-même en garde contre les fausses offres d'enregistrement \"gratuit\".",
            "Vous pouvez payer un intermédiaire agréé ou un avocat pour vous aider, mais vérifiez qu'il est réel, demandez un reçu officiel et assurez-vous que l'entreprise est enregistrée à votre nom. Ne donnez jamais à personne le mot de passe de votre compte eCitizen, CAC ou autre, ni un code à usage unique envoyé sur votre téléphone.",
            "Si un site ne s'ouvre pas, réessayez plus tard ou allez au bureau du registre ou dans un centre de services de l'État. Ne payez pas un inconnu à la place."
          ],
          steps: ["Écrivez le registre de votre pays d'après la liste de cette leçon.", "Tapez l'adresse vous-même ; ne cliquez pas sur les liens de messages inconnus.", "Vérifiez la fin de l'adresse, comme .go.ke, .gov.ng ou .gov.gh.", "Si vous passez par un intermédiaire, vérifiez qu'il est réel et demandez un reçu officiel.", "Ne partagez jamais votre mot de passe ni votre code à usage unique."],
          words: [["Registre", "le service de l'État qui inscrit les entreprises et les sociétés."], ["Faux site", "un site créé pour ressembler à un site officiel, souvent pour vous prendre de l'argent."], ["Code à usage unique", "un code court envoyé sur votre téléphone pour confirmer que c'est bien vous ; ne le partagez jamais."]],
          slides: [
            { title: "Registres officiels", bullets: ["Kenya : BRS via eCitizen", "Nigeria : Corporate Affairs Commission (CAC)", "Ghana : Registrar of Companies (ORC)", "Sénégal : APIX ; Côte d'Ivoire : CEPICI"] },
            { title: "N'utilisez que le site officiel", bullets: ["Tapez l'adresse vous-même", "Vérifiez les terminaisons comme .go.ke, .gov.ng, .gov.gh", "Méfiez-vous des offres d'enregistrement \"rapide\" ou \"gratuit\""] },
            { title: "Si vous passez par un intermédiaire", bullets: ["Vérifiez qu'il est réel", "Demandez un reçu officiel", "L'entreprise doit être à VOTRE nom"] },
            { title: "Ne partagez jamais", bullets: ["Le mot de passe de votre compte", "Un code à usage unique envoyé sur votre téléphone"] }
          ],
          tryIt: "Trouvez le registre des entreprises de votre pays. Tapez vous-même l'adresse de son site, vérifiez la terminaison, puis notez l'adresse et un service qu'il propose.",
          youCanNow: "trouver le registre officiel des entreprises de votre pays et distinguer un vrai site d'un faux.",
          quickCheck: [
            { objective: "O2", q: "Où enregistre-t-on un nom commercial au Nigeria ?", options: ["À la Corporate Affairs Commission (CAC)", "Dans un groupe WhatsApp", "Dans n'importe quelle banque", "Au commissariat de police"], answer: 0, why: "La CAC enregistre les noms commerciaux, les sociétés et les associations au Nigeria." },
            { objective: "O2", q: "Un message propose un \"enregistrement gratuit en 1 heure\" par un lien. Que faites-vous ?", options: ["Je clique et je paie vite", "J'envoie mon mot de passe", "Je le transfère à mes amis", "J'ignore le lien et je tape moi-même l'adresse du registre officiel"], answer: 3, why: "Les fausses offres utilisent des liens ; le site officiel que vous tapez vous-même est sûr." }
          ],
          sources: [BRS, CAC, ORC, APIX, CEPICI, MA_AE]
        },
        {
          title: "Préparer votre liste pour l'enregistrement",
          objectives: ["O3"],
          minutes: 5,
          goal: "Préparer une liste pour l'enregistrement afin de faire la demande en une seule fois.",
          text: [
            "Les formulaires en ligne peuvent expirer, et les données mobiles coûtent de l'argent. Préparez tout d'abord, puis faites la demande en une seule fois.",
            "La plupart des registres demandent des choses semblables : trois noms possibles (au cas où votre premier choix est déjà pris ; le BRS au Kenya demande trois choix), le nom complet des propriétaires et les informations de leur carte d'identité ou passeport, le téléphone et l'e-mail, l'adresse ou l'emplacement de l'entreprise, une courte description de l'activité, et parfois une photo d'identité ou une signature. Une société a aussi besoin de dirigeants, d'actionnaires et de statuts. La liste exacte se trouve sur le site du registre.",
            "Choisissez des noms clairs, que personne n'utilise déjà et qui ne copient pas une marque connue. Exemple : Kofi, à Takoradi, note \"Kofi Fresh Fish Supplies\", \"Takoradi Fresh Catch\" et \"Sea Gold Fish Supplies\".",
            "Notez les frais affichés sur le site officiel au moment de votre demande, et le moyen de paiement. Gardez chaque reçu et le certificat d'enregistrement, sur papier et en photo dans un endroit sûr."
          ],
          steps: ["Écrivez trois choix de nom.", "Notez le nom des propriétaires, les informations d'identité, le téléphone et l'e-mail.", "Écrivez l'adresse ou l'emplacement et l'activité de l'entreprise.", "Lisez la liste du registre lui-même pour les documents en plus.", "Notez les frais actuels et le moyen de paiement d'après le site officiel.", "Faites la demande en une seule fois et gardez chaque reçu et le certificat."],
          words: [["Recherche / réservation de nom", "vérifier qu'un nom commercial est libre et le réserver pour vous pendant l'enregistrement."], ["Certificat d'enregistrement", "le document officiel qui prouve que votre entreprise est enregistrée."], ["Dirigeant", "une personne qui dirige une société et qui a des obligations légales envers elle."]],
          slides: [
            { title: "Préparez d'abord, déposez une fois", bullets: ["Les formulaires peuvent expirer", "Les données coûtent de l'argent", "Ayez tout sous la main"] },
            { title: "Ce qu'on demande souvent", bullets: ["Trois choix de nom", "Noms, pièce d'identité, téléphone et e-mail des propriétaires", "Adresse et activité de l'entreprise", "Société : dirigeants et actionnaires"] },
            { title: "Bons noms", bullets: ["Clairs et pas déjà utilisés", "Ne copiez pas une marque connue", "Consultez la liste du registre lui-même"] },
            { title: "Après la demande", bullets: ["Notez les frais du site officiel", "Gardez chaque reçu", "Gardez le certificat, sur papier et en photo"] }
          ],
          tryIt: "Écrivez votre liste pour l'enregistrement : trois choix de nom, les informations sur les propriétaires (sans écrire votre numéro d'identité dans un endroit partagé), l'adresse, l'activité, les documents et le site web du registre.",
          youCanNow: "préparer une liste pour l'enregistrement afin de faire la demande en une seule fois.",
          quickCheck: [
            { objective: "O3", q: "Pourquoi préparer trois choix de nom ?", options: ["La loi exige trois entreprises", "Au cas où votre premier choix est déjà pris", "Pour embrouiller les faux intermédiaires", "Pour payer moins d'impôt"], answer: 1, why: "Si votre premier nom est pris, le choix suivant vous évite une deuxième demande." },
            { objective: "O3", q: "Où trouver la liste exacte des documents que demande votre registre ?", options: ["Dans les souvenirs d'un voisin", "Dans un commentaire sur les réseaux sociaux", "Sur le site officiel ou au bureau du registre", "Dans une publicité d'un intermédiaire inconnu"], answer: 2, why: "Les exigences changent, et seul le registre en est sûr." }
          ],
          sources: [BRS, ORC]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Choisir et s'enregistrer",
        questions: [
          { objective: "O1", q: "Deux amis ouvrent ensemble un service de traiteur et partagent les bénéfices. À quelle forme cela ressemble-t-il le plus ?", options: ["Entreprise individuelle", "Service de l'État", "Un partenariat ou une société", "Une association caritative"], answer: 2, why: "Deux propriétaires ou plus qui partagent les bénéfices forment un partenariat, ou peuvent créer une société." },
          { objective: "O1", q: "Au Sénégal et en Côte d'Ivoire, le droit des affaires vient :", options: ["Seulement des règles propres à chaque ville", "De l'OHADA, commune à 17 pays", "De la plateforme où vous vendez", "De votre banque"], answer: 1, why: "Les actes uniformes de l'OHADA s'appliquent dans ses pays membres." },
          { objective: "O2", q: "Quelle fin d'adresse web est le signe d'un site de l'État kényan ?", options: [".go.ke", ".win", ".shop", ".xyz"], answer: 0, why: "Les sites de l'État kényan finissent en général par .go.ke." },
          { objective: "O2", q: "Un intermédiaire propose d'enregistrer votre entreprise. Que devez-vous vérifier ?", options: ["Qu'il a un beau bureau", "Qu'il est rapide", "Qu'il n'accepte que l'argent liquide", "Qu'il est réel, donne un reçu officiel et enregistre l'entreprise à votre nom"], answer: 3, why: "Un intermédiaire réel, un reçu officiel et votre propre nom sur l'entreprise vous protègent." },
          { objective: "O3", q: "Que devez-vous garder après l'enregistrement ?", options: ["Rien", "Seulement un SMS", "Le certificat d'enregistrement et chaque reçu, sur papier et en photo", "La parole de l'intermédiaire"], answer: 2, why: "Vous aurez besoin du certificat et des reçus pour la banque, les renouvellements et les contrats." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Bien gérer son entreprise",
      lessons: [
        {
          title: "Numéro fiscal et autorisations locales",
          objectives: ["O4"],
          minutes: 6,
          goal: "Noter le numéro fiscal et les autorisations dont votre entreprise a besoin, et où obtenir chacun.",
          text: [
            "Enregistrer le nom n'est souvent que la première étape. La plupart des entreprises ont aussi besoin d'un numéro d'identification fiscale, d'une autorisation commerciale locale et, pour certains métiers, d'une autorisation sectorielle.",
            "Numéro fiscal : au Kenya, le KRA PIN de la Kenya Revenue Authority (l'administration fiscale), que vous obtenez sur iTax ; il est demandé pour enregistrer une entreprise et pour beaucoup d'autres démarches. Au Nigeria, l'administration fiscale fédérale est le Nigeria Revenue Service (NRS), et chaque État a son propre service des recettes. Au Ghana, la Ghana Revenue Authority (GRA) utilise votre TIN ou le PIN de votre Ghana Card, et propose un régime fiscal modifié pour les petites entreprises. Demandez au service des impôts quel impôt pour petite entreprise s'applique à vous.",
            "Autorisation locale : beaucoup de villes et de comtés exigent une autorisation de commerce ou une patente, à renouveler régulièrement. Au Kenya, elle vient du gouvernement de votre comté ; au Nigeria, de l'État ou de l'administration locale ; au Ghana, de l'assemblée de district ou municipale. Autorisations sectorielles : les vendeurs de nourriture, les salons de coiffure, les cliniques, le transport et d'autres peuvent avoir besoin d'un certificat sanitaire ou d'une licence d'un organisme du secteur.",
            "Renseignez-vous auprès de l'administration locale ou d'un centre d'appui aux entreprises comme SMEDAN au Nigeria. Notez chaque exigence, le service et la date de votre vérification. Votre numéro d'identité ou votre numéro fiscal est privé : ne le publiez pas et ne l'envoyez pas à des inconnus."
          ],
          steps: ["Trouvez votre administration fiscale et demandez comment une petite entreprise obtient un numéro fiscal.", "Demandez à votre comté, votre État, votre administration locale ou votre assemblée pour l'autorisation de commerce.", "Demandez si votre métier exige un certificat sanitaire ou une licence sectorielle.", "Notez chacun, le service et la date de votre vérification."],
          words: [["Numéro d'identification fiscale (TIN)", "le numéro que vous donne le service des impôts pour déclarer et payer l'impôt ; au Kenya, c'est le KRA PIN."], ["Autorisation de commerce", "la permission de votre administration locale d'exercer une activité dans cette zone."], ["Autorisation sectorielle", "une licence pour certains métiers, comme l'alimentation, la santé ou le transport."]],
          slides: [
            { title: "Après le nom : trois vérifications de plus", bullets: ["Numéro fiscal", "Autorisation de commerce locale", "Autorisation sectorielle pour certains métiers"] },
            { title: "Numéros fiscaux", bullets: ["Kenya : KRA PIN sur iTax", "Nigeria : Nigeria Revenue Service et service des recettes de l'État", "Ghana : GRA, TIN ou PIN de la Ghana Card"] },
            { title: "Autorisations locales et sectorielles", bullets: ["Comté, État, administration locale ou assemblée", "Alimentation, coiffure, transport : parfois plus", "Demandez à un centre d'appui aux entreprises"] },
            { title: "Notez-le", bullets: ["Chaque exigence et son service", "La date de votre vérification", "Gardez vos numéros d'identité et fiscal privés"] }
          ],
          tryIt: "Faites un tableau de trois lignes : numéro fiscal, autorisation locale, autorisation sectorielle. Pour chacune, écrivez le service, son site web ou son adresse, et si elle s'applique à vous. Vérifiez au moins une ligne auprès du service cette semaine.",
          youCanNow: "noter le numéro fiscal et les autorisations dont votre entreprise a besoin et le service pour chacun.",
          quickCheck: [
            { objective: "O4", q: "Au Kenya, comment obtient-on un KRA PIN ?", options: ["Auprès d'un comité de marché", "Sur iTax, auprès de la Kenya Revenue Authority", "Auprès du directeur de votre banque", "Auprès d'un intermédiaire sur WhatsApp"], answer: 1, why: "La KRA délivre le PIN par son système iTax." },
            { objective: "O4", q: "Grace ouvre un stand de nourriture à Accra. En plus de l'enregistrement, sur quoi doit-elle se renseigner ?", options: ["Sur rien d'autre", "Sur un permis de conduire", "Sur une autorisation de commerce et tout certificat alimentaire ou sanitaire", "Sur un passeport"], answer: 2, why: "Les autorisations locales et les règles d'hygiène alimentaire s'appliquent souvent aux vendeurs de nourriture." }
          ],
          sources: [KRA, NRS, GRA, SMEDAN]
        },
        {
          title: "Un cahier de caisse simple : séparer l'argent de l'entreprise",
          objectives: ["O5"],
          minutes: 5,
          goal: "Noter chaque vente et chaque dépense dans un cahier de caisse simple pendant une semaine.",
          text: [
            "Les comptes montrent si vous gagnez vraiment de l'argent. Ils aident aussi pour les impôts, les prêts et les renouvellements. Commencez simplement : un cahier ou une page de notes sur le téléphone.",
            "Un cahier de caisse a quatre colonnes : date, ce qui s'est passé, entrées d'argent, sorties d'argent. Notez chaque vente et chaque dépense le jour même, y compris le mobile money. À la fin de la journée ou de la semaine, additionnez les entrées, additionnez les sorties, puis soustrayez l'une de l'autre. Exemple à Douala : le lundi, Paul vend 12 coques de téléphone pour 24 000 XAF et achète du stock pour 15 000 XAF ; les entrées moins les sorties font 9 000 XAF (chiffres d'exemple).",
            "Séparez l'argent de l'entreprise de celui du ménage. Si vous prenez de l'argent pour la nourriture ou les frais de scolarité, notez-le comme \"prélèvement du propriétaire\" pour pouvoir le voir. Une ligne ou un compte de mobile money réservé à l'entreprise rend cela plus facile. Gardez les reçus dans une enveloppe ou prenez-les en photo."
          ],
          steps: ["Tracez quatre colonnes : date, ce qui s'est passé, entrées, sorties.", "Notez chaque vente et chaque dépense le jour même.", "Notez l'argent pris pour la maison comme \"prélèvement du propriétaire\".", "À la fin de la semaine, additionnez chaque colonne et trouvez la différence.", "Gardez les reçus dans une enveloppe ou en photo."],
          words: [["Cahier de caisse", "un relevé simple de l'argent qui entre dans l'entreprise et qui en sort."], ["Prélèvement du propriétaire", "l'argent que le propriétaire retire de l'entreprise pour son usage personnel."]],
          slides: [
            { title: "Pourquoi tenir des comptes", bullets: ["Voir si vous gagnez vraiment de l'argent", "Utiles pour les impôts, les prêts et les renouvellements"] },
            { title: "Quatre colonnes", bullets: ["Date", "Ce qui s'est passé", "Entrées", "Sorties"] },
            { title: "Séparez l'argent de l'entreprise", bullets: ["Notez les dépenses de la maison comme \"prélèvement du propriétaire\"", "Une ligne de mobile money séparée aide", "Gardez les reçus ou leurs photos"] }
          ],
          tryIt: "Commencez un cahier de caisse aujourd'hui. Notez chaque vente et chaque dépense pendant une semaine, y compris l'argent pris pour la maison. Le dernier jour, additionnez chaque colonne et écrivez la différence.",
          youCanNow: "tenir un cahier de caisse simple et séparer l'argent de l'entreprise de celui du ménage.",
          quickCheck: [
            { objective: "O5", q: "Quelles sont les quatre colonnes d'un cahier de caisse simple ?", options: ["Date, ce qui s'est passé, entrées, sorties", "Nom, âge, ville, téléphone", "Prix, couleur, taille, marque", "Du lundi au jeudi"], answer: 0, why: "Ces quatre colonnes montrent chaque mouvement d'argent." },
            { objective: "O5", q: "Vous prenez 2 000 NGN dans la caisse pour la nourriture à la maison. Que notez-vous ?", options: ["Rien", "Une vente", "Un nouveau client", "\"Prélèvement du propriétaire 2 000 NGN\" dans les sorties"], answer: 3, why: "Noter ce que prend le propriétaire garde les comptes justes." }
          ]
        },
        {
          title: "Rester enregistré : renouvellements, déclarations et calendrier annuel",
          objectives: ["O6"],
          minutes: 5,
          goal: "Établir un calendrier annuel des renouvellements, des déclarations et des dates d'autorisation.",
          text: [
            "S'enregistrer une fois n'est pas la fin. Beaucoup d'entreprises doivent renouveler, déposer des déclarations annuelles ou fiscales, et renouveler leurs autorisations locales. Manquer une date peut entraîner des pénalités ou la perte de l'enregistrement.",
            "Exemples : l'ORC au Ghana indique que les déclarations annuelles sont obligatoires pour toutes les sociétés constituées, et que les noms commerciaux peuvent être renouvelés en ligne, y compris en composant *222#. La CAC au Nigeria supervise les déclarations annuelles. La KRA au Kenya attend des déclarations des personnes qui ont des obligations fiscales. Les autorisations locales durent souvent un an. Les dates et les frais exacts varient : vérifiez chacun sur le site officiel ou au bureau.",
            "Faites un calendrier annuel : écrivez chaque obligation, le service, le mois d'échéance et la date de votre vérification. Programmez un rappel sur votre téléphone un mois avant. Tenez votre cahier de caisse à jour, car les déclarations utilisent ces chiffres.",
            "Si vous ne savez pas ce qui s'applique à vous, demandez au registre, au service des impôts, à un centre d'appui aux entreprises ou à un comptable qualifié. Si quelqu'un appelle pour dire que votre enregistrement sera annulé aujourd'hui si vous ne le payez pas tout de suite, vérifiez d'abord vous-même auprès du registre."
          ],
          steps: ["Listez chaque obligation : renouvellement, déclaration annuelle, déclaration fiscale, renouvellement d'autorisation.", "Vérifiez chaque date et chaque service sur le site officiel.", "Écrivez-les dans un calendrier de 12 mois.", "Programmez un rappel sur le téléphone un mois avant chaque date.", "Vérifiez vous-même auprès du registre toute demande de paiement pressante."],
          words: [["Déclaration annuelle", "un rapport annuel au registre qui confirme que votre entreprise existe toujours et que ses informations sont justes."], ["Renouvellement", "payer ou déposer de nouveau pour qu'un enregistrement ou une autorisation reste valable."], ["Pénalité", "une amende pour un retard ou une règle non respectée."]],
          slides: [
            { title: "L'enregistrement n'est pas la fin", bullets: ["Renouvellements et déclarations annuelles", "Déclarations fiscales", "Renouvellement des autorisations locales"] },
            { title: "Exemples", bullets: ["ORC au Ghana : déclarations annuelles des sociétés ; noms renouvelés par *222#", "CAC au Nigeria : déclarations annuelles", "KRA au Kenya : déclarations si vous avez des obligations fiscales"] },
            { title: "Votre calendrier annuel", bullets: ["Obligation, service, mois d'échéance", "Date de votre vérification", "Rappel sur le téléphone un mois avant"] },
            { title: "Restez prudent", bullets: ["Un doute ? Demandez au service ou à un comptable", "Appels \"payez tout de suite\" : vérifiez vous-même auprès du registre"] }
          ],
          tryIt: "Tâche finale : rassemblez votre liste d'enregistrement avec la forme d'entreprise, le registre, les choix de nom, les documents, le numéro fiscal et les autorisations, votre plan de cahier de caisse et un calendrier de 12 mois des renouvellements et déclarations avec les rappels programmés.",
          youCanNow: "prévoir vos renouvellements et déclarations de chaque année pour que votre entreprise reste enregistrée et en règle.",
          quickCheck: [
            { objective: "O6", q: "Quand faut-il programmer un rappel pour un renouvellement ?", options: ["Après la date", "Jamais", "Environ un mois avant l'échéance", "Seulement si quelqu'un vous appelle"], answer: 2, why: "Un rappel un mois avant vous laisse le temps de vous préparer et de payer." },
            { objective: "O6", q: "Un homme appelle et dit que votre entreprise sera annulée aujourd'hui si vous ne le payez pas tout de suite. Que faites-vous ?", options: ["Je vérifie moi-même auprès du registre avant de payer qui que ce soit", "Je le paie vite", "J'envoie mon mot de passe", "Je ferme l'entreprise"], answer: 0, why: "Les demandes de paiement pressantes sont un signe d'arnaque ; le registre lui-même peut vous dire où en est votre dossier." }
          ],
          sources: [ORC, CAC, KRA]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Bien gérer son entreprise",
        questions: [
          { objective: "O4", q: "En plus d'enregistrer le nom, beaucoup d'entreprises ont aussi besoin :", options: ["D'un numéro fiscal et d'une autorisation de commerce locale", "De rien du tout", "D'un nouveau téléphone", "D'un compte sur une plateforme de vente"], answer: 0, why: "Les numéros fiscaux et les autorisations locales sont séparés de l'enregistrement du nom." },
          { objective: "O4", q: "Où se renseigner sur une autorisation de commerce au Kenya ?", options: ["Auprès d'un agent de mobile money", "Auprès du gouvernement de votre comté", "Dans une école", "À une station de radio"], answer: 1, why: "Les comtés kényans délivrent les autorisations d'activité pour leur zone." },
          { objective: "O5", q: "Pourquoi séparer l'argent de l'entreprise de celui du ménage ?", options: ["C'est plus amusant", "Pour que la banque vous paie", "Pour voir si l'entreprise gagne vraiment de l'argent", "Pour ne pas payer d'impôt"], answer: 2, why: "Mélanger l'argent cache si l'entreprise gagne ou non." },
          { objective: "O5", q: "Votre semaine montre 40 000 KES d'entrées et 31 000 KES de sorties. La différence est :", options: ["71 000 KES", "31 000 KES", "40 000 KES", "9 000 KES"], answer: 3, why: "40 000 moins 31 000 font 9 000." },
          { objective: "O6", q: "Qu'est-ce qu'une déclaration annuelle ?", options: ["Un rapport annuel au registre qui confirme que l'entreprise et ses informations sont à jour", "Un remboursement des clients", "Des vacances", "Un prêt bancaire"], answer: 0, why: "Les déclarations annuelles gardent à jour le dossier de votre entreprise au registre." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Enregistrer et gérer une petite entreprise en Afrique",
    questions: [
      { objective: "O1", q: "Quel est un avantage de l'enregistrement d'une entreprise ?", options: ["Ne jamais payer d'impôt", "Ouvrir un compte bancaire professionnel et gagner des contrats", "Ne pas avoir besoin de comptes", "N'avoir aucune obligation"], answer: 1, why: "L'enregistrement ouvre l'accès aux comptes bancaires, aux contrats et aux programmes, avec aussi des obligations." },
      { objective: "O1", q: "Une entreprise individuelle, c'est :", options: ["Une entreprise qui appartient à une seule personne", "Un service de l'État", "Une société avec beaucoup d'actionnaires", "Un groupe d'épargne"], answer: 0, why: "Un seul propriétaire, qui répond lui-même de l'entreprise." },
      { objective: "O1", q: "Au Maroc, beaucoup de petits vendeurs utilisent :", options: ["Une société cotée", "Seulement la SARL de l'OHADA", "Le statut d'auto-entrepreneur", "Aucun enregistrement, jamais"], answer: 2, why: "Le Maroc a un statut d'auto-entrepreneur pour les petites activités." },
      { objective: "O1", q: "À qui demander avant une décision importante sur la forme de votre entreprise ?", options: ["À un inconnu en ligne", "À personne", "À un vendeur du marché", "Au registre ou à un comptable ou un avocat qualifié"], answer: 3, why: "Le registre ou un professionnel peut vous conseiller pour votre propre cas." },
      { objective: "O2", q: "Au Ghana, les noms commerciaux sont enregistrés par :", options: ["L'Office of the Registrar of Companies (ORC)", "Seulement la Ghana Revenue Authority", "Un agent de mobile money", "Une église"], answer: 0, why: "L'ORC enregistre les noms commerciaux et les sociétés au Ghana." },
      { objective: "O2", q: "Au Kenya, on enregistre une entreprise en ligne via :", options: ["Une page Facebook", "eCitizen, avec le Business Registration Service", "Un groupe WhatsApp privé", "L'application de votre banque"], answer: 1, why: "L'enregistrement au BRS se fait en ligne via eCitizen." },
      { objective: "O2", q: "Quelle est la façon la plus sûre d'arriver sur le site du registre ?", options: ["Cliquer sur un lien dans un SMS inconnu", "Utiliser une publicité qui s'ouvre toute seule", "Taper vous-même l'adresse officielle et vérifier la terminaison", "Demander à un inconnu de le faire avec votre mot de passe"], answer: 2, why: "Taper l'adresse vous-même évite les faux sites." },
      { objective: "O3", q: "Avant de commencer un enregistrement en ligne, vous devez :", options: ["Préparer d'abord tous les noms, informations et documents", "Commencer et espérer que tout ira bien", "Partager votre mot de passe avec un intermédiaire", "Payer un inconnu"], answer: 0, why: "Être prêt permet de finir en une seule fois et d'économiser des données." },
      { objective: "O3", q: "Un bon nom d'entreprise est :", options: ["La copie d'une marque connue", "Clair et pas déjà utilisé par une autre entreprise", "Très long et difficile à écrire", "Le même que celui de votre voisin"], answer: 1, why: "Un nom clair et libre a plus de chances d'être accepté." },
      { objective: "O3", q: "Où trouver les frais d'enregistrement actuels ?", options: ["Sur une vieille affiche", "Dans une rumeur", "En devinant", "Sur le site officiel ou au bureau du registre"], answer: 3, why: "Les frais changent : seule la source officielle est sûre." },
      { objective: "O4", q: "Le KRA PIN, c'est :", options: ["Un code PIN de mobile money", "Un mot de passe à partager", "Le numéro d'identification fiscale du Kenya", "Une autorisation de commerce"], answer: 2, why: "Le KRA PIN est votre numéro fiscal auprès de la Kenya Revenue Authority." },
      { objective: "O4", q: "L'administration fiscale fédérale du Nigeria est :", options: ["Le Nigeria Revenue Service (NRS)", "La Corporate Affairs Commission", "SMEDAN", "Le syndicat de votre marché"], answer: 0, why: "Le NRS est l'administration fiscale fédérale du Nigeria ; les États ont leurs propres services des recettes." },
      { objective: "O4", q: "Un salon de coiffure ou un stand de nourriture peut aussi avoir besoin :", options: ["D'une licence de pilote", "De rien de plus", "D'un diplôme universitaire", "D'un certificat sanitaire ou d'une licence sectorielle"], answer: 3, why: "Certains métiers exigent des autorisations sectorielles pour la santé et la sécurité." },
      { objective: "O5", q: "Un cahier de caisse enregistre :", options: ["Les anniversaires des clients", "Les entrées et les sorties d'argent, avec les dates", "Seulement les grosses ventes", "Seulement les prêts bancaires"], answer: 1, why: "Il enregistre chaque mouvement d'argent, avec la date et ce qui s'est passé." },
      { objective: "O5", q: "Quand noter une vente dans le cahier de caisse ?", options: ["Une fois par an", "Seulement quand vous y pensez", "Le jour même", "Jamais pour le mobile money"], answer: 2, why: "Noter le jour même garde les comptes complets et justes." },
      { objective: "O5", q: "L'argent que vous prenez dans l'entreprise pour les frais de scolarité se note comme :", options: ["\"Prélèvement du propriétaire\" dans les sorties", "Une vente", "Rien", "Un cadeau d'un client"], answer: 0, why: "Noter ce que prend le propriétaire garde bien séparés l'argent de l'entreprise et celui de la maison." },
      { objective: "O6", q: "L'ORC au Ghana permet de renouveler les noms commerciaux :", options: ["Seulement en personne à l'étranger", "Jamais", "En ligne, y compris en composant *222#", "Par un intermédiaire sur WhatsApp"], answer: 2, why: "L'ORC indique que les renouvellements peuvent se faire en ligne et par *222#." },
      { objective: "O6", q: "Un calendrier annuel des obligations contient :", options: ["Seulement les jours fériés", "Les adresses des clients", "Les matchs de football", "Chaque renouvellement, déclaration et autorisation, son service et son mois d'échéance"], answer: 3, why: "Un seul calendrier garde toutes les obligations et toutes les dates en vue." },
      { objective: "O6", q: "Manquer un renouvellement ou une déclaration annuelle peut entraîner :", options: ["Un cadeau", "Des pénalités ou la perte de l'enregistrement", "Des prix plus bas", "Rien, jamais"], answer: 1, why: "Les dépôts en retard peuvent entraîner des amendes ou la radiation du registre." },
      { objective: "O6", q: "Avant chaque échéance, vous devez :", options: ["Vérifier la date sur le site officiel et programmer un rappel", "Attendre qu'on vous appelle pour vous le rappeler", "Payer quiconque vous le demande", "L'ignorer"], answer: 0, why: "Vérifier à la source officielle et programmer un rappel vous garde à l'heure et à l'abri des arnaques." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 1, 5, 7, 10, 12, 13, 17, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Forme d'entreprise", objective: "O1", notYet: "Aucune forme choisie, ou aucune raison donnée.", meets: "Une forme choisie avec un avantage et une obligation, adaptée aux propriétaires et aux risques.", exceeds: "Compare deux formes et dit quand l'entreprise pourrait changer de forme." },
      { name: "Registre officiel", objective: "O2", notYet: "Aucun registre nommé, ou un site ou intermédiaire non officiel.", meets: "Le bon registre officiel et son site officiel ou l'adresse de son bureau.", exceeds: "Indique aussi comment repérer un faux site ou un faux intermédiaire." },
      { name: "Liste pour l'enregistrement", objective: "O3", notYet: "Il manque les choix de nom, les informations sur les propriétaires ou l'activité.", meets: "Trois noms, informations sur les propriétaires, adresse, activité, documents et frais relevés sur le site officiel.", exceeds: "Nomme aussi les documents qu'il faudrait pour une société, ou où garder le certificat en sécurité." },
      { name: "Numéro fiscal et autorisations", objective: "O4", notYet: "Aucun numéro fiscal ni autorisation noté, ou aucun service nommé.", meets: "Numéro fiscal, autorisation locale et toute autorisation sectorielle, chacun avec son service et la date de vérification.", exceeds: "Au moins un a été confirmé auprès du service en personne ou par téléphone." },
      { name: "Cahier de caisse", objective: "O5", notYet: "Pas de cahier de caisse, ou argent de l'entreprise et du ménage mélangés.", meets: "Une semaine de comptes en quatre colonnes, avec les \"prélèvements du propriétaire\" et des totaux hebdomadaires justes.", exceeds: "Une ligne ou un compte d'argent séparé pour l'entreprise et les reçus gardés." },
      { name: "Calendrier annuel", objective: "O6", notYet: "Pas de calendrier, ou des dates devinées.", meets: "Un calendrier de 12 mois des renouvellements, déclarations et autorisations, avec les services, les dates vérifiées et les rappels programmés.", exceeds: "Indique à qui demander (registre, service des impôts ou comptable) pour chaque obligation." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui enregistrent leur entreprise ou obtiennent une autorisation dans les 60 jours (questionnaire de suivi)",
      "Apprenants qui tiennent un cahier de caisse pendant au moins quatre semaines après le cours",
      "Apprenants qui ouvrent un compte bancaire ou de mobile money pour l'entreprise, gagnent un contrat ou rejoignent un programme d'appui dans les six mois"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur de cybercafé avec internet",
      "Un cahier pour la liste, le cahier de caisse et le calendrier",
      "Les adresses des sites officiels de votre registre, de votre administration fiscale et de votre administration locale",
      "Environ 60 minutes au total, en séances courtes, plus une semaine de pratique du cahier de caisse"
    ],
    facilitatorNotes: [
      "Avant le cours, cherchez sur leurs sites officiels le registre, l'administration fiscale et le service des autorisations locales de votre pays et de votre ville, et imprimez les adresses.",
      "Ne recueillez jamais les numéros d'identité, mots de passe ou numéros fiscaux des apprenants ; les listes indiquent ce qu'il faut, pas les numéros eux-mêmes.",
      "Invitez une personne du registre, d'un centre d'appui aux entreprises (par exemple SMEDAN au Nigeria) ou un comptable local pour répondre aux questions.",
      "Ne citez pas de frais ni de délais de mémoire ; montrez aux apprenants comment les vérifier sur le site officiel.",
      "Notez la tâche finale avec la grille d'évaluation, et donnez un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
