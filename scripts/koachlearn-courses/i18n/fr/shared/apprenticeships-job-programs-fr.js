"use strict";

// Koach Learn course (French translation of shared/apprenticeships-job-programs.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "apprenticeships-job-programs-fr",
  lang: "fr",
  translationOf: "apprenticeships-job-programs",
  category: "Workforce Development",
  name: "Trouver un apprentissage ou un programme de formation professionnelle",
  skills: "Distinguer les types de programmes, Chercher sur apprenticeship.gov, Utiliser un American Job Center, Vérifier qu'un programme est réel, Rassembler les documents de candidature, Faire un plan de candidature",
  outcome: "trouver de vrais apprentissages et des programmes de formation gratuits ou peu chers près de chez vous, vérifier qu'ils sont réels et qu'ils vous conviennent, rassembler ce qu'il faut pour postuler, et faire un plan daté pour postuler à deux d'entre eux.",
  about: [
    "Ce cours s'adresse à toute personne qui veut être payée pendant qu'elle apprend un métier, ou suivre une formation gratuite pour un meilleur emploi : jeunes qui quittent l'école, adultes en reconversion, anciens militaires et personnes qui sortent de prison.",
    "Vous apprendrez la différence entre un apprentissage, un pré-apprentissage et un programme de formation professionnelle ; vous chercherez sur le Job Finder officiel d'apprenticeship.gov ; vous utiliserez votre American Job Center local ; vous repérerez les faux programmes et les arnaques à l'emploi ; et vous rassemblerez les papiers que les programmes demandent.",
    "Ce cours vous PRÉPARE à trouver un programme et à postuler. Il ne vous inscrit à aucun programme et ne promet aucune place. Les règles, les âges et les places disponibles changent : chaque leçon vous montre la page officielle à vérifier.",
    "Chaque leçon dure environ cinq minutes. Lisez, regardez les diapositives, puis faites la tâche « Essayez maintenant » sur papier ou sur un téléphone. Il y a une vérification rapide après chaque leçon, un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Préparez un « Plan de candidature » d'une page : l'emploi que vous visez ; deux vrais programmes que vous avez trouvés (sur apprenticeship.gov, dans un American Job Center, à Job Corps, à YouthBuild, auprès d'un syndicat ou d'un collège), avec pour chacun l'organisme responsable, le lieu, les conditions et la façon de postuler ; les vérifications faites pour vous assurer que chacun est réel ; la liste des documents que vous avez et de ceux qui vous manquent ; et cinq prochaines étapes, chacune avec une date.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des personnes de 16 ans et plus qui cherchent un emploi aux États-Unis : jeunes qui quittent le lycée ou qui n'ont pas de diplôme, adultes en reconversion, anciens militaires et personnes qui sortent de prison. Beaucoup vivent dans des quartiers à faibles revenus ou en zone rurale et doivent gagner de l'argent pendant leur formation.",
    startingPoint: "Savent utiliser un téléphone ou un ordinateur de bibliothèque pour chercher sur le web. La plupart ont entendu parler d'apprentissage ou de formation, mais ne savent pas comment trouver un vrai programme, qui le paie, ni ce qu'il faut pour postuler. Certains ont déjà été visés par des arnaques où il faut payer pour être formé.",
    gap: "Des apprentissages rémunérés et des formations gratuites existent dans chaque État, mais les gens passent à côté parce qu'ils ne savent pas où chercher ni quoi demander. Les apprenants doivent trouver de vrais programmes sur des sites officiels, les vérifier et postuler à temps, pour accéder à un emploi mieux payé sans s'endetter.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (environ la 6e année aux États-Unis, 11 à 12 ans)",
      "Appareils : un téléphone, ou un ordinateur de bibliothèque ou de centre pour l'emploi avec un temps limité",
      "Temps : leçons de 4 à 6 minutes, à placer entre le travail et l'école",
      "Les programmes, les âges et les règles varient selon l'État et changent ; les apprenants vérifient les pages officielles (apprenticeship.gov, dol.gov, jobcorps.gov, va.gov)",
      "Risque d'arnaque : ne jamais payer pour obtenir un emploi et ne jamais partager de numéros privés dans les exercices"
    ],
    prerequisites: "Aucun. Les apprenants qui n'ont pas encore choisi de domaine peuvent d'abord suivre « Les carrières dans les métiers qualifiés » ; ceux qui ont besoin d'un CV peuvent suivre « CV, LinkedIn et entretiens »."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "À partir de courtes descriptions de cinq programmes", action: "classer chacun comme apprentissage, pré-apprentissage ou programme de formation professionnelle", standard: "avec au moins 4 bonnes réponses sur 5" },
    { id: "O2", condition: "Avec le Job Finder d'apprenticeship.gov sur un téléphone ou un ordinateur", action: "chercher des apprentissages dans votre domaine et votre région et noter deux annonces", standard: "avec l'organisme responsable, le lieu et la façon de postuler pour chacune" },
    { id: "O3", condition: "Avec CareerOneStop ou la ligne téléphonique du DOL", action: "trouver l'American Job Center le plus proche et écrire les questions à poser sur les formations gratuites", standard: "avec au moins quatre questions, dont une sur l'aide au financement de la formation" },
    { id: "O4", condition: "Face à une annonce ou une offre de programme", action: "vérifier si le programme est réel et s'il vaut votre temps", standard: "avec au moins trois vérifications, dont les signaux d'alerte d'une arnaque où il faut payer pour obtenir un emploi" },
    { id: "O5", condition: "Pour un programme qui vous intéresse", action: "lister ses conditions et les documents nécessaires pour postuler", standard: "en indiquant ceux que vous avez déjà et où obtenir les autres" },
    { id: "O6", condition: "Pour deux programmes que vous avez trouvés", action: "écrire un plan de candidature avec des prochaines étapes datées", standard: "avec au moins cinq étapes, les dates limites et une date de relance" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Connaître vos options et où les trouver",
      lessons: [
        {
          title: "Apprentissage, pré-apprentissage ou programme de formation ?",
          objectives: ["O1"],
          minutes: 5,
          goal: "Reconnaître les trois grands types de programmes et celui qui vous convient maintenant.",
          text: [
            "Un Registered Apprenticeship (apprentissage enregistré) est un emploi. Le site apprenticeship.gov du ministère du Travail des États-Unis (Department of Labor, DOL) dit que les apprentis touchent un salaire dès le premier jour, sont augmentés à mesure que leurs compétences progressent, apprennent au travail et en classe, et terminent avec un diplôme reconnu dans tout leur secteur. Vous postulez auprès de l'employeur ou de l'organisme responsable du programme, comme pour un emploi.",
            "Un pré-apprentissage vous prépare à un apprentissage. Selon apprenticeship.gov, il peut durer de quelques semaines à quelques mois, et un salaire ou une allocation n'est pas obligatoire. Il couvre souvent les mathématiques de base, la sécurité et la préparation à l'emploi. YouthBuild en est un exemple pour les jeunes.",
            "Un programme de formation professionnelle enseigne les compétences d'un métier, souvent en classe, et vous aide à trouver un emploi à la fin. Exemples : Job Corps, les certificats des community colleges (établissements publics d'enseignement supérieur court) et les formations payées par votre American Job Center local. Certains sont gratuits, d'autres aident à payer les frais ; en général, vous ne touchez pas de salaire pendant la formation.",
            "Posez-vous la question : ai-je besoin de gagner de l'argent maintenant (apprentissage), de me préparer d'abord (pré-apprentissage), ou d'un cours court pour être qualifié pour un emploi (programme de formation) ?"
          ],
          words: [["Registered Apprenticeship", "un emploi payé avec formation, approuvé par le ministère du Travail ou un État, qui se termine par un diplôme reconnu."], ["Pré-apprentissage", "un programme court qui vous prépare à entrer en apprentissage."], ["Organisme responsable (sponsor)", "l'employeur, le syndicat ou le groupe qui gère un apprentissage et embauche les apprentis."], ["Allocation", "une petite somme pour aider à payer les frais pendant la formation ; ce n'est pas un salaire complet."], ["Diplôme ou certificat reconnu", "la preuve d'une compétence, comme un certificat ou une licence."]],
          slides: [
            { title: "Registered Apprenticeship", bullets: ["Un emploi payé avec formation", "Salaire dès le premier jour, augmentations avec les compétences", "Se termine par un diplôme reconnu dans le secteur"] },
            { title: "Pré-apprentissage", bullets: ["Vous prépare à un apprentissage", "De quelques semaines à quelques mois", "Salaire ou allocation pas obligatoire"] },
            { title: "Programme de formation professionnelle", bullets: ["Enseigne les compétences d'un métier, souvent en classe", "Exemples : Job Corps, certificats de college, formation via l'AJC", "En général, pas de salaire pendant la formation"] },
            { title: "Lequel vous convient maintenant ?", bullets: ["Besoin de gagner maintenant : apprentissage", "Besoin de vous préparer : pré-apprentissage", "Besoin d'un cours court : programme de formation"] }
          ],
          sources: [
            { name: "Apprenticeship.gov : Chercheurs d'emploi (Career seekers)", url: "https://www.apprenticeship.gov/career-seekers" },
            { name: "Apprenticeship.gov : Qu'est-ce qu'un pré-apprentissage ?", url: "https://www.apprenticeship.gov/help/what-pre-apprenticeship" },
            { name: "Ministère du Travail des États-Unis : YouthBuild", url: "https://www.dol.gov/agencies/eta/youth/youthbuild" }
          ],
          tryIt: "Sur une feuille, faites trois colonnes : Apprentissage, Pré-apprentissage, Programme de formation. Pour chacune, écrivez deux avantages et une difficulté pour VOTRE vie en ce moment. Entourez celle qui vous convient le mieux aujourd'hui.",
          youCanNow: "distinguer un apprentissage, un pré-apprentissage et un programme de formation professionnelle, et choisir le type qui vous convient maintenant.",
          quickCheck: [
            { objective: "O1", q: "Quel programme vous verse un salaire pendant que vous apprenez au travail ?", options: ["Un cours vidéo gratuit en ligne", "Un Registered Apprenticeship", "Un atelier à la bibliothèque", "Un site de tests d'entraînement"], answer: 1, why: "Un Registered Apprenticeship est un emploi payé avec formation." },
            { objective: "O1", q: "Un programme de 10 semaines enseigne les mathématiques et la sécurité du bâtiment pour vous aider à entrer en apprentissage. Qu'est-ce que c'est ?", options: ["Un pré-apprentissage", "Un diplôme universitaire", "Un Registered Apprenticeship", "Un emploi intérimaire"], answer: 0, why: "Un pré-apprentissage prépare à entrer en apprentissage et peut durer de quelques semaines à quelques mois." }
          ]
        },
        {
          title: "Chercher sur le Job Finder d'apprenticeship.gov",
          objectives: ["O2"],
          minutes: 5,
          goal: "Chercher sur le Job Finder officiel et noter deux annonces d'apprentissage près de chez vous.",
          text: [
            "Apprenticeship.gov est le site officiel du ministère du Travail des États-Unis pour l'apprentissage. Son Apprenticeship Job Finder (outil de recherche d'apprentissages) vous permet de taper un métier ou un lieu pour trouver des offres près de chez vous.",
            "Le Job Finder rassemble des annonces de plusieurs sources. Chaque annonce porte une étiquette comme « Registered Occupation » ou « Registered Partner ». Vous postulez directement auprès de l'employeur ou de l'organisme responsable, pas sur apprenticeship.gov.",
            "Essayez plusieurs mots (le site est en anglais) : « electrician » (électricien), « plumber » (plombier), « IT support » (support informatique), « medical assistant » (assistant médical), « truck driver » (chauffeur routier). Les apprentissages n'existent pas seulement dans le bâtiment : il y en a aussi dans la santé, l'informatique, l'industrie et d'autres secteurs. Si vous ne trouvez rien près de chez vous, essayez une ville plus grande à proximité ou un autre nom de métier.",
            "Notez ce que vous trouvez avant de fermer la page. Les annonces changent, donc la date à laquelle vous l'avez vue compte."
          ],
          steps: ["Allez sur apprenticeship.gov et ouvrez l'Apprenticeship Job Finder.", "Tapez un métier, votre ville ou votre code postal (ZIP code), ou les deux.", "Ouvrez une annonce et lisez qui est l'organisme responsable, où se trouve le poste et comment postuler.", "Notez l'organisme responsable, le nom du poste, le lieu, la façon de postuler et la date du jour.", "Recommencez avec un autre nom de métier jusqu'à avoir deux annonces."],
          words: [["Annonce", "une offre d'emploi ou de programme publiée sur un site web."], ["Parcours professionnel", "le type de travail que vous voulez faire dans la durée, comme électricien ou support informatique."], ["ZIP code", "le code postal à cinq chiffres de votre zone dans une adresse aux États-Unis."]],
          slides: [
            { title: "Le site officiel pour chercher", bullets: ["apprenticeship.gov, du ministère du Travail des États-Unis", "Utilisez l'Apprenticeship Job Finder", "Cherchez par métier, par lieu ou les deux"] },
            { title: "Lire une annonce", bullets: ["Qui est l'organisme responsable ou l'employeur", "Où se trouve le poste", "Comment postuler : directement auprès de l'organisme responsable"] },
            { title: "Conseils de recherche", bullets: ["Essayez plusieurs noms de métier", "Pas seulement le bâtiment : santé, informatique, industrie", "Rien près de chez vous ? Essayez une ville plus grande à proximité"] },
            { title: "Notez-le", bullets: ["Organisme responsable, nom du poste, lieu", "Comment postuler et la date où vous l'avez vue"] }
          ],
          sources: [
            { name: "Apprenticeship.gov : Apprenticeship Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "Apprenticeship.gov : Chercheurs d'emploi (Career seekers)", url: "https://www.apprenticeship.gov/career-seekers" }
          ],
          tryIt: "Ouvrez l'Apprenticeship Job Finder. Cherchez un métier qui vous plaît près de votre code postal. Notez deux annonces : organisme responsable, nom du poste, lieu, façon de postuler et date du jour. Si vous ne trouvez rien, essayez deux autres noms de métier ou une ville voisine.",
          youCanNow: "chercher sur le Job Finder d'apprenticeship.gov et noter deux vraies annonces avec la façon de postuler.",
          quickCheck: [
            { objective: "O2", q: "Vous avez trouvé un apprentissage sur le Job Finder. Auprès de qui postulez-vous ?", options: ["La Maison-Blanche", "L'équipe d'apprenticeship.gov", "N'importe quel site qui copie l'annonce", "L'employeur ou l'organisme responsable indiqué dans l'annonce"], answer: 3, why: "Apprenticeship.gov dit que vous postulez directement auprès de l'employeur ou de l'organisme responsable." },
            { objective: "O2", q: "Votre recherche « electrician » dans votre petite ville ne donne rien. Quelle est une bonne étape suivante ?", options: ["Abandonner l'idée d'un apprentissage", "Payer un site pour qu'il en trouve un pour vous", "Essayer une ville plus grande à proximité ou un autre nom de métier", "Chercher seulement une fois par an"], answer: 2, why: "Élargir la zone ou essayer d'autres noms de métier permet souvent de trouver des annonces qu'une première recherche avait manquées." }
          ]
        },
        {
          title: "Votre American Job Center et les formations gratuites",
          objectives: ["O3"],
          minutes: 6,
          goal: "Trouver l'American Job Center le plus proche et écrire les questions que vous poserez sur les formations gratuites.",
          text: [
            "Les American Job Centers (AJC) sont des bureaux publics gratuits, financés par le ministère du Travail des États-Unis, qui aident les gens à trouver un emploi et une formation. Trouvez-en un sur CareerOneStop.org (site du ministère du Travail) ou appelez la ligne du DOL au 1-877-US-2JOBS (1-877-872-5627). Dans certains États, ils portent un nom local, comme WorkSource ou career center.",
            "Grâce à la Workforce Innovation and Opportunity Act (WIOA), la loi qui finance ces centres, le personnel de l'AJC peut vous offrir des services d'orientation et une aide pour payer une formation si vous y avez droit. Le ministère du Travail dit que la priorité va aux personnes qui reçoivent une aide publique, aux autres personnes à faibles revenus et à celles qui ont besoin d'aide pour les compétences de base ; les anciens militaires sont servis en priorité dans tous les programmes d'emploi financés par le DOL. Les services varient selon l'État : renseignez-vous.",
            "D'autres programmes à demander : Job Corps (formation et logement gratuits pour les jeunes adultes, en général de 16 à 24 ans ; vérifiez sur jobcorps.gov ou au 800-733-5627 les places disponibles en ce moment) ; YouthBuild (pour les 16 à 24 ans qui ont quitté l'école sans diplôme : bâtiment et autres compétences tout en terminant leurs études) ; les programmes Reentry Employment Opportunities pour les personnes qui sortent de prison ; et, pour les anciens militaires, le GI Bill, qui selon le VA (ministère des Anciens combattants) peut servir pour de nombreux apprentissages et formations en cours d'emploi.",
            "Arrivez avec vos questions écrites. Vous tirerez plus d'une seule visite."
          ],
          steps: ["Cherchez « American Job Center » et votre code postal sur CareerOneStop, ou appelez le 1-877-US-2JOBS.", "Notez l'adresse, les horaires et le numéro de téléphone du centre.", "Écrivez vos questions : aide au financement de la formation, programmes près de chez vous, apprentissages, aide pour votre situation.", "Appelez ou allez sur place et prenez des notes, y compris le nom de la personne à qui vous parlez."],
          words: [["American Job Center (AJC)", "un bureau public gratuit qui aide les gens à trouver un emploi et une formation."], ["WIOA", "la Workforce Innovation and Opportunity Act, la loi américaine qui finance les centres pour l'emploi et l'aide à la formation."], ["Avoir droit (être éligible)", "remplir les conditions pour recevoir un service."], ["Priorité de service", "être servi en premier ; les anciens militaires en bénéficient dans les programmes d'emploi financés par le DOL."], ["GI Bill", "les aides du VA pour les études des anciens militaires et de certains membres de leur famille."]],
          slides: [
            { title: "Les American Job Centers", bullets: ["Bureaux publics gratuits pour l'emploi et la formation", "En trouver un : CareerOneStop.org ou 1-877-US-2JOBS", "Peut avoir un nom local dans votre État"] },
            { title: "Aide pour payer la formation (WIOA)", bullets: ["Orientation et financement de formation si vous y avez droit", "Priorité : aide publique, faibles revenus, compétences de base", "Les anciens militaires sont servis en priorité"] },
            { title: "D'autres programmes à demander", bullets: ["Job Corps : en général 16-24 ans, gratuit, vérifiez sa situation", "YouthBuild : 16-24 ans sans diplôme", "Programmes de réinsertion ; GI Bill pour l'apprentissage des militaires"] },
            { title: "Arrivez préparé", bullets: ["Écrivez d'abord vos questions", "Prenez des notes et le nom de la personne"] }
          ],
          sources: [
            { name: "Ministère du Travail des États-Unis : programme WIOA pour adultes", url: "https://www.dol.gov/agencies/eta/workforce-investment/adult" },
            { name: "CareerOneStop : trouver un American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" },
            { name: "Job Corps", url: "https://www.jobcorps.gov/" },
            { name: "Ministère du Travail des États-Unis : YouthBuild", url: "https://www.dol.gov/agencies/eta/youth/youthbuild" },
            { name: "Ministère du Travail des États-Unis : programmes pour les jeunes et la réinsertion", url: "https://www.dol.gov/agencies/eta/youth" },
            { name: "VA : formation en cours d'emploi et apprentissages", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "Trouvez l'American Job Center le plus proche et notez son adresse, ses horaires et son téléphone. Puis écrivez quatre questions à poser, par exemple : « La WIOA peut-elle m'aider à payer une formation dans mon domaine ? », « Quels apprentissages ou pré-apprentissages y a-t-il près d'ici ? », « Y a-t-il de l'aide pour les jeunes adultes, les anciens militaires ou les personnes avec un casier judiciaire ? », « Que dois-je apporter à ma première visite ? »",
          youCanNow: "trouver votre American Job Center et y aller avec des questions sur les formations et programmes gratuits.",
          quickCheck: [
            { objective: "O3", q: "Où pouvez-vous obtenir une aide gratuite pour trouver des fonds de formation et des programmes près de chez vous ?", options: ["Dans un American Job Center", "Dans la publication d'un inconnu sur les réseaux sociaux", "Dans une entreprise qui fait payer pour vous placer", "Seulement dans une école privée"], answer: 0, why: "Les American Job Centers sont des bureaux publics gratuits qui aident pour l'emploi et la formation, y compris avec les fonds de la WIOA." },
            { objective: "O3", q: "Quelle est la meilleure question à poser dans un American Job Center ?", options: ["« Pouvez-vous faire mon travail à ma place ? »", "« Vendez-vous des cartes cadeaux ? »", "« Quelle est votre adresse personnelle ? »", "« La WIOA peut-elle m'aider à payer une formation dans mon domaine ? »"], answer: 3, why: "Poser une question sur les fonds de formation de la WIOA peut vous ouvrir une formation gratuite si vous y avez droit." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Connaître vos options et où les trouver",
        questions: [
          { objective: "O1", q: "Qu'est-ce qui est vrai pour un Registered Apprenticeship ?", options: ["Vous payez de gros frais pour y entrer", "Vous touchez un salaire et apprenez au travail", "C'est seulement un cours en classe", "Il ne se termine jamais par un diplôme"], answer: 1, why: "Les apprentis touchent un salaire dès le premier jour et terminent avec un diplôme reconnu." },
          { objective: "O1", q: "Maya, 19 ans, n'a pas de diplôme et veut apprendre le bâtiment tout en terminant ses études. Quel programme lui convient ?", options: ["Une université de quatre ans", "Un prêt privé", "YouthBuild", "Un stage non payé à l'étranger"], answer: 2, why: "YouthBuild accueille les 16-24 ans qui ont quitté l'école sans diplôme, en mêlant compétences professionnelles et études." },
          { objective: "O2", q: "Quel est le site officiel des États-Unis pour chercher un apprentissage ?", options: ["apprenticeship.gov", "N'importe quel site avec « jobs » dans son nom", "Un groupe sur les réseaux sociaux", "Un lien reçu par SMS"], answer: 0, why: "Apprenticeship.gov est le site officiel du ministère du Travail des États-Unis pour l'apprentissage, avec le Job Finder." },
          { objective: "O2", q: "Que devez-vous noter pour chaque annonce ?", options: ["Seulement la couleur du logo", "Rien ; vous la retrouverez plus tard", "Votre mot de passe du site", "L'organisme responsable, le nom du poste, le lieu, la façon de postuler et la date"], answer: 3, why: "Les annonces changent : notez les informations clés et la date où vous les avez vues." },
          { objective: "O3", q: "Darnell est un ancien militaire. Selon le ministère du Travail, de quoi bénéficie-t-il dans les programmes d'emploi financés par le DOL ?", options: ["De rien de plus", "D'une voiture gratuite", "D'une priorité de service", "D'un emploi garanti"], answer: 2, why: "Les anciens militaires sont servis en priorité dans tous les programmes d'emploi financés par le DOL." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Bien choisir et postuler",
      lessons: [
        {
          title: "Le programme est-il réel et vaut-il la peine ?",
          objectives: ["O4"],
          minutes: 5,
          goal: "Vérifier dans l'annonce d'un programme les signes qu'il est réel et les signes d'une arnaque.",
          text: [
            "Certaines annonces promettent un « emploi garanti » si vous payez une formation ou un certificat. La FTC (Federal Trade Commission, l'agence américaine de protection des consommateurs) dit que les employeurs honnêtes, y compris le gouvernement fédéral, ne vous demanderont jamais de payer pour obtenir un emploi, et que payer une « formation » ou des certifications inutiles est une arnaque courante.",
            "Autres signaux d'alerte de la FTC : un chèque que vous devez déposer avant de renvoyer une partie de l'argent, des frais à payer d'avance à une agence de placement, un inconnu qui vous propose un emploi sans que vous ayez rien demandé, et un gros salaire pour peu de travail.",
            "Signes qu'un programme est réel : il figure sur apprenticeship.gov, auprès de votre American Job Center, sur un site d'État en .gov, chez un syndicat ou un community college ; vous pouvez trouver vous-même son adresse et son téléphone ; et il vous dit clairement ce qu'il coûte, combien de temps il dure, quel diplôme vous obtenez, et combien de personnes le terminent et trouvent un emploi.",
            "Un programme réel peut quand même mal vous convenir. Vérifiez les horaires, le lieu et le trajet, et si le diplôme est demandé par les employeurs de votre région."
          ],
          steps: ["Cherchez le programme sur un site officiel (apprenticeship.gov, votre AJC, un site d'État en .gov, un syndicat ou un college).", "Trouvez vous-même son adresse et son téléphone ; n'utilisez pas seulement le numéro de l'annonce.", "Cherchez les signes d'arnaque : payer pour obtenir l'emploi, frais d'avance, chèque à déposer puis argent à renvoyer, salaire trop beau.", "Demandez : le coût, la durée, le diplôme, les horaires, et combien terminent et trouvent un emploi.", "Pas sûr ? Demandez à votre American Job Center avant de signer ou de payer quoi que ce soit."],
          words: [["Arnaque", "une ruse pour prendre votre argent ou vos informations personnelles."], ["Frais d'avance", "de l'argent à payer avant de recevoir quoi que ce soit."], ["FTC", "la Federal Trade Commission, l'agence américaine qui met en garde contre les arnaques et les combat."], ["Taux de réussite", "la part des personnes qui commencent un programme et le terminent."]],
          slides: [
            { title: "Ne payez jamais pour obtenir un emploi", bullets: ["FTC : un employeur honnête ne fait jamais payer l'embauche", "Méfiez-vous d'une « formation » payante qui promet un emploi"] },
            { title: "Signaux d'alerte d'une arnaque", bullets: ["Frais d'avance pour vous placer", "Déposer un chèque, renvoyer de l'argent", "Un inconnu propose un emploi ; gros salaire pour peu de travail"] },
            { title: "Signes qu'il est réel", bullets: ["Sur apprenticeship.gov, un AJC, un .gov, un syndicat ou un college", "Vous trouvez vous-même son adresse et son téléphone", "Coût, durée, diplôme et résultats d'emploi clairs"] },
            { title: "Réel, mais fait pour vous ?", bullets: ["Horaires et trajet", "Un diplôme demandé par les employeurs locaux"] }
          ],
          sources: [
            { name: "FTC : arnaques à l'emploi", url: "https://consumer.ftc.gov/articles/job-scams" },
            { name: "Apprenticeship.gov : Apprenticeship Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" }
          ],
          tryIt: "Prenez un programme trouvé dans la leçon 2 ou 3. Faites trois vérifications : figure-t-il sur une liste officielle, pouvez-vous trouver vous-même son adresse et son téléphone, et montre-t-il un signe d'arnaque ? Écrivez « réel », « pas sûr » ou « arnaque », et pourquoi. Puis lisez cette annonce inventée et listez ses signaux d'alerte : « Obtenez un emploi garanti à 40 $ de l'heure ! Payez 300 $ aujourd'hui pour votre certificat. Écrivez-nous par SMS maintenant. »",
          youCanNow: "vérifier si un programme est réel et vaut votre temps, et repérer les signes d'une arnaque où il faut payer pour obtenir un emploi.",
          quickCheck: [
            { objective: "O4", q: "Une annonce dit : « Payez 250 $ pour votre certificat et obtenez un emploi garanti. » Que faites-vous ?", options: ["Payer vite avant que ce soit complet", "Envoyer vos coordonnées bancaires pour réserver une place", "La traiter comme une arnaque probable et vérifier auprès de votre AJC", "La partager avec vos amis pour qu'ils paient aussi"], answer: 2, why: "La FTC dit que les employeurs honnêtes ne demandent jamais de payer pour obtenir un emploi." },
            { objective: "O4", q: "Lequel est un signe qu'un programme est réel ?", options: ["Il figure sur apprenticeship.gov ou sur un site d'État en .gov", "Il n'a qu'un numéro de téléphone dans un SMS", "Il vous demande de déposer un chèque et de renvoyer de l'argent", "Il refuse de dire ce qu'il coûte"], answer: 0, why: "Figurer sur un site officiel et être transparent sur les coûts sont des signes d'un programme réel." }
          ]
        },
        {
          title: "Conditions et documents",
          objectives: ["O5"],
          minutes: 5,
          goal: "Lister les conditions d'un programme et les documents nécessaires, et indiquer ceux que vous avez.",
          text: [
            "Chaque programme fixe ses propres conditions ; elles sont dans l'annonce ou sur le site de l'organisme responsable. Les plus courantes : un âge minimum, un diplôme de fin d'études secondaires ou un équivalent (GED ou HiSET, des examens américains qui valent ce diplôme), un test de base en mathématiques ou en lecture, la capacité de faire le travail physique, un permis de conduire valide pour certains métiers, et un test de dépistage de drogues.",
            "Documents courants : une pièce d'identité avec photo, la preuve de votre diplôme ou de son équivalent, vos relevés de notes, un CV, et parfois une carte de sécurité sociale ou la preuve que vous avez le droit de travailler aux États-Unis. Les anciens militaires peuvent avoir besoin de leur DD-214 pour prouver leur service, et ceux qui utilisent le GI Bill demandent les aides aux études du VA.",
            "Il vous manque un document ? Vous pouvez quand même faire votre plan. Une carte d'identité d'État s'obtient au DMV (le service des permis et des véhicules) de votre État. Une copie de diplôme s'obtient auprès de votre ancienne école ou du service de l'éducation de votre État. L'American Job Center peut aider pour beaucoup de ces documents, et les programmes de réinsertion aident souvent les personnes qui sortent de prison à obtenir une pièce d'identité.",
            "Gardez des copies, pas les originaux, dans un seul dossier. N'envoyez jamais de numéros privés à quelqu'un dont vous n'avez pas vérifié qu'il est réel."
          ],
          steps: ["Ouvrez l'annonce ou la page de l'organisme responsable et trouvez les conditions.", "Écrivez chaque condition et chaque document sur une liste de contrôle.", "Marquez chacun : Je l'ai, Il me manque, ou Pas sûr.", "À côté de chaque Il me manque, écrivez où vous allez l'obtenir.", "Rangez les copies dans un seul dossier ou dans un endroit sûr de votre téléphone."],
          words: [["Condition", "ce que vous devez avoir ou faire pour postuler, comme un âge minimum ou un diplôme."], ["Équivalent du diplôme", "un examen, comme le GED ou le HiSET, qui compte comme un diplôme de fin d'études secondaires."], ["Relevé de notes", "la liste officielle des cours suivis et des notes obtenues dans une école."], ["DD-214", "le document militaire qui prouve le service et la libération d'un ancien militaire."]],
          slides: [
            { title: "Conditions courantes", bullets: ["Âge minimum ; diplôme, GED ou HiSET", "Un test de base en mathématiques ou en lecture", "Permis de conduire ou test de drogues pour certains métiers"] },
            { title: "Documents courants", bullets: ["Pièce d'identité avec photo ; diplôme ou équivalent ; relevés de notes", "CV ; preuve du droit de travailler aux États-Unis", "Anciens militaires : DD-214"] },
            { title: "Il vous manque quelque chose ?", bullets: ["Carte d'identité d'État : le DMV de votre État", "Copie de diplôme : votre ancienne école ou le service de l'État", "Demandez de l'aide à votre AJC ou à votre programme de réinsertion"] },
            { title: "Gardez-les en sécurité", bullets: ["Des copies, pas les originaux, dans un seul dossier", "Numéros privés seulement à des programmes vérifiés"] }
          ],
          sources: [
            { name: "Apprenticeship.gov : Chercheurs d'emploi (Career seekers)", url: "https://www.apprenticeship.gov/career-seekers" },
            { name: "VA : formation en cours d'emploi et apprentissages", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "Pour un programme qui vous intéresse, faites une liste de contrôle de chaque condition et de chaque document indiqués dans l'annonce. Marquez chacun Je l'ai, Il me manque ou Pas sûr, et écrivez où vous obtiendrez chaque Il me manque. N'écrivez aucun vrai numéro d'identité sur la liste.",
          youCanNow: "lister les conditions et les documents d'un programme, voir ce qui vous manque et savoir où l'obtenir.",
          quickCheck: [
            { objective: "O5", q: "Où trouvez-vous les conditions exactes d'un programme ?", options: ["Dans ce que suppose un ami", "Dans l'annonce du programme ou sur le site de l'organisme responsable", "Dans n'importe quel commentaire sur les réseaux sociaux", "Elles sont les mêmes pour tous les programmes"], answer: 1, why: "Chaque programme fixe ses propres conditions : lisez son annonce ou sa page officielle." },
            { objective: "O5", q: "Luis, un ancien militaire, veut utiliser le GI Bill pour un apprentissage. Quel document l'aidera sans doute à prouver son service ?", options: ["Une carte de salle de sport", "Une carte de bibliothèque", "Un ticket de caisse", "Son DD-214"], answer: 3, why: "Le DD-214 prouve le service et la libération d'un ancien militaire." }
          ]
        },
        {
          title: "Faire votre plan de candidature",
          objectives: ["O6"],
          minutes: 5,
          goal: "Écrire un plan de candidature pour deux programmes avec des étapes datées et une date de relance.",
          text: [
            "Les apprentissages et les programmes de formation n'ouvrent souvent les candidatures qu'à certaines périodes, et certains se remplissent vite. Un plan écrit avec des dates vous évite de rater une période.",
            "Pour chaque programme, écrivez la date limite ou la prochaine date d'ouverture, la façon de postuler (en ligne, sur place ou lors d'une séance d'information) et la date d'un éventuel test. Si vous ne trouvez pas de date, votre première étape est d'appeler ou d'écrire un e-mail pour demander.",
            "Ensuite, écrivez vos prochaines étapes, chacune avec une date : obtenir un document manquant, mettre à jour votre CV, vous entraîner pour le test de mathématiques, aller à une séance d'information, envoyer la candidature, relancer. Une bonne relance est un appel ou un e-mail court et poli environ une à deux semaines après votre candidature, sauf si le programme vous indique un autre délai.",
            "Postulez à plus d'un programme. Si l'un dit non ou vous met sur une liste d'attente, vous avez encore une autre voie, et vous pouvez demander ce qui ferait de vous un meilleur candidat la prochaine fois."
          ],
          steps: ["Choisissez deux programmes dont vous avez vérifié qu'ils sont réels.", "Écrivez pour chacun la date limite ou la prochaine date d'ouverture, et la façon de postuler.", "Listez vos prochaines étapes, avec une date pour chacune.", "Mettez les dates dans le calendrier de votre téléphone ou sur une feuille que vous voyez chaque jour.", "Fixez une date de relance après votre candidature."],
          words: [["Date limite", "le dernier jour où vous pouvez postuler."], ["Séance d'information", "une réunion où un programme explique comment il fonctionne et comment postuler."], ["Liste d'attente", "une liste de personnes qui auront une place si une place se libère."], ["Relancer", "contacter un programme après votre candidature pour savoir où elle en est."]],
          slides: [
            { title: "Pourquoi un plan avec des dates", bullets: ["Beaucoup de programmes n'ouvrent qu'à certaines périodes", "Certains se remplissent vite", "Les dates vous évitent de rater une période"] },
            { title: "Pour chaque programme, écrivez", bullets: ["Date limite ou prochaine date d'ouverture", "Comment postuler et la date d'un éventuel test", "Pas de date ? Appelez ou écrivez pour demander"] },
            { title: "Des étapes, chacune avec une date", bullets: ["Obtenir les documents ; mettre à jour votre CV", "S'entraîner pour le test ; aller à une séance", "Postuler, puis relancer"] },
            { title: "Ayez toujours une deuxième voie", bullets: ["Postulez à deux programmes", "Un non ou une liste d'attente n'est pas la fin", "Demandez comment être plus fort la prochaine fois"] }
          ],
          sources: [
            { name: "Apprenticeship.gov : Apprenticeship Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "Ministère du Travail des États-Unis : programme WIOA pour adultes", url: "https://www.dol.gov/agencies/eta/workforce-investment/adult" }
          ],
          tryIt: "Faites votre Plan de candidature : l'emploi que vous visez, deux programmes vérifiés avec leurs dates limites et la façon de postuler, votre liste de documents, et cinq prochaines étapes avec des dates, en terminant par une date de relance. Mettez dès aujourd'hui la date de la première étape dans votre téléphone ou votre calendrier.",
          youCanNow: "écrire un plan de candidature avec des étapes datées pour deux programmes et relancer après avoir postulé.",
          quickCheck: [
            { objective: "O6", q: "Vous ne trouvez pas la date limite de candidature d'un programme. Quelle est votre première étape ?", options: ["Appeler ou écrire au programme pour demander", "Supposer qu'il n'y a pas de date limite", "Attendre l'année prochaine", "Postuler à un programme au hasard à la place"], answer: 0, why: "Demander directement au programme vous donne la vraie date pour votre plan." },
            { objective: "O6", q: "Pourquoi postuler à deux programmes plutôt qu'à un seul ?", options: ["Les programmes l'exigent", "Cela coûte moins cher", "Pour avoir encore une voie si l'un dit non ou vous met sur liste d'attente", "Pour pouvoir ignorer les dates limites"], answer: 2, why: "Un deuxième programme vous permet d'avancer si le premier ne marche pas." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Bien choisir et postuler",
        questions: [
          { objective: "O4", q: "Selon la FTC, lequel est un signal d'alerte d'une arnaque à l'emploi ?", options: ["Le programme figure sur apprenticeship.gov", "Vous devez payer pour obtenir l'emploi", "Le programme donne son adresse", "Le programme explique combien de temps il dure"], answer: 1, why: "La FTC dit que les employeurs honnêtes ne demandent jamais de payer pour obtenir un emploi." },
          { objective: "O4", q: "Vous recevez un chèque d'un « nouvel employeur » et devez en renvoyer une partie en cartes cadeaux. Qu'est-ce que c'est ?", options: ["Une étape normale d'embauche", "Une prime de formation", "Une arnaque probable", "Un remboursement d'impôts"], answer: 2, why: "La FTC dit qu'aucun employeur honnête n'envoie un chèque en vous demandant d'en renvoyer une partie." },
          { objective: "O5", q: "Une annonce demande un diplôme de fin d'études secondaires, et Tasha a réussi le GED. Qu'est-ce qui est vrai ?", options: ["Le GED est souvent accepté comme équivalent du diplôme ; elle vérifie l'annonce", "Elle ne pourra jamais postuler", "Elle doit payer pour le remplacer", "Elle ne devrait pas le mentionner"], answer: 0, why: "Le GED est un équivalent du diplôme accepté par beaucoup de programmes ; l'annonce dit ce qui est demandé." },
          { objective: "O5", q: "Vous avez besoin d'une carte d'identité d'État pour postuler. Où l'obtient-on en général ?", options: ["Dans un groupe sur les réseaux sociaux", "Au DMV de votre État", "Auprès de l'organisme responsable de l'apprentissage", "Sur n'importe quel site qui vend des pièces d'identité"], answer: 1, why: "Les cartes d'identité d'État viennent du DMV de votre État ; votre AJC ou un programme de réinsertion peut aider." },
          { objective: "O6", q: "Quelle étape du plan est la mieux écrite ?", options: ["« Postuler un jour »", "« Y réfléchir »", "« Peut-être le mois prochain »", "« Envoyer en ligne la candidature d'électricien chez ACME avant le 3 mars »"], answer: 3, why: "Une bonne étape dit quoi, comment et quand." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Trouver un apprentissage ou un programme de formation professionnelle",
    questions: [
      { objective: "O1", q: "Qu'est-ce qu'un Registered Apprenticeship ?", options: ["Un emploi payé avec formation qui se termine par un diplôme reconnu", "Un cours vidéo gratuit", "Un salon de l'emploi d'une journée", "Un prêt étudiant"], answer: 0, why: "Les apprentis touchent un salaire, apprennent au travail et en classe, et terminent avec un diplôme reconnu." },
      { objective: "O1", q: "À quoi sert un pré-apprentissage ?", options: ["À remplacer un diplôme de fin d'études secondaires", "À vous préparer à entrer en apprentissage", "À rembourser des dettes", "À terminer un diplôme universitaire de quatre ans"], answer: 1, why: "Un pré-apprentissage prépare les gens à entrer dans un Registered Apprenticeship." },
      { objective: "O1", q: "Jamal doit gagner de l'argent tout de suite et veut apprendre un métier. Qu'est-ce qui lui convient le mieux ?", options: ["Un cours en ligne non payé", "Un long programme universitaire", "Un Registered Apprenticeship", "Attendre un an"], answer: 2, why: "Un apprentissage verse un salaire pendant que vous apprenez." },
      { objective: "O2", q: "Que pouvez-vous taper dans le Job Finder d'apprenticeship.gov ?", options: ["Votre numéro de sécurité sociale", "Le code PIN de votre banque", "Votre mot de passe", "Un métier ou un lieu"], answer: 3, why: "Le Job Finder cherche par métier, par lieu ou les deux." },
      { objective: "O2", q: "Dans quels domaines trouve-t-on des apprentissages ?", options: ["Seulement dans le bâtiment", "Dans beaucoup de domaines, dont la santé, l'informatique et l'industrie", "Seulement dans l'armée", "Seulement dans l'agriculture"], answer: 1, why: "Les apprentissages existent dans beaucoup de secteurs, pas seulement le bâtiment." },
      { objective: "O2", q: "Pourquoi noter la date où vous avez vu une annonce ?", options: ["Les annonces changent, donc la date montre si elle est récente", "Le site l'exige", "Pour avoir une réduction", "Ce n'est pas utile"], answer: 0, why: "Les offres changent : noter la date vous aide à savoir quand agir ou revérifier." },
      { objective: "O3", q: "Comment trouver l'American Job Center le plus proche ?", options: ["Demander à un inconnu en ligne", "Payer une agence de placement", "Chercher sur CareerOneStop ou appeler le 1-877-US-2JOBS", "Attendre une lettre"], answer: 2, why: "CareerOneStop et la ligne gratuite du DOL vous aident à trouver votre AJC local." },
      { objective: "O3", q: "Quelle loi américaine finance les centres pour l'emploi et peut aider les personnes qui y ont droit à payer une formation ?", options: ["WIOA", "HIPAA", "OSHA", "FAFSA"], answer: 0, why: "La Workforce Innovation and Opportunity Act finance les American Job Centers et l'aide à la formation." },
      { objective: "O3", q: "Kayla a 20 ans et veut une formation professionnelle gratuite avec logement. Quel programme doit-elle vérifier, y compris sa situation actuelle ?", options: ["Un prêt sur salaire", "L'annonce d'un camp de formation privé", "Une offre de cartes cadeaux", "Job Corps"], answer: 3, why: "Job Corps est un programme gratuit pour les jeunes adultes, en général de 16 à 24 ans ; elle vérifie les places disponibles sur jobcorps.gov." },
      { objective: "O3", q: "Selon le VA, quelle aide pour les anciens militaires peut servir pour de nombreux apprentissages et formations en cours d'emploi ?", options: ["Medicare", "Le GI Bill", "L'assurance chômage", "La sécurité sociale"], answer: 1, why: "Le VA dit que les aides du GI Bill peuvent servir pour de nombreux apprentissages et formations en cours d'emploi." },
      { objective: "O4", q: "Un site demande des frais pour vous donner un formulaire de candidature à un « emploi fédéral ». Qu'est-ce qui est vrai ?", options: ["Vous devez payer pour postuler", "C'est une réduction", "Les candidatures aux emplois fédéraux sont gratuites, donc c'est un signal d'alerte", "Seuls les anciens militaires paient"], answer: 2, why: "La FTC dit que les candidatures officielles aux emplois fédéraux et de la poste sont toujours gratuites." },
      { objective: "O4", q: "Comment obtenir le numéro de téléphone d'un programme pour le vérifier ?", options: ["Le trouver vous-même sur un site officiel", "Utiliser seulement le numéro de l'annonce", "Le demander à la personne qui vous a envoyé un SMS", "Pas besoin de vérifier"], answer: 0, why: "Trouver vous-même les coordonnées vous évite le faux numéro d'un arnaqueur." },
      { objective: "O4", q: "Un programme est réel, mais les cours ont lieu seulement pendant vos heures de travail, à deux heures de chez vous. Que faites-vous ?", options: ["Vous inscrire quand même et quitter votre emploi", "Payer plus pour réserver une place", "Ignorer les horaires", "Peser si cela vous convient et chercher un programme plus proche ou avec de meilleurs horaires"], answer: 3, why: "Un programme réel doit aussi convenir à vos horaires et à vos trajets." },
      { objective: "O4", q: "Lequel n'est PAS un signe d'arnaque à l'emploi ?", options: ["Un inconnu propose un gros salaire pour peu de travail", "Le programme figure sur le site .gov de votre État", "Des frais de placement à payer d'avance", "Un chèque dont vous devez renvoyer une partie"], answer: 1, why: "Figurer sur un site officiel en .gov est un signe de programme réel." },
      { objective: "O5", q: "Que faire des documents nécessaires pour postuler ?", options: ["Garder des copies dans un seul dossier sûr", "Les publier sur les réseaux sociaux", "Envoyer les originaux à quiconque les demande", "Les jeter après une utilisation"], answer: 0, why: "Des copies rangées en un seul endroit sûr vous gardent prêt et protègent vos originaux." },
      { objective: "O5", q: "Votre liste indique « Relevé de notes : Il me manque ». Qu'écrivez-vous à côté ?", options: ["Rien", "« Laisser tomber ce programme »", "Où vous allez l'obtenir, par exemple votre ancienne école", "Votre mot de passe"], answer: 2, why: "Écrire où obtenir chaque document manquant transforme la liste en plan." },
      { objective: "O5", q: "Laquelle est une condition courante pour un apprentissage ?", options: ["Être propriétaire d'une maison", "Un diplôme universitaire pour chaque métier", "Un abonnement payant à un site web", "Un diplôme ou un équivalent et un test de base en mathématiques"], answer: 3, why: "Beaucoup de programmes demandent un diplôme ou un équivalent et un test de compétences de base ; l'annonce dit lesquels." },
      { objective: "O6", q: "Quand est-ce un bon moment pour relancer après votre candidature, sauf si le programme dit autre chose ?", options: ["Dans l'heure qui suit", "Environ une à deux semaines après", "Jamais", "Tous les jours"], answer: 1, why: "Une relance courte et polie après une à deux semaines montre votre intérêt sans mettre de pression." },
      { objective: "O6", q: "Qu'est-ce qui rend une prochaine étape utile dans votre plan ?", options: ["Elle a une action et une date", "Elle est très longue", "Elle n'a pas de date, donc elle est souple", "Elle reste seulement dans votre tête"], answer: 0, why: "Les étapes avec une action et une date sont celles que l'on fait vraiment." },
      { objective: "O6", q: "Un programme vous met sur une liste d'attente. Quelle est la meilleure chose à faire ?", options: ["Arrêter de chercher des programmes", "Payer pour monter dans la liste", "Ne plus jamais les contacter", "Continuer votre autre candidature et demander comment être plus fort"], answer: 3, why: "Une deuxième voie et une demande de retour vous font avancer." }
    ]
  },
  // ---- ADDIE : Évaluation (test de départ) ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 1, 3, 6, 7, 10, 13, 14, 16, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur chaque ligne. Si une ligne est Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Le bon type de programme", objective: "O1", notYet: "Le plan ne dit pas si chaque programme est un apprentissage, un pré-apprentissage ou un programme de formation.", meets: "Chaque programme est classé dans le bon type, et l'apprenant sait dire pourquoi il lui convient maintenant.", exceeds: "Le plan dit aussi ce que l'apprenant fera après l'avoir terminé (par exemple, pré-apprentissage puis apprentissage)." },
      { name: "Deux vrais programmes trouvés", objective: "O2", notYet: "Moins de deux programmes, ou un programme sans organisme responsable, sans lieu ou sans façon de postuler.", meets: "Deux programmes avec l'organisme responsable, le lieu et la façon de postuler, venant d'apprenticeship.gov, d'un AJC ou d'une autre source officielle.", exceeds: "Indique aussi la date où chacun a été trouvé et un programme de secours." },
      { name: "Questions pour le centre pour l'emploi", objective: "O3", notYet: "Aucun American Job Center ni aucune question.", meets: "L'AJC le plus proche et au moins quatre questions, dont une sur l'aide au financement de la formation.", exceeds: "L'apprenant a appelé ou s'est rendu au centre et a noté les réponses et le nom de la personne." },
      { name: "Programmes vérifiés", objective: "O4", notYet: "Aucune vérification, ou un programme qui fait payer pour obtenir l'emploi.", meets: "Au moins trois vérifications par programme, dont les signaux d'alerte d'arnaque, avec un résultat.", exceeds: "Compare aussi le coût, la durée, le diplôme et les résultats d'emploi des deux programmes." },
      { name: "Documents prêts", objective: "O5", notYet: "Pas de liste de documents, ou de vrais numéros d'identité écrits dessus.", meets: "Conditions et documents marqués Je l'ai / Il me manque, avec où obtenir chaque élément manquant.", exceeds: "Chaque élément manquant a une date pour l'obtenir." },
      { name: "Plan daté", objective: "O6", notYet: "Les étapes n'ont pas de dates, ou il y en a moins de cinq.", meets: "Cinq étapes ou plus avec des dates, les dates limites et une date de relance.", exceeds: "La première étape est déjà faite ou inscrite dans le calendrier de l'apprenant." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui envoient au moins une candidature à un apprentissage ou une formation dans les 30 jours (questionnaire de suivi)",
      "Apprenants qui se rendent dans un American Job Center ou l'appellent dans les 30 jours",
      "Apprenants acceptés en apprentissage, en pré-apprentissage ou dans un programme de formation dans les 6 mois, selon les apprenants ou les programmes partenaires",
      "Apprenants qui disent avoir évité une offre où il fallait payer pour obtenir un emploi"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec internet (un ordinateur de bibliothèque ou d'American Job Center convient)",
      "Sites gratuits : apprenticeship.gov, careeronestop.org, dol.gov, jobcorps.gov, va.gov",
      "Papier et stylo, ou une application de notes, pour les listes et le plan",
      "Un calendrier (téléphone ou papier)",
      "Environ 60 à 75 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble, puis un chapitre par séance, avec les recherches « Essayez maintenant » faites en direct ; mettez en binôme les apprenants moins à l'aise en ligne.",
      "Avant la séance, repérez votre American Job Center local, YouthBuild et les programmes de pré-apprentissage, pour pouvoir montrer de vraies options locales.",
      "La situation des programmes change : vérifiez jobcorps.gov et apprenticeship.gov la semaine où vous enseignez et corrigez tout ce qui n'est plus à jour.",
      "Ne demandez jamais aux apprenants d'écrire de vrais numéros d'identité, de sécurité sociale ou de compte bancaire sur les fiches d'exercice.",
      "Pour les apprenants en réinsertion, ayez prêts les contacts des programmes locaux de réinsertion et d'aide pour les pièces d'identité ; pour les anciens militaires, la page du GI Bill du VA et le GI Bill Comparison Tool.",
      "Notez la tâche finale avec la grille d'évaluation et donnez un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
