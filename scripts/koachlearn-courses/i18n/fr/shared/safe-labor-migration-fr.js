"use strict";

// Koach Learn course (French translation of shared/safe-labor-migration.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "safe-labor-migration-fr",
  lang: "fr",
  translationOf: "safe-labor-migration",
  category: "Workforce Development",
  name: "Partir travailler à l'étranger en sécurité",
  skills: "Trouver des informations officielles sur la migration, Vérifier la licence d'une agence de recrutement, Repérer les faux recruteurs, Lire une offre d'emploi et un contrat, Reconnaître la traite et trouver de l'aide, Préparer une liste de sécurité pour la migration",
  outcome: "préparer un départ à l'étranger pour le travail par une voie légale : vérifier que le recruteur a une licence, refuser tout emploi qui vous demande de payer pour l'obtenir, lire le contrat avant de signer, connaître les signes de la traite et savoir où trouver de l'aide, et garder sur vous une liste personnelle de sécurité pour la migration.",
  about: [
    "Chaque année, des millions de personnes partent travailler dans un autre pays : des infirmières et infirmiers des Philippines et du Nigeria, des chauffeurs et des ouvriers du bâtiment d'Inde et du Kenya, des ouvriers agricoles du Mexique, des aides à domicile du Ghana et de Colombie, des employés de commerce et d'hôtel du Maroc, d'Égypte et du Sénégal. La plupart trouvent un travail honnête. Certains sont trompés par de faux recruteurs, paient de gros frais, perdent leur passeport ou finissent dans le travail forcé.",
    "Ce cours vous apprend à vous protéger avant de partir et après votre arrivée. Vous apprendrez à trouver des informations officielles sur les voies légales, à vérifier si une agence de recrutement a une licence, à reconnaître les signaux d'alerte d'un faux emploi, à savoir ce que doivent dire une offre d'emploi et un contrat honnêtes, à reconnaître les signes de la traite et à savoir où trouver de l'aide.",
    "Ce cours ne donne pas de conseils juridiques ni de conseils sur les visas, et il ne vous trouve pas d'emploi. Les règles sont différentes dans chaque pays et elles changent. Chaque leçon vous montre donc où consulter la page officielle de votre propre gouvernement et du pays où vous voulez travailler.",
    "Chaque leçon dure environ cinq minutes. Faites la tâche \"Essayez maintenant\" sur papier ou sur un téléphone. Il y a un court contrôle après chaque leçon et chaque chapitre, et un quiz de 20 questions à la fin. À la fin, vous aurez votre propre liste de sécurité pour la migration."
  ],
  finalTask: "Préparez votre propre liste de sécurité pour la migration, sur papier ou sur un téléphone, pour un vrai emploi à l'étranger que vous envisagez (ou une offre d'exercice). Elle doit contenir : les pages officielles du gouvernement et de l'ambassade que vous utiliserez ; le nom de l'agence et la façon dont vous avez vérifié sa licence ; la liste des frais et qui les paie ; les détails de l'emploi que vous devez avoir par écrit avant de signer ; les signaux d'alerte qui vous feraient arrêter ; et un plan d'aide avec des copies de vos documents, une personne de confiance au pays, et les numéros de l'ambassade et des lignes d'aide que vous avez cherchés vous-même.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des jeunes et des adultes qui pensent partir travailler à l'étranger, surtout en Afrique, en Asie et en Amérique latine (par exemple au Kenya, au Nigeria, au Ghana, au Sénégal, au Maroc, en Égypte, en Inde, aux Philippines, au Mexique et en Colombie), ainsi que leurs familles et les travailleurs communautaires qui les conseillent. Beaucoup ont entendu parler d'emplois par des amis, les réseaux sociaux ou des agents locaux. Le cours est traduit en plusieurs langues.",
    startingPoint: "Ils savent utiliser un téléphone simple et des applications de messagerie. Ils connaissent quelqu'un qui a travaillé à l'étranger. Ils ont rarement lu un contrat de travail et ne savent pas que les recruteurs doivent avoir une licence ni que les travailleurs ne devraient pas payer de frais de recrutement.",
    gap: "Les apprenants doivent savoir distinguer une offre d'emploi légale et honnête d'une arnaque ou d'un piège de la traite avant de payer, de remettre un passeport ou de voyager. Sans ces compétences, des personnes perdent leurs économies, s'endettent et peuvent finir dans le travail forcé, loin de toute aide.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes, pour des lecteurs en langue seconde et pour la traduction",
      "Appareils : un smartphone simple ou un ordinateur partagé ; certaines tâches se font sur papier",
      "Les règles changent selon le pays et changent souvent : le cours renvoie aux pages officielles et ne donne pas de conseils juridiques ni sur les visas",
      "Sécurité : aucun vrai numéro de passeport, de pièce d'identité ou de compte bancaire dans les exercices ; les apprenants en danger sont invités à appeler d'abord les services d'urgence locaux",
      "Certains apprenants sont peut-être déjà dans une situation difficile à l'étranger ; le cours donne des moyens d'obtenir de l'aide, sans reproche"
    ],
    prerequisites: "Aucun. Les apprenants qui découvrent internet peuvent d'abord suivre \"Les bases d'internet\"."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "Pour un pays où vous voulez travailler", action: "trouver les pages officielles du gouvernement et de l'ambassade sur les visas de travail et les voies légales", standard: "et distinguer une page officielle de la page d'un agent ou d'un inconnu" },
    { id: "O2", condition: "À partir du nom d'une agence de recrutement", action: "vérifier si l'agence a une licence auprès de l'autorité du travail ou de la migration de votre pays", standard: "avant de payer quoi que ce soit ou de remettre des documents" },
    { id: "O3", condition: "À partir d'une offre d'emploi ou d'un message de recruteur", action: "lister les signaux d'alerte d'un faux recruteur ou d'une arnaque à l'emploi", standard: "en trouvant au moins 3 signes sur 4 dans une annonce d'exercice" },
    { id: "O4", condition: "À partir d'une offre d'emploi ou d'un contrat", action: "vérifier que l'employeur, le poste, le salaire, les horaires, le lieu, les frais et les conditions de retour sont écrits", standard: "et lister chaque point manquant ou modifié avant de signer" },
    { id: "O5", condition: "À partir de l'histoire d'un travailleur à l'étranger", action: "repérer les signes de la traite ou du travail forcé et nommer les endroits où trouver de l'aide", standard: "en nommant au moins 3 signes et 2 endroits où trouver de l'aide" },
    { id: "O6", condition: "Avant de quitter votre pays", action: "écrire une liste de sécurité pour la migration avec des copies de documents, des contacts et des numéros d'aide", standard: "qui couvre toutes les lignes de la grille d'évaluation du cours" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Choisir une voie sûre et légale",
      lessons: [
        {
          title: "Les voies légales et où trouver l'information officielle",
          objectives: ["O1"],
          minutes: 5,
          goal: "Trouver les pages officielles pour travailler légalement dans le pays où vous voulez aller.",
          text: [
            "Une voie légale veut dire que vous voyagez avec le bon visa ou le bon permis de travail pour l'emploi, délivré par le gouvernement du pays où vous allez travailler. Travailler avec un visa de touriste, ou passer une frontière avec un passeur, vous expose à de grands risques : vous pouvez être arrêté, renvoyé chez vous, ou piégé par des gens qui savent que vous avez peur de la police.",
            "Seuls les gouvernements décident des visas et des permis de travail. Les informations fiables viennent du site officiel de l'immigration du pays où vous voulez travailler, de son ambassade ou de son consulat dans votre pays, et du ministère du travail ou de la migration de votre propre pays. Beaucoup de pays de départ ont aussi des bureaux qui aident les travailleurs migrants, par exemple le Department of Migrant Workers (ministère des travailleurs migrants) aux Philippines et le portail eMigrate du ministère des Affaires étrangères de l'Inde.",
            "Les agents, les pages de réseaux sociaux, les chaînes vidéo et les amis peuvent vous aider à commencer, mais ils ne sont pas officiels. Vérifiez chaque information qu'ils vous donnent sur la page du gouvernement. Ce cours ne donne pas de conseils juridiques ni sur les visas ; si votre situation est compliquée, demandez à l'ambassade ou à un avocat autorisé.",
            "Le trafic de migrants et la traite sont deux choses différentes. Le trafic de migrants, c'est payer quelqu'un pour passer une frontière illégalement. La traite, c'est quand quelqu'un recrute ou déplace une personne par la force, le mensonge ou l'abus pour l'exploiter. Les passeurs peuvent devenir des trafiquants : c'est une raison de plus de n'utiliser que les voies légales."
          ],
          steps: ["Écrivez le pays et le type d'emploi.", "Cherchez le site officiel de l'immigration ou des visas de ce pays et son ambassade dans votre pays.", "Vérifiez l'adresse : les gouvernements utilisent en général une terminaison officielle comme .gov, .gov.ph ou .go.ke ; cherchez les armoiries de l'État et la page de contact.", "Trouvez la page sur les visas ou les permis de travail et notez ce qu'elle dit qu'il vous faut.", "Trouvez la page du ministère du travail ou de la migration de votre pays pour les personnes qui travaillent à l'étranger."],
          words: [["Voie légale", "une façon de voyager et de travailler que les gouvernements autorisent, avec le bon visa ou le bon permis."], ["Permis de travail", "l'autorisation officielle de faire un travail payé dans un pays."], ["Ambassade ou consulat", "le bureau de votre pays dans un autre pays, ou le bureau d'un autre pays dans le vôtre, qui s'occupe des visas et aide les citoyens."], ["Trafic de migrants", "payer quelqu'un pour vous faire passer une frontière illégalement."], ["Traite des personnes", "recruter ou déplacer une personne par la force, le mensonge ou l'abus pour l'exploiter."]],
          slides: [
            { title: "Une voie légale", bullets: ["Le bon visa ou le bon permis de travail pour l'emploi", "Délivré par le gouvernement du pays où vous travaillerez", "Pas de travail avec un visa de touriste, pas de passeurs"] },
            { title: "D'où viennent les informations officielles", bullets: ["Le site de l'immigration du pays de destination", "Son ambassade ou son consulat dans votre pays", "Votre propre ministère du travail ou de la migration"] },
            { title: "Pas officiel", bullets: ["Les agents, les pages de réseaux sociaux et les chaînes vidéo", "Les histoires des amis", "Vérifiez chaque information sur la page du gouvernement"] },
            { title: "Le trafic de migrants n'est pas la traite", bullets: ["Trafic : payer pour passer une frontière illégalement", "Traite : force, mensonge ou abus pour exploiter une personne", "Les passeurs peuvent devenir des trafiquants"] }
          ],
          sources: [
            { name: "ONUDC : Traite des personnes et trafic de migrants (Education for Justice)", url: "https://www.unodc.org/e4j/en/secondary/human-trafficking-and-migrant-smuggling.html" },
            { name: "Philippines : Department of Migrant Workers (DMW)", url: "https://dmw.gov.ph/" },
            { name: "Inde, ministère des Affaires étrangères : eMigrate", url: "https://emigrate.gov.in/" }
          ],
          tryIt: "Choisissez un pays où vous aimeriez peut-être travailler. Sur un téléphone ou un ordinateur, trouvez (1) sa page officielle sur l'immigration ou les visas de travail et (2) son ambassade ou son consulat dans votre pays. Écrivez les deux adresses sur papier, et une chose que chaque page dit qu'il vous faut.",
          youCanNow: "trouver les pages officielles du gouvernement et de l'ambassade pour travailler dans un autre pays, et les distinguer des pages des agents.",
          quickCheck: [
            { objective: "O1", q: "Qui décide si vous obtenez un visa de travail pour un autre pays ?", options: ["L'agent de recrutement", "Le gouvernement de ce pays", "Une chaîne vidéo connue sur les emplois à l'étranger", "Votre futur employeur, tout seul"], answer: 1, why: "Seul le gouvernement du pays de destination délivre les visas et les permis de travail." },
            { objective: "O1", q: "Un ami dit que vous pouvez travailler là-bas avec un visa de touriste. Que faites-vous ?", options: ["Vous partez, parce que votre ami l'a fait", "Vous payez un agent pour tout arranger vite", "Vous vérifiez d'abord sur la page officielle de l'immigration ou auprès de l'ambassade", "Vous demandez sur les réseaux sociaux"], answer: 2, why: "Travailler avec le mauvais visa peut vous faire arrêter ou piéger ; la page officielle vous dit ce qui est légal." }
          ]
        },
        {
          title: "Vérifier qu'une agence de recrutement a une licence",
          objectives: ["O2"],
          minutes: 5,
          goal: "Vérifier la licence d'une agence sur la liste officielle de votre gouvernement.",
          text: [
            "Dans beaucoup de pays, les agences qui envoient des travailleurs à l'étranger doivent avoir une licence du gouvernement. La licence veut dire que le gouvernement sait qui elles sont et peut agir en cas de plainte. Un agent sans licence n'est contrôlé par personne.",
            "Exemples : aux Philippines, le Department of Migrant Workers (DMW) vous permet de vérifier en ligne la situation d'une agence de recrutement. En Inde, le portail eMigrate donne la liste des agents de recrutement enregistrés, et l'agent doit montrer un certificat d'enregistrement valide. Au Kenya, la National Employment Authority (NEA, autorité nationale de l'emploi) tient la liste des agences privées de placement enregistrées. Dans d'autres pays, demandez au ministère du travail, au service public de l'emploi ou à un bureau de l'OIM quelle liste utiliser.",
            "Vérifiez le nom exact et le numéro de licence. Certains faux agents copient le nom d'une vraie agence, ou utilisent une licence expirée ou annulée. Vérifiez encore près de la date où vous payez ou signez, car les licences peuvent être suspendues. Vérifiez aussi que l'offre d'emploi ou le poste est approuvé, là où votre pays l'exige."
          ],
          steps: ["Demandez à l'agence son nom officiel complet, son adresse et son numéro de licence, par écrit.", "Ouvrez la liste officielle de votre gouvernement (pas un lien envoyé par l'agent).", "Cherchez le nom et le numéro de licence et vérifiez qu'ils correspondent.", "Vérifiez que la licence est valide aujourd'hui, et pas suspendue ni annulée.", "Si l'agence n'est pas sur la liste, arrêtez et signalez-la à l'autorité."],
          words: [["Agence de recrutement", "une entreprise qui trouve des travailleurs pour des employeurs, parfois dans d'autres pays."], ["Licence", "l'autorisation officielle du gouvernement pour faire un type d'activité."], ["Offre d'emploi approuvée (job order)", "la demande officielle de travailleurs faite par un employeur, que certains pays doivent approuver."], ["OIM", "l'Organisation internationale pour les migrations (IOM en anglais), l'agence des Nations Unies pour les migrations."]],
          slides: [
            { title: "Pourquoi la licence compte", bullets: ["Le gouvernement sait qui est l'agence", "Vous pouvez porter plainte en cas de problème", "Les agents sans licence ne sont contrôlés par personne"] },
            { title: "Où vérifier (exemples)", bullets: ["Philippines : vérification de l'agence auprès du DMW", "Inde : liste eMigrate des agents enregistrés", "Kenya : liste de la National Employment Authority"] },
            { title: "Comment vérifier", bullets: ["Obtenez le nom exact et le numéro de licence par écrit", "Utilisez la liste officielle, pas le lien de l'agent", "Le nom et le numéro doivent correspondre et être valides aujourd'hui"] },
            { title: "Pas sur la liste ?", bullets: ["Arrêtez : ne payez rien et ne remettez aucun document", "Signalez-la à l'autorité du travail ou de la migration"] }
          ],
          sources: [
            { name: "Philippines, DMW : agences de recrutement", url: "https://dmw.gov.ph/archives/poea/services/recruiters.html" },
            { name: "Inde, ministère des Affaires étrangères : questions fréquentes des futurs émigrants", url: "https://www.mea.gov.in/issues-of-intending-emigrants.htm" },
            { name: "Kenya : National Employment Authority", url: "https://www.nea.go.ke/" },
            { name: "OIM IRIS : recrutement éthique", url: "https://iris.iom.int/" }
          ],
          tryIt: "Trouvez la liste officielle des agences de recrutement agréées de votre pays (ou le bureau qui la tient). Notez l'adresse web. Puis cherchez une agence dont vous avez entendu parler, ou n'importe quelle agence de la liste, et notez son nom, son numéro de licence et si la licence est valide.",
          youCanNow: "trouver la liste officielle des agences agréées de votre pays et vérifier le nom, le numéro et la situation d'une agence.",
          quickCheck: [
            { objective: "O2", q: "Un agent vous envoie le lien d'une page qui dit que l'agence a une licence. Quelle est la vérification la plus sûre ?", options: ["Faire confiance au lien parce qu'il a l'air officiel", "Demander à l'agent d'envoyer une capture d'écran", "Compter les bons avis sur les réseaux sociaux", "Ouvrir vous-même la liste officielle de votre gouvernement et chercher le nom et le numéro"], answer: 3, why: "Les faux agents peuvent créer de fausses pages ; aller vous-même sur la liste officielle est la vraie vérification." },
            { objective: "O2", q: "Le nom de l'agence correspond à la liste officielle, mais le numéro de licence est différent. Qu'est-ce que cela laisse penser ?", options: ["Quelqu'un copie peut-être le nom d'une vraie agence", "Rien ; les numéros ne sont pas importants", "L'agence est encore plus sûre", "Vous devriez payer plus vite"], answer: 0, why: "Les faux agents copient de vrais noms ; le nom et le numéro doivent tous les deux correspondre à une licence valide." }
          ]
        },
        {
          title: "Repérer les faux recruteurs et les arnaques à l'emploi",
          objectives: ["O3"],
          minutes: 5,
          goal: "Lister les signaux d'alerte dans une offre d'emploi ou un message de recruteur.",
          text: [
            "Le recrutement équitable a une règle simple à retenir : les travailleurs ne devraient pas payer pour obtenir un emploi. Les principes de l'Organisation internationale du Travail (OIT) sur le recrutement équitable disent qu'aucuns frais de recrutement ni coûts connexes ne devraient être facturés aux travailleurs ou aux demandeurs d'emploi. C'est l'employeur qui paie. On appelle cela le principe de l'employeur payeur. Certains pays autorisent encore certains frais par la loi ; si quelqu'un vous demande de l'argent, vérifiez d'abord les règles officielles de votre pays.",
            "Signaux d'alerte fréquents : vous devez payer à l'agent des frais de placement, de formation, de visite médicale ou de visa avant de voir un contrat ; le salaire est beaucoup plus élevé que la normale pour ce travail ; l'offre arrive seulement par les réseaux sociaux ou la messagerie, sans adresse d'entreprise ; on vous presse de décider aujourd'hui ; on vous demande de voyager avec un visa de touriste ; on veut garder votre passeport ; ou l'emploi, l'employeur ou le pays change sans cesse.",
            "Autres signes : on vous dit de mentir aux agents à l'aéroport, d'emprunter de l'argent à l'agent, ou de garder l'offre secrète pour votre famille. Un vrai employeur peut être vérifié : il a une vraie adresse, un site web, et une offre d'emploi approuvée ou un contrat que vous pouvez lire avant de payer ou de voyager."
          ],
          steps: ["Lisez l'annonce ou le message lentement.", "Entourez toute demande d'argent, de votre passeport ou de secret.", "Vérifiez si le salaire et l'emploi ont du sens.", "Vérifiez l'entreprise et l'agence sur les pages officielles.", "Si vous voyez un signal d'alerte, arrêtez et demandez à l'autorité ou à un conseiller de confiance."],
          words: [["Frais de recrutement", "l'argent demandé à un travailleur pour obtenir un emploi ou y être placé."], ["Principe de l'employeur payeur", "la règle selon laquelle c'est l'employeur, et pas le travailleur, qui paie les frais de recrutement."], ["OIT", "l'Organisation internationale du Travail (ILO en anglais), l'agence des Nations Unies pour le travail et les droits des travailleurs."]],
          slides: [
            { title: "Retenez une règle", bullets: ["Les travailleurs ne devraient pas payer pour obtenir un emploi", "L'employeur paie les frais de recrutement", "On vous demande de l'argent ? Vérifiez d'abord les règles officielles"] },
            { title: "Signaux d'alerte", bullets: ["Des frais à payer à l'agent avant un contrat", "Un salaire bien au-dessus de la normale", "On vous presse : décidez aujourd'hui", "Un visa de touriste pour un emploi"] },
            { title: "Autres signaux d'alerte", bullets: ["On veut garder votre passeport", "L'emploi, l'employeur ou le pays change sans cesse", "Mentir à l'aéroport, emprunter à l'agent, garder le secret"] },
            { title: "Une vraie offre se vérifie", bullets: ["Une vraie adresse d'entreprise et un site web", "Une agence avec une licence", "Un contrat lu avant de payer ou de voyager"] }
          ],
          sources: [
            { name: "OIT : Principes généraux et directives opérationnelles concernant le recrutement équitable et définition des commissions de recrutement et frais connexes", url: "https://www.ilo.org/publications/general-principles-and-operational-guidelines-fair-recruitment-and" },
            { name: "OIM IRIS : recrutement éthique (principe de l'employeur payeur)", url: "https://iris.iom.int/" }
          ],
          tryIt: "Lisez cette annonce d'exercice : Emplois dans des hôtels à Dubaï ! Salaire 3 fois la normale. Aucune expérience. Envoyez 500 dollars pour le visa aujourd'hui, plus que 5 places. Seulement par WhatsApp. Notez chaque signal d'alerte que vous trouvez (il y en a au moins quatre).",
          youCanNow: "lister les signaux d'alerte d'un faux recruteur ou d'une arnaque à l'emploi dans une annonce ou un message.",
          quickCheck: [
            { objective: "O3", q: "Un recruteur vous demande de payer des frais de placement avant de voir un contrat. Qu'est-ce que c'est ?", options: ["Normal pour tout emploi à l'étranger", "Un signe que l'emploi est très bon", "Un signal d'alerte ; les travailleurs ne devraient pas payer pour obtenir un emploi", "Un impôt du gouvernement"], answer: 2, why: "Les principes de l'OIT sur le recrutement équitable disent qu'on ne doit pas faire payer de frais de recrutement aux travailleurs ; payer avant un contrat est un signe clé d'arnaque." },
            { objective: "O3", q: "Quel message contient le PLUS de signaux d'alerte ?", options: ["Voici notre adresse et notre numéro de licence ; lisez d'abord le contrat", "Payez aujourd'hui, gardez le secret, et voyagez avec un visa de touriste", "Merci d'envoyer votre CV pour l'entretien", "L'employeur paie votre billet d'avion ; voir le contrat joint"], answer: 1, why: "La précipitation, le secret et un visa de touriste pour un emploi sont tous des signaux d'alerte." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Choisir une voie sûre et légale",
        questions: [
          { objective: "O1", q: "Quel est l'endroit le plus fiable pour vérifier les règles des visas de travail ?", options: ["La page de réseau social d'un recruteur", "Une vidéo de quelqu'un qui est parti à l'étranger", "Le conseil d'un ami", "Le site officiel de l'immigration ou l'ambassade du pays de destination"], answer: 3, why: "Seul le gouvernement décide des visas, donc ses pages officielles sont la source fiable." },
          { objective: "O1", q: "Quelle est la différence entre le trafic de migrants et la traite ?", options: ["Le trafic, c'est payer pour passer une frontière illégalement ; la traite utilise la force, le mensonge ou l'abus pour exploiter une personne", "Ils veulent dire la même chose", "Le trafic de migrants est légal", "La traite n'a lieu qu'aux frontières"], answer: 0, why: "La traite concerne l'exploitation d'une personne ; le trafic de migrants concerne le passage illégal d'une frontière." },
          { objective: "O2", q: "Où devez-vous vérifier si une agence a une licence ?", options: ["Seulement sur le site de l'agence elle-même", "Sur la liste officielle des agences agréées de votre gouvernement", "En demandant à d'autres chercheurs d'emploi dans un groupe de discussion", "En regardant les meubles du bureau de l'agence"], answer: 1, why: "La liste officielle de l'autorité du travail ou de la migration montre si la licence est vraie et valide." },
          { objective: "O2", q: "L'agence n'est pas sur la liste officielle. Que faites-vous ?", options: ["Vous payez un acompte plus petit", "Vous leur donnez une copie de votre passeport à garder", "Vous arrêtez, et vous la signalez à l'autorité du travail ou de la migration", "Vous leur demandez d'envoyer un plus beau site web"], answer: 2, why: "Un agent sans licence n'est contrôlé par personne ; arrêtez et signalez-le." },
          { objective: "O3", q: "Que veut dire le principe de l'employeur payeur ?", options: ["Le travailleur paie la moitié", "Le gouvernement paie les frais du travailleur", "L'agent décide qui paie", "C'est l'employeur, et pas le travailleur, qui paie les frais de recrutement"], answer: 3, why: "Dans le recrutement équitable, les frais de recrutement sont payés par l'employeur, pas par les travailleurs." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Vous protéger avant et après le départ",
      lessons: [
        {
          title: "Lire l'offre d'emploi et le contrat",
          objectives: ["O4"],
          minutes: 6,
          goal: "Vérifier qu'une offre d'emploi contient par écrit les détails nécessaires.",
          text: [
            "Un emploi honnête vient avec une offre écrite ou un contrat que vous pouvez lire, dans une langue que vous comprenez, avant de payer quoi que ce soit, de signer ou de voyager. Demandez une copie à garder. Si vous ne comprenez pas un mot, demandez à l'agence, au bureau du travail ou à une personne de confiance de vous l'expliquer.",
            "Vérifiez qu'il indique : l'employeur et son adresse ; le poste et ses tâches principales ; le lieu où vous travaillerez ; le salaire, à quelle fréquence et comment il est payé ; les horaires, les jours de repos et les heures supplémentaires ; la durée du contrat ; le logement et la nourriture, et s'ils sont retenus sur votre salaire ; qui paie le billet d'avion, le visa, la visite médicale et les frais de recrutement ; et comment vous pouvez mettre fin au contrat et rentrer chez vous.",
            "La substitution de contrat est une ruse fréquente : vous signez un contrat chez vous, et on vous en donne un autre, moins bon, à votre arrivée. Gardez une photo de chaque page que vous signez. Si le contrat qu'on vous donne à l'étranger est différent, ne le signez pas dans la précipitation ; contactez votre ambassade ou le bureau du travail."
          ],
          steps: ["Obtenez l'offre ou le contrat complet par écrit et gardez-en une copie.", "Utilisez une liste : employeur, poste, lieu, salaire, horaires, jours de repos, durée, logement, frais, retour.", "Marquez tout ce qui manque ou qui est différent de ce qu'on vous a dit.", "Demandez des réponses par écrit avant de signer.", "Photographiez chaque page que vous signez et gardez les photos en lieu sûr."],
          words: [["Contrat", "un accord écrit entre vous et l'employeur sur l'emploi."], ["Heures supplémentaires", "le travail au-delà de vos horaires normaux, qui doit être payé."], ["Retenue", "de l'argent pris sur votre salaire, par exemple pour le logement."], ["Substitution de contrat", "quand le contrat que vous recevez à l'étranger est différent et moins bon que celui signé chez vous."]],
          slides: [
            { title: "Avant de payer, de signer ou de voyager", bullets: ["Obtenez l'offre par écrit", "Dans une langue que vous comprenez", "Gardez votre propre copie"] },
            { title: "Il doit indiquer", bullets: ["L'employeur, le poste, le lieu de travail", "Le salaire, les horaires, les jours de repos, les heures supplémentaires", "La durée du contrat, le logement, les retenues"] },
            { title: "Et il doit indiquer", bullets: ["Qui paie le billet, le visa, la visite médicale et le recrutement", "Comment mettre fin au contrat et rentrer chez vous"] },
            { title: "Attention à la substitution de contrat", bullets: ["Photographiez chaque page que vous signez", "Un autre contrat à l'étranger ? Ne vous pressez pas", "Contactez votre ambassade ou le bureau du travail"] }
          ],
          sources: [
            { name: "OIT : Principes généraux et directives opérationnelles concernant le recrutement équitable", url: "https://www.ilo.org/publications/general-principles-and-operational-guidelines-fair-recruitment-and" }
          ],
          tryIt: "Écrivez sur papier la liste de dix points du contrat de cette leçon. Puis lisez une offre d'exercice (inventez-en une, ou utilisez une vraie en cachant vos numéros privés) et cochez chaque point qui est écrit. Entourez chaque point qui manque.",
          youCanNow: "vérifier qu'une offre d'emploi ou un contrat contient les détails nécessaires et lister ce qui manque avant de signer.",
          quickCheck: [
            { objective: "O4", q: "Quand devez-vous lire le contrat complet ?", options: ["Après votre arrivée dans le nouveau pays", "Avant de payer, de signer ou de voyager", "Seulement s'il y a un problème", "L'agent le lit pour vous"], answer: 1, why: "Vous devez connaître les conditions avant d'engager de l'argent, de signer ou de quitter votre pays." },
            { objective: "O4", q: "À votre nouveau travail, on vous donne un autre contrat avec un salaire plus bas. Comment cela s'appelle-t-il ?", options: ["Une promotion", "Une mise à jour normale", "Une substitution de contrat", "Une prime"], answer: 2, why: "Remplacer le contrat par un moins bon après l'arrivée s'appelle une substitution de contrat, un abus connu." }
          ]
        },
        {
          title: "Connaître les signes de la traite et du travail forcé",
          objectives: ["O5"],
          minutes: 5,
          goal: "Nommer les signes de la traite et les endroits où trouver de l'aide.",
          text: [
            "Les Nations Unies définissent la traite en trois parties : un acte (recruter, déplacer, héberger ou accueillir une personne), un moyen (la force, les menaces, le mensonge, l'abus de pouvoir ou de la situation de faiblesse de quelqu'un) et un but (l'exploitation, comme le travail forcé ou l'exploitation sexuelle). Pour les enfants de moins de 18 ans, il n'y a pas besoin de force ni de mensonge pour que ce soit de la traite.",
            "Signes à surveiller : votre passeport ou votre pièce d'identité est pris et gardé par l'employeur ou l'agent ; vous avez une dette qui ne cesse de grandir et vous ne pouvez pas partir avant de la payer ; vous n'êtes pas payé, ou beaucoup moins que promis ; vous ne pouvez pas quitter librement le lieu de travail ou le logement ; on vous menace, ou on vous dit que la police va vous arrêter ; vous travaillez de très longues heures sans jour de repos ; vous êtes coupé de votre famille et privé de téléphone.",
            "L'aide existe. Contactez l'ambassade ou le consulat de votre pays, le bureau du travail ou la police du pays où vous êtes, un bureau de l'OIM, ou une organisation de travailleurs de confiance. Beaucoup de pays ont des lignes d'aide pour les travailleurs migrants et les victimes de la traite : cherchez le numéro officiel dès maintenant et enregistrez-le. Si vous ou quelqu'un d'autre êtes en danger immédiat, appelez d'abord le numéro d'urgence local."
          ],
          words: [["Travail forcé", "un travail qu'une personne est obligée de faire sous la menace ou la punition, et qu'elle n'a pas librement accepté."], ["Servitude pour dettes", "être obligé de travailler pour rembourser une dette qui ne semble jamais finir."], ["Exploitation", "utiliser une personne de façon injuste pour le profit de quelqu'un d'autre."]],
          slides: [
            { title: "La traite a trois parties", bullets: ["Acte : recruter, déplacer, héberger ou accueillir une personne", "Moyen : force, menaces, mensonge, abus de pouvoir", "But : l'exploitation, comme le travail forcé"] },
            { title: "Signes à surveiller", bullets: ["Passeport ou pièce d'identité pris et gardé", "Une dette qui ne cesse de grandir", "Pas de salaire, ou beaucoup moins que promis"] },
            { title: "Autres signes", bullets: ["Pas libre de quitter le travail ou le logement", "Des menaces, ou on vous dit que la police va vous arrêter", "Coupé de la famille et privé de téléphone"] },
            { title: "Où trouver de l'aide", bullets: ["Danger immédiat : d'abord le numéro d'urgence local", "Votre ambassade ou consulat, le bureau du travail, la police", "Un bureau de l'OIM, des groupes de travailleurs, les lignes d'aide officielles"] }
          ],
          sources: [
            { name: "ONUDC : questions fréquentes sur la traite des personnes", url: "https://www.unodc.org/unodc/en/human-trafficking/faqs.html" },
            { name: "ONUDC Education for Justice : le crime de traite des personnes", url: "https://www.unodc.org/e4j/en/tip-and-som/module-6/key-issues/crime-of-trafficking-in-persons.html" },
            { name: "OIM : Organisation internationale pour les migrations", url: "https://www.iom.int/" }
          ],
          tryIt: "Lisez cette histoire d'exercice : Amina est partie à l'étranger pour faire le ménage dans des maisons. À son arrivée, l'agent a gardé son passeport, soi-disant pour le mettre en sécurité. On lui dit qu'elle doit 2 000 dollars pour son voyage, et cette somme augmente chaque mois. Elle travaille 14 heures par jour sans jour de repos, et on lui dit que la police va l'arrêter si elle part. Notez chaque signe de traite ou de travail forcé, et deux endroits où Amina pourrait trouver de l'aide.",
          youCanNow: "repérer les signes de la traite et du travail forcé et nommer des endroits où un travailleur peut trouver de l'aide.",
          quickCheck: [
            { objective: "O5", q: "Votre employeur à l'étranger dit qu'il doit garder votre passeport. Qu'est-ce que c'est ?", options: ["Un signal d'alerte de travail forcé ou de traite", "Un service normal pour le garder en sécurité", "Une obligation légale partout", "Le signe d'un bon employeur"], answer: 0, why: "Prendre et garder le passeport d'un travailleur est un signe fréquent de travail forcé et de traite." },
            { objective: "O5", q: "Un travailleur est en danger en ce moment. Quelle est la première étape ?", options: ["Publier un message sur les réseaux sociaux", "Attendre la fin du contrat", "Appeler le numéro d'urgence local", "Payer la dette à l'employeur"], answer: 2, why: "En cas de danger immédiat, le numéro d'urgence local passe en premier ; ensuite l'ambassade et les autres aides." }
          ]
        },
        {
          title: "Votre liste de sécurité pour la migration",
          objectives: ["O6"],
          minutes: 6,
          goal: "Écrire un plan de sécurité avec vos documents, vos contacts et vos numéros d'aide avant de partir.",
          text: [
            "Avant de partir, préparez un plan. Gardez votre propre passeport et vos documents avec vous. Faites des copies : une copie papier chez vous avec une personne de confiance, et une photo dans un endroit sûr que vous pouvez ouvrir depuis n'importe quel téléphone, comme votre propre adresse e-mail. Ne publiez pas de photos de votre passeport en ligne.",
            "Notez vos contacts : une personne de confiance au pays qui attend de vos nouvelles à des jours fixes ; les noms complets, adresses et numéros de téléphone de l'employeur et de l'agence ; l'ambassade ou le consulat de votre pays dans le pays de destination ; et les lignes d'aide officielles que vous avez trouvées sur les pages du gouvernement. Mettez-vous d'accord avec votre personne de confiance sur un mot code qui veut dire : j'ai besoin d'aide.",
            "Gardez une trace simple de votre travail : les dates et les heures où vous travaillez et ce qu'on vous paie. Gardez les photos de votre contrat. Si quelque chose tourne mal, ces traces aident l'ambassade, le bureau du travail ou un avocat à vous aider. Puis rassemblez tout cela, avec les vérifications des leçons précédentes, dans une seule liste : c'est votre tâche finale."
          ],
          steps: ["Listez les pages officielles que vous avez utilisées (immigration, ambassade, votre ministère du travail).", "Écrivez le nom de l'agence, son numéro de licence et comment vous l'avez vérifié.", "Listez chaque frais et qui le paie.", "Cochez la liste du contrat.", "Écrivez vos signaux d'alerte pour arrêter.", "Écrivez votre plan d'aide : copies des documents, personne de confiance, jours de nouvelles, mot code, numéros de l'ambassade et des lignes d'aide que vous avez cherchés vous-même."],
          words: [["Personne de confiance", "une personne au pays qui connaît vos projets et attend de vos nouvelles."], ["Prise de nouvelles", "un message ou un appel prévu pour dire que vous allez bien."], ["Mot code", "un mot convenu à l'avance qui veut dire en secret : j'ai besoin d'aide."]],
          slides: [
            { title: "Gardez vos documents", bullets: ["Votre passeport reste avec vous", "Une copie papier au pays chez une personne de confiance", "Une photo en lieu sûr, jamais publiée en ligne"] },
            { title: "Vos contacts", bullets: ["Personne de confiance au pays, jours de nouvelles, mot code", "Noms et adresses de l'employeur et de l'agence", "Ambassade et lignes d'aide officielles que vous avez cherchées"] },
            { title: "Gardez des traces", bullets: ["Les dates et les heures où vous travaillez", "Ce qu'on vous paie", "Les photos de votre contrat"] },
            { title: "Votre liste", bullets: ["Pages officielles et vérification de la licence de l'agence", "Frais et qui les paie, détails du contrat", "Signaux d'alerte et votre plan d'aide"] }
          ],
          sources: [
            { name: "OIM : Organisation internationale pour les migrations", url: "https://www.iom.int/" },
            { name: "Philippines : Department of Migrant Workers (exemple de bureau pour les travailleurs migrants)", url: "https://dmw.gov.ph/" }
          ],
          tryIt: "Tâche finale : préparez votre liste de sécurité pour la migration pour un vrai emploi à l'étranger ou un emploi d'exercice. Mettez-y les pages officielles, la vérification de la licence de l'agence, les frais et qui les paie, les détails du contrat, vos signaux pour arrêter et votre plan d'aide. Utilisez des blancs comme [numéro de passeport] au lieu de vrais numéros.",
          youCanNow: "écrire une liste de sécurité pour la migration qui garde vos documents, vos contacts et vos numéros d'aide prêts avant le départ.",
          quickCheck: [
            { objective: "O6", q: "Où doit être votre passeport quand vous travaillez à l'étranger ?", options: ["Chez l'agent", "Chez l'employeur", "Chez un ami rencontré pendant le voyage", "Avec vous, avec des copies gardées au pays"], answer: 3, why: "Gardez votre propre passeport ; des copies chez une personne de confiance aident s'il est perdu ou pris." },
            { objective: "O6", q: "Pourquoi convenir d'un mot code avec une personne de confiance au pays ?", options: ["Pour avoir une réduction sur les appels", "Pour pouvoir demander de l'aide sans que les autres le sachent", "Pour déverrouiller votre téléphone", "Pour obtenir un visa plus vite"], answer: 1, why: "Un mot code vous permet de signaler un danger même si quelqu'un écoute." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Vous protéger avant et après le départ",
        questions: [
          { objective: "O4", q: "Quel point DOIT être écrit avant de signer ?", options: ["Qui paie le billet d'avion, le visa et les frais de recrutement", "La ville préférée de l'agent", "La couleur de votre uniforme", "Vos projets de vacances"], answer: 0, why: "Les frais et qui les paie vous protègent des frais cachés et des dettes." },
          { objective: "O4", q: "L'offre ne dit pas combien d'heures vous travaillerez. Que faites-vous ?", options: ["Vous signez ; les heures ne comptent pas", "Vous devinez les heures", "Vous demandez les heures par écrit avant de signer", "Vous attendez de voir après votre arrivée"], answer: 2, why: "Les conditions qui manquent doivent recevoir une réponse écrite avant que vous vous engagiez." },
          { objective: "O5", q: "Quel est un signe de servitude pour dettes ?", options: ["Vous recevez une fiche de paie chaque mois", "Une dette qui ne cesse de grandir et vous ne pouvez pas partir avant de l'avoir payée", "Vous avez un jour de repos chaque semaine", "Vous pouvez appeler votre famille"], answer: 1, why: "Une dette qui grandit et vous empêche de partir est une servitude pour dettes, une forme de travail forcé." },
          { objective: "O5", q: "Où un travailleur migrant en difficulté peut-il trouver de l'aide ?", options: ["Auprès de l'agent qui a pris le passeport", "Auprès d'un inconnu en ligne qui demande des frais", "Auprès de l'employeur qui ne paie pas", "Auprès de l'ambassade ou du consulat de son pays"], answer: 3, why: "L'ambassade ou le consulat aide ses citoyens à l'étranger, avec le bureau du travail, la police, l'OIM et les lignes d'aide." },
          { objective: "O6", q: "Où devez-vous trouver les numéros des lignes d'aide pour votre plan ?", options: ["Sur les pages officielles du gouvernement ou de l'ambassade que vous avez consultées vous-même", "Dans le message du recruteur", "Dans un commentaire sur les réseaux sociaux", "Vous n'en avez pas besoin"], answer: 0, why: "Les numéros des pages officielles sont vrais ; un escroc peut envoyer de faux numéros d'aide." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Partir travailler à l'étranger en sécurité",
    questions: [
      { objective: "O1", q: "Qu'est-ce qu'une voie légale pour travailler à l'étranger ?", options: ["Voyager avec un visa de touriste et trouver du travail", "Payer un passeur pour passer la frontière", "Travailler avec le bon visa ou le bon permis de travail du gouvernement de destination", "Utiliser le passeport d'un ami"], answer: 2, why: "Une voie légale utilise le visa ou le permis que le gouvernement de destination délivre pour ce travail." },
      { objective: "O1", q: "Quelle source est officielle ?", options: ["Le site de l'ambassade du pays de destination", "La vidéo d'un recruteur", "Un groupe de discussion sur les emplois", "Une affiche à un arrêt de bus"], answer: 0, why: "Les ambassades et les sites de l'immigration sont gérés par les gouvernements." },
      { objective: "O1", q: "Pourquoi le trafic de migrants peut-il être dangereux pour un travailleur ?", options: ["C'est toujours moins cher", "Les passeurs peuvent devenir des trafiquants, et vous n'avez aucune protection légale", "Cela donne un permis de travail", "Les ambassades le préfèrent"], answer: 1, why: "Sans statut légal, il est facile de vous menacer, et les passeurs peuvent vous exploiter." },
      { objective: "O2", q: "Pourquoi la licence d'une agence de recrutement est-elle importante ?", options: ["Elle rend l'emploi mieux payé", "Elle veut dire que l'emploi est garanti", "Elle permet à l'agence de demander n'importe quels frais", "Le gouvernement connaît l'agence et peut agir en cas de plainte"], answer: 3, why: "Une licence place l'agence sous les règles du gouvernement et ses systèmes de plainte." },
      { objective: "O2", q: "Aux Philippines, quel bureau vous permet de vérifier la situation d'une agence de recrutement ?", options: ["Le Department of Migrant Workers (DMW)", "Une page privée sur les réseaux sociaux", "La compagnie aérienne", "N'importe quelle banque"], answer: 0, why: "Le DMW délivre les licences aux agences et propose une vérification en ligne de leur situation." },
      { objective: "O2", q: "Quelles deux choses doivent correspondre sur la liste officielle ?", options: ["Le téléphone et l'e-mail de l'agent", "Le logo et les couleurs de l'agence", "Le nom exact de l'agence et son numéro de licence", "La taille du bureau et le nombre d'employés"], answer: 2, why: "Les faux agents copient de vrais noms, donc le nom et le numéro de licence doivent tous les deux correspondre à une licence valide." },
      { objective: "O3", q: "Selon les principes de l'OIT sur le recrutement équitable, qui doit payer les frais de recrutement ?", options: ["Le travailleur", "La famille du travailleur", "L'employeur, pas le travailleur", "Le village du travailleur"], answer: 2, why: "Les principes disent qu'aucuns frais de recrutement ni coûts connexes ne doivent être facturés aux travailleurs : l'employeur paie." },
      { objective: "O3", q: "Quel est un signal d'alerte d'un faux emploi ?", options: ["Un contrat écrit avant de payer", "Une agence avec une licence et une adresse", "Un salaire normal pour le travail", "Un salaire bien plus élevé que la normale sans expérience"], answer: 3, why: "Les offres trop belles pour être vraies sont un moyen courant de piéger les gens." },
      { objective: "O3", q: "Un recruteur vous dit de garder l'emploi secret pour votre famille. Qu'est-ce que cela laisse penser ?", options: ["Un signal d'alerte ; un emploi honnête n'a pas besoin de secret", "Une règle normale d'entreprise", "Le signe d'un salaire élevé", "Une exigence du visa"], answer: 0, why: "Le secret vous coupe des personnes qui pourraient vous prévenir ou vous aider." },
      { objective: "O3", q: "On vous dit de dire que vous êtes touriste à l'aéroport. Que faites-vous ?", options: ["Vous le faites ; tout le monde le fait", "Vous arrêtez : c'est un signal d'alerte d'une voie illégale et dangereuse", "Vous demandez un salaire plus élevé", "Vous mentez mais vous prenez plus d'argent"], answer: 1, why: "Si on vous dit de mentir aux agents officiels, la voie n'est pas légale et vous pourriez être piégé." },
      { objective: "O4", q: "Qu'est-ce qu'un contrat honnête doit indiquer ?", options: ["L'âge de l'agent", "Votre religion", "Le salaire et comment il est payé", "Votre nom sur les réseaux sociaux"], answer: 2, why: "Le salaire, les horaires, le lieu, les frais et les conditions de retour doivent être écrits." },
      { objective: "O4", q: "Pourquoi photographier chaque page que vous signez ?", options: ["Pour la publier en ligne", "Pour prouver ce que vous avez accepté si le contrat est changé plus tard", "Pour la montrer à vos amis", "Parce que l'agent le demande"], answer: 1, why: "Les photos vous protègent contre la substitution de contrat." },
      { objective: "O4", q: "Le contrat est dans une langue que vous ne savez pas lire. Quelle est la meilleure étape ?", options: ["Le demander dans une langue que vous comprenez, ou le faire expliquer par une personne de confiance, avant de signer", "Signer vite", "Demander à l'agent de signer pour vous", "Ne pas en tenir compte"], answer: 0, why: "Vous devez comprendre chaque condition avant de signer." },
      { objective: "O5", q: "Quelle est l'une des trois parties de la traite dans la définition des Nations Unies ?", options: ["Un billet d'avion", "Une offre d'emploi", "Un visa", "L'exploitation comme but"], answer: 3, why: "La traite a un acte, un moyen et un but : l'exploitation." },
      { objective: "O5", q: "Quel est un signe de travail forcé ?", options: ["Être payé à temps", "Entendre que la police va vous arrêter si vous partez", "Avoir un jour de repos", "Garder votre propre passeport"], answer: 1, why: "Les menaces pour empêcher un travailleur de partir sont un signe de travail forcé." },
      { objective: "O5", q: "Pour un enfant de moins de 18 ans, qu'est-ce qui est vrai sur la traite ?", options: ["Ce n'est de la traite que si la force est utilisée", "Les enfants ne peuvent pas être victimes de la traite", "Il n'y a pas besoin de force ni de mensonge pour que ce soit de la traite", "Seuls les parents peuvent la signaler"], answer: 2, why: "Selon le Protocole des Nations Unies, recruter ou déplacer un enfant pour l'exploiter est de la traite, même sans force ni mensonge." },
      { objective: "O5", q: "Où pouvez-vous trouver de l'aide à l'étranger ?", options: ["Dans un bureau de l'OIM", "Auprès de l'employeur qui garde votre passeport", "Auprès d'un usurier", "Auprès d'un agent sans licence"], answer: 0, why: "L'OIM, les ambassades, les bureaux du travail, la police et les lignes d'aide officielles peuvent aider." },
      { objective: "O6", q: "Que devez-vous mettre dans votre plan d'aide ?", options: ["Seulement vos chansons préférées", "Le code secret de votre carte bancaire", "Votre passeport remis à l'agent", "Une personne de confiance, des jours de nouvelles, un mot code et des numéros d'aide officiels"], answer: 3, why: "Ainsi, quelqu'un remarquera si vous êtes en difficulté, et vous saurez qui appeler." },
      { objective: "O6", q: "Où devez-vous garder une copie de votre passeport ?", options: ["Publiée sur les réseaux sociaux", "Chez une personne de confiance au pays et dans un endroit sûr que vous pouvez ouvrir", "Seulement chez le recruteur", "Nulle part"], answer: 1, why: "Des copies chez une personne de confiance et dans un endroit privé et sûr aident si votre passeport est perdu ou pris." },
      { objective: "O6", q: "Pourquoi garder une trace de vos heures et de votre salaire à l'étranger ?", options: ["Pour vous vanter", "L'employeur la demande", "Elle aide l'ambassade ou le bureau du travail à vous aider si quelque chose tourne mal", "Elle est nécessaire pour un visa de touriste"], answer: 2, why: "Les traces prouvent combien vous avez travaillé et combien vous avez été payé." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 6, 8, 10, 13, 15, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Information officielle", objective: "O1", notYet: "Utilise seulement la page d'un agent, d'un ami ou d'un réseau social.", meets: "Liste la page officielle de l'immigration du pays de destination et son ambassade dans votre pays.", exceeds: "Liste aussi la page du ministère du travail ou de la migration de votre pays et ce que chaque page dit qu'il vous faut." },
      { name: "Agence vérifiée", objective: "O2", notYet: "Aucune vérification de l'agence, ou la vérification a utilisé un lien de l'agent.", meets: "Le nom et le numéro de licence de l'agence sont vérifiés sur la liste officielle et valides aujourd'hui.", exceeds: "A aussi vérifié que l'offre d'emploi ou le poste est approuvé, là où votre pays l'exige." },
      { name: "Frais et signaux d'alerte", objective: "O3", notYet: "Les frais ne sont pas listés, ou des frais à la charge du travailleur sont acceptés sans question.", meets: "Chaque frais est listé avec qui le paie, et au moins quatre signaux pour arrêter sont écrits.", exceeds: "A vérifié les règles officielles sur les frais dans votre pays et a noté où." },
      { name: "Détails du contrat", objective: "O4", notYet: "Moins de six des dix points du contrat sont vérifiés.", meets: "Les dix points du contrat sont listés et ceux qui manquent sont marqués.", exceeds: "A écrit les questions à poser par écrit pour chaque point manquant." },
      { name: "Plan d'aide", objective: "O5", notYet: "Aucun numéro d'aide, ou des numéros donnés par le recruteur.", meets: "L'ambassade et au moins une ligne d'aide officielle, trouvées sur des pages officielles, plus le numéro d'urgence local.", exceeds: "Nomme aussi un bureau de l'OIM ou une organisation de travailleurs près du lieu de travail." },
      { name: "Documents et contacts", objective: "O6", notYet: "Aucune copie de documents ni personne de confiance.", meets: "Des copies des documents gardées au pays et dans un endroit sûr, une personne de confiance et des jours de nouvelles.", exceeds: "Aussi un mot code et un plan pour noter les heures et le salaire." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui disent avoir vérifié la licence d'une agence avant de payer ou de signer (suivi à 30 jours)",
      "Apprenants qui disent avoir refusé ou signalé une offre d'emploi qui leur demandait de payer des frais ou de remettre un passeport",
      "Les organisations partenaires signalent moins d'apprenants qui perdent de l'argent à cause de faux recruteurs"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec internet pour consulter les pages officielles",
      "Du papier et un stylo pour les listes et les histoires d'exercice",
      "Les adresses de l'autorité du travail ou de la migration de votre pays et de la liste des agences (l'animateur peut les chercher à l'avance)",
      "Environ 60 à 75 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "Avant la séance, trouvez la liste officielle des agences agréées de votre pays, le bureau des travailleurs migrants et les numéros des lignes d'aide officielles, et vérifiez qu'ils sont à jour.",
      "Ne donnez pas de conseils sur les visas ni de conseils juridiques ; envoyez les apprenants vers l'ambassade, la page officielle de l'immigration ou un avocat autorisé.",
      "Ne demandez jamais aux apprenants de partager de vrais numéros de passeport, de pièce d'identité ou de compte bancaire ; utilisez des blancs comme [numéro de passeport].",
      "Certains apprenants ou leurs familles ont peut-être été trompés ou exploités. Parlez sans reproche et partagez les services d'aide locaux en privé.",
      "Si un apprenant dit que lui-même ou quelqu'un d'autre est en danger en ce moment, aidez-le d'abord à appeler le numéro d'urgence local."
    ]
  }
};
