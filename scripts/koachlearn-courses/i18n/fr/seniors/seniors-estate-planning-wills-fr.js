"use strict";

// Koach Learn course (French translation of seniors/seniors-estate-planning-wills.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "seniors-estate-planning-wills-fr",
  lang: "fr",
  translationOf: "seniors-estate-planning-wills",
  category: "Seniors and Technology",
  name: "Préparer sa succession et son testament",
  skills: "Savoir à quoi sert un testament, Vérifier vos bénéficiaires, Comprendre la procuration et les directives médicales, Lister ce que vous possédez et ce que vous devez, Vous préparer pour un avocat ou une aide juridique, Classer et ranger vos papiers",
  outcome: "préparer et organiser votre plan de succession : une liste de ce que vous possédez et de ce que vous devez, une vérification de vos bénéficiaires, les personnes que vous voulez désigner, vos questions pour un avocat ou une aide juridique, et une note claire qui dit à votre famille où se trouvent vos papiers importants.",
  about: [
    "Ce cours s'adresse aux personnes âgées qui veulent simplifier les choses pour leur famille, ainsi qu'aux enfants adultes et aux petits-enfants qui les aident. Pas besoin d'être riche : toute personne qui a un compte bancaire, une maison, une voiture, une pension, un animal ou de jeunes petits-enfants à sa charge peut tirer profit d'un plan.",
    "Vous apprendrez à quoi servent un testament, les bénéficiaires, une procuration et une directive médicale. Puis vous ferez les listes et les choix qu'un avocat vous demandera, et vous organiserez tout pour que les bonnes personnes puissent le trouver.",
    "Chaque leçon dure environ cinq minutes et se termine par une tâche \"Essayez maintenant\". Il y a un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Les lois sur les testaments et sur ces documents sont différentes dans chaque État américain et dans chaque pays. Ce cours vous aide à vous préparer ; pour que les documents soient valables, consultez un avocat ou une aide juridique gratuite là où vous vivez."
  ],
  finalTask: "Constituez votre dossier de succession : (1) une liste de ce que vous possédez et de ce que vous devez ; (2) une vérification des bénéficiaires de chaque compte ou contrat qui en a un ; (3) les personnes que vous désigneriez comme exécuteur testamentaire, mandataire pour l'argent et mandataire pour la santé, avec un remplaçant pour chacune ; (4) au moins cinq questions pour un avocat ou une aide juridique ; (5) une note d'une page \"où sont mes papiers\" pour votre famille. Ensuite, trouvez près de chez vous un endroit qui offre une aide juridique.",
  chapters: [
    {
      name: "Chapitre 1 : Connaître les documents",
      lessons: [
        {
          title: "Ce qu'est la préparation de sa succession, et à quoi sert un testament",
          minutes: 5,
          goal: "Expliquer à quoi sert un testament et ce qui peut arriver sans testament.",
          text: [
            "Préparer sa succession, c'est décider à l'avance ce que deviendront votre argent et vos biens à votre décès, et qui prendra les décisions à votre place si vous êtes trop malade pour décider. Votre patrimoine, c'est tout ce que vous possédez, moins ce que vous devez.",
            "Un testament est un document juridique qui dit qui reçoit vos biens et qui désigne un exécuteur testamentaire : la personne qui applique vos volontés, paie les dernières factures et répartit ce qui reste. Dans beaucoup d'endroits, un testament peut aussi désigner un tuteur pour les enfants de moins de 18 ans à votre charge, comme des petits-enfants que vous élevez.",
            "Si vous mourez sans testament, c'est la loi de l'endroit où vous vivez qui décide qui hérite, et un tribunal choisit qui gère votre succession. Le résultat ne sera peut-être pas celui que vous vouliez.",
            "Chaque État et chaque pays a ses propres règles pour qu'un testament soit valable, par exemple la façon de le signer et la présence de témoins. Un testament qui ne respecte pas ces règles risque de ne pas compter. C'est pourquoi ce cours vous aide à vous préparer, et un avocat ou une aide juridique vous aide à le rendre valable."
          ],
          words: [["Patrimoine", "tout ce que vous possédez, comme de l'argent, une maison, une voiture et vos affaires, moins ce que vous devez."], ["Testament", "un document juridique qui dit qui reçoit vos biens après votre décès et qui applique vos volontés."], ["Exécuteur testamentaire", "la personne désignée dans un testament pour appliquer vos volontés et régler votre succession."], ["Tuteur", "une personne désignée pour s'occuper d'un enfant de moins de 18 ans."]],
          slides: [
            { title: "Préparer sa succession, c'est décider à l'avance", bullets: ["Ce que deviennent vos biens à votre décès", "Qui décide pour vous si vous êtes trop malade"] },
            { title: "Un testament", bullets: ["Dit qui reçoit vos biens", "Désigne un exécuteur testamentaire", "Peut désigner un tuteur pour les enfants à votre charge"] },
            { title: "Sans testament", bullets: ["La loi de l'endroit où vous vivez décide", "Un tribunal choisit qui gère la succession", "Ce n'est peut-être pas ce que vous vouliez"] },
            { title: "Les règles changent selon l'endroit", bullets: ["Chaque État et chaque pays a ses propres règles", "Préparez-vous ici ; rendez-le valable avec un avocat ou une aide juridique"] }
          ],
          sources: [{ name: "LawHelp.org : trouver une aide juridique gratuite et des informations dans votre État", url: "https://www.lawhelp.org/" }],
          tryIt: "Écrivez les trois choses que vous tenez le plus à transmettre, comme une maison, des économies, la Bible de la famille, une voiture ou la garde d'un animal, et à qui vous voudriez donner chacune. C'est une liste privée pour vous, pas un document juridique.",
          youCanNow: "expliquer ce que sont un testament et un exécuteur testamentaire, et pourquoi un testament doit respecter les règles de l'endroit où vous vivez."
        },
        {
          title: "Vérifier vos bénéficiaires",
          minutes: 5,
          goal: "Trouver chaque compte ou contrat qui a un bénéficiaire et vérifier qui est désigné.",
          text: [
            "Une partie de votre argent ne passe pas du tout par votre testament. L'assurance vie, beaucoup de comptes de retraite et de pensions, et certains comptes bancaires vous permettent de désigner un bénéficiaire : la personne qui reçoit cet argent à votre décès. En général, ces formulaires décident qui reçoit cet argent, même si votre testament dit autre chose.",
            "C'est pourquoi les vieux formulaires posent des problèmes. Un contrat d'assurance vie peut encore désigner un ancien conjoint, un parent décédé, ou un enfant d'avant la naissance des petits-enfants.",
            "Faites la liste de tous vos comptes et contrats. Pour chacun, demandez à l'organisme ou regardez votre compte en ligne pour voir qui est désigné comme bénéficiaire et comme remplaçant (souvent appelé bénéficiaire subsidiaire). Corrigez ceux qui sont faux avec le formulaire de l'organisme lui-même.",
            "Revoyez vos bénéficiaires après les grands événements de la vie : un mariage, un divorce, un décès, une naissance ou un nouveau petit-enfant. Demandez conseil à un avocat avant de désigner un enfant mineur ou une personne qui touche des prestations d'invalidité, car il peut y avoir des règles particulières."
          ],
          steps: ["Listez chaque assurance vie, compte de retraite, pension et compte bancaire.", "Pour chacun, trouvez qui est désigné comme bénéficiaire et comme remplaçant.", "Marquez ceux qui ne sont plus à jour.", "Mettez-les à jour avec le formulaire de l'organisme.", "Revérifiez après un mariage, un divorce, un décès ou une naissance."],
          words: [["Bénéficiaire", "la personne que vous désignez pour recevoir l'argent d'un compte ou d'un contrat à votre décès."], ["Bénéficiaire subsidiaire", "le remplaçant qui reçoit l'argent si le premier bénéficiaire est décédé."], ["Événement de la vie", "un grand changement comme un mariage, un divorce, un décès ou une naissance."]],
          slides: [
            { title: "Une partie de l'argent échappe au testament", bullets: ["Assurance vie, beaucoup de comptes de retraite", "Certains comptes bancaires", "C'est en général le formulaire de bénéficiaire qui décide"] },
            { title: "Les vieux formulaires posent problème", bullets: ["Un ancien conjoint encore désigné", "Une personne décédée", "De nouveaux petits-enfants oubliés"] },
            { title: "Vérifiez-les tous", bullets: ["Listez vos comptes et contrats", "Trouvez le bénéficiaire désigné et le remplaçant", "Mettez à jour avec le formulaire de l'organisme"] },
            { title: "Revoyez après les événements de la vie", bullets: ["Mariage, divorce, décès, naissance", "Demandez à un avocat pour les mineurs ou les prestations d'invalidité"] }
          ],
          sources: [{ name: "CFPB (Bureau de protection financière des consommateurs) : gérer l'argent d'une autre personne (guides pour les familles)", url: "https://www.consumerfinance.gov/consumer-tools/managing-someone-elses-money/" }],
          tryIt: "Listez tous vos comptes ou contrats qui pourraient avoir un bénéficiaire. Choisissez-en un, vérifiez qui est désigné (en ligne, dans vos papiers ou en appelant l'organisme), et notez si c'est encore juste.",
          youCanNow: "trouver vos comptes qui ont des bénéficiaires, vérifier qui est désigné, et savoir quand les mettre à jour."
        },
        {
          title: "La procuration et les directives médicales",
          minutes: 6,
          goal: "Expliquer qui déciderait pour vous de votre argent et de vos soins si vous ne pouviez pas le faire.",
          text: [
            "Un testament ne sert qu'après le décès. D'autres documents vous protègent de votre vivant, si une maladie ou un accident vous empêche de décider vous-même.",
            "Une procuration financière (financial power of attorney) désigne un mandataire : une personne de confiance qui gère votre argent et vos biens pour vous, par exemple pour payer les factures ou parler à la banque. Le Consumer Financial Protection Bureau (CFPB, l'agence fédérale américaine qui protège les consommateurs pour les questions d'argent) propose des guides gratuits pour les personnes désignées comme mandataires. Sans procuration, votre famille devra peut-être aller au tribunal pour faire nommer un tuteur ou un curateur, ce qui coûte du temps et de l'argent.",
            "Une directive médicale, aussi appelée directive anticipée, concerne les décisions médicales. Une procuration pour les soins de santé (health care proxy) désigne une personne de confiance qui prend les décisions de santé si vous ne le pouvez pas. Un testament de vie (living will) écrit quels traitements vous voudriez ou ne voudriez pas si vous étiez mourant ou inconscient pour toujours, comme une machine pour respirer ou l'alimentation par sonde.",
            "Choisissez des personnes dignes de confiance, qui habitent assez près ou qu'on peut joindre, et qui suivront vos volontés, pas les leurs. Désignez un remplaçant pour chacune. Puis parlez avec elles, et avec votre médecin, de ce que vous voulez. Les formulaires et les règles changent selon l'État et le pays : procurez-les-vous auprès d'un avocat, d'une aide juridique, du cabinet de votre médecin ou de l'hôpital, et demandez comment les signer correctement."
          ],
          words: [["Procuration", "un document juridique qui permet à une personne que vous choisissez d'agir pour vous."], ["Mandataire", "la personne que vous désignez dans une procuration."], ["Directive anticipée", "des documents qui disent aux médecins et à la famille vos volontés pour vos soins et qui décide pour vous."], ["Testament de vie", "un document qui dit quels traitements vous voulez ou ne voulez pas en fin de vie."], ["Mandataire de santé", "la personne que vous désignez pour prendre les décisions de santé si vous ne le pouvez pas."]],
          slides: [
            { title: "Des plans pour votre vivant", bullets: ["Un testament ne sert qu'après le décès", "Ces documents couvrent la maladie ou l'accident"] },
            { title: "La procuration financière", bullets: ["Désigne un mandataire pour l'argent et les biens", "Paie les factures, parle à la banque", "Sans elle, la famille devra peut-être aller au tribunal"] },
            { title: "Les directives médicales", bullets: ["Mandataire de santé : qui décide", "Testament de vie : quels traitements vous voulez", "Parlez-en avec votre médecin"] },
            { title: "Bien choisir", bullets: ["Digne de confiance et joignable", "Suivra vos volontés", "Désignez un remplaçant ; les formulaires changent selon l'État"] }
          ],
          sources: [
            { name: "MedlinePlus : directives anticipées", url: "https://medlineplus.gov/advancedirectives.html" },
            { name: "CFPB : gérer l'argent d'une autre personne", url: "https://www.consumerfinance.gov/consumer-tools/managing-someone-elses-money/" }
          ],
          tryIt: "Écrivez le nom de la personne que vous choisiriez comme mandataire pour l'argent et comme mandataire de santé, et un remplaçant pour chacune. À côté de chaque nom, écrivez une raison pour laquelle vous lui faites confiance.",
          youCanNow: "expliquer ce que sont une procuration financière, un mandataire de santé et un testament de vie, et choisir à qui vous faites confiance pour chacun."
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Connaître les documents",
        questions: [
          { q: "Que fait un exécuteur testamentaire ?", options: ["Il applique les volontés de votre testament et règle votre succession", "Il écrit votre dossier médical", "Il vous vend des assurances", "Il choisit votre plan Medicare"], answer: 0, why: "L'exécuteur testamentaire est désigné dans le testament pour appliquer vos volontés." },
          { q: "Que peut-il se passer si vous mourez sans testament ?", options: ["Rien n'arrive à vos biens", "Votre banque garde tout", "La loi de l'endroit où vous vivez décide qui hérite", "Votre voisin choisit"], answer: 2, why: "Sans testament, la loi de l'État ou du pays et un tribunal décident." },
          { q: "Votre testament laisse tout à votre fille, mais votre formulaire d'assurance vie désigne encore votre ex-mari. Qui reçoit en général l'assurance ?", options: ["Votre fille", "Le tribunal", "L'agent d'assurance", "La personne désignée sur le formulaire de bénéficiaire"], answer: 3, why: "Les formulaires de bénéficiaire décident en général de cet argent, même si le testament dit autre chose." },
          { q: "Quel document désigne quelqu'un pour prendre les décisions médicales si vous ne le pouvez pas ?", options: ["Un relevé bancaire", "Une procuration pour les soins de santé (mandataire de santé)", "Un formulaire de bénéficiaire", "Une liste de courses"], answer: 1, why: "Le mandataire de santé est la personne que vous désignez pour les décisions de santé." },
          { q: "Pourquoi avez-vous besoin d'un avocat ou d'une aide juridique pour finaliser ces documents ?", options: ["Parce que les outils d'IA n'ont pas le droit de les lire", "Parce qu'ils doivent être tapés à la machine", "Parce que les règles pour les rendre valables changent selon l'État et le pays", "Parce que seuls les avocats peuvent posséder une maison"], answer: 2, why: "Un document qui ne respecte pas les règles locales risque de ne pas compter." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Se préparer et s'organiser",
      lessons: [
        {
          title: "Lister ce que vous possédez et ce que vous devez",
          minutes: 5,
          goal: "Faire une liste simple de vos biens et de vos dettes, utile à votre avocat et à votre famille.",
          text: [
            "Avant de voir un avocat, faites la liste de ce que vous possédez et de ce que vous devez. Cette liste aide l'avocat à bien vous conseiller, et plus tard elle aide votre exécuteur testamentaire à tout retrouver.",
            "Ce que vous possédez (vos biens) : comptes en banque et en coopérative de crédit, comptes de retraite et pensions, assurance vie, votre maison ou votre terrain, vos véhicules, vos objets de valeur, et les choses qui ont une valeur familiale comme des bijoux ou des photos. Notez aussi les comptes en ligne, comme l'e-mail et le stockage de photos, et les animaux qui auront besoin d'un nouveau foyer.",
            "Ce que vous devez (vos dettes) : un prêt immobilier, un prêt auto, des cartes de crédit, des factures médicales et tout prêt personnel.",
            "Pour chaque élément, écrivez l'organisme et le type de compte, mais pas les numéros de compte complets ni les mots de passe. Écrivez plutôt \"se termine par 1234\". Rangez cette liste dans un endroit sûr. Ne la tapez pas dans un assistant d'IA et ne l'envoyez par e-mail à personne qui n'a pas été choisi pour vous aider."
          ],
          steps: ["Écrivez un titre : Ce que je possède. Listez comptes, contrats, propriétés, véhicules et objets de valeur.", "Ajoutez les comptes en ligne et les animaux.", "Écrivez un titre : Ce que je dois. Listez chaque dette et auprès de qui.", "N'utilisez que les quatre derniers chiffres de tout numéro, et n'écrivez jamais de mot de passe sur cette liste.", "Rangez-la dans un endroit sûr."],
          words: [["Bien", "quelque chose que vous possédez et qui a de la valeur, comme de l'argent, une maison ou une voiture."], ["Dette", "de l'argent que vous devez, comme un prêt immobilier ou une carte de crédit."], ["Inventaire", "une liste complète de ce que vous avez."]],
          slides: [
            { title: "Pourquoi faire la liste", bullets: ["Elle aide votre avocat à vous conseiller", "Elle aide votre exécuteur à tout retrouver"] },
            { title: "Ce que vous possédez", bullets: ["Comptes, pensions, assurance vie", "Maison, terrain, véhicules, objets de valeur", "Comptes en ligne et animaux"] },
            { title: "Ce que vous devez", bullets: ["Prêt immobilier, prêt auto, cartes de crédit", "Factures médicales, prêts personnels"] },
            { title: "Gardez-la privée", bullets: ["Seulement les quatre derniers chiffres", "Aucun mot de passe sur la liste", "Ne la collez jamais dans un outil d'IA"] }
          ],
          tryIt: "Commencez votre liste maintenant sur papier : écrivez au moins cinq choses que vous possédez et toutes vos dettes, avec le nom de l'organisme et seulement les quatre derniers chiffres de chaque numéro.",
          youCanNow: "faire une liste privée et organisée de ce que vous possédez et de ce que vous devez, pour votre avocat et votre famille."
        },
        {
          title: "Vous préparer pour un avocat ou une aide juridique",
          minutes: 5,
          goal: "Trouver une aide juridique près de chez vous et préparer les choix et les questions à apporter.",
          text: [
            "L'aide pour préparer votre succession n'a pas besoin d'être chère. Une aide gratuite ou peu coûteuse peut venir d'associations d'aide juridique, de services juridiques pour les seniors, de cliniques juridiques de facultés de droit et de programmes d'avocats bénévoles. Sur LawHelp.org, vous choisissez votre État pour trouver une aide juridique gratuite auprès d'associations sans but lucratif. L'Eldercare Locator (1-800-677-1116), un service national pour les personnes âgées, met les seniors et leurs familles en relation avec des services locaux ; demandez-leur une aide juridique pour les seniors près de chez vous. Le barreau (bar association) de votre État ou de votre région peut aussi avoir un service d'orientation vers un avocat.",
            "Il existe des formulaires et des kits de testament en ligne, mais un formulaire qui ne correspond pas aux règles de votre État, ou à la situation de votre famille, peut échouer. Un avocat ou une aide juridique peut vous dire si un formulaire simple vous suffit ou non.",
            "Apportez ce que vous avez préparé : votre liste de ce que vous possédez et de ce que vous devez, votre vérification des bénéficiaires, et les personnes que vous avez choisies comme exécuteur testamentaire, tuteur, mandataire pour l'argent et mandataire de santé, avec leurs remplaçants. Apportez aussi des questions.",
            "De bonnes questions : Ai-je besoin d'un testament, d'une fiducie (trust), ou des deux ? Comment mon testament doit-il être signé et devant quels témoins ici ? Que devient ma maison ? Que dois-je faire pour un petit-enfant à ma charge ? Combien cela va-t-il coûter, et qu'est-ce qui est compris ? Un assistant d'IA peut vous aider à écrire vos questions avec des mots clairs, mais n'y mettez ni noms ni numéros, et laissez l'avocat donner les réponses juridiques."
          ],
          steps: ["Allez sur LawHelp.org et choisissez votre État, ou appelez l'Eldercare Locator.", "Demandez une aide gratuite ou peu coûteuse pour préparer la succession des seniors.", "Rassemblez vos listes et les personnes que vous avez choisies.", "Écrivez au moins cinq questions.", "Demandez combien cela coûtera et ce qui est compris avant de commencer."],
          words: [["Aide juridique", "une aide juridique gratuite d'associations sans but lucratif pour les personnes qui y ont droit."], ["Service d'orientation vers un avocat", "un service, souvent proposé par un barreau, qui vous met en relation avec un avocat."], ["Fiducie (trust)", "un arrangement juridique où une personne gère des biens pour d'autres ; un avocat peut vous dire si vous en avez besoin."]],
          slides: [
            { title: "Où trouver de l'aide", bullets: ["LawHelp.org : choisissez votre État", "Eldercare Locator : 1-800-677-1116", "Service d'orientation du barreau"] },
            { title: "Attention aux kits", bullets: ["Le formulaire doit respecter les règles de votre État", "Demandez à un avocat si un formulaire simple suffit"] },
            { title: "Apportez votre préparation", bullets: ["Ce que vous possédez et ce que vous devez", "La vérification des bénéficiaires", "Les personnes choisies, avec remplaçants"] },
            { title: "Apportez des questions", bullets: ["Testament, fiducie ou les deux ?", "Comment le signer, avec quels témoins ici ?", "Combien cela va-t-il coûter ?"] }
          ],
          sources: [
            { name: "LawHelp.org : trouver une aide juridique gratuite", url: "https://www.lawhelp.org/" },
            { name: "Eldercare Locator (Administration for Community Living)", url: "https://eldercare.acl.gov/" }
          ],
          tryIt: "Allez sur LawHelp.org, choisissez votre État et trouvez une association d'aide juridique ou un service juridique pour seniors près de chez vous. Écrivez son nom et son numéro de téléphone, et écrivez cinq questions que vous lui poseriez.",
          youCanNow: "trouver une aide juridique gratuite ou peu coûteuse près de chez vous et arriver au rendez-vous bien préparé."
        },
        {
          title: "Classer et ranger vos papiers importants",
          minutes: 5,
          goal: "Mettre vos papiers dans un seul endroit sûr et dire aux bonnes personnes où ils sont.",
          text: [
            "Un plan n'aide que si on peut le trouver. Beaucoup de familles cherchent pendant des jours un testament, un contrat d'assurance ou l'acte de propriété d'une maison. Vous pouvez leur éviter cela.",
            "Préparez un seul dossier ou classeur. Mettez-y, ou notez où trouver : votre testament et vos autres documents juridiques, votre procuration et votre directive médicale, votre liste de ce que vous possédez et de ce que vous devez, vos contrats d'assurance, vos actes de propriété et certificats d'immatriculation, vos cartes Medicare (l'assurance santé fédérale américaine pour les plus de 65 ans) ou autres cartes de santé (des copies), et une liste de contacts : votre avocat, votre médecin, votre banque et les personnes que vous avez désignées.",
            "Demandez à votre avocat où garder l'original signé de votre testament, car les règles et les possibilités varient. Donnez une copie de votre directive médicale à votre mandataire de santé et à votre médecin, pour qu'elle soit disponible en cas d'urgence. Gardez le classeur dans un endroit sûr chez vous, que votre exécuteur testamentaire connaît.",
            "Écrivez une note d'une page \"où sont mes papiers\" et donnez-la aux personnes que vous avez désignées. Revoyez tout tous les quelques ans et après les grands événements de la vie. Quand vous changez quelque chose, prévenez votre famille et retirez les anciennes versions pour que personne n'utilise la mauvaise."
          ],
          steps: ["Préparez un classeur ou un dossier pour vos papiers importants.", "Ajoutez chaque document, ou une note qui dit où il se trouve.", "Demandez à votre avocat où garder l'original du testament.", "Donnez votre directive médicale à votre mandataire de santé et à votre médecin.", "Écrivez une note \"où sont mes papiers\" et partagez-la avec les personnes désignées.", "Revoyez après les grands événements de la vie et retirez les anciennes versions."],
          words: [["Original", "le document signé lui-même, pas une copie."], ["Acte de propriété", "le document juridique qui montre qui est propriétaire d'une maison ou d'un terrain."], ["Certificat d'immatriculation", "le papier qui montre qui est propriétaire d'un véhicule (title aux États-Unis)."]],
          slides: [
            { title: "Il faut pouvoir le trouver", bullets: ["Les familles peuvent chercher pendant des jours", "Un seul classeur leur évite cela"] },
            { title: "Ce qui va dans le classeur", bullets: ["Testament, procuration, directive médicale", "Votre liste de ce que vous possédez et devez", "Contrats, actes, certificats, contacts"] },
            { title: "Où ranger les choses", bullets: ["Demandez à votre avocat pour l'original du testament", "Directive médicale : à votre mandataire et à votre médecin", "Classeur : un endroit sûr que votre exécuteur connaît"] },
            { title: "Prévenir et revoir", bullets: ["Partagez une note \"où sont mes papiers\"", "Revoyez après les événements de la vie", "Retirez les anciennes versions"] }
          ],
          sources: [{ name: "MedlinePlus : directives anticipées", url: "https://medlineplus.gov/advancedirectives.html" }],
          tryIt: "Tâche finale : constituez votre dossier de succession avec votre liste de ce que vous possédez et de ce que vous devez, votre vérification des bénéficiaires, les personnes que vous désigneriez avec leurs remplaçants, au moins cinq questions pour un avocat ou une aide juridique, et une note d'une page \"où sont mes papiers\". Ensuite, trouvez un bureau d'aide juridique près de chez vous et notez comment le contacter.",
          youCanNow: "classer vos papiers importants, les ranger en sécurité et dire aux bonnes personnes où ils se trouvent."
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Se préparer et s'organiser",
        questions: [
          { q: "Comment les numéros de compte doivent-ils apparaître sur votre liste de ce que vous possédez ?", options: ["Le numéro complet et le mot de passe", "Seulement les quatre derniers chiffres, sans mot de passe", "Écrits sur l'extérieur du dossier", "Publiés en ligne pour votre famille"], answer: 1, why: "Les quatre derniers chiffres identifient le compte sans l'exposer." },
          { q: "Laquelle de ces choses est une dette ?", options: ["Votre compte d'épargne", "Votre voiture", "Un contrat d'assurance vie", "Le solde d'une carte de crédit"], answer: 3, why: "Une dette, c'est de l'argent que vous devez." },
          { q: "Où pouvez-vous chercher une aide juridique gratuite dans votre État ?", options: ["LawHelp.org", "Une publicité en ligne au hasard", "Un lien dans un SMS", "Un commentaire sur les réseaux sociaux"], answer: 0, why: "LawHelp.org présente l'aide juridique sans but lucratif de chaque État." },
          { q: "Qui doit recevoir une copie de votre directive médicale ?", options: ["Personne", "Le guichetier de votre banque", "Votre mandataire de santé et votre médecin", "Un inconnu en ligne"], answer: 2, why: "Ils en ont besoin pour suivre vos volontés en cas d'urgence." },
          { q: "Vous avez modifié votre testament. Que faites-vous de l'ancienne version ?", options: ["Garder les deux dans le classeur sans note", "La donner à un voisin", "La cacher dans une autre pièce", "Suivre le conseil de votre avocat et veiller à ce que personne n'utilise l'ancienne"], answer: 3, why: "Les anciennes versions peuvent embrouiller votre famille ; votre avocat peut dire comment les traiter." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Préparer sa succession et son testament",
    questions: [
      { q: "Votre patrimoine, c'est :", options: ["Seulement votre maison", "Seulement votre compte bancaire", "Votre jardin", "Tout ce que vous possédez, moins ce que vous devez"], answer: 3, why: "Le patrimoine comprend tous vos biens, moins les dettes." },
      { q: "Un testament dit surtout :", options: ["Quel médecin vous voyez", "Qui reçoit vos biens et qui applique vos volontés", "Votre budget du mois", "Votre plan Medicare"], answer: 1, why: "Un testament désigne qui hérite et un exécuteur testamentaire." },
      { q: "Une grand-mère élève ses deux petits-enfants. Que peut souvent faire un testament pour eux ?", options: ["Rien", "Payer leurs frais de scolarité automatiquement", "Leur désigner un tuteur", "Changer leurs actes de naissance"], answer: 2, why: "Dans beaucoup d'endroits, un testament peut désigner un tuteur pour les enfants de moins de 18 ans." },
      { q: "Pourquoi un testament fait sur un formulaire gratuit pourrait-il échouer ?", options: ["Il peut ne pas respecter les règles de signature et de témoins de l'endroit où vous vivez", "Les formulaires gratuits sont toujours illégaux", "Les testaments doivent être en couleur", "Il est trop court"], answer: 0, why: "Chaque État et chaque pays a ses propres règles pour qu'un testament soit valable." },
      { q: "L'assurance vie va en général à :", options: ["La personne nommée dans le testament", "L'exécuteur testamentaire", "La personne désignée sur le formulaire de bénéficiaire", "L'État"], answer: 2, why: "Les formulaires de bénéficiaire décident en général de cet argent." },
      { q: "Quand devez-vous revoir vos bénéficiaires ?", options: ["Jamais", "Une seule fois, à l'ouverture du compte", "Seulement quand l'organisme appelle", "Après un mariage, un divorce, un décès ou une naissance"], answer: 3, why: "C'est après les événements de la vie que les formulaires deviennent dépassés." },
      { q: "Un bénéficiaire subsidiaire, c'est :", options: ["Le remplaçant si le premier bénéficiaire est décédé", "Votre avocat", "Votre médecin", "Le directeur de la banque"], answer: 0, why: "Le bénéficiaire subsidiaire est le remplaçant." },
      { q: "Une procuration financière désigne quelqu'un pour :", options: ["Prendre les décisions médicales", "Gérer votre argent et vos biens si vous ne le pouvez pas", "Lire votre testament à voix haute", "Choisir votre église"], answer: 1, why: "Le mandataire agit pour vous pour les questions d'argent." },
      { q: "Sans procuration financière, si vous ne pouvez plus gérer votre argent, votre famille devra peut-être :", options: ["Ne rien faire", "Aller au tribunal pour faire nommer un tuteur ou un curateur", "Appeler une station de radio", "Fermer tous vos comptes"], answer: 1, why: "Le tribunal peut être lent et coûteux ; une procuration l'évite." },
      { q: "Un testament de vie dit :", options: ["Qui reçoit votre maison", "Le solde de votre compte", "Quels traitements vous voulez ou ne voulez pas en fin de vie", "Votre liste de courses"], answer: 2, why: "Un testament de vie écrit vos volontés sur les traitements." },
      { q: "Qui est un bon choix comme mandataire de santé ?", options: ["Quelqu'un qui suivra ses propres volontés", "Un inconnu qui vous appelle", "N'importe qui qui le demande", "Une personne de confiance, joignable, qui suivra vos volontés"], answer: 3, why: "Votre mandataire doit parler pour vous, pas pour lui-même." },
      { q: "En plus de votre avocat, avec qui devez-vous parler de vos volontés pour vos soins ?", options: ["Votre médecin et votre mandataire de santé", "Un vendeur au téléphone", "Personne", "Un groupe sur les réseaux sociaux"], answer: 0, why: "Ce sont eux qui agiront selon vos volontés." },
      { q: "Qu'est-ce qui a sa place sur votre liste de ce que vous possédez ?", options: ["Votre mot de passe complet", "La voiture de votre voisin", "Votre code PIN", "Votre maison, vos comptes, vos véhicules et vos objets de valeur"], answer: 3, why: "Listez vos biens avec l'organisme et les quatre derniers chiffres, sans mot de passe." },
      { q: "Devez-vous coller la liste complète de vos comptes dans un assistant d'IA ?", options: ["Oui, pour gagner du temps", "Non ; gardez les informations privées hors des outils d'IA", "Oui, si l'IA le demande", "Seulement sur un ordinateur de bibliothèque"], answer: 1, why: "Ne tapez jamais de numéros privés ni de détails de compte dans des outils d'IA." },
      { q: "Quel numéro de téléphone permet de joindre l'Eldercare Locator ?", options: ["1-800-677-1116", "911", "1-800-MEDICARE", "411"], answer: 0, why: "L'Eldercare Locator met les seniors en relation avec des services locaux." },
      { q: "Avant d'engager un avocat, une bonne question est :", options: ["Quelle est votre couleur préférée ?", "Pouvez-vous deviner mes volontés ?", "Combien cela va-t-il coûter, et qu'est-ce qui est compris ?", "Puis-je ne pas signer ?"], answer: 2, why: "Connaître le prix dès le départ évite les surprises." },
      { q: "Quel est un bon usage d'un assistant d'IA pour préparer sa succession ?", options: ["Écrire seul votre testament juridique", "Vous aider à écrire vos questions avec des mots clairs, sans noms ni numéros", "Garder vos mots de passe", "Décider qui hérite"], answer: 1, why: "L'IA peut aider à formuler, mais les réponses juridiques viennent d'un avocat." },
      { q: "Où faut-il garder l'original signé du testament ?", options: ["N'importe où, peu importe", "Dans la voiture", "Le jeter après l'avoir copié", "Là où votre avocat le conseille, et votre exécuteur doit le savoir"], answer: 3, why: "Les règles et les possibilités varient ; demandez à votre avocat." },
      { q: "Une note \"où sont mes papiers\" doit être donnée :", options: ["À tout le monde en ligne", "À personne", "Aux personnes que vous avez désignées dans votre plan", "À un vendeur au téléphone"], answer: 2, why: "Les personnes qui agiront pour vous doivent pouvoir trouver vos papiers." },
      { q: "Les lois sur les successions :", options: ["Sont différentes dans chaque État et chaque pays", "Sont les mêmes partout dans le monde", "Ne changent jamais", "Ne concernent que les riches"], answer: 0, why: "Les règles varient selon l'endroit : consultez un avocat ou une aide juridique là où vous vivez." }
    ]
  }
};
