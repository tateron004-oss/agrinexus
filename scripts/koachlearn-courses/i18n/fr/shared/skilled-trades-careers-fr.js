"use strict";

// Koach Learn course (French translation of shared/skilled-trades-careers.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "skilled-trades-careers-fr",
  lang: "fr",
  translationOf: "skilled-trades-careers",
  category: "Re-Entry",
  name: "Commencer une carrière dans les métiers techniques",
  skills: "Comparer les métiers techniques, Chercher le salaire et la formation sur les sites officiels, Comprendre l'apprentissage et le pré-apprentissage, Connaître les étapes des licences et certifications, Travailler en sécurité avec les outils, Trouver un programme et y postuler",
  outcome: "choisir un métier technique qui vous convient, chercher son vrai salaire et son parcours de formation sur les sites officiels, trouver un apprentissage ou un pré-apprentissage près de chez vous, et faire un plan étape par étape pour postuler, y compris les options de seconde chance si vous avez un casier judiciaire.",
  about: [
    "Les métiers techniques sont des métiers manuels comme électricien, plombier, technicien CVC (chauffage, ventilation, climatisation), soudeur, installateur solaire, charpentier-menuisier et chauffeur de camion. Beaucoup permettent de gagner de l'argent pendant que vous apprenez, sans diplôme universitaire de quatre ans.",
    "Ce cours s'adresse aux jeunes qui choisissent une voie, aux anciens militaires qui passent à un travail civil, aux personnes qui sortent de prison, et à toute personne prête à travailler de ses mains. Vous comparerez des métiers, vous apprendrez comment fonctionnent l'apprentissage et les licences, vous apprendrez les bases des outils et de la sécurité, et vous ferez un plan pour entrer dans un programme.",
    "Chaque leçon dure environ cinq minutes. Lisez la leçon, regardez les diapositives, puis faites la tâche \"Essayez maintenant\". Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Les règles, les salaires et les licences changent selon l'État américain et avec le temps, donc chaque leçon vous montre l'endroit officiel où vérifier."
  ],
  finalTask: "Faites un \"Plan de départ dans un métier\" d'une page pour un métier : en quoi consiste le travail, son salaire médian et ses perspectives d'emploi selon bls.gov/ooh, la licence ou la certification exigée dans votre État, deux programmes d'apprentissage ou de pré-apprentissage près de chez vous trouvés sur apprenticeship.gov ou dans un centre pour l'emploi local, l'équipement de sécurité et les outils de base dont vous aurez besoin, les ressources de seconde chance qui vous concernent, et vos trois premières étapes avec des dates.",
  chapters: [
    {
      name: "Chapitre 1 : Choisir un métier",
      lessons: [
        {
          title: "Ce que sont les métiers techniques",
          minutes: 5,
          goal: "Décrire sept métiers courants et en choisir deux qui vous conviennent.",
          text: [
            "Les électriciens installent et réparent le câblage, l'éclairage et l'alimentation électrique des maisons et des bâtiments. Les plombiers installent et réparent les tuyaux, les chauffe-eau et les évacuations. Les techniciens CVC travaillent sur le chauffage, la ventilation, la climatisation et la réfrigération (en anglais : HVAC). Les soudeurs assemblent le métal avec la chaleur pour les bâtiments, les navires, les pipelines et les usines.",
            "Les installateurs solaires posent des panneaux solaires sur les toits et au sol et les raccordent. Les charpentiers-menuisiers construisent et réparent des charpentes, des planchers, des escaliers et des placards. Les chauffeurs de camion avec un CDL (permis de conduire commercial américain) transportent des marchandises en ville ou à travers le pays.",
            "Réfléchissez à ce qui vous convient. Aimez-vous travailler dehors ou à l'intérieur ? En hauteur ou au sol ? Aimez-vous les maths et résoudre des problèmes ? Pouvez-vous être loin de chez vous pendant des jours, comme souvent les chauffeurs de longue distance ? Aimez-vous réparer des choses pour des clients ou construire du neuf ? Vos réponses vous orientent vers un métier.",
            "Beaucoup de compétences se transfèrent. La mécanique et la logistique militaires, la discipline et l'esprit d'équipe du sport, et les programmes de travail ou de formation suivis en détention (entretien, cuisine, métiers du bâtiment) comptent tous."
          ],
          words: [["Métier technique", "un métier qui demande une formation pratique spéciale, comme électricien ou soudeur."], ["HVAC (CVC)", "chauffage, ventilation et climatisation."], ["CDL", "commercial driver's license, le permis de conduire commercial américain exigé pour conduire de gros camions et des bus."]],
          slides: [
            { title: "À l'intérieur des bâtiments", bullets: ["Électricien : câblage, éclairage et alimentation", "Plombier : tuyaux, chauffe-eau, évacuations", "CVC : chauffage, climatisation, réfrigération"] },
            { title: "Construire et transporter", bullets: ["Soudeur : assemble le métal avec la chaleur", "Installateur solaire : pose et raccorde des panneaux", "Charpentier-menuisier : charpentes, planchers, escaliers, placards", "Chauffeur CDL : transporte des marchandises en camion"] },
            { title: "Qu'est-ce qui vous convient ?", bullets: ["Dedans ou dehors ? En hauteur ou au sol ?", "Maths et résolution de problèmes ?", "Chez vous chaque soir, ou loin pendant des jours ?"] },
            { title: "Vos compétences se transfèrent", bullets: ["Mécanique et logistique militaires", "Discipline et esprit d'équipe du sport", "Programmes de travail et de formation en détention"] }
          ],
          tryIt: "Répondez par écrit aux questions \"Qu'est-ce qui vous convient ?\". Puis choisissez les deux métiers qui correspondent le mieux à vos réponses et écrivez une phrase pour chacun pour dire pourquoi.",
          youCanNow: "décrire des métiers techniques courants et en choisir deux qui correspondent à votre façon de travailler."
        },
        {
          title: "Vérifier le salaire et la formation sur les sites officiels",
          minutes: 5,
          goal: "Chercher le salaire, la formation et les perspectives d'un métier dans l'Occupational Outlook Handbook.",
          text: [
            "Ne vous fiez pas aux salaires annoncés dans les publicités ou sur les réseaux sociaux. Le Bureau of Labor Statistics (BLS, bureau américain des statistiques du travail) publie l'Occupational Outlook Handbook (guide des perspectives des métiers) sur bls.gov/ooh. Il est gratuit et mis à jour régulièrement.",
            "Chaque métier a une fiche avec des onglets. \"Pay\" (salaire) montre le salaire médian : la moitié des travailleurs gagnent plus et l'autre moitié gagne moins. \"How to Become One\" (comment le devenir) montre la formation, comme un apprentissage, et si une licence est nécessaire. \"Job Outlook\" (perspectives) montre si le nombre d'emplois devrait augmenter. \"State and Area Data\" (données par État et région) montre le salaire là où vous vivez.",
            "Par exemple, la fiche des électriciens indique que la plupart apprennent le métier par un apprentissage de 4 ou 5 ans, et que la plupart des États exigent une licence d'électricien. Le salaire de départ d'un apprenti est plus bas que le salaire médian et augmente en général avec les compétences.",
            "Les assistants d'IA peuvent vous expliquer les mots de ces pages, mais prenez les chiffres sur la page officielle, pas dans la réponse de l'IA."
          ],
          steps: ["Allez sur bls.gov/ooh.", "Cherchez le métier en anglais, par exemple \"electricians\" ou \"plumbers\".", "Ouvrez la fiche et lisez l'onglet Pay : notez le salaire médian et l'année.", "Lisez How to Become One : notez la formation et la licence.", "Lisez Job Outlook et State and Area Data."],
          words: [["Salaire médian", "le salaire du milieu : la moitié des travailleurs gagnent plus et l'autre moitié gagne moins."], ["Perspectives d'emploi", "si le nombre d'emplois d'un domaine devrait augmenter ou baisser."], ["BLS", "le Bureau of Labor Statistics, le service public américain qui recueille les données sur l'emploi et les salaires."]],
          slides: [
            { title: "Utilisez le guide officiel", bullets: ["bls.gov/ooh : gratuit et mis à jour régulièrement", "Pas les publicités ni les publications des réseaux sociaux"] },
            { title: "Lisez chaque fiche", bullets: ["Pay : le salaire médian", "How to Become One : formation et licence", "Job Outlook et State and Area Data"] },
            { title: "Exemple : les électriciens", bullets: ["La plupart apprennent en 4 ou 5 ans d'apprentissage", "La plupart des États exigent une licence", "Le salaire d'apprenti augmente en général avec les compétences"] },
            { title: "L'IA explique, elle ne fournit pas les chiffres", bullets: ["Demandez à l'IA d'expliquer les mots difficiles", "Prenez les chiffres sur la page officielle"] }
          ],
          sources: [
            { name: "Bureau of Labor Statistics des États-Unis : Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" },
            { name: "Occupational Outlook Handbook : Électriciens", url: "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm" }
          ],
          tryIt: "Cherchez vos deux métiers de la leçon 1 sur bls.gov/ooh. Pour chacun, notez le salaire médian et son année, la formation habituelle, si une licence est nécessaire, et les perspectives d'emploi.",
          youCanNow: "trouver le vrai salaire médian, le parcours de formation et les perspectives d'un métier dans le guide officiel."
        },
        {
          title: "Apprentissage, pré-apprentissage et licences",
          minutes: 6,
          goal: "Expliquer comment fonctionnent l'apprentissage, le pré-apprentissage et les licences pour votre métier.",
          text: [
            "Un Registered Apprenticeship (apprentissage enregistré) est un emploi payé avec une formation. Le site apprenticeship.gov du ministère du Travail des États-Unis (DOL) indique que les apprentis reçoivent une expérience de travail payée avec un tuteur, un salaire qui augmente avec leurs compétences, et un diplôme reconnu dans tout le pays à la fin. Vous apprenez au travail et en cours.",
            "Un pré-apprentissage vous prépare à entrer en apprentissage. Il peut durer de quelques semaines à quelques mois et peut être payé ou non. Il couvre souvent les maths de base, l'usage des outils, la sécurité et la préparation à l'emploi, et il peut vous aider à être accepté. Beaucoup de programmes de réinsertion et de community colleges (établissements d'enseignement supérieur de proximité) en proposent.",
            "Les licences et certificats changent selon le métier et l'État. Les électriciens et les plombiers ont en général besoin d'une licence de l'État ou de la ville après leur formation. Les techniciens CVC qui manipulent des fluides frigorigènes doivent avoir la certification EPA Section 608 (de l'agence américaine de protection de l'environnement). Les nouveaux chauffeurs de camion doivent terminer une formation de conducteur débutant auprès d'un organisme inscrit au registre fédéral des formateurs (Training Provider Registry) avant de passer les examens du CDL. Les soudeurs et les installateurs solaires obtiennent souvent des certifications professionnelles demandées par les employeurs.",
            "Anciens militaires : le VA (ministère américain des Anciens combattants) indique que les avantages du GI Bill peuvent servir pour beaucoup d'apprentissages et de formations en emploi, et Helmets to Hardhats met les anciens militaires en relation avec des apprentissages dans le bâtiment."
          ],
          words: [["Apprentissage enregistré", "un emploi payé avec une formation, approuvé par le ministère du Travail ou un État, qui se termine par un diplôme reconnu (en anglais : Registered Apprenticeship)."], ["Pré-apprentissage", "un programme court qui vous prépare à entrer en apprentissage."], ["Licence", "une autorisation officielle d'un État ou d'une ville pour faire certains travaux, comme l'électricité."], ["Certification", "la preuve que vous avez réussi un examen ou une formation pour une compétence."]],
          slides: [
            { title: "Apprentissage enregistré", bullets: ["Un emploi payé avec un tuteur", "Le salaire augmente avec vos compétences", "Un diplôme reconnu dans tout le pays"] },
            { title: "Pré-apprentissage", bullets: ["De quelques semaines à quelques mois", "Maths, outils, sécurité, préparation à l'emploi", "Vous aide à entrer en apprentissage"] },
            { title: "Licences et certificats", bullets: ["Électriciens, plombiers : licence de l'État ou de la ville", "CVC : EPA Section 608 pour les fluides frigorigènes", "CDL : formation de débutant chez un organisme enregistré"] },
            { title: "Pour les anciens militaires", bullets: ["Le GI Bill peut payer beaucoup d'apprentissages", "Helmets to Hardhats : carrières dans le bâtiment"] }
          ],
          sources: [
            { name: "Apprenticeship.gov : Pour les chercheurs d'emploi", url: "https://www.apprenticeship.gov/career-seekers" },
            { name: "Apprenticeship.gov : Qu'est-ce qu'un pré-apprentissage ?", url: "https://www.apprenticeship.gov/help/what-pre-apprenticeship" },
            { name: "EPA : Certification des techniciens Section 608", url: "https://www.epa.gov/section608/section-608-technician-certification-0" },
            { name: "Registre des formateurs de la FMCSA : qui doit suivre la formation de conducteur débutant", url: "https://tpr.fmcsa.dot.gov/Drivers/Applicability" },
            { name: "VA : Formation en emploi et apprentissages", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "Pour votre métier préféré, notez : s'apprend-il en général par un apprentissage ? Quelle licence ou certification exige-t-il ? Puis cherchez \"[votre État] [métier] license\" et trouvez la page officielle du conseil de l'État (cherchez une adresse qui finit par .gov).",
          youCanNow: "expliquer comment fonctionnent l'apprentissage, le pré-apprentissage et les licences, et trouver la page des licences de votre État."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Choisir un métier",
        questions: [
          { q: "Quel métier travaille sur le chauffage, la climatisation et la réfrigération ?", options: ["Charpentier-menuisier", "Soudeur", "Technicien CVC (HVAC)", "Installateur solaire"], answer: 2, why: "CVC veut dire chauffage, ventilation et climatisation (en anglais : HVAC)." },
          { q: "Quel est le meilleur endroit pour chercher le vrai salaire d'un métier ?", options: ["Une publicité sur les réseaux sociaux", "bls.gov/ooh", "La supposition d'un ami", "N'importe quelle réponse d'IA"], answer: 1, why: "L'Occupational Outlook Handbook est la source officielle et gratuite." },
          { q: "Que veut dire \"salaire médian\" ?", options: ["Le salaire le plus élevé du métier", "Le salaire de départ le premier jour", "Le salaire après impôts", "Le milieu : la moitié gagne plus et l'autre moitié gagne moins"], answer: 3, why: "La médiane est la valeur du milieu." },
          { q: "Qu'est-ce qu'un apprentissage enregistré ?", options: ["Un emploi payé avec une formation qui se termine par un diplôme reconnu", "Un stage non payé", "Un diplôme universitaire de quatre ans", "Un seul cours de sécurité"], answer: 0, why: "Les apprentis gagnent un salaire pendant qu'ils apprennent et obtiennent un diplôme." },
          { q: "Un technicien CVC va manipuler des fluides frigorigènes. De quoi a-t-il besoin ?", options: ["D'un CDL", "De la certification EPA Section 608", "D'un certificat de soudure", "De rien"], answer: 1, why: "L'EPA exige que les techniciens qui pourraient rejeter des fluides frigorigènes soient certifiés." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Entrer dans le métier et rester en sécurité",
      lessons: [
        {
          title: "Outils et sécurité au travail",
          minutes: 5,
          goal: "Citer l'équipement de sécurité de base et les habitudes que chaque métier attend.",
          text: [
            "Chaque métier attend de vous que vous travailliez en sécurité dès le premier jour. Les équipements de protection individuelle courants (EPI, en anglais PPE) sont les lunettes de sécurité, le casque de chantier, les gants, les chaussures ou bottes de sécurité à embout renforcé, les protections auditives et les gilets haute visibilité. Les soudeurs ont aussi besoin d'un masque de soudeur et de vêtements résistants aux flammes. Ceux qui travaillent sur les toits ont besoin d'une protection contre les chutes.",
            "Habitudes de base : vérifiez vos outils avant de les utiliser ; gardez votre zone propre ; n'enlevez jamais le protecteur d'une machine ; utilisez la bonne échelle et gardez trois points d'appui ; et soulevez avec les jambes, pas avec le dos. Les électriciens et les agents d'entretien doivent suivre les règles de consignation (en anglais lockout/tagout), qui gardent les machines et le courant coupés pendant que quelqu'un travaille dessus.",
            "Beaucoup d'employeurs et de syndicats demandent aux nouveaux de suivre le cours de sécurité OSHA de 10 heures (OSHA est l'agence fédérale américaine de la sécurité au travail). C'est une carte de formation, pas une licence, mais elle montre que vous connaissez les bases.",
            "Votre employeur doit fournir l'équipement de sécurité et la formation obligatoires. Demandez à votre programme quels outils vous devez acheter vous-même ; les apprentis commencent souvent avec un petit jeu d'outils à main, comme un mètre ruban, un cutter, une pince, des tournevis et un sac à outils."
          ],
          steps: ["Portez les EPI exigés par le travail avant de commencer.", "Vérifiez que les outils et les câbles ne sont pas abîmés.", "Laissez les protecteurs sur les machines et gardez la zone de travail propre.", "Utilisez les échelles avec trois points d'appui.", "Demandez avant de faire quoi que ce soit pour lequel vous n'avez pas été formé."],
          words: [["EPI (PPE)", "équipements de protection individuelle : du matériel comme les lunettes, les gants et les casques qui vous protège."], ["Consignation (lockout/tagout)", "les étapes qui gardent une machine ou le courant coupés et verrouillés pendant que quelqu'un travaille dessus."], ["OSHA 10", "un cours de base de 10 heures sur la sécurité pour les travailleurs, avec une carte de réussite."]],
          slides: [
            { title: "EPI courants", bullets: ["Lunettes de sécurité, casque de chantier, gants", "Chaussures de sécurité, protections auditives", "Masque de soudeur ; protection antichute en hauteur"] },
            { title: "Bonnes habitudes", bullets: ["Vérifiez les outils avant usage", "N'enlevez jamais les protecteurs des machines", "Trois points d'appui sur les échelles", "Soulevez avec les jambes"] },
            { title: "Consignation et OSHA 10", bullets: ["Courant coupé et verrouillé avant le travail", "OSHA 10 : une carte de sécurité de base demandée par beaucoup d'employeurs"] },
            { title: "Votre kit de départ", bullets: ["L'employeur fournit l'équipement de sécurité obligatoire", "Demandez quels outils à main vous devez apporter"] }
          ],
          tryIt: "Pour votre métier préféré, listez les EPI que vous porteriez et cinq outils à main dont vous auriez sans doute besoin. Puis demandez à un programme près de chez vous, ou regardez son site web, sa liste officielle d'outils.",
          youCanNow: "citer l'équipement de sécurité et les habitudes attendus dans votre métier et préparer une liste d'outils de départ."
        },
        {
          title: "Options de seconde chance si vous avez un casier",
          minutes: 5,
          goal: "Trouver des programmes et des aides de seconde chance et prévoir comment gérer un casier dans les métiers techniques.",
          text: [
            "Un casier judiciaire ne bloque pas forcément une carrière dans un métier technique. Beaucoup de programmes d'apprentissage, de syndicats et d'employeurs embauchent des personnes qui ont un casier, et beaucoup d'organismes de réinsertion proposent des pré-apprentissages pour les personnes qui sortent de prison.",
            "Deux outils fédéraux aident les employeurs à dire oui. Le Federal Bonding Program (programme fédéral de cautionnement) peut donner à l'employeur une garantie gratuite pour les six premiers mois d'un emploi, sans frais pour vous ni pour l'employeur, comme le note l'EEOC (l'agence fédérale contre la discrimination à l'emploi). Le Work Opportunity Tax Credit (WOTC, crédit d'impôt pour l'embauche) donne aux employeurs un crédit d'impôt quand ils embauchent certaines personnes, dont un \"ancien condamné qualifié\" embauché dans l'année qui suit une condamnation pour crime grave (felony) ou une libération. L'employeur et le candidat remplissent le formulaire Form 8850 de l'IRS (l'administration fiscale américaine) au plus tard le jour de l'offre d'emploi, alors dites aux employeurs que vous pourriez y avoir droit.",
            "Les licences et certains emplois vérifient le casier. Beaucoup de conseils des licences des États examinent les casiers au cas par cas. Avant de dépenser de l'argent en formation, contactez le conseil de votre métier et demandez comment il examine les casiers. Certaines mentions du CDL, comme le transport de matières dangereuses, exigent une vérification fédérale des antécédents.",
            "Demandez à un service d'aide juridique ou à votre programme de réinsertion si votre casier peut être scellé ou effacé dans votre État, et entraînez-vous à donner une réponse courte et honnête sur votre casier en entretien."
          ],
          steps: ["Cherchez des pré-apprentissages de réinsertion ou de seconde chance près de chez vous.", "Demandez aux employeurs s'ils utilisent le Federal Bonding Program ou le WOTC.", "Contactez le conseil des licences de votre État pour votre métier et demandez comment il examine les casiers.", "Demandez à l'aide juridique si votre casier peut être scellé ou effacé.", "Entraînez-vous à donner une réponse courte et honnête sur votre casier."],
          words: [["Federal Bonding Program", "un programme gratuit du ministère du Travail des États-Unis qui assure les employeurs pendant les premiers mois quand ils embauchent des personnes avec un casier ou d'autres obstacles."], ["Work Opportunity Tax Credit (WOTC)", "un crédit d'impôt fédéral que les employeurs peuvent obtenir quand ils embauchent des personnes de certains groupes, dont certaines personnes condamnées pour un crime grave."], ["Conseil des licences", "le service de l'État qui délivre et examine les licences des métiers."]],
          slides: [
            { title: "Un casier n'est pas la fin", bullets: ["Beaucoup de programmes, syndicats et employeurs embauchent des personnes avec un casier", "Cherchez des pré-apprentissages de réinsertion"] },
            { title: "Des outils qui aident l'employeur à dire oui", bullets: ["Federal Bonding Program : garantie gratuite pendant 6 mois", "WOTC : crédit d'impôt pour les employeurs", "Le Form 8850 se remplit au plus tard le jour de l'offre"] },
            { title: "Vérifiez avant de payer une formation", bullets: ["Demandez au conseil des licences comment il examine les casiers", "Certaines mentions du CDL exigent une vérification des antécédents"] },
            { title: "Prochaines étapes", bullets: ["Demandez à l'aide juridique pour sceller ou effacer un casier", "Entraînez-vous à une réponse courte et honnête"] }
          ],
          sources: [
            { name: "EEOC : Casiers d'arrestation et de condamnation (parle du Federal Bonding Program)", url: "https://www.eeoc.gov/arrestandconviction" },
            { name: "IRS : Work Opportunity Tax Credit", url: "https://www.irs.gov/businesses/small-businesses-self-employed/work-opportunity-tax-credit" },
            { name: "Ministère du Travail des États-Unis : Work Opportunity Tax Credit", url: "https://www.dol.gov/agencies/eta/wotc" }
          ],
          tryIt: "Écrivez trois questions à poser au conseil des licences de votre État pour votre métier sur la façon dont il examine les casiers. Puis écrivez deux phrases que vous pourriez dire à un employeur sur le Federal Bonding Program et le WOTC. (Si vous n'avez pas de casier, faites-le pour un ami ou pour vous entraîner.)",
          youCanNow: "citer des outils de seconde chance pour les métiers techniques et vérifier comment un conseil des licences examine les casiers avant de payer une formation."
        },
        {
          title: "Trouver un programme et y postuler",
          minutes: 5,
          goal: "Trouver deux programmes près de chez vous et faire un plan pour postuler.",
          text: [
            "Commencez sur apprenticeship.gov. Son outil Apprenticeship Job Finder permet de chercher par métier et par lieu et de postuler directement auprès de l'employeur ou du programme. Si vous ne trouvez rien, son Partner Finder montre les organismes qui acceptent de nouvelles candidatures d'apprentis.",
            "Autres endroits où chercher : votre American Job Center local (aide gratuite à la recherche d'emploi et parfois de l'argent pour la formation), les community colleges, les centres de formation des syndicats de chaque métier, les programmes de réinsertion et les programmes pour anciens militaires.",
            "Les programmes demandent souvent un diplôme de fin d'études secondaires ou le GED, une pièce d'identité valide, un permis de conduire pour certains métiers, un test de maths de base, un test de dépistage de drogues et un entretien. Renseignez-vous sur les étapes et les dates de candidature, car certains apprentissages ne prennent des candidatures qu'à certains moments de l'année.",
            "Préparez-vous : révisez les maths de base (fractions, mesures, algèbre simple), rassemblez vos documents, et entraînez-vous à répondre aux questions d'entretien sur la sécurité, la fiabilité et la raison pour laquelle vous voulez ce métier."
          ],
          steps: ["Cherchez sur apprenticeship.gov par métier et par lieu.", "Notez deux programmes, leurs conditions et leurs dates de candidature.", "Contactez votre American Job Center local ou un centre de formation syndical.", "Rassemblez vos documents : pièce d'identité, diplôme ou GED, permis de conduire si besoin.", "Révisez les maths de base et vos réponses d'entretien.", "Postulez, et notez la date de suivi dans votre calendrier."],
          words: [["American Job Center", "un bureau gratuit financé par l'État américain qui aide les gens à trouver un emploi et une formation."], ["GED", "un examen qui donne un diplôme équivalent à la fin des études secondaires."], ["Centre de formation syndical", "une école gérée par un syndicat de métier et des employeurs pour former les apprentis."]],
          slides: [
            { title: "Commencez sur apprenticeship.gov", bullets: ["Apprenticeship Job Finder : cherchez par métier et par lieu", "Partner Finder : programmes qui prennent des candidatures"] },
            { title: "Autres endroits où chercher", bullets: ["American Job Centers", "Community colleges et centres de formation syndicaux", "Programmes de réinsertion et pour anciens militaires"] },
            { title: "Ce que les programmes demandent souvent", bullets: ["Diplôme ou GED, pièce d'identité, parfois un permis de conduire", "Test de maths, test de dépistage, entretien", "Dates de candidature : certains n'ouvrent qu'à certains moments"] },
            { title: "Préparez-vous", bullets: ["Révisez les fractions et les mesures", "Rassemblez vos documents", "Entraînez-vous aux réponses d'entretien"] }
          ],
          sources: [
            { name: "Apprenticeship.gov : Apprenticeship Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop : Trouver un American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }
          ],
          tryIt: "Tâche finale : faites votre Plan de départ dans un métier d'une page. Indiquez le métier, son salaire médian et ses perspectives selon bls.gov/ooh, la licence ou la certification, deux programmes près de chez vous, votre équipement de sécurité et vos outils de départ, les ressources de seconde chance, et vos trois premières étapes avec des dates.",
          youCanNow: "trouver des programmes d'apprentissage et de pré-apprentissage près de chez vous et faire un plan daté pour postuler."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Entrer dans le métier et rester en sécurité",
        questions: [
          { q: "Que veut dire le sigle EPI (en anglais PPE) ?", options: ["Programme payé pour électriciens", "Équipement de protection individuelle", "Examen public de plomberie", "Ingénierie de centrale électrique"], answer: 1, why: "Les EPI sont du matériel comme les lunettes, les gants et les casques qui vous protège." },
          { q: "Qu'est-ce que la consignation (lockout/tagout) ?", options: ["Fermer la boîte à outils le soir", "Un vote syndical", "Garder une machine ou le courant coupés et verrouillés pendant que quelqu'un travaille dessus", "Une façon de pointer à la sortie"], answer: 2, why: "Elle empêche une machine de démarrer pendant que quelqu'un travaille dessus." },
          { q: "Que peut donner le Federal Bonding Program à un employeur qui embauche une personne avec un casier ?", options: ["Une garantie gratuite pour les six premiers mois", "Un camion gratuit", "Une licence pour le travailleur", "Rien"], answer: 0, why: "La garantie est gratuite pour le travailleur et l'employeur et couvre les six premiers mois." },
          { q: "Vous avez un casier et voulez une licence d'électricien. Que faire avant de payer une formation ?", options: ["Cacher le casier", "Abandonner", "Payer d'abord et demander ensuite", "Demander au conseil des licences de l'État comment il examine les casiers"], answer: 3, why: "Les conseils examinent souvent au cas par cas ; demander d'abord protège votre temps et votre argent." },
          { q: "Où pouvez-vous chercher des apprentissages par métier et par lieu ?", options: ["Seulement dans un groupe sur les réseaux sociaux", "L'Apprenticeship Job Finder sur apprenticeship.gov", "Le site de l'IRS", "Une publicité à la télé"], answer: 1, why: "C'est l'outil de recherche officiel du ministère du Travail." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Commencer une carrière dans les métiers techniques",
    questions: [
      { q: "Quel métier assemble le métal avec la chaleur ?", options: ["Plombier", "Soudeur", "Charpentier-menuisier", "Technicien CVC"], answer: 1, why: "Les soudeurs assemblent le métal avec la chaleur." },
      { q: "Que vous permet un CDL ?", options: ["Installer du câblage", "Réparer des tuyaux", "Conduire de gros camions et des bus", "Souder de l'acier"], answer: 2, why: "Le permis de conduire commercial est exigé pour les gros camions et les bus." },
      { q: "Vous détestez la hauteur et voulez rentrer chez vous chaque soir. Qu'est-ce qui vous convient sans doute mal ?", options: ["Le transport routier de longue distance et la pose solaire sur les toits", "La réparation de plomberie à l'intérieur", "La soudure en atelier", "La menuiserie de placards"], answer: 0, why: "La longue distance vous éloigne pendant des jours, et le travail sur les toits se fait en hauteur." },
      { q: "Quelle expérience peut compter pour une carrière dans un métier technique ?", options: ["Seulement les emplois civils payés", "Rien avant 25 ans", "Seulement les cours universitaires", "La mécanique militaire, l'esprit d'équipe du sport et les formations suivies en détention"], answer: 3, why: "Les compétences pratiques et la discipline se transfèrent depuis beaucoup d'endroits." },
      { q: "Quel site est la source officielle et gratuite sur le salaire et les perspectives des métiers ?", options: ["bls.gov/ooh", "Une offre d'emploi", "Un commentaire sous une vidéo", "Une discussion avec un ami"], answer: 0, why: "Le Bureau of Labor Statistics publie l'Occupational Outlook Handbook." },
      { q: "Sur une fiche du guide, quel onglet montre la formation nécessaire ?", options: ["Pay", "Job Outlook", "How to Become One", "Similar Occupations"], answer: 2, why: "How to Become One décrit les études, la formation et les licences." },
      { q: "Un assistant d'IA vous donne un salaire pour les soudeurs. Que devez-vous faire ?", options: ["Le croire", "Le publier en ligne", "L'utiliser tel quel dans votre plan", "Vérifier le chiffre sur bls.gov/ooh"], answer: 3, why: "Prenez les chiffres sur la page officielle ; l'IA peut se tromper ou être dépassée." },
      { q: "Selon le guide, la plupart des électriciens apprennent le métier par :", options: ["Un cours de week-end", "Un apprentissage de 4 ou 5 ans", "Seulement des vidéos en ligne", "Un diplôme universitaire de quatre ans"], answer: 1, why: "La fiche du BLS indique que la plupart apprennent en 4 ou 5 ans d'apprentissage." },
      { q: "Comment les apprentis sont-ils payés en général ?", options: ["Ils paient pour travailler", "Jamais", "Avec un salaire qui augmente avec leurs compétences", "Seulement à la fin"], answer: 2, why: "Les apprentis gagnent un salaire pendant qu'ils apprennent, avec des augmentations." },
      { q: "Qu'est-ce qu'un pré-apprentissage ?", options: ["Un programme court qui vous aide à entrer en apprentissage", "Une licence", "Un formulaire fiscal", "Une cotisation syndicale"], answer: 0, why: "Il vous prépare avec des bases comme les maths, les outils et la sécurité." },
      { q: "Un nouveau chauffeur veut un CDL de classe A. Avant les examens, il doit :", options: ["Acheter un camion", "Terminer une formation de conducteur débutant chez un organisme enregistré", "Obtenir une carte EPA 608", "Passer un test de soudure"], answer: 1, why: "Les règles fédérales exigent une formation chez un organisme inscrit au Training Provider Registry." },
      { q: "Qui peut souvent utiliser les avantages du GI Bill pour un apprentissage ?", options: ["Seulement les militaires en service actif", "Personne", "Seulement les plus de 65 ans", "Beaucoup d'anciens militaires"], answer: 3, why: "Le VA indique que le GI Bill peut payer beaucoup d'apprentissages et de formations en emploi." },
      { q: "Lequel est un EPI ?", options: ["Un mètre ruban", "Des lunettes de sécurité", "Une fiche de paie", "Un CV"], answer: 1, why: "Les lunettes de sécurité protègent vos yeux ; ce sont des équipements de protection individuelle." },
      { q: "Le protecteur d'une meuleuse vous gêne. Vous devez :", options: ["Garder le protecteur et demander de l'aide si le travail demande un autre outil", "Enlever le protecteur", "Tenir le disque avec la main", "Travailler plus vite"], answer: 0, why: "Enlever les protecteurs cause des blessures graves." },
      { q: "Qu'est-ce que l'OSHA 10 ?", options: ["Une licence pour travailler comme électricien", "Une mention du CDL", "Un cours de base de 10 heures sur la sécurité, avec une carte de réussite", "Un crédit d'impôt"], answer: 2, why: "C'est une formation de sécurité, pas une licence." },
      { q: "Qui remplit le Form 8850 de l'IRS pour le WOTC, et quand ?", options: ["Seulement le travailleur, après un an", "L'État, à la fin de l'année", "Personne ; c'est automatique", "L'employeur et le candidat, au plus tard le jour de l'offre d'emploi"], answer: 3, why: "L'IRS indique que le formulaire se remplit au plus tard le jour de l'offre d'emploi." },
      { q: "Beaucoup de conseils des licences des États examinent les casiers :", options: ["Jamais", "Au cas par cas", "Seulement pour les plombiers", "Seulement en ligne"], answer: 1, why: "Demandez au conseil comment il examine les casiers avant de payer une formation." },
      { q: "Quels endroits peuvent vous aider à trouver un programme de métier technique ?", options: ["Seulement les annonces privées", "Seulement une loterie", "Les American Job Centers, les community colleges, les centres de formation syndicaux et les programmes de réinsertion", "Aucun ; il faut attendre qu'on vous appelle"], answer: 2, why: "Ce sont des points de départ courants, gratuits ou peu chers." },
      { q: "Certains apprentissages ne prennent des candidatures qu'à certains moments. Donc vous devez :", options: ["Noter les dates de candidature de chaque programme", "Postuler quand vous y pensez", "Éviter les programmes qui ont des dates", "Postuler seulement en été"], answer: 0, why: "Connaître les dates vous évite de rater la période." },
      { q: "Quelles maths faut-il surtout réviser avant un test d'entrée dans un métier technique ?", options: ["Le calcul différentiel", "Les fractions, les mesures et l'algèbre simple", "La théorie des statistiques", "On n'utilise jamais de maths"], answer: 1, why: "Les métiers techniques utilisent chaque jour les fractions, les mesures et l'algèbre de base." }
    ]
  }
};
