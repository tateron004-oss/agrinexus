"use strict";

// Koach Learn course (French translation of veterans/veterans-va-benefits-gi-bill.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "veterans-va-benefits-gi-bill-fr",
  lang: "fr",
  translationOf: "veterans-va-benefits-gi-bill",
  category: "Veterans (military)",
  name: "Les prestations du VA et le GI Bill",
  skills: "Préparer vos documents, Déposer une demande d'indemnisation pour invalidité, Demander les soins de santé du VA, Comprendre le GI Bill, Demander les aides à la formation, Obtenir l'aide gratuite d'un VSO accrédité",
  outcome: "établir et lancer un plan d'action pour vos prestations du VA : rassembler vos documents, demander correctement l'indemnisation pour invalidité, les soins de santé ou le GI Bill, et obtenir l'aide gratuite d'un représentant des anciens combattants (Veterans Service Officer) accrédité par le VA au lieu de payer quelqu'un pour déposer votre demande.",
  about: [
    "Ce cours s'adresse aux anciens combattants, aux militaires qui se préparent à quitter l'armée et aux proches qui les aident. Beaucoup d'anciens combattants ne demandent jamais les prestations qu'ils ont gagnées, ou attendent des années, parce que la démarche semble compliquée.",
    "Vous rassemblerez les papiers que demande le VA (Department of Veterans Affairs, le ministère américain des Anciens combattants), vous apprendrez comment déposer une demande d'indemnisation pour invalidité et demander les soins de santé, ce que le GI Bill peut payer et comment le demander, et vous trouverez un représentant gratuit accrédité par le VA pour vous aider. Vous apprendrez aussi à repérer les personnes qui font payer le dépôt des demandes.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche \"Essayez maintenant\". Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Les règles, les formulaires et les délais de traitement du VA changent : vérifiez les détails sur va.gov ou auprès d'un représentant accrédité avant de déposer votre demande."
  ],
  finalTask: "Établissez votre plan d'action pour vos prestations du VA : (1) une liste de vos documents, en commençant par votre DD214 ; (2) chaque prestation que vous allez demander (indemnisation pour invalidité, soins de santé, formation) et comment vous allez la demander ; (3) si vous utilisez le GI Bill, quel programme, quelle école ou formation, et ce dont vous avez besoin ; (4) le nom et les coordonnées d'un représentant accrédité par le VA ou d'un VSO trouvé avec l'outil de recherche du VA ; (5) trois signaux d'alerte d'une personne qu'il ne faut pas payer pour déposer votre demande. Puis faites la première démarche pour une prestation.",
  chapters: [
    {
      name: "Chapitre 1 : Demander les prestations du VA",
      lessons: [
        {
          title: "Se préparer : vos documents et votre liste de prestations",
          minutes: 5,
          goal: "Rassembler les documents que demande le VA et lister les prestations que vous pourriez demander.",
          text: [
            "Les prestations du VA sont des droits que vous avez gagnés par votre service. Les plus courantes sont l'indemnisation pour invalidité (des versements mensuels pour des problèmes de santé causés ou aggravés par le service), les soins de santé du VA, les aides à la formation comme le GI Bill (les aides du VA pour les études) et Veteran Readiness and Employment (le programme du VA de préparation à l'emploi). Il en existe d'autres, comme l'aide au prêt immobilier, la pension et les prestations funéraires. Chacune a ses propres règles.",
            "Le papier le plus important est votre DD214 ou vos autres documents de fin de service. Le VA s'en sert pour confirmer votre service. Gardez-en des copies en lieu sûr. Si vous ne trouvez pas le vôtre, va.gov explique comment demander vos dossiers militaires.",
            "Autres choses que le VA peut demander : votre numéro de sécurité sociale américain (Social Security number), vos coordonnées bancaires pour le virement direct, votre dossier médical et le nom de vos médecins, des informations sur votre conjoint et vos personnes à charge, vos cartes d'assurance, et vos revenus de l'année dernière pour certaines décisions sur les soins.",
            "Créez un compte de connexion sur va.gov pour faire vos demandes en ligne, envoyer des documents et suivre leur avancement. N'utilisez que le site officiel. Ne partagez vos identifiants avec personne, et ne tapez jamais votre numéro de sécurité sociale ou vos informations médicales dans un chatbot d'IA."
          ],
          steps: ["Retrouvez votre DD214 ou vos autres papiers de fin de service et faites des copies.", "Rassemblez votre dossier médical et une liste de vos médecins.", "Notez les prestations que vous voulez étudier : invalidité, soins de santé, formation, autres.", "Créez un compte de connexion sur va.gov.", "Rangez tout dans un seul dossier."],
          words: [["DD214", "le document qui montre votre service militaire et les conditions de votre départ."], ["Indemnisation pour invalidité", "des versements mensuels, non imposables, pour des problèmes de santé causés ou aggravés par le service militaire."], ["Personne à charge", "un conjoint, un enfant ou un autre membre de la famille qui dépend de vous."]],
          slides: [
            { title: "Les prestations que vous avez gagnées", bullets: ["Indemnisation pour invalidité", "Soins de santé du VA", "Formation : le GI Bill", "Veteran Readiness and Employment, et d'autres"] },
            { title: "Votre papier le plus important", bullets: ["DD214 ou autres papiers de fin de service", "Gardez des copies en lieu sûr", "Perdu ? va.gov explique comment demander vos dossiers"] },
            { title: "Autres choses que le VA peut demander", bullets: ["Dossier médical et médecins", "Informations sur le conjoint et les personnes à charge", "Coordonnées bancaires pour le virement direct"] },
            { title: "Votre compte va.gov", bullets: ["Faites vos demandes, envoyez et suivez en ligne", "N'utilisez que le site officiel", "Ne partagez jamais vos identifiants"] }
          ],
          sources: [{ name: "VA : Comment déposer une demande d'invalidité auprès du VA", url: "https://www.va.gov/disability/how-to-file-claim/" }],
          tryIt: "Préparez un dossier (en papier ou un dossier sécurisé sur votre propre ordinateur) et mettez-y, ou notez ce qui manque : votre DD214, votre dossier médical, une liste de vos médecins et les informations sur vos personnes à charge. Notez les prestations que vous voulez étudier.",
          youCanNow: "rassembler les documents que demande le VA et lister les prestations que vous pourriez demander."
        },
        {
          title: "Déposer une demande d'indemnisation pour invalidité",
          minutes: 6,
          goal: "Choisir comment déposer une demande d'invalidité et protéger votre date de départ.",
          text: [
            "Vous pouvez déposer une demande d'invalidité en ligne sur va.gov, par courrier avec le formulaire VA Form 21-526EZ, en personne dans un bureau régional du VA, ou avec l'aide d'un représentant accrédité. Le VA indique que commencer le formulaire en ligne fixe automatiquement votre date d'effet.",
            "Votre date d'effet compte, car elle peut décider à partir de quand vos versements sont calculés. Si vous commencez en ligne, le VA prendra la date où vous avez commencé comme date de votre demande, à condition que vous terminiez dans les 365 jours. Si vous déposez sur papier, vous pouvez d'abord envoyer une déclaration d'intention (intent to file) pour réserver une date d'effet possible pendant que vous rassemblez vos preuves.",
            "Les preuves font réussir ou échouer une demande. Le VA examine votre DD214 ou vos papiers de fin de service et votre dossier médical militaire. Ajoutez ce que vous avez : les dossiers de médecins privés, et des déclarations de vous-même ou de personnes qui ont vu comment le problème de santé vous affecte. Listez chaque problème de santé que vous pensez lié à votre service.",
            "Après le dépôt, le VA peut vous convoquer à un examen médical. Allez-y. Suivez l'avancement de votre demande sur va.gov. Le VA publie son délai moyen de traitement, qui change : consultez le chiffre actuel sur va.gov. Si vous n'êtes pas d'accord avec une décision, il existe des moyens de demander un réexamen ; un représentant accrédité peut vous aider."
          ],
          steps: ["Choisissez comment déposer : en ligne, par courrier (VA Form 21-526EZ), en personne, ou avec un représentant accrédité.", "En ligne : commencez le formulaire pour fixer votre date, et terminez-le dans les 365 jours.", "Sur papier : pensez à envoyer d'abord une déclaration d'intention.", "Listez chaque problème de santé et rassemblez vos preuves.", "Allez à chaque examen du VA et suivez votre demande sur va.gov."],
          words: [["Date d'effet", "la date que le VA utilise pour décider à partir de quand vos versements sont calculés."], ["Déclaration d'intention (intent to file)", "un avis au VA indiquant que vous allez déposer une demande, qui peut réserver votre date d'effet pendant que vous rassemblez vos preuves."], ["Preuves", "les dossiers et déclarations qui appuient votre demande."], ["Lien avec le service", "un lien entre un problème de santé et votre service militaire."]],
          slides: [
            { title: "Quatre façons de déposer", bullets: ["En ligne sur va.gov", "Par courrier : VA Form 21-526EZ", "En personne dans un bureau régional du VA", "Avec un représentant accrédité"] },
            { title: "Protégez votre date de départ", bullets: ["En ligne : la date compte si vous finissez en 365 jours", "Sur papier : pensez d'abord à une déclaration d'intention"] },
            { title: "Les preuves font gagner", bullets: ["DD214 et dossier médical militaire", "Dossiers de médecins privés", "Déclarations de vous-même et de témoins"] },
            { title: "Après le dépôt", bullets: ["Allez à votre examen du VA", "Suivez l'avancement sur va.gov", "Pas d'accord ? Parlez d'un réexamen à un représentant accrédité"] }
          ],
          sources: [{ name: "VA : Comment déposer une demande d'invalidité auprès du VA", url: "https://www.va.gov/disability/how-to-file-claim/" }],
          tryIt: "Notez chaque problème de santé qui pourrait, selon vous, être lié à votre service. À côté de chacun, notez une preuve que vous avez ou que vous pourriez obtenir. Puis choisissez comment vous allez déposer votre demande et écrivez-le en haut de la page.",
          youCanNow: "choisir comment déposer une demande d'invalidité, protéger votre date d'effet et rassembler des preuves pour chaque problème de santé."
        },
        {
          title: "Demander les soins de santé du VA",
          minutes: 4,
          goal: "Demander les soins de santé du VA avec les bonnes informations prêtes.",
          text: [
            "Les soins de santé du VA font l'objet d'une demande séparée de l'indemnisation pour invalidité. On les demande avec le formulaire VA Form 10-10EZ, la demande de prestations de santé (Application for Health Benefits).",
            "Vous pouvez faire la demande en ligne sur va.gov, par téléphone auprès de la ligne des prestations de santé du VA au 877-222-8387 (le VA indique du lundi au vendredi, de 8:00 a.m. à 8:00 p.m., heure de l'Est des États-Unis), par courrier, ou en personne dans un centre médical ou une clinique du VA. Un représentant accrédité peut aussi vous aider.",
            "Préparez : votre DD214 et votre parcours militaire, y compris toute exposition toxique ou dangereuse ; les numéros de sécurité sociale de vous-même, de votre conjoint et des personnes à charge concernées ; vos cartes d'assurance, y compris Medicare ou une assurance d'employeur ; et les revenus de votre foyer de l'année dernière. Le VA indique que vous pouvez ne pas donner vos revenus, mais il peut en avoir besoin pour décider de votre demande.",
            "Exemple : un Marine qui a servi à l'étranger souffre d'asthme et veut un médecin traitant. Il demande les soins de santé en ligne la même semaine que sa demande d'invalidité, indique son historique d'exposition, et prend son premier rendez-vous dès qu'il est inscrit."
          ],
          steps: ["Rassemblez votre DD214, votre historique d'exposition, les numéros de sécurité sociale et vos cartes d'assurance.", "Notez les revenus de votre foyer de l'année dernière.", "Faites la demande en ligne sur va.gov, par téléphone au 877-222-8387, par courrier ou en personne.", "Attendez la décision du VA et prenez votre premier rendez-vous."],
          words: [["VA Form 10-10EZ", "la demande de prestations de santé du VA."], ["Exposition toxique", "un contact, pendant le service, avec des choses nocives comme les fosses de brûlage (burn pits), des produits chimiques ou des radiations."]],
          slides: [
            { title: "Une demande séparée", bullets: ["Les soins ne sont pas la même chose qu'une demande d'invalidité", "Formulaire : VA Form 10-10EZ"] },
            { title: "Façons de faire la demande", bullets: ["En ligne sur va.gov", "Téléphone : 877-222-8387", "Par courrier, ou en personne dans un site du VA"] },
            { title: "À préparer", bullets: ["DD214 et historique d'exposition", "Numéros de sécurité sociale et cartes d'assurance", "Revenus du foyer de l'année dernière"] }
          ],
          sources: [{ name: "VA : Comment demander les soins de santé du VA", url: "https://www.va.gov/health-care/how-to-apply/" }],
          tryIt: "Remplissez une liste d'entraînement pour le 10-10EZ : DD214 (vous l'avez ou non), historique d'exposition, cartes d'assurance, revenus du foyer de l'année dernière. Cochez ce que vous avez et ce qui vous manque encore, et choisissez comment vous allez faire la demande.",
          youCanNow: "demander les soins de santé du VA avec les bonnes informations et connaître les façons de faire la demande."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Demander les prestations du VA",
        questions: [
          { q: "Quel document le VA utilise-t-il pour confirmer votre service ?", options: ["Votre permis de conduire", "Une fiche de paie d'un emploi civil", "Votre DD214 ou vos autres papiers de fin de service", "Une carte de salle de sport"], answer: 2, why: "Le VA examine votre DD214 ou vos documents de fin de service." },
          { q: "Vous avez commencé une demande d'invalidité en ligne, mais il vous faut du temps pour obtenir des dossiers. Combien de temps avez-vous pour terminer et garder votre date de départ ?", options: ["365 jours", "7 jours", "30 jours", "Il n'y a pas de date de départ"], answer: 0, why: "Le VA indique que la date où vous avez commencé compte si vous terminez dans les 365 jours." },
          { q: "À quoi sert le VA Form 21-526EZ ?", options: ["À demander le GI Bill", "À demander les soins de santé du VA", "À changer d'adresse", "À demander l'indemnisation pour invalidité par courrier"], answer: 3, why: "C'est la demande d'indemnisation pour invalidité." },
          { q: "Quel formulaire sert à demander les soins de santé du VA ?", options: ["DD214", "VA Form 10-10EZ", "VA Form 22-1990", "Un W-2"], answer: 1, why: "Le 10-10EZ est la demande de prestations de santé." },
          { q: "Vous déposez une demande d'invalidité. Que devez-vous faire aussi ?", options: ["Aller à chaque examen du VA prévu pour vous", "Ignorer les lettres du VA", "Payer quelqu'un pour accélérer", "Déposer la même demande plusieurs fois"], answer: 0, why: "L'examen fait partie de la décision ; le manquer peut nuire à votre demande." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Le GI Bill et l'aide gratuite",
      lessons: [
        {
          title: "Comprendre le GI Bill",
          minutes: 5,
          goal: "Citer les principaux programmes du GI Bill et ce qu'ils peuvent payer.",
          text: [
            "Le GI Bill aide à payer les études et la formation. Le principal programme aujourd'hui est le Post-9/11 GI Bill (Chapter 33), pour les personnes qui ont servi en service actif après le 10 septembre 2001. Il peut aider à payer les études et couvrir des frais pendant que vous vous formez à un métier.",
            "Parmi les autres programmes : le Montgomery GI Bill Active Duty (Chapter 30) et le Montgomery GI Bill Selected Reserve (Chapter 1606), pour les membres de la Réserve et de la Garde nationale. Celui que vous pouvez utiliser dépend de votre service.",
            "Le GI Bill ne sert pas seulement à l'université en quatre ans. Le VA cite des usages comme les diplômes de premier cycle et de cycle supérieur, les formations diplômantes hors université, la formation en entreprise et l'apprentissage, les examens de licence et de certification, la formation au pilotage, les cours en ligne, et plus encore. Le Yellow Ribbon Program peut aider à couvrir les frais de scolarité que le Post-9/11 GI Bill ne couvre pas, dans les écoles participantes.",
            "Certains militaires peuvent transférer leurs droits Post-9/11 non utilisés à leur conjoint ou à leurs enfants. Si vous avez déjà des droits Post-9/11, vérifiez ce qu'il vous reste sur votre GI Bill Statement of Benefits (votre relevé de droits) sur va.gov."
          ],
          words: [["GI Bill", "les aides du VA à la formation qui aident à payer les études ou la formation."], ["Post-9/11 GI Bill", "le GI Bill pour les personnes qui ont servi en service actif après le 10 septembre 2001 (Chapter 33)."], ["Yellow Ribbon Program", "un programme qui peut couvrir les frais de scolarité que le Post-9/11 GI Bill ne couvre pas, dans les écoles participantes."], ["Apprentissage", "une formation rémunérée en entreprise pour un métier qualifié."]],
          slides: [
            { title: "Les principaux programmes du GI Bill", bullets: ["Post-9/11 GI Bill (Chapter 33)", "Montgomery GI Bill Active Duty (Chapter 30)", "Montgomery GI Bill Selected Reserve (Chapter 1606)"] },
            { title: "Pas seulement l'université", bullets: ["Diplômes et formations hors université", "Apprentissage et formation en entreprise", "Examens de licence et de certification"] },
            { title: "Aide en plus", bullets: ["Yellow Ribbon : frais de scolarité non couverts par le GI Bill", "Transfert au conjoint ou aux enfants, pour certains"] },
            { title: "Vérifiez ce qu'il vous reste", bullets: ["GI Bill Statement of Benefits sur va.gov"] }
          ],
          sources: [{ name: "VA : À propos des prestations du GI Bill", url: "https://www.va.gov/education/about-gi-bill-benefits/" }],
          tryIt: "Notez le métier que vous voulez. Puis notez deux types de formation acceptés par le GI Bill qui pourraient vous y mener, par exemple un apprentissage d'électricien et un programme de certificat, ou un diplôme et un examen de licence.",
          youCanNow: "citer les principaux programmes du GI Bill et associer une formation acceptée par le GI Bill à un objectif professionnel."
        },
        {
          title: "Demander le GI Bill et choisir une école",
          minutes: 5,
          goal: "Demander les aides à la formation et comparer les écoles avant de vous inscrire.",
          text: [
            "Demandez les aides à la formation en ligne sur va.gov. Si vous faites la demande par courrier, utilisez le VA Form 22-1990, la demande d'aides à la formation du VA, pour le Post-9/11 GI Bill et les programmes Montgomery GI Bill. Les membres de la famille qui utilisent des droits transférés utilisent un autre formulaire, le VA Form 22-1990e.",
            "Préparez : votre numéro de sécurité sociale, vos coordonnées bancaires pour le virement direct, votre parcours scolaire et militaire, et les informations de base sur l'école ou le programme de formation. Le VA indique que vous ne pouvez pas modifier la demande après l'avoir envoyée : vérifiez-la d'abord.",
            "Le VA indique qu'il faut en moyenne environ 30 jours pour traiter les demandes de formation, mais consultez les délais actuels sur va.gov. Une fois votre demande acceptée, le VA envoie un Certificate of Eligibility (certificat d'admissibilité). Donnez-en une copie au responsable de la certification de votre école, souvent au bureau des services aux anciens combattants ou aux militaires.",
            "Avant de vous inscrire, comparez les écoles avec le GI Bill Comparison Tool (l'outil de comparaison du GI Bill) sur va.gov, et interrogez l'école sur les coûts, les débouchés de ses étudiants et sa participation au Yellow Ribbon. Méfiez-vous des écoles qui vous pressent de vous inscrire vite."
          ],
          steps: ["Choisissez votre programme et votre école ou formation.", "Comparez-les avec le GI Bill Comparison Tool sur va.gov.", "Rassemblez votre numéro de sécurité sociale, vos coordonnées bancaires et votre parcours scolaire et militaire.", "Faites la demande en ligne, ou par courrier avec le VA Form 22-1990.", "Donnez votre Certificate of Eligibility au responsable de la certification de l'école."],
          words: [["Certificate of Eligibility (COE)", "la lettre du VA qui indique quelle aide à la formation vous avez et pour quel montant."], ["Responsable de la certification de l'école", "la personne de l'école qui informe le VA de votre inscription."], ["VA Form 22-1990", "la demande d'aides à la formation du VA."]],
          slides: [
            { title: "Comment faire la demande", bullets: ["En ligne sur va.gov", "Par courrier : VA Form 22-1990", "Famille avec droits transférés : 22-1990e"] },
            { title: "À préparer", bullets: ["Numéro de sécurité sociale et coordonnées bancaires", "Parcours scolaire et militaire", "Informations sur l'école ou le programme"] },
            { title: "Après la demande", bullets: ["Environ 30 jours en moyenne ; vérifiez sur va.gov", "Vous recevez un Certificate of Eligibility", "Donnez-le au responsable de la certification de l'école"] },
            { title: "Comparez avant de vous inscrire", bullets: ["GI Bill Comparison Tool sur va.gov", "Demandez les coûts, les débouchés et le Yellow Ribbon", "Partez si on vous presse de signer vite"] }
          ],
          sources: [
            { name: "VA : Comment demander le GI Bill et les aides associées", url: "https://www.va.gov/education/how-to-apply/" },
            { name: "VA : GI Bill Comparison Tool", url: "https://www.va.gov/education/gi-bill-comparison-tool/" }
          ],
          tryIt: "Choisissez deux écoles ou programmes de formation pour votre objectif professionnel. Recherchez chacun dans le GI Bill Comparison Tool sur va.gov, et notez deux informations sur chacun et une question que vous poseriez à son bureau des anciens combattants.",
          youCanNow: "demander les aides du GI Bill, comparer les écoles avant de vous inscrire et utiliser votre Certificate of Eligibility."
        },
        {
          title: "Obtenir une aide gratuite et éviter ceux qui font payer le dépôt",
          minutes: 5,
          goal: "Trouver un représentant gratuit accrédité par le VA et repérer les personnes qu'il ne faut pas payer.",
          text: [
            "Vous n'êtes pas obligé de faire votre demande seul. Le VA accrédite trois types de représentants : les représentants d'une Veterans Service Organization (VSO, organisation d'aide aux anciens combattants), les avocats et les agents de demandes (claims agents). Le VA indique que l'aide d'un représentant accrédité d'une VSO pour votre demande est toujours gratuite. Il peut vous aider à rassembler des preuves, déposer une demande, demander le réexamen d'une décision et parler au VA pour vous. Beaucoup d'États et de comtés ont aussi des agents de service aux anciens combattants.",
            "Trouvez-en un avec l'outil du VA \"Find a VA-accredited representative or VSO\" (trouver un représentant accrédité par le VA ou une VSO) sur va.gov. Le VA conseille de vérifier que toute personne qui vous aide pour votre demande est accréditée avant de la choisir.",
            "Les avocats et les agents de demandes peuvent facturer des honoraires, mais selon le VA, seulement après que le VA a rendu sa décision sur votre demande initiale, et seulement avec une convention d'honoraires signée. Donc toute personne qui vous fait payer le dépôt de votre première demande, ou qui promet un taux d'invalidité plus élevé contre de l'argent, est un signal d'alerte. Certaines personnes non accréditées, parfois appelées \"requins des demandes\" (claim sharks), demandent une part de vos futurs rappels de versements, vos identifiants ou des frais d'avance.",
            "Ne donnez jamais vos identifiants va.gov à personne. Si vous pensez qu'un représentant a mal agi ou vous a facturé des honoraires injustes, vous pouvez contacter l'Office of General Counsel du VA (le service juridique du VA), et vous devez agir vite en cas de litige sur les honoraires."
          ],
          steps: ["Ouvrez l'outil du VA \"Find a VA-accredited representative or VSO\" sur va.gov.", "Cherchez près de chez vous et choisissez un représentant d'une VSO (gratuit).", "Vérifiez qu'il est accrédité avant de partager quoi que ce soit.", "Ne payez jamais pour déposer une demande initiale, et ne partagez jamais vos identifiants va.gov.", "Signalez les problèmes à l'Office of General Counsel du VA."],
          words: [["VSO", "Veterans Service Organization : une organisation dont les représentants accrédités aident gratuitement les anciens combattants dans leurs demandes."], ["Accrédité", "autorisé par le VA à aider pour les demandes auprès du VA."], ["Requin des demandes (claim shark)", "une personne ou une entreprise non accréditée qui fait payer aux anciens combattants le dépôt de leurs demandes."]],
          slides: [
            { title: "L'aide gratuite existe", bullets: ["Les représentants accrédités d'une VSO sont toujours gratuits", "Ils rassemblent les preuves, déposent et parlent au VA"] },
            { title: "En trouver un", bullets: ["Outil du VA Find a VA-accredited representative", "Vérifiez l'accréditation avant de choisir"] },
            { title: "Signaux d'alerte", bullets: ["Fait payer le dépôt de votre première demande", "Promet un taux plus élevé contre de l'argent", "Veut vos identifiants va.gov ou une part de vos rappels"] },
            { title: "Protégez-vous", bullets: ["Ne partagez jamais vos identifiants va.gov", "Signalez les problèmes à l'Office of General Counsel du VA"] }
          ],
          sources: [
            { name: "VA : Questions fréquentes sur les représentants accrédités", url: "https://www.va.gov/resources/va-accredited-representative-faqs/" },
            { name: "VA : Trouver un représentant accrédité par le VA ou une VSO", url: "https://www.va.gov/get-help-from-accredited-representative/find-rep/" }
          ],
          tryIt: "Tâche finale : utilisez l'outil du VA \"Find a VA-accredited representative or VSO\" pour trouver un représentant gratuit près de chez vous, et notez son nom et comment le joindre. Puis terminez votre plan d'action pour vos prestations du VA avec votre liste de documents, les prestations que vous allez demander et comment, votre plan GI Bill si vous en avez un, et trois signaux d'alerte des requins des demandes. Faites la première démarche pour une prestation.",
          youCanNow: "trouver une VSO gratuite et accréditée, repérer les personnes qu'il ne faut pas payer pour déposer une demande, et lancer votre plan d'action pour vos prestations du VA."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Le GI Bill et l'aide gratuite",
        questions: [
          { q: "À qui s'adresse le Post-9/11 GI Bill ?", options: ["À toute personne qui vit aux États-Unis", "Seulement aux officiers", "Seulement aux conjoints", "Aux personnes qui ont servi en service actif après le 10 septembre 2001"], answer: 3, why: "Le VA indique que le Post-9/11 GI Bill concerne le service actif après le 10 septembre 2001." },
          { q: "Laquelle de ces choses le GI Bill peut-il aider à payer ?", options: ["Un prêt auto", "Un apprentissage ou un examen de licence", "Un loyer chez vos parents", "Votre facture de téléphone"], answer: 1, why: "Le VA cite l'apprentissage, la formation en entreprise et les examens de licence parmi les usages du GI Bill." },
          { q: "Une fois votre GI Bill accepté, qui reçoit une copie de votre Certificate of Eligibility ?", options: ["Un recruteur", "Votre propriétaire", "Le responsable de la certification de votre école", "Personne"], answer: 2, why: "Le responsable de la certification de l'école s'en sert pour déclarer votre inscription au VA." },
          { q: "Combien un représentant accrédité d'une VSO fait-il payer pour vous aider dans votre demande ?", options: ["Rien ; c'est toujours gratuit", "Une part de vos rappels de versements", "Des frais avant le dépôt", "Un mois de versements"], answer: 0, why: "Le VA indique que l'aide des représentants accrédités d'une VSO est toujours gratuite." },
          { q: "Une entreprise propose de déposer votre première demande d'invalidité contre 20% de vos rappels de versements. Qu'est-ce que c'est ?", options: ["Des frais normaux du VA", "Un programme du VA", "Un signal d'alerte ; adressez-vous plutôt à une VSO accréditée et gratuite", "Une obligation légale"], answer: 2, why: "Les honoraires ne sont permis qu'après la décision du VA sur la demande initiale, avec une convention signée, et seulement pour des avocats ou agents accrédités." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Les prestations du VA et le GI Bill",
    questions: [
      { q: "Qu'est-ce que l'indemnisation pour invalidité ?", options: ["Une carte cadeau unique", "Des versements mensuels pour des problèmes de santé causés ou aggravés par le service", "Un prêt étudiant", "Une offre d'emploi"], answer: 1, why: "Elle indemnise les anciens combattants pour des problèmes de santé liés au service." },
      { q: "Que devez-vous faire de votre DD214 ?", options: ["En garder des copies en lieu sûr", "Le jeter après votre départ de l'armée", "Le publier en ligne", "Donner l'original à quiconque le demande"], answer: 0, why: "Le VA s'en sert pour confirmer votre service : gardez-le en sécurité." },
      { q: "Où devez-vous demander les prestations du VA en ligne ?", options: ["Sur n'importe quel site avec un drapeau", "Par un lien dans un SMS", "Sur le site officiel va.gov", "Sur une page de réseau social"], answer: 2, why: "N'utilisez que le site officiel du VA." },
      { q: "Que ne devez-vous JAMAIS taper dans un chatbot d'IA ?", options: ["\"Explique-moi ce qu'est une date d'effet\"", "\"Aide-moi à lister des questions pour mon VSO\"", "\"Qu'est-ce que le GI Bill ?\"", "Votre numéro de sécurité sociale ou vos informations médicales"], answer: 3, why: "Gardez vos informations privées hors des outils d'IA." },
      { q: "Laquelle n'est PAS une façon de déposer une demande d'invalidité ?", options: ["En ligne sur va.gov", "Par courrier avec le VA Form 21-526EZ", "En personne dans un bureau régional du VA", "En envoyant un SMS à un inconnu qui propose son aide"], answer: 3, why: "Déposez en ligne, par courrier, en personne ou avec un représentant accrédité." },
      { q: "Vous comptez déposer sur papier, mais il vous faut du temps pour rassembler des preuves. Qu'est-ce qui peut protéger votre date d'effet ?", options: ["Une déclaration d'intention", "Attendre quelques années", "Ne rien déposer", "Appeler un requin des demandes"], answer: 0, why: "Une déclaration d'intention peut réserver une date d'effet possible." },
      { q: "Quelle est une bonne preuve pour une demande d'invalidité ?", options: ["Une supposition sur ce que veut le VA", "Le dossier médical militaire et les dossiers des médecins", "Une publication sur un réseau social", "La décision sur la demande d'un ami"], answer: 1, why: "Les dossiers et les déclarations de témoins appuient votre demande." },
      { q: "Le VA vous convoque à un examen pour votre demande. Vous devez :", options: ["Ne pas y aller", "Envoyer quelqu'un d'autre", "Y aller", "Demander à un requin des demandes d'y aller"], answer: 2, why: "L'examen fait partie de la décision." },
      { q: "Quel formulaire sert pour les soins de santé du VA ?", options: ["VA Form 10-10EZ", "VA Form 22-1990", "VA Form 21-526EZ", "Un DD214"], answer: 0, why: "Le 10-10EZ est la demande de prestations de santé." },
      { q: "Quand vous demandez les soins de santé du VA, que devez-vous indiquer sur votre service ?", options: ["Seulement votre grade", "Rien du tout", "Votre base préférée", "Votre parcours militaire, y compris toute exposition toxique ou dangereuse"], answer: 3, why: "Le VA demande le parcours militaire et les expositions." },
      { q: "Quel numéro de téléphone le VA indique-t-il pour l'aide à la demande de soins ?", options: ["911", "988", "877-222-8387", "411"], answer: 2, why: "Le VA indique le 877-222-8387 pour la ligne des prestations de santé." },
      { q: "Le Post-9/11 GI Bill s'appelle aussi :", options: ["Chapter 1606", "Chapter 33", "Form 10-10EZ", "Le DD214"], answer: 1, why: "Le Post-9/11 GI Bill est le Chapter 33." },
      { q: "Une ancienne combattante veut devenir électricienne sans diplôme universitaire de quatre ans. Le GI Bill peut-il l'aider ?", options: ["Non, il ne paie que l'université en quatre ans", "Oui, il peut aider pour l'apprentissage et la formation en entreprise", "Seulement si elle part à l'étranger", "Seulement pour les officiers"], answer: 1, why: "Le VA cite l'apprentissage et la formation en entreprise parmi les usages du GI Bill." },
      { q: "Le Yellow Ribbon Program peut :", options: ["Payer votre loyer", "Remplacer votre DD214", "Accélérer les demandes d'invalidité", "Aider à couvrir les frais de scolarité que le Post-9/11 GI Bill ne couvre pas, dans les écoles participantes"], answer: 3, why: "Le Yellow Ribbon aide pour les frais de scolarité au-delà de ce que couvre le GI Bill." },
      { q: "Si vous demandez le GI Bill par courrier, quel formulaire utilisez-vous ?", options: ["VA Form 22-1990", "VA Form 10-10EZ", "VA Form 21-526EZ", "Un formulaire d'impôts"], answer: 0, why: "Le VA Form 22-1990 est la demande d'aides à la formation du VA." },
      { q: "Avant de vous inscrire dans une école avec le GI Bill, vous devez :", options: ["Vous inscrire le jour même où le recruteur appelle", "Ne pas comparer", "La comparer avec le GI Bill Comparison Tool et demander les coûts et les débouchés", "Payer un acompte avant de lire quoi que ce soit"], answer: 2, why: "Comparer d'abord protège vos droits." },
      { q: "Pouvez-vous modifier votre demande de GI Bill après l'avoir envoyée ?", options: ["Oui, à tout moment", "Oui, en appelant une école", "Seulement le week-end", "Non, alors vérifiez-la avant de l'envoyer"], answer: 3, why: "Le VA indique qu'on ne peut pas la modifier après l'envoi." },
      { q: "Lesquels sont accrédités par le VA pour aider dans les demandes ?", options: ["Les représentants d'une VSO, les avocats et les agents de demandes", "N'importe quel site web", "Toute personne qui a servi", "Les vendeurs de voitures"], answer: 0, why: "L'Office of General Counsel du VA accrédite ces trois types." },
      { q: "Quand un avocat ou un agent de demandes accrédité peut-il facturer des honoraires ?", options: ["Avant le dépôt de votre première demande", "Seulement après la décision du VA sur votre demande initiale, et avec une convention d'honoraires signée", "Quand il le veut", "Jamais, en aucun cas"], answer: 1, why: "Le VA indique que les honoraires ne viennent qu'après la décision initiale, avec une convention signée." },
      { q: "Une personne qui vous aide pour votre demande vous demande vos identifiants va.gov. Vous devez :", options: ["Les partager pour qu'elle aille plus vite", "Les lui écrire sur un post-it", "Refuser ; ne partagez jamais vos identifiants", "Les remplacer par quelque chose de plus simple"], answer: 2, why: "Ne donnez jamais vos identifiants va.gov à personne." }
    ]
  }
};
