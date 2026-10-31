"use strict";

// Koach Learn course (French translation of shared/youth-first-job.js). See scripts/koachlearn-courses/README.md, "Translations".

const SRC = {
  youthRules: { name: "Département du Travail des États-Unis : YouthRules!", url: "https://www.dol.gov/agencies/whd/youthrules" },
  fs43: { name: "Département du Travail des États-Unis : Fiche d'information 43, règles sur le travail des mineurs hors agriculture", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" },
  childLabor: { name: "Département du Travail des États-Unis : Travail des mineurs", url: "https://www.dol.gov/agencies/whd/child-labor" },
  stateChildLabor: { name: "Département du Travail des États-Unis : Lois des États sur le travail des mineurs", url: "https://www.dol.gov/agencies/whd/state/child-labor" },
  minWage: { name: "Département du Travail des États-Unis : Salaire minimum", url: "https://www.dol.gov/agencies/whd/minimum-wage" },
  stateMinWage: { name: "Département du Travail des États-Unis : Lois des États sur le salaire minimum", url: "https://www.dol.gov/agencies/whd/minimum-wage/state" },
  i9: { name: "USCIS : Formulaire I-9, vérification de l'autorisation de travail", url: "https://www.uscis.gov/i-9" },
  w4: { name: "IRS : À propos du formulaire W-4", url: "https://www.irs.gov/forms-pubs/about-form-w-4" },
  irs751: { name: "IRS : Sujet 751, taux de retenue de la Sécurité sociale et de Medicare", url: "https://www.irs.gov/taxtopics/tc751" },
  oshaYoung: { name: "OSHA : Jeunes travailleurs", url: "https://www.osha.gov/young-workers" },
  ftcJobScams: { name: "FTC : Arnaques à l'emploi", url: "https://consumer.ftc.gov/articles/job-scams" }
};

module.exports = {
  id: "youth-first-job-fr",
  lang: "fr",
  translationOf: "youth-first-job",
  category: "Workforce Development",
  name: "Votre premier emploi : permis de travail, fiches de paie et attentes des patrons",
  skills: "Vérifier les règles de travail pour les jeunes, Préparer ses papiers de travail, Lire une fiche de paie, Noter ses heures, Répondre aux attentes d'un patron, Parler en cas de danger",
  outcome: "commencer votre premier emploi en étant prêt : vérifier que le travail et les horaires sont légaux pour votre âge, réunir vos papiers de travail, lire et vérifier votre fiche de paie, agir comme un patron l'attend et parler si quelque chose est dangereux ou injuste.",
  about: [
    "Ce cours s'adresse aux jeunes qui se préparent à un premier emploi, par exemple dans un magasin, un restaurant, une colonie de vacances, un cinéma ou un bureau. Il aide aussi les parents, les mentors et les programmes d'emploi pour les jeunes.",
    "Vous allez vérifier les règles pour votre âge, préparer vos papiers, lire une fiche de paie et la comparer avec vos heures, découvrir ce que les patrons attendent pendant les premières semaines, et connaître vos droits et quoi faire si un travail est dangereux.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche « Essayez maintenant » sur papier ou sur téléphone. À la fin, vous préparez votre propre Fiche de départ pour votre premier emploi. Ce cours explique les règles ; il ne remplace pas le bureau du travail de votre État. Vérifiez toujours la page de votre propre État."
  ],
  finalTask: "Préparez une Fiche de départ pour votre premier emploi, sur une page, pour un emploi réel ou prévu : (1) votre âge, l'emploi et les heures que vous pouvez travailler selon les règles fédérales et celles de votre État, avec la page officielle consultée ; (2) une liste des papiers dont vous avez besoin (permis de travail si votre État l'exige, pièces d'identité pour le formulaire I-9, formulaire W-4) et où obtenir chacun ; (3) une vérification d'entraînement d'une fiche de paie : à partir d'une fiche inventée, écrivez le salaire brut, chaque retenue et le salaire net, et vérifiez le calcul ; (4) trois habitudes que vous montrerez à votre patron pendant vos deux premières semaines ; (5) votre plan si quelque chose est dangereux : à qui vous en parlez d'abord et le numéro de téléphone officiel à appeler.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des adolescents (environ 14 à 19 ans) et des jeunes adultes qui cherchent un premier emploi, y compris des élèves des programmes d'emploi d'été pour les jeunes, des jeunes placés en famille d'accueil (foster care) et des jeunes en formation professionnelle. Certains sont les premiers de leur famille à travailler dans une entreprise aux États-Unis.",
    startingPoint: "Ils savent utiliser un téléphone et remplir des formulaires simples. La plupart n'ont jamais vu de fiche de paie, de formulaire W-4 ni de permis de travail, et ne connaissent ni les règles sur le travail des mineurs ni leurs droits au travail.",
    gap: "On donne souvent aux jeunes travailleurs des horaires ou des tâches que la loi n'autorise pas à leur âge. Ils ne savent pas bien quels papiers il leur faut, ne peuvent pas dire si leur paie est juste et ont peur de parler de la sécurité. Connaître les règles et les habitudes attendues par les patrons les aide à être embauchés, à garder leur emploi et à rester en sécurité.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (environ fin du primaire et début du collège)",
      "Appareils : un téléphone ou un ordinateur de l'école ou de la bibliothèque ; toutes les tâches peuvent se faire avec papier et stylo",
      "Durée : leçons de 4 à 6 minutes",
      "Les règles changent selon l'État ; la loi fédérale fixe un minimum et c'est la règle la plus stricte qui s'applique, donc chaque leçon renvoie à la page officielle",
      "Vie privée : aucun vrai numéro de Sécurité sociale, aucune coordonnée bancaire et aucune vraie fiche de paie ne sont partagés en classe ; l'entraînement utilise des chiffres inventés"
    ],
    prerequisites: "Aucun. Les apprenants qui veulent de l'aide pour leur CV et leurs entretiens peuvent aussi suivre « CV, LinkedIn et entretiens »."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "À partir de votre âge et d'une offre d'emploi avec des horaires", action: "vérifier si les tâches et les horaires du travail sont autorisés pour votre âge selon les règles fédérales et celles de l'État", standard: "en nommant la page officielle utilisée" },
    { id: "O2", condition: "Pour un emploi dans votre État", action: "dresser la liste des papiers nécessaires pour commencer à travailler et de l'endroit où obtenir chacun", standard: "y compris un permis de travail si votre État l'exige, une pièce d'identité pour le formulaire I-9 et le formulaire W-4" },
    { id: "O3", condition: "À partir d'une fiche de paie et de votre propre relevé d'heures", action: "trouver le salaire brut, chaque retenue et le salaire net, et les comparer avec vos heures", standard: "avec un calcul juste au centime près" },
    { id: "O4", condition: "Face à une situation de travail pendant vos premières semaines", action: "choisir et décrire l'attitude professionnelle qu'un patron attend", standard: "en réussissant au moins 4 situations sur 5" },
    { id: "O5", condition: "Face à une situation dangereuse ou injuste au travail", action: "décrire les étapes pour en parler et la signaler", standard: "en nommant à qui vous en parlez d'abord et l'organisme officiel à appeler si rien n'est réglé" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Se préparer à travailler",
      lessons: [
        {
          title: "Quels emplois et quels horaires sont légaux à votre âge",
          objectives: ["O1"],
          minutes: 6,
          goal: "Vérifier si les tâches et les horaires d'un emploi sont autorisés pour votre âge.",
          text: [
            "Aux États-Unis, la loi fédérale sur le travail des mineurs est la Fair Labor Standards Act (FLSA), la loi sur les normes de travail équitables. Les États ont aussi leurs propres lois sur le travail des mineurs. Quand les deux sont différentes, c'est la règle la plus stricte qui s'applique.",
            "Selon les règles fédérales pour la plupart des emplois non agricoles : avant 14 ans, en général, vous ne pouvez pas travailler (avec quelques exceptions indiquées sur la page officielle). À 14 et 15 ans, vous pouvez travailler en dehors des heures de cours, mais seulement jusqu'à 3 heures un jour d'école (le vendredi aussi), 18 heures pendant une semaine d'école, 8 heures un jour sans école et 40 heures pendant une semaine sans école, et seulement entre 7 h et 19 h. Du 1er juin à la fête du Travail américaine (Labor Day), la limite du soir passe à 21 h.",
            "À 16 et 17 ans, la loi fédérale ne limite pas vos heures, mais vous ne pouvez pas faire les travaux que le Département du Travail classe comme dangereux. Exemples : conduire sur la voie publique dans le cadre du travail (il existe une exception limitée à 17 ans), conduire un chariot élévateur ou un autre engin de levage motorisé, et la plupart des machines motorisées pour travailler le bois. Votre État peut ajouter d'autres limites.",
            "Si vous avez moins de 18 ans et qu'un horaire ou une tâche semble aller contre ces règles, ce n'est pas vous qui êtes en faute : ces règles sont là pour vous protéger, et c'est l'employeur qui doit les respecter."
          ],
          steps: ["Écrivez votre âge, ainsi que les tâches et les horaires de l'emploi.", "Lisez les règles fédérales sur YouthRules ou sur la Fiche d'information 43 du Département du Travail.", "Ouvrez la page de votre État sur le travail des mineurs (le Département du Travail donne la liste de tous les États).", "Appliquez la règle la plus stricte. Entourez chaque heure ou tâche qui n'est pas autorisée."],
          words: [["FLSA", "la Fair Labor Standards Act, la loi fédérale sur le salaire minimum, les heures supplémentaires et le travail des mineurs."], ["Loi sur le travail des mineurs", "règles qui disent quels emplois et quels horaires sont permis aux travailleurs de moins de 18 ans."], ["Travail dangereux", "une tâche que le Département du Travail juge trop dangereuse pour les moins de 18 ans, comme conduire ou utiliser un chariot élévateur."], ["Semaine d'école", "une semaine où il y a cours au moins un jour."]],
          slides: [
            { title: "Deux séries de règles", bullets: ["La loi fédérale (la FLSA) et la loi de votre État", "Quand elles sont différentes, la règle la plus stricte s'applique"] },
            { title: "14 et 15 ans (fédéral)", bullets: ["3 heures un jour d'école, 18 heures par semaine d'école", "8 heures un jour sans école, 40 par semaine sans école", "De 7 h à 19 h ; jusqu'à 21 h du 1er juin à la fête du Travail"] },
            { title: "16 et 17 ans (fédéral)", bullets: ["Pas de limite fédérale d'heures", "Pas de travaux dangereux : conduite, chariots élévateurs, beaucoup de machines", "Votre État peut ajouter des limites"] },
            { title: "Comment vérifier", bullets: ["Écrivez votre âge, vos tâches et vos horaires", "Lisez YouthRules et la page de votre État", "Entourez tout ce qui n'est pas autorisé"] }
          ],
          sources: [SRC.youthRules, SRC.fs43, SRC.stateChildLabor],
          tryIt: "Un jeune de 15 ans se voit proposer un emploi dans une épicerie le mardi et le jeudi de 16 h à 20 h en octobre, et le samedi de 9 h à 15 h. Sur papier, vérifiez chaque créneau avec les règles fédérales. Ensuite, ouvrez la page de votre État sur le travail des mineurs et notez une règle qu'elle ajoute.",
          youCanNow: "vérifier si les tâches et les horaires d'un emploi sont légaux pour votre âge, à l'aide des règles fédérales et de la page de votre État.",
          quickCheck: [
            { objective: "O1", q: "Vous avez 15 ans. Nous sommes en octobre. Votre patron vous fait travailler jusqu'à 20 h un soir d'école. Qu'est-ce qui est vrai selon les règles fédérales ?", options: ["C'est permis, car c'est moins de 3 heures", "C'est trop tard : à 14 et 15 ans, on arrête à 19 h en dehors de l'été", "C'est permis si vos parents sont d'accord", "Seul l'État peut décider"], answer: 1, why: "En dehors de la période du 1er juin à la fête du Travail, les jeunes de 14 et 15 ans ne peuvent travailler qu'entre 7 h et 19 h." },
            { objective: "O1", q: "La règle de votre État est plus stricte que la règle fédérale. Laquelle suivez-vous ?", options: ["La règle fédérale, toujours", "Celle que choisit votre patron", "Aucune ; elles s'annulent", "La règle de l'État, plus stricte"], answer: 3, why: "Quand les lois fédérales et celles de l'État sur le travail des mineurs sont différentes, c'est la règle la plus stricte qui s'applique." }
          ]
        },
        {
          title: "Permis de travail et papiers du premier jour",
          objectives: ["O2"],
          minutes: 5,
          goal: "Dresser la liste des papiers nécessaires pour commencer votre emploi et de l'endroit où obtenir chacun.",
          text: [
            "La loi fédérale n'exige pas de permis de travail, mais beaucoup d'États en exigent un pour les moins de 18 ans. On l'appelle parfois « working papers » ou certificat d'emploi. Selon l'État, vous l'obtenez à votre école, au bureau du travail de l'État ou en ligne, et il faut parfois la signature d'un parent. Consultez la page de votre État pour savoir si vous en avez besoin et comment l'obtenir.",
            "Le premier jour ou avant, tout employeur aux États-Unis vous fait remplir le formulaire I-9. Il montre que vous avez le droit de travailler aux États-Unis. Vous présentez des pièces d'identité originales de la liste du formulaire, par exemple un passeport américain, ou une carte d'élève ou une carte d'identité de l'État avec une carte de Sécurité sociale ou un acte de naissance.",
            "Vous remplissez aussi le formulaire W-4. Il indique à votre employeur combien d'impôt fédéral sur le revenu retenir sur chaque paie. Votre État peut aussi avoir son propre formulaire d'impôt. Si une question vous semble difficile, demandez à votre patron ou à un parent.",
            "Protégez-vous : donnez votre numéro de Sécurité sociale seulement sur de vrais papiers d'embauche, une fois embauché. Un vrai employeur ne vous demande jamais de payer pour obtenir un emploi ni d'acheter des cartes-cadeaux. C'est une arnaque."
          ],
          steps: ["Consultez la page de votre État sur le travail des mineurs : avez-vous besoin d'un permis de travail ? Qui le délivre ?", "Trouvez vos pièces d'identité originales pour le formulaire I-9 (regardez la liste sur le formulaire).", "Lisez le formulaire W-4 avant votre premier jour pour savoir ce qu'il demande.", "Mettez des copies de vos papiers dans un dossier. Gardez les originaux en sécurité à la maison."],
          words: [["Permis de travail", "un document que certains États exigent avant qu'une personne de moins de 18 ans puisse travailler ; on l'appelle aussi certificat d'emploi."], ["Formulaire I-9", "le formulaire fédéral qui montre que vous avez le droit de travailler aux États-Unis ; vous présentez des pièces d'identité pour le remplir."], ["Formulaire W-4", "le formulaire fédéral qui indique à votre employeur combien d'impôt sur le revenu retenir sur votre paie."], ["Document original", "le vrai papier ou la vraie carte, pas une photo ni une copie."]],
          slides: [
            { title: "Permis de travail", bullets: ["Pas exigé par la loi fédérale", "Beaucoup d'États l'exigent avant 18 ans", "La page de votre État dit qui le délivre"] },
            { title: "Formulaire I-9", bullets: ["Montre que vous pouvez travailler aux États-Unis", "Apportez des pièces d'identité originales de la liste du formulaire"] },
            { title: "Formulaire W-4", bullets: ["Indique à votre employeur combien d'impôt retenir", "Votre État peut avoir son propre formulaire"] },
            { title: "Protégez-vous", bullets: ["Donnez votre numéro de Sécurité sociale seulement sur de vrais papiers d'embauche", "Ne payez jamais pour obtenir un emploi"] }
          ],
          sources: [SRC.fs43, SRC.stateChildLabor, SRC.i9, SRC.w4, SRC.ftcJobScams],
          tryIt: "Faites sur papier une liste « Papiers du premier jour ». Pour votre État, écrivez : ai-je besoin d'un permis de travail, et où l'obtenir ? Quelles deux pièces d'identité vais-je apporter pour le formulaire I-9 ? Qui peut m'aider avec le formulaire W-4 ?",
          youCanNow: "dresser la liste des papiers nécessaires pour commencer un emploi, savoir où obtenir chacun et comment protéger vos numéros personnels.",
          quickCheck: [
            { objective: "O2", q: "Quel formulaire montre à votre employeur que vous avez le droit de travailler aux États-Unis ?", options: ["Le formulaire I-9", "Le formulaire W-4", "Un bulletin scolaire", "Une fiche de paie"], answer: 0, why: "Le formulaire I-9 vérifie que vous avez le droit de travailler aux États-Unis ; vous présentez des pièces d'identité originales pour le remplir." },
            { objective: "O2", q: "Quelqu'un vous propose un emploi si vous payez d'abord $50 pour du « matériel de formation ». De quoi s'agit-il le plus probablement ?", options: ["Une dépense normale du premier jour", "Des frais du formulaire W-4", "Une arnaque : les vrais employeurs ne vous font pas payer pour obtenir un emploi", "Des frais de permis de travail de votre État"], answer: 2, why: "Vous demander de payer pour obtenir un emploi est un signe courant d'arnaque à l'emploi." }
          ]
        },
        {
          title: "Ce que les patrons attendent pendant vos premières semaines",
          objectives: ["O4"],
          minutes: 5,
          goal: "Choisir l'attitude professionnelle qu'un patron attend dans des situations courantes d'un premier emploi.",
          text: [
            "Pour un premier emploi, la plupart des patrons regardent moins l'expérience que les habitudes : arriver à l'heure, être prêt à travailler, suivre les consignes, être poli avec les clients et les collègues, et prévenir tôt quand il y a un imprévu.",
            "Être à l'heure, c'est être prêt à travailler au début de votre service, pas juste passer la porte. Si vous êtes malade ou en retard, prévenez votre patron le plus tôt possible, de la façon demandée sur votre lieu de travail (souvent un appel, pas seulement un message). Ne manquez jamais un service sans rien dire.",
            "Rangez votre téléphone pendant le travail, sauf si votre emploi le permet. Quand vous ne savez pas faire quelque chose, demandez. Répétez les consignes pour vérifier que vous avez bien compris. Accueillez les remarques avec calme et dites merci ; cela veut dire que votre patron veut que vous réussissiez.",
            "Lisez votre planning chaque semaine et demandez vos congés à l'avance. Être fiable, c'est ce qui vous donne plus d'heures, une bonne référence et votre prochain emploi."
          ],
          steps: ["Arrivez quelques minutes en avance, prêt à travailler.", "Si vous êtes en retard ou malade, prévenez votre patron le plus tôt possible, de la façon demandée.", "Rangez votre téléphone, sauf si l'emploi le permet.", "Demandez quand vous n'êtes pas sûr ; répétez les consignes.", "Accueillez les remarques avec calme et utilisez-les."],
          words: [["Service", "la période pendant laquelle vous êtes prévu au travail."], ["Prévenir de son absence", "dire à votre patron à l'avance que vous ne pourrez pas venir à un service."], ["Référence", "une personne, souvent un ancien patron, qui dit à un nouvel employeur quel genre de travailleur vous êtes."], ["Remarques", "des commentaires sur votre travail et sur la façon de faire mieux."]],
          slides: [
            { title: "Les habitudes que cherchent les patrons", bullets: ["À l'heure et prêt à travailler", "Suivre les consignes", "Poli avec les clients et les collègues"] },
            { title: "En retard ou malade ?", bullets: ["Prévenez votre patron le plus tôt possible", "Utilisez la façon demandée sur votre lieu de travail", "Ne manquez jamais un service sans rien dire"] },
            { title: "Au travail", bullets: ["Téléphone rangé, sauf si c'est permis", "Demandez en cas de doute ; répétez les consignes", "Accueillez les remarques avec calme"] },
            { title: "Pourquoi c'est important", bullets: ["Plus d'heures", "Une bonne référence", "Votre prochain emploi"] }
          ],
          tryIt: "Écrivez ce que vous diriez dans deux situations : (1) vous vous réveillez malade deux heures avant votre service ; (2) votre responsable vous dit que vous avez mal rangé un rayon. Dites les deux à voix haute, comme si vous parliez à votre patron.",
          youCanNow: "choisir et décrire ce qu'un patron attend quand vous êtes en retard ou malade, quand vous ne savez pas quoi faire ou quand vous recevez des remarques.",
          quickCheck: [
            { objective: "O4", q: "Votre service commence à 16 h. Que veut dire « être à l'heure » ?", options: ["Passer la porte à 16 h 00", "Arriver avant 16 h 15", "Être prêt à travailler à 16 h 00, donc arriver quelques minutes en avance", "N'importe quand avant votre pause"], answer: 2, why: "Être à l'heure, c'est être prêt à commencer le travail au début du service." },
            { objective: "O4", q: "Vous ne savez pas bien utiliser la caisse enregistreuse. Que faire de mieux ?", options: ["Deviner et espérer que ça marche", "Attendre qu'un client se plaigne", "Chercher sur votre téléphone pendant le service", "Demander à votre superviseur de vous montrer, puis répéter"], answer: 3, why: "Demander et répéter les consignes montre votre sérieux et évite les erreurs." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Se préparer à travailler",
        questions: [
          { objective: "O1", q: "Vous avez 14 ans. C'est une semaine d'école. Combien d'heures au total pouvez-vous travailler cette semaine selon les règles fédérales ?", options: ["18", "40", "Pas de limite", "8"], answer: 0, why: "Les règles fédérales permettent aux jeunes de 14 et 15 ans de travailler jusqu'à 18 heures pendant une semaine où il y a école." },
          { objective: "O1", q: "Vous avez 16 ans. Votre patron vous demande de conduire la camionnette du magasin pour livrer des commandes. Qu'est-ce qui est vrai selon les règles fédérales ?", options: ["Toute personne qui a le permis peut le faire", "Conduire sur la voie publique pour le travail est un travail dangereux interdit avant 17 ans, avec seulement une exception limitée à 17 ans", "C'est permis le week-end", "C'est permis si vous êtes mieux payé"], answer: 1, why: "Les règles fédérales sur les travaux dangereux interdisent de conduire pour le travail avant 17 ans et ne permettent qu'une conduite limitée à 17 ans." },
          { objective: "O2", q: "La loi fédérale exige-t-elle un permis de travail pour un jeune de 15 ans ?", options: ["Oui, toujours", "Seulement l'été", "Non, mais beaucoup d'États l'exigent, donc consultez la page de votre État", "Seulement pour les emplois en restauration"], answer: 2, why: "Les règles fédérales n'exigent pas de permis de travail, mais beaucoup d'États en exigent un." },
          { objective: "O2", q: "À quoi sert le formulaire W-4 ?", options: ["Il montre que vous avez le droit de travailler aux États-Unis", "Il vous donne un permis de travail", "Il liste vos heures", "Il indique à votre employeur combien d'impôt fédéral sur le revenu retenir"], answer: 3, why: "Le formulaire W-4 fixe le montant d'impôt fédéral sur le revenu retenu sur votre paie." },
          { objective: "O4", q: "Vous allez avoir 20 minutes de retard parce que le bus est tombé en panne. Que faites-vous ?", options: ["Prévenir votre patron tout de suite, de la façon demandée sur votre lieu de travail", "Ne rien dire et arriver en retard", "Manquer le service", "Le publier sur les réseaux sociaux"], answer: 0, why: "Prévenir votre patron tôt, de la façon demandée, montre que vous êtes fiable." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Votre paie, vos droits et votre sécurité",
      lessons: [
        {
          title: "Lire votre première fiche de paie",
          objectives: ["O3"],
          minutes: 6,
          goal: "Trouver le salaire brut, chaque retenue et le salaire net sur une fiche de paie.",
          text: [
            "Une fiche de paie (ou bulletin de paie) accompagne chaque chèque ou virement de salaire. Elle indique la période de paie, vos heures, votre taux horaire, votre salaire brut, chaque retenue et votre salaire net.",
            "Le salaire brut, c'est le nombre d'heures multiplié par votre taux horaire, avant toute retenue. Les retenues sont les montants enlevés. Les plus courantes : l'impôt fédéral sur le revenu (selon votre formulaire W-4), la Sécurité sociale (6.2 % de votre paie) et Medicare, l'assurance maladie fédérale (1.45 %), souvent regroupées sous le nom FICA, et dans beaucoup d'États un impôt de l'État sur le revenu. Le salaire net, ce que vous touchez vraiment, c'est ce qui reste.",
            "Pour s'entraîner seulement, avec des chiffres inventés : 20 heures à $12.00 de l'heure = $240.00 brut. Sécurité sociale : 240 x 0.062 = $14.88. Medicare : 240 x 0.0145 = $3.48. Impôt fédéral sur le revenu : $6.00. Impôt de l'État : $3.00. Les retenues font $27.36 au total, donc salaire net = $240.00 - $27.36 = $212.64.",
            "Le salaire minimum fédéral est de $7.25 de l'heure. Beaucoup d'États et de villes en fixent un plus élevé, et c'est le plus élevé qui s'applique à vous. Consultez la page de votre État pour savoir si votre taux est légal."
          ],
          steps: ["Trouvez les dates de la période de paie et vos heures.", "Vérifiez le salaire brut : heures x taux.", "Listez chaque retenue et additionnez-les.", "Vérifiez le salaire net : salaire brut moins le total des retenues.", "Si quelque chose ne correspond pas, demandez poliment au service de paie ou à votre patron."],
          words: [["Salaire brut", "votre paie avant toute retenue : heures x taux."], ["Retenue", "un montant enlevé de votre paie, comme les impôts."], ["Salaire net", "ce que vous touchez vraiment : salaire brut moins les retenues."], ["FICA", "les cotisations de Sécurité sociale et de Medicare retenues sur votre paie."], ["Période de paie", "les dates de travail couvertes par une paie."]],
          slides: [
            { title: "Ce qu'il y a sur une fiche de paie", bullets: ["Période de paie, heures et taux horaire", "Salaire brut et chaque retenue", "Salaire net (ce que vous touchez)"] },
            { title: "Retenues courantes", bullets: ["Impôt fédéral sur le revenu (selon votre W-4)", "Sécurité sociale 6.2 % et Medicare 1.45 % (FICA)", "Impôt de l'État sur le revenu dans beaucoup d'États"] },
            { title: "Entraînement : chiffres inventés", bullets: ["20 heures x $12.00 = $240.00 brut", "Retenues : $14.88 + $3.48 + $6.00 + $3.00 = $27.36", "Salaire net : $240.00 - $27.36 = $212.64"] },
            { title: "Salaire minimum", bullets: ["Fédéral : $7.25 de l'heure", "Beaucoup d'États et de villes paient plus ; le plus élevé s'applique"] }
          ],
          sources: [SRC.irs751, SRC.minWage, SRC.stateMinWage, SRC.w4],
          tryIt: "Pour s'entraîner seulement : vous avez travaillé 15 heures à $13.00 de l'heure. L'impôt fédéral sur le revenu est de $5.00 et l'impôt de l'État de $2.00. Sur papier, calculez le salaire brut, la Sécurité sociale, Medicare, le total des retenues et le salaire net. (Réponse : $195.00 brut, $12.09, $2.83, $21.92 au total, $173.08 net.)",
          youCanNow: "lire une fiche de paie, trouver le salaire brut, chaque retenue et le salaire net, et vérifier le calcul.",
          quickCheck: [
            { objective: "O3", q: "Vous avez travaillé 10 heures à $14.00 de l'heure. Quel est votre salaire brut ?", options: ["$14.00", "$124.00", "$104.00", "$140.00"], answer: 3, why: "Le salaire brut, c'est les heures multipliées par le taux : 10 x $14.00 = $140.00." },
            { objective: "O3", q: "Le salaire brut est de $300.00 et les retenues font $35.00 au total. Quel est le salaire net ?", options: ["$265.00", "$335.00", "$300.00", "$35.00"], answer: 0, why: "Le salaire net, c'est le salaire brut moins les retenues : $300.00 - $35.00 = $265.00." }
          ]
        },
        {
          title: "Noter vos heures pour être bien payé",
          objectives: ["O3"],
          minutes: 5,
          goal: "Tenir votre propre relevé d'heures et le comparer avec votre fiche de paie.",
          text: [
            "Il y a parfois des erreurs de paie. La meilleure protection, c'est votre propre relevé. À chaque service, notez la date, l'heure de début, le début et la fin de votre pause, et l'heure de fin. Le Département du Travail propose une application gratuite pour noter ses heures, ou vous pouvez utiliser un carnet ou les notes de votre téléphone.",
            "Additionnez les heures de la période de paie. N'oubliez pas d'enlever les pauses repas non payées. Puis comparez votre total avec les heures sur votre fiche de paie.",
            "Si les chiffres ne correspondent pas, ne paniquez pas et n'accusez personne. Apportez votre relevé à votre patron ou au service de paie et demandez : « D'après mes notes, j'ai fait 22 heures, et ma fiche de paie en indique 19. Pouvez-vous m'aider à vérifier ? » La plupart des erreurs se règlent ainsi.",
            "Si vous n'êtes pas payé pour des heures travaillées et que rien n'est réglé, la Wage and Hour Division (Division des salaires et des heures) du Département du Travail reçoit les plaintes. C'est gratuit et confidentiel."
          ],
          steps: ["À chaque service : notez la date, l'heure de début, les heures de pause et l'heure de fin.", "À la fin de la période de paie, additionnez vos heures (moins les pauses non payées).", "Comparez votre total avec les heures sur votre fiche de paie.", "S'il y a une différence, apportez votre relevé et demandez poliment de vérifier.", "Si rien n'est réglé, contactez la Wage and Hour Division."],
          words: [["Relevé d'heures", "une liste des jours et des heures où vous avez travaillé."], ["Pause non payée", "une pause repas pendant laquelle vous ne travaillez pas du tout et n'êtes pas payé."], ["Service de paie", "la personne ou l'équipe qui paie les travailleurs."], ["Wage and Hour Division", "la partie du Département du Travail des États-Unis qui fait respecter les règles sur la paie et le travail des mineurs."]],
          slides: [
            { title: "Tenez votre propre relevé", bullets: ["Date, heures de début, de pause et de fin", "Carnet, notes du téléphone ou l'application gratuite du DOL"] },
            { title: "Comparez à chaque période de paie", bullets: ["Additionnez vos heures, moins les pauses non payées", "Comparez avec la fiche de paie"] },
            { title: "Si ça ne correspond pas", bullets: ["Apportez votre relevé et demandez poliment", "« Pouvez-vous m'aider à vérifier ? »"] },
            { title: "Toujours pas réglé ?", bullets: ["Wage and Hour Division : gratuit et confidentiel", "1-866-487-9243 (1-866-4-US-WAGE)"] }
          ],
          sources: [SRC.youthRules, SRC.childLabor],
          tryIt: "Pour s'entraîner seulement : lundi de 15 h 30 à 19 h, mercredi de 15 h 30 à 19 h, samedi de 9 h à 15 h avec une pause déjeuner non payée de 30 minutes. Additionnez les heures. Votre fiche de paie indique 11 heures. Écrivez ce que vous diriez à votre patron. (Réponse : 3.5 + 3.5 + 5.5 = 12.5 heures.)",
          youCanNow: "tenir un relevé de vos heures, le comparer avec votre fiche de paie et demander poliment de corriger une erreur.",
          quickCheck: [
            { objective: "O3", q: "Vous avez travaillé de 9 h à 14 h avec une pause déjeuner non payée de 30 minutes. Combien d'heures payées ?", options: ["5", "5.5", "4.5", "4"], answer: 2, why: "De 9 h à 14 h, cela fait 5 heures ; moins 30 minutes de pause non payée, cela fait 4.5 heures." },
            { objective: "O3", q: "Vos notes indiquent 22 heures, mais votre fiche de paie en indique 19. Que faites-vous d'abord ?", options: ["Démissionner tout de suite", "Apporter votre relevé à votre patron ou au service de paie et demander poliment de vérifier", "Ne rien dire", "Publier la fiche de paie sur les réseaux sociaux"], answer: 1, why: "La plupart des erreurs de paie se règlent en montrant votre relevé et en demandant poliment." }
          ]
        },
        {
          title: "Vos droits et votre sécurité : oser parler",
          objectives: ["O5"],
          minutes: 6,
          goal: "Décrire les étapes pour parler et signaler une situation dangereuse ou injuste.",
          text: [
            "Tout travailleur, adolescents compris, a des droits. Votre employeur doit vous offrir un lieu de travail sûr et vous payer au moins le salaire minimum légal pour chaque heure travaillée. Vous devez être formé avant de faire une tâche, et vous pouvez poser des questions. Votre employeur ne peut pas vous punir parce que vous posez des questions sur vos droits ou que vous portez plainte.",
            "Les jeunes travailleurs se blessent plus souvent quand ils sont nouveaux, pressés ou pas formés. Signes d'alerte : on vous demande d'utiliser une machine sur laquelle vous n'avez pas été formé, une tâche interdite à votre âge, pas d'équipement de protection, des sols glissants, de l'huile chaude, ou on vous laisse seul tard le soir.",
            "Les étapes pour parler : arrêtez-vous si vous êtes en danger. Expliquez calmement le problème à votre superviseur. S'il ne règle rien, parlez-en à un autre responsable et à un parent, un enseignant ou un membre du programme d'emploi. Si rien n'est toujours réglé, contactez le gouvernement : l'OSHA (1-800-321-6742) pour la sécurité, ou la Wage and Hour Division (1-866-487-9243) pour les problèmes de paie, d'horaires ou de travail des mineurs.",
            "Si quelqu'un est gravement blessé, appelez d'abord le 911 (ou le numéro d'urgence de votre région)."
          ],
          steps: ["Si vous êtes en danger, arrêtez-vous et éloignez-vous.", "Expliquez calmement à votre superviseur ce qui ne va pas.", "Si rien n'est réglé, parlez-en à un autre responsable et à un adulte de confiance.", "Toujours pas réglé : appelez l'OSHA pour la sécurité ou la Wage and Hour Division pour la paie, les horaires ou le travail des mineurs.", "Urgence : appelez d'abord le 911."],
          words: [["OSHA", "l'Occupational Safety and Health Administration, l'agence fédérale pour la sécurité et la santé au travail."], ["Représailles", "punir un travailleur parce qu'il a parlé ou porté plainte ; c'est interdit."], ["Équipement de protection", "des objets comme des gants, des lunettes de protection ou des chaussures antidérapantes qui vous protègent."]],
          slides: [
            { title: "Vos droits", bullets: ["Un lieu de travail sûr", "Au moins le salaire minimum légal pour chaque heure", "Formation, questions, et aucune punition pour avoir parlé"] },
            { title: "Signes d'alerte", bullets: ["Une machine sur laquelle vous n'avez pas été formé", "Une tâche interdite à votre âge", "Pas d'équipement de protection, huile chaude, sols glissants"] },
            { title: "Parler par étapes", bullets: ["Arrêtez-vous en cas de danger", "Parlez à votre superviseur, puis à un autre responsable et à un adulte de confiance", "Pas réglé : OSHA ou Wage and Hour Division"] },
            { title: "Numéros à connaître", bullets: ["Urgence : d'abord le 911", "OSHA : 1-800-321-6742", "Wage and Hour : 1-866-487-9243"] }
          ],
          sources: [SRC.oshaYoung, SRC.youthRules, SRC.fs43],
          tryIt: "Vous avez 16 ans. Votre responsable vous dit d'utiliser la trancheuse à viande d'une charcuterie, et vous n'avez reçu aucune formation. Écrivez les mots que vous diriez à votre responsable, et à qui vous en parleriez ensuite s'il insiste. Enregistrez les numéros de l'OSHA et de la Wage and Hour Division dans votre téléphone.",
          youCanNow: "repérer une situation dangereuse ou injuste et en parler par étapes : votre superviseur, un adulte de confiance, puis l'organisme officiel.",
          quickCheck: [
            { objective: "O5", q: "Votre patron vous dit de nettoyer une friteuse pleine d'huile chaude sans vous donner de gants ni de formation. Que faites-vous d'abord ?", options: ["Dire calmement à votre superviseur qu'il vous faut une formation et un équipement avant de le faire", "Le faire vite pour ne pas avoir d'ennuis", "Appeler le 911", "Démissionner sans dire pourquoi"], answer: 0, why: "Parler d'abord à votre superviseur est la première étape habituelle quand personne n'est encore blessé." },
            { objective: "O5", q: "Vous avez parlé d'un problème de paie à deux responsables et rien n'a changé. Qui pouvez-vous contacter ?", options: ["Personne ; vous devez l'accepter", "Un inconnu sur internet", "La Wage and Hour Division du Département du Travail des États-Unis", "Seulement l'entraîneur sportif de votre école"], answer: 2, why: "La Wage and Hour Division reçoit gratuitement et en toute confidentialité les plaintes sur la paie, les horaires et le travail des mineurs." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Votre paie, vos droits et votre sécurité",
        questions: [
          { objective: "O3", q: "Sur une fiche de paie, qu'est-ce que le salaire net ?", options: ["La paie avant impôts", "Votre taux horaire", "Ce que vous touchez après les retenues", "Le total des impôts retenus"], answer: 2, why: "Le salaire net, c'est ce qui reste une fois toutes les retenues enlevées du salaire brut." },
          { objective: "O3", q: "Pour s'entraîner seulement : le salaire brut est de $200.00. Quelle est la retenue de Sécurité sociale à 6.2 % ?", options: ["$6.20", "$2.90", "$15.30", "$12.40"], answer: 3, why: "$200.00 x 0.062 = $12.40." },
          { objective: "O3", q: "Pourquoi tenir votre propre relevé d'heures ?", options: ["Pour le comparer avec votre fiche de paie et repérer les erreurs", "Parce que la loi dit que vous seul pouvez noter les heures", "Pour pouvoir sauter vos pauses", "Pour ne pas avoir besoin de fiche de paie"], answer: 0, why: "Votre propre relevé vous permet de vérifier que vous avez été payé pour chaque heure travaillée." },
          { objective: "O5", q: "Un collègue est gravement brûlé. Que faites-vous d'abord ?", options: ["Finir votre tâche", "Appeler le 911 (ou le numéro d'urgence de votre région)", "Appeler l'OSHA", "Envoyer un message à vos amis"], answer: 1, why: "En cas d'urgence, appelez d'abord le 911 ; les signalements aux organismes viennent ensuite." },
          { objective: "O5", q: "Votre employeur peut-il vous punir parce que vous avez porté plainte pour la sécurité ou la paie ?", options: ["Oui, si vous avez moins de 18 ans", "Oui, si la plainte est fausse", "Non, les représailles contre ceux qui parlent sont interdites", "Seulement pendant votre premier mois"], answer: 2, why: "La loi protège les travailleurs contre les représailles quand ils posent des questions sur leurs droits ou portent plainte." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Votre premier emploi : permis de travail, fiches de paie et attentes des patrons",
    questions: [
      { objective: "O1", q: "Vous avez 15 ans et c'est les vacances d'été, en juillet. Jusqu'à quelle heure pouvez-vous travailler selon les règles fédérales ?", options: ["19 h", "21 h", "23 h", "À n'importe quelle heure"], answer: 1, why: "Du 1er juin à la fête du Travail, la limite du soir pour les jeunes de 14 et 15 ans passe à 21 h." },
      { objective: "O2", q: "Quels papiers tout nouvel employé remplit-il, quel que soit son âge ?", options: ["Le formulaire I-9 et le formulaire W-4", "Un permis de travail et un bulletin scolaire", "Une fiche de paie et un relevé d'heures", "Un examen du permis de conduire"], answer: 0, why: "Tout nouvel employé remplit le formulaire I-9 et le formulaire W-4 ; les permis de travail dépendent de l'âge et de l'État." },
      { objective: "O3", q: "Pour s'entraîner seulement : 18 heures à $12.50 de l'heure. Quel est le salaire brut ?", options: ["$215.00", "$250.00", "$225.00", "$180.00"], answer: 2, why: "18 x $12.50 = $225.00." },
      { objective: "O4", q: "Vous vous réveillez malade deux heures avant votre service. Quelle est l'attitude professionnelle ?", options: ["Y aller malade sans rien dire", "Manquer le service et expliquer la semaine suivante", "Demander à un ami d'y aller à votre place sans prévenir personne", "Prévenir votre patron tout de suite, de la façon demandée sur votre lieu de travail"], answer: 3, why: "Prévenir votre patron tôt, de la façon demandée, lui permet de vous remplacer et montre que vous êtes fiable." },
      { objective: "O5", q: "Quel organisme traite les plaintes sur la sécurité au travail ?", options: ["L'IRS", "L'OSHA", "La poste", "Votre district scolaire"], answer: 1, why: "L'OSHA est l'agence fédérale pour la sécurité et la santé au travail." },
      { objective: "O1", q: "Vous avez 14 ans. Un jour d'école, combien d'heures pouvez-vous travailler selon les règles fédérales ?", options: ["3", "5", "8", "Pas de limite"], answer: 0, why: "Les jeunes de 14 et 15 ans peuvent travailler jusqu'à 3 heures un jour d'école, le vendredi compris." },
      { objective: "O1", q: "Vous avez 17 ans. Quelle tâche vous est interdite selon les règles fédérales sur les travaux dangereux ?", options: ["Mettre les courses en sac", "Répondre au téléphone", "Remplir les rayons à la main", "Conduire un chariot élévateur"], answer: 3, why: "Utiliser un engin de levage motorisé comme un chariot élévateur est un travail dangereux interdit avant 18 ans." },
      { objective: "O2", q: "Où savoir si votre État exige un permis de travail ?", options: ["Sur la page officielle de votre État sur le travail des mineurs (le Département du Travail en donne la liste)", "Dans une publication sur les réseaux sociaux", "Sur n'importe quel site d'emploi", "Au dos d'une fiche de paie"], answer: 0, why: "Le permis de travail est une règle de l'État, donc c'est sur la page officielle de l'État qu'il faut vérifier." },
      { objective: "O2", q: "Un nouveau patron vous écrit avant tout entretien pour vous demander vos identifiants bancaires « pour mettre en place la paie ». De quoi s'agit-il ?", options: ["C'est normal pour un virement de salaire", "Cela fait partie du formulaire W-4", "Un signe d'arnaque ; ne partagez jamais vos identifiants", "Cela fait partie du formulaire I-9"], answer: 2, why: "Un vrai employeur n'a jamais besoin de vos identifiants bancaires ; les demander est un signe d'arnaque." },
      { objective: "O3", q: "Quelle retenue dépend de ce que vous avez écrit sur le formulaire W-4 ?", options: ["Medicare", "La Sécurité sociale", "Votre taux horaire", "L'impôt fédéral sur le revenu"], answer: 3, why: "Le formulaire W-4 indique à votre employeur combien d'impôt fédéral sur le revenu retenir." },
      { objective: "O3", q: "Pour s'entraîner seulement : salaire brut $240.00, retenues $27.36. Quel est le salaire net ?", options: ["$212.64", "$267.36", "$222.64", "$213.64"], answer: 0, why: "$240.00 - $27.36 = $212.64." },
      { objective: "O3", q: "Le salaire minimum fédéral est de $7.25, mais celui de votre ville est plus élevé. Lequel s'applique à vous ?", options: ["Le fédéral, $7.25", "Celui que choisit votre patron", "Le plus élevé", "Le plus bas"], answer: 2, why: "Quand le salaire minimum de l'État ou de la ville est plus élevé que le fédéral, c'est le plus élevé qui s'applique." },
      { objective: "O4", q: "Votre responsable dit que vous avez mal rangé un rayon. Quelle est la meilleure réponse ?", options: ["Soutenir que c'est bien fait", "Dire « Merci de me le dire. Pouvez-vous me montrer la bonne façon de faire ? »", "L'ignorer", "Vous plaindre aux clients"], answer: 1, why: "Accueillir les remarques avec calme et demander comment corriger, c'est ce que les patrons attendent." },
      { objective: "O4", q: "Quand pouvez-vous utiliser votre téléphone pendant votre service ?", options: ["Quand il y a peu de travail", "Seulement quand l'emploi le permet", "Quand les clients ne regardent pas", "N'importe quand si vous continuez à travailler"], answer: 1, why: "Rangez votre téléphone pendant le travail, sauf si votre lieu de travail le permet." },
      { objective: "O4", q: "Vous avez besoin d'un samedi de congé pour un événement familial le mois prochain. Que faites-vous ?", options: ["Le demander à votre patron à l'avance, de la façon demandée sur votre lieu de travail", "Simplement ne pas venir", "Le dire seulement à un collègue", "Le demander la veille au soir"], answer: 0, why: "Demander un congé à l'avance laisse à votre patron le temps de s'organiser." },
      { objective: "O5", q: "Vous avez 16 ans et on vous dit d'utiliser une trancheuse à viande. Que devez-vous savoir ?", options: ["C'est permis après un essai", "C'est permis si aucun client ne voit", "C'est votre choix", "Les trancheuses à viande motorisées sont un travail dangereux interdit avant 18 ans, donc parlez-en"], answer: 3, why: "Les règles fédérales sur les travaux dangereux interdisent aux moins de 18 ans d'utiliser des trancheuses à viande motorisées." },
      { objective: "O5", q: "Quelle est la première étape habituelle quand quelque chose est dangereux au travail mais que personne n'est blessé ?", options: ["Appeler les journalistes", "Le publier sur internet", "En parler calmement à votre superviseur", "Démissionner sans rien dire"], answer: 2, why: "En parler à votre superviseur lui donne la possibilité de régler le problème ; sinon, adressez-vous plus haut." },
      { objective: "O1", q: "Vous avez 16 ans. Combien d'heures par semaine pouvez-vous travailler selon la loi fédérale ?", options: ["18", "40", "Pas de limite fédérale, mais vérifiez votre État", "8"], answer: 2, why: "La loi fédérale ne limite pas les heures à 16 et 17 ans, mais votre État peut le faire." },
      { objective: "O4", q: "À quoi un patron tient-il le plus, en général, chez un jeune qui a son premier emploi ?", options: ["Des vêtements chers", "Des années d'expérience", "Connaître le propriétaire", "Arriver à l'heure et être fiable"], answer: 3, why: "Pour un premier emploi, les patrons cherchent surtout des habitudes fiables, comme arriver à l'heure et suivre les consignes." },
      { objective: "O5", q: "Votre paie est fausse et deux responsables n'ont rien réglé. Quel numéro pouvez-vous appeler ?", options: ["La Wage and Hour Division, 1-866-487-9243", "Seulement l'OSHA", "Le 911", "L'IRS"], answer: 0, why: "La Wage and Hour Division traite les plaintes sur la paie, les horaires et le travail des mineurs." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 1, 2, 3, 4, 6, 9, 15] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Horaires et tâches vérifiés", objective: "O1", notYet: "Les règles pour l'âge ne sont pas écrites, ou un horaire ou une tâche contraire aux règles n'est pas repéré.", meets: "Chaque horaire et chaque tâche sont vérifiés avec les règles fédérales et celles de l'État, avec la page officielle nommée.", exceeds: "Signale aussi une règle de l'État plus stricte que la règle fédérale et la façon dont elle change le planning." },
      { name: "Papiers prêts", objective: "O2", notYet: "Il manque à la liste le formulaire I-9, le formulaire W-4 ou la question du permis de travail de l'État.", meets: "Liste le permis de travail (si nécessaire), la pièce d'identité pour le formulaire I-9 et le formulaire W-4, et où obtenir chacun.", exceeds: "Indique aussi comment protéger ses numéros personnels et un signe d'arnaque à l'emploi." },
      { name: "Fiche de paie vérifiée", objective: "O3", notYet: "Le salaire brut, les retenues ou le salaire net manquent, ou le calcul est faux.", meets: "Le salaire brut, chaque retenue et le salaire net sont écrits et le calcul est juste au centime près.", exceeds: "Compare aussi les heures de la fiche de paie avec un relevé d'heures écrit et dit quoi faire en cas de différence." },
      { name: "Attentes du patron", objective: "O4", notYet: "Les habitudes sont vagues, comme « être sage ».", meets: "Trois habitudes claires, comme arriver en avance, prévenir tôt d'une absence et demander en cas de doute.", exceeds: "Chaque habitude est accompagnée d'une courte phrase de ce que l'apprenant dirait." },
      { name: "Plan de sécurité", objective: "O5", notYet: "Pas de plan, ou le plan oublie d'en parler à un superviseur ou de nommer un organisme.", meets: "Nomme à qui en parler d'abord, un adulte de confiance, et l'OSHA ou la Wage and Hour Division avec le numéro de téléphone.", exceeds: "Dit aussi d'appeler d'abord le 911 en cas d'urgence et liste des signes d'alerte pour son propre emploi." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui commencent un emploi, un stage ou un emploi d'été pour les jeunes dans les 90 jours (enquête de suivi ou dossiers du programme)",
      "Apprenants toujours dans cet emploi après 60 jours, et la part qui obtient une bonne référence",
      "Apprenants qui disent avoir comparé au moins une fois une fiche de paie avec leurs propres heures (suivi à 30 jours)",
      "Les programmes pour les jeunes et les employeurs signalent moins de problèmes d'horaires ou de tâches contraires aux règles sur le travail des mineurs"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec internet pour ouvrir les pages du Département du Travail et de l'État, ou des copies imprimées de la page de l'État sur le travail des mineurs",
      "Du papier, un stylo et une calculatrice (celle du téléphone suffit)",
      "Des formulaires W-4 et I-9 vierges imprimés depuis irs.gov et uscis.gov, à regarder (ne pas y écrire de vrais numéros en classe)",
      "Un exemple de fiche de paie inventée pour s'entraîner",
      "Environ 60 à 75 minutes au total : leçons, entraînement, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "Avant le cours, consultez les pages de votre État sur le travail des mineurs et le salaire minimum, et imprimez les règles principales ; elles changent selon l'État et dans le temps.",
      "Dans un programme d'été pour les jeunes : faites le test de départ ensemble, puis un chapitre par séance, avec les tâches « Essayez maintenant » en binômes.",
      "Ne recueillez jamais de vrais numéros de Sécurité sociale, de copies de pièces d'identité ni de vraies fiches de paie ; utilisez des exemples inventés.",
      "Faites jouer en jeu de rôle les phrases pour prévenir d'une absence et recevoir des remarques de la leçon 3, et les étapes pour parler de la leçon 6.",
      "Évaluez la tâche finale avec la grille et donnez un retour sur une seule ligne Pas encore à la fois.",
      "Si un apprenant décrit un emploi réel dangereux ou illégal, aidez-le à suivre les étapes de la leçon 6 et impliquez un parent ou un tuteur."
    ]
  }
};
