"use strict";

// Koach Learn course (French translation of shared/quickbooks-bookkeeping.js). See scripts/koachlearn-courses/README.md, "Translations".

const CERTIPORT = { name: "Certiport (Pearson VUE) : les certifications Intuit, dont QuickBooks Certified User et Intuit Certified Bookkeeping Professional (en anglais)", url: "https://certiport.pearsonvue.com/Certifications/QuickBooks/Certified-User/Overview" };
const ACADEMY = { name: "Intuit Academy (le site de formation et de certification d'Intuit, en anglais)", url: "https://academy.intuit.com/" };
const TESTDRIVE = { name: "Aide QuickBooks d'Intuit : essayer et s'exercer avec la version d'essai de QuickBooks Online (en anglais)", url: "https://quickbooks.intuit.com/learn-support/en-us/help-article/small-business-processes/test-drive-quickbooks-online/L9C12ODlA_US_en_US" };
const PROADVISOR = { name: "Formation et certification QuickBooks ProAdvisor (pour les comptables, en anglais)", url: "https://quickbooks.intuit.com/accountants/training-certification/" };

module.exports = {
  id: "quickbooks-bookkeeping-fr",
  lang: "fr",
  translationOf: "quickbooks-bookkeeping",
  category: "Workforce Development",
  name: "La tenue de comptes avec QuickBooks",
  skills: "Créer un plan comptable, Enregistrer les factures et les paiements, Saisir les factures fournisseurs et les dépenses, Rapprocher un compte bancaire, Lire les principaux rapports, Préparer une certification QuickBooks",
  outcome: "tenir les comptes d'une petite entreprise dans QuickBooks Online pendant un mois : classer l'argent dans les bons comptes, enregistrer les ventes, les paiements, les factures fournisseurs et les dépenses, pointer et rapprocher la banque, sortir les principaux rapports, et suivre un plan vers une certification QuickBooks.",
  about: [
    "Presque toutes les petites entreprises, les églises et les associations ont besoin de quelqu'un pour tenir leurs comptes, et beaucoup utilisent QuickBooks, un logiciel de comptabilité de la société Intuit. La tenue de comptes peut être un emploi à plein temps, un emploi à temps partiel depuis la maison, ou une petite activité au service de plusieurs clients. Ce cours s'adresse aux personnes qui cherchent un emploi, aux employés de bureau qui veulent un meilleur poste, aux propriétaires de petites entreprises et aux bénévoles d'associations.",
    "Vous pratiquerez le vrai travail : le plan comptable, les factures et les paiements des clients, les factures fournisseurs et les dépenses, le flux bancaire, un rapprochement bancaire, le compte de résultat et le bilan, et une liste de clôture de fin de mois. Vous vous exercez dans la version d'essai de QuickBooks Online d'Intuit, une entreprise exemple que vous ouvrez dans un navigateur web et où rien n'est enregistré, ou sur papier si vous n'avez pas d'ordinateur.",
    "Le cours vous prépare au métier de teneur de comptes et à des certifications Intuit comme QuickBooks Certified User et Intuit Certified Bookkeeping Professional, dont les examens sont organisés par Certiport. Il ne délivre aucune certification : vous l'obtenez en réussissant l'examen officiel. Consultez les pages officielles pour les détails et les frais à jour.",
    "Si vous avez déjà suivi \"Les bases de la tenue de comptes\", ce cours est l'étape suivante. Chaque leçon dure environ cinq minutes, avec une tâche \"Essayez maintenant\" et un contrôle rapide de deux questions. Il y a un contrôle des connaissances après chaque chapitre, un quiz de 20 questions à la fin, et une tâche finale que vous pouvez montrer à un employeur ou à un client."
  ],
  finalTask: "Préparez votre dossier de fin de mois QuickBooks pour une entreprise exemple (une entreprise de nettoyage, un food truck ou une petite association) : (1) un plan comptable d'au moins 12 comptes, chacun marqué comme produit, charge, actif, passif ou capitaux propres ; (2) un relevé d'au moins 10 opérations que vous avez saisies dans la version d'essai de QuickBooks Online ou sur papier (au moins 3 factures, 2 paiements de clients et 4 factures fournisseurs ou dépenses), chacune avec sa date, le client ou le fournisseur, le compte et le montant ; (3) un rapprochement bancaire du mois qui se termine avec un écart de zéro, ou une note écrite qui dit ce qui ne correspond pas encore et pourquoi ; (4) un résumé d'un paragraphe du compte de résultat du mois ; et (5) un plan de certification sur 60 jours avec des dates : quelle certification Intuit vous préparerez, quand vous consulterez sa page officielle, et quand vous ferez des tests d'entraînement.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des adultes et des jeunes adultes qui veulent un travail de bureau ou de tenue de comptes : des personnes qui cherchent un emploi, des employés de bureau ou de commerce qui veulent évoluer, des personnes qui sortent de prison, des immigrés qui ont une expérience des affaires, des propriétaires de petites entreprises qui tiennent leurs propres comptes et des bénévoles d'associations qui gèrent de l'argent.",
    startingPoint: "Savent utiliser un navigateur web et faire des calculs simples avec une calculatrice. Certains ont déjà tenu un registre de l'argent sur papier ou dans un tableur. La plupart n'ont jamais utilisé QuickBooks et n'ont jamais entendu parler de plan comptable, de rapprochement ou de bilan.",
    gap: "Les employeurs et les clients veulent des teneurs de comptes qui savent déjà comment QuickBooks enregistre les ventes, les factures fournisseurs et les opérations bancaires, et qui savent faire correspondre les comptes avec la banque chaque mois. Sans cela, de petites erreurs s'accumulent et donnent des impôts faux, des factures oubliées et des factures clients impayées. Apprendre les étapes et les rapports, et avoir un plan vers une certification Intuit, aide la personne à se faire embaucher et à servir ses propres clients.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (environ fin du collège) ; chaque mot de comptabilité est expliqué",
      "Appareils : un ordinateur ou une tablette avec un navigateur web pour la version d'essai ; chaque exercice marche aussi sur papier",
      "Coût : la version d'essai s'ouvre dans un navigateur sans acheter QuickBooks ; elle n'enregistre rien, donc les apprenants prennent des notes",
      "QuickBooks change souvent ses écrans, donc le cours enseigne les actions et les noms des rapports, pas des chemins de menu exacts",
      "Vie privée : on s'exerce avec l'entreprise exemple ou des chiffres inventés, jamais avec de vrais identifiants ou numéros bancaires",
      "Les règles fiscales changent et varient selon le lieu : les leçons renvoient à irs.gov ou à un professionnel de l'impôt et ne donnent aucun conseil fiscal"
    ],
    prerequisites: "Aucun, mais \"Les bases de la tenue de comptes\" ou \"Excel et les tableurs\" aide les personnes qui n'ont jamais suivi les entrées et les sorties d'argent."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir d'une offre d'emploi de teneur de comptes ou de la demande d'un client", action: "lister les principales tâches d'un teneur de comptes QuickBooks et nommer une certification Intuit adaptée au poste", standard: "en citant au moins quatre tâches et la page officielle où l'on vérifie la certification" },
    { id: "O2", condition: "À partir d'une liste des mouvements d'argent d'une petite entreprise", action: "classer chaque élément dans le bon type de compte d'un plan comptable", standard: "en plaçant au moins 9 éléments sur 10 dans le bon type de compte" },
    { id: "O3", condition: "À partir d'une vente, d'un client et d'un paiement", action: "enregistrer la facture ou le reçu de vente et le paiement du client dans QuickBooks", standard: "avec le bon client, la bonne date, le bon montant et le bon compte de produits, et sans aucune facture restée ouverte après son paiement" },
    { id: "O4", condition: "À partir d'une facture fournisseur, d'un reçu et d'un fournisseur", action: "saisir la facture fournisseur, la dépense et le paiement de la facture dans QuickBooks", standard: "avec le bon fournisseur, la bonne date, le bon montant et le bon compte de charges, et le reçu joint ou noté" },
    { id: "O5", condition: "À partir d'un mois d'opérations bancaires et d'un relevé bancaire", action: "pointer le flux bancaire et rapprocher le compte bancaire", standard: "en terminant avec un écart de zéro, ou une note écrite de ce qui ne correspond pas encore" },
    { id: "O6", condition: "À la fin d'un mois", action: "sortir et expliquer le compte de résultat, le bilan et le rapport des factures clients ouvertes", standard: "en indiquant le bénéfice ou la perte du mois et qui doit encore de l'argent" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Mettre en place et enregistrer les ventes",
      lessons: [
        {
          title: "Le métier de teneur de comptes QuickBooks et comment y arriver",
          objectives: ["O1"],
          minutes: 5,
          goal: "Lister les principales tâches d'un teneur de comptes QuickBooks et nommer une certification qui peut vous aider à être embauché.",
          text: [
            "Un teneur de comptes enregistre l'argent d'une entreprise pour que le propriétaire sache toujours où il en est. Dans QuickBooks, cela veut dire : envoyer des factures et enregistrer les paiements des clients, saisir les factures fournisseurs et les dépenses, vérifier le flux bancaire, rapprocher la banque chaque mois, sortir des rapports et garder les reçus. Les teneurs de comptes travaillent pour une seule entreprise, pour un cabinet comptable, ou pour plusieurs petits clients en tant qu'indépendants. Les églises et les associations en ont besoin aussi.",
            "QuickBooks Online est la version web d'Intuit, utilisée dans un navigateur. QuickBooks Desktop s'installe sur un ordinateur. La plupart des nouvelles petites entreprises clientes utilisent QuickBooks Online, donc ce cours l'utilise, mais les idées sont les mêmes dans les deux.",
            "Deux certifications Intuit correspondent à ce cours. QuickBooks Certified User montre que vous savez utiliser QuickBooks. Intuit Certified Bookkeeping Professional montre que vous connaissez les bases de la tenue de comptes. Les deux examens sont organisés par Certiport, une entreprise de Pearson VUE, et Intuit Academy propose des formations. Les comptables peuvent aussi obtenir la certification QuickBooks ProAdvisor. Ce cours vous prépare ; il ne délivre aucune certification. Les frais, les conditions et les détails des examens changent, donc consultez les pages officielles.",
            "Un teneur de comptes n'est pas un préparateur de déclarations d'impôts ni un expert-comptable agréé (CPA aux États-Unis). Vous gardez des registres propres ; les questions d'impôts vont à un professionnel de l'impôt ou sur irs.gov, le site du fisc américain."
          ],
          words: [["Teneur de comptes", "une personne qui enregistre l'argent qui entre et qui sort d'une entreprise et garde les registres exacts."], ["QuickBooks Online", "le logiciel de comptabilité d'Intuit qui fonctionne dans un navigateur web."], ["Certification", "un certificat qui montre que vous avez réussi un examen officiel."], ["Certiport", "une entreprise de Pearson VUE qui organise les examens de certification d'Intuit."], ["CPA", "certified public accountant : un expert-comptable agréé aux États-Unis, qui peut faire un travail qu'un teneur de comptes ne peut pas faire, comme les audits."]],
          slides: [
            { title: "Ce que fait un teneur de comptes QuickBooks", bullets: ["Factures et paiements des clients", "Factures fournisseurs et dépenses", "Flux bancaire et rapprochement mensuel", "Rapports et reçus"] },
            { title: "Où travaillent les teneurs de comptes", bullets: ["Une seule entreprise ou un cabinet comptable", "Plusieurs petits clients, en tant qu'indépendant", "Églises et associations"] },
            { title: "Des certifications utiles", bullets: ["QuickBooks Certified User", "Intuit Certified Bookkeeping Professional", "Examens organisés par Certiport ; consultez la page officielle"] },
            { title: "Connaissez votre rôle", bullets: ["Vous gardez des registres propres", "Les questions d'impôts vont à un pro de l'impôt ou sur irs.gov", "Ce cours prépare ; c'est l'examen qui donne la certification"] }
          ],
          sources: [CERTIPORT, ACADEMY, PROADVISOR],
          tryIt: "Trouvez une offre d'emploi de teneur de comptes en ligne (cherchez \"bookkeeper QuickBooks\" ou \"comptable QuickBooks\" sur un site d'emploi). Notez quatre tâches qu'elle cite et si elle demande une certification QuickBooks. Ouvrez ensuite la page Certiport dans les sources et notez les noms des deux certifications Intuit qui correspondent.",
          youCanNow: "lister ce que fait un teneur de comptes QuickBooks et nommer une certification adaptée au poste.",
          quickCheck: [
            { objective: "O1", q: "Quelle tâche fait partie du travail mensuel d'un teneur de comptes ?", options: ["Signer la déclaration d'impôts de l'entreprise en tant que CPA", "Rapprocher le compte bancaire", "Faire l'audit d'une autre entreprise", "Donner des conseils de placement"], answer: 1, why: "Rapprocher la banque chaque mois est un travail de base du teneur de comptes." },
            { objective: "O1", q: "Qui organise l'examen QuickBooks Certified User ?", options: ["L'IRS", "Le bureau du travail de votre État", "N'importe quel utilisateur de QuickBooks", "Certiport, pour Intuit"], answer: 3, why: "Certiport, une entreprise de Pearson VUE, organise les examens de certification d'Intuit." }
          ]
        },
        {
          title: "Le plan comptable et les écritures à deux côtés",
          objectives: ["O2"],
          minutes: 6,
          goal: "Classer les mouvements d'argent d'une entreprise dans les cinq types de comptes.",
          text: [
            "Le plan comptable est la liste de tous les endroits où l'argent peut être classé dans QuickBooks. Chaque compte appartient à l'un de cinq types. Produits : l'argent gagné, comme les ventes ou les dons. Charges : ce que coûte le fonctionnement de l'entreprise, comme les fournitures, le loyer et le carburant. Actifs : ce que l'entreprise possède ou ce qu'on lui doit, comme le compte bancaire, le matériel et l'argent que les clients doivent encore. Passifs : l'argent que l'entreprise doit, comme un prêt, une carte de crédit ou des factures pas encore payées. Capitaux propres : la part du propriétaire, y compris l'argent qu'il a apporté ou retiré.",
            "Chaque écriture touche au moins deux comptes. C'est ce qu'on appelle la comptabilité en partie double. Quand vous envoyez une facture de 200 $, les produits augmentent et l'argent que les clients vous doivent (les créances clients) augmente. Quand le client paie, les créances clients baissent et la banque augmente. QuickBooks fait le deuxième côté pour vous quand vous utilisez le bon formulaire : c'est pourquoi le choix du bon formulaire et du bon compte compte.",
            "QuickBooks donne à chaque nouvelle entreprise un plan comptable de départ selon son type d'activité. Le teneur de comptes le met au propre : il ajoute les comptes que l'entreprise utilise vraiment, renomme ceux qui sont vagues et garde les mêmes noms chaque mois. Une association peut ajouter des comptes comme Dons, Subventions et Fournitures de programme.",
            "Dans la version d'essai, cherchez \"chart of accounts\" (plan comptable) pour ouvrir la liste et voir le type de chaque compte."
          ],
          steps: ["Ouvrez le plan comptable (cherchez-le si vous ne le trouvez pas).", "Lisez le type de chaque compte : produit, charge, actif, passif ou capitaux propres.", "Ajoutez les comptes que l'entreprise utilise vraiment.", "Renommez les comptes vagues pour que tout le monde les comprenne.", "Utilisez toujours le même compte pour le même genre d'argent."],
          words: [["Plan comptable", "la liste de tous les comptes dans lesquels l'argent peut être classé."], ["Actif", "ce que l'entreprise possède ou ce qu'on lui doit, comme l'argent en banque ou le matériel."], ["Passif", "l'argent que l'entreprise doit, comme un prêt ou une facture impayée."], ["Capitaux propres", "la part du propriétaire dans l'entreprise."], ["Créances clients (A/R)", "l'argent que les clients doivent à l'entreprise (accounts receivable en anglais)."], ["Dettes fournisseurs (A/P)", "l'argent que l'entreprise doit aux fournisseurs pour des factures pas encore payées (accounts payable en anglais)."], ["Partie double", "chaque écriture change au moins deux comptes pour que les comptes restent équilibrés."]],
          slides: [
            { title: "Cinq types de comptes", bullets: ["Produits et charges", "Actifs et passifs", "Capitaux propres : la part du propriétaire"] },
            { title: "Chaque écriture a deux côtés", bullets: ["Facture : produits en hausse, A/R en hausse", "Paiement : A/R en baisse, banque en hausse", "Le bon formulaire fait faire les deux à QuickBooks"] },
            { title: "Mettre la liste au propre", bullets: ["Ajouter les comptes que l'entreprise utilise", "Renommer les comptes vagues", "Même compte pour le même genre d'argent"] },
            { title: "Exemple d'une association", bullets: ["Produits : Dons, Subventions", "Charges : Fournitures de programme, Loyer"] }
          ],
          tryIt: "Sur papier, faites deux colonnes : Élément et Type de compte. Classez ces dix éléments : des produits de nettoyage, l'argent sur le compte courant de l'entreprise, un client qui doit 150 $, un prêt pour un camion, les ventes de services de nettoyage, le propriétaire qui apporte 500 $ pour démarrer, le loyer, le solde d'une carte de crédit, une subvention reçue (pour une association) et un nouvel aspirateur. Ouvrez ensuite le plan comptable dans la version d'essai et comparez avec la façon dont l'entreprise exemple classe des éléments semblables.",
          youCanNow: "classer les mouvements d'argent dans des comptes de produits, de charges, d'actif, de passif et de capitaux propres.",
          quickCheck: [
            { objective: "O2", q: "Une entreprise doit 3 000 $ sur un prêt pour un camion. Quel type de compte est ce prêt ?", options: ["Passif", "Produit", "Charge", "Capitaux propres"], answer: 0, why: "L'argent que l'entreprise doit est un passif." },
            { objective: "O2", q: "L'argent que les clients doivent encore à l'entreprise est suivi dans :", options: ["Les dettes fournisseurs", "La charge de loyer", "Les créances clients", "Les capitaux propres du propriétaire"], answer: 2, why: "Les créances clients (A/R) sont l'argent que les clients doivent." }
          ]
        },
        {
          title: "Factures, reçus de vente et paiements des clients",
          objectives: ["O3"],
          minutes: 6,
          goal: "Enregistrer une facture, un reçu de vente et un paiement de client dans QuickBooks.",
          text: [
            "Utilisez une facture quand le client paie plus tard. La facture indique le client, la date, les produits ou services, le montant et la date d'échéance. Utilisez un reçu de vente quand le client paie au moment de la vente, comme une vente dans un food truck. Les deux enregistrent un produit ; seule la facture crée de l'argent dû (créances clients).",
            "Quand une facture est payée, enregistrez le paiement sur cette facture. Ne créez pas une nouvelle vente, sinon le produit sera compté deux fois. QuickBooks marque alors la facture comme payée. Si le client a payé en espèces ou par chèque, QuickBooks peut garder le paiement en attente jusqu'à ce que vous enregistriez le dépôt en banque, pour que le dépôt corresponde à ce que montre la banque.",
            "Créez chaque client une seule fois, avec son nom et ses coordonnées, et chaque produit ou service une seule fois, avec son prix et son compte de produits. Ensuite, chaque facture utilise les mêmes comptes.",
            "Dans QuickBooks Online, les nouveaux formulaires comme les factures, les reçus de vente et les paiements partent du bouton New (+) (Nouveau). Dans la version d'essai, rien n'est enregistré, donc notez ce que vous avez saisi."
          ],
          steps: ["Choisissez le formulaire : facture (paiement plus tard) ou reçu de vente (payé tout de suite).", "Choisissez le client, ou ajoutez-en un nouveau.", "Saisissez la date, le produit ou le service, le montant et la date d'échéance.", "Enregistrez le formulaire.", "Quand le client paie une facture, enregistrez le paiement sur cette facture.", "Enregistrez le dépôt en banque si QuickBooks garde le paiement pour un dépôt plus tard.", "Vérifiez que la facture apparaît maintenant comme payée."],
          words: [["Facture", "un document que vous envoyez à un client qui paiera plus tard."], ["Reçu de vente", "la trace d'une vente payée au moment de la vente."], ["Paiement du client", "la trace qu'un client a payé une facture."], ["Dépôt", "l'argent versé à la banque, qui doit correspondre au relevé bancaire."]],
          slides: [
            { title: "Facture ou reçu de vente ?", bullets: ["Facture : le client paie plus tard", "Reçu de vente : payé au moment de la vente", "Seule la facture crée des A/R"] },
            { title: "Enregistrer le paiement sur la facture", bullets: ["Ne jamais créer une deuxième vente pour ça", "Sinon le produit est compté deux fois", "La facture apparaît alors comme payée"] },
            { title: "Créer une fois, utiliser à chaque fois", bullets: ["Clients avec leurs coordonnées", "Produits et services avec prix et compte de produits"] },
            { title: "Les dépôts correspondent à la banque", bullets: ["Espèces et chèques peuvent attendre d'être déposés", "Enregistrez le dépôt pour qu'il corresponde au relevé"] }
          ],
          sources: [TESTDRIVE],
          tryIt: "Ouvrez la version d'essai de QuickBooks Online (lien dans les sources ; ouvrez-la dans une fenêtre de navigation privée). Créez une facture de 250 $ pour des services d'entretien de jardin à un client exemple, payable dans 30 jours. Recevez ensuite un paiement pour cette facture et vérifiez qu'elle apparaît comme payée. Notez sur papier le client, la date, le montant et le compte de produits, car la version d'essai n'enregistre rien. Pas d'ordinateur ? Dessinez la facture et le paiement sur papier.",
          youCanNow: "enregistrer une facture, un reçu de vente et un paiement de client pour que le produit soit compté une seule fois.",
          quickCheck: [
            { objective: "O3", q: "Le client d'un food truck paie au guichet. Quel formulaire utilisez-vous ?", options: ["Facture", "Facture fournisseur", "Bon de commande", "Reçu de vente"], answer: 3, why: "Un reçu de vente enregistre une vente payée au moment de la vente." },
            { objective: "O3", q: "Un client paie une facture de 250 $. Qu'enregistrez-vous ?", options: ["Un nouveau reçu de vente de 250 $", "Un paiement sur cette facture", "Une facture fournisseur de 250 $", "Rien ; QuickBooks le sait"], answer: 1, why: "Enregistrer le paiement sur la facture la clôt sans compter le produit deux fois." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Mettre en place et enregistrer les ventes",
        questions: [
          { objective: "O1", q: "Quelle phrase sur ce cours est vraie ?", options: ["Il vous prépare ; c'est l'examen officiel qui donne la certification", "Il donne la certification QuickBooks Certified User", "Il fait de vous un CPA", "Il remplace un préparateur de déclarations d'impôts"], answer: 0, why: "Le cours vous prépare ; Certiport organise l'examen qui donne la certification." },
          { objective: "O2", q: "Le loyer payé pour la boutique est quel type de compte ?", options: ["Actif", "Passif", "Charge", "Produit"], answer: 2, why: "Le loyer est un coût de fonctionnement de l'entreprise, donc c'est une charge." },
          { objective: "O2", q: "Le propriétaire met 500 $ de son propre argent dans l'entreprise. Cela va dans :", options: ["Les produits des ventes", "Les capitaux propres", "Les dettes fournisseurs", "La charge de fournitures"], answer: 1, why: "L'argent que le propriétaire apporte fait partie de ses capitaux propres, pas des produits." },
          { objective: "O3", q: "Un client de nettoyage paiera dans 30 jours. Quel formulaire créez-vous ?", options: ["Un reçu de vente", "Une facture fournisseur", "Un dépôt", "Une facture"], answer: 3, why: "Une facture sert pour un client qui paie plus tard." },
          { objective: "O3", q: "Un teneur de comptes a créé une nouvelle vente pour le paiement d'un client au lieu d'enregistrer le paiement sur la facture. Quel est le problème ?", options: ["Le produit est compté deux fois et la facture reste ouverte", "Il n'y a aucun problème", "Le solde bancaire baisse", "Le client paie des frais"], answer: 0, why: "La facture et la nouvelle vente comptent toutes les deux comme produit, et la facture semble toujours impayée." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Factures fournisseurs, banque et fin de mois",
      lessons: [
        {
          title: "Factures fournisseurs, dépenses et fournisseurs",
          objectives: ["O4"],
          minutes: 6,
          goal: "Saisir une facture fournisseur, une dépense et un paiement de facture avec le bon fournisseur et le bon compte.",
          text: [
            "Un fournisseur est toute personne ou entreprise chez qui l'entreprise achète : le magasin de fournitures, le propriétaire du local, l'opérateur téléphonique. Créez chaque fournisseur une seule fois.",
            "Utilisez une facture fournisseur (bill) quand l'entreprise paiera plus tard, par exemple une facture d'un fournisseur payable dans 30 jours. Elle va dans les dettes fournisseurs. Quand vous la payez, enregistrez un paiement de facture sur cette facture pour qu'elle ne soit pas comptée deux fois. Utilisez une dépense (expense) quand l'entreprise paie tout de suite, comme un achat par carte à la quincaillerie.",
            "Choisissez le compte de charges qui correspond à l'achat : Fournitures, Carburant, Loyer, Téléphone. Joignez une photo du reçu dans QuickBooks, ou notez le numéro du reçu dans le mémo. Les reçus justifient chaque dépense si quelqu'un pose la question plus tard.",
            "Si l'entreprise paie des prestataires indépendants, demandez à chacun un formulaire W-9 avant de le payer et marquez-le comme prestataire, car certaines entreprises doivent déclarer ces paiements au fisc américain. Les règles et les montants changent, donc consultez irs.gov ou un professionnel de l'impôt."
          ],
          steps: ["Choisissez le fournisseur, ou ajoutez-en un nouveau.", "Choisissez facture fournisseur (paiement plus tard) ou dépense (payée tout de suite).", "Saisissez la date, le montant et le compte de charges qui correspond.", "Joignez le reçu ou notez son numéro.", "Quand vous payez une facture fournisseur, enregistrez un paiement de facture sur cette facture.", "Vérifiez que la facture fournisseur apparaît maintenant comme payée."],
          words: [["Fournisseur", "une personne ou une entreprise chez qui l'entreprise achète."], ["Facture fournisseur", "la trace d'un achat que l'entreprise paiera plus tard (bill en anglais)."], ["Dépense", "la trace d'un achat que l'entreprise a payé tout de suite (expense en anglais)."], ["Paiement de facture", "la trace qu'une facture fournisseur a été payée."], ["Formulaire W-9", "un formulaire de l'IRS qu'un prestataire remplit avec son nom et son numéro fiscal pour les registres de l'entreprise."]],
          slides: [
            { title: "Facture fournisseur ou dépense ?", bullets: ["Facture fournisseur : paiement plus tard, va dans les A/P", "Dépense : payée tout de suite", "Payez une facture avec un paiement de facture, pas une nouvelle dépense"] },
            { title: "Choisir le bon compte", bullets: ["Fournitures, Carburant, Loyer, Téléphone", "Toujours le même compte"] },
            { title: "Une preuve pour chaque dépense", bullets: ["Joignez une photo du reçu", "Ou notez le numéro du reçu dans le mémo"] },
            { title: "Payer des prestataires", bullets: ["Obtenez un W-9 avant de payer", "Marquez-les comme prestataires", "Consultez irs.gov pour les règles de déclaration à jour"] }
          ],
          sources: [{ name: "IRS : À propos du formulaire W-9 (en anglais)", url: "https://www.irs.gov/forms-pubs/about-form-w-9" }, TESTDRIVE],
          tryIt: "Dans la version d'essai ou sur papier, saisissez trois éléments : une facture de fournitures de 120 $ payable dans 30 jours, un achat de carburant de 45 $ payé par carte aujourd'hui, et le paiement de la facture de 120 $ deux semaines plus tard. Pour chacun, notez le fournisseur, le formulaire utilisé, le compte et le montant. Expliquez ensuite en une phrase pourquoi le paiement de la facture n'est pas une nouvelle dépense.",
          youCanNow: "saisir des factures fournisseurs, des dépenses et des paiements de factures avec le bon fournisseur, le bon compte et le reçu.",
          quickCheck: [
            { objective: "O4", q: "Un fournisseur envoie une facture payable dans 30 jours. Que saisissez-vous aujourd'hui ?", options: ["Une dépense", "Une facture fournisseur", "Une facture client", "Un reçu de vente"], answer: 1, why: "Une facture fournisseur enregistre un achat que l'entreprise paiera plus tard." },
            { objective: "O4", q: "Vous payez cette facture deux semaines plus tard. Qu'enregistrez-vous ?", options: ["Une nouvelle dépense du même montant", "Un dépôt", "Un paiement de facture sur cette facture", "Rien"], answer: 2, why: "Un paiement de facture clôt la facture sans compter le coût deux fois." }
          ]
        },
        {
          title: "Le flux bancaire et le rapprochement bancaire",
          objectives: ["O5"],
          minutes: 6,
          goal: "Pointer les lignes du flux bancaire avec les écritures et rapprocher le compte bancaire jusqu'à un écart de zéro.",
          text: [
            "QuickBooks peut se connecter à la banque de l'entreprise et télécharger ses opérations. C'est le flux bancaire. Chaque ligne téléchargée attend que vous la vérifiiez. Si vous l'avez déjà saisie, associez-la à cette écriture. Sinon, ajoutez-la avec le bon bénéficiaire et le bon compte. N'ajoutez jamais une ligne déjà saisie, sinon elle sera comptée deux fois. C'est le propriétaire de l'entreprise qui connecte la banque ; un teneur de comptes ne demande jamais le mot de passe bancaire du propriétaire.",
            "Un rapprochement bancaire prouve que QuickBooks est d'accord avec le relevé bancaire. Une fois par mois, prenez le relevé, saisissez son solde final et sa date, et cochez dans QuickBooks chaque dépôt et chaque paiement qui figure sur le relevé. Quand l'écart est de zéro, terminez le rapprochement.",
            "Si l'écart n'est pas de zéro, cherchez les causes habituelles : des frais bancaires ou des intérêts pas saisis, une écriture tapée avec un mauvais montant, un doublon, ou une écriture dans le mauvais mois. Les chèques pas encore encaissés restent non cochés ; ils passeront le mois prochain.",
            "Ne forcez jamais un rapprochement à zéro en inventant une écriture. Si vous ne trouvez pas le problème, écrivez une note et demandez au propriétaire ou à un comptable."
          ],
          steps: ["Vérifiez chaque nouvelle ligne du flux bancaire.", "Associez-la à une écriture existante, ou ajoutez-la avec le bon bénéficiaire et le bon compte.", "Prenez le relevé bancaire du mois.", "Commencez un rapprochement et saisissez la date et le solde de fin du relevé.", "Cochez chaque écriture qui figure sur le relevé.", "Trouvez et corrigez ce qui empêche l'écart d'arriver à zéro.", "Terminez quand l'écart est de zéro, ou écrivez une note et demandez de l'aide."],
          words: [["Flux bancaire", "les opérations bancaires que QuickBooks télécharge pour que vous les vérifiiez (bank feed en anglais)."], ["Pointer", "relier une ligne bancaire téléchargée à une écriture déjà dans QuickBooks (match en anglais)."], ["Rapprocher", "vérifier, ligne par ligne, que vos registres sont d'accord avec le relevé bancaire."], ["Écart", "la différence entre QuickBooks et le relevé bancaire pendant un rapprochement ; il doit être de zéro."], ["Chèque non encaissé", "un chèque que vous avez fait et que la banque n'a pas encore payé."]],
          slides: [
            { title: "Vérifier le flux bancaire", bullets: ["Déjà saisi ? Pointez-le", "Pas saisi ? Ajoutez-le avec le bon compte", "N'ajoutez jamais une ligne deux fois"] },
            { title: "Rapprocher une fois par mois", bullets: ["Saisissez la date et le solde de fin du relevé", "Cochez chaque ligne du relevé", "Terminez avec un écart de zéro"] },
            { title: "Quand ça ne tombe pas juste", bullets: ["Frais ou intérêts manquants", "Mauvais montant, doublon ou mauvais mois", "Les chèques non encaissés attendent le mois suivant"] },
            { title: "Restez honnête et prudent", bullets: ["Ne forcez jamais avec une écriture inventée", "Écrivez une note et demandez de l'aide", "Ne demandez jamais le mot de passe bancaire du propriétaire"] }
          ],
          sources: [TESTDRIVE],
          tryIt: "Faites un relevé d'entraînement sur papier : solde de départ 1 000 $ ; dépôts de 250 $ et 400 $ ; paiements de 120 $, 45 $ et 60 $ ; des frais bancaires de 5 $ ; solde final 1 420 $. Vos registres ont toutes les lignes sauf les frais bancaires, plus un chèque de 75 $ pas encore encaissé. Cochez les lignes qui correspondent, trouvez ce qui empêche l'écart d'arriver à zéro, et notez ce que vous saisiriez. Dans la version d'essai, ouvrez la page de la banque et regardez comment les lignes téléchargées attendent d'être pointées ou ajoutées.",
          youCanNow: "pointer le flux bancaire et rapprocher un compte bancaire jusqu'à un écart de zéro, ou noter ce qui ne correspond pas encore.",
          quickCheck: [
            { objective: "O5", q: "Une ligne du flux bancaire est un paiement que vous avez déjà saisi comme paiement de facture. Que faites-vous ?", options: ["La pointer avec ce paiement de facture", "L'ajouter comme nouvelle dépense", "Supprimer la facture fournisseur", "L'ignorer pour toujours"], answer: 0, why: "Pointer relie la ligne bancaire à votre écriture sans la compter deux fois." },
            { objective: "O5", q: "Votre rapprochement a un écart de 5 $, et le relevé montre des frais bancaires de 5 $. Quelle est la meilleure étape ?", options: ["Inventer une écriture de n'importe quel montant", "Sauter le rapprochement ce mois-ci", "Changer le solde du relevé", "Saisir les frais bancaires de 5 $ comme dépense"], answer: 3, why: "Des frais bancaires oubliés sont une cause fréquente ; les saisir corrige l'écart honnêtement." }
          ]
        },
        {
          title: "Les rapports et la clôture de fin de mois",
          objectives: ["O6"],
          minutes: 6,
          goal: "Sortir et expliquer le compte de résultat, le bilan et le rapport des factures clients ouvertes.",
          text: [
            "Le compte de résultat (profit and loss ou P&L en anglais) montre les produits moins les charges sur une période, par exemple un mois. Si les produits sont plus grands, l'entreprise a fait un bénéfice ; si les charges sont plus grandes, elle a fait une perte. Le bilan (balance sheet) montre, à une date, ce que l'entreprise a (actifs), ce qu'elle doit (passifs) et la part du propriétaire (capitaux propres).",
            "Le rapport d'ancienneté des créances clients (A/R aging) montre quels clients doivent encore de l'argent et depuis combien de temps ils sont en retard. Le rapport d'ancienneté des dettes fournisseurs (A/P aging) montre quelles factures l'entreprise doit encore. Ces deux rapports disent au propriétaire qui appeler et quoi payer ensuite.",
            "La clôture de fin de mois est la liste de contrôle que le teneur de comptes suit chaque mois : toutes les ventes, les paiements, les factures fournisseurs et les dépenses saisis ; le flux bancaire vérifié ; chaque compte bancaire et chaque carte de crédit rapprochés ; les reçus joints ; les rapports sortis et envoyés au propriétaire avec une courte note. Les associations peuvent aussi sortir des rapports par programme ou par subvention.",
            "Sortez les rapports depuis l'espace Reports (Rapports) ; cherchez le rapport par son nom. Un rapport ne vaut que ce que valent les écritures derrière lui, donc rapprochez d'abord."
          ],
          steps: ["Finissez de saisir les ventes, les paiements, les factures fournisseurs et les dépenses du mois.", "Vérifiez le flux bancaire et rapprochez chaque compte bancaire et chaque carte.", "Sortez le compte de résultat du mois.", "Sortez le bilan au dernier jour du mois.", "Sortez le rapport d'ancienneté des créances clients.", "Écrivez une courte note au propriétaire : bénéfice ou perte, qui doit de l'argent et les factures à payer bientôt."],
          words: [["Compte de résultat (P&L)", "un rapport des produits moins les charges sur une période ; on l'appelle aussi état des résultats."], ["Bilan", "un rapport des actifs, des passifs et des capitaux propres à une date."], ["Rapport d'ancienneté", "un rapport de l'argent dû, classé selon le nombre de jours de retard (aging report en anglais)."], ["Clôture de fin de mois", "la liste de contrôle qui termine les comptes d'un mois."]],
          slides: [
            { title: "Compte de résultat", bullets: ["Produits moins charges sur une période", "Bénéfice ou perte du mois"] },
            { title: "Bilan", bullets: ["À une date", "Actifs, passifs et capitaux propres"] },
            { title: "Qui doit quoi", bullets: ["Ancienneté A/R : les clients qui doivent à l'entreprise", "Ancienneté A/P : les factures que l'entreprise doit"] },
            { title: "Liste de fin de mois", bullets: ["Tout saisi, flux bancaire vérifié", "Chaque compte bancaire et chaque carte rapprochés", "Rapports sortis, courte note au propriétaire"] }
          ],
          sources: [TESTDRIVE],
          tryIt: "Dans la version d'essai, sortez le compte de résultat du mois dernier et le rapport d'ancienneté des créances clients. Écrivez trois phrases pour le propriétaire : le total des produits et le total des charges du mois, s'il y a eu un bénéfice ou une perte, et quel client doit le plus. Pas d'ordinateur ? Utilisez votre travail des leçons précédentes et écrivez la même note sur papier.",
          youCanNow: "sortir les principaux rapports, les expliquer à un propriétaire et clôturer un mois.",
          quickCheck: [
            { objective: "O6", q: "Quel rapport montre si l'entreprise a gagné de l'argent le mois dernier ?", options: ["Le bilan", "Le compte de résultat", "La liste des fournisseurs", "Le plan comptable"], answer: 1, why: "Le compte de résultat montre les produits moins les charges sur une période." },
            { objective: "O6", q: "Le propriétaire demande quels clients sont en retard de paiement. Quel rapport sortez-vous ?", options: ["L'ancienneté des dettes fournisseurs", "Le compte de résultat", "L'ancienneté des créances clients", "Le bilan"], answer: 2, why: "Le rapport d'ancienneté des créances clients liste les clients qui doivent de l'argent et leur retard." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Factures fournisseurs, banque et fin de mois",
        questions: [
          { objective: "O4", q: "Vous avez payé 45 $ de carburant avec la carte de l'entreprise aujourd'hui. Quel formulaire convient ?", options: ["Une facture fournisseur", "Une facture client", "Une dépense", "Un reçu de vente"], answer: 2, why: "Une dépense enregistre un achat payé tout de suite." },
          { objective: "O4", q: "Avant de payer un nouveau prestataire, un teneur de comptes sérieux :", options: ["Demande un formulaire W-9 et consulte irs.gov pour les règles de déclaration", "Paie en espèces sans aucune trace", "Enregistre le paiement comme un produit", "Demande le mot de passe bancaire du prestataire"], answer: 0, why: "Le W-9 donne à l'entreprise les informations du prestataire pour ses registres et ses déclarations." },
          { objective: "O5", q: "Un rapprochement n'arrive pas à zéro et vous ne trouvez pas pourquoi. Que faites-vous ?", options: ["Ajouter une écriture inventée pour forcer", "Supprimer d'anciennes écritures", "Changer le solde du relevé", "Écrire une note et demander au propriétaire ou à un comptable"], answer: 3, why: "Forcer cache le vrai problème ; une note et une question gardent des comptes honnêtes." },
          { objective: "O5", q: "Un chèque de 75 $ que vous avez fait n'est pas sur le relevé de ce mois. Dans le rapprochement, vous :", options: ["Supprimez le chèque", "Le laissez non coché ; il devrait passer plus tard", "Le saisissez à nouveau", "Le marquez comme produit"], answer: 1, why: "Un chèque non encaissé reste non coché jusqu'à ce qu'il apparaisse sur un relevé." },
          { objective: "O6", q: "Le bilan montre :", options: ["Les actifs, les passifs et les capitaux propres à une date", "Seulement les ventes du mois dernier", "Le numéro de téléphone de chaque client", "Les lignes du flux bancaire"], answer: 0, why: "Le bilan est une photo des actifs, des passifs et des capitaux propres à une date." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : La tenue de comptes avec QuickBooks",
    questions: [
      { objective: "O1", q: "Quelle est une tâche principale d'un teneur de comptes QuickBooks ?", options: ["Donner des conseils juridiques", "Enregistrer les factures, les factures fournisseurs et les opérations bancaires", "Signer des audits en tant que CPA", "Choisir des placements pour le propriétaire"], answer: 1, why: "Enregistrer avec exactitude les ventes, les factures fournisseurs et les opérations bancaires est le cœur du métier." },
      { objective: "O1", q: "Où vérifier les détails et les frais à jour de l'examen QuickBooks Certified User ?", options: ["Une publication sur les réseaux sociaux", "Les vieilles notes d'un ami", "N'importe quel forum en ligne", "La page officielle de Certiport pour les certifications Intuit"], answer: 3, why: "Les frais et les détails des examens changent, donc la page officielle est l'endroit où vérifier." },
      { objective: "O1", q: "Un client vous demande comment payer moins d'impôts. En tant que teneur de comptes, vous :", options: ["L'envoyez vers un professionnel de l'impôt ou irs.gov", "Devinez une réponse", "Changez ses chiffres", "Lui dites que les impôts sont facultatifs"], answer: 0, why: "Un teneur de comptes tient les registres ; les conseils fiscaux viennent d'un professionnel de l'impôt ou de l'IRS." },
      { objective: "O2", q: "Un nouvel aspirateur qui appartient à l'entreprise de nettoyage est quel type de compte ?", options: ["Produit", "Charge", "Actif", "Passif"], answer: 2, why: "Le matériel que possède l'entreprise est un actif." },
      { objective: "O2", q: "Le solde de la carte de crédit de l'entreprise est :", options: ["Un passif", "Un actif", "Un produit", "Des capitaux propres"], answer: 0, why: "L'argent que l'entreprise doit sur une carte est un passif." },
      { objective: "O2", q: "Que veut dire la comptabilité en partie double ?", options: ["Vous tapez chaque écriture deux fois", "Deux personnes doivent approuver chaque écriture", "Seuls les produits sont enregistrés", "Chaque écriture change au moins deux comptes"], answer: 3, why: "Chaque écriture a deux côtés, ce qui garde les comptes équilibrés." },
      { objective: "O3", q: "Quand un teneur de comptes utilise-t-il une facture ?", options: ["Quand le client a payé au moment de la vente", "Quand le client paiera plus tard", "Quand l'entreprise achète des fournitures", "Quand la banque prend des frais"], answer: 1, why: "Une facture sert pour un client qui paie plus tard." },
      { objective: "O3", q: "Envoyer une facture de 200 $ augmente les produits et :", options: ["Les dettes fournisseurs", "Le solde bancaire", "Les créances clients", "La charge de loyer"], answer: 2, why: "Une facture crée de l'argent que le client doit : les créances clients." },
      { objective: "O3", q: "Un client paie une facture ouverte par chèque. Qu'enregistrez-vous ?", options: ["Un paiement sur cette facture, puis le dépôt en banque", "Un nouveau reçu de vente", "Une facture fournisseur", "Une nouvelle facture"], answer: 0, why: "Enregistrer le paiement sur la facture la clôt, et le dépôt correspond à la banque." },
      { objective: "O4", q: "Qui est un fournisseur ?", options: ["Un client qui doit de l'argent", "Le propriétaire de l'entreprise", "Une ligne du flux bancaire", "Une entreprise chez qui vous achetez, comme un magasin de fournitures"], answer: 3, why: "Un fournisseur est toute personne ou entreprise chez qui l'entreprise achète." },
      { objective: "O4", q: "La facture d'un fournisseur est payable dans 30 jours. Une fois saisie, elle va dans :", options: ["Les créances clients", "Les dettes fournisseurs", "Les produits des ventes", "Les capitaux propres du propriétaire"], answer: 1, why: "Les factures impayées sont de l'argent que l'entreprise doit : les dettes fournisseurs." },
      { objective: "O4", q: "Qu'est-ce qui justifie chaque dépense si quelqu'un pose la question plus tard ?", options: ["Une estimation du montant", "Le numéro de téléphone du fournisseur", "Un reçu joint ou son numéro noté", "La mémoire du propriétaire"], answer: 2, why: "Les reçus sont la preuve derrière chaque dépense." },
      { objective: "O5", q: "Qu'est-ce que le flux bancaire ?", options: ["Les opérations bancaires que QuickBooks télécharge pour que vous les vérifiiez", "Des frais pris par la banque", "Une liste de clients", "Le mot de passe bancaire du propriétaire"], answer: 0, why: "Le flux bancaire fait entrer les lignes de la banque pour les pointer ou les ajouter." },
      { objective: "O5", q: "Un rapprochement est terminé quand :", options: ["Vous avez coché la moitié des lignes", "Le propriétaire est content", "Le mois est fini", "L'écart est de zéro"], answer: 3, why: "Un écart de zéro montre que QuickBooks est d'accord avec le relevé." },
      { objective: "O5", q: "Une ligne bancaire téléchargée est déjà saisie dans QuickBooks. L'ajouter à nouveau va :", options: ["Corriger le rapprochement", "La compter deux fois", "Clôturer le mois", "Payer le fournisseur"], answer: 1, why: "Ajouter à nouveau une ligne déjà saisie crée un doublon ; pointez-la plutôt." },
      { objective: "O6", q: "Les produits du mois sont de 4 000 $ et les charges de 3 100 $. Le compte de résultat montre :", options: ["Une perte de 900 $", "Un bénéfice de 7 100 $", "Un bénéfice de 900 $", "Aucun changement"], answer: 2, why: "Produits moins charges : 4 000 $ moins 3 100 $ donne un bénéfice de 900 $." },
      { objective: "O6", q: "Avant de sortir les rapports de fin de mois, un teneur de comptes doit d'abord :", options: ["Rapprocher chaque compte bancaire et chaque carte", "Supprimer les anciennes factures", "Envoyer les rapports sans vérifier", "Changer le plan comptable"], answer: 0, why: "Un rapport ne vaut que ce que valent les écritures derrière lui, donc rapprochez d'abord." },
      { objective: "O6", q: "Quel rapport montre les factures que l'entreprise doit encore ?", options: ["Le compte de résultat", "L'ancienneté des créances clients", "Le plan comptable", "L'ancienneté des dettes fournisseurs"], answer: 3, why: "Le rapport d'ancienneté des dettes fournisseurs liste les factures impayées et depuis combien de temps elles sont ouvertes." },
      { objective: "O2", q: "Pourquoi un teneur de comptes doit-il toujours utiliser le même compte pour le même genre de coût ?", options: ["QuickBooks fait payer les nouveaux comptes", "Pour que les rapports se comparent correctement d'un mois à l'autre", "Parce qu'on ne peut pas renommer les comptes", "Pour arrêter le flux bancaire"], answer: 1, why: "Des comptes constants rendent les rapports exacts et comparables." },
      { objective: "O5", q: "Un client vous propose son mot de passe de banque en ligne pour que vous connectiez le flux bancaire. Que faites-vous ?", options: ["L'accepter et l'enregistrer dans une note", "Vous l'envoyer par SMS", "Refuser ; le propriétaire connecte la banque ou vous donne votre propre accès utilisateur", "Le mettre dans le dossier partagé"], answer: 2, why: "Un teneur de comptes ne prend jamais le mot de passe bancaire du propriétaire ; le propriétaire connecte la banque ou vous ajoute comme utilisateur." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  // test de départ : ces questions du quiz, faites avant la leçon 1, pour que le quiz montre les progrès de chaque apprenant
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 5, 6, 9, 12, 13, 15, 17] },
  rubric: {
    mastery: "Atteint ou Dépasse sur toutes les lignes. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Plan comptable", objective: "O2", notYet: "Moins de 12 comptes, ou plusieurs ont le mauvais type.", meets: "Au moins 12 comptes, chacun avec le bon type et un nom clair.", exceeds: "Explique aussi pourquoi chaque compte est utile pour cette entreprise, y compris les comptes propres à une association ou à un secteur." },
      { name: "Ventes et paiements", objective: "O3", notYet: "Un paiement a été enregistré comme une nouvelle vente, ou une facture n'a pas de client, de date ou de montant.", meets: "Au moins 3 factures et 2 paiements, chacun avec le client, la date, le montant et le compte de produits ; les factures payées apparaissent comme payées.", exceeds: "Enregistre aussi le dépôt en banque de chaque paiement et note quelles factures sont encore ouvertes." },
      { name: "Factures fournisseurs et dépenses", objective: "O4", notYet: "Une facture fournisseur a été payée par une nouvelle dépense, ou des écritures n'ont pas de compte ou de reçu.", meets: "Au moins 4 factures fournisseurs ou dépenses avec le fournisseur, la date, le montant, le compte et le reçu noté.", exceeds: "Montre aussi un paiement de facture et un prestataire créé avec une note sur le W-9." },
      { name: "Rapprochement bancaire", objective: "O5", notYet: "Pas de rapprochement, ou il a été forcé à zéro avec une écriture inventée.", meets: "Le rapprochement se termine avec un écart de zéro, ou a une note honnête sur ce qui ne correspond pas encore.", exceeds: "Liste aussi la cause de chaque écart (frais, faute de frappe, doublon, chèque non encaissé) et comment il a été corrigé." },
      { name: "Résumé des rapports", objective: "O6", notYet: "Le résumé n'indique pas le bénéfice ou la perte, ou les chiffres ne correspondent pas aux écritures.", meets: "Indique le total des produits, le total des charges et le bénéfice ou la perte, et qui doit encore de l'argent.", exceeds: "Cite aussi les factures à payer bientôt et une action que le propriétaire pourrait mener." },
      { name: "Plan de certification", objective: "O1", notYet: "Aucune certification citée, ou pas de dates.", meets: "Cite une certification Intuit, la page officielle à consulter et des dates pour la consulter et pour les tests d'entraînement.", exceeds: "Liste aussi trois employeurs ou clients à contacter et une date pour contacter chacun." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille d'évaluation)",
      "Apprenants qui passent un examen de certification Intuit QuickBooks ou de tenue de comptes dans les 90 jours (enquête de suivi)",
      "Apprenants qui obtiennent un emploi de teneur de comptes, un poste de bureau qui utilise QuickBooks ou un client payant pour la tenue de comptes dans les 6 mois",
      "Propriétaires de petites entreprises et associations du cours qui rapprochent leurs propres comptes chaque mois (suivi à 30 jours)"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un ordinateur ou une tablette avec un navigateur web pour la version d'essai gratuite de QuickBooks Online (ouverte dans une fenêtre privée) ; un écran de téléphone est trop petit pour la plupart des exercices",
      "Du papier, un stylo et une calculatrice pour les notes \"Essayez maintenant\", car la version d'essai n'enregistre rien",
      "Des copies imprimées du relevé bancaire d'entraînement et de la liste d'opérations pour les groupes sans ordinateur",
      "Environ 75 à 90 minutes au total, en courtes séances : leçons, exercices, contrôles et tâche finale"
    ],
    facilitatorNotes: [
      "En salle informatique ou en classe : faites le test de départ ensemble, puis un chapitre par séance avec la version d'essai ouverte sur chaque écran.",
      "La version d'essai se remet à zéro et n'enregistre rien ; rappelez aux apprenants de noter chaque écriture pour la tâche finale.",
      "Les écrans et les noms des menus changent ; si un apprenant ne trouve pas quelque chose, montrez-lui la case de recherche plutôt qu'un chemin de menu fixe.",
      "Ne laissez jamais les apprenants taper de vrais identifiants bancaires, numéros de compte ou données de clients pendant les exercices ; utilisez l'entreprise exemple ou des chiffres inventés.",
      "Notez la tâche finale avec la grille d'évaluation et donnez un retour sur une ligne Pas encore à la fois.",
      "Avant que les apprenants planifient une certification, demandez-leur d'ouvrir eux-mêmes les pages officielles de Certiport et d'Intuit Academy pour vérifier les frais et les conditions à jour."
    ]
  }
};
