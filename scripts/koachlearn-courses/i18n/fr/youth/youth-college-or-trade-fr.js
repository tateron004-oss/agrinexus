"use strict";

// Koach Learn course (French translation of youth/youth-college-or-trade.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "youth-college-or-trade-fr",
  lang: "fr",
  translationOf: "youth-college-or-trade",
  category: "Youth",
  name: "Choisir les études, un métier ou le travail après le lycée",
  skills: "Connaître vos intérêts et vos besoins, Comparer les parcours d'études, Comparer les métiers, l'apprentissage, l'armée et le travail, Demander une aide financière, Éviter les pièges de la dette et les arnaques, Faire un plan sur deux ans",
  outcome: "comparer côte à côte les études supérieures, un métier, l'armée et le travail, trouver comment payer votre choix sans tomber dans les pièges de la dette ni les arnaques, et écrire un plan sur deux ans avec une solution de secours.",
  about: [
    "Après le lycée (high school), il n'y a pas un seul bon chemin. Certaines personnes vont dans une université de quatre ans, certaines commencent dans un community college, certaines apprennent un métier par l'apprentissage, certaines entrent dans l'armée, et d'autres vont directement travailler et continuent d'apprendre sur le tas. Beaucoup de gens mélangent ces chemins avec le temps.",
    "Dans ce cours, vous regarderez ce que vous aimez et ce dont vous avez besoin, vous comparerez les principaux parcours avec les mêmes questions, vous apprendrez comment fonctionnent la FAFSA et les autres aides financières, vous repérerez les pièges de la dette et les arnaques, et vous écrirez votre propre plan sur deux ans avec une solution de secours.",
    "Les règles sur l'argent, les dates et les programmes changent chaque année. Chaque leçon vous montre où vérifier les informations actuelles, et vous devriez parler de votre plan avec un conseiller d'orientation, un parent ou un autre adulte de confiance.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche à faire tout de suite. Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin."
  ],
  finalTask: "Écrivez un plan d'une page sur deux ans : votre parcours principal et une solution de secours, une comparaison d'au moins deux parcours avec les cinq mêmes questions (coût, durée, salaire pendant la formation, emplois probables, conditions d'entrée), comment vous allez payer, ce que vous ferez tous les six mois, et les personnes qui vous aideront.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Des lycéens et de jeunes diplômés aux États-Unis qui décident quoi faire après le lycée, ainsi que les parents, conseillers et mentors qui les aident.",
    startingPoint: "Ils connaissent certains de leurs centres d'intérêt et ont entendu parler de l'université, des métiers ou de l'armée par leurs amis et leur famille. Peu ont comparé les parcours avec les mêmes questions, regardé le prix net, rempli la FAFSA ou appris à repérer les arnaques à l'aide financière.",
    gap: "Choisir un parcours sur des « on-dit » peut mener à des dettes pour un programme qui ne convient pas, à des dates limites d'aide manquées ou à de l'argent perdu dans des arnaques. Comparer les options avec les mêmes questions, comprendre l'aide financière et écrire un plan sur deux ans avec une solution de secours aide les jeunes à commencer un parcours qui leur convient et qu'ils peuvent payer.",
    constraints: [
      "Les règles d'argent, les dates d'aide et les programmes changent chaque année ; les apprenants vérifient sur studentaid.gov, apprenticeship.gov et les sites officiels des écoles",
      "Pas de conseil financier : les apprenants discutent de leurs plans avec un conseiller, un parent ou un adulte de confiance",
      "Vie privée et arnaques : ne jamais partager un FSA ID, des numéros de compte bancaire ou de carte, et ne jamais payer pour remplir la FAFSA",
      "Appareils : un téléphone ou un ordinateur de l'école ou de la bibliothèque avec Internet",
      "Des leçons courtes et des mots simples ; beaucoup d'apprenants seront les premiers de leur famille à faire ces choix"
    ],
    prerequisites: "Aucun. « L'IA et la découverte des métiers » est un bon premier cours."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Avant de comparer des écoles ou des emplois", action: "lister vos centres d'intérêt, vos points forts, votre façon d'apprendre et vos besoins d'argent, et choisir les parcours qui vous conviennent le mieux pour l'instant", standard: "en entourant deux ou trois des cinq parcours principaux" },
    { id: "O2", condition: "Avec les sites web des écoles et les calculateurs de prix net", action: "comparer un community college et une université de quatre ans avec les cinq mêmes questions", standard: "avec chaque question répondue ou marquée « à demander »" },
    { id: "O3", condition: "Avec apprenticeship.gov et des sources officielles", action: "comparer un apprentissage, l'armée ou un emploi avec formation avec les cinq mêmes questions", standard: "en demandant le taux de réussite, le taux d'emploi et l'accréditation avant de signer quoi que ce soit" },
    { id: "O4", condition: "Avec studentaid.gov", action: "expliquer les quatre types d'aide financière et prévoir quand et avec qui vous remplirez la FAFSA", standard: "avec la date d'ouverture et les dates limites de cette année notées, et sans payer de frais" },
    { id: "O5", condition: "À partir d'offres d'aide et d'offres de bourses", action: "classer chaque offre en argent gratuit, argent à gagner et prêts, calculer ce qui reste à payer, et repérer les signes d'arnaque", standard: "avec des montants justes et en nommant où signaler une arnaque" },
    { id: "O6", condition: "Avec vos comparaisons et votre plan d'aide", action: "écrire un plan sur deux ans avec un parcours principal, une solution de secours, des étapes clés tous les six mois, la façon de payer et les personnes qui vous aideront", standard: "avec toutes les parties et une date pour le revoir" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Comparer vos parcours",
      lessons: [
        {
          objectives: ["O1"],
          title: "Se connaître avant de choisir",
          minutes: 5,
          goal: "Noter vos intérêts, vos points forts, votre façon d'apprendre et vos besoins d'argent pour juger chaque parcours.",
          text: [
            "Avant de comparer des écoles ou des emplois, regardez-vous vous-même. Le meilleur parcours correspond à ce que vous aimez, à ce que vous faites bien, à votre façon d'apprendre, et à ce dont vous avez besoin en ce moment.",
            "Posez-vous ces questions : Quelles matières ou activités me font oublier l'heure ? Est-ce que j'apprends mieux en lisant et en écrivant, ou en faisant des choses avec mes mains ? Ai-je besoin de gagner de l'argent bientôt, pour aider ma famille ou payer mes propres dépenses ? Est-ce que je veux rester près de chez moi ou partir ?",
            "Il y a cinq parcours principaux : une université de quatre ans, un community college, une école de métiers ou un apprentissage, l'armée, et le travail. Aucun n'est meilleur pour tout le monde. Un parcours parfait pour un ami ne vous conviendra peut-être pas.",
            "Un assistant d'IA peut vous aider à trouver des idées de métiers qui correspondent à vos réponses. Voyez ses idées comme une première liste, puis vérifiez les vrais faits avec un conseiller et sur des sites officiels."
          ],
          steps: ["Écrivez trois choses que vous aimez et trois choses que vous faites bien.", "Écrivez comment vous apprenez le mieux : en lisant, en écoutant ou en faisant.", "Écrivez vos besoins d'argent : devez-vous gagner de l'argent bientôt ?", "Écrivez où vous voulez vivre pendant les deux prochaines années.", "Listez les cinq parcours et entourez les deux ou trois qui vous conviennent le mieux pour l'instant."],
          words: [["Intérêt", "quelque chose que vous aimez faire ou apprendre."], ["Point fort", "quelque chose que vous faites bien."], ["Parcours", "le chemin que vous prenez après l'école vers un métier."]],
          slides: [
            { title: "Commencez par vous", bullets: ["Ce que vous aimez", "Ce que vous faites bien", "Comment vous apprenez et ce dont vous avez besoin"] },
            { title: "Questions à vous poser", bullets: ["Qu'est-ce qui me fait oublier l'heure ?", "Travail manuel, ou lecture et écriture ?", "Ai-je besoin de gagner de l'argent bientôt ?"] },
            { title: "Cinq parcours principaux", bullets: ["Université de quatre ans ou community college", "École de métiers ou apprentissage", "L'armée ou le travail"] },
            { title: "Utiliser l'IA pour trouver des idées", bullets: ["Demandez des métiers qui correspondent à vos réponses", "Voyez-le comme une première liste", "Vérifiez les faits avec un conseiller"] }
          ],
          tryIt: "Répondez sur papier aux quatre questions de cette leçon. Puis demandez à un assistant d'IA : Voici mes intérêts et mes points forts. Propose cinq métiers et la formation dont chacun a besoin. Entourez les deux ou trois parcours qui vous conviennent le mieux.",
          youCanNow: "décrire vos intérêts, vos points forts, votre façon d'apprendre et vos besoins d'argent, et choisir les parcours qui valent la peine d'être comparés.",
          quickCheck: [
            { objective: "O1", q: "Quels sont les cinq parcours principaux après le lycée dans ce cours ?", options: ["Seulement l'université et le travail", "L'université, une année de césure, les voyages, le sport et la musique", "Seulement des cours en ligne", "L'université de quatre ans, le community college, l'école de métiers ou l'apprentissage, l'armée, et le travail"], answer: 3, why: "Le cours compare ces cinq parcours, et beaucoup de gens les combinent au fil du temps." },
            { objective: "O1", q: "Vous devez gagner de l'argent bientôt pour aider votre famille. Comment cela joue-t-il sur votre choix ?", options: ["Cela ne compte pas", "Regardez de près les parcours où vous gagnez de l'argent en apprenant, comme un apprentissage ou un emploi avec formation", "Seule une université de quatre ans est possible", "Attendez quelques années avant de décider"], answer: 1, why: "Vos besoins d'argent font partie de ce qui rend un parcours adapté à vous." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Community college et université de quatre ans",
          minutes: 5,
          goal: "Comparer un community college et une université de quatre ans avec les cinq mêmes questions.",
          text: [
            "Un community college est un établissement public d'études supérieures de deux ans, près de chez vous. Il propose des certificats (souvent un an ou moins), des associate degrees (diplômes en environ deux ans), et des cours que vous pouvez transférer vers une université de quatre ans. Il coûte en général beaucoup moins cher et vous permet de vivre chez vous.",
            "Une université de quatre ans (college ou university) délivre des bachelor's degrees (licences en quatre ans). Certains métiers, comme l'enseignement, les soins infirmiers avec licence, l'ingénierie et la comptabilité, en demandent en général une. Les coûts varient beaucoup entre écoles publiques et privées, et entre vivre chez soi et vivre en résidence étudiante.",
            "Utilisez les cinq mêmes questions pour chaque option : Combien cela coûtera au total, après les aides ? Combien de temps cela prendra ? Puis-je gagner de l'argent pendant que j'apprends ? Quels emplois trouvent les diplômés, et combien gagnent-ils ? Que me faut-il pour être admis ?",
            "Pour beaucoup d'élèves, un chemin malin est de commencer au community college puis d'être transféré. Demandez au community college quelles universités de quatre ans acceptent ses crédits avant de vous inscrire aux cours."
          ],
          steps: ["Choisissez un community college et une université de quatre ans à comparer.", "Cherchez le coût total annuel de chaque école et son calculateur de prix net (net price calculator).", "Notez la durée des études, les emplois des diplômés et les conditions d'admission.", "Demandez à un conseiller quels sont les accords de transfert.", "Mettez les réponses côte à côte dans un tableau."],
          words: [["Certificat", "un programme court qui vous forme à un emploi précis."], ["Associate degree", "un diplôme qui prend en général environ deux ans."], ["Bachelor's degree", "un diplôme qui prend en général environ quatre ans."], ["Transfert", "faire passer vos crédits universitaires dans une autre école."], ["Prix net", "ce que coûtent les études une fois les bourses et subventions retirées."]],
          slides: [
            { title: "Le community college", bullets: ["Près de chez vous, moins cher", "Certificats et associate degrees", "Des crédits que vous pouvez transférer"] },
            { title: "L'université de quatre ans", bullets: ["Bachelor's degrees", "Nécessaire pour certains métiers", "Le coût varie beaucoup selon l'école"] },
            { title: "Cinq questions pour chaque option", bullets: ["Coût total après les aides ? Combien de temps ?", "Gagner de l'argent en apprenant ?", "Emplois et salaire ensuite ? Conditions d'admission ?"] },
            { title: "Commencer près de chez soi, puis se transférer", bullets: ["Fait économiser de l'argent à beaucoup d'élèves", "Vérifiez d'abord quelles écoles acceptent les crédits"] }
          ],
          tryIt: "Faites un tableau avec les cinq questions sur le côté et deux écoles en haut : un community college et une université de quatre ans. Remplissez ce que vous trouvez sur leurs sites et marquez ce qu'il vous reste à demander.",
          youCanNow: "comparer un community college et une université de quatre ans avec les cinq mêmes questions, et repérer un chemin qui commence près de chez vous puis passe par un transfert.",
          quickCheck: [
            { objective: "O2", q: "Que montre un calculateur de prix net ?", options: ["Une estimation de ce que coûte une école après les subventions et les bourses", "Le score de l'équipe de football de l'école", "Vos résultats aux tests", "Le nombre d'étudiants qui vivent en résidence"], answer: 0, why: "Le prix net est ce que coûtent les études après les subventions et les bourses." },
            { objective: "O2", q: "Vous comparez deux universités mais ne regardez que le prix affiché. Que vous manque-t-il ?", options: ["Rien ; seul le prix compte", "Les couleurs de l'école", "Les autres questions : la durée, gagner de l'argent en apprenant, les emplois et le salaire, et ce qu'il faut pour être admis", "Le nombre de bâtiments"], answer: 2, why: "Utilisez les cinq mêmes questions pour chaque option." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Métiers, apprentissage, armée et travail",
          minutes: 6,
          goal: "Comparer un apprentissage, l'armée et un emploi avec formation, avec les cinq mêmes questions.",
          text: [
            "Un Registered Apprenticeship (apprentissage officiel) est un emploi où vous êtes payé pendant que vous apprenez un métier qualifié auprès de travailleurs expérimentés, avec des cours à côté. Les métiers incluent électricien, plombier, charpentier et soudeur, et il existe des apprentissages dans la santé, l'informatique et d'autres domaines. Cherchez dans l'Apprenticeship Job Finder sur apprenticeship.gov.",
            "Les écoles de métiers enseignent un savoir-faire en quelques mois au lieu de plusieurs années, mais en général vous payez. Avant de signer, demandez combien d'élèves finissent, combien trouvent un emploi dans le domaine, et si l'école est accréditée. Méfiez-vous des vendeurs qui mettent la pression.",
            "L'armée offre une formation professionnelle, un salaire et des aides pour les études, en échange d'un engagement de plusieurs années. Vous passez un test appelé ASVAB, qui aide à décider à quels postes vous avez accès. Parlez à des recruteurs de plusieurs branches de l'armée, lisez tout avant de signer, et vérifiez le site officiel de chaque branche.",
            "Aller directement travailler est aussi un vrai parcours. Cherchez des employeurs qui vous forment, qui donnent des promotions en interne, ou qui aident à payer des cours plus tard. Utilisez les cinq mêmes questions pour comparer ces parcours avec les études."
          ],
          steps: ["Cherchez dans l'Apprenticeship Job Finder d'apprenticeship.gov des programmes près de chez vous.", "Pour toute école de métiers, demandez le taux de réussite, le taux d'emploi et l'accréditation.", "Si vous pensez à l'armée, parlez à plusieurs branches et lisez avant de signer.", "Pour les emplois, cherchez la formation, les promotions et l'aide pour payer des cours.", "Répondez aux cinq questions pour chaque option."],
          words: [["Registered Apprenticeship", "un emploi payé avec une formation organisée qui mène à un diplôme reconnu."], ["Métier", "un emploi qualifié qu'on apprend par une formation, comme électricien ou soudeur."], ["Accréditée", "vérifiée et approuvée par un organisme officiel qui contrôle les écoles."], ["ASVAB", "le test qui sert à voir à quels postes de l'armée vous avez accès."]],
          slides: [
            { title: "L'apprentissage", bullets: ["Un emploi payé pendant que vous apprenez un métier", "Électricien, plombier, santé, informatique et plus", "Cherchez sur apprenticeship.gov"] },
            { title: "Les écoles de métiers", bullets: ["Des mois, pas des années, mais en général payant", "Demandez : taux de réussite, d'emploi, accréditation", "Partez si on vous met la pression pour signer"] },
            { title: "L'armée", bullets: ["Formation, salaire et aides pour les études", "Plusieurs années d'engagement ; test ASVAB", "Parlez à plusieurs branches ; lisez avant de signer"] },
            { title: "Aller travailler", bullets: ["Cherchez la formation et les promotions", "Certains employeurs aident à payer des cours plus tard"] }
          ],
          sources: [
            { name: "Apprenticeship.gov : Apprenticeship Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "Apprenticeship.gov", url: "https://www.apprenticeship.gov/" }
          ],
          tryIt: "Trouvez sur apprenticeship.gov un apprentissage près de chez vous et un emploi qui offre une formation. Ajoutez-les au tableau de la leçon précédente et répondez aux cinq questions pour chacun.",
          youCanNow: "comparer l'apprentissage, les écoles de métiers, l'armée et le travail avec les cinq mêmes questions que pour les études.",
          quickCheck: [
            { objective: "O3", q: "Qu'est-ce qui différencie un Registered Apprenticeship d'une école de métiers ?", options: ["Vous êtes payé pendant que vous apprenez sur le terrain", "Il n'y a aucun cours", "Il coûte toujours plus cher", "Il n'enseigne que l'informatique"], answer: 0, why: "Dans un apprentissage, vous êtes payé pendant que vous apprenez auprès de travailleurs expérimentés." },
            { objective: "O3", q: "Un recruteur de l'armée veut que vous signiez aujourd'hui. Que faites-vous ?", options: ["Vous signez pour ne pas perdre la place", "Vous demandez à un ami de signer pour vous", "Vous ne lisez pas le contrat", "Vous parlez à plus d'une branche, vérifiez le site officiel et lisez avant de signer"], answer: 3, why: "Lisez tout et comparez les branches avant de vous engager pour plusieurs années de service." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Comparer vos parcours",
        questions: [
          { objective: "O1", q: "Que devez-vous regarder en premier avant de comparer des écoles ou des emplois ?", options: ["Ce que font vos amis", "Vos intérêts, vos points forts, votre façon d'apprendre et vos besoins", "L'école qui a la meilleure équipe de sport", "Seulement l'option la moins chère"], answer: 1, why: "Le meilleur parcours vous correspond, alors commencez par vous connaître." },
          { objective: "O2", q: "Qu'est-ce qui est en général vrai sur le community college ?", options: ["Il coûte beaucoup plus cher qu'une université privée", "Il ne propose que des diplômes en quatre ans", "On ne peut jamais être transféré", "Il est près de chez vous et coûte en général moins cher"], answer: 3, why: "Les community colleges sont locaux et en général beaucoup moins chers." },
          { objective: "O2", q: "Vous voulez commencer au community college et être transféré plus tard. Que devez-vous vérifier d'abord ?", options: ["Quelles universités de quatre ans acceptent ses crédits", "Le menu de la cafétéria", "La taille du parking", "Rien ; tous les crédits sont toujours transférés"], answer: 0, why: "Vérifier d'abord les accords de transfert évite de perdre vos crédits." },
          { objective: "O3", q: "Qu'est-ce qu'un Registered Apprenticeship ?", options: ["Un stage non payé", "Un emploi payé où vous apprenez un métier qualifié avec une formation", "Un jeu vidéo", "Un diplôme en quatre ans"], answer: 1, why: "Les apprentis sont payés pendant qu'ils apprennent auprès de travailleurs expérimentés." },
          { objective: "O3", q: "Un vendeur d'une école de métiers dit que vous devez signer aujourd'hui. Que faites-vous ?", options: ["Signer tout de suite", "Lui donner votre carte bancaire", "Demander le taux de réussite, le taux d'emploi et l'accréditation, et prendre le temps de décider", "Emprunter le plus possible"], answer: 2, why: "La pression pour signer aujourd'hui est un signal d'alerte ; les bonnes écoles vous donnent des faits et du temps." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Payer et faire un plan",
      lessons: [
        {
          objectives: ["O4"],
          title: "La FAFSA et l'aide financière",
          minutes: 6,
          goal: "Expliquer les types d'aide financière et vous préparer à remplir gratuitement la FAFSA sur studentaid.gov.",
          text: [
            "L'aide financière, c'est de l'argent pour aider à payer l'université, le community college et beaucoup d'écoles de métiers. Il en existe quatre types : les subventions (grants) et les bourses (scholarships), que vous ne remboursez pas, le work-study (un emploi à temps partiel), et les prêts (loans), que vous remboursez avec des intérêts.",
            "La FAFSA (Free Application for Federal Student Aid, demande gratuite d'aide fédérale pour les étudiants) est le formulaire qui ouvre la porte à l'aide fédérale, et beaucoup d'États et d'universités l'utilisent aussi pour leurs propres aides. Elle est gratuite et se remplit sur studentaid.gov. Vous aurez besoin d'un compte StudentAid.gov, et un parent ou une autre personne dont les informations sont sur le formulaire en aura peut-être besoin aussi.",
            "Une nouvelle FAFSA ouvre chaque année pour l'année scolaire suivante. Vérifiez sur studentaid.gov la date d'ouverture, et vérifiez les dates limites de votre État et des universités ; certaines aides s'épuisent tôt, alors déposez votre demande le plus tôt possible.",
            "Ne payez jamais personne pour remplir la FAFSA, et ne donnez jamais votre nom d'utilisateur et votre mot de passe StudentAid.gov (votre FSA ID) à qui que ce soit, même à un consultant. Votre conseiller d'orientation ou le service d'aide financière d'une université peut vous aider gratuitement."
          ],
          steps: ["Allez sur studentaid.gov (vérifiez bien l'adresse).", "Créez votre compte StudentAid.gov ; un parent ou une autre personne devra peut-être en créer un aussi.", "Réunissez ce que demande le formulaire, comme les informations fiscales.", "Cherchez la date d'ouverture de la FAFSA cette année et les dates limites de votre État et des universités.", "Remplissez-la tôt, ou avec l'aide gratuite d'un conseiller ; ne payez jamais une entreprise pour le faire."],
          words: [["FAFSA", "la Free Application for Federal Student Aid, demande gratuite d'aide fédérale pour les étudiants."], ["Subvention (grant)", "de l'argent pour les études que vous ne remboursez pas."], ["Work-study", "un emploi à temps partiel qui aide à payer les études."], ["Prêt", "de l'argent emprunté que vous devez rembourser, en général avec des intérêts."], ["FSA ID", "votre nom d'utilisateur et votre mot de passe StudentAid.gov ; ne le partagez jamais."]],
          slides: [
            { title: "Quatre types d'aide", bullets: ["Subventions et bourses : pas de remboursement", "Work-study : un emploi à temps partiel", "Prêts : vous les remboursez avec des intérêts"] },
            { title: "La FAFSA", bullets: ["Gratuite, sur studentaid.gov", "Ouvre la porte aux aides fédérales, des États et des universités", "Un parent ou une autre personne aura peut-être besoin d'un compte"] },
            { title: "Le calendrier", bullets: ["Une nouvelle FAFSA ouvre chaque année", "Vérifiez les dates sur studentaid.gov", "Déposez tôt : certaines aides s'épuisent"] },
            { title: "Restez en sécurité", bullets: ["Ne payez jamais personne pour la remplir", "Ne partagez jamais votre FSA ID", "Les conseillers aident gratuitement"] }
          ],
          sources: [
            { name: "Federal Student Aid : Demander une aide avec la FAFSA", url: "https://studentaid.gov/h/apply-for-aid/fafsa" },
            { name: "FTC : Comment éviter les arnaques aux bourses et à l'aide financière", url: "https://consumer.ftc.gov/articles/how-avoid-scholarship-and-financial-aid-scams" }
          ],
          tryIt: "Allez sur studentaid.gov et trouvez la date d'ouverture de la FAFSA cette année. Puis trouvez la date limite d'aide financière d'une école et de votre État. Notez les deux dates, et notez qui vous aidera à remplir le formulaire.",
          youCanNow: "expliquer les subventions, les bourses, le work-study et les prêts, et vous préparer à déposer la FAFSA gratuite en toute sécurité et à temps.",
          quickCheck: [
            { objective: "O4", q: "Quels types d'aide n'avez-vous pas à rembourser ?", options: ["Les prêts", "Les subventions et les bourses", "Les cartes de crédit", "Les prêts privés"], answer: 1, why: "Les subventions et les bourses sont de l'argent gratuit ; les prêts se remboursent avec des intérêts." },
            { objective: "O4", q: "Un site web qui finit par .com propose de remplir votre FAFSA contre des frais. Que faites-vous ?", options: ["Vous payez ; cela fait gagner du temps", "Vous lui donnez votre FSA ID", "Vous la remplissez gratuitement sur studentaid.gov ou avec l'aide d'un conseiller", "Vous ne remplissez pas la FAFSA"], answer: 2, why: "La FAFSA est gratuite sur studentaid.gov ; ne payez jamais pour la remplir et ne partagez jamais votre FSA ID." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Éviter les pièges de la dette et les arnaques",
          minutes: 5,
          goal: "Comparer les offres d'aide et repérer les signes de pièges de la dette et d'arnaques.",
          text: [
            "La dette n'est pas toujours mauvaise, mais trop de dette peut vous suivre pendant des années. N'empruntez que ce dont vous avez besoin après les subventions et les bourses. Le Consumer Financial Protection Bureau (CFPB, agence fédérale de protection des consommateurs) conseille d'utiliser les prêts étudiants fédéraux avant les prêts privés, parce que les prêts fédéraux ont en général plus de protections.",
            "Quand vous recevez des offres d'aide, vérifiez chaque ligne : est-ce une subvention, une bourse, du work-study ou un prêt ? Certaines offres mélangent tout, si bien que les prêts ressemblent à de l'argent gratuit. Comparez ce qui reste à payer dans chaque école, pas seulement le montant de l'offre.",
            "Les signes d'arnaque, selon la Federal Trade Commission (FTC, agence fédérale du commerce) : une bourse garantie ; des frais pour postuler ou pour réserver une bourse ; une demande de votre numéro de compte bancaire ou de carte ; l'annonce que vous avez gagné un concours auquel vous n'avez jamais participé ; et la pression pour payer tout de suite. Les vraies bourses ne vous font pas payer pour postuler.",
            "Méfiez-vous des écoles qui vous poussent à vous inscrire et à emprunter vite, qui promettent des emplois sans pouvoir le prouver, ou qui refusent de donner leurs chiffres de diplômés et d'emploi. Si vous êtes victime d'une arnaque, signalez-la sur ReportFraud.ftc.gov."
          ],
          steps: ["Classez chaque offre d'aide en subventions, bourses, work-study et prêts.", "Calculez ce qui reste à payer dans chaque école.", "Utilisez les prêts fédéraux avant les prêts privés, et n'empruntez que ce dont vous avez besoin.", "Comparez chaque offre de bourse avec les signes d'arnaque.", "Signalez les arnaques sur ReportFraud.ftc.gov."],
          words: [["Intérêts", "l'argent en plus que vous payez pour emprunter."], ["Prêt étudiant fédéral", "un prêt du gouvernement des États-Unis avec des protections fixées."], ["Prêt privé", "un prêt d'une banque ou d'une entreprise, souvent avec moins de protections."], ["Piège de la dette", "une dette qui grossit plus vite que vous ne pouvez la rembourser."]],
          slides: [
            { title: "Empruntez avec prudence", bullets: ["Seulement ce dont vous avez besoin après l'argent gratuit", "Les prêts fédéraux avant les prêts privés"] },
            { title: "Lisez chaque offre d'aide", bullets: ["Subvention, bourse, work-study ou prêt ?", "Les prêts peuvent ressembler à de l'argent gratuit", "Comparez ce qui reste à payer"] },
            { title: "Signes d'arnaque", bullets: ["Bourse garantie ou frais pour postuler", "Demande votre numéro de compte ou de carte", "Concours gagné sans y avoir participé ; payez maintenant"] },
            { title: "Écoles qui mettent la pression", bullets: ["Signer et emprunter vite", "Promesses d'emploi sans preuve", "Signalez les arnaques sur ReportFraud.ftc.gov"] }
          ],
          sources: [
            { name: "Consumer Financial Protection Bureau : Prêts étudiants", url: "https://www.consumerfinance.gov/consumer-tools/student-loans/" },
            { name: "FTC : Comment éviter les arnaques aux bourses et à l'aide financière", url: "https://consumer.ftc.gov/articles/how-avoid-scholarship-and-financial-aid-scams" }
          ],
          tryIt: "Regardez cet exemple d'offre : subvention de $3,000, bourse de $2,000, work-study de $2,500, prêt de $5,500, pour une école qui coûte $14,000 par an. Écrivez combien est de l'argent gratuit, combien doit être gagné ou remboursé, et combien il reste encore à payer. (Gratuit : $5,000. Gagné : $2,500. Prêt : $5,500. Reste à payer : $1,000.)",
          youCanNow: "lire une offre d'aide ligne par ligne, emprunter avec prudence, et repérer les arnaques à l'aide financière et les écoles qui mettent la pression.",
          quickCheck: [
            { objective: "O5", q: "Pourquoi lire chaque ligne d'une offre d'aide ?", options: ["Certaines offres mélangent des prêts pour qu'ils ressemblent à de l'argent gratuit", "Les offres d'aide sont toujours entièrement des subventions", "Pour trouver la mascotte de l'école", "Les lignes ne comptent pas"], answer: 0, why: "Classer les subventions, les bourses, le work-study et les prêts montre ce que vous paierez vraiment." },
            { objective: "O5", q: "Un e-mail dit que vous avez gagné une bourse à laquelle vous n'avez jamais postulé et demande votre numéro de compte bancaire. Qu'est-ce que c'est ?", options: ["Une vraie bourse", "Un signe d'arnaque ; ne donnez pas votre numéro de compte", "Un formulaire bancaire normal", "Une étape de la FAFSA"], answer: 1, why: "Les concours auxquels vous n'avez jamais participé et les demandes de numéro de compte sont des signes d'arnaque." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Faire votre plan sur deux ans",
          minutes: 6,
          goal: "Écrire un plan sur deux ans avec un parcours principal, une solution de secours, le financement et des étapes clés.",
          text: [
            "Un plan transforme votre choix en étapes. Deux ans, c'est assez long pour faire de vrais progrès et assez court pour voir clairement.",
            "Choisissez un parcours principal et une solution de secours. Par exemple : parcours principal, un apprentissage d'électricien ; solution de secours, un certificat d'un an au community college tout en travaillant. La solution de secours vous permet d'avancer si le parcours principal prend du retard.",
            "Découpez les deux ans en étapes de six mois, avec une ou deux étapes clés chacune : postuler, passer un test, finir un cours, économiser une certaine somme, trouver un premier emploi dans le domaine. Écrivez comment vous paierez chaque étape et qui vous aidera, comme un conseiller, un parent, un entraîneur, un mentor ou un patron.",
            "Relisez votre plan tous les quelques mois. Les plans changent, et c'est normal. Le mettre à jour fait partie de la compétence."
          ],
          steps: ["Écrivez votre parcours principal et une solution de secours.", "Recopiez votre comparaison en cinq questions pour les deux.", "Divisez deux ans en quatre étapes de six mois, chacune avec une ou deux étapes clés.", "Écrivez comment vous paierez chaque étape.", "Listez les personnes qui vous aideront.", "Fixez une date pour relire le plan tous les quelques mois."],
          words: [["Étape clé", "une étape claire qui montre un progrès, comme finir un cours."], ["Solution de secours", "un deuxième parcours que vous pouvez utiliser si le premier prend du retard."]],
          slides: [
            { title: "Pourquoi deux ans", bullets: ["Assez long pour de vrais progrès", "Assez court pour voir clairement"] },
            { title: "Parcours principal et solution de secours", bullets: ["Principal : le parcours que vous voulez le plus", "Secours : vous fait avancer en cas de retard"] },
            { title: "Des étapes de six mois", bullets: ["Une ou deux étapes clés chacune", "Comment vous paierez", "Qui vous aidera"] },
            { title: "Faites-le vivre", bullets: ["Relisez-le tous les quelques mois", "Changez-le quand la vie change"] }
          ],
          tryIt: "Tâche finale : écrivez votre plan d'une page sur deux ans avec un parcours principal et une solution de secours, votre comparaison en cinq questions d'au moins deux parcours, comment vous paierez, vos étapes clés tous les six mois et les personnes qui vous aideront. Montrez-le à un conseiller ou à un adulte de confiance.",
          youCanNow: "écrire un plan sur deux ans avec un parcours principal, une solution de secours, des étapes clés, un moyen de payer et des personnes pour vous aider, et le mettre à jour quand la vie change.",
          quickCheck: [
            { objective: "O6", q: "Qu'est-ce qu'une étape clé dans un plan sur deux ans ?", options: ["Un souhait au hasard", "Votre solution de secours", "Une liste de personnes", "Une étape claire avec une date, comme finir un cours d'ici juin"], answer: 3, why: "Les étapes clés découpent le plan en étapes de six mois que vous pouvez vérifier." },
            { objective: "O6", q: "Votre parcours principal prend six mois de retard. À quoi vous aide un bon plan ?", options: ["À abandonner", "À attendre sans rien faire", "À passer à votre solution de secours et à continuer d'avancer", "À recommencer sans plan"], answer: 2, why: "Une solution de secours vous fait avancer si le parcours principal prend du retard." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Payer et faire un plan",
        questions: [
          { objective: "O4", q: "Quel type d'aide devez-vous rembourser ?", options: ["Une subvention", "Une bourse", "Le salaire du work-study", "Un prêt"], answer: 3, why: "Les prêts doivent être remboursés avec des intérêts ; les subventions et les bourses non." },
          { objective: "O4", q: "Combien coûte le dépôt de la FAFSA sur studentaid.gov ?", options: ["Rien ; c'est gratuit", "$25", "$100", "Cela dépend de votre école"], answer: 0, why: "La FAFSA est gratuite ; ne payez jamais personne pour la déposer." },
          { objective: "O4", q: "Une entreprise propose de remplir votre FAFSA si vous lui donnez votre FSA ID. Que faites-vous ?", options: ["Le lui donner", "Refuser et demander l'aide gratuite d'un conseiller d'orientation", "Le lui envoyer par SMS", "Le publier en ligne"], answer: 1, why: "Ne partagez jamais votre FSA ID ; les conseillers aident gratuitement." },
          { objective: "O5", q: "Lequel est un signe d'arnaque à la bourse ?", options: ["Une candidature gratuite", "Une question de rédaction", "Une bourse garantie si vous payez des frais", "Une date limite"], answer: 2, why: "Les vraies bourses ne font pas payer de frais et ne garantissent pas l'obtention." },
          { objective: "O6", q: "Pourquoi un plan sur deux ans a-t-il besoin d'une solution de secours ?", options: ["Pour continuer à avancer si le parcours principal prend du retard", "Parce que la loi l'exige", "Pour impressionner vos amis", "Il n'en a pas besoin"], answer: 0, why: "Une solution de secours vous permet de progresser quand les plans changent." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Choisir les études, un métier ou le travail après le lycée",
    questions: [
      { objective: "O1", q: "Quel est le bon parcours pour tout le monde après le lycée ?", options: ["Une université de quatre ans", "Il n'y a pas un seul bon parcours ; cela dépend de vous", "L'armée", "Travailler tout de suite"], answer: 1, why: "Le meilleur parcours correspond à vos intérêts, vos points forts et vos besoins." },
      { objective: "O1", q: "Vous apprenez mieux en faisant des choses avec vos mains. Quel parcours pourrait bien vous convenir ?", options: ["Seulement des cours magistraux en ligne", "Rien ne convient", "Un apprentissage dans un métier", "Lire des manuels toute la journée"], answer: 2, why: "L'apprentissage enseigne des savoir-faire par le travail pratique." },
      { objective: "O1", q: "Comment utiliser un assistant d'IA pour choisir un parcours ?", options: ["Le laisser décider pour vous", "Croire chaque chiffre qu'il donne", "Ne jamais l'utiliser", "L'utiliser pour trouver des idées, puis vérifier les faits avec un conseiller et des sites officiels"], answer: 3, why: "L'IA peut proposer des idées, mais les faits doivent être vérifiés." },
      { objective: "O2", q: "Un associate degree prend en général environ :", options: ["Deux ans", "Six mois", "Huit ans", "Une semaine"], answer: 0, why: "Les associate degrees prennent en général environ deux ans." },
      { objective: "O2", q: "Qu'est-ce que le prix net ?", options: ["Le prix d'un ordinateur portable", "Ce que coûtent les études après les subventions et les bourses", "Le prix d'un seul cours", "Un impôt"], answer: 1, why: "Le prix net est le coût une fois l'aide gratuite retirée." },
      { objective: "O2", q: "Quels métiers demandent en général un bachelor's degree ?", options: ["Aucun", "Seulement le sport", "L'enseignement et l'ingénierie", "Seulement la vente"], answer: 2, why: "L'enseignement et l'ingénierie demandent en général un bachelor's degree." },
      { objective: "O2", q: "Laquelle est une des cinq questions à poser pour chaque parcours ?", options: ["Est-ce que mes amis y vont ?", "Le logo est-il joli ?", "Passe-t-il à la télé ?", "Combien de temps cela prendra-t-il ?"], answer: 3, why: "La durée est une des cinq questions de comparaison." },
      { objective: "O3", q: "Où pouvez-vous chercher des apprentissages ?", options: ["Dans l'Apprenticeship Job Finder d'apprenticeship.gov", "Dans une publication au hasard sur les réseaux sociaux", "Dans un SMS d'un inconnu", "Nulle part"], answer: 0, why: "Apprenticeship.gov a un outil officiel de recherche d'apprentissages." },
      { objective: "O3", q: "Avant de signer avec une école de métiers, demandez :", options: ["De quelle couleur est le bâtiment", "Combien d'élèves finissent et trouvent un emploi dans le domaine", "S'il y a une piscine", "Rien"], answer: 1, why: "Les taux de réussite et d'emploi montrent si l'école tient ses promesses." },
      { objective: "O3", q: "L'ASVAB est :", options: ["Un prêt étudiant", "Une école de métiers", "Un test qui aide à décider à quels postes de l'armée vous avez accès", "Un formulaire d'impôts"], answer: 2, why: "L'armée utilise l'ASVAB pour faire correspondre les gens aux postes." },
      { objective: "O3", q: "Si vous pensez à l'armée, une bonne étape est de :", options: ["Signer le premier papier que vous voyez", "Ne pas lire le contrat", "Ne parler qu'à un seul ami", "Parler à des recruteurs de plusieurs branches et lire avant de signer"], answer: 3, why: "Comparer les branches et lire attentivement vous protège." },
      { objective: "O3", q: "Aller directement travailler peut être un bon parcours quand l'employeur :", options: ["Offre une formation et aide à payer des cours", "Ne forme jamais personne", "Paie en cartes cadeaux", "N'a aucun poste d'avenir"], answer: 0, why: "La formation, les promotions et l'aide pour les cours font d'un emploi un vrai parcours." },
      { objective: "O4", q: "Quelle aide est un emploi à temps partiel qui aide à payer les études ?", options: ["Subvention", "Work-study", "Prêt", "Bourse"], answer: 1, why: "Le work-study vous paie pour un travail à temps partiel." },
      { objective: "O4", q: "Où remplit-on la FAFSA ?", options: ["fafsa-help.win", "Un site payant", "studentaid.gov", "L'application de votre banque"], answer: 2, why: "La FAFSA officielle et gratuite est sur studentaid.gov." },
      { objective: "O4", q: "Pourquoi déposer la FAFSA le plus tôt possible ?", options: ["Les formulaires en retard reçoivent plus d'argent", "Elle n'est ouverte qu'un jour", "Il n'y a aucune raison", "Certaines aides s'épuisent, et les États et universités ont des dates limites"], answer: 3, why: "Déposer tôt vous aide à obtenir des aides avant qu'elles ne s'épuisent." },
      { objective: "O5", q: "Quels prêts devez-vous en général utiliser en premier ?", options: ["Les prêts étudiants fédéraux", "Les prêts privés", "Les cartes de crédit", "Les prêts sur salaire (payday loans)"], answer: 0, why: "Les prêts fédéraux ont en général plus de protections que les prêts privés." },
      { objective: "O5", q: "Une offre d'aide indique un prêt de $5,500 avec des subventions. Le prêt, c'est :", options: ["De l'argent gratuit", "De l'argent que vous devez rembourser", "Une bourse", "Un cadeau"], answer: 1, why: "Les prêts doivent être remboursés, même quand ils sont listés à côté des subventions." },
      { objective: "O5", q: "Où signaler une arnaque à l'aide financière ?", options: ["À la cafétéria de l'école", "Dans un commentaire sur les réseaux sociaux", "Sur ReportFraud.ftc.gov", "Nulle part"], answer: 2, why: "La FTC reçoit les signalements d'arnaques sur ReportFraud.ftc.gov." },
      { objective: "O6", q: "Quelle est une bonne étape clé dans un plan sur deux ans ?", options: ["Devenir célèbre", "Se sentir mieux un jour", "Devenir riche", "Finir le premier cours du certificat d'ici juin"], answer: 3, why: "Une étape clé est une étape claire que l'on peut vérifier." },
      { objective: "O6", q: "À quelle fréquence devez-vous relire votre plan ?", options: ["Tous les quelques mois", "Jamais", "Une seule fois", "Seulement si vous échouez"], answer: 0, why: "Le relire régulièrement permet de le mettre à jour quand la vie change." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Test de départ : que savez-vous déjà ?",
    from: [
      0,
      1,
      4,
      6,
      7,
      9,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "« Atteint » ou « Dépasse » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      {
        name: "Parcours principal et solution de secours",
        objective: "O1",
        notYet: "Un seul parcours, ou le parcours n'a pas de lien avec les centres d'intérêt et les besoins de l'apprenant.",
        meets: "Un parcours principal et une solution de secours qui correspondent aux centres d'intérêt, aux points forts et aux besoins d'argent de l'apprenant.",
        exceeds: "Explique pourquoi la solution de secours le rapproche quand même de son objectif."
      },
      {
        name: "Comparaison avec les cinq questions",
        objective: "O2",
        notYet: "Moins de deux parcours comparés, ou des questions sautées.",
        meets: "Au moins deux parcours comparés sur le coût, la durée, le salaire pendant la formation, les emplois probables et ce qu'il faut pour être admis.",
        exceeds: "Utilise le prix net ou le salaire d'apprenti tiré de sources officielles et note d'où vient chaque réponse."
      },
      {
        name: "Comment payer",
        objective: "O4",
        notYet: "Pas de plan d'argent, ou il repose sur des prêts inconnus.",
        meets: "Dit comment chaque étape sera payée, avec la date de la FAFSA et les dates limites si une aide est nécessaire.",
        exceeds: "Montre les subventions et les bourses d'abord, les prêts en dernier, et le montant qui reste à payer."
      },
      {
        name: "À l'abri des arnaques",
        objective: "O5",
        notYet: "Prévoit de payer pour de l'aide avec la FAFSA ou pour une bourse garantie.",
        meets: "Pas d'aide payante pour la FAFSA, pas de FSA ID partagé, et aucune offre avec des signes d'arnaque.",
        exceeds: "Nomme où signaler une arnaque et à qui demander une aide gratuite."
      },
      {
        name: "Étapes clés et personnes qui aident",
        objective: "O6",
        notYet: "Pas d'étapes de six mois, ou aucune personne nommée pour aider.",
        meets: "Quatre étapes de six mois avec des étapes clés, les personnes qui aideront et une date pour revoir le plan.",
        exceeds: "A été montré à un conseiller ou à un adulte de confiance, avec ses remarques notées."
      }
    ]
  },
  evaluation: {
    results: [
      "Les apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Les apprenants qui remplissent la FAFSA à temps ou postulent à un apprentissage ou à un programme pendant l'année scolaire",
      "Les apprenants inscrits à l'université, dans un programme de métier, en apprentissage, dans l'armée ou dans un emploi avec formation six mois après le cours",
      "Les apprenants qui disent, dans le sondage de suivi, avoir évité une arnaque aux bourses ou à l'aide financière"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur de l'école ou de la bibliothèque avec Internet",
      "Les sites officiels : studentaid.gov, apprenticeship.gov et les calculateurs de prix net des écoles",
      "Du papier ou un document pour le tableau de comparaison et le plan sur deux ans",
      "Environ 60 minutes en tout : leçons, pratique, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Travaillez avec le conseiller scolaire et invitez-le à relire les plans des apprenants.",
      "Demandez aux apprenants de chercher en classe la date d'ouverture et les dates limites de la FAFSA de cette année, car elles changent chaque année.",
      "Ne demandez jamais aux apprenants de partager en groupe les revenus de leur famille, leur FSA ID ou leurs coordonnées bancaires ; entraînez-vous avec l'exemple d'offre d'aide du cours.",
      "Invitez des intervenants d'un community college, d'un programme d'apprentissage et d'un employeur local, pour que tous les parcours soient présentés de façon équitable.",
      "Évaluez le plan sur deux ans avec la grille et donnez un retour sur une ligne « Pas encore » à la fois."
    ]
  }
};
