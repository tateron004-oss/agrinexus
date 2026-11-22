"use strict";

// Koach Learn course (French translation of shared/insurance-license-prep.js). See scripts/koachlearn-courses/README.md, "Translations".
// US names (NAIC, NIPR, Sircon, Pearson VUE, TDI, 18 U.S.C. 1033) and US license line names are kept, with a short explanation the first time.

const SRC = {
  naicDepts: { name: "NAIC : Trouver le département des assurances de votre État", url: "https://content.naic.org/state-insurance-departments" },
  nipr: { name: "NIPR : National Insurance Producer Registry (demander et renouveler une licence d'agent)", url: "https://nipr.com/" },
  tdiAgent: { name: "Texas Department of Insurance : Licences d'agent", url: "https://www.tdi.texas.gov/agent/index.html" },
  tdiLifeApply: { name: "Texas Department of Insurance : Comment demander une licence générale vie, accident, santé et HMO", url: "https://www.tdi.texas.gov/agent/general-life-apply.html" },
  usc1033: { name: "18 U.S.C. 1033 (Cornell Legal Information Institute)", url: "https://www.law.cornell.edu/uscode/text/18/1033" },
  naicUtpa: { name: "Loi type 880 de la NAIC : Unfair Trade Practices Act (pratiques commerciales déloyales)", url: "https://content.naic.org/sites/default/files/model-law-880.pdf" }
};

module.exports = {
  id: "insurance-license-prep-fr",
  lang: "fr",
  translationOf: "insurance-license-prep",
  category: "Workforce Development",
  name: "Préparation à l'examen de licence d'agent d'assurance",
  skills: "Choisir une branche de licence, Trouver les étapes de licence de votre État, Expliquer les termes de l'assurance, Calculer des sinistres d'entraînement, Repérer les pratiques de vente malhonnêtes, Planifier l'examen",
  outcome: "vous préparer à l'examen de licence d'agent d'assurance de votre État : choisir la bonne branche de licence, trouver les étapes officielles et le programme d'examen de votre État, expliquer les termes de base, calculer des sinistres d'entraînement, repérer les pratiques de vente malhonnêtes et suivre un plan daté d'étude et d'examen.",
  about: [
    "Ce cours s'adresse aux adultes qui veulent vendre de l'assurance comme agent avec une licence, appelé aussi « producer » (producteur) : demandeurs d'emploi, personnes en reconversion, personnes qui sortent de prison, anciens militaires et personnes qui veulent ouvrir leur propre agence. Aux États-Unis, les agents d'assurance reçoivent leur licence de chaque État, pas du gouvernement fédéral.",
    "Vous allez apprendre les principales branches de licence, comment trouver les étapes et le programme d'examen de votre propre État, les mots et les idées de base que testent les examens, comment calculer des sinistres d'entraînement avec des franchises et des plafonds, et les règles d'éthique qui protègent les clients. À la fin, vous écrivez votre propre plan d'étude et d'examen avec de vraies dates.",
    "Ce cours vous PRÉPARE à l'examen. Il ne donne pas de licence et ne remplace pas une formation préalable que votre État peut exiger. Les conditions, les frais et les détails de l'examen sont fixés par le département des assurances de votre État et peuvent changer : chaque leçon vous envoie donc vers la page officielle. Rien ici n'est un conseil pour acheter une assurance ou un placement."
  ],
  finalTask: "Écrivez sur une page un plan d'étude et d'examen pour la licence d'assurance de votre État : (1) la branche de licence que vous allez obtenir et pourquoi ; (2) les étapes officielles de votre État dans l'ordre (formation préalable si elle est exigée, examen et centre d'examen, empreintes digitales ou vérification des antécédents, demande, nomination), chacune avec son adresse web officielle ; (3) les sujets et leur poids tirés du programme d'examen de votre État ; (4) un calendrier d'étude par semaine avec des dates, une date cible d'examen et au moins deux dates d'examens blancs avec un objectif de score ; (5) trois sinistres d'entraînement calculés correctement et trois règles d'éthique dans vos propres mots.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des adultes aux États-Unis qui veulent un emploi d'agent d'assurance (producer) dans un centre d'appels, une banque, une agence ou une compagnie d'assurance, ou qui veulent ouvrir leur propre agence. Groupe varié : demandeurs d'emploi, personnes en reconversion, anciens militaires, personnes qui sortent de prison, immigrants et petits entrepreneurs.",
    startingPoint: "Ils ont déjà acheté une assurance auto, habitation ou santé, mais lisent rarement un contrat. Ils ne savent pas comment fonctionne la licence, quelle licence choisir ni quels mots sont utilisés à l'examen. Ils savent faire des calculs simples de pourcentage avec un peu d'aide.",
    gap: "Beaucoup de gens paient une formation préalable ou un examen sans savoir quelle licence convient à l'emploi, ce que leur État exige ou comment l'examen est construit, puis échouent ou abandonnent. Connaître le parcours, les termes de base, les calculs de sinistres et les règles d'éthique transforme un processus confus en un plan avec des dates, et mène à un emploi qui souvent ne demande pas de diplôme universitaire.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes (environ niveau fin de collège) ; chaque mot de l'examen est expliqué",
      "Appareils : un téléphone ou un ordinateur de bibliothèque ; papier, stylo et une calculatrice simple suffisent pour chaque activité",
      "Durée : leçons de 4 à 6 minutes",
      "La licence dépend de l'État : les étapes, les heures de formation préalable, les frais, le centre d'examen et la note de réussite varient, donc les apprenants vérifient la page officielle de leur État",
      "Vérification des antécédents : certains apprenants ont un casier judiciaire ; le cours explique la règle honnêtement et les envoie au département de leur État",
      "Aucun conseil sur l'assurance ou le placement que quelqu'un devrait acheter ; les exercices utilisent des chiffres inventés"
    ],
    prerequisites: "Aucun. Les apprenants qui veulent de l'aide pour les pourcentages peuvent d'abord suivre le cours « Les maths du quotidien »."
  },
  // ---- ADDIE : Conception ----
  objectives: [
    { id: "O1", condition: "Face à un emploi ou un produit d'assurance", action: "identifier la branche de licence et le rôle qui conviennent", standard: "en réussissant au moins 5 exemples sur 6" },
    { id: "O2", condition: "Pour votre propre État", action: "trouver les étapes officielles de la licence, le centre d'examen et le programme d'examen", standard: "en notant chaque étape avec son adresse web officielle" },
    { id: "O3", condition: "Face à une liste de mots et d'idées de l'examen", action: "expliquer avec des mots simples les termes de base de l'assurance et les principes du contrat", standard: "avec le bon sens pour au moins 8 sur 10" },
    { id: "O4", condition: "Face à un sinistre d'entraînement avec une franchise, une coassurance ou un plafond de garantie", action: "calculer combien paie l'assureur et combien paie l'assuré", standard: "au dollar près sur 3 sinistres d'entraînement" },
    { id: "O5", condition: "Face à une situation de vente ou de service", action: "repérer les pratiques malhonnêtes ou illégales et choisir l'action honnête", standard: "en réussissant au moins 4 situations sur 5" },
    { id: "O6", condition: "Avec les étapes officielles et le programme d'examen de votre État", action: "écrire un plan daté d'étude et d'examen pour votre examen de licence", standard: "couvrant chaque étape officielle, chaque sujet du programme et au moins deux dates d'examens blancs" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Votre parcours vers une licence d'assurance",
      lessons: [
        {
          title: "Ce que fait un agent et quelle branche de licence il vous faut",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choisir la branche de licence qui convient à l'emploi d'assurance que vous visez.",
          text: [
            "Un agent d'assurance, appelé « producer » dans la loi, vend, propose ou négocie de l'assurance pour des clients. Chaque État exige une licence pour le faire. Un agent exclusif vend pour une seule compagnie. Un agent indépendant vend pour plusieurs compagnies et dirige souvent une petite entreprise. Un agent doit aussi être nommé par chaque compagnie d'assurance pour laquelle il vend.",
            "Les États délivrent les licences par branche (« line of authority »). Les quatre grandes branches les plus courantes sont Vie, Accident et Santé (maladie), Biens (Property) et Responsabilité (Casualty). Beaucoup de gens commencent par Vie et Santé ensemble, ou par Biens et Responsabilité ensemble. Certains États proposent aussi une licence plus petite, « Personal Lines », pour l'assurance habitation et auto seulement.",
            "La branche Vie couvre le décès et certains contrats d'épargne à long terme. Accident et Santé couvre les frais médicaux, le revenu en cas d'invalidité et des frais semblables. Biens couvre les dommages à ce que vous possédez, comme une maison ou une voiture. Responsabilité couvre la responsabilité civile, c'est-à-dire l'argent que vous devez si vous blessez quelqu'un ou abîmez ses biens.",
            "D'autres emplois de l'assurance demandent une licence différente. Un expert en sinistres (« adjuster ») enquête sur les sinistres et les règle. La vente de certains produits de type placement, comme les rentes variables, demande aussi une licence de valeurs mobilières. Vérifiez la liste des types de licence de votre État avant de payer une formation."
          ],
          words: [["Producer", "le mot de la loi pour un agent ou un courtier d'assurance qui a une licence et vend de l'assurance."], ["Branche (line of authority)", "un type d'assurance que votre licence vous permet de vendre, comme Vie ou Biens."], ["Nomination (appointment)", "l'accord officiel d'une compagnie d'assurance pour que vous vendiez ses produits."], ["Responsabilité civile", "l'argent que vous devez légalement à quelqu'un si vous le blessez ou abîmez ses biens."], ["Expert en sinistres (adjuster)", "une personne qui enquête sur les sinistres et les règle ; en général une licence à part."]],
          slides: [
            { title: "Les agents sont des « producers »", bullets: ["Ils vendent, proposent ou négocient de l'assurance", "Chaque État exige une licence", "Chaque compagnie pour laquelle vous vendez doit vous nommer"] },
            { title: "Exclusif ou indépendant", bullets: ["Exclusif : vend pour une seule compagnie", "Indépendant : vend pour plusieurs compagnies, dirige souvent une entreprise"] },
            { title: "Les quatre grandes branches", bullets: ["Vie : paie quand quelqu'un meurt", "Accident et Santé : frais médicaux, invalidité", "Biens : dommages à vos biens", "Responsabilité : quand vous causez du tort à d'autres"] },
            { title: "Vérifiez avant de payer", bullets: ["Les experts en sinistres ont besoin d'une autre licence", "Les produits variables demandent aussi une licence de valeurs mobilières", "Trouvez d'abord la liste des types de licence de votre État"] }
          ],
          tryIt: "Écrivez trois emplois d'assurance auxquels vous pourriez postuler (par exemple agent de centre d'appels qui vend de l'assurance auto, employé de banque qui vend de l'assurance vie, ou votre propre agence). À côté de chacun, écrivez la ou les branches de licence qu'il demande.",
          youCanNow: "dire ce que fait un producer en assurance et choisir la branche de licence qui convient à un emploi.",
          quickCheck: [
            { objective: "O1", q: "Une offre d'emploi dit que vous vendrez de l'assurance auto et habitation. Quelles branches conviennent ?", options: ["Vie et Santé", "Biens et Responsabilité", "Valeurs mobilières seulement", "Expert en sinistres seulement"], answer: 1, why: "Les contrats auto et habitation couvrent les dommages aux biens et la responsabilité envers les autres : c'est Biens et Responsabilité." },
            { objective: "O1", q: "Qu'est-ce qu'un agent exclusif ?", options: ["Un agent qui vend pour une seule compagnie d'assurance", "Un agent sans licence", "Un agent qui ne fait que régler les sinistres", "Un agent qui travaille pour l'État"], answer: 0, why: "Un agent exclusif représente une seule compagnie ; un agent indépendant en représente plusieurs." }
          ]
        },
        {
          title: "Trouver les étapes officielles de la licence dans votre État",
          objectives: ["O2"],
          minutes: 6,
          goal: "Trouver sur les pages officielles les étapes de la licence, le centre d'examen et le programme d'examen de votre État.",
          text: [
            "Le département des assurances de votre État fixe les règles. Pour le trouver, utilisez la page de la NAIC (National Association of Insurance Commissioners, l'association des régulateurs d'assurance des États) qui donne le lien vers chaque département d'État. Cherchez les pages appelées « producer licensing », « agent licensing » ou « how to apply ».",
            "La plupart des États suivent un parcours semblable : une formation préalable (exigée dans beaucoup d'États, pas tous), un examen d'État organisé par un centre d'examen, des empreintes digitales ou une vérification des antécédents, une demande, puis une nomination par un assureur. Une fois la licence obtenue, vous la renouvelez et suivez une formation continue. Par exemple, quand nous avons vérifié en octobre 2026, le Texas faisait passer son examen par Pearson VUE, exigeait des empreintes digitales et acceptait les demandes par Sircon ou NIPR seulement après la réussite à l'examen.",
            "Le centre d'examen publie un guide du candidat et un programme d'examen pour votre État. Le programme liste chaque sujet et le nombre de questions de chacun. C'est votre outil d'étude le plus utile, et il est gratuit.",
            "Si vous avez un casier judiciaire, soyez honnête dans votre demande. Une loi fédérale (18 U.S.C. 1033) dit qu'une personne condamnée pour un crime grave (felony) lié à la malhonnêteté ou à un abus de confiance a besoin de l'accord écrit d'un régulateur des assurances pour travailler dans l'assurance. Le département de votre État explique comment le demander. Ne laissez pas un vendeur de formation vous dire que cela n'a pas d'importance."
          ],
          steps: ["Ouvrez la page de la NAIC sur les départements des assurances des États et choisissez votre État.", "Trouvez la page sur la licence d'agent (producer) et la liste des types de licence.", "Notez chaque étape : formation préalable, examen, empreintes digitales, demande, nomination.", "Trouvez le nom du centre d'examen et téléchargez le guide du candidat et le programme gratuits.", "Notez l'adresse web officielle de chaque étape et la date de votre vérification."],
          words: [["NAIC", "National Association of Insurance Commissioners : l'association des régulateurs d'assurance des États."], ["Formation préalable", "une formation que certains États exigent avant de pouvoir passer l'examen de licence."], ["Programme d'examen", "la liste des sujets de l'examen et le nombre de questions de chacun."], ["NIPR", "National Insurance Producer Registry : un site que beaucoup d'États utilisent pour les demandes et les renouvellements de licence."], ["Formation continue", "les cours que les agents avec licence doivent suivre pour renouveler leur licence."]],
          slides: [
            { title: "Partez de la source officielle", bullets: ["Le département des assurances de votre État fixe les règles", "Trouvez-le depuis la page des départements de la NAIC", "Cherchez la licence d'agent (producer licensing)"] },
            { title: "Le parcours habituel", bullets: ["Formation préalable (beaucoup d'États)", "Examen d'État avec un centre d'examen", "Empreintes digitales ou vérification des antécédents", "Demande, puis nomination par un assureur"] },
            { title: "Prenez le programme gratuit", bullets: ["Le centre d'examen publie un guide du candidat", "Le programme liste les sujets et le nombre de questions", "Étudiez en suivant le programme"] },
            { title: "Un casier n'est pas la fin", bullets: ["Soyez honnête dans votre demande", "Certains crimes graves exigent l'accord écrit d'un régulateur", "Demandez la marche à suivre au département de votre État"] }
          ],
          sources: [SRC.naicDepts, SRC.nipr, SRC.tdiAgent, SRC.tdiLifeApply, SRC.usc1033],
          tryIt: "Ouvrez la page de la NAIC, choisissez votre État et trouvez sa page sur la licence d'agent. Écrivez chaque étape dans l'ordre, le nom du centre d'examen et l'adresse web du programme d'examen.",
          youCanNow: "trouver les étapes officielles de la licence, le centre d'examen et le programme d'examen de votre État.",
          quickCheck: [
            { objective: "O2", q: "Où trouvez-vous les vraies étapes de la licence pour votre État ?", options: ["Une publication sur les réseaux sociaux", "Une publicité pour une formation préalable", "La page officielle du département des assurances de votre État", "Un ami qui a sa licence dans un autre État"], answer: 2, why: "Le département des assurances de chaque État fixe et publie ses propres règles de licence." },
            { objective: "O2", q: "Quel document gratuit vous dit quels sujets sont à l'examen de votre État ?", options: ["Une facture d'assurance auto", "Les conditions particulières d'un contrat", "Le prospectus d'un recruteur", "Le programme d'examen du centre d'examen"], answer: 3, why: "Le programme d'examen liste chaque sujet et le nombre de questions de chacun." }
          ]
        },
        {
          title: "Les termes de base et le fonctionnement d'un contrat d'assurance",
          objectives: ["O3"],
          minutes: 6,
          goal: "Expliquer dans vos propres mots les termes de base de l'assurance et les idées du contrat.",
          text: [
            "L'assurance fait passer un risque d'une personne à une compagnie d'assurance. L'assuré paie une prime. En échange, l'assureur promet de payer certaines pertes. Le contrat (la police) est l'accord écrit, et les conditions particulières (« declarations page ») indiquent qui et quoi est couvert, les plafonds et la prime.",
            "Les examens testent quelques grandes idées. L'intérêt assurable : vous devez risquer de perdre de l'argent si le sinistre arrive. L'indemnisation : l'assurance vous remet là où vous étiez, pas dans une meilleure situation. La plus grande bonne foi : les deux parties doivent être honnêtes, donc un mensonge dans la demande (fausse déclaration) peut annuler la garantie. La souscription : l'assureur étudie le risque et décide s'il l'accepte et à quel prix.",
            "Un contrat d'assurance est un contrat : il faut donc une offre et une acceptation, une contrepartie (la prime et la promesse), des parties capables et un but légal. C'est aussi un contrat d'adhésion : l'assureur l'écrit et le client l'accepte tel quel, donc une formulation peu claire est en général lue en faveur du client.",
            "Apprenez ces mots avec des fiches. Les examens donnent souvent une courte histoire et demandent quelle idée elle montre."
          ],
          words: [["Prime", "l'argent que l'assuré paie pour être couvert."], ["Intérêt assurable", "le fait de subir une vraie perte d'argent si l'événement assuré arrive."], ["Indemnisation", "le remboursement de la perte pour revenir là où vous étiez, pas dans une meilleure situation."], ["Souscription", "l'étude d'un risque pour décider s'il faut l'assurer et à quel prix."], ["Conditions particulières", "la page du contrat qui indique qui est couvert, ce qui est couvert, les plafonds et la prime."], ["Contrat d'adhésion", "un contrat écrit par une partie et accepté tel quel par l'autre."]],
          slides: [
            { title: "L'assurance déplace le risque", bullets: ["L'assuré paie une prime", "L'assureur promet de payer les pertes couvertes", "La police est le contrat"] },
            { title: "Les grandes idées de l'examen", bullets: ["Intérêt assurable : vous risquez de perdre de l'argent", "Indemnisation : revenir là où vous étiez", "Plus grande bonne foi : les deux parties honnêtes", "Souscription : décider si on assure et à quel prix"] },
            { title: "Une police est un contrat", bullets: ["Offre et acceptation, contrepartie", "Parties capables, but légal", "Adhésion : le texte peu clair favorise le client"] }
          ],
          tryIt: "Faites 10 fiches sur papier ou sur téléphone : d'un côté le mot (prime, intérêt assurable, indemnisation, souscription, conditions particulières, contrepartie, adhésion, fausse déclaration, assuré, assureur), de l'autre votre propre définition en une ligne. Testez-vous jusqu'à en réussir 8 sur 10.",
          youCanNow: "expliquer avec des mots simples les termes de base de l'assurance et les éléments d'un contrat d'assurance.",
          quickCheck: [
            { objective: "O3", q: "Un homme veut acheter une assurance incendie sur la maison d'un inconnu. Quelle idée l'en empêche ?", options: ["L'indemnisation", "La souscription", "La contrepartie", "L'intérêt assurable"], answer: 3, why: "Il ne perdrait pas d'argent si la maison de l'inconnu brûlait : il n'a donc pas d'intérêt assurable." },
            { objective: "O3", q: "Après un vol couvert, l'assureur paie la valeur du téléviseur volé, pas un téléviseur plus grand. Quelle idée est-ce ?", options: ["L'indemnisation", "L'adhésion", "La nomination", "La responsabilité civile"], answer: 0, why: "L'indemnisation remet l'assuré là où il était, pas dans une meilleure situation." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Votre parcours vers une licence d'assurance",
        questions: [
          { objective: "O1", q: "Vous allez vendre des assurances vie temporaires et des assurances de revenu en cas d'invalidité. Quelles branches conviennent ?", options: ["Biens et Responsabilité", "Vie et Accident et Santé", "Personal Lines seulement", "Expert en sinistres"], answer: 1, why: "L'assurance vie demande la branche Vie, et le revenu en cas d'invalidité relève d'Accident et Santé." },
          { objective: "O1", q: "À quoi sert la nomination par une compagnie d'assurance ?", options: ["Elle remplace l'examen d'État", "Elle donne une licence de valeurs mobilières", "Elle vous autorise officiellement à vendre les produits de cette compagnie", "Elle fixe les frais de licence de votre État"], answer: 2, why: "La licence vient de l'État ; chaque assureur vous nomme ensuite pour vendre pour lui." },
          { objective: "O2", q: "Qui délivre les licences d'agent d'assurance aux États-Unis ?", options: ["Le département des assurances de chaque État", "Le gouvernement fédéral", "La compagnie d'assurance pour laquelle vous travaillez", "Le centre d'examen"], answer: 0, why: "Les producers reçoivent leur licence État par État." },
          { objective: "O2", q: "Vous avez une ancienne condamnation pour fraude (un crime grave). Quelle est la première étape honnête ?", options: ["Ne pas la mentionner dans la demande", "Renoncer à travailler dans l'assurance", "Utiliser le nom d'un ami", "Demander au département de votre État comment obtenir l'accord écrit d'un régulateur"], answer: 3, why: "La loi fédérale exige un accord écrit pour certaines condamnations, et le département de l'État explique comment le demander." },
          { objective: "O3", q: "Dans sa demande, un acheteur cache un grave problème de santé. Quel principe a-t-il violé ?", options: ["L'indemnisation", "L'intérêt assurable", "La plus grande bonne foi", "L'adhésion"], answer: 2, why: "Les deux parties doivent être honnêtes ; un mensonge important peut annuler la garantie." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Le contenu de l'examen et la préparation",
      lessons: [
        {
          title: "Les bases vie et santé et le calcul d'un sinistre santé",
          objectives: ["O3", "O4"],
          minutes: 6,
          goal: "Calculer qui paie quoi sur un sinistre santé d'entraînement avec une franchise et une coassurance.",
          text: [
            "Assurance vie : l'assurance vie temporaire (« term life ») couvre un nombre d'années fixé et n'a pas de valeur de rachat. L'assurance vie permanente, comme la vie entière (« whole life »), peut durer toute la vie et constitue une valeur de rachat. Le bénéficiaire est la personne qui reçoit le capital décès ; un bénéficiaire en second le reçoit si le premier est déjà décédé. Le titulaire du contrat le contrôle et peut être une autre personne que l'assuré.",
            "L'assurance santé a ses propres mots. La franchise est ce que vous payez chaque année avant que le plan commence à partager les frais. La coassurance est le pourcentage que vous partagez ensuite, par exemple 80/20 : le plan paie 80 % et vous payez 20 %. Le ticket fixe (« copay ») est un montant fixe en dollars par visite. Le plafond de dépenses personnelles (« out-of-pocket maximum ») est le maximum que vous payez dans l'année pour les soins couverts.",
            "Exercice seulement, chiffres inventés : une facture couverte de 3 000 $, une franchise de 1 000 $ pas encore atteinte, une coassurance 80/20. Vous payez les premiers 1 000 $. Les 2 000 $ restants sont partagés : le plan paie 80 % (1 600 $) et vous payez 20 % (400 $). Vous payez 1 400 $ au total ; le plan paie 1 600 $. Vérification : 1 400 $ + 1 600 $ = 3 000 $."
          ],
          steps: ["Écrivez le montant de la facture couverte.", "Retirez la part de la franchise encore due ; l'assuré paie cette part.", "Partagez le reste selon les pourcentages de coassurance.", "Additionnez la franchise et la coassurance de l'assuré ; arrêtez-vous au plafond de dépenses personnelles.", "Vérifiez que les deux parts font bien le total de la facture."],
          words: [["Bénéficiaire", "la personne qui reçoit l'argent quand la personne assurée meurt."], ["Valeur de rachat", "l'épargne constituée dans un contrat d'assurance vie permanente."], ["Franchise", "le montant que vous payez avant que l'assurance commence à payer."], ["Coassurance", "le pourcentage du coût que vous partagez avec le plan après la franchise."], ["Plafond de dépenses personnelles", "le maximum que vous payez dans l'année du plan pour les soins couverts."]],
          slides: [
            { title: "Les mots de l'assurance vie", bullets: ["Temporaire : années fixées, pas de valeur de rachat", "Vie entière : toute la vie, constitue une valeur de rachat", "Bénéficiaire et bénéficiaire en second"] },
            { title: "Les mots de l'assurance santé", bullets: ["Franchise : vous payez d'abord", "Coassurance : pourcentage partagé, comme 80/20", "Ticket fixe (copay) : montant fixe par visite", "Plafond de dépenses personnelles : le maximum de l'année"] },
            { title: "Sinistre d'entraînement (inventé)", bullets: ["Facture de 3 000 $, franchise de 1 000 $, 80/20", "Vous : 1 000 $ + 20 % de 2 000 $ = 1 400 $", "Le plan : 80 % de 2 000 $ = 1 600 $"] }
          ],
          tryIt: "Exercice seulement : calculez ce sinistre sur papier. Une facture couverte de 5 000 $, une franchise de 500 $ pas encore atteinte, une coassurance 80/20. Combien paie l'assuré, et combien paie le plan ? (Réponse : assuré 500 $ + 900 $ = 1 400 $ ; plan 3 600 $.)",
          youCanNow: "expliquer les principaux mots de l'assurance vie et santé et calculer un sinistre santé avec une franchise et une coassurance.",
          quickCheck: [
            { objective: "O4", q: "Exercice seulement : une facture couverte de 2 000 $, une franchise de 500 $ pas encore atteinte, une coassurance 80/20. Combien paie l'assuré ?", options: ["400 $", "500 $", "800 $", "1 500 $"], answer: 2, why: "La franchise de 500 $ plus 20 % des 1 500 $ restants (300 $) font 800 $." },
            { objective: "O3", q: "Quel contrat d'assurance vie constitue une valeur de rachat ?", options: ["La vie entière", "La temporaire de dix ans", "La temporaire de vingt ans", "L'assurance accident de voyage"], answer: 0, why: "Les contrats permanents comme la vie entière constituent une valeur de rachat ; les contrats temporaires, non." }
          ]
        },
        {
          title: "Les bases biens et responsabilité et le calcul d'un sinistre de biens",
          objectives: ["O1", "O4"],
          minutes: 6,
          goal: "Calculer ce que paie un contrat de biens ou de responsabilité auto sur un sinistre d'entraînement.",
          text: [
            "Les contrats de biens paient les dommages à ce que vous possédez. La valeur à neuf (« replacement cost ») paie le remplacement de l'objet par un objet neuf du même type. La valeur réelle (« actual cash value ») paie la valeur à neuf moins la dépréciation (usure et âge). Exercice seulement : un canapé coûte 1 200 $ neuf et a perdu 500 $ de valeur, donc sa valeur réelle est de 700 $. La franchise est retirée du paiement.",
            "La garantie responsabilité (Casualty) paie les autres quand vous êtes légalement responsable du tort qui leur est fait. Les plafonds de responsabilité auto s'écrivent souvent avec trois nombres, comme 25/50/25 : jusqu'à 25 000 $ pour les blessures d'une personne, jusqu'à 50 000 $ pour toutes les blessures d'un même accident, et jusqu'à 25 000 $ pour les dommages matériels. Votre État fixe les minimums ; vérifiez-les.",
            "Exercice seulement : un conducteur avec des plafonds 25/50/25 blesse une personne dont les frais s'élèvent à 40 000 $. Le contrat paie 25 000 $, son plafond par personne. Le conducteur peut devoir payer lui-même les 15 000 $ restants. C'est pourquoi les agents expliquent les plafonds avec soin."
          ],
          steps: ["Trouvez le montant de la perte et le type de garantie.", "Pour la valeur réelle, retirez la dépréciation de la valeur à neuf.", "Retirez la franchise.", "Comparez avec le plafond du contrat ; l'assureur ne paie jamais plus que le plafond.", "Tout ce qui dépasse le plafond est à la charge de l'assuré."],
          words: [["Valeur à neuf", "le coût pour remplacer un objet par un objet neuf du même type et de même qualité."], ["Valeur réelle", "la valeur à neuf moins la dépréciation."], ["Dépréciation", "la perte de valeur due à l'âge et à l'usure."], ["Plafond de garantie", "le maximum que l'assureur paiera pour une perte couverte."], ["Plafonds séparés", "des plafonds de responsabilité auto écrits avec trois nombres, comme 25/50/25."]],
          slides: [
            { title: "Biens : deux façons de payer", bullets: ["Valeur à neuf : un objet neuf du même type", "Valeur réelle : valeur à neuf moins dépréciation", "La franchise est retirée du paiement"] },
            { title: "Responsabilité envers les autres", bullets: ["Paie quand vous causez légalement du tort à d'autres", "Plafonds auto comme 25/50/25", "Votre État fixe les minimums"] },
            { title: "Sinistre d'entraînement (inventé)", bullets: ["25/50/25, une personne blessée, 40 000 $ de frais", "Le contrat paie le plafond de 25 000 $ par personne", "Le conducteur peut devoir les 15 000 $ restants"] }
          ],
          tryIt: "Exercice seulement : un feu de cuisine cause 18 000 $ de dommages couverts. Le contrat habitation paie la valeur à neuf, la franchise est de 1 000 $ et le plafond pour le logement est de 250 000 $. Écrivez ce que paie l'assureur et ce que paie le propriétaire. (Réponse : assureur 17 000 $ ; propriétaire 1 000 $.)",
          youCanNow: "distinguer la garantie des biens de la garantie responsabilité et calculer des sinistres d'entraînement avec dépréciation, franchises et plafonds.",
          quickCheck: [
            { objective: "O4", q: "Exercice seulement : un téléviseur coûte 900 $ neuf et a perdu 300 $ de valeur. Quelle est sa valeur réelle ?", options: ["300 $", "900 $", "1 200 $", "600 $"], answer: 3, why: "La valeur réelle est la valeur à neuf moins la dépréciation : 900 $ - 300 $ = 600 $." },
            { objective: "O1", q: "Un client blesse par accident un livreur chez lui et il est poursuivi en justice. Quelle garantie intervient ?", options: ["Vie", "Responsabilité (Casualty)", "Revenu en cas d'invalidité", "Dommages aux biens de la maison"], answer: 1, why: "La garantie responsabilité paie les autres quand l'assuré est légalement responsable du tort qui leur est fait." }
          ]
        },
        {
          title: "Les règles d'éthique et votre plan d'étude et d'examen",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Repérer les pratiques de vente malhonnêtes et écrire un plan daté d'étude et d'examen.",
          text: [
            "Les États ont des lois contre les pratiques commerciales déloyales, et chaque examen les teste. La fausse déclaration consiste à mentir ou à cacher ce que fait un contrat. Le « twisting » consiste à pousser un client à remplacer son contrat par un mensonge ou une comparaison trompeuse, à son détriment. Le « churning » consiste à remplacer des contrats encore et encore surtout pour toucher de nouvelles commissions. Le « rebating » consiste à donner une partie de sa commission ou un cadeau pour obtenir une vente ; c'est illégal dans beaucoup d'États, donc vérifiez la règle de votre État. Les primes que vous encaissez appartiennent au client et à l'assureur : l'agent les garde en fiducie (un devoir fiduciaire) et ne doit pas les mélanger avec son argent personnel (confusion des fonds).",
            "L'action honnête est simple : dites la vérité sur la garantie, faites passer les besoins du client en premier, comparez les contrats équitablement, mettez les choses par écrit et gardez l'argent des primes à part. En cas de doute, demandez à votre responsable ou au département de l'État.",
            "Maintenant, planifiez. Utilisez le programme d'examen de votre État pour lister chaque sujet et son nombre de questions. Donnez plus de jours d'étude aux sujets lourds. Fixez une date cible d'examen, au moins deux dates d'examens blancs et un objectif de score. Terminez toute formation préalable exigée avant de réserver l'examen. Lisez chaque question deux fois et faites attention aux mots comme EXCEPT (sauf) et NOT (ne pas).",
            "Activité finale : écrivez votre plan d'étude et d'examen sur une page avec votre branche de licence, les étapes officielles de votre État et leurs adresses web, les sujets du programme et leur poids, un calendrier daté par semaine, les dates des examens blancs, trois sinistres d'entraînement et trois règles d'éthique."
          ],
          steps: ["Listez dans l'ordre les étapes officielles de votre État avec leurs adresses web.", "Recopiez chaque sujet du programme et son nombre de questions.", "Donnez plus de jours d'étude aux sujets qui ont le plus de questions.", "Choisissez une date cible d'examen et au moins deux dates d'examens blancs avec un objectif de score.", "Ajoutez trois sinistres d'entraînement et trois règles d'éthique dans vos propres mots."],
          words: [["Fausse déclaration", "mentir ou cacher ce que fait ou coûte un contrat."], ["Twisting", "utiliser des mensonges ou des comparaisons trompeuses pour qu'un client remplace son contrat."], ["Churning", "remplacer des contrats encore et encore surtout pour toucher des commissions."], ["Rebating", "rendre une partie de sa commission ou faire un cadeau pour gagner une vente ; illégal dans beaucoup d'États."], ["Fiduciaire", "une personne à qui l'on confie l'argent d'autrui pour le gérer honnêtement."], ["Confusion des fonds", "mélanger l'argent des primes des clients avec votre propre argent."]],
          slides: [
            { title: "Les pratiques que l'examen teste", bullets: ["Fausse déclaration : mentir sur un contrat", "Twisting : tromper un client pour qu'il en change", "Churning : remplacer pour toucher des commissions", "Rebating : illégal dans beaucoup d'États, vérifiez le vôtre"] },
            { title: "L'argent des primes", bullets: ["Vous le gardez en fiducie : devoir fiduciaire", "Ne le mélangez jamais avec votre propre argent"] },
            { title: "Construisez votre plan", bullets: ["Étapes et adresses web de votre État", "Sujets du programme et leur poids", "Calendrier daté par semaine et examens blancs"] },
            { title: "Le jour de l'examen", bullets: ["Lisez chaque question deux fois", "Faites attention à EXCEPT et NOT", "Apportez la pièce d'identité demandée dans le guide"] }
          ],
          sources: [SRC.naicUtpa, SRC.naicDepts],
          tryIt: "Activité finale : écrivez votre plan d'étude et d'examen pour la licence d'assurance sur une page, avec les étapes officielles et le programme d'examen de votre État, et de vraies dates pour chaque semaine d'étude, deux examens blancs et votre date cible d'examen.",
          youCanNow: "repérer les pratiques de vente malhonnêtes, choisir l'action honnête et suivre un plan daté d'étude et d'examen pour votre licence.",
          quickCheck: [
            { objective: "O5", q: "Un agent dit à une personne âgée que son ancien contrat « ne vaut rien » pour qu'elle en achète un nouveau qui lui rapporte plus. Qu'est-ce que c'est ?", options: ["De la souscription", "De l'indemnisation", "Du twisting", "Une nomination"], answer: 2, why: "Utiliser une affirmation trompeuse pour qu'un client remplace son contrat, c'est du twisting." },
            { objective: "O6", q: "Le programme de votre État donne beaucoup plus de questions à un sujet qu'aux autres. Que faites-vous dans votre plan ?", options: ["Donner plus de jours d'étude à ce sujet", "Le sauter parce qu'il est long", "N'étudier que les plus petits sujets", "Ignorer le programme"], answer: 0, why: "Les sujets qui ont plus de questions méritent plus de temps d'étude." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Le contenu de l'examen et la préparation",
        questions: [
          { objective: "O4", q: "Exercice seulement : une facture couverte de 4 000 $, la franchise déjà atteinte, une coassurance 80/20. Combien paie le plan ?", options: ["800 $", "4 000 $", "3 000 $", "3 200 $"], answer: 3, why: "La franchise étant atteinte, le plan paie 80 % de 4 000 $, soit 3 200 $." },
          { objective: "O4", q: "Exercice seulement : 12 000 $ de dommages couverts après une tempête, valeur à neuf, une franchise de 2 000 $. Combien paie l'assureur ?", options: ["10 000 $", "12 000 $", "14 000 $", "2 000 $"], answer: 0, why: "La franchise est retirée de la perte : 12 000 $ - 2 000 $ = 10 000 $." },
          { objective: "O3", q: "Qui reçoit le capital décès si le premier bénéficiaire est déjà décédé ?", options: ["L'agent", "Le bénéficiaire en second", "L'assureur", "L'État"], answer: 1, why: "Le bénéficiaire en second vient ensuite quand le premier bénéficiaire est décédé." },
          { objective: "O5", q: "Un client vous paie une prime en espèces. Que faites-vous de cet argent ?", options: ["Le mettre sur votre compte personnel pour le moment", "Le dépenser et le rembourser plus tard", "Le traiter comme un argent confié, gardé à part comme l'exigent votre agence et votre État", "En rendre une partie au client pour le remercier"], answer: 2, why: "Les primes sont gardées en fiducie ; les mélanger avec votre propre argent, c'est de la confusion des fonds." },
          { objective: "O6", q: "Que doit contenir un bon plan d'étude et d'examen ?", options: ["Seulement la date de l'examen", "Les étapes officielles, les sujets du programme, des semaines d'étude datées et des examens blancs", "La liste des commissions de l'agent", "Des réponses copiées sur un site web"], answer: 1, why: "Un plan complet couvre les étapes officielles, les sujets du programme et de vraies dates pour l'étude et l'entraînement." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Préparation à l'examen de licence d'agent d'assurance",
    questions: [
      { objective: "O1", q: "Quel est le mot de la loi pour un agent d'assurance avec licence qui vend de l'assurance ?", options: ["Producer", "Souscripteur", "Expert en sinistres", "Actuaire"], answer: 0, why: "Les lois des États appellent « producers » les agents et courtiers qui ont une licence." },
      { objective: "O1", q: "Une banque vous embauche pour vendre de l'assurance vie et une garantie invalidité de longue durée. De quelles branches avez-vous besoin ?", options: ["Biens et Responsabilité", "Personal Lines", "Vie et Accident et Santé", "Expert en sinistres"], answer: 2, why: "L'assurance vie demande la branche Vie, et la garantie invalidité relève d'Accident et Santé." },
      { objective: "O1", q: "Quel emploi demande en général une licence différente de celle d'un agent ?", options: ["Vendre une assurance locataire", "Vendre une assurance vie temporaire", "Vendre une assurance auto", "Enquêter sur les sinistres et les régler comme expert en sinistres"], answer: 3, why: "Les experts en sinistres enquêtent sur les sinistres et les règlent, et ont en général leur propre licence." },
      { objective: "O2", q: "Quel site vous aide à trouver le département des assurances de chaque État ?", options: ["La page de la NAIC sur les départements des assurances des États", "Le blog d'un vendeur de formations", "Un groupe sur les réseaux sociaux", "Un forum en ligne"], answer: 0, why: "La NAIC, l'association des régulateurs des États, donne le lien vers chaque département d'État." },
      { objective: "O2", q: "Au Texas, quand nous avons vérifié, à quel moment pouviez-vous demander une licence générale ?", options: ["Avant de passer un examen", "Après avoir réussi l'examen d'État", "Seulement après cinq ans de travail", "Seulement par la compagnie d'assurance"], answer: 1, why: "Le TDI (département des assurances du Texas) disait de réussir d'abord l'examen, puis de faire la demande par Sircon ou NIPR." },
      { objective: "O2", q: "Votre ami dit qu'une formation de 20 heures est exigée partout. Que faites-vous ?", options: ["Le croire", "Payer la formation la plus longue que vous trouvez", "Vérifier la page du département de votre propre État", "Ne suivre aucune formation"], answer: 2, why: "Les règles de formation préalable varient selon l'État ; vérifiez donc la page officielle." },
      { objective: "O3", q: "Qu'est-ce qu'une prime ?", options: ["Le montant que l'assureur paie pour un sinistre", "L'argent que l'assuré paie pour être couvert", "La licence de l'agent", "Le plafond du contrat"], answer: 1, why: "La prime est ce que l'assuré paie pour acheter une garantie." },
      { objective: "O3", q: "Quelle page d'un contrat indique qui est couvert, les plafonds et la prime ?", options: ["La lettre d'accompagnement", "Le formulaire de déclaration de sinistre", "La demande", "Les conditions particulières"], answer: 3, why: "Les conditions particulières résument qui et quoi est couvert, les plafonds et la prime." },
      { objective: "O3", q: "Pourquoi une formulation peu claire dans un contrat est-elle en général lue en faveur du client ?", options: ["Parce que le contrat est un contrat d'adhésion écrit par l'assureur", "Parce que l'agent l'a écrit", "Parce que le client a toujours raison", "À cause de l'indemnisation"], answer: 0, why: "L'assureur écrit le contrat et le client l'accepte tel quel, donc les termes peu clairs favorisent le client." },
      { objective: "O3", q: "Quel contrat d'assurance vie couvre un nombre d'années fixé et n'a pas de valeur de rachat ?", options: ["La vie entière", "La vie universelle", "La vie temporaire", "La vie permanente"], answer: 2, why: "La vie temporaire couvre une période fixée et ne constitue pas de valeur de rachat." },
      { objective: "O4", q: "Exercice seulement : une facture couverte de 6 000 $, une franchise de 1 000 $ pas encore atteinte, une coassurance 80/20. Combien paie l'assuré ?", options: ["1 200 $", "2 000 $", "1 000 $", "5 000 $"], answer: 1, why: "La franchise de 1 000 $ plus 20 % des 5 000 $ restants (1 000 $) font 2 000 $." },
      { objective: "O4", q: "Exercice seulement : un conducteur avec des plafonds 25/50/25 blesse une personne dont les frais s'élèvent à 30 000 $. Combien paie le contrat pour cette personne ?", options: ["30 000 $", "50 000 $", "5 000 $", "25 000 $"], answer: 3, why: "Le plafond de blessures par personne est de 25 000 $ ; le conducteur peut devoir les 5 000 $ restants." },
      { objective: "O4", q: "Exercice seulement : un ordinateur portable coûte 1 000 $ neuf et a perdu 400 $ de valeur ; la franchise est de 100 $. Combien paie un contrat en valeur réelle ?", options: ["500 $", "600 $", "900 $", "1 000 $"], answer: 0, why: "La valeur réelle est de 1 000 $ - 400 $ = 600 $, moins la franchise de 100 $, soit 500 $." },
      { objective: "O4", q: "Quel montant limite ce qu'une personne paie pour ses soins de santé couverts dans l'année ?", options: ["Le ticket fixe (copay)", "La prime", "Le plafond de dépenses personnelles", "La franchise"], answer: 2, why: "Le plafond de dépenses personnelles est le maximum que l'assuré paie dans l'année du plan pour les soins couverts." },
      { objective: "O5", q: "Un agent offre à un client une carte-cadeau de 100 $ pour qu'il achète un contrat. Comment appelle-t-on cela ?", options: ["Twisting", "Rebating", "Souscription", "Indemnisation"], answer: 1, why: "Donner quelque chose de valeur pour gagner une vente, c'est du rebating, illégal dans beaucoup d'États." },
      { objective: "O5", q: "Un agent remplace le contrat d'un client chaque année surtout pour toucher de nouvelles commissions. Qu'est-ce que c'est ?", options: ["Du churning", "De la coassurance", "Une nomination", "La plus grande bonne foi"], answer: 0, why: "Remplacer des contrats encore et encore surtout pour les commissions, c'est du churning." },
      { objective: "O5", q: "Un client demande si un contrat bon marché couvre les inondations, et vous n'êtes pas sûr. Que faites-vous ?", options: ["Dire oui pour conclure la vente", "Changer de sujet", "Dire que l'inondation est toujours couverte", "Vérifier le texte du contrat ou demander à la compagnie avant de répondre"], answer: 3, why: "Deviner sur la garantie risque d'être une fausse déclaration ; vérifiez d'abord et dites la vérité." },
      { objective: "O6", q: "Quelle est la meilleure première étape pour construire votre plan d'étude ?", options: ["Réserver l'examen pour demain", "Acheter la formation la plus chère", "Obtenir les étapes officielles et le programme d'examen de votre État", "Apprendre par cœur des questions d'entraînement au hasard"], answer: 2, why: "Les étapes officielles et le programme montrent quoi faire et quoi étudier." },
      { objective: "O6", q: "Votre score au premier examen blanc est sous votre objectif. Que changez-vous dans votre plan ?", options: ["Ajouter des jours d'étude pour vos sujets les plus faibles et prévoir un autre examen blanc", "Abandonner le plan", "Passer tout de suite le vrai examen", "N'étudier que les sujets que vous connaissez déjà"], answer: 0, why: "Les examens blancs montrent les sujets faibles ; ajoutez du temps sur ces sujets et refaites un test avant le vrai examen." },
      { objective: "O6", q: "À l'examen, une question demande quel élément est couvert « EXCEPT » (sauf). Que devez-vous faire ?", options: ["Choisir la première affirmation vraie", "La sauter", "Deviner vite", "La lire deux fois et choisir l'élément qui n'est PAS couvert"], answer: 3, why: "EXCEPT demande le seul choix qui ne convient pas ; lire deux fois évite une erreur d'inattention." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [1, 3, 6, 8, 10, 12, 14, 16, 17] },
  rubric: {
    mastery: "Niveau « Atteint » ou « Dépassé » sur chaque ligne. Si une ligne est « Pas encore », corrigez cette partie et réessayez.",
    criteria: [
      { name: "La bonne branche de licence", objective: "O1", notYet: "Aucune branche nommée, ou une branche qui ne convient pas à l'emploi.", meets: "Nomme la branche de licence qui convient à l'emploi et dit pourquoi.", exceeds: "Nomme aussi une deuxième branche ou licence dont l'apprenant pourrait avoir besoin plus tard, et pourquoi." },
      { name: "Étapes officielles", objective: "O2", notYet: "Des étapes manquent ou viennent de publicités ou d'amis.", meets: "Chaque étape vient de la page officielle de l'État, dans l'ordre, avec les adresses web.", exceeds: "Ajoute la date de vérification, le guide du candidat du centre d'examen et les étapes de vérification des antécédents." },
      { name: "Sujets du programme et termes", objective: "O3", notYet: "Aucun sujet du programme, ou des termes de base mal expliqués.", meets: "Liste chaque sujet du programme avec son poids et explique correctement les termes clés.", exceeds: "Signale les sujets les plus faibles de l'apprenant et ajoute des fiches pour ces sujets." },
      { name: "Sinistres d'entraînement", objective: "O4", notYet: "Moins de trois sinistres, ou des réponses fausses.", meets: "Trois sinistres d'entraînement calculés correctement, en montrant chaque étape.", exceeds: "Les sinistres couvrent une franchise, une coassurance et un plafond de garantie, chacun avec une vérification du calcul." },
      { name: "Règles d'éthique", objective: "O5", notYet: "Règles absentes ou fausses.", meets: "Trois règles d'éthique expliquées correctement dans les propres mots de l'apprenant.", exceeds: "Chaque règle est accompagnée d'un court exemple de l'action honnête." },
      { name: "Plan daté", objective: "O6", notYet: "Pas de dates, ou pas d'examens blancs.", meets: "Un calendrier par semaine avec des dates, une date cible d'examen et deux examens blancs avec un objectif de score.", exceeds: "Plus de jours d'étude vont aux sujets les plus lourds du programme, avec une date d'examen de secours." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent l'activité finale (grille d'évaluation)",
      "Apprenants qui réservent leur examen de licence d'État dans les 60 jours (questionnaire de suivi)",
      "Apprenants qui disent avoir réussi l'examen d'État et obtenu leur licence (questionnaire de suivi)",
      "Apprenants qui disent avoir reçu une offre d'emploi ou une nomination comme agent d'assurance, ou avoir ouvert leur propre agence"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Un téléphone ou un ordinateur avec internet pour ouvrir les pages officielles de l'État",
      "Papier, stylo et une calculatrice simple",
      "Le programme d'examen et le guide du candidat de l'État de l'apprenant (gratuits auprès du centre d'examen)",
      "Environ 60 à 75 minutes au total, en courtes séances, plus du temps pour le plan final"
    ],
    facilitatorNotes: [
      "Regroupez si possible les apprenants par État et ouvrez ensemble la page de licence de chaque État ; ne présentez pas les règles d'un État comme si elles valaient partout.",
      "Expliquez clairement que le cours prépare les apprenants, mais qu'il ne remplace pas une formation préalable exigée par l'État et ne donne pas de licence.",
      "Pour les apprenants qui ont un casier judiciaire, expliquez honnêtement la règle de l'accord écrit et envoyez-les au département de leur État ; ne faites pas de suppositions sur leur cas.",
      "Tous les calculs de sinistres utilisent des chiffres inventés ; ne conseillez à personne quel contrat acheter.",
      "Notez le plan final avec la grille d'évaluation, et vérifiez que chaque étape a une adresse web officielle."
    ]
  }
};
