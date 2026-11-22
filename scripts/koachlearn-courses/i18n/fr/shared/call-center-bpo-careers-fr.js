"use strict";

// Koach Learn course (French translation of shared/call-center-bpo-careers.js). See scripts/koachlearn-courses/README.md, "Translations".

const BLS_CSR = { name: "US Bureau of Labor Statistics (office des statistiques du travail des États-Unis) : conseillers clientèle (formation, horaires, conditions de travail)", url: "https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm" };
const IBPAP = { name: "IBPAP : IT and Business Process Association Philippines (l'association du secteur IT-BPM aux Philippines)", url: "https://www.ibpap.org/" };
const FTC_JOBS = { name: "US Federal Trade Commission (FTC, agence américaine de protection des consommateurs) : arnaques à l'emploi", url: "https://consumer.ftc.gov/articles/job-scams" };
const FTC_REPORT = { name: "US Federal Trade Commission : signaler une arnaque (États-Unis)", url: "https://reportfraud.ftc.gov/" };
const IOM_IRIS = { name: "OIM IRIS : recrutement éthique et principe « l'employeur paie »", url: "https://iris.iom.int/" };
const ILO_FAIR = { name: "Organisation internationale du Travail (OIT) : recrutement équitable", url: "https://www.ilo.org/topics/fair-recruitment" };
const TESDA = { name: "TESDA, Philippines : Technical Education and Skills Development Authority (formation et certification ; TESDA Online Program)", url: "https://www.tesda.gov.ph/" };
const AJIRA = { name: "Kenya News Agency : les jeunes invités à rejoindre l'Ajira Digital Program (programme public pour le travail en ligne)", url: "https://www.kenyanews.go.ke/youth-urged-to-embrace-ajira-digital-program/" };

module.exports = {
  id: "call-center-bpo-careers-fr",
  lang: "fr",
  translationOf: "call-center-bpo-careers",
  category: "Workforce Development",
  name: "Métiers des centres d'appels et de l'externalisation (BPO)",
  skills: "Connaître les types d'emplois BPO, Repérer les faux recruteurs, Réussir les tests d'embauche, Traiter un appel selon une grille qualité, Atteindre les indicateurs du centre d'appels, Organiser ses horaires et son évolution",
  outcome: "chercher un emploi en centre d'appels ou en externalisation (BPO) avec un plan : choisir le type de travail BPO qui vous convient, vérifier qu'un employeur est réel, vous entraîner aux tests de frappe, de voix et d'appel simulé, traiter un appel comme le demande une grille qualité, expliquer les indicateurs sur lesquels vous serez évalué, et organiser vos horaires et votre prochaine promotion.",
  about: [
    "Les centres d'appels et les entreprises d'externalisation (BPO) embauchent beaucoup de personnes qui ont un diplôme de fin d'études secondaires et de bonnes capacités de communication, par exemple aux Philippines, en Inde, au Kenya, au Nigeria, au Ghana, en Égypte, au Maroc, au Sénégal, au Mexique, en Colombie et aux États-Unis. Beaucoup proposent une formation payée, et certaines permettent de travailler à domicile.",
    "Ce cours s'adresse aux personnes qui cherchent un emploi, aux jeunes, aux personnes en reconversion et à toute personne qui veut savoir à quoi ressemble vraiment ce travail avant de postuler. Vous apprendrez les types d'emplois BPO, comment repérer un faux recruteur, comment se passent les tests d'embauche, comment les appels sont notés et comment on évolue.",
    "Le cours vous prépare à postuler ; il ne vous donne ni emploi ni certificat. Chaque entreprise organise ses propres tests d'embauche. Chaque leçon dure environ cinq minutes et se termine par une tâche \"Essayez maintenant\". Il y a un mini-contrôle après chaque leçon, un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Écrivez votre propre plan de 90 jours pour un emploi BPO : le type de travail BPO que vous voulez et pourquoi, trois vrais employeurs vérifiés sur leur site officiel, votre liste de contrôle contre les arnaques, un programme d'entraînement daté pour la frappe, la lecture à voix haute et les appels simulés, un appel d'entraînement enregistré et noté avec l'exemple de grille qualité, votre plan d'organisation pour les horaires décalés ou le travail à domicile, et une promotion que vous voulez obtenir d'ici un an.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des personnes d'environ 18 ans et plus qui cherchent un emploi en Afrique, en Asie, en Amérique latine et aux États-Unis : jeunes sortis de l'école, diplômés sans emploi, adultes en reconversion, personnes qui reprennent le travail et personnes qui parlent une deuxième langue. Beaucoup suivront le cours dans leur propre langue et postuleront en anglais, en français ou en espagnol.",
    startingPoint: "Ils savent tenir une conversation et utiliser un téléphone ; la plupart savent un peu utiliser un ordinateur. Peu savent comment se passe l'embauche dans le BPO, quels sont les tests, ou comment le travail en centre d'appels est évalué. Beaucoup ont vu des offres d'emploi sur les réseaux sociaux et ne savent pas distinguer les vraies des fausses.",
    gap: "Les emplois BPO sont souvent un premier emploi formel, mais des candidats échouent à des tests dont ils ignoraient l'existence, perdent de l'argent avec de faux recruteurs qui demandent des frais, ou démissionnent dans les premiers mois parce que les horaires et les objectifs les ont surpris. Les apprenants doivent connaître le travail, vérifier l'employeur, s'entraîner aux tests et prévoir leurs horaires.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; traduit en dix langues",
      "Appareils : souvent un téléphone seulement ; certaines leçons sont plus faciles sur ordinateur, mais chaque tâche peut se faire sur papier",
      "Temps : leçons de 4 à 6 minutes",
      "Les tests d'embauche, les salaires, les horaires et le droit du travail varient selon le pays et l'entreprise ; les apprenants vérifient auprès de l'employeur et du ministère du Travail de leur pays",
      "Risque élevé d'arnaque : aucun vrai numéro d'identité, mot de passe ou coordonnée bancaire dans les exercices"
    ],
    prerequisites: "Aucun. \"L'excellence du service client\" et \"L'IA pour les métiers du service client\" sont de bons cours à suivre ensuite ou en parallèle ; les apprenants en anglais langue étrangère peuvent suivre en même temps \"L'anglais au travail (ESL)\"."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "À partir de cinq descriptions de postes BPO", action: "classer chaque poste en voix ou non-voix et en appels entrants ou sortants, et nommer la principale compétence demandée", standard: "avec au moins 4 bonnes réponses sur 5" },
    { id: "O2", condition: "À partir d'une offre d'emploi ou du message d'un recruteur", action: "vérifier si l'offre présente les signes d'un faux recruteur et dire quoi faire ensuite", standard: "en nommant au moins quatre signes d'alerte, sans jamais payer de frais ni remettre de documents originaux" },
    { id: "O3", condition: "Avec un script d'entraînement et un téléphone ou du papier", action: "réaliser un appel client simulé qui ouvre, vérifie, résout, récapitule et conclut", standard: "en obtenant Atteint sur chaque ligne de l'exemple de grille qualité" },
    { id: "O4", condition: "À partir d'un exemple de rapport d'agent", action: "expliquer ce que mesurent la durée moyenne de traitement, la résolution au premier contact, la satisfaction client, la note qualité et le respect du planning", standard: "avec un moyen honnête d'améliorer chacun" },
    { id: "O5", condition: "Pour l'emploi en horaires décalés ou à domicile que vous visez", action: "écrire un plan d'organisation pour le sommeil, les trajets, l'équipement et les pauses", standard: "avec au moins cinq points, dont une solution de secours pour l'électricité ou Internet" },
    { id: "O6", condition: "À partir de vos objectifs et de vrais sites d'employeurs", action: "écrire un plan de 90 jours pour être embauché et une prochaine étape dans l'évolution de carrière BPO", standard: "avec des dates, trois employeurs vérifiés et un objectif de progression" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Entrer dans le travail BPO",
      lessons: [
        {
          title: "Ce qu'est le BPO et les types d'emplois",
          objectives: ["O1"],
          minutes: 5,
          goal: "Classer les emplois BPO en voix ou non-voix et en entrants ou sortants, et nommer la compétence demandée pour chacun.",
          text: [
            "BPO veut dire business process outsourcing, c'est-à-dire externalisation des processus métier : une entreprise paie une autre entreprise pour faire une partie de son travail, par exemple répondre aux clients, traiter des formulaires ou contrôler des contenus. L'entreprise qui paie est le client donneur d'ordre, et le travail pour un client s'appelle un compte ou une campagne.",
            "Les emplois voix se font au téléphone. En appels entrants, les clients vous appellent (aide pour une facture, une livraison, un forfait mobile). En appels sortants, c'est vous qui les appelez (ventes, enquêtes, rappels, recouvrement). Les emplois non-voix sont le chat, l'e-mail, les réponses sur les réseaux sociaux, la saisie de données, le traitement en back-office et la modération de contenus ; ils demandent surtout une bonne écriture et une bonne frappe, plus que la parole.",
            "Le BPO est un grand employeur dans de nombreux pays. Les Philippines et l'Inde servent beaucoup de clients anglophones. Le Kenya, le Nigeria, le Ghana, l'Égypte et l'Afrique du Sud se développent. Le Maroc, la Tunisie, le Sénégal, la Côte d'Ivoire, Madagascar et Maurice servent des clients francophones. Le Mexique et la Colombie servent des clients américains et hispanophones. Aux États-Unis, les centres d'appels embauchent dans presque tous les secteurs.",
            "La langue est souvent la compétence clé. Un compte peut demander un anglais, un français, un espagnol, un arabe ou une autre langue clairs, avec de la patience, de l'écoute et des bases en informatique. Beaucoup d'emplois demandent un diplôme de fin d'études secondaires, pas un diplôme universitaire."
          ],
          words: [
            ["BPO", "externalisation des processus métier : une entreprise fait une partie du travail d'une autre entreprise pour elle."],
            ["Client et compte", "le client est l'entreprise qui paie le BPO ; le compte (ou la campagne) est le travail fait pour ce client."],
            ["Voix et non-voix", "les emplois voix sont des appels téléphoniques ; les emplois non-voix sont le chat, l'e-mail, les données et le back-office."],
            ["Entrant et sortant", "entrant : les clients vous contactent. Sortant : vous contactez les clients."],
            ["Modération de contenus", "contrôler des messages, des images ou des vidéos selon les règles d'une plateforme."]
          ],
          slides: [
            { title: "Le BPO en une phrase", bullets: ["Une entreprise paie une autre entreprise pour faire une partie de son travail", "L'entreprise qui paie est le client", "Le travail pour un client est le compte"] },
            { title: "Les emplois voix", bullets: ["Entrant : les clients vous appellent pour de l'aide", "Sortant : vous les appelez pour vendre, enquêter ou rappeler", "Compétences clés : parler clairement, écouter, être patient"] },
            { title: "Les emplois non-voix", bullets: ["Chat, e-mail, réponses sur les réseaux sociaux", "Saisie de données, back-office, modération de contenus", "Compétences clés : écriture, frappe, précision"] },
            { title: "Où le BPO embauche", bullets: ["Philippines, Inde, Kenya, Nigeria, Ghana, Égypte", "Comptes francophones : Maroc, Tunisie, Sénégal, Côte d'Ivoire", "Proches des États-Unis : Mexique, Colombie"] }
          ],
          sources: [IBPAP, BLS_CSR],
          tryIt: "Sur papier, faites un tableau de quatre cases : voix entrant, voix sortant, chat ou e-mail, back-office. Dans chaque case, mettez un emploi que vous avez vu dans une annonce, écrivez la principale compétence demandée, et entourez la case qui vous convient le mieux.",
          youCanNow: "distinguer les emplois BPO voix et non-voix, entrants et sortants, et choisir le type qui correspond à vos compétences.",
          quickCheck: [
            { objective: "O1", q: "Des clients vous appellent pour régler des problèmes de facture de téléphone. Quel type d'emploi est-ce ?", options: ["Voix sortant", "Saisie de données en back-office", "Voix entrant", "Modération de contenus"], answer: 2, why: "Les clients appellent, et le travail se fait au téléphone : c'est de la voix entrant." },
            { objective: "O1", q: "Quel emploi demande une bonne écriture et une bonne frappe plus que la parole ?", options: ["Le support par e-mail et par chat", "Les appels de vente sortants", "Le support téléphonique entrant", "Les enquêtes par téléphone"], answer: 0, why: "L'e-mail et le chat sont des emplois non-voix : les clients lisent vos mots, donc l'écriture et la frappe comptent le plus." }
          ]
        },
        {
          title: "Repérer les faux recruteurs et les arnaques à l'emploi",
          objectives: ["O2"],
          minutes: 5,
          goal: "Vérifier si une offre d'emploi ou le message d'un recruteur présente les signes d'une arnaque et décider quoi faire.",
          text: [
            "Les vrais employeurs ne vous font pas payer pour obtenir un emploi. Les faux recruteurs demandent des \"frais de dossier\", des \"frais de formation\", des \"frais médicaux\", des \"frais d'uniforme\" ou de l'argent pour un \"kit de démarrage\" ou du matériel. La Federal Trade Commission (FTC, agence américaine de protection des consommateurs) dit qu'un employeur honnête ne vous demandera jamais de payer pour obtenir un emploi, et le travail international sur le recrutement équitable de l'OIT et de l'OIM demande que ce soient les employeurs, et non les travailleurs, qui paient les frais de recrutement.",
            "Autres signes d'alerte : un salaire élevé pour peu de travail ; un entretien uniquement par écrit sur WhatsApp ou Telegram ; une adresse e-mail gratuite au lieu de l'adresse de l'entreprise ; la pression pour décider aujourd'hui ; un chèque à déposer dont vous devez renvoyer une partie ; et une demande de \"garder\" votre passeport, votre carte d'identité ou vos diplômes. Gardez vous-même vos documents originaux. Donnez seulement des copies, et seulement à un employeur que vous avez vérifié.",
            "Pour vérifier un employeur : trouvez vous-même le site officiel de l'entreprise (n'utilisez pas le lien du message), cherchez le même poste sur sa page carrières et postulez là. Pour un emploi à l'étranger, vérifiez que l'agence est agréée par le ministère du Travail de votre pays ou par l'organisme chargé des travailleurs migrants. Si quelque chose ne va pas, arrêtez, gardez les messages et signalez-le à la police ou à l'office national de la consommation ou du travail (aux États-Unis : reportfraud.ftc.gov)."
          ],
          steps: [
            "Lisez l'annonce et notez tout ce qui demande de l'argent ou des documents originaux.",
            "Trouvez vous-même le site officiel de l'entreprise, sans passer par le lien du message.",
            "Cherchez le même poste sur la page carrières officielle et postulez là.",
            "Pour un emploi à l'étranger, vérifiez que l'agence de recrutement est agréée par votre gouvernement.",
            "Si quelque chose ne va pas, arrêtez, gardez des captures d'écran et signalez-le."
          ],
          words: [
            ["Recruteur", "une personne ou une agence qui trouve des travailleurs pour un employeur."],
            ["Frais de recrutement", "de l'argent demandé à un travailleur pour obtenir un emploi ; selon le recrutement équitable, le travailleur ne doit pas les payer."],
            ["Page carrières", "la partie du site officiel d'une entreprise où elle publie ses vraies offres d'emploi."],
            ["Agence agréée", "une agence de recrutement enregistrée auprès de l'État, que vous pouvez trouver sur la liste officielle."]
          ],
          slides: [
            { title: "Les vrais employeurs ne vous font pas payer", bullets: ["Pas de frais de dossier, de formation, médicaux ou d'uniforme pour être embauché", "Pas de kit de démarrage ou de matériel à payer", "Pas de chèque à déposer avec de l'argent à renvoyer"] },
            { title: "Autres signes d'alerte", bullets: ["Salaire élevé pour peu de travail", "Entretien uniquement par écrit sur WhatsApp ou Telegram", "Adresse e-mail gratuite, pression pour décider aujourd'hui"] },
            { title: "Gardez vos documents", bullets: ["Ne remettez jamais votre passeport, pièce d'identité ou diplômes originaux", "Donnez seulement des copies, à un employeur vérifié"] },
            { title: "Vérifiez, puis postulez", bullets: ["Trouvez vous-même le site officiel", "Postulez sur la page carrières officielle", "Emploi à l'étranger : vérifiez l'agrément de l'agence", "Un problème : arrêtez, gardez des preuves, signalez"] }
          ],
          sources: [FTC_JOBS, FTC_REPORT, ILO_FAIR, IOM_IRIS],
          tryIt: "Lisez ce message d'entraînement : \"Félicitations ! Vous êtes embauché pour un emploi en centre d'appels à domicile à 900 dollars par semaine. Envoyez 50 dollars pour le matériel de formation et une photo de votre carte d'identité sur WhatsApp aujourd'hui.\" Notez tous les signes d'alerte que vous trouvez (il y en a au moins cinq) et ce que vous feriez.",
          youCanNow: "repérer un faux recruteur, protéger vos documents et vérifier une offre sur le site officiel de l'employeur avant de postuler.",
          quickCheck: [
            { objective: "O2", q: "Un recruteur vous dit que vous avez le poste, mais que vous devez d'abord payer des frais de formation. Que faites-vous ?", options: ["Je paie, car la formation est utile", "Je paie la moitié maintenant et le reste plus tard", "Je demande à un ami de payer pour moi", "J'arrête : les vrais employeurs ne font pas payer pour embaucher"], answer: 3, why: "Vous demander de payer pour obtenir un emploi est un signe majeur d'arnaque." },
            { objective: "O2", q: "Un recruteur pour un emploi à l'étranger veut garder votre passeport. Quelle est la réponse sûre ?", options: ["Donner l'original pour que le dossier avance plus vite", "Garder mon passeport original et donner seulement une copie à un employeur vérifié", "L'envoyer par la poste à l'adresse du message", "Le laisser à un ami du recruteur"], answer: 1, why: "Garder vos propres documents vous protège ; les donner peut vous piéger dans un travail injuste." }
          ]
        },
        {
          title: "Réussir les étapes et les tests d'embauche",
          objectives: ["O3"],
          minutes: 6,
          goal: "S'entraîner aux parties frappe, lecture à voix haute et appel simulé d'un recrutement BPO.",
          text: [
            "Les étapes d'embauche varient selon l'entreprise, mais beaucoup de BPO suivent un parcours semblable : une candidature en ligne ; une évaluation avec des questions de frappe, de grammaire, de lecture ou d'écoute ; un test de voix ou de langue où vous lisez à voix haute ou répondez à des questions enregistrées ; un entretien ; et un appel simulé, un court jeu de rôle où un recruteur joue le client. Viennent ensuite l'offre d'emploi, la vérification des antécédents ou des documents, et une formation payée.",
            "Le test de voix vérifie qu'on vous comprend facilement : des mots clairs, un rythme régulier, une bonne grammaire et un ton aimable. Vous n'avez pas besoin de changer d'accent. Parlez assez lentement, prononcez vos mots jusqu'au bout et souriez en parlant ; cela s'entend.",
            "Entraînez-vous gratuitement chez vous. Recopiez une page d'un livre ou d'un journal dans n'importe quel éditeur de texte pendant cinq minutes et comptez les mots. Lisez un court article à voix haute, enregistrez-vous sur votre téléphone, puis réécoutez. Faites un appel simulé avec un ami qui joue le client. Une fois embauché, il y a en général une formation en salle sur les produits du client, puis la période d'accompagnement (nesting) : vos premières semaines sur de vrais appels avec un soutien renforcé."
          ],
          steps: [
            "Frappe : tapez pendant 5 minutes à partir d'une page imprimée, comptez les mots, divisez par 5, et recommencez chaque jour.",
            "Lecture à voix haute : enregistrez un article d'1 minute, réécoutez et corrigez les mots que vous avez avalés ou dits trop vite.",
            "Écoute : demandez à un ami de lire un court message, écrivez-le puis vérifiez.",
            "Appel simulé : un ami joue un client avec un problème simple ; vous ouvrez, questionnez, résolvez et concluez."
          ],
          words: [
            ["Évaluation", "un test qui vérifie des compétences comme la frappe, la grammaire, la lecture et l'écoute."],
            ["Mots par minute", "le nombre de mots que vous tapez en une minute ; une façon de mesurer la vitesse de frappe."],
            ["Appel simulé", "un appel d'entraînement où quelqu'un joue le client, utilisé pour l'embauche et la formation."],
            ["Nesting (période d'accompagnement)", "les premières semaines sur de vrais appels après la formation, avec l'aide renforcée d'un coach."]
          ],
          slides: [
            { title: "Un parcours d'embauche BPO courant", bullets: ["Candidature, puis évaluation en ligne", "Test de voix ou de langue, puis entretien", "Appel simulé, offre, vérification des documents, formation payée"] },
            { title: "Le test de voix", bullets: ["Est-ce qu'on vous comprend facilement ?", "Mots clairs, rythme régulier, bonne grammaire, ton aimable", "Vous n'avez pas besoin de changer d'accent"] },
            { title: "Entraînez-vous gratuitement chez vous", bullets: ["Tapez à partir d'une page imprimée 5 minutes par jour", "Enregistrez-vous en lisant à voix haute et réécoutez", "Appel simulé avec un ami dans le rôle du client"] },
            { title: "Une fois embauché", bullets: ["Formation en salle sur les produits du client", "Nesting : premières semaines sur de vrais appels avec un coach"] }
          ],
          sources: [BLS_CSR],
          tryIt: "Faites aujourd'hui trois courts exercices et notez les résultats : tapez pendant 5 minutes et calculez vos mots par minute ; enregistrez-vous en lisant un texte d'1 minute et notez deux mots à prononcer plus clairement ; et écrivez une ouverture de 3 lignes que vous utiliseriez dans un appel simulé.",
          youCanNow: "décrire les étapes habituelles de l'embauche BPO et vous entraîner chez vous aux tests de frappe, de voix et d'appel simulé.",
          quickCheck: [
            { objective: "O3", q: "Que vérifie surtout un test de voix BPO ?", options: ["Qu'on vous comprend clairement", "Que vous avez un accent étranger", "Que vous parlez le plus vite possible", "Que vous connaissez les prix du client"], answer: 0, why: "Le test de voix vérifie la clarté, le rythme, la grammaire et le ton, pas un accent particulier." },
            { objective: "O3", q: "En 5 minutes, vous tapez 150 mots. Quelle est à peu près votre vitesse de frappe ?", options: ["15 mots par minute", "75 mots par minute", "150 mots par minute", "30 mots par minute"], answer: 3, why: "150 mots divisés par 5 minutes font 30 mots par minute." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Entrer dans le travail BPO",
        questions: [
          { objective: "O1", q: "Vous appelez des personnes pour leur rappeler des factures impayées. Quel type d'emploi est-ce ?", options: ["Voix entrant", "Voix sortant", "Support par chat", "Back-office"], answer: 1, why: "C'est vous qui passez les appels, donc c'est de la voix sortant." },
          { objective: "O1", q: "Dans le BPO, qui est le client ?", options: ["L'entreprise qui paie le BPO pour faire son travail", "Le consommateur qui appelle", "Le chef d'équipe", "L'agence de recrutement"], answer: 0, why: "Le client paie le BPO ; ses propres clients sont les personnes que les agents aident." },
          { objective: "O2", q: "Quel message est le plus probablement une arnaque ?", options: ["Un e-mail venant de l'adresse de l'entreprise qui vous invite à un test en ligne", "Un poste publié sur la page carrières officielle de l'entreprise", "Un message WhatsApp qui promet un gros salaire si vous payez des frais aujourd'hui", "Un entretien téléphonique fixé via le site officiel"], answer: 2, why: "Gros salaire, contact uniquement par WhatsApp, frais à payer et pression pour aujourd'hui : ce sont tous des signes d'alerte." },
          { objective: "O2", q: "Comment trouver les vraies offres d'emploi d'une entreprise ?", options: ["Cliquer sur le lien du message du recruteur", "Chercher vous-même le site officiel de l'entreprise et utiliser sa page carrières", "Demander au recruteur d'envoyer une capture d'écran", "Faire confiance à toute page avec le logo de l'entreprise"], answer: 1, why: "Trouver vous-même le site officiel évite les fausses pages qui copient le logo de l'entreprise." },
          { objective: "O3", q: "Qu'est-ce qu'un appel simulé ?", options: ["Un vrai appel avec un client en colère", "Un appel que vous passez à votre responsable", "Une chanson enregistrée", "Un jeu de rôle d'entraînement où quelqu'un joue le client"], answer: 3, why: "Un appel simulé est un appel d'entraînement utilisé pour l'embauche et la formation." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Faire le travail et évoluer",
      lessons: [
        {
          title: "Le déroulé d'appel et la grille qualité",
          objectives: ["O3"],
          minutes: 6,
          goal: "Traiter un appel d'entraînement qui ouvre, vérifie, résout, récapitule et conclut, et le noter avec une grille qualité.",
          text: [
            "Chaque compte a un déroulé d'appel : les étapes que l'agent suit à chaque appel. Un déroulé courant est : ouvrir (saluer, donner votre nom et celui de l'entreprise, proposer votre aide) ; vérifier (confirmer l'identité du client avec les questions de sécurité du compte) ; questionner (poser des questions pour trouver le vrai problème) ; résoudre (régler le problème ou expliquer la prochaine étape) ; récapituler (répéter ce qui a été fait) ; et conclure (demander s'il y a autre chose, remercier).",
            "Une équipe d'assurance qualité (QA) écoute des appels enregistrés et les note sur une grille qualité. Les lignes portent souvent sur l'ouverture, la vérification, l'écoute et l'empathie, l'exactitude des informations, les notes que vous avez écrites et la conclusion. Certaines lignes concernent la conformité : sauter la vérification ou divulguer des données privées peut faire échouer tout l'appel.",
            "Vérifiez l'identité uniquement de la façon apprise pendant votre formation. Ne demandez jamais à un client son mot de passe complet ou un code à usage unique qu'il n'avait pas à donner, et ne lisez jamais de données privées à une personne que vous n'avez pas vérifiée. Si vous ne connaissez pas une réponse, mettez poliment le client en attente et consultez la base de connaissances ou demandez à un chef d'équipe."
          ],
          steps: [
            "Ouvrir : \"Merci d'avoir appelé [entreprise], [prénom] à votre écoute. Comment puis-je vous aider aujourd'hui ?\"",
            "Vérifier : posez les questions de sécurité du compte avant de parler du compte.",
            "Questionner : posez des questions ouvertes, puis confirmez le problème en une phrase.",
            "Résoudre : réglez le problème, ou expliquez la prochaine étape et quand elle aura lieu.",
            "Récapituler et conclure : dites ce qui a été fait, demandez s'il y a autre chose et remerciez."
          ],
          words: [
            ["Déroulé d'appel", "les étapes fixes que l'agent suit à chaque appel."],
            ["Vérification", "s'assurer que l'appelant est le titulaire du compte avant de parler du compte."],
            ["QA (assurance qualité)", "l'équipe qui écoute les appels et les note selon une grille."],
            ["Conformité", "le respect des règles de la loi et du client, comme les règles de confidentialité et de vérification."],
            ["Base de connaissances", "la bibliothèque de réponses et d'étapes approuvées du compte."]
          ],
          slides: [
            { title: "Un déroulé d'appel courant", bullets: ["Ouvrir, vérifier, questionner", "Résoudre, récapituler, conclure"] },
            { title: "La grille qualité", bullets: ["La QA écoute des appels enregistrés", "Lignes : ouverture, vérification, empathie, exactitude, notes, conclusion", "Une erreur de conformité peut faire échouer tout l'appel"] },
            { title: "Protégez le client", bullets: ["Vérifiez avant de parler du compte", "Ne demandez jamais un mot de passe inutile", "Un doute ? Mettez en attente poliment et consultez la base"] }
          ],
          tryIt: "Écrivez un court script pour un appel d'entraînement : la connexion Internet d'un client est lente depuis deux jours. Utilisez les six étapes. Faites ensuite l'appel avec un ami, ou enregistrez-vous en jouant les deux rôles, et notez-le : pour chaque étape, écrivez Atteint ou Pas encore.",
          youCanNow: "suivre un déroulé d'appel de l'ouverture à la conclusion et vérifier votre propre appel avec une grille qualité.",
          quickCheck: [
            { objective: "O3", q: "Un appelant demande le solde de son compte. Que faites-vous d'abord ?", options: ["Lire le solde tout de suite", "Demander son mot de passe complet", "Vérifier son identité avec les questions de sécurité du compte", "Le transférer à une autre équipe"], answer: 2, why: "La vérification protège les données privées du client et c'est en général une ligne de conformité de la grille." },
            { objective: "O3", q: "Quelle étape vient juste avant la conclusion ?", options: ["Le récapitulatif : dire ce qui a été fait", "L'ouverture", "La vérification", "La salutation"], answer: 0, why: "Le récapitulatif confirme ce qui a été fait, pour que le client reparte sûr du résultat." }
          ]
        },
        {
          title: "Les indicateurs, les horaires et prendre soin de soi",
          objectives: ["O4", "O5"],
          minutes: 6,
          goal: "Expliquer les cinq principaux indicateurs d'un centre d'appels et écrire un plan d'organisation pour les horaires décalés ou le travail à domicile.",
          text: [
            "Les agents sont évalués avec des chiffres, souvent appelés KPI (indicateurs clés de performance). La durée moyenne de traitement (AHT) est la durée moyenne d'un contact, attente et notes après l'appel comprises. La résolution au premier contact (FCR) indique combien de fois le problème est réglé dès le premier contact. La satisfaction client (CSAT) vient de courtes enquêtes après le contact. La note qualité vient de la grille. Le respect du planning (adherence) mesure à quel point vous suivez votre planning : vous connecter à l'heure et prendre vos pauses aux heures prévues.",
            "Ces chiffres tirent dans des sens opposés. Se presser réduit la durée de traitement, mais peut faire baisser la FCR et la CSAT quand les clients rappellent. La façon honnête de progresser est de bien connaître la base de connaissances, d'écouter attentivement et d'écrire de bonnes notes pour que l'agent suivant n'ait pas à tout recommencer.",
            "Beaucoup de comptes fonctionnent 24 heures sur 24, donc les horaires peuvent être de nuit, le week-end et les jours fériés, souvent selon le fuseau horaire du client. Organisez votre sommeil (pièce sombre et calme, mêmes heures chaque jour), des trajets sûrs la nuit, vos repas et votre eau. Pour le travail à domicile : un endroit calme, un casque, une connexion assez rapide et une solution de secours pour l'électricité ou Internet, en plus des règles de l'entreprise sur la confidentialité à la maison."
          ],
          words: [
            ["KPI", "indicateur clé de performance : un chiffre utilisé pour mesurer la qualité du travail."],
            ["AHT (durée moyenne de traitement)", "la durée moyenne d'un contact, attente et travail après l'appel compris."],
            ["FCR (résolution au premier contact)", "combien de fois le problème est réglé dès le premier appel ou chat."],
            ["CSAT (satisfaction client)", "une note tirée de courtes enquêtes auprès des clients après un contact."],
            ["Respect du planning (adherence)", "à quel point un agent suit le planning prévu pour la connexion, les pauses et la déconnexion."]
          ],
          slides: [
            { title: "Cinq indicateurs pour les agents", bullets: ["AHT : durée moyenne de traitement", "FCR : réglé dès le premier contact", "CSAT : note des enquêtes clients", "Note qualité et respect du planning"] },
            { title: "Des chiffres qui tirent en sens opposés", bullets: ["Se presser baisse l'AHT mais peut nuire à la FCR et à la CSAT", "Connaissez la base, écoutez, écrivez de bonnes notes"] },
            { title: "Les horaires décalés", bullets: ["Nuits, week-ends et jours fériés selon le fuseau du client", "Mêmes heures de sommeil dans une pièce sombre et calme", "Prévoyez des trajets sûrs la nuit, vos repas et de l'eau"] },
            { title: "Travailler à domicile", bullets: ["Un endroit calme et un casque", "Internet assez rapide et une solution de secours électricité ou données", "Respectez les règles de confidentialité de l'entreprise"] }
          ],
          sources: [BLS_CSR],
          tryIt: "Rapport d'entraînement : l'AHT d'Ama est de 4 minutes (celle de l'équipe est de 6), sa FCR est de 55 pour cent (équipe : 75 pour cent) et sa CSAT est basse. En deux phrases, expliquez ce qui se passe et une solution honnête. Écrivez ensuite votre propre plan d'organisation avec au moins cinq points : sommeil, trajets, repas, équipement et une solution de secours pour l'électricité ou Internet.",
          youCanNow: "expliquer l'AHT, la FCR, la CSAT, la note qualité et le respect du planning, et organiser votre sommeil, vos trajets et votre équipement pour les horaires décalés ou le travail à domicile.",
          quickCheck: [
            { objective: "O4", q: "Un agent a une durée de traitement très courte, mais beaucoup de clients rappellent. Quel chiffre est probablement bas ?", options: ["Le respect du planning", "La vitesse de frappe", "Le nombre de pauses", "La résolution au premier contact"], answer: 3, why: "Si les clients rappellent, les problèmes n'ont pas été réglés la première fois, donc la FCR est basse." },
            { objective: "O5", q: "Vous travaillez à domicile et votre quartier a des coupures de courant. Qu'est-ce qui doit figurer dans votre plan ?", options: ["Rien ; je me déclare malade quand le courant est coupé", "Une solution de secours pour l'électricité ou Internet, et prévenir tôt mon chef d'équipe", "Travailler dans un café bruyant sans demander", "Utiliser le haut-parleur dans une pièce partagée"], answer: 1, why: "Une solution de secours et un avertissement rapide vous permettent de continuer à travailler en respectant les règles de l'entreprise." }
          ]
        },
        {
          title: "Évoluer et votre plan de 90 jours",
          objectives: ["O6"],
          minutes: 5,
          goal: "Écrire un plan de 90 jours pour être embauché et nommer votre prochaine étape dans l'évolution de carrière BPO.",
          text: [
            "Le BPO offre une échelle de carrière. Les agents peuvent devenir agents seniors ou experts métier (SME), puis chefs d'équipe, puis responsables des opérations. Il existe aussi des parcours parallèles : analyste qualité, formateur, gestion des effectifs (planifier les horaires et le personnel), recrutement, reporting et données, et support informatique. Beaucoup d'entreprises préfèrent promouvoir des personnes qui connaissent déjà le compte.",
            "Ce qui aide à évoluer : des chiffres réguliers, une bonne assiduité, aider à former les autres, une deuxième langue et des formations courtes. Certains gouvernements proposent des formations : aux Philippines, la TESDA (agence publique de l'enseignement technique) fixe des normes et propose formation et certification, et au Kenya, l'Ajira Digital Program encourage le travail en ligne. Consultez les pages officielles pour savoir ce qui est proposé aujourd'hui.",
            "Votre plan de 90 jours rassemble tout. Semaines 1 et 2 : choisissez le type d'emploi et vérifiez trois employeurs sur leur site officiel. Semaines 3 à 8 : entraînez-vous à la frappe, à la lecture à voix haute et aux appels simulés à jours fixes, et postulez sur les pages carrières officielles. Semaines 9 à 12 : continuez à postuler, relancez poliment et préparez-vous pour la formation. Écrivez ensuite une promotion que vous visez d'ici un an."
          ],
          steps: [
            "Écrivez le type d'emploi que vous voulez (voix ou non-voix, entrant ou sortant) et pourquoi.",
            "Vérifiez trois vrais employeurs sur leur site officiel et notez les liens.",
            "Ajoutez votre liste de contrôle contre les arnaques de la leçon 2.",
            "Inscrivez des dates d'entraînement dans un calendrier : frappe, lecture à voix haute, appels simulés.",
            "Écrivez votre plan d'organisation pour les horaires décalés ou le domicile, tiré de la leçon 5.",
            "Nommez une promotion pour l'année qui vient et une action que vous ferez pour y arriver."
          ],
          words: [
            ["SME (expert métier)", "un agent expérimenté à qui les autres agents demandent de l'aide pour les cas difficiles."],
            ["Chef d'équipe", "le superviseur qui accompagne une équipe d'agents et suit leurs chiffres."],
            ["Gestion des effectifs (WFM)", "l'équipe qui prévoit le volume d'appels et planifie les horaires et le personnel."],
            ["TESDA", "l'agence publique philippine pour l'enseignement technique et la formation professionnelle."]
          ],
          slides: [
            { title: "L'échelle de carrière BPO", bullets: ["Agent, agent senior ou SME, chef d'équipe, responsable des opérations", "Parcours parallèles : QA, formateur, gestion des effectifs, recrutement, informatique"] },
            { title: "Ce qui aide à évoluer", bullets: ["Des chiffres réguliers et une bonne assiduité", "Aider à former les autres et parler une deuxième langue", "Formations courtes et programmes de formation officiels"] },
            { title: "Votre plan de 90 jours", bullets: ["Semaines 1-2 : type d'emploi et trois employeurs vérifiés", "Semaines 3-8 : entraînez-vous et postulez sur les sites officiels", "Semaines 9-12 : relancez et préparez-vous pour la formation"] }
          ],
          sources: [TESDA, AJIRA, IBPAP],
          tryIt: "Commencez votre plan de 90 jours maintenant. Sur papier ou dans un document, écrivez la date du jour, le type d'emploi que vous voulez, le nom et l'adresse du site officiel de trois employeurs que vous avez vérifiés, et les dates de vos trois premières séances d'entraînement.",
          youCanNow: "écrire un plan de 90 jours daté pour être embauché dans le BPO et nommer votre prochaine promotion.",
          quickCheck: [
            { objective: "O6", q: "Dans beaucoup de BPO, quelle est une vraie promotion après le poste d'agent ?", options: ["Consommateur", "Client", "Chef d'équipe", "Frais de recrutement"], answer: 2, why: "Les agents passent souvent SME, puis chef d'équipe, puis responsable des opérations." },
            { objective: "O6", q: "D'où doivent venir les employeurs de votre plan ?", options: ["De leur site officiel, que vous avez trouvé vous-même", "D'un groupe WhatsApp qui vend des listes d'emplois", "De n'importe quelle annonce qui promet un gros salaire", "D'un recruteur qui demande des frais"], answer: 0, why: "Un site officiel trouvé par vous-même est le moyen le plus sûr de vérifier qu'un employeur est réel." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Faire le travail et évoluer",
        questions: [
          { objective: "O3", q: "Sur beaucoup de grilles qualité, quelle erreur peut faire échouer tout l'appel ?", options: ["Dire merci deux fois", "Une courte pause avant de répondre", "Sourire en parlant", "Sauter la vérification avant de donner des informations sur le compte"], answer: 3, why: "La vérification est une ligne de conformité ; la sauter met en danger les données du client." },
          { objective: "O4", q: "Que mesure la CSAT ?", options: ["La durée de l'appel", "À quel point les clients se disent satisfaits dans une enquête", "Combien de fois vous vous êtes connecté à l'heure", "Votre vitesse de frappe"], answer: 1, why: "La CSAT est la note de satisfaction client tirée de courtes enquêtes après un contact." },
          { objective: "O4", q: "Vous revenez souvent de pause avec 10 minutes de retard. Quel chiffre baisse ?", options: ["Le respect du planning", "La résolution au premier contact", "La vitesse de frappe", "La note qualité de vérification"], answer: 0, why: "Le respect du planning mesure à quel point vous suivez vos heures de connexion et de pause." },
          { objective: "O5", q: "Vous commencez des horaires de nuit la semaine prochaine. Quel est un bon plan ?", options: ["Dormir à des heures différentes chaque jour", "Boire des boissons énergisantes au lieu de dormir", "Mêmes heures de sommeil dans une pièce sombre et calme, et un moyen sûr de rentrer", "Rentrer seul à pied sur des routes sans éclairage"], answer: 2, why: "Un sommeil régulier dans une pièce sombre et des trajets sûrs protègent votre santé et votre sécurité pendant les horaires de nuit." },
          { objective: "O6", q: "Que fait la gestion des effectifs (WFM) ?", options: ["Elle prend seulement les appels des clients", "Elle prévoit le volume d'appels et planifie les horaires et le personnel", "Elle vend des produits aux clients", "Elle vérifie votre passeport"], answer: 1, why: "La WFM prévoit combien d'agents il faut et à quel moment." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Métiers des centres d'appels et de l'externalisation (BPO)",
    questions: [
      { objective: "O1", q: "Que signifie BPO ?", options: ["Business process outsourcing (externalisation des processus métier)", "Basic phone operations (opérations téléphoniques de base)", "Bank payment office (bureau de paiement bancaire)", "Business product order (commande de produits)"], answer: 0, why: "BPO signifie business process outsourcing : une entreprise fait une partie du travail d'une autre entreprise." },
      { objective: "O1", q: "Vous répondez aux e-mails et aux chats des clients d'une boutique en ligne. Quel type d'emploi est-ce ?", options: ["Voix sortant", "Voix entrant", "Support non-voix", "Vente sur le terrain"], answer: 2, why: "L'e-mail et le chat sont du travail non-voix." },
      { objective: "O1", q: "Un compte sert des clients francophones. Quelle compétence compte le plus pour ses agents ?", options: ["Savoir conduire", "Un français clair, à l'oral comme à l'écrit", "Écrire vite à la main", "Connaître beaucoup de modèles de téléphone"], answer: 1, why: "La langue du compte est souvent la compétence clé que les BPO recherchent." },
      { objective: "O2", q: "Lequel est un signe d'alerte d'une fausse offre d'emploi ?", options: ["Un test en ligne sur le site officiel de l'entreprise", "Un poste publié sur la page carrières officielle", "Un entretien fixé depuis l'adresse e-mail de l'entreprise", "Des frais à payer avant de commencer"], answer: 3, why: "Les vrais employeurs ne vous font pas payer pour être embauché." },
      { objective: "O2", q: "Un \"recruteur\" vous envoie un chèque à déposer et vous demande de renvoyer une partie de l'argent pour du matériel. Qu'est-ce que c'est ?", options: ["Une arnaque courante au faux chèque", "Une façon normale d'acheter un casque", "Une prime à l'embauche", "Une indemnité de formation"], answer: 0, why: "Le chèque est rejeté plus tard et vous devez à la banque l'argent que vous avez envoyé." },
      { objective: "O2", q: "Une agence vous propose un emploi en centre d'appels à l'étranger. Que vérifiez-vous d'abord ?", options: ["Son nombre d'abonnés sur les réseaux sociaux", "Si elle promet un gros salaire", "Si elle est agréée par le ministère du Travail ou l'organisme des travailleurs migrants de votre pays", "Si elle veut votre passeport original"], answer: 2, why: "Une agence agréée peut être vérifiée sur la liste officielle ; une agence non agréée est un risque important." },
      { objective: "O3", q: "Quelle est la meilleure façon de préparer un test de voix BPO ?", options: ["Essayer d'imiter un autre accent", "M'enregistrer en lisant à voix haute et corriger les mots peu clairs", "Parler le plus vite possible", "Apprendre par cœur les prix du client"], answer: 1, why: "S'enregistrer et se réécouter aide à parler clairement, à un rythme régulier." },
      { objective: "O3", q: "Qu'est-ce que le nesting ?", options: ["Vos premières semaines sur de vrais appels avec un soutien renforcé", "Une salle de pause", "Un type de frais d'embauche", "Une prime de nuit"], answer: 0, why: "Le nesting vient après la formation en salle : de vrais appels avec un accompagnement." },
      { objective: "O3", q: "Dans le déroulé d'appel, à quoi sert l'étape de questionnement ?", options: ["À remercier le client", "À terminer l'appel", "À mettre le client en attente", "À poser des questions pour trouver le vrai problème"], answer: 3, why: "Questionner permet de trouver le vrai problème avant d'essayer de le résoudre." },
      { objective: "O3", q: "Vous ne connaissez pas la réponse à la question d'un client. Que faites-vous ?", options: ["Je devine pour que l'appel soit plus court", "Je raccroche", "Je mets poliment en attente et je consulte la base de connaissances ou un chef d'équipe", "Je lui dis d'appeler une autre entreprise"], answer: 2, why: "Vérifier la réponse approuvée garde l'information exacte et l'appel professionnel." },
      { objective: "O4", q: "Que comprend l'AHT ?", options: ["Seulement le temps où vous parlez", "Le temps de conversation, le temps d'attente et les notes après l'appel", "Seulement votre temps de pause", "Le temps entre deux services"], answer: 1, why: "La durée moyenne de traitement compte tout le contact, attente et travail après l'appel compris." },
      { objective: "O4", q: "Quelle est une façon honnête d'améliorer la résolution au premier contact ?", options: ["Raccrocher pendant les appels difficiles", "Dire aux clients de rappeler plus tard", "Marquer des appels comme réglés alors qu'ils ne le sont pas", "Apprendre la base de connaissances et confirmer la solution avant de conclure"], answer: 3, why: "Connaître les réponses et confirmer la solution permet de régler plus de problèmes dès le premier contact." },
      { objective: "O4", q: "Qui donne en général la note qualité ?", options: ["L'équipe qualité, avec une grille sur des appels enregistrés", "Le client, dans une enquête", "L'avocat du client donneur d'ordre", "L'agence de recrutement"], answer: 0, why: "Les analystes qualité écoutent les appels et les notent sur la grille ; la CSAT vient des clients." },
      { objective: "O5", q: "Pourquoi beaucoup d'emplois BPO ont-ils des horaires de nuit ?", options: ["Les appels de nuit ne sont pas imposés", "Les bureaux coûtent moins cher la nuit", "Les comptes suivent souvent le fuseau horaire du client et fonctionnent 24 heures sur 24", "Les clients n'appellent que la nuit"], answer: 2, why: "Beaucoup de comptes servent des clients dans d'autres fuseaux horaires ou fonctionnent jour et nuit." },
      { objective: "O5", q: "Quel élément a sa place dans un plan de travail à domicile ?", options: ["Une pièce partagée et bruyante", "Un casque et une solution de secours pour l'électricité ou Internet", "Un e-mail personnel pour les données des clients", "Une télévision allumée pendant les appels"], answer: 1, why: "Un casque et une solution de secours gardent les appels clairs et vous permettent de travailler pendant les coupures." },
      { objective: "O5", q: "Quel est le plan le plus sûr pour rentrer après un service tardif ?", options: ["Prévoir avant le service un trajet sûr ou le transport de l'entreprise", "Accepter de monter avec n'importe quel inconnu", "Marcher seul dans des rues sans éclairage", "Décider à la fin du service"], answer: 0, why: "Prévoir à l'avance un trajet sûr vous protège la nuit." },
      { objective: "O6", q: "Lequel est un parcours parallèle dans une carrière BPO ?", options: ["Consommateur", "Frais de recrutement", "Appelant", "Analyste assurance qualité"], answer: 3, why: "La qualité, la formation, la gestion des effectifs et le recrutement sont des parcours parallèles courants." },
      { objective: "O6", q: "Que faites-vous pendant les semaines 3 à 8 de votre plan de 90 jours ?", options: ["Rien ; j'attends un appel", "Je paie un recruteur pour me trouver un emploi", "Je m'entraîne à jours fixes et je postule sur les pages carrières officielles", "Je donne mon passeport à une agence"], answer: 2, why: "S'entraîner régulièrement et postuler sur les pages officielles, c'est le cœur du plan." },
      { objective: "O6", q: "Qu'est-ce qui aide un agent à devenir chef d'équipe ?", options: ["Des chiffres réguliers, une bonne assiduité et aider les autres", "Revenir de pause en retard", "Éviter d'accompagner les autres", "Changer de compte chaque mois"], answer: 0, why: "Des chiffres fiables, l'assiduité et l'aide aux autres montrent des qualités de leader." },
      { objective: "O2", q: "Vous découvrez qu'une offre d'emploi était fausse après avoir envoyé la photo de votre pièce d'identité. Que faites-vous ?", options: ["J'envoie d'autres documents pour prouver ma bonne foi", "Je paie les frais pour qu'ils me rendent ma photo", "J'efface les messages et j'oublie", "J'arrête le contact, je garde des captures d'écran et je le signale à la police ou au service officiel de lutte contre la fraude"], answer: 3, why: "Garder des preuves et signaler aide à vous protéger, vous et d'autres, contre l'usurpation d'identité." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 4, 6, 10, 13, 16, 8] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Type d'emploi choisi", objective: "O1", notYet: "Aucun type d'emploi, ou voix et non-voix sont confondus.", meets: "Indique voix ou non-voix et entrant ou sortant, avec la principale compétence demandée.", exceeds: "Explique aussi pourquoi cela correspond à ses propres compétences et langues." },
      { name: "Employeurs vérifiés et arnaques évitées", objective: "O2", notYet: "Les employeurs viennent d'annonces ou de messages, ou le plan prévoit de payer des frais.", meets: "Trois employeurs avec le lien de leur site officiel, et une liste de contrôle d'au moins quatre signes d'arnaque.", exceeds: "Indique aussi comment vérifier l'agrément d'une agence pour un emploi à l'étranger et où signaler une arnaque." },
      { name: "Appel d'entraînement", objective: "O3", notYet: "L'appel enregistré saute des étapes, ou saute la vérification.", meets: "Ouvre, vérifie, questionne, résout, récapitule et conclut ; Atteint sur chaque ligne de la grille.", exceeds: "L'apprenant nomme un point à améliorer et enregistre un deuxième essai meilleur." },
      { name: "Connaît les indicateurs", objective: "O4", notYet: "Ne sait pas dire ce que mesurent l'AHT, la FCR, la CSAT, la note qualité et le respect du planning.", meets: "Explique les cinq, chacun avec un moyen honnête de l'améliorer.", exceeds: "Explique comment se presser peut baisser l'AHT mais nuire à la FCR et à la CSAT." },
      { name: "Plan d'organisation", objective: "O5", notYet: "Moins de cinq points, ou aucune solution de secours.", meets: "Au moins cinq points : sommeil, trajets, repas, équipement et une solution de secours pour l'électricité ou Internet.", exceeds: "Ajoute les règles de confidentialité de l'employeur pour le travail à domicile et prévoit de prévenir tôt le chef d'équipe en cas de problème." },
      { name: "Plan de 90 jours", objective: "O6", notYet: "Pas de dates, ou aucune promotion nommée.", meets: "Des étapes d'entraînement et de candidature datées sur 90 jours et une promotion visée d'ici un an.", exceeds: "Nomme une compétence ou une formation précise pour cette promotion et quand il va la commencer." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille)",
      "Apprenants qui postulent chez au moins trois employeurs BPO vérifiés dans les 30 jours (enquête de suivi)",
      "Apprenants invités à un test d'embauche ou à un entretien, et apprenants embauchés, dans les 90 jours",
      "Apprenants qui signalent une tentative d'arnaque qu'ils ont reconnue sans payer",
      "Apprenants embauchés qui travaillent toujours après 90 jours (c'est dans les premiers mois que beaucoup partent)"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec Internet ; du papier et un stylo pour chaque tâche",
      "Un téléphone qui enregistre le son, pour s'entraîner à la lecture à voix haute et aux appels simulés",
      "Un partenaire pour les appels simulés (ami, membre de la famille ou camarade), ou l'apprenant qui joue les deux rôles",
      "Une page imprimée d'un livre ou d'un journal pour s'entraîner à la frappe, et n'importe quel éditeur de texte",
      "Environ 70 minutes au total, en courtes séances, plus l'entraînement pendant le plan de 90 jours"
    ],
    facilitatorNotes: [
      "Faites le test de départ ensemble. Ensuite, faites un chapitre par séance, avec des appels simulés en binômes pendant le chapitre 2.",
      "Apportez de vraies offres d'emploi locales, sans le nom des entreprises, et demandez aux apprenants de les classer par type d'emploi et d'y chercher les signes d'arnaque.",
      "Si possible, invitez un chef d'équipe, un recruteur ou un formateur d'un BPO local pour expliquer ses vraies étapes d'embauche ; les tests d'embauche varient selon l'entreprise.",
      "Ne demandez jamais aux apprenants de donner de vrais numéros d'identité, mots de passe ou coordonnées bancaires pendant les exercices ; utilisez des données de compte inventées.",
      "Pour les emplois à l'étranger, montrez aux apprenants la liste officielle des agences de recrutement agréées dans votre pays et où signaler le recrutement illégal.",
      "Notez la tâche finale avec la grille et donnez un retour sur une seule ligne Pas encore à la fois."
    ]
  }
};
