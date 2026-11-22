"use strict";

// Koach Learn course (French translation of underserved/underserved-ai-future-opportunities.js). Shape: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-ai-future-opportunities-fr",
  lang: "fr",
  translationOf: "underserved-ai-future-opportunities",
  category: "Undeserved Community",
  name: "L'IA et les opportunités de demain",
  skills: "Repérer où l'IA change le travail, Se renseigner sur un métier en croissance, Vérifier les faits sur les métiers sur des sites officiels, Trouver des formations gratuites, Faire un plan d'apprentissage",
  outcome: "choisir un métier en croissance qui vous intéresse, vous renseigner avec un assistant d'IA gratuit et le site officiel américain sur l'avenir des métiers, et écrire un plan simple en trois étapes pour commencer à vous former grâce à des formations gratuites près de chez vous.",
  about: [
    "L'IA change beaucoup de métiers : dans les magasins, les bureaux, les entrepôts, les hôpitaux, les écoles et à la maison. Cela peut faire peur. Ce cours vous montre comment transformer ce changement en chance pour vous et votre famille.",
    "Vous apprendrez où l'IA apparaît au travail, comment utiliser un assistant d'IA gratuit pour explorer des métiers, comment vérifier ce qu'il dit sur des sites officiels, et comment trouver des formations gratuites par votre bibliothèque, un établissement d'enseignement local ou un centre pour l'emploi (American Job Center aux États-Unis).",
    "Vous pouvez faire chaque leçon sur un téléphone ou un ordinateur gratuit de bibliothèque. Chaque leçon dure environ cinq minutes et se termine par une tâche « Essayez maintenant ». Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Écrivez un plan d'une page pour un métier en croissance : ce qu'est le métier, ce qu'il paie et à quelle vitesse il grandit (vérifié sur l'Occupational Outlook Handbook officiel, ou sur le site officiel des métiers de votre pays), deux compétences dont vous avez besoin, et trois étapes que vous ferez le mois prochain grâce à des formations gratuites près de chez vous.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des adultes et des jeunes adultes de communautés mal desservies qui travaillent dans des magasins, des bureaux, des entrepôts, la santé, la restauration ou à domicile, ou qui cherchent un emploi, et qui s'inquiètent de la façon dont l'IA va changer leur travail.",
    startingPoint: "Ils connaissent bien leur propre travail et utilisent un téléphone. Ils ont entendu dire que l'IA change les métiers, mais ne savent pas quels métiers sont en croissance, où trouver des informations officielles sur les métiers, ni où se former gratuitement.",
    gap: "L'IA change beaucoup de tâches au travail, et les personnes sans plan risquent d'être laissées de côté. Les apprenants doivent trouver des métiers en croissance avec des informations officielles, utiliser l'IA pour les explorer, trouver des formations gratuites et fixer de petites étapes datées, tout en évitant les fausses offres d'emploi et de formation.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (niveau fin d'école primaire)",
      "Appareils : un smartphone ou un ordinateur de bibliothèque",
      "Coût : seulement des sites officiels gratuits et des formations gratuites ou peu chères",
      "L'IA peut se tromper sur les salaires, les licences et les formations : les apprenants vérifient sur bls.gov/ooh et les sites officiels de l'État",
      "Vie privée et risque d'arnaque : pas de numéro de sécurité sociale, de numéro bancaire ni de mot de passe dans l'IA ou sur les sites d'emploi"
    ],
    prerequisites: "Aucun. Les apprenants qui découvrent les assistants d'IA peuvent d'abord suivre « Introduction à l'IA et autonomie numérique »."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "À partir d'un métier que vous ou votre famille connaissez", action: "repérer les tâches pour lesquelles l'IA peut aider et celles qu'une personne doit encore faire", standard: "en nommant au moins deux de chaque" },
    { id: "O2", condition: "Avec l'Occupational Outlook Handbook sur bls.gov/ooh", action: "trouver un métier en croissance et noter son salaire médian, sa formation et ses perspectives", standard: "d'après la page actuelle" },
    { id: "O3", condition: "Avec un assistant d'IA gratuit", action: "poser des questions claires sur le travail quotidien et les compétences d'un métier, puis vérifier le salaire, la licence et la formation sur les sites officiels", standard: "sans aucun détail privé dans la demande" },
    { id: "O4", condition: "À partir des compétences qu'un métier demande", action: "trouver deux lieux gratuits ou peu chers près de chez vous pour les apprendre", standard: "en notant le nom, le numéro de téléphone et les horaires de chacun" },
    { id: "O5", condition: "À partir d'un objectif professionnel", action: "créer un plan d'une page avec trois petites étapes et une date pour chacune", standard: "chaque étape étant faisable en une ou deux semaines et adaptée à votre temps et à votre famille" },
    { id: "O6", condition: "Face à une offre d'emploi ou de formation", action: "chercher les signes d'arnaque et garder vos numéros privés pour vous", standard: "avant de payer, de signer ou de partager quoi que ce soit" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Comment l'IA change le travail",
      lessons: [
        {
          objectives: ["O1"],
          title: "Où l'IA apparaît au travail aujourd'hui",
          minutes: 4,
          goal: "Nommer trois façons dont l'IA est déjà utilisée dans les métiers autour de vous.",
          text: [
            "L'IA est un logiciel qui peut faire des tâches qui demandent en général une personne, comme écrire, trier, répondre à des questions ou repérer des tendances. Vous la voyez peut-être déjà tous les jours.",
            "Dans un magasin, l'IA aide à décider combien de marchandise commander. Dans un centre d'appels, un robot conversationnel répond aux questions simples avant qu'une personne prenne le relais. Dans une clinique, un logiciel aide à rédiger les notes de consultation. Dans un entrepôt, des scanners et des robots aident à suivre les cartons.",
            "Dans la plupart des métiers, l'IA ne remplace pas tout le travail. Elle prend certaines tâches, et les gens font le reste : parler avec les clients, résoudre des problèmes, réparer, prendre soin des autres et décider."
          ],
          words: [["IA", "abréviation d'intelligence artificielle : un logiciel qui fait des tâches qui demandent en général une personne."], ["Tâche", "une partie d'un métier, comme répondre au téléphone ou compter le stock."]],
          slides: [
            { title: "L'IA est déjà au travail", bullets: ["Magasins : commander la marchandise", "Centres d'appels : robots pour les questions simples", "Cliniques : aide à rédiger les notes", "Entrepôts : suivi des cartons"] },
            { title: "L'IA prend des tâches, pas des métiers entiers", bullets: ["Le logiciel fait certaines tâches", "Les gens font le reste"] },
            { title: "Ce que les gens font encore le mieux", bullets: ["Parler aux gens et en prendre soin", "Résoudre des problèmes nouveaux", "Réparer et décider"] }
          ],
          tryIt: "Pensez à un emploi que vous ou un membre de votre famille avez eu. Notez deux tâches où l'IA pourrait aider et deux tâches qui ont encore besoin d'une personne.",
          youCanNow: "nommer des usages de l'IA au travail et expliquer pourquoi les gens restent nécessaires.",
          quickCheck: [
            { objective: "O1", q: "Qu'est-ce que l'IA ?", options: ["Un logiciel qui fait des tâches qui demandent d'habitude une personne", "Un nouveau type de téléphone", "Un programme public d'emploi", "Un robot qui fait tous les métiers"], answer: 0, why: "L'IA est un logiciel qui peut écrire, trier, répondre à des questions ou repérer des tendances." },
            { objective: "O1", q: "Dans une clinique, un logiciel écrit les comptes rendus de visite. Quelle tâche une personne fait-elle encore ?", options: ["Taper chaque mot des comptes rendus", "Réconforter le patient et prendre soin de lui", "Compter les comptes rendus", "Rien ; le logiciel fait tout"], answer: 1, why: "L'IA prend certaines tâches, mais les personnes continuent à prendre soin des autres et à décider." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Les métiers en croissance et leurs compétences",
          minutes: 5,
          goal: "Trouver un métier en croissance et son salaire dans l'Occupational Outlook Handbook officiel.",
          text: [
            "Certains métiers grandissent grâce à la technologie, et d'autres parce qu'on en aura toujours besoin, comme la santé, les métiers techniques qualifiés et la garde des enfants et des personnes âgées.",
            "Le Bureau of Labor Statistics (l'office américain des statistiques du travail) gère un site gratuit appelé Occupational Outlook Handbook, sur bls.gov/ooh. Pour des centaines de métiers, il indique en quoi consiste le travail, le salaire habituel, la formation nécessaire et la vitesse de croissance prévue. Hors des États-Unis, cherchez l'observatoire ou le site officiel des métiers de votre pays.",
            "Par exemple, le Handbook prévoit que les métiers de l'informatique et des technologies de l'information, dans leur ensemble, grandiront plus vite que la moyenne de 2025 à 2035. Ces chiffres sont mis à jour : lisez toujours vous-même la page actuelle."
          ],
          steps: ["Allez sur bls.gov/ooh avec un téléphone ou un ordinateur de bibliothèque.", "Choisissez un groupe de métiers, comme Healthcare (santé) ou Computer and Information Technology (informatique).", "Cliquez sur un métier.", "Notez le salaire, la formation nécessaire et les perspectives d'emploi."],
          words: [["Perspectives d'emploi", "la vitesse à laquelle le nombre d'emplois devrait augmenter ou baisser."], ["Salaire médian", "le salaire du milieu : la moitié des travailleurs gagnent plus et l'autre moitié moins."]],
          sources: [{ name: "Bureau of Labor Statistics (États-Unis) : Occupational Outlook Handbook, informatique et technologies de l'information", url: "https://www.bls.gov/ooh/computer-and-information-technology/home.htm" }],
          slides: [
            { title: "Des métiers qui grandissent", bullets: ["Santé et aide à la personne", "Métiers techniques qualifiés", "Informatique et technologie"] },
            { title: "Votre guide gratuit des métiers : bls.gov/ooh", bullets: ["En quoi consiste le travail", "Salaire habituel et formation nécessaire", "La vitesse de croissance du métier"] },
            { title: "Comment l'utiliser", bullets: ["Choisissez un groupe de métiers", "Cliquez sur un métier", "Notez salaire, formation et perspectives"] }
          ],
          tryIt: "Ouvrez bls.gov/ooh (ou le site officiel des métiers de votre pays), choisissez un métier qui vous intéresse, et notez son salaire médian, la formation demandée et ses perspectives d'emploi.",
          youCanNow: "chercher n'importe quel métier dans l'Occupational Outlook Handbook officiel et lire son salaire, sa formation et ses perspectives.",
          quickCheck: [
            { objective: "O2", q: "Qui gère l'Occupational Outlook Handbook ?", options: ["Un site d'emploi privé", "Une entreprise de presse", "Le Bureau of Labor Statistics des États-Unis", "Un community college"], answer: 2, why: "Le Handbook sur bls.gov/ooh est géré par le Bureau of Labor Statistics des États-Unis." },
            { objective: "O2", q: "Un ami vous donne le salaire d'un métier d'après une page qu'il a enregistrée il y a des années. Que faites-vous ?", options: ["Utiliser son chiffre", "Deviner un chiffre plus élevé", "Demander à l'IA de le confirmer", "Lire la page actuelle sur bls.gov/ooh"], answer: 3, why: "Les chiffres de salaire et de perspectives sont mis à jour, donc vous lisez vous-même la page actuelle." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Utiliser l'IA pour explorer un métier",
          minutes: 5,
          goal: "Poser des questions claires sur un métier à un assistant d'IA gratuit, puis vérifier les réponses.",
          text: [
            "Un assistant d'IA gratuit comme ChatGPT, Microsoft Copilot ou Google Gemini peut expliquer un métier avec des mots simples, lister les compétences nécessaires et proposer des questions à poser aux gens qui le pratiquent.",
            "Donnez-lui votre situation sans détails privés. Par exemple : « J'ai travaillé 3 ans dans la restauration rapide et j'aime aider les gens. Explique-moi ce que fait un assistant médical pendant une journée normale, avec des mots simples. »",
            "L'IA peut se tromper sur les salaires, les licences et les formations. Vérifiez ces faits sur bls.gov/ooh ou sur le site officiel de votre État ou de votre pays avant de faire des projets."
          ],
          steps: ["Ouvrez un assistant d'IA gratuit.", "Dites-lui le métier et un peu de votre expérience.", "Demandez à quoi ressemble une journée normale et quelles compétences il faut.", "Vérifiez le salaire et la formation sur bls.gov/ooh."],
          words: [["Consigne (prompt)", "ce que vous écrivez ou dites à un assistant d'IA."], ["Licence", "une autorisation officielle de l'État pour exercer certains métiers."]],
          slides: [
            { title: "L'IA peut vous aider à explorer", bullets: ["Expliquer un métier avec des mots simples", "Lister les compétences nécessaires", "Proposer des questions à poser aux travailleurs"] },
            { title: "Une bonne consigne", bullets: ["Le métier qui vous intéresse", "Un peu de votre expérience", "La forme de réponse : mots simples, liste"] },
            { title: "Vérifiez toujours", bullets: ["Salaire, licences et formation peuvent être faux", "Vérifiez sur bls.gov/ooh ou le site officiel local"] }
          ],
          tryIt: "Demandez à un assistant d'IA d'expliquer la journée normale de votre métier choisi et ses cinq compétences principales. Comparez un fait avec ce que dit bls.gov/ooh.",
          youCanNow: "utiliser l'IA pour découvrir un métier et vérifier ses faits sur un site officiel.",
          quickCheck: [
            { objective: "O3", q: "Quelles informations données par une IA devez-vous vérifier sur des sites officiels ?", options: ["Le salaire, les licences et la formation", "L'orthographe du nom du métier", "Le sens du mot « métier »", "Le nom de l'IA"], answer: 0, why: "L'IA peut se tromper sur le salaire, les licences et la formation, donc vous les vérifiez." },
            { objective: "O3", q: "Vous voulez que l'IA vous explique le métier de chef d'équipe en entrepôt. Que mettez-vous dans votre demande ?", options: ["Votre numéro de sécurité sociale", "Votre expérience et ce que vous aimez, sans détails privés", "Vos coordonnées bancaires", "Rien sur vous"], answer: 1, why: "Votre expérience aide l'IA à vous expliquer le métier ; les détails privés restent hors de la demande." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comment l'IA change le travail",
        questions: [
          { objective: "O1", q: "Dans la plupart des métiers, que fait l'IA ?", options: ["Elle remplace chaque travailleur", "Elle prend certaines tâches et les gens font le reste", "Rien du tout", "Elle prend toutes les décisions"], answer: 1, why: "L'IA gère en général certaines tâches ; les gens gardent les parties qui demandent du jugement et de l'attention." },
          { objective: "O2", q: "Quel site officiel gratuit montre le salaire, la formation et les perspectives d'un métier aux États-Unis ?", options: ["Une page de réseau social", "Une publicité surgissante", "L'Occupational Outlook Handbook sur bls.gov/ooh", "Un lien dans un SMS"], answer: 2, why: "Le Bureau of Labor Statistics gère l'Occupational Outlook Handbook." },
          { objective: "O2", q: "Que veut dire « salaire médian » ?", options: ["Le salaire le plus élevé", "Le salaire le plus bas", "Le salaire après impôts", "Le salaire du milieu : la moitié gagne plus, la moitié moins"], answer: 3, why: "La médiane est le nombre du milieu." },
          { objective: "O3", q: "L'IA vous dit qu'un métier n'a pas besoin de licence dans votre État. Que faites-vous ?", options: ["Vérifier sur le site officiel de votre État ou sur bls.gov/ooh", "Lui faire confiance", "Quitter votre emploi aujourd'hui", "Le dire à tout le monde"], answer: 0, why: "L'IA peut se tromper sur les licences ; les sites officiels sont la source fiable." },
          { objective: "O3", q: "Quelle est la meilleure consigne pour explorer un métier ?", options: ["« métiers »", "« J'ai travaillé 3 ans dans la restauration rapide et j'aime aider les gens. Explique ce que fait un assistant médical dans une journée, avec des mots simples. »", "« Voici mon numéro de sécurité sociale »", "« argent »"], answer: 1, why: "Elle nomme le métier, donne votre expérience et dit la forme de réponse voulue." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Se préparer pour la prochaine étape",
      lessons: [
        {
          objectives: ["O4"],
          title: "Trouver des formations gratuites près de chez vous",
          minutes: 5,
          goal: "Trouver deux lieux gratuits ou peu chers pour apprendre les compétences de votre métier.",
          text: [
            "Vous n'avez pas besoin de beaucoup d'argent pour commencer à apprendre. Les bibliothèques publiques proposent souvent des cours d'informatique et de l'apprentissage en ligne gratuits. Les community colleges (établissements locaux d'enseignement supérieur aux États-Unis) proposent des certificats peu chers, et beaucoup d'étudiants ont droit à une aide financière.",
            "Les American Job Centers fonctionnent avec le ministère américain du Travail. Ils aident à chercher un emploi, orientent vers des postes et vers des formations. Certains services ont des conditions d'accès : demandez à votre centre local ce à quoi vous avez droit. Trouvez-en un avec l'outil American Job Center Finder de CareerOneStop ou en appelant le 1-877-US-2JOBS. Ailleurs, adressez-vous au service public de l'emploi de votre pays.",
            "Demandez à un assistant d'IA gratuit : « Quelles sont les façons gratuites d'apprendre les compétences de base pour un emploi d'assistant médical ? » Puis vérifiez chaque idée directement auprès de la bibliothèque, de l'établissement ou du centre pour l'emploi."
          ],
          steps: ["Demandez à votre bibliothèque quels cours gratuits et quel apprentissage en ligne elle propose.", "Cherchez l'établissement d'enseignement local le plus proche et ses formations courtes.", "Trouvez l'American Job Center le plus proche avec l'outil de CareerOneStop.", "Notez deux lieux, leurs numéros de téléphone et leurs horaires."],
          words: [["Certificat", "une formation courte qui prouve que vous avez appris une compétence professionnelle."], ["American Job Center", "un bureau local, géré avec le ministère américain du Travail, qui aide les gens à trouver un emploi et une formation."]],
          sources: [{ name: "Ministère du Travail des États-Unis : American Job Centers", url: "https://www.dol.gov/agencies/eta/american-job-centers" }, { name: "CareerOneStop : American Job Center Finder", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          slides: [
            { title: "Des lieux gratuits ou peu chers pour apprendre", bullets: ["Cours et apprentissage en ligne en bibliothèque", "Certificats des établissements locaux", "Centres pour l'emploi"] },
            { title: "Les American Job Centers", bullets: ["Aide à la recherche d'emploi et à la formation", "Certains services ont des conditions d'accès", "Outil CareerOneStop ou 1-877-US-2JOBS"] },
            { title: "Utilisez l'IA, puis appelez", bullets: ["Demandez à l'IA des façons gratuites d'apprendre", "Vérifiez chaque idée auprès du lieu lui-même"] }
          ],
          tryIt: "Trouvez deux lieux près de chez vous où vous pourriez apprendre les compétences de votre métier. Notez chaque nom, numéro de téléphone et horaires.",
          youCanNow: "trouver des formations gratuites ou peu chères près de chez vous pour le métier que vous voulez.",
          quickCheck: [
            { objective: "O4", q: "Que proposent souvent les community colleges ?", options: ["Des voitures gratuites", "Seulement des diplômes en quatre ans", "Des certificats peu chers, avec une aide financière pour beaucoup d'étudiants", "Des emplois payés dès le premier jour"], answer: 2, why: "Les community colleges proposent des certificats peu chers, et beaucoup d'étudiants ont droit à une aide." },
            { objective: "O4", q: "Vous ne savez pas si vous avez droit à une formation dans un American Job Center. Que faites-vous ?", options: ["Supposer que non", "Payer un site pour le savoir", "Laisser tomber la formation", "Demander à votre centre local ce à quoi vous avez droit"], answer: 3, why: "Certains services ont des conditions d'accès, donc vous demandez directement au centre." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Transformer un objectif en petites étapes",
          minutes: 4,
          goal: "Découper un objectif professionnel en trois petites étapes avec des dates.",
          text: [
            "Un grand objectif comme « trouver un meilleur emploi » peut sembler trop gros. De petites étapes avec des dates le rendent réel.",
            "Une bonne étape se termine en une ou deux semaines : « Appeler la bibliothèque mardi pour m'inscrire au cours d'informatique. » « Parler à une personne qui travaille comme assistant médical avant le 15. »",
            "Vous pouvez demander de l'aide à un assistant d'IA : « Aide-moi à découper mon objectif de devenir assistant médical en trois petites étapes pour le mois prochain. J'ai 3 heures par semaine. » Puis adaptez le plan à votre vie, à votre famille et à votre emploi du temps."
          ],
          steps: ["Écrivez votre objectif en une phrase.", "Demandez à l'IA de le découper en trois petites étapes.", "Donnez une date à chaque étape.", "Adaptez le plan à votre temps et à votre famille."],
          words: [["Objectif", "quelque chose que vous voulez atteindre."], ["Date limite", "la date à laquelle vous prévoyez de finir une étape."]],
          slides: [
            { title: "Les grands objectifs demandent de petites étapes", bullets: ["« Trouver un meilleur emploi » est trop gros", "De petites étapes le rendent réel"] },
            { title: "Une bonne étape", bullets: ["Se termine en une ou deux semaines", "A une date", "Exemple : appeler la bibliothèque mardi"] },
            { title: "L'IA aide, puis vous ajustez", bullets: ["Dites-lui votre objectif et votre temps", "Adaptez le plan à votre vie"] }
          ],
          tryIt: "Écrivez votre objectif professionnel en une phrase. Demandez à un assistant d'IA de le découper en trois étapes pour le mois prochain, puis ajoutez une date à chaque étape.",
          youCanNow: "transformer un objectif professionnel en trois petites étapes avec des dates.",
          quickCheck: [
            { objective: "O5", q: "Quelle est une petite étape que vous pouvez finir en une ou deux semaines ?", options: ["Parler à un assistant médical d'ici le 15", "Devenir infirmier", "Trouver un meilleur emploi", "Changer de métier un jour"], answer: 0, why: "Une petite étape est précise, faisable bientôt et a une date." },
            { objective: "O5", q: "Le plan de l'IA dit d'étudier 10 heures par semaine, mais vous en avez 3. Que faites-vous ?", options: ["Le suivre quand même", "Changer le plan pour l'adapter à votre temps", "Abandonner", "Demander à l'IA d'étudier pour vous"], answer: 1, why: "Vous changez le plan pour qu'il s'adapte à votre vie, à votre famille et à votre emploi du temps." }
          ]
        },
        {
          objectives: ["O6","O5"],
          title: "Votre plan, et rester en sécurité pendant la recherche",
          minutes: 5,
          goal: "Terminer votre plan d'une page et repérer les fausses offres d'emploi et de formation.",
          text: [
            "Rassemblez tout sur une page : le métier, son salaire et ses perspectives d'après bls.gov/ooh, deux compétences nécessaires, deux lieux pour apprendre, et trois étapes datées. Gardez-le sur votre téléphone ou imprimez-le à la bibliothèque.",
            "Soyez prudent. Des arnaqueurs publient de faux emplois et de fausses formations. Signaux d'alarme : on vous demande de payer pour obtenir l'emploi, on veut votre numéro de compte bancaire ou de sécurité sociale avant un entretien, on promet un gros salaire pour peu de travail, ou on vous presse.",
            "Ne tapez jamais votre numéro de sécurité sociale, vos coordonnées bancaires ou vos mots de passe dans un assistant d'IA. Vérifiez toute formation auprès de votre bibliothèque, du centre pour l'emploi ou du site officiel de l'école avant de payer ou de signer quoi que ce soit."
          ],
          steps: ["Écrivez le métier, le salaire et les perspectives.", "Ajoutez deux compétences et deux lieux pour apprendre.", "Ajoutez vos trois étapes datées.", "Vérifiez chaque offre pour repérer les signes d'arnaque avant de partager quoi que ce soit."],
          words: [["Arnaque", "une ruse pour voler de l'argent ou des informations."]],
          slides: [
            { title: "Votre plan d'une page", bullets: ["Métier, salaire et perspectives (bls.gov/ooh)", "Deux compétences et deux lieux pour apprendre", "Trois étapes avec des dates"] },
            { title: "Signes d'un faux emploi", bullets: ["Il faut payer pour obtenir l'emploi", "On veut vos numéros bancaires ou d'identité avant l'entretien", "Gros salaire pour peu de travail, ou on vous presse"] },
            { title: "Restez en sécurité", bullets: ["Pas de numéros privés dans l'IA", "Vérifiez la formation avec la bibliothèque ou le centre", "Regardez bien avant de payer ou signer"] }
          ],
          tryIt: "Tâche finale : écrivez votre plan d'une page avec le métier, son salaire et ses perspectives, deux compétences, deux lieux pour apprendre et trois étapes datées. Vérifiez qu'il ne contient rien de privé avant de le partager.",
          youCanNow: "faire un vrai plan vérifié pour un métier en croissance et éviter les arnaques à l'emploi courantes.",
          quickCheck: [
            { objective: "O6", q: "Quel est un signe d'une fausse offre d'emploi ?", options: ["Un entretien dans les bureaux de l'entreprise", "Une annonce sur le site de l'entreprise elle-même", "Une pression pour payer avant d'être embauché", "Un emploi affiché par votre American Job Center"], answer: 2, why: "Les vrais employeurs ne vous demandent pas de payer pour obtenir l'emploi et ne vous pressent pas." },
            { objective: "O6", q: "Une école de formation en ligne veut être payée aujourd'hui pour un « emploi garanti ». Que faites-vous ?", options: ["Payer aujourd'hui pour garder votre place", "Envoyer votre numéro de compte bancaire", "En parler d'abord à vos amis", "Vérifier avec le site officiel de l'école, votre bibliothèque ou votre centre pour l'emploi"], answer: 3, why: "Vérifiez tout programme de formation auprès de sources fiables avant de payer ou de signer." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Se préparer pour la prochaine étape",
        questions: [
          { objective: "O4", q: "Où trouve-t-on souvent des cours d'informatique gratuits ?", options: ["Dans une publicité surgissante", "Dans le SMS d'un inconnu", "À votre bibliothèque publique", "Dans un magasin de cartes cadeaux"], answer: 2, why: "Beaucoup de bibliothèques publiques proposent des cours et de l'apprentissage en ligne gratuits." },
          { objective: "O4", q: "Qu'est-ce qu'un American Job Center ?", options: ["Un bureau local qui aide pour l'emploi et la formation", "Un magasin", "Une banque", "Une application de réseau social"], answer: 0, why: "Les American Job Centers fonctionnent avec le ministère américain du Travail pour aider les chercheurs d'emploi." },
          { objective: "O5", q: "Laquelle est une bonne petite étape ?", options: ["« Devenir riche »", "« Apprendre des choses un jour »", "« Obtenir tous les emplois »", "« Appeler la bibliothèque mardi pour m'inscrire au cours d'informatique »"], answer: 3, why: "Elle est petite, claire et datée." },
          { objective: "O6", q: "Une offre d'emploi vous demande de payer 100 $ pour être embauché. C'est :", options: ["Normal", "Un signe d'arnaque", "Une bonne affaire", "Une règle du gouvernement"], answer: 1, why: "Les vrais employeurs ne font pas payer pour obtenir un emploi." },
          { objective: "O6", q: "Une IA propose une formation. Avant de payer, vous devez :", options: ["La vérifier sur le site officiel de l'école, avec votre bibliothèque ou le centre pour l'emploi", "Payer tout de suite", "Donner votre numéro de compte à l'IA", "Ignorer toutes les formations"], answer: 0, why: "Vérifiez toute formation auprès d'une source fiable avant de payer." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : L'IA et les opportunités de demain",
    questions: [
      { objective: "O1", q: "La meilleure description de l'IA est :", options: ["Un type de téléphone", "Un logiciel qui fait des tâches qui demandent en général une personne", "Un bureau du gouvernement", "Un intitulé de poste"], answer: 1, why: "L'IA est un logiciel qui écrit, trie, répond ou repère des tendances." },
      { objective: "O1", q: "Lequel est un exemple d'IA au travail ?", options: ["Un robot conversationnel qui répond aux questions simples des clients", "Une agrafeuse", "Un calendrier papier", "Un balai"], answer: 0, why: "Les robots conversationnels sont une IA qui répond aux questions simples." },
      { objective: "O1", q: "Pour quelle tâche une personne reste-t-elle la meilleure ?", options: ["Compter les mêmes articles encore et encore", "Trier les e-mails par date", "Rassurer un patient inquiet", "Recopier des chiffres dans un tableau"], answer: 2, why: "Prendre soin des gens demande un être humain." },
      { objective: "O2", q: "Qu'est-ce que l'Occupational Outlook Handbook ?", options: ["Un guide gratuit du gouvernement américain sur les métiers, les salaires et les formations", "Un magazine payant", "Une page de réseau social", "Une application bancaire"], answer: 0, why: "Il est géré par le Bureau of Labor Statistics sur bls.gov/ooh." },
      { objective: "O2", q: "Les « perspectives d'emploi » vous disent :", options: ["La tenue exigée", "La vitesse à laquelle le nombre d'emplois devrait augmenter ou baisser", "Le nom du patron", "L'adresse du poste"], answer: 1, why: "Les perspectives parlent de la croissance prévue." },
      { objective: "O2", q: "Pourquoi lire la page actuelle au lieu de croire un vieux chiffre ?", options: ["Les vieux chiffres sont toujours justes", "Les pages ne changent jamais", "Les chiffres de salaire et de perspectives sont mis à jour", "Ça n'a pas d'importance"], answer: 2, why: "Les chiffres changent, donc lisez la dernière page officielle." },
      { objective: "O3", q: "Quelle consigne donnera la réponse la plus utile sur un métier ?", options: ["« métier »", "« aide »", "« des trucs sur le travail »", "« J'aime réparer et j'ai 2 ans en maintenance. Explique ce que fait un technicien en chauffage et climatisation, avec des mots simples. »"], answer: 3, why: "Elle donne le métier, votre expérience et la forme de réponse." },
      { objective: "O3", q: "L'IA vous donne un salaire pour un métier. Vous devez :", options: ["Le vérifier sur bls.gov/ooh", "Lui faire entièrement confiance", "Le publier en ligne", "Ignorer tous les salaires"], answer: 0, why: "L'IA peut se tromper ; vérifiez le salaire sur le site officiel." },
      { objective: "O3", q: "Qu'est-ce qu'une licence ?", options: ["Une application de téléphone", "Une autorisation officielle de l'État pour exercer certains métiers", "Une offre d'emploi", "Un type de CV"], answer: 1, why: "Certains métiers demandent une licence de l'État." },
      { objective: "O4", q: "Quel est un lieu peu cher pour obtenir un certificat professionnel aux États-Unis ?", options: ["Une publicité surgissante", "Un community college", "Un inconnu en ligne", "Une boutique de cartes cadeaux"], answer: 1, why: "Les community colleges proposent des certificats peu chers, et une aide financière peut aider." },
      { objective: "O4", q: "Comment trouver un American Job Center ?", options: ["Demander à un arnaqueur", "Deviner", "Utiliser l'outil de CareerOneStop ou appeler le 1-877-US-2JOBS", "Seulement par courrier"], answer: 2, why: "Ce sont les moyens officiels indiqués par le ministère du Travail." },
      { objective: "O4", q: "Certains services des American Job Centers ont :", options: ["Des conditions d'accès, donc demandez ce à quoi vous avez droit", "Un mot de passe secret", "Une carte cadeau obligatoire", "Aucun personnel"], answer: 0, why: "Le ministère du Travail indique que certains services ont des conditions d'accès." },
      { objective: "O5", q: "Pourquoi découper un grand objectif en petites étapes ?", options: ["Cela fait disparaître l'objectif", "Cela rend l'objectif réel et faisable", "La loi l'exige", "Cela coûte de l'argent"], answer: 1, why: "De petites étapes datées sont plus faciles à commencer et à finir." },
      { objective: "O5", q: "Une bonne étape contient :", options: ["Pas de date", "Quelque chose que vous pouvez finir en une ou deux semaines, avec une date", "Dix ans de travail", "Seulement un souhait"], answer: 1, why: "De petites étapes datées vous font avancer." },
      { objective: "O5", q: "Après que l'IA a fait un plan pour vous, vous devez :", options: ["Le suivre exactement quoi qu'il arrive", "Le supprimer", "L'adapter à votre temps et à votre famille", "Partager votre numéro de compte"], answer: 2, why: "Vous connaissez mieux votre vie ; ajustez le plan." },
      { objective: "O5", q: "Votre plan d'une page doit contenir :", options: ["Vos mots de passe", "Votre numéro de compte", "Votre numéro de sécurité sociale", "Le métier, son salaire et ses perspectives, les compétences, les lieux pour apprendre et les étapes datées"], answer: 3, why: "Ces parties font un plan complet et sûr." },
      { objective: "O6", q: "Une offre d'emploi demande votre numéro de sécurité sociale avant tout entretien. C'est :", options: ["Un signal d'alarme", "Normal pour tout emploi", "Une récompense", "Exigé par l'IA"], answer: 0, why: "Demander des numéros privés trop tôt est un signe d'arnaque." },
      { objective: "O6", q: "Qu'est-ce qu'il ne faut jamais taper dans un assistant d'IA ?", options: ["« Fais plus simple »", "« De quelles compétences a besoin un cuisinier ? »", "Votre numéro de compte bancaire", "« Donne-moi trois étapes »"], answer: 2, why: "Les coordonnées bancaires sont des informations privées." },
      { objective: "O6", q: "« Gros salaire pour peu de travail, commencez aujourd'hui ! » est très probablement :", options: ["Un emploi public", "Un signe d'arnaque", "Un cours en bibliothèque", "Un certificat"], answer: 1, why: "Les promesses trop belles sont un signe d'arnaque courant." },
      { objective: "O6", q: "Avant de payer une formation, vérifiez-la auprès de :", options: ["Une publicité surgissante", "Seulement la personne qui la vend", "Personne", "Le site officiel de l'école, votre bibliothèque ou le centre pour l'emploi"], answer: 3, why: "Des sources fiables et indépendantes aident à éviter les fausses formations." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      2,
      3,
      4,
      7,
      10,
      12,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Informations sur le métier",
        objective: "O2",
        notYet: "Le salaire ou les perspectives manquent ou ne viennent pas de bls.gov/ooh.",
        meets: "Le métier, ce qu'il est, son salaire et ses perspectives, vérifiés sur la page actuelle de bls.gov/ooh.",
        exceeds: "Liste aussi la formation que le métier demande."
      },
      {
        name: "Compétences",
        objective: "O3",
        notYet: "Pas de compétences, ou des compétences qui ne correspondent pas au métier.",
        meets: "Deux compétences que le métier demande.",
        exceeds: "Indique quelle compétence l'apprenant a déjà grâce à ses emplois passés."
      },
      {
        name: "Lieux pour apprendre",
        objective: "O4",
        notYet: "Moins de deux lieux, ou pas de coordonnées.",
        meets: "Deux lieux gratuits ou peu chers avec nom, téléphone et horaires.",
        exceeds: "Indique ce que propose chaque lieu et les conditions d'accès à demander."
      },
      {
        name: "Trois étapes datées",
        objective: "O5",
        notYet: "Les étapes sont vagues ou n'ont pas de date.",
        meets: "Trois petites étapes pour le mois prochain, chacune avec une date.",
        exceeds: "Adaptées au temps réel de l'apprenant et à l'emploi du temps de sa famille."
      },
      {
        name: "Sûr à partager",
        objective: "O6",
        notYet: "Le plan contient un numéro privé, ou une offre de formation n'a pas été vérifiée.",
        meets: "Aucun numéro privé, et les offres vérifiées pour les signes d'alerte.",
        exceeds: "Peut nommer les signes d'alerte qu'il a cherchés."
      }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui réalisent au moins une étape de leur plan dans les 30 jours (questionnaire de suivi)",
      "Apprenants qui s'inscrivent à une formation gratuite ou peu chère dans les 90 jours",
      "Apprenants qui obtiennent un emploi ou une promotion dans le domaine choisi dans les 12 mois"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un smartphone avec internet, ou un ordinateur de bibliothèque",
      "Un assistant d'IA gratuit : Microsoft Copilot, ChatGPT ou Google Gemini",
      "L'Occupational Outlook Handbook sur bls.gov/ooh",
      "Du papier ou une note sur le téléphone pour le plan d'une page",
      "Environ 60 minutes au total : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Ouvrez ensemble bls.gov/ooh sur un projecteur et parcourez un métier avant que les apprenants choisissent le leur.",
      "Apportez une liste des bibliothèques locales, des community colleges et de l'American Job Center le plus proche.",
      "Rappelez aux apprenants de vérifier le salaire et les licences sur les sites officiels, pas seulement avec l'IA.",
      "Revoyez les signes des faux emplois et des fausses formations ; ne demandez jamais aux apprenants de partager des numéros privés.",
      "Notez la tâche finale avec la grille d'évaluation, et donnez un retour sur une seule ligne « Pas encore » à la fois."
    ]
  }
};
