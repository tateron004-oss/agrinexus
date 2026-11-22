"use strict";

// Koach Learn course (French translation of africa-life/afr-online-freelancing.js). See scripts/koachlearn-courses/README.md, "Translations".

const THREE_MTT = { name: "3MTT (3 Million Technical Talent), Nigeria : ministère fédéral des Communications, de l'Innovation et de l'Économie numérique, avec la NITDA", url: "https://3mtt.nitda.gov.ng/" };
const AJIRA = { name: "Agence de presse du Kenya : les jeunes invités à rejoindre le programme Ajira Digital (programme public pour le travail en ligne)", url: "https://www.kenyanews.go.ke/youth-urged-to-embrace-ajira-digital-program/" };
const KRA = { name: "Kenya Revenue Authority (KRA), l'administration fiscale du Kenya : impôt sur le revenu, y compris les revenus gagnés en ligne", url: "https://www.kra.go.ke" };
const GRA = { name: "Ghana Revenue Authority (GRA), l'administration fiscale du Ghana", url: "https://gra.gov.gh" };
const SEC_NG = { name: "Nairametrics (14 mai 2026) : la SEC du Nigeria met en garde contre les arnaques promues sur WhatsApp, TikTok et Instagram", url: "https://nairametrics.com/2026/05/14/sec-warns-nigerians-against-rising-ponzi-schemes-on-whatsapp-tiktok-instagram/" };

module.exports = {
  id: "afr-online-freelancing-fr",
  lang: "fr",
  translationOf: "afr-online-freelancing",
  category: "Africa: Life and Work",
  name: "Travail indépendant en ligne et télétravail depuis l'Afrique",
  skills: "Choisir un service à vendre en ligne, Rédiger un profil et créer un petit portfolio, Rédiger une proposition pour une offre de mission, Se mettre d'accord sur le travail et livrer à temps, Se faire payer et tenir ses comptes, Repérer les fausses offres d'emploi et les arnaques au paiement",
  outcome: "transformer une compétence que vous avez déjà en service en ligne : rédiger un profil avec des exemples de travail, rédiger une proposition pour une vraie offre, fixer le travail par écrit, être payé en sécurité, tenir vos comptes et refuser les fausses offres.",
  about: [
    "Partout en Afrique, des jeunes et des adultes gagnent de l'argent en ligne : rédaction, traduction, graphisme, saisie de données, service client, transcription, comptabilité, réseaux sociaux et assistance virtuelle, pour des clients de leur pays et de l'étranger. Certains passent par des plateformes comme Upwork, Fiverr et LinkedIn ; d'autres trouvent leurs clients sur WhatsApp, Facebook et parmi les gens qu'ils connaissent.",
    "Ce cours s'adresse aux personnes qui cherchent du travail, aux étudiants, aux jeunes diplômés, aux mères et aux pères au foyer, et à toute personne qui a un téléphone ou un ordinateur et une compétence. Vous allez choisir un service, rédiger un profil, réunir de petits exemples de travail, rédiger une proposition, vous mettre d'accord sur le travail, vous faire payer et repérer les nombreuses fausses offres qui visent les débutants. Les États proposent aussi des formations gratuites, comme Ajira Digital au Kenya et 3MTT au Nigeria.",
    "Chaque leçon dure environ cinq minutes, avec une activité « Essayez maintenant » à faire sur le téléphone. Un court contrôle suit chaque leçon et chaque chapitre, et un quiz de 20 questions vous attend à la fin. Les frais des plateformes et les moyens de paiement changent et varient d'un pays à l'autre : vous apprendrez à les lire sur les pages d'aide de chaque plateforme."
  ],
  finalTask: "Préparez votre kit de démarrage de travailleur indépendant : une offre de service en une phrase, un profil (titre et courte présentation), deux ou trois petits exemples de travail, une proposition rédigée pour une offre réelle ou un exemple d'offre, et une liste sécurité et paiement (comment vous serez payé, les comptes que vous tiendrez, où vous renseigner sur les impôts, et les signes d'alerte des fausses offres).",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des jeunes et des adultes de toute l'Afrique, en ville comme dans les petites villes : diplômés et jeunes sortis de l'école qui cherchent du travail, salariés qui veulent un revenu en plus, parents qui travaillent depuis la maison, artisans et petits commerçants qui ont des compétences à vendre. Exemples du Kenya, du Nigeria, du Ghana, du Sénégal, de la Côte d'Ivoire, du Cameroun, de l'Égypte et du Maroc ; beaucoup parlent anglais, français ou arabe, ce qui est déjà une compétence à vendre.",
    startingPoint: "Savent utiliser un smartphone, WhatsApp et les réseaux sociaux ; certains ont un ordinateur portable ou vont au cybercafé. La plupart ont une compétence (rédaction, langues, graphisme, saisie, comptabilité, vente) mais ne l'ont jamais présentée comme un service, n'ont jamais rédigé de proposition et n'ont jamais été payés par un client étranger. Beaucoup ont vu des annonces de « travail à domicile » qui étaient des arnaques.",
    gap: "Les apprenants doivent présenter un service clair, rédiger des propositions qui décrochent des missions, fixer les conditions par écrit, être payés en sécurité et éviter les fausses offres qui demandent des frais, pour que le travail en ligne devienne un vrai revenu et non une perte de données et d'argent.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; traduit en français et en arabe",
      "Appareils : souvent un smartphone seulement ; les données mobiles coûtent cher ; l'électricité peut manquer",
      "Temps : leçons de 4 à 6 minutes",
      "Les frais, les règles et les moyens de paiement des plateformes changent et varient selon les pays ; les règles fiscales aussi",
      "Ne jamais donner de mots de passe, de codes PIN, de codes à usage unique ni de pièces d'identité à un client ou à un recruteur"
    ],
    prerequisites: "Savoir utiliser un téléphone et avoir une compétence utile aux autres. Une adresse e-mail."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir de la liste de vos compétences", action: "choisir un service à vendre en ligne et le rédiger sous forme d'offre en une phrase", standard: "en disant ce que vous faites, pour qui et ce que le client obtient" },
    { id: "O2", condition: "Sur une plateforme ou une simple page en ligne", action: "rédiger le titre et la présentation d'un profil et ajouter deux ou trois petits exemples de travail", standard: "sans informations privées et avec des exemples faits par vous-même" },
    { id: "O3", condition: "Face à une offre de mission", action: "rédiger une courte proposition qui répond au besoin du client, montre un exemple lié et pose une question", standard: "en moins de 150 mots, écrite pour cette offre, sans copier-coller" },
    { id: "O4", condition: "Avant de commencer une mission", action: "fixer par écrit le contenu, le prix, le délai et le nombre de modifications, puis livrer à temps", standard: "avec une solution de secours en cas de coupure d'électricité ou de données" },
    { id: "O5", condition: "Après avoir accepté une mission", action: "choisir un moyen sûr d'être payé et noter chaque paiement", standard: "en gardant le travail et le paiement sur la plateforme quand vous en utilisez une, et en notant chaque paiement dans la semaine" },
    { id: "O6", condition: "Face à cinq offres ou messages de travail", action: "repérer les faux et nommer le signe d'alerte de chacun", standard: "avec au moins 4 bonnes réponses sur 5, avant de payer ou de donner la moindre information" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Se préparer à travailler en ligne",
      lessons: [
        {
          title: "Choisir un service à vendre",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choisir un service et le rédiger sous forme d'offre en une phrase.",
          text: [
            "Être travailleur indépendant (freelance) veut dire faire des travaux payés pour des clients, mission par mission, au lieu de travailler pour un seul employeur. Le télétravail, c'est un emploi, à temps plein ou à temps partiel, fait depuis la maison ou n'importe où en ligne. Les deux commencent par une compétence dont les clients ont besoin.",
            "Faites la liste de ce que vous savez déjà faire : rédiger, traduire entre l'anglais, le français, l'arabe ou une langue locale, saisir des données, utiliser Excel ou Google Sheets, faire du graphisme sur Canva, gérer des réseaux sociaux, faire du service client, de la comptabilité, de la transcription, du soutien scolaire. Choisissez-en UN pour commencer : les clients engagent des spécialistes.",
            "Rédigez une offre en une phrase : ce que vous faites, pour qui, et ce que le client obtient. Exemple : « Je traduis des documents professionnels de l'anglais vers le français pour les petites entreprises, avec précision et en 48 heures. » Exemple : Kofi, à Accra : « Je crée des affiches simples sur Canva et des publications pour les réseaux sociaux, pour les boutiques et les églises. »",
            "S'il vous manque des compétences, profitez des formations gratuites. L'État kényan propose Ajira Digital pour le travail en ligne, et le programme 3MTT du Nigeria forme les jeunes aux données, au graphisme, au logiciel et à d'autres compétences."
          ],
          steps: ["Notez cinq choses que vous savez faire pour les autres.", "Entourez celle que vous faites le mieux et que vous aimez.", "Demandez-vous : qui paie pour cela ?", "Écrivez : je fais [quoi] pour [qui] afin qu'ils obtiennent [résultat].", "S'il vous manque une compétence, cherchez une formation gratuite."],
          words: [["Travailleur indépendant (freelance)", "personne qui fait des travaux payés pour des clients, mission par mission."], ["Télétravail", "emploi fait en ligne, depuis la maison ou n'importe où."], ["Offre de service", "une phrase qui dit ce que vous faites, pour qui et ce que le client obtient."]],
          slides: [
            { title: "Partez de ce que vous savez faire", bullets: ["Rédaction, traduction, saisie, tableurs", "Graphisme, réseaux sociaux, service client", "Comptabilité, transcription, soutien scolaire"] },
            { title: "Choisissez UN service", bullets: ["Les clients engagent des spécialistes", "Prenez celui que vous faites le mieux et que vous aimez"] },
            { title: "Votre offre en une phrase", bullets: ["Je fais [quoi] pour [qui] afin qu'ils obtiennent [résultat]", "« Je traduis de l'anglais vers le français pour les PME, en 48 heures »"] },
            { title: "Formations gratuites", bullets: ["Kenya : Ajira Digital", "Nigeria : 3MTT", "Vérifiez les inscriptions en cours sur les sites officiels"] }
          ],
          sources: [AJIRA, THREE_MTT],
          tryIt: "Notez cinq choses que vous savez faire pour les autres. Choisissez-en une et rédigez votre offre en une phrase : je fais [quoi] pour [qui] afin qu'ils obtiennent [résultat].",
          youCanNow: "choisir un service et le décrire dans une offre claire en une phrase.",
          quickCheck: [
            { objective: "O1", q: "Quelle est l'offre en une phrase la plus claire ?", options: ["« Je peux tout faire en ligne »", "« Engagez-moi, s'il vous plaît »", "« Je saisis dans Excel des formulaires écrits à la main pour les cliniques, avec précision et rapidité »", "« Freelance, toutes compétences »"], answer: 2, why: "Elle dit quoi, pour qui et ce que le client obtient." },
            { objective: "O1", q: "Pourquoi choisir UN seul service pour commencer ?", options: ["Les clients cherchent des spécialistes", "Les plateformes n'autorisent qu'un seul mot", "C'est la loi", "Cela consomme moins de données"], answer: 0, why: "Une spécialité claire inspire confiance et facilite l'embauche." }
          ]
        },
        {
          title: "Votre profil et un petit portfolio",
          objectives: ["O2"],
          minutes: 5,
          goal: "Rédiger le titre et la présentation d'un profil et ajouter deux ou trois exemples de travail.",
          text: [
            "Votre profil est votre vitrine. Le titre dit votre service en quelques mots : « Traductrice anglais-français de documents professionnels ». La présentation, en quelques courts paragraphes, dit qui vous aidez, ce que vous faites, comment vous travaillez et donne une preuve, comme une mission passée ou une formation.",
            "Les clients veulent des preuves. Un portfolio, c'est quelques exemples de votre travail. Si vous n'avez pas encore de clients, créez vous-même des exemples : traduisez un court avis public, faites une affiche pour une boutique imaginaire, mettez en ordre un petit tableau d'exemple. N'utilisez jamais le travail d'une autre personne, et ne montrez jamais les informations réelles d'un client sans son accord.",
            "Ne mettez pas d'informations privées sur votre profil : ni adresse, ni numéro de pièce d'identité, ni coordonnées bancaires. Utilisez une photo nette et souriante si la plateforme en demande une.",
            "Économisez vos données : rédigez d'abord votre profil dans une application de notes, puis collez-le en une seule fois. Compressez les images avant de les envoyer. Exemple : Mariam, à Casablanca, rédige son profil arabe-français hors ligne, puis le met en ligne en dix minutes au cybercafé."
          ],
          steps: ["Rédigez un titre : votre service en quelques mots.", "Rédigez la présentation : qui vous aidez, ce que vous faites, comment, une preuve.", "Créez vous-même deux ou trois petits exemples.", "Vérifiez : aucune information privée, aucun travail d'autrui.", "Rédigez hors ligne d'abord, puis collez."],
          words: [["Profil", "votre page sur une plateforme, qui dit aux clients qui vous êtes et ce que vous faites."], ["Portfolio", "quelques exemples de votre travail qui prouvent votre compétence."], ["Titre", "une courte ligne sous votre nom qui dit votre service."]],
          slides: [
            { title: "Titre et présentation", bullets: ["Titre : votre service en quelques mots", "Présentation : qui vous aidez, quoi, comment, une preuve"] },
            { title: "Portfolio : montrez des preuves", bullets: ["Deux ou trois petits exemples", "Pas encore de clients ? Créez vos exemples", "N'utilisez jamais le travail des autres"] },
            { title: "Sûr et léger", bullets: ["Ni adresse, ni pièce d'identité, ni banque", "Rédigez hors ligne, collez une fois", "Compressez les images pour économiser les données"] }
          ],
          tryIt: "Rédigez votre titre et une courte présentation dans une application de notes. Puis créez un petit exemple de travail pour votre service, par exemple un paragraphe traduit, une affiche ou un tableau mis en ordre.",
          youCanNow: "rédiger un profil clair et montrer votre compétence avec de petits exemples de travail.",
          quickCheck: [
            { objective: "O2", q: "Vous n'avez pas encore de clients. Comment créer un portfolio ?", options: ["Copier le travail d'un graphiste célèbre", "Créer vous-même de petits exemples", "Mettre votre nom sur le travail d'un ami", "Attendre qu'un client vous engage"], answer: 1, why: "Les exemples que vous créez vous-même sont une preuve honnête de votre compétence." },
            { objective: "O2", q: "Que ne faut-il PAS mettre sur votre profil ?", options: ["Votre titre", "Votre service", "Un exemple de votre travail", "Votre adresse et votre numéro de pièce d'identité"], answer: 3, why: "Les informations privées peuvent être détournées ; votre profil n'a besoin que de vos compétences et de vos preuves." }
          ]
        },
        {
          title: "Trouver des missions et rédiger une proposition",
          objectives: ["O3"],
          minutes: 6,
          goal: "Rédiger une courte proposition qui répond au besoin d'un client.",
          text: [
            "Où trouver du travail : les plateformes de freelance (comme Upwork et Fiverr), LinkedIn, les sites d'offres d'emploi, et les gens que vous connaissez, comme les commerces du quartier, les églises, les ONG et les écoles qui ont besoin d'aide en ligne. Vos premiers clients sont souvent près de chez vous.",
            "Lisez l'offre deux fois. Repérez le besoin du client, le délai et toute question posée. Laissez de côté les offres floues, celles qui ne paient rien ou celles qui vous demandent de payer.",
            "Une proposition, c'est votre courte réponse. Moins de 150 mots : 1. Montrez en une phrase que vous avez compris le besoin. 2. Dites comment vous allez faire. 3. Indiquez un exemple lié. 4. Posez une question utile. Écrivez-la pour cette offre : les clients repèrent un message copié.",
            "Exemple : un client doit faire saisir 200 noms de produits dans un tableur. Ngozi, à Lagos, écrit : « Vous avez besoin que 200 noms de produits et leurs prix soient saisis dans un tableur d'ici vendredi. Je saisirai et vérifierai chaque ligne deux fois. Voici un tableau d'exemple que j'ai fait. Les prix doivent-ils être en nairas ou en dollars ? »"
          ],
          steps: ["Lisez l'offre deux fois ; notez le besoin, le délai et les questions.", "Laissez de côté les offres floues ou qui vous demandent de payer.", "Phrase 1 : le besoin du client avec vos mots.", "Phrase 2 : comment vous allez faire.", "Ajoutez un exemple lié.", "Posez une question utile.", "Restez sous 150 mots."],
          words: [["Offre de mission", "la description par un client du travail dont il a besoin."], ["Proposition", "votre courte réponse à une offre, qui dit comment vous ferez le travail."]],
          slides: [
            { title: "Où trouver du travail", bullets: ["Plateformes comme Upwork et Fiverr", "LinkedIn et sites d'offres d'emploi", "Commerces du quartier, ONG, églises, écoles"] },
            { title: "Lisez l'offre deux fois", bullets: ["Le besoin, le délai, les questions", "Laissez les offres floues et celles qui demandent de payer"] },
            { title: "Une proposition en quatre parties", bullets: ["1. Le besoin avec vos mots  2. Comment vous ferez", "3. Un exemple lié  4. Une question utile", "Moins de 150 mots, écrite pour cette offre"] }
          ],
          tryIt: "Trouvez une vraie offre pour votre service (ou utilisez l'exemple du tableur). Rédigez une proposition de moins de 150 mots avec les quatre parties.",
          youCanNow: "rédiger une courte proposition qui montre au client que vous avez compris son besoin.",
          quickCheck: [
            { objective: "O3", q: "Que doit faire la première phrase d'une proposition ?", options: ["Montrer que vous avez compris le besoin du client", "Raconter votre vie", "Demander d'abord à être payé", "Énumérer toutes vos compétences"], answer: 0, why: "Montrer que vous avez compris le besoin attire l'attention du client." },
            { objective: "O3", q: "Pourquoi écrire chaque proposition pour l'offre en question ?", options: ["Les plateformes exigent de longues propositions", "Les clients repèrent un message copié et le laissent de côté", "Cela consomme moins de données", "Les propositions copiées sont illégales"], answer: 1, why: "Une proposition écrite pour l'offre montre de l'attention et de la compréhension." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Se préparer à travailler en ligne",
        questions: [
          { objective: "O1", q: "Quelles sont les trois choses que dit une offre en une phrase ?", options: ["Votre âge, votre ville et votre école", "Votre tarif, votre téléphone et votre banque", "Ce que vous faites, pour qui et ce que le client obtient", "Vos loisirs, votre famille et vos objectifs"], answer: 2, why: "Le quoi, le pour qui et le résultat rendent une offre claire." },
          { objective: "O1", q: "Vous parlez bien l'arabe et le français. Quel service pourriez-vous proposer ?", options: ["La traduction entre l'arabe et le français", "La réparation de voitures en ligne", "La vente des comptes d'autres personnes", "Rien ; les langues ne sont pas une compétence"], answer: 0, why: "Les langues sont une compétence pour laquelle beaucoup de clients paient." },
          { objective: "O2", q: "Qu'est-ce qu'un portfolio ?", options: ["Votre relevé bancaire", "Quelques exemples de votre travail qui prouvent votre compétence", "Votre carte d'identité", "Une liste des mots de passe des clients"], answer: 1, why: "Un portfolio montre aux clients ce que vous savez faire." },
          { objective: "O3", q: "Une bonne proposition est :", options: ["Longue, avec toutes vos compétences", "Le même message envoyé à toutes les offres", "Une demande d'avance", "Courte, écrite pour l'offre, avec un exemple et une question"], answer: 3, why: "Les propositions courtes, précises et avec une preuve décrochent plus de missions." },
          { objective: "O3", q: "Une offre vous demande de payer des frais pour postuler. Que faites-vous ?", options: ["Payer vite", "Payer la moitié", "La laisser de côté", "Envoyer votre pièce d'identité à la place"], answer: 2, why: "Les vrais clients vous paient ; ils ne vous demandent pas de payer pour postuler." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Faire le travail et se faire payer",
      lessons: [
        {
          title: "Se mettre d'accord sur le travail et livrer à temps",
          objectives: ["O4"],
          minutes: 5,
          goal: "Fixer par écrit le contenu, le prix, le délai et les modifications avant de commencer.",
          text: [
            "Avant de commencer, fixez par écrit (dans la messagerie de la plateforme ou dans un court e-mail) quatre choses : le contenu de la mission (exactement ce que vous allez livrer), le prix, le délai (avec le fuseau horaire) et le nombre de séries de modifications comprises.",
            "Exemple : « Contenu : créer 3 publications pour les réseaux sociaux de votre boulangerie. Prix : selon le contrat. Délai : jeudi 17 h, heure de Londres. Modifications : jusqu'à 2 séries. » Si le client demande plus ensuite, proposez poliment un nouveau prix pour le travail en plus.",
            "Prévoyez les coupures d'électricité et de données. Chargez votre téléphone et une batterie externe, enregistrez souvent votre travail dans le cloud (stockage en ligne), ayez un autre lieu de travail de secours (cybercafé, espace de travail partagé, bibliothèque) et ne gardez pas tout pour le dernier jour. Si un problème arrive, prévenez le client tôt et honnêtement ; la plupart acceptent un petit retard annoncé à l'avance.",
            "Exemple : Ibrahima, à Thiès, travaille dès 6 h, avant le début habituel des coupures, et garde une copie de chaque fichier sur Google Drive."
          ],
          steps: ["Écrivez le contenu : exactement ce que vous allez livrer.", "Écrivez le prix et le délai, avec le fuseau horaire.", "Écrivez le nombre de séries de modifications comprises.", "Obtenez l'accord du client par écrit.", "Enregistrez souvent ; prévoyez une solution de secours pour l'électricité et les données.", "Si vous allez être en retard, prévenez le client tôt."],
          words: [["Contenu de la mission", "exactement le travail que vous allez livrer."], ["Fuseau horaire", "l'heure locale d'un lieu ; entre Londres, Lagos et Nairobi, il peut y avoir des heures d'écart."], ["Modification", "un changement demandé par le client après avoir vu votre travail."]],
          slides: [
            { title: "Fixez quatre choses par écrit", bullets: ["Contenu : exactement ce que vous livrez", "Prix", "Délai, avec le fuseau horaire", "Séries de modifications comprises"] },
            { title: "Plus de travail = nouveau prix", bullets: ["Les demandes en plus sont un nouveau travail", "Proposez poliment un nouveau prix"] },
            { title: "Prévoyez les coupures", bullets: ["Batterie externe ; enregistrez souvent dans le cloud", "Un lieu de travail de secours", "En retard ? Prévenez le client tôt"] }
          ],
          tryIt: "Rédigez un court message pour une mission de votre service : contenu, prix (à titre d'exemple), délai avec fuseau horaire et séries de modifications. Puis écrivez votre solution de secours en cas de coupure d'électricité ou de données.",
          youCanNow: "fixer par écrit le contenu, le prix, le délai et les modifications d'une mission, et livrer à temps grâce à une solution de secours.",
          quickCheck: [
            { objective: "O4", q: "Laquelle n'est PAS une des quatre choses à fixer avant de commencer ?", options: ["Le contenu", "Le prix", "Le délai", "Votre musique préférée"], answer: 3, why: "Les quatre sont le contenu, le prix, le délai et les modifications." },
            { objective: "O4", q: "Il y a une coupure de courant et vous risquez de manquer le délai de demain. Que faites-vous ?", options: ["Ne rien dire et espérer", "Prévenir le client tôt et proposer une nouvelle heure", "Supprimer la mission", "Demander plus d'argent au client"], answer: 1, why: "Une nouvelle annoncée tôt et honnêtement garde la confiance du client." }
          ]
        },
        {
          title: "Se faire payer et tenir ses comptes",
          objectives: ["O5"],
          minutes: 5,
          goal: "Choisir un moyen sûr d'être payé et noter chaque paiement.",
          text: [
            "Sur une plateforme, gardez le travail, les messages et le paiement sur la plateforme. Sa protection des paiements ne fonctionne que là. Les clients qui vous demandent de quitter la plateforme pour vous payer « directement » sont souvent des escrocs, et cela peut être contraire aux règles de la plateforme.",
            "Les plateformes paient de plusieurs façons : sur un compte bancaire, par des services comme Payoneer, ou par d'autres moyens. Ce qui marche dépend de la plateforme et de votre pays, et les frais changent. Lisez les pages sur les paiements et les frais dans le centre d'aide de la plateforme elle-même avant votre première mission.",
            "Avec des clients directs que vous connaissez, mettez-vous d'accord avant de commencer sur la façon de payer, virement bancaire ou mobile money (argent mobile), et sur le moment (par exemple la moitié avant et la moitié à la livraison). Si vous avez un doute, livrez d'abord un extrait ou un aperçu.",
            "Notez chaque paiement : date, client, mission, montant et monnaie (USD, EUR, KES, NGN, GHS, XOF, MAD), frais et montant reçu. Les revenus gagnés en ligne peuvent être imposés. Demandez à l'administration fiscale de votre pays, par exemple la Kenya Revenue Authority ou la Ghana Revenue Authority, ou à un conseiller fiscal, ce que vous devez déclarer et payer."
          ],
          steps: ["Sur une plateforme, gardez le travail et le paiement sur la plateforme.", "Lisez les pages sur les paiements et les frais de la plateforme elle-même.", "Avec des clients directs, fixez comment et quand ils paient avant de commencer.", "Notez chaque paiement dans la semaine : date, client, mission, montant, monnaie, frais, reçu.", "Demandez à l'administration fiscale ce qui s'applique à vous."],
          words: [["Protection des paiements", "le système d'une plateforme qui bloque ou garantit le paiement du travail fait sur la plateforme."], ["Monnaie", "le type d'argent : dollars américains, euros, nairas, cedis, shillings, francs CFA, dirhams."], ["Administration fiscale", "le service de l'État qui perçoit les impôts, comme la KRA au Kenya ou la GRA au Ghana."]],
          slides: [
            { title: "Restez sur la plateforme", bullets: ["Travail, messages et paiement sur la plateforme", "La protection ne marche que là", "« Je vous paie directement hors plateforme » = signe d'alerte"] },
            { title: "Moyens de paiement", bullets: ["Banque, Payoneer ou autres : selon le pays", "Lisez les pages d'aide de la plateforme elle-même", "Les frais changent : vérifiez avant la première mission"] },
            { title: "Comptes et impôts", bullets: ["Date, client, mission, montant, monnaie, frais", "Notez chaque paiement dans la semaine", "Demandez à la KRA, à la GRA ou à votre administration fiscale"] }
          ],
          sources: [KRA, GRA],
          tryIt: "Faites un tableau des paiements avec ces colonnes : date, client, mission, montant, monnaie, frais, montant reçu. Ajoutez une ligne d'exemple. Puis trouvez la page d'aide sur les paiements d'une plateforme que vous pourriez utiliser.",
          youCanNow: "choisir un moyen sûr d'être payé, noter chaque paiement et savoir où vous renseigner sur les impôts.",
          quickCheck: [
            { objective: "O5", q: "Un nouveau client sur une plateforme vous demande de passer sur WhatsApp pour être payé « directement ». Quel est le risque ?", options: ["Vous perdez la protection des paiements de la plateforme, et c'est souvent une arnaque", "Aucun ; c'est plus rapide", "Vous serez payé le double", "La plateforme paiera les frais"], answer: 0, why: "La protection des paiements ne fonctionne que sur la plateforme ; les demandes pour en sortir sont un signe d'arnaque courant." },
            { objective: "O5", q: "Qui peut vous dire quels impôts vous devez sur vos revenus en ligne ?", options: ["Votre client", "Un groupe WhatsApp", "L'administration fiscale de votre pays ou un conseiller fiscal", "Personne ; les revenus en ligne ne sont jamais imposés"], answer: 2, why: "Les règles fiscales varient selon les pays ; l'administration fiscale ou un conseiller peut vous le dire." }
          ]
        },
        {
          title: "Fausses offres et arnaques au paiement",
          objectives: ["O6"],
          minutes: 6,
          goal: "Repérer les fausses offres de travail et nommer le signe d'alerte de chacune.",
          text: [
            "Les nouveaux travailleurs indépendants sont une cible de choix. Signes d'alerte : 1. On VOUS demande de payer : inscription, formation, « kit de démarrage » ou logiciel. 2. Une paie trop élevée pour un travail facile, comme « gagnez 500 USD par jour en aimant des vidéos ». 3. On vous demande vos mots de passe, votre code PIN, des codes à usage unique ou vos pièces d'identité. 4. On veut vous faire quitter la plateforme tout de suite. 5. On vous « paie trop » par chèque ou virement et on vous demande de renvoyer la différence. 6. Des emplois de « tâches » ou d'« investissement » où vous déposez de l'argent pour débloquer des tâches ou des gains, souvent promus sur WhatsApp, Telegram et TikTok.",
            "La SEC du Nigeria (l'autorité qui contrôle les placements financiers) a mis en garde contre les arnaques promues sur les réseaux sociaux qui promettent de gros gains. Les vrais clients vous paient pour travailler ; ils ne vous demandent jamais de payer pour travailler.",
            "Protégez vos comptes : un mot de passe fort et différent pour votre e-mail et pour chaque plateforme, la validation en deux étapes activée, et ne donnez jamais vos codes. Ne laissez personne « louer » ou utiliser votre compte vérifié : il peut servir à des fraudes en votre nom.",
            "Ensuite, assemblez votre kit de démarrage : votre offre, votre profil, vos exemples, une proposition, et votre liste sécurité et paiement."
          ],
          steps: ["Demandez-vous : veulent-ils que je paie ?", "Demandez-vous : la paie est-elle trop belle pour le travail ?", "Demandez-vous : veulent-ils des mots de passe, des codes ou une pièce d'identité ?", "Demandez-vous : me poussent-ils à quitter la plateforme ?", "Un seul oui : arrêtez, ne payez pas, signalez-le à la plateforme.", "Activez la validation en deux étapes et ne donnez jamais vos codes."],
          words: [["Arnaque au trop-perçu", "un faux paiement d'un montant trop élevé, suivi d'une demande de renvoyer la différence avant que le faux paiement soit rejeté."], ["Validation en deux étapes", "une deuxième vérification à la connexion, comme un code envoyé sur votre téléphone."], ["Arnaque aux tâches", "un faux emploi où vous devez déposer de l'argent pour débloquer des tâches ou des gains."]],
          slides: [
            { title: "Signes d'une fausse offre", bullets: ["On vous demande de payer pour travailler", "Une paie bien trop élevée pour un travail facile", "On veut vos mots de passe, codes ou pièce d'identité"] },
            { title: "Autres pièges", bullets: ["On vous pousse à quitter la plateforme", "On paie trop, puis « renvoyez la différence »", "Déposer de l'argent pour débloquer des tâches ou des gains"] },
            { title: "Protégez vos comptes", bullets: ["Mots de passe forts et différents", "Validation en deux étapes activée", "Ne louez jamais votre compte vérifié"] },
            { title: "Votre kit de démarrage", bullets: ["Offre, profil, exemples", "Une proposition", "Liste sécurité et paiement"] }
          ],
          sources: [SEC_NG],
          tryIt: "Activité finale : assemblez votre kit de démarrage de travailleur indépendant : offre en une phrase, titre et présentation du profil, deux ou trois exemples, une proposition pour une offre réelle ou un exemple d'offre, et une liste avec votre moyen de paiement, votre tableau des paiements, où vous vous renseignerez sur les impôts et les six signes d'alerte des fausses offres.",
          youCanNow: "repérer les fausses offres et les arnaques au paiement, et vous présenter comme un travailleur indépendant prêt à être engagé.",
          quickCheck: [
            { objective: "O6", q: "Un « recruteur » propose un emploi de saisie de données mais demande 20 USD pour un kit de démarrage. Quel est le signe d'alerte ?", options: ["L'emploi est de la saisie de données", "Le recruteur est poli", "L'emploi est à temps partiel", "On vous demande de payer pour travailler"], answer: 3, why: "Les vrais clients vous paient ; vous demander de payer est le signe classique d'une fausse offre." },
            { objective: "O6", q: "Un client envoie plus que le montant convenu et vous demande de renvoyer vite la différence. Qu'est-ce que c'est ?", options: ["Un client généreux", "Une arnaque au trop-perçu", "Un bonus de la plateforme", "Un remboursement d'impôt"], answer: 1, why: "Le premier paiement est souvent faux et il est rejeté après que vous avez renvoyé votre propre argent." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Faire le travail et se faire payer",
        questions: [
          { objective: "O4", q: "Pourquoi fixer le nombre de modifications avant de commencer ?", options: ["Pour que des modifications sans fin ne vous prennent pas du temps sans paie", "Pour que le client paie moins", "Parce que les plateformes exigent cinq modifications", "Ce n'est pas important"], answer: 0, why: "Des modifications fixées à l'avance protègent votre temps ; le travail en plus a un nouveau prix." },
          { objective: "O4", q: "Votre client est à Londres et vous êtes à Nairobi. Pourquoi écrire le fuseau horaire avec le délai ?", options: ["C'est poli", "L'heure n'est pas la même, donc vous savez tous les deux exactement quand livrer", "Cela rend la mission plus chère", "Les plateformes interdisent les délais sans fuseau horaire"], answer: 1, why: "L'heure change d'un pays à l'autre ; le fuseau horaire évite la confusion." },
          { objective: "O5", q: "Que faut-il noter dans votre tableau des paiements ?", options: ["Votre mot de passe", "Votre code PIN", "La date, le client, la mission, le montant, la monnaie et les frais", "L'adresse privée du client"], answer: 2, why: "Ces informations permettent de suivre vos revenus et aident pour les impôts." },
          { objective: "O6", q: "Quelle offre est le plus probablement vraie ?", options: ["« Payez 30 USD pour débloquer des tâches »", "« Envoyez votre code de connexion pour que nous créions votre compte »", "« Gagnez 500 USD par jour en aimant des vidéos »", "Un client sur la plateforme qui fixe le contenu et le prix et paie par la plateforme"], answer: 3, why: "Un vrai travail a un contenu et un prix clairs et il est payé par des moyens sûrs." },
          { objective: "O6", q: "Quelqu'un veut « louer » votre compte vérifié de travailleur indépendant. Que faites-vous ?", options: ["Refuser ; il peut servir à des fraudes en votre nom", "Accepter contre un petit paiement", "Donner seulement le mot de passe", "Le prêter d'abord à un ami"], answer: 0, why: "Votre compte est lié à votre identité ; d'autres peuvent l'utiliser à mauvais escient." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Travail indépendant en ligne et télétravail depuis l'Afrique",
    questions: [
      { objective: "O1", q: "Qu'est-ce qu'un travailleur indépendant (freelance) ?", options: ["Une personne qui travaille gratuitement", "Une personne qui fait des travaux payés pour des clients, mission par mission", "Un fonctionnaire", "Le propriétaire d'une plateforme"], answer: 1, why: "Les travailleurs indépendants vendent leurs services mission par mission à différents clients." },
      { objective: "O1", q: "Quelle est une bonne offre en une phrase ?", options: ["« Je fais tout »", "« Bon travailleur, engagez-moi »", "« Emplois en ligne »", "« J'écris des descriptions de produits pour les boutiques en ligne, pour les aider à vendre »"], answer: 3, why: "Elle dit quoi, pour qui et le résultat." },
      { objective: "O1", q: "Il vous faut plus de compétences avant de commencer. Quelle est une bonne option gratuite au Nigeria ?", options: ["Le programme 3MTT", "Une « académie » WhatsApp payante qui promet des emplois", "Acheter un compte vérifié", "Une application de tâches qui demande un dépôt"], answer: 0, why: "3MTT est un programme de formation public ; les autres sont des signes d'alerte." },
      { objective: "O2", q: "Le titre d'un profil doit :", options: ["Donner votre numéro de téléphone", "Dire votre service en quelques mots", "Raconter toute votre vie", "Montrer votre numéro de pièce d'identité"], answer: 1, why: "Un titre court dit aux clients d'un coup d'œil ce que vous faites." },
      { objective: "O2", q: "Quel est un exemple de travail honnête ?", options: ["Une affiche que vous avez faite pour une boutique imaginaire", "Le travail d'un graphiste célèbre", "La rédaction d'un ami", "Le fichier privé d'un client montré sans son accord"], answer: 0, why: "Les exemples que vous créez vous-même sont une preuve honnête." },
      { objective: "O2", q: "Comment économiser vos données en créant votre profil ?", options: ["Envoyer des photos très lourdes", "Le réécrire en ligne plusieurs fois", "Le rédiger hors ligne d'abord, puis le coller en une fois", "N'utiliser que des appels vidéo"], answer: 2, why: "Rédiger hors ligne et compresser les images économise des données qui coûtent cher." },
      { objective: "O3", q: "Quelle longueur doit avoir, en général, une première proposition ?", options: ["Deux pages", "Un mot", "Le plus long possible", "Moins de 150 mots environ"], answer: 3, why: "Les propositions courtes sont lues ; les longues sont laissées de côté." },
      { objective: "O3", q: "Que faut-il mettre dans une proposition ?", options: ["Un exemple lié et une question utile", "Le code PIN de votre banque", "Une demande d'avance", "Une copie de votre pièce d'identité"], answer: 0, why: "Une preuve et une bonne question montrent que vous savez faire le travail." },
      { objective: "O3", q: "Où trouve-t-on souvent les premiers clients ?", options: ["Seulement à l'étranger", "Seulement sur un seul site", "Dans les commerces du quartier, les ONG, les écoles et les églises, en plus des plateformes", "Nulle part sans payer un recruteur"], answer: 2, why: "Beaucoup de travailleurs indépendants commencent avec des gens et des commerces proches." },
      { objective: "O4", q: "Que veut dire « contenu de la mission » ?", options: ["Le pays du client", "Exactement ce que vous allez livrer", "Votre prix", "Les frais de la plateforme"], answer: 1, why: "Le contenu, c'est le travail exact convenu." },
      { objective: "O4", q: "Le client demande un nouveau visuel qui n'était pas dans le contenu convenu. Que faites-vous ?", options: ["Le faire gratuitement, plusieurs fois", "Ignorer le message", "Annuler la mission", "Proposer poliment un nouveau prix pour le travail en plus"], answer: 3, why: "Un travail en dehors du contenu convenu est un nouveau travail avec un nouveau prix." },
      { objective: "O4", q: "Quelle est une bonne solution de secours en cas de coupure d'électricité ?", options: ["Charger une batterie externe et enregistrer souvent le travail dans le cloud", "Espérer que le courant reste", "Travailler seulement la veille", "Ne rien dire au client"], answer: 0, why: "Une batterie externe, des sauvegardes dans le cloud et un lieu de secours vous aident à livrer à temps." },
      { objective: "O5", q: "Pourquoi garder le travail et le paiement sur une plateforme ?", options: ["C'est plus lent", "Sa protection des paiements ne fonctionne que là", "Il n'y a aucun frais", "Le client préfère"], answer: 1, why: "Quitter la plateforme supprime sa protection et c'est un chemin d'arnaque courant." },
      { objective: "O5", q: "Où trouver les moyens de paiement et les frais actuels d'une plateforme ?", options: ["Dans un commentaire YouTube", "Dans ce que pense un ami", "Dans le centre d'aide de la plateforme elle-même", "Auprès du client"], answer: 2, why: "Les moyens et les frais varient selon le pays et changent ; les pages de la plateforme elle-même sont à jour." },
      { objective: "O5", q: "Dans quel délai noter un paiement ?", options: ["Dans la semaine", "À la fin de l'année", "Jamais", "Seulement les gros paiements"], answer: 0, why: "Noter vite garde vos comptes complets pour vos projets et pour les impôts." },
      { objective: "O5", q: "Au Ghana, qui peut vous renseigner sur l'impôt sur vos revenus en ligne ?", options: ["Votre client", "Une vidéo TikTok", "La Ghana Revenue Authority ou un conseiller fiscal", "Le robot de discussion de la plateforme"], answer: 2, why: "L'administration fiscale du pays fixe et explique les règles fiscales." },
      { objective: "O6", q: "Quel est un signe d'alerte d'une fausse offre ?", options: ["Un contenu et un prix clairs", "On vous demande de payer une inscription ou un kit de démarrage", "Le paiement par la plateforme", "Un délai avec un fuseau horaire"], answer: 1, why: "Les vrais clients ne vous demandent jamais de payer pour travailler." },
      { objective: "O6", q: "Un « emploi » vous demande de déposer de l'argent pour débloquer des tâches mieux payées. C'est :", options: ["Un emploi normal", "Des frais de formation", "Un impôt", "Une arnaque aux tâches"], answer: 3, why: "Déposer de l'argent pour débloquer des tâches ou des gains est une arnaque courante." },
      { objective: "O6", q: "Qu'est-ce qui protège vos comptes de freelance et votre e-mail ?", options: ["Un seul mot de passe pour tout", "Donner vos codes aux clients", "Des mots de passe forts et différents et la validation en deux étapes", "Louer votre compte à d'autres"], answer: 2, why: "Des mots de passe différents et une deuxième vérification à la connexion bloquent la plupart des piratages de comptes." },
      { objective: "O6", q: "Un recruteur demande une photo de votre pièce d'identité et le mot de passe de votre e-mail « pour vous vérifier ». Que faites-vous ?", options: ["Refuser et le signaler", "Envoyer les deux", "Envoyer seulement le mot de passe", "Envoyer seulement la pièce d'identité"], answer: 0, why: "Les vrais clients n'ont jamais besoin de votre mot de passe ; une demande de pièce d'identité par un inconnu est un risque de fraude." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 6, 9, 12, 14, 16, 17] },
  rubric: {
    mastery: "Atteint ou Dépassé sur chaque ligne. Si une ligne est Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Offre claire", objective: "O1", notYet: "L'offre est floue (« Je fais tout en ligne »).", meets: "Un service, qui dit ce que vous faites, pour qui et ce que le client obtient.", exceeds: "L'offre nomme un type de client précis et un résultat ou un délai clair." },
      { name: "Profil et exemples", objective: "O2", notYet: "Pas de titre ni de présentation, pas d'exemples, ou des informations privées visibles.", meets: "Titre, courte présentation et deux ou trois exemples faits par l'apprenant, sans informations privées.", exceeds: "Les exemples correspondent bien à l'offre et la présentation donne une preuve (formation ou mission passée)." },
      { name: "Proposition", objective: "O3", notYet: "Longue, copiée ou ne parle pas du besoin du client.", meets: "Moins de 150 mots, écrite pour l'offre : le besoin, le comment, un exemple, une question.", exceeds: "La question montre une vraie réflexion sur la mission, et la proposition suit le ton du client." },
      { name: "Accord sur le travail", objective: "O4", notYet: "Pas de contenu ni de délai écrits.", meets: "Un message avec le contenu, le prix, le délai avec fuseau horaire et les modifications, plus une solution de secours pour l'électricité ou les données.", exceeds: "Dit aussi comment le travail en plus sera facturé." },
      { name: "Paiement et comptes", objective: "O5", notYet: "Pas de moyen de paiement ni de tableau des paiements.", meets: "Un moyen de paiement sûr (sur la plateforme, ou fixé à l'avance avec un client connu), un tableau des paiements, et où se renseigner sur les impôts.", exceeds: "Le moyen de paiement a été vérifié sur la page d'aide de la plateforme elle-même." },
      { name: "Vigilance face aux arnaques", objective: "O6", notYet: "Moins de quatre signes d'alerte, ou prévoit de payer des frais pour obtenir du travail.", meets: "Liste les six signes d'alerte des fausses offres et indique que la validation en deux étapes est activée.", exceeds: "Ajoute une vraie fausse offre que l'apprenant a vue et comment il l'a repérée." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent l'activité finale (grille)",
      "Apprenants qui envoient au moins trois propositions en 30 jours",
      "Apprenants qui signalent une première mission payée en ligne en 90 jours",
      "Apprenants qui signalent avoir refusé une fausse offre ou une arnaque au paiement en 30 jours"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un smartphone ou un ordinateur avec un peu de données, et une adresse e-mail",
      "Une application de notes ou du papier pour préparer le profil et la proposition",
      "Des outils gratuits pour les exemples, comme Google Docs ou Sheets, Canva ou Microsoft 365",
      "Environ 75 minutes au total, en courtes séances, plus le temps de créer les exemples"
    ],
    facilitatorNotes: [
      "Convient bien aux centres de jeunes, aux centres Ajira, aux groupes 3MTT, aux bibliothèques et aux groupes de jeunes d'églises ou de mosquées : faites le test de départ ensemble, puis un chapitre par séance.",
      "Apportez des exemples d'offres imprimés pour que les apprenants s'entraînent à rédiger des propositions sans utiliser de données.",
      "Ne recommandez pas d'« académies de freelance » payantes ni de vendeurs de comptes ; orientez vers des formations gratuites et officielles.",
      "Ne demandez jamais aux apprenants de partager en classe des mots de passe, des codes, des pièces d'identité ou leurs coordonnées de paiement.",
      "Formez des binômes pour relire les propositions l'un de l'autre avec la grille avant de les envoyer.",
      "Avant la séance, vérifiez les pages d'aide actuelles de chaque plateforme sur les paiements pour votre pays ; elles changent."
    ]
  }
};
