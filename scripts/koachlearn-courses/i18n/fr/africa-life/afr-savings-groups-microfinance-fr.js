"use strict";

// Koach Learn course (French translation of africa-life/afr-savings-groups-microfinance.js). See scripts/koachlearn-courses/README.md, "Translations".
// All money figures are examples, exactly as in the English; no investment or lending advice.

const VSLA = { name: "VSL Associates : la méthode AVEC/VSLA (parts, fonds de crédit, caisse sociale, cycle d'un an, partage)", url: "https://www.vsla.net/the-vsla-methodology/" };
const SASRA = { name: "SASRA, Kenya : liste des SACCO autorisées à collecter l'épargne", url: "https://www.sasra.go.ke/licensed-dt-saccos/" };
const BCEAO_SFD = { name: "BCEAO : réglementation des systèmes financiers décentralisés (microfinance) dans les pays de l'UEMOA (franc CFA, XOF)", url: "https://www.bceao.int/fr/reglementations/reglementation-des-systemes-financiers-decentralises" };
const CBN_MFB = { name: "Banque centrale du Nigeria : banques de microfinance", url: "https://www.cbn.gov.ng/Supervision/Inst-MF.html" };
const BOG = { name: "Banque du Ghana : toutes les institutions agréées et les procédures de plainte", url: "https://www.bog.gov.gh" };
const CBK_DCP = { name: "Banque centrale du Kenya : supervision bancaire, dont les banques de microfinance et les prêteurs numériques agréés", url: "https://www.centralbank.go.ke/bank-supervision/" };
const FCCPC = { name: "FCCPC, Nigeria : statut d'enregistrement des prêteurs numériques (applications de prêt approuvées)", url: "https://fccpc.gov.ng/registration-status-for-digital-money-lenders-apps/" };
const SEC_NG = { name: "Nairametrics (14 mai 2026) : la SEC du Nigeria met en garde contre les systèmes de Ponzi promus sur WhatsApp, TikTok et Instagram", url: "https://nairametrics.com/2026/05/14/sec-warns-nigerians-against-rising-ponzi-schemes-on-whatsapp-tiktok-instagram/" };

module.exports = {
  id: "afr-savings-groups-microfinance-fr",
  lang: "fr",
  translationOf: "afr-savings-groups-microfinance",
  category: "Africa: Life and Work",
  name: "Groupes d'épargne et microfinance (chamas, AVEC, tontines, esusu)",
  skills: "Choisir entre une tontine rotative et un groupe d'épargne et de crédit, Écrire un plan d'épargne mensuel, Vérifier le règlement d'un groupe, Tenir les registres du groupe et protéger l'argent, Comparer les crédits de microfinance et les prêts de groupe, Repérer les systèmes de Ponzi et les faux prêteurs",
  outcome: "choisir un groupe d'épargne adapté à votre objectif, vérifier son règlement et ses registres, comparer un crédit de microfinance ou de groupe d'après le total à rembourser, repérer un système de Ponzi ou un faux prêteur, et suivre un plan d'épargne mensuel écrit.",
  about: [
    "Partout en Afrique, les gens épargnent ensemble : chamas et merry-go-rounds au Kenya, esusu et ajo au Nigeria, susu au Ghana, tontines au Sénégal, en Côte d'Ivoire et au Cameroun (njangi au Cameroun anglophone), gam'eya en Égypte et daret au Maroc. Les groupes d'épargne, les SACCO et coopératives d'épargne et de crédit, et les banques de microfinance aident des millions de personnes à payer la scolarité, à approvisionner une boutique ou à passer un mois difficile.",
    "Ce cours s'adresse aux commerçants, aux parents, aux artisans, aux travailleurs et aux jeunes qui veulent épargner régulièrement ou emprunter prudemment. Vous apprendrez les deux grands types de groupes, comment écrire un plan d'épargne, ce qu'il faut vérifier dans le règlement et les registres d'un groupe, comment comparer un crédit d'après le total à rembourser et comment repérer les arnaques qui volent l'épargne.",
    "Chaque leçon dure environ cinq minutes, avec une tâche \"Essayez maintenant\", une courte vérification, un contrôle des connaissances après chaque chapitre et un quiz de 20 questions à la fin. Tous les montants sont des exemples. Ce cours explique comment fonctionnent les produits et leurs risques ; il ne vous dit pas où placer votre argent."
  ],
  finalTask: "Écrivez votre plan d'épargne mensuel sur une page : votre objectif et la date à laquelle vous en avez besoin, le total, le montant à épargner chaque semaine ou chaque mois, l'endroit où vous l'épargnerez (groupe, SACCO ou coopérative, banque de microfinance ou compte), et une fiche de vérification avec vos réponses sur le groupe ou l'institution : son règlement écrit, la façon dont l'argent et les registres sont gardés, son agrément (s'il collecte l'épargne ou prête comme une entreprise) et le coût total de tout crédit.",
  // ---- ADDIE : Analyse ----
  analysis: {
    learners: "Des adultes et des jeunes de toute l'Afrique, en ville et au village : commerçants, artisans, mères et pères, travailleurs et jeunes, dont beaucoup sont déjà dans une chama, un esusu, un susu ou une tontine. Exemples du Kenya, du Nigeria, du Ghana, du Sénégal, du Cameroun, de Côte d'Ivoire, d'Égypte et du Maroc.",
    startingPoint: "Beaucoup épargnent déjà dans un groupe informel ou avec un portefeuille mobile, mais sans objectif écrit. Certains sont entrés dans un groupe sans lire son règlement, ont emprunté sans calculer le total à rembourser, ou ont perdu de l'argent dans un groupe qui s'est effondré ou dans une arnaque du type \"doublez votre argent\".",
    gap: "Les apprenants doivent choisir le bon type de groupe pour leur objectif, vérifier le règlement et les registres avant de confier leur argent à un groupe, comparer les crédits d'après ce qu'ils rembourseront vraiment, et reconnaître les systèmes de Ponzi et les prêteurs non agréés, pour que leur épargne grandisse au lieu de disparaître.",
    constraints: [
      "Niveau de lecture : mots simples et phrases courtes ; traduit en français et en arabe",
      "Appareils : téléphone simple ; beaucoup de groupes se réunissent en personne et tiennent des registres sur papier",
      "Temps : leçons de 4 à 6 minutes, adaptées au travail et aux jours de réunion du groupe",
      "Les règles et les agréments varient selon le pays et changent : les apprenants consultent les listes à jour du régulateur",
      "Argent : exemples seulement ; aucun conseil en placement ; ne partagez jamais vos codes PIN ni vos mots de passe"
    ],
    prerequisites: "Aucun. Savoir additionner et multiplier, avec la calculatrice du téléphone, aide."
  },
  // ---- ADDIE : Conception (objectifs : condition, action observable, critère) ----
  objectives: [
    { id: "O1", condition: "À partir d'un objectif d'épargne et de deux types de groupe", action: "expliquer le fonctionnement d'une tontine rotative et d'un groupe d'épargne et de crédit, et choisir celui qui convient à l'objectif", standard: "en donnant une raison pour ce choix et un risque de chacun" },
    { id: "O2", condition: "À partir d'un objectif et de vos propres revenus", action: "écrire un plan d'épargne mensuel avec l'objectif, le total, la date, le montant par semaine ou par mois et l'endroit où vous épargnerez", standard: "avec des calculs qui atteignent l'objectif à la date prévue" },
    { id: "O3", condition: "À partir des statuts ou du règlement d'un groupe", action: "vérifier les règles clés : cotisations, réunions, crédits, amendes, départ, partage et contrôle de l'argent", standard: "en trouvant au moins six des sept et en nommant celles qui manquent" },
    { id: "O4", condition: "Pendant une réunion du groupe", action: "noter les cotisations et les crédits dans un livret ou un registre et vérifier que l'argent et les registres concordent", standard: "avec chaque montant lu à voix haute et accepté devant les membres" },
    { id: "O5", condition: "À partir d'une offre de crédit de microfinance ou de groupe", action: "calculer le total à rembourser et comparer les dates de remboursement avec vos revenus", standard: "avant de signer, en expliquant ce que la caution solidaire signifie pour vous" },
    { id: "O6", condition: "Face à une offre pour épargner, investir ou emprunter", action: "repérer les signes d'un système de Ponzi ou d'un faux prêteur et vérifier le fournisseur sur la liste officielle du régulateur", standard: "avant de payer ou de donner la moindre information" }
  ],
  chapters: [
    {
      name: "Chapitre 1 : Épargner ensemble",
      lessons: [
        {
          title: "Deux types de groupes d'épargne",
          objectives: ["O1"],
          minutes: 5,
          goal: "Expliquer le fonctionnement d'une tontine rotative et d'un groupe d'épargne et de crédit, et choisir celui qui convient à votre objectif.",
          text: [
            "Une tontine rotative (merry-go-round, esusu, ajo, susu, tontine, njangi, gam'eya ou daret) est simple. Chaque membre verse le même montant chaque semaine ou chaque mois, et à chaque fois un membre reçoit toute la cagnotte, à tour de rôle, jusqu'à ce que tout le monde l'ait reçue une fois. Exemple : 10 membres versent chacun KES 1 000 par mois ; chaque mois, un membre reçoit KES 10 000.",
            "Elle est utile pour obtenir une grosse somme : la scolarité, une machine à coudre, du stock pour une boutique. Ses risques : ceux qui reçoivent la cagnotte tôt peuvent arrêter de payer, et l'argent ne rapporte rien à personne. Les premiers reçoivent une avance sans intérêt ; les derniers prêtent en réalité au groupe.",
            "Un groupe d'épargne et de crédit (une AVEC ou VSLA, une ASCA ou beaucoup de chamas, et, dans une version plus grande et officielle, une SACCO ou coopérative d'épargne et de crédit) garde l'argent ensemble. Les membres épargnent à chaque réunion, l'épargne devient un fonds de crédit, les membres empruntent et remboursent avec des frais de service fixés par le groupe, et à la fin du cycle, souvent environ un an, tout est partagé selon ce que chaque membre a épargné. Ses risques : les crédits non remboursés, et l'argent volé ou mal noté.",
            "Choisissez selon votre objectif. Une grosse somme bientôt : une tontine rotative peut convenir. Épargner régulièrement avec la possibilité d'emprunter : un groupe d'épargne et de crédit peut convenir. Beaucoup de gens utilisent les deux."
          ],
          words: [["Tontine rotative (ROSCA)", "les membres versent le même montant et chacun reçoit toute la cagnotte à tour de rôle."], ["Groupe d'épargne et de crédit", "les membres épargnent dans un fonds commun, se prêtent entre eux et partagent à la fin d'un cycle (AVEC/VSLA, ASCA, SACCO)."], ["Partage", "le jour où le groupe remet toute l'épargne et les gains aux membres, selon ce que chacun a épargné."]],
          slides: [
            { title: "Tontine rotative", bullets: ["Tout le monde verse pareil ; un membre reçoit la cagnotte à tour de rôle", "Esusu, ajo, susu, tontine, njangi, gam'eya, daret", "Utile pour une grosse somme ; risque : les premiers arrêtent de payer"] },
            { title: "Groupe d'épargne et de crédit", bullets: ["L'épargne devient un fonds de crédit", "Les membres empruntent et remboursent avec des frais", "Partage selon l'épargne de chacun ; risque : crédits impayés"] },
            { title: "Choisissez selon votre objectif", bullets: ["Grosse somme bientôt : une tontine rotative peut convenir", "Épargne régulière et crédit : AVEC ou SACCO", "Beaucoup de gens utilisent les deux"] }
          ],
          sources: [VSLA],
          tryIt: "Pensez à un groupe dont vous faites partie ou que vous connaissez. Est-ce une tontine rotative ou un groupe d'épargne et de crédit ? Écrivez une chose pour laquelle il est utile et un risque.",
          youCanNow: "expliquer les deux types de groupes d'épargne et choisir celui qui convient à votre objectif.",
          quickCheck: [
            { objective: "O1", q: "Douze membres versent chacun GHS 200 par mois et un membre reçoit toute la cagnotte chaque mois. De quel type de groupe s'agit-il ?", options: ["Un groupe d'épargne et de crédit", "Une banque de microfinance", "Une tontine rotative", "Un système de Ponzi"], answer: 2, why: "Tout le monde verse pareil et reçoit la cagnotte à tour de rôle : c'est une tontine rotative (susu)." },
            { objective: "O1", q: "Dans une AVEC, comment l'argent est-il partagé à la fin du cycle ?", options: ["Selon ce que chaque membre a épargné", "À parts égales, quelle que soit l'épargne", "Tout pour le président", "À celui qui a le plus emprunté"], answer: 0, why: "Ceux qui ont épargné plus reçoivent une plus grande part du fonds et de ses gains." }
          ]
        },
        {
          title: "Votre objectif et votre plan d'épargne mensuel",
          objectives: ["O2"],
          minutes: 5,
          goal: "Écrire un plan d'épargne qui atteint un objectif à une date donnée.",
          text: [
            "L'épargne marche mieux avec un objectif clair : à quoi elle sert, combien cela coûte et quand vous en avez besoin. \"Les frais de scolarité de NGN 120 000 pour janvier\" est un objectif. \"Épargner plus\" n'en est pas un.",
            "Divisez le total par le nombre de semaines ou de mois dont vous disposez. Exemple : NGN 120 000 en 8 mois, cela fait NGN 15 000 par mois. Si c'est trop, changez la date, l'objectif ou vos dépenses. Regardez vos revenus des bons et des mauvais mois ; un commerçant peut épargner plus pendant la haute saison.",
            "Décidez où l'argent sera placé : un groupe d'épargne, une SACCO ou coopérative, une banque de microfinance, une banque ou un compte d'épargne mobile. Gardez une petite somme pour les urgences, facile à retirer, séparée de l'argent de l'objectif.",
            "Payez-vous d'abord : épargnez le jour où l'argent arrive, avant toute autre dépense. Exemple : Aïcha, coiffeuse à Abidjan, met XOF 5 000 dans sa tontine chaque samedi avant de faire le moindre achat."
          ],
          steps: ["Écrivez l'objectif, le total et la date.", "Comptez les semaines ou les mois jusqu'à la date.", "Divisez le total par ce nombre.", "Comparez avec vos revenus d'un mauvais mois.", "Choisissez où épargner.", "Épargnez le jour où l'argent arrive."],
          words: [["Objectif d'épargne", "ce pour quoi vous épargnez, combien cela coûte et pour quand."], ["Argent pour les urgences", "une petite somme mise de côté pour les problèmes soudains, facile à retirer."]],
          slides: [
            { title: "Un objectif clair", bullets: ["À quoi il sert, combien, pour quand", "\"Scolarité NGN 120 000 pour janvier\"", "Pas seulement \"épargner plus\""] },
            { title: "Faites le calcul", bullets: ["Total / mois = montant par mois", "NGN 120 000 / 8 = NGN 15 000 (exemple)", "Trop élevé ? Changez la date, l'objectif ou les dépenses"] },
            { title: "Où et quand", bullets: ["Groupe, SACCO, banque de microfinance ou compte", "Gardez l'argent des urgences à part", "Épargnez d'abord, le jour où l'argent arrive"] }
          ],
          tryIt: "Écrivez un vrai objectif avec un total et une date. Divisez pour trouver le montant par semaine ou par mois, et comparez-le avec vos revenus d'un mauvais mois. Ajustez jusqu'à ce que cela marche.",
          youCanNow: "écrire un plan d'épargne avec un objectif, un total, une date et un montant par semaine ou par mois.",
          quickCheck: [
            { objective: "O2", q: "Il vous faut KES 24 000 en 6 mois. Combien épargnez-vous chaque mois ?", options: ["KES 2 400", "KES 6 000", "KES 3 000", "KES 4 000"], answer: 3, why: "24 000 divisé par 6 donne 4 000." },
            { objective: "O2", q: "Lequel est un objectif d'épargne clair ?", options: ["\"Épargner plus cette année\"", "\"Une machine à coudre à GHS 1 500 pour juin\"", "\"Devenir riche\"", "\"Arrêter de dépenser\""], answer: 1, why: "Il dit quoi, combien et pour quand." }
          ]
        },
        {
          title: "Vérifier le règlement d'un groupe avant d'y entrer",
          objectives: ["O3"],
          minutes: 5,
          goal: "Vérifier les sept points clés dans le règlement écrit d'un groupe.",
          text: [
            "Un groupe solide a des règles écrites, souvent appelées statuts ou règlement intérieur, acceptées par tous les membres. Demandez à les voir avant d'entrer. S'il n'y en a pas, demandez au groupe de les écrire d'abord.",
            "Vérifiez sept choses : 1. Les cotisations : combien, à quelle fréquence et ce qui se passe en cas de retard (amendes). 2. Les réunions : quand et où. 3. Les crédits : qui peut emprunter, combien, pour combien de temps, les frais de service et ce qui se passe si un crédit n'est pas remboursé. 4. Les amendes et la discipline. 5. Le départ : comment récupérer votre argent si vous partez ou déménagez. 6. Le partage ou l'ordre de passage : quand et comment. 7. Qui contrôle l'argent : les responsables, comment ils sont élus et qui signe.",
            "Certains groupes se font enregistrer, par exemple comme groupe d'entraide, coopérative ou SACCO ; renseignez-vous auprès du bureau local du développement social ou des coopératives pour savoir ce qui s'applique chez vous. Un groupe qui collecte l'épargne du public comme une entreprise peut avoir besoin d'un agrément du régulateur.",
            "Exemple : la chama de Grace à Nakuru écrit dans son règlement que la trésorière ne peut pas aussi garder les clés de la caisse, et les membres votent chaque crédit."
          ],
          steps: ["Demandez à voir le règlement écrit.", "Vérifiez les cotisations et les amendes de retard.", "Vérifiez les jours de réunion.", "Vérifiez les règles de crédit et ce qui se passe en cas de non-remboursement.", "Vérifiez comment partir et récupérer votre argent.", "Vérifiez le partage ou l'ordre de passage.", "Vérifiez qui contrôle l'argent et qui signe."],
          words: [["Statuts (règlement intérieur)", "les règles écrites qu'un groupe accepte et suit."], ["Responsables", "membres élus pour diriger : souvent un président, un secrétaire et un trésorier."]],
          slides: [
            { title: "Demandez le règlement écrit", bullets: ["Statuts ou règlement intérieur, acceptés par les membres", "Pas de règles ? Demandez au groupe de les écrire"] },
            { title: "Sept points à vérifier", bullets: ["Cotisations et amendes ; réunions", "Crédits et impayés ; départ", "Partage ou ordre de passage ; qui contrôle l'argent"] },
            { title: "Enregistrement", bullets: ["Certains groupes s'enregistrent localement", "Demandez au bureau du développement social ou des coopératives", "Collecter l'épargne du public peut exiger un agrément"] }
          ],
          sources: [SASRA, BCEAO_SFD],
          tryIt: "Procurez-vous le règlement d'un groupe dont vous faites partie ou que vous voulez rejoindre (ou notez ce que vous savez). Cochez chacun des sept points. Écrivez ceux qui manquent sous forme de questions à poser à la prochaine réunion.",
          youCanNow: "vérifier les sept points clés du règlement d'un groupe avant de lui confier votre argent.",
          quickCheck: [
            { objective: "O3", q: "Quelle question vérifie la règle du \"départ\" ?", options: ["Quand nous réunissons-nous ?", "Qui est le président ?", "De quelle couleur est la caisse ?", "Si je déménage dans une autre ville, comment récupérer mon épargne ?"], answer: 3, why: "La règle du départ dit comment un membre récupère son argent." },
            { objective: "O3", q: "Un groupe n'a pas de règlement écrit. Que faire de sage avant d'y entrer ?", options: ["Demander aux membres de se mettre d'accord et d'écrire les règles d'abord", "Entrer et espérer que tout ira bien", "Confier votre épargne au président", "Entrer dans deux groupes par sécurité"], answer: 0, why: "Des règles écrites évitent la plupart des disputes d'argent." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 1 : Épargner ensemble",
        questions: [
          { objective: "O1", q: "Dans une tontine rotative, qui prend le plus de risque ?", options: ["Le membre qui reçoit la cagnotte en premier", "Ceux qui la reçoivent en dernier, si les premiers arrêtent de payer", "La banque", "Personne"], answer: 1, why: "Les derniers ont cotisé pendant des mois et perdent si les premiers arrêtent de payer." },
          { objective: "O1", q: "Vous voulez épargner régulièrement et emprunter de petites sommes pendant l'année. Qu'est-ce qui peut le mieux convenir ?", options: ["Une tontine rotative seulement", "Un système de Ponzi", "Garder l'argent sous le matelas", "Un groupe d'épargne et de crédit comme une AVEC"], answer: 3, why: "Une AVEC permet aux membres d'épargner et d'emprunter sur le fonds commun." },
          { objective: "O2", q: "Votre objectif est de GHS 900 en 3 mois. Combien par mois ?", options: ["GHS 300", "GHS 450", "GHS 270", "GHS 90"], answer: 0, why: "900 divisé par 3 donne 300." },
          { objective: "O3", q: "Lequel ne fait PAS partie des sept points à vérifier ?", options: ["Les règles de crédit", "Le partage ou l'ordre de passage", "Le plat préféré du président", "Qui contrôle l'argent"], answer: 2, why: "Les sept points sont : cotisations, réunions, crédits, amendes, départ, partage et contrôle de l'argent." },
          { objective: "O3", q: "Pourquoi vérifier qui signe et qui contrôle l'argent ?", options: ["Pour qu'une seule personne ne puisse pas le prendre", "Pour raccourcir les réunions", "Pour baisser les amendes", "Pour que le groupe ne paie pas d'impôts"], answer: 0, why: "Un contrôle partagé empêche un responsable de mal utiliser l'argent." }
        ]
      }
    },
    {
      name: "Chapitre 2 : Registres, crédits et sécurité",
      lessons: [
        {
          title: "Registres et sécurité de l'argent en réunion",
          objectives: ["O4"],
          minutes: 5,
          goal: "Noter les cotisations et les crédits et vérifier que l'argent concorde avec les registres.",
          text: [
            "La plupart des groupes qui échouent commencent par de mauvais registres ou par une seule personne qui garde l'argent. Les bons groupes tiennent des registres que tous les membres peuvent suivre.",
            "Outils courants : chaque membre a un livret qui montre son épargne et ses crédits, le groupe tient un registre, et dans beaucoup d'AVEC la caisse a trois cadenas, avec trois clés gardées par trois membres différents qui ne sont pas le gardien de la caisse. Certains groupes gardent l'argent sur un compte bancaire ou mobile du groupe qui exige deux ou trois signataires.",
            "À chaque réunion : chaque cotisation et chaque remboursement est compté devant les membres, noté dans le livret et dans le registre, et le total est lu à voix haute. À la fin, l'argent compté doit correspondre aux registres. Sinon, arrêtez-vous et cherchez pourquoi avant que quiconque parte.",
            "Exemple : dans une AVEC de Tamale, le secrétaire lit le solde à voix haute et deux membres comptent l'argent. Les montants concordent : GHS 3 450. La caisse est fermée et les clés repartent avec trois membres différents."
          ],
          steps: ["Comptez chaque paiement devant les membres.", "Notez-le dans le livret du membre et dans le registre.", "Lisez les totaux à voix haute.", "Comptez l'argent et comparez avec le registre.", "S'ils ne concordent pas, cherchez pourquoi avant que quiconque parte.", "Fermez la caisse ; clés ou pouvoir de signature à des membres différents."],
          words: [["Livret", "le carnet personnel d'un membre qui montre son épargne et ses crédits."], ["Signataire", "une personne autorisée à signer pour le compte du groupe ; les bons groupes en exigent deux ou plus."]],
          slides: [
            { title: "Pourquoi les registres comptent", bullets: ["De mauvais registres et une seule personne avec l'argent", "c'est là que la plupart des groupes échouent"] },
            { title: "Les outils", bullets: ["Livrets et un registre", "Caisse à trois cadenas, trois gardiens de clés", "Compte du groupe avec deux signataires ou plus"] },
            { title: "À chaque réunion", bullets: ["Compter devant les membres ; tout noter", "Lire les totaux à voix haute", "L'argent doit concorder avec les registres avant de partir"] }
          ],
          sources: [VSLA],
          tryIt: "Faites un tableau simple pour une réunion : nom du membre, épargne versée, crédit remboursé, nouveau crédit. Ajoutez trois membres d'exemple. Faites le total de chaque colonne et vérifiez que les totaux sont égaux à l'argent que vous compteriez.",
          youCanNow: "noter les cotisations et les crédits en réunion et vérifier que l'argent concorde avec les registres.",
          quickCheck: [
            { objective: "O4", q: "À la fin d'une réunion, il manque GHS 200 par rapport au registre. Que faites-vous ?", options: ["L'ignorer ; cela s'équilibrera la prochaine fois", "Laisser le trésorier expliquer le mois prochain", "S'arrêter et chercher pourquoi avant que quiconque parte", "Arracher la page"], answer: 2, why: "Il faut trouver l'écart pendant que tout le monde est là et s'en souvient bien." },
            { objective: "O4", q: "Pourquoi beaucoup d'AVEC confient-elles les trois clés à trois membres différents ?", options: ["Pour que personne ne puisse ouvrir la caisse seul", "Parce que les cadenas sont bon marché", "Pour allonger les réunions", "Pour que le gardien puisse l'ouvrir chez lui"], answer: 0, why: "Avec des clés partagées, la caisse ne s'ouvre qu'en présence des membres." }
          ]
        },
        {
          title: "La microfinance et les prêts de groupe",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calculer le total à rembourser sur un crédit et comparer les dates avec vos revenus.",
          text: [
            "Les banques et institutions de microfinance prêtent de petites sommes aux personnes et aux petites entreprises, souvent par l'intermédiaire de groupes. Au Nigeria, la Banque centrale (CBN) agrée les banques de microfinance ; au Kenya, la Banque centrale (CBK) agrée les banques de microfinance et les prêteurs numériques ; au Ghana, la Banque du Ghana publie la liste des institutions agréées ; dans les pays du franc CFA (XOF) comme le Sénégal et la Côte d'Ivoire, la microfinance suit les règles de la BCEAO, la banque centrale des États de l'Afrique de l'Ouest.",
            "Ne comparez jamais les crédits seulement d'après le taux d'intérêt annoncé. Demandez par écrit le total à rembourser, avec tous les frais, assurances et charges. Exemple (chiffres inventés) : vous empruntez KES 10 000 ; vous remboursez KES 1 000 par semaine pendant 12 semaines. Total remboursé : KES 12 000, donc le crédit coûte KES 2 000.",
            "Comparez les dates de remboursement avec vos revenus. Un remboursement chaque semaine est difficile si vous êtes payé au mois ou selon les saisons. Demandez ce qui se passe en cas de retard : les pénalités, et si c'est signalé à un bureau de crédit.",
            "Beaucoup de prêts de groupe utilisent la caution solidaire : si un membre ne paie pas, les autres doivent payer à sa place. N'entrez qu'avec des personnes de confiance, et sachez que vous devrez peut-être couvrir quelqu'un d'autre. Empruntez pour quelque chose qui rapporte ou fait économiser de l'argent, pas pour rembourser un autre crédit."
          ],
          steps: ["Demandez par écrit le total à rembourser, avec tous les frais.", "Calculez le coût : total remboursé moins la somme empruntée.", "Notez les dates de remboursement.", "Comparez chaque date avec vos revenus d'un mauvais mois.", "Renseignez-vous sur les pénalités de retard et le bureau de crédit.", "Demandez si le crédit a une caution solidaire."],
          words: [["Microfinance", "petits crédits et services d'épargne pour les personnes et les petites entreprises."], ["Total remboursé", "tout l'argent que vous rendez, intérêts et frais compris."], ["Caution solidaire", "les membres du groupe doivent payer pour un membre qui ne rembourse pas."], ["Bureau de crédit", "une société qui enregistre comment les gens remboursent leurs crédits ; les prêteurs le consultent."]],
          slides: [
            { title: "Qui prête", bullets: ["Banques et institutions de microfinance, souvent à des groupes", "Agréées par la banque centrale (CBN, CBK, Banque du Ghana)", "Pays XOF : règles de la BCEAO"] },
            { title: "Comparez le total remboursé", bullets: ["Demandez-le par écrit, avec tous les frais", "Exemple : KES 1 000 x 12 semaines = KES 12 000", "Coût = KES 12 000 - KES 10 000 = KES 2 000"] },
            { title: "Dates et caution solidaire", bullets: ["Les dates de remboursement doivent suivre vos revenus", "Pénalités de retard ; bureau de crédit", "Prêts de groupe : vous paierez peut-être pour d'autres"] }
          ],
          sources: [CBN_MFB, CBK_DCP, BOG, BCEAO_SFD],
          tryIt: "Utilisez cet exemple ou une vraie offre : vous empruntez NGN 50 000 et remboursez NGN 4 800 par semaine pendant 12 semaines. Calculez le total remboursé et le coût. Puis écrivez si des paiements chaque semaine conviennent à vos revenus.",
          youCanNow: "calculer le total à rembourser sur un crédit et vérifier que les dates conviennent à vos revenus avant de signer.",
          quickCheck: [
            { objective: "O5", q: "Vous empruntez GHS 1 000 et remboursez GHS 120 par mois pendant 10 mois. Quel est le total remboursé ?", options: ["GHS 1 000", "GHS 1 120", "GHS 1 200", "GHS 120"], answer: 2, why: "120 x 10 = 1 200." },
            { objective: "O5", q: "Dans un prêt de groupe avec caution solidaire, un membre arrête de payer. Que peut-il se passer ?", options: ["Rien", "Les autres membres doivent payer pour ce membre", "Le prêteur annule le crédit", "Seul le président du groupe paie"], answer: 1, why: "La caution solidaire veut dire que les membres couvrent les impayés des autres." }
          ]
        },
        {
          title: "Systèmes de Ponzi, faux prêteurs et votre plan",
          objectives: ["O6", "O2"],
          minutes: 6,
          goal: "Repérer les signes d'un système de Ponzi ou d'un faux prêteur et vérifier un fournisseur sur la liste du régulateur.",
          text: [
            "Un système de Ponzi paie les premiers membres avec l'argent des nouveaux. Il s'effondre toujours, et la plupart des gens perdent leur épargne. Signes d'alerte : promesses de doubler votre argent ou de gains élevés garantis en peu de temps, pression pour recruter des amis et de la famille, récompenses pour chaque recrue, une activité que personne ne sait expliquer, et une promotion dans des groupes WhatsApp, TikTok, Instagram ou Telegram et par des influenceurs. La SEC du Nigeria (l'autorité qui surveille les placements) a mis en garde contre ces systèmes à maintes reprises.",
            "Faux prêteurs et fausses applications de prêt : ils demandent des frais avant de donner le crédit, demandent votre code PIN ou votre mot de passe, exigent l'accès à tous les contacts de votre téléphone, ou menacent et humilient les emprunteurs. Les vrais prêteurs n'ont jamais besoin de votre code PIN.",
            "Vérifiez avant de payer ou de donner des informations. Cherchez le fournisseur sur la liste officielle du régulateur : la SASRA pour les SACCO qui collectent l'épargne et la Banque centrale du Kenya pour les banques de microfinance et les prêteurs numériques au Kenya ; la CBN pour les banques de microfinance et la liste de la FCCPC (l'autorité de protection des consommateurs) des prêteurs numériques approuvés au Nigeria ; la liste des institutions agréées de la Banque du Ghana ; la BCEAO et les ministères des Finances dans les pays XOF. S'il n'est pas sur la liste, ne l'utilisez pas.",
            "Ensuite, terminez votre plan : objectif, total, date, montant par semaine ou par mois, lieu d'épargne, et vos réponses de la fiche de vérification sur le groupe ou l'institution."
          ],
          steps: ["Demandez-vous : promet-il des gains garantis ou très élevés rapidement ?", "Demandez-vous : me paie-t-il pour recruter d'autres personnes ?", "Demandez-vous : veut-il des frais d'abord, ou mon code PIN ?", "Cherchez-le sur la liste officielle du régulateur.", "Absent de la liste, ou un signe d'alerte : ne payez pas.", "Écrivez votre plan d'épargne mensuel et votre fiche de vérification."],
          words: [["Système de Ponzi", "une fraude qui paie les anciens membres avec l'argent des nouveaux jusqu'à ce qu'elle s'effondre."], ["Régulateur", "l'organisme officiel qui agrée et surveille les fournisseurs financiers, comme une banque centrale."], ["Agréé", "officiellement autorisé par le régulateur à exercer cette activité."]],
          slides: [
            { title: "Signes d'un système de Ponzi", bullets: ["\"Doublez votre argent\" ; gains élevés garantis", "Récompenses pour recruter des amis", "Activité que personne n'explique ; poussée sur les réseaux sociaux"] },
            { title: "Signes d'un faux prêteur", bullets: ["Frais avant le crédit", "Demande votre code PIN ou mot de passe", "Veut tous vos contacts ; menace les emprunteurs"] },
            { title: "Vérifiez la liste officielle", bullets: ["Kenya : SASRA, CBK", "Nigeria : CBN, prêteurs approuvés par la FCCPC", "Ghana : Banque du Ghana ; XOF : BCEAO"] },
            { title: "Terminez votre plan", bullets: ["Objectif, total, date, montant par mois", "Lieu d'épargne", "Réponses de la fiche de vérification"] }
          ],
          sources: [SEC_NG, SASRA, CBK_DCP, FCCPC, BOG, BCEAO_SFD],
          tryIt: "Tâche finale : écrivez votre plan d'épargne mensuel avec l'objectif, le total, la date, le montant par semaine ou par mois et l'endroit où vous épargnerez. Ajoutez la fiche de vérification : le règlement du groupe, la façon dont l'argent et les registres sont gardés, l'agrément (vérifié sur la liste du régulateur si besoin) et le coût total de tout crédit.",
          youCanNow: "repérer un système de Ponzi ou un faux prêteur, vérifier un fournisseur sur la liste officielle et suivre votre plan d'épargne écrit.",
          quickCheck: [
            { objective: "O6", q: "Un groupe WhatsApp promet de doubler votre argent en 30 jours et vous paie pour chaque ami que vous amenez. Qu'est-ce que c'est ?", options: ["Un groupe d'épargne", "Une banque de microfinance agréée", "Une tontine rotative", "Les signes d'un système de Ponzi"], answer: 3, why: "Des gains rapides garantis et des récompenses pour recruter sont des signes classiques d'un système de Ponzi." },
            { objective: "O6", q: "Une application de prêt demande des \"frais de dossier\" avant d'envoyer le crédit. Que faites-vous ?", options: ["Ne pas payer ; la vérifier sur la liste du régulateur", "Payer vite avant la fin de l'offre", "Payer la moitié", "Donner votre code PIN à la place"], answer: 0, why: "Des frais avant le crédit sont un signe de faux prêteur ; vérifiez d'abord la liste officielle." }
          ]
        }
      ],
      check: {
        title: "Contrôle des connaissances 2 : Registres, crédits et sécurité",
        questions: [
          { objective: "O4", q: "Que doit-il se passer pour chaque cotisation en réunion ?", options: ["Le trésorier l'emporte chez lui pour la compter", "Elle est comptée devant les membres et notée dans le livret et le registre", "Elle est notée la semaine suivante", "Elle va directement sur le téléphone du président"], answer: 1, why: "Compter et noter devant les membres garde les registres honnêtes." },
          { objective: "O4", q: "Un compte de groupe devrait exiger :", options: ["Seulement la signature du trésorier", "Aucune signature", "Deux signataires ou plus", "Un nouveau code PIN pour chaque membre"], answer: 2, why: "Plus d'un signataire empêche une seule personne de prendre l'argent." },
          { objective: "O5", q: "Quelle est la meilleure façon de comparer deux crédits ?", options: ["L'agent de crédit le plus aimable", "Le taux d'intérêt de la publicité", "L'accord le plus rapide", "Le total à rembourser, avec tous les frais, et des dates adaptées à vos revenus"], answer: 3, why: "Le total remboursé montre le vrai coût ; les dates montrent si vous pouvez payer." },
          { objective: "O6", q: "Où vérifier qu'une SACCO au Kenya peut collecter l'épargne ?", options: ["Sur la liste de la SASRA des SACCO autorisées à collecter l'épargne", "Sur une page Facebook", "Seulement sur le prospectus de la SACCO", "Sur la parole d'un ami"], answer: 0, why: "La SASRA agrée les SACCO qui collectent l'épargne et publie leur liste." },
          { objective: "O6", q: "Lequel est un signe de faux prêteur ?", options: ["Il donne le coût total par écrit", "Il demande votre code PIN ou des frais avant le crédit", "Il est sur la liste de la banque centrale", "Il explique les pénalités de retard"], answer: 1, why: "Les vrais prêteurs n'ont jamais besoin de votre code PIN et ne demandent pas de frais avant de prêter." }
        ]
      }
    }
  ],
  quiz: {
    title: "Quiz final : Groupes d'épargne et microfinance (chamas, AVEC, tontines, esusu)",
    questions: [
      { objective: "O1", q: "Esusu, susu, tontine et gam'eya sont en général :", options: ["Des banques de microfinance", "Des tontines rotatives", "Des applications de prêt", "Des compagnies d'assurance"], answer: 1, why: "Ce sont des noms locaux de groupes où les membres reçoivent la cagnotte à tour de rôle." },
      { objective: "O1", q: "Que fait un groupe d'épargne et de crédit qu'une tontine rotative ne fait pas ?", options: ["Il prête l'épargne aux membres et partage avec les gains", "Il donne la cagnotte à chaque membre à tour de rôle", "Il ne se réunit jamais", "Il n'a pas de règles"], answer: 0, why: "Une AVEC ou une ASCA a un fonds de crédit et partage l'épargne plus les frais de service." },
      { objective: "O1", q: "Lequel est un risque d'une tontine rotative ?", options: ["Elle paie des intérêts élevés", "Elle est agréée par la banque centrale", "Elle a une caisse à trois cadenas", "Les membres qui ont reçu la cagnotte tôt peuvent arrêter de payer"], answer: 3, why: "Les premiers qui arrêtent de payer font du tort aux membres qui attendent encore." },
      { objective: "O2", q: "Il vous faut XOF 60 000 en 12 semaines. Combien par semaine ?", options: ["XOF 6 000", "XOF 12 000", "XOF 4 000", "XOF 5 000"], answer: 3, why: "60 000 divisé par 12 donne 5 000." },
      { objective: "O2", q: "\"Payez-vous d'abord\" veut dire :", options: ["Vous offrir un cadeau", "Payer d'abord le président du groupe", "Emprunter avant d'épargner", "Épargner le jour où l'argent arrive, avant les autres dépenses"], answer: 3, why: "Épargner d'abord permet de le faire avant que l'argent soit dépensé." },
      { objective: "O2", q: "Votre plan demande EGP 900 par mois, mais vous ne pouvez épargner que EGP 600. Que pouvez-vous faire ?", options: ["Emprunter à une application de prêt", "Arrêter d'épargner", "Repousser la date, baisser l'objectif ou réduire les dépenses", "Entrer dans un système qui double l'argent"], answer: 2, why: "Changez la date, l'objectif ou vos dépenses jusqu'à ce que le plan tienne." },
      { objective: "O2", q: "Pourquoi garder l'argent des urgences séparé de l'épargne de votre objectif ?", options: ["Pour qu'un problème soudain ne vide pas votre objectif", "Parce que les banques l'exigent", "Pour payer les amendes du groupe", "Parce qu'il rapporte plus"], answer: 0, why: "Une somme à part pour les urgences protège l'objectif des imprévus." },
      { objective: "O3", q: "Que sont les statuts d'un groupe ?", options: ["Le journal du président", "Une application de prêt", "Les règles écrites que les membres acceptent et suivent", "La caisse"], answer: 2, why: "Les statuts ou le règlement intérieur sont les règles écrites du groupe." },
      { objective: "O3", q: "Quelle règle dit ce qui se passe si le crédit d'un membre n'est pas remboursé ?", options: ["La règle des réunions", "La règle des crédits", "La règle du partage", "Aucune règle"], answer: 1, why: "Les règles de crédit disent qui emprunte, combien et ce qui se passe si un crédit n'est pas remboursé." },
      { objective: "O3", q: "Le règlement d'un groupe ne dit pas comment un membre part. Que faites-vous ?", options: ["Demander au groupe d'ajouter une règle de départ avant d'entrer", "Entrer quand même", "Partir sans prévenir personne", "Prendre votre épargne dans la caisse"], answer: 0, why: "Une règle qui manque est une question à régler avant de confier de l'argent au groupe." },
      { objective: "O4", q: "Qu'est-ce qu'un livret ?", options: ["Le carnet d'un membre qui montre son épargne et ses crédits", "Un passeport", "Une carte bancaire", "Une application de prêt"], answer: 0, why: "Le livret de chaque membre montre sa propre épargne et ses crédits." },
      { objective: "O4", q: "À la fin de chaque réunion :", options: ["Le président garde l'argent chez lui sans le compter", "L'argent compté doit concorder avec le registre", "Les registres sont jetés", "Seul le trésorier lit les totaux"], answer: 1, why: "L'argent et les registres doivent concorder, avec les totaux lus à voix haute." },
      { objective: "O4", q: "Pourquoi lire les totaux à voix haute en réunion ?", options: ["Pour allonger les réunions", "Pour se faire remarquer", "Pour que chaque membre entende et puisse approuver les chiffres", "Parce que c'est la loi partout"], answer: 2, why: "Lire à voix haute permet à chaque membre, même à ceux qui ne savent pas lire, de vérifier les chiffres." },
      { objective: "O5", q: "Vous empruntez MAD 2 000 et remboursez MAD 250 par mois pendant 10 mois. Combien coûte le crédit ?", options: ["MAD 250", "MAD 2 500", "MAD 2 000", "MAD 500"], answer: 3, why: "Total remboursé 2 500 moins 2 000 empruntés = 500." },
      { objective: "O5", q: "Vous gagnez surtout après la récolte ou pendant la haute saison. Que devez-vous vérifier dans un crédit ?", options: ["La couleur du formulaire", "Le modèle de téléphone de l'agent", "Rien", "Les dates de remboursement par rapport à vos revenus"], answer: 3, why: "Les dates de remboursement doivent suivre le moment où l'argent arrive." },
      { objective: "O5", q: "La caution solidaire veut dire :", options: ["Les membres paient pour un membre qui ne rembourse pas", "La banque paie votre crédit", "Personne ne rembourse", "Vous pouvez emprunter deux fois"], answer: 0, why: "Avec la caution solidaire, le groupe couvre les crédits impayés." },
      { objective: "O5", q: "Que doit vous donner un prêteur avant que vous signiez ?", options: ["Un téléphone gratuit", "Seulement le taux d'intérêt", "Le total à rembourser, par écrit, avec tous les frais et les dates", "L'historique de crédit de votre voisin"], answer: 2, why: "Le total et les dates par écrit vous permettent de comparer et de prévoir." },
      { objective: "O6", q: "Lequel est un signe d'alerte d'un système de Ponzi ?", options: ["Un règlement écrit", "Des gains élevés garantis rapidement et des récompenses pour recruter", "Les membres lisent les totaux à voix haute", "Une caisse à trois cadenas"], answer: 1, why: "Des gains rapides garantis et des récompenses pour recruter sont des signes classiques d'un système de Ponzi." },
      { objective: "O6", q: "Au Nigeria, où vérifier si une application de prêt est approuvée ?", options: ["Dans les avis de l'application elle-même", "Dans un groupe WhatsApp", "Dans une vidéo TikTok", "Sur la liste de la FCCPC des prêteurs numériques enregistrés"], answer: 3, why: "La FCCPC publie le statut d'enregistrement des prêteurs numériques." },
      { objective: "O6", q: "Un fournisseur n'est pas sur la liste du régulateur. Que faites-vous ?", options: ["L'utiliser seulement pour de petites sommes", "Payer si un ami le recommande", "Ne pas l'utiliser", "Lui donner votre code PIN pour vérifier"], answer: 2, why: "Les fournisseurs absents de la liste ne sont pas surveillés ; votre argent n'est pas protégé." }
    ]
  },
  // ---- ADDIE : Évaluation ----
  pretest: { title: "Test de départ : que savez-vous déjà ?", from: [0, 3, 5, 7, 10, 13, 15, 17, 18] },
  rubric: {
    mastery: "Atteint ou Dépasse sur chaque ligne. Si une ligne indique Pas encore, corrigez cette partie et réessayez.",
    criteria: [
      { name: "Objectif clair et calcul", objective: "O2", notYet: "Pas de total ni de date, ou le montant par mois n'atteint pas l'objectif.", meets: "Objectif, total, date et montant par semaine ou par mois, avec des calculs justes.", exceeds: "A aussi comparé avec les revenus d'un mauvais mois et garde l'argent des urgences à part." },
      { name: "Le bon type d'épargne", objective: "O1", notYet: "Aucun lieu d'épargne choisi, ou aucune raison.", meets: "Indique où l'argent sera épargné et donne une raison pour laquelle cela convient à l'objectif, et un risque.", exceeds: "Compare deux options (par exemple une tontine rotative et une SACCO) avant de choisir." },
      { name: "Règlement du groupe vérifié", objective: "O3", notYet: "Règlement non consulté, ou moins de quatre des sept points vérifiés.", meets: "Au moins six des sept points vérifiés, avec ceux qui manquent notés comme questions.", exceeds: "Les sept points vérifiés et les règles manquantes soulevées avec le groupe." },
      { name: "Registres et sécurité de l'argent", objective: "O4", notYet: "Ne dit pas comment l'argent et les registres sont gardés.", meets: "Dit comment l'argent est gardé (caisse à trois cadenas ou compte avec deux signataires ou plus) et que les totaux sont lus à voix haute.", exceeds: "Inclut un exemple de tableau de registre qui s'équilibre." },
      { name: "Coût et sécurité du crédit", objective: "O5", notYet: "Un crédit est prévu sans le total à rembourser.", meets: "Tout crédit a le total remboursé, le coût et des dates comparées aux revenus ; ou le plan ne contient pas de crédit.", exceeds: "Note aussi les pénalités de retard, le bureau de crédit et la caution solidaire." },
      { name: "Agrément et arnaques vérifiés", objective: "O6", notYet: "Le plan contient un fournisseur non agréé ou un système avec des signes d'alerte.", meets: "Toute institution qui collecte l'épargne ou prête comme une entreprise a été vérifiée sur la liste officielle du régulateur, et il n'y a aucun signe d'alerte.", exceeds: "Indique la liste utilisée et la date de la vérification." }
    ]
  },
  evaluation: {
    results: [
      "Apprenants qui terminent le cours et réussissent la tâche finale (grille)",
      "Apprenants qui disent, après 30 jours, épargner chaque semaine ou chaque mois selon leur plan",
      "Groupes partenaires qui adoptent un règlement écrit, des livrets et la lecture des totaux à voix haute",
      "Apprenants qui disent avoir refusé un système de Ponzi ou un prêteur non agréé dans les 30 jours"
    ]
  },
  // ---- ADDIE : Mise en œuvre ----
  implementation: {
    materials: [
      "Du papier, un stylo et la calculatrice du téléphone",
      "Les statuts ou le règlement d'un groupe, si l'apprenant fait partie d'un groupe",
      "La liste officielle du régulateur de votre pays (SASRA, CBK, CBN, FCCPC, Banque du Ghana, BCEAO), ouverte une fois sur le téléphone ou imprimée",
      "Environ 60 à 75 minutes au total, en courtes séances"
    ],
    facilitatorNotes: [
      "Idéal à l'intérieur d'une chama, d'une AVEC, d'un susu, d'une tontine ou d'un groupement de femmes qui existe déjà : une leçon par réunion, avec le test de départ à la première réunion.",
      "Utilisez le règlement du groupe lui-même comme texte d'exercice dans la leçon 3, et une réunion fictive avec de faux billets dans la leçon 4.",
      "Ne recommandez aucune banque, SACCO, application ou système en particulier ; apprenez aux apprenants à vérifier eux-mêmes la liste du régulateur.",
      "Vérifiez que les listes des régulateurs sont à jour avant la séance ; les noms et les adresses web peuvent changer.",
      "Ne demandez jamais aux apprenants de partager leurs codes PIN, leurs mots de passe ou le solde réel de leurs comptes dans le groupe."
    ]
  }
};
